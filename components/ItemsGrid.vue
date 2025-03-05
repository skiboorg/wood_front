<script setup lang="ts">
const props = defineProps(['products'])
</script>

<template>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="border rounded-xl overflow-hidden" v-for="product in products" :key="product.id">
      <img :src="product.image" alt="Товар" class="rounded-lg  relative w-full object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-7 text-gray-600">{{product.name}}</h3>
        <p class="text-sm text-gray-600 mb-1" v-for="item in product.features" :key="item.id">
          {{item.label}}: {{item.value}}
        </p>

        <div class="flex items-center justify-between">
          <p class="text-xl font-bold mt-2">{{product.display_price}}</p>
          <nuxt-link :to="`/catalog/${product.cat_slug}/${product.subcat_slug}/${product.slug}`">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="62.7188" y="31.249" width="44" height="44" rx="22" transform="rotate(135 62.7188 31.249)" fill="black"/>
              <path d="M25.8636 38.8201L36.1775 28.5062V35.9917L38.1772 35.9917L38.1772 25.0923L27.2778 25.0923L27.2778 27.092L34.7632 27.092L24.4494 37.4059L25.8636 38.8201Z" fill="white"/>
            </svg>

          </nuxt-link>
        </div>

      </div>
    </div>

</div>
</template>

<style scoped>

</style>