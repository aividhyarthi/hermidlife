export default function EmotionalTruth() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=700&h=800&fit=crop&crop=face"
                alt="Woman reflecting on her health journey"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                <p className="text-sm font-medium text-foreground/70 italic">
                  &ldquo;I spent 3 years being told nothing was wrong. HerMidlife was the first place that actually listened.&rdquo;
                </p>
                <p className="text-xs text-foreground/40 mt-2">— Sarah, 44, Sydney</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-light/30 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lavender-light/40 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right — emotional content */}
          <div className="animate-on-scroll">
            <p className="text-sm font-semibold uppercase tracking-wider text-rose mb-4">
              We hear you
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              You&apos;ve been told it&apos;s
              <br />
              <span className="text-gradient italic">&ldquo;just stress.&rdquo;</span>
            </h2>

            <div className="space-y-4 mb-8">
              {[
                '"It\'s just stress."',
                '"Your tests are normal."',
                '"This is part of ageing."',
              ].map((quote) => (
                <div key={quote} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-rose-light/60 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-rose-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <p className="text-lg text-foreground/60 italic">{quote}</p>
                </div>
              ))}
            </div>

            <p className="text-xl text-foreground/80 leading-relaxed mb-2">
              But you still don&apos;t feel like yourself.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              At HerMidlife, we don&apos;t dismiss your symptoms.
              We understand them — and treat them properly.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "70%", desc: "of women feel dismissed by providers" },
                { stat: "5 yrs", desc: "average wait for proper support" },
                { stat: "1 in 2", desc: "say symptoms affect their work" },
                { stat: "10 yrs", desc: "perimenopause can last" },
              ].map((item) => (
                <div key={item.stat} className="bg-blush/40 rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-foreground mb-1">{item.stat}</div>
                  <p className="text-xs text-foreground/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
