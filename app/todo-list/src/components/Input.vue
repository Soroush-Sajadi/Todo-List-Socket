<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 400px">
      <q-input
        standout="bg-teal text-white"
        color="primary"
        @input="onInput"
        :value="value"
        :type="type"
        :label="name"
        :rules="rules"
        lazy-rules
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
  @Prop() rules: Function;
  @Prop() type: string;

  onInput(val) {
    return this.$emit("input", val);
  }
}

export default Input;
</script>
<style></style>
