import LiquidGlassButton from '@/components/glass/LiquidGlassButton'
import MetricCard from '@/components/sections/MetricCard'
import ServiceTabs from '@/components/sections/ServiceTabs'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import IndustryGrid from '@/components/sections/IndustryGrid'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import TechStack from '@/components/sections/TechStack'
import WhyChoose from '@/components/sections/WhyChoose'
import { serviceTabsData } from '@/lib/data/services'
import { getFeaturedProjects } from '@/lib/data/projects'
import { industries } from '@/lib/data/industries'
import { FaRocket, FaBriefcase, FaUsers, FaStar } from 'react-icons/fa'
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
              <LiquidGlassButton
                href="/contact"
                backgroundImage="/images/button-backgrounds/2148862133.jpg"
              >
                <span style={{ fontSize: '1.1rem' }}>Start Your Project</span>
              </LiquidGlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className={styles.metricsBar}>
        <div className="container">
          <div className={styles.metricsGrid}>
            <MetricCard
              icon={<FaRocket />}
              value="11+"
              label="Years of Expertise"
              animated
            />
            <MetricCard
              icon={<FaBriefcase />}
              value="100+"
              label="Projects Delivered"
              animated
            />
            <MetricCard
              icon={<FaUsers />}
              value="50+"
              label="Expert Developers"
              animated
            />
            <MetricCard
              icon={<FaStar />}
              value="98%"
              label="Client Satisfaction"
              animated
            />
          </div>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <ServiceTabs
        tabs={serviceTabsData}
        sectionTitle="Our Services"
        sectionSubtitle="Choose the engagement model that fits your needs"
      />

      {/* Portfolio Showcase */}
      <PortfolioShowcase
        projects={getFeaturedProjects(6)}
        sectionTitle="Featured Projects"
        sectionSubtitle="Our latest work showcasing innovation and excellence"
      />

      {/* Industries We Serve */}
      <IndustryGrid
        industries={industries}
        sectionTitle="Industries We Serve"
        sectionSubtitle="Specialized solutions across diverse sectors"
      />

      {/* Our Process */}
      <ProcessTimeline
        sectionTitle="Our Process"
        sectionSubtitle="A proven methodology for delivering excellence"
      />

      {/* Technologies We Use */}
      <TechStack
        sectionTitle="Technologies We Use"
        sectionSubtitle="Cutting-edge tools and frameworks for modern solutions"
      />

      {/* Why Choose MDVS */}
      <WhyChoose
        sectionTitle="Why Choose MDVS"
        sectionSubtitle="Your trusted partner for software development excellence"
      />

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Build Something Great?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help bring your vision to life
            </p>
            <LiquidGlassButton
              href="/contact"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              <span style={{ fontSize: '1.1rem' }}>Get In Touch</span>
            </LiquidGlassButton>
          </div>
        </div>
      </section>
    </div>
  )
}
