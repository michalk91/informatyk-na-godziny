<template>
  <NuxtPicture
    src="/images/background/embedded_image.png"
    preload
    alt="Background overlay"
    class="image"
    :class="{ 'with-animation': imgLoaded }"
    height="917"
    width="1137"
    quality="80"
    @load="handleImgLoaded"
  />
</template>

<script setup lang="ts">
const imgLoaded = shallowRef(false);

function handleImgLoaded() {
  imgLoaded.value = true;
}
</script>

<style scoped lang="scss">
.image::v-deep(img) {
  height: auto;
  width: 1137px;
  max-width: 100%;
  opacity: 0;

  @media screen and (max-width: 1500px) {
    display: none;
  }
}

.with-animation::v-deep(img) {
  animation: fadeInRight 0.5s ease-in forwards;
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
