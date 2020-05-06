import Vue from "vue";
import VueRouter from "vue-router";

import GreenRegion from "../components/GreenRegion.vue";
import BlueRegion from "../components/BlueRegion.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/green-region", component: GreenRegion },
    { path: "/blue-region", component: BlueRegion },
    { path: "/", redirect: "/green-region" },
  ],
});