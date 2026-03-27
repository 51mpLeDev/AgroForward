<script setup lang="ts">
import {onMounted} from 'vue'
import {useHead} from "nuxt/app"

onMounted(() => {
  document.documentElement.classList.add('js-enabled')
})

useHead({
  titleTemplate: '%s | Агрофорвард',

  meta: [
    {
      name: 'description',
      content: 'Поставки мясосырья для переработчиков и агрохолдингов. Надежный B2B поставщик.',
    },
    {
      property: 'og:title',
      content: 'Агрофорвард — поставки мясосырья',
    },
    {
      property: 'og:description',
      content: 'Надежный поставщик мясосырья для бизнеса',
    },
    {
      property: 'og:image',
      content: '/logo.svg',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],

  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.svg',
    },
    {
      rel: 'alternate icon',
      href: '/favicon.ico',
    },
  ],
})
</script>


<template>
  <NuxtLayout>
    <div class="scroll-smooth">
      <NuxtPage/>
    </div>
  </NuxtLayout>
</template>