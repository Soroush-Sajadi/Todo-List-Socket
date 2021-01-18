<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Input extends Vue {
  @Prop() value: string;

}
</script>
<style scoped>

</style>