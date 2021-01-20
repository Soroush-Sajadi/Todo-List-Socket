<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" :label="name" @click="click" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Button extends Vue {
  @Prop() name: string;
  @Prop() click: string;
}
</script>
