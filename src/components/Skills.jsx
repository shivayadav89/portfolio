import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'JavaScript', level: 65 },
    ]
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 75 },
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 70 },
      { name: 'GitHub', level: 70 },
      { name: 'Devin AI', level: 65 },
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Communication Skills', level: 80 },
      { name: 'Team Player', level: 85 },
      { name: 'Quick Learner', level: 90 },
    ]
  }
]

const Skills = () => {
  return (
    <section className="section skills">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-grid">
            <div className="cert-card">
              <h4>Certificate of Completion in Java</h4>
              <p>CADD Kampus, Prayagraj | 160 Hours | Dec 2025 – Feb 2026</p>
              <p className="cert-details">Covered Core Java, OOP, collections, multithreading and exception handling</p>
            </div>
            <div className="cert-card">
              <h4>Certificate of Completion in Python Programming</h4>
              <p>CADD Kampus, Prayagraj | 80 Hours | Aug 2025 – Oct 2025</p>
              <p className="cert-details">Covered OOP, file handling, exception handling and multithreading</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
