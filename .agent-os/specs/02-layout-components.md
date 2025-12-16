# Spec 02: Layout & Navigation Components

## Overview
Build the core layout components including Header, Footer, Container, and theme toggle that will be used across all pages.

## Tasks

### Task 2.1: Root Layout
**File: `src/app/layout.tsx`**
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Jawad Amir - Senior Software Engineer & AI Specialist',
    template: '%s | Jawad Amir',
  },
  description: 'Senior Software Engineer with 6+ years of experience in .NET, Cloud Architecture, and AI Innovation.',
  keywords: ['Software Engineer', 'AI', '.NET', 'Azure', 'AWS', 'Microservices'],
  authors: [{ name: 'Jawad Amir' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jawadamir.dev',
    title: 'Jawad Amir - Senior Software Engineer & AI Specialist',
    description: 'Building high-performance, cloud-native, and AI-driven solutions',
    siteName: 'Jawad Amir',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jawad Amir - Senior Software Engineer & AI Specialist',
    description: 'Building high-performance, cloud-native, and AI-driven solutions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Task 2.2: Theme Provider
**File: `src/components/providers/ThemeProvider.tsx`**
```typescript
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### Task 2.3: Container Component
**File: `src/components/layout/Container.tsx`**
```typescript
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8',
      className
    )}>
      {children}
    </div>
  );
}
```

### Task 2.4: Header Component
**File: `src/components/layout/Header.tsx`**
```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/articles', label: 'Articles' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-zinc-100/80 backdrop-blur dark:bg-black/80">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <Link
            href="/"
            className="text-lg font-semibold text-zinc-800 hover:text-teal-500 dark:text-zinc-100 dark:hover:text-teal-400"
          >
            Jawad Amir
          </Link>

          <div className="flex items-center gap-6">
            <ul className="flex gap-6">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      pathname === href
                        ? 'text-teal-500 dark:text-teal-400'
                        : 'text-zinc-600 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
```

### Task 2.5: Footer Component
**File: `src/components/layout/Footer.tsx`**
```typescript
import Link from 'next/link';
import { Container } from './Container';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/JawadAmir000', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jawad-amir', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:xawadamir0@gmail.com', icon: Mail, label: 'Email' },
];

const navLinks = [
  { href: '/articles', label: 'Articles' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container className="py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-zinc-600 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Jawad Amir. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
```

### Task 2.6: Theme Toggle
**File: `src/components/ui/ThemeToggle.tsx`**
```typescript
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full p-2 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
```

## Acceptance Criteria
- [ ] Header renders with navigation links
- [ ] Active navigation state shows teal color
- [ ] Footer renders with social links
- [ ] Theme toggle switches between light/dark
- [ ] Layout is responsive on all screen sizes
- [ ] Sticky header with backdrop blur works

## Dependencies
- Spec 01: Project Setup

## Estimated Complexity
Medium - Multiple interconnected components
