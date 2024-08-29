<template>
  <div class="wrapper">
    <Modal :isOpen="isOpen" @closeModal="handleCloseModal">
      <ModalContactForm />
    </Modal>
    <PriceScreenCard
      name="Informatyk"
      price="160"
      iconsColor="orange"
      backgroundEllipseColor="orange"
      :detailsList="[...ITSepcialistDetails]"
    >
      <template #button>
        <ActionButton
          @click="handleRole"
          text="Zamów Informatyka"
          additionalClass="full-width"
          @handleClick="handleOpenModal"
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
          @click="handleRole"
          text="Zamów Administratora"
          additionalClass="full-width blue-background"
          @handleClick="handleOpenModal"
        />
      </template>
    </PriceScreenCard>
  </div>
</template>

<script setup lang="ts">
const store = useRoleStore();

function handleRole(e: MouseEvent) {
  const role = (e.target as HTMLElement).textContent;

  if (role === "Zamów Informatyka") {
    store.updateRole({ type: role, price: 160 });
  } else if (role === "Zamów Administratora") {
    store.updateRole({ type: role, price: 260 });
  }
}

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

function handleOpenModal() {
  isOpen.value = true;
}

function handleCloseModal() {
  isOpen.value = false;
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
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
