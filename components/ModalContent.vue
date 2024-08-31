<template>
  <div class="container">
    <span class="title">Szczegóły zamówienia</span>
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        <ModalContentContactForm />
      </div>
      <div class="service-details">
        <ModalContentPrice :role="role.type" :price="role.price" />
        <ModalContentTime />

        <div class="btns-container">
          <ActionButton additionalClass="btn-white" text="Anuluj" />
          <ActionButton text="Zamów" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { role } = useRoleStore();
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  max-width: 433px;
  width: 939px;
  height: 607px;
  max-width: 100%;
  border-radius: 8px;
  padding: 36px 50px;

  .title {
    color: #39395c;
    font-size: 32px;
    font-weight: 600;
    line-height: 35.2px;
  }

  .outer-wrapper {
    display: flex;
    height: 100%;
    gap: 36px;
    padding-top: 33px;
    padding-bottom: 36px;

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 19.5px;
      color: #7b7b7b;
    }

    .inner-wrapper {
      display: flex;
      flex-direction: column;
      min-width: 433px;
    }

    .service-details {
      display: flex;
      flex-direction: column;
      width: 100%;

      .btns-container {
        display: flex;
        align-items: flex-end;
        height: 100%;
        gap: 15px;

        .btn-white {
          background-color: #cacaca;
        }

        button {
          width: 100%;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
