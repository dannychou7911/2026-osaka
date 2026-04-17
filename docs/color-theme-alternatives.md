# Color Theme Alternatives — Osaka 2026

維持 **Playful Modern** 調性（圓潤、親子友善、Fredoka + Nunito）的前提下，提供四種可替換的配色方案。日後若想換風格，挑一個套用即可。

目前實作配色：`sky` 主 + `orange` 強調（見 `design-system.md` §2）。

---

## 快速比較

| 方案 | 氣氛 | 性別偏好 | 兒童友善度 | 更換成本 | 場景聯想 |
|---|---|---|---|---|---|
| 目前（Sky × Orange）| 明亮、平衡 | 中性 | ★★★★★ | — | 晴空、陽光 |
| A Sakura Pastel | 柔和、浪漫 | 偏女性 | ★★★★☆ | 低 | 嵐山竹林、和服散步 |
| B Matcha Citrus | 質感、沉穩 | 中性偏男 | ★★★☆☆ | 中 | 宇治抹茶、伏見鳥居 |
| C Showa Retro | 活力、個性 | 中性 | ★★★★★ | 中 | 新世界、通天閣、昭和喫茶 |
| D Kansai Ocean | 清爽、專業 | 偏男性 | ★★★★☆ | 低 | 環球影城、海遊館、港灣夜景 |

> **更換成本**：「低」代表只需替換 Tailwind 色票前綴（如 `sky-*` → `rose-*`）；「中」代表同時需要調 `main.css` 的 gradient 與 `itinerary.js` 的 day badge 色。

---

## A. Sakura Pastel（櫻花粉彩）— 日式春季花見

柔和、女性向、輕盈；適合強調「春日親子、花見、和風」。

### 主色調

| 角色 | 原（sky）| 替代 | Hex | Tailwind |
|------|---------|------|-----|----------|
| Primary 深 | `sky-900` | `rose-900` | `#881337` | `rose-900` |
| Primary 中 | `sky-500` | `rose-400` | `#FB7185` | `rose-400` |
| Primary 淺 | `sky-50` | `rose-50` | `#FFF1F2` | `rose-50` |
| Hover bg | `sky-100` | `rose-100` | `#FFE4E6` | `rose-100` |
| Border 強 | `sky-200` | `rose-200` | `#FECDD3` | `rose-200` |

### 強調色

| 角色 | 替代 | Hex |
|------|------|-----|
| CTA | `emerald-500` | `#10B981` |
| CTA hover / eyebrow | `emerald-600` | `#059669` |
| Support accent | `amber-300` | `#FCD34D` |

### 漸層

```
Hero background:
  radial-gradient(ellipse at top left, rgba(251,113,133,.15), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(16,185,129,.12), transparent 50%),
  linear-gradient(180deg, #FFF1F2 0%, #FEFCE8 100%)

Brand Mark: linear-gradient(135deg, #FB7185, #10B981)
Accent text: linear-gradient(120deg, #E11D48, #E879F9)
Budget section: linear-gradient(180deg, #881337, #881337)
```

### Day Badge 漸層（7 天）

| Day | 漸層 Tailwind |
|-----|--------------|
| 1 | `from-pink-300 to-rose-400` |
| 2 | `from-rose-400 to-rose-500` |
| 3 | `from-fuchsia-400 to-rose-500` |
| 4 | `from-purple-300 to-fuchsia-400` |
| 5 | `from-emerald-400 to-emerald-500` |
| 6 | `from-rose-400 to-pink-500` |
| 7 | `from-stone-400 to-stone-500` |

---

## B. Matcha Citrus（抹茶柚子）— 京都禪意摩登

沉穩、有質感、略帶和風禪意；男性或長輩接受度高。

### 主色調

| 角色 | 替代 | Hex | Tailwind |
|------|------|-----|----------|
| Primary 深 | `emerald-900` | `#064E3B` | `emerald-900` |
| Primary 中 | `emerald-600` | `#059669` | `emerald-600` |
| Primary 淺 | `emerald-50` | `#ECFDF5` | `emerald-50` |
| Hover bg | `emerald-100` | `#D1FAE5` | `emerald-100` |
| Border 強 | `emerald-200` | `#A7F3D0` | `emerald-200` |

### 強調色

| 角色 | 替代 | Hex |
|------|------|-----|
| CTA | `amber-500` | `#F59E0B` |
| CTA hover | `amber-600` | `#D97706` |
| Support | `stone-700`（墨色文字） | `#44403C` |

### 漸層

```
Hero background:
  radial-gradient(ellipse at top left, rgba(5,150,105,.15), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(245,158,11,.12), transparent 50%),
  linear-gradient(180deg, #ECFDF5 0%, #FFFBEB 100%)

Brand Mark: linear-gradient(135deg, #059669, #F59E0B)
Accent text: linear-gradient(120deg, #F59E0B, #84CC16)
Budget section: linear-gradient(180deg, #064E3B, #064E3B)
```

### Day Badge 漸層

| Day | 漸層 Tailwind |
|-----|--------------|
| 1 | `from-emerald-400 to-emerald-600` |
| 2 | `from-teal-500 to-teal-600` |
| 3 | `from-amber-500 to-amber-600` |
| 4 | `from-lime-500 to-lime-600` |
| 5 | `from-green-500 to-green-700` |
| 6 | `from-yellow-400 to-amber-500` |
| 7 | `from-stone-500 to-stone-700` |

---

## C. Showa Retro（昭和復古夏日）— 1960s 懷舊

個性、活力、復古；適合「這是一趟有故事的旅行」，小孩也會喜歡鮮豔配色。

