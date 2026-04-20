<script setup>
import { computed } from 'vue'
import { accommodation } from '../data/itinerary.js'

const mapQuery = computed(() =>
  encodeURIComponent(`${accommodation.name} ${accommodation.address}`)
)
const mapEmbedUrl = computed(() => `https://www.google.com/maps?q=${mapQuery.value}&output=embed`)
const mapLinkUrl = computed(() => `https://www.google.com/maps/search/?api=1&query=${mapQuery.value}`)
</script>

<template>
  <section id="accommodation" class="bg-gradient-to-b from-white to-sky-50 py-16 md:py-24">
    <div class="max-w-container mx-auto px-4 md:px-6">
      <div class="reveal text-center mb-10">
        <span
          class="inline-block font-heading font-medium text-sm tracking-[0.15em] uppercase text-emerald-600 px-4 py-1.5 bg-emerald-500/10 rounded-full mb-4"
        >
          Accommodation
        </span>
        <h2 class="font-heading font-semibold text-sky-900 text-[clamp(1.875rem,3.5vw,2.75rem)] mb-3">
          住宿：{{ accommodation.name }}
        </h2>
        <p class="text-slate-600 text-[1.0625rem] max-w-[640px] mx-auto">
          ⭐ {{ accommodation.rating }} / {{ accommodation.totalRatings }} 則評論 · Google Maps 已驗證
        </p>
      </div>

      <div class="reveal grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Main Info Card -->
        <div class="lg:col-span-2 rounded-card-lg border border-emerald-200 bg-white p-6 md:p-8 shadow-card-sm">
          <h3 class="font-heading text-lg font-semibold text-sky-900 mb-4 flex items-center gap-2">
            <span class="w-8 h-8 grid place-items-center rounded-full bg-emerald-500 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            基本資訊
          </h3>
          <p class="text-slate-600 text-[0.9375rem] leading-relaxed mb-5">
            {{ accommodation.summary }}
          </p>
          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[0.9375rem]">
            <div>
              <dt class="font-heading text-xs tracking-wider uppercase text-emerald-600 mb-1">地址</dt>
              <dd class="text-slate-700">{{ accommodation.address }}</dd>
            </div>
            <div>
              <dt class="font-heading text-xs tracking-wider uppercase text-emerald-600 mb-1">電話</dt>
              <dd class="text-slate-700">{{ accommodation.phone }}</dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="font-heading text-xs tracking-wider uppercase text-emerald-600 mb-1">官方網站</dt>
              <dd>
                <a
                  :href="accommodation.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sky-600 hover:text-sky-800 underline break-all"
                >{{ accommodation.website }}</a>
              </dd>
            </div>
          </dl>

          <h4 class="font-heading text-base font-semibold text-sky-900 mt-6 mb-3">注意事項</h4>
          <ul class="space-y-2">
            <li
              v-for="(note, i) in accommodation.notes"
              :key="i"
              class="text-slate-600 text-[0.9375rem] leading-relaxed [&_strong]:text-sky-900"
              v-html="note"
            />
          </ul>
        </div>

        <!-- Stations Card -->
        <div class="rounded-card-lg border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 md:p-7">
          <h3 class="font-heading text-lg font-semibold text-sky-900 mb-4 flex items-center gap-2">
            <span class="w-8 h-8 grid place-items-center rounded-full bg-sky-500 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="3" />
              </svg>
            </span>
            最近車站
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(s, i) in accommodation.nearestStations"
              :key="i"
              class="rounded-card-sm bg-white border border-slate-200 p-3.5"
            >
              <p class="font-heading font-semibold text-sky-900 text-[0.9375rem] mb-1">{{ s.name }}</p>
              <p class="text-slate-600 text-sm">{{ s.walk }}</p>
              <p class="text-emerald-600 text-xs font-medium mt-1">{{ s.best }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="reveal mt-6 rounded-card-lg border border-sky-200 bg-white shadow-card-sm overflow-hidden">
        <div class="flex items-center gap-2 px-6 md:px-8 pt-6 pb-4">
          <span class="w-8 h-8 grid place-items-center rounded-full bg-sky-500 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="3" />
            </svg>
          </span>
          <h3 class="font-heading text-lg font-semibold text-sky-900">地圖位置</h3>
        </div>
        <div class="aspect-[16/9] md:aspect-[21/9] w-full bg-slate-100">
          <iframe
            :src="mapEmbedUrl"
            :title="`${accommodation.name} 位置地圖`"
            class="w-full h-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
        <div class="px-6 md:px-8 py-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <p class="text-slate-500 text-sm">{{ accommodation.address }}</p>
          <a
            :href="mapLinkUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sky-600 hover:text-sky-800 font-medium text-sm inline-flex items-center gap-1"
          >
            在 Google Maps 開啟
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
