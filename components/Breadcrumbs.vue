<script setup lang="ts">
const props = defineProps(['items'])
</script>

<template>

  <Breadcrumb  :model="items" >
    <template #separator> / </template>
    <template #item="{ item, props }">
      <router-link  v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span class="text-primary text-xs md:text-sm font-semibold uppercase">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span class="text-surface-700 text-xs md:text-sm dark:text-surface-0 uppercase">{{ item.label }}</span>
      </a>
    </template>
  </Breadcrumb>

</template>

<style scoped>

</style>