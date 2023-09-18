<template>
  <div class="form">
    <div class="form__selects">
      <OptionComponent :options="statuses" title="Status" />
      <OptionComponent :options="genders" title="Gender" />
    </div>
    <SearchInput />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import SearchInput from "./SearchInput.vue";
import OptionComponent from "./OptionComponent.vue";
import { useStoreTyped } from "@/hooks/useStoreTyped";

const store = useStoreTyped();
const statuses = computed(() => {
  return store.state.sort.statuses;
});
const genders = computed(() => {
  return store.state.sort.genders;
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
</style>
