// /* eslint-disable @typescript-eslint/no-explicit-any */

// import Vue from "vue";
// import { Model } from "@/models/base";
// const store = Vue.observable({
//   profile: null,
//   globalError: null
// });
// (window as any).store = store;

// export default store;
// export function getObject(id) {
//   if (id == null) {
//     return null;
//   }
//   return store[id];
// }

// export function addModel<T extends Model>(instance: T): void {
//   const M = instance.constructor as typeof Model;
//   if (instance.id != null && M.storeModel) {
//     Vue.set(store, instance.id, instance);
//   }
// }

// export function removeModel<T extends Model>(instance: T): void {
//   delete store[instance.id];
// }

// export function getModel<C extends typeof Model>(
//   id: string,
//   M: C
// ): InstanceType<typeof M> {
//   if (!M.storeModel) {
//     return null;
//   }
//   const result = getObject(id);
//   if (result == null) {
//     return null;
//   }

//   if (!(result instanceof M)) {
//     console.error(`Model with id ${id} not instance of ${M.name}`);
//     return null;
//   }
//   return result as InstanceType<typeof M>;
// }

// export function addModels<T extends Model>(instances: Array<T>): void {
//   instances.forEach(instance => addModel(instance));
// }
