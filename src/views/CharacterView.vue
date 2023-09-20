<template>
  <main class="main">
    <div class="container">
      <button @click="handleClick" class="link">
        Back
        <img class="link__arrow" src="./../assets/arrow-down.svg" alt="Arrow" />
      </button>
      <div class="wrapper">
        <div v-if="$store.state.status === StatusEnum.LOADING">
          <Loader />
        </div>

        <div v-if="$store.state.status === StatusEnum.FULLFILLED">
          <Character />
        </div>

        <div v-if="$store.state.status === StatusEnum.ERROR">
          <Error />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { useStoreTyped } from "@/hooks/useStoreTyped";
import { useRoute } from "vue-router";
import { StatusEnum } from "@/types/IState";

import router from "@/router";
import Loader from "./../components/LoaderComponent.vue";
import Error from "./../components/ErrorComponent.vue";
import Character from "./../components/CharacterComponent.vue";

const store = useStoreTyped();
const route = useRoute();

const handleClick = () => {
  store.commit("setStatus", StatusEnum.LOADING);
  router.push("/");
};

onMounted(() => {
  store.dispatch("getSingleCharacter", route.params.id);
});
</script>

<style scoped>
.link {
  background: #202329;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 10px;
  gap: 5px;
  transition: box-shadow 0.3s ease-in-out;
}

.link:hover {
  cursor: pointer;
  box-shadow: 0 0 10px #202329;
}

.link__arrow {
  transform: rotate(90deg);
}
</style>
