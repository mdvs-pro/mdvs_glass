import { ReactNode } from 'react'
import styles from './GlassIcon.module.css'

interface GlassIconProps {
  icon: ReactNode
  size?: 'small' | 'medium' | 'large'
  variant?: 'circle' | 'square' | 'none'
  color?: string
  className?: string
}

export default function GlassIcon({
  icon,
  size = 'medium',
  variant = 'circle',
  color,
  className = '',
}: GlassIconProps) {
  const wrapperClass = [
    styles.glassIcon,
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const iconStyle = color ? { color } : undefined

  return (
    <div className={wrapperClass}>
      {variant !== 'none' && (
        <>
          {/* Glass layers */}
          <div className={styles.glassBase}></div>
          <div className={styles.glassFilter}></div>
          <div className={styles.glassOverlay}></div>
          <div className={styles.glassBorder}></div>
        </>
      )}
      <div className={styles.iconContent} style={iconStyle}>
        {icon}
      </div>
    </div>
  )
}
