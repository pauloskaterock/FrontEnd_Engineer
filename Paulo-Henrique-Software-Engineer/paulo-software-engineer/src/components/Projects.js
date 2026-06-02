const Projects = () => {
  const projects = [
    {
      title: 'Sistema de E-commerce',
      description:
        'Plataforma completa de e-commerce com Ruby on Rails, React e PostgreSQL. Inclui sistema de pagamentos, gestão de estoque e dashboard administrativo.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis', 'AWS'],
      github: 'https://github.com/seu-usuario/ecommerce',
      live: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      title: 'API RESTful - Sistema Financeiro',
      description:
        'API robusta para gestão financeira com autenticação JWT, documentação Swagger e testes completos. Suporte a múltiplas moedas e relatórios.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Ruby on Rails', 'JWT', 'RSpec', 'Swagger', 'Docker'],
      github: 'https://github.com/seu-usuario/finance-api',
      live: null,
      featured: true,
    },
    {
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo para análise de dados em tempo real com gráficos dinâmicos e exportação de relatórios.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/seu-usuario/analytics-dashboard',
      live: 'https://analytics-demo.netlify.app',
      featured: false,
    },
    {
      title: 'App de Task Management',
      description:
        'Aplicativo de gerenciamento de tarefas com drag-and-drop, notificações em tempo real e colaboração em equipe.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      technologies: ['Vue.js', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/seu-usuario/task-manager',
      live: 'https://taskapp-demo.vercel.app',
      featured: false,
    },
    {
      title: 'Microserviços - Arquitetura',
      description:
        'Implementação de arquitetura de microserviços com comunicação assíncrona, API Gateway e containerização.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      technologies: ['Docker', 'Kubernetes', 'RabbitMQ', 'Node.js', 'Redis'],
      github: 'https://github.com/seu-usuario/microservices-demo',
      live: null,
      featured: false,
    },
    {
      title: 'Portfolio Pessoal',
      description:
        'Site portfolio responsivo e moderno desenvolvido com Ruby on Rails, React e CSS puro, seguindo melhores práticas.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      technologies: ['React', 'CSS3', 'Netlify', 'Git', 'Responsive Design'],
      github: 'https://github.com/pauloskaterock/Paulo-Henrique-Software-Engineer',
      live: 'https:/paulo-software-engineer.netlify.app',
      featured: false,
    },
  ]

  const openLink = (url) => {
    if (url) window.open(url, '_blank')
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Veja Meus <span>Projetos</span>
        </h2>
        <p className="section-subtitle">
          Soluções reais desenvolvidas com as melhores práticas de engenharia
        </p>

        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="card">
              {project.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--accent-gradient)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    zIndex: 2,
                  }}
                >
                  ⭐ Destaque
                </div>
              )}

              <img src={project.image} alt={project.title} className="card-img" />

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="code-inline">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openLink(project.github)}
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    GitHub
                  </button>

                  {project.live && (
                    <button
                      onClick={() => openLink(project.live)}
                      className="btn btn-secondary"
                      style={{ flex: 1 }}
                    >
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => window.open('https://github.com/pauloskaterock ')}
            className="btn btn-primary"
          >
            Ver Mais no GitHub
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
