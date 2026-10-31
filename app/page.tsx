"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Skills from "../components/skills";
import SkillsShow from "../components/skillsshow";
import ProjectCard from "../components/projectcard";
import BlockRevealImage from "../components/blockrevealimage";
import ProjectModal from "../components/projectmodal";
import { arch } from "os";
import { features } from "process";
import { BASE_PATH } from "../utils/config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Each card waits 0.2s after the previous one
    }
  }
};  

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      id: 1,
      projectcode: "EMOIFY",
      category: "AI & Computer Vision & Robotics",
      title: "EMOIFY - Intelligent HCI Ecosystem via Real-Time FER, Wellness Monitoring, and Social Robotics",
      description: "An award-winning, edge-deployed Human-Computer Interaction (HCI) and affective computing framework integrating real-time computer vision classifiers, a state-centric multi-agent LLM workflow, and an IoT-synchronized desktop robot companion to counteract digital fatigue.",
      technologies: [
        "Python",
        "Java",
        "JavaFX",
        "Ultralytics YOLO11",
        "PyTorch",
        "LangGraph",
        "Qwen LLM",
        "RL",
        "OpenCV & Dlib",
        "Raspberry Pi 4B",
        "Arduino UNO/NANO",
        "Selenium",
        "Psutil",
        "SQLite3"
      ],
      github: "https://github.com/WijesekaraDNM/Facial_Emotion_Recongnition",
      demo: "https://www.youtube.com/watch?v=4Co_2gLSa9s",
      image: `${BASE_PATH}/projects/Emoify.jpg`,
      features: [
        "Multi-Modal Vision: Achieved 96.6% accuracy for 9 facial emotion classes and 98.7% for hand posture tracking via custom YOLO11n-cls models.",
        "Drowsiness Monitoring: Real-time blink and fatigue tracking utilizing Eye Aspect Ratio (EAR) algorithms driven by Dlib's 68-point landmark predictor.",
        "Agentic Workflows: Structured a state-centric multi-agent engine using LangGraph and JSON-enforced Qwen LLMs to manage background interventions.",
        "Contextual Personalization: Integrated a Contextual Reinforcement Learning (LinUCB) bandit model to rank and refine personalized workflow break suggestions.",
        "IoT Social Robotics: Orchestrated a physical desk robot via Raspberry Pi 4B and Arduino UNO to deliver real-time kinematic postures and emotional feedback."
      ],
      architectureImage: `${BASE_PATH}/projects/EMOIFY/softwareArch.png`,
      gallery:[
        `${BASE_PATH}/projects/EMOIFY/gallery/FloatingBtn.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/InitStart.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Start.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Register.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/InitAppAdd.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Home.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Apps.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/AppsAdd.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Settings.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Chat.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Recom.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/RecomExpand.png`,
        `${BASE_PATH}/projects/EMOIFY/gallery/Robot.jpeg`
      ]
    },
    {
      id: 2,
      projectcode: "BOOKFAIR",
      category: "Web Development & DevOps",
      title: "Book Fair Stall Reservation Management System",
      description: "An enterprise stall booking platform that automates vendor applications, interactive map selections, and organizer access workflows through a distributed microservices back-end architecture.",
      technologies: ["ReactJS", "Springboot", "PostgreSQL", "Kubernetes", "Docker", "Git", "Jenkins"],
      github: "https://github.com/DulshanSiriwardhana/CIBF-Reservation-Portal.git",
      demo: null,
      image: `${BASE_PATH}/projects/BookFair.png`,
      features: [
        "Stall Reservation: View available stalls, make reservations, and manage their bookings through a user-friendly web interface.",
        "Admin Dashboard: Manage stall availability, view reservation statistics, and handle user inquiries",
        "Real-time Updates: Real-time updates on stall availability and reservation status to ensure a smooth booking experience.",
        "Scalable Architecture: Built with a microservices architecture using Spring Boot and deployed on Kubernetes for scalability and reliability."
      ],
      architectureImage: `${BASE_PATH}/projects/BOOKFAIR/softwareArch.png`
    },
    {
      id: 3,
      projectcode: "CAKESHOP",
      category: "Web Development & DevOps",
      title: "Web Based Online Cake Shop System with DevOps",
      description: "A cloud-native, scalable e-commerce platform built on a microservices architecture that handles product catalogs, cart management, order processing, and asynchronous notification delivery.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "Figma", "Kubernetes", "Docker", "Git", "Jenkins"],
      github: "https://github.com/WijesekaraDNM/cake-shop-system-microservices.git",
      demo: "https://www.youtube.com/watch?v=BgAKNXEXXpY",
      image: `${BASE_PATH}/projects/CakeShop.png`,
      features: [
        "API Gateway Routing: Centralized request routing, CORS configuration, and JWT authentication handling.",
        "Decoupled Microservices: Independent services managed across localized instances (User, Product, Cart, and Order services).",
        "Asynchronous Notifications: Event-driven email and SMS delivery powered by a RabbitMQ broker with SendGrid and Twilio.",
        "Polyglot Persistence: Utilizes MongoDB for flexible unstructured catalogs and PostgreSQL to ensure transactional consistency for orders.",
        "DevOps Automated Pipeline: Fully orchestrated deployments utilizing Kubernetes manifests, Docker containerization, and a Jenkins CI/CD automation workflow."
      ],
      architectureImage: `${BASE_PATH}/projects/CAKESHOP/systemArch.png`,
      gallery:[
        `${BASE_PATH}/projects/CAKESHOP/gallery/ui1.png`,
        `${BASE_PATH}/projects/CAKESHOP/gallery/ui2.png`,
      ]
    },
    {
      id: 4,
      projectcode: "GAMEREVIEWS",
      category: "AI & NLP",
      title: "Game Review Sentiment Analyzer and Summarizer",
      description: "Analyze sentiment of game reviews and generate summaries using NLP techniques.",
      technologies: ["ReactJS", "Python", "Flask", "NLP", "RoBERTa", "BART", "MLOps"],
      github: "https://github.com/WijesekaraDNM/Game-Review-Sentiment-Analysis-Web-app",
      demo: "https://www.youtube.com/watch?v=WJ9UX1ic830",
      image: `${BASE_PATH}/projects/GameReview.png`,
      features: [
        "Sentiment Analysis: Analyzes the sentiment of game reviews using advanced NLP techniques.",
        "Summary Generation: Generates concise summaries of game reviews for quick insights.",
        "User-Friendly Interface: Provides an intuitive interface for users to interact with the system."
      ],
      architectureImage: `${BASE_PATH}/projects/GAMEREVIEWS/softwareArch.png`
    },
    {
      id: 5,
      projectcode: "RCC",
      category: "Web Development",
      title: "Richmond College Cricket Progressive Web Application",
      description: "A progressive web application developed for Richmond College Cricket to streamline sports administration, offering a high-fidelity user interface and robust background systems for tracking team and player performance.",
      technologies: ["React.js", "Tailwind CSS", "Spring Boot", "Node.js", "MySQL", "IIS", "Figma", "Photoshop"],
      github: "https://github.com/WijesekaraDNM/RichmandCollegeCricketTeam/tree/Nuwani_Test_Branch", 
      demo: "https://youtu.be/Qebs4PXEuq8", 
      image: `${BASE_PATH}/projects/Rcc.png`,
      features: [
        "End-to-End Admin Panel: Engineered the complete frontend administrative engine featuring clean data tables and dynamic forms to handle CRUD workflows for players, teams, matches, coaches, officials, and system admins.",
        "Dynamic Profile & Stat Systems: Built distinct, highly responsive profile dashboards for players, coaches, and officials to track personal metrics, handle practice session management, and visualize performance data.",
        "Content Management & UI Components: Implemented localized popups for clean team roster data visualization alongside a customized news creation utility complete with interactive real-time preview sections.",
        "Backend & API Collaboration: Partnered closely with the backend team to design and integrate Spring Boot REST APIs, ensuring robust data binding, smooth state handling, and optimal frontend performance.",
        "Deployment Pipelines: Collaborative involvement in configuring the hosting environment and managing the application's deployment phase using Internet Information Services (IIS)."
      ],
      gallery: [
        `${BASE_PATH}/projects/RCC/gallery/rcc1.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc2.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc3.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc4.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc5.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc6.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc7.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc8.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc9.jpeg`,
        `${BASE_PATH}/projects/RCC/gallery/rcc10.jpeg`,
      ],
      architectureImage: `${BASE_PATH}/projects/RCCRICKET/softwareArch.png`
    },
    {
      id: 6,
      projectcode: "DISASTERMANAGEMENT",
      category: "Web Development",
      title: "Web based Disaster Management System",
      description: "A web application for managing disaster response and recovery operations.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "Express", "Git"],
      github: "https://github.com/WijesekaraDNM/Disaster_Management_System",
      demo: "https://www.youtube.com/watch?v=XQlfPTinBO0&t=117s",
      image: `${BASE_PATH}/projects/DisasterWeb.png`,
      features: [
        "Real-time Monitoring: Provides real-time updates on disaster situations and response efforts.",
        "Resource Management: Allows for efficient allocation and tracking of resources during disaster response.",
        "Communication Platform: Facilitates seamless communication between emergency responders and affected communities."
      ],
      architectureImage: `${BASE_PATH}/projects/DISASTERMANAGEMENT/softwareArch.png`,
      gallery: [
        `${BASE_PATH}/projects/DMS/gallery/DMS1.png`,
        `${BASE_PATH}/projects/DMS/gallery/DMS2.png`,
        `${BASE_PATH}/projects/DMS/gallery/DMS3.png`,
        `${BASE_PATH}/projects/DMS/gallery/DMS4.png`,
        `${BASE_PATH}/projects/DMS/gallery/DMS5.png`,
        `${BASE_PATH}/projects/DMS/gallery/DMS6.png`,
        `${BASE_PATH}/projects/DMS/gallery/DMS7.png`,
        `${BASE_PATH}/projects/DMS/gallery/DMS8.png`,
      ]
      
    },
    {
      id: 7,
      projectcode: "TRAVELHELPER",
      category: "Mobile Development",
      title: "Travel Helper Mobile Application",
      description: "A mobile application that helps travelers plan trips, find local attractions, and manage travel itineraries.",
      technologies: ["Kotlin Jetpack", "Firebase", "Android Studio", "Google Maps API", "Figma"],
      github: "https://github.com/WijesekaraDNM/Travel-Helper",
      demo: "https://www.youtube.com/watch?v=ldy69msJcC8",
      image: `${BASE_PATH}/projects/TravelHelper.png`,
      features: [
        "Trip Planning: Helps users plan their trips with ease, including destination selection and itinerary creation.",
        "Local Attractions: Provides information about local attractions and activities at various destinations.",
        "Itinerary Management: Allows users to manage and update their travel itineraries in real-time."
      ],
      architectureImage: `${BASE_PATH}/projects/TRAVELHELPER/softwareArch.png`
    }
  ];

  const skills = {
    "Programming Languages": ["C/C++","C#", "Python", "JavaScript/TypeScript", "Java", "Kotlin", "Flutter"],
    "Web Development": ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "Springboot", "Tailwind CSS", "REST APIs"],
    "Embedded Systems": ["Arduino", "ESP32", "Raspberry Pi", "STM32", "RTOS", "I2C/SPI/UART"],
    "Hardware & Digital Design": ["FPGA", "Verilog", "Digital Logic", "Computer Architecture", "PCB Design"],
    "Machine Learning & AI": ["NLP", "LLM", "TensorFlow", "PyTorch", "OpenCV", "NumPy", "Scikit-learn", "Computer Vision"],
    "Tools & Technologies": ["Git", "Docker", "Jenkins", "Kubernetes", "Linux", "MATLAB"]
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">NW</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center justify-center">
          {/* Profile Picture */}
          {/* <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  src="/profile_pic.jpg" 
                  alt="Rashmitha Thewarapperuma" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100" 
                />
              </div>
            </div>
          </motion.div> */}

          <BlockRevealImage src={`${BASE_PATH}/profile_pic1.jpg`} rows={6} cols={6} />

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                Available for Opportunities
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight tracking-tight text-slate-900 dark:text-white">
                Nuwani <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600">
                  Wijesekara
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-4"
            >
              Computer Engineering Graduate
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-500 dark:text-slate-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Bridging the gap between <span className="text-slate-900 dark:text-slate-200 font-semibold">robust hardware</span> and <span className="text-slate-900 dark:text-slate-200 font-semibold">intelligent software</span>. Specializing in AI-driven solutions and high-performance web systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] overflow-hidden"
              >
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 rounded-xl font-bold text-slate-700 dark:text-slate-300 transition-colors"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
                WHO <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-600">AM I?</span>
              </h2>
              <div className="h-2 w-20 bg-blue-500 mt-4 rounded-full" />
            </div>

            <div className="md:w-2/3 space-y-6">
              <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                I’m a <span className="text-slate-900 dark:text-white font-medium">Computer Engineering Graduate</span> obsessed with the bridge between electrons and code. I don't just write software; I build systems from the gates up.
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                My toolkit ranges from <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-sm font-mono">AI</span> to 
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md text-sm font-mono ml-2">Full-stack Web</span>. I thrive in the space where hardware constraints meet software possibilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: `${BASE_PATH}/icons/education.png`, 
                label: "Education", 
                title: "BSc (Hons) in Computer Engineering", 
                sub: "GPA: 3.17/4.0",
                color: "blue" 
              },
              { 
                icon: `${BASE_PATH}/icons/gear.png`, 
                label: "Experience", 
                title: "Intern @ DTS & OneCodeLabs", 
                sub: "Software Engineer",
                color: "indigo" 
              },
              { 
                icon: `${BASE_PATH}/icons/medal.png`, 
                label: "Achievements", 
                title: "1st Runner Up", 
                sub: "Mobitel Hackathon",
                color: "cyan" 
              },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col justify-end group p-8 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                {/* <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div> */}
                <img src={item.icon} alt={item.label} className={` ${i === 0 ? 'absolute top-1 right-1 w-22 h-22 mb-4 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-130 rotate-12' : 'absolute top-1 right-1 w-24 h-24 mb-4 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-130'}`} />
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">{item.label}</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Featured <span className="text-blue-600">Projects</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-md">
                A collection of systems ranging from low-level hardware design to high-level web architectures.
              </p>
            </div>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800 hidden md:block mb-4 mx-8" />
          </div>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map(project => (
              <motion.div variants={item} key={project.id} onClick={() => setSelectedProject(project)}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div> */}
          <ProjectModal 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <SkillsShow />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Let's <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Have a question or a proposal? I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { 
                  label: "Email", 
                  value: "dnm.wijesekara@gmail.com", 
                  icon: `${BASE_PATH}/mail.png`, 
                  link: "mailto:dnm.wijesekara@gmail.com" 
                },
                { 
                  label: "LinkedIn", 
                  value: "Nuwani Wijesekara", 
                  icon: `${BASE_PATH}/linkedin.png`, 
                  link: "https://www.linkedin.com/in/wijesekaradnm/" 
                },
                { 
                  label: "GitHub", 
                  value: "WijesekaraDNM", 
                  icon: `${BASE_PATH}/github.png`, 
                  link: "https://github.com/WijesekaraDNM" 
                }
              ].map((info, i) => (
                <a 
                  key={i}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-2xl bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                    <img src={`${info.icon}`} alt={info.label} className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{info.label}</p>
                    <p className="text-slate-900 dark:text-slate-200 font-semibold truncate max-w-[180px] sm:max-w-none">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-3 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all overflow-hidden shadow-lg shadow-blue-500/20"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="group-hover:translate-x-1 transition-transform relative z-10">🚀</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Nuwani Wijesekara. Built with Next.js and Tailwind CSS.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/WijesekaraDNM" className="hover:text-blue-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/wijesekaradnm" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}