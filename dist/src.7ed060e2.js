// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/App.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cargo = require("../rustess/Cargo.toml");

var _default = {
  'css': null,
  'exports': {
    add: function add() {
      this.update(_Cargo.add.apply(void 0, [this.state].concat(Array.prototype.slice.call(arguments))));
    },
    increment: function increment() {
      this.update(_Cargo.increment.apply(void 0, [this.state].concat(Array.prototype.slice.call(arguments))));
    },
    decrement: function decrement() {
      this.update(_Cargo.decrement.apply(void 0, [this.state].concat(Array.prototype.slice.call(arguments))));
    },
    onMounted: function onMounted() {
      this.update((0, _Cargo.state)());
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<p expr16="expr16"> </p><button expr17="expr17">Add 2</button><button expr18="expr18">Add +</button><button expr19="expr19">Subtract -</button>', [{
      'redundantAttribute': 'expr16',
      'selector': '[expr16]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function evaluate(scope) {
          return scope.state.counter;
        }
      }]
    }, {
      'redundantAttribute': 'expr17',
      'selector': '[expr17]',
      'expressions': [{
        'type': expressionTypes.EVENT,
        'name': 'onclick',
        'evaluate': function evaluate(scope) {
          return function () {
            return scope.add(2);
          };
        }
      }]
    }, {
      'redundantAttribute': 'expr18',
      'selector': '[expr18]',
      'expressions': [{
        'type': expressionTypes.EVENT,
        'name': 'onclick',
        'evaluate': function evaluate(scope) {
          return scope.increment;
        }
      }]
    }, {
      'redundantAttribute': 'expr19',
      'selector': '[expr19]',
      'expressions': [{
        'type': expressionTypes.EVENT,
        'name': 'onclick',
        'evaluate': function evaluate(scope) {
          return scope.decrement;
        }
      }]
    }]);
  },
  'name': 'app'
};
exports.default = _default;
},{"../rustess/Cargo.toml":"../rustess/Cargo.toml"}],"../node_modules/riot/riot.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.component = component;
exports.install = install;
exports.mount = mount;
exports.pure = pure;
exports.register = register;
exports.uninstall = uninstall;
exports.unmount = unmount;
exports.unregister = unregister;
exports.version = exports.__ = void 0;

var _expressions, _bindings, _Object$freeze, _Object$freeze2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Riot v4.13.4, @license MIT */

/**
 * Convert a string from camel case to dash-case
 * @param   {string} string - probably a component tag name
 * @returns {string} component name normalized
 */
function camelToDashCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
/**
 * Convert a string containing dashes to camel case
 * @param   {string} string - input string
 * @returns {string} my-string -> myString
 */


function dashToCamelCase(string) {
  return string.replace(/-(\w)/g, function (_, c) {
    return c.toUpperCase();
  });
}
/**
 * Get all the element attributes as object
 * @param   {HTMLElement} element - DOM node we want to parse
 * @returns {Object} all the attributes found as a key value pairs
 */


function DOMattributesToObject(element) {
  return Array.from(element.attributes).reduce(function (acc, attribute) {
    acc[dashToCamelCase(attribute.name)] = attribute.value;
    return acc;
  }, {});
}
/**
 * Move all the child nodes from a source tag to another
 * @param   {HTMLElement} source - source node
 * @param   {HTMLElement} target - target node
 * @returns {undefined} it's a void method ¯\_(ツ)_/¯
 */
// Ignore this helper because it's needed only for svg tags


function moveChildren(source, target) {
  if (source.firstChild) {
    target.appendChild(source.firstChild);
    moveChildren(source, target);
  }
}
/**
 * Remove the child nodes from any DOM node
 * @param   {HTMLElement} node - target node
 * @returns {undefined}
 */


function cleanNode(node) {
  clearChildren(node.childNodes);
}
/**
 * Clear multiple children in a node
 * @param   {HTMLElement[]} children - direct children nodes
 * @returns {undefined}
 */


function clearChildren(children) {
  Array.from(children).forEach(removeNode);
}
/**
 * Remove a node from the DOM
 * @param   {HTMLElement} node - target node
 * @returns {undefined}
 */


function removeNode(node) {
  var parentNode = node.parentNode;
  if (node.remove) node.remove();
  /* istanbul ignore else */
  else if (parentNode) parentNode.removeChild(node);
}

var EACH = 0;
var IF = 1;
var SIMPLE = 2;
var TAG = 3;
var SLOT = 4;
var bindingTypes = {
  EACH: EACH,
  IF: IF,
  SIMPLE: SIMPLE,
  TAG: TAG,
  SLOT: SLOT
};
var ATTRIBUTE = 0;
var EVENT = 1;
var TEXT = 2;
var VALUE = 3;
var expressionTypes = {
  ATTRIBUTE: ATTRIBUTE,
  EVENT: EVENT,
  TEXT: TEXT,
  VALUE: VALUE
};
/**
 * Create the template meta object in case of <template> fragments
 * @param   {TemplateChunk} componentTemplate - template chunk object
 * @returns {Object} the meta property that will be passed to the mount function of the TemplateChunk
 */

function createTemplateMeta(componentTemplate) {
  var fragment = componentTemplate.dom.cloneNode(true);
  return {
    avoidDOMInjection: true,
    fragment: fragment,
    children: Array.from(fragment.childNodes)
  };
}

var _ref7 = [],
    indexOf = _ref7.indexOf,
    slice = _ref7.slice;

var append = function append(get, parent, children, start, end, before) {
  var isSelect = ('selectedIndex' in parent);
  var noSelection = isSelect;

  while (start < end) {
    var child = get(children[start], 1);
    parent.insertBefore(child, before);

    if (isSelect && noSelection && child.selected) {
      noSelection = !noSelection;
      var selectedIndex = parent.selectedIndex;
      parent.selectedIndex = selectedIndex < 0 ? start : indexOf.call(parent.querySelectorAll('option'), child);
    }

    start++;
  }
};

var eqeq = function eqeq(a, b) {
  return a == b;
};

var identity = function identity(O) {
  return O;
};

var indexOf$1 = function indexOf$1(moreNodes, moreStart, moreEnd, lessNodes, lessStart, lessEnd, compare) {
  var length = lessEnd - lessStart;
  /* istanbul ignore if */

  if (length < 1) return -1;

  while (moreEnd - moreStart >= length) {
    var m = moreStart;
    var l = lessStart;

    while (m < moreEnd && l < lessEnd && compare(moreNodes[m], lessNodes[l])) {
      m++;
      l++;
    }

    if (l === lessEnd) return moreStart;
    moreStart = m + 1;
  }

  return -1;
};

var isReversed = function isReversed(futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare) {
  while (currentStart < currentEnd && compare(currentNodes[currentStart], futureNodes[futureEnd - 1])) {
    currentStart++;
    futureEnd--;
  }

  return futureEnd === 0;
};

var next = function next(get, list, i, length, before) {
  return i < length ? get(list[i], 0) : 0 < i ? get(list[i - 1], -0).nextSibling : before;
};

var remove = function remove(get, children, start, end) {
  while (start < end) {
    drop(get(children[start++], -1));
  }
}; // - - - - - - - - - - - - - - - - - - -
// diff related constants and utilities
// - - - - - - - - - - - - - - - - - - -


var DELETION = -1;
var INSERTION = 1;
var SKIP = 0;
var SKIP_OND = 50;

var HS = function HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges) {
  var k = 0;
  /* istanbul ignore next */

  var minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
  var link = Array(minLen++);
  var tresh = Array(minLen);
  tresh[0] = -1;

  for (var i = 1; i < minLen; i++) {
    tresh[i] = currentEnd;
  }

  var nodes = currentNodes.slice(currentStart, currentEnd);

  for (var _i = futureStart; _i < futureEnd; _i++) {
    var index = nodes.indexOf(futureNodes[_i]);

    if (-1 < index) {
      var idxInOld = index + currentStart;
      k = findK(tresh, minLen, idxInOld);
      /* istanbul ignore else */

      if (-1 < k) {
        tresh[k] = idxInOld;
        link[k] = {
          newi: _i,
          oldi: idxInOld,
          prev: link[k - 1]
        };
      }
    }
  }

  k = --minLen;
  --currentEnd;

  while (tresh[k] > currentEnd) {
    --k;
  }

  minLen = currentChanges + futureChanges - k;
  var diff = Array(minLen);
  var ptr = link[k];
  --futureEnd;

  while (ptr) {
    var _ptr = ptr,
        newi = _ptr.newi,
        oldi = _ptr.oldi;

    while (futureEnd > newi) {
      diff[--minLen] = INSERTION;
      --futureEnd;
    }

    while (currentEnd > oldi) {
      diff[--minLen] = DELETION;
      --currentEnd;
    }

    diff[--minLen] = SKIP;
    --futureEnd;
    --currentEnd;
    ptr = ptr.prev;
  }

  while (futureEnd >= futureStart) {
    diff[--minLen] = INSERTION;
    --futureEnd;
  }

  while (currentEnd >= currentStart) {
    diff[--minLen] = DELETION;
    --currentEnd;
  }

  return diff;
}; // this is pretty much the same petit-dom code without the delete map part
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L556-L561


var OND = function OND(futureNodes, futureStart, rows, currentNodes, currentStart, cols, compare) {
  var length = rows + cols;
  var v = [];
  var d, k, r, c, pv, cv, pd;

  outer: for (d = 0; d <= length; d++) {
    /* istanbul ignore if */
    if (d > SKIP_OND) return null;
    pd = d - 1;
    /* istanbul ignore next */

    pv = d ? v[d - 1] : [0, 0];
    cv = v[d] = [];

    for (k = -d; k <= d; k += 2) {
      if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
        c = pv[pd + k + 1];
      } else {
        c = pv[pd + k - 1] + 1;
      }

      r = c - k;

      while (c < cols && r < rows && compare(currentNodes[currentStart + c], futureNodes[futureStart + r])) {
        c++;
        r++;
      }

      if (c === cols && r === rows) {
        break outer;
      }

      cv[d + k] = c;
    }
  }

  var diff = Array(d / 2 + length / 2);
  var diffIdx = diff.length - 1;

  for (d = v.length - 1; d >= 0; d--) {
    while (c > 0 && r > 0 && compare(currentNodes[currentStart + c - 1], futureNodes[futureStart + r - 1])) {
      // diagonal edge = equality
      diff[diffIdx--] = SKIP;
      c--;
      r--;
    }

    if (!d) break;
    pd = d - 1;
    /* istanbul ignore next */

    pv = d ? v[d - 1] : [0, 0];
    k = c - r;

    if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
      // vertical edge = insertion
      r--;
      diff[diffIdx--] = INSERTION;
    } else {
      // horizontal edge = deletion
      c--;
      diff[diffIdx--] = DELETION;
    }
  }

  return diff;
};

var applyDiff = function applyDiff(diff, get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before) {
  var live = [];
  var length = diff.length;
  var currentIndex = currentStart;
  var i = 0;

  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        futureStart++;
        currentIndex++;
        break;

      case INSERTION:
        // TODO: bulk appends for sequential nodes
        live.push(futureNodes[futureStart]);
        append(get, parentNode, futureNodes, futureStart++, futureStart, currentIndex < currentLength ? get(currentNodes[currentIndex], 0) : before);
        break;

      case DELETION:
        currentIndex++;
        break;
    }
  }

  i = 0;

  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        currentStart++;
        break;

      case DELETION:
        // TODO: bulk removes for sequential nodes
        if (-1 < live.indexOf(currentNodes[currentStart])) currentStart++;else remove(get, currentNodes, currentStart++, currentStart);
        break;
    }
  }
};

var findK = function findK(ktr, length, j) {
  var lo = 1;
  var hi = length;

  while (lo < hi) {
    var mid = (lo + hi) / 2 >>> 0;
    if (j < ktr[mid]) hi = mid;else lo = mid + 1;
  }

  return lo;
};

var smartDiff = function smartDiff(get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before) {
  applyDiff(OND(futureNodes, futureStart, futureChanges, currentNodes, currentStart, currentChanges, compare) || HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges), get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before);
};

var drop = function drop(node) {
  return (node.remove || dropChild).call(node);
};

function dropChild() {
  var parentNode = this.parentNode;
  /* istanbul ignore else */

  if (parentNode) parentNode.removeChild(this);
}
/*! (c) 2018 Andrea Giammarchi (ISC) */


