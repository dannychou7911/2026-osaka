# Osaka 2026 — Design System

從 `index.html` 萃取的完整設計規範，作為 Vue 3 + Tailwind CSS 重構的唯一風格來源。

---

## 1. 設計風格定位

| 項目 | 說明 |
|------|------|
| **風格** | Playful Modern — 親子旅遊主題，溫暖友善但不幼稚 |
| **調性** | 明亮、圓潤、輕盈、有呼吸感 |
| **動態** | Motion-Driven — 滾動動畫、hover 微互動、入場動畫 |
| **參考關鍵字** | playful, friendly, warm, approachable, sky-blue, adventure-orange |

---

## 2. 色彩系統 (Color Tokens)

### 主色調

| Token | Hex | Tailwind | 用途 |
|-------|-----|----------|------|
| `sky-50` | `#F0F9FF` | `sky-50` | 頁面背景、section 底色 |
| `sky-100` | `#E0F2FE` | `sky-100` | hover 背景、info icon 底色 |
| `sky-200` | `#BAE6FD` | `sky-200` | 邊框、kicker border |
| `sky-400` | `#38BDF8` | `sky-400` | 裝飾漸層、hover border |
| `sky-500` | `#0EA5E9` | `sky-500` | Primary 主色、highlight border-left |
| `sky-700` | `#0369A1` | `sky-700` | 統計數字、nav hover、info value |
| `sky-900` | `#0C4A6E` | `sky-900` | 標題文字、深色背景（budget/footer） |

### 強調色（CTA / Accent）

| Token | Hex | Tailwind | 用途 |
|-------|-----|----------|------|
| `orange-300` | `#FDBA74` | `orange-300` | 深色背景上的 label |
| `orange-400` | `#FB923C` | `orange-400` | focus-visible outline、hover border |
| `orange-500` | `#F97316` | `orange-500` | CTA 色、eyebrow 文字、timeline 圓點、checkbox active |
| `orange-600` | `#EA580C` | `orange-600` | CTA gradient 終點 |

### 輔助色

| Token | Hex | Tailwind | 用途 |
|-------|-----|----------|------|
| `pink-400` | `#F472B6` | `pink-400` | Day 6 badge、accent gradient、footer heart |
| `green-500` | `#10B981` | `emerald-500` | Day 5 badge、green highlight |
| `amber-400` | `#FBBF24` | `amber-400` | 裝飾用 |
| `purple-500` | `#8B5CF6` | `violet-500` | Day 4 badge、purple highlight |

### 中性色

| Token | Hex | Tailwind | 用途 |
|-------|-----|----------|------|
| `slate-50` | `#F8FAFC` | `slate-50` | checklist 底色 |
| `slate-100` | `#F1F5F9` | `slate-100` | — |
| `slate-200` | `#E2E8F0` | `slate-200` | 邊框、分隔線、timeline 連線 |
| `slate-300` | `#CBD5E1` | `slate-300` | checkbox border |
| `slate-400` | `#94A3B8` | `slate-400` | done 狀態文字 |
| `slate-500` | `#64748B` | `slate-500` | 次要文字（日期、label） |
| `slate-600` | `#475569` | `slate-600` | 內文、段落、lead |
| `slate-700` | `#334155` | `slate-700` | timeline content |
| `slate-900` | `#0F172A` | `slate-900` | body 文字色 |

### 漸層

```
Hero 背景:
  radial-gradient(ellipse at top left, rgba(14,165,233,.15), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(249,115,22,.12), transparent 50%),
  linear-gradient(180deg, sky-50 0%, #FFF7ED 100%)

Brand Mark:
  linear-gradient(135deg, sky-500, orange-500)

Hero accent 文字:
  linear-gradient(120deg, orange-500, pink-400)

Budget 總計:
  linear-gradient(135deg, orange-500, orange-600)

Budget section 背景:
  linear-gradient(180deg, sky-900, #0C4A6E)
```

### Day Badge 漸層（每天專屬色）

