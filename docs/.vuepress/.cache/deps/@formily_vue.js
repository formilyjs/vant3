import {
  createForm,
  isObjectField,
  isVoidField,
  onFieldInit,
  onFieldInitialValueChange,
  onFieldInputValueChange,
  onFieldMount,
  onFieldUnmount,
  onFieldValidateEnd,
  onFieldValidateFailed,
  onFieldValidateStart,
  onFieldValidateSuccess,
  onFieldValueChange
} from "./chunk-AUWCL3MT.js";
import {
  observer
} from "./chunk-2RPH5SMJ.js";
import {
  autorun,
  hasCollected,
  isObservable,
  observable,
  toJS,
  untracked
} from "./chunk-HHDCUUXG.js";
import {
  Path,
  each,
  instOf,
  isArr,
  isFn,
  isPlainObj,
  isStr,
  isValid,
  lowerCase,
  map,
  paramCase,
  reduce,
  toArr,
  uid
} from "./chunk-7M3ONT6T.js";
import {
  computed,
  defineComponent,
  h,
  init_runtime_dom_esm_bundler,
  inject,
  markRaw,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  provide,
  ref,
  shallowRef,
  toRaw,
  toRef,
  watch
} from "./chunk-ZR76IDHV.js";
import "./chunk-PGCIR3BC.js";
import {
  __export,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_SEARCH_HOT_KEYS,
  init_define_SEARCH_LOCALES
} from "./chunk-AISRZZ4F.js";

// dep:@formily_vue
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/json-schema/esm/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/json-schema/esm/schema.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/json-schema/esm/compiler.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/json-schema/esm/shared.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var REVA_ACTIONS_KEY = Symbol.for("__REVA_ACTIONS");
var SchemaNestedMap = {
  parent: true,
  root: true,
  properties: true,
  patternProperties: true,
  additionalProperties: true,
  items: true,
  additionalItems: true,
  "x-linkages": true,
  "x-reactions": true
};
var SchemaStateMap = {
  title: "title",
  description: "description",
  default: "initialValue",
  enum: "dataSource",
  readOnly: "readOnly",
  writeOnly: "editable",
  "x-content": "content",
  "x-data": "data",
  "x-value": "value",
  "x-editable": "editable",
  "x-disabled": "disabled",
  "x-read-pretty": "readPretty",
  "x-read-only": "readOnly",
  "x-visible": "visible",
  "x-hidden": "hidden",
  "x-display": "display",
  "x-pattern": "pattern",
  "x-validator": "validator",
  "x-decorator": "decoratorType",
  "x-component": "componentType",
  "x-decorator-props": "decoratorProps",
  "x-component-props": "componentProps"
};
var SchemaValidatorMap = {
  required: true,
  format: true,
  maxItems: true,
  minItems: true,
  maxLength: true,
  minLength: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  pattern: true,
  const: true,
  multipleOf: true,
  maxProperties: true,
  minProperties: true,
  uniqueItems: true
};
var SchemaNormalKeys = Object.keys(SchemaStateMap);
var SchemaValidatorKeys = Object.keys(SchemaValidatorMap);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var traverse = function(target, visitor) {
  var seenObjects = [];
  var root = target;
  var traverse2 = function(target2, path) {
    if (path === void 0) {
      path = [];
    }
    if (isPlainObj(target2)) {
      var seenIndex = seenObjects.indexOf(target2);
      if (seenIndex > -1) {
        return;
      }
      var addIndex = seenObjects.length;
      seenObjects.push(target2);
      if (isNoNeedCompileObject(target2) && root !== target2) {
        visitor(target2, path);
        return;
      }
      each(target2, function(value, key) {
        traverse2(value, path.concat(key));
      });
      seenObjects.splice(addIndex, 1);
    } else {
      visitor(target2, path);
    }
  };
  traverse2(target);
};
var traverseSchema = function(schema, visitor) {
  if (schema["x-validator"] !== void 0) {
    visitor(schema["x-validator"], ["x-validator"]);
  }
  var seenObjects = [];
  var root = schema;
  var traverse2 = function(target, path) {
    if (path === void 0) {
      path = [];
    }
    if (path[0] === "x-validator" || path[0] === "version" || path[0] === "_isJSONSchemaObject")
      return;
    if (String(path[0]).indexOf("x-") == -1 && isFn(target))
      return;
    if (SchemaNestedMap[path[0]])
      return;
    if (isPlainObj(target)) {
      if (path[0] === "default" || path[0] === "x-value") {
        visitor(target, path);
        return;
      }
      var seenIndex = seenObjects.indexOf(target);
      if (seenIndex > -1) {
        return;
      }
      var addIndex = seenObjects.length;
      seenObjects.push(target);
      if (isNoNeedCompileObject(target) && root !== target) {
        visitor(target, path);
        return;
      }
      each(target, function(value, key) {
        traverse2(value, path.concat(key));
      });
      seenObjects.splice(addIndex, 1);
    } else {
      visitor(target, path);
    }
  };
  traverse2(schema);
};
var isNoNeedCompileObject = function(source) {
  if ("$$typeof" in source && "_owner" in source) {
    return true;
  }
  if (source["_isAMomentObject"]) {
    return true;
  }
  if (Schema.isSchemaInstance(source)) {
    return true;
  }
  if (source[REVA_ACTIONS_KEY]) {
    return true;
  }
  if (isFn(source["toJS"])) {
    return true;
  }
  if (isFn(source["toJSON"])) {
    return true;
  }
  if (isObservable(source)) {
    return true;
  }
  return false;
};
var createDataSource = function(source) {
  return toArr(source).map(function(item) {
    if (typeof item === "object") {
      return item;
    } else {
      return {
        label: item,
        value: item
      };
    }
  });
};
var patchStateFormSchema = function(targetState, pattern, compiled) {
  untracked(function() {
    var _a;
    var path = Path.parse(pattern);
    var segments = path.segments;
    var key = segments[0];
    var isEnum = key === "enum" && isArr(compiled);
    var schemaMapKey = SchemaStateMap[key];
    if (schemaMapKey) {
      Path.setIn(targetState, [schemaMapKey].concat(segments.slice(1)), isEnum ? createDataSource(compiled) : compiled);
    } else {
      var isValidatorKey = SchemaValidatorMap[key];
      if (isValidatorKey) {
        (_a = targetState["setValidatorRule"]) === null || _a === void 0 ? void 0 : _a.call(targetState, key, compiled);
      }
    }
  });
};

// node_modules/@formily/json-schema/esm/compiler.js
var ExpRE = /^\s*\{\{([\s\S]*)\}\}\s*$/;
var Registry = {
  silent: false,
  compile: function(expression, scope) {
    if (scope === void 0) {
      scope = {};
    }
    if (Registry.silent) {
      try {
        return new Function("$root", "with($root) { return (".concat(expression, "); }"))(scope);
      } catch (_a) {
      }
    } else {
      return new Function("$root", "with($root) { return (".concat(expression, "); }"))(scope);
    }
  }
};
var silent = function(value) {
  if (value === void 0) {
    value = true;
  }
  Registry.silent = !!value;
};
var registerCompiler = function(compiler) {
  if (isFn(compiler)) {
    Registry.compile = compiler;
  }
};
var shallowCompile = function(source, scope) {
  if (isStr(source)) {
    var matched = source.match(ExpRE);
    if (!matched)
      return source;
    return Registry.compile(matched[1], scope);
  }
  return source;
};
var compile = function(source, scope) {
  var seenObjects = [];
  var compile2 = function(source2) {
    if (isStr(source2)) {
      return shallowCompile(source2, scope);
    } else if (isArr(source2)) {
      return source2.map(function(value) {
        return compile2(value);
      });
    } else if (isPlainObj(source2)) {
      if (isNoNeedCompileObject(source2))
        return source2;
      var seenIndex = seenObjects.indexOf(source2);
      if (seenIndex > -1) {
        return source2;
      }
      var addIndex = seenObjects.length;
      seenObjects.push(source2);
      var results = reduce(source2, function(buf, value, key) {
        buf[key] = compile2(value);
        return buf;
      }, {});
      seenObjects.splice(addIndex, 1);
      return results;
    }
    return source2;
  };
  return compile2(source);
};
var patchCompile = function(targetState, sourceState, scope) {
  traverse(sourceState, function(value, pattern) {
    var path = Path.parse(pattern);
    var compiled = compile(value, scope);
    var key = path.segments[0];
    if (compiled === void 0)
      return;
    if (hasOwnProperty.call(targetState, key)) {
      untracked(function() {
        return Path.setIn(targetState, path, compiled);
      });
    }
  });
};
var patchSchemaCompile = function(targetState, sourceSchema, scope, demand) {
  if (demand === void 0) {
    demand = false;
  }
  traverseSchema(sourceSchema, function(value, path) {
    var compiled = value;
    var collected = hasCollected(function() {
      compiled = compile(value, scope);
    });
    if (compiled === void 0)
      return;
    if (demand) {
      if (collected || !targetState.initialized) {
        patchStateFormSchema(targetState, path, compiled);
      }
    } else {
      patchStateFormSchema(targetState, path, compiled);
    }
  });
};

