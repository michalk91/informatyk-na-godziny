<template>
  <div class="outer-wrapper">
    <h4>Profesjonalne usługi IT dla małych firm i urzędów</h4>
    <p>
      Potrzebujesz wsparcia IT bez długoterminowych zobowiązań? "Informatyk na
      godziny" oferuje elastyczne usługi IT, dostosowane do Twoich potrzeb.
      Skorzystaj z naszej profesjonalnej pomocy, dostępnej również w mikro
      abonamentach.
    </p>
    <p>
      Zapewniamy jakość i bezpieczeństwo, potwierdzone certyfikatem ISO 27001.
      Dzięki nam, Twoje systemy IT będą znowu sprawne, a Ty możesz skupić się na
      prowadzeniu biznesu.
    </p>
    <div class="inner-wrapper">
      <NuxtPicture
        src="/images/icons/iso_27001.png"
        preload
        width="90px"
        height="90px"
        alt="Iso 27001 logo"
        class="icon"
      />
      <span class="title"> Certyfikat ISO 27001 </span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.outer-wrapper {
  h4 {
    padding-bottom: 23px;
    margin: 0;
    font-size: 2.75rem;
    line-height: 57.2px;

    @media screen and (max-width: 420px) {
      font-size: 2.2rem;
      line-height: 50px;
    }

    @media screen and (max-width: 350px) {
      font-size: 2rem;
      line-height: 45px;
    }
  }
  p {
    color: $tertiary-text;
    margin-top: 0;
    line-height: 22.4px;
    padding: 0;
  }
  .inner-wrapper {
    max-width: 632px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;

    .title {
      color: $tertiary-text;
      font-size: 24px;
      line-height: 16.4px;

      @media screen and (max-width: 330px) {
        line-height: 26px;
      }
    }
  }
}
</style>
