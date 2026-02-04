<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
