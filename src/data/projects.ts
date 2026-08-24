export interface Project {
  id: number;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: string;
  image: string;
  featured: boolean;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [

    {
        id: 1,
        number: "01",
        title: "Smart Campus Connect",
        tagline: "Student • College • Company Full Stack Platform",
        description:
          "A complete campus ecosystem connecting students, colleges and companies through internships, jobs, hackathons, applications and role-based dashboards. Developed with scalable Spring Boot backend architecture and modern React frontend.",
        category: "FULL STACK PLATFORM",
        status: "ACTIVE DEVELOPMENT",
        image: "/projects/smart-campus-connect.png",
        featured: true,
        technologies: [
          "Java",
          "Spring Boot",
          "React",
          "TypeScript",
          "JWT",
          "MySQL",
        ],
        github: "https://github.com/darshanrathod04",
      },

  {
    id: 2,
    number: "02",
    title: "Project Intelligence",
    tagline: "AI-Powered Software Engineering Workspace",
    description:
      "An intelligent workspace designed to help developers understand software projects through architecture analysis, documentation, evidence-based reasoning and structured engineering workflows. Built as the first application running on Shree AI OS.",
    category: "AI ENGINEERING",
    status: "FLAGSHIP PROJECT",
    image: "/projects/project-intelligence.png",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "AI Workspace",
    ],
    github: "https://github.com/darshanrathod04",
  },



  {
    id: 3,
    number: "03",
    title: "Fitness Tracker",
    tagline: "Android + Spring Boot Health Platform",
    description:
      "Production-ready fitness application featuring Android client, secure JWT authentication, activity tracking, calorie analytics and fully documented REST APIs with Swagger.",
    category: "ANDROID + BACKEND",
    status: "PRODUCTION READY",
    image: "/projects/fitness-tracker.png",
    featured: true,
    technologies: [
      "Android",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Swagger",
    ],
    github: "https://github.com/darshanrathod04/Fitness-Tracker",
  },

  {
    id: 4,
    number: "04",
    title: "EduFlow 360",
    tagline: "Academic Intelligence Dashboard",
    description:
      "A futuristic education platform focused on semester progression, learning analytics, academic visualization and reusable React component architecture with immersive UI design.",
    category: "FRONTEND ENGINEERING",
    status: "LIVE PROJECT",
    image: "/projects/eduflow-360.png",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/darshanrathod04",
    demo: "https://eduflow-360.netlify.app",
  },

  // ---------------- Secondary Projects ----------------

  {
    id: 5,
    number: "05",
    title: "E-Commerce REST API",
    tagline: "Backend Commerce Architecture",
    description:
      "Spring Boot backend implementing authentication, product management, orders, relational database design and clean layered architecture.",
    category: "BACKEND PROJECT",
    status: "COMPLETED",
    image: "/projects/ecommerce.png",
    featured: false,
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
    ],
    github: "https://github.com/darshanrathod04",
  },

  {
    id: 6,
    number: "06",
    title: "College Management System",
    tagline: "Student Administration Platform",
    description:
      "Backend application managing students, faculty, departments and academic records using Spring Boot, JPA and MySQL.",
    category: "BACKEND PROJECT",
    status: "COMPLETED",
    image: "/projects/college-management.png",
    featured: false,
    technologies: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "Java",
    ],
    github: "https://github.com/darshanrathod04",
  },

  {
    id: 7,
    number: "07",
    title: "Library Management System",
    tagline: "REST API + Relational Database Design",
    description:
      "CRUD-based library backend demonstrating entity relationships, repository pattern, validation and scalable REST services.",
    category: "BACKEND SYSTEM",
    status: "COMPLETED",
    image: "/projects/library-management.png",
    featured: false,
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
    ],
    github: "https://github.com/darshanrathod04",
  },

  {
    id: 8,
    number: "08",
    title: "Authentication Service",
    tagline: "Reusable JWT Security Module",
    description:
      "Independent authentication module implementing registration, login, JWT token generation, authorization filters and role-based security.",
    category: "SECURITY MODULE",
    status: "REUSABLE MODULE",
    image: "/projects/auth-service.png",
    featured: false,
    technologies: [
      "Spring Security",
      "JWT",
      "Java",
    ],
    github: "https://github.com/darshanrathod04",
  },
];