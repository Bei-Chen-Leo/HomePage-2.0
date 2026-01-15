<template>
  <div id="music-player">
    <meting-js
      server="netease"
      type="playlist"
      id="7650673579"
      fixed="true"
      autoplay="false"
      loop="all"
      volume="0.7"
    ></meting-js>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window.MetingJSElement !== 'undefined') {
    console.log('MetingJS loaded successfully')
  }
})
</script>

<style scoped>
#music-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>
