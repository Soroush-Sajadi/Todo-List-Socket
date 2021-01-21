<template>
  <div class="center">
    <a-input
      type="text"
      name="Username"
      v-model="username"
      :rules="validation.username"
    />
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
export default class SignIn extends Vue {
  username = "";
  password = "";
  email = "";

  get validation() {
    return validation;
  }
  join() {
    if (
      validateEmail(this.email) === true &&
      validatePassword(this.password) === true &&
      this.username.length > 0
    ) {
      this.$router.push({ path: "/login" });
    }
  }
}
</script>
<style lang="scss">
.center * {
  margin-top: -0.5%;
}
</style>
