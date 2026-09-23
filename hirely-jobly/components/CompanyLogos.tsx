"use client";

import React from "react";
import Image from "next/image";
import {
  SiGoogle,
  SiMeta,
  SiUber,
  SiSwiggy,
  SiZomato,
  SiRazorpay,
  SiPhonepe,
  SiPaytm,
  SiTcs,
  SiInfosys,
  SiWipro,
  SiAccenture,
  SiCisco,
  SiIntel,
  SiNvidia,
  SiSamsung,
  SiNetflix,
  SiSpotify,
  SiApple,
  SiHcl,
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiAirbnb,
  SiAtlassian,
  SiGithub,
  SiStripe,
  SiShopify,
  SiQualcomm,
  SiSap,
  SiPostman,
  SiZoho,
  SiReddit,
  SiDell,
  SiMahindra,
} from "react-icons/si";

export interface CompanyPartner {
  name: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
  color: string;
  label: string;
}

/** Strictly official Simple Icons (react-icons/si) — zero mockups, emojis, or unofficial SVGs */
export const companyPartners: CompanyPartner[] = [
  { name: "Google",     Icon: SiGoogle,     color: "#4285F4", label: "Google" },
  { name: "Meta",       Icon: SiMeta,       color: "#0081FB", label: "Meta" },
  { name: "Apple",      Icon: SiApple,      color: "#000000", label: "Apple" },
  { name: "Netflix",    Icon: SiNetflix,    color: "#E50914", label: "Netflix" },
  { name: "Uber",       Icon: SiUber,       color: "#000000", label: "Uber" },
  { name: "Spotify",    Icon: SiSpotify,    color: "#1ED760", label: "Spotify" },
  { name: "Swiggy",     Icon: SiSwiggy,     color: "#FC8019", label: "Swiggy" },
  { name: "Zomato",     Icon: SiZomato,     color: "#E23744", label: "Zomato" },
  { name: "Razorpay",   Icon: SiRazorpay,   color: "#0284C7", label: "Razorpay" },
  { name: "PhonePe",    Icon: SiPhonepe,    color: "#5F259F", label: "PhonePe" },
  { name: "Paytm",      Icon: SiPaytm,      color: "#002E6E", label: "Paytm" },
  { name: "TCS",        Icon: SiTcs,        color: "#00529B", label: "TCS" },
  { name: "Infosys",    Icon: SiInfosys,    color: "#007CC3", label: "Infosys" },
  { name: "Wipro",      Icon: SiWipro,      color: "#1C1C1C", label: "Wipro" },
  { name: "Accenture",  Icon: SiAccenture,  color: "#A100FF", label: "Accenture" },
  { name: "Cisco",      Icon: SiCisco,      color: "#1BA0D7", label: "Cisco" },
  { name: "Intel",      Icon: SiIntel,      color: "#0071C5", label: "Intel" },
  { name: "NVIDIA",     Icon: SiNvidia,     color: "#76B900", label: "NVIDIA" },
  { name: "Samsung",    Icon: SiSamsung,    color: "#1428A0", label: "Samsung" },
  { name: "HCLTech",    Icon: SiHcl,        color: "#0072CE", label: "HCLTech" },
  { name: "VISA",       Icon: SiVisa,       color: "#1A1F71", label: "VISA" },
  { name: "Mastercard", Icon: SiMastercard, color: "#EB001B", label: "Mastercard" },
  { name: "PayPal",     Icon: SiPaypal,     color: "#003087", label: "PayPal" },
  { name: "Airbnb",     Icon: SiAirbnb,     color: "#FF5A5F", label: "Airbnb" },
  { name: "Atlassian",  Icon: SiAtlassian,  color: "#0052CC", label: "Atlassian" },
  { name: "GitHub",     Icon: SiGithub,     color: "#181717", label: "GitHub" },
  { name: "Stripe",     Icon: SiStripe,     color: "#635BFF", label: "Stripe" },
  { name: "Shopify",    Icon: SiShopify,    color: "#7AB55C", label: "Shopify" },
  { name: "Qualcomm",   Icon: SiQualcomm,   color: "#3253DC", label: "Qualcomm" },
  { name: "SAP",        Icon: SiSap,        color: "#008FD3", label: "SAP" },
  { name: "Postman",    Icon: SiPostman,    color: "#FF6C37", label: "Postman" },
  { name: "Zoho",       Icon: SiZoho,       color: "#D32F2F", label: "Zoho" },
  { name: "Reddit",     Icon: SiReddit,     color: "#FF4500", label: "Reddit" },
  { name: "Dell",       Icon: SiDell,       color: "#007DB8", label: "Dell" },
];

/** Renders a single official partner logo card with Simple Icons */
function PartnerLogo({ partner }: { partner: CompanyPartner }) {
  const { Icon, color, label } = partner;

  return (
    <div className="flex items-center gap-2">
      <Icon size={20} style={{ color, flexShrink: 0 }} />
      <span
        className="text-[14px] font-semibold leading-none tracking-tight"
        style={{ color: color === "#000000" ? "#111827" : color }}
      >
        {label}
      </span>
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
export const BackerLogos = () => (
  <div className="flex flex-col gap-5">
    {/* IIT Delhi — Backgroundless & Much Bigger */}
    <div className="flex items-center gap-3.5 opacity-95 hover:opacity-100 transition-opacity">
      <Image
        src="/images/iit-delhi.svg"
        alt="IIT Delhi"
        width={70}
        height={50}
        className="h-12 w-auto object-contain shrink-0"
      />
      <div>
        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
          Incubated at
        </div>
        <div className="text-white text-sm font-bold tracking-tight">
          IIT Delhi
        </div>
      </div>
    </div>

    {/* Tech Mahindra — Backgroundless & Much Bigger */}
    <div className="flex items-center gap-3.5 opacity-95 hover:opacity-100 transition-opacity">
      <SiMahindra size={48} className="text-red-500 shrink-0" />
      <div>
        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
          Backed up by
        </div>
        <div className="text-white text-sm font-bold tracking-tight">
          Tech Mahindra
        </div>
      </div>
    </div>
  </div>
);
