'use client'

import { ReactNode, InputHTMLAttributes } from 'react'
import styles from './GlassInput.module.css'

/**
 * GlassInput - Input field with glass effect
 *
 * @example
 * <GlassInput
 *   label="Email"
 *   type="email"
 *   placeholder="your@email.com"
 * />
 */

interface GlassInputProps extends Omit<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  variant?: 'default' | 'filled'
  multiline?: boolean
  rows?: number
}

export default function GlassInput({
  label,
  error,
  helperText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  variant = 'default',
  multiline = false,
  rows = 4,
  className = '',
  ...inputProps
}: GlassInputProps) {
  const Component = multiline ? 'textarea' : 'input'

  const wrapperClasses = [
    styles.glassInputWrapper,
    fullWidth && styles.fullWidth,
    error && styles.hasError,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const containerClasses = [
    styles.glassInputContainer,
    variant === 'filled' && styles.variantFilled,
    icon && styles.hasIcon,
    icon && iconPosition === 'right' && styles.iconRight,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={styles.label}>
          {label}
          {inputProps.required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={containerClasses}>
        <div className={styles.glassBackground}></div>
        <div className={styles.glassFilter}></div>
        <div className={styles.glassOverlay}></div>
        <div className={styles.glassShine}></div>

        <div className={styles.inputContent}>
          {icon && iconPosition === 'left' && (
            <span className={styles.icon}>{icon}</span>
          )}

          <Component
            className={styles.input}
            {...(multiline ? { rows } : {})}
            {...inputProps}
          />

          {icon && iconPosition === 'right' && (
            <span className={styles.icon}>{icon}</span>
          )}
        </div>
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
      {!error && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
}