// node_modules/@formily/json-schema/esm/transformer.js
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
var FieldEffects = {
  onFieldInit,
  onFieldMount,
  onFieldUnmount,
  onFieldValueChange,
  onFieldInputValueChange,
  onFieldInitialValueChange,
  onFieldValidateStart,
  onFieldValidateEnd,
  onFieldValidateFailed,
  onFieldValidateSuccess
};
var DefaultFieldEffects = ["onFieldInit", "onFieldValueChange"];
var getDependencyValue = function(field, pattern, property) {
  var _a = __read(String(pattern).split(/\s*#\s*/), 2), target = _a[0], path = _a[1];
  return field.query(target).getIn(path || property || "value");
};
var getDependencies = function(field, dependencies) {
  if (isArr(dependencies)) {
    var results_1 = [];
    dependencies.forEach(function(pattern) {
      if (isStr(pattern)) {
        results_1.push(getDependencyValue(field, pattern));
      } else if (isPlainObj(pattern)) {
        if (pattern.name && pattern.source) {
          results_1[pattern.name] = getDependencyValue(field, pattern.source, pattern.property);
        }
      }
    });
    return results_1;
  } else if (isPlainObj(dependencies)) {
    return reduce(dependencies, function(buf, pattern, key) {
      buf[key] = getDependencyValue(field, pattern);
      return buf;
    }, {});
  }
  return [];
};
var setSchemaFieldState = function(options, demand) {
  if (demand === void 0) {
    demand = false;
  }
  var _a = options || {}, request = _a.request, target = _a.target, runner = _a.runner, field = _a.field, scope = _a.scope;
  if (!request)
    return;
  if (target) {
    if (request.state) {
      field.form.setFieldState(target, function(state) {
        return patchCompile(state, request.state, __assign(__assign({}, scope), { $target: state }));
      });
    }
    if (request.schema) {
      field.form.setFieldState(target, function(state) {
        return patchSchemaCompile(state, request.schema, __assign(__assign({}, scope), { $target: state }), demand);
      });
    }
    if (isStr(runner) && runner) {
      field.form.setFieldState(target, function(state) {
        shallowCompile("{{function(){".concat(runner, "}}}"), __assign(__assign({}, scope), { $target: state }))();
      });
    }
  } else {
    if (request.state) {
      field.setState(function(state) {
        return patchCompile(state, request.state, scope);
      });
    }
    if (request.schema) {
      field.setState(function(state) {
        return patchSchemaCompile(state, request.schema, scope, demand);
      });
    }
    if (isStr(runner) && runner) {
      shallowCompile("{{function(){".concat(runner, "}}}"), scope)();
    }
  }
};
var getBaseScope = function(field, options) {
  if (options === void 0) {
    options = {};
  }
  var $observable = function(target, deps) {
    return autorun.memo(function() {
      return observable(target);
    }, deps);
  };
  var $props = function(props) {
    return field.setComponentProps(props);
  };
  var $effect = autorun.effect;
  var $memo = autorun.memo;
  var $self = field;
  var $form = field.form;
  var $values = field.form.values;
  return __assign(__assign({}, options.scope), { $form, $self, $observable, $effect, $memo, $props, $values });
};
var getBaseReactions = function(schema, options) {
  return function(field) {
    setSchemaFieldState({
      field,
      request: { schema },
      scope: getBaseScope(field, options)
    }, true);
  };
};
var getUserReactions = function(schema, options) {
  var reactions = toArr(schema["x-reactions"]);
  return reactions.map(function(unCompiled) {
    return function(field) {
      var baseScope = getBaseScope(field, options);
      var reaction = shallowCompile(unCompiled, baseScope);
      if (!reaction)
        return;
      if (isFn(reaction)) {
        return reaction(field, baseScope);
      }
      var when = reaction.when, fulfill = reaction.fulfill, otherwise = reaction.otherwise, target = reaction.target, effects = reaction.effects;
      var run = function() {
        var $deps = getDependencies(field, reaction.dependencies);
        var $dependencies = $deps;
        var scope = __assign(__assign({}, baseScope), { $target: null, $deps, $dependencies });
        var compiledWhen = shallowCompile(when, scope);
        var condition = when ? compiledWhen : true;
        var request = condition ? fulfill : otherwise;
        var runner = condition ? fulfill === null || fulfill === void 0 ? void 0 : fulfill.run : otherwise === null || otherwise === void 0 ? void 0 : otherwise.run;
        setSchemaFieldState({
          field,
          target,
          request,
          runner,
          scope
        });
      };
      if (target) {
        reaction.effects = (effects === null || effects === void 0 ? void 0 : effects.length) ? effects : DefaultFieldEffects;
      }
      if (reaction.effects) {
        autorun.memo(function() {
          untracked(function() {
            each(reaction.effects, function(type) {
              if (FieldEffects[type]) {
                FieldEffects[type](field.address, run);
              }
            });
          });
        }, []);
      } else {
        run();
      }
    };
  });
};
var transformFieldProps = function(schema, options) {
  return {
    name: schema.name,
    reactions: [getBaseReactions(schema, options)].concat(getUserReactions(schema, options))
  };
};

// node_modules/@formily/json-schema/esm/patches.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var patches = [];
var polyfills = {};
var reducePatches = function(schema) {
  return patches.reduce(function(buf, patch) {
    return patch(buf);
  }, __assign2({}, schema));
};
var registerPatches = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  args.forEach(function(patch) {
    if (isFn(patch)) {
      patches.push(patch);
    }
  });
};
var registerPolyfills = function(version, patch) {
  if (version && isFn(patch)) {
    polyfills[version] = polyfills[version] || [];
    polyfills[version].push(patch);
  }
};
var enablePolyfills = function(versions) {
  if (isArr(versions)) {
    versions.forEach(function(version) {
      if (isArr(polyfills[version])) {
        polyfills[version].forEach(function(patch) {
          registerPatches(patch);
        });
      }
    });
  }
};

// node_modules/@formily/json-schema/esm/polyfills/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/json-schema/esm/polyfills/SPECIFICATION_1_0.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
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
var VOID_COMPONENTS = [
  "card",
  "block",
  "grid-col",
  "grid-row",
  "grid",
  "layout",
  "step",
  "tab",
  "text-box"
];
var TYPE_DEFAULT_COMPONENTS = {};
var transformCondition = function(condition) {
  if (isStr(condition)) {
    return condition.replace(/\$value/, "$self.value");
  }
};
var transformXLinkage = function(linkages) {
  if (isArr(linkages)) {
    return linkages.reduce(function(buf, item) {
      if (!item)
        return buf;
      if (item.type === "value:visible") {
        return buf.concat({
          target: item.target,
          when: transformCondition(item.condition),
          fulfill: {
            state: {
              visible: true
            }
          },
          otherwise: {
            state: {
              visible: false
            }
          }
        });
      } else if (item.type === "value:schema") {
        return buf.concat({
          target: item.target,
          when: transformCondition(item.condition),
          fulfill: {
            schema: SpecificationV1Polyfill(__assign3({ version: "1.0" }, item.schema))
          },
          otherwise: {
            schema: SpecificationV1Polyfill(__assign3({ version: "1.0" }, item.otherwise))
          }
        });
      } else if (item.type === "value:state") {
        return buf.concat({
          target: item.target,
          when: transformCondition(item.condition),
          fulfill: {
            state: item.state
          },
          otherwise: {
            state: item.otherwise
          }
        });
      }
    }, []);
  }
  return [];
};
var SpecificationV1Polyfill = function(schema) {
  if (isValid(schema["editable"])) {
    schema["x-editable"] = schema["x-editable"] || schema["editable"];
    delete schema["editable"];
  }
  if (isValid(schema["visible"])) {
    schema["x-visible"] = schema["x-visible"] || schema["visible"];
    delete schema["visible"];
  }
  if (isValid(schema["display"])) {
    schema["x-display"] = schema["x-display"] || (schema["display"] ? "visible" : "hidden");
    delete schema["display"];
  }
  if (isValid(schema["x-props"])) {
    schema["x-decorator-props"] = schema["x-decorator-props"] || schema["x-props"];
    delete schema["display"];
  }
  if (schema["x-linkages"]) {
    schema["x-reactions"] = toArr(schema["x-reactions"]).concat(transformXLinkage(schema["x-linkages"]));
    delete schema["x-linkages"];
  }
  if (schema["x-component"]) {
    if (VOID_COMPONENTS.some(function(component) {
      return lowerCase(component) === lowerCase(schema["x-component"]);
    })) {
      schema["type"] = "void";
    }
  } else {
    if (TYPE_DEFAULT_COMPONENTS[schema["type"]]) {
      schema["x-component"] = TYPE_DEFAULT_COMPONENTS[schema["type"]];
    }
  }
  if (!schema["x-decorator"] && schema["type"] !== "void" && schema["type"] !== "object") {
    schema["x-decorator"] = schema["x-decorator"] || "FormItem";
  }
  if (schema["x-rules"]) {
    schema["x-validator"] = [].concat(schema["x-validator"] || []).concat(schema["x-rules"]);
  }
  return schema;
};
registerPolyfills("1.0", SpecificationV1Polyfill);
var registerVoidComponents = function(components) {
  VOID_COMPONENTS.push.apply(VOID_COMPONENTS, __spreadArray([], __read2(components), false));
};
var registerTypeDefaultComponents = function(maps) {
  Object.assign(TYPE_DEFAULT_COMPONENTS, maps);
};

// node_modules/@formily/json-schema/esm/schema.js
var Schema = function() {
  function Schema2(json, parent) {
    var _this = this;
    this._isJSONSchemaObject = true;
    this.version = "2.0";
    this.addProperty = function(key, schema) {
      _this.properties = _this.properties || {};
      _this.properties[key] = new Schema2(schema, _this);
      _this.properties[key].name = key;
      return _this.properties[key];
    };
    this.removeProperty = function(key) {
      var schema = _this.properties[key];
      delete _this.properties[key];
      return schema;
    };
    this.setProperties = function(properties) {
      for (var key in properties) {
        _this.addProperty(key, properties[key]);
      }
      return _this;
    };
    this.addPatternProperty = function(key, schema) {
      if (!schema)
        return;
      _this.patternProperties = _this.patternProperties || {};
      _this.patternProperties[key] = new Schema2(schema, _this);
      _this.patternProperties[key].name = key;
      return _this.patternProperties[key];
    };
    this.removePatternProperty = function(key) {
      var schema = _this.patternProperties[key];
      delete _this.patternProperties[key];
      return schema;
    };
    this.setPatternProperties = function(properties) {
      if (!properties)
        return _this;
      for (var key in properties) {
        _this.addPatternProperty(key, properties[key]);
      }
      return _this;
    };
    this.setAdditionalProperties = function(properties) {
      if (!properties)
        return;
      _this.additionalProperties = new Schema2(properties);
      return _this.additionalProperties;
    };
    this.setItems = function(schema) {
      if (!schema)
        return;
      if (Array.isArray(schema)) {
        _this.items = schema.map(function(item) {
          return new Schema2(item, _this);
        });
      } else {
        _this.items = new Schema2(schema, _this);
      }
      return _this.items;
    };
    this.setAdditionalItems = function(items) {
      if (!items)
        return;
      _this.additionalItems = new Schema2(items, _this);
      return _this.additionalItems;
    };
    this.findDefinitions = function(ref2) {
      if (!ref2 || !_this.root || !isStr(ref2))
        return;
      if (ref2.indexOf("#/") !== 0)
        return;
      return Path.getIn(_this.root, ref2.substring(2).split("/"));
    };
    this.mapProperties = function(callback) {
      return Schema2.getOrderProperties(_this).map(function(_a, index) {
        var schema = _a.schema, key = _a.key;
        return callback(schema, key, index);
      });
    };
    this.mapPatternProperties = function(callback) {
      return Schema2.getOrderProperties(_this, "patternProperties").map(function(_a, index) {
        var schema = _a.schema, key = _a.key;
        return callback(schema, key, index);
      });
    };
    this.reduceProperties = function(callback, predicate) {
      var results = predicate;
      Schema2.getOrderProperties(_this, "properties").forEach(function(_a, index) {
        var schema = _a.schema, key = _a.key;
        results = callback(results, schema, key, index);
      });
      return results;
    };
    this.reducePatternProperties = function(callback, predicate) {
      var results = predicate;
      Schema2.getOrderProperties(_this, "patternProperties").forEach(function(_a, index) {
        var schema = _a.schema, key = _a.key;
        results = callback(results, schema, key, index);
      });
      return results;
    };
    this.compile = function(scope) {
      var schema = new Schema2({}, _this.parent);
      each(_this, function(value, key) {
        if (isFn(value) && !key.includes("x-"))
          return;
        if (key === "parent" || key === "root")
          return;
        if (!SchemaNestedMap[key]) {
          schema[key] = value ? compile(value, scope) : value;
        } else {
          schema[key] = value ? shallowCompile(value, scope) : value;
        }
      });
      return schema;
    };
    this.fromJSON = function(json2) {
      if (!json2)
        return _this;
      if (Schema2.isSchemaInstance(json2))
        return json2;
      each(reducePatches(json2), function(value, key) {
        if (isFn(value) && !key.includes("x-"))
          return;
        if (key === "properties") {
          _this.setProperties(value);
        } else if (key === "patternProperties") {
          _this.setPatternProperties(value);
        } else if (key === "additionalProperties") {
          _this.setAdditionalProperties(value);
        } else if (key === "items") {
          _this.setItems(value);
        } else if (key === "additionalItems") {
          _this.setAdditionalItems(value);
        } else if (key === "$ref") {
          _this.fromJSON(_this.findDefinitions(value));
        } else {
          _this[key] = value;
        }
      });
      return _this;
    };
    this.toJSON = function(recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var results = {};
      each(_this, function(value, key) {
        var _a, _b;
        if (isFn(value) && !key.includes("x-") || key === "parent" || key === "root")
          return;
        if (key === "properties" || key === "patternProperties") {
          if (!recursion)
            return;
          results[key] = map(value, function(item) {
            var _a2;
            return (_a2 = item === null || item === void 0 ? void 0 : item.toJSON) === null || _a2 === void 0 ? void 0 : _a2.call(item);
          });
        } else if (key === "additionalProperties" || key === "additionalItems") {
          if (!recursion)
            return;
          results[key] = (_a = value === null || value === void 0 ? void 0 : value.toJSON) === null || _a === void 0 ? void 0 : _a.call(value);
        } else if (key === "items") {
          if (!recursion)
            return;
          if (Array.isArray(value)) {
            results[key] = value.map(function(item) {
              var _a2;
              return (_a2 = item === null || item === void 0 ? void 0 : item.toJSON) === null || _a2 === void 0 ? void 0 : _a2.call(item);
            });
          } else {
            results[key] = (_b = value === null || value === void 0 ? void 0 : value.toJSON) === null || _b === void 0 ? void 0 : _b.call(value);
          }
        } else {
          results[key] = value;
        }
      });
      return results;
    };
    this.toFieldProps = function(options) {
      return transformFieldProps(_this, options);
    };
    if (parent) {
      this.parent = parent;
      this.root = parent.root;
    } else {
      this.root = this;
    }
    return this.fromJSON(json);
  }
  Schema2.getOrderProperties = function(schema, propertiesName) {
    if (schema === void 0) {
      schema = {};
    }
    if (propertiesName === void 0) {
      propertiesName = "properties";
    }
    var orderProperties = [];
    var unorderProperties = [];
    for (var key in schema[propertiesName]) {
      var item = schema[propertiesName][key];
      var index = item["x-index"];
      if (!isNaN(index)) {
        orderProperties[index] = { schema: item, key };
      } else {
        unorderProperties.push({ schema: item, key });
      }
    }
    return orderProperties.concat(unorderProperties).filter(function(item2) {
      return !!item2;
    });
  };
  Schema2.compile = function(expression, scope) {
    return compile(expression, scope);
  };
  Schema2.shallowCompile = function(expression, scope) {
    return shallowCompile(expression, scope);
  };
  Schema2.isSchemaInstance = function(value) {
    return instOf(value, Schema2);
  };
  Schema2.registerCompiler = registerCompiler;
  Schema2.registerPatches = registerPatches;
  Schema2.registerVoidComponents = registerVoidComponents;
  Schema2.registerTypeDefaultComponents = registerTypeDefaultComponents;
  Schema2.registerPolyfills = registerPolyfills;
  Schema2.enablePolyfills = enablePolyfills;
  Schema2.silent = silent;
  return Schema2;
}();

// node_modules/@formily/json-schema/esm/types.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/components/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/components/FormProvider.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/node_modules/vue-demi/lib/index.esm.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
init_runtime_dom_esm_bundler();
init_runtime_dom_esm_bundler();
var isVue2 = false;

// node_modules/@formily/vue/esm/shared/context.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var FormSymbol = Symbol("form");
var FieldSymbol = Symbol("field");
var SchemaMarkupSymbol = Symbol("schemaMarkup");
var SchemaSymbol = Symbol("schema");
var SchemaExpressionScopeSymbol = Symbol("schemaExpression");
var SchemaOptionsSymbol = Symbol("schemaOptions");

// node_modules/@formily/vue/esm/hooks/useAttach.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var useAttach = function(target) {
  watch(target, function(v, old, onInvalidate) {
    if (v && v !== old) {
      old === null || old === void 0 ? void 0 : old.onUnmount();
      nextTick(function() {
        return v.onMount();
      });
      onInvalidate(function() {
        return v.onUnmount();
      });
    }
  });
  onMounted(function() {
    var _a;
    (_a = target.value) === null || _a === void 0 ? void 0 : _a.onMount();
  });
  onUnmounted(function() {
    var _a;
    (_a = target.value) === null || _a === void 0 ? void 0 : _a.onUnmount();
  });
  return target;
};

