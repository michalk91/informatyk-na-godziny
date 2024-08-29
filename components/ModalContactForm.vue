<template>
  <div class="outer-wrapper">
  <div class="wrapper">
    <span class="title">Szczegóły zamówienia</span>
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
        <input id="post-code" placeholder="Kod pocztowy" required></input>
      </div>
      <div>
        <label for="city">Miejscowość:</label>
        <input id="city" placeholder="Miejscowość" required></input>
      </div>
    </div>
    <Consent />
    </form>

  </div>
  <div class="outer-time-container">
  <div class="time-container">
      <div class="inner-time-container">
        <div><span>{{ store.role.type}}</span>
        <p>*Każda rozpoczęta godzina</p>
      </div>
        <div><span>{{ store.role.price }}</span>
          <p>zł/h netto*</p>
        </div>
      </div>
      <div>

  </div>

    </div>
    <div class="caption">
        <span>Wypełnij formularz, a nasz specjalista skontaktuje się najszybciej jak to możliwe.</span>
        <p>Orientacyjny czas podjęcia działań</p>
        <div>
          <NuxtPicture
           src="/images/logos/time_logo.svg"
           alt="map"
           class="image"

  />
          <p class="waiting-time">{{waitingTime}}</p>
        </div>
      </div>
      <div class="btn-container">
  <ActionButton additionalClass="btn-white" text="Anuluj"/>
  <ActionButton text="Zamów"/>
</div>
  </div>

</div>

</template>

<script setup lang="ts" >
const store = useRoleStore();




   const startHour = 8;
    const endHour = 16;

    const isCurrentTimeBetween = (startHour: number, endHour: number) => {
      const currentHour = new Date().getHours();
      return currentHour >= startHour && currentHour < endHour;
    };

    const waitingTime = computed(() => {
      return isCurrentTimeBetween(startHour, endHour)
        ? "do 30 minut"
        : "do 12 godz.";
    });
</script>

<style scoped lang="scss">
.outer-wrapper{
  display: flex;
  background-color: white;
  max-width: 433px;
  width: 939px;
  height: 607px;
  max-width: 100%;
  border-radius: 8px;
  padding: 48px;
  gap: 36px;

  .caption{

    div{
      display: flex;
    }

    .waiting-time{
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 700;
    line-height: 34.13px;
    color: #39395C


  }

span{
 display: inline-block;
 color: #39395C;
 margin-top: 44px;
 margin-bottom: 19px;
 font-size: 16px;
 font-weight: 500;
 line-height: 19.5px;}


  }

  p{
font-size: 16px;
font-weight: 400;
line-height: 19.5px;
    color: #7B7B7B;

  }

.wrapper {
  display: flex;
  flex-direction: column;
  min-width: 433px;


  .title{
  color: #39395C;
  font-size: 32px;
  font-weight: 600;
  line-height: 35.2px;
  margin-bottom: 33px;


  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 433px;

    .city-container{
      display: flex;
      gap:18px;
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


}

.outer-time-container{
  display: flex;
  flex-direction: column;
  width: 100%;


  .btn-container{
display: flex;
margin-top: 95px;
justify-content: flex-end;
gap: 15px;

.btn-white{
  background-color:  #CACACA
}

button{
  width: 100%;
  font-weight: 600;
}
}

.inner-time-container{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 12px 19px;


  span{
   color: #39395C;
  font-size: 24px;
  font-weight: 700;
   line-height: 33.6px;
  }

  p{
font-size: 10px;
font-weight: 400;
line-height: 14px;
color: #7B7B7B;
padding-top: 7px;
padding-bottom: 21px;
margin: 0;
  }




}

.time-container{
display: flex;
justify-content: space-between;
width: 100%;
height: 88px;
border-radius: 8px ;
border: 1px solid #E44F2E


}}



}
</style>
