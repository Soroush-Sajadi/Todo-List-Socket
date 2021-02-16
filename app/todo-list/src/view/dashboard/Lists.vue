<template>
  <div class="wrapper">
    <div class="lists-wrapper">
      <div
        class="lists"
        v-for="list in lists"
        :id="list.listId"
        :key="list.name"
        @click="toDo"
      >
        {{ list.name }}
      </div>
    </div>
    <div class="toDos-wrapper">
      <ToDos v-if="showToDo" :listId="listId" :id="id" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getLists } from "@/models/dashboard/dashboardService";
import ToDos from "./ToDos.vue";
@Component({
  components: { ToDos }
})
export default class Lists extends Vue {
  @Prop() id: string;
  lists = [];
  showToDo = false;
  listId = "";

  async created() {
    const lists = await getLists(this.id);
    this.lists = lists.data;
  }

  toDo(event) {
    this.listId = event.currentTarget.id;
    this.showToDo = true;
  }
}
</script>
<style lang="scss">
.lists-wrapper {
  width: 50%;
}
.wrapper {
  display: flex;
}
.toDos-wrapper {
  width: 50%;
}
</style>
