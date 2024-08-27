<template>
  <div class="outer-wrapper">
    <div class="inner-wrapper">
      <h5>Obszar działania</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cursus morbi dignissim amet
        congue. Ipsum nec turpis.
      </p>
    </div>
    <div class="cities-wrapper">
      <div>Gdańsk</div>
      <div>Gdynia</div>
      <div>Wejherowo</div>
      <div>Sopot</div>
      <div>Kościerzyna</div>
      <div>Tczew</div>
      <div>Kartuzy</div>
      <div>Starogard Gd.</div>
      <div>Malbork</div>
    </div>
    <span>... i okolice</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.outer-wrapper {
  h5 {
    font-size: 44px;
    line-height: 61.6px;
    margin: 0;
    margin-bottom: 8px;
  }

  .inner-wrapper {
    margin-bottom: 32px;
  }

  .cities-wrapper {
    display: grid;
    @include grid-col-autofill(3, 210px);
    font-size: 24px;
    text-align: center;
    gap: 8px;

    div {
      padding: 16px 0;
      border: 1px solid #ffffff33;
      border-radius: 4px;
      box-shadow: 0px 4px 4px 0px #00000040;
    }
  }
  span {
    margin-top: 32px;
    text-align: right;
  }
}
</style>
