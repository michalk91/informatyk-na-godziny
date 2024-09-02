<template>
  <section ref="sectionRef" class="container">
    <div class="inner-container">
      <div class="form-container">
        <span class="title">Skontaktuj się z nami</span>
        <p class="subtitle">
          Zadzwoń, lub zostaw wiadomość poprzez formularz, odpowiemy najszybciej
          jak to możliwe.
        </p>
        <div class="phone-container">
          <NuxtPicture
            src="/images/icons/gray_telephone.png"
            alt="telephone"
            class="image-telephone"
            height="30"
            width="30"
          />
          <a href="tel:+48 58 500 80 10">+48 58 500 80 10</a>
        </div>
        <ContactScreenContactForm />
      </div>
      <div class="overlay">
        <NuxtPicture
          src="/images/cropped_map.png"
          alt="Cropped map"
          class="image-map"
          width="507"
          height="492"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useScrollToSection from "~/composables/useScrollToSection";

const sectionRef = ref<null | HTMLElement>(null);

const screenName = useScreenStore();

onMounted(() => {
  useScrollToSection({
    elemRef: sectionRef.value,
    screenStore: screenName,
    screenName: "contact",
    block: "start",
  });
});
</script>

<style scoped lang="scss">
.image-telephone::v-deep(img) {
  @include fit-image-to-container;
  height: 30px;

  @media screen and (max-width: 580px) {
    height: 20px;
  }
}

.container {
  margin-bottom: 186px;
  scroll-margin-top: $section-scroll-margin-top;
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
    margin: 0 auto;
    max-width: 1319px;
    overflow: hidden;
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
      padding-top: 140px;
      background-color: #555574;
      max-width: 553px;

      @media screen and (max-width: 1650px) {
        display: none;
        padding-left: $horizontal-padding;
        padding-right: $horizontal-padding;
      }

      .image-map::v-deep(img) {
        min-width: 507px;
      }
    }

    .form-container {
      margin: 91px 150px 36px 150px;
      max-width: 513px;
      margin-bottom: 69px;

      @media screen and (max-width: 1669px) {
        margin: 70px;
      }

      @media screen and (max-width: 490px) {
        margin: 50px;
      }
      @media screen and (max-width: 400px) {
        margin: 45px;
      }

      .submit-btn {
        padding: 20px 0;
      }

      .subtitle {
        color: #64647f;
        font-size: 1rem;
        font-weight: 24px;
      }

      .phone-container {
        display: flex;
        align-content: center;
        margin-top: 16px;
        margin-bottom: 16px;

        a {
          color: #39395c;
          font-size: 1.25rem;
          line-height: 24px;
          text-decoration: none;
        }
      }

      .title {
        color: #39395c;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 48.76px;

        @media screen and (max-width: 550px) {
          font-size: 2.188rem;
          line-height: 40px;
        }

        @media screen and (max-width: 400px) {
          font-size: 2rem;
          line-height: 35px;
        }
      }
    }
  }
}
</style>
