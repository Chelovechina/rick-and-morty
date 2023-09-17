<template>
  <Banner />
  <main class="main">
    <div class="container">
      <h1 class="main__title">Characters</h1>
      <Search />
    </div>
  </main>
</template>

<script setup lang="ts">
import Banner from "./../components/BannerComponent.vue";
import Search from "./../components/SortComponent.vue";
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
}

.main__title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
