import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductDetail from '@/views/ProductDetail.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/product/:id', name: 'ProductView', component: ProductDetail},
]

const router = createRouter({
  routes,
  history: createWebHistory()
  
})

export default router