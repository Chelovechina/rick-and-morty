<template>
  <div class="pagination">
    <PaginationButton :page-number="currentPage - 1" :is-disabled="currentPage === 1">
      <img style="transform: rotate(90deg)" src="./../assets/arrow-down.svg" />
    </PaginationButton>

    <PaginationButton v-for="pageNumber in $store.getters.getPagination" :page-number="pageNumber"
      :is-disabled="pageNumber === currentPage" :key="pageNumber">
      {{ pageNumber }}
    </PaginationButton>

    <PaginationButton :page-number="currentPage + 1" :is-disabled="currentPage === pages">
      <img style="transform: rotate(-90deg)" src="./../assets/arrow-down.svg" />
    </PaginationButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useStoreTyped } from "@/hooks/useStoreTyped";
import PaginationButton from "./PaginationButton.vue";

const store = useStoreTyped();
const currentPage = computed(() => store.state.sort.currentPage);
const pages = computed(() => store.state.info.pages);
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
