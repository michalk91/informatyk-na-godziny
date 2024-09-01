<template>
  <div class="container">
    <span class="title">Dostarczymy sprzęt zastępczy w razie awarii!</span>
    <p class="text">
      Możemy wypożyczyć sprzęt zastępczy w celu zapewnienia ciągłości działania
      firmy na czas dostarczenia sprzętu docelowego (płatność za dobę).
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  padding-top: 264px;
  padding-bottom: 221px;
  max-width: 876px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  padding-left: $mobile-horizontal-padding;
  padding-right: $mobile-horizontal-padding;
}
.title {
  font-size: 1.375rem;
  line-height: 30.8px;
}
.text {
  font-size: 1rem;
  line-height: 22.4px;
}
</style>