| Day | 漸層 | Tailwind 近似 |
|-----|------|---------------|
| Day 1 | `135deg, #60A5FA → #0EA5E9` | `from-blue-400 to-sky-500` |
| Day 2 | `135deg, #06B6D4 → #0891B2` | `from-cyan-500 to-cyan-600` |
| Day 3 | `135deg, #F97316 → #EA580C` | `from-orange-500 to-orange-600` |
| Day 4 | `135deg, #8B5CF6 → #7C3AED` | `from-violet-500 to-violet-600` |
| Day 5 | `135deg, #10B981 → #059669` | `from-emerald-500 to-emerald-600` |
| Day 6 | `135deg, #F472B6 → #EC4899` | `from-pink-400 to-pink-500` |
| Day 7 | `135deg, #64748B → #475569` | `from-slate-500 to-slate-600` |

---

## 3. 字型系統 (Typography)

### Font Family

| 角色 | 字型 | Fallback | 用途 |
|------|------|----------|------|
| **Heading** | `Fredoka` | `sans-serif` | h1-h4、badge、stat-number、eyebrow、nav-brand |
| **Body** | `Nunito` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | 內文、段落、所有非標題文字 |

### Google Fonts 載入

```
Fredoka: 400, 500, 600, 700
Nunito: 300, 400, 500, 600, 700
```

### 字級規範

| 元素 | 大小 | 字重 | 行高 | 額外 |
|------|------|------|------|------|
| **Hero h1** | `clamp(2.25rem, 6.5vw, 5rem)` | 700 | 1.05 | `letter-spacing: -0.025em` |
| **Section title** | `clamp(1.875rem, 3.5vw, 2.75rem)` | 600 | 1.25 | `letter-spacing: -0.01em` |
| **Day title** | `clamp(1.375rem, 2.6vw, 1.75rem)` | 600 | 1.25 | — |
| **Card h3** | `1.25rem` (20px) | 600 | 1.25 | — |
| **Highlight h4** | `1rem` (16px) | 600 | 1.25 | — |
| **Body** | `16px` | 400 | 1.65 | — |
| **Lead** | `clamp(1rem, 1.8vw, 1.25rem)` | 400 | 1.65 | — |
| **Content / list** | `0.9375rem` (15px) | 400-500 | 1.6 | — |
| **Eyebrow** | `0.875rem` (14px) | 500 | — | `letter-spacing: 0.15em; text-transform: uppercase` |
| **Label / meta** | `0.8125rem` (13px) | 600 | — | — |
| **Day-num** | `0.75rem` (12px) | 600 | — | `letter-spacing: 0.1em` |
| **Stat number** | `clamp(1.75rem, 3vw, 2.5rem)` | 700 | 1 | Fredoka |
| **Budget amount** | `1.75rem` | 700 | — | Fredoka |
| **Budget total** | `clamp(2rem, 4vw, 2.75rem)` | 700 | — | Fredoka |

---

## 4. 圓角系統 (Border Radius)

| Token | 值 | Tailwind | 用途 |
|-------|------|----------|------|
| `radius-sm` | `12px` | `rounded-xl` | info icon、highlight block、budget item |
| `radius-md` | `18px` | `rounded-2xl` | ribbon-day、stat-card、tip-card |
| `radius-lg` | `28px` | `rounded-3xl` | day-card、budget-total、tip-card |
| `radius-xl` | `40px` | `rounded-[40px]` | 特殊大圓角 |
| `pill` | `999px` | `rounded-full` | nav、eyebrow、tag、tab、checkbox |

> **風格特徵**：整體偏大圓角，營造柔和親子感。最小圓角 12px，沒有直角元素。

---

## 5. 陰影系統 (Box Shadow)

| Token | 值 | 用途 |
|-------|------|------|
| `shadow-sm` | `0 2px 6px rgba(15,23,42,.06)` | 預設卡片、info icon |
| `shadow-md` | `0 8px 24px rgba(14,165,233,.12)` | hover 狀態、nav |
| `shadow-lg` | `0 20px 50px rgba(14,165,233,.18)` | day-card hover |
| `shadow-orange` | `0 12px 30px rgba(249,115,22,.3)` | CTA button、budget total、active tab |

