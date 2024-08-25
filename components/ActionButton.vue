<template>
  <button>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  border: 0;
  background-color: $button-orange;
  border-radius: 30px;
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background-color: #c63924;
    color: black;
  }
}
</style>
