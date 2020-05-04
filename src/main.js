import Vue from "vue";
import VueRouter from "vue-router";

import "./element-ui";

import App from "./App.vue";
import GreenRegion from "./components/GreenRegion.vue";
import BlueRegion from "./components/BlueRegion.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/green-region", component: GreenRegion },
    { path: "/blue-region", component: BlueRegion },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
