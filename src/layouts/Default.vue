<template>
  <div class="main-wrapper">
    <div class="left">
        <div class="nav-trigger" @click="showModal=!showModal" >
          <div class="nav-trigger__inner" v-if="!showModal">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"  v-if="showModal" >
            <g fill="#FFF" fill-rule="nonzero">
              <path d="M1.41421358-1e-8l14.8492424 14.8492424-1.41421356 1.41421357L2e-8 1.41421355z"/>
              <path d="M-1e-8 14.84924242L14.84924239 2e-8l1.41421357 1.41421356-14.84924241 14.8492424z"/>
            </g>
          </svg>
        </div>
      <ul>
        <li>
            <a href="https://www.instagram.com/stimmt.digital/" target="_blank" aria-label="Instagram" rel="noreferrer">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.5845915 0h-7.169183C1.98056932 0 0 1.98068762 0 4.4155268v7.1690647C0 14.0194307 1.98056932 16 4.4154085 16h7.169183C14.0194307 16 16 14.0189575 16 11.5845915V4.4155268C16 1.98068762 14.0194307 0 11.5845915 0zm2.9958152 11.5845915c0 1.6520518-1.3437634 2.9958152-2.9958152 2.9958152h-7.169183c-1.65205175 0-2.99581515-1.3437634-2.99581515-2.9958152V4.4155268c0-1.65205175 1.3437634-2.99593345 2.99581515-2.99593345h7.169183c1.6520518 0 2.9958152 1.3438817 2.9958152 2.99593345v7.1690647zM8 3.87761922C5.72640296 3.87761922 3.87702773 5.72699445 3.87702773 8c0 2.273597 1.84937523 4.1229723 4.12297227 4.1229723 2.2731238 0 4.1229723-1.8493753 4.1229723-4.1229723 0-2.27300555-1.8498485-4.12238078-4.1229723-4.12238078zm0 6.82528648c-1.49033641 0-2.70337893-1.21209609-2.70337893-2.7029057 0-1.49021811 1.21256932-2.70326063 2.70337893-2.70326063S10.7033789 6.50978189 10.7033789 8c0 1.49080961-1.21304249 2.7029057-2.7033789 2.7029057zm4.2958078-8.02910163c-.2736267 0-.5421664.11049168-.7352311.30450277-.1946026.19318299-.3059224.46207763-.3059224.73665065 0 .27350831.111793.54204806.3059224.73605915.1927098.19318299.4616044.30462107.7352311.30462107.2744547 0 .542048-.11143808.7360591-.30462107.1941294-.19401109.304976-.46302403.304976-.73605915 0-.27457302-.1108466-.54346766-.304976-.73665065-.193183-.19401109-.4616044-.30450277-.7360591-.30450277z"></path>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/stimmt.digital/" target="_blank" aria-label="Facebook" rel="noreferrer">
                <svg width="7" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M1.45977976 16h2.91813535V8.0039111H6.5670507L7 5.5054222H4.37791511V3.6949333c0-.5836444.37829658-1.1964444.91894919-1.1964444h1.4902215V0H4.96075888v.0112C2.10315099.1146667 1.51603469 1.7656889 1.46512042 3.4999111h-.00534066v2.0055111H0v2.4984889h1.45977976V16z" fill-rule="evenodd">
                  </path>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/company/1355772/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
                <svg width="12" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M1.47924213 2.6099229C.66193615 2.6099229 0 2.0263408 0 1.3056629 0 .5843473.66193615 0 1.47924213 0c.81651531 0 1.47845145.5843473 1.47845145 1.3056629 0 .7206779-.66193614 1.30426-1.47845145 1.30426zM.33886552 11V3.6035818h2.65275226V11H.33886552zm6.37592423-4.1137401v4.0192681H4.06638627V3.5091102h2.64840348v.9957624c.69685812-.8698893 1.30239195-1.2288892 2.40025985-1.2288892C10.2138398 3.2759834 12 3.7796035 12 6.7008297v4.2046983H9.359108V6.8659825c0-.8279316-.2440584-1.6573936-1.2366332-1.6573936-.99257478 0-1.40768505.829462-1.40768505 1.677671z" fill-rule="evenodd">
                  </path>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/stimmtdigital" target="_blank" aria-label="Twitter" rel="noreferrer">
                <svg width="14" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M13.6014667.244144c-.4067778.251965-1.3407334.618106-1.8013334.618106v.000752C11.2742.331692 10.5337556 0 9.7125778 0 8.11766667 0 6.82437778 1.250653 6.82437778 2.792383c0 .214208.02566666.423152.07311111.623521h-.00046667C4.73355556 3.360998 2.3674 2.312369.94297778.517621.0672 1.983535.82506667 3.613867 1.81891111 4.207904c-.3402.024821-.96646667-.037907-1.26124444-.316048-.01975556.972965.46402222 2.262127 2.22802222 2.729806-.33973333.176752-.94111111.126058-1.2026.088451.09177778.821333 1.28115555 1.895084 2.58175555 1.895084C3.70128889 9.12372 1.9572 10.064191 0 9.764991 1.32922222 10.547063 2.8784 11 4.51811111 11c4.65966669 0 8.27835559-3.651925 8.08359999-8.157074-.0007778-.004964-.0007778-.009928-.0012444-.015343.0004666-.011583.0012444-.023166.0012444-.0352 0-.01399-.0012444-.027227-.0017111-.040766.4242-.280547.9933778-.776807 1.4-1.429962-.2358222.125607-.9432889.377121-1.6016.439548.4224889-.220526 1.0484444-.942728 1.2030667-1.517059" fill-rule="evenodd">
                  </path>
                </svg>
            </a>
        </li>
        </ul>
    </div>
    <g-link class="nav__link homewrap" to="/" v-if="!showModal">22 coders</g-link>
    <div class="middle" v-if="showModal">
      <div class="padLeft" v-if="showModal"></div>
      <div class="menuModal" >
        <div class="menu"> 
          <g-link class="nav__link" to="/about">О нас</g-link>
          <g-link class="nav__link" to="/cases">Портфолио</g-link>
          <g-link class="nav__link" to="/about">Цены</g-link>
          <g-link class="nav__link" to="/about">Контакты</g-link>
          <g-link class="nav__link" to="/about">Реализовать идею</g-link>
        </div>
        <div class="contacts">
          <div class="contacts-item">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="mailto:head@22coders.com">Почта: head@22coders.com</a>
              </li>
              <li>
                <a href="mailto:hello@stimmt.digital">Россия: +79955900990</a>
              </li>
              <li>
                <a href="mailto:hello@stimmt.digital">EU (Whatsapp): +393802492490</a>
              </li>
              <li>
                <a href="mailto:hello@stimmt.digital">USA: +16179491438</a>
              </li>
            </ul>
          </div>
          <div class="contacts-item">
            <h4>Центральный офис:</h4>
            <ul>
              <li>
                Санкт-Петербург, Невский пр. 41
              </li>
            </ul>
          </div>
          <div class="contacts-item">
            <h4>Офис разработчиков:</h4>
            <ul>
              <li>
                Санкт-Петербург, Курляндская ул. 49б
              </li>
            </ul>
          </div>          
        </div>
      </div>
    <div class="padRight" v-if="showModal"></div>
    </div>
    <div class="right">
      <span>RU</span>
    </div>
    <slot/>
  </div>
  <!-- <p>{{$static.metadata.siteDescription }}</p> -->