// node_modules/@formily/vue/esm/hooks/useInjectionCleaner.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var useInjectionCleaner = function(injectionKeys) {
  injectionKeys.forEach(function(key) {
    return provide(key, ref());
  });
};

// node_modules/@formily/vue/esm/shared/h.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/shared/fragment.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/vue-frag/dist/frag.esm.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var $placeholder = Symbol();
var $fakeParent = Symbol();
var nextSiblingPatched = Symbol();
var childNodesPatched = Symbol();
var isFrag = function isFrag2(node) {
  return "frag" in node;
};
function patchParentNode(node, fakeParent) {
  if ($fakeParent in node) {
    return;
  }
  node[$fakeParent] = fakeParent;
  Object.defineProperty(node, "parentNode", {
    get: function get() {
      return this[$fakeParent] || this.parentElement;
    }
  });
}
function patchNextSibling(node) {
  if (nextSiblingPatched in node) {
    return;
  }
  node[nextSiblingPatched] = true;
  Object.defineProperty(node, "nextSibling", {
    get: function get() {
      var childNodes = this.parentNode.childNodes;
      var index = childNodes.indexOf(this);
      if (index > -1) {
        return childNodes[index + 1] || null;
      }
      return null;
    }
  });
}
function getTopFragment(node, fromParent) {
  while (node.parentNode !== fromParent) {
    var _node = node, parentNode = _node.parentNode;
    if (parentNode) {
      node = parentNode;
    }
  }
  return node;
}
var getChildNodes;
function getChildNodesWithFragments(node) {
  if (!getChildNodes) {
    var childNodesDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, "childNodes");
    getChildNodes = childNodesDescriptor.get;
  }
  var realChildNodes = getChildNodes.apply(node);
  var childNodes = Array.from(realChildNodes).map(function(childNode) {
    return getTopFragment(childNode, node);
  });
  return childNodes.filter(function(childNode, index) {
    return childNode !== childNodes[index - 1];
  });
}
function patchChildNodes(node) {
  if (childNodesPatched in node) {
    return;
  }
  node[childNodesPatched] = true;
  Object.defineProperties(node, {
    childNodes: {
      get: function get() {
        return this.frag || getChildNodesWithFragments(this);
      }
    },
    firstChild: {
      get: function get() {
        return this.childNodes[0] || null;
      }
    }
  });
  node.hasChildNodes = function() {
    return this.childNodes.length > 0;
  };
}
function before() {
  var _this$frag$;
  (_this$frag$ = this.frag[0]).before.apply(_this$frag$, arguments);
}
function remove() {
  var frag2 = this.frag;
  var removed = frag2.splice(0, frag2.length);
  removed.forEach(function(node) {
    node.remove();
  });
}
var getFragmentLeafNodes = function getFragmentLeafNodes2(children) {
  var _Array$prototype;
  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, children.map(function(childNode) {
    return isFrag(childNode) ? getFragmentLeafNodes2(childNode.frag) : childNode;
  }));
};
function addPlaceholder(node, insertBeforeNode) {
  var placeholder = node[$placeholder];
  insertBeforeNode.before(placeholder);
  patchParentNode(placeholder, node);
  node.frag.unshift(placeholder);
}
function removeChild(node) {
  if (isFrag(this)) {
    var hasChildInFragment = this.frag.indexOf(node);
    if (hasChildInFragment > -1) {
      var _this$frag$splice = this.frag.splice(hasChildInFragment, 1), removedNode = _this$frag$splice[0];
      if (this.frag.length === 0) {
        addPlaceholder(this, removedNode);
      }
      node.remove();
    }
  } else {
    var children = getChildNodesWithFragments(this);
    var hasChild = children.indexOf(node);
    if (hasChild > -1) {
      node.remove();
    }
  }
  return node;
}
function insertBefore(insertNode, insertBeforeNode) {
  var _this = this;
  var insertNodes = insertNode.frag || [insertNode];
  if (isFrag(this)) {
    var _frag = this.frag;
    if (insertBeforeNode) {
      var index = _frag.indexOf(insertBeforeNode);
      if (index > -1) {
        _frag.splice.apply(_frag, [index, 0].concat(insertNodes));
        insertBeforeNode.before.apply(insertBeforeNode, insertNodes);
      }
    } else {
      var _lastNode = _frag[_frag.length - 1];
      _frag.push.apply(_frag, insertNodes);
      _lastNode.after.apply(_lastNode, insertNodes);
    }
    removePlaceholder(this);
  } else if (insertBeforeNode) {
    if (this.childNodes.includes(insertBeforeNode)) {
      insertBeforeNode.before.apply(insertBeforeNode, insertNodes);
    }
  } else {
    this.append.apply(this, insertNodes);
  }
  insertNodes.forEach(function(node) {
    patchParentNode(node, _this);
  });
  var lastNode = insertNodes[insertNodes.length - 1];
  patchNextSibling(lastNode);
  return insertNode;
}
function appendChild(node) {
  var frag2 = this.frag;
  var lastChild = frag2[frag2.length - 1];
  lastChild.after(node);
  patchParentNode(node, this);
  removePlaceholder(this);
  frag2.push(node);
  return node;
}
function removePlaceholder(node) {
  var placeholder = node[$placeholder];
  if (node.frag[0] === placeholder) {
    node.frag.shift();
    placeholder.remove();
  }
}
var frag = {
  inserted: function inserted(element) {
    var parentNode = element.parentNode, nextSibling = element.nextSibling, previousSibling = element.previousSibling;
    var childNodes = Array.from(element.childNodes);
    var placeholder = document.createComment("");
    if (childNodes.length === 0) {
      childNodes.push(placeholder);
    }
    element.frag = childNodes;
    element[$placeholder] = placeholder;
    var fragment2 = document.createDocumentFragment();
    fragment2.append.apply(fragment2, getFragmentLeafNodes(childNodes));
    element.replaceWith(fragment2);
    childNodes.forEach(function(node) {
      patchParentNode(node, element);
      patchNextSibling(node);
    });
    patchChildNodes(element);
    Object.assign(element, {
      remove,
      appendChild,
      insertBefore,
      removeChild,
      before
    });
    Object.defineProperty(element, "innerHTML", {
      set: function set(htmlString) {
        var _this2 = this;
        var domify = document.createElement("div");
        domify.innerHTML = htmlString;
        var oldNodesIndex = this.frag.length;
        Array.from(domify.childNodes).forEach(function(node) {
          _this2.appendChild(node);
        });
        domify.append.apply(domify, this.frag.splice(0, oldNodesIndex));
      },
      get: function get() {
        return "";
      }
    });
    if (parentNode) {
      Object.assign(parentNode, {
        removeChild,
        insertBefore
      });
      patchParentNode(element, parentNode);
      patchChildNodes(parentNode);
    }
    if (nextSibling) {
      patchNextSibling(element);
    }
    if (previousSibling) {
      patchNextSibling(previousSibling);
    }
  },
  unbind: function unbind(element) {
    element.remove();
  }
};
var fragment = {
  name: "Fragment",
  directives: {
    frag
  },
  render: function render(h2) {
    return h2("div", {
      directives: [{
        name: "frag"
      }]
    }, this.$slots["default"]);
  }
};

