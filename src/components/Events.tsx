import Link from "next/link";

const events = [
  {
    type: "Webinars",
    title: "Expert-Led Online Sessions",
    description: "Monthly webinars with specialist doctors covering perimenopause, HRT, mental health, nutrition, and more. Evidence-based, practical, and accessible from anywhere.",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    imageAlt: "Woman sharing her presentation with colleagues",
    color: "border-lavender",
  },
  {
    type: "In-Person Events",
    title: "Premium Community Gatherings",
    description: "Intimate, premium-feel events bringing women together for expert talks, wellness experiences, and genuine connection with others on the same journey.",
    image: "https://images.pexels.com/photos/7952093/pexels-photo-7952093.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    imageAlt: "Joyful group of diverse women standing together",
    color: "border-rose-light",
  },
  {
    type: "Corporate Workshops",
    title: "Workplace Education",
    description: "Tailored workshops for organisations — educating leadership and teams on midlife health, reducing stigma, and building truly supportive workplaces.",
    image: "https://images.pexels.com/photos/15543217/pexels-photo-15543217.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    imageAlt: "Women collaborating in a professional meeting room",
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

        {/* Featured upcoming event */}
        <div className="animate-on-scroll max-w-5xl mx-auto mb-16">
          <Link
            href="/events/perimenopause-point-cook"
            className="group block rounded-3xl overflow-hidden shadow-xl border border-rose-light card-lift relative"
          >
            <div className="absolute inset-0 gradient-cta" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.15),transparent_50%)]" />

            <div className="relative z-10 p-8 sm:p-10 lg:p-12 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Upcoming Event
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Free · Complimentary Lunch
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Why your body feels
                <br />
                different after 35
              </h3>
              <p className="text-lg sm:text-xl text-white/80 italic font-display mb-6">
                Mood. Weight. Sleep. Hormones — what no one clearly explains.
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base text-white/90 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span>Saturday, 30 May · 11 AM – 2 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Jamieson Way Community Centre, Point Cook VIC</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-semibold bg-white text-rose-dark group-hover:bg-cream transition-colors shadow-lg">
                View Event Details
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        <div className="stagger-children grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((item) => (
            <div key={item.type} className={`bg-white border ${item.color} rounded-3xl overflow-hidden card-lift shadow-sm`}>
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-[200px] object-cover object-top"
              />
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
