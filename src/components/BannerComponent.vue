<template>
  <div class="banner">
    <div class="banner__shadow"></div>
    <img
      class="banner__img"
      src="./../assets/banner.jpg"
      alt="Rick and Morty banner"
    />
    <img class="banner__logo" src="./../assets/logo.png" alt="Logo" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.banner {
  position: relative;
  width: 100vw;
  max-height: 400px;
}

.banner__shadow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.banner__img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.banner__logo {
  position: absolute;
  width: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>
