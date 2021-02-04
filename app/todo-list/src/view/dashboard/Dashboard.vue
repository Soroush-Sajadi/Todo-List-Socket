<template>
  <div>
    <Toolbar @add="newToDoList" />
    <Prompt :prompt="prompt" v-if="prompt" @close="onClose" v-model="newList" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Toolbar from "./Toolbar.vue";
import Prompt from "./Prompt.vue";
@Component({
  components: { Toolbar, Prompt }
})
export default class Dashboard extends Vue {
  prompt = false;
  newList = "";
  newToDoList(e) {
    this.prompt = e;
  }
  onClose(e) {
    this.prompt = e;
  }
}
</script>
