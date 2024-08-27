<template>
  <section>
    <ServicesScreenAbout />
    <div class="numbers-wrapper"><ServicesScreenNumbers /></div>
    <div class="image-wrapper"><Map /></div>
    <ServicesScreenArea />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
  display: grid;
  margin-top: 148px;
  max-width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: $horizontal-padding;
  padding-right: 247px;
  row-gap: 109px;
  column-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 650px));

  @media screen and (max-width: 1050px) {
    padding-left: $mobile-horizontal-padding;
    padding-right: $mobile-horizontal-padding;
  }

  .image-wrapper {
    padding-right: 104px;
    @media screen and (max-width: 1357px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
