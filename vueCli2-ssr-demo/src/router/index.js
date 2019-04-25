import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "*",
        redirect: "/home"
      },
      {
        path: "/",
        name: "layout",
        component: () => import("@/views/Layout"),
        children: [
          {
            path: "/home",
            name: "home",
            component: () => import("@/views/Home")
          },
          {
            path: "/news",
            name: "news",
            component: () => import("@/views/News")
          }
        ]
      }
    ]
  });

}
