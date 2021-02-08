<template>
  <div>
    <Toolbar @add="newToDoList" />
    <Prompt
      :prompt="prompt"
      v-if="prompt"
      @close="onClose"
      v-model="newList"
      :id="id"
    />
    <Lists :id="id" :list="newList" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Toolbar from "./Toolbar.vue";
import Prompt from "./Prompt.vue";
import Lists from "./Lists.vue";

@Component({
  components: { Toolbar, Prompt, Lists }
})
export default class Dashboard extends Vue {
  prompt = false;
  newList = "";

  get id() {
    return localStorage.id;
  }

  mounted() {
    !localStorage.id ? this.$router.push({ path: "/login" }) : null;
  }

  newToDoList(e) {
    this.prompt = e;
    console.log(this.newList);
  }

  onClose(e) {
    this.prompt = e;
  }
}
</script>
