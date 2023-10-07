<script setup>
    /* imports */
  import { useProductStore } from '@/store/productStore'
  import { useRoute, useRouter } from 'vue-router';
  import { Icon } from '@iconify/vue'

  const store = useProductStore()
  const router = useRouter()

  const removeFromCart = (product)=>{
    store.removeFromCart(product)
  };

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="mt-16">

      <div v-if="!store.Cart.length" class="flex items-center flex-col">
        <h4 class="text-gray-600 text-2xl font-medium">Le panier est vide ...</h4>
        <router-link to="/" class="bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white no-underline">Back to Home Page</router-link>
      </div>
      <div v-else>
        <div class="flex flex-col-reverse justify-between pb-16 sm:pb-20 lg:flex-row lg:pb-24">
          <div class="lg:w-3/5">
              <h3 class="text-gray-600 text-2xl font-medium">Panier</h3>
              <div>
                <div class="items">
                  <div 
                    v-for="product in store.Cart" 
                    :key="product.id"
                    class="item">
                    <div class="mb-0 flex-row items-center justify-between border-b border-grey-dark py-3 md:flex">
                      <!-- icones -->
                      <Icon 
                        @click="removeFromCart(product)"
                      icon="lucide:trash-2" class="mr-6 cursor-pointer text-2xl text-grey-darkest sm:text-3xl" />

                      <div class="flex w-1/2 flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left lg:w-3/5 xl:w-1/2">
                        <div class="relative mx-0 w-20 pr-0">
                          <!-- images -->
                          <div class="flex h-20 items-center justify-center rounded">
                            <div class="aspect-w-1 aspect-h-1 w-full">
                              <img :src="product.thumbnail" class="object-cover w-full" :alt="product.title">
                            </div>
                          </div>
                        </div>
                        <span class="mt-2 ml-4 font-hk text-base">{{ product.title }}</span>
                      </div>

                      <!-- quantité -->
                      <div class="w-full border-b-0 border-grey-dark pb-0 text-center sm:w-1/5 xl:w-1/4">
                        <div class="mx-auto mr-8 xl:mr-4">
                          <div class="flex justify-center">
                            <input type="number" id="quantity-form-desktop" class="form-quantity form-input w-16 rounded-r-none py-0 px-2 text-center" x-model="productQuantity" min="1">
                            <div class="flex flex-col">
                              <span class="flex-1 cursor-pointer rounded-tr border border-l-0 border-grey-darker bg-white px-1" @click="productQuantity++"><i class="bx bxs-up-arrow pointer-events-none text-xs text-primary"></i></span>
                              <span class="flex-1 cursor-pointer rounded-br border border-t-0 border-l-0 border-grey-darker bg-white px-1" @click="productQuantity> 1 ? productQuantity-- : productQuanity=1"><i class="bx bxs-down-arrow pointer-events-none text-xs text-primary"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- price -->
                      <div class="w-1/4 pr-10 pb-4 text-right lg:w-1/5 xl:w-1/4 xl:pr-10">
                        <span class="font-hk text-secondary">${{ product.price }}</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="mx-auto mt-16 sm:w-2/3 md:w-full lg:mx-0 lg:mt-0 lg:w-1/3">
            <div class="bg-grey-light py-8 px-8">
              <h4 class="font-hkbold pb-3 text-center text-2xl text-secondary sm:text-left">
                Total du panier
              </h4>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

</template>