<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getLists } from "@/models/dashboard/dashboardService";
@Component({})
export default class Lists extends Vue {
  @Prop() id: string;

  async created() {
    const lists = await getLists(this.id);
    console.log(lists);
  }
}
</script>
