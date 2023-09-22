import { computed } from 'vue';
import { useProductStore } from '@/store/productStore'

export default () => {

  const productsStore = useProductStore();
  // fetch tasks
  productsStore.getProducts()


  const products = computed(() => productsStore.products);

  return {
    products
  }
}