<template>
  <div class="container">
    <h1 class="title">Informatyk</h1>
    <h2 class="subtitle">na godziny</h2>
    <h3 class="paragraph">Gdańsk / Gdynia / Sopot / Tczew</h3>
    <div class="inner-container">
      <ActionButton
        text="Zamów Informatyka"
        data-role="Informatyk"
        @click="handleEmitClickWIthEvent"
      />
      <div>
        <NuxtPicture
          src="/images/icons/telephone.svg"
          alt="telephone"
          class="image"
        />
        <a href="tel:+48 58 500 80 10">+48 58 500 80 10</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "open-modal", target: any): void;
}>();

function handleEmitClickWIthEvent(e: HTMLElement) {
  emit("open-modal", e);
}
</script>

<style scoped lang="scss">
.image::v-deep(img) {
  @include fit-image-to-container;
}

.container {
  margin-left: $horizontal-padding;
  margin-top: 301px;

  @media screen and (max-width: 1670px) {
    margin-top: 70px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 1500px) {
    margin: 250px auto 200px auto;
    text-align: center;
  }

  .inner-container {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 71px;

    @media screen and (max-width: 650px) {
      flex-wrap: wrap;
      justify-content: center;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      a,
      svg {
        font-size: 1rem;
        line-height: 24px;
        text-decoration: none;
      }
    }
  }

  .title,
  .subtitle {
    margin: 0;
    line-height: 90.2px;
    font-size: 5.125rem;

    @media screen and (max-width: 650px) {
      font-size: 4rem;
      line-height: 65px;
    }

    @media screen and (max-width: 515px) {
      font-size: 3rem;
      line-height: 55px;
    }

    @media screen and (max-width: 390px) {
      font-size: 2.7rem;
      line-height: 50px;
    }
  }

  .subtitle {
    color: $secondary-text;
    margin: 0;
  }
  .paragraph {
    text-align: left;
    font-size: 1.563rem;
    line-height: 27.5px;
    font-style: italic;

    @media screen and (max-width: 650px) {
      font-size: 1.2rem;
      line-height: 20px;
      text-align: center;
    }

    @media screen and (max-width: 515px) {
      font-size: 1rem;
      line-height: 15px;
    }
  }
}
</style>
