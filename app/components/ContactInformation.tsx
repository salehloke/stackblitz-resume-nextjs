import React from "react";

/**
 * @example {
 *   fullName: "John Doe",
 *   phone: "(123) 456-7890",
 *   email: "johndoe@example.com",
 *   linkedIn: "https://linkedin.com/in/johndoe",
 *   portfolio: "https://johndoe.dev"
 * };
 */
type ContactInformationProps = {
  contactInformation: {
    fullName: string;
    phone: string;
    email: string;
    linkedIn: string;
    portfolio: string;
  };
};

const ContactInformation: React.FC<ContactInformationProps> = ({ contactInformation }) => (
  <header className="text-center mb-8">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{contactInformation.fullName}</h1>
    <p className="text-gray-700 text-lg">
      {contactInformation.phone} | {contactInformation.email}
    </p>
    <p className="text-gray-600">
      <a href={contactInformation.linkedIn} className="text-blue-600 hover:underline">
        LinkedIn
      </a>{" "}|{" "}
      <a href={contactInformation.portfolio} className="text-blue-600 hover:underline">
        Portfolio
      </a>
    </p>
  </header>
);

export default ContactInformation;
