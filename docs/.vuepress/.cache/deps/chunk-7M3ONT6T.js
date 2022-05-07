import {
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_SEARCH_HOT_KEYS,
  init_define_SEARCH_LOCALES
} from "./chunk-AISRZZ4F.js";

// node_modules/@formily/shared/esm/checkers.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var toString = Object.prototype.toString;
var isType = function(type) {
  return function(obj) {
    return getType(obj) === "[object ".concat(type, "]");
  };
};
var getType = function(obj) {
  return toString.call(obj);
};
var isFn = function(val) {
  return typeof val === "function";
};
var isArr = Array.isArray;
var isPlainObj = isType("Object");
var isStr = isType("String");
var isBool = isType("Boolean");
var isNum = isType("Number");
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
var isNumberLike = function(index) {
  return isNum(index) || /^\d+$/.test(index);
};
var isObj = function(val) {
  return typeof val === "object";
};
var isRegExp = isType("RegExp");
var isReactElement = function(obj) {
  return obj && obj["$$typeof"] && obj["_owner"];
};
var isHTMLElement = function(target) {
  return Object.prototype.toString.call(target).indexOf("HTML") > -1;
};

// node_modules/@formily/shared/esm/array.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var toArr = function(val) {
  return isArr(val) ? val : val ? [val] : [];
};
function each(val, iterator, revert) {
  if (isArr(val) || isStr(val)) {
    if (revert) {
      for (var i = val.length - 1; i >= 0; i--) {
        if (iterator(val[i], i) === false) {
          return;
        }
      }
    } else {
      for (var i = 0; i < val.length; i++) {
        if (iterator(val[i], i) === false) {
          return;
        }
      }
    }
  } else if (isObj(val)) {
    var key = void 0;
    for (key in val) {
      if (Object.hasOwnProperty.call(val, key)) {
        if (iterator(val[key], key) === false) {
          return;
        }
      }
    }
  }
}
function map(val, iterator, revert) {
  var res = isArr(val) || isStr(val) ? [] : {};
  each(val, function(item, key) {
    var value = iterator(item, key);
    if (isArr(res)) {
      ;
      res.push(value);
    } else {
      res[key] = value;
    }
  }, revert);
  return res;
}
function reduce(val, iterator, accumulator, revert) {
  var result = accumulator;
  each(val, function(item, key) {
    result = iterator(result, item, key);
  }, revert);
  return result;
}
function every(val, iterator, revert) {
  var res = true;
  each(val, function(item, key) {
    if (!iterator(item, key)) {
      res = false;
      return false;
    }
  }, revert);
  return res;
}
function some(val, iterator, revert) {
  var res = false;
  each(val, function(item, key) {
    if (iterator(item, key)) {
      res = true;
      return false;
    }
  }, revert);
  return res;
}
function findIndex(val, iterator, revert) {
  var res = -1;
  each(val, function(item, key) {
    if (iterator(item, key)) {
      res = key;
      return false;
    }
  }, revert);
  return res;
}
function find(val, iterator, revert) {
  var res;
  each(val, function(item, key) {
    if (iterator(item, key)) {
      res = item;
      return false;
    }
  }, revert);
  return res;
}
function includes(val, searchElement, revert) {
  if (isStr(val))
    return val.includes(searchElement);
  return some(val, function(item) {
    return item === searchElement;
  }, revert);
}

// node_modules/@formily/shared/esm/global.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function globalSelf() {
  try {
    if (typeof self !== "undefined") {
      return self;
    }
  } catch (e) {
  }
  try {
    if (typeof window !== "undefined") {
      return window;
    }
  } catch (e) {
  }
  try {
    if (typeof global !== "undefined") {
      return global;
    }
  } catch (e) {
  }
  return Function("return this")();
}
var globalThisPolyfill = globalSelf();

// node_modules/@formily/shared/esm/instanceof.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var instOf = function(value, cls) {
  if (isFn(cls))
    return value instanceof cls;
  if (isStr(cls))
    return globalThisPolyfill[cls] ? value instanceof globalThisPolyfill[cls] : false;
  return false;
};

// node_modules/@formily/shared/esm/compare.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var isArray = isArr;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
function equal(a, b) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    var arrA = isArray(a);
    var arrB = isArray(b);
    var i = void 0;
    var length_1;
    var key = void 0;
    if (arrA && arrB) {
      length_1 = a.length;
      if (length_1 !== b.length) {
        return false;
      }
      for (i = length_1; i-- !== 0; ) {
        if (!equal(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (arrA !== arrB) {
      return false;
    }
    var momentA = a && a._isAMomentObject;
    var momentB = b && b._isAMomentObject;
    if (momentA !== momentB)
      return false;
    if (momentA && momentB)
      return a.isSame(b);
    var immutableA = a && a.toJS;
    var immutableB = b && b.toJS;
    if (immutableA !== immutableB)
      return false;
    if (immutableA)
      return a.is ? a.is(b) : a === b;
    var dateA = instOf(a, "Date");
    var dateB = instOf(b, "Date");
    if (dateA !== dateB) {
      return false;
    }
    if (dateA && dateB) {
      return a.getTime() === b.getTime();
    }
    var regexpA = instOf(a, "RegExp");
    var regexpB = instOf(b, "RegExp");
    if (regexpA !== regexpB) {
      return false;
    }
    if (regexpA && regexpB) {
      return a.toString() === b.toString();
    }
    var urlA = instOf(a, "URL");
    var urlB = instOf(b, "URL");
    if (urlA !== urlB) {
      return false;
    }
    if (urlA && urlB) {
      return a.href === b.href;
    }
    var schemaA = a && a.toJSON;
    var schemaB = b && b.toJSON;
    if (schemaA !== schemaB)
      return false;
    if (schemaA && schemaB)
      return equal(a.toJSON(), b.toJSON());
    var keys = keyList(a);
    length_1 = keys.length;
    if (length_1 !== keyList(b).length) {
      return false;
    }
    for (i = length_1; i-- !== 0; ) {
      if (!hasProp.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length_1; i-- !== 0; ) {
      key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      } else {
        if (!equal(a[key], b[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
var isEqual = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
      console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
      return false;
    }
    throw error;
  }
};

// node_modules/@formily/shared/esm/clone.js
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
var shallowClone = function(values) {
  if (Array.isArray(values)) {
    return values.slice(0);
  } else if (isPlainObj(values)) {
    if ("$$typeof" in values && "_owner" in values) {
      return values;
    }
    if (values["_isAMomentObject"]) {
      return values;
    }
    if (values["_isJSONSchemaObject"]) {
      return values;
    }
    if (isFn(values["toJS"])) {
      return values;
    }
    if (isFn(values["toJSON"])) {
      return values;
    }
    return __assign({}, values);
  } else if (typeof values === "object") {
    return new values.constructor(values);
  }
  return values;
};
var clone = function(values) {
  if (Array.isArray(values)) {
    var res_1 = [];
    values.forEach(function(item) {
      res_1.push(clone(item));
    });
    return res_1;
  } else if (isPlainObj(values)) {
    if ("$$typeof" in values && "_owner" in values) {
      return values;
    }
    if (values["_isAMomentObject"]) {
      return values;
    }
    if (values["_isJSONSchemaObject"]) {
      return values;
    }
    if (isFn(values["toJS"])) {
      return values["toJS"]();
    }
    if (isFn(values["toJSON"])) {
      return values["toJSON"]();
    }
    var res = {};
    for (var key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        res[key] = clone(values[key]);
      }
    }
    return res;
  } else {
    return values;
  }
};

// node_modules/@formily/shared/esm/isEmpty.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var has = Object.prototype.hasOwnProperty;
var toString2 = Object.prototype.toString;
var isUndef = function(val) {
  return val === void 0;
};
var isValid = function(val) {
  return val !== void 0 && val !== null;
};
function isEmpty(val, strict) {
  if (strict === void 0) {
    strict = false;
  }
  if (val == null) {
    return true;
  }
  if (typeof val === "boolean") {
    return false;
  }
  if (typeof val === "number") {
    return false;
  }
  if (typeof val === "string") {
    return val.length === 0;
  }
  if (typeof val === "function") {
    return val.length === 0;
  }
  if (Array.isArray(val)) {
    if (val.length === 0) {
      return true;
    }
    for (var i = 0; i < val.length; i++) {
      if (strict) {
        if (val[i] !== void 0 && val[i] !== null) {
          return false;
        }
      } else {
        if (val[i] !== void 0 && val[i] !== null && val[i] !== "" && val[i] !== 0) {
          return false;
        }
      }
    }
    return true;
  }
  if (instOf(val, "Error")) {
    return val.message === "";
  }
  if (val.toString === toString2) {
    switch (val.toString()) {
      case "[object File]":
      case "[object Map]":
      case "[object Set]": {
        return val.size === 0;
      }
      case "[object Object]": {
        for (var key in val) {
          if (has.call(val, key)) {
            return false;
          }
        }
        return true;
      }
    }
  }
  return false;
}

// node_modules/lower-case/dist.es2015/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function lowerCase(str) {
  return str.toLowerCase();
}

// node_modules/pascal-case/dist.es2015/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/tslib/tslib.es6.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var __assign2 = function() {
  __assign2 = Object.assign || function __assign5(t) {
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

// node_modules/no-case/dist.es2015/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}

// node_modules/pascal-case/dist.es2015/index.js
function pascalCaseTransform(input, index) {
  var firstChar = input.charAt(0);
  var lowerChars = input.substr(1).toLowerCase();
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return "_" + firstChar + lowerChars;
  }
  return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign2({ delimiter: "", transform: pascalCaseTransform }, options));
}

// node_modules/camel-case/dist.es2015/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function camelCaseTransform(input, index) {
  if (index === 0)
    return input.toLowerCase();
  return pascalCaseTransform(input, index);
}
function camelCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return pascalCase(input, __assign2({ transform: camelCaseTransform }, options));
}

// node_modules/upper-case/dist.es2015/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function upperCase(str) {
  return str.toUpperCase();
}

