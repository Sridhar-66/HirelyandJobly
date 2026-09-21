import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "Hirely and Jobly | Tech courses for B.Tech students in Hyderabad", description: "Industry-ready courses in AI/ML, DSA, UI/UX, Cybersecurity, AR/VR, Game Design and more." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${lora.variable} ${inter.variable}`}><body>{children}</body></html>);
}
