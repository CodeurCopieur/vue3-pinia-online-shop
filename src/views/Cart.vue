<script setup>
  import { useProductStore } from '@/store/productStore'
  import { useRoute, useRouter } from 'vue-router';

  const store = useProductStore()
  const router = useRouter();

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="mt-16">

      <div v-if="!store.Cart.length" class="flex items-center flex-col">
        <h4 class="text-gray-600 text-2xl font-medium">Le panier est vide ...</h4>
        <router-link to="/" class="bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white no-underline">Back to Home Page</router-link>
      </div>
      <div v-else>
        
      <h3 class="text-gray-600 text-2xl font-medium">Panier</h3>
      </div>
    </div>
  </div>

</template>