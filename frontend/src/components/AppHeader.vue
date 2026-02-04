<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-dark/80 border-b border-[#283039]">
    <div class="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-3 cursor-pointer">
        <div class="size-12 text-primary">
          <img src="/logo.png" alt="Haifuxing Cloud Logo" class="size-12 object-contain" />
        </div>
        <h2 class="text-white text-xl font-bold tracking-tight">海福星云科技</h2>
      </router-link>
      <nav class="hidden lg:flex items-center gap-8 ml-auto pr-8">
        <router-link class="text-gray-300 hover:text-primary transition-colors text-sm font-medium" to="/">首页</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-sm font-medium" active-class="text-primary" to="/solutions">解决方案</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-sm font-medium" active-class="text-primary" to="/products">产品</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-sm font-medium" active-class="text-primary" to="/about">关于我们</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-sm font-medium" active-class="text-primary" to="/contact">联系我们</router-link>
      </nav>
      <div class="flex items-center gap-3">

        <button class="lg:hidden text-white p-2" @click="isMenuOpen = !isMenuOpen">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
    <!-- Mobile Menu (Basic implementation) -->
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="lg:hidden absolute top-20 left-0 right-0 bg-background-dark/95 border-b border-[#283039] p-4 flex flex-col gap-4 shadow-2xl backdrop-blur-xl h-[calc(100vh-80px)] overflow-y-auto">
        <router-link class="text-gray-300 hover:text-primary transition-colors text-lg font-medium py-3 border-b border-white/5" active-class="text-primary" to="/" @click="isMenuOpen = false">首页</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-lg font-medium py-3 border-b border-white/5" active-class="text-primary" to="/solutions" @click="isMenuOpen = false">解决方案</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-lg font-medium py-3 border-b border-white/5" active-class="text-primary" to="/products" @click="isMenuOpen = false">产品</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-lg font-medium py-3 border-b border-white/5" active-class="text-primary" to="/about" @click="isMenuOpen = false">关于我们</router-link>
        <router-link class="text-gray-300 hover:text-primary transition-colors text-lg font-medium py-3 border-b border-white/5" active-class="text-primary" to="/contact" @click="isMenuOpen = false">联系我们</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>
