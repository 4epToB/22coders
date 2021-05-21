<template>
  <div class="section white about_1">
    <div class="container-fluid">
        <div class="row">
            <div class="about_1-row-left">
                <h4>О нас</h4>
                <h1>Мы классные</h1>
                <p>22 специалиста в сфере программирования и управления проектами. Наша команда принимала участие в создании крупных веб-сервисов, нами разработано большое количество модулей для различных мобильных приложений (от служб знакомств до приложений экстренной связи). В составе команды разработчики разного уровня - 2 Senior, 4 Middle, 8 Junior, а также специалисты иных связанных отраслей и помощники, без которых мы не смогли бы работать! Мы работаем в формате DevOps и управляем процессами программирования по собственной технологии распределения трудозатрат PlatoonDevs.</p>
            </div>
        </div>
    </div>  
  </div>
</template>

<script>
export default {
    name: 'About_1',
}
</script>

<style lang="scss">

.about_1{
    background-image: url(../../assets/images/lines-bedrijf.svg);
    background-size: 161.5rem;
    background-position: top -83rem left calc(50% + 40rem);
    .row{
        margin: 0;
      }
    &-row-left{
        flex: 0 0 75%;
        max-width: 75%;
        margin-left: 12.5%;
        h4{
            margin: 0 0 3.2rem;
            color: #141c18;
            font-size: 2.4rem;
            line-height: 2.8rem;
            font-weight: 400;
        }
        h1{
            margin: 0;
            color: #FF1C3B;
            font-size: 12rem;
            text-transform: uppercase;
        }
        p{
            font-size: 1.8rem;
            line-height: 3rem;
            margin: 2.8rem 0;
            color: #828282;
        }
      }
}
</style>