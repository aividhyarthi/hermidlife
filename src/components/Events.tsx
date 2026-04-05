const events = [
  {
    type: "Webinars",
    title: "Expert-Led Online Sessions",
    description: "Monthly webinars with specialist doctors covering perimenopause, HRT, mental health, nutrition, and more. Evidence-based, practical, and accessible from anywhere.",
    icon: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z",
    color: "bg-lavender-light border-lavender",
    iconBg: "bg-plum/10 text-plum",
  },
  {
    type: "In-Person Events",
    title: "Premium Community Gatherings",
    description: "Intimate, premium-feel events bringing women together for expert talks, wellness experiences, and genuine connection with others on the same journey.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    color: "bg-blush border-rose-light",
    iconBg: "bg-rose/10 text-rose-dark",
  },
  {
    type: "Corporate Workshops",
    title: "Workplace Education",
    description: "Tailored workshops for organisations — educating leadership and teams on midlife health, reducing stigma, and building truly supportive workplaces.",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    color: "bg-beige-light border-champagne",
    iconBg: "bg-gold/10 text-gold",
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
            <div key={item.type} className={`${item.color} border rounded-3xl p-8 card-lift`}>
              <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-5`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-2">{item.type}</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
