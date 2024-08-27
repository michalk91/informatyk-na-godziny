<template>
  <NuxtPicture src="/images/map.png" alt="map" class="image" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.image::v-deep(img) {
  user-select: none;
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
