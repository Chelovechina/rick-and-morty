<template>
  <div class="search">
    <input
      class="search__input"
      placeholder="Search"
      type="text"
      :value="search"
      @input="handleChange"
    />
    <button @click="handleClear" class="search__button">
      <img class="search__img" src="./../assets/close.svg" alt="Clean" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const search = computed(() => {
  return store.state.sort.search;
});

const handleChange = (e) => {
  store.commit("setSearch", e.target.value);
};
const handleClear = (e) => {
  store.commit("clearSearch");
};
</script>

<style scoped>
.search {
  position: relative;
}

.search__input {
  width: 350px;
  height: 50px;
  padding: 10px 50px 10px 15px;
  border-radius: 10px;
  background: #202329;
  border: none;
  color: #fff;
  font-size: 16px;
}

.search__input::placeholder {
  color: #fff;
  font-size: 16px;
}

.search__button {
  position: absolute;
  top: 0;
  right: 0;
  background: inherit;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search__img {
  width: 20px;
  height: 20px;
}
</style>
