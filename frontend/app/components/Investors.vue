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
  <section class="py-24 bg-gradient-to-b from-black via-[#081a14] to-black relative" id="invest">
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

        <!-- линия бренда -->
        <div class="mt-6 w-24 h-[2px] bg-gradient-to-r from-primary to-secondary"></div>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-6">

        <div
            v-for="(item, index) in features"
            :key="index"
            :class="index === 4 ? 'border-primary bg-primary/5' : ''"
            class="group p-6 rounded-2xl border border-secondary/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
        >

          <!-- Левая линия -->
          <div class="border-l-2 border-secondary pl-4 transition group-hover:border-primary">

            <h3 class="text-white font-semibold mb-3">
              {{ item.title }}
            </h3>

            <p class="text-white/60 text-sm leading-relaxed">
              {{ item.text }}
            </p>

          </div>

        </div>

      </div>

    </div>

    <!-- Более аккуратный glow -->
    <div class="absolute top-0 right-0 w-[350px] h-[350px] bg-secondary/10 blur-[100px] rounded-full"></div>
  </section>
</template>