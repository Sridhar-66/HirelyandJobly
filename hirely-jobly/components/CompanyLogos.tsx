"use client";

import React from "react";
import {
  SiZomato,
  SiRazorpay,
  SiPhonepe,
  SiTata,
  SiInfosys,
  SiSwiggy,
  SiUber,
  SiHcl,
  SiVisa,
  SiGoogle,
} from "react-icons/si";
import { FaMicrosoft, FaAmazon, FaSalesforce } from "react-icons/fa6";

export interface CompanyPartner {
  name: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }> | null;
  color: string;
  /** Shown beside the icon, or on its own if no Icon */
  label?: string;
  /** Custom render override when neither Icon nor label alone is enough */
  custom?: React.ReactNode;
}

export const companyPartners: CompanyPartner[] = [
  { name: "Microsoft",  Icon: FaMicrosoft,  color: "#00A4EF", label: "Microsoft" },
  { name: "Google",     Icon: SiGoogle,     color: "#4285F4", label: "Google" },
  { name: "Amazon",     Icon: FaAmazon,     color: "#FF9900", label: "amazon" },
  { name: "Swiggy",     Icon: SiSwiggy,     color: "#FC8019", label: "Swiggy" },
  { name: "Zomato",     Icon: SiZomato,     color: "#E23744", label: "zomato" },
  { name: "Razorpay",   Icon: SiRazorpay,   color: "#0284C7", label: "Razorpay" },
  {
    name: "Flipkart",
    Icon: null,
    color: "#2874F0",
    custom: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-[#2874F0] flex items-center justify-center text-[#FFE500] font-black text-xs italic shrink-0">
          f
        </div>
        <span className="font-bold italic text-[#2874F0] text-[15px] tracking-tight leading-none">
          Flipkart
        </span>
      </div>
    ),
  },
  { name: "PhonePe",    Icon: SiPhonepe,    color: "#5F259F", label: "PhonePe" },
  {
    name: "CRED",
    Icon: null,
    color: "#0F172A",
    custom: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-[4px] bg-slate-950 flex items-center justify-center shrink-0">
          <span className="text-white font-black text-[11px] leading-none">C</span>
        </div>
        <span className="font-black text-slate-950 text-xs tracking-[0.22em] leading-none">
          CRED
        </span>
      </div>
    ),
  },
  { name: "TCS",        Icon: SiTata,       color: "#00529B", label: "TCS" },
  { name: "Infosys",    Icon: SiInfosys,    color: "#007CC3", label: "Infosys" },
  {
    name: "Deloitte",
    Icon: null,
    color: "#000000",
    custom: (
      <div className="flex items-baseline gap-[2px]">
        <span className="font-extrabold text-[#000000] text-[15px] tracking-tight leading-none">
          Deloitte
        </span>
        <span className="w-[5px] h-[5px] rounded-full bg-[#86BC25] inline-block mb-[1px]" />
      </div>
    ),
  },
  {
    name: "Adobe",
    Icon: null,
    color: "#FA0F00",
    custom: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 40 35" className="w-5 h-4 shrink-0" aria-hidden="true">
          <path d="M0 0h17l23 35H23L0 0z" fill="#FA0F00" />
          <path d="M40 0H23L0 35h17L40 0z" fill="#FA0F00" />
          <path d="M13 24h14l3 11H10l3-11z" fill="#FA0F00" />
        </svg>
        <span className="font-bold text-[#FA0F00] text-[15px] tracking-tight leading-none">
          Adobe
        </span>
      </div>
    ),
  },
  { name: "Uber",       Icon: SiUber,       color: "#000000", label: "Uber" },
  { name: "Salesforce", Icon: FaSalesforce, color: "#00A1E0", label: "salesforce" },
  {
    name: "Cognizant",
    Icon: null,
    color: "#0033A0",
    custom: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="#0033A0" strokeWidth="2.5" fill="none" />
          <path d="M12 4.5a7.5 7.5 0 0 1 7.5 7.5" stroke="#00A9E0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
        <span className="font-bold text-[#0033A0] text-[14px] tracking-tight leading-none">
          cognizant
        </span>
      </div>
    ),
  },
  { name: "HCL",  Icon: SiHcl,  color: "#0072CE" },
  { name: "VISA", Icon: SiVisa, color: "#1A1F71" },
];

/** Renders a single partner logo — icon + label or custom JSX */
function PartnerLogo({ partner }: { partner: CompanyPartner }) {
  if (partner.custom) return <>{partner.custom}</>;

  const { Icon, color, label, name } = partner;

  return (
    <div className="flex items-center gap-1.5">
      {Icon ? (
        <Icon size={22} style={{ color, flexShrink: 0 }} />
      ) : (
        <span className="font-bold text-sm shrink-0" style={{ color }}>
          {label ?? name}
        </span>
      )}
      {label && Icon && (
        <span
          className="text-[14px] font-semibold leading-none tracking-tight"
          style={{ color: color === "#000000" ? "#111827" : color }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

// ─── Alumni hiring partner marquee ────────────────────────────────────────────
export const PartnerLogosMarquee = () => (
  <div className="mt-6 overflow-hidden py-3" aria-label="Alumni hiring partners logos">
    <div className="marquee flex items-center">
      {[...companyPartners, ...companyPartners].map((partner, i) => (
        <div
          key={i}
          className="mx-3 flex items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-6 py-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
          style={{ minWidth: "160px", height: "56px" }}
        >
          <PartnerLogo partner={partner} />
        </div>
      ))}
    </div>
  </div>
);

// ─── Footer backer logos ───────────────────────────────────────────────────────
// Antler India and Tech Mahindra have no Simple Icons entries → styled text fallback
export const BackerLogos = () => (
  <div className="flex flex-col gap-4">
    {/* IIT Delhi — no Simple Icons entry; clean text badge */}
    <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="w-8 h-8 rounded-lg bg-[#002B7F] flex items-center justify-center shrink-0 shadow-xs">
        <span className="text-white font-black text-[11px] tracking-tighter leading-tight text-center">
          IIT
        </span>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">
          Incubated at
        </div>
        <div className="text-white text-xs font-bold">IIT Delhi</div>
      </div>
    </div>

    {/* Antler India — no Simple Icons entry → styled A mark */}
    <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="w-8 h-8 rounded-lg bg-[#121212] flex items-center justify-center shrink-0 shadow-xs border border-slate-700">
        <span className="text-[#FF385C] font-black text-base leading-none">A</span>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">
          Backed by
        </div>
        <div className="text-white text-xs font-bold">Antler India</div>
      </div>
    </div>

    {/* Tech Mahindra — no Simple Icons entry → brand red TM mark */}
    <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="w-8 h-8 rounded-lg bg-[#E31837] flex items-center justify-center shrink-0 shadow-xs">
        <span className="text-white font-black text-[10px] tracking-tight leading-tight text-center">
          TM
        </span>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">
          Hiring Partner
        </div>
        <div className="text-white text-xs font-bold">Tech Mahindra</div>
      </div>
    </div>
  </div>
);
