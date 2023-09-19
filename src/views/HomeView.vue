<template>
  <div v-if="$store.state.status === StatusEnum.LOADING" class="">
    loading...
  </div>

  <div v-if="$store.state.status === StatusEnum.FULLFILLED">
    <main class="main">
      <div class="container">
        <h1 class="main__title">Characters</h1>
        <Sort />
        <Characters />
        <Pagination />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import Sort from "./../components/SortComponent.vue";
import Characters from "./../components/CharactersList.vue";
import Pagination from "./../components/PaginationComponent.vue";
import { StatusEnum } from "./../types/IState";

import { useStoreTyped } from "@/hooks/useStoreTyped";

const store = useStoreTyped();

onMounted(() => {
  store.dispatch("getCharacters");
});
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
  text-align: center;
}
</style>
