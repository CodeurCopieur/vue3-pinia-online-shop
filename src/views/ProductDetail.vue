<script setup>
  
  /* import */
  import { ref, onMounted, computed  } from 'vue'
  import { useRoute, useRouter } from 'vue-router';

  import { useProductStore } from '@/store/productStore'

  const route = useRoute();// Récupérez la route après l'import de useProducts
  const { params } = route;

  const router = useRouter()


  const productId = ref(parseInt(params.id)); // Récupérez l'ID du produit à partir de params.id

  const store = useProductStore()

  const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
  });

</script>

<template>
  <div class="flex flex-col justify-between pt-16 pb-24 lg:flex-row">
    <div class="flex flex-col-reverse justify-between px-5 lg:w-1/2">
      <!-- les images -->
      <div class="flex flex-row flex-wrap lg:flex-nowrap">
        <div class="relative mr-3 w-28 sm:w-48 sm:pr-0 lg:w-1/2" 
          v-for="img in selectedProduct.images"
          :key="img">
          <div class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink">
            <img class="cursor-pointer object-contain w-full" :src="img" alt="">
          </div>
        </div>
      </div>
      <!-- image principale -->
      <div class="relative w-full pb-5">
        <div class="relative flex items-center justify-center rounded border border-grey bg-v-pink">
          <img :src="selectedProduct.thumbnail" class="object-cover w-full" alt="">
        </div>
      </div>
    </div>
    <div class="px-5 pt-8 lg:w-1/2 lg:pt-0">
      <div class="mb-8 border-b border-grey-dark">
        <div class="flex items-center">
          <div class="flex items-center">
          <h2 class="font-butler text-3xl md:text-4xl lg:text-4.5xl">
            {{ title }}
          </h2>
          <p v-if="selectedProduct.discountPercentage" class="ml-8 rounded-full px-5 py-2 font-hk text-sm font-bold uppercase leading-none">
            {{ selectedProduct.discountPercentage }}% on
          </p>
        </div>
        </div>
        <div class="flex items-center pt-3">
          <span class="font-hk text-2xl text-secondary">${{ price }}</span>

        </div>
        <div class="flex items-center pt-3 pb-8">

        </div>
      </div>
    </div>
  </div>
</template>