<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden text-[#111418] dark:text-white selection:bg-primary selection:text-white">
    
    <!-- Hero Section -->
    <div class="relative w-full bg-background-light dark:bg-background-dark overflow-hidden min-h-[60vh] flex items-center">
      <div class="absolute inset-0 dark:bg-grid-pattern bg-grid-sm opacity-20 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/80 to-background-dark z-0 pointer-events-none"></div>
      <div class="absolute inset-0 z-0">
        <img alt="Background Nebula" class="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="/images/localized/about_hero_bg.jpg"/>
      </div>
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div class="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-32">
        <div class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 animate-fade-in-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span class="text-primary text-xs font-bold tracking-wider uppercase">Future of AI in Hainan</span>
        </div>
        <h1 class="text-[#111418] dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] mb-8 drop-shadow-2xl text-glow max-w-4xl">
          探索智能边界<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38bdf8] to-[#7dd3fc]">赋能云端未来</span>
        </h1>
        <p class="text-[#637588] dark:text-[#9dabb9] text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          扎根海南自贸港，以顶尖人工智能技术连接世界。我们致力于构建下一代智能云生态，驱动全球产业数字化转型新篇章。
        </p>
      </div>
    </div>

    <!-- Company Intro -->
    <div class="w-full py-20 bg-background-light dark:bg-[#0d1218] relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative rounded-2xl overflow-hidden glass-card dark:bg-[#1c2127] aspect-[4/3] flex items-center justify-center">
              <img alt="Team meeting" class="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700" src="/images/localized/about_team_meeting.jpg"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-8 left-8 right-8">
                <div class="text-3xl font-bold text-white mb-2">Since 2021</div>
                <div class="text-gray-300">深耕 AI 领域，服务全球 500+ 企业客户</div>
              </div>
            </div>
          </div>
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-[#111418] dark:text-white mb-6 flex items-center gap-3">
                <span class="w-1.5 h-8 bg-primary rounded-full"></span>
                企业使命
              </h2>
              <p class="text-[#637588] dark:text-[#9dabb9] text-lg leading-relaxed">
                海南海福星云科技（Hainan Haifuxing Cloud Technology）是新一代人工智能基础设施提供商。作为自贸港数字经济的先行者，我们依托得天独厚的政策优势与数据环境，汇聚全球科研智慧。
              </p>
              <p class="text-[#637588] dark:text-[#9dabb9] text-lg leading-relaxed mt-4">
                我们的核心愿景是构建"立足海南、服务全球"的 AI 算力与算法网络，通过安全可控的云端技术，消除数字鸿沟，让智能技术成为推动社会进步的普惠力量。
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div class="p-4 rounded-xl bg-white dark:bg-[#1c2127]/50 border border-gray-100 dark:border-gray-800 hover:border-primary/40 transition-colors">
                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <span class="material-symbols-outlined text-blue-500">lightbulb</span>
                </div>
                <h3 class="font-bold text-[#111418] dark:text-white mb-1">创新驱动</h3>
                <p class="text-xs text-[#637588] dark:text-[#9dabb9]">探索技术无人区</p>
              </div>
              <div class="p-4 rounded-xl bg-white dark:bg-[#1c2127]/50 border border-gray-100 dark:border-gray-800 hover:border-primary/40 transition-colors">
                <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
                  <span class="material-symbols-outlined text-green-500">verified_user</span>
                </div>
                <h3 class="font-bold text-[#111418] dark:text-white mb-1">诚信为本</h3>
                <p class="text-xs text-[#637588] dark:text-[#9dabb9]">数据向善，技术可信</p>
              </div>
              <div class="p-4 rounded-xl bg-white dark:bg-[#1c2127]/50 border border-gray-100 dark:border-gray-800 hover:border-primary/40 transition-colors">
                <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                  <span class="material-symbols-outlined text-purple-500">bolt</span>
                </div>
                <h3 class="font-bold text-[#111418] dark:text-white mb-1">赋能生态</h3>
                <p class="text-xs text-[#637588] dark:text-[#9dabb9]">共建智能产业未来</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Strategic Advantages -->
    <div class="w-full py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5 pointer-events-none">
        <svg class="w-full h-full fill-current text-white" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.7,-72.2C56.4,-65.9,69.4,-57.8,78.6,-46.8C87.8,-35.8,93.2,-21.9,91.8,-8.5C90.4,4.9,82.2,17.8,72.9,28.8C63.6,39.8,53.2,48.9,42.2,56.7C31.2,64.5,19.6,71,7.2,72.8C-5.2,74.6,-18.4,71.7,-30.9,65.6C-43.4,59.5,-55.2,50.2,-64.3,38.6C-73.4,27,-79.8,13.1,-80.1,-0.9C-80.4,-14.9,-74.6,-29,-64.8,-40.1C-55,-51.2,-41.2,-59.3,-27.6,-65.7C-14,-72.1,-0.6,-76.8,12.5,-75.8C25.6,-74.8,38.7,-68.1,42.7,-72.2Z" transform="translate(100 100)"></path>
        </svg>
      </div>
      <div class="max-w-[1440px] mx-auto px-4 sm:px-10 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-black text-[#111418] dark:text-white mb-4">立足海南，辐射全球</h2>
          <p class="text-[#637588] dark:text-[#9dabb9] max-w-2xl mx-auto">
            充分利用海南自由贸易港得天独厚的政策红利，打造具有全球竞争力的 AI 创新高地。
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group relative p-8 rounded-2xl bg-[#f6f7f8] dark:bg-[#151c24] border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            <div class="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">cloud_sync</span>
            </div>
            <h3 class="text-xl font-bold text-[#111418] dark:text-white mb-3">数据安全有序流动</h3>
            <p class="text-[#637588] dark:text-[#9dabb9] text-sm leading-relaxed">
              依托海南自贸港数据跨境传输安全管理试点，我们构建了符合国际标准的数据交互枢纽，助力企业实现全球数据的高效流通与合规使用。
            </p>
          </div>
          <div class="group relative p-8 rounded-2xl bg-[#f6f7f8] dark:bg-[#151c24] border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            <div class="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">percent</span>
            </div>
            <h3 class="text-xl font-bold text-[#111418] dark:text-white mb-3">税收优惠政策</h3>
            <p class="text-[#637588] dark:text-[#9dabb9] text-sm leading-relaxed">
              享受"双十五"所得税优惠政策，大幅降低企业运营成本，吸引全球顶尖科技人才加盟，将更多资源投入到核心技术研发中。
            </p>
          </div>
          <div class="group relative p-8 rounded-2xl bg-[#f6f7f8] dark:bg-[#151c24] border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">public</span>
            </div>
            <h3 class="text-xl font-bold text-[#111418] dark:text-white mb-3">自贸港战略定位</h3>
            <p class="text-[#637588] dark:text-[#9dabb9] text-sm leading-relaxed">
              立足国内国际双循环的交汇点，我们不仅服务中国广阔市场，更利用地缘优势辐射东南亚，成为连接中国AI技术与世界的桥头堡。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- History Timeline -->
    <div class="w-full py-20 bg-background-light dark:bg-[#0d1218] border-y border-[#e5e7eb] dark:border-[#283039]">
      <div class="max-w-[1000px] mx-auto px-4 sm:px-10">
        <h2 class="text-3xl font-black text-[#111418] dark:text-white text-center mb-16">发展历程</h2>
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
          <div class="space-y-12">
            <div class="relative flex items-center justify-between group">
              <div class="w-[45%]"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-10 group-hover:scale-125 transition-transform"></div>
              <div class="w-[45%] pl-8">
                <span class="text-primary font-bold text-sm block mb-1">2022年 12月</span>
                <h3 class="text-xl font-bold text-white mb-2">公司成立</h3>
                <p class="text-sm text-gray-400">海南海福星云科技正式注册成立，入驻海南师范大学国家大学科技园。</p>
              </div>
            </div>
            <div class="relative flex items-center justify-between group flex-row-reverse">
              <div class="w-[45%]"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-10 group-hover:scale-125 transition-transform"></div>
              <div class="w-[45%] pr-8 text-right">
                <span class="text-primary font-bold text-sm block mb-1">2023年 12月</span>
                <h3 class="text-xl font-bold text-white mb-2">首款AI引擎发布</h3>
                <p class="text-sm text-gray-400">自主研发的“星云”AIGC创作平台，获得首批种子用户。</p>
              </div>
            </div>
            <div class="relative flex items-center justify-between group">
              <div class="w-[45%]"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-10 group-hover:scale-125 transition-transform"></div>
              <div class="w-[45%] pl-8">
                <span class="text-primary font-bold text-sm block mb-1">2024年 12月</span>
                <h3 class="text-xl font-bold text-white mb-2">高新技术企业认证</h3>
                <p class="text-sm text-gray-400">荣获国家高新技术企业认证，AIGC平台用户突破百万。</p>
              </div>
            </div>
            <div class="relative flex items-center justify-between group flex-row-reverse">
              <div class="w-[45%]"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-10 group-hover:scale-125 transition-transform"></div>
              <div class="w-[45%] pr-8 text-right">
                <span class="text-primary font-bold text-sm block mb-1">2024年 至今</span>
                <h3 class="text-xl font-bold text-white mb-2">全球化布局</h3>
                <p class="text-sm text-gray-400">致力于打造亚太地区领先的AI云服务平台。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- CTA Section -->
    <div class="w-full relative overflow-hidden bg-[#111418] py-24">
      <div class="absolute inset-0 bg-nebula-gradient opacity-50"></div>
      <div class="absolute inset-0 bg-[url('/images/localized/about_cta_bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div class="max-w-[800px] mx-auto text-center relative z-10 px-4">
        <h2 class="text-3xl sm:text-5xl font-black text-white mb-8">准备好加入未来了吗？</h2>
        <p class="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
          无论您是寻求技术合作的伙伴，还是渴望施展才华的精英，海复兴云科技都期待与您携手共创辉煌。
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(19,127,236,0.5)] hover:-translate-y-1">
            <span class="material-symbols-outlined">group_add</span>
            加入我们
          </button>
          <button class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold rounded-lg transition-all border border-white/20 hover:-translate-y-1">
            <span class="material-symbols-outlined">mail</span>
            联系商务合作
          </button>
        </div>
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
.text-glow {
    text-shadow: 0 0 20px rgba(19, 127, 236, 0.5);
}
</style>
