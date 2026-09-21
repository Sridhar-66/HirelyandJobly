// ─────────────────────────────────────────────
//  EDIT ALL TEXT HERE.  TODO = placeholder to replace before launch.
// ─────────────────────────────────────────────

export const site = {
  name: "Hirely and Jobly",
  city: "Hyderabad, Telangana",
  email: "hello@hirelyandjobly.com", // TODO real email
  phone: "+91 00000 00000",          // TODO real phone
};

export const stats: [string, string][] = [
  ["7", "Courses"],
  ["5000+", "Students trained"],
  ["40+", "Hiring partners"],
];

export const partners = [
  "Codify", "Flowboard", "Agentify", "TodoFusion",
  "Identify", "Nexus AI", "Landify", "Stackly",
]; // TODO replace with real partner names

export const courses = [
  { slug: "ai-ml",         name: "AI & Machine Learning",           meta: "16 weeks · Intermediate", cover: "from-orange-300 to-rose-400",    dark: false },
  { slug: "dsa",           name: "Data Structures & Algorithms",    meta: "12 weeks · Beginner",      cover: "from-lime-300 to-lime-500",      dark: false },
  { slug: "ui-ux",         name: "UI/UX Design",                   meta: "10 weeks · Beginner",      cover: "from-emerald-800 to-emerald-950",dark: true  },
  { slug: "cybersecurity", name: "Cybersecurity & Ethical Hacking", meta: "14 weeks · Intermediate", cover: "from-zinc-700 to-black",         dark: true  },
  { slug: "ar-vr",         name: "AR/VR Development",              meta: "12 weeks · Intermediate", cover: "from-violet-400 to-indigo-600",  dark: true  },
  { slug: "game-design",   name: "Game Design & Development",       meta: "14 weeks · Beginner",      cover: "from-amber-300 to-orange-500",   dark: false },
  { slug: "full-stack",    name: "Full-Stack Web Development",      meta: "16 weeks · Beginner",      cover: "from-sky-300 to-blue-500",       dark: false }, // TODO confirm 7th course
];

export const benefits = [
  { t: "Industry-built curriculum", d: "Syllabi shaped with hiring managers so every module maps to a real job skill." },
  { t: "Hands-on projects",         d: "Build portfolio-ready projects every week instead of only watching lectures." },
  { t: "Placement support",         d: "Resume reviews, mock interviews and referrals to our hiring partners." },
];

export const why = {
  clients: "+3K students",
  sat:     "92%",
  satL:    "Placement-ready students",
  proj:    "56+",
  projL:   "Projects built",
  quote:   "We help B.Tech students turn classroom knowledge into skills companies actually hire for.",
  rating:  "4.9",
  ratingL: "Trusted by students across Telangana",
};

export const tiles: [string, string][] = [
  ["Affordability",    "Quality training at a fraction of typical bootcamp costs."],
  ["Industry mentors", "Learn from people who work in the field every day."],
  ["Live projects",    "Real briefs, real code reviews, real feedback."],
  ["Flexibility",      "Weekend and evening batches so you finish alongside college."],
  ["Diversity",        "Seven tracks, from AI to game design — pick what fits your goal."],
  ["Career support",   "Interview prep and referrals until you land your role."],
  ["Certification",    "Certificates recognised by our 40+ hiring partners."],
  ["Fast-track",       "Finish a course in weeks, not years. Structured for speed."],
];

export const testimonials = [
  { n: "Ananya R.", r: "B.Tech CSE, 4th year", q: "The AI/ML course was clear from week one, and my capstone project got me interview calls within a month of finishing." },
  { n: "Karthik M.", r: "B.Tech IT",            q: "DSA finally clicked. The weekly contests and mentor feedback made all the difference for my campus placements." },
  { n: "Sneha P.",   r: "B.Tech ECE",            q: "I switched to UI/UX and landed an internship before my final semester. The portfolio review sessions were invaluable." },
]; // TODO replace with real verified quotes

