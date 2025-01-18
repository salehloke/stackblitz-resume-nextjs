import React from "react";

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
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-lg border border-gray-200">
      {/* Contact Information */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{data.contactInformation.fullName}</h1>
        <p className="text-gray-700 text-lg">
          {data.contactInformation.phone} | {data.contactInformation.email}
        </p>
        <p className="text-gray-600">
          <a href={data.contactInformation.linkedIn} className="text-blue-600 hover:underline">
            LinkedIn
          </a>{" "}
          | {" "}
          <a href={data.contactInformation.portfolio} className="text-blue-600 hover:underline">
            Portfolio
          </a>
        </p>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{data.professionalSummary}</p>
      </section>

      {/* Key Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Key Skills</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
          {Object.keys(data.keySkills).map((category) => (
            <li key={category}>
              <strong className="text-gray-900">{category.charAt(0).toUpperCase() + category.slice(1)}:</strong> {data.keySkills[category].join(", ")}
            </li>
          ))}
        </ul>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Professional Experience</h2>
        {data.professionalExperience.map((job, index) => (
          <div key={index} className="mt-6">
            <h3 className="font-semibold text-lg text-gray-800">
              {job.jobTitle} - {job.companyName}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              {job.startDate} - {job.endDate || "Present"}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mt-6">
            <h3 className="font-semibold text-lg text-gray-800">{edu.degree}</h3>
            <p className="text-gray-600 text-sm">
              {edu.institutionName} ({edu.graduationDate})
            </p>
            {edu.achievements && (
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                {edu.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {data.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="mt-6">
            <h3 className="font-semibold text-lg text-gray-800">{project.name}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <p className="text-gray-600 text-sm mt-1">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              <strong>Outcomes:</strong> {project.outcomes}
            </p>
          </div>
        ))}
      </section>

      {/* Volunteer Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Volunteer Experience</h2>
        {data.volunteerExperience.map((vol, index) => (
          <div key={index} className="mt-6">
            <h3 className="font-semibold text-lg text-gray-800">{vol.role}</h3>
            <p className="text-gray-600 text-sm mb-2">{vol.organization}</p>
            <p className="text-gray-700 mb-2">{vol.description}</p>
            <p className="text-gray-600 text-sm">
              {vol.startDate} - {vol.endDate || "Present"}
            </p>
          </div>
        ))}
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Additional Information</h2>
        <p className="text-gray-700 mt-2">
          <strong>Languages:</strong> {data.additionalInformation.languages.join(", ")}
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Hobbies:</strong> {data.additionalInformation.hobbies.join(", ")}
        </p>
      </section>
    </div>
  );
};

export default Resume;
