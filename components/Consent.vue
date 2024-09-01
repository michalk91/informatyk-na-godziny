<template>
  <div class="consent-container">
    <details>
      <summary>
        <label>
          <input class="checkbox" type="checkbox" />
        </label>
        <span
          >Wyrażam zgodę na przetwarzanie przez Inprox sp. z o.o. sp. k. z
          siedzibą w Gdańsku

          <span class="custom-marker">Rozwiń</span>
          <NuxtPicture
            src="/images/icons/arrow_down.png"
            alt="Downward arrow icon indicating a drop or collapse action"
            class="image"
            width="9.68"
            height="6.0"
        /></span>
      </summary>
      <p>
        Wyrażam zgodę na przetwarzanie przez Inprox sp. z o.o. sp. k. z siedzibą
        w Gdańsku podanych danych w celu przesłania Państwu odpowiedzi na
        zapytanie, przesłanie oferty, usług Spółki, a w końcu realizacji umowy o
        świadczenie usług przez Spółkę. Podanie danych jest dobrowolne, ale
        niezbędne do przetworzenia zapytania.
      </p>
    </details>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.image::v-deep(img) {
  color: #7b7b7b;
  padding: 0 5px;
  height: 6px;
}
.consent-container {
  width: 100%;
  max-width: 100%;
  text-align: left;

  details {
    summary {
      display: flex;
      align-content: center;
      max-width: 100%;

      span {
        color: #7b7b7b;
      }

      .inner-consent-container {
        display: flex;
      }

      label {
        .checkbox {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 8px;
          accent-color: #555574;
        }
      }

      .custom-marker {
        color: #7b7b7b;
        font-size: 12px;
        font-weight: 700;
        line-height: 16.8px;

        &:hover {
          cursor: pointer;
        }
      }

      &:hover {
        cursor: pointer;
      }

      &::marker {
        display: none;
        content: none;
      }

      &::-webkit-details-marker {
        display: none;
        content: none;
      }
    }

    summary,
    p {
      color: #7b7b7b;
      font-size: 12px;
      font-weight: 400;
      line-height: 16.8px;
    }
  }
}
</style>
