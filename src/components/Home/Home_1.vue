<template>
  <div class="section home_1">
    <div class="container-fluid">
      <div class="home_1-row">
        <div class="home_1-row-left">
          <h4>Программирование на заказ: веб-сайты и приложения</h4>
          <h1>22 <br> coders</h1>
          <p>Команда программистов высших категорий и дизайнеры-призеры UX/UI конкурсов.</p>
        </div>
        <div class="home_1-row-right">
          <div class="home_1-row-right-logos">
              <img src="https://stimmt.digital/assets/images/logos/magento-logo.svg" width="114" height="32" alt="Magento 2">
              <img src="https://stimmt.digital/assets/images/logos/wordpress-logo.svg" width="152" height="32" alt="WordPress">
              <img src="https://stimmt.digital/assets/images/logos/laravel-logo.svg" width="117" height="32" alt="Laravel">
              <img src="https://stimmt.digital/assets/images/logos/craft-logo.svg" width="107" height="32" alt="Craft">
          </div>
        </div>
      </div>
      <div class="lines">
        <img src="../../assets/images/home.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Home_1',
}
</script>

<style lang="scss">

.home_1{

    &-row{
      display: flex;
      justify-content: space-between;
      &-left{
        flex: 0 0 31.25%;
        max-width: 31.25%;
        margin-left: 12.5%;
        h4{
          color: #FF1C3B;
          margin: 0 0 3.2rem;
          font-size: 2.4rem;
          line-height: 2.8rem;
          font-weight: 400;
        }
        h1{
          font-size: 12rem;
          line-height: 12rem;
          color: white;
          text-transform: uppercase;
        }
        p{
          font-size:25px ;
          color: white;
        }
      }
      &-right{
        flex: 0 0 25%;
        max-width: 25%;
        &-logos{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }

    .lines{
      position: absolute;
      width: 100%;
      height: 200vh;
      top: 0;
      left: 0;
      overflow: hidden;
      pointer-events: none;
      z-index: 1;
      img{
        position: absolute;
        top: -24rem;
        left: 50%;
        margin-left: -55.2rem;
        z-index: -1;
        max-width: initial;
      }
    }

}
</style>