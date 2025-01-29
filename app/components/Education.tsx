import React from "react";

/**
 * @example [
 *   {
 *     degree: "Bachelor of Science in Computer Science",
 *     institutionName: "University of Example",
 *     graduationDate: "May 2020",
 *     achievements: [
 *       "Graduated with honors",
 *       "Member of the Dean's List",
 *     ],
 *   }
 * ];
 */
type EducationProps = {
  education: {
    degree: string;
    institutionName: string;
    graduationDate: string;
    achievements?: string[];
  }[];
};

const Education: React.FC<EducationProps> = ({ education }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
    {education.map((edu, index) => (
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
);

export default Education;
