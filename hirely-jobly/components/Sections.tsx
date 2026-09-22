"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Plus, Sparkles, Star, Zap, Users, Briefcase, Award, Clock, Globe, Target } from "lucide-react";
import { site, stats, partners, courses, benefits, why, tiles, testimonials, plans, faqs } from "@/data/content";

// ─── Animation helpers ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};
const Reveal = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={delay} viewport={{ once: true, margin: "-60px" }} className={className}>
    {children}
  </motion.div>
);

// ─── Shared primitives ───────────────────────────────────────────────────────
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="pill">{children}</span>
);

const Head = ({ pill, title, sub }: { pill: string; title: string; sub?: string }) => (
  <div className="mb-10 text-center">
    <Reveal><Pill>{pill}</Pill></Reveal>
    <Reveal delay={1}><h2 className="font-serif mt-4 text-3xl tracking-tight md:text-4xl">{title}</h2></Reveal>
    {sub && <Reveal delay={2}><p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">{sub}</p></Reveal>}
  </div>
);

const Sec = ({ id, children, className }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 py-16 ${className ?? ""}`}>{children}</section>
);

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2 font-semibold">
    <Image src="/images/logo-icon.png" alt="Hirely & Jobly logo" width={28} height={28} className="rounded-lg" />
    Hirely & Jobly
  </Link>
);

// ─── Nav ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  ["Home",            "/"],
  ["About",           "/about"],
  ["Courses",         "/courses"],
  ["Success Stories", "/#stories"],
  ["Contact",         "/contact"],
];

export const Nav = ({ activePath = "/" }: { activePath?: string }) => (
  <header className="sticky top-0 z-20 border-b border-neutral-200/60 bg-[#f5f5f5]/90 backdrop-blur">
    <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
      <Logo />
      <nav className="hidden gap-1 text-xs md:flex" aria-label="Main navigation">
        {NAV_LINKS.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className={`rounded-lg px-3 py-1.5 font-medium transition-colors hover:bg-white ${
              activePath === href ? "border-[1.5px] border-neutral-900 bg-white" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="btn btn-dark text-xs">
        Enroll now <ArrowUpRight size={13} />
      </Link>
    </div>
  </header>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = () => (
  <Sec>
    <div className="relative overflow-hidden rounded-[28px] bg-[#e9e9ec] px-6 py-14 md:px-12 md:py-24">
      <div className="relative z-10 max-w-lg">
        <Reveal>
          <span className="pill mb-4 inline-block">🎓 Now enrolling — batch starts soon</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="font-serif text-4xl leading-[1.06] tracking-tight md:text-6xl">
            Launch your tech career,{" "}
            <span className="text-neutral-400">faster</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600 max-w-sm">
            Industry-ready courses in AI, Cybersecurity, UI/UX and more, built for B.Tech students in Hyderabad and beyond.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/courses" className="btn btn-dark">Explore courses <ArrowUpRight size={14} /></Link>
            <Link href="/contact" className="btn btn-light">Talk to us</Link>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-10 flex gap-8">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl font-bold">{n}</div>
                <div className="text-xs text-neutral-500">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Hero student portrait */}
      <div className="absolute inset-y-0 right-0 hidden w-[48%] md:block overflow-hidden rounded-r-[28px]" aria-hidden="true">
        <Image
          src="/images/hero-student.jpg"
          alt="Student learning at Hirely & Jobly"
          fill
          className="object-cover object-center"
          priority
        />
        {/* gradient fade on the left edge so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e9e9ec] via-[#e9e9ec]/20 to-transparent" style={{width: '38%'}} />
      </div>
      {/* Frosted glass counselling card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-10 max-w-xs rounded-2xl border border-white/20 bg-neutral-900/70 p-4 text-white backdrop-blur md:absolute md:bottom-8 md:right-8 md:mt-0"
      >
        <div className="text-[11px] opacity-70 font-medium uppercase tracking-wider">Free counselling</div>
        <div className="mt-1 text-sm font-semibold">Book a free demo class</div>
        <div className="mt-2 flex items-end justify-between gap-4 text-[11px] opacity-80">
          <span>Share a few details and we will call you back.</span>
          <Link href="/contact" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-black hover:bg-neutral-100 transition-colors" aria-label="Book demo">
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Partner marquee */}
    <Reveal>
      <div className="mt-8 overflow-hidden text-neutral-400" aria-label="Hiring partners">
        <div className="marquee select-none">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="mx-8 text-sm font-semibold tracking-wide">{p}</span>
          ))}
        </div>
      </div>
    </Reveal>
  </Sec>
);

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const Benefits = () => (
  <Sec id="why-us">
    <Head pill="Benefits" title="Discover why students choose us" sub="Practical training that communicates clearly, builds real skills and supports your career goals." />
    <div className="grid gap-4 md:grid-cols-3">
      {benefits.map((b, i) => (
        <Reveal key={b.t} delay={i}>
          <div className="card card-hover overflow-hidden h-full">
            {/* Visual mockup */}
            <div className="h-44 overflow-hidden relative">
              {i === 0 && (
                <>
                  <Image src="/images/courses/ai-ml.jpg" alt="Industry-built curriculum" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 space-y-1.5 text-xs">
                    {["Module 1: Foundations", "Module 2: Core concepts", "Module 3: Capstone project"].map((m, k) => (
                      <div key={m} className={`rounded-lg px-3 py-1.5 font-medium backdrop-blur-sm ${k === 1 ? "bg-white text-neutral-900" : "bg-white/20 text-white border border-white/30"}`}>{m}</div>
                    ))}
                  </div>
                </>
              )}
              {i === 1 && (
                <>
                  <Image src="/images/about-mentor-session.jpg" alt="Hands-on projects with mentors" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {["React", "Python", "Figma", "Unity"].map((tag) => (
                      <span key={tag} className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-neutral-800">{tag}</span>
                    ))}
                  </div>
                </>
              )}
              {i === 2 && (
                <>
                  <Image src="/images/counsellor.jpg" alt="Placement support" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-emerald-400 px-2.5 py-1 text-[10px] font-bold text-emerald-950">✓ Offer received</span>
                    <div className="mt-1.5 text-xs font-semibold text-white">Junior Developer · ₹4.5 LPA</div>
                  </div>
                </>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{b.t}</h3>
              <p className="mt-1 text-sm text-neutral-500">{b.d}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Sec>
);

// ─── Courses ──────────────────────────────────────────────────────────────────
export const Courses = () => (
  <Sec id="courses">
    <Head pill="Our courses" title="Courses built for your career" sub="Seven job-focused tracks for B.Tech students — from first steps to portfolio-ready projects." />
    <div className="grid gap-4 sm:grid-cols-2">
      {courses.map((c, i) => (
        <Reveal key={c.slug} delay={i * 0.5}>
          <Link href={`/courses/${c.slug}`} className="card course-card group block p-2">
            <div className="relative h-56 overflow-hidden rounded-xl">
              <Image
                src={`/images/courses/${c.slug}.jpg`}
                alt={c.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-br opacity-70 ${c.cover}`} />
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <div className={`font-serif text-2xl leading-tight ${c.dark ? "text-white" : "text-neutral-900"}`}>{c.name}</div>
                  <div className={`mt-1 text-xs opacity-80 ${c.dark ? "text-white" : "text-neutral-900"}`}>{c.meta}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-3 text-sm">
              <span className="font-medium">{c.name}</span>
              <ArrowUpRight size={16} className="text-neutral-400 transition-colors group-hover:text-black" />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
    <Reveal delay={2}>
      <div className="mt-8 text-center">
        <Link href="/courses" className="btn btn-light">View all courses <ArrowUpRight size={14} /></Link>
      </div>
    </Reveal>
  </Sec>
);

// ─── Why ──────────────────────────────────────────────────────────────────────
export const Why = () => (
  <Sec id="why">
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <Reveal><Pill>Why choose us</Pill></Reveal>
        <Reveal delay={1}><h2 className="font-serif mt-4 text-3xl md:text-4xl">Training built around<br />real outcomes</h2></Reveal>
      </div>
      <Reveal delay={2}><p className="max-w-sm text-sm text-neutral-500">Strategy, mentoring and hands-on practice together, so your skills show up in interviews.</p></Reveal>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      <div className="space-y-4">
        <Reveal>
          <div className="card card-hover p-4 text-sm flex items-center gap-3">
            <span className="inline-flex -space-x-3">
              {["/images/avatars/avatar-1.jpg", "/images/avatars/avatar-2.jpg", "/images/avatars/avatar-3.jpg", "/images/avatars/avatar-4.jpg"].map((src, k) => (
                <span key={k} className="relative inline-block h-9 w-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src={src} alt={`Student ${k + 1}`} fill className="object-cover object-top" />
                </span>
              ))}
            </span>
            <span className="font-semibold text-neutral-800">{why.clients}</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="card card-hover flex h-44 flex-col justify-between p-5">
            <p className="text-sm text-neutral-600">Clear learning paths shaped around every student goal.</p>
            <div>
              <div className="font-serif text-5xl font-bold">{why.sat}</div>
              <div className="text-xs text-neutral-500">{why.satL}</div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="space-y-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl h-56">
            <Image src="/images/about-classroom.jpg" alt="Students in class" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <p className="text-sm text-white/80 font-medium">Real projects built with mentors, reviewed every week.</p>
              <div>
                <div className="font-serif text-5xl font-bold text-white">{why.proj}</div>
                <div className="text-xs text-white/70">{why.projL}</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="card card-hover flex items-center gap-2 p-4 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-lime-500 animate-pulse" />
            Now enrolling
          </div>
        </Reveal>
      </div>
      <Reveal delay={1}>
        <div className="dark-card flex min-h-72 flex-col justify-between p-6 relative overflow-hidden">
          {/* Student portrait collage in top-right */}
          <div className="absolute top-0 right-0 w-24 h-32 opacity-40" aria-hidden="true">
            <div className="grid grid-cols-2 gap-0.5 h-full">
              {["/images/avatars/ananya.jpg", "/images/avatars/karthik.jpg", "/images/avatars/sneha.jpg", "/images/avatars/avatar-2.jpg"].map((src, k) => (
                <div key={k} className="relative overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover object-top" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#121215] via-transparent to-transparent" />
          </div>
          <p className="relative text-sm text-neutral-200 leading-relaxed max-w-[80%]">{why.quote}</p>
          <div className="relative flex items-end gap-3">
            <span className="font-serif text-5xl font-bold">{why.rating}</span>
            <span className="pb-1 text-xs text-neutral-400">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, k) => <Star key={k} size={12} fill="currentColor" />)}
              </span>
              {why.ratingL}
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </Sec>
);

// ─── Expertise ────────────────────────────────────────────────────────────────
const tileIcons = [Sparkles, Users, Target, Zap, Clock, Globe, Briefcase, Award];

export const Expertise = () => (
  <Sec>
    <Head pill="Expertise" title="Learning support with clear direction" sub="A focused mix of teaching, projects and career support to help you reach job-ready with confidence." />
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {tiles.map(([t, d], i) => {
        const Icon = tileIcons[i] ?? Sparkles;
        const isDark = i === 7;
        const isWide = i === 4;
        return (
          <Reveal key={t} delay={i * 0.4} className={`${isWide ? "md:col-span-2" : ""}`}>
            <div className={`${isDark ? "dark-card" : "card card-hover"} ${isWide ? "" : ""} flex min-h-40 flex-col justify-between p-4 h-full`}>
              <span className={`grid h-8 w-8 place-items-center rounded-lg shadow ${isDark ? "bg-white/15" : "bg-white"}`}>
                <Icon size={14} />
              </span>
              <div>
                <div className="text-sm font-semibold">{t}</div>
                <p className={`mt-1 text-xs ${isDark ? "text-neutral-300" : "text-neutral-500"}`}>{d}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </Sec>
);

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const Testimonials = () => (
  <Sec id="stories">
    <div className="mb-8 flex items-end justify-between">
      <div>
        <Reveal><Pill>Testimonials</Pill></Reveal>
        <Reveal delay={1}><h2 className="font-serif mt-4 text-3xl md:text-4xl">What students say</h2></Reveal>
      </div>
      <Reveal delay={2}><p className="hidden max-w-xs text-sm text-neutral-500 md:block">Thoughtful feedback from students who trusted the process and reached their goals.</p></Reveal>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      <Reveal>
        <div className="dark-card flex min-h-64 flex-col justify-between p-6 overflow-hidden relative">
          {/* Background student photo, subtle */}
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <Image src="/images/avatars/ananya.jpg" alt="" fill className="object-cover object-top scale-110" />
          </div>
          <div className="relative">
            <span className="flex text-amber-400">{[...Array(5)].map((_, k) => <Star key={k} size={12} fill="currentColor" />)}</span>
            <p className="mt-3 text-sm text-neutral-200 leading-relaxed">{testimonials[0].q}</p>
          </div>
          <div className="relative flex items-center gap-3 text-xs">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/30">
              <Image src="/images/avatars/ananya.jpg" alt={testimonials[0].n} fill className="object-cover object-top" />
            </span>
            <div>
              <b className="text-sm">{testimonials[0].n}</b>
              <div className="text-neutral-400 mt-0.5">{testimonials[0].r}</div>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="space-y-4">
        <Reveal delay={1}>
          <div className="card card-hover flex min-h-52 flex-col justify-between p-5 overflow-hidden relative">
            <p className="text-sm text-neutral-700 leading-relaxed">{testimonials[1].q}</p>
            <div className="flex items-center gap-3 text-xs">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-neutral-200">
                <Image src="/images/avatars/karthik.jpg" alt={testimonials[1].n} fill className="object-cover object-top" />
              </span>
              <div>
                <b className="text-sm text-neutral-900">{testimonials[1].n}</b>
                <div className="text-neutral-500 mt-0.5">{testimonials[1].r}</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={2}>
          <div className="card p-4 text-center text-sm font-medium text-neutral-600">
            ⭐ Trusted by 5000+ students across Telangana
          </div>
        </Reveal>
      </div>
      <div className="space-y-4">
        <Reveal delay={1}>
          <Link href="/contact" className="btn btn-dark w-full justify-center py-3 text-sm">
            Join our next batch <ArrowUpRight size={14} />
          </Link>
        </Reveal>
        <Reveal delay={2}>
          <div className="card card-hover flex min-h-52 flex-col justify-between p-5 overflow-hidden relative">
            <p className="text-sm text-neutral-700 leading-relaxed">{testimonials[2].q}</p>
            <div className="flex items-center gap-3 text-xs">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-neutral-200">
                <Image src="/images/avatars/sneha.jpg" alt={testimonials[2].n} fill className="object-cover object-top" />
              </span>
              <div>
                <b className="text-sm text-neutral-900">{testimonials[2].n}</b>
                <div className="text-neutral-500 mt-0.5">{testimonials[2].r}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </Sec>
);

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const Pricing = () => (
  <Sec id="pricing">
    <Head pill="Pricing" title="Simple plans, clear outcomes" sub="Focused plans for learning, projects and placement." />
    <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
      {plans.map((p, i) => (
        <Reveal key={p.name} delay={i}>
          <div className={`${p.dark ? "dark-card" : "card"} p-6 h-full flex flex-col`}>
            <div className="font-semibold text-base">{p.name}</div>
            <p className={`mt-1 text-xs ${p.dark ? "text-neutral-300" : "text-neutral-500"}`}>{p.desc}</p>
            <div className="font-serif mt-5 text-5xl font-bold">{p.price}</div>
            <p className={`mt-1 text-[11px] ${p.dark ? "text-neutral-400" : "text-neutral-400"}`}>per student · one-time</p>
            <Link href="/contact" className={`btn mt-5 w-full justify-center ${p.dark ? "bg-white text-black hover:bg-neutral-100" : "btn-dark"}`}>
              {p.cta} <ArrowUpRight size={14} />
            </Link>
            <ul className="mt-5 space-y-2.5 text-xs flex-1">
              {p.f.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={13} className={p.dark ? "text-lime-400" : "text-neutral-700"} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </Sec>
);

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const Faq = () => (
  <Sec id="faq">
    <Head pill="FAQ" title="Explore our FAQs" sub="Answers to questions about batches, fees, placements and enrollment." />
    <div className="mx-auto max-w-xl space-y-3">
      {faqs.map(([q, a]) => (
        <Reveal key={q}>
          <details className="card px-4 py-3 group">
            <summary className="flex items-center justify-between text-sm font-medium cursor-pointer">
              {q}
              <Plus size={16} className="plus shrink-0 text-neutral-400" />
            </summary>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  </Sec>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_LINKS = {
  Pages:  [["Home", "/"], ["About", "/about"], ["Courses", "/courses"], ["Pricing", "/#pricing"], ["Contact", "/contact"]],
  Social: [["Instagram", "#"], ["LinkedIn", "#"], ["YouTube", "#"]],
};

export const Footer = () => (
  <footer className="mx-auto max-w-6xl px-4 pb-6">
    <div className="card overflow-hidden">
      <div className="flex flex-col justify-between gap-8 p-6 md:flex-row">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            Job-ready tech training for B.Tech students in {site.city}.
          </p>
          <p className="mt-2 text-xs text-neutral-400">
            {site.email} · {site.phone}
          </p>
        </div>
        <div className="flex gap-16 text-xs">
          {(Object.entries(FOOTER_LINKS) as [string, [string, string][]][]).map(([heading, links]) => (
            <div key={heading}>
              <div className="mb-2 font-semibold">{heading}</div>
              {links.map(([label, href]) => (
                <div key={label} className="py-0.5">
                  <Link href={href} className="text-neutral-500 hover:text-neutral-900 transition-colors">{label}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="wordmark font-serif select-none whitespace-nowrap px-4 text-center text-[13vw] font-bold leading-none md:text-[120px]">
        HIRELY &amp; JOBLY
      </div>
      <div className="bg-neutral-900 px-6 py-3 text-xs text-neutral-400">
        © {new Date().getFullYear()} {site.name}. All rights reserved. · Hyderabad, Telangana
      </div>
    </div>
  </footer>
);
