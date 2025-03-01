'use client';

import { ResumeData } from '../types/resume';

// This would typically come from an API or database
const mockResumeData: ResumeData = {
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

export default function ViewResume() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">{mockResumeData.personalInfo.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{mockResumeData.personalInfo.title}</h2>
        
        <div className="flex gap-4 text-sm text-gray-600 mb-6">
          <span>{mockResumeData.personalInfo.email}</span>
          <span>{mockResumeData.personalInfo.phone}</span>
          <span>{mockResumeData.personalInfo.location}</span>
        </div>
        
        <p className="text-gray-700 mb-8">{mockResumeData.personalInfo.summary}</p>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          {mockResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{exp.position} at {exp.company}</h4>
              <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          {mockResumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{edu.school}</h4>
              <p>{edu.degree} in {edu.field}</p>
              <p className="text-sm text-gray-600">Graduated: {edu.graduationDate}</p>
            </div>
          ))}
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          {mockResumeData.skills.map((skillGroup, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{skillGroup.category}</h4>
              <p>{skillGroup.items.join(", ")}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
