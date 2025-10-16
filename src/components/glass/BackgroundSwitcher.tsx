'use client'

import { useEffect, useState } from 'react'
import styles from './BackgroundSwitcher.module.css'

const backgrounds = [
  { id: 'bg1', name: 'Texture 1' },
  { id: 'bg2', name: 'Texture 2' },
  { id: 'bg3', name: 'Texture 3' },
  { id: 'bg4', name: 'Texture 4' },
  { id: 'bg5', name: 'Texture 5' },
  { id: 'bg6', name: 'Texture 6' },
  { id: 'bg7', name: 'Texture 7' },
]

export default function BackgroundSwitcher() {
  const [currentBg, setCurrentBg] = useState('bg1')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('selectedBackground')
    if (saved) {
      setCurrentBg(saved)
      document.body.setAttribute('data-bg', saved)
    } else {
      document.body.setAttribute('data-bg', 'bg1')
    }
  }, [])

  const handleBackgroundChange = (bgId: string) => {
    setCurrentBg(bgId)
    document.body.setAttribute('data-bg', bgId)
    localStorage.setItem('selectedBackground', bgId)
    setIsOpen(false)
  }

  return (
    <div className={styles.switcher}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle background selector"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3>Background Textures</h3>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className={styles.grid}>
            {backgrounds.map((bg) => (
              <button
                key={bg.id}
                className={`${styles.option} ${currentBg === bg.id ? styles.active : ''}`}
                onClick={() => handleBackgroundChange(bg.id)}
                data-bg={bg.id}
              >
                <span className={styles.optionName}>{bg.name}</span>
                {currentBg === bg.id && (
                  <span className={styles.activeIndicator}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
