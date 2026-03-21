const team = [
  {
    name: "Dr. Archana Singh",
    role: "CEO",
    description: "Leading HerMidlife's vision to transform perimenopause care for Australian women through technology and compassion.",
    gradient: "from-primary to-primary-dark",
    initials: "AS",
  },
  {
    name: "Dr. Padma",
    role: "CBO",
    description: "Driving business growth and partnerships to bring HerMidlife's care platform to women across Australia.",
    gradient: "from-accent to-sage-dark",
    initials: "DP",
  },
  {
    name: "Mr. Rudra Kasturi",
    role: "CSO",
    description: "Shaping the strategic direction and building the technology foundation that powers HerMidlife's AI-driven care.",
    gradient: "from-ocean to-accent",
    initials: "RK",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            The people behind HerMidlife
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            A team united by a shared belief: every Australian woman deserves access
            to expert perimenopause care.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mb-5 shadow-lg`}>
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
              <p className="text-sm text-foreground/60 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
