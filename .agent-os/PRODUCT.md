# Product Definition: Jawad Amir Portfolio Website

## Vision Statement

A modern, minimalist portfolio website inspired by ashpreetbedi.com that showcases Jawad Amir as a **Senior Software Engineer & AI Innovation Specialist**. The site will feature an articles/blog section for technical writing and a portfolio section highlighting enterprise-grade projects.

## Target Audience

1. **Technical Recruiters** - Fortune 500 companies, startups seeking senior engineers
2. **Potential Clients** - Companies needing AI/cloud architecture consulting
3. **Fellow Engineers** - Developers seeking technical insights through articles
4. **Open Source Community** - Contributors interested in collaboration

## Core Value Proposition

- **Credibility**: Showcase 6+ years of Fortune 500 & startup experience
- **Expertise**: Demonstrate AI/ML, .NET, cloud architecture proficiency
- **Thought Leadership**: Share technical articles on AI agents, microservices, cloud patterns
- **Accessibility**: Clean, fast, accessible design with dark/light modes

## Brand Identity

### Color Palette (Inspired by Reference)
```
Primary Background (Light): zinc-100 (#f4f4f5)
Primary Background (Dark): black (#000000)
Text Primary (Light): zinc-800 (#27272a)
Text Primary (Dark): zinc-100 (#f4f4f5)
Accent Color: teal-500 (#14b8a6)
Accent Hover: teal-400 (#2dd4bf)
Secondary Text: zinc-500 (#71717a)
Card Background: zinc-50 (#fafafa)
```

### Typography
- **Headings**: Inter/System font, bold weight
- **Body**: Inter/System font, regular weight
- **Code**: JetBrains Mono/Fira Code

### Design Principles
1. **Minimalism** - Clean whitespace, focused content
2. **Readability** - High contrast, accessible typography
3. **Performance** - Fast loading, optimized images
4. **Responsive** - Mobile-first design approach

## Site Architecture

```
jawadamir.dev/
├── / (Homepage)
│   ├── Hero Section (Name + Tagline + Social Links)
│   ├── Featured Articles (Latest 4)
│   └── Work Experience Timeline
├── /articles
│   ├── Article List (All articles with dates)
│   └── /articles/[slug] (Individual article pages)
├── /portfolio
│   ├── Project Grid/List
│   └── /portfolio/[slug] (Project detail pages)
├── /about
│   ├── Bio + Photo
│   ├── Skills/Tech Stack
│   └── Contact Information
└── /contact (Optional - or integrate in About)
```

## Content Strategy

### Articles Section (Technical Blog)
Potential article topics based on expertise:
1. **AI Agents & Orchestration**
   - "Building Multi-Agent Systems with Claude Agent SDK"
   - "RAG Architecture: From Theory to Production"
   - "Autonomous Agent Orchestration Patterns"

2. **Cloud & Architecture**
   - "Clean Architecture with .NET Core 8"
   - "CQRS and Event Sourcing in Practice"
   - "Microservices at Scale: Lessons from Fortune 500"

3. **DevOps & Infrastructure**
   - "Kubernetes on AWS EKS: Production Patterns"
   - "CI/CD with GitHub Actions for .NET"

### Portfolio Projects
1. **Donna AI Platform** (Autonomix)
   - Multimodal AI assistant
   - Multi-agent orchestration
   - Claude Agent SDK + ElevenLabs + HeyGen

2. **IQVIA Healthcare Platform**
   - AI-powered clinical decision support
   - RAG with Pinecone
   - Enterprise microservices

3. **LLM-Powered Virtual CV Assistant**
   - OpenAI + Python + Gradio
   - Hugging Face deployment

4. **Enterprise E-Commerce Platform**
   - Microservices architecture
   - MongoDB, Redis, PostgreSQL
   - RabbitMQ + MassTransit

5. **Full-Stack Employee Management**
   - Angular + .NET Core
   - Clean Architecture + CQRS

## Technical Requirements

### Performance Targets
- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 100KB initial JS

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios met

### SEO
- Server-side rendering
- Structured data (JSON-LD)
- Open Graph meta tags
- Sitemap generation

## Success Metrics

1. **Portfolio Views** - Track project page engagement
2. **Article Reads** - Time on page, scroll depth
3. **Contact Conversions** - Form submissions, email clicks
4. **Performance** - Core Web Vitals scores
