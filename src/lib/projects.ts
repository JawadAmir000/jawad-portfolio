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
      slug: "anlytic-multi-agent-platform",
      title: "Anlytic — Multi-Agent Analytics Platform",
      description:
        "Plain-English questions become live dashboards across 8 visualisation types — built on the Vercel AI SDK and Anthropic Claude.",
      longDescription:
        "A production multi-agent AI analytics platform. A Claude Haiku classifier routes user queries to specialised agents — chart generation, dashboard editing, data management, general analytics — built on the Vercel AI SDK and Anthropic Claude. Includes a dual compression system that cuts LLM API spend 60–70% and a human-in-the-loop approval layer for every destructive operation.",
      date: "2026-02-01",
      tags: [
        "Anthropic Claude",
        "Vercel AI SDK",
        "MCP",
        "TypeScript",
        "Multi-Agent",
        "RAG",
      ],
      featured: true,
      company: "Anlytic",
      role: "AI Engineer",
      highlights: [
        "Routes user queries through a Claude Haiku classifier into four specialised agents (chart generation, dashboard editing, data management, general analytics).",
        "Generates the full chart config and data query end-to-end across 8 visualisation types — bar, line, pie, heatmap, icicle, pivot, headline, table.",
        "Cuts LLM API costs 60–70% via a dual compression system that strips tool schemas and summarises old tool-call results in message history.",
        "Human-in-the-loop approval layer gates every schema change, row edit, and table deletion before any destructive operation runs.",
        "MCP (Model Context Protocol) integration enables runtime loading of documentation tools with timeout protection and graceful fallback.",
        "Long sessions stay stable via Anthropic's native compaction API — preserves critical IDs and user context while compressing history.",
      ],
    },
    {
      slug: "donna-ai-platform",
      title: "Donna AI — Multimodal Personal Assistant",
      description:
        "Voice, video, and text interactions on Claude Agent SDK, ElevenLabs, and HeyGen — with proactive alerts across Slack, WhatsApp, and email.",
      longDescription:
        "A multimodal personal AI assistant built on the Claude Agent SDK with ElevenLabs voice and HeyGen video avatars. Architected a multi-agent orchestration system on Python/Django and Azure AI Foundry to coordinate autonomous agents through an event-driven architecture, with a secure integration framework connecting communication platforms and data sources.",
      date: "2024-09-01",
      tags: [
        "Python",
        "Django",
        "Claude Agent SDK",
        "ElevenLabs",
        "HeyGen",
        "Azure AI Foundry",
      ],
      featured: true,
      company: "Autonomix",
      role: "AI Software Engineer · Part-Time",
      highlights: [
        "Multimodal personal AI assistant — voice (ElevenLabs), video (HeyGen avatars), and text in a single coherent interface.",
        "Multi-agent orchestration system on Python/Django and Azure AI Foundry, coordinated through an event-driven architecture.",
        "Secure integration framework connecting AI agents with Slack, WhatsApp, and email for real-time multimodal interaction.",
      ],
    },
    {
      slug: "iqvia-healthcare-platform",
      title: "IQVIA — Clinical Decision Support",
      description:
        "Enterprise microservices and RAG-powered clinical decision support across millions of patient records.",
      longDescription:
        "Enterprise-grade healthcare platform leveraging .NET Core 8, Clean Architecture, CQRS with MediatR, and DDD — supporting millions of patient records globally. Includes an AI-powered clinical decision support system on OpenAI GPT-4 and Azure OpenAI, with a Pinecone-backed RAG layer that cut clinician research time by 40%.",
      date: "2024-09-01",
      tags: [
        ".NET Core 8",
        "Azure OpenAI",
        "Pinecone",
        "Snowflake",
        "AWS EKS",
      ],
      featured: true,
      company: "IQVIA · Fortune 500",
      role: "Senior Software Engineer",
      highlights: [
        "Enterprise microservices on .NET Core 8 — Clean Architecture, CQRS with MediatR, Domain-Driven Design — supporting millions of patient records.",
        "AI-powered clinical decision support on OpenAI GPT-4 and Azure OpenAI delivering evidence-based treatment recommendations and drug-interaction warnings.",
        "Pinecone-backed RAG system cut clinician research time by 40% via AI-driven search across millions of medical papers and clinical studies.",
        "Snowflake OLAP integration improved processing on large clinical datasets by 7% while reducing AWS costs.",
        "ML-based anomaly detection improved clinical-trial data accuracy by 35%, reducing manual review and strengthening regulatory compliance.",
      ],
    },
    {
      slug: "virtual-cv-assistant",
      title: "LLM-Powered Virtual CV Assistant",
      description:
        "Interactive AI assistant for real-time Q&A over resume content — OpenAI + Python + Gradio on Hugging Face Spaces.",
      date: "2024-06-01",
      tags: ["OpenAI", "Python", "Gradio", "Hugging Face"],
      featured: true,
      github: "https://github.com/JawadAmir000",
      highlights: [
        "Interactive AI-powered virtual assistant built with OpenAI, Python, and Gradio for real-time Q&A over resume content.",
        "Deployed on Hugging Face Spaces for public access.",
        "Pushover notifications for off-topic queries and incoming connection requests.",
      ],
    },
    {
      slug: "ecommerce-microservices",
      title: "Enterprise E-Commerce Microservices",
      description:
        "Multi-service platform with Catalog, Basket, Discount, and Ordering services behind an Ocelot API Gateway.",
      date: "2023-01-01",
      tags: [
        "ASP.NET Core",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
      ],
      featured: false,
      github: "https://github.com/JawadAmir000",
      highlights: [
        "Catalog (MongoDB), Basket (Redis), Discount (gRPC + PostgreSQL), Ordering (DDD + MediatR).",
        "Ocelot API Gateway for routing.",
        "RabbitMQ + MassTransit for inter-service messaging.",
        "Clean Architecture and CQRS throughout.",
      ],
    },
    {
      slug: "employee-management-system",
      title: "Full-Stack Employee Management",
      description:
        "Angular + Angular Material front end with .NET Core + MongoDB back end on Clean Architecture and CQRS.",
      date: "2022-06-01",
      tags: ["Angular", "Angular Material", ".NET Core", "MongoDB", "CQRS"],
      featured: false,
      github: "https://github.com/JawadAmir000",
      highlights: [
        "Full-stack application using Angular, Angular Material, and .NET Core with MongoDB.",
        "Clean Architecture principles with the CQRS pattern.",
        "Intuitive interfaces for seamless employee data management.",
      ],
    },
  ];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}
