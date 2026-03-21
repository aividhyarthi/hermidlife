const govInitiatives = [
  {
    title: "New Medicare MBS Items",
    description: "From July 2025, dedicated Medicare rebate items for menopause consultations — making specialist care more accessible and affordable.",
    source: "Australian Government, 2025 Budget",
  },
  {
    title: "$573M Women's Health Package",
    description: "The Australian Government committed $573 million to women's health, with menopause care as a key priority area.",
    source: "2025-26 Federal Budget",
  },
  {
    title: "PBS-Listed Hormone Therapies",
    description: "Hormone replacement therapies are now PBS-listed, saving Australian women up to $290 per year on essential treatments.",
    source: "Pharmaceutical Benefits Scheme",
  },
  {
    title: "Senate Inquiry: 25 Recommendations",
    description: "The Senate inquiry into menopause and perimenopause produced 25 recommendations to improve care, research, and workplace support.",
    source: "Senate Committee Report, 2024",
  },
  {
    title: "Workplace Support Mandates",
    description: "The APS has directed employers to better support menopausal staff. 18% of Australian employers are adding menopause benefits in 2025.",
    source: "Australian Public Service Commission",
  },
  {
    title: "Growing National Awareness",
    description: "Menopause is no longer a taboo topic. National media, advocacy groups, and health bodies are driving awareness like never before.",
    source: "Jean Hailes for Women's Health",
  },
];

export default function Market() {
  return (
    <section id="market" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Why Now
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Australia is finally listening to women
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            For the first time, the Australian Government, employers, and the healthcare system
            are putting menopause care front and centre.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {govInitiatives.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-sand hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-3">{item.description}</p>
              <p className="text-[10px] uppercase tracking-wide text-foreground/30 font-medium">{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
