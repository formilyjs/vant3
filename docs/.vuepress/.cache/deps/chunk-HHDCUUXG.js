import {
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_SEARCH_HOT_KEYS,
  init_define_SEARCH_LOCALES
} from "./chunk-AISRZZ4F.js";

// node_modules/@formily/reactive/esm/externals.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive/esm/checkers.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var toString = Object.prototype.toString;
var isMap = function(val) {
  return val && val instanceof Map;
};
var isSet = function(val) {
  return val && val instanceof Set;
};
var isWeakMap = function(val) {
  return val && val instanceof WeakMap;
};
var isWeakSet = function(val) {
  return val && val instanceof WeakSet;
};
var isFn = function(val) {
  return typeof val === "function";
};
var isArr = Array.isArray;
var isPlainObj = function(val) {
  return toString.call(val) === "[object Object]";
};
var isValid = function(val) {
  return val !== null && val !== void 0;
};
var isCollectionType = function(target) {
  return isMap(target) || isWeakMap(target) || isSet(target) || isWeakSet(target);
};
var isNormalType = function(target) {
  return isPlainObj(target) || isArr(target);
};

// node_modules/@formily/reactive/esm/environment.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive/esm/array.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var toArray = function(value) {
  return Array.isArray(value) ? value : value !== void 0 && value !== null ? [value] : [];
};
var ArraySet = function() {
  function ArraySet2(value) {
    if (value === void 0) {
      value = [];
    }
    this.batchDeleting = false;
    this.value = value;
  }
  ArraySet2.prototype.add = function(item) {
    if (!this.has(item)) {
      this.value.push(item);
    }
  };
  ArraySet2.prototype.has = function(item) {
    return this.value.indexOf(item) > -1;
  };
  ArraySet2.prototype.delete = function(item) {
    if (this.batchDeleting)
      return;
    var index = this.value.indexOf(item);
    if (index > -1) {
      this.value.splice(index, 1);
    }
  };
  ArraySet2.prototype.forEach = function(callback) {
    if (this.value.length === 0)
      return;
    for (var index = 0, len = this.value.length; index < len; index++) {
      callback(this.value[index]);
    }
  };
  ArraySet2.prototype.forEachDelete = function(callback) {
    if (this.value.length === 0)
      return;
    this.batchDeleting = true;
    for (var index = 0; index < this.value.length; index++) {
      var item = this.value[index];
      this.value.splice(index, 1);
      callback(item);
      index--;
    }
    this.batchDeleting = false;
  };
  ArraySet2.prototype.clear = function() {
    this.value.length = 0;
  };
  return ArraySet2;
}();

// node_modules/@formily/reactive/esm/environment.js
var ProxyRaw = /* @__PURE__ */ new WeakMap();
var RawProxy = /* @__PURE__ */ new WeakMap();
var RawShallowProxy = /* @__PURE__ */ new WeakMap();
var RawNode = /* @__PURE__ */ new WeakMap();
var RawReactionsMap = /* @__PURE__ */ new WeakMap();
var ReactionStack = [];
var BatchCount = { value: 0 };
var UntrackCount = { value: 0 };
var BatchScope = { value: false };
var DependencyCollected = { value: false };
var PendingReactions = new ArraySet();
var PendingScopeReactions = new ArraySet();
var BatchEndpoints = new ArraySet();
var MakeObservableSymbol = Symbol("MakeObservableSymbol");
var ObserverListeners = new ArraySet();

