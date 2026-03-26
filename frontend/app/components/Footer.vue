<script setup lang="ts"></script>

<template>
  <footer class="bg-black border-t border-white/10 py-12">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid md:grid-cols-3 gap-8">

        <!-- Лого / описание -->
        <div>
          <h3 class="text-white font-semibold mb-3">
            Агрофорвард
          </h3>
          <p class="text-white/60 text-sm">
            Надежный поставщик мясосырья для промышленности и ритейла
          </p>
        </div>

        <!-- Навигация -->
        <div>
          <h4 class="text-white font-semibold mb-3">
            Разделы
          </h4>
          <ul class="space-y-2 text-white/60 text-sm">
            <li>О компании</li>
            <li>Инвесторам</li>
            <li>Контакты</li>
          </ul>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="text-white font-semibold mb-3">
            Контакты
          </h4>
          <p class="text-white/60 text-sm">
            info@company.ru
          </p>
          <p class="text-white/60 text-sm">
            +7 (999) 123-45-67
          </p>
        </div>

      </div>

      <!-- Нижняя строка -->
      <div class="mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {{ new Date().getFullYear() }} Агрофорвард. Все права защищены.
      </div>

    </div>
  </footer>
</template>