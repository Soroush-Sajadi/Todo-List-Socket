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
            <q-item-section :id="list.listId" @click="onItemClick">
              <q-item-label>{{ list.name }}</q-item-label>
            </q-item-section>
            <q-item-section :id="list.listId" @click="onShareClick" side>
              <q-item-label>Share</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-btn-dropdown>
    <PromptShare :prompt="prompt" @close="close" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import PromptShare from "./PromptShare.vue";
@Component({
  components: { PromptShare }
})
export default class ListView extends Vue {
  @Prop() lists: Array<any>;
  prompt = false;
  onMainClick() {
    console.log("Clicked on main button");
  }

  onItemClick(event) {
    this.$emit("toDo", event.currentTarget.id);
  }

  onShareClick(event) {
    this.prompt = true;
    console.log("F", event.currentTarget.id);
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
