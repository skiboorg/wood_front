<script setup lang="ts">
const {$api} = useNuxtApp()

const faq = ref([])

onBeforeMount(async () => {
  faq.value = await $api('/api/data/faq')
})
</script>

<template>

  <section class="bg-[url(/offer-bg1.jpg)] h-[600px] md:h-[900px] relative top-[-90px] md:top-[-140px] ">
    <div class="container text-white h-full ">
      <div class="flex flex-col items-start justify-between h-full py-20">
        <p></p>

          <p class="w-full md:w-2/3 font-bold md:leading-[85px] text-4xl md:text-7xl uppercase">Термодерево: тепло природы в вашем доме</p>
        <div class="hidden md:flex gap-3 ">
          <p class="flex items-center gap-2 bg-white/10 font-medium border uppercase border-white/10 backdrop-blur-md px-4 py-2 rounded-[32px] text-white">
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1668 12.7042V18.4304C11.1668 18.6605 10.9802 18.8472 10.7502 18.8472C10.6747 18.8472 10.6006 18.8266 10.5358 18.7878L7.00016 16.6663L3.46454 18.7878C3.26721 18.9061 3.01127 18.8421 2.89287 18.6448C2.85402 18.58 2.8335 18.5059 2.8335 18.4304V12.7042C1.30939 11.4824 0.333496 9.60501 0.333496 7.49967C0.333496 3.81777 3.31826 0.833008 7.00016 0.833008C10.6821 0.833008 13.6668 3.81777 13.6668 7.49967C13.6668 9.60501 12.6909 11.4824 11.1668 12.7042ZM7.00016 12.4997C9.76158 12.4997 12.0002 10.2611 12.0002 7.49967C12.0002 4.73825 9.76158 2.49967 7.00016 2.49967C4.23874 2.49967 2.00016 4.73825 2.00016 7.49967C2.00016 10.2611 4.23874 12.4997 7.00016 12.4997ZM7.00016 10.833C5.15921 10.833 3.66683 9.34059 3.66683 7.49967C3.66683 5.65872 5.15921 4.16634 7.00016 4.16634C8.84108 4.16634 10.3335 5.65872 10.3335 7.49967C10.3335 9.34059 8.84108 10.833 7.00016 10.833Z" fill="white"/>
            </svg>
            10 лет ГАрантии
          </p>
          <p class="flex items-center gap-2 bg-white/10 font-medium border uppercase border-white/10 backdrop-blur-md px-4 py-2 rounded-[32px] text-white">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33309 8.64274L12.9934 0.982422L14.1719 2.16093L5.33309 10.9997L0.0297852 5.69649L1.2083 4.51799L5.33309 8.64274Z" fill="white"/>
            </svg>

            20 лет на рынке
          </p>
          <p class="flex items-center gap-2 bg-white/10 font-medium border uppercase border-white/10 backdrop-blur-md px-4 py-2 rounded-[32px] text-white">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33309 8.64274L12.9934 0.982422L14.1719 2.16093L5.33309 10.9997L0.0297852 5.69649L1.2083 4.51799L5.33309 8.64274Z" fill="white"/>
            </svg>

            Более 15k проектов
          </p>
          <p class="flex items-center gap-2 bg-white/10 font-medium border uppercase border-white/10 backdrop-blur-md px-4 py-2 rounded-[32px] text-white">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33309 8.64274L12.9934 0.982422L14.1719 2.16093L5.33309 10.9997L0.0297852 5.69649L1.2083 4.51799L5.33309 8.64274Z" fill="white"/>
            </svg>

            Всегда в срок
          </p>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
          <div class="flex flex-col md:flex-row items-end gap-2">
            <Button class="!px-6 !py-3"   rounded label="Рассчитать стоимость для вас" />
            <a href="#" target="_blank" class="p-button p-component p-button-secondary p-button-rounded !px-4  !py-3 !text-black">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0005 0C15.5233 0 20.0005 4.47715 20.0005 10C20.0005 15.5228 15.5233 20 10.0005 20C8.16661 20 6.44802 19.5064 4.97037 18.6447L0.00466847 20L1.35663 15.0315C0.494448 13.5536 0.000488281 11.8345 0.000488281 10C0.000488281 4.47715 4.47764 0 10.0005 0ZM6.39183 5.30833C6.26244 5.31742 6.13558 5.34902 6.02008 5.40811C5.93343 5.45244 5.85299 5.51651 5.7266 5.63586C5.60725 5.74855 5.53808 5.84697 5.4652 5.94186C5.0955 6.4232 4.8968 7.01405 4.90049 7.62098C4.9025 8.1116 5.02994 8.5884 5.2312 9.0336C5.63933 9.9364 6.31239 10.8908 7.20145 11.7759C7.41501 11.9885 7.62424 12.2034 7.84985 12.402C8.95331 13.3736 10.2683 14.0742 11.6902 14.4482C11.6902 14.4482 12.2502 14.5342 12.2584 14.5347C12.4439 14.5447 12.6291 14.5313 12.8148 14.5218C13.1061 14.5068 13.3905 14.428 13.6479 14.2909C13.8134 14.2028 13.8917 14.159 14.0306 14.0714C14.0306 14.0714 14.0732 14.0426 14.1554 13.9814C14.2904 13.8808 14.3738 13.81 14.4861 13.6934C14.5689 13.6074 14.6401 13.5058 14.6951 13.3913C14.7733 13.2281 14.852 12.9166 14.8833 12.6579C14.9072 12.4603 14.9 12.3523 14.8974 12.2854C14.8931 12.1778 14.8042 12.0671 14.7068 12.0201L14.1253 11.7587C14.1253 11.7587 13.2558 11.3803 12.724 11.1377C12.6686 11.1124 12.608 11.1007 12.5471 11.097C12.4137 11.0888 12.2642 11.1236 12.1691 11.2238C12.1641 11.2218 12.0979 11.279 11.3744 12.1555C11.3345 12.2032 11.241 12.3069 11.0793 12.2972C11.0549 12.2955 11.0306 12.292 11.0069 12.2858C10.9414 12.2685 10.8776 12.2457 10.8152 12.2193C10.6915 12.1668 10.6481 12.1469 10.5636 12.1105C9.98631 11.8583 9.45651 11.5209 8.98821 11.108C8.86261 10.9974 8.74581 10.8783 8.62541 10.7616C8.20521 10.3543 7.8612 9.9211 7.60528 9.4938C7.59131 9.4705 7.56978 9.4368 7.54659 9.3991C7.50472 9.331 7.45854 9.25 7.44406 9.1944C7.40689 9.0473 7.5055 8.9291 7.5055 8.9291C7.5055 8.9291 7.7489 8.663 7.86199 8.5183C7.97079 8.379 8.06471 8.2428 8.12451 8.1457C8.24231 7.95633 8.27961 7.76062 8.21771 7.60963C7.93715 6.92565 7.64769 6.24536 7.34937 5.56894C7.29049 5.43545 7.11536 5.33846 6.9561 5.32007C6.90216 5.31384 6.84826 5.30758 6.7941 5.30402C6.66004 5.29748 6.52571 5.29892 6.39183 5.30833Z" fill="black"/>
              </svg>
              Мы в WhatsApp
            </a>
            <a href="#" target="_blank" class="p-button p-component p-button-secondary p-button-rounded  !px-4 !py-3 !text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.4301 8.85895C11.2628 9.34442 8.93016 10.3493 5.43192 11.8734C4.86385 12.0992 4.56629 12.3203 4.53919 12.5363C4.49341 12.9016 4.95073 13.0453 5.5735 13.2412C5.6582 13.2678 5.74598 13.2954 5.83596 13.3247C6.44866 13.5238 7.27285 13.7568 7.70131 13.766C8.08997 13.7744 8.52376 13.6142 9.00266 13.2853C12.2712 11.079 13.9584 9.96384 14.0644 9.93984C14.1391 9.9228 14.2427 9.90156 14.3128 9.96384C14.383 10.0262 14.376 10.1443 14.3687 10.176C14.3233 10.3692 12.5281 12.0382 11.5992 12.9018C11.3221 13.1593 11.0521 13.4224 10.78 13.6847C10.2108 14.2333 9.78396 14.6448 10.8036 15.3168C11.8373 15.998 12.8788 16.6778 13.8869 17.3965C14.384 17.751 14.8308 18.0695 15.3826 18.0187C15.7033 17.9892 16.0345 17.6876 16.2026 16.7884C16.6002 14.6632 17.3816 10.0585 17.5622 8.161C17.5781 7.99476 17.5582 7.782 17.5422 7.6886C17.5262 7.59521 17.4928 7.46213 17.3714 7.36362C17.2276 7.24696 17.0057 7.22236 16.9064 7.22411C16.455 7.23206 15.7626 7.47284 12.4301 8.85895Z" fill="black"/>
              </svg>

              Мы в Telegram
            </a>

          </div>
          <div class="hidden md:flex items-end gap-4 justify-self-end">
            <img src="~assets/of1.png" alt="">
            <img src="~assets/of2.png" alt="">
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="pb-[60px] md:pb-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-3xl md:text-7xl uppercase">Каталог</p>
        </div>
        <div class="hidden md:block">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>
      <Catalog/>
    </div>
  </section>
  <section class="bg-[#efefef] py-[60px] md:py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-3xl md:text-7xl uppercase">Породы</p>
        </div>
        <div class="hidden md:block">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>
     <Materials/>
    </div>

  </section>
  <section class="py-[60px] md:py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-3xl md:text-7xl uppercase">Преимущества продукции</p>
        </div>
        <div class="hidden md:block">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div class="border p-8">
          <div class="mb-16 md:mb-32">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="72" height="72" rx="20" fill="#EFEFEF"/>
              <path d="M48.5385 22.5903L46.9172 23.1308C44.1385 24.0962 41.1712 24.3925 38.2565 23.9955C35.1937 23.5202 32.0588 23.9426 29.231 25.2115C27.7319 25.8498 26.4163 26.853 25.404 28.1297C24.3916 29.4063 23.7146 30.9159 23.4347 32.5211C23.15 34.0646 23.1791 35.6498 23.5204 37.1819C23.8616 38.7139 24.508 40.1616 25.4209 41.4384C25.3398 41.7222 25.2587 42.0059 25.1912 42.2896C24.6424 44.6231 24.3703 47.013 24.3805 49.41H27.0828C27.2098 47.448 27.4761 45.4975 27.8799 43.5732C29.7545 44.5855 31.8567 45.1017 33.987 45.0729C35.9738 45.0716 37.9401 44.6719 39.7698 43.8975C50.0518 39.5063 48.7006 24.9007 48.7006 24.2927L48.5385 22.5903ZM38.7159 41.4114C35.1895 42.9112 30.974 42.6544 28.6095 40.8034C29.0091 39.4672 29.5575 38.1801 30.2444 36.9662C30.7783 36.0926 31.4083 35.2814 32.1224 34.5477C32.8522 33.8062 33.6741 33.1614 34.568 32.6291C36.415 31.5247 38.4635 30.799 40.5939 30.4944V29.1433C38.1427 29.0584 35.7065 29.5586 33.4871 30.6025C31.2177 31.7098 29.2932 33.4148 27.9204 35.534C27.4113 36.3435 26.9598 37.1878 26.5693 38.0606C25.9431 36.4587 25.7656 34.7163 26.0559 33.021C26.2461 31.8341 26.7354 30.7151 27.4776 29.7696C28.2199 28.8241 29.1906 28.0831 30.2984 27.6165C31.9138 26.8614 33.6765 26.4738 35.4597 26.4816C36.2974 26.4816 37.1216 26.5626 37.9863 26.6302C40.6944 26.9796 43.4439 26.8192 46.093 26.1573C45.9984 29.8864 45.3229 38.6011 38.7159 41.4114Z" fill="#1E1E1E"/>
            </svg>
          </div>
          <p class="text-3xl uppercase font-medium">Экологические преимущества</p>
        </div>
        <div class="border p-8">
          <div class="mb-16 md:mb-32">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="72" height="72" rx="20" fill="#EFEFEF"/>
              <path d="M36.5 23C29.3318 23 23.5 28.8318 23.5 36C23.5 43.1682 29.3318 49 36.5 49C43.6682 49 49.5 43.1682 49.5 36C49.5 28.8318 43.6682 23 36.5 23ZM36.5 46.4C30.7657 46.4 26.1 41.7343 26.1 36C26.1 30.2657 30.7657 25.6 36.5 25.6C42.2343 25.6 46.9 30.2657 46.9 36C46.9 41.7343 42.2343 46.4 36.5 46.4Z" fill="#1E1E1E"/>
              <path d="M37.7974 29.5H35.1974V37.3H42.9974V34.7H37.7974V29.5Z" fill="#1E1E1E"/>
            </svg>

          </div>
          <p class="text-3xl uppercase font-medium">Долговечность и надежность</p>
        </div>
        <div class="border p-8">
          <div class="mb-16 md:mb-32">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="72" height="72" rx="20" fill="#EFEFEF"/>
              <path d="M36.5 23C29.3318 23 23.5 28.8318 23.5 36C23.5 43.1682 29.3318 49 36.5 49C43.6682 49 49.5 43.1682 49.5 36C49.5 28.8318 43.6682 23 36.5 23ZM36.5 46.4C30.7657 46.4 26.1 41.7343 26.1 36C26.1 30.2657 30.7657 25.6 36.5 25.6C42.2343 25.6 46.9 30.2657 46.9 36C46.9 41.7343 42.2343 46.4 36.5 46.4Z" fill="#1E1E1E"/>
              <path d="M37.7974 29.5H35.1974V37.3H42.9974V34.7H37.7974V29.5Z" fill="#1E1E1E"/>
            </svg>

          </div>
          <p class="text-3xl uppercase font-medium">Долговечность и надежность</p>
        </div>
        <div class="border p-8">
          <div class="mb-16 md:mb-32">
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
  <section class="bg-[#efefef] py-[60px] md:py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-3xl md:text-7xl uppercase">Отзывы</p>
        </div>
        <div class="hidden md:block">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
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
  <section class="py-[60px] md:py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-3xl md:text-7xl uppercase">Наши работы</p>
        </div>
        <div class="hidden md:block">
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
  <section class="py-[60px] md:py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-3xl md:text-7xl uppercase">УСЛУГИ</p>
        </div>
        <div class="hidden md:block">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>
      </div>
     <Services/>
    </div>
  </section>
  <section class="py-[60px] md:py-[120px]">
    <div class="container">
      <div class="flex items-center justify-between mb-10">
        <div class="">
          <p class="font-bold text-3xl md:text-7xl uppercase">FAQ</p>
        </div>
        <div class="hidden md:block">
          <svg width="79" height="56" viewBox="0 0 79 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="28" r="22" fill="#0F4B29"/>
            <circle cx="51" cy="28" r="25" fill="#FF550A" stroke="white" stroke-width="6"/>
          </svg>
        </div>


      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          <img class="w-full h-full object-cover" src="~assets/faq.png" alt="">
        </div>
        <Accordion >
          <AccordionPanel :value="item.id" v-for="item in faq" :key="item.id">
            <AccordionHeader>{{item.question}}</AccordionHeader>
            <AccordionContent>
              <p class="m-0">
                {{item.answer}}
            </p>
            </AccordionContent>
          </AccordionPanel>

        </Accordion>
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