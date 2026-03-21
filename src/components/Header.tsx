"use client";

import { useState } from "react";

const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "What We Do" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#market", label: "Why Now" },
  { href: "#team", label: "Our Team" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              Her<span className="text-accent">Midlife</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@hermidlife.com.au"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-cta hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@hermidlife.com.au"
              className="block mx-3 text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-cta"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