// node_modules/param-case/dist.es2015/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/dot-case/dist.es2015/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function dotCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign2({ delimiter: "." }, options));
}

// node_modules/param-case/dist.es2015/index.js
function paramCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return dotCase(input, __assign2({ delimiter: "-" }, options));
}

// node_modules/@formily/shared/esm/case.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/shared/esm/string.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var ansiRegex = function() {
  var pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(pattern, "g");
};
var regex = "[\uD800-\uDBFF][\uDC00-\uDFFF]";
var astralRegex = function(opts) {
  return opts && opts.exact ? new RegExp("^".concat(regex, "$")) : new RegExp(regex, "g");
};
var stripAnsi = function(input) {
  return typeof input === "string" ? input.replace(ansiRegex(), "") : input;
};
var stringLength = function(input) {
  return stripAnsi(input).replace(astralRegex(), " ").length;
};

// node_modules/@formily/path/esm/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/path/esm/parser.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/path/esm/tokenizer.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/path/esm/tokens.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/path/esm/contexts.js
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
var ContextType = function(flag, props) {
  return __assign3({ flag }, props);
};
var bracketContext = ContextType("[]");
var bracketArrayContext = ContextType("[\\d]");
var bracketDContext = ContextType("[[]]");
var parenContext = ContextType("()");
var braceContext = ContextType("{}");
var destructorContext = ContextType("{x}");

// node_modules/@formily/path/esm/tokens.js
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
var TokenType = function(flag, props) {
  return __assign4({ flag }, props);
};
var nameTok = TokenType("name", {
  expectNext: function(next) {
    if (this.includesContext(destructorContext)) {
      return next === nameTok || next === commaTok || next === bracketRTok || next === braceRTok || next === colonTok;
    }
    return next === dotTok || next === commaTok || next === eofTok || next === bracketRTok || next === parenRTok || next === colonTok || next === expandTok || next === bracketLTok;
  }
});
var starTok = TokenType("*", {
  expectNext: function(next) {
    return next === dotTok || next === parenLTok || next === bracketLTok || next === eofTok || next === commaTok || next === parenRTok;
  }
});
var dbStarTok = TokenType("**", {
  expectNext: function(next) {
    return next === dotTok || next === parenLTok || next === bracketLTok || next === eofTok || next === commaTok || next === parenRTok;
  }
});
var dotTok = TokenType(".", {
  expectNext: function(next) {
    return next === dotTok || next === nameTok || next === bracketDLTok || next === starTok || next === dbStarTok || next === bracketLTok || next === braceLTok || next === eofTok;
  },
  expectPrev: function(prev) {
    return prev === dotTok || prev === nameTok || prev === bracketDRTok || prev === starTok || prev === parenRTok || prev === bracketRTok || prev === expandTok || prev === braceRTok;
  }
});
var bangTok = TokenType("!", {
  expectNext: function(next) {
    return next === nameTok || next === bracketDLTok;
  }
});
var colonTok = TokenType(":", {
  expectNext: function(next) {
    if (this.includesContext(destructorContext)) {
      return next === nameTok || next === braceLTok || next === bracketLTok;
    }
    return next === nameTok || next === bracketDLTok || next === bracketRTok;
  }
});
var braceLTok = TokenType("{", {
  expectNext: function(next) {
    return next === nameTok;
  },
  expectPrev: function(prev) {
    if (this.includesContext(destructorContext)) {
      return prev === colonTok || prev === commaTok || prev === bracketLTok;
    }
    return prev === dotTok || prev === colonTok || prev === parenLTok;
  },
  updateContext: function() {
    this.state.context.push(braceContext);
  }
});
var braceRTok = TokenType("}", {
  expectNext: function(next) {
    if (this.includesContext(destructorContext)) {
      return next === commaTok || next === braceRTok || next === eofTok || next === bracketRTok;
    }
    return next === dotTok || next === eofTok || next === commaTok;
  },
  expectPrev: function(prev) {
    return prev === nameTok || prev === braceRTok || prev === bracketRTok;
  },
  updateContext: function() {
    this.state.context.pop(braceContext);
  }
});
var bracketLTok = TokenType("[", {
  expectNext: function(next) {
    if (this.includesContext(destructorContext)) {
      return next === nameTok || next === bracketLTok || next === braceLTok || next === bracketRTok;
    }
    return next === nameTok || next === bracketDLTok || next === colonTok || next === bracketLTok || next === ignoreTok || next === bracketRTok;
  },
  expectPrev: function(prev) {
    if (this.includesContext(destructorContext)) {
      return prev === colonTok || prev === commaTok || prev === bracketLTok;
    }
    return prev === starTok || prev === bracketLTok || prev === dotTok || prev === nameTok || prev === parenLTok || prev == commaTok;
  },
  updateContext: function() {
    this.state.context.push(bracketContext);
  }
});
var bracketRTok = TokenType("]", {
  expectNext: function(next) {
    if (this.includesContext(destructorContext)) {
      return next === commaTok || next === braceRTok || next === bracketRTok || next === eofTok;
    }
    return next === dotTok || next === eofTok || next === commaTok || next === parenRTok || next === bracketRTok;
  },
  updateContext: function() {
    if (this.includesContext(bracketArrayContext))
      return;
    if (!this.includesContext(bracketContext))
      throw this.unexpect();
    this.state.context.pop();
  }
});
var bracketDLTok = TokenType("[[", {
  updateContext: function() {
    this.state.context.push(bracketDContext);
  }
});
var bracketDRTok = TokenType("]]", {
  updateContext: function() {
    if (this.curContext() !== bracketDContext)
      throw this.unexpect();
    this.state.context.pop();
  }
});
var parenLTok = TokenType("(", {
  expectNext: function(next) {
    return next === nameTok || next === bracketDLTok || next === braceLTok || next === bangTok || next === bracketLTok;
  },
  expectPrev: function(prev) {
    return prev === starTok;
  },
  updateContext: function() {
    this.state.context.push(parenContext);
  }
});
var parenRTok = TokenType(")", {
  expectNext: function(next) {
    return next === dotTok || next === eofTok || next === commaTok || next === parenRTok;
  },
  updateContext: function() {
    if (this.curContext() !== parenContext)
      throw this.unexpect();
    this.state.context.pop();
  }
});
var commaTok = TokenType(",", {
  expectNext: function(next) {
    return next === nameTok || next === bracketDLTok || next === bracketLTok || next === braceLTok;
  }
});
var ignoreTok = TokenType("ignore", {
  expectNext: function(next) {
    return next === bracketDRTok;
  },
  expectPrev: function(prev) {
    return prev == bracketDLTok;
  }
});
var expandTok = TokenType("expandTok", {
  expectNext: function(next) {
    return next === dotTok || next === eofTok || next === commaTok || next === parenRTok;
  }
});
var eofTok = TokenType("eof");

