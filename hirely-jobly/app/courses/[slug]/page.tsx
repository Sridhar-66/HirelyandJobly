import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Briefcase, Award, Wrench, FolderCheck } from "lucide-react";
import { Nav, Footer } from "@/components/Sections";
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to all courses
        </Link>

        {/* Hero Banner */}
        <div
          className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br p-8 md:p-14 ${course.cover} ${
            course.dark ? "text-white" : "text-neutral-900"
          } shadow-sm`}
        >
          <div className="max-w-2xl relative z-10">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur mb-4 ${
                course.dark ? "bg-white/20 text-white" : "bg-black/10 text-neutral-900"
              }`}
            >
              {course.meta}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight font-bold">
              {course.name}
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-90 leading-relaxed max-w-xl">
              {course.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={`btn ${
                  course.dark
                    ? "bg-white text-neutral-900 hover:bg-neutral-100"
                    : "btn-dark"
                }`}
              >
                Enroll in this course <ArrowUpRight size={14} />
              </Link>
              <a
                href="#syllabus"
                className={`btn ${
                  course.dark
                    ? "border border-white/40 text-white hover:bg-white/10"
                    : "btn-light"
                }`}
              >
                View syllabus
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Main Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Course Overview</h2>
              <div className="card p-6 md:p-8">
                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                  {course.overview}
                </p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-100 text-xs">
                  <div>
                    <span className="text-neutral-400 block mb-0.5">Mode</span>
                    <span className="font-semibold text-neutral-800">Hyderabad & Live Online</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block mb-0.5">Batches</span>
                    <span className="font-semibold text-neutral-800">Evening & Weekends</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block mb-0.5">Certificate</span>
                    <span className="font-semibold text-neutral-800">Yes, on Capstone</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Syllabus Modules */}
            <section id="syllabus" className="scroll-mt-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-2xl font-bold text-neutral-900">Curriculum & Modules</h2>
                <span className="text-xs text-neutral-500 font-medium">{course.modules.length} Modules</span>
              </div>
              <div className="space-y-3">
                {course.modules.map((mod, idx) => (
                  <details
                    key={mod.title}
                    className="module card p-5 group open:shadow-sm"
                    open={idx === 0}
                  >
                    <summary className="flex items-center justify-between font-semibold text-neutral-900 cursor-pointer text-sm md:text-base select-none">
                      <span className="flex items-center gap-3">
                        <span className="grid h-6 w-6 place-items-center rounded bg-neutral-100 text-xs font-bold text-neutral-700">
                          {idx + 1}
                        </span>
                        {mod.title}
                      </span>
                      <span className="mod-plus text-neutral-400 text-lg leading-none">+</span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-neutral-100 pl-9">
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-600">
                        {mod.topics.map((t) => (
                          <li key={t} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Projects Built */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FolderCheck size={20} className="text-neutral-800" />
                <h2 className="font-serif text-2xl font-bold text-neutral-900">Portfolio Projects You Will Build</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {course.projects.map((proj, i) => (
                  <div key={proj} className="card p-5 flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-neutral-900 text-white text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">{proj}</h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        Production-ready repo, reviewed by senior mentors for placement readiness.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Outcomes */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={20} className="text-neutral-800" />
                <h2 className="font-serif text-2xl font-bold text-neutral-900">Target Roles & Career Outcomes</h2>
              </div>
              <div className="card p-6">
                <p className="text-xs text-neutral-500 mb-4">
                  Graduates of this course are prepared to apply and interview for the following job profiles:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.outcomes.map((role) => (
                    <div key={role} className="flex items-center gap-2.5 text-xs md:text-sm font-medium text-neutral-800">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Action Box */}
            <div className="card p-6 sticky top-20">
              <span className="pill mb-3 inline-block">Enrollment Open</span>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Join the upcoming batch</h3>
              <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                Limited seats per cohort to maintain 1:1 mentor code reviews and doubt-clearing sessions.
              </p>

              <div className="my-5 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Course Fee</div>
                <div className="font-serif text-3xl font-bold text-neutral-900 mt-1">₹14,999</div>
                <div className="text-[11px] text-neutral-500 mt-1">Or included in Career Bundle (₹34,999)</div>
              </div>

              <Link href="/contact" className="btn btn-dark w-full justify-center py-3 text-sm">
                Apply for Course <ArrowUpRight size={15} />
              </Link>
              <Link href="/contact" className="btn btn-light w-full justify-center py-2.5 text-xs mt-2">
                Book Free Demo Session
              </Link>

              {/* Tools list */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 mb-3">
                  <Wrench size={14} /> Tools & Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perks */}
              <div className="mt-6 pt-6 border-t border-neutral-100 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-neutral-800" />
                  <span>Verified Completion Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-neutral-800" />
                  <span>Resume Review & Mock Interviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-neutral-800" />
                  <span>40+ Hiring Partner Referrals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
