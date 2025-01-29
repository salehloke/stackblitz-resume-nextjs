import React from "react";

/**
 * @example [
 *   {
 *     jobTitle: "Software Developer",
 *     companyName: "TechCorp Inc.",
 *     startDate: "January 2020",
 *     endDate: "Present",
 *     responsibilities: [
 *       "Developed and maintained web applications",
 *       "Collaborated with cross-functional teams",
 *       "Implemented responsive UI designs",
 *     ],
 *   }
 * ];
 */
type ProfessionalExperienceProps = {
  experiences: {
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
  }[];
};

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({ experiences }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Professional Experience</h2>
    {experiences.map((job, index) => (
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
);

export default ProfessionalExperience;