> **風格特徵**：陰影帶有 sky-blue 或 orange 色調（非灰色），呼應品牌色。

### Tailwind 自訂陰影建議

```js
// tailwind.config.js
boxShadow: {
  'sm': '0 2px 6px rgba(15,23,42,.06)',
  'md': '0 8px 24px rgba(14,165,233,.12)',
  'lg': '0 20px 50px rgba(14,165,233,.18)',
  'orange': '0 12px 30px rgba(249,115,22,.3)',
}
```

---

## 6. 間距與佈局 (Spacing & Layout)

### Container

| 屬性 | 值 |
|------|------|
| max-width | `1200px` |
| padding | `0 24px`（mobile: `0 18px`） |
| margin | `0 auto` |

### Section

| 螢幕 | padding |
|-------|---------|
| Desktop | `96px 0` |
| Tablet (≤900px) | `72px 0` |

### Grid 設定

| 區域 | 欄數 | gap |
|------|------|-----|
| Hero stats | `repeat(4, 1fr)` → tablet `repeat(2, 1fr)` | `16px` |
| Overview ribbon | `repeat(7, 1fr)` → tablet `repeat(4, 1fr)` → mobile `repeat(2, 1fr)` | `12px` |
| Day body | `1fr 1fr` → tablet `1fr` | `40px`（tablet `28px`） |
| Tips grid | `repeat(auto-fit, minmax(280px, 1fr))` | `24px` |
| Budget grid | `repeat(auto-fit, minmax(200px, 1fr))` | `16px` |
| Checklist grid | `repeat(auto-fit, minmax(280px, 1fr))` | `16px` |
| Info bar | `repeat(auto-fit, minmax(240px, 1fr))` | `24px` |

---

## 7. 動畫系統 (Animation)

### Easing

```
--ease: cubic-bezier(.22, .61, .36, 1)
```

Tailwind 無法直接對應，需自訂：

```js
// tailwind.config.js
transitionTimingFunction: {
  'ease-custom': 'cubic-bezier(.22,.61,.36,1)',
}
```

### 入場動畫

```css
/* fadeInUp */
from { opacity: 0; transform: translateY(24px); }
to   { opacity: 1; transform: translateY(0); }
```

- Hero kicker: `0.8s` delay `0s`
- Hero h1: `0.9s` delay `0.1s`
- Hero lead: `1.0s` delay `0.2s`
- Hero stats: `1.1s` delay `0.3s`

### Scroll Reveal

```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.8s, transform 0.8s; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

使用 Intersection Observer 觸發 `.visible` class。

### 浮動裝飾

```css
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-30px) scale(1.05); }
}
/* 週期 12s，第二個 shape delay -6s */
```

### 脈衝點

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.4); opacity: 0.6; }
}
/* 週期 2s */
```

### Hover 互動

| 元素 | 效果 | 時長 |
|------|------|------|
| stat-card | `translateY(-4px)` + shadow-md | 300ms |
| ribbon-day | `translateY(-6px)` + shadow-md + border sky-400 | 300ms |
| day-card | `translateY(-2px)` + shadow-lg | 300ms |
| highlight-block | `translateX(4px)` | 200ms |
| tip-card | `translateY(-6px)` + shadow-md | 300ms |
| budget-item | `translateY(-4px)` + border orange-400 | 300ms |
| nav-link | color sky-700 + bg sky-100 | 200ms |
| plan-tab | border pink-400 + color pink-400 | 200ms |

### 無障礙

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. 元件風格規範

### Navigation（Floating Pill Nav）

- `sticky top-3`，左右 margin `12px 16px`
- `rounded-full`，背景 `white/85` + `backdrop-blur-xl saturate-150`
- 邊框 `sky-500/12`
- 陰影 `shadow-md`
- Brand mark: 34px 圓形，gradient 背景 + 白色 SVG icon

### Eyebrow（Section 小標）

- `rounded-full`，padding `6px 16px`
- 文字 `orange-500`，背景 `orange-500/10`
- Fredoka 字型，`uppercase`，`letter-spacing: 0.15em`

### Day Card

