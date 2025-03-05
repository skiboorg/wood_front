<!--subcat index-->
<script setup lang="ts">
const items = ref([]);

const {$api} = useNuxtApp()
const route = useRoute()

const category = ref({})
const products = ref([])
const selected_subcat = ref(null)
const {category_slug,subcategory_slug} = route.params

onMounted(async () => {
  if (subcategory_slug) {
    selected_subcat.value = subcategory_slug
  } else {
    selected_subcat.value = category.value?.sub_categories[0]?.slug
  }

  category.value = await $api(`/api/shop/category/${category_slug}`)
  items.value = [
    { label: 'Главная', route: '/' },
    { label: 'Каталог', route: '/catalog' },
    { label: category.value.name, route: '/catalog/category' },
    { label: category.value.sub_categories.find(x=>x.slug===selected_subcat.value).name },

  ]
  await fetchSubCategory()
  console.log(category.value)
})

const fetchSubCategory = async () => {
  const resp  = await $api(`/api/shop/subcategory/${selected_subcat.value}`)
  products.value = resp.products
}

const subcatChange = async (subcat_slug) => {
  console.log(subcat_slug)
  selected_subcat.value = subcat_slug
  const newPath = `/catalog/${category_slug}/${subcat_slug}`;
  await navigateTo(newPath, { replace: true });

  // await fetchSubCategory()

}





</script>



<template>
  <div class="container">
  <Breadcrumbs :items="items" />
    <SubcategoriesBtns :subcategories="category.sub_categories" :selected="selected_subcat" @change="subcatChange"/>
    <pre>
      {{category}}
    </pre>
    <ItemsGrid :products="products"/>
  </div>
</template>




<style scoped>

</style>