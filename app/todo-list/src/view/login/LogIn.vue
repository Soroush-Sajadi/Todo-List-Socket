<template>
  <div class="flex-column">
    <a-input
      type="email"
      name="Email"
      v-model="email"
      :rules="validation.email"
    />
    <a-input
      type="password"
      name="Password"
      v-model="password"
      :rules="validation.password"
    />
    <q-btn color="primary" label="Join" @click="join" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { validation } from "../common";
import { validateEmail, validatePassword } from "../validator/validation";
@Component({})
export default class LogIn extends Vue {
  email = "";
  password = "";

  get validation() {
    return validation;
  }

  join() {
    if (
      validateEmail(this.email) === true &&
      validatePassword(this.password) === true
    ) {
      this.$router.push({ path: "/dashboard" });
    }
  }
}
</script>
