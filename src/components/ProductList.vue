<script setup>
  /* imports */

  import { storeToRefs } from 'pinia'
  import { useProductStore } from '@/store/productStore'
  import CityCardSkeleton from '@/components/CityCardSkeleton.vue'
  import Product from '@/components/Product.vue'

  /* store */
  const productStore  = useProductStore();

  const { loading, products } = storeToRefs(productStore);
  
</script>

<template >

  <!-- loading -->

  <template v-if="loading">
    <CityCardSkeleton
      class=" h-[350px] rounded-md shadow-md overflow-hidden"
      v-for="product in products.length" :key="product" />
  </template>

  <template v-else>
    <div 
      class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" 
      v-for="product in products" 
      :key="product.id">
      <Product :product="product"/>
    </div>
  </template>
</template>