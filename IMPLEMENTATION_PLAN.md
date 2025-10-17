# 🎯 MDVS Website - Повний План Реалізації

## 📋 КЛЮЧОВІ ПРИНЦИПИ РОЗРОБКИ

### ⚠️ КРИТИЧНО ВАЖЛИВО:

1. **CONSISTENCY IS KING** - Всі елементи мають виглядати як частини єдиної системи
2. **COMPONENT REUSABILITY** - НЕ створювати нові компоненти, якщо можна реюзати існуючі
3. **APPROVAL WORKFLOW** - Кожен новий компонент проходить UI перевірку перед використанням
4. **GLASS DESIGN SYSTEM** - Всі елементи базуються на існуючій Liquid Glass системі

### 🔄 Workflow для Кожного Компоненту:

```
1. Дизайн компоненту (базуючись на glass-system.css)
   ↓
2. Імплементація з реюзом існуючих класів
   ↓
3. ✋ ЗУПИНКА → Показати на UI review
   ↓
4. ❌ Rejection → Повернутись до п.1
   ✅ Approval → Продовжити
   ↓
5. Документація компоненту
   ↓
6. Використання в сторінках
```

---

## 🏗️ ПОТОЧНИЙ СТАН (Що вже є)

### ✅ Готові Foundation елементи:
- `src/styles/variables.css` - Повна система змінних (4 палітри)
- `src/styles/glass-system.css` - Базова система glass компонентів
- `src/components/glass/GlassCard.tsx` - Основний glass card з mouse tracking

### 📦 Готові базові класи:
- `.glass-component` - базовий wrapper
- `.glass-card` / `.glass-card-small` / `.glass-card-large`
- `.glass-button` / `.glass-button-primary` / `.glass-button-secondary`
- `.glass-input`
- `.glass-nav` / `.glass-nav-item`
- Utility classes (borders, shadows, radius)

---

## 🎨 COMPONENT LIBRARY STRATEGY

### Атомарна структура (Atomic Design):

```
📁 src/components/
├── 📁 glass/              # Атоми (базові елементи)
│   ├── GlassCard.tsx      ✅ Є
│   ├── GlassButton.tsx    🔨 Треба
│   ├── GlassInput.tsx     🔨 Треба
│   ├── GlassTag.tsx       🔨 Треба
│   └── GlassIcon.tsx      🔨 Треба
│
├── 📁 sections/           # Молекули (комбінації атомів)
│   ├── Hero.tsx
│   ├── MetricsBar.tsx
│   ├── ServiceCard.tsx
│   └── ProjectCard.tsx
│
├── 📁 layout/             # Організми (складні блоки)
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── PageHeader.tsx
│
└── 📁 features/           # Складні фічі
    ├── CostCalculator/
    ├── AIAdvisor/
    └── ContactForm/
```

### 🎯 Правило Реюзу:

**Перед створенням нового компоненту - ПЕРЕВІРИТИ:**
1. Чи є подібний компонент?
2. Чи можна розширити існуючий через props?
3. Чи можна використати composition?
4. **ТІЛЬКИ якщо всі відповіді "ні" - створювати новий**

---

## 📅 ДЕТАЛЬНИЙ ПЛАН ПО ФАЗАХ

---

## 🔷 ФАЗА 1: Foundation & Core Components (Тиждень 1)

### Мета: Створити бібліотеку переісповнюваних компонентів

### 1.1 Підготовка структури проекту
**Час: 2 години**

```bash
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── glass/
│   ├── sections/
│   ├── layout/
│   └── features/
├── styles/
│   ├── variables.css      ✅
│   └── glass-system.css   ✅
├── lib/
│   ├── constants/
│   ├── data/
│   └── utils/
└── types/
    └── index.ts
```

**Deliverable:** Структура папок створена
**✋ APPROVAL NEEDED:** Ні (технічна робота)

---

### 1.2 Створення базових Glass Atoms (по одному!)

#### Component 1.2.1: GlassButton.tsx
**Час: 1 година**

**Variants:**
- Primary (yellow gradient)
- Secondary (dark with yellow border)
- Outline
- Icon button

**Props:**
```typescript
interface GlassButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  size: 'small' | 'medium' | 'large'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children: ReactNode
}
```

**✋ APPROVAL CHECKPOINT:**
- [ ] UI Review кнопок (всі варіанти)
- [ ] Hover states
- [ ] Active states
- [ ] Loading state
- [ ] Disabled state

