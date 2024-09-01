<template>
  <footer>
    <div class="logo-container">
      <Logo additionalClass="logo" />
    </div>
    <div class="nav-container">
      <Navigation :items="navItems" withoutHamburgerMenu>
        <template #last-item>
          <div class="tan-viewer-container">
            <NuxtPicture
              src="/images/logos/tam_viewer.png"
              preload
              width="20"
              height="20"
              alt="main logo"
              class="icon"
            />
            <span class="text">Pobierz TamViewer</span>
          </div>
        </template>
      </Navigation>
      <span>Należymy do <span class="inprox">Inprox Sp. z o.o</span></span>
    </div>
    <div class="copyright-container">
      <p class="privacy-policy-text">Polityka prywatności</p>
      <p class="copyright">Inprox © 2024. All right reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navItems = [
  { text: "O nas", id: "about" },
  { text: "Usługi", id: "services" },
  { text: "Cennik", id: "prices" },
  { text: "FAQ", id: "faq" },
  { text: "Kontakt", id: "contact" },
];
</script>

<style scoped lang="scss">
footer {
  display: block;
  position: relative;
  z-index: 1;
  padding-left: $horizontal-padding;
  padding-right: $horizontal-padding;
  height: 260px;
  width: 100%;

  @media screen and (max-width: 1300px) {
    padding-left: $mobile-horizontal-padding;
    padding-right: $mobile-horizontal-padding;
  }

  .logo-container {
    padding-bottom: 61px;

    @media screen and (max-width: 1460px) {
      padding-bottom: 40px;
    }
  }

  .nav-container {
    display: flex;
    border-bottom: 1px solid #e4e8ec;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    column-gap: 60px;
    row-gap: 40px;
    flex-wrap: wrap;

    span {
      font-size: 16px;
      font-weight: 700;
      line-height: 19.5px;
      font-style: italic;

      @media screen and (max-width: 1522px) {
        width: 100%;
        text-align: right;
      }

      .inprox {
        font-style: normal;
      }
    }

    .tan-viewer-container {
      display: flex;
      align-items: center;
      gap: 10px;

      .text {
        font-size: 14px;
        line-height: 24px;
        color: #84cbff;
        font-style: normal;

        &:hover {
          text-decoration: underline;
          transition: color 0.3s;
        }
      }

      picture {
        display: flex;
      }
    }
  }

  .logo::v-deep(img) {
    margin: 0;
  }

  .icon::v-deep(img) {
    width: auto;
    height: 20px;
  }

  .copyright-container {
    display: flex;
    justify-content: space-between;

    .privacy-policy-text {
      color: #e6e6f0;
      padding-top: 28px;
      line-height: 16px;
    }

    .copyright {
      padding-top: 20px;
      color: #e6e6f0;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.2571428716182709px;
      text-align: right;
    }
  }
}
</style>
