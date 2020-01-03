/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App.vue";
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from "./router";
import NowUiKit from "./plugins/now-ui-kit";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCvgCPMP22UqLO2h8oZSf3DaO_3JzNDpAk",
  authDomain: "sw-hr-3f53d.firebaseapp.com",
  databaseURL: "https://sw-hr-3f53d.firebaseio.com",
  projectId: "sw-hr-3f53d",
  storageBucket: "sw-hr-3f53d.appspot.com",
  messagingSenderId: "677572654988",
  appId: "1:677572654988:web:373f92dd41380cf51388a9",
  measurementId: "G-C0G2GCTQQZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
