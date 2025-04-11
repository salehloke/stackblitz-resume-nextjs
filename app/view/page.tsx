'use client';

import { useResume } from '../context/ResumeContext';
import ResumeStyle3 from '../components/resume-style-3';

const resumeData = {
  "contactInformation": {
    "fullName": "Salehuddin Loke Bin Asri Loke",
    // "phone": "+60 17‑205‑7149",
    // "email": "lokesaleh@gmail.com",
    "linkedIn": "",
    "portfolio": "",
    "location": {
      "city": "Bandar Enstek",
      "state": "Negeri Sembilan",
      "country": "Malaysia"
    }
  },
  "professionalSummary": "Highly passionate and energetic Electrical‑Engineering graduate turned Front‑end Developer with a strong drive for continuous learning. Self‑taught in modern web technologies and known for proactive problem‑solving, effective communication, and solid time‑management skills. Experienced in Angular 15, state‑management with NgRx Component‑Store, and delivering production‑quality code within agile teams.",
  "keySkills": {
    "programming": ["HTML", "CSS", "JavaScript", "TypeScript", "C#"],
    "frameworks": ["Angular 15", "RxJS (Observer pattern)", "Flutter (basic)", "React JS (basic)", "React Native (basic)", "Node.js (basic)"],
    "tools": ["Nx Monorepo", "Jest (unit testing)", "Bootstrap", "Material UI", "Git", "Redmine"],
    "databases": ["MSSQL"]
  },
  "professionalExperience": [
    {
      "jobTitle": "Frontend Developer",
      "companyName": "Tranglo Sdn. Bhd., Kuala Lumpur",
      "startDate": "2021-08",
      "endDate": "Present",
      "responsibilities": [
        "Lead and mentor a team of 2 front‑end developers, performing code reviews and enforcing best practices.",
        "Plan sprint scope and deliverables in an agile environment, collaborating closely with product, QA, and project management.",
        "Review and improve UX wire‑frames to maintain a user‑centric design focus.",
        "Introduced an online‑IDE–based onboarding programme that reduced developer ramp‑up time.",
        "Standardised NgRx Component‑Store usage and improved BE–FE integration workflows."
      ]
    },
    {
      "jobTitle": "Software Engineer",
      "companyName": "Aimflex Systems Sdn. Bhd., Johor Bahru",
      "startDate": "2019-07",
      "endDate": "2021-07",
      "responsibilities": [
        "Full‑stack developer for multiple internal systems (HR, Claims, Project Management, Quotation, Manufacturing, Service Reports).",
        "Handled requirements, UI design, development, UAT and maintenance in a waterfall SDLC.",
        "Built Windows services for email notifications, PDF barcode printing and OCR.",
        "Introduced Flutter and led development of an online Service Report mobile app.",
        "Worked remotely while maintaining timely delivery tracked via Redmine."
      ]
    },
    {
      "jobTitle": "Game Developer (Internship)",
      "companyName": "Techcare Innovation, Johor",
      "startDate": "2018-01",
      "endDate": "2018-03",
      "responsibilities": [
        "Developed a Unity‑based rehabilitation game that interfaced with a custom balance‑board API.",
        "Project won Merit at the Asian Pacific ICT Awards 2018 and became a finalist at Youth Innovation & Showcase Awards 2019."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Electrical Engineering (Mechatronic)",
      "institutionName": "Universiti Teknologi Malaysia",
      "graduationDate": "2019-07",
      "achievements": [
        "CGPA 3.26",
        "Featured in UTM News for APICTA 2018 Merit and Youth Innovation 2019 finalist",
        "University volleyball representative (MASUM & SUKIPT)",
        "Final‑year project: Badminton Agility Training System"
      ]
    },
    {
      "degree": "Diploma in Electrical Engineering (Mechatronic)",
      "institutionName": "Universiti Teknologi Malaysia, Kuala Lumpur",
      "graduationDate": "2016-07",
      "achievements": [
        "CGPA 3.34",
        "Active member of Robotics Club and Hovercraft Innovation competition",
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
      "description": "Unity‑based game integrating a balance‑board micro‑controller to gamify physiotherapy exercises.",
      "technologies": ["Unity", "C#", "Custom Hardware API"],
      "outcomes": "Merit award at Malaysia APICTA 2018 and Malaysia representative at Asia Pacific ICT Awards 2018."
    },
    {
      "name": "Service Report Mobile App",
      "description": "Flutter mobile application allowing technicians to create and submit service reports in real time.",
      "technologies": ["Flutter", "Dart", "REST API"],
      "outcomes": "Streamlined service reporting process and reduced paperwork for field engineers."
    },
    {
      "name": "Google Form Clone (Proof of Concept)",
      "description": "Angular POC demonstrating dynamic form creation and validation similar to Google Forms.",
      "technologies": ["Angular 15", "RxJS", "Bootstrap"],
      "outcomes": "Used internally to showcase UI improvements and coding standards."
    }
  ],
  "volunteerExperience": [
    {
      "role": "Vice‑President, Sports Club",
      "organization": "Tranglo Sdn. Bhd.",
      "description": "Organised sports events and fostered employee engagement across the company.",
      "startDate": "2023-01",
      "endDate": "2023-12"
    },
    {
      "role": "Industry Speaker",
      "organization": "CAIRO UTM",
      "description": "Gave a talk titled “The Importance of Identity Capital” to university students.",
      "startDate": "2022-09",
      "endDate": "2022-09"
    }
  ],
  "additionalInformation": {
    "languages": ["English (Well‑written & spoken)", "Bahasa Melayu (Excellent)"],
    "hobbies": ["Volleyball", "Innovation Competitions", "Learning new frameworks"]
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
