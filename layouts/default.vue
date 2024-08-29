<template>
  <div class="wrapper">
    <LayoutHeader />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper * {
  color: $primary-text;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}

.wrapper {
  max-width: 100%;
  position: relative;
  width: 100vw;
  background: $background-color;
  padding-bottom: 223px;

  main {
    width: 100%;
  }
}
</style>
