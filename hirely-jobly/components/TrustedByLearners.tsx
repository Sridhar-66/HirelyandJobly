"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewPlatform {
  platform: string;
  rating: number;
  logo: React.ReactNode;
  quote: string;
  author: string;
  role: string;
}

const StarRating = ({ rating, color }: { rating: number; color: string }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={12}
        className={star <= Math.floor(rating) ? color : "text-slate-200"}
        fill={star <= Math.floor(rating) ? "currentColor" : "none"}
      />
    ))}
    <span className="ml-1 text-xs font-bold text-slate-700">{rating}/5</span>
  </div>
);

const reviewsData: ReviewPlatform[] = [
  {
    platform: "Trustpilot",
    rating: 4.6,
    logo: (
      <div className="flex items-center gap-2">
        {/* Trustpilot green star logo */}
        <div className="w-5 h-5 bg-[#00b67a] rounded flex items-center justify-center shrink-0">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
        <span className="font-bold text-slate-900 text-sm">Trustpilot</span>
      </div>
    ),
    quote:
      "After 3 years as an SDE, Hirely and Jobly helped me master DSA and System Design, leading to my Full Stack Java Developer role at Deloitte.",
    author: "Gauravi Joshi",
    role: "Full Stack Developer @ Deloitte",
  },
  {
    platform: "Google",
    rating: 4.7,
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
        <span className="font-semibold text-slate-800 text-sm">Google Reviews</span>
      </div>
    ),
    quote:
      "Hirely and Jobly's structured learning and mock interviews helped me gain confidence and secure multiple Data Engineering offers.",
    author: "Sanat Kumar Nambiar",
    role: "Data Engineer @ Wipro",
  },
  {
    platform: "Reddit",
    rating: 4.5,
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0">
          <circle cx="10" cy="10" r="10" fill="#FF4500"/>
          <path d="M16.3 10a1.5 1.5 0 0 0-2.5-.9 7.2 7.2 0 0 0-4-.9l.7-3.3 2.2.5a1 1 0 1 0 1-.9l-2.5-.5-.8 3.9a7.1 7.1 0 0 0-4 .9 1.5 1.5 0 1 0-1.6 2.4A2.3 2.3 0 0 0 4.8 12a5 5 0 0 0 5.2 2.4 5 5 0 0 0 5.2-2.4 2.3 2.3 0 0 0 .1-.5 1.5 1.5 0 0 0 1-1.5zm-11.2.5a.7.7 0 1 1 .7.7.7.7 0 0 1-.7-.7zm5.9 2.6a3.2 3.2 0 0 1-2-.5.2.2 0 0 1 .3-.3 2.8 2.8 0 0 0 1.7.4 2.8 2.8 0 0 0 1.7-.4.2.2 0 0 1 .3.3 3.2 3.2 0 0 1-2 .5zm.2-2a.7.7 0 1 1 .7.7.7.7 0 0 1-.7-.7z" fill="white"/>
        </svg>
        <span className="font-bold text-[#FF4500] text-sm">reddit</span>
      </div>
    ),
    quote:
      "Hirely and Jobly's teaching and mentor support boosted my confidence in interviews. Their structured learning made my prep more effective.",
    author: "Manikandan S.",
    role: "Software Engineer @ Zoho",
  },
  {
    platform: "Course Report",
    rating: 4.5,
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-[#00b074] flex items-center justify-center shrink-0">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        </div>
        <span className="font-bold text-slate-800 text-xs">Course Report</span>
      </div>
    ),
    quote:
      "Hirely and Jobly's Evolve program and mentorship boosted my interview confidence, helping me clear technical rounds and join Salesforce.",
    author: "Harsh Gupta",
    role: "Associate Engineer @ Salesforce",
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
          <h2 className="text-center text-2xl font-extrabold text-[#172554] sm:text-3xl tracking-tight mb-2">
            Trusted By Learners
          </h2>
          <p className="text-center text-sm text-slate-500 mb-10">
            Real reviews from real students across multiple platforms
          </p>
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
                  className="pointer-events-none absolute top-10 left-5 text-7xl font-serif font-black text-blue-50 select-none leading-none -z-0"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Card Header: Platform Logo & Star Rating */}
                <div className="relative z-10 flex flex-col gap-2 pb-4 border-b border-slate-100">
                  {rev.logo}
                  <StarRating
                    rating={rev.rating}
                    color={
                      rev.platform === "Trustpilot"
                        ? "text-[#00b67a]"
                        : rev.platform === "Reddit"
                        ? "text-[#FF4500]"
                        : "text-amber-400"
                    }
                  />
                </div>

                {/* Review Quote Body */}
                <div className="relative z-10 my-4 flex-1">
                  <p className="text-xs leading-relaxed text-slate-600 font-normal italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Author Name & Role */}
                <div className="relative z-10 pt-3 border-t border-slate-100/80">
                  <div className="text-sm font-bold text-slate-900">{rev.author}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