var domdiff = function domdiff(parentNode, // where changes happen
currentNodes, // Array of current items/nodes
futureNodes, // Array of future items/nodes
options // optional object with one of the following properties
//  before: domNode
//  compare(generic, generic) => true if same generic
//  node(generic) => Node
) {
  if (!options) options = {};
  var compare = options.compare || eqeq;
  var get = options.node || identity;
  var before = options.before == null ? null : get(options.before, 0);
  var currentLength = currentNodes.length;
  var currentEnd = currentLength;
  var currentStart = 0;
  var futureEnd = futureNodes.length;
  var futureStart = 0; // common prefix

  while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentStart], futureNodes[futureStart])) {
    currentStart++;
    futureStart++;
  } // common suffix


  while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentEnd - 1], futureNodes[futureEnd - 1])) {
    currentEnd--;
    futureEnd--;
  }

  var currentSame = currentStart === currentEnd;
  var futureSame = futureStart === futureEnd; // same list

  if (currentSame && futureSame) return futureNodes; // only stuff to add

  if (currentSame && futureStart < futureEnd) {
    append(get, parentNode, futureNodes, futureStart, futureEnd, next(get, currentNodes, currentStart, currentLength, before));
    return futureNodes;
  } // only stuff to remove


  if (futureSame && currentStart < currentEnd) {
    remove(get, currentNodes, currentStart, currentEnd);
    return futureNodes;
  }

  var currentChanges = currentEnd - currentStart;
  var futureChanges = futureEnd - futureStart;
  var i = -1; // 2 simple indels: the shortest sequence is a subsequence of the longest

  if (currentChanges < futureChanges) {
    i = indexOf$1(futureNodes, futureStart, futureEnd, currentNodes, currentStart, currentEnd, compare); // inner diff

    if (-1 < i) {
      append(get, parentNode, futureNodes, futureStart, i, get(currentNodes[currentStart], 0));
      append(get, parentNode, futureNodes, i + currentChanges, futureEnd, next(get, currentNodes, currentEnd, currentLength, before));
      return futureNodes;
    }
  }
  /* istanbul ignore else */
  else if (futureChanges < currentChanges) {
      i = indexOf$1(currentNodes, currentStart, currentEnd, futureNodes, futureStart, futureEnd, compare); // outer diff

      if (-1 < i) {
        remove(get, currentNodes, currentStart, i);
        remove(get, currentNodes, i + futureChanges, currentEnd);
        return futureNodes;
      }
    } // common case with one replacement for many nodes
  // or many nodes replaced for a single one

  /* istanbul ignore else */


  if (currentChanges < 2 || futureChanges < 2) {
    append(get, parentNode, futureNodes, futureStart, futureEnd, get(currentNodes[currentStart], 0));
    remove(get, currentNodes, currentStart, currentEnd);
    return futureNodes;
  } // the half match diff part has been skipped in petit-dom
  // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
  // accordingly, I think it's safe to skip in here too
  // if one day it'll come out like the speediest thing ever to do
  // then I might add it in here too
  // Extra: before going too fancy, what about reversed lists ?
  //        This should bail out pretty quickly if that's not the case.


  if (currentChanges === futureChanges && isReversed(futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare)) {
    append(get, parentNode, futureNodes, futureStart, futureEnd, next(get, currentNodes, currentEnd, currentLength, before));
    return futureNodes;
  } // last resort through a smart diff


  smartDiff(get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before);
  return futureNodes;
};
/**
 * Quick type checking
 * @param   {*} element - anything
 * @param   {string} type - type definition
 * @returns {boolean} true if the type corresponds
 */


function checkType(element, type) {
  return _typeof(element) === type;
}
/**
 * Check if an element is part of an svg
 * @param   {HTMLElement}  el - element to check
 * @returns {boolean} true if we are in an svg context
 */


function isSvg(el) {
  var owner = el.ownerSVGElement;
  return !!owner || owner === null;
}
/**
 * Check if an element is a template tag
 * @param   {HTMLElement}  el - element to check
 * @returns {boolean} true if it's a <template>
 */


function isTemplate(el) {
  return !isNil(el.content);
}
/**
 * Check that will be passed if its argument is a function
 * @param   {*} value - value to check
 * @returns {boolean} - true if the value is a function
 */


function isFunction(value) {
  return checkType(value, 'function');
}
/**
 * Check if a value is a Boolean
 * @param   {*}  value - anything
 * @returns {boolean} true only for the value is a boolean
 */


function isBoolean(value) {
  return checkType(value, 'boolean');
}
/**
 * Check if a value is an Object
 * @param   {*}  value - anything
 * @returns {boolean} true only for the value is an object
 */


function isObject(value) {
  return !isNil(value) && checkType(value, 'object');
}
/**
 * Check if a value is null or undefined
 * @param   {*}  value - anything
 * @returns {boolean} true only for the 'undefined' and 'null' types
 */


function isNil(value) {
  return value === null || value === undefined;
}

var UNMOUNT_SCOPE = Symbol('unmount');
var EachBinding = Object.seal({
  // dynamic binding properties
  // childrenMap: null,
  // node: null,
  // root: null,
  // condition: null,
  // evaluate: null,
  // template: null,
  // isTemplateTag: false,
  nodes: [],
  // getKey: null,
  // indexName: null,
  // itemName: null,
  // afterPlaceholder: null,
  // placeholder: null,
  // API methods
  mount: function mount(scope, parentScope) {
    return this.update(scope, parentScope);
  },
  update: function update(scope, parentScope) {
    var placeholder = this.placeholder,
        nodes = this.nodes,
        childrenMap = this.childrenMap;
    var collection = scope === UNMOUNT_SCOPE ? null : this.evaluate(scope);
    var items = collection ? Array.from(collection) : [];
    var parent = placeholder.parentNode; // prepare the diffing

    var _createPatch = createPatch(items, scope, parentScope, this),
        newChildrenMap = _createPatch.newChildrenMap,
        batches = _createPatch.batches,
        futureNodes = _createPatch.futureNodes; // patch the DOM only if there are new nodes


    domdiff(parent, nodes, futureNodes, {
      before: placeholder,
      node: patch(Array.from(childrenMap.values()), parentScope)
    }); // trigger the mounts and the updates

    batches.forEach(function (fn) {
      return fn();
    }); // update the children map

    this.childrenMap = newChildrenMap;
    this.nodes = futureNodes;
    return this;
  },
  unmount: function unmount(scope, parentScope) {
    this.update(UNMOUNT_SCOPE, parentScope);
    return this;
  }
});
/**
 * Patch the DOM while diffing
 * @param   {TemplateChunk[]} redundant - redundant tepmplate chunks
 * @param   {*} parentScope - scope of the parent template
 * @returns {Function} patch function used by domdiff
 */

function patch(redundant, parentScope) {
  return function (item, info) {
    if (info < 0) {
      var element = redundant.pop();

      if (element) {
        var template = element.template,
            context = element.context; // notice that we pass null as last argument because
        // the root node and its children will be removed by domdiff

        template.unmount(context, parentScope, null);
      }
    }

    return item;
  };
}
/**
 * Check whether a template must be filtered from a loop
 * @param   {Function} condition - filter function
 * @param   {Object} context - argument passed to the filter function
 * @returns {boolean} true if this item should be skipped
 */


function mustFilterItem(condition, context) {
  return condition ? Boolean(condition(context)) === false : false;
}
/**
 * Extend the scope of the looped template
 * @param   {Object} scope - current template scope
 * @param   {string} options.itemName - key to identify the looped item in the new context
 * @param   {string} options.indexName - key to identify the index of the looped item
 * @param   {number} options.index - current index
 * @param   {*} options.item - collection item looped
 * @returns {Object} enhanced scope object
 */


function extendScope(scope, _ref) {
  var itemName = _ref.itemName,
      indexName = _ref.indexName,
      index = _ref.index,
      item = _ref.item;
  scope[itemName] = item;
  if (indexName) scope[indexName] = index;
  return scope;
}
/**
 * Loop the current template items
 * @param   {Array} items - expression collection value
 * @param   {*} scope - template scope
 * @param   {*} parentScope - scope of the parent template
 * @param   {EeachBinding} binding - each binding object instance
 * @returns {Object} data
 * @returns {Map} data.newChildrenMap - a Map containing the new children template structure
 * @returns {Array} data.batches - array containing the template lifecycle functions to trigger
 * @returns {Array} data.futureNodes - array containing the nodes we need to diff
 */


function createPatch(items, scope, parentScope, binding) {
  var condition = binding.condition,
      template = binding.template,
      childrenMap = binding.childrenMap,
      itemName = binding.itemName,
      getKey = binding.getKey,
      indexName = binding.indexName,
      root = binding.root,
      isTemplateTag = binding.isTemplateTag;
  var newChildrenMap = new Map();
  var batches = [];
  var futureNodes = [];
  items.forEach(function (item, index) {
    var context = extendScope(Object.create(scope), {
      itemName: itemName,
      indexName: indexName,
      index: index,
      item: item
    });
    var key = getKey ? getKey(context) : index;
    var oldItem = childrenMap.get(key);

    if (mustFilterItem(condition, context)) {
      return;
    }

    var componentTemplate = oldItem ? oldItem.template : template.clone();
    var el = oldItem ? componentTemplate.el : root.cloneNode();
    var mustMount = !oldItem;
    var meta = isTemplateTag && mustMount ? createTemplateMeta(componentTemplate) : {};

    if (mustMount) {
      batches.push(function () {
        return componentTemplate.mount(el, context, parentScope, meta);
      });
    } else {
      batches.push(function () {
        return componentTemplate.update(context, parentScope);
      });
    } // create the collection of nodes to update or to add
    // in case of template tags we need to add all its children nodes


    if (isTemplateTag) {
      var children = meta.children || componentTemplate.children;
      futureNodes.push.apply(futureNodes, _toConsumableArray(children));
    } else {
      futureNodes.push(el);
    } // delete the old item from the children map


    childrenMap.delete(key); // update the children map

    newChildrenMap.set(key, {
      template: componentTemplate,
      context: context,
      index: index
    });
  });
  return {
    newChildrenMap: newChildrenMap,
    batches: batches,
    futureNodes: futureNodes
  };
}

function create(node, _ref2) {
  var evaluate = _ref2.evaluate,
      condition = _ref2.condition,
      itemName = _ref2.itemName,
      indexName = _ref2.indexName,
      getKey = _ref2.getKey,
      template = _ref2.template;
  var placeholder = document.createTextNode('');
  var parent = node.parentNode;
  var root = node.cloneNode();
  parent.insertBefore(placeholder, node);
  removeNode(node);
  return Object.assign({}, EachBinding, {
    childrenMap: new Map(),
    node: node,
    root: root,
    condition: condition,
    evaluate: evaluate,
    isTemplateTag: isTemplate(root),
    template: template.createDOM(node),
    getKey: getKey,
    indexName: indexName,
    itemName: itemName,
    placeholder: placeholder
  });
}
/**
 * Binding responsible for the `if` directive
 */


var IfBinding = Object.seal({
  // dynamic binding properties
  // node: null,
  // evaluate: null,
  // isTemplateTag: false,
  // placeholder: null,
  // template: null,
  // API methods
  mount: function mount(scope, parentScope) {
    return this.update(scope, parentScope);
  },
  update: function update(scope, parentScope) {
    var _this = this;

    var value = !!this.evaluate(scope);
    var mustMount = !this.value && value;
    var mustUnmount = this.value && !value;

    var mount = function mount() {
      var pristine = _this.node.cloneNode();

      _this.placeholder.parentNode.insertBefore(pristine, _this.placeholder);

      _this.template = _this.template.clone();

      _this.template.mount(pristine, scope, parentScope);
    };

    switch (true) {
      case mustMount:
        mount();
        break;

      case mustUnmount:
        this.unmount(scope);
        break;

      default:
        if (value) this.template.update(scope, parentScope);
    }

    this.value = value;
    return this;
  },
  unmount: function unmount(scope, parentScope) {
    this.template.unmount(scope, parentScope, true);
    return this;
  }
});

function create$1(node, _ref) {
  var evaluate = _ref.evaluate,
      template = _ref.template;
  var parent = node.parentNode;
  var placeholder = document.createTextNode('');
  parent.insertBefore(placeholder, node);
  removeNode(node);
  return Object.assign({}, IfBinding, {
    node: node,
    evaluate: evaluate,
    placeholder: placeholder,
    template: template.createDOM(node)
  });
}
/**
 * Throw an error with a descriptive message
 * @param   { string } message - error message
 * @returns { undefined } hoppla.. at this point the program should stop working
 */


function panic(message) {
  throw new Error(message);
}
/**
 * Returns the memoized (cached) function.
 * // borrowed from https://www.30secondsofcode.org/js/s/memoize
 * @param {Function} fn - function to memoize
 * @returns {Function} memoize function
 */


function memoize(fn) {
  var _this2 = this;

  var cache = new Map();

  var cached = function cached(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(_this2, val)) && cache.get(val);
  };

  cached.cache = cache;
  return cached;
}
/**
 * Evaluate a list of attribute expressions
 * @param   {Array} attributes - attribute expressions generated by the riot compiler
 * @returns {Object} key value pairs with the result of the computation
 */


function evaluateAttributeExpressions(attributes) {
  return attributes.reduce(function (acc, attribute) {
    var value = attribute.value,
        type = attribute.type;

    switch (true) {
      // spread attribute
      case !attribute.name && type === ATTRIBUTE:
        return Object.assign({}, acc, value);
      // value attribute

      case type === VALUE:
        acc.value = attribute.value;
        break;
      // normal attributes

      default:
        acc[dashToCamelCase(attribute.name)] = attribute.value;
    }

    return acc;
  }, {});
}

