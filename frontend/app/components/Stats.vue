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
      class="py-24 bg-gradient-to-b from-black via-[#071a14] to-black  border-secondary/20"
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- Заголовок -->
      <div
          class="mb-14 text-center transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <h2 class="text-3xl md:text-4xl font-semibold text-white">
          Надежность, подтвержденная цифрами
        </h2>

        <p class="text-white/60 mt-4 max-w-2xl mx-auto">
          Мы обеспечиваем стабильные поставки мясосырья для крупнейших предприятий отрасли
        </p>

        <!-- бренд линия -->
        <div class="mt-6 mx-auto w-24 h-[2px] bg-gradient-to-r from-primary to-secondary"></div>
      </div>

      <!-- Сетка -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div
            v-for="(stat, index) in stats"
            :key="index"
            class="group text-center p-6 rounded-2xl border border-secondary/20 bg-white/5 backdrop-blur-xl transition-all duration-500"
            :class="[visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6', index === 0 ? 'border-primary bg-primary/5' : '']"
            :style="{ transitionDelay: `${index * 100}ms` }"
        >

          <!-- число -->
          <div
              class="text-3xl md:text-4xl font-bold transition-all duration-300"
              :class="[index % 2 === 0 ? 'text-primary' : 'text-secondary']"
          >
            {{ animatedValues[index].toLocaleString() }}{{ stat.suffix }}
          </div>

          <!-- подпись -->
          <div class="mt-3 text-sm text-white/60">
            {{ stat.label }}
          </div>

          <!-- нижняя линия -->
          <div class="mt-4 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary mx-auto transition-all duration-300 group-hover:w-16"></div>

        </div>

      </div>

    </div>
  </section>
</template>