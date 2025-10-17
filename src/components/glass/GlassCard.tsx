'use client'

import { MouseEvent, ReactNode, useState } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'branded' | 'bordered'
  enableHover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  variant = 'default',
  enableHover = true,
}: GlassCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enableHover) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const variantClass = {
    default: '',
    branded: 'glass-mdvs-branded',
    bordered: 'glass-card-bordered',
  }[variant]

  return (
    <div
      className={`glass-component glass-card ${variantClass} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass-background"></div>
      <div className="glass-filter"></div>
      <div className="glass-overlay"></div>
      <div
        className="glass-specular"
        style={
          enableHover && isHovering
            ? {
                background: `radial-gradient(
                  circle at ${mousePosition.x}px ${mousePosition.y}px,
                  rgba(255, 255, 255, 0.2) 0%,
                  rgba(255, 255, 255, 0.08) 30%,
                  rgba(255, 255, 255, 0) 60%
                )`,
              }
            : undefined
        }
      ></div>
      <div className="glass-content">{children}</div>
    </div>
  )
}
