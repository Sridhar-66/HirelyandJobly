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
        <span className="font-semibold text-[#737373] text-sm tracking-tight">Microsoft</span>
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
        <span className="font-bold text-[#5f6368] text-sm tracking-tight">Google</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex flex-col items-start" style={{lineHeight: 1}}>
        <span className="font-black text-slate-900 text-[15px]" style={{letterSpacing: "-0.5px", lineHeight: 1}}>amazon</span>
        <svg viewBox="0 0 120 22" className="w-12 h-2.5 mt-0.5">
          <path d="M4 11 C20 22, 90 22, 116 11" stroke="#FF9900" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <polygon points="110,5 120,11 110,17" fill="#FF9900"/>
        </svg>
      </div>
    ),
  },
  {
    name: "Swiggy",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 40 40" className="w-5 h-5 shrink-0">
          <circle cx="20" cy="20" r="20" fill="#FC8019"/>
          <path d="M20 8c-6.6 0-12 5.4-12 12 0 4 2 7.6 5 9.8l1.3-2.1C12.2 25.8 11 23 11 20c0-5 4-9 9-9 2.1 0 4 .7 5.5 1.9L23 15C21.9 14.4 21 14 20 14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6v-.5h-2V20c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.8 0 1.6.3 2.2.8L24 15.2C22.9 14.4 21.5 14 20 14V8z" fill="white"/>
        </svg>
        <span className="font-extrabold text-[#FC8019] text-sm">Swiggy</span>
      </div>
    ),
  },
  {
    name: "Zomato",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 40 40" className="w-5 h-5 shrink-0">
          <circle cx="20" cy="20" r="20" fill="#E23744"/>
          <text x="20" y="27" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="Arial, sans-serif">Z</text>
        </svg>
        <span className="font-black italic text-[#E23744] text-base" style={{letterSpacing: "-0.5px"}}>zomato</span>
      </div>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 32 32" className="w-5 h-5 shrink-0">
          <defs>
            <linearGradient id="rzp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#02A3FF"/>
              <stop offset="100%" stopColor="#0C2452"/>
            </linearGradient>
          </defs>
          <path d="M16 2L4 17h8l-3 13L28 14h-9z" fill="url(#rzp-grad)"/>
        </svg>
        <span className="font-bold text-[#0C2452] text-sm">Razorpay</span>
      </div>
    ),
  },
  {
    name: "Flipkart",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-[#2874F0] flex items-center justify-center text-[#FFE500] font-black text-sm italic">
          f
        </div>
        <span className="font-bold text-[#2874F0] text-sm italic">Flipkart</span>
      </div>
    ),
  },
  {
    name: "PhonePe",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 40 40" className="w-5 h-5 shrink-0">
          <circle cx="20" cy="20" r="20" fill="#5F259F"/>
          <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="900" fontFamily="Arial, sans-serif">Pe</text>
        </svg>
        <span className="font-bold text-[#5F259F] text-sm">PhonePe</span>
      </div>
    ),
  },
  {
    name: "CRED",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-[#1a1a1a] flex items-center justify-center">
          <span className="text-white font-black text-[11px]">C</span>
        </div>
        <span className="font-black text-slate-900 text-[11px]" style={{letterSpacing: "2px"}}>CRED</span>
      </div>
    ),
  },
  {
    name: "TCS",
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-extrabold text-[#00529B] text-base tracking-tight">TCS</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#E31937] mb-2.5" />
      </div>
    ),
  },
  {
    name: "Infosys",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
          <circle cx="4" cy="12" r="3.5" fill="#007CC3"/>
          <circle cx="12" cy="12" r="3.5" fill="#007CC3" opacity="0.6"/>
          <circle cx="20" cy="12" r="3.5" fill="#007CC3" opacity="0.3"/>
        </svg>
        <span className="font-bold text-[#007CC3] text-sm">Infosys</span>
      </div>
    ),
  },
  {
    name: "Deloitte",
    logo: (
      <div className="flex items-baseline gap-0.5">
        <span className="font-bold text-slate-900 text-sm tracking-tight">Deloitte</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#86BC25] mb-0.5" />
      </div>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 40 35" className="w-5 h-4 shrink-0">
          <path d="M0 0h17l23 35H23L0 0z" fill="#FA0F00"/>
          <path d="M40 0H23L0 35h17L40 0z" fill="#FA0F00"/>
          <path d="M13 24h14l3 11H10l3-11z" fill="#FA0F00"/>
        </svg>
        <span className="font-bold text-[#FA0F00] text-sm tracking-tight">Adobe</span>
      </div>
    ),
  },
  {
    name: "Uber",
    logo: (
      <div className="flex items-center">
        <span className="font-black text-slate-900 text-base tracking-tight">Uber</span>
      </div>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-5 h-4 shrink-0">
          <path fill="#00A1E0" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
        <span className="font-bold text-[#00A1E0] text-sm">salesforce</span>
      </div>
    ),
  },
  {
    name: "Cognizant",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
          <circle cx="12" cy="12" r="11" fill="#0033A0"/>
          <path d="M12 4a8 8 0 0 0 0 16 8 8 0 0 1-8-8 8 8 0 0 1 8-8z" fill="#00A9E0"/>
        </svg>
        <span className="font-bold text-[#0033A0] text-sm">cognizant</span>
      </div>
    ),
  },
];

// Backer logos for footer
export const BackerLogos = () => (
  <div className="flex flex-wrap items-center gap-4">
    <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
      <div style={{width: "30px", height: "30px", background: "#002B7F", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
        <span style={{color: "white", fontSize: "8px", fontWeight: 900, fontFamily: "Arial", letterSpacing: "-0.5px", textAlign: "center", lineHeight: 1.1}}>IIT{"\n"}DL</span>
      </div>
      <div>
        <div className="text-slate-500 text-[9px] font-semibold uppercase tracking-wider">Backed by</div>
        <div className="text-slate-300 text-[11px] font-bold">IIT Delhi</div>
      </div>
    </div>
    <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
      <div style={{width: "30px", height: "30px", background: "#FF3B30", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
        <svg viewBox="0 0 20 20" width="16" height="16" fill="white">
          <path d="M10 2L4 16h3l1.5-4h3L13 16h3L10 2zm-1 8l1-3 1 3H9z"/>
        </svg>
      </div>
      <div>
        <div className="text-slate-500 text-[9px] font-semibold uppercase tracking-wider">Backed by</div>
        <div className="text-slate-300 text-[11px] font-bold">Antler India</div>
      </div>
    </div>
    <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
      <div style={{width: "30px", height: "30px", background: "#CC0000", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
        <svg viewBox="0 0 20 20" width="16" height="16" fill="white">
          <polygon points="10,2 18,7 18,13 10,18 2,13 2,7"/>
        </svg>
      </div>
      <div>
        <div className="text-slate-500 text-[9px] font-semibold uppercase tracking-wider">Partner</div>
        <div className="text-slate-300 text-[11px] font-bold">Tech Mahindra</div>
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
            className="mx-3.5 flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/95 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            style={{minWidth: "150px", height: "54px"}}
          >
            {partner.logo}
          </div>
        ))}
      </div>
    </div>
  );
};
