<template>
  <div>
    <!-- <a-input class="tr" type="text" name="New ToDo" /> -->
    <q-btn
      flat
      round
      dense
      icon="add"
      class="q-mr-xs add-todo"
      @click="toDosPrompt"
    />
    <ToDoCard :todos="todos" />
    <PromptToDo
      :prompt="prompt"
      v-if="prompt"
      @close="onClose"
      @toDo="toDo"
      v-model="newToDo"
      :listId="listId"
      :id="id"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getToDos } from "@/models/dashboard/dashboardService";
import PromptToDo from "./PropmtToDo.vue";
import ToDoCard from "./ToDoCard.vue";
@Component({
  components: { PromptToDo, ToDoCard }
})
export default class ToDos extends Vue {
  @Prop() listId: string;
  @Prop() id: string;
  prompt = false;
  newToDo = "";
  todos = [];

  toDosPrompt() {
    this.prompt = true;
  }

  onClose() {
    this.prompt = false;
  }

  toDo(val) {
    this.todos.push(val);
  }

  async mounted() {
    const result = await getToDos(this.id, this.listId);
    console.log(result);
  }
}
</script>
<style lang="scss">
.add-todo {
  float: right;
  margin-right: 5%;
}
</style>
