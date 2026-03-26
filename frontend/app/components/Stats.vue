<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Общий объем поставок', value: 20766608, suffix: ' кг' },
  { label: 'Клиентов', value: 50, suffix: '+' },
  { label: 'Лет на рынке', value: 8, suffix: '+' },
  { label: 'Регионов работы', value: 12, suffix: '' },
]

const animatedValues = ref(stats.map(() => 0))
const sectionRef = ref<HTMLElement | null>(null)
const visible = ref(false)

const animate = () => {
  stats.forEach((stat, index) => {
    let start = 0
    const end = stat.value

    const step = Math.ceil(end / 60)

    const timer = setInterval(() => {
      start += step

      if (start >= end) {
        animatedValues.value[index] = end
        clearInterval(timer)
      } else {
        animatedValues.value[index] = start
      }
    }, 20)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section
      ref="sectionRef"
      class="py-20 bg-neutral-950 border-t border-white/10"
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- Заголовок -->
      <div
          class="mb-12 text-center transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <h2 class="text-3xl md:text-4xl font-semibold text-white">
          Надежность, подтвержденная цифрами
        </h2>
        <p class="text-white/60 mt-4 max-w-2xl mx-auto">
          Мы обеспечиваем стабильные поставки мясосырья для крупнейших предприятий отрасли
        </p>
      </div>

      <!-- Сетка -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

        <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center transition-all duration-700"
            :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="text-3xl md:text-4xl font-bold text-primary">
            {{ animatedValues[index].toLocaleString() }}{{ stat.suffix }}
          </div>
          <div class="mt-2 text-sm text-white/60">
            {{ stat.label }}
          </div>
        </div>

      </div>

    </div>
  </section>
</template>