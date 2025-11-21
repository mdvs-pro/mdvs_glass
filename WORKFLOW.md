# 🔄 MDVS Development Workflow

**Покроковий процес розробки з approval checkpoints**

---

## 🎯 GOLDEN RULES

### 1. Consistency над швидкістю

Краще зробити повільніше, але консистентно, ніж швидко але по-різному.

### 2. Reuse над створенням

Завжди спочатку шукай існуюче рішення, тільки потім створюй нове.

### 3. Approval над автономією

Кожен компонент проходить перевірку. Без виключень.

### 4. Documentation обов'язкова

Що не задокументовано - не існує для інших розробників.

---

## 📋 STANDARD WORKFLOW

### Фаза 1: Планування

```
┌─────────────────────────────┐
│  1. Отримати завдання       │
│     (напр: "Створити Hero") │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│  2. Перевірити реєстр       │
│     COMPONENT_REGISTRY.md   │
└─────────────┬───────────────┘
              │
              ▼
        ┌─────┴─────┐
        │           │
    Є компонент?
        │           │
      ТАК         НІ
        │           │
        ▼           ▼
   [Реюзаю]    [Створюю новий]
        │           │
        └─────┬─────┘
              ▼
   [Продовжую розробку]
```

---

### Фаза 2: Розробка (ЯКЩО створюємо новий компонент)

#### Крок 1: Дизайн компонента (30-60 хв)

**Checklist:**

- [ ] Переглянути `glass-system.css` - які класи можу реюзати?
- [ ] Використати існуючі CSS змінні з `variables.css`
- [ ] Визначити Props interface
- [ ] Спланувати variants
- [ ] Спланувати states (hover, active, disabled, loading)

**Приклад Props planning:**

```typescript
interface ComponentNameProps {
  // Required
  children: ReactNode

  // Variants (styling differences)
  variant?: 'primary' | 'secondary' | 'outline'

  // Sizes
  size?: 'small' | 'medium' | 'large'

  // Behavior
  disabled?: boolean
  loading?: boolean

  // Events
  onClick?: () => void

  // Custom
  className?: string
}
```

---

#### Крок 2: Імплементація (1-2 години)

**Структура файлу:**

```typescript
'use client'

import { ReactNode } from 'react'
// Імпорти інших потрібних компонентів

/**
 * ComponentName - короткий опис
 *
 * @example
 * <ComponentName variant="primary" size="large">
 *   Content
 * </ComponentName>
 */

interface ComponentNameProps {
  // ... props
}

export default function ComponentName({
  variant = 'primary',
  size = 'medium',
  children,
  ...otherProps
}: ComponentNameProps) {
  // Logic

  const variantClasses = {
    primary: 'glass-button-primary',
    secondary: 'glass-button-secondary',
    outline: 'glass-button-outline',
  }[variant]

  const sizeClasses = {
    small: 'text-sm px-4 py-2',
    medium: 'text-base px-6 py-3',
    large: 'text-lg px-8 py-4',
  }[size]

  return (
    <div className={`glass-component ${variantClasses} ${sizeClasses}`}>
      <div className="glass-filter"></div>
      <div className="glass-overlay"></div>
      <div className="glass-specular"></div>
      <div className="glass-content">
        {children}
      </div>
    </div>
  )
}
```

**Важливо:**

- ✅ Використовувати існуючі glass класи
- ✅ Додавати коментарі
- ✅ Type safety (TypeScript)
- ✅ Default props values
- ❌ НЕ створювати inline styles (використовувати CSS classes)
- ❌ НЕ винаходити нові кольори (тільки з variables.css)

---

#### Крок 3: Створення тестової сторінки (30 хв)

**Створити файл:** `src/app/test-components/page.tsx`

```typescript
import ComponentName from '@/components/path/ComponentName'

export default function TestComponentsPage() {
  return (
    <div className="min-h-screen p-8 bg-black">
      <h1 className="text-white text-3xl mb-8">ComponentName Tests</h1>

      {/* Variant tests */}
      <section className="mb-12">
        <h2 className="text-white text-xl mb-4">Variants</h2>
        <div className="flex gap-4">
          <ComponentName variant="primary">Primary</ComponentName>
          <ComponentName variant="secondary">Secondary</ComponentName>
          <ComponentName variant="outline">Outline</ComponentName>
        </div>
      </section>

      {/* Size tests */}
      <section className="mb-12">
        <h2 className="text-white text-xl mb-4">Sizes</h2>
        <div className="flex gap-4 items-center">
          <ComponentName size="small">Small</ComponentName>
          <ComponentName size="medium">Medium</ComponentName>
          <ComponentName size="large">Large</ComponentName>
        </div>
      </section>

      {/* State tests */}
      <section className="mb-12">
        <h2 className="text-white text-xl mb-4">States</h2>
        <div className="flex gap-4">
          <ComponentName>Normal</ComponentName>
          <ComponentName disabled>Disabled</ComponentName>
          <ComponentName loading>Loading</ComponentName>
        </div>
      </section>

      {/* Mobile test */}
      <section className="mb-12">
        <h2 className="text-white text-xl mb-4">Mobile (resize window)</h2>
        <ComponentName fullWidth>Full Width</ComponentName>
      </section>
    </div>
  )
}
```

