<template>
  <div class="outer-wrapper">
    <div class="inner-wrapper">
      <span>lat na rynku</span>
      <div>13+</div>
    </div>
    <div class="inner-wrapper">
      <span>obsłuzonych zgłoszeń</span>
      <div>~4700</div>
    </div>
    <div class="inner-wrapper">
      <span>specjalistów</span>
      <div>21</div>
    </div>
    <div class="inner-wrapper">
      <span>zadowolonych klientów</span>
      <div>200+</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.outer-wrapper {
  display: grid;
  justify-items: space-around;
  grid-template-columns: repeat(auto-fill, minmax(100px, 255px));
  row-gap: 62px;

  .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);

    span {
      color: #e6e6f0;
      font-size: 1rem;
      line-height: 20.8px;
    }
    div {
      color: #ff7c5f;
      font-size: 6rem;
      line-height: 124.8px;

      @media screen and (max-width: 420px) {
        font-size: 5rem;
        line-height: 120px;
      }

      @media screen and (max-width: 360px) {
        font-size: 4rem;
        line-height: 100px;
      }
    }
  }
}
</style>
