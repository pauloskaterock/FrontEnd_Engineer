const About = () => {
  const stats = [
    { number: '6+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Projetos Entregues' },
    { number: '7+', label: 'Tecnologias Dominadas' },
    { number: '100%', label: 'Foco em Qualidade' },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          Sobre <span>Mim</span>
        </h2>

        <div className="grid grid-2">
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Minha Jornada na Tecnologia</h3>
              <p className="card-text">
                👋 Olá, eu sou o Paulo Henrique. Sou um engenheiro de software especializado em
                criar soluções que simplificam, automatizam e potencializam operações. Minha
                experiência combina desenvolvimento de sistemas, pensamento analítico e automação
                inteligente para entregar produtos que realmente resolvem problemas. Ao longo da
                minha jornada, construí aplicações completas, automatizei processos críticos, reduzi
                custos operacionais e criei soluções escaláveis capazes de suportar alto volume e
                alta complexidade. Meu foco está sempre em transformar desafios técnicos em
                resultados concretos.
              </p>

              <div className="flex gap-4 mt-4 flex-wrap">
                <span className="code-inline">Python</span>
                <span className="code-inline">Ruby on Rails</span>
                <span className="code-inline">HTML-CSS</span>
                <span className="code-inline">React.js</span>
                <span className="code-inline">JavaScript</span>
                <span className="code-inline">PostgreSQL</span>
                <span className="code-inline">AWS</span>
                <span className="code-inline">Uipath</span>
                <span className="code-inline">Automation Anywhere</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Estatísticas</h3>
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        background: 'var(--accent-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {stat.number}
                    </div>
                    <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-3 mt-8">
          <div className="card">
            <div className="card-content text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h4 className="card-title">Performance</h4>
              <p className="card-text">
                Otimização de aplicações para máxima velocidade e eficiência
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h4 className="card-title">Segurança</h4>
              <p className="card-text">
                Desenvolvimento seguindo as melhores práticas de segurança
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
              <h4 className="card-title">Escalabilidade</h4>
              <p className="card-text">Arquiteturas preparadas para crescimento e alta demanda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
