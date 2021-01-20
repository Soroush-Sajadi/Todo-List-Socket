import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LogIn from "@/view/login/LogIn.vue";
import Dashboard from "@/view/dashboard/Dashboard.vue";
import { Component } from "vue-property-decorator";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
    meta: {
      public: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: Dashboard
  }
];

Component.registerHooks(["beforeRouteEnter", "beforeRouteUpdate"]);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function patchRouterMethod(router, methodName) {
  router["old" + methodName] = router[methodName];
  router[methodName] = async function(location) {
    return router["old" + methodName](location).catch(error => {
      if (error.name === "NavigationDuplicated") {
        return this.currentRoute;
      }
      throw error;
    });
  };
}

patchRouterMethod(router, "push");
patchRouterMethod(router, "replace");

export default router;
