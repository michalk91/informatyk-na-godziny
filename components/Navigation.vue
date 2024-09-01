<template>
  <nav :class="{ 'without-hamburger': withoutHamburgerMenu }">
    <div
      @click.stop="handleToggleOpen"
      :class="{
        menuToggle: !withoutHamburgerMenu,
      }"
    >
      <div v-if="!withoutHamburgerMenu">
        <input ref="checkbox" type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      v-if="!withoutHamburgerMenu"
      class="background"
      :class="{ 'transparent-background': scrolledDown }"
    ></div>
    <ul
      :class="{
        showNav: menuOpen && !withoutHamburgerMenu,
      }"
    >
      <li v-for="item of items" @click.stop="setScreen(item.id)">
        {{ item.text }}
      </li>
      <li>
        <slot name="last-item"></slot>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useIsScrolledDown } from "#imports";
import { useScrollLock } from "#imports";

const scrolledDown = shallowRef(false);
const checkbox = shallowRef<null | HTMLInputElement>(null);
const store = useScreenStore();
const menuOpen = shallowRef(false);

useIsScrolledDown(scrolledDown);

const { lockScroll, unlockScroll } = useScrollLock({
  withoutScrollCompensation: true,
});

defineProps<{
  items: { text: string; id: string }[];
  withoutHamburgerMenu?: boolean;
}>();

function handleToggleOpen() {
  menuOpen.value = !menuOpen.value;
}

function setScreen(screenName: string) {
  store.setSelectedScreen({ name: screenName });
}

const screenName = useScreenStore();

watch(menuOpen, () => {
  menuOpen.value ? lockScroll() : unlockScroll();
});

watch(screenName.selectedScreen, () => {
  menuOpen.value = false;
  if (checkbox.value) checkbox.value.checked = false;
});
</script>

<style scoped lang="scss">
nav {
  &.without-hamburger {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      column-gap: 40px;
      row-gap: 20px;
      transition: 0.4s;
      position: relative;
      z-index: 7;
      padding-inline-start: 0px;
      column-gap: 40px;

      li {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        line-height: 17.07px;

        &:hover {
          cursor: pointer;
          color: #ffa500;
        }
      }
    }
  }
  &:not(.without-hamburger) {
    .showNav {
      transform: translate(-50%, 0);

      .without-hamburger {
        padding: 0;
        margin: 0;
      }
    }
    .transparent-background {
      background-color: rgba(47, 47, 82, 1);
      border-bottom: 1px solid white;
    }

    .background {
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transition: 0.5s;

      @media screen and (max-width: 1150px) {
        background-color: rgba(47, 47, 82, 1);
        border-bottom: 1px solid white;
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
      column-gap: 40px;
      row-gap: 20px;
      transition: 0.4s;
      position: relative;
      z-index: 7;
      padding-inline-start: 0px;
      padding: 32px 102px 32px 0;
      column-gap: 40px;
      row-gap: 50px;

      @media screen and (max-width: 1150px) {
        flex-direction: column;
        position: absolute;
        align-items: center;
        width: 100%;
        top: 100%;
        left: 50%;
        padding-right: 0;
        padding-top: 50px;
        margin: 0;
        transform: translate(-50%, -100%);
        background-color: #5e607a;
        z-index: 2;
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
}
</style>
