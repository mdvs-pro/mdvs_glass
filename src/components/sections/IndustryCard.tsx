import { ReactNode } from 'react'
import GlassIcon from '@/components/glass/GlassIcon'
import GlassTag from '@/components/glass/GlassTag'
import styles from './IndustryCard.module.css'

export interface IndustryCardProps {
  icon: ReactNode
  name: string
  description: string
  projectCount?: number
  technologies: string[]
  href: string
}

export default function IndustryCard({
  icon,
  name,
  description,
  projectCount,
  technologies,
  href,
}: IndustryCardProps) {
  return (
    <a href={href} className={styles.industryCard}>
      <div className={styles.iconWrapper}>
        <GlassIcon icon={icon} size="large" variant="circle" />
      </div>

      <h3 className={styles.name}>{name}</h3>

      {projectCount && (
        <div className={styles.projectCount}>{projectCount}+ Projects</div>
      )}

      <p className={styles.description}>{description}</p>

      {/* Tech Stack Tags */}
      <div className={styles.techStack}>
        {technologies.slice(0, 3).map((tech, index) => (
          <GlassTag key={index} variant="tech" size="small">
            {tech}
          </GlassTag>
        ))}
        {technologies.length > 3 && (
          <GlassTag variant="secondary" size="small">
            +{technologies.length - 3}
          </GlassTag>
        )}
      </div>

      {/* Arrow Indicator */}
      <div className={styles.arrow}>→</div>
    </a>
  )
}
