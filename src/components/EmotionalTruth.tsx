export default function EmotionalTruth() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — emotional content */}
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
            <p className="text-lg text-foreground/60 leading-relaxed">
              At HerMidlife, we don&apos;t dismiss your symptoms.
              We understand them — and treat them properly.
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="stagger-children grid grid-cols-2 gap-4">
            {[
              { stat: "70%", desc: "of women feel dismissed by healthcare providers", color: "bg-blush" },
              { stat: "5 yrs", desc: "average time to get menopause-related support", color: "bg-lavender-light" },
              { stat: "1 in 2", desc: "women say symptoms affect their work performance", color: "bg-sage-light" },
              { stat: "10 yrs", desc: "perimenopause can last — it starts as early as 35", color: "bg-beige-light" },
            ].map((item) => (
              <div key={item.stat} className={`${item.color} rounded-3xl p-6 sm:p-8 text-center card-lift`}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {item.stat}
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
