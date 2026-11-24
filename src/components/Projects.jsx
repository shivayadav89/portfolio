import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Gym Website',
    description: 'Client demo project for a local gym in Ulhasnagar. Created using Windsurf AI and presented a working demo to the client, who gave positive feedback.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shivayadav89',
    image: null
  },
  {
    id: 2,
    title: 'Food Ordering Website',
    description: '5-page responsive food ordering website developed during Java Full Stack training at IT Vedant to practice frontend development.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Font Awesome'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shivayadav89',
    image: null
  },
  {
    id: 3,
    title: 'ShopKart',
    description: 'Online shopping web application built with React and JavaScript as part of the Java Full Stack development training.',
    technologies: ['React', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shivayadav89',
    image: null
  }
]

const Projects = () => {
  return (
    <section className="section projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <Code2 size={80} />
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
