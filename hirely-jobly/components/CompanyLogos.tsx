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
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 21 21">
          <rect x="0" y="0" width="10" height="10" fill="#F25022" />
          <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
          <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
          <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
        </svg>
        <span className="font-semibold text-[#737373] text-[15px] tracking-tight font-sans">
          Microsoft
        </span>
      </div>
    ),
  },
  {
    name: "Google",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="h-5 w-auto" viewBox="0 0 74 24" fill="none">
          <path fill="#4285F4" d="M9.24 10.43v3.42h5.5c-.24 1.34-1.57 3.93-5.5 3.93-3.32 0-6.03-2.74-6.03-6.13s2.71-6.13 6.03-6.13c1.89 0 3.16.81 3.88 1.51l2.7-2.62C14.09 2.76 11.88 1.75 9.24 1.75 4.14 1.75 0 5.89 0 11s4.14 9.25 9.24 9.25c4.79 0 8.8-3.36 8.8-9.07 0-.61-.07-1.07-.15-1.53H9.24v-.22z"/>
          <path fill="#EA4335" d="M24.5 11.4c0-3.15-2.45-5.4-5.35-5.4s-5.35 2.25-5.35 5.4c0 3.1 2.45 5.4 5.35 5.4s5.35-2.3 5.35-5.4zm-2.4 0c0 2.05-1.4 3.4-2.95 3.4-1.55 0-2.95-1.35-2.95-3.4 0-2.1 1.4-3.4 2.95-3.4 1.55 0 2.95 1.3 2.95 3.4z"/>
          <path fill="#FBBC05" d="M36.3 11.4c0-3.15-2.45-5.4-5.35-5.4s-5.35 2.25-5.35 5.4c0 3.1 2.45 5.4 5.35 5.4s5.35-2.3 5.35-5.4zm-2.4 0c0 2.05-1.4 3.4-2.95 3.4-1.55 0-2.95-1.35-2.95-3.4 0-2.1 1.4-3.4 2.95-3.4 1.55 0 2.95 1.3 2.95 3.4z"/>
          <path fill="#4285F4" d="M47.7 6.3h-2.3v1.3h-.1c-.5-.6-1.5-1.3-2.9-1.3-2.9 0-5.3 2.4-5.3 5.4s2.4 5.4 5.3 5.4c1.4 0 2.4-.7 2.9-1.3h.1v.8c0 2-.9 3.1-2.9 3.1-1.6 0-2.6-1.1-3-2.1l-2.1.9c.6 1.5 2.2 3.2 5.1 3.2 3 0 5.4-1.8 5.4-5.6V6.3zm-4.9 8.5c-1.5 0-2.9-1.3-2.9-3.4s1.4-3.4 2.9-3.4c1.5 0 2.8 1.3 2.8 3.4s-1.3 3.4-2.8 3.4z"/>
          <path fill="#34A853" d="M51.5 1.8h-2.4v18.4h2.4V1.8z"/>
          <path fill="#EA4335" d="M60.2 14.8l1.9 1.3c-.6.9-2.1 2.7-4.8 2.7-3.3 0-5.2-2.5-5.2-5.4 0-3.3 2.3-5.4 5-5.4 3.1 0 4.2 2.3 4.5 3.5l.3.8-7.2 3c.6 1.1 1.5 1.7 2.7 1.7 1.2 0 2-.6 2.8-1.2v-1zm-5.7-3.6l4.8-2c-.3-.5-.9-1.1-1.8-1.1-1.2 0-2.4 1.1-3 3.1z"/>
        </svg>
      </div>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex flex-col items-center">
        <svg className="h-5 w-auto" viewBox="0 0 90 28" fill="none">
          <text x="0" y="17" fill="#111827" fontWeight="900" fontSize="19" fontFamily="Arial, sans-serif" letterSpacing="-0.8px">
            amazon
          </text>
          <path d="M4 22 C 24 30, 68 30, 84 21" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none" />
          <polygon points="80,18 88,21 82,26" fill="#FF9900" />
        </svg>
      </div>
    ),
  },
  {
    name: "Swiggy",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 32 32" className="w-5 h-5 shrink-0">
          <rect width="32" height="32" rx="8" fill="#FC8019" />
          <path d="M16 6.5C11.3 6.5 7.5 10.3 7.5 15c0 3.2 1.8 6 4.4 7.4l1.2-1.9c-2-1.2-3.4-3.4-3.4-5.5 0-3.7 3-6.8 6.8-6.8 1.8 0 3.4.7 4.7 1.8l1.4-1.7C20.8 7.1 18.5 6.5 16 6.5z" fill="white" />
          <path d="M21.5 14h-3.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1.2c.4 0 .8.4.8.8 0 .4-.4.8-.8.8H16v2.2h2.9c1.6 0 3-1.3 3-3s-1.4-2.8-3-2.8h-1.4c-.4 0-.8-.3-.8-.7 0-.4.3-.7.8-.7h4V14z" fill="white" />
        </svg>
        <span className="font-extrabold text-[#FC8019] text-[15px] tracking-tight">
          SWIGGY
        </span>
      </div>
    ),
  },
  {
    name: "Zomato",
    logo: (
      <div className="flex items-center">
        <span className="font-black italic text-[#E23744] text-xl tracking-tighter" style={{ fontFamily: "Arial, sans-serif" }}>
          zomato
        </span>
      </div>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 36 36" className="w-5 h-5 shrink-0">
          <path d="M18 2L6 19h10l-4 15L32 15h-11z" fill="#0C2340" />
          <path d="M18 2L6 19h10l-4 15 10-11z" fill="#0284C7" />
        </svg>
        <span className="font-extrabold text-[#0C2340] text-[15px] tracking-tight">
          Razorpay
        </span>
      </div>
    ),
  },
  {
    name: "Flipkart",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-[#2874F0] flex items-center justify-center text-[#FFE500] font-black text-xs italic shadow-xs">
          f
        </div>
        <span className="font-bold italic text-[#2874F0] text-[15px] tracking-tight">
          Flipkart
        </span>
      </div>
    ),
  },
  {
    name: "PhonePe",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-[#5F259F] flex items-center justify-center text-white font-black text-xs">
          पे
        </div>
        <span className="font-bold text-[#5F259F] text-[15px] tracking-tight">
          PhonePe
        </span>
      </div>
    ),
  },
  {
    name: "CRED",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-slate-950 flex items-center justify-center">
          <span className="text-white font-black text-[11px] leading-none">C</span>
        </div>
        <span className="font-black text-slate-950 text-xs tracking-[0.22em]">
          CRED
        </span>
      </div>
    ),
  },
  {
    name: "TCS",
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-extrabold text-[#00529B] text-lg tracking-tighter">
          TCS
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#E31937] mb-2" />
      </div>
    ),
  },
  {
    name: "Infosys",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
          <circle cx="4" cy="12" r="3.5" fill="#007CC3" />
          <circle cx="12" cy="12" r="3.5" fill="#007CC3" opacity="0.6" />
          <circle cx="20" cy="12" r="3.5" fill="#007CC3" opacity="0.3" />
        </svg>
        <span className="font-bold text-[#007CC3] text-[15px] tracking-tight">
          Infosys
        </span>
      </div>
    ),
  },
  {
    name: "Deloitte",
    logo: (
      <div className="flex items-baseline gap-0.5">
        <span className="font-extrabold text-slate-950 text-[15px] tracking-tight">
          Deloitte
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#86BC25] mb-0.5" />
      </div>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 40 35" className="w-5 h-4 shrink-0">
          <path d="M0 0h17l23 35H23L0 0z" fill="#FA0F00" />
          <path d="M40 0H23L0 35h17L40 0z" fill="#FA0F00" />
          <path d="M13 24h14l3 11H10l3-11z" fill="#FA0F00" />
        </svg>
        <span className="font-bold text-[#FA0F00] text-[15px] tracking-tight">
          Adobe
        </span>
      </div>
    ),
  },
  {
    name: "Uber",
    logo: (
      <div className="flex items-center">
        <span className="font-black text-slate-950 text-base tracking-tight font-sans">
          Uber
        </span>
      </div>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 32 24" className="w-6 h-4 shrink-0">
          <path fill="#00A1E0" d="M12.5 4c2.8 0 5.2 1.6 6.3 4 1-.6 2.2-1 3.5-1 3.7 0 6.7 3 6.7 6.7 0 .4 0 .8-.1 1.2 1.8.8 3.1 2.6 3.1 4.7 0 2.9-2.3 5.2-5.2 5.2H6C2.7 24.8 0 22.1 0 18.8c0-2.8 1.9-5.1 4.5-5.7C4.7 12.5 5 11.9 5.5 11.3 7 7 10.9 4 12.5 4z" />
        </svg>
        <span className="font-bold text-[#00A1E0] text-[14px] tracking-tight">
          salesforce
        </span>
      </div>
    ),
  },
  {
    name: "Cognizant",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
          <circle cx="12" cy="12" r="10" stroke="#0033A0" strokeWidth="2.5" fill="none" />
          <path d="M12 4a8 8 0 0 1 8 8" stroke="#00A9E0" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
        <span className="font-bold text-[#0033A0] text-[14px] tracking-tight">
          cognizant
        </span>
      </div>
    ),
  },
];

