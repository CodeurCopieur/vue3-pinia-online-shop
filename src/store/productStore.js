import { defineStore } from "pinia";

export const  useProductStore = defineStore('productStore', {
  state: ()=> ({
    Cart:[],
    products: [],
    loading: true
  }),
  actions: {

    async getProducts() {
      try {

        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        this.products = data.products
        console.log('Produits chargés avec succès :', this.products);

        setTimeout(()=> {
          this.loading = false
        }, 1200)

      } catch (error) {
        console.log(error);
      }
    },
    addToCart(product) {
      this.Cart.push(product)
    },

  }
})