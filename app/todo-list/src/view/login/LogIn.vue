<template>
  <div class="flex-column">
    <a-input name="Email" v-model="mail" />
    <a-input name="Password" v-model="pass" />
    <q-btn color="primary" label="Join" @click="join" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
class LogIn extends Vue {
  mail = "";
  pass = "";

  join() {
    console.log(this.mail, this.pass);
  }
}
export default LogIn;
</script>
