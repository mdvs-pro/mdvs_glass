'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { href: string; label: string }[]
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <nav
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.glassEffect}></div>
        <div className={styles.glassTint}></div>

        <div className={styles.menuContent}>
          <div className={styles.menuHeader}>
            <h2 className={styles.menuTitle}>Navigation</h2>
          </div>

          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={styles.navItem}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link href={link.href} className={styles.navLink} onClick={handleLinkClick}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.menuFooter}>
            <p className={styles.footerText}>MDVS Agency</p>
            <p className={styles.footerSubtext}>Building digital excellence</p>
          </div>
        </div>
      </nav>
    </>
  )
}
