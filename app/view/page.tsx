'use client';

import { useResume } from '../context/ResumeContext';

export default function ViewResume() {
  const { resumeData } = useResume();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">{resumeData.personalInfo.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{resumeData.personalInfo.title}</h2>
        
        <div className="flex gap-4 text-sm text-gray-600 mb-6">
          <span>{resumeData.personalInfo.email}</span>
          <span>{resumeData.personalInfo.phone}</span>
          <span>{resumeData.personalInfo.location}</span>
        </div>
        
        <p className="text-gray-700 mb-8">{resumeData.personalInfo.summary}</p>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{exp.position} at {exp.company}</h4>
              <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{edu.school}</h4>
              <p>{edu.degree} in {edu.field}</p>
              <p className="text-sm text-gray-600">Graduated: {edu.graduationDate}</p>
            </div>
          ))}
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          {resumeData.skills.map((skillGroup, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{skillGroup.category}</h4>
              <p>{Array.isArray(skillGroup.items) ? skillGroup.items.join(", ") : skillGroup.items}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
