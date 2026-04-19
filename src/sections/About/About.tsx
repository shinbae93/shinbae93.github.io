const yearsOfExperience = new Date().getFullYear() - 2022

export function About() {
  return (
    <section id="about" className="bg-section-alt py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        <div className="flex-shrink-0 md:w-56">
          <h2 className="font-rubik-sans font-bold text-3xl text-text leading-tight">A Bit About Me.</h2>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="font-mono text-sm text-text-muted leading-relaxed">
            Backend engineer with {yearsOfExperience}+ years of experience building and maintaining scalable web
            systems. I focus on reliability, performance, and writing code that's easy to understand and operate in
            production.
          </p>
          <p className="font-mono text-sm text-text-muted leading-relaxed">
            I've worked with both monolithic and microservices architectures, improving database performance and
            contributing to systems that handle real-world traffic. I care about clean design, practical solutions, and
            continuous improvement.
          </p>
        </div>
      </div>
    </section>
  )
}
