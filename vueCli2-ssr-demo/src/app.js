import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import "@/assets/style/reset.css";
import "@/assets/style/public.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;
import { createRouter } from "./router/index";

export function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router };
}