var REMOVE_ATTRIBUTE = 'removeAttribute';
var SET_ATTIBUTE = 'setAttribute';
var ElementProto = typeof Element === 'undefined' ? {} : Element.prototype;
var isNativeHtmlProperty = memoize(function (name) {
  return ElementProto.hasOwnProperty(name);
}); // eslint-disable-line

/**
 * Add all the attributes provided
 * @param   {HTMLElement} node - target node
 * @param   {Object} attributes - object containing the attributes names and values
 * @returns {undefined} sorry it's a void function :(
 */

function setAllAttributes(node, attributes) {
  Object.entries(attributes).forEach(function (_ref) {
    var _ref8 = _slicedToArray(_ref, 2),
        name = _ref8[0],
        value = _ref8[1];

    return attributeExpression(node, {
      name: name
    }, value);
  });
}
/**
 * Remove all the attributes provided
 * @param   {HTMLElement} node - target node
 * @param   {Object} newAttributes - object containing all the new attribute names
 * @param   {Object} oldAttributes - object containing all the old attribute names
 * @returns {undefined} sorry it's a void function :(
 */


function removeAllAttributes(node, newAttributes, oldAttributes) {
  var newKeys = newAttributes ? Object.keys(newAttributes) : [];
  Object.keys(oldAttributes).filter(function (name) {
    return !newKeys.includes(name);
  }).forEach(function (attribute) {
    return node.removeAttribute(attribute);
  });
}
/**
 * This methods handles the DOM attributes updates
 * @param   {HTMLElement} node - target node
 * @param   {Object} expression - expression object
 * @param   {string} expression.name - attribute name
 * @param   {*} value - new expression value
 * @param   {*} oldValue - the old expression cached value
 * @returns {undefined}
 */


function attributeExpression(node, _ref2, value, oldValue) {
  var name = _ref2.name; // is it a spread operator? {...attributes}

  if (!name) {
    if (oldValue) {
      // remove all the old attributes
      removeAllAttributes(node, value, oldValue);
    } // is the value still truthy?


    if (value) {
      setAllAttributes(node, value);
    }

    return;
  } // handle boolean attributes


  if (!isNativeHtmlProperty(name) && (isBoolean(value) || isObject(value) || isFunction(value))) {
    node[name] = value;
  }

  node[getMethod(value)](name, normalizeValue(name, value));
}
/**
 * Get the attribute modifier method
 * @param   {*} value - if truthy we return `setAttribute` othewise `removeAttribute`
 * @returns {string} the node attribute modifier method name
 */


function getMethod(value) {
  return isNil(value) || value === false || value === '' || isObject(value) || isFunction(value) ? REMOVE_ATTRIBUTE : SET_ATTIBUTE;
}
/**
 * Get the value as string
 * @param   {string} name - attribute name
 * @param   {*} value - user input value
 * @returns {string} input value as string
 */


function normalizeValue(name, value) {
  // be sure that expressions like selected={ true } will be always rendered as selected='selected'
  if (value === true) return name;
  return value;
}

var RE_EVENTS_PREFIX = /^on/;

var getCallbackAndOptions = function getCallbackAndOptions(value) {
  return Array.isArray(value) ? value : [value, false];
}; // see also https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38


var EventListener = {
  handleEvent: function handleEvent(event) {
    this[event.type](event);
  }
};
var ListenersWeakMap = new WeakMap();

var createListener = function createListener(node) {
  var listener = Object.create(EventListener);
  ListenersWeakMap.set(node, listener);
  return listener;
};
/**
 * Set a new event listener
 * @param   {HTMLElement} node - target node
 * @param   {Object} expression - expression object
 * @param   {string} expression.name - event name
 * @param   {*} value - new expression value
 * @returns {value} the callback just received
 */


function eventExpression(node, _ref, value) {
  var name = _ref.name;
  var normalizedEventName = name.replace(RE_EVENTS_PREFIX, '');
  var eventListener = ListenersWeakMap.get(node) || createListener(node);

  var _getCallbackAndOption = getCallbackAndOptions(value),
      _getCallbackAndOption2 = _slicedToArray(_getCallbackAndOption, 2),
      callback = _getCallbackAndOption2[0],
      options = _getCallbackAndOption2[1];

  var handler = eventListener[normalizedEventName];
  var mustRemoveEvent = handler && !callback;
  var mustAddEvent = callback && !handler;

  if (mustRemoveEvent) {
    node.removeEventListener(normalizedEventName, eventListener);
  }

  if (mustAddEvent) {
    node.addEventListener(normalizedEventName, eventListener, options);
  }

  eventListener[normalizedEventName] = callback;
}
/**
 * Normalize the user value in order to render a empty string in case of falsy values
 * @param   {*} value - user input value
 * @returns {string} hopefully a string
 */


function normalizeStringValue(value) {
  return isNil(value) ? '' : value;
}
/**
 * Get the the target text node to update or create one from of a comment node
 * @param   {HTMLElement} node - any html element containing childNodes
 * @param   {number} childNodeIndex - index of the text node in the childNodes list
 * @returns {HTMLTextNode} the text node to update
 */


var getTextNode = function getTextNode(node, childNodeIndex) {
  var target = node.childNodes[childNodeIndex];

  if (target.nodeType === Node.COMMENT_NODE) {
    var textNode = document.createTextNode('');
    node.replaceChild(textNode, target);
    return textNode;
  }

  return target;
};
/**
 * This methods handles a simple text expression update
 * @param   {HTMLElement} node - target node
 * @param   {Object} data - expression object
 * @param   {*} value - new expression value
 * @returns {undefined}
 */


function textExpression(node, data, value) {
  node.data = normalizeStringValue(value);
}
/**
 * This methods handles the input fileds value updates
 * @param   {HTMLElement} node - target node
 * @param   {Object} expression - expression object
 * @param   {*} value - new expression value
 * @returns {undefined}
 */


function valueExpression(node, expression, value) {
  node.value = normalizeStringValue(value);
}

var expressions = (_expressions = {}, _defineProperty(_expressions, ATTRIBUTE, attributeExpression), _defineProperty(_expressions, EVENT, eventExpression), _defineProperty(_expressions, TEXT, textExpression), _defineProperty(_expressions, VALUE, valueExpression), _expressions);
var Expression = Object.seal({
  // Static props
  // node: null,
  // value: null,
  // API methods

  /**
   * Mount the expression evaluating its initial value
   * @param   {*} scope - argument passed to the expression to evaluate its current values
   * @returns {Expression} self
   */
  mount: function mount(scope) {
    // hopefully a pure function
    this.value = this.evaluate(scope); // IO() DOM updates

    apply(this, this.value);
    return this;
  },

  /**
   * Update the expression if its value changed
   * @param   {*} scope - argument passed to the expression to evaluate its current values
   * @returns {Expression} self
   */
  update: function update(scope) {
    // pure function
    var value = this.evaluate(scope);

    if (this.value !== value) {
      // IO() DOM updates
      apply(this, value);
      this.value = value;
    }

    return this;
  },

  /**
   * Expression teardown method
   * @returns {Expression} self
   */
  unmount: function unmount() {
    // unmount only the event handling expressions
    if (this.type === EVENT) apply(this, null);
    return this;
  }
});
/**
 * IO() function to handle the DOM updates
 * @param {Expression} expression - expression object
 * @param {*} value - current expression value
 * @returns {undefined}
 */

function apply(expression, value) {
  return expressions[expression.type](expression.node, expression, value, expression.value);
}

function create$2(node, data) {
  return Object.assign({}, Expression, data, {
    node: data.type === TEXT ? getTextNode(node, data.childNodeIndex) : node
  });
}
/**
 * Create a flat object having as keys a list of methods that if dispatched will propagate
 * on the whole collection
 * @param   {Array} collection - collection to iterate
 * @param   {Array<string>} methods - methods to execute on each item of the collection
 * @param   {*} context - context returned by the new methods created
 * @returns {Object} a new object to simplify the the nested methods dispatching
 */


function flattenCollectionMethods(collection, methods, context) {
  return methods.reduce(function (acc, method) {
    return Object.assign({}, acc, _defineProperty({}, method, function (scope) {
      return collection.map(function (item) {
        return item[method](scope);
      }) && context;
    }));
  }, {});
}

function create$3(node, _ref) {
  var expressions = _ref.expressions;
  return Object.assign({}, flattenCollectionMethods(expressions.map(function (expression) {
    return create$2(node, expression);
  }), ['mount', 'update', 'unmount']));
} // Riot.js constants that can be used accross more modules


var COMPONENTS_IMPLEMENTATION_MAP = new Map(),
    DOM_COMPONENT_INSTANCE_PROPERTY = Symbol('riot-component'),
    PLUGINS_SET = new Set(),
    IS_DIRECTIVE = 'is',
    VALUE_ATTRIBUTE = 'value',
    MOUNT_METHOD_KEY = 'mount',
    UPDATE_METHOD_KEY = 'update',
    UNMOUNT_METHOD_KEY = 'unmount',
    SHOULD_UPDATE_KEY = 'shouldUpdate',
    ON_BEFORE_MOUNT_KEY = 'onBeforeMount',
    ON_MOUNTED_KEY = 'onMounted',
    ON_BEFORE_UPDATE_KEY = 'onBeforeUpdate',
    ON_UPDATED_KEY = 'onUpdated',
    ON_BEFORE_UNMOUNT_KEY = 'onBeforeUnmount',
    ON_UNMOUNTED_KEY = 'onUnmounted',
    PROPS_KEY = 'props',
    STATE_KEY = 'state',
    SLOTS_KEY = 'slots',
    ROOT_KEY = 'root',
    IS_PURE_SYMBOL = Symbol.for('pure'),
    PARENT_KEY_SYMBOL = Symbol('parent'),
    ATTRIBUTES_KEY_SYMBOL = Symbol('attributes'),
    TEMPLATE_KEY_SYMBOL = Symbol('template');
var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  COMPONENTS_IMPLEMENTATION_MAP: COMPONENTS_IMPLEMENTATION_MAP,
  DOM_COMPONENT_INSTANCE_PROPERTY: DOM_COMPONENT_INSTANCE_PROPERTY,
  PLUGINS_SET: PLUGINS_SET,
  IS_DIRECTIVE: IS_DIRECTIVE,
  VALUE_ATTRIBUTE: VALUE_ATTRIBUTE,
  MOUNT_METHOD_KEY: MOUNT_METHOD_KEY,
  UPDATE_METHOD_KEY: UPDATE_METHOD_KEY,
  UNMOUNT_METHOD_KEY: UNMOUNT_METHOD_KEY,
  SHOULD_UPDATE_KEY: SHOULD_UPDATE_KEY,
  ON_BEFORE_MOUNT_KEY: ON_BEFORE_MOUNT_KEY,
  ON_MOUNTED_KEY: ON_MOUNTED_KEY,
  ON_BEFORE_UPDATE_KEY: ON_BEFORE_UPDATE_KEY,
  ON_UPDATED_KEY: ON_UPDATED_KEY,
  ON_BEFORE_UNMOUNT_KEY: ON_BEFORE_UNMOUNT_KEY,
  ON_UNMOUNTED_KEY: ON_UNMOUNTED_KEY,
  PROPS_KEY: PROPS_KEY,
  STATE_KEY: STATE_KEY,
  SLOTS_KEY: SLOTS_KEY,
  ROOT_KEY: ROOT_KEY,
  IS_PURE_SYMBOL: IS_PURE_SYMBOL,
  PARENT_KEY_SYMBOL: PARENT_KEY_SYMBOL,
  ATTRIBUTES_KEY_SYMBOL: ATTRIBUTES_KEY_SYMBOL,
  TEMPLATE_KEY_SYMBOL: TEMPLATE_KEY_SYMBOL
});

function extendParentScope(attributes, scope, parentScope) {
  if (!attributes || !attributes.length) return parentScope;
  var expressions = attributes.map(function (attr) {
    return Object.assign({}, attr, {
      value: attr.evaluate(scope)
    });
  });
  return Object.assign(Object.create(parentScope || null), evaluateAttributeExpressions(expressions));
} // this function is only meant to fix an edge case
// https://github.com/riot/riot/issues/2842


var getRealParent = function getRealParent(scope, parentScope) {
  return parentScope ? parentScope === scope ? scope[PARENT_KEY_SYMBOL] : parentScope : undefined;
};

var SlotBinding = Object.seal({
  // dynamic binding properties
  // node: null,
  // name: null,
  attributes: [],
  // template: null,
  getTemplateScope: function getTemplateScope(scope, parentScope) {
    return extendParentScope(this.attributes, scope, parentScope);
  },
  // API methods
  mount: function mount(scope, parentScope) {
    var _this3 = this;

    var templateData = scope.slots ? scope.slots.find(function (_ref) {
      var id = _ref.id;
      return id === _this3.name;
    }) : false;
    var parentNode = this.node.parentNode;
    var realParent = getRealParent(scope, parentScope);
    this.template = templateData && create$6(templateData.html, templateData.bindings).createDOM(parentNode);

    if (this.template) {
      this.template.mount(this.node, this.getTemplateScope(scope, realParent), realParent);
      this.template.children = moveSlotInnerContent(this.node);
    }

    removeNode(this.node);
    return this;
  },
  update: function update(scope, parentScope) {
    if (this.template) {
      var realParent = getRealParent(scope, parentScope);
      this.template.update(this.getTemplateScope(scope, realParent), realParent);
    }

    return this;
  },
  unmount: function unmount(scope, parentScope, mustRemoveRoot) {
    if (this.template) {
      this.template.unmount(this.getTemplateScope(scope, parentScope), null, mustRemoveRoot);
    }

    return this;
  }
});
/**
 * Move the inner content of the slots outside of them
 * @param   {HTMLNode} slot - slot node
 * @param   {HTMLElement} children - array to fill with the child nodes detected
 * @returns {HTMLElement[]} list of the node moved
 */