// node_modules/@formily/path/esm/tokenizer.js
var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var fullCharCodeAtPos = function(input, pos) {
  if (String.fromCharCode)
    return input.codePointAt(pos);
  var code = input.charCodeAt(pos);
  if (code <= 55295 || code >= 57344)
    return code;
  var next = input.charCodeAt(pos + 1);
  return (code << 10) + next - 56613888;
};
var isRewordCode = function(code) {
  return code === 42 || code === 46 || code === 33 || code === 91 || code === 93 || code === 40 || code === 41 || code === 44 || code === 58 || code === 126 || code === 123 || code === 125;
};
var getError = function(message, props) {
  var err = new Error(message);
  Object.assign(err, props);
  return err;
};
var slice = function(string, start, end) {
  var str = "";
  for (var i = start; i < end; i++) {
    var ch = string.charAt(i);
    if (ch !== "\\") {
      str += ch;
    }
  }
  return str;
};
var Tokenizer = function() {
  function Tokenizer2(input) {
    this.input = input;
    this.state = {
      context: [],
      type: null,
      pos: 0
    };
    this.type_ = null;
  }
  Tokenizer2.prototype.curContext = function() {
    return this.state.context[this.state.context.length - 1];
  };
  Tokenizer2.prototype.includesContext = function(context) {
    for (var len = this.state.context.length - 1; len >= 0; len--) {
      if (this.state.context[len] === context) {
        return true;
      }
    }
    return false;
  };
  Tokenizer2.prototype.unexpect = function(type) {
    type = type || this.state.type;
    return getError('Unexpect token "'.concat(type.flag, '" in ').concat(this.state.pos, " char."), {
      pos: this.state.pos
    });
  };
  Tokenizer2.prototype.expectNext = function(type, next) {
    if (type && type.expectNext) {
      if (next && !type.expectNext.call(this, next)) {
        throw getError('Unexpect token "'.concat(next.flag, '" token should not be behind "').concat(type.flag, '" token.(').concat(this.state.pos, "th char)"), {
          pos: this.state.pos
        });
      }
    }
  };
  Tokenizer2.prototype.expectPrev = function(type, prev) {
    if (type && type.expectPrev) {
      if (prev && !type.expectPrev.call(this, prev)) {
        throw getError('Unexpect token "'.concat(type.flag, '" should not be behind "').concat(prev.flag, '"(').concat(this.state.pos, "th char)."), {
          pos: this.state.pos
        });
      }
    }
  };
  Tokenizer2.prototype.match = function(type) {
    return this.state.type === type;
  };
  Tokenizer2.prototype.skipSpace = function() {
    if (this.curContext() === bracketDContext)
      return;
    loop:
      while (this.state.pos < this.input.length) {
        var ch = this.input.charCodeAt(this.state.pos);
        switch (ch) {
          case 32:
          case 160:
            ++this.state.pos;
            break;
          case 13:
            if (this.input.charCodeAt(this.state.pos + 1) === 10) {
              ++this.state.pos;
            }
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos;
            break;
          default:
            if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
              ++this.state.pos;
            } else {
              break loop;
            }
        }
      }
  };
  Tokenizer2.prototype.next = function() {
    this.type_ = this.state.type;
    if (this.input.length <= this.state.pos) {
      return this.finishToken(eofTok);
    }
    this.skipSpace();
    this.readToken(this.getCode(), this.state.pos > 0 ? this.getCode(this.state.pos - 1) : -Infinity);
  };
  Tokenizer2.prototype.getCode = function(pos) {
    if (pos === void 0) {
      pos = this.state.pos;
    }
    return fullCharCodeAtPos(this.input, pos);
  };
  Tokenizer2.prototype.eat = function(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  };
  Tokenizer2.prototype.readKeyWord = function() {
    var startPos = this.state.pos, string = "";
    while (true) {
      var code = this.getCode();
      var prevCode = this.getCode(this.state.pos - 1);
      if (this.input.length === this.state.pos) {
        string = slice(this.input, startPos, this.state.pos + 1);
        break;
      }
      if (!isRewordCode(code) || prevCode === 92) {
        if (code === 32 || code === 160 || code === 10 || code === 8232 || code === 8233) {
          string = slice(this.input, startPos, this.state.pos);
          break;
        }
        if (code === 13 && this.input.charCodeAt(this.state.pos + 1) === 10) {
          string = slice(this.input, startPos, this.state.pos);
          break;
        }
        if (code > 8 && code < 14 || code >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(code))) {
          string = slice(this.input, startPos, this.state.pos);
          break;
        }
        this.state.pos++;
      } else {
        string = slice(this.input, startPos, this.state.pos);
        break;
      }
    }
    this.finishToken(nameTok, string);
  };
  Tokenizer2.prototype.readIngoreString = function() {
    var startPos = this.state.pos, prevCode, string = "";
    while (true) {
      var code = this.getCode();
      if (this.state.pos >= this.input.length)
        break;
      if ((code === 91 || code === 93) && prevCode === 92) {
        this.state.pos++;
        prevCode = "";
      } else if (code == 93 && prevCode === 93) {
        string = this.input.slice(startPos, this.state.pos - 1).replace(/\\([\[\]])/g, "$1");
        this.state.pos++;
        break;
      } else {
        this.state.pos++;
        prevCode = code;
      }
    }
    this.finishToken(ignoreTok, string);
    this.finishToken(bracketDRTok);
  };
  Tokenizer2.prototype.finishToken = function(type, value) {
    var preType = this.state.type;
    this.state.type = type;
    if (value !== void 0)
      this.state.value = value;
    this.expectNext(preType, type);
    this.expectPrev(type, preType);
    if (type.updateContext) {
      type.updateContext.call(this, preType);
    }
  };
  Tokenizer2.prototype.readToken = function(code, prevCode) {
    if (prevCode === 92) {
      return this.readKeyWord();
    }
    if (this.input.length <= this.state.pos) {
      this.finishToken(eofTok);
    } else if (this.curContext() === bracketDContext) {
      this.readIngoreString();
    } else if (code === 123) {
      this.state.pos++;
      this.finishToken(braceLTok);
    } else if (code === 125) {
      this.state.pos++;
      this.finishToken(braceRTok);
    } else if (code === 42) {
      this.state.pos++;
      if (this.getCode() === 42) {
        this.state.pos++;
        return this.finishToken(dbStarTok);
      }
      this.finishToken(starTok);
    } else if (code === 33) {
      this.state.pos++;
      this.finishToken(bangTok);
    } else if (code === 46) {
      this.state.pos++;
      this.finishToken(dotTok);
    } else if (code === 91) {
      this.state.pos++;
      if (this.getCode() === 91) {
        this.state.pos++;
        return this.finishToken(bracketDLTok);
      }
      this.finishToken(bracketLTok);
    } else if (code === 126) {
      this.state.pos++;
      this.finishToken(expandTok);
    } else if (code === 93) {
      this.state.pos++;
      this.finishToken(bracketRTok);
    } else if (code === 40) {
      this.state.pos++;
      this.finishToken(parenLTok);
    } else if (code === 41) {
      this.state.pos++;
      this.finishToken(parenRTok);
    } else if (code === 44) {
      this.state.pos++;
      this.finishToken(commaTok);
    } else if (code === 58) {
      this.state.pos++;
      this.finishToken(colonTok);
    } else {
      this.readKeyWord();
    }
  };
  return Tokenizer2;
}();

