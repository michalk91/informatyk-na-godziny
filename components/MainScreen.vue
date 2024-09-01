<template>
  <section ref="sectionRef" class="outer-wrapper">
    <div class="wrapper">
      <MainScreenTitle />
      <MainScreenBackgroundImage />
    </div>
    <MainScreenPartnersSection />
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
    screenName: "about",
    block: "start",
  });
});
</script>

<style scoped lang="scss">
.outer-wrapper {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100vw;
  max-width: 100%;
}
.wrapper {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  max-height: 917px;

  @media screen and (max-width: 650px) {
    min-height: 100vh;
  }
}
</style>
