import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'

const experience = [
  {
    company: 'Tech Innovation Inc.',
    position: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    location: 'Kalyan, Maharashtra',
    responsibilities: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored team of 5 junior developers',
      'Reduced application load time by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    company: 'Digital Solutions Co.',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained multiple client-facing web applications',
      'Collaborated with design team to implement responsive UIs',
      'Integrated third-party APIs for payment and authentication',
      'Participated in code reviews and technical planning'
    ]
  },
  {
    company: 'StartUp Labs',
    position: 'Junior Developer',
    duration: '2019 - 2020',
    location: 'Austin, TX',
    responsibilities: [
      'Built React components for customer-facing features',
      'Assisted in database design and optimization',
      'Wrote unit and integration tests',
      'Contributed to agile development processes'
    ]
  }
]

const education = [
  {
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2015 - 2019',
    details: 'GPA: 3.8/4.0, Dean\'s List, Computer Science Honor Society'
  },
  {
    institution: 'FreeCodeCamp',
    degree: 'Full Stack Web Development Certification',
    duration: '2018',
    details: 'Completed 300+ hours of curriculum in web development'
  }
]

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would download a PDF resume
    alert('Resume download functionality - Add your PDF resume to public folder')
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
            Download Resume
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
        </div>
      </motion.div>
    </section>
  )
}

export default Resume
