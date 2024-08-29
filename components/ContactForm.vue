<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name" aria-hidden="true" aria-label="name and surrname"
        >Imię i nazwisko:</label
      >
      <input
        type="text"
        id="name"
        placeholder="Imię i nazwisko"
        v-model="formData.nameAndSurname"
        :class="{ 'invalid-input': errorMessages.nameAndSurname !== '' }"
      />
    </div>
    <div>
      <label for="email" aria-hidden="true" aria-label="email">Email:</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        v-model="formData.email"
        :class="{ 'invalid-input': errorMessages.email !== '' }"
      />
    </div>
    <div>
      <label for="phone-number" aria-hidden="true" aria-label="phone number"
        >Nr telefonu:</label
      >
      <input
        type="tel"
        placeholder="Nr telefonu"
        id="phone"
        v-model="formData.tel"
        :class="{ 'invalid-input': errorMessages.tel !== '' }"
      />
    </div>
    <div>
      <label for="message" aria-hidden="true" aria-label="message"
        >Wiadomość:</label
      >
      <textarea
        id="message"
        placeholder="Wiadomość"
        rows="3"
        v-model="formData.message"
        :class="{ 'invalid-input': errorMessages.message !== '' }"
      ></textarea>
    </div>

    <ActionButton type="submit" text="Wyślij" additionalClass="submit-btn" />
    <Consent />
  </form>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";

interface FormErrors {
  nameAndSurname: string;
  email: string;
  tel: string;
  message: string;
}

interface FormData {
  nameAndSurname: string;
  email: string;
  tel: string;
  message: string;
  error: boolean;
}

const formData = shallowReactive<FormData>({
  nameAndSurname: "",
  email: "",
  tel: "",
  message: "",
  error: false,
});

const errorMessages = shallowReactive<FormErrors>({
  nameAndSurname: "",
  email: "",
  tel: "",
  message: "",
});

const resetErrorMessages = () => {
  (Object.keys(errorMessages) as Array<keyof FormErrors>).forEach((key) => {
    errorMessages[key] = "";
  });
};

function validateForm() {
  resetErrorMessages();

  const nameAndSurnameRegex =
    /^(?=.*\s)([A-Za-zÀ-ÿąćęłńóśźż][A-Za-zÀ-ÿąćęłńóśźż ',-]*[A-Za-zÀ-ÿąćęłńóśźż]){2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const telRegex = /^(\+?\d{1,3}[- ]?)?\(?\d{2,3}\)?[- ]?\d{3}[- ]?\d{3}$/;
  const messageRegex = /^.{10,}$/;

  if (!nameAndSurnameRegex.test(formData.nameAndSurname)) {
    errorMessages.nameAndSurname = "Imię i nazwisko są wymagane.";
    formData.error = true;
  }

  if (!emailRegex.test(formData.email)) {
    errorMessages.email = "Podaj poprawny adres e-mail.";
    formData.error = true;
  }

  if (!telRegex.test(formData.tel)) {
    errorMessages.tel = "Podaj poprawny numer telefonu.";
    formData.error = true;
  }

  if (!messageRegex.test(formData.message)) {
    errorMessages.message = "Wiadomość nie może być pusta.";
    formData.error = true;
  }
}

function handleSubmit() {
  validateForm();

  if (formData.error) {
    (Object.keys(errorMessages) as Array<keyof FormErrors>).forEach((key) => {
      if (errorMessages[key]) {
        formData[key] = errorMessages[key];
      }

      formData.error = false;
    });
  } else {
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      if (key !== "error") {
        formData[key] = "";
      }
    });

    toast.success("Wiadomość została pomyślnie wysłana", {
      autoClose: 2000,
      position: "bottom-right",
      theme: "light",
    });
  }
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::placeholder {
    color: #64647f;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  label {
    display: none;
  }

  .invalid-input {
    border: 1px solid red;
  }

  input,
  textarea {
    color: #64647f !important;
    background-color: white;
    width: 100%;
    border: 1px solid #e6e6f0;
    border-radius: 8px;
    padding: 12px 20px 12px 20px;
  }
}
</style>
