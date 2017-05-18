/**
 * Created by jerry on 2017/5/18.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
