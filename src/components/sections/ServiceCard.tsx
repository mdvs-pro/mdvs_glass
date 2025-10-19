import { ReactNode } from 'react'
import GlassIcon from '@/components/glass/GlassIcon'
import LiquidGlassButton from '@/components/glass/LiquidGlassButton'
import styles from './ServiceCard.module.css'

export interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  cta: {
    text: string
    href: string
  }
  variant?: 'default' | 'highlighted'
  backgroundImage?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  cta,
  variant = 'default',
  backgroundImage,
}: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconWrapper}>
        <GlassIcon icon={icon} size="large" variant="circle" />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <span className={styles.featureBullet}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={styles.ctaWrapper}>
        <LiquidGlassButton
          href={cta.href}
          variant="outline"
          size="medium"
          fullWidth
        >
          {cta.text}
        </LiquidGlassButton>
      </div>
    </div>
  )
}
