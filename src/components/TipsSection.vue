<script setup>
import { tips } from '../data/itinerary.js'

const variantGradient = {
  default: 'bg-gradient-to-br from-sky-50 to-white',
  orange: 'bg-gradient-to-br from-orange-50 to-white',
  pink: 'bg-gradient-to-br from-pink-50 to-white',
  green: 'bg-gradient-to-br from-emerald-50 to-white',
}

const variantIconColor = {
  default: 'text-sky-500',
  orange: 'text-orange-500',
  pink: 'text-pink-600',
  green: 'text-emerald-600',
}
</script>

<template>
  <section id="tips" class="bg-white py-24">
    <div class="max-w-container mx-auto px-6 text-center">
      <span
        class="inline-block font-heading font-medium text-sm tracking-[0.15em] uppercase text-orange-500 px-4 py-1.5 bg-orange-500/10 rounded-full mb-4"
      >
        Travel Tips
      </span>
      <h2 class="font-heading font-semibold text-sky-900 text-[clamp(1.875rem,3.5vw,2.75rem)]">
        行前重點提醒
      </h2>
      <p class="text-slate-600 text-[1.0625rem] max-w-[640px] mx-auto mb-12">
        盛夏關西 32–36°C 高溫，親子旅行的 4 大備戰重點。
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="tip in tips"
          :key="tip.title"
          class="reveal p-8 px-7 rounded-card-lg border border-slate-200 transition-all duration-300 ease-custom cursor-default hover:-translate-y-1.5 hover:shadow-card-md hover:border-sky-200 text-left"
          :class="variantGradient[tip.variant] || variantGradient.default"
        >
          <!-- Icon box -->
          <div class="w-14 h-14 grid place-items-center bg-white rounded-card-sm shadow-card-sm mb-4.5">
            <!-- sun -->
            <svg
              v-if="tip.icon === 'sun'"
              :class="variantIconColor[tip.variant] || variantIconColor.default"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>

            <!-- credit-card -->
            <svg
              v-if="tip.icon === 'credit-card'"
              :class="variantIconColor[tip.variant] || variantIconColor.default"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 10h18" />
              <path d="M7 15h2" />
            </svg>

            <!-- baby -->
            <svg
              v-if="tip.icon === 'baby'"
              :class="variantIconColor[tip.variant] || variantIconColor.default"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12h.01" />
              <path d="M15 12h.01" />
              <path d="M12 17c-1.5 0-2.5-1-2.5-1" />
            </svg>

            <!-- map-pin -->
            <svg
              v-if="tip.icon === 'map-pin'"
              :class="variantIconColor[tip.variant] || variantIconColor.default"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="3" />
            </svg>
          </div>

          <!-- Title -->
          <h3 class="font-heading font-semibold text-xl text-sky-900 mb-3">
            {{ tip.title }}
          </h3>

          <!-- List -->
          <ul class="pl-5 list-disc text-slate-600 text-[0.9375rem]">
            <li
              v-for="(item, i) in tip.items"
              :key="i"
              class="mb-2 [&_strong]:text-sky-900"
              v-html="item"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
