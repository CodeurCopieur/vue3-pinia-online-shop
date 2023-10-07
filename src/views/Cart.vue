<script setup>
  import { useProductStore } from '@/store/productStore'
  import { useRoute, useRouter } from 'vue-router';

  const store = useProductStore()
  const router = useRouter();

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="mt-16">
      <h3 class="text-gray-600 text-2xl font-medium">Panier</h3>
    </div>
  </div>

</template>