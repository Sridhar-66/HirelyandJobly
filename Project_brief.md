# PROJECT BRIEF: Hirely and Jobly website

Read this whole file first. Then look at the 8 reference screenshots in /reference (Image 1 to Image 8, in order). Then plan, then build section by section.

## 1. What we are building
A marketing website for **Hirely and Jobly**, a Hyderabad-based training company offering job-ready tech courses to B.Tech students.

The screenshots are a template called "Sevora". Replicate its VISUAL DESIGN closely (layout, spacing, cards, typography, colors, buttons, section order). Replace ALL content with the Hirely and Jobly content below. Never use the name "Sevora".

## 2. Tech stack (do not change)
- Next.js (App Router) + **TypeScript (.tsx)** + Tailwind CSS
- Framer Motion for subtle animations, lucide-react for icons
- Fonts via next/font: Lora (serif headings) + Inter (body)
- All editable text lives in `/data/content.ts`
- One component per section in `/components`
- Responsive (mobile, tablet, desktop), semantic HTML, accessible

Setup:
```bash
npx create-next-app@latest hirely-jobly --typescript --tailwind --app --eslint --src-dir=false --import-alias "@/*"
cd hirely-jobly
npm i framer-motion lucide-react
```

## 3. Design system
- Background: warm light gray (#F5F5F5) with a faint paper texture
- Headings: near-black serif, large, tight tracking. In the hero the last word is muted gray.
- Cards: white, 1px light border, 16px radius, soft shadow, hover lift
- Dark cards: near-black with smoky wisp gradient (rating card, Speed tile, featured testimonial, premium plan)
- Pill eyebrow badge above every section heading
- Buttons: black rounded primary, white outlined secondary, arrow-up-right icon on CTAs
- Navbar (sticky): logo left, centered links (Home, About, Courses, Success Stories, Contact) with the active link in a rounded outline box, black "Enroll now" button right

## 4. Sections in order

**1. Hero (Image 1)**
Rounded light panel. Headline: "Launch your tech career, faster". Subtext: "Industry-ready courses in AI, Cybersecurity, UI/UX and more, built for B.Tech students in Hyderabad and beyond." Buttons: "Explore courses" and "Talk to us". Stats: 7 Courses, 5000+ Students trained, 40+ Hiring partners. Right side: grayscale portrait placeholder. Bottom-right: frosted glass card "Free counselling, book a free demo class" with arrow button. Below the panel: infinite marquee of hiring-partner wordmarks (grayscale placeholders).

**2. Benefits (Image 2)** heading "Discover why students choose us"
Three cards with CSS/SVG mockups: "Industry-built curriculum" (syllabus list), "Hands-on projects" (line chart), "Placement support" (profile/offer card).

**3. Courses (Image 3)** heading "Courses built for your career"
2-column grid of large cover cards, each with a vibrant gradient cover, name bottom-left, arrow bottom-right, linking to `/courses/[slug]`, plus a duration/level chip:
1. AI & Machine Learning
2. Data Structures & Algorithms (DSA)
3. UI/UX Design
4. Cybersecurity & Ethical Hacking
5. AR/VR Development
6. Game Design & Development
7. Full-Stack Web Development (placeholder, easy to swap)

**4. Why choose us (Image 4)** heading "Training built around real outcomes"
Bento grid: avatars + "+3K students"; "92% Placement-ready students"; "56+ Projects built"; "Now enrolling" card with green dot; large dark card with mission text and "4.9 stars, trusted by students across Telangana".

**5. Expertise (Image 5)** heading "Learning support with clear direction"
Bento grid of 8 tiles with icon chips: Affordability, Industry Mentors, Live Projects, Flexibility (weekend and evening batches), Diversity (7 tracks), Career Support, Certification, Fast-track (dark highlighted tile).

**6. Testimonials (Image 6)** heading "What students say"
Large dark featured testimonial, two white testimonials, black "Join our next batch" tile, "Trusted by 5000+ students" chip. Placeholder names and quotes.

**7. Pricing (Image 7)** heading "Simple plans, clear outcomes"
Left white card "Single Course" (placeholder ₹14,999, CTA "Start learning"). Right dark card "Career Bundle" (placeholder ₹34,999, CTA "Book this plan"). Feature lists with check icons. Prices live in the data file.

**8. FAQ + Footer (Image 8)**
"Explore our FAQs" with 8 accordion rows (+ rotates to x): Who can join? Batch timings? Online or offline in Hyderabad? Placement support? Certificate? Fees and refunds? Can I take more than one course? How do I enroll?
Footer card: logo + tagline, Pages and Social columns, huge faded "HIRELY & JOBLY" wordmark across the bottom, black copyright bar.

## 5. Extra pages
- `/courses` (all courses)
- `/courses/[slug]` (one shared template: overview, syllabus modules, tools, projects, career outcomes, Enroll CTA)
- `/about`
- `/contact` (form: name, email, phone, college, course interested in, message; client-side validation and success state, no backend yet)

## 6. Brand
- Company: Hirely and Jobly, Hyderabad, Telangana
- Wordmark logo: letter mark in a black rounded square
- Placeholder contact details, marked with TODO comments

## 7. Quality bar
- Must match the reference polish, not look like a generic template
- Write real copy everywhere, no lorem ipsum
- Subtle scroll animations only
- Run the dev server and check every section at mobile and desktop widths. Fix layout bugs before finishing.
- At the end, summarize the file structure and where to edit content