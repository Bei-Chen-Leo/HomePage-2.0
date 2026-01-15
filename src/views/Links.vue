<template>
  <div class="contenta">
    <h2>友情链接</h2>
    <p class="subtitle">与优秀的朋友们互相连接</p>
    <div class="friend-links">
      <div v-for="link in friendLinks" :key="link.name" class="friend-card" @click="confirmNavigation(link.url)">
        <img :src="link.avatar" :alt="link.name + '的头像'">
        <h3>{{ link.name }}</h3>
        <p>{{ link.description }}</p>
      </div>
    </div>
    
    <div class="exchange-section">
      <h2>申请友链</h2>
      <p>欢迎交换友链，请确保你的站点符合以下要求：</p>
      <ul class="requirements">
        <li>使用 HTTPS 并配置有效证书</li>
        <li>非商业性质的个人站点</li>
        <li>站点信息完整（图标、标题、域名）</li>
        <li>内容健康，设计美观</li>
        <li>能够稳定访问</li>
      </ul>
      <p>请先将本站添加到你的友链列表：</p>
      <ul class="my-info">
        <li>名称：北尘的小窝</li>
        <li>链接：<a href="https://www.beichen.icu" target="_blank">www.beichen.icu</a></li>
        <li>图标：<a href="https://www.beichen.icu/images/Favicon.webp" target="_blank">Favicon.webp</a></li>
        <li>简介：梦想即是远航！Dream is the voyage!</li>
      </ul>
      <p>添加完成后，请<router-link to="/socials">联系我</router-link>进行友链交换。</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const friendLinks = ref([
  {
    name: 'Neokoni',
    avatar: 'https://res.neokoni.ink/neokoni/svg/favicon.svg',
    description: 'Foilow that star',
    url: 'https://blog.neokoni.ink/'
  },
  {
    name: '岁月的小网站',
    avatar: '/images/sy.jpeg',
    description: '回家种地去',
    url: 'https://suiyue.xyz'
  },
  {
    name: '薄荷の小屋',
    avatar: 'https://api.hoshiroko.com/img/avatar.jpg',
    description: '越是拼命往前伸手，渴望之物越是渐行渐远',
    url: 'https://www.hoshiroko.com'
  },
  {
    name: '新毛博客',
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=530060699&spec=640&img_type=jpg',
    description: '喵喵喵！',
    url: 'https://blog.xmb505.top'
  },
  {
    name: 'Restent Ou',
    avatar: 'https://library.gxres.net/images/icons/favicon.ico',
    description: '静寂に問う 答えを求めて',
    url: 'https://www.gxres.net'
  },
  {
    name: 'whycf的小站',
    avatar: 'https://whycf.top/wp-content/uploads/2023/07/1小.png',
    description: 'whycf | 官方网站',
    url: 'https://whycf.top'
  },
  {
    name: "Orange's",
    avatar: 'https://orangestd.cn/images/avatar.png',
    description: 'Enjoy freedom.',
    url: 'https://orangestd.cn'
  },
  {
    name: 'EDream的小破站',
    avatar: 'https://blog.edmc.cn/upload/fillet-ElectricityDream.png',
    description: '人生没有绝对精彩，雨后或许没有彩虹，但后退一步确是失败。坚持不懈，持之以恒，奋力拼搏，成就梦想。',
    url: 'https://blog.edmc.cn/'
  },
  {
    name: '梦屿 - Moeuu',
    avatar: 'https://blog.moeuu.cn/upload/%E6%A2%A6%E5%B1%BF.png',
    description: '这个人没有填简介啊~~~',
    url: 'https://moeuu.cn/'
  },
  {
    name: 'ZHYxulei',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2742291286&s=100',
    description: '只有当不幸真的到来时，我们才会怀念和渴望那些逝去的美好时光',
    url: 'https://zhyxulei.top/'
  },
  {
    name: 'Suancs attic',
    avatar: 'http://pic.ancs.top/uploads/2023/11/19/6559f70c0c560.jpg',
    description: '我们的征途是星辰大海',
    url: 'https://blog.ancs.top'
  },
  {
    name: 'Binbim-Dev',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1721822150&s=640',
    description: '全栈开发-职高生 🚀',
    url: 'https://home.binbim.top'
  },
  {
    name: "Murasame's Blog",
    avatar: 'https://blog.shirayukinoa.top/_astro/Murasame.0zIy958b_ZajvDy.webp',
    description: '我已经下了决心，要与深爱的少女一起在这片土地生活下去。我对此无比自豪。',
    url: 'https://blog.shirayukinoa.top/'
  }
])

