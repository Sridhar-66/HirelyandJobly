"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Plus,
  Sparkles,
  Star,
  Zap,
  Users,
  Briefcase,
  Award,
  Clock,
  Globe,
  Target,
  MessageCircle,
  Building2,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  MapPin,
  CheckCircle2,
  BookOpen,
  MonitorPlay,
  Code2,
  HelpCircle,
  Network,
  CalendarDays,
  BadgeCheck,
  Laptop,
  Phone,
  Mail,
  Rocket,
  Gift,
} from "lucide-react";

// Icon lookup map for tiles
const TILE_ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  MonitorPlay,
  Code2,
  HelpCircle,
  Network,
  CalendarDays,
  BadgeCheck,
  Sparkles,
};

// Icon lookup map for feature cards
const FEATURE_ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Building2,
  Laptop,
  MonitorPlay,
};

import {
  site,
  stats,
  animatedStatsData,
  trustBadges,
  partners,
  courseCategories,
  courses,
  twoFeatureCards,
  benefits,
  why,
  tiles,
  testimonials,
  mentors,
  hubs,
  plans,
  faqCategories,
  faqs,
} from "@/data/content";
import { AnimatedCounter } from "./AnimatedCounter";
import { PartnerLogosMarquee, BackerLogos } from "./CompanyLogos";
import { TrustedByLearners } from "./TrustedByLearners";

// ─── Animation helpers ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    custom={delay}
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Shared primitives ───────────────────────────────────────────────────────
export const Pill = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`pill ${className}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
    {children}
  </span>
);

export const Head = ({
  pill,
  title,
  highlight,
  sub,
}: {
  pill: string;
  title: string;
  highlight?: string;
  sub?: string;
}) => (
  <div className="mb-12 text-center">
    <Reveal>
      <Pill>{pill}</Pill>
    </Reveal>
    <Reveal delay={1}>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={2}>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          {sub}
        </p>
      </Reveal>
    )}
  </div>
);

export const Sec = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative mx-auto max-w-6xl px-4 py-16 md:py-24 ${className ?? ""}`}>
    {children}
  </section>
);

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2 group">
    <div className="relative h-14 w-auto transition-transform duration-200 group-hover:scale-105">
      <Image
        src="/images/brand/logo-with-slogan.png"
        alt="Hirely and Jobly — Learn. Prepare. Get Hired."
        width={360}
        height={86}
        className="h-14 w-auto object-contain"
        priority
      />
    </div>
  </Link>
);

