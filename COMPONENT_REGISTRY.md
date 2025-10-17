# 📦 MDVS Component Registry

**Живий реєстр всіх компонентів для контролю реюзу**

---

## 🎯 ПРАВИЛА ВИКОРИСТАННЯ

### Перед створенням нового компонента:

1. **ОБОВ'ЯЗКОВО** перевірити цей реєстр
2. Шукати схожий існуючий компонент
3. Якщо знайшли схожий → розширити його через props
4. Якщо не знайшли → додати в реєстр ПІСЛЯ approval

### Життєвий цикл компонента:

```
[Ідея] → [Перевірка реєстру] → [Дизайн] → [✋ UI Approval] → [Додати в реєстр] → [Використати]
```

---

## ✅ ЗАТВЕРДЖЕНІ КОМПОНЕНТИ

### 🔵 ATOMS (Базові елементи)

#### ✅ GlassCard
**Status:** ✅ Approved
**File:** `src/components/glass/GlassCard.tsx`
**Approved Date:** [Initial]

**Props:**
```typescript
interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'branded' | 'bordered'
  enableHover?: boolean
}
```

**Variants:**
- `default` - чистий glass без accent
- `branded` - з жовтим accent overlay
- `bordered` - з border та glow

**Використовується в:**
- Homepage: Hero, Services, Why Choose
- Service pages: всі секції
- Portfolio: project previews
- **Total uses: 50+**

**Reuse Score:** ⭐⭐⭐⭐⭐

**Notes:**
- Має mouse tracking для specular highlights
- Базовий wrapper для 90% контенту
- НЕ створювати альтернативні card компоненти!

---

#### ✅ LiquidGlassButton
**Status:** ✅ Approved
**File:** `src/components/glass/LiquidGlassButton.tsx`
**Created:** 2025-01-17
**Approved:** 2025-01-17

**Props:**
```typescript
interface LiquidGlassButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  backgroundImage?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}
```

**Variants:**
- `primary` - Yellow/bright background with liquid glass effect (default, main CTAs)
- `secondary` - Darker tint overlay with yellow text and border
- `outline` - Light tint overlay with white text and border

**Sizes:**
- `small` - Compact for navigation/inline actions
- `medium` - Standard for forms/CTAs (default)
- `large` - Prominent for hero sections

**Features:**
- Liquid glass effect with animated background
- Mouse tracking specular highlights (from GlassCard)
- SVG distortion filter
- Loading spinner animation
- Icon support (left/right)
- Full width option
- Disabled state with grayscale
- Custom background images via prop

**Used in:**
- Homepage: Hero CTA, Footer CTA (2 instances)
- Test page: All variants demo
- **Total current uses: 2+, projected: 30+**

**Reuse Score:** ⭐⭐⭐⭐⭐

**✅ APPROVED:**
- [x] Primary variant with background image
- [x] Secondary variant with dark tint
- [x] Outline variant with light tint
- [x] All sizes (small, medium, large)
- [x] Icon positions (left, right)
- [x] Loading state with spinner
- [x] Disabled state with opacity
- [x] Full width option
- [x] Mobile responsive

**Notes:**
- Works with backgroundImage prop - variants apply tint overlays
- Primary uses default yellow gradient as fallback
- Reuses glass layer structure from design system
- 'use client' directive for onClick handlers

---

#### ✅ GlassInput
**Status:** ✅ Approved
**File:** `src/components/glass/GlassInput.tsx`
**Created:** 2025-01-17
**Approved:** 2025-01-17

**Props:**
```typescript
interface GlassInputProps extends InputHTMLAttributes {
  label?: string
  error?: string
  helperText?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  variant?: 'default' | 'filled'
  multiline?: boolean
  rows?: number
}
```

**Features:**
- Text, email, tel, password, url types
- Textarea mode (multiline)
- Label with required indicator
- Error & helper text
- Icon support (left/right)
- Variants: default (dark), filled (yellow tint)
- Focus states with yellow border glow
- Disabled state
- Full width option
- Glass effect з 4 шарами
- Autofill styling

**Used in:**
- Test page: Contact form example
- **Projected: Contact forms (3+), Search (2+), Newsletter (1+), Calculator (5+) = 15+**

**Reuse Score:** ⭐⭐⭐⭐

