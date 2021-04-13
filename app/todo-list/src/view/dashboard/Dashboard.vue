<template>
  <div>
    <Toolbar @add="newToDoList" />
    <Prompt
      :prompt="prompt"
      v-if="prompt"
      @close="onClose"
      v-model="newListName"
      :id="id"
      @list="list"
    />
    <Lists :id="id" :lists="lists" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getLists } from "@/models/dashboard/dashboardService";
import Toolbar from "./Toolbar.vue";
import Prompt from "./Prompt.vue";
import Lists from "./Lists.vue";

@Component({
  components: { Toolbar, Prompt, Lists }
})
export default class Dashboard extends Vue {
  prompt = false;
  newListName = "";
  lists = [];

  get id() {
    return localStorage.id;
  }

  async mounted() {
    !localStorage.id ? this.$router.push({ path: "/login" }) : null;
    const lists = await getLists(this.id);
    this.lists = lists.data;
  }

  newToDoList(e) {
    this.prompt = e;
  }

  onClose(e) {
    this.prompt = e;
  }

  list(value) {
    this.lists.push(value);
  }
}
</script>
