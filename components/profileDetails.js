import { BASE_PATH } from "../utils/config"; // adjust path if needed

// Timelines are written oldest -> newest. The modal draws them bottom -> top.
export const profileDetails = [
  {
    icon: `${BASE_PATH}/icons/education.png`,
    label: "Education",
    title: "B.Sc.Eng (Hons) in Computer Engineering",
    sub: "Second Class Lower Division",
    accent: "from-blue-500 via-cyan-500 to-sky-500",
    description:
      "Built a strong academic foundation in software engineering, hardware systems, computer vision, and intelligent applications, while gaining hands-on exposure to  AI/ML, DevOps, cloud technologies, robotics and electronics. Developed a problem-solving mindset focused on delivering real-world product impact.",
    meta: [
      { label: "Degree", value: "B.Sc.Eng (Hons) in Computer Engineering" },
      { label: "Class", value: "Second Class Lower Division" },
      { label: "GPA", value: "3.17 / 4.0" },
      { label: "Focus", value: "AI/ML, Web, Cloud & Robotics" }
    ],
    timeline: [
      {
        period: "2016 – 2019",
        title: "G.C.E. Advanced Level",
        org: "Sri Sumangala Girls' School, Panadura",
        description: "Completed the Advanced Level examination in 2019 with ABB.",
        tags: ["Physical Science stream"] 
      },
      {
        period: "2021 – 2025",
        title: "B.Sc.Eng (Hons) in Computer Engineering",
        org: "Faculty of Engineering, University of Ruhuna",
        description:
          "Studied software engineering, embedded systems, computer vision and intelligent applications, turning theory into portfolio-ready projects.",
        points: [
          "Final-year project Emoify: FER, HCI and Wellness Monitoring with a social robot",
          "1st Runner up at Mobitel Codeblast, Finalist at FYP Arena 2025 and published at IEEE ICIIS 2025"
        ],
        tags: ["AI", "Web", "Embedded", "GPA 3.17"],
        highlight: true
      },
      {
        period: "2024 – 2026",
        title: "Certifications & Courses",
        org: "Oracle · AWS · SLIIT · University of Moratuwa",
        points: [
          "AWS Certified Cloud Practitioner and AI Practitioner (2026)",
          "Agentic AI Certified Foundations Associate, Oracle (2026)",
          "Oracle Cloud Infrastructure AI Foundations Associate (2025)",
          "AI/ML Engineer, stages 1 & 2, SLIIT",
          "Web Development 1 & 2, Centre for Open & Distance Learning (CODL), University of Moratuwa"
        ]
      }
    ]
  },
  {
    icon: `${BASE_PATH}/icons/gear.png`,
    label: "Experience",
    title: "Intern @ DTS & OneCodeLabs",
    sub: "Software Engineer",
    accent: "from-indigo-500 via-violet-500 to-purple-500",
    description:
      "Hands-on experience in modern software engineering, collaborating on product-focused work and building practical solutions that blend technical depth with user-centered design.",
    meta: [
      { label: "Role", value: "Software Engineer Intern" },
      { label: "Team", value: "DTS & OneCodeLabs" },
      { label: "Type", value: "Product / Engineering" },
      { label: "Focus", value: "Full-stack + AI + Cloud" }
    ],
    timeline: [
      {
        period: "Jul 2024 – Jan 2025",
        title: "Software Engineer Intern",
        org: "Dockyard Total Solutions",
        points: [
          "Built a React + Tailwind CSS admin panel with CRUD features, integrated with Spring Boot REST APIs and deployed on IIS for a cricket management project.",
          "Developed a MERN-based Progressive Web App for transaction tracking, with income/expense management and daily financial overviews.",
          "Gained hands-on experience in .NET desktop development and Oracle databases."
        ],
        tags: ["React", "Tailwind", "Spring Boot", "MERN", "PWA", ".NET", "Oracle"]
      },
      {
        period: "Feb 2026 – Aug 2026",
        title: "Software Engineer Intern",
        org: "OneCodeLabs Pvt Ltd",
        points: [
          "Led full-stack development, database management, and AWS cloud maintenance for the Dopamine Lite app, building and integrating new features with React, Next.js, Spring Boot, and FastAPI.",
          "Engineered the RAG pipeline for a video Q&A platform, integrating OpenSearch vector search and Google Gemini to deliver real-time streamed, timestamp-linked answers.",
          "Built and integrated AI vision features for FindMe (selfie-based event photo retrieval using InsightFace and pgvector) and a 3D Virtual Try-On prototype (Tripo AI and Three.js)."
        ],
        tags: ["React", "Spring Boot", "Next.js", "Typescript", "Postgre SQL", "AWS", "LLM","NLP", "RAG"],
        highlight: true
      }
    ]
  },
  {
    icon: `${BASE_PATH}/icons/medal.png`,
    label: "Achievements",
    title: "1st Runner Up",
    sub: "Mobitel Hackathon",
    accent: "from-cyan-500 via-blue-500 to-indigo-500",
    description:
      "Recognized for building inventive, technically strong solutions in competitive environments, demonstrating creativity, speed, and real-world problem solving.",
    meta: [
      { label: "Award", value: "1st Runner Up" },
      { label: "Event", value: "Mobitel Hackathon" },
      { label: "Recognition", value: "Innovation & Impact" },
      { label: "Outcome", value: "Prototype Excellence" }
    ],
    timeline: [
      {
        period: "2023",
        title: "9th Place · EMINENCE 3.0",
        org: "Inter-University Competition · IEEE WIE Affinity Group, University of Ruhuna"
      },
      {
        period: "2025",
        title: "Finalist · FYP Arena 2025",
        org: "Information Technology and Computer Science Track · IEEE Sri Lanka Section",
        description: "Final-year project competition finalist with Emoify."
      },
      {
        period: "2025",
        title: "1st Runner-Up · Codeblast Ruhuna Hackathon Challenge",
        org: "Mobitel (Pvt) Ltd",
        description: "Engineered and presented a fully implemented social robot integrated with a real-time desktop application under tight deadlines, demonstrating strong technical feasibility and usability.",
        highlight: true
      },
      {
        period: "2025",
        title: "Research Paper Publication",
        org: "IEEE ICIIS 2025 · University of Peradeniya",
        description:
          "Integrating Facial Emotion Recognition and Wellness Monitoring to Enhance Human Computer Interaction in Workflows.",
        highlight: true
      }
    ]
  }
];