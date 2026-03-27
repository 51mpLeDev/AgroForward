<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import { useReveal } from '~/composables/useReveal'

const { initReveal, destroyReveal } = useReveal()

onMounted(async () => {
  await nextTick()
  initReveal()
})

onUnmounted(() => {
  destroyReveal()
})
</script>

<template>
  <div>
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>