// node_modules/@formily/reactive/esm/tree.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var DataChange = function() {
  function DataChange2(operation, node) {
    this.key = operation.key;
    this.type = operation.type;
    this.object = operation.target;
    this.value = operation.value;
    this.oldValue = operation.oldValue;
    this.path = node.path.concat(operation.key);
  }
  return DataChange2;
}();
var DataNode = function() {
  function DataNode2(target, key, value) {
    this.target = target;
    this.key = key;
    this.value = value;
  }
  Object.defineProperty(DataNode2.prototype, "path", {
    get: function() {
      if (!this.parent)
        return this.key ? [this.key] : [];
      return this.parent.path.concat(this.key);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DataNode2.prototype, "targetRaw", {
    get: function() {
      return ProxyRaw.get(this.target) || this.target;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DataNode2.prototype, "parent", {
    get: function() {
      if (!this.target)
        return;
      return getDataNode(this.targetRaw);
    },
    enumerable: false,
    configurable: true
  });
  DataNode2.prototype.isEqual = function(node) {
    if (this.key) {
      return node.targetRaw === this.targetRaw && node.key === this.key;
    }
    return node.value === this.value;
  };
  DataNode2.prototype.contains = function(node) {
    if (node === this)
      return true;
    var parent = node.parent;
    while (!!parent) {
      if (this.isEqual(parent))
        return true;
      parent = parent.parent;
    }
    return false;
  };
  return DataNode2;
}();
var getDataNode = function(raw) {
  return RawNode.get(raw);
};
var setDataNode = function(raw, node) {
  RawNode.set(raw, node);
};
var buildDataTree = function(target, key, value) {
  var raw = ProxyRaw.get(value) || value;
  var currentNode = getDataNode(raw);
  if (currentNode)
    return currentNode;
  setDataNode(raw, new DataNode(target, key, value));
};

// node_modules/@formily/reactive/esm/externals.js
var RAW_TYPE = Symbol("RAW_TYPE");
var OBSERVABLE_TYPE = Symbol("OBSERVABLE_TYPE");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isObservable = function(target) {
  return ProxyRaw.has(target);
};
var isAnnotation = function(target) {
  return target && !!target[MakeObservableSymbol];
};
var isSupportObservable = function(target) {
  if (!isValid(target))
    return false;
  if (isArr(target))
    return true;
  if (isPlainObj(target)) {
    if (target[RAW_TYPE]) {
      return false;
    }
    if (target[OBSERVABLE_TYPE]) {
      return true;
    }
    if ("$$typeof" in target && "_owner" in target) {
      return false;
    }
    if (target["_isAMomentObject"]) {
      return false;
    }
    if (target["_isJSONSchemaObject"]) {
      return false;
    }
    if (isFn(target["toJS"])) {
      return false;
    }
    if (isFn(target["toJSON"])) {
      return false;
    }
    return true;
  }
  if (isMap(target) || isWeakMap(target) || isSet(target) || isWeakSet(target))
    return true;
  return false;
};
var toJS = function(values) {
  var visited = /* @__PURE__ */ new WeakSet();
  var _toJS = function(values2) {
    if (visited.has(values2)) {
      return values2;
    }
    if (values2 && values2[RAW_TYPE])
      return values2;
    if (isArr(values2)) {
      if (isObservable(values2)) {
        visited.add(values2);
        var res_1 = [];
        values2.forEach(function(item) {
          res_1.push(_toJS(item));
        });
        visited.delete(values2);
        return res_1;
      }
    } else if (isPlainObj(values2)) {
      if (isObservable(values2)) {
        visited.add(values2);
        var res = {};
        for (var key in values2) {
          if (hasOwnProperty.call(values2, key)) {
            res[key] = _toJS(values2[key]);
          }
        }
        visited.delete(values2);
        return res;
      }
    }
    return values2;
  };
  return _toJS(values);
};
var contains = function(target, property) {
  var targetRaw = ProxyRaw.get(target) || target;
  var propertyRaw = ProxyRaw.get(property) || property;
  if (targetRaw === propertyRaw)
    return true;
  var targetNode = getDataNode(targetRaw);
  var propertyNode = getDataNode(propertyRaw);
  if (!targetNode)
    return false;
  if (!propertyNode)
    return false;
  return targetNode.contains(propertyNode);
};
var hasCollected = function(callback) {
  DependencyCollected.value = false;
  callback === null || callback === void 0 ? void 0 : callback();
  return DependencyCollected.value;
};

// node_modules/@formily/reactive/esm/batch.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive/esm/reaction.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var ITERATION_KEY = Symbol("iteration key");
var addRawReactionsMap = function(target, key, reaction2) {
  var reactionsMap = RawReactionsMap.get(target);
  if (reactionsMap) {
    var reactions = reactionsMap.get(key);
    if (reactions) {
      reactions.add(reaction2);
    } else {
      reactionsMap.set(key, new ArraySet([reaction2]));
    }
    return reactionsMap;
  } else {
    var reactionsMap_1 = /* @__PURE__ */ new Map([
      [key, new ArraySet([reaction2])]
    ]);
    RawReactionsMap.set(target, reactionsMap_1);
    return reactionsMap_1;
  }
};
var addReactionsMapToReaction = function(reaction2, reactionsMap) {
  var bindSet = reaction2._reactionsSet;
  if (bindSet) {
    bindSet.add(reactionsMap);
  } else {
    reaction2._reactionsSet = new ArraySet([reactionsMap]);
  }
  return bindSet;
};
var getReactionsFromTargetKey = function(target, key) {
  var reactionsMap = RawReactionsMap.get(target);
  var reactions = [];
  if (reactionsMap) {
    var map = reactionsMap.get(key);
    if (map) {
      map.forEach(function(reaction2) {
        if (reactions.indexOf(reaction2) === -1) {
          reactions.push(reaction2);
        }
      });
    }
  }
  return reactions;
};
var runReactions = function(target, key) {
  var reactions = getReactionsFromTargetKey(target, key);
  var prevUntrackCount = UntrackCount.value;
  UntrackCount.value = 0;
  for (var i = 0, len = reactions.length; i < len; i++) {
    var reaction2 = reactions[i];
    if (reaction2._isComputed) {
      reaction2._scheduler(reaction2);
    } else if (isScopeBatching()) {
      PendingScopeReactions.add(reaction2);
    } else if (isBatching()) {
      PendingReactions.add(reaction2);
    } else {
      if (isFn(reaction2._scheduler)) {
        reaction2._scheduler(reaction2);
      } else {
        reaction2();
      }
    }
  }
  UntrackCount.value = prevUntrackCount;
};
var notifyObservers = function(operation) {
  ObserverListeners.forEach(function(fn) {
    return fn(operation);
  });
};
var bindTargetKeyWithCurrentReaction = function(operation) {
  var key = operation.key, type = operation.type, target = operation.target;
  if (type === "iterate") {
    key = ITERATION_KEY;
  }
  var current = ReactionStack[ReactionStack.length - 1];
  if (isUntracking())
    return;
  if (current) {
    DependencyCollected.value = true;
    addReactionsMapToReaction(current, addRawReactionsMap(target, key, current));
  }
};
var bindComputedReactions = function(reaction2) {
  if (isFn(reaction2)) {
    var current = ReactionStack[ReactionStack.length - 1];
    if (current) {
      var computes = current._computesSet;
      if (computes) {
        computes.add(reaction2);
      } else {
        current._computesSet = new ArraySet([reaction2]);
      }
    }
  }
};
var runReactionsFromTargetKey = function(operation) {
  var key = operation.key, type = operation.type, target = operation.target, oldTarget = operation.oldTarget;
  batchStart();
  notifyObservers(operation);
  if (type === "clear") {
    oldTarget.forEach(function(_, key2) {
      runReactions(target, key2);
    });
  } else {
    runReactions(target, key);
  }
  if (type === "add" || type === "delete" || type === "clear") {
    var newKey = Array.isArray(target) ? "length" : ITERATION_KEY;
    runReactions(target, newKey);
  }
  batchEnd();
};
var hasRunningReaction = function() {
  return ReactionStack.length > 0;
};
var releaseBindingReactions = function(reaction2) {
  var _a2;
  (_a2 = reaction2._reactionsSet) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(reactionsMap) {
    reactionsMap.forEach(function(reactions) {
      reactions.delete(reaction2);
    });
  });
  PendingReactions.delete(reaction2);
  PendingScopeReactions.delete(reaction2);
  delete reaction2._reactionsSet;
};
var suspendComputedReactions = function(current) {
  var _a2;
  (_a2 = current._computesSet) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(reaction2) {
    var reactions = getReactionsFromTargetKey(reaction2._context, reaction2._property);
    if (reactions.length === 0) {
      disposeBindingReactions(reaction2);
      reaction2._dirty = true;
    }
  });
};
var disposeBindingReactions = function(reaction2) {
  reaction2._disposed = true;
  releaseBindingReactions(reaction2);
  suspendComputedReactions(reaction2);
};
var batchStart = function() {
  BatchCount.value++;
};
var batchEnd = function() {
  BatchCount.value--;
  if (BatchCount.value === 0) {
    var prevUntrackCount = UntrackCount.value;
    UntrackCount.value = 0;
    executePendingReactions();
    executeBatchEndpoints();
    UntrackCount.value = prevUntrackCount;
  }
};
var batchScopeStart = function() {
  BatchScope.value = true;
};
var batchScopeEnd = function() {
  var prevUntrackCount = UntrackCount.value;
  BatchScope.value = false;
  UntrackCount.value = 0;
  PendingScopeReactions.forEachDelete(function(reaction2) {
    if (isFn(reaction2._scheduler)) {
      reaction2._scheduler(reaction2);
    } else {
      reaction2();
    }
  });
  UntrackCount.value = prevUntrackCount;
};
var untrackStart = function() {
  UntrackCount.value++;
};
var untrackEnd = function() {
  UntrackCount.value--;
};
var isBatching = function() {
  return BatchCount.value > 0;
};
var isScopeBatching = function() {
  return BatchScope.value;
};
var isUntracking = function() {
  return UntrackCount.value > 0;
};
var executePendingReactions = function() {
  PendingReactions.forEachDelete(function(reaction2) {
    if (isFn(reaction2._scheduler)) {
      reaction2._scheduler(reaction2);
    } else {
      reaction2();
    }
  });
};
var executeBatchEndpoints = function() {
  BatchEndpoints.forEachDelete(function(callback) {
    callback();
  });
};
var hasDepsChange = function(newDeps, oldDeps) {
  if (newDeps === oldDeps)
    return false;
  if (newDeps.length !== oldDeps.length)
    return true;
  if (newDeps.some(function(value, index) {
    return value !== oldDeps[index];
  }))
    return true;
  return false;
};
var disposeEffects = function(reaction2) {
  if (reaction2._effects) {
    try {
      batchStart();
      reaction2._effects.queue.forEach(function(item) {
        if (!item || !item.dispose)
          return;
        item.dispose();
      });
    } finally {
      batchEnd();
    }
  }
};

// node_modules/@formily/reactive/esm/internals.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive/esm/handlers.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var wellKnownSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function(key) {
  return Symbol[key];
}).filter(function(value) {
  return typeof value === "symbol";
}));
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
function findObservable(target, key, value) {
  var observableObj = RawProxy.get(value);
  if (observableObj) {
    return observableObj;
  }
  if (!isObservable(value) && isSupportObservable(value)) {
    return createObservable(target, key, value);
  }
  return value;
}
function patchIterator(target, key, iterator, isEntries) {
  var originalNext = iterator.next;
  iterator.next = function() {
    var _a2 = originalNext.call(iterator), done = _a2.done, value = _a2.value;
    if (!done) {
      if (isEntries) {
        value[1] = findObservable(target, key, value[1]);
      } else {
        value = findObservable(target, key, value);
      }
    }
    return { done, value };
  };
  return iterator;
}
var instrumentations = (_a = {
  has: function(key) {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    bindTargetKeyWithCurrentReaction({ target, key, type: "has" });
    return proto.has.apply(target, arguments);
  },
  get: function(key) {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    bindTargetKeyWithCurrentReaction({ target, key, type: "get" });
    return findObservable(target, key, proto.get.apply(target, arguments));
  },
  add: function(key) {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadKey = proto.has.call(target, key);
    var result = proto.add.apply(target, arguments);
    if (!hadKey) {
      runReactionsFromTargetKey({ target, key, value: key, type: "add" });
    }
    return result;
  },
  set: function(key, value) {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadKey = proto.has.call(target, key);
    var oldValue = proto.get.call(target, key);
    var result = proto.set.apply(target, arguments);
    if (!hadKey) {
      runReactionsFromTargetKey({ target, key, value, type: "add" });
    } else if (value !== oldValue) {
      runReactionsFromTargetKey({ target, key, value, oldValue, type: "set" });
    }
    return result;
  },
  delete: function(key) {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadKey = proto.has.call(target, key);
    var oldValue = proto.get ? proto.get.call(target, key) : void 0;
    var result = proto.delete.apply(target, arguments);
    if (hadKey) {
      runReactionsFromTargetKey({ target, key, oldValue, type: "delete" });
    }
    return result;
  },
  clear: function() {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadItems = target.size !== 0;
    var oldTarget = target instanceof Map ? new Map(target) : new Set(target);
    var result = proto.clear.apply(target, arguments);
    if (hadItems) {
      runReactionsFromTargetKey({ target, oldTarget, type: "clear" });
    }
    return result;
  },
  forEach: function(cb) {
    var _a2;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    bindTargetKeyWithCurrentReaction({ target, type: "iterate" });
    var wrappedCb = function(value, key) {
      var args2 = [];
      for (var _i2 = 2; _i2 < arguments.length; _i2++) {
        args2[_i2 - 2] = arguments[_i2];
      }
      return cb.apply(void 0, __spreadArray([findObservable(target, key, value), key], __read(args2), false));
    };
    return (_a2 = proto.forEach).call.apply(_a2, __spreadArray([target, wrappedCb], __read(args), false));
  },
  keys: function() {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    bindTargetKeyWithCurrentReaction({ target, type: "iterate" });
    return proto.keys.apply(target, arguments);
  },
  values: function() {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    bindTargetKeyWithCurrentReaction({ target, type: "iterate" });
    var iterator = proto.values.apply(target, arguments);
    return patchIterator(target, "", iterator, false);
  },
  entries: function() {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    bindTargetKeyWithCurrentReaction({ target, type: "iterate" });
    var iterator = proto.entries.apply(target, arguments);
    return patchIterator(target, "", iterator, true);
  }
}, _a[Symbol.iterator] = function() {
  var target = ProxyRaw.get(this);
  var proto = Reflect.getPrototypeOf(this);
  bindTargetKeyWithCurrentReaction({ target, type: "iterate" });
  var iterator = proto[Symbol.iterator].apply(target, arguments);
  return patchIterator(target, "", iterator, target instanceof Map);
}, Object.defineProperty(_a, "size", {
  get: function() {
    var target = ProxyRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    bindTargetKeyWithCurrentReaction({ target, type: "iterate" });
    return Reflect.get(proto, "size", target);
  },
  enumerable: false,
  configurable: true
}), _a);
var collectionHandlers = {
  get: function(target, key, receiver) {
    target = hasOwnProperty2.call(instrumentations, key) ? instrumentations : target;
    return Reflect.get(target, key, receiver);
  }
};
var baseHandlers = {
  get: function(target, key, receiver) {
    if (!key)
      return;
    var result = target[key];
    if (typeof key === "symbol" && wellKnownSymbols.has(key)) {
      return result;
    }
    bindTargetKeyWithCurrentReaction({ target, key, receiver, type: "get" });
    var observableResult = RawProxy.get(result);
    if (observableResult) {
      return observableResult;
    }
    if (!isObservable(result) && isSupportObservable(result)) {
      var descriptor = Reflect.getOwnPropertyDescriptor(target, key);
      if (!descriptor || !(descriptor.writable === false && descriptor.configurable === false)) {
        return createObservable(target, key, result);
      }
    }
    return result;
  },
  has: function(target, key) {
    var result = Reflect.has(target, key);
    bindTargetKeyWithCurrentReaction({ target, key, type: "has" });
    return result;
  },
  ownKeys: function(target) {
    var keys = Reflect.ownKeys(target);
    bindTargetKeyWithCurrentReaction({ target, type: "iterate" });
    return keys;
  },
  set: function(target, key, value, receiver) {
    var hadKey = hasOwnProperty2.call(target, key);
    var newValue = createObservable(target, key, value);
    var oldValue = target[key];
    target[key] = newValue;
    if (!hadKey) {
      runReactionsFromTargetKey({
        target,
        key,
        value: newValue,
        oldValue,
        receiver,
        type: "add"
      });
    } else if (value !== oldValue) {
      runReactionsFromTargetKey({
        target,
        key,
        value: newValue,
        oldValue,
        receiver,
        type: "set"
      });
    }
    return true;
  },
  deleteProperty: function(target, key) {
    var oldValue = target[key];
    delete target[key];
    runReactionsFromTargetKey({
      target,
      key,
      oldValue,
      type: "delete"
    });
    return true;
  }
};

