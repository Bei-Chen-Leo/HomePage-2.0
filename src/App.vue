<template>
  <div id="app">
    <Header />
    <div class="float"></div>
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <MusicPlayer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import { useTheme } from './composables/useTheme'

const { theme } = useTheme()

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