function moveSlotInnerContent(slot, children) {
  if (children === void 0) {
    children = [];
  }

  var child = slot.firstChild;

  if (child) {
    slot.parentNode.insertBefore(child, slot);
    return [child].concat(_toConsumableArray(moveSlotInnerContent(slot)));
  }

  return children;
}
/**
 * Create a single slot binding
 * @param   {HTMLElement} node - slot node
 * @param   {string} options.name - slot id
 * @returns {Object} Slot binding object
 */


function createSlot(node, _ref2) {
  var name = _ref2.name,
      attributes = _ref2.attributes;
  return Object.assign({}, SlotBinding, {
    attributes: attributes,
    node: node,
    name: name
  });
}
/**
 * Create a new tag object if it was registered before, otherwise fallback to the simple
 * template chunk
 * @param   {Function} component - component factory function
 * @param   {Array<Object>} slots - array containing the slots markup
 * @param   {Array} attributes - dynamic attributes that will be received by the tag element
 * @returns {TagImplementation|TemplateChunk} a tag implementation or a template chunk as fallback
 */


function getTag(component, slots, attributes) {
  if (slots === void 0) {
    slots = [];
  }

  if (attributes === void 0) {
    attributes = [];
  } // if this tag was registered before we will return its implementation


  if (component) {
    return component({
      slots: slots,
      attributes: attributes
    });
  } // otherwise we return a template chunk


  return create$6(slotsToMarkup(slots), [].concat(_toConsumableArray(slotBindings(slots)), [{
    // the attributes should be registered as binding
    // if we fallback to a normal template chunk
    expressions: attributes.map(function (attr) {
      return Object.assign({
        type: ATTRIBUTE
      }, attr);
    })
  }]));
}
/**
 * Merge all the slots bindings into a single array
 * @param   {Array<Object>} slots - slots collection
 * @returns {Array<Bindings>} flatten bindings array
 */


function slotBindings(slots) {
  return slots.reduce(function (acc, _ref) {
    var bindings = _ref.bindings;
    return acc.concat(bindings);
  }, []);
}
/**
 * Merge all the slots together in a single markup string
 * @param   {Array<Object>} slots - slots collection
 * @returns {string} markup of all the slots in a single string
 */


function slotsToMarkup(slots) {
  return slots.reduce(function (acc, slot) {
    return acc + slot.html;
  }, '');
}

var TagBinding = Object.seal({
  // dynamic binding properties
  // node: null,
  // evaluate: null,
  // name: null,
  // slots: null,
  // tag: null,
  // attributes: null,
  // getComponent: null,
  mount: function mount(scope) {
    return this.update(scope);
  },
  update: function update(scope, parentScope) {
    var name = this.evaluate(scope); // simple update

    if (name === this.name) {
      this.tag.update(scope);
    } else {
      // unmount the old tag if it exists
      this.unmount(scope, parentScope, true); // mount the new tag

      this.name = name;
      this.tag = getTag(this.getComponent(name), this.slots, this.attributes);
      this.tag.mount(this.node, scope);
    }

    return this;
  },
  unmount: function unmount(scope, parentScope, keepRootTag) {
    if (this.tag) {
      // keep the root tag
      this.tag.unmount(keepRootTag);
    }

    return this;
  }
});

function create$4(node, _ref2) {
  var evaluate = _ref2.evaluate,
      getComponent = _ref2.getComponent,
      slots = _ref2.slots,
      attributes = _ref2.attributes;
  return Object.assign({}, TagBinding, {
    node: node,
    evaluate: evaluate,
    slots: slots,
    attributes: attributes,
    getComponent: getComponent
  });
}

var bindings = (_bindings = {}, _defineProperty(_bindings, IF, create$1), _defineProperty(_bindings, SIMPLE, create$3), _defineProperty(_bindings, EACH, create), _defineProperty(_bindings, TAG, create$4), _defineProperty(_bindings, SLOT, createSlot), _bindings);
/**
 * Text expressions in a template tag will get childNodeIndex value normalized
 * depending on the position of the <template> tag offset
 * @param   {Expression[]} expressions - riot expressions array
 * @param   {number} textExpressionsOffset - offset of the <template> tag
 * @returns {Expression[]} expressions containing the text expressions normalized
 */

function fixTextExpressionsOffset(expressions, textExpressionsOffset) {
  return expressions.map(function (e) {
    return e.type === TEXT ? Object.assign({}, e, {
      childNodeIndex: e.childNodeIndex + textExpressionsOffset
    }) : e;
  });
}
/**
 * Bind a new expression object to a DOM node
 * @param   {HTMLElement} root - DOM node where to bind the expression
 * @param   {Object} binding - binding data
 * @param   {number|null} templateTagOffset - if it's defined we need to fix the text expressions childNodeIndex offset
 * @returns {Binding} Binding object
 */


function create$5(root, binding, templateTagOffset) {
  var selector = binding.selector,
      type = binding.type,
      redundantAttribute = binding.redundantAttribute,
      expressions = binding.expressions; // find the node to apply the bindings

  var node = selector ? root.querySelector(selector) : root; // remove eventually additional attributes created only to select this node

  if (redundantAttribute) node.removeAttribute(redundantAttribute);
  var bindingExpressions = expressions || []; // init the binding

  return (bindings[type] || bindings[SIMPLE])(node, Object.assign({}, binding, {
    expressions: templateTagOffset && !selector ? fixTextExpressionsOffset(bindingExpressions, templateTagOffset) : bindingExpressions
  }));
}

function createHTMLTree(html, root) {
  var template = isTemplate(root) ? root : document.createElement('template');
  template.innerHTML = html;
  return template.content;
} // for svg nodes we need a bit more work


function createSVGTree(html, container) {
  // create the SVGNode
  var svgNode = container.ownerDocument.importNode(new window.DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\">".concat(html, "</svg>"), 'application/xml').documentElement, true);
  return svgNode;
}
/**
 * Create the DOM that will be injected
 * @param {Object} root - DOM node to find out the context where the fragment will be created
 * @param   {string} html - DOM to create as string
 * @returns {HTMLDocumentFragment|HTMLElement} a new html fragment
 */


function createDOMTree(root, html) {
  if (isSvg(root)) return createSVGTree(html, root);
  return createHTMLTree(html, root);
}
/**
 * Inject the DOM tree into a target node
 * @param   {HTMLElement} el - target element
 * @param   {HTMLFragment|SVGElement} dom - dom tree to inject
 * @returns {undefined}
 */


function injectDOM(el, dom) {
  switch (true) {
    case isSvg(el):
      moveChildren(dom, el);
      break;

    case isTemplate(el):
      el.parentNode.replaceChild(dom, el);
      break;

    default:
      el.appendChild(dom);
  }
}
/**
 * Create the Template DOM skeleton
 * @param   {HTMLElement} el - root node where the DOM will be injected
 * @param   {string} html - markup that will be injected into the root node
 * @returns {HTMLFragment} fragment that will be injected into the root node
 */


function createTemplateDOM(el, html) {
  return html && (typeof html === 'string' ? createDOMTree(el, html) : html);
}
/**
 * Template Chunk model
 * @type {Object}
 */


var TemplateChunk = Object.freeze({
  // Static props
  // bindings: null,
  // bindingsData: null,
  // html: null,
  // isTemplateTag: false,
  // fragment: null,
  // children: null,
  // dom: null,
  // el: null,

  /**
   * Create the template DOM structure that will be cloned on each mount
   * @param   {HTMLElement} el - the root node
   * @returns {TemplateChunk} self
   */
  createDOM: function createDOM(el) {
    // make sure that the DOM gets created before cloning the template
    this.dom = this.dom || createTemplateDOM(el, this.html);
    return this;
  },
  // API methods

  /**
   * Attach the template to a DOM node
   * @param   {HTMLElement} el - target DOM node
   * @param   {*} scope - template data
   * @param   {*} parentScope - scope of the parent template tag
   * @param   {Object} meta - meta properties needed to handle the <template> tags in loops
   * @returns {TemplateChunk} self
   */
  mount: function mount(el, scope, parentScope, meta) {
    var _this4 = this;

    if (meta === void 0) {
      meta = {};
    }

    if (!el) throw new Error('Please provide DOM node to mount properly your template');
    if (this.el) this.unmount(scope); // <template> tags require a bit more work
    // the template fragment might be already created via meta outside of this call

    var _meta = meta,
        fragment = _meta.fragment,
        children = _meta.children,
        avoidDOMInjection = _meta.avoidDOMInjection; // <template> bindings of course can not have a root element
    // so we check the parent node to set the query selector bindings

    var _ref9 = children ? children[0] : el,
        parentNode = _ref9.parentNode;

    var isTemplateTag = isTemplate(el);
    var templateTagOffset = isTemplateTag ? Math.max(Array.from(parentNode.childNodes).indexOf(el), 0) : null;
    this.isTemplateTag = isTemplateTag; // create the DOM if it wasn't created before

    this.createDOM(el);

    if (this.dom) {
      // create the new template dom fragment if it want already passed in via meta
      this.fragment = fragment || this.dom.cloneNode(true);
    } // store root node
    // notice that for template tags the root note will be the parent tag


    this.el = this.isTemplateTag ? parentNode : el; // create the children array only for the <template> fragments

    this.children = this.isTemplateTag ? children || Array.from(this.fragment.childNodes) : null; // inject the DOM into the el only if a fragment is available

    if (!avoidDOMInjection && this.fragment) injectDOM(el, this.fragment); // create the bindings

    this.bindings = this.bindingsData.map(function (binding) {
      return create$5(_this4.el, binding, templateTagOffset);
    });
    this.bindings.forEach(function (b) {
      return b.mount(scope, parentScope);
    });
    return this;
  },

  /**
   * Update the template with fresh data
   * @param   {*} scope - template data
   * @param   {*} parentScope - scope of the parent template tag
   * @returns {TemplateChunk} self
   */
  update: function update(scope, parentScope) {
    this.bindings.forEach(function (b) {
      return b.update(scope, parentScope);
    });
    return this;
  },

  /**
   * Remove the template from the node where it was initially mounted
   * @param   {*} scope - template data
   * @param   {*} parentScope - scope of the parent template tag
   * @param   {boolean|null} mustRemoveRoot - if true remove the root element,
   * if false or undefined clean the root tag content, if null don't touch the DOM
   * @returns {TemplateChunk} self
   */
  unmount: function unmount(scope, parentScope, mustRemoveRoot) {
    if (this.el) {
      this.bindings.forEach(function (b) {
        return b.unmount(scope, parentScope, mustRemoveRoot);
      });

      switch (true) {
        // <template> tags should be treated a bit differently
        // we need to clear their children only if it's explicitly required by the caller
        // via mustRemoveRoot !== null
        case this.children && mustRemoveRoot !== null:
          clearChildren(this.children);
          break;
        // remove the root node only if the mustRemoveRoot === true

        case mustRemoveRoot === true:
          removeNode(this.el);
          break;
        // otherwise we clean the node children

        case mustRemoveRoot !== null:
          cleanNode(this.el);
          break;
      }

      this.el = null;
    }

    return this;
  },

  /**
   * Clone the template chunk
   * @returns {TemplateChunk} a clone of this object resetting the this.el property
   */
  clone: function clone() {
    return Object.assign({}, this, {
      el: null
    });
  }
});
/**
 * Create a template chunk wiring also the bindings
 * @param   {string|HTMLElement} html - template string
 * @param   {Array} bindings - bindings collection
 * @returns {TemplateChunk} a new TemplateChunk copy
 */

function create$6(html, bindings) {
  if (bindings === void 0) {
    bindings = [];
  }

  return Object.assign({}, TemplateChunk, {
    html: html,
    bindingsData: bindings
  });
}
/**
 * Method used to bind expressions to a DOM node
 * @param   {string|HTMLElement} html - your static template html structure
 * @param   {Array} bindings - list of the expressions to bind to update the markup
 * @returns {TemplateChunk} a new TemplateChunk object having the `update`,`mount`, `unmount` and `clone` methods
 *
 * @example
 *
 * riotDOMBindings
 *  .template(
 *   `<div expr0><!----></div><div><p expr1><!----><section expr2></section></p>`,
 *   [
 *     {
 *       selector: '[expr0]',
 *       redundantAttribute: 'expr0',
 *       expressions: [
 *         {
 *           type: expressionTypes.TEXT,
 *           childNodeIndex: 0,
 *           evaluate(scope) {
 *             return scope.time;
 *           },
 *         },
 *       ],
 *     },
 *     {
 *       selector: '[expr1]',
 *       redundantAttribute: 'expr1',
 *       expressions: [
 *         {
 *           type: expressionTypes.TEXT,
 *           childNodeIndex: 0,
 *           evaluate(scope) {
 *             return scope.name;
 *           },
 *         },
 *         {
 *           type: 'attribute',
 *           name: 'style',
 *           evaluate(scope) {
 *             return scope.style;
 *           },
 *         },
 *       ],
 *     },
 *     {
 *       selector: '[expr2]',
 *       redundantAttribute: 'expr2',
 *       type: bindingTypes.IF,
 *       evaluate(scope) {
 *         return scope.isVisible;
 *       },
 *       template: riotDOMBindings.template('hello there'),
 *     },
 *   ]
 * )
 */


