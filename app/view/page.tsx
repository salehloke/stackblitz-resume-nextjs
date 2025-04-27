'use client';

import { useResume } from '../context/ResumeContext';
import ResumeStyle3 from '../components/resume-style-3';

const resumeData = {
  "contactInformation": {
    "fullName": "Salehuddin Loke Bin Asri Loke",
    "phone": "+60 17‑205‑7149",
    "email": "lokesaleh@gmail.com",
    "linkedIn": "",
    "portfolio": "",
    "location": {
      "city": "Bandar Enstek",
      "state": "Negeri Sembilan",
      "country": "Malaysia"
    }
  },
  "professionalSummary": "Passionate and energetic electrical‑engineering graduate turned front‑end developer with a strong drive for continuous learning. Self‑taught in modern web technologies and known for proactive problem‑solving, effective communication, and strong time‑management skills. Experienced in Angular 15, state management with NgRx Component Store, and delivering production‑quality code within agile teams.",
  "keySkills": {
    "programming": ["HTML", "CSS", "JavaScript", "TypeScript", "C#"],
    "frameworks": ["Angular 15", "RxJS (Observer pattern)", "Flutter (basic)", "React JS (basic)", "React Native (basic)", "Node.js (basic)"],
    "tools": ["Nx Monorepo", "Jest (unit testing)", "Bootstrap", "Material UI", "Git", "Redmine"],
    "databases": ["MSSQL"]
  },
  "professionalExperience": [
    {
      "jobTitle": "Front‑end Developer",
      "companyName": "Tranglo Sdn. Bhd., Kuala Lumpur",
      "startDate": "2021-08",
      "endDate": "Present",
      "responsibilities": [
        "Lead and mentor a team of two front‑end developers, performing code reviews and enforcing best practices.",
        "Plan sprint scope and deliverables in an agile environment, collaborating closely with product, QA, and project‑management teams.",
        "Review and improve UX wireframes to maintain a user‑centric design focus.",
        "Introduced an online‑IDE‑based onboarding program that reduced developer ramp‑up time.",
        "Standardised NgRx Component Store usage and enhanced backend‑frontend integration workflows."
      ]
    },
    {
      "jobTitle": "Software Engineer",
      "companyName": "Aimflex Systems Sdn. Bhd., Johor Bahru",
      "startDate": "2019-07",
      "endDate": "2021-07",
      "responsibilities": [
        "Served as a full‑stack developer for multiple internal systems (HR, claims, project management, quotation, manufacturing, service reports).",
        "Handled requirements gathering, UI design, development, UAT, and maintenance in a waterfall SDLC.",
        "Built Windows services for email notifications, PDF barcode printing, and OCR.",
        "Introduced Flutter and led development of an online service‑report mobile app.",
        "Worked remotely while maintaining timely delivery, tracked via Redmine."
      ]
    },
    {
      "jobTitle": "Game Developer (Internship)",
      "companyName": "Techcare Innovation, Johor",
      "startDate": "2018-01",
      "endDate": "2018-03",
      "responsibilities": [
        "Developed a Unity‑based rehabilitation game that interfaced with a custom balance‑board API.",
        "The project won a Merit Award at the Asian Pacific ICT Awards 2018 and was a finalist at the Youth Innovation & Showcase Awards 2019."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Electrical Engineering (Mechatronic)",
      "institutionName": "Universiti Teknologi Malaysia",
      "graduationDate": "2019-07",
      "achievements": [
        "CGPA 3.26",
        "Featured in UTM News for APICTA 2018 Merit Award and Youth Innovation 2019 finalist",
        "University volleyball representative (MASUM & SUKIPT)",
        "Final‑year project: Badminton Agility Training System"
      ]
    },
    {
      "degree": "Diploma in Electrical Engineering (Mechatronic)",
      "institutionName": "Universiti Teknologi Malaysia, Kuala Lumpur",
      "graduationDate": "2016-07",
      "achievements": [
        "CGPA 3.34",
        "Active member of the Robotics Club and Hovercraft Innovation Competition",
        "UTM volleyball team participant"
      ]
    }
  ],
  "certifications": [
    "UI/UX Design Training – Iverson (2022)",
    "Google Cloud Professional Cloud Architect Bootcamp (2022)"
  ],
  "projects": [
    {
      "name": "VR Game for Rehabilitation",
      "description": "Unity‑based game that integrates a balance‑board micro‑controller to gamify physiotherapy exercises.",
      "technologies": ["Unity", "C#", "Custom Hardware API"],
      "outcomes": "Received a Merit Award at Malaysia APICTA 2018 and represented Malaysia at the Asia Pacific ICT Awards 2018."
    },
    {
      "name": "Service Report Mobile App",
      "description": "Flutter mobile application enabling technicians to create and submit service reports in real time.",
      "technologies": ["Flutter", "Dart", "REST API"],
      "outcomes": "Streamlined the service‑reporting process and reduced paperwork for field engineers."
    },
    {
      "name": "Google Form Clone (Proof of Concept)",
      "description": "Angular POC demonstrating dynamic form creation and validation similar to Google Forms.",
      "technologies": ["Angular 15", "RxJS", "Bootstrap"],
      "outcomes": "Used internally to showcase UI improvements and coding standards."
    }
  ],
  "volunteerExperience": [
    {
      "role": "Vice‑President, Sports Club",
      "organization": "Tranglo Sdn. Bhd.",
      "description": "Organised sports events and fostered employee engagement across the company.",
      "startDate": "2023-01",
      "endDate": "2023-12"
    },
    {
      "role": "Industry Speaker",
      "organization": "CAIRO UTM",
      "description": "Delivered a talk titled “The Importance of Identity Capital” to university students.",
      "startDate": "2022-09",
      "endDate": "2022-09"
    }
  ],
  "additionalInformation": {
    "languages": ["English (well‑written and spoken)", "Bahasa Melayu (excellent)"],
    "hobbies": ["Volleyball", "Innovation competitions", "Learning new frameworks"]
  }
};



export default function ViewResume() {
  return (
    <main className="p-4">
      <div className="print:p-4 print:bg-white print:text-black">
        <ResumeStyle3 data={resumeData} />
      </div>
    </main>
  );
}
