<template>
  <div class="container">
    <div class="name-price-container">
      <span class="name">{{ name }}</span>
      <div class="price-container">
        <span class="price">{{ price }}</span>
        <span class="currency">zł/h netto*</span>
      </div>
    </div>
    <div class="list-container">
      <div class="paragraph" v-for="item of detailsList" :key="item">
        <div
          class="icon"
          :class="{
            'icon-blue': iconsColor === 'blue',
            'icon-orange': iconsColor === 'orange',
          }"
        >
          <NuxtPicture src="/images/icons/check_mark.svg" alt="check mark" />
        </div>
        <p>{{ item }}</p>
      </div>
      <p class="started-hour">*Każda rozpoczęta godzina</p>
    </div>
    <div class="btn-container">
      <slot name="button" />
    </div>
    <div
      class="ellipse"
      :class="{
        'ellipse-blue': backgroundEllipseColor === 'blue',
        'ellipse-orange': backgroundEllipseColor === 'orange',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  price: string;
  iconsColor: "orange" | "blue";
  backgroundEllipseColor: "orange" | "blue";
  detailsList: string[];
}>();
</script>

<style scoped lang="scss">
.container {
  position: relative;
  border: 2px solid white;
  width: 634px;
  min-height: 565px;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.22);
  border-image-slice: 1;

  .btn-container {
    position: relative;
    z-index: 2;
    width: 100%;
    padding-left: 38px;
    padding-right: 38px;
    padding-top: 41px;
    padding-bottom: 41px;

    button {
      width: 100%;
    }
  }

  .ellipse {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(15%, 0);
  }
  .ellipse-orange {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 124, 95, 0.492) 0%,
      rgba(255, 124, 95, 0) 100%
    );
  }

  .ellipse-blue {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(104, 46, 228, 0.6) 0%,
      rgba(104, 46, 228, 0) 100%
    );
  }

  .list-container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 38px;
    padding-right: 38px;
    padding-top: 37px;
    text-align: left;
    font-size: 1.25rem;
    line-height: 28px;

    .paragraph {
      display: flex;
      align-items: center;
      align-items: center;

      p {
        padding-left: 12px;
        margin-top: 0;
        margin-bottom: 0;

        @media screen and (max-width: 620px) {
          font-size: 1.1rem;
        }
      }

      .icon {
        display: flex;
        justify-content: center;
        height: 21.96px;
        width: 21.96px;
        border-radius: 50%;
      }

      .icon-orange {
        background-color: #ff7c5f;
      }

      .icon-blue {
        background-color: #682ee4;
      }
    }
    .started-hour {
      margin-top: 33px;

      @media screen and (max-width: 620px) {
        font-size: 3vw;
      }
    }
  }

  .name-price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 38px;
    padding-right: 18px;
    padding-top: 29px;

    .name {
      font-size: 2.125rem;
      line-height: 47.6px;

      @media screen and (max-width: 620px) {
        font-size: 6vw;
      }
    }

    .price-container {
      @media screen and (max-width: 620px) {
        margin-top: -25px;
      }

      .price {
        font-size: 4rem;
        line-height: 89.6px;

        @media screen and (max-width: 620px) {
          font-size: 8vw;
        }
      }
      .currency {
        font-size: 1rem;
        line-height: 22.4px;
      }
    }
  }
}
</style>