// node_modules/@formily/reactive/esm/internals.js
var createNormalProxy = function(target, shallow2) {
  var proxy = new Proxy(target, baseHandlers);
  ProxyRaw.set(proxy, target);
  if (shallow2) {
    RawShallowProxy.set(target, proxy);
  } else {
    RawProxy.set(target, proxy);
  }
  return proxy;
};
var createCollectionProxy = function(target, shallow2) {
  var proxy = new Proxy(target, collectionHandlers);
  ProxyRaw.set(proxy, target);
  if (shallow2) {
    RawShallowProxy.set(target, proxy);
  } else {
    RawProxy.set(target, proxy);
  }
  return proxy;
};
var createShallowProxy = function(target) {
  if (isNormalType(target))
    return createNormalProxy(target, true);
  if (isCollectionType(target))
    return createCollectionProxy(target, true);
  return target;
};
var createObservable = function(target, key, value, shallow2) {
  if (typeof value !== "object")
    return value;
  var raw = ProxyRaw.get(value);
  if (!!raw) {
    var node = getDataNode(raw);
    if (!node.target)
      node.target = target;
    node.key = key;
    return value;
  }
  if (!isSupportObservable(value))
    return value;
  if (target) {
    var parentRaw = ProxyRaw.get(target) || target;
    var isShallowParent = RawShallowProxy.get(parentRaw);
    if (isShallowParent)
      return value;
  }
  buildDataTree(target, key, value);
  if (shallow2)
    return createShallowProxy(value);
  if (isNormalType(value))
    return createNormalProxy(value);
  if (isCollectionType(value))
    return createCollectionProxy(value);
  return value;
};
var createAnnotation = function(maker) {
  var annotation = function(target) {
    return maker({ value: target });
  };
  if (isFn(maker)) {
    annotation[MakeObservableSymbol] = maker;
  }
  return annotation;
};
var getObservableMaker = function(target) {
  if (target[MakeObservableSymbol]) {
    if (!target[MakeObservableSymbol][MakeObservableSymbol]) {
      return target[MakeObservableSymbol];
    }
    return getObservableMaker(target[MakeObservableSymbol]);
  }
};
var createBoundaryFunction = function(start, end) {
  function boundary(fn) {
    var results;
    try {
      start();
      if (isFn(fn)) {
        results = fn();
      }
    } finally {
      end();
    }
    return results;
  }
  boundary.bound = createBindFunction(boundary);
  return boundary;
};
var createBindFunction = function(boundary) {
  function bind(callback, context) {
    return function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return boundary(function() {
        return callback.apply(context, args);
      });
    };
  }
  return bind;
};
var createBoundaryAnnotation = function(start, end) {
  var boundary = createBoundaryFunction(start, end);
  var annotation = createAnnotation(function(_a2) {
    var target = _a2.target, key = _a2.key;
    target[key] = boundary.bound(target[key], target);
    return target;
  });
  boundary[MakeObservableSymbol] = annotation;
  boundary.bound[MakeObservableSymbol] = annotation;
  return boundary;
};

