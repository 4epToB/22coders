// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'



/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/css/global.css' */
import './assets/styles/main.scss'


export default function (Vue, { appOptions, head }) {

  Vue.use(BootstrapVue)
/*   Vue.mixin({
    created: function () {
      this.gsap = gsap;
    }
  }); */
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}