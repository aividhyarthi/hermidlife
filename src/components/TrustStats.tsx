const stats = [
  {
    number: "3.4M",
    label: "women affected",
    description: "Australian women currently experiencing perimenopause or menopause symptoms",
    source: "Australian Government, Senate Inquiry 2024",
    color: "text-rose-dark",
    bg: "bg-blush/60 border-rose-light",
  },
  {
    number: "71K+",
    label: "sought help",
    description: "Women accessed new Medicare menopause health assessments since July 2025",
    source: "MBS Online, 2026",
    color: "text-sage-dark",
    bg: "bg-sage-light/60 border-sage",
  },
  {
    number: "$793M",
    label: "gov investment",
    description: "Albanese Government's landmark five-year Women's Health Package investment",
    source: "2025-26 Federal Budget",
    color: "text-gold",
    bg: "bg-beige-light border-champagne",
  },
  {
    number: "0",
    label: "accredited programs",
    description: "Mandatory menopause training requirements exist for Australian GPs today",
    source: "Senate Inquiry Report, 2024",
    color: "text-plum",
    bg: "bg-lavender-light/60 border-lavender",
  },
];

export default function TrustStats() {
  return (
    <section className="py-20 sm:py-28 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,114,122,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(143,170,139,0.12),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-on-scroll text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-rose-light mb-3">
            The Numbers Don&apos;t Lie
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Australia is finally investing in
            <br />
            women&apos;s midlife health
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            You deserve better care. The data proves the demand is real — and growing.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 text-center backdrop-blur-sm card-lift"
            >
              <div className={`stat-glow text-4xl sm:text-5xl font-display font-bold ${stat.color} mb-1`}>
                {stat.number}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                {stat.label}
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{stat.description}</p>
              <p className="mt-4 text-[10px] uppercase tracking-wide text-white/30 font-medium">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll max-w-2xl mx-auto text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-sm text-white/60 leading-relaxed">
              <strong className="text-white/80">80% of women want personalised care but don&apos;t receive it.</strong>{" "}
              1 in 3 women over 50 are affected by osteoporosis, and heart disease risk increases
              significantly after menopause. These aren&apos;t just statistics — they&apos;re a call to action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