// node_modules/@formily/reactive/esm/batch.js
var batch = createBoundaryAnnotation(batchStart, batchEnd);
batch.scope = createBoundaryAnnotation(batchScopeStart, batchScopeEnd);
batch.endpoint = function(callback) {
  if (!isFn(callback))
    return;
  if (BatchCount.value === 0) {
    callback();
  } else {
    BatchEndpoints.add(callback);
  }
};

// node_modules/@formily/reactive/esm/autorun.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var autorun = function(tracker, name) {
  if (name === void 0) {
    name = "AutoRun";
  }
  var reaction2 = function() {
    if (!isFn(tracker))
      return;
    if (reaction2._boundary > 0)
      return;
    if (ReactionStack.indexOf(reaction2) === -1) {
      releaseBindingReactions(reaction2);
      try {
        batchStart();
        ReactionStack.push(reaction2);
        tracker();
      } finally {
        ReactionStack.pop();
        reaction2._boundary++;
        batchEnd();
        reaction2._boundary = 0;
        reaction2._memos.cursor = 0;
        reaction2._effects.cursor = 0;
      }
    }
  };
  var cleanRefs = function() {
    reaction2._memos = {
      queue: [],
      cursor: 0
    };
    reaction2._effects = {
      queue: [],
      cursor: 0
    };
  };
  reaction2._boundary = 0;
  reaction2._name = name;
  cleanRefs();
  reaction2();
  return function() {
    disposeBindingReactions(reaction2);
    disposeEffects(reaction2);
    cleanRefs();
  };
};
autorun.memo = function(callback, dependencies) {
  if (!isFn(callback))
    return;
  var current = ReactionStack[ReactionStack.length - 1];
  if (!current || !current._memos)
    throw new Error("autorun.memo must used in autorun function body.");
  var deps = toArray(dependencies || []);
  var id = current._memos.cursor++;
  var old = current._memos.queue[id];
  if (!old || hasDepsChange(deps, old.deps)) {
    var value = callback();
    current._memos.queue[id] = {
      value,
      deps
    };
    return value;
  }
  return old.value;
};
autorun.effect = function(callback, dependencies) {
  if (!isFn(callback))
    return;
  var current = ReactionStack[ReactionStack.length - 1];
  if (!current || !current._effects)
    throw new Error("autorun.effect must used in autorun function body.");
  var effects = current._effects;
  var deps = toArray(dependencies || [{}]);
  var id = effects.cursor++;
  var old = effects.queue[id];
  if (!old || hasDepsChange(deps, old.deps)) {
    Promise.resolve(0).then(function() {
      if (current._disposed)
        return;
      var dispose = callback();
      if (isFn(dispose)) {
        effects.queue[id].dispose = dispose;
      }
    });
    effects.queue[id] = {
      deps
    };
  }
};
var reaction = function(tracker, subscriber, options) {
  var realOptions = __assign({ name: "Reaction" }, options);
  var value = {};
  var dirtyCheck = function() {
    if (isFn(realOptions.equals))
      return !realOptions.equals(value.oldValue, value.currentValue);
    return value.oldValue !== value.currentValue;
  };
  var fireAction = function() {
    try {
      batchStart();
      if (isFn(subscriber))
        subscriber(value.currentValue, value.oldValue);
    } finally {
      batchEnd();
    }
  };
  var reaction2 = function() {
    if (ReactionStack.indexOf(reaction2) === -1) {
      releaseBindingReactions(reaction2);
      try {
        ReactionStack.push(reaction2);
        value.currentValue = tracker();
      } finally {
        ReactionStack.pop();
      }
    }
  };
  reaction2._scheduler = function(looping) {
    looping();
    if (dirtyCheck())
      fireAction();
    value.oldValue = value.currentValue;
  };
  reaction2._name = realOptions.name;
  reaction2();
  value.oldValue = value.currentValue;
  if (realOptions.fireImmediately) {
    fireAction();
  }
  return function() {
    disposeBindingReactions(reaction2);
  };
};

