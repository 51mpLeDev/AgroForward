<script setup>
import {onMounted} from 'vue'
import {useReveal} from '~/composables/useReveal'

onMounted(() => {
  useReveal().initReveal()
})
</script>

<template>
  <NuxtLayout>
    <div class="scroll-smooth">
      <NuxtPage/>
    </div>
  </NuxtLayout>
</template>