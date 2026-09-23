// ─────────────────────────────────────────────
//  EDIT ALL TEXT HERE.  AccioJob-style Edtech Content & Layout Data
// ─────────────────────────────────────────────

export const site = {
  name: "Hirely and Jobly",
  city: "Hyderabad, Telangana",
  email: "hello@hirelyandjobly.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: "Plot 42, Silicon Valley, Madhapur, Hyderabad, Telangana 500081",
};

export interface StatItem {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  desc: string;
}

export const stats: [string, string, string][] = [
  ["5,000+", "Students Trained", "Across top colleges in Telangana"],
  ["92%", "Placement Rate", "Within 90 days of graduation"],
  ["₹18.5 LPA", "Highest CTC", "Average package ₹6.2 LPA"],
  ["40+", "Hiring Partners", "Startups, Unicorns & MNCs"],
];

export const animatedStatsData: StatItem[] = [
  {
    target: 5000,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Students Trained",
    desc: "Across top colleges in Telangana",
  },
  {
    target: 92,
    decimals: 0,
    prefix: "",
    suffix: "%",
    label: "Placement Rate",
    desc: "Within 90 days of graduation",
  },
  {
    target: 18.5,
    decimals: 1,
    prefix: "₹",
    suffix: " LPA",
    label: "Highest CTC",
    desc: "Average package ₹6.2 LPA",
  },
  {
    target: 40,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Hiring Partners",
    desc: "Startups, Unicorns & MNCs",
  },
];

export const trustBadges = [
  { label: "⭐ 4.9/5 Rating", desc: "by 5,000+ Students" },
  { label: "✓ 100% Live", desc: "Mentor-Led Coding" },
  { label: "🏢 Hyderabad Centers", desc: "Madhapur & Ameerpet" },
  { label: "🚀 Placement Cell", desc: "Dedicated Mock Interviews" },
];

export const partners = [
  "Microsoft", "Amazon", "Flipkart", "Swiggy",
  "Razorpay", "Zomato", "Cred", "PhonePe",
  "TCS Digital", "Infosys", "Cognizant", "Deloitte",
];

export const courseCategories = [
  { id: "all", label: "All Tracks" },
  { id: "software", label: "Software & Web" },
  { id: "ai-data", label: "AI & Data Science" },
  { id: "design-cyber", label: "Design & Cybersecurity" },
];

