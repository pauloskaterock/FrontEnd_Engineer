const Experience = () => {
  const technicalExperience = [
    {
      // period: '2021 - 2025',
      focus: 'Automação & RPA',
      technologies: ['Python', 'Automation Anywhere', 'UiPath', 'AWS', 'Oracle Cloud', 'SQL'],
      achievements: [
        'Desenvolvimento e manutenção de automações corporativas complexas',
        'Criação de scripts de monitoramento e alertas automáticos',
        'Migração e integração de automações para ambientes Cloud',
        'Implementação de frameworks reutilizáveis e análise de logs',
        'Diagnóstico e correção de falhas em robôs e integrações de dados',
      ],
      icon: '🤖',
    },
    {
      // period: '2023 - 2024',
      focus: 'Full Stack Development',
      technologies: ['Ruby on Rails', 'React', 'JavaScript', 'PostgreSQL', 'Redis', 'CI/CD'],
      achievements: [
        'Refatoração de aplicações Ruby on Rails com foco em performance',
        'Implementação de dashboards e métricas de observabilidade',
        'Desenvolvimento e manutenção de APIs RESTful',
        'Suporte a pipelines CI/CD e integrações DevOps',
        'Otimização de queries e performance de aplicações',
      ],
      icon: '⚡',
    },
    {
      // period: '2017 - 2020',
      focus: 'Educação Tecnológica',
      technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Arduino', 'Games 2D'],
      achievements: [
        'Ensino de lógica de programação e desenvolvimento web',
        'Desenvolvimento de projetos educacionais inovadores',
        'Instrução em Python, Arduino e automação residencial',
        'Criação de currículos técnicos para formação de desenvolvedores',
        'Mentoria em projetos de robótica e programação criativa',
      ],
      icon: '🎓',
    },
  ]

  const skillsSummary = {
    'Backend & Automação': ['Python', 'Ruby on Rails', 'Automation Anywhere', 'UiPath', 'SQL'],
    'Frontend & Web': ['React', 'JavaScript', 'HTML5/CSS3', 'Ruby on Rails'],
    'Cloud & DevOps': ['AWS', 'Oracle Cloud', 'CI/CD', 'Docker', 'Git'],
    'Ferramentas & Outros': ['Arduino', 'Games 2D', 'PostgreSQL', 'Redis'],
  }

  return (
    <section id="experience" className="section" style={{ backgroundColor: '#111' }}>
      <div className="container">
        <h2 className="section-title">
          Experiência <span>Técnica</span>
        </h2>
        <p className="section-subtitle">
          Consolidando anos de desenvolvimento, automação e inovação tecnológica
        </p>

        {/* Experiência Principal */}
        <div className="grid grid-3">
          {technicalExperience.map((exp, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ fontSize: '2rem' }}>{exp.icon}</div>
                  <div>
                    <div style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>
                      {exp.period}
                    </div>
                    <h3 className="card-title" style={{ margin: 0 }}>
                      {exp.focus}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap mb-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="code-inline">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul style={{ color: 'var(--text-gray)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} style={{ marginBottom: '0.5rem' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo de Skills */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            marginTop: '3rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            🛠️ Stack Tecnológica Consolidada
          </h3>

          <div className="grid grid-4">
            {Object.entries(skillsSummary).map(([category, skills], index) => (
              <div key={index}>
                <h4
                  style={{
                    color: 'var(--primary-green)',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                  }}
                >
                  {category}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      style={{
                        color: 'var(--text-light)',
                        fontSize: '0.9rem',
                        padding: '0.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '6px',
                        textAlign: 'center',
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas de Impacto */}
        <div className="grid grid-4" style={{ marginTop: '3rem', gap: '1.5rem' }}>
          <div className="text-center">
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}
            >
              {/* 4+ */}
            </div>
            {/* <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Anos em Automação</div> */}
          </div>

          <div className="text-center">
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}
            >
              {/* 15+ */}
            </div>
            <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
              {/* Tecnologias Dominadas */}
            </div>
          </div>

          <div className="text-center">
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}
            >
              {/* 3 */}
            </div>
            {/* <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
              Áreas de Especialização
            </div> */}
          </div>

          <div className="text-center">
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}
            >
              {/* 100% */}
            </div>
            {/* <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Foco em Qualidade</div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
