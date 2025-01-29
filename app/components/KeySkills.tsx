import React from "react";

/**
 * @example {
 *   technical: ["JavaScript", "React", "TypeScript"],
 *   softSkills: ["Team Leadership", "Effective Communication"],
 * };
 */
type KeySkillsProps = {
  keySkills: {
    [category: string]: string[];
  };
};

const KeySkills: React.FC<KeySkillsProps> = ({ keySkills }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Key Skills</h2>
    <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
      {Object.keys(keySkills).map((category) => (
        <li key={category}>
          <strong className="text-gray-900">{category.charAt(0).toUpperCase() + category.slice(1)}:</strong> {keySkills[category].join(", ")}
        </li>
      ))}
    </ul>
  </section>
);

export default KeySkills;
