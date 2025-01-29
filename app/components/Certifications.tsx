import React from "react";

/**
 * @example [
 *   "Certified Kubernetes Administrator",
 *   "AWS Certified Solutions Architect",
 * ];
 */
type CertificationsProps = {
  certifications: string[];
};

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Certifications</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {certifications.map((cert, index) => (
        <li key={index}>{cert}</li>
      ))}
    </ul>
  </section>
);

export default Certifications;
