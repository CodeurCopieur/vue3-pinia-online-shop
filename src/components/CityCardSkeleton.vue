<script setup>
  /* imports */
  import AnimatedPlaceholder from '@/components/AnimatedPlaceholder.vue'
</script>

<template>
  <div class="flex flex-col  bg-sky-500/100 rounded-md shadow-md">

    <div class="flex flex-col flex-1 gap-2">
      <AnimatedPlaceholder class="max-w-[90%] h-[250px]" />
    </div>

    <div class="flex flex-col justify-end flex-1 gap-4 px-3 my-2">
      <AnimatedPlaceholder class="max-w-[80%] w-full" />
      <AnimatedPlaceholder class="max-w-[60%] w-full" />
    </div>
  </div>
</template>