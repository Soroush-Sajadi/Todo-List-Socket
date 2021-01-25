// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-empty-function */
// import _ from "lodash";
// import { initNewModel, initModel, copy, serialize } from "@/models/base";

// export default class Model {
//   id: string;

//   static baseUrl: string = null;
//   static storeModel = true;
//   constructor(attributes = {}) {
//     _.assign(this, attributes);
//   }

//   static define(): any {
//     return {};
//   }
//   postInitModel(): void {}

//   initModel() {
//     return initModel(this);
//   }
//   serialize() {
//     return serialize(this);
//   }
//   copy() {
//     return copy(this);
//   }
//   static initNewModel<T extends typeof Model>(
//     this: T,
//     data,
//     addToStore = false
//   ): InstanceType<T> {
//     return initNewModel(data, this, addToStore);
//   }
//   static initNewModels<T extends typeof Model>(
//     this: T,
//     dataArray: Array<object>,
//     addToStore = false
//   ): Array<InstanceType<T>> {
//     return dataArray.map(data => initNewModel(data, this, addToStore));
//   }

//   equals(model) {
//     return this === model;
//   }
// }
