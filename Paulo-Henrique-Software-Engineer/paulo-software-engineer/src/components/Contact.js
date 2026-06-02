const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      // detail: 'pauloengenharia5@yahoo.com',
      action: () => window.open('https://mail.yahoo.com/'),
      buttonText: 'Enviar Email',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      // detail: 'www.linkedin.com/in/pauloengenharia5',
      action: () => window.open('www.linkedin.com/in/pauloengenharia5'),
      buttonText: 'Conectar',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      // detail: '@seu-usuario',
      action: () => window.open('https://github.com/pauloskaterock'),
      buttonText: 'Seguir',
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      // detail: '(11) 99999-9999',
      action: () => window.open('https://wa.me/5511972114604'),
      buttonText: 'Conversar',
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          Vamos <span>Conversar</span>
        </h2>
        <p className="section-subtitle">Estou disponível para novos projetos e oportunidades</p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">{method.icon}</div>
              <h3 className="contact-title">{method.title}</h3>
              <p className="contact-text">{method.detail}</p>
              <button onClick={method.action} className="btn btn-primary" style={{ width: '100%' }}>
                {method.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            marginTop: '2rem',
          }}
        >
          <div className="text-center">
            <h3
              style={{ fontSize: '2rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}
            >
              🚀 Pronto para o Próximo Projeto
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Vamos transformar sua ideia em uma solução digital de alta qualidade
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <button
                onClick={() => window.open('mailto:pauloengenharia5@yahoo.com')}
                className="btn btn-primary"
              >
                Iniciar Projeto
              </button>
              <button
                onClick={() => window.open('https://calendly.com/', '_blank')}
                style={{
                  background: 'transparent',
                  color: 'var(--primary-green)',
                  border: '2px solid var(--primary-green)',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--primary-green)'
                  e.target.style.color = 'white'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = 'var(--primary-green)'
                }}
              >
                Agendar Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
