<script setup>
import { budgetItems, budgetTotal } from '../data/itinerary.js'
</script>

<template>
  <section id="budget" class="bg-budget-section text-white py-16 md:py-24">
    <div class="max-w-container mx-auto px-4 md:px-6 text-center">
      <span
        class="inline-block font-heading font-medium text-sm tracking-[0.15em] uppercase bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full mb-4"
      >
        Budget
      </span>
      <h2 class="font-heading font-semibold text-white text-[clamp(1.875rem,3.5vw,2.75rem)]">
        預算總覽（8 人 · 不含住宿 / 機票）
      </h2>
      <p class="text-white/70 text-[1.0625rem] max-w-[640px] mx-auto mb-12">
        各天行程預估花費一覽，幫助掌握旅費預算。
      </p>

      <!-- Budget grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8">
        <div
          v-for="item in budgetItems"
          :key="item.day"
          class="reveal p-4 md:p-6 bg-white/[0.06] border border-white/[0.12] rounded-card-md backdrop-blur-sm hover:bg-white/10 hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 ease-custom text-left"
        >
          <div class="font-heading text-[0.75rem] md:text-[0.8125rem] text-orange-300 tracking-[0.1em] mb-1.5">
            {{ item.day }}
          </div>
          <div class="font-heading font-semibold text-base md:text-lg mb-3 md:mb-3.5">
            {{ item.theme }}
          </div>
          <div class="font-heading font-bold text-[1.375rem] md:text-[1.75rem]">
            <span class="text-sm opacity-60 mr-0.5">¥</span>{{ item.amount }}
          </div>
        </div>
      </div>

      <!-- Budget total bar -->
      <div
        class="p-5 md:p-7 md:px-8 rounded-card-lg flex items-center justify-between flex-wrap gap-4 bg-gradient-to-r from-orange-500 to-orange-600 shadow-card-orange"
      >
        <div class="text-left">
          <div class="font-heading font-semibold text-xl">
            {{ budgetTotal.label }}
          </div>
          <small class="block opacity-85 text-[0.8125rem] font-normal mt-1">
            {{ budgetTotal.detail }}
          </small>
        </div>
        <div class="font-heading font-bold text-[clamp(2rem,4vw,2.75rem)]">
          <span class="text-base">¥</span>{{ budgetTotal.amount }}
        </div>
      </div>
    </div>
  </section>
</template>
