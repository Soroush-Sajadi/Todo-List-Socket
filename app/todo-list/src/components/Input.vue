<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 400px">
      <q-input
        standout="bg-teal text-white"
        color="primary"
        @input="onInput"
        v-model="text"
        :label="name"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
class Input extends Vue {
  @Prop() name: string;
  @Prop() value: string;
  text = "";

  onInput(val) {
    this.text = val;
    return this.$emit("input", this.text);
  }
}

export default Input;
</script>
<style></style>
