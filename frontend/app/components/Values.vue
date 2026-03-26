<script setup lang="ts">
import { ref, onMounted } from 'vue'

const values = [
  {
    title: 'Надежность',
    description: 'Выполняем обязательства в срок и гарантируем стабильность поставок',
  },
  {
    title: 'Качество',
    description: 'Многоуровневый контроль продукции и строгий отбор поставщиков',
  },
  {
    title: 'Партнерство',
    description: 'Долгосрочные отношения важнее разовых сделок',
  },
  {
    title: 'Профессионализм',
    description: 'Команда экспертов с глубоким знанием отрасли',
  },
  {
    title: 'Прозрачность',
    description: 'Честная коммуникация и полная документальная поддержка',
  },
  {
    title: 'Развитие',
    description: 'Инвестиции в технологии и расширение географии',
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
  <section
      ref="sectionRef"
      class="py-24 bg-[#0a0a0a] relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- Заголовок -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-semibold text-white">
          Наши ценности
        </h2>
        <p class="text-white/60 mt-4 max-w-2xl mx-auto">
          Принципы, на которых строится наша работа и доверие партнеров
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-6">

        <div
            v-for="(item, index) in values"
            :key="index"
            class="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:bg-white/10"
            :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            :style="{ transitionDelay: `${index * 100}ms` }"
        >

          <!-- Glow -->
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 blur-xl"></div>
          </div>

          <!-- Border glow -->
          <div class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/30 transition"></div>

          <!-- Content -->
          <div class="relative z-10">
            <h3 class="text-lg font-semibold text-white mb-3 tracking-wide">
              {{ item.title }}
            </h3>
            <p class="text-sm text-white/60 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

        </div>

      </div>
    </div>

    <!-- Background glow -->
    <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
  </section>
</template>