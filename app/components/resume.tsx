import React from "react";
import ContactInformation from "./ContactInformation";
import KeySkills from "./KeySkills";
import Education from "./Education";
import Certifications from "./Certifications";
import ProjectsSection from "./ProjectsSection";
import VolunteerExperience from "./VolunteerExperience";
import AdditionalInformation from "./AdditionalInformation";
import ProfessionalSummary from "./ProffesionalSummary";
import ProfessionalExperience from "./ProffesionalExperience";

type ResumeData = {
  contactInformation: {
    fullName: string;
    phone: string;
    email: string;
    linkedIn: string;
    portfolio: string;
  };
  professionalSummary: string;
  keySkills: {
    [category: string]: string[];
  };
  professionalExperience: {
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    institutionName: string;
    graduationDate: string;
    achievements?: string[];
  }[];
  certifications: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    outcomes: string;
  }[];
  volunteerExperience: {
    role: string;
    organization: string;
    description: string;
    startDate: string;
    endDate?: string;
  }[];
  additionalInformation: {
    languages: string[];
    hobbies: string[];
  };
};

type ResumeProps = {
  data: ResumeData;
};

const Resume: React.FC<ResumeProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-lg border border-gray-200">
      <ContactInformation contactInformation={data.contactInformation} />
      <ProfessionalSummary summary={data.professionalSummary} />
      <KeySkills keySkills={data.keySkills} />
      <ProfessionalExperience experiences={data.professionalExperience} />
      <Education education={data.education} />
      <Certifications certifications={data.certifications} />
      <ProjectsSection projects={data.projects} />
      <VolunteerExperience experiences={data.volunteerExperience} />
      <AdditionalInformation additionalInformation={data.additionalInformation} />
    </div>
  );
};

export default Resume;
