<template>
  <li class="character">
    <router-link :to="String(character.id)" class="character__link">
      <h4 class="character__title">{{ props.character.name }}</h4>
      <img class="character__img" :src="props.character.image" :alt="props.character.name" />
      <div class="character__description">
        <p class="character__text">
          Status: <span>{{ props.character.status }}</span>
        </p>
        <p class="character__text">
          Species: <span>{{ props.character.species }}</span>
        </p>
        <p class="character__text">
          Origin location: <span>{{ props.character.origin.name }}</span>
        </p>
        <p class="character__text">
          Last known location: <span>{{ props.character.location.name }}</span>
        </p>
      </div>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { ICharacter } from "@/types/ICharacter";

interface IProps {
  character: ICharacter;
}
const props = defineProps<IProps>();
</script>

<style scoped>
.character__link {
  display: flex;
  padding: 30px;
  gap: 20px;
  flex-direction: column;
  border-radius: 10px;
  background: #202329;
  align-items: center;
  text-decoration: none;
  transition: box-shadow 0.3s ease-in-out;
}

.character__link:hover {
  box-shadow: 0 0 15px #202329;
}

.character__title {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.character__img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 100%;
}

.character__description {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
