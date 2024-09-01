<template>
  <NuxtPicture
    src="/images/background/embedded_image.png"
    preload
    alt="Background overlay"
    class="image"
    height="917"
    width="1137"
    quality="80"
  />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.image::v-deep(img) {
  height: auto;
  width: 1137px;
  max-width: 100%;
  animation: fadeInRight 0.5s ease-in;

  @media screen and (max-width: 1500px) {
    display: none;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}
</style>