// node_modules/@formily/path/esm/destructor.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/path/esm/types.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var isType2 = function(type) {
  return function(obj) {
    return obj && obj.type === type;
  };
};
var isIdentifier = isType2("Identifier");
var isIgnoreExpression = isType2("IgnoreExpression");
var isDotOperator = isType2("DotOperator");
var isWildcardOperator = isType2("WildcardOperator");
var isExpandOperator = isType2("ExpandOperator");
var isGroupExpression = isType2("GroupExpression");
var isRangeExpression = isType2("RangeExpression");
var isDestructorExpression = isType2("DestructorExpression");
var isObjectPattern = isType2("ObjectPattern");
var isObjectPatternProperty = isType2("ObjectPatternProperty");
var isArrayPattern = isType2("ArrayPattern");

// node_modules/@formily/path/esm/shared.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var toString3 = Object.prototype.toString;
var isType3 = function(type) {
  return function(obj) {
    return toString3.call(obj) === "[object ".concat(type, "]");
  };
};
var isFn2 = isType3("Function");
var isArr2 = Array.isArray || isType3("Array");
var isPlainObj2 = isType3("Object");
var isStr2 = isType3("String");
var isBool2 = isType3("Boolean");
var isNum2 = isType3("Number");
var isObj2 = function(val) {
  return typeof val === "object";
};
var isRegExp2 = isType3("RegExp");
var isNumberLike2 = function(t) {
  return isNum2(t) || /^(\d+)(\.\d+)?$/.test(t);
};
var isArray2 = isArr2;
var keyList2 = Object.keys;
var hasProp2 = Object.prototype.hasOwnProperty;
var toArr2 = function(val) {
  return Array.isArray(val) ? val : val !== void 0 ? [val] : [];
};
var isEqual2 = function(a, b) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    var arrA = isArray2(a);
    var arrB = isArray2(b);
    var i = void 0;
    var length = void 0;
    var key = void 0;
    if (arrA && arrB) {
      length = a.length;
      if (length !== b.length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (!isEqual2(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (arrA !== arrB) {
      return false;
    }
    var keys = keyList2(a);
    length = keys.length;
    if (length !== keyList2(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!hasProp2.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      key = keys[i];
      if (!isEqual2(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
};
var isSegmentEqual = function(a, b) {
  a = typeof a === "symbol" ? a : "".concat(a);
  b = typeof b === "symbol" ? b : "".concat(b);
  return a === b;
};

// node_modules/@formily/path/esm/destructor.js
var DestructorCache = /* @__PURE__ */ new Map();
var isValid2 = function(val) {
  return val !== void 0 && val !== null;
};
var getDestructor = function(source) {
  return DestructorCache.get(source);
};
var setDestructor = function(source, rules) {
  DestructorCache.set(source, rules);
};
var parseDestructorRules = function(node) {
  var rules = [];
  if (isObjectPattern(node)) {
    var index_1 = 0;
    node.properties.forEach(function(child) {
      rules[index_1] = {
        path: []
      };
      rules[index_1].key = child.key.value;
      rules[index_1].path.push(child.key.value);
      if (isIdentifier(child.value)) {
        rules[index_1].key = child.value.value;
      }
      var basePath = rules[index_1].path;
      var childRules = parseDestructorRules(child.value);
      var k = index_1;
      childRules.forEach(function(rule) {
        if (rules[k]) {
          rules[k].key = rule.key;
          rules[k].path = basePath.concat(rule.path);
        } else {
          rules[k] = {
            key: rule.key,
            path: basePath.concat(rule.path)
          };
        }
        k++;
      });
      if (k > index_1) {
        index_1 = k;
      } else {
        index_1++;
      }
    });
    return rules;
  } else if (isArrayPattern(node)) {
    var index_2 = 0;
    node.elements.forEach(function(child, key) {
      rules[index_2] = {
        path: []
      };
      rules[index_2].key = key;
      rules[index_2].path.push(key);
      if (isIdentifier(child)) {
        rules[index_2].key = child.value;
      }
      var basePath = rules[index_2].path;
      var childRules = parseDestructorRules(child);
      var k = index_2;
      childRules.forEach(function(rule) {
        if (rules[k]) {
          rules[k].key = rule.key;
          rules[k].path = basePath.concat(rule.path);
        } else {
          rules[k] = {
            key: rule.key,
            path: basePath.concat(rule.path)
          };
        }
        k++;
      });
      if (k > index_2) {
        index_2 = k;
      } else {
        index_2++;
      }
    });
    return rules;
  }
  if (isDestructorExpression(node)) {
    return parseDestructorRules(node.value);
  }
  return rules;
};
var setInByDestructor = function(source, rules, value, mutators) {
  rules.forEach(function(_a) {
    var key = _a.key, path = _a.path;
    mutators.setIn([key], source, mutators.getIn(path, value));
  });
};
var getInByDestructor = function(source, rules, mutators) {
  var response = {};
  if (rules.length) {
    if (isNum2(rules[0].path[0])) {
      response = [];
    }
  }
  source = isValid2(source) ? source : {};
  rules.forEach(function(_a) {
    var key = _a.key, path = _a.path;
    mutators.setIn(path, response, source[key]);
  });
  return response;
};
var deleteInByDestructor = function(source, rules, mutators) {
  rules.forEach(function(_a) {
    var key = _a.key;
    mutators.deleteIn([key], source);
  });
};
var existInByDestructor = function(source, rules, start, mutators) {
  return rules.every(function(_a) {
    var key = _a.key;
    return mutators.existIn([key], source, start);
  });
};

// node_modules/@formily/path/esm/parser.js
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var createTreeBySegments = function(segments, afterNode) {
  if (segments === void 0) {
    segments = [];
  }
  var segLen = segments.length;
  var build = function(start) {
    if (start === void 0) {
      start = 0;
    }
    var after = start < segLen - 1 ? build(start + 1) : afterNode;
    var dot = after && {
      type: "DotOperator",
      after
    };
    return {
      type: "Identifier",
      value: segments[start],
      after: dot
    };
  };
  return build();
};
var calculate = function(a, b, operator) {
  if (isNumberLike2(a) && isNumberLike2(b)) {
    if (operator === "+")
      return String(Number(a) + Number(b));
    if (operator === "-")
      return String(Number(a) - Number(b));
    if (operator === "*")
      return String(Number(a) * Number(b));
    if (operator === "/")
      return String(Number(a) / Number(b));
  } else {
    if (operator === "+")
      return String(a) + String(b);
    if (operator === "-")
      return "NaN";
    if (operator === "*")
      return "NaN";
    if (operator === "/")
      return "NaN";
  }
  return String(Number(b));
};
var Parser = function(_super) {
  __extends(Parser2, _super);
  function Parser2(input, base) {
    var _this = _super.call(this, input) || this;
    _this.isMatchPattern = false;
    _this.isWildMatchPattern = false;
    _this.haveExcludePattern = false;
    _this.haveRelativePattern = false;
    _this.base = base;
    return _this;
  }
  Parser2.prototype.parse = function() {
    var node;
    this.data = {
      segments: []
    };
    if (!this.eat(eofTok)) {
      this.next();
      node = this.parseAtom(this.state.type);
    }
    this.data.tree = node;
    return node;
  };
  Parser2.prototype.append = function(parent, node) {
    if (parent && node) {
      parent.after = node;
    }
  };
  Parser2.prototype.parseAtom = function(type) {
    switch (type) {
      case braceLTok:
      case bracketLTok:
        if (this.includesContext(destructorContext)) {
          if (type === braceLTok) {
            return this.parseObjectPattern();
          } else {
            return this.parseArrayPattern();
          }
        }
        return this.parseDestructorExpression();
      case nameTok:
        return this.parseIdentifier();
      case expandTok:
        return this.parseExpandOperator();
      case dbStarTok:
      case starTok:
        return this.parseWildcardOperator();
      case bracketDLTok:
        return this.parseIgnoreExpression();
      case dotTok:
        return this.parseDotOperator();
    }
  };
  Parser2.prototype.pushSegments = function(key) {
    this.data.segments.push(key);
  };
  Parser2.prototype.parseIdentifier = function() {
    var node = {
      type: "Identifier",
      value: this.state.value
    };
    var hasNotInDestructor = !this.includesContext(destructorContext) && !this.isMatchPattern && !this.isWildMatchPattern;
    this.next();
    if (this.includesContext(bracketArrayContext)) {
      if (this.state.type !== bracketRTok) {
        throw this.unexpect();
      } else {
        this.state.context.pop();
        this.next();
      }
    } else if (hasNotInDestructor) {
      this.pushSegments(node.value);
    }
    if (this.state.type === bracketLTok) {
      this.next();
      if (this.state.type !== nameTok) {
        throw this.unexpect();
      }
      this.state.context.push(bracketArrayContext);
      var isNumberKey = false;
      if (/^\d+$/.test(this.state.value)) {
        isNumberKey = true;
      }
      var value = this.state.value;
      this.pushSegments(isNumberKey ? Number(value) : value);
      var after = this.parseAtom(this.state.type);
      if (isNumberKey) {
        after.arrayIndex = true;
      }
      this.append(node, after);
    } else {
      this.append(node, this.parseAtom(this.state.type));
    }
    return node;
  };
  Parser2.prototype.parseExpandOperator = function() {
    var node = {
      type: "ExpandOperator"
    };
    this.isMatchPattern = true;
    this.isWildMatchPattern = true;
    this.data.segments = [];
    this.next();
    this.append(node, this.parseAtom(this.state.type));
    return node;
  };
  Parser2.prototype.parseWildcardOperator = function() {
    var node = {
      type: "WildcardOperator"
    };
    if (this.state.type === dbStarTok) {
      node.optional = true;
    }
    this.isMatchPattern = true;
    this.isWildMatchPattern = true;
    this.data.segments = [];
    this.next();
    if (this.state.type === parenLTok) {
      node.filter = this.parseGroupExpression(node);
    } else if (this.state.type === bracketLTok) {
      node.filter = this.parseRangeExpression(node);
    }
    this.append(node, this.parseAtom(this.state.type));
    return node;
  };
  Parser2.prototype.parseDestructorExpression = function() {
    var _this = this;
    var node = {
      type: "DestructorExpression"
    };
    this.state.context.push(destructorContext);
    var startPos = this.state.pos - 1;
    node.value = this.state.type === braceLTok ? this.parseObjectPattern() : this.parseArrayPattern();
    var endPos = this.state.pos;
    this.state.context.pop();
    node.source = this.input.substring(startPos, endPos).replace(/\[\s*([\+\-\*\/])?\s*([^,\]\s]*)\s*\]/, function(match, operator, target) {
      if (_this.relative !== void 0) {
        if (operator) {
          if (target) {
            return calculate(_this.relative, target, operator);
          } else {
            return calculate(_this.relative, 1, operator);
          }
        } else {
          if (target) {
            return calculate(_this.relative, target, "+");
          } else {
            return String(_this.relative);
          }
        }
      }
      return match;
    }).replace(/\s*\.\s*/g, "").replace(/\s*/g, "");
    if (this.relative === void 0) {
      setDestructor(node.source, parseDestructorRules(node));
    }
    this.relative = void 0;
    this.pushSegments(node.source);
    this.next();
    this.append(node, this.parseAtom(this.state.type));
    return node;
  };
  Parser2.prototype.parseArrayPattern = function() {
    var node = {
      type: "ArrayPattern",
      elements: []
    };
    this.next();
    node.elements = this.parseArrayPatternElements();
    return node;
  };
  Parser2.prototype.parseArrayPatternElements = function() {
    var nodes = [];
    while (this.state.type !== bracketRTok && this.state.type !== eofTok) {
      nodes.push(this.parseAtom(this.state.type));
      if (this.state.type === bracketRTok) {
        if (this.includesContext(destructorContext)) {
          this.next();
        }
        return nodes;
      }
      this.next();
    }
    return nodes;
  };
  Parser2.prototype.parseObjectPattern = function() {
    var node = {
      type: "ObjectPattern",
      properties: []
    };
    this.next();
    node.properties = this.parseObjectProperties();
    return node;
  };
  Parser2.prototype.parseObjectProperties = function() {
    var nodes = [];
    while (this.state.type !== braceRTok && this.state.type !== eofTok) {
      var node = {
        type: "ObjectPatternProperty",
        key: this.parseAtom(this.state.type)
      };
      nodes.push(node);
      if (this.state.type === colonTok) {
        this.next();
        node.value = this.parseAtom(this.state.type);
      }
      if (this.state.type === braceRTok) {
        if (this.includesContext(destructorContext)) {
          this.next();
        }
        return nodes;
      }
      this.next();
    }
    return nodes;
  };
  Parser2.prototype.parseDotOperator = function() {
    var node = {
      type: "DotOperator"
    };
    var prevToken = this.type_;
    if (!prevToken && this.base) {
      if (this.base.isMatchPattern) {
        throw new Error("Base path must be an absolute path.");
      }
      this.data.segments = this.base.toArr();
      while (this.state.type === dotTok) {
        this.relative = this.data.segments.pop();
        this.haveRelativePattern = true;
        this.next();
      }
      return createTreeBySegments(this.data.segments.slice(), this.parseAtom(this.state.type));
    } else {
      this.next();
    }
    this.append(node, this.parseAtom(this.state.type));
    return node;
  };
  Parser2.prototype.parseIgnoreExpression = function() {
    this.next();
    var value = String(this.state.value).replace(/\s*/g, "");
    var node = {
      type: "IgnoreExpression",
      value
    };
    this.pushSegments(value);
    this.next();
    this.append(node, this.parseAtom(this.state.type));
    this.next();
    return node;
  };
  Parser2.prototype.parseGroupExpression = function(parent) {
    var node = {
      type: "GroupExpression",
      value: []
    };
    this.isMatchPattern = true;
    this.data.segments = [];
    this.next();
    loop:
      while (true) {
        switch (this.state.type) {
          case commaTok:
            this.next();
            break;
          case bangTok:
            node.isExclude = true;
            this.haveExcludePattern = true;
            this.next();
            break;
          case eofTok:
            break loop;
          case parenRTok:
            break loop;
          default:
            node.value.push(this.parseAtom(this.state.type));
        }
      }
    this.next();
    this.append(parent, this.parseAtom(this.state.type));
    return node;
  };
  Parser2.prototype.parseRangeExpression = function(parent) {
    var node = {
      type: "RangeExpression"
    };
    this.next();
    this.isMatchPattern = true;
    this.data.segments = [];
    var start = false, hasColon = false;
    loop:
      while (true) {
        switch (this.state.type) {
          case colonTok:
            hasColon = true;
            start = true;
            this.next();
            break;
          case bracketRTok:
            if (!hasColon && !node.end) {
              node.end = node.start;
            }
            break loop;
          case commaTok:
            throw this.unexpect();
          case eofTok:
            break loop;
          default:
            if (!start) {
              node.start = this.parseAtom(this.state.type);
            } else {
              node.end = this.parseAtom(this.state.type);
            }
        }
      }
    this.next();
    this.append(parent, this.parseAtom(this.state.type));
    return node;
  };
  return Parser2;
}(Tokenizer);

// node_modules/@formily/path/esm/matcher.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var Matcher = function() {
  function Matcher2(tree, record) {
    this.tree = tree;
    this.stack = [];
    this.excluding = false;
    this.wildcards = [];
    this.record = record;
  }
  Matcher2.prototype.next = function(node, pos) {
    var isLastToken = pos === this.path.length - 1;
    if (node.after) {
      return this.matchNode(node.after, pos);
    }
    if (isWildcardOperator(node) && !node.filter) {
      if (this.excluding) {
        return false;
      } else {
        if (pos === 0 || node.optional)
          return true;
        return !!this.take(pos);
      }
    }
    if (isLastToken) {
      return !!this.take(pos);
    } else {
      var wildcard = this.wildcards.pop();
      if (wildcard && wildcard.after) {
        return this.next(wildcard, pos);
      }
    }
    return false;
  };
  Matcher2.prototype.shot = function() {
    var _a;
    if (((_a = this.record) === null || _a === void 0 ? void 0 : _a.score) >= 0) {
      this.record.score++;
    }
  };
  Matcher2.prototype.take = function(pos) {
    var _a;
    return String((_a = this.path[pos]) !== null && _a !== void 0 ? _a : "");
  };
  Matcher2.prototype.matchExcludeIdentifier = function(matched, node, pos) {
    var isLastToken = pos === this.path.length - 1;
    var isContainToken = pos < this.path.length;
    if (!node.after) {
      this.excluding = false;
    }
    if (matched) {
      if (node.after) {
        return this.next(node, pos);
      }
      if (isLastToken) {
        return false;
      }
    }
    if (isLastToken) {
      return true;
    }
    return isContainToken;
  };
  Matcher2.prototype.matchIdentifier = function(node, pos) {
    var current = this.take(pos);
    var matched = false;
    if (isExpandOperator(node.after)) {
      if (current.indexOf(node.value) === 0) {
        this.shot();
        matched = true;
      }
      if (this.excluding) {
        return this.matchExcludeIdentifier(matched, node.after, pos);
      } else {
        return matched && this.next(node.after, pos);
      }
    } else if (current === node.value) {
      this.shot();
      matched = true;
    }
    if (this.excluding) {
      return this.matchExcludeIdentifier(matched, node, pos);
    } else {
      return matched && this.next(node, pos);
    }
  };
  Matcher2.prototype.matchIgnoreExpression = function(node, pos) {
    return isEqual2(node.value, this.take(pos)) && this.next(node, pos);
  };
  Matcher2.prototype.matchDestructorExpression = function(node, pos) {
    return isEqual2(node.source, this.take(pos)) && this.next(node, pos);
  };
  Matcher2.prototype.matchExpandOperator = function(node, pos) {
    return this.next(node, pos);
  };
  Matcher2.prototype.matchWildcardOperator = function(node, pos) {
    var matched = false;
    if (node.filter) {
      this.stack.push(node);
      matched = this.matchNode(node.filter, pos);
      this.stack.pop();
    } else {
      matched = this.next(node, pos);
    }
    return matched;
  };
  Matcher2.prototype.matchGroupExpression = function(node, pos) {
    var _this = this;
    var excluding = false;
    if (node.isExclude) {
      excluding = !this.excluding;
    }
    return toArr2(node.value)[excluding ? "every" : "some"](function(item) {
      _this.wildcards = _this.stack.slice();
      _this.excluding = excluding;
      return _this.matchNode(item, pos);
    });
  };
  Matcher2.prototype.matchRangeExpression = function(node, pos) {
    var current = Number(this.take(pos));
    if (node.start) {
      if (node.end) {
        return current >= Number(node.start.value) && current <= Number(node.end.value);
      } else {
        return current >= Number(node.start.value);
      }
    } else {
      if (node.end) {
        return current <= Number(node.end.value);
      } else {
        return true;
      }
    }
  };
  Matcher2.prototype.matchNode = function(node, pos) {
    if (pos === void 0) {
      pos = 0;
    }
    if (isDotOperator(node)) {
      return this.next(node, pos + 1);
    } else if (isIdentifier(node)) {
      return this.matchIdentifier(node, pos);
    } else if (isIgnoreExpression(node)) {
      return this.matchIgnoreExpression(node, pos);
    } else if (isDestructorExpression(node)) {
      return this.matchDestructorExpression(node, pos);
    } else if (isExpandOperator(node)) {
      return this.matchExpandOperator(node, pos);
    } else if (isWildcardOperator(node)) {
      return this.matchWildcardOperator(node, pos);
    } else if (isGroupExpression(node)) {
      return this.matchGroupExpression(node, pos);
    } else if (isRangeExpression(node)) {
      return this.matchRangeExpression(node, pos);
    }
    return false;
  };
  Matcher2.prototype.match = function(path) {
    this.path = path;
    return { matched: this.matchNode(this.tree), record: this.record };
  };
  Matcher2.matchSegments = function(source, target, record) {
    if (source.length !== target.length)
      return { matched: false, record };
    var match = function(pos) {
      if (pos === void 0) {
        pos = 0;
      }
      var current = isSegmentEqual(source[pos], target[pos]);
      if ((record === null || record === void 0 ? void 0 : record.score) >= 0) {
        record.score++;
      }
      return current && (pos < source.length - 1 ? match(pos + 1) : true);
    };
    return { matched: match(), record };
  };
  return Matcher2;
}();

// node_modules/@formily/path/esm/index.js
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
var pathCache = /* @__PURE__ */ new Map();
var isMatcher = Symbol("PATH_MATCHER");
var isValid3 = function(val) {
  return val !== void 0 && val !== null;
};
var isSimplePath = function(val) {
  return val.indexOf("*") === -1 && val.indexOf("~") === -1 && val.indexOf("[") === -1 && val.indexOf("]") === -1 && val.indexOf(",") === -1 && val.indexOf(":") === -1 && val.indexOf(" ") === -1 && val[0] !== ".";
};
var isAssignable = function(val) {
  return typeof val === "object" || typeof val === "function";
};
var isNumberIndex = function(val) {
  return isStr2(val) ? /^\d+$/.test(val) : isNum2(val);
};
var getIn = function(segments, source) {
  for (var i = 0; i < segments.length; i++) {
    var index = segments[i];
    var rules = getDestructor(index);
    if (!rules) {
      if (!isValid3(source)) {
        if (i !== segments.length - 1) {
          return source;
        }
        break;
      }
      source = source[index];
    } else {
      source = getInByDestructor(source, rules, { setIn, getIn });
      break;
    }
  }
  return source;
};
var setIn = function(segments, source, value) {
  for (var i = 0; i < segments.length; i++) {
    var index = segments[i];
    var rules = getDestructor(index);
    if (!rules) {
      if (!isValid3(source) || !isAssignable(source))
        return;
      if (isArr2(source) && !isNumberIndex(index)) {
        return;
      }
      if (!isValid3(source[index])) {
        if (value === void 0) {
          if (source[index] === null)
            source[index] = value;
          return;
        }
        if (i < segments.length - 1) {
          source[index] = isNum2(segments[i + 1]) ? [] : {};
        }
      }
      if (i === segments.length - 1) {
        source[index] = value;
      }
      source = source[index];
    } else {
      setInByDestructor(source, rules, value, { setIn, getIn });
      break;
    }
  }
};
var deleteIn = function(segments, source) {
  for (var i = 0; i < segments.length; i++) {
    var index = segments[i];
    var rules = getDestructor(index);
    if (!rules) {
      if (i === segments.length - 1 && isValid3(source)) {
        delete source[index];
        return;
      }
      if (!isValid3(source) || !isAssignable(source))
        return;
      source = source[index];
      if (!isObj2(source)) {
        return;
      }
    } else {
      deleteInByDestructor(source, rules, {
        setIn,
        getIn,
        deleteIn
      });
      break;
    }
  }
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var existIn = function(segments, source, start) {
  if (start instanceof Path) {
    start = start.length;
  }
  for (var i = start; i < segments.length; i++) {
    var index = segments[i];
    var rules = getDestructor(index);
    if (!rules) {
      if (i === segments.length - 1) {
        return hasOwnProperty.call(source, index);
      }
      if (!isValid3(source) || !isAssignable(source))
        return false;
      source = source[index];
      if (!isObj2(source)) {
        return false;
      }
    } else {
      return existInByDestructor(source, rules, start, {
        setIn,
        getIn,
        deleteIn,
        existIn
      });
    }
  }
};
var parse = function(pattern, base) {
  if (pattern instanceof Path) {
    return {
      entire: pattern.entire,
      segments: pattern.segments.slice(),
      isRegExp: false,
      haveRelativePattern: pattern.haveRelativePattern,
      isWildMatchPattern: pattern.isWildMatchPattern,
      isMatchPattern: pattern.isMatchPattern,
      haveExcludePattern: pattern.haveExcludePattern,
      tree: pattern.tree
    };
  } else if (isStr2(pattern)) {
    if (!pattern) {
      return {
        entire: "",
        segments: [],
        isRegExp: false,
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: false
      };
    }
    if (isSimplePath(pattern)) {
      return {
        entire: pattern,
        segments: pattern.split("."),
        isRegExp: false,
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: false
      };
    }
    var parser = new Parser(pattern, Path.parse(base));
    var tree = parser.parse();
    if (!parser.isMatchPattern) {
      var segments = parser.data.segments;
      return {
        entire: segments.join("."),
        segments,
        tree,
        isRegExp: false,
        haveRelativePattern: parser.haveRelativePattern,
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: false
      };
    } else {
      return {
        entire: pattern,
        segments: [],
        isRegExp: false,
        haveRelativePattern: false,
        isWildMatchPattern: parser.isWildMatchPattern,
        haveExcludePattern: parser.haveExcludePattern,
        isMatchPattern: true,
        tree
      };
    }
  } else if (isFn2(pattern) && pattern[isMatcher]) {
    return parse(pattern["path"]);
  } else if (isArr2(pattern)) {
    return {
      entire: pattern.join("."),
      segments: pattern.reduce(function(buf, key) {
        return buf.concat(parseString(key));
      }, []),
      isRegExp: false,
      haveRelativePattern: false,
      isWildMatchPattern: false,
      haveExcludePattern: false,
      isMatchPattern: false
    };
  } else if (isRegExp2(pattern)) {
    return {
      entire: pattern,
      segments: [],
      isRegExp: true,
      haveRelativePattern: false,
      isWildMatchPattern: false,
      haveExcludePattern: false,
      isMatchPattern: true
    };
  } else {
    return {
      entire: "",
      isRegExp: false,
      segments: pattern !== void 0 ? [pattern] : [],
      haveRelativePattern: false,
      isWildMatchPattern: false,
      haveExcludePattern: false,
      isMatchPattern: false
    };
  }
};
var parseString = function(source) {
  if (isStr2(source)) {
    source = source.replace(/\s*/g, "");
    try {
      var _a = parse(source), segments = _a.segments, isMatchPattern = _a.isMatchPattern;
      return !isMatchPattern ? segments : source;
    } catch (e) {
      return source;
    }
  } else if (source instanceof Path) {
    return source.segments;
  }
  return source;
};
var Path = function() {
  function Path2(input, base) {
    var _this = this;
    this.concat = function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error("".concat(_this.entire, " cannot be concat"));
      }
      var path = new Path2("");
      path.segments = (_a2 = _this.segments).concat.apply(_a2, __spreadArray([], __read(args.map(function(s) {
        return parseString(s);
      })), false));
      path.entire = path.segments.join(".");
      return path;
    };
    this.slice = function(start, end) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error("".concat(_this.entire, " cannot be slice"));
      }
      var path = new Path2("");
      path.segments = _this.segments.slice(start, end);
      path.entire = path.segments.join(".");
      return path;
    };
    this.push = function() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      return _this.concat.apply(_this, __spreadArray([], __read(items), false));
    };
    this.pop = function() {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error("".concat(_this.entire, " cannot be pop"));
      }
      return new Path2(_this.segments.slice(0, _this.segments.length - 1));
    };
    this.splice = function(start, deleteCount) {
      var items = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
      }
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error("".concat(_this.entire, " cannot be splice"));
      }
      items = items.reduce(function(buf, item) {
        return buf.concat(parseString(item));
      }, []);
      var segments_ = _this.segments.slice();
      segments_.splice.apply(segments_, __spreadArray([start, deleteCount], __read(items), false));
      return new Path2(segments_);
    };
    this.forEach = function(callback) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error("".concat(_this.entire, " cannot be each"));
      }
      _this.segments.forEach(callback);
    };
    this.map = function(callback) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error("".concat(_this.entire, " cannot be map"));
      }
      return _this.segments.map(callback);
    };
    this.reduce = function(callback, initial) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error("".concat(_this.entire, " cannot be reduce"));
      }
      return _this.segments.reduce(callback, initial);
    };
    this.parent = function() {
      return _this.slice(0, _this.length - 1);
    };
    this.includes = function(pattern) {
      var _a2 = Path2.parse(pattern), entire2 = _a2.entire, segments2 = _a2.segments, isMatchPattern2 = _a2.isMatchPattern;
      var cache = _this.includesCache.get(entire2);
      if (cache !== void 0)
        return cache;
      var cacheWith = function(value) {
        _this.includesCache.set(entire2, value);
        return value;
      };
      if (_this.isMatchPattern) {
        if (!isMatchPattern2) {
          return cacheWith(_this.match(segments2));
        } else {
          throw new Error("".concat(_this.entire, " cannot be used to match ").concat(entire2));
        }
      }
      if (isMatchPattern2) {
        throw new Error("".concat(_this.entire, " cannot be used to match ").concat(entire2));
      }
      if (segments2.length > _this.segments.length)
        return cacheWith(false);
      for (var i = 0; i < segments2.length; i++) {
        if (!isEqual2(String(segments2[i]), String(_this.segments[i]))) {
          return cacheWith(false);
        }
      }
      return cacheWith(true);
    };
    this.transform = function(regexp, callback) {
      if (!isFn2(callback))
        return "";
      if (_this.isMatchPattern) {
        throw new Error("".concat(_this.entire, " cannot be transformed"));
      }
      var args = _this.segments.reduce(function(buf, key) {
        return new RegExp(regexp).test(key) ? buf.concat(key) : buf;
      }, []);
      return callback.apply(void 0, __spreadArray([], __read(args), false));
    };
    this.match = function(pattern) {
      var _a2, _b;
      var path = Path2.parse(pattern);
      var cache = _this.matchCache.get(path.entire);
      if (cache !== void 0) {
        if (cache.record && cache.record.score !== void 0) {
          _this.matchScore = cache.record.score;
        }
        return cache.matched;
      }
      var cacheWith = function(value) {
        _this.matchCache.set(path.entire, value);
        return value;
      };
      if (path.isMatchPattern) {
        if (_this.isMatchPattern) {
          throw new Error("".concat(path.entire, " cannot match ").concat(_this.entire));
        } else {
          _this.matchScore = 0;
          return cacheWith(path.match(_this.segments));
        }
      } else {
        if (_this.isMatchPattern) {
          if (_this.isRegExp) {
            try {
              return (_b = (_a2 = _this["entire"]) === null || _a2 === void 0 ? void 0 : _a2["test"]) === null || _b === void 0 ? void 0 : _b.call(_a2, path.entire);
            } finally {
              ;
              _this.entire.lastIndex = 0;
            }
          }
          var record = {
            score: 0
          };
          var result = cacheWith(new Matcher(_this.tree, record).match(path.segments));
          _this.matchScore = record.score;
          return result.matched;
        } else {
          var record = {
            score: 0
          };
          var result = cacheWith(Matcher.matchSegments(_this.segments, path.segments, record));
          _this.matchScore = record.score;
          return result.matched;
        }
      }
    };
    this.matchAliasGroup = function(name, alias) {
      var namePath = Path2.parse(name);
      var aliasPath = Path2.parse(alias);
      var nameMatched = _this.match(namePath);
      var nameMatchedScore = _this.matchScore;
      var aliasMatched = _this.match(aliasPath);
      var aliasMatchedScore = _this.matchScore;
      if (_this.haveExcludePattern) {
        if (nameMatchedScore >= aliasMatchedScore) {
          return nameMatched;
        } else {
          return aliasMatched;
        }
      } else {
        return nameMatched || aliasMatched;
      }
    };
    this.existIn = function(source, start) {
      if (start === void 0) {
        start = 0;
      }
      return existIn(_this.segments, source, start);
    };
    this.getIn = function(source) {
      return getIn(_this.segments, source);
    };
    this.setIn = function(source, value) {
      setIn(_this.segments, source, value);
      return source;
    };
    this.deleteIn = function(source) {
      deleteIn(_this.segments, source);
      return source;
    };
    this.ensureIn = function(source, defaults2) {
      var results = _this.getIn(source);
      if (results === void 0) {
        _this.setIn(source, defaults2);
        return _this.getIn(source);
      }
      return results;
    };
    var _a = parse(input, base), tree = _a.tree, segments = _a.segments, entire = _a.entire, isRegExp3 = _a.isRegExp, isMatchPattern = _a.isMatchPattern, isWildMatchPattern = _a.isWildMatchPattern, haveRelativePattern = _a.haveRelativePattern, haveExcludePattern = _a.haveExcludePattern;
    this.entire = entire;
    this.segments = segments;
    this.isMatchPattern = isMatchPattern;
    this.isWildMatchPattern = isWildMatchPattern;
    this.haveRelativePattern = haveRelativePattern;
    this.isRegExp = isRegExp3;
    this.haveExcludePattern = haveExcludePattern;
    this.tree = tree;
    this.matchCache = /* @__PURE__ */ new Map();
    this.includesCache = /* @__PURE__ */ new Map();
  }
  Path2.prototype.toString = function() {
    var _a;
    return (_a = this.entire) === null || _a === void 0 ? void 0 : _a.toString();
  };
  Path2.prototype.toArr = function() {
    var _a;
    return (_a = this.segments) === null || _a === void 0 ? void 0 : _a.slice();
  };
  Object.defineProperty(Path2.prototype, "length", {
    get: function() {
      return this.segments.length;
    },
    enumerable: false,
    configurable: true
  });
  Path2.match = function(pattern) {
    var path = Path2.parse(pattern);
    var matcher = function(target) {
      return path.match(target);
    };
    matcher[isMatcher] = true;
    matcher.path = path;
    return matcher;
  };
  Path2.isPathPattern = function(target) {
    if (isStr2(target) || isArr2(target) || isRegExp2(target) || isFn2(target) && target[isMatcher]) {
      return true;
    }
    return false;
  };
  Path2.transform = function(pattern, regexp, callback) {
    return Path2.parse(pattern).transform(regexp, callback);
  };
  Path2.parse = function(path, base) {
    if (path === void 0) {
      path = "";
    }
    if (path instanceof Path2) {
      var found = pathCache.get(path.entire);
      if (found) {
        return found;
      } else {
        pathCache.set(path.entire, path);
        return path;
      }
    } else if (path && path[isMatcher]) {
      return Path2.parse(path["path"]);
    } else {
      var key_ = base ? Path2.parse(base) : "";
      var key = "".concat(path, ":").concat(key_);
      var found = pathCache.get(key);
      if (found) {
        return found;
      } else {
        path = new Path2(path, base);
        pathCache.set(key, path);
        return path;
      }
    }
  };
  Path2.getIn = function(source, pattern) {
    var path = Path2.parse(pattern);
    return path.getIn(source);
  };
  Path2.setIn = function(source, pattern, value) {
    var path = Path2.parse(pattern);
    return path.setIn(source, value);
  };
  Path2.deleteIn = function(source, pattern) {
    var path = Path2.parse(pattern);
    return path.deleteIn(source);
  };
  Path2.existIn = function(source, pattern, start) {
    var path = Path2.parse(pattern);
    return path.existIn(source, start);
  };
  Path2.ensureIn = function(source, pattern, defaultValue) {
    var path = Path2.parse(pattern);
    return path.ensureIn(source, defaultValue);
  };
  return Path2;
}();

