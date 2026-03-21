export default function Hero() {
  return (
    <section className="gradient-hero pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Built for Australian Women
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Perimenopause care that{" "}
            <span className="text-primary">
              actually understands you
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            AI-powered symptom tracking, telehealth with specialist practitioners, and
            personalised ongoing support — designed for the 7 million Australian women
            navigating perimenopause and menopause.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@hermidlife.com.au"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold text-white gradient-cta hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold text-primary border-2 border-primary hover:bg-primary/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
