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
})({"js/ships.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ships = {
  count: 10,
  next: 'https://swapi.co/api/starships/?page=2',
  previous: null,
  results: [{
    name: 'Executor',
    model: 'Executor-class star dreadnought',
    manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
    cost_in_credits: '1143350000',
    length: '19000',
    max_atmosphering_speed: 'n/a',
    crew: '279144',
    passengers: '38000',
    cargo_capacity: '250000000',
    consumables: '6 years',
    hyperdrive_rating: '2.0',
    MGLT: '40',
    starship_class: 'Star dreadnought',
    pilots: [],
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
    created: '2014-12-15T12:31:42.547000Z',
    edited: '2017-04-19T10:56:06.685592Z',
    url: 'https://swapi.co/api/starships/15/'
  }, {
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost_in_credits: '240000',
    length: '38',
    max_atmosphering_speed: '1000',
    crew: '5',
    passengers: '75',
    cargo_capacity: '180000',
    consumables: '1 month',
    hyperdrive_rating: '1.0',
    MGLT: '70',
    starship_class: 'landing craft',
    pilots: [],
    films: ['https://swapi.co/api/films/1/'],
    created: '2014-12-10T15:48:00.586000Z',
    edited: '2014-12-22T17:35:44.431407Z',
    url: 'https://swapi.co/api/starships/5/'
  }, {
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
    cost_in_credits: '1000000000000',
    length: '120000',
    max_atmosphering_speed: 'n/a',
    crew: '342953',
    passengers: '843342',
    cargo_capacity: '1000000000000',
    consumables: '3 years',
    hyperdrive_rating: '4.0',
    MGLT: '10',
    starship_class: 'Deep Space Mobile Battlestation',
    pilots: [],
    films: ['https://swapi.co/api/films/1/'],
    created: '2014-12-10T16:36:50.509000Z',
    edited: '2014-12-22T17:35:44.452589Z',
    url: 'https://swapi.co/api/starships/9/'
  }, {
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '100000',
    length: '34.37',
    max_atmosphering_speed: '1050',
    crew: '4',
    passengers: '6',
    cargo_capacity: '100000',
    consumables: '2 months',
    hyperdrive_rating: '0.5',
    MGLT: '75',
    starship_class: 'Light freighter',
    pilots: ['https://swapi.co/api/people/13/', 'https://swapi.co/api/people/14/', 'https://swapi.co/api/people/25/', 'https://swapi.co/api/people/31/'],
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/7/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'],
    created: '2014-12-10T16:59:45.094000Z',
    edited: '2014-12-22T17:35:44.464156Z',
    url: 'https://swapi.co/api/starships/10/'
  }, {
    name: 'Y-wing',
    model: 'BTL Y-wing',
    manufacturer: 'Koensayr Manufacturing',
    cost_in_credits: '134999',
    length: '14',
    max_atmosphering_speed: '1000km',
    crew: '2',
    passengers: '0',
    cargo_capacity: '110',
    consumables: '1 week',
    hyperdrive_rating: '1.0',
    MGLT: '80',
    starship_class: 'assault starfighter',
    pilots: [],
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'],
    created: '2014-12-12T11:00:39.817000Z',
    edited: '2014-12-22T17:35:44.479706Z',
    url: 'https://swapi.co/api/starships/11/'
  }, {
    name: 'X-wing',
    model: 'T-65 X-wing',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '149999',
    length: '12.5',
    max_atmosphering_speed: '1050',
    crew: '1',
    passengers: '0',
    cargo_capacity: '110',
    consumables: '1 week',
    hyperdrive_rating: '1.0',
    MGLT: '100',
    starship_class: 'Starfighter',
    pilots: ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/9/', 'https://swapi.co/api/people/18/', 'https://swapi.co/api/people/19/'],
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'],
    created: '2014-12-12T11:19:05.340000Z',
    edited: '2014-12-22T17:35:44.491233Z',
    url: 'https://swapi.co/api/starships/12/'
  }, {
    name: 'TIE Advanced x1',
    model: 'Twin Ion Engine Advanced x1',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: 'unknown',
    length: '9.2',
    max_atmosphering_speed: '1200',
    crew: '1',
    passengers: '0',
    cargo_capacity: '150',
    consumables: '5 days',
    hyperdrive_rating: '1.0',
    MGLT: '105',
    starship_class: 'Starfighter',
    pilots: ['https://swapi.co/api/people/4/'],
    films: ['https://swapi.co/api/films/1/'],
    created: '2014-12-12T11:21:32.991000Z',
    edited: '2014-12-22T17:35:44.549047Z',
    url: 'https://swapi.co/api/starships/13/'
  }, {
    name: 'Slave 1',
    model: 'Firespray-31-class patrol and attack',
    manufacturer: 'Kuat Systems Engineering',
    cost_in_credits: 'unknown',
    length: '21.5',
    max_atmosphering_speed: '1000',
    crew: '1',
    passengers: '6',
    cargo_capacity: '70000',
    consumables: '1 month',
    hyperdrive_rating: '3.0',
    MGLT: '70',
    starship_class: 'Patrol craft',
    pilots: ['https://swapi.co/api/people/22/'],
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/5/'],
    created: '2014-12-15T13:00:56.332000Z',
    edited: '2014-12-22T17:35:44.716273Z',
    url: 'https://swapi.co/api/starships/21/'
  }, {
    name: 'Imperial shuttle',
    model: 'Lambda-class T-4a shuttle',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: '240000',
    length: '20',
    max_atmosphering_speed: '850',
    crew: '6',
    passengers: '20',
    cargo_capacity: '80000',
    consumables: '2 months',
    hyperdrive_rating: '1.0',
    MGLT: '50',
    starship_class: 'Armed government transport',
    pilots: ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/13/', 'https://swapi.co/api/people/14/'],
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
    created: '2014-12-15T13:04:47.235000Z',
    edited: '2014-12-22T17:35:44.795405Z',
    url: 'https://swapi.co/api/starships/22/'
  }, {
    name: 'EF76 Nebulon-B escort frigate',
    model: 'EF76 Nebulon-B escort frigate',
    manufacturer: 'Kuat Drive Yards',
    cost_in_credits: '8500000',
    length: '300',
    max_atmosphering_speed: '800',
    crew: '854',
    passengers: '75',
    cargo_capacity: '6000000',
    consumables: '2 years',
    hyperdrive_rating: '2.0',
    MGLT: '40',
    starship_class: 'Escort ship',
    pilots: [],
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
    created: '2014-12-15T13:06:30.813000Z',
    edited: '2014-12-22T17:35:44.848329Z',
    url: 'https://swapi.co/api/starships/23/'
  }]
};
var shipController = {
  baseUrl: 'https://swapi.co/api/starships/',
  getShips: function getShips() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return ships; // get from API instead of from local
    // const url = page || this.baseUrl;
    // return fetch(url).then((response) => {
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   } else {
    //     return response.json();
    //   }
    // }).catch(function (error) {
    //  console.log(error);
    // });
  },
  getShipByName: function getShipByName(name) {
    return ships.results.find(function (aShip) {
      return aShip.name === name;
    }); // the code in the parenthesis above might look a bit weird if you haven't seen something like that before.
    // It could be re-written like this:
    // function(aShip) {
    //   if (aShip.name === name) {
    //     return aShip;
    //   }
    // }
  },
  getRandomShip: function getRandomShip() {// code to get a random ship here
  },
  getShipsByPassengerCapacity: function getShipsByPassengerCapacity(min, max) {// returns a list of ships that can carry at least min passengers, but no more than max
  }
}; // this code functions exactly the same as the code above.  Just a different way of writing functions!
// const shipController = {
//   getShips: () => ships,
//   getShipByName: name => ships.results.find(aShip => aShip.name === name),
//   getRandomShip: () => {
//     // code to get a random ship here
//   },
//   getShipsByPassengerCapacity: (min, max) => {
//      // returns a list of ships that can carry at least min passengers, but no more than max
//   }
// };

var _default = shipController;
exports.default = _default;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _ships = _interopRequireDefault(require("./ships"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_ships.default.getShips());
console.log(_ships.default.getShipByName("Executor")); // check to see if javascript is working

function component() {
  var element = document.createElement("p");
  element.innerHTML = "Setup Appears to be working &#128521;";
  return element;
}

document.body.appendChild(component()); // shipController.getShips().then((data) => {
//   console.log(data);
// });
},{"./ships":"js/ships.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57255" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map