// node_modules/@formily/shared/esm/path.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/@formily/shared/esm/deprecate.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var caches = {};
function deprecate(method, message, help) {
  if (isFn(method)) {
    return function(p1, p2, p3, p4, p5) {
      deprecate(message, help);
      return method.apply(this, arguments);
    };
  }
  if (isStr(method) && !caches[method]) {
    caches[method] = true;
    console.warn(new Error("".concat(method, " has been deprecated. Do not continue to use this api.").concat(message || "")));
  }
}

// node_modules/@formily/shared/esm/subscribable.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var Subscribable = function() {
  function Subscribable2() {
    var _this = this;
    this.subscribers = {
      index: 0
    };
    this.subscribe = function(callback) {
      if (isFn(callback)) {
        var index = _this.subscribers.index + 1;
        _this.subscribers[index] = callback;
        _this.subscribers.index++;
        return index;
      }
    };
    this.unsubscribe = function(index) {
      if (_this.subscribers[index]) {
        delete _this.subscribers[index];
      } else if (!index) {
        _this.subscribers = {
          index: 0
        };
      }
    };
    this.notify = function(payload, silent) {
      if (_this.subscription) {
        if (_this.subscription && isFn(_this.subscription.notify)) {
          if (_this.subscription.notify.call(_this, payload) === false) {
            return;
          }
        }
      }
      if (silent)
        return;
      var filter = function(payload2) {
        if (_this.subscription && isFn(_this.subscription.filter)) {
          return _this.subscription.filter.call(_this, payload2);
        }
        return payload2;
      };
      each(_this.subscribers, function(callback) {
        if (isFn(callback))
          callback(filter(payload));
      });
    };
  }
  return Subscribable2;
}();

