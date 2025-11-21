'use client'

import { useState } from 'react'
import GlassTag from '@/components/glass/GlassTag'
import styles from './page.module.css'

export default function TestTagsPage() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Next.js'])

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className={styles.testPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>GlassTag Component</h1>
        <p className={styles.subtitle}>Badges та tags з glass ефектом</p>

        {/* Variants */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Варіанти (default)</h2>
          <div className={styles.tagRow}>
            <GlassTag variant="primary">Primary</GlassTag>
            <GlassTag variant="secondary">Secondary</GlassTag>
            <GlassTag variant="outline">Outline</GlassTag>
            <GlassTag variant="tech">Tech</GlassTag>
          </div>
        </section>

        {/* Sizes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Розміри</h2>
          <div className={styles.tagRow}>
            <GlassTag variant="primary" size="small">
              Small
            </GlassTag>
            <GlassTag variant="primary" size="medium">
              Medium
            </GlassTag>
          </div>
        </section>

        {/* With Icons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>З іконками</h2>
          <div className={styles.tagRow}>
            <GlassTag variant="tech" icon={<span>⚛️</span>}>
              React
            </GlassTag>
            <GlassTag variant="tech" icon={<span>📘</span>}>
              TypeScript
            </GlassTag>
            <GlassTag variant="tech" icon={<span>▲</span>}>
              Next.js
            </GlassTag>
            <GlassTag variant="primary" icon={<span>✓</span>}>
              Verified
            </GlassTag>
          </div>
        </section>

        {/* Removable */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Removable (кліккайте ×)</h2>
          <div className={styles.tagRow}>
            {tags.map(tag => (
              <GlassTag key={tag} variant="tech" removable onRemove={() => removeTag(tag)}>
                {tag}
              </GlassTag>
            ))}
          </div>
          {tags.length === 0 && <p className={styles.emptyState}>Всі tags видалено</p>}
        </section>

        {/* Clickable */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Clickable</h2>
          <div className={styles.tagRow}>
            <GlassTag variant="primary" onClick={() => alert('Primary clicked!')}>
              Click me
            </GlassTag>
            <GlassTag variant="tech" onClick={() => alert('Tech clicked!')}>
              Click me too
            </GlassTag>
          </div>
        </section>

        {/* Animated Background */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>З динамічним фоном (animated)</h2>
          <div className={styles.tagRow}>
            <GlassTag variant="primary" backgroundImage="/images/button-backgrounds/103811.jpg">
              Primary
            </GlassTag>
            <GlassTag
              variant="tech"
              icon={<span>⚛️</span>}
              backgroundImage="/images/button-backgrounds/103811.jpg"
            >
              React
            </GlassTag>
            <GlassTag
              variant="tech"
              icon={<span>📘</span>}
              backgroundImage="/images/button-backgrounds/103811.jpg"
            >
              TypeScript
            </GlassTag>
            <GlassTag
              variant="secondary"
              size="small"
              backgroundImage="/images/button-backgrounds/103811.jpg"
            >
              Small
            </GlassTag>
          </div>
        </section>

        {/* Use Cases */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Приклади використання</h2>

          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Tech Stack</h3>
            <div className={styles.tagRow}>
              <GlassTag variant="tech" size="small" icon={<span>⚛️</span>}>
                React
              </GlassTag>
              <GlassTag variant="tech" size="small" icon={<span>▲</span>}>
                Next.js
              </GlassTag>
              <GlassTag variant="tech" size="small" icon={<span>💎</span>}>
                Ruby on Rails
              </GlassTag>
              <GlassTag variant="tech" size="small" icon={<span>🟢</span>}>
                Node.js
              </GlassTag>
              <GlassTag variant="tech" size="small" icon={<span>🐘</span>}>
                PostgreSQL
              </GlassTag>
              <GlassTag variant="tech" size="small" icon={<span>📘</span>}>
                TypeScript
              </GlassTag>
            </div>
          </div>

          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Industries</h3>
            <div className={styles.tagRow}>
              <GlassTag variant="primary" size="small">
                FinTech
              </GlassTag>
              <GlassTag variant="primary" size="small">
                Healthcare
              </GlassTag>
              <GlassTag variant="primary" size="small">
                Real Estate
              </GlassTag>
              <GlassTag variant="primary" size="small">
                SaaS
              </GlassTag>
              <GlassTag variant="primary" size="small">
                Education
              </GlassTag>
            </div>
          </div>

          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Project Tags</h3>
            <div className={styles.tagRow}>
              <GlassTag variant="secondary" size="small">
                Featured
              </GlassTag>
              <GlassTag variant="outline" size="small">
                New
              </GlassTag>
              <GlassTag variant="tech" size="small">
                Open Source
              </GlassTag>
            </div>
          </div>
        </section>

        {/* Props */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Props</h2>
          <div className={styles.props}>
            <code>variant</code> - &quot;primary&quot; | &quot;secondary&quot; | &quot;outline&quot; | &quot;tech&quot;
            <br />
            <code>size</code> - &quot;small&quot; | &quot;medium&quot;
            <br />
            <code>icon</code> - ReactNode (іконка)
            <br />
            <code>removable</code> - показати кнопку видалення
            <br />
            <code>onRemove</code> - callback при видаленні
            <br />
            <code>onClick</code> - callback при кліку (робить tag clickable)
            <br />
            <code>backgroundImage</code> - шлях до зображення для динамічного фону (опційно)
          </div>
        </section>
      </div>
    </div>
  )
}
