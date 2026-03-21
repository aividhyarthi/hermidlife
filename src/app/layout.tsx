import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HerMidlife — Australia's AI-Powered Perimenopause Care Platform",
  description:
    "End-to-end perimenopause care for 7 million Australian women. AI symptom tracking, telehealth consults, coaching, and employer benefits.",
  keywords: [
    "perimenopause",
    "menopause",
    "women's health",
    "telehealth",
    "Australia",
    "AI health",
    "HRT",
    "hormone therapy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
