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

  const addToCart = () => {
    store.addToCart(selectedProduct.value)
    router.push({name: 'CartView'})
  };

  const isInBag = () => {
    store.isInBag(selectedProduct.value)
  }

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
            {{ selectedProduct.title }}
          </h2>
        </div>
        </div>
        <div class="flex items-center pt-3">
          <span class="text-2xl text-secondary">${{ selectedProduct.price }}</span>

        </div>
        <div class="flex items-center pt-3 pb-8">

        </div>
      </div>
      <div class="flex pb-5">
        <p class="m-0">Availability:</p>
        <p class="font-bold pl-3 text-emerald-600 m-0" v-if="selectedProduct.stock > 1">
          En stock
        </p>
        <p v-else class="font-bold pl-3 text-red-600 m-0">
          Pas de stock
        </p>
      </div>
      <p class="pb-5 m-0">{{  selectedProduct.description }}</p>
      <div class="flex items-center justify-between pb-8">
        <div class="w-1/3 sm:w-1/5">
          <p class="m-0">Quantity</p>
        </div>
        <div class="flex w-2/3 sm:w-5/6" x-data="{ productQuantity: 1 }">
          <label for="quantity-form" class="relative block h-0 w-0 overflow-hidden">Quantity form</label>
          <input type="number" id="quantity-form" class="form-quantity form-input w-16 rounded-r-none py-0 px-2 text-center" x-model="productQuantity" min="1" value="1">
          <div class="flex flex-col">
            <span class="flex-1 cursor-pointer rounded-tr border border-l-0 border-grey-darker bg-white px-1" @click="productQuantity++">
              <i class="bx bxs-up-arrow pointer-events-none text-xs text-primary"></i>
            </span>
            <span class="flex-1 cursor-pointer rounded-br border border-t-0 border-l-0 border-grey-darker bg-white px-1" @click="productQuantity> 1 ? productQuantity-- : productQuantity=1">
              <i class="bx bxs-down-arrow pointer-events-none text-xs text-primary"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="group flex pb-8">
        <button 
          v-if="!isInBag(selectedProduct.value)"
          @click="addToCart"
          class="py-4 px-8 mr-4 mr-4 text-emerald-600 bg-white no-underline rounded hover:bg-emerald-600 hover:text-white border-solid border-2 border-emerald-600 cursor-pointer">Ajouter au panier</button>
        <button v-else class="py-4 px-8 mr-4 bg-red-600 border-solid border-2 border-red-600 text-white no-underline rounded cursor-pointer">supprimer du panier</button>
        <button 
          @click="router.push({name: 'Home'})"
          class="py-4 px-8 bg-emerald-600 border-solid border-2 border-emerald-600 text-white no-underline rounded cursor-pointer">Retour au catalogue</button>
      </div>
      <p class="text-secondary">
        <span class="pr-2">Categories:</span> <span class="font-bold">{{ selectedProduct.category }}</span>
      </p>
    </div>
  </div>
</template>