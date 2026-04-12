import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Your Body Feels Different After 35 — HerMidlife Event, Point Cook",
  description:
    "Join HerMidlife on Saturday, 30 May at Jamieson Way Community Centre, Point Cook. A free community event on perimenopause, hormonal and midlife health. Mood. Weight. Sleep. Hormones — what no one clearly explains.",
};

const learningPoints = [
  "Why your weight is increasing even when your lifestyle hasn't changed",
  "Why anxiety, mood swings, and low energy suddenly feel uncontrollable",
  "What's really happening to your sleep, metabolism, and hormones",
  "What most doctors don't fully explain about perimenopause",
  "Simple, practical steps you can start immediately to feel better",
  "How to take control of your body instead of feeling confused by it",
];

const gains = [
  "Learn about perimenopause & hormonal changes",
  "Understand your body and emotional wellbeing",
  "Discover practical strategies for better health",
  "Connect with experts and like-minded women",
  "Bridge the gap in midlife women's healthcare",
];

export default function PerimenopausePointCookEvent() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-[10%] w-48 h-48 rounded-full bg-rose/10 blur-3xl" />
          <div className="absolute top-40 right-[10%] w-56 h-56 rounded-full bg-lavender/15 blur-3xl" />
          <div className="absolute bottom-10 left-[30%] w-64 h-64 rounded-full bg-sage/10 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/#events"
            className="inline-flex items-center text-sm text-foreground/60 hover:text-rose-dark transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all events
          </Link>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-champagne mb-8">
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            <span className="text-sm font-medium text-foreground/60">
              Free Community Event · Point Cook, VIC
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground tracking-tight">
            Why your body feels
            <br />
            <span className="text-gradient italic">different after 35.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-foreground/70 max-w-3xl leading-relaxed font-medium">
            Mood. Weight. Sleep. Hormones — what no one clearly explains.
          </p>

          <p className="mt-6 text-base sm:text-lg text-foreground/60 max-w-3xl leading-relaxed">
            If you&apos;ve been feeling &lsquo;something is off&rsquo; but can&apos;t explain it
            — you&apos;re not alone. This session breaks down what&apos;s really happening
            inside your body during perimenopause, in simple, practical terms.
          </p>

          <p className="mt-6 text-xl text-rose-dark italic font-display max-w-3xl">
            This is not a lecture. This is clarity you&apos;ve been missing.
          </p>

          {/* Event quick-facts card */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-champagne">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose mb-2">Date</p>
              <p className="font-display text-lg font-bold text-foreground">Saturday, 30 May</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-champagne">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose mb-2">Time</p>
              <p className="font-display text-lg font-bold text-foreground">11:00 AM – 2:00 PM</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-champagne">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose mb-2">Entry</p>
              <p className="font-display text-lg font-bold text-foreground">FREE + Lunch</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:rudra@appstudiox.com?subject=Event%20Registration%20-%20Point%20Cook%20May%2030"
              className="group inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-semibold text-white gradient-cta hover:opacity-90 transition-all shadow-xl shadow-rose/20"
            >
              Reserve Your Free Seat
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-sm text-foreground/50">
            Limited seats — community hall capacity. Early registrations recommended.
          </p>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-sage-dark mb-3">
              What you&apos;ll learn
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              The clarity you&apos;ve
              <br />
              <span className="text-gradient">been missing</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {learningPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gradient-to-br from-blush to-rose-light/30 rounded-3xl p-6 border border-white/60"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/70 text-rose-dark flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-foreground/80 leading-relaxed font-medium pt-1.5">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll gain */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-plum mb-3">
                What you&apos;ll gain
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
                More than a session —
                <br />
                <span className="text-gradient">a community</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed">
                An inspiring free event dedicated to women&apos;s health, menopause and
                hormonal wellbeing — with knowledge, compassion, and real solutions.
              </p>
            </div>

            <div className="space-y-3">
              {gains.map((gain, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-lavender-light shadow-sm"
                >
                  <span className="mt-1 w-6 h-6 rounded-full bg-lavender-light flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="text-foreground/70">{gain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-rose mb-3">
            Expert Panel
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Learn from
            <br />
            <span className="text-gradient">experienced experts</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Doctors, women&apos;s health experts, clinical practitioners and entrepreneurs
            with <strong className="text-foreground">15+ years</strong> in midlife health
            and hormonal balance — sharing practical strategies to help you thrive with
            clarity and confidence.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Doctors", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
              { label: "Women's Health Experts", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
              { label: "Clinical Practitioners", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
            ].map((item) => (
              <div key={item.label} className="bg-beige-light rounded-3xl p-8 border border-champagne">
                <div className="w-14 h-14 rounded-2xl bg-white/70 text-gold flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <p className="font-display text-base font-bold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 sm:py-28 bg-sage-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage/20 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-sage-dark mb-3">
                  Venue
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Jamieson Way Community Centre
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  59 Jamieson Way
                  <br />
                  Point Cook, VIC 3030
                  <br />
                  <span className="text-foreground/50">Room: Community Hall</span>
                </p>

                <a
                  href="https://maps.google.com/?q=Jamieson+Way+Community+Centre+Point+Cook+VIC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-5 text-sm font-semibold text-sage-dark hover:text-plum transition-colors"
                >
                  Open in Google Maps
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose/10 text-rose-dark flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Saturday, 30 May</p>
                    <p className="text-sm text-foreground/60">11:00 AM – 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">FREE entry</p>
                    <p className="text-sm text-foreground/60">Complimentary lunch included</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lavender-light text-plum flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Limited seats</p>
                    <p className="text-sm text-foreground/60">Community hall capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-cta" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-28 text-center text-white">
          <p className="font-display text-lg sm:text-xl italic text-white/70 mb-6">
            Do not ignore what your body is trying to tell you.
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Empower women.
            <br />
            Challenge myths.
            <br />
            Lead your best life and shine.
          </h2>
          <a
            href="mailto:rudra@appstudiox.com?subject=Event%20Registration%20-%20Point%20Cook%20May%2030"
            className="group inline-flex items-center justify-center mt-6 px-10 py-5 rounded-full text-lg font-semibold bg-white text-rose-dark hover:bg-cream transition-colors shadow-xl"
          >
            Claim Your FREE Ticket
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
