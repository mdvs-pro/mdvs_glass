'use client'

import LiquidGlassButton from '@/components/glass/LiquidGlassButton'
import styles from './page.module.css'

export default function TestButtonsPage() {
  return (
    <div className={styles.testPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>LiquidGlassButton - All Variants</h1>
        <p className={styles.subtitle}>
          Testing all button variants, sizes, and states
        </p>

        {/* VARIANTS Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Variants (Medium Size)</h2>
          <div className={styles.buttonGrid}>
            <div className={styles.buttonDemo}>
              <LiquidGlassButton
                variant="primary"
                backgroundImage="/images/button-backgrounds/2148862133.jpg"
              >
                Primary Button
              </LiquidGlassButton>
              <span className={styles.label}>variant="primary"</span>
            </div>

            <div className={styles.buttonDemo}>
              <LiquidGlassButton
                variant="secondary"
                backgroundImage="/images/button-backgrounds/img_1.png"
              >
                Secondary Button
              </LiquidGlassButton>
              <span className={styles.label}>variant="secondary"</span>
            </div>

            <div className={styles.buttonDemo}>
              <LiquidGlassButton
                variant="outline"
                backgroundImage="/images/button-backgrounds/img.png"
              >
                Outline Button
              </LiquidGlassButton>
              <span className={styles.label}>variant="outline"</span>
            </div>
          </div>
        </section>

        {/* SIZES Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Sizes (Primary Variant)</h2>
          <div className={styles.buttonGrid}>
            <div className={styles.buttonDemo}>
              <LiquidGlassButton
                variant="primary"
                size="small"
                backgroundImage="/images/button-backgrounds/2148862133.jpg"
              >
                Small Button
              </LiquidGlassButton>
              <span className={styles.label}>size="small"</span>
            </div>

            <div className={styles.buttonDemo}>
              <LiquidGlassButton
                variant="primary"
                size="medium"
                backgroundImage="/images/button-backgrounds/2148862133.jpg"
              >
                Medium Button
              </LiquidGlassButton>
              <span className={styles.label}>size="medium" (default)</span>
            </div>

            <div className={styles.buttonDemo}>
              <LiquidGlassButton
                variant="primary"
                size="large"
                backgroundImage="/images/button-backgrounds/2148862133.jpg"
              >
                Large Button
              </LiquidGlassButton>
              <span className={styles.label}>size="large"</span>
            </div>
          </div>
        </section>

        {/* ALL SIZE COMBINATIONS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. All Variant × Size Combinations</h2>

          {/* Primary in all sizes */}
          <h3 className={styles.subsectionTitle}>Primary</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              size="small"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Small
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="primary"
              size="medium"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Medium
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="primary"
              size="large"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Large
            </LiquidGlassButton>
          </div>

          {/* Secondary in all sizes */}
          <h3 className={styles.subsectionTitle}>Secondary</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="secondary"
              size="small"
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Small
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              size="medium"
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Medium
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              size="large"
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Large
            </LiquidGlassButton>
          </div>

          {/* Outline in all sizes */}
          <h3 className={styles.subsectionTitle}>Outline</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="outline"
              size="small"
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Small
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              size="medium"
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Medium
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              size="large"
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Large
            </LiquidGlassButton>
          </div>
        </section>

        {/* STATES Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. States</h2>

          <h3 className={styles.subsectionTitle}>Disabled State</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              disabled
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Disabled Primary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              disabled
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Disabled Secondary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              disabled
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Disabled Outline
            </LiquidGlassButton>
          </div>

          <h3 className={styles.subsectionTitle}>Loading State</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              loading
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Loading Primary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              loading
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Loading Secondary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              loading
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Loading Outline
            </LiquidGlassButton>
          </div>
        </section>

        {/* ICONS Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. With Icons</h2>

          <h3 className={styles.subsectionTitle}>Icon Left</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              icon={<span>→</span>}
              iconPosition="left"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Icon Left
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              icon={<span>✓</span>}
              iconPosition="left"
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Icon Left
            </LiquidGlassButton>
          </div>

          <h3 className={styles.subsectionTitle}>Icon Right</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              icon={<span>→</span>}
              iconPosition="right"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Icon Right
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              icon={<span>→</span>}
              iconPosition="right"
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Icon Right
            </LiquidGlassButton>
          </div>
        </section>

        {/* FULL WIDTH */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Full Width</h2>
          <div className={styles.fullWidthDemo}>
            <LiquidGlassButton
              variant="primary"
              fullWidth
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Full Width Primary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              fullWidth
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Full Width Secondary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              fullWidth
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Full Width Outline
            </LiquidGlassButton>
          </div>
        </section>

        {/* BACKGROUND IMAGE */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. With Background Image</h2>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Custom Background
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="primary"
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Image Background
            </LiquidGlassButton>
          </div>
        </section>

        {/* REAL USE CASES */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Real Use Case Examples</h2>

          <h3 className={styles.subsectionTitle}>Hero CTAs</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              size="large"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Start Your Project
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              size="large"
              backgroundImage="/images/button-backgrounds/img.png"
            >
              View Portfolio
            </LiquidGlassButton>
          </div>

          <h3 className={styles.subsectionTitle}>Form Actions</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="primary"
              size="medium"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Submit
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              size="medium"
              backgroundImage="/images/button-backgrounds/img_1.png"
            >
              Cancel
            </LiquidGlassButton>
          </div>

          <h3 className={styles.subsectionTitle}>Navigation</h3>
          <div className={styles.buttonRow}>
            <LiquidGlassButton
              variant="outline"
              size="small"
              backgroundImage="/images/button-backgrounds/img.png"
            >
              Learn More
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="primary"
              size="small"
              icon={<span>→</span>}
              iconPosition="right"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
            >
              Get Started
            </LiquidGlassButton>
          </div>
        </section>

        {/* INTERACTIVE DEMO */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Interactive Test</h2>
          <p className={styles.note}>
            ⚡ Hover over buttons to see the liquid glass effect and lift animation
          </p>
          <div className={styles.interactiveDemo}>
            <LiquidGlassButton
              variant="primary"
              size="large"
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
              onClick={() => alert('Primary clicked!')}
            >
              Click Me - Primary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              size="large"
              backgroundImage="/images/button-backgrounds/img_1.png"
              onClick={() => alert('Secondary clicked!')}
            >
              Click Me - Secondary
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="outline"
              size="large"
              backgroundImage="/images/button-backgrounds/img.png"
              onClick={() => alert('Outline clicked!')}
            >
              Click Me - Outline
            </LiquidGlassButton>
          </div>
        </section>

        {/* NOTES */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📝 Implementation Notes</h2>
          <div className={styles.notes}>
            <h3>Variants:</h3>
            <ul>
              <li><strong>Primary:</strong> Yellow gradient - main CTAs, important actions</li>
              <li><strong>Secondary:</strong> Dark with yellow border - secondary actions</li>
              <li><strong>Outline:</strong> Transparent with border - tertiary actions, navigation</li>
            </ul>

            <h3>Sizes:</h3>
            <ul>
              <li><strong>Small:</strong> Navigation, inline actions</li>
              <li><strong>Medium:</strong> Forms, standard CTAs (default)</li>
              <li><strong>Large:</strong> Hero sections, prominent CTAs</li>
            </ul>

            <h3>Props Available:</h3>
            <ul>
              <li><code>variant</code>: "primary" | "secondary" | "outline"</li>
              <li><code>size</code>: "small" | "medium" | "large"</li>
              <li><code>disabled</code>: boolean</li>
              <li><code>loading</code>: boolean</li>
              <li><code>fullWidth</code>: boolean</li>
              <li><code>icon</code>: ReactNode</li>
              <li><code>iconPosition</code>: "left" | "right"</li>
              <li><code>backgroundImage</code>: string (url)</li>
              <li><code>onClick</code>: function</li>
              <li><code>href</code>: string (renders as &lt;a&gt;)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
