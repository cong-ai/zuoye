import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

Vue.filter("reverse", (val, q = "") => {
  return val.split("").reverse().join(q);
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