**✅ APPROVED:**
- [x] All input types (text, email, tel, etc.)
- [x] Textarea mode
- [x] Label + required marker
- [x] Error and helper text
- [x] Icons (left/right position)
- [x] Variants (default, filled)
- [x] Focus states
- [x] Disabled state
- [x] Full width mode

**Notes:**
- Extends native HTML input attributes
- Glass layers reuse design system structure
- Focus border matches brand yellow
- Mobile font-size prevents iOS zoom

---

#### 🔨 GlassTextarea
**Status:** ⏳ Pending Creation
**Alternative:** Можливо інтегрувати в GlassInput через prop `multiline`?

**Decision needed:** Окремий компонент VS розширення GlassInput?

---

#### ✅ GlassTag
**Status:** ✅ Approved
**File:** `src/components/glass/GlassTag.tsx`
**Created:** 2025-01-17
**Approved:** 2025-01-17

**Props:**
```typescript
interface GlassTagProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'tech'
  size?: 'small' | 'medium'
  icon?: ReactNode
  removable?: boolean
  onRemove?: () => void
  onClick?: () => void
  backgroundImage?: string
  className?: string
}
```

**Variants:**
- `primary` - Yellow accent overlay with bright text
- `secondary` - Darker overlay with subtle styling
- `outline` - Light border with minimal background
- `tech` - Specialized for tech stack badges with yellow-gold tint

**Features:**
- Glass effect з 4 шарами (background, filter, overlay, shine)
- Optional animated background via backgroundImage prop
- Icon support
- Removable with × button
- Clickable with onClick handler
- Sizes: small (0.75rem), medium (0.875rem)

**Used in:**
- Test page: All variants demo
- **Projected: Tech stack (20+), Industries (10+), Blog tags (15+), Filters (5+) = 50+**

**Reuse Score:** ⭐⭐⭐⭐

**✅ APPROVED:**
- [x] All 4 variants (primary, secondary, outline, tech)
- [x] Both sizes (small, medium)
- [x] Icon support
- [x] Removable functionality
- [x] Clickable with hover states
- [x] Optional animated background
- [x] Mobile responsive

**Notes:**
- Default: non-animated glass effect
- Animated: add backgroundImage prop for moving background pattern
- Removable: × button with stopPropagation on click
- Uses Yellow accent color from design system

---

#### 🔨 GlassIcon
**Status:** ⏳ Pending Creation
**File:** `src/components/glass/GlassIcon.tsx`

**Props:**
```typescript
interface GlassIconProps {
  icon: ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  variant?: 'circle' | 'square' | 'rounded' | 'none'
  color?: string
  glassEffect?: boolean
}
```

**Will be used in:**
- Service cards
- Industry cards
- Feature lists
- Navigation icons

**Reuse Score:** ⭐⭐⭐⭐ (projected)

---

### 🟢 MOLECULES (Комбінації atoms)

#### 🔨 MetricCard
**Status:** ⏳ Pending Creation
**File:** `src/components/sections/MetricCard.tsx`
**Based on:** GlassCard + GlassIcon

**Props:**
```typescript
interface MetricCardProps {
  icon: ReactNode
  value: string | number
  label: string
  suffix?: string
  animated?: boolean
  animationDuration?: number
}
```

**Will be used in:**
- Homepage metrics bar
- About page stats
- Service pages stats
- **Total: 12+**

**Reuse Score:** ⭐⭐⭐ (projected)

---

#### 🔨 ProjectCard
**Status:** ⏳ Pending Creation - **ВИСОКИЙ ПРІОРИТЕТ**
**File:** `src/components/sections/ProjectCard.tsx`
**Based on:** GlassCard + GlassTag + GlassButton

**Props:**
```typescript
interface ProjectCardProps {
  project: {
    title: string
    slug: string
    industry: string
    tags: string[]
    description: string
    image: string
    metrics?: Array<{label: string, value: string}>
  }
  variant?: 'grid' | 'featured' | 'minimal'
  showMetrics?: boolean
}
```

**Will be used in:**
- Homepage portfolio (6 cards)
- Portfolio grid (15+ cards)
- Technology pages (filtered)
- Industry pages (filtered)
- Related projects sections
- **Total: 30+**

**Reuse Score:** ⭐⭐⭐⭐⭐ (projected)

**⚠️ КРИТИЧНИЙ КОМПОНЕНТ - повинен бути максимально гнучким!**

---

#### 🔨 ServiceCard
**Status:** ⏳ Pending Creation
**File:** `src/components/sections/ServiceCard.tsx`
**Based on:** GlassCard + GlassIcon + GlassButton

