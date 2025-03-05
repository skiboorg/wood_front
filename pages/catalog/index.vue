<!--catalog index-->
<script setup lang="ts">
const items = ref([
  { label: 'Главная', route: '/' },
  { label: 'Каталог' },

]);
</script>

<template>
  <div class="container">
    <Breadcrumbs :items="items" />
    <Catalog/>
  </div>

</template>

<style scoped>

</style>