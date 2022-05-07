import {
  Tracker,
  isObservable
} from "./chunk-HHDCUUXG.js";
import {
  getCurrentInstance,
  init_runtime_dom_esm_bundler,
  onBeforeUnmount
} from "./chunk-ZR76IDHV.js";
import {
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_SEARCH_HOT_KEYS,
  init_define_SEARCH_LOCALES
} from "./chunk-AISRZZ4F.js";

// node_modules/@formily/reactive-vue/esm/observer/collectData.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function collectData(vm, data) {
  var dataDefinition = typeof data === "function" ? data.call(vm, vm) : data || {};
  var filteredData = Object.keys(dataDefinition).reduce(function(result, field) {
    var value = dataDefinition[field];
    if (isObservable(value)) {
      Object.defineProperty(vm, field, {
        configurable: true,
        get: function() {
          return value;
        },
        set: function() {
        }
      });
    } else {
      result[field] = value;
    }
    return result;
  }, {});
  return filteredData;
}

// node_modules/@formily/reactive-vue/esm/hooks/useObserver.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive-vue/node_modules/vue-demi/lib/index.esm.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
init_runtime_dom_esm_bundler();
init_runtime_dom_esm_bundler();
var isVue2 = false;
var isVue3 = true;
var Vue2 = void 0;

// node_modules/@formily/reactive-vue/esm/hooks/useObserver.js
var useObserver = function(options) {
  if (isVue3) {
    var vm_1 = getCurrentInstance();
    var tracker_1 = null;
    var disposeTracker_1 = function() {
      if (tracker_1) {
        tracker_1.dispose();
        tracker_1 = null;
      }
    };
    var vmUpdate_1 = function() {
      var _a;
      (_a = vm_1 === null || vm_1 === void 0 ? void 0 : vm_1.proxy) === null || _a === void 0 ? void 0 : _a.$forceUpdate();
    };
    onBeforeUnmount(disposeTracker_1);
    Object.defineProperty(vm_1, "effect", {
      get: function() {
        return vm_1["_updateEffect"] || {};
      },
      set: function(newValue) {
        vm_1["_updateEffectRun"] = newValue.run;
        disposeTracker_1();
        var newTracker = function() {
          tracker_1 = new Tracker(function() {
            if ((options === null || options === void 0 ? void 0 : options.scheduler) && typeof options.scheduler === "function") {
              options.scheduler(vmUpdate_1);
            } else {
              vmUpdate_1();
            }
          });
        };
        var update = function() {
          var refn = null;
          tracker_1 === null || tracker_1 === void 0 ? void 0 : tracker_1.track(function() {
            refn = vm_1["_updateEffectRun"].call(newValue);
          });
          return refn;
        };
        newTracker();
        newValue.run = update;
        vm_1["_updateEffect"] = newValue;
      }
    });
  }
};

// node_modules/@formily/reactive-vue/esm/observer/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive-vue/esm/observer/observerInVue2.js
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
var noop = function() {
};
var disposerSymbol = Symbol("disposerSymbol");
function observer(Component, observerOptions) {
  var name = (observerOptions === null || observerOptions === void 0 ? void 0 : observerOptions.name) || Component.name || Component._componentTag || Component.constructor && Component.constructor.name || "<component>";
  var originalOptions = typeof Component === "object" ? Component : Component.options;
  var dataDefinition = originalOptions.data;
  var options = __assign(__assign({ name }, originalOptions), {
    data: function(vm) {
      return collectData(vm || this, dataDefinition);
    },
    _Ctor: {}
  });
  var superProto = typeof Component === "function" && Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof Vue2 ? superProto.constructor : Vue2;
  var ExtendedComponent = Super.extend(options);
  var _a = ExtendedComponent.prototype, $mount = _a.$mount, $destroy = _a.$destroy;
  ExtendedComponent.prototype.$mount = function() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var mounted = false;
    this[disposerSymbol] = noop;
    var nativeRenderOfVue;
    var reactiveRender = function() {
      tracker.track(function() {
        if (!mounted) {
          $mount.apply(_this, args);
          mounted = true;
          nativeRenderOfVue = _this._watcher.getter;
          _this._watcher.getter = reactiveRender;
        } else {
          nativeRenderOfVue.call(_this, _this);
        }
      });
      return _this;
    };
    var tracker = new Tracker(function() {
      if ((observerOptions === null || observerOptions === void 0 ? void 0 : observerOptions.scheduler) && typeof observerOptions.scheduler === "function") {
        observerOptions.scheduler(reactiveRender);
      } else {
        reactiveRender();
      }
    });
    this[disposerSymbol] = tracker.dispose;
    return reactiveRender();
  };
  ExtendedComponent.prototype.$destroy = function() {
    ;
    this[disposerSymbol]();
    $destroy.apply(this);
  };
  var extendedComponentNamePropertyDescriptor = Object.getOwnPropertyDescriptor(ExtendedComponent, "name") || {};
  if (extendedComponentNamePropertyDescriptor.configurable === true) {
    Object.defineProperty(ExtendedComponent, "name", {
      writable: false,
      value: name,
      enumerable: false,
      configurable: false
    });
  }
  return ExtendedComponent;
}

// node_modules/@formily/reactive-vue/esm/observer/observerInVue3.js
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
var observer2 = function(opts, options) {
  var name = (options === null || options === void 0 ? void 0 : options.name) || opts.name || "ObservableComponent";
  return __assign2(__assign2({ name }, opts), { setup: function(props, context) {
    var _a;
    useObserver(options);
    return (_a = opts === null || opts === void 0 ? void 0 : opts.setup) === null || _a === void 0 ? void 0 : _a.call(opts, props, context);
  } });
};

// node_modules/@formily/reactive-vue/esm/observer/index.js
function observer3(baseComponent, options) {
  if (isVue2) {
    return observer(baseComponent, options);
  } else {
    return observer2(baseComponent, options);
  }
}

// node_modules/@formily/reactive-vue/esm/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive-vue/esm/hooks/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/reactive-vue/esm/types.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

export {
  collectData,
  useObserver,
  observer3 as observer
};
//# sourceMappingURL=chunk-2RPH5SMJ.js.map
