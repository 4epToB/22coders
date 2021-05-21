<template>
  <div class="section home_2">
    <div class="container-fluid">
      <div class="image__wrapper">
        <transition
          appear
          name="img"
        >
          <img src="../../assets/images/BarbaraTrienen__STIMMTdigital_Sfeer02_0030IMG_494407182019_0b7d5aa433810302d203b3dc8e7ac552.webp" ref="img">
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
 name: 'Home_2',
 mounted(){
/*     let img = this.$refs.img
    console.log(this.$refs.img); */
    
  gsap.to(".image__wrapper", {
    "clip-path":"polygon(0px 0%, calc(100% - 0px) 0%, calc(100% - 0px) 100%, 0px 100%)",
    scrollTrigger: {
      trigger: ".image__wrapper",
      start: 'top center',
      end: 'top top',
      scrub: true
    }
  });
 }
}
</script>

<style lang="scss">
.home_2{
  .image__wrapper{
    clip-path: polygon(6.4rem 0%,calc(100% - 6.4rem) 0%, calc(100% - 6.4rem) 100%, 6.4rem 100%);
    height: 72rem;
    position: relative;
    z-index: -2;
    img{
      height: auto;
      width: 100%;
    }
  }


}
.img-enter{
  transform: translateY(160px);
  opacity: 0;
  
}
.img-enter-active{
  transition: all 1s;
}
</style>