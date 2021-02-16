import Vue from "vue";
import "./config";
import App from "./App.vue";
import router from "./router";
import "./axios.ts";
import "./components/index";
import errorHandler from "./errorHandler";
import UUID from "vue-uuid";

Vue.use(UUID as any);

Vue.config.productionTip = false;

Vue.config.errorHandler = errorHandler;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
