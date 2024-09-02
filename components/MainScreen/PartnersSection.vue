<template>
  <section>
    <NuxtPicture
      v-for="partner in partnersLogos"
      :key="partner.src"
      :src="partner.src"
      :alt="partner.alt"
      width="240"
      height="109.8"
      fit="contain"
    />
  </section>
</template>

<script setup lang="ts">
const partnersLogos = [
  {
    src: "/images/logos/partners_logos/torell.svg",
    alt: "torell logo",
  },
  {
    src: "/images/logos/partners_logos/interplastic.svg",
    alt: "interplastic logo",
  },
  {
    src: "/images/logos/partners_logos/aw_klima.png",
    alt: "aw klima logo",
  },
  {
    src: "/images/logos/partners_logos/thyssenkrupp.png",
    alt: "thyssenkrupp logo",
  },
  {
    src: "/images/logos/partners_logos/torell.svg",
    alt: "torell logo",
  },
];
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 41px 139px;
  gap: 85.4px;
  min-height: 191px;
  background: linear-gradient(
    89.22deg,
    #cecede 1.05%,
    #ececf4 61.27%,
    #ffffff 116.99%
  );
}
</style>
