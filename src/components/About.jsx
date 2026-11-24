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
            <img src="/profile.png" alt="Shiva Yadav" className="profile-photo" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <h3>Aspiring Full Stack Java Development Professional</h3>
            <div className="about-meta">
              <span className="meta-item">
                <MapPin size={16} />
                Prayagraj, Uttar Pradesh
              </span>
              <span className="meta-item">
                <Calendar size={16} />
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        <div className="about-description">
          <p>
            I'm a Java Full Stack developer with ongoing training at IT Vedant. I'm hardworking, 
            disciplined and quick to learn new technologies, with a strong interest in building 
            real-world web applications.
          </p>
          <p>
            I have built responsive web pages with HTML, CSS, Bootstrap and JavaScript, and 
            currently learning React to grow into a skilled Full Stack Developer. I have also 
            completed certifications in Java and Python from CADD Kampus.
          </p>
          <p>
            I have practical experience through projects like a Gym Website for a client, 
            Food Ordering Website, and ShopKart application. I'm open to opportunities and 
            eager to contribute to real-world projects.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h4>3+</h4>
            <span>Projects Completed</span>
          </div>
          <div className="stat">
            <h4>2</h4>
            <span>Certifications</span>
          </div>
          <div className="stat">
            <h4>500+</h4>
            <span>LinkedIn Connections</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
