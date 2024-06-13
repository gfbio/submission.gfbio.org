function k1(e, t) {
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
var ld =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cg = { exports: {} },
  Vl = {},
  ug = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qs = Symbol.for("react.element"),
  _1 = Symbol.for("react.portal"),
  R1 = Symbol.for("react.fragment"),
  D1 = Symbol.for("react.strict_mode"),
  P1 = Symbol.for("react.profiler"),
  T1 = Symbol.for("react.provider"),
  N1 = Symbol.for("react.context"),
  O1 = Symbol.for("react.forward_ref"),
  j1 = Symbol.for("react.suspense"),
  $1 = Symbol.for("react.memo"),
  L1 = Symbol.for("react.lazy"),
  _p = Symbol.iterator;
function A1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_p && e[_p]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var dg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fg = Object.assign,
  pg = {};
function Lo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pg),
    (this.updater = n || dg);
}
Lo.prototype.isReactComponent = {};
Lo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Lo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mg() {}
mg.prototype = Lo.prototype;
function ad(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pg),
    (this.updater = n || dg);
}
var cd = (ad.prototype = new mg());
cd.constructor = ad;
fg(cd, Lo.prototype);
cd.isPureReactComponent = !0;
var Rp = Array.isArray,
  hg = Object.prototype.hasOwnProperty,
  ud = { current: null },
  gg = { key: !0, ref: !0, __self: !0, __source: !0 };
function yg(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      hg.call(t, r) && !gg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: qs,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: ud.current,
  };
}
function F1(e, t) {
  return {
    $$typeof: qs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qs;
}
function M1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Dp = /\/+/g;
function Xa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? M1("" + e.key)
    : t.toString(36);
}
function Ii(e, t, n, r, o) {
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
          case qs:
          case _1:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Xa(i, 0) : r),
      Rp(o)
        ? ((n = ""),
          e != null && (n = e.replace(Dp, "$&/") + "/"),
          Ii(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (dd(o) &&
            (o = F1(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Dp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Rp(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Xa(s, l);
      i += Ii(s, t, n, a, o);
    }
  else if (((a = A1(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Xa(s, l++)), (i += Ii(s, t, n, a, o));
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
function fi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ii(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function I1(e) {
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
var ct = { current: null },
  zi = { transition: null },
  z1 = {
    ReactCurrentDispatcher: ct,
    ReactCurrentBatchConfig: zi,
    ReactCurrentOwner: ud,
  };
function vg() {
  throw Error("act(...) is not supported in production builds of React.");
}
de.Children = {
  map: fi,
  forEach: function (e, t, n) {
    fi(
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
      fi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
de.Component = Lo;
de.Fragment = R1;
de.Profiler = P1;
de.PureComponent = ad;
de.StrictMode = D1;
de.Suspense = j1;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z1;
de.act = vg;
de.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = fg({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = ud.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      hg.call(t, a) &&
        !gg.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: qs, type: e.type, key: o, ref: s, props: r, _owner: i };
};
de.createContext = function (e) {
  return (
    (e = {
      $$typeof: N1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: T1, _context: e }),
    (e.Consumer = e)
  );
};
de.createElement = yg;
de.createFactory = function (e) {
  var t = yg.bind(null, e);
  return (t.type = e), t;
};
de.createRef = function () {
  return { current: null };
};
de.forwardRef = function (e) {
  return { $$typeof: O1, render: e };
};
de.isValidElement = dd;
de.lazy = function (e) {
  return { $$typeof: L1, _payload: { _status: -1, _result: e }, _init: I1 };
};
de.memo = function (e, t) {
  return { $$typeof: $1, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
  var t = zi.transition;
  zi.transition = {};
  try {
    e();
  } finally {
    zi.transition = t;
  }
};
de.unstable_act = vg;
de.useCallback = function (e, t) {
  return ct.current.useCallback(e, t);
};
de.useContext = function (e) {
  return ct.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
  return ct.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
  return ct.current.useEffect(e, t);
};
de.useId = function () {
  return ct.current.useId();
};
de.useImperativeHandle = function (e, t, n) {
  return ct.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function (e, t) {
  return ct.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
  return ct.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
  return ct.current.useMemo(e, t);
};
de.useReducer = function (e, t, n) {
  return ct.current.useReducer(e, t, n);
};
de.useRef = function (e) {
  return ct.current.useRef(e);
};
de.useState = function (e) {
  return ct.current.useState(e);
};
de.useSyncExternalStore = function (e, t, n) {
  return ct.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function () {
  return ct.current.useTransition();
};
de.version = "18.3.1";
ug.exports = de;
var w = ug.exports;
const Hl = Mr(w),
  wg = k1({ __proto__: null, default: Hl }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B1 = w,
  V1 = Symbol.for("react.element"),
  H1 = Symbol.for("react.fragment"),
  U1 = Object.prototype.hasOwnProperty,
  W1 = B1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Y1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sg(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) U1.call(t, r) && !Y1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: V1,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: W1.current,
  };
}
Vl.Fragment = H1;
Vl.jsx = Sg;
Vl.jsxs = Sg;
cg.exports = Vl;
var S = cg.exports,
  Bc = {},
  xg = { exports: {} },
  _t = {},
  bg = { exports: {} },
  Cg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, k) {
    var $ = R.length;
    R.push(k);
    e: for (; 0 < $; ) {
      var O = ($ - 1) >>> 1,
        I = R[O];
      if (0 < o(I, k)) (R[O] = k), (R[$] = I), ($ = O);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var k = R[0],
      $ = R.pop();
    if ($ !== k) {
      R[0] = $;
      e: for (var O = 0, I = R.length, K = I >>> 1; O < K; ) {
        var J = 2 * (O + 1) - 1,
          ee = R[J],
          ne = J + 1,
          te = R[ne];
        if (0 > o(ee, $))
          ne < I && 0 > o(te, ee)
            ? ((R[O] = te), (R[ne] = $), (O = ne))
            : ((R[O] = ee), (R[J] = $), (O = J));
        else if (ne < I && 0 > o(te, $)) (R[O] = te), (R[ne] = $), (O = ne);
        else break e;
      }
    }
    return k;
  }
  function o(R, k) {
    var $ = R.sortIndex - k.sortIndex;
    return $ !== 0 ? $ : R.id - k.id;
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
    x = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(R) {
    for (var k = n(c); k !== null; ) {
      if (k.callback === null) r(c);
      else if (k.startTime <= R)
        r(c), (k.sortIndex = k.expirationTime), t(a, k);
      else break;
      k = n(c);
    }
  }
  function b(R) {
    if (((h = !1), g(R), !p))
      if (n(a) !== null) (p = !0), P(C);
      else {
        var k = n(c);
        k !== null && T(b, k.startTime - R);
      }
  }
  function C(R, k) {
    (p = !1), h && ((h = !1), y(D), (D = -1)), (m = !0);
    var $ = f;
    try {
      for (
        g(k), d = n(a);
        d !== null && (!(d.expirationTime > k) || (R && !M()));

      ) {
        var O = d.callback;
        if (typeof O == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var I = O(d.expirationTime <= k);
          (k = e.unstable_now()),
            typeof I == "function" ? (d.callback = I) : d === n(a) && r(a),
            g(k);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var K = !0;
      else {
        var J = n(c);
        J !== null && T(b, J.startTime - k), (K = !1);
      }
      return K;
    } finally {
      (d = null), (f = $), (m = !1);
    }
  }
  var E = !1,
    _ = null,
    D = -1,
    L = 5,
    N = -1;
  function M() {
    return !(e.unstable_now() - N < L);
  }
  function B() {
    if (_ !== null) {
      var R = e.unstable_now();
      N = R;
      var k = !0;
      try {
        k = _(!0, R);
      } finally {
        k ? V() : ((E = !1), (_ = null));
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
      x(B, 0);
    };
  function P(R) {
    (_ = R), E || ((E = !0), V());
  }
  function T(R, k) {
    D = x(function () {
      R(e.unstable_now());
    }, k);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || m || ((p = !0), P(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = f;
      }
      var $ = f;
      f = k;
      try {
        return R();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, k) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = f;
      f = R;
      try {
        return k();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, k, $) {
      var O = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? O + $ : O))
          : ($ = O),
        R)
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
        (R = {
          id: u++,
          callback: k,
          priorityLevel: R,
          startTime: $,
          expirationTime: I,
          sortIndex: -1,
        }),
        $ > O
          ? ((R.sortIndex = $),
            t(c, R),
            n(a) === null &&
              R === n(c) &&
              (h ? (y(D), (D = -1)) : (h = !0), T(b, $ - O)))
          : ((R.sortIndex = I), t(a, R), p || m || ((p = !0), P(C))),
        R
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (R) {
      var k = f;
      return function () {
        var $ = f;
        f = k;
        try {
          return R.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(Cg);
bg.exports = Cg;
var K1 = bg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q1 = w,
  kt = K1;
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
var Eg = new Set(),
  Es = {};
function Ir(e, t) {
  bo(e, t), bo(e + "Capture", t);
}
function bo(e, t) {
  for (Es[e] = t, e = 0; e < t.length; e++) Eg.add(t[e]);
}
var Pn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Vc = Object.prototype.hasOwnProperty,
  G1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pp = {},
  Tp = {};
function X1(e) {
  return Vc.call(Tp, e)
    ? !0
    : Vc.call(Pp, e)
    ? !1
    : G1.test(e)
    ? (Tp[e] = !0)
    : ((Pp[e] = !0), !1);
}
function Q1(e, t, n, r) {
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
function J1(e, t, n, r) {
  if (t === null || typeof t > "u" || Q1(e, t, n, r)) return !0;
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
function ut(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ke[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ke[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ke[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ke[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ke[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ke[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ke[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fd = /[\-:]([a-z])/g;
function pd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fd, pd);
    Ke[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fd, pd);
    Ke[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fd, pd);
  Ke[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ke[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ke.xlinkHref = new ut(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ke[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function md(e, t, n, r) {
  var o = Ke.hasOwnProperty(t) ? Ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (J1(t, n, o, r) && (n = null),
    r || o === null
      ? X1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ln = q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pi = Symbol.for("react.element"),
  Jr = Symbol.for("react.portal"),
  Zr = Symbol.for("react.fragment"),
  hd = Symbol.for("react.strict_mode"),
  Hc = Symbol.for("react.profiler"),
  kg = Symbol.for("react.provider"),
  _g = Symbol.for("react.context"),
  gd = Symbol.for("react.forward_ref"),
  Uc = Symbol.for("react.suspense"),
  Wc = Symbol.for("react.suspense_list"),
  yd = Symbol.for("react.memo"),
  Vn = Symbol.for("react.lazy"),
  Rg = Symbol.for("react.offscreen"),
  Np = Symbol.iterator;
function Jo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Np && e[Np]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pe = Object.assign,
  Qa;
function ds(e) {
  if (Qa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qa = (t && t[1]) || "";
    }
  return (
    `
` +
    Qa +
    e
  );
}
var Ja = !1;
function Za(e, t) {
  if (!e || Ja) return "";
  Ja = !0;
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
    (Ja = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ds(e) : "";
}
function Z1(e) {
  switch (e.tag) {
    case 5:
      return ds(e.type);
    case 16:
      return ds("Lazy");
    case 13:
      return ds("Suspense");
    case 19:
      return ds("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Za(e.type, !1)), e;
    case 11:
      return (e = Za(e.type.render, !1)), e;
    case 1:
      return (e = Za(e.type, !0)), e;
    default:
      return "";
  }
}
function Yc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zr:
      return "Fragment";
    case Jr:
      return "Portal";
    case Hc:
      return "Profiler";
    case hd:
      return "StrictMode";
    case Uc:
      return "Suspense";
    case Wc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _g:
        return (e.displayName || "Context") + ".Consumer";
      case kg:
        return (e._context.displayName || "Context") + ".Provider";
      case gd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yd:
        return (
          (t = e.displayName || null), t !== null ? t : Yc(e.type) || "Memo"
        );
      case Vn:
        (t = e._payload), (e = e._init);
        try {
          return Yc(e(t));
        } catch {}
    }
  return null;
}
function eS(e) {
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
      return Yc(t);
    case 8:
      return t === hd ? "StrictMode" : "Mode";
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
function sr(e) {
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
function Dg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tS(e) {
  var t = Dg(e) ? "checked" : "value",
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
function mi(e) {
  e._valueTracker || (e._valueTracker = tS(e));
}
function Pg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function nl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Kc(e, t) {
  var n = t.checked;
  return Pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Op(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = sr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Tg(e, t) {
  (t = t.checked), t != null && md(e, "checked", t, !1);
}
function qc(e, t) {
  Tg(e, t);
  var n = sr(t.value),
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
    ? Gc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Gc(e, t.type, sr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function jp(e, t, n) {
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
function Gc(e, t, n) {
  (t !== "number" || nl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fs = Array.isArray;
function fo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return Pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $p(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (fs(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sr(n) };
}
function Ng(e, t) {
  var n = sr(t.value),
    r = sr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Og(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Og(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var hi,
  jg = (function (e) {
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
        hi = hi || document.createElement("div"),
          hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ks(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hs = {
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
  nS = ["Webkit", "ms", "Moz", "O"];
Object.keys(hs).forEach(function (e) {
  nS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hs[t] = hs[e]);
  });
});
function $g(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (hs.hasOwnProperty(e) && hs[e])
    ? ("" + t).trim()
    : t + "px";
}
function Lg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = $g(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var rS = Pe(
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
function Jc(e, t) {
  if (t) {
    if (rS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Zc(e, t) {
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
var eu = null;
function vd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var tu = null,
  po = null,
  mo = null;
function Ap(e) {
  if ((e = Qs(e))) {
    if (typeof tu != "function") throw Error(H(280));
    var t = e.stateNode;
    t && ((t = ql(t)), tu(e.stateNode, e.type, t));
  }
}
function Ag(e) {
  po ? (mo ? mo.push(e) : (mo = [e])) : (po = e);
}
function Fg() {
  if (po) {
    var e = po,
      t = mo;
    if (((mo = po = null), Ap(e), t)) for (e = 0; e < t.length; e++) Ap(t[e]);
  }
}
function Mg(e, t) {
  return e(t);
}
function Ig() {}
var ec = !1;
function zg(e, t, n) {
  if (ec) return e(t, n);
  ec = !0;
  try {
    return Mg(e, t, n);
  } finally {
    (ec = !1), (po !== null || mo !== null) && (Ig(), Fg());
  }
}
function _s(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ql(n);
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
var nu = !1;
if (Pn)
  try {
    var Zo = {};
    Object.defineProperty(Zo, "passive", {
      get: function () {
        nu = !0;
      },
    }),
      window.addEventListener("test", Zo, Zo),
      window.removeEventListener("test", Zo, Zo);
  } catch {
    nu = !1;
  }
function oS(e, t, n, r, o, s, i, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var gs = !1,
  rl = null,
  ol = !1,
  ru = null,
  sS = {
    onError: function (e) {
      (gs = !0), (rl = e);
    },
  };
function iS(e, t, n, r, o, s, i, l, a) {
  (gs = !1), (rl = null), oS.apply(sS, arguments);
}
function lS(e, t, n, r, o, s, i, l, a) {
  if ((iS.apply(this, arguments), gs)) {
    if (gs) {
      var c = rl;
      (gs = !1), (rl = null);
    } else throw Error(H(198));
    ol || ((ol = !0), (ru = c));
  }
}
function zr(e) {
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
function Bg(e) {
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
function Fp(e) {
  if (zr(e) !== e) throw Error(H(188));
}
function aS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zr(e)), t === null)) throw Error(H(188));
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
        if (s === n) return Fp(o), e;
        if (s === r) return Fp(o), t;
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
function Vg(e) {
  return (e = aS(e)), e !== null ? Hg(e) : null;
}
function Hg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ug = kt.unstable_scheduleCallback,
  Mp = kt.unstable_cancelCallback,
  cS = kt.unstable_shouldYield,
  uS = kt.unstable_requestPaint,
  $e = kt.unstable_now,
  dS = kt.unstable_getCurrentPriorityLevel,
  wd = kt.unstable_ImmediatePriority,
  Wg = kt.unstable_UserBlockingPriority,
  sl = kt.unstable_NormalPriority,
  fS = kt.unstable_LowPriority,
  Yg = kt.unstable_IdlePriority,
  Ul = null,
  gn = null;
function pS(e) {
  if (gn && typeof gn.onCommitFiberRoot == "function")
    try {
      gn.onCommitFiberRoot(Ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xt = Math.clz32 ? Math.clz32 : gS,
  mS = Math.log,
  hS = Math.LN2;
function gS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mS(e) / hS) | 0)) | 0;
}
var gi = 64,
  yi = 4194304;
function ps(e) {
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
function il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = ps(l)) : ((s &= i), s !== 0 && (r = ps(s)));
  } else (i = n & ~o), i !== 0 ? (r = ps(i)) : s !== 0 && (r = ps(s));
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
      (n = 31 - Xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function yS(e, t) {
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
function vS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - Xt(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = yS(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function ou(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kg() {
  var e = gi;
  return (gi <<= 1), !(gi & 4194240) && (gi = 64), e;
}
function tc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xt(t)),
    (e[t] = n);
}
function wS(e, t) {
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
    var o = 31 - Xt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function Sd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var he = 0;
function qg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gg,
  xd,
  Xg,
  Qg,
  Jg,
  su = !1,
  vi = [],
  Qn = null,
  Jn = null,
  Zn = null,
  Rs = new Map(),
  Ds = new Map(),
  Wn = [],
  SS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ip(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qn = null;
      break;
    case "dragenter":
    case "dragleave":
      Jn = null;
      break;
    case "mouseover":
    case "mouseout":
      Zn = null;
      break;
    case "pointerover":
    case "pointerout":
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ds.delete(t.pointerId);
  }
}
function es(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = Qs(t)), t !== null && xd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function xS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Qn = es(Qn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Jn = es(Jn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Zn = es(Zn, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return Rs.set(s, es(Rs.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), Ds.set(s, es(Ds.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Zg(e) {
  var t = xr(e.target);
  if (t !== null) {
    var n = zr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bg(n)), t !== null)) {
          (e.blockedOn = t),
            Jg(e.priority, function () {
              Xg(n);
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
function Bi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (eu = r), n.target.dispatchEvent(r), (eu = null);
    } else return (t = Qs(n)), t !== null && xd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zp(e, t, n) {
  Bi(e) && n.delete(t);
}
function bS() {
  (su = !1),
    Qn !== null && Bi(Qn) && (Qn = null),
    Jn !== null && Bi(Jn) && (Jn = null),
    Zn !== null && Bi(Zn) && (Zn = null),
    Rs.forEach(zp),
    Ds.forEach(zp);
}
function ts(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    su ||
      ((su = !0),
      kt.unstable_scheduleCallback(kt.unstable_NormalPriority, bS)));
}
function Ps(e) {
  function t(o) {
    return ts(o, e);
  }
  if (0 < vi.length) {
    ts(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Qn !== null && ts(Qn, e),
      Jn !== null && ts(Jn, e),
      Zn !== null && ts(Zn, e),
      Rs.forEach(t),
      Ds.forEach(t),
      n = 0;
    n < Wn.length;
    n++
  )
    (r = Wn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
    Zg(n), n.blockedOn === null && Wn.shift();
}
var ho = Ln.ReactCurrentBatchConfig,
  ll = !0;
function CS(e, t, n, r) {
  var o = he,
    s = ho.transition;
  ho.transition = null;
  try {
    (he = 1), bd(e, t, n, r);
  } finally {
    (he = o), (ho.transition = s);
  }
}
function ES(e, t, n, r) {
  var o = he,
    s = ho.transition;
  ho.transition = null;
  try {
    (he = 4), bd(e, t, n, r);
  } finally {
    (he = o), (ho.transition = s);
  }
}
function bd(e, t, n, r) {
  if (ll) {
    var o = iu(e, t, n, r);
    if (o === null) dc(e, t, r, al, n), Ip(e, r);
    else if (xS(o, e, t, n, r)) r.stopPropagation();
    else if ((Ip(e, r), t & 4 && -1 < SS.indexOf(e))) {
      for (; o !== null; ) {
        var s = Qs(o);
        if (
          (s !== null && Gg(s),
          (s = iu(e, t, n, r)),
          s === null && dc(e, t, r, al, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else dc(e, t, r, null, n);
  }
}
var al = null;
function iu(e, t, n, r) {
  if (((al = null), (e = vd(r)), (e = xr(e)), e !== null))
    if (((t = zr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Bg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (al = e), null;
}
function ey(e) {
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
      switch (dS()) {
        case wd:
          return 1;
        case Wg:
          return 4;
        case sl:
        case fS:
          return 16;
        case Yg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qn = null,
  Cd = null,
  Vi = null;
function ty() {
  if (Vi) return Vi;
  var e,
    t = Cd,
    n = t.length,
    r,
    o = "value" in qn ? qn.value : qn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Vi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Hi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wi() {
  return !0;
}
function Bp() {
  return !1;
}
function Rt(e) {
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
        ? wi
        : Bp),
      (this.isPropagationStopped = Bp),
      this
    );
  }
  return (
    Pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wi));
      },
      persist: function () {},
      isPersistent: wi,
    }),
    t
  );
}
var Ao = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ed = Rt(Ao),
  Xs = Pe({}, Ao, { view: 0, detail: 0 }),
  kS = Rt(Xs),
  nc,
  rc,
  ns,
  Wl = Pe({}, Xs, {
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
    getModifierState: kd,
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
        : (e !== ns &&
            (ns && e.type === "mousemove"
              ? ((nc = e.screenX - ns.screenX), (rc = e.screenY - ns.screenY))
              : (rc = nc = 0),
            (ns = e)),
          nc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : rc;
    },
  }),
  Vp = Rt(Wl),
  _S = Pe({}, Wl, { dataTransfer: 0 }),
  RS = Rt(_S),
  DS = Pe({}, Xs, { relatedTarget: 0 }),
  oc = Rt(DS),
  PS = Pe({}, Ao, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  TS = Rt(PS),
  NS = Pe({}, Ao, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  OS = Rt(NS),
  jS = Pe({}, Ao, { data: 0 }),
  Hp = Rt(jS),
  $S = {
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
  LS = {
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
  AS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function FS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = AS[e]) ? !!t[e] : !1;
}
function kd() {
  return FS;
}
var MS = Pe({}, Xs, {
    key: function (e) {
      if (e.key) {
        var t = $S[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? LS[e.keyCode] || "Unidentified"
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
    getModifierState: kd,
    charCode: function (e) {
      return e.type === "keypress" ? Hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  IS = Rt(MS),
  zS = Pe({}, Wl, {
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
  Up = Rt(zS),
  BS = Pe({}, Xs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: kd,
  }),
  VS = Rt(BS),
  HS = Pe({}, Ao, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  US = Rt(HS),
  WS = Pe({}, Wl, {
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
  YS = Rt(WS),
  KS = [9, 13, 27, 32],
  _d = Pn && "CompositionEvent" in window,
  ys = null;
Pn && "documentMode" in document && (ys = document.documentMode);
var qS = Pn && "TextEvent" in window && !ys,
  ny = Pn && (!_d || (ys && 8 < ys && 11 >= ys)),
  Wp = " ",
  Yp = !1;
function ry(e, t) {
  switch (e) {
    case "keyup":
      return KS.indexOf(t.keyCode) !== -1;
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
function oy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var eo = !1;
function GS(e, t) {
  switch (e) {
    case "compositionend":
      return oy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yp = !0), Wp);
    case "textInput":
      return (e = t.data), e === Wp && Yp ? null : e;
    default:
      return null;
  }
}
function XS(e, t) {
  if (eo)
    return e === "compositionend" || (!_d && ry(e, t))
      ? ((e = ty()), (Vi = Cd = qn = null), (eo = !1), e)
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
      return ny && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var QS = {
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
function Kp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!QS[e.type] : t === "textarea";
}
function sy(e, t, n, r) {
  Ag(r),
    (t = cl(t, "onChange")),
    0 < t.length &&
      ((n = new Ed("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vs = null,
  Ts = null;
function JS(e) {
  gy(e, 0);
}
function Yl(e) {
  var t = ro(e);
  if (Pg(t)) return e;
}
function ZS(e, t) {
  if (e === "change") return t;
}
var iy = !1;
if (Pn) {
  var sc;
  if (Pn) {
    var ic = "oninput" in document;
    if (!ic) {
      var qp = document.createElement("div");
      qp.setAttribute("oninput", "return;"),
        (ic = typeof qp.oninput == "function");
    }
    sc = ic;
  } else sc = !1;
  iy = sc && (!document.documentMode || 9 < document.documentMode);
}
function Gp() {
  vs && (vs.detachEvent("onpropertychange", ly), (Ts = vs = null));
}
function ly(e) {
  if (e.propertyName === "value" && Yl(Ts)) {
    var t = [];
    sy(t, Ts, e, vd(e)), zg(JS, t);
  }
}
function ex(e, t, n) {
  e === "focusin"
    ? (Gp(), (vs = t), (Ts = n), vs.attachEvent("onpropertychange", ly))
    : e === "focusout" && Gp();
}
function tx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yl(Ts);
}
function nx(e, t) {
  if (e === "click") return Yl(t);
}
function rx(e, t) {
  if (e === "input" || e === "change") return Yl(t);
}
function ox(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Zt = typeof Object.is == "function" ? Object.is : ox;
function Ns(e, t) {
  if (Zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vc.call(t, o) || !Zt(e[o], t[o])) return !1;
  }
  return !0;
}
function Xp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qp(e, t) {
  var n = Xp(e);
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
    n = Xp(n);
  }
}
function ay(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ay(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cy() {
  for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = nl(e.document);
  }
  return t;
}
function Rd(e) {
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
function sx(e) {
  var t = cy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ay(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Rd(n)) {
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
          (o = Qp(n, s));
        var i = Qp(n, r);
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
var ix = Pn && "documentMode" in document && 11 >= document.documentMode,
  to = null,
  lu = null,
  ws = null,
  au = !1;
function Jp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  au ||
    to == null ||
    to !== nl(r) ||
    ((r = to),
    "selectionStart" in r && Rd(r)
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
    (ws && Ns(ws, r)) ||
      ((ws = r),
      (r = cl(lu, "onSelect")),
      0 < r.length &&
        ((t = new Ed("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = to))));
}
function Si(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var no = {
    animationend: Si("Animation", "AnimationEnd"),
    animationiteration: Si("Animation", "AnimationIteration"),
    animationstart: Si("Animation", "AnimationStart"),
    transitionend: Si("Transition", "TransitionEnd"),
  },
  lc = {},
  uy = {};
Pn &&
  ((uy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete no.animationend.animation,
    delete no.animationiteration.animation,
    delete no.animationstart.animation),
  "TransitionEvent" in window || delete no.transitionend.transition);
function Kl(e) {
  if (lc[e]) return lc[e];
  if (!no[e]) return e;
  var t = no[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in uy) return (lc[e] = t[n]);
  return e;
}
var dy = Kl("animationend"),
  fy = Kl("animationiteration"),
  py = Kl("animationstart"),
  my = Kl("transitionend"),
  hy = new Map(),
  Zp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cr(e, t) {
  hy.set(e, t), Ir(t, [e]);
}
for (var ac = 0; ac < Zp.length; ac++) {
  var cc = Zp[ac],
    lx = cc.toLowerCase(),
    ax = cc[0].toUpperCase() + cc.slice(1);
  cr(lx, "on" + ax);
}
cr(dy, "onAnimationEnd");
cr(fy, "onAnimationIteration");
cr(py, "onAnimationStart");
cr("dblclick", "onDoubleClick");
cr("focusin", "onFocus");
cr("focusout", "onBlur");
cr(my, "onTransitionEnd");
bo("onMouseEnter", ["mouseout", "mouseover"]);
bo("onMouseLeave", ["mouseout", "mouseover"]);
bo("onPointerEnter", ["pointerout", "pointerover"]);
bo("onPointerLeave", ["pointerout", "pointerover"]);
Ir(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ir(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ir(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ir(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ir(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ms =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  cx = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function em(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lS(r, t, void 0, e), (e.currentTarget = null);
}
function gy(e, t) {
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
          em(o, l, c), (s = a);
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
          em(o, l, c), (s = a);
        }
    }
  }
  if (ol) throw ((e = ru), (ol = !1), (ru = null), e);
}
function we(e, t) {
  var n = t[pu];
  n === void 0 && (n = t[pu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yy(t, e, 2, !1), n.add(r));
}
function uc(e, t, n) {
  var r = 0;
  t && (r |= 4), yy(n, e, r, t);
}
var xi = "_reactListening" + Math.random().toString(36).slice(2);
function Os(e) {
  if (!e[xi]) {
    (e[xi] = !0),
      Eg.forEach(function (n) {
        n !== "selectionchange" && (cx.has(n) || uc(n, !1, e), uc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xi] || ((t[xi] = !0), uc("selectionchange", !1, t));
  }
}
function yy(e, t, n, r) {
  switch (ey(t)) {
    case 1:
      var o = CS;
      break;
    case 4:
      o = ES;
      break;
    default:
      o = bd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !nu ||
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
function dc(e, t, n, r, o) {
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
          if (((i = xr(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  zg(function () {
    var c = s,
      u = vd(n),
      d = [];
    e: {
      var f = hy.get(e);
      if (f !== void 0) {
        var m = Ed,
          p = e;
        switch (e) {
          case "keypress":
            if (Hi(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = IS;
            break;
          case "focusin":
            (p = "focus"), (m = oc);
            break;
          case "focusout":
            (p = "blur"), (m = oc);
            break;
          case "beforeblur":
          case "afterblur":
            m = oc;
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
            m = Vp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = RS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = VS;
            break;
          case dy:
          case fy:
          case py:
            m = TS;
            break;
          case my:
            m = US;
            break;
          case "scroll":
            m = kS;
            break;
          case "wheel":
            m = YS;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = OS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Up;
        }
        var h = (t & 4) !== 0,
          x = !h && e === "scroll",
          y = h ? (f !== null ? f + "Capture" : null) : f;
        h = [];
        for (var v = c, g; v !== null; ) {
          g = v;
          var b = g.stateNode;
          if (
            (g.tag === 5 &&
              b !== null &&
              ((g = b),
              y !== null && ((b = _s(v, y)), b != null && h.push(js(v, b, g)))),
            x)
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
            n !== eu &&
            (p = n.relatedTarget || n.fromElement) &&
            (xr(p) || p[Tn]))
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
              (p = p ? xr(p) : null),
              p !== null &&
                ((x = zr(p)), p !== x || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((m = null), (p = c)),
          m !== p)
        ) {
          if (
            ((h = Vp),
            (b = "onMouseLeave"),
            (y = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = Up),
              (b = "onPointerLeave"),
              (y = "onPointerEnter"),
              (v = "pointer")),
            (x = m == null ? f : ro(m)),
            (g = p == null ? f : ro(p)),
            (f = new h(b, v + "leave", m, n, u)),
            (f.target = x),
            (f.relatedTarget = g),
            (b = null),
            xr(u) === c &&
              ((h = new h(y, v + "enter", p, n, u)),
              (h.target = g),
              (h.relatedTarget = x),
              (b = h)),
            (x = b),
            m && p)
          )
            t: {
              for (h = m, y = p, v = 0, g = h; g; g = Yr(g)) v++;
              for (g = 0, b = y; b; b = Yr(b)) g++;
              for (; 0 < v - g; ) (h = Yr(h)), v--;
              for (; 0 < g - v; ) (y = Yr(y)), g--;
              for (; v--; ) {
                if (h === y || (y !== null && h === y.alternate)) break t;
                (h = Yr(h)), (y = Yr(y));
              }
              h = null;
            }
          else h = null;
          m !== null && tm(d, f, m, h, !1),
            p !== null && x !== null && tm(d, x, p, h, !0);
        }
      }
      e: {
        if (
          ((f = c ? ro(c) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var C = ZS;
        else if (Kp(f))
          if (iy) C = rx;
          else {
            C = tx;
            var E = ex;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = nx);
        if (C && (C = C(e, c))) {
          sy(d, C, n, u);
          break e;
        }
        E && E(e, f, c),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Gc(f, "number", f.value);
      }
      switch (((E = c ? ro(c) : window), e)) {
        case "focusin":
          (Kp(E) || E.contentEditable === "true") &&
            ((to = E), (lu = c), (ws = null));
          break;
        case "focusout":
          ws = lu = to = null;
          break;
        case "mousedown":
          au = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (au = !1), Jp(d, n, u);
          break;
        case "selectionchange":
          if (ix) break;
        case "keydown":
        case "keyup":
          Jp(d, n, u);
      }
      var _;
      if (_d)
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
        eo
          ? ry(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (ny &&
          n.locale !== "ko" &&
          (eo || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && eo && (_ = ty())
            : ((qn = u),
              (Cd = "value" in qn ? qn.value : qn.textContent),
              (eo = !0))),
        (E = cl(c, D)),
        0 < E.length &&
          ((D = new Hp(D, e, null, n, u)),
          d.push({ event: D, listeners: E }),
          _ ? (D.data = _) : ((_ = oy(n)), _ !== null && (D.data = _)))),
        (_ = qS ? GS(e, n) : XS(e, n)) &&
          ((c = cl(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Hp("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = _)));
    }
    gy(d, t);
  });
}
function js(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = _s(e, n)),
      s != null && r.unshift(js(e, s, o)),
      (s = _s(e, t)),
      s != null && r.push(js(e, s, o))),
      (e = e.return);
  }
  return r;
}
function Yr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tm(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = _s(n, s)), a != null && i.unshift(js(n, a, l)))
        : o || ((a = _s(n, s)), a != null && i.push(js(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ux = /\r\n?/g,
  dx = /\u0000|\uFFFD/g;
function nm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ux,
      `
`
    )
    .replace(dx, "");
}
function bi(e, t, n) {
  if (((t = nm(t)), nm(e) !== t && n)) throw Error(H(425));
}
function ul() {}
var cu = null,
  uu = null;
function du(e, t) {
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
var fu = typeof setTimeout == "function" ? setTimeout : void 0,
  fx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rm = typeof Promise == "function" ? Promise : void 0,
  px =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rm < "u"
      ? function (e) {
          return rm.resolve(null).then(e).catch(mx);
        }
      : fu;
function mx(e) {
  setTimeout(function () {
    throw e;
  });
}
function fc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ps(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ps(t);
}
function er(e) {
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
function om(e) {
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
var Fo = Math.random().toString(36).slice(2),
  mn = "__reactFiber$" + Fo,
  $s = "__reactProps$" + Fo,
  Tn = "__reactContainer$" + Fo,
  pu = "__reactEvents$" + Fo,
  hx = "__reactListeners$" + Fo,
  gx = "__reactHandles$" + Fo;
function xr(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tn] || n[mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = om(e); e !== null; ) {
          if ((n = e[mn])) return n;
          e = om(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Qs(e) {
  return (
    (e = e[mn] || e[Tn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ro(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function ql(e) {
  return e[$s] || null;
}
var mu = [],
  oo = -1;
function ur(e) {
  return { current: e };
}
function Se(e) {
  0 > oo || ((e.current = mu[oo]), (mu[oo] = null), oo--);
}
function ve(e, t) {
  oo++, (mu[oo] = e.current), (e.current = t);
}
var ir = {},
  tt = ur(ir),
  ht = ur(!1),
  Pr = ir;
function Co(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ir;
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
function gt(e) {
  return (e = e.childContextTypes), e != null;
}
function dl() {
  Se(ht), Se(tt);
}
function sm(e, t, n) {
  if (tt.current !== ir) throw Error(H(168));
  ve(tt, t), ve(ht, n);
}
function vy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, eS(e) || "Unknown", o));
  return Pe({}, n, r);
}
function fl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ir),
    (Pr = tt.current),
    ve(tt, e),
    ve(ht, ht.current),
    !0
  );
}
function im(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n
    ? ((e = vy(e, t, Pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Se(ht),
      Se(tt),
      ve(tt, e))
    : Se(ht),
    ve(ht, n);
}
var En = null,
  Gl = !1,
  pc = !1;
function wy(e) {
  En === null ? (En = [e]) : En.push(e);
}
function yx(e) {
  (Gl = !0), wy(e);
}
function dr() {
  if (!pc && En !== null) {
    pc = !0;
    var e = 0,
      t = he;
    try {
      var n = En;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (En = null), (Gl = !1);
    } catch (o) {
      throw (En !== null && (En = En.slice(e + 1)), Ug(wd, dr), o);
    } finally {
      (he = t), (pc = !1);
    }
  }
  return null;
}
var so = [],
  io = 0,
  pl = null,
  ml = 0,
  jt = [],
  $t = 0,
  Tr = null,
  kn = 1,
  _n = "";
function yr(e, t) {
  (so[io++] = ml), (so[io++] = pl), (pl = e), (ml = t);
}
function Sy(e, t, n) {
  (jt[$t++] = kn), (jt[$t++] = _n), (jt[$t++] = Tr), (Tr = e);
  var r = kn;
  e = _n;
  var o = 32 - Xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - Xt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (kn = (1 << (32 - Xt(t) + o)) | (n << o) | r),
      (_n = s + e);
  } else (kn = (1 << s) | (n << o) | r), (_n = e);
}
function Dd(e) {
  e.return !== null && (yr(e, 1), Sy(e, 1, 0));
}
function Pd(e) {
  for (; e === pl; )
    (pl = so[--io]), (so[io] = null), (ml = so[--io]), (so[io] = null);
  for (; e === Tr; )
    (Tr = jt[--$t]),
      (jt[$t] = null),
      (_n = jt[--$t]),
      (jt[$t] = null),
      (kn = jt[--$t]),
      (jt[$t] = null);
}
var Ct = null,
  bt = null,
  Ce = !1,
  qt = null;
function xy(e, t) {
  var n = Lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ct = e), (bt = er(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ct = e), (bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tr !== null ? { id: kn, overflow: _n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ct = e),
            (bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gu(e) {
  if (Ce) {
    var t = bt;
    if (t) {
      var n = t;
      if (!lm(e, t)) {
        if (hu(e)) throw Error(H(418));
        t = er(n.nextSibling);
        var r = Ct;
        t && lm(e, t)
          ? xy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (Ct = e));
      }
    } else {
      if (hu(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (Ce = !1), (Ct = e);
    }
  }
}
function am(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ct = e;
}
function Ci(e) {
  if (e !== Ct) return !1;
  if (!Ce) return am(e), (Ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !du(e.type, e.memoizedProps))),
    t && (t = bt))
  ) {
    if (hu(e)) throw (by(), Error(H(418)));
    for (; t; ) xy(e, t), (t = er(t.nextSibling));
  }
  if ((am(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              bt = er(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      bt = null;
    }
  } else bt = Ct ? er(e.stateNode.nextSibling) : null;
  return !0;
}
function by() {
  for (var e = bt; e; ) e = er(e.nextSibling);
}
function Eo() {
  (bt = Ct = null), (Ce = !1);
}
function Td(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
var vx = Ln.ReactCurrentBatchConfig;
function rs(e, t, n) {
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
function Ei(e, t) {
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
function cm(e) {
  var t = e._init;
  return t(e._payload);
}
function Cy(e) {
  function t(y, v) {
    if (e) {
      var g = y.deletions;
      g === null ? ((y.deletions = [v]), (y.flags |= 16)) : g.push(v);
    }
  }
  function n(y, v) {
    if (!e) return null;
    for (; v !== null; ) t(y, v), (v = v.sibling);
    return null;
  }
  function r(y, v) {
    for (y = new Map(); v !== null; )
      v.key !== null ? y.set(v.key, v) : y.set(v.index, v), (v = v.sibling);
    return y;
  }
  function o(y, v) {
    return (y = or(y, v)), (y.index = 0), (y.sibling = null), y;
  }
  function s(y, v, g) {
    return (
      (y.index = g),
      e
        ? ((g = y.alternate),
          g !== null
            ? ((g = g.index), g < v ? ((y.flags |= 2), v) : g)
            : ((y.flags |= 2), v))
        : ((y.flags |= 1048576), v)
    );
  }
  function i(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, v, g, b) {
    return v === null || v.tag !== 6
      ? ((v = Sc(g, y.mode, b)), (v.return = y), v)
      : ((v = o(v, g)), (v.return = y), v);
  }
  function a(y, v, g, b) {
    var C = g.type;
    return C === Zr
      ? u(y, v, g.props.children, b, g.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Vn &&
            cm(C) === v.type))
      ? ((b = o(v, g.props)), (b.ref = rs(y, v, g)), (b.return = y), b)
      : ((b = Xi(g.type, g.key, g.props, null, y.mode, b)),
        (b.ref = rs(y, v, g)),
        (b.return = y),
        b);
  }
  function c(y, v, g, b) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== g.containerInfo ||
      v.stateNode.implementation !== g.implementation
      ? ((v = xc(g, y.mode, b)), (v.return = y), v)
      : ((v = o(v, g.children || [])), (v.return = y), v);
  }
  function u(y, v, g, b, C) {
    return v === null || v.tag !== 7
      ? ((v = _r(g, y.mode, b, C)), (v.return = y), v)
      : ((v = o(v, g)), (v.return = y), v);
  }
  function d(y, v, g) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Sc("" + v, y.mode, g)), (v.return = y), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case pi:
          return (
            (g = Xi(v.type, v.key, v.props, null, y.mode, g)),
            (g.ref = rs(y, null, v)),
            (g.return = y),
            g
          );
        case Jr:
          return (v = xc(v, y.mode, g)), (v.return = y), v;
        case Vn:
          var b = v._init;
          return d(y, b(v._payload), g);
      }
      if (fs(v) || Jo(v))
        return (v = _r(v, y.mode, g, null)), (v.return = y), v;
      Ei(y, v);
    }
    return null;
  }
  function f(y, v, g, b) {
    var C = v !== null ? v.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : l(y, v, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case pi:
          return g.key === C ? a(y, v, g, b) : null;
        case Jr:
          return g.key === C ? c(y, v, g, b) : null;
        case Vn:
          return (C = g._init), f(y, v, C(g._payload), b);
      }
      if (fs(g) || Jo(g)) return C !== null ? null : u(y, v, g, b, null);
      Ei(y, g);
    }
    return null;
  }
  function m(y, v, g, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (y = y.get(g) || null), l(v, y, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case pi:
          return (y = y.get(b.key === null ? g : b.key) || null), a(v, y, b, C);
        case Jr:
          return (y = y.get(b.key === null ? g : b.key) || null), c(v, y, b, C);
        case Vn:
          var E = b._init;
          return m(y, v, g, E(b._payload), C);
      }
      if (fs(b) || Jo(b)) return (y = y.get(g) || null), u(v, y, b, C, null);
      Ei(v, b);
    }
    return null;
  }
  function p(y, v, g, b) {
    for (
      var C = null, E = null, _ = v, D = (v = 0), L = null;
      _ !== null && D < g.length;
      D++
    ) {
      _.index > D ? ((L = _), (_ = null)) : (L = _.sibling);
      var N = f(y, _, g[D], b);
      if (N === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && N.alternate === null && t(y, _),
        (v = s(N, v, D)),
        E === null ? (C = N) : (E.sibling = N),
        (E = N),
        (_ = L);
    }
    if (D === g.length) return n(y, _), Ce && yr(y, D), C;
    if (_ === null) {
      for (; D < g.length; D++)
        (_ = d(y, g[D], b)),
          _ !== null &&
            ((v = s(_, v, D)), E === null ? (C = _) : (E.sibling = _), (E = _));
      return Ce && yr(y, D), C;
    }
    for (_ = r(y, _); D < g.length; D++)
      (L = m(_, y, D, g[D], b)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? D : L.key),
          (v = s(L, v, D)),
          E === null ? (C = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        _.forEach(function (M) {
          return t(y, M);
        }),
      Ce && yr(y, D),
      C
    );
  }
  function h(y, v, g, b) {
    var C = Jo(g);
    if (typeof C != "function") throw Error(H(150));
    if (((g = C.call(g)), g == null)) throw Error(H(151));
    for (
      var E = (C = null), _ = v, D = (v = 0), L = null, N = g.next();
      _ !== null && !N.done;
      D++, N = g.next()
    ) {
      _.index > D ? ((L = _), (_ = null)) : (L = _.sibling);
      var M = f(y, _, N.value, b);
      if (M === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && M.alternate === null && t(y, _),
        (v = s(M, v, D)),
        E === null ? (C = M) : (E.sibling = M),
        (E = M),
        (_ = L);
    }
    if (N.done) return n(y, _), Ce && yr(y, D), C;
    if (_ === null) {
      for (; !N.done; D++, N = g.next())
        (N = d(y, N.value, b)),
          N !== null &&
            ((v = s(N, v, D)), E === null ? (C = N) : (E.sibling = N), (E = N));
      return Ce && yr(y, D), C;
    }
    for (_ = r(y, _); !N.done; D++, N = g.next())
      (N = m(_, y, D, N.value, b)),
        N !== null &&
          (e && N.alternate !== null && _.delete(N.key === null ? D : N.key),
          (v = s(N, v, D)),
          E === null ? (C = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        _.forEach(function (B) {
          return t(y, B);
        }),
      Ce && yr(y, D),
      C
    );
  }
  function x(y, v, g, b) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Zr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case pi:
          e: {
            for (var C = g.key, E = v; E !== null; ) {
              if (E.key === C) {
                if (((C = g.type), C === Zr)) {
                  if (E.tag === 7) {
                    n(y, E.sibling),
                      (v = o(E, g.props.children)),
                      (v.return = y),
                      (y = v);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Vn &&
                    cm(C) === E.type)
                ) {
                  n(y, E.sibling),
                    (v = o(E, g.props)),
                    (v.ref = rs(y, E, g)),
                    (v.return = y),
                    (y = v);
                  break e;
                }
                n(y, E);
                break;
              } else t(y, E);
              E = E.sibling;
            }
            g.type === Zr
              ? ((v = _r(g.props.children, y.mode, b, g.key)),
                (v.return = y),
                (y = v))
              : ((b = Xi(g.type, g.key, g.props, null, y.mode, b)),
                (b.ref = rs(y, v, g)),
                (b.return = y),
                (y = b));
          }
          return i(y);
        case Jr:
          e: {
            for (E = g.key; v !== null; ) {
              if (v.key === E)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === g.containerInfo &&
                  v.stateNode.implementation === g.implementation
                ) {
                  n(y, v.sibling),
                    (v = o(v, g.children || [])),
                    (v.return = y),
                    (y = v);
                  break e;
                } else {
                  n(y, v);
                  break;
                }
              else t(y, v);
              v = v.sibling;
            }
            (v = xc(g, y.mode, b)), (v.return = y), (y = v);
          }
          return i(y);
        case Vn:
          return (E = g._init), x(y, v, E(g._payload), b);
      }
      if (fs(g)) return p(y, v, g, b);
      if (Jo(g)) return h(y, v, g, b);
      Ei(y, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        v !== null && v.tag === 6
          ? (n(y, v.sibling), (v = o(v, g)), (v.return = y), (y = v))
          : (n(y, v), (v = Sc(g, y.mode, b)), (v.return = y), (y = v)),
        i(y))
      : n(y, v);
  }
  return x;
}
var ko = Cy(!0),
  Ey = Cy(!1),
  hl = ur(null),
  gl = null,
  lo = null,
  Nd = null;
function Od() {
  Nd = lo = gl = null;
}
function jd(e) {
  var t = hl.current;
  Se(hl), (e._currentValue = t);
}
function yu(e, t, n) {
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
function go(e, t) {
  (gl = e),
    (Nd = lo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ft = !0), (e.firstContext = null));
}
function Mt(e) {
  var t = e._currentValue;
  if (Nd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), lo === null)) {
      if (gl === null) throw Error(H(308));
      (lo = e), (gl.dependencies = { lanes: 0, firstContext: e });
    } else lo = lo.next = e;
  return t;
}
var br = null;
function $d(e) {
  br === null ? (br = [e]) : br.push(e);
}
function ky(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), $d(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Nn(e, r)
  );
}
function Nn(e, t) {
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
var Hn = !1;
function Ld(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _y(e, t) {
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
function Rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Nn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), $d(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Nn(e, n)
  );
}
function Ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sd(e, n);
  }
}
function um(e, t) {
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
function yl(e, t, n, r) {
  var o = e.updateQueue;
  Hn = !1;
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
              d = Pe({}, d, f);
              break e;
            case 2:
              Hn = !0;
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
    (Or |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function dm(e, t, n) {
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
var Js = {},
  yn = ur(Js),
  Ls = ur(Js),
  As = ur(Js);
function Cr(e) {
  if (e === Js) throw Error(H(174));
  return e;
}
function Ad(e, t) {
  switch ((ve(As, t), ve(Ls, e), ve(yn, Js), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qc(t, e));
  }
  Se(yn), ve(yn, t);
}
function _o() {
  Se(yn), Se(Ls), Se(As);
}
function Ry(e) {
  Cr(As.current);
  var t = Cr(yn.current),
    n = Qc(t, e.type);
  t !== n && (ve(Ls, e), ve(yn, n));
}
function Fd(e) {
  Ls.current === e && (Se(yn), Se(Ls));
}
var Re = ur(0);
function vl(e) {
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
var mc = [];
function Md() {
  for (var e = 0; e < mc.length; e++)
    mc[e]._workInProgressVersionPrimary = null;
  mc.length = 0;
}
var Wi = Ln.ReactCurrentDispatcher,
  hc = Ln.ReactCurrentBatchConfig,
  Nr = 0,
  De = null,
  ze = null,
  Ve = null,
  wl = !1,
  Ss = !1,
  Fs = 0,
  wx = 0;
function Xe() {
  throw Error(H(321));
}
function Id(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Zt(e[n], t[n])) return !1;
  return !0;
}
function zd(e, t, n, r, o, s) {
  if (
    ((Nr = s),
    (De = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wi.current = e === null || e.memoizedState === null ? Cx : Ex),
    (e = n(r, o)),
    Ss)
  ) {
    s = 0;
    do {
      if (((Ss = !1), (Fs = 0), 25 <= s)) throw Error(H(301));
      (s += 1),
        (Ve = ze = null),
        (t.updateQueue = null),
        (Wi.current = kx),
        (e = n(r, o));
    } while (Ss);
  }
  if (
    ((Wi.current = Sl),
    (t = ze !== null && ze.next !== null),
    (Nr = 0),
    (Ve = ze = De = null),
    (wl = !1),
    t)
  )
    throw Error(H(300));
  return e;
}
function Bd() {
  var e = Fs !== 0;
  return (Fs = 0), e;
}
function dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ve === null ? (De.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
}
function It() {
  if (ze === null) {
    var e = De.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ze.next;
  var t = Ve === null ? De.memoizedState : Ve.next;
  if (t !== null) (Ve = t), (ze = e);
  else {
    if (e === null) throw Error(H(310));
    (ze = e),
      (e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null,
      }),
      Ve === null ? (De.memoizedState = Ve = e) : (Ve = Ve.next = e);
  }
  return Ve;
}
function Ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gc(e) {
  var t = It(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = ze,
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
      if ((Nr & u) === u)
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
          (De.lanes |= u),
          (Or |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? (i = r) : (a.next = l),
      Zt(r, t.memoizedState) || (ft = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (De.lanes |= s), (Or |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yc(e) {
  var t = It(),
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
    Zt(s, t.memoizedState) || (ft = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Dy() {}
function Py(e, t) {
  var n = De,
    r = It(),
    o = t(),
    s = !Zt(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (ft = !0)),
    (r = r.queue),
    Vd(Oy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ve !== null && Ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Is(9, Ny.bind(null, n, r, o, t), void 0, null),
      He === null)
    )
      throw Error(H(349));
    Nr & 30 || Ty(n, t, o);
  }
  return o;
}
function Ty(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ny(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), jy(t) && $y(e);
}
function Oy(e, t, n) {
  return n(function () {
    jy(t) && $y(e);
  });
}
function jy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zt(e, n);
  } catch {
    return !0;
  }
}
function $y(e) {
  var t = Nn(e, 1);
  t !== null && Qt(t, e, 1, -1);
}
function fm(e) {
  var t = dn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ms,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bx.bind(null, De, e)),
    [t.memoizedState, e]
  );
}
function Is(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ly() {
  return It().memoizedState;
}
function Yi(e, t, n, r) {
  var o = dn();
  (De.flags |= e),
    (o.memoizedState = Is(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xl(e, t, n, r) {
  var o = It();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ze !== null) {
    var i = ze.memoizedState;
    if (((s = i.destroy), r !== null && Id(r, i.deps))) {
      o.memoizedState = Is(t, n, s, r);
      return;
    }
  }
  (De.flags |= e), (o.memoizedState = Is(1 | t, n, s, r));
}
function pm(e, t) {
  return Yi(8390656, 8, e, t);
}
function Vd(e, t) {
  return Xl(2048, 8, e, t);
}
function Ay(e, t) {
  return Xl(4, 2, e, t);
}
function Fy(e, t) {
  return Xl(4, 4, e, t);
}
function My(e, t) {
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
function Iy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Xl(4, 4, My.bind(null, t, e), n)
  );
}
function Hd() {}
function zy(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Id(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function By(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Id(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vy(e, t, n) {
  return Nr & 21
    ? (Zt(n, t) || ((n = Kg()), (De.lanes |= n), (Or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = n));
}
function Sx(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hc.transition;
  hc.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (hc.transition = r);
  }
}
function Hy() {
  return It().memoizedState;
}
function xx(e, t, n) {
  var r = rr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Uy(e))
  )
    Wy(t, n);
  else if (((n = ky(e, t, n, r)), n !== null)) {
    var o = lt();
    Qt(n, e, r, o), Yy(n, t, r);
  }
}
function bx(e, t, n) {
  var r = rr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uy(e)) Wy(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = l), Zt(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), $d(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = ky(e, t, o, r)),
      n !== null && ((o = lt()), Qt(n, e, r, o), Yy(n, t, r));
  }
}
function Uy(e) {
  var t = e.alternate;
  return e === De || (t !== null && t === De);
}
function Wy(e, t) {
  Ss = wl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sd(e, n);
  }
}
var Sl = {
    readContext: Mt,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useInsertionEffect: Xe,
    useLayoutEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useMutableSource: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    unstable_isNewReconciler: !1,
  },
  Cx = {
    readContext: Mt,
    useCallback: function (e, t) {
      return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Mt,
    useEffect: pm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yi(4194308, 4, My.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dn();
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
        (e = e.dispatch = xx.bind(null, De, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fm,
    useDebugValue: Hd,
    useDeferredValue: function (e) {
      return (dn().memoizedState = e);
    },
    useTransition: function () {
      var e = fm(!1),
        t = e[0];
      return (e = Sx.bind(null, e[1])), (dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = De,
        o = dn();
      if (Ce) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), He === null)) throw Error(H(349));
        Nr & 30 || Ty(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        pm(Oy.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Is(9, Ny.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dn(),
        t = He.identifierPrefix;
      if (Ce) {
        var n = _n,
          r = kn;
        (n = (r & ~(1 << (32 - Xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ex = {
    readContext: Mt,
    useCallback: zy,
    useContext: Mt,
    useEffect: Vd,
    useImperativeHandle: Iy,
    useInsertionEffect: Ay,
    useLayoutEffect: Fy,
    useMemo: By,
    useReducer: gc,
    useRef: Ly,
    useState: function () {
      return gc(Ms);
    },
    useDebugValue: Hd,
    useDeferredValue: function (e) {
      var t = It();
      return Vy(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = gc(Ms)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Dy,
    useSyncExternalStore: Py,
    useId: Hy,
    unstable_isNewReconciler: !1,
  },
  kx = {
    readContext: Mt,
    useCallback: zy,
    useContext: Mt,
    useEffect: Vd,
    useImperativeHandle: Iy,
    useInsertionEffect: Ay,
    useLayoutEffect: Fy,
    useMemo: By,
    useReducer: yc,
    useRef: Ly,
    useState: function () {
      return yc(Ms);
    },
    useDebugValue: Hd,
    useDeferredValue: function (e) {
      var t = It();
      return ze === null ? (t.memoizedState = e) : Vy(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = yc(Ms)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Dy,
    useSyncExternalStore: Py,
    useId: Hy,
    unstable_isNewReconciler: !1,
  };
function Yt(e, t) {
  if (e && e.defaultProps) {
    (t = Pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      o = rr(e),
      s = Rn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = tr(e, s, o)),
      t !== null && (Qt(t, e, o, r), Ui(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      o = rr(e),
      s = Rn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = tr(e, s, o)),
      t !== null && (Qt(t, e, o, r), Ui(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = lt(),
      r = rr(e),
      o = Rn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = tr(e, o, r)),
      t !== null && (Qt(t, e, r, n), Ui(t, e, r));
  },
};
function mm(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ns(n, r) || !Ns(o, s)
      : !0
  );
}
function Ky(e, t, n) {
  var r = !1,
    o = ir,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Mt(s))
      : ((o = gt(t) ? Pr : tt.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Co(e, o) : ir)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function hm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function wu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ld(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = Mt(s))
    : ((s = gt(t) ? Pr : tt.current), (o.context = Co(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (vu(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ql.enqueueReplaceState(o, o.state, null),
      yl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ro(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Z1(r)), (r = r.return);
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
function vc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Su(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _x = typeof WeakMap == "function" ? WeakMap : Map;
function qy(e, t, n) {
  (n = Rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bl || ((bl = !0), (Tu = r)), Su(e, t);
    }),
    n
  );
}
function Gy(e, t, n) {
  (n = Rn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Su(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Su(e, t),
          typeof r != "function" &&
            (nr === null ? (nr = new Set([this])) : nr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function gm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _x();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = zx.bind(null, e, t, n)), t.then(e, e));
}
function ym(e) {
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
function vm(e, t, n, r, o) {
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
              : ((t = Rn(-1, 1)), (t.tag = 2), tr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rx = Ln.ReactCurrentOwner,
  ft = !1;
function st(e, t, n, r) {
  t.child = e === null ? Ey(t, null, n, r) : ko(t, e.child, n, r);
}
function wm(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    go(t, o),
    (r = zd(e, t, n, r, s, o)),
    (n = Bd()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        On(e, t, o))
      : (Ce && n && Dd(t), (t.flags |= 1), st(e, t, r, o), t.child)
  );
}
function Sm(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Qd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Xy(e, t, s, r, o))
      : ((e = Xi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ns), n(i, r) && e.ref === t.ref)
    )
      return On(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = or(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Xy(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ns(s, r) && e.ref === t.ref)
      if (((ft = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (ft = !0);
      else return (t.lanes = e.lanes), On(e, t, o);
  }
  return xu(e, t, n, r, o);
}
function Qy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(co, xt),
        (xt |= n);
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
          ve(co, xt),
          (xt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ve(co, xt),
        (xt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(co, xt),
      (xt |= r);
  return st(e, t, o, n), t.child;
}
function Jy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xu(e, t, n, r, o) {
  var s = gt(n) ? Pr : tt.current;
  return (
    (s = Co(t, s)),
    go(t, o),
    (n = zd(e, t, n, r, s, o)),
    (r = Bd()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        On(e, t, o))
      : (Ce && r && Dd(t), (t.flags |= 1), st(e, t, n, o), t.child)
  );
}
function xm(e, t, n, r, o) {
  if (gt(n)) {
    var s = !0;
    fl(t);
  } else s = !1;
  if ((go(t, o), t.stateNode === null))
    Ki(e, t), Ky(t, n, r), wu(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Mt(c))
      : ((c = gt(n) ? Pr : tt.current), (c = Co(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && hm(t, i, r, c)),
      (Hn = !1);
    var f = t.memoizedState;
    (i.state = f),
      yl(t, r, i, o),
      (a = t.memoizedState),
      l !== r || f !== a || ht.current || Hn
        ? (typeof u == "function" && (vu(t, n, u, r), (a = t.memoizedState)),
          (l = Hn || mm(t, n, l, r, f, a, c))
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
      _y(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Yt(t.type, l)),
      (i.props = c),
      (d = t.pendingProps),
      (f = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Mt(a))
        : ((a = gt(n) ? Pr : tt.current), (a = Co(t, a)));
    var m = n.getDerivedStateFromProps;
    (u =
      typeof m == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && hm(t, i, r, a)),
      (Hn = !1),
      (f = t.memoizedState),
      (i.state = f),
      yl(t, r, i, o);
    var p = t.memoizedState;
    l !== d || f !== p || ht.current || Hn
      ? (typeof m == "function" && (vu(t, n, m, r), (p = t.memoizedState)),
        (c = Hn || mm(t, n, c, r, f, p, a) || !1)
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
  return bu(e, t, n, r, s, o);
}
function bu(e, t, n, r, o, s) {
  Jy(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && im(t, n, !1), On(e, t, s);
  (r = t.stateNode), (Rx.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ko(t, e.child, null, s)), (t.child = ko(t, null, l, s)))
      : st(e, t, l, s),
    (t.memoizedState = r.state),
    o && im(t, n, !0),
    t.child
  );
}
function Zy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sm(e, t.context, !1),
    Ad(e, t.containerInfo);
}
function bm(e, t, n, r, o) {
  return Eo(), Td(o), (t.flags |= 256), st(e, t, n, r), t.child;
}
var Cu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ev(e, t, n) {
  var r = t.pendingProps,
    o = Re.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ve(Re, o & 1),
    e === null)
  )
    return (
      gu(t),
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
                : (s = ea(i, r, 0, null)),
              (e = _r(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Eu(n)),
              (t.memoizedState = Cu),
              e)
            : Ud(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Dx(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = or(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = or(l, s)) : ((s = _r(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Eu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cu),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = or(s, { mode: "visible", children: r.children })),
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
function Ud(e, t) {
  return (
    (t = ea({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ki(e, t, n, r) {
  return (
    r !== null && Td(r),
    ko(t, e.child, null, n),
    (e = Ud(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dx(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vc(Error(H(422)))), ki(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = ea({ mode: "visible", children: r.children }, o, 0, null)),
        (s = _r(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && ko(t, e.child, null, i),
        (t.child.memoizedState = Eu(i)),
        (t.memoizedState = Cu),
        s);
  if (!(t.mode & 1)) return ki(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(H(419))), (r = vc(s, r, void 0)), ki(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), ft || l)) {
    if (((r = He), r !== null)) {
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
          ((s.retryLane = o), Nn(e, o), Qt(r, e, o, -1));
    }
    return Xd(), (r = vc(Error(H(421)))), ki(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bx.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (bt = er(o.nextSibling)),
      (Ct = t),
      (Ce = !0),
      (qt = null),
      e !== null &&
        ((jt[$t++] = kn),
        (jt[$t++] = _n),
        (jt[$t++] = Tr),
        (kn = e.id),
        (_n = e.overflow),
        (Tr = t)),
      (t = Ud(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yu(e.return, t, n);
}
function wc(e, t, n, r, o) {
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
function tv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((st(e, t, r.children, n), (r = Re.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cm(e, n, t);
        else if (e.tag === 19) Cm(e, n, t);
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
  if ((ve(Re, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && vl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          wc(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && vl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        wc(t, !0, n, null, s);
        break;
      case "together":
        wc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ki(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function On(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Or |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (
      e = t.child, n = or(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = or(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Px(e, t, n) {
  switch (t.tag) {
    case 3:
      Zy(t), Eo();
      break;
    case 5:
      Ry(t);
      break;
    case 1:
      gt(t.type) && fl(t);
      break;
    case 4:
      Ad(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ve(hl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(Re, Re.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ev(e, t, n)
          : (ve(Re, Re.current & 1),
            (e = On(e, t, n)),
            e !== null ? e.sibling : null);
      ve(Re, Re.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ve(Re, Re.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qy(e, t, n);
  }
  return On(e, t, n);
}
var nv, ku, rv, ov;
nv = function (e, t) {
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
ku = function () {};
rv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Cr(yn.current);
    var s = null;
    switch (n) {
      case "input":
        (o = Kc(e, o)), (r = Kc(e, r)), (s = []);
        break;
      case "select":
        (o = Pe({}, o, { value: void 0 })),
          (r = Pe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = Xc(e, o)), (r = Xc(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ul);
    }
    Jc(n, r);
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
            (Es.hasOwnProperty(c)
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
              (Es.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && we("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ov = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function os(e, t) {
  if (!Ce)
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
function Qe(e) {
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
function Tx(e, t, n) {
  var r = t.pendingProps;
  switch ((Pd(t), t.tag)) {
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
      return Qe(t), null;
    case 1:
      return gt(t.type) && dl(), Qe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _o(),
        Se(ht),
        Se(tt),
        Md(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ci(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qt !== null && (ju(qt), (qt = null)))),
        ku(e, t),
        Qe(t),
        null
      );
    case 5:
      Fd(t);
      var o = Cr(As.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return Qe(t), null;
        }
        if (((e = Cr(yn.current)), Ci(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[mn] = t), (r[$s] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ms.length; o++) we(ms[o], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we("error", r), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              Op(r, s), we("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                we("invalid", r);
              break;
            case "textarea":
              $p(r, s), we("invalid", r);
          }
          Jc(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      bi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      bi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Es.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  we("scroll", r);
            }
          switch (n) {
            case "input":
              mi(r), jp(r, s, !0);
              break;
            case "textarea":
              mi(r), Lp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ul);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Og(n)),
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
            (e[mn] = t),
            (e[$s] = r),
            nv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Zc(n, r)), n)) {
              case "dialog":
                we("cancel", e), we("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ms.length; o++) we(ms[o], e);
                o = r;
                break;
              case "source":
                we("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                we("error", e), we("load", e), (o = r);
                break;
              case "details":
                we("toggle", e), (o = r);
                break;
              case "input":
                Op(e, r), (o = Kc(e, r)), we("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Pe({}, r, { value: void 0 })),
                  we("invalid", e);
                break;
              case "textarea":
                $p(e, r), (o = Xc(e, r)), we("invalid", e);
                break;
              default:
                o = r;
            }
            Jc(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Lg(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && jg(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ks(e, a)
                    : typeof a == "number" && ks(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Es.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && we("scroll", e)
                      : a != null && md(e, s, a, i));
              }
            switch (n) {
              case "input":
                mi(e), jp(e, r, !1);
                break;
              case "textarea":
                mi(e), Lp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? fo(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      fo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ul);
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
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null) ov(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (((n = Cr(As.current)), Cr(yn.current), Ci(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[mn] = t),
            (s = r.nodeValue !== n) && ((e = Ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                bi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mn] = t),
            (t.stateNode = r);
      }
      return Qe(t), null;
    case 13:
      if (
        (Se(Re),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ce && bt !== null && t.mode & 1 && !(t.flags & 128))
          by(), Eo(), (t.flags |= 98560), (s = !1);
        else if (((s = Ci(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(H(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(H(317));
            s[mn] = t;
          } else
            Eo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Qe(t), (s = !1);
        } else qt !== null && (ju(qt), (qt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Re.current & 1 ? Be === 0 && (Be = 3) : Xd())),
          t.updateQueue !== null && (t.flags |= 4),
          Qe(t),
          null);
    case 4:
      return (
        _o(), ku(e, t), e === null && Os(t.stateNode.containerInfo), Qe(t), null
      );
    case 10:
      return jd(t.type._context), Qe(t), null;
    case 17:
      return gt(t.type) && dl(), Qe(t), null;
    case 19:
      if ((Se(Re), (s = t.memoizedState), s === null)) return Qe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) os(s, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = vl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    os(s, !1),
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
                return ve(Re, (Re.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            $e() > Do &&
            ((t.flags |= 128), (r = !0), os(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              os(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !Ce)
            )
              return Qe(t), null;
          } else
            2 * $e() - s.renderingStartTime > Do &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), os(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = $e()),
          (t.sibling = null),
          (n = Re.current),
          ve(Re, r ? (n & 1) | 2 : n & 1),
          t)
        : (Qe(t), null);
    case 22:
    case 23:
      return (
        Gd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Qe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function Nx(e, t) {
  switch ((Pd(t), t.tag)) {
    case 1:
      return (
        gt(t.type) && dl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _o(),
        Se(ht),
        Se(tt),
        Md(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fd(t), null;
    case 13:
      if (
        (Se(Re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340));
        Eo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Se(Re), null;
    case 4:
      return _o(), null;
    case 10:
      return jd(t.type._context), null;
    case 22:
    case 23:
      return Gd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _i = !1,
  Je = !1,
  Ox = typeof WeakSet == "function" ? WeakSet : Set,
  q = null;
function ao(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ne(e, t, r);
      }
    else n.current = null;
}
function _u(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var Em = !1;
function jx(e, t) {
  if (((cu = ll), (e = cy()), Rd(e))) {
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
  for (uu = { focusedElem: e, selectionRange: n }, ll = !1, q = t; q !== null; )
    if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (q = e);
    else
      for (; q !== null; ) {
        t = q;
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
                    x = p.memoizedState,
                    y = t.stateNode,
                    v = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : Yt(t.type, h),
                      x
                    );
                  y.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
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
          Ne(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (q = e);
          break;
        }
        q = t.return;
      }
  return (p = Em), (Em = !1), p;
}
function xs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && _u(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Jl(e, t) {
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
function Ru(e) {
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
function sv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mn], delete t[$s], delete t[pu], delete t[hx], delete t[gx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function iv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function km(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || iv(e.return)) return null;
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
function Du(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ul));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), (e = e.sibling);
}
function Pu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pu(e, t, n), e = e.sibling; e !== null; ) Pu(e, t, n), (e = e.sibling);
}
var We = null,
  Kt = !1;
function zn(e, t, n) {
  for (n = n.child; n !== null; ) lv(e, t, n), (n = n.sibling);
}
function lv(e, t, n) {
  if (gn && typeof gn.onCommitFiberUnmount == "function")
    try {
      gn.onCommitFiberUnmount(Ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Je || ao(n, t);
    case 6:
      var r = We,
        o = Kt;
      (We = null),
        zn(e, t, n),
        (We = r),
        (Kt = o),
        We !== null &&
          (Kt
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null &&
        (Kt
          ? ((e = We),
            (n = n.stateNode),
            e.nodeType === 8
              ? fc(e.parentNode, n)
              : e.nodeType === 1 && fc(e, n),
            Ps(e))
          : fc(We, n.stateNode));
      break;
    case 4:
      (r = We),
        (o = Kt),
        (We = n.stateNode.containerInfo),
        (Kt = !0),
        zn(e, t, n),
        (We = r),
        (Kt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && _u(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      zn(e, t, n);
      break;
    case 1:
      if (
        !Je &&
        (ao(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ne(n, t, l);
        }
      zn(e, t, n);
      break;
    case 21:
      zn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Je = (r = Je) || n.memoizedState !== null), zn(e, t, n), (Je = r))
        : zn(e, t, n);
      break;
    default:
      zn(e, t, n);
  }
}
function _m(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ox()),
      t.forEach(function (r) {
        var o = Vx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Wt(e, t) {
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
              (We = l.stateNode), (Kt = !1);
              break e;
            case 3:
              (We = l.stateNode.containerInfo), (Kt = !0);
              break e;
            case 4:
              (We = l.stateNode.containerInfo), (Kt = !0);
              break e;
          }
          l = l.return;
        }
        if (We === null) throw Error(H(160));
        lv(s, i, o), (We = null), (Kt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        Ne(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) av(t, e), (t = t.sibling);
}
function av(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Wt(t, e), cn(e), r & 4)) {
        try {
          xs(3, e, e.return), Jl(3, e);
        } catch (h) {
          Ne(e, e.return, h);
        }
        try {
          xs(5, e, e.return);
        } catch (h) {
          Ne(e, e.return, h);
        }
      }
      break;
    case 1:
      Wt(t, e), cn(e), r & 512 && n !== null && ao(n, n.return);
      break;
    case 5:
      if (
        (Wt(t, e),
        cn(e),
        r & 512 && n !== null && ao(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ks(o, "");
        } catch (h) {
          Ne(e, e.return, h);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Tg(o, s),
              Zc(l, i);
            var c = Zc(l, s);
            for (i = 0; i < a.length; i += 2) {
              var u = a[i],
                d = a[i + 1];
              u === "style"
                ? Lg(o, d)
                : u === "dangerouslySetInnerHTML"
                ? jg(o, d)
                : u === "children"
                ? ks(o, d)
                : md(o, u, d, c);
            }
            switch (l) {
              case "input":
                qc(o, s);
                break;
              case "textarea":
                Ng(o, s);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? fo(o, !!s.multiple, m, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? fo(o, !!s.multiple, s.defaultValue, !0)
                      : fo(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[$s] = s;
          } catch (h) {
            Ne(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Wt(t, e), cn(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (h) {
          Ne(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Wt(t, e), cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ps(t.containerInfo);
        } catch (h) {
          Ne(e, e.return, h);
        }
      break;
    case 4:
      Wt(t, e), cn(e);
      break;
    case 13:
      Wt(t, e),
        cn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Kd = $e())),
        r & 4 && _m(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Je = (c = Je) || u), Wt(t, e), (Je = c)) : Wt(t, e),
        cn(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (q = e, u = e.child; u !== null; ) {
            for (d = q = u; q !== null; ) {
              switch (((f = q), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xs(4, f, f.return);
                  break;
                case 1:
                  ao(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (h) {
                      Ne(r, n, h);
                    }
                  }
                  break;
                case 5:
                  ao(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Dm(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (q = m)) : Dm(d);
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
                      (l.style.display = $g("display", i)));
              } catch (h) {
                Ne(e, e.return, h);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (h) {
                Ne(e, e.return, h);
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
      Wt(t, e), cn(e), r & 4 && _m(e);
      break;
    case 21:
      break;
    default:
      Wt(t, e), cn(e);
  }
}
function cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (iv(n)) {
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
          r.flags & 32 && (ks(o, ""), (r.flags &= -33));
          var s = km(e);
          Pu(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = km(e);
          Du(e, l, i);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      Ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $x(e, t, n) {
  (q = e), cv(e);
}
function cv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var o = q,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || _i;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Je;
        l = _i;
        var c = Je;
        if (((_i = i), (Je = a) && !c))
          for (q = o; q !== null; )
            (i = q),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Pm(o)
                : a !== null
                ? ((a.return = i), (q = a))
                : Pm(o);
        for (; s !== null; ) (q = s), cv(s), (s = s.sibling);
        (q = o), (_i = l), (Je = c);
      }
      Rm(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (q = s)) : Rm(e);
  }
}
function Rm(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Je || Jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Je)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && dm(t, s, r);
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
                dm(t, i, n);
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
                    d !== null && Ps(d);
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
        Je || (t.flags & 512 && Ru(t));
      } catch (f) {
        Ne(t, t.return, f);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (q = n);
      break;
    }
    q = t.return;
  }
}
function Dm(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (q = n);
      break;
    }
    q = t.return;
  }
}
function Pm(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jl(4, t);
          } catch (a) {
            Ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ne(t, o, a);
            }
          }
          var s = t.return;
          try {
            Ru(t);
          } catch (a) {
            Ne(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ru(t);
          } catch (a) {
            Ne(t, i, a);
          }
      }
    } catch (a) {
      Ne(t, t.return, a);
    }
    if (t === e) {
      q = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (q = l);
      break;
    }
    q = t.return;
  }
}
var Lx = Math.ceil,
  xl = Ln.ReactCurrentDispatcher,
  Wd = Ln.ReactCurrentOwner,
  At = Ln.ReactCurrentBatchConfig,
  pe = 0,
  He = null,
  Me = null,
  Ye = 0,
  xt = 0,
  co = ur(0),
  Be = 0,
  zs = null,
  Or = 0,
  Zl = 0,
  Yd = 0,
  bs = null,
  dt = null,
  Kd = 0,
  Do = 1 / 0,
  Cn = null,
  bl = !1,
  Tu = null,
  nr = null,
  Ri = !1,
  Gn = null,
  Cl = 0,
  Cs = 0,
  Nu = null,
  qi = -1,
  Gi = 0;
function lt() {
  return pe & 6 ? $e() : qi !== -1 ? qi : (qi = $e());
}
function rr(e) {
  return e.mode & 1
    ? pe & 2 && Ye !== 0
      ? Ye & -Ye
      : vx.transition !== null
      ? (Gi === 0 && (Gi = Kg()), Gi)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ey(e.type))),
        e)
    : 1;
}
function Qt(e, t, n, r) {
  if (50 < Cs) throw ((Cs = 0), (Nu = null), Error(H(185)));
  Gs(e, n, r),
    (!(pe & 2) || e !== He) &&
      (e === He && (!(pe & 2) && (Zl |= n), Be === 4 && Yn(e, Ye)),
      yt(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((Do = $e() + 500), Gl && dr()));
}
function yt(e, t) {
  var n = e.callbackNode;
  vS(e, t);
  var r = il(e, e === He ? Ye : 0);
  if (r === 0)
    n !== null && Mp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mp(n), t === 1))
      e.tag === 0 ? yx(Tm.bind(null, e)) : wy(Tm.bind(null, e)),
        px(function () {
          !(pe & 6) && dr();
        }),
        (n = null);
    else {
      switch (qg(r)) {
        case 1:
          n = wd;
          break;
        case 4:
          n = Wg;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = Yg;
          break;
        default:
          n = sl;
      }
      n = yv(n, uv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function uv(e, t) {
  if (((qi = -1), (Gi = 0), pe & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if (yo() && e.callbackNode !== n) return null;
  var r = il(e, e === He ? Ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = El(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var s = fv();
    (He !== e || Ye !== t) && ((Cn = null), (Do = $e() + 500), kr(e, t));
    do
      try {
        Mx();
        break;
      } catch (l) {
        dv(e, l);
      }
    while (!0);
    Od(),
      (xl.current = s),
      (pe = o),
      Me !== null ? (t = 0) : ((He = null), (Ye = 0), (t = Be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ou(e)), o !== 0 && ((r = o), (t = Ou(e, o)))), t === 1)
    )
      throw ((n = zs), kr(e, 0), Yn(e, r), yt(e, $e()), n);
    if (t === 6) Yn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ax(o) &&
          ((t = El(e, r)),
          t === 2 && ((s = ou(e)), s !== 0 && ((r = s), (t = Ou(e, s)))),
          t === 1))
      )
        throw ((n = zs), kr(e, 0), Yn(e, r), yt(e, $e()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          vr(e, dt, Cn);
          break;
        case 3:
          if (
            (Yn(e, r), (r & 130023424) === r && ((t = Kd + 500 - $e()), 10 < t))
          ) {
            if (il(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              lt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = fu(vr.bind(null, e, dt, Cn), t);
            break;
          }
          vr(e, dt, Cn);
          break;
        case 4:
          if ((Yn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Xt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = $e() - r),
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
                : 1960 * Lx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = fu(vr.bind(null, e, dt, Cn), r);
            break;
          }
          vr(e, dt, Cn);
          break;
        case 5:
          vr(e, dt, Cn);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return yt(e, $e()), e.callbackNode === n ? uv.bind(null, e) : null;
}
function Ou(e, t) {
  var n = bs;
  return (
    e.current.memoizedState.isDehydrated && (kr(e, t).flags |= 256),
    (e = El(e, t)),
    e !== 2 && ((t = dt), (dt = n), t !== null && ju(t)),
    e
  );
}
function ju(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function Ax(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Zt(s(), o)) return !1;
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
function Yn(e, t) {
  for (
    t &= ~Yd,
      t &= ~Zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Tm(e) {
  if (pe & 6) throw Error(H(327));
  yo();
  var t = il(e, 0);
  if (!(t & 1)) return yt(e, $e()), null;
  var n = El(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ou(e);
    r !== 0 && ((t = r), (n = Ou(e, r)));
  }
  if (n === 1) throw ((n = zs), kr(e, 0), Yn(e, t), yt(e, $e()), n);
  if (n === 6) throw Error(H(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vr(e, dt, Cn),
    yt(e, $e()),
    null
  );
}
function qd(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((Do = $e() + 500), Gl && dr());
  }
}
function jr(e) {
  Gn !== null && Gn.tag === 0 && !(pe & 6) && yo();
  var t = pe;
  pe |= 1;
  var n = At.transition,
    r = he;
  try {
    if (((At.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (At.transition = n), (pe = t), !(pe & 6) && dr();
  }
}
function Gd() {
  (xt = co.current), Se(co);
}
function kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fx(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((Pd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && dl();
          break;
        case 3:
          _o(), Se(ht), Se(tt), Md();
          break;
        case 5:
          Fd(r);
          break;
        case 4:
          _o();
          break;
        case 13:
          Se(Re);
          break;
        case 19:
          Se(Re);
          break;
        case 10:
          jd(r.type._context);
          break;
        case 22:
        case 23:
          Gd();
      }
      n = n.return;
    }
  if (
    ((He = e),
    (Me = e = or(e.current, null)),
    (Ye = xt = t),
    (Be = 0),
    (zs = null),
    (Yd = Zl = Or = 0),
    (dt = bs = null),
    br !== null)
  ) {
    for (t = 0; t < br.length; t++)
      if (((n = br[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    br = null;
  }
  return e;
}
function dv(e, t) {
  do {
    var n = Me;
    try {
      if ((Od(), (Wi.current = Sl), wl)) {
        for (var r = De.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        wl = !1;
      }
      if (
        ((Nr = 0),
        (Ve = ze = De = null),
        (Ss = !1),
        (Fs = 0),
        (Wd.current = null),
        n === null || n.return === null)
      ) {
        (Be = 1), (zs = t), (Me = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Ye),
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
          var m = ym(i);
          if (m !== null) {
            (m.flags &= -257),
              vm(m, i, l, s, t),
              m.mode & 1 && gm(s, c, t),
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
              gm(s, c, t), Xd();
              break e;
            }
            a = Error(H(426));
          }
        } else if (Ce && l.mode & 1) {
          var x = ym(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              vm(x, i, l, s, t),
              Td(Ro(a, l));
            break e;
          }
        }
        (s = a = Ro(a, l)),
          Be !== 4 && (Be = 2),
          bs === null ? (bs = [s]) : bs.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var y = qy(s, a, t);
              um(s, y);
              break e;
            case 1:
              l = a;
              var v = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (nr === null || !nr.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var b = Gy(s, l, t);
                um(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      mv(n);
    } catch (C) {
      (t = C), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fv() {
  var e = xl.current;
  return (xl.current = Sl), e === null ? Sl : e;
}
function Xd() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    He === null || (!(Or & 268435455) && !(Zl & 268435455)) || Yn(He, Ye);
}
function El(e, t) {
  var n = pe;
  pe |= 2;
  var r = fv();
  (He !== e || Ye !== t) && ((Cn = null), kr(e, t));
  do
    try {
      Fx();
      break;
    } catch (o) {
      dv(e, o);
    }
  while (!0);
  if ((Od(), (pe = n), (xl.current = r), Me !== null)) throw Error(H(261));
  return (He = null), (Ye = 0), Be;
}
function Fx() {
  for (; Me !== null; ) pv(Me);
}
function Mx() {
  for (; Me !== null && !cS(); ) pv(Me);
}
function pv(e) {
  var t = gv(e.alternate, e, xt);
  (e.memoizedProps = e.pendingProps),
    t === null ? mv(e) : (Me = t),
    (Wd.current = null);
}
function mv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nx(n, t)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), (Me = null);
        return;
      }
    } else if (((n = Tx(n, t, xt)), n !== null)) {
      Me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function vr(e, t, n) {
  var r = he,
    o = At.transition;
  try {
    (At.transition = null), (he = 1), Ix(e, t, n, r);
  } finally {
    (At.transition = o), (he = r);
  }
  return null;
}
function Ix(e, t, n, r) {
  do yo();
  while (Gn !== null);
  if (pe & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (wS(e, s),
    e === He && ((Me = He = null), (Ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ri ||
      ((Ri = !0),
      yv(sl, function () {
        return yo(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = At.transition), (At.transition = null);
    var i = he;
    he = 1;
    var l = pe;
    (pe |= 4),
      (Wd.current = null),
      jx(e, n),
      av(n, e),
      sx(uu),
      (ll = !!cu),
      (uu = cu = null),
      (e.current = n),
      $x(n),
      uS(),
      (pe = l),
      (he = i),
      (At.transition = s);
  } else e.current = n;
  if (
    (Ri && ((Ri = !1), (Gn = e), (Cl = o)),
    (s = e.pendingLanes),
    s === 0 && (nr = null),
    pS(n.stateNode),
    yt(e, $e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bl) throw ((bl = !1), (e = Tu), (Tu = null), e);
  return (
    Cl & 1 && e.tag !== 0 && yo(),
    (s = e.pendingLanes),
    s & 1 ? (e === Nu ? Cs++ : ((Cs = 0), (Nu = e))) : (Cs = 0),
    dr(),
    null
  );
}
function yo() {
  if (Gn !== null) {
    var e = qg(Cl),
      t = At.transition,
      n = he;
    try {
      if (((At.transition = null), (he = 16 > e ? 16 : e), Gn === null))
        var r = !1;
      else {
        if (((e = Gn), (Gn = null), (Cl = 0), pe & 6)) throw Error(H(331));
        var o = pe;
        for (pe |= 4, q = e.current; q !== null; ) {
          var s = q,
            i = s.child;
          if (q.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (q = c; q !== null; ) {
                  var u = q;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (q = d);
                  else
                    for (; q !== null; ) {
                      u = q;
                      var f = u.sibling,
                        m = u.return;
                      if ((sv(u), u === c)) {
                        q = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (q = f);
                        break;
                      }
                      q = m;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var h = p.child;
                if (h !== null) {
                  p.child = null;
                  do {
                    var x = h.sibling;
                    (h.sibling = null), (h = x);
                  } while (h !== null);
                }
              }
              q = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (q = i);
          else
            e: for (; q !== null; ) {
              if (((s = q), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xs(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (q = y);
                break e;
              }
              q = s.return;
            }
        }
        var v = e.current;
        for (q = v; q !== null; ) {
          i = q;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (q = g);
          else
            e: for (i = v; q !== null; ) {
              if (((l = q), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl(9, l);
                  }
                } catch (C) {
                  Ne(l, l.return, C);
                }
              if (l === i) {
                q = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                (b.return = l.return), (q = b);
                break e;
              }
              q = l.return;
            }
        }
        if (
          ((pe = o), dr(), gn && typeof gn.onPostCommitFiberRoot == "function")
        )
          try {
            gn.onPostCommitFiberRoot(Ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (At.transition = t);
    }
  }
  return !1;
}
function Nm(e, t, n) {
  (t = Ro(n, t)),
    (t = qy(e, t, 1)),
    (e = tr(e, t, 1)),
    (t = lt()),
    e !== null && (Gs(e, 1, t), yt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) Nm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (nr === null || !nr.has(r)))
        ) {
          (e = Ro(n, e)),
            (e = Gy(t, e, 1)),
            (t = tr(t, e, 1)),
            (e = lt()),
            t !== null && (Gs(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = lt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    He === e &&
      (Ye & n) === n &&
      (Be === 4 || (Be === 3 && (Ye & 130023424) === Ye && 500 > $e() - Kd)
        ? kr(e, 0)
        : (Yd |= n)),
    yt(e, t);
}
function hv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
      : (t = 1));
  var n = lt();
  (e = Nn(e, t)), e !== null && (Gs(e, t, n), yt(e, n));
}
function Bx(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hv(e, n);
}
function Vx(e, t) {
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
  r !== null && r.delete(t), hv(e, n);
}
var gv;
gv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current) ft = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ft = !1), Px(e, t, n);
      ft = !!(e.flags & 131072);
    }
  else (ft = !1), Ce && t.flags & 1048576 && Sy(t, ml, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ki(e, t), (e = t.pendingProps);
      var o = Co(t, tt.current);
      go(t, n), (o = zd(null, t, r, e, o, n));
      var s = Bd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            gt(r) ? ((s = !0), fl(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ld(t),
            (o.updater = Ql),
            (t.stateNode = o),
            (o._reactInternals = t),
            wu(t, r, e, n),
            (t = bu(null, t, r, !0, s, n)))
          : ((t.tag = 0), Ce && s && Dd(t), st(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ki(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ux(r)),
          (e = Yt(r, e)),
          o)
        ) {
          case 0:
            t = xu(null, t, r, e, n);
            break e;
          case 1:
            t = xm(null, t, r, e, n);
            break e;
          case 11:
            t = wm(null, t, r, e, n);
            break e;
          case 14:
            t = Sm(null, t, r, Yt(r.type, e), n);
            break e;
        }
        throw Error(H(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        xu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        xm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Zy(t), e === null)) throw Error(H(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          _y(e, t),
          yl(t, r, null, n);
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
            (o = Ro(Error(H(423)), t)), (t = bm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ro(Error(H(424)), t)), (t = bm(e, t, r, n, o));
            break e;
          } else
            for (
              bt = er(t.stateNode.containerInfo.firstChild),
                Ct = t,
                Ce = !0,
                qt = null,
                n = Ey(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Eo(), r === o)) {
            t = On(e, t, n);
            break e;
          }
          st(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ry(t),
        e === null && gu(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        du(r, o) ? (i = null) : s !== null && du(r, s) && (t.flags |= 32),
        Jy(e, t),
        st(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && gu(t), null;
    case 13:
      return ev(e, t, n);
    case 4:
      return (
        Ad(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ko(t, null, r, n)) : st(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        wm(e, t, r, o, n)
      );
    case 7:
      return st(e, t, t.pendingProps, n), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          ve(hl, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Zt(s.value, i)) {
            if (s.children === o.children && !ht.current) {
              t = On(e, t, n);
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
                      (a = Rn(-1, n & -n)), (a.tag = 2);
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
                      yu(s.return, n, t),
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
                  yu(i, n, t),
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
        st(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        go(t, n),
        (o = Mt(o)),
        (r = r(o)),
        (t.flags |= 1),
        st(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Yt(r, t.pendingProps)),
        (o = Yt(r.type, o)),
        Sm(e, t, r, o, n)
      );
    case 15:
      return Xy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        Ki(e, t),
        (t.tag = 1),
        gt(r) ? ((e = !0), fl(t)) : (e = !1),
        go(t, n),
        Ky(t, r, o),
        wu(t, r, o, n),
        bu(null, t, r, !0, e, n)
      );
    case 19:
      return tv(e, t, n);
    case 22:
      return Qy(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function yv(e, t) {
  return Ug(e, t);
}
function Hx(e, t, n, r) {
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
function Lt(e, t, n, r) {
  return new Hx(e, t, n, r);
}
function Qd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ux(e) {
  if (typeof e == "function") return Qd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gd)) return 11;
    if (e === yd) return 14;
  }
  return 2;
}
function or(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Lt(e.tag, t, e.key, e.mode)),
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
function Xi(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Qd(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Zr:
        return _r(n.children, o, s, t);
      case hd:
        (i = 8), (o |= 8);
        break;
      case Hc:
        return (
          (e = Lt(12, n, t, o | 2)), (e.elementType = Hc), (e.lanes = s), e
        );
      case Uc:
        return (e = Lt(13, n, t, o)), (e.elementType = Uc), (e.lanes = s), e;
      case Wc:
        return (e = Lt(19, n, t, o)), (e.elementType = Wc), (e.lanes = s), e;
      case Rg:
        return ea(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case kg:
              i = 10;
              break e;
            case _g:
              i = 9;
              break e;
            case gd:
              i = 11;
              break e;
            case yd:
              i = 14;
              break e;
            case Vn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(H(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Lt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function _r(e, t, n, r) {
  return (e = Lt(7, e, r, t)), (e.lanes = n), e;
}
function ea(e, t, n, r) {
  return (
    (e = Lt(22, e, r, t)),
    (e.elementType = Rg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sc(e, t, n) {
  return (e = Lt(6, e, null, t)), (e.lanes = n), e;
}
function xc(e, t, n) {
  return (
    (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Wx(e, t, n, r, o) {
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
    (this.eventTimes = tc(0)),
    (this.expirationTimes = tc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = tc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Jd(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new Wx(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Lt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ld(s),
    e
  );
}
function Yx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function vv(e) {
  if (!e) return ir;
  e = e._reactInternals;
  e: {
    if (zr(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (gt(t.type)) {
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
    if (gt(n)) return vy(e, n, t);
  }
  return t;
}
function wv(e, t, n, r, o, s, i, l, a) {
  return (
    (e = Jd(n, r, !0, e, o, s, i, l, a)),
    (e.context = vv(null)),
    (n = e.current),
    (r = lt()),
    (o = rr(n)),
    (s = Rn(r, o)),
    (s.callback = t ?? null),
    tr(n, s, o),
    (e.current.lanes = o),
    Gs(e, o, r),
    yt(e, r),
    e
  );
}
function ta(e, t, n, r) {
  var o = t.current,
    s = lt(),
    i = rr(o);
  return (
    (n = vv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = tr(o, t, i)),
    e !== null && (Qt(e, o, i, s), Ui(e, o, i)),
    i
  );
}
function kl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Om(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zd(e, t) {
  Om(e, t), (e = e.alternate) && Om(e, t);
}
function Kx() {
  return null;
}
var Sv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ef(e) {
  this._internalRoot = e;
}
na.prototype.render = ef.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  ta(e, t, null, null);
};
na.prototype.unmount = ef.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jr(function () {
      ta(null, e, null, null);
    }),
      (t[Tn] = null);
  }
};
function na(e) {
  this._internalRoot = e;
}
na.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++);
    Wn.splice(n, 0, e), n === 0 && Zg(e);
  }
};
function tf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ra(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jm() {}
function qx(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = kl(i);
        s.call(c);
      };
    }
    var i = wv(t, r, e, 0, null, !1, !1, "", jm);
    return (
      (e._reactRootContainer = i),
      (e[Tn] = i.current),
      Os(e.nodeType === 8 ? e.parentNode : e),
      jr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = kl(a);
      l.call(c);
    };
  }
  var a = Jd(e, 0, !1, null, null, !1, !1, "", jm);
  return (
    (e._reactRootContainer = a),
    (e[Tn] = a.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    jr(function () {
      ta(t, a, n, r);
    }),
    a
  );
}
function oa(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = kl(i);
        l.call(a);
      };
    }
    ta(t, i, e, o);
  } else i = qx(n, t, e, o, r);
  return kl(i);
}
Gg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ps(t.pendingLanes);
        n !== 0 &&
          (Sd(t, n | 1), yt(t, $e()), !(pe & 6) && ((Do = $e() + 500), dr()));
      }
      break;
    case 13:
      jr(function () {
        var r = Nn(e, 1);
        if (r !== null) {
          var o = lt();
          Qt(r, e, 1, o);
        }
      }),
        Zd(e, 1);
  }
};
xd = function (e) {
  if (e.tag === 13) {
    var t = Nn(e, 134217728);
    if (t !== null) {
      var n = lt();
      Qt(t, e, 134217728, n);
    }
    Zd(e, 134217728);
  }
};
Xg = function (e) {
  if (e.tag === 13) {
    var t = rr(e),
      n = Nn(e, t);
    if (n !== null) {
      var r = lt();
      Qt(n, e, t, r);
    }
    Zd(e, t);
  }
};
Qg = function () {
  return he;
};
Jg = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
tu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qc(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = ql(r);
            if (!o) throw Error(H(90));
            Pg(r), qc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ng(e, n);
      break;
    case "select":
      (t = n.value), t != null && fo(e, !!n.multiple, t, !1);
  }
};
Mg = qd;
Ig = jr;
var Gx = { usingClientEntryPoint: !1, Events: [Qs, ro, ql, Ag, Fg, qd] },
  ss = {
    findFiberByHostInstance: xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Xx = {
    bundleType: ss.bundleType,
    version: ss.version,
    rendererPackageName: ss.rendererPackageName,
    rendererConfig: ss.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ss.findFiberByHostInstance || Kx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber)
    try {
      (Ul = Di.inject(Xx)), (gn = Di);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gx;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tf(t)) throw Error(H(200));
  return Yx(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!tf(e)) throw Error(H(299));
  var n = !1,
    r = "",
    o = Sv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Jd(e, 1, !1, null, null, n, !1, r, o)),
    (e[Tn] = t.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    new ef(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(H(188))
      : ((e = Object.keys(e).join(",")), Error(H(268, e)));
  return (e = Vg(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return jr(e);
};
_t.hydrate = function (e, t, n) {
  if (!ra(t)) throw Error(H(200));
  return oa(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!tf(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Sv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = wv(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Tn] = t.current),
    Os(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new na(t);
};
_t.render = function (e, t, n) {
  if (!ra(t)) throw Error(H(200));
  return oa(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!ra(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (jr(function () {
        oa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = qd;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ra(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return oa(e, t, n, !1, r);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function xv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv);
    } catch (e) {
      console.error(e);
    }
}
xv(), (xg.exports = _t);
var Zs = xg.exports;
const Qx = Mr(Zs);
var $m = Zs;
(Bc.createRoot = $m.createRoot), (Bc.hydrateRoot = $m.hydrateRoot);
var hn = function () {
  return (
    (hn =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    hn.apply(this, arguments)
  );
};
function bv(e, t) {
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
function Jx(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Qi = "right-scroll-bar-position",
  Ji = "width-before-scroll-bar",
  Zx = "with-scroll-bars-hidden",
  eb = "--removed-body-scroll-bar-size";
function bc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function tb(e, t) {
  var n = w.useState(function () {
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
var nb = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Lm = new WeakMap();
function rb(e, t) {
  var n = tb(null, function (r) {
    return e.forEach(function (o) {
      return bc(o, r);
    });
  });
  return (
    nb(
      function () {
        var r = Lm.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (l) {
            s.has(l) || bc(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || bc(l, i);
            });
        }
        Lm.set(n, e);
      },
      [e]
    ),
    n
  );
}
function ob(e) {
  return e;
}
function sb(e, t) {
  t === void 0 && (t = ob);
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
function ib(e) {
  e === void 0 && (e = {});
  var t = sb(null);
  return (t.options = hn({ async: !0, ssr: !1 }, e)), t;
}
var Cv = function (e) {
  var t = e.sideCar,
    n = bv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, hn({}, n));
};
Cv.isSideCarExport = !0;
function lb(e, t) {
  return e.useMedium(t), Cv;
}
var Ev = ib(),
  Cc = function () {},
  sa = w.forwardRef(function (e, t) {
    var n = w.useRef(null),
      r = w.useState({
        onScrollCapture: Cc,
        onWheelCapture: Cc,
        onTouchMoveCapture: Cc,
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
      x = e.as,
      y = x === void 0 ? "div" : x,
      v = e.gapMode,
      g = bv(e, [
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
      C = rb([n, t]),
      E = hn(hn({}, g), o);
    return w.createElement(
      w.Fragment,
      null,
      u &&
        w.createElement(b, {
          sideCar: Ev,
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
        ? w.cloneElement(w.Children.only(l), hn(hn({}, E), { ref: C }))
        : w.createElement(y, hn({}, E, { className: a, ref: C }), l)
    );
  });
sa.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
sa.classNames = { fullWidth: Ji, zeroRight: Qi };
var ab = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function cb() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ab();
  return t && e.setAttribute("nonce", t), e;
}
function ub(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function db(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var fb = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = cb()) && (ub(t, n), db(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  pb = function () {
    var e = fb();
    return function (t, n) {
      w.useEffect(
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
  kv = function () {
    var e = pb(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  mb = { left: 0, top: 0, right: 0, gap: 0 },
  Ec = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  hb = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ec(n), Ec(r), Ec(o)];
  },
  gb = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return mb;
    var t = hb(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  yb = kv(),
  vo = "data-scroll-locked",
  vb = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Zx,
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
          vo,
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
          Qi,
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
          Ji,
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
        .concat(Qi, " .")
        .concat(
          Qi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ji, " .")
        .concat(
          Ji,
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
          vo,
          `] {
    `
        )
        .concat(eb, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Am = function () {
    var e = parseInt(document.body.getAttribute(vo) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  wb = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(vo, (Am() + 1).toString()),
        function () {
          var e = Am() - 1;
          e <= 0
            ? document.body.removeAttribute(vo)
            : document.body.setAttribute(vo, e.toString());
        }
      );
    }, []);
  },
  Sb = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    wb();
    var s = w.useMemo(
      function () {
        return gb(o);
      },
      [o]
    );
    return w.createElement(yb, { styles: vb(s, !t, o, n ? "" : "!important") });
  },
  $u = !1;
if (typeof window < "u")
  try {
    var Pi = Object.defineProperty({}, "passive", {
      get: function () {
        return ($u = !0), !0;
      },
    });
    window.addEventListener("test", Pi, Pi),
      window.removeEventListener("test", Pi, Pi);
  } catch {
    $u = !1;
  }
var Kr = $u ? { passive: !1 } : !1,
  xb = function (e) {
    return e.tagName === "TEXTAREA";
  },
  _v = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !xb(e) && n[t] === "visible")
    );
  },
  bb = function (e) {
    return _v(e, "overflowY");
  },
  Cb = function (e) {
    return _v(e, "overflowX");
  },
  Fm = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Rv(e, r);
      if (o) {
        var s = Dv(e, r),
          i = s[1],
          l = s[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Eb = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  kb = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Rv = function (e, t) {
    return e === "v" ? bb(t) : Cb(t);
  },
  Dv = function (e, t) {
    return e === "v" ? Eb(t) : kb(t);
  },
  _b = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Rb = function (e, t, n, r, o) {
    var s = _b(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      a = t.contains(l),
      c = !1,
      u = i > 0,
      d = 0,
      f = 0;
    do {
      var m = Dv(e, l),
        p = m[0],
        h = m[1],
        x = m[2],
        y = h - x - s * p;
      (p || y) && Rv(e, l) && ((d += y), (f += p)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((u && (Math.abs(d) < 1 || !o)) || (!u && (Math.abs(f) < 1 || !o))) &&
        (c = !0),
      c
    );
  },
  Ti = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Mm = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Im = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Db = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Pb = function (e) {
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
  Tb = 0,
  qr = [];
function Nb(e) {
  var t = w.useRef([]),
    n = w.useRef([0, 0]),
    r = w.useRef(),
    o = w.useState(Tb++)[0],
    s = w.useState(kv)[0],
    i = w.useRef(e);
  w.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var h = Jx([e.lockRef.current], (e.shards || []).map(Im), !0).filter(
            Boolean
          );
          return (
            h.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                h.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = w.useCallback(function (h, x) {
      if ("touches" in h && h.touches.length === 2)
        return !i.current.allowPinchZoom;
      var y = Ti(h),
        v = n.current,
        g = "deltaX" in h ? h.deltaX : v[0] - y[0],
        b = "deltaY" in h ? h.deltaY : v[1] - y[1],
        C,
        E = h.target,
        _ = Math.abs(g) > Math.abs(b) ? "h" : "v";
      if ("touches" in h && _ === "h" && E.type === "range") return !1;
      var D = Fm(_, E);
      if (!D) return !0;
      if ((D ? (C = _) : ((C = _ === "v" ? "h" : "v"), (D = Fm(_, E))), !D))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (g || b) && (r.current = C), !C)
      )
        return !0;
      var L = r.current || C;
      return Rb(L, x, h, L === "h" ? g : b, !0);
    }, []),
    a = w.useCallback(function (h) {
      var x = h;
      if (!(!qr.length || qr[qr.length - 1] !== s)) {
        var y = "deltaY" in x ? Mm(x) : Ti(x),
          v = t.current.filter(function (C) {
            return (
              C.name === x.type &&
              (C.target === x.target || x.target === C.shadowParent) &&
              Db(C.delta, y)
            );
          })[0];
        if (v && v.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!v) {
          var g = (i.current.shards || [])
              .map(Im)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(x.target);
              }),
            b = g.length > 0 ? l(x, g[0]) : !i.current.noIsolation;
          b && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    c = w.useCallback(function (h, x, y, v) {
      var g = { name: h, delta: x, target: y, should: v, shadowParent: Ob(y) };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== g;
          });
        }, 1);
    }, []),
    u = w.useCallback(function (h) {
      (n.current = Ti(h)), (r.current = void 0);
    }, []),
    d = w.useCallback(function (h) {
      c(h.type, Mm(h), h.target, l(h, e.lockRef.current));
    }, []),
    f = w.useCallback(function (h) {
      c(h.type, Ti(h), h.target, l(h, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      qr.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, Kr),
      document.addEventListener("touchmove", a, Kr),
      document.addEventListener("touchstart", u, Kr),
      function () {
        (qr = qr.filter(function (h) {
          return h !== s;
        })),
          document.removeEventListener("wheel", a, Kr),
          document.removeEventListener("touchmove", a, Kr),
          document.removeEventListener("touchstart", u, Kr);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    p = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    p ? w.createElement(s, { styles: Pb(o) }) : null,
    m ? w.createElement(Sb, { gapMode: e.gapMode }) : null
  );
}
function Ob(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const jb = lb(Ev, Nb);
var Pv = w.forwardRef(function (e, t) {
  return w.createElement(sa, hn({}, e, { ref: t, sideCar: jb }));
});
Pv.classNames = sa.classNames;
function vn(e) {
  return Object.keys(e);
}
function kc(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function nf(e, t) {
  const n = { ...e },
    r = t;
  return (
    kc(e) &&
      kc(t) &&
      Object.keys(t).forEach((o) => {
        kc(r[o]) && o in e ? (n[o] = nf(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function $b(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function Lb(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)")
    ? e
    : (t = e.match(/^calc\((.*?)\)$/)) == null
    ? void 0
    : t[1].split("*")[0].trim();
}
function Ab(e) {
  const t = Lb(e);
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
function _c(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function Tv(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? _c(o) : o;
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
      if (r.includes(e)) return t ? _c(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const s = `${Number(o) / 16}${e}`;
        return t ? _c(s) : s;
      }
    }
    return r;
  }
  return n;
}
const z = Tv("rem", { shouldScale: !0 }),
  zm = Tv("em");
function rf(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
    {}
  );
}
function Nv(e) {
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
function Mo(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
    ? e.type !== w.Fragment
    : !1;
}
function Br(e) {
  const t = w.createContext(null);
  return [
    ({ children: o, value: s }) => S.jsx(t.Provider, { value: s, children: o }),
    () => {
      const o = w.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function of(e = null) {
  const t = w.createContext(e);
  return [
    ({ children: o, value: s }) => S.jsx(t.Provider, { value: s, children: o }),
    () => w.useContext(t),
  ];
}
const Fb = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function Vr(e) {
  return Fb[e];
}
const Mb = () => {};
function Ib(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active
    ? t.onKeyDown || Mb
    : (n) => {
        var r;
        n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
      };
}
function Ee(e, t = "size", n = !0) {
  if (e !== void 0) return Nv(e) ? (n ? z(e) : e) : `var(--${t}-${e})`;
}
function ia(e) {
  return Ee(e, "mantine-spacing");
}
function Sn(e) {
  return e === void 0
    ? "var(--mantine-radius-default)"
    : Ee(e, "mantine-radius");
}
function et(e) {
  return Ee(e, "mantine-font-size");
}
function zb(e) {
  return Ee(e, "mantine-line-height", !1);
}
function sf(e) {
  if (e) return Ee(e, "mantine-shadow", !1);
}
function Bb(e, t, n) {
  return t === void 0 && n === void 0
    ? e
    : t !== void 0 && n === void 0
    ? Math.max(e, t)
    : Math.min(t === void 0 && n !== void 0 ? e : Math.max(e, t), n);
}
function Ov() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Bm(e) {
  return typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1);
}
function wr(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function la(e, t) {
  const n = wr(e),
    r = w.useRef(0);
  return (
    w.useEffect(() => () => window.clearTimeout(r.current), []),
    w.useCallback(
      (...o) => {
        window.clearTimeout(r.current),
          (r.current = window.setTimeout(() => n(...o), t));
      },
      [n, t]
    )
  );
}
const Vm = ["mousedown", "touchstart"];
function Vb(e, t, n) {
  const r = w.useRef();
  return (
    w.useEffect(() => {
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
        (t || Vm).forEach((s) => document.addEventListener(s, o)),
        () => {
          (t || Vm).forEach((s) => document.removeEventListener(s, o));
        }
      );
    }, [r, e, n]),
    r
  );
}
function Hb(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function Ub(e, t) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function Wb(
  e,
  t,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
) {
  const [r, o] = w.useState(n ? t : Ub(e)),
    s = w.useRef();
  return (
    w.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (s.current = window.matchMedia(e)),
          o(s.current.matches),
          Hb(s.current, (i) => o(i.matches))
        );
    }, [e]),
    r
  );
}
const ei = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function $r(e, t) {
  const n = w.useRef(!1);
  w.useEffect(
    () => () => {
      n.current = !1;
    },
    []
  ),
    w.useEffect(() => {
      if (n.current) return e();
      n.current = !0;
    }, t);
}
function jv({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = w.useRef(),
    r = () => {
      var o;
      n.current &&
        "focus" in n.current &&
        typeof n.current.focus == "function" &&
        ((o = n.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    $r(() => {
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
function Yb(e, t = "body > :not(script)") {
  const n = Ov(),
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
const Kb = /input|select|textarea|button|object/,
  $v = "a, input, select, textarea, button, object, [tabindex]";
function qb(e) {
  return e.style.display === "none";
}
function Gb(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (qb(n)) return !1;
    n = n.parentNode;
  }
  return !0;
}
function Lv(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Lu(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(Lv(e));
  return (
    ((Kb.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      n) &&
    Gb(e)
  );
}
function Av(e) {
  const t = Lv(e);
  return (Number.isNaN(t) || t >= 0) && Lu(e);
}
function Xb(e) {
  return Array.from(e.querySelectorAll($v)).filter(Av);
}
function Qb(e, t) {
  const n = Xb(e);
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
function Jb(e = !0) {
  const t = w.useRef(),
    n = w.useRef(null),
    r = (s) => {
      let i = s.querySelector("[data-autofocus]");
      if (!i) {
        const l = Array.from(s.querySelectorAll($v));
        (i = l.find(Av) || l.find(Lu) || null), !i && Lu(s) && (i = s);
      }
      i && i.focus({ preventScroll: !0 });
    },
    o = w.useCallback(
      (s) => {
        if (e) {
          if (s === null) {
            n.current && (n.current(), (n.current = null));
            return;
          }
          (n.current = Yb(s)),
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
    w.useEffect(() => {
      if (!e) return;
      t.current && setTimeout(() => r(t.current));
      const s = (i) => {
        i.key === "Tab" && t.current && Qb(t.current, i);
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
const Zb = Hl.useId || (() => {});
function eC() {
  const e = Zb();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Hr(e) {
  const t = eC(),
    [n, r] = w.useState(t);
  return (
    ei(() => {
      r(Ov());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : n
  );
}
function tC(e, t, n) {
  w.useEffect(
    () => (
      window.addEventListener(e, t, n),
      () => window.removeEventListener(e, t, n)
    ),
    [e, t]
  );
}
function lf(e, t) {
  typeof e == "function"
    ? e(t)
    : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Fv(...e) {
  return (t) => {
    e.forEach((n) => lf(n, t));
  };
}
function Dt(...e) {
  return w.useCallback(Fv(...e), e);
}
function jn({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {},
}) {
  const [o, s] = w.useState(t !== void 0 ? t : n),
    i = (l, ...a) => {
      s(l), r == null || r(l, ...a);
    };
  return e !== void 0 ? [e, r, !0] : [o, i, !1];
}
function af(e, t) {
  return Wb("(prefers-reduced-motion: reduce)", e, t);
}
function _l(e = !1, t) {
  const { onOpen: n, onClose: r } = {},
    [o, s] = w.useState(e),
    i = w.useCallback(() => {
      s((c) => c || (n == null || n(), !0));
    }, [n]),
    l = w.useCallback(() => {
      s((c) => c && (r == null || r(), !1));
    }, [r]),
    a = w.useCallback(() => {
      o ? l() : i();
    }, [l, i, o]);
  return [o, { open: i, close: l, toggle: a }];
}
var nC = {};
function rC() {
  return typeof process < "u" && nC ? "production" : "development";
}
function Mv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Mv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function at() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Mv(e)) && (r && (r += " "), (r += t));
  return r;
}
const oC = {};
function sC(e) {
  const t = {};
  return (
    e.forEach((n) => {
      Object.entries(n).forEach(([r, o]) => {
        t[r] ? (t[r] = at(t[r], o)) : (t[r] = o);
      });
    }),
    t
  );
}
function aa({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const s = (Array.isArray(t) ? t : [t]).map((i) =>
    typeof i == "function" ? i(e, n, r) : i || oC
  );
  return sC(s);
}
function Rl({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce(
    (s, i) =>
      typeof i == "function" ? { ...s, ...i(e, n, r) } : { ...s, ...i },
    {}
  );
}
const Iv = w.createContext(null);
function Ur() {
  const e = w.useContext(Iv);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function iC() {
  return Ur().cssVariablesResolver;
}
function lC() {
  return Ur().classNamesPrefix;
}
function cf() {
  return Ur().getStyleNonce;
}
function aC() {
  return Ur().withStaticClasses;
}
function cC() {
  return Ur().headless;
}
function uC() {
  var e;
  return (e = Ur().stylesTransform) == null ? void 0 : e.sx;
}
function dC() {
  var e;
  return (e = Ur().stylesTransform) == null ? void 0 : e.styles;
}
function fC(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function pC(e) {
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
function mC(e) {
  const [t, n, r, o] = e
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function hC(e) {
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
function uf(e) {
  return fC(e)
    ? pC(e)
    : e.startsWith("rgb")
    ? mC(e)
    : e.startsWith("hsl")
    ? hC(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function Ni(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: s } = uf(e),
    i = 1 - t,
    l = (a) => Math.round(a * i);
  return `rgba(${l(n)}, ${l(r)}, ${l(o)}, ${s})`;
}
function Bs(e, t) {
  return typeof e.primaryShade == "number"
    ? e.primaryShade
    : t === "dark"
    ? e.primaryShade.dark
    : e.primaryShade.light;
}
function Rc(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function gC(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function yC(e) {
  if (e.startsWith("oklch(")) return (gC(e) || 0) / 100;
  const { r: t, g: n, b: r } = uf(e),
    o = t / 255,
    s = n / 255,
    i = r / 255,
    l = Rc(o),
    a = Rc(s),
    c = Rc(i);
  return 0.2126 * l + 0.7152 * a + 0.0722 * c;
}
function is(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : yC(e) > t;
}
function Io({ color: e, theme: t, colorScheme: n }) {
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
      isLight: is(n === "dark" ? t.white : t.black, t.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: is(
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
      isLight: is(e === "white" ? t.white : t.black, t.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [r, o] = e.split("."),
    s = o ? Number(o) : void 0,
    i = r in t.colors;
  if (i) {
    const l = s !== void 0 ? t.colors[r][s] : t.colors[r][Bs(t, n || "light")];
    return {
      color: r,
      value: l,
      shade: s,
      isThemeColor: i,
      isLight: is(l, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${s}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: i,
    isLight: is(e, t.luminanceThreshold),
    shade: s,
    variable: void 0,
  };
}
function Po(e, t) {
  const n = Io({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Au(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0,
    },
    r = Po(n.from, t),
    o = Po(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function fn(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const s = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${s}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/")
      ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
      : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = uf(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const Gr = fn,
  vC = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
    const s = Io({ color: e, theme: t }),
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
            hover: Ni(e, 0.1),
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
          background: fn(l, 0.1),
          hover: fn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${z(1)} solid transparent`,
        };
      }
      return {
        background: fn(e, 0.1),
        hover: fn(e, 0.12),
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
              hover: fn(t.colors[s.color][s.shade], 0.05),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${z(1)} solid var(--mantine-color-${s.color}-${
                s.shade
              })`,
            }
        : {
            background: "transparent",
            hover: fn(e, 0.05),
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
          hover: fn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${z(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: fn(e, 0.12),
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
              hover: Ni(t.white, 0.01),
              color: `var(--mantine-color-${e}-filled)`,
              border: `${z(1)} solid transparent`,
            }
          : {
              background: "var(--mantine-color-white)",
              hover: Ni(t.white, 0.01),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${z(1)} solid transparent`,
            }
        : {
            background: "var(--mantine-color-white)",
            hover: Ni(t.white, 0.01),
            color: e,
            border: `${z(1)} solid transparent`,
          }
      : n === "gradient"
      ? {
          background: Au(r, t),
          hover: Au(r, t),
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
  wC = {
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
  Hm =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  df = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: wC,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: vC,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: Hm,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: Hm,
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
function Um(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function SC({ key: e = "mantine-color-scheme-value" } = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(e);
        return Um(r) ? r : n;
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
          Um(r.newValue) &&
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
const xC =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  Wm =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Dc(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Ym(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(xC);
  if (
    typeof e.primaryShade == "object" &&
    (!Dc(e.primaryShade.dark) || !Dc(e.primaryShade.light))
  )
    throw new Error(Wm);
  if (typeof e.primaryShade == "number" && !Dc(e.primaryShade))
    throw new Error(Wm);
}
function bC(e, t) {
  var r;
  if (!t) return Ym(e), e;
  const n = nf(e, t);
  return (
    t.fontFamily &&
      !((r = t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    Ym(n),
    n
  );
}
const ff = w.createContext(null),
  CC = () => w.useContext(ff) || df;
function xn() {
  const e = w.useContext(ff);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function zv({ theme: e, children: t, inherit: n = !0 }) {
  const r = CC(),
    o = w.useMemo(() => bC(n ? r : df, e), [e, r, n]);
  return S.jsx(ff.Provider, { value: o, children: t });
}
zv.displayName = "@mantine/core/MantineThemeProvider";
function EC() {
  const e = xn(),
    t = cf(),
    n = vn(e.breakpoints).reduce((r, o) => {
      const s = e.breakpoints[o].includes("px"),
        i = Ab(e.breakpoints[o]),
        l = s ? `${i - 0.1}px` : zm(i - 0.1),
        a = s ? `${i}px` : zm(i);
      return `${r}@media (max-width: ${l}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, "");
  return S.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function Pc(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n};`)
    .join("");
}
function Tc(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function kC(e, t) {
  const n = Pc(e.variables),
    r = n ? Tc(t, n) : "",
    o = Pc(e.dark),
    s = o ? Tc(`${t}[data-mantine-color-scheme="dark"]`, o) : "",
    i = Pc(e.light),
    l = i ? Tc(`${t}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${s}${l}`;
}
function Bv({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) &&
    Io({ color: e || t.primaryColor, theme: t }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function Km(e, t) {
  return Bv({
    color: e.colors[e.primaryColor][Bs(e, t)],
    theme: e,
    autoContrast: null,
  });
}
function Oi({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0,
}) {
  if (!e.colors[t]) return {};
  if (n === "light") {
    const l = Bs(e, "light"),
      a = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
          l === 9 ? 8 : l + 1
        })`,
        [`--mantine-color-${r}-light`]: Gr(e.colors[t][l], 0.1),
        [`--mantine-color-${r}-light-hover`]: Gr(e.colors[t][l], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline-hover`]: Gr(e.colors[t][l], 0.05),
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
  const s = Bs(e, "dark"),
    i = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
        s === 9 ? 8 : s + 1
      })`,
      [`--mantine-color-${r}-light`]: Gr(e.colors[t][Math.max(0, s - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: Gr(
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
      [`--mantine-color-${r}-outline-hover`]: Gr(
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
function _C(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function Xr(e, t, n) {
  vn(t).forEach((r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }));
}
const Vv = (e) => {
  const t = Bs(e, "light"),
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
        "--mantine-primary-color-contrast": Km(e, "light"),
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
        "--mantine-primary-color-contrast": Km(e, "dark"),
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
  Xr(r.variables, e.breakpoints, "breakpoint"),
    Xr(r.variables, e.spacing, "spacing"),
    Xr(r.variables, e.fontSizes, "font-size"),
    Xr(r.variables, e.lineHeights, "line-height"),
    Xr(r.variables, e.shadows, "shadow"),
    Xr(r.variables, e.radius, "radius"),
    e.colors[e.primaryColor].forEach((s, i) => {
      r.variables[
        `--mantine-primary-color-${i}`
      ] = `var(--mantine-color-${e.primaryColor}-${i})`;
    }),
    vn(e.colors).forEach((s) => {
      const i = e.colors[s];
      if (_C(i)) {
        Object.assign(
          r.light,
          Oi({
            theme: e,
            name: i.name,
            color: i.light,
            colorScheme: "light",
            withColorValues: !0,
          })
        ),
          Object.assign(
            r.dark,
            Oi({
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
          Oi({ theme: e, color: s, colorScheme: "light", withColorValues: !1 })
        ),
        Object.assign(
          r.dark,
          Oi({ theme: e, color: s, colorScheme: "dark", withColorValues: !1 })
        );
    });
  const o = e.headings.sizes;
  return (
    vn(o).forEach((s) => {
      (r.variables[`--mantine-${s}-font-size`] = o[s].fontSize),
        (r.variables[`--mantine-${s}-line-height`] = o[s].lineHeight),
        (r.variables[`--mantine-${s}-font-weight`] =
          o[s].fontWeight || e.headings.fontWeight);
    }),
    r
  );
};
function RC({ theme: e, generator: t }) {
  const n = Vv(e),
    r = t == null ? void 0 : t(e);
  return r ? nf(n, r) : n;
}
const Nc = Vv(df);
function DC(e) {
  const t = { variables: {}, light: {}, dark: {} };
  return (
    vn(e.variables).forEach((n) => {
      Nc.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
    }),
    vn(e.light).forEach((n) => {
      Nc.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
    }),
    vn(e.dark).forEach((n) => {
      Nc.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
    }),
    t
  );
}
function PC(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Hv({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
  const n = xn(),
    r = cf(),
    o = iC(),
    s = RC({ theme: n, generator: o }),
    i = e === ":root" && t,
    l = i ? DC(s) : s,
    a = kC(l, e);
  return a
    ? S.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${a}${i ? "" : PC(e)}` },
      })
    : null;
}
Hv.displayName = "@mantine/CssVariables";
function TC() {
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
function Qr(e, t) {
  var r;
  const n =
    e !== "auto"
      ? e
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function NC({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r,
}) {
  const o = w.useRef(),
    [s, i] = w.useState(() => e.get(t)),
    l = r || s,
    a = w.useCallback(
      (u) => {
        r || (Qr(u, n), i(u), e.set(u));
      },
      [e.set, l, r]
    ),
    c = w.useCallback(() => {
      i(t), Qr(t, n), e.clear();
    }, [e.clear, t]);
  return (
    w.useEffect(
      () => (e.subscribe(a), e.unsubscribe),
      [e.subscribe, e.unsubscribe]
    ),
    ei(() => {
      Qr(e.get(t), n);
    }, []),
    w.useEffect(() => {
      var d;
      if (r) return Qr(r, n), () => {};
      r === void 0 && Qr(s, n),
        (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const u = (f) => {
        s === "auto" && Qr(f.matches ? "dark" : "light", n);
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
function OC({ respectReducedMotion: e, getRootElement: t }) {
  ei(() => {
    var n;
    e &&
      ((n = t()) == null ||
        n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
TC();
function Uv({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: s = !0,
  withCssVariables: i = !0,
  cssVariablesSelector: l = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: c = SC(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: m,
  stylesTransform: p,
}) {
  const {
    colorScheme: h,
    setColorScheme: x,
    clearColorScheme: y,
  } = NC({
    defaultColorScheme: u,
    forceColorScheme: m,
    manager: c,
    getRootElement: d,
  });
  return (
    OC({
      respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
      getRootElement: d,
    }),
    S.jsx(Iv.Provider, {
      value: {
        colorScheme: h,
        setColorScheme: x,
        clearColorScheme: y,
        getRootElement: d,
        classNamesPrefix: a,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: l,
        withStaticClasses: r,
        stylesTransform: p,
      },
      children: S.jsxs(zv, {
        theme: e,
        children: [
          i &&
            S.jsx(Hv, { cssVariablesSelector: l, deduplicateCssVariables: s }),
          o && S.jsx(EC, {}),
          t,
        ],
      }),
    })
  );
}
Uv.displayName = "@mantine/core/MantineProvider";
function zo({ classNames: e, styles: t, props: n, stylesCtx: r }) {
  const o = xn();
  return {
    resolvedClassNames: aa({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0,
    }),
    resolvedStyles: Rl({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0,
    }),
  };
}
const jC = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function $C({ theme: e, options: t, unstyled: n }) {
  return at(
    (t == null ? void 0 : t.focusable) &&
      !n &&
      (e.focusClassName || jC[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function LC({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
  return aa({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t,
  })[e];
}
function qm({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
  return aa({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function AC({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function FC({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function MC({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function IC({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
  return e.map((s) => {
    var i, l;
    return (l = aa({
      theme: t,
      classNames: (i = t.components[s]) == null ? void 0 : i.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : l[n];
  });
}
function zC({ options: e, classes: t, selector: n, unstyled: r }) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function BC({
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
  return at(
    $C({ theme: e, options: t, unstyled: l || m }),
    IC({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    zC({ options: t, classes: i, selector: r, unstyled: l }),
    qm({ selector: r, stylesCtx: d, theme: e, classNames: s, props: u }),
    qm({ selector: r, stylesCtx: d, theme: e, classNames: p, props: u }),
    LC({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    AC({ rootSelector: c, selector: r, className: a }),
    FC({ selector: r, classes: i, unstyled: l || m }),
    f &&
      !m &&
      MC({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: t == null ? void 0 : t.withStaticClass,
      }),
    t == null ? void 0 : t.className
  );
}
function VC({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
  return t
    .map((s) => {
      var i;
      return Rl({
        theme: e,
        styles: (i = e.components[s]) == null ? void 0 : i.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((s, i) => ({ ...s, ...i }), {});
}
function Fu({ style: e, theme: t }) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Fu({ style: r, theme: t }) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function HC(e) {
  return e.reduce(
    (t, n) => (
      n &&
        Object.keys(n).forEach((r) => {
          t[r] = { ...t[r], ...rf(n[r]) };
        }),
      t
    ),
    {}
  );
}
function UC({
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
  return (a = HC([
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
function WC({
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
      VC({ theme: e, themeName: t, props: o, stylesCtx: s, selector: n })),
    ...(!f && Rl({ theme: e, styles: l, props: o, stylesCtx: s })[n]),
    ...(!f &&
      Rl({
        theme: e,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || o,
        stylesCtx: s,
      })[n]),
    ...UC({
      theme: e,
      props: o,
      stylesCtx: s,
      vars: c,
      varsResolver: u,
      selector: n,
      themeName: t,
      headless: d,
    }),
    ...(i === n ? Fu({ style: a, theme: e }) : null),
    ...Fu({ style: r == null ? void 0 : r.style, theme: e }),
  };
}
function YC({ props: e, stylesCtx: t, themeName: n }) {
  var i;
  const r = xn(),
    o = (i = dC()) == null ? void 0 : i();
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
function ue({
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
  const f = xn(),
    m = lC(),
    p = aC(),
    h = cC(),
    x = (Array.isArray(e) ? e : [e]).filter((g) => g),
    { withStylesTransform: y, getTransformedStyles: v } = YC({
      props: n,
      stylesCtx: r,
      themeName: x,
    });
  return (g, b) => ({
    className: BC({
      theme: f,
      options: b,
      themeName: x,
      selector: g,
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
      transformedStyles: v([b == null ? void 0 : b.styles, c]),
    }),
    style: WC({
      theme: f,
      themeName: x,
      selector: g,
      options: b,
      props: n,
      stylesCtx: r,
      rootSelector: i,
      styles: c,
      style: s,
      vars: u,
      varsResolver: d,
      headless: h,
      withStylesTransform: y,
    }),
  });
}
function KC(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function U(e, t, n) {
  var i;
  const r = xn(),
    o = (i = r.components[e]) == null ? void 0 : i.defaultProps,
    s = typeof o == "function" ? o(r) : o;
  return { ...t, ...s, ...rf(n) };
}
function Gm(e) {
  return vn(e)
    .reduce((t, n) => (e[n] !== void 0 ? `${t}${$b(n)}:${e[n]};` : t), "")
    .trim();
}
function qC({ selector: e, styles: t, media: n }) {
  const r = t ? Gm(t) : "",
    o = Array.isArray(n)
      ? n.map((s) => `@media${s.query}{${e}{${Gm(s.styles)}}}`)
      : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function GC({ selector: e, styles: t, media: n }) {
  const r = cf();
  return S.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: r == null ? void 0 : r(),
    dangerouslySetInnerHTML: {
      __html: qC({ selector: e, styles: t, media: n }),
    },
  });
}
function ti(e) {
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
    pr: x,
    pe: y,
    ps: v,
    bg: g,
    c: b,
    opacity: C,
    ff: E,
    fz: _,
    fw: D,
    lts: L,
    ta: N,
    lh: M,
    fs: B,
    tt: V,
    td: A,
    w: j,
    miw: P,
    maw: T,
    h: R,
    mih: k,
    mah: $,
    bgsz: O,
    bgp: I,
    bgr: K,
    bga: J,
    pos: ee,
    top: ne,
    left: te,
    bottom: me,
    right: oe,
    inset: le,
    display: Z,
    flex: ge,
    hiddenFrom: ce,
    visibleFrom: se,
    lightHidden: je,
    darkHidden: Ie,
    sx: ye,
    ...rt
  } = e;
  return {
    styleProps: rf({
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
      pr: x,
      pe: y,
      ps: v,
      bg: g,
      c: b,
      opacity: C,
      ff: E,
      fz: _,
      fw: D,
      lts: L,
      ta: N,
      lh: M,
      fs: B,
      tt: V,
      td: A,
      w: j,
      miw: P,
      maw: T,
      h: R,
      mih: k,
      mah: $,
      bgsz: O,
      bgp: I,
      bgr: K,
      bga: J,
      pos: ee,
      top: ne,
      left: te,
      bottom: me,
      right: oe,
      inset: le,
      display: Z,
      flex: ge,
      hiddenFrom: ce,
      visibleFrom: se,
      lightHidden: je,
      darkHidden: Ie,
      sx: ye,
    }),
    rest: rt,
  };
}
const XC = {
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
function Wv(e, t) {
  const n = Io({ color: e, theme: t });
  return n.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : n.color === "bright"
    ? "var(--mantine-color-bright)"
    : n.variable
    ? `var(${n.variable})`
    : n.color;
}
function QC(e, t) {
  const n = Io({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : Wv(e, t);
}
const Xm = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function JC(e) {
  return typeof e == "string" && e in Xm ? Xm[e] : e;
}
const ZC = ["h1", "h2", "h3", "h4", "h5", "h6"];
function eE(e, t) {
  return typeof e == "string" && e in t.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == "string" && ZC.includes(e)
    ? `var(--mantine-${e}-font-size)`
    : typeof e == "number" || typeof e == "string"
    ? z(e)
    : e;
}
function tE(e) {
  return e;
}
const nE = ["h1", "h2", "h3", "h4", "h5", "h6"];
function rE(e, t) {
  return typeof e == "string" && e in t.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == "string" && nE.includes(e)
    ? `var(--mantine-${e}-line-height)`
    : e;
}
function oE(e) {
  return typeof e == "number" ? z(e) : e;
}
function sE(e, t) {
  if (typeof e == "number") return z(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing)) return z(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const Oc = {
  color: Wv,
  textColor: QC,
  fontSize: eE,
  spacing: sE,
  identity: tE,
  size: oE,
  lineHeight: rE,
  fontFamily: JC,
};
function Qm(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function iE({ media: e, ...t }) {
  const r = Object.keys(e)
    .sort((o, s) => Number(Qm(o)) - Number(Qm(s)))
    .map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function lE(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function aE(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function cE(e) {
  return typeof e == "object" && e !== null
    ? vn(e).filter((t) => t !== "base")
    : [];
}
function uE(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function dE({ styleProps: e, data: t, theme: n }) {
  return iE(
    vn(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
        const s = t[o],
          i = Array.isArray(s.property) ? s.property : [s.property],
          l = aE(e[o]);
        if (!lE(e[o]))
          return (
            i.forEach((c) => {
              r.inlineStyles[c] = Oc[s.type](l, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const a = cE(e[o]);
        return (
          i.forEach((c) => {
            l && (r.styles[c] = Oc[s.type](l, n)),
              a.forEach((u) => {
                const d = `(min-width: ${n.breakpoints[u]})`;
                r.media[d] = { ...r.media[d], [c]: Oc[s.type](uE(e[o], u), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
    )
  );
}
function fE() {
  return `__m__-${w.useId().replace(/:/g, "")}`;
}
function Yv(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Yv(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function Kv(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function pE(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (t[Kv(n)] = e[n]), t
    );
  }, {});
}
function qv(e) {
  return e
    ? typeof e == "string"
      ? { [Kv(e)]: !0 }
      : Array.isArray(e)
      ? [...e].reduce((t, n) => ({ ...t, ...qv(n) }), {})
      : pE(e)
    : null;
}
function Mu(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Mu(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function mE({ theme: e, style: t, vars: n, styleProps: r }) {
  const o = Mu(t, e),
    s = Mu(n, e);
  return { ...o, ...s, ...r };
}
const Gv = w.forwardRef(
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
    var _;
    const p = xn(),
      h = e || "div",
      { styleProps: x, rest: y } = ti(f),
      v = uC(),
      g = (_ = v == null ? void 0 : v()) == null ? void 0 : _(x.sx),
      b = fE(),
      C = dE({ styleProps: x, theme: p, data: XC }),
      E = {
        ref: m,
        style: mE({ theme: p, style: t, vars: n, styleProps: C.inlineStyles }),
        className: at(r, g, {
          [b]: C.hasResponsiveStyles,
          "mantine-light-hidden": c,
          "mantine-dark-hidden": u,
          [`mantine-hidden-from-${l}`]: l,
          [`mantine-visible-from-${a}`]: a,
        }),
        "data-variant": o,
        "data-size": Nv(i) ? void 0 : i || void 0,
        ...qv(s),
        ...y,
      };
    return S.jsxs(S.Fragment, {
      children: [
        C.hasResponsiveStyles &&
          S.jsx(GC, { selector: `.${b}`, styles: C.styles, media: C.media }),
        typeof d == "function" ? d(E) : S.jsx(h, { ...E }),
      ],
    });
  }
);
Gv.displayName = "@mantine/core/Box";
const G = Gv;
function Xv(e) {
  return e;
}
function X(e) {
  const t = w.forwardRef(e);
  return (t.extend = Xv), t;
}
function An(e) {
  const t = w.forwardRef(e);
  return (t.extend = Xv), t;
}
const hE = w.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function pf() {
  return w.useContext(hE);
}
function gE(e) {
  if (!e || typeof e == "string") return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function jc(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const ls = typeof window < "u" && window.requestAnimationFrame;
function yE({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {},
  opened: r,
}) {
  const o = w.useRef(null),
    s = 0,
    i = { display: "none", height: 0, overflow: "hidden" },
    [l, a] = w.useState(r ? {} : i),
    c = (p) => {
      Zs.flushSync(() => a(p));
    },
    u = (p) => {
      c((h) => ({ ...h, ...p }));
    };
  function d(p) {
    const h = e || gE(p);
    return { transition: `height ${h}ms ${t}, opacity ${h}ms ${t}` };
  }
  $r(() => {
    typeof ls == "function" &&
      ls(
        r
          ? () => {
              u({ willChange: "height", display: "block", overflow: "hidden" }),
                ls(() => {
                  const p = jc(o);
                  u({ ...d(p), height: p });
                });
            }
          : () => {
              const p = jc(o);
              u({ ...d(p), willChange: "height", height: p }),
                ls(() => u({ height: s, overflow: "hidden" }));
            }
      );
  }, [r]);
  const f = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (r) {
        const h = jc(o);
        h === l.height ? c({}) : u({ height: h }), n();
      } else l.height === s && (c(i), n());
  };
  function m({ style: p = {}, refKey: h = "ref", ...x } = {}) {
    const y = x[h];
    return {
      "aria-hidden": !r,
      ...x,
      [h]: Fv(o, y),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...p, ...l },
    };
  }
  return m;
}
const vE = {
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    animateOpacity: !0,
  },
  Qv = X((e, t) => {
    const {
        children: n,
        in: r,
        transitionDuration: o,
        transitionTimingFunction: s,
        style: i,
        onTransitionEnd: l,
        animateOpacity: a,
        ...c
      } = U("Collapse", vE, e),
      u = xn(),
      d = af(),
      m = (u.respectReducedMotion ? d : !1) ? 0 : o,
      p = yE({
        opened: r,
        transitionDuration: m,
        transitionTimingFunction: s,
        onTransitionEnd: l,
      });
    return m === 0
      ? r
        ? S.jsx(G, { ...c, children: n })
        : null
      : S.jsx(G, {
          ...p({
            style: {
              opacity: r || !a ? 1 : 0,
              transition: a ? `opacity ${m}ms ${s}` : "none",
              ...Yv(i, u),
            },
            ref: t,
            ...c,
          }),
          children: n,
        });
  });
Qv.displayName = "@mantine/core/Collapse";
const [wE, zt] = Br("ScrollArea.Root component was not found in tree");
function To(e, t) {
  const n = wr(t);
  ei(() => {
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
const SE = w.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = zt(),
      [s, i] = w.useState(0),
      [l, a] = w.useState(0),
      c = !!(s && l);
    return (
      To(o.scrollbarX, () => {
        var d;
        const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
        o.onCornerHeightChange(u), a(u);
      }),
      To(o.scrollbarY, () => {
        var d;
        const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
        o.onCornerWidthChange(u), i(u);
      }),
      c
        ? S.jsx("div", { ...r, ref: t, style: { ...n, width: s, height: l } })
        : null
    );
  }),
  xE = w.forwardRef((e, t) => {
    const n = zt(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? S.jsx(SE, { ...e, ref: t }) : null;
  }),
  bE = { scrollHideDelay: 1e3, type: "hover" },
  Jv = w.forwardRef((e, t) => {
    const n = U("ScrollAreaRoot", bE, e),
      { type: r, scrollHideDelay: o, scrollbars: s, ...i } = n,
      [l, a] = w.useState(null),
      [c, u] = w.useState(null),
      [d, f] = w.useState(null),
      [m, p] = w.useState(null),
      [h, x] = w.useState(null),
      [y, v] = w.useState(0),
      [g, b] = w.useState(0),
      [C, E] = w.useState(!1),
      [_, D] = w.useState(!1),
      L = Dt(t, (N) => a(N));
    return S.jsx(wE, {
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
        onScrollbarYChange: x,
        scrollbarYEnabled: _,
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: v,
        onCornerHeightChange: b,
      },
      children: S.jsx(G, {
        ...i,
        ref: L,
        __vars: {
          "--sa-corner-width": s !== "xy" ? "0px" : `${y}px`,
          "--sa-corner-height": s !== "xy" ? "0px" : `${g}px`,
        },
      }),
    });
  });
Jv.displayName = "@mantine/core/ScrollAreaRoot";
function Zv(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function ca(e) {
  const t = Zv(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function e0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function CE(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Jm(e, t, n = "ltr") {
  const r = ca(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - o,
    i = t.content - t.viewport,
    l = s - r,
    a = n === "ltr" ? [0, i] : [i * -1, 0],
    c = CE(e, a);
  return e0([0, i], [0, l])(c);
}
function EE(e, t, n, r = "ltr") {
  const o = ca(n),
    s = o / 2,
    i = t || s,
    l = o - i,
    a = n.scrollbar.paddingStart + i,
    c = n.scrollbar.size - n.scrollbar.paddingEnd - l,
    u = n.content - n.viewport,
    d = r === "ltr" ? [0, u] : [u * -1, 0];
  return e0([a, c], d)(e);
}
function t0(e, t) {
  return e > 0 && e < t;
}
function Dl(e) {
  return e ? parseInt(e, 10) : 0;
}
function Rr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [kE, n0] = Br("ScrollAreaScrollbar was not found in tree"),
  r0 = w.forwardRef((e, t) => {
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
      f = zt(),
      [m, p] = w.useState(null),
      h = Dt(t, (D) => p(D)),
      x = w.useRef(null),
      y = w.useRef(""),
      { viewport: v } = f,
      g = n.content - n.viewport,
      b = wr(c),
      C = wr(l),
      E = la(u, 10),
      _ = (D) => {
        if (x.current) {
          const L = D.clientX - x.current.left,
            N = D.clientY - x.current.top;
          a({ x: L, y: N });
        }
      };
    return (
      w.useEffect(() => {
        const D = (L) => {
          const N = L.target;
          (m == null ? void 0 : m.contains(N)) && b(L, g);
        };
        return (
          document.addEventListener("wheel", D, { passive: !1 }),
          () => document.removeEventListener("wheel", D, { passive: !1 })
        );
      }, [v, m, g, b]),
      w.useEffect(C, [n, C]),
      To(m, E),
      To(f.content, E),
      S.jsx(kE, {
        value: {
          scrollbar: m,
          hasThumb: r,
          onThumbChange: wr(o),
          onThumbPointerUp: wr(s),
          onThumbPositionChange: C,
          onThumbPointerDown: wr(i),
        },
        children: S.jsx("div", {
          ...d,
          ref: h,
          style: { position: "absolute", ...d.style },
          onPointerDown: Rr(e.onPointerDown, (D) => {
            D.button === 0 &&
              (D.target.setPointerCapture(D.pointerId),
              (x.current = m.getBoundingClientRect()),
              (y.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              _(D));
          }),
          onPointerMove: Rr(e.onPointerMove, _),
          onPointerUp: Rr(e.onPointerUp, (D) => {
            const L = D.target;
            L.hasPointerCapture(D.pointerId) &&
              L.releasePointerCapture(D.pointerId),
              (document.body.style.webkitUserSelect = y.current),
              (x.current = null);
          }),
        }),
      })
    );
  }),
  _E = w.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = zt(),
      [l, a] = w.useState(),
      c = w.useRef(null),
      u = Dt(t, c, i.onScrollbarXChange);
    return (
      w.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      S.jsx(r0, {
        "data-orientation": "horizontal",
        ...s,
        ref: u,
        sizes: n,
        style: { ...o, "--sa-thumb-width": `${ca(n)}px` },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const m = i.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(m), t0(m, f) && d.preventDefault();
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
                paddingStart: Dl(l.paddingLeft),
                paddingEnd: Dl(l.paddingRight),
              },
            });
        },
      })
    );
  }),
  RE = w.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = zt(),
      [l, a] = w.useState(),
      c = w.useRef(null),
      u = Dt(t, c, i.onScrollbarYChange);
    return (
      w.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      S.jsx(r0, {
        ...s,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: { "--sa-thumb-height": `${ca(n)}px`, ...o },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const m = i.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(m), t0(m, f) && d.preventDefault();
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
                paddingStart: Dl(l.paddingTop),
                paddingEnd: Dl(l.paddingBottom),
              },
            });
        },
      })
    );
  }),
  mf = w.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      { dir: o } = pf(),
      s = zt(),
      i = w.useRef(null),
      l = w.useRef(0),
      [a, c] = w.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = Zv(a.viewport, a.content),
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
      f = (m, p) => EE(m, l.current, a, p);
    return n === "horizontal"
      ? S.jsx(_E, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const m = s.viewport.scrollLeft,
                p = Jm(m, a, o);
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
      ? S.jsx(RE, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const m = s.viewport.scrollTop,
                p = Jm(m, a);
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
  o0 = w.forwardRef((e, t) => {
    const n = zt(),
      { forceMount: r, ...o } = e,
      [s, i] = w.useState(!1),
      l = e.orientation === "horizontal",
      a = la(() => {
        if (n.viewport) {
          const c = n.viewport.offsetWidth < n.viewport.scrollWidth,
            u = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(l ? c : u);
        }
      }, 10);
    return (
      To(n.viewport, a),
      To(n.content, a),
      r || s
        ? S.jsx(mf, { "data-state": s ? "visible" : "hidden", ...o, ref: t })
        : null
    );
  }),
  DE = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = zt(),
      [s, i] = w.useState(!1);
    return (
      w.useEffect(() => {
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
        ? S.jsx(o0, { "data-state": s ? "visible" : "hidden", ...r, ref: t })
        : null
    );
  }),
  PE = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = zt(),
      s = e.orientation === "horizontal",
      [i, l] = w.useState("hidden"),
      a = la(() => l("idle"), 100);
    return (
      w.useEffect(() => {
        if (i === "idle") {
          const c = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [i, o.scrollHideDelay]),
      w.useEffect(() => {
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
        ? S.jsx(mf, {
            "data-state": i === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: Rr(e.onPointerEnter, () => l("interacting")),
            onPointerLeave: Rr(e.onPointerLeave, () => l("idle")),
          })
        : null
    );
  }),
  Zm = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = zt(),
      { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o,
      l = e.orientation === "horizontal";
    return (
      w.useEffect(
        () => (
          l ? s(!0) : i(!0),
          () => {
            l ? s(!1) : i(!1);
          }
        ),
        [l, s, i]
      ),
      o.type === "hover"
        ? S.jsx(DE, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
        ? S.jsx(PE, { ...r, ref: t, forceMount: n })
        : o.type === "auto"
        ? S.jsx(o0, { ...r, ref: t, forceMount: n })
        : o.type === "always"
        ? S.jsx(mf, { ...r, ref: t })
        : null
    );
  });
function TE(e, t = () => {}) {
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
const NE = w.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = zt(),
      s = n0(),
      { onThumbPositionChange: i } = s,
      l = Dt(t, (u) => s.onThumbChange(u)),
      a = w.useRef(),
      c = la(() => {
        a.current && (a.current(), (a.current = void 0));
      }, 100);
    return (
      w.useEffect(() => {
        const { viewport: u } = o;
        if (u) {
          const d = () => {
            if ((c(), !a.current)) {
              const f = TE(u, i);
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
      S.jsx("div", {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--sa-thumb-width)",
          height: "var(--sa-thumb-height)",
          ...n,
        },
        onPointerDownCapture: Rr(e.onPointerDownCapture, (u) => {
          const f = u.target.getBoundingClientRect(),
            m = u.clientX - f.left,
            p = u.clientY - f.top;
          s.onThumbPointerDown({ x: m, y: p });
        }),
        onPointerUp: Rr(e.onPointerUp, s.onThumbPointerUp),
      })
    );
  }),
  eh = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = n0();
    return n || o.hasThumb ? S.jsx(NE, { ref: t, ...r }) : null;
  }),
  s0 = w.forwardRef(({ children: e, style: t, ...n }, r) => {
    const o = zt(),
      s = Dt(r, o.onViewportChange);
    return S.jsx(G, {
      ...n,
      ref: s,
      style: {
        overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
        ...t,
      },
      children: S.jsx("div", {
        style: { minWidth: "100%", display: "table" },
        ref: o.onContentChange,
        children: e,
      }),
    });
  });
s0.displayName = "@mantine/core/ScrollAreaViewport";
var hf = {
  root: "m_d57069b5",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
const i0 = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  OE = (e, { scrollbarSize: t }) => ({
    root: { "--scrollarea-scrollbar-size": z(t) },
  }),
  ni = X((e, t) => {
    const n = U("ScrollArea", i0, e),
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
        offsetScrollbars: x,
        scrollbars: y,
        ...v
      } = n,
      [g, b] = w.useState(!1),
      C = ue({
        name: "ScrollArea",
        props: n,
        classes: hf,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: OE,
      });
    return S.jsxs(Jv, {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: y,
      ...C("root"),
      ...v,
      children: [
        S.jsx(s0, {
          ...f,
          ...C("viewport", { style: f == null ? void 0 : f.style }),
          ref: m,
          "data-offset-scrollbars": x === !0 ? "xy" : x || void 0,
          "data-scrollbars": y || void 0,
          onScroll: (E) => {
            var _;
            (_ = f == null ? void 0 : f.onScroll) == null || _.call(f, E),
              p == null ||
                p({
                  x: E.currentTarget.scrollLeft,
                  y: E.currentTarget.scrollTop,
                });
          },
          children: h,
        }),
        (y === "xy" || y === "x") &&
          S.jsx(Zm, {
            ...C("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: S.jsx(eh, { ...C("thumb") }),
          }),
        (y === "xy" || y === "y") &&
          S.jsx(Zm, {
            ...C("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: S.jsx(eh, { ...C("thumb") }),
          }),
        S.jsx(xE, {
          ...C("corner"),
          "data-hovered": g || void 0,
          "data-hidden": u === "never" || void 0,
        }),
      ],
    });
  });
ni.displayName = "@mantine/core/ScrollArea";
const gf = X((e, t) => {
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
    style: x,
    vars: y,
    ...v
  } = U("ScrollAreaAutosize", i0, e);
  return S.jsx(G, {
    ...v,
    ref: t,
    style: [{ display: "flex", overflow: "auto" }, x],
    children: S.jsx(G, {
      style: { display: "flex", flexDirection: "column", flex: 1 },
      children: S.jsx(ni, {
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
        vars: y,
        scrollbars: h,
        children: n,
      }),
    }),
  });
});
ni.classes = hf;
gf.displayName = "@mantine/core/ScrollAreaAutosize";
gf.classes = hf;
ni.Autosize = gf;
var l0 = { root: "m_87cf2631" };
const jE = { __staticSelector: "UnstyledButton" },
  Dn = An((e, t) => {
    const n = U("UnstyledButton", jE, e),
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
      d = ue({
        name: s,
        props: n,
        classes: l0,
        className: r,
        style: c,
        classNames: l,
        styles: a,
        unstyled: i,
      });
    return S.jsx(G, {
      ...d("root", { focusable: !0 }),
      component: o,
      ref: t,
      type: o === "button" ? "button" : void 0,
      ...u,
    });
  });
Dn.classes = l0;
Dn.displayName = "@mantine/core/UnstyledButton";
var a0 = { root: "m_515a97f8" };
const $E = {},
  yf = X((e, t) => {
    const n = U("VisuallyHidden", $E, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        ...c
      } = n,
      u = ue({
        name: "VisuallyHidden",
        classes: a0,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
      });
    return S.jsx(G, { component: "span", ref: t, ...u("root"), ...c });
  });
yf.classes = a0;
yf.displayName = "@mantine/core/VisuallyHidden";
var c0 = { root: "m_1b7284a3" };
const LE = {},
  AE = (e, { radius: t, shadow: n }) => ({
    root: {
      "--paper-radius": t === void 0 ? void 0 : Sn(t),
      "--paper-shadow": sf(n),
    },
  }),
  vf = An((e, t) => {
    const n = U("Paper", LE, e),
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
      h = ue({
        name: "Paper",
        props: n,
        classes: c0,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: AE,
      });
    return S.jsx(G, {
      ref: t,
      mod: [{ "data-with-border": a }, m],
      ...h("root"),
      variant: f,
      ...p,
    });
  });
vf.classes = c0;
vf.displayName = "@mantine/core/Paper";
function Bo(e) {
  return u0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Et(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Fn(e) {
  var t;
  return (t = (u0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function u0(e) {
  return e instanceof Node || e instanceof Et(e).Node;
}
function pt(e) {
  return e instanceof Element || e instanceof Et(e).Element;
}
function wn(e) {
  return e instanceof HTMLElement || e instanceof Et(e).HTMLElement;
}
function th(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Et(e).ShadowRoot;
}
function ri(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = en(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function FE(e) {
  return ["table", "td", "th"].includes(Bo(e));
}
function wf(e) {
  const t = Sf(),
    n = en(e);
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
function ME(e) {
  let t = lr(e);
  for (; wn(t) && !No(t); ) {
    if (wf(t)) return t;
    t = lr(t);
  }
  return null;
}
function Sf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function No(e) {
  return ["html", "body", "#document"].includes(Bo(e));
}
function en(e) {
  return Et(e).getComputedStyle(e);
}
function ua(e) {
  return pt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function lr(e) {
  if (Bo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (th(e) && e.host) || Fn(e);
  return th(t) ? t.host : t;
}
function d0(e) {
  const t = lr(e);
  return No(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : wn(t) && ri(t)
    ? t
    : d0(t);
}
function Vs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = d0(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Et(o);
  return s
    ? t.concat(
        i,
        i.visualViewport || [],
        ri(o) ? o : [],
        i.frameElement && n ? Vs(i.frameElement) : []
      )
    : t.concat(o, Vs(o, [], n));
}
const tn = Math.min,
  Ze = Math.max,
  Pl = Math.round,
  ji = Math.floor,
  ar = (e) => ({ x: e, y: e }),
  IE = { left: "right", right: "left", bottom: "top", top: "bottom" },
  zE = { start: "end", end: "start" };
function Iu(e, t, n) {
  return Ze(e, tn(t, n));
}
function $n(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nn(e) {
  return e.split("-")[0];
}
function Vo(e) {
  return e.split("-")[1];
}
function xf(e) {
  return e === "x" ? "y" : "x";
}
function bf(e) {
  return e === "y" ? "height" : "width";
}
function Wr(e) {
  return ["top", "bottom"].includes(nn(e)) ? "y" : "x";
}
function Cf(e) {
  return xf(Wr(e));
}
function BE(e, t, n) {
  n === void 0 && (n = !1);
  const r = Vo(e),
    o = Cf(e),
    s = bf(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = Tl(i)), [i, Tl(i)];
}
function VE(e) {
  const t = Tl(e);
  return [zu(e), t, zu(t)];
}
function zu(e) {
  return e.replace(/start|end/g, (t) => zE[t]);
}
function HE(e, t, n) {
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
function UE(e, t, n, r) {
  const o = Vo(e);
  let s = HE(nn(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(zu)))), s
  );
}
function Tl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => IE[t]);
}
function WE(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ef(e) {
  return typeof e != "number"
    ? WE(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Oo(e) {
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
function nh(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Wr(t),
    i = Cf(t),
    l = bf(i),
    a = nn(t),
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
  switch (Vo(t)) {
    case "start":
      m[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const YE = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: d } = nh(c, r, a),
    f = r,
    m = {},
    p = 0;
  for (let h = 0; h < l.length; h++) {
    const { name: x, fn: y } = l[h],
      {
        x: v,
        y: g,
        data: b,
        reset: C,
      } = await y({
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
    (u = v ?? u),
      (d = g ?? d),
      (m = { ...m, [x]: { ...m[x], ...b } }),
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
          ({ x: u, y: d } = nh(c, f, a))),
        (h = -1));
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: m };
};
async function kf(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = $n(t, e),
    p = Ef(m),
    x = l[f ? (d === "floating" ? "reference" : "floating") : d],
    y = Oo(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: a,
      })
    ),
    v =
      d === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    g = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    b = (await (s.isElement == null ? void 0 : s.isElement(g)))
      ? (await (s.getScale == null ? void 0 : s.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Oo(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: v,
            offsetParent: g,
            strategy: a,
          })
        : v
    );
  return {
    top: (y.top - C.top + p.top) / b.y,
    bottom: (C.bottom - y.bottom + p.bottom) / b.y,
    left: (y.left - C.left + p.left) / b.x,
    right: (C.right - y.right + p.right) / b.x,
  };
}
const KE = (e) => ({
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
        { element: c, padding: u = 0 } = $n(e, t) || {};
      if (c == null) return {};
      const d = Ef(u),
        f = { x: n, y: r },
        m = Cf(o),
        p = bf(m),
        h = await i.getDimensions(c),
        x = m === "y",
        y = x ? "top" : "left",
        v = x ? "bottom" : "right",
        g = x ? "clientHeight" : "clientWidth",
        b = s.reference[p] + s.reference[m] - f[m] - s.floating[p],
        C = f[m] - s.reference[m],
        E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let _ = E ? E[g] : 0;
      (!_ || !(await (i.isElement == null ? void 0 : i.isElement(E)))) &&
        (_ = l.floating[g] || s.floating[p]);
      const D = b / 2 - C / 2,
        L = _ / 2 - h[p] / 2 - 1,
        N = tn(d[y], L),
        M = tn(d[v], L),
        B = N,
        V = _ - h[p] - M,
        A = _ / 2 - h[p] / 2 + D,
        j = Iu(B, A, V),
        P =
          !a.arrow &&
          Vo(o) != null &&
          A !== j &&
          s.reference[p] / 2 - (A < B ? N : M) - h[p] / 2 < 0,
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
  qE = function (e) {
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
              ...x
            } = $n(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const y = nn(o),
            v = nn(l) === l,
            g = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
            b = f || (v || !h ? [Tl(l)] : VE(l));
          !f && p !== "none" && b.push(...UE(l, h, p, g));
          const C = [l, ...b],
            E = await kf(t, x),
            _ = [];
          let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((u && _.push(E[y]), d)) {
            const B = BE(o, i, g);
            _.push(E[B[0]], E[B[1]]);
          }
          if (
            ((D = [...D, { placement: o, overflows: _ }]),
            !_.every((B) => B <= 0))
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
                  var M;
                  const j =
                    (M = D.map((P) => [
                      P.placement,
                      P.overflows
                        .filter((T) => T > 0)
                        .reduce((T, R) => T + R, 0),
                    ]).sort((P, T) => P[1] - T[1])[0]) == null
                      ? void 0
                      : M[0];
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
function f0(e) {
  const t = tn(...e.map((s) => s.left)),
    n = tn(...e.map((s) => s.top)),
    r = Ze(...e.map((s) => s.right)),
    o = Ze(...e.map((s) => s.bottom));
  return { x: t, y: n, width: r - t, height: o - n };
}
function GE(e) {
  const t = e.slice().sort((o, s) => o.y - s.y),
    n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    !r || s.y - r.y > r.height / 2 ? n.push([s]) : n[n.length - 1].push(s),
      (r = s);
  }
  return n.map((o) => Oo(f0(o)));
}
const XE = function (e) {
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
          { padding: l = 2, x: a, y: c } = $n(e, t),
          u = Array.from(
            (await (s.getClientRects == null
              ? void 0
              : s.getClientRects(r.reference))) || []
          ),
          d = GE(u),
          f = Oo(f0(u)),
          m = Ef(l);
        function p() {
          if (
            d.length === 2 &&
            d[0].left > d[1].right &&
            a != null &&
            c != null
          )
            return (
              d.find(
                (x) =>
                  a > x.left - m.left &&
                  a < x.right + m.right &&
                  c > x.top - m.top &&
                  c < x.bottom + m.bottom
              ) || f
            );
          if (d.length >= 2) {
            if (Wr(n) === "y") {
              const N = d[0],
                M = d[d.length - 1],
                B = nn(n) === "top",
                V = N.top,
                A = M.bottom,
                j = B ? N.left : M.left,
                P = B ? N.right : M.right,
                T = P - j,
                R = A - V;
              return {
                top: V,
                bottom: A,
                left: j,
                right: P,
                width: T,
                height: R,
                x: j,
                y: V,
              };
            }
            const x = nn(n) === "left",
              y = Ze(...d.map((N) => N.right)),
              v = tn(...d.map((N) => N.left)),
              g = d.filter((N) => (x ? N.left === v : N.right === y)),
              b = g[0].top,
              C = g[g.length - 1].bottom,
              E = v,
              _ = y,
              D = _ - E,
              L = C - b;
            return {
              top: b,
              bottom: C,
              left: E,
              right: _,
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
async function QE(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = nn(n),
    l = Vo(n),
    a = Wr(n) === "y",
    c = ["left", "top"].includes(i) ? -1 : 1,
    u = s && a ? -1 : 1,
    d = $n(t, e);
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
const JE = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await QE(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  ZE = function (e) {
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
                fn: (x) => {
                  let { x: y, y: v } = x;
                  return { x: y, y: v };
                },
              },
              ...a
            } = $n(e, t),
            c = { x: n, y: r },
            u = await kf(t, a),
            d = Wr(nn(o)),
            f = xf(d);
          let m = c[f],
            p = c[d];
          if (s) {
            const x = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              v = m + u[x],
              g = m - u[y];
            m = Iu(v, m, g);
          }
          if (i) {
            const x = d === "y" ? "top" : "left",
              y = d === "y" ? "bottom" : "right",
              v = p + u[x],
              g = p - u[y];
            p = Iu(v, p, g);
          }
          const h = l.fn({ ...t, [f]: m, [d]: p });
          return { ...h, data: { x: h.x - n, y: h.y - r } };
        },
      }
    );
  },
  ek = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: c = !0 } = $n(e, t),
            u = { x: n, y: r },
            d = Wr(o),
            f = xf(d);
          let m = u[f],
            p = u[d];
          const h = $n(l, t),
            x =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (a) {
            const g = f === "y" ? "height" : "width",
              b = s.reference[f] - s.floating[g] + x.mainAxis,
              C = s.reference[f] + s.reference[g] - x.mainAxis;
            m < b ? (m = b) : m > C && (m = C);
          }
          if (c) {
            var y, v;
            const g = f === "y" ? "width" : "height",
              b = ["top", "left"].includes(nn(o)),
              C =
                s.reference[d] -
                s.floating[g] +
                ((b && ((y = i.offset) == null ? void 0 : y[d])) || 0) +
                (b ? 0 : x.crossAxis),
              E =
                s.reference[d] +
                s.reference[g] +
                (b ? 0 : ((v = i.offset) == null ? void 0 : v[d]) || 0) -
                (b ? x.crossAxis : 0);
            p < C ? (p = C) : p > E && (p = E);
          }
          return { [f]: m, [d]: p };
        },
      }
    );
  },
  tk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...l } = $n(e, t),
            a = await kf(t, l),
            c = nn(n),
            u = Vo(n),
            d = Wr(n) === "y",
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
          const x = m - a[p],
            y = f - a[h],
            v = !t.middlewareData.shift;
          let g = x,
            b = y;
          if (d) {
            const E = f - a.left - a.right;
            b = u || v ? tn(y, E) : E;
          } else {
            const E = m - a.top - a.bottom;
            g = u || v ? tn(x, E) : E;
          }
          if (v && !u) {
            const E = Ze(a.left, 0),
              _ = Ze(a.right, 0),
              D = Ze(a.top, 0),
              L = Ze(a.bottom, 0);
            d
              ? (b = f - 2 * (E !== 0 || _ !== 0 ? E + _ : Ze(a.left, a.right)))
              : (g =
                  m - 2 * (D !== 0 || L !== 0 ? D + L : Ze(a.top, a.bottom)));
          }
          await i({ ...t, availableWidth: b, availableHeight: g });
          const C = await o.getDimensions(s.floating);
          return f !== C.width || m !== C.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function p0(e) {
  const t = en(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = wn(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Pl(n) !== s || Pl(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function _f(e) {
  return pt(e) ? e : e.contextElement;
}
function wo(e) {
  const t = _f(e);
  if (!wn(t)) return ar(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = p0(t);
  let i = (s ? Pl(n.width) : n.width) / r,
    l = (s ? Pl(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const nk = ar(0);
function m0(e) {
  const t = Et(e);
  return !Sf() || !t.visualViewport
    ? nk
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function rk(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Et(e)) ? !1 : t;
}
function Lr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = _f(e);
  let i = ar(1);
  t && (r ? pt(r) && (i = wo(r)) : (i = wo(e)));
  const l = rk(s, n, r) ? m0(s) : ar(0);
  let a = (o.left + l.x) / i.x,
    c = (o.top + l.y) / i.y,
    u = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const f = Et(s),
      m = r && pt(r) ? Et(r) : r;
    let p = f,
      h = p.frameElement;
    for (; h && r && m !== p; ) {
      const x = wo(h),
        y = h.getBoundingClientRect(),
        v = en(h),
        g = y.left + (h.clientLeft + parseFloat(v.paddingLeft)) * x.x,
        b = y.top + (h.clientTop + parseFloat(v.paddingTop)) * x.y;
      (a *= x.x),
        (c *= x.y),
        (u *= x.x),
        (d *= x.y),
        (a += g),
        (c += b),
        (p = Et(h)),
        (h = p.frameElement);
    }
  }
  return Oo({ width: u, height: d, x: a, y: c });
}
const ok = [":popover-open", ":modal"];
function Rf(e) {
  return ok.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function sk(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Fn(r),
    l = t ? Rf(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    c = ar(1);
  const u = ar(0),
    d = wn(r);
  if (
    (d || (!d && !s)) &&
    ((Bo(r) !== "body" || ri(i)) && (a = ua(r)), wn(r))
  ) {
    const f = Lr(r);
    (c = wo(r)), (u.x = f.x + r.clientLeft), (u.y = f.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y,
  };
}
function ik(e) {
  return Array.from(e.getClientRects());
}
function h0(e) {
  return Lr(Fn(e)).left + ua(e).scrollLeft;
}
function lk(e) {
  const t = Fn(e),
    n = ua(e),
    r = e.ownerDocument.body,
    o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + h0(e);
  const l = -n.scrollTop;
  return (
    en(r).direction === "rtl" && (i += Ze(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function ak(e, t) {
  const n = Et(e),
    r = Fn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = Sf();
    (!c || (c && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
function ck(e, t) {
  const n = Lr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = wn(e) ? wo(e) : ar(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    c = r * s.y;
  return { width: i, height: l, x: a, y: c };
}
function rh(e, t, n) {
  let r;
  if (t === "viewport") r = ak(e, n);
  else if (t === "document") r = lk(Fn(e));
  else if (pt(t)) r = ck(t, n);
  else {
    const o = m0(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Oo(r);
}
function g0(e, t) {
  const n = lr(e);
  return n === t || !pt(n) || No(n)
    ? !1
    : en(n).position === "fixed" || g0(n, t);
}
function uk(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Vs(e, [], !1).filter((l) => pt(l) && Bo(l) !== "body"),
    o = null;
  const s = en(e).position === "fixed";
  let i = s ? lr(e) : e;
  for (; pt(i) && !No(i); ) {
    const l = en(i),
      a = wf(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ri(i) && !a && g0(e, i))
      )
        ? (r = r.filter((u) => u !== i))
        : (o = l),
      (i = lr(i));
  }
  return t.set(e, r), r;
}
function dk(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Rf(t)
          ? []
          : uk(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((c, u) => {
      const d = rh(t, u, o);
      return (
        (c.top = Ze(d.top, c.top)),
        (c.right = tn(d.right, c.right)),
        (c.bottom = tn(d.bottom, c.bottom)),
        (c.left = Ze(d.left, c.left)),
        c
      );
    }, rh(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function fk(e) {
  const { width: t, height: n } = p0(e);
  return { width: t, height: n };
}
function pk(e, t, n) {
  const r = wn(t),
    o = Fn(t),
    s = n === "fixed",
    i = Lr(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = ar(0);
  if (r || (!r && !s))
    if (((Bo(t) !== "body" || ri(o)) && (l = ua(t)), r)) {
      const d = Lr(t, !0, s, t);
      (a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop);
    } else o && (a.x = h0(o));
  const c = i.left + l.scrollLeft - a.x,
    u = i.top + l.scrollTop - a.y;
  return { x: c, y: u, width: i.width, height: i.height };
}
function $c(e) {
  return en(e).position === "static";
}
function oh(e, t) {
  return !wn(e) || en(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function y0(e, t) {
  const n = Et(e);
  if (Rf(e)) return n;
  if (!wn(e)) {
    let o = lr(e);
    for (; o && !No(o); ) {
      if (pt(o) && !$c(o)) return o;
      o = lr(o);
    }
    return n;
  }
  let r = oh(e, t);
  for (; r && FE(r) && $c(r); ) r = oh(r, t);
  return r && No(r) && $c(r) && !wf(r) ? n : r || ME(e) || n;
}
const mk = async function (e) {
  const t = this.getOffsetParent || y0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: pk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function hk(e) {
  return en(e).direction === "rtl";
}
const gk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sk,
  getDocumentElement: Fn,
  getClippingRect: dk,
  getOffsetParent: y0,
  getElementRects: mk,
  getClientRects: ik,
  getDimensions: fk,
  getScale: wo,
  isElement: pt,
  isRTL: hk,
};
function yk(e, t) {
  let n = null,
    r;
  const o = Fn(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const { left: c, top: u, width: d, height: f } = e.getBoundingClientRect();
    if ((l || t(), !d || !f)) return;
    const m = ji(u),
      p = ji(o.clientWidth - (c + d)),
      h = ji(o.clientHeight - (u + f)),
      x = ji(c),
      v = {
        rootMargin: -m + "px " + -p + "px " + -h + "px " + -x + "px",
        threshold: Ze(0, tn(1, a)) || 1,
      };
    let g = !0;
    function b(C) {
      const E = C[0].intersectionRatio;
      if (E !== a) {
        if (!g) return i();
        E
          ? i(!1, E)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(b, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function vk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    c = _f(e),
    u = o || s ? [...(c ? Vs(c) : []), ...Vs(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, { passive: !0 }),
      s && y.addEventListener("resize", n);
  });
  const d = c && l ? yk(c, n) : null;
  let f = -1,
    m = null;
  i &&
    ((m = new ResizeObserver((y) => {
      let [v] = y;
      v &&
        v.target === c &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var g;
          (g = m) == null || g.observe(t);
        }))),
        n();
    })),
    c && !a && m.observe(c),
    m.observe(t));
  let p,
    h = a ? Lr(e) : null;
  a && x();
  function x() {
    const y = Lr(e);
    h &&
      (y.x !== h.x ||
        y.y !== h.y ||
        y.width !== h.width ||
        y.height !== h.height) &&
      n(),
      (h = y),
      (p = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var y;
      u.forEach((v) => {
        o && v.removeEventListener("scroll", n),
          s && v.removeEventListener("resize", n);
      }),
        d == null || d(),
        (y = m) == null || y.disconnect(),
        (m = null),
        a && cancelAnimationFrame(p);
    }
  );
}
const wk = JE,
  Sk = ZE,
  sh = qE,
  xk = tk,
  ih = KE,
  lh = XE,
  ah = ek,
  bk = (e, t, n) => {
    const r = new Map(),
      o = { platform: gk, ...n },
      s = { ...o.platform, _c: r };
    return YE(e, t, { ...o, platform: s });
  },
  Ck = (e) => {
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
            ? ih({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? ih({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  };
var Zi = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function Nl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Nl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Nl(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function v0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ch(e, t) {
  const n = v0(e);
  return Math.round(t * n) / n;
}
function uh(e) {
  const t = w.useRef(e);
  return (
    Zi(() => {
      t.current = e;
    }),
    t
  );
}
function Ek(e) {
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
    [u, d] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, m] = w.useState(r);
  Nl(f, r) || m(r);
  const [p, h] = w.useState(null),
    [x, y] = w.useState(null),
    v = w.useCallback((T) => {
      T !== E.current && ((E.current = T), h(T));
    }, []),
    g = w.useCallback((T) => {
      T !== _.current && ((_.current = T), y(T));
    }, []),
    b = s || p,
    C = i || x,
    E = w.useRef(null),
    _ = w.useRef(null),
    D = w.useRef(u),
    L = a != null,
    N = uh(a),
    M = uh(o),
    B = w.useCallback(() => {
      if (!E.current || !_.current) return;
      const T = { placement: t, strategy: n, middleware: f };
      M.current && (T.platform = M.current),
        bk(E.current, _.current, T).then((R) => {
          const k = { ...R, isPositioned: !0 };
          V.current &&
            !Nl(D.current, k) &&
            ((D.current = k),
            Zs.flushSync(() => {
              d(k);
            }));
        });
    }, [f, t, n, M]);
  Zi(() => {
    c === !1 &&
      D.current.isPositioned &&
      ((D.current.isPositioned = !1), d((T) => ({ ...T, isPositioned: !1 })));
  }, [c]);
  const V = w.useRef(!1);
  Zi(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    []
  ),
    Zi(() => {
      if ((b && (E.current = b), C && (_.current = C), b && C)) {
        if (N.current) return N.current(b, C, B);
        B();
      }
    }, [b, C, B, N, L]);
  const A = w.useMemo(
      () => ({ reference: E, floating: _, setReference: v, setFloating: g }),
      [v, g]
    ),
    j = w.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    P = w.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!j.floating) return T;
      const R = ch(j.floating, u.x),
        k = ch(j.floating, u.y);
      return l
        ? {
            ...T,
            transform: "translate(" + R + "px, " + k + "px)",
            ...(v0(j.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: k };
    }, [n, l, j.floating, u.x, u.y]);
  return w.useMemo(
    () => ({ ...u, update: B, refs: A, elements: j, floatingStyles: P }),
    [u, B, A, j, P]
  );
}
const w0 = { ...wg },
  kk = w0.useInsertionEffect,
  _k = kk || ((e) => e());
function Rk(e) {
  const t = w.useRef(() => {});
  return (
    _k(() => {
      t.current = e;
    }),
    w.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
var Bu = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
let dh = !1,
  Dk = 0;
const fh = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Dk++;
function Pk() {
  const [e, t] = w.useState(() => (dh ? fh() : void 0));
  return (
    Bu(() => {
      e == null && t(fh());
    }, []),
    w.useEffect(() => {
      dh = !0;
    }, []),
    e
  );
}
const Tk = w0.useId,
  Nk = Tk || Pk;
function Ok() {
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
const jk = w.createContext(null),
  $k = w.createContext(null),
  Lk = () => {
    var e;
    return ((e = w.useContext(jk)) == null ? void 0 : e.id) || null;
  },
  Ak = () => w.useContext($k);
function Fk(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    o = Nk(),
    s = w.useRef({}),
    [i] = w.useState(() => Ok()),
    l = Lk() != null,
    [a, c] = w.useState(r.reference),
    u = Rk((m, p, h) => {
      (s.current.openEvent = m ? p : void 0),
        i.emit("openchange", { open: m, event: p, reason: h, nested: l }),
        n == null || n(m, p, h);
    }),
    d = w.useMemo(() => ({ setPositionReference: c }), []),
    f = w.useMemo(
      () => ({
        reference: a || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [a, r.reference, r.floating]
    );
  return w.useMemo(
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
function Mk(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    n = Fk({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    o = r.elements,
    [s, i] = w.useState(null),
    [l, a] = w.useState(null),
    u = (o == null ? void 0 : o.reference) || s,
    d = w.useRef(null),
    f = Ak();
  Bu(() => {
    u && (d.current = u);
  }, [u]);
  const m = Ek({ ...e, elements: { ...o, ...(l && { reference: l }) } }),
    p = w.useCallback(
      (g) => {
        const b = pt(g)
          ? {
              getBoundingClientRect: () => g.getBoundingClientRect(),
              contextElement: g,
            }
          : g;
        a(b), m.refs.setReference(b);
      },
      [m.refs]
    ),
    h = w.useCallback(
      (g) => {
        (pt(g) || g === null) && ((d.current = g), i(g)),
          (pt(m.refs.reference.current) ||
            m.refs.reference.current === null ||
            (g !== null && !pt(g))) &&
            m.refs.setReference(g);
      },
      [m.refs]
    ),
    x = w.useMemo(
      () => ({
        ...m.refs,
        setReference: h,
        setPositionReference: p,
        domReference: d,
      }),
      [m.refs, h, p]
    ),
    y = w.useMemo(() => ({ ...m.elements, domReference: u }), [m.elements, u]),
    v = w.useMemo(
      () => ({ ...m, ...r, refs: x, elements: y, nodeId: t }),
      [m, x, y, t, r]
    );
  return (
    Bu(() => {
      r.dataRef.current.floatingContext = v;
      const g = f == null ? void 0 : f.nodesRef.current.find((b) => b.id === t);
      g && (g.context = v);
    }),
    w.useMemo(() => ({ ...m, context: v, refs: x, elements: y }), [m, x, y, v])
  );
}
function Ik(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"),
      o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function ph(e, t, n, r) {
  return e === "center" || r === "center"
    ? { top: t }
    : e === "end"
    ? { bottom: n }
    : e === "start"
    ? { top: n }
    : {};
}
function mh(e, t, n, r, o) {
  return e === "center" || r === "center"
    ? { left: t }
    : e === "end"
    ? { [o === "ltr" ? "right" : "left"]: n }
    : e === "start"
    ? { [o === "ltr" ? "left" : "right"]: n }
    : {};
}
const zk = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function Bk({
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
      [zk[a]]: z(r),
    },
    d = z(-t / 2);
  return a === "left"
    ? {
        ...u,
        ...ph(c, i, n, o),
        right: d,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
      }
    : a === "right"
    ? {
        ...u,
        ...ph(c, i, n, o),
        left: d,
        borderRightColor: "transparent",
        borderTopColor: "transparent",
      }
    : a === "top"
    ? {
        ...u,
        ...mh(c, s, n, o, l),
        bottom: d,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
      }
    : a === "bottom"
    ? {
        ...u,
        ...mh(c, s, n, o, l),
        top: d,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
      }
    : {};
}
const S0 = w.forwardRef(
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
    const { dir: d } = pf();
    return s
      ? S.jsx("div", {
          ...c,
          ref: u,
          style: {
            ...a,
            ...Bk({
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
S0.displayName = "@mantine/core/FloatingArrow";
const [Vk, x0] = Br("Popover component was not found in the tree");
function da({ children: e, active: t = !0, refProp: n = "ref" }) {
  const r = Jb(t),
    o = Dt(r, e == null ? void 0 : e.ref);
  return Mo(e) ? w.cloneElement(e, { [n]: o }) : e;
}
function b0(e) {
  return S.jsx(yf, { tabIndex: -1, "data-autofocus": !0, ...e });
}
da.displayName = "@mantine/core/FocusTrap";
b0.displayName = "@mantine/core/FocusTrapInitialFocus";
da.InitialFocus = b0;
function Hk(e) {
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
const Uk = {},
  C0 = w.forwardRef((e, t) => {
    const { children: n, target: r, ...o } = U("Portal", Uk, e),
      [s, i] = w.useState(!1),
      l = w.useRef(null);
    return (
      ei(
        () => (
          i(!0),
          (l.current = r
            ? typeof r == "string"
              ? document.querySelector(r)
              : r
            : Hk(o)),
          lf(t, l.current),
          !r && l.current && document.body.appendChild(l.current),
          () => {
            !r && l.current && document.body.removeChild(l.current);
          }
        ),
        [r]
      ),
      !s || !l.current
        ? null
        : Zs.createPortal(S.jsx(S.Fragment, { children: n }), l.current)
    );
  });
C0.displayName = "@mantine/core/Portal";
function fa({ withinPortal: e = !0, children: t, ...n }) {
  return e
    ? S.jsx(C0, { ...n, children: t })
    : S.jsx(S.Fragment, { children: t });
}
fa.displayName = "@mantine/core/OptionalPortal";
const as = (e) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${z(e === "bottom" ? 10 : -10)})`,
    },
    transitionProperty: "transform, opacity",
  }),
  $i = {
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
    pop: { ...as("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...as("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...as("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...as("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...as("top"), common: { transformOrigin: "top right" } },
  },
  hh = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function Wk({ transition: e, state: t, duration: n, timingFunction: r }) {
  const o = { transitionDuration: `${n}ms`, transitionTimingFunction: r };
  return typeof e == "string"
    ? e in $i
      ? {
          transitionProperty: $i[e].transitionProperty,
          ...o,
          ...$i[e].common,
          ...$i[e][hh[t]],
        }
      : {}
    : {
        transitionProperty: e.transitionProperty,
        ...o,
        ...e.common,
        ...e[hh[t]],
      };
}
function Yk({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: s,
  onEntered: i,
  onExited: l,
}) {
  const a = xn(),
    c = af(),
    u = a.respectReducedMotion ? c : !1,
    [d, f] = w.useState(u ? 0 : e),
    [m, p] = w.useState(r ? "entered" : "exited"),
    h = w.useRef(-1),
    x = w.useRef(-1),
    y = (v) => {
      const g = v ? o : s,
        b = v ? i : l;
      window.clearTimeout(h.current);
      const C = u ? 0 : v ? e : t;
      f(C),
        C === 0
          ? (typeof g == "function" && g(),
            typeof b == "function" && b(),
            p(v ? "entered" : "exited"))
          : (x.current = requestAnimationFrame(() => {
              Qx.flushSync(() => {
                p(v ? "pre-entering" : "pre-exiting");
              }),
                (x.current = requestAnimationFrame(() => {
                  typeof g == "function" && g(),
                    p(v ? "entering" : "exiting"),
                    (h.current = window.setTimeout(() => {
                      typeof b == "function" && b(),
                        p(v ? "entered" : "exited");
                    }, C));
                }));
            }));
    };
  return (
    $r(() => {
      y(r);
    }, [r]),
    w.useEffect(
      () => () => {
        window.clearTimeout(h.current), cancelAnimationFrame(x.current);
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
function Ho({
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
  } = Yk({
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
      ? S.jsx(S.Fragment, { children: s({}) })
      : e
      ? s({ display: "none" })
      : null
    : f === "exited"
    ? e
      ? s({ display: "none" })
      : null
    : S.jsx(S.Fragment, {
        children: s(
          Wk({ transition: t, duration: d, state: f, timingFunction: m })
        ),
      });
}
Ho.displayName = "@mantine/core/Transition";
var E0 = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Kk = {},
  Df = X((e, t) => {
    var x, y, v, g;
    const n = U("PopoverDropdown", Kk, e),
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
      f = x0(),
      m = jv({ opened: f.opened, shouldReturnFocus: f.returnFocus }),
      p = f.withRoles
        ? {
            "aria-labelledby": f.getTargetId(),
            id: f.getDropdownId(),
            role: "dialog",
            tabIndex: -1,
          }
        : {},
      h = Dt(t, f.floating);
    return f.disabled
      ? null
      : S.jsx(fa, {
          ...f.portalProps,
          withinPortal: f.withinPortal,
          children: S.jsx(Ho, {
            mounted: f.opened,
            ...f.transitionProps,
            transition:
              ((x = f.transitionProps) == null ? void 0 : x.transition) ||
              "fade",
            duration:
              ((y = f.transitionProps) == null ? void 0 : y.duration) ?? 150,
            keepMounted: f.keepMounted,
            exitDuration:
              typeof ((v = f.transitionProps) == null
                ? void 0
                : v.exitDuration) == "number"
                ? f.transitionProps.exitDuration
                : (g = f.transitionProps) == null
                ? void 0
                : g.duration,
            children: (b) =>
              S.jsx(da, {
                active: f.trapFocus,
                children: S.jsxs(G, {
                  ...p,
                  ...d,
                  variant: a,
                  ref: h,
                  onKeyDownCapture: Ib(f.onClose, {
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
                    S.jsx(S0, {
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
Df.classes = E0;
Df.displayName = "@mantine/core/PopoverDropdown";
const qk = { refProp: "ref", popupType: "dialog" },
  k0 = X((e, t) => {
    const {
      children: n,
      refProp: r,
      popupType: o,
      ...s
    } = U("PopoverTarget", qk, e);
    if (!Mo(n))
      throw new Error(
        "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const i = s,
      l = x0(),
      a = Dt(l.reference, n.ref, t),
      c = l.withRoles
        ? {
            "aria-haspopup": o,
            "aria-expanded": l.opened,
            "aria-controls": l.getDropdownId(),
            id: l.getTargetId(),
          }
        : {};
    return w.cloneElement(n, {
      ...i,
      ...c,
      ...l.targetProps,
      className: at(l.targetProps.className, i.className, n.props.className),
      [r]: a,
      ...(l.controlled ? null : { onClick: l.onToggle }),
    });
  });
k0.displayName = "@mantine/core/PopoverTarget";
function Gk({ opened: e, floating: t, position: n, positionDependencies: r }) {
  const [o, s] = w.useState(0);
  w.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return vk(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference.current, t.refs.floating.current, e, o, n]),
    $r(() => {
      t.update();
    }, r),
    $r(() => {
      s((i) => i + 1);
    }, [e]);
}
function Xk(e) {
  if (e === void 0) return { shift: !0, flip: !0 };
  const t = { ...e };
  return (
    e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t
  );
}
function Qk(e, t) {
  const n = Xk(e.middlewares),
    r = [wk(e.offset)];
  return (
    n.shift &&
      r.push(
        Sk(
          typeof n.shift == "boolean"
            ? { limiter: ah(), padding: 5 }
            : { limiter: ah(), padding: 5, ...n.shift }
        )
      ),
    n.flip && r.push(typeof n.flip == "boolean" ? sh() : sh(n.flip)),
    n.inline && r.push(typeof n.inline == "boolean" ? lh() : lh(n.inline)),
    r.push(Ck({ element: e.arrowRef, padding: e.arrowOffset })),
    (n.size || e.width === "target") &&
      r.push(
        xk({
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
function Jk(e) {
  const [t, n] = jn({
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
    s = Mk({
      strategy: e.strategy,
      placement: e.position,
      middleware: Qk(e, () => s),
    });
  return (
    Gk({
      opened: e.opened,
      position: e.position,
      positionDependencies: e.positionDependencies || [],
      floating: s,
    }),
    $r(() => {
      var i;
      (i = e.onPositionChange) == null || i.call(e, s.placement);
    }, [s.placement]),
    $r(() => {
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
const Zk = {
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
    zIndex: Vr("popover"),
    __staticSelector: "Popover",
    width: "max-content",
  },
  e_ = (e, { radius: t, shadow: n }) => ({
    dropdown: {
      "--popover-radius": t === void 0 ? void 0 : Sn(t),
      "--popover-shadow": sf(n),
    },
  });
function fr(e) {
  var ye, rt, Te, Le, W, re;
  const t = U("Popover", Zk, e),
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
      unstyled: x,
      classNames: y,
      styles: v,
      closeOnClickOutside: g,
      withinPortal: b,
      portalProps: C,
      closeOnEscape: E,
      clickOutsideEvents: _,
      trapFocus: D,
      onClose: L,
      onOpen: N,
      onChange: M,
      zIndex: B,
      radius: V,
      shadow: A,
      id: j,
      defaultOpened: P,
      __staticSelector: T,
      withRoles: R,
      disabled: k,
      returnFocus: $,
      variant: O,
      keepMounted: I,
      vars: K,
      floatingStrategy: J,
      ...ee
    } = t,
    ne = ue({
      name: T,
      props: t,
      classes: E0,
      classNames: y,
      styles: v,
      unstyled: x,
      rootSelector: "dropdown",
      vars: K,
      varsResolver: e_,
    }),
    te = w.useRef(null),
    [me, oe] = w.useState(null),
    [le, Z] = w.useState(null),
    { dir: ge } = pf(),
    ce = Hr(j),
    se = Jk({
      middlewares: u,
      width: c,
      position: Ik(ge, r),
      offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
      arrowRef: te,
      arrowOffset: m,
      onPositionChange: s,
      positionDependencies: i,
      opened: l,
      defaultOpened: P,
      onChange: M,
      onOpen: N,
      onClose: L,
      strategy: J,
    });
  Vb(() => g && se.onClose(), _, [me, le]);
  const je = w.useCallback(
      (ie) => {
        oe(ie), se.floating.refs.setReference(ie);
      },
      [se.floating.refs.setReference]
    ),
    Ie = w.useCallback(
      (ie) => {
        Z(ie), se.floating.refs.setFloating(ie);
      },
      [se.floating.refs.setFloating]
    );
  return S.jsx(Vk, {
    value: {
      returnFocus: $,
      disabled: k,
      controlled: se.controlled,
      reference: je,
      floating: Ie,
      x: se.floating.x,
      y: se.floating.y,
      arrowX:
        (Te =
          (rt = (ye = se.floating) == null ? void 0 : ye.middlewareData) == null
            ? void 0
            : rt.arrow) == null
          ? void 0
          : Te.x,
      arrowY:
        (re =
          (W = (Le = se.floating) == null ? void 0 : Le.middlewareData) == null
            ? void 0
            : W.arrow) == null
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
      getTargetId: () => `${ce}-target`,
      getDropdownId: () => `${ce}-dropdown`,
      withRoles: R,
      targetProps: ee,
      __staticSelector: T,
      classNames: y,
      styles: v,
      unstyled: x,
      variant: O,
      keepMounted: I,
      getStyles: ne,
    },
    children: n,
  });
}
fr.Target = k0;
fr.Dropdown = Df;
fr.displayName = "@mantine/core/Popover";
fr.extend = (e) => e;
var Gt = {
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
const t_ = w.forwardRef(({ className: e, ...t }, n) =>
    S.jsxs(G, {
      component: "span",
      className: at(Gt.barsLoader, e),
      ...t,
      ref: n,
      children: [
        S.jsx("span", { className: Gt.bar }),
        S.jsx("span", { className: Gt.bar }),
        S.jsx("span", { className: Gt.bar }),
      ],
    })
  ),
  n_ = w.forwardRef(({ className: e, ...t }, n) =>
    S.jsxs(G, {
      component: "span",
      className: at(Gt.dotsLoader, e),
      ...t,
      ref: n,
      children: [
        S.jsx("span", { className: Gt.dot }),
        S.jsx("span", { className: Gt.dot }),
        S.jsx("span", { className: Gt.dot }),
      ],
    })
  ),
  r_ = w.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(G, {
      component: "span",
      className: at(Gt.ovalLoader, e),
      ...t,
      ref: n,
    })
  ),
  _0 = { bars: t_, oval: r_, dots: n_ },
  o_ = { loaders: _0, type: "oval" },
  s_ = (e, { size: t, color: n }) => ({
    root: {
      "--loader-size": Ee(t, "loader-size"),
      "--loader-color": n ? Po(n, e) : void 0,
    },
  }),
  oi = X((e, t) => {
    const n = U("Loader", o_, e),
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
      x = ue({
        name: "Loader",
        props: n,
        classes: Gt,
        className: l,
        style: a,
        classNames: c,
        styles: u,
        unstyled: d,
        vars: i,
        varsResolver: s_,
      });
    return p
      ? S.jsx(G, { ...x("root"), ref: t, ...h, children: p })
      : S.jsx(G, {
          ...x("root"),
          ref: t,
          component: f[s],
          variant: m,
          size: r,
          ...h,
        });
  });
oi.defaultLoaders = _0;
oi.classes = Gt;
oi.displayName = "@mantine/core/Loader";
const R0 = w.forwardRef(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) =>
    S.jsx("svg", {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: S.jsx("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    })
);
R0.displayName = "@mantine/core/CloseIcon";
var D0 = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const i_ = { variant: "subtle" },
  l_ = (e, { size: t, radius: n, iconSize: r }) => ({
    root: {
      "--cb-size": Ee(t, "cb-size"),
      "--cb-radius": n === void 0 ? void 0 : Sn(n),
      "--cb-icon-size": z(r),
    },
  }),
  Ar = An((e, t) => {
    const n = U("CloseButton", i_, e),
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
        mod: x,
        ...y
      } = n,
      v = ue({
        name: "CloseButton",
        props: n,
        className: l,
        style: c,
        classes: D0,
        classNames: a,
        styles: u,
        unstyled: d,
        vars: s,
        varsResolver: l_,
      });
    return S.jsxs(Dn, {
      ref: t,
      ...y,
      unstyled: d,
      variant: p,
      disabled: m,
      mod: [{ disabled: m || f }, x],
      ...v("root", { variant: p, active: !m && !f }),
      children: [h || S.jsx(R0, {}), o],
    });
  });
Ar.classes = D0;
Ar.displayName = "@mantine/core/CloseButton";
function a_(e) {
  return w.Children.toArray(e).filter(Boolean);
}
var P0 = { root: "m_4081bf90" };
const c_ = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  u_ = (
    e,
    { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: s, wrap: i },
    { childWidth: l }
  ) => ({
    root: {
      "--group-child-width": t && n ? l : void 0,
      "--group-gap": ia(r),
      "--group-align": o,
      "--group-justify": s,
      "--group-wrap": i,
    },
  }),
  Kn = X((e, t) => {
    const n = U("Group", c_, e),
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
        variant: x,
        __size: y,
        mod: v,
        ...g
      } = n,
      b = a_(a),
      C = b.length,
      E = ia(c ?? "md"),
      D = { childWidth: `calc(${100 / C}% - (${E} - ${E} / ${C}))` },
      L = ue({
        name: "Group",
        props: n,
        stylesCtx: D,
        className: o,
        style: s,
        classes: P0,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: h,
        varsResolver: u_,
      });
    return S.jsx(G, {
      ...L("root"),
      ref: t,
      variant: x,
      mod: [{ grow: m }, v],
      size: y,
      ...g,
      children: b,
    });
  });
Kn.classes = P0;
Kn.displayName = "@mantine/core/Group";
var T0 = { root: "m_9814e45f" };
const d_ = { zIndex: Vr("modal") },
  f_ = (
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
        ((n !== void 0 || r !== void 0) && fn(n || "#000", r ?? 0.6)) ||
        void 0,
      "--overlay-filter": o ? `blur(${z(o)})` : void 0,
      "--overlay-radius": s === void 0 ? void 0 : Sn(s),
      "--overlay-z-index": i == null ? void 0 : i.toString(),
    },
  }),
  Hs = An((e, t) => {
    const n = U("Overlay", d_, e),
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
        color: x,
        backgroundOpacity: y,
        mod: v,
        ...g
      } = n,
      b = ue({
        name: "Overlay",
        props: n,
        classes: T0,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: f_,
      });
    return S.jsx(G, {
      ref: t,
      ...b("root"),
      mod: [{ center: u, fixed: c }, v],
      ...g,
      children: d,
    });
  });
Hs.classes = T0;
Hs.displayName = "@mantine/core/Overlay";
const [p_, Mn] = Br("ModalBase component was not found in tree");
function m_({ opened: e, transitionDuration: t }) {
  const [n, r] = w.useState(e),
    o = w.useRef(),
    i = af() ? 0 : t;
  return (
    w.useEffect(
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
function h_({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: s,
  returnFocus: i,
}) {
  const l = Hr(e),
    [a, c] = w.useState(!1),
    [u, d] = w.useState(!1),
    f =
      typeof (t == null ? void 0 : t.duration) == "number"
        ? t == null
          ? void 0
          : t.duration
        : 200,
    m = m_({ opened: n, transitionDuration: f });
  return (
    tC(
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
    jv({ opened: n, shouldReturnFocus: r && i }),
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
const g_ = w.forwardRef(
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
      __vars: x,
      unstyled: y,
      removeScrollProps: v,
      ...g
    },
    b
  ) => {
    const {
      _id: C,
      titleMounted: E,
      bodyMounted: _,
      shouldLockScroll: D,
      setTitleMounted: L,
      setBodyMounted: N,
    } = h_({
      id: r,
      transitionProps: o,
      opened: t,
      trapFocus: s,
      closeOnEscape: i,
      onClose: n,
      returnFocus: l,
    });
    return S.jsx(fa, {
      ...u,
      withinPortal: c,
      children: S.jsx(p_, {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: a,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${C}-title`,
          getBodyId: () => `${C}-body`,
          titleMounted: E,
          bodyMounted: _,
          setTitleMounted: L,
          setBodyMounted: N,
          trapFocus: s,
          closeOnEscape: i,
          zIndex: m,
          unstyled: y,
        },
        children: S.jsx(Pv, {
          enabled: D && d,
          ...v,
          children: S.jsx(G, {
            ref: b,
            ...g,
            __vars: {
              ...x,
              "--mb-z-index": (m || Vr("modal")).toString(),
              "--mb-shadow": sf(p),
              "--mb-padding": ia(h),
            },
            children: f,
          }),
        }),
      }),
    });
  }
);
function y_() {
  const e = Mn();
  return (
    w.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []),
    e.getBodyId()
  );
}
var jo = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
const N0 = w.forwardRef(({ className: e, ...t }, n) => {
  const r = y_(),
    o = Mn();
  return S.jsx(G, {
    ref: n,
    ...t,
    id: r,
    className: at({ [jo.body]: !o.unstyled }, e),
  });
});
N0.displayName = "@mantine/core/ModalBaseBody";
const O0 = w.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const o = Mn();
  return S.jsx(Ar, {
    ref: r,
    ...n,
    onClick: (s) => {
      o.onClose(), t == null || t(s);
    },
    className: at({ [jo.close]: !o.unstyled }, e),
    unstyled: o.unstyled,
  });
});
O0.displayName = "@mantine/core/ModalBaseCloseButton";
const v_ = w.forwardRef(
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
      const l = Mn();
      return S.jsx(Ho, {
        mounted: l.opened,
        transition: "pop",
        ...l.transitionProps,
        ...e,
        children: (a) =>
          S.jsx("div", {
            ...n,
            className: at({ [jo.inner]: !l.unstyled }, n.className),
            children: S.jsx(da, {
              active: l.opened && l.trapFocus,
              children: S.jsx(vf, {
                ...s,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": l.bodyMounted ? l.getBodyId() : void 0,
                "aria-labelledby": l.titleMounted ? l.getTitleId() : void 0,
                ref: i,
                style: [o, a],
                className: at({ [jo.content]: !l.unstyled }, t),
                unstyled: l.unstyled,
                children: s.children,
              }),
            }),
          }),
      });
    }
  ),
  j0 = w.forwardRef(({ className: e, ...t }, n) => {
    const r = Mn();
    return S.jsx(G, {
      component: "header",
      ref: n,
      className: at({ [jo.header]: !r.unstyled }, e),
      ...t,
    });
  });
j0.displayName = "@mantine/core/ModalBaseHeader";
const w_ = { duration: 200, timingFunction: "ease", transition: "fade" };
function S_(e) {
  const t = Mn();
  return { ...w_, ...t.transitionProps, ...e };
}
const $0 = w.forwardRef(
  ({ onClick: e, transitionProps: t, style: n, ...r }, o) => {
    const s = Mn(),
      i = S_(t);
    return S.jsx(Ho, {
      mounted: s.opened,
      ...i,
      transition: "fade",
      children: (l) =>
        S.jsx(Hs, {
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
$0.displayName = "@mantine/core/ModalBaseOverlay";
function x_() {
  const e = Mn();
  return (
    w.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
const L0 = w.forwardRef(({ className: e, ...t }, n) => {
  const r = x_(),
    o = Mn();
  return S.jsx(G, {
    component: "h2",
    ref: n,
    className: at({ [jo.title]: !o.unstyled }, e),
    ...t,
    id: r,
  });
});
L0.displayName = "@mantine/core/ModalBaseTitle";
function b_({ children: e }) {
  return S.jsx(S.Fragment, { children: e });
}
const [C_, Uo] = of({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var Bt = {
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
const gh = {},
  E_ = (e, { size: t }) => ({
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${et(t)} - ${z(2)})`,
    },
  }),
  pa = X((e, t) => {
    const n = U("InputDescription", gh, e),
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
      } = U("InputDescription", gh, n),
      p = Uo(),
      h = ue({
        name: ["InputWrapper", u],
        props: n,
        classes: Bt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "description",
        vars: a,
        varsResolver: E_,
      }),
      x = (d && (p == null ? void 0 : p.getStyles)) || h;
    return S.jsx(G, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...x(
        "description",
        p != null && p.getStyles ? { className: o, style: s } : void 0
      ),
      ...m,
    });
  });
pa.classes = Bt;
pa.displayName = "@mantine/core/InputDescription";
const k_ = {},
  __ = (e, { size: t }) => ({
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${et(t)} - ${z(2)})`,
    },
  }),
  ma = X((e, t) => {
    const n = U("InputError", k_, e),
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
      p = ue({
        name: ["InputWrapper", u],
        props: n,
        classes: Bt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "error",
        vars: a,
        varsResolver: __,
      }),
      h = Uo(),
      x = (d && (h == null ? void 0 : h.getStyles)) || p;
    return S.jsx(G, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...x(
        "error",
        h != null && h.getStyles ? { className: o, style: s } : void 0
      ),
      ...m,
    });
  });
ma.classes = Bt;
ma.displayName = "@mantine/core/InputError";
const yh = { labelElement: "label" },
  R_ = (e, { size: t }) => ({
    label: { "--input-label-size": et(t), "--input-asterisk-color": void 0 },
  }),
  ha = X((e, t) => {
    const n = U("InputLabel", yh, e),
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
        variant: x,
        mod: y,
        ...v
      } = U("InputLabel", yh, n),
      g = ue({
        name: ["InputWrapper", h],
        props: n,
        classes: Bt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "label",
        vars: a,
        varsResolver: R_,
      }),
      b = Uo(),
      C = (b == null ? void 0 : b.getStyles) || g;
    return S.jsxs(G, {
      ...C(
        "label",
        b != null && b.getStyles ? { className: o, style: s } : void 0
      ),
      component: c,
      variant: x,
      size: u,
      ref: t,
      htmlFor: c === "label" ? f : void 0,
      mod: [{ required: d }, y],
      onMouseDown: (E) => {
        m == null || m(E),
          !E.defaultPrevented && E.detail > 1 && E.preventDefault();
      },
      ...v,
      children: [
        p,
        d &&
          S.jsx("span", {
            ...C("required"),
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
ha.classes = Bt;
ha.displayName = "@mantine/core/InputLabel";
const vh = {},
  Pf = X((e, t) => {
    const n = U("InputPlaceholder", vh, e),
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
      } = U("InputPlaceholder", vh, n),
      p = ue({
        name: ["InputPlaceholder", c],
        props: n,
        classes: Bt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "placeholder",
      });
    return S.jsx(G, {
      ...p("placeholder"),
      mod: [{ error: !!d }, f],
      component: "span",
      variant: u,
      ref: t,
      ...m,
    });
  });
Pf.classes = Bt;
Pf.displayName = "@mantine/core/InputPlaceholder";
function D_(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((a) => a === "input"),
    o = e[r - 1],
    s = e[r + 1];
  return {
    offsetBottom: (t && s === "description") || (n && s === "error"),
    offsetTop: (t && o === "description") || (n && o === "error"),
  };
}
const P_ = {
    labelElement: "label",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  T_ = (e, { size: t }) => ({
    label: { "--input-label-size": et(t), "--input-asterisk-color": void 0 },
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${et(t)} - ${z(2)})`,
    },
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${et(t)} - ${z(2)})`,
    },
  }),
  Tf = X((e, t) => {
    const n = U("InputWrapper", P_, e),
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
        description: x,
        labelProps: y,
        descriptionProps: v,
        errorProps: g,
        labelElement: b,
        children: C,
        withAsterisk: E,
        id: _,
        required: D,
        __stylesApiProps: L,
        mod: N,
        ...M
      } = n,
      B = ue({
        name: ["InputWrapper", d],
        props: L || n,
        classes: Bt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: T_,
      }),
      V = { size: c, variant: u, __staticSelector: d },
      A = Hr(_),
      j = typeof E == "boolean" ? E : D,
      P = (g == null ? void 0 : g.id) || `${A}-error`,
      T = (v == null ? void 0 : v.id) || `${A}-description`,
      R = A,
      k = !!h && typeof h != "boolean",
      $ = !!x,
      O = `${k ? P : ""} ${$ ? T : ""}`,
      I = O.trim().length > 0 ? O.trim() : void 0,
      K = (y == null ? void 0 : y.id) || `${A}-label`,
      J =
        p &&
        S.jsx(
          ha,
          {
            labelElement: b,
            id: K,
            htmlFor: R,
            required: j,
            ...V,
            ...y,
            children: p,
          },
          "label"
        ),
      ee =
        $ &&
        S.jsx(
          pa,
          {
            ...v,
            ...V,
            size: (v == null ? void 0 : v.size) || V.size,
            id: (v == null ? void 0 : v.id) || T,
            children: x,
          },
          "description"
        ),
      ne = S.jsx(w.Fragment, { children: f(C) }, "input"),
      te =
        k &&
        w.createElement(
          ma,
          {
            ...g,
            ...V,
            size: (g == null ? void 0 : g.size) || V.size,
            key: "error",
            id: (g == null ? void 0 : g.id) || P,
          },
          h
        ),
      me = m.map((oe) => {
        switch (oe) {
          case "label":
            return J;
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
    return S.jsx(C_, {
      value: {
        getStyles: B,
        describedBy: I,
        inputId: R,
        labelId: K,
        ...D_(m, { hasDescription: $, hasError: k }),
      },
      children: S.jsx(G, {
        ref: t,
        variant: u,
        size: c,
        mod: [{ error: !!h }, N],
        ...B("root"),
        ...M,
        children: me,
      }),
    });
  });
Tf.classes = Bt;
Tf.displayName = "@mantine/core/InputWrapper";
const N_ = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
  },
  O_ = (e, t, n) => ({
    wrapper: {
      "--input-margin-top": n.offsetTop
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-margin-bottom": n.offsetBottom
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-height": Ee(t.size, "input-height"),
      "--input-fz": et(t.size),
      "--input-radius": t.radius === void 0 ? void 0 : Sn(t.radius),
      "--input-left-section-width":
        t.leftSectionWidth !== void 0 ? z(t.leftSectionWidth) : void 0,
      "--input-right-section-width":
        t.rightSectionWidth !== void 0 ? z(t.rightSectionWidth) : void 0,
      "--input-padding-y": t.multiline ? Ee(t.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": t.leftSectionPointerEvents,
      "--input-right-section-pointer-events": t.rightSectionPointerEvents,
    },
  }),
  nt = An((e, t) => {
    const n = U("Input", N_, e),
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
        leftSectionProps: x,
        leftSectionWidth: y,
        rightSection: v,
        rightSectionProps: g,
        rightSectionWidth: b,
        rightSectionPointerEvents: C,
        leftSectionPointerEvents: E,
        variant: _,
        vars: D,
        pointer: L,
        multiline: N,
        radius: M,
        id: B,
        withAria: V,
        withErrorStyles: A,
        mod: j,
        ...P
      } = n,
      { styleProps: T, rest: R } = ti(P),
      k = Uo(),
      $ = {
        offsetBottom: k == null ? void 0 : k.offsetBottom,
        offsetTop: k == null ? void 0 : k.offsetTop,
      },
      O = ue({
        name: ["Input", c],
        props: u || n,
        classes: Bt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        stylesCtx: $,
        rootSelector: "wrapper",
        vars: D,
        varsResolver: O_,
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
    return S.jsxs(G, {
      ...O("wrapper"),
      ...T,
      ...f,
      mod: [
        {
          error: !!m && A,
          pointer: L,
          disabled: p,
          multiline: N,
          "data-with-right-section": !!v,
          "data-with-left-section": !!h,
        },
        j,
      ],
      variant: _,
      size: d,
      children: [
        h &&
          S.jsx("div", {
            ...x,
            "data-position": "left",
            ...O("section", {
              className: x == null ? void 0 : x.className,
              style: x == null ? void 0 : x.style,
            }),
            children: h,
          }),
        S.jsx(G, {
          component: "input",
          ...R,
          ...I,
          ref: t,
          required: a,
          mod: { disabled: p, error: !!m && A },
          variant: _,
          ...O("input"),
        }),
        v &&
          S.jsx("div", {
            ...g,
            "data-position": "right",
            ...O("section", {
              className: g == null ? void 0 : g.className,
              style: g == null ? void 0 : g.style,
            }),
            children: v,
          }),
      ],
    });
  });
nt.classes = Bt;
nt.Wrapper = Tf;
nt.Label = ha;
nt.Error = ma;
nt.Description = pa;
nt.Placeholder = Pf;
nt.displayName = "@mantine/core/Input";
function j_(e, t, n) {
  const r = U(e, t, n),
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
      descriptionProps: x,
      wrapperProps: y,
      id: v,
      size: g,
      style: b,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: _,
      variant: D,
      vars: L,
      mod: N,
      ...M
    } = r,
    { styleProps: B, rest: V } = ti(M),
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
      descriptionProps: x,
      unstyled: d,
      styles: c,
      size: g,
      style: b,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: _,
      variant: D,
      id: v,
      mod: N,
      ...y,
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
      size: g,
      __staticSelector: f,
      __stylesApiProps: m || r,
      error: i,
      variant: D,
      id: v,
    },
  };
}
const $_ = { __staticSelector: "InputBase", withAria: !0 },
  bn = An((e, t) => {
    const { inputProps: n, wrapperProps: r, ...o } = j_("InputBase", $_, e);
    return S.jsx(nt.Wrapper, {
      ...r,
      children: S.jsx(nt, { ...n, ...o, ref: t }),
    });
  });
bn.classes = { ...nt.classes, ...nt.Wrapper.classes };
bn.displayName = "@mantine/core/InputBase";
function Vu({ style: e, size: t = 16, ...n }) {
  return S.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { ...e, width: z(t), height: z(t), display: "block" },
    ...n,
    children: S.jsx("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
Vu.displayName = "@mantine/core/AccordionChevron";
var A0 = { root: "m_b6d8b162" };
function L_(e) {
  if (e === "start") return "start";
  if (e === "end" || e) return "end";
}
const A_ = { inherit: !1 },
  F_ = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: s }) => ({
    root: {
      "--text-fz": et(o),
      "--text-lh": zb(o),
      "--text-gradient": t === "gradient" ? Au(r, e) : void 0,
      "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--text-color": s ? Po(s, e) : void 0,
    },
  }),
  Er = An((e, t) => {
    const n = U("Text", A_, e),
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
        variant: x,
        mod: y,
        size: v,
        ...g
      } = n,
      b = ue({
        name: ["Text", c],
        props: n,
        classes: A0,
        className: d,
        style: f,
        classNames: m,
        styles: p,
        unstyled: h,
        vars: u,
        varsResolver: F_,
      });
    return S.jsx(G, {
      ...b("root", { focusable: !0 }),
      ref: t,
      component: a ? "span" : "p",
      variant: x,
      mod: [
        {
          "data-truncate": L_(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": s,
          "data-inherit": i,
        },
        y,
      ],
      size: v,
      ...g,
    });
  });
Er.classes = A0;
Er.displayName = "@mantine/core/Text";
function F0(e) {
  return typeof e == "string"
    ? { value: e, label: e }
    : "value" in e && !("label" in e)
    ? { value: e.value, label: e.value, disabled: e.disabled }
    : typeof e == "number"
    ? { value: e.toString(), label: e.toString() }
    : "group" in e
    ? { group: e.group, items: e.items.map((t) => F0(t)) }
    : e;
}
function M0(e) {
  return e ? e.map((t) => F0(t)) : [];
}
function Nf(e) {
  return e.reduce(
    (t, n) => ("group" in n ? { ...t, ...Nf(n.items) } : ((t[n.value] = n), t)),
    {}
  );
}
var wt = {
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
const M_ = { error: null },
  I_ = (e, { size: t }) => ({
    chevron: { "--combobox-chevron-size": Ee(t, "combobox-chevron-size") },
  }),
  Of = X((e, t) => {
    const n = U("ComboboxChevron", M_, e),
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
      m = ue({
        name: "ComboboxChevron",
        classes: wt,
        props: n,
        style: s,
        className: i,
        classNames: l,
        styles: a,
        unstyled: c,
        vars: u,
        varsResolver: I_,
        rootSelector: "chevron",
      });
    return S.jsx(G, {
      component: "svg",
      ...f,
      ...m("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }, d],
      ref: t,
      children: S.jsx("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    });
  });
Of.classes = wt;
Of.displayName = "@mantine/core/ComboboxChevron";
const [z_, Vt] = Br("Combobox component was not found in tree"),
  I0 = w.forwardRef(
    ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, s) =>
      S.jsx(Ar, {
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
I0.displayName = "@mantine/core/ComboboxClearButton";
const B_ = {},
  jf = X((e, t) => {
    const {
        classNames: n,
        styles: r,
        className: o,
        style: s,
        hidden: i,
        ...l
      } = U("ComboboxDropdown", B_, e),
      a = Vt();
    return S.jsx(fr.Dropdown, {
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
jf.classes = wt;
jf.displayName = "@mantine/core/ComboboxDropdown";
const V_ = { refProp: "ref" },
  z0 = X((e, t) => {
    const { children: n, refProp: r } = U("ComboboxDropdownTarget", V_, e);
    if ((Vt(), !Mo(n)))
      throw new Error(
        "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    return S.jsx(fr.Target, { ref: t, refProp: r, children: n });
  });
z0.displayName = "@mantine/core/ComboboxDropdownTarget";
const H_ = {},
  $f = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = U("ComboboxEmpty", H_, e),
      a = Vt();
    return S.jsx(G, {
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
$f.classes = wt;
$f.displayName = "@mantine/core/ComboboxEmpty";
function Lf({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: s,
}) {
  const i = Vt(),
    [l, a] = w.useState(null),
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
const U_ = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  B0 = X((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = U("ComboboxEventsTarget", U_, e);
    if (!Mo(n))
      throw new Error(
        "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = Vt(),
      d = Lf({
        targetType: l,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: a,
      });
    return w.cloneElement(n, {
      ...d,
      ...c,
      [r]: Dt(t, u.store.targetRef, n == null ? void 0 : n.ref),
    });
  });
B0.displayName = "@mantine/core/ComboboxEventsTarget";
const W_ = {},
  Af = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = U("ComboboxFooter", W_, e),
      a = Vt();
    return S.jsx(G, {
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
Af.classes = wt;
Af.displayName = "@mantine/core/ComboboxFooter";
const Y_ = {},
  Ff = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        children: l,
        label: a,
        ...c
      } = U("ComboboxGroup", Y_, e),
      u = Vt();
    return S.jsxs(G, {
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
          S.jsx("div", {
            ...u.getStyles("groupLabel", { classNames: n, styles: s }),
            children: a,
          }),
        l,
      ],
    });
  });
Ff.classes = wt;
Ff.displayName = "@mantine/core/ComboboxGroup";
const K_ = {},
  Mf = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = U("ComboboxHeader", K_, e),
      a = Vt();
    return S.jsx(G, {
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
Mf.classes = wt;
Mf.displayName = "@mantine/core/ComboboxHeader";
function V0({ value: e, valuesDivider: t = ",", ...n }) {
  return S.jsx("input", {
    type: "hidden",
    value: Array.isArray(e) ? e.join(t) : e || "",
    ...n,
  });
}
V0.displayName = "@mantine/core/ComboboxHiddenInput";
const q_ = {},
  If = X((e, t) => {
    const n = U("ComboboxOption", q_, e),
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
        ...x
      } = n,
      y = Vt(),
      v = w.useId(),
      g = c || v;
    return S.jsx(G, {
      ...y.getStyles("option", {
        className: o,
        classNames: r,
        styles: i,
        style: s,
      }),
      ...x,
      ref: t,
      id: g,
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
          : ((C = y.onOptionSubmit) == null || C.call(y, n.value, n),
            a == null || a(b));
      },
      onMouseDown: (b) => {
        b.preventDefault(), d == null || d(b);
      },
      onMouseOver: (b) => {
        y.resetSelectionOnOptionHover && y.store.resetSelectedOption(),
          f == null || f(b);
      },
    });
  });
If.classes = wt;
If.displayName = "@mantine/core/ComboboxOption";
const G_ = {},
  zf = X((e, t) => {
    const n = U("ComboboxOptions", G_, e),
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
      d = Vt(),
      f = Hr(l);
    return (
      w.useEffect(() => {
        d.store.setListId(f);
      }, [f]),
      S.jsx(G, {
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
zf.classes = wt;
zf.displayName = "@mantine/core/ComboboxOptions";
const X_ = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
  Bf = X((e, t) => {
    const n = U("ComboboxSearch", X_, e),
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
      f = Vt(),
      m = f.getStyles("search"),
      p = Lf({
        targetType: "input",
        withAriaAttributes: l,
        withKeyboardNavigation: c,
        withExpandedAttribute: !1,
        onKeyDown: a,
        autoComplete: "off",
      });
    return S.jsx(nt, {
      ref: Dt(t, f.store.searchRef),
      classNames: [{ input: m.className }, r],
      styles: [{ input: m.style }, o],
      size: u || f.size,
      ...p,
      ...d,
      __staticSelector: "Combobox",
    });
  });
Bf.classes = wt;
Bf.displayName = "@mantine/core/ComboboxSearch";
const Q_ = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  H0 = X((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = U("ComboboxTarget", Q_, e);
    if (!Mo(n))
      throw new Error(
        "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = Vt(),
      d = Lf({
        targetType: l,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: a,
      }),
      f = w.cloneElement(n, { ...d, ...c });
    return S.jsx(fr.Target, { ref: Dt(t, u.store.targetRef), children: f });
  });
H0.displayName = "@mantine/core/ComboboxTarget";
function J_(e, t, n) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = t.length - 1; r > -1; r -= 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function Z_(e, t, n) {
  for (let r = e + 1; r < t.length; r += 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = 0; r < t.length; r += 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function eR(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled")) return t;
  return -1;
}
function Vf({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: s = !0,
  scrollBehavior: i = "instant",
} = {}) {
  const [l, a] = jn({ value: t, defaultValue: e, finalValue: !1, onChange: n }),
    c = w.useRef(null),
    u = w.useRef(-1),
    d = w.useRef(null),
    f = w.useRef(null),
    m = w.useRef(-1),
    p = w.useRef(-1),
    h = w.useRef(-1),
    x = w.useCallback(
      (P = "unknown") => {
        l || (a(!0), o == null || o(P));
      },
      [a, o, l]
    ),
    y = w.useCallback(
      (P = "unknown") => {
        l && (a(!1), r == null || r(P));
      },
      [a, r, l]
    ),
    v = w.useCallback(
      (P = "unknown") => {
        l ? y(P) : x(P);
      },
      [y, x, l]
    ),
    g = w.useCallback(() => {
      const P = document.querySelector(
        `#${c.current} [data-combobox-selected]`
      );
      P == null || P.removeAttribute("data-combobox-selected"),
        P == null || P.removeAttribute("aria-selected");
    }, []),
    b = w.useCallback(
      (P) => {
        const T = document.getElementById(c.current),
          R = T == null ? void 0 : T.querySelectorAll("[data-combobox-option]");
        if (!R) return null;
        const k = P >= R.length ? 0 : P < 0 ? R.length - 1 : P;
        return (
          (u.current = k),
          R != null && R[k] && !R[k].hasAttribute("data-combobox-disabled")
            ? (g(),
              R[k].setAttribute("data-combobox-selected", "true"),
              R[k].setAttribute("aria-selected", "true"),
              R[k].scrollIntoView({ block: "nearest", behavior: i }),
              R[k].id)
            : null
        );
      },
      [i, g]
    ),
    C = w.useCallback(() => {
      const P = document.querySelector(`#${c.current} [data-combobox-active]`);
      if (P) {
        const T = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          R = Array.from(T).findIndex((k) => k === P);
        return b(R);
      }
      return b(0);
    }, [b]),
    E = w.useCallback(
      () =>
        b(
          Z_(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [b, s]
    ),
    _ = w.useCallback(
      () =>
        b(
          J_(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [b, s]
    ),
    D = w.useCallback(
      () =>
        b(
          eR(document.querySelectorAll(`#${c.current} [data-combobox-option]`))
        ),
      [b]
    ),
    L = w.useCallback((P = "selected", T) => {
      h.current = window.setTimeout(() => {
        var $;
        const R = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          k = Array.from(R).findIndex((O) =>
            O.hasAttribute(`data-combobox-${P}`)
          );
        (u.current = k),
          T != null &&
            T.scrollIntoView &&
            (($ = R[k]) == null ||
              $.scrollIntoView({ block: "nearest", behavior: i }));
      }, 0);
    }, []),
    N = w.useCallback(() => {
      (u.current = -1), g();
    }, [g]),
    M = w.useCallback(() => {
      const P = document.querySelectorAll(
          `#${c.current} [data-combobox-option]`
        ),
        T = P == null ? void 0 : P[u.current];
      T == null || T.click();
    }, []),
    B = w.useCallback((P) => {
      c.current = P;
    }, []),
    V = w.useCallback(() => {
      m.current = window.setTimeout(() => d.current.focus(), 0);
    }, []),
    A = w.useCallback(() => {
      p.current = window.setTimeout(() => f.current.focus(), 0);
    }, []),
    j = w.useCallback(() => u.current, []);
  return (
    w.useEffect(
      () => () => {
        window.clearTimeout(m.current),
          window.clearTimeout(p.current),
          window.clearTimeout(h.current);
      },
      []
    ),
    {
      dropdownOpened: l,
      openDropdown: x,
      closeDropdown: y,
      toggleDropdown: v,
      selectedOptionIndex: u.current,
      getSelectedOptionIndex: j,
      selectOption: b,
      selectFirstOption: D,
      selectActiveOption: C,
      selectNextOption: E,
      selectPreviousOption: _,
      resetSelectedOption: N,
      updateSelectedOptionIndex: L,
      listId: c.current,
      setListId: B,
      clickSelectedOption: M,
      searchRef: d,
      focusSearchInput: V,
      targetRef: f,
      focusTarget: A,
    }
  );
}
const tR = {
    keepMounted: !0,
    withinPortal: !0,
    resetSelectionOnOptionHover: !1,
    width: "target",
    transitionProps: { transition: "fade", duration: 0 },
  },
  nR = (e, { size: t, dropdownPadding: n }) => ({
    options: {
      "--combobox-option-fz": et(t),
      "--combobox-option-padding": Ee(t, "combobox-option-padding"),
    },
    dropdown: {
      "--combobox-padding": n === void 0 ? void 0 : z(n),
      "--combobox-option-fz": et(t),
      "--combobox-option-padding": Ee(t, "combobox-option-padding"),
    },
  });
function fe(e) {
  const t = U("Combobox", tR, e),
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
    x = Vf(),
    y = i || x,
    v = ue({
      name: m || "Combobox",
      classes: wt,
      props: t,
      classNames: n,
      styles: r,
      unstyled: o,
      vars: l,
      varsResolver: nR,
    }),
    g = () => {
      c == null || c(), y.closeDropdown();
    };
  return S.jsx(z_, {
    value: {
      getStyles: v,
      store: y,
      onOptionSubmit: a,
      size: u,
      resetSelectionOnOptionHover: f,
      readOnly: p,
    },
    children: S.jsx(fr, {
      opened: y.dropdownOpened,
      ...h,
      onClose: g,
      withRoles: !1,
      unstyled: o,
      children: s,
    }),
  });
}
const rR = (e) => e;
fe.extend = rR;
fe.classes = wt;
fe.displayName = "@mantine/core/Combobox";
fe.Target = H0;
fe.Dropdown = jf;
fe.Options = zf;
fe.Option = If;
fe.Search = Bf;
fe.Empty = $f;
fe.Chevron = Of;
fe.Footer = Af;
fe.Header = Mf;
fe.EventsTarget = B0;
fe.DropdownTarget = z0;
fe.Group = Ff;
fe.ClearButton = I0;
fe.HiddenInput = V0;
var U0 = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc",
};
const oR = U0,
  W0 = w.forwardRef(
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
        variant: x,
        style: y,
        vars: v,
        mod: g,
        ...b
      },
      C
    ) => {
      const E = ue({
        name: e,
        props: t,
        className: n,
        style: y,
        classes: U0,
        classNames: r,
        styles: o,
        unstyled: s,
      });
      return S.jsx(G, {
        ...E("root"),
        ref: C,
        __vars: { "--label-fz": et(f), "--label-lh": Ee(f, "label-lh") },
        mod: [{ "label-position": m }, g],
        variant: x,
        size: f,
        ...b,
        children: S.jsxs(G, {
          component: p,
          htmlFor: p === "label" ? c : void 0,
          ...E("body"),
          children: [
            i,
            S.jsxs("div", {
              ...E("labelWrapper"),
              "data-disabled": u || void 0,
              children: [
                l &&
                  S.jsx(G, {
                    component: h,
                    htmlFor: h === "label" ? c : void 0,
                    ...E("label"),
                    "data-disabled": u || void 0,
                    children: l,
                  }),
                a &&
                  S.jsx(nt.Description, {
                    size: f,
                    __inheritStyles: !1,
                    ...E("description"),
                    children: a,
                  }),
                d &&
                  typeof d != "boolean" &&
                  S.jsx(nt.Error, {
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
W0.displayName = "@mantine/core/InlineInput";
const Y0 = w.createContext(null),
  sR = Y0.Provider,
  iR = () => w.useContext(Y0);
function lR({ children: e, role: t }) {
  const n = Uo();
  return n
    ? S.jsx("div", {
        role: t,
        "aria-labelledby": n.labelId,
        "aria-describedby": n.describedBy,
        children: e,
      })
    : S.jsx(S.Fragment, { children: e });
}
const aR = {},
  Hf = X((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onChange: o,
        size: s,
        wrapperProps: i,
        children: l,
        readOnly: a,
        ...c
      } = U("CheckboxGroup", aR, e),
      [u, d] = jn({ value: n, defaultValue: r, finalValue: [], onChange: o }),
      f = (m) => {
        const p = m.currentTarget.value;
        !a && d(u.includes(p) ? u.filter((h) => h !== p) : [...u, p]);
      };
    return S.jsx(sR, {
      value: { value: u, onChange: f, size: s },
      children: S.jsx(nt.Wrapper, {
        size: s,
        ref: t,
        ...i,
        ...c,
        labelElement: "div",
        __staticSelector: "CheckboxGroup",
        children: S.jsx(lR, { role: "group", children: l }),
      }),
    });
  });
Hf.classes = nt.Wrapper.classes;
Hf.displayName = "@mantine/core/CheckboxGroup";
function K0({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: z(e), height: z(e), ...t } : t;
  return S.jsx("svg", {
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    "aria-hidden": !0,
    ...n,
    children: S.jsx("path", {
      d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
function cR({ indeterminate: e, ...t }) {
  return e
    ? S.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": !0,
        ...t,
        children: S.jsx("rect", {
          width: "32",
          height: "6",
          fill: "currentColor",
          rx: "3",
        }),
      })
    : S.jsx(K0, { ...t });
}
var q0 = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542",
};
const uR = { labelPosition: "right", icon: cR },
  dR = (
    e,
    { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }
  ) => {
    const l = Io({ color: n || e.primaryColor, theme: e }),
      a =
        l.isThemeColor && l.shade === void 0
          ? `var(--mantine-color-${l.color}-outline)`
          : l.color;
    return {
      root: {
        "--checkbox-size": Ee(r, "checkbox-size"),
        "--checkbox-radius": t === void 0 ? void 0 : Sn(t),
        "--checkbox-color": s === "outline" ? a : Po(n, e),
        "--checkbox-icon-color": o
          ? Po(o, e)
          : KC(i, e)
          ? Bv({ color: n, theme: e })
          : void 0,
      },
    };
  },
  Us = X((e, t) => {
    const n = U("Checkbox", uR, e),
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
        checked: x,
        labelPosition: y,
        description: v,
        error: g,
        disabled: b,
        variant: C,
        indeterminate: E,
        icon: _,
        rootRef: D,
        iconColor: L,
        onChange: N,
        autoContrast: M,
        mod: B,
        ...V
      } = n,
      A = iR(),
      j = f || (A == null ? void 0 : A.size),
      P = _,
      T = ue({
        name: "Checkbox",
        props: n,
        classes: q0,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: dR,
      }),
      { styleProps: R, rest: k } = ti(V),
      $ = Hr(d),
      O = A
        ? {
            checked: A.value.includes(k.value),
            onChange: (I) => {
              A.onChange(I), N == null || N(I);
            },
          }
        : {};
    return S.jsx(W0, {
      ...T("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: $,
      size: j,
      labelPosition: y,
      label: u,
      description: v,
      error: g,
      disabled: b,
      classNames: r,
      styles: i,
      unstyled: l,
      "data-checked": O.checked || x || void 0,
      variant: C,
      ref: D,
      mod: B,
      ...R,
      ...p,
      children: S.jsxs(G, {
        ...T("inner"),
        mod: { "data-label-position": y },
        children: [
          S.jsx(G, {
            component: "input",
            id: $,
            ref: t,
            checked: x,
            disabled: b,
            mod: { error: !!g, indeterminate: E },
            ...T("input", { focusable: !0, variant: C }),
            onChange: N,
            ...k,
            ...O,
            type: "checkbox",
          }),
          S.jsx(P, { indeterminate: E, ...T("icon") }),
        ],
      }),
    });
  });
Us.classes = { ...q0, ...oR };
Us.displayName = "@mantine/core/Checkbox";
Us.Group = Hf;
function $o(e) {
  return "group" in e;
}
function G0({ options: e, search: t, limit: n }) {
  const r = t.trim().toLowerCase(),
    o = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    if (o.length === n) return o;
    $o(i) &&
      o.push({
        group: i.group,
        items: G0({ options: i.items, search: t, limit: n - o.length }),
      }),
      $o(i) || (i.label.toLowerCase().includes(r) && o.push(i));
  }
  return o;
}
function fR(e) {
  if (e.length === 0) return !0;
  for (const t of e) if (!("group" in t) || t.items.length > 0) return !1;
  return !0;
}
function X0(e, t = new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if ($o(n)) X0(n.items, t);
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
function pR(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function Q0({
  data: e,
  withCheckIcon: t,
  value: n,
  checkIconPosition: r,
  unstyled: o,
  renderOption: s,
}) {
  if (!$o(e)) {
    const l = pR(n, e.value),
      a = t && l && S.jsx(K0, { className: wt.optionsDropdownCheckIcon }),
      c = S.jsxs(S.Fragment, {
        children: [
          r === "left" && a,
          S.jsx("span", { children: e.label }),
          r === "right" && a,
        ],
      });
    return S.jsx(fe.Option, {
      value: e.value,
      disabled: e.disabled,
      className: at({ [wt.optionsDropdownOption]: !o }),
      "data-reverse": r === "right" || void 0,
      "data-checked": l || void 0,
      "aria-selected": l,
      active: l,
      children: typeof s == "function" ? s({ option: e, checked: l }) : c,
    });
  }
  const i = e.items.map((l) =>
    S.jsx(
      Q0,
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
  return S.jsx(fe.Group, { label: e.group, children: i });
}
function J0({
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
  scrollAreaProps: x,
  "aria-label": y,
}) {
  X0(e);
  const g =
      typeof o == "string"
        ? (r || G0)({ options: e, search: a ? o : "", limit: s ?? 1 / 0 })
        : e,
    b = fR(g),
    C = g.map((E) =>
      S.jsx(
        Q0,
        {
          data: E,
          withCheckIcon: c,
          value: u,
          checkIconPosition: d,
          unstyled: m,
          renderOption: h,
        },
        $o(E) ? E.group : E.value
      )
    );
  return S.jsx(fe.Dropdown, {
    hidden: t || (n && b),
    children: S.jsxs(fe.Options, {
      labelledBy: p,
      "aria-label": y,
      children: [
        l
          ? S.jsx(ni.Autosize, {
              mah: i ?? 220,
              type: "scroll",
              scrollbarSize: "var(--combobox-padding)",
              offsetScrollbars: "y",
              ...x,
              children: C,
            })
          : C,
        b && f && S.jsx(fe.Empty, { children: f }),
      ],
    }),
  });
}
var ga = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
};
const wh = { orientation: "horizontal" },
  mR = (e, { borderWidth: t }) => ({
    group: { "--button-border-width": z(t) },
  }),
  Uf = X((e, t) => {
    const n = U("ButtonGroup", wh, e),
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
      } = U("ButtonGroup", wh, e),
      p = ue({
        name: "ButtonGroup",
        props: n,
        classes: ga,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: mR,
        rootSelector: "group",
      });
    return S.jsx(G, {
      ...p("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": a }, f],
      role: "group",
      ...m,
    });
  });
Uf.classes = ga;
Uf.displayName = "@mantine/core/ButtonGroup";
const hR = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${z(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  gR = {},
  yR = (
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
        "--button-height": Ee(s, "button-height"),
        "--button-padding-x": Ee(s, "button-padding-x"),
        "--button-fz":
          s != null && s.includes("compact")
            ? et(s.replace("compact-", ""))
            : et(s),
        "--button-radius": t === void 0 ? void 0 : Sn(t),
        "--button-bg": n || o ? a.background : void 0,
        "--button-hover": n || o ? a.hover : void 0,
        "--button-color": a.color,
        "--button-bd": n || o ? a.border : void 0,
        "--button-hover-color": n || o ? a.hoverColor : void 0,
      },
    };
  },
  pn = An((e, t) => {
    const n = U("Button", gR, e),
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
        gradient: x,
        classNames: y,
        styles: v,
        unstyled: g,
        "data-disabled": b,
        autoContrast: C,
        mod: E,
        ..._
      } = n,
      D = ue({
        name: "Button",
        props: n,
        classes: ga,
        className: s,
        style: r,
        classNames: y,
        styles: v,
        unstyled: g,
        vars: o,
        varsResolver: yR,
      }),
      L = !!c,
      N = !!u;
    return S.jsxs(Dn, {
      ref: t,
      ...D("root", { active: !l && !p && !b }),
      unstyled: g,
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
      ..._,
      children: [
        S.jsx(Ho, {
          mounted: !!p,
          transition: hR,
          duration: 150,
          children: (M) =>
            S.jsx(G, {
              component: "span",
              ...D("loader", { style: M }),
              "aria-hidden": !0,
              children: S.jsx(oi, {
                color: "var(--button-color)",
                size: "calc(var(--button-height) / 1.8)",
                ...h,
              }),
            }),
        }),
        S.jsxs("span", {
          ...D("inner"),
          children: [
            c &&
              S.jsx(G, {
                component: "span",
                ...D("section"),
                mod: { position: "left" },
                children: c,
              }),
            S.jsx(G, {
              component: "span",
              mod: { loading: p },
              ...D("label"),
              children: a,
            }),
            u &&
              S.jsx(G, {
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
pn.classes = ga;
pn.displayName = "@mantine/core/Button";
pn.Group = Uf;
var Z0 = { root: "m_4451eb3a" };
const vR = {},
  Wf = An((e, t) => {
    const n = U("Center", vR, e),
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
      f = ue({
        name: "Center",
        props: n,
        classes: Z0,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
      });
    return S.jsx(G, { ref: t, mod: [{ inline: c }, u], ...f("root"), ...d });
  });
Wf.classes = Z0;
Wf.displayName = "@mantine/core/Center";
function Hu() {
  return (
    (Hu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hu.apply(this, arguments)
  );
}
function wR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var SR = w.useLayoutEffect,
  xR = function (t) {
    var n = w.useRef(t);
    return (
      SR(function () {
        n.current = t;
      }),
      n
    );
  },
  Sh = function (t, n) {
    if (typeof t == "function") {
      t(n);
      return;
    }
    t.current = n;
  },
  bR = function (t, n) {
    var r = w.useRef();
    return w.useCallback(
      function (o) {
        (t.current = o),
          r.current && Sh(r.current, null),
          (r.current = n),
          n && Sh(n, o);
      },
      [n]
    );
  },
  xh = {
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
  CR = function (t) {
    Object.keys(xh).forEach(function (n) {
      t.style.setProperty(n, xh[n], "important");
    });
  },
  bh = CR,
  ot = null,
  Ch = function (t, n) {
    var r = t.scrollHeight;
    return n.sizingStyle.boxSizing === "border-box"
      ? r + n.borderSize
      : r - n.paddingSize;
  };
function ER(e, t, n, r) {
  n === void 0 && (n = 1),
    r === void 0 && (r = 1 / 0),
    ot ||
      ((ot = document.createElement("textarea")),
      ot.setAttribute("tabindex", "-1"),
      ot.setAttribute("aria-hidden", "true"),
      bh(ot)),
    ot.parentNode === null && document.body.appendChild(ot);
  var o = e.paddingSize,
    s = e.borderSize,
    i = e.sizingStyle,
    l = i.boxSizing;
  Object.keys(i).forEach(function (f) {
    var m = f;
    ot.style[m] = i[m];
  }),
    bh(ot),
    (ot.value = t);
  var a = Ch(ot, e);
  (ot.value = t), (a = Ch(ot, e)), (ot.value = "x");
  var c = ot.scrollHeight - o,
    u = c * n;
  l === "border-box" && (u = u + o + s), (a = Math.max(u, a));
  var d = c * r;
  return l === "border-box" && (d = d + o + s), (a = Math.min(d, a)), [a, c];
}
var Eh = function () {},
  kR = function (t, n) {
    return t.reduce(function (r, o) {
      return (r[o] = n[o]), r;
    }, {});
  },
  _R = [
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
  RR = !!document.documentElement.currentStyle,
  DR = function (t) {
    var n = window.getComputedStyle(t);
    if (n === null) return null;
    var r = kR(_R, n),
      o = r.boxSizing;
    if (o === "") return null;
    RR &&
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
  PR = DR;
function ew(e, t, n) {
  var r = xR(n);
  w.useLayoutEffect(function () {
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
var TR = function (t) {
    ew(window, "resize", t);
  },
  NR = function (t) {
    ew(document.fonts, "loadingdone", t);
  },
  OR = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  jR = function (t, n) {
    var r = t.cacheMeasurements,
      o = t.maxRows,
      s = t.minRows,
      i = t.onChange,
      l = i === void 0 ? Eh : i,
      a = t.onHeightChange,
      c = a === void 0 ? Eh : a,
      u = wR(t, OR),
      d = u.value !== void 0,
      f = w.useRef(null),
      m = bR(f, n),
      p = w.useRef(0),
      h = w.useRef(),
      x = function () {
        var g = f.current,
          b = r && h.current ? h.current : PR(g);
        if (b) {
          h.current = b;
          var C = ER(b, g.value || g.placeholder || "x", s, o),
            E = C[0],
            _ = C[1];
          p.current !== E &&
            ((p.current = E),
            g.style.setProperty("height", E + "px", "important"),
            c(E, { rowHeight: _ }));
        }
      },
      y = function (g) {
        d || x(), l(g);
      };
    return (
      w.useLayoutEffect(x),
      TR(x),
      NR(x),
      w.createElement("textarea", Hu({}, u, { onChange: y, ref: m }))
    );
  },
  $R = w.forwardRef(jR);
const LR = {},
  Yf = X((e, t) => {
    const {
        autosize: n,
        maxRows: r,
        minRows: o,
        __staticSelector: s,
        resize: i,
        ...l
      } = U("Textarea", LR, e),
      a = n && rC() !== "test",
      c = a ? { maxRows: r, minRows: o } : {};
    return S.jsx(bn, {
      component: a ? $R : "textarea",
      ref: t,
      ...l,
      __staticSelector: s || "Textarea",
      multiline: !0,
      "data-no-overflow": (n && r === void 0) || void 0,
      __vars: { "--input-resize": i },
      ...c,
    });
  });
Yf.classes = bn.classes;
Yf.displayName = "@mantine/core/Textarea";
var tw = { root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17" };
const kh = {
    transitionProps: { transition: "fade", duration: 0 },
    overlayProps: { backgroundOpacity: 0.75 },
    zIndex: Vr("overlay"),
  },
  AR = (e, { zIndex: t }) => ({
    root: { "--lo-z-index": t == null ? void 0 : t.toString() },
  }),
  Kf = X((e, t) => {
    const n = U("LoadingOverlay", kh, e),
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
      h = xn(),
      x = ue({
        name: "LoadingOverlay",
        classes: tw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: AR,
      }),
      y = { ...kh.overlayProps, ...d };
    return S.jsx(Ho, {
      transition: "fade",
      ...c,
      mounted: !!f,
      children: (v) =>
        S.jsxs(G, {
          ...x("root", { style: v }),
          ref: t,
          ...p,
          children: [
            S.jsx(oi, { ...x("loader"), unstyled: l, ...u }),
            S.jsx(Hs, {
              ...y,
              ...x("overlay"),
              darkHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || h.white,
            }),
            S.jsx(Hs, {
              ...y,
              ...x("overlay"),
              lightHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || h.colors.dark[5],
            }),
          ],
        }),
    });
  });
Kf.classes = tw;
Kf.displayName = "@mantine/core/LoadingOverlay";
const [FR, Wo] = Br("Modal component was not found in tree");
var In = {
  root: "m_9df02822",
  content: "m_54c44539",
  inner: "m_1f958f16",
  header: "m_d0e2b9cd",
};
const MR = {},
  ya = X((e, t) => {
    const n = U("ModalBody", MR, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = Wo();
    return S.jsx(N0, {
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
ya.classes = In;
ya.displayName = "@mantine/core/ModalBody";
const IR = {},
  va = X((e, t) => {
    const n = U("ModalCloseButton", IR, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = Wo();
    return S.jsx(O0, {
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
va.classes = In;
va.displayName = "@mantine/core/ModalCloseButton";
const zR = {},
  wa = X((e, t) => {
    const n = U("ModalContent", zR, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        children: a,
        ...c
      } = n,
      u = Wo(),
      d = u.scrollAreaComponent || b_;
    return S.jsx(v_, {
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
      children: S.jsx(d, {
        style: {
          maxHeight: u.fullScreen
            ? "100dvh"
            : `calc(100dvh - (${z(u.yOffset)} * 2))`,
        },
        children: a,
      }),
    });
  });
wa.classes = In;
wa.displayName = "@mantine/core/ModalContent";
const BR = {},
  Sa = X((e, t) => {
    const n = U("ModalHeader", BR, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = Wo();
    return S.jsx(j0, {
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
Sa.classes = In;
Sa.displayName = "@mantine/core/ModalHeader";
const VR = {},
  xa = X((e, t) => {
    const n = U("ModalOverlay", VR, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = Wo();
    return S.jsx($0, {
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
xa.classes = In;
xa.displayName = "@mantine/core/ModalOverlay";
const HR = {
    __staticSelector: "Modal",
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Vr("modal"),
    transitionProps: { duration: 200, transition: "pop" },
    yOffset: "5dvh",
  },
  UR = (e, { radius: t, size: n, yOffset: r, xOffset: o }) => ({
    root: {
      "--modal-radius": t === void 0 ? void 0 : Sn(t),
      "--modal-size": Ee(n, "modal-size"),
      "--modal-y-offset": z(r),
      "--modal-x-offset": z(o),
    },
  }),
  ba = X((e, t) => {
    const n = U("ModalRoot", HR, e),
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
        ...x
      } = n,
      y = ue({
        name: h,
        classes: In,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: UR,
      });
    return S.jsx(FR, {
      value: {
        yOffset: c,
        scrollAreaComponent: u,
        getStyles: y,
        fullScreen: f,
      },
      children: S.jsx(g_, {
        ref: t,
        ...y("root"),
        "data-full-screen": f || void 0,
        "data-centered": m || void 0,
        unstyled: l,
        ...x,
      }),
    });
  });
ba.classes = In;
ba.displayName = "@mantine/core/ModalRoot";
const WR = {},
  Ca = X((e, t) => {
    const n = U("ModalTitle", WR, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = Wo();
    return S.jsx(L0, {
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
Ca.classes = In;
Ca.displayName = "@mantine/core/ModalTitle";
const YR = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Vr("modal"),
    transitionProps: { duration: 200, transition: "fade-down" },
    withOverlay: !0,
    withCloseButton: !0,
  },
  rn = X((e, t) => {
    const {
        title: n,
        withOverlay: r,
        overlayProps: o,
        withCloseButton: s,
        closeButtonProps: i,
        children: l,
        radius: a,
        ...c
      } = U("Modal", YR, e),
      u = !!n || s;
    return S.jsxs(ba, {
      ref: t,
      radius: a,
      ...c,
      children: [
        r && S.jsx(xa, { ...o }),
        S.jsxs(wa, {
          radius: a,
          children: [
            u &&
              S.jsxs(Sa, {
                children: [
                  n && S.jsx(Ca, { children: n }),
                  s && S.jsx(va, { ...i }),
                ],
              }),
            S.jsx(ya, { children: l }),
          ],
        }),
      ],
    });
  });
rn.classes = In;
rn.displayName = "@mantine/core/Modal";
rn.Root = ba;
rn.Overlay = xa;
rn.Content = wa;
rn.Body = ya;
rn.Header = Sa;
rn.Title = Ca;
rn.CloseButton = va;
const [KR, qf] = of(),
  [qR, GR] = of();
var Ea = {
  root: "m_7cda1cd6",
  "root--default": "m_44da308b",
  "root--contrast": "m_e3a01f8",
  label: "m_1e0e6180",
  remove: "m_ae386778",
  group: "m_1dcfd90b",
};
const XR = {},
  QR = (e, { gap: t }, { size: n }) => ({
    group: { "--pg-gap": t !== void 0 ? Ee(t) : Ee(n, "pg-gap") },
  }),
  Gf = X((e, t) => {
    const n = U("PillGroup", XR, e),
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
      f = qf(),
      m = (f == null ? void 0 : f.size) || c || void 0,
      p = ue({
        name: "PillGroup",
        classes: Ea,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: QR,
        stylesCtx: { size: m },
        rootSelector: "group",
      });
    return S.jsx(qR, {
      value: { size: m, disabled: u },
      children: S.jsx(G, { ref: t, size: m, ...p("group"), ...d }),
    });
  });
Gf.classes = Ea;
Gf.displayName = "@mantine/core/PillGroup";
const JR = { variant: "default" },
  ZR = (e, { radius: t }, { size: n }) => ({
    root: {
      "--pill-fz": Ee(n, "pill-fz"),
      "--pill-height": Ee(n, "pill-height"),
      "--pill-radius": t === void 0 ? void 0 : Sn(t),
    },
  }),
  Ws = X((e, t) => {
    const n = U("Pill", JR, e),
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
        disabled: x,
        mod: y,
        ...v
      } = n,
      g = GR(),
      b = qf(),
      C = h || (g == null ? void 0 : g.size) || void 0,
      E =
        (b == null ? void 0 : b.variant) === "filled"
          ? "contrast"
          : c || "default",
      _ = ue({
        name: "Pill",
        classes: Ea,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: ZR,
        stylesCtx: { size: C },
      });
    return S.jsxs(G, {
      component: "span",
      ref: t,
      variant: E,
      size: C,
      ..._("root", { variant: E }),
      mod: [
        {
          "with-remove": d && !x,
          disabled: x || (g == null ? void 0 : g.disabled),
        },
        y,
      ],
      ...v,
      children: [
        S.jsx("span", { ..._("label"), children: u }),
        d &&
          S.jsx(Ar, {
            variant: "transparent",
            radius: p,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: l,
            ...m,
            ..._("remove", {
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
Ws.classes = Ea;
Ws.displayName = "@mantine/core/Pill";
Ws.Group = Gf;
var nw = { field: "m_45c4369d" };
const eD = { type: "visible" },
  Xf = X((e, t) => {
    const n = U("PillsInputField", eD, e),
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
      h = qf(),
      x = Uo(),
      y = ue({
        name: "PillsInputField",
        classes: nw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "field",
      }),
      v = u || (h == null ? void 0 : h.disabled);
    return S.jsx(G, {
      component: "input",
      ref: Dt(t, h == null ? void 0 : h.fieldRef),
      "data-type": c,
      disabled: v,
      mod: [{ disabled: v, pointer: f }, m],
      ...y("field"),
      ...p,
      id: (x == null ? void 0 : x.inputId) || d,
      "aria-invalid": h == null ? void 0 : h.hasError,
      "aria-describedby": x == null ? void 0 : x.describedBy,
      type: "text",
      onMouseDown: (g) => !f && g.stopPropagation(),
    });
  });
Xf.classes = nw;
Xf.displayName = "@mantine/core/PillsInputField";
const tD = {},
  Ol = X((e, t) => {
    const n = U("PillsInput", tD, e),
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
      f = w.useRef();
    return S.jsx(KR, {
      value: { fieldRef: f, size: i, disabled: l, hasError: !!c, variant: u },
      children: S.jsx(bn, {
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
Ol.displayName = "@mantine/core/PillsInput";
Ol.Field = Xf;
function nD({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce(
    (o, s) => (
      $o(s)
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
const rD = {
    maxValues: 1 / 0,
    withCheckIcon: !0,
    checkIconPosition: "left",
    hiddenInputValuesDivider: ",",
  },
  Qf = X((e, t) => {
    const n = U("MultiSelect", rD, e),
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
        dropdownOpened: x,
        defaultDropdownOpened: y,
        onDropdownOpen: v,
        onDropdownClose: g,
        selectFirstOptionOnChange: b,
        onOptionSubmit: C,
        comboboxProps: E,
        filter: _,
        limit: D,
        withScrollArea: L,
        maxDropdownHeight: N,
        searchValue: M,
        defaultSearchValue: B,
        onSearchChange: V,
        readOnly: A,
        disabled: j,
        onFocus: P,
        onBlur: T,
        onPaste: R,
        radius: k,
        rightSection: $,
        rightSectionWidth: O,
        rightSectionPointerEvents: I,
        rightSectionProps: K,
        leftSection: J,
        leftSectionWidth: ee,
        leftSectionPointerEvents: ne,
        leftSectionProps: te,
        inputContainer: me,
        inputWrapperOrder: oe,
        withAsterisk: le,
        labelProps: Z,
        descriptionProps: ge,
        errorProps: ce,
        wrapperProps: se,
        description: je,
        label: Ie,
        error: ye,
        maxValues: rt,
        searchable: Te,
        nothingFoundMessage: Le,
        withCheckIcon: W,
        checkIconPosition: re,
        hidePickedOptions: ie,
        withErrorStyles: xe,
        name: Ae,
        form: Pt,
        id: be,
        clearable: Fe,
        clearButtonProps: ln,
        hiddenInputProps: qe,
        placeholder: Tt,
        hiddenInputValuesDivider: gr,
        required: an,
        mod: Ht,
        renderOption: Wa,
        onRemove: Ut,
        onClear: Go,
        scrollAreaProps: Ya,
        ...ci
      } = n,
      Xo = Hr(be),
      ke = M0(h),
      Nt = Nf(ke),
      Ot = Vf({
        opened: x,
        defaultOpened: y,
        onDropdownOpen: v,
        onDropdownClose: () => {
          g == null || g(), Ot.resetSelectedOption();
        },
      }),
      {
        styleProps: w1,
        rest: { type: OO, autoComplete: S1, ...x1 },
      } = ti(ci),
      [Ge, Qo] = jn({ value: u, defaultValue: d, finalValue: [], onChange: f }),
      [ui, di] = jn({ value: M, defaultValue: B, finalValue: "", onChange: V }),
      Ka = ue({
        name: "MultiSelect",
        classes: {},
        props: n,
        classNames: r,
        styles: i,
        unstyled: l,
      }),
      { resolvedClassNames: xp, resolvedStyles: bp } = zo({
        props: n,
        styles: i,
        classNames: r,
      }),
      b1 = (_e) => {
        m == null || m(_e),
          _e.key === " " && !Te && (_e.preventDefault(), Ot.toggleDropdown()),
          _e.key === "Backspace" &&
            ui.length === 0 &&
            Ge.length > 0 &&
            (Ut == null || Ut(Ge[Ge.length - 1]),
            Qo(Ge.slice(0, Ge.length - 1)));
      },
      C1 = Ge.map((_e, Ga) => {
        var Ep, kp;
        return S.jsx(
          Ws,
          {
            withRemoveButton: !A && !((Ep = Nt[_e]) != null && Ep.disabled),
            onRemove: () => {
              Qo(Ge.filter((E1) => _e !== E1)), Ut == null || Ut(_e);
            },
            unstyled: l,
            disabled: j,
            ...Ka("pill"),
            children: ((kp = Nt[_e]) == null ? void 0 : kp.label) || _e,
          },
          `${_e}-${Ga}`
        );
      });
    w.useEffect(() => {
      b && Ot.selectFirstOption();
    }, [b, Ge]);
    const qa =
        Fe &&
        Ge.length > 0 &&
        !j &&
        !A &&
        S.jsx(fe.ClearButton, {
          size: c,
          ...ln,
          onClear: () => {
            Go == null || Go(), Qo([]), di("");
          },
        }),
      Cp = nD({ data: ke, value: Ge });
    return S.jsxs(S.Fragment, {
      children: [
        S.jsxs(fe, {
          store: Ot,
          classNames: xp,
          styles: bp,
          unstyled: l,
          size: c,
          readOnly: A,
          __staticSelector: "MultiSelect",
          onOptionSubmit: (_e) => {
            C == null || C(_e),
              di(""),
              Ot.updateSelectedOptionIndex("selected"),
              Ge.includes(Nt[_e].value)
                ? (Qo(Ge.filter((Ga) => Ga !== Nt[_e].value)),
                  Ut == null || Ut(Nt[_e].value))
                : Ge.length < rt && Qo([...Ge, Nt[_e].value]);
          },
          ...E,
          children: [
            S.jsx(fe.DropdownTarget, {
              children: S.jsx(Ol, {
                ...w1,
                __staticSelector: "MultiSelect",
                classNames: xp,
                styles: bp,
                unstyled: l,
                size: c,
                className: o,
                style: s,
                variant: p,
                disabled: j,
                radius: k,
                rightSection:
                  $ ||
                  qa ||
                  S.jsx(fe.Chevron, { size: c, error: ye, unstyled: l }),
                rightSectionPointerEvents: I || (qa ? "all" : "none"),
                rightSectionWidth: O,
                rightSectionProps: K,
                leftSection: J,
                leftSectionWidth: ee,
                leftSectionPointerEvents: ne,
                leftSectionProps: te,
                inputContainer: me,
                inputWrapperOrder: oe,
                withAsterisk: le,
                labelProps: Z,
                descriptionProps: ge,
                errorProps: ce,
                wrapperProps: se,
                description: je,
                label: Ie,
                error: ye,
                multiline: !0,
                withErrorStyles: xe,
                __stylesApiProps: {
                  ...n,
                  rightSectionPointerEvents: I || (qa ? "all" : "none"),
                  multiline: !0,
                },
                pointer: !Te,
                onClick: () => (Te ? Ot.openDropdown() : Ot.toggleDropdown()),
                "data-expanded": Ot.dropdownOpened || void 0,
                id: Xo,
                required: an,
                mod: Ht,
                children: S.jsxs(Ws.Group, {
                  disabled: j,
                  unstyled: l,
                  ...Ka("pillsList"),
                  children: [
                    C1,
                    S.jsx(fe.EventsTarget, {
                      autoComplete: S1,
                      children: S.jsx(Ol.Field, {
                        ...x1,
                        ref: t,
                        id: Xo,
                        placeholder: Tt,
                        type: !Te && !Tt ? "hidden" : "visible",
                        ...Ka("inputField"),
                        unstyled: l,
                        onFocus: (_e) => {
                          P == null || P(_e), Te && Ot.openDropdown();
                        },
                        onBlur: (_e) => {
                          T == null || T(_e), Ot.closeDropdown(), di("");
                        },
                        onKeyDown: b1,
                        value: ui,
                        onChange: (_e) => {
                          di(_e.currentTarget.value),
                            Te && Ot.openDropdown(),
                            b && Ot.selectFirstOption();
                        },
                        disabled: j,
                        readOnly: A || !Te,
                        pointer: !Te,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            S.jsx(J0, {
              data: ie ? Cp : ke,
              hidden: A || j,
              filter: _,
              search: ui,
              limit: D,
              hiddenWhenEmpty:
                !Te || !Le || (ie && Cp.length === 0 && ui.trim().length === 0),
              withScrollArea: L,
              maxDropdownHeight: N,
              filterOptions: Te,
              value: Ge,
              checkIconPosition: re,
              withCheckIcon: W,
              nothingFoundMessage: Le,
              unstyled: l,
              labelId: Ie ? `${Xo}-label` : void 0,
              "aria-label": Ie ? void 0 : ci["aria-label"],
              renderOption: Wa,
              scrollAreaProps: Ya,
            }),
          ],
        }),
        S.jsx(fe.HiddenInput, {
          name: Ae,
          valuesDivider: gr,
          value: Ge,
          form: Pt,
          disabled: j,
          ...qe,
        }),
      ],
    });
  });
Qf.classes = { ...bn.classes, ...fe.classes };
Qf.displayName = "@mantine/core/MultiSelect";
const oD = {
    searchable: !1,
    withCheckIcon: !0,
    allowDeselect: !0,
    checkIconPosition: "left",
  },
  Jf = X((e, t) => {
    const n = U("Select", oD, e),
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
        value: x,
        defaultValue: y,
        selectFirstOptionOnChange: v,
        onOptionSubmit: g,
        comboboxProps: b,
        readOnly: C,
        disabled: E,
        filter: _,
        limit: D,
        withScrollArea: L,
        maxDropdownHeight: N,
        size: M,
        searchable: B,
        rightSection: V,
        checkIconPosition: A,
        withCheckIcon: j,
        nothingFoundMessage: P,
        name: T,
        form: R,
        searchValue: k,
        defaultSearchValue: $,
        onSearchChange: O,
        allowDeselect: I,
        error: K,
        rightSectionPointerEvents: J,
        id: ee,
        clearable: ne,
        clearButtonProps: te,
        hiddenInputProps: me,
        renderOption: oe,
        onClear: le,
        autoComplete: Z,
        scrollAreaProps: ge,
        ...ce
      } = n,
      se = w.useMemo(() => M0(h), [h]),
      je = w.useMemo(() => Nf(se), [se]),
      Ie = Hr(ee),
      [ye, rt, Te] = jn({
        value: x,
        defaultValue: y,
        finalValue: null,
        onChange: p,
      }),
      Le = typeof ye == "string" ? je[ye] : void 0,
      [W, re] = jn({
        value: k,
        defaultValue: $,
        finalValue: Le ? Le.label : "",
        onChange: O,
      }),
      ie = Vf({
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
      { resolvedClassNames: xe, resolvedStyles: Ae } = zo({
        props: n,
        styles: o,
        classNames: r,
      });
    w.useEffect(() => {
      v && ie.selectFirstOption();
    }, [v, ye]),
      w.useEffect(() => {
        x === null && re(""), typeof x == "string" && Le && re(Le.label);
      }, [x, Le]);
    const Pt =
      ne &&
      !!ye &&
      !E &&
      !C &&
      S.jsx(fe.ClearButton, {
        size: M,
        ...te,
        onClear: () => {
          rt(null, null), re(""), le == null || le();
        },
      });
    return S.jsxs(S.Fragment, {
      children: [
        S.jsxs(fe, {
          store: ie,
          __staticSelector: "Select",
          classNames: xe,
          styles: Ae,
          unstyled: s,
          readOnly: C,
          onOptionSubmit: (be) => {
            g == null || g(be);
            const Fe = I && je[be].value === ye ? null : je[be],
              ln = Fe ? Fe.value : null;
            rt(ln, Fe),
              !Te &&
                re(
                  (typeof ln == "string" && (Fe == null ? void 0 : Fe.label)) ||
                    ""
                ),
              ie.closeDropdown();
          },
          size: M,
          ...b,
          children: [
            S.jsx(fe.Target, {
              targetType: B ? "input" : "button",
              autoComplete: Z,
              children: S.jsx(bn, {
                id: Ie,
                ref: t,
                rightSection:
                  V ||
                  Pt ||
                  S.jsx(fe.Chevron, { size: M, error: K, unstyled: s }),
                rightSectionPointerEvents: J || (Pt ? "all" : "none"),
                ...ce,
                size: M,
                __staticSelector: "Select",
                disabled: E,
                readOnly: C || !B,
                value: W,
                onChange: (be) => {
                  re(be.currentTarget.value),
                    ie.openDropdown(),
                    v && ie.selectFirstOption();
                },
                onFocus: (be) => {
                  B && ie.openDropdown(), d == null || d(be);
                },
                onBlur: (be) => {
                  var Fe;
                  B && ie.closeDropdown(),
                    re(
                      (ye != null &&
                        ((Fe = je[ye]) == null ? void 0 : Fe.label)) ||
                        ""
                    ),
                    f == null || f(be);
                },
                onClick: (be) => {
                  B ? ie.openDropdown() : ie.toggleDropdown(),
                    m == null || m(be);
                },
                classNames: xe,
                styles: Ae,
                unstyled: s,
                pointer: !B,
                error: K,
              }),
            }),
            S.jsx(J0, {
              data: se,
              hidden: C || E,
              filter: _,
              search: W,
              limit: D,
              hiddenWhenEmpty: !B || !P,
              withScrollArea: L,
              maxDropdownHeight: N,
              filterOptions: B && (Le == null ? void 0 : Le.label) !== W,
              value: ye,
              checkIconPosition: A,
              withCheckIcon: j,
              nothingFoundMessage: P,
              unstyled: s,
              labelId: ce.label ? `${Ie}-label` : void 0,
              "aria-label": ce.label ? void 0 : ce["aria-label"],
              renderOption: oe,
              scrollAreaProps: ge,
            }),
          ],
        }),
        S.jsx(fe.HiddenInput, {
          value: ye,
          name: T,
          form: R,
          disabled: E,
          ...me,
        }),
      ],
    });
  });
Jf.classes = { ...bn.classes, ...fe.classes };
Jf.displayName = "@mantine/core/Select";
const sD = {},
  ka = X((e, t) => {
    const n = U("TextInput", sD, e);
    return S.jsx(bn, {
      component: "input",
      ref: t,
      ...n,
      __staticSelector: "TextInput",
    });
  });
ka.classes = bn.classes;
ka.displayName = "@mantine/core/TextInput";
function iD(e) {
  return function ({ isLoading: n, ...r }) {
    return n ? S.jsx("div", { children: "Loading..." }) : S.jsx(e, { ...r });
  };
}
function lD(e) {
  return function ({ error: n, ...r }) {
    return n
      ? S.jsxs("div", { children: ["Error: ", n.message] })
      : S.jsx(e, { ...r });
  };
}
var rw = { exports: {} },
  aD = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  cD = aD,
  uD = cD;
function ow() {}
function sw() {}
sw.resetWarningCache = ow;
var dD = function () {
  function e(r, o, s, i, l, a) {
    if (a !== uD) {
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
    checkPropTypes: sw,
    resetWarningCache: ow,
  };
  return (n.PropTypes = n), n;
};
rw.exports = dD();
var fD = rw.exports;
const Y = Mr(fD);
function pD(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
    );
}
const mD = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function Ue(e, t) {
  mD(() => {
    if (e)
      return (
        window.addEventListener(e, t), () => window.removeEventListener(e, t)
      );
  }, [e]);
}
function hD(e, t) {
  e && pD(e),
    Ue(`mantine-form:${e}:set-field-value`, (n) =>
      t.setFieldValue(n.detail.path, n.detail.value)
    ),
    Ue(`mantine-form:${e}:set-values`, (n) => t.setValues(n.detail)),
    Ue(`mantine-form:${e}:set-initial-values`, (n) =>
      t.setInitialValues(n.detail)
    ),
    Ue(`mantine-form:${e}:set-errors`, (n) => t.setErrors(n.detail)),
    Ue(`mantine-form:${e}:set-field-error`, (n) =>
      t.setFieldError(n.detail.path, n.detail.error)
    ),
    Ue(`mantine-form:${e}:clear-field-error`, (n) =>
      t.clearFieldError(n.detail)
    ),
    Ue(`mantine-form:${e}:clear-errors`, t.clearErrors),
    Ue(`mantine-form:${e}:reset`, t.reset),
    Ue(`mantine-form:${e}:validate`, t.validate),
    Ue(`mantine-form:${e}:validate-field`, (n) => t.validateField(n.detail)),
    Ue(`mantine-form:${e}:reorder-list-item`, (n) =>
      t.reorderListItem(n.detail.path, n.detail.payload)
    ),
    Ue(`mantine-form:${e}:remove-list-item`, (n) =>
      t.removeListItem(n.detail.path, n.detail.index)
    ),
    Ue(`mantine-form:${e}:insert-list-item`, (n) =>
      t.insertListItem(n.detail.path, n.detail.item, n.detail.index)
    ),
    Ue(`mantine-form:${e}:set-dirty`, (n) => t.setDirty(n.detail)),
    Ue(`mantine-form:${e}:set-touched`, (n) => t.setTouched(n.detail)),
    Ue(`mantine-form:${e}:reset-dirty`, (n) => t.resetDirty(n.detail)),
    Ue(`mantine-form:${e}:reset-touched`, t.resetTouched);
}
function iw(e) {
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
function Uu(e) {
  return e === null || typeof e != "object"
    ? {}
    : Object.keys(e).reduce((t, n) => {
        const r = e[n];
        return r != null && r !== !1 && (t[n] = r), t;
      }, {});
}
function gD(e) {
  const [t, n] = w.useState(Uu(e)),
    r = w.useCallback((l) => {
      n((a) => Uu(typeof l == "function" ? l(a) : l));
    }, []),
    o = w.useCallback(() => n({}), []),
    s = w.useCallback(
      (l) => {
        t[l] !== void 0 &&
          r((a) => {
            const c = { ...a };
            return delete c[l], c;
          });
      },
      [t]
    ),
    i = w.useCallback(
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
function lw(e, t) {
  if (t === null || typeof t != "object") return {};
  const n = { ...t };
  return (
    Object.keys(t).forEach((r) => {
      r.includes(`${String(e)}.`) && delete n[r];
    }),
    n
  );
}
function _h(e, t) {
  const n = e.substring(t.length + 1).split(".")[0];
  return parseInt(n, 10);
}
function Rh(e, t, n, r) {
  if (t === void 0) return n;
  const o = `${String(e)}`;
  let s = n;
  r === -1 && (s = lw(`${o}.${t}`, s));
  const i = { ...s },
    l = new Set();
  return (
    Object.entries(s)
      .filter(([a]) => {
        if (!a.startsWith(`${o}.`)) return !1;
        const c = _h(a, o);
        return Number.isNaN(c) ? !1 : c >= t;
      })
      .forEach(([a, c]) => {
        const u = _h(a, o),
          d = a.replace(`${o}.${u}`, `${o}.${u + r}`);
        (i[d] = c), l.add(d), l.has(a) || delete i[a];
      }),
    i
  );
}
function yD(e, { from: t, to: n }, r) {
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
function Dh(e, t, n) {
  typeof n.value == "object" && (n.value = uo(n.value)),
    !n.enumerable ||
    n.get ||
    n.set ||
    !n.configurable ||
    !n.writable ||
    t === "__proto__"
      ? Object.defineProperty(e, t, n)
      : (e[t] = n.value);
}
function uo(e) {
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
          o.add(uo(i));
        }))
      : s === "[object Map]"
      ? ((o = new Map()),
        e.forEach(function (i, l) {
          o.set(uo(l), uo(i));
        }))
      : s === "[object Date]"
      ? (o = new Date(+e))
      : s === "[object RegExp]"
      ? (o = new RegExp(e.source, e.flags))
      : s === "[object DataView]"
      ? (o = new e.constructor(uo(e.buffer)))
      : s === "[object ArrayBuffer]"
      ? (o = e.slice(0))
      : s.slice(-6) === "Array]" && (o = new e.constructor(e)),
    o)
  ) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      Dh(o, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      (Object.hasOwnProperty.call(o, (n = r[t])) && o[n] === e[n]) ||
        Dh(o, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return o || e;
}
function aw(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function mt(e, t) {
  const n = aw(e);
  if (n.length === 0 || typeof t != "object" || t === null) return;
  let r = t[n[0]];
  for (let o = 1; o < n.length && r !== void 0; o += 1) r = r[n[o]];
  return r;
}
function _a(e, t, n) {
  const r = aw(e);
  if (r.length === 0) return n;
  const o = uo(n);
  if (r.length === 1) return (o[r[0]] = t), o;
  let s = o[r[0]];
  for (let i = 1; i < r.length - 1; i += 1) {
    if (s === void 0) return o;
    s = s[r[i]];
  }
  return (s[r[r.length - 1]] = t), o;
}
function vD(e, { from: t, to: n }, r) {
  const o = mt(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o],
    i = o[t];
  return s.splice(t, 1), s.splice(n, 0, i), _a(e, s, r);
}
function wD(e, t, n, r) {
  const o = mt(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o];
  return s.splice(typeof n == "number" ? n : s.length, 0, t), _a(e, s, r);
}
function SD(e, t, n) {
  const r = mt(e, n);
  return Array.isArray(r)
    ? _a(
        e,
        r.filter((o, s) => s !== t),
        n
      )
    : n;
}
function xD({ $values: e, $errors: t, $status: n }) {
  const r = w.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => yD(i, l, a)),
        e.setValues({ values: vD(i, l, e.refValues.current), updateState: !0 });
    }, []),
    o = w.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => Rh(i, l, a, -1)),
        e.setValues({ values: SD(i, l, e.refValues.current), updateState: !0 });
    }, []),
    s = w.useCallback((i, l, a) => {
      n.clearFieldDirty(i),
        t.setErrors((c) => Rh(i, a, c, 1)),
        e.setValues({
          values: wD(i, l, a, e.refValues.current),
          updateState: !0,
        });
    }, []);
  return { reorderListItem: r, removeListItem: o, insertListItem: s };
}
var bD = function e(t, n) {
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
const Lc = Mr(bD);
function Li(e, t) {
  const n = Object.keys(e);
  if (typeof t == "string") {
    const r = n.filter((o) => o.startsWith(`${t}.`));
    return e[t] || r.some((o) => e[o]) || !1;
  }
  return n.some((r) => e[r]);
}
function CD({ initialDirty: e, initialTouched: t, mode: n, $values: r }) {
  const [o, s] = w.useState(t),
    [i, l] = w.useState(e),
    a = w.useRef(t),
    c = w.useRef(e),
    u = w.useCallback((C) => {
      const E = typeof C == "function" ? C(a.current) : C;
      (a.current = E), n === "controlled" && s(E);
    }, []),
    d = w.useCallback((C) => {
      const E = typeof C == "function" ? C(c.current) : C;
      (c.current = E), n === "controlled" && l(E);
    }, []),
    f = w.useCallback(() => u({}), []),
    m = (C) => {
      const E = C ? { ...C, ...r.refValues.current } : r.refValues.current;
      r.setValuesSnapshot(E), d({});
    },
    p = w.useCallback((C, E) => {
      u((_) => (Li(_, C) === E ? _ : { ..._, [C]: E }));
    }, []),
    h = w.useCallback((C, E) => {
      d((_) => (Li(_, C) === E ? _ : { ..._, [C]: E }));
    }, []),
    x = w.useCallback((C) => Li(a.current, C), []),
    y = w.useCallback(
      (C) =>
        d((E) => {
          if (typeof C != "string") return E;
          const _ = lw(C, E);
          return delete _[C], Lc(_, E) ? E : _;
        }),
      []
    ),
    v = w.useCallback((C) => {
      if (C) {
        const _ = mt(C, c.current);
        if (typeof _ == "boolean") return _;
        const D = mt(C, r.refValues.current),
          L = mt(C, r.valuesSnapshot.current);
        return !Lc(D, L);
      }
      return Object.keys(c.current).length > 0
        ? Li(c.current)
        : !Lc(r.refValues.current, r.valuesSnapshot.current);
    }, []),
    g = w.useCallback(() => c.current, []),
    b = w.useCallback(() => a.current, []);
  return {
    touchedState: o,
    dirtyState: i,
    touchedRef: a,
    dirtyRef: c,
    setTouched: u,
    setDirty: d,
    resetDirty: m,
    resetTouched: f,
    isTouched: x,
    setFieldTouched: p,
    setFieldDirty: h,
    setTouchedState: s,
    setDirtyState: l,
    clearFieldDirty: y,
    isDirty: v,
    getDirty: g,
    getTouched: b,
  };
}
function ED({ initialValues: e, onValuesChange: t, mode: n }) {
  const r = w.useRef(!1),
    [o, s] = w.useState(e || {}),
    i = w.useRef(o),
    l = w.useRef(o),
    a = w.useCallback(
      ({
        values: p,
        subscribers: h,
        updateState: x = !0,
        mergeWithPreviousValues: y = !0,
      }) => {
        const v = i.current,
          g = p instanceof Function ? p(i.current) : p,
          b = y ? { ...v, ...g } : g;
        (i.current = b),
          x && s(b),
          t == null || t(b, v),
          h == null ||
            h
              .filter(Boolean)
              .forEach((C) => C({ updatedValues: b, previousValues: v }));
      },
      [t]
    ),
    c = w.useCallback((p) => {
      var y;
      const h = mt(p.path, i.current),
        x = p.value instanceof Function ? p.value(h) : p.value;
      if (h !== x) {
        const v = i.current,
          g = _a(p.path, x, i.current);
        a({ values: g, updateState: p.updateState }),
          (y = p.subscribers) == null ||
            y
              .filter(Boolean)
              .forEach((b) =>
                b({ path: p.path, updatedValues: g, previousValues: v })
              );
      }
    }, []),
    u = w.useCallback((p) => {
      l.current = p;
    }, []),
    d = w.useCallback((p, h) => {
      r.current ||
        ((r.current = !0),
        a({ values: p, updateState: n === "controlled" }),
        u(p),
        h());
    }, []),
    f = w.useCallback(() => {
      a({ values: l.current, updateState: !0, mergeWithPreviousValues: !1 });
    }, []),
    m = w.useCallback(() => i.current, []);
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
function kD({ $status: e }) {
  const t = w.useRef({}),
    n = w.useCallback((o, s) => {
      w.useEffect(
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
    r = w.useCallback(
      (o) =>
        t.current[o]
          ? t.current[o].map(
              (s) => (i) =>
                s({
                  previousValue: mt(o, i.previousValues),
                  value: mt(o, i.updatedValues),
                  touched: e.isTouched(o),
                  dirty: e.isDirty(o),
                })
            )
          : [],
      []
    );
  return { subscribers: t, watch: n, getFieldSubscribers: r };
}
function Ph(e) {
  const t = Uu(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function Wu(e, t, n = "", r = {}) {
  return typeof e != "object" || e === null
    ? r
    : Object.keys(e).reduce((o, s) => {
        const i = e[s],
          l = `${n === "" ? "" : `${n}.`}${s}`,
          a = mt(l, t);
        let c = !1;
        return (
          typeof i == "function" && (o[l] = i(a, t, l)),
          typeof i == "object" &&
            Array.isArray(a) &&
            ((c = !0), a.forEach((u, d) => Wu(i, t, `${l}.${d}`, o))),
          typeof i == "object" &&
            typeof a == "object" &&
            a !== null &&
            (c || Wu(i, t, l, o)),
          o
        );
      }, r);
}
function Yu(e, t) {
  return Ph(typeof e == "function" ? e(t) : Wu(e, t));
}
function Ai(e, t, n) {
  if (typeof e != "string") return { hasError: !1, error: null };
  const r = Yu(t, n),
    o = Object.keys(r.errors).find((s) =>
      e.split(".").every((i, l) => i === s.split(".")[l])
    );
  return { hasError: !!o, error: o ? r.errors[o] : null };
}
const _D = "__MANTINE_FORM_INDEX__";
function Ku(e, t) {
  return t
    ? typeof t == "boolean"
      ? t
      : Array.isArray(t)
      ? t.includes(e.replace(/[.][0-9]/g, `.${_D}`))
      : !1
    : !1;
}
function RD({
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
  const m = gD(r),
    p = ED({ initialValues: n, onValuesChange: c, mode: t }),
    h = CD({ initialDirty: o, initialTouched: s, $values: p, mode: t }),
    x = xD({ $values: p, $errors: m, $status: h }),
    y = kD({ $status: h }),
    [v, g] = w.useState(0),
    [b, C] = w.useState({}),
    E = w.useCallback(() => {
      p.resetValues(),
        m.clearErrors(),
        h.resetDirty(),
        h.resetTouched(),
        t === "uncontrolled" && g((k) => k + 1);
    }, []),
    _ = w.useCallback((k) => {
      p.initialize(k, () => t === "uncontrolled" && g(($) => $ + 1));
    }, []),
    D = w.useCallback(
      (k, $, O) => {
        const I = Ku(k, l);
        h.clearFieldDirty(k),
          h.setFieldTouched(k, !0),
          !I && i && m.clearFieldError(k),
          p.setFieldValue({
            path: k,
            value: $,
            updateState: t === "controlled",
            subscribers: [
              ...y.getFieldSubscribers(k),
              I
                ? (K) => {
                    const J = Ai(k, f, K.updatedValues);
                    J.hasError
                      ? m.setFieldError(k, J.error)
                      : m.clearFieldError(k);
                  }
                : null,
              (O == null ? void 0 : O.forceUpdate) !== !1 && t !== "controlled"
                ? () => C((K) => ({ ...K, [k]: (K[k] || 0) + 1 }))
                : null,
            ],
          });
      },
      [c, f]
    ),
    L = w.useCallback(
      (k) => {
        const $ = p.refValues.current;
        p.setValues({ values: k, updateState: t === "controlled" }),
          i && m.clearErrors(),
          t === "uncontrolled" && g((O) => O + 1),
          Object.keys(y.subscribers.current).forEach((O) => {
            const I = mt(O, p.refValues.current),
              K = mt(O, $);
            I !== K &&
              y
                .getFieldSubscribers(O)
                .forEach((J) =>
                  J({ previousValues: $, updatedValues: p.refValues.current })
                );
          });
      },
      [c, i]
    ),
    N = w.useCallback(() => {
      const k = Yu(f, p.refValues.current);
      return m.setErrors(k.errors), k;
    }, [f]),
    M = w.useCallback(
      (k) => {
        const $ = Ai(k, f, p.refValues.current);
        return (
          $.hasError ? m.setFieldError(k, $.error) : m.clearFieldError(k), $
        );
      },
      [f]
    ),
    B = (
      k,
      { type: $ = "input", withError: O = !0, withFocus: I = !0, ...K } = {}
    ) => {
      const ee = { onChange: iw((ne) => D(k, ne, { forceUpdate: !1 })) };
      return (
        O && (ee.error = m.errorsState[k]),
        $ === "checkbox"
          ? (ee[t === "controlled" ? "checked" : "defaultChecked"] = mt(
              k,
              p.refValues.current
            ))
          : (ee[t === "controlled" ? "value" : "defaultValue"] = mt(
              k,
              p.refValues.current
            )),
        I &&
          ((ee.onFocus = () => h.setFieldTouched(k, !0)),
          (ee.onBlur = () => {
            if (Ku(k, a)) {
              const ne = Ai(k, f, p.refValues.current);
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
                options: { type: $, withError: O, withFocus: I, ...K },
                form: R,
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
    j = w.useCallback((k) => {
      k.preventDefault(), E();
    }, []),
    P = w.useCallback(
      (k) =>
        k
          ? !Ai(k, f, p.refValues.current).hasError
          : !Yu(f, p.refValues.current).hasErrors,
      [f]
    ),
    T = (k) => `${v}-${k}-${b[k] || 0}`,
    R = {
      watch: y.watch,
      initialized: p.initialized.current,
      values: p.stateValues,
      getValues: p.getValues,
      setInitialValues: p.setValuesSnapshot,
      initialize: _,
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
      reorderListItem: x.reorderListItem,
      insertListItem: x.insertListItem,
      removeListItem: x.removeListItem,
      reset: E,
      validate: N,
      validateField: M,
      getInputProps: B,
      onSubmit: V,
      onReset: j,
      isValid: P,
      getTransformedValues: A,
      key: T,
    };
  return hD(e, R), R;
}
function DD({
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
  const [d, f] = w.useState(n),
    m = w.useRef(d),
    [p, h] = w.useState(0),
    [x, y] = w.useState(r || null),
    v = w.useRef(o || !1),
    [, g] = w.useState(v.current),
    [b, C] = w.useState(!1),
    E = w.useMemo(() => c || ((P) => P), [c]),
    _ = w.useCallback((P, { updateState: T = e === "controlled" } = {}) => {
      (v.current = P), T && g(P);
    }, []),
    D = w.useCallback(
      async (
        P,
        {
          updateKey: T = e === "uncontrolled",
          updateState: R = e === "controlled",
        } = {}
      ) => {
        m.current !== P &&
          ((m.current = P),
          s == null || s(P),
          t && x !== null && y(null),
          R && f(P),
          T && h((k) => k + 1),
          i && V());
      },
      [x, t]
    ),
    L = w.useCallback(() => {
      D(n), y(null), _(!1);
    }, [n]),
    N = w.useCallback(() => m.current, []),
    M = w.useCallback(() => v.current, []),
    B = w.useCallback(() => m.current !== n, [n]),
    V = w.useCallback(async () => {
      const P = a == null ? void 0 : a(m.current);
      if (P instanceof Promise) {
        C(!0);
        try {
          const T = await P;
          C(!1), y(T);
        } catch (T) {
          C(!1);
          const R = E(T);
          return y(R), R;
        }
      } else return y(P), P;
    }, []),
    A = ({ withError: P = !0, withFocus: T = !0 } = {}) => {
      const k = { onChange: iw(($) => D($, { updateKey: !1 })) };
      return (
        P && (k.error = x),
        u === "checkbox"
          ? (k[e === "controlled" ? "checked" : "defaultChecked"] = m.current)
          : (k[e === "controlled" ? "value" : "defaultValue"] = m.current),
        T &&
          ((k.onFocus = () => {
            _(!0);
          }),
          (k.onBlur = () => {
            Ku("", !!l) && V();
          })),
        k
      );
    },
    j = w.useCallback(() => _(!1), []);
  return {
    key: p,
    getValue: N,
    setValue: D,
    reset: L,
    getInputProps: A,
    isValidating: b,
    validate: V,
    error: x,
    setError: y,
    isTouched: M,
    isDirty: B,
    resetTouched: j,
  };
}
const Zf = (e) => {
  const {
    title: t,
    description: n,
    form: r,
    options: o,
    default_value: s,
    field_id: i,
  } = e;
  console.log(o);
  var l = s ? o.map((f) => f.option).filter((f) => f == s) : null;
  const [a, c] = w.useState(l ? l[0] : o[0].option);
  r.setFieldValue(i, a);
  const [u, { toggle: d }] = _l(!1);
  return S.jsxs("div", {
    className: "collapsible-selector-container",
    children: [
      t && S.jsx("label", { children: t }),
      n && S.jsx("label", { children: n }),
      S.jsx("div", {
        className: "container",
        children: S.jsxs("div", {
          className: "multi-select-row row btn-style",
          onClick: d,
          children: [
            S.jsxs("p", {
              className: "col my-2 row-title",
              children: [S.jsx("i", { class: "fa fa-balance-scale mr-2" }), a],
            }),
            S.jsx("p", {
              className: "clickable-text col-auto text-right my-2",
              children: "change",
            }),
          ],
        }),
      }),
      S.jsx(Qv, {
        className: "container",
        in: u,
        transitionDuration: 100,
        transitionTimingFunction: "linear",
        children: o.map((f) => {
          console.log(f);
          const [m, { open: p, close: h }] = _l(!1),
            x = function () {
              c(f.option);
            };
          return S.jsxs("div", {
            className: "multi-select-row row clickable-row",
            children: [
              S.jsx("p", {
                className: "col my-2 row-title",
                onClick: x,
                children: f.option,
              }),
              (f.description || f.help_link) &&
                S.jsxs(S.Fragment, {
                  children: [
                    S.jsxs(rn, {
                      opened: m,
                      onClose: h,
                      title: f.option,
                      centered: !0,
                      size: "auto",
                      children: [
                        S.jsx("div", {
                          className: "modal-dialog-body",
                          children:
                            f.description &&
                            S.jsx(Er, { children: f.description }),
                        }),
                        S.jsxs("div", {
                          className: "modal-dialog-footer container p-0",
                          children: [
                            f.help_link &&
                              S.jsx("div", {
                                className: "row",
                                children: S.jsx("div", {
                                  className: "col-12",
                                  children: S.jsx("a", {
                                    href: f.help_link,
                                    className:
                                      "btn btn-light-blue-inverted btn-block",
                                    children: "More detail",
                                  }),
                                }),
                              }),
                            S.jsx("div", {
                              className: "row",
                              children: S.jsx("div", {
                                className: "col-12",
                                children: S.jsx("p", {
                                  className:
                                    "btn btn-light-blue-inverted btn-block",
                                  onClick: () => {
                                    x(), h();
                                  },
                                  children: "Choose this",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsx("div", {
                      className: "col-auto clickable-text",
                      onClick: p,
                      children: S.jsx("p", {
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
Zf.defaultProps = {};
Zf.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
};
const ep = (e) => {
  const {
      title: t,
      description: n,
      mandatory: r,
      form: o,
      field_id: s,
      placeholder: i,
    } = e,
    l = /^(ftp|http|https):\/\/[^ "]+$/,
    [a, c] = w.useState();
  w.useEffect(() => {
    o.setFieldValue(s, a);
  });
  const u = DD({
    initialValue: "",
    validateOnBlur: !0,
    validate: (d) => {
      if (r && d === "") return "This field is required";
      if (d !== "" && !l.test(d)) return "Please enter a valid URL";
    },
  });
  return S.jsx(
    ka,
    {
      label: t,
      description: n,
      placeholder: i,
      required: r,
      value: a,
      onChange: (d) => c(d.currentTarget.value),
      ...u.getInputProps(),
    },
    o.key(s)
  );
};
ep.defaultProps = { placeholder: "" };
ep.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  mandatory: Y.bool.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
  placeholder: Y.string,
};
const PD = new Map([
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
function si(e, t) {
  const n = TD(e);
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
function TD(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(),
      o = PD.get(r);
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
var Yo = (e, t, n) =>
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
const ND = [".DS_Store", "Thumbs.db"];
function OD(e) {
  return Yo(this, null, function* () {
    return jl(e) && jD(e.dataTransfer)
      ? FD(e.dataTransfer, e.type)
      : $D(e)
      ? LD(e)
      : Array.isArray(e) &&
        e.every((t) => "getFile" in t && typeof t.getFile == "function")
      ? AD(e)
      : [];
  });
}
function jD(e) {
  return jl(e);
}
function $D(e) {
  return jl(e) && jl(e.target);
}
function jl(e) {
  return typeof e == "object" && e !== null;
}
function LD(e) {
  return qu(e.target.files).map((t) => si(t));
}
function AD(e) {
  return Yo(this, null, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => si(n));
  });
}
function FD(e, t) {
  return Yo(this, null, function* () {
    if (e.items) {
      const n = qu(e.items).filter((o) => o.kind === "file");
      if (t !== "drop") return n;
      const r = yield Promise.all(n.map(MD));
      return Th(cw(r));
    }
    return Th(qu(e.files).map((n) => si(n)));
  });
}
function Th(e) {
  return e.filter((t) => ND.indexOf(t.name) === -1);
}
function qu(e) {
  if (e === null) return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function MD(e) {
  if (typeof e.webkitGetAsEntry != "function") return Nh(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? uw(t) : Nh(e);
}
function cw(e) {
  return e.reduce((t, n) => [...t, ...(Array.isArray(n) ? cw(n) : [n])], []);
}
function Nh(e) {
  const t = e.getAsFile();
  if (!t) return Promise.reject(`${e} is not a File`);
  const n = si(t);
  return Promise.resolve(n);
}
function ID(e) {
  return Yo(this, null, function* () {
    return e.isDirectory ? uw(e) : zD(e);
  });
}
function uw(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function s() {
      t.readEntries(
        (i) =>
          Yo(this, null, function* () {
            if (i.length) {
              const l = Promise.all(i.map(ID));
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
function zD(e) {
  return Yo(this, null, function* () {
    return new Promise((t, n) => {
      e.file(
        (r) => {
          const o = si(r, e.fullPath);
          t(o);
        },
        (r) => {
          n(r);
        }
      );
    });
  });
}
function BD(e, t) {
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
var VD = Object.defineProperty,
  HD = Object.defineProperties,
  UD = Object.getOwnPropertyDescriptors,
  Oh = Object.getOwnPropertySymbols,
  WD = Object.prototype.hasOwnProperty,
  YD = Object.prototype.propertyIsEnumerable,
  jh = (e, t, n) =>
    t in e
      ? VD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  KD = (e, t) => {
    for (var n in t || (t = {})) WD.call(t, n) && jh(e, n, t[n]);
    if (Oh) for (var n of Oh(t)) YD.call(t, n) && jh(e, n, t[n]);
    return e;
  },
  qD = (e, t) => HD(e, UD(t));
const GD = "file-invalid-type",
  XD = "file-too-large",
  QD = "file-too-small",
  JD = "too-many-files",
  ZD = (e) => {
    e = Array.isArray(e) && e.length === 1 ? e[0] : e;
    const t = Array.isArray(e) ? `one of ${e.join(", ")}` : e;
    return { code: GD, message: `File type must be ${t}` };
  },
  $h = (e) => ({
    code: XD,
    message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  Lh = (e) => ({
    code: QD,
    message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  eP = { code: JD, message: "Too many files" };
function dw(e, t) {
  const n = e.type === "application/x-moz-file" || BD(e, t);
  return [n, n ? null : ZD(t)];
}
function fw(e, t, n) {
  if (Sr(e.size))
    if (Sr(t) && Sr(n)) {
      if (e.size > n) return [!1, $h(n)];
      if (e.size < t) return [!1, Lh(t)];
    } else {
      if (Sr(t) && e.size < t) return [!1, Lh(t)];
      if (Sr(n) && e.size > n) return [!1, $h(n)];
    }
  return [!0, null];
}
function Sr(e) {
  return e != null;
}
function tP({
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
        const [a] = dw(l, t),
          [c] = fw(l, n, r),
          u = i ? i(l) : null;
        return a && c && !u;
      });
}
function $l(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
    ? e.cancelBubble
    : !1;
}
function Fi(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(
        e.dataTransfer.types,
        (t) => t === "Files" || t === "application/x-moz-file"
      )
    : !!e.target && !!e.target.files;
}
function Ah(e) {
  e.preventDefault();
}
function nP(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function rP(e) {
  return e.indexOf("Edge/") !== -1;
}
function oP(e = window.navigator.userAgent) {
  return nP(e) || rP(e);
}
function un(...e) {
  return (t, ...n) => e.some((r) => (!$l(t) && r && r(t, ...n), $l(t)));
}
function sP() {
  return "showOpenFilePicker" in window;
}
function iP(e) {
  return Sr(e)
    ? [
        {
          description: "Files",
          accept: Object.entries(e)
            .filter(([n, r]) => {
              let o = !0;
              return (
                pw(n) ||
                  (console.warn(
                    `Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`
                  ),
                  (o = !1)),
                (!Array.isArray(r) || !r.every(mw)) &&
                  (console.warn(
                    `Skipped "${n}" because an invalid file extension was provided.`
                  ),
                  (o = !1)),
                o
              );
            })
            .reduce((n, [r, o]) => qD(KD({}, n), { [r]: o }), {}),
        },
      ]
    : e;
}
function lP(e) {
  if (Sr(e))
    return Object.entries(e)
      .reduce((t, [n, r]) => [...t, n, ...r], [])
      .filter((t) => pw(t) || mw(t))
      .join(",");
}
function aP(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function cP(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
function pw(e) {
  return (
    e === "audio/*" ||
    e === "video/*" ||
    e === "image/*" ||
    e === "text/*" ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function mw(e) {
  return /^.*\.[\w]+$/.test(e);
}
var uP = Object.defineProperty,
  dP = Object.defineProperties,
  fP = Object.getOwnPropertyDescriptors,
  Ll = Object.getOwnPropertySymbols,
  hw = Object.prototype.hasOwnProperty,
  gw = Object.prototype.propertyIsEnumerable,
  Fh = (e, t, n) =>
    t in e
      ? uP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  it = (e, t) => {
    for (var n in t || (t = {})) hw.call(t, n) && Fh(e, n, t[n]);
    if (Ll) for (var n of Ll(t)) gw.call(t, n) && Fh(e, n, t[n]);
    return e;
  },
  Un = (e, t) => dP(e, fP(t)),
  Al = (e, t) => {
    var n = {};
    for (var r in e) hw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Ll)
      for (var r of Ll(e)) t.indexOf(r) < 0 && gw.call(e, r) && (n[r] = e[r]);
    return n;
  };
const tp = w.forwardRef((e, t) => {
  var n = e,
    { children: r } = n,
    o = Al(n, ["children"]);
  const s = vw(o),
    { open: i } = s,
    l = Al(s, ["open"]);
  return (
    w.useImperativeHandle(t, () => ({ open: i }), [i]),
    Hl.createElement(w.Fragment, null, r(Un(it({}, l), { open: i })))
  );
});
tp.displayName = "Dropzone";
const yw = {
  disabled: !1,
  getFilesFromEvent: OD,
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
tp.defaultProps = yw;
tp.propTypes = {
  children: Y.func,
  accept: Y.objectOf(Y.arrayOf(Y.string)),
  multiple: Y.bool,
  preventDropOnDocument: Y.bool,
  noClick: Y.bool,
  noKeyboard: Y.bool,
  noDrag: Y.bool,
  noDragEventsBubbling: Y.bool,
  minSize: Y.number,
  maxSize: Y.number,
  maxFiles: Y.number,
  disabled: Y.bool,
  getFilesFromEvent: Y.func,
  onFileDialogCancel: Y.func,
  onFileDialogOpen: Y.func,
  useFsAccessApi: Y.bool,
  autoFocus: Y.bool,
  onDragEnter: Y.func,
  onDragLeave: Y.func,
  onDragOver: Y.func,
  onDrop: Y.func,
  onDropAccepted: Y.func,
  onDropRejected: Y.func,
  onError: Y.func,
  validator: Y.func,
};
const Gu = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function vw(e = {}) {
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
      useFsAccessApi: x,
      autoFocus: y,
      preventDropOnDocument: v,
      noClick: g,
      noKeyboard: b,
      noDrag: C,
      noDragEventsBubbling: E,
      onError: _,
      validator: D,
    } = it(it({}, yw), e),
    L = w.useMemo(() => lP(t), [t]),
    N = w.useMemo(() => iP(t), [t]),
    M = w.useMemo(() => (typeof h == "function" ? h : Mh), [h]),
    B = w.useMemo(() => (typeof p == "function" ? p : Mh), [p]),
    V = w.useRef(null),
    A = w.useRef(null),
    [j, P] = w.useReducer(pP, Gu),
    { isFocused: T, isFileDialogActive: R } = j,
    k = w.useRef(typeof window < "u" && window.isSecureContext && x && sP()),
    $ = () => {
      !k.current &&
        R &&
        setTimeout(() => {
          if (A.current) {
            const { files: W } = A.current;
            W.length || (P({ type: "closeDialog" }), B());
          }
        }, 300);
    };
  w.useEffect(
    () => (
      window.addEventListener("focus", $, !1),
      () => {
        window.removeEventListener("focus", $, !1);
      }
    ),
    [A, R, B, k]
  );
  const O = w.useRef([]),
    I = (W) => {
      (V.current && V.current.contains(W.target)) ||
        (W.preventDefault(), (O.current = []));
    };
  w.useEffect(
    () => (
      v &&
        (document.addEventListener("dragover", Ah, !1),
        document.addEventListener("drop", I, !1)),
      () => {
        v &&
          (document.removeEventListener("dragover", Ah),
          document.removeEventListener("drop", I));
      }
    ),
    [V, v]
  ),
    w.useEffect(
      () => (!n && y && V.current && V.current.focus(), () => {}),
      [V, y, n]
    );
  const K = w.useCallback(
      (W) => {
        _ ? _(W) : console.error(W);
      },
      [_]
    ),
    J = w.useCallback(
      (W) => {
        W.preventDefault(),
          W.persist(),
          ye(W),
          (O.current = [...O.current, W.target]),
          Fi(W) &&
            Promise.resolve(r(W))
              .then((re) => {
                if ($l(W) && !E) return;
                const ie = re.length,
                  xe =
                    ie > 0 &&
                    tP({
                      files: re,
                      accept: L,
                      minSize: s,
                      maxSize: o,
                      multiple: i,
                      maxFiles: l,
                      validator: D,
                    }),
                  Ae = ie > 0 && !xe;
                P({
                  isDragAccept: xe,
                  isDragReject: Ae,
                  isDragActive: !0,
                  type: "setDraggedFiles",
                }),
                  a && a(W);
              })
              .catch((re) => K(re));
      },
      [r, a, K, E, L, s, o, i, l, D]
    ),
    ee = w.useCallback(
      (W) => {
        W.preventDefault(), W.persist(), ye(W);
        const re = Fi(W);
        if (re && W.dataTransfer)
          try {
            W.dataTransfer.dropEffect = "copy";
          } catch {}
        return re && u && u(W), !1;
      },
      [u, E]
    ),
    ne = w.useCallback(
      (W) => {
        W.preventDefault(), W.persist(), ye(W);
        const re = O.current.filter(
            (xe) => V.current && V.current.contains(xe)
          ),
          ie = re.indexOf(W.target);
        ie !== -1 && re.splice(ie, 1),
          (O.current = re),
          !(re.length > 0) &&
            (P({
              type: "setDraggedFiles",
              isDragActive: !1,
              isDragAccept: !1,
              isDragReject: !1,
            }),
            Fi(W) && c && c(W));
      },
      [V, c, E]
    ),
    te = w.useCallback(
      (W, re) => {
        const ie = [],
          xe = [];
        W.forEach((Ae) => {
          const [Pt, be] = dw(Ae, L),
            [Fe, ln] = fw(Ae, s, o),
            qe = D ? D(Ae) : null;
          if (Pt && Fe && !qe) ie.push(Ae);
          else {
            let Tt = [be, ln];
            qe && (Tt = Tt.concat(qe)),
              xe.push({ file: Ae, errors: Tt.filter((gr) => gr) });
          }
        }),
          ((!i && ie.length > 1) || (i && l >= 1 && ie.length > l)) &&
            (ie.forEach((Ae) => {
              xe.push({ file: Ae, errors: [eP] });
            }),
            ie.splice(0)),
          P({ acceptedFiles: ie, fileRejections: xe, type: "setFiles" }),
          d && d(ie, xe, re),
          xe.length > 0 && m && m(xe, re),
          ie.length > 0 && f && f(ie, re);
      },
      [P, i, L, s, o, l, d, f, m, D]
    ),
    me = w.useCallback(
      (W) => {
        W.preventDefault(),
          W.persist(),
          ye(W),
          (O.current = []),
          Fi(W) &&
            Promise.resolve(r(W))
              .then((re) => {
                ($l(W) && !E) || te(re, W);
              })
              .catch((re) => K(re)),
          P({ type: "reset" });
      },
      [r, te, K, E]
    ),
    oe = w.useCallback(() => {
      if (k.current) {
        P({ type: "openDialog" }), M();
        const W = { multiple: i, types: N };
        window
          .showOpenFilePicker(W)
          .then((re) => r(re))
          .then((re) => {
            te(re, null), P({ type: "closeDialog" });
          })
          .catch((re) => {
            aP(re)
              ? (B(re), P({ type: "closeDialog" }))
              : cP(re)
              ? ((k.current = !1),
                A.current
                  ? ((A.current.value = null), A.current.click())
                  : K(
                      new Error(
                        "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
                      )
                    ))
              : K(re);
          });
        return;
      }
      A.current &&
        (P({ type: "openDialog" }),
        M(),
        (A.current.value = null),
        A.current.click());
    }, [P, M, B, x, te, K, N, i]),
    le = w.useCallback(
      (W) => {
        !V.current ||
          !V.current.isEqualNode(W.target) ||
          ((W.key === " " ||
            W.key === "Enter" ||
            W.keyCode === 32 ||
            W.keyCode === 13) &&
            (W.preventDefault(), oe()));
      },
      [V, oe]
    ),
    Z = w.useCallback(() => {
      P({ type: "focus" });
    }, []),
    ge = w.useCallback(() => {
      P({ type: "blur" });
    }, []),
    ce = w.useCallback(() => {
      g || (oP() ? setTimeout(oe, 0) : oe());
    }, [g, oe]),
    se = (W) => (n ? null : W),
    je = (W) => (b ? null : se(W)),
    Ie = (W) => (C ? null : se(W)),
    ye = (W) => {
      E && W.stopPropagation();
    },
    rt = w.useMemo(
      () =>
        (W = {}) => {
          var re = W,
            {
              refKey: ie = "ref",
              role: xe,
              onKeyDown: Ae,
              onFocus: Pt,
              onBlur: be,
              onClick: Fe,
              onDragEnter: ln,
              onDragOver: qe,
              onDragLeave: Tt,
              onDrop: gr,
            } = re,
            an = Al(re, [
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
          return it(
            it(
              {
                onKeyDown: je(un(Ae, le)),
                onFocus: je(un(Pt, Z)),
                onBlur: je(un(be, ge)),
                onClick: se(un(Fe, ce)),
                onDragEnter: Ie(un(ln, J)),
                onDragOver: Ie(un(qe, ee)),
                onDragLeave: Ie(un(Tt, ne)),
                onDrop: Ie(un(gr, me)),
                role: typeof xe == "string" && xe !== "" ? xe : "presentation",
                [ie]: V,
              },
              !n && !b ? { tabIndex: 0 } : {}
            ),
            an
          );
        },
      [V, le, Z, ge, ce, J, ee, ne, me, b, C, n]
    ),
    Te = w.useCallback((W) => {
      W.stopPropagation();
    }, []),
    Le = w.useMemo(
      () =>
        (W = {}) => {
          var re = W,
            { refKey: ie = "ref", onChange: xe, onClick: Ae } = re,
            Pt = Al(re, ["refKey", "onChange", "onClick"]);
          const be = {
            accept: L,
            multiple: i,
            type: "file",
            style: { display: "none" },
            onChange: se(un(xe, me)),
            onClick: se(un(Ae, Te)),
            tabIndex: -1,
            [ie]: A,
          };
          return it(it({}, be), Pt);
        },
      [A, t, i, me, n]
    );
  return Un(it({}, j), {
    isFocused: T && !n,
    getRootProps: rt,
    getInputProps: Le,
    rootRef: V,
    inputRef: A,
    open: se(oe),
  });
}
function pP(e, t) {
  switch (t.type) {
    case "focus":
      return Un(it({}, e), { isFocused: !0 });
    case "blur":
      return Un(it({}, e), { isFocused: !1 });
    case "openDialog":
      return Un(it({}, Gu), { isFileDialogActive: !0 });
    case "closeDialog":
      return Un(it({}, e), { isFileDialogActive: !1 });
    case "setDraggedFiles":
      return Un(it({}, e), {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject,
      });
    case "setFiles":
      return Un(it({}, e), {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
      });
    case "reset":
      return it({}, Gu);
    default:
      return e;
  }
}
function Mh() {}
const [mP, hP] = Br("Dropzone component was not found in tree");
function np(e) {
  const t = (n) => {
    const { children: r, ...o } = U(`Dropzone${Bm(e)}`, {}, n),
      s = hP(),
      i = Mo(r) ? r : S.jsx("span", { children: r });
    return s[e] ? w.cloneElement(i, o) : null;
  };
  return (t.displayName = `@mantine/dropzone/${Bm(e)}`), t;
}
const gP = np("accept"),
  yP = np("reject"),
  vP = np("idle");
var Ys = {
  root: "m_d46a4834",
  inner: "m_b85f7144",
  fullScreen: "m_96f6e9ad",
  dropzone: "m_7946116d",
};
const wP = {
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
  SP = (e, { radius: t, variant: n, acceptColor: r, rejectColor: o }) => {
    const s = e.variantColorResolver({
        color: r || e.primaryColor,
        theme: e,
        variant: n,
      }),
      i = e.variantColorResolver({ color: o || "red", theme: e, variant: n });
    return {
      root: {
        "--dropzone-radius": Sn(t),
        "--dropzone-accept-color": s.color,
        "--dropzone-accept-bg": s.background,
        "--dropzone-reject-color": i.color,
        "--dropzone-reject-bg": i.background,
      },
    };
  },
  pr = X((e, t) => {
    const n = U("Dropzone", wP, e),
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
        onDropAny: x,
        onDrop: y,
        onReject: v,
        openRef: g,
        name: b,
        maxFiles: C,
        autoFocus: E,
        activateOnClick: _,
        activateOnDrag: D,
        dragEventsBubbling: L,
        activateOnKeyboard: N,
        onDragEnter: M,
        onDragLeave: B,
        onDragOver: V,
        onFileDialogCancel: A,
        onFileDialogOpen: j,
        preventDropOnDocument: P,
        useFsAccessApi: T,
        getFilesFromEvent: R,
        validator: k,
        rejectColor: $,
        acceptColor: O,
        enablePointerEvents: I,
        loaderProps: K,
        inputProps: J,
        mod: ee,
        ...ne
      } = n,
      te = ue({
        name: "Dropzone",
        classes: Ys,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: SP,
      }),
      {
        getRootProps: me,
        getInputProps: oe,
        isDragAccept: le,
        isDragReject: Z,
        open: ge,
      } = vw({
        onDrop: x,
        onDropAccepted: y,
        onDropRejected: v,
        disabled: u || d,
        accept: Array.isArray(p)
          ? p.reduce((se, je) => ({ ...se, [je]: [] }), {})
          : p,
        multiple: f,
        maxSize: m,
        maxFiles: C,
        autoFocus: E,
        noClick: !_,
        noDrag: !D,
        noDragEventsBubbling: !L,
        noKeyboard: !N,
        onDragEnter: M,
        onDragLeave: B,
        onDragOver: V,
        onFileDialogCancel: A,
        onFileDialogOpen: j,
        preventDropOnDocument: P,
        useFsAccessApi: T,
        validator: k,
        ...(R ? { getFilesFromEvent: R } : null),
      });
    lf(g, ge);
    const ce = !le && !Z;
    return S.jsx(mP, {
      value: { accept: le, reject: Z, idle: ce },
      children: S.jsxs(G, {
        ...me(),
        ...te("root", { focusable: !0 }),
        ...ne,
        mod: [
          {
            accept: le,
            reject: Z,
            idle: ce,
            loading: d,
            "activate-on-click": _,
          },
          ee,
        ],
        children: [
          S.jsx(Kf, {
            visible: d,
            overlayProps: { radius: c },
            unstyled: l,
            loaderProps: K,
          }),
          S.jsx("input", { ...oe(J), name: b }),
          S.jsx("div", {
            ...te("inner"),
            ref: t,
            "data-enable-pointer-events": I || void 0,
            children: h,
          }),
        ],
      }),
    });
  });
pr.classes = Ys;
pr.displayName = "@mantine/dropzone/Dropzone";
pr.Accept = gP;
pr.Idle = vP;
pr.Reject = yP;
const xP = {
    loading: !1,
    maxSize: 1 / 0,
    activateOnClick: !1,
    activateOnDrag: !0,
    dragEventsBubbling: !0,
    activateOnKeyboard: !0,
    active: !0,
    zIndex: Vr("max"),
    withinPortal: !0,
  },
  rp = X((e, t) => {
    const n = U("DropzoneFullScreen", xP, e),
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
      x = ue({
        name: "DropzoneFullScreen",
        classes: Ys,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "fullScreen",
      }),
      { resolvedClassNames: y, resolvedStyles: v } = zo({
        classNames: r,
        styles: i,
        props: n,
      }),
      [g, b] = w.useState(0),
      [C, { open: E, close: _ }] = _l(!1),
      D = (N) => {
        var M;
        (M = N.dataTransfer) != null &&
          M.types.includes("Files") &&
          (b((B) => B + 1), E());
      },
      L = () => {
        b((N) => N - 1);
      };
    return (
      w.useEffect(() => {
        g === 0 && _();
      }, [g]),
      w.useEffect(() => {
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
      S.jsx(fa, {
        ...p,
        withinPortal: m,
        children: S.jsx(G, {
          ...x("fullScreen", {
            style: {
              opacity: C ? 1 : 0,
              pointerEvents: C ? "all" : "none",
              zIndex: f,
            },
          }),
          ref: t,
          children: S.jsx(pr, {
            ...h,
            classNames: y,
            styles: v,
            unstyled: l,
            className: Ys.dropzone,
            onDrop: (N) => {
              u == null || u(N), _(), b(0);
            },
            onReject: (N) => {
              d == null || d(N), _(), b(0);
            },
          }),
        }),
      })
    );
  });
rp.classes = Ys;
rp.displayName = "@mantine/dropzone/DropzoneFullScreen";
pr.FullScreen = rp;
const Mi = pr,
  op = (e) => {
    const { title: t, description: n, form: r, field_id: o } = e,
      [s, i] = w.useState([]);
    r.values.files.map((a, c) =>
      S.jsxs(
        Er,
        {
          children: [
            S.jsx("b", { children: a.name }),
            " (",
            (a.size / 1024).toFixed(2),
            " kb)",
            S.jsx(Ar, {
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
      S.jsxs(
        Er,
        {
          children: [
            S.jsx("b", { children: a.name }),
            " (",
            (a.size / 1024).toFixed(2),
            " kb)",
            S.jsx(Ar, {
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
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx(Mi, {
          h: 120,
          p: 0,
          multiple: !0,
          onDrop: (a) => {
            r.setFieldValue("files", a), i(a);
          },
          children: S.jsxs(Wf, {
            h: 120,
            children: [
              S.jsx(Mi.Idle, { children: "Drop files here" }),
              S.jsx(Mi.Accept, { children: "Drop files here" }),
              S.jsx(Mi.Reject, { children: "Files are invalid" }),
            ],
          }),
        }),
        r.errors.files &&
          S.jsx(Er, { c: "red", mt: 5, children: r.errors.files }),
        l.length > 0 &&
          S.jsxs(S.Fragment, {
            children: [
              S.jsx(Er, { mb: 5, mt: "md", children: "Selected files:" }),
              l,
            ],
          }),
      ],
    });
  };
op.defaultProps = {};
op.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
};
var ww = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(ld, function () {
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
      x =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      v = {
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
      g = function (A, j, P) {
        var T = String(A);
        return !T || T.length >= j
          ? A
          : "" + Array(j + 1 - T.length).join(P) + A;
      },
      b = {
        s: g,
        z: function (A) {
          var j = -A.utcOffset(),
            P = Math.abs(j),
            T = Math.floor(P / 60),
            R = P % 60;
          return (j <= 0 ? "+" : "-") + g(T, 2, "0") + ":" + g(R, 2, "0");
        },
        m: function A(j, P) {
          if (j.date() < P.date()) return -A(P, j);
          var T = 12 * (P.year() - j.year()) + (P.month() - j.month()),
            R = j.clone().add(T, d),
            k = P - R < 0,
            $ = j.clone().add(T + (k ? -1 : 1), d);
          return +(-(T + (P - R) / (k ? R - $ : $ - R)) || 0);
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
    E[C] = v;
    var _ = "$isDayjsObject",
      D = function (A) {
        return A instanceof B || !(!A || !A[_]);
      },
      L = function A(j, P, T) {
        var R;
        if (!j) return C;
        if (typeof j == "string") {
          var k = j.toLowerCase();
          E[k] && (R = k), P && ((E[k] = P), (R = k));
          var $ = j.split("-");
          if (!R && $.length > 1) return A($[0]);
        } else {
          var O = j.name;
          (E[O] = j), (R = O);
        }
        return !T && R && (C = R), R || (!T && C);
      },
      N = function (A, j) {
        if (D(A)) return A.clone();
        var P = typeof j == "object" ? j : {};
        return (P.date = A), (P.args = arguments), new B(P);
      },
      M = b;
    (M.l = L),
      (M.i = D),
      (M.w = function (A, j) {
        return N(A, { locale: j.$L, utc: j.$u, x: j.$x, $offset: j.$offset });
      });
    var B = (function () {
        function A(P) {
          (this.$L = L(P.locale, null, !0)),
            this.parse(P),
            (this.$x = this.$x || P.x || {}),
            (this[_] = !0);
        }
        var j = A.prototype;
        return (
          (j.parse = function (P) {
            (this.$d = (function (T) {
              var R = T.date,
                k = T.utc;
              if (R === null) return new Date(NaN);
              if (M.u(R)) return new Date();
              if (R instanceof Date) return new Date(R);
              if (typeof R == "string" && !/Z$/i.test(R)) {
                var $ = R.match(x);
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
              return new Date(R);
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
            return M;
          }),
          (j.isValid = function () {
            return this.$d.toString() !== h;
          }),
          (j.isSame = function (P, T) {
            var R = N(P);
            return this.startOf(T) <= R && R <= this.endOf(T);
          }),
          (j.isAfter = function (P, T) {
            return N(P) < this.startOf(T);
          }),
          (j.isBefore = function (P, T) {
            return this.endOf(T) < N(P);
          }),
          (j.$g = function (P, T, R) {
            return M.u(P) ? this[T] : this.set(R, P);
          }),
          (j.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (j.valueOf = function () {
            return this.$d.getTime();
          }),
          (j.startOf = function (P, T) {
            var R = this,
              k = !!M.u(T) || T,
              $ = M.p(P),
              O = function (oe, le) {
                var Z = M.w(
                  R.$u ? Date.UTC(R.$y, le, oe) : new Date(R.$y, le, oe),
                  R
                );
                return k ? Z : Z.endOf(c);
              },
              I = function (oe, le) {
                return M.w(
                  R.toDate()[oe].apply(
                    R.toDate("s"),
                    (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(le)
                  ),
                  R
                );
              },
              K = this.$W,
              J = this.$M,
              ee = this.$D,
              ne = "set" + (this.$u ? "UTC" : "");
            switch ($) {
              case m:
                return k ? O(1, 0) : O(31, 11);
              case d:
                return k ? O(1, J) : O(0, J + 1);
              case u:
                var te = this.$locale().weekStart || 0,
                  me = (K < te ? K + 7 : K) - te;
                return O(k ? ee - me : ee + (6 - me), J);
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
            var R,
              k = M.p(P),
              $ = "set" + (this.$u ? "UTC" : ""),
              O = ((R = {}),
              (R[c] = $ + "Date"),
              (R[p] = $ + "Date"),
              (R[d] = $ + "Month"),
              (R[m] = $ + "FullYear"),
              (R[a] = $ + "Hours"),
              (R[l] = $ + "Minutes"),
              (R[i] = $ + "Seconds"),
              (R[s] = $ + "Milliseconds"),
              R)[k],
              I = k === c ? this.$D + (T - this.$W) : T;
            if (k === d || k === m) {
              var K = this.clone().set(p, 1);
              K.$d[O](I),
                K.init(),
                (this.$d = K.set(p, Math.min(this.$D, K.daysInMonth())).$d);
            } else O && this.$d[O](I);
            return this.init(), this;
          }),
          (j.set = function (P, T) {
            return this.clone().$set(P, T);
          }),
          (j.get = function (P) {
            return this[M.p(P)]();
          }),
          (j.add = function (P, T) {
            var R,
              k = this;
            P = Number(P);
            var $ = M.p(T),
              O = function (J) {
                var ee = N(k);
                return M.w(ee.date(ee.date() + Math.round(J * P)), k);
              };
            if ($ === d) return this.set(d, this.$M + P);
            if ($ === m) return this.set(m, this.$y + P);
            if ($ === c) return O(1);
            if ($ === u) return O(7);
            var I = ((R = {}), (R[l] = r), (R[a] = o), (R[i] = n), R)[$] || 1,
              K = this.$d.getTime() + P * I;
            return M.w(K, this);
          }),
          (j.subtract = function (P, T) {
            return this.add(-1 * P, T);
          }),
          (j.format = function (P) {
            var T = this,
              R = this.$locale();
            if (!this.isValid()) return R.invalidDate || h;
            var k = P || "YYYY-MM-DDTHH:mm:ssZ",
              $ = M.z(this),
              O = this.$H,
              I = this.$m,
              K = this.$M,
              J = R.weekdays,
              ee = R.months,
              ne = R.meridiem,
              te = function (le, Z, ge, ce) {
                return (le && (le[Z] || le(T, k))) || ge[Z].slice(0, ce);
              },
              me = function (le) {
                return M.s(O % 12 || 12, le, "0");
              },
              oe =
                ne ||
                function (le, Z, ge) {
                  var ce = le < 12 ? "AM" : "PM";
                  return ge ? ce.toLowerCase() : ce;
                };
            return k.replace(y, function (le, Z) {
              return (
                Z ||
                (function (ge) {
                  switch (ge) {
                    case "YY":
                      return String(T.$y).slice(-2);
                    case "YYYY":
                      return M.s(T.$y, 4, "0");
                    case "M":
                      return K + 1;
                    case "MM":
                      return M.s(K + 1, 2, "0");
                    case "MMM":
                      return te(R.monthsShort, K, ee, 3);
                    case "MMMM":
                      return te(ee, K);
                    case "D":
                      return T.$D;
                    case "DD":
                      return M.s(T.$D, 2, "0");
                    case "d":
                      return String(T.$W);
                    case "dd":
                      return te(R.weekdaysMin, T.$W, J, 2);
                    case "ddd":
                      return te(R.weekdaysShort, T.$W, J, 3);
                    case "dddd":
                      return J[T.$W];
                    case "H":
                      return String(O);
                    case "HH":
                      return M.s(O, 2, "0");
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
                      return M.s(I, 2, "0");
                    case "s":
                      return String(T.$s);
                    case "ss":
                      return M.s(T.$s, 2, "0");
                    case "SSS":
                      return M.s(T.$ms, 3, "0");
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
          (j.diff = function (P, T, R) {
            var k,
              $ = this,
              O = M.p(T),
              I = N(P),
              K = (I.utcOffset() - this.utcOffset()) * r,
              J = this - I,
              ee = function () {
                return M.m($, I);
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
                k = (J - K) / 6048e5;
                break;
              case c:
                k = (J - K) / 864e5;
                break;
              case a:
                k = J / o;
                break;
              case l:
                k = J / r;
                break;
              case i:
                k = J / n;
                break;
              default:
                k = J;
            }
            return R ? k : M.a(k);
          }),
          (j.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          (j.$locale = function () {
            return E[this.$L];
          }),
          (j.locale = function (P, T) {
            if (!P) return this.$L;
            var R = this.clone(),
              k = L(P, T, !0);
            return k && (R.$L = k), R;
          }),
          (j.clone = function () {
            return M.w(this.$d, this);
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
})(ww);
var bP = ww.exports;
const Q = Mr(bP);
function CP({
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
function Sw({
  controlsRef: e,
  direction: t,
  levelIndex: n,
  rowIndex: r,
  cellIndex: o,
  size: s,
}) {
  var a, c, u;
  const i = CP({
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
      ? Sw({
          controlsRef: e,
          direction: t,
          levelIndex: i.levelIndex,
          cellIndex: i.cellIndex,
          rowIndex: i.rowIndex,
          size: s,
        })
      : l.focus());
}
function EP(e) {
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
function kP(e) {
  var t;
  return (t = e.current) == null
    ? void 0
    : t.map((n) => n.map((r) => r.length));
}
function sp({
  controlsRef: e,
  levelIndex: t,
  rowIndex: n,
  cellIndex: r,
  event: o,
}) {
  const s = EP(o.key);
  if (s) {
    o.preventDefault();
    const i = kP(e);
    Sw({
      controlsRef: e,
      direction: s,
      levelIndex: t,
      rowIndex: n,
      cellIndex: r,
      size: i,
    });
  }
}
var xw = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(ld, function () {
    var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
      r = {};
    return function (o, s, i) {
      var l,
        a = function (f, m, p) {
          p === void 0 && (p = {});
          var h = new Date(f),
            x = (function (y, v) {
              v === void 0 && (v = {});
              var g = v.timeZoneName || "short",
                b = y + "|" + g,
                C = r[b];
              return (
                C ||
                  ((C = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: y,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: g,
                  })),
                  (r[b] = C)),
                C
              );
            })(m, p);
          return x.formatToParts(h);
        },
        c = function (f, m) {
          for (var p = a(f, m), h = [], x = 0; x < p.length; x += 1) {
            var y = p[x],
              v = y.type,
              g = y.value,
              b = n[v];
            b >= 0 && (h[b] = parseInt(g, 10));
          }
          var C = h[3],
            E = C === 24 ? 0 : C,
            _ =
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
          return (i.utc(_).valueOf() - (D -= D % 1e3)) / 6e4;
        },
        u = s.prototype;
      (u.tz = function (f, m) {
        f === void 0 && (f = l);
        var p = this.utcOffset(),
          h = this.toDate(),
          x = h.toLocaleString("en-US", { timeZone: f }),
          y = Math.round((h - new Date(x)) / 1e3 / 60),
          v = i(x, { locale: this.$L })
            .$set("millisecond", this.$ms)
            .utcOffset(15 * -Math.round(h.getTimezoneOffset() / 15) - y, !0);
        if (m) {
          var g = v.utcOffset();
          v = v.add(p - g, "minute");
        }
        return (v.$x.$timezone = f), v;
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
            x = p || m || l,
            y = c(+i(), x);
          if (typeof f != "string") return i(f).tz(x);
          var v = (function (E, _, D) {
              var L = E - 60 * _ * 1e3,
                N = c(L, D);
              if (_ === N) return [L, _];
              var M = c((L -= 60 * (N - _) * 1e3), D);
              return N === M
                ? [L, N]
                : [E - 60 * Math.min(N, M) * 1e3, Math.max(N, M)];
            })(i.utc(f, h).valueOf(), y, x),
            g = v[0],
            b = v[1],
            C = i(g).utcOffset(b);
          return (C.$x.$timezone = x), C;
        }),
        (i.tz.guess = function () {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }),
        (i.tz.setDefault = function (f) {
          l = f;
        });
    };
  });
})(xw);
var _P = xw.exports;
const RP = Mr(_P);
var bw = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(ld, function () {
    var n = "minute",
      r = /[+-]\d\d(?::?\d\d)?/g,
      o = /([+-]|\d\d)/g;
    return function (s, i, l) {
      var a = i.prototype;
      (l.utc = function (h) {
        var x = { date: h, utc: !0, args: arguments };
        return new i(x);
      }),
        (a.utc = function (h) {
          var x = l(this.toDate(), { locale: this.$L, utc: !0 });
          return h ? x.add(this.utcOffset(), n) : x;
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
      a.utcOffset = function (h, x) {
        var y = this.$utils().u;
        if (y(h))
          return this.$u ? 0 : y(this.$offset) ? d.call(this) : this.$offset;
        if (
          typeof h == "string" &&
          ((h = (function (C) {
            C === void 0 && (C = "");
            var E = C.match(r);
            if (!E) return null;
            var _ = ("" + E[0]).match(o) || ["-", 0, 0],
              D = _[0],
              L = 60 * +_[1] + +_[2];
            return L === 0 ? 0 : D === "+" ? L : -L;
          })(h)),
          h === null)
        )
          return this;
        var v = Math.abs(h) <= 16 ? 60 * h : h,
          g = this;
        if (x) return (g.$offset = v), (g.$u = h === 0), g;
        if (h !== 0) {
          var b = this.$u
            ? this.toDate().getTimezoneOffset()
            : -1 * this.utcOffset();
          ((g = this.local().add(v + b, n)).$offset = v),
            (g.$x.$localOffset = b);
        } else g = this.utc();
        return g;
      };
      var f = a.format;
      (a.format = function (h) {
        var x = h || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return f.call(this, x);
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
      a.diff = function (h, x, y) {
        if (h && this.$u === h.$u) return p.call(this, h, x, y);
        var v = this.local(),
          g = l(h).local();
        return p.call(v, g, x, y);
      };
    };
  });
})(bw);
var DP = bw.exports;
const PP = Mr(DP);
Q.extend(PP);
Q.extend(RP);
function TP(e, t) {
  return t ? Q(e).tz(t).utcOffset() + e.getTimezoneOffset() : 0;
}
const Ih = (e, t, n) => {
  if (!e) return null;
  if (!t) return e;
  let r = TP(e, t);
  return n === "remove" && (r *= -1), Q(e).add(r, "minutes").toDate();
};
function So(e, t, n, r) {
  return r || !t
    ? t
    : Array.isArray(t)
    ? t.map((o) => Ih(o, n, e))
    : Ih(t, n, e);
}
const NP = {
    locale: "en",
    timezone: null,
    firstDayOfWeek: 1,
    weekendDays: [0, 6],
    labelSeparator: "–",
    consistentWeeks: !1,
  },
  OP = w.createContext(NP);
function on() {
  const e = w.useContext(OP),
    t = w.useCallback((i) => i || e.locale, [e.locale]),
    n = w.useCallback((i) => i || e.timezone || void 0, [e.timezone]),
    r = w.useCallback(
      (i) => (typeof i == "number" ? i : e.firstDayOfWeek),
      [e.firstDayOfWeek]
    ),
    o = w.useCallback(
      (i) => (Array.isArray(i) ? i : e.weekendDays),
      [e.weekendDays]
    ),
    s = w.useCallback(
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
var Cw = { day: "m_396ce5cb" };
const jP = {},
  $P = (e, { size: t }) => ({ day: { "--day-size": Ee(t, "day-size") } }),
  ip = X((e, t) => {
    const n = U("Day", jP, e),
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
        inRange: x,
        firstInRange: y,
        lastInRange: v,
        hidden: g,
        static: b,
        ...C
      } = n,
      E = ue({
        name: d || "Day",
        classes: Cw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: $P,
        rootSelector: "day",
      }),
      _ = on();
    return S.jsx(Dn, {
      ...E("day", { style: g ? { display: "none" } : void 0 }),
      component: b ? "div" : "button",
      ref: t,
      disabled: u,
      "data-today":
        Q(c).isSame(So("add", new Date(), _.getTimezone()), "day") || void 0,
      "data-hidden": g || void 0,
      "data-disabled": u || void 0,
      "data-weekend": (!u && !m && f) || void 0,
      "data-outside": (!u && m) || void 0,
      "data-selected": (!u && p) || void 0,
      "data-in-range": (x && !u) || void 0,
      "data-first-in-range": (y && !u) || void 0,
      "data-last-in-range": (v && !u) || void 0,
      "data-static": b || void 0,
      unstyled: l,
      ...C,
      children: (h == null ? void 0 : h(c)) || c.getDate(),
    });
  });
ip.classes = Cw;
ip.displayName = "@mantine/dates/Day";
function LP({ locale: e, format: t = "dd", firstDayOfWeek: n = 1 }) {
  const r = Q().day(n),
    o = [];
  for (let s = 0; s < 7; s += 1)
    typeof t == "string"
      ? o.push(Q(r).add(s, "days").locale(e).format(t))
      : o.push(t(Q(r).add(s, "days").toDate()));
  return o;
}
var Ew = { weekday: "m_18a3eca" };
const AP = {},
  FP = (e, { size: t }) => ({
    weekdaysRow: { "--wr-fz": et(t), "--wr-spacing": ia(t) },
  }),
  lp = X((e, t) => {
    const n = U("WeekdaysRow", AP, e),
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
      h = ue({
        name: m || "WeekdaysRow",
        classes: Ew,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: FP,
        rootSelector: "weekdaysRow",
      }),
      x = on(),
      y = LP({
        locale: x.getLocale(c),
        format: d,
        firstDayOfWeek: x.getFirstDayOfWeek(u),
      }).map((v, g) => S.jsx(f, { ...h("weekday"), children: v }, g));
    return S.jsx(G, {
      component: "tr",
      ref: t,
      ...h("weekdaysRow"),
      ...p,
      children: y,
    });
  });
lp.classes = Ew;
lp.displayName = "@mantine/dates/WeekdaysRow";
function MP(e, t = 1) {
  const n = new Date(e),
    r = t === 0 ? 6 : t - 1;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function IP(e, t = 1) {
  const n = new Date(e);
  for (; n.getDay() !== t; ) n.setDate(n.getDate() - 1);
  return n;
}
function zP({ month: e, firstDayOfWeek: t = 1, consistentWeeks: n }) {
  const r = e.getMonth(),
    o = new Date(e.getFullYear(), r, 1),
    s = new Date(e.getFullYear(), e.getMonth() + 1, 0),
    i = MP(s, t),
    l = IP(o, t),
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
function kw(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
}
function _w(e, t) {
  return t instanceof Date ? Q(e).isAfter(Q(t).subtract(1, "day"), "day") : !0;
}
function Rw(e, t) {
  return t instanceof Date ? Q(e).isBefore(Q(t).add(1, "day"), "day") : !0;
}
function BP(e, t, n, r, o, s, i) {
  const l = e.flat().filter((u) => {
      var d;
      return (
        Rw(u, n) &&
        _w(u, t) &&
        !(o != null && o(u)) &&
        !((d = r == null ? void 0 : r(u)) != null && d.disabled) &&
        (!s || kw(u, i))
      );
    }),
    a = l.find((u) => {
      var d;
      return (d = r == null ? void 0 : r(u)) == null ? void 0 : d.selected;
    });
  if (a) return a;
  const c = l.find((u) => Q().isSame(u, "date"));
  return c || l[0];
}
var Dw = { month: "m_cc9820d3", monthCell: "m_8f457cd5" };
const VP = { withCellSpacing: !0 },
  Ra = X((e, t) => {
    const n = U("Month", VP, e),
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
        excludeDate: x,
        minDate: y,
        maxDate: v,
        renderDay: g,
        hideOutsideDates: b,
        hideWeekdays: C,
        getDayAriaLabel: E,
        static: _,
        __getDayRef: D,
        __onDayKeyDown: L,
        __onDayClick: N,
        __onDayMouseEnter: M,
        __preventFocus: B,
        __stopPropagation: V,
        withCellSpacing: A,
        size: j,
        ...P
      } = n,
      T = ue({
        name: c || "Month",
        classes: Dw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "month",
      }),
      R = on(),
      k = zP({
        month: m,
        firstDayOfWeek: R.getFirstDayOfWeek(d),
        consistentWeeks: R.consistentWeeks,
      }),
      $ = BP(k, y, v, h, x, b, m),
      { resolvedClassNames: O, resolvedStyles: I } = zo({
        classNames: r,
        styles: i,
        props: n,
      }),
      K = k.map((J, ee) => {
        const ne = J.map((te, me) => {
          const oe = !kw(te, m),
            le =
              (E == null ? void 0 : E(te)) ||
              Q(te)
                .locale(u || R.locale)
                .format("D MMMM YYYY"),
            Z = h == null ? void 0 : h(te),
            ge = Q(te).isSame($, "date");
          return S.jsx(
            "td",
            {
              ...T("monthCell"),
              "data-with-spacing": A || void 0,
              children: S.jsx(ip, {
                __staticSelector: c || "Month",
                classNames: O,
                styles: I,
                unstyled: l,
                "data-mantine-stop-propagation": V || void 0,
                renderDay: g,
                date: te,
                size: j,
                weekend: R.getWeekendDays(p).includes(te.getDay()),
                outside: oe,
                hidden: b ? oe : !1,
                "aria-label": le,
                static: _,
                disabled:
                  (x == null ? void 0 : x(te)) || !Rw(te, v) || !_w(te, y),
                ref: (ce) => (D == null ? void 0 : D(ee, me, ce)),
                ...Z,
                onKeyDown: (ce) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onKeyDown) == null ||
                    se.call(Z, ce),
                    L == null ||
                      L(ce, { rowIndex: ee, cellIndex: me, date: te });
                },
                onMouseEnter: (ce) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onMouseEnter) == null ||
                    se.call(Z, ce),
                    M == null || M(ce, te);
                },
                onClick: (ce) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onClick) == null ||
                    se.call(Z, ce),
                    N == null || N(ce, te);
                },
                onMouseDown: (ce) => {
                  var se;
                  (se = Z == null ? void 0 : Z.onMouseDown) == null ||
                    se.call(Z, ce),
                    B && ce.preventDefault();
                },
                tabIndex: B || !ge ? -1 : 0,
              }),
            },
            te.toString()
          );
        });
        return S.jsx("tr", { ...T("monthRow"), children: ne }, ee);
      });
    return S.jsxs(G, {
      component: "table",
      ...T("month"),
      size: j,
      ref: t,
      ...P,
      children: [
        !C &&
          S.jsx("thead", {
            ...T("monthThead"),
            children: S.jsx(lp, {
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
        S.jsx("tbody", { ...T("monthTbody"), children: K }),
      ],
    });
  });
Ra.classes = Dw;
Ra.displayName = "@mantine/dates/Month";
var Pw = { pickerControl: "m_dc6a3c71" };
const HP = {},
  UP = (e, { size: t }) => ({
    pickerControl: { "--dpc-fz": et(t), "--dpc-size": Ee(t, "dpc-size") },
  }),
  Da = X((e, t) => {
    const n = U("PickerControl", HP, e),
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
      x = ue({
        name: f || "PickerControl",
        classes: Pw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: UP,
        rootSelector: "pickerControl",
      });
    return S.jsx(Dn, {
      ...x("pickerControl"),
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
Da.classes = Pw;
Da.displayName = "@mantine/dates/PickerControl";
function Tw(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && Q(e).isBefore(t, "year")) || (n && Q(e).isAfter(n, "year")));
}
function WP(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !Tw(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
      );
    }),
    s = o.find((l) => {
      var a;
      return (a = r == null ? void 0 : r(l)) == null ? void 0 : a.selected;
    });
  if (s) return s;
  const i = o.find((l) => Q().isSame(l, "year"));
  return i || o[0];
}
function Nw(e) {
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
var Ow = { yearsList: "m_9206547b", yearsListCell: "m_c5a19c7d" };
const YP = { yearsListFormat: "YYYY", withCellSpacing: !0 },
  Pa = X((e, t) => {
    const n = U("YearsList", YP, e),
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
        __getControlRef: x,
        __onControlKeyDown: y,
        __onControlClick: v,
        __onControlMouseEnter: g,
        __preventFocus: b,
        __stopPropagation: C,
        withCellSpacing: E,
        size: _,
        ...D
      } = n,
      L = ue({
        name: h || "YearsList",
        classes: Ow,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "yearsList",
      }),
      N = on(),
      M = Nw(c),
      B = WP(M, f, m, p),
      V = M.map((A, j) => {
        const P = A.map((T, R) => {
          const k = p == null ? void 0 : p(T),
            $ = Q(T).isSame(B, "year");
          return S.jsx(
            "td",
            {
              ...L("yearsListCell"),
              "data-with-spacing": E || void 0,
              children: S.jsx(Da, {
                ...L("yearsListControl"),
                size: _,
                unstyled: l,
                "data-mantine-stop-propagation": C || void 0,
                disabled: Tw(T, f, m),
                ref: (O) => (x == null ? void 0 : x(j, R, O)),
                ...k,
                onKeyDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onKeyDown) == null ||
                    I.call(k, O),
                    y == null || y(O, { rowIndex: j, cellIndex: R, date: T });
                },
                onClick: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onClick) == null || I.call(k, O),
                    v == null || v(O, T);
                },
                onMouseEnter: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseEnter) == null ||
                    I.call(k, O),
                    g == null || g(O, T);
                },
                onMouseDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseDown) == null ||
                    I.call(k, O),
                    b && O.preventDefault();
                },
                tabIndex: b || !$ ? -1 : 0,
                children: Q(T).locale(N.getLocale(d)).format(u),
              }),
            },
            R
          );
        });
        return S.jsx("tr", { ...L("yearsListRow"), children: P }, j);
      });
    return S.jsx(G, {
      component: "table",
      ref: t,
      size: _,
      ...L("yearsList"),
      ...D,
      children: S.jsx("tbody", { children: V }),
    });
  });
Pa.classes = Ow;
Pa.displayName = "@mantine/dates/YearsList";
function jw(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && Q(e).isBefore(t, "month")) || (n && Q(e).isAfter(n, "month")));
}
function KP(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !jw(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
      );
    }),
    s = o.find((l) => {
      var a;
      return (a = r == null ? void 0 : r(l)) == null ? void 0 : a.selected;
    });
  if (s) return s;
  const i = o.find((l) => Q().isSame(l, "month"));
  return i || o[0];
}
function qP(e) {
  const t = Q(e).startOf("year").toDate(),
    n = [[], [], [], []];
  let r = 0;
  for (let o = 0; o < 4; o += 1)
    for (let s = 0; s < 3; s += 1)
      n[o].push(Q(t).add(r, "months").toDate()), (r += 1);
  return n;
}
var $w = { monthsList: "m_2a6c32d", monthsListCell: "m_fe27622f" };
const GP = { monthsListFormat: "MMM", withCellSpacing: !0 },
  Ta = X((e, t) => {
    const n = U("MonthsList", GP, e),
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
        __getControlRef: x,
        __onControlKeyDown: y,
        __onControlClick: v,
        __onControlMouseEnter: g,
        __preventFocus: b,
        __stopPropagation: C,
        withCellSpacing: E,
        size: _,
        ...D
      } = n,
      L = ue({
        name: c || "MonthsList",
        classes: $w,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "monthsList",
      }),
      N = on(),
      M = qP(u),
      B = KP(M, m, p, h),
      V = M.map((A, j) => {
        const P = A.map((T, R) => {
          const k = h == null ? void 0 : h(T),
            $ = Q(T).isSame(B, "month");
          return S.jsx(
            "td",
            {
              ...L("monthsListCell"),
              "data-with-spacing": E || void 0,
              children: S.jsx(Da, {
                ...L("monthsListControl"),
                size: _,
                unstyled: l,
                __staticSelector: c || "MonthsList",
                "data-mantine-stop-propagation": C || void 0,
                disabled: jw(T, m, p),
                ref: (O) => (x == null ? void 0 : x(j, R, O)),
                ...k,
                onKeyDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onKeyDown) == null ||
                    I.call(k, O),
                    y == null || y(O, { rowIndex: j, cellIndex: R, date: T });
                },
                onClick: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onClick) == null || I.call(k, O),
                    v == null || v(O, T);
                },
                onMouseEnter: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseEnter) == null ||
                    I.call(k, O),
                    g == null || g(O, T);
                },
                onMouseDown: (O) => {
                  var I;
                  (I = k == null ? void 0 : k.onMouseDown) == null ||
                    I.call(k, O),
                    b && O.preventDefault();
                },
                tabIndex: b || !$ ? -1 : 0,
                children: Q(T).locale(N.getLocale(f)).format(d),
              }),
            },
            R
          );
        });
        return S.jsx("tr", { ...L("monthsListRow"), children: P }, j);
      });
    return S.jsx(G, {
      component: "table",
      ref: t,
      size: _,
      ...L("monthsList"),
      ...D,
      children: S.jsx("tbody", { children: V }),
    });
  });
Ta.classes = $w;
Ta.displayName = "@mantine/dates/MonthsList";
var Lw = {
  calendarHeader: "m_730a79ed",
  calendarHeaderLevel: "m_f6645d97",
  calendarHeaderControl: "m_2351eeb0",
  calendarHeaderControlIcon: "m_367dc749",
};
const XP = {
    nextDisabled: !1,
    previousDisabled: !1,
    hasNextLevel: !0,
    withNext: !0,
    withPrevious: !0,
  },
  QP = (e, { size: t }) => ({
    calendarHeader: {
      "--dch-control-size": Ee(t, "dch-control-size"),
      "--dch-fz": et(t),
    },
  }),
  mr = X((e, t) => {
    const n = U("CalendarHeader", XP, e),
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
        label: x,
        nextDisabled: y,
        previousDisabled: v,
        hasNextLevel: g,
        levelControlAriaLabel: b,
        withNext: C,
        withPrevious: E,
        __staticSelector: _,
        __preventFocus: D,
        __stopPropagation: L,
        ...N
      } = n,
      M = ue({
        name: _ || "CalendarHeader",
        classes: Lw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: QP,
        rootSelector: "calendarHeader",
      }),
      B = D ? (V) => V.preventDefault() : void 0;
    return S.jsxs(G, {
      ...M("calendarHeader"),
      ref: t,
      ...N,
      children: [
        E &&
          S.jsx(Dn, {
            ...M("calendarHeaderControl"),
            "data-direction": "previous",
            "aria-label": f,
            onClick: p,
            unstyled: l,
            onMouseDown: B,
            disabled: v,
            "data-disabled": v || void 0,
            tabIndex: D || v ? -1 : 0,
            "data-mantine-stop-propagation": L || void 0,
            children:
              u ||
              S.jsx(Vu, {
                ...M("calendarHeaderControlIcon"),
                "data-direction": "previous",
                size: "45%",
              }),
          }),
        S.jsx(Dn, {
          component: g ? "button" : "div",
          ...M("calendarHeaderLevel"),
          onClick: g ? h : void 0,
          unstyled: l,
          onMouseDown: g ? B : void 0,
          disabled: !g,
          "data-static": !g || void 0,
          "aria-label": b,
          tabIndex: D || !g ? -1 : 0,
          "data-mantine-stop-propagation": L || void 0,
          children: x,
        }),
        C &&
          S.jsx(Dn, {
            ...M("calendarHeaderControl"),
            "data-direction": "next",
            "aria-label": d,
            onClick: m,
            unstyled: l,
            onMouseDown: B,
            disabled: y,
            "data-disabled": y || void 0,
            tabIndex: D || y ? -1 : 0,
            "data-mantine-stop-propagation": L || void 0,
            children:
              c ||
              S.jsx(Vu, {
                ...M("calendarHeaderControlIcon"),
                "data-direction": "next",
                size: "45%",
              }),
          }),
      ],
    });
  });
mr.classes = Lw;
mr.displayName = "@mantine/dates/CalendarHeader";
function JP(e) {
  const t = Nw(e);
  return [t[0][0], t[3][0]];
}
const ZP = { decadeLabelFormat: "YYYY" },
  Na = X((e, t) => {
    const n = U("DecadeLevel", ZP, e),
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
        previousIcon: x,
        nextLabel: y,
        previousLabel: v,
        onNext: g,
        onPrevious: b,
        nextDisabled: C,
        previousDisabled: E,
        levelControlAriaLabel: _,
        withNext: D,
        withPrevious: L,
        decadeLabelFormat: N,
        classNames: M,
        styles: B,
        unstyled: V,
        __staticSelector: A,
        __stopPropagation: j,
        size: P,
        ...T
      } = n,
      R = on(),
      [k, $] = JP(r),
      O = {
        __staticSelector: A || "DecadeLevel",
        classNames: M,
        styles: B,
        unstyled: V,
        size: P,
      },
      I = typeof C == "boolean" ? C : i ? !Q($).endOf("year").isBefore(i) : !1,
      K = typeof E == "boolean" ? E : s ? !Q(k).startOf("year").isAfter(s) : !1,
      J = (ee, ne) =>
        Q(ee)
          .locale(o || R.locale)
          .format(ne);
    return S.jsxs(G, {
      "data-decade-level": !0,
      size: P,
      ref: t,
      ...T,
      children: [
        S.jsx(mr, {
          label: typeof N == "function" ? N(k, $) : `${J(k, N)} – ${J($, N)}`,
          __preventFocus: p,
          __stopPropagation: j,
          nextIcon: h,
          previousIcon: x,
          nextLabel: y,
          previousLabel: v,
          onNext: g,
          onPrevious: b,
          nextDisabled: I,
          previousDisabled: K,
          hasNextLevel: !1,
          levelControlAriaLabel: _,
          withNext: D,
          withPrevious: L,
          ...O,
        }),
        S.jsx(Pa, {
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
Na.classes = { ...Pa.classes, ...mr.classes };
Na.displayName = "@mantine/dates/DecadeLevel";
const eT = { yearLabelFormat: "YYYY" },
  Oa = X((e, t) => {
    const n = U("YearLevel", eT, e),
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
        previousIcon: x,
        nextLabel: y,
        previousLabel: v,
        onNext: g,
        onPrevious: b,
        onLevelClick: C,
        nextDisabled: E,
        previousDisabled: _,
        hasNextLevel: D,
        levelControlAriaLabel: L,
        withNext: N,
        withPrevious: M,
        yearLabelFormat: B,
        __staticSelector: V,
        __stopPropagation: A,
        size: j,
        classNames: P,
        styles: T,
        unstyled: R,
        ...k
      } = n,
      $ = on(),
      O = {
        __staticSelector: V || "YearLevel",
        classNames: P,
        styles: T,
        unstyled: R,
        size: j,
      },
      I = typeof E == "boolean" ? E : i ? !Q(r).endOf("year").isBefore(i) : !1,
      K = typeof _ == "boolean" ? _ : s ? !Q(r).startOf("year").isAfter(s) : !1;
    return S.jsxs(G, {
      "data-year-level": !0,
      size: j,
      ref: t,
      ...k,
      children: [
        S.jsx(mr, {
          label:
            typeof B == "function"
              ? B(r)
              : Q(r)
                  .locale(o || $.locale)
                  .format(B),
          __preventFocus: p,
          __stopPropagation: A,
          nextIcon: h,
          previousIcon: x,
          nextLabel: y,
          previousLabel: v,
          onNext: g,
          onPrevious: b,
          onLevelClick: C,
          nextDisabled: I,
          previousDisabled: K,
          hasNextLevel: D,
          levelControlAriaLabel: L,
          withNext: N,
          withPrevious: M,
          ...O,
        }),
        S.jsx(Ta, {
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
Oa.classes = { ...mr.classes, ...Ta.classes };
Oa.displayName = "@mantine/dates/YearLevel";
const tT = { monthLabelFormat: "MMMM YYYY" },
  ja = X((e, t) => {
    const n = U("MonthLevel", tT, e),
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
        __getDayRef: x,
        __onDayKeyDown: y,
        __onDayClick: v,
        __onDayMouseEnter: g,
        withCellSpacing: b,
        __preventFocus: C,
        __stopPropagation: E,
        nextIcon: _,
        previousIcon: D,
        nextLabel: L,
        previousLabel: N,
        onNext: M,
        onPrevious: B,
        onLevelClick: V,
        nextDisabled: A,
        previousDisabled: j,
        hasNextLevel: P,
        levelControlAriaLabel: T,
        withNext: R,
        withPrevious: k,
        monthLabelFormat: $,
        classNames: O,
        styles: I,
        unstyled: K,
        __staticSelector: J,
        size: ee,
        static: ne,
        ...te
      } = n,
      me = on(),
      oe = {
        __staticSelector: J || "MonthLevel",
        classNames: O,
        styles: I,
        unstyled: K,
        size: ee,
      },
      le =
        typeof A == "boolean" ? A : d ? !Q(r).endOf("month").isBefore(d) : !1,
      Z =
        typeof j == "boolean" ? j : u ? !Q(r).startOf("month").isAfter(u) : !1;
    return S.jsxs(G, {
      "data-month-level": !0,
      size: ee,
      ref: t,
      ...te,
      children: [
        S.jsx(mr, {
          label:
            typeof $ == "function"
              ? $(r)
              : Q(r)
                  .locale(o || me.locale)
                  .format($),
          __preventFocus: C,
          __stopPropagation: E,
          nextIcon: _,
          previousIcon: D,
          nextLabel: L,
          previousLabel: N,
          onNext: M,
          onPrevious: B,
          onLevelClick: V,
          nextDisabled: le,
          previousDisabled: Z,
          hasNextLevel: P,
          levelControlAriaLabel: T,
          withNext: R,
          withPrevious: k,
          ...oe,
        }),
        S.jsx(Ra, {
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
          __getDayRef: x,
          __onDayKeyDown: y,
          __onDayClick: v,
          __onDayMouseEnter: g,
          __preventFocus: C,
          __stopPropagation: E,
          static: ne,
          withCellSpacing: b,
          ...oe,
        }),
      ],
    });
  });
ja.classes = { ...Ra.classes, ...mr.classes };
ja.displayName = "@mantine/dates/MonthLevel";
var Aw = { levelsGroup: "m_30b26e33" };
const nT = {},
  hr = X((e, t) => {
    const n = U("LevelsGroup", nT, e),
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
      d = ue({
        name: c || "LevelsGroup",
        classes: Aw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "levelsGroup",
      });
    return S.jsx(G, { ref: t, ...d("levelsGroup"), ...u });
  });
hr.classes = Aw;
hr.displayName = "@mantine/dates/LevelsGroup";
const rT = { numberOfColumns: 1 },
  $a = X((e, t) => {
    const n = U("DecadeLevelGroup", rT, e),
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
        previousLabel: x,
        onNext: y,
        onPrevious: v,
        nextDisabled: g,
        previousDisabled: b,
        classNames: C,
        styles: E,
        unstyled: _,
        __staticSelector: D,
        __stopPropagation: L,
        numberOfColumns: N,
        levelControlAriaLabel: M,
        decadeLabelFormat: B,
        size: V,
        vars: A,
        ...j
      } = n,
      P = w.useRef([]),
      T = Array(N)
        .fill(0)
        .map((R, k) => {
          const $ = Q(r)
            .add(k * 10, "years")
            .toDate();
          return S.jsx(
            Na,
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
                sp({
                  levelIndex: k,
                  rowIndex: I.rowIndex,
                  cellIndex: I.cellIndex,
                  event: O,
                  controlsRef: P,
                }),
              __getControlRef: (O, I, K) => {
                Array.isArray(P.current[k]) || (P.current[k] = []),
                  Array.isArray(P.current[k][O]) || (P.current[k][O] = []),
                  (P.current[k][O][I] = K);
              },
              levelControlAriaLabel: typeof M == "function" ? M($) : M,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              __stopPropagation: L,
              nextIcon: m,
              previousIcon: p,
              nextLabel: h,
              previousLabel: x,
              onNext: y,
              onPrevious: v,
              nextDisabled: g,
              previousDisabled: b,
              getYearControlProps: a,
              __staticSelector: D || "DecadeLevelGroup",
              classNames: C,
              styles: E,
              unstyled: _,
              withCellSpacing: d,
            },
            k
          );
        });
    return S.jsx(hr, {
      classNames: C,
      styles: E,
      __staticSelector: D || "DecadeLevelGroup",
      ref: t,
      size: V,
      unstyled: _,
      ...j,
      children: T,
    });
  });
$a.classes = { ...hr.classes, ...Na.classes };
$a.displayName = "@mantine/dates/DecadeLevelGroup";
const oT = { numberOfColumns: 1 },
  La = X((e, t) => {
    const n = U("YearLevelGroup", oT, e),
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
        previousLabel: x,
        onNext: y,
        onPrevious: v,
        onLevelClick: g,
        nextDisabled: b,
        previousDisabled: C,
        hasNextLevel: E,
        classNames: _,
        styles: D,
        unstyled: L,
        __staticSelector: N,
        __stopPropagation: M,
        numberOfColumns: B,
        levelControlAriaLabel: V,
        yearLabelFormat: A,
        size: j,
        vars: P,
        ...T
      } = n,
      R = w.useRef([]),
      k = Array(B)
        .fill(0)
        .map(($, O) => {
          const I = Q(r).add(O, "years").toDate();
          return S.jsx(
            Oa,
            {
              size: j,
              monthsListFormat: l,
              year: I,
              withNext: O === B - 1,
              withPrevious: O === 0,
              yearLabelFormat: A,
              __stopPropagation: M,
              __onControlClick: c,
              __onControlMouseEnter: u,
              __onControlKeyDown: (K, J) =>
                sp({
                  levelIndex: O,
                  rowIndex: J.rowIndex,
                  cellIndex: J.cellIndex,
                  event: K,
                  controlsRef: R,
                }),
              __getControlRef: (K, J, ee) => {
                Array.isArray(R.current[O]) || (R.current[O] = []),
                  Array.isArray(R.current[O][K]) || (R.current[O][K] = []),
                  (R.current[O][K][J] = ee);
              },
              levelControlAriaLabel: typeof V == "function" ? V(I) : V,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              nextIcon: m,
              previousIcon: p,
              nextLabel: h,
              previousLabel: x,
              onNext: y,
              onPrevious: v,
              onLevelClick: g,
              nextDisabled: b,
              previousDisabled: C,
              hasNextLevel: E,
              getMonthControlProps: a,
              classNames: _,
              styles: D,
              unstyled: L,
              __staticSelector: N || "YearLevelGroup",
              withCellSpacing: d,
            },
            O
          );
        });
    return S.jsx(hr, {
      classNames: _,
      styles: D,
      __staticSelector: N || "YearLevelGroup",
      ref: t,
      size: j,
      unstyled: L,
      ...T,
      children: k,
    });
  });
La.classes = { ...Oa.classes, ...hr.classes };
La.displayName = "@mantine/dates/YearLevelGroup";
const sT = { numberOfColumns: 1 },
  Aa = X((e, t) => {
    const n = U("MonthLevelGroup", sT, e),
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
        __onDayClick: x,
        __onDayMouseEnter: y,
        withCellSpacing: v,
        __preventFocus: g,
        nextIcon: b,
        previousIcon: C,
        nextLabel: E,
        previousLabel: _,
        onNext: D,
        onPrevious: L,
        onLevelClick: N,
        nextDisabled: M,
        previousDisabled: B,
        hasNextLevel: V,
        classNames: A,
        styles: j,
        unstyled: P,
        numberOfColumns: T,
        levelControlAriaLabel: R,
        monthLabelFormat: k,
        __staticSelector: $,
        __stopPropagation: O,
        size: I,
        static: K,
        vars: J,
        ...ee
      } = n,
      ne = w.useRef([]),
      te = Array(T)
        .fill(0)
        .map((me, oe) => {
          const le = Q(r).add(oe, "months").toDate();
          return S.jsx(
            ja,
            {
              month: le,
              withNext: oe === T - 1,
              withPrevious: oe === 0,
              monthLabelFormat: k,
              __stopPropagation: O,
              __onDayClick: x,
              __onDayMouseEnter: y,
              __onDayKeyDown: (Z, ge) =>
                sp({
                  levelIndex: oe,
                  rowIndex: ge.rowIndex,
                  cellIndex: ge.cellIndex,
                  event: Z,
                  controlsRef: ne,
                }),
              __getDayRef: (Z, ge, ce) => {
                Array.isArray(ne.current[oe]) || (ne.current[oe] = []),
                  Array.isArray(ne.current[oe][Z]) || (ne.current[oe][Z] = []),
                  (ne.current[oe][Z][ge] = ce);
              },
              levelControlAriaLabel: typeof R == "function" ? R(le) : R,
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
              __preventFocus: g,
              nextIcon: b,
              previousIcon: C,
              nextLabel: E,
              previousLabel: _,
              onNext: D,
              onPrevious: L,
              onLevelClick: N,
              nextDisabled: M,
              previousDisabled: B,
              hasNextLevel: V,
              classNames: A,
              styles: j,
              unstyled: P,
              __staticSelector: $ || "MonthLevelGroup",
              size: I,
              static: K,
              withCellSpacing: v,
            },
            oe
          );
        });
    return S.jsx(hr, {
      classNames: A,
      styles: j,
      __staticSelector: $ || "MonthLevelGroup",
      ref: t,
      size: I,
      ...ee,
      children: te,
    });
  });
Aa.classes = { ...hr.classes, ...ja.classes };
Aa.displayName = "@mantine/dates/MonthLevelGroup";
const zh = (e) => (e === "range" ? [null, null] : e === "multiple" ? [] : null);
function Fw({
  type: e,
  value: t,
  defaultValue: n,
  onChange: r,
  applyTimezone: o = !0,
}) {
  const s = w.useRef(e),
    i = on(),
    [l, a, c] = jn({
      value: So("add", t, i.getTimezone(), !o),
      defaultValue: So("add", n, i.getTimezone(), !o),
      finalValue: zh(e),
      onChange: (d) => {
        r == null || r(So("remove", d, i.getTimezone(), !o));
      },
    });
  let u = l;
  return (
    s.current !== e &&
      ((s.current = e), t === void 0 && ((u = n !== void 0 ? n : zh(e)), a(u))),
    [u, a, c]
  );
}
function Ac(e, t) {
  return e ? (e === "month" ? 0 : e === "year" ? 1 : 2) : t || 0;
}
function iT(e) {
  return e === 0 ? "month" : e === 1 ? "year" : "decade";
}
function cs(e, t, n) {
  return iT(Bb(Ac(e, 0), Ac(t, 0), Ac(n, 2)));
}
const lT = {
    maxLevel: "decade",
    minLevel: "month",
    __updateDateOnYearSelect: !0,
    __updateDateOnMonthSelect: !0,
  },
  Fa = X((e, t) => {
    const n = U("Calendar", lT, e),
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
        onMonthSelect: x,
        onYearMouseEnter: y,
        onMonthMouseEnter: v,
        __updateDateOnYearSelect: g,
        __updateDateOnMonthSelect: b,
        firstDayOfWeek: C,
        weekdayFormat: E,
        weekendDays: _,
        getDayProps: D,
        excludeDate: L,
        renderDay: N,
        hideOutsideDates: M,
        hideWeekdays: B,
        getDayAriaLabel: V,
        monthLabelFormat: A,
        nextIcon: j,
        previousIcon: P,
        __onDayClick: T,
        __onDayMouseEnter: R,
        withCellSpacing: k,
        monthsListFormat: $,
        getMonthControlProps: O,
        yearLabelFormat: I,
        yearsListFormat: K,
        getYearControlProps: J,
        decadeLabelFormat: ee,
        classNames: ne,
        styles: te,
        unstyled: me,
        minDate: oe,
        maxDate: le,
        locale: Z,
        __staticSelector: ge,
        size: ce,
        __preventFocus: se,
        __stopPropagation: je,
        onNextDecade: Ie,
        onPreviousDecade: ye,
        onNextYear: rt,
        onPreviousYear: Te,
        onNextMonth: Le,
        onPreviousMonth: W,
        static: re,
        __timezoneApplied: ie,
        ...xe
      } = n,
      { resolvedClassNames: Ae, resolvedStyles: Pt } = zo({
        classNames: ne,
        styles: te,
        props: n,
      }),
      [be, Fe] = jn({
        value: l ? cs(l, s, o) : void 0,
        defaultValue: i ? cs(i, s, o) : void 0,
        finalValue: cs(void 0, s, o),
        onChange: a,
      }),
      [ln, qe] = Fw({
        type: "default",
        value: c,
        defaultValue: u,
        onChange: d,
        applyTimezone: !ie,
      }),
      Tt = {
        __staticSelector: ge || "Calendar",
        styles: Pt,
        classNames: Ae,
        unstyled: me,
        size: ce,
      },
      gr = on(),
      an = m || f || 1,
      Ht = ln || So("add", new Date(), gr.getTimezone()),
      Wa = () => {
        const ke = Q(Ht).add(an, "month").toDate();
        Le == null || Le(ke), qe(ke);
      },
      Ut = () => {
        const ke = Q(Ht).subtract(an, "month").toDate();
        W == null || W(ke), qe(ke);
      },
      Go = () => {
        const ke = Q(Ht).add(an, "year").toDate();
        rt == null || rt(ke), qe(ke);
      },
      Ya = () => {
        const ke = Q(Ht).subtract(an, "year").toDate();
        Te == null || Te(ke), qe(ke);
      },
      ci = () => {
        const ke = Q(Ht)
          .add(10 * an, "year")
          .toDate();
        Ie == null || Ie(ke), qe(ke);
      },
      Xo = () => {
        const ke = Q(Ht)
          .subtract(10 * an, "year")
          .toDate();
        ye == null || ye(ke), qe(ke);
      };
    return S.jsxs(G, {
      ref: t,
      size: ce,
      "data-calendar": !0,
      ...xe,
      children: [
        be === "month" &&
          S.jsx(Aa, {
            month: Ht,
            minDate: oe,
            maxDate: le,
            firstDayOfWeek: C,
            weekdayFormat: E,
            weekendDays: _,
            getDayProps: D,
            excludeDate: L,
            renderDay: N,
            hideOutsideDates: M,
            hideWeekdays: B,
            getDayAriaLabel: V,
            onNext: Wa,
            onPrevious: Ut,
            hasNextLevel: o !== "month",
            onLevelClick: () => Fe("year"),
            numberOfColumns: f,
            locale: Z,
            levelControlAriaLabel: p == null ? void 0 : p.monthLevelControl,
            nextLabel: p == null ? void 0 : p.nextMonth,
            nextIcon: j,
            previousLabel: p == null ? void 0 : p.previousMonth,
            previousIcon: P,
            monthLabelFormat: A,
            __onDayClick: T,
            __onDayMouseEnter: R,
            __preventFocus: se,
            __stopPropagation: je,
            static: re,
            withCellSpacing: k,
            ...Tt,
          }),
        be === "year" &&
          S.jsx(La, {
            year: Ht,
            numberOfColumns: f,
            minDate: oe,
            maxDate: le,
            monthsListFormat: $,
            getMonthControlProps: O,
            locale: Z,
            onNext: Go,
            onPrevious: Ya,
            hasNextLevel: o !== "month" && o !== "year",
            onLevelClick: () => Fe("decade"),
            levelControlAriaLabel: p == null ? void 0 : p.yearLevelControl,
            nextLabel: p == null ? void 0 : p.nextYear,
            nextIcon: j,
            previousLabel: p == null ? void 0 : p.previousYear,
            previousIcon: P,
            yearLabelFormat: I,
            __onControlMouseEnter: v,
            __onControlClick: (ke, Nt) => {
              b && qe(Nt), Fe(cs("month", s, o)), x == null || x(Nt);
            },
            __preventFocus: se,
            __stopPropagation: je,
            withCellSpacing: k,
            ...Tt,
          }),
        be === "decade" &&
          S.jsx($a, {
            decade: Ht,
            minDate: oe,
            maxDate: le,
            yearsListFormat: K,
            getYearControlProps: J,
            locale: Z,
            onNext: ci,
            onPrevious: Xo,
            numberOfColumns: f,
            nextLabel: p == null ? void 0 : p.nextDecade,
            nextIcon: j,
            previousLabel: p == null ? void 0 : p.previousDecade,
            previousIcon: P,
            decadeLabelFormat: ee,
            __onControlMouseEnter: y,
            __onControlClick: (ke, Nt) => {
              g && qe(Nt), Fe(cs("year", s, o)), h == null || h(Nt);
            },
            __preventFocus: se,
            __stopPropagation: je,
            withCellSpacing: k,
            ...Tt,
          }),
      ],
    });
  });
Fa.classes = { ...$a.classes, ...La.classes, ...Aa.classes };
Fa.displayName = "@mantine/dates/Calendar";
function Bh(e, t) {
  const n = [...t].sort((r, o) => r.getTime() - o.getTime());
  return (
    Q(n[0]).startOf("day").subtract(1, "ms").isBefore(e) &&
    Q(n[1]).endOf("day").add(1, "ms").isAfter(e)
  );
}
function aT({
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
  const [c, u] = Fw({
      type: e,
      value: n,
      defaultValue: r,
      onChange: o,
      applyTimezone: a,
    }),
    [d, f] = w.useState(e === "range" && c[0] && !c[1] ? c[0] : null),
    [m, p] = w.useState(null),
    h = (E) => {
      if (e === "range") {
        if (d instanceof Date && !c[1]) {
          if (Q(E).isSame(d, t) && !s) {
            f(null), p(null), u([null, null]);
            return;
          }
          const _ = [E, d];
          _.sort((D, L) => D.getTime() - L.getTime()), u(_), p(null), f(null);
          return;
        }
        if (c[0] && !c[1] && Q(E).isSame(c[0], t) && !s) {
          f(null), p(null), u([null, null]);
          return;
        }
        u([E, null]), p(null), f(E);
        return;
      }
      if (e === "multiple") {
        c.some((_) => Q(_).isSame(E, t))
          ? u(c.filter((_) => !Q(_).isSame(E, t)))
          : u([...c, E]);
        return;
      }
      c && i && Q(E).isSame(c, t) ? u(null) : u(E);
    },
    x = (E) =>
      d instanceof Date && m instanceof Date
        ? Bh(E, [m, d])
        : c[0] instanceof Date && c[1] instanceof Date
        ? Bh(E, c)
        : !1,
    y =
      e === "range"
        ? (E) => {
            l == null || l(E), p(null);
          }
        : l,
    v = (E) =>
      c[0] instanceof Date && Q(E).isSame(c[0], t)
        ? !(m && Q(m).isBefore(c[0]))
        : !1,
    g = (E) =>
      c[1] instanceof Date
        ? Q(E).isSame(c[1], t)
        : !(c[0] instanceof Date) || !m
        ? !1
        : Q(m).isBefore(c[0]) && Q(E).isSame(c[0], t),
    b = (E) => {
      if (e === "range")
        return {
          selected: c.some((D) => D && Q(D).isSame(E, t)),
          inRange: x(E),
          firstInRange: v(E),
          lastInRange: g(E),
          "data-autofocus": (!!c[0] && Q(c[0]).isSame(E, t)) || void 0,
        };
      if (e === "multiple")
        return {
          selected: c.some((D) => D && Q(D).isSame(E, t)),
          "data-autofocus": (!!c[0] && Q(c[0]).isSame(E, t)) || void 0,
        };
      const _ = Q(c).isSame(E, t);
      return { selected: _, "data-autofocus": _ || void 0 };
    },
    C = e === "range" && d ? p : () => {};
  return (
    w.useEffect(() => {
      e === "range" && !c[0] && !c[1] && f(null);
    }, [n]),
    {
      onDateChange: h,
      onRootMouseLeave: y,
      onHoveredDateChange: C,
      getControlProps: b,
      _value: c,
      setValue: u,
    }
  );
}
const cT = { type: "default", defaultLevel: "month", numberOfColumns: 1 },
  ap = X((e, t) => {
    const n = U("DatePicker", cT, e),
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
        hideOutsideDates: x,
        __onDayMouseEnter: y,
        __onDayClick: v,
        __timezoneApplied: g,
        ...b
      } = n,
      {
        onDateChange: C,
        onRootMouseLeave: E,
        onHoveredDateChange: _,
        getControlProps: D,
      } = aT({
        type: i,
        level: "day",
        allowDeselect: m,
        allowSingleDateInRange: f,
        value: a,
        defaultValue: l,
        onChange: c,
        onMouseLeave: p,
        applyTimezone: !g,
      }),
      { resolvedClassNames: L, resolvedStyles: N } = zo({
        classNames: r,
        styles: o,
        props: n,
      }),
      M = on();
    return S.jsx(Fa, {
      ref: t,
      minLevel: "month",
      classNames: L,
      styles: N,
      __staticSelector: u || "DatePicker",
      onMouseLeave: E,
      numberOfColumns: h,
      hideOutsideDates: x ?? h !== 1,
      __onDayMouseEnter: (B, V) => {
        _(V), y == null || y(B, V);
      },
      __onDayClick: (B, V) => {
        C(V), v == null || v(B, V);
      },
      getDayProps: (B) => ({ ...D(B), ...(d == null ? void 0 : d(B)) }),
      ...b,
      date: So("add", b.date, M.getTimezone(), g),
      __timezoneApplied: !0,
    });
  });
ap.classes = Fa.classes;
ap.displayName = "@mantine/dates/DatePicker";
const cp = (e) => {
  const { title: t, description: n, form: r, options: o, field_id: s } = e,
    i = o.map((u) => u.option),
    [l, a] = w.useState(o.at(0));
  w.useEffect(() => {
    r.setFieldValue(s, l);
  }, []);
  const c = (u) => {
    a(u.value), r.setFieldValue(s, u.value);
  };
  return S.jsx(Jf, {
    label: t,
    description: n,
    data: i,
    defaultValue: i.at(0),
    onChange: (u, d) => c(d),
    searchable: !0,
  });
};
cp.defaultProps = {};
cp.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
  options: Y.array,
};
const up = (e) => {
  const { title: t, description: n, form: r, options: o, field_id: s } = e,
    i = new Date(),
    l = new Date();
  l.setFullYear(i.getFullYear() + 1);
  const [a, c] = w.useState(l),
    [u, d] = w.useState(a),
    [f, { open: m, close: p }] = _l(!1);
  w.useEffect(() => {
    localStorage.setItem("embargo", a.toISOString().split("T")[0]);
  }, [a]);
  const h = () =>
      S.jsx(Kn, {
        children: S.jsx(pn, {
          onClick: m,
          variant: "default",
          children: "Change embargo date",
        }),
      }),
    x = (v) => {
      const g = new Date(i);
      g.setMonth(i.getMonth() + v), c(g);
    },
    y = () =>
      a.getDate().toString() +
      " " +
      a.toLocaleString("default", { month: "long" }) +
      " " +
      a.getFullYear().toString();
  return S.jsxs("div", {
    children: [
      S.jsxs("header", {
        className: "",
        children: [
          S.jsx("h2", { className: "", children: t }),
          S.jsx("h4", { children: y() }),
          h(),
        ],
      }),
      S.jsxs(rn, {
        opened: f,
        onClose: p,
        title: "Select embargo date",
        centered: !0,
        children: [
          S.jsxs(Kn, {
            justify: "center",
            children: [
              S.jsx(pn, {
                variant: "default",
                onClick: () => {
                  x(6);
                },
                children: "6 months",
              }),
              S.jsx(pn, {
                variant: "default",
                onClick: () => {
                  x(12);
                },
                children: "12 months",
              }),
              S.jsx(pn, {
                variant: "default",
                onClick: () => {
                  x(18);
                },
                children: "18 months",
              }),
            ],
          }),
          S.jsx(Kn, {
            justify: "center",
            children: S.jsxs("p", {
              children: ["New Embargo: ", S.jsx("b", { children: y() })],
            }),
          }),
          S.jsx(Kn, {
            justify: "center",
            children: S.jsx(ap, { defaultDate: i, value: a, onChange: c }),
          }),
          S.jsxs(Kn, {
            justify: "center",
            children: [
              S.jsx(pn, {
                variant: "default",
                onClick: () => {
                  d(a), p();
                },
                children: "Accept",
              }),
              S.jsx(pn, {
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
up.defaultProps = {};
up.propTypes = {
  title: Y.string.isRequired,
  description: Y.string,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
  options: Y.array,
};
const Mw = "",
  uT = "generic",
  dT = Mw + "/profile/profile/",
  Iw = Mw + "/api/submissions/",
  fT = "https://helpdesk.gfbio.org/browse/",
  pT = (e) => {
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
              S.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: S.jsxs("a", {
                    children: [
                      S.jsx("i", { className: "", "aria-hidden": "true" }),
                      "Submission Id: ",
                      S.jsx("br", {}),
                      S.jsx("div", { className: "", children: a }),
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
              S.jsxs("div", {
                children: [
                  S.jsx("i", { className: "", "aria-hidden": "true" }),
                  "ENA Accession:",
                  S.jsx("br", {}),
                ],
              })
            ),
            l.accessionId.forEach((f) => {
              c.push(
                S.jsx(
                  "li",
                  {
                    className: "list-group-item",
                    children: S.jsxs("a", {
                      children: [
                        S.jsxs("div", {
                          className: "",
                          children: [
                            S.jsx("span", {
                              style: { fontWeight: 600 },
                              children: "ID",
                            }),
                            ": ",
                            f.pid,
                          ],
                        }),
                        S.jsxs("div", {
                          className: "",
                          style: { marginTop: 0 },
                          children: [
                            S.jsx("span", {
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
              S.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: S.jsxs("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "external",
                    href: fT + l.issue,
                    children: [
                      S.jsx("i", { className: "", "aria-hidden": "true" }),
                      "Ticket:",
                      S.jsx("br", {}),
                      S.jsx("div", { className: "", children: l.issue }),
                    ],
                  }),
                },
                u
              )
            ),
            u++),
          l.readOnly &&
            (c.push(
              S.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: S.jsxs("a", {
                    children: [
                      S.jsx("i", { className: "", "aria-hidden": "true" }),
                      "Status: ",
                      S.jsx("br", {}),
                      S.jsx("div", {
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
            S.jsx(
              "li",
              {
                className: "list-group-item",
                children: S.jsxs("a", {
                  href: d,
                  className: "external",
                  children: [
                    S.jsx("i", { className: "", "aria-hidden": "true" }),
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
    return S.jsxs("div", {
      className: "",
      children: [
        S.jsxs("header", {
          className: "",
          children: [
            S.jsx("h2", { className: "", children: t }),
            S.jsx("p", { className: "" }),
          ],
        }),
        S.jsx("div", {
          className: "",
          children: S.jsx("ul", {
            className: "list-group list-group-flush",
            children: i(),
          }),
        }),
      ],
    });
  },
  dp = (e) => {
    const {
        title: t,
        description: n,
        form: r,
        options: o,
        field_id: s,
        default_value: i,
      } = e,
      l = i ? i.split(",") : [];
    return (
      r.setFieldValue(s, l),
      S.jsx("div", {
        children: S.jsx(
          Us.Group,
          {
            label: t,
            description: n,
            ...r.getInputProps(s),
            children: o.map(function (a) {
              return S.jsx(Us, { value: a, label: a });
            }),
          },
          r.key(s)
        ),
      })
    );
  };
dp.defaultProps = { default_value: "" };
dp.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
  placeholder: Y.string,
  default_value: Y.string,
};
const fp = (e) => {
  const {
      title: t,
      description: n,
      form: r,
      options: o,
      field_id: s,
      default_value: i,
    } = e,
    l = i ? i.split(",") : [],
    [a, c] = w.useState(l);
  r.setFieldValue(s, a);
  const u = (f) => {
      c(f);
    },
    d = o.map((f) => ({ label: f, value: f }));
  return S.jsx("div", {
    children: S.jsx(Qf, {
      defaultValue: l,
      data: d,
      label: t,
      description: n,
      placeholder: "Select all matching",
      onChange: (f) => {
        u(f);
      },
    }),
  });
};
fp.defaultProps = { default_value: "" };
fp.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
  placeholder: Y.string,
  default_value: Y.string,
};
const pp = (e) => {
  const { title: t, description: n, form: r, field_id: o, placeholder: s } = e;
  return S.jsx(
    Yf,
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
pp.defaultProps = { placeholder: "" };
pp.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
  placeholder: Y.string,
};
const Fl = (e) => {
  const {
    title: t,
    description: n,
    mandatory: r,
    form: o,
    field_id: s,
    placeholder: i,
  } = e;
  return S.jsx(
    ka,
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
Fl.defaultProps = { placeholder: "" };
Fl.propTypes = {
  title: Y.string.isRequired,
  description: Y.string.isRequired,
  mandatory: Y.bool.isRequired,
  form: Y.object.isRequired,
  field_id: Y.string.isRequired,
  placeholder: Y.string,
};
const zw = ({ field: e, form: t }) => {
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
      return S.jsx(Fl, { ...n });
    case "text-area":
      return S.jsx(pp, { ...n });
    case "select-field":
      return S.jsx(cp, { ...n });
    case "file-upload":
      return S.jsx(op, { ...n });
    case "collapsible-selector":
      return S.jsx(Zf, { ...n });
    case "info-box":
      return S.jsx(pT, { ...n });
    case "multiselect-checkboxes":
      return S.jsx(dp, { ...n });
    case "multiselect-dropdown":
      return S.jsx(fp, { ...n });
    case "embargo-date-picker":
      return S.jsx(up, { ...n });
    case "data-url-field":
      return S.jsx(ep, { ...n });
    default:
      return S.jsx(Fl, { ...n });
  }
};
zw.propTypes = { field: Y.object.isRequired, form: Y.object.isRequired };
function Bw(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: mT } = Object.prototype,
  { getPrototypeOf: mp } = Object,
  Ma = ((e) => (t) => {
    const n = mT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  sn = (e) => ((e = e.toLowerCase()), (t) => Ma(t) === e),
  Ia = (e) => (t) => typeof t === e,
  { isArray: Ko } = Array,
  Ks = Ia("undefined");
function hT(e) {
  return (
    e !== null &&
    !Ks(e) &&
    e.constructor !== null &&
    !Ks(e.constructor) &&
    Ft(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Vw = sn("ArrayBuffer");
function gT(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Vw(e.buffer)),
    t
  );
}
const yT = Ia("string"),
  Ft = Ia("function"),
  Hw = Ia("number"),
  za = (e) => e !== null && typeof e == "object",
  vT = (e) => e === !0 || e === !1,
  el = (e) => {
    if (Ma(e) !== "object") return !1;
    const t = mp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  wT = sn("Date"),
  ST = sn("File"),
  xT = sn("Blob"),
  bT = sn("FileList"),
  CT = (e) => za(e) && Ft(e.pipe),
  ET = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ft(e.append) &&
          ((t = Ma(e)) === "formdata" ||
            (t === "object" &&
              Ft(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  kT = sn("URLSearchParams"),
  [_T, RT, DT, PT] = ["ReadableStream", "Request", "Response", "Headers"].map(
    sn
  ),
  TT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ii(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Ko(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let l;
    for (r = 0; r < i; r++) (l = s[r]), t.call(null, e[l], l, e);
  }
}
function Uw(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Ww =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Yw = (e) => !Ks(e) && e !== Ww;
function Xu() {
  const { caseless: e } = (Yw(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && Uw(t, o)) || o;
      el(t[s]) && el(r)
        ? (t[s] = Xu(t[s], r))
        : el(r)
        ? (t[s] = Xu({}, r))
        : Ko(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ii(arguments[r], n);
  return t;
}
const NT = (e, t, n, { allOwnKeys: r } = {}) => (
    ii(
      t,
      (o, s) => {
        n && Ft(o) ? (e[s] = Bw(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  OT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  jT = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  $T = (e, t, n, r) => {
    let o, s, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && mp(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  LT = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  AT = (e) => {
    if (!e) return null;
    if (Ko(e)) return e;
    let t = e.length;
    if (!Hw(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  FT = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && mp(Uint8Array)),
  MT = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  IT = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  zT = sn("HTMLFormElement"),
  BT = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Vh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  VT = sn("RegExp"),
  Kw = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ii(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  HT = (e) => {
    Kw(e, (t, n) => {
      if (Ft(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ft(r)) {
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
  UT = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return Ko(e) ? r(e) : r(String(e).split(t)), n;
  },
  WT = () => {},
  YT = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Fc = "abcdefghijklmnopqrstuvwxyz",
  Hh = "0123456789",
  qw = { DIGIT: Hh, ALPHA: Fc, ALPHA_DIGIT: Fc + Fc.toUpperCase() + Hh },
  KT = (e = 16, t = qw.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function qT(e) {
  return !!(
    e &&
    Ft(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const GT = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (za(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = Ko(r) ? [] : {};
            return (
              ii(r, (i, l) => {
                const a = n(i, o + 1);
                !Ks(a) && (s[l] = a);
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
  XT = sn("AsyncFunction"),
  QT = (e) => e && (za(e) || Ft(e)) && Ft(e.then) && Ft(e.catch),
  F = {
    isArray: Ko,
    isArrayBuffer: Vw,
    isBuffer: hT,
    isFormData: ET,
    isArrayBufferView: gT,
    isString: yT,
    isNumber: Hw,
    isBoolean: vT,
    isObject: za,
    isPlainObject: el,
    isReadableStream: _T,
    isRequest: RT,
    isResponse: DT,
    isHeaders: PT,
    isUndefined: Ks,
    isDate: wT,
    isFile: ST,
    isBlob: xT,
    isRegExp: VT,
    isFunction: Ft,
    isStream: CT,
    isURLSearchParams: kT,
    isTypedArray: FT,
    isFileList: bT,
    forEach: ii,
    merge: Xu,
    extend: NT,
    trim: TT,
    stripBOM: OT,
    inherits: jT,
    toFlatObject: $T,
    kindOf: Ma,
    kindOfTest: sn,
    endsWith: LT,
    toArray: AT,
    forEachEntry: MT,
    matchAll: IT,
    isHTMLForm: zT,
    hasOwnProperty: Vh,
    hasOwnProp: Vh,
    reduceDescriptors: Kw,
    freezeMethods: HT,
    toObjectSet: UT,
    toCamelCase: BT,
    noop: WT,
    toFiniteNumber: YT,
    findKey: Uw,
    global: Ww,
    isContextDefined: Yw,
    ALPHABET: qw,
    generateString: KT,
    isSpecCompliantForm: qT,
    toJSONObject: GT,
    isAsyncFn: XT,
    isThenable: QT,
  };
function ae(e, t, n, r, o) {
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
F.inherits(ae, Error, {
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
      config: F.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Gw = ae.prototype,
  Xw = {};
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
  Xw[e] = { value: e };
});
Object.defineProperties(ae, Xw);
Object.defineProperty(Gw, "isAxiosError", { value: !0 });
ae.from = (e, t, n, r, o, s) => {
  const i = Object.create(Gw);
  return (
    F.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    ae.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const JT = null;
function Qu(e) {
  return F.isPlainObject(e) || F.isArray(e);
}
function Qw(e) {
  return F.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Uh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = Qw(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function ZT(e) {
  return F.isArray(e) && !e.some(Qu);
}
const eN = F.toFlatObject(F, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ba(e, t, n) {
  if (!F.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = F.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, x) {
        return !F.isUndefined(x[h]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || u,
    s = n.dots,
    i = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && F.isSpecCompliantForm(t);
  if (!F.isFunction(o)) throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (F.isDate(p)) return p.toISOString();
    if (!a && F.isBlob(p))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(p) || F.isTypedArray(p)
      ? a && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, h, x) {
    let y = p;
    if (p && !x && typeof p == "object") {
      if (F.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (F.isArray(p) && ZT(p)) ||
        ((F.isFileList(p) || F.endsWith(h, "[]")) && (y = F.toArray(p)))
      )
        return (
          (h = Qw(h)),
          y.forEach(function (g, b) {
            !(F.isUndefined(g) || g === null) &&
              t.append(
                i === !0 ? Uh([h], b, s) : i === null ? h : h + "[]",
                c(g)
              );
          }),
          !1
        );
    }
    return Qu(p) ? !0 : (t.append(Uh(x, h, s), c(p)), !1);
  }
  const d = [],
    f = Object.assign(eN, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Qu,
    });
  function m(p, h) {
    if (!F.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(p),
        F.forEach(p, function (y, v) {
          (!(F.isUndefined(y) || y === null) &&
            o.call(t, y, F.isString(v) ? v.trim() : v, h, f)) === !0 &&
            m(y, h ? h.concat(v) : [v]);
        }),
        d.pop();
    }
  }
  if (!F.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function Wh(e) {
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
function hp(e, t) {
  (this._pairs = []), e && Ba(e, this, t);
}
const Jw = hp.prototype;
Jw.append = function (t, n) {
  this._pairs.push([t, n]);
};
Jw.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Wh);
      }
    : Wh;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function tN(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Zw(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || tN,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = F.isURLSearchParams(t) ? t.toString() : new hp(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Yh {
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
    F.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const e1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  nN = typeof URLSearchParams < "u" ? URLSearchParams : hp,
  rN = typeof FormData < "u" ? FormData : null,
  oN = typeof Blob < "u" ? Blob : null,
  sN = {
    isBrowser: !0,
    classes: { URLSearchParams: nN, FormData: rN, Blob: oN },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  gp = typeof window < "u" && typeof document < "u",
  iN = ((e) => gp && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  lN =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  aN = (gp && window.location.href) || "http://localhost",
  cN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: gp,
        hasStandardBrowserEnv: iN,
        hasStandardBrowserWebWorkerEnv: lN,
        origin: aN,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Jt = { ...cN, ...sN };
function uN(e, t) {
  return Ba(
    e,
    new Jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return Jt.isNode && F.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function dN(e) {
  return F.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function fN(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function t1(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      a = s >= n.length;
    return (
      (i = !i && F.isArray(o) ? o.length : i),
      a
        ? (F.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !l)
        : ((!o[i] || !F.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && F.isArray(o[i]) && (o[i] = fN(o[i])),
          !l)
    );
  }
  if (F.isFormData(e) && F.isFunction(e.entries)) {
    const n = {};
    return (
      F.forEachEntry(e, (r, o) => {
        t(dN(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function pN(e, t, n) {
  if (F.isString(e))
    try {
      return (t || JSON.parse)(e), F.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const li = {
  transitional: e1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = F.isObject(t);
      if ((s && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t)))
        return o ? JSON.stringify(t1(t)) : t;
      if (
        F.isArrayBuffer(t) ||
        F.isBuffer(t) ||
        F.isStream(t) ||
        F.isFile(t) ||
        F.isBlob(t) ||
        F.isReadableStream(t)
      )
        return t;
      if (F.isArrayBufferView(t)) return t.buffer;
      if (F.isURLSearchParams(t))
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
          return uN(t, this.formSerializer).toString();
        if ((l = F.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Ba(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), pN(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || li.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (F.isResponse(t) || F.isReadableStream(t)) return t;
      if (t && F.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? ae.from(l, ae.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: Jt.classes.FormData, Blob: Jt.classes.Blob },
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
F.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  li.headers[e] = {};
});
const mN = F.toObjectSet([
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
  hN = (e) => {
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
              !(!n || (t[n] && mN[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Kh = Symbol("internals");
function us(e) {
  return e && String(e).trim().toLowerCase();
}
function tl(e) {
  return e === !1 || e == null ? e : F.isArray(e) ? e.map(tl) : String(e);
}
function gN(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const yN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Mc(e, t, n, r, o) {
  if (F.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!F.isString(t))) {
    if (F.isString(r)) return t.indexOf(r) !== -1;
    if (F.isRegExp(r)) return r.test(t);
  }
}
function vN(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function wN(e, t) {
  const n = F.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0,
    });
  });
}
class vt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(l, a, c) {
      const u = us(a);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = F.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || (c === void 0 && o[d] !== !1)) &&
        (o[d || a] = tl(l));
    }
    const i = (l, a) => F.forEach(l, (c, u) => s(c, u, a));
    if (F.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (F.isString(t) && (t = t.trim()) && !yN(t)) i(hN(t), n);
    else if (F.isHeaders(t)) for (const [l, a] of t.entries()) s(a, l, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = us(t)), t)) {
      const r = F.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return gN(o);
        if (F.isFunction(n)) return n.call(this, o, r);
        if (F.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = us(t)), t)) {
      const r = F.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Mc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = us(i)), i)) {
        const l = F.findKey(r, i);
        l && (!n || Mc(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return F.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Mc(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      F.forEach(this, (o, s) => {
        const i = F.findKey(r, s);
        if (i) {
          (n[i] = tl(o)), delete n[s];
          return;
        }
        const l = t ? vN(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = tl(o)), (r[l] = !0);
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
      F.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && F.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Kh] = this[Kh] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const l = us(i);
      r[l] || (wN(o, i), (r[l] = !0));
    }
    return F.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
vt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
F.reduceDescriptors(vt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
F.freezeMethods(vt);
function Ic(e, t) {
  const n = this || li,
    r = t || n,
    o = vt.from(r.headers);
  let s = r.data;
  return (
    F.forEach(e, function (l) {
      s = l.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function n1(e) {
  return !!(e && e.__CANCEL__);
}
function qo(e, t, n) {
  ae.call(this, e ?? "canceled", ae.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
F.inherits(qo, ae, { __CANCEL__: !0 });
function r1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ae(
          "Request failed with status code " + n.status,
          [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function SN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function xN(e, t) {
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
function bN(e, t) {
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
const Ml = (e, t, n = 3) => {
    let r = 0;
    const o = xN(50, 250);
    return bN((s) => {
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
  CN = Jt.hasStandardBrowserEnv
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
            const l = F.isString(i) ? o(i) : i;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  EN = Jt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, s) {
          const i = [e + "=" + encodeURIComponent(t)];
          F.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            F.isString(r) && i.push("path=" + r),
            F.isString(o) && i.push("domain=" + o),
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
function kN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function _N(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function o1(e, t) {
  return e && !kN(t) ? _N(e, t) : t;
}
const qh = (e) => (e instanceof vt ? { ...e } : e);
function Fr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return F.isPlainObject(c) && F.isPlainObject(u)
      ? F.merge.call({ caseless: d }, c, u)
      : F.isPlainObject(u)
      ? F.merge({}, u)
      : F.isArray(u)
      ? u.slice()
      : u;
  }
  function o(c, u, d) {
    if (F.isUndefined(u)) {
      if (!F.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function s(c, u) {
    if (!F.isUndefined(u)) return r(void 0, u);
  }
  function i(c, u) {
    if (F.isUndefined(u)) {
      if (!F.isUndefined(c)) return r(void 0, c);
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
    headers: (c, u) => o(qh(c), qh(u), !0),
  };
  return (
    F.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = a[u] || o,
        f = d(e[u], t[u], u);
      (F.isUndefined(f) && d !== l) || (n[u] = f);
    }),
    n
  );
}
const s1 = (e) => {
    const t = Fr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: s,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = vt.from(i)),
      (t.url = Zw(o1(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
    if (F.isFormData(n)) {
      if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
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
      Jt.hasStandardBrowserEnv &&
      (r && F.isFunction(r) && (r = r(t)), r || (r !== !1 && CN(t.url)))
    ) {
      const c = o && s && EN.read(s);
      c && i.set(o, c);
    }
    return t;
  },
  RN = typeof XMLHttpRequest < "u",
  DN =
    RN &&
    function (e) {
      return new Promise(function (n, r) {
        const o = s1(e);
        let s = o.data;
        const i = vt.from(o.headers).normalize();
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
          const m = vt.from(
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
          r1(
            function (y) {
              n(y), c();
            },
            function (y) {
              r(y), c();
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
              (r(new ae("Request aborted", ae.ECONNABORTED, o, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new ae("Network Error", ae.ERR_NETWORK, o, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let p = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = o.transitional || e1;
            o.timeoutErrorMessage && (p = o.timeoutErrorMessage),
              r(
                new ae(
                  p,
                  h.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
                  o,
                  u
                )
              ),
              (u = null);
          }),
          s === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            F.forEach(i.toJSON(), function (p, h) {
              u.setRequestHeader(h, p);
            }),
          F.isUndefined(o.withCredentials) ||
            (u.withCredentials = !!o.withCredentials),
          l && l !== "json" && (u.responseType = o.responseType),
          typeof o.onDownloadProgress == "function" &&
            u.addEventListener("progress", Ml(o.onDownloadProgress, !0)),
          typeof o.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", Ml(o.onUploadProgress)),
          (o.cancelToken || o.signal) &&
            ((a = (m) => {
              u &&
                (r(!m || m.type ? new qo(null, e, u) : m),
                u.abort(),
                (u = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(a),
            o.signal &&
              (o.signal.aborted ? a() : o.signal.addEventListener("abort", a)));
        const f = SN(o.url);
        if (f && Jt.protocols.indexOf(f) === -1) {
          r(new ae("Unsupported protocol " + f + ":", ae.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(s || null);
      });
    },
  PN = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (a) {
      if (!r) {
        (r = !0), i();
        const c = a instanceof Error ? a : this.reason;
        n.abort(
          c instanceof ae ? c : new qo(c instanceof Error ? c.message : c)
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        o(new ae(`timeout ${t} of ms exceeded`, ae.ETIMEDOUT));
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
  TN = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  NN = async function* (e, t, n) {
    for await (const r of e)
      yield* TN(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Gh = (e, t, n, r, o) => {
    const s = NN(e, t, o);
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
  Xh = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  Va =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  i1 = Va && typeof ReadableStream == "function",
  Ju =
    Va &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ON =
    i1 &&
    (() => {
      let e = !1;
      const t = new Request(Jt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  Qh = 64 * 1024,
  Zu =
    i1 &&
    !!(() => {
      try {
        return F.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Il = { stream: Zu && ((e) => e.body) };
Va &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Il[t] &&
        (Il[t] = F.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ae(
                `Response type '${t}' is not supported`,
                ae.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const jN = async (e) => {
    if (e == null) return 0;
    if (F.isBlob(e)) return e.size;
    if (F.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (F.isArrayBufferView(e)) return e.byteLength;
    if ((F.isURLSearchParams(e) && (e = e + ""), F.isString(e)))
      return (await Ju(e)).byteLength;
  },
  $N = async (e, t) => {
    const n = F.toFiniteNumber(e.getContentLength());
    return n ?? jN(t);
  },
  LN =
    Va &&
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
      } = s1(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [m, p] = o || s || i ? PN([o, s], i) : [],
        h,
        x;
      const y = () => {
        !h &&
          setTimeout(() => {
            m && m.unsubscribe();
          }),
          (h = !0);
      };
      let v;
      try {
        if (
          a &&
          ON &&
          n !== "get" &&
          n !== "head" &&
          (v = await $N(u, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            _;
          F.isFormData(r) &&
            (_ = E.headers.get("content-type")) &&
            u.setContentType(_),
            E.body && (r = Gh(E.body, Qh, Xh(v, Ml(a)), null, Ju));
        }
        F.isString(d) || (d = d ? "cors" : "omit"),
          (x = new Request(t, {
            ...f,
            signal: m,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let g = await fetch(x);
        const b = Zu && (c === "stream" || c === "response");
        if (Zu && (l || b)) {
          const E = {};
          ["status", "statusText", "headers"].forEach((D) => {
            E[D] = g[D];
          });
          const _ = F.toFiniteNumber(g.headers.get("content-length"));
          g = new Response(
            Gh(g.body, Qh, l && Xh(_, Ml(l, !0)), b && y, Ju),
            E
          );
        }
        c = c || "text";
        let C = await Il[F.findKey(Il, c) || "text"](g, e);
        return (
          !b && y(),
          p && p(),
          await new Promise((E, _) => {
            r1(E, _, {
              data: C,
              headers: vt.from(g.headers),
              status: g.status,
              statusText: g.statusText,
              config: e,
              request: x,
            });
          })
        );
      } catch (g) {
        throw (
          (y(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new ae("Network Error", ae.ERR_NETWORK, e, x), {
                cause: g.cause || g,
              })
            : ae.from(g, g && g.code, e, x))
        );
      }
    }),
  ed = { http: JT, xhr: DN, fetch: LN };
F.forEach(ed, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jh = (e) => `- ${e}`,
  AN = (e) => F.isFunction(e) || e === null || e === !1,
  l1 = {
    getAdapter: (e) => {
      e = F.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let i;
        if (
          ((r = n),
          !AN(n) && ((r = ed[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ae(`Unknown adapter '${i}'`);
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
              s.map(Jh).join(`
`)
            : " " + Jh(s[0])
          : "as no adapter specified";
        throw new ae(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ed,
  };
function zc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new qo(null, e);
}
function Zh(e) {
  return (
    zc(e),
    (e.headers = vt.from(e.headers)),
    (e.data = Ic.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    l1
      .getAdapter(e.adapter || li.adapter)(e)
      .then(
        function (r) {
          return (
            zc(e),
            (r.data = Ic.call(e, e.transformResponse, r)),
            (r.headers = vt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            n1(r) ||
              (zc(e),
              r &&
                r.response &&
                ((r.response.data = Ic.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = vt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const a1 = "1.7.2",
  yp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    yp[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const eg = {};
yp.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      a1 +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, l) => {
    if (t === !1)
      throw new ae(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ae.ERR_DEPRECATED
      );
    return (
      n &&
        !eg[i] &&
        ((eg[i] = !0),
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
function FN(e, t, n) {
  if (typeof e != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const l = e[s],
        a = l === void 0 || i(l, s, e);
      if (a !== !0)
        throw new ae("option " + s + " must be " + a, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ae("Unknown option " + s, ae.ERR_BAD_OPTION);
  }
}
const td = { assertOptions: FN, validators: yp },
  Bn = td.validators;
class Dr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Yh(), response: new Yh() });
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
      (n = Fr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      td.assertOptions(
        r,
        {
          silentJSONParsing: Bn.transitional(Bn.boolean),
          forcedJSONParsing: Bn.transitional(Bn.boolean),
          clarifyTimeoutError: Bn.transitional(Bn.boolean),
        },
        !1
      ),
      o != null &&
        (F.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : td.assertOptions(
              o,
              { encode: Bn.function, serialize: Bn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && F.merge(s.common, s[n.method]);
    s &&
      F.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete s[p];
        }
      ),
      (n.headers = vt.concat(i, s));
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
      const p = [Zh.bind(this), void 0];
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
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      u = Zh.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Fr(this.defaults, t);
    const n = o1(t.baseURL, t.url);
    return Zw(n, t.params, t.paramsSerializer);
  }
}
F.forEach(["delete", "get", "head", "options"], function (t) {
  Dr.prototype[t] = function (n, r) {
    return this.request(
      Fr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
F.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, l) {
      return this.request(
        Fr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (Dr.prototype[t] = n()), (Dr.prototype[t + "Form"] = n(!0));
});
class vp {
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
        r.reason || ((r.reason = new qo(s, i, l)), n(r.reason));
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
      token: new vp(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function MN(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function IN(e) {
  return F.isObject(e) && e.isAxiosError === !0;
}
const nd = {
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
Object.entries(nd).forEach(([e, t]) => {
  nd[t] = e;
});
function c1(e) {
  const t = new Dr(e),
    n = Bw(Dr.prototype.request, t);
  return (
    F.extend(n, Dr.prototype, t, { allOwnKeys: !0 }),
    F.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return c1(Fr(e, o));
    }),
    n
  );
}
const Oe = c1(li);
Oe.Axios = Dr;
Oe.CanceledError = qo;
Oe.CancelToken = vp;
Oe.isCancel = n1;
Oe.VERSION = a1;
Oe.toFormData = Ba;
Oe.AxiosError = ae;
Oe.Cancel = Oe.CanceledError;
Oe.all = function (t) {
  return Promise.all(t);
};
Oe.spread = MN;
Oe.isAxiosError = IN;
Oe.mergeConfig = Fr;
Oe.AxiosHeaders = vt;
Oe.formToJSON = (e) => t1(F.isHTMLForm(e) ? new FormData(e) : e);
Oe.getAdapter = l1.getAdapter;
Oe.HttpStatusCode = nd;
Oe.default = Oe;
const zN = async (e, t, n) => {
    let r = {};
    const o = { target: e, embargo: t, data: { requirements: n } };
    let s = "";
    window.props !== void 0 && (s = window.props.token || "no-token-found");
    const i = Iw,
      l = {
        headers: {
          Authorization: "Token " + s,
          "Content-Type": "application/json",
        },
      };
    return (
      await Oe.post(i, o, l)
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
  u1 = (e) => {
    const {
        profileData: t,
        submissionData: n,
        isLoading: r,
        profileError: o,
        SubmissionError: s,
      } = e,
      [i, l] = w.useState(!1),
      a = RD({
        mode: "uncontrolled",
        name: "profile-form",
        initialValues: { files: [] },
      }),
      c = (u) => {
        l(!0),
          zN(t.target, localStorage.getItem("embargo"), u)
            .then((d) => {
              console.log("DATA ", d);
            })
            .finally(() => {
              l(!1);
            });
      };
    return S.jsxs("form", {
      onSubmit: a.onSubmit(c),
      children: [
        S.jsxs("p", { children: ["processing: ", "" + i] }),
        t.fields.map((u, d) => S.jsx(zw, { field: u, form: a }, d)),
        S.jsx(Kn, {
          justify: "flex-end",
          mt: "md",
          children: S.jsx(pn, { type: "submit", children: "Submit" }),
        }),
      ],
    });
  };
u1.propTypes = { profileData: Y.object.isRequired };
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zl() {
  return (
    (zl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zl.apply(this, arguments)
  );
}
var Xn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Xn || (Xn = {}));
const tg = "popstate";
function BN(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return rd(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : f1(o);
  }
  return HN(t, n, null, e);
}
function St(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function d1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function VN() {
  return Math.random().toString(36).substr(2, 8);
}
function ng(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function rd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    zl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ha(t) : t,
      { state: n, key: (t && t.key) || r || VN() }
    )
  );
}
function f1(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ha(e) {
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
function HN(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = Xn.Pop,
    a = null,
    c = u();
  c == null && ((c = 0), i.replaceState(zl({}, i.state, { idx: c }), ""));
  function u() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    l = Xn.Pop;
    let x = u(),
      y = x == null ? null : x - c;
    (c = x), a && a({ action: l, location: h.location, delta: y });
  }
  function f(x, y) {
    l = Xn.Push;
    let v = rd(h.location, x, y);
    c = u() + 1;
    let g = ng(v, c),
      b = h.createHref(v);
    try {
      i.pushState(g, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(b);
    }
    s && a && a({ action: l, location: h.location, delta: 1 });
  }
  function m(x, y) {
    l = Xn.Replace;
    let v = rd(h.location, x, y);
    c = u();
    let g = ng(v, c),
      b = h.createHref(v);
    i.replaceState(g, "", b),
      s && a && a({ action: l, location: h.location, delta: 0 });
  }
  function p(x) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      v = typeof x == "string" ? x : f1(x);
    return (
      (v = v.replace(/ $/, "%20")),
      St(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, y)
    );
  }
  let h = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(tg, d),
        (a = x),
        () => {
          o.removeEventListener(tg, d), (a = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: p,
    encodeLocation(x) {
      let y = p(x);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: f,
    replace: m,
    go(x) {
      return i.go(x);
    },
  };
  return h;
}
var rg;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(rg || (rg = {}));
function UN(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ha(t) : t,
    o = h1(r.pathname || "/", n);
  if (o == null) return null;
  let s = p1(e);
  WN(s);
  let i = null;
  for (let l = 0; i == null && l < s.length; ++l) {
    let a = rO(o);
    i = eO(s[l], a);
  }
  return i;
}
function p1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (St(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = xo([r, a.relativePath]),
      u = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (St(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      p1(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: JN(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of m1(s.path)) o(s, i, a);
    }),
    t
  );
}
function m1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = m1(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function WN(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ZN(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const YN = /^:[\w-]+$/,
  KN = 3,
  qN = 2,
  GN = 1,
  XN = 10,
  QN = -2,
  og = (e) => e === "*";
function JN(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(og) && (r += QN),
    t && (r += qN),
    n
      .filter((o) => !og(o))
      .reduce((o, s) => o + (YN.test(s) ? KN : s === "" ? GN : XN), r)
  );
}
function ZN(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function eO(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    s = [];
  for (let i = 0; i < n.length; ++i) {
    let l = n[i],
      a = i === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      u = tO(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        c
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = l.route;
    s.push({
      params: r,
      pathname: xo([o, u.pathname]),
      pathnameBase: oO(xo([o, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (o = xo([o, u.pathnameBase]));
  }
  return s;
}
function tO(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = nO(e.path, e.caseSensitive, e.end),
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
function nO(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    d1(
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
function rO(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      d1(
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
function h1(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const xo = (e) => e.join("/").replace(/\/\/+/g, "/"),
  oO = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function sO(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const g1 = ["post", "put", "patch", "delete"];
new Set(g1);
const iO = ["get", ...g1];
new Set(iO);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bl() {
  return (
    (Bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bl.apply(this, arguments)
  );
}
const lO = w.createContext(null),
  aO = w.createContext(null),
  y1 = w.createContext(null),
  Ua = w.createContext(null),
  ai = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  v1 = w.createContext(null);
function wp() {
  return w.useContext(Ua) != null;
}
function cO() {
  return wp() || St(!1), w.useContext(Ua).location;
}
function uO() {
  let { matches: e } = w.useContext(ai),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function dO(e, t) {
  return fO(e, t);
}
function fO(e, t, n, r) {
  wp() || St(!1);
  let { navigator: o } = w.useContext(y1),
    { matches: s } = w.useContext(ai),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let c = cO(),
    u;
  if (t) {
    var d;
    let x = typeof t == "string" ? Ha(t) : t;
    a === "/" || ((d = x.pathname) != null && d.startsWith(a)) || St(!1),
      (u = x);
  } else u = c;
  let f = u.pathname || "/",
    m = f;
  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    m = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let p = UN(e, { pathname: m }),
    h = yO(
      p &&
        p.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: xo([
              a,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : xo([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && h
    ? w.createElement(
        Ua.Provider,
        {
          value: {
            location: Bl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Xn.Pop,
          },
        },
        h
      )
    : h;
}
function pO() {
  let e = xO(),
    t = sO(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null
  );
}
const mO = w.createElement(pO, null);
class hO extends w.Component {
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
      ? w.createElement(
          ai.Provider,
          { value: this.props.routeContext },
          w.createElement(v1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function gO(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(lO);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(ai.Provider, { value: t }, r)
  );
}
function yO(e, t, n, r) {
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
    u >= 0 || St(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
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
      x = null;
    n &&
      ((m = l && d.route.id ? l[d.route.id] : void 0),
      (h = d.route.errorElement || mO),
      a &&
        (c < 0 && f === 0
          ? ((p = !0), (x = null))
          : c === f &&
            ((p = !0), (x = d.route.hydrateFallbackElement || null))));
    let y = t.concat(i.slice(0, f + 1)),
      v = () => {
        let g;
        return (
          m
            ? (g = h)
            : p
            ? (g = x)
            : d.route.Component
            ? (g = w.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = u),
          w.createElement(gO, {
            match: d,
            routeContext: { outlet: u, matches: y, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? w.createElement(hO, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: m,
          children: v(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var od = (function (e) {
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
})(od || {});
function vO(e) {
  let t = w.useContext(aO);
  return t || St(!1), t;
}
function wO(e) {
  let t = w.useContext(ai);
  return t || St(!1), t;
}
function SO(e) {
  let t = wO(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || St(!1), n.route.id;
}
function xO() {
  var e;
  let t = w.useContext(v1),
    n = vO(od.UseRouteError),
    r = SO(od.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sd(e) {
  St(!1);
}
function bO(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Xn.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  wp() && St(!1);
  let a = t.replace(/^\/*/, "/"),
    c = w.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: Bl({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = Ha(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: m = null,
      key: p = "default",
    } = r,
    h = w.useMemo(() => {
      let x = h1(u, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: m, key: p },
            navigationType: o,
          };
    }, [a, u, d, f, m, p, o]);
  return h == null
    ? null
    : w.createElement(
        y1.Provider,
        { value: c },
        w.createElement(Ua.Provider, { children: n, value: h })
      );
}
function CO(e) {
  let { children: t, location: n } = e;
  return dO(id(t), n);
}
new Promise(() => {});
function id(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, id(r.props.children, s));
        return;
      }
      r.type !== sd && St(!1), !r.props.index || !r.props.children || St(!1);
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
      r.props.children && (i.children = id(r.props.children, s)), n.push(i);
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
 */ const EO = "6";
try {
  window.__reactRouterVersion = EO;
} catch {}
const kO = "startTransition",
  sg = wg[kO];
function _O(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = w.useRef();
  s.current == null && (s.current = BN({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = w.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    u = w.useCallback(
      (d) => {
        c && sg ? sg(() => a(d)) : a(d);
      },
      [a, c]
    );
  return (
    w.useLayoutEffect(() => i.listen(u), [i, u]),
    w.createElement(bO, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
var ig;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ig || (ig = {}));
var lg;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(lg || (lg = {}));
const RO = (e, t) => {
    const [n, r] = w.useState([]),
      [o, s] = w.useState([]),
      [i, l] = w.useState(!1),
      [a, c] = w.useState(!0),
      [u, d] = w.useState(null),
      [f, m] = w.useState(null);
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
      w.useEffect(
        () => (
          (async () => {
            c(!0),
              await Oe.get(dT + e)
                .then((y) => {
                  r(y.data), l(!0);
                })
                .catch((y) => {
                  d(y);
                })
                .finally(() => {
                  c(!1);
                });
          })(),
          () => {}
        ),
        []
      ),
      w.useEffect(
        () => (
          i &&
            t !== void 0 &&
            (async () => (
              c(!0),
              await Oe.get(Iw + t + "/", h)
                .then((y) => {
                  localStorage.setItem("submission", JSON.stringify(y.data)),
                    s(y.data);
                })
                .catch((y) => {
                  m(y);
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
  DO = iD(u1),
  PO = lD(DO),
  ag = () => {
    const { brokerSubmissionId: e } = uO(),
      t = localStorage.getItem("profileName") || uT,
      { data1: n, data2: r, isLoading: o, error1: s, error2: i } = RO(t, e);
    return S.jsxs("div", {
      children: [
        S.jsx("h1", { children: "ProfileForm" }),
        S.jsx(PO, {
          profileData: n,
          submissionData: r,
          isLoading: o,
          profileError: s,
          submissionError: i,
        }),
      ],
    });
  };
function TO() {
  return S.jsx(Uv, {
    children: S.jsxs(CO, {
      children: [
        S.jsx(sd, { path: "/", element: S.jsx(ag, {}) }),
        S.jsx(sd, { path: "/:brokerSubmissionId", element: S.jsx(ag, {}) }),
      ],
    }),
  });
}
let Sp = "generic";
window.props !== void 0 && (Sp = window.props.profile_name || "generic");
localStorage.setItem("profileName", Sp);
const NO = "/profile/profile/" + Sp + "/ui/";
Bc.createRoot(document.getElementById("root")).render(
  S.jsx(Hl.StrictMode, {
    children: S.jsx(_O, { basename: NO, children: S.jsx(TO, {}) }),
  })
);
