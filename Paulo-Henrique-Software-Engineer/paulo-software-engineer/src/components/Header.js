import { useEffect, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            &lt;<span>Paulo Henrique </span>/&gt;
          </a>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button key={item} className="nav-link" onClick={() => scrollToSection(item)}>
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
            ))}
          </nav>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
