export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-3xl font-bold">
            Her<span className="text-primary-light">Midlife</span>
          </span>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            You&apos;re not imagining it. You&apos;re not &ldquo;just stressed.&rdquo;
            And you deserve better care. HerMidlife is building that care for you.
          </p>
          <a
            href="mailto:hello@hermidlife.com.au"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 rounded-full text-lg font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Join the Waitlist
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 grid sm:grid-cols-3 gap-8 text-sm text-white/50">
          <div>
            <h4 className="font-semibold text-white/80 mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#solution" className="hover:text-white transition-colors">AI Symptom Assessment</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Telehealth Consults</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white/80 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#market" className="hover:text-white transition-colors">Why Now</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white/80 mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@hermidlife.com.au" className="hover:text-white transition-colors">
                  hello@hermidlife.com.au
                </a>
              </li>
              <li>Australia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} HerMidlife. All rights reserved. Built with care for Australian women.
        </div>
      </div>
    </footer>
  );
}
