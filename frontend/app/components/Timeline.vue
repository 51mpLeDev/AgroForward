<script setup lang="ts">
import { ref, onMounted } from 'vue'

const timeline = [
  {
    year: '2017',
    title: 'Основание компании',
    text: 'Запуск бизнеса, первые контракты и формирование базы поставщиков',
  },
  {
    year: '2018–2019',
    title: 'Масштабирование',
    text: 'Рост объемов поставок и расширение географии работы',
  },
  {
    year: '2020–2021',
    title: 'Укрепление позиций',
    text: 'Стабильная работа в условиях пандемии и усиление контроля качества',
  },
  {
    year: '2022–2023',
    title: 'Технологизация',
    text: 'Внедрение цифровых систем учета и расширение инфраструктуры',
  },
  {
    year: '2024–2026',
    title: 'Экспансия',
    text: 'Рост бизнеса, выход на новый уровень и развитие международных поставок',
  },
]

const sectionRef = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-black relative">
    <div class="max-w-5xl mx-auto px-6">

      <!-- Заголовок -->
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-semibold text-white">
          История развития
        </h2>
        <p class="text-white/60 mt-4">
          Ключевые этапы роста компании
        </p>
      </div>

      <!-- Линия -->
      <div class="relative">

        <div class="absolute left-1/2 top-0 w-px h-full bg-white/10"></div>

        <!-- Items -->
        <div
            v-for="(item, index) in timeline"
            :key="index"
            class="relative mb-16 flex items-center"
            :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
        >

          <!-- Контент -->
          <div
              class="w-full md:w-[45%] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-700"
              :class="visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'"
              :style="{ transitionDelay: `${index * 150}ms` }"
          >
            <div class="text-accent text-sm mb-2">
              {{ item.year }}
            </div>
            <h3 class="text-white text-lg font-semibold mb-2">
              {{ item.title }}
            </h3>
            <p class="text-white/60 text-sm">
              {{ item.text }}
            </p>
          </div>

          <!-- Точка -->
          <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-black"></div>

        </div>

      </div>
    </div>

    <!-- Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full"></div>
  </section>
</template>