export const plans = [
  {
    name: "Single Course", dark: false,
    desc:  "One track of your choice, taught by industry mentors.",
    price: "₹14,999",
    cta:   "Start learning",
    f: ["Live online & offline classes", "Weekly hands-on projects", "Course completion certificate", "Doubt-clearing sessions", "Resume review"],
  },
  {
    name: "Career Bundle", dark: true,
    desc:  "Any two tracks plus full placement preparation.",
    price: "₹34,999",
    cta:   "Book this plan",
    f: ["Two courses of your choice", "Mock interviews (3 rounds)", "Full portfolio review", "Referrals to 40+ partners", "Priority mentor access"],
  },
]; // TODO real prices confirmed

export const faqs: [string, string][] = [
  ["Who can join?",                  "Any B.Tech student or recent graduate. Beginner tracks need no prior coding experience."],
  ["What are the batch timings?",    "Weekday evening (7–9 pm) and full-day weekend batches. Exact timings are shared before enrollment."],
  ["Are classes online or offline?", "Both. Offline classes are held at our Hyderabad centre; every session is also streamed live for remote students."],
  ["Do you provide placement support?", "Yes: resume reviews, mock interviews and warm referrals to our network of 40+ hiring partners."],
  ["Will I get a certificate?",      "Yes — a digital certificate is issued after you complete the course and submit the final project."],
  ["What is the fee and refund policy?", "Fees are listed under Pricing. We offer a full refund within 7 days of the first class if you are not satisfied."],
  ["Can I take more than one course?", "Absolutely. The Career Bundle covers two tracks at a significantly lower combined price."],
  ["How do I enroll?",               "Click Enroll Now, or book a free demo class and our counsellor will walk you through everything."],
];

// ─────────────────────────────────────────────
//  Per-course detail data for /courses/[slug]
// ─────────────────────────────────────────────
export type CourseDetail = {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  cover: string;
  dark: boolean;
  meta: string;
  modules: { title: string; topics: string[] }[];
  tools: string[];
  projects: string[];
  outcomes: string[];
};

