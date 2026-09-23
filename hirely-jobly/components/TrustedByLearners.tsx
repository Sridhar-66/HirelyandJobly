"use client";

import React from "react";
import { motion } from "framer-motion";

interface ReviewPlatform {
  platform: string;
  rating: string;
  maxRating: string;
  logo: React.ReactNode;
  quote: string;
  author: string;
}

const reviewsData: ReviewPlatform[] = [
  {
    platform: "Trustpilot",
    rating: "4.6",
    maxRating: "/5",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <span className="font-bold text-slate-900 text-sm tracking-tight">Trustpilot</span>
      </div>
    ),
    quote:
      "After 3 years as an SDE, Hirely and Jobly helped me master DSA and System Design, leading to my Full Stack Java Developer role at Deloitte.",
    author: "Gauravi Joshi",
  },
  {
    platform: "Google",
    rating: "4.7",
    maxRating: "/5",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
        <span className="font-semibold text-slate-800 text-base tracking-tight">Google</span>
      </div>
    ),
    quote:
      "Hirely and Jobly's structured learning and mock interviews helped me gain confidence and secure multiple Data Engineering offers.",
    author: "Sanat Kumar Nambiar",
  },
  {
    platform: "reddit",
    rating: "4.5",
    maxRating: "/5",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-[#ff4500] flex items-center justify-center text-white">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5.6 11.2a1.6 1.6 0 0 1-.8 1.4 5.3 5.3 0 0 1-4.8 2.4 5.3 5.3 0 0 1-4.8-2.4 1.6 1.6 0 0 1-.8-1.4 1.6 1.6 0 0 1 2.7-1.1 7.3 7.3 0 0 1 3-1l.7-3.1 2.2.5a1.2 1.2 0 1 1 1.2 1.2 1.2 1.2 0 0 1-.7-.2l-1.9-.4-.5 2.3a7.4 7.4 0 0 1 3.1 1 1.6 1.6 0 0 1 1.6.3z" />
          </svg>
        </div>
        <span className="font-bold text-[#ff4500] text-base tracking-tight">reddit</span>
      </div>
    ),
    quote:
      "Hirely and Jobly's teaching and mentor support boosted my confidence in interviews. Their structured learning made my prep more effective.",
    author: "Manikandan",
  },
  {
    platform: "Course Report",
    rating: "4.5",
    maxRating: "/5",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded bg-[#00b074] flex items-center justify-center text-white">
          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        </div>
        <span className="font-bold text-slate-800 text-xs tracking-tight">Course Report</span>
      </div>
    ),
    quote:
      "Hirely and Jobly's Evolve program and mentorship boosted my interview confidence, helping me clear technical rounds and join Salesforce.",
    author: "Harsh Gupta",
  },
];

export const TrustedByLearners = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-2xl font-extrabold text-[#172554] sm:text-3xl tracking-tight mb-10">
            Trusted By Learners
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviewsData.map((rev, idx) => (
            <motion.div
              key={rev.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
                {/* Background Large Quote Mark */}
                <div
                  className="pointer-events-none absolute top-12 left-6 text-6xl font-serif font-black text-blue-100/60 select-none leading-none -z-0"
                  aria-hidden="true"
                >
                  “
                </div>

                {/* Card Header: Platform Logo & Rating */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-100">
                  {rev.logo}
                  <div className="text-sm font-bold text-slate-900">
                    {rev.rating}
                    <span className="text-xs font-medium text-slate-400">
                      {rev.maxRating}
                    </span>
                  </div>
                </div>

                {/* Review Quote Body */}
                <div className="relative z-10 my-4 flex-1">
                  <p className="text-xs leading-relaxed text-slate-600 font-normal">
                    {rev.quote}
                  </p>
                </div>

                {/* Author Name */}
                <div className="relative z-10 pt-3 border-t border-slate-100/80 text-center">
                  <div className="text-sm font-bold text-slate-900">
                    {rev.author}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
