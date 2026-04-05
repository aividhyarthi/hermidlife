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
              We understand them, and treat them with a patient-first approach.
            </p>
          </div>

          {/* Right — image + stats overlay */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8927460/pexels-photo-8927460.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop"
                alt="Woman feeling stressed with hands on her face"
                className="w-full h-[400px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { stat: "70%", desc: "feel dismissed" },
                    { stat: "5 yrs", desc: "average wait" },
                    { stat: "1 in 2", desc: "work affected" },
                    { stat: "10 yrs", desc: "it can last" },
                  ].map((item) => (
                    <div key={item.stat} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center">
                      <div className="font-display text-2xl font-bold text-foreground">{item.stat}</div>
                      <p className="text-xs text-foreground/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
