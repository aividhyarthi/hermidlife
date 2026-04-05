export default function Hero() {
  return (
    <section className="gradient-hero pt-32 pb-28 sm:pt-44 sm:pb-40 wave-separator relative">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="float-shape absolute top-16 left-[8%] w-36 h-36 rounded-full bg-rose/10 blur-2xl" />
        <div className="float-shape-reverse absolute top-32 right-[12%] w-44 h-44 rounded-full bg-lavender/15 blur-2xl" />
        <div className="pulse-shape absolute bottom-24 left-[25%] w-52 h-52 rounded-full bg-sage/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-champagne mb-10">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="text-sm font-medium text-foreground/60">
                Doctor-Led Care for Australian Women
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground tracking-tight">
              Finally, care that
              <br />
              <span className="text-gradient italic">
                listens to women in midlife.
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-foreground/60 max-w-xl leading-relaxed">
              Doctor-led, personalised care for perimenopause, menopause and beyond
              — designed around <em className="text-foreground/80 not-italic font-medium">you</em>.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:rudra@appstudiox.com"
                className="group inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-semibold text-white gradient-cta hover:opacity-90 transition-all shadow-xl shadow-rose/20 hover:shadow-2xl hover:shadow-rose/25 hover:-translate-y-0.5"
              >
                Start Your Personalised Plan
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-semibold text-rose-dark bg-white/70 backdrop-blur-sm border-2 border-rose/20 hover:border-rose hover:bg-white transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Evidence-Based
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Doctor-Led
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Continuous Support
              </div>
            </div>
          </div>

          {/* Right — hero image collage */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[520px]">
              {/* Main image — mature woman, confident, warm */}
              <div className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/80">
                <img
                  src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1"
                  alt="Confident mature woman smiling warmly"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Secondary image — woman in her 40s-50s, relaxed */}
              <div className="absolute bottom-0 left-0 w-64 h-72 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/80">
                <img
                  src="https://images.pexels.com/photos/6303645/pexels-photo-6303645.jpeg?auto=compress&cs=tinysrgb&w=500&h=560&dpr=1"
                  alt="Woman patient consulting with her doctor"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent blob behind images */}
              <div className="absolute top-16 left-16 w-48 h-48 bg-rose-light/40 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-16 right-16 w-40 h-40 bg-lavender/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