// ─── Sticky Navbar ───────────────────────────────────────────────────────────
const NAV_LINKS = [
  ["Home", "/"],
  ["Courses", "/courses"],
  ["Success Stories", "/#stories"],
  ["Centers & Hubs", "/#centers"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export const Nav = ({ activePath = "/" }: { activePath?: string }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Logo />

        <nav className="hidden items-center gap-1 text-xs font-semibold text-slate-600 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map(([label, href]) => {
            const isActive = activePath === href;
            return (
              <Link
                key={label}
                href={href}
                className={`rounded-full px-3.5 py-1.5 transition-all ${
                  isActive
                    ? "bg-blue-50 font-bold text-blue-700 shadow-xs"
                    : "hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn btn-primary text-xs py-2 px-5"
          >
            Book Free Demo <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </header>
  );
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Decorative gradient blobs */}
      <div className="blob blob-blue -top-24 -left-24 h-96 w-96" />
      <div className="blob blob-indigo top-12 right-0 h-[450px] w-[450px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headline, CTAs, Trust Badges */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="pill mb-5 inline-flex items-center gap-1.5">
                <Rocket size={14} strokeWidth={2} className="text-blue-600" />
                Admissions Open for 2026 Batches
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                Launch your tech career with{" "}
                <span className="gradient-text">guaranteed industry skills</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Industry-crafted courses in Full-Stack, AI/ML, DSA, and UI/UX built specifically for B.Tech &amp; engineering students in Bangalore with 1-on-1 mentorship and direct placement referrals.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn btn-primary py-3 px-7 text-sm font-semibold"
                >
                  Book Free Demo <ArrowUpRight size={15} strokeWidth={2} />
                </Link>
                <Link
                  href="/courses"
                  className="btn btn-secondary py-3 px-6 text-sm"
                >
                  Explore 7 Tracks
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual & Floating Highlights */}
          <div className="relative lg:col-span-5">
            <Reveal delay={2}>
              {/* overflow-visible so floating badges are not clipped */}
              <div className="relative mx-auto max-w-md overflow-visible rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-blue-500/10">
                <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-96">
                  <Image
                    src="/images/heroes/hero-student.jpg"
                    alt="Student learning at Hirely and Jobly"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Overlay Bottom Banner */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3.5 backdrop-blur-md shadow-lg border border-white/60">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                          Upcoming Batch
                        </div>
                        <div className="text-xs font-semibold text-slate-900">
                          Weekend &amp; Evening Batches · Whitefield, Bangalore &amp; Online
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 transition-colors"
                        aria-label="Book Demo"
                      >
                        <ArrowUpRight size={15} strokeWidth={2} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating Salary Success Card — Ananya Reddy @ Zomato */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -top-5 -right-5 z-10 rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden whitespace-nowrap"
                  style={{ minWidth: "200px" }}
                >
                  {/* Card header bar */}
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 flex items-center justify-between gap-2">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 size={13} strokeWidth={2} className="text-white shrink-0" /> Verified Offer
                    </span>
                    <TrendingUp size={14} strokeWidth={2} className="text-white opacity-85" />
                  </div>
                  {/* Card body */}
                  <div className="px-4 py-3">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Placed at</div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 leading-tight">Zomato</div>
                        <div className="text-[11px] text-slate-500 font-medium">Software Engineer</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-emerald-600 leading-none">₹12.5<span className="text-xs font-bold"> LPA</span></div>
                        <div className="text-[10px] text-slate-400 font-medium">Ananya Reddy</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Hyderabad Campus Badge Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-4 -left-4 z-10 hidden sm:flex items-center gap-2.5 rounded-2xl bg-slate-900 text-white p-3 shadow-xl border border-slate-800 whitespace-nowrap"
                >
                  <ShieldCheck size={20} strokeWidth={1.75} className="text-blue-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-300">Whitefield Campus</div>
                    <div className="text-xs font-bold">Enzyme SJR I-Park, Bangalore</div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 2-Tile Quick Feature Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {twoFeatureCards.map((card, idx) => {
            const FeatureIcon = (card.icon && FEATURE_ICONS[card.icon]) || Building2;
            return (
              <Reveal key={card.title} delay={idx * 2}>
                <div className="card-feature group flex h-full flex-col justify-between p-6 md:p-8">
                  <div>
                    <span className="pill mb-3 inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border-blue-200">
                      <FeatureIcon size={13} strokeWidth={2} />
                      {card.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {card.desc}
                    </p>
                    <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                      {card.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} strokeWidth={2} className="text-blue-600 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-2 font-bold text-sm text-blue-600 transition-colors group-hover:text-blue-800"
                    >
                      {card.cta} <ChevronRight size={16} strokeWidth={2} />
                    </Link>
                    <span className="text-xs font-semibold text-slate-400">
                      {card.footerLabel}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Partner Marquee */}
        <Reveal delay={2}>
          <div className="mt-14 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Our alumni work at top technology companies &amp; high-growth startups
            </p>
            <PartnerLogosMarquee />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

// ─── Stats Bar (Animated Count-Up) ─────────────────────────────────────────────
export const StatsBar = () => {
  return (
    <div className="border-y border-slate-100 bg-slate-50/70 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {animatedStatsData.map((s, idx) => (
            <Reveal key={s.label} delay={idx}>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-600 sm:text-4xl lg:text-5xl tracking-tight">
                  <AnimatedCounter
                    value={s.target}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-1.5 text-sm font-bold text-slate-900">{s.label}</div>
                <div className="mt-0.5 text-xs text-slate-500">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TrustedByLearners };

// ─── Tabbed Course Catalog (AccioJob Style) ───────────────────────────────────
// ─── Per-course pricing tiers ─────────────────────────────────────────────────
const COURSE_TIERS = [
  {
    id: "recorded",
    label: "Recorded",
    price: "₹4,999",
    badge: "Self-Paced",
    color: "slate",
    features: ["Full recorded lectures", "Study material & notes", "Lifetime LMS access", "Certificate on completion"],
  },
  {
    id: "live",
    label: "Live + Mentor",
    price: "₹7,999",
    badge: "Most Popular",
    color: "blue",
    features: ["Live instructor-led classes", "1:1 mentor sessions", "Daily doubt clearing", "Project review & feedback"],
  },
  {
    id: "placement",
    label: "Job Placement",
    price: "₹12,999",
    badge: "100% Guarantee",
    color: "emerald",
    features: ["Everything in Live+Mentor", "Placement cell access", "Soft skills & communication", "Mock interviews + referrals"],
  },
];

const CourseCard = ({ c }: { c: typeof courses[0] }) => {
  const [selectedTier, setSelectedTier] = useState("live");
  const tier = COURSE_TIERS.find((t) => t.id === selectedTier)!;

  const tierColorMap: Record<string, { btn: string; border: string; badge: string }> = {
    slate: { btn: "bg-slate-700 text-white", border: "border-slate-700 bg-slate-50", badge: "bg-slate-100 text-slate-700" },
    blue: { btn: "bg-blue-600 text-white", border: "border-blue-500 bg-blue-50", badge: "bg-blue-100 text-blue-700" },
    emerald: { btn: "bg-emerald-600 text-white", border: "border-emerald-500 bg-emerald-50", badge: "bg-emerald-100 text-emerald-700" },
  };
  const colors = tierColorMap[tier.color];

  return (
    <div className="card card-hover flex h-full flex-col justify-between overflow-hidden p-5">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="ribbon-scholarship flex items-center gap-1">
            <Sparkles size={11} strokeWidth={2} className="text-amber-500" />
            {c.scholarship}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Clock size={13} strokeWidth={1.75} className="text-slate-400" />
            {c.duration}
          </span>
        </div>

        {/* Course Image Banner */}
        <div className="relative h-44 w-full overflow-hidden rounded-xl">
          <Image
            src={`/images/courses/${c.slug}.jpg`}
            alt={c.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="text-[11px] font-medium text-blue-300">{c.highlight}</div>
            <h3 className="text-lg font-bold leading-tight text-white">{c.name}</h3>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-3 text-xs text-slate-600 leading-relaxed">{c.tagline}</p>

        {/* 3-Tier Pricing Selector */}
        <div className="mt-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Choose Your Plan</div>
          <div className="grid grid-cols-3 gap-1.5">
            {COURSE_TIERS.map((t) => {
              const isActive = selectedTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`rounded-lg border-2 p-2 text-center transition-all cursor-pointer ${
                    isActive
                      ? tierColorMap[t.color].border + " shadow-xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className={`text-[9px] font-bold uppercase mb-0.5 ${isActive ? "text-" + t.color + "-600" : "text-slate-400"}`}>
                    {t.label}
                  </div>
                  <div className={`text-xs font-extrabold ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                    {t.price}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Tier Features */}
          <div className={`mt-3 rounded-xl border ${colors.border} p-3`}>
            <div className={`text-[10px] font-bold mb-2 ${colors.badge.includes("blue") ? "text-blue-700" : colors.badge.includes("emerald") ? "text-emerald-700" : "text-slate-700"}`}>
              {tier.badge} · {tier.price}
            </div>
            <ul className="space-y-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-[10px] text-slate-700">
                  <Check size={11} strokeWidth={2} className={colors.badge.includes("blue") ? "text-blue-500 shrink-0" : colors.badge.includes("emerald") ? "text-emerald-500 shrink-0" : "text-slate-500 shrink-0"} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {c.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          {c.startingBatch}
        </span>
        <Link
          href={`/contact?course=${c.slug}&tier=${selectedTier}&price=${tier.price}`}
          className={`btn text-xs py-1.5 px-4 ${colors.btn}`}
        >
          Enroll {tier.price} <ArrowUpRight size={13} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
};

export const Courses = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses =
    activeTab === "all"
      ? courses
      : courses.filter((c) => c.category === activeTab);

  return (
    <Sec id="courses">
      <Head
        pill="Our Tech Tracks"
        title="Courses designed for"
        highlight="real industry hiring"
        sub="Practical, mentor-led programs with weekly hands-on sprints, code reviews, and guaranteed placement drives."
      />

      {/* Tab Switcher */}
      <Reveal>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {courseCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-5 py-2 text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Course Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((c, i) => (
            <motion.div
              key={c.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <CourseCard c={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Reveal delay={2}>
        <div className="mt-12 text-center">
          <Link href="/courses" className="btn btn-secondary py-3 px-8 text-sm">
            View All 7 Course Syllabi <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </Reveal>
    </Sec>
  );
};

// ─── Campus & Training Hubs Section ──────────────────────────────────────────
export const LocationsHub = () => {
  const [activeHub, setActiveHub] = useState("whitefield");

  const currentHub = hubs.find((h) => h.id === activeHub) || hubs[0];

  return (
    <Sec id="centers" className="bg-slate-50/70 rounded-3xl my-8">
      <Head
        pill="Campus & Training Centers"
        title="Learn in-person at our campus or"
        highlight="live interactive online"
        sub="State-of-the-art coding labs, high-speed workstations, and dedicated mentor desks at Enzyme SJR I-Park, Whitefield and live online."
      />

      {/* Hub Tabs */}
      <Reveal>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {hubs.map((h) => {
            const isActive = activeHub === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setActiveHub(h.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Building2 size={14} strokeWidth={1.75} />
                {h.name}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Selected Hub Card */}
      <Reveal delay={1}>
        <div className="card overflow-hidden bg-white p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
                <MapPin size={15} strokeWidth={1.75} />
                {currentHub.area}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {currentHub.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentHub.address}
              </p>
              
              <div className="pt-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Center Highlights &amp; Facilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentHub.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 size={14} strokeWidth={2} className="text-blue-600 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-primary text-xs py-2.5 px-5">
                  Book Center Visit &amp; Demo <ArrowUpRight size={14} strokeWidth={2} />
                </Link>
                <a
                  href={"mapUrl" in currentHub && (currentHub as { mapUrl?: string }).mapUrl ? (currentHub as { mapUrl?: string }).mapUrl : site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-xs py-2.5 px-4 flex items-center gap-1.5"
                >
                  <MapPin size={13} strokeWidth={2} className="text-blue-600" />
                  Open in Google Maps
                </a>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} className="text-emerald-600 shrink-0" />
                  {currentHub.batch}
                </span>
              </div>
            </div>

            <div className="md:col-span-5">
              <a
                href={"mapUrl" in currentHub && (currentHub as { mapUrl?: string }).mapUrl ? (currentHub as { mapUrl?: string }).mapUrl : site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Enzyme SJR I-Park in Google Maps"
                className="group block relative h-60 w-full overflow-hidden rounded-2xl md:h-72 cursor-pointer shadow-md"
              >
                <Image
                  src="/images/brand/office-whitefield.png"
                  alt="Enzyme SJR I-Park Whitefield Bangalore Office"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-blue-700 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                  <MapPin size={12} strokeWidth={2.5} className="text-blue-600" /> View on Google Maps
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-bold">Enzyme SJR I-Park, Whitefield</div>
                  <div className="text-[11px] text-slate-200">Bangalore, Karnataka 560066</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Sec>
  );
};

// ─── Placement Success Stories & Testimonials ─────────────────────────────────
export const Testimonials = () => {
  return (
    <Sec id="stories">
      <Head
        pill="Proven Placement Track Record"
        title="Stories of students who"
        highlight="cracked top tech roles"
        sub="Read how engineering students from Bangalore and across India turned practical mentorship into life-changing job offers."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, idx) => (
          <Reveal key={t.n} delay={idx}>
            <div className="card card-hover flex h-full flex-col justify-between p-6">
              <div>
                {/* CTC Package & Verification Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <TrendingUp size={12} strokeWidth={2} className="text-emerald-600" />
                    {t.ctc}
                  </span>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={11} strokeWidth={2} className="text-blue-600" />
                    Verified Offer
                  </span>
                </div>

                {/* Student Quote */}
                <p className="text-xs leading-relaxed text-slate-700 italic">
                  &ldquo;{t.q}&rdquo;
                </p>
              </div>

              {/* Student Bio */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-blue-200 shadow-xs">
                  <Image
                    src={t.image}
                    alt={t.n}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 leading-snug">
                    {t.n}
                  </div>
                  <div className="text-[11px] font-semibold text-blue-600 line-clamp-1">
                    {t.role} @ {t.company}
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">
                    {t.college}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
};

// ─── Meet the Mentors Section ─────────────────────────────────────────────────
export const MentorsSection = () => {
  return (
    <Sec id="mentors">
      <Head
        pill="Learn from the Best"
        title="Industry engineers who"
        highlight="mentor every student"
        sub="Our mentors are practicing engineers from top tech companies — not just instructors. They bring real production experience directly to your cohort."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mentors.map((m, idx) => (
          <Reveal key={m.name} delay={idx}>
            <div className="card card-hover flex flex-col items-center text-center p-6 gap-4">
              {/* Avatar */}
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-blue-100 shadow-md">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Name & Role */}
              <div>
                <div className="text-sm font-bold text-slate-900">{m.name}</div>
                <div className="text-xs font-semibold text-blue-600 mt-0.5">{m.role}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">@ {m.company} · {m.experience}</div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {m.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
};

// ─── Why Choose Us / Value Proposition ────────────────────────────────────────
export const Why = () => {
  return (
    <Sec id="why">
      <Head
        pill="The Hirely & Jobly Advantage"
        title="Why engineering students"
        highlight="choose our academy"
        sub="We bridge the gap between traditional college curriculums and high-growth technology engineering teams."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {tiles.map(([title, desc, iconKey], i) => {
          const TileIcon = TILE_ICONS[iconKey] ?? Sparkles;
          return (
            <Reveal key={title} delay={i}>
              <div className="card card-hover flex h-full flex-col justify-between p-6">
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <TileIcon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Sec>
  );
};

// ─── Pricing Plans ────────────────────────────────────────────────────────────
export const Pricing = () => {
  return (
    <Sec id="pricing">
      <Head
        pill="Program Tiers & Tracks"
        title="Choose the level of mentorship and"
        highlight="support that fits your goals"
        sub="Transparent cohort pricing with zero hidden fees. Select the track that matches your pace and career ambition."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 md:grid-cols-2 items-stretch">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i}>
            <div
              className={`flex h-full flex-col justify-between rounded-3xl p-8 transition-all ${
                p.popular
                  ? "bg-slate-900 text-white shadow-2xl ring-2 ring-blue-600 relative overflow-hidden"
                  : "card p-8"
              }`}
            >
              {p.popular && (
                <div className="blob blob-indigo -top-20 -right-20 h-60 w-60 opacity-30" />
              )}

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1.5 ${
                        p.popular
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {p.popular && <Sparkles size={12} strokeWidth={2} className="text-blue-200" />}
                      {p.badge}
                    </span>
                    {p.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {p.originalPrice}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">{p.name}</h3>
                  <p
                    className={`mt-1 text-xs leading-relaxed ${
                      p.popular ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {p.desc}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {p.price}
                    </span>
                    <span
                      className={`text-xs ${
                        p.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      + Zero-Cost EMI Available
                    </span>
                  </div>

                  <Link
                    href={`/contact?track=${encodeURIComponent(p.name)}`}
                    className={`btn mt-6 w-full py-3 text-sm font-semibold justify-center ${
                      p.popular
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    {p.cta} <ArrowUpRight size={14} strokeWidth={2} />
                  </Link>

                  <ul className="mt-8 space-y-3 text-xs">
                    {p.f.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          strokeWidth={2}
                          className={p.popular ? "text-blue-400 shrink-0 mt-0.5" : "text-blue-600 shrink-0 mt-0.5"}
                        />
                        <span className={p.popular ? "text-slate-200" : "text-slate-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* AccioJob 100% Guarantee Banner */}
      <Reveal delay={1}>
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 md:p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-xs text-white">
                <ShieldCheck size={14} className="text-emerald-400" />
                100% Placement Guarantee Track
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Backed by AccioJob. 100% Job Placement Guarantee.
              </h3>
              <p className="text-sm md:text-base text-blue-100 max-w-2xl leading-relaxed">
                Hirely and Jobly is proudly backed by <b>AccioJob</b> — empowering our learners with industry-tested curricula, direct hiring drives across 400+ tech companies, and a complete 100% placement guarantee on our Career Launch track.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-blue-100">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Full Tuition Refund Policy
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  400+ Hiring Partners Network
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Direct Referral Pipeline
                </span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm text-center">
              <div className="text-xs uppercase tracking-widest text-blue-200 font-bold mb-2">
                Strategic Partner
              </div>
              <div className="bg-white rounded-xl p-3 shadow-md inline-block">
                <Image
                  src="/images/brand/acciojob.png"
                  alt="AccioJob"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="mt-3 text-xs text-white font-semibold">
                Official Placement Ecosystem
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Goodies & Swags Showcase */}
      <Reveal delay={2}>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-lg">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-800">
                <Gift size={14} className="text-amber-600" />
                Free with Live Mentor &amp; Career Launch Tracks
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Exclusive Hirely &amp; Jobly Goodies &amp; Swags Kit
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every student enrolled in our cohorts gets the official Hirely and Jobly welcome kit shipped straight to their doorstep to kickstart their developer journey in style!
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Branded Premium Hoodie / Tee",
                  "Insulated Steel Tumbler",
                  "Developer Sticker Pack",
                  "Engineering Notebook & Pen",
                  "Laptop Sleeve / Pouch",
                  "Exclusive Member Badge",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-6 flex items-center justify-center">
              <div className="w-full rounded-2xl border border-slate-100 bg-slate-50 shadow-md p-4 flex items-center justify-center">
                <Image
                  src="/images/brand/goodies-swags.png"
                  alt="Official Hirely and Jobly Goodies &amp; Swags"
                  width={500}
                  height={500}
                  className="w-full h-auto max-h-[380px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Sec>
  );
};

// ─── FAQ Section with Subcategory Tabs ────────────────────────────────────────
export const Faq = () => {
  const [activeFaqTab, setActiveFaqTab] = useState("all");

  const filteredFaqs =
    activeFaqTab === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeFaqTab);

  return (
    <Sec id="faq">
      <Head
        pill="Frequently Asked Questions"
        title="Got questions? We have"
        highlight="clear answers"
        sub="Everything you need to know about course tracks, batches, Whitefield campus, fees, and placement guarantees."
      />

      {/* FAQ Sub-Tabs */}
      <Reveal>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {faqCategories.map((cat) => {
            const isActive = activeFaqTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFaqTab(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Accordion list */}
      <div className="mx-auto max-w-3xl space-y-3">
        {filteredFaqs.map((faq, idx) => (
          <Reveal key={faq.q} delay={idx * 0.5}>
            <details className="card group p-5 transition-all open:border-blue-200 open:shadow-md">
              <summary className="flex items-center justify-between text-sm md:text-base font-bold text-slate-900 cursor-pointer select-none">
                <span>{faq.q}</span>
                <Plus size={18} strokeWidth={1.75} className="plus-icon shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
};

// ─── Sticky Floating WhatsApp Widget ──────────────────────────────────────────
export const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${site.whatsapp.replace(/\+/g, "")}?text=Hi%20Hirely%20%26%20Jobly%20team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20courses%20and%20counselling.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group flex items-center gap-2"
      aria-label="Chat with Counsellor on WhatsApp"
    >
      <MessageCircle size={18} strokeWidth={2} className="animate-bounce" />
      <span className="hidden sm:inline">Chat with Counsellor</span>
    </a>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_SECTIONS = {
  "Tech Tracks": [
    ["AI & Machine Learning", "/courses/ai-ml"],
    ["Full-Stack Web Dev", "/courses/full-stack"],
    ["Data Structures & Algorithms", "/courses/dsa"],
    ["UI/UX Design", "/courses/ui-ux"],
    ["Cybersecurity & Ethical Hacking", "/courses/cybersecurity"],
  ],
  "Quick Links": [
    ["Home", "/"],
    ["All Courses", "/courses"],
    ["About Mission", "/about"],
    ["Whitefield Campus", "/#centers"],
    ["Placement Network", "/#stories"],
    ["Book Counselling", "/contact"],
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-900 text-white pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/brand/logo-with-slogan.png"
                alt="Hirely and Jobly"
                width={220}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Bangalore’s premier outcome-driven tech academy for engineering and B.Tech students. Industry capstones, FAANG mentorship, and guaranteed placement assistance.
            </p>
            <div className="text-xs text-slate-300 space-y-2 pt-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} strokeWidth={1.75} className="text-blue-400 shrink-0 mt-0.5" />
                <a
                  href={"mapsUrl" in site ? (site as { mapsUrl?: string }).mapsUrl : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <b>Campus:</b> {site.address}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} strokeWidth={1.75} className="text-blue-400 shrink-0" />
                <a href={`tel:${site.phone.replace(/[\s\-]/g, "")}`} className="hover:text-white transition-colors">
                  <b>Phone:</b> {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} strokeWidth={1.75} className="text-blue-400 shrink-0" />
                <span><b>Email:</b> {site.email}</span>
              </div>
            </div>
          </div>

          {/* Tech Tracks Links Column */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Tech Tracks
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {FOOTER_SECTIONS["Tech Tracks"].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {FOOTER_SECTIONS["Quick Links"].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Backers Column */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Backed By
            </div>
            <BackerLogos />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved. Whitefield, Bangalore.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  );
};