**❌ НЕ продовжувати до approval!**

---

#### Component 1.2.2: GlassInput.tsx
**Час: 1.5 години**

**Variants:**
- Text input
- Textarea
- With icon
- With error state

**Props:**
```typescript
interface GlassInputProps {
  type: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  label?: string
  error?: string
  icon?: ReactNode
  fullWidth?: boolean
  disabled?: boolean
}
```

**✋ APPROVAL CHECKPOINT:**
- [ ] UI Review inputs
- [ ] Focus states
- [ ] Error states
- [ ] With/without labels

---

#### Component 1.2.3: GlassTag.tsx
**Час: 30 хв**

**Використання:** Tech stack tags, industry tags, category badges

**Props:**
```typescript
interface GlassTagProps {
  text: string
  variant: 'primary' | 'secondary' | 'accent'
  size: 'small' | 'medium'
  icon?: ReactNode
  onClick?: () => void
}
```

**✋ APPROVAL CHECKPOINT:**
- [ ] UI Review tags (всі розміри)
- [ ] Hover states для clickable

---

#### Component 1.2.4: GlassIcon.tsx
**Час: 45 хв**

**Обгортка для іконок з glass ефектом**

**Props:**
```typescript
interface GlassIconProps {
  icon: ReactNode | string
  size: 'small' | 'medium' | 'large'
  variant: 'circle' | 'square' | 'none'
  color?: string
}
```

**✋ APPROVAL CHECKPOINT:**
- [ ] UI Review icons в різних варіантах

---

### 1.3 Створення Layout компонентів

#### Component 1.3.1: Navigation.tsx
**Час: 3 години**

**Структура:**
```
[Logo] [Menu Items] [Language] [CTA Button]
```

**Features:**
- Sticky navigation
- Backdrop blur on scroll
- Active menu item highlight
- Mobile responsive menu
- Smooth scroll

**✋ APPROVAL CHECKPOINT:**
- [ ] Desktop navigation UI
- [ ] Mobile menu UI
- [ ] Scroll behavior
- [ ] Active states
- [ ] Yellow accent usage

---

#### Component 1.3.2: Footer.tsx
**Час: 2 години**

**Структура:**
```
[Logo + Tagline] [Services] [Tech] [Company] [Resources]
[Social Links]
[Copyright]
```

**✋ APPROVAL CHECKPOINT:**
- [ ] Footer layout
- [ ] Links styling
- [ ] Social icons
- [ ] Mobile layout

---

#### Component 1.3.3: PageHeader.tsx (Hero pattern)
**Час: 2 години**

**Reusable hero для internal pages**

**Props:**
```typescript
interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: Array<{label: string, href: string}>
  backgroundVariant?: 'default' | 'gradient' | 'pattern'
}
```

**✋ APPROVAL CHECKPOINT:**
- [ ] Hero variants
- [ ] Typography hierarchy
- [ ] Breadcrumbs style

---

## 🔷 ФАЗА 2: Homepage Sections (Тиждень 2)

### ⚠️ ПРАВИЛО: Реюзати компоненти з Фази 1!

### 2.1 Hero Section
**Час: 3 години**

**Компоненти що використовуємо:**
- ✅ `GlassCard` (для hero container)
- ✅ `GlassButton` (primary + secondary CTAs)
- Новий: `AnimatedBackground` (optional)

**Елементи:**
- Заголовок + підзаголовок
- 2 CTA кнопки
- Team photos carousel (optional)
- Quick links

**✋ APPROVAL CHECKPOINT:**
- [ ] Hero layout
- [ ] Typography sizes
- [ ] CTA buttons placement
- [ ] Background animation (якщо є)
- [ ] Mobile responsive

---

### 2.2 MetricsBar Section
**Час: 2 години**

**Компоненти:**
- Новий: `MetricCard.tsx` (based on GlassCard)

**Props:**
```typescript
interface MetricCardProps {
  icon: ReactNode
  value: string | number
  label: string
  animated?: boolean
}
```

**Layout:**
- Desktop: 4 columns grid
- Mobile: Horizontal scroll

**✋ APPROVAL CHECKPOINT:**
- [ ] Metric card design
- [ ] Icons + numbers styling
- [ ] Grid/scroll behavior
- [ ] Animation (counter)

---

### 2.3 ServiceTabs Section
**Час: 4 години**

**Компоненти:**
- Новий: `TabContainer.tsx`
- Новий: `ServiceCard.tsx` (based on GlassCard)
- ✅ Реюз `GlassButton`

