<template>
  <Modal :isOpen="isOpen" @closeModal="handleCloseModal">
    <ModalContent @closeModal="handleCloseModal" />
  </Modal>
  <section ref="sectionRef" class="outer-wrapper">
    <div class="wrapper">
      <MainScreenTitle @openModal="handleOpenModal" />
      <MainScreenBackgroundImage />
    </div>
    <MainScreenPartnersSection />
  </section>
</template>

<script setup lang="ts">
import useScrollToSection from "~/composables/useScrollToSection";
import useScrollLock from "~/composables/useScrollLock";

const roleStore = useRoleStore();
const isOpen = ref(false);
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

const { lockScroll, unlockScroll } = useScrollLock({
  withoutScrollCompensation: false,
});

function handleOpenModal(e: MouseEvent) {
  if ((e.target as HTMLElement).tagName !== "BUTTON") return;

  lockScroll();

  handleRole(e);
  isOpen.value = true;
}

function handleCloseModal() {
  isOpen.value = false;

  setTimeout(() => unlockScroll(), 500);
}

function handleRole(e: MouseEvent) {
  const role = (e.target as HTMLElement).dataset.role;

  if (role === "Informatyk") {
    roleStore.updateRole({ type: role, price: 160 });
  } else if (role === "Administrator") {
    roleStore.updateRole({ type: role, price: 260 });
  }
}
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
