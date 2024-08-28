<template>
  <section class="outer-container">
    <span class="title">Dojazd</span>
    <div class="inner-container">
      <div class="detail-container">
        <span class="city">Trójmiasto</span>
        <span class="price">150zł netto</span>
      </div>
      <div class="detail-container">
        <span class="city">Trójmiasto +20km</span>
        <span class="price">250zł netto</span>
      </div>
      <div class="detail-container">
        <span class="city">Trójmiasto +50km</span>
        <span class="price">350zł netto</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.outer-container {
  width: 100%;
  text-align: center;
  margin-top: 176px;
  margin-bottom: 181px;

  .title {
    font-size: 32px;
    line-height: 38.4px;

    @media screen and (max-width: 870px) {
      display: inline-block;
      padding-bottom: 20px;
    }
  }

  .inner-container {
    display: flex;
    justify-content: center;
    column-gap: 70px;
    flex-wrap: wrap;
    padding-left: $mobile-horizontal-padding;
    padding-right: $mobile-horizontal-padding;

    @media screen and (max-width: 870px) {
      row-gap: 50px;
    }

    .detail-container {
      display: flex;
      flex-direction: column;

      .city {
        font-weight: 400;
        line-height: 22.4px;
      }

      .price {
        font-size: 32px;
        line-height: 38.4px;
      }
      &:first-child {
        text-align: left;

        .city {
          padding-left: 5px;
        }
      }

      &:last-child {
        text-align: right;

        .city {
          padding-right: 10px;
        }
      }

      @media screen and (max-width: 870px) {
        .city {
          text-align: center;
        }
      }
    }
  }
}
</style>
