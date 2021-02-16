<template>
  <div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your New ToDo List</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            autofocus
            :value="value"
            @input="onInput"
            @keyup.enter="addNewToDo"
          ></q-input>
        </q-card-section>
        <div class="q-pa-md">
          <div @click="deadLine">Dead line: {{ date }}</div>
          <div v-if="show" class="q-gutter-md row items-start">
            <q-date :value="value" @input="onInputDate" minimal />
          </div>
        </div>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup @click="cancel"></q-btn>
          <q-btn flat label="Add" v-close-popup @click="addNewToDo"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { addToDo } from "@/models/dashboard/dashboardService";
import { uuid } from "vue-uuid";
@Component({})
export default class Prompt extends Vue {
  @Prop() prompt: boolean;
  @Prop() id: string;
  @Prop() value: string;
  @Prop() listId: string;
  date = null;
  show = false;
  newToDo = "";
  toDoId = uuid.v1();

  get username() {
    return localStorage.username;
  }

  addNewToDo() {
    const toDo = {
      id: this.toDoId,
      author: this.username,
      text: this.newToDo,
      dateIssued: new Date(),
      dateDeadLine: new Date(this.date),
      complete: false
    };
    addToDo(toDo, this.id, this.listId);
    this.$emit("close", false);
  }

  cancel() {
    this.$emit("close", false);
  }
  onInput(value) {
    this.newToDo = value;
  }

  onInputDate(value) {
    this.date = value;
  }

  deadLine() {
    this.show = !this.show;
  }
}
</script>
