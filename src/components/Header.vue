<template>
  <header>
    <h1 class="title">北尘的主页🏠</h1>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" :class="{ active: $route.path === '/' }">
            <i class="iconfont">&#xe600;</i>首页
          </router-link>
        </li>
        <li class="nav-item">
          <a href="https://blog.beichen.icu/" target="_blank">
            <i class="iconfont">&#xe624;</i>博客
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/links" :class="{ active: $route.path === '/links' }">
            <i class="iconfont">&#xec7f;</i>友链
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/socials" :class="{ active: $route.path === '/socials' }">
            <i class="iconfont">&#xe622;</i>社交平台
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/donate" :class="{ active: $route.path === '/donate' }">
            <i class="iconfont">&#xe601;</i>打赏
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" :class="{ active: $route.path === '/projects' }">
            <i class="iconfont">&#xe625;</i>项目
          </router-link>
        </li>
        <li class="nav-item">
          <a href="https://status.beichen.icu" target="_blank">
            <i class="iconfont">&#xe693;</i>监测站
          </a>
        </li>
        <li class="nav-item">
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
  width: 100%;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
}

.title {
  margin: 0;
  text-align: center;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  font-size: 2.5em;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
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

.nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-item {
  margin: 0 0.25em;
}

.nav-item a {
  padding: 0.6em 1.2em;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  font-weight: 600;
  border-radius: 999px; /* Pill shape */
  position: relative;
  font-size: 0.95em;
  border: 1px solid transparent;
}

.nav-item a:hover {
  color: var(--text-primary);
  background: var(--bg-primary);
  border-color: rgba(128, 128, 128, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

.nav-item a.active {
  color: var(--bg-secondary);
  background: var(--text-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

[data-theme="dark"] .nav-item a.active {
  color: #000;
  background: #fff;
}

.nav-item .iconfont {
  margin-right: 0.4em;
  font-size: 1.1em;
}

.theme-toggle {
  margin-left: 0.5em;
  padding: 0.5em;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.theme-toggle:hover {
  transform: scale(1.1);
  background: rgba(128, 128, 128, 0.1);
}

@media screen and (max-width: 769px) {
  .nav {
    bottom: 0;
    padding-bottom: 1rem;
    display: block; /* Override flex centering for scrollable container */
  }
  
  .nav-list {
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0 1rem;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  
  .nav-list::-webkit-scrollbar {
    display: none;
  }

  .nav-item {
    flex-shrink: 0;
    margin: 0 0.2em;
  }
  
  .nav-item a {
    font-size: 0.9em;
    padding: 0.4em 0.8em;
  }
  
  .nav-item .iconfont {
    display: none;
  }
  
  .title {
    font-size: 2em !important;
    padding-bottom: 0.5em !important;
  }
  
  header {
    height: auto !important;
    padding-bottom: 10px;
  }
}
</style>
