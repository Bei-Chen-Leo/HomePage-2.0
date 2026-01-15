<template>
  <div class="contenta">
    <h2>项目</h2>
    <p class="subtitle">我参与和创建的作品</p>
    
    <div class="content-section">
      <h3>我的团队</h3>
      <p>与志同道合的伙伴一起创造</p>
      <ul class="project-list">
        <li>
          <a href="https://www.furcraft.top/" target="_blank">
            <strong>FurCraft</strong>
          </a>
          <p>一个专注于 MC 及 API 的团队</p>
        </li>
        <li>
          <a href="https://www.aprism.top/" target="_blank">
            <strong>光圈棱镜 - AperturePrism</strong>
          </a>
          <p>一个致力于打造将精密工程与情感共鸣相融合的数字体验的创作者团队</p>
        </li>
      </ul>
    </div>
    
    <div class="content-section">
      <h3>我的项目</h3>
      <p>用代码实现想法</p>
      <ul class="project-list">
        <li>
          <a href="https://img.furapi.top/" target="_blank">
            <strong>Fur-Img-API</strong>
          </a>
          <p>一个随机福瑞图的 API</p>
        </li>
        <li>
          <a href="https://mc.furapi.top/" target="_blank">
            <strong>FurAPI-mc</strong>
          </a>
          <p>一个查询 Minecraft 服务器状态和 MOTD 的插件</p>
        </li>
        <li>
          <a href="https://oai.furapi.top/" target="_blank">
            <strong>FurAPI AI Gateway</strong>
          </a>
          <p>一座免费、无需订阅的 Chat Completions 聚合网关</p>
        </li>
      </ul>
    </div>
    
    <div class="coming-soon">
      <p>尽情期待~</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h2 {
  margin-bottom: 0.5em;
}

.subtitle {
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.95em;
  margin-bottom: 2em;
  animation: fadeInUp 0.6s ease 0.1s both;
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

.content-section h3 {
  margin-bottom: 0.5em;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: -0.02em;
}

.content-section > p {
  margin: 0 0 1.5em 0;
  color: var(--text-tertiary);
  font-size: 0.95em;
}

.project-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-list li {
  padding: 1.2em 0;
  border-bottom: 1px solid var(--border-light);
  animation: slideInLeft 0.6s ease;
  animation-fill-mode: both;
}

.project-list li:nth-child(1) { animation-delay: 0.1s; }
.project-list li:nth-child(2) { animation-delay: 0.2s; }
.project-list li:nth-child(3) { animation-delay: 0.3s; }

.project-list li:last-child {
  border-bottom: none;
}

.project-list li a {
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: none;
  transition: all 0.3s ease;
}

.project-list li a:hover {
  color: var(--link-color);
  opacity: 1;
  transform: none;
}

.project-list li a::after {
  display: none;
}

.project-list li strong {
  font-size: 1.1em;
  font-weight: 500;
}

.project-list li p {
  margin: 0.5em 0 0 0;
  color: var(--text-secondary);
  font-size: 0.9em;
  line-height: 1.6;
}

.coming-soon {
  text-align: center;
  margin: 3em 0 1em 0;
  padding: 2em 0;
  border-top: 1px solid var(--border-color);
}

.coming-soon p {
  color: var(--text-tertiary);
  font-size: 1.1em;
  font-style: italic;
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
</style>