// node_modules/@formily/reactive/esm/tracker.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var Tracker = function() {
  function Tracker2(scheduler, name) {
    var _this = this;
    if (name === void 0) {
      name = "TrackerReaction";
    }
    this.track = function(tracker) {
      if (!isFn(tracker))
        return _this.results;
      if (_this.track._boundary > 0)
        return;
      if (ReactionStack.indexOf(_this.track) === -1) {
        releaseBindingReactions(_this.track);
        try {
          batchStart();
          ReactionStack.push(_this.track);
          _this.results = tracker();
        } finally {
          ReactionStack.pop();
          _this.track._boundary++;
          batchEnd();
          _this.track._boundary = 0;
        }
      }
      return _this.results;
    };
    this.dispose = function() {
      disposeBindingReactions(_this.track);
    };
    this.track._scheduler = function(callback) {
      if (_this.track._boundary === 0)
        _this.dispose();
      if (isFn(callback))
        scheduler(callback);
    };
    this.track._name = name;
    this.track._boundary = 0;
  }
  return Tracker2;
}();

// node_modules/@formily/reactive/esm/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive/esm/action.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var action = createBoundaryAnnotation(function() {
  batchStart();
  untrackStart();
}, function() {
  untrackEnd();
  batchEnd();
});
action.scope = createBoundaryAnnotation(function() {
  batchScopeStart();
  untrackStart();
}, function() {
  untrackEnd();
  batchScopeEnd();
});

