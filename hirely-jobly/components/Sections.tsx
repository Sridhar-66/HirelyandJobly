import { ArrowUpRight, Check, Plus, Sparkles, Star } from "lucide-react";
import { site, stats, partners, courses, benefits, why, tiles, testimonials, plans, faqs } from "@/data/content";

const Pill = ({ children }: { children: React.ReactNode }) => <span className="inline-block rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs">{children}</span>;
const Head = ({ pill, title, sub }: { pill: string; title: string; sub?: string }) => (
  <div className="mb-10 text-center"><Pill>{pill}</Pill><h2 className="font-serif mt-4 text-3xl tracking-tight md:text-4xl">{title}</h2>{sub && <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">{sub}</p>}</div>
);
const Sec = ({ id, children }: { id?: string; children: React.ReactNode }) => <section id={id} className="mx-auto max-w-6xl px-4 py-16">{children}</section>;
const Logo = () => <span className="flex items-center gap-2 font-semibold"><span className="grid h-7 w-7 place-items-center rounded-lg bg-neutral-900 text-sm text-white">H</span>Hirely &amp; Jobly</span>;

export const Nav = () => (
  <header className="sticky top-0 z-20 border-b border-neutral-200/60 bg-[#f5f5f5]/85 backdrop-blur">
    <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
      <Logo />
      <nav className="hidden gap-2 text-xs md:flex">
        {[["Home", "#"], ["About", "#why"], ["Courses", "#courses"], ["Success stories", "#stories"], ["Contact", "#contact"]].map(([l, h], i) => (
          <a key={l} href={h} className={`rounded-lg px-3 py-1.5 ${i === 0 ? "border-2 border-neutral-900" : "hover:bg-white"}`}>{l}</a>))}
      </nav>
      <a href="#contact" className="btn btn-dark">Enroll now <ArrowUpRight size={14} /></a>
    </div>
  </header>
);

export const Hero = () => (
  <Sec>
    <div className="relative overflow-hidden rounded-[28px] bg-[#e9e9ec] px-6 py-14 md:px-12 md:py-20">
      <div className="relative z-10 max-w-md">
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">Launch your tech career, <span className="text-neutral-400">faster</span></h1>
        <p className="mt-5 text-sm text-neutral-600">Industry-ready courses in AI, Cybersecurity, UI/UX and more, built for B.Tech students in Hyderabad and beyond.</p>
        <div className="mt-6 flex gap-3"><a href="#courses" className="btn btn-dark">Explore courses</a><a href="#contact" className="btn btn-light">Talk to us</a></div>
        <div className="mt-10 flex gap-8">{stats.map(([n, l]) => <div key={l}><div className="font-serif text-2xl">{n}</div><div className="text-xs text-neutral-500">{l}</div></div>)}</div>
      </div>
      {/* TODO: replace with <Image src="/hero.jpg" fill className="object-cover grayscale" alt="" /> */}
      <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-gradient-to-l from-neutral-800 via-neutral-500 to-transparent md:block" aria-hidden />
      <div className="relative z-10 mt-10 max-w-xs rounded-2xl border border-white/30 bg-neutral-900/70 p-4 text-white backdrop-blur md:absolute md:bottom-8 md:right-8 md:mt-0">
        <div className="text-[11px] opacity-70">Free counselling</div><div className="text-sm font-semibold">Book a free demo class</div>
        <div className="mt-1 flex items-end justify-between gap-4 text-[11px] opacity-80"><span>Share a few details and we will call you back.</span><a href="#contact" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-black"><ArrowUpRight size={16} /></a></div>
      </div>
    </div>
    <div className="mt-8 overflow-hidden text-neutral-500"><div className="marquee">{[...partners, ...partners].map((p, i) => <span key={i} className="mx-8 text-sm font-semibold">{p}</span>)}</div></div>
  </Sec>
);

export const Benefits = () => (
  <Sec id="why-us">
    <Head pill="Benefits" title="Discover why students choose us" sub="Practical training that communicates clearly, builds real skills and supports your career goals." />
    <div className="grid gap-4 md:grid-cols-3">
      {benefits.map((b, i) => (
        <div key={b.t} className="card overflow-hidden">
          <div className="h-44 overflow-hidden bg-neutral-50 p-4">
            {i === 0 && <div className="space-y-2 text-xs">{["Module 1: Foundations", "Module 2: Core concepts", "Module 3: Capstone project"].map((m, k) => <div key={m} className={`rounded-lg border px-3 py-2 ${k === 1 ? "bg-neutral-900 text-white" : "bg-white"}`}>{m}</div>)}</div>}
            {i === 1 && <svg viewBox="0 0 200 100" className="h-full w-full"><path d="M0 80 L30 55 L60 65 L90 30 L120 50 L150 20 L200 40 V100 H0Z" fill="#e5e5e5" /><path d="M0 80 L30 55 L60 65 L90 30 L120 50 L150 20 L200 40" fill="none" stroke="#999" strokeWidth="1.5" /></svg>}
            {i === 2 && <div className="card mx-auto max-w-[220px] p-3 text-xs"><span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">Offer received</span><div className="mt-3 font-semibold">Junior Developer</div><div className="text-neutral-500">Hyderabad</div></div>}
          </div>
          <div className="p-5"><h3 className="font-semibold">{b.t}</h3><p className="mt-1 text-sm text-neutral-500">{b.d}</p></div>
        </div>))}
    </div>
  </Sec>
);

export const Courses = () => (
  <Sec id="courses">
    <Head pill="Our courses" title="Courses built for your career" sub="Seven job-focused tracks for B.Tech students, from first steps to portfolio-ready projects." />
    <div className="grid gap-4 sm:grid-cols-2">
      {courses.map((c) => (
        <a key={c.slug} href={`/courses/${c.slug}`} className="card group block p-2">
          <div className={`flex h-56 items-end rounded-xl bg-gradient-to-br p-5 ${c.cover} ${c.dark ? "text-white" : "text-neutral-900"}`}>
            <div><div className="font-serif text-2xl leading-tight">{c.name}</div><div className="mt-1 text-xs opacity-80">{c.meta}</div></div>
          </div>
          <div className="flex items-center justify-between px-2 py-3 text-sm"><span>{c.name}</span><ArrowUpRight size={16} className="text-neutral-400 group-hover:text-black" /></div>
        </a>))}
    </div>
  </Sec>
);

export const Why = () => (
  <Sec id="why">
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><Pill>Why choose us</Pill><h2 className="font-serif mt-4 text-3xl md:text-4xl">Training built around<br />real outcomes</h2></div><p className="max-w-sm text-sm text-neutral-500">Strategy, mentoring and hands-on practice together, so your skills show up in interviews.</p></div>
    <div className="grid gap-4 md:grid-cols-3">
      <div className="space-y-4">
        <div className="card p-4 text-sm"><span className="mr-2 inline-flex -space-x-2">{[1, 2, 3, 4].map((k) => <span key={k} className="inline-block h-7 w-7 rounded-full border-2 border-white bg-neutral-300" />)}</span>{why.clients}</div>
        <div className="card flex h-44 flex-col justify-between p-5"><p className="text-sm text-neutral-600">Clear learning paths shaped around every student goal.</p><div><div className="font-serif text-5xl">{why.sat}</div><div className="text-xs text-neutral-500">{why.satL}</div></div></div>
      </div>
      <div className="space-y-4">
        <div className="card flex h-56 flex-col justify-between p-5"><p className="text-sm text-neutral-600">Real projects built with mentors, reviewed every week.</p><div><div className="font-serif text-5xl">{why.proj}</div><div className="text-xs text-neutral-500">{why.projL}</div></div></div>
        <div className="card flex items-center gap-2 p-4 text-sm"><span className="h-2 w-2 rounded-full bg-lime-500" />Now enrolling</div>
      </div>
      <div className="dark-card flex min-h-72 flex-col justify-between p-6"><p className="text-sm text-neutral-200">{why.quote}</p><div className="flex items-end gap-3"><span className="font-serif text-5xl">{why.rating}</span><span className="pb-1 text-xs text-neutral-400"><span className="flex text-amber-400">{[...Array(5)].map((_, k) => <Star key={k} size={12} fill="currentColor" />)}</span>{why.ratingL}</span></div></div>
    </div>
  </Sec>
);

export const Expertise = () => (
  <Sec>
    <Head pill="Expertise" title="Learning support with clear direction" sub="A focused mix of teaching, projects and career support to help you reach job-ready with confidence." />
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {tiles.map(([t, d], i) => (
        <div key={t} className={`${i === 3 ? "dark-card" : "card"} ${i === 3 ? "md:col-span-1" : ""} ${i === 5 ? "md:col-span-2" : ""} flex min-h-40 flex-col justify-between p-4`}>
          <span className={`grid h-8 w-8 place-items-center rounded-lg shadow ${i === 3 ? "bg-white/10" : "bg-white"}`}><Sparkles size={14} /></span>
          <div><div className="text-sm font-semibold">{t}</div><p className={`mt-1 text-xs ${i === 3 ? "text-neutral-300" : "text-neutral-500"}`}>{d}</p></div>
        </div>))}
    </div>
  </Sec>
);

export const Testimonials = () => (
  <Sec id="stories">
    <div className="mb-8 flex items-end justify-between"><div><Pill>Testimonials</Pill><h2 className="font-serif mt-4 text-3xl md:text-4xl">What students say</h2></div><p className="hidden max-w-xs text-sm text-neutral-500 md:block">Thoughtful feedback from students who trusted the process and reached their goals.</p></div>
    <div className="grid gap-4 md:grid-cols-3">
      <div className="dark-card flex min-h-64 flex-col justify-between p-6"><div><span className="flex text-amber-400">{[...Array(5)].map((_, k) => <Star key={k} size={12} fill="currentColor" />)}</span><p className="mt-3 text-sm text-neutral-200">{testimonials[0].q}</p></div><div className="text-xs"><b>{testimonials[0].n}</b><div className="text-neutral-400">{testimonials[0].r}</div></div></div>
      <div className="space-y-4">
        <div className="card flex min-h-52 flex-col justify-between p-5"><p className="text-sm text-neutral-700">{testimonials[1].q}</p><div className="text-xs"><b>{testimonials[1].n}</b><div className="text-neutral-500">{testimonials[1].r}</div></div></div>
        <div className="card p-4 text-center text-sm">Trusted by 5000+ students</div>
      </div>
      <div className="space-y-4">
        <a href="#contact" className="btn btn-dark w-full justify-center py-3">Join our next batch</a>
        <div className="card flex min-h-52 flex-col justify-between p-5"><p className="text-sm text-neutral-700">{testimonials[2].q}</p><div className="text-xs"><b>{testimonials[2].n}</b><div className="text-neutral-500">{testimonials[2].r}</div></div></div>
      </div>
    </div>
  </Sec>
);

export const Pricing = () => (
  <Sec id="pricing">
    <Head pill="Pricing" title="Simple plans, clear outcomes" sub="Focused plans for learning, projects and placement." />
    <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
      {plans.map((p) => (
        <div key={p.name} className={`${p.dark ? "dark-card" : "card"} p-6`}>
          <div className="font-semibold">{p.name}</div><p className={`mt-1 text-xs ${p.dark ? "text-neutral-300" : "text-neutral-500"}`}>{p.desc}</p>
          <div className="font-serif mt-5 text-5xl">{p.price}</div>
          <a href="#contact" className={`btn mt-5 w-full justify-center ${p.dark ? "bg-white text-black" : "btn-dark"}`}>{p.cta}</a>
          <ul className="mt-5 space-y-2 text-xs">{p.f.map((f) => <li key={f} className="flex items-center gap-2"><Check size={13} />{f}</li>)}</ul>
        </div>))}
    </div>
  </Sec>
);

export const Faq = () => (
  <Sec id="contact">
    <Head pill="FAQ" title="Explore our FAQs" sub="Answers to questions about batches, fees, placements and enrollment." />
    <div className="mx-auto max-w-xl space-y-3">
      {faqs.map(([q, a]) => (
        <details key={q} className="card px-4 py-3"><summary className="flex items-center justify-between text-sm">{q}<Plus size={16} className="plus" /></summary><p className="mt-2 text-sm text-neutral-500">{a}</p></details>))}
    </div>
  </Sec>
);

export const Footer = () => (
  <footer className="mx-auto max-w-6xl px-4 pb-6">
    <div className="card overflow-hidden">
      <div className="flex flex-col justify-between gap-8 p-6 md:flex-row">
        <div className="max-w-xs"><Logo /><p className="mt-3 text-xs text-neutral-500">Job-ready tech training for B.Tech students in {site.city}.</p><p className="mt-3 text-xs text-neutral-500">{site.email} · {site.phone}</p></div>
        <div className="flex gap-16 text-xs"><div><div className="mb-2 font-semibold">Pages</div>{["Home", "About", "Courses", "Pricing", "Contact"].map((l) => <div key={l} className="py-0.5 text-neutral-500">{l}</div>)}</div><div><div className="mb-2 font-semibold">Social</div>{["Instagram", "LinkedIn", "YouTube"].map((l) => <div key={l} className="py-0.5 text-neutral-500">{l}</div>)}</div></div>
      </div>
      <div className="wordmark font-serif select-none whitespace-nowrap px-4 text-center text-[13vw] font-bold leading-none md:text-[120px]">HIRELY &amp; JOBLY</div>
      <div className="bg-neutral-900 px-6 py-3 text-xs text-neutral-300">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </div>
  </footer>
);
