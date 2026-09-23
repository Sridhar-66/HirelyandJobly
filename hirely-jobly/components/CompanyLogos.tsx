"use client";

import React from "react";
import {
  SiZomato,
  SiSwiggy,
  SiRazorpay,
  SiPhonepe,
  SiTata,
  SiInfosys,
  SiUber,
} from "react-icons/si";
import {
  FaMicrosoft,
  FaAmazon,
  FaGoogle,
  FaSalesforce,
} from "react-icons/fa6";

export interface CompanyPartner {
  name: string;
  logo: React.ReactNode;
}

export const companyPartners: CompanyPartner[] = [
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <FaMicrosoft className="text-[#00A4EF] text-lg shrink-0" />
        <span className="font-bold text-slate-800 text-sm tracking-tight">Microsoft</span>
      </div>
    ),
  },
  {
    name: "Google",
    logo: (
      <div className="flex items-center gap-2">
        <FaGoogle className="text-[#4285F4] text-lg shrink-0" />
        <span className="font-bold text-slate-800 text-sm tracking-tight">Google</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex items-center gap-1.5">
        <FaAmazon className="text-[#FF9900] text-xl shrink-0" />
        <span className="font-extrabold text-slate-900 text-sm tracking-tight">amazon</span>
      </div>
    ),
  },
  {
    name: "Swiggy",
    logo: (
      <div className="flex items-center gap-2">
        <SiSwiggy className="text-[#FC8019] text-xl shrink-0" />
        <span className="font-extrabold text-[#FC8019] text-sm tracking-tight">Swiggy</span>
      </div>
    ),
  },
  {
    name: "Zomato",
    logo: (
      <div className="flex items-center gap-2">
        <SiZomato className="text-[#E23744] text-2xl shrink-0" />
        <span className="font-black italic text-[#E23744] text-base tracking-tight">zomato</span>
      </div>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <div className="flex items-center gap-2">
        <SiRazorpay className="text-[#0284C7] text-xl shrink-0" />
        <span className="font-bold text-[#0C2340] text-sm tracking-tight">Razorpay</span>
      </div>
    ),
  },
  {
    name: "Flipkart",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-[#2874F0] flex items-center justify-center text-[#FFE500] font-black text-xs italic shadow-xs">
          f
        </div>
        <span className="font-bold text-[#2874F0] text-sm italic tracking-tight">Flipkart</span>
      </div>
    ),
  },
  {
    name: "PhonePe",
    logo: (
      <div className="flex items-center gap-2">
        <SiPhonepe className="text-[#5F259F] text-xl shrink-0" />
        <span className="font-bold text-[#5F259F] text-sm tracking-tight">PhonePe</span>
      </div>
    ),
  },
  {
    name: "CRED",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-slate-900 flex items-center justify-center">
          <span className="text-white font-black text-[11px] leading-none">C</span>
        </div>
        <span className="font-black text-slate-900 text-xs tracking-[0.18em]">CRED</span>
      </div>
    ),
  },
  {
    name: "TCS",
    logo: (
      <div className="flex items-center gap-2">
        <SiTata className="text-[#00529B] text-xl shrink-0" />
        <span className="font-extrabold text-[#00529B] text-sm tracking-tight">TCS</span>
      </div>
    ),
  },
  {
    name: "Infosys",
    logo: (
      <div className="flex items-center gap-2">
        <SiInfosys className="text-[#007CC3] text-xl shrink-0" />
        <span className="font-bold text-[#007CC3] text-sm tracking-tight">Infosys</span>
      </div>
    ),
  },
  {
    name: "Deloitte",
    logo: (
      <div className="flex items-baseline gap-0.5">
        <span className="font-extrabold text-slate-900 text-sm tracking-tight">Deloitte</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#86BC25] mb-0.5" />
      </div>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 35" className="w-5 h-4 shrink-0">
          <path d="M0 0h17l23 35H23L0 0z" fill="#FA0F00" />
          <path d="M40 0H23L0 35h17L40 0z" fill="#FA0F00" />
          <path d="M13 24h14l3 11H10l3-11z" fill="#FA0F00" />
        </svg>
        <span className="font-bold text-[#FA0F00] text-sm tracking-tight">Adobe</span>
      </div>
    ),
  },
  {
    name: "Uber",
    logo: (
      <div className="flex items-center gap-2">
        <SiUber className="text-slate-900 text-xl shrink-0" />
        <span className="font-extrabold text-slate-900 text-sm tracking-tight">Uber</span>
      </div>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <div className="flex items-center gap-2">
        <FaSalesforce className="text-[#00A1E0] text-xl shrink-0" />
        <span className="font-bold text-[#00A1E0] text-sm tracking-tight">Salesforce</span>
      </div>
    ),
  },
  {
    name: "Cognizant",
    logo: (
      <div className="flex items-center gap-2">
        <div className="relative w-4 h-4 rounded-full border-2 border-[#0033A0] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00A9E0]" />
        </div>
        <span className="font-bold text-[#0033A0] text-sm tracking-tight">Cognizant</span>
      </div>
    ),
  },
];

// Backer logos for footer
export const BackerLogos = () => (
  <div className="flex flex-wrap items-center gap-4">
    <div className="flex items-center gap-2.5 opacity-85 hover:opacity-100 transition-opacity">
      <div className="w-7 h-7 bg-[#002B7F] rounded-lg flex items-center justify-center shrink-0 shadow-xs">
        <span className="text-white text-[9px] font-black tracking-tighter leading-none">IIT</span>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Incubated at</div>
        <div className="text-slate-200 text-xs font-bold">IIT Delhi</div>
      </div>
    </div>
    <div className="flex items-center gap-2.5 opacity-85 hover:opacity-100 transition-opacity">
      <div className="w-7 h-7 bg-[#E21B23] rounded-lg flex items-center justify-center shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
          <path d="M12 2L3 20h4.5l2-4.5h5l2 4.5H21L12 2zm0 6.5l1.6 3.5h-3.2L12 8.5z" />
        </svg>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Backed by</div>
        <div className="text-slate-200 text-xs font-bold">Antler India</div>
      </div>
    </div>
    <div className="flex items-center gap-2.5 opacity-85 hover:opacity-100 transition-opacity">
      <div className="w-7 h-7 bg-[#CC0000] rounded-lg flex items-center justify-center shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
          <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" />
        </svg>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Hiring Partner</div>
        <div className="text-slate-200 text-xs font-bold">Tech Mahindra</div>
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
            className="mx-3 flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/95 px-5 py-3 shadow-xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md shrink-0"
            style={{ minWidth: "155px", height: "54px" }}
          >
            {partner.logo}
          </div>
        ))}
      </div>
    </div>
  );
};
