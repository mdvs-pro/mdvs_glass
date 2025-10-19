import ProjectCard from './ProjectCard'
import { Project } from '@/lib/data/projects'
import styles from './PortfolioShowcase.module.css'

export interface PortfolioShowcaseProps {
  projects: Project[]
  sectionTitle?: string
  sectionSubtitle?: string
  limit?: number
}

export default function PortfolioShowcase({
  projects,
  sectionTitle = 'Featured Projects',
  sectionSubtitle = 'Our latest work showcasing innovation and excellence',
  limit,
}: PortfolioShowcaseProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section className={styles.portfolioShowcase}>
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

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              url={project.url}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
