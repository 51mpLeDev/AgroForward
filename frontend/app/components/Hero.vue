<template>
  <section class="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden" id="hero">

    <!-- Глубокий фон -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-[#0f0f0f] to-black"></div>

    <!-- Glow (глубина) -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-primary/20 to-secondary/20 blur-[140px] rounded-full"></div>

    <!-- Сетка (индустриальный стиль) -->
    <div class="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    <!-- Контент -->
    <div class="relative z-10 max-w-4xl">

      <h1 class="text-4xl md:text-6xl font-semibold mb-6 leading-tight tracking-wide">
        ПОСТАВКИ
        <span class="text-accent">МЯСОСЫРЬЯ</span>
        <br />
        ДЛЯ КРУПНОГО БИЗНЕСА
      </h1>

      <p class="text-white/60 mb-10 text-lg max-w-xl mx-auto">
        Надежный поставщик для агрохолдингов и переработчиков.
        Гарантируем стабильность поставок и контроль качества на всех этапах.
      </p>

      <div class="flex justify-center gap-4 flex-wrap">

        <!-- Primary -->
        <button class="bg-primary px-8 py-3 rounded-lg hover:bg-red-800 transition shadow-lg shadow-primary/20 hover:shadow-primary/40">
          Получить предложение
        </button>

        <!-- Secondary -->
        <button class="border border-white/20 px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
          Связаться
        </button>

      </div>

    </div>

  </section>
</template>