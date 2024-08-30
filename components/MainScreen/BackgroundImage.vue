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
  @include fit-image-to-container;

  @media screen and (max-width: 1500px) {
    display: none;
  }
}
</style>
