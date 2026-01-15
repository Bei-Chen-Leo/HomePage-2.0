<template>
  <div class="contenta">
    <h2>支持我</h2>
    <p style="text-align: center; color: #8a8a8a; margin-bottom: 2em;">如果你喜欢我的内容，可以请我喝杯咖啡</p>
    <div class="donate-images">
      <a href="/images/QQpay.png" target="_blank" class="donate-card">
        <img src="/images/QQpay.png" alt="QQ支付" title="点击打开图片">
        <p>QQ支付</p>
      </a>
      <a href="/images/ZFB.jpg" target="_blank" class="donate-card">
        <img src="/images/ZFB.jpg" alt="支付宝" title="点击打开图片">
        <p>支付宝</p>
      </a>
      <a href="/images/VX.png" target="_blank" class="donate-card">
        <img src="/images/VX.png" alt="微信支付" title="点击打开图片">
        <p>微信支付</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: #1a1a1a;
  font-weight: 300;
  letter-spacing: -0.02em;
  animation: fadeInUp 0.6s ease;
  margin-bottom: 3em;
}

.donate-images {
  display: flex;
  justify-content: center;
  gap: 3em;
  flex-wrap: wrap;
  margin-top: 2em;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.donate-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background: var(--bg-secondary);
  border-radius: 0;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  text-decoration: none;
  animation: fadeInUp 0.6s ease;
  animation-fill-mode: both;
}

.donate-card:nth-child(1) { animation-delay: 0.1s; }
.donate-card:nth-child(2) { animation-delay: 0.2s; }
.donate-card:nth-child(3) { animation-delay: 0.3s; }

.donate-card:hover {
  border-color: var(--text-primary);
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.donate-card img {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 0;
  border: 1px solid var(--border-color);
}

.donate-card p {
  margin-top: 1.5em;
  font-size: 0.9em;
  font-weight: 400;
  color: var(--text-secondary);
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
  .donate-images {
    gap: 1em;
  }
  
  .donate-card img {
    width: 150px;
    height: 150px;
  }
}
</style>
