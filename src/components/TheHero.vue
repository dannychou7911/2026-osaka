<script setup>
import { tripInfo } from '../data/itinerary.js'
</script>

<template>
  <section class="bg-hero relative overflow-hidden py-12 pb-20 md:py-20 md:pb-28">
    <!-- Decorative blurred circles -->
    <div
      class="pointer-events-none absolute -left-24 -top-24 h-48 w-48 animate-float rounded-full bg-sky-300 opacity-60 blur-[48px] md:-left-32 md:-top-32 md:h-72 md:w-72 md:blur-[60px]"
    />
    <div
      class="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 animate-float-delayed rounded-full bg-orange-300 opacity-60 blur-[48px] md:-bottom-24 md:-right-24 md:h-64 md:w-64 md:blur-[60px]"
    />

    <div class="relative mx-auto max-w-4xl px-4 text-center">
      <!-- Kicker badge -->
      <div class="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1.5 shadow-card-sm">
        <span class="h-2 w-2 animate-pulse-dot rounded-full bg-orange-500" />
        <span class="font-heading text-sm font-semibold text-slate-600">
          {{ tripInfo.dates }}
        </span>
      </div>

      <!-- Heading -->
      <h1
        class="animate-fade-in-up-1 font-heading text-[clamp(2.25rem,6.5vw,5rem)] font-bold leading-[1.05] tracking-tight text-sky-900"
      >
        {{ tripInfo.title }}
        <br />
        <span class="text-gradient-accent">{{ tripInfo.subtitle }}</span>
      </h1>

      <!-- Lead -->
      <p
        class="animate-fade-in-up-2 mx-auto mt-6 max-w-[620px] font-body text-lg text-slate-600"
      >
        {{ tripInfo.lead }}
      </p>

      <!-- Stats grid -->
      <div
        class="animate-fade-in-up-3 mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-4"
      >
        <div
          v-for="stat in tripInfo.stats"
          :key="stat.label"
          class="rounded-card-md border border-sky-500/12 bg-white/80 px-3 py-4 shadow-card-sm backdrop-blur transition-all duration-300 ease-custom hover:-translate-y-1 hover:shadow-card-md md:px-4 md:py-5"
        >
          <div class="font-heading text-2xl font-bold text-sky-700 md:text-3xl">
            {{ stat.number }}<span class="text-sm text-orange-500">{{ stat.unit }}</span>
          </div>
          <div class="mt-1 text-sm text-slate-500">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
