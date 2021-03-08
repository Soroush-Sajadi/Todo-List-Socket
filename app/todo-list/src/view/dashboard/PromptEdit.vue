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
          ></q-input>
        </q-card-section>
        <div class="q-pa-md">
          <div @click="showDeadLine">
            Dead line: {{ deadLine | formatDate }}
          </div>
          <div class="q-gutter-md row items-start">
            <q-date :value="deadLine" @input="onInputDate" minimal />
          </div>
        </div>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup @click="cancel"></q-btn>
          <q-btn flat label="Edit" v-close-popup @click="edit"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { editToDo } from "@/models/dashboard/dashboardService";

@Component({})
export default class PromptEdit extends Vue {
  @Prop() prompt: boolean;
  @Prop() deadLine: Date;
  @Prop() toDoId: string;
  @Prop() value: string;
  @Prop() id: string;
  @Prop() listId: string;

  cancel() {
    console.log("cancel");
  }
  edit() {
    console.log(this.value, this.deadLine);
  }
  showDeadLine() {
    console.log("deadLine");
  }
  onInput(val) {
    this.value = val;
  }
  onInputDate(val) {
    this.deadLine = val;
  }
}
</script>
