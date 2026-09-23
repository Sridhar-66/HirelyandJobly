"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SiTrustpilot, SiReddit } from "react-icons/si";
import { FaGoogle } from "react-icons/fa6";

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
        size={13}
        strokeWidth={1.75}
        className={star <= Math.floor(rating) ? color : "text-slate-200"}
        fill={star <= Math.floor(rating) ? "currentColor" : "none"}
      />
    ))}
    <span className="ml-1.5 text-xs font-bold text-slate-700">{rating}/5</span>
  </div>
);

const reviewsData: ReviewPlatform[] = [
  {
    platform: "Trustpilot",
    rating: 4.6,
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-[#00b67a] rounded-md flex items-center justify-center shrink-0 shadow-xs">
          <SiTrustpilot className="text-white text-xs" />
        </div>
        <span className="font-bold text-slate-900 text-sm tracking-tight">Trustpilot</span>
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
      <div className="flex items-center gap-2">
        <FaGoogle className="text-[#4285F4] text-base shrink-0" />
        <span className="font-bold text-slate-900 text-sm tracking-tight">Google Reviews</span>
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
      <div className="flex items-center gap-2">
        <SiReddit className="text-[#FF4500] text-lg shrink-0" />
        <span className="font-bold text-[#FF4500] text-sm tracking-tight">reddit</span>
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
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-[#00b074] flex items-center justify-center shrink-0 shadow-xs">
          <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        </div>
        <span className="font-bold text-slate-900 text-xs tracking-tight">Course Report</span>
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
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
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
