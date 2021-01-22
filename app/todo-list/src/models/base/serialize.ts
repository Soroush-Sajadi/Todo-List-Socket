/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from "./Model";
import _ from "lodash";

function serializedValue(value, def) {
  if (value == null) {
    return value;
  }
  if (def.serialize instanceof Function) {
    return def.serialize(value);
  }

  if (def.model) {
    if (value instanceof Model) {
      return value.id;
    }
  }
  if (def.embeddedModel) {
    if (def.embeddedModel instanceof Array) {
      return value.map(v => serialize(v));
    }
    if (def.embeddedModel.prototype instanceof Model) {
      return serialize(value);
    }
  }

  return value;
}

export function serialize<T extends Model>(instance: T): object {
  const body: object = { ...instance };

  const M = instance.constructor as typeof Model;
  if (M.define) {
    _.forOwn(M.define(), (def, attr) => {
      if (def.serialize === false) {
        delete body[attr];
      }
      body[attr] = serializedValue(body[attr], def);
    });
  }

  return body;
}

export function serializedChanges<T extends Model>(
  instance: T,
  original: T
): object {
  const serialized = serialize(instance);
  const backup = serialize(original);

  const M = instance.constructor as typeof Model;
  const define = (M.define && M.define()) || {};
  _.forOwn(serialized, function(val, a) {
    if (_.isEqual(backup[a], serialized[a])) {
      delete serialized[a];
      return;
    }
    if (define[a] && define[a].serializeChanges === true) {
      if (serialized[a] instanceof Array) {
        serialized[a] = serializedArrayChanges(instance[a], original[a]);
      } else if (serialized[a] instanceof Object) {
        serialized[a] = serializedObjectChanges(serialized[a], backup[a]);
      }
    }
  });
  if (_.isEmpty(serialized)) {
    return {};
  }
  return { id: instance.id, ...serialized };
}

function serializedObjectChanges(originalSerialized, backup) {
  const serialized = { ...originalSerialized };
  _.forOwn(serialized, function(val, a) {
    if (_.isEqual(backup[a], serialized[a])) {
      delete serialized[a];
      return;
    }
  });
  return serialized;
}

export function serializedArrayChanges(
  instance: Array<any>,
  original: Array<any>
): Array<any> {
  const originalsWithoutId = original.filter(el => el.id == null);
  let nextIndexWithoutId = 0;

  function findOriginalWithId(id) {
    return _.find(original, el => el.id === id);
  }

  function findNextOriginalWithoutId() {
    return originalsWithoutId[nextIndexWithoutId++];
  }

  const result = instance.map(element => {
    const originalEl = element.id
      ? findOriginalWithId(element.id)
      : findNextOriginalWithoutId();
    return serializedChanges(element, originalEl || {});
  });

  return result.filter(change => !_.isEmpty(change));
}
