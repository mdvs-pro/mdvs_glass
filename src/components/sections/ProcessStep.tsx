import { ReactNode } from 'react'
import GlassIcon from '@/components/glass/GlassIcon'
import styles from './ProcessStep.module.css'

export interface ProcessStepProps {
  number: number
  icon: ReactNode
  title: string
  description: string
  isLast?: boolean
}

export default function ProcessStep({
  number,
  icon,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className={styles.processStep}>
      {/* Connector Line */}
      {!isLast && <div className={styles.connector}></div>}

      {/* Step Number Badge */}
      <div className={styles.numberBadge}>
        <span className={styles.number}>{number}</span>
      </div>

      {/* Icon */}
      <div className={styles.iconWrapper}>
        <GlassIcon icon={icon} size="large" variant="circle" />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