// node_modules/@formily/vue/esm/shared/fragment.js
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var Fragment = "#fragment";
var FragmentComponent;
if (isVue2) {
  FragmentComponent = __assign4({ name: "Fragment" }, fragment);
} else {
  FragmentComponent = defineComponent({
    name: "Fragment",
    render: function() {
      return this.$slots.default();
    }
  });
}

// node_modules/@formily/vue/esm/utils/formatVNodeData.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var formatVue3VNodeData = function(data) {
  var newData = {};
  each(data, function(value, key) {
    if (key === "on" || key === "nativeOn") {
      if (value) {
        each(value, function(func, name) {
          var eventName = "on".concat(key === "on" ? name[0].toUpperCase() : name[0]).concat(name.slice(1));
          newData[eventName] = func;
        });
      }
    } else if (key === "attrs" || key === "props" || key === "domProps") {
      Object.assign(newData, value);
    } else {
      newData[key] = value;
    }
  });
  return newData;
};

// node_modules/@formily/vue/esm/shared/h.js
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var compatibleCreateElement = function(tag, data, components) {
  if (isVue2) {
    var hInVue2_1 = h;
    var scopedSlots = components;
    var children_1 = [];
    Object.keys(components).forEach(function(key) {
      var func = components[key];
      if (typeof func === "function" && func.length === 0) {
        try {
          var child = func();
          children_1.push(key === "default" ? child : hInVue2_1(FragmentComponent, { slot: key }, [child]));
        } catch (error) {
        }
      }
    });
    var newData = Object.assign({}, data);
    if (Object.keys(scopedSlots).length > 0) {
      if (!newData.scopedSlots) {
        newData.scopedSlots = scopedSlots;
      } else {
        newData.scopedSlots = __assign5(__assign5({}, newData.scopedSlots), scopedSlots);
      }
    }
    if (tag === Fragment) {
      if (children_1.length === 1) {
        if (!Array.isArray(children_1[0])) {
          return children_1[0];
        } else if (children_1[0].length === 1) {
          if (!Array.isArray(children_1[0][0])) {
            return children_1[0][0];
          } else if (children_1[0][0].length === 1) {
            return children_1[0][0][0];
          }
        }
      }
      tag = FragmentComponent;
    }
    return hInVue2_1(tag, newData, children_1);
  } else {
    if (tag === Fragment) {
      tag = FragmentComponent;
    }
    var hInVue3 = h;
    return hInVue3(tag, formatVue3VNodeData(data), components);
  }
};
var h_default = compatibleCreateElement;

