const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openLinkedIn = () => {
    window.open('www.linkedin.com/in/pauloengenharia5', '_blank')
  }

  const openGitHub = () => {
    window.open('https://github.com/pauloskaterock', '_blank')
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Paulo Henrique Engenheiro de <span>Software</span>
          </h1>

          <p className="hero-subtitle">
            Especialista em <span className="code-inline">Ruby on Rails</span>,
            <span className="code-inline"> React</span> e
            <span className="code-inline"> JavaScript</span>
          </p>

          <p className="hero-description">
            Transformo ideias em soluções digitais robustas e escaláveis, combinando código limpo
            com as melhores práticas de engenharia.
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              Ver Projetos
            </button>
            <button className="btn btn-secondary" onClick={openLinkedIn}>
              LinkedIn
            </button>
            <button className="btn btn-secondary" onClick={openGitHub}>
              GitHub
            </button>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <button
            onClick={() => scrollToSection('about')}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              animation: 'bounce 2s infinite',
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

// src/components/Hero.js

// const Hero = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   const openLinkedIn = () => {
//     window.open('https://www.linkedin.com/in/pauloengenharia5', '_blank')
//   }

//   const openGitHub = () => {
//     window.open('https://github.com/pauloskaterock', '_blank')
//   }

//   // Gerar partículas metálicas
//   const renderParticles = () => {
//     const particles = []
//     for (let i = 0; i < 15; i++) {
//       particles.push(
//         <div
//           key={i}
//           className="metal-particle"
//           style={{
//             left: `${Math.random() * 100}%`,
//             width: `${Math.random() * 3 + 1}px`,
//             height: `${Math.random() * 3 + 1}px`,
//             animationDelay: `${Math.random() * 6}s`,
//             animationDuration: `${Math.random() * 3 + 4}s`,
//           }}
//         />
//       )
//     }
//     return particles
//   }

//   return (
//     <section id="home" className="hero-metal">
//       <div className="metal-particles">{renderParticles()}</div>

//       {/* Efeito de scanner */}
//       <div className="metal-scanner"></div>

//       <div className="container">
//         <div className="hero-content-metal">
//           {/* Nome com estilo metal pesado */}
//           <h1 className="metal-title">
//             PAULO<span className="metal-accent">HENRIQUE</span>
//           </h1>

//           {/* Título estilo placa metálica */}
//           <div className="metal-plate">
//             <h2 className="metal-subtitle">
//               ENGENHEIRO DE <span className="metal-highlight">SOFTWARE</span>
//             </h2>
//           </div>

//           {/* Especialidades estilo etiqueta industrial */}
//           <p className="metal-specialties">
//             Especialista em
//             <span className="tech-tag ruby">Ruby on Rails</span>
//             <span className="tech-tag react">React</span>
//             <span className="tech-tag js">JavaScript</span>
//           </p>

//           {/* Descrição */}
//           <p className="metal-description">
//             Transformo ideias em soluções digitais robustas e escaláveis, combinando código limpo
//             com as melhores práticas de engenharia.
//           </p>

//           {/* Botões estilo controles metálicos */}
//           <div className="metal-buttons">
//             <button
//               className="metal-btn metal-btn-primary"
//               onClick={() => scrollToSection('projects')}
//             >
//               <span className="btn-text">Ver Projetos</span>
//               <span className="btn-glow"></span>
//             </button>

//             <button className="metal-btn metal-btn-secondary" onClick={openLinkedIn}>
//               <span className="btn-text">LinkedIn</span>
//               <span className="btn-glow"></span>
//             </button>

//             <button className="metal-btn metal-btn-secondary" onClick={openGitHub}>
//               <span className="btn-text">GitHub</span>
//               <span className="btn-glow"></span>
//             </button>
//           </div>
//         </div>

//         {/* Seta para baixo */}
//         <div className="metal-scroll-indicator">
//           <button onClick={() => scrollToSection('about')} className="metal-scroll-btn">
//             <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
//               <path
//                 stroke="#ffd700"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={3}
//                 d="M12 5v14m0 0l7-7m-7 7l-7-7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
