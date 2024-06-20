function O1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
var vd =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Zr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sg = { exports: {} },
  na = {},
  bg = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fi = Symbol.for("react.element"),
  j1 = Symbol.for("react.portal"),
  $1 = Symbol.for("react.fragment"),
  L1 = Symbol.for("react.strict_mode"),
  A1 = Symbol.for("react.profiler"),
  F1 = Symbol.for("react.provider"),
  M1 = Symbol.for("react.context"),
  I1 = Symbol.for("react.forward_ref"),
  z1 = Symbol.for("react.suspense"),
  B1 = Symbol.for("react.memo"),
  V1 = Symbol.for("react.lazy"),
  Ap = Symbol.iterator;
function H1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ap && e[Ap]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Eg = Object.assign,
  _g = {};
function Zo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _g),
    (this.updater = n || Cg);
}
Zo.prototype.isReactComponent = {};
Zo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kg() {}
kg.prototype = Zo.prototype;
function wd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _g),
    (this.updater = n || Cg);
}
var xd = (wd.prototype = new kg());
xd.constructor = wd;
Eg(xd, Zo.prototype);
xd.isPureReactComponent = !0;
var Fp = Array.isArray,
  Rg = Object.prototype.hasOwnProperty,
  Sd = { current: null },
  Dg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pg(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Rg.call(t, r) && !Dg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: fi,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Sd.current,
  };
}
function W1(e, t) {
  return {
    $$typeof: fi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fi;
}
function U1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Mp = /\/+/g;
function ac(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? U1("" + e.key)
    : t.toString(36);
}
function tl(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fi:
          case j1:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ac(i, 0) : r),
      Fp(o)
        ? ((n = ""),
          e != null && (n = e.replace(Mp, "$&/") + "/"),
          tl(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (bd(o) &&
            (o = W1(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Mp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Fp(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + ac(s, l);
      i += tl(s, t, n, a, o);
    }
  else if (((a = H1(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + ac(s, l++)), (i += tl(s, t, n, a, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Di(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    tl(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function Y1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pt = { current: null },
  nl = { transition: null },
  q1 = {
    ReactCurrentDispatcher: pt,
    ReactCurrentBatchConfig: nl,
    ReactCurrentOwner: Sd,
  };
function Tg() {
  throw Error("act(...) is not supported in production builds of React.");
}
fe.Children = {
  map: Di,
  forEach: function (e, t, n) {
    Di(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Di(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Di(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
fe.Component = Zo;
fe.Fragment = $1;
fe.Profiler = A1;
fe.PureComponent = wd;
fe.StrictMode = L1;
fe.Suspense = z1;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q1;
fe.act = Tg;
fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Eg({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Sd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Rg.call(t, a) &&
        !Dg.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: fi, type: e.type, key: o, ref: s, props: r, _owner: i };
};
fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: M1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: F1, _context: e }),
    (e.Consumer = e)
  );
};
fe.createElement = Pg;
fe.createFactory = function (e) {
  var t = Pg.bind(null, e);
  return (t.type = e), t;
};
fe.createRef = function () {
  return { current: null };
};
fe.forwardRef = function (e) {
  return { $$typeof: I1, render: e };
};
fe.isValidElement = bd;
fe.lazy = function (e) {
  return { $$typeof: V1, _payload: { _status: -1, _result: e }, _init: Y1 };
};
fe.memo = function (e, t) {
  return { $$typeof: B1, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function (e) {
  var t = nl.transition;
  nl.transition = {};
  try {
    e();
  } finally {
    nl.transition = t;
  }
};
fe.unstable_act = Tg;
fe.useCallback = function (e, t) {
  return pt.current.useCallback(e, t);
};
fe.useContext = function (e) {
  return pt.current.useContext(e);
};
fe.useDebugValue = function () {};
fe.useDeferredValue = function (e) {
  return pt.current.useDeferredValue(e);
};
fe.useEffect = function (e, t) {
  return pt.current.useEffect(e, t);
};
fe.useId = function () {
  return pt.current.useId();
};
fe.useImperativeHandle = function (e, t, n) {
  return pt.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function (e, t) {
  return pt.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function (e, t) {
  return pt.current.useLayoutEffect(e, t);
};
fe.useMemo = function (e, t) {
  return pt.current.useMemo(e, t);
};
fe.useReducer = function (e, t, n) {
  return pt.current.useReducer(e, t, n);
};
fe.useRef = function (e) {
  return pt.current.useRef(e);
};
fe.useState = function (e) {
  return pt.current.useState(e);
};
fe.useSyncExternalStore = function (e, t, n) {
  return pt.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function () {
  return pt.current.useTransition();
};
fe.version = "18.3.1";
bg.exports = fe;
var x = bg.exports;
const ra = Zr(x),
  Ng = O1({ __proto__: null, default: ra }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var K1 = x,
  G1 = Symbol.for("react.element"),
  X1 = Symbol.for("react.fragment"),
  Q1 = Object.prototype.hasOwnProperty,
  J1 = K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Z1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Og(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Q1.call(t, r) && !Z1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: G1,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: J1.current,
  };
}
na.Fragment = X1;
na.jsx = Og;
na.jsxs = Og;
Sg.exports = na;
var g = Sg.exports,
  Zc = {},
  jg = { exports: {} },
  At = {},
  $g = { exports: {} },
  Lg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, _) {
    var $ = k.length;
    k.push(_);
    e: for (; 0 < $; ) {
      var O = ($ - 1) >>> 1,
        I = k[O];
      if (0 < o(I, _)) (k[O] = _), (k[$] = I), ($ = O);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var _ = k[0],
      $ = k.pop();
    if ($ !== _) {
      k[0] = $;
      e: for (var O = 0, I = k.length, q = I >>> 1; O < q; ) {
        var Q = 2 * (O + 1) - 1,
          ee = k[Q],
          ne = Q + 1,
          te = k[ne];
        if (0 > o(ee, $))
          ne < I && 0 > o(te, ee)
            ? ((k[O] = te), (k[ne] = $), (O = ne))
            : ((k[O] = ee), (k[Q] = $), (O = Q));
        else if (ne < I && 0 > o(te, $)) (k[O] = te), (k[ne] = $), (O = ne);
        else break e;
      }
    }
    return _;
  }
  function o(k, _) {
    var $ = k.sortIndex - _.sortIndex;
    return $ !== 0 ? $ : k.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    m = !1,
    p = !1,
    h = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(k) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= k)
        r(c), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(c);
    }
  }
  function b(k) {
    if (((h = !1), y(k), !p))
      if (n(a) !== null) (p = !0), P(C);
      else {
        var _ = n(c);
        _ !== null && T(b, _.startTime - k);
      }
  }
  function C(k, _) {
    (p = !1), h && ((h = !1), w(D), (D = -1)), (m = !0);
    var $ = f;
    try {
      for (
        y(_), d = n(a);
        d !== null && (!(d.expirationTime > _) || (k && !M()));

      ) {
        var O = d.callback;
        if (typeof O == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var I = O(d.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof I == "function" ? (d.callback = I) : d === n(a) && r(a),
            y(_);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var q = !0;
      else {
        var Q = n(c);
        Q !== null && T(b, Q.startTime - _), (q = !1);
      }
      return q;
    } finally {
      (d = null), (f = $), (m = !1);
    }
  }
  var E = !1,
    R = null,
    D = -1,
    L = 5,
    N = -1;
  function M() {
    return !(e.unstable_now() - N < L);
  }
  function B() {
    if (R !== null) {
      var k = e.unstable_now();
      N = k;
      var _ = !0;
      try {
        _ = R(!0, k);
      } finally {
        _ ? V() : ((E = !1), (R = null));
      }
    } else E = !1;
  }
  var V;
  if (typeof v == "function")
    V = function () {
      v(B);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      j = A.port2;
    (A.port1.onmessage = B),
      (V = function () {
        j.postMessage(null);
      });
  } else
    V = function () {
      S(B, 0);
    };
  function P(k) {
    (R = k), E || ((E = !0), V());
  }
  function T(k, _) {
    D = S(function () {
      k(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || m || ((p = !0), P(C));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = f;
      }
      var $ = f;
      f = _;
      try {
        return k();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, _) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var $ = f;
      f = k;
      try {
        return _();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (k, _, $) {
      var O = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? O + $ : O))
          : ($ = O),
        k)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = $ + I),
        (k = {
          id: u++,
          callback: _,
          priorityLevel: k,
          startTime: $,
          expirationTime: I,
          sortIndex: -1,
        }),
        $ > O
          ? ((k.sortIndex = $),
            t(c, k),
            n(a) === null &&
              k === n(c) &&
              (h ? (w(D), (D = -1)) : (h = !0), T(b, $ - O)))
          : ((k.sortIndex = I), t(a, k), p || m || ((p = !0), P(C))),
        k
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (k) {
      var _ = f;
      return function () {
        var $ = f;
        f = _;
        try {
          return k.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(Lg);
$g.exports = Lg;
var ex = $g.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tx = x,
  Lt = ex;
function H(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ag = new Set(),
  Vs = {};
function eo(e, t) {
  zo(e, t), zo(e + "Capture", t);
}
function zo(e, t) {
  for (Vs[e] = t, e = 0; e < t.length; e++) Ag.add(t[e]);
}
var In = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  eu = Object.prototype.hasOwnProperty,
  nx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ip = {},
  zp = {};
function rx(e) {
  return eu.call(zp, e)
    ? !0
    : eu.call(Ip, e)
    ? !1
    : nx.test(e)
    ? (zp[e] = !0)
    : ((Ip[e] = !0), !1);
}
function ox(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sx(e, t, n, r) {
  if (t === null || typeof t > "u" || ox(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function mt(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ze[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ze[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ze[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ze[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ze[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ze[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ze[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cd = /[\-:]([a-z])/g;
function Ed(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cd, Ed);
    Ze[t] = new mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cd, Ed);
    Ze[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cd, Ed);
  Ze[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ze[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ze[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _d(e, t, n, r) {
  var o = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sx(t, n, o, r) && (n = null),
    r || o === null
      ? rx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wn = tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pi = Symbol.for("react.element"),
  yo = Symbol.for("react.portal"),
  vo = Symbol.for("react.fragment"),
  kd = Symbol.for("react.strict_mode"),
  tu = Symbol.for("react.profiler"),
  Fg = Symbol.for("react.provider"),
  Mg = Symbol.for("react.context"),
  Rd = Symbol.for("react.forward_ref"),
  nu = Symbol.for("react.suspense"),
  ru = Symbol.for("react.suspense_list"),
  Dd = Symbol.for("react.memo"),
  Jn = Symbol.for("react.lazy"),
  Ig = Symbol.for("react.offscreen"),
  Bp = Symbol.iterator;
function hs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bp && e[Bp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var je = Object.assign,
  cc;
function Ds(e) {
  if (cc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      cc = (t && t[1]) || "";
    }
  return (
    `
` +
    cc +
    e
  );
}
var uc = !1;
function dc(e, t) {
  if (!e || uc) return "";
  uc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (uc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ds(e) : "";
}
function ix(e) {
  switch (e.tag) {
    case 5:
      return Ds(e.type);
    case 16:
      return Ds("Lazy");
    case 13:
      return Ds("Suspense");
    case 19:
      return Ds("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = dc(e.type, !1)), e;
    case 11:
      return (e = dc(e.type.render, !1)), e;
    case 1:
      return (e = dc(e.type, !0)), e;
    default:
      return "";
  }
}
function ou(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vo:
      return "Fragment";
    case yo:
      return "Portal";
    case tu:
      return "Profiler";
    case kd:
      return "StrictMode";
    case nu:
      return "Suspense";
    case ru:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mg:
        return (e.displayName || "Context") + ".Consumer";
      case Fg:
        return (e._context.displayName || "Context") + ".Provider";
      case Rd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Dd:
        return (
          (t = e.displayName || null), t !== null ? t : ou(e.type) || "Memo"
        );
      case Jn:
        (t = e._payload), (e = e._init);
        try {
          return ou(e(t));
        } catch {}
    }
  return null;
}
function lx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ou(t);
    case 8:
      return t === kd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function zg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ax(e) {
  var t = zg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ti(e) {
  e._valueTracker || (e._valueTracker = ax(e));
}
function Bg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = zg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function su(e, t) {
  var n = t.checked;
  return je({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Vg(e, t) {
  (t = t.checked), t != null && _d(e, "checked", t, !1);
}
function iu(e, t) {
  Vg(e, t);
  var n = hr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? lu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && lu(e, t.type, hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function lu(e, t, n) {
  (t !== "number" || vl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ps = Array.isArray;
function To(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function au(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return je({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (Ps(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: hr(n) };
}
function Hg(e, t) {
  var n = hr(t.value),
    r = hr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Up(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ni,
  Ug = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ni = Ni || document.createElement("div"),
          Ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ni.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Os = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Os).forEach(function (e) {
  cx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Os[t] = Os[e]);
  });
});
function Yg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Os.hasOwnProperty(e) && Os[e])
    ? ("" + t).trim()
    : t + "px";
}
function qg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Yg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ux = je(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function uu(e, t) {
  if (t) {
    if (ux[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function du(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fu = null;
function Pd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pu = null,
  No = null,
  Oo = null;
function Yp(e) {
  if ((e = hi(e))) {
    if (typeof pu != "function") throw Error(H(280));
    var t = e.stateNode;
    t && ((t = aa(t)), pu(e.stateNode, e.type, t));
  }
}
function Kg(e) {
  No ? (Oo ? Oo.push(e) : (Oo = [e])) : (No = e);
}
function Gg() {
  if (No) {
    var e = No,
      t = Oo;
    if (((Oo = No = null), Yp(e), t)) for (e = 0; e < t.length; e++) Yp(t[e]);
  }
}
function Xg(e, t) {
  return e(t);
}
function Qg() {}
var fc = !1;
function Jg(e, t, n) {
  if (fc) return e(t, n);
  fc = !0;
  try {
    return Xg(e, t, n);
  } finally {
    (fc = !1), (No !== null || Oo !== null) && (Qg(), Gg());
  }
}
function Ws(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = aa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var mu = !1;
if (In)
  try {
    var gs = {};
    Object.defineProperty(gs, "passive", {
      get: function () {
        mu = !0;
      },
    }),
      window.addEventListener("test", gs, gs),
      window.removeEventListener("test", gs, gs);
  } catch {
    mu = !1;
  }
function dx(e, t, n, r, o, s, i, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var js = !1,
  wl = null,
  xl = !1,
  hu = null,
  fx = {
    onError: function (e) {
      (js = !0), (wl = e);
    },
  };
function px(e, t, n, r, o, s, i, l, a) {
  (js = !1), (wl = null), dx.apply(fx, arguments);
}
function mx(e, t, n, r, o, s, i, l, a) {
  if ((px.apply(this, arguments), js)) {
    if (js) {
      var c = wl;
      (js = !1), (wl = null);
    } else throw Error(H(198));
    xl || ((xl = !0), (hu = c));
  }
}
function to(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qp(e) {
  if (to(e) !== e) throw Error(H(188));
}
function hx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = to(e)), t === null)) throw Error(H(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return qp(o), e;
        if (s === r) return qp(o), t;
        s = s.sibling;
      }
      throw Error(H(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function ey(e) {
  return (e = hx(e)), e !== null ? ty(e) : null;
}
function ty(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ty(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ny = Lt.unstable_scheduleCallback,
  Kp = Lt.unstable_cancelCallback,
  gx = Lt.unstable_shouldYield,
  yx = Lt.unstable_requestPaint,
  ze = Lt.unstable_now,
  vx = Lt.unstable_getCurrentPriorityLevel,
  Td = Lt.unstable_ImmediatePriority,
  ry = Lt.unstable_UserBlockingPriority,
  Sl = Lt.unstable_NormalPriority,
  wx = Lt.unstable_LowPriority,
  oy = Lt.unstable_IdlePriority,
  oa = null,
  Cn = null;
function xx(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(oa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tn = Math.clz32 ? Math.clz32 : Cx,
  Sx = Math.log,
  bx = Math.LN2;
function Cx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sx(e) / bx) | 0)) | 0;
}
var Oi = 64,
  ji = 4194304;
function Ts(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function bl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = Ts(l)) : ((s &= i), s !== 0 && (r = Ts(s)));
  } else (i = n & ~o), i !== 0 ? (r = Ts(i)) : s !== 0 && (r = Ts(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Ex(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function _x(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - tn(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = Ex(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function gu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sy() {
  var e = Oi;
  return (Oi <<= 1), !(Oi & 4194240) && (Oi = 64), e;
}
function pc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tn(t)),
    (e[t] = n);
}
function kx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - tn(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function Nd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ye = 0;
function iy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ly,
  Od,
  ay,
  cy,
  uy,
  yu = !1,
  $i = [],
  lr = null,
  ar = null,
  cr = null,
  Us = new Map(),
  Ys = new Map(),
  tr = [],
  Rx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lr = null;
      break;
    case "dragenter":
    case "dragleave":
      ar = null;
      break;
    case "mouseover":
    case "mouseout":
      cr = null;
      break;
    case "pointerover":
    case "pointerout":
      Us.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ys.delete(t.pointerId);
  }
}
function ys(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = hi(t)), t !== null && Od(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Dx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (lr = ys(lr, e, t, n, r, o)), !0;
    case "dragenter":
      return (ar = ys(ar, e, t, n, r, o)), !0;
    case "mouseover":
      return (cr = ys(cr, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return Us.set(s, ys(Us.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), Ys.set(s, ys(Ys.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function dy(e) {
  var t = jr(e.target);
  if (t !== null) {
    var n = to(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zg(n)), t !== null)) {
          (e.blockedOn = t),
            uy(e.priority, function () {
              ay(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fu = r), n.target.dispatchEvent(r), (fu = null);
    } else return (t = hi(n)), t !== null && Od(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xp(e, t, n) {
  rl(e) && n.delete(t);
}
function Px() {
  (yu = !1),
    lr !== null && rl(lr) && (lr = null),
    ar !== null && rl(ar) && (ar = null),
    cr !== null && rl(cr) && (cr = null),
    Us.forEach(Xp),
    Ys.forEach(Xp);
}
function vs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yu ||
      ((yu = !0),
      Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, Px)));
}
function qs(e) {
  function t(o) {
    return vs(o, e);
  }
  if (0 < $i.length) {
    vs($i[0], e);
    for (var n = 1; n < $i.length; n++) {
      var r = $i[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lr !== null && vs(lr, e),
      ar !== null && vs(ar, e),
      cr !== null && vs(cr, e),
      Us.forEach(t),
      Ys.forEach(t),
      n = 0;
    n < tr.length;
    n++
  )
    (r = tr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tr.length && ((n = tr[0]), n.blockedOn === null); )
    dy(n), n.blockedOn === null && tr.shift();
}
var jo = Wn.ReactCurrentBatchConfig,
  Cl = !0;
function Tx(e, t, n, r) {
  var o = ye,
    s = jo.transition;
  jo.transition = null;
  try {
    (ye = 1), jd(e, t, n, r);
  } finally {
    (ye = o), (jo.transition = s);
  }
}
function Nx(e, t, n, r) {
  var o = ye,
    s = jo.transition;
  jo.transition = null;
  try {
    (ye = 4), jd(e, t, n, r);
  } finally {
    (ye = o), (jo.transition = s);
  }
}
function jd(e, t, n, r) {
  if (Cl) {
    var o = vu(e, t, n, r);
    if (o === null) Cc(e, t, r, El, n), Gp(e, r);
    else if (Dx(o, e, t, n, r)) r.stopPropagation();
    else if ((Gp(e, r), t & 4 && -1 < Rx.indexOf(e))) {
      for (; o !== null; ) {
        var s = hi(o);
        if (
          (s !== null && ly(s),
          (s = vu(e, t, n, r)),
          s === null && Cc(e, t, r, El, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Cc(e, t, r, null, n);
  }
}
var El = null;
function vu(e, t, n, r) {
  if (((El = null), (e = Pd(r)), (e = jr(e)), e !== null))
    if (((t = to(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (El = e), null;
}
function fy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vx()) {
        case Td:
          return 1;
        case ry:
          return 4;
        case Sl:
        case wx:
          return 16;
        case oy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var or = null,
  $d = null,
  ol = null;
function py() {
  if (ol) return ol;
  var e,
    t = $d,
    n = t.length,
    r,
    o = "value" in or ? or.value : or.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (ol = o.slice(e, 1 < r ? 1 - r : void 0));
}
function sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Li() {
  return !0;
}
function Qp() {
  return !1;
}
function Ft(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Li
        : Qp),
      (this.isPropagationStopped = Qp),
      this
    );
  }
  return (
    je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Li));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Li));
      },
      persist: function () {},
      isPersistent: Li,
    }),
    t
  );
}
var es = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ld = Ft(es),
  mi = je({}, es, { view: 0, detail: 0 }),
  Ox = Ft(mi),
  mc,
  hc,
  ws,
  sa = je({}, mi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ad,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ws &&
            (ws && e.type === "mousemove"
              ? ((mc = e.screenX - ws.screenX), (hc = e.screenY - ws.screenY))
              : (hc = mc = 0),
            (ws = e)),
          mc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : hc;
    },
  }),
  Jp = Ft(sa),
  jx = je({}, sa, { dataTransfer: 0 }),
  $x = Ft(jx),
  Lx = je({}, mi, { relatedTarget: 0 }),
  gc = Ft(Lx),
  Ax = je({}, es, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fx = Ft(Ax),
  Mx = je({}, es, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ix = Ft(Mx),
  zx = je({}, es, { data: 0 }),
  Zp = Ft(zx),
  Bx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Vx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Hx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hx[e]) ? !!t[e] : !1;
}
function Ad() {
  return Wx;
}
var Ux = je({}, mi, {
    key: function (e) {
      if (e.key) {
        var t = Bx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ad,
    charCode: function (e) {
      return e.type === "keypress" ? sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? sl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Yx = Ft(Ux),
  qx = je({}, sa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  em = Ft(qx),
  Kx = je({}, mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ad,
  }),
  Gx = Ft(Kx),
  Xx = je({}, es, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qx = Ft(Xx),
  Jx = je({}, sa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zx = Ft(Jx),
  eS = [9, 13, 27, 32],
  Fd = In && "CompositionEvent" in window,
  $s = null;
In && "documentMode" in document && ($s = document.documentMode);
var tS = In && "TextEvent" in window && !$s,
  my = In && (!Fd || ($s && 8 < $s && 11 >= $s)),
  tm = " ",
  nm = !1;
function hy(e, t) {
  switch (e) {
    case "keyup":
      return eS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wo = !1;
function nS(e, t) {
  switch (e) {
    case "compositionend":
      return gy(t);
    case "keypress":
      return t.which !== 32 ? null : ((nm = !0), tm);
    case "textInput":
      return (e = t.data), e === tm && nm ? null : e;
    default:
      return null;
  }
}
function rS(e, t) {
  if (wo)
    return e === "compositionend" || (!Fd && hy(e, t))
      ? ((e = py()), (ol = $d = or = null), (wo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return my && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var oS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!oS[e.type] : t === "textarea";
}
function yy(e, t, n, r) {
  Kg(r),
    (t = _l(t, "onChange")),
    0 < t.length &&
      ((n = new Ld("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ls = null,
  Ks = null;
function sS(e) {
  Dy(e, 0);
}
function ia(e) {
  var t = bo(e);
  if (Bg(t)) return e;
}
function iS(e, t) {
  if (e === "change") return t;
}
var vy = !1;
if (In) {
  var yc;
  if (In) {
    var vc = "oninput" in document;
    if (!vc) {
      var om = document.createElement("div");
      om.setAttribute("oninput", "return;"),
        (vc = typeof om.oninput == "function");
    }
    yc = vc;
  } else yc = !1;
  vy = yc && (!document.documentMode || 9 < document.documentMode);
}
function sm() {
  Ls && (Ls.detachEvent("onpropertychange", wy), (Ks = Ls = null));
}
function wy(e) {
  if (e.propertyName === "value" && ia(Ks)) {
    var t = [];
    yy(t, Ks, e, Pd(e)), Jg(sS, t);
  }
}
function lS(e, t, n) {
  e === "focusin"
    ? (sm(), (Ls = t), (Ks = n), Ls.attachEvent("onpropertychange", wy))
    : e === "focusout" && sm();
}
function aS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ia(Ks);
}
function cS(e, t) {
  if (e === "click") return ia(t);
}
function uS(e, t) {
  if (e === "input" || e === "change") return ia(t);
}
function dS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var on = typeof Object.is == "function" ? Object.is : dS;
function Gs(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!eu.call(t, o) || !on(e[o], t[o])) return !1;
  }
  return !0;
}
function im(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function lm(e, t) {
  var n = im(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = im(n);
  }
}
function xy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sy() {
  for (var e = window, t = vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vl(e.document);
  }
  return t;
}
function Md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fS(e) {
  var t = Sy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Md(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = lm(n, s));
        var i = lm(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var pS = In && "documentMode" in document && 11 >= document.documentMode,
  xo = null,
  wu = null,
  As = null,
  xu = !1;
function am(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xu ||
    xo == null ||
    xo !== vl(r) ||
    ((r = xo),
    "selectionStart" in r && Md(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (As && Gs(As, r)) ||
      ((As = r),
      (r = _l(wu, "onSelect")),
      0 < r.length &&
        ((t = new Ld("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xo))));
}
function Ai(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var So = {
    animationend: Ai("Animation", "AnimationEnd"),
    animationiteration: Ai("Animation", "AnimationIteration"),
    animationstart: Ai("Animation", "AnimationStart"),
    transitionend: Ai("Transition", "TransitionEnd"),
  },
  wc = {},
  by = {};
In &&
  ((by = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete So.animationend.animation,
    delete So.animationiteration.animation,
    delete So.animationstart.animation),
  "TransitionEvent" in window || delete So.transitionend.transition);
function la(e) {
  if (wc[e]) return wc[e];
  if (!So[e]) return e;
  var t = So[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in by) return (wc[e] = t[n]);
  return e;
}
var Cy = la("animationend"),
  Ey = la("animationiteration"),
  _y = la("animationstart"),
  ky = la("transitionend"),
  Ry = new Map(),
  cm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function wr(e, t) {
  Ry.set(e, t), eo(t, [e]);
}
for (var xc = 0; xc < cm.length; xc++) {
  var Sc = cm[xc],
    mS = Sc.toLowerCase(),
    hS = Sc[0].toUpperCase() + Sc.slice(1);
  wr(mS, "on" + hS);
}
wr(Cy, "onAnimationEnd");
wr(Ey, "onAnimationIteration");
wr(_y, "onAnimationStart");
wr("dblclick", "onDoubleClick");
wr("focusin", "onFocus");
wr("focusout", "onBlur");
wr(ky, "onTransitionEnd");
zo("onMouseEnter", ["mouseout", "mouseover"]);
zo("onMouseLeave", ["mouseout", "mouseover"]);
zo("onPointerEnter", ["pointerout", "pointerover"]);
zo("onPointerLeave", ["pointerout", "pointerover"]);
eo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
eo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
eo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
eo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
eo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
eo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ns =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));
function um(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), mx(r, t, void 0, e), (e.currentTarget = null);
}
function Dy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          um(o, l, c), (s = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            a !== s && o.isPropagationStopped())
          )
            break e;
          um(o, l, c), (s = a);
        }
    }
  }
  if (xl) throw ((e = hu), (xl = !1), (hu = null), e);
}
function Ee(e, t) {
  var n = t[_u];
  n === void 0 && (n = t[_u] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Py(t, e, 2, !1), n.add(r));
}
function bc(e, t, n) {
  var r = 0;
  t && (r |= 4), Py(n, e, r, t);
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function Xs(e) {
  if (!e[Fi]) {
    (e[Fi] = !0),
      Ag.forEach(function (n) {
        n !== "selectionchange" && (gS.has(n) || bc(n, !1, e), bc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fi] || ((t[Fi] = !0), bc("selectionchange", !1, t));
  }
}
function Py(e, t, n, r) {
  switch (fy(t)) {
    case 1:
      var o = Tx;
      break;
    case 4:
      o = Nx;
      break;
    default:
      o = jd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !mu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Cc(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = jr(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Jg(function () {
    var c = s,
      u = Pd(n),
      d = [];
    e: {
      var f = Ry.get(e);
      if (f !== void 0) {
        var m = Ld,
          p = e;
        switch (e) {
          case "keypress":
            if (sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Yx;
            break;
          case "focusin":
            (p = "focus"), (m = gc);
            break;
          case "focusout":
            (p = "blur"), (m = gc);
            break;
          case "beforeblur":
          case "afterblur":
            m = gc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Jp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = $x;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Gx;
            break;
          case Cy:
          case Ey:
          case _y:
            m = Fx;
            break;
          case ky:
            m = Qx;
            break;
          case "scroll":
            m = Ox;
            break;
          case "wheel":
            m = Zx;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Ix;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = em;
        }
        var h = (t & 4) !== 0,
          S = !h && e === "scroll",
          w = h ? (f !== null ? f + "Capture" : null) : f;
        h = [];
        for (var v = c, y; v !== null; ) {
          y = v;
          var b = y.stateNode;
          if (
            (y.tag === 5 &&
              b !== null &&
              ((y = b),
              w !== null && ((b = Ws(v, w)), b != null && h.push(Qs(v, b, y)))),
            S)
          )
            break;
          v = v.return;
        }
        0 < h.length &&
          ((f = new m(f, p, null, n, u)), d.push({ event: f, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            n !== fu &&
            (p = n.relatedTarget || n.fromElement) &&
            (jr(p) || p[zn]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((p = n.relatedTarget || n.toElement),
              (m = c),
              (p = p ? jr(p) : null),
              p !== null &&
                ((S = to(p)), p !== S || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((m = null), (p = c)),
          m !== p)
        ) {
          if (
            ((h = Jp),
            (b = "onMouseLeave"),
            (w = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = em),
              (b = "onPointerLeave"),
              (w = "onPointerEnter"),
              (v = "pointer")),
            (S = m == null ? f : bo(m)),
            (y = p == null ? f : bo(p)),
            (f = new h(b, v + "leave", m, n, u)),
            (f.target = S),
            (f.relatedTarget = y),
            (b = null),
            jr(u) === c &&
              ((h = new h(w, v + "enter", p, n, u)),
              (h.target = y),
              (h.relatedTarget = S),
              (b = h)),
            (S = b),
            m && p)
          )
            t: {
              for (h = m, w = p, v = 0, y = h; y; y = uo(y)) v++;
              for (y = 0, b = w; b; b = uo(b)) y++;
              for (; 0 < v - y; ) (h = uo(h)), v--;
              for (; 0 < y - v; ) (w = uo(w)), y--;
              for (; v--; ) {
                if (h === w || (w !== null && h === w.alternate)) break t;
                (h = uo(h)), (w = uo(w));
              }
              h = null;
            }
          else h = null;
          m !== null && dm(d, f, m, h, !1),
            p !== null && S !== null && dm(d, S, p, h, !0);
        }
      }
      e: {
        if (
          ((f = c ? bo(c) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var C = iS;
        else if (rm(f))
          if (vy) C = uS;
          else {
            C = aS;
            var E = lS;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = cS);
        if (C && (C = C(e, c))) {
          yy(d, C, n, u);
          break e;
        }
        E && E(e, f, c),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            lu(f, "number", f.value);
      }
      switch (((E = c ? bo(c) : window), e)) {
        case "focusin":
          (rm(E) || E.contentEditable === "true") &&
            ((xo = E), (wu = c), (As = null));
          break;
        case "focusout":
          As = wu = xo = null;
          break;
        case "mousedown":
          xu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xu = !1), am(d, n, u);
          break;
        case "selectionchange":
          if (pS) break;
        case "keydown":
        case "keyup":
          am(d, n, u);
      }
      var R;
      if (Fd)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        wo
          ? hy(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (my &&
          n.locale !== "ko" &&
          (wo || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && wo && (R = py())
            : ((or = u),
              ($d = "value" in or ? or.value : or.textContent),
              (wo = !0))),
        (E = _l(c, D)),
        0 < E.length &&
          ((D = new Zp(D, e, null, n, u)),
          d.push({ event: D, listeners: E }),
          R ? (D.data = R) : ((R = gy(n)), R !== null && (D.data = R)))),
        (R = tS ? nS(e, n) : rS(e, n)) &&
          ((c = _l(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Zp("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = R)));
    }
    Dy(d, t);
  });
}
function Qs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Ws(e, n)),
      s != null && r.unshift(Qs(e, s, o)),
      (s = Ws(e, t)),
      s != null && r.push(Qs(e, s, o))),
      (e = e.return);
  }
  return r;
}
function uo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dm(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = Ws(n, s)), a != null && i.unshift(Qs(n, a, l)))
        : o || ((a = Ws(n, s)), a != null && i.push(Qs(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var yS = /\r\n?/g,
  vS = /\u0000|\uFFFD/g;
function fm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      yS,
      `
`
    )
    .replace(vS, "");
}
function Mi(e, t, n) {
  if (((t = fm(t)), fm(e) !== t && n)) throw Error(H(425));
}
function kl() {}
var Su = null,
  bu = null;
function Cu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Eu = typeof setTimeout == "function" ? setTimeout : void 0,
  wS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pm = typeof Promise == "function" ? Promise : void 0,
  xS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pm < "u"
      ? function (e) {
          return pm.resolve(null).then(e).catch(SS);
        }
      : Eu;
function SS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ec(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), qs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  qs(t);
}
function ur(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function mm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ts = Math.random().toString(36).slice(2),
  Sn = "__reactFiber$" + ts,
  Js = "__reactProps$" + ts,
  zn = "__reactContainer$" + ts,
  _u = "__reactEvents$" + ts,
  bS = "__reactListeners$" + ts,
  CS = "__reactHandles$" + ts;
function jr(e) {
  var t = e[Sn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zn] || n[Sn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = mm(e); e !== null; ) {
          if ((n = e[Sn])) return n;
          e = mm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hi(e) {
  return (
    (e = e[Sn] || e[zn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function aa(e) {
  return e[Js] || null;
}
var ku = [],
  Co = -1;
function xr(e) {
  return { current: e };
}
function _e(e) {
  0 > Co || ((e.current = ku[Co]), (ku[Co] = null), Co--);
}
function be(e, t) {
  Co++, (ku[Co] = e.current), (e.current = t);
}
var gr = {},
  st = xr(gr),
  Et = xr(!1),
  Vr = gr;
function Bo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function _t(e) {
  return (e = e.childContextTypes), e != null;
}
function Rl() {
  _e(Et), _e(st);
}
function hm(e, t, n) {
  if (st.current !== gr) throw Error(H(168));
  be(st, t), be(Et, n);
}
function Ty(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, lx(e) || "Unknown", o));
  return je({}, n, r);
}
function Dl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gr),
    (Vr = st.current),
    be(st, e),
    be(Et, Et.current),
    !0
  );
}
function gm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n
    ? ((e = Ty(e, t, Vr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      _e(Et),
      _e(st),
      be(st, e))
    : _e(Et),
    be(Et, n);
}
var $n = null,
  ca = !1,
  _c = !1;
function Ny(e) {
  $n === null ? ($n = [e]) : $n.push(e);
}
function ES(e) {
  (ca = !0), Ny(e);
}
function Sr() {
  if (!_c && $n !== null) {
    _c = !0;
    var e = 0,
      t = ye;
    try {
      var n = $n;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($n = null), (ca = !1);
    } catch (o) {
      throw ($n !== null && ($n = $n.slice(e + 1)), ny(Td, Sr), o);
    } finally {
      (ye = t), (_c = !1);
    }
  }
  return null;
}
var Eo = [],
  _o = 0,
  Pl = null,
  Tl = 0,
  zt = [],
  Bt = 0,
  Hr = null,
  Ln = 1,
  An = "";
function Pr(e, t) {
  (Eo[_o++] = Tl), (Eo[_o++] = Pl), (Pl = e), (Tl = t);
}
function Oy(e, t, n) {
  (zt[Bt++] = Ln), (zt[Bt++] = An), (zt[Bt++] = Hr), (Hr = e);
  var r = Ln;
  e = An;
  var o = 32 - tn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - tn(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ln = (1 << (32 - tn(t) + o)) | (n << o) | r),
      (An = s + e);
  } else (Ln = (1 << s) | (n << o) | r), (An = e);
}
function Id(e) {
  e.return !== null && (Pr(e, 1), Oy(e, 1, 0));
}
function zd(e) {
  for (; e === Pl; )
    (Pl = Eo[--_o]), (Eo[_o] = null), (Tl = Eo[--_o]), (Eo[_o] = null);
  for (; e === Hr; )
    (Hr = zt[--Bt]),
      (zt[Bt] = null),
      (An = zt[--Bt]),
      (zt[Bt] = null),
      (Ln = zt[--Bt]),
      (zt[Bt] = null);
}
var jt = null,
  Ot = null,
  De = !1,
  Zt = null;
function jy(e, t) {
  var n = Vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ym(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (jt = e), (Ot = ur(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (jt = e), (Ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Hr !== null ? { id: Ln, overflow: An } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (jt = e),
            (Ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Du(e) {
  if (De) {
    var t = Ot;
    if (t) {
      var n = t;
      if (!ym(e, t)) {
        if (Ru(e)) throw Error(H(418));
        t = ur(n.nextSibling);
        var r = jt;
        t && ym(e, t)
          ? jy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (De = !1), (jt = e));
      }
    } else {
      if (Ru(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (De = !1), (jt = e);
    }
  }
}
function vm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  jt = e;
}
function Ii(e) {
  if (e !== jt) return !1;
  if (!De) return vm(e), (De = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps))),
    t && (t = Ot))
  ) {
    if (Ru(e)) throw ($y(), Error(H(418)));
    for (; t; ) jy(e, t), (t = ur(t.nextSibling));
  }
  if ((vm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ot = ur(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ot = null;
    }
  } else Ot = jt ? ur(e.stateNode.nextSibling) : null;
  return !0;
}
function $y() {
  for (var e = Ot; e; ) e = ur(e.nextSibling);
}
function Vo() {
  (Ot = jt = null), (De = !1);
}
function Bd(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
var _S = Wn.ReactCurrentBatchConfig;
function xs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function zi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      H(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function wm(e) {
  var t = e._init;
  return t(e._payload);
}
function Ly(e) {
  function t(w, v) {
    if (e) {
      var y = w.deletions;
      y === null ? ((w.deletions = [v]), (w.flags |= 16)) : y.push(v);
    }
  }
  function n(w, v) {
    if (!e) return null;
    for (; v !== null; ) t(w, v), (v = v.sibling);
    return null;
  }
  function r(w, v) {
    for (w = new Map(); v !== null; )
      v.key !== null ? w.set(v.key, v) : w.set(v.index, v), (v = v.sibling);
    return w;
  }
  function o(w, v) {
    return (w = mr(w, v)), (w.index = 0), (w.sibling = null), w;
  }
  function s(w, v, y) {
    return (
      (w.index = y),
      e
        ? ((y = w.alternate),
          y !== null
            ? ((y = y.index), y < v ? ((w.flags |= 2), v) : y)
            : ((w.flags |= 2), v))
        : ((w.flags |= 1048576), v)
    );
  }
  function i(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function l(w, v, y, b) {
    return v === null || v.tag !== 6
      ? ((v = Oc(y, w.mode, b)), (v.return = w), v)
      : ((v = o(v, y)), (v.return = w), v);
  }
  function a(w, v, y, b) {
    var C = y.type;
    return C === vo
      ? u(w, v, y.props.children, b, y.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Jn &&
            wm(C) === v.type))
      ? ((b = o(v, y.props)), (b.ref = xs(w, v, y)), (b.return = w), b)
      : ((b = fl(y.type, y.key, y.props, null, w.mode, b)),
        (b.ref = xs(w, v, y)),
        (b.return = w),
        b);
  }
  function c(w, v, y, b) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== y.containerInfo ||
      v.stateNode.implementation !== y.implementation
      ? ((v = jc(y, w.mode, b)), (v.return = w), v)
      : ((v = o(v, y.children || [])), (v.return = w), v);
  }
  function u(w, v, y, b, C) {
    return v === null || v.tag !== 7
      ? ((v = Mr(y, w.mode, b, C)), (v.return = w), v)
      : ((v = o(v, y)), (v.return = w), v);
  }
  function d(w, v, y) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Oc("" + v, w.mode, y)), (v.return = w), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Pi:
          return (
            (y = fl(v.type, v.key, v.props, null, w.mode, y)),
            (y.ref = xs(w, null, v)),
            (y.return = w),
            y
          );
        case yo:
          return (v = jc(v, w.mode, y)), (v.return = w), v;
        case Jn:
          var b = v._init;
          return d(w, b(v._payload), y);
      }
      if (Ps(v) || hs(v))
        return (v = Mr(v, w.mode, y, null)), (v.return = w), v;
      zi(w, v);
    }
    return null;
  }
  function f(w, v, y, b) {
    var C = v !== null ? v.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : l(w, v, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Pi:
          return y.key === C ? a(w, v, y, b) : null;
        case yo:
          return y.key === C ? c(w, v, y, b) : null;
        case Jn:
          return (C = y._init), f(w, v, C(y._payload), b);
      }
      if (Ps(y) || hs(y)) return C !== null ? null : u(w, v, y, b, null);
      zi(w, y);
    }
    return null;
  }
  function m(w, v, y, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (w = w.get(y) || null), l(v, w, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Pi:
          return (w = w.get(b.key === null ? y : b.key) || null), a(v, w, b, C);
        case yo:
          return (w = w.get(b.key === null ? y : b.key) || null), c(v, w, b, C);
        case Jn:
          var E = b._init;
          return m(w, v, y, E(b._payload), C);
      }
      if (Ps(b) || hs(b)) return (w = w.get(y) || null), u(v, w, b, C, null);
      zi(v, b);
    }
    return null;
  }
  function p(w, v, y, b) {
    for (
      var C = null, E = null, R = v, D = (v = 0), L = null;
      R !== null && D < y.length;
      D++
    ) {
      R.index > D ? ((L = R), (R = null)) : (L = R.sibling);
      var N = f(w, R, y[D], b);
      if (N === null) {
        R === null && (R = L);
        break;
      }
      e && R && N.alternate === null && t(w, R),
        (v = s(N, v, D)),
        E === null ? (C = N) : (E.sibling = N),
        (E = N),
        (R = L);
    }
    if (D === y.length) return n(w, R), De && Pr(w, D), C;
    if (R === null) {
      for (; D < y.length; D++)
        (R = d(w, y[D], b)),
          R !== null &&
            ((v = s(R, v, D)), E === null ? (C = R) : (E.sibling = R), (E = R));
      return De && Pr(w, D), C;
    }
    for (R = r(w, R); D < y.length; D++)
      (L = m(R, w, D, y[D], b)),
        L !== null &&
          (e && L.alternate !== null && R.delete(L.key === null ? D : L.key),
          (v = s(L, v, D)),
          E === null ? (C = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        R.forEach(function (M) {
          return t(w, M);
        }),
      De && Pr(w, D),
      C
    );
  }
  function h(w, v, y, b) {
    var C = hs(y);
    if (typeof C != "function") throw Error(H(150));
    if (((y = C.call(y)), y == null)) throw Error(H(151));
    for (
      var E = (C = null), R = v, D = (v = 0), L = null, N = y.next();
      R !== null && !N.done;
      D++, N = y.next()
    ) {
      R.index > D ? ((L = R), (R = null)) : (L = R.sibling);
      var M = f(w, R, N.value, b);
      if (M === null) {
        R === null && (R = L);
        break;
      }
      e && R && M.alternate === null && t(w, R),
        (v = s(M, v, D)),
        E === null ? (C = M) : (E.sibling = M),
        (E = M),
        (R = L);
    }
    if (N.done) return n(w, R), De && Pr(w, D), C;
    if (R === null) {
      for (; !N.done; D++, N = y.next())
        (N = d(w, N.value, b)),
          N !== null &&
            ((v = s(N, v, D)), E === null ? (C = N) : (E.sibling = N), (E = N));
      return De && Pr(w, D), C;
    }
    for (R = r(w, R); !N.done; D++, N = y.next())
      (N = m(R, w, D, N.value, b)),
        N !== null &&
          (e && N.alternate !== null && R.delete(N.key === null ? D : N.key),
          (v = s(N, v, D)),
          E === null ? (C = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        R.forEach(function (B) {
          return t(w, B);
        }),
      De && Pr(w, D),
      C
    );
  }
  function S(w, v, y, b) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === vo &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Pi:
          e: {
            for (var C = y.key, E = v; E !== null; ) {
              if (E.key === C) {
                if (((C = y.type), C === vo)) {
                  if (E.tag === 7) {
                    n(w, E.sibling),
                      (v = o(E, y.props.children)),
                      (v.return = w),
                      (w = v);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Jn &&
                    wm(C) === E.type)
                ) {
                  n(w, E.sibling),
                    (v = o(E, y.props)),
                    (v.ref = xs(w, E, y)),
                    (v.return = w),
                    (w = v);
                  break e;
                }
                n(w, E);
                break;
              } else t(w, E);
              E = E.sibling;
            }
            y.type === vo
              ? ((v = Mr(y.props.children, w.mode, b, y.key)),
                (v.return = w),
                (w = v))
              : ((b = fl(y.type, y.key, y.props, null, w.mode, b)),
                (b.ref = xs(w, v, y)),
                (b.return = w),
                (w = b));
          }
          return i(w);
        case yo:
          e: {
            for (E = y.key; v !== null; ) {
              if (v.key === E)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === y.containerInfo &&
                  v.stateNode.implementation === y.implementation
                ) {
                  n(w, v.sibling),
                    (v = o(v, y.children || [])),
                    (v.return = w),
                    (w = v);
                  break e;
                } else {
                  n(w, v);
                  break;
                }
              else t(w, v);
              v = v.sibling;
            }
            (v = jc(y, w.mode, b)), (v.return = w), (w = v);
          }
          return i(w);
        case Jn:
          return (E = y._init), S(w, v, E(y._payload), b);
      }
      if (Ps(y)) return p(w, v, y, b);
      if (hs(y)) return h(w, v, y, b);
      zi(w, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        v !== null && v.tag === 6
          ? (n(w, v.sibling), (v = o(v, y)), (v.return = w), (w = v))
          : (n(w, v), (v = Oc(y, w.mode, b)), (v.return = w), (w = v)),
        i(w))
      : n(w, v);
  }
  return S;
}
var Ho = Ly(!0),
  Ay = Ly(!1),
  Nl = xr(null),
  Ol = null,
  ko = null,
  Vd = null;
function Hd() {
  Vd = ko = Ol = null;
}
function Wd(e) {
  var t = Nl.current;
  _e(Nl), (e._currentValue = t);
}
function Pu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $o(e, t) {
  (Ol = e),
    (Vd = ko = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (St = !0), (e.firstContext = null));
}
function Ut(e) {
  var t = e._currentValue;
  if (Vd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ko === null)) {
      if (Ol === null) throw Error(H(308));
      (ko = e), (Ol.dependencies = { lanes: 0, firstContext: e });
    } else ko = ko.next = e;
  return t;
}
var $r = null;
function Ud(e) {
  $r === null ? ($r = [e]) : $r.push(e);
}
function Fy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ud(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Bn(e, r)
  );
}
function Bn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zn = !1;
function Yd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function My(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Fn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Bn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ud(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Bn(e, n)
  );
}
function il(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nd(e, n);
  }
}
function xm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function jl(e, t, n, r) {
  var o = e.updateQueue;
  Zn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      c = a.next;
    (a.next = null), i === null ? (s = c) : (i.next = c), (i = a);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (l = u.lastBaseUpdate),
      l !== i &&
        (l === null ? (u.firstBaseUpdate = c) : (l.next = c),
        (u.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = o.baseState;
    (i = 0), (u = c = a = null), (l = s);
    do {
      var f = l.lane,
        m = l.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var p = e,
            h = l;
          switch (((f = t), (m = n), h.tag)) {
            case 1:
              if (((p = h.payload), typeof p == "function")) {
                d = p.call(m, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = h.payload),
                (f = typeof p == "function" ? p.call(m, d, f) : p),
                f == null)
              )
                break e;
              d = je({}, d, f);
              break e;
            case 2:
              Zn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          u === null ? ((c = u = m), (a = d)) : (u = u.next = m),
          (i |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = u),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (Ur |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Sm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(H(191, o));
        o.call(r);
      }
    }
}
var gi = {},
  En = xr(gi),
  Zs = xr(gi),
  ei = xr(gi);
function Lr(e) {
  if (e === gi) throw Error(H(174));
  return e;
}
function qd(e, t) {
  switch ((be(ei, t), be(Zs, e), be(En, gi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cu(t, e));
  }
  _e(En), be(En, t);
}
function Wo() {
  _e(En), _e(Zs), _e(ei);
}
function Iy(e) {
  Lr(ei.current);
  var t = Lr(En.current),
    n = cu(t, e.type);
  t !== n && (be(Zs, e), be(En, n));
}
function Kd(e) {
  Zs.current === e && (_e(En), _e(Zs));
}
var Ne = xr(0);
function $l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var kc = [];
function Gd() {
  for (var e = 0; e < kc.length; e++)
    kc[e]._workInProgressVersionPrimary = null;
  kc.length = 0;
}
var ll = Wn.ReactCurrentDispatcher,
  Rc = Wn.ReactCurrentBatchConfig,
  Wr = 0,
  Oe = null,
  He = null,
  Ye = null,
  Ll = !1,
  Fs = !1,
  ti = 0,
  kS = 0;
function et() {
  throw Error(H(321));
}
function Xd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!on(e[n], t[n])) return !1;
  return !0;
}
function Qd(e, t, n, r, o, s) {
  if (
    ((Wr = s),
    (Oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ll.current = e === null || e.memoizedState === null ? TS : NS),
    (e = n(r, o)),
    Fs)
  ) {
    s = 0;
    do {
      if (((Fs = !1), (ti = 0), 25 <= s)) throw Error(H(301));
      (s += 1),
        (Ye = He = null),
        (t.updateQueue = null),
        (ll.current = OS),
        (e = n(r, o));
    } while (Fs);
  }
  if (
    ((ll.current = Al),
    (t = He !== null && He.next !== null),
    (Wr = 0),
    (Ye = He = Oe = null),
    (Ll = !1),
    t)
  )
    throw Error(H(300));
  return e;
}
function Jd() {
  var e = ti !== 0;
  return (ti = 0), e;
}
function vn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ye === null ? (Oe.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
}
function Yt() {
  if (He === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = He.next;
  var t = Ye === null ? Oe.memoizedState : Ye.next;
  if (t !== null) (Ye = t), (He = e);
  else {
    if (e === null) throw Error(H(310));
    (He = e),
      (e = {
        memoizedState: He.memoizedState,
        baseState: He.baseState,
        baseQueue: He.baseQueue,
        queue: He.queue,
        next: null,
      }),
      Ye === null ? (Oe.memoizedState = Ye = e) : (Ye = Ye.next = e);
  }
  return Ye;
}
function ni(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Dc(e) {
  var t = Yt(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = He,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var l = (i = null),
      a = null,
      c = s;
    do {
      var u = c.lane;
      if ((Wr & u) === u)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (i = r)) : (a = a.next = d),
          (Oe.lanes |= u),
          (Ur |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? (i = r) : (a.next = l),
      on(r, t.memoizedState) || (St = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (Oe.lanes |= s), (Ur |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pc(e) {
  var t = Yt(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    on(s, t.memoizedState) || (St = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function zy() {}
function By(e, t) {
  var n = Oe,
    r = Yt(),
    o = t(),
    s = !on(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (St = !0)),
    (r = r.queue),
    Zd(Wy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ye !== null && Ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ri(9, Hy.bind(null, n, r, o, t), void 0, null),
      qe === null)
    )
      throw Error(H(349));
    Wr & 30 || Vy(n, t, o);
  }
  return o;
}
function Vy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Uy(t) && Yy(e);
}
function Wy(e, t, n) {
  return n(function () {
    Uy(t) && Yy(e);
  });
}
function Uy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function Yy(e) {
  var t = Bn(e, 1);
  t !== null && nn(t, e, 1, -1);
}
function bm(e) {
  var t = vn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ni,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = PS.bind(null, Oe, e)),
    [t.memoizedState, e]
  );
}
function ri(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qy() {
  return Yt().memoizedState;
}
function al(e, t, n, r) {
  var o = vn();
  (Oe.flags |= e),
    (o.memoizedState = ri(1 | t, n, void 0, r === void 0 ? null : r));
}
function ua(e, t, n, r) {
  var o = Yt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (He !== null) {
    var i = He.memoizedState;
    if (((s = i.destroy), r !== null && Xd(r, i.deps))) {
      o.memoizedState = ri(t, n, s, r);
      return;
    }
  }
  (Oe.flags |= e), (o.memoizedState = ri(1 | t, n, s, r));
}
function Cm(e, t) {
  return al(8390656, 8, e, t);
}
function Zd(e, t) {
  return ua(2048, 8, e, t);
}
function Ky(e, t) {
  return ua(4, 2, e, t);
}
function Gy(e, t) {
  return ua(4, 4, e, t);
}
function Xy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ua(4, 4, Xy.bind(null, t, e), n)
  );
}
function ef() {}
function Jy(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zy(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ev(e, t, n) {
  return Wr & 21
    ? (on(n, t) || ((n = sy()), (Oe.lanes |= n), (Ur |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (St = !0)), (e.memoizedState = n));
}
function RS(e, t) {
  var n = ye;
  (ye = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Rc.transition;
  Rc.transition = {};
  try {
    e(!1), t();
  } finally {
    (ye = n), (Rc.transition = r);
  }
}
function tv() {
  return Yt().memoizedState;
}
function DS(e, t, n) {
  var r = pr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nv(e))
  )
    rv(t, n);
  else if (((n = Fy(e, t, n, r)), n !== null)) {
    var o = dt();
    nn(n, e, r, o), ov(n, t, r);
  }
}
function PS(e, t, n) {
  var r = pr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nv(e)) rv(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), on(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Ud(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fy(e, t, o, r)),
      n !== null && ((o = dt()), nn(n, e, r, o), ov(n, t, r));
  }
}
function nv(e) {
  var t = e.alternate;
  return e === Oe || (t !== null && t === Oe);
}
function rv(e, t) {
  Fs = Ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ov(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nd(e, n);
  }
}
var Al = {
    readContext: Ut,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useInsertionEffect: et,
    useLayoutEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useMutableSource: et,
    useSyncExternalStore: et,
    useId: et,
    unstable_isNewReconciler: !1,
  },
  TS = {
    readContext: Ut,
    useCallback: function (e, t) {
      return (vn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ut,
    useEffect: Cm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        al(4194308, 4, Xy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return al(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return al(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = DS.bind(null, Oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bm,
    useDebugValue: ef,
    useDeferredValue: function (e) {
      return (vn().memoizedState = e);
    },
    useTransition: function () {
      var e = bm(!1),
        t = e[0];
      return (e = RS.bind(null, e[1])), (vn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Oe,
        o = vn();
      if (De) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), qe === null)) throw Error(H(349));
        Wr & 30 || Vy(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        Cm(Wy.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ri(9, Hy.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vn(),
        t = qe.identifierPrefix;
      if (De) {
        var n = An,
          r = Ln;
        (n = (r & ~(1 << (32 - tn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ti++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = kS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  NS = {
    readContext: Ut,
    useCallback: Jy,
    useContext: Ut,
    useEffect: Zd,
    useImperativeHandle: Qy,
    useInsertionEffect: Ky,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Dc,
    useRef: qy,
    useState: function () {
      return Dc(ni);
    },
    useDebugValue: ef,
    useDeferredValue: function (e) {
      var t = Yt();
      return ev(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = Dc(ni)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: zy,
    useSyncExternalStore: By,
    useId: tv,
    unstable_isNewReconciler: !1,
  },
  OS = {
    readContext: Ut,
    useCallback: Jy,
    useContext: Ut,
    useEffect: Zd,
    useImperativeHandle: Qy,
    useInsertionEffect: Ky,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Pc,
    useRef: qy,
    useState: function () {
      return Pc(ni);
    },
    useDebugValue: ef,
    useDeferredValue: function (e) {
      var t = Yt();
      return He === null ? (t.memoizedState = e) : ev(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = Pc(ni)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: zy,
    useSyncExternalStore: By,
    useId: tv,
    unstable_isNewReconciler: !1,
  };
function Qt(e, t) {
  if (e && e.defaultProps) {
    (t = je({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Tu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : je({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var da = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? to(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      o = pr(e),
      s = Fn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = dr(e, s, o)),
      t !== null && (nn(t, e, o, r), il(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      o = pr(e),
      s = Fn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = dr(e, s, o)),
      t !== null && (nn(t, e, o, r), il(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = dt(),
      r = pr(e),
      o = Fn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = dr(e, o, r)),
      t !== null && (nn(t, e, r, n), il(t, e, r));
  },
};
function Em(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gs(n, r) || !Gs(o, s)
      : !0
  );
}
function sv(e, t, n) {
  var r = !1,
    o = gr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ut(s))
      : ((o = _t(t) ? Vr : st.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Bo(e, o) : gr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = da),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function _m(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && da.enqueueReplaceState(t, t.state, null);
}
function Nu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Yd(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = Ut(s))
    : ((s = _t(t) ? Vr : st.current), (o.context = Bo(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Tu(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && da.enqueueReplaceState(o, o.state, null),
      jl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Uo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ix(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Tc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ou(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jS = typeof WeakMap == "function" ? WeakMap : Map;
function iv(e, t, n) {
  (n = Fn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ml || ((Ml = !0), (Vu = r)), Ou(e, t);
    }),
    n
  );
}
function lv(e, t, n) {
  (n = Fn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ou(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Ou(e, t),
          typeof r != "function" &&
            (fr === null ? (fr = new Set([this])) : fr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function km(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jS();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = qS.bind(null, e, t, n)), t.then(e, e));
}
function Rm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Dm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Fn(-1, 1)), (t.tag = 2), dr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var $S = Wn.ReactCurrentOwner,
  St = !1;
function ct(e, t, n, r) {
  t.child = e === null ? Ay(t, null, n, r) : Ho(t, e.child, n, r);
}
function Pm(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    $o(t, o),
    (r = Qd(e, t, n, r, s, o)),
    (n = Jd()),
    e !== null && !St
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Vn(e, t, o))
      : (De && n && Id(t), (t.flags |= 1), ct(e, t, r, o), t.child)
  );
}
function Tm(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !cf(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), av(e, t, s, r, o))
      : ((e = fl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gs), n(i, r) && e.ref === t.ref)
    )
      return Vn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = mr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function av(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Gs(s, r) && e.ref === t.ref)
      if (((St = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (St = !0);
      else return (t.lanes = e.lanes), Vn(e, t, o);
  }
  return ju(e, t, n, r, o);
}
function cv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        be(Do, Nt),
        (Nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          be(Do, Nt),
          (Nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        be(Do, Nt),
        (Nt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      be(Do, Nt),
      (Nt |= r);
  return ct(e, t, o, n), t.child;
}
function uv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ju(e, t, n, r, o) {
  var s = _t(n) ? Vr : st.current;
  return (
    (s = Bo(t, s)),
    $o(t, o),
    (n = Qd(e, t, n, r, s, o)),
    (r = Jd()),
    e !== null && !St
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Vn(e, t, o))
      : (De && r && Id(t), (t.flags |= 1), ct(e, t, n, o), t.child)
  );
}
function Nm(e, t, n, r, o) {
  if (_t(n)) {
    var s = !0;
    Dl(t);
  } else s = !1;
  if (($o(t, o), t.stateNode === null))
    cl(e, t), sv(t, n, r), Nu(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ut(c))
      : ((c = _t(n) ? Vr : st.current), (c = Bo(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && _m(t, i, r, c)),
      (Zn = !1);
    var f = t.memoizedState;
    (i.state = f),
      jl(t, r, i, o),
      (a = t.memoizedState),
      l !== r || f !== a || Et.current || Zn
        ? (typeof u == "function" && (Tu(t, n, u, r), (a = t.memoizedState)),
          (l = Zn || Em(t, n, l, r, f, a, c))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      My(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Qt(t.type, l)),
      (i.props = c),
      (d = t.pendingProps),
      (f = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ut(a))
        : ((a = _t(n) ? Vr : st.current), (a = Bo(t, a)));
    var m = n.getDerivedStateFromProps;
    (u =
      typeof m == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && _m(t, i, r, a)),
      (Zn = !1),
      (f = t.memoizedState),
      (i.state = f),
      jl(t, r, i, o);
    var p = t.memoizedState;
    l !== d || f !== p || Et.current || Zn
      ? (typeof m == "function" && (Tu(t, n, m, r), (p = t.memoizedState)),
        (c = Zn || Em(t, n, c, r, f, p, a) || !1)
          ? (u ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, p, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, p, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (i.props = r),
        (i.state = p),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $u(e, t, n, r, s, o);
}
function $u(e, t, n, r, o, s) {
  uv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && gm(t, n, !1), Vn(e, t, s);
  (r = t.stateNode), ($S.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ho(t, e.child, null, s)), (t.child = Ho(t, null, l, s)))
      : ct(e, t, l, s),
    (t.memoizedState = r.state),
    o && gm(t, n, !0),
    t.child
  );
}
function dv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hm(e, t.context, !1),
    qd(e, t.containerInfo);
}
function Om(e, t, n, r, o) {
  return Vo(), Bd(o), (t.flags |= 256), ct(e, t, n, r), t.child;
}
var Lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Au(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fv(e, t, n) {
  var r = t.pendingProps,
    o = Ne.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    be(Ne, o & 1),
    e === null)
  )
    return (
      Du(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = ma(i, r, 0, null)),
              (e = Mr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Au(n)),
              (t.memoizedState = Lu),
              e)
            : tf(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return LS(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = mr(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = mr(l, s)) : ((s = Mr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Au(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Lu),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = mr(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function tf(e, t) {
  return (
    (t = ma({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Bi(e, t, n, r) {
  return (
    r !== null && Bd(r),
    Ho(t, e.child, null, n),
    (e = tf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function LS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Tc(Error(H(422)))), Bi(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = ma({ mode: "visible", children: r.children }, o, 0, null)),
        (s = Mr(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Ho(t, e.child, null, i),
        (t.child.memoizedState = Au(i)),
        (t.memoizedState = Lu),
        s);
  if (!(t.mode & 1)) return Bi(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(H(419))), (r = Tc(s, r, void 0)), Bi(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), St || l)) {
    if (((r = qe), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), Bn(e, o), nn(r, e, o, -1));
    }
    return af(), (r = Tc(Error(H(421)))), Bi(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = KS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ot = ur(o.nextSibling)),
      (jt = t),
      (De = !0),
      (Zt = null),
      e !== null &&
        ((zt[Bt++] = Ln),
        (zt[Bt++] = An),
        (zt[Bt++] = Hr),
        (Ln = e.id),
        (An = e.overflow),
        (Hr = t)),
      (t = tf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function jm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pu(e.return, t, n);
}
function Nc(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function pv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((ct(e, t, r.children, n), (r = Ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jm(e, n, t);
        else if (e.tag === 19) jm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((be(Ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && $l(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Nc(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && $l(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Nc(t, !0, n, null, s);
        break;
      case "together":
        Nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function cl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ur |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function AS(e, t, n) {
  switch (t.tag) {
    case 3:
      dv(t), Vo();
      break;
    case 5:
      Iy(t);
      break;
    case 1:
      _t(t.type) && Dl(t);
      break;
    case 4:
      qd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      be(Nl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (be(Ne, Ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fv(e, t, n)
          : (be(Ne, Ne.current & 1),
            (e = Vn(e, t, n)),
            e !== null ? e.sibling : null);
      be(Ne, Ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        be(Ne, Ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cv(e, t, n);
  }
  return Vn(e, t, n);
}
var mv, Fu, hv, gv;
mv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fu = function () {};
hv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Lr(En.current);
    var s = null;
    switch (n) {
      case "input":
        (o = su(e, o)), (r = su(e, r)), (s = []);
        break;
      case "select":
        (o = je({}, o, { value: void 0 })),
          (r = je({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = au(e, o)), (r = au(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = kl);
    }
    uu(n, r);
    var i;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var l = o[c];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Vs.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((l = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== l && (a != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (s || (s = []), s.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Vs.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && Ee("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
gv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ss(e, t) {
  if (!De)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function FS(e, t, n) {
  var r = t.pendingProps;
  switch ((zd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return tt(t), null;
    case 1:
      return _t(t.type) && Rl(), tt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wo(),
        _e(Et),
        _e(st),
        Gd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ii(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Zt !== null && (Uu(Zt), (Zt = null)))),
        Fu(e, t),
        tt(t),
        null
      );
    case 5:
      Kd(t);
      var o = Lr(ei.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        hv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return tt(t), null;
        }
        if (((e = Lr(En.current)), Ii(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Sn] = t), (r[Js] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ee("cancel", r), Ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ns.length; o++) Ee(Ns[o], r);
              break;
            case "source":
              Ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ee("error", r), Ee("load", r);
              break;
            case "details":
              Ee("toggle", r);
              break;
            case "input":
              Vp(r, s), Ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Ee("invalid", r);
              break;
            case "textarea":
              Wp(r, s), Ee("invalid", r);
          }
          uu(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Mi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Mi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Vs.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  Ee("scroll", r);
            }
          switch (n) {
            case "input":
              Ti(r), Hp(r, s, !0);
              break;
            case "textarea":
              Ti(r), Up(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = kl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Sn] = t),
            (e[Js] = r),
            mv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = du(n, r)), n)) {
              case "dialog":
                Ee("cancel", e), Ee("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ns.length; o++) Ee(Ns[o], e);
                o = r;
                break;
              case "source":
                Ee("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ee("error", e), Ee("load", e), (o = r);
                break;
              case "details":
                Ee("toggle", e), (o = r);
                break;
              case "input":
                Vp(e, r), (o = su(e, r)), Ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = je({}, r, { value: void 0 })),
                  Ee("invalid", e);
                break;
              case "textarea":
                Wp(e, r), (o = au(e, r)), Ee("invalid", e);
                break;
              default:
                o = r;
            }
            uu(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? qg(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ug(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Hs(e, a)
                    : typeof a == "number" && Hs(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Vs.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && Ee("scroll", e)
                      : a != null && _d(e, s, a, i));
              }
            switch (n) {
              case "input":
                Ti(e), Hp(e, r, !1);
                break;
              case "textarea":
                Ti(e), Up(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? To(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      To(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = kl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null) gv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (((n = Lr(ei.current)), Lr(En.current), Ii(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Sn] = t),
            (s = r.nodeValue !== n) && ((e = jt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Sn] = t),
            (t.stateNode = r);
      }
      return tt(t), null;
    case 13:
      if (
        (_e(Ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (De && Ot !== null && t.mode & 1 && !(t.flags & 128))
          $y(), Vo(), (t.flags |= 98560), (s = !1);
        else if (((s = Ii(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(H(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(H(317));
            s[Sn] = t;
          } else
            Vo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          tt(t), (s = !1);
        } else Zt !== null && (Uu(Zt), (Zt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ne.current & 1 ? We === 0 && (We = 3) : af())),
          t.updateQueue !== null && (t.flags |= 4),
          tt(t),
          null);
    case 4:
      return (
        Wo(), Fu(e, t), e === null && Xs(t.stateNode.containerInfo), tt(t), null
      );
    case 10:
      return Wd(t.type._context), tt(t), null;
    case 17:
      return _t(t.type) && Rl(), tt(t), null;
    case 19:
      if ((_e(Ne), (s = t.memoizedState), s === null)) return tt(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Ss(s, !1);
        else {
          if (We !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = $l(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Ss(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return be(Ne, (Ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ze() > Yo &&
            ((t.flags |= 128), (r = !0), Ss(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $l(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ss(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !De)
            )
              return tt(t), null;
          } else
            2 * ze() - s.renderingStartTime > Yo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ss(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ze()),
          (t.sibling = null),
          (n = Ne.current),
          be(Ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (tt(t), null);
    case 22:
    case 23:
      return (
        lf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Nt & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : tt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function MS(e, t) {
  switch ((zd(t), t.tag)) {
    case 1:
      return (
        _t(t.type) && Rl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wo(),
        _e(Et),
        _e(st),
        Gd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Kd(t), null;
    case 13:
      if (
        (_e(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340));
        Vo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return _e(Ne), null;
    case 4:
      return Wo(), null;
    case 10:
      return Wd(t.type._context), null;
    case 22:
    case 23:
      return lf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vi = !1,
  nt = !1,
  IS = typeof WeakSet == "function" ? WeakSet : Set,
  K = null;
function Ro(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Fe(e, t, r);
      }
    else n.current = null;
}
function Mu(e, t, n) {
  try {
    n();
  } catch (r) {
    Fe(e, t, r);
  }
}
var $m = !1;
function zS(e, t) {
  if (((Su = Cl), (e = Sy()), Md(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = i + o),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++c === o && (l = i),
                f === s && ++u === r && (a = i),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bu = { focusedElem: e, selectionRange: n }, Cl = !1, K = t; K !== null; )
    if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (K = e);
    else
      for (; K !== null; ) {
        t = K;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var h = p.memoizedProps,
                    S = p.memoizedState,
                    w = t.stateNode,
                    v = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : Qt(t.type, h),
                      S
                    );
                  w.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(H(163));
            }
        } catch (b) {
          Fe(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (K = e);
          break;
        }
        K = t.return;
      }
  return (p = $m), ($m = !1), p;
}
function Ms(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Mu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function fa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Iu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Sn], delete t[Js], delete t[_u], delete t[bS], delete t[CS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = kl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zu(e, t, n), e = e.sibling; e !== null; ) zu(e, t, n), (e = e.sibling);
}
function Bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bu(e, t, n), e = e.sibling; e !== null; ) Bu(e, t, n), (e = e.sibling);
}
var Qe = null,
  Jt = !1;
function Xn(e, t, n) {
  for (n = n.child; n !== null; ) wv(e, t, n), (n = n.sibling);
}
function wv(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == "function")
    try {
      Cn.onCommitFiberUnmount(oa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      nt || Ro(n, t);
    case 6:
      var r = Qe,
        o = Jt;
      (Qe = null),
        Xn(e, t, n),
        (Qe = r),
        (Jt = o),
        Qe !== null &&
          (Jt
            ? ((e = Qe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Qe.removeChild(n.stateNode));
      break;
    case 18:
      Qe !== null &&
        (Jt
          ? ((e = Qe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ec(e.parentNode, n)
              : e.nodeType === 1 && Ec(e, n),
            qs(e))
          : Ec(Qe, n.stateNode));
      break;
    case 4:
      (r = Qe),
        (o = Jt),
        (Qe = n.stateNode.containerInfo),
        (Jt = !0),
        Xn(e, t, n),
        (Qe = r),
        (Jt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !nt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Mu(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Xn(e, t, n);
      break;
    case 1:
      if (
        !nt &&
        (Ro(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Fe(n, t, l);
        }
      Xn(e, t, n);
      break;
    case 21:
      Xn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((nt = (r = nt) || n.memoizedState !== null), Xn(e, t, n), (nt = r))
        : Xn(e, t, n);
      break;
    default:
      Xn(e, t, n);
  }
}
function Am(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new IS()),
      t.forEach(function (r) {
        var o = GS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Qe = l.stateNode), (Jt = !1);
              break e;
            case 3:
              (Qe = l.stateNode.containerInfo), (Jt = !0);
              break e;
            case 4:
              (Qe = l.stateNode.containerInfo), (Jt = !0);
              break e;
          }
          l = l.return;
        }
        if (Qe === null) throw Error(H(160));
        wv(s, i, o), (Qe = null), (Jt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        Fe(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xv(t, e), (t = t.sibling);
}
function xv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xt(t, e), gn(e), r & 4)) {
        try {
          Ms(3, e, e.return), fa(3, e);
        } catch (h) {
          Fe(e, e.return, h);
        }
        try {
          Ms(5, e, e.return);
        } catch (h) {
          Fe(e, e.return, h);
        }
      }
      break;
    case 1:
      Xt(t, e), gn(e), r & 512 && n !== null && Ro(n, n.return);
      break;
    case 5:
      if (
        (Xt(t, e),
        gn(e),
        r & 512 && n !== null && Ro(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Hs(o, "");
        } catch (h) {
          Fe(e, e.return, h);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Vg(o, s),
              du(l, i);
            var c = du(l, s);
            for (i = 0; i < a.length; i += 2) {
              var u = a[i],
                d = a[i + 1];
              u === "style"
                ? qg(o, d)
                : u === "dangerouslySetInnerHTML"
                ? Ug(o, d)
                : u === "children"
                ? Hs(o, d)
                : _d(o, u, d, c);
            }
            switch (l) {
              case "input":
                iu(o, s);
                break;
              case "textarea":
                Hg(o, s);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? To(o, !!s.multiple, m, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? To(o, !!s.multiple, s.defaultValue, !0)
                      : To(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Js] = s;
          } catch (h) {
            Fe(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Xt(t, e), gn(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (h) {
          Fe(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Xt(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qs(t.containerInfo);
        } catch (h) {
          Fe(e, e.return, h);
        }
      break;
    case 4:
      Xt(t, e), gn(e);
      break;
    case 13:
      Xt(t, e),
        gn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (of = ze())),
        r & 4 && Am(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((nt = (c = nt) || u), Xt(t, e), (nt = c)) : Xt(t, e),
        gn(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (K = e, u = e.child; u !== null; ) {
            for (d = K = u; K !== null; ) {
              switch (((f = K), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ms(4, f, f.return);
                  break;
                case 1:
                  Ro(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (h) {
                      Fe(r, n, h);
                    }
                  }
                  break;
                case 5:
                  Ro(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Mm(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (K = m)) : Mm(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (o = d.stateNode),
                  c
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Yg("display", i)));
              } catch (h) {
                Fe(e, e.return, h);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (h) {
                Fe(e, e.return, h);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Xt(t, e), gn(e), r & 4 && Am(e);
      break;
    case 21:
      break;
    default:
      Xt(t, e), gn(e);
  }
}
function gn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Hs(o, ""), (r.flags &= -33));
          var s = Lm(e);
          Bu(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Lm(e);
          zu(e, l, i);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      Fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function BS(e, t, n) {
  (K = e), Sv(e);
}
function Sv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Vi;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || nt;
        l = Vi;
        var c = nt;
        if (((Vi = i), (nt = a) && !c))
          for (K = o; K !== null; )
            (i = K),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Im(o)
                : a !== null
                ? ((a.return = i), (K = a))
                : Im(o);
        for (; s !== null; ) (K = s), Sv(s), (s = s.sibling);
        (K = o), (Vi = l), (nt = c);
      }
      Fm(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (K = s)) : Fm(e);
  }
}
function Fm(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || fa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !nt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Sm(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sm(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && qs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(H(163));
          }
        nt || (t.flags & 512 && Iu(t));
      } catch (f) {
        Fe(t, t.return, f);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function Mm(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function Im(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fa(4, t);
          } catch (a) {
            Fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Fe(t, o, a);
            }
          }
          var s = t.return;
          try {
            Iu(t);
          } catch (a) {
            Fe(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Iu(t);
          } catch (a) {
            Fe(t, i, a);
          }
      }
    } catch (a) {
      Fe(t, t.return, a);
    }
    if (t === e) {
      K = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (K = l);
      break;
    }
    K = t.return;
  }
}
var VS = Math.ceil,
  Fl = Wn.ReactCurrentDispatcher,
  nf = Wn.ReactCurrentOwner,
  Ht = Wn.ReactCurrentBatchConfig,
  pe = 0,
  qe = null,
  Be = null,
  Je = 0,
  Nt = 0,
  Do = xr(0),
  We = 0,
  oi = null,
  Ur = 0,
  pa = 0,
  rf = 0,
  Is = null,
  xt = null,
  of = 0,
  Yo = 1 / 0,
  jn = null,
  Ml = !1,
  Vu = null,
  fr = null,
  Hi = !1,
  sr = null,
  Il = 0,
  zs = 0,
  Hu = null,
  ul = -1,
  dl = 0;
function dt() {
  return pe & 6 ? ze() : ul !== -1 ? ul : (ul = ze());
}
function pr(e) {
  return e.mode & 1
    ? pe & 2 && Je !== 0
      ? Je & -Je
      : _S.transition !== null
      ? (dl === 0 && (dl = sy()), dl)
      : ((e = ye),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fy(e.type))),
        e)
    : 1;
}
function nn(e, t, n, r) {
  if (50 < zs) throw ((zs = 0), (Hu = null), Error(H(185)));
  pi(e, n, r),
    (!(pe & 2) || e !== qe) &&
      (e === qe && (!(pe & 2) && (pa |= n), We === 4 && nr(e, Je)),
      kt(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((Yo = ze() + 500), ca && Sr()));
}
function kt(e, t) {
  var n = e.callbackNode;
  _x(e, t);
  var r = bl(e, e === qe ? Je : 0);
  if (r === 0)
    n !== null && Kp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Kp(n), t === 1))
      e.tag === 0 ? ES(zm.bind(null, e)) : Ny(zm.bind(null, e)),
        xS(function () {
          !(pe & 6) && Sr();
        }),
        (n = null);
    else {
      switch (iy(r)) {
        case 1:
          n = Td;
          break;
        case 4:
          n = ry;
          break;
        case 16:
          n = Sl;
          break;
        case 536870912:
          n = oy;
          break;
        default:
          n = Sl;
      }
      n = Pv(n, bv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function bv(e, t) {
  if (((ul = -1), (dl = 0), pe & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if (Lo() && e.callbackNode !== n) return null;
  var r = bl(e, e === qe ? Je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zl(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var s = Ev();
    (qe !== e || Je !== t) && ((jn = null), (Yo = ze() + 500), Fr(e, t));
    do
      try {
        US();
        break;
      } catch (l) {
        Cv(e, l);
      }
    while (!0);
    Hd(),
      (Fl.current = s),
      (pe = o),
      Be !== null ? (t = 0) : ((qe = null), (Je = 0), (t = We));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = gu(e)), o !== 0 && ((r = o), (t = Wu(e, o)))), t === 1)
    )
      throw ((n = oi), Fr(e, 0), nr(e, r), kt(e, ze()), n);
    if (t === 6) nr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !HS(o) &&
          ((t = zl(e, r)),
          t === 2 && ((s = gu(e)), s !== 0 && ((r = s), (t = Wu(e, s)))),
          t === 1))
      )
        throw ((n = oi), Fr(e, 0), nr(e, r), kt(e, ze()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          Tr(e, xt, jn);
          break;
        case 3:
          if (
            (nr(e, r), (r & 130023424) === r && ((t = of + 500 - ze()), 10 < t))
          ) {
            if (bl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              dt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Eu(Tr.bind(null, e, xt, jn), t);
            break;
          }
          Tr(e, xt, jn);
          break;
        case 4:
          if ((nr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - tn(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = ze() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * VS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Eu(Tr.bind(null, e, xt, jn), r);
            break;
          }
          Tr(e, xt, jn);
          break;
        case 5:
          Tr(e, xt, jn);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return kt(e, ze()), e.callbackNode === n ? bv.bind(null, e) : null;
}
function Wu(e, t) {
  var n = Is;
  return (
    e.current.memoizedState.isDehydrated && (Fr(e, t).flags |= 256),
    (e = zl(e, t)),
    e !== 2 && ((t = xt), (xt = n), t !== null && Uu(t)),
    e
  );
}
function Uu(e) {
  xt === null ? (xt = e) : xt.push.apply(xt, e);
}
function HS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!on(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nr(e, t) {
  for (
    t &= ~rf,
      t &= ~pa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function zm(e) {
  if (pe & 6) throw Error(H(327));
  Lo();
  var t = bl(e, 0);
  if (!(t & 1)) return kt(e, ze()), null;
  var n = zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gu(e);
    r !== 0 && ((t = r), (n = Wu(e, r)));
  }
  if (n === 1) throw ((n = oi), Fr(e, 0), nr(e, t), kt(e, ze()), n);
  if (n === 6) throw Error(H(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tr(e, xt, jn),
    kt(e, ze()),
    null
  );
}
function sf(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((Yo = ze() + 500), ca && Sr());
  }
}
function Yr(e) {
  sr !== null && sr.tag === 0 && !(pe & 6) && Lo();
  var t = pe;
  pe |= 1;
  var n = Ht.transition,
    r = ye;
  try {
    if (((Ht.transition = null), (ye = 1), e)) return e();
  } finally {
    (ye = r), (Ht.transition = n), (pe = t), !(pe & 6) && Sr();
  }
}
function lf() {
  (Nt = Do.current), _e(Do);
}
function Fr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wS(n)), Be !== null))
    for (n = Be.return; n !== null; ) {
      var r = n;
      switch ((zd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Rl();
          break;
        case 3:
          Wo(), _e(Et), _e(st), Gd();
          break;
        case 5:
          Kd(r);
          break;
        case 4:
          Wo();
          break;
        case 13:
          _e(Ne);
          break;
        case 19:
          _e(Ne);
          break;
        case 10:
          Wd(r.type._context);
          break;
        case 22:
        case 23:
          lf();
      }
      n = n.return;
    }
  if (
    ((qe = e),
    (Be = e = mr(e.current, null)),
    (Je = Nt = t),
    (We = 0),
    (oi = null),
    (rf = pa = Ur = 0),
    (xt = Is = null),
    $r !== null)
  ) {
    for (t = 0; t < $r.length; t++)
      if (((n = $r[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    $r = null;
  }
  return e;
}
function Cv(e, t) {
  do {
    var n = Be;
    try {
      if ((Hd(), (ll.current = Al), Ll)) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ll = !1;
      }
      if (
        ((Wr = 0),
        (Ye = He = Oe = null),
        (Fs = !1),
        (ti = 0),
        (nf.current = null),
        n === null || n.return === null)
      ) {
        (We = 1), (oi = t), (Be = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Je),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            u = l,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var m = Rm(i);
          if (m !== null) {
            (m.flags &= -257),
              Dm(m, i, l, s, t),
              m.mode & 1 && km(s, c, t),
              (t = m),
              (a = c);
            var p = t.updateQueue;
            if (p === null) {
              var h = new Set();
              h.add(a), (t.updateQueue = h);
            } else p.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              km(s, c, t), af();
              break e;
            }
            a = Error(H(426));
          }
        } else if (De && l.mode & 1) {
          var S = Rm(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Dm(S, i, l, s, t),
              Bd(Uo(a, l));
            break e;
          }
        }
        (s = a = Uo(a, l)),
          We !== 4 && (We = 2),
          Is === null ? (Is = [s]) : Is.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var w = iv(s, a, t);
              xm(s, w);
              break e;
            case 1:
              l = a;
              var v = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (fr === null || !fr.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var b = lv(s, l, t);
                xm(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      kv(n);
    } catch (C) {
      (t = C), Be === n && n !== null && (Be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ev() {
  var e = Fl.current;
  return (Fl.current = Al), e === null ? Al : e;
}
function af() {
  (We === 0 || We === 3 || We === 2) && (We = 4),
    qe === null || (!(Ur & 268435455) && !(pa & 268435455)) || nr(qe, Je);
}
function zl(e, t) {
  var n = pe;
  pe |= 2;
  var r = Ev();
  (qe !== e || Je !== t) && ((jn = null), Fr(e, t));
  do
    try {
      WS();
      break;
    } catch (o) {
      Cv(e, o);
    }
  while (!0);
  if ((Hd(), (pe = n), (Fl.current = r), Be !== null)) throw Error(H(261));
  return (qe = null), (Je = 0), We;
}
function WS() {
  for (; Be !== null; ) _v(Be);
}
function US() {
  for (; Be !== null && !gx(); ) _v(Be);
}
function _v(e) {
  var t = Dv(e.alternate, e, Nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? kv(e) : (Be = t),
    (nf.current = null);
}
function kv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = MS(n, t)), n !== null)) {
        (n.flags &= 32767), (Be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (We = 6), (Be = null);
        return;
      }
    } else if (((n = FS(n, t, Nt)), n !== null)) {
      Be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Be = t;
      return;
    }
    Be = t = e;
  } while (t !== null);
  We === 0 && (We = 5);
}
function Tr(e, t, n) {
  var r = ye,
    o = Ht.transition;
  try {
    (Ht.transition = null), (ye = 1), YS(e, t, n, r);
  } finally {
    (Ht.transition = o), (ye = r);
  }
  return null;
}
function YS(e, t, n, r) {
  do Lo();
  while (sr !== null);
  if (pe & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (kx(e, s),
    e === qe && ((Be = qe = null), (Je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hi ||
      ((Hi = !0),
      Pv(Sl, function () {
        return Lo(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ht.transition), (Ht.transition = null);
    var i = ye;
    ye = 1;
    var l = pe;
    (pe |= 4),
      (nf.current = null),
      zS(e, n),
      xv(n, e),
      fS(bu),
      (Cl = !!Su),
      (bu = Su = null),
      (e.current = n),
      BS(n),
      yx(),
      (pe = l),
      (ye = i),
      (Ht.transition = s);
  } else e.current = n;
  if (
    (Hi && ((Hi = !1), (sr = e), (Il = o)),
    (s = e.pendingLanes),
    s === 0 && (fr = null),
    xx(n.stateNode),
    kt(e, ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ml) throw ((Ml = !1), (e = Vu), (Vu = null), e);
  return (
    Il & 1 && e.tag !== 0 && Lo(),
    (s = e.pendingLanes),
    s & 1 ? (e === Hu ? zs++ : ((zs = 0), (Hu = e))) : (zs = 0),
    Sr(),
    null
  );
}
function Lo() {
  if (sr !== null) {
    var e = iy(Il),
      t = Ht.transition,
      n = ye;
    try {
      if (((Ht.transition = null), (ye = 16 > e ? 16 : e), sr === null))
        var r = !1;
      else {
        if (((e = sr), (sr = null), (Il = 0), pe & 6)) throw Error(H(331));
        var o = pe;
        for (pe |= 4, K = e.current; K !== null; ) {
          var s = K,
            i = s.child;
          if (K.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (K = c; K !== null; ) {
                  var u = K;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ms(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (K = d);
                  else
                    for (; K !== null; ) {
                      u = K;
                      var f = u.sibling,
                        m = u.return;
                      if ((yv(u), u === c)) {
                        K = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (K = f);
                        break;
                      }
                      K = m;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var h = p.child;
                if (h !== null) {
                  p.child = null;
                  do {
                    var S = h.sibling;
                    (h.sibling = null), (h = S);
                  } while (h !== null);
                }
              }
              K = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (K = i);
          else
            e: for (; K !== null; ) {
              if (((s = K), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ms(9, s, s.return);
                }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (K = w);
                break e;
              }
              K = s.return;
            }
        }
        var v = e.current;
        for (K = v; K !== null; ) {
          i = K;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (K = y);
          else
            e: for (i = v; K !== null; ) {
              if (((l = K), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fa(9, l);
                  }
                } catch (C) {
                  Fe(l, l.return, C);
                }
              if (l === i) {
                K = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                (b.return = l.return), (K = b);
                break e;
              }
              K = l.return;
            }
        }
        if (
          ((pe = o), Sr(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
        )
          try {
            Cn.onPostCommitFiberRoot(oa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ye = n), (Ht.transition = t);
    }
  }
  return !1;
}
function Bm(e, t, n) {
  (t = Uo(n, t)),
    (t = iv(e, t, 1)),
    (e = dr(e, t, 1)),
    (t = dt()),
    e !== null && (pi(e, 1, t), kt(e, t));
}
function Fe(e, t, n) {
  if (e.tag === 3) Bm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fr === null || !fr.has(r)))
        ) {
          (e = Uo(n, e)),
            (e = lv(t, e, 1)),
            (t = dr(t, e, 1)),
            (e = dt()),
            t !== null && (pi(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    qe === e &&
      (Je & n) === n &&
      (We === 4 || (We === 3 && (Je & 130023424) === Je && 500 > ze() - of)
        ? Fr(e, 0)
        : (rf |= n)),
    kt(e, t);
}
function Rv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ji), (ji <<= 1), !(ji & 130023424) && (ji = 4194304))
      : (t = 1));
  var n = dt();
  (e = Bn(e, t)), e !== null && (pi(e, t, n), kt(e, n));
}
function KS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Rv(e, n);
}
function GS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  r !== null && r.delete(t), Rv(e, n);
}
var Dv;
Dv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) St = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (St = !1), AS(e, t, n);
      St = !!(e.flags & 131072);
    }
  else (St = !1), De && t.flags & 1048576 && Oy(t, Tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      cl(e, t), (e = t.pendingProps);
      var o = Bo(t, st.current);
      $o(t, n), (o = Qd(null, t, r, e, o, n));
      var s = Jd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _t(r) ? ((s = !0), Dl(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Yd(t),
            (o.updater = da),
            (t.stateNode = o),
            (o._reactInternals = t),
            Nu(t, r, e, n),
            (t = $u(null, t, r, !0, s, n)))
          : ((t.tag = 0), De && s && Id(t), ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (cl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = QS(r)),
          (e = Qt(r, e)),
          o)
        ) {
          case 0:
            t = ju(null, t, r, e, n);
            break e;
          case 1:
            t = Nm(null, t, r, e, n);
            break e;
          case 11:
            t = Pm(null, t, r, e, n);
            break e;
          case 14:
            t = Tm(null, t, r, Qt(r.type, e), n);
            break e;
        }
        throw Error(H(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Qt(r, o)),
        ju(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Qt(r, o)),
        Nm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dv(t), e === null)) throw Error(H(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          My(e, t),
          jl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = Uo(Error(H(423)), t)), (t = Om(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Uo(Error(H(424)), t)), (t = Om(e, t, r, n, o));
            break e;
          } else
            for (
              Ot = ur(t.stateNode.containerInfo.firstChild),
                jt = t,
                De = !0,
                Zt = null,
                n = Ay(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Vo(), r === o)) {
            t = Vn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Iy(t),
        e === null && Du(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Cu(r, o) ? (i = null) : s !== null && Cu(r, s) && (t.flags |= 32),
        uv(e, t),
        ct(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Du(t), null;
    case 13:
      return fv(e, t, n);
    case 4:
      return (
        qd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ho(t, null, r, n)) : ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Qt(r, o)),
        Pm(e, t, r, o, n)
      );
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          be(Nl, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (on(s.value, i)) {
            if (s.children === o.children && !Et.current) {
              t = Vn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Fn(-1, n & -n)), (a.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (a.next = a)
                          : ((a.next = u.next), (u.next = a)),
                          (c.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Pu(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(H(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Pu(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        ct(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $o(t, n),
        (o = Ut(o)),
        (r = r(o)),
        (t.flags |= 1),
        ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Qt(r, t.pendingProps)),
        (o = Qt(r.type, o)),
        Tm(e, t, r, o, n)
      );
    case 15:
      return av(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Qt(r, o)),
        cl(e, t),
        (t.tag = 1),
        _t(r) ? ((e = !0), Dl(t)) : (e = !1),
        $o(t, n),
        sv(t, r, o),
        Nu(t, r, o, n),
        $u(null, t, r, !0, e, n)
      );
    case 19:
      return pv(e, t, n);
    case 22:
      return cv(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Pv(e, t) {
  return ny(e, t);
}
function XS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Vt(e, t, n, r) {
  return new XS(e, t, n, r);
}
function cf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function QS(e) {
  if (typeof e == "function") return cf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Rd)) return 11;
    if (e === Dd) return 14;
  }
  return 2;
}
function mr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Vt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function fl(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) cf(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case vo:
        return Mr(n.children, o, s, t);
      case kd:
        (i = 8), (o |= 8);
        break;
      case tu:
        return (
          (e = Vt(12, n, t, o | 2)), (e.elementType = tu), (e.lanes = s), e
        );
      case nu:
        return (e = Vt(13, n, t, o)), (e.elementType = nu), (e.lanes = s), e;
      case ru:
        return (e = Vt(19, n, t, o)), (e.elementType = ru), (e.lanes = s), e;
      case Ig:
        return ma(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fg:
              i = 10;
              break e;
            case Mg:
              i = 9;
              break e;
            case Rd:
              i = 11;
              break e;
            case Dd:
              i = 14;
              break e;
            case Jn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(H(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Vt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Mr(e, t, n, r) {
  return (e = Vt(7, e, r, t)), (e.lanes = n), e;
}
function ma(e, t, n, r) {
  return (
    (e = Vt(22, e, r, t)),
    (e.elementType = Ig),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Oc(e, t, n) {
  return (e = Vt(6, e, null, t)), (e.lanes = n), e;
}
function jc(e, t, n) {
  return (
    (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function JS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = pc(0)),
    (this.expirationTimes = pc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = pc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function uf(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new JS(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Vt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yd(s),
    e
  );
}
function ZS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tv(e) {
  if (!e) return gr;
  e = e._reactInternals;
  e: {
    if (to(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_t(n)) return Ty(e, n, t);
  }
  return t;
}
function Nv(e, t, n, r, o, s, i, l, a) {
  return (
    (e = uf(n, r, !0, e, o, s, i, l, a)),
    (e.context = Tv(null)),
    (n = e.current),
    (r = dt()),
    (o = pr(n)),
    (s = Fn(r, o)),
    (s.callback = t ?? null),
    dr(n, s, o),
    (e.current.lanes = o),
    pi(e, o, r),
    kt(e, r),
    e
  );
}
function ha(e, t, n, r) {
  var o = t.current,
    s = dt(),
    i = pr(o);
  return (
    (n = Tv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Fn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dr(o, t, i)),
    e !== null && (nn(e, o, i, s), il(e, o, i)),
    i
  );
}
function Bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function df(e, t) {
  Vm(e, t), (e = e.alternate) && Vm(e, t);
}
function eb() {
  return null;
}
var Ov =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ff(e) {
  this._internalRoot = e;
}
ga.prototype.render = ff.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  ha(e, t, null, null);
};
ga.prototype.unmount = ff.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yr(function () {
      ha(null, e, null, null);
    }),
      (t[zn] = null);
  }
};
function ga(e) {
  this._internalRoot = e;
}
ga.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tr.length && t !== 0 && t < tr[n].priority; n++);
    tr.splice(n, 0, e), n === 0 && dy(e);
  }
};
function pf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ya(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hm() {}
function tb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Bl(i);
        s.call(c);
      };
    }
    var i = Nv(t, r, e, 0, null, !1, !1, "", Hm);
    return (
      (e._reactRootContainer = i),
      (e[zn] = i.current),
      Xs(e.nodeType === 8 ? e.parentNode : e),
      Yr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Bl(a);
      l.call(c);
    };
  }
  var a = uf(e, 0, !1, null, null, !1, !1, "", Hm);
  return (
    (e._reactRootContainer = a),
    (e[zn] = a.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    Yr(function () {
      ha(t, a, n, r);
    }),
    a
  );
}
function va(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Bl(i);
        l.call(a);
      };
    }
    ha(t, i, e, o);
  } else i = tb(n, t, e, o, r);
  return Bl(i);
}
ly = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ts(t.pendingLanes);
        n !== 0 &&
          (Nd(t, n | 1), kt(t, ze()), !(pe & 6) && ((Yo = ze() + 500), Sr()));
      }
      break;
    case 13:
      Yr(function () {
        var r = Bn(e, 1);
        if (r !== null) {
          var o = dt();
          nn(r, e, 1, o);
        }
      }),
        df(e, 1);
  }
};
Od = function (e) {
  if (e.tag === 13) {
    var t = Bn(e, 134217728);
    if (t !== null) {
      var n = dt();
      nn(t, e, 134217728, n);
    }
    df(e, 134217728);
  }
};
ay = function (e) {
  if (e.tag === 13) {
    var t = pr(e),
      n = Bn(e, t);
    if (n !== null) {
      var r = dt();
      nn(n, e, t, r);
    }
    df(e, t);
  }
};
cy = function () {
  return ye;
};
uy = function (e, t) {
  var n = ye;
  try {
    return (ye = e), t();
  } finally {
    ye = n;
  }
};
pu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((iu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = aa(r);
            if (!o) throw Error(H(90));
            Bg(r), iu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Hg(e, n);
      break;
    case "select":
      (t = n.value), t != null && To(e, !!n.multiple, t, !1);
  }
};
Xg = sf;
Qg = Yr;
var nb = { usingClientEntryPoint: !1, Events: [hi, bo, aa, Kg, Gg, sf] },
  bs = {
    findFiberByHostInstance: jr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rb = {
    bundleType: bs.bundleType,
    version: bs.version,
    rendererPackageName: bs.rendererPackageName,
    rendererConfig: bs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ey(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: bs.findFiberByHostInstance || eb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wi.isDisabled && Wi.supportsFiber)
    try {
      (oa = Wi.inject(rb)), (Cn = Wi);
    } catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nb;
At.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pf(t)) throw Error(H(200));
  return ZS(e, t, null, n);
};
At.createRoot = function (e, t) {
  if (!pf(e)) throw Error(H(299));
  var n = !1,
    r = "",
    o = Ov;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = uf(e, 1, !1, null, null, n, !1, r, o)),
    (e[zn] = t.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    new ff(t)
  );
};
At.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(H(188))
      : ((e = Object.keys(e).join(",")), Error(H(268, e)));
  return (e = ey(t)), (e = e === null ? null : e.stateNode), e;
};
At.flushSync = function (e) {
  return Yr(e);
};
At.hydrate = function (e, t, n) {
  if (!ya(t)) throw Error(H(200));
  return va(null, e, t, !0, n);
};
At.hydrateRoot = function (e, t, n) {
  if (!pf(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Ov;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Nv(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[zn] = t.current),
    Xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ga(t);
};
At.render = function (e, t, n) {
  if (!ya(t)) throw Error(H(200));
  return va(null, e, t, !1, n);
};
At.unmountComponentAtNode = function (e) {
  if (!ya(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (Yr(function () {
        va(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zn] = null);
        });
      }),
      !0)
    : !1;
};
At.unstable_batchedUpdates = sf;
At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ya(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return va(e, t, n, !1, r);
};
At.version = "18.3.1-next-f1338f8080-20240426";
function jv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv);
    } catch (e) {
      console.error(e);
    }
}
jv(), (jg.exports = At);
var yi = jg.exports;
const ob = Zr(yi);
var Wm = yi;
(Zc.createRoot = Wm.createRoot), (Zc.hydrateRoot = Wm.hydrateRoot);
var bn = function () {
  return (
    (bn =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    bn.apply(this, arguments)
  );
};
function $v(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function sb(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var pl = "right-scroll-bar-position",
  ml = "width-before-scroll-bar",
  ib = "with-scroll-bars-hidden",
  lb = "--removed-body-scroll-bar-size";
function $c(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ab(e, t) {
  var n = x.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var cb = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  Um = new WeakMap();
function ub(e, t) {
  var n = ab(null, function (r) {
    return e.forEach(function (o) {
      return $c(o, r);
    });
  });
  return (
    cb(
      function () {
        var r = Um.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (l) {
            s.has(l) || $c(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || $c(l, i);
            });
        }
        Um.set(n, e);
      },
      [e]
    ),
    n
  );
}
function db(e) {
  return e;
}
function fb(e, t) {
  t === void 0 && (t = db);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (l) {
              return l !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (l) {
            return s(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(s), (i = n);
        }
        var a = function () {
            var u = i;
            (i = []), u.forEach(s);
          },
          c = function () {
            return Promise.resolve().then(a);
          };
        c(),
          (n = {
            push: function (u) {
              i.push(u), c();
            },
            filter: function (u) {
              return (i = i.filter(u)), n;
            },
          });
      },
    };
  return o;
}
function pb(e) {
  e === void 0 && (e = {});
  var t = fb(null);
  return (t.options = bn({ async: !0, ssr: !1 }, e)), t;
}
var Lv = function (e) {
  var t = e.sideCar,
    n = $v(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return x.createElement(r, bn({}, n));
};
Lv.isSideCarExport = !0;
function mb(e, t) {
  return e.useMedium(t), Lv;
}
var Av = pb(),
  Lc = function () {},
  wa = x.forwardRef(function (e, t) {
    var n = x.useRef(null),
      r = x.useState({
        onScrollCapture: Lc,
        onWheelCapture: Lc,
        onTouchMoveCapture: Lc,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      l = e.children,
      a = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      m = e.noIsolation,
      p = e.inert,
      h = e.allowPinchZoom,
      S = e.as,
      w = S === void 0 ? "div" : S,
      v = e.gapMode,
      y = $v(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      b = f,
      C = ub([n, t]),
      E = bn(bn({}, y), o);
    return x.createElement(
      x.Fragment,
      null,
      u &&
        x.createElement(b, {
          sideCar: Av,
          removeScrollBar: c,
          shards: d,
          noIsolation: m,
          inert: p,
          setCallbacks: s,
          allowPinchZoom: !!h,
          lockRef: n,
          gapMode: v,
        }),
      i
        ? x.cloneElement(x.Children.only(l), bn(bn({}, E), { ref: C }))
        : x.createElement(w, bn({}, E, { className: a, ref: C }), l)
    );
  });
wa.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
wa.classNames = { fullWidth: ml, zeroRight: pl };
var hb = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function gb() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = hb();
  return t && e.setAttribute("nonce", t), e;
}
function yb(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function vb(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wb = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = gb()) && (yb(t, n), vb(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  xb = function () {
    var e = wb();
    return function (t, n) {
      x.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Fv = function () {
    var e = xb(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Sb = { left: 0, top: 0, right: 0, gap: 0 },
  Ac = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  bb = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ac(n), Ac(r), Ac(o)];
  },
  Cb = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Sb;
    var t = bb(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Eb = Fv(),
  Ao = "data-scroll-locked",
  _b = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          ib,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Ao,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          pl,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          ml,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(pl, " .")
        .concat(
          pl,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ml, " .")
        .concat(
          ml,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Ao,
          `] {
    `
        )
        .concat(lb, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Ym = function () {
    var e = parseInt(document.body.getAttribute(Ao) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  kb = function () {
    x.useEffect(function () {
      return (
        document.body.setAttribute(Ao, (Ym() + 1).toString()),
        function () {
          var e = Ym() - 1;
          e <= 0
            ? document.body.removeAttribute(Ao)
            : document.body.setAttribute(Ao, e.toString());
        }
      );
    }, []);
  },
  Rb = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    kb();
    var s = x.useMemo(
      function () {
        return Cb(o);
      },
      [o]
    );
    return x.createElement(Eb, { styles: _b(s, !t, o, n ? "" : "!important") });
  },
  Yu = !1;
if (typeof window < "u")
  try {
    var Ui = Object.defineProperty({}, "passive", {
      get: function () {
        return (Yu = !0), !0;
      },
    });
    window.addEventListener("test", Ui, Ui),
      window.removeEventListener("test", Ui, Ui);
  } catch {
    Yu = !1;
  }
var fo = Yu ? { passive: !1 } : !1,
  Db = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Mv = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Db(e) && n[t] === "visible")
    );
  },
  Pb = function (e) {
    return Mv(e, "overflowY");
  },
  Tb = function (e) {
    return Mv(e, "overflowX");
  },
  qm = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Iv(e, r);
      if (o) {
        var s = zv(e, r),
          i = s[1],
          l = s[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Nb = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Ob = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Iv = function (e, t) {
    return e === "v" ? Pb(t) : Tb(t);
  },
  zv = function (e, t) {
    return e === "v" ? Nb(t) : Ob(t);
  },
  jb = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  $b = function (e, t, n, r, o) {
    var s = jb(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      a = t.contains(l),
      c = !1,
      u = i > 0,
      d = 0,
      f = 0;
    do {
      var m = zv(e, l),
        p = m[0],
        h = m[1],
        S = m[2],
        w = h - S - s * p;
      (p || w) && Iv(e, l) && ((d += w), (f += p)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((u && (Math.abs(d) < 1 || !o)) || (!u && (Math.abs(f) < 1 || !o))) &&
        (c = !0),
      c
    );
  },
  Yi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Km = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Gm = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Lb = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Ab = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Fb = 0,
  po = [];
function Mb(e) {
  var t = x.useRef([]),
    n = x.useRef([0, 0]),
    r = x.useRef(),
    o = x.useState(Fb++)[0],
    s = x.useState(Fv)[0],
    i = x.useRef(e);
  x.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    x.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var h = sb([e.lockRef.current], (e.shards || []).map(Gm), !0).filter(
            Boolean
          );
          return (
            h.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                h.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = x.useCallback(function (h, S) {
      if ("touches" in h && h.touches.length === 2)
        return !i.current.allowPinchZoom;
      var w = Yi(h),
        v = n.current,
        y = "deltaX" in h ? h.deltaX : v[0] - w[0],
        b = "deltaY" in h ? h.deltaY : v[1] - w[1],
        C,
        E = h.target,
        R = Math.abs(y) > Math.abs(b) ? "h" : "v";
      if ("touches" in h && R === "h" && E.type === "range") return !1;
      var D = qm(R, E);
      if (!D) return !0;
      if ((D ? (C = R) : ((C = R === "v" ? "h" : "v"), (D = qm(R, E))), !D))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (y || b) && (r.current = C), !C)
      )
        return !0;
      var L = r.current || C;
      return $b(L, S, h, L === "h" ? y : b, !0);
    }, []),
    a = x.useCallback(function (h) {
      var S = h;
      if (!(!po.length || po[po.length - 1] !== s)) {
        var w = "deltaY" in S ? Km(S) : Yi(S),
          v = t.current.filter(function (C) {
            return (
              C.name === S.type &&
              (C.target === S.target || S.target === C.shadowParent) &&
              Lb(C.delta, w)
            );
          })[0];
        if (v && v.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!v) {
          var y = (i.current.shards || [])
              .map(Gm)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(S.target);
              }),
            b = y.length > 0 ? l(S, y[0]) : !i.current.noIsolation;
          b && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    c = x.useCallback(function (h, S, w, v) {
      var y = { name: h, delta: S, target: w, should: v, shadowParent: Ib(w) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== y;
          });
        }, 1);
    }, []),
    u = x.useCallback(function (h) {
      (n.current = Yi(h)), (r.current = void 0);
    }, []),
    d = x.useCallback(function (h) {
      c(h.type, Km(h), h.target, l(h, e.lockRef.current));
    }, []),
    f = x.useCallback(function (h) {
      c(h.type, Yi(h), h.target, l(h, e.lockRef.current));
    }, []);
  x.useEffect(function () {
    return (
      po.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, fo),
      document.addEventListener("touchmove", a, fo),
      document.addEventListener("touchstart", u, fo),
      function () {
        (po = po.filter(function (h) {
          return h !== s;
        })),
          document.removeEventListener("wheel", a, fo),
          document.removeEventListener("touchmove", a, fo),
          document.removeEventListener("touchstart", u, fo);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    p = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    p ? x.createElement(s, { styles: Ab(o) }) : null,
    m ? x.createElement(Rb, { gapMode: e.gapMode }) : null
  );
}
function Ib(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const zb = mb(Av, Mb);
var Bv = x.forwardRef(function (e, t) {
  return x.createElement(wa, bn({}, e, { ref: t, sideCar: zb }));
});
Bv.classNames = wa.classNames;
function _n(e) {
  return Object.keys(e);
}
function Fc(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function mf(e, t) {
  const n = { ...e },
    r = t;
  return (
    Fc(e) &&
      Fc(t) &&
      Object.keys(t).forEach((o) => {
        Fc(r[o]) && o in e ? (n[o] = mf(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function Bb(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function Vb(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)")
    ? e
    : (t = e.match(/^calc\((.*?)\)$/)) == null
    ? void 0
    : t[1].split("*")[0].trim();
}
function Hb(e) {
  const t = Vb(e);
  return typeof t == "number"
    ? t
    : typeof t == "string"
    ? t.includes("calc") || t.includes("var")
      ? t
      : t.includes("px")
      ? Number(t.replace("px", ""))
      : t.includes("rem")
      ? Number(t.replace("rem", "")) * 16
      : t.includes("em")
      ? Number(t.replace("em", "")) * 16
      : Number(t)
    : NaN;
}
function Mc(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function Vv(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? Mc(o) : o;
    }
    if (typeof r == "string") {
      if (
        r === "" ||
        r.startsWith("calc(") ||
        r.startsWith("clamp(") ||
        r.includes("rgba(")
      )
        return r;
      if (r.includes(","))
        return r
          .split(",")
          .map((s) => n(s))
          .join(",");
      if (r.includes(" "))
        return r
          .split(" ")
          .map((s) => n(s))
          .join(" ");
      if (r.includes(e)) return t ? Mc(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const s = `${Number(o) / 16}${e}`;
        return t ? Mc(s) : s;
      }
    }
    return r;
  }
  return n;
}
const z = Vv("rem", { shouldScale: !0 }),
  Xm = Vv("em");
function hf(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
    {}
  );
}
function Hv(e) {
  return typeof e == "number"
    ? !0
    : typeof e == "string"
    ? e.startsWith("calc(") ||
      e.startsWith("var(") ||
      (e.includes(" ") && e.trim() !== "")
      ? !0
      : /[0-9]/.test(e.trim().replace("-", "")[0])
    : !1;
}
function no(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
    ? e.type !== x.Fragment
    : !1;
}
function br(e) {
  const t = x.createContext(null);
  return [
    ({ children: o, value: s }) => g.jsx(t.Provider, { value: s, children: o }),
    () => {
      const o = x.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function gf(e = null) {
  const t = x.createContext(e);
  return [
    ({ children: o, value: s }) => g.jsx(t.Provider, { value: s, children: o }),
    () => x.useContext(t),
  ];
}
const Wb = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function ro(e) {
  return Wb[e];
}
const Ub = () => {};
function Yb(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active
    ? t.onKeyDown || Ub
    : (n) => {
        var r;
        n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
      };
}
function Pe(e, t = "size", n = !0) {
  if (e !== void 0) return Hv(e) ? (n ? z(e) : e) : `var(--${t}-${e})`;
}
function xa(e) {
  return Pe(e, "mantine-spacing");
}
function Rn(e) {
  return e === void 0
    ? "var(--mantine-radius-default)"
    : Pe(e, "mantine-radius");
}
function ot(e) {
  return Pe(e, "mantine-font-size");
}
function qb(e) {
  return Pe(e, "mantine-line-height", !1);
}
function yf(e) {
  if (e) return Pe(e, "mantine-shadow", !1);
}
function Vl(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function Kb(e, t, n) {
  return t === void 0 && n === void 0
    ? e
    : t !== void 0 && n === void 0
    ? Math.max(e, t)
    : Math.min(t === void 0 && n !== void 0 ? e : Math.max(e, t), n);
}
function Wv() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Qm(e) {
  return typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1);
}
function Nr(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Sa(e, t) {
  const n = Nr(e),
    r = x.useRef(0);
  return (
    x.useEffect(() => () => window.clearTimeout(r.current), []),
    x.useCallback(
      (...o) => {
        window.clearTimeout(r.current),
          (r.current = window.setTimeout(() => n(...o), t));
      },
      [n, t]
    )
  );
}
const Jm = ["mousedown", "touchstart"];
function Gb(e, t, n) {
  const r = x.useRef();
  return (
    x.useEffect(() => {
      const o = (s) => {
        const { target: i } = s ?? {};
        if (Array.isArray(n)) {
          const l =
            (i == null
              ? void 0
              : i.hasAttribute("data-ignore-outside-clicks")) ||
            (!document.body.contains(i) && i.tagName !== "HTML");
          n.every((c) => !!c && !s.composedPath().includes(c)) && !l && e();
        } else r.current && !r.current.contains(i) && e();
      };
      return (
        (t || Jm).forEach((s) => document.addEventListener(s, o)),
        () => {
          (t || Jm).forEach((s) => document.removeEventListener(s, o));
        }
      );
    }, [r, e, n]),
    r
  );
}
function Xb(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function Qb(e, t) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function Jb(
  e,
  t,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
) {
  const [r, o] = x.useState(n ? t : Qb(e)),
    s = x.useRef();
  return (
    x.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (s.current = window.matchMedia(e)),
          o(s.current.matches),
          Xb(s.current, (i) => o(i.matches))
        );
    }, [e]),
    r
  );
}
const vi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function qr(e, t) {
  const n = x.useRef(!1);
  x.useEffect(
    () => () => {
      n.current = !1;
    },
    []
  ),
    x.useEffect(() => {
      if (n.current) return e();
      n.current = !0;
    }, t);
}
function Uv({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = x.useRef(),
    r = () => {
      var o;
      n.current &&
        "focus" in n.current &&
        typeof n.current.focus == "function" &&
        ((o = n.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    qr(() => {
      let o = -1;
      const s = (i) => {
        i.key === "Tab" && window.clearTimeout(o);
      };
      return (
        document.addEventListener("keydown", s),
        e
          ? (n.current = document.activeElement)
          : t && (o = window.setTimeout(r, 10)),
        () => {
          window.clearTimeout(o), document.removeEventListener("keydown", s);
        }
      );
    }, [e, t]),
    r
  );
}
function Zb(e, t = "body > :not(script)") {
  const n = Wv(),
    r = Array.from(document.querySelectorAll(t)).map((o) => {
      var a;
      if (
        ((a = o == null ? void 0 : o.shadowRoot) != null && a.contains(e)) ||
        o.contains(e)
      )
        return;
      const s = o.getAttribute("aria-hidden"),
        i = o.getAttribute("data-hidden"),
        l = o.getAttribute("data-focus-id");
      return (
        o.setAttribute("data-focus-id", n),
        s === null || s === "false"
          ? o.setAttribute("aria-hidden", "true")
          : !i && !l && o.setAttribute("data-hidden", s),
        { node: o, ariaHidden: i || null }
      );
    });
  return () => {
    r.forEach((o) => {
      !o ||
        n !== o.node.getAttribute("data-focus-id") ||
        (o.ariaHidden === null
          ? o.node.removeAttribute("aria-hidden")
          : o.node.setAttribute("aria-hidden", o.ariaHidden),
        o.node.removeAttribute("data-focus-id"),
        o.node.removeAttribute("data-hidden"));
    });
  };
}
const eC = /input|select|textarea|button|object/,
  Yv = "a, input, select, textarea, button, object, [tabindex]";
function tC(e) {
  return e.style.display === "none";
}
function nC(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (tC(n)) return !1;
    n = n.parentNode;
  }
  return !0;
}
function qv(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function qu(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(qv(e));
  return (
    ((eC.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      n) &&
    nC(e)
  );
}
function Kv(e) {
  const t = qv(e);
  return (Number.isNaN(t) || t >= 0) && qu(e);
}
function rC(e) {
  return Array.from(e.querySelectorAll(Yv)).filter(Kv);
}
function oC(e, t) {
  const n = rC(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const r = n[t.shiftKey ? 0 : n.length - 1],
    o = e.getRootNode();
  let s = r === o.activeElement || e === o.activeElement;
  const i = o.activeElement;
  if (
    (i.tagName === "INPUT" &&
      i.getAttribute("type") === "radio" &&
      (s = n
        .filter(
          (u) =>
            u.getAttribute("type") === "radio" &&
            u.getAttribute("name") === i.getAttribute("name")
        )
        .includes(r)),
    !s)
  )
    return;
  t.preventDefault();
  const a = n[t.shiftKey ? n.length - 1 : 0];
  a && a.focus();
}
function sC(e = !0) {
  const t = x.useRef(),
    n = x.useRef(null),
    r = (s) => {
      let i = s.querySelector("[data-autofocus]");
      if (!i) {
        const l = Array.from(s.querySelectorAll(Yv));
        (i = l.find(Kv) || l.find(qu) || null), !i && qu(s) && (i = s);
      }
      i && i.focus({ preventScroll: !0 });
    },
    o = x.useCallback(
      (s) => {
        if (e) {
          if (s === null) {
            n.current && (n.current(), (n.current = null));
            return;
          }
          (n.current = Zb(s)),
            t.current !== s &&
              (s
                ? (setTimeout(() => {
                    s.getRootNode() && r(s);
                  }),
                  (t.current = s))
                : (t.current = null));
        }
      },
      [e]
    );
  return (
    x.useEffect(() => {
      if (!e) return;
      t.current && setTimeout(() => r(t.current));
      const s = (i) => {
        i.key === "Tab" && t.current && oC(t.current, i);
      };
      return (
        document.addEventListener("keydown", s),
        () => {
          document.removeEventListener("keydown", s), n.current && n.current();
        }
      );
    }, [e]),
    o
  );
}
const iC = ra.useId || (() => {});
function lC() {
  const e = iC();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Cr(e) {
  const t = lC(),
    [n, r] = x.useState(t);
  return (
    vi(() => {
      r(Wv());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : n
  );
}
function aC(e, t, n) {
  x.useEffect(
    () => (
      window.addEventListener(e, t, n),
      () => window.removeEventListener(e, t, n)
    ),
    [e, t]
  );
}
function vf(e, t) {
  typeof e == "function"
    ? e(t)
    : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Gv(...e) {
  return (t) => {
    e.forEach((n) => vf(n, t));
  };
}
function Mt(...e) {
  return x.useCallback(Gv(...e), e);
}
function sn({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {},
}) {
  const [o, s] = x.useState(t !== void 0 ? t : n),
    i = (l, ...a) => {
      s(l), r == null || r(l, ...a);
    };
  return e !== void 0 ? [e, r, !0] : [o, i, !1];
}
function wf(e, t) {
  return Jb("(prefers-reduced-motion: reduce)", e, t);
}
function si(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {},
    [o, s] = x.useState(e),
    i = x.useCallback(() => {
      s((c) => c || (n == null || n(), !0));
    }, [n]),
    l = x.useCallback(() => {
      s((c) => c && (r == null || r(), !1));
    }, [r]),
    a = x.useCallback(() => {
      o ? l() : i();
    }, [l, i, o]);
  return [o, { open: i, close: l, toggle: a }];
}
var cC = {};
function uC() {
  return typeof process < "u" && cC ? "production" : "development";
}
function Xv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Xv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ft() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Xv(e)) && (r && (r += " "), (r += t));
  return r;
}
const dC = {};
function fC(e) {
  const t = {};
  return (
    e.forEach((n) => {
      Object.entries(n).forEach(([r, o]) => {
        t[r] ? (t[r] = ft(t[r], o)) : (t[r] = o);
      });
    }),
    t
  );
}
function ba({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const s = (Array.isArray(t) ? t : [t]).map((i) =>
    typeof i == "function" ? i(e, n, r) : i || dC
  );
  return fC(s);
}
function Hl({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce(
    (s, i) =>
      typeof i == "function" ? { ...s, ...i(e, n, r) } : { ...s, ...i },
    {}
  );
}
const Qv = x.createContext(null);
function oo() {
  const e = x.useContext(Qv);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function pC() {
  return oo().cssVariablesResolver;
}
function mC() {
  return oo().classNamesPrefix;
}
function xf() {
  return oo().getStyleNonce;
}
function hC() {
  return oo().withStaticClasses;
}
function gC() {
  return oo().headless;
}
function yC() {
  var e;
  return (e = oo().stylesTransform) == null ? void 0 : e.sx;
}
function vC() {
  var e;
  return (e = oo().stylesTransform) == null ? void 0 : e.styles;
}
function wC(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function xC(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const i = t.split("");
    t = [i[0], i[0], i[1], i[1], i[2], i[2]].join("");
  }
  if (t.length === 8) {
    const i = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: i,
    };
  }
  const n = parseInt(t, 16),
    r = (n >> 16) & 255,
    o = (n >> 8) & 255,
    s = n & 255;
  return { r, g: o, b: s, a: 1 };
}
function SC(e) {
  const [t, n, r, o] = e
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function bC(e) {
  const t =
      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    n = e.match(t);
  if (!n) return { r: 0, g: 0, b: 0, a: 1 };
  const r = parseInt(n[1], 10),
    o = parseInt(n[2], 10) / 100,
    s = parseInt(n[3], 10) / 100,
    i = n[5] ? parseFloat(n[5]) : void 0,
    l = (1 - Math.abs(2 * s - 1)) * o,
    a = r / 60,
    c = l * (1 - Math.abs((a % 2) - 1)),
    u = s - l / 2;
  let d, f, m;
  return (
    a >= 0 && a < 1
      ? ((d = l), (f = c), (m = 0))
      : a >= 1 && a < 2
      ? ((d = c), (f = l), (m = 0))
      : a >= 2 && a < 3
      ? ((d = 0), (f = l), (m = c))
      : a >= 3 && a < 4
      ? ((d = 0), (f = c), (m = l))
      : a >= 4 && a < 5
      ? ((d = c), (f = 0), (m = l))
      : ((d = l), (f = 0), (m = c)),
    {
      r: Math.round((d + u) * 255),
      g: Math.round((f + u) * 255),
      b: Math.round((m + u) * 255),
      a: i || 1,
    }
  );
}
function Sf(e) {
  return wC(e)
    ? xC(e)
    : e.startsWith("rgb")
    ? SC(e)
    : e.startsWith("hsl")
    ? bC(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function qi(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: s } = Sf(e),
    i = 1 - t,
    l = (a) => Math.round(a * i);
  return `rgba(${l(n)}, ${l(r)}, ${l(o)}, ${s})`;
}
function ii(e, t) {
  return typeof e.primaryShade == "number"
    ? e.primaryShade
    : t === "dark"
    ? e.primaryShade.dark
    : e.primaryShade.light;
}
function Ic(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function CC(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function EC(e) {
  if (e.startsWith("oklch(")) return (CC(e) || 0) / 100;
  const { r: t, g: n, b: r } = Sf(e),
    o = t / 255,
    s = n / 255,
    i = r / 255,
    l = Ic(o),
    a = Ic(s),
    c = Ic(i);
  return 0.2126 * l + 0.7152 * a + 0.0722 * c;
}
function Cs(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : EC(e) > t;
}
function ns({ color: e, theme: t, colorScheme: n }) {
  if (typeof e != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`
    );
  if (e === "bright")
    return {
      color: e,
      value: n === "dark" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Cs(n === "dark" ? t.white : t.black, t.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: Cs(
        n === "dark" ? t.colors.dark[2] : t.colors.gray[6],
        t.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed",
    };
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Cs(e === "white" ? t.white : t.black, t.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [r, o] = e.split("."),
    s = o ? Number(o) : void 0,
    i = r in t.colors;
  if (i) {
    const l = s !== void 0 ? t.colors[r][s] : t.colors[r][ii(t, n || "light")];
    return {
      color: r,
      value: l,
      shade: s,
      isThemeColor: i,
      isLight: Cs(l, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${s}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: i,
    isLight: Cs(e, t.luminanceThreshold),
    shade: s,
    variable: void 0,
  };
}
function qo(e, t) {
  const n = ns({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Ku(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0,
    },
    r = qo(n.from, t),
    o = qo(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function wn(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const s = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${s}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/")
      ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
      : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = Sf(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const mo = wn,
  _C = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
    const s = ns({ color: e, theme: t }),
      i = typeof o == "boolean" ? o : t.autoContrast;
    if (n === "filled") {
      const l =
        i && s.isLight
          ? "var(--mantine-color-black)"
          : "var(--mantine-color-white)";
      return s.isThemeColor
        ? s.shade === void 0
          ? {
              background: `var(--mantine-color-${e}-filled)`,
              hover: `var(--mantine-color-${e}-filled-hover)`,
              color: l,
              border: `${z(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${s.color}-${s.shade})`,
              hover: `var(--mantine-color-${s.color}-${
                s.shade === 9 ? 8 : s.shade + 1
              })`,
              color: l,
              border: `${z(1)} solid transparent`,
            }
        : {
            background: e,
            hover: qi(e, 0.1),
            color: l,
            border: `${z(1)} solid transparent`,
          };
    }
    if (n === "light") {
      if (s.isThemeColor) {
        if (s.shade === void 0)
          return {
            background: `var(--mantine-color-${e}-light)`,
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${z(1)} solid transparent`,
          };
        const l = t.colors[s.color][s.shade];
        return {
          background: wn(l, 0.1),
          hover: wn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${z(1)} solid transparent`,
        };
      }
      return {
        background: wn(e, 0.1),
        hover: wn(e, 0.12),
        color: e,
        border: `${z(1)} solid transparent`,
      };
    }
    if (n === "outline")
      return s.isThemeColor
        ? s.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${e}-outline-hover)`,
              color: `var(--mantine-color-${e}-outline)`,
              border: `${z(1)} solid var(--mantine-color-${e}-outline)`,
            }
          : {
              background: "transparent",
              hover: wn(t.colors[s.color][s.shade], 0.05),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${z(1)} solid var(--mantine-color-${s.color}-${
                s.shade
              })`,
            }
        : {
            background: "transparent",
            hover: wn(e, 0.05),
            color: e,
            border: `${z(1)} solid ${e}`,
          };
    if (n === "subtle") {
      if (s.isThemeColor) {
        if (s.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${z(1)} solid transparent`,
          };
        const l = t.colors[s.color][s.shade];
        return {
          background: "transparent",
          hover: wn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${z(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: wn(e, 0.12),
        color: e,
        border: `${z(1)} solid transparent`,
      };
    }
    return n === "transparent"
      ? s.isThemeColor
        ? s.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${z(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
              border: `${z(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: e,
            border: `${z(1)} solid transparent`,
          }
      : n === "white"
      ? s.isThemeColor
        ? s.shade === void 0
          ? {
              background: "var(--mantine-color-white)",
              hover: qi(t.white, 0.01),
              color: `var(--mantine-color-${e}-filled)`,
              border: `${z(1)} solid transparent`,
            }
          : {
              background: "var(--mantine-color-white)",
              hover: qi(t.white, 0.01),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${z(1)} solid transparent`,
            }
        : {
            background: "var(--mantine-color-white)",
            hover: qi(t.white, 0.01),
            color: e,
            border: `${z(1)} solid transparent`,
          }
      : n === "gradient"
      ? {
          background: Ku(r, t),
          hover: Ku(r, t),
          color: "var(--mantine-color-white)",
          border: "none",
        }
      : n === "default"
      ? {
          background: "var(--mantine-color-default)",
          hover: "var(--mantine-color-default-hover)",
          color: "var(--mantine-color-default-color)",
          border: `${z(1)} solid var(--mantine-color-default-border)`,
        }
      : {};
  },
  kC = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  },
  Zm =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  bf = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: kC,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: _C,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: Zm,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: Zm,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: z(34), lineHeight: "1.3" },
        h2: { fontSize: z(26), lineHeight: "1.35" },
        h3: { fontSize: z(22), lineHeight: "1.4" },
        h4: { fontSize: z(18), lineHeight: "1.45" },
        h5: { fontSize: z(16), lineHeight: "1.5" },
        h6: { fontSize: z(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: z(12), sm: z(14), md: z(16), lg: z(18), xl: z(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    radius: { xs: z(2), sm: z(4), md: z(8), lg: z(16), xl: z(32) },
    spacing: { xs: z(10), sm: z(12), md: z(16), lg: z(20), xl: z(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${z(1)} ${z(3)} rgba(0, 0, 0, 0.05), 0 ${z(1)} ${z(
        2
      )} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${z(1)} ${z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${z(
        10
      )} ${z(15)} ${z(-5)}, rgba(0, 0, 0, 0.04) 0 ${z(7)} ${z(7)} ${z(-5)}`,
      md: `0 ${z(1)} ${z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${z(
        20
      )} ${z(25)} ${z(-5)}, rgba(0, 0, 0, 0.04) 0 ${z(10)} ${z(10)} ${z(-5)}`,
      lg: `0 ${z(1)} ${z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${z(
        28
      )} ${z(23)} ${z(-7)}, rgba(0, 0, 0, 0.04) 0 ${z(12)} ${z(12)} ${z(-7)}`,
      xl: `0 ${z(1)} ${z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${z(
        36
      )} ${z(28)} ${z(-7)}, rgba(0, 0, 0, 0.04) 0 ${z(17)} ${z(17)} ${z(-7)}`,
    },
    other: {},
    components: {},
  };
function eh(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function RC({ key: e = "mantine-color-scheme-value" } = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(e);
        return eh(r) ? r : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(e, n);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r
        );
      }
    },
    subscribe: (n) => {
      (t = (r) => {
        r.storageArea === window.localStorage &&
          r.key === e &&
          eh(r.newValue) &&
          n(r.newValue);
      }),
        window.addEventListener("storage", t);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    },
  };
}
const DC =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  th =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function zc(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function nh(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(DC);
  if (
    typeof e.primaryShade == "object" &&
    (!zc(e.primaryShade.dark) || !zc(e.primaryShade.light))
  )
    throw new Error(th);
  if (typeof e.primaryShade == "number" && !zc(e.primaryShade))
    throw new Error(th);
}
function PC(e, t) {
  var r;
  if (!t) return nh(e), e;
  const n = mf(e, t);
  return (
    t.fontFamily &&
      !((r = t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    nh(n),
    n
  );
}
const Cf = x.createContext(null),
  TC = () => x.useContext(Cf) || bf;
function Dn() {
  const e = x.useContext(Cf);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function Jv({ theme: e, children: t, inherit: n = !0 }) {
  const r = TC(),
    o = x.useMemo(() => PC(n ? r : bf, e), [e, r, n]);
  return g.jsx(Cf.Provider, { value: o, children: t });
}
Jv.displayName = "@mantine/core/MantineThemeProvider";
function NC() {
  const e = Dn(),
    t = xf(),
    n = _n(e.breakpoints).reduce((r, o) => {
      const s = e.breakpoints[o].includes("px"),
        i = Hb(e.breakpoints[o]),
        l = s ? `${i - 0.1}px` : Xm(i - 0.1),
        a = s ? `${i}px` : Xm(i);
      return `${r}@media (max-width: ${l}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, "");
  return g.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function Bc(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n};`)
    .join("");
}
function Vc(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function OC(e, t) {
  const n = Bc(e.variables),
    r = n ? Vc(t, n) : "",
    o = Bc(e.dark),
    s = o ? Vc(`${t}[data-mantine-color-scheme="dark"]`, o) : "",
    i = Bc(e.light),
    l = i ? Vc(`${t}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${s}${l}`;
}
function Zv({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) &&
    ns({ color: e || t.primaryColor, theme: t }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function rh(e, t) {
  return Zv({
    color: e.colors[e.primaryColor][ii(e, t)],
    theme: e,
    autoContrast: null,
  });
}
function Ki({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0,
}) {
  if (!e.colors[t]) return {};
  if (n === "light") {
    const l = ii(e, "light"),
      a = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
          l === 9 ? 8 : l + 1
        })`,
        [`--mantine-color-${r}-light`]: mo(e.colors[t][l], 0.1),
        [`--mantine-color-${r}-light-hover`]: mo(e.colors[t][l], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline-hover`]: mo(e.colors[t][l], 0.05),
      };
    return o
      ? {
          [`--mantine-color-${r}-0`]: e.colors[t][0],
          [`--mantine-color-${r}-1`]: e.colors[t][1],
          [`--mantine-color-${r}-2`]: e.colors[t][2],
          [`--mantine-color-${r}-3`]: e.colors[t][3],
          [`--mantine-color-${r}-4`]: e.colors[t][4],
          [`--mantine-color-${r}-5`]: e.colors[t][5],
          [`--mantine-color-${r}-6`]: e.colors[t][6],
          [`--mantine-color-${r}-7`]: e.colors[t][7],
          [`--mantine-color-${r}-8`]: e.colors[t][8],
          [`--mantine-color-${r}-9`]: e.colors[t][9],
          ...a,
        }
      : a;
  }
  const s = ii(e, "dark"),
    i = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
        s === 9 ? 8 : s + 1
      })`,
      [`--mantine-color-${r}-light`]: mo(e.colors[t][Math.max(0, s - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: mo(
        e.colors[t][Math.max(0, s - 2)],
        0.2
      ),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(
        s - 5,
        0
      )})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(
        s - 4,
        0
      )})`,
      [`--mantine-color-${r}-outline-hover`]: mo(
        e.colors[t][Math.max(s - 4, 0)],
        0.05
      ),
    };
  return o
    ? {
        [`--mantine-color-${r}-0`]: e.colors[t][0],
        [`--mantine-color-${r}-1`]: e.colors[t][1],
        [`--mantine-color-${r}-2`]: e.colors[t][2],
        [`--mantine-color-${r}-3`]: e.colors[t][3],
        [`--mantine-color-${r}-4`]: e.colors[t][4],
        [`--mantine-color-${r}-5`]: e.colors[t][5],
        [`--mantine-color-${r}-6`]: e.colors[t][6],
        [`--mantine-color-${r}-7`]: e.colors[t][7],
        [`--mantine-color-${r}-8`]: e.colors[t][8],
        [`--mantine-color-${r}-9`]: e.colors[t][9],
        ...i,
      }
    : i;
}
function jC(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function ho(e, t, n) {
  _n(t).forEach((r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }));
}
const e0 = (e) => {
  const t = ii(e, "light"),
    n =
      e.defaultRadius in e.radius
        ? e.radius[e.defaultRadius]
        : z(e.defaultRadius),
    r = {
      variables: {
        "--mantine-scale": e.scale.toString(),
        "--mantine-cursor-type": e.cursorType,
        "--mantine-color-scheme": "light dark",
        "--mantine-webkit-font-smoothing": e.fontSmoothing
          ? "antialiased"
          : "unset",
        "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": e.white,
        "--mantine-color-black": e.black,
        "--mantine-line-height": e.lineHeights.md,
        "--mantine-font-family": e.fontFamily,
        "--mantine-font-family-monospace": e.fontFamilyMonospace,
        "--mantine-font-family-headings": e.headings.fontFamily,
        "--mantine-heading-font-weight": e.headings.fontWeight,
        "--mantine-heading-text-wrap": e.headings.textWrap,
        "--mantine-radius-default": n,
        "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`,
      },
      light: {
        "--mantine-primary-color-contrast": rh(e, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": e.black,
        "--mantine-color-body": e.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
      },
      dark: {
        "--mantine-primary-color-contrast": rh(e, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
      },
    };
  ho(r.variables, e.breakpoints, "breakpoint"),
    ho(r.variables, e.spacing, "spacing"),
    ho(r.variables, e.fontSizes, "font-size"),
    ho(r.variables, e.lineHeights, "line-height"),
    ho(r.variables, e.shadows, "shadow"),
    ho(r.variables, e.radius, "radius"),
    e.colors[e.primaryColor].forEach((s, i) => {
      r.variables[
        `--mantine-primary-color-${i}`
      ] = `var(--mantine-color-${e.primaryColor}-${i})`;
    }),
    _n(e.colors).forEach((s) => {
      const i = e.colors[s];
      if (jC(i)) {
        Object.assign(
          r.light,
          Ki({
            theme: e,
            name: i.name,
            color: i.light,
            colorScheme: "light",
            withColorValues: !0,
          })
        ),
          Object.assign(
            r.dark,
            Ki({
              theme: e,
              name: i.name,
              color: i.dark,
              colorScheme: "dark",
              withColorValues: !0,
            })
          );
        return;
      }
      i.forEach((l, a) => {
        r.variables[`--mantine-color-${s}-${a}`] = l;
      }),
        Object.assign(
          r.light,
          Ki({ theme: e, color: s, colorScheme: "light", withColorValues: !1 })
        ),
        Object.assign(
          r.dark,
          Ki({ theme: e, color: s, colorScheme: "dark", withColorValues: !1 })
        );
    });
  const o = e.headings.sizes;
  return (
    _n(o).forEach((s) => {
      (r.variables[`--mantine-${s}-font-size`] = o[s].fontSize),
        (r.variables[`--mantine-${s}-line-height`] = o[s].lineHeight),
        (r.variables[`--mantine-${s}-font-weight`] =
          o[s].fontWeight || e.headings.fontWeight);
    }),
    r
  );
};
function $C({ theme: e, generator: t }) {
  const n = e0(e),
    r = t == null ? void 0 : t(e);
  return r ? mf(n, r) : n;
}
const Hc = e0(bf);
function LC(e) {
  const t = { variables: {}, light: {}, dark: {} };
  return (
    _n(e.variables).forEach((n) => {
      Hc.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
    }),
    _n(e.light).forEach((n) => {
      Hc.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
    }),
    _n(e.dark).forEach((n) => {
      Hc.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
    }),
    t
  );
}
function AC(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function n0({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
  const n = Dn(),
    r = bf(),
    o = hC(),
    s = AC({ theme: n, generator: o }),
    i = e === ":root" && t,
    l = i ? FC(s) : s,
    a = $C(l, e);
  return a
    ? g.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${a}${i ? "" : MC(e)}` },
      })
    : null;
}
n0.displayName = "@mantine/CssVariables";
function IC() {
  const e = console.error;
  console.error = (...t) => {
    (t.length > 1 &&
      typeof t[0] == "string" &&
      t[0].toLowerCase().includes("extra attributes from the server") &&
      typeof t[1] == "string" &&
      t[1].toLowerCase().includes("data-mantine-color-scheme")) ||
      e(...t);
  };
}
function go(e, t) {
  var r;
  const n =
    e !== "auto"
      ? e
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function zC({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r,
}) {
  const o = x.useRef(),
    [s, i] = x.useState(() => e.get(t)),
    l = r || s,
    a = x.useCallback(
      (u) => {
        r || (go(u, n), i(u), e.set(u));
      },
      [e.set, l, r]
    ),
    c = x.useCallback(() => {
      i(t), go(t, n), e.clear();
    }, [e.clear, t]);
  return (
    x.useEffect(
      () => (e.subscribe(a), e.unsubscribe),
      [e.subscribe, e.unsubscribe]
    ),
    yi(() => {
      go(e.get(t), n);
    }, []),
    x.useEffect(() => {
      var d;
      if (r) return go(r, n), () => {};
      r === void 0 && go(s, n),
        (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const u = (f) => {
        s === "auto" && go(f.matches ? "dark" : "light", n);
      };
      return (
        (d = o.current) == null || d.addEventListener("change", u),
        () => {
          var f;
          return (f = o.current) == null
            ? void 0
            : f.removeEventListener("change", u);
        }
      );
    }, [s, r]),
    { colorScheme: l, setColorScheme: a, clearColorScheme: c }
  );
}
function BC({ respectReducedMotion: e, getRootElement: t }) {
  yi(() => {
    var n;
    e &&
      ((n = t()) == null ||
        n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
IC();
function r0({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: s = !0,
  withCssVariables: i = !0,
  cssVariablesSelector: l = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: c = PC(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: m,
  stylesTransform: p,
}) {
  const {
    colorScheme: h,
    setColorScheme: S,
    clearColorScheme: v,
  } = zC({
    defaultColorScheme: u,
    forceColorScheme: m,
    manager: c,
    getRootElement: d,
  });
  return (
    BC({
      respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
      getRootElement: d,
    }),
    g.jsx(Jv.Provider, {
      value: {
        colorScheme: h,
        setColorScheme: S,
        clearColorScheme: v,
        getRootElement: d,
        classNamesPrefix: a,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: l,
        withStaticClasses: r,
        stylesTransform: p,
      },
      children: g.jsxs(Zv, {
        theme: e,
        children: [
          i &&
            g.jsx(n0, { cssVariablesSelector: l, deduplicateCssVariables: s }),
          o && g.jsx(jC, {}),
          t,
        ],
      }),
    })
  );
}
r0.displayName = "@mantine/core/MantineProvider";
function so({ classNames: e, styles: t, props: n, stylesCtx: r }) {
  const o = Dn();
  return {
    resolvedClassNames: ba({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0,
    }),
    resolvedStyles: Vl({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0,
    }),
  };
}
const VC = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function HC({ theme: e, options: t, unstyled: n }) {
  return ft(
    (t == null ? void 0 : t.focusable) &&
      !n &&
      (e.focusClassName || VC[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function WC({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
  return ba({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t,
  })[e];
}
function ih({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
  return ba({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function UC({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function YC({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function qC({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function KC({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
  return e.map((s) => {
    var i, l;
    return (l = ba({
      theme: t,
      classNames: (i = t.components[s]) == null ? void 0 : i.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : l[n];
  });
}
function GC({ options: e, classes: t, selector: n, unstyled: r }) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function XC({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: s,
  classes: i,
  unstyled: l,
  className: a,
  rootSelector: c,
  props: u,
  stylesCtx: d,
  withStaticClasses: f,
  headless: m,
  transformedStyles: p,
}) {
  return ft(
    HC({ theme: e, options: t, unstyled: l || m }),
    KC({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    GC({ options: t, classes: i, selector: r, unstyled: l }),
    ih({ selector: r, stylesCtx: d, theme: e, classNames: s, props: u }),
    ih({ selector: r, stylesCtx: d, theme: e, classNames: p, props: u }),
    WC({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    UC({ rootSelector: c, selector: r, className: a }),
    YC({ selector: r, classes: i, unstyled: l || m }),
    f &&
      !m &&
      qC({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: t == null ? void 0 : t.withStaticClass,
      }),
    t == null ? void 0 : t.className
  );
}
function QC({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
  return t
    .map((s) => {
      var i;
      return Vl({
        theme: e,
        styles: (i = e.components[s]) == null ? void 0 : i.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((s, i) => ({ ...s, ...i }), {});
}
function Xu({ style: e, theme: t }) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Xu({ style: r, theme: t }) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function JC(e) {
  return e.reduce(
    (t, n) => (
      n &&
        Object.keys(n).forEach((r) => {
          t[r] = { ...t[r], ...yf(n[r]) };
        }),
      t
    ),
    {}
  );
}
function ZC({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: s,
  themeName: i,
  headless: l,
}) {
  var a;
  return (a = JC([
    l ? {} : t == null ? void 0 : t(n, r, o),
    ...i.map((c) => {
      var u, d, f;
      return (f =
        (d = (u = n.components) == null ? void 0 : u[c]) == null
          ? void 0
          : d.vars) == null
        ? void 0
        : f.call(d, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o),
  ])) == null
    ? void 0
    : a[s];
}
function eE({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: s,
  rootSelector: i,
  styles: l,
  style: a,
  vars: c,
  varsResolver: u,
  headless: d,
  withStylesTransform: f,
}) {
  return {
    ...(!f &&
      QC({ theme: e, themeName: t, props: o, stylesCtx: s, selector: n })),
    ...(!f && Vl({ theme: e, styles: l, props: o, stylesCtx: s })[n]),
    ...(!f &&
      Vl({
        theme: e,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || o,
        stylesCtx: s,
      })[n]),
    ...ZC({
      theme: e,
      props: o,
      stylesCtx: s,
      vars: c,
      varsResolver: u,
      selector: n,
      themeName: t,
      headless: d,
    }),
    ...(i === n ? Xu({ style: a, theme: e }) : null),
    ...Xu({ style: r == null ? void 0 : r.style, theme: e }),
  };
}
function tE({ props: e, stylesCtx: t, themeName: n }) {
  var i;
  const r = Dn(),
    o = (i = xC()) == null ? void 0 : i();
  return {
    getTransformedStyles: (l) =>
      o
        ? [
            ...l.map((c) => o(c, { props: e, theme: r, ctx: t })),
            ...n.map((c) => {
              var u;
              return o((u = r.components[c]) == null ? void 0 : u.styles, {
                props: e,
                theme: r,
                ctx: t,
              });
            }),
          ].filter(Boolean)
        : [],
    withStylesTransform: !!o,
  };
}
function de({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: s,
  rootSelector: i = "root",
  unstyled: l,
  classNames: a,
  styles: c,
  vars: u,
  varsResolver: d,
}) {
  const f = Dn(),
    m = gC(),
    p = yC(),
    h = vC(),
    S = (Array.isArray(e) ? e : [e]).filter((y) => y),
    { withStylesTransform: v, getTransformedStyles: w } = tE({
      props: n,
      stylesCtx: r,
      themeName: S,
    });
  return (y, b) => ({
    className: XC({
      theme: f,
      options: b,
      themeName: S,
      selector: y,
      classNamesPrefix: m,
      classNames: a,
      classes: t,
      unstyled: l,
      className: o,
      rootSelector: i,
      props: n,
      stylesCtx: r,
      withStaticClasses: p,
      headless: h,
      transformedStyles: w([b == null ? void 0 : b.styles, c]),
    }),
    style: eE({
      theme: f,
      themeName: S,
      selector: y,
      options: b,
      props: n,
      stylesCtx: r,
      rootSelector: i,
      styles: c,
      style: s,
      vars: u,
      varsResolver: d,
      headless: h,
      withStylesTransform: v,
    }),
  });
}
function nE(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function W(e, t, n) {
  var i;
  const r = Dn(),
    o = (i = r.components[e]) == null ? void 0 : i.defaultProps,
    s = typeof o == "function" ? o(r) : o;
  return { ...t, ...s, ...yf(n) };
}
function lh(e) {
  return kn(e)
    .reduce((t, n) => (e[n] !== void 0 ? `${t}${Hb(n)}:${e[n]};` : t), "")
    .trim();
}
function rE({ selector: e, styles: t, media: n }) {
  const r = t ? lh(t) : "",
    o = Array.isArray(n)
      ? n.map((s) => `@media${s.query}{${e}{${lh(s.styles)}}}`)
      : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function oE({ selector: e, styles: t, media: n }) {
  const r = bf();
  return g.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: r == null ? void 0 : r(),
    dangerouslySetInnerHTML: {
      __html: rE({ selector: e, styles: t, media: n }),
    },
  });
}
function rs(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: s,
    ml: i,
    mr: l,
    me: a,
    ms: c,
    p: u,
    px: d,
    py: f,
    pt: m,
    pb: p,
    pl: h,
    pr: S,
    pe: v,
    ps: w,
    bg: y,
    c: b,
    opacity: C,
    ff: E,
    fz: R,
    fw: D,
    lts: L,
    ta: N,
    lh: F,
    fs: B,
    tt: V,
    td: A,
    w: j,
    miw: P,
    maw: T,
    h: _,
    mih: k,
    mah: $,
    bgsz: O,
    bgp: I,
    bgr: q,
    bga: Q,
    pos: ee,
    top: ne,
    left: te,
    bottom: me,
    right: oe,
    inset: le,
    display: Z,
    flex: he,
    hiddenFrom: ae,
    visibleFrom: se,
    lightHidden: _e,
    darkHidden: Ie,
    sx: ve,
    ...Ke
  } = e;
  return {
    styleProps: yf({
      m: t,
      mx: n,
      my: r,
      mt: o,
      mb: s,
      ml: i,
      mr: l,
      me: a,
      ms: c,
      p: u,
      px: d,
      py: f,
      pt: m,
      pb: p,
      pl: h,
      pr: S,
      pe: v,
      ps: w,
      bg: y,
      c: b,
      opacity: C,
      ff: E,
      fz: R,
      fw: D,
      lts: L,
      ta: N,
      lh: F,
      fs: B,
      tt: V,
      td: A,
      w: j,
      miw: P,
      maw: T,
      h: _,
      mih: k,
      mah: $,
      bgsz: O,
      bgp: I,
      bgr: q,
      bga: Q,
      pos: ee,
      top: ne,
      left: te,
      bottom: me,
      right: oe,
      inset: le,
      display: Z,
      flex: he,
      hiddenFrom: ae,
      visibleFrom: se,
      lightHidden: _e,
      darkHidden: Ie,
      sx: ve,
    }),
    rest: Ke,
  };
}
const sE = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" },
};
function o0(e, t) {
  const n = ns({ color: e, theme: t });
  return n.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : n.color === "bright"
    ? "var(--mantine-color-bright)"
    : n.variable
    ? `var(${n.variable})`
    : n.color;
}
function iE(e, t) {
  const n = ns({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : o0(e, t);
}
const ah = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function lE(e) {
  return typeof e == "string" && e in ah ? ah[e] : e;
}
const aE = ["h1", "h2", "h3", "h4", "h5", "h6"];
function cE(e, t) {
  return typeof e == "string" && e in t.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == "string" && aE.includes(e)
    ? `var(--mantine-${e}-font-size)`
    : typeof e == "number" || typeof e == "string"
    ? z(e)
    : e;
}
function uE(e) {
  return e;
}
const dE = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fE(e, t) {
  return typeof e == "string" && e in t.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == "string" && dE.includes(e)
    ? `var(--mantine-${e}-line-height)`
    : e;
}
function pE(e) {
  return typeof e == "number" ? z(e) : e;
}
function mE(e, t) {
  if (typeof e == "number") return z(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing)) return z(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const Uc = {
  color: o0,
  textColor: iE,
  fontSize: cE,
  spacing: mE,
  identity: uE,
  size: pE,
  lineHeight: fE,
  fontFamily: lE,
};
function ch(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function hE({ media: e, ...t }) {
  const r = Object.keys(e)
    .sort((o, s) => Number(ch(o)) - Number(ch(s)))
    .map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function gE(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function yE(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function vE(e) {
  return typeof e == "object" && e !== null
    ? kn(e).filter((t) => t !== "base")
    : [];
}
function wE(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function xE({ styleProps: e, data: t, theme: n }) {
  return hE(
    kn(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
        const s = t[o],
          i = Array.isArray(s.property) ? s.property : [s.property],
          l = yE(e[o]);
        if (!gE(e[o]))
          return (
            i.forEach((c) => {
              r.inlineStyles[c] = Uc[s.type](l, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const a = vE(e[o]);
        return (
          i.forEach((c) => {
            l && (r.styles[c] = Uc[s.type](l, n)),
              a.forEach((u) => {
                const d = `(min-width: ${n.breakpoints[u]})`;
                r.media[d] = { ...r.media[d], [c]: Uc[s.type](wE(e[o], u), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
    )
  );
}
function SE() {
  return `__m__-${x.useId().replace(/:/g, "")}`;
}
function s0(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...s0(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function i0(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function bE(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (t[i0(n)] = e[n]), t
    );
  }, {});
}
function l0(e) {
  return e
    ? typeof e == "string"
      ? { [i0(e)]: !0 }
      : Array.isArray(e)
      ? [...e].reduce((t, n) => ({ ...t, ...l0(n) }), {})
      : bE(e)
    : null;
}
function Qu(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Qu(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function CE({ theme: e, style: t, vars: n, styleProps: r }) {
  const o = Qu(t, e),
    s = Qu(n, e);
  return { ...o, ...s, ...r };
}
const a0 = x.forwardRef(
  (
    {
      component: e,
      style: t,
      __vars: n,
      className: r,
      variant: o,
      mod: s,
      size: i,
      hiddenFrom: l,
      visibleFrom: a,
      lightHidden: c,
      darkHidden: u,
      renderRoot: d,
      ...f
    },
    m
  ) => {
    var R;
    const p = Dn(),
      h = e || "div",
      { styleProps: S, rest: v } = rs(f),
      w = wC(),
      y = (R = w == null ? void 0 : w()) == null ? void 0 : R(S.sx),
      b = SE(),
      C = xE({ styleProps: S, theme: p, data: sE }),
      E = {
        ref: m,
        style: CE({ theme: p, style: t, vars: n, styleProps: C.inlineStyles }),
        className: ft(r, y, {
          [b]: C.hasResponsiveStyles,
          "mantine-light-hidden": c,
          "mantine-dark-hidden": u,
          [`mantine-hidden-from-${l}`]: l,
          [`mantine-visible-from-${a}`]: a,
        }),
        "data-variant": o,
        "data-size": Wv(i) ? void 0 : i || void 0,
        ...l0(s),
        ...v,
      };
    return g.jsxs(g.Fragment, {
      children: [
        C.hasResponsiveStyles &&
          g.jsx(oE, { selector: `.${b}`, styles: C.styles, media: C.media }),
        typeof d == "function" ? d(E) : g.jsx(h, { ...E }),
      ],
    });
  }
);
a0.displayName = "@mantine/core/Box";
const X = a0;
function c0(e) {
  return e;
}
function G(e) {
  const t = x.forwardRef(e);
  return (t.extend = c0), t;
}
function Un(e) {
  const t = x.forwardRef(e);
  return (t.extend = c0), t;
}
const EE = x.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function _f() {
  return x.useContext(EE);
}
function kE(e) {
  if (!e || typeof e == "string") return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Yc(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const Es = typeof window < "u" && window.requestAnimationFrame;
function _E({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {},
  opened: r,
}) {
  const o = x.useRef(null),
    s = 0,
    i = { display: "none", height: 0, overflow: "hidden" },
    [l, a] = x.useState(r ? {} : i),
    c = (p) => {
      gi.flushSync(() => a(p));
    },
    u = (p) => {
      c((h) => ({ ...h, ...p }));
    };
  function d(p) {
    const h = e || kE(p);
    return { transition: `height ${h}ms ${t}, opacity ${h}ms ${t}` };
  }
  qr(() => {
    typeof Es == "function" &&
      Es(
        r
          ? () => {
              u({ willChange: "height", display: "block", overflow: "hidden" }),
                Es(() => {
                  const p = Yc(o);
                  u({ ...d(p), height: p });
                });
            }
          : () => {
              const p = Yc(o);
              u({ ...d(p), willChange: "height", height: p }),
                Es(() => u({ height: s, overflow: "hidden" }));
            }
      );
  }, [r]);
  const f = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (r) {
        const h = Yc(o);
        h === l.height ? c({}) : u({ height: h }), n();
      } else l.height === s && (c(i), n());
  };
  function m({ style: p = {}, refKey: h = "ref", ...S } = {}) {
    const v = S[h];
    return {
      "aria-hidden": !r,
      ...S,
      [h]: Xv(o, v),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...p, ...l },
    };
  }
  return m;
}
const RE = {
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    animateOpacity: !0,
  },
  u0 = G((e, t) => {
    const {
        children: n,
        in: r,
        transitionDuration: o,
        transitionTimingFunction: s,
        style: i,
        onTransitionEnd: l,
        animateOpacity: a,
        ...c
      } = W("Collapse", RE, e),
      u = Dn(),
      d = Sf(),
      m = (u.respectReducedMotion ? d : !1) ? 0 : o,
      p = _E({
        opened: r,
        transitionDuration: m,
        transitionTimingFunction: s,
        onTransitionEnd: l,
      });
    return m === 0
      ? r
        ? g.jsx(X, { ...c, children: n })
        : null
      : g.jsx(X, {
          ...p({
            style: {
              opacity: r || !a ? 1 : 0,
              transition: a ? `opacity ${m}ms ${s}` : "none",
              ...s0(i, u),
            },
            ref: t,
            ...c,
          }),
          children: n,
        });
  });
u0.displayName = "@mantine/core/Collapse";
const [DE, qt] = br("ScrollArea.Root component was not found in tree");
function Ko(e, t) {
  const n = Nr(t);
  yi(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
const PE = x.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = qt(),
      [s, i] = x.useState(0),
      [l, a] = x.useState(0),
      c = !!(s && l);
    return (
      Ko(o.scrollbarX, () => {
        var d;
        const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
        o.onCornerHeightChange(u), a(u);
      }),
      Ko(o.scrollbarY, () => {
        var d;
        const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
        o.onCornerWidthChange(u), i(u);
      }),
      c
        ? g.jsx("div", { ...r, ref: t, style: { ...n, width: s, height: l } })
        : null
    );
  }),
  TE = x.forwardRef((e, t) => {
    const n = qt(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? g.jsx(PE, { ...e, ref: t }) : null;
  }),
  NE = { scrollHideDelay: 1e3, type: "hover" },
  d0 = x.forwardRef((e, t) => {
    const n = W("ScrollAreaRoot", NE, e),
      { type: r, scrollHideDelay: o, scrollbars: s, ...i } = n,
      [l, a] = x.useState(null),
      [c, u] = x.useState(null),
      [d, f] = x.useState(null),
      [m, p] = x.useState(null),
      [h, S] = x.useState(null),
      [v, w] = x.useState(0),
      [y, b] = x.useState(0),
      [C, E] = x.useState(!1),
      [R, D] = x.useState(!1),
      L = Mt(t, (N) => a(N));
    return g.jsx(DE, {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: l,
        viewport: c,
        onViewportChange: u,
        content: d,
        onContentChange: f,
        scrollbarX: m,
        onScrollbarXChange: p,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: E,
        scrollbarY: h,
        onScrollbarYChange: S,
        scrollbarYEnabled: R,
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: w,
        onCornerHeightChange: b,
      },
      children: g.jsx(X, {
        ...i,
        ref: L,
        __vars: {
          "--sa-corner-width": s !== "xy" ? "0px" : `${v}px`,
          "--sa-corner-height": s !== "xy" ? "0px" : `${y}px`,
        },
      }),
    });
  });
d0.displayName = "@mantine/core/ScrollAreaRoot";
function f0(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Ca(e) {
  const t = f0(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function p0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function OE(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function uh(e, t, n = "ltr") {
  const r = Ca(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - o,
    i = t.content - t.viewport,
    l = s - r,
    a = n === "ltr" ? [0, i] : [i * -1, 0],
    c = OE(e, a);
  return p0([0, i], [0, l])(c);
}
function jE(e, t, n, r = "ltr") {
  const o = Ca(n),
    s = o / 2,
    i = t || s,
    l = o - i,
    a = n.scrollbar.paddingStart + i,
    c = n.scrollbar.size - n.scrollbar.paddingEnd - l,
    u = n.content - n.viewport,
    d = r === "ltr" ? [0, u] : [u * -1, 0];
  return p0([a, c], d)(e);
}
function m0(e, t) {
  return e > 0 && e < t;
}
function Hl(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ir(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [$E, h0] = br("ScrollAreaScrollbar was not found in tree"),
  g0 = x.forwardRef((e, t) => {
    const {
        sizes: n,
        hasThumb: r,
        onThumbChange: o,
        onThumbPointerUp: s,
        onThumbPointerDown: i,
        onThumbPositionChange: l,
        onDragScroll: a,
        onWheelScroll: c,
        onResize: u,
        ...d
      } = e,
      f = qt(),
      [m, p] = x.useState(null),
      h = Mt(t, (D) => p(D)),
      S = x.useRef(null),
      v = x.useRef(""),
      { viewport: w } = f,
      y = n.content - n.viewport,
      b = Nr(c),
      C = Nr(l),
      E = Sa(u, 10),
      R = (D) => {
        if (S.current) {
          const L = D.clientX - S.current.left,
            N = D.clientY - S.current.top;
          a({ x: L, y: N });
        }
      };
    return (
      x.useEffect(() => {
        const D = (L) => {
          const N = L.target;
          (m == null ? void 0 : m.contains(N)) && b(L, y);
        };
        return (
          document.addEventListener("wheel", D, { passive: !1 }),
          () => document.removeEventListener("wheel", D, { passive: !1 })
        );
      }, [w, m, y, b]),
      x.useEffect(C, [n, C]),
      Ko(m, E),
      Ko(f.content, E),
      g.jsx($E, {
        value: {
          scrollbar: m,
          hasThumb: r,
          onThumbChange: Nr(o),
          onThumbPointerUp: Nr(s),
          onThumbPositionChange: C,
          onThumbPointerDown: Nr(i),
        },
        children: g.jsx("div", {
          ...d,
          ref: h,
          style: { position: "absolute", ...d.style },
          onPointerDown: Ir(e.onPointerDown, (D) => {
            D.button === 0 &&
              (D.target.setPointerCapture(D.pointerId),
              (S.current = m.getBoundingClientRect()),
              (v.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              R(D));
          }),
          onPointerMove: Ir(e.onPointerMove, R),
          onPointerUp: Ir(e.onPointerUp, (D) => {
            const L = D.target;
            L.hasPointerCapture(D.pointerId) &&
              L.releasePointerCapture(D.pointerId),
              (document.body.style.webkitUserSelect = v.current),
              (S.current = null);
          }),
        }),
      })
    );
  }),
  LE = x.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = qt(),
      [l, a] = x.useState(),
      c = x.useRef(null),
      u = Mt(t, c, i.onScrollbarXChange);
    return (
      x.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      g.jsx(g0, {
        "data-orientation": "horizontal",
        ...s,
        ref: u,
        sizes: n,
        style: { ...o, "--sa-thumb-width": `${Ca(n)}px` },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const m = i.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(m), m0(m, f) && d.preventDefault();
          }
        },
        onResize: () => {
          c.current &&
            i.viewport &&
            l &&
            r({
              content: i.viewport.scrollWidth,
              viewport: i.viewport.offsetWidth,
              scrollbar: {
                size: c.current.clientWidth,
                paddingStart: Hl(l.paddingLeft),
                paddingEnd: Hl(l.paddingRight),
              },
            });
        },
      })
    );
  }),
  AE = x.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = qt(),
      [l, a] = x.useState(),
      c = x.useRef(null),
      u = Mt(t, c, i.onScrollbarYChange);
    return (
      x.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      g.jsx(g0, {
        ...s,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: { "--sa-thumb-height": `${Ca(n)}px`, ...o },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const m = i.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(m), m0(m, f) && d.preventDefault();
          }
        },
        onResize: () => {
          c.current &&
            i.viewport &&
            l &&
            r({
              content: i.viewport.scrollHeight,
              viewport: i.viewport.offsetHeight,
              scrollbar: {
                size: c.current.clientHeight,
                paddingStart: Hl(l.paddingTop),
                paddingEnd: Hl(l.paddingBottom),
              },
            });
        },
      })
    );
  }),
  Rf = x.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      { dir: o } = _f(),
      s = qt(),
      i = x.useRef(null),
      l = x.useRef(0),
      [a, c] = x.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = f0(a.viewport, a.content),
      d = {
        ...r,
        sizes: a,
        onSizesChange: c,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (m) => {
          i.current = m;
        },
        onThumbPointerUp: () => {
          l.current = 0;
        },
        onThumbPointerDown: (m) => {
          l.current = m;
        },
      },
      f = (m, p) => jE(m, l.current, a, p);
    return n === "horizontal"
      ? g.jsx(LE, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const m = s.viewport.scrollLeft,
                p = uh(m, a, o);
              i.current.style.transform = `translate3d(${p}px, 0, 0)`;
            }
          },
          onWheelScroll: (m) => {
            s.viewport && (s.viewport.scrollLeft = m);
          },
          onDragScroll: (m) => {
            s.viewport && (s.viewport.scrollLeft = f(m, o));
          },
        })
      : n === "vertical"
      ? g.jsx(AE, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const m = s.viewport.scrollTop,
                p = uh(m, a);
              i.current.style.transform = `translate3d(0, ${p}px, 0)`;
            }
          },
          onWheelScroll: (m) => {
            s.viewport && (s.viewport.scrollTop = m);
          },
          onDragScroll: (m) => {
            s.viewport && (s.viewport.scrollTop = f(m));
          },
        })
      : null;
  }),
  y0 = x.forwardRef((e, t) => {
    const n = qt(),
      { forceMount: r, ...o } = e,
      [s, i] = x.useState(!1),
      l = e.orientation === "horizontal",
      a = Sa(() => {
        if (n.viewport) {
          const c = n.viewport.offsetWidth < n.viewport.scrollWidth,
            u = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(l ? c : u);
        }
      }, 10);
    return (
      Ko(n.viewport, a),
      Ko(n.content, a),
      r || s
        ? g.jsx(Rf, { "data-state": s ? "visible" : "hidden", ...o, ref: t })
        : null
    );
  }),
  FE = x.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = qt(),
      [s, i] = x.useState(!1);
    return (
      x.useEffect(() => {
        const { scrollArea: l } = o;
        let a = 0;
        if (l) {
          const c = () => {
              window.clearTimeout(a), i(!0);
            },
            u = () => {
              a = window.setTimeout(() => i(!1), o.scrollHideDelay);
            };
          return (
            l.addEventListener("pointerenter", c),
            l.addEventListener("pointerleave", u),
            () => {
              window.clearTimeout(a),
                l.removeEventListener("pointerenter", c),
                l.removeEventListener("pointerleave", u);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      n || s
        ? g.jsx(y0, { "data-state": s ? "visible" : "hidden", ...r, ref: t })
        : null
    );
  }),
  ME = x.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = qt(),
      s = e.orientation === "horizontal",
      [i, l] = x.useState("hidden"),
      a = Sa(() => l("idle"), 100);
    return (
      x.useEffect(() => {
        if (i === "idle") {
          const c = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [i, o.scrollHideDelay]),
      x.useEffect(() => {
        const { viewport: c } = o,
          u = s ? "scrollLeft" : "scrollTop";
        if (c) {
          let d = c[u];
          const f = () => {
            const m = c[u];
            d !== m && (l("scrolling"), a()), (d = m);
          };
          return (
            c.addEventListener("scroll", f),
            () => c.removeEventListener("scroll", f)
          );
        }
      }, [o.viewport, s, a]),
      n || i !== "hidden"
        ? g.jsx(Rf, {
            "data-state": i === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: Ir(e.onPointerEnter, () => l("interacting")),
            onPointerLeave: Ir(e.onPointerLeave, () => l("idle")),
          })
        : null
    );
  }),
  dh = x.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = qt(),
      { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o,
      l = e.orientation === "horizontal";
    return (
      x.useEffect(
        () => (
          l ? s(!0) : i(!0),
          () => {
            l ? s(!1) : i(!1);
          }
        ),
        [l, s, i]
      ),
      o.type === "hover"
        ? g.jsx(FE, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
        ? g.jsx(ME, { ...r, ref: t, forceMount: n })
        : o.type === "auto"
        ? g.jsx(y0, { ...r, ref: t, forceMount: n })
        : o.type === "always"
        ? g.jsx(Rf, { ...r, ref: t })
        : null
    );
  });
function IE(e, t = () => {}) {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const s = { left: e.scrollLeft, top: e.scrollTop },
        i = n.left !== s.left,
        l = n.top !== s.top;
      (i || l) && t(), (n = s), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
}
const zE = x.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = qt(),
      s = h0(),
      { onThumbPositionChange: i } = s,
      l = Mt(t, (u) => s.onThumbChange(u)),
      a = x.useRef(),
      c = Sa(() => {
        a.current && (a.current(), (a.current = void 0));
      }, 100);
    return (
      x.useEffect(() => {
        const { viewport: u } = o;
        if (u) {
          const d = () => {
            if ((c(), !a.current)) {
              const f = IE(u, i);
              (a.current = f), i();
            }
          };
          return (
            i(),
            u.addEventListener("scroll", d),
            () => u.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, c, i]),
      g.jsx("div", {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--sa-thumb-width)",
          height: "var(--sa-thumb-height)",
          ...n,
        },
        onPointerDownCapture: Ir(e.onPointerDownCapture, (u) => {
          const f = u.target.getBoundingClientRect(),
            m = u.clientX - f.left,
            p = u.clientY - f.top;
          s.onThumbPointerDown({ x: m, y: p });
        }),
        onPointerUp: Ir(e.onPointerUp, s.onThumbPointerUp),
      })
    );
  }),
  fh = x.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = h0();
    return n || o.hasThumb ? g.jsx(zE, { ref: t, ...r }) : null;
  }),
  v0 = x.forwardRef(({ children: e, style: t, ...n }, r) => {
    const o = qt(),
      s = Mt(r, o.onViewportChange);
    return g.jsx(X, {
      ...n,
      ref: s,
      style: {
        overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
        ...t,
      },
      children: g.jsx("div", {
        style: { minWidth: "100%", display: "table" },
        ref: o.onContentChange,
        children: e,
      }),
    });
  });
v0.displayName = "@mantine/core/ScrollAreaViewport";
var Df = {
  root: "m_d57069b5",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
const w0 = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  BE = (e, { scrollbarSize: t }) => ({
    root: { "--scrollarea-scrollbar-size": z(t) },
  }),
  vi = G((e, t) => {
    const n = W("ScrollArea", w0, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        scrollbarSize: a,
        vars: c,
        type: u,
        scrollHideDelay: d,
        viewportProps: f,
        viewportRef: m,
        onScrollPositionChange: p,
        children: h,
        offsetScrollbars: S,
        scrollbars: v,
        ...w
      } = n,
      [y, b] = x.useState(!1),
      C = de({
        name: "ScrollArea",
        props: n,
        classes: Df,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: BE,
      });
    return g.jsxs(d0, {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: v,
      ...C("root"),
      ...w,
      children: [
        g.jsx(v0, {
          ...f,
          ...C("viewport", { style: f == null ? void 0 : f.style }),
          ref: m,
          "data-offset-scrollbars": S === !0 ? "xy" : S || void 0,
          "data-scrollbars": v || void 0,
          onScroll: (E) => {
            var R;
            (R = f == null ? void 0 : f.onScroll) == null || R.call(f, E),
              p == null ||
                p({
                  x: E.currentTarget.scrollLeft,
                  y: E.currentTarget.scrollTop,
                });
          },
          children: h,
        }),
        (v === "xy" || v === "x") &&
          g.jsx(dh, {
            ...C("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: g.jsx(fh, { ...C("thumb") }),
          }),
        (v === "xy" || v === "y") &&
          g.jsx(dh, {
            ...C("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: g.jsx(fh, { ...C("thumb") }),
          }),
        g.jsx(TE, {
          ...C("corner"),
          "data-hovered": y || void 0,
          "data-hidden": u === "never" || void 0,
        }),
      ],
    });
  });
vi.displayName = "@mantine/core/ScrollArea";
const Pf = G((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: s,
    scrollHideDelay: i,
    type: l,
    dir: a,
    offsetScrollbars: c,
    viewportRef: u,
    onScrollPositionChange: d,
    unstyled: f,
    variant: m,
    viewportProps: p,
    scrollbars: h,
    style: S,
    vars: v,
    ...w
  } = W("ScrollAreaAutosize", w0, e);
  return g.jsx(X, {
    ...w,
    ref: t,
    style: [{ display: "flex", overflow: "auto" }, S],
    children: g.jsx(X, {
      style: { display: "flex", flexDirection: "column", flex: 1 },
      children: g.jsx(vi, {
        classNames: r,
        styles: o,
        scrollHideDelay: i,
        scrollbarSize: s,
        type: l,
        dir: a,
        offsetScrollbars: c,
        viewportRef: u,
        onScrollPositionChange: d,
        unstyled: f,
        variant: m,
        viewportProps: p,
        vars: v,
        scrollbars: h,
        children: n,
      }),
    }),
  });
});
vi.classes = Df;
Pf.displayName = "@mantine/core/ScrollAreaAutosize";
Pf.classes = Df;
vi.Autosize = Pf;
var x0 = { root: "m_87cf2631" };
const VE = { __staticSelector: "UnstyledButton" },
  Mn = Un((e, t) => {
    const n = W("UnstyledButton", VE, e),
      {
        className: r,
        component: o = "button",
        __staticSelector: s,
        unstyled: i,
        classNames: l,
        styles: a,
        style: c,
        ...u
      } = n,
      d = de({
        name: s,
        props: n,
        classes: x0,
        className: r,
        style: c,
        classNames: l,
        styles: a,
        unstyled: i,
      });
    return g.jsx(X, {
      ...d("root", { focusable: !0 }),
      component: o,
      ref: t,
      type: o === "button" ? "button" : void 0,
      ...u,
    });
  });
Mn.classes = x0;
Mn.displayName = "@mantine/core/UnstyledButton";
var S0 = { root: "m_515a97f8" };
const HE = {},
  Tf = G((e, t) => {
    const n = W("VisuallyHidden", HE, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        ...c
      } = n,
      u = de({
        name: "VisuallyHidden",
        classes: S0,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
      });
    return g.jsx(X, { component: "span", ref: t, ...u("root"), ...c });
  });
Tf.classes = S0;
Tf.displayName = "@mantine/core/VisuallyHidden";
var b0 = { root: "m_1b7284a3" };
const WE = {},
  UE = (e, { radius: t, shadow: n }) => ({
    root: {
      "--paper-radius": t === void 0 ? void 0 : Rn(t),
      "--paper-shadow": wf(n),
    },
  }),
  Nf = Un((e, t) => {
    const n = W("Paper", WE, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        withBorder: a,
        vars: c,
        radius: u,
        shadow: d,
        variant: f,
        mod: m,
        ...p
      } = n,
      h = de({
        name: "Paper",
        props: n,
        classes: b0,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: UE,
      });
    return g.jsx(X, {
      ref: t,
      mod: [{ "data-with-border": a }, m],
      ...h("root"),
      variant: f,
      ...p,
    });
  });
Nf.classes = b0;
Nf.displayName = "@mantine/core/Paper";
function os(e) {
  return C0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Yn(e) {
  var t;
  return (t = (C0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function C0(e) {
  return e instanceof Node || e instanceof $t(e).Node;
}
function bt(e) {
  return e instanceof Element || e instanceof $t(e).Element;
}
function _n(e) {
  return e instanceof HTMLElement || e instanceof $t(e).HTMLElement;
}
function ph(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
function wi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ln(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function YE(e) {
  return ["table", "td", "th"].includes(os(e));
}
function Of(e) {
  const t = jf(),
    n = ln(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function qE(e) {
  let t = yr(e);
  for (; _n(t) && !Go(t); ) {
    if (Of(t)) return t;
    t = yr(t);
  }
  return null;
}
function jf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Go(e) {
  return ["html", "body", "#document"].includes(os(e));
}
function ln(e) {
  return $t(e).getComputedStyle(e);
}
function Ea(e) {
  return bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function yr(e) {
  if (os(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (ph(e) && e.host) || Yn(e);
  return ph(t) ? t.host : t;
}
function E0(e) {
  const t = yr(e);
  return Go(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : _n(t) && wi(t)
    ? t
    : E0(t);
}
function ii(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = E0(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = $t(o);
  return s
    ? t.concat(
        i,
        i.visualViewport || [],
        wi(o) ? o : [],
        i.frameElement && n ? ii(i.frameElement) : []
      )
    : t.concat(o, ii(o, [], n));
}
const an = Math.min,
  rt = Math.max,
  Wl = Math.round,
  Ki = Math.floor,
  vr = (e) => ({ x: e, y: e }),
  KE = { left: "right", right: "left", bottom: "top", top: "bottom" },
  GE = { start: "end", end: "start" };
function Ju(e, t, n) {
  return rt(e, an(t, n));
}
function Hn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cn(e) {
  return e.split("-")[0];
}
function ss(e) {
  return e.split("-")[1];
}
function $f(e) {
  return e === "x" ? "y" : "x";
}
function Lf(e) {
  return e === "y" ? "height" : "width";
}
function io(e) {
  return ["top", "bottom"].includes(cn(e)) ? "y" : "x";
}
function Af(e) {
  return $f(io(e));
}
function XE(e, t, n) {
  n === void 0 && (n = !1);
  const r = ss(e),
    o = Af(e),
    s = Lf(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = Ul(i)), [i, Ul(i)];
}
function QE(e) {
  const t = Ul(e);
  return [Zu(e), t, Zu(t)];
}
function Zu(e) {
  return e.replace(/start|end/g, (t) => GE[t]);
}
function JE(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function ZE(e, t, n, r) {
  const o = ss(e);
  let s = JE(cn(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Zu)))), s
  );
}
function Ul(e) {
  return e.replace(/left|right|bottom|top/g, (t) => KE[t]);
}
function ek(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ff(e) {
  return typeof e != "number"
    ? ek(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Xo(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function mh(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = io(t),
    i = Af(t),
    l = Lf(i),
    a = cn(t),
    c = s === "y",
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[l] / 2 - o[l] / 2;
  let m;
  switch (a) {
    case "top":
      m = { x: u, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: u, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: d };
      break;
    case "left":
      m = { x: r.x - o.width, y: d };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (ss(t)) {
    case "start":
      m[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const tk = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: d } = mh(c, r, a),
    f = r,
    m = {},
    p = 0;
  for (let h = 0; h < l.length; h++) {
    const { name: S, fn: v } = l[h],
      {
        x: w,
        y,
        data: b,
        reset: C,
      } = await v({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: m,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (u = w ?? u),
      (d = y ?? d),
      (m = { ...m, [S]: { ...m[S], ...b } }),
      C &&
        p <= 50 &&
        (p++,
        typeof C == "object" &&
          (C.placement && (f = C.placement),
          C.rects &&
            (c =
              C.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: u, y: d } = mh(c, f, a))),
        (h = -1));
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: m };
};
async function Mf(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = Hn(t, e),
    p = Ff(m),
    S = l[f ? (d === "floating" ? "reference" : "floating") : d],
    v = Xo(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: a,
      })
    ),
    w =
      d === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    y = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    b = (await (s.isElement == null ? void 0 : s.isElement(y)))
      ? (await (s.getScale == null ? void 0 : s.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Xo(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: w,
            offsetParent: y,
            strategy: a,
          })
        : w
    );
  return {
    top: (v.top - C.top + p.top) / b.y,
    bottom: (C.bottom - v.bottom + p.bottom) / b.y,
    left: (v.left - C.left + p.left) / b.x,
    right: (C.right - v.right + p.right) / b.x,
  };
}
const nk = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: l,
          middlewareData: a,
        } = t,
        { element: c, padding: u = 0 } = Hn(e, t) || {};
      if (c == null) return {};
      const d = Ff(u),
        f = { x: n, y: r },
        m = Af(o),
        p = Lf(m),
        h = await i.getDimensions(c),
        S = m === "y",
        v = S ? "top" : "left",
        w = S ? "bottom" : "right",
        y = S ? "clientHeight" : "clientWidth",
        b = s.reference[p] + s.reference[m] - f[m] - s.floating[p],
        C = f[m] - s.reference[m],
        E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let R = E ? E[y] : 0;
      (!R || !(await (i.isElement == null ? void 0 : i.isElement(E)))) &&
        (R = l.floating[y] || s.floating[p]);
      const D = b / 2 - C / 2,
        L = R / 2 - h[p] / 2 - 1,
        N = an(d[v], L),
        F = an(d[w], L),
        B = N,
        V = R - h[p] - F,
        A = R / 2 - h[p] / 2 + D,
        j = Ju(B, A, V),
        P =
          !a.arrow &&
          ss(o) != null &&
          A !== j &&
          s.reference[p] / 2 - (A < B ? N : F) - h[p] / 2 < 0,
        T = P ? (A < B ? A - B : A - V) : 0;
      return {
        [m]: f[m] + T,
        data: {
          [m]: j,
          centerOffset: A - j - T,
          ...(P && { alignmentOffset: T }),
        },
        reset: P,
      };
    },
  }),
  rk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: l,
              platform: a,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: p = "none",
              flipAlignment: h = !0,
              ...S
            } = Hn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const v = cn(o),
            w = cn(l) === l,
            y = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
            b = f || (w || !h ? [Ul(l)] : QE(l));
          !f && p !== "none" && b.push(...ZE(l, h, p, y));
          const C = [l, ...b],
            E = await Mf(t, S),
            R = [];
          let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((u && R.push(E[v]), d)) {
            const B = XE(o, i, y);
            R.push(E[B[0]], E[B[1]]);
          }
          if (
            ((D = [...D, { placement: o, overflows: R }]),
            !R.every((B) => B <= 0))
          ) {
            var L, N;
            const B = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1,
              V = C[B];
            if (V)
              return {
                data: { index: B, overflows: D },
                reset: { placement: V },
              };
            let A =
              (N = D.filter((j) => j.overflows[0] <= 0).sort(
                (j, P) => j.overflows[1] - P.overflows[1]
              )[0]) == null
                ? void 0
                : N.placement;
            if (!A)
              switch (m) {
                case "bestFit": {
                  var F;
                  const j =
                    (F = D.map((P) => [
                      P.placement,
                      P.overflows
                        .filter((T) => T > 0)
                        .reduce((T, _) => T + _, 0),
                    ]).sort((P, T) => P[1] - T[1])[0]) == null
                      ? void 0
                      : F[0];
                  j && (A = j);
                  break;
                }
                case "initialPlacement":
                  A = l;
                  break;
              }
            if (o !== A) return { reset: { placement: A } };
          }
          return {};
        },
      }
    );
  };
function k0(e) {
  const t = an(...e.map((s) => s.left)),
    n = an(...e.map((s) => s.top)),
    r = rt(...e.map((s) => s.right)),
    o = rt(...e.map((s) => s.bottom));
  return { x: t, y: n, width: r - t, height: o - n };
}
function ok(e) {
  const t = e.slice().sort((o, s) => o.y - s.y),
    n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    !r || s.y - r.y > r.height / 2 ? n.push([s]) : n[n.length - 1].push(s),
      (r = s);
  }
  return n.map((o) => Xo(k0(o)));
}
const sk = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "inline",
      options: e,
      async fn(t) {
        const {
            placement: n,
            elements: r,
            rects: o,
            platform: s,
            strategy: i,
          } = t,
          { padding: l = 2, x: a, y: c } = Hn(e, t),
          u = Array.from(
            (await (s.getClientRects == null
              ? void 0
              : s.getClientRects(r.reference))) || []
          ),
          d = ok(u),
          f = Xo(k0(u)),
          m = Ff(l);
        function p() {
          if (
            d.length === 2 &&
            d[0].left > d[1].right &&
            a != null &&
            c != null
          )
            return (
              d.find(
                (S) =>
                  a > S.left - m.left &&
                  a < S.right + m.right &&
                  c > S.top - m.top &&
                  c < S.bottom + m.bottom
              ) || f
            );
          if (d.length >= 2) {
            if (io(n) === "y") {
              const N = d[0],
                F = d[d.length - 1],
                B = cn(n) === "top",
                V = N.top,
                A = F.bottom,
                j = B ? N.left : F.left,
                P = B ? N.right : F.right,
                T = P - j,
                _ = A - V;
              return {
                top: V,
                bottom: A,
                left: j,
                right: P,
                width: T,
                height: _,
                x: j,
                y: V,
              };
            }
            const S = cn(n) === "left",
              v = rt(...d.map((N) => N.right)),
              w = an(...d.map((N) => N.left)),
              y = d.filter((N) => (S ? N.left === w : N.right === v)),
              b = y[0].top,
              C = y[y.length - 1].bottom,
              E = w,
              R = v,
              D = R - E,
              L = C - b;
            return {
              top: b,
              bottom: C,
              left: E,
              right: R,
              width: D,
              height: L,
              x: E,
              y: b,
            };
          }
          return f;
        }
        const h = await s.getElementRects({
          reference: { getBoundingClientRect: p },
          floating: r.floating,
          strategy: i,
        });
        return o.reference.x !== h.reference.x ||
          o.reference.y !== h.reference.y ||
          o.reference.width !== h.reference.width ||
          o.reference.height !== h.reference.height
          ? { reset: { rects: h } }
          : {};
      },
    }
  );
};
async function ik(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = cn(n),
    l = ss(n),
    a = io(n) === "y",
    c = ["left", "top"].includes(i) ? -1 : 1,
    u = s && a ? -1 : 1,
    d = Hn(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: p,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    l && typeof p == "number" && (m = l === "end" ? p * -1 : p),
    a ? { x: m * u, y: f * c } : { x: f * c, y: m * u }
  );
}
const lk = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await ik(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  ak = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (S) => {
                  let { x: v, y: w } = S;
                  return { x: v, y: w };
                },
              },
              ...a
            } = Hn(e, t),
            c = { x: n, y: r },
            u = await Mf(t, a),
            d = io(cn(o)),
            f = $f(d);
          let m = c[f],
            p = c[d];
          if (s) {
            const S = f === "y" ? "top" : "left",
              v = f === "y" ? "bottom" : "right",
              w = m + u[S],
              y = m - u[v];
            m = Ju(w, m, y);
          }
          if (i) {
            const S = d === "y" ? "top" : "left",
              v = d === "y" ? "bottom" : "right",
              w = p + u[S],
              y = p - u[v];
            p = Ju(w, p, y);
          }
          const h = l.fn({ ...t, [f]: m, [d]: p });
          return { ...h, data: { x: h.x - n, y: h.y - r } };
        },
      }
    );
  },
  ck = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: c = !0 } = Hn(e, t),
            u = { x: n, y: r },
            d = io(o),
            f = $f(d);
          let m = u[f],
            p = u[d];
          const h = Hn(l, t),
            S =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (a) {
            const y = f === "y" ? "height" : "width",
              b = s.reference[f] - s.floating[y] + S.mainAxis,
              C = s.reference[f] + s.reference[y] - S.mainAxis;
            m < b ? (m = b) : m > C && (m = C);
          }
          if (c) {
            var v, w;
            const y = f === "y" ? "width" : "height",
              b = ["top", "left"].includes(cn(o)),
              C =
                s.reference[d] -
                s.floating[y] +
                ((b && ((v = i.offset) == null ? void 0 : v[d])) || 0) +
                (b ? 0 : S.crossAxis),
              E =
                s.reference[d] +
                s.reference[y] +
                (b ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) -
                (b ? S.crossAxis : 0);
            p < C ? (p = C) : p > E && (p = E);
          }
          return { [f]: m, [d]: p };
        },
      }
    );
  },
  uk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...l } = Hn(e, t),
            a = await Mf(t, l),
            c = cn(n),
            u = ss(n),
            d = io(n) === "y",
            { width: f, height: m } = r.floating;
          let p, h;
          c === "top" || c === "bottom"
            ? ((p = c),
              (h =
                u ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = c), (p = u === "end" ? "top" : "bottom"));
          const S = m - a[p],
            v = f - a[h],
            w = !t.middlewareData.shift;
          let y = S,
            b = v;
          if (d) {
            const E = f - a.left - a.right;
            b = u || w ? an(v, E) : E;
          } else {
            const E = m - a.top - a.bottom;
            y = u || w ? an(S, E) : E;
          }
          if (w && !u) {
            const E = rt(a.left, 0),
              R = rt(a.right, 0),
              D = rt(a.top, 0),
              L = rt(a.bottom, 0);
            d
              ? (b = f - 2 * (E !== 0 || R !== 0 ? E + R : rt(a.left, a.right)))
              : (y =
                  m - 2 * (D !== 0 || L !== 0 ? D + L : rt(a.top, a.bottom)));
          }
          await i({ ...t, availableWidth: b, availableHeight: y });
          const C = await o.getDimensions(s.floating);
          return f !== C.width || m !== C.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function _0(e) {
  const t = ln(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = _n(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Wl(n) !== s || Wl(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function If(e) {
  return bt(e) ? e : e.contextElement;
}
function Fo(e) {
  const t = If(e);
  if (!_n(t)) return vr(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = _0(t);
  let i = (s ? Wl(n.width) : n.width) / r,
    l = (s ? Wl(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const dk = vr(0);
function R0(e) {
  const t = $t(e);
  return !jf() || !t.visualViewport
    ? dk
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function fk(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== $t(e)) ? !1 : t;
}
function Kr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = If(e);
  let i = vr(1);
  t && (r ? bt(r) && (i = Fo(r)) : (i = Fo(e)));
  const l = fk(s, n, r) ? R0(s) : vr(0);
  let a = (o.left + l.x) / i.x,
    c = (o.top + l.y) / i.y,
    u = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const f = $t(s),
      m = r && bt(r) ? $t(r) : r;
    let p = f,
      h = p.frameElement;
    for (; h && r && m !== p; ) {
      const S = Fo(h),
        v = h.getBoundingClientRect(),
        w = ln(h),
        y = v.left + (h.clientLeft + parseFloat(w.paddingLeft)) * S.x,
        b = v.top + (h.clientTop + parseFloat(w.paddingTop)) * S.y;
      (a *= S.x),
        (c *= S.y),
        (u *= S.x),
        (d *= S.y),
        (a += y),
        (c += b),
        (p = $t(h)),
        (h = p.frameElement);
    }
  }
  return Xo({ width: u, height: d, x: a, y: c });
}
const pk = [":popover-open", ":modal"];
function zf(e) {
  return pk.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function mk(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Yn(r),
    l = t ? zf(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    c = vr(1);
  const u = vr(0),
    d = _n(r);
  if (
    (d || (!d && !s)) &&
    ((os(r) !== "body" || wi(i)) && (a = Ea(r)), _n(r))
  ) {
    const f = Kr(r);
    (c = Fo(r)), (u.x = f.x + r.clientLeft), (u.y = f.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y,
  };
}
function hk(e) {
  return Array.from(e.getClientRects());
}
function D0(e) {
  return Kr(Yn(e)).left + Ea(e).scrollLeft;
}
function gk(e) {
  const t = Yn(e),
    n = Ea(e),
    r = e.ownerDocument.body,
    o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + D0(e);
  const l = -n.scrollTop;
  return (
    ln(r).direction === "rtl" && (i += rt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function yk(e, t) {
  const n = $t(e),
    r = Yn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = jf();
    (!c || (c && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
function vk(e, t) {
  const n = Kr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = _n(e) ? Fo(e) : vr(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    c = r * s.y;
  return { width: i, height: l, x: a, y: c };
}
function hh(e, t, n) {
  let r;
  if (t === "viewport") r = yk(e, n);
  else if (t === "document") r = gk(Yn(e));
  else if (bt(t)) r = vk(t, n);
  else {
    const o = R0(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Xo(r);
}
function P0(e, t) {
  const n = yr(e);
  return n === t || !bt(n) || Go(n)
    ? !1
    : ln(n).position === "fixed" || P0(n, t);
}
function wk(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ii(e, [], !1).filter((l) => bt(l) && os(l) !== "body"),
    o = null;
  const s = ln(e).position === "fixed";
  let i = s ? yr(e) : e;
  for (; bt(i) && !Go(i); ) {
    const l = ln(i),
      a = Of(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (wi(i) && !a && P0(e, i))
      )
        ? (r = r.filter((u) => u !== i))
        : (o = l),
      (i = yr(i));
  }
  return t.set(e, r), r;
}
function xk(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? zf(t)
          ? []
          : wk(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((c, u) => {
      const d = hh(t, u, o);
      return (
        (c.top = rt(d.top, c.top)),
        (c.right = an(d.right, c.right)),
        (c.bottom = an(d.bottom, c.bottom)),
        (c.left = rt(d.left, c.left)),
        c
      );
    }, hh(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function Sk(e) {
  const { width: t, height: n } = _0(e);
  return { width: t, height: n };
}
function bk(e, t, n) {
  const r = _n(t),
    o = Yn(t),
    s = n === "fixed",
    i = Kr(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = vr(0);
  if (r || (!r && !s))
    if (((os(t) !== "body" || wi(o)) && (l = Ea(t)), r)) {
      const d = Kr(t, !0, s, t);
      (a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop);
    } else o && (a.x = D0(o));
  const c = i.left + l.scrollLeft - a.x,
    u = i.top + l.scrollTop - a.y;
  return { x: c, y: u, width: i.width, height: i.height };
}
function qc(e) {
  return ln(e).position === "static";
}
function gh(e, t) {
  return !_n(e) || ln(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function T0(e, t) {
  const n = $t(e);
  if (zf(e)) return n;
  if (!_n(e)) {
    let o = yr(e);
    for (; o && !Go(o); ) {
      if (bt(o) && !qc(o)) return o;
      o = yr(o);
    }
    return n;
  }
  let r = gh(e, t);
  for (; r && YE(r) && qc(r); ) r = gh(r, t);
  return r && Go(r) && qc(r) && !Of(r) ? n : r || qE(e) || n;
}
const Ck = async function (e) {
  const t = this.getOffsetParent || T0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: bk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Ek(e) {
  return ln(e).direction === "rtl";
}
const kk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mk,
  getDocumentElement: Yn,
  getClippingRect: xk,
  getOffsetParent: T0,
  getElementRects: Ck,
  getClientRects: hk,
  getDimensions: Sk,
  getScale: Fo,
  isElement: bt,
  isRTL: Ek,
};
function _k(e, t) {
  let n = null,
    r;
  const o = Yn(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const { left: c, top: u, width: d, height: f } = e.getBoundingClientRect();
    if ((l || t(), !d || !f)) return;
    const m = Ki(u),
      p = Ki(o.clientWidth - (c + d)),
      h = Ki(o.clientHeight - (u + f)),
      S = Ki(c),
      w = {
        rootMargin: -m + "px " + -p + "px " + -h + "px " + -S + "px",
        threshold: rt(0, an(1, a)) || 1,
      };
    let y = !0;
    function b(C) {
      const E = C[0].intersectionRatio;
      if (E !== a) {
        if (!y) return i();
        E
          ? i(!1, E)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(b, { ...w, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, w);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Rk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    c = If(e),
    u = o || s ? [...(c ? ii(c) : []), ...ii(t)] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, { passive: !0 }),
      s && v.addEventListener("resize", n);
  });
  const d = c && l ? _k(c, n) : null;
  let f = -1,
    m = null;
  i &&
    ((m = new ResizeObserver((v) => {
      let [w] = v;
      w &&
        w.target === c &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = m) == null || y.observe(t);
        }))),
        n();
    })),
    c && !a && m.observe(c),
    m.observe(t));
  let p,
    h = a ? Kr(e) : null;
  a && S();
  function S() {
    const v = Kr(e);
    h &&
      (v.x !== h.x ||
        v.y !== h.y ||
        v.width !== h.width ||
        v.height !== h.height) &&
      n(),
      (h = v),
      (p = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var v;
      u.forEach((w) => {
        o && w.removeEventListener("scroll", n),
          s && w.removeEventListener("resize", n);
      }),
        d == null || d(),
        (v = m) == null || v.disconnect(),
        (m = null),
        a && cancelAnimationFrame(p);
    }
  );
}
const Dk = lk,
  Pk = ak,
  yh = rk,
  Tk = uk,
  vh = nk,
  wh = sk,
  xh = ck,
  Nk = (e, t, n) => {
    const r = new Map(),
      o = { platform: kk, ...n },
      s = { ...o.platform, _c: r };
    return tk(e, t, { ...o, platform: s });
  },
  Ok = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? vh({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? vh({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  };
var ml = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Yl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Yl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Yl(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function N0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sh(e, t) {
  const n = N0(e);
  return Math.round(t * n) / n;
}
function bh(e) {
  const t = x.useRef(e);
  return (
    ml(() => {
      t.current = e;
    }),
    t
  );
}
function jk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: c,
    } = e,
    [u, d] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, m] = x.useState(r);
  Yl(f, r) || m(r);
  const [p, h] = x.useState(null),
    [S, v] = x.useState(null),
    w = x.useCallback((T) => {
      T !== E.current && ((E.current = T), h(T));
    }, []),
    y = x.useCallback((T) => {
      T !== R.current && ((R.current = T), v(T));
    }, []),
    b = s || p,
    C = i || S,
    E = x.useRef(null),
    R = x.useRef(null),
    D = x.useRef(u),
    L = a != null,
    N = bh(a),
    F = bh(o),
    B = x.useCallback(() => {
      if (!E.current || !R.current) return;
      const T = { placement: t, strategy: n, middleware: f };
      F.current && (T.platform = F.current),
        Nk(E.current, R.current, T).then((_) => {
          const k = { ..._, isPositioned: !0 };
          V.current &&
            !Yl(D.current, k) &&
            ((D.current = k),
            gi.flushSync(() => {
              d(k);
            }));
        });
    }, [f, t, n, F]);
  ml(() => {
    c === !1 &&
      D.current.isPositioned &&
      ((D.current.isPositioned = !1), d((T) => ({ ...T, isPositioned: !1 })));
  }, [c]);
  const V = x.useRef(!1);
  ml(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    []
  ),
    ml(() => {
      if ((b && (E.current = b), C && (R.current = C), b && C)) {
        if (N.current) return N.current(b, C, B);
        B();
      }
    }, [b, C, B, N, L]);
  const A = x.useMemo(
      () => ({ reference: E, floating: R, setReference: w, setFloating: y }),
      [w, y]
    ),
    j = x.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    P = x.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!j.floating) return T;
      const _ = Sh(j.floating, u.x),
        k = Sh(j.floating, u.y);
      return l
        ? {
            ...T,
            transform: "translate(" + _ + "px, " + k + "px)",
            ...(N0(j.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: _, top: k };
    }, [n, l, j.floating, u.x, u.y]);
  return x.useMemo(
    () => ({ ...u, update: B, refs: A, elements: j, floatingStyles: P }),
    [u, B, A, j, P]
  );
}
const O0 = { ...Og },
  $k = O0.useInsertionEffect,
  Lk = $k || ((e) => e());
function Ak(e) {
  const t = x.useRef(() => {});
  return (
    Lk(() => {
      t.current = e;
    }),
    x.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
var ed = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
let Ch = !1,
  Fk = 0;
const Eh = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Fk++;
function Mk() {
  const [e, t] = x.useState(() => (Ch ? Eh() : void 0));
  return (
    ed(() => {
      e == null && t(Eh());
    }, []),
    x.useEffect(() => {
      Ch = !0;
    }, []),
    e
  );
}
const Ik = O0.useId,
  zk = Ik || Mk;
function Bk() {
  const e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...(e.get(t) || []), n]);
    },
    off(t, n) {
      var r;
      e.set(
        t,
        ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []
      );
    },
  };
}
const Vk = x.createContext(null),
  Hk = x.createContext(null),
  Wk = () => {
    var e;
    return ((e = x.useContext(Vk)) == null ? void 0 : e.id) || null;
  },
  Uk = () => x.useContext(Hk);
function Yk(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    o = zk(),
    s = x.useRef({}),
    [i] = x.useState(() => Bk()),
    l = Wk() != null,
    [a, c] = x.useState(r.reference),
    u = Ak((m, p, h) => {
      (s.current.openEvent = m ? p : void 0),
        i.emit("openchange", { open: m, event: p, reason: h, nested: l }),
        n == null || n(m, p, h);
    }),
    d = x.useMemo(() => ({ setPositionReference: c }), []),
    f = x.useMemo(
      () => ({
        reference: a || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [a, r.reference, r.floating]
    );
  return x.useMemo(
    () => ({
      dataRef: s,
      open: t,
      onOpenChange: u,
      elements: f,
      events: i,
      floatingId: o,
      refs: d,
    }),
    [t, u, f, i, o, d]
  );
}
function qk(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    n = Yk({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    o = r.elements,
    [s, i] = x.useState(null),
    [l, a] = x.useState(null),
    u = (o == null ? void 0 : o.reference) || s,
    d = x.useRef(null),
    f = Uk();
  ed(() => {
    u && (d.current = u);
  }, [u]);
  const m = jk({ ...e, elements: { ...o, ...(l && { reference: l }) } }),
    p = x.useCallback(
      (y) => {
        const b = bt(y)
          ? {
              getBoundingClientRect: () => y.getBoundingClientRect(),
              contextElement: y,
            }
          : y;
        a(b), m.refs.setReference(b);
      },
      [m.refs]
    ),
    h = x.useCallback(
      (y) => {
        (bt(y) || y === null) && ((d.current = y), i(y)),
          (bt(m.refs.reference.current) ||
            m.refs.reference.current === null ||
            (y !== null && !bt(y))) &&
            m.refs.setReference(y);
      },
      [m.refs]
    ),
    S = x.useMemo(
      () => ({
        ...m.refs,
        setReference: h,
        setPositionReference: p,
        domReference: d,
      }),
      [m.refs, h, p]
    ),
    v = x.useMemo(() => ({ ...m.elements, domReference: u }), [m.elements, u]),
    w = x.useMemo(
      () => ({ ...m, ...r, refs: S, elements: v, nodeId: t }),
      [m, S, v, t, r]
    );
  return (
    ed(() => {
      r.dataRef.current.floatingContext = w;
      const y = f == null ? void 0 : f.nodesRef.current.find((b) => b.id === t);
      y && (y.context = w);
    }),
    x.useMemo(() => ({ ...m, context: w, refs: S, elements: v }), [m, S, v, w])
  );
}
function Kk(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"),
      o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function kh(e, t, n, r) {
  return e === "center" || r === "center"
    ? { top: t }
    : e === "end"
    ? { bottom: n }
    : e === "start"
    ? { top: n }
    : {};
}
function _h(e, t, n, r, o) {
  return e === "center" || r === "center"
    ? { left: t }
    : e === "end"
    ? { [o === "ltr" ? "right" : "left"]: n }
    : e === "start"
    ? { [o === "ltr" ? "left" : "right"]: n }
    : {};
}
const Gk = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function Xk({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: r,
  arrowPosition: o,
  arrowX: s,
  arrowY: i,
  dir: l,
}) {
  const [a, c = "center"] = e.split("-"),
    u = {
      width: z(t),
      height: z(t),
      transform: "rotate(45deg)",
      position: "absolute",
      [Gk[a]]: z(r),
    },
    d = z(-t / 2);
  return a === "left"
    ? {
        ...u,
        ...kh(c, i, n, o),
        right: d,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
      }
    : a === "right"
    ? {
        ...u,
        ...kh(c, i, n, o),
        left: d,
        borderRightColor: "transparent",
        borderTopColor: "transparent",
      }
    : a === "top"
    ? {
        ...u,
        ..._h(c, s, n, o, l),
        bottom: d,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
      }
    : a === "bottom"
    ? {
        ...u,
        ..._h(c, s, n, o, l),
        top: d,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
      }
    : {};
}
const j0 = x.forwardRef(
  (
    {
      position: e,
      arrowSize: t,
      arrowOffset: n,
      arrowRadius: r,
      arrowPosition: o,
      visible: s,
      arrowX: i,
      arrowY: l,
      style: a,
      ...c
    },
    u
  ) => {
    const { dir: d } = _f();
    return s
      ? g.jsx("div", {
          ...c,
          ref: u,
          style: {
            ...a,
            ...Xk({
              position: e,
              arrowSize: t,
              arrowOffset: n,
              arrowRadius: r,
              arrowPosition: o,
              dir: d,
              arrowX: i,
              arrowY: l,
            }),
          },
        })
      : null;
  }
);
j0.displayName = "@mantine/core/FloatingArrow";
const [Qk, $0] = br("Popover component was not found in the tree");
function ka({ children: e, active: t = !0, refProp: n = "ref" }) {
  const r = lC(t),
    o = Mt(r, e == null ? void 0 : e.ref);
  return no(e) ? x.cloneElement(e, { [n]: o }) : e;
}
function L0(e) {
  return g.jsx(Tf, { tabIndex: -1, "data-autofocus": !0, ...e });
}
ka.displayName = "@mantine/core/FocusTrap";
L0.displayName = "@mantine/core/FocusTrapInitialFocus";
ka.InitialFocus = L0;
function Jk(e) {
  const t = document.createElement("div");
  return (
    t.setAttribute("data-portal", "true"),
    typeof e.className == "string" &&
      t.classList.add(...e.className.split(" ").filter(Boolean)),
    typeof e.style == "object" && Object.assign(t.style, e.style),
    typeof e.id == "string" && t.setAttribute("id", e.id),
    t
  );
}
const Zk = {},
  A0 = x.forwardRef((e, t) => {
    const { children: n, target: r, ...o } = W("Portal", Zk, e),
      [s, i] = x.useState(!1),
      l = x.useRef(null);
    return (
      yi(
        () => (
          i(!0),
          (l.current = r
            ? typeof r == "string"
              ? document.querySelector(r)
              : r
            : Jk(o)),
          xf(t, l.current),
          !r && l.current && document.body.appendChild(l.current),
          () => {
            !r && l.current && document.body.removeChild(l.current);
          }
        ),
        [r]
      ),
      !s || !l.current
        ? null
        : gi.createPortal(g.jsx(g.Fragment, { children: n }), l.current)
    );
  });
A0.displayName = "@mantine/core/Portal";
function _a({ withinPortal: e = !0, children: t, ...n }) {
  return e
    ? g.jsx(A0, { ...n, children: t })
    : g.jsx(g.Fragment, { children: t });
}
_a.displayName = "@mantine/core/OptionalPortal";
const ks = (e) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${z(e === "bottom" ? 10 : -10)})`,
    },
    transitionProperty: "transform, opacity",
  }),
  Gi = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${z(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${z(-30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${z(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${z(-30)}` },
      transitionProperty: "opacity, transform",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${z(-20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${z(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${z(20)}) rotate(-5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${z(20)}) rotate(5deg)` },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: { ...ks("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...ks("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...ks("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...ks("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...ks("top"), common: { transformOrigin: "top right" } },
  },
  Rh = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function e_({ transition: e, state: t, duration: n, timingFunction: r }) {
  const o = { transitionDuration: `${n}ms`, transitionTimingFunction: r };
  return typeof e == "string"
    ? e in Gi
      ? {
          transitionProperty: Gi[e].transitionProperty,
          ...o,
          ...Gi[e].common,
          ...Gi[e][Rh[t]],
        }
      : {}
    : {
        transitionProperty: e.transitionProperty,
        ...o,
        ...e.common,
        ...e[Rh[t]],
      };
}
function t_({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: s,
  onEntered: i,
  onExited: l,
}) {
  const a = Dn(),
    c = Sf(),
    u = a.respectReducedMotion ? c : !1,
    [d, f] = x.useState(u ? 0 : e),
    [m, p] = x.useState(r ? "entered" : "exited"),
    h = x.useRef(-1),
    S = x.useRef(-1),
    v = (w) => {
      const y = w ? o : s,
        b = w ? i : l;
      window.clearTimeout(h.current);
      const C = u ? 0 : w ? e : t;
      f(C),
        C === 0
          ? (typeof y == "function" && y(),
            typeof b == "function" && b(),
            p(w ? "entered" : "exited"))
          : (S.current = requestAnimationFrame(() => {
              ib.flushSync(() => {
                p(w ? "pre-entering" : "pre-exiting");
              }),
                (S.current = requestAnimationFrame(() => {
                  typeof y == "function" && y(),
                    p(w ? "entering" : "exiting"),
                    (h.current = window.setTimeout(() => {
                      typeof b == "function" && b(),
                        p(w ? "entered" : "exited");
                    }, C));
                }));
            }));
    };
  return (
    qr(() => {
      v(r);
    }, [r]),
    x.useEffect(
      () => () => {
        window.clearTimeout(h.current), cancelAnimationFrame(S.current);
      },
      []
    ),
    {
      transitionDuration: d,
      transitionStatus: m,
      transitionTimingFunction: n || "ease",
    }
  );
}
function is({
  keepMounted: e,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: s,
  timingFunction: i = "ease",
  onExit: l,
  onEntered: a,
  onEnter: c,
  onExited: u,
}) {
  const {
    transitionDuration: d,
    transitionStatus: f,
    transitionTimingFunction: m,
  } = t_({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: i,
    onExit: l,
    onEntered: a,
    onEnter: c,
    onExited: u,
  });
  return d === 0
    ? o
      ? g.jsx(g.Fragment, { children: s({}) })
      : e
      ? s({ display: "none" })
      : null
    : f === "exited"
    ? e
      ? s({ display: "none" })
      : null
    : g.jsx(g.Fragment, {
        children: s(
          e_({ transition: t, duration: d, state: f, timingFunction: m })
        ),
      });
}
is.displayName = "@mantine/core/Transition";
var F0 = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const n_ = {},
  Bf = G((e, t) => {
    var S, v, w, y;
    const n = W("PopoverDropdown", n_, e),
      {
        className: r,
        style: o,
        vars: s,
        children: i,
        onKeyDownCapture: l,
        variant: a,
        classNames: c,
        styles: u,
        ...d
      } = n,
      f = $0(),
      m = Yv({ opened: f.opened, shouldReturnFocus: f.returnFocus }),
      p = f.withRoles
        ? {
            "aria-labelledby": f.getTargetId(),
            id: f.getDropdownId(),
            role: "dialog",
            tabIndex: -1,
          }
        : {},
      h = Mt(t, f.floating);
    return f.disabled
      ? null
      : g.jsx(_a, {
          ...f.portalProps,
          withinPortal: f.withinPortal,
          children: g.jsx(is, {
            mounted: f.opened,
            ...f.transitionProps,
            transition:
              ((S = f.transitionProps) == null ? void 0 : S.transition) ||
              "fade",
            duration:
              ((v = f.transitionProps) == null ? void 0 : v.duration) ?? 150,
            keepMounted: f.keepMounted,
            exitDuration:
              typeof ((w = f.transitionProps) == null
                ? void 0
                : w.exitDuration) == "number"
                ? f.transitionProps.exitDuration
                : (y = f.transitionProps) == null
                ? void 0
                : y.duration,
            children: (b) =>
              g.jsx(ka, {
                active: f.trapFocus,
                children: g.jsxs(X, {
                  ...p,
                  ...d,
                  variant: a,
                  ref: h,
                  onKeyDownCapture: Kb(f.onClose, {
                    active: f.closeOnEscape,
                    onTrigger: m,
                    onKeyDown: l,
                  }),
                  "data-position": f.placement,
                  ...f.getStyles("dropdown", {
                    className: r,
                    props: n,
                    classNames: c,
                    styles: u,
                    style: [
                      {
                        ...b,
                        zIndex: f.zIndex,
                        top: f.y ?? 0,
                        left: f.x ?? 0,
                        width: f.width === "target" ? void 0 : z(f.width),
                      },
                      o,
                    ],
                  }),
                  children: [
                    i,
                    g.jsx(j0, {
                      ref: f.arrowRef,
                      arrowX: f.arrowX,
                      arrowY: f.arrowY,
                      visible: f.withArrow,
                      position: f.placement,
                      arrowSize: f.arrowSize,
                      arrowRadius: f.arrowRadius,
                      arrowOffset: f.arrowOffset,
                      arrowPosition: f.arrowPosition,
                      ...f.getStyles("arrow", {
                        props: n,
                        classNames: c,
                        styles: u,
                      }),
                    }),
                  ],
                }),
              }),
          }),
        });
  });
Bf.classes = F0;
Bf.displayName = "@mantine/core/PopoverDropdown";
const r_ = { refProp: "ref", popupType: "dialog" },
  M0 = G((e, t) => {
    const {
      children: n,
      refProp: r,
      popupType: o,
      ...s
    } = W("PopoverTarget", r_, e);
    if (!no(n))
      throw new Error(
        "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const i = s,
      l = $0(),
      a = Mt(l.reference, n.ref, t),
      c = l.withRoles
        ? {
            "aria-haspopup": o,
            "aria-expanded": l.opened,
            "aria-controls": l.getDropdownId(),
            id: l.getTargetId(),
          }
        : {};
    return x.cloneElement(n, {
      ...i,
      ...c,
      ...l.targetProps,
      className: ft(l.targetProps.className, i.className, n.props.className),
      [r]: a,
      ...(l.controlled ? null : { onClick: l.onToggle }),
    });
  });
M0.displayName = "@mantine/core/PopoverTarget";
function o_({ opened: e, floating: t, position: n, positionDependencies: r }) {
  const [o, s] = x.useState(0);
  x.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return Rk(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference.current, t.refs.floating.current, e, o, n]),
    qr(() => {
      t.update();
    }, r),
    qr(() => {
      s((i) => i + 1);
    }, [e]);
}
function s_(e) {
  if (e === void 0) return { shift: !0, flip: !0 };
  const t = { ...e };
  return (
    e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t
  );
}
function i_(e, t) {
  const n = s_(e.middlewares),
    r = [Dk(e.offset)];
  return (
    n.shift &&
      r.push(
        Pk(
          typeof n.shift == "boolean"
            ? { limiter: xh(), padding: 5 }
            : { limiter: xh(), padding: 5, ...n.shift }
        )
      ),
    n.flip && r.push(typeof n.flip == "boolean" ? yh() : yh(n.flip)),
    n.inline && r.push(typeof n.inline == "boolean" ? wh() : wh(n.inline)),
    r.push(Ok({ element: e.arrowRef, padding: e.arrowOffset })),
    (n.size || e.width === "target") &&
      r.push(
        Tk({
          ...(typeof n.size == "boolean" ? {} : n.size),
          apply({ rects: o, availableWidth: s, availableHeight: i }) {
            var c;
            const a =
              ((c = t().refs.floating.current) == null ? void 0 : c.style) ??
              {};
            n.size &&
              Object.assign(a, { maxWidth: `${s}px`, maxHeight: `${i}px` }),
              e.width === "target" &&
                Object.assign(a, { width: `${o.reference.width}px` });
          },
        })
      ),
    r
  );
}
function l_(e) {
  const [t, n] = sn({
      value: e.opened,
      defaultValue: e.defaultOpened,
      finalValue: !1,
      onChange: e.onChange,
    }),
    r = () => {
      var i;
      t && ((i = e.onClose) == null || i.call(e), n(!1));
    },
    o = () => {
      var i, l;
      t
        ? ((i = e.onClose) == null || i.call(e), n(!1))
        : ((l = e.onOpen) == null || l.call(e), n(!0));
    },
    s = qk({
      strategy: e.strategy,
      placement: e.position,
      middleware: i_(e, () => s),
    });
  return (
    o_({
      opened: e.opened,
      position: e.position,
      positionDependencies: e.positionDependencies || [],
      floating: s,
    }),
    qr(() => {
      var i;
      (i = e.onPositionChange) == null || i.call(e, s.placement);
    }, [s.placement]),
    qr(() => {
      var i, l;
      e.opened
        ? (l = e.onOpen) == null || l.call(e)
        : (i = e.onClose) == null || i.call(e);
    }, [e.opened]),
    {
      floating: s,
      controlled: typeof e.opened == "boolean",
      opened: t,
      onClose: r,
      onToggle: o,
    }
  );
}
const a_ = {
    position: "bottom",
    offset: 8,
    positionDependencies: [],
    transitionProps: { transition: "fade", duration: 150 },
    middlewares: { flip: !0, shift: !0, inline: !1 },
    arrowSize: 7,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    closeOnClickOutside: !0,
    withinPortal: !0,
    closeOnEscape: !0,
    trapFocus: !1,
    withRoles: !0,
    returnFocus: !1,
    clickOutsideEvents: ["mousedown", "touchstart"],
    zIndex: ro("popover"),
    __staticSelector: "Popover",
    width: "max-content",
  },
  c_ = (e, { radius: t, shadow: n }) => ({
    dropdown: {
      "--popover-radius": t === void 0 ? void 0 : Rn(t),
      "--popover-shadow": wf(n),
    },
  });
function un(e) {
  var ve, Ke, Re, $e, Y, re;
  const t = W("Popover", a_, e),
    {
      children: n,
      position: r,
      offset: o,
      onPositionChange: s,
      positionDependencies: i,
      opened: l,
      transitionProps: a,
      width: c,
      middlewares: u,
      withArrow: d,
      arrowSize: f,
      arrowOffset: m,
      arrowRadius: p,
      arrowPosition: h,
      unstyled: S,
      classNames: v,
      styles: w,
      closeOnClickOutside: y,
      withinPortal: b,
      portalProps: C,
      closeOnEscape: E,
      clickOutsideEvents: R,
      trapFocus: D,
      onClose: L,
      onOpen: N,
      onChange: F,
      zIndex: B,
      radius: V,
      shadow: A,
      id: j,
      defaultOpened: P,
      __staticSelector: T,
      withRoles: _,
      disabled: k,
      returnFocus: $,
      variant: O,
      keepMounted: I,
      vars: q,
      floatingStrategy: Q,
      ...ee
    } = t,
    ne = de({
      name: T,
      props: t,
      classes: F0,
      classNames: v,
      styles: w,
      unstyled: S,
      rootSelector: "dropdown",
      vars: q,
      varsResolver: c_,
    }),
    te = x.useRef(null),
    [me, oe] = x.useState(null),
    [le, Z] = x.useState(null),
    { dir: he } = _f(),
    ae = Cr(j),
    se = l_({
      middlewares: u,
      width: c,
      position: Kk(he, r),
      offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
      arrowRef: te,
      arrowOffset: m,
      onPositionChange: s,
      positionDependencies: i,
      opened: l,
      defaultOpened: P,
      onChange: F,
      onOpen: N,
      onClose: L,
      strategy: Q,
    });
  Qb(() => y && se.onClose(), R, [me, le]);
  const _e = x.useCallback(
      (ie) => {
        oe(ie), se.floating.refs.setReference(ie);
      },
      [se.floating.refs.setReference]
    ),
    Ie = x.useCallback(
      (ie) => {
        Z(ie), se.floating.refs.setFloating(ie);
      },
      [se.floating.refs.setFloating]
    );
  return g.jsx(Qk, {
    value: {
      returnFocus: $,
      disabled: k,
      controlled: se.controlled,
      reference: _e,
      floating: Ie,
      x: se.floating.x,
      y: se.floating.y,
      arrowX:
        (Re =
          (Ke = (ve = se.floating) == null ? void 0 : ve.middlewareData) == null
            ? void 0
            : Ke.arrow) == null
          ? void 0
          : Re.x,
      arrowY:
        (re =
          (Y = ($e = se.floating) == null ? void 0 : $e.middlewareData) == null
            ? void 0
            : Y.arrow) == null
          ? void 0
          : re.y,
      opened: se.opened,
      arrowRef: te,
      transitionProps: a,
      width: c,
      withArrow: d,
      arrowSize: f,
      arrowOffset: m,
      arrowRadius: p,
      arrowPosition: h,
      placement: se.floating.placement,
      trapFocus: D,
      withinPortal: b,
      portalProps: C,
      zIndex: B,
      radius: V,
      shadow: A,
      closeOnEscape: E,
      onClose: se.onClose,
      onToggle: se.onToggle,
      getTargetId: () => `${ae}-target`,
      getDropdownId: () => `${ae}-dropdown`,
      withRoles: _,
      targetProps: ee,
      __staticSelector: T,
      classNames: v,
      styles: w,
      unstyled: S,
      variant: O,
      keepMounted: I,
      getStyles: ne,
    },
    children: n,
  });
}
un.Target = M0;
un.Dropdown = Bf;
un.displayName = "@mantine/core/Popover";
un.extend = (e) => e;
var en = {
  root: "m_5ae2e3c",
  barsLoader: "m_7a2bd4cd",
  bar: "m_870bb79",
  "bars-loader-animation": "m_5d2b3b9d",
  dotsLoader: "m_4e3f22d7",
  dot: "m_870c4af",
  "loader-dots-animation": "m_aac34a1",
  ovalLoader: "m_b34414df",
  "oval-loader-animation": "m_f8e89c4b",
};
const u_ = x.forwardRef(({ className: e, ...t }, n) =>
    g.jsxs(X, {
      component: "span",
      className: ft(en.barsLoader, e),
      ...t,
      ref: n,
      children: [
        g.jsx("span", { className: en.bar }),
        g.jsx("span", { className: en.bar }),
        g.jsx("span", { className: en.bar }),
      ],
    })
  ),
  d_ = x.forwardRef(({ className: e, ...t }, n) =>
    g.jsxs(X, {
      component: "span",
      className: ft(en.dotsLoader, e),
      ...t,
      ref: n,
      children: [
        g.jsx("span", { className: en.dot }),
        g.jsx("span", { className: en.dot }),
        g.jsx("span", { className: en.dot }),
      ],
    })
  ),
  f_ = x.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(X, {
      component: "span",
      className: ft(en.ovalLoader, e),
      ...t,
      ref: n,
    })
  ),
  I0 = { bars: u_, oval: f_, dots: d_ },
  p_ = { loaders: I0, type: "oval" },
  m_ = (e, { size: t, color: n }) => ({
    root: {
      "--loader-size": Pe(t, "loader-size"),
      "--loader-color": n ? qo(n, e) : void 0,
    },
  }),
  xi = G((e, t) => {
    const n = W("Loader", p_, e),
      {
        size: r,
        color: o,
        type: s,
        vars: i,
        className: l,
        style: a,
        classNames: c,
        styles: u,
        unstyled: d,
        loaders: f,
        variant: m,
        children: p,
        ...h
      } = n,
      S = de({
        name: "Loader",
        props: n,
        classes: en,
        className: l,
        style: a,
        classNames: c,
        styles: u,
        unstyled: d,
        vars: i,
        varsResolver: m_,
      });
    return p
      ? g.jsx(X, { ...S("root"), ref: t, ...h, children: p })
      : g.jsx(X, {
          ...S("root"),
          ref: t,
          component: f[s],
          variant: m,
          size: r,
          ...h,
        });
  });
xi.defaultLoaders = I0;
xi.classes = en;
xi.displayName = "@mantine/core/Loader";
const z0 = x.forwardRef(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) =>
    g.jsx("svg", {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: g.jsx("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    })
);
z0.displayName = "@mantine/core/CloseIcon";
var B0 = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const h_ = { variant: "subtle" },
  g_ = (e, { size: t, radius: n, iconSize: r }) => ({
    root: {
      "--cb-size": Pe(t, "cb-size"),
      "--cb-radius": n === void 0 ? void 0 : Rn(n),
      "--cb-icon-size": z(r),
    },
  }),
  Gr = Un((e, t) => {
    const n = W("CloseButton", h_, e),
      {
        iconSize: r,
        children: o,
        vars: s,
        radius: i,
        className: l,
        classNames: a,
        style: c,
        styles: u,
        unstyled: d,
        "data-disabled": f,
        disabled: m,
        variant: p,
        icon: h,
        mod: S,
        ...v
      } = n,
      w = de({
        name: "CloseButton",
        props: n,
        className: l,
        style: c,
        classes: B0,
        classNames: a,
        styles: u,
        unstyled: d,
        vars: s,
        varsResolver: g_,
      });
    return g.jsxs(Mn, {
      ref: t,
      ...v,
      unstyled: d,
      variant: p,
      disabled: m,
      mod: [{ disabled: m || f }, S],
      ...w("root", { variant: p, active: !m && !f }),
      children: [h || g.jsx(z0, {}), o],
    });
  });
Gr.classes = B0;
Gr.displayName = "@mantine/core/CloseButton";
function y_(e) {
  return x.Children.toArray(e).filter(Boolean);
}
var V0 = { root: "m_4081bf90" };
const v_ = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  w_ = (
    e,
    { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: s, wrap: i },
    { childWidth: l }
  ) => ({
    root: {
      "--group-child-width": t && n ? l : void 0,
      "--group-gap": xa(r),
      "--group-align": o,
      "--group-justify": s,
      "--group-wrap": i,
    },
  }),
  rr = G((e, t) => {
    const n = W("Group", v_, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        children: a,
        gap: c,
        align: u,
        justify: d,
        wrap: f,
        grow: m,
        preventGrowOverflow: p,
        vars: h,
        variant: S,
        __size: v,
        mod: w,
        ...y
      } = n,
      b = y_(a),
      C = b.length,
      E = xa(c ?? "md"),
      D = { childWidth: `calc(${100 / C}% - (${E} - ${E} / ${C}))` },
      L = de({
        name: "Group",
        props: n,
        stylesCtx: D,
        className: o,
        style: s,
        classes: V0,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: h,
        varsResolver: w_,
      });
    return g.jsx(X, {
      ...L("root"),
      ref: t,
      variant: S,
      mod: [{ grow: m }, w],
      size: v,
      ...y,
      children: b,
    });
  });
rr.classes = V0;
rr.displayName = "@mantine/core/Group";
var H0 = { root: "m_9814e45f" };
const x_ = { zIndex: ro("modal") },
  S_ = (
    e,
    {
      gradient: t,
      color: n,
      backgroundOpacity: r,
      blur: o,
      radius: s,
      zIndex: i,
    }
  ) => ({
    root: {
      "--overlay-bg":
        t ||
        ((n !== void 0 || r !== void 0) && wn(n || "#000", r ?? 0.6)) ||
        void 0,
      "--overlay-filter": o ? `blur(${z(o)})` : void 0,
      "--overlay-radius": s === void 0 ? void 0 : Rn(s),
      "--overlay-z-index": i == null ? void 0 : i.toString(),
    },
  }),
  li = Un((e, t) => {
    const n = W("Overlay", x_, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        fixed: c,
        center: u,
        children: d,
        radius: f,
        zIndex: m,
        gradient: p,
        blur: h,
        color: S,
        backgroundOpacity: v,
        mod: w,
        ...y
      } = n,
      b = de({
        name: "Overlay",
        props: n,
        classes: H0,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: S_,
      });
    return g.jsx(X, {
      ref: t,
      ...b("root"),
      mod: [{ center: u, fixed: c }, w],
      ...y,
      children: d,
    });
  });
li.classes = H0;
li.displayName = "@mantine/core/Overlay";
const [b_, qn] = br("ModalBase component was not found in tree");
function C_({ opened: e, transitionDuration: t }) {
  const [n, r] = x.useState(e),
    o = x.useRef(),
    i = Sf() ? 0 : t;
  return (
    x.useEffect(
      () => (
        e
          ? (r(!0), window.clearTimeout(o.current))
          : i === 0
          ? r(!1)
          : (o.current = window.setTimeout(() => r(!1), i)),
        () => window.clearTimeout(o.current)
      ),
      [e, i]
    ),
    n
  );
}
function E_({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: s,
  returnFocus: i,
}) {
  const l = Cr(e),
    [a, c] = x.useState(!1),
    [u, d] = x.useState(!1),
    f =
      typeof (t == null ? void 0 : t.duration) == "number"
        ? t == null
          ? void 0
          : t.duration
        : 200,
    m = C_({ opened: n, transitionDuration: f });
  return (
    uC(
      "keydown",
      (p) => {
        var h;
        p.key === "Escape" &&
          o &&
          n &&
          ((h = p.target) == null
            ? void 0
            : h.getAttribute("data-mantine-stop-propagation")) !== "true" &&
          s();
      },
      { capture: !0 }
    ),
    Yv({ opened: n, shouldReturnFocus: r && i }),
    {
      _id: l,
      titleMounted: a,
      bodyMounted: u,
      shouldLockScroll: m,
      setTitleMounted: c,
      setBodyMounted: d,
    }
  );
}
const k_ = x.forwardRef(
  (
    {
      keepMounted: e,
      opened: t,
      onClose: n,
      id: r,
      transitionProps: o,
      trapFocus: s,
      closeOnEscape: i,
      returnFocus: l,
      closeOnClickOutside: a,
      withinPortal: c,
      portalProps: u,
      lockScroll: d,
      children: f,
      zIndex: m,
      shadow: p,
      padding: h,
      __vars: S,
      unstyled: v,
      removeScrollProps: w,
      ...y
    },
    b
  ) => {
    const {
      _id: C,
      titleMounted: E,
      bodyMounted: R,
      shouldLockScroll: D,
      setTitleMounted: L,
      setBodyMounted: N,
    } = E_({
      id: r,
      transitionProps: o,
      opened: t,
      trapFocus: s,
      closeOnEscape: i,
      onClose: n,
      returnFocus: l,
    });
    return g.jsx(_a, {
      ...u,
      withinPortal: c,
      children: g.jsx(b_, {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: a,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${C}-title`,
          getBodyId: () => `${C}-body`,
          titleMounted: E,
          bodyMounted: R,
          setTitleMounted: L,
          setBodyMounted: N,
          trapFocus: s,
          closeOnEscape: i,
          zIndex: m,
          unstyled: v,
        },
        children: g.jsx(Vv, {
          enabled: D && d,
          ...w,
          children: g.jsx(X, {
            ref: b,
            ...y,
            __vars: {
              ...S,
              "--mb-z-index": (m || ro("modal")).toString(),
              "--mb-shadow": wf(p),
              "--mb-padding": xa(h),
            },
            children: f,
          }),
        }),
      }),
    });
  }
);
function __() {
  const e = qn();
  return (
    x.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []),
    e.getBodyId()
  );
}
var Qo = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
const W0 = x.forwardRef(({ className: e, ...t }, n) => {
  const r = __(),
    o = qn();
  return g.jsx(X, {
    ref: n,
    ...t,
    id: r,
    className: ft({ [Qo.body]: !o.unstyled }, e),
  });
});
W0.displayName = "@mantine/core/ModalBaseBody";
const U0 = x.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const o = qn();
  return g.jsx(Gr, {
    ref: r,
    ...n,
    onClick: (s) => {
      o.onClose(), t == null || t(s);
    },
    className: ft({ [Qo.close]: !o.unstyled }, e),
    unstyled: o.unstyled,
  });
});
U0.displayName = "@mantine/core/ModalBaseCloseButton";
const R_ = x.forwardRef(
    (
      {
        transitionProps: e,
        className: t,
        innerProps: n,
        onKeyDown: r,
        style: o,
        ...s
      },
      i
    ) => {
      const l = qn();
      return g.jsx(is, {
        mounted: l.opened,
        transition: "pop",
        ...l.transitionProps,
        ...e,
        children: (a) =>
          g.jsx("div", {
            ...n,
            className: ft({ [Qo.inner]: !l.unstyled }, n.className),
            children: g.jsx(ka, {
              active: l.opened && l.trapFocus,
              children: g.jsx(Nf, {
                ...s,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": l.bodyMounted ? l.getBodyId() : void 0,
                "aria-labelledby": l.titleMounted ? l.getTitleId() : void 0,
                ref: i,
                style: [o, a],
                className: ft({ [Qo.content]: !l.unstyled }, t),
                unstyled: l.unstyled,
                children: s.children,
              }),
            }),
          }),
      });
    }
  ),
  Y0 = x.forwardRef(({ className: e, ...t }, n) => {
    const r = qn();
    return g.jsx(X, {
      component: "header",
      ref: n,
      className: ft({ [Qo.header]: !r.unstyled }, e),
      ...t,
    });
  });
Y0.displayName = "@mantine/core/ModalBaseHeader";
const D_ = { duration: 200, timingFunction: "ease", transition: "fade" };
function P_(e) {
  const t = qn();
  return { ...D_, ...t.transitionProps, ...e };
}
const q0 = x.forwardRef(
  ({ onClick: e, transitionProps: t, style: n, ...r }, o) => {
    const s = qn(),
      i = P_(t);
    return g.jsx(is, {
      mounted: s.opened,
      ...i,
      transition: "fade",
      children: (l) =>
        g.jsx(li, {
          ref: o,
          fixed: !0,
          style: [n, l],
          zIndex: s.zIndex,
          unstyled: s.unstyled,
          onClick: (a) => {
            e == null || e(a), s.closeOnClickOutside && s.onClose();
          },
          ...r,
        }),
    });
  }
);
q0.displayName = "@mantine/core/ModalBaseOverlay";
function T_() {
  const e = qn();
  return (
    x.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
const K0 = x.forwardRef(({ className: e, ...t }, n) => {
  const r = T_(),
    o = qn();
  return g.jsx(X, {
    component: "h2",
    ref: n,
    className: ft({ [Qo.title]: !o.unstyled }, e),
    ...t,
    id: r,
  });
});
K0.displayName = "@mantine/core/ModalBaseTitle";
function N_({ children: e }) {
  return g.jsx(g.Fragment, { children: e });
}
const [O_, ls] = vf({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var Kt = {
  wrapper: "m_6c018570",
  input: "m_8fb7ebe7",
  section: "m_82577fc2",
  placeholder: "m_88bacfd0",
  root: "m_46b77525",
  label: "m_8fdc1311",
  required: "m_78a94662",
  error: "m_8f816625",
  description: "m_fe47ce59",
};
const Dh = {},
  j_ = (e, { size: t }) => ({
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${ot(t)} - ${z(2)})`,
    },
  }),
  Ra = G((e, t) => {
    const n = W("InputDescription", Dh, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        size: c,
        __staticSelector: u,
        __inheritStyles: d = !0,
        variant: f,
        ...m
      } = W("InputDescription", Dh, n),
      p = ls(),
      h = de({
        name: ["InputWrapper", u],
        props: n,
        classes: Kt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "description",
        vars: a,
        varsResolver: j_,
      }),
      S = (d && (p == null ? void 0 : p.getStyles)) || h;
    return g.jsx(X, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...S(
        "description",
        p != null && p.getStyles ? { className: o, style: s } : void 0
      ),
      ...m,
    });
  });
Ra.classes = Kt;
Ra.displayName = "@mantine/core/InputDescription";
const $_ = {},
  L_ = (e, { size: t }) => ({
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${ot(t)} - ${z(2)})`,
    },
  }),
  Da = G((e, t) => {
    const n = W("InputError", $_, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        size: c,
        __staticSelector: u,
        __inheritStyles: d = !0,
        variant: f,
        ...m
      } = n,
      p = de({
        name: ["InputWrapper", u],
        props: n,
        classes: Kt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "error",
        vars: a,
        varsResolver: L_,
      }),
      h = ls(),
      S = (d && (h == null ? void 0 : h.getStyles)) || p;
    return g.jsx(X, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...S(
        "error",
        h != null && h.getStyles ? { className: o, style: s } : void 0
      ),
      ...m,
    });
  });
Da.classes = Kt;
Da.displayName = "@mantine/core/InputError";
const Ph = { labelElement: "label" },
  A_ = (e, { size: t }) => ({
    label: { "--input-label-size": ot(t), "--input-asterisk-color": void 0 },
  }),
  Pa = G((e, t) => {
    const n = W("InputLabel", Ph, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        labelElement: c,
        size: u,
        required: d,
        htmlFor: f,
        onMouseDown: m,
        children: p,
        __staticSelector: h,
        variant: S,
        mod: v,
        ...w
      } = W("InputLabel", Ph, n),
      y = de({
        name: ["InputWrapper", h],
        props: n,
        classes: Kt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "label",
        vars: a,
        varsResolver: A_,
      }),
      b = ls(),
      C = (b == null ? void 0 : b.getStyles) || y;
    return g.jsxs(X, {
      ...C(
        "label",
        b != null && b.getStyles ? { className: o, style: s } : void 0
      ),
      component: c,
      variant: S,
      size: u,
      ref: t,
      htmlFor: c === "label" ? f : void 0,
      mod: [{ required: d }, v],
      onMouseDown: (E) => {
        m == null || m(E),
          !E.defaultPrevented && E.detail > 1 && E.preventDefault();
      },
      ...w,
      children: [
        p,
        d &&
          g.jsx("span", {
            ...C("required"),
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
Pa.classes = Kt;
Pa.displayName = "@mantine/core/InputLabel";
const Th = {},
  Vf = G((e, t) => {
    const n = W("InputPlaceholder", Th, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        __staticSelector: c,
        variant: u,
        error: d,
        mod: f,
        ...m
      } = W("InputPlaceholder", Th, n),
      p = de({
        name: ["InputPlaceholder", c],
        props: n,
        classes: Kt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "placeholder",
      });
    return g.jsx(X, {
      ...p("placeholder"),
      mod: [{ error: !!d }, f],
      component: "span",
      variant: u,
      ref: t,
      ...m,
    });
  });
Vf.classes = Kt;
Vf.displayName = "@mantine/core/InputPlaceholder";
function F_(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((a) => a === "input"),
    o = e[r - 1],
    s = e[r + 1];
  return {
    offsetBottom: (t && s === "description") || (n && s === "error"),
    offsetTop: (t && o === "description") || (n && o === "error"),
  };
}
const M_ = {
    labelElement: "label",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  I_ = (e, { size: t }) => ({
    label: { "--input-label-size": ot(t), "--input-asterisk-color": void 0 },
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${ot(t)} - ${z(2)})`,
    },
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${ot(t)} - ${z(2)})`,
    },
  }),
  Hf = G((e, t) => {
    const n = W("InputWrapper", M_, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        size: c,
        variant: u,
        __staticSelector: d,
        inputContainer: f,
        inputWrapperOrder: m,
        label: p,
        error: h,
        description: S,
        labelProps: v,
        descriptionProps: w,
        errorProps: y,
        labelElement: b,
        children: C,
        withAsterisk: E,
        id: R,
        required: D,
        __stylesApiProps: L,
        mod: N,
        ...F
      } = n,
      B = de({
        name: ["InputWrapper", d],
        props: L || n,
        classes: Kt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: I_,
      }),
      V = { size: c, variant: u, __staticSelector: d },
      A = Cr(R),
      j = typeof E == "boolean" ? E : D,
      P = (y == null ? void 0 : y.id) || `${A}-error`,
      T = (w == null ? void 0 : w.id) || `${A}-description`,
      _ = A,
      k = !!h && typeof h != "boolean",
      $ = !!S,
      O = `${k ? P : ""} ${$ ? T : ""}`,
      I = O.trim().length > 0 ? O.trim() : void 0,
      q = (v == null ? void 0 : v.id) || `${A}-label`,
      Q =
        p &&
        g.jsx(
          Pa,
          {
            labelElement: b,
            id: q,
            htmlFor: _,
            required: j,
            ...V,
            ...v,
            children: p,
          },
          "label"
        ),
      ee =
        $ &&
        g.jsx(
          Ra,
          {
            ...w,
            ...V,
            size: (w == null ? void 0 : w.size) || V.size,
            id: (w == null ? void 0 : w.id) || T,
            children: S,
          },
          "description"
        ),
      ne = g.jsx(x.Fragment, { children: f(C) }, "input"),
      te =
        k &&
        x.createElement(
          Da,
          {
            ...y,
            ...V,
            size: (y == null ? void 0 : y.size) || V.size,
            key: "error",
            id: (y == null ? void 0 : y.id) || P,
          },
          h
        ),
      me = m.map((oe) => {
        switch (oe) {
          case "label":
            return Q;
          case "input":
            return ne;
          case "description":
            return ee;
          case "error":
            return te;
          default:
            return null;
        }
      });
    return g.jsx(O_, {
      value: {
        getStyles: B,
        describedBy: I,
        inputId: _,
        labelId: q,
        ...F_(m, { hasDescription: $, hasError: k }),
      },
      children: g.jsx(X, {
        ref: t,
        variant: u,
        size: c,
        mod: [{ error: !!h }, N],
        ...B("root"),
        ...F,
        children: me,
      }),
    });
  });
Hf.classes = Kt;
Hf.displayName = "@mantine/core/InputWrapper";
const z_ = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
  },
  B_ = (e, t, n) => ({
    wrapper: {
      "--input-margin-top": n.offsetTop
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-margin-bottom": n.offsetBottom
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-height": Pe(t.size, "input-height"),
      "--input-fz": ot(t.size),
      "--input-radius": t.radius === void 0 ? void 0 : Rn(t.radius),
      "--input-left-section-width":
        t.leftSectionWidth !== void 0 ? z(t.leftSectionWidth) : void 0,
      "--input-right-section-width":
        t.rightSectionWidth !== void 0 ? z(t.rightSectionWidth) : void 0,
      "--input-padding-y": t.multiline ? Pe(t.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": t.leftSectionPointerEvents,
      "--input-right-section-pointer-events": t.rightSectionPointerEvents,
    },
  }),
  it = Un((e, t) => {
    const n = W("Input", z_, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        required: a,
        __staticSelector: c,
        __stylesApiProps: u,
        size: d,
        wrapperProps: f,
        error: m,
        disabled: p,
        leftSection: h,
        leftSectionProps: S,
        leftSectionWidth: v,
        rightSection: w,
        rightSectionProps: y,
        rightSectionWidth: b,
        rightSectionPointerEvents: C,
        leftSectionPointerEvents: E,
        variant: R,
        vars: D,
        pointer: L,
        multiline: N,
        radius: F,
        id: B,
        withAria: V,
        withErrorStyles: A,
        mod: j,
        ...P
      } = n,
      { styleProps: T, rest: _ } = rs(P),
      k = ls(),
      $ = {
        offsetBottom: k == null ? void 0 : k.offsetBottom,
        offsetTop: k == null ? void 0 : k.offsetTop,
      },
      O = de({
        name: ["Input", c],
        props: u || n,
        classes: Kt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        stylesCtx: $,
        rootSelector: "wrapper",
        vars: D,
        varsResolver: B_,
      }),
      I = V
        ? {
            required: a,
            disabled: p,
            "aria-invalid": !!m,
            "aria-describedby": k == null ? void 0 : k.describedBy,
            id: (k == null ? void 0 : k.inputId) || B,
          }
        : {};
    return g.jsxs(X, {
      ...O("wrapper"),
      ...T,
      ...f,
      mod: [
        {
          error: !!m && A,
          pointer: L,
          disabled: p,
          multiline: N,
          "data-with-right-section": !!w,
          "data-with-left-section": !!h,
        },
        j,
      ],
      variant: R,
      size: d,
      children: [
        h &&
          g.jsx("div", {
            ...S,
            "data-position": "left",
            ...O("section", {
              className: S == null ? void 0 : S.className,
              style: S == null ? void 0 : S.style,
            }),
            children: h,
          }),
        g.jsx(X, {
          component: "input",
          ..._,
          ...I,
          ref: t,
          required: a,
          mod: { disabled: p, error: !!m && A },
          variant: R,
          ...O("input"),
        }),
        w &&
          g.jsx("div", {
            ...y,
            "data-position": "right",
            ...O("section", {
              className: y == null ? void 0 : y.className,
              style: y == null ? void 0 : y.style,
            }),
            children: w,
          }),
      ],
    });
  });
it.classes = Kt;
it.Wrapper = Hf;
it.Label = Pa;
it.Error = Da;
it.Description = Ra;
it.Placeholder = Vf;
it.displayName = "@mantine/core/Input";
function V_(e, t, n) {
  const r = W(e, t, n),
    {
      label: o,
      description: s,
      error: i,
      required: l,
      classNames: a,
      styles: c,
      className: u,
      unstyled: d,
      __staticSelector: f,
      __stylesApiProps: m,
      errorProps: p,
      labelProps: h,
      descriptionProps: S,
      wrapperProps: v,
      id: w,
      size: y,
      style: b,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: R,
      variant: D,
      vars: L,
      mod: N,
      ...F
    } = r,
    { styleProps: B, rest: V } = rs(F),
    A = {
      label: o,
      description: s,
      error: i,
      required: l,
      classNames: a,
      className: u,
      __staticSelector: f,
      __stylesApiProps: m || r,
      errorProps: p,
      labelProps: h,
      descriptionProps: S,
      unstyled: d,
      styles: c,
      size: y,
      style: b,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: R,
      variant: D,
      id: w,
      mod: N,
      ...v,
    };
  return {
    ...V,
    classNames: a,
    styles: c,
    unstyled: d,
    wrapperProps: { ...A, ...B },
    inputProps: {
      required: l,
      classNames: a,
      styles: c,
      unstyled: d,
      size: y,
      __staticSelector: f,
      __stylesApiProps: m || r,
      error: i,
      variant: D,
      id: w,
    },
  };
}
const H_ = { __staticSelector: "InputBase", withAria: !0 },
  dn = Un((e, t) => {
    const { inputProps: n, wrapperProps: r, ...o } = V_("InputBase", H_, e);
    return g.jsx(it.Wrapper, {
      ...r,
      children: g.jsx(it, { ...n, ...o, ref: t }),
    });
  });
dn.classes = { ...it.classes, ...it.Wrapper.classes };
dn.displayName = "@mantine/core/InputBase";
function td({ style: e, size: t = 16, ...n }) {
  return g.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { ...e, width: z(t), height: z(t), display: "block" },
    ...n,
    children: g.jsx("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
td.displayName = "@mantine/core/AccordionChevron";
var G0 = { root: "m_b6d8b162" };
function W_(e) {
  if (e === "start") return "start";
  if (e === "end" || e) return "end";
}
const U_ = { inherit: !1 },
  Y_ = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: s }) => ({
    root: {
      "--text-fz": ot(o),
      "--text-lh": Gb(o),
      "--text-gradient": t === "gradient" ? Gu(r, e) : void 0,
      "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--text-color": s ? qo(s, e) : void 0,
    },
  }),
  Ar = Un((e, t) => {
    const n = W("Text", U_, e),
      {
        lineClamp: r,
        truncate: o,
        inline: s,
        inherit: i,
        gradient: l,
        span: a,
        __staticSelector: c,
        vars: u,
        className: d,
        style: f,
        classNames: m,
        styles: p,
        unstyled: h,
        variant: S,
        mod: v,
        size: w,
        ...y
      } = n,
      b = de({
        name: ["Text", c],
        props: n,
        classes: G0,
        className: d,
        style: f,
        classNames: m,
        styles: p,
        unstyled: h,
        vars: u,
        varsResolver: Y_,
      });
    return g.jsx(X, {
      ...b("root", { focusable: !0 }),
      ref: t,
      component: a ? "span" : "p",
      variant: S,
      mod: [
        {
          "data-truncate": W_(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": s,
          "data-inherit": i,
        },
        v,
      ],
      size: w,
      ...y,
    });
  });
Ar.classes = G0;
Ar.displayName = "@mantine/core/Text";
function X0(e) {
  return typeof e == "string"
    ? { value: e, label: e }
    : "value" in e && !("label" in e)
    ? { value: e.value, label: e.value, disabled: e.disabled }
    : typeof e == "number"
    ? { value: e.toString(), label: e.toString() }
    : "group" in e
    ? { group: e.group, items: e.items.map((t) => X0(t)) }
    : e;
}
function Wf(e) {
  return e ? e.map((t) => X0(t)) : [];
}
function Ta(e) {
  return e.reduce(
    (t, n) => ("group" in n ? { ...t, ...Ta(n.items) } : ((t[n.value] = n), t)),
    {}
  );
}
var Dt = {
  dropdown: "m_88b62a41",
  options: "m_b2821a6e",
  option: "m_92253aa5",
  search: "m_985517d8",
  empty: "m_2530cd1d",
  header: "m_858f94bd",
  footer: "m_82b967cb",
  group: "m_254f3e4f",
  groupLabel: "m_2bb2e9e5",
  chevron: "m_2943220b",
  optionsDropdownOption: "m_390b5f4",
  optionsDropdownCheckIcon: "m_8ee53fc2",
};
const q_ = { error: null },
  K_ = (e, { size: t }) => ({
    chevron: { "--combobox-chevron-size": Pe(t, "combobox-chevron-size") },
  }),
  Uf = G((e, t) => {
    const n = W("ComboboxChevron", q_, e),
      {
        size: r,
        error: o,
        style: s,
        className: i,
        classNames: l,
        styles: a,
        unstyled: c,
        vars: u,
        mod: d,
        ...f
      } = n,
      m = de({
        name: "ComboboxChevron",
        classes: Dt,
        props: n,
        style: s,
        className: i,
        classNames: l,
        styles: a,
        unstyled: c,
        vars: u,
        varsResolver: K_,
        rootSelector: "chevron",
      });
    return g.jsx(X, {
      component: "svg",
      ...f,
      ...m("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }, d],
      ref: t,
      children: g.jsx("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    });
  });
Uf.classes = Dt;
Uf.displayName = "@mantine/core/ComboboxChevron";
const [G_, Gt] = br("Combobox component was not found in tree"),
  Q0 = x.forwardRef(
    ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, s) =>
      g.jsx(Gr, {
        ref: s,
        size: e || "sm",
        variant: "transparent",
        tabIndex: -1,
        "aria-hidden": !0,
        ...o,
        onMouseDown: (i) => {
          i.preventDefault(), t == null || t(i);
        },
        onClick: (i) => {
          r(), n == null || n(i);
        },
      })
  );
Q0.displayName = "@mantine/core/ComboboxClearButton";
const X_ = {},
  Yf = G((e, t) => {
    const {
        classNames: n,
        styles: r,
        className: o,
        style: s,
        hidden: i,
        ...l
      } = W("ComboboxDropdown", X_, e),
      a = Gt();
    return g.jsx(un.Dropdown, {
      ...l,
      ref: t,
      role: "presentation",
      "data-hidden": i || void 0,
      ...a.getStyles("dropdown", {
        className: o,
        style: s,
        classNames: n,
        styles: r,
      }),
    });
  });
Yf.classes = Dt;
Yf.displayName = "@mantine/core/ComboboxDropdown";
const Q_ = { refProp: "ref" },
  J0 = G((e, t) => {
    const { children: n, refProp: r } = W("ComboboxDropdownTarget", Q_, e);
    if ((Gt(), !no(n)))
      throw new Error(
        "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    return g.jsx(un.Target, { ref: t, refProp: r, children: n });
  });
J0.displayName = "@mantine/core/ComboboxDropdownTarget";
const J_ = {},
  qf = G((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxEmpty", J_, e),
      a = Gt();
    return g.jsx(X, {
      ref: t,
      ...a.getStyles("empty", {
        className: r,
        classNames: n,
        styles: s,
        style: o,
      }),
      ...l,
    });
  });
qf.classes = Dt;
qf.displayName = "@mantine/core/ComboboxEmpty";
function Kf({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: s,
}) {
  const i = Gt(),
    [l, a] = x.useState(null),
    c = (d) => {
      if ((e == null || e(d), !i.readOnly && t)) {
        if (d.nativeEvent.isComposing) return;
        if (
          (d.nativeEvent.code === "ArrowDown" &&
            (d.preventDefault(),
            i.store.dropdownOpened
              ? a(i.store.selectNextOption())
              : (i.store.openDropdown("keyboard"),
                a(i.store.selectActiveOption()))),
          d.nativeEvent.code === "ArrowUp" &&
            (d.preventDefault(),
            i.store.dropdownOpened
              ? a(i.store.selectPreviousOption())
              : (i.store.openDropdown("keyboard"),
                a(i.store.selectActiveOption()))),
          d.nativeEvent.code === "Enter" ||
            d.nativeEvent.code === "NumpadEnter")
        ) {
          if (d.nativeEvent.keyCode === 229) return;
          const f = i.store.getSelectedOptionIndex();
          i.store.dropdownOpened && f !== -1
            ? (d.preventDefault(), i.store.clickSelectedOption())
            : o === "button" &&
              (d.preventDefault(), i.store.openDropdown("keyboard"));
        }
        d.nativeEvent.code === "Escape" && i.store.closeDropdown("keyboard"),
          d.nativeEvent.code === "Space" &&
            o === "button" &&
            (d.preventDefault(), i.store.toggleDropdown("keyboard"));
      }
    };
  return {
    ...(n
      ? {
          "aria-haspopup": "listbox",
          "aria-expanded":
            (r && !!(i.store.listId && i.store.dropdownOpened)) || void 0,
          "aria-controls": i.store.listId,
          "aria-activedescendant": (i.store.dropdownOpened && l) || void 0,
          autoComplete: s,
          "data-expanded": i.store.dropdownOpened || void 0,
          "data-mantine-stop-propagation": i.store.dropdownOpened || void 0,
        }
      : {}),
    onKeyDown: c,
  };
}
const Z_ = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  Z0 = G((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = W("ComboboxEventsTarget", Z_, e);
    if (!no(n))
      throw new Error(
        "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = Gt(),
      d = Kf({
        targetType: l,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: a,
      });
    return x.cloneElement(n, {
      ...d,
      ...c,
      [r]: Mt(t, u.store.targetRef, n == null ? void 0 : n.ref),
    });
  });
Z0.displayName = "@mantine/core/ComboboxEventsTarget";
const eR = {},
  Gf = G((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxFooter", eR, e),
      a = Gt();
    return g.jsx(X, {
      ref: t,
      ...a.getStyles("footer", {
        className: r,
        classNames: n,
        style: o,
        styles: s,
      }),
      ...l,
    });
  });
Gf.classes = Dt;
Gf.displayName = "@mantine/core/ComboboxFooter";
const tR = {},
  Xf = G((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        children: l,
        label: a,
        ...c
      } = W("ComboboxGroup", tR, e),
      u = Gt();
    return g.jsxs(X, {
      ref: t,
      ...u.getStyles("group", {
        className: r,
        classNames: n,
        style: o,
        styles: s,
      }),
      ...c,
      children: [
        a &&
          g.jsx("div", {
            ...u.getStyles("groupLabel", { classNames: n, styles: s }),
            children: a,
          }),
        l,
      ],
    });
  });
Xf.classes = Dt;
Xf.displayName = "@mantine/core/ComboboxGroup";
const nR = {},
  Qf = G((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxHeader", nR, e),
      a = Gt();
    return g.jsx(X, {
      ref: t,
      ...a.getStyles("header", {
        className: r,
        classNames: n,
        style: o,
        styles: s,
      }),
      ...l,
    });
  });
Qf.classes = Dt;
Qf.displayName = "@mantine/core/ComboboxHeader";
function ew({ value: e, valuesDivider: t = ",", ...n }) {
  return g.jsx("input", {
    type: "hidden",
    value: Array.isArray(e) ? e.join(t) : e || "",
    ...n,
  });
}
ew.displayName = "@mantine/core/ComboboxHiddenInput";
const rR = {},
  Jf = G((e, t) => {
    const n = W("ComboboxOption", rR, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        onClick: a,
        id: c,
        active: u,
        onMouseDown: d,
        onMouseOver: f,
        disabled: m,
        selected: p,
        mod: h,
        ...S
      } = n,
      v = Gt(),
      w = x.useId(),
      y = c || w;
    return g.jsx(X, {
      ...v.getStyles("option", {
        className: o,
        classNames: r,
        styles: i,
        style: s,
      }),
      ...S,
      ref: t,
      id: y,
      mod: [
        "combobox-option",
        {
          "combobox-active": u,
          "combobox-disabled": m,
          "combobox-selected": p,
        },
        h,
      ],
      role: "option",
      onClick: (b) => {
        var C;
        m
          ? b.preventDefault()
          : ((C = v.onOptionSubmit) == null || C.call(v, n.value, n),
            a == null || a(b));
      },
      onMouseDown: (b) => {
        b.preventDefault(), d == null || d(b);
      },
      onMouseOver: (b) => {
        v.resetSelectionOnOptionHover && v.store.resetSelectedOption(),
          f == null || f(b);
      },
    });
  });
Jf.classes = Dt;
Jf.displayName = "@mantine/core/ComboboxOption";
const oR = {},
  Zf = G((e, t) => {
    const n = W("ComboboxOptions", oR, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        id: l,
        onMouseDown: a,
        labelledBy: c,
        ...u
      } = n,
      d = Gt(),
      f = Cr(l);
    return (
      x.useEffect(() => {
        d.store.setListId(f);
      }, [f]),
      g.jsx(X, {
        ref: t,
        ...d.getStyles("options", {
          className: o,
          style: s,
          classNames: r,
          styles: i,
        }),
        ...u,
        id: f,
        role: "listbox",
        "aria-labelledby": c,
        onMouseDown: (m) => {
          m.preventDefault(), a == null || a(m);
        },
      })
    );
  });
Zf.classes = Dt;
Zf.displayName = "@mantine/core/ComboboxOptions";
const sR = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
  ep = G((e, t) => {
    const n = W("ComboboxSearch", sR, e),
      {
        classNames: r,
        styles: o,
        unstyled: s,
        vars: i,
        withAriaAttributes: l,
        onKeyDown: a,
        withKeyboardNavigation: c,
        size: u,
        ...d
      } = n,
      f = Gt(),
      m = f.getStyles("search"),
      p = Kf({
        targetType: "input",
        withAriaAttributes: l,
        withKeyboardNavigation: c,
        withExpandedAttribute: !1,
        onKeyDown: a,
        autoComplete: "off",
      });
    return g.jsx(it, {
      ref: Mt(t, f.store.searchRef),
      classNames: [{ input: m.className }, r],
      styles: [{ input: m.style }, o],
      size: u || f.size,
      ...p,
      ...d,
      __staticSelector: "Combobox",
    });
  });
ep.classes = Dt;
ep.displayName = "@mantine/core/ComboboxSearch";
const iR = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  tw = G((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = W("ComboboxTarget", iR, e);
    if (!no(n))
      throw new Error(
        "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = Gt(),
      d = Kf({
        targetType: l,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: a,
      }),
      f = x.cloneElement(n, { ...d, ...c });
    return g.jsx(un.Target, { ref: Mt(t, u.store.targetRef), children: f });
  });
tw.displayName = "@mantine/core/ComboboxTarget";
function lR(e, t, n) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = t.length - 1; r > -1; r -= 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function aR(e, t, n) {
  for (let r = e + 1; r < t.length; r += 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = 0; r < t.length; r += 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function cR(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled")) return t;
  return -1;
}
function Na({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: s = !0,
  scrollBehavior: i = "instant",
} = {}) {
  const [l, a] = sn({ value: t, defaultValue: e, finalValue: !1, onChange: n }),
    c = x.useRef(null),
    u = x.useRef(-1),
    d = x.useRef(null),
    f = x.useRef(null),
    m = x.useRef(-1),
    p = x.useRef(-1),
    h = x.useRef(-1),
    S = x.useCallback(
      (P = "unknown") => {
        l || (a(!0), o == null || o(P));
      },
      [a, o, l]
    ),
    v = x.useCallback(
      (P = "unknown") => {
        l && (a(!1), r == null || r(P));
      },
      [a, r, l]
    ),
    w = x.useCallback(
      (P = "unknown") => {
        l ? v(P) : S(P);
      },
      [v, S, l]
    ),
    y = x.useCallback(() => {
      const P = document.querySelector(
        `#${c.current} [data-combobox-selected]`
      );
      P == null || P.removeAttribute("data-combobox-selected"),
        P == null || P.removeAttribute("aria-selected");
    }, []),
    b = x.useCallback(
      (P) => {
        const T = document.getElementById(c.current),
          _ = T == null ? void 0 : T.querySelectorAll("[data-combobox-option]");
        if (!_) return null;
        const k = P >= _.length ? 0 : P < 0 ? _.length - 1 : P;
        return (
          (u.current = k),
          _ != null && _[k] && !_[k].hasAttribute("data-combobox-disabled")
            ? (y(),
              _[k].setAttribute("data-combobox-selected", "true"),
              _[k].setAttribute("aria-selected", "true"),
              _[k].scrollIntoView({ block: "nearest", behavior: i }),
              _[k].id)
            : null
        );
      },
      [i, y]
    ),
    C = x.useCallback(() => {
      const P = document.querySelector(`#${c.current} [data-combobox-active]`);
      if (P) {
        const T = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          _ = Array.from(T).findIndex((k) => k === P);
        return b(_);
      }
      return b(0);
    }, [b]),
    E = x.useCallback(
      () =>
        b(
          aR(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [b, s]
    ),
    R = x.useCallback(
      () =>
        b(
          lR(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [b, s]
    ),
    D = x.useCallback(
      () =>
        b(
          cR(document.querySelectorAll(`#${c.current} [data-combobox-option]`))
        ),
      [b]
    ),
    L = x.useCallback((P = "selected", T) => {
      h.current = window.setTimeout(() => {
        var $;
        const _ = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          k = Array.from(_).findIndex((O) =>
            O.hasAttribute(`data-combobox-${P}`)
          );
        (u.current = k),
          T != null &&
            T.scrollIntoView &&
            (($ = _[k]) == null ||
              $.scrollIntoView({ block: "nearest", behavior: i }));
      }, 0);
    }, []),
    N = x.useCallback(() => {
      (u.current = -1), y();
    }, [y]),
    F = x.useCallback(() => {
      const P = document.querySelectorAll(
          `#${c.current} [data-combobox-option]`
        ),
        T = P == null ? void 0 : P[u.current];
      T == null || T.click();
    }, []),
    B = x.useCallback((P) => {
      c.current = P;
    }, []),
    V = x.useCallback(() => {
      m.current = window.setTimeout(() => d.current.focus(), 0);
    }, []),
    A = x.useCallback(() => {
      p.current = window.setTimeout(() => f.current.focus(), 0);
    }, []),
    j = x.useCallback(() => u.current, []);
  return (
    x.useEffect(
      () => () => {
        window.clearTimeout(m.current),
          window.clearTimeout(p.current),
          window.clearTimeout(h.current);
      },
      []
    ),
    {
      dropdownOpened: l,
      openDropdown: S,
      closeDropdown: v,
      toggleDropdown: w,
      selectedOptionIndex: u.current,
      getSelectedOptionIndex: j,
      selectOption: b,
      selectFirstOption: D,
      selectActiveOption: C,
      selectNextOption: E,
      selectPreviousOption: R,
      resetSelectedOption: N,
      updateSelectedOptionIndex: L,
      listId: c.current,
      setListId: B,
      clickSelectedOption: F,
      searchRef: d,
      focusSearchInput: V,
      targetRef: f,
      focusTarget: A,
    }
  );
}
const uR = {
    keepMounted: !0,
    withinPortal: !0,
    resetSelectionOnOptionHover: !1,
    width: "target",
    transitionProps: { transition: "fade", duration: 0 },
  },
  dR = (e, { size: t, dropdownPadding: n }) => ({
    options: {
      "--combobox-option-fz": ot(t),
      "--combobox-option-padding": Pe(t, "combobox-option-padding"),
    },
    dropdown: {
      "--combobox-padding": n === void 0 ? void 0 : z(n),
      "--combobox-option-fz": ot(t),
      "--combobox-option-padding": Pe(t, "combobox-option-padding"),
    },
  });
function ue(e) {
  const t = W("Combobox", uR, e),
    {
      classNames: n,
      styles: r,
      unstyled: o,
      children: s,
      store: i,
      vars: l,
      onOptionSubmit: a,
      onClose: c,
      size: u,
      dropdownPadding: d,
      resetSelectionOnOptionHover: f,
      __staticSelector: m,
      readOnly: p,
      ...h
    } = t,
    S = Na(),
    v = i || S,
    w = de({
      name: m || "Combobox",
      classes: Dt,
      props: t,
      classNames: n,
      styles: r,
      unstyled: o,
      vars: l,
      varsResolver: dR,
    }),
    y = () => {
      c == null || c(), v.closeDropdown();
    };
  return g.jsx(G_, {
    value: {
      getStyles: w,
      store: v,
      onOptionSubmit: a,
      size: u,
      resetSelectionOnOptionHover: f,
      readOnly: p,
    },
    children: g.jsx(un, {
      opened: v.dropdownOpened,
      ...h,
      onClose: y,
      withRoles: !1,
      unstyled: o,
      children: s,
    }),
  });
}
const fR = (e) => e;
ue.extend = fR;
ue.classes = Dt;
ue.displayName = "@mantine/core/Combobox";
ue.Target = tw;
ue.Dropdown = Yf;
ue.Options = Zf;
ue.Option = Jf;
ue.Search = ep;
ue.Empty = qf;
ue.Chevron = Uf;
ue.Footer = Gf;
ue.Header = Qf;
ue.EventsTarget = Z0;
ue.DropdownTarget = J0;
ue.Group = Xf;
ue.ClearButton = Q0;
ue.HiddenInput = ew;
var nw = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc",
};
const pR = nw,
  rw = x.forwardRef(
    (
      {
        __staticSelector: e,
        __stylesApiProps: t,
        className: n,
        classNames: r,
        styles: o,
        unstyled: s,
        children: i,
        label: l,
        description: a,
        id: c,
        disabled: u,
        error: d,
        size: f,
        labelPosition: m = "left",
        bodyElement: p = "div",
        labelElement: h = "label",
        variant: S,
        style: v,
        vars: w,
        mod: y,
        ...b
      },
      C
    ) => {
      const E = de({
        name: e,
        props: t,
        className: n,
        style: v,
        classes: nw,
        classNames: r,
        styles: o,
        unstyled: s,
      });
      return g.jsx(X, {
        ...E("root"),
        ref: C,
        __vars: { "--label-fz": ot(f), "--label-lh": Pe(f, "label-lh") },
        mod: [{ "label-position": m }, y],
        variant: S,
        size: f,
        ...b,
        children: g.jsxs(X, {
          component: p,
          htmlFor: p === "label" ? c : void 0,
          ...E("body"),
          children: [
            i,
            g.jsxs("div", {
              ...E("labelWrapper"),
              "data-disabled": u || void 0,
              children: [
                l &&
                  g.jsx(X, {
                    component: h,
                    htmlFor: h === "label" ? c : void 0,
                    ...E("label"),
                    "data-disabled": u || void 0,
                    children: l,
                  }),
                a &&
                  g.jsx(it.Description, {
                    size: f,
                    __inheritStyles: !1,
                    ...E("description"),
                    children: a,
                  }),
                d &&
                  typeof d != "boolean" &&
                  g.jsx(it.Error, {
                    size: f,
                    __inheritStyles: !1,
                    ...E("error"),
                    children: d,
                  }),
              ],
            }),
          ],
        }),
      });
    }
  );
rw.displayName = "@mantine/core/InlineInput";
const ow = x.createContext(null),
  mR = ow.Provider,
  hR = () => x.useContext(ow);
function gR({ children: e, role: t }) {
  const n = ls();
  return n
    ? g.jsx("div", {
        role: t,
        "aria-labelledby": n.labelId,
        "aria-describedby": n.describedBy,
        children: e,
      })
    : g.jsx(g.Fragment, { children: e });
}
const yR = {},
  tp = G((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onChange: o,
        size: s,
        wrapperProps: i,
        children: l,
        readOnly: a,
        ...c
      } = W("CheckboxGroup", yR, e),
      [u, d] = sn({ value: n, defaultValue: r, finalValue: [], onChange: o }),
      f = (m) => {
        const p = m.currentTarget.value;
        !a && d(u.includes(p) ? u.filter((h) => h !== p) : [...u, p]);
      };
    return g.jsx(mR, {
      value: { value: u, onChange: f, size: s },
      children: g.jsx(it.Wrapper, {
        size: s,
        ref: t,
        ...i,
        ...c,
        labelElement: "div",
        __staticSelector: "CheckboxGroup",
        children: g.jsx(gR, { role: "group", children: l }),
      }),
    });
  });
tp.classes = it.Wrapper.classes;
tp.displayName = "@mantine/core/CheckboxGroup";
function sw({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: z(e), height: z(e), ...t } : t;
  return g.jsx("svg", {
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    "aria-hidden": !0,
    ...n,
    children: g.jsx("path", {
      d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
function vR({ indeterminate: e, ...t }) {
  return e
    ? g.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": !0,
        ...t,
        children: g.jsx("rect", {
          width: "32",
          height: "6",
          fill: "currentColor",
          rx: "3",
        }),
      })
    : g.jsx(sw, { ...t });
}
var iw = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542",
};
const wR = { labelPosition: "right", icon: vR },
  xR = (
    e,
    { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }
  ) => {
    const l = ns({ color: n || e.primaryColor, theme: e }),
      a =
        l.isThemeColor && l.shade === void 0
          ? `var(--mantine-color-${l.color}-outline)`
          : l.color;
    return {
      root: {
        "--checkbox-size": Pe(r, "checkbox-size"),
        "--checkbox-radius": t === void 0 ? void 0 : Rn(t),
        "--checkbox-color": s === "outline" ? a : qo(n, e),
        "--checkbox-icon-color": o
          ? qo(o, e)
          : nE(i, e)
          ? e0({ color: n, theme: e })
          : void 0,
      },
    };
  },
  ai = G((e, t) => {
    const n = W("Checkbox", wR, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        color: c,
        label: u,
        id: d,
        size: f,
        radius: m,
        wrapperProps: p,
        children: h,
        checked: S,
        labelPosition: v,
        description: w,
        error: y,
        disabled: b,
        variant: C,
        indeterminate: E,
        icon: R,
        rootRef: D,
        iconColor: L,
        onChange: N,
        autoContrast: F,
        mod: B,
        ...V
      } = n,
      A = hR(),
      j = f || (A == null ? void 0 : A.size),
      P = R,
      T = de({
        name: "Checkbox",
        props: n,
        classes: iw,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: xR,
      }),
      { styleProps: _, rest: k } = rs(V),
      $ = Cr(d),
      O = A
        ? {
            checked: A.value.includes(k.value),
            onChange: (I) => {
              A.onChange(I), N == null || N(I);
            },
          }
        : {};
    return g.jsx(rw, {
      ...T("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: $,
      size: j,
      labelPosition: v,
      label: u,
      description: w,
      error: y,
      disabled: b,
      classNames: r,
      styles: i,
      unstyled: l,
      "data-checked": O.checked || S || void 0,
      variant: C,
      ref: D,
      mod: B,
      ..._,
      ...p,
      children: g.jsxs(X, {
        ...T("inner"),
        mod: { "data-label-position": v },
        children: [
          g.jsx(X, {
            component: "input",
            id: $,
            ref: t,
            checked: S,
            disabled: b,
            mod: { error: !!y, indeterminate: E },
            ...T("input", { focusable: !0, variant: C }),
            onChange: N,
            ...k,
            ...O,
            type: "checkbox",
          }),
          g.jsx(P, { indeterminate: E, ...T("icon") }),
        ],
      }),
    });
  });
ai.classes = { ...iw, ...pR };
ai.displayName = "@mantine/core/Checkbox";
ai.Group = tp;
function Xr(e) {
  return "group" in e;
}
function lw({ options: e, search: t, limit: n }) {
  const r = t.trim().toLowerCase(),
    o = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    if (o.length === n) return o;
    Xr(i) &&
      o.push({
        group: i.group,
        items: lw({ options: i.items, search: t, limit: n - o.length }),
      }),
      Xr(i) || (i.label.toLowerCase().includes(r) && o.push(i));
  }
  return o;
}
function SR(e) {
  if (e.length === 0) return !0;
  for (const t of e) if (!("group" in t) || t.items.length > 0) return !1;
  return !0;
}
function aw(e, t = new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Xr(n)) aw(n.items, t);
      else {
        if (typeof n.value > "u")
          throw new Error(
            "[@mantine/core] Each option must have value property"
          );
        if (typeof n.value != "string")
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`
          );
        if (t.has(n.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`
          );
        t.add(n.value);
      }
}
function bR(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function cw({
  data: e,
  withCheckIcon: t,
  value: n,
  checkIconPosition: r,
  unstyled: o,
  renderOption: s,
}) {
  if (!Xr(e)) {
    const l = bR(n, e.value),
      a = t && l && g.jsx(sw, { className: Dt.optionsDropdownCheckIcon }),
      c = g.jsxs(g.Fragment, {
        children: [
          r === "left" && a,
          g.jsx("span", { children: e.label }),
          r === "right" && a,
        ],
      });
    return g.jsx(ue.Option, {
      value: e.value,
      disabled: e.disabled,
      className: ft({ [Dt.optionsDropdownOption]: !o }),
      "data-reverse": r === "right" || void 0,
      "data-checked": l || void 0,
      "aria-selected": l,
      active: l,
      children: typeof s == "function" ? s({ option: e, checked: l }) : c,
    });
  }
  const i = e.items.map((l) =>
    g.jsx(
      cw,
      {
        data: l,
        value: n,
        unstyled: o,
        withCheckIcon: t,
        checkIconPosition: r,
        renderOption: s,
      },
      l.value
    )
  );
  return g.jsx(ue.Group, { label: e.group, children: i });
}
function np({
  data: e,
  hidden: t,
  hiddenWhenEmpty: n,
  filter: r,
  search: o,
  limit: s,
  maxDropdownHeight: i,
  withScrollArea: l = !0,
  filterOptions: a = !0,
  withCheckIcon: c = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: f,
  unstyled: m,
  labelId: p,
  renderOption: h,
  scrollAreaProps: S,
  "aria-label": v,
}) {
  aw(e);
  const y =
      typeof o == "string"
        ? (r || lw)({ options: e, search: a ? o : "", limit: s ?? 1 / 0 })
        : e,
    b = SR(y),
    C = y.map((E) =>
      g.jsx(
        cw,
        {
          data: E,
          withCheckIcon: c,
          value: u,
          checkIconPosition: d,
          unstyled: m,
          renderOption: h,
        },
        Xr(E) ? E.group : E.value
      )
    );
  return g.jsx(ue.Dropdown, {
    hidden: t || (n && b),
    children: g.jsxs(ue.Options, {
      labelledBy: p,
      "aria-label": v,
      children: [
        l
          ? g.jsx(vi.Autosize, {
              mah: i ?? 220,
              type: "scroll",
              scrollbarSize: "var(--combobox-padding)",
              offsetScrollbars: "y",
              ...S,
              children: C,
            })
          : C,
        b && f && g.jsx(ue.Empty, { children: f }),
      ],
    }),
  });
}
var Oa = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
};
const Nh = { orientation: "horizontal" },
  CR = (e, { borderWidth: t }) => ({
    group: { "--button-border-width": z(t) },
  }),
  rp = G((e, t) => {
    const n = W("ButtonGroup", Nh, e),
      {
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: l,
        orientation: a,
        vars: c,
        borderWidth: u,
        variant: d,
        mod: f,
        ...m
      } = W("ButtonGroup", Nh, e),
      p = de({
        name: "ButtonGroup",
        props: n,
        classes: Oa,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: CR,
        rootSelector: "group",
      });
    return g.jsx(X, {
      ...p("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": a }, f],
      role: "group",
      ...m,
    });
  });
rp.classes = Oa;
rp.displayName = "@mantine/core/ButtonGroup";
const ER = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${z(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  kR = {},
  _R = (
    e,
    {
      radius: t,
      color: n,
      gradient: r,
      variant: o,
      size: s,
      justify: i,
      autoContrast: l,
    }
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || "filled",
      autoContrast: l,
    });
    return {
      root: {
        "--button-justify": i,
        "--button-height": Pe(s, "button-height"),
        "--button-padding-x": Pe(s, "button-padding-x"),
        "--button-fz":
          s != null && s.includes("compact")
            ? ot(s.replace("compact-", ""))
            : ot(s),
        "--button-radius": t === void 0 ? void 0 : Rn(t),
        "--button-bg": n || o ? a.background : void 0,
        "--button-hover": n || o ? a.hover : void 0,
        "--button-color": a.color,
        "--button-bd": n || o ? a.border : void 0,
        "--button-hover-color": n || o ? a.hoverColor : void 0,
      },
    };
  },
  xn = Un((e, t) => {
    const n = W("Button", kR, e),
      {
        style: r,
        vars: o,
        className: s,
        color: i,
        disabled: l,
        children: a,
        leftSection: c,
        rightSection: u,
        fullWidth: d,
        variant: f,
        radius: m,
        loading: p,
        loaderProps: h,
        gradient: S,
        classNames: v,
        styles: w,
        unstyled: y,
        "data-disabled": b,
        autoContrast: C,
        mod: E,
        ...R
      } = n,
      D = de({
        name: "Button",
        props: n,
        classes: Oa,
        className: s,
        style: r,
        classNames: v,
        styles: w,
        unstyled: y,
        vars: o,
        varsResolver: _R,
      }),
      L = !!c,
      N = !!u;
    return g.jsxs(Mn, {
      ref: t,
      ...D("root", { active: !l && !p && !b }),
      unstyled: y,
      variant: f,
      disabled: l || p,
      mod: [
        {
          disabled: l || b,
          loading: p,
          block: d,
          "with-left-section": L,
          "with-right-section": N,
        },
        E,
      ],
      ...R,
      children: [
        g.jsx(is, {
          mounted: !!p,
          transition: ER,
          duration: 150,
          children: (F) =>
            g.jsx(X, {
              component: "span",
              ...D("loader", { style: F }),
              "aria-hidden": !0,
              children: g.jsx(xi, {
                color: "var(--button-color)",
                size: "calc(var(--button-height) / 1.8)",
                ...h,
              }),
            }),
        }),
        g.jsxs("span", {
          ...D("inner"),
          children: [
            c &&
              g.jsx(X, {
                component: "span",
                ...D("section"),
                mod: { position: "left" },
                children: c,
              }),
            g.jsx(X, {
              component: "span",
              mod: { loading: p },
              ...D("label"),
              children: a,
            }),
            u &&
              g.jsx(X, {
                component: "span",
                ...D("section"),
                mod: { position: "right" },
                children: u,
              }),
          ],
        }),
      ],
    });
  });
xn.classes = Oa;
xn.displayName = "@mantine/core/Button";
xn.Group = rp;
var uw = { root: "m_4451eb3a" };
const RR = {},
  op = Un((e, t) => {
    const n = W("Center", RR, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        inline: c,
        mod: u,
        ...d
      } = n,
      f = de({
        name: "Center",
        props: n,
        classes: uw,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
      });
    return g.jsx(X, { ref: t, mod: [{ inline: c }, u], ...f("root"), ...d });
  });
op.classes = uw;
op.displayName = "@mantine/core/Center";
function DR({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = x.useRef(-1),
    s = x.useRef(-1),
    i = () => {
      window.clearTimeout(o.current), window.clearTimeout(s.current);
    },
    l = () => {
      i(),
        n === 0 || n === void 0 ? e() : (o.current = window.setTimeout(e, n));
    },
    a = () => {
      i(),
        r === 0 || r === void 0 ? t() : (s.current = window.setTimeout(t, r));
    };
  return x.useEffect(() => i, []), { openDropdown: l, closeDropdown: a };
}
const [PR, dw] = br("HoverCard component was not found in the tree"),
  TR = {};
function fw(e) {
  const {
      children: t,
      onMouseEnter: n,
      onMouseLeave: r,
      ...o
    } = W("HoverCardDropdown", TR, e),
    s = dw(),
    i = Bl(n, s.openDropdown),
    l = Bl(r, s.closeDropdown);
  return g.jsx(un.Dropdown, {
    onMouseEnter: i,
    onMouseLeave: l,
    ...o,
    children: t,
  });
}
fw.displayName = "@mantine/core/HoverCardDropdown";
const NR = { refProp: "ref" },
  pw = x.forwardRef((e, t) => {
    const {
      children: n,
      refProp: r,
      eventPropsWrapperName: o,
      ...s
    } = W("HoverCardTarget", NR, e);
    if (!no(n))
      throw new Error(
        "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const i = dw(),
      l = Bl(n.props.onMouseEnter, i.openDropdown),
      a = Bl(n.props.onMouseLeave, i.closeDropdown),
      c = { onMouseEnter: l, onMouseLeave: a };
    return g.jsx(un.Target, {
      refProp: r,
      ref: t,
      ...s,
      children: x.cloneElement(n, o ? { [o]: c } : c),
    });
  });
pw.displayName = "@mantine/core/HoverCardTarget";
const OR = { openDelay: 0, closeDelay: 150, initiallyOpened: !1 };
function zr(e) {
  const {
      children: t,
      onOpen: n,
      onClose: r,
      openDelay: o,
      closeDelay: s,
      initiallyOpened: i,
      ...l
    } = W("HoverCard", OR, e),
    [a, { open: c, close: u }] = oi(i, { onClose: r, onOpen: n }),
    { openDropdown: d, closeDropdown: f } = DR({
      open: c,
      close: u,
      openDelay: o,
      closeDelay: s,
    });
  return g.jsx(PR, {
    value: { openDropdown: d, closeDropdown: f },
    children: g.jsx(un, {
      ...l,
      opened: a,
      __staticSelector: "HoverCard",
      children: t,
    }),
  });
}
zr.displayName = "@mantine/core/HoverCard";
zr.Target = pw;
zr.Dropdown = fw;
zr.extend = (e) => e;
function nd() {
  return (
    (nd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nd.apply(this, arguments)
  );
}
function jR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var $R = x.useLayoutEffect,
  LR = function (t) {
    var n = x.useRef(t);
    return (
      $R(function () {
        n.current = t;
      }),
      n
    );
  },
  Oh = function (t, n) {
    if (typeof t == "function") {
      t(n);
      return;
    }
    t.current = n;
  },
  AR = function (t, n) {
    var r = x.useRef();
    return x.useCallback(
      function (o) {
        (t.current = o),
          r.current && Oh(r.current, null),
          (r.current = n),
          n && Oh(n, o);
      },
      [n]
    );
  },
  jh = {
    "min-height": "0",
    "max-height": "none",
    height: "0",
    visibility: "hidden",
    overflow: "hidden",
    position: "absolute",
    "z-index": "-1000",
    top: "0",
    right: "0",
  },
  FR = function (t) {
    Object.keys(jh).forEach(function (n) {
      t.style.setProperty(n, jh[n], "important");
    });
  },
  $h = FR,
  at = null,
  Lh = function (t, n) {
    var r = t.scrollHeight;
    return n.sizingStyle.boxSizing === "border-box"
      ? r + n.borderSize
      : r - n.paddingSize;
  };
function MR(e, t, n, r) {
  n === void 0 && (n = 1),
    r === void 0 && (r = 1 / 0),
    at ||
      ((at = document.createElement("textarea")),
      at.setAttribute("tabindex", "-1"),
      at.setAttribute("aria-hidden", "true"),
      $h(at)),
    at.parentNode === null && document.body.appendChild(at);
  var o = e.paddingSize,
    s = e.borderSize,
    i = e.sizingStyle,
    l = i.boxSizing;
  Object.keys(i).forEach(function (f) {
    var m = f;
    at.style[m] = i[m];
  }),
    $h(at),
    (at.value = t);
  var a = Lh(at, e);
  (at.value = t), (a = Lh(at, e)), (at.value = "x");
  var c = at.scrollHeight - o,
    u = c * n;
  l === "border-box" && (u = u + o + s), (a = Math.max(u, a));
  var d = c * r;
  return l === "border-box" && (d = d + o + s), (a = Math.min(d, a)), [a, c];
}
var Ah = function () {},
  IR = function (t, n) {
    return t.reduce(function (r, o) {
      return (r[o] = n[o]), r;
    }, {});
  },
  zR = [
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "boxSizing",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "tabSize",
    "textIndent",
    "textRendering",
    "textTransform",
    "width",
    "wordBreak",
  ],
  BR = !!document.documentElement.currentStyle,
  VR = function (t) {
    var n = window.getComputedStyle(t);
    if (n === null) return null;
    var r = IR(zR, n),
      o = r.boxSizing;
    if (o === "") return null;
    BR &&
      o === "border-box" &&
      (r.width =
        parseFloat(r.width) +
        parseFloat(r.borderRightWidth) +
        parseFloat(r.borderLeftWidth) +
        parseFloat(r.paddingRight) +
        parseFloat(r.paddingLeft) +
        "px");
    var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
      i = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
    return { sizingStyle: r, paddingSize: s, borderSize: i };
  },
  HR = VR;
function mw(e, t, n) {
  var r = LR(n);
  x.useLayoutEffect(function () {
    var o = function (i) {
      return r.current(i);
    };
    if (e)
      return (
        e.addEventListener(t, o),
        function () {
          return e.removeEventListener(t, o);
        }
      );
  }, []);
}
var WR = function (t) {
    mw(window, "resize", t);
  },
  UR = function (t) {
    mw(document.fonts, "loadingdone", t);
  },
  YR = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  qR = function (t, n) {
    var r = t.cacheMeasurements,
      o = t.maxRows,
      s = t.minRows,
      i = t.onChange,
      l = i === void 0 ? Ah : i,
      a = t.onHeightChange,
      c = a === void 0 ? Ah : a,
      u = jR(t, YR),
      d = u.value !== void 0,
      f = x.useRef(null),
      m = AR(f, n),
      p = x.useRef(0),
      h = x.useRef(),
      S = function () {
        var y = f.current,
          b = r && h.current ? h.current : HR(y);
        if (b) {
          h.current = b;
          var C = MR(b, y.value || y.placeholder || "x", s, o),
            E = C[0],
            R = C[1];
          p.current !== E &&
            ((p.current = E),
            y.style.setProperty("height", E + "px", "important"),
            c(E, { rowHeight: R }));
        }
      },
      v = function (y) {
        d || S(), l(y);
      };
    return (
      x.useLayoutEffect(S),
      WR(S),
      UR(S),
      x.createElement("textarea", nd({}, u, { onChange: v, ref: m }))
    );
  },
  KR = x.forwardRef(qR);
const GR = {},
  sp = G((e, t) => {
    const {
        autosize: n,
        maxRows: r,
        minRows: o,
        __staticSelector: s,
        resize: i,
        ...l
      } = W("Textarea", GR, e),
      a = n && fC() !== "test",
      c = a ? { maxRows: r, minRows: o } : {};
    return g.jsx(dn, {
      component: a ? KR : "textarea",
      ref: t,
      ...l,
      __staticSelector: s || "Textarea",
      multiline: !0,
      "data-no-overflow": (n && r === void 0) || void 0,
      __vars: { "--input-resize": i },
      ...c,
    });
  });
sp.classes = dn.classes;
sp.displayName = "@mantine/core/Textarea";
var hw = { root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17" };
const Fh = {
    transitionProps: { transition: "fade", duration: 0 },
    overlayProps: { backgroundOpacity: 0.75 },
    zIndex: ro("overlay"),
  },
  XR = (e, { zIndex: t }) => ({
    root: { "--lo-z-index": t == null ? void 0 : t.toString() },
  }),
  ip = G((e, t) => {
    const n = W("LoadingOverlay", Fh, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        transitionProps: c,
        loaderProps: u,
        overlayProps: d,
        visible: f,
        zIndex: m,
        ...p
      } = n,
      h = Dn(),
      S = de({
        name: "LoadingOverlay",
        classes: hw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: XR,
      }),
      v = { ...Fh.overlayProps, ...d };
    return g.jsx(is, {
      transition: "fade",
      ...c,
      mounted: !!f,
      children: (w) =>
        g.jsxs(X, {
          ...S("root", { style: w }),
          ref: t,
          ...p,
          children: [
            g.jsx(xi, { ...S("loader"), unstyled: l, ...u }),
            g.jsx(li, {
              ...v,
              ...S("overlay"),
              darkHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || h.white,
            }),
            g.jsx(li, {
              ...v,
              ...S("overlay"),
              lightHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || h.colors.dark[5],
            }),
          ],
        }),
    });
  });
ip.classes = hw;
ip.displayName = "@mantine/core/LoadingOverlay";
const [QR, as] = br("Modal component was not found in tree");
var Kn = {
  root: "m_9df02822",
  content: "m_54c44539",
  inner: "m_1f958f16",
  header: "m_d0e2b9cd",
};
const JR = {},
  ja = G((e, t) => {
    const n = W("ModalBody", JR, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = as();
    return g.jsx(W0, {
      ref: t,
      ...c.getStyles("body", {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...a,
    });
  });
ja.classes = Kn;
ja.displayName = "@mantine/core/ModalBody";
const ZR = {},
  $a = G((e, t) => {
    const n = W("ModalCloseButton", ZR, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = as();
    return g.jsx(U0, {
      ref: t,
      ...c.getStyles("close", {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...a,
    });
  });
$a.classes = Kn;
$a.displayName = "@mantine/core/ModalCloseButton";
const eD = {},
  La = G((e, t) => {
    const n = W("ModalContent", eD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        children: a,
        ...c
      } = n,
      u = as(),
      d = u.scrollAreaComponent || N_;
    return g.jsx(R_, {
      ...u.getStyles("content", {
        className: o,
        style: s,
        styles: i,
        classNames: r,
      }),
      innerProps: u.getStyles("inner", {
        className: o,
        style: s,
        styles: i,
        classNames: r,
      }),
      "data-full-screen": u.fullScreen || void 0,
      "data-modal-content": !0,
      ref: t,
      ...c,
      children: g.jsx(d, {
        style: {
          maxHeight: u.fullScreen
            ? "100dvh"
            : `calc(100dvh - (${z(u.yOffset)} * 2))`,
        },
        children: a,
      }),
    });
  });
La.classes = Kn;
La.displayName = "@mantine/core/ModalContent";
const tD = {},
  Aa = G((e, t) => {
    const n = W("ModalHeader", tD, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = as();
    return g.jsx(Y0, {
      ref: t,
      ...c.getStyles("header", {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...a,
    });
  });
Aa.classes = Kn;
Aa.displayName = "@mantine/core/ModalHeader";
const nD = {},
  Fa = G((e, t) => {
    const n = W("ModalOverlay", nD, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = as();
    return g.jsx(q0, {
      ref: t,
      ...c.getStyles("overlay", {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...a,
    });
  });
Fa.classes = Kn;
Fa.displayName = "@mantine/core/ModalOverlay";
const rD = {
    __staticSelector: "Modal",
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: ro("modal"),
    transitionProps: { duration: 200, transition: "pop" },
    yOffset: "5dvh",
  },
  oD = (e, { radius: t, size: n, yOffset: r, xOffset: o }) => ({
    root: {
      "--modal-radius": t === void 0 ? void 0 : Rn(t),
      "--modal-size": Pe(n, "modal-size"),
      "--modal-y-offset": z(r),
      "--modal-x-offset": z(o),
    },
  }),
  Ma = G((e, t) => {
    const n = W("ModalRoot", rD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        yOffset: c,
        scrollAreaComponent: u,
        radius: d,
        fullScreen: f,
        centered: m,
        xOffset: p,
        __staticSelector: h,
        ...S
      } = n,
      v = de({
        name: h,
        classes: Kn,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: oD,
      });
    return g.jsx(QR, {
      value: {
        yOffset: c,
        scrollAreaComponent: u,
        getStyles: v,
        fullScreen: f,
      },
      children: g.jsx(k_, {
        ref: t,
        ...v("root"),
        "data-full-screen": f || void 0,
        "data-centered": m || void 0,
        unstyled: l,
        ...S,
      }),
    });
  });
Ma.classes = Kn;
Ma.displayName = "@mantine/core/ModalRoot";
const sD = {},
  Ia = G((e, t) => {
    const n = W("ModalTitle", sD, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = as();
    return g.jsx(K0, {
      ref: t,
      ...c.getStyles("title", {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...a,
    });
  });
Ia.classes = Kn;
Ia.displayName = "@mantine/core/ModalTitle";
const iD = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: ro("modal"),
    transitionProps: { duration: 200, transition: "fade-down" },
    withOverlay: !0,
    withCloseButton: !0,
  },
  fn = G((e, t) => {
    const {
        title: n,
        withOverlay: r,
        overlayProps: o,
        withCloseButton: s,
        closeButtonProps: i,
        children: l,
        radius: a,
        ...c
      } = W("Modal", iD, e),
      u = !!n || s;
    return g.jsxs(Ma, {
      ref: t,
      radius: a,
      ...c,
      children: [
        r && g.jsx(Fa, { ...o }),
        g.jsxs(La, {
          radius: a,
          children: [
            u &&
              g.jsxs(Aa, {
                children: [
                  n && g.jsx(Ia, { children: n }),
                  s && g.jsx($a, { ...i }),
                ],
              }),
            g.jsx(ja, { children: l }),
          ],
        }),
      ],
    });
  });
fn.classes = Kn;
fn.displayName = "@mantine/core/Modal";
fn.Root = Ma;
fn.Overlay = Fa;
fn.Content = La;
fn.Body = ja;
fn.Header = Aa;
fn.Title = Ia;
fn.CloseButton = $a;
const [lD, lp] = vf(),
  [aD, cD] = vf();
var za = {
  root: "m_7cda1cd6",
  "root--default": "m_44da308b",
  "root--contrast": "m_e3a01f8",
  label: "m_1e0e6180",
  remove: "m_ae386778",
  group: "m_1dcfd90b",
};
const uD = {},
  dD = (e, { gap: t }, { size: n }) => ({
    group: { "--pg-gap": t !== void 0 ? Pe(t) : Pe(n, "pg-gap") },
  }),
  ap = G((e, t) => {
    const n = W("PillGroup", uD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        size: c,
        disabled: u,
        ...d
      } = n,
      f = lp(),
      m = (f == null ? void 0 : f.size) || c || void 0,
      p = de({
        name: "PillGroup",
        classes: za,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: dD,
        stylesCtx: { size: m },
        rootSelector: "group",
      });
    return g.jsx(aD, {
      value: { size: m, disabled: u },
      children: g.jsx(X, { ref: t, size: m, ...p("group"), ...d }),
    });
  });
ap.classes = za;
ap.displayName = "@mantine/core/PillGroup";
const fD = { variant: "default" },
  pD = (e, { radius: t }, { size: n }) => ({
    root: {
      "--pill-fz": Pe(n, "pill-fz"),
      "--pill-height": Pe(n, "pill-height"),
      "--pill-radius": t === void 0 ? void 0 : Rn(t),
    },
  }),
  Qr = G((e, t) => {
    const n = W("Pill", fD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        variant: c,
        children: u,
        withRemoveButton: d,
        onRemove: f,
        removeButtonProps: m,
        radius: p,
        size: h,
        disabled: S,
        mod: v,
        ...w
      } = n,
      y = cD(),
      b = lp(),
      C = h || (y == null ? void 0 : y.size) || void 0,
      E =
        (b == null ? void 0 : b.variant) === "filled"
          ? "contrast"
          : c || "default",
      R = de({
        name: "Pill",
        classes: za,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: pD,
        stylesCtx: { size: C },
      });
    return g.jsxs(X, {
      component: "span",
      ref: t,
      variant: E,
      size: C,
      ...R("root", { variant: E }),
      mod: [
        {
          "with-remove": d && !S,
          disabled: S || (y == null ? void 0 : y.disabled),
        },
        v,
      ],
      ...w,
      children: [
        g.jsx("span", { ...R("label"), children: u }),
        d &&
          g.jsx(Gr, {
            variant: "transparent",
            radius: p,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: l,
            ...m,
            ...R("remove", {
              className: m == null ? void 0 : m.className,
              style: m == null ? void 0 : m.style,
            }),
            onMouseDown: (D) => {
              var L;
              D.preventDefault(),
                D.stopPropagation(),
                (L = m == null ? void 0 : m.onMouseDown) == null ||
                  L.call(m, D);
            },
            onClick: (D) => {
              var L;
              D.stopPropagation(),
                f == null || f(),
                (L = m == null ? void 0 : m.onClick) == null || L.call(m, D);
            },
          }),
      ],
    });
  });
Qr.classes = za;
Qr.displayName = "@mantine/core/Pill";
Qr.Group = ap;
var gw = { field: "m_45c4369d" };
const mD = { type: "visible" },
  cp = G((e, t) => {
    const n = W("PillsInputField", mD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        type: c,
        disabled: u,
        id: d,
        pointer: f,
        mod: m,
        ...p
      } = n,
      h = lp(),
      S = ls(),
      v = de({
        name: "PillsInputField",
        classes: gw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "field",
      }),
      w = u || (h == null ? void 0 : h.disabled);
    return g.jsx(X, {
      component: "input",
      ref: Mt(t, h == null ? void 0 : h.fieldRef),
      "data-type": c,
      disabled: w,
      mod: [{ disabled: w, pointer: f }, m],
      ...v("field"),
      ...p,
      id: (S == null ? void 0 : S.inputId) || d,
      "aria-invalid": h == null ? void 0 : h.hasError,
      "aria-describedby": S == null ? void 0 : S.describedBy,
      type: "text",
      onMouseDown: (y) => !f && y.stopPropagation(),
    });
  });
cp.classes = gw;
cp.displayName = "@mantine/core/PillsInputField";
const hD = {},
  Jo = G((e, t) => {
    const n = W("PillsInput", hD, e),
      {
        children: r,
        onMouseDown: o,
        onClick: s,
        size: i,
        disabled: l,
        __staticSelector: a,
        error: c,
        variant: u,
        ...d
      } = n,
      f = x.useRef();
    return g.jsx(lD, {
      value: { fieldRef: f, size: i, disabled: l, hasError: !!c, variant: u },
      children: g.jsx(dn, {
        size: i,
        error: c,
        variant: u,
        component: "div",
        ref: t,
        onMouseDown: (m) => {
          var p;
          m.preventDefault(),
            o == null || o(m),
            (p = f.current) == null || p.focus();
        },
        onClick: (m) => {
          var p;
          m.preventDefault(),
            s == null || s(m),
            (p = f.current) == null || p.focus();
        },
        ...d,
        multiline: !0,
        disabled: l,
        __staticSelector: a || "PillsInput",
        withAria: !1,
        children: r,
      }),
    });
  });
Jo.displayName = "@mantine/core/PillsInput";
Jo.Field = cp;
function gD({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce(
    (o, s) => (
      Xr(s)
        ? o.push({
            group: s.group,
            items: s.items.filter(
              (i) => n.indexOf(i.value.toLowerCase().trim()) === -1
            ),
          })
        : n.indexOf(s.value.toLowerCase().trim()) === -1 && o.push(s),
      o
    ),
    []
  );
}
const yD = {
    maxValues: 1 / 0,
    withCheckIcon: !0,
    checkIconPosition: "left",
    hiddenInputValuesDivider: ",",
  },
  up = G((e, t) => {
    const n = W("MultiSelect", yD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        size: c,
        value: u,
        defaultValue: d,
        onChange: f,
        onKeyDown: m,
        variant: p,
        data: h,
        dropdownOpened: S,
        defaultDropdownOpened: v,
        onDropdownOpen: w,
        onDropdownClose: y,
        selectFirstOptionOnChange: b,
        onOptionSubmit: C,
        comboboxProps: E,
        filter: R,
        limit: D,
        withScrollArea: L,
        maxDropdownHeight: N,
        searchValue: F,
        defaultSearchValue: B,
        onSearchChange: V,
        readOnly: A,
        disabled: j,
        onFocus: P,
        onBlur: T,
        onPaste: _,
        radius: k,
        rightSection: $,
        rightSectionWidth: O,
        rightSectionPointerEvents: I,
        rightSectionProps: q,
        leftSection: Q,
        leftSectionWidth: ee,
        leftSectionPointerEvents: ne,
        leftSectionProps: te,
        inputContainer: me,
        inputWrapperOrder: oe,
        withAsterisk: le,
        labelProps: Z,
        descriptionProps: he,
        errorProps: ae,
        wrapperProps: se,
        description: _e,
        label: Ie,
        error: ve,
        maxValues: Ke,
        searchable: Re,
        nothingFoundMessage: $e,
        withCheckIcon: Y,
        checkIconPosition: re,
        hidePickedOptions: ie,
        withErrorStyles: xe,
        name: Le,
        form: ht,
        id: Se,
        clearable: Ae,
        clearButtonProps: It,
        hiddenInputProps: Ue,
        placeholder: gt,
        hiddenInputValuesDivider: Pn,
        required: Ge,
        mod: lt,
        renderOption: fs,
        onRemove: yt,
        onClear: Tn,
        scrollAreaProps: lo,
        ...ao
      } = n,
      hn = Cr(Se),
      Ce = Wf(h),
      Tt = Ta(Ce),
      vt = Na({
        opened: S,
        defaultOpened: v,
        onDropdownOpen: w,
        onDropdownClose: () => {
          y == null || y(), vt.resetSelectedOption();
        },
      }),
      {
        styleProps: lc,
        rest: { type: Ve, autoComplete: Nn, ...co },
      } = rs(ao),
      [Te, On] = sn({ value: u, defaultValue: d, finalValue: [], onChange: f }),
      [Rr, Dr] = sn({ value: F, defaultValue: B, finalValue: "", onChange: V }),
      ps = de({
        name: "MultiSelect",
        classes: {},
        props: n,
        classNames: r,
        styles: i,
        unstyled: l,
      }),
      { resolvedClassNames: ki, resolvedStyles: _i } = so({
        props: n,
        styles: i,
        classNames: r,
      }),
      ac = (we) => {
        m == null || m(we),
          we.key === " " && !Re && (we.preventDefault(), vt.toggleDropdown()),
          we.key === "Backspace" &&
            Rr.length === 0 &&
            Te.length > 0 &&
            (yt == null || yt(Te[Te.length - 1]),
            On(Te.slice(0, Te.length - 1)));
      },
      ge = Te.map((we, ms) => {
        var Ap, Fp;
        return g.jsx(
          Qr,
          {
            withRemoveButton: !A && !((Ap = Tt[we]) != null && Ap.disabled),
            onRemove: () => {
              On(Te.filter((j1) => we !== j1)), yt == null || yt(we);
            },
            unstyled: l,
            disabled: j,
            ...ps("pill"),
            children: ((Fp = Tt[we]) == null ? void 0 : Fp.label) || we,
          },
          `${we}-${ms}`
        );
      });
    x.useEffect(() => {
      b && vt.selectFirstOption();
    }, [b, Te]);
    const wt =
        Ae &&
        Te.length > 0 &&
        !j &&
        !A &&
        g.jsx(ue.ClearButton, {
          size: c,
          ...It,
          onClear: () => {
            Tn == null || Tn(), On([]), Dr("");
          },
        }),
      Gn = gD({ data: Ce, value: Te });
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs(ue, {
          store: vt,
          classNames: ki,
          styles: _i,
          unstyled: l,
          size: c,
          readOnly: A,
          __staticSelector: "MultiSelect",
          onOptionSubmit: (we) => {
            C == null || C(we),
              Dr(""),
              vt.updateSelectedOptionIndex("selected"),
              Te.includes(Tt[we].value)
                ? (On(Te.filter((ms) => ms !== Tt[we].value)),
                  yt == null || yt(Tt[we].value))
                : Te.length < Ke && On([...Te, Tt[we].value]);
          },
          ...E,
          children: [
            g.jsx(ue.DropdownTarget, {
              children: g.jsx(Jo, {
                ...lc,
                __staticSelector: "MultiSelect",
                classNames: ki,
                styles: _i,
                unstyled: l,
                size: c,
                className: o,
                style: s,
                variant: p,
                disabled: j,
                radius: k,
                rightSection:
                  $ ||
                  wt ||
                  g.jsx(ue.Chevron, { size: c, error: ve, unstyled: l }),
                rightSectionPointerEvents: I || (wt ? "all" : "none"),
                rightSectionWidth: O,
                rightSectionProps: q,
                leftSection: Q,
                leftSectionWidth: ee,
                leftSectionPointerEvents: ne,
                leftSectionProps: te,
                inputContainer: me,
                inputWrapperOrder: oe,
                withAsterisk: le,
                labelProps: Z,
                descriptionProps: he,
                errorProps: ae,
                wrapperProps: se,
                description: _e,
                label: Ie,
                error: ve,
                multiline: !0,
                withErrorStyles: xe,
                __stylesApiProps: {
                  ...n,
                  rightSectionPointerEvents: I || (wt ? "all" : "none"),
                  multiline: !0,
                },
                pointer: !Re,
                onClick: () => (Re ? vt.openDropdown() : vt.toggleDropdown()),
                "data-expanded": vt.dropdownOpened || void 0,
                id: hn,
                required: Ge,
                mod: lt,
                children: g.jsxs(Qr.Group, {
                  disabled: j,
                  unstyled: l,
                  ...ps("pillsList"),
                  children: [
                    ge,
                    g.jsx(ue.EventsTarget, {
                      autoComplete: Nn,
                      children: g.jsx(Jo.Field, {
                        ...co,
                        ref: t,
                        id: hn,
                        placeholder: gt,
                        type: !Re && !gt ? "hidden" : "visible",
                        ...ps("inputField"),
                        unstyled: l,
                        onFocus: (we) => {
                          P == null || P(we), Re && vt.openDropdown();
                        },
                        onBlur: (we) => {
                          T == null || T(we), vt.closeDropdown(), Dr("");
                        },
                        onKeyDown: ac,
                        value: Rr,
                        onChange: (we) => {
                          Dr(we.currentTarget.value),
                            Re && vt.openDropdown(),
                            b && vt.selectFirstOption();
                        },
                        disabled: j,
                        readOnly: A || !Re,
                        pointer: !Re,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            g.jsx(np, {
              data: ie ? Gn : Ce,
              hidden: A || j,
              filter: R,
              search: Rr,
              limit: D,
              hiddenWhenEmpty:
                !Re || !$e || (ie && Gn.length === 0 && Rr.trim().length === 0),
              withScrollArea: L,
              maxDropdownHeight: N,
              filterOptions: Re,
              value: Te,
              checkIconPosition: re,
              withCheckIcon: Y,
              nothingFoundMessage: $e,
              unstyled: l,
              labelId: Ie ? `${hn}-label` : void 0,
              "aria-label": Ie ? void 0 : ao["aria-label"],
              renderOption: fs,
              scrollAreaProps: lo,
            }),
          ],
        }),
        g.jsx(ue.HiddenInput, {
          name: Le,
          valuesDivider: Pn,
          value: Te,
          form: ht,
          disabled: j,
          ...Ue,
        }),
      ],
    });
  });
up.classes = { ...dn.classes, ...ue.classes };
up.displayName = "@mantine/core/MultiSelect";
const vD = {
    searchable: !1,
    withCheckIcon: !0,
    allowDeselect: !0,
    checkIconPosition: "left",
  },
  dp = G((e, t) => {
    const n = W("Select", vD, e),
      {
        classNames: r,
        styles: o,
        unstyled: s,
        vars: i,
        dropdownOpened: l,
        defaultDropdownOpened: a,
        onDropdownClose: c,
        onDropdownOpen: u,
        onFocus: d,
        onBlur: f,
        onClick: m,
        onChange: p,
        data: h,
        value: S,
        defaultValue: v,
        selectFirstOptionOnChange: w,
        onOptionSubmit: y,
        comboboxProps: b,
        readOnly: C,
        disabled: E,
        filter: R,
        limit: D,
        withScrollArea: L,
        maxDropdownHeight: N,
        size: F,
        searchable: B,
        rightSection: V,
        checkIconPosition: A,
        withCheckIcon: j,
        nothingFoundMessage: P,
        name: T,
        form: _,
        searchValue: k,
        defaultSearchValue: $,
        onSearchChange: O,
        allowDeselect: I,
        error: q,
        rightSectionPointerEvents: Q,
        id: ee,
        clearable: ne,
        clearButtonProps: te,
        hiddenInputProps: me,
        renderOption: oe,
        onClear: le,
        autoComplete: Z,
        scrollAreaProps: he,
        ...ae
      } = n,
      se = x.useMemo(() => Wf(h), [h]),
      _e = x.useMemo(() => Ta(se), [se]),
      Ie = Cr(ee),
      [ve, Ke, Re] = sn({
        value: S,
        defaultValue: v,
        finalValue: null,
        onChange: p,
      }),
      $e = typeof ve == "string" ? _e[ve] : void 0,
      [Y, re] = sn({
        value: k,
        defaultValue: $,
        finalValue: $e ? $e.label : "",
        onChange: O,
      }),
      ie = Na({
        opened: l,
        defaultOpened: a,
        onDropdownOpen: () => {
          u == null || u(),
            ie.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
        },
        onDropdownClose: () => {
          c == null || c(), ie.resetSelectedOption();
        },
      }),
      { resolvedClassNames: xe, resolvedStyles: Le } = so({
        props: n,
        styles: o,
        classNames: r,
      });
    x.useEffect(() => {
      w && ie.selectFirstOption();
    }, [w, ve]),
      x.useEffect(() => {
        S === null && re(""), typeof S == "string" && $e && re($e.label);
      }, [S, $e]);
    const ht =
      ne &&
      !!ve &&
      !E &&
      !C &&
      g.jsx(ue.ClearButton, {
        size: F,
        ...te,
        onClear: () => {
          Ke(null, null), re(""), le == null || le();
        },
      });
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs(ue, {
          store: ie,
          __staticSelector: "Select",
          classNames: xe,
          styles: Le,
          unstyled: s,
          readOnly: C,
          onOptionSubmit: (Se) => {
            y == null || y(Se);
            const Ae = I && _e[Se].value === ve ? null : _e[Se],
              It = Ae ? Ae.value : null;
            Ke(It, Ae),
              !Re &&
                re(
                  (typeof It == "string" && (Ae == null ? void 0 : Ae.label)) ||
                    ""
                ),
              ie.closeDropdown();
          },
          size: F,
          ...b,
          children: [
            g.jsx(ue.Target, {
              targetType: B ? "input" : "button",
              autoComplete: Z,
              children: g.jsx(dn, {
                id: Ie,
                ref: t,
                rightSection:
                  V ||
                  ht ||
                  g.jsx(ue.Chevron, { size: F, error: q, unstyled: s }),
                rightSectionPointerEvents: Q || (ht ? "all" : "none"),
                ...ae,
                size: F,
                __staticSelector: "Select",
                disabled: E,
                readOnly: C || !B,
                value: Y,
                onChange: (Se) => {
                  re(Se.currentTarget.value),
                    ie.openDropdown(),
                    w && ie.selectFirstOption();
                },
                onFocus: (Se) => {
                  B && ie.openDropdown(), d == null || d(Se);
                },
                onBlur: (Se) => {
                  var Ae;
                  B && ie.closeDropdown(),
                    re(
                      (ve != null &&
                        ((Ae = _e[ve]) == null ? void 0 : Ae.label)) ||
                        ""
                    ),
                    f == null || f(Se);
                },
                onClick: (Se) => {
                  B ? ie.openDropdown() : ie.toggleDropdown(),
                    m == null || m(Se);
                },
                classNames: xe,
                styles: Le,
                unstyled: s,
                pointer: !B,
                error: q,
              }),
            }),
            g.jsx(np, {
              data: se,
              hidden: C || E,
              filter: R,
              search: Y,
              limit: D,
              hiddenWhenEmpty: !B || !P,
              withScrollArea: L,
              maxDropdownHeight: N,
              filterOptions: B && ($e == null ? void 0 : $e.label) !== Y,
              value: ve,
              checkIconPosition: A,
              withCheckIcon: j,
              nothingFoundMessage: P,
              unstyled: s,
              labelId: ae.label ? `${Ie}-label` : void 0,
              "aria-label": ae.label ? void 0 : ae["aria-label"],
              renderOption: oe,
              scrollAreaProps: he,
            }),
          ],
        }),
        g.jsx(ue.HiddenInput, {
          value: ve,
          name: T,
          form: _,
          disabled: E,
          ...me,
        }),
      ],
    });
  });
dp.classes = { ...dn.classes, ...ue.classes };
dp.displayName = "@mantine/core/Select";
function wD({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce(
    (o, s) => (
      Xr(s)
        ? o.push({
            group: s.group,
            items: s.items.filter(
              (i) => n.indexOf(i.label.toLowerCase().trim()) === -1
            ),
          })
        : n.indexOf(s.label.toLowerCase().trim()) === -1 && o.push(s),
      o
    ),
    []
  );
}
function xD(e, t) {
  return e
    ? t
        .split(new RegExp(`[${e.join("")}]`))
        .map((n) => n.trim())
        .filter((n) => n !== "")
    : [t];
}
function Mh({
  splitChars: e,
  allowDuplicates: t,
  maxTags: n,
  value: r,
  currentTags: o,
}) {
  const s = xD(e, r),
    i = t ? [...o, ...s] : [...new Set([...o, ...s])];
  return n ? i.slice(0, n) : i;
}
const SD = {
    maxTags: 1 / 0,
    allowDuplicates: !1,
    splitChars: [","],
    hiddenInputValuesDivider: ",",
  },
  fp = G((e, t) => {
    const n = W("TagsInput", SD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        size: c,
        value: u,
        defaultValue: d,
        onChange: f,
        onKeyDown: m,
        maxTags: p,
        allowDuplicates: h,
        onDuplicate: S,
        variant: v,
        data: w,
        dropdownOpened: y,
        defaultDropdownOpened: b,
        onDropdownOpen: C,
        onDropdownClose: E,
        selectFirstOptionOnChange: R,
        onOptionSubmit: D,
        comboboxProps: L,
        filter: N,
        limit: F,
        withScrollArea: B,
        maxDropdownHeight: V,
        searchValue: A,
        defaultSearchValue: j,
        onSearchChange: P,
        readOnly: T,
        disabled: _,
        splitChars: k,
        onFocus: $,
        onBlur: O,
        onPaste: I,
        radius: q,
        rightSection: Q,
        rightSectionWidth: ee,
        rightSectionPointerEvents: ne,
        rightSectionProps: te,
        leftSection: me,
        leftSectionWidth: oe,
        leftSectionPointerEvents: le,
        leftSectionProps: Z,
        inputContainer: he,
        inputWrapperOrder: ae,
        withAsterisk: se,
        required: _e,
        labelProps: Ie,
        descriptionProps: ve,
        errorProps: Ke,
        wrapperProps: Re,
        description: $e,
        label: Y,
        error: re,
        withErrorStyles: ie,
        name: xe,
        form: Le,
        id: ht,
        clearable: Se,
        clearButtonProps: Ae,
        hiddenInputProps: It,
        hiddenInputValuesDivider: Ue,
        mod: gt,
        renderOption: Pn,
        onRemove: Ge,
        onClear: lt,
        scrollAreaProps: fs,
        ...yt
      } = n,
      Tn = Cr(ht),
      lo = Wf(w),
      ao = Ta(lo),
      hn = Na({
        opened: y,
        defaultOpened: b,
        onDropdownOpen: C,
        onDropdownClose: () => {
          E == null || E(), hn.resetSelectedOption();
        },
      }),
      {
        styleProps: Ce,
        rest: { type: Tt, autoComplete: vt, ...lc },
      } = rs(yt),
      [Ve, Nn] = sn({ value: u, defaultValue: d, finalValue: [], onChange: f }),
      [co, Te] = sn({ value: A, defaultValue: j, finalValue: "", onChange: P }),
      On = de({
        name: "TagsInput",
        classes: {},
        props: n,
        classNames: r,
        styles: i,
        unstyled: l,
      }),
      { resolvedClassNames: Rr, resolvedStyles: Dr } = so({
        props: n,
        styles: i,
        classNames: r,
      }),
      ps = (ge) => {
        m == null || m(ge);
        const wt = co.trim(),
          { length: Gn } = wt;
        if (
          (k.includes(ge.key) &&
            Gn > 0 &&
            (Nn(
              Mh({
                splitChars: k,
                allowDuplicates: h,
                maxTags: p,
                value: co,
                currentTags: Ve,
              })
            ),
            Te(""),
            ge.preventDefault()),
          ge.key === "Enter" && Gn > 0 && !ge.nativeEvent.isComposing)
        ) {
          ge.preventDefault();
          const we = Ve.some((ms) => ms.toLowerCase() === wt.toLowerCase());
          we && (S == null || S(wt)),
            (!we || (we && h)) &&
              Ve.length < p &&
              (D == null || D(wt), Te(""), wt.length > 0 && Nn([...Ve, wt]));
        }
        ge.key === "Backspace" &&
          Gn === 0 &&
          Ve.length > 0 &&
          !ge.nativeEvent.isComposing &&
          (Ge == null || Ge(Ve[Ve.length - 1]), Nn(Ve.slice(0, Ve.length - 1)));
      },
      ki = (ge) => {
        if ((I == null || I(ge), ge.preventDefault(), ge.clipboardData)) {
          const wt = ge.clipboardData.getData("text/plain");
          Nn(
            Mh({
              splitChars: k,
              allowDuplicates: h,
              maxTags: p,
              value: wt,
              currentTags: Ve,
            })
          ),
            Te("");
        }
      },
      _i = Ve.map((ge, wt) =>
        g.jsx(
          Qr,
          {
            withRemoveButton: !T,
            onRemove: () => {
              Nn(Ve.filter((Gn) => ge !== Gn)), Ge == null || Ge(ge);
            },
            unstyled: l,
            disabled: _,
            ...On("pill"),
            children: ge,
          },
          `${ge}-${wt}`
        )
      ),
      ac =
        Se &&
        Ve.length > 0 &&
        !_ &&
        !T &&
        g.jsx(ue.ClearButton, {
          size: c,
          ...Ae,
          onClear: () => {
            Nn([]), Te(""), lt == null || lt();
          },
        });
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs(ue, {
          store: hn,
          classNames: Rr,
          styles: Dr,
          unstyled: l,
          size: c,
          readOnly: T,
          __staticSelector: "TagsInput",
          onOptionSubmit: (ge) => {
            D == null || D(ge),
              Te(""),
              Ve.length < p && Nn([...Ve, ao[ge].label]);
          },
          ...L,
          children: [
            g.jsx(ue.DropdownTarget, {
              children: g.jsx(Jo, {
                ...Ce,
                __staticSelector: "TagsInput",
                classNames: Rr,
                styles: Dr,
                unstyled: l,
                size: c,
                className: o,
                style: s,
                variant: v,
                disabled: _,
                radius: q,
                rightSection: Q || ac,
                rightSectionWidth: ee,
                rightSectionPointerEvents: ne,
                rightSectionProps: te,
                leftSection: me,
                leftSectionWidth: oe,
                leftSectionPointerEvents: le,
                leftSectionProps: Z,
                inputContainer: he,
                inputWrapperOrder: ae,
                withAsterisk: se,
                required: _e,
                labelProps: Ie,
                descriptionProps: ve,
                errorProps: Ke,
                wrapperProps: Re,
                description: $e,
                label: Y,
                error: re,
                multiline: !0,
                withErrorStyles: ie,
                __stylesApiProps: { ...n, multiline: !0 },
                id: Tn,
                mod: gt,
                children: g.jsxs(Qr.Group, {
                  disabled: _,
                  unstyled: l,
                  ...On("pillsList"),
                  children: [
                    _i,
                    g.jsx(ue.EventsTarget, {
                      autoComplete: vt,
                      children: g.jsx(Jo.Field, {
                        ...lc,
                        ref: t,
                        ...On("inputField"),
                        unstyled: l,
                        onKeyDown: ps,
                        onFocus: (ge) => {
                          $ == null || $(ge), hn.openDropdown();
                        },
                        onBlur: (ge) => {
                          O == null || O(ge), hn.closeDropdown();
                        },
                        onPaste: ki,
                        value: co,
                        onChange: (ge) => Te(ge.currentTarget.value),
                        required: _e && Ve.length === 0,
                        disabled: _,
                        readOnly: T,
                        id: Tn,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            g.jsx(np, {
              data: wD({ data: lo, value: Ve }),
              hidden: T || _,
              filter: N,
              search: co,
              limit: F,
              hiddenWhenEmpty: !0,
              withScrollArea: B,
              maxDropdownHeight: V,
              unstyled: l,
              labelId: Y ? `${Tn}-label` : void 0,
              "aria-label": Y ? void 0 : yt["aria-label"],
              renderOption: Pn,
              scrollAreaProps: fs,
            }),
          ],
        }),
        g.jsx(ue.HiddenInput, {
          name: xe,
          form: Le,
          value: Ve,
          valuesDivider: Ue,
          disabled: _,
          ...It,
        }),
      ],
    });
  });
fp.classes = { ...dn.classes, ...ue.classes };
fp.displayName = "@mantine/core/TagsInput";
const bD = {},
  Ba = G((e, t) => {
    const n = W("TextInput", bD, e);
    return g.jsx(dn, {
      component: "input",
      ref: t,
      ...n,
      __staticSelector: "TextInput",
    });
  });
Ba.classes = dn.classes;
Ba.displayName = "@mantine/core/TextInput";
function CD(e) {
  return function ({ isLoading: n, ...r }) {
    return n ? g.jsx("div", { children: "Loading..." }) : g.jsx(e, { ...r });
  };
}
function ED(e) {
  return function ({ error: n, ...r }) {
    return n
      ? g.jsxs("div", { children: ["Error: ", n.message] })
      : g.jsx(e, { ...r });
  };
}
var yw = { exports: {} },
  kD = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  _D = kD,
  RD = _D;
function vw() {}
function ww() {}
ww.resetWarningCache = vw;
var DD = function () {
  function e(r, o, s, i, l, a) {
    if (a !== RD) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ww,
    resetWarningCache: vw,
  };
  return (n.PropTypes = n), n;
};
yw.exports = DD();
var PD = yw.exports;
const U = Zr(PD);
function TD(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
    );
}
const ND = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Xe(e, t) {
  ND(() => {
    if (e)
      return (
        window.addEventListener(e, t), () => window.removeEventListener(e, t)
      );
  }, [e]);
}
function OD(e, t) {
  e && TD(e),
    Xe(`mantine-form:${e}:set-field-value`, (n) =>
      t.setFieldValue(n.detail.path, n.detail.value)
    ),
    Xe(`mantine-form:${e}:set-values`, (n) => t.setValues(n.detail)),
    Xe(`mantine-form:${e}:set-initial-values`, (n) =>
      t.setInitialValues(n.detail)
    ),
    Xe(`mantine-form:${e}:set-errors`, (n) => t.setErrors(n.detail)),
    Xe(`mantine-form:${e}:set-field-error`, (n) =>
      t.setFieldError(n.detail.path, n.detail.error)
    ),
    Xe(`mantine-form:${e}:clear-field-error`, (n) =>
      t.clearFieldError(n.detail)
    ),
    Xe(`mantine-form:${e}:clear-errors`, t.clearErrors),
    Xe(`mantine-form:${e}:reset`, t.reset),
    Xe(`mantine-form:${e}:validate`, t.validate),
    Xe(`mantine-form:${e}:validate-field`, (n) => t.validateField(n.detail)),
    Xe(`mantine-form:${e}:reorder-list-item`, (n) =>
      t.reorderListItem(n.detail.path, n.detail.payload)
    ),
    Xe(`mantine-form:${e}:remove-list-item`, (n) =>
      t.removeListItem(n.detail.path, n.detail.index)
    ),
    Xe(`mantine-form:${e}:insert-list-item`, (n) =>
      t.insertListItem(n.detail.path, n.detail.item, n.detail.index)
    ),
    Xe(`mantine-form:${e}:set-dirty`, (n) => t.setDirty(n.detail)),
    Xe(`mantine-form:${e}:set-touched`, (n) => t.setTouched(n.detail)),
    Xe(`mantine-form:${e}:reset-dirty`, (n) => t.resetDirty(n.detail)),
    Xe(`mantine-form:${e}:reset-touched`, t.resetTouched);
}
function xw(e) {
  return (t) => {
    if (!t) e(t);
    else if (typeof t == "function") e(t);
    else if (typeof t == "object" && "nativeEvent" in t) {
      const { currentTarget: n } = t;
      n instanceof HTMLInputElement
        ? n.type === "checkbox"
          ? e(n.checked)
          : e(n.value)
        : (n instanceof HTMLTextAreaElement ||
            n instanceof HTMLSelectElement) &&
          e(n.value);
    } else e(t);
  };
}
function rd(e) {
  return e === null || typeof e != "object"
    ? {}
    : Object.keys(e).reduce((t, n) => {
        const r = e[n];
        return r != null && r !== !1 && (t[n] = r), t;
      }, {});
}
function jD(e) {
  const [t, n] = x.useState(rd(e)),
    r = x.useCallback((l) => {
      n((a) => rd(typeof l == "function" ? l(a) : l));
    }, []),
    o = x.useCallback(() => n({}), []),
    s = x.useCallback(
      (l) => {
        t[l] !== void 0 &&
          r((a) => {
            const c = { ...a };
            return delete c[l], c;
          });
      },
      [t]
    ),
    i = x.useCallback(
      (l, a) => {
        a == null || a === !1
          ? s(l)
          : t[l] !== a && r((c) => ({ ...c, [l]: a }));
      },
      [t]
    );
  return {
    errorsState: t,
    setErrors: r,
    clearErrors: o,
    setFieldError: i,
    clearFieldError: s,
  };
}
function Sw(e, t) {
  if (t === null || typeof t != "object") return {};
  const n = { ...t };
  return (
    Object.keys(t).forEach((r) => {
      r.includes(`${String(e)}.`) && delete n[r];
    }),
    n
  );
}
function Ih(e, t) {
  const n = e.substring(t.length + 1).split(".")[0];
  return parseInt(n, 10);
}
function zh(e, t, n, r) {
  if (t === void 0) return n;
  const o = `${String(e)}`;
  let s = n;
  r === -1 && (s = Sw(`${o}.${t}`, s));
  const i = { ...s },
    l = new Set();
  return (
    Object.entries(s)
      .filter(([a]) => {
        if (!a.startsWith(`${o}.`)) return !1;
        const c = Ih(a, o);
        return Number.isNaN(c) ? !1 : c >= t;
      })
      .forEach(([a, c]) => {
        const u = Ih(a, o),
          d = a.replace(`${o}.${u}`, `${o}.${u + r}`);
        (i[d] = c), l.add(d), l.has(a) || delete i[a];
      }),
    i
  );
}
function $D(e, { from: t, to: n }, r) {
  const o = `${e}.${t}`,
    s = `${e}.${n}`,
    i = { ...r };
  return (
    Object.keys(r).every((l) => {
      let a, c;
      if (
        (l.startsWith(o) && ((a = l), (c = l.replace(o, s))),
        l.startsWith(s) && ((a = l.replace(s, o)), (c = l)),
        a && c)
      ) {
        const u = i[a],
          d = i[c];
        return (
          d === void 0 ? delete i[a] : (i[a] = d),
          u === void 0 ? delete i[c] : (i[c] = u),
          !1
        );
      }
      return !0;
    }),
    i
  );
}
function Bh(e, t, n) {
  typeof n.value == "object" && (n.value = Po(n.value)),
    !n.enumerable ||
    n.get ||
    n.set ||
    !n.configurable ||
    !n.writable ||
    t === "__proto__"
      ? Object.defineProperty(e, t, n)
      : (e[t] = n.value);
}
function Po(e) {
  if (typeof e != "object") return e;
  var t = 0,
    n,
    r,
    o,
    s = Object.prototype.toString.call(e);
  if (
    (s === "[object Object]"
      ? (o = Object.create(e.__proto__ || null))
      : s === "[object Array]"
      ? (o = Array(e.length))
      : s === "[object Set]"
      ? ((o = new Set()),
        e.forEach(function (i) {
          o.add(Po(i));
        }))
      : s === "[object Map]"
      ? ((o = new Map()),
        e.forEach(function (i, l) {
          o.set(Po(l), Po(i));
        }))
      : s === "[object Date]"
      ? (o = new Date(+e))
      : s === "[object RegExp]"
      ? (o = new RegExp(e.source, e.flags))
      : s === "[object DataView]"
      ? (o = new e.constructor(Po(e.buffer)))
      : s === "[object ArrayBuffer]"
      ? (o = e.slice(0))
      : s.slice(-6) === "Array]" && (o = new e.constructor(e)),
    o)
  ) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      Bh(o, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      (Object.hasOwnProperty.call(o, (n = r[t])) && o[n] === e[n]) ||
        Bh(o, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return o || e;
}
function bw(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Ct(e, t) {
  const n = bw(e);
  if (n.length === 0 || typeof t != "object" || t === null) return;
  let r = t[n[0]];
  for (let o = 1; o < n.length && r !== void 0; o += 1) r = r[n[o]];
  return r;
}
function Va(e, t, n) {
  const r = bw(e);
  if (r.length === 0) return n;
  const o = Po(n);
  if (r.length === 1) return (o[r[0]] = t), o;
  let s = o[r[0]];
  for (let i = 1; i < r.length - 1; i += 1) {
    if (s === void 0) return o;
    s = s[r[i]];
  }
  return (s[r[r.length - 1]] = t), o;
}
function LD(e, { from: t, to: n }, r) {
  const o = Ct(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o],
    i = o[t];
  return s.splice(t, 1), s.splice(n, 0, i), Va(e, s, r);
}
function AD(e, t, n, r) {
  const o = Ct(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o];
  return s.splice(typeof n == "number" ? n : s.length, 0, t), Va(e, s, r);
}
function FD(e, t, n) {
  const r = Ct(e, n);
  return Array.isArray(r)
    ? Va(
        e,
        r.filter((o, s) => s !== t),
        n
      )
    : n;
}
function MD({ $values: e, $errors: t, $status: n }) {
  const r = x.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => $D(i, l, a)),
        e.setValues({ values: LD(i, l, e.refValues.current), updateState: !0 });
    }, []),
    o = x.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => zh(i, l, a, -1)),
        e.setValues({ values: FD(i, l, e.refValues.current), updateState: !0 });
    }, []),
    s = x.useCallback((i, l, a) => {
      n.clearFieldDirty(i),
        t.setErrors((c) => zh(i, a, c, 1)),
        e.setValues({
          values: AD(i, l, a, e.refValues.current),
          updateState: !0,
        });
    }, []);
  return { reorderListItem: r, removeListItem: o, insertListItem: s };
}
var ID = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, o, s;
    if (Array.isArray(t)) {
      if (((r = t.length), r != n.length)) return !1;
      for (o = r; o-- !== 0; ) if (!e(t[o], n[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (((s = Object.keys(t)), (r = s.length), r !== Object.keys(n).length))
      return !1;
    for (o = r; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, s[o])) return !1;
    for (o = r; o-- !== 0; ) {
      var i = s[o];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Kc = Zr(ID);
function Xi(e, t) {
  const n = Object.keys(e);
  if (typeof t == "string") {
    const r = n.filter((o) => o.startsWith(`${t}.`));
    return e[t] || r.some((o) => e[o]) || !1;
  }
  return n.some((r) => e[r]);
}
function zD({ initialDirty: e, initialTouched: t, mode: n, $values: r }) {
  const [o, s] = x.useState(t),
    [i, l] = x.useState(e),
    a = x.useRef(t),
    c = x.useRef(e),
    u = x.useCallback((C) => {
      const E = typeof C == "function" ? C(a.current) : C;
      (a.current = E), n === "controlled" && s(E);
    }, []),
    d = x.useCallback((C) => {
      const E = typeof C == "function" ? C(c.current) : C;
      (c.current = E), n === "controlled" && l(E);
    }, []),
    f = x.useCallback(() => u({}), []),
    m = (C) => {
      const E = C ? { ...C, ...r.refValues.current } : r.refValues.current;
      r.setValuesSnapshot(E), d({});
    },
    p = x.useCallback((C, E) => {
      u((R) => (Xi(R, C) === E ? R : { ...R, [C]: E }));
    }, []),
    h = x.useCallback((C, E) => {
      d((R) => (Xi(R, C) === E ? R : { ...R, [C]: E }));
    }, []),
    S = x.useCallback((C) => Xi(a.current, C), []),
    v = x.useCallback(
      (C) =>
        d((E) => {
          if (typeof C != "string") return E;
          const R = Sw(C, E);
          return delete R[C], Kc(R, E) ? E : R;
        }),
      []
    ),
    w = x.useCallback((C) => {
      if (C) {
        const R = Ct(C, c.current);
        if (typeof R == "boolean") return R;
        const D = Ct(C, r.refValues.current),
          L = Ct(C, r.valuesSnapshot.current);
        return !Kc(D, L);
      }
      return Object.keys(c.current).length > 0
        ? Xi(c.current)
        : !Kc(r.refValues.current, r.valuesSnapshot.current);
    }, []),
    y = x.useCallback(() => c.current, []),
    b = x.useCallback(() => a.current, []);
  return {
    touchedState: o,
    dirtyState: i,
    touchedRef: a,
    dirtyRef: c,
    setTouched: u,
    setDirty: d,
    resetDirty: m,
    resetTouched: f,
    isTouched: S,
    setFieldTouched: p,
    setFieldDirty: h,
    setTouchedState: s,
    setDirtyState: l,
    clearFieldDirty: v,
    isDirty: w,
    getDirty: y,
    getTouched: b,
  };
}
function BD({ initialValues: e, onValuesChange: t, mode: n }) {
  const r = x.useRef(!1),
    [o, s] = x.useState(e || {}),
    i = x.useRef(o),
    l = x.useRef(o),
    a = x.useCallback(
      ({
        values: p,
        subscribers: h,
        updateState: S = !0,
        mergeWithPreviousValues: v = !0,
      }) => {
        const w = i.current,
          y = p instanceof Function ? p(i.current) : p,
          b = v ? { ...w, ...y } : y;
        (i.current = b),
          S && s(b),
          t == null || t(b, w),
          h == null ||
            h
              .filter(Boolean)
              .forEach((C) => C({ updatedValues: b, previousValues: w }));
      },
      [t]
    ),
    c = x.useCallback((p) => {
      var v;
      const h = Ct(p.path, i.current),
        S = p.value instanceof Function ? p.value(h) : p.value;
      if (h !== S) {
        const w = i.current,
          y = Va(p.path, S, i.current);
        a({ values: y, updateState: p.updateState }),
          (v = p.subscribers) == null ||
            v
              .filter(Boolean)
              .forEach((b) =>
                b({ path: p.path, updatedValues: y, previousValues: w })
              );
      }
    }, []),
    u = x.useCallback((p) => {
      l.current = p;
    }, []),
    d = x.useCallback((p, h) => {
      r.current ||
        ((r.current = !0),
        a({ values: p, updateState: n === "controlled" }),
        u(p),
        h());
    }, []),
    f = x.useCallback(() => {
      a({ values: l.current, updateState: !0, mergeWithPreviousValues: !1 });
    }, []),
    m = x.useCallback(() => i.current, []);
  return {
    initialized: r,
    stateValues: o,
    refValues: i,
    valuesSnapshot: l,
    setValues: a,
    setFieldValue: c,
    resetValues: f,
    setValuesSnapshot: u,
    initialize: d,
    getValues: m,
  };
}
function VD({ $status: e }) {
  const t = x.useRef({}),
    n = x.useCallback((o, s) => {
      x.useEffect(
        () => (
          (t.current[o] = t.current[o] || []),
          t.current[o].push(s),
          () => {
            t.current[o] = t.current[o].filter((i) => i !== s);
          }
        ),
        [s]
      );
    }, []),
    r = x.useCallback(
      (o) =>
        t.current[o]
          ? t.current[o].map(
              (s) => (i) =>
                s({
                  previousValue: Ct(o, i.previousValues),
                  value: Ct(o, i.updatedValues),
                  touched: e.isTouched(o),
                  dirty: e.isDirty(o),
                })
            )
          : [],
      []
    );
  return { subscribers: t, watch: n, getFieldSubscribers: r };
}
function Vh(e) {
  const t = rd(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function od(e, t, n = "", r = {}) {
  return typeof e != "object" || e === null
    ? r
    : Object.keys(e).reduce((o, s) => {
        const i = e[s],
          l = `${n === "" ? "" : `${n}.`}${s}`,
          a = Ct(l, t);
        let c = !1;
        return (
          typeof i == "function" && (o[l] = i(a, t, l)),
          typeof i == "object" &&
            Array.isArray(a) &&
            ((c = !0), a.forEach((u, d) => od(i, t, `${l}.${d}`, o))),
          typeof i == "object" &&
            typeof a == "object" &&
            a !== null &&
            (c || od(i, t, l, o)),
          o
        );
      }, r);
}
function sd(e, t) {
  return Vh(typeof e == "function" ? e(t) : od(e, t));
}
function Qi(e, t, n) {
  if (typeof e != "string") return { hasError: !1, error: null };
  const r = sd(t, n),
    o = Object.keys(r.errors).find((s) =>
      e.split(".").every((i, l) => i === s.split(".")[l])
    );
  return { hasError: !!o, error: o ? r.errors[o] : null };
}
const HD = "__MANTINE_FORM_INDEX__";
function id(e, t) {
  return t
    ? typeof t == "boolean"
      ? t
      : Array.isArray(t)
      ? t.includes(e.replace(/[.][0-9]/g, `.${HD}`))
      : !1
    : !1;
}
function WD({
  name: e,
  mode: t = "controlled",
  initialValues: n,
  initialErrors: r = {},
  initialDirty: o = {},
  initialTouched: s = {},
  clearInputErrorOnChange: i = !0,
  validateInputOnChange: l = !1,
  validateInputOnBlur: a = !1,
  onValuesChange: c,
  transformValues: u = (m) => m,
  enhanceGetInputProps: d,
  validate: f,
} = {}) {
  const m = jD(r),
    p = BD({ initialValues: n, onValuesChange: c, mode: t }),
    h = zD({ initialDirty: o, initialTouched: s, $values: p, mode: t }),
    S = MD({ $values: p, $errors: m, $status: h }),
    v = VD({ $status: h }),
    [w, y] = x.useState(0),
    [b, C] = x.useState({}),
    E = x.useCallback(() => {
      p.resetValues(),
        m.clearErrors(),
        h.resetDirty(),
        h.resetTouched(),
        t === "uncontrolled" && y((k) => k + 1);
    }, []),
    R = x.useCallback((k) => {
      p.initialize(k, () => t === "uncontrolled" && y(($) => $ + 1));
    }, []),
    D = x.useCallback(
      (k, $, O) => {
        const I = id(k, l);
        h.clearFieldDirty(k),
          h.setFieldTouched(k, !0),
          !I && i && m.clearFieldError(k),
          p.setFieldValue({
            path: k,
            value: $,
            updateState: t === "controlled",
            subscribers: [
              ...v.getFieldSubscribers(k),
              I
                ? (q) => {
                    const Q = Qi(k, f, q.updatedValues);
                    Q.hasError
                      ? m.setFieldError(k, Q.error)
                      : m.clearFieldError(k);
                  }
                : null,
              (O == null ? void 0 : O.forceUpdate) !== !1 && t !== "controlled"
                ? () => C((q) => ({ ...q, [k]: (q[k] || 0) + 1 }))
                : null,
            ],
          });
      },
      [c, f]
    ),
    L = x.useCallback(
      (k) => {
        const $ = p.refValues.current;
        p.setValues({ values: k, updateState: t === "controlled" }),
          i && m.clearErrors(),
          t === "uncontrolled" && y((O) => O + 1),
          Object.keys(v.subscribers.current).forEach((O) => {
            const I = Ct(O, p.refValues.current),
              q = Ct(O, $);
            I !== q &&
              v
                .getFieldSubscribers(O)
                .forEach((Q) =>
                  Q({ previousValues: $, updatedValues: p.refValues.current })
                );
          });
      },
      [c, i]
    ),
    N = x.useCallback(() => {
      const k = sd(f, p.refValues.current);
      return m.setErrors(k.errors), k;
    }, [f]),
    F = x.useCallback(
      (k) => {
        const $ = Qi(k, f, p.refValues.current);
        return (
          $.hasError ? m.setFieldError(k, $.error) : m.clearFieldError(k), $
        );
      },
      [f]
    ),
    B = (
      k,
      { type: $ = "input", withError: O = !0, withFocus: I = !0, ...q } = {}
    ) => {
      const ee = { onChange: xw((ne) => D(k, ne, { forceUpdate: !1 })) };
      return (
        O && (ee.error = m.errorsState[k]),
        $ === "checkbox"
          ? (ee[t === "controlled" ? "checked" : "defaultChecked"] = Ct(
              k,
              p.refValues.current
            ))
          : (ee[t === "controlled" ? "value" : "defaultValue"] = Ct(
              k,
              p.refValues.current
            )),
        I &&
          ((ee.onFocus = () => h.setFieldTouched(k, !0)),
          (ee.onBlur = () => {
            if (id(k, a)) {
              const ne = Qi(k, f, p.refValues.current);
              ne.hasError ? m.setFieldError(k, ne.error) : m.clearFieldError(k);
            }
          })),
        Object.assign(
          ee,
          d == null
            ? void 0
            : d({
                inputProps: ee,
                field: k,
                options: { type: $, withError: O, withFocus: I, ...q },
                form: _,
              })
        )
      );
    },
    V = (k, $) => (O) => {
      O == null || O.preventDefault();
      const I = N();
      I.hasErrors
        ? $ == null || $(I.errors, p.refValues.current, O)
        : k == null || k(u(p.refValues.current), O);
    },
    A = (k) => u(k || p.refValues.current),
    j = x.useCallback((k) => {
      k.preventDefault(), E();
    }, []),
    P = x.useCallback(
      (k) =>
        k
          ? !Qi(k, f, p.refValues.current).hasError
          : !sd(f, p.refValues.current).hasErrors,
      [f]
    ),
    T = (k) => `${w}-${k}-${b[k] || 0}`,
    _ = {
      watch: v.watch,
      initialized: p.initialized.current,
      values: p.stateValues,
      getValues: p.getValues,
      setInitialValues: p.setValuesSnapshot,
      initialize: R,
      setValues: L,
      setFieldValue: D,
      errors: m.errorsState,
      setErrors: m.setErrors,
      setFieldError: m.setFieldError,
      clearFieldError: m.clearFieldError,
      clearErrors: m.clearErrors,
      resetDirty: h.resetDirty,
      setTouched: h.setTouched,
      setDirty: h.setDirty,
      isTouched: h.isTouched,
      resetTouched: h.resetTouched,
      isDirty: h.isDirty,
      getTouched: h.getTouched,
      getDirty: h.getDirty,
      reorderListItem: S.reorderListItem,
      insertListItem: S.insertListItem,
      removeListItem: S.removeListItem,
      reset: E,
      validate: N,
      validateField: F,
      getInputProps: B,
      onSubmit: V,
      onReset: j,
      isValid: P,
      getTransformedValues: A,
      key: T,
    };
  return OD(e, _), _;
}
function UD({
  mode: e = "controlled",
  clearErrorOnChange: t = !0,
  initialValue: n,
  initialError: r = null,
  initialTouched: o = !1,
  onValueChange: s,
  validateOnChange: i = !1,
  validateOnBlur: l = !1,
  validate: a,
  resolveValidationError: c,
  type: u = "input",
}) {
  const [d, f] = x.useState(n),
    m = x.useRef(d),
    [p, h] = x.useState(0),
    [S, v] = x.useState(r || null),
    w = x.useRef(o || !1),
    [, y] = x.useState(w.current),
    [b, C] = x.useState(!1),
    E = x.useMemo(() => c || ((P) => P), [c]),
    R = x.useCallback((P, { updateState: T = e === "controlled" } = {}) => {
      (w.current = P), T && y(P);
    }, []),
    D = x.useCallback(
      async (
        P,
        {
          updateKey: T = e === "uncontrolled",
          updateState: _ = e === "controlled",
        } = {}
      ) => {
        m.current !== P &&
          ((m.current = P),
          s == null || s(P),
          t && S !== null && v(null),
          _ && f(P),
          T && h((k) => k + 1),
          i && V());
      },
      [S, t]
    ),
    L = x.useCallback(() => {
      D(n), v(null), R(!1);
    }, [n]),
    N = x.useCallback(() => m.current, []),
    F = x.useCallback(() => w.current, []),
    B = x.useCallback(() => m.current !== n, [n]),
    V = x.useCallback(async () => {
      const P = a == null ? void 0 : a(m.current);
      if (P instanceof Promise) {
        C(!0);
        try {
          const T = await P;
          C(!1), v(T);
        } catch (T) {
          C(!1);
          const _ = E(T);
          return v(_), _;
        }
      } else return v(P), P;
    }, []),
    A = ({ withError: P = !0, withFocus: T = !0 } = {}) => {
      const k = { onChange: xw(($) => D($, { updateKey: !1 })) };
      return (
        P && (k.error = S),
        u === "checkbox"
          ? (k[e === "controlled" ? "checked" : "defaultChecked"] = m.current)
          : (k[e === "controlled" ? "value" : "defaultValue"] = m.current),
        T &&
          ((k.onFocus = () => {
            R(!0);
          }),
          (k.onBlur = () => {
            id("", !!l) && V();
          })),
        k
      );
    },
    j = x.useCallback(() => R(!1), []);
  return {
    key: p,
    getValue: N,
    setValue: D,
    reset: L,
    getInputProps: A,
    isValidating: b,
    validate: V,
    error: S,
    setError: v,
    isTouched: F,
    isDirty: B,
    resetTouched: j,
  };
}
const pp = (e) => {
  const {
    title: t,
    description: n,
    form: r,
    options: o,
    default_value: s,
    field_id: i,
  } = e;
  var l = s ? o.map((f) => f.option).filter((f) => f == s) : null;
  const [a, c] = x.useState(l ? l[0] : o[0].option);
  r.setFieldValue(i, a);
  const [u, { toggle: d }] = oi(!1);
  return g.jsxs("div", {
    className: "collapsible-selector-container",
    children: [
      t && g.jsx("label", { children: t }),
      n && g.jsx("label", { children: n }),
      g.jsx("div", {
        className: "container",
        children: g.jsxs("div", {
          className: "multi-select-row row btn-style",
          onClick: d,
          children: [
            g.jsxs("p", {
              className: "col my-2 row-title",
              children: [g.jsx("i", { class: "fa fa-balance-scale mr-2" }), a],
            }),
            g.jsx("p", {
              className: "clickable-text col-auto text-right my-2",
              children: "change",
            }),
          ],
        }),
      }),
      g.jsx(u0, {
        className: "container",
        in: u,
        transitionDuration: 100,
        transitionTimingFunction: "linear",
        children: o.map((f) => {
          const [m, { open: p, close: h }] = oi(!1),
            S = function () {
              c(f.option);
            };
          return g.jsxs("div", {
            className: "multi-select-row row clickable-row",
            children: [
              g.jsx("p", {
                className: "col my-2 row-title",
                onClick: S,
                children: f.option,
              }),
              (f.description || f.help_link) &&
                g.jsxs(g.Fragment, {
                  children: [
                    g.jsxs(fn, {
                      opened: m,
                      onClose: h,
                      title: f.option,
                      centered: !0,
                      size: "auto",
                      children: [
                        g.jsx("div", {
                          className: "modal-dialog-body",
                          children:
                            f.description &&
                            g.jsx(Ar, {
                              className: "use-line-breaks",
                              children: f.description,
                            }),
                        }),
                        g.jsxs("div", {
                          className: "modal-dialog-footer container p-0",
                          children: [
                            f.help_link &&
                              g.jsx("div", {
                                className: "row",
                                children: g.jsx("div", {
                                  className: "col-12",
                                  children: g.jsx("a", {
                                    href: f.help_link,
                                    className:
                                      "btn btn-light-blue-inverted btn-block",
                                    children: "More detail",
                                  }),
                                }),
                              }),
                            g.jsx("div", {
                              className: "row",
                              children: g.jsx("div", {
                                className: "col-12",
                                children: g.jsx("p", {
                                  className:
                                    "btn btn-light-blue-inverted btn-block",
                                  onClick: () => {
                                    S(), h();
                                  },
                                  children: "Choose this",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    g.jsx("div", {
                      className: "col-auto clickable-text",
                      onClick: p,
                      children: g.jsx("p", {
                        className: "text-right my-2",
                        children: "details",
                      }),
                    }),
                  ],
                }),
            ],
          });
        }),
      }),
    ],
  });
};
pp.defaultProps = {};
pp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
};
const mp = (e) => {
  const {
      title: t,
      description: n,
      mandatory: r,
      form: o,
      field_id: s,
      placeholder: i,
    } = e,
    l = /^(ftp|http|https):\/\/[^ "]+$/,
    a = UD({
      initialValue: "",
      validateOnBlur: !0,
      validate: (c) =>
        r && c === ""
          ? "This field is required"
          : c !== "" && !l.test(c)
          ? (o.setFieldError(s, "Please enter a valid URL"),
            "Please enter a valid URL")
          : (o.setFieldValue(s, c), null),
    });
  return g.jsx(
    Ba,
    {
      label: t,
      description: n,
      placeholder: i,
      required: r,
      ...a.getInputProps(),
    },
    o.key(s)
  );
};
mp.defaultProps = { placeholder: "" };
mp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const YD = new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"],
]);
function Si(e, t) {
  const n = qD(e);
  if (typeof n.path != "string") {
    const { webkitRelativePath: r } = e;
    Object.defineProperty(n, "path", {
      value:
        typeof t == "string"
          ? t
          : typeof r == "string" && r.length > 0
          ? r
          : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0,
    });
  }
  return n;
}
function qD(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(),
      o = YD.get(r);
    o &&
      Object.defineProperty(e, "type", {
        value: o,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      });
  }
  return e;
}
var cs = (e, t, n) =>
  new Promise((r, o) => {
    var s = (a) => {
        try {
          l(n.next(a));
        } catch (c) {
          o(c);
        }
      },
      i = (a) => {
        try {
          l(n.throw(a));
        } catch (c) {
          o(c);
        }
      },
      l = (a) => (a.done ? r(a.value) : Promise.resolve(a.value).then(s, i));
    l((n = n.apply(e, t)).next());
  });
const KD = [".DS_Store", "Thumbs.db"];
function GD(e) {
  return cs(this, null, function* () {
    return ql(e) && XD(e.dataTransfer)
      ? eP(e.dataTransfer, e.type)
      : QD(e)
      ? JD(e)
      : Array.isArray(e) &&
        e.every((t) => "getFile" in t && typeof t.getFile == "function")
      ? ZD(e)
      : [];
  });
}
function XD(e) {
  return ql(e);
}
function QD(e) {
  return ql(e) && ql(e.target);
}
function ql(e) {
  return typeof e == "object" && e !== null;
}
function JD(e) {
  return ld(e.target.files).map((t) => Si(t));
}
function ZD(e) {
  return cs(this, null, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Si(n));
  });
}
function eP(e, t) {
  return cs(this, null, function* () {
    if (e.items) {
      const n = ld(e.items).filter((o) => o.kind === "file");
      if (t !== "drop") return n;
      const r = yield Promise.all(n.map(tP));
      return Hh(Cw(r));
    }
    return Hh(ld(e.files).map((n) => Si(n)));
  });
}
function Hh(e) {
  return e.filter((t) => KD.indexOf(t.name) === -1);
}
function ld(e) {
  if (e === null) return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function tP(e) {
  if (typeof e.webkitGetAsEntry != "function") return Wh(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ew(t) : Wh(e);
}
function Cw(e) {
  return e.reduce((t, n) => [...t, ...(Array.isArray(n) ? Cw(n) : [n])], []);
}
function Wh(e) {
  const t = e.getAsFile();
  if (!t) return Promise.reject(`${e} is not a File`);
  const n = Si(t);
  return Promise.resolve(n);
}
function nP(e) {
  return cs(this, null, function* () {
    return e.isDirectory ? Ew(e) : rP(e);
  });
}
function Ew(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function s() {
      t.readEntries(
        (i) =>
          cs(this, null, function* () {
            if (i.length) {
              const l = Promise.all(i.map(nP));
              o.push(l), s();
            } else
              try {
                const l = yield Promise.all(o);
                n(l);
              } catch (l) {
                r(l);
              }
          }),
        (i) => {
          r(i);
        }
      );
    }
    s();
  });
}
function rP(e) {
  return cs(this, null, function* () {
    return new Promise((t, n) => {
      e.file(
        (r) => {
          const o = Si(r, e.fullPath);
          t(o);
        },
        (r) => {
          n(r);
        }
      );
    });
  });
}
function oP(e, t) {
  if (e && t) {
    const n = Array.isArray(t) ? t : t.split(","),
      r = e.name || "",
      o = (e.type || "").toLowerCase(),
      s = o.replace(/\/.*$/, "");
    return n.some((i) => {
      const l = i.trim().toLowerCase();
      return l.charAt(0) === "."
        ? r.toLowerCase().endsWith(l)
        : l.endsWith("/*")
        ? s === l.replace(/\/.*$/, "")
        : o === l;
    });
  }
  return !0;
}
var sP = Object.defineProperty,
  iP = Object.defineProperties,
  lP = Object.getOwnPropertyDescriptors,
  Uh = Object.getOwnPropertySymbols,
  aP = Object.prototype.hasOwnProperty,
  cP = Object.prototype.propertyIsEnumerable,
  Yh = (e, t, n) =>
    t in e
      ? sP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  uP = (e, t) => {
    for (var n in t || (t = {})) aP.call(t, n) && Yh(e, n, t[n]);
    if (Uh) for (var n of Uh(t)) cP.call(t, n) && Yh(e, n, t[n]);
    return e;
  },
  dP = (e, t) => iP(e, lP(t));
const fP = "file-invalid-type",
  pP = "file-too-large",
  mP = "file-too-small",
  hP = "too-many-files",
  gP = (e) => {
    e = Array.isArray(e) && e.length === 1 ? e[0] : e;
    const t = Array.isArray(e) ? `one of ${e.join(", ")}` : e;
    return { code: fP, message: `File type must be ${t}` };
  },
  qh = (e) => ({
    code: pP,
    message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  Kh = (e) => ({
    code: mP,
    message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  yP = { code: hP, message: "Too many files" };
function kw(e, t) {
  const n = e.type === "application/x-moz-file" || oP(e, t);
  return [n, n ? null : gP(t)];
}
function _w(e, t, n) {
  if (Or(e.size))
    if (Or(t) && Or(n)) {
      if (e.size > n) return [!1, qh(n)];
      if (e.size < t) return [!1, Kh(t)];
    } else {
      if (Or(t) && e.size < t) return [!1, Kh(t)];
      if (Or(n) && e.size > n) return [!1, qh(n)];
    }
  return [!0, null];
}
function Or(e) {
  return e != null;
}
function vP({
  files: e,
  accept: t,
  minSize: n,
  maxSize: r,
  multiple: o,
  maxFiles: s,
  validator: i,
}) {
  return (!o && e.length > 1) || (o && s >= 1 && e.length > s)
    ? !1
    : e.every((l) => {
        const [a] = kw(l, t),
          [c] = _w(l, n, r),
          u = i ? i(l) : null;
        return a && c && !u;
      });
}
function Kl(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
    ? e.cancelBubble
    : !1;
}
function Ji(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(
        e.dataTransfer.types,
        (t) => t === "Files" || t === "application/x-moz-file"
      )
    : !!e.target && !!e.target.files;
}
function Gh(e) {
  e.preventDefault();
}
function wP(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function xP(e) {
  return e.indexOf("Edge/") !== -1;
}
function SP(e = window.navigator.userAgent) {
  return wP(e) || xP(e);
}
function yn(...e) {
  return (t, ...n) => e.some((r) => (!Kl(t) && r && r(t, ...n), Kl(t)));
}
function bP() {
  return "showOpenFilePicker" in window;
}
function CP(e) {
  return Or(e)
    ? [
        {
          description: "Files",
          accept: Object.entries(e)
            .filter(([n, r]) => {
              let o = !0;
              return (
                Rw(n) ||
                  (console.warn(
                    `Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`
                  ),
                  (o = !1)),
                (!Array.isArray(r) || !r.every(Dw)) &&
                  (console.warn(
                    `Skipped "${n}" because an invalid file extension was provided.`
                  ),
                  (o = !1)),
                o
              );
            })
            .reduce((n, [r, o]) => dP(uP({}, n), { [r]: o }), {}),
        },
      ]
    : e;
}
function EP(e) {
  if (Or(e))
    return Object.entries(e)
      .reduce((t, [n, r]) => [...t, n, ...r], [])
      .filter((t) => Rw(t) || Dw(t))
      .join(",");
}
function kP(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function _P(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
function Rw(e) {
  return (
    e === "audio/*" ||
    e === "video/*" ||
    e === "image/*" ||
    e === "text/*" ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function Dw(e) {
  return /^.*\.[\w]+$/.test(e);
}
var RP = Object.defineProperty,
  DP = Object.defineProperties,
  PP = Object.getOwnPropertyDescriptors,
  Gl = Object.getOwnPropertySymbols,
  Pw = Object.prototype.hasOwnProperty,
  Tw = Object.prototype.propertyIsEnumerable,
  Xh = (e, t, n) =>
    t in e
      ? RP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ut = (e, t) => {
    for (var n in t || (t = {})) Pw.call(t, n) && Xh(e, n, t[n]);
    if (Gl) for (var n of Gl(t)) Tw.call(t, n) && Xh(e, n, t[n]);
    return e;
  },
  er = (e, t) => DP(e, PP(t)),
  Xl = (e, t) => {
    var n = {};
    for (var r in e) Pw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Gl)
      for (var r of Gl(e)) t.indexOf(r) < 0 && Tw.call(e, r) && (n[r] = e[r]);
    return n;
  };
const hp = x.forwardRef((e, t) => {
  var n = e,
    { children: r } = n,
    o = Xl(n, ["children"]);
  const s = Ow(o),
    { open: i } = s,
    l = Xl(s, ["open"]);
  return (
    x.useImperativeHandle(t, () => ({ open: i }), [i]),
    ra.createElement(x.Fragment, null, r(er(ut({}, l), { open: i })))
  );
});
hp.displayName = "Dropzone";
const Nw = {
  disabled: !1,
  getFilesFromEvent: GD,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1,
};
hp.defaultProps = Nw;
hp.propTypes = {
  children: U.func,
  accept: U.objectOf(U.arrayOf(U.string)),
  multiple: U.bool,
  preventDropOnDocument: U.bool,
  noClick: U.bool,
  noKeyboard: U.bool,
  noDrag: U.bool,
  noDragEventsBubbling: U.bool,
  minSize: U.number,
  maxSize: U.number,
  maxFiles: U.number,
  disabled: U.bool,
  getFilesFromEvent: U.func,
  onFileDialogCancel: U.func,
  onFileDialogOpen: U.func,
  useFsAccessApi: U.bool,
  autoFocus: U.bool,
  onDragEnter: U.func,
  onDragLeave: U.func,
  onDragOver: U.func,
  onDrop: U.func,
  onDropAccepted: U.func,
  onDropRejected: U.func,
  onError: U.func,
  validator: U.func,
};
const ad = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function Ow(e = {}) {
  const {
      accept: t,
      disabled: n,
      getFilesFromEvent: r,
      maxSize: o,
      minSize: s,
      multiple: i,
      maxFiles: l,
      onDragEnter: a,
      onDragLeave: c,
      onDragOver: u,
      onDrop: d,
      onDropAccepted: f,
      onDropRejected: m,
      onFileDialogCancel: p,
      onFileDialogOpen: h,
      useFsAccessApi: S,
      autoFocus: v,
      preventDropOnDocument: w,
      noClick: y,
      noKeyboard: b,
      noDrag: C,
      noDragEventsBubbling: E,
      onError: R,
      validator: D,
    } = ut(ut({}, Nw), e),
    L = x.useMemo(() => EP(t), [t]),
    N = x.useMemo(() => CP(t), [t]),
    F = x.useMemo(() => (typeof h == "function" ? h : Qh), [h]),
    B = x.useMemo(() => (typeof p == "function" ? p : Qh), [p]),
    V = x.useRef(null),
    A = x.useRef(null),
    [j, P] = x.useReducer(TP, ad),
    { isFocused: T, isFileDialogActive: _ } = j,
    k = x.useRef(typeof window < "u" && window.isSecureContext && S && bP()),
    $ = () => {
      !k.current &&
        _ &&
        setTimeout(() => {
          if (A.current) {
            const { files: Y } = A.current;
            Y.length || (P({ type: "closeDialog" }), B());
          }
        }, 300);
    };
  x.useEffect(
    () => (
      window.addEventListener("focus", $, !1),
      () => {
        window.removeEventListener("focus", $, !1);
      }
    ),
    [A, _, B, k]
  );
  const O = x.useRef([]),
    I = (Y) => {
      (V.current && V.current.contains(Y.target)) ||
        (Y.preventDefault(), (O.current = []));
    };
  x.useEffect(
    () => (
      w &&
        (document.addEventListener("dragover", Gh, !1),
        document.addEventListener("drop", I, !1)),
      () => {
        w &&
          (document.removeEventListener("dragover", Gh),
          document.removeEventListener("drop", I));
      }
    ),
    [V, w]
  ),
    x.useEffect(
      () => (!n && v && V.current && V.current.focus(), () => {}),
      [V, v, n]
    );
  const q = x.useCallback(
      (Y) => {
        R ? R(Y) : console.error(Y);
      },
      [R]
    ),
    Q = x.useCallback(
      (Y) => {
        Y.preventDefault(),
          Y.persist(),
          ve(Y),
          (O.current = [...O.current, Y.target]),
          Ji(Y) &&
            Promise.resolve(r(Y))
              .then((re) => {
                if (Kl(Y) && !E) return;
                const ie = re.length,
                  xe =
                    ie > 0 &&
                    vP({
                      files: re,
                      accept: L,
                      minSize: s,
                      maxSize: o,
                      multiple: i,
                      maxFiles: l,
                      validator: D,
                    }),
                  Le = ie > 0 && !xe;
                P({
                  isDragAccept: xe,
                  isDragReject: Le,
                  isDragActive: !0,
                  type: "setDraggedFiles",
                }),
                  a && a(Y);
              })
              .catch((re) => q(re));
      },
      [r, a, q, E, L, s, o, i, l, D]
    ),
    ee = x.useCallback(
      (Y) => {
        Y.preventDefault(), Y.persist(), ve(Y);
        const re = Ji(Y);
        if (re && Y.dataTransfer)
          try {
            Y.dataTransfer.dropEffect = "copy";
          } catch {}
        return re && u && u(Y), !1;
      },
      [u, E]
    ),
    ne = x.useCallback(
      (Y) => {
        Y.preventDefault(), Y.persist(), ve(Y);
        const re = O.current.filter(
            (xe) => V.current && V.current.contains(xe)
          ),
          ie = re.indexOf(Y.target);
        ie !== -1 && re.splice(ie, 1),
          (O.current = re),
          !(re.length > 0) &&
            (P({
              type: "setDraggedFiles",
              isDragActive: !1,
              isDragAccept: !1,
              isDragReject: !1,
            }),
            Ji(Y) && c && c(Y));
      },
      [V, c, E]
    ),
    te = x.useCallback(
      (Y, re) => {
        const ie = [],
          xe = [];
        Y.forEach((Le) => {
          const [ht, Se] = kw(Le, L),
            [Ae, It] = _w(Le, s, o),
            Ue = D ? D(Le) : null;
          if (ht && Ae && !Ue) ie.push(Le);
          else {
            let gt = [Se, It];
            Ue && (gt = gt.concat(Ue)),
              xe.push({ file: Le, errors: gt.filter((Pn) => Pn) });
          }
        }),
          ((!i && ie.length > 1) || (i && l >= 1 && ie.length > l)) &&
            (ie.forEach((Le) => {
              xe.push({ file: Le, errors: [yP] });
            }),
            ie.splice(0)),
          P({ acceptedFiles: ie, fileRejections: xe, type: "setFiles" }),
          d && d(ie, xe, re),
          xe.length > 0 && m && m(xe, re),
          ie.length > 0 && f && f(ie, re);
      },
      [P, i, L, s, o, l, d, f, m, D]
    ),
    me = x.useCallback(
      (Y) => {
        Y.preventDefault(),
          Y.persist(),
          ve(Y),
          (O.current = []),
          Ji(Y) &&
            Promise.resolve(r(Y))
              .then((re) => {
                (Kl(Y) && !E) || te(re, Y);
              })
              .catch((re) => q(re)),
          P({ type: "reset" });
      },
      [r, te, q, E]
    ),
    oe = x.useCallback(() => {
      if (k.current) {
        P({ type: "openDialog" }), F();
        const Y = { multiple: i, types: N };
        window
          .showOpenFilePicker(Y)
          .then((re) => r(re))
          .then((re) => {
            te(re, null), P({ type: "closeDialog" });
          })
          .catch((re) => {
            kP(re)
              ? (B(re), P({ type: "closeDialog" }))
              : _P(re)
              ? ((k.current = !1),
                A.current
                  ? ((A.current.value = null), A.current.click())
                  : q(
                      new Error(
                        "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
                      )
                    ))
              : q(re);
          });
        return;
      }
      A.current &&
        (P({ type: "openDialog" }),
        F(),
        (A.current.value = null),
        A.current.click());
    }, [P, F, B, S, te, q, N, i]),
    le = x.useCallback(
      (Y) => {
        !V.current ||
          !V.current.isEqualNode(Y.target) ||
          ((Y.key === " " ||
            Y.key === "Enter" ||
            Y.keyCode === 32 ||
            Y.keyCode === 13) &&
            (Y.preventDefault(), oe()));
      },
      [V, oe]
    ),
    Z = x.useCallback(() => {
      P({ type: "focus" });
    }, []),
    he = x.useCallback(() => {
      P({ type: "blur" });
    }, []),
    ae = x.useCallback(() => {
      y || (SP() ? setTimeout(oe, 0) : oe());
    }, [y, oe]),
    se = (Y) => (n ? null : Y),
    _e = (Y) => (b ? null : se(Y)),
    Ie = (Y) => (C ? null : se(Y)),
    ve = (Y) => {
      E && Y.stopPropagation();
    },
    Ke = x.useMemo(
      () =>
        (Y = {}) => {
          var re = Y,
            {
              refKey: ie = "ref",
              role: xe,
              onKeyDown: Le,
              onFocus: ht,
              onBlur: Se,
              onClick: Ae,
              onDragEnter: It,
              onDragOver: Ue,
              onDragLeave: gt,
              onDrop: Pn,
            } = re,
            Ge = Xl(re, [
              "refKey",
              "role",
              "onKeyDown",
              "onFocus",
              "onBlur",
              "onClick",
              "onDragEnter",
              "onDragOver",
              "onDragLeave",
              "onDrop",
            ]);
          return ut(
            ut(
              {
                onKeyDown: _e(yn(Le, le)),
                onFocus: _e(yn(ht, Z)),
                onBlur: _e(yn(Se, he)),
                onClick: se(yn(Ae, ae)),
                onDragEnter: Ie(yn(It, Q)),
                onDragOver: Ie(yn(Ue, ee)),
                onDragLeave: Ie(yn(gt, ne)),
                onDrop: Ie(yn(Pn, me)),
                role: typeof xe == "string" && xe !== "" ? xe : "presentation",
                [ie]: V,
              },
              !n && !b ? { tabIndex: 0 } : {}
            ),
            Ge
          );
        },
      [V, le, Z, he, ae, Q, ee, ne, me, b, C, n]
    ),
    Re = x.useCallback((Y) => {
      Y.stopPropagation();
    }, []),
    $e = x.useMemo(
      () =>
        (Y = {}) => {
          var re = Y,
            { refKey: ie = "ref", onChange: xe, onClick: Le } = re,
            ht = Xl(re, ["refKey", "onChange", "onClick"]);
          const Se = {
            accept: L,
            multiple: i,
            type: "file",
            style: { display: "none" },
            onChange: se(yn(xe, me)),
            onClick: se(yn(Le, Re)),
            tabIndex: -1,
            [ie]: A,
          };
          return ut(ut({}, Se), ht);
        },
      [A, t, i, me, n]
    );
  return er(ut({}, j), {
    isFocused: T && !n,
    getRootProps: Ke,
    getInputProps: $e,
    rootRef: V,
    inputRef: A,
    open: se(oe),
  });
}
function TP(e, t) {
  switch (t.type) {
    case "focus":
      return er(ut({}, e), { isFocused: !0 });
    case "blur":
      return er(ut({}, e), { isFocused: !1 });
    case "openDialog":
      return er(ut({}, ad), { isFileDialogActive: !0 });
    case "closeDialog":
      return er(ut({}, e), { isFileDialogActive: !1 });
    case "setDraggedFiles":
      return er(ut({}, e), {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject,
      });
    case "setFiles":
      return er(ut({}, e), {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
      });
    case "reset":
      return ut({}, ad);
    default:
      return e;
  }
}
function Qh() {}
const [NP, OP] = br("Dropzone component was not found in tree");
function gp(e) {
  const t = (n) => {
    const { children: r, ...o } = W(`Dropzone${Zm(e)}`, {}, n),
      s = OP(),
      i = no(r) ? r : g.jsx("span", { children: r });
    return s[e] ? x.cloneElement(i, o) : null;
  };
  return (t.displayName = `@mantine/dropzone/${Zm(e)}`), t;
}
const jP = gp("accept"),
  $P = gp("reject"),
  LP = gp("idle");
var ci = {
  root: "m_d46a4834",
  inner: "m_b85f7144",
  fullScreen: "m_96f6e9ad",
  dropzone: "m_7946116d",
};
const AP = {
    loading: !1,
    multiple: !0,
    maxSize: 1 / 0,
    autoFocus: !1,
    activateOnClick: !0,
    activateOnDrag: !0,
    dragEventsBubbling: !0,
    activateOnKeyboard: !0,
    useFsAccessApi: !0,
    variant: "light",
    rejectColor: "red",
  },
  FP = (e, { radius: t, variant: n, acceptColor: r, rejectColor: o }) => {
    const s = e.variantColorResolver({
        color: r || e.primaryColor,
        theme: e,
        variant: n,
      }),
      i = e.variantColorResolver({ color: o || "red", theme: e, variant: n });
    return {
      root: {
        "--dropzone-radius": Rn(t),
        "--dropzone-accept-color": s.color,
        "--dropzone-accept-bg": s.background,
        "--dropzone-reject-color": i.color,
        "--dropzone-reject-bg": i.background,
      },
    };
  },
  Er = G((e, t) => {
    const n = W("Dropzone", AP, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        radius: c,
        disabled: u,
        loading: d,
        multiple: f,
        maxSize: m,
        accept: p,
        children: h,
        onDropAny: S,
        onDrop: v,
        onReject: w,
        openRef: y,
        name: b,
        maxFiles: C,
        autoFocus: E,
        activateOnClick: R,
        activateOnDrag: D,
        dragEventsBubbling: L,
        activateOnKeyboard: N,
        onDragEnter: F,
        onDragLeave: B,
        onDragOver: V,
        onFileDialogCancel: A,
        onFileDialogOpen: j,
        preventDropOnDocument: P,
        useFsAccessApi: T,
        getFilesFromEvent: _,
        validator: k,
        rejectColor: $,
        acceptColor: O,
        enablePointerEvents: I,
        loaderProps: q,
        inputProps: Q,
        mod: ee,
        ...ne
      } = n,
      te = de({
        name: "Dropzone",
        classes: ci,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: FP,
      }),
      {
        getRootProps: me,
        getInputProps: oe,
        isDragAccept: le,
        isDragReject: Z,
        open: he,
      } = Ow({
        onDrop: S,
        onDropAccepted: v,
        onDropRejected: w,
        disabled: u || d,
        accept: Array.isArray(p)
          ? p.reduce((se, _e) => ({ ...se, [_e]: [] }), {})
          : p,
        multiple: f,
        maxSize: m,
        maxFiles: C,
        autoFocus: E,
        noClick: !R,
        noDrag: !D,
        noDragEventsBubbling: !L,
        noKeyboard: !N,
        onDragEnter: F,
        onDragLeave: B,
        onDragOver: V,
        onFileDialogCancel: A,
        onFileDialogOpen: j,
        preventDropOnDocument: P,
        useFsAccessApi: T,
        validator: k,
        ...(_ ? { getFilesFromEvent: _ } : null),
      });
    xf(y, he);
    const ae = !le && !Z;
    return g.jsx(NP, {
      value: { accept: le, reject: Z, idle: ae },
      children: g.jsxs(X, {
        ...me(),
        ...te("root", { focusable: !0 }),
        ...ne,
        mod: [
          {
            accept: le,
            reject: Z,
            idle: ae,
            loading: d,
            "activate-on-click": R,
          },
          ee,
        ],
        children: [
          g.jsx(ip, {
            visible: d,
            overlayProps: { radius: c },
            unstyled: l,
            loaderProps: q,
          }),
          g.jsx("input", { ...oe(Q), name: b }),
          g.jsx("div", {
            ...te("inner"),
            ref: t,
            "data-enable-pointer-events": I || void 0,
            children: h,
          }),
        ],
      }),
    });
  });
Er.classes = ci;
Er.displayName = "@mantine/dropzone/Dropzone";
Er.Accept = jP;
Er.Idle = LP;
Er.Reject = $P;
const MP = {
    loading: !1,
    maxSize: 1 / 0,
    activateOnClick: !1,
    activateOnDrag: !0,
    dragEventsBubbling: !0,
    activateOnKeyboard: !0,
    active: !0,
    zIndex: ro("max"),
    withinPortal: !0,
  },
  yp = G((e, t) => {
    const n = W("DropzoneFullScreen", MP, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        active: c,
        onDrop: u,
        onReject: d,
        zIndex: f,
        withinPortal: m,
        portalProps: p,
        ...h
      } = n,
      S = de({
        name: "DropzoneFullScreen",
        classes: ci,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "fullScreen",
      }),
      { resolvedClassNames: v, resolvedStyles: w } = so({
        classNames: r,
        styles: i,
        props: n,
      }),
      [y, b] = x.useState(0),
      [C, { open: E, close: R }] = oi(!1),
      D = (N) => {
        var F;
        (F = N.dataTransfer) != null &&
          F.types.includes("Files") &&
          (b((B) => B + 1), E());
      },
      L = () => {
        b((N) => N - 1);
      };
    return (
      x.useEffect(() => {
        y === 0 && R();
      }, [y]),
      x.useEffect(() => {
        if (c)
          return (
            document.addEventListener("dragenter", D, !1),
            document.addEventListener("dragleave", L, !1),
            () => {
              document.removeEventListener("dragenter", D, !1),
                document.removeEventListener("dragleave", L, !1);
            }
          );
      }, [c]),
      g.jsx(_a, {
        ...p,
        withinPortal: m,
        children: g.jsx(X, {
          ...S("fullScreen", {
            style: {
              opacity: C ? 1 : 0,
              pointerEvents: C ? "all" : "none",
              zIndex: f,
            },
          }),
          ref: t,
          children: g.jsx(Er, {
            ...h,
            classNames: v,
            styles: w,
            unstyled: l,
            className: ci.dropzone,
            onDrop: (N) => {
              u == null || u(N), R(), b(0);
            },
            onReject: (N) => {
              d == null || d(N), R(), b(0);
            },
          }),
        }),
      })
    );
  });
yp.classes = ci;
yp.displayName = "@mantine/dropzone/DropzoneFullScreen";
Er.FullScreen = yp;
const Zi = Er,
  vp = (e) => {
    const { title: t, description: n, form: r, field_id: o } = e,
      [s, i] = x.useState([]);
    r.values.files.map((a, c) =>
      g.jsxs(
        Ar,
        {
          children: [
            g.jsx("b", { children: a.name }),
            " (",
            (a.size / 1024).toFixed(2),
            " kb)",
            g.jsx(Gr, {
              size: "xs",
              onClick: () =>
                r.setFieldValue(
                  "files",
                  r.values.files.filter((u, d) => d !== c)
                ),
            }),
          ],
        },
        a.name
      )
    );
    const l = s.map((a, c) =>
      g.jsxs(
        Ar,
        {
          children: [
            g.jsx("b", { children: a.name }),
            " (",
            (a.size / 1024).toFixed(2),
            " kb)",
            g.jsx(Gr, {
              size: "xs",
              onClick: () => {
                const u = s.filter((d, f) => f !== c);
                r.setFieldValue("files", u), i(u);
              },
            }),
          ],
        },
        a.name
      )
    );
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(Zi, {
          h: 120,
          p: 0,
          multiple: !0,
          onDrop: (a) => {
            r.setFieldValue("files", a), i(a);
          },
          children: g.jsxs(op, {
            h: 120,
            children: [
              g.jsx(Zi.Idle, { children: "Drop files here" }),
              g.jsx(Zi.Accept, { children: "Drop files here" }),
              g.jsx(Zi.Reject, { children: "Files are invalid" }),
            ],
          }),
        }),
        r.errors.files &&
          g.jsx(Ar, { c: "red", mt: 5, children: r.errors.files }),
        l.length > 0 &&
          g.jsxs(g.Fragment, {
            children: [
              g.jsx(Ar, { mb: 5, mt: "md", children: "Selected files:" }),
              l,
            ],
          }),
      ],
    });
  };
vp.defaultProps = {};
vp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
};
var jw = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(xd, function () {
    var n = 1e3,
      r = 6e4,
      o = 36e5,
      s = "millisecond",
      i = "second",
      l = "minute",
      a = "hour",
      c = "day",
      u = "week",
      d = "month",
      f = "quarter",
      m = "year",
      p = "date",
      h = "Invalid Date",
      S =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      v =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      w = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (A) {
          var j = ["th", "st", "nd", "rd"],
            P = A % 100;
          return "[" + A + (j[(P - 20) % 10] || j[P] || j[0]) + "]";
        },
      },
      y = function (A, j, P) {
        var T = String(A);
        return !T || T.length >= j
          ? A
          : "" + Array(j + 1 - T.length).join(P) + A;
      },
      b = {
        s: y,
        z: function (A) {
          var j = -A.utcOffset(),
            P = Math.abs(j),
            T = Math.floor(P / 60),
            _ = P % 60;
          return (j <= 0 ? "+" : "-") + y(T, 2, "0") + ":" + y(_, 2, "0");
        },
        m: function A(j, P) {
          if (j.date() < P.date()) return -A(P, j);
          var T = 12 * (P.year() - j.year()) + (P.month() - j.month()),
            _ = j.clone().add(T, d),
            k = P - _ < 0,
            $ = j.clone().add(T + (k ? -1 : 1), d);
          return +(-(T + (P - _) / (k ? _ - $ : $ - _)) || 0);
        },
        a: function (A) {
          return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
        },
        p: function (A) {
          return (
            { M: d, y: m, w: u, d: c, D: p, h: a, m: l, s: i, ms: s, Q: f }[
              A
            ] ||
            String(A || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (A) {
          return A === void 0;
        },
      },
      C = "en",
      E = {};
    E[C] = w;
    var R = "$isDayjsObject",
      D = function (A) {
        return A instanceof B || !(!A || !A[R]);
      },
      L = function A(j, P, T) {
        var _;
        if (!j) return C;
        if (typeof j == "string") {
          var k = j.toLowerCase();
          E[k] && (_ = k), P && ((E[k] = P), (_ = k));
          var $ = j.split("-");
          if (!_ && $.length > 1) return A($[0]);
        } else {
          var O = j.name;
          (E[O] = j), (_ = O);
        }
        return !T && _ && (C = _), _ || (!T && C);
      },
      N = function (A, j) {
        if (D(A)) return A.clone();
        var P = typeof j == "object" ? j : {};
        return (P.date = A), (P.args = arguments), new B(P);
      },
      F = b;
    (F.l = L),
      (F.i = D),
      (F.w = function (A, j) {
        return N(A, { locale: j.$L, utc: j.$u, x: j.$x, $offset: j.$offset });
      });
    var B = (function () {
        function A(P) {
          (this.$L = L(P.locale, null, !0)),
            this.parse(P),
            (this.$x = this.$x || P.x || {}),
            (this[R] = !0);
        }
        var j = A.prototype;
        return (
          (j.parse = function (P) {
            (this.$d = (function (T) {
              var _ = T.date,
                k = T.utc;
              if (_ === null) return new Date(NaN);
              if (F.u(_)) return new Date();
              if (_ instanceof Date) return new Date(_);
              if (typeof _ == "string" && !/Z$/i.test(_)) {
                var $ = _.match(S);
                if ($) {
                  var O = $[2] - 1 || 0,
                    I = ($[7] || "0").substring(0, 3);
                  return k
                    ? new Date(
                        Date.UTC(
                          $[1],
                          O,
                          $[3] || 1,
                          $[4] || 0,
                          $[5] || 0,
                          $[6] || 0,
                          I
                        )
                      )
                    : new Date(
                        $[1],
                        O,
                        $[3] || 1,
                        $[4] || 0,
                        $[5] || 0,
                        $[6] || 0,
                        I
                      );
                }
              }
              return new Date(_);
            })(P)),
              this.init();
          }),
          (j.init = function () {
            var P = this.$d;
            (this.$y = P.getFullYear()),
              (this.$M = P.getMonth()),
              (this.$D = P.getDate()),
              (this.$W = P.getDay()),
              (this.$H = P.getHours()),
              (this.$m = P.getMinutes()),
              (this.$s = P.getSeconds()),
              (this.$ms = P.getMilliseconds());
          }),
          (j.$utils = function () {
            return F;
          }),
          (j.isValid = function () {
            return this.$d.toString() !== h;
          }),
          (j.isSame = function (P, T) {
            var _ = N(P);
            return this.startOf(T) <= _ && _ <= this.endOf(T);
          }),
          (j.isAfter = function (P, T) {
            return N(P) < this.startOf(T);
          }),
          (j.isBefore = function (P, T) {
            return this.endOf(T) < N(P);
          }),
          (j.$g = function (P, T, _) {
            return F.u(P) ? this[T] : this.set(_, P);
          }),
          (j.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (j.valueOf = function () {
            return this.$d.getTime();
          }),
          (j.startOf = function (P, T) {
            var _ = this,
              k = !!F.u(T) || T,
              $ = F.p(P),
              O = function (oe, le) {
                var Z = F.w(
                  _.$u ? Date.UTC(_.$y, le, oe) : new Date(_.$y, le, oe),
                  _
                );
                return k ? Z : Z.endOf(c);
              },
              I = function (oe, le) {
                return F.w(
                  _.toDate()[oe].apply(
                    _.toDate("s"),
                    (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(le)
                  ),
                  _
                );
              },
              q = this.$W,
              Q = this.$M,
              ee = this.$D,
              ne = "set" + (this.$u ? "UTC" : "");
            switch ($) {
              case m:
                return k ? O(1, 0) : O(31, 11);
              case d:
                return k ? O(1, Q) : O(0, Q + 1);
              case u:
                var te = this.$locale().weekStart || 0,
                  me = (q < te ? q + 7 : q) - te;
                return O(k ? ee - me : ee + (6 - me), Q);
              case c:
              case p:
                return I(ne + "Hours", 0);
              case a:
                return I(ne + "Minutes", 1);
              case l:
                return I(ne + "Seconds", 2);
              case i:
                return I(ne + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (j.endOf = function (P) {
            return this.startOf(P, !1);
          }),
          (j.$set = function (P, T) {
            var _,
              k = F.p(P),
              $ = "set" + (this.$u ? "UTC" : ""),
              O = ((_ = {}),
              (_[c] = $ + "Date"),
              (_[p] = $ + "Date"),
              (_[d] = $ + "Month"),
              (_[m] = $ + "FullYear"),
              (_[a] = $ + "Hours"),
              (_[l] = $ + "Minutes"),
              (_[i] = $ + "Seconds"),
              (_[s] = $ + "Milliseconds"),
              _)[k],
              I = k === c ? this.$D + (T - this.$W) : T;
            if (k === d || k === m) {
              var q = this.clone().set(p, 1);
              q.$d[O](I),
                q.init(),
                (this.$d = q.set(p, Math.min(this.$D, q.daysInMonth())).$d);
            } else O && this.$d[O](I);
            return this.init(), this;
          }),
          (j.set = function (P, T) {
            return this.clone().$set(P, T);
          }),
          (j.get = function (P) {
            return this[F.p(P)]();
          }),
          (j.add = function (P, T) {
            var _,
              k = this;
            P = Number(P);
            var $ = F.p(T),
              O = function (Q) {
                var ee = N(k);
                return F.w(ee.date(ee.date() + Math.round(Q * P)), k);
              };
            if ($ === d) return this.set(d, this.$M + P);
            if ($ === m) return this.set(m, this.$y + P);
            if ($ === c) return O(1);
            if ($ === u) return O(7);
            var I = ((_ = {}), (_[l] = r), (_[a] = o), (_[i] = n), _)[$] || 1,
              q = this.$d.getTime() + P * I;
            return F.w(q, this);
          }),
          (j.subtract = function (P, T) {
            return this.add(-1 * P, T);
          }),
          (j.format = function (P) {
            var T = this,
              _ = this.$locale();
            if (!this.isValid()) return _.invalidDate || h;
            var k = P || "YYYY-MM-DDTHH:mm:ssZ",
              $ = F.z(this),
              O = this.$H,
              I = this.$m,
              q = this.$M,
              Q = _.weekdays,
              ee = _.months,
              ne = _.meridiem,
              te = function (le, Z, he, ae) {
                return (le && (le[Z] || le(T, k))) || he[Z].slice(0, ae);
              },
              me = function (le) {
                return F.s(O % 12 || 12, le, "0");
              },
              oe =
                ne ||
                function (le, Z, he) {
                  var ae = le < 12 ? "AM" : "PM";
                  return he ? ae.toLowerCase() : ae;
                };
            return k.replace(v, function (le, Z) {
              return (
                Z ||
                (function (he) {
                  switch (he) {
                    case "YY":
                      return String(T.$y).slice(-2);
                    case "YYYY":
                      return F.s(T.$y, 4, "0");
                    case "M":
                      return q + 1;
                    case "MM":
                      return F.s(q + 1, 2, "0");
                    case "MMM":
                      return te(_.monthsShort, q, ee, 3);
                    case "MMMM":
                      return te(ee, q);
                    case "D":
                      return T.$D;
                    case "DD":
                      return F.s(T.$D, 2, "0");
                    case "d":
                      return String(T.$W);
                    case "dd":
                      return te(_.weekdaysMin, T.$W, Q, 2);
                    case "ddd":
                      return te(_.weekdaysShort, T.$W, Q, 3);
                    case "dddd":
                      return Q[T.$W];
                    case "H":
                      return String(O);
                    case "HH":
                      return F.s(O, 2, "0");
                    case "h":
                      return me(1);
                    case "hh":
                      return me(2);
                    case "a":
                      return oe(O, I, !0);
                    case "A":
                      return oe(O, I, !1);
                    case "m":
                      return String(I);
                    case "mm":
                      return F.s(I, 2, "0");
                    case "s":
                      return String(T.$s);
                    case "ss":
                      return F.s(T.$s, 2, "0");
                    case "SSS":
                      return F.s(T.$ms, 3, "0");
                    case "Z":
                      return $;
                  }
                  return null;
                })(le) ||
                $.replace(":", "")
              );
            });
          }),
          (j.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (j.diff = function (P, T, _) {
            var k,
              $ = this,
              O = F.p(T),
              I = N(P),
              q = (I.utcOffset() - this.utcOffset()) * r,
              Q = this - I,
              ee = function () {
                return F.m($, I);
              };
            switch (O) {
              case m:
                k = ee() / 12;
                break;
              case d:
                k = ee();
                break;
              case f:
                k = ee() / 3;
                break;
              case u:
                k = (Q - q) / 6048e5;
                break;
              case c:
                k = (Q - q) / 864e5;
                break;
              case a:
                k = Q / o;
                break;
              case l:
                k = Q / r;
                break;
              case i:
                k = Q / n;
                break;
              default:
                k = Q;
            }
            return _ ? k : F.a(k);
          }),
          (j.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          (j.$locale = function () {
            return E[this.$L];
          }),
          (j.locale = function (P, T) {
            if (!P) return this.$L;
            var _ = this.clone(),
              k = L(P, T, !0);
            return k && (_.$L = k), _;
          }),
          (j.clone = function () {
            return F.w(this.$d, this);
          }),
          (j.toDate = function () {
            return new Date(this.valueOf());
          }),
          (j.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (j.toISOString = function () {
            return this.$d.toISOString();
          }),
          (j.toString = function () {
            return this.$d.toUTCString();
          }),
          A
        );
      })(),
      V = B.prototype;
    return (
      (N.prototype = V),
      [
        ["$ms", s],
        ["$s", i],
        ["$m", l],
        ["$H", a],
        ["$W", c],
        ["$M", d],
        ["$y", m],
        ["$D", p],
      ].forEach(function (A) {
        V[A[1]] = function (j) {
          return this.$g(j, A[0], A[1]);
        };
      }),
      (N.extend = function (A, j) {
        return A.$i || (A(j, B, N), (A.$i = !0)), N;
      }),
      (N.locale = L),
      (N.isDayjs = D),
      (N.unix = function (A) {
        return N(1e3 * A);
      }),
      (N.en = E[C]),
      (N.Ls = E),
      (N.p = {}),
      N
    );
  });
})(jw);
var IP = jw.exports;
const J = Zr(IP);
function zP({
  direction: e,
  levelIndex: t,
  rowIndex: n,
  cellIndex: r,
  size: o,
}) {
  switch (e) {
    case "up":
      return t === 0 && n === 0
        ? null
        : n === 0
        ? {
            levelIndex: t - 1,
            rowIndex:
              r <= o[t - 1][o[t - 1].length - 1] - 1
                ? o[t - 1].length - 1
                : o[t - 1].length - 2,
            cellIndex: r,
          }
        : { levelIndex: t, rowIndex: n - 1, cellIndex: r };
    case "down":
      return n === o[t].length - 1
        ? { levelIndex: t + 1, rowIndex: 0, cellIndex: r }
        : n === o[t].length - 2 && r >= o[t][o[t].length - 1]
        ? { levelIndex: t + 1, rowIndex: 0, cellIndex: r }
        : { levelIndex: t, rowIndex: n + 1, cellIndex: r };
    case "left":
      return t === 0 && n === 0 && r === 0
        ? null
        : n === 0 && r === 0
        ? {
            levelIndex: t - 1,
            rowIndex: o[t - 1].length - 1,
            cellIndex: o[t - 1][o[t - 1].length - 1] - 1,
          }
        : r === 0
        ? { levelIndex: t, rowIndex: n - 1, cellIndex: o[t][n - 1] - 1 }
        : { levelIndex: t, rowIndex: n, cellIndex: r - 1 };
    case "right":
      return n === o[t].length - 1 && r === o[t][n] - 1
        ? { levelIndex: t + 1, rowIndex: 0, cellIndex: 0 }
        : r === o[t][n] - 1
        ? { levelIndex: t, rowIndex: n + 1, cellIndex: 0 }
        : { levelIndex: t, rowIndex: n, cellIndex: r + 1 };
    default:
      return { levelIndex: t, rowIndex: n, cellIndex: r };
  }
}
function $w({
  controlsRef: e,
  direction: t,
  levelIndex: n,
  rowIndex: r,
  cellIndex: o,
  size: s,
}) {
  var a, c, u;
  const i = zP({
    direction: t,
    size: s,
    rowIndex: r,
    cellIndex: o,
    levelIndex: n,
  });
  if (!i) return;
  const l =
    (u =
      (c = (a = e.current) == null ? void 0 : a[i.levelIndex]) == null
        ? void 0
        : c[i.rowIndex]) == null
      ? void 0
      : u[i.cellIndex];
  l &&
    (l.disabled ||
    l.getAttribute("data-hidden") ||
    l.getAttribute("data-outside")
      ? $w({
          controlsRef: e,
          direction: t,
          levelIndex: i.levelIndex,
          cellIndex: i.cellIndex,
          rowIndex: i.rowIndex,
          size: s,
        })
      : l.focus());
}
function BP(e) {
  switch (e) {
    case "ArrowDown":
      return "down";
    case "ArrowUp":
      return "up";
    case "ArrowRight":
      return "right";
    case "ArrowLeft":
      return "left";
    default:
      return null;
  }
}
function VP(e) {
  var t;
  return (t = e.current) == null
    ? void 0
    : t.map((n) => n.map((r) => r.length));
}
function wp({
  controlsRef: e,
  levelIndex: t,
  rowIndex: n,
  cellIndex: r,
  event: o,
}) {
  const s = BP(o.key);
  if (s) {
    o.preventDefault();
    const i = VP(e);
    $w({
      controlsRef: e,
      direction: s,
      levelIndex: t,
      rowIndex: n,
      cellIndex: r,
      size: i,
    });
  }
}
var Lw = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(xd, function () {
    var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
      r = {};
    return function (o, s, i) {
      var l,
        a = function (f, m, p) {
          p === void 0 && (p = {});
          var h = new Date(f),
            S = (function (v, w) {
              w === void 0 && (w = {});
              var y = w.timeZoneName || "short",
                b = v + "|" + y,
                C = r[b];
              return (
                C ||
                  ((C = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: v,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: y,
                  })),
                  (r[b] = C)),
                C
              );
            })(m, p);
          return S.formatToParts(h);
        },
        c = function (f, m) {
          for (var p = a(f, m), h = [], S = 0; S < p.length; S += 1) {
            var v = p[S],
              w = v.type,
              y = v.value,
              b = n[w];
            b >= 0 && (h[b] = parseInt(y, 10));
          }
          var C = h[3],
            E = C === 24 ? 0 : C,
            R =
              h[0] +
              "-" +
              h[1] +
              "-" +
              h[2] +
              " " +
              E +
              ":" +
              h[4] +
              ":" +
              h[5] +
              ":000",
            D = +f;
          return (i.utc(R).valueOf() - (D -= D % 1e3)) / 6e4;
        },
        u = s.prototype;
      (u.tz = function (f, m) {
        f === void 0 && (f = l);
        var p = this.utcOffset(),
          h = this.toDate(),
          S = h.toLocaleString("en-US", { timeZone: f }),
          v = Math.round((h - new Date(S)) / 1e3 / 60),
          w = i(S, { locale: this.$L })
            .$set("millisecond", this.$ms)
            .utcOffset(15 * -Math.round(h.getTimezoneOffset() / 15) - v, !0);
        if (m) {
          var y = w.utcOffset();
          w = w.add(p - y, "minute");
        }
        return (w.$x.$timezone = f), w;
      }),
        (u.offsetName = function (f) {
          var m = this.$x.$timezone || i.tz.guess(),
            p = a(this.valueOf(), m, { timeZoneName: f }).find(function (h) {
              return h.type.toLowerCase() === "timezonename";
            });
          return p && p.value;
        });
      var d = u.startOf;
      (u.startOf = function (f, m) {
        if (!this.$x || !this.$x.$timezone) return d.call(this, f, m);
        var p = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return d.call(p, f, m).tz(this.$x.$timezone, !0);
      }),
        (i.tz = function (f, m, p) {
          var h = p && m,
            S = p || m || l,
            v = c(+i(), S);
          if (typeof f != "string") return i(f).tz(S);
          var w = (function (E, R, D) {
              var L = E - 60 * R * 1e3,
                N = c(L, D);
              if (R === N) return [L, R];
              var F = c((L -= 60 * (N - R) * 1e3), D);
              return N === F
                ? [L, N]
                : [E - 60 * Math.min(N, F) * 1e3, Math.max(N, F)];
            })(i.utc(f, h).valueOf(), v, S),
            y = w[0],
            b = w[1],
            C = i(y).utcOffset(b);
          return (C.$x.$timezone = S), C;
        }),
        (i.tz.guess = function () {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }),
        (i.tz.setDefault = function (f) {
          l = f;
        });
    };
  });
})(Lw);
var HP = Lw.exports;
const WP = Zr(HP);
var Aw = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(xd, function () {
    var n = "minute",
      r = /[+-]\d\d(?::?\d\d)?/g,
      o = /([+-]|\d\d)/g;
    return function (s, i, l) {
      var a = i.prototype;
      (l.utc = function (h) {
        var S = { date: h, utc: !0, args: arguments };
        return new i(S);
      }),
        (a.utc = function (h) {
          var S = l(this.toDate(), { locale: this.$L, utc: !0 });
          return h ? S.add(this.utcOffset(), n) : S;
        }),
        (a.local = function () {
          return l(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var c = a.parse;
      a.parse = function (h) {
        h.utc && (this.$u = !0),
          this.$utils().u(h.$offset) || (this.$offset = h.$offset),
          c.call(this, h);
      };
      var u = a.init;
      a.init = function () {
        if (this.$u) {
          var h = this.$d;
          (this.$y = h.getUTCFullYear()),
            (this.$M = h.getUTCMonth()),
            (this.$D = h.getUTCDate()),
            (this.$W = h.getUTCDay()),
            (this.$H = h.getUTCHours()),
            (this.$m = h.getUTCMinutes()),
            (this.$s = h.getUTCSeconds()),
            (this.$ms = h.getUTCMilliseconds());
        } else u.call(this);
      };
      var d = a.utcOffset;
      a.utcOffset = function (h, S) {
        var v = this.$utils().u;
        if (v(h))
          return this.$u ? 0 : v(this.$offset) ? d.call(this) : this.$offset;
        if (
          typeof h == "string" &&
          ((h = (function (C) {
            C === void 0 && (C = "");
            var E = C.match(r);
            if (!E) return null;
            var R = ("" + E[0]).match(o) || ["-", 0, 0],
              D = R[0],
              L = 60 * +R[1] + +R[2];
            return L === 0 ? 0 : D === "+" ? L : -L;
          })(h)),
          h === null)
        )
          return this;
        var w = Math.abs(h) <= 16 ? 60 * h : h,
          y = this;
        if (S) return (y.$offset = w), (y.$u = h === 0), y;
        if (h !== 0) {
          var b = this.$u
            ? this.toDate().getTimezoneOffset()
            : -1 * this.utcOffset();
          ((y = this.local().add(w + b, n)).$offset = w),
            (y.$x.$localOffset = b);
        } else y = this.utc();
        return y;
      };
      var f = a.format;
      (a.format = function (h) {
        var S = h || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return f.call(this, S);
      }),
        (a.valueOf = function () {
          var h = this.$utils().u(this.$offset)
            ? 0
            : this.$offset +
              (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * h;
        }),
        (a.isUTC = function () {
          return !!this.$u;
        }),
        (a.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (a.toString = function () {
          return this.toDate().toUTCString();
        });
      var m = a.toDate;
      a.toDate = function (h) {
        return h === "s" && this.$offset
          ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
          : m.call(this);
      };
      var p = a.diff;
      a.diff = function (h, S, v) {
        if (h && this.$u === h.$u) return p.call(this, h, S, v);
        var w = this.local(),
          y = l(h).local();
        return p.call(w, y, S, v);
      };
    };
  });
})(Aw);
var UP = Aw.exports;
const YP = Zr(UP);
J.extend(YP);
J.extend(WP);
function qP(e, t) {
  return t ? J(e).tz(t).utcOffset() + e.getTimezoneOffset() : 0;
}
const Jh = (e, t, n) => {
  if (!e) return null;
  if (!t) return e;
  let r = qP(e, t);
  return n === "remove" && (r *= -1), J(e).add(r, "minutes").toDate();
};
function Mo(e, t, n, r) {
  return r || !t
    ? t
    : Array.isArray(t)
    ? t.map((o) => Jh(o, n, e))
    : Jh(t, n, e);
}
const KP = {
    locale: "en",
    timezone: null,
    firstDayOfWeek: 1,
    weekendDays: [0, 6],
    labelSeparator: "–",
    consistentWeeks: !1,
  },
  GP = x.createContext(KP);
function pn() {
  const e = x.useContext(GP),
    t = x.useCallback((i) => i || e.locale, [e.locale]),
    n = x.useCallback((i) => i || e.timezone || void 0, [e.timezone]),
    r = x.useCallback(
      (i) => (typeof i == "number" ? i : e.firstDayOfWeek),
      [e.firstDayOfWeek]
    ),
    o = x.useCallback(
      (i) => (Array.isArray(i) ? i : e.weekendDays),
      [e.weekendDays]
    ),
    s = x.useCallback(
      (i) => (typeof i == "string" ? i : e.labelSeparator),
      [e.labelSeparator]
    );
  return {
    ...e,
    getLocale: t,
    getTimezone: n,
    getFirstDayOfWeek: r,
    getWeekendDays: o,
    getLabelSeparator: s,
  };
}
var Fw = { day: "m_396ce5cb" };
const XP = {},
  QP = (e, { size: t }) => ({ day: { "--day-size": Pe(t, "day-size") } }),
  xp = G((e, t) => {
    const n = W("Day", XP, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        date: c,
        disabled: u,
        __staticSelector: d,
        weekend: f,
        outside: m,
        selected: p,
        renderDay: h,
        inRange: S,
        firstInRange: v,
        lastInRange: w,
        hidden: y,
        static: b,
        ...C
      } = n,
      E = de({
        name: d || "Day",
        classes: Fw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: QP,
        rootSelector: "day",
      }),
      R = pn();
    return g.jsx(Mn, {
      ...E("day", { style: y ? { display: "none" } : void 0 }),
      component: b ? "div" : "button",
      ref: t,
      disabled: u,
      "data-today":
        J(c).isSame(Mo("add", new Date(), R.getTimezone()), "day") || void 0,
      "data-hidden": y || void 0,
      "data-disabled": u || void 0,
      "data-weekend": (!u && !m && f) || void 0,
      "data-outside": (!u && m) || void 0,
      "data-selected": (!u && p) || void 0,
      "data-in-range": (S && !u) || void 0,
      "data-first-in-range": (v && !u) || void 0,
      "data-last-in-range": (w && !u) || void 0,
      "data-static": b || void 0,
      unstyled: l,
      ...C,
      children: (h == null ? void 0 : h(c)) || c.getDate(),
    });
  });
xp.classes = Fw;
xp.displayName = "@mantine/dates/Day";
function JP({ locale: e, format: t = "dd", firstDayOfWeek: n = 1 }) {
  const r = J().day(n),
    o = [];
  for (let s = 0; s < 7; s += 1)
    typeof t == "string"
      ? o.push(J(r).add(s, "days").locale(e).format(t))
      : o.push(t(J(r).add(s, "days").toDate()));
  return o;
}
var Mw = { weekday: "m_18a3eca" };
const ZP = {},
  eT = (e, { size: t }) => ({
    weekdaysRow: { "--wr-fz": ot(t), "--wr-spacing": xa(t) },
  }),
  Sp = G((e, t) => {
    const n = W("WeekdaysRow", ZP, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        locale: c,
        firstDayOfWeek: u,
        weekdayFormat: d,
        cellComponent: f = "th",
        __staticSelector: m,
        ...p
      } = n,
      h = de({
        name: m || "WeekdaysRow",
        classes: Mw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: eT,
        rootSelector: "weekdaysRow",
      }),
      S = pn(),
      v = JP({
        locale: S.getLocale(c),
        format: d,
        firstDayOfWeek: S.getFirstDayOfWeek(u),
      }).map((w, y) => g.jsx(f, { ...h("weekday"), children: w }, y));
    return g.jsx(X, {
      component: "tr",
      ref: t,
      ...h("weekdaysRow"),
      ...p,
      children: v,
    });
  });
Sp.classes = Mw;
Sp.displayName = "@mantine/dates/WeekdaysRow";
function tT(e, t = 1) {
  const n = new Date(e),
    r = t === 0 ? 6 : t - 1;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function nT(e, t = 1) {
  const n = new Date(e);
  for (; n.getDay() !== t; ) n.setDate(n.getDate() - 1);
  return n;
}
function rT({ month: e, firstDayOfWeek: t = 1, consistentWeeks: n }) {
  const r = e.getMonth(),
    o = new Date(e.getFullYear(), r, 1),
    s = new Date(e.getFullYear(), e.getMonth() + 1, 0),
    i = tT(s, t),
    l = nT(o, t),
    a = [];
  for (; l <= i; ) {
    const c = [];
    for (let u = 0; u < 7; u += 1)
      c.push(new Date(l)), l.setDate(l.getDate() + 1);
    a.push(c);
  }
  if (n && a.length < 6) {
    const c = a[a.length - 1],
      u = c[c.length - 1],
      d = new Date(u);
    for (d.setDate(d.getDate() + 1); a.length < 6; ) {
      const f = [];
      for (let m = 0; m < 7; m += 1)
        f.push(new Date(d)), d.setDate(d.getDate() + 1);
      a.push(f);
    }
  }
  return a;
}
function Iw(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
}
function zw(e, t) {
  return t instanceof Date ? J(e).isAfter(J(t).subtract(1, "day"), "day") : !0;
}
function Bw(e, t) {
  return t instanceof Date ? J(e).isBefore(J(t).add(1, "day"), "day") : !0;
}
function oT(e, t, n, r, o, s, i) {
  const l = e.flat().filter((u) => {
      var d;
      return (
        Bw(u, n) &&
        zw(u, t) &&
        !(o != null && o(u)) &&
        !((d = r == null ? void 0 : r(u)) != null && d.disabled) &&
        (!s || Iw(u, i))
      );
    }),
    a = l.find((u) => {
      var d;
      return (d = r == null ? void 0 : r(u)) == null ? void 0 : d.selected;
    });
  if (a) return a;
  const c = l.find((u) => J().isSame(u, "date"));
  return c || l[0];
}
var Vw = { month: "m_cc9820d3", monthCell: "m_8f457cd5" };
const sT = { withCellSpacing: !0 },
  Ha = G((e, t) => {
    const n = W("Month", sT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        __staticSelector: c,
        locale: u,
        firstDayOfWeek: d,
        weekdayFormat: f,
        month: m,
        weekendDays: p,
        getDayProps: h,
        excludeDate: S,
        minDate: v,
        maxDate: w,
        renderDay: y,
        hideOutsideDates: b,
        hideWeekdays: C,
        getDayAriaLabel: E,
        static: R,
        __getDayRef: D,
        __onDayKeyDown: L,
        __onDayClick: N,
        __onDayMouseEnter: F,
        __preventFocus: B,
        __stopPropagation: V,
        withCellSpacing: A,
        size: j,
        ...P
      } = n,
      T = de({
        name: c || "Month",
        classes: Vw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "month",
      }),
      _ = pn(),
      k = rT({
        month: m,
        firstDayOfWeek: _.getFirstDayOfWeek(d),
        consistentWeeks: _.consistentWeeks,
      }),
      $ = oT(k, v, w, h, S, b, m),
      { resolvedClassNames: O, resolvedStyles: I } = so({
        classNames: r,
        styles: i,
        props: n,
      }),
      q = k.map((Q, ee) => {
        const ne = Q.map((te, me) => {
          const oe = !Iw(te, m),
            le =
              (E == null ? void 0 : E(te)) ||
              J(te)
                .locale(u || _.locale)
                .format("D MMMM YYYY"),
            Z = h == null ? void 0 : h(te),
            he = J(te).isSame($, "date");
          return g.jsx(
            "td",
            {
              ...T("monthCell"),
              "data-with-spacing": A || void 0,
              children: g.jsx(xp, {
                __staticSelector: c || "Month",
                classNames: O,
                styles: I,
                unstyled: l,
                "data-mantine-stop-propagation": V || void 0,
                renderDay: y,
                date: te,
                size: j,
                weekend: _.getWeekendDays(p).includes(te.getDay()),
                outside: oe,
                hidden: b ? oe : !1,
                "aria-label": le,
                static: R,
                disabled:
                  (S == null ? void 0 : S(te)) || !Bw(te, w) || !zw(te, v),
                ref: (ae) => (D == null ? void 0 : D(ee, me, ae)),
                ...Z,
                onKeyDown: (ae) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onKeyDown) == null ||
                    se.call(Z, ae),
                    L == null ||
                      L(ae, { rowIndex: ee, cellIndex: me, date: te });
                },
                onMouseEnter: (ae) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onMouseEnter) == null ||
                    se.call(Z, ae),
                    F == null || F(ae, te);
                },
                onClick: (ae) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onClick) == null ||
                    se.call(Z, ae),
                    N == null || N(ae, te);
                },
                onMouseDown: (ae) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onMouseDown) == null ||
                    se.call(Z, ae),
                    B && ae.preventDefault();
                },
                tabIndex: B || !he ? -1 : 0,
              }),
            },
            te.toString()
          );
        });
        return g.jsx("tr", { ...T("monthRow"), children: ne }, ee);
      });
    return g.jsxs(X, {
      component: "table",
      ...T("month"),
      size: j,
      ref: t,
      ...P,
      children: [
        !C &&
          g.jsx("thead", {
            ...T("monthThead"),
            children: g.jsx(Sp, {
              __staticSelector: c || "Month",
              locale: u,
              firstDayOfWeek: d,
              weekdayFormat: f,
              size: j,
              classNames: O,
              styles: I,
              unstyled: l,
            }),
          }),
        g.jsx("tbody", { ...T("monthTbody"), children: q }),
      ],
    });
  });
Ha.classes = Vw;
Ha.displayName = "@mantine/dates/Month";
var Hw = { pickerControl: "m_dc6a3c71" };
const iT = {},
  lT = (e, { size: t }) => ({
    pickerControl: { "--dpc-fz": ot(t), "--dpc-size": Pe(t, "dpc-size") },
  }),
  Wa = G((e, t) => {
    const n = W("PickerControl", iT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        firstInRange: c,
        lastInRange: u,
        inRange: d,
        __staticSelector: f,
        selected: m,
        disabled: p,
        ...h
      } = n,
      S = de({
        name: f || "PickerControl",
        classes: Hw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: lT,
        rootSelector: "pickerControl",
      });
    return g.jsx(Mn, {
      ...S("pickerControl"),
      ref: t,
      unstyled: l,
      "data-picker-control": !0,
      "data-selected": (m && !p) || void 0,
      "data-disabled": p || void 0,
      "data-in-range": (d && !p && !m) || void 0,
      "data-first-in-range": (c && !p) || void 0,
      "data-last-in-range": (u && !p) || void 0,
      disabled: p,
      ...h,
    });
  });
Wa.classes = Hw;
Wa.displayName = "@mantine/dates/PickerControl";
function Ww(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && J(e).isBefore(t, "year")) || (n && J(e).isAfter(n, "year")));
}
function aT(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !Ww(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
      );
    }),
    s = o.find((l) => {
      var a;
      return (a = r == null ? void 0 : r(l)) == null ? void 0 : a.selected;
    });
  if (s) return s;
  const i = o.find((l) => J().isSame(l, "year"));
  return i || o[0];
}
function Uw(e) {
  const t = e.getFullYear(),
    n = t - (t % 10);
  let r = 0;
  const o = [[], [], [], []];
  for (let s = 0; s < 4; s += 1) {
    const i = s === 3 ? 1 : 3;
    for (let l = 0; l < i; l += 1) o[s].push(new Date(n + r, 0)), (r += 1);
  }
  return o;
}
var Yw = { yearsList: "m_9206547b", yearsListCell: "m_c5a19c7d" };
const cT = { yearsListFormat: "YYYY", withCellSpacing: !0 },
  Ua = G((e, t) => {
    const n = W("YearsList", cT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        decade: c,
        yearsListFormat: u,
        locale: d,
        minDate: f,
        maxDate: m,
        getYearControlProps: p,
        __staticSelector: h,
        __getControlRef: S,
        __onControlKeyDown: v,
        __onControlClick: w,
        __onControlMouseEnter: y,
        __preventFocus: b,
        __stopPropagation: C,
        withCellSpacing: E,
        size: R,
        ...D
      } = n,
      L = de({
        name: h || "YearsList",
        classes: Yw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "yearsList",
      }),
      N = pn(),
      F = Uw(c),
      B = aT(F, f, m, p),
      V = F.map((A, j) => {
        const P = A.map((T, _) => {
          const k = p == null ? void 0 : p(T),
            $ = J(T).isSame(B, "year");
          return g.jsx(
            "td",
            {
              ...L("yearsListCell"),
              "data-with-spacing": E || void 0,
              children: g.jsx(Wa, {
                ...L("yearsListControl"),
                size: R,
                unstyled: l,
                "data-mantine-stop-propagation": C || void 0,
                disabled: Ww(T, f, m),
                ref: (O) => (S == null ? void 0 : S(j, _, O)),
                ...k,
                onKeyDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onKeyDown) == null ||
                    I.call(k, O),
                    v == null || v(O, { rowIndex: j, cellIndex: _, date: T });
                },
                onClick: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onClick) == null || I.call(k, O),
                    w == null || w(O, T);
                },
                onMouseEnter: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseEnter) == null ||
                    I.call(k, O),
                    y == null || y(O, T);
                },
                onMouseDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseDown) == null ||
                    I.call(k, O),
                    b && O.preventDefault();
                },
                tabIndex: b || !$ ? -1 : 0,
                children: J(T).locale(N.getLocale(d)).format(u),
              }),
            },
            _
          );
        });
        return g.jsx("tr", { ...L("yearsListRow"), children: P }, j);
      });
    return g.jsx(X, {
      component: "table",
      ref: t,
      size: R,
      ...L("yearsList"),
      ...D,
      children: g.jsx("tbody", { children: V }),
    });
  });
Ua.classes = Yw;
Ua.displayName = "@mantine/dates/YearsList";
function qw(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && J(e).isBefore(t, "month")) || (n && J(e).isAfter(n, "month")));
}
function uT(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !qw(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
      );
    }),
    s = o.find((l) => {
      var a;
      return (a = r == null ? void 0 : r(l)) == null ? void 0 : a.selected;
    });
  if (s) return s;
  const i = o.find((l) => J().isSame(l, "month"));
  return i || o[0];
}
function dT(e) {
  const t = J(e).startOf("year").toDate(),
    n = [[], [], [], []];
  let r = 0;
  for (let o = 0; o < 4; o += 1)
    for (let s = 0; s < 3; s += 1)
      n[o].push(J(t).add(r, "months").toDate()), (r += 1);
  return n;
}
var Kw = { monthsList: "m_2a6c32d", monthsListCell: "m_fe27622f" };
const fT = { monthsListFormat: "MMM", withCellSpacing: !0 },
  Ya = G((e, t) => {
    const n = W("MonthsList", fT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        __staticSelector: c,
        year: u,
        monthsListFormat: d,
        locale: f,
        minDate: m,
        maxDate: p,
        getMonthControlProps: h,
        __getControlRef: S,
        __onControlKeyDown: v,
        __onControlClick: w,
        __onControlMouseEnter: y,
        __preventFocus: b,
        __stopPropagation: C,
        withCellSpacing: E,
        size: R,
        ...D
      } = n,
      L = de({
        name: c || "MonthsList",
        classes: Kw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "monthsList",
      }),
      N = pn(),
      F = dT(u),
      B = uT(F, m, p, h),
      V = F.map((A, j) => {
        const P = A.map((T, _) => {
          const k = h == null ? void 0 : h(T),
            $ = J(T).isSame(B, "month");
          return g.jsx(
            "td",
            {
              ...L("monthsListCell"),
              "data-with-spacing": E || void 0,
              children: g.jsx(Wa, {
                ...L("monthsListControl"),
                size: R,
                unstyled: l,
                __staticSelector: c || "MonthsList",
                "data-mantine-stop-propagation": C || void 0,
                disabled: qw(T, m, p),
                ref: (O) => (S == null ? void 0 : S(j, _, O)),
                ...k,
                onKeyDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onKeyDown) == null ||
                    I.call(k, O),
                    v == null || v(O, { rowIndex: j, cellIndex: _, date: T });
                },
                onClick: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onClick) == null || I.call(k, O),
                    w == null || w(O, T);
                },
                onMouseEnter: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseEnter) == null ||
                    I.call(k, O),
                    y == null || y(O, T);
                },
                onMouseDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseDown) == null ||
                    I.call(k, O),
                    b && O.preventDefault();
                },
                tabIndex: b || !$ ? -1 : 0,
                children: J(T).locale(N.getLocale(f)).format(d),
              }),
            },
            _
          );
        });
        return g.jsx("tr", { ...L("monthsListRow"), children: P }, j);
      });
    return g.jsx(X, {
      component: "table",
      ref: t,
      size: R,
      ...L("monthsList"),
      ...D,
      children: g.jsx("tbody", { children: V }),
    });
  });
Ya.classes = Kw;
Ya.displayName = "@mantine/dates/MonthsList";
var Gw = {
  calendarHeader: "m_730a79ed",
  calendarHeaderLevel: "m_f6645d97",
  calendarHeaderControl: "m_2351eeb0",
  calendarHeaderControlIcon: "m_367dc749",
};
const pT = {
    nextDisabled: !1,
    previousDisabled: !1,
    hasNextLevel: !0,
    withNext: !0,
    withPrevious: !0,
  },
  mT = (e, { size: t }) => ({
    calendarHeader: {
      "--dch-control-size": Pe(t, "dch-control-size"),
      "--dch-fz": ot(t),
    },
  }),
  kr = G((e, t) => {
    const n = W("CalendarHeader", pT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        nextIcon: c,
        previousIcon: u,
        nextLabel: d,
        previousLabel: f,
        onNext: m,
        onPrevious: p,
        onLevelClick: h,
        label: S,
        nextDisabled: v,
        previousDisabled: w,
        hasNextLevel: y,
        levelControlAriaLabel: b,
        withNext: C,
        withPrevious: E,
        __staticSelector: R,
        __preventFocus: D,
        __stopPropagation: L,
        ...N
      } = n,
      F = de({
        name: R || "CalendarHeader",
        classes: Gw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: mT,
        rootSelector: "calendarHeader",
      }),
      B = D ? (V) => V.preventDefault() : void 0;
    return g.jsxs(X, {
      ...F("calendarHeader"),
      ref: t,
      ...N,
      children: [
        E &&
          g.jsx(Mn, {
            ...F("calendarHeaderControl"),
            "data-direction": "previous",
            "aria-label": f,
            onClick: p,
            unstyled: l,
            onMouseDown: B,
            disabled: w,
            "data-disabled": w || void 0,
            tabIndex: D || w ? -1 : 0,
            "data-mantine-stop-propagation": L || void 0,
            children:
              u ||
              g.jsx(td, {
                ...F("calendarHeaderControlIcon"),
                "data-direction": "previous",
                size: "45%",
              }),
          }),
        g.jsx(Mn, {
          component: y ? "button" : "div",
          ...F("calendarHeaderLevel"),
          onClick: y ? h : void 0,
          unstyled: l,
          onMouseDown: y ? B : void 0,
          disabled: !y,
          "data-static": !y || void 0,
          "aria-label": b,
          tabIndex: D || !y ? -1 : 0,
          "data-mantine-stop-propagation": L || void 0,
          children: S,
        }),
        C &&
          g.jsx(Mn, {
            ...F("calendarHeaderControl"),
            "data-direction": "next",
            "aria-label": d,
            onClick: m,
            unstyled: l,
            onMouseDown: B,
            disabled: v,
            "data-disabled": v || void 0,
            tabIndex: D || v ? -1 : 0,
            "data-mantine-stop-propagation": L || void 0,
            children:
              c ||
              g.jsx(td, {
                ...F("calendarHeaderControlIcon"),
                "data-direction": "next",
                size: "45%",
              }),
          }),
      ],
    });
  });
kr.classes = Gw;
kr.displayName = "@mantine/dates/CalendarHeader";
function hT(e) {
  const t = Uw(e);
  return [t[0][0], t[3][0]];
}
const gT = { decadeLabelFormat: "YYYY" },
  qa = G((e, t) => {
    const n = W("DecadeLevel", gT, e),
      {
        decade: r,
        locale: o,
        minDate: s,
        maxDate: i,
        yearsListFormat: l,
        getYearControlProps: a,
        __getControlRef: c,
        __onControlKeyDown: u,
        __onControlClick: d,
        __onControlMouseEnter: f,
        withCellSpacing: m,
        __preventFocus: p,
        nextIcon: h,
        previousIcon: S,
        nextLabel: v,
        previousLabel: w,
        onNext: y,
        onPrevious: b,
        nextDisabled: C,
        previousDisabled: E,
        levelControlAriaLabel: R,
        withNext: D,
        withPrevious: L,
        decadeLabelFormat: N,
        classNames: F,
        styles: B,
        unstyled: V,
        __staticSelector: A,
        __stopPropagation: j,
        size: P,
        ...T
      } = n,
      _ = pn(),
      [k, $] = hT(r),
      O = {
        __staticSelector: A || "DecadeLevel",
        classNames: F,
        styles: B,
        unstyled: V,
        size: P,
      },
      I = typeof C == "boolean" ? C : i ? !J($).endOf("year").isBefore(i) : !1,
      q = typeof E == "boolean" ? E : s ? !J(k).startOf("year").isAfter(s) : !1,
      Q = (ee, ne) =>
        J(ee)
          .locale(o || _.locale)
          .format(ne);
    return g.jsxs(X, {
      "data-decade-level": !0,
      size: P,
      ref: t,
      ...T,
      children: [
        g.jsx(kr, {
          label: typeof N == "function" ? N(k, $) : `${Q(k, N)} – ${Q($, N)}`,
          __preventFocus: p,
          __stopPropagation: j,
          nextIcon: h,
          previousIcon: S,
          nextLabel: v,
          previousLabel: w,
          onNext: y,
          onPrevious: b,
          nextDisabled: I,
          previousDisabled: q,
          hasNextLevel: !1,
          levelControlAriaLabel: R,
          withNext: D,
          withPrevious: L,
          ...O,
        }),
        g.jsx(Ua, {
          decade: r,
          locale: o,
          minDate: s,
          maxDate: i,
          yearsListFormat: l,
          getYearControlProps: a,
          __getControlRef: c,
          __onControlKeyDown: u,
          __onControlClick: d,
          __onControlMouseEnter: f,
          __preventFocus: p,
          __stopPropagation: j,
          withCellSpacing: m,
          ...O,
        }),
      ],
    });
  });
qa.classes = { ...Ua.classes, ...kr.classes };
qa.displayName = "@mantine/dates/DecadeLevel";
const yT = { yearLabelFormat: "YYYY" },
  Ka = G((e, t) => {
    const n = W("YearLevel", yT, e),
      {
        year: r,
        locale: o,
        minDate: s,
        maxDate: i,
        monthsListFormat: l,
        getMonthControlProps: a,
        __getControlRef: c,
        __onControlKeyDown: u,
        __onControlClick: d,
        __onControlMouseEnter: f,
        withCellSpacing: m,
        __preventFocus: p,
        nextIcon: h,
        previousIcon: S,
        nextLabel: v,
        previousLabel: w,
        onNext: y,
        onPrevious: b,
        onLevelClick: C,
        nextDisabled: E,
        previousDisabled: R,
        hasNextLevel: D,
        levelControlAriaLabel: L,
        withNext: N,
        withPrevious: F,
        yearLabelFormat: B,
        __staticSelector: V,
        __stopPropagation: A,
        size: j,
        classNames: P,
        styles: T,
        unstyled: _,
        ...k
      } = n,
      $ = pn(),
      O = {
        __staticSelector: V || "YearLevel",
        classNames: P,
        styles: T,
        unstyled: _,
        size: j,
      },
      I = typeof E == "boolean" ? E : i ? !J(r).endOf("year").isBefore(i) : !1,
      q = typeof R == "boolean" ? R : s ? !J(r).startOf("year").isAfter(s) : !1;
    return g.jsxs(X, {
      "data-year-level": !0,
      size: j,
      ref: t,
      ...k,
      children: [
        g.jsx(kr, {
          label:
            typeof B == "function"
              ? B(r)
              : J(r)
                  .locale(o || $.locale)
                  .format(B),
          __preventFocus: p,
          __stopPropagation: A,
          nextIcon: h,
          previousIcon: S,
          nextLabel: v,
          previousLabel: w,
          onNext: y,
          onPrevious: b,
          onLevelClick: C,
          nextDisabled: I,
          previousDisabled: q,
          hasNextLevel: D,
          levelControlAriaLabel: L,
          withNext: N,
          withPrevious: F,
          ...O,
        }),
        g.jsx(Ya, {
          year: r,
          locale: o,
          minDate: s,
          maxDate: i,
          monthsListFormat: l,
          getMonthControlProps: a,
          __getControlRef: c,
          __onControlKeyDown: u,
          __onControlClick: d,
          __onControlMouseEnter: f,
          __preventFocus: p,
          __stopPropagation: A,
          withCellSpacing: m,
          ...O,
        }),
      ],
    });
  });
Ka.classes = { ...kr.classes, ...Ya.classes };
Ka.displayName = "@mantine/dates/YearLevel";
const vT = { monthLabelFormat: "MMMM YYYY" },
  Ga = G((e, t) => {
    const n = W("MonthLevel", vT, e),
      {
        month: r,
        locale: o,
        firstDayOfWeek: s,
        weekdayFormat: i,
        weekendDays: l,
        getDayProps: a,
        excludeDate: c,
        minDate: u,
        maxDate: d,
        renderDay: f,
        hideOutsideDates: m,
        hideWeekdays: p,
        getDayAriaLabel: h,
        __getDayRef: S,
        __onDayKeyDown: v,
        __onDayClick: w,
        __onDayMouseEnter: y,
        withCellSpacing: b,
        __preventFocus: C,
        __stopPropagation: E,
        nextIcon: R,
        previousIcon: D,
        nextLabel: L,
        previousLabel: N,
        onNext: F,
        onPrevious: B,
        onLevelClick: V,
        nextDisabled: A,
        previousDisabled: j,
        hasNextLevel: P,
        levelControlAriaLabel: T,
        withNext: _,
        withPrevious: k,
        monthLabelFormat: $,
        classNames: O,
        styles: I,
        unstyled: q,
        __staticSelector: Q,
        size: ee,
        static: ne,
        ...te
      } = n,
      me = pn(),
      oe = {
        __staticSelector: Q || "MonthLevel",
        classNames: O,
        styles: I,
        unstyled: q,
        size: ee,
      },
      le =
        typeof A == "boolean" ? A : d ? !J(r).endOf("month").isBefore(d) : !1,
      Z =
        typeof j == "boolean" ? j : u ? !J(r).startOf("month").isAfter(u) : !1;
    return g.jsxs(X, {
      "data-month-level": !0,
      size: ee,
      ref: t,
      ...te,
      children: [
        g.jsx(kr, {
          label:
            typeof $ == "function"
              ? $(r)
              : J(r)
                  .locale(o || me.locale)
                  .format($),
          __preventFocus: C,
          __stopPropagation: E,
          nextIcon: R,
          previousIcon: D,
          nextLabel: L,
          previousLabel: N,
          onNext: F,
          onPrevious: B,
          onLevelClick: V,
          nextDisabled: le,
          previousDisabled: Z,
          hasNextLevel: P,
          levelControlAriaLabel: T,
          withNext: _,
          withPrevious: k,
          ...oe,
        }),
        g.jsx(Ha, {
          month: r,
          locale: o,
          firstDayOfWeek: s,
          weekdayFormat: i,
          weekendDays: l,
          getDayProps: a,
          excludeDate: c,
          minDate: u,
          maxDate: d,
          renderDay: f,
          hideOutsideDates: m,
          hideWeekdays: p,
          getDayAriaLabel: h,
          __getDayRef: S,
          __onDayKeyDown: v,
          __onDayClick: w,
          __onDayMouseEnter: y,
          __preventFocus: C,
          __stopPropagation: E,
          static: ne,
          withCellSpacing: b,
          ...oe,
        }),
      ],
    });
  });
Ga.classes = { ...Ha.classes, ...kr.classes };
Ga.displayName = "@mantine/dates/MonthLevel";
var Xw = { levelsGroup: "m_30b26e33" };
const wT = {},
  _r = G((e, t) => {
    const n = W("LevelsGroup", wT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        __staticSelector: c,
        ...u
      } = n,
      d = de({
        name: c || "LevelsGroup",
        classes: Xw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "levelsGroup",
      });
    return g.jsx(X, { ref: t, ...d("levelsGroup"), ...u });
  });
_r.classes = Xw;
_r.displayName = "@mantine/dates/LevelsGroup";
const xT = { numberOfColumns: 1 },
  Xa = G((e, t) => {
    const n = W("DecadeLevelGroup", xT, e),
      {
        decade: r,
        locale: o,
        minDate: s,
        maxDate: i,
        yearsListFormat: l,
        getYearControlProps: a,
        __onControlClick: c,
        __onControlMouseEnter: u,
        withCellSpacing: d,
        __preventFocus: f,
        nextIcon: m,
        previousIcon: p,
        nextLabel: h,
        previousLabel: S,
        onNext: v,
        onPrevious: w,
        nextDisabled: y,
        previousDisabled: b,
        classNames: C,
        styles: E,
        unstyled: R,
        __staticSelector: D,
        __stopPropagation: L,
        numberOfColumns: N,
        levelControlAriaLabel: F,
        decadeLabelFormat: B,
        size: V,
        vars: A,
        ...j
      } = n,
      P = x.useRef([]),
      T = Array(N)
        .fill(0)
        .map((_, k) => {
          const $ = J(r)
            .add(k * 10, "years")
            .toDate();
          return g.jsx(
            qa,
            {
              size: V,
              yearsListFormat: l,
              decade: $,
              withNext: k === N - 1,
              withPrevious: k === 0,
              decadeLabelFormat: B,
              __onControlClick: c,
              __onControlMouseEnter: u,
              __onControlKeyDown: (O, I) =>
                wp({
                  levelIndex: k,
                  rowIndex: I.rowIndex,
                  cellIndex: I.cellIndex,
                  event: O,
                  controlsRef: P,
                }),
              __getControlRef: (O, I, q) => {
                Array.isArray(P.current[k]) || (P.current[k] = []),
                  Array.isArray(P.current[k][O]) || (P.current[k][O] = []),
                  (P.current[k][O][I] = q);
              },
              levelControlAriaLabel: typeof F == "function" ? F($) : F,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              __stopPropagation: L,
              nextIcon: m,
              previousIcon: p,
              nextLabel: h,
              previousLabel: S,
              onNext: v,
              onPrevious: w,
              nextDisabled: y,
              previousDisabled: b,
              getYearControlProps: a,
              __staticSelector: D || "DecadeLevelGroup",
              classNames: C,
              styles: E,
              unstyled: R,
              withCellSpacing: d,
            },
            k
          );
        });
    return g.jsx(_r, {
      classNames: C,
      styles: E,
      __staticSelector: D || "DecadeLevelGroup",
      ref: t,
      size: V,
      unstyled: R,
      ...j,
      children: T,
    });
  });
Xa.classes = { ..._r.classes, ...qa.classes };
Xa.displayName = "@mantine/dates/DecadeLevelGroup";
const ST = { numberOfColumns: 1 },
  Qa = G((e, t) => {
    const n = W("YearLevelGroup", ST, e),
      {
        year: r,
        locale: o,
        minDate: s,
        maxDate: i,
        monthsListFormat: l,
        getMonthControlProps: a,
        __onControlClick: c,
        __onControlMouseEnter: u,
        withCellSpacing: d,
        __preventFocus: f,
        nextIcon: m,
        previousIcon: p,
        nextLabel: h,
        previousLabel: S,
        onNext: v,
        onPrevious: w,
        onLevelClick: y,
        nextDisabled: b,
        previousDisabled: C,
        hasNextLevel: E,
        classNames: R,
        styles: D,
        unstyled: L,
        __staticSelector: N,
        __stopPropagation: F,
        numberOfColumns: B,
        levelControlAriaLabel: V,
        yearLabelFormat: A,
        size: j,
        vars: P,
        ...T
      } = n,
      _ = x.useRef([]),
      k = Array(B)
        .fill(0)
        .map(($, O) => {
          const I = J(r).add(O, "years").toDate();
          return g.jsx(
            Ka,
            {
              size: j,
              monthsListFormat: l,
              year: I,
              withNext: O === B - 1,
              withPrevious: O === 0,
              yearLabelFormat: A,
              __stopPropagation: F,
              __onControlClick: c,
              __onControlMouseEnter: u,
              __onControlKeyDown: (q, Q) =>
                wp({
                  levelIndex: O,
                  rowIndex: Q.rowIndex,
                  cellIndex: Q.cellIndex,
                  event: q,
                  controlsRef: _,
                }),
              __getControlRef: (q, Q, ee) => {
                Array.isArray(_.current[O]) || (_.current[O] = []),
                  Array.isArray(_.current[O][q]) || (_.current[O][q] = []),
                  (_.current[O][q][Q] = ee);
              },
              levelControlAriaLabel: typeof V == "function" ? V(I) : V,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              nextIcon: m,
              previousIcon: p,
              nextLabel: h,
              previousLabel: S,
              onNext: v,
              onPrevious: w,
              onLevelClick: y,
              nextDisabled: b,
              previousDisabled: C,
              hasNextLevel: E,
              getMonthControlProps: a,
              classNames: R,
              styles: D,
              unstyled: L,
              __staticSelector: N || "YearLevelGroup",
              withCellSpacing: d,
            },
            O
          );
        });
    return g.jsx(_r, {
      classNames: R,
      styles: D,
      __staticSelector: N || "YearLevelGroup",
      ref: t,
      size: j,
      unstyled: L,
      ...T,
      children: k,
    });
  });
Qa.classes = { ...Ka.classes, ..._r.classes };
Qa.displayName = "@mantine/dates/YearLevelGroup";
const bT = { numberOfColumns: 1 },
  Ja = G((e, t) => {
    const n = W("MonthLevelGroup", bT, e),
      {
        month: r,
        locale: o,
        firstDayOfWeek: s,
        weekdayFormat: i,
        weekendDays: l,
        getDayProps: a,
        excludeDate: c,
        minDate: u,
        maxDate: d,
        renderDay: f,
        hideOutsideDates: m,
        hideWeekdays: p,
        getDayAriaLabel: h,
        __onDayClick: S,
        __onDayMouseEnter: v,
        withCellSpacing: w,
        __preventFocus: y,
        nextIcon: b,
        previousIcon: C,
        nextLabel: E,
        previousLabel: R,
        onNext: D,
        onPrevious: L,
        onLevelClick: N,
        nextDisabled: F,
        previousDisabled: B,
        hasNextLevel: V,
        classNames: A,
        styles: j,
        unstyled: P,
        numberOfColumns: T,
        levelControlAriaLabel: _,
        monthLabelFormat: k,
        __staticSelector: $,
        __stopPropagation: O,
        size: I,
        static: q,
        vars: Q,
        ...ee
      } = n,
      ne = x.useRef([]),
      te = Array(T)
        .fill(0)
        .map((me, oe) => {
          const le = J(r).add(oe, "months").toDate();
          return g.jsx(
            Ga,
            {
              month: le,
              withNext: oe === T - 1,
              withPrevious: oe === 0,
              monthLabelFormat: k,
              __stopPropagation: O,
              __onDayClick: S,
              __onDayMouseEnter: v,
              __onDayKeyDown: (Z, he) =>
                wp({
                  levelIndex: oe,
                  rowIndex: he.rowIndex,
                  cellIndex: he.cellIndex,
                  event: Z,
                  controlsRef: ne,
                }),
              __getDayRef: (Z, he, ae) => {
                Array.isArray(ne.current[oe]) || (ne.current[oe] = []),
                  Array.isArray(ne.current[oe][Z]) || (ne.current[oe][Z] = []),
                  (ne.current[oe][Z][he] = ae);
              },
              levelControlAriaLabel: typeof _ == "function" ? _(le) : _,
              locale: o,
              firstDayOfWeek: s,
              weekdayFormat: i,
              weekendDays: l,
              getDayProps: a,
              excludeDate: c,
              minDate: u,
              maxDate: d,
              renderDay: f,
              hideOutsideDates: m,
              hideWeekdays: p,
              getDayAriaLabel: h,
              __preventFocus: y,
              nextIcon: b,
              previousIcon: C,
              nextLabel: E,
              previousLabel: R,
              onNext: D,
              onPrevious: L,
              onLevelClick: N,
              nextDisabled: F,
              previousDisabled: B,
              hasNextLevel: V,
              classNames: A,
              styles: j,
              unstyled: P,
              __staticSelector: $ || "MonthLevelGroup",
              size: I,
              static: q,
              withCellSpacing: w,
            },
            oe
          );
        });
    return g.jsx(_r, {
      classNames: A,
      styles: j,
      __staticSelector: $ || "MonthLevelGroup",
      ref: t,
      size: I,
      ...ee,
      children: te,
    });
  });
Ja.classes = { ..._r.classes, ...Ga.classes };
Ja.displayName = "@mantine/dates/MonthLevelGroup";
const Zh = (e) => (e === "range" ? [null, null] : e === "multiple" ? [] : null);
function Qw({
  type: e,
  value: t,
  defaultValue: n,
  onChange: r,
  applyTimezone: o = !0,
}) {
  const s = x.useRef(e),
    i = pn(),
    [l, a, c] = sn({
      value: Mo("add", t, i.getTimezone(), !o),
      defaultValue: Mo("add", n, i.getTimezone(), !o),
      finalValue: Zh(e),
      onChange: (d) => {
        r == null || r(Mo("remove", d, i.getTimezone(), !o));
      },
    });
  let u = l;
  return (
    s.current !== e &&
      ((s.current = e), t === void 0 && ((u = n !== void 0 ? n : Zh(e)), a(u))),
    [u, a, c]
  );
}
function Gc(e, t) {
  return e ? (e === "month" ? 0 : e === "year" ? 1 : 2) : t || 0;
}
function CT(e) {
  return e === 0 ? "month" : e === 1 ? "year" : "decade";
}
function _s(e, t, n) {
  return CT(Xb(Gc(e, 0), Gc(t, 0), Gc(n, 2)));
}
const ET = {
    maxLevel: "decade",
    minLevel: "month",
    __updateDateOnYearSelect: !0,
    __updateDateOnMonthSelect: !0,
  },
  Za = G((e, t) => {
    const n = W("Calendar", ET, e),
      {
        vars: r,
        maxLevel: o,
        minLevel: s,
        defaultLevel: i,
        level: l,
        onLevelChange: a,
        date: c,
        defaultDate: u,
        onDateChange: d,
        numberOfColumns: f,
        columnsToScroll: m,
        ariaLabels: p,
        onYearSelect: h,
        onMonthSelect: S,
        onYearMouseEnter: v,
        onMonthMouseEnter: w,
        __updateDateOnYearSelect: y,
        __updateDateOnMonthSelect: b,
        firstDayOfWeek: C,
        weekdayFormat: E,
        weekendDays: R,
        getDayProps: D,
        excludeDate: L,
        renderDay: N,
        hideOutsideDates: F,
        hideWeekdays: B,
        getDayAriaLabel: V,
        monthLabelFormat: A,
        nextIcon: j,
        previousIcon: P,
        __onDayClick: T,
        __onDayMouseEnter: _,
        withCellSpacing: k,
        monthsListFormat: $,
        getMonthControlProps: O,
        yearLabelFormat: I,
        yearsListFormat: q,
        getYearControlProps: Q,
        decadeLabelFormat: ee,
        classNames: ne,
        styles: te,
        unstyled: me,
        minDate: oe,
        maxDate: le,
        locale: Z,
        __staticSelector: he,
        size: ae,
        __preventFocus: se,
        __stopPropagation: _e,
        onNextDecade: Ie,
        onPreviousDecade: ve,
        onNextYear: Ke,
        onPreviousYear: Re,
        onNextMonth: $e,
        onPreviousMonth: Y,
        static: re,
        __timezoneApplied: ie,
        ...xe
      } = n,
      { resolvedClassNames: Le, resolvedStyles: ht } = so({
        classNames: ne,
        styles: te,
        props: n,
      }),
      [Se, Ae] = sn({
        value: l ? _s(l, s, o) : void 0,
        defaultValue: i ? _s(i, s, o) : void 0,
        finalValue: _s(void 0, s, o),
        onChange: a,
      }),
      [It, Ue] = Qw({
        type: "default",
        value: c,
        defaultValue: u,
        onChange: d,
        applyTimezone: !ie,
      }),
      gt = {
        __staticSelector: he || "Calendar",
        styles: ht,
        classNames: Le,
        unstyled: me,
        size: ae,
      },
      Pn = pn(),
      Ge = m || f || 1,
      lt = It || Mo("add", new Date(), Pn.getTimezone()),
      fs = () => {
        const Ce = J(lt).add(Ge, "month").toDate();
        $e == null || $e(Ce), Ue(Ce);
      },
      yt = () => {
        const Ce = J(lt).subtract(Ge, "month").toDate();
        Y == null || Y(Ce), Ue(Ce);
      },
      Tn = () => {
        const Ce = J(lt).add(Ge, "year").toDate();
        Ke == null || Ke(Ce), Ue(Ce);
      },
      lo = () => {
        const Ce = J(lt).subtract(Ge, "year").toDate();
        Re == null || Re(Ce), Ue(Ce);
      },
      ao = () => {
        const Ce = J(lt)
          .add(10 * Ge, "year")
          .toDate();
        Ie == null || Ie(Ce), Ue(Ce);
      },
      hn = () => {
        const Ce = J(lt)
          .subtract(10 * Ge, "year")
          .toDate();
        ve == null || ve(Ce), Ue(Ce);
      };
    return g.jsxs(X, {
      ref: t,
      size: ae,
      "data-calendar": !0,
      ...xe,
      children: [
        Se === "month" &&
          g.jsx(Ja, {
            month: lt,
            minDate: oe,
            maxDate: le,
            firstDayOfWeek: C,
            weekdayFormat: E,
            weekendDays: R,
            getDayProps: D,
            excludeDate: L,
            renderDay: N,
            hideOutsideDates: F,
            hideWeekdays: B,
            getDayAriaLabel: V,
            onNext: fs,
            onPrevious: yt,
            hasNextLevel: o !== "month",
            onLevelClick: () => Ae("year"),
            numberOfColumns: f,
            locale: Z,
            levelControlAriaLabel: p == null ? void 0 : p.monthLevelControl,
            nextLabel: p == null ? void 0 : p.nextMonth,
            nextIcon: j,
            previousLabel: p == null ? void 0 : p.previousMonth,
            previousIcon: P,
            monthLabelFormat: A,
            __onDayClick: T,
            __onDayMouseEnter: _,
            __preventFocus: se,
            __stopPropagation: _e,
            static: re,
            withCellSpacing: k,
            ...gt,
          }),
        Se === "year" &&
          g.jsx(Qa, {
            year: lt,
            numberOfColumns: f,
            minDate: oe,
            maxDate: le,
            monthsListFormat: $,
            getMonthControlProps: O,
            locale: Z,
            onNext: Tn,
            onPrevious: lo,
            hasNextLevel: o !== "month" && o !== "year",
            onLevelClick: () => Ae("decade"),
            levelControlAriaLabel: p == null ? void 0 : p.yearLevelControl,
            nextLabel: p == null ? void 0 : p.nextYear,
            nextIcon: j,
            previousLabel: p == null ? void 0 : p.previousYear,
            previousIcon: P,
            yearLabelFormat: I,
            __onControlMouseEnter: w,
            __onControlClick: (Ce, Tt) => {
              b && Ue(Tt), Ae(_s("month", s, o)), S == null || S(Tt);
            },
            __preventFocus: se,
            __stopPropagation: _e,
            withCellSpacing: k,
            ...gt,
          }),
        Se === "decade" &&
          g.jsx(Xa, {
            decade: lt,
            minDate: oe,
            maxDate: le,
            yearsListFormat: q,
            getYearControlProps: Q,
            locale: Z,
            onNext: ao,
            onPrevious: hn,
            numberOfColumns: f,
            nextLabel: p == null ? void 0 : p.nextDecade,
            nextIcon: j,
            previousLabel: p == null ? void 0 : p.previousDecade,
            previousIcon: P,
            decadeLabelFormat: ee,
            __onControlMouseEnter: v,
            __onControlClick: (Ce, Tt) => {
              y && Ue(Tt), Ae(_s("year", s, o)), h == null || h(Tt);
            },
            __preventFocus: se,
            __stopPropagation: _e,
            withCellSpacing: k,
            ...gt,
          }),
      ],
    });
  });
Za.classes = { ...Xa.classes, ...Qa.classes, ...Ja.classes };
Za.displayName = "@mantine/dates/Calendar";
function eg(e, t) {
  const n = [...t].sort((r, o) => r.getTime() - o.getTime());
  return (
    J(n[0]).startOf("day").subtract(1, "ms").isBefore(e) &&
    J(n[1]).endOf("day").add(1, "ms").isAfter(e)
  );
}
function kT({
  type: e,
  level: t,
  value: n,
  defaultValue: r,
  onChange: o,
  allowSingleDateInRange: s,
  allowDeselect: i,
  onMouseLeave: l,
  applyTimezone: a = !0,
}) {
  const [c, u] = Qw({
      type: e,
      value: n,
      defaultValue: r,
      onChange: o,
      applyTimezone: a,
    }),
    [d, f] = x.useState(e === "range" && c[0] && !c[1] ? c[0] : null),
    [m, p] = x.useState(null),
    h = (E) => {
      if (e === "range") {
        if (d instanceof Date && !c[1]) {
          if (J(E).isSame(d, t) && !s) {
            f(null), p(null), u([null, null]);
            return;
          }
          const R = [E, d];
          R.sort((D, L) => D.getTime() - L.getTime()), u(R), p(null), f(null);
          return;
        }
        if (c[0] && !c[1] && J(E).isSame(c[0], t) && !s) {
          f(null), p(null), u([null, null]);
          return;
        }
        u([E, null]), p(null), f(E);
        return;
      }
      if (e === "multiple") {
        c.some((R) => J(R).isSame(E, t))
          ? u(c.filter((R) => !J(R).isSame(E, t)))
          : u([...c, E]);
        return;
      }
      c && i && J(E).isSame(c, t) ? u(null) : u(E);
    },
    S = (E) =>
      d instanceof Date && m instanceof Date
        ? eg(E, [m, d])
        : c[0] instanceof Date && c[1] instanceof Date
        ? eg(E, c)
        : !1,
    v =
      e === "range"
        ? (E) => {
            l == null || l(E), p(null);
          }
        : l,
    w = (E) =>
      c[0] instanceof Date && J(E).isSame(c[0], t)
        ? !(m && J(m).isBefore(c[0]))
        : !1,
    y = (E) =>
      c[1] instanceof Date
        ? J(E).isSame(c[1], t)
        : !(c[0] instanceof Date) || !m
        ? !1
        : J(m).isBefore(c[0]) && J(E).isSame(c[0], t),
    b = (E) => {
      if (e === "range")
        return {
          selected: c.some((D) => D && J(D).isSame(E, t)),
          inRange: S(E),
          firstInRange: w(E),
          lastInRange: y(E),
          "data-autofocus": (!!c[0] && J(c[0]).isSame(E, t)) || void 0,
        };
      if (e === "multiple")
        return {
          selected: c.some((D) => D && J(D).isSame(E, t)),
          "data-autofocus": (!!c[0] && J(c[0]).isSame(E, t)) || void 0,
        };
      const R = J(c).isSame(E, t);
      return { selected: R, "data-autofocus": R || void 0 };
    },
    C = e === "range" && d ? p : () => {};
  return (
    x.useEffect(() => {
      e === "range" && !c[0] && !c[1] && f(null);
    }, [n]),
    {
      onDateChange: h,
      onRootMouseLeave: v,
      onHoveredDateChange: C,
      getControlProps: b,
      _value: c,
      setValue: u,
    }
  );
}
const _T = { type: "default", defaultLevel: "month", numberOfColumns: 1 },
  bp = G((e, t) => {
    const n = W("DatePicker", _T, e),
      {
        classNames: r,
        styles: o,
        vars: s,
        type: i,
        defaultValue: l,
        value: a,
        onChange: c,
        __staticSelector: u,
        getDayProps: d,
        allowSingleDateInRange: f,
        allowDeselect: m,
        onMouseLeave: p,
        numberOfColumns: h,
        hideOutsideDates: S,
        __onDayMouseEnter: v,
        __onDayClick: w,
        __timezoneApplied: y,
        ...b
      } = n,
      {
        onDateChange: C,
        onRootMouseLeave: E,
        onHoveredDateChange: R,
        getControlProps: D,
      } = kT({
        type: i,
        level: "day",
        allowDeselect: m,
        allowSingleDateInRange: f,
        value: a,
        defaultValue: l,
        onChange: c,
        onMouseLeave: p,
        applyTimezone: !y,
      }),
      { resolvedClassNames: L, resolvedStyles: N } = so({
        classNames: r,
        styles: o,
        props: n,
      }),
      F = pn();
    return g.jsx(Za, {
      ref: t,
      minLevel: "month",
      classNames: L,
      styles: N,
      __staticSelector: u || "DatePicker",
      onMouseLeave: E,
      numberOfColumns: h,
      hideOutsideDates: S ?? h !== 1,
      __onDayMouseEnter: (B, V) => {
        R(V), v == null || v(B, V);
      },
      __onDayClick: (B, V) => {
        C(V), w == null || w(B, V);
      },
      getDayProps: (B) => ({ ...D(B), ...(d == null ? void 0 : d(B)) }),
      ...b,
      date: Mo("add", b.date, F.getTimezone(), y),
      __timezoneApplied: !0,
    });
  });
bp.classes = Za.classes;
bp.displayName = "@mantine/dates/DatePicker";
const Cp = (e) => {
  const { title: t, description: n, form: r, options: o, field_id: s } = e,
    i = o.map((u) => u.option),
    [l, a] = x.useState(o.at(0));
  x.useEffect(() => {
    r.setFieldValue(s, l);
  }, []);
  const c = (u) => {
    a(u.value), r.setFieldValue(s, u.value);
  };
  return g.jsx(dp, {
    label: t,
    description: n,
    data: i,
    defaultValue: i.at(0),
    onChange: (u, d) => c(d),
    searchable: !0,
  });
};
Cp.defaultProps = {};
Cp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  options: U.array,
};
const Ep = (e) => {
  const { title: t, description: n, form: r, options: o, field_id: s } = e,
    i = new Date(),
    l = new Date();
  l.setFullYear(i.getFullYear() + 1);
  const [a, c] = x.useState(l),
    [u, d] = x.useState(a),
    [f, { open: m, close: p }] = oi(!1);
  x.useEffect(() => {
    localStorage.setItem("embargo", a.toISOString().split("T")[0]);
  }, [a]);
  const h = () =>
      g.jsx(rr, {
        children: g.jsx(xn, {
          onClick: m,
          variant: "default",
          children: "Change embargo date",
        }),
      }),
    S = (w) => {
      const y = new Date(i);
      y.setMonth(i.getMonth() + w), c(y);
    },
    v = () =>
      a.getDate().toString() +
      " " +
      a.toLocaleString("default", { month: "long" }) +
      " " +
      a.getFullYear().toString();
  return g.jsxs("div", {
    children: [
      g.jsxs("header", {
        className: "",
        children: [
          g.jsx("h2", { className: "", children: t }),
          g.jsx("h4", { children: v() }),
          h(),
        ],
      }),
      g.jsxs(fn, {
        opened: f,
        onClose: p,
        title: "Select embargo date",
        centered: !0,
        children: [
          g.jsxs(rr, {
            justify: "center",
            children: [
              g.jsx(xn, {
                variant: "default",
                onClick: () => {
                  S(6);
                },
                children: "6 months",
              }),
              g.jsx(xn, {
                variant: "default",
                onClick: () => {
                  S(12);
                },
                children: "12 months",
              }),
              g.jsx(xn, {
                variant: "default",
                onClick: () => {
                  S(18);
                },
                children: "18 months",
              }),
            ],
          }),
          g.jsx(rr, {
            justify: "center",
            children: g.jsxs("p", {
              children: ["New Embargo: ", g.jsx("b", { children: v() })],
            }),
          }),
          g.jsx(rr, {
            justify: "center",
            children: g.jsx(bp, { defaultDate: i, value: a, onChange: c }),
          }),
          g.jsxs(rr, {
            justify: "center",
            children: [
              g.jsx(xn, {
                variant: "default",
                onClick: () => {
                  d(a), p();
                },
                children: "Accept",
              }),
              g.jsx(xn, {
                variant: "default",
                onClick: () => {
                  c(u), p();
                },
                children: "Cancel",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
Ep.defaultProps = {};
Ep.propTypes = {
  title: U.string.isRequired,
  description: U.string,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  options: U.array,
};
const Jw = "",
  RT = "generic",
  DT = Jw + "/profile/profile/",
  Zw = Jw + "/api/submissions/",
  PT = "https://helpdesk.gfbio.org/browse/",
  TT = (e) => {
    const { title: t, description: n, form: r, options: o, field_id: s } = e,
      i = () => {
        const l = JSON.parse(localStorage.getItem("submission")),
          a = l.broker_submission_id || "",
          c = [];
        let u = 0;
        const d = `mailto:info@gfbio.org?subject=Help with Submission ${a}&body=Dear GFBio Team,`;
        return (
          a.length > 0 &&
            (c.push(
              g.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: g.jsxs("a", {
                    children: [
                      g.jsx("i", { className: "", "aria-hidden": "true" }),
                      "Submission Id: ",
                      g.jsx("br", {}),
                      g.jsx("div", { className: "", children: a }),
                    ],
                  }),
                },
                u
              )
            ),
            u++),
          l.accessionId &&
            l.accessionId.length > 0 &&
            (c.push(
              g.jsxs("div", {
                children: [
                  g.jsx("i", { className: "", "aria-hidden": "true" }),
                  "ENA Accession:",
                  g.jsx("br", {}),
                ],
              })
            ),
            l.accessionId.forEach((f) => {
              c.push(
                g.jsx(
                  "li",
                  {
                    className: "list-group-item",
                    children: g.jsxs("a", {
                      children: [
                        g.jsxs("div", {
                          className: "",
                          children: [
                            g.jsx("span", {
                              style: { fontWeight: 600 },
                              children: "ID",
                            }),
                            ": ",
                            f.pid,
                          ],
                        }),
                        g.jsxs("div", {
                          className: "",
                          style: { marginTop: 0 },
                          children: [
                            g.jsx("span", {
                              style: { fontWeight: 600 },
                              children: "Status",
                            }),
                            ":",
                            " ",
                            f.status,
                          ],
                        }),
                      ],
                    }),
                  },
                  u
                )
              ),
                u++;
            })),
          l.issue &&
            l.issue.length > 0 &&
            (c.push(
              g.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: g.jsxs("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "external",
                    href: PT + l.issue,
                    children: [
                      g.jsx("i", { className: "", "aria-hidden": "true" }),
                      "Ticket:",
                      g.jsx("br", {}),
                      g.jsx("div", { className: "", children: l.issue }),
                    ],
                  }),
                },
                u
              )
            ),
            u++),
          l.readOnly &&
            (c.push(
              g.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: g.jsxs("a", {
                    children: [
                      g.jsx("i", { className: "", "aria-hidden": "true" }),
                      "Status: ",
                      g.jsx("br", {}),
                      g.jsx("div", {
                        className: "",
                        children:
                          "Your data was already archived and only the embargo date can be changed. If you need to make other changes, please contact our team by replying to the corresponding Helpdesk ticket.",
                      }),
                    ],
                  }),
                },
                u
              )
            ),
            u++),
          c.push(
            g.jsx(
              "li",
              {
                className: "list-group-item",
                children: g.jsxs("a", {
                  href: d,
                  className: "external",
                  children: [
                    g.jsx("i", { className: "", "aria-hidden": "true" }),
                    "Do you need Help ?",
                  ],
                }),
              },
              u
            )
          ),
          u++,
          c
        );
      };
    return g.jsxs("div", {
      className: "",
      children: [
        g.jsxs("header", {
          className: "",
          children: [
            g.jsx("h2", { className: "", children: t }),
            g.jsx("p", { className: "" }),
          ],
        }),
        g.jsx("div", {
          className: "",
          children: g.jsx("ul", {
            className: "list-group list-group-flush",
            children: i(),
          }),
        }),
      ],
    });
  },
  NT = () => {
    const e = [
      {
        id: "molecular_template",
        name: "Molecular Data Template:",
        template_link:
          "https://gitlab-pe.gwdg.de/gfbio/molecular-submission-templates/-/blob/master/full_template.csv?ref_type=heads",
        description_link:
          "https://gitlab-pe.gwdg.de/gfbio/molecular-submission-templates/-/blob/master/Template-Description.md",
      },
      {
        id: "biodiversity_template",
        name: "Biodiversity, Ecological and Collection Data Template:",
        template_link:
          "https://species-id.net/o/media/1/1d/GFBio_data_submission_template.zip",
        description_link:
          "https://gfbio.biowikifarm.net/wiki/Data_submission_templates_for_biodiversity,_ecological_and_collection_data",
      },
    ];
    return g.jsxs("div", {
      children: [
        g.jsxs("h4", {
          children: [
            "Metadata Templates",
            " ",
            g.jsxs(zr, {
              width: 320,
              shadow: "md",
              position: "right",
              withArrow: !0,
              children: [
                g.jsx(zr.Target, {
                  children: g.jsx("i", {
                    className: "fa fa-question-circle-o",
                    "aria-hidden": "true",
                  }),
                }),
                g.jsx(zr.Dropdown, {
                  children: g.jsx("p", {
                    children:
                      "Metadata templates are provided to help you structure your data submission. Using a metadata template is optional, but highly recommended. You can modify the existing templates to your needs.",
                  }),
                }),
              ],
            }),
          ],
        }),
        g.jsx("ul", {
          className: "list-group list-group-flush",
          children: e.map((t) =>
            g.jsxs(
              "li",
              {
                className: "list-group-item",
                children: [
                  t.name,
                  g.jsx("br", {}),
                  g.jsxs("a", {
                    href: t.template_link,
                    target: "_blank",
                    children: [
                      g.jsx("i", {
                        className: "fa fa-download",
                        "aria-hidden": "true",
                      }),
                      " CSV Template",
                    ],
                  }),
                  g.jsx("br", {}),
                  g.jsxs("a", {
                    href: t.description_link,
                    target: "_blank",
                    children: [
                      g.jsx("i", {
                        className: "fa fa-book",
                        "aria-hidden": "true",
                      }),
                      " Template Description",
                    ],
                  }),
                ],
              },
              t.id
            )
          ),
        }),
      ],
    });
  },
  kp = (e) => {
    const {
      title: t,
      description: n,
      form: r,
      options: o,
      field_id: s,
      default_value: i,
    } = e;
    x.useEffect(() => {
      const a = i ? i.split(",") : [];
      r.setFieldValue(s, a);
    }, []);
    const l = o.map((a) => a.option);
    return g.jsx("div", {
      children: g.jsx(
        ai.Group,
        {
          label: t,
          description: n,
          ...r.getInputProps(s),
          children: l.map(function (a) {
            return g.jsx(ai, { value: a, label: a });
          }),
        },
        r.key(s)
      ),
    });
  };
kp.defaultProps = { default_value: "" };
kp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
  default_value: U.string,
};
const _p = (e) => {
  const {
      title: t,
      description: n,
      form: r,
      options: o,
      field_id: s,
      default_value: i,
    } = e,
    l = i ? i.split(",") : [];
  x.useEffect(() => {
    r.setFieldValue(s, l);
  }, []);
  const a = (u) => {
      r.setFieldValue(s, u);
    },
    c = o.map((u) => ({ label: u.option, value: u.option }));
  return g.jsx("div", {
    children: g.jsx(up, {
      defaultValue: l,
      data: c,
      label: t,
      description: n,
      placeholder: "Select all matching",
      onChange: (u) => {
        a(u);
      },
    }),
  });
};
_p.defaultProps = { default_value: "" };
_p.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
  default_value: U.string,
};
const Rp = (e) => {
  const {
    title: t,
    description: n,
    mandatory: r,
    form: o,
    field_id: s,
    placeholder: i,
  } = e;
  return g.jsx(
    fp,
    {
      label: t,
      description: n,
      placeholder: i,
      required: r,
      ...o.getInputProps(s),
    },
    o.key(s)
  );
};
Rp.defaultProps = { placeholder: "" };
Rp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const Dp = (e) => {
  const { title: t, description: n, form: r, field_id: o, placeholder: s } = e;
  return g.jsx(
    sp,
    {
      label: t,
      description: n,
      placeholder: s,
      autosize: !0,
      minRows: 2,
      ...r.getInputProps(o),
    },
    r.key(o)
  );
};
Dp.defaultProps = { placeholder: "" };
Dp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const Ql = (e) => {
  const {
    title: t,
    description: n,
    mandatory: r,
    form: o,
    field_id: s,
    placeholder: i,
  } = e;
  return g.jsx(
    Ba,
    {
      label: t,
      description: n,
      placeholder: i,
      required: r,
      ...o.getInputProps(s),
    },
    o.key(s)
  );
};
Ql.defaultProps = { placeholder: "" };
Ql.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const e1 = ({ field: e, form: t }) => {
  const n = {
    title: e.title,
    description: e.description,
    default_value: e.default,
    mandatory: e.mandatory,
    options: e.options,
    field_id: e.field_id,
    form: t,
  };
  switch (e.field_type.type) {
    case "text-field":
      return g.jsx(Ql, { ...n });
    case "text-area":
      return g.jsx(Dp, { ...n });
    case "select-field":
      return g.jsx(Cp, { ...n });
    case "file-upload":
      return g.jsx(vp, { ...n });
    case "collapsible-selector":
      return g.jsx(pp, { ...n });
    case "metadata-template":
      return g.jsx(NT, { ...n });
    case "info-box":
      return g.jsx(TT, { ...n });
    case "multiselect-checkboxes":
      return g.jsx(kp, { ...n });
    case "multiselect-dropdown":
      return g.jsx(_p, { ...n });
    case "embargo-date-picker":
      return g.jsx(Ep, { ...n });
    case "data-url-field":
      return g.jsx(mp, { ...n });
    case "tags-input":
      return g.jsx(Rp, { ...n });
    default:
      return g.jsx(Ql, { ...n });
  }
};
e1.propTypes = { field: U.object.isRequired, form: U.object.isRequired };
function t1(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: OT } = Object.prototype,
  { getPrototypeOf: Pp } = Object,
  ec = ((e) => (t) => {
    const n = OT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  mn = (e) => ((e = e.toLowerCase()), (t) => ec(t) === e),
  tc = (e) => (t) => typeof t === e,
  { isArray: us } = Array,
  ui = tc("undefined");
function jT(e) {
  return (
    e !== null &&
    !ui(e) &&
    e.constructor !== null &&
    !ui(e.constructor) &&
    Wt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const n1 = mn("ArrayBuffer");
function $T(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && n1(e.buffer)),
    t
  );
}
const LT = tc("string"),
  Wt = tc("function"),
  r1 = tc("number"),
  nc = (e) => e !== null && typeof e == "object",
  AT = (e) => e === !0 || e === !1,
  hl = (e) => {
    if (ec(e) !== "object") return !1;
    const t = Pp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  FT = mn("Date"),
  MT = mn("File"),
  IT = mn("Blob"),
  zT = mn("FileList"),
  BT = (e) => nc(e) && Wt(e.pipe),
  VT = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Wt(e.append) &&
          ((t = ec(e)) === "formdata" ||
            (t === "object" &&
              Wt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  HT = mn("URLSearchParams"),
  [WT, UT, YT, qT] = ["ReadableStream", "Request", "Response", "Headers"].map(
    mn
  ),
  KT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), us(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let l;
    for (r = 0; r < i; r++) (l = s[r]), t.call(null, e[l], l, e);
  }
}
function o1(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const s1 =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  i1 = (e) => !ui(e) && e !== s1;
function cd() {
  const { caseless: e } = (i1(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && o1(t, o)) || o;
      hl(t[s]) && hl(r)
        ? (t[s] = cd(t[s], r))
        : hl(r)
        ? (t[s] = cd({}, r))
        : us(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && bi(arguments[r], n);
  return t;
}
const GT = (e, t, n, { allOwnKeys: r } = {}) => (
    bi(
      t,
      (o, s) => {
        n && Wt(o) ? (e[s] = t1(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  XT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  QT = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  JT = (e, t, n, r) => {
    let o, s, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && Pp(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ZT = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  eN = (e) => {
    if (!e) return null;
    if (us(e)) return e;
    let t = e.length;
    if (!r1(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  tN = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Pp(Uint8Array)),
  nN = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  rN = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  oN = mn("HTMLFormElement"),
  sN = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  tg = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  iN = mn("RegExp"),
  l1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    bi(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  lN = (e) => {
    l1(e, (t, n) => {
      if (Wt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Wt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  aN = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return us(e) ? r(e) : r(String(e).split(t)), n;
  },
  cN = () => {},
  uN = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Xc = "abcdefghijklmnopqrstuvwxyz",
  ng = "0123456789",
  a1 = { DIGIT: ng, ALPHA: Xc, ALPHA_DIGIT: Xc + Xc.toUpperCase() + ng },
  dN = (e = 16, t = a1.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function fN(e) {
  return !!(
    e &&
    Wt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const pN = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (nc(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = us(r) ? [] : {};
            return (
              bi(r, (i, l) => {
                const a = n(i, o + 1);
                !ui(a) && (s[l] = a);
              }),
              (t[o] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  mN = mn("AsyncFunction"),
  hN = (e) => e && (nc(e) || Wt(e)) && Wt(e.then) && Wt(e.catch),
  M = {
    isArray: us,
    isArrayBuffer: n1,
    isBuffer: jT,
    isFormData: VT,
    isArrayBufferView: $T,
    isString: LT,
    isNumber: r1,
    isBoolean: AT,
    isObject: nc,
    isPlainObject: hl,
    isReadableStream: WT,
    isRequest: UT,
    isResponse: YT,
    isHeaders: qT,
    isUndefined: ui,
    isDate: FT,
    isFile: MT,
    isBlob: IT,
    isRegExp: iN,
    isFunction: Wt,
    isStream: BT,
    isURLSearchParams: HT,
    isTypedArray: tN,
    isFileList: zT,
    forEach: bi,
    merge: cd,
    extend: GT,
    trim: KT,
    stripBOM: XT,
    inherits: QT,
    toFlatObject: JT,
    kindOf: ec,
    kindOfTest: mn,
    endsWith: ZT,
    toArray: eN,
    forEachEntry: nN,
    matchAll: rN,
    isHTMLForm: oN,
    hasOwnProperty: tg,
    hasOwnProp: tg,
    reduceDescriptors: l1,
    freezeMethods: lN,
    toObjectSet: aN,
    toCamelCase: sN,
    noop: cN,
    toFiniteNumber: uN,
    findKey: o1,
    global: s1,
    isContextDefined: i1,
    ALPHABET: a1,
    generateString: dN,
    isSpecCompliantForm: fN,
    toJSONObject: pN,
    isAsyncFn: mN,
    isThenable: hN,
  };
function ce(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
M.inherits(ce, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const c1 = ce.prototype,
  u1 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  u1[e] = { value: e };
});
Object.defineProperties(ce, u1);
Object.defineProperty(c1, "isAxiosError", { value: !0 });
ce.from = (e, t, n, r, o, s) => {
  const i = Object.create(c1);
  return (
    M.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    ce.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const gN = null;
function ud(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function d1(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rg(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = d1(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function yN(e) {
  return M.isArray(e) && !e.some(ud);
}
const vN = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rc(e, t, n) {
  if (!M.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = M.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, S) {
        return !M.isUndefined(S[h]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || u,
    s = n.dots,
    i = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && M.isSpecCompliantForm(t);
  if (!M.isFunction(o)) throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (M.isDate(p)) return p.toISOString();
    if (!a && M.isBlob(p))
      throw new ce("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(p) || M.isTypedArray(p)
      ? a && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, h, S) {
    let v = p;
    if (p && !S && typeof p == "object") {
      if (M.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (M.isArray(p) && yN(p)) ||
        ((M.isFileList(p) || M.endsWith(h, "[]")) && (v = M.toArray(p)))
      )
        return (
          (h = d1(h)),
          v.forEach(function (y, b) {
            !(M.isUndefined(y) || y === null) &&
              t.append(
                i === !0 ? rg([h], b, s) : i === null ? h : h + "[]",
                c(y)
              );
          }),
          !1
        );
    }
    return ud(p) ? !0 : (t.append(rg(S, h, s), c(p)), !1);
  }
  const d = [],
    f = Object.assign(vN, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: ud,
    });
  function m(p, h) {
    if (!M.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(p),
        M.forEach(p, function (v, w) {
          (!(M.isUndefined(v) || v === null) &&
            o.call(t, v, M.isString(w) ? w.trim() : w, h, f)) === !0 &&
            m(v, h ? h.concat(w) : [w]);
        }),
        d.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function og(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Tp(e, t) {
  (this._pairs = []), e && rc(e, this, t);
}
const f1 = Tp.prototype;
f1.append = function (t, n) {
  this._pairs.push([t, n]);
};
f1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, og);
      }
    : og;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function wN(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function p1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || wN,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = M.isURLSearchParams(t) ? t.toString() : new Tp(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class sg {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    M.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const m1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  xN = typeof URLSearchParams < "u" ? URLSearchParams : Tp,
  SN = typeof FormData < "u" ? FormData : null,
  bN = typeof Blob < "u" ? Blob : null,
  CN = {
    isBrowser: !0,
    classes: { URLSearchParams: xN, FormData: SN, Blob: bN },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Np = typeof window < "u" && typeof document < "u",
  EN = ((e) => Np && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  kN =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  _N = (Np && window.location.href) || "http://localhost",
  RN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Np,
        hasStandardBrowserEnv: EN,
        hasStandardBrowserWebWorkerEnv: kN,
        origin: _N,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rn = { ...RN, ...CN };
function DN(e, t) {
  return rc(
    e,
    new rn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return rn.isNode && M.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function PN(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function TN(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function h1(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      a = s >= n.length;
    return (
      (i = !i && M.isArray(o) ? o.length : i),
      a
        ? (M.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !l)
        : ((!o[i] || !M.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && M.isArray(o[i]) && (o[i] = TN(o[i])),
          !l)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const n = {};
    return (
      M.forEachEntry(e, (r, o) => {
        t(PN(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function NN(e, t, n) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ci = {
  transitional: m1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = M.isObject(t);
      if ((s && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
        return o ? JSON.stringify(h1(t)) : t;
      if (
        M.isArrayBuffer(t) ||
        M.isBuffer(t) ||
        M.isStream(t) ||
        M.isFile(t) ||
        M.isBlob(t) ||
        M.isReadableStream(t)
      )
        return t;
      if (M.isArrayBufferView(t)) return t.buffer;
      if (M.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return DN(t, this.formSerializer).toString();
        if ((l = M.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return rc(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), NN(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ci.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (M.isResponse(t) || M.isReadableStream(t)) return t;
      if (t && M.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? ce.from(l, ce.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: rn.classes.FormData, Blob: rn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ci.headers[e] = {};
});
const ON = M.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  jN = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && ON[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ig = Symbol("internals");
function Rs(e) {
  return e && String(e).trim().toLowerCase();
}
function gl(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(gl) : String(e);
}
function $N(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const LN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qc(e, t, n, r, o) {
  if (M.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!M.isString(t))) {
    if (M.isString(r)) return t.indexOf(r) !== -1;
    if (M.isRegExp(r)) return r.test(t);
  }
}
function AN(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function FN(e, t) {
  const n = M.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0,
    });
  });
}
class Rt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(l, a, c) {
      const u = Rs(a);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = M.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || (c === void 0 && o[d] !== !1)) &&
        (o[d || a] = gl(l));
    }
    const i = (l, a) => M.forEach(l, (c, u) => s(c, u, a));
    if (M.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (M.isString(t) && (t = t.trim()) && !LN(t)) i(jN(t), n);
    else if (M.isHeaders(t)) for (const [l, a] of t.entries()) s(a, l, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Rs(t)), t)) {
      const r = M.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return $N(o);
        if (M.isFunction(n)) return n.call(this, o, r);
        if (M.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Rs(t)), t)) {
      const r = M.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Qc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = Rs(i)), i)) {
        const l = M.findKey(r, i);
        l && (!n || Qc(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return M.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Qc(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      M.forEach(this, (o, s) => {
        const i = M.findKey(r, s);
        if (i) {
          (n[i] = gl(o)), delete n[s];
          return;
        }
        const l = t ? AN(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = gl(o)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      M.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && M.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[ig] = this[ig] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const l = Rs(i);
      r[l] || (FN(o, i), (r[l] = !0));
    }
    return M.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Rt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
M.reduceDescriptors(Rt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
M.freezeMethods(Rt);
function Jc(e, t) {
  const n = this || Ci,
    r = t || n,
    o = Rt.from(r.headers);
  let s = r.data;
  return (
    M.forEach(e, function (l) {
      s = l.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function g1(e) {
  return !!(e && e.__CANCEL__);
}
function ds(e, t, n) {
  ce.call(this, e ?? "canceled", ce.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
M.inherits(ds, ce, { __CANCEL__: !0 });
function y1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ce(
          "Request failed with status code " + n.status,
          [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function MN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function IN(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    s = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const c = Date.now(),
        u = r[s];
      i || (i = c), (n[o] = a), (r[o] = c);
      let d = s,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), c - i < t)) return;
      const m = u && c - u;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function zN(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let o = null;
  return function () {
    const i = this === !0,
      l = Date.now();
    if (i || l - n > r)
      return (
        o && (clearTimeout(o), (o = null)), (n = l), e.apply(null, arguments)
      );
    o ||
      (o = setTimeout(
        () => ((o = null), (n = Date.now()), e.apply(null, arguments)),
        r - (l - n)
      ));
  };
}
const Jl = (e, t, n = 3) => {
    let r = 0;
    const o = IN(50, 250);
    return zN((s) => {
      const i = s.loaded,
        l = s.lengthComputable ? s.total : void 0,
        a = i - r,
        c = o(a),
        u = i <= l;
      r = i;
      const d = {
        loaded: i,
        total: l,
        progress: l ? i / l : void 0,
        bytes: a,
        rate: c || void 0,
        estimated: c && l && u ? (l - i) / c : void 0,
        event: s,
        lengthComputable: l != null,
      };
      (d[t ? "download" : "upload"] = !0), e(d);
    }, n);
  },
  BN = rn.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(s) {
          let i = s;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (i) {
            const l = M.isString(i) ? o(i) : i;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  VN = rn.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, s) {
          const i = [e + "=" + encodeURIComponent(t)];
          M.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            M.isString(r) && i.push("path=" + r),
            M.isString(o) && i.push("domain=" + o),
            s === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function HN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function WN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function v1(e, t) {
  return e && !HN(t) ? WN(e, t) : t;
}
const lg = (e) => (e instanceof Rt ? { ...e } : e);
function Jr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return M.isPlainObject(c) && M.isPlainObject(u)
      ? M.merge.call({ caseless: d }, c, u)
      : M.isPlainObject(u)
      ? M.merge({}, u)
      : M.isArray(u)
      ? u.slice()
      : u;
  }
  function o(c, u, d) {
    if (M.isUndefined(u)) {
      if (!M.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function s(c, u) {
    if (!M.isUndefined(u)) return r(void 0, u);
  }
  function i(c, u) {
    if (M.isUndefined(u)) {
      if (!M.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, d) {
    if (d in t) return r(c, u);
    if (d in e) return r(void 0, c);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u) => o(lg(c), lg(u), !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = a[u] || o,
        f = d(e[u], t[u], u);
      (M.isUndefined(f) && d !== l) || (n[u] = f);
    }),
    n
  );
}
const w1 = (e) => {
    const t = Jr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: s,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = Rt.from(i)),
      (t.url = p1(v1(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let a;
    if (M.isFormData(n)) {
      if (rn.hasStandardBrowserEnv || rn.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((a = i.getContentType()) !== !1) {
        const [c, ...u] = a
          ? a
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        i.setContentType([c || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      rn.hasStandardBrowserEnv &&
      (r && M.isFunction(r) && (r = r(t)), r || (r !== !1 && BN(t.url)))
    ) {
      const c = o && s && VN.read(s);
      c && i.set(o, c);
    }
    return t;
  },
  UN = typeof XMLHttpRequest < "u",
  YN =
    UN &&
    function (e) {
      return new Promise(function (n, r) {
        const o = w1(e);
        let s = o.data;
        const i = Rt.from(o.headers).normalize();
        let { responseType: l } = o,
          a;
        function c() {
          o.cancelToken && o.cancelToken.unsubscribe(a),
            o.signal && o.signal.removeEventListener("abort", a);
        }
        let u = new XMLHttpRequest();
        u.open(o.method.toUpperCase(), o.url, !0), (u.timeout = o.timeout);
        function d() {
          if (!u) return;
          const m = Rt.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            h = {
              data:
                !l || l === "text" || l === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: m,
              config: e,
              request: u,
            };
          y1(
            function (v) {
              n(v), c();
            },
            function (v) {
              r(v), c();
            },
            h
          ),
            (u = null);
        }
        "onloadend" in u
          ? (u.onloadend = d)
          : (u.onreadystatechange = function () {
              !u ||
                u.readyState !== 4 ||
                (u.status === 0 &&
                  !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                setTimeout(d);
            }),
          (u.onabort = function () {
            u &&
              (r(new ce("Request aborted", ce.ECONNABORTED, o, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new ce("Network Error", ce.ERR_NETWORK, o, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let p = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = o.transitional || m1;
            o.timeoutErrorMessage && (p = o.timeoutErrorMessage),
              r(
                new ce(
                  p,
                  h.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,
                  o,
                  u
                )
              ),
              (u = null);
          }),
          s === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            M.forEach(i.toJSON(), function (p, h) {
              u.setRequestHeader(h, p);
            }),
          M.isUndefined(o.withCredentials) ||
            (u.withCredentials = !!o.withCredentials),
          l && l !== "json" && (u.responseType = o.responseType),
          typeof o.onDownloadProgress == "function" &&
            u.addEventListener("progress", Jl(o.onDownloadProgress, !0)),
          typeof o.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", Jl(o.onUploadProgress)),
          (o.cancelToken || o.signal) &&
            ((a = (m) => {
              u &&
                (r(!m || m.type ? new ds(null, e, u) : m),
                u.abort(),
                (u = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(a),
            o.signal &&
              (o.signal.aborted ? a() : o.signal.addEventListener("abort", a)));
        const f = MN(o.url);
        if (f && rn.protocols.indexOf(f) === -1) {
          r(new ce("Unsupported protocol " + f + ":", ce.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(s || null);
      });
    },
  qN = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (a) {
      if (!r) {
        (r = !0), i();
        const c = a instanceof Error ? a : this.reason;
        n.abort(
          c instanceof ce ? c : new ds(c instanceof Error ? c.message : c)
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        o(new ce(`timeout ${t} of ms exceeded`, ce.ETIMEDOUT));
      }, t);
    const i = () => {
      e &&
        (s && clearTimeout(s),
        (s = null),
        e.forEach((a) => {
          a &&
            (a.removeEventListener
              ? a.removeEventListener("abort", o)
              : a.unsubscribe(o));
        }),
        (e = null));
    };
    e.forEach((a) => a && a.addEventListener && a.addEventListener("abort", o));
    const { signal: l } = n;
    return (
      (l.unsubscribe = i),
      [
        l,
        () => {
          s && clearTimeout(s), (s = null);
        },
      ]
    );
  },
  KN = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  GN = async function* (e, t, n) {
    for await (const r of e)
      yield* KN(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  ag = (e, t, n, r, o) => {
    const s = GN(e, t, o);
    let i = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(l) {
          const { done: a, value: c } = await s.next();
          if (a) {
            l.close(), r();
            return;
          }
          let u = c.byteLength;
          n && n((i += u)), l.enqueue(new Uint8Array(c));
        },
        cancel(l) {
          return r(l), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  cg = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  oc =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  x1 = oc && typeof ReadableStream == "function",
  dd =
    oc &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  XN =
    x1 &&
    (() => {
      let e = !1;
      const t = new Request(rn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  ug = 64 * 1024,
  fd =
    x1 &&
    !!(() => {
      try {
        return M.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Zl = { stream: fd && ((e) => e.body) };
oc &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Zl[t] &&
        (Zl[t] = M.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ce(
                `Response type '${t}' is not supported`,
                ce.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const QN = async (e) => {
    if (e == null) return 0;
    if (M.isBlob(e)) return e.size;
    if (M.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (M.isArrayBufferView(e)) return e.byteLength;
    if ((M.isURLSearchParams(e) && (e = e + ""), M.isString(e)))
      return (await dd(e)).byteLength;
  },
  JN = async (e, t) => {
    const n = M.toFiniteNumber(e.getContentLength());
    return n ?? QN(t);
  },
  ZN =
    oc &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: s,
        timeout: i,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = w1(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [m, p] = o || s || i ? qN([o, s], i) : [],
        h,
        S;
      const v = () => {
        !h &&
          setTimeout(() => {
            m && m.unsubscribe();
          }),
          (h = !0);
      };
      let w;
      try {
        if (
          a &&
          XN &&
          n !== "get" &&
          n !== "head" &&
          (w = await JN(u, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          M.isFormData(r) &&
            (R = E.headers.get("content-type")) &&
            u.setContentType(R),
            E.body && (r = ag(E.body, ug, cg(w, Jl(a)), null, dd));
        }
        M.isString(d) || (d = d ? "cors" : "omit"),
          (S = new Request(t, {
            ...f,
            signal: m,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let y = await fetch(S);
        const b = fd && (c === "stream" || c === "response");
        if (fd && (l || b)) {
          const E = {};
          ["status", "statusText", "headers"].forEach((D) => {
            E[D] = y[D];
          });
          const R = M.toFiniteNumber(y.headers.get("content-length"));
          y = new Response(
            ag(y.body, ug, l && cg(R, Jl(l, !0)), b && v, dd),
            E
          );
        }
        c = c || "text";
        let C = await Zl[M.findKey(Zl, c) || "text"](y, e);
        return (
          !b && v(),
          p && p(),
          await new Promise((E, R) => {
            y1(E, R, {
              data: C,
              headers: Rt.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: S,
            });
          })
        );
      } catch (y) {
        throw (
          (v(),
          y && y.name === "TypeError" && /fetch/i.test(y.message)
            ? Object.assign(new ce("Network Error", ce.ERR_NETWORK, e, S), {
                cause: y.cause || y,
              })
            : ce.from(y, y && y.code, e, S))
        );
      }
    }),
  pd = { http: gN, xhr: YN, fetch: ZN };
M.forEach(pd, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const dg = (e) => `- ${e}`,
  eO = (e) => M.isFunction(e) || e === null || e === !1,
  S1 = {
    getAdapter: (e) => {
      e = M.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let i;
        if (
          ((r = n),
          !eO(n) && ((r = pd[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ce(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? s.length > 1
            ? `since :
` +
              s.map(dg).join(`
`)
            : " " + dg(s[0])
          : "as no adapter specified";
        throw new ce(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: pd,
  };
function Zc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ds(null, e);
}
function fg(e) {
  return (
    Zc(e),
    (e.headers = Rt.from(e.headers)),
    (e.data = Jc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    S1.getAdapter(e.adapter || Ci.adapter)(e).then(
      function (r) {
        return (
          Zc(e),
          (r.data = Jc.call(e, e.transformResponse, r)),
          (r.headers = Rt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          g1(r) ||
            (Zc(e),
            r &&
              r.response &&
              ((r.response.data = Jc.call(e, e.transformResponse, r.response)),
              (r.response.headers = Rt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const b1 = "1.7.2",
  Op = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Op[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const pg = {};
Op.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      b1 +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, l) => {
    if (t === !1)
      throw new ce(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ce.ERR_DEPRECATED
      );
    return (
      n &&
        !pg[i] &&
        ((pg[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, i, l) : !0
    );
  };
};
function tO(e, t, n) {
  if (typeof e != "object")
    throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const l = e[s],
        a = l === void 0 || i(l, s, e);
      if (a !== !0)
        throw new ce("option " + s + " must be " + a, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ce("Unknown option " + s, ce.ERR_BAD_OPTION);
  }
}
const md = { assertOptions: tO, validators: Op },
  Qn = md.validators;
class Br {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new sg(), response: new sg() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Jr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      md.assertOptions(
        r,
        {
          silentJSONParsing: Qn.transitional(Qn.boolean),
          forcedJSONParsing: Qn.transitional(Qn.boolean),
          clarifyTimeoutError: Qn.transitional(Qn.boolean),
        },
        !1
      ),
      o != null &&
        (M.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : md.assertOptions(
              o,
              { encode: Qn.function, serialize: Qn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && M.merge(s.common, s[n.method]);
    s &&
      M.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete s[p];
        }
      ),
      (n.headers = Rt.concat(i, s));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
        ((a = a && h.synchronous), l.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (h) {
      c.push(h.fulfilled, h.rejected);
    });
    let u,
      d = 0,
      f;
    if (!a) {
      const p = [fg.bind(this), void 0];
      for (
        p.unshift.apply(p, l),
          p.push.apply(p, c),
          f = p.length,
          u = Promise.resolve(n);
        d < f;

      )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    f = l.length;
    let m = n;
    for (d = 0; d < f; ) {
      const p = l[d++],
        h = l[d++];
      try {
        m = p(m);
      } catch (S) {
        h.call(this, S);
        break;
      }
    }
    try {
      u = fg.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Jr(this.defaults, t);
    const n = v1(t.baseURL, t.url);
    return p1(n, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function (t) {
  Br.prototype[t] = function (n, r) {
    return this.request(
      Jr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
M.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, l) {
      return this.request(
        Jr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (Br.prototype[t] = n()), (Br.prototype[t + "Form"] = n(!0));
});
class jp {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let s;
        const i = new Promise((l) => {
          r.subscribe(l), (s = l);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(s);
          }),
          i
        );
      }),
      t(function (s, i, l) {
        r.reason || ((r.reason = new ds(s, i, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new jp(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function nO(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function rO(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const hd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(hd).forEach(([e, t]) => {
  hd[t] = e;
});
function C1(e) {
  const t = new Br(e),
    n = t1(Br.prototype.request, t);
  return (
    M.extend(n, Br.prototype, t, { allOwnKeys: !0 }),
    M.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return C1(Jr(e, o));
    }),
    n
  );
}
const Me = C1(Ci);
Me.Axios = Br;
Me.CanceledError = ds;
Me.CancelToken = jp;
Me.isCancel = g1;
Me.VERSION = b1;
Me.toFormData = rc;
Me.AxiosError = ce;
Me.Cancel = Me.CanceledError;
Me.all = function (t) {
  return Promise.all(t);
};
Me.spread = nO;
Me.isAxiosError = rO;
Me.mergeConfig = Jr;
Me.AxiosHeaders = Rt;
Me.formToJSON = (e) => h1(M.isHTMLForm(e) ? new FormData(e) : e);
Me.getAdapter = S1.getAdapter;
Me.HttpStatusCode = hd;
Me.default = Me;
const oO = async (e, t, n) => {
    let r = {};
    const o = { target: e, embargo: t, data: { requirements: n } };
    let s = "";
    window.props !== void 0 && (s = window.props.token || "no-token-found");
    const i = Zw,
      l = {
        headers: {
          Authorization: "Token " + s,
          "Content-Type": "application/json",
        },
      };
    return (
      await Me.post(i, o, l)
        .then((a) => {
          console.log("RESPONSE: ", a);
        })
        .catch((a) => {
          console.log("Error: ", a);
        })
        .finally(() => {
          console.log("finally .....");
        }),
      r
    );
  },
  E1 = (e) => {
    const {
        profileData: t,
        submissionData: n,
        isLoading: r,
        profileError: o,
        SubmissionError: s,
      } = e,
      [i, l] = x.useState(!1),
      a = WD({
        mode: "uncontrolled",
        name: "profile-form",
        initialValues: { files: [] },
      }),
      c = (u) => {
        l(!0),
          oO(t.target, localStorage.getItem("embargo"), u)
            .then((d) => {
              console.log("DATA ", d);
            })
            .finally(() => {
              l(!1);
            });
      };
    return g.jsxs("form", {
      onSubmit: a.onSubmit(c),
      children: [
        g.jsxs("p", { children: ["processing: ", "" + i] }),
        t.fields.map((u, d) => g.jsx(e1, { field: u, form: a }, d)),
        g.jsx(rr, {
          justify: "flex-end",
          mt: "md",
          children: g.jsx(xn, { type: "submit", children: "Submit" }),
        }),
      ],
    });
  };
E1.propTypes = { profileData: U.object.isRequired };
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ea.apply(this, arguments)
  );
}
var ir;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ir || (ir = {}));
const pg = "popstate";
function sO(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return md(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : E1(o);
  }
  return lO(t, n, null, e);
}
function Pt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function C1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function iO() {
  return Math.random().toString(36).substr(2, 8);
}
function mg(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function md(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ea(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? oc(t) : t,
      { state: n, key: (t && t.key) || r || iO() }
    )
  );
}
function E1(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function oc(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function lO(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = ir.Pop,
    a = null,
    c = u();
  c == null && ((c = 0), i.replaceState(ea({}, i.state, { idx: c }), ""));
  function u() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    l = ir.Pop;
    let S = u(),
      w = S == null ? null : S - c;
    (c = S), a && a({ action: l, location: h.location, delta: w });
  }
  function f(S, w) {
    l = ir.Push;
    let v = md(h.location, S, w);
    c = u() + 1;
    let y = mg(v, c),
      b = h.createHref(v);
    try {
      i.pushState(y, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(b);
    }
    s && a && a({ action: l, location: h.location, delta: 1 });
  }
  function m(S, w) {
    l = ir.Replace;
    let v = md(h.location, S, w);
    c = u();
    let y = mg(v, c),
      b = h.createHref(v);
    i.replaceState(y, "", b),
      s && a && a({ action: l, location: h.location, delta: 0 });
  }
  function p(S) {
    let w = o.location.origin !== "null" ? o.location.origin : o.location.href,
      v = typeof S == "string" ? S : E1(S);
    return (
      (v = v.replace(/ $/, "%20")),
      Pt(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, w)
    );
  }
  let h = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(pg, d),
        (a = S),
        () => {
          o.removeEventListener(pg, d), (a = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: p,
    encodeLocation(S) {
      let w = p(S);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: f,
    replace: m,
    go(S) {
      return i.go(S);
    },
  };
  return h;
}
var hg;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(hg || (hg = {}));
function aO(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? oc(t) : t,
    o = R1(r.pathname || "/", n);
  if (o == null) return null;
  let s = _1(e);
  cO(s);
  let i = null;
  for (let l = 0; i == null && l < s.length; ++l) {
    let a = SO(o);
    i = vO(s[l], a);
  }
  return i;
}
function _1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (Pt(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = Io([r, a.relativePath]),
      u = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (Pt(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      _1(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: gO(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of k1(s.path)) o(s, i, a);
    }),
    t
  );
}
function k1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = k1(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function cO(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : yO(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const uO = /^:[\w-]+$/,
  dO = 3,
  fO = 2,
  pO = 1,
  mO = 10,
  hO = -2,
  gg = (e) => e === "*";
function gO(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(gg) && (r += hO),
    t && (r += fO),
    n
      .filter((o) => !gg(o))
      .reduce((o, s) => o + (uO.test(s) ? dO : s === "" ? pO : mO), r)
  );
}
function yO(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function vO(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    s = [];
  for (let i = 0; i < n.length; ++i) {
    let l = n[i],
      a = i === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      u = wO(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        c
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = l.route;
    s.push({
      params: r,
      pathname: Io([o, u.pathname]),
      pathnameBase: bO(Io([o, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (o = Io([o, u.pathnameBase]));
  }
  return s;
}
function wO(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = xO(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: f, isOptional: m } = u;
      if (f === "*") {
        let h = l[d] || "";
        i = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
      }
      const p = l[d];
      return (
        m && !p ? (c[f] = void 0) : (c[f] = (p || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function xO(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    C1(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function SO(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      C1(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function R1(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Io = (e) => e.join("/").replace(/\/\/+/g, "/"),
  bO = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function CO(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const D1 = ["post", "put", "patch", "delete"];
new Set(D1);
const EO = ["get", ...D1];
new Set(EO);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
const _O = x.createContext(null),
  kO = x.createContext(null),
  P1 = x.createContext(null),
  sc = x.createContext(null),
  _i = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  T1 = x.createContext(null);
function Op() {
  return x.useContext(sc) != null;
}
function RO() {
  return Op() || Pt(!1), x.useContext(sc).location;
}
function DO() {
  let { matches: e } = x.useContext(_i),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function PO(e, t) {
  return TO(e, t);
}
function TO(e, t, n, r) {
  Op() || Pt(!1);
  let { navigator: o } = x.useContext(P1),
    { matches: s } = x.useContext(_i),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let c = RO(),
    u;
  if (t) {
    var d;
    let S = typeof t == "string" ? oc(t) : t;
    a === "/" || ((d = S.pathname) != null && d.startsWith(a)) || Pt(!1),
      (u = S);
  } else u = c;
  let f = u.pathname || "/",
    m = f;
  if (a !== "/") {
    let S = a.replace(/^\//, "").split("/");
    m = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let p = aO(e, { pathname: m }),
    h = LO(
      p &&
        p.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Io([
              a,
              o.encodeLocation
                ? o.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : Io([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && h
    ? x.createElement(
        sc.Provider,
        {
          value: {
            location: ta(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: ir.Pop,
          },
        },
        h
      )
    : h;
}
function NO() {
  let e = IO(),
    t = CO(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    null
  );
}
const OO = x.createElement(NO, null);
class jO extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          _i.Provider,
          { value: this.props.routeContext },
          x.createElement(T1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function $O(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(_O);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(_i.Provider, { value: t }, r)
  );
}
function LO(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let u = i.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    u >= 0 || Pt(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  let a = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < i.length; u++) {
      let d = i[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
        d.route.id)
      ) {
        let { loaderData: f, errors: m } = n,
          p =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!m || m[d.route.id] === void 0);
        if (d.route.lazy || p) {
          (a = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((u, d, f) => {
    let m,
      p = !1,
      h = null,
      S = null;
    n &&
      ((m = l && d.route.id ? l[d.route.id] : void 0),
      (h = d.route.errorElement || OO),
      a &&
        (c < 0 && f === 0
          ? ((p = !0), (S = null))
          : c === f &&
            ((p = !0), (S = d.route.hydrateFallbackElement || null))));
    let w = t.concat(i.slice(0, f + 1)),
      v = () => {
        let y;
        return (
          m
            ? (y = h)
            : p
            ? (y = S)
            : d.route.Component
            ? (y = x.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = u),
          x.createElement($O, {
            match: d,
            routeContext: { outlet: u, matches: w, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? x.createElement(jO, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: m,
          children: v(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var hd = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(hd || {});
function AO(e) {
  let t = x.useContext(kO);
  return t || Pt(!1), t;
}
function FO(e) {
  let t = x.useContext(_i);
  return t || Pt(!1), t;
}
function MO(e) {
  let t = FO(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Pt(!1), n.route.id;
}
function IO() {
  var e;
  let t = x.useContext(T1),
    n = AO(hd.UseRouteError),
    r = MO(hd.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function gd(e) {
  Pt(!1);
}
function zO(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ir.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  Op() && Pt(!1);
  let a = t.replace(/^\/*/, "/"),
    c = x.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: ta({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = oc(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: m = null,
      key: p = "default",
    } = r,
    h = x.useMemo(() => {
      let S = R1(u, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: f, state: m, key: p },
            navigationType: o,
          };
    }, [a, u, d, f, m, p, o]);
  return h == null
    ? null
    : x.createElement(
        P1.Provider,
        { value: c },
        x.createElement(sc.Provider, { children: n, value: h })
      );
}
function BO(e) {
  let { children: t, location: n } = e;
  return PO(yd(t), n);
}
new Promise(() => {});
function yd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, yd(r.props.children, s));
        return;
      }
      r.type !== gd && Pt(!1), !r.props.index || !r.props.children || Pt(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = yd(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const VO = "6";
try {
  window.__reactRouterVersion = VO;
} catch {}
const HO = "startTransition",
  yg = Ng[HO];
function WO(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = x.useRef();
  s.current == null && (s.current = sO({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = x.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    u = x.useCallback(
      (d) => {
        c && yg ? yg(() => a(d)) : a(d);
      },
      [a, c]
    );
  return (
    x.useLayoutEffect(() => i.listen(u), [i, u]),
    x.createElement(zO, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
var vg;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(vg || (vg = {}));
var wg;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(wg || (wg = {}));
const UO = (e, t) => {
    const [n, r] = x.useState([]),
      [o, s] = x.useState([]),
      [i, l] = x.useState(!1),
      [a, c] = x.useState(!0),
      [u, d] = x.useState(null),
      [f, m] = x.useState(null);
    let p = "";
    window.props !== void 0 && (p = window.props.token || "no-token-found"),
      t === void 0 && localStorage.setItem("submission", JSON.stringify({}));
    const h = {
      headers: {
        Authorization: "Token " + p,
        "Content-Type": "application/json",
      },
    };
    return (
      x.useEffect(
        () => (
          (async () => {
            c(!0),
              await Me.get(yT + e)
                .then((w) => {
                  r(w.data), l(!0);
                })
                .catch((w) => {
                  d(w);
                })
                .finally(() => {
                  c(!1);
                });
          })(),
          () => {}
        ),
        []
      ),
      x.useEffect(
        () => (
          i &&
            t !== void 0 &&
            (async () => (
              c(!0),
              await Me.get(Uw + t + "/", h)
                .then((w) => {
                  localStorage.setItem("submission", JSON.stringify(w.data)),
                    s(w.data);
                })
                .catch((w) => {
                  m(w);
                })
                .finally(() => {
                  c(!1);
                })
            ))(),
          () => {}
        ),
        [i]
      ),
      { data1: n, data2: o, isLoading: a, error1: u, error2: f }
    );
  },
  YO = SD(b1),
  qO = bD(YO),
  xg = () => {
    const { brokerSubmissionId: e } = DO(),
      t = localStorage.getItem("profileName") || gT,
      { data1: n, data2: r, isLoading: o, error1: s, error2: i } = UO(t, e);
    return g.jsxs("div", {
      children: [
        g.jsx("h1", { children: "ProfileForm" }),
        g.jsx(qO, {
          profileData: n,
          submissionData: r,
          isLoading: o,
          profileError: s,
          submissionError: i,
        }),
      ],
    });
  };
function KO() {
  return g.jsx(n0, {
    children: g.jsxs(BO, {
      children: [
        g.jsx(gd, { path: "/", element: g.jsx(xg, {}) }),
        g.jsx(gd, { path: "/:brokerSubmissionId", element: g.jsx(xg, {}) }),
      ],
    }),
  });
}
let jp = "generic";
window.props !== void 0 && (jp = window.props.profile_name || "generic");
localStorage.setItem("profileName", jp);
const GO = "/profile/profile/" + jp + "/ui/";
Zc.createRoot(document.getElementById("root")).render(
  g.jsx(ra.StrictMode, {
    children: g.jsx(WO, { basename: GO, children: g.jsx(KO, {}) }),
  })
);