// node_modules/@formily/vue/esm/components/FormProvider.js
var FormProvider_default = defineComponent({
  name: "FormProvider",
  inheritAttrs: false,
  props: ["form"],
  setup: function(props, _a) {
    var slots = _a.slots;
    var formRef = useAttach(toRef(props, "form"));
    provide(FormSymbol, formRef);
    useInjectionCleaner([
      FieldSymbol,
      SchemaMarkupSymbol,
      SchemaSymbol,
      SchemaExpressionScopeSymbol,
      SchemaOptionsSymbol
    ]);
    return function() {
      return h_default(Fragment, {}, slots);
    };
  }
});

// node_modules/@formily/vue/esm/components/FormConsumer.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/hooks/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/hooks/useForm.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var useForm = function() {
  var form = inject(FormSymbol, ref());
  return form;
};

// node_modules/@formily/vue/esm/hooks/useField.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var useField = function() {
  return inject(FieldSymbol, ref());
};

// node_modules/@formily/vue/esm/hooks/useFormEffects.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var useFormEffects = function(effects) {
  var formRef = useForm();
  var id = uid();
  formRef.value.addEffects(id, effects);
  onBeforeUnmount(function() {
    formRef.value.removeEffects(id);
  });
};

// node_modules/@formily/vue/esm/hooks/useFieldSchema.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var useFieldSchema = function() {
  return inject(SchemaSymbol, ref());
};

// node_modules/@formily/vue/esm/hooks/useParentForm.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var useParentForm = function() {
  var field = useField();
  var form = useForm();
  var findObjectParent = function(field2) {
    if (!field2)
      return form.value;
    if (isObjectField(field2))
      return field2;
    return findObjectParent(field2 === null || field2 === void 0 ? void 0 : field2.parent);
  };
  return computed(function() {
    return findObjectParent(field.value);
  });
};

// node_modules/@formily/vue/esm/components/FormConsumer.js
var FormConsumer_default = observer(defineComponent({
  name: "FormConsumer",
  inheritAttrs: false,
  setup: function(props, _a) {
    var slots = _a.slots;
    var formRef = useForm();
    return function() {
      return h_default("div", { style: { display: "contents" } }, {
        default: function() {
          var _a2;
          return (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots, {
            form: formRef.value
          });
        }
      });
    };
  }
}), {
  scheduler: function(update) {
    return Promise.resolve().then(update);
  }
});

// node_modules/@formily/vue/esm/components/ArrayField.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/components/ReactiveField.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/shared/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/shared/connect.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
function mapProps() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var transform = function(input, field) {
    return args.reduce(function(props, mapper) {
      if (isFn(mapper)) {
        props = Object.assign(props, mapper(props, field));
      } else {
        each(mapper, function(to, extract) {
          var extractValue = Path.getIn(field, extract);
          var targetValue = isStr(to) ? to : extract;
          if (extract === "value") {
            if (to !== extract) {
              delete props["value"];
            }
          }
          Path.setIn(props, targetValue, extractValue);
        });
      }
      return props;
    }, input);
  };
  return function(target) {
    if (isVue2) {
      return defineComponent({
        functional: true,
        name: target.name ? "Connected".concat(target.name) : "ConnectedComponent",
        render: function(createElement, context) {
          var fieldRef = useField();
          var data = context.data;
          var attrs = fieldRef.value ? transform(__assign6(__assign6({}, data.attrs), data.props), fieldRef.value) : __assign6(__assign6({}, data.attrs), data.props);
          return createElement(target, __assign6(__assign6({}, data), { attrs }), context.children);
        }
      });
    } else {
      return observer(defineComponent({
        name: target.name ? "Connected".concat(target.name) : "ConnectedComponent",
        setup: function(props, _a) {
          var attrs = _a.attrs, slots = _a.slots;
          var fieldRef = useField();
          return function() {
            var newAttrs = fieldRef.value ? transform(__assign6({}, attrs), fieldRef.value) : __assign6({}, attrs);
            return h_default(target, {
              attrs: newAttrs
            }, slots);
          };
        }
      }));
    }
  };
}
function mapReadPretty(component, readPrettyProps) {
  return function(target) {
    return observer(defineComponent({
      name: target.name ? "Read".concat(target.name) : "ReadComponent",
      setup: function(props, _a) {
        var attrs = _a.attrs, slots = _a.slots, listeners = _a.listeners;
        var fieldRef = useField();
        return function() {
          var field = fieldRef.value;
          return h_default(field && !isVoidField(field) && field.pattern === "readPretty" ? component : target, {
            attrs: __assign6(__assign6({}, readPrettyProps), attrs),
            on: listeners
          }, slots);
        };
      }
    }));
  };
}
function connect(target) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  var Component = args.reduce(function(target2, mapper) {
    return mapper(target2);
  }, target);
  if (isVue2) {
    var functionalComponent = defineComponent({
      functional: true,
      name: target.name,
      render: function(h2, context) {
        return h2(Component, context.data, context.children);
      }
    });
    return markRaw(functionalComponent);
  } else {
    var functionalComponent = defineComponent({
      name: target.name,
      setup: function(props, _a) {
        var attrs = _a.attrs, slots = _a.slots;
        return function() {
          return h_default(Component, { props, attrs }, slots);
        };
      }
    });
    return markRaw(functionalComponent);
  }
}

// node_modules/@formily/vue/esm/shared/createForm.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __read3 = function(o, n) {
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
var __spreadArray2 = function(to, from, pack) {
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
var createRawForm = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var form = createForm.apply(void 0, __spreadArray2([], __read3(args), false));
  return markRaw(form);
};

