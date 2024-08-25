<template>
  <div class="wrapper">
    <header>
      <Logo />
      <Navigation :items="navItems">
        <template #last-item>
          <ActionButton text="Zamów Informatyka" />
        </template>
      </Navigation>
    </header>

    <slot />
  </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  position: relative;
  z-index: 5;
}
.wrapper * {
  color: white;
}
.wrapper {
  position: relative;
  max-width: 100%;
  font-family: "Montserrat";
  min-height: 100vh;
  background: $background-color;
}
</style>