var DOMBindings = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: create$6,
  createBinding: create$5,
  createExpression: create$2,
  bindingTypes: bindingTypes,
  expressionTypes: expressionTypes
});

function noop() {
  return this;
}
/**
 * Autobind the methods of a source object to itself
 * @param   {Object} source - probably a riot tag instance
 * @param   {Array<string>} methods - list of the methods to autobind
 * @returns {Object} the original object received
 */


function autobindMethods(source, methods) {
  methods.forEach(function (method) {
    source[method] = source[method].bind(source);
  });
  return source;
}
/**
 * Call the first argument received only if it's a function otherwise return it as it is
 * @param   {*} source - anything
 * @returns {*} anything
 */


function callOrAssign(source) {
  return isFunction(source) ? source.prototype && source.prototype.constructor ? new source() : source() : source;
}
/**
 * Helper function to set an immutable property
 * @param   {Object} source - object where the new property will be set
 * @param   {string} key - object key where the new property will be stored
 * @param   {*} value - value of the new property
 * @param   {Object} options - set the propery overriding the default options
 * @returns {Object} - the original object modified
 */


function defineProperty(source, key, value, options) {
  if (options === void 0) {
    options = {};
  }
  /* eslint-disable fp/no-mutating-methods */


  Object.defineProperty(source, key, Object.assign({
    value: value,
    enumerable: false,
    writable: false,
    configurable: true
  }, options));
  /* eslint-enable fp/no-mutating-methods */

  return source;
}
/**
 * Define multiple properties on a target object
 * @param   {Object} source - object where the new properties will be set
 * @param   {Object} properties - object containing as key pair the key + value properties
 * @param   {Object} options - set the propery overriding the default options
 * @returns {Object} the original object modified
 */


function defineProperties(source, properties, options) {
  Object.entries(properties).forEach(function (_ref) {
    var _ref10 = _slicedToArray(_ref, 2),
        key = _ref10[0],
        value = _ref10[1];

    defineProperty(source, key, value, options);
  });
  return source;
}
/**
 * Define default properties if they don't exist on the source object
 * @param   {Object} source - object that will receive the default properties
 * @param   {Object} defaults - object containing additional optional keys
 * @returns {Object} the original object received enhanced
 */


function defineDefaults(source, defaults) {
  Object.entries(defaults).forEach(function (_ref2) {
    var _ref11 = _slicedToArray(_ref2, 2),
        key = _ref11[0],
        value = _ref11[1];

    if (!source[key]) source[key] = value;
  });
  return source;
}
/**
 * Converts any DOM node/s to a loopable array
 * @param   { HTMLElement|NodeList } els - single html element or a node list
 * @returns { Array } always a loopable object
 */


function domToArray(els) {
  // can this object be already looped?
  if (!Array.isArray(els)) {
    // is it a node list?
    if (/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(els)) && typeof els.length === 'number') return Array.from(els);else // if it's a single node
      // it will be returned as "array" with one single entry
      return [els];
  } // this object could be looped out of the box


  return els;
}
/**
 * Simple helper to find DOM nodes returning them as array like loopable object
 * @param   { string|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search for the DOM nodes
 * @returns { Array } DOM nodes found as array
 */


function _$(selector, ctx) {
  return domToArray(typeof selector === 'string' ? (ctx || document).querySelectorAll(selector) : selector);
}
/**
 * Normalize the return values, in case of a single value we avoid to return an array
 * @param   { Array } values - list of values we want to return
 * @returns { Array|string|boolean } either the whole list of values or the single one found
 * @private
 */


var normalize = function normalize(values) {
  return values.length === 1 ? values[0] : values;
};
/**
 * Parse all the nodes received to get/remove/check their attributes
 * @param   { HTMLElement|NodeList|Array } els    - DOM node/s to parse
 * @param   { string|Array }               name   - name or list of attributes
 * @param   { string }                     method - method that will be used to parse the attributes
 * @returns { Array|string } result of the parsing in a list or a single value
 * @private
 */


function parseNodes(els, name, method) {
  var names = typeof name === 'string' ? [name] : name;
  return normalize(domToArray(els).map(function (el) {
    return normalize(names.map(function (n) {
      return el[method](n);
    }));
  }));
}
/**
 * Set any attribute on a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Object }              name  - either the name of the attribute to set
 *                                                 or a list of properties as object key - value
 * @param   { string }                     value - the new value of the attribute (optional)
 * @returns { HTMLElement|NodeList|Array } the original array of elements passed to this function
 *
 * @example
 *
 * import { set } from 'bianco.attr'
 *
 * const img = document.createElement('img')
 *
 * set(img, 'width', 100)
 *
 * // or also
 * set(img, {
 *   width: 300,
 *   height: 300
 * })
 *
 */


function set(els, name, value) {
  var attrs = _typeof(name) === 'object' ? name : _defineProperty({}, name, value);
  var props = Object.keys(attrs);
  domToArray(els).forEach(function (el) {
    props.forEach(function (prop) {
      return el.setAttribute(prop, attrs[prop]);
    });
  });
  return els;
}
/**
 * Get any attribute from a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Array }               name  - name or list of attributes to get
 * @returns { Array|string } list of the attributes found
 *
 * @example
 *
 * import { get } from 'bianco.attr'
 *
 * const img = document.createElement('img')
 *
 * get(img, 'width') // => '200'
 *
 * // or also
 * get(img, ['width', 'height']) // => ['200', '300']
 *
 * // or also
 * get([img1, img2], ['width', 'height']) // => [['200', '300'], ['500', '200']]
 */


function get(els, name) {
  return parseNodes(els, name, 'getAttribute');
}

var CSS_BY_NAME = new Map();
var STYLE_NODE_SELECTOR = 'style[riot]'; // memoized curried function

var getStyleNode = function (style) {
  return function () {
    // lazy evaluation:
    // if this function was already called before
    // we return its cached result
    if (style) return style; // create a new style element or use an existing one
    // and cache it internally

    style = _$(STYLE_NODE_SELECTOR)[0] || document.createElement('style');
    set(style, 'type', 'text/css');
    /* istanbul ignore next */

    if (!style.parentNode) document.head.appendChild(style);
    return style;
  };
}();
/**
 * Object that will be used to inject and manage the css of every tag instance
 */


var cssManager = {
  CSS_BY_NAME: CSS_BY_NAME,

  /**
   * Save a tag style to be later injected into DOM
   * @param { string } name - if it's passed we will map the css to a tagname
   * @param { string } css - css string
   * @returns {Object} self
   */
  add: function add(name, css) {
    if (!CSS_BY_NAME.has(name)) {
      CSS_BY_NAME.set(name, css);
      this.inject();
    }

    return this;
  },

  /**
   * Inject all previously saved tag styles into DOM
   * innerHTML seems slow: http://jsperf.com/riot-insert-style
   * @returns {Object} self
   */
  inject: function inject() {
    getStyleNode().innerHTML = _toConsumableArray(CSS_BY_NAME.values()).join('\n');
    return this;
  },

  /**
   * Remove a tag style from the DOM
   * @param {string} name a registered tagname
   * @returns {Object} self
   */
  remove: function remove(name) {
    if (CSS_BY_NAME.has(name)) {
      CSS_BY_NAME.delete(name);
      this.inject();
    }

    return this;
  }
};
/**
 * Function to curry any javascript method
 * @param   {Function}  fn - the target function we want to curry
 * @param   {...[args]} acc - initial arguments
 * @returns {Function|*} it will return a function until the target function
 *                       will receive all of its arguments
 */

function curry(fn) {
  for (var _len = arguments.length, acc = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    acc[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args = [].concat(acc, _toConsumableArray(args));
    return args.length < fn.length ? curry.apply(void 0, [fn].concat(_toConsumableArray(args))) : fn.apply(void 0, _toConsumableArray(args));
  };
}
/**
 * Get the tag name of any DOM node
 * @param   {HTMLElement} element - DOM node we want to inspect
 * @returns {string} name to identify this dom node in riot
 */


function getName(element) {
  return get(element, IS_DIRECTIVE) || element.tagName.toLowerCase();
}

var COMPONENT_CORE_HELPERS = Object.freeze({
  // component helpers
  $: function $(selector) {
    return _$(selector, this.root)[0];
  },
  $$: function $$(selector) {
    return _$(selector, this.root);
  }
});
var PURE_COMPONENT_API = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, MOUNT_METHOD_KEY, noop), _defineProperty(_Object$freeze, UPDATE_METHOD_KEY, noop), _defineProperty(_Object$freeze, UNMOUNT_METHOD_KEY, noop), _Object$freeze));
var COMPONENT_LIFECYCLE_METHODS = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, SHOULD_UPDATE_KEY, noop), _defineProperty(_Object$freeze2, ON_BEFORE_MOUNT_KEY, noop), _defineProperty(_Object$freeze2, ON_MOUNTED_KEY, noop), _defineProperty(_Object$freeze2, ON_BEFORE_UPDATE_KEY, noop), _defineProperty(_Object$freeze2, ON_UPDATED_KEY, noop), _defineProperty(_Object$freeze2, ON_BEFORE_UNMOUNT_KEY, noop), _defineProperty(_Object$freeze2, ON_UNMOUNTED_KEY, noop), _Object$freeze2));
var MOCKED_TEMPLATE_INTERFACE = Object.assign({}, PURE_COMPONENT_API, {
  clone: noop,
  createDOM: noop
});
/**
 * Evaluate the component properties either from its real attributes or from its initial user properties
 * @param   {HTMLElement} element - component root
 * @param   {Object}  initialProps - initial props
 * @returns {Object} component props key value pairs
 */

function evaluateInitialProps(element, initialProps) {
  if (initialProps === void 0) {
    initialProps = {};
  }

  return Object.assign({}, DOMattributesToObject(element), callOrAssign(initialProps));
}
/**
 * Bind a DOM node to its component object
 * @param   {HTMLElement} node - html node mounted
 * @param   {Object} component - Riot.js component object
 * @returns {Object} the component object received as second argument
 */


var bindDOMNodeToComponentObject = function bindDOMNodeToComponentObject(node, component) {
  return node[DOM_COMPONENT_INSTANCE_PROPERTY] = component;
};
/**
 * Wrap the Riot.js core API methods using a mapping function
 * @param   {Function} mapFunction - lifting function
 * @returns {Object} an object having the { mount, update, unmount } functions
 */


function createCoreAPIMethods(mapFunction) {
  return [MOUNT_METHOD_KEY, UPDATE_METHOD_KEY, UNMOUNT_METHOD_KEY].reduce(function (acc, method) {
    acc[method] = mapFunction(method);
    return acc;
  }, {});
}
/**
 * Factory function to create the component templates only once
 * @param   {Function} template - component template creation function
 * @param   {Object} components - object containing the nested components
 * @returns {TemplateChunk} template chunk object
 */


function componentTemplateFactory(template, components) {
  return template(create$6, expressionTypes, bindingTypes, function (name) {
    return components[name] || COMPONENTS_IMPLEMENTATION_MAP.get(name);
  });
}
/**
 * Create a pure component
 * @param   {Function} pureFactoryFunction - pure component factory function
 * @param   {Array} options.slots - component slots
 * @param   {Array} options.attributes - component attributes
 * @param   {Array} options.template - template factory function
 * @param   {Array} options.template - template factory function
 * @param   {any} options.props - initial component properties
 * @returns {Object} pure component object
 */


function createPureComponent(pureFactoryFunction, _ref) {
  var slots = _ref.slots,
      attributes = _ref.attributes,
      props = _ref.props,
      css = _ref.css,
      template = _ref.template;
  if (template) panic('Pure components can not have html');
  if (css) panic('Pure components do not have css');
  var component = defineDefaults(pureFactoryFunction({
    slots: slots,
    attributes: attributes,
    props: props
  }), PURE_COMPONENT_API);
  return createCoreAPIMethods(function (method) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      } // intercept the mount calls to bind the DOM node to the pure object created
      // see also https://github.com/riot/riot/issues/2806


      if (method === MOUNT_METHOD_KEY) {
        var el = args[0];
        bindDOMNodeToComponentObject(el, component);
      }

      component[method].apply(component, args);
      return component;
    };
  });
}
/**
 * Create the component interface needed for the @riotjs/dom-bindings tag bindings
 * @param   {string} options.css - component css
 * @param   {Function} options.template - functon that will return the dom-bindings template function
 * @param   {Object} options.exports - component interface
 * @param   {string} options.name - component name
 * @returns {Object} component like interface
 */