// node_modules/@formily/vue/esm/components/ReactiveField.js
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var __read4 = function(o, n) {
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
var __spreadArray3 = function(to, from, pack) {
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
function isVueOptions(options) {
  return typeof options.template === "string" || typeof options.render === "function" || typeof options.setup === "function";
}
var wrapFragment = function(childNodes) {
  if (!Array.isArray(childNodes)) {
    return childNodes;
  }
  if (childNodes.length > 1) {
    return compatibleCreateElement(Fragment, {}, { default: function() {
      return childNodes;
    } });
  }
  return childNodes[0];
};
var resolveComponent = function(render2, extra) {
  var _a;
  if (extra === void 0 || extra === null) {
    return render2;
  }
  if (typeof extra === "string") {
    return function() {
      return __spreadArray3(__spreadArray3([], __read4(render2()), false), [extra], false);
    };
  }
  if (!isVueOptions(extra) && typeof extra !== "function") {
    return render2;
  }
  if (extra.length > 1 || ((_a = extra === null || extra === void 0 ? void 0 : extra.render) === null || _a === void 0 ? void 0 : _a.length) > 1) {
    return function(scopedProps) {
      return __spreadArray3(__spreadArray3([], __read4(render2()), false), [
        compatibleCreateElement(extra, { props: scopedProps }, {})
      ], false);
    };
  }
  return function() {
    return __spreadArray3(__spreadArray3([], __read4(render2()), false), [compatibleCreateElement(extra, {}, {})], false);
  };
};
var mergeSlots = function(field, slots, content) {
  var _a;
  var slotNames = Object.keys(slots);
  if (!slotNames.length) {
    if (!content) {
      return {};
    }
    if (typeof content === "string") {
      return {
        default: resolveComponent(function() {
          return [];
        }, content)
      };
    }
  }
  var patchSlot = function(slotName) {
    return function() {
      var _a2, _b;
      return (_b = (_a2 = slots[slotName]) === null || _a2 === void 0 ? void 0 : _a2.call(slots, { field, form: field.form })) !== null && _b !== void 0 ? _b : [];
    };
  };
  var patchedSlots = {};
  slotNames.forEach(function(name) {
    patchedSlots[name] = patchSlot(name);
  });
  if (content && typeof content === "object" && !isVueOptions(content)) {
    Object.keys(content).forEach(function(key) {
      var _a2;
      var child = content[key];
      var slot = (_a2 = patchedSlots[key]) !== null && _a2 !== void 0 ? _a2 : function() {
        return [];
      };
      patchedSlots[key] = resolveComponent(slot, child);
    });
    return patchedSlots;
  }
  patchedSlots["default"] = resolveComponent((_a = patchedSlots["default"]) !== null && _a !== void 0 ? _a : function() {
    return [];
  }, content);
  return patchedSlots;
};
var ReactiveField_default = observer({
  name: "ReactiveField",
  props: {
    fieldType: {
      type: String,
      default: "Field"
    },
    fieldProps: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  setup: function(props, _a) {
    var slots = _a.slots;
    var formRef = useForm();
    var parentRef = useField();
    var optionsRef = inject(SchemaOptionsSymbol, ref(null));
    var createField = function() {
      var _a2, _b, _c, _d, _e;
      return (_b = (_a2 = formRef === null || formRef === void 0 ? void 0 : formRef.value) === null || _a2 === void 0 ? void 0 : _a2["create".concat(props.fieldType)]) === null || _b === void 0 ? void 0 : _b.call(_a2, __assign7(__assign7({}, props.fieldProps), { basePath: (_d = (_c = props.fieldProps) === null || _c === void 0 ? void 0 : _c.basePath) !== null && _d !== void 0 ? _d : (_e = parentRef.value) === null || _e === void 0 ? void 0 : _e.address }));
    };
    var fieldRef = shallowRef(createField());
    watch(function() {
      return props.fieldProps;
    }, function() {
      return fieldRef.value = createField();
    });
    useAttach(fieldRef);
    provide(FieldSymbol, fieldRef);
    return function() {
      var _a2;
      var field = fieldRef.value;
      var options = optionsRef.value;
      if (!field) {
        return (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
      }
      if (field.display !== "visible") {
        return compatibleCreateElement("template", {}, {});
      }
      var mergedSlots = mergeSlots(field, slots, field.content);
      var renderDecorator = function(childNodes) {
        var _a3;
        if (!field.decoratorType) {
          return wrapFragment(childNodes);
        }
        var finalComponent = (_a3 = Path.getIn(options === null || options === void 0 ? void 0 : options.components, field.decoratorType)) !== null && _a3 !== void 0 ? _a3 : field.decoratorType;
        var componentAttrs = toJS(field.decorator[1]) || {};
        var componentData = {
          attrs: componentAttrs,
          style: componentAttrs === null || componentAttrs === void 0 ? void 0 : componentAttrs.style,
          class: componentAttrs === null || componentAttrs === void 0 ? void 0 : componentAttrs.class
        };
        delete componentData.attrs.style;
        delete componentData.attrs.class;
        return compatibleCreateElement(finalComponent, componentData, {
          default: function() {
            return childNodes;
          }
        });
      };
      var renderComponent = function() {
        var _a3, _b;
        if (!field.componentType)
          return wrapFragment((_a3 = mergedSlots === null || mergedSlots === void 0 ? void 0 : mergedSlots.default) === null || _a3 === void 0 ? void 0 : _a3.call(mergedSlots));
        var component = (_b = Path.getIn(options === null || options === void 0 ? void 0 : options.components, field.componentType)) !== null && _b !== void 0 ? _b : field.componentType;
        var originData = toJS(field.component[1]) || {};
        var events = {};
        var originChange = originData["@change"] || originData["onChange"];
        var originFocus = originData["@focus"] || originData["onFocus"];
        var originBlur = originData["@blur"] || originData["onBlur"];
        Object.keys(originData).filter(function(key) {
          return key.startsWith("on");
        }).forEach(function(eventKey) {
          var eventName = "".concat(eventKey[2].toLowerCase()).concat(eventKey.slice(3));
          events[eventName] = originData[eventKey];
        });
        Object.keys(originData).filter(function(key) {
          return key.startsWith("@");
        }).forEach(function(eventKey) {
          events[eventKey.slice(1)] = originData[eventKey];
          delete originData[eventKey];
        });
        events.change = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (!isVoidField(field))
            field.onInput.apply(field, __spreadArray3([], __read4(args), false));
          originChange === null || originChange === void 0 ? void 0 : originChange.apply(void 0, __spreadArray3([], __read4(args), false));
        };
        events.focus = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (!isVoidField(field))
            field.onFocus.apply(field, __spreadArray3([], __read4(args), false));
          originFocus === null || originFocus === void 0 ? void 0 : originFocus.apply(void 0, __spreadArray3([], __read4(args), false));
        };
        events.blur = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (!isVoidField(field))
            field.onBlur.apply(field, __spreadArray3([], __read4(args), false));
          originBlur === null || originBlur === void 0 ? void 0 : originBlur.apply(void 0, __spreadArray3([], __read4(args), false));
        };
        var componentData = {
          attrs: __assign7(__assign7({ disabled: !isVoidField(field) ? field.pattern === "disabled" || field.pattern === "readPretty" : void 0, readOnly: !isVoidField(field) ? field.pattern === "readOnly" : void 0 }, originData), { value: !isVoidField(field) ? field.value : void 0 }),
          style: originData === null || originData === void 0 ? void 0 : originData.style,
          class: originData === null || originData === void 0 ? void 0 : originData.class,
          on: events
        };
        delete componentData.attrs.style;
        delete componentData.attrs.class;
        return compatibleCreateElement(component, componentData, mergedSlots);
      };
      return renderDecorator([renderComponent()]);
    };
  }
});

// node_modules/@formily/vue/esm/utils/getRawComponent.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var getRawComponent = function(props) {
  var component = props.component, decorator = props.decorator;
  var newComponent;
  var newDecorator;
  if (Array.isArray(component)) {
    newComponent = [toRaw(component[0]), component[1]];
  }
  if (Array.isArray(decorator)) {
    newDecorator = [toRaw(decorator[0]), decorator[1]];
  }
  return { component: newComponent, decorator: newDecorator };
};

// node_modules/@formily/vue/esm/utils/getFieldProps.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var getFieldProps = function() {
  return {
    name: {},
    title: {},
    description: {},
    value: {},
    initialValue: {},
    basePath: {},
    decorator: Array,
    component: Array,
    display: String,
    pattern: String,
    required: { type: Boolean, default: void 0 },
    validateFirst: { type: Boolean, default: void 0 },
    hidden: { type: Boolean, default: void 0 },
    visible: { type: Boolean, default: void 0 },
    editable: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    readOnly: { type: Boolean, default: void 0 },
    readPretty: { type: Boolean, default: void 0 },
    dataSource: {},
    validator: {},
    reactions: [Array, Function]
  };
};
var getVoidFieldProps = function() {
  return {
    name: {},
    title: {},
    description: {},
    basePath: {},
    decorator: Array,
    component: Array,
    display: String,
    pattern: String,
    hidden: { type: Boolean, default: void 0 },
    visible: { type: Boolean, default: void 0 },
    editable: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    readOnly: { type: Boolean, default: void 0 },
    readPretty: { type: Boolean, default: void 0 },
    reactions: [Array, Function]
  };
};

