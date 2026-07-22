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
    slug: "anlytic",
    company: "Anlytic",
    role: "AI Engineer",
    period: "Feb 2026 — Present",
    location: "Dubai, UAE (Remote)",
    type: "Full-time · Agentic analytics",
    description:
      "Shipping a production multi-agent AI analytics platform that turns plain-English questions into live dashboards — built on the Vercel AI SDK and Anthropic Claude.",
    highlights: [
      "Shipped a production multi-agent AI analytics platform that routes user queries through a Claude Haiku classifier to specialised agents — chart generation, dashboard editing, data management, and general analytics — built on the Vercel AI SDK and Anthropic Claude.",
      "Enabled non-technical users to build charts in plain English across 8 visualisation types (bar, line, pie, heatmap, icicle, pivot, headline, table). The AI generates the full config and data query end-to-end, removing manual dashboarding entirely.",
      "Reduced LLM API costs by 60–70% via a dual compression system: stripping tool schema descriptions before sending to Claude, and summarising old tool-call results in message history.",
      "Eliminated risk of accidental data loss through a human-in-the-loop approval layer — the AI proposes schema changes, row edits, and table deletions, all gated on user sign-off before any destructive operation runs.",
      "Made the general agent extensible by integrating MCP (Model Context Protocol) for runtime loading of documentation tools, with timeout protection and graceful fallback.",
      "Kept long chat sessions stable by implementing conversation summarisation via Anthropic's native compaction API — compresses history while preserving critical IDs and user context.",
    ],
    technologies: [
      "Anthropic Claude",
      "Claude Haiku",
      "Vercel AI SDK",
      "MCP (Model Context Protocol)",
      "TypeScript",
      "Multi-Agent Systems",
      "RAG",
      "Conversation Compaction",
    ],
    achievements: [
      { metric: "60–70%", description: "LLM API cost reduction via dual compression" },
      { metric: "8", description: "Visualisation types generated end-to-end from plain English" },
      { metric: "0", description: "Destructive operations without human approval" },
      { metric: "MCP", description: "Runtime tool loading for extensibility" },
    ],
  },
  {
    slug: "iqvia",
    company: "IQVIA",
    role: "Senior Software Engineer",
    period: "Sep 2024 — Apr 2026",
    location: "Durham, NC, USA (Remote)",
    type: "Fortune 500 · Healthcare",
    description:
      "Led enterprise microservices and AI-powered clinical decision support across IQVIA's global platform, supporting millions of patient records.",
    highlights: [
      "Led development of enterprise microservices on .NET Core 8 using Clean Architecture, CQRS with MediatR, and Domain-Driven Design — supporting millions of patient records across IQVIA's global platform.",
      "Engineered an AI-powered clinical decision support system using OpenAI GPT-4 and Azure OpenAI to deliver evidence-based treatment recommendations and drug-interaction warnings.",
      "Cut clinician research time by 40% via a RAG system with Pinecone vector databases for AI-driven search across millions of medical papers and clinical studies.",
      "Integrated Snowflake OLAP into the data warehouse, improving processing time on large clinical datasets by 7% while reducing AWS costs.",
      "Built an offline-capable iOS solution with DuckDB and SQLite for field researchers in low-connectivity areas.",
      "Improved clinical-trial data accuracy by 35% through an ML-based anomaly detection system that reduced manual review and strengthened regulatory compliance.",
      "Deployed containerised .NET services with Docker and Kubernetes on AWS EKS, with CI/CD via GitHub Actions.",
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
      { metric: "35%", description: "Improvement in clinical-trial data accuracy" },
      { metric: "7%", description: "Faster processing on large clinical datasets" },
      { metric: "Millions", description: "Patient records supported" },
    ],
  },
  {
    slug: "autonomix",
    company: "Autonomix",
    role: "AI Software Engineer (Part-Time)",
    period: "2024 — 2025",
    location: "Denmark (Remote)",
    type: "Part-time · Donna AI",
    description:
      "Building Donna Assistant - a full-stack AI-powered productivity platform enabling Inbox Zero across email, calendars, and messaging platforms with AI prioritization, gamification, and distraction management.",
    highlights: [
      "Built Django 4.2 monolith with Django REST Framework serving RESTful APIs, implementing JWT authentication with secure token management and PostgreSQL/PostGIS database schemas for geospatial and relational data",
      "Developed async task processing pipeline with Celery + RabbitMQ for background jobs, and created FastAPI microservice for knowledge graph operations using Neo4j/Graphiti",
      "Implemented Adapter Pattern for unified messaging across Slack, WhatsApp, and Email, Factory Pattern for dynamic avatar provider selection (Heygen, D-ID), and Strategy Pattern for flexible calendar sync algorithms",
      "Architected hybrid monolith + microservices system integrating Google OAuth 2.0 (Gmail, Calendar), Microsoft OAuth 2.0 (Outlook, Calendar), Slack API with real-time webhooks, and WhatsApp via Baileys Node.js server with Socket.IO",
      "Integrated LangChain/LangGraph for conversational AI workflows with OpenAI GPT-4 API, built Graphiti knowledge graph for context-aware responses, and implemented AI avatar streaming with Heygen and D-ID APIs",
      "Implemented Fernet encryption for OAuth token storage, CSRF protection for OAuth state management, and rate limiting with Redis for security hardening",
      "Established Docker Compose multi-service orchestration with GitHub Actions CI/CD pipelines and Redis caching layer for infrastructure automation",
    ],
    technologies: [
      "Python",
      "Django 4.2",
      "Django REST Framework",
      "FastAPI",
      "Celery",
      "PostgreSQL",
      "PostGIS",
      "Neo4j",
      "Redis",
      "RabbitMQ",
      "OpenAI GPT-4",
      "LangChain",
      "LangGraph",
      "Graphiti",
      "Slack API",
      "WhatsApp/Baileys",
      "Socket.IO",
      "OAuth 2.0",
      "JWT",
      "Docker",
      "GitHub Actions",
    ],
    achievements: [
      { metric: "4+", description: "Communication platforms unified under single API" },
      { metric: "Extensible", description: "Adapter architecture for easy provider addition" },
      { metric: "Real-time", description: "Webhook processing for instant message sync" },
      { metric: "Context-Aware", description: "Knowledge graph for AI conversation retention" },
    ],
  },
  {
    slug: "selise",
    company: "Selise",
    role: "Software Engineer",
    period: "2019 — 2024",
    location: "Zurich, Switzerland (Remote)",
    type: "Fintech · Blockchain",
    description:
      "Five years across European fintech and on-chain systems — the run that taught me what 'production' actually means.",
    highlights: [
      "Built a generic, multi-level-query Hub System on microservices for diverse data storage, boosting annual revenue by 10%.",
      "Developed a microservice-based fintech application with Docker and Kubernetes, improving scalability and deployment velocity.",
      "Created a configurable business-metrics dashboard from scratch, generating ~$2M in revenue across European markets.",
      "Redesigned user/team role management, reducing configuration complexity by 50% vs. the prior system.",
      "Tuned RabbitMQ to cut messaging latency by 50% and increase peak-traffic throughput 12×.",
      "Designed a blockchain ecosystem in .NET and Nethereum with a secure wallet interfacing Smart Contracts.",
      "Delivered 5+ client projects using Angular, ASP.NET, and MongoDB on Azure.",
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
      { metric: "$2M+", description: "Revenue from dashboard solution across EU markets" },
      { metric: "50%", description: "Latency reduction via RabbitMQ tuning" },
      { metric: "12×", description: "Peak-traffic throughput increase" },
      { metric: "10%", description: "Annual revenue lift from Hub System" },
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiences.map((exp) => exp.slug);
}
