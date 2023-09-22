import { defineStore } from "pinia";

export const  useProductStore = defineStore('productStore', {
  state: ()=> ({
    products: [],
    loading: false
  }),
  getters: {

  },
  actions: {

    async getProducts() {

      try {

        this.loading = true

        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        this.products = data.products
        this.loading = false

      } catch (error) {
        console.log(error);
      }
    }
  }
})