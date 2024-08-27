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

    <main>
      <slot />
    </main>
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
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  z-index: 5;
}
.wrapper * {
  color: $primary-text;
}
.wrapper {
  max-width: 100%;
  width: 100vw;
  font-family: "Montserrat";
  background: $background-color;

  main {
    width: 100%;
  }
}
</style>