**Variants:**
- Tab 1: Staff Augmentation
- Tab 2: Custom Development

**✋ APPROVAL CHECKPOINT:**
- [ ] Tab switching UI
- [ ] Service card layout
- [ ] Icons + content hierarchy
- [ ] CTA buttons

---

### 2.4 IndustryGrid Section
**Час: 2 години**

**Компоненти:**
- Новий: `IndustryCard.tsx` (based on GlassCard)

**Layout:** 3x2 grid (responsive)

**Card structure:**
```
[Icon]
Industry Name
Short description
[View Projects →]
Tech badges
```

**✋ APPROVAL CHECKPOINT:**
- [ ] Industry card hover
- [ ] Icon treatment
- [ ] Grid spacing
- [ ] Tech badges style

---

### 2.5 PortfolioShowcase Section
**Час: 4 години**

**Компоненти:**
- Новий: `ProjectCard.tsx` ⚠️ ВАЖЛИВИЙ компонент!
- ✅ Реюз `GlassTag` для tech stack
- ✅ Реюз `GlassButton` для CTA

**Card structure:**
```
[Screenshot/Mockup - aspect ratio 16:9]
Project Name
[Industry Tag] [Tech Tags...]
Description
📊 Results:
  • Metric 1
  • Metric 2
[View Case Study →]
```

**✋ APPROVAL CHECKPOINT:**
- [ ] Project card design ⭐ КРИТИЧНИЙ
- [ ] Image treatment
- [ ] Tag layout
- [ ] Metrics presentation
- [ ] Hover effects
- [ ] Mobile card

**❗ Цей компонент буде реюзатись скрізь в portfolio!**

---

### 2.6 TechStack Section
**Час: 2 години**

**Компоненти:**
- ✅ Реюз `GlassTag` або створити `TechBadge`

**Layout:** Categorized grid

```
Frontend:
[React] [Next.js] [Vue.js] ...

Backend:
[Ruby] [Node.js] [PostgreSQL] ...
```

**✋ APPROVAL CHECKPOINT:**
- [ ] Tech badge style
- [ ] Categorization layout
- [ ] Hover interaction (show projects % - optional)

---

### 2.7 ProcessTimeline Section
**Час: 3 години**

**Компоненти:**
- Новий: `ProcessStep.tsx`

**Layout:** Horizontal timeline (mobile: vertical)

**✋ APPROVAL CHECKPOINT:**
- [ ] Timeline connector design
- [ ] Step card design
- [ ] Icons/numbers treatment
- [ ] Mobile vertical layout

---

### 2.8 TestimonialsCarousel Section
**Час: 3 години**

**Компоненти:**
- Новий: `TestimonialCard.tsx` (based on GlassCard)
- Carousel logic

**Card structure:**
```
[Client Photo/Logo]
"Quote"
— Name
  Position, Company
  ⭐⭐⭐⭐⭐
```

**✋ APPROVAL CHECKPOINT:**
- [ ] Testimonial card design
- [ ] Carousel controls
- [ ] Auto-play behavior
- [ ] Clutch integration mockup

---

### 2.9 WhyChoose Section
**Час: 2 години**

**Компоненти:**
- Новий: `FeatureCard.tsx` (simple variant of GlassCard)

**Layout:** 3x2 grid

**✋ APPROVAL CHECKPOINT:**
- [ ] Feature card design
- [ ] Icon + text layout
- [ ] Grid spacing

---

### 2.10 CTASection (Final)
**Час: 1 година**

**Компоненти:**
- ✅ Реюз `GlassCard` (hero variant)
- ✅ Реюз `GlassButton`

**Simple centered CTA block**

**✋ APPROVAL CHECKPOINT:**
- [ ] CTA section contrast
- [ ] Button hierarchy

---

## 🔷 ФАЗА 3: Service Pages (Тиждень 3)

### ⚠️ МАКСИМАЛЬНИЙ РЕЮЗ компонентів!

### 3.1 Staff Augmentation Page

**Використовуємо БЕЗ змін:**
- ✅ `PageHeader`
- ✅ `ProcessTimeline` (адаптуємо контент)
- ✅ `MetricCard`
- ✅ `GlassCard` для секцій

**Нові компоненти:**
- `DeveloperProfileCard.tsx` (based on ProjectCard pattern)
- `PricingTable.tsx`

