<template>
  <footer>
    <p>© 2023 - Now <a href="/">北尘</a> · 保留所有权利</p>
    <p><a href="https://icp.gov.moe/?keyword=20243001">萌ICP备20243001号</a> · <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2025206224号-2</a></p>
    <p>Built with Vue 3 + Vite</p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  padding: 3em 0;
  text-align: center;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  position: relative;
  bottom: 0;
  margin-top: auto;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

footer p {
  margin: 0.5em 0;
  color: var(--text-tertiary);
  font-size: 0.85em;
  font-weight: 400;
}

footer a {
  text-decoration: none;
  color: var(--text-secondary);
  margin: 0 0.3em;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

footer a:hover {
  color: var(--text-primary);
  border-bottom-color: var(--text-primary);
}
</style>
