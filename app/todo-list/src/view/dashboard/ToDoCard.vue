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
          <div class="text-h6">{{ todo.text }}</div>
          <div class="card-info">
            <div class="text-subtitle3">by {{ todo.author }}</div>
            <div class="text-subtitle3">Issued: 2020/02/02</div>
            <div class="text-subtitle3">Dead line: 2020/02/03</div>
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <div class="q-gutter-sm">
            <q-checkbox left-label v-model="left" label="Done" />
          </div>
          <q-btn flat>Remove</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ToDo } from "@/models/dashboard/todoModel";
@Component({})
export default class ToDoCard extends Vue {
  @Prop() todos: Array<ToDo>;
  left = false;
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
</style>