// node_modules/@formily/shared/esm/middleware.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var applyMiddleware = function(payload, fns) {
  if (fns === void 0) {
    fns = [];
  }
  var compose = function(payload2, fns2) {
    var prevPayload = payload2;
    return Promise.resolve(fns2[0](payload2, function(payload3) {
      return compose(payload3 !== null && payload3 !== void 0 ? payload3 : prevPayload, fns2.slice(1));
    }));
  };
  return new Promise(function(resolve, reject) {
    compose(payload, fns.concat(function(payload2) {
      resolve(payload2);
    })).catch(reject);
  });
};

// node_modules/@formily/shared/esm/merge.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
function defaultIsMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
}
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  if ("$$typeof" in value && "_owner" in value) {
    return true;
  }
  if (value["_isAMomentObject"]) {
    return true;
  }
  if (value["_isJSONSchemaObject"]) {
    return true;
  }
  if (isFn(value["toJS"])) {
    return true;
  }
  if (isFn(value["toJSON"])) {
    return true;
  }
  return !isPlainObj(value);
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  if (options.clone !== false && options.isMergeableObject(value)) {
    return deepmerge(emptyTarget(value), value, options);
  }
  return value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target) {
  if (!isValid(target))
    return [];
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = options.assign ? target || {} : {};
  if (!options.isMergeableObject(target))
    return target;
  if (!options.assign) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (isEmpty(target[key])) {
      destination[key] = source[key];
    } else if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || defaultIsMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
var merge = deepmerge;

// node_modules/@formily/shared/esm/defaults.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var isUnNormalObject = function(value) {
  if ((value === null || value === void 0 ? void 0 : value._owner) && (value === null || value === void 0 ? void 0 : value.$$typeof)) {
    return true;
  }
  if ((value === null || value === void 0 ? void 0 : value._isAMomentObject) || (value === null || value === void 0 ? void 0 : value._isJSONSchemaObject)) {
    return true;
  }
  if ((value === null || value === void 0 ? void 0 : value.toJS) || (value === null || value === void 0 ? void 0 : value.toJSON)) {
    return true;
  }
};
var isEnumerableObject = function(val) {
  if (isUnNormalObject(val)) {
    return false;
  }
  return typeof val === "object";
};
var defaults = function(defaults_, targets) {
  if (getType(defaults_) !== getType(targets) || !isEnumerableObject(defaults_) || !isEnumerableObject(targets)) {
    return !isEmpty(targets) ? targets : defaults_;
  } else {
    var results_1 = isArr(defaults_) ? [] : isPlainObj(defaults_) ? {} : defaults_;
    each(targets, function(value, key) {
      results_1[key] = defaults(defaults_[key], value);
    });
    each(defaults_, function(value, key) {
      if (!isValid(results_1[key])) {
        results_1[key] = value;
      }
    });
    return results_1;
  }
};

// node_modules/@formily/shared/esm/uid.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var IDX = 36;
var HEX = "";
while (IDX--)
  HEX += IDX.toString(36);
function uid(len) {
  var str = "", num = len || 11;
  while (num--)
    str += HEX[Math.random() * 36 | 0];
  return str;
}

// node_modules/@formily/shared/esm/index.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

export {
  getType,
  isFn,
  isArr,
  isPlainObj,
  isStr,
  isBool,
  isNum,
  isMap,
  isSet,
  isWeakMap,
  isWeakSet,
  isNumberLike,
  isObj,
  isRegExp,
  isReactElement,
  isHTMLElement,
  toArr,
  each,
  map,
  reduce,
  every,
  some,
  findIndex,
  find,
  includes,
  globalThisPolyfill,
  instOf,
  isEqual,
  shallowClone,
  clone,
  isUndef,
  isValid,
  isEmpty,
  lowerCase,
  pascalCase,
  camelCase,
  upperCase,
  paramCase,
  stringLength,
  Path,
  deprecate,
  Subscribable,
  applyMiddleware,
  merge,
  defaults,
  uid
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=chunk-7M3ONT6T.js.map
