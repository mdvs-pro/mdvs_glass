import LiquidGlassButton from '@/components/glass/LiquidGlassButton'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="heading-hero">
              Transform Ideas Into{' '}
              <span className={styles.heroAccent}>Digital Reality</span>
            </h1>
            <p className="text-lead text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Elite software development and IT solutions with 11 years of proven expertise
            </p>
            <div className={styles.heroActions}>
              <LiquidGlassButton href="/contact">
                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Start Your Project</span>
              </LiquidGlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>
            What We Do
            <span className={styles.titleAccent}></span>
          </h2>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Custom Development</h3>
              <p className={styles.serviceDescription}>
                Tailored web and mobile applications built with cutting-edge technologies like
                React, Next.js, and Ruby on Rails
              </p>
              <ul className={styles.serviceList}>
                <li>Full-stack development</li>
                <li>Modern frameworks</li>
                <li>Scalable architecture</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>IT Outstaffing</h3>
              <p className={styles.serviceDescription}>
                Experienced developers ready to integrate with your team and accelerate your
                projects
              </p>
              <ul className={styles.serviceList}>
                <li>Vetted professionals</li>
                <li>Flexible engagement</li>
                <li>Seamless integration</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Design & UX</h3>
              <p className={styles.serviceDescription}>
                Beautiful, intuitive interfaces that combine aesthetics with functionality
              </p>
              <ul className={styles.serviceList}>
                <li>User-centered design</li>
                <li>Modern UI systems</li>
                <li>Brand consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Build Something Great?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help bring your vision to life
            </p>
            <LiquidGlassButton href="/contact">
              <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Get In Touch</span>
            </LiquidGlassButton>
          </div>
        </div>
      </section>
    </div>
  )
}
