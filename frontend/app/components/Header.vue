<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
      :class="[
      'fixed w-full z-50 transition-all duration-300',
      scrolled
        ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

      <!-- Лого -->
      <a href="#hero" class="text-lg md:text-xl font-semibold tracking-wider text-white">
        AGRO<span class="text-accent">FORWARD</span>
      </a>

      <!-- Навигация -->
      <nav class="hidden md:flex items-center gap-8 text-sm text-white/70">

        <a
            href="#about"
            class="group relative transition hover:text-white"
        >
          О компании
          <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a
            href="#invest"
            class="relative transition hover:text-white"
        >
          Инвесторам
        </a>

        <a
            href="#contact"
            class="relative transition hover:text-white"
        >
          Контакты
        </a>

      </nav>

    </div>
  </header>
</template>