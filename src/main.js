import Vue from "vue";
import App from "./app.vue";

import {Dialog, Button} from "element-ui";
Vue.use(Dialog);
Vue.use(Button)
import "element-ui/lib/theme-chalk/index.css";

import Antd from 'ant-design-vue';
Vue.use(Antd)
import 'ant-design-vue/dist/antd.css';

import ElDialogHelper from "./components";
Vue.use(ElDialogHelper);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
