import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { Nav, Footer, Pill } from "@/components/Sections";
import { courses } from "@/data/content";

export const metadata: Metadata = {
  title: "All Tech Courses | Hirely and Jobly",
  description: "Explore 7 job-ready tech courses in AI/ML, Full-Stack, DSA, UI/UX, Cybersecurity, AR/VR, and Game Design for engineering students in Hyderabad.",
};

export default function CoursesPage() {
  return (
    <>
      <Nav activePath="/courses" />
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <Pill>Course Catalog 2026</Pill>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Industry-crafted <span className="gradient-text">tech tracks</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Seven practical, outcome-driven programs built specifically for engineering and B.Tech students. Learn directly from practicing software engineers and build portfolio-grade capstone projects.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.slug}
              className="card card-hover flex flex-col justify-between overflow-hidden p-5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="ribbon-scholarship">{c.scholarship}</span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    ⏱ {c.duration}
                  </span>
                </div>

                <div className="relative h-44 w-full overflow-hidden rounded-xl">
                  <Image
                    src={`/images/courses/${c.slug}.jpg`}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[11px] font-medium text-blue-300">
                      {c.highlight}
                    </div>
                    <h3 className="text-lg font-bold leading-tight text-white">
                      {c.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {c.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  {c.startingBatch}
                </span>
                <Link
                  href={`/courses/${c.slug}`}
                  className="btn btn-primary text-xs py-1.5 px-4"
                >
                  View Curriculum <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Free Academic Counselling Callout */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-8 p-8 md:p-12">
              <span className="pill mb-3 inline-block bg-blue-500/20 text-blue-300 border-blue-400/30">
                1-on-1 Academic Mentorship
              </span>
              <h2 className="text-2xl font-bold md:text-3xl">
                Not sure which track matches your career goal?
              </h2>
              <p className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl">
                Speak directly with our senior academic counsellor in Hyderabad. We review your branch, coding experience, and recommend the best roadmap.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary py-3 px-6 text-sm font-semibold"
                >
                  Book Free Demo Class <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/about"
                  className="btn btn-secondary py-3 px-6 text-sm"
                >
                  Our Hyderabad Centers
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block md:col-span-4 h-72">
              <Image
                src="/images/about/counsellor.jpg"
                alt="Academic counsellor at Hirely and Jobly"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
