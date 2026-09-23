<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Hirely and Jobly — Developer & Agent Guide

## 1. Project Overview
**Hirely and Jobly** is a high-converting, modern EdTech & placement marketing web application built for engineering students (B.Tech) and job seekers in Telangana / Hyderabad. It offers career-oriented courses in Full-Stack, AI/ML, DSA, UI/UX, Game Design, AR/VR, and Cybersecurity with both **Classroom Learning (Madhapur & Ameerpet, Hyderabad)** and **Live Interactive Online** delivery modes.
- **Production URL**: https://hirelyandjobly.vercel.app/
- **Live Deployment**: Linked with Git to Vercel. Pushing to `main` deploys automatically.

## 2. Technology Stack
- **Framework**: Next.js (App Router) + TypeScript (.tsx)
- **Styling**: Tailwind CSS v4 + Vanilla CSS utilities in `app/globals.css`
- **Animations**: Framer Motion (`useInView`, `motion.div`, `AnimatedCounter`)
- **Icons**: Lucide React + custom authentic SVG company badges
- **Content Architecture**: Centralized data in `data/content.ts`

## 3. Directory Structure
```
hirely-jobly/
├── app/
│   ├── globals.css          # Global styling, tokens, marquee & animations
│   ├── layout.tsx           # Root layout, metadata & typography
│   ├── page.tsx             # Main landing page
│   ├── about/page.tsx       # About us & Hyderabad campus hubs
│   ├── contact/page.tsx     # Contact & free demo booking form
│   └── courses/
│       ├── page.tsx         # Course catalog
│       └── [slug]/page.tsx  # Dynamic course details template
├── components/
│   ├── AnimatedCounter.tsx  # Smooth cubic count-up animation on viewport scroll
│   ├── CompanyLogos.tsx     # Authentic SVG brand badges & infinite marquee
│   ├── TrustedByLearners.tsx# Review cards (Trustpilot, Google, Reddit, Course Report)
│   └── Sections.tsx         # Core layout components (Nav, Hero, Stats, Courses, etc.)
├── data/
│   └── content.ts           # Single source of truth for all site copy & course data
└── public/
    └── images/              # Static media & hero assets
```

## 4. Key Rules for Agents & Developers
1. **Centralized Content**: Always edit copy, stats, testimonials, and course data in `data/content.ts`. Do not hardcode content in JSX unless it is structural.
2. **Animation Consistency**: Use `AnimatedCounter` for numerical metrics to ensure numbers smoothly count from 0 to their target when scrolled into view.
3. **Company & Partner Logos**: Use authentic vector SVG components from `CompanyLogos.tsx` rather than low-resolution images or plain text.
4. **Responsive & Accessible**: Ensure all components are responsive across mobile, tablet, and desktop views with semantic HTML tags.
5. **Build Validation**: Always verify code changes by running `npm run build` inside `hirely-jobly/` to ensure zero type errors or broken imports.
6. **Deploy to Vercel (Git Push Rule)**: **The project is git linked to Vercel.** Every time you finish making changes, you must commit and push to Git (`git push origin main`) at the end so the user can see live updates immediately on Vercel.

## 5. Development & Deployment Workflow
```bash
# Start development server
npm run dev

# Run production build & typecheck
npm run build

# Push to Git to trigger live Vercel deployment
git add -A
git commit -m "feat/fix: descriptive commit message"
git push origin main
```
