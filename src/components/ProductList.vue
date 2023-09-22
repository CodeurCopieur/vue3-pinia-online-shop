<script setup>
    /* imports */
    import { storeToRefs } from 'pinia'
    import { useProductStore } from '@/store/productStore'
    import useProducts from '@/composables/useProducts';
    /* imports */
  import CityCardSkeleton from '@/components/CityCardSkeleton.vue'
    

    const { products } = useProducts();
    const productStore  = useProductStore();

    const { loading } = storeToRefs(productStore);
</script>

<template>

  <!-- loading -->

  <template v-if="loading">
    <!-- <div 
    
    class="loading border border-indigo-500 max-w-2xl bg-indigo-400 p-1.5 text-center my-8 mx-auto text-white">Loading tâches...
    </div> -->
    <CityCardSkeleton
      class=" h-[350px] rounded-md shadow-md overflow-hidden"
      v-for="(product, i) in products" :key="i" />
  </template>

  <template v-else>
    <div 
      class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" 
      v-for="product in products" 
      :key="product.id">
      <div class="flex items-end justify-end h-56 w-full bg-cover bg-center" :style="{backgroundImage: 'url('+ product.thumbnail +')'}">
        <button 
          class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 border-none cursor-pointer">
            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </button>
      </div>
      <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">{{ product.title }}</h3>
          <span class="text-gray-500 mt-2">${{ product.price }}</span>
      </div>
    </div>
  </template>
</template>