const confirmNavigation = (url) => {
  if (confirm('确定要跳转到该页面吗？')) {
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
h2 {
  color: var(--text-primary);
  font-weight: 300;
  letter-spacing: -0.02em;
  animation: fadeInUp 0.6s ease, gradientText 3s ease infinite;
  margin-bottom: 0.5em;
  background: linear-gradient(90deg, var(--text-primary), var(--text-secondary), var(--text-primary));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: transform 0.3s ease;
  cursor: default;
}

h2:hover {
  transform: translateY(-3px) scale(1.02);
}

.subtitle {
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.95em;
  margin-bottom: 2em;
  animation: fadeInUp 0.6s ease 0.1s both, breathe 2s ease-in-out infinite;
  transition: transform 0.3s ease, color 0.3s ease;
  cursor: default;
}

.subtitle:hover {
  transform: translateY(-2px);
  color: var(--text-secondary);
}

.friend-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5em;
  margin: 2em 0;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.friend-card {
  padding: 2em 1.5em;
  background: var(--bg-secondary);
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  animation: fadeInUp 0.6s ease;
  animation-fill-mode: both;
}

.friend-card:hover {
  border-color: var(--text-primary);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.friend-card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1em;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.friend-card:hover img {
  border-color: var(--text-primary);
}

.friend-card h3 {
  color: var(--text-primary);
  font-size: 1em;
  margin-bottom: 0.5em;
  font-weight: 500;
  transition: all 0.3s ease;
}

.friend-card:hover h3 {
  transform: translateY(-2px);
}

.friend-card p {
  color: var(--text-tertiary);
  font-size: 0.85em;
  line-height: 1.5;
  min-height: 2.5em;
  font-weight: 400;
}

.exchange-section {
  margin-top: 3em;
  padding: 2.5em 0;
  background: transparent;
  border-top: 1px solid var(--border-color);
  animation: fadeInUp 0.6s ease 0.4s both;
}

.exchange-section h2 {
  margin-bottom: 2em;
}

.exchange-section p {
  margin: 1em 0;
  color: var(--text-secondary);
  font-weight: 400;
  line-height: 1.6;
}

.requirements,
.my-info {
  list-style: none;
  padding: 0;
  margin: 1.5em 0;
}

.requirements li,
.my-info li {
  padding: 0.8em 0;
  margin: 0;
  background: transparent;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-secondary);
  font-weight: 400;
  line-height: 1.5;
  animation: fadeIn 0.8s ease;
  animation-fill-mode: both;
}

.requirements li:nth-child(1) { animation-delay: 0.1s; }
.requirements li:nth-child(2) { animation-delay: 0.2s; }
.requirements li:nth-child(3) { animation-delay: 0.3s; }
.requirements li:nth-child(4) { animation-delay: 0.4s; }
.requirements li:nth-child(5) { animation-delay: 0.5s; }

.my-info li:nth-child(1) { animation-delay: 0.1s; }
.my-info li:nth-child(2) { animation-delay: 0.2s; }
.my-info li:nth-child(3) { animation-delay: 0.3s; }
.my-info li:nth-child(4) { animation-delay: 0.4s; }

.my-info li {
  border-bottom-color: #f0f0f0;
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

@keyframes gradientText {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes breathe {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .friend-links {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1em;
  }
  
  .friend-card {
    padding: 1em;
  }
  
  .friend-card img {
    width: 60px;
    height: 60px;
  }
  
  .exchange-section {
    padding: 1.5em;
  }
}
</style>
