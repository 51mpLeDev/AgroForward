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
  <section class="py-24 bg-[#0a0a0a]" id="contact">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Заголовок -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-semibold text-white">
          Контакты
        </h2>
        <p class="text-white/60 mt-4">
          Свяжитесь с нами для сотрудничества и поставок
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-10">

        <!-- Форма -->
        <div class="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">

          <div v-if="success" class="text-green-400 mb-6">
            Заявка отправлена. Мы свяжемся с вами.
          </div>

          <form @submit.prevent="submit" class="space-y-4">

            <input
                v-model="form.name"
                type="text"
                placeholder="Ваше имя"
                class="w-full p-3 rounded-lg bg-black border border-white/10 text-white focus:border-accent outline-none"
                required
            />

            <input
                v-model="form.phone"
                type="text"
                placeholder="Телефон"
                class="w-full p-3 rounded-lg bg-black border border-white/10 text-white focus:border-accent outline-none"
                required
            />

            <textarea
                v-model="form.message"
                placeholder="Комментарий"
                rows="4"
                class="w-full p-3 rounded-lg bg-black border border-white/10 text-white focus:border-accent outline-none"
            />

            <button
                type="submit"
                class="w-full bg-primary text-white py-3 rounded-lg hover:bg-red-800 transition"
                :disabled="loading"
            >
              {{ loading ? 'Отправка...' : 'Отправить заявку' }}
            </button>

          </form>
        </div>

        <!-- Контакты -->
        <div class="space-y-6">

          <div>
            <h3 class="text-white font-semibold mb-2">Телефон</h3>
            <p class="text-white/60">+7 (999) 123-45-67</p>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-2">Email</h3>
            <p class="text-white/60">info@company.ru</p>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-2">Адрес</h3>
            <p class="text-white/60">
              Россия, г. Москва, ул. Промышленная, 12
            </p>
          </div>

          <!-- Карта -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <iframe
                src="https://maps.google.com/maps?q=Moscow&t=&z=10&ie=UTF8&iwloc=&output=embed"
                class="w-full h-[250px] border-0"
                loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>