export const courses = [
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    category: "ai-data",
    duration: "16 Weeks",
    level: "Intermediate",
    meta: "16 weeks · Intermediate",
    tagline: "Build LLMs, Neural Networks & Real-world AI Applications",
    cover: "from-blue-600 to-indigo-800",
    dark: true,
    tags: ["Python", "TensorFlow", "PyTorch", "FastAPI", "NLP"],
    scholarship: "Up to 40% Scholarship",
    startingBatch: "Starting Monday",
    highlight: "Highest Hiring Demand in 2026",
  },
  {
    slug: "full-stack",
    name: "Full-Stack Web Development",
    category: "software",
    duration: "16 Weeks",
    level: "Beginner to Pro",
    meta: "16 weeks · Beginner",
    tagline: "Master React, Next.js, Node.js & Scalable Cloud Backends",
    cover: "from-indigo-600 to-blue-700",
    dark: true,
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    scholarship: "Early Bird 30% Off",
    startingBatch: "Weekend Batch Open",
    highlight: "Top Pick for Product Startups",
  },
  {
    slug: "dsa",
    name: "Data Structures & Algorithms",
    category: "software",
    duration: "12 Weeks",
    level: "All Levels",
    meta: "12 weeks · Beginner to Advanced",
    tagline: "Crack Coding & System Design Rounds for Tier-1 Tech Firms",
    cover: "from-blue-700 to-slate-900",
    dark: true,
    tags: ["C++", "Java", "Python", "LeetCode 250+", "System Design"],
    scholarship: "Scholarship Available",
    startingBatch: "Live Evening Batch",
    highlight: "Essential for Placements",
  },
  {
    slug: "ui-ux",
    name: "UI/UX & Product Design",
    category: "design-cyber",
    duration: "10 Weeks",
    level: "Beginner Friendly",
    meta: "10 weeks · Beginner",
    tagline: "Design High-Converting Mobile & Web Apps in Figma",
    cover: "from-violet-600 to-indigo-900",
    dark: true,
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    scholarship: "Portfolio Review Free",
    startingBatch: "Next Batch in 5 Days",
    highlight: "High Creative Demand",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Ethical Hacking",
    category: "design-cyber",
    duration: "14 Weeks",
    level: "Intermediate",
    meta: "14 weeks · Intermediate",
    tagline: "Hands-on Penetration Testing, Bug Bounty & Network Defense",
    cover: "from-slate-800 to-blue-950",
    dark: true,
    tags: ["Kali Linux", "Burp Suite", "Metasploit", "OWASP", "Wireshark"],
    scholarship: "Lab Access Included",
    startingBatch: "Weekend Lab Batch",
    highlight: "Defense & Cloud Security",
  },
  {
    slug: "ar-vr",
    name: "AR/VR & Spatial Computing",
    category: "design-cyber",
    duration: "12 Weeks",
    level: "Intermediate",
    meta: "12 weeks · Intermediate",
    tagline: "Create Immersive 3D Experiences with Unity & WebXR",
    cover: "from-indigo-700 to-purple-900",
    dark: true,
    tags: ["Unity", "C#", "Meta Quest", "Three.js", "WebXR"],
    scholarship: "Hardware Lab Included",
    startingBatch: "New Batch Enrolling",
    highlight: "Next-Gen Spatial Tech",
  },
  {
    slug: "game-design",
    name: "Game Design & Development",
    category: "design-cyber",
    duration: "14 Weeks",
    level: "Beginner to Pro",
    meta: "14 weeks · Beginner",
    tagline: "From Concept to Publishing 2D/3D Games on Play Store",
    cover: "from-blue-600 to-cyan-800",
    dark: true,
    tags: ["Unity", "C#", "Level Design", "Shader Graph", "itch.io"],
    scholarship: "Scholarship Available",
    startingBatch: "Evening Batch Open",
    highlight: "Publish Your First Game",
  },
];

export const twoFeatureCards = [
  {
    badge: "🏢 Classroom Learning",
    title: "Learn Offline in Hyderabad",
    desc: "Intensive in-person training with daily mentor guidance at our state-of-the-art tech hubs in Madhapur & Ameerpet.",
    cta: "Visit Campus",
    link: "/contact#centers",
    footerLabel: "Madhapur & Ameerpet",
    features: [
      "1-on-1 In-Person Mentorship & Code Reviews",
      "Dedicated High-Speed Coding Labs & Wi-Fi",
      "Daily Walk-in Doubt Clearing Sessions",
    ],
  },
  {
    badge: "💻 Flexible & Remote",
    title: "Live Interactive Online",
    desc: "Interactive live classes with real-time doubt clearing, screen sharing, and flexible weekend batches for college students & pros.",
    cta: "Join Live Batch",
    link: "/courses",
    footerLabel: "Anywhere in India",
    features: [
      "100% Live Instructor-Led Classes",
      "Instant TA Doubt Resolution on Discord",
      "24/7 Access to Session Recordings & Notes",
    ],
  },
];

export const benefits = [
  {
    t: "Industry-Built Curriculum",
    d: "Syllabi updated quarterly with engineering leaders from Microsoft, Amazon, and top startups so you learn what is hiring today.",
    tag: "Updated for 2026",
  },
  {
    t: "Hands-on Capstone Projects",
    d: "Build 3+ production-grade applications with git version control, CI/CD pipelines, and cloud hosting for your live resume.",
    tag: "Live on GitHub",
  },
  {
    t: "Dedicated Placement Cell",
    d: "Resume reviews, DSA mock interviews, soft skills training, and warm referrals to our 40+ hiring network in Hyderabad.",
    tag: "100% Support",
  },
];

export const why = {
  clients: "5,000+ Students",
  sat: "92%",
  satL: "Placed within 90 Days",
  proj: "120+",
  projL: "Production Capstones Built",
  quote: "We don't just teach syntax — we train you to think, build, and communicate like an engineer at a top tech company.",
  rating: "4.9/5",
  ratingL: "Rated by students across Telangana",
};

