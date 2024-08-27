<template>
  <NuxtPicture
    src="/images/background/embedded_image.png"
    preload
    alt="Background overlay"
    class="image"
  />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.image::v-deep(img) {
  user-select: none;
  width: 100%;
  max-width: 100%;
  height: auto;

  @media screen and (max-width: 1500px) {
    display: none;
  }
}
</style>
