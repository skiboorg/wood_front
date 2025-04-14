<script setup lang="ts">

const {$api} = useNuxtApp()

const categories = ref([])

onBeforeMount(async () => {
  categories.value = await $api('/api/shop/categories')
})
</script>

<template>
  <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
    <div class="bg-[#efefef] rounded-xl p-4 relative h-[330px] z-0 flex flex-col items-start justify-between group overflow-hidden"
         v-for="category in categories" :key="category.id">
      <div>
        <img class=" object-cover absolute top-0 right-0 left-0 bottom-0 -z-10 h-full w-full" :src="category.image" alt="">
        <div class="grid grid-cols-12 w-full items-start">
          <p class="col-span-11 text-xl font-medium w-[50%] mb-4">{{category.name}}</p>
          <div class="justify-self-end">
            <nuxt-link :to="`/catalog/${category.slug}`" class="bg-black group-hover:bg-primary transition-all duration-200 rounded-full w-[44px] h-[44px] flex items-center justify-center" href="">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.792171 2.05949L10.6671 12.7943L3.18822 12.4823L3.10486 14.4802L13.9947 14.9346L14.4491 4.0447L12.4511 3.96135L12.1391 11.4403L2.26411 0.705456L0.792171 2.05949Z" fill="white"/>
              </svg>
            </nuxt-link>
          </div>
        </div>

        <p v-if="category.display_amount" class="text-sm text-[#7E7E7E]">{{category.display_amount}} товаров</p>
      </div>

        <div class="flex gap-2 flex-wrap">
          <nuxt-link :to="`/catalog/${category.slug}/${subcat.slug}`" class="inline-block text-sm text-[#7E7E7E] bg-[#EBEBEB] px-3 py-2 rounded-lg"
             v-for="subcat in category.sub_categories" :key="subcat.slug">{{subcat.name}}
          </nuxt-link>
        </div>


    </div>

  </div>
</template>

<style scoped>

</style>