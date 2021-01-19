<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input standout="bg-teal text-white" v-model="text" :label="name" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
class Input extends Vue {
  @Prop() name: string;
  @Prop() value: string;
}
export default Input;
</script>
<style></style>