**Props:**
```typescript
interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  cta: {
    text: string
    href: string
  }
  variant?: 'default' | 'highlighted'
}
```

**Will be used in:**
- Homepage service tabs (2)
- Services page (4)
- Custom dev page (3)
- **Total: 10+**

**Reuse Score:** ⭐⭐⭐ (projected)

---

#### 🔨 IndustryCard
**Status:** ⏳ Pending Creation
**File:** `src/components/sections/IndustryCard.tsx`
**Based on:** GlassCard + GlassIcon + GlassTag

**Props:**
```typescript
interface IndustryCardProps {
  icon: ReactNode
  name: string
  description: string
  projectCount?: number
  technologies: string[]
  href: string
}
```

**Will be used in:**
- Homepage industry grid (6)
- Industries listing
- **Total: 8**

**Reuse Score:** ⭐⭐⭐ (projected)

---

#### 🔨 TestimonialCard
**Status:** ⏳ Pending Creation
**File:** `src/components/sections/TestimonialCard.tsx`
**Based on:** GlassCard

**Props:**
```typescript
interface TestimonialCardProps {
  quote: string
  author: {
    name: string
    position: string
    company: string
    photo?: string
    logo?: string
  }
  rating?: number
  clutchReview?: boolean
}
```

**Will be used in:**
- Homepage testimonials (5+)
- Service pages (3+)
- Case studies
- **Total: 10+**

**Reuse Score:** ⭐⭐⭐ (projected)

---

#### 🔨 FeatureCard
**Status:** ⏳ Pending Creation
**File:** `src/components/sections/FeatureCard.tsx`
**Based on:** GlassCard + GlassIcon

**Props:**
```typescript
interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  variant?: 'default' | 'compact'
}
```

**Will be used in:**
- Homepage "Why Choose" (6)
- About page (4)
- Service pages (12+)
- **Total: 25+**

**Reuse Score:** ⭐⭐⭐⭐ (projected)

---

#### 🔨 ArticleCard
**Status:** ⏳ Pending Creation
**File:** `src/components/sections/ArticleCard.tsx`
**Based on:** GlassCard + GlassTag

**Decision needed:** Чи можна реюзати ProjectCard з іншими props?

**Props:**
```typescript
interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  readTime: string
  publishedDate: string
  author?: {
    name: string
    avatar?: string
  }
  slug: string
}
```

**Will be used in:**
- Blog listing (10+)
- Homepage blog preview (3)
- Related articles
- **Total: 20+**

**Reuse Score:** ⭐⭐⭐ (projected)

---

### 🟡 ORGANISMS (Складні блоки)

#### 🔨 Navigation
**Status:** ⏳ Pending Creation
**File:** `src/components/layout/Navigation.tsx`
**Uses:** GlassButton, dropdown menus

**Props:**
```typescript
interface NavigationProps {
  transparent?: boolean
  sticky?: boolean
}
```

**Features:**
- Sticky with backdrop blur
- Mobile responsive menu
- Active page indicator
- Dropdown menus (Services, Technologies)
- CTA button
- Language switcher (optional)

**Will be used in:**
- Every page (global)

**Reuse Score:** ⭐⭐⭐⭐⭐

---

#### 🔨 Footer
**Status:** ⏳ Pending Creation
**File:** `src/components/layout/Footer.tsx`

**Will be used in:**
- Every page (global)

**Reuse Score:** ⭐⭐⭐⭐⭐

---

#### 🔨 PageHeader
**Status:** ⏳ Pending Creation
**File:** `src/components/layout/PageHeader.tsx`
**Uses:** GlassCard (optional), Breadcrumbs

**Props:**
```typescript
interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: Array<{label: string, href: string}>
  backgroundVariant?: 'default' | 'gradient' | 'image'
  backgroundImage?: string
  centered?: boolean
  size?: 'small' | 'medium' | 'large'
}
```

**Will be used in:**
- All internal pages (15+)
- Portfolio detail pages (10+)
- Blog posts (10+)

**Reuse Score:** ⭐⭐⭐⭐⭐ (projected)

---

### 🟠 TEMPLATES (Page templates)

#### 🔨 TechPageTemplate
**Status:** ⏳ Pending Creation
**File:** `src/components/templates/TechPageTemplate.tsx`

**Uses:**
- PageHeader
- FeatureCard
- ProjectCard (filtered)
- FAQ section