export const tiles: [string, string, string][] = [
  ["Live Mentor Sessions", "Learn directly from senior engineers who build production systems daily.", "MonitorPlay"],
  ["Capstone Architecture", "Architect end-to-end full-stack systems and deploy to AWS and Vercel.", "Code2"],
  ["1-on-1 Doubt Clearing", "Never get stuck. Daily office hours with dedicated teaching assistants.", "HelpCircle"],
  ["Placement Network", "Direct referrals to top product startups and MNCs in HITEC City.", "Network"],
  ["Weekend & Evening Flexibility", "Specially scheduled batches so you can excel alongside your college studies.", "CalendarDays"],
  ["Recognized Certification", "Industry-validated certificates respected by hiring managers across India.", "BadgeCheck"],
];

export const testimonials = [
  {
    n: "Ananya Reddy",
    college: "JNTU Hyderabad (B.Tech CSE, 2025)",
    role: "Software Engineer",
    company: "Zomato",
    ctc: "₹12.5 LPA",
    image: "/images/avatars/ananya.jpg",
    q: "The AI/ML & Full-Stack track gave me real project experience that impressed my interviewers. I went from zero GitHub commits to cracking a 12.5 LPA product role!",
  },
  {
    n: "Karthik Medishetti",
    college: "CBIT Hyderabad (B.Tech IT, 2025)",
    role: "Backend Developer",
    company: "Razorpay Partner",
    ctc: "₹9.2 LPA",
    image: "/images/avatars/karthik.jpg",
    q: "DSA and system design finally clicked for me. The timed mock contests and 1-on-1 mentor code reviews made campus and off-campus placements a breeze.",
  },
  {
    n: "Sneha Patel",
    college: "VNR VJIET (B.Tech ECE, 2025)",
    role: "Associate Product Designer",
    company: "Fintech Startup",
    ctc: "₹7.8 LPA",
    image: "/images/avatars/sneha.jpg",
    q: "Transitioning from ECE to UI/UX felt daunting, but the mentors helped me craft a Figma portfolio with 2 complete case studies that landed me my dream design job.",
  },
  {
    n: "Rohit Varma",
    college: "Gokaraju Rangaraju (B.Tech CSE, 2025)",
    role: "Cybersecurity Analyst",
    company: "Security Firm",
    ctc: "₹8.5 LPA",
    image: "/images/avatars/avatar-1.jpg",
    q: "The hands-on penetration testing labs and CTF challenges were gold. They teach real toolchains like Burp Suite and Metasploit, not just textbook theory.",
  },
];

export const hubs = [
  {
    id: "madhapur",
    name: "Madhapur Tech Campus",
    area: "HITEC City / Madhapur",
    address: "Plot 42, Silicon Valley, Near Metro Station, Madhapur, Hyderabad",
    features: ["Air-conditioned High-Speed Labs", "Weekend In-Person Hackathons", "Mentor 1-on-1 Desk Reviews", "Placement Drive Hub"],
    batch: "Weekend & Weekday Batches Active",
  },
  {
    id: "ameerpet",
    name: "Ameerpet Center",
    area: "Ameerpet Metro Hub",
    address: "3rd Floor, Metro Tech Tower, Beside Ameerpet Metro Station, Hyderabad",
    features: ["Dedicated Practice Workstations", "Daily Doubt Assistance Desk", "Mock Interview Rooms", "Direct Metro Access"],
    batch: "Morning & Evening Batches Active",
  },
  {
    id: "online",
    name: "Live Interactive Online",
    area: "Global / Across India",
    address: "Interactive High-Definition Virtual Classrooms + 24/7 Discord Community",
    features: ["Live HD Streaming with Screen Share", "Session Recordings for Life", "Daily Online TA Hours", "Virtual Coding Rooms"],
    batch: "All 7 Tracks Available",
  },
];

