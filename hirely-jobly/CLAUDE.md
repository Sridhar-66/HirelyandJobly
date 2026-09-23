# Claude Guidelines — Hirely and Jobly

@AGENTS.md

## Quick Reference
- **Root Directory**: `hirely-jobly`
- **Dev Server**: `npm run dev` (starts on port 3000)
- **Build**: `npm run build`
- **Data & Content**: `hirely-jobly/data/content.ts`
- **Components**: `hirely-jobly/components/`
- **Styling**: Tailwind CSS v4 in `hirely-jobly/app/globals.css`

## Key Architecture & Conventions
- **Content-Driven**: All course curriculums, pricing, stats, testimonials, and contact info live in `data/content.ts`.
- **Animated Metrics**: All stat counters use `AnimatedCounter` to animate dynamically from 0 to the target number when visible.
- **Company Logos**: Use the SVG vectors defined in `components/CompanyLogos.tsx`.
- **Learner Social Proof**: The "Trusted By Learners" section (`components/TrustedByLearners.tsx`) features ratings for Trustpilot, Google, Reddit, and Course Report.
- **Hyderabad Campuses**: Highlights classroom hubs in Madhapur & Ameerpet alongside live online interactive batches.
