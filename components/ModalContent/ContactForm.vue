<template>
  <form>
    <div>
      <label for="company-name">Imię:</label>
      <input id="company-name" type="text" placeholder="Nazwa firmy" required />
    </div>
    <div>
      <label for="email-modal">Nazwisko:</label>
      <input id="email-modal" type="email" placeholder="Email" required />
    </div>
    <div>
      <label for="phone-modal">Telefon:</label>
      <input id="phone-modal" type="tel" placeholder="Nr telefonu" required />
    </div>

    <div class="city-container">
      <div>
        <label for="post-code">Kod pocztowy: </label>
        <input id="post-code" placeholder="Kod pocztowy" required />
      </div>
      <div>
        <label for="city">Miejscowość:</label>
        <input id="city" placeholder="Miejscowość" required />
      </div>
    </div>
    <Consent />
  </form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 433px;

  @media screen and (max-width: 585px) {
    gap: 10px;
  }

  .city-container {
    display: flex;
    gap: 18px;

    @media screen and (max-width: 735px) {
      gap: 10px;
    }
  }

  div {
    label {
      display: none;
    }

    input {
      width: 100%;
      height: 50px;
      padding: 12px 20px 12px 20px;
      gap: 10px;
      border-radius: 8px;
      border: 1px solid #e6e6f0;
    }
  }
}
</style>