**✋ APPROVAL CHECKPOINTS:**
- [ ] Developer profile card
- [ ] Pricing table design
- [ ] Page layout consistency

---

### 3.2 Custom Development Page

**Використовуємо БЕЗ змін:**
- ✅ `PageHeader`
- ✅ `ServiceCard` (з Homepage)
- ✅ `ProjectCard` (filtered portfolio)
- ✅ `TechBadge`

**Нові компоненти:**
- `EngagementModelCard.tsx` (варіант ServiceCard)

**✋ APPROVAL CHECKPOINT:**
- [ ] Engagement model cards
- [ ] Overall consistency з homepage

---

### 3.3 UI/UX Design Page

**Використовуємо БЕЗ змін:**
- ✅ `PageHeader`
- ✅ `ProcessTimeline` (design process)
- ✅ `ProjectCard` (design portfolio)
- ✅ Team member cards

**Нові компоненти:**
- Можливо `ToolCard.tsx` для design tools

**✋ APPROVAL CHECKPOINT:**
- [ ] Design portfolio presentation
- [ ] Process visualization

---

## 🔷 ФАЗА 4: Technology Pages (Тиждень 3-4)

### Strategy: Єдиний Template для всіх tech pages

**Створюємо:**
- `TechPageTemplate.tsx` + MDX/JSON data

**Використовуємо:**
- ✅ `PageHeader`
- ✅ `ProjectCard` (filtered по tech)
- ✅ `TechBadge`
- ✅ `FeatureCard`

**Data-driven approach:**
```typescript
// lib/data/technologies.ts
export const technologies = {
  'react-development': {
    name: 'React',
    hero: {...},
    expertise: [...],
    projects: [...],
    faqs: [...]
  },
  // ... решта
}
```

**✋ APPROVAL CHECKPOINT:**
- [ ] Template design
- [ ] Data structure
- [ ] Одна tech page як приклад

**✅ Після approval - генеруємо решту автоматично**

---

## 🔷 ФАЗА 5: Industry Pages (Тиждень 4)

### Strategy: Той самий підхід - Template

**Створюємо:**
- `IndustryPageTemplate.tsx` + data

**Використовуємо:**
- ✅ `PageHeader`
- ✅ `ProjectCard` (filtered)
- ✅ `FeatureCard`
- ✅ `IndustryCard`

**✋ APPROVAL CHECKPOINT:**
- [ ] Industry template
- [ ] Одна industry page як приклад

---

## 🔷 ФАЗА 6: Portfolio Section (Тиждень 5)

### 6.1 Portfolio Grid Page

**Використовуємо:**
- ✅ `ProjectCard` (той самий з Homepage!)
- Новий: `FilterBar.tsx`

**Features:**
- Filter by industry
- Filter by tech
- Sort options
- Search (optional)

**✋ APPROVAL CHECKPOINT:**
- [ ] Filter bar design
- [ ] Grid layout
- [ ] Filter interactions

---

### 6.2 Project Detail Page Template

**Використовуємо:**
- ✅ `PageHeader` (з breadcrumbs)
- ✅ `TechBadge`
- ✅ `GlassCard` для секцій
- Новий: `ImageGallery.tsx`

**Sections:**
1. Hero (screenshot)
2. Overview
3. Challenge
4. Solution (з screenshots)
5. Results & Impact
6. Tech stack
7. Navigation (next/prev project)

**✋ APPROVAL CHECKPOINT:**
- [ ] Project detail layout
- [ ] Image gallery treatment
- [ ] Results presentation
- [ ] Mobile layout

---

## 🔷 ФАЗА 7: About & Team (Тиждень 5)

**Використовуємо:**
- ✅ `PageHeader`
- ✅ `GlassCard`
- ✅ `MetricCard`
- Новий: `TeamMemberCard.tsx`

**✋ APPROVAL CHECKPOINT:**
- [ ] Team member card
- [ ] About page layout
- [ ] Photo treatment

---

## 🔷 ФАЗА 8: Blog/Insights (Тиждень 6)

**Використовуємо:**
- ✅ `PageHeader`
- Новий: `ArticleCard.tsx` (based on ProjectCard)
- Новий: `ArticleTemplate.tsx`

**✋ APPROVAL CHECKPOINT:**
- [ ] Article card
- [ ] Article detail page
- [ ] Blog grid layout

---

## 🔷 ФАЗА 9: Interactive Features (Тиждень 7)

### 9.1 Cost Calculator

