import React from "react";

/**
 * @example [
 *   {
 *     role: "Volunteer Teacher",
 *     organization: "Local Community Center",
 *     description: "Taught computer basics to underprivileged children.",
 *     startDate: "June 2021",
 *     endDate: "August 2021",
 *   },
 *   {
 *     role: "Event Organizer",
 *     organization: "Tech for Good",
 *     description: "Organized hackathons to promote technology solutions for social causes.",
 *     startDate: "January 2020",
 *     endDate: "December 2020",
 *   },
 * ];
 */
type VolunteerExperienceProps = {
  experiences: {
    role: string;
    organization: string;
    description: string;
    startDate: string;
    endDate?: string;
  }[];
};

const VolunteerExperience: React.FC<VolunteerExperienceProps> = ({ experiences }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Volunteer Experience</h2>
    {experiences.map((vol, index) => (
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
);

export default VolunteerExperience;
