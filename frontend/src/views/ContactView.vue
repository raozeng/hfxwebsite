<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden text-[#111418] dark:text-white selection:bg-primary selection:text-white pt-20">
    
    <!-- Hero Title Section -->
    <div class="flex flex-col gap-4 text-center py-10 lg:py-16 px-6 lg:px-8">
      <h1 class="text-[#111418] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-glow animate-fade-in-up">
        与海福星云科技开启智启之旅
      </h1>
      <h2 class="text-[#637588] dark:text-slate-400 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto animate-fade-in-up delay-100">
        Start your intelligent journey with Haifuxing Cloud Technology. <br/>Connecting you to the future of AI technology from Hainan to the world.
      </h2>
    </div>

    <div class="layout-container flex h-full grow flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full z-10">
      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        <!-- Left Side: Contact Info & Grid -->
        <div class="lg:col-span-5 flex flex-col gap-6 animate-fade-in-left delay-200">
          <!-- Business Inquiry Card -->
          <div class="glass-panel p-6 rounded-xl flex flex-col gap-4 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div class="flex items-center gap-3 mb-2">
              <span class="material-symbols-outlined text-primary text-2xl">business_center</span>
              <h3 class="text-xl font-bold text-[#111418] dark:text-white">商务合作</h3>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-[#637588] dark:text-slate-400 text-sm mt-1">call</span>
                <div>
                  <p class="text-xs text-[#637588] dark:text-slate-400 uppercase tracking-wider">Phone</p>
                  <p class="text-[#111418] dark:text-white font-medium">+86 138-2614-1277</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-[#637588] dark:text-slate-400 text-sm mt-1">mail</span>
                <div>
                  <p class="text-xs text-[#637588] dark:text-slate-400 uppercase tracking-wider">Email</p>
                  <p class="text-[#111418] dark:text-white font-medium">business@haifuxing.com</p>
                </div>
              </div>
            </div>
            <button class="mt-2 w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary transition-all text-sm font-bold">
              <span class="material-symbols-outlined text-lg">smart_toy</span>
              <span>Chat with AI Assistant</span>
            </button>
          </div>

          <!-- Location Card with Mini Map -->
          <div class="glass-panel p-6 rounded-xl flex flex-col gap-4 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-2xl">location_on</span>
              <h3 class="text-xl font-bold text-[#111418] dark:text-white">办公地址</h3>
            </div>
            <p class="text-[#637588] dark:text-slate-300 text-sm">海南省海口市龙华区深发展大厦2468室</p>
            <!-- Stylized Map Container -->
            <div class="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 group cursor-pointer bg-slate-900">
              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" style="background-image: url('/images/localized/contact_map_bg.jpg');">
              </div>
              <div class="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="relative flex h-4 w-4">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                </span>
              </div>
              <div class="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white backdrop-blur-sm">Open Maps</div>
            </div>
          </div>

          <!-- Bottom Grid: Talent & Social -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Talent -->
            <div class="glass-panel p-5 rounded-xl flex flex-col justify-between gap-4 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="material-symbols-outlined text-primary">group_add</span>
                  <h4 class="font-bold text-[#111418] dark:text-white">人才招聘</h4>
                </div>
                <p class="text-xs text-[#637588] dark:text-slate-400">Join our team of innovators.</p>
              </div>
              <div>
                <p class="text-sm text-[#111418] dark:text-white font-medium mb-2">hr@haifuxing.com</p>
                <a class="text-primary text-xs flex items-center gap-1 hover:underline cursor-pointer">
                  View Openings <span class="material-symbols-outlined text-[10px]">arrow_forward</span>
                </a>
              </div>
            </div>
            <!-- Social -->
            <div class="glass-panel p-5 rounded-xl flex flex-col justify-between gap-4 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="material-symbols-outlined text-primary">share</span>
                  <h4 class="font-bold text-[#111418] dark:text-white">社交媒体</h4>
                </div>
                <p class="text-xs text-[#637588] dark:text-slate-400">Follow our latest updates.</p>
              </div>
              <div class="flex gap-3">
                <div class="size-8 rounded bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary/50 transition-colors cursor-pointer text-[#637588] dark:text-white" title="WeChat">
                  <span class="material-symbols-outlined text-sm">chat</span>
                </div>
                <div class="size-8 rounded bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary/50 transition-colors cursor-pointer text-[#637588] dark:text-white" title="Enterprise WeChat">
                  <span class="material-symbols-outlined text-sm">work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Inquiry Form -->
        <div class="lg:col-span-7 animate-fade-in-right delay-200">
          <div class="glass-panel h-full rounded-xl p-6 md:p-10 flex flex-col justify-center bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <h3 class="text-2xl font-bold text-[#111418] dark:text-white mb-2">发送消息</h3>
            <p class="text-[#637588] dark:text-slate-400 mb-8">We'd love to hear from you. Please fill out this form.</p>
            <form class="space-y-6" @submit.prevent>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-[#637588] dark:text-slate-300" for="name">Name</label>
                  <input class="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="name" placeholder="Your Name" type="text"/>
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-[#637588] dark:text-slate-300" for="company">Company</label>
                  <input class="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="company" placeholder="Company Name" type="text"/>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-[#637588] dark:text-slate-300" for="phone">Phone</label>
                  <input class="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="phone" placeholder="+86 1XX XXXX XXXX" type="tel"/>
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-[#637588] dark:text-slate-300" for="type">Inquiry Type</label>
                  <div class="relative">
                    <select class="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111418] dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer" id="type">
                      <option>Business Cooperation</option>
                      <option>Product Support</option>
                      <option>Media Inquiry</option>
                      <option>Others</option>
                    </select>
                    <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#637588] dark:text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#637588] dark:text-slate-300" for="message">Message</label>
                <textarea class="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" id="message" placeholder="Tell us about your needs..." rows="5"></textarea>
              </div>
              <div class="pt-4">
                <button class="w-full md:w-auto min-w-[160px] bg-gradient-to-r from-primary to-[#2563eb] hover:from-primary/90 hover:to-[#2563eb]/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center gap-2" type="button">
                  <span>提交</span>
                  <span class="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Support Badge -->
      <div class="flex justify-center mb-8 animate-fade-in-up delay-300">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          <span class="material-symbols-outlined text-lg">support_agent</span>
          7x24 Intelligent Technical Support
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props or emits
</script>

<style scoped>
.glass-panel {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
.text-glow {
    text-shadow: 0 0 20px rgba(19, 127, 236, 0.5);
}
</style>
