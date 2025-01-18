"use client"

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

type ContactInformation = {
  fullName: string;
  phone: string;
  email: string;
  linkedIn: string;
  portfolio: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
};

type KeySkills = {
  [category: string]: string[];
};

type ProfessionalExperience = {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
};

type Education = {
  degree: string;
  institutionName: string;
  graduationDate: string;
  achievements?: string[];
};

type Project = {
  name: string;
  description: string;
  technologies: string[];
  outcomes: string;
};

type VolunteerExperience = {
  role: string;
  organization: string;
  description: string;
  startDate: string;
  endDate?: string;
};

type AdditionalInformation = {
  languages: string[];
  hobbies: string[];
};

type ResumeData = {
  contactInformation: ContactInformation;
  professionalSummary: string;
  keySkills: KeySkills;
  professionalExperience: ProfessionalExperience[];
  education: Education[];
  certifications: string[];
  projects: Project[];
  volunteerExperience: VolunteerExperience[];
  additionalInformation: AdditionalInformation;
};

type ResumeProps = {
  data: ResumeData;
};

const Resume: React.FC<ResumeProps> = ({ data }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const reactToPrintFn = useReactToPrint({
      contentRef: contentRef,
      documentTitle: `${data.contactInformation.fullName}_Resume`,
    });

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <button
        onClick={() => reactToPrintFn()}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Print PDF
      </button>
      <div
        ref={contentRef}
        className="p-10 bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-3xl border border-gray-300"
      >
        {/* Contact Information */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {data.contactInformation.fullName}
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            {data.contactInformation.phone} | {data.contactInformation.email}
          </p>
          <p className="text-gray-600">
            <a href={data.contactInformation.linkedIn} className="text-blue-500 font-semibold hover:underline">
              LinkedIn
            </a>
            {" | "}
            <a href={data.contactInformation.portfolio} className="text-blue-500 font-semibold hover:underline">
              Portfolio
            </a>
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{data.professionalSummary}</p>
        </section>

        {/* Key Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">Key Skills</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3 text-lg">
            {Object.keys(data.keySkills).map((category) => (
              <li key={category}>
                <strong className="text-gray-900 capitalize">{category}:</strong> {data.keySkills[category].join(", ")}
              </li>
            ))}
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">
            Professional Experience
          </h2>
          {data.professionalExperience.map((job, index) => (
            <div key={index} className="mt-8">
              <h3 className="font-semibold text-2xl text-gray-800">
                {job.jobTitle} - {job.companyName}
              </h3>
              <p className="text-gray-600 text-md mb-4">
                {job.startDate} - {job.endDate || "Present"}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mt-8">
              <h3 className="font-semibold text-2xl text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600 text-md">
                {edu.institutionName} ({edu.graduationDate})
              </p>
              {edu.achievements && (
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4 text-lg">
                  {edu.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mt-8">
              <h3 className="font-semibold text-2xl text-gray-800">{project.name}</h3>
              <p className="text-gray-700 mt-4 text-lg">{project.description}</p>
              <p className="text-gray-600 text-md mt-2">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <p className="text-gray-600 text-md mt-2">
                <strong>Outcomes:</strong> {project.outcomes}
              </p>
            </div>
          ))}
        </section>

        {/* Volunteer Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">Volunteer Experience</h2>
          {data.volunteerExperience.map((vol, index) => (
            <div key={index} className="mt-8">
              <h3 className="font-semibold text-2xl text-gray-800">{vol.role}</h3>
              <p className="text-gray-600 text-md mb-2">{vol.organization}</p>
              <p className="text-gray-700 mb-4 text-lg">{vol.description}</p>
              <p className="text-gray-600 text-md">
                {vol.startDate} - {vol.endDate || "Present"}
              </p>
            </div>
          ))}
        </section>

        {/* Additional Information */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-300 pb-2">
            Additional Information
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            <strong>Languages:</strong> {data.additionalInformation.languages.join(", ")}
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            <strong>Hobbies:</strong> {data.additionalInformation.hobbies.join(", ")}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
