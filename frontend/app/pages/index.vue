<script setup lang="ts">
import { useHead } from "nuxt/app";

useHead({
  title: 'Агрофорвард — поставки мясосырья для бизнеса',
  meta: [
    {
      name: 'description',
      content: 'Поставки мясосырья для переработчиков и агрохолдингов. Надежность, контроль качества и стабильные поставки по всей России.',
    },
  ],
})
</script>
<template>
  <div>
    <Hero />
    <About />
    <Stats />
    <Values />
    <Timeline />
    <Investors />
    <Contact />
  </div>
</template>