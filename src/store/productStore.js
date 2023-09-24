import { defineStore } from "pinia";

export const  useProductStore = defineStore('productStore', {
  state: ()=> ({
    products: [],
    loading: true
  }),
  getters: {
    getProductById(state) {
      return (id) => {
        return state.products.find((product) => product.id === id);
      };
    },
  },
  actions: {

    async getProducts() {
      try {

        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        this.products = data.products
        setTimeout(()=> {
          this.loading = false
        }, 1200)

      } catch (error) {
        console.log(error);
      }
    }
  }
})