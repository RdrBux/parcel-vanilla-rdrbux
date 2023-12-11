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
})({"cmEVz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "63a061720d5d0b16";
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

},{}],"k5ez6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lenis = require("@studio-freight/lenis");
var _lenisDefault = parcelHelpers.interopDefault(_lenis);
var _core = require("@barba/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
var _all = require("gsap/all");
var _app = require("./app");
(0, _gsapDefault.default).registerPlugin((0, _all.ScrollToPlugin));
// Lenis
const lenis = new (0, _lenisDefault.default)({
    lerp: 0.05
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// Barba
function delay(n = 0) {
    return new Promise((resolve)=>{
        setTimeout(resolve, n);
    });
}
function pageTransition() {
    const tl = (0, _gsapDefault.default).timeline({
        defaults: {
            ease: "power4.inOut"
        }
    });
    tl.to(".curtain", {
        scaleY: 1,
        duration: 0.5,
        transformOrigin: "bottom",
        stagger: 0.1
    }).to(".curtain", {
        scaleY: 0,
        duration: 0.5,
        transformOrigin: "top",
        stagger: 0.1,
        delay: 0.2
    });
}
function contentAnimation() {}
(0, _coreDefault.default).init({
    sync: true,
    transitions: [
        {
            async leave (data) {
                lenis.stop();
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },
            async enter (data) {
                lenis.start();
                contentAnimation();
                if (data.next.namespace === "home") (0, _app.init)();
            },
            async once (data) {
                contentAnimation();
            }
        }
    ]
});
(0, _coreDefault.default).hooks.enter((data)=>{
    if (data.next.namespace === "home") return;
    window.scrollTo(0, 0);
});
(0, _coreDefault.default).hooks.afterEnter((data)=>{
    if (data.next.namespace === "home") {
        (0, _app.navButtons)();
        (0, _app.projectsAnim)();
        window.addEventListener("scroll", (0, _app.scrollAnim));
    } else window.removeEventListener("scroll", (0, _app.scrollAnim));
});

},{"@studio-freight/lenis":"ggVJc","@barba/core":"gIWbX","gsap":"fPSuC","gsap/all":"3UJRo","./app":"bNKaB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggVJc":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIWbX":[function(require,module,exports) {
!function(t, n) {
    module.exports = n();
}(this, function() {
    function t(t, n) {
        for(var r = 0; r < n.length; r++){
            var e = n[r];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
        }
    }
    function n(n, r, e) {
        return r && t(n.prototype, r), e && t(n, e), n;
    }
    function r() {
        return (r = Object.assign || function(t) {
            for(var n = 1; n < arguments.length; n++){
                var r = arguments[n];
                for(var e in r)Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
            }
            return t;
        }).apply(this, arguments);
    }
    function e(t, n) {
        t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
    }
    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function o(t, n) {
        return (o = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t;
        })(t, n);
    }
    function u(t, n, r) {
        return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
            } catch (t) {
                return !1;
            }
        }() ? Reflect.construct : function(t, n, r) {
            var e = [
                null
            ];
            e.push.apply(e, n);
            var i = new (Function.bind.apply(t, e));
            return r && o(i, r.prototype), i;
        }).apply(null, arguments);
    }
    function f(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return (f = function(t) {
            if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, r);
            }
            function r() {
                return u(t, arguments, i(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(r, t);
        })(t);
    }
    function s(t, n) {
        try {
            var r = t();
        } catch (t) {
            return n(t);
        }
        return r && r.then ? r.then(void 0, n) : r;
    }
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var c, a = "2.9.7", h = function() {};
    !function(t) {
        t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
    }(c || (c = {}));
    var v = c.off, l = function() {
        function t(t) {
            this.t = t;
        }
        t.getLevel = function() {
            return v;
        }, t.setLevel = function(t) {
            return v = c[t];
        };
        var n = t.prototype;
        return n.error = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.error, c.error, n);
        }, n.warn = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.warn, c.warning, n);
        }, n.info = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.info, c.info, n);
        }, n.debug = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.log, c.debug, n);
        }, n.i = function(n, r, e) {
            r <= t.getLevel() && n.apply(console, [
                "[" + this.t + "] "
            ].concat(e));
        }, t;
    }(), d = O, m = E, p = g, w = x, b = T, y = "/", P = new RegExp([
        "(\\\\.)",
        "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
    ].join("|"), "g");
    function g(t, n) {
        for(var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t));){
            var a = r[0], h = r[1], v = r.index;
            if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;
            else {
                var l = "", d = r[2], m = r[3], p = r[4], w = r[5];
                if (!c && u.length) {
                    var b = u.length - 1, g = u[b];
                    (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b));
                }
                u && (e.push(u), u = "", c = !1);
                var E = m || p, x = l || f;
                e.push({
                    name: d || i++,
                    prefix: l,
                    delimiter: x,
                    optional: "?" === w || "*" === w,
                    repeat: "+" === w || "*" === w,
                    pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
                });
            }
        }
        return (u || o < t.length) && e.push(u + t.substr(o)), e;
    }
    function E(t, n) {
        return function(r, e) {
            var i = t.exec(r);
            if (!i) return !1;
            for(var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++)if (void 0 !== i[c]) {
                var a = n[c - 1];
                f[a.name] = a.repeat ? i[c].split(a.delimiter).map(function(t) {
                    return s(t, a);
                }) : s(i[c], a);
            }
            return {
                path: o,
                index: u,
                params: f
            };
        };
    }
    function x(t, n) {
        for(var r = new Array(t.length), e = 0; e < t.length; e++)"object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
        return function(n, e) {
            for(var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++){
                var s = t[f];
                if ("string" != typeof s) {
                    var c, a = n ? n[s.name] : void 0;
                    if (Array.isArray(a)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
                        if (0 === a.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty');
                        }
                        for(var h = 0; h < a.length; h++){
                            if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
                            i += (0 === h ? s.prefix : s.delimiter) + c;
                        }
                    } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
                        if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"));
                    } else {
                        if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
                        i += s.prefix + c;
                    }
                } else i += s;
            }
            return i;
        };
    }
    function k(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function A(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
    }
    function R(t) {
        return t && t.sensitive ? "" : "i";
    }
    function T(t, n, r) {
        for(var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++){
            var a = t[c];
            if ("string" == typeof a) s += k(a);
            else {
                var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
                n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")";
            }
        }
        if (o) e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";
        else {
            var v = t[t.length - 1], l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
            e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")");
        }
        return new RegExp(s, R(r));
    }
    function O(t, n, r) {
        return t instanceof RegExp ? function(t, n) {
            if (!n) return t;
            var r = t.source.match(/\((?!\?)/g);
            if (r) for(var e = 0; e < r.length; e++)n.push({
                name: e,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null
            });
            return t;
        }(t, n) : Array.isArray(t) ? function(t, n, r) {
            for(var e = [], i = 0; i < t.length; i++)e.push(O(t[i], n, r).source);
            return new RegExp("(?:" + e.join("|") + ")", R(r));
        }(t, n, r) : function(t, n, r) {
            return T(g(t, r), n, r);
        }(t, n, r);
    }
    d.match = function(t, n) {
        var r = [];
        return E(O(t, r, n), r);
    }, d.regexpToFunction = m, d.parse = p, d.compile = function(t, n) {
        return x(g(t, n), n);
    }, d.tokensToFunction = w, d.tokensToRegExp = b;
    var S = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    }, j = new (function() {
        function t() {
            this.o = S, this.u = new DOMParser;
        }
        var n = t.prototype;
        return n.toString = function(t) {
            return t.outerHTML;
        }, n.toDocument = function(t) {
            return this.u.parseFromString(t, "text/html");
        }, n.toElement = function(t) {
            var n = document.createElement("div");
            return n.innerHTML = t, n;
        }, n.getHtml = function(t) {
            return void 0 === t && (t = document), this.toString(t.documentElement);
        }, n.getWrapper = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
        }, n.getContainer = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
        }, n.removeContainer = function(t) {
            document.body.contains(t) && t.parentNode.removeChild(t);
        }, n.addContainer = function(t, n) {
            var r = this.getContainer();
            r ? this.s(t, r) : n.appendChild(t);
        }, n.getNamespace = function(t) {
            void 0 === t && (t = document);
            var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
        }, n.getHref = function(t) {
            if (t.tagName && "a" === t.tagName.toLowerCase()) {
                if ("string" == typeof t.href) return t.href;
                var n = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (n) return this.resolveUrl(n.baseVal || n);
            }
            return null;
        }, n.resolveUrl = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            var e = n.length;
            if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
            var i = document.createElement("base");
            if (i.href = arguments[0], 1 === e) return i.href;
            var o = document.getElementsByTagName("head")[0];
            o.insertBefore(i, o.firstChild);
            for(var u, f = document.createElement("a"), s = 1; s < e; s++)f.href = arguments[s], i.href = u = f.href;
            return o.removeChild(i), u;
        }, n.s = function(t, n) {
            n.parentNode.insertBefore(t, n.nextSibling);
        }, t;
    }()), M = new (function() {
        function t() {
            this.h = [], this.v = -1;
        }
        var e = t.prototype;
        return e.init = function(t, n) {
            this.l = "barba";
            var r = {
                ns: n,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(r), this.v = 0;
            var e = {
                from: this.l,
                index: 0,
                states: [].concat(this.h)
            };
            window.history && window.history.replaceState(e, "", t);
        }, e.change = function(t, n, r) {
            if (r && r.state) {
                var e = r.state, i = e.index;
                n = this.m(this.v - i), this.replace(e.states), this.v = i;
            } else this.add(t, n);
            return n;
        }, e.add = function(t, n) {
            var r = this.size, e = this.p(n), i = {
                ns: "tmp",
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(i), this.v = r;
            var o = {
                from: this.l,
                index: r,
                states: [].concat(this.h)
            };
            switch(e){
                case "push":
                    window.history && window.history.pushState(o, "", t);
                    break;
                case "replace":
                    window.history && window.history.replaceState(o, "", t);
            }
        }, e.update = function(t, n) {
            var e = n || this.v, i = r({}, this.get(e), {}, t);
            this.set(e, i);
        }, e.remove = function(t) {
            t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
        }, e.clear = function() {
            this.h = [], this.v = -1;
        }, e.replace = function(t) {
            this.h = t;
        }, e.get = function(t) {
            return this.h[t];
        }, e.set = function(t, n) {
            return this.h[t] = n;
        }, e.p = function(t) {
            var n = "push", r = t, e = S.prefix + "-" + S.history;
            return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n;
        }, e.m = function(t) {
            return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
        }, n(t, [
            {
                key: "current",
                get: function() {
                    return this.h[this.v];
                }
            },
            {
                key: "state",
                get: function() {
                    return this.h[this.h.length - 1];
                }
            },
            {
                key: "previous",
                get: function() {
                    return this.v < 1 ? null : this.h[this.v - 1];
                }
            },
            {
                key: "size",
                get: function() {
                    return this.h.length;
                }
            }
        ]), t;
    }()), L = function(t, n) {
        try {
            var r = function() {
                if (!n.next.html) return Promise.resolve(t).then(function(t) {
                    var r = n.next;
                    if (t) {
                        var e = j.toElement(t);
                        r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
                            ns: r.namespace
                        });
                        var i = j.toDocument(t);
                        document.title = i.title;
                    }
                });
            }();
            return Promise.resolve(r && r.then ? r.then(function() {}) : void 0);
        } catch (t) {
            return Promise.reject(t);
        }
    }, $ = d, _ = {
        __proto__: null,
        update: L,
        nextTick: function() {
            return new Promise(function(t) {
                window.requestAnimationFrame(t);
            });
        },
        pathToRegexp: $
    }, q = function() {
        return window.location.origin;
    }, B = function(t) {
        return void 0 === t && (t = window.location.href), U(t).port;
    }, U = function(t) {
        var n, r = t.match(/:\d+/);
        if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);
        else {
            var e = r[0].substring(1);
            n = parseInt(e, 10);
        }
        var i, o = t.replace(q(), ""), u = {}, f = o.indexOf("#");
        f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
        var s = o.indexOf("?");
        return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
            hash: i,
            path: o,
            port: n,
            query: u
        };
    }, D = function(t) {
        return t.split("&").reduce(function(t, n) {
            var r = n.split("=");
            return t[r[0]] = r[1], t;
        }, {});
    }, F = function(t) {
        return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
    }, H = {
        __proto__: null,
        getHref: function() {
            return window.location.href;
        },
        getOrigin: q,
        getPort: B,
        getPath: function(t) {
            return void 0 === t && (t = window.location.href), U(t).path;
        },
        parse: U,
        parseQuery: D,
        clean: F
    };
    function I(t, n, r) {
        return void 0 === n && (n = 2e3), new Promise(function(e, i) {
            var o = new XMLHttpRequest;
            o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE) {
                    if (200 === o.status) e(o.responseText);
                    else if (o.status) {
                        var n = {
                            status: o.status,
                            statusText: o.statusText
                        };
                        r(t, n), i(n);
                    }
                }
            }, o.ontimeout = function() {
                var e = new Error("Timeout error [" + n + "]");
                r(t, e), i(e);
            }, o.onerror = function() {
                var n = new Error("Fetch error");
                r(t, n), i(n);
            }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send();
        });
    }
    var C = function(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
    };
    function N(t, n) {
        return void 0 === n && (n = {}), function() {
            for(var r = arguments.length, e = new Array(r), i = 0; i < r; i++)e[i] = arguments[i];
            var o = !1, u = new Promise(function(r, i) {
                n.async = function() {
                    return o = !0, function(t, n) {
                        t ? i(t) : r(n);
                    };
                };
                var u = t.apply(n, e);
                o || (C(u) ? u.then(r, i) : r(u));
            });
            return u;
        };
    }
    var X = new (function(t) {
        function n() {
            var n;
            return (n = t.call(this) || this).logger = new l("@barba/core"), n.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after"
            ], n.registered = new Map, n.init(), n;
        }
        e(n, t);
        var r = n.prototype;
        return r.init = function() {
            var t = this;
            this.registered.clear(), this.all.forEach(function(n) {
                t[n] || (t[n] = function(r, e) {
                    t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({
                        ctx: e || {},
                        fn: r
                    });
                });
            });
        }, r.do = function(t) {
            for(var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)e[i - 1] = arguments[i];
            if (this.registered.has(t)) {
                var o = Promise.resolve();
                return this.registered.get(t).forEach(function(t) {
                    o = o.then(function() {
                        return N(t.fn, t.ctx).apply(void 0, e);
                    });
                }), o.catch(function(r) {
                    n.logger.debug("Hook error [" + t + "]"), n.logger.error(r);
                });
            }
            return Promise.resolve();
        }, r.clear = function() {
            var t = this;
            this.all.forEach(function(n) {
                delete t[n];
            }), this.init();
        }, r.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t = [];
            this.registered.forEach(function(n, r) {
                return t.push(r);
            }), this.logger.info("Registered hooks: " + t.join(","));
        }, n;
    }(h)), z = function() {
        function t(t) {
            if (this.P = [], "boolean" == typeof t) this.g = t;
            else {
                var n = Array.isArray(t) ? t : [
                    t
                ];
                this.P = n.map(function(t) {
                    return $(t);
                });
            }
        }
        return t.prototype.checkHref = function(t) {
            if ("boolean" == typeof this.g) return this.g;
            var n = U(t).path;
            return this.P.some(function(t) {
                return null !== t.exec(n);
            });
        }, t;
    }(), G = function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).k = new Map, r;
        }
        e(n, t);
        var i = n.prototype;
        return i.set = function(t, n, r) {
            return this.k.set(t, {
                action: r,
                request: n
            }), {
                action: r,
                request: n
            };
        }, i.get = function(t) {
            return this.k.get(t);
        }, i.getRequest = function(t) {
            return this.k.get(t).request;
        }, i.getAction = function(t) {
            return this.k.get(t).action;
        }, i.has = function(t) {
            return !this.checkHref(t) && this.k.has(t);
        }, i.delete = function(t) {
            return this.k.delete(t);
        }, i.update = function(t, n) {
            var e = r({}, this.k.get(t), {}, n);
            return this.k.set(t, e), e;
        }, n;
    }(z), Q = function() {
        return !window.history.pushState;
    }, W = function(t) {
        return !t.el || !t.href;
    }, J = function(t) {
        var n = t.event;
        return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
    }, K = function(t) {
        var n = t.el;
        return n.hasAttribute("target") && "_blank" === n.target;
    }, V = function(t) {
        var n = t.el;
        return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
    }, Y = function(t) {
        var n = t.el;
        return void 0 !== n.port && B() !== B(n.href);
    }, Z = function(t) {
        var n = t.el;
        return n.getAttribute && "string" == typeof n.getAttribute("download");
    }, tt = function(t) {
        return t.el.hasAttribute(S.prefix + "-" + S.prevent);
    }, nt = function(t) {
        return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
    }, rt = function(t) {
        var n = t.href;
        return F(n) === F() && B(n) === B();
    }, et = function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).suite = [], r.tests = new Map, r.init(), r;
        }
        e(n, t);
        var r = n.prototype;
        return r.init = function() {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1);
        }, r.add = function(t, n, r) {
            void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
        }, r.run = function(t, n, r, e) {
            return this.tests.get(t)({
                el: n,
                event: r,
                href: e
            });
        }, r.checkLink = function(t, n, r) {
            var e = this;
            return this.suite.some(function(i) {
                return e.run(i, t, n, r);
            });
        }, n;
    }(z), it = function(t) {
        function n(r, e) {
            var i;
            void 0 === e && (e = "Barba error");
            for(var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++)u[f - 2] = arguments[f];
            return (i = t.call.apply(t, [
                this
            ].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }(i), n), i.name = "BarbaError", i;
        }
        return e(n, t), n;
    }(f(Error)), ot = function() {
        function t(t) {
            void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [
                {
                    name: "namespace",
                    type: "strings"
                },
                {
                    name: "custom",
                    type: "function"
                }
            ], t && (this.all = this.all.concat(t)), this.update();
        }
        var n = t.prototype;
        return n.add = function(t, n) {
            switch(t){
                case "rule":
                    this.A.splice(n.position || 0, 0, n.value);
                    break;
                case "transition":
                default:
                    this.all.push(n);
            }
            this.update();
        }, n.resolve = function(t, n) {
            var r = this;
            void 0 === n && (n = {});
            var e = n.once ? this.once : this.page;
            e = e.filter(n.self ? function(t) {
                return t.name && "self" === t.name;
            } : function(t) {
                return !t.name || "self" !== t.name;
            });
            var i = new Map, o = e.find(function(e) {
                var o = !0, u = {};
                return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach(function(n) {
                    o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to")));
                }), i.set(e, u), o);
            }), u = i.get(o), f = [];
            if (f.push(n.once ? "once" : "page"), n.self && f.push("self"), u) {
                var s, c = [
                    o
                ];
                Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, [
                    "Transition found [" + f.join(",") + "]"
                ].concat(c));
            } else this.logger.info("No transition found [" + f.join(",") + "]");
            return o;
        }, n.update = function() {
            var t = this;
            this.all = this.all.map(function(n) {
                return t.T(n);
            }).sort(function(t, n) {
                return t.priority - n.priority;
            }).reverse().map(function(t) {
                return delete t.priority, t;
            }), this.page = this.all.filter(function(t) {
                return void 0 !== t.leave || void 0 !== t.enter;
            }), this.once = this.all.filter(function(t) {
                return void 0 !== t.once;
            });
        }, n.R = function(t, n, r, e, i) {
            var o = !0, u = !1, f = t, s = n.name, c = s, a = s, h = s, v = i ? f[i] : f, l = "to" === i ? r.next : r.current;
            if (i ? v && v[s] : v[s]) {
                switch(n.type){
                    case "strings":
                    default:
                        var d = Array.isArray(v[c]) ? v[c] : [
                            v[c]
                        ];
                        l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1);
                        break;
                    case "object":
                        var m = Array.isArray(v[a]) ? v[a] : [
                            v[a]
                        ];
                        l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
                        break;
                    case "function":
                        v[h](r) ? u = !0 : o = !1;
                }
                u && (i ? (e[i] = e[i] || {}, e[i][s] = f[i][s]) : e[s] = f[s]);
            }
            return o;
        }, n.O = function(t, n, r) {
            var e = 0;
            return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e;
        }, n.T = function(t) {
            var n = this;
            t.priority = 0;
            var r = 0;
            return this.A.forEach(function(e, i) {
                r += n.O(t, e.name, i + 1);
            }), t.priority = r, t;
        }, t;
    }(), ut = function() {
        function t(t) {
            void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t);
        }
        var r = t.prototype;
        return r.get = function(t, n) {
            return this.store.resolve(t, n);
        }, r.doOnce = function(t) {
            var n = t.data, r = t.transition;
            try {
                var e = function() {
                    i.S = !1;
                }, i = this, o = r || {};
                i.S = !0;
                var u = s(function() {
                    return Promise.resolve(i.j("beforeOnce", n, o)).then(function() {
                        return Promise.resolve(i.once(n, o)).then(function() {
                            return Promise.resolve(i.j("afterOnce", n, o)).then(function() {});
                        });
                    });
                }, function(t) {
                    i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t);
                });
                return Promise.resolve(u && u.then ? u.then(e) : e());
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.doPage = function(t) {
            var n = t.data, r = t.transition, e = t.page, i = t.wrapper;
            try {
                var o = function(t) {
                    if (u) return t;
                    f.S = !1;
                }, u = !1, f = this, c = r || {}, a = !0 === c.sync || !1;
                f.S = !0;
                var h = s(function() {
                    function t() {
                        return Promise.resolve(f.j("before", n, c)).then(function() {
                            var t = !1;
                            function r(r) {
                                return t ? r : Promise.resolve(f.remove(n)).then(function() {
                                    return Promise.resolve(f.j("after", n, c)).then(function() {});
                                });
                            }
                            var o = function() {
                                if (a) return s(function() {
                                    return Promise.resolve(f.add(n, i)).then(function() {
                                        return Promise.resolve(f.j("beforeLeave", n, c)).then(function() {
                                            return Promise.resolve(f.j("beforeEnter", n, c)).then(function() {
                                                return Promise.resolve(Promise.all([
                                                    f.leave(n, c),
                                                    f.enter(n, c)
                                                ])).then(function() {
                                                    return Promise.resolve(f.j("afterLeave", n, c)).then(function() {
                                                        return Promise.resolve(f.j("afterEnter", n, c)).then(function() {});
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }, function(t) {
                                    if (f.M(t)) throw new it(t, "Transition error [sync]");
                                });
                                var r = function(r) {
                                    return t ? r : s(function() {
                                        var t = function() {
                                            if (!1 !== o) return Promise.resolve(f.add(n, i)).then(function() {
                                                return Promise.resolve(f.j("beforeEnter", n, c)).then(function() {
                                                    return Promise.resolve(f.enter(n, c, o)).then(function() {
                                                        return Promise.resolve(f.j("afterEnter", n, c)).then(function() {});
                                                    });
                                                });
                                            });
                                        }();
                                        if (t && t.then) return t.then(function() {});
                                    }, function(t) {
                                        if (f.M(t)) throw new it(t, "Transition error [before/after/enter]");
                                    });
                                }, o = !1, u = s(function() {
                                    return Promise.resolve(f.j("beforeLeave", n, c)).then(function() {
                                        return Promise.resolve(Promise.all([
                                            f.leave(n, c),
                                            L(e, n)
                                        ]).then(function(t) {
                                            return t[0];
                                        })).then(function(t) {
                                            return o = t, Promise.resolve(f.j("afterLeave", n, c)).then(function() {});
                                        });
                                    });
                                }, function(t) {
                                    if (f.M(t)) throw new it(t, "Transition error [before/after/leave]");
                                });
                                return u && u.then ? u.then(r) : r(u);
                            }();
                            return o && o.then ? o.then(r) : r(o);
                        });
                    }
                    var r = function() {
                        if (a) return Promise.resolve(L(e, n)).then(function() {});
                    }();
                    return r && r.then ? r.then(t) : t();
                }, function(t) {
                    if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t;
                    throw f.logger.debug("Transition error [page]"), f.logger.error(t), t;
                });
                return Promise.resolve(h && h.then ? h.then(o) : o(h));
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.once = function(t, n) {
            try {
                return Promise.resolve(X.do("once", t, n)).then(function() {
                    return n.once ? N(n.once, n)(t) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.leave = function(t, n) {
            try {
                return Promise.resolve(X.do("leave", t, n)).then(function() {
                    return n.leave ? N(n.leave, n)(t) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.enter = function(t, n, r) {
            try {
                return Promise.resolve(X.do("enter", t, n)).then(function() {
                    return n.enter ? N(n.enter, n)(t, r) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.add = function(t, n) {
            try {
                return j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve();
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.remove = function(t) {
            try {
                return j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve();
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.M = function(t) {
            return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
        }, r.j = function(t, n, r) {
            try {
                return Promise.resolve(X.do(t, n, r)).then(function() {
                    return r[t] ? N(r[t], r)(n) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, n(t, [
            {
                key: "isRunning",
                get: function() {
                    return this.S;
                },
                set: function(t) {
                    this.S = t;
                }
            },
            {
                key: "hasOnce",
                get: function() {
                    return this.store.once.length > 0;
                }
            },
            {
                key: "hasSelf",
                get: function() {
                    return this.store.all.some(function(t) {
                        return "self" === t.name;
                    });
                }
            },
            {
                key: "shouldWait",
                get: function() {
                    return this.store.all.some(function(t) {
                        return t.to && !t.to.route || t.sync;
                    });
                }
            }
        ]), t;
    }(), ft = function() {
        function t(t) {
            var n = this;
            this.names = [
                "beforeLeave",
                "afterLeave",
                "beforeEnter",
                "afterEnter"
            ], this.byNamespace = new Map, 0 !== t.length && (t.forEach(function(t) {
                n.byNamespace.set(t.namespace, t);
            }), this.names.forEach(function(t) {
                X[t](n.L(t));
            }));
        }
        return t.prototype.L = function(t) {
            var n = this;
            return function(r) {
                var e = t.match(/enter/i) ? r.next : r.current, i = n.byNamespace.get(e.namespace);
                return i && i[t] ? N(i[t], i)(r) : Promise.resolve();
            };
        }, t;
    }();
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
        var n = this;
        do {
            if (n.matches(t)) return n;
            n = n.parentElement || n.parentNode;
        }while (null !== n && 1 === n.nodeType);
        return null;
    });
    var st = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    };
    return new (function() {
        function t() {
            this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
        }
        var e = t.prototype;
        return e.use = function(t, n) {
            var r = this.plugins;
            r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
        }, e.init = function(t) {
            var n = void 0 === t ? {} : t, e = n.transitions, i = void 0 === e ? [] : e, o = n.views, u = void 0 === o ? [] : o, f = n.schema, s = void 0 === f ? S : f, c = n.requestError, a = n.timeout, h = void 0 === a ? 2e3 : a, v = n.cacheIgnore, d = void 0 !== v && v, m = n.prefetchIgnore, p = void 0 !== m && m, w = n.preventRunning, b = void 0 !== w && w, y = n.prevent, P = void 0 === y ? null : y, g = n.debug, E = n.logLevel;
            if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach(function(t) {
                S[t] && (S[t] = s[t]);
            }), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x = this.data.current;
            if (!x.container) throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) {
                if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", P);
            }
            this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(t) {
                return t.init();
            });
            var k = this.data;
            k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q();
        }, e.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
        }, e.force = function(t) {
            window.location.assign(t);
        }, e.go = function(t, n, r) {
            var e;
            if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t);
            else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e);
        }, e.once = function(t) {
            try {
                var n = this;
                return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function() {
                    function r() {
                        return Promise.resolve(n.hooks.do("afterEnter", t)).then(function() {});
                    }
                    var e = function() {
                        if (n.transitions.hasOnce) {
                            var r = n.transitions.get(t, {
                                once: !0
                            });
                            return Promise.resolve(n.transitions.doOnce({
                                transition: r,
                                data: t
                            })).then(function() {});
                        }
                    }();
                    return e && e.then ? e.then(r) : r();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, e.page = function(t, n, e) {
            try {
                var i = function() {
                    var t = o.data;
                    return Promise.resolve(o.hooks.do("page", t)).then(function() {
                        var n = s(function() {
                            var n = o.transitions.get(t, {
                                once: !1,
                                self: e
                            });
                            return Promise.resolve(o.transitions.doPage({
                                data: t,
                                page: u,
                                transition: n,
                                wrapper: o._
                            })).then(function() {
                                o.q();
                            });
                        }, function() {
                            0 === l.getLevel() && o.force(t.current.url.href);
                        });
                        if (n && n.then) return n.then(function() {});
                    });
                }, o = this;
                o.data.next.url = r({
                    href: t
                }, o.url.parse(t)), o.data.trigger = n;
                var u = o.cache.has(t) ? o.cache.update(t, {
                    action: "click"
                }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request, f = function() {
                    if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then(function() {});
                }();
                return Promise.resolve(f && f.then ? f.then(i) : i());
            } catch (t) {
                return Promise.reject(t);
            }
        }, e.onRequestError = function(t) {
            this.transitions.isRunning = !1;
            for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++)r[e - 1] = arguments[e];
            var i = r[0], o = r[1], u = this.cache.getAction(i);
            return this.cache.delete(i), this.$ && !1 === this.$(t, u, i, o) || "click" === u && this.force(i), false;
        }, e.prefetch = function(t) {
            var n = this;
            this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t) {
                n.logger.error(t);
            }), "prefetch");
        }, e.F = function() {
            !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
        }, e.H = function() {
            !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
        }, e.B = function(t) {
            var n = this, r = this.I(t);
            if (r) {
                var e = this.dom.getHref(r);
                this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch(function(t) {
                    n.logger.error(t);
                }), "enter");
            }
        }, e.U = function(t) {
            var n = this.I(t);
            if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t);
        }, e.D = function(t) {
            this.go(this.url.getHref(), "popstate", t);
        }, e.I = function(t) {
            for(var n = t.target; n && !this.dom.getHref(n);)n = n.parentNode;
            if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
        }, e.q = function() {
            var t = this.url.getHref(), n = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: r({
                    href: t
                }, this.url.parse(t))
            };
            this.C = {
                current: n,
                next: r({}, this.schemaPage),
                trigger: void 0
            }, this.hooks.do("reset", this.data);
        }, n(t, [
            {
                key: "data",
                get: function() {
                    return this.C;
                }
            },
            {
                key: "wrapper",
                get: function() {
                    return this._;
                }
            }
        ]), t;
    }());
});

},{}]},["cmEVz","k5ez6"], "k5ez6", "parcelRequire405f")

//# sourceMappingURL=index.0d5d0b16.js.map
