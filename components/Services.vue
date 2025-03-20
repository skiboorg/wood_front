<script setup lang="ts">
const {$api} = useNuxtApp()

const services = ref([])

onBeforeMount(async () => {
  services.value = await $api('/api/shop/services')
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 w-full">
    <div @click="navigateTo(`/services/${item.slug}`)" v-for="item in services" :style="{ backgroundImage: `url(${item.image})` }" class=" cursor-pointer hover:!bg-none flex flex-col items-start justify-between bg-no-repeat bg-center bg-cover p-10 rounded-[10px] h-[340px] group border">
      <div class="grid grid-cols-4 items-start w-full">
        <div class="col-span-3">
          <div class="flex flex-start gap-4 text-white group-hover:text-black">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="9" fill="#FF550A"/>
            </svg>
            <p>{{item.name}}</p>
          </div>
        </div>
        <div class="hidden group-hover:flex h-[60px] w-[60px] bg-black  items-center justify-center rounded-full justify-self-end">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.37029 14.6836L12.6841 4.36976V11.8552L14.6838 11.8552L14.6838 0.955846L3.7845 0.955846L3.7845 2.95554L11.2699 2.95554L0.956072 13.2694L2.37029 14.6836Z" fill="white"/>
          </svg>
        </div>
      </div>
      <p class="hidden group-hover:block">{{item.short_description}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>