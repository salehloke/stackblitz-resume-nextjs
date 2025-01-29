import React from "react";

/**
 * @example {
 *   languages: ["English", "Spanish", "Mandarin"],
 *   hobbies: ["Hiking", "Reading", "Gaming"],
 * };
 */
type AdditionalInformationProps = {
  additionalInformation: {
    languages: string[];
    hobbies: string[];
  };
};

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({ additionalInformation }) => (
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Additional Information</h2>
    <p className="text-gray-700 mt-2">
      <strong>Languages:</strong> {additionalInformation.languages.join(", ")}
    </p>
    <p className="text-gray-700 mt-2">
      <strong>Hobbies:</strong> {additionalInformation.hobbies.join(", ")}
    </p>
  </section>
);

export default AdditionalInformation;
