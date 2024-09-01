<template>
  <NuxtPicture
    src="/images/logos/logo.png"
    preload
    width="247px"
    height="62px"
    alt="main logo"
    class="logo"
  />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo::v-deep(img) {
  position: relative;
  margin: 32px 60px 32px 102px;
  z-index: 6;
  @media screen and (max-width: 1230px) {
    width: 200px;
    height: auto;

    @media screen and (max-width: 510px) {
      margin: 10px 0 10px 30px;
    }

    @media screen and (max-width: 370px) {
      width: 180px;
      height: auto;
    }
  }
}
</style>
