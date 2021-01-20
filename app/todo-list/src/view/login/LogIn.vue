<template>
  <div class="flex-column">
    <a-input name="Email" />
    <a-input name="Password" />
    <a-button name="Join" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
class LogIn extends Vue {}
export default LogIn;
</script>
