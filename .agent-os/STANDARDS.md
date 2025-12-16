# Development Standards: Jawad Amir Portfolio

## Technology Stack

### Core Framework
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3.4+
- **Content**: MDX for articles
- **Animations**: Framer Motion

### Dependencies (Minimal)
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tailwindcss/typography": "^0.5.10",
    "next-mdx-remote": "^4.4.1",
    "gray-matter": "^4.0.3",
    "framer-motion": "^11.0.0",
    "next-themes": "^0.2.1",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

## Project Structure

```
jawad-portfolio/
├── .agent-os/
│   ├── PRODUCT.md          # Product vision & strategy
│   ├── STANDARDS.md        # This file
│   └── specs/              # Feature specifications
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── articles/
│   │   │   ├── page.tsx    # Articles list
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx    # Portfolio list
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── about/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── articles/
│   │   │   ├── ArticleCard.tsx
│   │   │   └── ArticleList.tsx
│   │   └── portfolio/
│   │       ├── ProjectCard.tsx
│   │       └── ProjectGrid.tsx
│   ├── lib/
│   │   ├── articles.ts     # Article fetching utilities
│   │   ├── projects.ts     # Project data utilities
│   │   └── utils.ts        # Common utilities
│   ├── content/
│   │   ├── articles/       # MDX files
│   │   └── projects/       # Project MDX/data
│   └── styles/
│       └── globals.css     # Tailwind imports
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## Coding Conventions

### TypeScript Standards
```typescript
// Always use explicit types for function parameters and returns
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Use interfaces for object shapes
interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

// Use type for unions and primitives
type Theme = 'light' | 'dark' | 'system';
```

### React Component Patterns
```typescript
// Use functional components with explicit props interface
interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    // Component JSX
  );
}

// Default exports only for pages
// Named exports for components
export { ArticleCard };
```

### Tailwind CSS Conventions
```typescript
// Use cn() utility for conditional classes
import { cn } from '@/lib/utils';

<div className={cn(
  "rounded-lg p-4",
  featured && "border-2 border-teal-500",
  className
)}>

// Mobile-first responsive design
<div className="text-sm md:text-base lg:text-lg">

// Use design tokens from tailwind.config.ts
// Avoid arbitrary values when possible
```

### File Naming
- **Components**: PascalCase (`ArticleCard.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Pages**: lowercase with hyphens (`/articles/my-article`)
- **Content**: lowercase with hyphens (`building-ai-agents.mdx`)

## Component Architecture

### Layout Components
```typescript
// Container - consistent max-width and padding
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8", className)}>
      {children}
    </div>
  );
}
```

### Animation Standards (Framer Motion)
```typescript
// Consistent animation presets
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

// Card hover effects (matching reference site)
export const cardHover = {
  initial: { scale: 0.95, opacity: 0 },
  whileHover: { scale: 1, opacity: 1 }
};
```

## Content Management

### Article Frontmatter Schema
```yaml
---
title: "Building Multi-Agent Systems"
description: "A deep dive into orchestrating autonomous AI agents"
date: "2025-01-15"
tags: ["AI", "Agents", "Python"]
featured: true
image: "/images/articles/multi-agent.jpg"
---
```

### Project Data Schema
```yaml
---
title: "Donna AI Platform"
description: "Multimodal personal AI assistant"
date: "2024-09-01"
tags: ["AI", "Python", "Django", "Claude SDK"]
github: "https://github.com/..."
live: "https://donna.ai"
featured: true
image: "/images/projects/donna-ai.jpg"
---
```

## Performance Guidelines

### Image Optimization
```typescript
// Always use next/image
import Image from 'next/image';

<Image
  src="/images/profile.jpg"
  alt="Jawad Amir"
  width={400}
  height={400}
  priority // For above-the-fold images
  className="rounded-2xl"
/>
```

### Code Splitting
- Use dynamic imports for heavy components
- Keep initial bundle < 100KB
- Lazy load below-the-fold content

### Font Loading
```typescript
// next/font for optimal loading
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

## Accessibility Requirements

1. **Semantic HTML**: Use proper heading hierarchy (h1 > h2 > h3)
2. **ARIA Labels**: Add labels for interactive elements
3. **Focus States**: Visible focus indicators
4. **Color Contrast**: Minimum 4.5:1 ratio
5. **Keyboard Navigation**: Full site navigable via keyboard

## Testing Approach

### Manual Testing Checklist
- [ ] All pages render correctly
- [ ] Dark/light mode works
- [ ] Mobile responsive layouts
- [ ] Links work correctly
- [ ] Images load with fallbacks
- [ ] Forms validate and submit

### Lighthouse Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
