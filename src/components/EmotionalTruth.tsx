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
              { stat: "70%", desc: "of women feel dismissed by healthcare providers", color: "bg-blush", icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" },
              { stat: "5 yrs", desc: "average time to get menopause-related support", color: "bg-lavender-light", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
              { stat: "1 in 2", desc: "women say symptoms affect their work performance", color: "bg-sage-light", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" },
              { stat: "10 yrs", desc: "perimenopause can last — it starts as early as 35", color: "bg-beige-light", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
            ].map((item) => (
              <div key={item.stat} className={`${item.color} rounded-3xl p-6 sm:p-8 text-center card-lift`}>
                <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
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
