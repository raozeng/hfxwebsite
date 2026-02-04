<template>
  <footer class="bg-background-dark border-t border-[#283039] pt-16 pb-8">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <div class="size-12 text-primary">
              <img src="/logo.png" alt="Haifuxing Cloud Logo" class="size-12 object-contain" />
            </div>
            <span class="text-white text-lg font-bold">海福星云科技</span>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed">
            开创人工智能解决方案，共创智慧明天。立足海南，服务全球。
          </p>
          <div class="flex gap-4 mt-2">
            <a class="text-gray-400 hover:text-white" href="#"><span class="material-symbols-outlined">public</span></a>
            <a class="text-gray-400 hover:text-white" href="#"><span class="material-symbols-outlined">mail</span></a>
            <a class="text-gray-400 hover:text-white" href="#"><span class="material-symbols-outlined">share</span></a>
          </div>
        </div>
        <div>
          <h4 class="text-white font-bold mb-6">平台</h4>
          <ul class="flex flex-col gap-3 text-sm text-gray-400">
            <li><a class="hover:text-primary transition-colors" href="#">生成式 AI</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">计算机视觉</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">数据分析</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">开发者 API</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-6">公司</h4>
          <ul class="flex flex-col gap-3 text-sm text-gray-400">
            <li><a class="hover:text-primary transition-colors" href="#">关于我们</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">加入我们</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">成功案例</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">新闻与洞察</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-6">关注微信公众号</h4>
          <div class="bg-white p-2 w-32 h-32 rounded-lg">
            <div class="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=HaifuxingCloud')] bg-contain bg-no-repeat" aria-label="WeChat QR code for Haifuxing Cloud official account"></div>
          </div>
          <p class="text-gray-500 text-xs mt-3">扫描二维码关注我们的官方公众号以获取最新动态。</p>
        </div>
      </div>
      <div class="border-t border-[#283039] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© 2024 海南海福星云科技有限公司. 保留所有权利.</p>
        <div class="flex gap-6">
          <a class="hover:text-gray-400" href="#">隐私政策</a>
          <a class="hover:text-gray-400" href="#">服务条款</a>
          <a class="hover:text-gray-400" href="#">安全</a>
        </div>
      </div>
    </div>
  </footer>
</template>
