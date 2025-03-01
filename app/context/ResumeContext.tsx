'use client';

import React, { createContext, useContext, useEffect } from 'react';
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
  isDirty: boolean;
  setIsDirty: (dirty: boolean) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resumeData, setResumeData] = useLocalStorage<ResumeData>('resumeData', defaultResumeData);
  const [isDirty, setIsDirty] = useLocalStorage<boolean>('resumeIsDirty', false);

  // Handle beforeunload event to warn user about unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        const message = 'You have unsaved changes. Are you sure you want to leave?';
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  // Ensure skills.items is always an array
  const updateResume = (data: ResumeData) => {
    const sanitizedData = {
      ...data,
      skills: (data.skills || []).map(skill => ({
        ...skill,
        items: Array.isArray(skill.items) 
          ? skill.items 
          : typeof skill.items === 'string'
            ? (skill.items as string).split(',').map(item => item.trim()).filter(Boolean)
            : []
      }))
    };
    setResumeData(sanitizedData);
    setIsDirty(false);
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResume, isDirty, setIsDirty }}>
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
