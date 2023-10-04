<script setup>

  /* imports */
  import ProductList from '@/components/ProductList.vue';

</script>

<template>
  
  <div class="max-w-7xl mx-auto">
    <div class="mt-16">
      <h3 class="text-gray-600 text-2xl font-medium">Catalogue</h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        <ProductList />
      </div>
    </div>
  </div>
</template>