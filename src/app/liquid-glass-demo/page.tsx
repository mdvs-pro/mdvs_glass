/**
 * Liquid Glass Demo Page
 * Showcase of liquid glass effects with dynamic background
 */

import DynamicBackground from '@/components/glass/DynamicBackground'
import LiquidGlassWrapper from '@/components/glass/LiquidGlassWrapper'
import styles from './page.module.css'

export const metadata = {
  title: 'Liquid Glass Demo - MDVS',
  description: 'Interactive demonstration of liquid glass design system',
}

export default function LiquidGlassDemoPage() {
  return (
    <DynamicBackground
      backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
      showDecorations={true}
    >
      <div className={styles.demoPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <LiquidGlassWrapper
              borderRadius="20px"
              backgroundColor="rgba(255, 255, 255, 0.05)"
              distortion="normal"
              className={styles.heroCard}
            >
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Liquid <span className={styles.accent}>Glass</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Найреалістичніший glassmorphism ефект з 4-шаровою структурою
                </p>
                <div className={styles.features}>
                  <div className={styles.feature}>✨ SVG Distortion</div>
                  <div className={styles.feature}>🎨 Specular Highlights</div>
                  <div className={styles.feature}>💫 Backdrop Blur</div>
                  <div className={styles.feature}>🌊 Liquid Animations</div>
                </div>
              </div>
            </LiquidGlassWrapper>
          </div>
        </section>

        {/* Cards Grid */}
        <section className={styles.cardsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Різні варіанти дисторсії</h2>
            <div className={styles.cardsGrid}>
              {/* No Distortion */}
              <LiquidGlassWrapper distortion="none" borderRadius="16px" className={styles.demoCard}>
                <h3>No Distortion</h3>
                <p>Класичний glassmorphism без SVG фільтрів</p>
              </LiquidGlassWrapper>

              {/* Subtle Distortion */}
              <LiquidGlassWrapper
                distortion="subtle"
                borderRadius="16px"
                className={styles.demoCard}
              >
                <h3>Subtle Distortion</h3>
                <p>М&apos;яке викривлення для тонкого ефекту</p>
              </LiquidGlassWrapper>

              {/* Normal Distortion */}
              <LiquidGlassWrapper
                distortion="normal"
                borderRadius="16px"
                className={styles.demoCard}
              >
                <h3>Normal Distortion</h3>
                <p>Збалансований ефект справжнього скла</p>
              </LiquidGlassWrapper>

              {/* Strong Distortion */}
              <LiquidGlassWrapper
                distortion="strong"
                borderRadius="16px"
                className={styles.demoCard}
              >
                <h3>Strong Distortion</h3>
                <p>Максимальне викривлення з підсвіткою</p>
              </LiquidGlassWrapper>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className={styles.featuresSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Ключові особливості</h2>
            <div className={styles.featuresGrid}>
              <LiquidGlassWrapper className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3>4-Layer Structure</h3>
                <p>Effect → Tint → Shine → Content створюють реалістичну глибину</p>
              </LiquidGlassWrapper>

              <LiquidGlassWrapper className={styles.featureCard}>
                <div className={styles.featureIcon}>🌈</div>
                <h3>Specular Lighting</h3>
                <p>Динамічні відблиски світла як на справжньому склі</p>
              </LiquidGlassWrapper>

              <LiquidGlassWrapper className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Performance</h3>
                <p>Оптимізовані анімації з GPU acceleration</p>
              </LiquidGlassWrapper>

              <LiquidGlassWrapper className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3>Responsive</h3>
                <p>Адаптивний дизайн для всіх пристроїв</p>
              </LiquidGlassWrapper>

              <LiquidGlassWrapper className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <h3>Customizable</h3>
                <p>Повний контроль над кольорами та ефектами</p>
              </LiquidGlassWrapper>

              <LiquidGlassWrapper className={styles.featureCard}>
                <div className={styles.featureIcon}>♿</div>
                <h3>Accessible</h3>
                <p>Підтримка високого контрасту та читабельності</p>
              </LiquidGlassWrapper>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <LiquidGlassWrapper
              borderRadius="24px"
              backgroundColor="rgba(255, 255, 255, 0.08)"
              distortion="strong"
              className={styles.ctaCard}
            >
              <h2>Готові використати у своєму проекті?</h2>
              <p>Всі компоненти доступні та готові до використання</p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>Почати роботу</button>
                <button className={styles.secondaryButton}>Документація</button>
              </div>
            </LiquidGlassWrapper>
          </div>
        </section>
      </div>
    </DynamicBackground>
  )
}
