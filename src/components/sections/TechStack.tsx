import GlassTag from '@/components/glass/GlassTag'
import styles from './TechStack.module.css'

export interface TechStackProps {
  sectionTitle?: string
  sectionSubtitle?: string
}

const techCategories = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    category: 'Backend',
    technologies: ['Ruby on Rails', 'Node.js', 'Python', 'PHP', 'GraphQL', 'RESTful APIs'],
  },
  {
    category: 'Mobile',
    technologies: ['React Native', 'iOS', 'Android', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    category: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Heroku', 'Docker', 'CI/CD', 'Kubernetes', 'GitHub Actions'],
  },
  {
    category: 'Design & Tools',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
  },
]

export default function TechStack({
  sectionTitle = 'Technologies We Use',
  sectionSubtitle = 'Cutting-edge tools and frameworks for modern solutions',
}: TechStackProps) {
  return (
    <section className={styles.techStack}>
      <div className="container">
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div className={styles.header}>
            {sectionTitle && (
              <h2 className={styles.title}>
                {sectionTitle}
                <span className={styles.titleAccent}></span>
              </h2>
            )}
            {sectionSubtitle && <p className={styles.subtitle}>{sectionSubtitle}</p>}
          </div>
        )}

        {/* Tech Categories Grid */}
        <div className={styles.categoriesGrid}>
          {techCategories.map(item => (
            <div key={item.category} className={styles.categoryBlock}>
              <h3 className={styles.categoryTitle}>{item.category}</h3>
              <div className={styles.techList}>
                {item.technologies.map(tech => (
                  <GlassTag key={tech} variant="tech" size="small">
                    {tech}
                  </GlassTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
