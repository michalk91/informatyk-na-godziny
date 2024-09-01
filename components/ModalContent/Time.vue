<template>
  <div class="wrapper">
    <span
      >Wypełnij formularz, a nasz specjalista skontaktuje się najszybciej jak to
      możliwe.</span
    >
    <p>Orientacyjny czas podjęcia działań</p>
    <div class="image-container">
      <NuxtPicture
        src="/images/logos/time_logo.svg"
        alt="watch"
        class="image"
      />
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
.image::v-deep(img) {
  @media screen and (max-width: 735px) {
    height: 50px;
  }
}
.wrapper {
  .image-container {
    display: flex;
    align-items: center;

    @media screen and (max-width: 735px) {
      justify-content: center;
      margin-bottom: 10px;
    }
  }

  .waiting-time {
    font-family: Montserrat;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 34.13px;
    color: #39395c;

    @media screen and (max-width: 785px) {
      font-size: 1.4rem;
    }
  }

  span {
    display: inline-block;
    color: #39395c;
    margin-top: 44px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 19.5px;

    @media screen and (max-width: 735px) {
      margin-top: 20px;
      text-align: center;
    }
  }

  p {
    @media screen and (max-width: 735px) {
      text-align: center;
    }
  }
}
</style>
