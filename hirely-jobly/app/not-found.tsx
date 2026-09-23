import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Hirely and Jobly",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg mb-6">
        <GraduationCap size={32} />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Error 404</p>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-sm md:text-base text-slate-600 max-w-sm leading-relaxed mb-8">
        Looks like this page took a wrong turn at Madhapur. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="btn btn-primary py-3 px-7 text-sm font-semibold"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>
        <Link
          href="/courses"
          className="btn btn-secondary py-3 px-6 text-sm"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
}
