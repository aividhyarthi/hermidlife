const steps = [
  {
    step: "01",
    title: "Check Your Symptoms",
    description: "Take our free AI-powered symptom assessment. In just a few minutes, you'll get a personalised report that helps you understand what's going on with your body.",
    color: "from-primary to-primary-dark",
  },
  {
    step: "02",
    title: "Talk to a Specialist",
    description: "Book a telehealth consultation with a practitioner who genuinely understands perimenopause. No more being told it's just stress.",
    color: "from-accent to-sage-dark",
  },
  {
    step: "03",
    title: "Get Your Care Plan",
    description: "Receive a personalised care plan tailored to your symptoms, lifestyle, and goals — including evidence-based treatment options.",
    color: "from-ocean to-accent",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Track your progress daily. Get coaching on sleep, nutrition, and mood between appointments. Your care doesn't stop when the consult ends.",
    color: "from-sage-dark to-accent",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Your path to feeling like yourself again
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-sand to-transparent -translate-x-4" />
              )}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-lg font-bold mb-5`}>
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
