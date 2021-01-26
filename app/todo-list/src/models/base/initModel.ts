// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Model from "./Model";
// import _ from "lodash";
// import { getModel, addModel } from "@/store";

// export function initNewModel<C extends typeof Model>(
//   data: any,
//   M: C,
//   updateStore = false
// ): InstanceType<typeof M> {
//   const model = (updateStore && getModel(data.id, M)) || new M();
//   Object.assign(model, data);
//   return initModel(model, updateStore) as InstanceType<C>;
// }

// function getExistingModel<C extends typeof Model>(
//   id: string,
//   M: C
// ): InstanceType<typeof M> | string {
//   const model = getModel(id, M);
//   if (!model) {
//     console.warn(`could not find model for id ${id} of type ${M.name}`);
//     return id;
//   }
//   return model;
// }

// function initValue(value, def, updateStore) {
//   if (def.model) {
//     if (def.model instanceof Array && value instanceof Array) {
//       const [ValueModel] = def.model;
//       return value.map(v => asModel(v, ValueModel, updateStore));
//     }
//     if (_.isString(value)) {
//       return getExistingModel(value, def.model);
//     } else if (value instanceof Object) {
//       return asModel(value, def.model, updateStore);
//     }
//   }
//   if (def.embeddedModel) {
//     if (def.embeddedModel instanceof Array && value instanceof Array) {
//       const [EmbeddedModel] = def.embeddedModel;
//       return value.map(v => asModel(v, EmbeddedModel, updateStore));
//     }
//     if (
//       def.embeddedModel.prototype instanceof Model &&
//       value instanceof Object
//     ) {
//       const EmbeddedModel = def.embeddedModel;
//       return asModel(value, EmbeddedModel, updateStore);
//     }
//   }
//   if (def.type) {
//     if (def.type === "date") {
//       return new Date(value);
//     }
//   }

//   return value;
// }

// export function initModel<T extends Model>(
//   instance: T,
//   updateStore = false
// ): T {
//   const M = instance.constructor as typeof Model;
//   if (updateStore) {
//     addModel(instance);
//   }
//   if (M.define) {
//     _.forOwn(M.define(), (def, attr) => {
//       instance[attr] = initValue(instance[attr], def, updateStore);
//     });
//   }

//   instance.postInitModel && instance.postInitModel();
//   return instance;
// }

// function asModel(value, M, updateStore) {
//   if (value instanceof M) {
//     return value;
//   }
//   return initNewModel(value, M, updateStore);
// }
