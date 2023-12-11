// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"guw5L":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "947ee2d63abacbf5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aweyh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lenis = require("@studio-freight/lenis");
var _lenisDefault = parcelHelpers.interopDefault(_lenis);
const lenis = new (0, _lenisDefault.default)({
    lerp: 0.05
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

},{"@studio-freight/lenis":"ggVJc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggVJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>h);
function t(t, e) {
    for(var i = 0; i < e.length; i++){
        var o = e[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, "symbol" == typeof (n = function(t, e) {
            if ("object" != typeof t || null === t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
                var o = i.call(t, "string");
                if ("object" != typeof o) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        }(o.key)) ? n : String(n), o);
    }
    var n;
}
function e(e, i, o) {
    return i && t(e.prototype, i), o && t(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function i() {
    return i = Object.assign ? Object.assign.bind() : function(t) {
        for(var e = 1; e < arguments.length; e++){
            var i = arguments[e];
            for(var o in i)Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    }, i.apply(this, arguments);
}
function o(t, e, i) {
    return Math.max(t, Math.min(e, i));
}
var n = /*#__PURE__*/ function() {
    function t() {}
    var e = t.prototype;
    return e.advance = function(t) {
        var e, i, n, s;
        if (this.isRunning) {
            var r = !1;
            if (this.lerp) this.value = (i = this.value, n = this.to, (1 - (s = 1 - Math.exp(-60 * this.lerp * t))) * i + s * n), Math.round(this.value) === this.to && (this.value = this.to, r = !0);
            else {
                this.currentTime += t;
                var l = o(0, this.currentTime / this.duration, 1), h = (r = l >= 1) ? 1 : this.easing(l);
                this.value = this.from + (this.to - this.from) * h;
            }
            null == (e = this.onUpdate) || e.call(this, this.value, r), r && this.stop();
        }
    }, e.stop = function() {
        this.isRunning = !1;
    }, e.fromTo = function(t, e, i) {
        var o = i.lerp, n = void 0 === o ? .1 : o, s = i.duration, r = void 0 === s ? 1 : s, l = i.easing, h = void 0 === l ? function(t) {
            return t;
        } : l, a = i.onStart, c = i.onUpdate;
        this.from = this.value = t, this.to = e, this.lerp = n, this.duration = r, this.easing = h, this.currentTime = 0, this.isRunning = !0, null == a || a(), this.onUpdate = c;
    }, t;
}(), s = /*#__PURE__*/ function() {
    function t(t) {
        var e, i, o = this, n = void 0 === t ? {} : t, s = n.wrapper, r = n.content, l = n.autoResize, h = void 0 === l || l;
        if (this.resize = function() {
            o.onWrapperResize(), o.onContentResize();
        }, this.onWrapperResize = function() {
            o.wrapper === window ? (o.width = window.innerWidth, o.height = window.innerHeight) : (o.width = o.wrapper.clientWidth, o.height = o.wrapper.clientHeight);
        }, this.onContentResize = function() {
            o.scrollHeight = o.content.scrollHeight, o.scrollWidth = o.content.scrollWidth;
        }, this.wrapper = s, this.content = r, h) {
            var a = (e = this.resize, function() {
                var t = arguments, o = this;
                clearTimeout(i), i = setTimeout(function() {
                    e.apply(o, t);
                }, 250);
            });
            this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(a), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(a), this.contentResizeObserver.observe(this.content);
        }
        this.resize();
    }
    return t.prototype.destroy = function() {
        var t, e;
        null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect();
    }, e(t, [
        {
            key: "limit",
            get: function() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                };
            }
        }
    ]), t;
}(), r = /*#__PURE__*/ function() {
    function t() {
        this.events = {};
    }
    var e = t.prototype;
    return e.emit = function(t) {
        for(var e = this.events[t] || [], i = 0, o = e.length; i < o; i++)e[i].apply(e, [].slice.call(arguments, 1));
    }, e.on = function(t, e) {
        var i, o = this;
        return (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [
            e
        ]), function() {
            var i;
            o.events[t] = null == (i = o.events[t]) ? void 0 : i.filter(function(t) {
                return e !== t;
            });
        };
    }, e.off = function(t, e) {
        var i;
        this.events[t] = null == (i = this.events[t]) ? void 0 : i.filter(function(t) {
            return e !== t;
        });
    }, e.destroy = function() {
        this.events = {};
    }, t;
}(), l = /*#__PURE__*/ function() {
    function t(t, e) {
        var i = this, n = e.wheelMultiplier, s = void 0 === n ? 1 : n, l = e.touchMultiplier, h = void 0 === l ? 2 : l, a = e.normalizeWheel, c = void 0 !== a && a;
        this.onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t, o = e.clientY;
            i.touchStart.x = e.clientX, i.touchStart.y = o, i.lastDelta = {
                x: 0,
                y: 0
            };
        }, this.onTouchMove = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t, o = e.clientX, n = e.clientY, s = -(o - i.touchStart.x) * i.touchMultiplier, r = -(n - i.touchStart.y) * i.touchMultiplier;
            i.touchStart.x = o, i.touchStart.y = n, i.lastDelta = {
                x: s,
                y: r
            }, i.emitter.emit("scroll", {
                deltaX: s,
                deltaY: r,
                event: t
            });
        }, this.onTouchEnd = function(t) {
            i.emitter.emit("scroll", {
                deltaX: i.lastDelta.x,
                deltaY: i.lastDelta.y,
                event: t
            });
        }, this.onWheel = function(t) {
            var e = t.deltaX, n = t.deltaY;
            i.normalizeWheel && (e = o(-100, e, 100), n = o(-100, n, 100)), i.emitter.emit("scroll", {
                deltaX: e *= i.wheelMultiplier,
                deltaY: n *= i.wheelMultiplier,
                event: t
            });
        }, this.element = t, this.wheelMultiplier = s, this.touchMultiplier = h, this.normalizeWheel = c, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new r, this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    var e = t.prototype;
    return e.on = function(t, e) {
        return this.emitter.on(t, e);
    }, e.destroy = function() {
        this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }, t;
}(), h = /*#__PURE__*/ function() {
    function t(t) {
        var e = this, o = void 0 === t ? {} : t, h = o.wrapper, a = void 0 === h ? window : h, c = o.content, u = void 0 === c ? document.documentElement : c, p = o.wheelEventsTarget, d = void 0 === p ? a : p, v = o.eventsTarget, m = void 0 === v ? d : v, f = o.smoothWheel, g = void 0 === f || f, S = o.smoothTouch, y = void 0 !== S && S, w = o.syncTouch, T = void 0 !== w && w, b = o.syncTouchLerp, z = void 0 === b ? .1 : b, _ = o.__iosNoInertiaSyncTouchLerp, M = void 0 === _ ? .4 : _, L = o.touchInertiaMultiplier, E = void 0 === L ? 35 : L, k = o.duration, O = o.easing, R = void 0 === O ? function(t) {
            return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        } : O, W = o.lerp, x = void 0 === W ? !k && .1 : W, C = o.infinite, H = void 0 !== C && C, N = o.orientation, j = void 0 === N ? "vertical" : N, A = o.gestureOrientation, X = void 0 === A ? "vertical" : A, Y = o.touchMultiplier, D = void 0 === Y ? 1 : Y, I = o.wheelMultiplier, P = void 0 === I ? 1 : I, U = o.normalizeWheel, V = void 0 !== U && U, q = o.autoResize, B = void 0 === q || q;
        this.onVirtualScroll = function(t) {
            var o = t.deltaX, n = t.deltaY, s = t.event;
            if (!s.ctrlKey) {
                var r = s.type.includes("touch"), l = s.type.includes("wheel");
                if (!("both" === e.options.gestureOrientation && 0 === o && 0 === n || "vertical" === e.options.gestureOrientation && 0 === n || "horizontal" === e.options.gestureOrientation && 0 === o || r && "vertical" === e.options.gestureOrientation && 0 === e.scroll && !e.options.infinite && n <= 0)) {
                    var h = s.composedPath();
                    if (!(h = h.slice(0, h.indexOf(e.rootElement))).find(function(t) {
                        var e;
                        return (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent")) || r && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-touch")) || l && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-wheel")) || (null == (e = t.classList) ? void 0 : e.contains("lenis"));
                    })) {
                        if (e.isStopped || e.isLocked) s.preventDefault();
                        else {
                            if (e.isSmooth = (e.options.smoothTouch || e.options.syncTouch) && r || e.options.smoothWheel && l, !e.isSmooth) return e.isScrolling = !1, void e.animate.stop();
                            s.preventDefault();
                            var a = n;
                            "both" === e.options.gestureOrientation ? a = Math.abs(n) > Math.abs(o) ? n : o : "horizontal" === e.options.gestureOrientation && (a = o);
                            var c = r && e.options.syncTouch, u = r && "touchend" === s.type && Math.abs(a) > 1;
                            u && (a = e.velocity * e.options.touchInertiaMultiplier), e.scrollTo(e.targetScroll + a, i({
                                programmatic: !1
                            }, c && {
                                lerp: u ? e.syncTouchLerp : e.options.__iosNoInertiaSyncTouchLerp
                            }));
                        }
                    }
                }
            }
        }, this.onNativeScroll = function() {
            if (!e.__preventNextScrollEvent && !e.isScrolling) {
                var t = e.animatedScroll;
                e.animatedScroll = e.targetScroll = e.actualScroll, e.velocity = 0, e.direction = Math.sign(e.animatedScroll - t), e.emit();
            }
        }, window.lenisVersion = "1.0.29", a !== document.documentElement && a !== document.body || (a = window), this.options = {
            wrapper: a,
            content: u,
            wheelEventsTarget: d,
            eventsTarget: m,
            smoothWheel: g,
            smoothTouch: y,
            syncTouch: T,
            syncTouchLerp: z,
            __iosNoInertiaSyncTouchLerp: M,
            touchInertiaMultiplier: E,
            duration: k,
            easing: R,
            lerp: x,
            infinite: H,
            gestureOrientation: X,
            orientation: j,
            touchMultiplier: D,
            wheelMultiplier: P,
            normalizeWheel: V,
            autoResize: B
        }, this.animate = new n, this.emitter = new r, this.dimensions = new s({
            wrapper: a,
            content: u,
            autoResize: B
        }), this.toggleClass("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = T || g || y, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }), this.virtualScroll = new l(m, {
            touchMultiplier: D,
            wheelMultiplier: P,
            normalizeWheel: V
        }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    var h = t.prototype;
    return h.destroy = function() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", !1), this.toggleClass("lenis-smooth", !1), this.toggleClass("lenis-scrolling", !1), this.toggleClass("lenis-stopped", !1), this.toggleClass("lenis-locked", !1);
    }, h.on = function(t, e) {
        return this.emitter.on(t, e);
    }, h.off = function(t, e) {
        return this.emitter.off(t, e);
    }, h.setScroll = function(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
    }, h.resize = function() {
        this.dimensions.resize();
    }, h.emit = function() {
        this.emitter.emit("scroll", this);
    }, h.reset = function() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }, h.start = function() {
        this.isStopped = !1, this.reset();
    }, h.stop = function() {
        this.isStopped = !0, this.animate.stop(), this.reset();
    }, h.raf = function(t) {
        var e = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * e);
    }, h.scrollTo = function(t, e) {
        var i = this, n = void 0 === e ? {} : e, s = n.offset, r = void 0 === s ? 0 : s, l = n.immediate, h = void 0 !== l && l, a = n.lock, c = void 0 !== a && a, u = n.duration, p = void 0 === u ? this.options.duration : u, d = n.easing, v = void 0 === d ? this.options.easing : d, m = n.lerp, f = void 0 === m ? !p && this.options.lerp : m, g = n.onComplete, S = void 0 === g ? null : g, y = n.force, w = n.programmatic, T = void 0 === w || w;
        if (!this.isStopped && !this.isLocked || void 0 !== y && y) {
            if ([
                "top",
                "left",
                "start"
            ].includes(t)) t = 0;
            else if ([
                "bottom",
                "right",
                "end"
            ].includes(t)) t = this.limit;
            else {
                var b, z;
                if ("string" == typeof t ? z = document.querySelector(t) : null != (b = t) && b.nodeType && (z = t), z) {
                    if (this.options.wrapper !== window) {
                        var _ = this.options.wrapper.getBoundingClientRect();
                        r -= this.isHorizontal ? _.left : _.top;
                    }
                    var M = z.getBoundingClientRect();
                    t = (this.isHorizontal ? M.left : M.top) + this.animatedScroll;
                }
            }
            if ("number" == typeof t) {
                if (t += r, t = Math.round(t), this.options.infinite ? T && (this.targetScroll = this.animatedScroll = this.scroll) : t = o(0, t, this.limit), h) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void (null == S || S(this));
                if (!T) {
                    if (t === this.targetScroll) return;
                    this.targetScroll = t;
                }
                this.animate.fromTo(this.animatedScroll, t, {
                    duration: p,
                    easing: v,
                    lerp: f,
                    onStart: function() {
                        c && (i.isLocked = !0), i.isScrolling = !0;
                    },
                    onUpdate: function(t, e) {
                        i.isScrolling = !0, i.velocity = t - i.animatedScroll, i.direction = Math.sign(i.velocity), i.animatedScroll = t, i.setScroll(i.scroll), T && (i.targetScroll = t), e || i.emit(), e && (i.reset(), i.emit(), null == S || S(i), i.__preventNextScrollEvent = !0, requestAnimationFrame(function() {
                            delete i.__preventNextScrollEvent;
                        }));
                    }
                });
            }
        }
    }, h.toggleClass = function(t, e) {
        this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this);
    }, e(t, [
        {
            key: "rootElement",
            get: function() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
            }
        },
        {
            key: "limit",
            get: function() {
                return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
            }
        },
        {
            key: "isHorizontal",
            get: function() {
                return "horizontal" === this.options.orientation;
            }
        },
        {
            key: "actualScroll",
            get: function() {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
            }
        },
        {
            key: "scroll",
            get: function() {
                var t;
                return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
            }
        },
        {
            key: "progress",
            get: function() {
                return 0 === this.limit ? 1 : this.scroll / this.limit;
            }
        },
        {
            key: "isSmooth",
            get: function() {
                return this.__isSmooth;
            },
            set: function(t) {
                this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClass("lenis-smooth", t));
            }
        },
        {
            key: "isScrolling",
            get: function() {
                return this.__isScrolling;
            },
            set: function(t) {
                this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClass("lenis-scrolling", t));
            }
        },
        {
            key: "isStopped",
            get: function() {
                return this.__isStopped;
            },
            set: function(t) {
                this.__isStopped !== t && (this.__isStopped = t, this.toggleClass("lenis-stopped", t));
            }
        },
        {
            key: "isLocked",
            get: function() {
                return this.__isLocked;
            },
            set: function(t) {
                this.__isLocked !== t && (this.__isLocked = t, this.toggleClass("lenis-locked", t));
            }
        },
        {
            key: "className",
            get: function() {
                var t = "lenis";
                return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t;
            }
        }
    ]), t;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["guw5L","aweyh"], "aweyh", "parcelRequire405f")

//# sourceMappingURL=index.3abacbf5.js.map