export const courseDetails: CourseDetail[] = [
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    tagline: "Go from Python basics to building and deploying real ML models.",
    overview: "This 16-week course takes you from Python fundamentals through supervised learning, neural networks and model deployment. You will build three portfolio projects — a sentiment analyser, an image classifier and a recommendation engine — using real datasets sourced from Indian companies.",
    cover: "from-orange-300 to-rose-400",
    dark: false,
    meta: "16 weeks · Intermediate",
    modules: [
      { title: "Python & Data Foundations", topics: ["Python for data science", "NumPy & Pandas", "Exploratory data analysis", "Data visualisation with Matplotlib"] },
      { title: "Core Machine Learning", topics: ["Supervised learning", "Regression & classification", "Decision trees & random forests", "Model evaluation & cross-validation"] },
      { title: "Deep Learning", topics: ["Neural network fundamentals", "TensorFlow & Keras", "CNNs for image tasks", "Transfer learning"] },
      { title: "Deployment & Capstone", topics: ["Flask / FastAPI APIs", "Deploying to the cloud", "Capstone: end-to-end ML product", "Portfolio & presentation prep"] },
    ],
    tools: ["Python", "Jupyter", "scikit-learn", "TensorFlow", "Keras", "Pandas", "FastAPI", "Google Colab"],
    projects: ["Sentiment analyser for product reviews", "Image classifier for plant disease detection", "Movie recommendation engine", "End-to-end ML product (capstone)"],
    outcomes: ["Junior ML Engineer", "Data Analyst", "AI Associate at product companies", "ML internships at funded startups"],
  },
  {
    slug: "dsa",
    name: "Data Structures & Algorithms",
    tagline: "Crack coding rounds at top companies with structured problem-solving.",
    overview: "A 12-week deep dive into the data structures and algorithms tested by every tech company in their hiring process. You will solve 200+ curated problems, participate in weekly timed contests and receive personalised mentor feedback on your solutions.",
    cover: "from-lime-300 to-lime-500",
    dark: false,
    meta: "12 weeks · Beginner",
    modules: [
      { title: "Arrays, Strings & Recursion", topics: ["Two-pointer technique", "Sliding window", "Recursion & backtracking", "String manipulation patterns"] },
      { title: "Linked Lists, Stacks & Queues", topics: ["Singly & doubly linked lists", "Stack-based problems", "Monotonic queues", "LRU cache implementation"] },
      { title: "Trees & Graphs", topics: ["Binary trees & BSTs", "BFS & DFS", "Graph representation", "Shortest path algorithms"] },
      { title: "Dynamic Programming & Contests", topics: ["Memoisation vs tabulation", "Knapsack & coin-change patterns", "Greedy algorithms", "Mock contest + debrief"] },
    ],
    tools: ["C++ / Java / Python (your choice)", "LeetCode", "HackerRank", "Codeforces", "VS Code"],
    projects: ["LeetCode 150 completion tracker", "Contest-ready solution template library", "Peer code-review portfolio"],
    outcomes: ["SDE Intern (service & product companies)", "FAANG interview shortlists", "On-campus placement readiness", "Competitive programming ranking"],
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    tagline: "Design products people love — from research to a polished prototype.",
    overview: "A 10-week hands-on course covering the full product design process: user research, wireframing, visual design, prototyping and usability testing. You will design two complete products and build a Figma portfolio ready to show at interviews.",
    cover: "from-emerald-800 to-emerald-950",
    dark: true,
    meta: "10 weeks · Beginner",
    modules: [
      { title: "Design Thinking & Research", topics: ["User interviews & surveys", "Affinity mapping", "Persona creation", "Problem framing"] },
      { title: "Wireframing & Information Architecture", topics: ["Site maps & user flows", "Low-fidelity wireframes", "Card sorting", "Navigation patterns"] },
      { title: "Visual Design", topics: ["Typography & colour theory", "Design systems & tokens", "Component libraries in Figma", "Accessibility (WCAG)"] },
      { title: "Prototyping & Handoff", topics: ["Interactive Figma prototypes", "Usability testing & iteration", "Developer handoff with Figma", "Portfolio case study writing"] },
    ],
    tools: ["Figma", "FigJam", "Maze", "Notion", "Zeroheight", "Lottie"],
    projects: ["Mobile app redesign (real app, real critique)", "B2B SaaS dashboard design", "Full product design case study (capstone)"],
    outcomes: ["UI/UX Designer", "Product Designer at startups", "Design intern at agencies", "Freelance product design"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Ethical Hacking",
    tagline: "Learn to think like an attacker — and defend like a professional.",
    overview: "A 14-week course covering networking fundamentals, penetration testing, web application security, and incident response. You will work in a legal lab environment, exploit intentionally vulnerable machines and write professional security reports.",
    cover: "from-zinc-700 to-black",
    dark: true,
    meta: "14 weeks · Intermediate",
    modules: [
      { title: "Networking & OS Fundamentals", topics: ["TCP/IP, DNS, HTTP deep dive", "Linux command line for security", "Wireshark packet analysis", "Virtual lab setup"] },
      { title: "Reconnaissance & Scanning", topics: ["OSINT techniques", "Nmap & Nessus", "Enumeration methods", "Vulnerability databases"] },
      { title: "Exploitation & Post-Exploitation", topics: ["Metasploit framework", "Web app attacks (OWASP Top 10)", "Privilege escalation", "Maintaining access & covering tracks"] },
      { title: "Defence & Reporting", topics: ["Incident response process", "Log analysis & SIEM basics", "Writing penetration test reports", "Capstone: full CTF challenge"] },
    ],
    tools: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark", "TryHackMe", "HackTheBox"],
    projects: ["Penetration test of a vulnerable web app (DVWA)", "Network audit report", "CTF competition entry", "Full pentest report (capstone)"],
    outcomes: ["Junior Security Analyst", "SOC Analyst L1", "Penetration Tester (entry level)", "Bug bounty hunter"],
  },
  {
    slug: "ar-vr",
    name: "AR/VR Development",
    tagline: "Build immersive experiences for the spatial computing era.",
    overview: "A 12-week course covering AR and VR development with Unity and WebXR. You will build an AR product try-on experience, a VR training simulation and a WebXR browser experience — a rare and in-demand portfolio combination.",
    cover: "from-violet-400 to-indigo-600",
    dark: true,
    meta: "12 weeks · Intermediate",
    modules: [
      { title: "Unity & C# Fundamentals", topics: ["Unity editor & scene management", "C# scripting for Unity", "Physics & colliders", "3D asset basics"] },
      { title: "VR Development", topics: ["XR Interaction Toolkit", "Controller input & haptics", "VR locomotion patterns", "Performance optimisation for VR"] },
      { title: "AR Development", topics: ["AR Foundation (ARCore & ARKit)", "Plane detection & anchors", "Image tracking", "AR UI best practices"] },
      { title: "WebXR & Capstone", topics: ["Three.js & WebXR basics", "Publishing to the web", "Meta Quest sideloading", "Capstone: full XR experience"] },
    ],
    tools: ["Unity", "C#", "AR Foundation", "Meta Quest", "Three.js", "WebXR", "Blender (basics)", "Figma"],
    projects: ["AR furniture placement app", "VR safety-training simulation", "WebXR product showcase", "Capstone XR experience"],
    outcomes: ["AR/VR Developer at product studios", "XR Engineer at enterprise clients", "Unity Developer", "Metaverse/spatial computing roles"],
  },
  {
    slug: "game-design",
    name: "Game Design & Development",
    tagline: "Design, build and ship your own game from first idea to final level.",
    overview: "A 14-week course covering the full game development pipeline: game design theory, Unity development, art integration, game feel, and publishing. You will finish the course with a complete, playable game that you can submit to the Google Play Store.",
    cover: "from-amber-300 to-orange-500",
    dark: false,
    meta: "14 weeks · Beginner",
    modules: [
      { title: "Game Design Theory", topics: ["Core loops & game feel", "Level design principles", "Player psychology & reward systems", "Rapid prototyping with paper"] },
      { title: "Unity 2D Game Development", topics: ["Sprites, tilemaps & animations", "Rigidbody & collision", "Player controller scripting", "Enemy AI (state machines)"] },
      { title: "Polish & Game Systems", topics: ["Audio integration", "Particle systems & VFX", "UI & heads-up display", "Saving & loading data"] },
      { title: "Publishing & Portfolio", topics: ["Google Play Store submission", "Press kit creation", "Game jam participation", "Portfolio case study"] },
    ],
    tools: ["Unity", "C#", "Aseprite", "Audacity", "itch.io", "Google Play Console", "Figma"],
    projects: ["Endless runner prototype", "Puzzle platformer (full playable game)", "Game jam entry", "Published mobile game (capstone)"],
    outcomes: ["Junior Unity Developer", "Game Designer at indie studios", "Mobile game developer", "Freelance Unity contractor"],
  },
  {
    slug: "full-stack",
    name: "Full-Stack Web Development",
    tagline: "Build complete web products — frontend, backend, database and deployment.",
    overview: "A 16-week course covering the modern full-stack: React, Node.js, databases and deployment on the cloud. You will build four complete web applications and leave with a portfolio that shows you can take a product from zero to production.", // TODO confirm 7th course content
    cover: "from-sky-300 to-blue-500",
    dark: false,
    meta: "16 weeks · Beginner",
    modules: [
      { title: "HTML, CSS & JavaScript", topics: ["Semantic HTML & CSS layout", "JavaScript ES2024 fundamentals", "DOM manipulation", "Responsive design with Flexbox & Grid"] },
      { title: "React & Frontend Tooling", topics: ["React components & hooks", "State management (Zustand)", "React Router & Next.js basics", "TypeScript fundamentals"] },
      { title: "Backend with Node.js", topics: ["Express REST APIs", "Authentication with JWTs", "PostgreSQL & Prisma ORM", "Testing with Jest"] },
      { title: "Deployment & Capstone", topics: ["Docker basics", "Deployment on Vercel + Railway", "CI/CD with GitHub Actions", "Capstone: full SaaS product"] },
    ],
    tools: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "Vercel", "GitHub Actions", "TypeScript"],
    projects: ["Personal portfolio site", "To-do app with auth", "REST API with database", "Full SaaS product (capstone)"],
    outcomes: ["Junior Full-Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer at product companies"],
  },
];
