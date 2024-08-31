<template>
  <div class="outer-price-container">
    <div class="inner-price-container">
      <div>
        <span class="role-type">{{ role }}</span>
        <p class="every-hour">*Każda rozpoczęta godzina</p>
      </div>
      <div class="price-container">
        <span class="price"
          >{{ price }}
          <p class="currency">zł/h netto*</p></span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  role: string;
  price: number;
}>();
</script>

<style scoped lang="scss">
.outer-price-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 88px;
  border-radius: 8px;
  border: 1px solid #e44f2e;

  @media screen and (max-width: 735px) {
    height: 65px;
  }
}
.inner-price-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 12px 19px;

  @media screen and (max-width: 735px) {
    margin: 5px 12px;
  }

  .price-container {
    text-align: right;
  }

  span,
  p {
    color: #39395c;
  }

  .price,
  .currency,
  .role-type {
    font-weight: 700;
  }

  .price {
    font-size: 30px;
  }

  span {
    font-size: 24px;
    line-height: 33.6px;
  }
  .currency {
    font-size: 10px;
    margin-top: -5px;
  }
  .every-hour {
    color: #7b7b7b;
    font-weight: 400;
  }

  .role-type {
    padding-bottom: 7px;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    padding-bottom: 21px;
    margin: 0;
  }
}
</style>
