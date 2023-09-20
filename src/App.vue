<template>
  <Banner />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import Banner from "./components/BannerComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat Alternates", sans-serif;
}

body {
  background: #272b33;
}

.container {
  width: 100%;
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
}

.character__text {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
}

.character__text span {
  font-weight: 400;
}
</style>
