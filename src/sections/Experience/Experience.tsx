interface CareerItem {
  period: string
  title: string
  company: string
  bullets: string[]
  side: 'left' | 'right'
}

const careers: CareerItem[] = [
  {
    period: 'MAR 2025 — PRESENT',
    title: 'Backend Engineer',
    company: 'Everfit.io',
    bullets: [
      'Building and maintaining backend services with NestJS — including AI-powered features — designing RESTful APIs across a multi-team fitness platform.',
      'Adopting AI development tools to accelerate delivery and improve engineering productivity.',
      'Investigating client-reported issues and tracing root causes to improve production reliability.',
      'Proactively communicating with cross-functional teams to align on requirements and unblock delivery.',
    ],
    side: 'right',
  },
  {
    period: 'APR 2022 — MAR 2025',
    title: 'Backend Engineer',
    company: 'Enosta',
    bullets: [
      'Built and maintained backend APIs with NestJS and GraphQL across several product lines.',
      'Improved query performance through indexing strategies and execution plan optimization.',
      'Reduced API latency by implementing Redis caching, lowering database load under high traffic.',
      'Contributed to migrating a monolithic system toward a microservices architecture.',
      'Worked closely with frontend and product teams to define API contracts and ship features on time.',
    ],
    side: 'left',
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-background py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="font-rubik-sans font-bold text-3xl text-text">Experience.</h2>
          <p className="font-mono text-sm text-text-muted mt-2">
            A chronological progression of my professional experience.
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-card-border -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {careers.map((item) => (
              <div key={item.title + item.period} className="relative flex items-start gap-0">
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-btn mt-1.5 z-10" />

                {item.side === 'left' ? (
                  <>
                    {/* Left: meta */}
                    <div className="w-1/2 pr-10 text-right flex flex-col gap-1">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-widest">{item.period}</span>
                      <h3 className="font-rubik-sans font-bold text-lg text-text">{item.title}</h3>
                      <span className="font-mono text-sm text-text-muted">{item.company}</span>
                    </div>
                    {/* Right: bullets */}
                    <div className="w-1/2 pl-10 flex flex-col gap-2">
                      {item.bullets.map((b) => (
                        <p key={b} className="font-mono text-xs text-text-muted leading-relaxed flex gap-2">
                          <span className="text-btn flex-shrink-0">/</span>
                          {b}
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: bullets */}
                    <div className="w-1/2 pr-10 flex flex-col gap-2 items-end">
                      {item.bullets.map((b) => (
                        <p key={b} className="font-mono text-xs text-text-muted leading-relaxed flex gap-2 text-right">
                          {b}
                          <span className="text-btn flex-shrink-0">/</span>
                        </p>
                      ))}
                    </div>
                    {/* Right: meta */}
                    <div className="w-1/2 pl-10 flex flex-col gap-1">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-widest">{item.period}</span>
                      <h3 className="font-rubik-sans font-bold text-lg text-text">{item.title}</h3>
                      <span className="font-mono text-sm text-text-muted">{item.company}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
