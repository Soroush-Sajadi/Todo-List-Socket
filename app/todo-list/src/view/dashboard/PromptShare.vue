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
            @input="onInput"
            @keyup.enter="share"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup @click="cancel"></q-btn>
          <q-btn flat label="Share" v-close-popup @click="share"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class PromptShare extends Vue {
  @Prop() prompt: boolean;
  user = "";

  onInput(val) {
    this.user = val;
    console.log(val);
  }
  cancel() {
    this.$emit("close", false);
  }
  share() {
    console.log(this.user);
    this.$emit("close", false);
  }
}
</script>
