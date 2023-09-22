import { computed, onMounted } from 'vue';
import { useProductStore } from '@/store/productStore'

export default () => {

  const productsStore = useProductStore();

  onMounted(() => {
    // fetch tasks
    productsStore.getProducts()
  })
  


  const products = computed(() => productsStore.products);

  return {
    products
  }
}