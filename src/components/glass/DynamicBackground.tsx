/**
 * Dynamic Background Component
 * Animated background with neutral image and liquid glass decorations
 */

import React, { ReactNode } from 'react'
import styles from './DynamicBackground.module.css'

interface DynamicBackgroundProps {
  children: ReactNode
  backgroundImage?: string
  showDecorations?: boolean
}

export default function DynamicBackground({
  children,
  backgroundImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center',
  showDecorations = true,
}: DynamicBackgroundProps) {
  return (
    <div
      className={styles.dynamicBackground}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      {/* Decorative Elements */}
      {showDecorations && (
        <>
          {/* Glass Orbs */}
          <div className="glass-orb glass-orb-1" />
          <div className="glass-orb glass-orb-2" />
          <div className="glass-orb glass-orb-3" />

          {/* Liquid Elements */}
          <div className="liquid-element liquid-element-1" />
          <div className="liquid-element liquid-element-2" />
          <div className="liquid-element liquid-element-3" />

          {/* Glass Shapes */}
          <div className="glass-shape glass-shape-1" />
          <div className="glass-shape glass-shape-2" />

          {/* Liquid Circles */}
          <div className="liquid-circle liquid-circle-1" />
          <div className="liquid-circle liquid-circle-2" />
          <div className="liquid-circle liquid-circle-3" />
          <div className="liquid-circle liquid-circle-4" />
        </>
      )}

      {/* Content */}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
