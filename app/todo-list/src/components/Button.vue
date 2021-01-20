<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" :label="name" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Button extends Vue {
  @Prop() name: string;
}
</script>
