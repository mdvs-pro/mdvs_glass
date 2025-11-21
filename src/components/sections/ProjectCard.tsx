import Image from 'next/image'
import GlassTag from '@/components/glass/GlassTag'
import LiquidGlassButton from '@/components/glass/LiquidGlassButton'
import styles from './ProjectCard.module.css'

export interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  url: string
  category?: string
  variant?: 'grid' | 'featured'
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  url,
  category: _category,
  variant = 'grid',
}: ProjectCardProps) {
  return (
    <div className={`${styles.projectCard} ${variant === 'featured' ? styles.featured : ''}`}>
      {/* Project Image */}
      <div className={styles.imageWrapper}>
        <Image src={`/mdvs_glass/${image}`} alt={title} width={600} height={400} className={styles.projectImage} />
        <div className={styles.imageOverlay}></div>
      </div>

      {/* Project Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        {/* Tech Stack Tags */}
        <div className={styles.techStack}>
          {tech.map((techItem, index) => (
            <GlassTag key={index} variant="tech" size="small">
              {techItem}
            </GlassTag>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <LiquidGlassButton href={url} variant="outline" size="small" fullWidth>
            View Project →
          </LiquidGlassButton>
        </div>
      </div>
    </div>
  )
}
