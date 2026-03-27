<template>
  <footer class="bg-gradient-to-b from-black to-[#041a14] border-t border-secondary/20 py-14">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid md:grid-cols-3 gap-10">

        <!-- Лого / описание -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-3 tracking-wide">
            АГРО<span class="text-primary">ФОРВАРД</span>
          </h3>

          <p class="text-white/60 text-sm leading-relaxed max-w-xs">
            Надежный поставщик мясосырья для агрохолдингов,
            перерабатывающих предприятий и розничных сетей.
          </p>

          <!-- линия -->
          <div class="mt-4 w-16 h-[2px] bg-gradient-to-r from-primary to-secondary"></div>
        </div>

        <!-- Навигация -->
        <div>
          <h4 class="text-white font-semibold mb-4">
            Разделы
          </h4>

          <ul class="space-y-3 text-white/60 text-sm">
            <li>
              <a href="#about" class="transition hover:text-primary">
                О компании
              </a>
            </li>
            <li>
              <a href="#invest" class="transition hover:text-primary">
                Инвесторам
              </a>
            </li>
            <li>
              <a href="#contact" class="transition hover:text-primary">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="text-white font-semibold mb-4">
            Контакты
          </h4>

          <div class="space-y-2 text-white/60 text-sm">
            <p class="hover:text-secondary transition">
              info@company.ru
            </p>
            <p class="hover:text-secondary transition">
              +7 (999) 123-45-67
            </p>
          </div>

          <!-- юридическая инфа -->
          <div class="mt-6 text-white/40 text-xs leading-relaxed">
            <p>ИНН: 7700000000</p>
            <p>ОГРН: 1207700000000</p>
            <p>Работаем с 2017 года</p>
          </div>
        </div>

      </div>

      <!-- Нижняя строка -->
      <div class="mt-12 pt-6 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">

        <div>
          © {{ new Date().getFullYear() }} Агрофорвард. Все права защищены.
        </div>

        <div class="text-xs">
          Поставки мясосырья по всей России и СНГ
        </div>

      </div>

    </div>
  </footer>
</template>