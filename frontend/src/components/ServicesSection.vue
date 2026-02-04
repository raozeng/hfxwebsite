<template>
  <section class="py-24 bg-background-dark">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div class="max-w-2xl">
          <h2 class="text-primary text-sm font-bold uppercase tracking-wider mb-2">我们的能力</h2>
          <h1 class="text-white text-4xl md:text-5xl font-bold leading-tight">核心智能服务</h1>
          <p class="text-gray-400 mt-4 text-lg">专为可扩展性、精确性和企业级安全性设计的全面 AI 能力。</p>
        </div>
        <button class="text-primary hover:text-white font-bold flex items-center gap-2 group transition-colors">
          查看全部服务
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="group relative flex flex-col p-6 rounded-2xl bg-surface-dark border border-[#3b4754] hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="h-12 w-12 rounded-lg bg-surface-highlight flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-3xl">auto_awesome</span>
          </div>
          <h3 class="text-white text-xl font-bold mb-2 z-10">AIGC 内容引擎</h3>
          <p class="text-gray-400 text-sm leading-relaxed z-10">规模化生成文本、图像和视频内容。自动化创意工作流程。</p>
        </div>
        <div class="group relative flex flex-col p-6 rounded-2xl bg-surface-dark border border-[#3b4754] hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="h-12 w-12 rounded-lg bg-surface-highlight flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-3xl">database</span>
          </div>
          <h3 class="text-white text-xl font-bold mb-2 z-10">企业知识库</h3>
          <p class="text-gray-400 text-sm leading-relaxed z-10">安全、私密的语义搜索和知识管理。安全地使用您的数据训练模型。</p>
        </div>
        <div class="group relative flex flex-col p-6 rounded-2xl bg-surface-dark border border-[#3b4754] hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="h-12 w-12 rounded-lg bg-surface-highlight flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-3xl">visibility</span>
          </div>
          <h3 class="text-white text-xl font-bold mb-2 z-10">计算机视觉 AI</h3>
          <p class="text-gray-400 text-sm leading-relaxed z-10">用于安防、质量控制和生物识别分析的高级图像识别。</p>
        </div>
        <div class="group relative flex flex-col p-6 rounded-2xl bg-surface-dark border border-[#3b4754] hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="h-12 w-12 rounded-lg bg-surface-highlight flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-3xl">memory</span>
          </div>
          <h3 class="text-white text-xl font-bold mb-2 z-10">智能系统</h3>
          <p class="text-gray-400 text-sm leading-relaxed z-10">由深度学习和神经网络驱动的自动决策后端。</p>
        </div>
      </div>
    </div>
  </section>
</template>
