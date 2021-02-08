<template>
  <div>
    <ul id="example-1">
      <li v-for="list in lists" :key="list.name">
        {{ list.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getLists } from "@/models/dashboard/dashboardService";
@Component({})
export default class Lists extends Vue {
  @Prop() id: string;
  lists = [];

  async created() {
    const lists = await getLists(this.id);
    this.lists = lists.data;
  }
}
</script>