// Backer logos for footer
export const BackerLogos = () => (
  <div className="flex flex-wrap items-center gap-5">
    {/* IIT Delhi */}
    <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="w-8 h-8 rounded-lg bg-[#002B7F] flex items-center justify-center p-1 shrink-0 shadow-xs border border-blue-400/20">
        <svg viewBox="0 0 36 36" className="w-6 h-6 text-white fill-current">
          <circle cx="18" cy="18" r="16" fill="none" stroke="white" strokeWidth="2" />
          <path d="M18 5L22 13H14L18 5z" fill="#FBBF24" />
          <circle cx="18" cy="20" r="5" fill="none" stroke="white" strokeWidth="1.5" />
          <line x1="18" y1="13" x2="18" y2="27" stroke="white" strokeWidth="1.5" />
          <line x1="11" y1="20" x2="25" y2="20" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Incubated at</div>
        <div className="text-white text-xs font-bold">IIT Delhi</div>
      </div>
    </div>

    {/* Antler India */}
    <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="w-8 h-8 rounded-lg bg-[#121212] flex items-center justify-center p-1.5 shrink-0 shadow-xs border border-red-500/30">
        <svg viewBox="0 0 28 28" className="w-5 h-5">
          <path d="M14 2L2 24h6l6-12 6 12h6L14 2z" fill="#FF385C" />
          <path d="M14 11l3 6h-6l3-6z" fill="#121212" />
        </svg>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Backed by</div>
        <div className="text-white text-xs font-bold">Antler India</div>
      </div>
    </div>

    {/* Tech Mahindra */}
    <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center p-1 shrink-0 shadow-xs">
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <rect width="32" height="32" rx="6" fill="#E31837" />
          <path d="M8 10h16v3H8zM8 15h16v3H8zM8 20h10v3H8z" fill="white" />
        </svg>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Hiring Partner</div>
        <div className="text-white text-xs font-bold">Tech Mahindra</div>
      </div>
    </div>
  </div>
);

export const PartnerLogosMarquee = () => {
  return (
    <div className="mt-6 overflow-hidden py-3" aria-label="Alumni hiring partners logos">
      <div className="marquee flex items-center">
        {[...companyPartners, ...companyPartners].map((partner, i) => (
          <div
            key={i}
            className="mx-3.5 flex items-center justify-center rounded-xl border border-slate-200/90 bg-white px-5 py-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md shrink-0"
            style={{ minWidth: "155px", height: "54px" }}
          >
            {partner.logo}
          </div>
        ))}
      </div>
    </div>
  );
};
