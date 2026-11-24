import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'

const experience = [
  {
    company: 'Gym Website Project',
    position: 'Freelance Web Developer',
    duration: '2024',
    location: 'Ulhasnagar',
    responsibilities: [
      'Created a website for a local gym using Windsurf AI',
      'Presented a working demo to the client',
      'Received positive feedback from the client',
      'Practiced HTML, CSS, and JavaScript skills'
    ]
  }
]

const education = [
  {
    institution: 'Brij Bihari Sahai Inter College (State Board)',
    degree: 'Higher Secondary Certificate (12th), Science',
    duration: '2024',
    details: 'Percentage: 63%'
  },
  {
    institution: 'Brij Bihari Sahai Inter College',
    degree: 'Secondary School Certificate (10th)',
    duration: '2022',
    details: 'Percentage: 77%'
  }
]

const training = [
  {
    institution: 'IT Vedant',
    degree: 'Java Full Stack Development',
    duration: 'Ongoing',
    details: 'Learning frontend development with HTML, CSS, JavaScript and React. Built Food Ordering Website, ShopKart and Chalo-Chale Travel App during the course.'
  }
]

const Resume = () => {
  const handleDownload = () => {
    window.open('/resume.png', '_blank')
  }

  return (
    <section className="section resume">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="resume-header">
          <div>
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle">My professional journey</p>
          </div>
          <button className="download-btn" onClick={handleDownload}>
            <Download size={20} />
            View Resume
          </button>
        </div>

        <div className="resume-content">
          <motion.div
            className="resume-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="section-heading">
              <Briefcase size={24} />
              Work Experience
            </h3>
            <div className="experience-list">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4>{exp.position}</h4>
                    <span className="company">{exp.company}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="meta-item">
                      <Calendar size={16} />
                      {exp.duration}
                    </span>
                    <span className="meta-item">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="responsibilities">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="resume-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="section-heading">
              <GraduationCap size={24} />
              Education
            </h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="duration">{edu.duration}</p>
                  <p className="details">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="resume-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="section-heading">
              <Briefcase size={24} />
              Training
            </h3>
            <div className="education-list">
              {training.map((train, index) => (
                <div key={index} className="education-item">
                  <h4>{train.degree}</h4>
                  <p className="institution">{train.institution}</p>
                  <p className="duration">{train.duration}</p>
                  <p className="details">{train.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Resume