**Компоненти:**
- ✅ `GlassCard`
- ✅ `GlassInput`
- ✅ `GlassButton`
- Новий: `Slider.tsx`
- Новий: `RadioGroup.tsx` (glass styled)

**✋ APPROVAL CHECKPOINT:**
- [ ] Calculator UI
- [ ] Form controls styling
- [ ] Results presentation

---

### 9.2 AI Advisor Widget

**Компоненти:**
- Новий: `ChatWidget.tsx`
- Новий: `ChatMessage.tsx`
- ✅ `GlassButton`
- ✅ `GlassInput`

**✋ APPROVAL CHECKPOINT:**
- [ ] Widget closed state (floating button)
- [ ] Widget open state (chat window)
- [ ] Message bubbles
- [ ] Animation states

---

### 9.3 Contact Form

**Використовуємо:**
- ✅ `GlassInput`
- ✅ `GlassButton`
- ✅ `GlassCard`

**No new components needed!**

**✋ APPROVAL CHECKPOINT:**
- [ ] Form layout
- [ ] Validation states

---

## 🔷 ФАЗА 10: SEO & Performance (Тиждень 8)

### Технічна робота (no UI approvals):

- [ ] Next.js metadata для всіх pages
- [ ] Open Graph images
- [ ] Sitemap generation
- [ ] robots.txt
- [ ] Schema.org markup
- [ ] Performance optimization
- [ ] Image optimization
- [ ] Code splitting

---

## 🔷 ФАЗА 11: Content & Polish (Тиждень 9)

- [ ] Фінальний контент для всіх сторінок
- [ ] Copy review
- [ ] Images optimization
- [ ] Translation (EN/UA якщо потрібно)
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Accessibility check
- [ ] Performance testing

**✋ FINAL APPROVAL:**
- [ ] Full site walkthrough
- [ ] All pages reviewed
- [ ] Mobile experience
- [ ] Performance metrics

---

## 🔷 ФАЗА 12: Launch (Тиждень 10)

- [ ] Production deployment
- [ ] Analytics setup
- [ ] Monitoring setup
- [ ] Documentation
- [ ] Training (якщо потрібно)

---

## 📊 COMPONENT REUSE MATRIX

**Мета: Максимізувати реюз, мінімізувати нові компоненти**

| Компонент | Використання (к-сть місць) | Priority |
|-----------|---------------------------|----------|
| GlassCard | 50+ | ⭐⭐⭐⭐⭐ |
| GlassButton | 30+ | ⭐⭐⭐⭐⭐ |
| GlassInput | 10+ | ⭐⭐⭐⭐ |
| GlassTag | 20+ | ⭐⭐⭐⭐ |
| ProjectCard | 15+ | ⭐⭐⭐⭐⭐ |
| PageHeader | 15+ | ⭐⭐⭐⭐⭐ |
| Navigation | 1 (global) | ⭐⭐⭐⭐⭐ |
| Footer | 1 (global) | ⭐⭐⭐⭐⭐ |
| MetricCard | 10+ | ⭐⭐⭐ |
| ServiceCard | 5+ | ⭐⭐⭐ |

---

## 🎯 APPROVAL CHECKLIST TEMPLATE

### Перед кожним approval:

**Desktop:**
- [ ] Visual design відповідає Liquid Glass системі
- [ ] Yellow accent використовується правильно
- [ ] Hover states працюють
- [ ] Active states працюють
- [ ] Spacing consistency
- [ ] Typography hierarchy

**Mobile:**
- [ ] Responsive layout
- [ ] Touch targets достатні (44x44px min)
- [ ] Text readable
- [ ] Images адаптовані

**Accessibility:**
- [ ] Contrast ratio достатній
- [ ] Keyboard navigation працює
- [ ] Screen reader friendly

**Performance:**
- [ ] No layout shift
- [ ] Smooth animations
- [ ] Images optimized

---

## 🚦 DECISION POINTS

### Коли створювати новий компонент?

**✅ ТАК, створюй новий, якщо:**
1. Немає схожого існуючого
2. Логіка принципово інша
3. Буде реюзатись 3+ рази
4. Покращує архітектуру

**❌ НІ, НЕ створюй, якщо:**
1. Можна розширити існуючий через props
2. Відрізняється тільки контентом
3. Використається тільки 1 раз
4. Можна вирішити через CSS класи

---

## 📦 DELIVERABLES ПО ФАЗАХ

### Фаза 1:
- [ ] 4 базових atoms
- [ ] 3 layout components
- [ ] Component documentation

