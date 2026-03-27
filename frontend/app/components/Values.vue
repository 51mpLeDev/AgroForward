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
      class="py-24 bg-gradient-to-b from-black via-[#071a14] to-black relative overflow-hidden"
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

        <!-- бренд линия -->
        <div class="mt-6 mx-auto w-24 h-[2px] bg-gradient-to-r from-primary to-secondary"></div>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-6">

        <div
            v-for="(item, index) in values"
            :key="index"
            class="group p-6 rounded-2xl border border-secondary/20 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
            :class="[visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', index === 1 ? 'border-primary bg-primary/5' : '']"
            :style="{ transitionDelay: `${index * 100}ms` }"
        >

          <!-- структура -->
          <div class="border-l-2 border-secondary pl-4 transition group-hover:border-primary">

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

    <!-- аккуратный фон -->
    <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
  </section>
</template>