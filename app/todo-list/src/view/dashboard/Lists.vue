<template>
  <div class="wrapper">
    <div class="lists-wrapper">
      <ListView :lists="lists" @toDo="toDo" />
    </div>
    <div class="toDos-wrapper">
      <ToDos
        v-if="showToDo"
        :listId="listId"
        :id="id"
        :todos="todos"
        :listName="listName"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getToDos } from "@/models/dashboard/dashboardService";
import ToDos from "./ToDos.vue";
import ListView from "./ListView.vue";
@Component({
  components: { ToDos, ListView }
})
export default class Lists extends Vue {
  @Prop() id: string;
  @Prop() lists: Array<any>;
  showToDo = false;
  listId = "";
  listName = "";
  todos = [];

  async toDo(toDo) {
    this.listName = toDo.listName;
    const result = await getToDos(this.id, toDo.listId);
    this.todos = result.data;
    this.listId = toDo.listId;
    this.showToDo = true;
  }
}
</script>
<style lang="scss">
.lists-wrapper {
  width: 50%;
  display: flex;
}
.wrapper {
  display: flex;
}
.toDos-wrapper {
  width: 50%;
}
</style>