// node_modules/@formily/vue/esm/components/ArrayField.js
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var ArrayField;
if (isVue2) {
  ArrayField = {
    functional: true,
    name: "ArrayField",
    props: getFieldProps(),
    render: function(h2, context) {
      var props = context.props;
      var attrs = context.data.attrs;
      var componentData = __assign8(__assign8({}, context.data), { props: {
        fieldType: "ArrayField",
        fieldProps: __assign8(__assign8(__assign8({}, attrs), props), getRawComponent(props))
      } });
      return h(ReactiveField_default, componentData, context.children);
    }
  };
} else {
  ArrayField = {
    name: "ArrayField",
    props: getFieldProps(),
    setup: function(props, context) {
      return function() {
        var componentData = {
          fieldType: "ArrayField",
          fieldProps: __assign8(__assign8({}, props), getRawComponent(props))
        };
        return h(ReactiveField_default, componentData, context.slots);
      };
    }
  };
}
var ArrayField_default = ArrayField;

// node_modules/@formily/vue/esm/components/ObjectField.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var ObjectField;
if (isVue2) {
  ObjectField = {
    functional: true,
    name: "ObjectField",
    props: getFieldProps(),
    render: function(h2, context) {
      var props = context.props;
      var attrs = context.data.attrs;
      var componentData = __assign9(__assign9({}, context.data), { props: {
        fieldType: "ObjectField",
        fieldProps: __assign9(__assign9(__assign9({}, attrs), props), getRawComponent(props))
      } });
      return h(ReactiveField_default, componentData, context.children);
    }
  };
} else {
  ObjectField = {
    name: "ObjectField",
    props: getFieldProps(),
    setup: function(props, context) {
      return function() {
        var componentData = {
          fieldType: "ObjectField",
          fieldProps: __assign9(__assign9({}, props), getRawComponent(props))
        };
        return h(ReactiveField_default, componentData, context.slots);
      };
    }
  };
}
var ObjectField_default = ObjectField;

// node_modules/@formily/vue/esm/components/VoidField.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var VoidField;
if (isVue2) {
  VoidField = {
    functional: true,
    name: "VoidField",
    props: getVoidFieldProps(),
    render: function(h2, context) {
      var props = context.props;
      var attrs = context.data.attrs;
      var componentData = __assign10(__assign10({}, context.data), { props: {
        fieldType: "VoidField",
        fieldProps: __assign10(__assign10(__assign10({}, attrs), props), getRawComponent(props))
      } });
      return h(ReactiveField_default, componentData, context.children);
    }
  };
} else {
  VoidField = {
    name: "VoidField",
    props: getVoidFieldProps(),
    setup: function(props, context) {
      return function() {
        var componentData = {
          fieldType: "VoidField",
          fieldProps: __assign10(__assign10({}, props), getRawComponent(props))
        };
        return h(ReactiveField_default, componentData, context.slots);
      };
    }
  };
}
var VoidField_default = VoidField;

// node_modules/@formily/vue/esm/components/RecursionField.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/components/Field.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var Field;
if (isVue2) {
  Field = {
    functional: true,
    name: "Field",
    props: getFieldProps(),
    render: function(h2, context) {
      var props = context.props;
      var attrs = context.data.attrs;
      var componentData = __assign11(__assign11({}, context.data), { props: {
        fieldType: "Field",
        fieldProps: __assign11(__assign11(__assign11({}, attrs), props), getRawComponent(props))
      } });
      return h(ReactiveField_default, componentData, context.children);
    }
  };
} else {
  Field = {
    name: "Field",
    props: getFieldProps(),
    setup: function(props, context) {
      return function() {
        var componentData = {
          fieldType: "Field",
          fieldProps: __assign11(__assign11({}, props), getRawComponent(props))
        };
        return h(ReactiveField_default, componentData, context.slots);
      };
    }
  };
}
var Field_default = Field;

// node_modules/@formily/vue/esm/components/RecursionField.js
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var resolveEmptySlot = function(slots) {
  return Object.keys(slots).length ? compatibleCreateElement(Fragment, {}, slots) : void 0;
};
var RecursionField = {
  name: "RecursionField",
  inheritAttrs: false,
  props: {
    schema: {
      required: true
    },
    name: [String, Number],
    basePath: {},
    onlyRenderProperties: {
      type: Boolean,
      default: void 0
    },
    onlyRenderSelf: {
      type: Boolean,
      default: void 0
    },
    mapProperties: {},
    filterProperties: {}
  },
  setup: function(props) {
    var parentRef = useField();
    var optionsRef = inject(SchemaOptionsSymbol);
    var scopeRef = inject(SchemaExpressionScopeSymbol);
    var createSchema = function(schemaProp) {
      return markRaw(new Schema(schemaProp));
    };
    var fieldSchemaRef = computed(function() {
      return createSchema(props.schema);
    });
    var getPropsFromSchema = function(schema) {
      var _a;
      return (_a = schema === null || schema === void 0 ? void 0 : schema.toFieldProps) === null || _a === void 0 ? void 0 : _a.call(schema, __assign12(__assign12({}, optionsRef.value), { get scope() {
        return __assign12(__assign12({}, optionsRef.value.scope), scopeRef.value);
      } }));
    };
    var fieldPropsRef = shallowRef(getPropsFromSchema(fieldSchemaRef.value));
    watch([fieldSchemaRef, optionsRef], function() {
      fieldPropsRef.value = getPropsFromSchema(fieldSchemaRef.value);
    });
    var getBasePath = function() {
      var _a, _b;
      if (props.onlyRenderProperties) {
        return props.basePath || ((_a = parentRef === null || parentRef === void 0 ? void 0 : parentRef.value) === null || _a === void 0 ? void 0 : _a.address.concat(props.name));
      }
      return props.basePath || ((_b = parentRef === null || parentRef === void 0 ? void 0 : parentRef.value) === null || _b === void 0 ? void 0 : _b.address);
    };
    provide(SchemaSymbol, fieldSchemaRef);
    return function() {
      var basePath = getBasePath();
      var fieldProps = fieldPropsRef.value;
      var generateSlotsByProperties = function(scoped) {
        if (scoped === void 0) {
          scoped = false;
        }
        if (props.onlyRenderSelf)
          return {};
        var properties = Schema.getOrderProperties(fieldSchemaRef.value);
        if (!properties.length)
          return {};
        var renderMap = {};
        var setRender = function(key, value) {
          if (!renderMap[key]) {
            renderMap[key] = [];
          }
          renderMap[key].push(value);
        };
        properties.forEach(function(_a, index) {
          var _b;
          var item = _a.schema, name = _a.key;
          var schema = item;
          if (isFn(props.mapProperties)) {
            var mapped = props.mapProperties(item, name);
            if (mapped) {
              schema = mapped;
            }
          }
          if (isFn(props.filterProperties)) {
            if (props.filterProperties(schema, name) === false) {
              return null;
            }
          }
          setRender((_b = schema["x-slot"]) !== null && _b !== void 0 ? _b : "default", function(field) {
            return compatibleCreateElement(RecursionField, {
              key: "".concat(index, "-").concat(name),
              attrs: {
                schema,
                name,
                basePath: (field === null || field === void 0 ? void 0 : field.address) || basePath
              },
              slot: schema["x-slot"]
            }, {});
          });
        });
        var slots = {};
        Object.keys(renderMap).forEach(function(key) {
          var renderFns = renderMap[key];
          slots[key] = scoped ? function(_a) {
            var field = _a.field;
            return renderFns.map(function(fn) {
              return fn(field);
            });
          } : function() {
            return renderFns.map(function(fn) {
              return fn();
            });
          };
        });
        return slots;
      };
      var render2 = function() {
        if (!isValid(props.name))
          return resolveEmptySlot(generateSlotsByProperties());
        if (fieldSchemaRef.value.type === "object") {
          if (props.onlyRenderProperties)
            return resolveEmptySlot(generateSlotsByProperties());
          return compatibleCreateElement(ObjectField_default, {
            attrs: __assign12(__assign12({}, fieldProps), { name: props.name, basePath })
          }, generateSlotsByProperties(true));
        } else if (fieldSchemaRef.value.type === "array") {
          return compatibleCreateElement(ArrayField_default, {
            attrs: __assign12(__assign12({}, fieldProps), { name: props.name, basePath })
          }, {});
        } else if (fieldSchemaRef.value.type === "void") {
          if (props.onlyRenderProperties)
            return resolveEmptySlot(generateSlotsByProperties());
          var slots = generateSlotsByProperties(true);
          return compatibleCreateElement(VoidField_default, {
            attrs: __assign12(__assign12({}, fieldProps), { name: props.name, basePath })
          }, slots);
        }
        return compatibleCreateElement(Field_default, {
          attrs: __assign12(__assign12({}, fieldProps), { name: props.name, basePath })
        }, {});
      };
      if (!fieldSchemaRef.value)
        return;
      return render2();
    };
  }
};
var RecursionField_default = RecursionField;

