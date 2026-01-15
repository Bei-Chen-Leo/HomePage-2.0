<template>
  <div class="contenta">
    <div class="welcome">
      <h2>你好，我是北尘</h2>
      <p>一个热爱创造的高中生</p>
    </div>
    
    <div class="content-section">
      <h2>关于</h2>
      <p>16 岁 / 高中生 / 中国 · 南京</p>
      <p>热衷于 Web 开发与服务器搭建，喜欢用代码创造有趣的东西。</p>
      <p>Minecraft 玩家 和 服务器运维爱好者。</p>
    </div>
    
    <div class="content-section">
      <h2>正在使用的项目</h2>
      <ul>
        <li><a href="https://www.openfrp.net/" target="_blank">OpenFRP</a> 内网穿透解决方案</li>
        <li><a href="#">PCL2</a> Minecraft 启动器</li>
        <li>HTML / CSS / JavaScript</li>
        <li>Vue.js / Vite</li>
      </ul>
    </div>
    
    <div class="content-section">
      <h2>致谢</h2>
      <ul>
        <li>GitHub 代码托管</li>
        <li>Cloudflare CDN 加速</li>
        <li>所有支持我的朋友们</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  margin-bottom: 2em;
  animation: fadeInUp 0.6s ease;
}

.content-section {
  margin: 2.5em 0;
  padding: 0;
  background: transparent;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5em;
  transition: all 0.2s ease;
  animation: fadeInUp 0.6s ease;
}

.content-section:hover {
  opacity: 1;
}

.content-section h2 {
  margin-bottom: 1.2em;
  color: var(--text-primary);
  font-weight: 500;
  letter-spacing: -0.02em;
}

.content-section p {
  margin: 0.6em 0;
  line-height: 1.6;
  color: var(--text-secondary);
}

.content-section ul {
  list-style: none;
  padding-left: 0;
}

.content-section ul li {
  padding: 0.5em 0;
  padding-left: 1.5em;
  position: relative;
}

.content-section ul li {
  color: var(--text-secondary);
  font-weight: 400;
  animation: slideInLeft 0.6s ease;
  animation-fill-mode: both;
}

.content-section ul li:nth-child(1) { animation-delay: 0.1s; }
.content-section ul li:nth-child(2) { animation-delay: 0.2s; }
.content-section ul li:nth-child(3) { animation-delay: 0.3s; }
.content-section ul li:nth-child(4) { animation-delay: 0.4s; }
.content-section ul li:nth-child(5) { animation-delay: 0.5s; }

.content-section ul li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--text-primary);
  font-weight: 400;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
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
  .welcome h2 {
    font-size: 1.8em !important;
  }
  
  .welcome p {
    font-size: 0.9em !important;
  }
  
  .content-section {
    margin: 1.5em 0 !important;
    padding: 1em 0 !important;
  }
  
  .content-section h2 {
    font-size: 1.5em !important;
    margin-bottom: 1em !important;
  }
  
  .content-section p {
    font-size: 0.9em !important;
  }
  
  .content-section ul li {
    padding: 0.4em 0 !important;
    padding-left: 1.2em !important;
    font-size: 0.9em !important;
  }
}
</style>
