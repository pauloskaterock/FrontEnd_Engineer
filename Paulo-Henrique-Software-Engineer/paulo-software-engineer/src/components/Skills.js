const Skills = () => {
  const skillCategories = [
    {
      // category: 'Backend',
      skills: [
        { name: 'Uipath', level: 'Avançado', icon: '🤖' },
        { name: 'Ruby', level: 'Avançado', icon: '⚡' },
        { name: 'Node.js', level: 'Basico', icon: '🟢' },
        { name: 'Python', level: 'Intermediário', icon: '🐍' },
        { name: 'PostgreSQL', level: 'Intermediario', icon: '🐘' },
        { name: 'Redis', level: 'Basico', icon: '🔴' },
        { name: 'Elasticsearch', level: 'Basico', icon: '🔍' },
      ],
    },
    {
      // category: 'Frontend',
      skills: [
        { name: 'React.js', level: 'Basico', icon: '⚛️' },
        { name: 'JavaScript', level: 'Intermediario', icon: '🟨' },
        { name: 'TypeScript', level: 'Basico', icon: '🔷' },
        { name: 'HTML5/CSS3', level: 'Avançado', icon: '🎨' },
        { name: 'Tailwind CSS', level: 'Basico', icon: '💨' },
      ],
    },
    {
      // category: 'DevOps  Tools & Automation',
      skills: [
        { name: 'Automation Anywhere', level: 'Avançado', icon: '🤖' },
        { name: 'Docker', level: 'Intermediário', icon: '🐳' },
        { name: 'AWS', level: 'Basico', icon: '☁️' },
        { name: 'Git', level: 'Avançado', icon: '📚' },
        { name: 'Linux', level: 'Intermediário', icon: '🐧' },
        { name: 'CI/CD', level: 'Intermediário', icon: '🔄' },
        { name: 'Testing', level: 'Avançado', icon: '🧪' },
      ],
    },
  ]

  return (
    <section id="skills" className="section" style={{ backgroundColor: '#111' }}>
      <div className="container">
        <h2 className="section-title">
          Minhas <span>Skills</span>
        </h2>
        <p className="section-subtitle">
          Tecnologias e ferramentas que domino e utilizo no dia a dia
        </p>

        <div className="grid grid-3">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card">
              <div className="card-content">
                <h3 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  {category.category}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-level">{skill.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            marginTop: '3rem',
            textAlign: 'center',
          }}
        >
          <h3
            style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}
          >
            🎯 Metodologia de Trabalho
          </h3>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>
            Desenvolvimento ágil • Code reviews • Testes automatizados • Documentação técnica •
            Deploy contínuo
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
