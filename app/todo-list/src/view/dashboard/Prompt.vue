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
            :rules="validation.notEmpty"
            @keyup.enter="addNewList"
            lazy-rules
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" @click="cancel"></q-btn>
          <q-btn flat label="Add" @click="addNewList"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { addList } from "@/models/dashboard/dashboardService";
import { validation } from "../common";
import { uuid } from "vue-uuid";
@Component({})
export default class Prompt extends Vue {
  @Prop() prompt: boolean;
  @Prop() id: string;
  @Prop() value: string;
  newList = "";
  listId = uuid.v1();

  get validation() {
    return validation;
  }

  addNewList() {
    if (this.newList.length > 0) {
      addList(this.newList, this.id, this.listId);
      this.$emit("list", {
        name: this.newList,
        listId: this.listId,
        toDos: []
      });
      this.$emit("close", false);
    }
  }

  cancel() {
    this.$emit("close", false);
  }
  onInput(value) {
    this.newList = value;
  }
}
</script>
