// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
// import 'swiper/css/swiper.css'
// import style
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
 loading: require('common/image/default.png')
})

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
