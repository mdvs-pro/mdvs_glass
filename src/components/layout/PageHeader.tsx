import Link from 'next/link'
import { FaChevronRight, FaHome } from 'react-icons/fa'
import styles from './PageHeader.module.css'

interface Breadcrumb {
  label: string
  href: string
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  backgroundVariant?: 'default' | 'gradient' | 'pattern'
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  backgroundVariant = 'default',
}: PageHeaderProps) {
  const headerClass = [
    styles.pageHeader,
    styles[`bg${backgroundVariant.charAt(0).toUpperCase() + backgroundVariant.slice(1)}`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={headerClass}>
      <div className="container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li className={styles.breadcrumbItem}>
                <Link href="/" className={styles.breadcrumbLink}>
                  <FaHome className={styles.homeIcon} />
                  <span>Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className={styles.breadcrumbItem}>
                  <FaChevronRight className={styles.separator} />
                  {index === breadcrumbs.length - 1 ? (
                    <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className={styles.breadcrumbLink}>
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={styles.headerContent}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      {/* Background Decorations */}
      <div className={styles.backgroundDecoration}></div>
    </section>
  )
}
