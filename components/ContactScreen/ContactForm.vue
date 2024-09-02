<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input
        type="text"
        id="name"
        aria-label="Imię i nazwisko"
        :placeholder="
          errorMessages.nameAndSurname === ''
            ? 'Imię i nazwisko'
            : errorMessages.nameAndSurname
        "
        v-model="formData.nameAndSurname"
        :class="{ 'invalid-input': errorMessages.nameAndSurname !== '' }"
      />
    </div>
    <div>
      <input
        type="text"
        id="email"
        aria-label="Email"
        :placeholder="
          errorMessages.email === '' ? 'Email' : errorMessages.email
        "
        v-model="formData.email"
        :class="{ 'invalid-input': errorMessages.email !== '' }"
      />
    </div>
    <div>
      <input
        type="tel"
        aria-label="Nr telefonu"
        :placeholder="
          errorMessages.tel === '' ? 'Nr telefonu' : errorMessages.tel
        "
        id="phone"
        v-model="formData.tel"
        :class="{ 'invalid-input': errorMessages.tel !== '' }"
      />
    </div>
    <div>
      <textarea
        id="message"
        aria-label="Wiadomość"
        :placeholder="
          errorMessages.message === '' ? 'Wiadomość' : errorMessages.message
        "
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

interface FormData {
  nameAndSurname: string;
  email: string;
  tel: string;
  message: string;
}

const formData = shallowReactive<FormData>({
  nameAndSurname: "",
  email: "",
  tel: "",
  message: "",
});

const errorMessages = shallowReactive<FormData>({
  nameAndSurname: "",
  email: "",
  tel: "",
  message: "",
});

const resetState = (state: FormData) => {
  (Object.keys(state) as Array<keyof FormData>).forEach((key) => {
    state[key] = "";
  });
};

function validateForm() {
  resetState(errorMessages);

  const validators = {
    nameAndSurname: {
      regex:
        /^(?=.*\s)([A-Za-zÀ-ÿąćęłńóśźż][A-Za-zÀ-ÿąćęłńóśźż ',-]*[A-Za-zÀ-ÿąćęłńóśźż]){2,}$/,
      error: "Imię i nazwisko są wymagane.",
    },
    email: {
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      error: "Podaj poprawny adres e-mail.",
    },
    tel: {
      regex: /^(\+?\d{1,3}[- ]?)?\(?\d{2,3}\)?[- ]?\d{3}[- ]?\d{3}$/,
      error: "Podaj poprawny numer telefonu.",
    },
    message: {
      regex: /^.{10,}$/,
      error: "Wiadomość nie może być pusta.",
    },
  };

  for (const [key, { regex, error }] of Object.entries(validators) as [
    keyof typeof validators,
    { regex: RegExp; error: string }
  ][]) {
    if (!regex.test(formData[key])) {
      errorMessages[key] = error;
    }
  }
}

function handleSubmit() {
  validateForm();

  const anyErrors = Object.values(errorMessages).some((error) => error !== "");

  if (anyErrors) return;
  else {
    toast.success("Wiadomość została pomyślnie wysłana", {
      autoClose: 2000,
      position: "bottom-right",
      theme: "light",
    });

    resetState(formData);
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
    font-size: 0.875rem;
    line-height: 24px;
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