export const plans = [
  {
    name: "Standard Track",
    badge: "Most Accessible",
    popular: false,
    desc: "Single in-depth course track of your choice with live mentor support.",
    price: "₹14,999",
    originalPrice: "₹24,999",
    cta: "Start Learning",
    f: [
      "12–16 weeks live mentor-led classes",
      "3 industry-grade portfolio projects",
      "Course completion certificate",
      "Daily doubt clearing & office hours",
      "Resume building & LinkedIn review",
      "Lifetime access to LMS materials",
    ],
  },
  {
    name: "Career & Placement Pro",
    badge: "⭐ Most Popular",
    popular: true,
    desc: "Complete 2-track bundle with guaranteed placement assistance and mock rounds.",
    price: "₹34,999",
    originalPrice: "₹59,999",
    cta: "Enroll in Career Pro",
    f: [
      "Choose any 2 full course tracks",
      "Guaranteed referral calls to 40+ partners",
      "5+ 1-on-1 mock technical interviews",
      "FAANG mentor system design sessions",
      "Dedicated career coach & salary negotiation",
      "Direct entry to Hyderabad offline hackathons",
      "Priority TA support & project evaluation",
    ],
  },
];

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "courses", label: "Courses & Eligibility" },
  { id: "placements", label: "Placements & Career" },
  { id: "admissions", label: "Batches & Centers" },
];

export const faqs = [
  {
    q: "Who is eligible to join Hirely and Jobly courses?",
    a: "Any engineering / B.Tech student, BCA/MCA student, or recent graduate looking to break into the tech industry. Our beginner tracks (such as Full-Stack, DSA, and UI/UX) require no prior coding background.",
    category: "courses",
  },
  {
    q: "How does the placement assistance program work?",
    a: "Once you complete your core modules and capstone projects, our dedicated placement cell prepares your resume, conducts 3-5 rounds of mock technical and HR interviews, and shares your profile with our 40+ hiring partners in Hyderabad and across India.",
    category: "placements",
  },
  {
    q: "Are the classes conducted online or offline in Hyderabad?",
    a: "We offer both! You can attend in-person lab sessions at our Madhapur (HITEC City) or Ameerpet centers in Hyderabad, or attend live interactive classes online from anywhere with real-time TA support.",
    category: "admissions",
  },
  {
    q: "What if I miss a live class or have doubts during practice?",
    a: "Every live class is recorded in HD and available in your student portal within 2 hours. In addition, our teaching assistants hold daily doubt-clearing sessions both in person and on our private student Discord.",
    category: "courses",
  },
  {
    q: "Can I manage these courses alongside my college exams?",
    a: "Yes! Our courses are specifically designed for college students with weekend schedules (Saturdays & Sundays) and weekday evening batches (7:00 PM – 9:00 PM). We also provide exam study breaks.",
    category: "admissions",
  },
  {
    q: "Do you offer scholarships or EMI payment options?",
    a: "Yes, we offer merit scholarships of up to 40% based on a quick online assessment or your college GPA. We also provide zero-interest monthly EMI plans for all tracks.",
    category: "admissions",
  },
  {
    q: "Will I receive a verifiable certificate after completion?",
    a: "Yes. Upon successfully completing the course modules and submitting your capstone project, you receive a verified digital certificate with a unique verification link recognized by our hiring network.",
    category: "courses",
  },
  {
    q: "How do I book a free demo or counselling session?",
    a: "Click on 'Book Free Demo' or tap the WhatsApp button. Our senior academic counsellor in Hyderabad will reach out to discuss your goals and schedule your free demo class.",
    category: "placements",
  },
  {
    q: "What is the course fee and are there EMI options?",
    a: "The Standard Track starts at ₹14,999 and the Career & Placement Pro bundle is ₹34,999. We offer zero-interest monthly EMI for both plans. Scholarships of up to 40% are available based on assessment or GPA.",
    category: "admissions",
  },
  {
    q: "Is there a job guarantee after completing the course?",
    a: "We provide a 100% placement assistance guarantee — including resume building, 3-5 mock technical interviews, and warm referrals to our 40+ hiring partners. While we cannot guarantee final hiring decisions (made by companies), our 92% placement rate within 90 days speaks for itself.",
    category: "placements",
  },
  {
    q: "What is the batch size and student-to-mentor ratio?",
    a: "Each live cohort is capped at 30 students to ensure every student gets individual attention. The student-to-TA ratio is 10:1 for daily doubt clearing sessions.",
    category: "courses",
  },
];

