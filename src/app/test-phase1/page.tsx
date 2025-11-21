import GlassIcon from '@/components/glass/GlassIcon'
import PageHeader from '@/components/layout/PageHeader'
import GlassCard from '@/components/glass/GlassCard'
import {
  FaRocket,
  FaCode,
  FaUsers,
  FaStar,
  FaHeart,
  FaLightbulb,
  FaCog,
  FaShieldAlt,
} from 'react-icons/fa'
import styles from './page.module.css'

export default function TestPhase1Page() {
  return (
    <div className={styles.main}>
      {/* PageHeader with breadcrumbs */}
      <PageHeader
        title="Phase 1 Components Test"
        subtitle="Testing GlassIcon and PageHeader components with all variants"
        breadcrumbs={[
          { label: 'Testing', href: '/test' },
          { label: 'Phase 1', href: '/test-phase1' },
        ]}
        backgroundVariant="gradient"
      />

      {/* GlassIcon Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>GlassIcon Component</h2>

          {/* Circle Variant */}
          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>Circle Variant</h3>
            <div className={styles.iconGrid}>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaRocket />} size="small" variant="circle" />
                <span className={styles.label}>Small</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaCode />} size="medium" variant="circle" />
                <span className={styles.label}>Medium</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaUsers />} size="large" variant="circle" />
                <span className={styles.label}>Large</span>
              </div>
            </div>
          </div>

          {/* Square Variant */}
          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>Square Variant</h3>
            <div className={styles.iconGrid}>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaStar />} size="small" variant="square" />
                <span className={styles.label}>Small</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaHeart />} size="medium" variant="square" />
                <span className={styles.label}>Medium</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaLightbulb />} size="large" variant="square" />
                <span className={styles.label}>Large</span>
              </div>
            </div>
          </div>

          {/* None Variant (Icon only) */}
          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>None Variant (Icon Only)</h3>
            <div className={styles.iconGrid}>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaCog />} size="small" variant="none" />
                <span className={styles.label}>Small</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaShieldAlt />} size="medium" variant="none" />
                <span className={styles.label}>Medium</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaRocket />} size="large" variant="none" />
                <span className={styles.label}>Large</span>
              </div>
            </div>
          </div>

          {/* Custom Colors */}
          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>Custom Colors</h3>
            <div className={styles.iconGrid}>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaHeart />} size="medium" variant="circle" color="#9B59B6" />
                <span className={styles.label}>Purple</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaStar />} size="medium" variant="square" color="#3498DB" />
                <span className={styles.label}>Blue</span>
              </div>
              <div className={styles.iconDemo}>
                <GlassIcon icon={<FaRocket />} size="medium" variant="circle" color="#E74C3C" />
                <span className={styles.label}>Red</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PageHeader Examples */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>PageHeader Variants</h2>

          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>Default Background</h3>
            <GlassCard variant="default">
              <div className={styles.headerPreview}>
                <PageHeader
                  title="Default Page Header"
                  subtitle="Simple and clean background variant"
                  breadcrumbs={[
                    { label: 'Services', href: '/services' },
                    { label: 'Development', href: '/services/development' },
                  ]}
                  backgroundVariant="default"
                />
              </div>
            </GlassCard>
          </div>

          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>Gradient Background</h3>
            <GlassCard variant="default">
              <div className={styles.headerPreview}>
                <PageHeader
                  title="Gradient Page Header"
                  subtitle="Enhanced gradient with dual-color effect"
                  breadcrumbs={[
                    { label: 'Portfolio', href: '/portfolio' },
                    { label: 'Projects', href: '/portfolio/projects' },
                  ]}
                  backgroundVariant="gradient"
                />
              </div>
            </GlassCard>
          </div>

          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>Pattern Background</h3>
            <GlassCard variant="default">
              <div className={styles.headerPreview}>
                <PageHeader
                  title="Pattern Page Header"
                  subtitle="Subtle pattern with diagonal lines"
                  breadcrumbs={[
                    { label: 'About', href: '/about' },
                    { label: 'Team', href: '/about/team' },
                  ]}
                  backgroundVariant="pattern"
                />
              </div>
            </GlassCard>
          </div>

          <div className={styles.demoBlock}>
            <h3 className={styles.demoTitle}>Without Breadcrumbs</h3>
            <GlassCard variant="default">
              <div className={styles.headerPreview}>
                <PageHeader
                  title="Simple Header"
                  subtitle="No breadcrumbs navigation"
                  backgroundVariant="default"
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}