// node_modules/@formily/reactive/esm/untracked.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var untracked = createBoundaryFunction(untrackStart, untrackEnd);

// node_modules/@formily/reactive/esm/observable.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive/esm/annotations/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive/esm/annotations/observable.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var observable = createAnnotation(function(_a2) {
  var target = _a2.target, key = _a2.key, value = _a2.value;
  var store = {
    value: createObservable(target, key, target ? target[key] : value)
  };
  function get() {
    bindTargetKeyWithCurrentReaction({
      target,
      key,
      type: "get"
    });
    return store.value;
  }
  function set(value2) {
    var oldValue = store.value;
    value2 = createObservable(target, key, value2);
    store.value = value2;
    if (oldValue === value2)
      return;
    runReactionsFromTargetKey({
      target,
      key,
      type: "set",
      oldValue,
      value: value2
    });
  }
  if (target) {
    Object.defineProperty(target, key, {
      set,
      get,
      enumerable: true,
      configurable: false
    });
    return target;
  }
  return store.value;
});

// node_modules/@formily/reactive/esm/annotations/box.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var box = createAnnotation(function(_a2) {
  var target = _a2.target, key = _a2.key, value = _a2.value;
  var store = {
    value: target ? target[key] : value
  };
  var proxy = {
    set,
    get
  };
  ProxyRaw.set(proxy, store);
  RawProxy.set(store, proxy);
  buildDataTree(target, key, store);
  function get() {
    bindTargetKeyWithCurrentReaction({
      target: store,
      key,
      type: "get"
    });
    return store.value;
  }
  function set(value2) {
    var oldValue = store.value;
    store.value = value2;
    if (oldValue !== value2) {
      runReactionsFromTargetKey({
        target: store,
        key,
        type: "set",
        oldValue,
        value: value2
      });
    }
  }
  if (target) {
    Object.defineProperty(target, key, {
      value: proxy,
      enumerable: true,
      configurable: false,
      writable: false
    });
    return target;
  }
  return proxy;
});

