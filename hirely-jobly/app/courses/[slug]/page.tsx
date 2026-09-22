import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Briefcase,
  Award,
  Wrench,
  FolderCheck,
  Clock,
  MapPin,
  Check,
  ShieldCheck,
} from "lucide-react";
import { Nav, Footer, Pill } from "@/components/Sections";
import { courseDetails } from "@/data/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courseDetails.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courseDetails.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.name} | Hirely and Jobly`,
    description: course.overview,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courseDetails.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Nav activePath="/courses" />
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Back Link */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to all courses
        </Link>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-14 shadow-xl">
          <div className="blob blob-blue -top-20 -right-20 h-80 w-80 opacity-40" />
          <div className="blob blob-indigo -bottom-20 -left-20 h-80 w-80 opacity-30" />

          <div className="relative z-10 max-w-2xl">
            <span className="pill mb-4 inline-flex bg-blue-500/20 text-blue-300 border-blue-400/30">
              ⏱ {course.meta}
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              {course.name}
            </h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-300">
              {course.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/contact"
                className="btn btn-primary py-3 px-6 text-sm font-semibold"
              >
                Enroll in this Track <ArrowUpRight size={14} />
              </Link>
              <a
                href="#syllabus"
                className="btn btn-secondary py-3 px-6 text-sm"
              >
                Explore Syllabus
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Main Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Course Overview</h2>
              <div className="card p-6 md:p-8">
                <p className="text-sm md:text-base leading-relaxed text-slate-700">
                  {course.overview}
                </p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Mode</span>
                    <span className="font-bold text-slate-800">Hyderabad Lab &amp; Live Online</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Batches</span>
                    <span className="font-bold text-slate-800">Weekend &amp; Evening</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Certificate</span>
                    <span className="font-bold text-slate-800">Verified on Capstone</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Curriculum & Modules Accordion */}
            <section id="syllabus" className="scroll-mt-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Curriculum &amp; Modules</h2>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {course.modules.length} Detailed Modules
                </span>
              </div>
              <div className="space-y-3">
                {course.modules.map((mod, idx) => (
                  <details
                    key={mod.title}
                    className="module card p-5 group open:border-blue-200 open:shadow-sm"
                    open={idx === 0}
                  >
                    <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm md:text-base select-none">
                      <span className="flex items-center gap-3">
                        <span className="grid h-6 w-6 place-items-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                          {idx + 1}
                        </span>
                        {mod.title}
                      </span>
                      <span className="mod-plus text-slate-400 text-lg leading-none">+</span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-slate-100 pl-9">
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs md:text-sm text-slate-600">
                        {mod.topics.map((t) => (
                          <li key={t} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Portfolio Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Portfolio Projects You Will Build
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.projects.map((proj, idx) => (
                  <div key={proj} className="card p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-blue-600 text-xs font-bold mb-2">
                        <FolderCheck size={16} />
                        Project {idx + 1}
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm">{proj}</h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                      ✓ GitHub Repository &amp; Live Deployment Ready
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Sticky Tools, Outcomes, Counselling */}
          <div className="space-y-6">
            {/* Tools & Tech Stack */}
            <div className="card p-6">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-4">
                <Wrench size={16} className="text-blue-600" />
                Tools &amp; Tech Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Career Outcomes */}
            <div className="card p-6">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-4">
                <Briefcase size={16} className="text-blue-600" />
                Target Job Roles
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                {course.outcomes.map((out) => (
                  <li key={out} className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0" />
                    {out}
                  </li>
                ))}
              </ul>
            </div>

            {/* Counselling Sidebar Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 shadow-lg">
              <span className="pill mb-3 inline-block bg-white/20 text-white border-white/20">
                Free Batch Demo
              </span>
              <h3 className="text-lg font-bold">Have questions on this course?</h3>
              <p className="mt-2 text-xs text-blue-100 leading-relaxed">
                Connect with our academic team in Hyderabad to review the curriculum and reserve your seat.
              </p>
              <Link
                href="/contact"
                className="btn btn-secondary mt-5 w-full py-2.5 text-xs font-bold"
              >
                Book Free Counselling <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
