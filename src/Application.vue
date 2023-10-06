<script setup>

  import { onMounted } from 'vue'
  import { useProductStore } from '@/store/productStore'
  
  const store = useProductStore()

  onMounted(() => {
    /* composables */
    // useProductStore().getProducts();
    /* store */
    useProductStore().getProducts();
  });

</script>
<template>
  <header id="header" class="flex justify-center">
    <router-link to="/" class="mr-4 no-underline">Home</router-link> 
    <router-link to="/cart" class="no-underline">articles dans le panier : ({{ store.Cart.length }}) </router-link> 
  </header>
  <main class="my-8">
      <RouterView/>
  </main>
</template>