<script setup>
import { days, tripInfo } from './data/itinerary.js'
import { designLogic } from './data/recommendations.js'
import { useScrollReveal } from './composables/use-scroll-reveal.js'

import TheNav from './components/TheNav.vue'
import TheHero from './components/TheHero.vue'
import InfoBar from './components/InfoBar.vue'
import OverviewRibbon from './components/OverviewRibbon.vue'
import DayCard from './components/DayCard.vue'
import TipsSection from './components/TipsSection.vue'
import BudgetSection from './components/BudgetSection.vue'
import ChecklistSection from './components/ChecklistSection.vue'
import TheFooter from './components/TheFooter.vue'

useScrollReveal()
</script>

<template>
  <TheNav />
  <TheHero />
  <InfoBar :items="tripInfo.infoBar" />
  <OverviewRibbon />

  <!-- Itinerary Section -->
  <section id="itinerary" class="bg-sky-50 py-24 md:py-24">
    <div class="max-w-container mx-auto px-4.5 md:px-6">
      <div class="reveal mb-12">
        <span
          class="inline-block font-heading font-medium text-sm tracking-[0.15em] uppercase text-orange-500 px-4 py-1.5 bg-orange-500/10 rounded-full mb-4"
        >
          Day by Day
        </span>
        <h2
          class="font-heading font-semibold text-sky-900 text-[clamp(1.875rem,3.5vw,2.75rem)] leading-tight tracking-tight mb-4"
        >
          每日行程細節
        </h2>
        <p class="text-slate-600 text-[1.0625rem] max-w-[640px]">
          時間、景點、預算與親子貼心提醒一次整理。
        </p>
      </div>

      <DayCard v-for="day in days" :key="day.id" :day="day" />

      <!-- Design Logic Summary -->
      <div class="reveal mt-4 rounded-card-lg border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 md:p-8">
        <h3 class="mb-5 font-heading text-lg font-semibold text-sky-900 flex items-center gap-2.5">
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </span>
          整趟旅程的設計邏輯
        </h3>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(item, index) in designLogic"
            :key="index"
            class="rounded-card-sm border border-slate-200 bg-white px-4 py-3.5 transition-all duration-200 ease-custom hover:border-sky-200 hover:shadow-card-sm"
          >
            <p class="mb-1 font-heading text-sm font-semibold text-orange-500">
              {{ item.principle }}
            </p>
            <p class="text-[0.8125rem] leading-relaxed text-slate-600">
              {{ item.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <TipsSection />
  <BudgetSection />
  <ChecklistSection />
  <TheFooter />
</template>
