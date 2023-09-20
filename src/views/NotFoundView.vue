<template>
  <div class="notfound__wrapper">
    <h1 class="notfound__title">404</h1>
    <h2 class="notfound__subtitle">Not Found!</h2>
  </div>
</template>

<script setup></script>

<style scoped>
.notfound__wrapper {
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #272b33;
}

.notfound__title {
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
}

.notfound__subtitle {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}
</style>
