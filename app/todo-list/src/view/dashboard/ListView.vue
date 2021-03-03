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
      <div class="lists" v-for="list in lists" :key="list.listId">
        <q-list>
          <q-item
            clickable
            v-close-popup
            :id="list.listId"
            @click="onItemClick"
          >
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ list.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-btn-dropdown>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class ListView extends Vue {
  @Prop() lists: Array<any>;
  onMainClick() {
    console.log("Clicked on main button");
  }

  onItemClick(event) {
    this.$emit("toDo", event.currentTarget.id);
  }
}
</script>
