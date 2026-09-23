# Hirely and Jobly — Agent Guide

## 1. Project Overview
**Hirely and Jobly** is a Next.js (App Router) + TypeScript + Tailwind CSS modern EdTech platform tailored for engineering students and job seekers in Hyderabad, Telangana and online.
- **Production URL**: https://hirelyandjobly.vercel.app/
- **Deployment**: The GitHub repository is directly linked to **Vercel** for continuous deployment. Every commit pushed to `main` triggers an automatic live deployment.

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

## 4. Development & Deployment Workflow
> **IMPORTANT**: The project is connected via Git to Vercel. **Every time you make updates, always commit and push to Git at the end (`git push origin main`) so the user can see live changes on Vercel immediately.**

```bash
# 1. Navigate to the app directory
cd hirely-jobly

# 2. Run local development server
npm run dev

# 3. Validate build & types before deploying
npm run build

# 4. Commit and Push changes to trigger live Vercel deployment
git add -A
git commit -m "feat: description of changes"
git push origin main
```
