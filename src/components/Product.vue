<script setup>
  defineProps({
    product: {
      type: Object
    }
  });

  import { useProductStore } from '@/store/productStore'

  const store = useProductStore()

  const addToCart = (product) => {
    store.addToCart(product)
  };

  const isInBag = (product) => {
    return store.Cart.find( item => item.id == product.id)
   };


   const removeFromCart = (product)=>{
    store.removeFromCart(product)
  };
</script>

<template>
  <div class="flex items-end justify-end h-56 w-full bg-cover bg-center" :style="{backgroundImage: 'url('+ product.thumbnail +')'}">
    <button 
    v-if="!isInBag(product)"
      @click.stop="addToCart(product)"
      class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 border-none cursor-pointer pointer-events-unset">
        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    </button>
    <button 
      v-else
      @click.stop="removeFromCart(product)"
      class="p-2 rounded-full bg-red-600 text-white mx-5 -mb-4 hover:bg-red-500 focus:outline-none focus:bg-red-500 border-none cursor-pointer pointer-events-unset">
        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    </button>
  </div>
  <router-link 
    :to="{name: 'ProductView', params: { id : product.id}}" 
    class="decoration-none">
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase">{{ product.title }}</h3>
      <span class="text-gray-500 mt-2">${{ product.price }}</span>
    </div>
  </router-link>
  
</template>