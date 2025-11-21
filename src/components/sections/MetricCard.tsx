'use client'

import { ReactNode, useEffect, useState } from 'react'
import styles from './MetricCard.module.css'

/**
 * MetricCard - Statistic display card with optional animated counter
 *
 * @example
 * <MetricCard
 *   icon={<IconComponent />}
 *   value="100+"
 *   label="Projects Completed"
 *   animated
 * />
 */

interface MetricCardProps {
  icon?: ReactNode
  value: string | number
  label: string
  suffix?: string
  animated?: boolean
  animationDuration?: number
}

export default function MetricCard({
  icon,
  value,
  label,
  suffix = '',
  animated = false,
  animationDuration = 2000,
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue =
    typeof value === 'number' ? value : parseInt(value.toString().replace(/\D/g, ''), 10)

  useEffect(() => {
    if (!animated || isNaN(numericValue)) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / animationDuration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(easeOut * numericValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [animated, numericValue, animationDuration])

  const formattedValue =
    animated && !isNaN(numericValue) ? displayValue.toString() : value.toString()

  return (
    <div className={styles.metricCard}>
      <div className={styles.metricContent}>
        {icon && <div className={styles.metricIcon}>{icon}</div>}
        <div className={styles.metricValue}>
          {formattedValue}
          {suffix}
        </div>
        <div className={styles.metricLabel}>{label}</div>
      </div>
    </div>
  )
}
