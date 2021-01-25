/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import Model from "./Model";
import { initModel, initNewModel } from "./initModel";
import { serialize, serializedChanges } from "./serialize";
import { getModel, removeModel } from "@/store";

export interface Update<T> {
  changes: any;
  model: T;
  oldProps?: any;
}

export default function<C extends typeof Model>(
  M: C,
  baseUrl: string = M.baseUrl
) {
  type T = InstanceType<typeof M>;

  // async function loadAll(url = baseUrl): Promise<Array<T>> {
  //   const { data } = await axios.get(url);
  //   return mapToModels(data);
  // }

  // async function searchModels(query): Promise<Array<T>> {
  //   const { data } = await axios.post(baseUrl + "/search", serialize(query));
  //   return mapToModels(data);
  // }

  // async function findModel(id): Promise<T> {
  //   const { data } = await axios.get(baseUrl + "/" + id);
  //   return mapToModel(data);
  // }

  async function createModel(model): Promise<Update<T>> {
    const serialized = serialize(model);
    const { data } = await axios.post(baseUrl, serialized);
    return { model: mapToModel(data), changes: serialized, oldProps: {} };
  }

  // async function updateModel(model, original?: T): Promise<Update<T>> {
  //   original = original || getModel(model.id, M);

  //   const changes = serializedChanges(model, original);
  //   const oldProps = serializedChanges(original, model);
  //   const { data } = await axios.put(baseUrl, changes);

  //   Object.assign(original, data);
  //   initModel(original, true);

  //   return { model: original, changes, oldProps };
  // }

  // async function saveModel(model): Promise<Update<T>> {
  //   if (model.id == null) {
  //     return createModel(model);
  //   } else {
  //     return updateModel(model);
  //   }
  // }

  // async function destroyModel(model): Promise<Update<T>> {
  //   await axios.delete(baseUrl + "/" + model.id);
  //   removeModel(model);
  //   const props = serialize(model);
  //   return { model, changes: {}, oldProps: props };
  // }

  function mapToModel(data): T {
    return initNewModel(data, M, true) as T;
  }
  function mapToModels(data): Array<T> {
    return data.map(m => mapToModel(m));
  }

  return {
    // loadAll,
    // saveModel,
    // destroyModel,
    // searchModels,
    createModel,
    // updateModel,
    // findModel
  };
}
