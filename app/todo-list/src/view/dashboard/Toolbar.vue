<template>
  <div>
    <div class="q-pa-md toolbar">
      <q-toolbar class="bg-primary text-white">
        <q-btn flat round dense icon="assignment_ind" />
        <q-toolbar-title>
          ToDo List
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="add"
          class="q-mr-xs"
          @click="addToDoList"
        />
        <q-btn flat round dense icon="more_vert">
          <q-menu cover auto-close>
            <q-list>
              <q-item clickable>
                <q-item-section @click="logOut">Log Out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Toolbar extends Vue {
  addToDoList() {
    this.$emit("add", true);
  }
  logOut() {
    localStorage.removeItem("id");
    this.$router.push({ path: "/login" });
  }
}
</script>
<style lang="scss">
.toolbar {
  margin-top: -5%;
}
</style>
