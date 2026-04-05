const events = [
  {
    type: "Webinars",
    title: "Expert-Led Online Sessions",
    description: "Monthly webinars with specialist doctors covering perimenopause, HRT, mental health, nutrition, and more. Evidence-based, practical, and accessible from anywhere.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=350&fit=crop",
    color: "border-lavender",
  },
  {
    type: "In-Person Events",
    title: "Premium Community Gatherings",
    description: "Intimate, premium-feel events bringing women together for expert talks, wellness experiences, and genuine connection with others on the same journey.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&h=350&fit=crop",
    color: "border-rose-light",
  },
  {
    type: "Corporate Workshops",
    title: "Workplace Education",
    description: "Tailored workshops for organisations — educating leadership and teams on midlife health, reducing stigma, and building truly supportive workplaces.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    color: "border-champagne",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-plum mb-3">
            Events & Education
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Learn, connect, and feel
            <br />
            <span className="text-gradient">empowered</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Practical, evidence-based guidance from experts who understand — delivered online and in person.
          </p>
        </div>

        <div className="stagger-children grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((item) => (
            <div key={item.type} className={`bg-white border-2 ${item.color} rounded-3xl overflow-hidden card-lift shadow-sm`}>
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-2">{item.type}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
