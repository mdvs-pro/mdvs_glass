'use client'

import { useState } from 'react'
import GlassInput from '@/components/glass/GlassInput'
import LiquidGlassButton from '@/components/glass/LiquidGlassButton'
import styles from './page.module.css'

export default function TestInputsPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className={styles.testPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>GlassInput Component</h1>
        <p className={styles.subtitle}>Приклади використання</p>

        {/* Basic Inputs */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Базові інпути</h2>
          <div className={styles.grid}>
            <GlassInput type="text" placeholder="Введіть ім'я" label="Ім'я" />
            <GlassInput
              type="email"
              placeholder="email@example.com"
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <GlassInput type="tel" placeholder="+380 XX XXX XX XX" label="Телефон" />
          </div>
        </section>

        {/* With Icons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>З іконками</h2>
          <div className={styles.grid}>
            <GlassInput type="text" placeholder="Пошук..." label="Пошук" icon={<span>🔍</span>} />
            <GlassInput
              type="email"
              placeholder="your@email.com"
              label="Email"
              icon={<span>📧</span>}
              iconPosition="right"
            />
          </div>
        </section>

        {/* States */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Стани</h2>
          <div className={styles.grid}>
            <GlassInput
              type="text"
              placeholder="З помилкою"
              label="Поле з помилкою"
              error="Це поле обов'язкове"
            />
            <GlassInput type="text" placeholder="Disabled" label="Disabled" disabled />
            <GlassInput
              type="text"
              placeholder="Required"
              label="Обов'язкове поле"
              required
              helperText="Це поле обов'язкове для заповнення"
            />
          </div>
        </section>

        {/* Variants */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Варіанти</h2>
          <div className={styles.grid}>
            <GlassInput
              type="text"
              placeholder="Default variant"
              label="Default"
              variant="default"
            />
            <GlassInput type="text" placeholder="Filled variant" label="Filled" variant="filled" />
          </div>
        </section>

        {/* Textarea */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Textarea</h2>
          <GlassInput
            multiline
            rows={5}
            placeholder="Введіть ваше повідомлення..."
            label="Повідомлення"
            value={message}
            onChange={e => setMessage(e.target.value)}
            helperText={`${message.length} символів`}
          />
        </section>

        {/* Real Form Example */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Приклад: Контактна форма</h2>
          <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <div className={styles.formRow}>
              <GlassInput type="text" placeholder="Іван Іваненко" label="Ім'я" required fullWidth />
            </div>
            <div className={styles.formRow}>
              <GlassInput
                type="email"
                placeholder="ivan@example.com"
                label="Email"
                required
                fullWidth
                icon={<span>📧</span>}
              />
            </div>
            <div className={styles.formRow}>
              <GlassInput type="text" placeholder="Тема повідомлення" label="Тема" fullWidth />
            </div>
            <div className={styles.formRow}>
              <GlassInput
                multiline
                rows={6}
                placeholder="Ваше повідомлення..."
                label="Повідомлення"
                required
                fullWidth
              />
            </div>
            <LiquidGlassButton
              variant="primary"
              size="large"
              fullWidth
              backgroundImage="/images/button-backgrounds/2148862133.jpg"
              type="submit"
            >
              Відправити
            </LiquidGlassButton>
          </form>
        </section>

        {/* Props Reference */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Props</h2>
          <div className={styles.props}>
            <code>label</code> - текст label
            <br />
            <code>error</code> - текст помилки
            <br />
            <code>helperText</code> - допоміжний текст
            <br />
            <code>icon</code> - іконка (ReactNode)
            <br />
            <code>iconPosition</code> - &quot;left&quot; | &quot;right&quot;
            <br />
            <code>variant</code> - &quot;default&quot; | &quot;filled&quot;
            <br />
            <code>multiline</code> - textarea режим
            <br />
            <code>rows</code> - кількість рядків для textarea
            <br />
            <code>fullWidth</code> - на всю ширину
            <br />
            <code>+ всі стандартні HTML input props</code>
          </div>
        </section>
      </div>
    </div>
  )
}
