<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<style scoped lang="scss">
div {
  text-align: left;
  border-top: 1px solid #ff4d4d;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
