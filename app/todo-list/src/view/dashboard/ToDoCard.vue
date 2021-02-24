<template>
  <div>
    <div
      v-for="todo in todos"
      :id="todo.id"
      :key="todo.id"
      class="q-pa-md row items-start q-gutter-md"
    >
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="menuBar">
            <div class="text-h6">{{ todo.text }}</div>
            <div class="col-auto">
              <q-btn color="white-7" round flat icon="more_vert">
                <q-menu cover auto-close>
                  <q-list>
                    <q-item clickable>
                      <q-item-section :id="todo.id" @click="editToDo"
                        >Edit</q-item-section
                      >
                    </q-item>
                    <q-item clickable>
                      <q-item-section :id="todo.id" @click="removeToDo"
                        >Remove</q-item-section
                      >
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>

          <div class="card-info">
            <div class="text-subtitle3">by {{ todo.author }}</div>
            <div class="text-subtitle3">
              Issued: {{ todo.dateIssued | formatDate }}
            </div>
            <div class="text-subtitle3">
              Dead line:
              {{
                todo.dateDeadLine === null
                  ? "No Dead Line"
                  : todo.dateDeadLine | formatDate
              }}
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <div class="q-gutter-sm">
            <q-checkbox
              left-label
              v-model="todo.complete"
              label="Done"
              :id="todo.id"
              @input="isChecked(todo.id, todo.complete)"
            />
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ToDo } from "@/models/dashboard/todoModel";
import {
  deleteToDo,
  removeToDo,
  checkedToDo
} from "@/models/dashboard/dashboardService";
@Component({})
export default class ToDoCard extends Vue {
  @Prop() todos: Array<ToDo>;
  @Prop() listId: string;
  @Prop() id: string;

  editToDo(event) {
    console.log(event.currentTarget.id);
  }

  async removeToDo(event) {
    const toDoId = event.currentTarget.id;
    const result = await deleteToDo(this.id, this.listId, toDoId);
    result.data === true ? removeToDo(toDoId, this.todos) : null;
  }

  async isChecked(toDoId, complete) {
    const result = await checkedToDo(this.id, this.listId, toDoId, complete);
    console.log(result);
  }
}
</script>
<style lang="scss">
.my-card {
  width: 100%;
  max-width: 450px;
}
.card-info {
  display: flex;
  justify-content: space-between;
}
.menuBar {
  display: flex;
  justify-content: space-between;
}
</style>