---

### 🛑 Фаза 3: APPROVAL CHECKPOINT

#### Підготовка до approval:

**1. Запустити dev server:**

```bash
npm run dev
```

**2. Відкрити test page:**

```
http://localhost:3000/test-components
```

**3. Зробити screenshots:**

- Desktop view - всі variants
- Desktop view - всі sizes
- Desktop view - всі states
- Hover states (screen recording або screenshots)
- Mobile view (resize до 375px width)

**4. Створити approval document:**

```markdown
# ComponentName - Approval Request

## Overview

[Короткий опис що робить компонент]

## Screenshots

### Desktop - Variants

![Variants](screenshots/variants.png)

### Desktop - Sizes

![Sizes](screenshots/sizes.png)

### Desktop - States

![States](screenshots/states.png)

### Hover Effects

[Link to screen recording or GIF]

### Mobile View

![Mobile](screenshots/mobile.png)

## Props

| Prop    | Type   | Default   | Description    |
| ------- | ------ | --------- | -------------- |
| variant | string | 'primary' | Visual variant |
| size    | string | 'medium'  | Size variant   |
| ...     | ...    | ...       | ...            |

## CSS Classes Used

- `.glass-component` (from glass-system.css)
- `.glass-button-primary` (from glass-system.css)
- Custom spacing utilities

## Planned Usage

- Homepage: Hero CTA (2 instances)
- Service pages: CTAs (6 instances)
- Contact form: Submit (1 instance)
- **Total projected: 15+ instances**

## Notes

- Reuses existing GlassCard structure
- All colors from design tokens
- Fully responsive
- Accessibility: keyboard navigation works

## Questions

1. Чи достатньо виразний hover effect?
2. Чи потрібен додатковий variant "ghost"?
3. Чи розмір "medium" підходить як default?

---

**Ready for approval! 🎨**
```

---

#### ✋ ЗУПИНКА - Чекаємо approval

**Що робити:**

1. Відправити approval document
2. Показати live demo на localhost
3. Відповісти на питання
4. Чекати на feedback

**Можливі результати:**

```
┌──────────────────┐
│  APPROVAL CHECK  │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
   ✅        ❌
APPROVED   REJECTED
    │         │
    │         └──► [Фікси] ──► [Re-submit]
    │
    ▼
[Продовжити]
```

---

### Фаза 4: Після Approval ✅

#### Крок 1: Фіксы (якщо потрібні) (30-60 хв)

- Внести зміни з review
- Повторно протестувати
- Оновити screenshots якщо суттєві зміни

#### Крок 2: Документація (15-30 хв)

**Оновити COMPONENT_REGISTRY.md:**

```markdown
#### ✅ ComponentName

**Status:** ✅ Approved
**File:** `src/components/path/ComponentName.tsx`
**Approved Date:** 2025-01-15

**Props:**
[Copy from approval doc]

**Variants:**
[List variants]

**Will be used in:**
[List usage locations]

**Reuse Score:** ⭐⭐⭐⭐

**Notes:**
[Any important notes]

**Approval Screenshots:** `/docs/approvals/component-name/`
```

#### Крок 3: Storybook/Documentation (optional, 30 хв)

Якщо використовуєте Storybook:

```typescript
// ComponentName.stories.tsx
import ComponentName from './ComponentName'

export default {
  title: 'Glass/ComponentName',
  component: ComponentName,
}

export const Primary = () => <ComponentName variant="primary">Primary</ComponentName>
export const Secondary = () => <ComponentName variant="secondary">Secondary</ComponentName>
// ... інші stories
```

#### Крок 4: Commit (5 хв)

```bash
git add .
git commit -m "feat: Add ComponentName component

- Primary, secondary, outline variants
- Small, medium, large sizes
- Hover, active, disabled states
- Fully responsive
- Approved: 2025-01-15

Closes #TASK_NUMBER"
```

---

### Фаза 5: Використання Компонента

#### При використанні в сторінці:

**Checklist:**

- [ ] Імпортувати з правильного шляху
- [ ] Використовувати затверджені variants
- [ ] НЕ додавати inline styles поверх
- [ ] Якщо потрібні зміни → обговорити extend vs new variant

**Приклад правильного використання:**

