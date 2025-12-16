# Spec 01: Project Setup & Core Infrastructure

## Overview
Initialize Next.js 14 project with TypeScript, Tailwind CSS, and all required dependencies. Set up the foundation for the portfolio website.

## Tasks

### Task 1.1: Initialize Next.js Project
```bash
npx create-next-app@14 jawad-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Task 1.2: Install Additional Dependencies
```bash
npm install next-themes framer-motion lucide-react gray-matter next-mdx-remote reading-time @tailwindcss/typography
```

### Task 1.3: Configure Tailwind
**File: `tailwind.config.ts`**
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#14b8a6', // teal-500
          hover: '#2dd4bf',   // teal-400
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
```

### Task 1.4: Set Up Global Styles
**File: `src/styles/globals.css`**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 244 244 245; /* zinc-100 */
    --foreground: 39 39 42;    /* zinc-800 */
  }

  .dark {
    --background: 0 0 0;       /* black */
    --foreground: 244 244 245; /* zinc-100 */
  }

  body {
    @apply bg-zinc-100 text-zinc-800 dark:bg-black dark:text-zinc-100;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### Task 1.5: Create Utility Functions
**File: `src/lib/utils.ts`**
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
```

### Task 1.6: Configure Next.js
**File: `next.config.js`**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
```

## Acceptance Criteria
- [ ] Project initializes without errors
- [ ] All dependencies install successfully
- [ ] Tailwind compiles with custom config
- [ ] Dark mode toggle works
- [ ] Dev server runs at localhost:3000

## Dependencies
None (first spec)

## Estimated Complexity
Low - Standard project setup
