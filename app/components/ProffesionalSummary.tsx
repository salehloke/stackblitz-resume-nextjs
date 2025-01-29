import React from "react";

/**
 * @example {
 *   summary: "Experienced software developer with expertise in React, TypeScript, and Node.js, passionate about building scalable web applications."
 * };
 */
type ProfessionalSummaryProps = {
  summary: string;
};

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Professional Summary</h2>
    <p className="text-gray-700 leading-relaxed">{summary}</p>
  </section>
);

export default ProfessionalSummary;
