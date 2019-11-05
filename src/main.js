import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import qs from "qs";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.use(Antd);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false;
axios.interceptors.request.use(
  config => {
    let authtoken = sessionStorage.getItem("access_token");
    // alert(2);
    if (authtoken !== null) {
      config.headers.Authorization = authtoken;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
