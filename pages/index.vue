<script setup lang="ts">
const {$api} = useNuxtApp()

const materials = ref([])

onBeforeMount(async () => {
  materials.value = await $api('/api/shop/materials')
})
</script>

<template>

  <section class="bg-[url(/offer-bg.jpg)] h-[900px] relative top-[-120px] ">
    <div class="container text-white h-full ">
      <div class="flex flex-col items-start justify-between h-full py-20">
        <p></p>
        <div class="grid grid-cols-3 gap-4">
          <p class="col-span-2 font-semibold leading-[85px] text-7xl uppercase">Термодерево: тепло природы в вашем доме</p>
          <div class="justify-self-end">
            <a class="inline-block mb-3" href="#">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.6667 20.0002C36.6667 29.2048 29.2047 36.6668 20 36.6668C10.7953 36.6668 3.33334 29.2048 3.33334 20.0002C3.33334 10.7954 10.7953 3.3335 20 3.3335C29.2047 3.3335 36.6667 10.7954 36.6667 20.0002ZM20.5973 15.6376C18.9762 16.3119 15.7363 17.7075 10.8777 19.8243C10.0887 20.138 9.67541 20.445 9.63778 20.745C9.57419 21.2523 10.2094 21.452 11.0743 21.724C11.192 21.761 11.3139 21.7993 11.4388 21.84C12.2898 22.1165 13.4345 22.4402 14.0296 22.453C14.5694 22.4647 15.1719 22.2422 15.837 21.7853C20.3767 18.721 22.72 17.1722 22.8672 17.1388C22.971 17.1152 23.1148 17.0857 23.2122 17.1722C23.3097 17.2588 23.3 17.4228 23.2898 17.4668C23.2268 17.7352 20.7335 20.0532 19.4433 21.2527C19.0585 21.6103 18.6835 21.9757 18.3055 22.34C17.515 23.102 16.9222 23.6735 18.3383 24.6068C19.774 25.553 21.2205 26.4972 22.6207 27.4953C23.3112 27.9877 23.9317 28.43 24.698 28.3595C25.1435 28.3185 25.6035 27.8997 25.837 26.6507C26.3892 23.699 27.4745 17.3037 27.7253 14.6682C27.7473 14.4373 27.7197 14.1418 27.6975 14.0121C27.6753 13.8824 27.6288 13.6976 27.4603 13.5607C27.2605 13.3987 26.9523 13.3645 26.8145 13.367C26.1875 13.378 25.2258 13.7124 20.5973 15.6376Z" fill="white"/>
              </svg>
            </a>
            <a href="#"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.001 3.33301C29.2056 3.33301 36.6676 10.7949 36.6676 19.9997C36.6676 29.2043 29.2056 36.6663 20.001 36.6663C16.9445 36.6663 14.0801 35.8437 11.6174 34.4075L3.34123 36.6663L5.59449 28.3855C4.15753 25.9223 3.33426 23.0572 3.33426 19.9997C3.33426 10.7949 10.7962 3.33301 20.001 3.33301ZM13.9865 12.1802C13.7708 12.1954 13.5594 12.248 13.3669 12.3465C13.2225 12.4204 13.0884 12.5272 12.8778 12.7261C12.6789 12.9139 12.5636 13.078 12.4421 13.2361C11.8259 14.0383 11.4948 15.0231 11.5009 16.0346C11.5043 16.8523 11.7167 17.647 12.0521 18.389C12.7323 19.8937 13.8541 21.4843 15.3359 22.9595C15.6918 23.3138 16.0405 23.672 16.4165 24.003C18.2556 25.6223 20.4473 26.79 22.8171 27.4133C22.8171 27.4133 23.7505 27.5567 23.7641 27.5575C24.0733 27.5742 24.382 27.5518 24.6915 27.536C25.177 27.511 25.651 27.3797 26.08 27.1512C26.3558 27.0043 26.4863 26.9313 26.7178 26.7853C26.7178 26.7853 26.7888 26.7373 26.9258 26.6353C27.1508 26.4677 27.2898 26.3497 27.477 26.1553C27.615 26.012 27.7336 25.8427 27.8253 25.6518C27.9556 25.3798 28.0868 24.8607 28.139 24.4295C28.1788 24.1002 28.1668 23.9202 28.1625 23.8087C28.1553 23.6293 28.0071 23.4448 27.8448 23.3665L26.8756 22.9308C26.8756 22.9308 25.4265 22.3002 24.5401 21.8958C24.4478 21.8537 24.3468 21.8342 24.2453 21.828C24.023 21.8143 23.7738 21.8723 23.6153 22.0393C23.607 22.036 23.4966 22.1313 22.2908 23.5922C22.2243 23.6717 22.0685 23.8445 21.799 23.8283C21.7583 23.8255 21.7178 23.8197 21.6783 23.8093C21.5691 23.7805 21.4628 23.7425 21.3588 23.6985C21.1526 23.611 21.0803 23.5778 20.9395 23.5172C19.9773 23.0968 19.0943 22.5345 18.3138 21.8463C18.1045 21.662 17.9098 21.4635 17.7091 21.269C17.0088 20.5902 16.4354 19.8682 16.0089 19.156C15.9856 19.1172 15.9497 19.061 15.9111 18.9982C15.8413 18.8847 15.7643 18.7497 15.7402 18.657C15.6783 18.4118 15.8426 18.2148 15.8426 18.2148C15.8426 18.2148 16.2483 17.7713 16.4368 17.5302C16.6181 17.298 16.7746 17.071 16.8743 16.9092C17.0706 16.5936 17.1328 16.2674 17.0296 16.0157C16.562 14.8758 16.0796 13.7419 15.5824 12.6146C15.4843 12.3921 15.1924 12.2304 14.9269 12.1998C14.837 12.1894 14.7472 12.179 14.6569 12.173C14.4335 12.1621 14.2096 12.1645 13.9865 12.1802Z" fill="white"/>
            </svg>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 w-full">
          <div class="flex items-end gap-4">
            <Button size="large" rounded label="Обратный звонок" />
            <Button size="large" severity="secondary" rounded label="Рассчитать стоимость" />
            <Button size="large" severity="secondary" rounded label="Написать нам" />
          </div>
          <div class="flex items-end gap-4 justify-self-end">
            <img src="~assets/of1.png" alt="">
            <img src="~assets/of2.png" alt="">
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="pb-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-7xl uppercase">Каталог</p>
        </div>
        <div class="">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>
      <Catalog/>
    </div>
  </section>
  <section class="bg-[#efefef] py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-7xl uppercase">Породы</p>
        </div>
        <div class="">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>
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
          <Button class="px-4" rounded size="large" severity="contrast" label="В каталог"/>

        </div>
      </div>
      </div>
    </div>

  </section>
  <section class="py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-7xl uppercase">Преимущества продукции</p>
        </div>
        <div class="">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>
      <div class="grid grid-cols-4 gap-3">
        <div class="border p-8">
          <div class="mb-32">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="72" height="72" rx="20" fill="#EFEFEF"/>
              <path d="M48.5385 22.5903L46.9172 23.1308C44.1385 24.0962 41.1712 24.3925 38.2565 23.9955C35.1937 23.5202 32.0588 23.9426 29.231 25.2115C27.7319 25.8498 26.4163 26.853 25.404 28.1297C24.3916 29.4063 23.7146 30.9159 23.4347 32.5211C23.15 34.0646 23.1791 35.6498 23.5204 37.1819C23.8616 38.7139 24.508 40.1616 25.4209 41.4384C25.3398 41.7222 25.2587 42.0059 25.1912 42.2896C24.6424 44.6231 24.3703 47.013 24.3805 49.41H27.0828C27.2098 47.448 27.4761 45.4975 27.8799 43.5732C29.7545 44.5855 31.8567 45.1017 33.987 45.0729C35.9738 45.0716 37.9401 44.6719 39.7698 43.8975C50.0518 39.5063 48.7006 24.9007 48.7006 24.2927L48.5385 22.5903ZM38.7159 41.4114C35.1895 42.9112 30.974 42.6544 28.6095 40.8034C29.0091 39.4672 29.5575 38.1801 30.2444 36.9662C30.7783 36.0926 31.4083 35.2814 32.1224 34.5477C32.8522 33.8062 33.6741 33.1614 34.568 32.6291C36.415 31.5247 38.4635 30.799 40.5939 30.4944V29.1433C38.1427 29.0584 35.7065 29.5586 33.4871 30.6025C31.2177 31.7098 29.2932 33.4148 27.9204 35.534C27.4113 36.3435 26.9598 37.1878 26.5693 38.0606C25.9431 36.4587 25.7656 34.7163 26.0559 33.021C26.2461 31.8341 26.7354 30.7151 27.4776 29.7696C28.2199 28.8241 29.1906 28.0831 30.2984 27.6165C31.9138 26.8614 33.6765 26.4738 35.4597 26.4816C36.2974 26.4816 37.1216 26.5626 37.9863 26.6302C40.6944 26.9796 43.4439 26.8192 46.093 26.1573C45.9984 29.8864 45.3229 38.6011 38.7159 41.4114Z" fill="#1E1E1E"/>
            </svg>
          </div>
          <p class="text-3xl uppercase font-medium">Экологические преимущества</p>
        </div>
        <div class="border p-8">
          <div class="mb-32">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="72" height="72" rx="20" fill="#EFEFEF"/>
              <path d="M36.5 23C29.3318 23 23.5 28.8318 23.5 36C23.5 43.1682 29.3318 49 36.5 49C43.6682 49 49.5 43.1682 49.5 36C49.5 28.8318 43.6682 23 36.5 23ZM36.5 46.4C30.7657 46.4 26.1 41.7343 26.1 36C26.1 30.2657 30.7657 25.6 36.5 25.6C42.2343 25.6 46.9 30.2657 46.9 36C46.9 41.7343 42.2343 46.4 36.5 46.4Z" fill="#1E1E1E"/>
              <path d="M37.7974 29.5H35.1974V37.3H42.9974V34.7H37.7974V29.5Z" fill="#1E1E1E"/>
            </svg>

          </div>
          <p class="text-3xl uppercase font-medium">Долговечность и надежность</p>
        </div>
        <div class="border p-8">
          <div class="mb-32">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="72" height="72" rx="20" fill="#EFEFEF"/>
              <path d="M36.5 23C29.3318 23 23.5 28.8318 23.5 36C23.5 43.1682 29.3318 49 36.5 49C43.6682 49 49.5 43.1682 49.5 36C49.5 28.8318 43.6682 23 36.5 23ZM36.5 46.4C30.7657 46.4 26.1 41.7343 26.1 36C26.1 30.2657 30.7657 25.6 36.5 25.6C42.2343 25.6 46.9 30.2657 46.9 36C46.9 41.7343 42.2343 46.4 36.5 46.4Z" fill="#1E1E1E"/>
              <path d="M37.7974 29.5H35.1974V37.3H42.9974V34.7H37.7974V29.5Z" fill="#1E1E1E"/>
            </svg>

          </div>
          <p class="text-3xl uppercase font-medium">Долговечность и надежность</p>
        </div>
        <div class="border p-8">
          <div class="mb-32">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="72" height="72" rx="20" fill="#EFEFEF"/>
              <path d="M36.4982 49C42.5251 49 46.8984 44.4915 46.8984 38.2799C46.8984 30.1781 37.6448 23.5193 37.2509 23.2398C37.0313 23.084 36.7689 23.0002 36.4997 23C36.2305 22.9998 35.9678 23.0831 35.748 23.2385C35.3541 23.5154 26.0979 30.1534 26.0979 38.2747C26.0979 44.4889 30.4712 49 36.4982 49ZM36.4969 25.9374C38.5834 27.6144 44.2984 32.7158 44.2984 38.2799C44.2984 43.0614 41.0899 46.3999 36.4982 46.3999C31.9064 46.3999 28.6979 43.0588 28.6979 38.2747C28.6979 32.6976 34.4103 27.6105 36.4969 25.9374Z" fill="#1E1E1E"/>
            </svg>

          </div>
          <p class="text-3xl uppercase font-medium">Устойчивость к влаге </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#efefef] py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-7xl uppercase">Отзывы</p>
        </div>
        <div class="">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-3">
        <div class="p-10 bg-white rounded-[10px]" v-for="i in 5">
          <div class="flex items-start justify-between mb-5">
            <img class="w-[96px] h-[96px] rounded-full object-cover" src="https://placehold.co/400" alt="">
            <p class="font-medium opacity-50">29 января 2024</p>
          </div>
          <svg class="mb-5" width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5245 1.46352C13.6741 1.00287 14.3259 1.00287 14.4755 1.46353L17.0309 9.32827C17.0979 9.53428 17.2899 9.67376 17.5065 9.67376H25.776C26.2603 9.67376 26.4617 10.2936 26.0698 10.5783L19.3797 15.439C19.2044 15.5663 19.1311 15.792 19.1981 15.998L21.7535 23.8627C21.9031 24.3234 21.3759 24.7064 20.984 24.4217L14.2939 19.5611C14.1186 19.4337 13.8814 19.4337 13.7061 19.5611L7.01595 24.4217C6.6241 24.7064 6.09686 24.3234 6.24653 23.8627L8.80194 15.998C8.86888 15.792 8.79555 15.5663 8.62031 15.439L1.93016 10.5783C1.5383 10.2936 1.73969 9.67376 2.22405 9.67376H10.4935C10.7101 9.67376 10.9021 9.53428 10.9691 9.32827L13.5245 1.46352Z" fill="#EB5939"/>
            <path d="M41.5245 1.46352C41.6741 1.00287 42.3259 1.00287 42.4755 1.46353L45.0309 9.32827C45.0979 9.53428 45.2899 9.67376 45.5065 9.67376H53.776C54.2603 9.67376 54.4617 10.2936 54.0698 10.5783L47.3797 15.439C47.2044 15.5663 47.1311 15.792 47.1981 15.998L49.7535 23.8627C49.9031 24.3234 49.3759 24.7064 48.984 24.4217L42.2939 19.5611C42.1186 19.4337 41.8814 19.4337 41.7061 19.5611L35.016 24.4217C34.6241 24.7064 34.0969 24.3234 34.2465 23.8627L36.8019 15.998C36.8689 15.792 36.7956 15.5663 36.6203 15.439L29.9302 10.5783C29.5383 10.2936 29.7397 9.67376 30.224 9.67376H38.4935C38.7101 9.67376 38.9021 9.53428 38.9691 9.32827L41.5245 1.46352Z" fill="#EB5939"/>
            <path d="M69.5245 1.46352C69.6741 1.00287 70.3259 1.00287 70.4755 1.46353L73.0309 9.32827C73.0979 9.53428 73.2899 9.67376 73.5065 9.67376H81.776C82.2603 9.67376 82.4617 10.2936 82.0698 10.5783L75.3797 15.439C75.2044 15.5663 75.1311 15.792 75.1981 15.998L77.7535 23.8627C77.9031 24.3234 77.3759 24.7064 76.984 24.4217L70.2939 19.5611C70.1186 19.4337 69.8814 19.4337 69.7061 19.5611L63.016 24.4217C62.6241 24.7064 62.0969 24.3234 62.2465 23.8627L64.8019 15.998C64.8689 15.792 64.7956 15.5663 64.6203 15.439L57.9302 10.5783C57.5383 10.2936 57.7397 9.67376 58.224 9.67376H66.4935C66.7101 9.67376 66.9021 9.53428 66.9691 9.32827L69.5245 1.46352Z" fill="#EB5939"/>
            <path d="M97.5245 1.46352C97.6741 1.00287 98.3259 1.00287 98.4755 1.46353L101.031 9.32827C101.098 9.53428 101.29 9.67376 101.506 9.67376H109.776C110.26 9.67376 110.462 10.2936 110.07 10.5783L103.38 15.439C103.204 15.5663 103.131 15.792 103.198 15.998L105.753 23.8627C105.903 24.3234 105.376 24.7064 104.984 24.4217L98.2939 19.5611C98.1186 19.4337 97.8814 19.4337 97.7061 19.5611L91.016 24.4217C90.6241 24.7064 90.0969 24.3234 90.2465 23.8627L92.8019 15.998C92.8689 15.792 92.7956 15.5663 92.6203 15.439L85.9302 10.5783C85.5383 10.2936 85.7397 9.67376 86.224 9.67376H94.4935C94.7101 9.67376 94.9021 9.53428 94.9691 9.32827L97.5245 1.46352Z" fill="#EB5939"/>
            <path d="M125.524 1.46352C125.674 1.00287 126.326 1.00287 126.476 1.46353L129.031 9.32827C129.098 9.53428 129.29 9.67376 129.506 9.67376H137.776C138.26 9.67376 138.462 10.2936 138.07 10.5783L131.38 15.439C131.204 15.5663 131.131 15.792 131.198 15.998L133.753 23.8627C133.903 24.3234 133.376 24.7064 132.984 24.4217L126.294 19.5611C126.119 19.4337 125.881 19.4337 125.706 19.5611L119.016 24.4217C118.624 24.7064 118.097 24.3234 118.247 23.8627L120.802 15.998C120.869 15.792 120.796 15.5663 120.62 15.439L113.93 10.5783C113.538 10.2936 113.74 9.67376 114.224 9.67376H122.494C122.71 9.67376 122.902 9.53428 122.969 9.32827L125.524 1.46352Z" fill="#EB5939"/>
          </svg>
          <p class="leading-[22px] font-semibold text-lg mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi culpa dolorem, eaque earum eos facilis fuga ipsa maiores nobis officia quae quo, repudiandae saepe tempora veritatis voluptate. Autem, eos?
          </p>
          <p class="font-medium opacity-50">29 января 2024</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-7xl uppercase">Наши работы</p>
        </div>
        <div class="">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>

      <div class="masonry-grid">
        <Image alt="Image" preview>
          <template #previewicon>
            <i class="pi pi-search"></i>
          </template>
          <template #image>
            <img src="https://placehold.co/600x400" alt="image" />
          </template>
          <template #preview="slotProps">
            <img src="https://placehold.co/600x400" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
          </template>
        </Image>
        <img src="https://placehold.co/600x400" class="w-full" alt="">
        <img src="https://placehold.co/500x800" class="w-full" alt="">
        <img src="https://placehold.co/600x300" class="w-full" alt="">
        <img src="https://placehold.co/600x900" class="w-full" alt="">
        <img src="https://placehold.co/600x700" class="w-full" alt="">
        <img src="https://placehold.co/600x600" class="w-full" alt="">
        <img src="https://placehold.co/600x500" class="w-full" alt="">

      </div>
    </div>
  </section>
  <section class="py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-7xl uppercase">УСЛУГИ</p>
        </div>
        <div class="">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-3 w-full">
        <div v-for="i in 8" class="bg-[url(service-bg.jpg)] hover:bg-none flex flex-col items-start justify-between bg-no-repeat bg-center bg-cover p-10 rounded-[10px] h-[340px] group border">
          <div class="grid grid-cols-4 items-start w-full">
            <div class="col-span-3">
              <div class="flex flex-start gap-4 text-white group-hover:text-black">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="9" fill="#FF550A"/>
                </svg>
                <p>Браширование древесины</p>
              </div>
            </div>
            <div class="hidden group-hover:flex h-[60px] w-[60px] bg-black  items-center justify-center rounded-full justify-self-end">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.37029 14.6836L12.6841 4.36976V11.8552L14.6838 11.8552L14.6838 0.955846L3.7845 0.955846L3.7845 2.95554L11.2699 2.95554L0.956072 13.2694L2.37029 14.6836Z" fill="white"/>
              </svg>
            </div>
          </div>
          <p class="hidden group-hover:block">Покраска и защита древесины в Москве и МО. Работаем со всеми видами дерева, индивидуальный подход, качественные материалы.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-7xl uppercase">FAQ</p>
        </div>
        <div class="">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>
    </div>
  </section>
</template>

<style>
.masonry-grid {
  column-count: 3; /* Количество колонок */
  column-gap: 1rem; /* Расстояние между колонками */
}
.masonry-grid img {
  display: block;
  width: 100%;
  margin-bottom: 1rem; /* Расстояние между изображениями */
}
</style>