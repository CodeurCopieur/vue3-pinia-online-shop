<script setup>
</script>

<template>
          <router-view v-slot="{ Component }">
            <component :is="Component"></component>
          </router-view>

          <!-- <h1>home</h1> -->
</template>