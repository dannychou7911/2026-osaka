<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    // Each item: { icon, label, value, variant }
  },
})

const variantClasses = {
  default: 'bg-sky-100 text-sky-700',
  orange: 'bg-orange-100 text-orange-600',
  pink: 'bg-pink-100 text-pink-600',
  green: 'bg-emerald-100 text-emerald-600',
}
</script>

<template>
  <div class="py-8 bg-white border-y border-slate-200">
    <div class="max-w-container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-4"
      >
        <!-- Icon box -->
        <div
          class="w-12 h-12 flex-shrink-0 grid place-items-center rounded-card-sm"
          :class="variantClasses[item.variant] || variantClasses.default"
        >
          <!-- plane -->
          <svg
            v-if="item.icon === 'plane'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>

          <!-- plane-return (mirrored) -->
          <svg
            v-else-if="item.icon === 'plane-return'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 -scale-x-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>

          <!-- sun -->
          <svg
            v-else-if="item.icon === 'sun'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>

          <!-- map-pin -->
          <svg
            v-else-if="item.icon === 'map-pin'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <!-- Text -->
        <div>
          <p class="text-[0.8125rem] text-slate-500 font-semibold">{{ item.label }}</p>
          <p class="font-heading font-semibold text-sky-900 text-[1.0625rem]">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
