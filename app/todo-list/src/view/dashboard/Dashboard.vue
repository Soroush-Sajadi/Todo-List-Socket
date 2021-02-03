<template>
  <div>
    <Toolbar />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Toolbar from "./Toolbar.vue";
@Component({
  components: { Toolbar }
})
export default class Dashboard extends Vue {}
</script>
