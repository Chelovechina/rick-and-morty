<template>
  <ul class="characters__list">
    <Character v-for="character in $store.state.characters" :character="character" :key="character.id" />
  </ul>
</template>

<script setup lang="ts">
import Character from "./CharacterComponent.vue";
</script>

<style scoped>
.characters__list {
  margin: 50px 0;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  list-style: none;
}
</style>
