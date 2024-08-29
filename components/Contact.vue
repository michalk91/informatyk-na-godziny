<template>
  <section class="container">
    <div class="inner-container">
      <div class="form-container">
        <span class="title">Skontaktuj się z nami</span>
        <p class="subtitle">
          Zadzwoń, lub zostaw wiadomość poprzez formularz, odpowiemy najszybciej
          jak to możliwe.
        </p>
        <div class="phone-container">
          <NuxtPicture src="/images/icons/gray_telephone.png" />
          <a href="tel:+48 58 500 80 10">+48 58 500 80 10</a>
        </div>
        <ContactForm />
      </div>
      <div class="overlay">
        <NuxtPicture
          src="/images/cropped_map.png"
          alt="Cropped map"
          class="image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  margin-bottom: 186px;
  width: 100%;
  max-width: 100%;
  padding-left: $horizontal-padding;
  padding-right: $horizontal-padding;

  @media screen and (max-width: 1650px) {
    display: flex;
    justify-content: center;
    padding-left: $mobile-horizontal-padding;
    padding-right: $mobile-horizontal-padding;
  }

  .inner-container {
    display: flex;
    overflow: hidden;
    position: relative;
    max-width: 1319px;
    background: linear-gradient(
      189.38deg,
      #cecede -11.93%,
      #fcfcff 30.89%,
      #ffffff 70.5%
    );
    box-shadow: 0px 141px 200px -80px #193a4b4d;
    border-radius: 16px;

    .overlay {
      display: flex;
      align-items: center;
      background-color: #555574;
      max-width: 553px;

      @media screen and (max-width: 1650px) {
        display: none;
      }

      .image::v-deep(img) {
        transform: translateY(6%);
        user-select: none;
        width: 100%;
        max-width: 100%;
        height: auto;
      }
    }

    .form-container {
      margin: 91px 150px 36px 150px;
      max-width: 513px;
      margin-bottom: 69px;

      @media screen and (max-width: 970px) {
        margin: 70px;
      }

      @media screen and (max-width: 490px) {
        margin: 50px;
      }

      .submit-btn {
        padding: 20px 0;
      }

      .subtitle {
        color: #64647f;
        font-size: 14px;
        font-weight: 24px;
      }

      .phone-container {
        display: flex;
        align-content: center;
        margin-top: 16px;
        margin-bottom: 16px;

        a {
          color: #39395c;
          font-size: 20px;
          line-height: 24px;
          text-decoration: none;
        }
      }

      .title {
        color: #39395c;
        font-weight: 700;
        font-size: 40px;
        line-height: 48.76px;
      }
    }
  }
}
</style>
