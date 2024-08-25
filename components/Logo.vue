<template>
  <NuxtPicture
    src="/images/logos/logo.png"
    preload
    width="247px"
    height="62px"
    :imgAttrs="{
      alt: 'main-logo',
      class: 'image',
    }"
  />
</template>

<script setup lang="ts"></script>

<style lang="scss">
.image {
  position: relative;
  margin: 32px 60px 32px 102px;
  z-index: 5;
  @media screen and (max-width: 1230px) {
    width: 200px;
    height: auto;

    @media screen and (max-width: 510px) {
      margin: 40px 0 40px 40px;
    }

    @media screen and (max-width: 370px) {
      width: 180px;
      height: auto;
    }
  }
}
</style>