**Data-driven:** Приймає JSON/MDX з контентом

**Will be used in:**
- React page
- Vue page
- Next.js page
- Ruby page
- Node.js page
- React Native page
- **Total: 10+ tech pages**

**Reuse Score:** ⭐⭐⭐⭐⭐ (projected)

---

#### 🔨 IndustryPageTemplate
**Status:** ⏳ Pending Creation
**File:** `src/components/templates/IndustryPageTemplate.tsx`

**Uses:**
- PageHeader
- FeatureCard
- ProjectCard (filtered)
- TestimonialCard

**Will be used in:**
- FinTech
- Healthcare
- Real Estate
- SaaS
- Education
- Events
- **Total: 6 industry pages**

**Reuse Score:** ⭐⭐⭐⭐ (projected)

---

#### 🔨 ProjectDetailTemplate
**Status:** ⏳ Pending Creation
**File:** `src/components/templates/ProjectDetailTemplate.tsx`

**Uses:**
- PageHeader
- GlassCard (sections)
- ImageGallery
- GlassTag (tech stack)
- ProjectCard (related)

**Will be used in:**
- All portfolio projects (10+)

**Reuse Score:** ⭐⭐⭐⭐ (projected)

---

#### 🔨 ArticleTemplate
**Status:** ⏳ Pending Creation
**File:** `src/components/templates/ArticleTemplate.tsx`

**Uses:**
- PageHeader
- GlassCard (content)
- ArticleCard (related)
- GlassTag (tags)

**Will be used in:**
- All blog posts (10+)

**Reuse Score:** ⭐⭐⭐⭐ (projected)

---

## 🔴 ЗАБОРОНЕНІ ДІЇ

### ❌ НЕ створювати:

1. **CustomCard** - використовуй GlassCard
2. **SpecialButton** - розширюй GlassButton
3. **UniqueInput** - розширюй GlassInput
4. **OneTimeComponent** - якщо використовується 1 раз, інлайн в сторінці
5. **AlternativeProjectCard** - є один ProjectCard, він має variants

### ❌ НЕ дублювати:

1. Якщо відрізняється тільки **контент** → props
2. Якщо відрізняється **стиль** → variant prop
3. Якщо відрізняється **розмір** → size prop
4. Якщо відрізняється **поведінка** → behavior props

---

## 📊 STATISTICS

### Current Stats:
- **Total Components:** 4 created (GlassCard, LiquidGlassButton, GlassInput, GlassTag) + 17 (planned)
- **Atoms:** 4 approved, 1 planned
- **Molecules:** 8 planned
- **Organisms:** 3 planned
- **Templates:** 4 planned

### Reuse Metrics (projected):
- **GlassCard:** 50+ uses
- **GlassButton:** 30+ uses
- **ProjectCard:** 30+ uses
- **PageHeader:** 25+ uses
- **FeatureCard:** 25+ uses

### Target Efficiency:
- **Total unique components:** < 30
- **Total component instances:** 200+
- **Reuse ratio:** > 6x average

---

## 🔄 UPDATE LOG

### [Date] - Initial Registry
- ✅ Added GlassCard (approved)
- ⏳ Registered 20 pending components
- Created approval workflow

---

## 📝 APPROVAL TRACKER

### Pending Approvals:
1. [ ] GlassIcon (Priority: ⭐⭐⭐)
2. [ ] ProjectCard (Priority: ⭐⭐⭐⭐⭐) - КРИТИЧНИЙ
3. [ ] Navigation (Priority: ⭐⭐⭐⭐⭐)
4. [ ] Footer (Priority: ⭐⭐⭐⭐⭐)
5. [ ] PageHeader (Priority: ⭐⭐⭐⭐⭐)

### Approved:
1. [x] GlassCard (Initial component)
2. [x] LiquidGlassButton (2025-01-17)
3. [x] GlassInput (2025-01-17)
4. [x] GlassTag (2025-01-17)

---

## 🎯 NEXT ACTIONS

1. ✅ **LiquidGlassButton** → APPROVED
2. ✅ **GlassInput** → APPROVED
3. ✅ **GlassTag** → APPROVED
4. **Next: GlassIcon** → create and submit for approval (optional)
5. **Next: Navigation** → create and submit for approval
6. **Next: Footer** → create and submit for approval
7. **Next: PageHeader** → create and submit for approval

---

**Оновлюється після кожного approval!**
