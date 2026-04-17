<script setup>
const navLinks = [
  { label: '總覽', href: '#overview' },
  { label: '行程', href: '#itinerary' },
  { label: '重點', href: '#tips' },
  { label: '預算', href: '#budget' },
  { label: '清單', href: '#checklist' },
]
</script>

<template>
  <nav
    class="sticky top-3 z-50 mx-3 mt-3 flex items-center justify-between gap-2 rounded-full border border-sky-500/12 bg-white/85 px-3 py-2 shadow-card-md backdrop-blur-xl md:mx-4 md:px-4"
  >
    <!-- Brand -->
    <a href="#" class="flex shrink-0 items-center gap-2 md:gap-2.5">
      <span
        class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-orange-500 md:h-[34px] md:w-[34px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-white"
        >
          <path
            d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
          />
        </svg>
      </span>
      <span class="font-heading text-base font-bold tracking-tight text-sky-900 md:text-lg">
        Osaka 2026
      </span>
    </a>

    <!-- Nav Links -->
    <div class="scrollbar-none flex min-w-0 items-center gap-0.5 overflow-x-auto md:gap-1">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="shrink-0 rounded-full px-2.5 py-2 text-sm font-heading font-semibold text-slate-600 transition-all duration-300 ease-custom hover:bg-sky-100 hover:text-sky-700 md:px-3.5 md:text-base"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>
