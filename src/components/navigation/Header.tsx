'use client'

import { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import styles from './Header.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>MDVS</span>
            <span className={styles.logoAccent}>Agency</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}
            ></span>
            <span
              className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}
            ></span>
            <span
              className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}
            ></span>
          </button>
        </div>

        {/* Glass effect layers */}
        <div className={styles.glassEffect}></div>
        <div className={styles.glassTint}></div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} navLinks={navLinks} />
    </>
  )
}
