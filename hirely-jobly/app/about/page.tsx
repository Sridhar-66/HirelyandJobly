import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Target, MapPin, Sparkles, Award, ShieldCheck, Users } from "lucide-react";
import { Nav, Footer, Pill } from "@/components/Sections";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us | Hirely and Jobly",
  description: "Learn about Hirely and Jobly — our mission to bridge the gap between engineering college curriculum and modern tech industry demands in Bangalore.",
};

export default function AboutPage() {
  return (
    <>
      <Nav activePath="/about" />
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft size={14} strokeWidth={2} /> Back to home
        </Link>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white px-6 py-12 md:px-12 md:py-16 mb-16 shadow-xl">
          <div className="blob blob-blue -top-20 -right-20 h-96 w-96 opacity-30" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="pill mb-4 inline-flex bg-blue-500/20 text-blue-300 border-blue-400/30">
              Our Mission &amp; Purpose
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Transforming college potential into <span className="gradient-text">high-growth tech careers</span>.
            </h1>
            <p className="mt-5 text-sm md:text-base text-slate-300 leading-relaxed">
              Based in {site.city}, Hirely and Jobly was founded with a clear vision: to empower engineering and B.Tech students with hands-on skills, active mentorship from practicing engineers, and direct placement support to top technology companies.
            </p>
          </div>

          <div className="absolute inset-y-0 right-0 hidden w-[40%] md:block overflow-hidden rounded-r-3xl opacity-70" aria-hidden="true">
            <Image
              src="/images/heroes/about_heroImg1.webp"
              alt="Hirely and Jobly training center"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
          </div>
        </div>

        {/* The Problem & Our Solution */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-8 flex flex-col justify-between">
              <div>
                <span className="pill mb-3 inline-block">The Academic Gap</span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Engineering syllabi take years to update. Tech hiring moves in weeks.
                </h2>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Thousands of ambitious students across Karnataka graduate with theoretical knowledge, but struggle in technical rounds due to a lack of live system building, git collaboration, and modern framework experience.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 font-medium">
                <Target size={16} className="text-blue-600" />
                <span>100% focused on outcome-driven, production-grade engineering</span>
              </div>
            </div>

            <div className="card-feature p-8 flex flex-col justify-between">
              <div>
                <span className="pill mb-3 inline-block bg-blue-50 text-blue-700 border-blue-200">
                  Our Methodology
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Hands-on code sprints, 1-on-1 code reviews, and mock hiring loops.
                </h2>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  We reject passive lectures. Every concept is learned by writing real code, building capstone systems, deploying to production cloud infrastructure, and undergoing rigorous FAANG-style mock interviews.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-700 font-medium">
                <Sparkles size={16} className="text-amber-500" />
                <span>8 dedicated career tracks with hybrid Bangalore lab access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-16">
          <div className="card p-8 md:p-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <Pill>Our Impact in Numbers</Pill>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                Proven track record across Bangalore &amp; Karnataka
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600">5,000+</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Students Trained</div>
                <div className="text-[11px] text-slate-500">Across 30+ colleges</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600">92%</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Placement Rate</div>
                <div className="text-[11px] text-slate-500">Within 90 days</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600">40+</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Hiring Partners</div>
                <div className="text-[11px] text-slate-500">MNCs &amp; Startups</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600">4.9/5</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Student Rating</div>
                <div className="text-[11px] text-slate-500">Verified reviews</div>
              </div>
            </div>
          </div>
        </section>
        {/* Certificate Showcase */}
        <section className="mb-16">
          <div className="card overflow-hidden p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Pill>Industry-Recognized Certificate</Pill>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                  Earn a certificate that opens doors at top companies
                </h2>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Upon completing your capstone project, you receive a verified digital certificate with a unique validation link — recognized by our 40+ hiring partners across India.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                    <ShieldCheck size={14} className="text-blue-600" /> Blockchain-Verified
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                    <Award size={14} className="text-amber-500" /> Industry Recognized
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                    <Users size={14} className="text-emerald-600" /> Shared with Recruiters
                  </div>
                </div>
              </div>
              <div className="relative h-56 md:h-64 overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-slate-50">
                <Image
                  src="/images/certificates/new_certificate_transformer.webp"
                  alt="Hirely and Jobly completion certificate"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
