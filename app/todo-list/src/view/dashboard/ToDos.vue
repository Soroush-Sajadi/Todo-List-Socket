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
    <div class="toDo-wrapper">
      <ToDoCard :todos="todos" :id="id" :listId="listId" :listName="listName" />
    </div>
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
import { ToDo } from "@/models/dashboard/todoModel";
import PromptToDo from "./PropmtToDo.vue";
import ToDoCard from "./ToDoCard.vue";
@Component({
  components: { PromptToDo, ToDoCard }
})
export default class ToDos extends Vue {
  @Prop() listId: string;
  @Prop() id: string;
  @Prop() todos: Array<ToDo>;
  @Prop() listName: string;
  prompt = false;
  newToDo = "";

  toDosPrompt() {
    this.prompt = true;
  }

  onClose() {
    this.prompt = false;
  }

  toDo(val) {
    this.todos.push(val);
  }
}
</script>
<style lang="scss">
.toDo-wrapper {
  display: flex;
  flex-direction: column;
}
.add-todo {
  float: right;
  margin-right: 5%;
}
</style>
