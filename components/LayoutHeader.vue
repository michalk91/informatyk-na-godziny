<template>
  <header>
    <Logo />
    <Navigation :items="navItems">
      <template #last-item>
        <ActionButton text="Zamów Informatyka" />
      </template>
    </Navigation>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { text: "O nas" },
  { text: "Usługi" },
  { text: "Cennik" },
  { text: "FAQ" },
  { text: "Kontakt" },
];
</script>

<style scoped lang="scss">
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 5;
}
</style>
