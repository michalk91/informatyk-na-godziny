<template>
  <button @click="$emit('handleClick')" :class="additionalClass" :type="type">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    additionalClass?: string;
    type?: "button" | "submit" | "reset";
    handleClick?: () => void;
  }>(),
  {
    type: "button",
  }
);
</script>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 4;
  gap: 10px;
  height: 56px;
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
