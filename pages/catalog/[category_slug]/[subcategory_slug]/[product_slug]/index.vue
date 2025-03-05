<!--product index-->
<script lang="ts" setup>
const items = ref([]);
const {$api} = useNuxtApp()
const route = useRoute()
const product = ref({})
const uniqueThinNames = ref([])
const widths = ref([])
const selected_thin = ref({})
const selected_width = ref({})

const {product_slug} = route.params
onMounted(async () => {
      product.value = await $api(`/api/shop/product/${product_slug}`)
      uniqueThinNames.value = product.value.units.reduce((acc, unit) => {
        if (!acc.some(item => item.label === unit.thin.name)) {
          // Добавляем новый объект
          acc.push({
            label: unit.thin.name,
            id: unit.thin.id,
            selected: false
          });
        }
        return acc;
      }, []);
      thinChange(uniqueThinNames.value[0])
  items.value = [
    { label: 'Главная', route: '/' },
    { label: 'Каталог', route: '/catalog' },
    { label: product.value.cat_name, route: `/catalog/${product.value.cat_slug}` },
    { label: product.value.subcat_name, route: `/catalog/${product.value.cat_slug}/${product.value.subcat_slug}` },
    { label: product.value.name }
  ]
    }

)


const value = ref(1)

const thinChange =  (thin) => {
  selected_thin.value.selected = false;
  selected_thin.value = thin;
  widths.value = product.value.units.filter(unit => unit.thin.id === selected_thin.value.id)
  selected_thin.value.selected = true;
  selected_width.value = widths.value[0]
}
</script>

<template>

    <div class="container">
     <Breadcrumbs :items="items"/>
      <h1 class="text-4xl font-medium mb-10 ">{{product.name}}</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Galleria :value="product.images" :numVisible="1"  :showThumbnails="false"
              :circular="true" :autoPlay="true" :transitionInterval="2000"
              :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" :indicatorsPosition="'bottom'">
      <template #item="slotProps">
        <img :src="slotProps.item.image"  style="width: 100%; display: block" />
      </template>
    </Galleria>
    
    <!-- Правая часть: Описание товара -->
    <div class="flex flex-col items-start justify-between">
      <div>
      <div class="grid grid-cols-2 mb-2"  v-for="item in product.features" :key="item.id">
        <p class="text-gray-500 border-b border-dashed">{{item.label}}</p>
        <p >{{item.value}}</p>
      </div>
        <div class="mt-4">
          <p class="font-semibold">Толщина</p>
          <div class="flex space-x-2 mt-1">

            <button class="px-4 py-2 border rounded-lg"
                    :class="item.selected ? 'border-primary text-primary' : ''"
                    v-for="item in uniqueThinNames"
                    @click="thinChange(item)"
                    :key="item.id">
              {{item.label}}
            </button>
          </div>
        </div>
      <div class="mt-4">
        <p class="font-semibold">Ширина</p>
        <div class="flex space-x-2 mt-1">
          <button class="px-4 py-2 border rounded-lg"
                  :class="selected_width.id === item.id ? 'border-primary text-primary' : ''"
                  v-for="item in widths"
                  :key=" item.id"
                  @click="selected_width=item">
            {{item.width.name}}
          </button>
        </div>
      </div>
      <p v-if="product.can_cut" class="text-orange-500 mt-2">✂ Нарежем доски по длине под ваши размеры!</p>
      </div>
      <div class="mt-6">
        <div class="flex items-end gap-4 mb-4">
          <p class="text-2xl font-bold">{{selected_width.price}} {{selected_width.price_description}}</p>
          <p v-if="selected_width.add_price" class="text-gray-500">{{selected_width.add_price}}</p>
        </div>

        <div class="flex items-end gap-4 ">
        <InputNumber v-model="value" inputId="horizontal-buttons"  showButtons buttonLayout="horizontal" suffix=" м2" :min="0.1" :step="0.1" mode="decimal" class="text-center" >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
          <Button severity="primary" icon="pi pi-chevron-right" rounded />
        </div>
      </div>
    </div>
  </div>

      <Tabs value="0">
        <TabList>
          <Tab value="0">Описание</Tab>
          <Tab value="1">Оплата и доставка</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div v-html="product.description"></div>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </div>

</template>



<style>

</style>