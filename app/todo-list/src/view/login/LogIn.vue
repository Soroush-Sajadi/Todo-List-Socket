<template>
  <div class="center">
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
    <div class="button-login">
      <q-btn color="primary" label="Log In" @click="logIn" />
      <q-btn color="primary" label="Join" @click="join" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { validation } from "../common";
import { validateEmail, validatePassword } from "../validator/validation";
import { logIn } from "../../models/log/loginService"
@Component({})
export default class LogIn extends Vue {
  email = "";
  password = "";

  get validation() {
    return validation;
  }

  async logIn() {
    if (
      validateEmail(this.email) === true &&
      validatePassword(this.password) === true
    ) {
      await logIn({email: this.email, password: this.password})
      this.$router.push({ path: "/" });
    }
  }
  join() {
    this.$router.push({ path: "/signin" });
  }
}
</script>
<style lang="scss">
.button-login {
  display: flex;
  button {
    margin-left: 3.5%;
  }
}
</style>
