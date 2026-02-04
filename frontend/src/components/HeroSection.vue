<template>
  <section class="relative pt-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/localized/hero_bg.jpg');">
    </div>
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark"></div>
    
    <div class="relative z-10 max-w-[1280px] mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span class="text-primary text-xs font-medium uppercase tracking-wider">下一代 AI 平台</span>
      </div>
      <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight drop-shadow-2xl">
        星云汇聚<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">智启未来</span>
      </h1>
      <h2 class="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
        赋能全球企业，提供下一代 AIGC 能力和智能云基础设施。<br/>与海福星云科技共建未来。
      </h2>
      <div class="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
        <button class="flex items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold tracking-wide shadow-glow hover:shadow-glow-hover transition-all duration-300 w-full sm:w-auto">
          探索解决方案
        </button>
        <button class="flex items-center justify-center gap-2 rounded-xl h-12 px-8 bg-surface-highlight hover:bg-surface-dark border border-gray-700 text-white text-base font-bold transition-all w-full sm:w-auto group">
          <span>查看行业</span>
          <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-dark to-transparent z-10"></div>
  </section>
</template>
