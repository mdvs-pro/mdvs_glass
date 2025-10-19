/**
 * Liquid Glass Wrapper Component
 * 4-layer structure: Effect → Tint → Shine → Content
 * Based on liquidglass-kit.dev implementation
 */

import React, { ReactNode } from 'react'
import styles from './LiquidGlassWrapper.module.css'

interface LiquidGlassWrapperProps {
  children: ReactNode
  className?: string
  borderRadius?: string
  backgroundColor?: string
  distortion?: 'none' | 'subtle' | 'normal' | 'strong'
  hover?: boolean
  onClick?: () => void
  style?: React.CSSProperties
}

export default function LiquidGlassWrapper({
  children,
  className = '',
  borderRadius = '20px',
  backgroundColor = 'rgba(255, 255, 255, 0.05)',
  distortion = 'normal',
  hover = true,
  onClick,
  style = {},
}: LiquidGlassWrapperProps) {
  const getFilterId = () => {
    switch (distortion) {
      case 'none':
        return null
      case 'subtle':
        return 'glass-distortion-subtle'
      case 'strong':
        return 'glass-distortion-strong'
      default:
        return 'glass-distortion'
    }
  }

  const filterId = getFilterId()

  const containerStyle: React.CSSProperties = {
    borderRadius,
    backgroundColor,
    ...style,
  }

  const layerStyle: React.CSSProperties = {
    borderRadius,
  }

  return (
    <div
      className={`${styles.liquidGlassWrapper} ${hover ? styles.hover : ''} ${className}`}
      style={containerStyle}
      onClick={onClick}
    >
      {/* Layer 1: Glass Effect with Distortion */}
      <div
        className={styles.liquidGlassEffect}
        style={{
          ...layerStyle,
          filter: filterId ? `url(#${filterId})` : 'none',
        }}
      />

      {/* Layer 2: Tint Overlay */}
      <div
        className={styles.liquidGlassTint}
        style={layerStyle}
      />

      {/* Layer 3: Specular Highlights */}
      <div
        className={styles.liquidGlassShine}
        style={layerStyle}
      />

      {/* Layer 4: Content */}
      <div className={styles.liquidGlassContent}>
        {children}
      </div>
    </div>
  )
}
