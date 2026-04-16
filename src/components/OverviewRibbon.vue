<script setup>
import { days } from '../data/itinerary.js'
</script>

<template>
  <section id="overview" class="bg-white py-16 md:py-24">
    <div class="max-w-container mx-auto px-6">
      <!-- Eyebrow -->
      <span class="inline-block font-heading font-medium text-sm tracking-[0.15em] uppercase text-orange-500 px-4 py-1.5 bg-orange-500/10 rounded-full mb-4">
        行程總覽
      </span>

      <!-- Section title -->
      <h2 class="font-heading font-semibold text-sky-900 text-[clamp(1.875rem,3.5vw,2.75rem)] leading-tight tracking-tight mb-4">
        七天行程一覽
      </h2>

      <!-- Section subtitle -->
      <p class="text-slate-600 text-[1.0625rem] max-w-[640px] mb-12">
        點擊任一天快速跳轉，查看詳細時間軸、景點亮點與預估花費。
      </p>

      <!-- Ribbon with reveal -->
      <div class="reveal">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          <a
            v-for="day in days"
            :key="day.id"
            :href="`#day-${day.id}`"
            class="rounded-card-md p-5 bg-gradient-to-br from-sky-50 to-white border border-slate-200 text-center cursor-pointer hover:-translate-y-1.5 hover:shadow-card-md hover:border-sky-400 transition-all duration-300 ease-custom"
          >
            <span class="font-heading font-semibold text-xs text-orange-500 tracking-[0.1em]">
              DAY {{ day.num }}
            </span>
            <span class="text-[1.75rem] block my-2">{{ day.emoji }}</span>
            <span class="font-heading font-semibold text-[0.9375rem] text-sky-900 mb-1 block">
              {{ day.name }}
            </span>
            <span class="text-xs text-slate-500">{{ day.date }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
