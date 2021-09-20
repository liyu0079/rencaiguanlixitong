/*jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login/index.vue';
import Home from '../views/Home/index.vue';
import Message from '../views/Message/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
