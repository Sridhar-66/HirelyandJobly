import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Hirely and Jobly | Tech Courses for B.Tech Students in Hyderabad",
  description: "Industry-ready courses in AI/ML, DSA, UI/UX, Cybersecurity, AR/VR, Game Design and Full-Stack Web Development. Built for B.Tech students in Hyderabad and across Telangana.",
  keywords: ["tech courses Hyderabad", "B.Tech training", "AI ML course", "cybersecurity course", "UI UX design", "full stack web development"],
  openGraph: {
    title: "Hirely and Jobly – Launch Your Tech Career Faster",
    description: "7 job-ready tracks taught by industry mentors. 5000+ students trained. 40+ hiring partners.",
    siteName: "Hirely and Jobly",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
