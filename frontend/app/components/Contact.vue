<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)

const submit = async () => {
  loading.value = true

  // имитация запроса (потом подключишь Laravel API)
  await new Promise(resolve => setTimeout(resolve, 1000))

  loading.value = false
  success.value = true

  form.value = { name: '', phone: '', message: '' }
}
</script>

<template>
  <section class="py-24 bg-gradient-to-b from-black via-[#081a14] to-black" id="contact">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Заголовок -->
      <div class="mb-16 max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-semibold text-white">
          Контакты
        </h2>
        <p class="text-white/60 mt-4">
          Свяжитесь с нами для сотрудничества и поставок
        </p>

        <!-- subtle line -->
        <div class="mt-6 w-20 h-[2px] bg-gradient-to-r from-primary to-secondary"></div>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-10">

        <!-- Форма -->
        <div class="p-8 rounded-2xl border border-secondary/20 bg-white/5 backdrop-blur-xl">

          <div v-if="success" class="text-secondary mb-6">
            Заявка отправлена. Мы свяжемся с вами.
          </div>

          <form @submit.prevent="submit" class="space-y-4">

            <input
                v-model="form.name"
                type="text"
                placeholder="Ваше имя"
                class="w-full p-3 rounded-lg bg-black/70 border border-white/10 text-white outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/40"
                required
            />

            <input
                v-model="form.phone"
                type="text"
                placeholder="Телефон"
                class="w-full p-3 rounded-lg bg-black/70 border border-white/10 text-white outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/40"
                required
            />

            <textarea
                v-model="form.message"
                placeholder="Комментарий"
                rows="4"
                class="w-full p-3 rounded-lg bg-black/70 border border-white/10 text-white outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/40"
            />

            <button
                type="submit"
                class="w-full bg-primary text-white py-3 rounded-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50"
                :disabled="loading"
            >
              {{ loading ? 'Отправка...' : 'Отправить заявку' }}
            </button>

          </form>
        </div>

        <!-- Контакты -->
        <div class="space-y-8">

          <div class="border-l-2 border-secondary pl-4">
            <h3 class="text-white font-semibold mb-1">Телефон</h3>
            <p class="text-white/60">+7 (999) 123-45-67</p>
          </div>

          <div class="border-l-2 border-secondary pl-4">
            <h3 class="text-white font-semibold mb-1">Email</h3>
            <p class="text-white/60">info@company.ru</p>
          </div>

          <div class="border-l-2 border-secondary pl-4">
            <h3 class="text-white font-semibold mb-1">Адрес</h3>
            <p class="text-white/60">
              Россия, г. Москва, ул. Промышленная, 12
            </p>
          </div>

          <!-- Карта -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-secondary/20">
            <iframe
                src="https://maps.google.com/maps?q=Moscow&t=&z=10&ie=UTF8&iwloc=&output=embed"
                class="w-full h-[250px] border-0 grayscale contrast-125"
                loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>