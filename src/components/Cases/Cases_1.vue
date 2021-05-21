<template>
  <div class="section cases_1">
    <b-container fluid>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum odio possimus cum pariatur porro velit sed saepe iste nemo, ea sit amet autem, animi laudantium asperiores ipsum quos nostrum!
        Officiis, eligendi! Sunt sit earum quidem ratione quo sint, fugit repellendus dicta aperiam voluptatem, saepe sapiente ab repudiandae doloribus dolore itaque est ipsam ea! Nisi nostrum asperiores cupiditate ipsum accusamus.
        Quo aliquam libero non ratione, laboriosam est ex cupiditate quos magni in, officiis nam cumque quaerat voluptate aut officia exercitationem error minus veniam nobis dolorem ab? Placeat iste explicabo doloribus.
        Tempora illo quis quibusdam ea dolor natus quae itaque esse placeat, cupiditate amet reiciendis, eligendi explicabo veniam facere iste. Laudantium odit assumenda dolorem recusandae magnam suscipit ratione asperiores earum. Eligendi?
        Fugiat obcaecati laboriosam earum numquam incidunt soluta, asperiores adipisci enim error suscipit! Laborum est illo nesciunt, ipsum asperiores exercitationem corporis deleniti, blanditiis iure distinctio, nobis tempore. Voluptas ipsa atque laborum.
        Vel qui dicta harum. Libero, voluptatibus, delectus odio molestias impedit maiores accusantium molestiae quod et, saepe placeat sunt. Ipsum, repellat! Omnis placeat eligendi nemo quos eius excepturi reprehenderit, repudiandae provident!
        Consequatur itaque beatae a fuga voluptas nihil pariatur dolore iure soluta saepe. Illo corporis laboriosam quod nam vero, sequi magnam omnis voluptatibus similique, aperiam, eius et iste ea iusto tempore.
        Nihil, ratione commodi. Deserunt excepturi unde a similique labore doloribus in ab facilis delectus eius sit, beatae cupiditate! Repellendus corporis architecto earum quo molestias possimus molestiae, ab nostrum illo voluptatibus.
        Ut voluptates culpa fuga excepturi, explicabo dignissimos eaque odit recusandae iusto. Porro vel ipsa non asperiores adipisci cupiditate cum. At necessitatibus iusto molestias ab, temporibus doloremque quisquam assumenda quod porro?
        Ullam tenetur aut suscipit ipsa eaque recusandae harum a aliquid veritatis laudantium. Reiciendis dolor quae commodi quis aut, architecto veniam tenetur totam voluptatum quo, aspernatur minima, velit veritatis iste repudiandae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum odio possimus cum pariatur porro velit sed saepe iste nemo, ea sit amet autem, animi laudantium asperiores ipsum quos nostrum!
        Officiis, eligendi! Sunt sit earum quidem ratione quo sint, fugit repellendus dicta aperiam voluptatem, saepe sapiente ab repudiandae doloribus dolore itaque est ipsam ea! Nisi nostrum asperiores cupiditate ipsum accusamus.
        Quo aliquam libero non ratione, laboriosam est ex cupiditate quos magni in, officiis nam cumque quaerat voluptate aut officia exercitationem error minus veniam nobis dolorem ab? Placeat iste explicabo doloribus.
        Tempora illo quis quibusdam ea dolor natus quae itaque esse placeat, cupiditate amet reiciendis, eligendi explicabo veniam facere iste. Laudantium odit assumenda dolorem recusandae magnam suscipit ratione asperiores earum. Eligendi?
        Fugiat obcaecati laboriosam earum numquam incidunt soluta, asperiores adipisci enim error suscipit! Laborum est illo nesciunt, ipsum asperiores exercitationem corporis deleniti, blanditiis iure distinctio, nobis tempore. Voluptas ipsa atque laborum.
        Vel qui dicta harum. Libero, voluptatibus, delectus odio molestias impedit maiores accusantium molestiae quod et, saepe placeat sunt. Ipsum, repellat! Omnis placeat eligendi nemo quos eius excepturi reprehenderit, repudiandae provident!
        Consequatur itaque beatae a fuga voluptas nihil pariatur dolore iure soluta saepe. Illo corporis laboriosam quod nam vero, sequi magnam omnis voluptatibus similique, aperiam, eius et iste ea iusto tempore.
        Nihil, ratione commodi. Deserunt excepturi unde a similique labore doloribus in ab facilis delectus eius sit, beatae cupiditate! Repellendus corporis architecto earum quo molestias possimus molestiae, ab nostrum illo voluptatibus.
        Ut voluptates culpa fuga excepturi, explicabo dignissimos eaque odit recusandae iusto. Porro vel ipsa non asperiores adipisci cupiditate cum. At necessitatibus iusto molestias ab, temporibus doloremque quisquam assumenda quod porro?
        Ullam tenetur aut suscipit ipsa eaque recusandae harum a aliquid veritatis laudantium. Reiciendis dolor quae commodi quis aut, architecto veniam tenetur totam voluptatum quo, aspernatur minima, velit veritatis iste repudiandae!</p>
        <b-row class="casesWrapper">
            <b-col tag="g-link" lg="5" offset-lg="2" class="case-item" v-for="edge in $static.cases.edges" :key="edge.node.id" ref="casewrap" :to="`/cases/`+edge.node.id">
                <div class="case-item__image-animate"> 
                    <div class="case-item__image-animate__wrapper"  ref="imgwrap">
                        <div class="case-item__image-animate__inner">
                            <img :src="`https://strapi-22coders.herokuapp.com${edge.node.fullPreview}`" :alt="edge.node.alternativeText" id="img">
                            <img src="https://picsum.photos/536/354" :alt="edge.node.alternativeText" id="imgHover">
                        </div>
                    </div>
                </div>
                <div class="case-item__hover">
                    <div class="view">Посмотреть </div>
                </div>
                <div class="case-item__details">
                    <div class="name">{{edge.node.name}} </div>
                    <div class="task">{{edge.node.task}}</div>
                </div>
            </b-col>
        </b-row>
    </b-container>  
  </div>
