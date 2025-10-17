'use client'

import { ReactNode } from 'react'
import styles from './LiquidGlassButton.module.css'

/**
 * LiquidGlassButton - Premium button with liquid glass effect
 *
 * @example
 * <LiquidGlassButton variant="primary" size="large">
 *   Click Me
 * </LiquidGlassButton>
 */

interface LiquidGlassButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  backgroundImage?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export default function LiquidGlassButton({
  children,
  href,
  onClick,
  backgroundImage,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
}: LiquidGlassButtonProps) {
  const Component = href ? 'a' : 'button'

  const variantClass = {
    primary: styles.variantPrimary,
    secondary: styles.variantSecondary,
    outline: styles.variantOutline,
  }[variant]

  const sizeClass = {
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
    large: styles.sizeLarge,
  }[size]

  const classNames = [
    styles.liquidGlassWrapper,
    variantClass,
    sizeClass,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    loading && styles.loading,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }
    onClick?.()
  }

  return (
    <Component
      className={classNames}
      href={!disabled && !loading ? href : undefined}
      onClick={handleClick}
      {...(href && !disabled && !loading
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      {...(Component === 'button' ? { type: 'button', disabled: disabled || loading } : {})}
    >
      <div
        className={styles.liquidGlassBackground}
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
              }
            : undefined
        }
      ></div>
      <div className={styles.liquidGlassEffect}></div>
      <div className={styles.liquidGlassTint}></div>
      <div className={styles.liquidGlassShine}></div>
      <div className={styles.liquidGlassText}>
        {loading && (
          <span className={styles.spinner} aria-label="Loading"></span>
        )}
        {!loading && icon && iconPosition === 'left' && (
          <span className={styles.icon}>{icon}</span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className={styles.icon}>{icon}</span>
        )}
      </div>
    </Component>
  )
}
