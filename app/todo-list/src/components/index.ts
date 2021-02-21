import Vue from "vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import moment from "moment";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

Vue.component("a-input", Input);
Vue.component("a-button", Button);
