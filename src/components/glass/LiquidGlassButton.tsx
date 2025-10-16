import { ReactNode } from 'react'
import styles from './LiquidGlassButton.module.css'

interface LiquidGlassButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
}

export default function LiquidGlassButton({ children, href, onClick }: LiquidGlassButtonProps) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      className={styles.liquidGlassWrapper}
      href={href}
      onClick={onClick}
      {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className={styles.liquidGlassEffect}></div>
      <div className={styles.liquidGlassTint}></div>
      <div className={styles.liquidGlassShine}></div>
      <div className={styles.liquidGlassText}>{children}</div>
    </Component>
  )
}
