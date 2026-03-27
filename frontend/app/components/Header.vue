<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '~/assets/img/logo.SVG'

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
        ? 'bg-black/80 backdrop-blur-xl border-b border-secondary/20 shadow-lg shadow-black/30'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

      <!-- Лого -->
      <a href="#hero" class="flex items-center gap-3 group">

        <img
            :src="logo"
            alt="Агрофорвард"
            class="h-8 md:h-10 w-auto transition duration-300 group-hover:opacity-80"
        />

        <!-- fallback текст (важно для B2B) -->
        <span class="hidden md:block text-white text-sm tracking-wide">
          Агрофорвард
        </span>

      </a>

      <!-- Навигация -->
      <nav class="hidden md:flex items-center gap-10 text-sm text-white/70">

        <a
            href="#about"
            class="group relative transition"
        >
          <span class="group-hover:text-white transition">О компании</span>
          <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a
            href="#invest"
            class="group relative transition"
        >
          <span class="group-hover:text-white transition">Инвесторам</span>
          <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a
            href="#contact"
            class="group relative transition"
        >
          <span class="group-hover:text-white transition">Контакты</span>
          <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </a>

      </nav>

      <!-- CTA кнопка -->
      <div class="hidden md:block">
        <a
            href="#contact"
            class="px-5 py-2.5 rounded-lg bg-primary text-white text-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
        >
          Оставить заявку
        </a>
      </div>

    </div>
  </header>
</template>