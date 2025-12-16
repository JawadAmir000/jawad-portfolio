# Implementation Roadmap

## Phase 1: Foundation (Specs 01-02)
**Goal**: Set up project infrastructure and core layout

### Tasks
1. Initialize Next.js 14 project with TypeScript
2. Install and configure dependencies
3. Set up Tailwind CSS with custom theme
4. Create utility functions (cn, formatDate)
5. Build ThemeProvider and theme toggle
6. Create Container, Header, Footer components
7. Implement root layout with metadata

### Commands to Execute
```bash
# Navigate to project directory
cd C:\Users\DELL\Desktop\Jawd_Website

# Initialize Next.js project
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install additional dependencies
npm install next-themes framer-motion lucide-react gray-matter next-mdx-remote reading-time @tailwindcss/typography clsx tailwind-merge
```

### Validation
- [ ] Dev server runs at localhost:3000
- [ ] Dark/light mode toggle works
- [ ] Navigation links visible
- [ ] Responsive layout

---

## Phase 2: Homepage (Spec 03)
**Goal**: Build the landing page with hero and featured content

### Tasks
1. Create Hero component with name and social links
2. Build FeaturedArticles component with timeline
3. Create WorkExperience component
4. Assemble homepage with all sections
5. Add hover effects and animations

### Validation
- [ ] Hero displays correctly
- [ ] Article cards have hover effects
- [ ] Work experience timeline renders
- [ ] Mobile responsive

---

## Phase 3: Articles System (Spec 04)
**Goal**: Complete MDX-powered blog system

### Tasks
1. Set up content directory structure
2. Create article utility functions
3. Build ArticleList component
4. Create articles listing page
5. Build individual article page
6. Set up MDX rendering
7. Add sample articles

### Content Directory
```
src/content/articles/
├── building-multi-agent-systems.mdx
├── clean-architecture-dotnet.mdx
├── rag-production-guide.mdx
└── microservices-at-scale.mdx
```

### Validation
- [ ] Articles list renders
- [ ] Individual articles render MDX
- [ ] Code syntax highlighting works
- [ ] Reading time calculated
- [ ] SEO metadata generated

---

## Phase 4: Portfolio Section (Spec 05)
**Goal**: Project showcase with case studies

### Tasks
1. Create project utility functions
2. Build ProjectGrid component
3. Create portfolio listing page
4. Build individual project pages
5. Add project data (from resume)

### Validation
- [ ] Project grid displays
- [ ] Featured projects highlighted
- [ ] Project cards have links
- [ ] Individual pages render

---

## Phase 5: About Page (Spec 06)
**Goal**: Personal brand and contact page

### Tasks
1. Create About page with bio
2. Build SkillsSection component
3. Add education and achievements
4. Style contact information
5. Add profile image

### Validation
- [ ] Bio renders correctly
- [ ] Skills categorized properly
- [ ] Contact links work
- [ ] Profile image displays

---

## Phase 6: Polish & Deploy
**Goal**: Final touches and production deployment

### Tasks
1. Add Framer Motion animations
2. Optimize images with next/image
3. Add SEO metadata and sitemap
4. Configure for Vercel deployment
5. Add RSS feed for articles
6. Performance optimization
7. Accessibility audit

### Deployment Commands
```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Validation
- [ ] Lighthouse score 95+
- [ ] All pages load correctly
- [ ] Dark mode works in production
- [ ] RSS feed generates
- [ ] Sitemap accessible

---

## Implementation Order

```
┌─────────────────────────────────────────────────────┐
│  Phase 1: Foundation                                │
│  ├── Project Setup                                  │
│  └── Layout Components                              │
└─────────────────────┬───────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│  Phase 2: Homepage                                  │
│  ├── Hero Section                                   │
│  ├── Featured Articles                              │
│  └── Work Experience                                │
└─────────────────────┬───────────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
┌───────▼───────┐           ┌───────▼───────┐
│ Phase 3:      │           │ Phase 4:      │
│ Articles      │           │ Portfolio     │
│ System        │           │ Section       │
└───────┬───────┘           └───────┬───────┘
        │                           │
        └─────────────┬─────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│  Phase 5: About Page                                │
└─────────────────────┬───────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│  Phase 6: Polish & Deploy                           │
│  ├── Animations                                     │
│  ├── SEO                                            │
│  └── Vercel Deployment                              │
└─────────────────────────────────────────────────────┘
```

---

## Asset Checklist

### Images Needed
- [ ] Profile photo (`/public/images/profile.jpg`)
- [ ] Company logos for work experience (optional)
- [ ] Project screenshots (optional)
- [ ] Favicon (`/public/favicon.ico`)
- [ ] OG image for social sharing

### Content Needed
- [ ] 3-5 initial articles in MDX format
- [ ] Project descriptions (already have from resume)
- [ ] Bio text (already have from resume)

---

## Tech Stack Summary

| Category | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 14 | App Router, RSC, SSG |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Utility-first, fast dev |
| Content | MDX | Rich articles with components |
| Animations | Framer Motion | Smooth, declarative |
| Icons | Lucide React | Consistent, tree-shakeable |
| Theme | next-themes | Dark mode support |
| Deployment | Vercel | Zero-config, edge network |

---

## Estimated Total Effort

- **Phase 1**: Foundation setup
- **Phase 2**: Homepage development
- **Phase 3**: Articles system
- **Phase 4**: Portfolio section
- **Phase 5**: About page
- **Phase 6**: Polish & deploy

Each phase builds on the previous, with Phases 3 and 4 being parallelizable.
