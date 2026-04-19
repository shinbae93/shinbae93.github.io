interface SkillGroup {
  category: string
  items: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    category: 'Frameworks & APIs',
    items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'DynamoDB', 'Redis'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Docker'],
  },
  {
    category: 'Tools',
    items: ['Git (GitHub / GitLab)'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-section-alt py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        <div className="flex-shrink-0 md:w-56">
          <h2 className="font-rubik-sans font-bold text-3xl text-text leading-tight">Skills.</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{group.category}</div>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-sm text-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-btn inline-block flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
