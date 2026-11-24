import { motion } from 'framer-motion'
import { User, MapPin, Calendar } from 'lucide-react'

const About = () => {
  return (
    <section className="section about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-header">
          <div className="avatar">
            <User size={120} />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <h3>Full Stack Developer</h3>
            <div className="about-meta">
              <span className="meta-item">
                <MapPin size={16} />
                Kalyan, Maharashtra
              </span>
              <span className="meta-item">
                <Calendar size={16} />
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        <div className="about-description">
          <p>
            I'm a passionate Full Stack Developer with 5+ years of experience building 
            modern web applications. I specialize in React, Node.js, and cloud technologies, 
            with a focus on creating scalable and user-friendly solutions.
          </p>
          <p>
            My journey in tech started with a curiosity about how things work, which led me 
            to pursue a degree in Computer Science. Since then, I've worked with startups 
            and established companies, contributing to projects that impact millions of users.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge through technical writing and mentoring.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h4>5+</h4>
            <span>Years Experience</span>
          </div>
          <div className="stat">
            <h4>50+</h4>
            <span>Projects Completed</span>
          </div>
          <div className="stat">
            <h4>20+</h4>
            <span>Happy Clients</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
