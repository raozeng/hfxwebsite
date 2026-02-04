<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden text-[#111418] dark:text-white selection:bg-primary selection:text-white pt-20">
    
    <!-- Hero Section -->
    <div class="relative w-full bg-background-light dark:bg-background-dark overflow-hidden">
      <div class="absolute inset-0 dark:bg-grid-pattern bg-grid-sm opacity-20 pointer-events-none"></div>
      <div class="absolute inset-0 dark:bg-nebula-gradient pointer-events-none"></div>
      <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div class="absolute bottom-0 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="relative z-10 pt-20 pb-16 px-4 sm:px-10 max-w-[1440px] mx-auto text-center">
        <span class="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider mb-6">
          PROPRIETARY TECHNOLOGY
        </span>
        <h1 class="text-[#111418] dark:text-white text-5xl sm:text-6xl font-black leading-tight tracking-[-0.033em] mb-6 drop-shadow-xl">
          产品中心
        </h1>
        <p class="text-[#637588] dark:text-[#9dabb9] text-xl font-normal leading-relaxed max-w-2xl mx-auto">
          打造企业级AI效能引擎，从内容生成到智能决策，全栈式AI产品矩阵助您领跑智能时代。
        </p>
      </div>
    </div>

    <!-- Sticky Filter Bar -->
    <div class="sticky top-[80px] z-40 bg-background-light/90 dark:bg-[#101922]/90 backdrop-blur-md border-b border-[#e5e7eb] dark:border-[#283039]">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-10 py-4 overflow-x-auto scrollbar-hide">
        <div class="flex items-center justify-center min-w-max gap-2">
          <button class="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105">
            全部产品
          </button>
          <button class="px-5 py-2 rounded-full text-[#637588] dark:text-[#9dabb9] hover:bg-[#e5e7eb] dark:hover:bg-[#1c2127] hover:text-[#111418] dark:hover:text-white transition-all text-sm font-medium">
            AIGC平台
          </button>
          <button class="px-5 py-2 rounded-full text-[#637588] dark:text-[#9dabb9] hover:bg-[#e5e7eb] dark:hover:bg-[#1c2127] hover:text-[#111418] dark:hover:text-white transition-all text-sm font-medium">
            企业智能
          </button>
          <button class="px-5 py-2 rounded-full text-[#637588] dark:text-[#9dabb9] hover:bg-[#e5e7eb] dark:hover:bg-[#1c2127] hover:text-[#111418] dark:hover:text-white transition-all text-sm font-medium">
            开发者工具
          </button>
        </div>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-10 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Card 1: Nebula AIGC -->
        <div class="group glass-card bg-white dark:bg-[#1c2127]/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,127,236,0.15)] flex flex-col h-full">
          <div class="h-64 w-full bg-[#000] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col">
              <div class="w-full h-8 bg-gray-800 rounded-t-lg flex items-center px-3 gap-2 border-b border-gray-700">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="flex-1 bg-gray-800/50 p-4 grid grid-cols-3 gap-4">
                <div class="col-span-2 space-y-3">
                  <div class="h-2 w-3/4 bg-gray-600 rounded animate-pulse"></div>
                  <div class="h-2 w-full bg-gray-600 rounded animate-pulse delay-75"></div>
                  <div class="h-2 w-5/6 bg-gray-600 rounded animate-pulse delay-150"></div>
                  <div class="mt-4 p-3 bg-primary/10 rounded border border-primary/20">
                    <div class="text-primary text-xs">AI 生成中...</div>
                  </div>
                </div>
                <div class="col-span-1 bg-gray-700 rounded-lg border border-gray-600 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">AIGC旗舰</div>
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-[#111418] dark:text-white">星云AIGC创作平台</h3>
              <span class="material-symbols-outlined text-3xl text-primary">auto_awesome</span>
            </div>
            <p class="text-[#637588] dark:text-[#9dabb9] mb-6 flex-grow">
              下一代智能内容生产工作站。集成多模态大模型，让创意落地更简单。支持营销文案自动生成、商业视觉设计及视频后期增强。
            </p>
            <div class="space-y-6 mt-auto">
              <div class="flex gap-3 flex-wrap">
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">edit_note</span> 文本生成
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">image</span> 图像创作
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">movie_filter</span> 视频增强
                </span>
              </div>
              <div class="flex gap-4 pt-4 border-t border-[#e5e7eb] dark:border-[#283039]">
                <button class="flex-1 h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-colors">
                  免费试用
                </button>
                <button class="flex-1 h-10 rounded-lg border border-[#e5e7eb] dark:border-[#283039] hover:bg-[#f0f4f8] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm transition-colors">
                  了解详情
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Knowledge Base -->
        <div class="group glass-card bg-white dark:bg-[#1c2127]/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,127,236,0.15)] flex flex-col h-full">
          <div class="h-64 w-full bg-[#000] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-bl from-indigo-900 to-slate-900 p-6 flex items-center justify-center">
              <div class="relative w-full h-full border border-dashed border-indigo-500/30 rounded-lg p-4 flex items-center justify-center">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
                <div class="grid grid-cols-2 gap-8 relative z-10">
                  <div class="flex flex-col items-center gap-2">
                    <div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/50">
                      <span class="material-symbols-outlined text-white">database</span>
                    </div>
                    <div class="h-1 w-16 bg-indigo-500/50 rounded"></div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="w-12 h-12 bg-white/10 backdrop-blur rounded-lg border border-white/20 flex items-center justify-center">
                      <span class="material-symbols-outlined text-white">search</span>
                    </div>
                    <div class="h-1 w-16 bg-white/20 rounded"></div>
                  </div>
                </div>
                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                  <line stroke="rgba(99, 102, 241, 0.5)" stroke-dasharray="4 4" stroke-width="2" x1="40%" x2="60%" y1="50%" y2="50%"></line>
                </svg>
              </div>
            </div>
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-[#111418] dark:text-white">企业智能知识库</h3>
              <span class="material-symbols-outlined text-3xl text-primary">psychology</span>
            </div>
            <p class="text-[#637588] dark:text-[#9dabb9] mb-6 flex-grow">
              基于RAG技术的企业大脑。打破数据孤岛，支持PDF、Word等多种格式文档一键导入，构建专属知识图谱，实现精准问答。
            </p>
            <div class="space-y-6 mt-auto">
              <div class="flex gap-3 flex-wrap">
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">search</span> 语义搜索
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">summarize</span> 自动总结
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">folder_open</span> 多格式支持
                </span>
              </div>
              <div class="flex gap-4 pt-4 border-t border-[#e5e7eb] dark:border-[#283039]">
                <button class="flex-1 h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-colors">
                  免费试用
                </button>
                <button class="flex-1 h-10 rounded-lg border border-[#e5e7eb] dark:border-[#283039] hover:bg-[#f0f4f8] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm transition-colors">
                  了解详情
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Smart Customer Service -->
        <div class="group glass-card bg-white dark:bg-[#1c2127]/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,127,236,0.15)] flex flex-col h-full">
          <div class="h-64 w-full bg-[#000] relative overflow-hidden">
            <div class="absolute inset-0 bg-slate-900 p-6 flex flex-col justify-end">
              <div class="space-y-3 w-3/4 mx-auto">
                <div class="flex gap-2 items-end">
                  <div class="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <div class="bg-gray-800 p-3 rounded-2xl rounded-bl-none text-xs text-gray-400">
                    您好，请问产品定价是多少？
                  </div>
                </div>
                <div class="flex gap-2 items-end flex-row-reverse">
                  <div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <span class="material-symbols-outlined text-white text-[16px]">smart_toy</span>
                  </div>
                  <div class="bg-primary/20 p-3 rounded-2xl rounded-br-none text-xs text-white border border-primary/30">
                    我们提供多种套餐，基础版免费试用...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-[#111418] dark:text-white">灵犀AI智能客服</h3>
              <span class="material-symbols-outlined text-3xl text-primary">support_agent</span>
            </div>
            <p class="text-[#637588] dark:text-[#9dabb9] mb-6 flex-grow">
              全天候在线的金牌客服。基于深度学习的意图识别引擎，准确理解用户需求，支持多轮对话与情绪感知，大幅降低人工成本。
            </p>
            <div class="space-y-6 mt-auto">
              <div class="flex gap-3 flex-wrap">
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">schedule</span> 24/7在线
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">translate</span> 多语言支持
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">psychology_alt</span> 意图识别
                </span>
              </div>
              <div class="flex gap-4 pt-4 border-t border-[#e5e7eb] dark:border-[#283039]">
                <button class="flex-1 h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-colors">
                  免费试用
                </button>
                <button class="flex-1 h-10 rounded-lg border border-[#e5e7eb] dark:border-[#283039] hover:bg-[#f0f4f8] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm transition-colors">
                  了解详情
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4: Visual Engine -->
        <div class="group glass-card bg-white dark:bg-[#1c2127]/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,127,236,0.15)] flex flex-col h-full">
          <div class="h-64 w-full bg-[#000] relative overflow-hidden">
            <div class="absolute inset-0 bg-gray-900 overflow-hidden">
              <div class="absolute inset-0 bg-[url('/images/localized/products_bg.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div class="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-green-500 rounded bg-green-500/10 flex items-start justify-start p-1">
                <span class="bg-green-500 text-black text-[10px] font-bold px-1">Person 98%</span>
              </div>
              <div class="absolute bottom-1/4 right-1/4 w-16 h-12 border-2 border-primary rounded bg-primary/10 flex items-start justify-start p-1">
                <span class="bg-primary text-white text-[10px] font-bold px-1">Laptop</span>
              </div>
              <div class="absolute top-0 w-full h-1 bg-primary/80 shadow-[0_0_15px_rgba(19,127,236,1)] animate-[scan_3s_linear_infinite]"></div>
            </div>
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-[#111418] dark:text-white">视觉感知引擎</h3>
              <span class="material-symbols-outlined text-3xl text-primary">visibility</span>
            </div>
            <p class="text-[#637588] dark:text-[#9dabb9] mb-6 flex-grow">
              让机器拥有"看"的能力。提供高精度的OCR文字识别、通用目标检测及图像分割服务，广泛应用于安防、工业质检等场景。
            </p>
            <div class="space-y-6 mt-auto">
              <div class="flex gap-3 flex-wrap">
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">text_snippet</span> 文字识别
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">center_focus_strong</span> 目标检测
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f4f8] dark:bg-[#283039] rounded text-xs font-medium dark:text-white">
                  <span class="material-symbols-outlined text-sm text-primary">content_cut</span> 图像分割
                </span>
              </div>
              <div class="flex gap-4 pt-4 border-t border-[#e5e7eb] dark:border-[#283039]">
                <button class="flex-1 h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-colors">
                  免费试用
                </button>
                <button class="flex-1 h-10 rounded-lg border border-[#e5e7eb] dark:border-[#283039] hover:bg-[#f0f4f8] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm transition-colors">
                  了解详情
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Metrics Section -->
    <div class="w-full bg-[#f0f4f8] dark:bg-[#0d1218] py-20 border-t border-[#e5e7eb] dark:border-[#283039]">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-10">
        <h2 class="text-3xl font-black text-[#111418] dark:text-white text-center mb-12">技术参数指标</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-[#1c2127] p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/30 transition-all text-center group">
            <div class="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl text-blue-500">speed</span>
            </div>
            <h3 class="text-xl font-bold text-[#111418] dark:text-white mb-2">API 延迟 (Latency)</h3>
            <p class="text-4xl font-black text-primary mb-2">&lt; 100ms</p>
            <p class="text-sm text-[#637588] dark:text-[#9dabb9]">全链路优化，毫秒级响应速度，确保流畅的用户体验。</p>
          </div>
          <div class="bg-white dark:bg-[#1c2127] p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/30 transition-all text-center group">
            <div class="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl text-purple-500">model_training</span>
            </div>
            <h3 class="text-xl font-bold text-[#111418] dark:text-white mb-2">模型精度 (Precision)</h3>
            <p class="text-4xl font-black text-purple-500 mb-2">99.8%</p>
            <p class="text-sm text-[#637588] dark:text-[#9dabb9]">行业领先的SOTA模型架构，特定场景识别率接近满分。</p>
          </div>
          <div class="bg-white dark:bg-[#1c2127] p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/30 transition-all text-center group">
            <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl text-green-500">security</span>
            </div>
            <h3 class="text-xl font-bold text-[#111418] dark:text-white mb-2">安全合规 (Security)</h3>
            <p class="text-4xl font-black text-green-500 mb-2">ISO 27001</p>
            <p class="text-sm text-[#637588] dark:text-[#9dabb9]">企业级数据加密传输与存储，完全符合GDPR及本地法规。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="w-full relative overflow-hidden bg-[#111418] py-20">
      <div class="absolute inset-0 bg-nebula-gradient opacity-50"></div>
      <div class="absolute inset-0 bg-[url('/images/localized/products_cta_bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div class="max-w-[800px] mx-auto text-center relative z-10 px-4">
        <h2 class="text-3xl sm:text-4xl font-black text-white mb-6">找不到合适的产品?</h2>
        <p class="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          我们的标准化产品可能无法满足所有特殊需求。联系我们的解决方案专家，为您量身定制专属AI应用。
        </p>
        <button class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-xl shadow-primary/30 hover:-translate-y-1">
          <span class="material-symbols-outlined">code</span>
          联系我们定制开发
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.glass-card {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
@keyframes scan {
    0% { top: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
}
</style>
