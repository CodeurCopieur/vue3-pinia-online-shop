<script setup>

  import { onMounted } from 'vue'
  import { useProductStore } from '@/store/productStore'
  // import useProducts from '@/composables/useProducts';

  onMounted(() => {
    /* composables */
    // useProductStore().getProducts();
    /* store */
    useProductStore().getProducts();
  });

</script>
<template>
  <main class="my-8">
      <RouterView/>
  </main>
</template>