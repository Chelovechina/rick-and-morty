<template>
  <div class="character">
    <h1 class="character__title">{{ currentCharacter.name }}</h1>
    <div class="character__meta">
      <img class="character__img" :src="currentCharacter.image" :alt="currentCharacter.name" />
      <div class="character__description">
        <h4 class="character__subtitle">Description:</h4>
        <div class="character__wrapper">
          <p class="character__text">
            Status: <span>{{ currentCharacter.status }}</span>
          </p>
          <p class="character__text">
            Species: <span>{{ currentCharacter.species }}</span>
          </p>
          <p class="character__text">
            Type: <span>{{ currentCharacter.type }}</span>
          </p>
          <p class="character__text">
            Origin location: <span>{{ currentCharacter.origin.name }}</span>
          </p>
          <p class="character__text">
            Last known location:
            <span>{{ currentCharacter.location.name }}</span>
          </p>
          <p class="character__text">
            First seen in:
            <span>{{ currentCharacter.firstEpisode.name }} ({{
              currentCharacter.firstEpisode.episode
            }})</span>
          </p>
          <p class="character__text">
            Last seen in:
            <span>{{ currentCharacter.lastEpisode.name }} ({{
              currentCharacter.lastEpisode.episode
            }})</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "@/store";
import { computed } from "vue";

const currentCharacter = computed(() => store.state.currentCharacter);
</script>

<style scoped>
.character {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  gap: 30px;
  flex-direction: column;
}

.character__title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.character__meta {
  display: flex;
  gap: 40px;
}

.character__img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 100%;
}

.character__description {
  display: flex;
  width: 350px;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  background: #202329;
}

.character__subtitle {
  color: #fff;
  font-size: 20px;
}

.character__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 800px) {
  .character__meta {
    flex-direction: column;
    align-items: center;
  }
}
</style>