// node_modules/@formily/reactive/esm/annotations/ref.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var ref = createAnnotation(function(_a2) {
  var target = _a2.target, key = _a2.key, value = _a2.value;
  var store = {
    value: target ? target[key] : value
  };
  var proxy = {};
  var context = target ? target : store;
  var property = target ? key : "value";
  function get() {
    bindTargetKeyWithCurrentReaction({
      target: context,
      key: property,
      type: "get"
    });
    return store.value;
  }
  function set(value2) {
    var oldValue = store.value;
    store.value = value2;
    if (oldValue !== value2) {
      runReactionsFromTargetKey({
        target: context,
        key: property,
        type: "set",
        oldValue,
        value: value2
      });
    }
  }
  if (target) {
    Object.defineProperty(target, key, {
      get,
      set,
      enumerable: true
    });
    return target;
  } else {
    Object.defineProperty(proxy, "value", {
      set,
      get
    });
    buildDataTree(target, key, store);
    ProxyRaw.set(proxy, store);
    RawProxy.set(store, proxy);
  }
  return proxy;
});

// node_modules/@formily/reactive/esm/annotations/shallow.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var shallow = createAnnotation(function(_a2) {
  var target = _a2.target, key = _a2.key, value = _a2.value;
  var store = {
    value: createObservable(target, key, target ? target[key] : value, true)
  };
  function get() {
    bindTargetKeyWithCurrentReaction({
      target,
      key,
      type: "get"
    });
    return store.value;
  }
  function set(value2) {
    var oldValue = store.value;
    value2 = createObservable(target, key, value2, true);
    store.value = value2;
    if (oldValue === value2)
      return;
    runReactionsFromTargetKey({
      target,
      key,
      type: "set",
      oldValue,
      value: value2
    });
  }
  if (target) {
    Object.defineProperty(target, key, {
      set,
      get,
      enumerable: true,
      configurable: false
    });
    return target;
  }
  return store.value;
});

