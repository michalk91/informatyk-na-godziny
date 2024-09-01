<template>
  <Modal :isOpen="isOpen" @closeModal="handleCloseModal">
    <ModalContent @closeModal="handleCloseModal" />
  </Modal>
  <section ref="sectionRef" class="wrapper" @click="handleOpenModal">
    <PriceScreenCard
      name="Informatyk"
      price="160"
      iconsColor="orange"
      backgroundEllipseColor="orange"
      :detailsList="[...ITSepcialistDetails]"
    >
      <template #button>
        <ActionButton
          text="Zamów Informatyka"
          additionalClass="full-width"
          data-role="Informatyk"
        />
      </template>
    </PriceScreenCard>
    <PriceScreenCard
      name="Administrator"
      price="220"
      iconsColor="blue"
      backgroundEllipseColor="blue"
      :detailsList="[...adminDetails]"
    >
      <template #button>
        <ActionButton
          text="Zamów Administratora"
          additionalClass="full-width blue-background"
          data-role="Administrator"
        />
      </template>
    </PriceScreenCard>
  </section>
</template>

<script setup lang="ts">
import useScrollLock from "~/composables/useScrollLock";
import useScrollToSection from "~/composables/useScrollToSection";

const sectionRef = ref<null | HTMLElement>(null);

const screenName = useScreenStore();

onMounted(() => {
  useScrollToSection({
    elemRef: sectionRef.value,
    screenStore: screenName,
    screenName: "prices",
    block: "start",
  });
});

const { lockScroll, unlockScroll } = useScrollLock({});

const store = useRoleStore();

const isOpen = ref(false);

const ITSepcialistDetails = [
  "Drukarki",
  "Skanery",
  "Poczta elektroniczna",
  "Oprogramowanie biurowe",
  "Antywirus",
  "System MS Windows 7-11",
];

const adminDetails = [
  "Serwery",
  "Sieci",
  "Wirtualizacja",
  "Active Directory",
  "Bezpieczeństwo IT",
  "Telefonia VoIP",
];

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
    store.updateRole({ type: role, price: 160 });
  } else if (role === "Administrator") {
    store.updateRole({ type: role, price: 260 });
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  scroll-margin-top: 190px;
  gap: 52px;
  justify-content: center;
  padding-left: $mobile-horizontal-padding;
  padding-right: $mobile-horizontal-padding;
}

.full-width {
  width: 100%;
}

.blue-background {
  background-color: #682ee4;

  &:hover {
    background-color: #5a1cbd;
  }
}
</style>
