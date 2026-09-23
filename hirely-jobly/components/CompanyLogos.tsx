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
      <svg className="h-5 w-auto" viewBox="0 0 108 23" fill="none">
        <rect x="0" y="1" width="9.5" height="9.5" fill="#F25022" />
        <rect x="11.5" y="1" width="9.5" height="9.5" fill="#7FBA00" />
        <rect x="0" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
        <rect x="11.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
        <text x="28" y="17" fill="#737373" fontFamily="Segoe UI, -apple-system, sans-serif" fontSize="16" fontWeight="600" letterSpacing="-0.3px">
          Microsoft
        </text>
      </svg>
    ),
  },
  {
    name: "Google",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 74 24" fill="none">
        <path fill="#4285F4" d="M9.24 10.43v3.42h5.5c-.24 1.34-1.57 3.93-5.5 3.93-3.32 0-6.03-2.74-6.03-6.13s2.71-6.13 6.03-6.13c1.89 0 3.16.81 3.88 1.51l2.7-2.62C14.09 2.76 11.88 1.75 9.24 1.75 4.14 1.75 0 5.89 0 11s4.14 9.25 9.24 9.25c4.79 0 8.8-3.36 8.8-9.07 0-.61-.07-1.07-.15-1.53H9.24v-.22z"/>
        <path fill="#EA4335" d="M24.5 11.4c0-3.15-2.45-5.4-5.35-5.4s-5.35 2.25-5.35 5.4c0 3.1 2.45 5.4 5.35 5.4s5.35-2.3 5.35-5.4zm-2.4 0c0 2.05-1.4 3.4-2.95 3.4-1.55 0-2.95-1.35-2.95-3.4 0-2.1 1.4-3.4 2.95-3.4 1.55 0 2.95 1.3 2.95 3.4z"/>
        <path fill="#FBBC05" d="M36.3 11.4c0-3.15-2.45-5.4-5.35-5.4s-5.35 2.25-5.35 5.4c0 3.1 2.45 5.4 5.35 5.4s5.35-2.3 5.35-5.4zm-2.4 0c0 2.05-1.4 3.4-2.95 3.4-1.55 0-2.95-1.35-2.95-3.4 0-2.1 1.4-3.4 2.95-3.4 1.55 0 2.95 1.3 2.95 3.4z"/>
        <path fill="#4285F4" d="M47.7 6.3h-2.3v1.3h-.1c-.5-.6-1.5-1.3-2.9-1.3-2.9 0-5.3 2.4-5.3 5.4s2.4 5.4 5.3 5.4c1.4 0 2.4-.7 2.9-1.3h.1v.8c0 2-.9 3.1-2.9 3.1-1.6 0-2.6-1.1-3-2.1l-2.1.9c.6 1.5 2.2 3.2 5.1 3.2 3 0 5.4-1.8 5.4-5.6V6.3zm-4.9 8.5c-1.5 0-2.9-1.3-2.9-3.4s1.4-3.4 2.9-3.4c1.5 0 2.8 1.3 2.8 3.4s-1.3 3.4-2.8 3.4z"/>
        <path fill="#34A853" d="M51.5 1.8h-2.4v18.4h2.4V1.8z"/>
        <path fill="#EA4335" d="M60.2 14.8l1.9 1.3c-.6.9-2.1 2.7-4.8 2.7-3.3 0-5.2-2.5-5.2-5.4 0-3.3 2.3-5.4 5-5.4 3.1 0 4.2 2.3 4.5 3.5l.3.8-7.2 3c.6 1.1 1.5 1.7 2.7 1.7 1.2 0 2-.6 2.8-1.2v-1zm-5.7-3.6l4.8-2c-.3-.5-.9-1.1-1.8-1.1-1.2 0-2.4 1.1-3 3.1z"/>
      </svg>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 98 32" fill="none">
        <path fill="#0F1111" d="M12.9 21.3c-2.8 2-6.8 3.1-10.4 3.1-1.1 0-2.5-.2-2.5-2.2 0-2.9 2.7-4.4 7.6-4.4 1.7 0 3.3.3 4.9.6v-.9c0-2.1-1.4-3.2-4-3.2-1.9 0-3.9.5-5.4 1.3L1.6 11.9c2.1-1.1 4.6-1.7 7.1-1.7 5.1 0 7.8 2.4 7.8 6.9v7.6h-2.8v-3.2zm-2.8-2.6c-1.4-.4-3-.6-4.5-.6-2.6 0-4 .7-4 2.1 0 1.2.9 1.8 2.5 1.8 2.2 0 4.4-1 6-2.5v-.8zm17.6-8.5c2.4 0 4 1 4.9 2.6v-2.2h2.8v14.1h-2.8v-2.5c-1 1.7-2.6 2.6-4.9 2.6-4 0-6.9-3.1-6.9-7.1s2.9-7.5 6.9-7.5zm.7 11.6c2.4 0 4.3-1.9 4.3-4.5s-1.9-4.5-4.3-4.5-4.3 1.9-4.3 4.5 1.9 4.5 4.3 4.5zm20.2-11.6c3.8 0 5.6 1.9 6.2 4.1 1.2-2.6 3.3-4.1 6.1-4.1 3.9 0 5.6 2.5 5.6 6.5v7.8h-2.8v-7.5c0-2.7-1.1-4-3.1-4-2.1 0-3.6 1.5-3.6 4.3v7.2h-2.8v-7.5c0-2.7-1.1-4-3.1-4-2.1 0-3.6 1.5-3.6 4.3v7.2h-2.8v-14h2.8v2.5c1-1.5 2.5-2.5 4.1-2.5zm25.6 0c4.4 0 7.5 3.1 7.5 7.1s-3.1 7.1-7.5 7.1-7.5-3.1-7.5-7.1 3.1-7.1 7.5-7.1zm0 11.6c2.6 0 4.5-2 4.5-4.5s-1.9-4.5-4.5-4.5-4.5 2-4.5 4.5 1.9 4.5 4.5 4.5z"/>
        <path fill="#FF9900" d="M1.5 25.5C18.5 35 68 35 91 22.8c1.3-.7 2.4.8 1.4 1.8-10.8 10.8-44.8 12.8-63.8 6.5C14.7 29.7 5.7 28 1.5 25.5z"/>
        <path fill="#FF9900" d="M85.4 18.2c2.2.4 6.7 1.8 9 5.8.5.9.1 1.7-.8 1.5-3.2-.8-8.2-3.1-10-6.1-.5-.8.3-1.4 1.8-1.2z"/>
      </svg>
    ),
  },
  {
    name: "HCL",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 85 24" fill="none">
        <path fill="#0072CE" d="M0 22h7.8l3.1-12.8H21l-3.1 12.8h7.8L29.8 2H22l-3 12.2H8.8L11.8 2H4L0 22zm31 0h17.5l1.6-6.4H37.8l1.3-5.2h12.3l1.6-6.4H35.5L31 22zm26 0h17.5l1.6-6.4H63.8l3.8-15.6H59.8L56 22h1z"/>
      </svg>
    ),
  },
  {
    name: "VISA",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 78 24" fill="none">
        <path fill="#00579F" d="M30.4 1.8L19.8 23.4h-6.8L6.8 6.2C6.4 4.5 6 3.9 4.7 3.2 2.6 2 0.7 1.5 0 1.2l.2-.9h11.1c1.5 0 2.8 1 3.1 2.8l2.7 14.5L24 1.8h6.4zm23.9 14.7c0-5.8-8-6.1-7.9-8.7 0-.8.8-1.6 2.4-1.8 1.3-.1 3.7-.3 6.8 1.1l1.2-5.7C55 1 52.8.5 50 .5c-6.6 0-11.2 3.5-11.2 8.5 0 3.7 3.3 5.8 5.8 7 2.6 1.3 3.5 2.1 3.5 3.3 0 1.7-2.1 2.5-4.1 2.5-3.5 0-5.4-.5-7.7-1.5l-1.3 6.1c1.8.8 5 1.5 8.3 1.5 7.1 0 11.7-3.5 11.7-8.9zM78 23.4h-5.3c-1.6 0-2.8-.5-3.5-2.2L60.5 1.8h7l6.8 15.3 4.2-15.3H78l-5.6 21.6zM37.8 1.8l-5.4 21.6h-6.4l5.4-21.6h6.4z"/>
        <path fill="#FAA61A" d="M12.9 1.8h-12L.7 2.7C4.8 3.7 8.8 5.8 11.2 8.4l1.7-6.6z"/>
      </svg>
    ),
  },
  {
    name: "Ola Electric",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 130 22" fill="none">
        <circle cx="10" cy="11" r="8" fill="#111827" />
        <circle cx="10" cy="11" r="4" fill="white" />
        <path fill="#111827" d="M22 3h4v16h-4V3zm9 0h4v12h7v4h-11V3zm16 0h11v3.5h-7V9h6v3.5h-6V16h7.5v3h-11.5V3zm15 0h4v16h-4V3zm7 0h10v3.5h-6v12.5h-4V3zm13 0h10.5v3.5h-6.5v3h5.5v3h-5.5v3.5h7v3H92V3zm14 0h10.5v3.5h-6.5v3h5.5v3h-5.5v3.5h7v3H106V3z"/>
      </svg>
    ),
  },
  {
    name: "Swiggy",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 100 28" fill="none">
        <path fill="#FC8019" d="M12 0C5.4 0 0 5.4 0 12c0 4.2 2.2 7.8 5.5 9.8l1.8-2.7C4.8 17.5 3.5 14.9 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5c0 1.4-.4 2.8-1 4l2.7 1.8c1.1-1.7 1.8-3.7 1.8-5.8 0-6.6-5.4-12-12-12zm3.6 9.5H8.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4h4.4c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2H8v-2.8h5.2c.4 0 .8-.4.8-.8s-.4-.8-.8-.8H8.8C6.6 14.7 5 13.1 5 10.9S6.6 7 8.8 7h6.8v2.5z"/>
        <text x="28" y="19" fill="#FC8019" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="15" letterSpacing="1px">
          SWIGGY
        </text>
      </svg>
    ),
  },
  {
    name: "Zomato",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 92 24" fill="none">
        <path fill="#E23744" d="M13.6 2.4H0v4.2l8.8 10.8H0V22h14.2v-4.2L5.4 7h8.2V2.4zm16.5 4.4c-4.8 0-8.2 3.6-8.2 8.5s3.4 8.5 8.2 8.5 8.2-3.6 8.2-8.5-3.4-8.5-8.2-8.5zm0 13c-2.4 0-4-2-4-4.5s1.6-4.5 4-4.5 4 2 4 4.5-1.6 4.5-4 4.5zm27.8-13c-2.2 0-4 1-5 2.7-.8-1.7-2.6-2.7-4.6-2.7-2 0-3.6.9-4.4 2.4V7.2h-4.2V22h4.2v-8.2c0-2.4 1.2-3.8 2.8-3.8 1.6 0 2.6 1.2 2.6 3.4V22h4.2v-8.2c0-2.4 1.2-3.8 2.8-3.8 1.6 0 2.6 1.2 2.6 3.4V22h4.2v-9.2c0-3.8-2.2-6-5.2-6zm16.6 0c-2.2 0-4.2 1.1-5 2.8V7.2h-4.2V22h4.2v-7.8c0-2.6 1.4-4 3.4-4 .6 0 1.2.1 1.6.4l1.2-4c-.4-.1-.8-.2-1.2-.2zm15 0c-4.8 0-8.2 3.6-8.2 8.5s3.4 8.5 8.2 8.5 8.2-3.6 8.2-8.5-3.4-8.5-8.2-8.5zm0 13c-2.4 0-4-2-4-4.5s1.6-4.5 4-4.5 4 2 4 4.5-1.6 4.5-4 4.5z"/>
      </svg>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 106 24" fill="none">
        <path fill="#0284C7" d="M10.8 1.5L2 12.8h7.2L6 23.5l14.4-12.8h-7.6l4.8-9.2z"/>
        <text x="26" y="18" fill="#0C2340" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3px">
          Razorpay
        </text>
      </svg>
    ),
  },
  {
    name: "Flipkart",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 95 24" fill="none">
        <rect x="0" y="1" width="22" height="22" rx="4" fill="#2874F0"/>
        <path d="M15 6h-4c-2.2 0-4 1.8-4 4v2H5v3h2v7h4v-7h3.5l.5-3H11v-1.5c0-.8.7-1.5 1.5-1.5H15V6z" fill="#FFE500"/>
        <text x="27" y="18" fill="#2874F0" fontStyle="italic" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.5px">
          Flipkart
        </text>
      </svg>
    ),
  },
  {
    name: "PhonePe",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 102 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#5F259F"/>
        <text x="12" y="16.5" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13">
          पे
        </text>
        <text x="28" y="18" fill="#5F259F" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.2px">
          PhonePe
        </text>
      </svg>
    ),
  },
  {
    name: "CRED",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 88 22" fill="none">
        <rect x="0" y="1" width="20" height="20" rx="4" fill="#0F172A"/>
        <path d="M14 6H7c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h7v-2H7V8h7V6z" fill="white"/>
        <text x="26" y="17" fill="#0F172A" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="14" letterSpacing="3.5px">
          CRED
        </text>
      </svg>
    ),
  },
  {
    name: "TCS",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 75 24" fill="none">
        <text x="0" y="19" fill="#00529B" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="-0.5px">
          TCS
        </text>
        <circle cx="49" cy="8" r="3" fill="#E31937"/>
      </svg>
    ),
  },
  {
    name: "Infosys",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 85 24" fill="none">
        <text x="0" y="18" fill="#007CC3" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.5px">
          Infosys
        </text>
      </svg>
    ),
  },
  {
    name: "Deloitte",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 82 22" fill="none">
        <text x="0" y="17" fill="#000000" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.4px">
          Deloitte
        </text>
        <circle cx="69" cy="15" r="2.5" fill="#86BC25"/>
      </svg>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 85 24" fill="none">
        <path fill="#FA0F00" d="M0 2h7.8l10.4 19.5h-5.2L0 2zM18.2 2H26L15.6 21.5h-5.2L18.2 2zM6.5 15.6h13l1.8 3.9H4.7l1.8-3.9z"/>
        <text x="31" y="18" fill="#FA0F00" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3px">
          Adobe
        </text>
      </svg>
    ),
  },
  {
    name: "Uber",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 65 22" fill="none">
        <text x="0" y="18" fill="#000000" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" letterSpacing="-0.8px">
          Uber
        </text>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 105 26" fill="none">
        <path fill="#00A1E0" d="M9.8 4.2c2.2 0 4.1 1.2 5 3.1.8-.5 1.7-.8 2.7-.8 2.9 0 5.3 2.4 5.3 5.3 0 .3 0 .6-.1 1 1.4.6 2.4 2 2.4 3.7 0 2.3-1.8 4.1-4.1 4.1H4.7C2.1 20.6 0 18.5 0 15.9c0-2.2 1.5-4 3.5-4.5.2-1 .5-1.5.9-2 1.2-3.2 4.3-5.2 5.4-5.2z"/>
        <text x="28" y="19" fill="#00A1E0" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.2px">
          salesforce
        </text>
      </svg>
    ),
  },
  {
    name: "Cognizant",
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 105 24" fill="none">
        <circle cx="10" cy="12" r="8.5" stroke="#0033A0" strokeWidth="2.5" fill="none" />
        <path d="M10 5.5a6.5 6.5 0 0 1 6.5 6.5" stroke="#00A9E0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <text x="24" y="18" fill="#0033A0" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.3px">
          cognizant
        </text>
      </svg>
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
            className="mx-3 flex items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-6 py-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md shrink-0"
            style={{ minWidth: "160px", height: "56px" }}
          >
            {partner.logo}
          </div>
        ))}
      </div>
    </div>
  );
};
