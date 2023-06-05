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
})({"src/flags.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VNodeFlags = exports.ChildrenFlags = void 0;
var VNodeFlags = {
  // html 标签
  ELEMENT_HTML: 1,
  // SVG 标签
  ELEMENT_SVG: 1 << 1,
  // 普通有状态组件
  COMPONENT_STATEFUL_NORMAL: 1 << 2,
  // 需要被KEEPALIVE的有状态组件
  COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3,
  COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,
  // 函数式组件
  COMPONENT_FUNCTIONAL: 1 << 5,
  TEXT: 1 << 6,
  FRAGMENT: 1 << 7,
  PORTAL: 1 << 8
};

// html 和 svg 都是标签元素，可以用 ELEMENT 表示
exports.VNodeFlags = VNodeFlags;
VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG;
// 普通有状态组件、需要被keepAlive的有状态组件、已经被keepAlive的有状态组件 都是有状态
VNodeFlags.COMPONENT_STATEFUL = VNodeFlags.COMPONENT_STATEFUL_NORMAL | VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE | VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE;
// 有状态组件 和 函数式组件都是“组件”，用 COMPONENT 表示
VNodeFlags.COMPONENT = VNodeFlags.COMPONENT_STATEFUL | VNodeFlags.COMPONENT_FUNCTIONAL;
var ChildrenFlags = {
  // 未知的children类型
  UNKNOW_CHILDREN: 0,
  // 没有children
  NO_CHILDREN: 1,
  SINGLE_VNODE: 1 << 1,
  // children是多个key 的VNode v-for li
  KEYED_VNODES: 1 << 2,
  // 多个没有key的VNode p div
  NODE_KEYED_VNODE: 1 << 3
};
exports.ChildrenFlags = ChildrenFlags;
ChildrenFlags.MULTIPLE_VNODES = ChildrenFlags.KEYED_VNODES | ChildrenFlags.NODE_KEYED_VNODE;
},{}],"src/h.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portal = exports.Fragment = void 0;
exports.h = h;
var _flags = require("./flags");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Fragment = Symbol(); // key 唯一
exports.Fragment = Fragment;
var Portal = Symbol();
exports.Portal = Portal;
function h(tag) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var flags = null;
  if (typeof tag === 'string') {
    // html svg
    flags = tag === 'svg' ? _flags.VNodeFlags.ELEMENT_SVG : _flags.VNodeFlags.ELEMENT_HTML;
  } else if (tag === Fragment) {
    flags = _flags.VNodeFlags.FRAGMENT;
  } else if (tag === Portal) {
    flags = _flags.VNodeFlags.PORTAL;
    tag = data && data.target;
  } else {
    if (tag !== null && _typeof(tag) === 'object') {
      flags = tag.functional ? _flags.VNodeFlags.COMPONENT_FUNCTIONAL : _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL;
    } else if (typeof tag === 'function') {
      flags = tag.prototype && tag.prototype.render ? _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL : _flags.VNodeFlags.COMPONENT_FUNCTIONAL;
    }
  }
  var childFlags = null;
  if (Array.isArray(children)) {
    var _children = children,
      length = _children.length;
    if (length === 0) {
      childFlags = _flags.ChildrenFlags.NO_CHILDREN;
    } else if (length === 1) {
      childFlags = _flags.ChildrenFlags.SINGLE_VNODE;
      children = children[0];
    } else {
      // 2个以上
      childFlags = _flags.ChildrenFlags.KEYED_VNODES; // key 后面再做
      children = normalizeVNodes(children);
    }
  } else if (children === null) {
    childFlags = _flags.ChildrenFlags.NO_CHILDREN;
  } else if (children._isVNode) {
    childFlags = _flags.ChildrenFlags.SINGLE_VNODE;
  } else {
    childFlags = _flags.ChildrenFlags.SINGLE_VNODE;
    children = createTextVNode(children + '');
  }
  return {
    tag: tag,
    _isVNode: true,
    // 区别于其他对象 普通对象 响应式对象...
    el: null,
    flags: flags,
    data: data,
    children: children,
    childFlags: childFlags
  };
}
function normalizeVNodes(children) {
  var newChildren = [];
  for (var i = 0, len = children.length; i < len; i++) {
    var child = children[i];
    if (child.key === null) {
      child.key = '|' + i;
    }
    newChildren.push(child);
  }
  return newChildren;
}
function createTextVNode(text) {
  return {
    _isVNode: true,
    flags: _flags.VNodeFlags.TEXT,
    tag: null,
    children: text,
    childFlags: _flags.ChildrenFlags.NO_CHILDREN
  };
}
},{"./flags":"src/flags.js"}],"src/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;
var _flags = require("./flags");
function render(vnode, container) {
  var prevVNode = container.vnode;
  if (prevVNode == null) {
    if (vnode) {
      // 没有旧的 VNode，使用 `mount` 函数挂载全新的 VNode
      mount(vnode, container);
      // 将新的 VNode 添加到 container.vnode 属性下，这样下一次渲染时旧的 VNode 就存在了
      container.vnode = vnode;
    }
  } else {
    if (vnode) {
      // 有旧的 VNode，则调用 `patch` 函数打补丁
      patch(prevVNode, vnode, container);
      // 更新 container.vnode
      container.vnode = vnode;
    } else {
      // 有旧的 VNode 但是没有新的 VNode，这说明应该移除 DOM，在浏览器中可以使用 removeChild 函数。
      container.removeChild(prevVNode.el);
      container.vnode = null;
    }
  }
}
function mount(vnode, container, isSVG) {
  var flags = vnode.flags;
  if (flags & _flags.VNodeFlags.ELEMENT) {
    // 挂载普通标签
    mountElement(vnode, container, isSVG);
  } else if (flags & _flags.VNodeFlags.COMPONENT) {
    // 挂载组件
    mountComponent(vnode, container, isSVG);
  } else if (flags & _flags.VNodeFlags.TEXT) {
    // 挂载纯文本
    mountText(vnode, container);
  } else if (flags & _flags.VNodeFlags.FRAGMENT) {
    // 挂载 Fragment
    mountFragment(vnode, container, isSVG);
  } else if (flags & _flags.VNodeFlags.PORTAL) {
    // 挂载 Portal
    mountPortal(vnode, container, isSVG);
  }
}
function mountElement(vnode, container, isSVG) {
  isSVG = isSVG || vnode.flags & _flags.VNodeFlags.ELEMENT_SVG;
  var el = isSVG ? document.createElementNS('http://www.w3.org/2000/svg', vnode.tag) : document.createElement(vnode.tag);
  vnode.el = el;
  var data = vnode.data;
  if (data) {
    for (var key in data) {
      switch (key) {
        case 'style':
          for (var k in data.style) {
            el.style[k] = data.style[k];
          }
          break;
        default:
          break;
      }
    }
  }
  var childFlags = vnode.childFlags;
  var children = vnode.children;
  if (childFlags !== _flags.ChildrenFlags.NO_CHILDREN) {
    if (childFlags & _flags.ChildrenFlags.SINGLE_VNODE) {
      mount(children, el, isSVG);
    } else if (childFlags & _flags.ChildrenFlags.MULTIPLE_VNODES) {
      for (var i = 0; i < children.length; i++) {
        mount(children[i], el, isSVG);
      }
    }
  }
  container.appendChild(el);
  vnode.ref && vnode.ref(el);
}
function mountText(vnode, container) {
  var el = document.createTextNode(vnode.children);
  container.appendChild(el);
}
function mountFragment(vnode, container, isSVG) {
  // 拿到 children 和 childFlags
  var children = vnode.children,
    childFlags = vnode.childFlags;
  switch (childFlags) {
    case _flags.ChildrenFlags.SINGLE_VNODE:
      // 如果是单个子节点，则直接调用 mount
      mount(children, container, isSVG);
      break;
    case _flags.ChildrenFlags.NO_CHILDREN:
      // 如果没有子节点，等价于挂载空片段，会创建一个空的文本节点占位
      var placeholder = createTextVNode('');
      mountText(placeholder, container);
      break;
    default:
      // 多个子节点，遍历挂载之
      for (var i = 0; i < children.length; i++) {
        mount(children[i], container, isSVG);
      }
  }
}
function mountComponent(vnode, container, isSVG) {
  if (vnode.flags & _flags.VNodeFlags.COMPONENT_STATEFUL) {
    mountStatefulComponent(vnode, container, isSVG);
  } else {
    mountFunctionalComponent(vnode, container, isSVG);
  }
}
function mountStatefulComponent(vnode, container, isSVG) {
  // 创建组件实例
  var instance = new vnode.tag();
  // 渲染VNode
  instance.$vnode = instance.render();
  // 挂载
  mount(instance.$vnode, container, isSVG);
}
function patch(prevVNode, nextVNode, container) {
  var nextFlags = nextVNode.flags;
  var prevFlags = prevVNode.flags;
  if (prevFlags !== nextFlags) {
    replaceVNode(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.ELEMENT) {
    patchElement(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.COMPONENT) {
    patchComponent(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.TEXT) {
    patchText(prevVNode, nextVNode);
  } else if (nextFlags & _flags.VNodeFlags.FRAGMENT) {
    patchFragment(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.PORTAL) {
    patchPortal(prevVNode, nextVNode);
  }
}
function replaceVNode(prevVNode, nextVNode, container) {
  container.removeChild(prevVNode.el);
  mount(nextVNode, container);
}
function patchElement(prevVNode, nextVNode, container) {
  // tag div -> p replace
  // 新旧VNode的标签不一样
  if (prevVNode.tag !== nextVNode.tag) {
    replaceVNode(prevVNode, nextVNode, container);
    return;
  }
  // 让nextVNode 在没有挂载前 就拿到元素
  var el = nextVNode.el = prevVNode.el;
  console.log(el);
  var prevData = prevVNode.data;
  var nextData = nextVNode.data;

  // 各种情况 封装
  if (nextData) {
    for (var key in nextData) {
      var prevValue = prevData[key];
      var nextValue = nextData[key];
      patchData(el, key, prevValue, nextValue);
    }
  }
  if (prevData) {
    for (var _key in nextData) {
      var _prevValue = prevData[_key];
      if (_prevValue && !nextData.hasOwnProperty(_key)) {
        patchData(el, _key, _prevValue, nextData[_key]);
      }
    }
  }
  switch (prevChildFlags) {
    // 旧的 children 是单个子节点，会执行该 case 语句块
    case _flags.ChildrenFlags.SINGLE_VNODE:
      switch (nextChildFlags) {
        case _flags.ChildrenFlags.SINGLE_VNODE:
          // 新的 children 也是单个子节点时，会执行该 case 语句块
          patch(prevChildren, nextChildren, container);
          break;
        case _flags.ChildrenFlags.NO_CHILDREN:
          // 新的 children 中没有子节点时，会执行该 case 语句块
          break;
        default:
          // 但新的 children 中有多个子节点时，会执行该 case 语句块
          break;
      }
      break;
    // 旧的 children 中没有子节点时，会执行该 case 语句块
    case _flags.ChildrenFlags.NO_CHILDREN:
      switch (nextChildFlags) {
        case _flags.ChildrenFlags.SINGLE_VNODE:
          // 新的 children 也是单个子节点时，会执行该 case 语句块
          break;
        case _flags.ChildrenFlags.NO_CHILDREN:
          // 新的 children 中没有子节点时，会执行该 case 语句块
          break;
        default:
          // 但新的 children 中有多个子节点时，会执行该 case 语句块
          break;
      }
      break;
    // 旧的 children 中有多个子节点时，会执行该 case 语句块
    default:
      switch (nextChildFlags) {
        case _flags.ChildrenFlags.SINGLE_VNODE:
          // 新的 children 也是单个子节点时，会执行该 case 语句块
          break;
        case _flags.ChildrenFlags.NO_CHILDREN:
          // 新的 children 中没有子节点时，会执行该 case 语句块
          break;
        default:
          // 但新的 children 中有多个子节点时，会执行该 case 语句块
          for (var i = 0; i < nextChildren.length; i++) {
            mount(nextChildren[i], container);
          }
          break;
      }
      break;
  }
  // if (nextData) { // 如果有
  //   for (let key in nextData) {
  //     const prevValue = prevData[key]
  //     const nextValue = nextData[key]
  //     switch (key) {
  //       // 处理方法 key setAttribute
  //       case 'style':
  //         for (let k in nextValue) {
  //           el.style[k] = nextValue[k]
  //         }
  //         for (let k in prevValue) {
  //           if (!nextValue.hasOwnProperty(k)) {
  //             el.style[k] = '' // 删除
  //           }
  //         }
  //       default:
  //         break
  //     }
  //   }

  // }
}
},{"./flags":"src/flags.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _h = require("./h");
var _render = _interopRequireDefault(require("./render"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// console.log('hello parcel');
// VNODE 的生成
// 渲染

var handler = function handler() {
  return alert('clicked');
};
var prevVNode = (0, _h.h)('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  },
  onclick: handler
});
var nextVNode = (0, _h.h)('div', {
  style: {
    width: '100px',
    height: '100px',
    border: '1px solid green'
  }
});

// const prevVNode = h('div', null, '旧的VNode')
(0, _render.default)(prevVNode, document.getElementById('app'));
// class MyComponent {
//   render() {
//     return h('div', null, '新的VNode')
//   }
// }
// const nextVNode = h(MyComponent)

setTimeout(function () {
  (0, _render.default)(nextVNode, document.getElementById('app'));
}, 2000);
},{"./h":"src/h.js","./render":"src/render.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60111" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map