### 主色調

| 角色 | 替代 | Hex | Tailwind |
|------|------|-----|----------|
| Primary 深 | `red-800` | `#991B1B` | `red-800` |
| Primary 中 | `red-500`（紅丹）| `#EF4444` | `red-500` |
| Primary 淺（奶油底）| — | `#FFF7ED` | `orange-50` |
| Hover bg | `red-50` | `#FEF2F2` | `red-50` |
| Border 強 | `red-200` | `#FECACA` | `red-200` |

### 強調色

| 角色 | 替代 | Hex |
|------|------|-----|
| CTA | `teal-500` | `#14B8A6` |
| CTA hover | `teal-600` | `#0D9488` |
| Support（芥末黃）| `yellow-300` | `#FDE047` |

### 漸層

```
Hero background:
  radial-gradient(ellipse at top left, rgba(239,68,68,.15), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(20,184,166,.12), transparent 50%),
  linear-gradient(180deg, #FEF2F2 0%, #FEFCE8 100%)

Brand Mark: linear-gradient(135deg, #EF4444, #FDE047)
Accent text: linear-gradient(120deg, #EF4444, #F59E0B)
Budget section: linear-gradient(180deg, #991B1B, #7F1D1D)
```

### Day Badge 漸層

| Day | 漸層 Tailwind |
|-----|--------------|
| 1 | `from-red-400 to-red-500` |
| 2 | `from-teal-500 to-teal-600` |
| 3 | `from-amber-500 to-red-500` |
| 4 | `from-yellow-400 to-amber-500` |
| 5 | `from-lime-500 to-green-600` |
| 6 | `from-rose-400 to-red-500` |
| 7 | `from-neutral-600 to-neutral-700` |

### 額外調整（推薦）

- 考慮把圓角降一級：`card-lg` 28px → 24px，呈現復古方正感
- 字型可試 **Chicle / Paytone One**（Heading）搭配 Nunito

---

## D. Kansai Ocean（關西海風）— 現代清爽深藍

專業、沉穩、冷色系；和目前的 sky 很像但更深，有都會夜景感。

### 主色調

| 角色 | 替代 | Hex | Tailwind |
|------|------|-----|----------|
| Primary 深 | `blue-900` | `#1E3A8A` | `blue-900` |
| Primary 中 | `blue-600` | `#2563EB` | `blue-600` |
| Primary 淺 | `blue-50` | `#EFF6FF` | `blue-50` |
| Hover bg | `blue-100` | `#DBEAFE` | `blue-100` |
| Border 強 | `blue-200` | `#BFDBFE` | `blue-200` |

### 強調色

| 角色 | 替代 | Hex |
|------|------|-----|
| CTA | `amber-400`（金沙）| `#FBBF24` |
| CTA hover | `amber-500` | `#F59E0B` |
| Support | `cyan-300` | `#67E8F9` |

### 漸層

```
Hero background:
  radial-gradient(ellipse at top left, rgba(37,99,235,.15), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(251,191,36,.12), transparent 50%),
  linear-gradient(180deg, #EFF6FF 0%, #FEFCE8 100%)

Brand Mark: linear-gradient(135deg, #2563EB, #FBBF24)
Accent text: linear-gradient(120deg, #FBBF24, #22D3EE)
Budget section: linear-gradient(180deg, #1E3A8A, #1E40AF)
```

### Day Badge 漸層

| Day | 漸層 Tailwind |
|-----|--------------|
| 1 | `from-sky-400 to-blue-500` |
| 2 | `from-cyan-500 to-blue-500` |
| 3 | `from-amber-400 to-amber-500` |
| 4 | `from-indigo-500 to-blue-600` |
| 5 | `from-teal-500 to-cyan-600` |
| 6 | `from-fuchsia-400 to-pink-500` |
| 7 | `from-slate-600 to-slate-700` |

---

## 導入檢查清單（選定後要改的地方）

切換主題時需同步更新以下位置，建議開專屬 feature branch：

- [ ] `src/assets/main.css`
  - `.bg-hero` 的 radial / linear gradient
  - `.text-gradient-accent` 的顏色
  - `.bg-budget-section` 的純色 / gradient
  - `:focus-visible` outline 顏色（若改主色系）
- [ ] `src/data/itinerary.js`
  - 7 天的 `badgeGradient`
  - 各 tag `variant`（如有 `sky` / `orange` 分類）
- [ ] 元件層級的色票替換
  - `TheNav.vue`：brand gradient、hover 狀態
  - `TheHero.vue`：裝飾圓 `bg-sky-300` / `bg-orange-300`
  - `InfoBar.vue`：variant 色票表
  - `OverviewRibbon.vue`：hover border
  - `DayCard.vue`：`tagVariants` / `highlightVariants` / budget mini bar
  - `TipsSection.vue`：`variantIconColor`
  - `BudgetSection.vue`：`text-orange-300` 等
  - `ChecklistSection.vue`：active 狀態顏色
- [ ] Tailwind config 無需改動（主題靠色票前綴切換，不動 token 名稱）
- [ ] 驗證對比度：所有文字 / 背景對比至少 4.5:1（用 Chrome DevTools Contrast Checker）
- [ ] 測 `prefers-color-scheme: dark`（若未來要做 dark mode）

---

## 附：如何預覽一個方案

建議做法（無需動主專案）：

```bash
# 在 design-system/preview/ 下建立單一 HTML 檔案
# 放入該方案的色塊 + 典型卡片
# 用瀏覽器開啟比對
```

如需我產生其中某一個方案的預覽頁（單檔 HTML），告訴我方案代號即可。
