"use client";

import React from "react";

export interface CompanyPartner {
  name: string;
  logo: React.ReactNode;
}

export const companyPartners: CompanyPartner[] = [
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <div className="bg-[#f25022] rounded-[1px] w-1.5 h-1.5" />
          <div className="bg-[#7fba00] rounded-[1px] w-1.5 h-1.5" />
          <div className="bg-[#00a4ef] rounded-[1px] w-1.5 h-1.5" />
          <div className="bg-[#ffb900] rounded-[1px] w-1.5 h-1.5" />
        </div>
        <span className="font-bold text-slate-800 text-sm tracking-tight">Microsoft</span>
      </div>
    ),
  },
  {
    name: "Google",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
        <span className="font-bold text-slate-800 text-sm tracking-tight">Google</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-black text-slate-900 text-sm tracking-tighter">amazon</span>
        <svg className="w-3.5 h-2 text-[#ff9900]" viewBox="0 0 32 14" fill="currentColor">
          <path d="M1 8c8 6 18 6 26 0 1-.8 2 .3 1.2 1.1-9 8.8-21 8.8-30 0-.6-.6-.1-1.6.8-1.1z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Swiggy",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded-full bg-[#fc8019] flex items-center justify-center text-white font-black text-[10px]">
          S
        </div>
        <span className="font-bold text-[#fc8019] text-xs tracking-tight">SWIGGY</span>
      </div>
    ),
  },
  {
    name: "Zomato",
    logo: (
      <div className="flex items-center">
        <span className="font-black italic text-[#cb202d] text-base tracking-tighter">zomato</span>
      </div>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 text-[#0c2340]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2h10l-4 9h6L6 22l3-9H4z" fill="#0c2340" />
          <path d="M9 11l5-9h-4l-4 9h3z" fill="#3395ff" />
        </svg>
        <span className="font-bold text-[#0c2340] text-sm">Razorpay</span>
      </div>
    ),
  },
  {
    name: "Flipkart",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded bg-[#2874f0] flex items-center justify-center text-[#ffe500] font-black text-[11px] italic">
          f
        </div>
        <span className="font-bold text-[#2874f0] text-sm italic">Flipkart</span>
      </div>
    ),
  },
  {
    name: "PhonePe",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded-full bg-[#6739b7] flex items-center justify-center text-white font-bold text-[10px]">
          पे
        </div>
        <span className="font-bold text-[#6739b7] text-sm">PhonePe</span>
      </div>
    ),
  },
  {
    name: "Deloitte",
    logo: (
      <div className="flex items-baseline">
        <span className="font-bold text-slate-900 text-sm tracking-tight">Deloitte</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#86bc25] inline-block ml-0.5" />
      </div>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-3.5 text-[#00a1e0]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
        <span className="font-bold text-[#00a1e0] text-sm">salesforce</span>
      </div>
    ),
  },
  {
    name: "Uber",
    logo: (
      <div className="flex items-center">
        <span className="font-black text-slate-900 text-sm tracking-tight">Uber</span>
      </div>
    ),
  },
  {
    name: "CRED",
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-black tracking-widest text-slate-900 text-[11px] border border-slate-900 px-1.5 py-0.5 rounded">
          CRED
        </span>
      </div>
    ),
  },
  {
    name: "TCS",
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-extrabold text-[#00529b] text-sm tracking-tight">TCS</span>
        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-tighter hidden sm:inline">Tata</span>
      </div>
    ),
  },
  {
    name: "Infosys",
    logo: (
      <div className="flex items-center">
        <span className="font-bold text-[#007cc3] text-sm tracking-tight">Infosys</span>
      </div>
    ),
  },
  {
    name: "Cognizant",
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-bold text-[#0033a0] text-sm">cognizant</span>
      </div>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 bg-[#fa0f00] flex items-center justify-center text-white font-black text-[10px] rounded-[2px]">
          A
        </div>
        <span className="font-bold text-[#fa0f00] text-sm tracking-tight">Adobe</span>
      </div>
    ),
  },
];

export const PartnerLogosMarquee = () => {
  return (
    <div className="mt-6 overflow-hidden py-3" aria-label="Alumni hiring partners logos">
      <div className="marquee flex items-center">
        {[...companyPartners, ...companyPartners].map((partner, i) => (
          <div
            key={i}
            className="mx-3.5 flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
          >
            {partner.logo}
          </div>
        ))}
      </div>
    </div>
  );
};