// ─────────────────────────────────────────────
//  Per-course detail data for /courses/[slug]
// ─────────────────────────────────────────────
export type CourseDetail = {
  slug: string;
  name: string;
  category: string;
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
    category: "ai-data",
    tagline: "Go from Python basics to building and deploying real ML & LLM models.",
    overview: "This 16-week course takes you from Python fundamentals through supervised learning, deep neural networks, computer vision, and LLM fine-tuning. You will build three portfolio projects — a sentiment analyser, an image classifier, and an AI recommendation engine — using real production datasets.",
    cover: "from-blue-600 to-indigo-800",
    dark: true,
    meta: "16 weeks · Intermediate",
    modules: [
      { title: "Python & Data Foundations", topics: ["Python for data science", "NumPy & Pandas deep dive", "Exploratory data analysis", "Data visualisation with Matplotlib & Seaborn"] },
      { title: "Core Machine Learning", topics: ["Supervised learning & classification", "Regression & decision trees", "Random forests & XGBoost", "Model evaluation, cross-validation & tuning"] },
      { title: "Deep Learning & Neural Networks", topics: ["Neural network architecture", "TensorFlow & PyTorch", "CNNs for image tasks", "Transfer learning with pre-trained models"] },
      { title: "Generative AI & Capstone Deployment", topics: ["Introduction to LLMs & Prompt Engineering", "FastAPI backend services", "Deploying ML models to cloud (AWS/Render)", "Full Capstone Project"] },
    ],
    tools: ["Python", "Jupyter", "scikit-learn", "TensorFlow", "PyTorch", "Pandas", "FastAPI", "Google Colab", "AWS"],
    projects: ["Real-time Sentiment Analyser for E-Commerce", "Medical Imaging Classification System", "AI Recommendation Engine", "End-to-End Generative AI App (Capstone)"],
    outcomes: ["Junior ML Engineer", "Data Scientist / Analyst", "AI Associate at tech firms", "ML Internships at funded startups"],
  },
  {
    slug: "full-stack",
    name: "Full-Stack Web Development",
    category: "software",
    tagline: "Build production-ready web products — frontend, backend, database and cloud DevOps.",
    overview: "A 16-week comprehensive track covering modern full-stack engineering: React 19, Next.js 15, Node.js, PostgreSQL, Prisma, Docker, and cloud deployment on AWS & Vercel. Graduate with 4 live portfolio applications.",
    cover: "from-indigo-600 to-blue-700",
    dark: true,
    meta: "16 weeks · Beginner to Pro",
    modules: [
      { title: "Modern JavaScript & TypeScript", topics: ["ES2024 modern features", "TypeScript type systems & interfaces", "DOM manipulation & async workflows", "Responsive TailwindCSS & UI systems"] },
      { title: "React & Next.js Architecture", topics: ["React hooks & state management", "Server Components & App Router", "Zustand & React Query", "Performance optimisation & SEO"] },
      { title: "Backend, APIs & Databases", topics: ["Node.js & Express REST APIs", "PostgreSQL database design", "Prisma ORM & schema migrations", "JWT & OAuth authentication"] },
      { title: "DevOps & Full-Stack Capstone", topics: ["Docker containerisation", "CI/CD with GitHub Actions", "Deploying to AWS & Vercel", "Production SaaS Capstone Project"] },
    ],
    tools: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker", "TailwindCSS", "Git & GitHub", "Vercel"],
    projects: ["Interactive E-Learning Platform", "Real-Time Collaboration Dashboard", "Scalable REST API with Database", "Full Production SaaS Product (Capstone)"],
    outcomes: ["Junior Full-Stack Developer", "Frontend Engineer (React/Next)", "Backend Engineer (Node/PostgreSQL)", "Software Development Engineer (SDE-1)"],
  },
  {
    slug: "dsa",
    name: "Data Structures & Algorithms",
    category: "software",
    tagline: "Crack coding rounds and system design interviews at top tech companies.",
    overview: "A 12-week intensive track covering essential algorithms, algorithmic complexity, and data structures tested during technical interviews. Solve 250+ curated problems, participate in weekly timed contests, and learn system design fundamentals.",
    cover: "from-blue-700 to-slate-900",
    dark: true,
    meta: "12 weeks · Beginner to Advanced",
    modules: [
      { title: "Arrays, Strings & Two Pointers", topics: ["Two-pointer technique & sliding window", "Time & space complexity analysis", "Prefix sum & binary search", "Recursion & backtracking foundations"] },
      { title: "Linked Lists, Stacks & Queues", topics: ["Singly & doubly linked lists", "Monotonic stacks & queues", "LRU cache implementation", "Heap & priority queues"] },
      { title: "Trees, Graphs & Traversal", topics: ["Binary Search Trees (BST)", "BFS & DFS graph algorithms", "Dijkstra & Topological sort", "Disjoint Set Union (DSU)"] },
      { title: "Dynamic Programming & Contests", topics: ["1D & 2D dynamic programming", "Knapsack & memoisation patterns", "Greedy algorithms", "Mock FAANG Coding Contests & Debriefs"] },
    ],
    tools: ["C++ / Java / Python (Your choice)", "LeetCode", "HackerRank", "Codeforces", "VS Code"],
    projects: ["Curated LeetCode 250 Mastery Profile", "Custom Algorithm Visualiser Engine", "System Design Problem Solutions Portfolio"],
    outcomes: ["SDE Intern at Tier-1 Firms", "FAANG Interview Shortlists", "Campus Placement Top Rankers", "Competitive Programming Mastery"],
  },
  {
    slug: "ui-ux",
    name: "UI/UX & Product Design",
    category: "design-cyber",
    tagline: "Design products people love — from user research to interactive Figma prototypes.",
    overview: "A 10-week hands-on track covering end-to-end product design: user research, wireframing, design systems, interactive Figma prototypes, and developer handoff. Build 2 complete UX case studies for your interview portfolio.",
    cover: "from-violet-600 to-indigo-900",
    dark: true,
    meta: "10 weeks · Beginner",
    modules: [
      { title: "Design Thinking & UX Research", topics: ["User interviews & empathy mapping", "Persona creation & user journeys", "Information architecture & card sorting", "Competitive benchmarking"] },
      { title: "Wireframing & Low-Fidelity Design", topics: ["Low-fi wireframing in FigJam", "Mobile & web layout patterns", "Usability testing wireframes", "User flows & site maps"] },
      { title: "Visual Design & Design Systems", topics: ["Typography, color theory & grid systems", "Auto-layout & component variants in Figma", "Design tokens & scalable libraries", "Accessibility standards (WCAG 2.1)"] },
      { title: "Prototyping & Portfolio Capstone", topics: ["Advanced micro-interactions & smart animate", "Interactive mobile app prototype", "Developer handoff specs", "Writing compelling Behance/Notion case studies"] },
    ],
    tools: ["Figma", "FigJam", "Maze", "Notion", "Balsamiq", "Lottie"],
    projects: ["Fintech Mobile App Redesign", "B2B SaaS Analytics Dashboard", "Complete End-to-End Product Design Case Study (Capstone)"],
    outcomes: ["UI/UX Designer", "Product Designer at Startups", "Design System Specialist", "Freelance UX Consultant"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Ethical Hacking",
    category: "design-cyber",
    tagline: "Learn to think like an attacker — and defend like a professional security engineer.",
    overview: "A 14-week practical lab course covering networking, penetration testing, web app security (OWASP Top 10), and vulnerability assessment. Exploit intentionally vulnerable machines in isolated labs and create professional security audit reports.",
    cover: "from-slate-800 to-blue-950",
    dark: true,
    meta: "14 weeks · Intermediate",
    modules: [
      { title: "Networking & Security Fundamentals", topics: ["TCP/IP, DNS, HTTP/HTTPS deep dive", "Linux command line & shell scripting", "Wireshark packet sniffing", "Virtual security lab configuration"] },
      { title: "Reconnaissance & Vulnerability Scanning", topics: ["OSINT methodologies", "Nmap network mapping & port scanning", "Nessus vulnerability assessments", "Enumeration techniques"] },
      { title: "Web App Penetration Testing", topics: ["OWASP Top 10 vulnerabilities", "SQL injection & Cross-Site Scripting (XSS)", "Burp Suite for API testing", "Authentication bypass techniques"] },
      { title: "Defense, CTF & Security Capstone", topics: ["Privilege escalation on Linux/Windows", "Metasploit exploit framework", "Capture The Flag (CTF) challenges", "Writing professional pentest audit reports"] },
    ],
    tools: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark", "TryHackMe", "HackTheBox"],
    projects: ["Web Application Vulnerability Assessment (DVWA)", "Network Security Audit Report", "CTF Competition Defense Submission", "Full Penetration Testing Capstone Report"],
    outcomes: ["Junior Security Analyst", "SOC Analyst L1", "Associate Penetration Tester", "Bug Bounty Hunter"],
  },
  {
    slug: "ar-vr",
    name: "AR/VR & Spatial Computing",
    category: "design-cyber",
    tagline: "Build immersive experiences for the next era of spatial computing.",
    overview: "A 12-week hands-on track covering AR and VR development using Unity, C#, and WebXR. Build interactive mobile AR apps and 3D VR simulation environments for Meta Quest.",
    cover: "from-indigo-700 to-purple-900",
    dark: true,
    meta: "12 weeks · Intermediate",
    modules: [
      { title: "Unity & C# Foundations", topics: ["Unity Editor & scene management", "C# scripting for spatial interactions", "3D coordinate systems & physics", "Asset pipelines & Blender basics"] },
      { title: "VR Development & Meta Quest", topics: ["XR Interaction Toolkit", "Controller tracking, locomotion & teleportation", "Spatial audio & haptic feedback", "VR performance optimization"] },
      { title: "Mobile AR Development", topics: ["AR Foundation (ARCore & ARKit)", "Plane detection, surface tracking & anchors", "Image tracking & interactive overlays", "AR user interface design"] },
      { title: "WebXR & Capstone Showcase", topics: ["Three.js & WebXR standards", "Deploying spatial web apps", "Sideloading on Meta Quest", "Full Interactive XR Capstone"] },
    ],
    tools: ["Unity", "C#", "AR Foundation", "Meta Quest SDK", "Three.js", "WebXR", "Blender", "Figma"],
    projects: ["Interactive AR Furniture Placement App", "VR Safety Simulation Experience", "WebXR Interactive 3D Product Showcase", "Complete XR Capstone App"],
    outcomes: ["AR/VR Developer", "Unity 3D Engineer", "Spatial Computing Specialist", "Interactive Experience Creator"],
  },
  {
    slug: "game-design",
    name: "Game Design & Development",
    category: "design-cyber",
    tagline: "Design, build and publish your own 2D and 3D games with Unity.",
    overview: "A 14-week track covering game design theory, 2D/3D physics, particle effects, gameplay scripting, enemy AI, and mobile publishing on Google Play Store.",
    cover: "from-blue-600 to-cyan-800",
    dark: true,
    meta: "14 weeks · Beginner",
    modules: [
      { title: "Game Mechanics & Prototyping", topics: ["Core game loops & mechanics", "Level design & player engagement", "Unity 2D tilemaps & sprite animations", "Rigidbody physics & controller scripting"] },
      { title: "3D Environments & Gameplay", topics: ["3D physics, colliders & raycasting", "Enemy AI & state machines", "Lighting, shaders & particle VFX", "Game audio & sound effects integration"] },
      { title: "Game Systems & User Interfaces", topics: ["UI heads-up displays (HUD)", "Inventory & scoring systems", "Save/load game state persistence", "Input management for mobile & keyboard"] },
      { title: "Publishing & Game Jam Capstone", topics: ["Optimisation & frame rate profiling", "Publishing to Google Play Store & itch.io", "Game Jam project delivery", "Portfolio showcase creation"] },
    ],
    tools: ["Unity", "C#", "Aseprite", "Audacity", "itch.io", "Google Play Console", "Figma"],
    projects: ["2D Action Platformer Game", "3D Endless Runner with Dynamic Obstacles", "Game Jam Entry Project", "Published Mobile Game on Play Store (Capstone)"],
    outcomes: ["Junior Game Developer", "Unity Gameplay Programmer", "Indie Game Designer", "Mobile Game Studio Associate"],
  },
];
