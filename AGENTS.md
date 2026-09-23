# Hirely and Jobly — Agent Guide

## 1. Project Overview
**Hirely and Jobly** is a Next.js (App Router) + TypeScript + Tailwind CSS modern EdTech platform tailored for engineering students and job seekers in Hyderabad, Telangana and online.

## 2. Directory Structure
```
Hirelyandjobly/
├── hirely-jobly/            # Main Next.js web application
│   ├── app/                 # Next.js App Router (pages & layouts)
│   ├── components/          # React components (Sections, AnimatedCounter, CompanyLogos, etc.)
│   ├── data/content.ts      # Central content, stats, and course database
│   └── public/              # Static media assets
├── Project_brief.md         # Original specification & requirements
├── ui_finalredesign.md      # AccioJob-style EdTech design guidelines
└── AGENTS.md                # Agent instructions & rules
```

## 3. Tech Stack & Conventions
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + `globals.css`
- **Animations**: Framer Motion
- **Centralized Data**: All editable content is located in `hirely-jobly/data/content.ts`.
- **Animated Counters**: Use `AnimatedCounter` in `hirely-jobly/components/AnimatedCounter.tsx` for metrics that count from 0 to the target.
- **Brand Logos**: Vector SVG brand cards are centralized in `hirely-jobly/components/CompanyLogos.tsx`.
- **Review Badges**: Trustpilot, Google, Reddit, and Course Report ratings are managed in `hirely-jobly/components/TrustedByLearners.tsx`.

## 4. Development Workflow
```bash
# Navigate to the app directory
cd hirely-jobly

# Run local development server
npm run dev

# Validate build & types
npm run build
```
