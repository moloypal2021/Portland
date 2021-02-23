import Vue from "vue";
import App from "./App.vue";

// CSS & SASS Files Import Here
// *** Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// *** Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// *** Custom CSS
import "./assets/css/style.scss";

import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
