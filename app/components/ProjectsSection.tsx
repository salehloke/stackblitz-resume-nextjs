import React from "react";

/**
 * @example [
 *   {
 *     name: "Personal Portfolio",
 *     description: "A portfolio website to showcase projects and skills.",
 *     technologies: ["React", "TypeScript", "Tailwind CSS"],
 *     outcomes: "Increased job interview requests by 40%.",
 *   },
 *   {
 *     name: "E-commerce Platform",
 *     description: "An online store for various products.",
 *     technologies: ["Next.js", "Node.js", "MongoDB"],
 *     outcomes: "Generated $50,000 in revenue in the first year.",
 *   },
 * ];
 */
type ProjectsSectionProps = {
  projects: {
    name: string;
    description: string;
    technologies: string[];
    outcomes: string;
  }[];
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Projects</h2>
    {projects.map((project, index) => (
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
);

export default ProjectsSection;
