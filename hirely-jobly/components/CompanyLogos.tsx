"use client";

import React from "react";
import {
  SiZomato,
  SiRazorpay,
  SiPhonepe,
  SiTata,
  SiSwiggy,
  SiUber,
  SiHcl,
  SiVisa,
  SiGoogle,
  SiCline,
  SiReddit,
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
    name: "OpenAI",
    Icon: null,
    color: "#000000",
    custom: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 41 41" className="w-5 h-5 shrink-0" aria-hidden="true" fill="#000000">
          <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.651-3.001 10.079 10.079 0 0 0-9.589 6.977 9.967 9.967 0 0 0-6.657 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.652 3.001 10.079 10.079 0 0 0 9.589-6.977 9.967 9.967 0 0 0 6.657-4.834 10.079 10.079 0 0 0-1.241-11.818zm-22.73 10.25c0-.436.035-.87.101-1.301l.01-.051-.011.011a7.984 7.984 0 0 1-5.221-7.366c0-4.408 3.592-7.985 8.018-7.985.47 0 .932.043 1.385.124l.05.01-.011-.012a7.978 7.978 0 0 1 4.837-1.606c4.426 0 8.018 3.577 8.018 7.985a7.983 7.983 0 0 1-4.838 7.27l-.011.011.051-.01a8.065 8.065 0 0 1 .101 1.302c0 4.408-3.592 7.985-8.018 7.985a8.01 8.01 0 0 1-4.461-1.367zm-.501-17.955a7.978 7.978 0 0 1 3.624-3.294l-.051.012a6.01 6.01 0 0 0-.05.576 6.015 6.015 0 0 0 4.661 5.848 6.015 6.015 0 0 0-4.661 5.847c0 .194.017.386.05.576l.051.011a7.97 7.97 0 0 1-3.624-3.293 7.984 7.984 0 0 1 0-6.283zm8.417 14.348a6.017 6.017 0 0 0 4.661-5.847 6.017 6.017 0 0 0-4.661-5.848 6.013 6.013 0 0 0-4.66 5.848 6.013 6.013 0 0 0 4.66 5.847zm8.316-10.57a7.97 7.97 0 0 1 3.623 3.293 7.984 7.984 0 0 1 0 6.283 7.978 7.978 0 0 1-3.623 3.294l.051-.012a6.01 6.01 0 0 0 .05-.576 6.015 6.015 0 0 0-4.661-5.847 6.015 6.015 0 0 0 4.661-5.848c0-.193-.017-.385-.05-.576l-.051-.011z"/>
        </svg>
        <span className="font-semibold text-[15px] text-gray-900 tracking-tight leading-none">OpenAI</span>
      </div>
    ),
  },
  { name: "PhonePe", Icon: SiPhonepe, color: "#5F259F", label: "PhonePe" },
  {
    name: "Lovable",
    Icon: null,
    color: "#FF4D6D",
    custom: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true" fill="#FF4D6D">
          <path d="M12 21.593c-.425-.396-8.991-7.741-8.991-12.937A6.004 6.004 0 0 1 12 3.087a6.004 6.004 0 0 1 8.991 5.569C20.991 13.852 12.425 21.197 12 21.593z"/>
        </svg>
        <span className="font-bold text-[15px] tracking-tight leading-none" style={{color:"#FF4D6D"}}>Lovable</span>
      </div>
    ),
  },
  { name: "TCS",   Icon: SiTata,   color: "#00529B", label: "TCS" },
  { name: "Cline", Icon: SiCline,  color: "#A259FF", label: "Cline" },
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
  { name: "Reddit", Icon: SiReddit, color: "#FF4500", label: "Reddit" },
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
