export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  tags: string[];
  featured: boolean;
  image?: string;
  github?: string;
  live?: string;
  company?: string;
  role?: string;
  highlights?: string[];
}

export async function getProjects(): Promise<Project[]> {
  return [
    {
      slug: "donna-ai-platform",
      title: "Donna AI Platform",
      description:
        "Multimodal personal AI assistant with voice, video, and text interactions",
      longDescription:
        "A comprehensive AI platform enabling natural interactions with personal data through voice, video, and text, with proactive notifications across Slack, WhatsApp, and email.",
      date: "2024-09-01",
      tags: ["Python", "Django", "Claude SDK", "ElevenLabs", "HeyGen", "Azure AI"],
      featured: true,
      company: "Autonomix (Startup)",
      role: "Senior AI Engineer",
      highlights: [
        "Built multimodal AI assistant with Claude Agent SDK, ElevenLabs voice AI, and HeyGen video avatars",
        "Architected multi-agent orchestration system using Python/Django and Azure AI Foundry",
        "Engineered secure integration framework for real-time multimodal interactions",
        "Scaled from MVP to production serving thousands of active users",
      ],
    },
    {
      slug: "iqvia-healthcare-platform",
      title: "IQVIA Healthcare Platform",
      description:
        "AI-powered clinical decision support system with RAG capabilities",
      longDescription:
        "Enterprise-grade healthcare solution leveraging AI for clinical decision support, serving millions of patient records globally.",
      date: "2024-09-01",
      tags: [".NET Core 8", "Azure OpenAI", "Pinecone", "Snowflake", "AWS EKS"],
      featured: true,
      company: "IQVIA (Fortune 500)",
      role: "Senior Software Engineer",
      highlights: [
        "Developed enterprise microservices architecture using .NET Core 8 with Clean Architecture and CQRS",
        "Engineered AI-powered clinical decision support using OpenAI GPT-4 and Azure OpenAI Services",
        "Achieved 40% reduction in clinician research time with RAG system using Pinecone",
        "Improved clinical trial data accuracy by 35% with ML-based quality monitoring",
      ],
    },
    {
      slug: "virtual-cv-assistant",
      title: "LLM-Powered Virtual CV Assistant",
      description:
        "Interactive AI assistant for real-time Q&A based on resume content",
      date: "2024-06-01",
      tags: ["OpenAI", "Python", "Gradio", "Hugging Face"],
      featured: true,
      github: "https://github.com/JawadAmir000",
      highlights: [
        "Built interactive AI-powered virtual assistant using OpenAI, Python, and Gradio",
        "Deployed on Hugging Face Spaces for real-time Q&A",
        "Implemented push notifications via Pushover for engagement tracking",
      ],
    },
    {
      slug: "ecommerce-microservices",
      title: "Enterprise E-Commerce Platform",
      description:
        "Comprehensive microservices solution with multiple services and API Gateway",
      date: "2023-01-01",
      tags: ["ASP.NET Core", "MongoDB", "Redis", "RabbitMQ", "Docker", "Kubernetes"],
      featured: false,
      github: "https://github.com/JawadAmir000",
      highlights: [
        "Architected microservices: Catalog (MongoDB), Basket (Redis), Discount (gRPC), Ordering (DDD)",
        "Implemented API Gateway using Ocelot for routing",
        "Integrated services via RabbitMQ with MassTransit",
        "Utilized Clean Architecture and CQRS pattern",
      ],
    },
    {
      slug: "employee-management-system",
      title: "Full-Stack Employee Management",
      description: "Angular + .NET Core application with Clean Architecture",
      date: "2022-06-01",
      tags: ["Angular", "Angular Material", ".NET Core", "MongoDB", "CQRS"],
      featured: false,
      github: "https://github.com/JawadAmir000",
      highlights: [
        "Developed full-stack application using Angular, Angular Material, .NET Core",
        "Implemented Clean Architecture principles with CQRS pattern",
        "Created intuitive interfaces for seamless data handling",
      ],
    },
  ];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}
