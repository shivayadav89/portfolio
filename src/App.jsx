import { useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Mail, ExternalLink } from 'lucide-react'

// Lazy load components
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ]

  const renderSection = () => {
    const sectionMap = {
      about: <About />,
      projects: <Projects />,
      skills: <Skills />,
      resume: <Resume />,
      contact: <Contact />,
    }
    return sectionMap[activeSection]
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.h1 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h1>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={activeSection === section.id ? 'active' : ''}
                  onClick={() => {
                    setActiveSection(section.id)
                    setIsMenuOpen(false)
                  }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/shivayadav89" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/shiva-yadav-604355409/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:hello@example.com" aria-label="Email">
            <Mail />
          </a>
        </div>
        <p>&copy; 2024 Portfolio. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
