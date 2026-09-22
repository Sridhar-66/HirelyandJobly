import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Target, MapPin, Sparkles } from "lucide-react";
import { Nav, Footer } from "@/components/Sections";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us | Hirely and Jobly",
  description: "Learn about Hirely and Jobly — our mission to bridge the gap between engineering college curriculum and tech industry demands in Hyderabad.",
};

export default function AboutPage() {
  return (
    <>
      <Nav activePath="/about" />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#e9e9ec] px-6 py-14 md:px-12 md:py-20 mb-16">
          <div className="relative z-10 max-w-2xl">
            <span className="pill mb-4 inline-block">Our Story & Mission</span>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight font-bold text-neutral-900">
              Transforming college potential into real-world engineering careers.
            </h1>
            <p className="mt-5 text-sm md:text-base text-neutral-600 leading-relaxed">
              Based in {site.city}, Hirely and Jobly was founded with a singular purpose: to give B.Tech students the exact skills, mentor guidance, and portfolio projects that modern tech companies look for during hiring.
            </p>
          </div>
          {/* Classroom photo on the right */}
          <div className="absolute inset-y-0 right-0 hidden w-[42%] md:block overflow-hidden" aria-hidden="true">
            <Image
              src="/images/about-classroom.jpg"
              alt="Classroom at Hirely and Jobly training centre"
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e9e9ec] via-[#e9e9ec]/30 to-transparent w-2/5" />
          </div>
        </div>

        {/* The Problem & Our Approach */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-8 flex flex-col justify-between">
              <div>
                <span className="pill mb-3 inline-block">The Challenge</span>
                <h2 className="font-serif text-2xl font-bold text-neutral-900">
                  Engineering syllabi move in years. The tech industry moves in weeks.
                </h2>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  Thousands of ambitious students in Telangana graduate with theoretical knowledge of computer science, but struggle in technical interviews because they lack hands-on experience with modern tools, architecture patterns, and real-world collaboration workflows.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-3 text-xs text-neutral-500">
                <Target size={16} className="text-neutral-800" />
                <span>Focused exclusively on real outcomes and placement readiness</span>
              </div>
            </div>

            <div className="dark-card p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-neutral-200 mb-3">
                  Our Philosophy
                </span>
                <h2 className="font-serif text-2xl font-bold text-white">
                  Practical code, active mentorship, and interview-ready portfolios.
                </h2>
                <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                  We reject boring slide decks and passive video lectures. Every concept is accompanied by code exercises, live code reviews, and industry-standard best practices taught directly by practicing engineers.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-neutral-300">
                <Sparkles size={16} className="text-lime-400" />
                <span>7 dedicated tracks with weekend and evening flexibility</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-16">
          <div className="card p-8 md:p-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="pill mb-2 inline-block">By the Numbers</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">Proven track record in Telangana</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold text-neutral-900">5000+</div>
                <div className="text-xs text-neutral-500 mt-1">Students Trained</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold text-neutral-900">92%</div>
                <div className="text-xs text-neutral-500 mt-1">Placement Ready</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold text-neutral-900">40+</div>
                <div className="text-xs text-neutral-500 mt-1">Hiring Partners</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold text-neutral-900">4.9/5</div>
                <div className="text-xs text-neutral-500 mt-1">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="mb-16">
          {/* Mentor session photo */}
          <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-8">
            <Image
              src="/images/about-mentor-session.jpg"
              alt="Mentor and student working together at Hirely & Jobly"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-5 left-6 text-white">
              <span className="pill mb-2 inline-block bg-white/20 text-white border-white/20">Core Pillars</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold">How we deliver on our promise</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100 text-neutral-800 font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold text-base text-neutral-900">Local Mentors, Global Standards</h3>
              <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                Mentors are seasoned practitioners from Hyderabad tech hubs (HITEC City, Gachibowli, Financial District) who understand both international standards and local recruitment trends.
              </p>
            </div>
            <div className="card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100 text-neutral-800 font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold text-base text-neutral-900">Hybrid Learning Flexibility</h3>
              <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                Attend offline lab sessions in Hyderabad or participate live online from your college hostel. Recorded backups and doubt-clearing sessions guarantee you never miss a beat.
              </p>
            </div>
            <div className="card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100 text-neutral-800 font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold text-base text-neutral-900">Placement Acceleration</h3>
              <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                Technical interview prep, behavioral questions, resume rewrites, and curated referrals to hiring partners ensure your applications don&apos;t get lost in ATS filters.
              </p>
            </div>
          </div>
        </section>

        {/* Location & Contact CTA */}
        <section className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              <MapPin size={15} /> Training Hub
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
              Visit our Hyderabad centre or join online
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-lg">
              Want to experience our classroom before committing? Book a free demo class and tour our lab in {site.city}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="btn btn-dark">
              Contact & Book Demo <ArrowUpRight size={14} />
            </Link>
            <Link href="/courses" className="btn btn-light">
              Explore Courses
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
