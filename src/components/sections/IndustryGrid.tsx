import IndustryCard from './IndustryCard'
import { Industry } from '@/lib/data/industries'
import styles from './IndustryGrid.module.css'

export interface IndustryGridProps {
  industries: Industry[]
  sectionTitle?: string
  sectionSubtitle?: string
}

export default function IndustryGrid({
  industries,
  sectionTitle = 'Industries We Serve',
  sectionSubtitle = 'Specialized solutions across diverse sectors',
}: IndustryGridProps) {
  return (
    <section className={styles.industryGrid}>
      <div className="container">
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div className={styles.header}>
            {sectionTitle && (
              <h2 className={styles.title}>
                {sectionTitle}
                <span className={styles.titleAccent}></span>
              </h2>
            )}
            {sectionSubtitle && <p className={styles.subtitle}>{sectionSubtitle}</p>}
          </div>
        )}

        {/* Industries Grid */}
        <div className={styles.grid}>
          {industries.map(industry => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              name={industry.name}
              description={industry.description}
              projectCount={industry.projectCount}
              technologies={industry.technologies}
              href={industry.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
