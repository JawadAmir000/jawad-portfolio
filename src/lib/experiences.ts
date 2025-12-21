export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  achievements?: {
    metric: string;
    description: string;
  }[];
}

export const experiences: Experience[] = [
  {
    slug: "iqvia",
    company: "IQVIA",
    role: "Senior Software Engineer",
    period: "Sep 2024 - Present",
    location: "Durham, North Carolina, USA (Remote)",
    type: "Fortune 500",
    description:
      "Building enterprise-grade healthcare solutions and AI-powered clinical decision support systems for one of the world's leading healthcare intelligence companies.",
    highlights: [
      "Spearheaded development of enterprise-grade microservices architecture using .NET Core 8, implementing Clean Architecture, CQRS with MediatR, and Domain-Driven Design principles to deliver scalable healthcare solutions supporting millions of patient records",
      "Engineered AI-powered clinical decision support system leveraging OpenAI GPT-4 and Azure OpenAI Services, enabling healthcare professionals to access evidence-based treatment recommendations and drug interaction warnings",
      "Delivered 40% reduction in clinician research time by implementing sophisticated RAG system with Pinecone vector databases, enabling AI-driven medical literature search across millions of research papers",
      "Optimised data warehousing infrastructure by integrating Snowflake OLAP capabilities, achieving 7% improvement in processing time for large-scale clinical datasets whilst reducing AWS operational costs",
      "Built robust offline-capable iOS mobile solution using DuckDB and SQLite, enabling field researchers to access and synchronise critical patient data in areas with limited connectivity",
      "Architected secure RESTful APIs using ASP.NET Core Web API with dependency injection, implementing repository and unit of work patterns for maintainable, testable code",
      "Improved clinical trial data accuracy by 35% through development of intelligent ML-based quality monitoring system that automatically detects anomalies and data inconsistencies",
      "Established modern DevOps practices by deploying containerised .NET applications with Docker and Kubernetes on AWS EKS, implementing comprehensive CI/CD pipelines through GitHub Actions",
    ],
    technologies: [
      ".NET Core 8",
      "C#",
      "ASP.NET Core",
      "OpenAI GPT-4",
      "Azure OpenAI",
      "Pinecone",
      "RAG",
      "Snowflake",
      "DuckDB",
      "SQLite",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "GitHub Actions",
    ],
    achievements: [
      { metric: "40%", description: "Reduction in clinician research time" },
      { metric: "35%", description: "Improvement in clinical trial data accuracy" },
      { metric: "7%", description: "Faster processing for large-scale datasets" },
      { metric: "Millions", description: "Patient records supported" },
    ],
  },
  {
    slug: "autonomix",
    company: "Autonomix",
    role: "Senior AI Engineer",
    period: "2024 - Present",
    location: "Denmark (Remote)",
    type: "Startup",
    description:
      "Co-founded and built Donna AI Platform - a multimodal personal AI assistant enabling natural interactions through voice, video, and text with proactive notifications.",
    highlights: [
      "Developed a multimodal personal AI assistant platform leveraging Claude Agent SDK, ElevenLabs voice AI, and HeyGen video avatars, enabling users to interact naturally with their personal data through voice, video, and text",
      "Architected a multi-agent orchestration system using Python/Django and Azure AI Foundry, coordinating autonomous AI agents to execute complex workflows and deliver contextual alerts",
      "Engineered a secure integration framework connecting AI agents with communication platforms (Slack, WhatsApp, email) and data sources, implementing scalable message processing pipelines",
      "Successfully scaled the project from MVP to production-ready platform now serving thousands of active users, demonstrating strong adoption and validating product-market fit",
    ],
    technologies: [
      "Python",
      "Django",
      "Claude Agent SDK",
      "ElevenLabs",
      "HeyGen",
      "Azure AI Foundry",
      "Multi-Agent Systems",
      "Event-Driven Architecture",
      "Slack API",
      "WhatsApp API",
    ],
    achievements: [
      { metric: "1000s", description: "Active users on platform" },
      { metric: "MVP to Prod", description: "Scaled from concept to market" },
      { metric: "3+", description: "Communication platforms integrated" },
    ],
  },
  {
    slug: "secured-link-service",
    company: "Secured Link Service",
    role: "Software Engineer",
    period: "2019 - 2024",
    location: "Zurich, Switzerland (Remote)",
    type: "Fintech",
    description:
      "Built fintech applications, blockchain solutions, and enterprise dashboards for European markets, driving significant revenue growth through innovative technical solutions.",
    highlights: [
      "Implemented a generic, multi-level queries supported Hub System using microservice architecture for storing diverse data types, boosting company's annual revenue by 10%",
      "Developed a microservice-based fintech application, improving scalability and performance by decoupling services and utilising Docker and Kubernetes for container orchestration",
      "Constructed a generic dashboard from scratch reflecting comprehensive business metrics, generating approximately $2M in revenue by selling the solution to diverse European markets",
      "Implemented a highly configurable architecture for user role management, simplifying complexity by 50% compared to the existing solution",
      "Managed Azure resources including virtual machines and storage accounts, collaborating with cross-functional teams to design and implement Azure-based solutions",
      "Optimised message routing by fine-tuning RabbitMQ configurations, reducing latency by 50% and increasing data managing capability 12x during peak traffic",
      "Designed and implemented a blockchain ecosystem using .NET and Nethereum, featuring a secure wallet system interfacing with Smart Contracts, increasing transaction security by 50%",
      "Successfully delivered more than 5 client projects using Angular, ASP.NET, and MongoDB",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "Angular",
      "ASP.NET",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Azure",
      "RabbitMQ",
      "Blockchain",
      "Ethereum",
      "Nethereum",
      "Smart Contracts",
    ],
    achievements: [
      { metric: "$2M+", description: "Revenue generated from dashboard solution" },
      { metric: "50%", description: "Latency reduction through optimisation" },
      { metric: "12x", description: "Data processing capability increase" },
      { metric: "10%", description: "Company revenue boost from Hub System" },
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiences.map((exp) => exp.slug);
}
