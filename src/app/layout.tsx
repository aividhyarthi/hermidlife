import type { Metadata } from "next";
import "./globals.css";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export const metadata: Metadata = {
  title: "HerMidlife — Finally, a place where women are heard and not judged",
  description:
    "Doctor-led, personalised care for perimenopause, menopause and beyond. The first fully integrated platform for midlife care — combining medical expertise, emotional understanding, and continuous support. Built for Australian women.",
  keywords: [
    "perimenopause",
    "menopause",
    "midlife health",
    "women's health",
    "telehealth",
    "Australia",
    "menopause care",
    "HRT",
    "hormone therapy",
    "midlife care platform",
    "workplace wellness",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans">
        <ScrollRevealProvider>{children}</ScrollRevealProvider>
      </body>
    </html>
  );
}
