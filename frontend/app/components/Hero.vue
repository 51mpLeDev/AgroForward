<template>
  <section class="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden" id="hero">

    <!-- Фон -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-[#071a14] to-black"></div>

    <!-- Легкий индустриальный glow (сильно уменьшили) -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 blur-[80px] rounded-full"></div>

    <!-- Сетка -->
    <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    <!-- Контент -->
    <div class="relative z-10 max-w-4xl">

      <!-- Заголовок -->
      <h1 class="text-4xl md:text-6xl font-semibold mb-6 leading-tight tracking-wide text-white">
        ПОСТАВКИ
        <span class="text-primary">МЯСОСЫРЬЯ</span>
        <br />
        ДЛЯ
        <span class="text-secondary">ПЕРЕРАБОТЧИКОВ И АГРОХОЛДИНГОВ</span>
      </h1>

      <!-- Подзаголовок -->
      <p class="text-white/60 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
        От 20 тонн в месяц. Собственная логистика и строгий контроль качества
        на всех этапах поставки.
      </p>

      <!-- Мини-факты (очень усиливает B2B) -->
      <div class="flex justify-center gap-6 flex-wrap text-sm text-white/50 mb-10">
        <span>8+ лет на рынке</span>
        <span class="text-secondary">•</span>
        <span>50+ клиентов</span>
        <span class="text-secondary">•</span>
        <span>20 000+ тонн поставок</span>
      </div>

      <!-- Кнопки -->
      <div class="flex justify-center gap-4 flex-wrap">

        <!-- Primary -->
        <a
            href="#contact"
            class="bg-primary px-8 py-3 rounded-lg text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
        >
          Получить предложение
        </a>

        <!-- Secondary -->
        <a
            href="#contact"
            class="border border-secondary text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-secondary hover:text-primary hover:border-primary"
        >
          Связаться
        </a>

      </div>

    </div>

  </section>
</template>