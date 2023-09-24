import { computed, onMounted } from 'vue';
import { useProductStore } from '@/store/productStore'

export default () => {

  const productsStore = useProductStore();

  onMounted(() => {
    // Récupérer les produits lorsque le composant est monté
    productsStore.getProducts()
  })

  const products = computed(() => productsStore.products);
  // Usage of getProductById
  const getProductById = (id) => {
    return productsStore.getProductById(id);
  };

  return {
    products,
    getProductById
  }
}