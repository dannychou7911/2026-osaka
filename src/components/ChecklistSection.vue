<script setup>
import { ref } from 'vue'
import { checklist } from '../data/itinerary.js'

const doneItems = ref(new Set())

function toggleItem(index) {
  if (doneItems.value.has(index)) {
    doneItems.value.delete(index)
  } else {
    doneItems.value.add(index)
  }
}
</script>

<template>
  <section id="checklist" class="bg-white py-16 md:py-24">
    <div class="max-w-container mx-auto px-4 md:px-6 text-center">
      <span
        class="inline-block font-heading font-medium text-sm tracking-[0.15em] uppercase text-orange-500 px-4 py-1.5 bg-orange-500/10 rounded-full mb-4"
      >
        To-Do List
      </span>
      <h2 class="font-heading font-semibold text-sky-900 text-[clamp(1.875rem,3.5vw,2.75rem)]">
        行前待辦清單
      </h2>
      <p class="text-slate-600 text-[1.0625rem] max-w-[640px] mx-auto mb-12">
        點擊任一項目可標記完成，保持行前準備井然有序。
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        <div
          v-for="(item, index) in checklist"
          :key="index"
          class="reveal flex gap-3.5 items-start p-4 md:p-4.5 md:px-5 rounded-card-md border cursor-pointer transition-all duration-200 ease-custom"
          :class="
            doneItems.has(index)
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-50 border-slate-200 hover:bg-sky-50 hover:border-sky-200'
          "
          @click="toggleItem(index)"
        >
          <!-- Checkbox -->
          <div
            class="flex-shrink-0 w-[22px] h-[22px] rounded-md border-2 grid place-items-center transition-all duration-200 ease-custom"
            :class="
              doneItems.has(index)
                ? 'bg-orange-500 border-orange-500'
                : 'border-slate-300 bg-white group-hover:border-orange-400'
            "
          >
            <svg
              class="transition-opacity duration-200"
              :class="
                doneItems.has(index)
                  ? 'opacity-100 text-white'
                  : 'opacity-0 text-white'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <!-- Text -->
          <span
            class="text-[0.9375rem] font-medium leading-normal text-left"
            :class="
              doneItems.has(index)
                ? 'line-through text-slate-400'
                : 'text-slate-700'
            "
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
