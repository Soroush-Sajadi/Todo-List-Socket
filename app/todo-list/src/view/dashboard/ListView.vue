<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      split
      color="primary"
      push
      glossy
      no-caps
      icon="folder"
      label="ToDos Lists"
      @click="onMainClick"
    >
      <div v-for="list in lists" :key="list.listId">
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section
              :id="list.listId"
              @click="onItemClick(list.listId, list.name)"
            >
              <q-item-label>{{ list.name }}</q-item-label>
            </q-item-section>
            <q-item-section :id="list.listId" @click="onRemoveClick" side>
              <q-item-label>Remove</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-btn-dropdown>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { removeList } from "@/models/dashboard/dashboardService";
@Component({
  components: {}
})
export default class ListView extends Vue {
  @Prop() lists: Array<any>;
  prompt = false;
  onMainClick() {
    console.log("Clicked on main button");
  }

  get id() {
    return localStorage.id;
  }

  onItemClick(listId: string, listName: string) {
    const toDo = { listId: listId, listName: listName };
    this.$emit("toDo", toDo);
  }

  async onRemoveClick(event) {
    const result = await removeList(this.id, event.currentTarget.id);
    console.log(result);
  }

  close(val) {
    this.prompt = val;
  }
}
</script>
<style lang="scss">
.lists {
  display: flex;
}
</style>