function createComponent(_ref2) {
  var css = _ref2.css,
      template = _ref2.template,
      exports = _ref2.exports,
      name = _ref2.name;
  var templateFn = template ? componentTemplateFactory(template, exports ? createSubcomponents(exports.components) : {}) : MOCKED_TEMPLATE_INTERFACE;
  return function (_ref3) {
    var slots = _ref3.slots,
        attributes = _ref3.attributes,
        props = _ref3.props; // pure components rendering will be managed by the end user

    if (exports && exports[IS_PURE_SYMBOL]) return createPureComponent(exports, {
      slots: slots,
      attributes: attributes,
      props: props,
      css: css,
      template: template
    });
    var componentAPI = callOrAssign(exports) || {};
    var component = defineComponent({
      css: css,
      template: templateFn,
      componentAPI: componentAPI,
      name: name
    })({
      slots: slots,
      attributes: attributes,
      props: props
    }); // notice that for the components create via tag binding
    // we need to invert the mount (state/parentScope) arguments
    // the template bindings will only forward the parentScope updates
    // and never deal with the component state

    return {
      mount: function mount(element, parentScope, state) {
        return component.mount(element, state, parentScope);
      },
      update: function update(parentScope, state) {
        return component.update(state, parentScope);
      },
      unmount: function unmount(preserveRoot) {
        return component.unmount(preserveRoot);
      }
    };
  };
}
/**
 * Component definition function
 * @param   {Object} implementation - the componen implementation will be generated via compiler
 * @param   {Object} component - the component initial properties
 * @returns {Object} a new component implementation object
 */


function defineComponent(_ref4) {
  var _Object$assign3;

  var css = _ref4.css,
      template = _ref4.template,
      componentAPI = _ref4.componentAPI,
      name = _ref4.name; // add the component css into the DOM

  if (css && name) cssManager.add(name, css);
  return curry(enhanceComponentAPI)(defineProperties( // set the component defaults without overriding the original component API
  defineDefaults(componentAPI, Object.assign({}, COMPONENT_LIFECYCLE_METHODS, _defineProperty({}, STATE_KEY, {}))), Object.assign((_Object$assign3 = {}, _defineProperty(_Object$assign3, SLOTS_KEY, null), _defineProperty(_Object$assign3, ROOT_KEY, null), _Object$assign3), COMPONENT_CORE_HELPERS, {
    name: name,
    css: css,
    template: template
  })));
}
/**
 * Create the bindings to update the component attributes
 * @param   {HTMLElement} node - node where we will bind the expressions
 * @param   {Array} attributes - list of attribute bindings
 * @returns {TemplateChunk} - template bindings object
 */


function createAttributeBindings(node, attributes) {
  if (attributes === void 0) {
    attributes = [];
  }

  var expressions = attributes.map(function (a) {
    return create$2(node, a);
  });
  var binding = {};
  return Object.assign(binding, Object.assign({
    expressions: expressions
  }, createCoreAPIMethods(function (method) {
    return function (scope) {
      expressions.forEach(function (e) {
        return e[method](scope);
      });
      return binding;
    };
  })));
}
/**
 * Create the subcomponents that can be included inside a tag in runtime
 * @param   {Object} components - components imported in runtime
 * @returns {Object} all the components transformed into Riot.Component factory functions
 */


function createSubcomponents(components) {
  if (components === void 0) {
    components = {};
  }

  return Object.entries(callOrAssign(components)).reduce(function (acc, _ref5) {
    var _ref13 = _slicedToArray(_ref5, 2),
        key = _ref13[0],
        value = _ref13[1];

    acc[camelToDashCase(key)] = createComponent(value);
    return acc;
  }, {});
}
/**
 * Run the component instance through all the plugins set by the user
 * @param   {Object} component - component instance
 * @returns {Object} the component enhanced by the plugins
 */


function runPlugins(component) {
  return _toConsumableArray(PLUGINS_SET).reduce(function (c, fn) {
    return fn(c) || c;
  }, component);
}
/**
 * Compute the component current state merging it with its previous state
 * @param   {Object} oldState - previous state object
 * @param   {Object} newState - new state givent to the `update` call
 * @returns {Object} new object state
 */


function computeState(oldState, newState) {
  return Object.assign({}, oldState, callOrAssign(newState));
}
/**
 * Add eventually the "is" attribute to link this DOM node to its css
 * @param {HTMLElement} element - target root node
 * @param {string} name - name of the component mounted
 * @returns {undefined} it's a void function
 */


function addCssHook(element, name) {
  if (getName(element) !== name) {
    set(element, IS_DIRECTIVE, name);
  }
}
/**
 * Component creation factory function that will enhance the user provided API
 * @param   {Object} component - a component implementation previously defined
 * @param   {Array} options.slots - component slots generated via riot compiler
 * @param   {Array} options.attributes - attribute expressions generated via riot compiler
 * @returns {Riot.Component} a riot component instance
 */


function enhanceComponentAPI(component, _ref6) {
  var slots = _ref6.slots,
      attributes = _ref6.attributes,
      props = _ref6.props;
  return autobindMethods(runPlugins(defineProperties(Object.create(component), {
    mount: function mount(element, state, parentScope) {
      if (state === void 0) {
        state = {};
      }

      this[ATTRIBUTES_KEY_SYMBOL] = createAttributeBindings(element, attributes).mount(parentScope);
      defineProperty(this, PROPS_KEY, Object.freeze(Object.assign({}, evaluateInitialProps(element, props), evaluateAttributeExpressions(this[ATTRIBUTES_KEY_SYMBOL].expressions))));
      this[STATE_KEY] = computeState(this[STATE_KEY], state);
      this[TEMPLATE_KEY_SYMBOL] = this.template.createDOM(element).clone(); // link this object to the DOM node

      bindDOMNodeToComponentObject(element, this); // add eventually the 'is' attribute

      component.name && addCssHook(element, component.name); // define the root element

      defineProperty(this, ROOT_KEY, element); // define the slots array

      defineProperty(this, SLOTS_KEY, slots); // before mount lifecycle event

      this[ON_BEFORE_MOUNT_KEY](this[PROPS_KEY], this[STATE_KEY]);
      this[PARENT_KEY_SYMBOL] = parentScope; // mount the template

      this[TEMPLATE_KEY_SYMBOL].mount(element, this, parentScope);
      this[ON_MOUNTED_KEY](this[PROPS_KEY], this[STATE_KEY]);
      return this;
    },
    update: function update(state, parentScope) {
      if (state === void 0) {
        state = {};
      }

      if (parentScope) {
        this[PARENT_KEY_SYMBOL] = parentScope;
        this[ATTRIBUTES_KEY_SYMBOL].update(parentScope);
      }

      var newProps = evaluateAttributeExpressions(this[ATTRIBUTES_KEY_SYMBOL].expressions);
      if (this[SHOULD_UPDATE_KEY](newProps, this[PROPS_KEY]) === false) return;
      defineProperty(this, PROPS_KEY, Object.freeze(Object.assign({}, this[PROPS_KEY], newProps)));
      this[STATE_KEY] = computeState(this[STATE_KEY], state);
      this[ON_BEFORE_UPDATE_KEY](this[PROPS_KEY], this[STATE_KEY]);
      this[TEMPLATE_KEY_SYMBOL].update(this, this[PARENT_KEY_SYMBOL]);
      this[ON_UPDATED_KEY](this[PROPS_KEY], this[STATE_KEY]);
      return this;
    },
    unmount: function unmount(preserveRoot) {
      this[ON_BEFORE_UNMOUNT_KEY](this[PROPS_KEY], this[STATE_KEY]);
      this[ATTRIBUTES_KEY_SYMBOL].unmount(); // if the preserveRoot is null the template html will be left untouched
      // in that case the DOM cleanup will happen differently from a parent node

      this[TEMPLATE_KEY_SYMBOL].unmount(this, this[PARENT_KEY_SYMBOL], preserveRoot === null ? null : !preserveRoot);
      this[ON_UNMOUNTED_KEY](this[PROPS_KEY], this[STATE_KEY]);
      return this;
    }
  })), Object.keys(component).filter(function (prop) {
    return isFunction(component[prop]);
  }));
}
/**
 * Component initialization function starting from a DOM node
 * @param   {HTMLElement} element - element to upgrade
 * @param   {Object} initialProps - initial component properties
 * @param   {string} componentName - component id
 * @returns {Object} a new component instance bound to a DOM node
 */


function mountComponent(element, initialProps, componentName) {
  var name = componentName || getName(element);
  if (!COMPONENTS_IMPLEMENTATION_MAP.has(name)) panic("The component named \"".concat(name, "\" was never registered"));
  var component = COMPONENTS_IMPLEMENTATION_MAP.get(name)({
    props: initialProps
  });
  return component.mount(element);
}
/**
 * Similar to compose but performs from left-to-right function composition.<br/>
 * {@link https://30secondsofcode.org/function#composeright see also}
 * @param   {...[function]} fns) - list of unary function
 * @returns {*} result of the computation
 */

/**
 * Performs right-to-left function composition.<br/>
 * Use Array.prototype.reduce() to perform right-to-left function composition.<br/>
 * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.<br/>
 * {@link https://30secondsofcode.org/function#compose original source code}
 * @param   {...[function]} fns) - list of unary function
 * @returns {*} result of the computation
 */


function compose() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
}

var DOM_COMPONENT_INSTANCE_PROPERTY$1 = globals.DOM_COMPONENT_INSTANCE_PROPERTY,
    COMPONENTS_IMPLEMENTATION_MAP$1 = globals.COMPONENTS_IMPLEMENTATION_MAP,
    PLUGINS_SET$1 = globals.PLUGINS_SET;
/**
 * Riot public api
 */

/**
 * Register a custom tag by name
 * @param   {string} name - component name
 * @param   {Object} implementation - tag implementation
 * @returns {Map} map containing all the components implementations
 */

function register(name, _ref) {
  var css = _ref.css,
      template = _ref.template,
      exports = _ref.exports;
  if (COMPONENTS_IMPLEMENTATION_MAP$1.has(name)) panic("The component \"".concat(name, "\" was already registered"));
  COMPONENTS_IMPLEMENTATION_MAP$1.set(name, createComponent({
    name: name,
    css: css,
    template: template,
    exports: exports
  }));
  return COMPONENTS_IMPLEMENTATION_MAP$1;
}
/**
 * Unregister a riot web component
 * @param   {string} name - component name
 * @returns {Map} map containing all the components implementations
 */


function unregister(name) {
  if (!COMPONENTS_IMPLEMENTATION_MAP$1.has(name)) panic("The component \"".concat(name, "\" was never registered"));
  COMPONENTS_IMPLEMENTATION_MAP$1.delete(name);
  cssManager.remove(name);
  return COMPONENTS_IMPLEMENTATION_MAP$1;
}
/**
 * Mounting function that will work only for the components that were globally registered
 * @param   {string|HTMLElement} selector - query for the selection or a DOM element
 * @param   {Object} initialProps - the initial component properties
 * @param   {string} name - optional component name
 * @returns {Array} list of nodes upgraded
 */


function mount(selector, initialProps, name) {
  return _$(selector).map(function (element) {
    return mountComponent(element, initialProps, name);
  });
}
/**
 * Sweet unmounting helper function for the DOM node mounted manually by the user
 * @param   {string|HTMLElement} selector - query for the selection or a DOM element
 * @param   {boolean|null} keepRootElement - if true keep the root element
 * @returns {Array} list of nodes unmounted
 */


function unmount(selector, keepRootElement) {
  return _$(selector).map(function (element) {
    if (element[DOM_COMPONENT_INSTANCE_PROPERTY$1]) {
      element[DOM_COMPONENT_INSTANCE_PROPERTY$1].unmount(keepRootElement);
    }

    return element;
  });
}
/**
 * Define a riot plugin
 * @param   {Function} plugin - function that will receive all the components created
 * @returns {Set} the set containing all the plugins installed
 */


function install(plugin) {
  if (!isFunction(plugin)) panic('Plugins must be of type function');
  if (PLUGINS_SET$1.has(plugin)) panic('This plugin was already installed');
  PLUGINS_SET$1.add(plugin);
  return PLUGINS_SET$1;
}
/**
 * Uninstall a riot plugin
 * @param   {Function} plugin - plugin previously installed
 * @returns {Set} the set containing all the plugins installed
 */


function uninstall(plugin) {
  if (!PLUGINS_SET$1.has(plugin)) panic('This plugin was never installed');
  PLUGINS_SET$1.delete(plugin);
  return PLUGINS_SET$1;
}
/**
 * Helper method to create component without relying on the registered ones
 * @param   {Object} implementation - component implementation
 * @returns {Function} function that will allow you to mount a riot component on a DOM node
 */


