const steps = [
  {
    step: "01",
    title: "Complete Your Health Assessment",
    description: "A guided intake that maps your hormonal health, lifestyle, and symptoms — creating a personalised profile your care team can act on immediately.",
    color: "from-rose to-rose-dark",
    line: "bg-rose/30",
    image: "https://images.pexels.com/photos/4266931/pexels-photo-4266931.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    imageAlt: "Doctor reviewing health assessment on tablet with patient",
  },
  {
    step: "02",
    title: "Consult With a Specialist Doctor",
    description: "Connect with a midlife-trained GP via telehealth. No more being told it's just stress. Get real answers and a clear diagnosis — same day.",
    color: "from-plum to-rose-dark",
    line: "bg-plum/30",
    image: "https://images.pexels.com/photos/5336963/pexels-photo-5336963.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    imageAlt: "Specialist doctor talking with patient in consultation",
  },
  {
    step: "03",
    title: "Receive Your Personalised Plan",
    description: "A care plan tailored to you — covering hormones, mental health, nutrition, and lifestyle. With prescriptions and medication delivered to your door.",
    color: "from-sage-dark to-sage",
    line: "bg-sage/40",
    image: "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    imageAlt: "Doctor checking on patient and reviewing personalised care plan",
  },
  {
    step: "04",
    title: "Ongoing Care & Support",
    description: "Follow-ups, progress tracking, plan adjustments, and messaging with your care team. Because this journey doesn't end after one appointment.",
    color: "from-gold to-terracotta",
    line: "",
    image: "https://images.pexels.com/photos/8413204/pexels-photo-8413204.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    imageAlt: "Doctor and patient having follow-up conversation in office",
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

        <div className="stagger-children max-w-5xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <div key={step.step} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Text side */}
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-xl font-bold shadow-lg shrink-0`}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="rounded-2xl shadow-lg object-cover w-full h-[220px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
