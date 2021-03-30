<template>
  <div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Share With</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            autofocus
            :rules="validation.notEmpty"
            @input="onInput"
            @keyup.enter="share"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" @click="cancel"></q-btn>
          <q-btn flat label="Share" @click="share"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { validation } from "../common";
@Component({})
export default class PromptShare extends Vue {
  @Prop() prompt: boolean;
  @Prop() listName: string;
  user = "";

  get validation() {
    return validation;
  }
  onInput(val) {
    this.user = val;
    console.log(val);
  }
  cancel() {
    this.$emit("close", false);
  }

  share() {
    if (this.user.length > 0) {
      this.$emit("share", this.user);
    }
  }
}
</script>