- 白色背景，`rounded-3xl`，padding `40px`
- 邊框 `slate-200`，陰影 `shadow-sm`
- Header: badge + title + tag，底部 `border-bottom: 2px dashed slate-200`
- Body: 左右兩欄（timeline + highlights）

### Day Badge

- `72px × 72px`，`rounded-2xl`
- 白色文字，gradient 背景（每天不同色）
- 數字 Fredoka 700 `1.75rem`
- "DAY" label `0.6875rem`，`letter-spacing: 0.15em`，`opacity: 0.85`

### Timeline

- 左側 `border-left: 2px solid slate-200`
- 圓點: `12px`，`orange-500`，白色 3px border，orange-400 外框
- 時間: Fredoka 600，`orange-500`
- 內容: `slate-700`，strong 用 `sky-900`

### Highlight Block

- `rounded-2xl`，padding `20px 22px`
- 左邊框 `4px solid`（sky/orange/pink/green/purple）
- 背景漸層 `linear-gradient(160deg, 淺色, white)`
- 變體：default(sky)、orange、pink、green、purple

### Tag / Pill

- `rounded-full`，padding `3px 10px` 或 `6px 16px`
- 白色背景 + `slate-200` 邊框
- 或 `sky-50` 背景 + `sky-200` 邊框 + `sky-700` 文字

### Budget Mini（Day Card 內的預算條）

- `rounded-2xl`，gradient `sky-900 → sky-700`
- 白色文字，label `uppercase` + `letter-spacing: 0.1em`
- 金額 Fredoka 700 `1.5rem`

### Tip Card

- `rounded-3xl`，padding `32px 28px`
- 漸層背景 `160deg` 從淺色到白色
- Icon: `56px × 56px`，白色背景，`rounded-xl`，`shadow-sm`
- 變體：default(sky)、orange、pink、green

### Checklist Item

- `rounded-2xl`，padding `18px 20px`
- `slate-50` 背景 + `slate-200` 邊框
- Checkbox: `22px × 22px`，`rounded-md`（6px）
- Done 狀態：checkbox 變 `orange-500` + 文字 `line-through slate-400`

### Footer

- 背景 `sky-900`，文字 `white/70`
- Heart 用 `pink-400`

---

## 9. 響應式斷點 (Breakpoints)

| 斷點 | 值 | 主要變化 |
|------|------|---------|
| Desktop | > 900px | 預設佈局 |
| Tablet | ≤ 900px | day-body 單欄、hero-stats 2 欄、ribbon 4 欄、section padding 縮小 |
| Mobile | ≤ 560px | nav 縮小隱藏品牌文字、hero padding 縮小、ribbon 2 欄、container padding 18px |

---

## 10. SVG Icon 規範

- 統一使用 inline SVG（非 emoji）
- `stroke-based`：`fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`
- 常用尺寸：`18px`（nav brand）、`22px`（info icon）、`14px`（checkbox）
- 顏色透過父元素 `color` 控制（`currentColor`）
- 風格接近 **Lucide Icons**

---

## 11. 無障礙 (Accessibility)

| 規範 | 實作 |
|------|------|
| Focus visible | `outline: 3px solid orange-400`，`outline-offset: 3px`，`rounded-md` |
| Reduced motion | 停用所有 animation 與 transition |
| Nav | `aria-label="主要導覽"` |
| 裝飾元素 | `aria-hidden="true"` |
| 語言 | `<html lang="zh-TW">` |

---

## 12. Tailwind CSS 自訂配置建議

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fredoka', 'sans-serif'],
        body: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'sm-custom': '12px',
        'md-custom': '18px',
        'lg-custom': '28px',
        'xl-custom': '40px',
      },
      boxShadow: {
        'sm': '0 2px 6px rgba(15,23,42,.06)',
        'md': '0 8px 24px rgba(14,165,233,.12)',
        'lg': '0 20px 50px rgba(14,165,233,.18)',
        'orange': '0 12px 30px rgba(249,115,22,.3)',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.6' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(.22,.61,.36,1) both',
        'float': 'float 12s ease-in-out infinite',
        'pulse-dot': 'pulse 2s ease-in-out infinite',
      },
    },
  },
}
```
