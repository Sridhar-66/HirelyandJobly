import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Nav, Footer } from "@/components/Sections";
import { courses } from "@/data/content";

export const metadata: Metadata = {
  title: "All Courses | Hirely and Jobly",
  description: "Explore industry-ready tech courses in AI/ML, DSA, UI/UX, Cybersecurity, AR/VR, Game Design, and Full-Stack Web Development.",
};

export default function CoursesPage() {
  return (
    <>
      <Nav activePath="/courses" />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to home
          </Link>
          <span className="pill mb-3 inline-block">Course Catalog</span>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-neutral-900">
            Courses built for your career
          </h1>
          <p className="mt-3 max-w-xl text-sm text-neutral-600">
            Seven practical, outcome-driven tech tracks built specifically for engineering and B.Tech students. Master in-demand tools, build capstones, and prepare for real hiring loops.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {courses.map((c) => (
            <Link
              key={c.slug}
              href={`/courses/${c.slug}`}
              className="card course-card group block p-3 transition-all"
            >
              <div
                className={`relative flex h-64 items-end rounded-xl overflow-hidden p-6 bg-gradient-to-br ${c.cover} ${
                  c.dark ? "text-white" : "text-neutral-900"
                }`}
              >
                {/* Real course image with gradient overlay */}
                <Image
                  src={`/images/courses/${c.slug}.jpg`}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.dark ? "from-black/70 via-black/20" : "from-black/50 via-black/10"} to-transparent`} />
                <div className="relative z-10">
                  <span className={`inline-block rounded-md bg-white/20 backdrop-blur px-2.5 py-1 text-[11px] font-medium tracking-wide mb-3 ${c.dark ? "text-white" : "text-white"}`}>
                    {c.meta}
                  </span>
                  <div className={`font-serif text-2xl md:text-3xl leading-snug text-white`}>
                    {c.name}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-4">
                <span className="text-sm font-semibold text-neutral-800">View syllabus & curriculum</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Counselling CTA */}
        <div className="mt-16 rounded-2xl bg-neutral-900 text-white overflow-hidden flex flex-col md:flex-row items-stretch shadow-xl">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300 mb-3 w-fit">
              Need guidance?
            </span>
            <h2 className="font-serif text-2xl md:text-3xl">Not sure which track matches your goals?</h2>
            <p className="mt-2 text-sm text-neutral-300">
              Speak with our senior academic counsellor in Hyderabad. We review your background, career interests, and recommend the best roadmap.
            </p>
            <Link href="/contact" className="btn bg-white text-black hover:bg-neutral-100 mt-6 w-fit text-sm py-3 px-6">
              Book Free Demo Class <ArrowUpRight size={15} />
            </Link>
          </div>
          {/* Counsellor photo */}
          <div className="relative hidden md:block w-64 shrink-0">
            <Image
              src="/images/counsellor.jpg"
              alt="Academic counsellor at Hirely & Jobly"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
