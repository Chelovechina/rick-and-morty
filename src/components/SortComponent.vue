<template>
  <div class="form">
    <div class="form__selects">
      <OptionComponent :options="sort.statuses" :active-option="$store.state.sort.activeStatus" title="Status" />
      <OptionComponent :options="sort.genders" :active-option="$store.state.sort.activeGender" title="Gender" />
    </div>
    <SearchInput />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from "vue";
import debounce from "lodash.debounce";

import SearchInput from "./SearchInput.vue";
import OptionComponent from "./OptionComponent.vue";
import { useStoreTyped } from "@/hooks/useStoreTyped";

const store = useStoreTyped();
const sort = computed(() => store.state.sort);

const debouncedWatch = debounce(() => {
  store.dispatch("getCharacters");
}, 700);

watch(store.state.sort, debouncedWatch);

onBeforeUnmount(() => {
  debouncedWatch.cancel();
});
</script>

<style scoped>
.form {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
}

.form__selects {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .form {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
