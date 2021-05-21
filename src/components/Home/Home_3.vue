<template>
  <div class="section home_3">
      <div class="container-fluid">
        <div class="ticker">
          <span v-for="item in 4" v-bind:key="item" class="list-item">
            {{ text }}
          </span>
        </div>
      </div>
  </div>
</template>

<script>
import { gsap, TimelineLite } from "gsap";
export default {
 name: 'Home_3',
 data(){
   return{
    text:"recent work"
   }
 },
  mounted(){
  const timeline = new TimelineLite() 
  gsap.to(".ticker", {
    xPercent: -100, 
    repeat: -1, 
    duration: 10, 
    ease: "linear"
}).totalProgress(0.5);

/*   this.gsap.to(tween, {
    timeScale: someCondition ? 1 : -1 // -1 will reverse the animation
  }); */
 }
}
</script>

<style lang="scss">
.home_3{
    overflow: hidden;
    position: relative;
    background-color: #141c18;
    padding: 0px 6.4rem;
    .ticker{
      position: relative;
      width: 100vw;
      display: flex;
      left: -6.4rem;
      span{
        padding: 0 3vw;
        white-space: nowrap;
        line-height: 200px;
        font-size: 200px;
        color: #2b302e;
      }
    }


}
</style>