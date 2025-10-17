'use client'

import { ReactNode } from 'react'
import styles from './GlassTag.module.css'

/**
 * GlassTag - Badge/Tag component with glass effect
 *
 * @example
 * <GlassTag variant="primary">React</GlassTag>
 */

interface GlassTagProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'tech'
  size?: 'small' | 'medium'
  icon?: ReactNode
  removable?: boolean
  onRemove?: () => void
  onClick?: () => void
  backgroundImage?: string
  className?: string
}

export default function GlassTag({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  removable = false,
  onRemove,
  onClick,
  backgroundImage,
  className = '',
}: GlassTagProps) {
  const variantClass = {
    primary: styles.variantPrimary,
    secondary: styles.variantSecondary,
    outline: styles.variantOutline,
    tech: styles.variantTech,
  }[variant]

  const sizeClass = {
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
  }[size]

  const classes = [
    styles.glassTag,
    variantClass,
    sizeClass,
    onClick && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} onClick={onClick}>
      <span
        className={styles.glassBackground}
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
              }
            : undefined
        }
      ></span>
      <span className={styles.glassFilter}></span>
      <span className={styles.glassOverlay}></span>
      <span className={styles.glassShine}></span>

      <span className={styles.content}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.text}>{children}</span>
        {removable && (
          <button
            className={styles.removeButton}
            onClick={(e) => {
              e.stopPropagation()
              onRemove?.()
            }}
            aria-label="Remove"
          >
            ×
          </button>
        )}
      </span>
    </span>
  )
}
