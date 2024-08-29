<template>
  <nav :class="{ 'without-hamburger': withoutHamburgerMenu }">
    <div
      @click.stop="handleClick"
      :class="{
        menuToggle: !withoutHamburgerMenu,
      }"
    >
      <div v-if="!withoutHamburgerMenu">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div :class="{ background: !withoutHamburgerMenu }"></div>
    <ul
      :class="{
        showNav: menuOpen,
        'without-hamburger': withoutHamburgerMenu,
      }"
    >
      <li v-for="item of items">
        {{ item.text }}
      </li>
      <li>
        <slot name="last-item"></slot>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: { text: string }[];
  withoutHamburgerMenu?: boolean;
}>();

const menuOpen = shallowRef(false);

function handleClick() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped lang="scss">
nav {
  .showNav {
    .without-hamburger {
      padding: 0;
      margin: 0;
    }

    &:not(.without-hamburger) {
      transform: translate(-50%, 0);
    }
  }

  .background {
    @media screen and (max-width: 1150px) {
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: $background-color;
    }
  }

  .menuToggle {
    display: none;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 1150px) {
      display: block;
      -webkit-user-select: none;
      user-select: none;
      padding: 32px 102px 32px 32px;

      @media screen and (max-width: 510px) {
        padding: 40px 40px 40px 40px;
      }

      input {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        opacity: 0;
        z-index: 7;
        -webkit-touch-callout: none;

        &:checked ~ span:nth-child(2) {
          opacity: 1;
          transform: translateY(11px) rotate(45deg);
        }
        &:checked ~ span:nth-child(3) {
          opacity: 0;
          transform: rotate(0deg) translateX(5px);
        }

        &:checked ~ span:nth-child(4) {
          transform: translateY(-11px) rotate(-45deg);
        }
      }
      span {
        display: block;
        width: 40px;
        height: 5px;
        margin-bottom: 6px;
        position: relative;
        background: #cdcdcd;
        border-radius: 3px;
        z-index: 6;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 40px;
    transition: 0.4s;
    position: relative;
    z-index: 7;
    padding-inline-start: 0px;

    &:not(.without-hamburger) {
      padding: 32px 102px 32px 0;
    }

    &:not(.without-hamburger) {
      @media screen and (max-width: 1150px) {
        flex-direction: column;
        position: absolute;
        align-items: center;
        width: 100%;
        top: 100%;
        left: 50%;
        padding-right: 0;
        margin: 0;
        transform: translate(-50%, -100%);
        background-color: #5e607a;
        z-index: 2;
      }
    }

    li {
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
        color: #ffa500;
      }
    }
  }
}
</style>
