<template>
  <div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your New ToDo</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            autofocus
            :value="value"
            @input="onInput"
            @keyup.enter="addNewToDo"
            :rules="validation.notEmpty"
          ></q-input>
        </q-card-section>
        <div class="q-pa-md">
          <div @click="deadLine">Dead line: {{ date }}</div>
          <div v-if="show" class="q-gutter-md row items-start">
            <q-date :value="date" @input="onInputDate" minimal />
          </div>
        </div>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" @click="cancel"></q-btn>
          <q-btn flat label="Add" @click="addNewToDo"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { addToDo } from "@/models/dashboard/dashboardService";
import { validation } from "../common";
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

  get validation() {
    return validation;
  }

  addNewToDo() {
    const deadLine = this.date === null ? null : new Date(this.date);
    const toDo = {
      id: this.toDoId,
      author: this.username,
      text: this.newToDo,
      dateIssued: new Date(),
      dateDeadLine: deadLine,
      complete: false
    };
    if (this.newToDo !== "") {
      addToDo(toDo, this.id, this.listId);
      this.$emit("close", false);
      this.$emit("toDo", toDo);
    }
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
