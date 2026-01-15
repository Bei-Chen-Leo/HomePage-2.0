<template>
  <header>
    <h1 class="title">北尘的主页🏠</h1>
    <nav class="nav">
      <ul class="navul">
        <li class="navli">
          <router-link to="/" :class="{ active: $route.path === '/' }">
            <i class="iconfont">&#xe600;</i>首页
          </router-link>
          <a href="https://blog.beichen.icu/" target="_blank">
            <i class="iconfont">&#xe624;</i>博客
          </a>
          <router-link to="/links" :class="{ active: $route.path === '/links' }">
            <i class="iconfont">&#xec7f;</i>友链
          </router-link>
          <router-link to="/socials" :class="{ active: $route.path === '/socials' }">
            <i class="iconfont">&#xe622;</i>社交平台
          </router-link>
          <router-link to="/donate" :class="{ active: $route.path === '/donate' }">
            <i class="iconfont">&#xe601;</i>打赏
          </router-link>
          <router-link to="/projects" :class="{ active: $route.path === '/projects' }">
            <i class="iconfont">&#xe625;</i>项目
          </router-link>
          <a href="https://status.beichen.icu" target="_blank">
            <i class="iconfont">&#xe693;</i>监测站
          </a>
          <button @click="toggleTheme" class="theme-toggle" :title="theme === 'dark' ? '切换到白天模式' : '切换到黑夜模式'">
            {{ theme === 'dark' ? '☀️' : '🌙' }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
header {
  height: 9.6em;
  width: 100%;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.title {
  margin: 0;
  text-align: center;
  padding-top: 1.1em;
  padding-bottom: 1.6em;
  font-size: 2.3em;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  animation: fadeInScale 0.8s ease;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}



@media screen and (max-width: 769px) {
  .nav {
    float: left;
    width: 100%;
    text-align: center;
    position: relative;
    bottom: 1.6rem;
    max-width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .nav {
    float: left;
    width: 100%;
    text-align: center;
    position: relative;
    bottom: 2em;
    max-width: 100%;
  }
}

.navli {
  list-style: none;
  overflow-x: auto;
}

.navul {
  margin: 0 auto;
  padding: 0;
  white-space: nowrap;
}

.navli a {
  margin: 0 1.5em;
  padding: 0.3em 0;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  display: inline-block;
  font-weight: 400;
  font-size: 0.95em;
  border-bottom: 2px solid transparent;
  position: relative;
}

.navli a:hover {
  color: var(--text-primary);
  border-bottom-color: var(--text-primary);
  transform: translateY(-2px);
}

.navli a.active {
  color: var(--text-primary);
  border-bottom-color: var(--text-primary);
}

.theme-toggle {
  margin-left: 1em;
  padding: 0.3em 0.8em;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  transition: all 0.3s ease;
  display: inline-block;
  vertical-align: middle;
}

.theme-toggle:hover {
  transform: scale(1.2);
  opacity: 0.8;
}

.navli .iconfont {
  margin-right: 0.3em;
  font-size: 1.1em;
  vertical-align: middle;
}
</style>
