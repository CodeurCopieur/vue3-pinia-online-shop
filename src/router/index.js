import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/product/:id', name: 'ProductView', component: ProductDetail},
  {path: '/:NotFound(.*)*',name: 'NotFound',component: NotFound}
]

const router = createRouter({
  routes,
  history: createWebHistory()
  
})

export default router