'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ResumeData } from '../types/resume';
import { useLocalStorage } from '../hooks/useLocalStorage';

const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    location: "San Francisco, CA",
    summary: "Experienced full stack developer with a passion for building scalable web applications."
  },
  experience: [
    {
      company: "Tech Corp",
      position: "Senior Developer",
      startDate: "2020-01",
      endDate: "Present",
      description: "Led development of multiple web applications using React and Node.js."
    }
  ],
  education: [
    {
      school: "University of Technology",
      degree: "Bachelor's",
      field: "Computer Science",
      graduationDate: "2019"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python"]
    }
  ]
};

interface ResumeContextType {
  resumeData: ResumeData;
  updateResume: (data: ResumeData) => void;
  saveResume: (data: ResumeData) => void;
  isDirty: boolean;
  setIsDirty: (dirty: boolean) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [resumeData, setResumeData] = useLocalStorage<ResumeData>('resumeData', defaultResumeData);
  const [isDirty, setIsDirty] = useLocalStorage<boolean>('resumeIsDirty', false);

  // Initialize the context after mounting
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Handle beforeunload event to warn user about unsaved changes
  useEffect(() => {
    if (!isInitialized) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        const message = 'You have unsaved changes. Are you sure you want to leave?';
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty, isInitialized]);

  // Validate and sanitize resume data
  const validateResumeData = (data: ResumeData): ResumeData => {
    return {
      personalInfo: {
        name: data.personalInfo?.name || '',
        title: data.personalInfo?.title || '',
        email: data.personalInfo?.email || '',
        phone: data.personalInfo?.phone || '',
        location: data.personalInfo?.location || '',
        summary: data.personalInfo?.summary || ''
      },
      experience: (data.experience || []).map(exp => ({
        company: exp.company || '',
        position: exp.position || '',
        startDate: exp.startDate || '',
        endDate: exp.endDate || '',
        description: exp.description || ''
      })),
      education: (data.education || []).map(edu => ({
        school: edu.school || '',
        degree: edu.degree || '',
        field: edu.field || '',
        graduationDate: edu.graduationDate || ''
      })),
      skills: (data.skills || []).map(skill => ({
        category: skill.category || '',
        items: Array.isArray(skill.items) 
          ? skill.items.filter((item): item is string => typeof item === 'string')
          : typeof skill.items === 'string'
            ? (skill.items as string).split(',').map((item: string) => item.trim()).filter(Boolean)
            : []
      }))
    };
  };

  // Update resume with validation
  const updateResume = (data: ResumeData) => {
    if (!isInitialized) return;

    try {
      const sanitizedData = validateResumeData(data);
      setResumeData(sanitizedData);
      setIsDirty(false);
    } catch (error) {
      console.error('Error updating resume:', error);
    }
  };

  // Save resume to MongoDB
  const saveResume = async (data: ResumeData) => {
    try {
      const response = await fetch('/api/resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save resume');
      }

      const savedResume = await response.json();
      setResumeData(savedResume);
      setIsDirty(false);
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };

  // Fetch resume from MongoDB on mount
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch('/api/resume');
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setResumeData(data);
          }
        }
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, []);

  // Don't render children until initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <ResumeContext.Provider value={{ resumeData, updateResume, saveResume, isDirty, setIsDirty }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
