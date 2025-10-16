import Link from 'next/link'
import styles from './Footer.module.css'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/mdvs-agency', label: 'GitHub', icon: 'GH' },
  { href: 'https://linkedin.com/company/mdvs-agency', label: 'LinkedIn', icon: 'LI' },
  { href: 'https://twitter.com/mdvs_agency', label: 'Twitter', icon: 'TW' },
  { href: 'https://instagram.com/mdvs.agency', label: 'Instagram', icon: 'IG' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.glassEffect}></div>
      <div className={styles.glassTint}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>
              <span className={styles.brandText}>MDVS</span>
              <span className={styles.brandAccent}>Agency</span>
            </h3>
            <p className={styles.brandTagline}>
              Building digital excellence with innovative solutions
            </p>
          </div>

          {/* Quick links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.linksList}>
              {quickLinks.map(link => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className={styles.socialSection}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map(social => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={styles.bottom}>
          <div className={styles.divider}></div>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>© {currentYear} MDVS Agency. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.separator}>•</span>
              <Link href="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
