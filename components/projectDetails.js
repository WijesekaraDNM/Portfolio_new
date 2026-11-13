import { BASE_PATH } from "../utils/config";

export const projects = [
    {
      id: 1,
      projectcode: "EMOIFY",
      category: "AI, Computer Vision & Robotics",
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
      projectcode: "SMARTTRAFFIC",
      category: "Big Data & Data Engineering",
      title: "Smart City Traffic Congestion System",
      description: "A real-time traffic monitoring and analytics platform built on a modern big data stack that simulates sensor data, streams it through Kafka into Spark for live congestion detection, orchestrates daily batch analytics with Airflow, and generates automated PDF reports.",
      technologies: ["Python", "Apache Kafka", "Apache Spark", "Spark Streaming", "Apache Airflow", "HDFS", "Docker", "Pandas", "Matplotlib", "ReportLab"],
      github: "https://github.com/RPrashan99/Smart-City-Traffic-Congestion-System",
      demo: "https://youtu.be/6S5-i2S7ShM?feature=shared",
      image: `${BASE_PATH}/projects/SmartTraffic.png`,
      features: [
        "Simulated Sensor Producer: Generates traffic events (sensor ID, timestamp, vehicle count, average speed) for four junctions every second and publishes them to a Kafka topic, with a 5% chance of a critical congestion event.",
        "Real-Time Stream Processing: Spark Streaming computes 5-minute rolling window aggregations of total vehicles, average speed, and congestion index.",
        "Instant Congestion Alerts: Detects critical congestion (speed below 10 km/h) and pushes alerts to a dedicated Kafka topic for downstream consumers, while also persisting them to HDFS.",
        "Scheduled Batch Analytics: An Airflow DAG triggers a Spark job daily at midnight to identify peak traffic hours per junction and produce daily summary statistics.",
        "Data Lake Storage: Aggregated data and alerts are stored as Parquet on HDFS for historical analysis, with peak hour reports exported as CSV.",
        "Automated PDF Reporting: Generates a traffic analytics report with volume bar charts, average speed line charts, and a peak hour table.",
        "Containerized Deployment: Spark and Airflow components are packaged as Docker images for consistent, reproducible setup."
      ],
      architectureImage: `${BASE_PATH}/projects/SMARTTRAFFIC/systemArch.png`,
    },
    {
      id: 6,
      projectcode: "RCC",
      category: "Web Development",
      title: "Richmond College Cricket Progressive Web Application",
      description: "A centralized progressive web application developed for Richmond College Cricket to unify sports administration, team operations, and player engagement under a single responsive digital platform.",
      technologies: ["React.js", "Tailwind CSS", "Spring Boot", "Node.js", "MySQL", "IIS", "Figma", "Photoshop"],
      github: null, 
      demo: "https://youtu.be/Qebs4PXEuq8", 
      image: `${BASE_PATH}/projects/Rcc.png`,
      features: [
        "Comprehensive Administration Portal: Provides system administrators with a unified control engine featuring clean data tables and dynamic forms to manage full CRUD workflows for players, teams, matches, coaches, and officials.",
        "Granular Performance & Statistics Tracking: Delivers interactive score matrices that capture and display individual match metrics across detailed batting, bowling, and fielding splits through localized data popups.",
        "Role-Specific User Profiles: Features customized dashboard views tailored specifically to different access levels—including Player Profiles (personal details, stats, practice logs), Coach Profiles (practice session scheduling and management), and Official Profiles.",
        "Content Management & Live Preview: Houses an integrated news publishing utility equipped with custom data fields and interactive layout modules, allowing immediate visual previews of structural updates before they go live.",
        "Cross-Platform PWA Experience: Architected as a highly accessible progressive web app that delivers an engaging, intuitive user experience for all stakeholders—including general users, players, coaches, officials, and admins—across any responsive device screen."
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
      id: 7, 
      projectcode: "EXPENSE TRACKER",
      category: "Web Development",
      title: "Personal Expense Tracker",
      description: "A comprehensive web application designed to help users track daily expenses, manage budgets, and visualize spending habits efficiently.",
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "Tailwind CSS"], // Adjust technologies if you used a different stack like MERN or Java/Spring Boot
      github: "https://github.com/WijesekaraDNM/Expense-Tracker", 
      demo: null, 
      image: `${BASE_PATH}/projects/ET.png`,
      features: [
        "Expense Logging & Categorization: Easily record transactions and organize them by custom categories.",
        "Budget Management: Set monthly spending limits and receive real-time financial tracking updates.",
        "Data Visualization: Intuitive graphical dashboards analyzing spending patterns and trends over time."
      ],
      architectureImage: `${BASE_PATH}/projects/EXPENSETRACKER/softwareArch.png`,
      gallery: [
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et1.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et2.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et3.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et5.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et6.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et7.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et8.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et9.png`,
        `${BASE_PATH}/projects/EXPENSETRACKER/gallery/et10.png`,
      ]
    },
    {
      id: 8,
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
      id: 9,
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
      architectureImage: `${BASE_PATH}/projects/TRAVELHELPER/softwareArch.png`,
      gallery: [
        `${BASE_PATH}/projects/TRAVELHELPER/gallery/TH1.jpeg`,
        `${BASE_PATH}/projects/TRAVELHELPER/gallery/TH2.jpeg`,
        `${BASE_PATH}/projects/TRAVELHELPER/gallery/TH3.jpeg`,
        `${BASE_PATH}/projects/TRAVELHELPER/gallery/TH4.jpeg`,
        `${BASE_PATH}/projects/TRAVELHELPER/gallery/TH5.jpeg`,
        `${BASE_PATH}/projects/TRAVELHELPER/gallery/TH6.jpeg`,
      ]
    },
    {
      id: 10,
      projectcode: "TRYON",
      category: "Web Development",
      title: "Virtual Try-On",
      description:
        "An experimental full-stack 3D fashion try-on prototype that combines AI-generated garment modeling with a virtual avatar fitting experience. The project explores how Tripo AI can generate garment models from uploaded images, which are then integrated into a 3D avatar system for virtual clothing visualization and size-based fitting previews.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "FastAPI",
        "Three.js",
        "React Three Fiber",
        "Tripo AI",
        "SMPL/Avatar System",
        "Tailwind CSS",
      ],
      github: "https://github.com/WijesekaraDNM/TryOn",
      demo: "https://www.youtube.com/watch?v=airArp22g1U",
      image: `${BASE_PATH}/projects/Tryon.jpg`,
      features: [
        "AI Garment Generation: Uses Tripo AI to generate 3D garment models from uploaded images and style references.",
        "Virtual Try-On Experience: Integrates generated garments into a 3D avatar environment for interactive outfit visualization.",
        "Customizable Avatar Fitting: Includes gender selection and adjustable body dimensions to explore garment fit across different body types.",
        "Size-Based Try-On Simulation: Allows users to preview garments in different sizes to assess fit and silhouette.",
        "3D Fashion Visualization: Demonstrates an immersive virtual shopping and fitting experience for early-stage fashion experimentation."
      ],
      architectureImage: `${BASE_PATH}/projects/3DFASHIONNEW/softwareArch.png`
    },
    {
      id: 11,
      projectcode: "DLSQA",
      category: "AI & Web Development",
      title: "DL Sinhala Q&A Platform",
      description:
        "A full-stack AI learning platform that lets users upload educational videos, transcribe them with Gemini, split the transcript into context chunks, generate embeddings, and retrieve the most relevant content using a Retrieval-Augmented Generation (RAG) pipeline. The system answers questions in Sinhala or Singlish using video-grounded context, supports timestamp-based learning, and generates structured chapter summaries to help users understand complex topics more effectively.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "FastAPI",
        "Python",
        "Gemini API",
        "OpenSearch",
        "AWS S3",
        "Redis",
        "FFmpeg",
        "Tailwind CSS",
        "MongoDB"
      ],
      github: "https://github.com/WijesekaraDNM/Full-stack-AI-Learning-Platform",
      demo: null,
      image: `${BASE_PATH}/projects/Q&A.png`,
      features: [
        "Video Upload & Processing: Supports uploading educational videos and processing them through FFmpeg-based chunking and metadata extraction.",
        "AI Transcription: Uses Gemini 2.5 Flash to generate timestamped transcripts from long-form video content.",
        "RAG-based Q&A: Generates embeddings for transcript chunks and retrieves the most relevant sections via OpenSearch before answering user questions.",
        "Context-Aware Responses: Grounds answers in the retrieved video transcript to stay within the source material and reduce hallucinations.",
        "Sinhala & Singlish Support: Designed for Sinhala-language learning queries with response constraints tied to the source video context.",
        "Course Roadmap Generation: Builds structured topic maps and learning outlines from transcript summaries for better navigation.",
        "Dashboard Experience: Provides a modern UI for uploaded videos, thumbnails, search, and watching with interactive learning support."
      ],
      architectureImage: `${BASE_PATH}/projects/DLSinhalaQA/architecture.png`,
      gallery: [
        `${BASE_PATH}/projects/Q&A/gallery/Q&A1.png`,
        `${BASE_PATH}/projects/Q&A/gallery/Q&A2.png`,
        `${BASE_PATH}/projects/Q&A/gallery/Q&A3.png`,
        `${BASE_PATH}/projects/Q&A/gallery/Q&A4.png`,
      ]
    },
    { "id": 12, 
      "projectcode": "FINDME", 
      "category": "AI & Web Development", 
      "title": "FindMe", 
      "description": "A smart event photo platform that helps photographers organize memorable events and lets guests quickly find their own photos without manually searching through large galleries. Photographers can create event pages, share QR codes, and manage event photo collections, while guests can open the event link, upload a selfie, and instantly discover the photos where they appear. The app brings convenience, personalization, and a smooth event experience for both organizers and attendees.", 
      "technologies": [ "React", "Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "pgvector", "InsightFace", "ArcFace", "Google Drive API", "AWS S3", "Redis", "Docker", "Nginx" ], 
      "github": "https://github.com/your-username/scanme", 
      "demo": "https://youtu.be/4C2w040OqVU", 
      "image": `${BASE_PATH}/projects/FindMe.png`, 
      "features": [ 
        "Event creation and management: Photographers can set up events, organize photo collections, and generate event access links.", 
        "QR-based guest access: Guests can join an event by scanning a QR code and open the photo gallery instantly.", 
        "Selfie-based photo search: Guests upload a selfie to find images where they appear in the event.", 
        "AI face matching: The app uses facial recognition to find the closest photo matches with high accuracy.", 
        "Automatic processing pipeline: Photos are organized, indexed, and prepared in the background without manual work.", 
        "Privacy-conscious matching: Guest selfies are processed securely and not permanently stored as raw images.", 
        "Modern dashboard experience: A clean interface helps both photographers and guests complete tasks quickly and easily." ], 
      "architectureImage": "${BASE_PATH}/projects/ScanMe/architecture.png", 
      "gallery": [ 
        `${BASE_PATH}/projects/FINDME/gallery/FindMe1.png`,
        `${BASE_PATH}/projects/FINDME/gallery/FindMe2.png`,
      ] 
    }
  ];