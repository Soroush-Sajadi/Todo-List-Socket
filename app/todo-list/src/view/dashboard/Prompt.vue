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
            @keyup.enter="addNewList"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup @click="cancel"></q-btn>
          <q-btn flat label="Add" v-close-popup @click="addNewList"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { addList } from "@/models/dashboard/dashboardService";
import { uuid } from "vue-uuid";
@Component({})
export default class Prompt extends Vue {
  @Prop() prompt: boolean;
  @Prop() id: string;
  @Prop() value: string;
  newList = "";
  listId = uuid.v1();

  addNewList() {
    addList(this.newList, this.id, this.listId);
    this.$emit("close", false);
  }

  cancel() {
    this.$emit("close", false);
  }
  onInput(value) {
    this.newList = value;
  }
}
</script>