</template>
<script>
export default {
  data() {
    return {
      showModal:false
    }
  },
  computed:{

  },      
  methods:{

  }
  
}
</script>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<style lang="scss">
/* body{
  background-color: #141c18;
} */
html{
  font-size: 10px;
}
.main-wrapper{

  .middle{
    display: grid;
    grid-template: "padLeft menumodal padRight";
    grid-template-columns: 6.4rem 1fr 6.4rem;
    position: fixed;
    z-index: 99;
    height: 100vh;
    width: 100%;
    .padLeft, .padRight{
      background-color: #141c18;
    }
  }
  .menuModal{
    grid-area: menumodal;
    background-color: #141c18;
/*     height: 100%;
    width: 100%; */
    transition: opacity 0.3s ease;
    display: grid;
    grid-template:
        "free free free free"
        "menu menu menu contacts"
        "free2 free2 free2 free2 ";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto min-content auto;
    & .menu{
      grid-area: menu;
      align-self: center;
      justify-self: center;
      display: flex;
      flex-direction: column;

      .nav__link{
        position: relative;
        font-weight: 500;
        display: inline-block;
        z-index: 1;
        color: white;
        font-size: 7.6rem;
        line-height: 7.6rem;
        padding: 0.4rem 0;
        -webkit-text-stroke: 0.1rem transparent;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.4s ease-in-out;
     }
      .nav__link:hover{
        -webkit-text-stroke: 0.1rem transparent;
        color: white !important;
      }
      &:hover .nav__link{
        -webkit-text-stroke: 0.1rem rgba(255, 255, 255, 0.3);
        color: transparent;
      }
    }
    & .contacts{
      height: 100%;
      grid-area: contacts;
      align-self: center;
      justify-self: center;
      flex-basis: 25%;
      flex-direction: column;
      padding: 3.2rem 0;
      align-items: flex-start;
      justify-content: space-between;
      display: flex;
      .contacts-item{
        h4{
          color: white;
          font-size: 1.8rem;
          margin: 0 0 0.8rem 0;
        }
        ul{
          list-style: none;
          margin: 0px;
          padding: 0px;
          li{
            font-size: 1.4rem;
            line-height: 2.8rem;
            color: #828282;
            a{
              text-decoration: none;
              color: #828282;
            }
          }
        }
      }
    }
  }
  & .right, & .left{
    width: 6.4rem;
    height: 100vh;
    z-index: 100;
    position: fixed;
  }

  .left{
    left: 0;
    grid-area: left;
    mix-blend-mode: difference;
      .nav-trigger {

        width: 6.4rem;
        height: 6.46rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        transition: 0.4s ease-in-out;
        cursor: pointer;
        .nav-trigger__inner {
          width: 2.2rem;
          height: 1.4rem;
          transition: 0.4s ease-in-out;
          span {
            margin: 0.4rem 0;
            display: block;
            width: 2.2rem;
            height: 0.2rem;
            background-color: white;
            &:first-child{
              margin: 0;
            }
            &:last-child{
              max-width: 1.6rem;
            }
          }
          
        }
      }
      ul{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        list-style: none;
        li{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 6.4rem;
          padding: 1.6rem 0;
          svg{
            fill: #828282;
          }
        }
      }
  }

  .right{
    grid-area: right;
    right: 0;
    span{
      color: white;
    }
  }
  .homewrap{
    position: fixed;
    z-index: 101;
    left: 6.4rem;
    top: 0;
    width: 100px;
  }
}
</style>