```typescript
// ✅ ПРАВИЛЬНО
import GlassButton from '@/components/glass/GlassButton'

<GlassButton variant="primary" size="large">
  Book a Call
</GlassButton>

// ❌ НЕПРАВИЛЬНО
<GlassButton
  variant="primary"
  size="large"
  style={{backgroundColor: 'red'}} // НЕ робити!
>
  Book a Call
</GlassButton>

// 🤔 Якщо потрібен червоний button - створити variant "danger"
```

---

## 🔁 ITERATIVE WORKFLOW

### Коли потрібно розширити існуючий компонент:

```
┌──────────────────────────────┐
│ Потрібна нова функціональність│
└────────────┬─────────────────┘
             │
        ┌────┴────┐
        │         │
    Малі зміни  Великі зміни
        │         │
        ▼         ▼
    [Extend    [Discuss:
     props]     new variant
        │      or new component?]
        │         │
        ▼         ▼
   [PR with   [RFC document]
    changes]      │
        │         ▼
        └────┬────┘
             ▼
       [Approval needed]
             │
             ▼
        [Implement]
```

---

## 📊 DAILY WORKFLOW EXAMPLE

### Приклад робочого дня:

**9:00-10:00** - Planning

- Review завдань на день
- Перевірка COMPONENT_REGISTRY.md
- Визначення що можна реюзати

**10:00-12:00** - Development

- Створення GlassButton
- Всі variants + states
- Test page setup

**12:00-13:00** - Lunch break

**13:00-13:30** - Approval preparation

- Screenshots
- Approval document
- Demo preparation

**13:30-14:00** - Approval meeting

- Показ компонента
- Обговорення feedback
- Approval або список фіксів

**14:00-15:00** - Fixes (якщо потрібно)

- Внесення змін
- Re-testing

**15:00-15:30** - Documentation

- Update COMPONENT_REGISTRY.md
- Commit changes

**15:30-17:00** - Usage

- Використання в Homepage Hero
- Тестування в контексті
- Final testing

**17:00-17:30** - Wrap up

- Commit day's work
- Update TODO list
- Plan next day

---

## 🎯 QUALITY GATES

### Перед кожним commit:

```bash
# 1. Type check
npm run type-check

# 2. Lint
npm run lint

# 3. Format
npm run format

# 4. Build test
npm run build

# 5. Visual check
# Відкрити в браузері та перевірити
```

**Всі checks мають бути ✅ перед commit!**

---

## 📝 COMMUNICATION TEMPLATES

### Запит на approval (Slack/Email):

```
Subject: [APPROVAL NEEDED] ComponentName

Hey! 👋

Готовий компонент GlassButton для review.

📍 Live demo: http://localhost:3000/test-components
📄 Approval doc: /docs/approvals/glass-button.md
🖼️ Screenshots: /docs/approvals/glass-button/screenshots/

Variants: Primary, Secondary, Outline
Sizes: Small, Medium, Large
States: Normal, Hover, Active, Disabled, Loading

Projected usage: 30+ instances across site

Questions:
1. Чи достатньо контрастний yellow на primary variant?
2. Чи потрібен додатковий variant для destructive actions?

Ready when you are! ⏰
```

---

### Feedback incorporation:

```
Subject: Re: [APPROVAL NEEDED] ComponentName

Thanks for feedback! 🙏

Fixed:
✅ Increased yellow saturation on primary (+10%)
✅ Added 2px to hover lift (now 4px)
✅ Improved disabled state contrast

Changes:
❌ Skipped destructive variant (will create separate later if needed)

Updated screenshots: /docs/approvals/glass-button/screenshots/v2/

Ready for re-review 👍
```

---

## 🚨 RED FLAGS - Коли зупинитись

### 🛑 STOP if:

1. **Створюєш 3й схожий компонент**
   → Можливо перший треба зробити більш гнучким?

2. **Копіюєш CSS код з іншого компонента**
   → Винеси в shared class в glass-system.css

3. **Створюєш нові кольори inline**
   → Використовуй тільки CSS variables

4. **Компонент >200 lines коду**
   → Розбий на менші компоненти

5. **Потрібно >5 props для базового use case**
   → Переглянь API, можливо треба спростити

6. **Не можеш пояснити навіщо потрібен компонент**
   → Можливо він не потрібен?

---

## ✅ SUCCESS CHECKLIST

### Компонент готовий до production коли:

- [ ] ✅ Approved UI review
- [ ] ✅ Documented в COMPONENT_REGISTRY.md
- [ ] ✅ TypeScript types complete
- [ ] ✅ Всі variants implemented
- [ ] ✅ Responsive на mobile
- [ ] ✅ Keyboard accessible
- [ ] ✅ Used в мінімум 1 місці
- [ ] ✅ Screenshot збережений
- [ ] ✅ Code formatted & linted
- [ ] ✅ Committed з proper message

---

**This workflow is our contract для consistency! 🤝**
