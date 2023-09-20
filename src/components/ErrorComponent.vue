<template>
  <div class="error__wrapper">
    <h2 class="error__title">Oops!</h2>
    <h3 class="error__subtitle">{{ $store.state.errorMessage }}</h3>
  </div>
</template>

<script setup></script>

<style scoped>
.error__wrapper {
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.error__title {
  color: #fff;
  font-size: 40px;
  font-weight: 700;
}

.error__subtitle {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}
</style>
