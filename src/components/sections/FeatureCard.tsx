import { ReactNode } from 'react'
import GlassIcon from '@/components/glass/GlassIcon'
import styles from './FeatureCard.module.css'

export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  variant?: 'default' | 'compact'
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
}: FeatureCardProps) {
  return (
    <div className={`${styles.featureCard} ${variant === 'compact' ? styles.compact : ''}`}>
      <div className={styles.iconWrapper}>
        <GlassIcon icon={icon} size="medium" variant="circle" />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </div>
  )
}
