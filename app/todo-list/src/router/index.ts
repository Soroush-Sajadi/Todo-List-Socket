import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LogIn from "@/view/login/LogIn.vue";
import SignIn from "@/view/login/SignIn.vue";
import Dashboard from "@/view/dashboard/Dashboard.vue";
import { Component } from "vue-property-decorator";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    props: true
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    props: true,
    meta: {
      public: true
    }
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    meta: {
      public: true
    }
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