// node_modules/@formily/vue/esm/components/SchemaField.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/vue/esm/utils/resolveSchemaProps.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var resolveSchemaProps = function(props) {
  var newProps = {};
  Object.keys(props).forEach(function(key) {
    if (key.indexOf("x") === 0 && key.indexOf("x-") === -1) {
      newProps[paramCase(key)] = props[key];
    } else {
      newProps[key] = props[key];
    }
  });
  return newProps;
};

// node_modules/@formily/vue/esm/components/SchemaField.js
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var env = {
  nonameId: 0
};
var getRandomName = function() {
  return "NO_NAME_FIELD_$".concat(env.nonameId++);
};
var markupProps = {
  version: String,
  name: [String, Number],
  title: {},
  description: {},
  default: {},
  readOnly: {
    type: Boolean,
    default: void 0
  },
  writeOnly: {
    type: Boolean,
    default: void 0
  },
  enum: {},
  const: {},
  multipleOf: Number,
  maximum: Number,
  exclusiveMaximum: Number,
  minimum: Number,
  exclusiveMinimum: Number,
  maxLength: Number,
  minLength: Number,
  pattern: {},
  maxItems: Number,
  minItems: Number,
  uniqueItems: {
    type: Boolean,
    default: void 0
  },
  maxProperties: Number,
  minProperties: Number,
  required: {
    type: [Boolean, Array, String],
    default: void 0
  },
  format: String,
  properties: {},
  items: {},
  additionalItems: {},
  patternProperties: {},
  additionalProperties: {},
  xIndex: Number,
  xPattern: {},
  xDisplay: {},
  xValidator: {},
  xDecorator: {},
  xDecoratorProps: {},
  xComponent: {},
  xComponentProps: {},
  xReactions: {},
  xContent: {},
  xVisible: {
    type: Boolean,
    default: void 0
  },
  xHidden: {
    type: Boolean,
    default: void 0
  },
  xDisabled: {
    type: Boolean,
    default: void 0
  },
  xEditable: {
    type: Boolean,
    default: void 0
  },
  xReadOnly: {
    type: Boolean,
    default: void 0
  },
  xReadPretty: {
    type: Boolean,
    default: void 0
  }
};
function createSchemaField(options) {
  var SchemaField = {
    name: "SchemaField",
    inheritAttrs: false,
    props: {
      schema: {},
      scope: {},
      components: {},
      name: [String, Number],
      basePath: {},
      onlyRenderProperties: { type: Boolean, default: void 0 },
      onlyRenderSelf: { type: Boolean, default: void 0 },
      mapProperties: {},
      filterProperties: {}
    },
    setup: function(props, _a) {
      var slots = _a.slots;
      var schemaRef = computed(function() {
        return Schema.isSchemaInstance(props.schema) ? props.schema : new Schema(__assign13({ type: "object" }, props.schema));
      });
      var scopeRef = computed(function() {
        return __assign13(__assign13({}, options.scope), props.scope);
      });
      var optionsRef = computed(function() {
        return __assign13(__assign13({}, options), { components: __assign13(__assign13({}, options.components), props.components) });
      });
      provide(SchemaMarkupSymbol, schemaRef);
      provide(SchemaOptionsSymbol, optionsRef);
      provide(SchemaExpressionScopeSymbol, scopeRef);
      return function() {
        env.nonameId = 0;
        return compatibleCreateElement(Fragment, {}, {
          default: function() {
            var children = [];
            if (slots.default) {
              children.push(compatibleCreateElement("template", {}, {
                default: function() {
                  return slots.default();
                }
              }));
            }
            children.push(compatibleCreateElement(RecursionField_default, {
              attrs: __assign13(__assign13({}, props), { schema: schemaRef.value })
            }, {}));
            return children;
          }
        });
      };
    }
  };
  var MarkupField = {
    name: "MarkupField",
    props: __assign13({ type: String }, markupProps),
    setup: function(props, _a) {
      var slots = _a.slots;
      var parentRef = inject(SchemaMarkupSymbol, null);
      if (!parentRef || !parentRef.value)
        return function() {
          return compatibleCreateElement("template", {}, {});
        };
      var name = props.name || getRandomName();
      var appendArraySchema = function(schema) {
        if (parentRef.value.items) {
          return parentRef.value.addProperty(name, schema);
        } else {
          return parentRef.value.setItems(resolveSchemaProps(props));
        }
      };
      var schemaRef = shallowRef(null);
      watch(parentRef, function() {
        if (parentRef.value.type === "object" || parentRef.value.type === "void") {
          schemaRef.value = parentRef.value.addProperty(name, resolveSchemaProps(props));
        } else if (parentRef.value.type === "array") {
          var schema = appendArraySchema(resolveSchemaProps(props));
          schemaRef.value = Array.isArray(schema) ? schema[0] : schema;
        }
      }, { immediate: true });
      provide(SchemaMarkupSymbol, schemaRef);
      return function() {
        return compatibleCreateElement("div", { style: "display: none;" }, slots);
      };
    }
  };
  var SchemaFieldFactory = function(type, name) {
    return {
      name,
      props: __assign13({}, markupProps),
      setup: function(props, _a) {
        var slots = _a.slots;
        return function() {
          return compatibleCreateElement(MarkupField, {
            attrs: __assign13(__assign13({}, props), { type })
          }, slots);
        };
      }
    };
  };
  return {
    SchemaField,
    SchemaMarkupField: MarkupField,
    SchemaStringField: SchemaFieldFactory("string", "SchemaStringField"),
    SchemaObjectField: SchemaFieldFactory("object", "SchemaObjectField"),
    SchemaArrayField: SchemaFieldFactory("array", "SchemaArrayField"),
    SchemaBooleanField: SchemaFieldFactory("boolean", "SchemaBooleanField"),
    SchemaDateField: SchemaFieldFactory("date", "SchemaDateField"),
    SchemaDateTimeField: SchemaFieldFactory("datetime", "SchemaDatetimeField"),
    SchemaVoidField: SchemaFieldFactory("void", "SchemaVoidField"),
    SchemaNumberField: SchemaFieldFactory("number", "SchemaNumberField")
  };
}

// node_modules/@formily/vue/esm/components/ExpressionScope.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var ExpressionScope = defineComponent({
  name: "ExpressionScope",
  props: ["value"],
  setup: function(props, _a) {
    var slots = _a.slots;
    var scopeRef = inject(SchemaExpressionScopeSymbol);
    var expressionScopeRef = computed(function() {
      return __assign14(__assign14({}, scopeRef.value), props.value);
    });
    provide(SchemaExpressionScopeSymbol, expressionScopeRef);
    return function() {
      return compatibleCreateElement(Fragment, {}, slots);
    };
  }
});

// node_modules/@formily/vue/esm/types/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var Helper = function() {
  function Helper2() {
    this.Return = defineComponent({});
  }
  return Helper2;
}();

// node_modules/@formily/vue/esm/vue2-components.js
var vue2_components_exports = {};
__export(vue2_components_exports, {
  ArrayField: () => ArrayField2,
  Field: () => Field2,
  FormConsumer: () => FormConsumer,
  FormProvider: () => FormProvider,
  ObjectField: () => ObjectField2,
  RecursionField: () => RecursionField2,
  VoidField: () => VoidField2,
  createSchemaField: () => createSchemaField2
});
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var _Field = Field_default;
var _ArrayField = ArrayField_default;
var _FormConsumer = FormConsumer_default;
var _FormProvider = FormProvider_default;
var _ObjectField = ObjectField_default;
var _RecursionField = RecursionField_default;
var _VoidField = VoidField_default;
var _createSchemaField = createSchemaField;
var Field2 = _Field;
var ArrayField2 = _ArrayField;
var ObjectField2 = _ObjectField;
var VoidField2 = _VoidField;
var RecursionField2 = _RecursionField;
var FormConsumer = _FormConsumer;
var FormProvider = _FormProvider;
var createSchemaField2 = _createSchemaField;
export {
  ArrayField_default as ArrayField,
  ExpressionScope,
  Field_default as Field,
  FieldSymbol,
  FormConsumer_default as FormConsumer,
  FormProvider_default as FormProvider,
  FormSymbol,
  Fragment,
  FragmentComponent,
  ObjectField_default as ObjectField,
  RecursionField_default as RecursionField,
  Schema,
  SchemaExpressionScopeSymbol,
  SchemaMarkupSymbol,
  SchemaOptionsSymbol,
  SchemaSymbol,
  VoidField_default as VoidField,
  vue2_components_exports as Vue2Components,
  connect,
  createRawForm as createForm,
  createSchemaField,
  compatibleCreateElement as h,
  mapProps,
  mapReadPretty,
  useField,
  useFieldSchema,
  useForm,
  useFormEffects,
  useParentForm
};
//# sourceMappingURL=@formily_vue.js.map
