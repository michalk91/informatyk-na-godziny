<template>
  <div class="wrapper">
    <span
      >Wypełnij formularz, a nasz specjalista skontaktuje się najszybciej jak to
      możliwe.</span
    >
    <p>Orientacyjny czas podjęcia działań</p>
    <div>
      <NuxtPicture src="/images/logos/time_logo.svg" alt="map" class="image" />
      <p class="waiting-time">{{ waitingTime }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import useIsCurrentTimeBetween from "~/composables/useIsCurrentTimeBeetween";

const waitingTime = computed(() => {
  return useIsCurrentTimeBetween({ startHour: 8, endHour: 16 })
    ? "do 30 minut"
    : "do 12 godz.";
});
</script>

<style scoped lang="scss">
.wrapper {
  div {
    display: flex;
  }

  .waiting-time {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 700;
    line-height: 34.13px;
    color: #39395c;
  }

  span {
    display: inline-block;
    color: #39395c;
    margin-top: 44px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.5px;
  }
}
</style>