### Фаза 2:
- [ ] Homepage (13 sections)
- [ ] 10 reusable section components

### Фаза 3:
- [ ] 3 service pages
- [ ] 3 нових компоненти

### Фаза 4-5:
- [ ] 2 templates
- [ ] Data structure
- [ ] 10+ auto-generated pages

### Фаза 6:
- [ ] Portfolio grid
- [ ] Project detail template
- [ ] 6+ project pages

### Фаза 7-8:
- [ ] About page
- [ ] Team page
- [ ] Blog structure

### Фаза 9:
- [ ] Calculator
- [ ] AI Widget
- [ ] Contact form

### Фаза 10-12:
- [ ] Production-ready site
- [ ] SEO optimized
- [ ] Performance optimized

---

## ⏱️ ESTIMATED TIMELINE

**Total: 9-10 тижнів**

| Фаза | Час | Approval Points |
|------|-----|-----------------|
| 1 | 1 тиждень | 7 checkpoints |
| 2 | 1 тиждень | 10 checkpoints |
| 3 | 1 тиждень | 3 checkpoints |
| 4 | 0.5 тижня | 1 checkpoint |
| 5 | 0.5 тижня | 1 checkpoint |
| 6 | 1 тиждень | 2 checkpoints |
| 7-8 | 1 тиждень | 3 checkpoints |
| 9 | 1 тиждень | 3 checkpoints |
| 10 | 1 тиждень | - |
| 11-12 | 2 тижні | 1 final |

**Total Approval Checkpoints: ~30**

---

## 🎨 DESIGN TOKENS REFERENCE

**Всі компоненти МУСЯТЬ використовувати:**

### Colors:
```css
--brand-yellow: #F4D03F
--brand-yellow-light: #F9E79F
--brand-yellow-dark: #D4A017
--brand-black: #1a1a1a
--brand-white: #ffffff
```

### Glass Effects:
```css
--glass-bg
--glass-overlay
--glass-highlight
--glass-border
--glass-blur
```

### Spacing:
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 96px
```

### Typography:
```css
--font-size-xs through --font-size-6xl
--font-weight-normal through --font-weight-bold
```

**🚫 ЗАБОРОНЕНО створювати кастомні values поза системою!**

---

## 📝 COMPONENT DOCUMENTATION TEMPLATE

### Для кожного компоненту створюємо:

```markdown
# ComponentName

## Usage
\`\`\`tsx
<ComponentName variant="primary" size="large">
  Content
</ComponentName>
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Variants
- variant="primary" - Yellow gradient
- variant="secondary" - Dark with border

## Examples
[Screenshots з UI review]

## Used In
- Homepage: Hero section
- Services: CTA blocks
- Contact: Form submit

## Dependencies
- GlassCard
- Icon

## Notes
- Uses --brand-yellow
- Reused 15+ times across site
```

---

## 🎯 SUCCESS METRICS

### Code Quality:
- [ ] Component reuse rate > 80%
- [ ] New components < 30 total
- [ ] CSS duplication < 5%
- [ ] Type safety 100%

### Design Consistency:
- [ ] All glass effects use system classes
- [ ] All colors from design tokens
- [ ] All spacing from system
- [ ] Visual consistency score > 95%

### Performance:
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Core Web Vitals - all green

---

## 🔄 WORKFLOW ПРИКЛАД

### Створення ProjectCard компонента:

**День 1 (2 години):**
1. Аналіз: чи є схожі компоненти? (GlassCard ✅)
2. Design в коді базуючись на GlassCard
3. Імплементація Props interface
4. Створення 3 variants
5. Hover states
6. Mobile responsive

**✋ ЗУПИНКА - готую UI review:**
- Screenshots всіх variants
- Hover state demo
- Mobile screenshots
- Props documentation

**Чекаю approval...**

**День 2 (1 година) - після approval ✅:**
1. Фіксы з review (якщо є)
2. Документація
3. Використання в Homepage
4. Тестування в 2-3 місцях
5. Commit з описом

**День 3+:**
- Реюз ProjectCard на інших сторінках БЕЗ змін
- Якщо потрібні зміни → обговорюємо extend vs new component

---

## 🚀 READY TO START?

### Перший крок:
1. Review цього плану
2. Approve структуру
3. Починаємо з Component 1.2.1: GlassButton
4. Створюю → показую → чекаю approval → продовжую

**Чи готові почати? Маєте питання до плану?**
