<template>
  <section ref="sectionRef">
    <ServicesScreenAbout />
    <div class="numbers-wrapper"><ServicesScreenNumbers /></div>
    <div class="image-wrapper">
      <NuxtPicture src="/images/map.png" alt="map" class="image" />
    </div>
    <ServicesScreenArea />
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
    screenName: "services",
    block: "start",
  });
});
</script>

<style scoped lang="scss">
.image::v-deep(img) {
  @include fit-image-to-container;
}
section {
  display: grid;
  scroll-margin-top: 200px;
  margin-top: 148px;
  max-width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: $horizontal-padding;
  padding-right: 247px;
  row-gap: 109px;
  column-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 650px));

  @media screen and (max-width: 1050px) {
    padding-left: $mobile-horizontal-padding;
    padding-right: $mobile-horizontal-padding;
  }

  @media screen and (max-width: 750px) {
    margin-top: 70px;
  }

  .numbers-wrapper {
    @media screen and (max-width: 655px) {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }

  .image-wrapper {
    padding-right: 104px;

    @media screen and (max-width: 1357px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
