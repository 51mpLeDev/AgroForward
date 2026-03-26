<script setup lang="ts">
const features = [
  {
    title: 'Растущий рынок',
    text: 'Стабильный рост потребления мясной продукции 3–5% ежегодно',
  },
  {
    title: 'Сильная команда',
    text: 'Опытные специалисты с глубоким знанием отрасли',
  },
  {
    title: 'Стабильные клиенты',
    text: '50+ корпоративных клиентов и долгосрочные контракты',
  },
  {
    title: 'Масштабируемость',
    text: 'Готовая модель для быстрого роста и выхода в новые регионы',
  },
  {
    title: 'Финансовая устойчивость',
    text: 'Положительный денежный поток и контроль рисков',
  },
  {
    title: 'Прозрачность',
    text: 'Открытая отчетность и понятная структура бизнеса',
  },
]
</script>

<template>
  <section class="py-24 bg-[#0d0d0d] relative" id="invest">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Заголовок -->
      <div class="max-w-3xl mb-16">
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6">
          Инвесторам
        </h2>

        <p class="text-white/60 leading-relaxed">
          Мы создаем устойчивый бизнес в растущем сегменте агропромышленного рынка.
          Компания демонстрирует стабильный рост, прозрачную финансовую модель
          и готова к масштабированию.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-6">

        <div
            v-for="(item, index) in features"
            :key="index"
            class="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
        >
          <h3 class="text-white font-semibold mb-3">
            {{ item.title }}
          </h3>

          <p class="text-white/60 text-sm leading-relaxed">
            {{ item.text }}
          </p>
        </div>

      </div>

    </div>

    <!-- Glow -->
    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full"></div>
  </section>
</template>