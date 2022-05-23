import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles/main.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
