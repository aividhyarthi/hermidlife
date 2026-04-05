const steps = [
  {
    step: "01",
    title: "Complete Your Health Assessment",
    description: "A guided intake that maps your hormonal health, lifestyle, and symptoms — creating a personalised profile your care team can act on immediately.",
    color: "from-rose to-rose-dark",
    line: "bg-rose/30",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
  },
  {
    step: "02",
    title: "Consult With a Specialist Doctor",
    description: "Connect with a midlife-trained GP via telehealth. No more being told it's just stress. Get real answers and a clear diagnosis — same day.",
    color: "from-plum to-rose-dark",
    line: "bg-plum/30",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
  },
  {
    step: "03",
    title: "Receive Your Personalised Plan",
    description: "A care plan tailored to you — covering hormones, mental health, nutrition, and lifestyle. With prescriptions and medication delivered to your door.",
    color: "from-sage-dark to-sage",
    line: "bg-sage/40",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  },
  {
    step: "04",
    title: "Ongoing Care & Support",
    description: "Follow-ups, progress tracking, plan adjustments, and messaging with your care team. Because this journey doesn't end after one appointment.",
    color: "from-gold to-terracotta",
    line: "",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=300&fit=crop",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage-dark mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Your path to feeling
            <br />
            <span className="text-gradient">like yourself again</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            One platform. One care team. One clear plan.
          </p>
        </div>

        <div className="stagger-children max-w-5xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <div key={step.step} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center`}>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-lg font-bold shadow-lg`}>
                    {step.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-0.5 flex-1 my-2 ${step.line} min-h-[40px] hidden md:block`} />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
