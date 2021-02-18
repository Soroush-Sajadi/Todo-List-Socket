<template>
  <div class="wrapper">
    <div class="lists-wrapper">
      <div
        class="lists"
        v-for="list in lists"
        :id="list.listId"
        :key="list.name"
        @click="toDo"
      >
        {{ list.name }}
      </div>
    </div>
    <div class="toDos-wrapper">
      <ToDos v-if="showToDo" :listId="listId" :id="id" :todos="todos" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getToDos } from "@/models/dashboard/dashboardService";
import ToDos from "./ToDos.vue";
@Component({
  components: { ToDos }
})
export default class Lists extends Vue {
  @Prop() id: string;
  @Prop() lists: Array<any>;
  showToDo = false;
  listId = "";
  todos = [];

  async toDo(event) {
    this.listId = event.currentTarget.id;
    const result = await getToDos(this.id, event.currentTarget.id);
    this.todos = result.data;
    this.showToDo = true;
  }
}
</script>
<style lang="scss">
.lists-wrapper {
  width: 50%;
}
.wrapper {
  display: flex;
}
.toDos-wrapper {
  width: 50%;
}
</style>
