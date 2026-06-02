const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              &lt;<span> PauloSkateRock</span>/&gt;
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1rem', lineHeight: '1.6' }}>
              Engenheiro de Software especializado em criar soluções digitais inovadoras com Ruby on
              Rails, React e as melhores práticas de desenvolvimento.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open('https://calendly.com/')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-gray)',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.color = 'var(--primary-blue)')}
                onMouseOut={(e) => (e.target.style.color = 'var(--text-gray)')}
              >
                🐙
              </button>
              <button
                onClick={() => window.open('www.linkedin.com/in/pauloengenharia5')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-gray)',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.color = 'var(--primary-blue)')}
                onMouseOut={(e) => (e.target.style.color = 'var(--text-gray)')}
              >
                💼
              </button>
              <button
                onClick={() => window.open('pauloengenharia5@yahoo.com')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-gray)',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.color = 'var(--primary-green)')}
                onMouseOut={(e) => (e.target.style.color = 'var(--text-gray)')}
              >
                📧
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h4 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Navegação</h4>
            <ul className="footer-links">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    style={{
                      color: 'var(--text-gray)',
                      textDecoration: 'none',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      padding: '0.25rem 0',
                    }}
                  >
                    {item === 'home'
                      ? 'Início'
                      : item === 'about'
                      ? 'Sobre'
                      : item === 'skills'
                      ? 'Skills'
                      : item === 'projects'
                      ? 'Projetos'
                      : item === 'experience'
                      ? 'Experiência'
                      : 'Contato'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Tecnologias</h4>
            <div style={{ color: 'var(--text-gray)', lineHeight: '1.8', fontSize: '0.9rem' }}>
              <p>
                <strong>Backend:</strong> Ruby on Rails, Node.js
              </p>
              <p>
                <strong>Frontend:</strong> React, JavaScript, TypeScript
              </p>
              <p>
                <strong>Database:</strong> PostgreSQL, MySQL, Redis
              </p>
              <p>
                <strong>DevOps:</strong> Docker, AWS, Git, Linux
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Desenvolvido por Paulo Henrique ☕. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
