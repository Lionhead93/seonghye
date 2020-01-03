import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "login",
      components: { default: Login },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/home",
      name: "home",
      components: { default: Home }
    }
    // {
    //   path: '/',
    //   name: 'index',
    //   components: { default: Index, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // },
    // {
    //   path: '/landing',
    //   name: 'landing',
    //   components: { default: Landing, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   components: { default: Login, header: MainNavbar },
    //   props: {
    //     header: { colorOnScroll: 400 }
    //   }
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   components: { default: Profile, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
