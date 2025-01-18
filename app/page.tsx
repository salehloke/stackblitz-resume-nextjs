import Image from 'next/image'
import ResumeHeader from './components/header'
import ResumeIntro from './components/intro'
import Resume from './components/resume'
import ResumeStyle2 from './components/resume-style-2'
import ResumeStyle3 from './components/resume-style-3'
import 'tailwindcss/tailwind.css';


const resumeData = {
  "contactInformation": {
    "fullName": "John Doe",
    "phone": "+1 123-456-7890",
    "email": "john.doe@example.com",
    "linkedIn": "https://www.linkedin.com/in/johndoe",
    "portfolio": "https://johndoe.dev",
    "location": {
      "city": "San Francisco",
      "state": "California",
      "country": "USA"
    }
  },
  "professionalSummary": "Experienced software engineer with 5+ years of expertise in developing scalable web applications using modern technologies such as React, Node.js, and Docker. Passionate about creating intuitive user experiences and optimizing backend services.",
  "keySkills": {
    "programming": ["JavaScript", "TypeScript", "Python", "Go"],
    "frameworks": ["React", "Next.js", "Node.js", "Express"],
    "tools": ["Docker", "Kubernetes", "Git", "Jenkins", "CI/CD"],
    "databases": ["PostgreSQL", "MongoDB", "Redis"]
  },
  "professionalExperience": [
    {
      "jobTitle": "Senior Software Engineer",
      "companyName": "Tech Solutions Inc.",
      "startDate": "2020-06",
      "endDate": "Present",
      "responsibilities": [
        "Designed and implemented a microservices architecture, reducing system downtime by 25%.",
        "Led a team of 5 engineers to deliver a feature-rich web application with 10,000+ daily active users.",
        "Optimized API performance, improving response times by 40%."
      ]
    },
    {
      "jobTitle": "Software Engineer",
      "companyName": "Innovatech",
      "startDate": "2017-05",
      "endDate": "2020-05",
      "responsibilities": [
        "Developed a React-based front-end application used by 50,000 users.",
        "Collaborated with cross-functional teams to integrate third-party APIs and services.",
        "Implemented CI/CD pipelines, reducing deployment time by 30%."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institutionName": "University of California, Berkeley",
      "graduationDate": "2017-05",
      "achievements": ["Graduated with Honors", "GPA: 3.8/4.0"]
    }
  ],
  "certifications": [
    "AWS Certified Solutions Architect",
    "Certified Kubernetes Administrator (CKA)"
  ],
  "projects": [
    {
      "name": "E-commerce Platform",
      "description": "Developed a full-stack e-commerce platform with features like user authentication, product listings, and a payment gateway.",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe API"],
      "outcomes": "Achieved 5,000 monthly active users within the first 3 months."
    },
    {
      "name": "Real-time Chat Application",
      "description": "Built a real-time chat application supporting text, media, and group conversations.",
      "technologies": ["Socket.IO", "React", "Redis"],
      "outcomes": "Handled concurrent usage of 1,000+ active users with no latency issues."
    }
  ],
  "volunteerExperience": [
    {
      "role": "Technical Mentor",
      "organization": "Code for Good",
      "description": "Mentored high school students in building projects for social good using Python and JavaScript.",
      "startDate": "2019-01",
      "endDate": "2021-12"
    }
  ],
  "additionalInformation": {
    "languages": ["English (Native)", "Spanish (Intermediate)"],
    "hobbies": ["Hiking", "Photography", "Open-source Contributions"]
  }
}


export default function Home() {
  return (
    <main>
      {/* <ResumeHeader />
      <div className='divider'>

      </div>
      <ResumeIntro /> */}
      {/* <Resume data={resumeData}  /> */}
      {/* <ResumeStyle2 data={resumeData}  /> */}
      <div className="print:p-4 print:bg-white print:text-black">
        <ResumeStyle3 data={resumeData} />
        {/* Your content */}
      </div>

    </main>
  )
}
