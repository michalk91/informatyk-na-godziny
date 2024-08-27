<template>
  <div class="outer-wrapper">
    <div class="wrapper">
      <MainScreenTitle />
      <MainScreenBackgroundImage />
    </div>
    <MainScreenPartnersSection />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.outer-wrapper {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100vw;
  max-width: 100%;
}
.wrapper {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