function component(implementation) {
  return function (el, props, _temp) {
    var _ref14 = _temp === void 0 ? {} : _temp,
        slots = _ref14.slots,
        attributes = _ref14.attributes,
        parentScope = _ref14.parentScope;

    return compose(function (c) {
      return c.mount(el, parentScope);
    }, function (c) {
      return c({
        props: props,
        slots: slots,
        attributes: attributes
      });
    }, createComponent)(implementation);
  };
}
/**
 * Lift a riot component Interface into a pure riot object
 * @param   {Function} func - RiotPureComponent factory function
 * @returns {Function} the lifted original function received as argument
 */


function pure(func) {
  if (!isFunction(func)) panic('riot.pure accepts only arguments of type "function"');
  func[IS_PURE_SYMBOL] = true;
  return func;
}
/** @type {string} current riot version */


var version = 'v4.13.4'; // expose some internal stuff that might be used from external tools

exports.version = version;
var __ = {
  cssManager: cssManager,
  DOMBindings: DOMBindings,
  createComponent: createComponent,
  defineComponent: defineComponent,
  globals: globals
};
exports.__ = __;
},{}],"../src/index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./App.riot"));

var _riot = require("riot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _riot.component)(_App.default)(document.querySelector('#root'), {
  message: 'Hello there'
});
},{"./App.riot":"../src/App.riot","riot":"../node_modules/riot/riot.esm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38603" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../.cache/.cargo-web/loader-be7369a0583e756f576c1b722e6d7668.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (bundle) {
  function __initialize(__wasm_module, __load_asynchronously) {
    return function (module_factory) {
      var instance = module_factory();

      if (__load_asynchronously) {
        return WebAssembly.instantiate(__wasm_module, instance.imports).then(function (wasm_instance) {
          var exports = instance.initialize(wasm_instance);
          console.log("Finished loading Rust wasm module 'rustess'");
          return exports;
        }).catch(function (error) {
          console.log("Error loading Rust wasm module 'rustess':", error);
          throw error;
        });
      } else {
        var instance = new WebAssembly.Instance(__wasm_module, instance.imports);
        return instance.initialize(wasm_instance);
      }
    }(function () {
      var Module = {};
      Module.STDWEB_PRIVATE = {}; // This is based on code from Emscripten's preamble.js.

      Module.STDWEB_PRIVATE.to_utf8 = function to_utf8(str, addr) {
        var HEAPU8 = Module.HEAPU8;

        for (var i = 0; i < str.length; ++i) {
          // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
          // See http://unicode.org/faq/utf_bom.html#utf16-3
          // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
          var u = str.charCodeAt(i); // possibly a lead surrogate

          if (u >= 0xD800 && u <= 0xDFFF) {
            u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;
          }

          if (u <= 0x7F) {
            HEAPU8[addr++] = u;
          } else if (u <= 0x7FF) {
            HEAPU8[addr++] = 0xC0 | u >> 6;
            HEAPU8[addr++] = 0x80 | u & 63;
          } else if (u <= 0xFFFF) {
            HEAPU8[addr++] = 0xE0 | u >> 12;
            HEAPU8[addr++] = 0x80 | u >> 6 & 63;
            HEAPU8[addr++] = 0x80 | u & 63;
          } else if (u <= 0x1FFFFF) {
            HEAPU8[addr++] = 0xF0 | u >> 18;
            HEAPU8[addr++] = 0x80 | u >> 12 & 63;
            HEAPU8[addr++] = 0x80 | u >> 6 & 63;
            HEAPU8[addr++] = 0x80 | u & 63;
          } else if (u <= 0x3FFFFFF) {
            HEAPU8[addr++] = 0xF8 | u >> 24;
            HEAPU8[addr++] = 0x80 | u >> 18 & 63;
            HEAPU8[addr++] = 0x80 | u >> 12 & 63;
            HEAPU8[addr++] = 0x80 | u >> 6 & 63;
            HEAPU8[addr++] = 0x80 | u & 63;
          } else {
            HEAPU8[addr++] = 0xFC | u >> 30;
            HEAPU8[addr++] = 0x80 | u >> 24 & 63;
            HEAPU8[addr++] = 0x80 | u >> 18 & 63;
            HEAPU8[addr++] = 0x80 | u >> 12 & 63;
            HEAPU8[addr++] = 0x80 | u >> 6 & 63;
            HEAPU8[addr++] = 0x80 | u & 63;
          }
        }
      };

      Module.STDWEB_PRIVATE.noop = function () {};

      Module.STDWEB_PRIVATE.to_js = function to_js(address) {
        var kind = Module.HEAPU8[address + 12];

        if (kind === 0) {
          return undefined;
        } else if (kind === 1) {
          return null;
        } else if (kind === 2) {
          return Module.HEAP32[address / 4];
        } else if (kind === 3) {
          return Module.HEAPF64[address / 8];
        } else if (kind === 4) {
          var pointer = Module.HEAPU32[address / 4];
          var length = Module.HEAPU32[(address + 4) / 4];
          return Module.STDWEB_PRIVATE.to_js_string(pointer, length);
        } else if (kind === 5) {
          return false;
        } else if (kind === 6) {
          return true;
        } else if (kind === 7) {
          var pointer = Module.STDWEB_PRIVATE.arena + Module.HEAPU32[address / 4];
          var length = Module.HEAPU32[(address + 4) / 4];
          var _output = [];

          for (var i = 0; i < length; ++i) {
            _output.push(Module.STDWEB_PRIVATE.to_js(pointer + i * 16));
          }

          return _output;
        } else if (kind === 8) {
          var arena = Module.STDWEB_PRIVATE.arena;
          var value_array_pointer = arena + Module.HEAPU32[address / 4];
          var length = Module.HEAPU32[(address + 4) / 4];
          var key_array_pointer = arena + Module.HEAPU32[(address + 8) / 4];
          var _output = {};

          for (var i = 0; i < length; ++i) {
            var key_pointer = Module.HEAPU32[(key_array_pointer + i * 8) / 4];
            var key_length = Module.HEAPU32[(key_array_pointer + 4 + i * 8) / 4];
            var key = Module.STDWEB_PRIVATE.to_js_string(key_pointer, key_length);
            var value = Module.STDWEB_PRIVATE.to_js(value_array_pointer + i * 16);
            _output[key] = value;
          }

          return _output;
        } else if (kind === 9) {
          return Module.STDWEB_PRIVATE.acquire_js_reference(Module.HEAP32[address / 4]);
        } else if (kind === 10 || kind === 12 || kind === 13) {
          var adapter_pointer = Module.HEAPU32[address / 4];
          var pointer = Module.HEAPU32[(address + 4) / 4];
          var deallocator_pointer = Module.HEAPU32[(address + 8) / 4];
          var num_ongoing_calls = 0;
          var drop_queued = false;

          var _output = function output() {
            if (pointer === 0 || drop_queued === true) {
              if (kind === 10) {
                throw new ReferenceError("Already dropped Rust function called!");
              } else if (kind === 12) {
                throw new ReferenceError("Already dropped FnMut function called!");
              } else {
                throw new ReferenceError("Already called or dropped FnOnce function called!");
              }
            }

            var function_pointer = pointer;

            if (kind === 13) {
              _output.drop = Module.STDWEB_PRIVATE.noop;
              pointer = 0;
            }

            if (num_ongoing_calls !== 0) {
              if (kind === 12 || kind === 13) {
                throw new ReferenceError("FnMut function called multiple times concurrently!");
              }
            }

            var args = Module.STDWEB_PRIVATE.alloc(16);
            Module.STDWEB_PRIVATE.serialize_array(args, arguments);

            try {
              num_ongoing_calls += 1;
              Module.STDWEB_PRIVATE.dyncall("vii", adapter_pointer, [function_pointer, args]);
              var result = Module.STDWEB_PRIVATE.tmp;
              Module.STDWEB_PRIVATE.tmp = null;
            } finally {
              num_ongoing_calls -= 1;
            }

            if (drop_queued === true && num_ongoing_calls === 0) {
              _output.drop();
            }

            return result;
          };

          _output.drop = function () {
            if (num_ongoing_calls !== 0) {
              drop_queued = true;
              return;
            }

            _output.drop = Module.STDWEB_PRIVATE.noop;
            var function_pointer = pointer;
            pointer = 0;

            if (function_pointer != 0) {
              Module.STDWEB_PRIVATE.dyncall("vi", deallocator_pointer, [function_pointer]);
            }
          };

          return _output;
        } else if (kind === 14) {
          var pointer = Module.HEAPU32[address / 4];
          var length = Module.HEAPU32[(address + 4) / 4];
          var array_kind = Module.HEAPU32[(address + 8) / 4];
          var pointer_end = pointer + length;

          switch (array_kind) {
            case 0:
              return Module.HEAPU8.subarray(pointer, pointer_end);

            case 1:
              return Module.HEAP8.subarray(pointer, pointer_end);

            case 2:
              return Module.HEAPU16.subarray(pointer, pointer_end);

            case 3:
              return Module.HEAP16.subarray(pointer, pointer_end);

            case 4:
              return Module.HEAPU32.subarray(pointer, pointer_end);

            case 5:
              return Module.HEAP32.subarray(pointer, pointer_end);

            case 6:
              return Module.HEAPF32.subarray(pointer, pointer_end);

            case 7:
              return Module.HEAPF64.subarray(pointer, pointer_end);
          }
        } else if (kind === 15) {
          return Module.STDWEB_PRIVATE.get_raw_value(Module.HEAPU32[address / 4]);
        }
      };

      Module.STDWEB_PRIVATE.serialize_object = function serialize_object(address, value) {
        var keys = Object.keys(value);
        var length = keys.length;
        var key_array_pointer = Module.STDWEB_PRIVATE.alloc(length * 8);
        var value_array_pointer = Module.STDWEB_PRIVATE.alloc(length * 16);
        Module.HEAPU8[address + 12] = 8;
        Module.HEAPU32[address / 4] = value_array_pointer;
        Module.HEAPU32[(address + 4) / 4] = length;
        Module.HEAPU32[(address + 8) / 4] = key_array_pointer;

        for (var i = 0; i < length; ++i) {
          var key = keys[i];
          var key_address = key_array_pointer + i * 8;
          Module.STDWEB_PRIVATE.to_utf8_string(key_address, key);
          Module.STDWEB_PRIVATE.from_js(value_array_pointer + i * 16, value[key]);
        }
      };

      Module.STDWEB_PRIVATE.serialize_array = function serialize_array(address, value) {
        var length = value.length;
        var pointer = Module.STDWEB_PRIVATE.alloc(length * 16);
        Module.HEAPU8[address + 12] = 7;
        Module.HEAPU32[address / 4] = pointer;
        Module.HEAPU32[(address + 4) / 4] = length;

        for (var i = 0; i < length; ++i) {
          Module.STDWEB_PRIVATE.from_js(pointer + i * 16, value[i]);
        }
      }; // New browsers and recent Node


      var cachedEncoder = typeof TextEncoder === "function" ? new TextEncoder("utf-8") // Old Node (before v11)
      : (typeof util === "undefined" ? "undefined" : _typeof(util)) === "object" && util && typeof util.TextEncoder === "function" ? new util.TextEncoder("utf-8") // Old browsers
      : null;

      if (cachedEncoder != null) {
        Module.STDWEB_PRIVATE.to_utf8_string = function to_utf8_string(address, value) {
          var buffer = cachedEncoder.encode(value);
          var length = buffer.length;
          var pointer = 0;

          if (length > 0) {
            pointer = Module.STDWEB_PRIVATE.alloc(length);
            Module.HEAPU8.set(buffer, pointer);
          }

          Module.HEAPU32[address / 4] = pointer;
          Module.HEAPU32[(address + 4) / 4] = length;
        };
      } else {
        Module.STDWEB_PRIVATE.to_utf8_string = function to_utf8_string(address, value) {
          var length = Module.STDWEB_PRIVATE.utf8_len(value);
          var pointer = 0;

          if (length > 0) {
            pointer = Module.STDWEB_PRIVATE.alloc(length);
            Module.STDWEB_PRIVATE.to_utf8(value, pointer);
          }

          Module.HEAPU32[address / 4] = pointer;
          Module.HEAPU32[(address + 4) / 4] = length;
        };
      }

      Module.STDWEB_PRIVATE.from_js = function from_js(address, value) {
        var kind = Object.prototype.toString.call(value);

        if (kind === "[object String]") {
          Module.HEAPU8[address + 12] = 4;
          Module.STDWEB_PRIVATE.to_utf8_string(address, value);
        } else if (kind === "[object Number]") {
          if (value === (value | 0)) {
            Module.HEAPU8[address + 12] = 2;
            Module.HEAP32[address / 4] = value;
          } else {
            Module.HEAPU8[address + 12] = 3;
            Module.HEAPF64[address / 8] = value;
          }
        } else if (value === null) {
          Module.HEAPU8[address + 12] = 1;
        } else if (value === undefined) {
          Module.HEAPU8[address + 12] = 0;
        } else if (value === false) {
          Module.HEAPU8[address + 12] = 5;
        } else if (value === true) {
          Module.HEAPU8[address + 12] = 6;
        } else if (kind === "[object Symbol]") {
          var id = Module.STDWEB_PRIVATE.register_raw_value(value);
          Module.HEAPU8[address + 12] = 15;
          Module.HEAP32[address / 4] = id;
        } else {
          var refid = Module.STDWEB_PRIVATE.acquire_rust_reference(value);
          Module.HEAPU8[address + 12] = 9;
          Module.HEAP32[address / 4] = refid;
        }
      }; // New browsers and recent Node


      var cachedDecoder = typeof TextDecoder === "function" ? new TextDecoder("utf-8") // Old Node (before v11)
      : (typeof util === "undefined" ? "undefined" : _typeof(util)) === "object" && util && typeof util.TextDecoder === "function" ? new util.TextDecoder("utf-8") // Old browsers
      : null;

      if (cachedDecoder != null) {
        Module.STDWEB_PRIVATE.to_js_string = function to_js_string(index, length) {
          return cachedDecoder.decode(Module.HEAPU8.subarray(index, index + length));
        };
      } else {
        // This is ported from Rust's stdlib; it's faster than
        // the string conversion from Emscripten.
        Module.STDWEB_PRIVATE.to_js_string = function to_js_string(index, length) {
          var HEAPU8 = Module.HEAPU8;
          index = index | 0;
          length = length | 0;
          var end = (index | 0) + (length | 0);
          var output = "";

          while (index < end) {
            var x = HEAPU8[index++];

            if (x < 128) {
              output += String.fromCharCode(x);
              continue;
            }

            var init = x & 0x7F >> 2;
            var y = 0;

            if (index < end) {
              y = HEAPU8[index++];
            }

            var ch = init << 6 | y & 63;

            if (x >= 0xE0) {
              var z = 0;

              if (index < end) {
                z = HEAPU8[index++];
              }

              var y_z = (y & 63) << 6 | z & 63;
              ch = init << 12 | y_z;

              if (x >= 0xF0) {
                var w = 0;

                if (index < end) {
                  w = HEAPU8[index++];
                }

                ch = (init & 7) << 18 | (y_z << 6 | w & 63);
                output += String.fromCharCode(0xD7C0 + (ch >> 10));
                ch = 0xDC00 + (ch & 0x3FF);
              }
            }

            output += String.fromCharCode(ch);
            continue;
          }

          return output;
        };
      }

      Module.STDWEB_PRIVATE.id_to_ref_map = {};
      Module.STDWEB_PRIVATE.id_to_refcount_map = {};
      Module.STDWEB_PRIVATE.ref_to_id_map = new WeakMap(); // Not all types can be stored in a WeakMap

      Module.STDWEB_PRIVATE.ref_to_id_map_fallback = new Map();
      Module.STDWEB_PRIVATE.last_refid = 1;
      Module.STDWEB_PRIVATE.id_to_raw_value_map = {};
      Module.STDWEB_PRIVATE.last_raw_value_id = 1;

      Module.STDWEB_PRIVATE.acquire_rust_reference = function (reference) {
        if (reference === undefined || reference === null) {
          return 0;
        }

        var id_to_refcount_map = Module.STDWEB_PRIVATE.id_to_refcount_map;
        var id_to_ref_map = Module.STDWEB_PRIVATE.id_to_ref_map;
        var ref_to_id_map = Module.STDWEB_PRIVATE.ref_to_id_map;
        var ref_to_id_map_fallback = Module.STDWEB_PRIVATE.ref_to_id_map_fallback;
        var refid = ref_to_id_map.get(reference);

        if (refid === undefined) {
          refid = ref_to_id_map_fallback.get(reference);
        }

        if (refid === undefined) {
          refid = Module.STDWEB_PRIVATE.last_refid++;

          try {
            ref_to_id_map.set(reference, refid);
          } catch (e) {
            ref_to_id_map_fallback.set(reference, refid);
          }
        }

        if (refid in id_to_ref_map) {
          id_to_refcount_map[refid]++;
        } else {
          id_to_ref_map[refid] = reference;
          id_to_refcount_map[refid] = 1;
        }

        return refid;
      };

      Module.STDWEB_PRIVATE.acquire_js_reference = function (refid) {
        return Module.STDWEB_PRIVATE.id_to_ref_map[refid];
      };

      Module.STDWEB_PRIVATE.increment_refcount = function (refid) {
        Module.STDWEB_PRIVATE.id_to_refcount_map[refid]++;
      };

      Module.STDWEB_PRIVATE.decrement_refcount = function (refid) {
        var id_to_refcount_map = Module.STDWEB_PRIVATE.id_to_refcount_map;

        if (0 == --id_to_refcount_map[refid]) {
          var id_to_ref_map = Module.STDWEB_PRIVATE.id_to_ref_map;
          var ref_to_id_map_fallback = Module.STDWEB_PRIVATE.ref_to_id_map_fallback;
          var reference = id_to_ref_map[refid];
          delete id_to_ref_map[refid];
          delete id_to_refcount_map[refid];
          ref_to_id_map_fallback.delete(reference);
        }
      };

      Module.STDWEB_PRIVATE.register_raw_value = function (value) {
        var id = Module.STDWEB_PRIVATE.last_raw_value_id++;
        Module.STDWEB_PRIVATE.id_to_raw_value_map[id] = value;
        return id;
      };

      Module.STDWEB_PRIVATE.unregister_raw_value = function (id) {
        delete Module.STDWEB_PRIVATE.id_to_raw_value_map[id];
      };

      Module.STDWEB_PRIVATE.get_raw_value = function (id) {
        return Module.STDWEB_PRIVATE.id_to_raw_value_map[id];
      };

      Module.STDWEB_PRIVATE.alloc = function alloc(size) {
        return Module.web_malloc(size);
      };

      Module.STDWEB_PRIVATE.dyncall = function (signature, ptr, args) {
        return Module.web_table.get(ptr).apply(null, args);
      }; // This is based on code from Emscripten's preamble.js.


      Module.STDWEB_PRIVATE.utf8_len = function utf8_len(str) {
        var len = 0;

        for (var i = 0; i < str.length; ++i) {
          // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
          // See http://unicode.org/faq/utf_bom.html#utf16-3
          var u = str.charCodeAt(i); // possibly a lead surrogate

          if (u >= 0xD800 && u <= 0xDFFF) {
            u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;
          }

          if (u <= 0x7F) {
            ++len;
          } else if (u <= 0x7FF) {
            len += 2;
          } else if (u <= 0xFFFF) {
            len += 3;
          } else if (u <= 0x1FFFFF) {
            len += 4;
          } else if (u <= 0x3FFFFFF) {
            len += 5;
          } else {
            len += 6;
          }
        }

        return len;
      };

      Module.STDWEB_PRIVATE.prepare_any_arg = function (value) {
        var arg = Module.STDWEB_PRIVATE.alloc(16);
        Module.STDWEB_PRIVATE.from_js(arg, value);
        return arg;
      };

      Module.STDWEB_PRIVATE.acquire_tmp = function (dummy) {
        var value = Module.STDWEB_PRIVATE.tmp;
        Module.STDWEB_PRIVATE.tmp = null;
        return value;
      };

      var HEAP8 = null;
      var HEAP16 = null;
      var HEAP32 = null;
      var HEAPU8 = null;
      var HEAPU16 = null;
      var HEAPU32 = null;
      var HEAPF32 = null;
      var HEAPF64 = null;
      Object.defineProperty(Module, 'exports', {
        value: {}
      });

      function __web_on_grow() {
        var buffer = Module.instance.exports.memory.buffer;
        HEAP8 = new Int8Array(buffer);
        HEAP16 = new Int16Array(buffer);
        HEAP32 = new Int32Array(buffer);
        HEAPU8 = new Uint8Array(buffer);
        HEAPU16 = new Uint16Array(buffer);
        HEAPU32 = new Uint32Array(buffer);
        HEAPF32 = new Float32Array(buffer);
        HEAPF64 = new Float64Array(buffer);
        Module.HEAP8 = HEAP8;
        Module.HEAP16 = HEAP16;
        Module.HEAP32 = HEAP32;
        Module.HEAPU8 = HEAPU8;
        Module.HEAPU16 = HEAPU16;
        Module.HEAPU32 = HEAPU32;
        Module.HEAPF32 = HEAPF32;
        Module.HEAPF64 = HEAPF64;
      }

      return {
        imports: {
          env: {
            "__cargo_web_snippet_285aac3fba72d67cb459d37d4d21aa4fb62598ba": function __cargo_web_snippet_285aac3fba72d67cb459d37d4d21aa4fb62598ba($0) {
              Module.STDWEB_PRIVATE.arena = $0;
            },
            "__cargo_web_snippet_4d66721dd755374fa177d86d1c818bf74cc0be84": function __cargo_web_snippet_4d66721dd755374fa177d86d1c818bf74cc0be84($0, $1) {
              $1 = Module.STDWEB_PRIVATE.to_js($1);
              Module.STDWEB_PRIVATE.from_js($0, function () {
                return $1;
              }());
            },
            "__cargo_web_snippet_515598dacc2aae3ba84e7207f3f75bd28fcbbd15": function __cargo_web_snippet_515598dacc2aae3ba84e7207f3f75bd28fcbbd15($0) {
              var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
              return o instanceof Object;
            },
            "__cargo_web_snippet_5c3091ae7fa9c42123eec37f64de99a5808e7ef2": function __cargo_web_snippet_5c3091ae7fa9c42123eec37f64de99a5808e7ef2($0) {
              var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
              return o instanceof Array;
            },
            "__cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0": function __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0($0) {
              Module.STDWEB_PRIVATE.decrement_refcount($0);
            },
            "__cargo_web_snippet_8c32019649bb581b1b742eeedfc410e2bedd56a6": function __cargo_web_snippet_8c32019649bb581b1b742eeedfc410e2bedd56a6($0, $1) {
              var array = Module.STDWEB_PRIVATE.acquire_js_reference($0);
              Module.STDWEB_PRIVATE.serialize_array($1, array);
            },
            "__cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec": function __cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec($0) {
              $0 = Module.STDWEB_PRIVATE.to_js($0);
              Module.STDWEB_PRIVATE.unregister_raw_value($0);
            },
            "__cargo_web_snippet_f814fda503cb20016f78481f85431d48a7c4e731": function __cargo_web_snippet_f814fda503cb20016f78481f85431d48a7c4e731($0, $1) {
              var object = Module.STDWEB_PRIVATE.acquire_js_reference($0);
              Module.STDWEB_PRIVATE.serialize_object($1, object);
            },
            "__cargo_web_snippet_ff5103e6cc179d13b4c7a785bdce2708fd559fc0": function __cargo_web_snippet_ff5103e6cc179d13b4c7a785bdce2708fd559fc0($0) {
              Module.STDWEB_PRIVATE.tmp = Module.STDWEB_PRIVATE.to_js($0);
            },
            "__web_on_grow": __web_on_grow
          }
        },
        initialize: function initialize(instance) {
          Object.defineProperty(Module, 'instance', {
            value: instance
          });
          Object.defineProperty(Module, 'web_malloc', {
            value: Module.instance.exports.__web_malloc
          });
          Object.defineProperty(Module, 'web_free', {
            value: Module.instance.exports.__web_free
          });
          Object.defineProperty(Module, 'web_table', {
            value: Module.instance.exports.__indirect_function_table
          });

          Module.exports.state = function state(counter) {
            return Module.STDWEB_PRIVATE.acquire_tmp(Module.instance.exports.state(counter));
          };

          Module.exports.increment = function increment(state) {
            return Module.STDWEB_PRIVATE.acquire_tmp(Module.instance.exports.increment(Module.STDWEB_PRIVATE.prepare_any_arg(state)));
          };

          Module.exports.decrement = function decrement(state) {
            return Module.STDWEB_PRIVATE.acquire_tmp(Module.instance.exports.decrement(Module.STDWEB_PRIVATE.prepare_any_arg(state)));
          };

          Module.exports.add = function add(state, b) {
            return Module.STDWEB_PRIVATE.acquire_tmp(Module.instance.exports.add(Module.STDWEB_PRIVATE.prepare_any_arg(state), b));
          };

          __web_on_grow();

          return Module.exports;
        }
      };
    });
  }

  return fetch(bundle).then(function (response) {
    return response.arrayBuffer();
  }).then(function (bytes) {
    return WebAssembly.compile(bytes);
  }).then(function (mod) {
    return __initialize(mod, true);
  });
};
},{}],"../.cache/.cargo-web/bundle-loader-be7369a0583e756f576c1b722e6d7668.js":[function(require,module,exports) {
module.exports = function (bundle) {
  var loader = require("./loader-be7369a0583e756f576c1b722e6d7668.js");

  return loader(bundle);
};
},{"./loader-be7369a0583e756f576c1b722e6d7668.js":"../.cache/.cargo-web/loader-be7369a0583e756f576c1b722e6d7668.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("cargo-web-be7369a0583e756f576c1b722e6d7668",require("../.cache/.cargo-web/bundle-loader-be7369a0583e756f576c1b722e6d7668.js"));b.load([["Cargo.0148b0c8.cargo-web-be7369a0583e756f576c1b722e6d7668","../rustess/Cargo.toml"]]).then(function(){require("../src/index.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/src.7ed060e2.js.map