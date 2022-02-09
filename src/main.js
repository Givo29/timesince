import Vue from "vue";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import VueGtag from "vue-gtag";
import Ads from "vue-google-adsense";
import "element-ui/lib/theme-chalk/index.css";
import "../theme/button.css";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(require("vue-script2"));
Vue.use(Ads.AutoAdsense, {
  adClient: "ca-pub-4261638152266663",
  isNewAdsCode: true,
});

import routes from "./routes";

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior(_0, _1, savedPosition) {
    if (savedPosition) return savedPosition;
  },
});

Vue.use(
  VueGtag,
  {
    config: { id: "GTM-MHKZTXC" },
  },
  router
);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
