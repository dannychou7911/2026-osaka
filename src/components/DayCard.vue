<script setup>
import { ref } from 'vue'
import { recommendations } from '../data/recommendations.js'
import { mapUrl, resolveMapLinks } from '../utils/map-link.js'

const props = defineProps({
  day: {
    type: Object,
    required: true,
  },
})

const showRec = ref(false)
const rec = recommendations[props.day.id] || null

const tagVariants = {
  default: 'bg-sky-50 text-sky-700 border-sky-200',
  orange: 'bg-orange-50 text-orange-600 border-orange-300',
  pink: 'bg-pink-50 text-pink-600 border-pink-300',
}

const highlightVariants = {
  default: 'border-l-sky-500 from-sky-50 to-white',
  orange: 'border-l-orange-500 from-orange-50 to-white',
  pink: 'border-l-pink-400 from-pink-50 to-white',
  green: 'border-l-emerald-500 from-emerald-50 to-white',
  purple: 'border-l-violet-500 from-violet-50 to-white',
}
</script>

<template>
  <article
    :id="`day-${day.id}`"
    class="reveal mb-10 rounded-card-lg border border-slate-200 bg-white p-6 shadow-card-sm transition-all duration-300 ease-custom hover:-translate-y-0.5 hover:shadow-card-lg md:p-10"
  >
    <!-- Day Header -->
    <div
      class="mb-7 flex flex-wrap items-center gap-5 border-b-2 border-dashed border-slate-200 pb-6"
    >
      <!-- Day Badge -->
      <div
        class="grid h-[60px] w-[60px] flex-shrink-0 place-items-center rounded-card-md bg-gradient-to-br text-center text-white md:h-[72px] md:w-[72px]"
        :class="day.badgeGradient"
      >
        <div>
          <span
            class="block font-heading text-[1.375rem] font-bold leading-none md:text-[1.75rem]"
          >
            {{ day.num }}
          </span>
          <span class="mt-0.5 block text-[0.6875rem] tracking-[0.15em] opacity-85">
            DAY
          </span>
        </div>
      </div>

      <!-- Title & Subtitle -->
      <div class="min-w-0">
        <h3 class="font-heading text-xl font-bold text-sky-900">
          {{ day.title }}
        </h3>
        <p v-if="day.subtitle" class="text-sm text-slate-500">
          {{ day.subtitle }}
        </p>
      </div>

      <!-- Tag -->
      <span
        v-if="day.tag"
        class="ml-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-[0.8125rem] font-semibold md:ml-auto"
        :class="tagVariants[day.tag.variant] || tagVariants.default"
      >
        {{ day.tag.text }}
      </span>
    </div>

    <!-- Day Body -->
    <div class="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10">
      <!-- Timeline (left column) -->
      <div>
        <div
          v-for="(item, index) in day.timeline"
          :key="index"
          class="relative pl-8"
          :class="[
            index < day.timeline.length - 1
              ? 'border-l-2 border-slate-200 pb-5'
              : 'border-l-2 border-transparent pb-0',
          ]"
        >
          <!-- Dot -->
          <div
            class="absolute -left-[7px] top-0.5 h-3 w-3 rounded-full border-[3px] border-white bg-orange-500 shadow-[0_0_0_2px] shadow-orange-400"
          />
          <!-- Time -->
          <p class="mb-1 font-heading text-sm font-semibold tracking-wide text-orange-500">
            {{ item.time }}
          </p>
          <!-- Content -->
          <div
            class="text-[0.9375rem] text-slate-700"
            v-html="resolveMapLinks(item.content)"
          />
        </div>
      </div>

      <!-- Highlights (right column) -->
      <div>
        <div
          v-for="(highlight, index) in day.highlights"
          :key="index"
          class="mb-4 rounded-card-md border-l-4 bg-gradient-to-br p-5 transition-all duration-200 ease-custom hover:translate-x-1"
          :class="highlightVariants[highlight.variant] || highlightVariants.default"
        >
          <h4
            class="mb-2 flex items-center gap-2 font-heading text-base font-semibold text-sky-900"
          >
            {{ highlight.title }}
          </h4>
          <p
            v-if="highlight.content"
            class="text-[0.9375rem] leading-relaxed text-slate-600"
            v-html="resolveMapLinks(highlight.content)"
          />
          <ul
            v-if="highlight.list && highlight.list.length"
            class="mt-2 pl-5 text-[0.9375rem] text-slate-600"
          >
            <li
              v-for="(li, liIndex) in highlight.list"
              :key="liIndex"
              class="mb-1"
              v-html="resolveMapLinks(li)"
            />
          </ul>
          <!-- Tags -->
          <div
            v-if="highlight.tags && highlight.tags.length"
            class="mt-2.5 flex flex-wrap gap-2.5"
          >
            <span
              v-for="(tag, tagIndex) in highlight.tags"
              :key="tagIndex"
              class="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[0.8125rem] font-semibold text-slate-500"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Budget Mini -->
        <div
          v-if="day.budget"
          class="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-card-md bg-gradient-to-br from-sky-900 to-sky-700 px-5 py-4 text-white"
        >
          <div>
            <p class="text-[0.8125rem] uppercase tracking-[0.1em] opacity-70">
              {{ day.budget.label }}
            </p>
            <p v-if="day.budget.detail" class="text-sm opacity-70">
              {{ day.budget.detail }}
            </p>
          </div>
          <p class="font-heading text-2xl font-bold">
            <span class="mr-1 text-sm opacity-70">¥</span>{{ day.budget.amount }}
          </p>
        </div>
      </div>
    </div>

    <!-- ==================== Recommendation Section ==================== -->
    <div v-if="rec" class="mt-8 border-t-2 border-dashed border-slate-200 pt-6">
      <!-- Toggle Button -->
      <button
        class="group flex w-full items-center gap-3 rounded-card-md px-5 py-3.5 text-left transition-all duration-200 ease-custom"
        :class="showRec
          ? 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200'
          : 'bg-slate-50 border border-slate-200 hover:bg-sky-50 hover:border-sky-200'"
        @click="showRec = !showRec"
      >
        <!-- Icon -->
        <span
          class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-200"
          :class="showRec ? 'bg-orange-500 text-white' : 'bg-sky-100 text-sky-600 group-hover:bg-sky-200'"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </span>
        <span class="font-heading font-semibold text-[0.9375rem]" :class="showRec ? 'text-orange-700' : 'text-slate-600'">
          為什麼推薦這些景點？交通動線說明
        </span>
        <!-- Chevron -->
        <svg
          class="ml-auto h-5 w-5 flex-shrink-0 transition-transform duration-300 ease-custom"
          :class="showRec ? 'rotate-180 text-orange-500' : 'text-slate-400'"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <!-- Expandable Content -->
      <Transition name="rec">
        <div v-if="showRec" class="mt-5 space-y-5">

          <!-- Why this day (if exists) -->
          <div v-if="rec.whyThisDay" class="rounded-card-md bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 p-5">
            <h4 class="mb-2 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              為什麼排在這天？
            </h4>
            <p class="text-[0.9375rem] leading-relaxed text-slate-700">
              {{ rec.whyThisDay }}
            </p>
          </div>

          <!-- Spot Recommendations -->
          <div
            v-for="(spot, index) in rec.spots"
            :key="index"
            class="rounded-card-md border border-slate-200 bg-white p-5 transition-all duration-200 ease-custom hover:border-sky-200 hover:shadow-card-sm"
          >
            <h4 class="mb-2.5 flex items-center gap-2 font-heading font-semibold text-sky-900">
              <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                {{ index + 1 }}
              </span>
              <a
                :href="mapUrl(spot.name)"
                target="_blank"
                rel="noopener noreferrer"
                class="map-link"
              >{{ spot.name }}</a>
            </h4>

            <!-- Why -->
            <p class="mb-3 text-[0.9375rem] leading-relaxed text-slate-600">
              {{ spot.why }}
            </p>

            <!-- For Kids (if exists) -->
            <div v-if="spot.forKids && spot.forKids.length" class="mb-3 space-y-1.5">
              <div
                v-for="(kid, kidIdx) in spot.forKids"
                :key="kidIdx"
                class="flex items-start gap-2 text-[0.875rem]"
              >
                <span class="mt-0.5 flex-shrink-0 rounded-full bg-pink-100 px-2 py-0.5 text-xs font-semibold text-pink-600">
                  {{ kid.age }}
                </span>
                <span class="text-slate-600">{{ kid.point }}</span>
              </div>
            </div>

            <!-- Why here (if exists) -->
            <p v-if="spot.whyHere" class="mb-3 rounded-lg bg-sky-50 px-4 py-2.5 text-[0.875rem] leading-relaxed text-sky-800">
              {{ spot.whyHere }}
            </p>

            <!-- Transport (if exists) -->
            <div v-if="spot.transport" class="flex items-start gap-2 text-[0.875rem] text-slate-500">
              <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span>{{ spot.transport }}</span>
            </div>
          </div>

          <!-- Route Diagram -->
          <div v-if="rec.route" class="rounded-card-md border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5">
            <h4 class="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-emerald-700">
              {{ rec.route.label }}
            </h4>

            <!-- Route Steps -->
            <div class="space-y-0">
              <div
                v-for="(step, stepIdx) in rec.route.steps"
                :key="stepIdx"
              >
                <!-- Place -->
                <div class="flex items-center gap-3">
                  <span
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    :class="stepIdx === 0 || stepIdx === rec.route.steps.length - 1
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-emerald-700 border-2 border-emerald-300'"
                  >
                    {{ stepIdx + 1 }}
                  </span>
                  <span class="text-[0.9375rem] font-medium text-slate-800">
                    {{ step.place }}
                  </span>
                </div>
                <!-- Transport arrow (if not last) -->
                <div v-if="step.transport" class="ml-3.5 flex items-center gap-2 border-l-2 border-dashed border-emerald-300 py-2 pl-6">
                  <svg class="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                  <span class="text-xs font-medium text-emerald-600">
                    {{ step.transport }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Route note -->
            <p v-if="rec.route.note" class="mt-4 rounded-lg bg-emerald-100/60 px-4 py-2.5 text-[0.8125rem] font-medium leading-relaxed text-emerald-800">
              {{ rec.route.note }}
            </p>
          </div>

        </div>
      </Transition>
    </div>
  </article>
</template>

<style scoped>
.rec-enter-active {
  transition: all 0.4s cubic-bezier(.22,.61,.36,1);
}
.rec-leave-active {
  transition: all 0.25s cubic-bezier(.22,.61,.36,1);
}
.rec-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}
.rec-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
