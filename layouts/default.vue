<script setup lang="ts">
useSeoMeta({
  title: 'site',
  ogTitle: 'site',
  description: 'site',
  ogDescription: 'site',
})
</script>

<template>
  <Header />
  <main class="mt-4">
    <slot></slot>
  </main>

  <Toast position="bottom-right"/>
</template>

<style scoped>

</style>