// node_modules/@formily/reactive/esm/annotations/computed.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __read2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var getDescriptor = Object.getOwnPropertyDescriptor;
var getProto = Object.getPrototypeOf;
function getGetterAndSetter(target, key, value) {
  if (!target) {
    if (value) {
      if (isFn(value)) {
        return [value];
      } else {
        return [value.get, value.set];
      }
    }
    return [];
  }
  var descriptor = getDescriptor(target, key);
  if (descriptor)
    return [descriptor.get, descriptor.set];
  return getGetterAndSetter(getProto(target), key, value);
}
var computed = createAnnotation(function(_a2) {
  var target = _a2.target, key = _a2.key, value = _a2.value;
  var store = {};
  var proxy = {};
  var context = target ? target : store;
  var property = target ? key : "value";
  var _b = __read2(getGetterAndSetter(context, property, value), 2), getter = _b[0], setter = _b[1];
  function compute() {
    store.value = getter === null || getter === void 0 ? void 0 : getter.call(context);
  }
  function reaction2() {
    if (ReactionStack.indexOf(reaction2) === -1) {
      releaseBindingReactions(reaction2);
      try {
        ReactionStack.push(reaction2);
        compute();
      } finally {
        ReactionStack.pop();
      }
    }
  }
  reaction2._name = "ComputedReaction";
  reaction2._scheduler = function() {
    reaction2._dirty = true;
    runReactionsFromTargetKey({
      target: context,
      key: property,
      value: store.value,
      type: "set"
    });
  };
  reaction2._isComputed = true;
  reaction2._dirty = true;
  reaction2._context = context;
  reaction2._property = property;
  function get() {
    if (hasRunningReaction()) {
      bindComputedReactions(reaction2);
    }
    if (!isUntracking()) {
      if (reaction2._dirty) {
        reaction2();
        reaction2._dirty = false;
      }
    } else {
      compute();
    }
    bindTargetKeyWithCurrentReaction({
      target: context,
      key: property,
      type: "get"
    });
    return store.value;
  }
  function set(value2) {
    try {
      batchStart();
      setter === null || setter === void 0 ? void 0 : setter.call(context, value2);
    } finally {
      batchEnd();
    }
  }
  if (target) {
    Object.defineProperty(target, key, {
      get,
      set,
      enumerable: true
    });
    return target;
  } else {
    Object.defineProperty(proxy, "value", {
      set,
      get
    });
    buildDataTree(target, key, store);
    ProxyRaw.set(proxy, store);
    RawProxy.set(store, proxy);
  }
  return proxy;
});

// node_modules/@formily/reactive/esm/observable.js
function observable2(target) {
  return createObservable(null, null, target);
}
observable2.box = box;
observable2.ref = ref;
observable2.deep = observable;
observable2.shallow = shallow;
observable2.computed = computed;
observable2[MakeObservableSymbol] = observable;

// node_modules/@formily/reactive/esm/model.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function define(target, annotations) {
  if (isObservable(target))
    return target;
  if (!isSupportObservable(target))
    return target;
  buildDataTree(void 0, void 0, target);
  ProxyRaw.set(target, target);
  RawProxy.set(target, target);
  for (var key in annotations) {
    var annotation = annotations[key];
    if (isAnnotation(annotation)) {
      getObservableMaker(annotation)({
        target,
        key
      });
    }
  }
  return target;
}

// node_modules/@formily/reactive/esm/observe.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var observe = function(target, observer, deep) {
  if (deep === void 0) {
    deep = true;
  }
  var addListener = function(target2) {
    var raw = ProxyRaw.get(target2) || target2;
    var node = getDataNode(raw);
    var listener = function(operation) {
      var targetRaw = ProxyRaw.get(operation.target) || operation.target;
      var targetNode = getDataNode(targetRaw);
      if (deep) {
        if (node.contains(targetNode)) {
          observer(new DataChange(operation, targetNode));
          return;
        }
      }
      if (node === targetNode || node.targetRaw === targetRaw && node.key === operation.key) {
        observer(new DataChange(operation, targetNode));
      }
    };
    if (node && isFn(observer)) {
      ObserverListeners.add(listener);
    }
    return function() {
      ObserverListeners.delete(listener);
    };
  };
  if (target && typeof target !== "object")
    throw Error("Can not observe ".concat(typeof target, " type."));
  return addListener(target);
};

// node_modules/@formily/reactive/esm/types.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

export {
  isObservable,
  toJS,
  contains,
  hasCollected,
  batch,
  action,
  untracked,
  observable2 as observable,
  define,
  autorun,
  reaction,
  Tracker,
  observe
};
//# sourceMappingURL=chunk-HHDCUUXG.js.map
