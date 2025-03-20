<script setup lang="ts">
const {$api} = useNuxtApp()

const materials = ref([])

onBeforeMount(async () => {
  materials.value = await $api('/api/shop/materials')

})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div class="border" v-for="material in materials" :key="material.id">
      <div :style="{ backgroundImage: `url(${material.image})` }"
           class="min-h-[200px] rounded-tl-[10px] rounded-tr-[10px] text-white p-5">
        <div class="grid grid-cols-2">
          <p class="font-medium text-3xl leading-[36px]">{{material.name}}</p>
          <div class="flex flex-col items-end justify-start gap-1">
            <p class="bg-white/10 border border-white/10 backdrop-blur-md px-3 py-1 rounded-[10px] text-white"
               v-for="item in material.tags" :key="item.id">
              {{item.name}}
            </p>
          </div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-bl-[10px] rounded-br-[10px]">
        <p class="font-medium mb-3">Рекомендуется для:</p>
        <div class="flex flex-wrap gap-1 mb-6">
          <p class="inline-block text-sm text-[#7E7E7E] bg-[#EBEBEB] px-3 py-2 rounded-lg"
             v-for="item in material.recommend" :key="item.id">
            {{item.name}}
          </p>
        </div>
        <p class="font-normal mb-8 min-h-[100px]">
          {{material.short_description}}
        </p>
        <nuxt-link :to="`/material/${material.slug}`">
          <Button  class="px-4" rounded size="large" severity="contrast" label="В каталог"/>
        </nuxt-link>


      </div>
    </div>
  </div>
</template>

<style scoped>

</style>