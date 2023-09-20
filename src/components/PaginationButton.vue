<template>
  <button @click="handleClick" :disabled="props.isDisabled" class="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useStoreTyped } from "@/hooks/useStoreTyped";

interface IProps {
  isDisabled?: boolean;
  pageNumber: number;
}

const props = defineProps<IProps>();
const store = useStoreTyped();

const handleClick = () => {
  store.commit("setPage", props.pageNumber);
};
</script>

<style scoped>
.button {
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background: #202329;
  border: none;
  color: #fff;
  transition: box-shadow 0.3s ease-in-out;
}

.button:hover {
  box-shadow: 0 0 10px #202329;
  cursor: pointer;
}

.button:disabled {
  background: inherit;
  border: 2px solid #202329;
}

.button:disabled:hover {
  cursor: inherit;
  box-shadow: none;
}
</style>
