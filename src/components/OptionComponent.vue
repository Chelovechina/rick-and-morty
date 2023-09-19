<template>
  <select @change="handleChange" class="select">
    <option :selected="props.title === props.activeOption" value="">
      {{ title }}
    </option>
    <option v-for="option in props.options" :selected="option === props.activeOption" :value="option" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useStoreTyped } from "@/hooks/useStoreTyped";

interface IProps {
  options: string[];
  title: string;
  activeOption: string;
}

const props = defineProps<IProps>();

const store = useStoreTyped();

const handleChange = (e: Event) => {
  if (props.title === "Status") {
    return store.commit(
      "setActiveStatus",
      (e.target as HTMLSelectElement).value
    );
  }

  return store.commit("setActiveGender", (e.target as HTMLSelectElement).value);
};
</script>

<style scoped>
.select {
  border-radius: 5px;
  background-color: #202329;
  border: none;
  text-align: center;
  color: #fff;
  padding: 10px 15px;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
</style>
