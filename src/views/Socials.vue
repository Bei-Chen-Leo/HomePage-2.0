<template>
  <div class="contenta">
    <h2>我的社交平台</h2>
    <p class="subtitle">在这些地方找到我</p>
    <ul class="social-list">
      <li>📩：<a href="mailto:admin@furcraft.top">admin@furcraft.top</a></li>
      <li>💬：扫描此<a href="/images/wechat.png" target="_blank">二维码</a>或搜索微信号 BeiChen_2009 添加</li>
      <li>🐧：<a href="https://qm.qq.com/q/5oMXOCmOUE" target="_blank">3579267163</a></li>
      <li>✈️：<a href="https://t.me/BeiChen314" target="_blank">@BeiChen314</a></li>
      <li>抖音：<a href="https://www.douyin.com/user/MS4wLjABAAAAgwbK3SDMw7Tu3mYcf8Pbukct9sE4d_anj6rHmo9cSeWBfdIL0vYypiNofurhM99b" target="_blank">北尘</a></li>
      <li>bilibili：<a href="https://space.bilibili.com/1299753224" target="_blank">北尘在努力</a></li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: var(--text-primary);
  font-weight: 300;
  letter-spacing: -0.02em;
  animation: fadeInUp 0.6s ease;
  margin-bottom: 0.5em;
}

.subtitle {
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.95em;
  margin-bottom: 2em;
  animation: fadeInUp 0.6s ease 0.1s both;
}

.social-list {
  list-style: none;
  padding: 0;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.social-list li {
  padding: 1.2em 0;
  margin: 0;
  background: transparent;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
  color: var(--text-secondary);
  font-weight: 400;
  animation: slideInRight 0.6s ease;
  animation-fill-mode: both;
}

.social-list li:hover {
  color: var(--text-primary);
  padding-left: 1em;
  transform: translateX(5px);
}
.social-list li:nth-child(2) { animation-delay: 0.2s; }
.social-list li:nth-child(3) { animation-delay: 0.3s; }
.social-list li:nth-child(4) { animation-delay: 0.4s; }
.social-list li:nth-child(5) { animation-delay: 0.5s; }
.social-list li:nth-child(6) { animation-delay: 0.6s; }

.social-list li:hover {
  color: #1a1a1a;
  padding-left: 1em;
  transform: translateX(5px);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 1.8em !important;
  }
  
  .subtitle {
    font-size: 0.9em !important;
    margin-bottom: 1.5em !important;
  }
  
  .social-list li {
    padding: 1em 0 !important;
    font-size: 0.9em !important;
  }
  
  .social-list li:hover {
    padding-left: 0.5em !important;
    transform: translateX(3px) !important;
  }
}
</style>
