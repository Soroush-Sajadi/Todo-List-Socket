import "./quasar";
import * as defaultStyle from "./defaultStyle";
import "./class-component-hooks.ts";
import Vue from "vue";
import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);
Vue.prototype.$defs = defaultStyle;
