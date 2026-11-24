import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Vue.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Next.js', level: 82 },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Express', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Linux', level: 85 },
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Agile/Scrum', level: 88 },
      { name: 'Project Management', level: 82 },
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
              <h4>AWS Certified Developer</h4>
              <p>Amazon Web Services - 2023</p>
            </div>
            <div className="cert-card">
              <h4>Google Cloud Professional</h4>
              <p>Google Cloud - 2022</p>
            </div>
            <div className="cert-card">
              <h4>Meta Front-End Developer</h4>
              <p>Meta - 2023</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
