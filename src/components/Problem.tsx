const stats = [
  {
    number: "7M",
    description: "Australian women currently in perimenopause or menopause",
    source: "Australian Institute of Health and Welfare",
    bg: "bg-primary/10 text-primary",
  },
  {
    number: "2M",
    description: "Experience moderate to severe symptoms affecting daily life",
    source: "Jean Hailes for Women's Health",
    bg: "bg-accent/10 text-accent",
  },
  {
    number: "1M",
    description: "Women have left or reduced work due to menopause symptoms",
    source: "Senate Inquiry into Menopause, 2024",
    bg: "bg-warm-dark/10 text-warm-dark",
  },
  {
    number: "75%",
    description: "Of women who seek help from their GP receive no effective treatment",
    source: "Medical Journal of Australia, 2023",
    bg: "bg-ocean/10 text-ocean",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Millions of Australian women are{" "}
            <span className="text-primary">not getting the care they need</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Perimenopause can start as early as your late 30s. Yet most GPs aren&apos;t equipped
            for long menopause consultations, leaving women without answers.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.description}
              className={`${stat.bg} rounded-2xl p-6 text-center`}
            >
              <div className="text-4xl sm:text-5xl font-bold">{stat.number}</div>
              <p className="mt-2 text-sm font-medium opacity-80">{stat.description}</p>
              <p className="mt-3 text-[10px] uppercase tracking-wide opacity-50">{stat.source}</p>
            </div>
          ))}
        </div>

        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl italic text-foreground/60 leading-relaxed">
            &ldquo;Women have been ignored by healthcare for too long. GPs are structurally
            unable to offer long menopause consultations. The system is broken.&rdquo;
          </p>
          <cite className="block mt-4 text-sm font-semibold text-foreground/40 not-italic">
            — Medical Journal of Australia, 2023
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