</template>
<static-query>
query {
  cases: allCase{
    edges{
      node{
        id
        task
        name
        sitename
        smallPreview
        fullPreview
        alternativeText
      }	
    }
  }
}
</static-query>
<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline
export default {
    name: 'Cases_1',
     mounted(){    
        console.log(this.$refs.imgwrap[0].querySelector('#img'));
        this.$refs.imgwrap.forEach((el) => {
            tl({
                scrollTrigger: {
                    trigger: el,
                    start: 'top center',
                    toggleActions: "play none none none"
                }
            })
            .to(el, {
                "clip-path":"polygon(0px 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration:.8
            })
            .fromTo(el.querySelector('#img'), {scale: 1.2}, {scale: 1,duration:.8},"-=0.4",)

        });
        document.querySelectorAll('.case-item').forEach((el) => {
            let tl = gsap.timeline({paused:true, defaults:{duration:0.4, ease:"power1.in"}})
            let viewDiv=el.querySelector('.view')
            let nameDiv=el.querySelector('.name')
            let taskDiv=el.querySelector('.task')
            let imgHover=el.querySelector('#imgHover')
            tl.fromTo(viewDiv,{
                yPercent:-100,
                opacity: 0,

            },{
                yPercent:0,
                opacity: 1,
                duration:.5,
                ease:"power4.inOut"
            },"someLabel")
            tl.fromTo(nameDiv,{
                yPercent:0,
                opacity: 1,

            },{
                yPercent:-100,
                opacity: 0,
                duration:.5,
                ease:"power4.inOut"
            },"someLabel")
            tl.fromTo(taskDiv,{
                opacity: 1,

            },{
                opacity: 0,
                duration:.5,
                ease:"power4.inOut"
            },"someLabel")
            tl.fromTo(imgHover,{
                opacity: 0,
                scale:1

            },{
                opacity: 1,
                scale:1.1,
                duration:.5,
                ease:"power4.inOut"
            },"someLabel")
            el.addEventListener("mouseenter", () => tl.play());
            el.addEventListener("mouseleave", () => tl.reverse());
        })
    }
}
</script>

<style lang="scss">
p{
  font-size:2.5rem ;
  color: white;
}
.cases_1{
    background-image: url(../../assets/images/lines-bedrijf.svg);
    background-size: 161.5rem;
    background-position: top -83rem left calc(50% + 40rem);
    .casesWrapper{

        .case-item{

            &__image-animate{
                position: relative;
                overflow: hidden;
                &__wrapper{
                    position: relative;
                    overflow: hidden;
                    height: 0;
                    padding-bottom: 150%;
                    clip-path: polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%);
                }
                &__inner{
                    overflow: hidden;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    
                    &::before{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        content: "";
                        background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%);
                        z-index: 1;
                        pointer-events: none;
                    }
                    img{
                        display: block;
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                        object-position: center;

                    }
                    img:nth-child(2){
                        position: absolute;
                        top: 0;
                    }
                }

            }
            &__details{
                top: 12.8rem;
                position: absolute;
                margin-left: -2.4rem;
                z-index: 1;
                .name{
                    font-family: "Oswald", sans-serif;
                    text-transform: uppercase;
                    -webkit-text-stroke: 0.1rem #EAEBEA;
                    color: transparent;
                    font-size: 6.4rem;
                    margin-bottom: 1.6rem;
                }
                .task{
                    color: #FF1C3B;
                    font-size: 1.6rem;
                }
            }
            &__hover{
                top: 12.8rem;
                position: absolute;
                margin-left: -2.4rem;
                justify-content: center;
                align-items: center;
                display: flex;
                .view{
                    -webkit-text-stroke: 0.1rem #FF1C3B;
                    color: transparent;
                    font-size: 6.4rem;
                    color: transparent;
                    text-transform: uppercase;
                    font-family: "Oswald", sans-serif; 
                    /* transform: scale(1.2); */
                    /* opacity: 0; */
                }
            }
        }
        
    }

}
</style>