function JE(e, t) {
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
var jp =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function yr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lb = { exports: {} },
  bc = {},
  ab = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hl = Symbol.for("react.element"),
  ZE = Symbol.for("react.portal"),
  eD = Symbol.for("react.fragment"),
  tD = Symbol.for("react.strict_mode"),
  nD = Symbol.for("react.profiler"),
  rD = Symbol.for("react.provider"),
  oD = Symbol.for("react.context"),
  sD = Symbol.for("react.forward_ref"),
  iD = Symbol.for("react.suspense"),
  lD = Symbol.for("react.memo"),
  aD = Symbol.for("react.lazy"),
  kg = Symbol.iterator;
function cD(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kg && e[kg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var cb = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ub = Object.assign,
  db = {};
function Ls(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = db),
    (this.updater = n || cb);
}
Ls.prototype.isReactComponent = {};
Ls.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ls.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fb() {}
fb.prototype = Ls.prototype;
function Lp(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = db),
    (this.updater = n || cb);
}
var Mp = (Lp.prototype = new fb());
Mp.constructor = Lp;
ub(Mp, Ls.prototype);
Mp.isPureReactComponent = !0;
var Tg = Array.isArray,
  pb = Object.prototype.hasOwnProperty,
  Fp = { current: null },
  mb = { key: !0, ref: !0, __self: !0, __source: !0 };
function hb(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      pb.call(t, r) && !mb.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: hl,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Fp.current,
  };
}
function uD(e, t) {
  return {
    $$typeof: hl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hl;
}
function dD(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var $g = /\/+/g;
function od(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dD("" + e.key)
    : t.toString(36);
}
function aa(e, t, n, r, o) {
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
          case hl:
          case ZE:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + od(i, 0) : r),
      Tg(o)
        ? ((n = ""),
          e != null && (n = e.replace($g, "$&/") + "/"),
          aa(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Bp(o) &&
            (o = uD(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace($g, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Tg(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + od(s, l);
      i += aa(s, t, n, a, o);
    }
  else if (((a = cD(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + od(s, l++)), (i += aa(s, t, n, a, o));
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
function Tl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    aa(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function fD(e) {
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
var Pt = { current: null },
  ca = { transition: null },
  pD = {
    ReactCurrentDispatcher: Pt,
    ReactCurrentBatchConfig: ca,
    ReactCurrentOwner: Fp,
  };
function gb() {
  throw Error("act(...) is not supported in production builds of React.");
}
he.Children = {
  map: Tl,
  forEach: function (e, t, n) {
    Tl(
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
      Tl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
he.Component = Ls;
he.Fragment = eD;
he.Profiler = nD;
he.PureComponent = Lp;
he.StrictMode = tD;
he.Suspense = iD;
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pD;
he.act = gb;
he.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ub({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Fp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      pb.call(t, a) &&
        !mb.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: hl, type: e.type, key: o, ref: s, props: r, _owner: i };
};
he.createContext = function (e) {
  return (
    (e = {
      $$typeof: oD,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rD, _context: e }),
    (e.Consumer = e)
  );
};
he.createElement = hb;
he.createFactory = function (e) {
  var t = hb.bind(null, e);
  return (t.type = e), t;
};
he.createRef = function () {
  return { current: null };
};
he.forwardRef = function (e) {
  return { $$typeof: sD, render: e };
};
he.isValidElement = Bp;
he.lazy = function (e) {
  return { $$typeof: aD, _payload: { _status: -1, _result: e }, _init: fD };
};
he.memo = function (e, t) {
  return { $$typeof: lD, type: e, compare: t === void 0 ? null : t };
};
he.startTransition = function (e) {
  var t = ca.transition;
  ca.transition = {};
  try {
    e();
  } finally {
    ca.transition = t;
  }
};
he.unstable_act = gb;
he.useCallback = function (e, t) {
  return Pt.current.useCallback(e, t);
};
he.useContext = function (e) {
  return Pt.current.useContext(e);
};
he.useDebugValue = function () {};
he.useDeferredValue = function (e) {
  return Pt.current.useDeferredValue(e);
};
he.useEffect = function (e, t) {
  return Pt.current.useEffect(e, t);
};
he.useId = function () {
  return Pt.current.useId();
};
he.useImperativeHandle = function (e, t, n) {
  return Pt.current.useImperativeHandle(e, t, n);
};
he.useInsertionEffect = function (e, t) {
  return Pt.current.useInsertionEffect(e, t);
};
he.useLayoutEffect = function (e, t) {
  return Pt.current.useLayoutEffect(e, t);
};
he.useMemo = function (e, t) {
  return Pt.current.useMemo(e, t);
};
he.useReducer = function (e, t, n) {
  return Pt.current.useReducer(e, t, n);
};
he.useRef = function (e) {
  return Pt.current.useRef(e);
};
he.useState = function (e) {
  return Pt.current.useState(e);
};
he.useSyncExternalStore = function (e, t, n) {
  return Pt.current.useSyncExternalStore(e, t, n);
};
he.useTransition = function () {
  return Pt.current.useTransition();
};
he.version = "18.3.1";
ab.exports = he;
var w = ab.exports;
const be = yr(w),
  yb = JE({ __proto__: null, default: be }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mD = w,
  hD = Symbol.for("react.element"),
  gD = Symbol.for("react.fragment"),
  yD = Object.prototype.hasOwnProperty,
  vD = mD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bD = { key: !0, ref: !0, __self: !0, __source: !0 };
function vb(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) yD.call(t, r) && !bD.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: hD,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: vD.current,
  };
}
bc.Fragment = gD;
bc.jsx = vb;
bc.jsxs = vb;
lb.exports = bc;
var g = lb.exports,
  af = {},
  bb = { exports: {} },
  en = {},
  wb = { exports: {} },
  xb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, D) {
    var j = N.length;
    N.push(D);
    e: for (; 0 < j; ) {
      var A = (j - 1) >>> 1,
        B = N[A];
      if (0 < o(B, D)) (N[A] = D), (N[j] = B), (j = A);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var D = N[0],
      j = N.pop();
    if (j !== D) {
      N[0] = j;
      e: for (var A = 0, B = N.length, Y = B >>> 1; A < Y; ) {
        var J = 2 * (A + 1) - 1,
          ee = N[J],
          oe = J + 1,
          ne = N[oe];
        if (0 > o(ee, j))
          oe < B && 0 > o(ne, ee)
            ? ((N[A] = ne), (N[oe] = j), (A = oe))
            : ((N[A] = ee), (N[J] = j), (A = J));
        else if (oe < B && 0 > o(ne, j)) (N[A] = ne), (N[oe] = j), (A = oe);
        else break e;
      }
    }
    return D;
  }
  function o(N, D) {
    var j = N.sortIndex - D.sortIndex;
    return j !== 0 ? j : N.id - D.id;
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
    p = !1,
    m = !1,
    h = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(N) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= N)
        r(c), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(c);
    }
  }
  function S(N) {
    if (((h = !1), b(N), !m))
      if (n(a) !== null) (m = !0), O(C);
      else {
        var D = n(c);
        D !== null && k(S, D.startTime - N);
      }
  }
  function C(N, D) {
    (m = !1), h && ((h = !1), v(P), (P = -1)), (p = !0);
    var j = f;
    try {
      for (
        b(D), d = n(a);
        d !== null && (!(d.expirationTime > D) || (N && !T()));

      ) {
        var A = d.callback;
        if (typeof A == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var B = A(d.expirationTime <= D);
          (D = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(a) && r(a),
            b(D);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Y = !0;
      else {
        var J = n(c);
        J !== null && k(S, J.startTime - D), (Y = !1);
      }
      return Y;
    } finally {
      (d = null), (f = j), (p = !1);
    }
  }
  var E = !1,
    R = null,
    P = -1,
    I = 5,
    _ = -1;
  function T() {
    return !(e.unstable_now() - _ < I);
  }
  function M() {
    if (R !== null) {
      var N = e.unstable_now();
      _ = N;
      var D = !0;
      try {
        D = R(!0, N);
      } finally {
        D ? z() : ((E = !1), (R = null));
      }
    } else E = !1;
  }
  var z;
  if (typeof y == "function")
    z = function () {
      y(M);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      $ = L.port2;
    (L.port1.onmessage = M),
      (z = function () {
        $.postMessage(null);
      });
  } else
    z = function () {
      x(M, 0);
    };
  function O(N) {
    (R = N), E || ((E = !0), z());
  }
  function k(N, D) {
    P = x(function () {
      N(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || p || ((m = !0), O(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var j = f;
      f = D;
      try {
        return N();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, D) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var j = f;
      f = N;
      try {
        return D();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (N, D, j) {
      var A = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? A + j : A))
          : (j = A),
        N)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = j + B),
        (N = {
          id: u++,
          callback: D,
          priorityLevel: N,
          startTime: j,
          expirationTime: B,
          sortIndex: -1,
        }),
        j > A
          ? ((N.sortIndex = j),
            t(c, N),
            n(a) === null &&
              N === n(c) &&
              (h ? (v(P), (P = -1)) : (h = !0), k(S, j - A)))
          : ((N.sortIndex = B), t(a, N), m || p || ((m = !0), O(C))),
        N
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (N) {
      var D = f;
      return function () {
        var j = f;
        f = D;
        try {
          return N.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(xb);
wb.exports = xb;
var wD = wb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xD = w,
  Zt = wD;
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
var Sb = new Set(),
  Mi = {};
function Io(e, t) {
  ws(e, t), ws(e + "Capture", t);
}
function ws(e, t) {
  for (Mi[e] = t, e = 0; e < t.length; e++) Sb.add(t[e]);
}
var fr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  cf = Object.prototype.hasOwnProperty,
  SD =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ag = {},
  Ig = {};
function CD(e) {
  return cf.call(Ig, e)
    ? !0
    : cf.call(Ag, e)
    ? !1
    : SD.test(e)
    ? (Ig[e] = !0)
    : ((Ag[e] = !0), !1);
}
function ED(e, t, n, r) {
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
function DD(e, t, n, r) {
  if (t === null || typeof t > "u" || ED(e, t, n, r)) return !0;
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
function Nt(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ft[e] = new Nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ft[t] = new Nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ft[e] = new Nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ft[e] = new Nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ft[e] = new Nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ft[e] = new Nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ft[e] = new Nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ft[e] = new Nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ft[e] = new Nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zp = /[\-:]([a-z])/g;
function Vp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zp, Vp);
    ft[t] = new Nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zp, Vp);
    ft[t] = new Nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zp, Vp);
  ft[t] = new Nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ft[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ft.xlinkHref = new Nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ft[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wp(e, t, n, r) {
  var o = ft.hasOwnProperty(t) ? ft[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (DD(t, n, o, r) && (n = null),
    r || o === null
      ? CD(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var vr = xD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $l = Symbol.for("react.element"),
  Qo = Symbol.for("react.portal"),
  Jo = Symbol.for("react.fragment"),
  Up = Symbol.for("react.strict_mode"),
  uf = Symbol.for("react.profiler"),
  Cb = Symbol.for("react.provider"),
  Eb = Symbol.for("react.context"),
  Hp = Symbol.for("react.forward_ref"),
  df = Symbol.for("react.suspense"),
  ff = Symbol.for("react.suspense_list"),
  Gp = Symbol.for("react.memo"),
  Dr = Symbol.for("react.lazy"),
  Db = Symbol.for("react.offscreen"),
  jg = Symbol.iterator;
function oi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jg && e[jg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fe = Object.assign,
  sd;
function wi(e) {
  if (sd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sd = (t && t[1]) || "";
    }
  return (
    `
` +
    sd +
    e
  );
}
var id = !1;
function ld(e, t) {
  if (!e || id) return "";
  id = !0;
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
    (id = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wi(e) : "";
}
function RD(e) {
  switch (e.tag) {
    case 5:
      return wi(e.type);
    case 16:
      return wi("Lazy");
    case 13:
      return wi("Suspense");
    case 19:
      return wi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ld(e.type, !1)), e;
    case 11:
      return (e = ld(e.type.render, !1)), e;
    case 1:
      return (e = ld(e.type, !0)), e;
    default:
      return "";
  }
}
function pf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jo:
      return "Fragment";
    case Qo:
      return "Portal";
    case uf:
      return "Profiler";
    case Up:
      return "StrictMode";
    case df:
      return "Suspense";
    case ff:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Eb:
        return (e.displayName || "Context") + ".Consumer";
      case Cb:
        return (e._context.displayName || "Context") + ".Provider";
      case Hp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gp:
        return (
          (t = e.displayName || null), t !== null ? t : pf(e.type) || "Memo"
        );
      case Dr:
        (t = e._payload), (e = e._init);
        try {
          return pf(e(t));
        } catch {}
    }
  return null;
}
function PD(e) {
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
      return pf(t);
    case 8:
      return t === Up ? "StrictMode" : "Mode";
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
function Ur(e) {
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
function Rb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ND(e) {
  var t = Rb(e) ? "checked" : "value",
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
function Al(e) {
  e._valueTracker || (e._valueTracker = ND(e));
}
function Pb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Rb(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ra(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mf(e, t) {
  var n = t.checked;
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ur(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Nb(e, t) {
  (t = t.checked), t != null && Wp(e, "checked", t, !1);
}
function hf(e, t) {
  Nb(e, t);
  var n = Ur(t.value),
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
    ? gf(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gf(e, t.type, Ur(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mg(e, t, n) {
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
function gf(e, t, n) {
  (t !== "number" || Ra(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xi = Array.isArray;
function us(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ur(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function yf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fg(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (xi(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ur(n) };
}
function _b(e, t) {
  var n = Ur(t.value),
    r = Ur(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ob(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ob(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Il,
  kb = (function (e) {
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
        Il = Il || document.createElement("div"),
          Il.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Il.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Di = {
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
  _D = ["Webkit", "ms", "Moz", "O"];
Object.keys(Di).forEach(function (e) {
  _D.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Di[t] = Di[e]);
  });
});
function Tb(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Di.hasOwnProperty(e) && Di[e])
    ? ("" + t).trim()
    : t + "px";
}
function $b(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Tb(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var OD = Fe(
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
function bf(e, t) {
  if (t) {
    if (OD[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function wf(e, t) {
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
var xf = null;
function Yp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sf = null,
  ds = null,
  fs = null;
function zg(e) {
  if ((e = vl(e))) {
    if (typeof Sf != "function") throw Error(H(280));
    var t = e.stateNode;
    t && ((t = Ec(t)), Sf(e.stateNode, e.type, t));
  }
}
function Ab(e) {
  ds ? (fs ? fs.push(e) : (fs = [e])) : (ds = e);
}
function Ib() {
  if (ds) {
    var e = ds,
      t = fs;
    if (((fs = ds = null), zg(e), t)) for (e = 0; e < t.length; e++) zg(t[e]);
  }
}
function jb(e, t) {
  return e(t);
}
function Lb() {}
var ad = !1;
function Mb(e, t, n) {
  if (ad) return e(t, n);
  ad = !0;
  try {
    return jb(e, t, n);
  } finally {
    (ad = !1), (ds !== null || fs !== null) && (Lb(), Ib());
  }
}
function Bi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ec(n);
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
var Cf = !1;
if (fr)
  try {
    var si = {};
    Object.defineProperty(si, "passive", {
      get: function () {
        Cf = !0;
      },
    }),
      window.addEventListener("test", si, si),
      window.removeEventListener("test", si, si);
  } catch {
    Cf = !1;
  }
function kD(e, t, n, r, o, s, i, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Ri = !1,
  Pa = null,
  Na = !1,
  Ef = null,
  TD = {
    onError: function (e) {
      (Ri = !0), (Pa = e);
    },
  };
function $D(e, t, n, r, o, s, i, l, a) {
  (Ri = !1), (Pa = null), kD.apply(TD, arguments);
}
function AD(e, t, n, r, o, s, i, l, a) {
  if (($D.apply(this, arguments), Ri)) {
    if (Ri) {
      var c = Pa;
      (Ri = !1), (Pa = null);
    } else throw Error(H(198));
    Na || ((Na = !0), (Ef = c));
  }
}
function jo(e) {
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
function Fb(e) {
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
function Vg(e) {
  if (jo(e) !== e) throw Error(H(188));
}
function ID(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jo(e)), t === null)) throw Error(H(188));
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
        if (s === n) return Vg(o), e;
        if (s === r) return Vg(o), t;
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
function Bb(e) {
  return (e = ID(e)), e !== null ? zb(e) : null;
}
function zb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vb = Zt.unstable_scheduleCallback,
  Wg = Zt.unstable_cancelCallback,
  jD = Zt.unstable_shouldYield,
  LD = Zt.unstable_requestPaint,
  Ge = Zt.unstable_now,
  MD = Zt.unstable_getCurrentPriorityLevel,
  qp = Zt.unstable_ImmediatePriority,
  Wb = Zt.unstable_UserBlockingPriority,
  _a = Zt.unstable_NormalPriority,
  FD = Zt.unstable_LowPriority,
  Ub = Zt.unstable_IdlePriority,
  wc = null,
  Xn = null;
function BD(e) {
  if (Xn && typeof Xn.onCommitFiberRoot == "function")
    try {
      Xn.onCommitFiberRoot(wc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var _n = Math.clz32 ? Math.clz32 : WD,
  zD = Math.log,
  VD = Math.LN2;
function WD(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zD(e) / VD) | 0)) | 0;
}
var jl = 64,
  Ll = 4194304;
function Si(e) {
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
function Oa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = Si(l)) : ((s &= i), s !== 0 && (r = Si(s)));
  } else (i = n & ~o), i !== 0 ? (r = Si(i)) : s !== 0 && (r = Si(s));
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
      (n = 31 - _n(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function UD(e, t) {
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
function HD(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - _n(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = UD(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Df(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Hb() {
  var e = jl;
  return (jl <<= 1), !(jl & 4194240) && (jl = 64), e;
}
function cd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - _n(t)),
    (e[t] = n);
}
function GD(e, t) {
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
    var o = 31 - _n(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function Kp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - _n(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var xe = 0;
function Gb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yb,
  Xp,
  qb,
  Kb,
  Xb,
  Rf = !1,
  Ml = [],
  Ar = null,
  Ir = null,
  jr = null,
  zi = new Map(),
  Vi = new Map(),
  Nr = [],
  YD =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ug(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ar = null;
      break;
    case "dragenter":
    case "dragleave":
      Ir = null;
      break;
    case "mouseover":
    case "mouseout":
      jr = null;
      break;
    case "pointerover":
    case "pointerout":
      zi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vi.delete(t.pointerId);
  }
}
function ii(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = vl(t)), t !== null && Xp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function qD(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ar = ii(Ar, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ir = ii(Ir, e, t, n, r, o)), !0;
    case "mouseover":
      return (jr = ii(jr, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return zi.set(s, ii(zi.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), Vi.set(s, ii(Vi.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Qb(e) {
  var t = mo(e.target);
  if (t !== null) {
    var n = jo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Fb(n)), t !== null)) {
          (e.blockedOn = t),
            Xb(e.priority, function () {
              qb(n);
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
function ua(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xf = r), n.target.dispatchEvent(r), (xf = null);
    } else return (t = vl(n)), t !== null && Xp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hg(e, t, n) {
  ua(e) && n.delete(t);
}
function KD() {
  (Rf = !1),
    Ar !== null && ua(Ar) && (Ar = null),
    Ir !== null && ua(Ir) && (Ir = null),
    jr !== null && ua(jr) && (jr = null),
    zi.forEach(Hg),
    Vi.forEach(Hg);
}
function li(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rf ||
      ((Rf = !0),
      Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, KD)));
}
function Wi(e) {
  function t(o) {
    return li(o, e);
  }
  if (0 < Ml.length) {
    li(Ml[0], e);
    for (var n = 1; n < Ml.length; n++) {
      var r = Ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ar !== null && li(Ar, e),
      Ir !== null && li(Ir, e),
      jr !== null && li(jr, e),
      zi.forEach(t),
      Vi.forEach(t),
      n = 0;
    n < Nr.length;
    n++
  )
    (r = Nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nr.length && ((n = Nr[0]), n.blockedOn === null); )
    Qb(n), n.blockedOn === null && Nr.shift();
}
var ps = vr.ReactCurrentBatchConfig,
  ka = !0;
function XD(e, t, n, r) {
  var o = xe,
    s = ps.transition;
  ps.transition = null;
  try {
    (xe = 1), Qp(e, t, n, r);
  } finally {
    (xe = o), (ps.transition = s);
  }
}
function QD(e, t, n, r) {
  var o = xe,
    s = ps.transition;
  ps.transition = null;
  try {
    (xe = 4), Qp(e, t, n, r);
  } finally {
    (xe = o), (ps.transition = s);
  }
}
function Qp(e, t, n, r) {
  if (ka) {
    var o = Pf(e, t, n, r);
    if (o === null) bd(e, t, r, Ta, n), Ug(e, r);
    else if (qD(o, e, t, n, r)) r.stopPropagation();
    else if ((Ug(e, r), t & 4 && -1 < YD.indexOf(e))) {
      for (; o !== null; ) {
        var s = vl(o);
        if (
          (s !== null && Yb(s),
          (s = Pf(e, t, n, r)),
          s === null && bd(e, t, r, Ta, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else bd(e, t, r, null, n);
  }
}
var Ta = null;
function Pf(e, t, n, r) {
  if (((Ta = null), (e = Yp(r)), (e = mo(e)), e !== null))
    if (((t = jo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Fb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ta = e), null;
}
function Jb(e) {
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
      switch (MD()) {
        case qp:
          return 1;
        case Wb:
          return 4;
        case _a:
        case FD:
          return 16;
        case Ub:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Or = null,
  Jp = null,
  da = null;
function Zb() {
  if (da) return da;
  var e,
    t = Jp,
    n = t.length,
    r,
    o = "value" in Or ? Or.value : Or.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (da = o.slice(e, 1 < r ? 1 - r : void 0));
}
function fa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fl() {
  return !0;
}
function Gg() {
  return !1;
}
function tn(e) {
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
        ? Fl
        : Gg),
      (this.isPropagationStopped = Gg),
      this
    );
  }
  return (
    Fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fl));
      },
      persist: function () {},
      isPersistent: Fl,
    }),
    t
  );
}
var Ms = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zp = tn(Ms),
  yl = Fe({}, Ms, { view: 0, detail: 0 }),
  JD = tn(yl),
  ud,
  dd,
  ai,
  xc = Fe({}, yl, {
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
    getModifierState: em,
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
        : (e !== ai &&
            (ai && e.type === "mousemove"
              ? ((ud = e.screenX - ai.screenX), (dd = e.screenY - ai.screenY))
              : (dd = ud = 0),
            (ai = e)),
          ud);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : dd;
    },
  }),
  Yg = tn(xc),
  ZD = Fe({}, xc, { dataTransfer: 0 }),
  eR = tn(ZD),
  tR = Fe({}, yl, { relatedTarget: 0 }),
  fd = tn(tR),
  nR = Fe({}, Ms, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rR = tn(nR),
  oR = Fe({}, Ms, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sR = tn(oR),
  iR = Fe({}, Ms, { data: 0 }),
  qg = tn(iR),
  lR = {
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
  aR = {
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
  cR = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function uR(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cR[e]) ? !!t[e] : !1;
}
function em() {
  return uR;
}
var dR = Fe({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = lR[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? aR[e.keyCode] || "Unidentified"
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
    getModifierState: em,
    charCode: function (e) {
      return e.type === "keypress" ? fa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fR = tn(dR),
  pR = Fe({}, xc, {
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
  Kg = tn(pR),
  mR = Fe({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: em,
  }),
  hR = tn(mR),
  gR = Fe({}, Ms, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yR = tn(gR),
  vR = Fe({}, xc, {
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
  bR = tn(vR),
  wR = [9, 13, 27, 32],
  tm = fr && "CompositionEvent" in window,
  Pi = null;
fr && "documentMode" in document && (Pi = document.documentMode);
var xR = fr && "TextEvent" in window && !Pi,
  ew = fr && (!tm || (Pi && 8 < Pi && 11 >= Pi)),
  Xg = " ",
  Qg = !1;
function tw(e, t) {
  switch (e) {
    case "keyup":
      return wR.indexOf(t.keyCode) !== -1;
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
function nw(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zo = !1;
function SR(e, t) {
  switch (e) {
    case "compositionend":
      return nw(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qg = !0), Xg);
    case "textInput":
      return (e = t.data), e === Xg && Qg ? null : e;
    default:
      return null;
  }
}
function CR(e, t) {
  if (Zo)
    return e === "compositionend" || (!tm && tw(e, t))
      ? ((e = Zb()), (da = Jp = Or = null), (Zo = !1), e)
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
      return ew && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ER = {
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
function Jg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ER[e.type] : t === "textarea";
}
function rw(e, t, n, r) {
  Ab(r),
    (t = $a(t, "onChange")),
    0 < t.length &&
      ((n = new Zp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ni = null,
  Ui = null;
function DR(e) {
  mw(e, 0);
}
function Sc(e) {
  var t = ns(e);
  if (Pb(t)) return e;
}
function RR(e, t) {
  if (e === "change") return t;
}
var ow = !1;
if (fr) {
  var pd;
  if (fr) {
    var md = "oninput" in document;
    if (!md) {
      var Zg = document.createElement("div");
      Zg.setAttribute("oninput", "return;"),
        (md = typeof Zg.oninput == "function");
    }
    pd = md;
  } else pd = !1;
  ow = pd && (!document.documentMode || 9 < document.documentMode);
}
function ey() {
  Ni && (Ni.detachEvent("onpropertychange", sw), (Ui = Ni = null));
}
function sw(e) {
  if (e.propertyName === "value" && Sc(Ui)) {
    var t = [];
    rw(t, Ui, e, Yp(e)), Mb(DR, t);
  }
}
function PR(e, t, n) {
  e === "focusin"
    ? (ey(), (Ni = t), (Ui = n), Ni.attachEvent("onpropertychange", sw))
    : e === "focusout" && ey();
}
function NR(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sc(Ui);
}
function _R(e, t) {
  if (e === "click") return Sc(t);
}
function OR(e, t) {
  if (e === "input" || e === "change") return Sc(t);
}
function kR(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Tn = typeof Object.is == "function" ? Object.is : kR;
function Hi(e, t) {
  if (Tn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!cf.call(t, o) || !Tn(e[o], t[o])) return !1;
  }
  return !0;
}
function ty(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ny(e, t) {
  var n = ty(e);
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
    n = ty(n);
  }
}
function iw(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? iw(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function lw() {
  for (var e = window, t = Ra(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ra(e.document);
  }
  return t;
}
function nm(e) {
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
function TR(e) {
  var t = lw(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    iw(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nm(n)) {
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
          (o = ny(n, s));
        var i = ny(n, r);
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
var $R = fr && "documentMode" in document && 11 >= document.documentMode,
  es = null,
  Nf = null,
  _i = null,
  _f = !1;
function ry(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _f ||
    es == null ||
    es !== Ra(r) ||
    ((r = es),
    "selectionStart" in r && nm(r)
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
    (_i && Hi(_i, r)) ||
      ((_i = r),
      (r = $a(Nf, "onSelect")),
      0 < r.length &&
        ((t = new Zp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = es))));
}
function Bl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ts = {
    animationend: Bl("Animation", "AnimationEnd"),
    animationiteration: Bl("Animation", "AnimationIteration"),
    animationstart: Bl("Animation", "AnimationStart"),
    transitionend: Bl("Transition", "TransitionEnd"),
  },
  hd = {},
  aw = {};
fr &&
  ((aw = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ts.animationend.animation,
    delete ts.animationiteration.animation,
    delete ts.animationstart.animation),
  "TransitionEvent" in window || delete ts.transitionend.transition);
function Cc(e) {
  if (hd[e]) return hd[e];
  if (!ts[e]) return e;
  var t = ts[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in aw) return (hd[e] = t[n]);
  return e;
}
var cw = Cc("animationend"),
  uw = Cc("animationiteration"),
  dw = Cc("animationstart"),
  fw = Cc("transitionend"),
  pw = new Map(),
  oy =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qr(e, t) {
  pw.set(e, t), Io(t, [e]);
}
for (var gd = 0; gd < oy.length; gd++) {
  var yd = oy[gd],
    AR = yd.toLowerCase(),
    IR = yd[0].toUpperCase() + yd.slice(1);
  Qr(AR, "on" + IR);
}
Qr(cw, "onAnimationEnd");
Qr(uw, "onAnimationIteration");
Qr(dw, "onAnimationStart");
Qr("dblclick", "onDoubleClick");
Qr("focusin", "onFocus");
Qr("focusout", "onBlur");
Qr(fw, "onTransitionEnd");
ws("onMouseEnter", ["mouseout", "mouseover"]);
ws("onMouseLeave", ["mouseout", "mouseover"]);
ws("onPointerEnter", ["pointerout", "pointerover"]);
ws("onPointerLeave", ["pointerout", "pointerover"]);
Io(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Io(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Io("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Io(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Io(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Io(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ci =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jR = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));
function sy(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), AD(r, t, void 0, e), (e.currentTarget = null);
}
function mw(e, t) {
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
          sy(o, l, c), (s = a);
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
          sy(o, l, c), (s = a);
        }
    }
  }
  if (Na) throw ((e = Ef), (Na = !1), (Ef = null), e);
}
function ke(e, t) {
  var n = t[Af];
  n === void 0 && (n = t[Af] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hw(t, e, 2, !1), n.add(r));
}
function vd(e, t, n) {
  var r = 0;
  t && (r |= 4), hw(n, e, r, t);
}
var zl = "_reactListening" + Math.random().toString(36).slice(2);
function Gi(e) {
  if (!e[zl]) {
    (e[zl] = !0),
      Sb.forEach(function (n) {
        n !== "selectionchange" && (jR.has(n) || vd(n, !1, e), vd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zl] || ((t[zl] = !0), vd("selectionchange", !1, t));
  }
}
function hw(e, t, n, r) {
  switch (Jb(t)) {
    case 1:
      var o = XD;
      break;
    case 4:
      o = QD;
      break;
    default:
      o = Qp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Cf ||
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
function bd(e, t, n, r, o) {
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
          if (((i = mo(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Mb(function () {
    var c = s,
      u = Yp(n),
      d = [];
    e: {
      var f = pw.get(e);
      if (f !== void 0) {
        var p = Zp,
          m = e;
        switch (e) {
          case "keypress":
            if (fa(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = fR;
            break;
          case "focusin":
            (m = "focus"), (p = fd);
            break;
          case "focusout":
            (m = "blur"), (p = fd);
            break;
          case "beforeblur":
          case "afterblur":
            p = fd;
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
            p = Yg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = eR;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = hR;
            break;
          case cw:
          case uw:
          case dw:
            p = rR;
            break;
          case fw:
            p = yR;
            break;
          case "scroll":
            p = JD;
            break;
          case "wheel":
            p = bR;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = sR;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Kg;
        }
        var h = (t & 4) !== 0,
          x = !h && e === "scroll",
          v = h ? (f !== null ? f + "Capture" : null) : f;
        h = [];
        for (var y = c, b; y !== null; ) {
          b = y;
          var S = b.stateNode;
          if (
            (b.tag === 5 &&
              S !== null &&
              ((b = S),
              v !== null && ((S = Bi(y, v)), S != null && h.push(Yi(y, S, b)))),
            x)
          )
            break;
          y = y.return;
        }
        0 < h.length &&
          ((f = new p(f, m, null, n, u)), d.push({ event: f, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== xf &&
            (m = n.relatedTarget || n.fromElement) &&
            (mo(m) || m[pr]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((m = n.relatedTarget || n.toElement),
              (p = c),
              (m = m ? mo(m) : null),
              m !== null &&
                ((x = jo(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = c)),
          p !== m)
        ) {
          if (
            ((h = Yg),
            (S = "onMouseLeave"),
            (v = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = Kg),
              (S = "onPointerLeave"),
              (v = "onPointerEnter"),
              (y = "pointer")),
            (x = p == null ? f : ns(p)),
            (b = m == null ? f : ns(m)),
            (f = new h(S, y + "leave", p, n, u)),
            (f.target = x),
            (f.relatedTarget = b),
            (S = null),
            mo(u) === c &&
              ((h = new h(v, y + "enter", m, n, u)),
              (h.target = b),
              (h.relatedTarget = x),
              (S = h)),
            (x = S),
            p && m)
          )
            t: {
              for (h = p, v = m, y = 0, b = h; b; b = Ho(b)) y++;
              for (b = 0, S = v; S; S = Ho(S)) b++;
              for (; 0 < y - b; ) (h = Ho(h)), y--;
              for (; 0 < b - y; ) (v = Ho(v)), b--;
              for (; y--; ) {
                if (h === v || (v !== null && h === v.alternate)) break t;
                (h = Ho(h)), (v = Ho(v));
              }
              h = null;
            }
          else h = null;
          p !== null && iy(d, f, p, h, !1),
            m !== null && x !== null && iy(d, x, m, h, !0);
        }
      }
      e: {
        if (
          ((f = c ? ns(c) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var C = RR;
        else if (Jg(f))
          if (ow) C = OR;
          else {
            C = NR;
            var E = PR;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = _R);
        if (C && (C = C(e, c))) {
          rw(d, C, n, u);
          break e;
        }
        E && E(e, f, c),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            gf(f, "number", f.value);
      }
      switch (((E = c ? ns(c) : window), e)) {
        case "focusin":
          (Jg(E) || E.contentEditable === "true") &&
            ((es = E), (Nf = c), (_i = null));
          break;
        case "focusout":
          _i = Nf = es = null;
          break;
        case "mousedown":
          _f = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_f = !1), ry(d, n, u);
          break;
        case "selectionchange":
          if ($R) break;
        case "keydown":
        case "keyup":
          ry(d, n, u);
      }
      var R;
      if (tm)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Zo
          ? tw(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (ew &&
          n.locale !== "ko" &&
          (Zo || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Zo && (R = Zb())
            : ((Or = u),
              (Jp = "value" in Or ? Or.value : Or.textContent),
              (Zo = !0))),
        (E = $a(c, P)),
        0 < E.length &&
          ((P = new qg(P, e, null, n, u)),
          d.push({ event: P, listeners: E }),
          R ? (P.data = R) : ((R = nw(n)), R !== null && (P.data = R)))),
        (R = xR ? SR(e, n) : CR(e, n)) &&
          ((c = $a(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new qg("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = R)));
    }
    mw(d, t);
  });
}
function Yi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $a(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Bi(e, n)),
      s != null && r.unshift(Yi(e, s, o)),
      (s = Bi(e, t)),
      s != null && r.push(Yi(e, s, o))),
      (e = e.return);
  }
  return r;
}
function Ho(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function iy(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = Bi(n, s)), a != null && i.unshift(Yi(n, a, l)))
        : o || ((a = Bi(n, s)), a != null && i.push(Yi(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var LR = /\r\n?/g,
  MR = /\u0000|\uFFFD/g;
function ly(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      LR,
      `
`
    )
    .replace(MR, "");
}
function Vl(e, t, n) {
  if (((t = ly(t)), ly(e) !== t && n)) throw Error(H(425));
}
function Aa() {}
var Of = null,
  kf = null;
function Tf(e, t) {
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
var $f = typeof setTimeout == "function" ? setTimeout : void 0,
  FR = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ay = typeof Promise == "function" ? Promise : void 0,
  BR =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ay < "u"
      ? function (e) {
          return ay.resolve(null).then(e).catch(zR);
        }
      : $f;
function zR(e) {
  setTimeout(function () {
    throw e;
  });
}
function wd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Wi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Wi(t);
}
function Lr(e) {
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
function cy(e) {
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
var Fs = Math.random().toString(36).slice(2),
  qn = "__reactFiber$" + Fs,
  qi = "__reactProps$" + Fs,
  pr = "__reactContainer$" + Fs,
  Af = "__reactEvents$" + Fs,
  VR = "__reactListeners$" + Fs,
  WR = "__reactHandles$" + Fs;
function mo(e) {
  var t = e[qn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pr] || n[qn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = cy(e); e !== null; ) {
          if ((n = e[qn])) return n;
          e = cy(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vl(e) {
  return (
    (e = e[qn] || e[pr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ns(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function Ec(e) {
  return e[qi] || null;
}
var If = [],
  rs = -1;
function Jr(e) {
  return { current: e };
}
function Te(e) {
  0 > rs || ((e.current = If[rs]), (If[rs] = null), rs--);
}
function _e(e, t) {
  rs++, (If[rs] = e.current), (e.current = t);
}
var Hr = {},
  bt = Jr(Hr),
  Ft = Jr(!1),
  xo = Hr;
function xs(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Hr;
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
function Bt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ia() {
  Te(Ft), Te(bt);
}
function uy(e, t, n) {
  if (bt.current !== Hr) throw Error(H(168));
  _e(bt, t), _e(Ft, n);
}
function gw(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, PD(e) || "Unknown", o));
  return Fe({}, n, r);
}
function ja(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hr),
    (xo = bt.current),
    _e(bt, e),
    _e(Ft, Ft.current),
    !0
  );
}
function dy(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n
    ? ((e = gw(e, t, xo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Te(Ft),
      Te(bt),
      _e(bt, e))
    : Te(Ft),
    _e(Ft, n);
}
var ir = null,
  Dc = !1,
  xd = !1;
function yw(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function UR(e) {
  (Dc = !0), yw(e);
}
function Zr() {
  if (!xd && ir !== null) {
    xd = !0;
    var e = 0,
      t = xe;
    try {
      var n = ir;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ir = null), (Dc = !1);
    } catch (o) {
      throw (ir !== null && (ir = ir.slice(e + 1)), Vb(qp, Zr), o);
    } finally {
      (xe = t), (xd = !1);
    }
  }
  return null;
}
var os = [],
  ss = 0,
  La = null,
  Ma = 0,
  an = [],
  cn = 0,
  So = null,
  ar = 1,
  cr = "";
function ao(e, t) {
  (os[ss++] = Ma), (os[ss++] = La), (La = e), (Ma = t);
}
function vw(e, t, n) {
  (an[cn++] = ar), (an[cn++] = cr), (an[cn++] = So), (So = e);
  var r = ar;
  e = cr;
  var o = 32 - _n(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - _n(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (ar = (1 << (32 - _n(t) + o)) | (n << o) | r),
      (cr = s + e);
  } else (ar = (1 << s) | (n << o) | r), (cr = e);
}
function rm(e) {
  e.return !== null && (ao(e, 1), vw(e, 1, 0));
}
function om(e) {
  for (; e === La; )
    (La = os[--ss]), (os[ss] = null), (Ma = os[--ss]), (os[ss] = null);
  for (; e === So; )
    (So = an[--cn]),
      (an[cn] = null),
      (cr = an[--cn]),
      (an[cn] = null),
      (ar = an[--cn]),
      (an[cn] = null);
}
var Kt = null,
  Yt = null,
  Ie = !1,
  Rn = null;
function bw(e, t) {
  var n = un(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fy(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Kt = e), (Yt = Lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Kt = e), (Yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = So !== null ? { id: ar, overflow: cr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = un(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Kt = e),
            (Yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function jf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lf(e) {
  if (Ie) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!fy(e, t)) {
        if (jf(e)) throw Error(H(418));
        t = Lr(n.nextSibling);
        var r = Kt;
        t && fy(e, t)
          ? bw(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ie = !1), (Kt = e));
      }
    } else {
      if (jf(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (Ie = !1), (Kt = e);
    }
  }
}
function py(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Kt = e;
}
function Wl(e) {
  if (e !== Kt) return !1;
  if (!Ie) return py(e), (Ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tf(e.type, e.memoizedProps))),
    t && (t = Yt))
  ) {
    if (jf(e)) throw (ww(), Error(H(418)));
    for (; t; ) bw(e, t), (t = Lr(t.nextSibling));
  }
  if ((py(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Yt = Lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Yt = null;
    }
  } else Yt = Kt ? Lr(e.stateNode.nextSibling) : null;
  return !0;
}
function ww() {
  for (var e = Yt; e; ) e = Lr(e.nextSibling);
}
function Ss() {
  (Yt = Kt = null), (Ie = !1);
}
function sm(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
var HR = vr.ReactCurrentBatchConfig;
function ci(e, t, n) {
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
function Ul(e, t) {
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
function my(e) {
  var t = e._init;
  return t(e._payload);
}
function xw(e) {
  function t(v, y) {
    if (e) {
      var b = v.deletions;
      b === null ? ((v.deletions = [y]), (v.flags |= 16)) : b.push(y);
    }
  }
  function n(v, y) {
    if (!e) return null;
    for (; y !== null; ) t(v, y), (y = y.sibling);
    return null;
  }
  function r(v, y) {
    for (v = new Map(); y !== null; )
      y.key !== null ? v.set(y.key, y) : v.set(y.index, y), (y = y.sibling);
    return v;
  }
  function o(v, y) {
    return (v = zr(v, y)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, y, b) {
    return (
      (v.index = b),
      e
        ? ((b = v.alternate),
          b !== null
            ? ((b = b.index), b < y ? ((v.flags |= 2), y) : b)
            : ((v.flags |= 2), y))
        : ((v.flags |= 1048576), y)
    );
  }
  function i(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, y, b, S) {
    return y === null || y.tag !== 6
      ? ((y = Nd(b, v.mode, S)), (y.return = v), y)
      : ((y = o(y, b)), (y.return = v), y);
  }
  function a(v, y, b, S) {
    var C = b.type;
    return C === Jo
      ? u(v, y, b.props.children, S, b.key)
      : y !== null &&
        (y.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Dr &&
            my(C) === y.type))
      ? ((S = o(y, b.props)), (S.ref = ci(v, y, b)), (S.return = v), S)
      : ((S = ba(b.type, b.key, b.props, null, v.mode, S)),
        (S.ref = ci(v, y, b)),
        (S.return = v),
        S);
  }
  function c(v, y, b, S) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== b.containerInfo ||
      y.stateNode.implementation !== b.implementation
      ? ((y = _d(b, v.mode, S)), (y.return = v), y)
      : ((y = o(y, b.children || [])), (y.return = v), y);
  }
  function u(v, y, b, S, C) {
    return y === null || y.tag !== 7
      ? ((y = vo(b, v.mode, S, C)), (y.return = v), y)
      : ((y = o(y, b)), (y.return = v), y);
  }
  function d(v, y, b) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Nd("" + y, v.mode, b)), (y.return = v), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case $l:
          return (
            (b = ba(y.type, y.key, y.props, null, v.mode, b)),
            (b.ref = ci(v, null, y)),
            (b.return = v),
            b
          );
        case Qo:
          return (y = _d(y, v.mode, b)), (y.return = v), y;
        case Dr:
          var S = y._init;
          return d(v, S(y._payload), b);
      }
      if (xi(y) || oi(y))
        return (y = vo(y, v.mode, b, null)), (y.return = v), y;
      Ul(v, y);
    }
    return null;
  }
  function f(v, y, b, S) {
    var C = y !== null ? y.key : null;
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return C !== null ? null : l(v, y, "" + b, S);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case $l:
          return b.key === C ? a(v, y, b, S) : null;
        case Qo:
          return b.key === C ? c(v, y, b, S) : null;
        case Dr:
          return (C = b._init), f(v, y, C(b._payload), S);
      }
      if (xi(b) || oi(b)) return C !== null ? null : u(v, y, b, S, null);
      Ul(v, b);
    }
    return null;
  }
  function p(v, y, b, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (v = v.get(b) || null), l(y, v, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case $l:
          return (v = v.get(S.key === null ? b : S.key) || null), a(y, v, S, C);
        case Qo:
          return (v = v.get(S.key === null ? b : S.key) || null), c(y, v, S, C);
        case Dr:
          var E = S._init;
          return p(v, y, b, E(S._payload), C);
      }
      if (xi(S) || oi(S)) return (v = v.get(b) || null), u(y, v, S, C, null);
      Ul(y, S);
    }
    return null;
  }
  function m(v, y, b, S) {
    for (
      var C = null, E = null, R = y, P = (y = 0), I = null;
      R !== null && P < b.length;
      P++
    ) {
      R.index > P ? ((I = R), (R = null)) : (I = R.sibling);
      var _ = f(v, R, b[P], S);
      if (_ === null) {
        R === null && (R = I);
        break;
      }
      e && R && _.alternate === null && t(v, R),
        (y = s(_, y, P)),
        E === null ? (C = _) : (E.sibling = _),
        (E = _),
        (R = I);
    }
    if (P === b.length) return n(v, R), Ie && ao(v, P), C;
    if (R === null) {
      for (; P < b.length; P++)
        (R = d(v, b[P], S)),
          R !== null &&
            ((y = s(R, y, P)), E === null ? (C = R) : (E.sibling = R), (E = R));
      return Ie && ao(v, P), C;
    }
    for (R = r(v, R); P < b.length; P++)
      (I = p(R, v, P, b[P], S)),
        I !== null &&
          (e && I.alternate !== null && R.delete(I.key === null ? P : I.key),
          (y = s(I, y, P)),
          E === null ? (C = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        R.forEach(function (T) {
          return t(v, T);
        }),
      Ie && ao(v, P),
      C
    );
  }
  function h(v, y, b, S) {
    var C = oi(b);
    if (typeof C != "function") throw Error(H(150));
    if (((b = C.call(b)), b == null)) throw Error(H(151));
    for (
      var E = (C = null), R = y, P = (y = 0), I = null, _ = b.next();
      R !== null && !_.done;
      P++, _ = b.next()
    ) {
      R.index > P ? ((I = R), (R = null)) : (I = R.sibling);
      var T = f(v, R, _.value, S);
      if (T === null) {
        R === null && (R = I);
        break;
      }
      e && R && T.alternate === null && t(v, R),
        (y = s(T, y, P)),
        E === null ? (C = T) : (E.sibling = T),
        (E = T),
        (R = I);
    }
    if (_.done) return n(v, R), Ie && ao(v, P), C;
    if (R === null) {
      for (; !_.done; P++, _ = b.next())
        (_ = d(v, _.value, S)),
          _ !== null &&
            ((y = s(_, y, P)), E === null ? (C = _) : (E.sibling = _), (E = _));
      return Ie && ao(v, P), C;
    }
    for (R = r(v, R); !_.done; P++, _ = b.next())
      (_ = p(R, v, P, _.value, S)),
        _ !== null &&
          (e && _.alternate !== null && R.delete(_.key === null ? P : _.key),
          (y = s(_, y, P)),
          E === null ? (C = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        R.forEach(function (M) {
          return t(v, M);
        }),
      Ie && ao(v, P),
      C
    );
  }
  function x(v, y, b, S) {
    if (
      (typeof b == "object" &&
        b !== null &&
        b.type === Jo &&
        b.key === null &&
        (b = b.props.children),
      typeof b == "object" && b !== null)
    ) {
      switch (b.$$typeof) {
        case $l:
          e: {
            for (var C = b.key, E = y; E !== null; ) {
              if (E.key === C) {
                if (((C = b.type), C === Jo)) {
                  if (E.tag === 7) {
                    n(v, E.sibling),
                      (y = o(E, b.props.children)),
                      (y.return = v),
                      (v = y);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Dr &&
                    my(C) === E.type)
                ) {
                  n(v, E.sibling),
                    (y = o(E, b.props)),
                    (y.ref = ci(v, E, b)),
                    (y.return = v),
                    (v = y);
                  break e;
                }
                n(v, E);
                break;
              } else t(v, E);
              E = E.sibling;
            }
            b.type === Jo
              ? ((y = vo(b.props.children, v.mode, S, b.key)),
                (y.return = v),
                (v = y))
              : ((S = ba(b.type, b.key, b.props, null, v.mode, S)),
                (S.ref = ci(v, y, b)),
                (S.return = v),
                (v = S));
          }
          return i(v);
        case Qo:
          e: {
            for (E = b.key; y !== null; ) {
              if (y.key === E)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === b.containerInfo &&
                  y.stateNode.implementation === b.implementation
                ) {
                  n(v, y.sibling),
                    (y = o(y, b.children || [])),
                    (y.return = v),
                    (v = y);
                  break e;
                } else {
                  n(v, y);
                  break;
                }
              else t(v, y);
              y = y.sibling;
            }
            (y = _d(b, v.mode, S)), (y.return = v), (v = y);
          }
          return i(v);
        case Dr:
          return (E = b._init), x(v, y, E(b._payload), S);
      }
      if (xi(b)) return m(v, y, b, S);
      if (oi(b)) return h(v, y, b, S);
      Ul(v, b);
    }
    return (typeof b == "string" && b !== "") || typeof b == "number"
      ? ((b = "" + b),
        y !== null && y.tag === 6
          ? (n(v, y.sibling), (y = o(y, b)), (y.return = v), (v = y))
          : (n(v, y), (y = Nd(b, v.mode, S)), (y.return = v), (v = y)),
        i(v))
      : n(v, y);
  }
  return x;
}
var Cs = xw(!0),
  Sw = xw(!1),
  Fa = Jr(null),
  Ba = null,
  is = null,
  im = null;
function lm() {
  im = is = Ba = null;
}
function am(e) {
  var t = Fa.current;
  Te(Fa), (e._currentValue = t);
}
function Mf(e, t, n) {
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
function ms(e, t) {
  (Ba = e),
    (im = is = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (jt = !0), (e.firstContext = null));
}
function hn(e) {
  var t = e._currentValue;
  if (im !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), is === null)) {
      if (Ba === null) throw Error(H(308));
      (is = e), (Ba.dependencies = { lanes: 0, firstContext: e });
    } else is = is.next = e;
  return t;
}
var ho = null;
function cm(e) {
  ho === null ? (ho = [e]) : ho.push(e);
}
function Cw(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), cm(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    mr(e, r)
  );
}
function mr(e, t) {
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
var Rr = !1;
function um(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ew(e, t) {
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
function ur(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ve & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      mr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), cm(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    mr(e, n)
  );
}
function pa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kp(e, n);
  }
}
function hy(e, t) {
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
function za(e, t, n, r) {
  var o = e.updateQueue;
  Rr = !1;
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
        p = l.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = e,
            h = l;
          switch (((f = t), (p = n), h.tag)) {
            case 1:
              if (((m = h.payload), typeof m == "function")) {
                d = m.call(p, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = h.payload),
                (f = typeof m == "function" ? m.call(p, d, f) : m),
                f == null)
              )
                break e;
              d = Fe({}, d, f);
              break e;
            case 2:
              Rr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (a = d)) : (u = u.next = p),
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
    (Eo |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function gy(e, t, n) {
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
var bl = {},
  Qn = Jr(bl),
  Ki = Jr(bl),
  Xi = Jr(bl);
function go(e) {
  if (e === bl) throw Error(H(174));
  return e;
}
function dm(e, t) {
  switch ((_e(Xi, t), _e(Ki, e), _e(Qn, bl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vf(t, e));
  }
  Te(Qn), _e(Qn, t);
}
function Es() {
  Te(Qn), Te(Ki), Te(Xi);
}
function Dw(e) {
  go(Xi.current);
  var t = go(Qn.current),
    n = vf(t, e.type);
  t !== n && (_e(Ki, e), _e(Qn, n));
}
function fm(e) {
  Ki.current === e && (Te(Qn), Te(Ki));
}
var Le = Jr(0);
function Va(e) {
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
var Sd = [];
function pm() {
  for (var e = 0; e < Sd.length; e++)
    Sd[e]._workInProgressVersionPrimary = null;
  Sd.length = 0;
}
var ma = vr.ReactCurrentDispatcher,
  Cd = vr.ReactCurrentBatchConfig,
  Co = 0,
  Me = null,
  Xe = null,
  Ze = null,
  Wa = !1,
  Oi = !1,
  Qi = 0,
  GR = 0;
function pt() {
  throw Error(H(321));
}
function mm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Tn(e[n], t[n])) return !1;
  return !0;
}
function hm(e, t, n, r, o, s) {
  if (
    ((Co = s),
    (Me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ma.current = e === null || e.memoizedState === null ? XR : QR),
    (e = n(r, o)),
    Oi)
  ) {
    s = 0;
    do {
      if (((Oi = !1), (Qi = 0), 25 <= s)) throw Error(H(301));
      (s += 1),
        (Ze = Xe = null),
        (t.updateQueue = null),
        (ma.current = JR),
        (e = n(r, o));
    } while (Oi);
  }
  if (
    ((ma.current = Ua),
    (t = Xe !== null && Xe.next !== null),
    (Co = 0),
    (Ze = Xe = Me = null),
    (Wa = !1),
    t)
  )
    throw Error(H(300));
  return e;
}
function gm() {
  var e = Qi !== 0;
  return (Qi = 0), e;
}
function Gn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ze === null ? (Me.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze;
}
function gn() {
  if (Xe === null) {
    var e = Me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = Ze === null ? Me.memoizedState : Ze.next;
  if (t !== null) (Ze = t), (Xe = e);
  else {
    if (e === null) throw Error(H(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      Ze === null ? (Me.memoizedState = Ze = e) : (Ze = Ze.next = e);
  }
  return Ze;
}
function Ji(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ed(e) {
  var t = gn(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = Xe,
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
      if ((Co & u) === u)
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
          (Me.lanes |= u),
          (Eo |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? (i = r) : (a.next = l),
      Tn(r, t.memoizedState) || (jt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (Me.lanes |= s), (Eo |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dd(e) {
  var t = gn(),
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
    Tn(s, t.memoizedState) || (jt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Rw() {}
function Pw(e, t) {
  var n = Me,
    r = gn(),
    o = t(),
    s = !Tn(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (jt = !0)),
    (r = r.queue),
    ym(Ow.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ze !== null && Ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zi(9, _w.bind(null, n, r, o, t), void 0, null),
      et === null)
    )
      throw Error(H(349));
    Co & 30 || Nw(n, t, o);
  }
  return o;
}
function Nw(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _w(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), kw(t) && Tw(e);
}
function Ow(e, t, n) {
  return n(function () {
    kw(t) && Tw(e);
  });
}
function kw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tn(e, n);
  } catch {
    return !0;
  }
}
function Tw(e) {
  var t = mr(e, 1);
  t !== null && On(t, e, 1, -1);
}
function yy(e) {
  var t = Gn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ji,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = KR.bind(null, Me, e)),
    [t.memoizedState, e]
  );
}
function Zi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $w() {
  return gn().memoizedState;
}
function ha(e, t, n, r) {
  var o = Gn();
  (Me.flags |= e),
    (o.memoizedState = Zi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rc(e, t, n, r) {
  var o = gn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Xe !== null) {
    var i = Xe.memoizedState;
    if (((s = i.destroy), r !== null && mm(r, i.deps))) {
      o.memoizedState = Zi(t, n, s, r);
      return;
    }
  }
  (Me.flags |= e), (o.memoizedState = Zi(1 | t, n, s, r));
}
function vy(e, t) {
  return ha(8390656, 8, e, t);
}
function ym(e, t) {
  return Rc(2048, 8, e, t);
}
function Aw(e, t) {
  return Rc(4, 2, e, t);
}
function Iw(e, t) {
  return Rc(4, 4, e, t);
}
function jw(e, t) {
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
function Lw(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Rc(4, 4, jw.bind(null, t, e), n)
  );
}
function vm() {}
function Mw(e, t) {
  var n = gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mm(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fw(e, t) {
  var n = gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bw(e, t, n) {
  return Co & 21
    ? (Tn(n, t) || ((n = Hb()), (Me.lanes |= n), (Eo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (jt = !0)), (e.memoizedState = n));
}
function YR(e, t) {
  var n = xe;
  (xe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cd.transition;
  Cd.transition = {};
  try {
    e(!1), t();
  } finally {
    (xe = n), (Cd.transition = r);
  }
}
function zw() {
  return gn().memoizedState;
}
function qR(e, t, n) {
  var r = Br(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Vw(e))
  )
    Ww(t, n);
  else if (((n = Cw(e, t, n, r)), n !== null)) {
    var o = Rt();
    On(n, e, r, o), Uw(n, t, r);
  }
}
function KR(e, t, n) {
  var r = Br(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vw(e)) Ww(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = l), Tn(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), cm(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cw(e, t, o, r)),
      n !== null && ((o = Rt()), On(n, e, r, o), Uw(n, t, r));
  }
}
function Vw(e) {
  var t = e.alternate;
  return e === Me || (t !== null && t === Me);
}
function Ww(e, t) {
  Oi = Wa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Uw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kp(e, n);
  }
}
var Ua = {
    readContext: hn,
    useCallback: pt,
    useContext: pt,
    useEffect: pt,
    useImperativeHandle: pt,
    useInsertionEffect: pt,
    useLayoutEffect: pt,
    useMemo: pt,
    useReducer: pt,
    useRef: pt,
    useState: pt,
    useDebugValue: pt,
    useDeferredValue: pt,
    useTransition: pt,
    useMutableSource: pt,
    useSyncExternalStore: pt,
    useId: pt,
    unstable_isNewReconciler: !1,
  },
  XR = {
    readContext: hn,
    useCallback: function (e, t) {
      return (Gn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: hn,
    useEffect: vy,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ha(4194308, 4, jw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ha(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ha(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Gn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Gn();
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
        (e = e.dispatch = qR.bind(null, Me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Gn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yy,
    useDebugValue: vm,
    useDeferredValue: function (e) {
      return (Gn().memoizedState = e);
    },
    useTransition: function () {
      var e = yy(!1),
        t = e[0];
      return (e = YR.bind(null, e[1])), (Gn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Me,
        o = Gn();
      if (Ie) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(H(349));
        Co & 30 || Nw(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        vy(Ow.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Zi(9, _w.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Gn(),
        t = et.identifierPrefix;
      if (Ie) {
        var n = cr,
          r = ar;
        (n = (r & ~(1 << (32 - _n(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = GR++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  QR = {
    readContext: hn,
    useCallback: Mw,
    useContext: hn,
    useEffect: ym,
    useImperativeHandle: Lw,
    useInsertionEffect: Aw,
    useLayoutEffect: Iw,
    useMemo: Fw,
    useReducer: Ed,
    useRef: $w,
    useState: function () {
      return Ed(Ji);
    },
    useDebugValue: vm,
    useDeferredValue: function (e) {
      var t = gn();
      return Bw(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ed(Ji)[0],
        t = gn().memoizedState;
      return [e, t];
    },
    useMutableSource: Rw,
    useSyncExternalStore: Pw,
    useId: zw,
    unstable_isNewReconciler: !1,
  },
  JR = {
    readContext: hn,
    useCallback: Mw,
    useContext: hn,
    useEffect: ym,
    useImperativeHandle: Lw,
    useInsertionEffect: Aw,
    useLayoutEffect: Iw,
    useMemo: Fw,
    useReducer: Dd,
    useRef: $w,
    useState: function () {
      return Dd(Ji);
    },
    useDebugValue: vm,
    useDeferredValue: function (e) {
      var t = gn();
      return Xe === null ? (t.memoizedState = e) : Bw(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Dd(Ji)[0],
        t = gn().memoizedState;
      return [e, t];
    },
    useMutableSource: Rw,
    useSyncExternalStore: Pw,
    useId: zw,
    unstable_isNewReconciler: !1,
  };
function En(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ff(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      o = Br(e),
      s = ur(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Mr(e, s, o)),
      t !== null && (On(t, e, o, r), pa(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      o = Br(e),
      s = ur(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Mr(e, s, o)),
      t !== null && (On(t, e, o, r), pa(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Rt(),
      r = Br(e),
      o = ur(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Mr(e, o, r)),
      t !== null && (On(t, e, r, n), pa(t, e, r));
  },
};
function by(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Hi(n, r) || !Hi(o, s)
      : !0
  );
}
function Hw(e, t, n) {
  var r = !1,
    o = Hr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = hn(s))
      : ((o = Bt(t) ? xo : bt.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? xs(e, o) : Hr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function wy(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pc.enqueueReplaceState(t, t.state, null);
}
function Bf(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), um(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = hn(s))
    : ((s = Bt(t) ? xo : bt.current), (o.context = xs(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ff(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Pc.enqueueReplaceState(o, o.state, null),
      za(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ds(e, t) {
  try {
    var n = "",
      r = t;
    do (n += RD(r)), (r = r.return);
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
function Rd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ZR = typeof WeakMap == "function" ? WeakMap : Map;
function Gw(e, t, n) {
  (n = ur(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ga || ((Ga = !0), (Qf = r)), zf(e, t);
    }),
    n
  );
}
function Yw(e, t, n) {
  (n = ur(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        zf(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        zf(e, t),
          typeof r != "function" &&
            (Fr === null ? (Fr = new Set([this])) : Fr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function xy(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ZR();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = pP.bind(null, e, t, n)), t.then(e, e));
}
function Sy(e) {
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
function Cy(e, t, n, r, o) {
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
              : ((t = ur(-1, 1)), (t.tag = 2), Mr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var eP = vr.ReactCurrentOwner,
  jt = !1;
function Et(e, t, n, r) {
  t.child = e === null ? Sw(t, null, n, r) : Cs(t, e.child, n, r);
}
function Ey(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    ms(t, o),
    (r = hm(e, t, n, r, s, o)),
    (n = gm()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        hr(e, t, o))
      : (Ie && n && rm(t), (t.flags |= 1), Et(e, t, r, o), t.child)
  );
}
function Dy(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Rm(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), qw(e, t, s, r, o))
      : ((e = ba(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hi), n(i, r) && e.ref === t.ref)
    )
      return hr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = zr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qw(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Hi(s, r) && e.ref === t.ref)
      if (((jt = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (jt = !0);
      else return (t.lanes = e.lanes), hr(e, t, o);
  }
  return Vf(e, t, n, r, o);
}
function Kw(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        _e(as, Gt),
        (Gt |= n);
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
          _e(as, Gt),
          (Gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        _e(as, Gt),
        (Gt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      _e(as, Gt),
      (Gt |= r);
  return Et(e, t, o, n), t.child;
}
function Xw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vf(e, t, n, r, o) {
  var s = Bt(n) ? xo : bt.current;
  return (
    (s = xs(t, s)),
    ms(t, o),
    (n = hm(e, t, n, r, s, o)),
    (r = gm()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        hr(e, t, o))
      : (Ie && r && rm(t), (t.flags |= 1), Et(e, t, n, o), t.child)
  );
}
function Ry(e, t, n, r, o) {
  if (Bt(n)) {
    var s = !0;
    ja(t);
  } else s = !1;
  if ((ms(t, o), t.stateNode === null))
    ga(e, t), Hw(t, n, r), Bf(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = hn(c))
      : ((c = Bt(n) ? xo : bt.current), (c = xs(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && wy(t, i, r, c)),
      (Rr = !1);
    var f = t.memoizedState;
    (i.state = f),
      za(t, r, i, o),
      (a = t.memoizedState),
      l !== r || f !== a || Ft.current || Rr
        ? (typeof u == "function" && (Ff(t, n, u, r), (a = t.memoizedState)),
          (l = Rr || by(t, n, l, r, f, a, c))
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
      Ew(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : En(t.type, l)),
      (i.props = c),
      (d = t.pendingProps),
      (f = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = hn(a))
        : ((a = Bt(n) ? xo : bt.current), (a = xs(t, a)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && wy(t, i, r, a)),
      (Rr = !1),
      (f = t.memoizedState),
      (i.state = f),
      za(t, r, i, o);
    var m = t.memoizedState;
    l !== d || f !== m || Ft.current || Rr
      ? (typeof p == "function" && (Ff(t, n, p, r), (m = t.memoizedState)),
        (c = Rr || by(t, n, c, r, f, m, a) || !1)
          ? (u ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, m, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, m, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (i.props = r),
        (i.state = m),
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
  return Wf(e, t, n, r, s, o);
}
function Wf(e, t, n, r, o, s) {
  Xw(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && dy(t, n, !1), hr(e, t, s);
  (r = t.stateNode), (eP.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Cs(t, e.child, null, s)), (t.child = Cs(t, null, l, s)))
      : Et(e, t, l, s),
    (t.memoizedState = r.state),
    o && dy(t, n, !0),
    t.child
  );
}
function Qw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? uy(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && uy(e, t.context, !1),
    dm(e, t.containerInfo);
}
function Py(e, t, n, r, o) {
  return Ss(), sm(o), (t.flags |= 256), Et(e, t, n, r), t.child;
}
var Uf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jw(e, t, n) {
  var r = t.pendingProps,
    o = Le.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    _e(Le, o & 1),
    e === null)
  )
    return (
      Lf(t),
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
                : (s = Oc(i, r, 0, null)),
              (e = vo(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Hf(n)),
              (t.memoizedState = Uf),
              e)
            : bm(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return tP(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = zr(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = zr(l, s)) : ((s = vo(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Hf(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Uf),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = zr(s, { mode: "visible", children: r.children })),
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
function bm(e, t) {
  return (
    (t = Oc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hl(e, t, n, r) {
  return (
    r !== null && sm(r),
    Cs(t, e.child, null, n),
    (e = bm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tP(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Rd(Error(H(422)))), Hl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = Oc({ mode: "visible", children: r.children }, o, 0, null)),
        (s = vo(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Cs(t, e.child, null, i),
        (t.child.memoizedState = Hf(i)),
        (t.memoizedState = Uf),
        s);
  if (!(t.mode & 1)) return Hl(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(H(419))), (r = Rd(s, r, void 0)), Hl(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), jt || l)) {
    if (((r = et), r !== null)) {
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
          ((s.retryLane = o), mr(e, o), On(r, e, o, -1));
    }
    return Dm(), (r = Rd(Error(H(421)))), Hl(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mP.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Yt = Lr(o.nextSibling)),
      (Kt = t),
      (Ie = !0),
      (Rn = null),
      e !== null &&
        ((an[cn++] = ar),
        (an[cn++] = cr),
        (an[cn++] = So),
        (ar = e.id),
        (cr = e.overflow),
        (So = t)),
      (t = bm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ny(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mf(e.return, t, n);
}
function Pd(e, t, n, r, o) {
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
function Zw(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Et(e, t, r.children, n), (r = Le.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ny(e, n, t);
        else if (e.tag === 19) Ny(e, n, t);
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
  if ((_e(Le, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Va(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Pd(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Va(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Pd(t, !0, n, null, s);
        break;
      case "together":
        Pd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ga(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function hr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Eo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nP(e, t, n) {
  switch (t.tag) {
    case 3:
      Qw(t), Ss();
      break;
    case 5:
      Dw(t);
      break;
    case 1:
      Bt(t.type) && ja(t);
      break;
    case 4:
      dm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      _e(Fa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (_e(Le, Le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Jw(e, t, n)
          : (_e(Le, Le.current & 1),
            (e = hr(e, t, n)),
            e !== null ? e.sibling : null);
      _e(Le, Le.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        _e(Le, Le.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Kw(e, t, n);
  }
  return hr(e, t, n);
}
var ex, Gf, tx, nx;
ex = function (e, t) {
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
Gf = function () {};
tx = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), go(Qn.current);
    var s = null;
    switch (n) {
      case "input":
        (o = mf(e, o)), (r = mf(e, r)), (s = []);
        break;
      case "select":
        (o = Fe({}, o, { value: void 0 })),
          (r = Fe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = yf(e, o)), (r = yf(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Aa);
    }
    bf(n, r);
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
            (Mi.hasOwnProperty(c)
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
              (Mi.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && ke("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
nx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ui(e, t) {
  if (!Ie)
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
function mt(e) {
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
function rP(e, t, n) {
  var r = t.pendingProps;
  switch ((om(t), t.tag)) {
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
      return mt(t), null;
    case 1:
      return Bt(t.type) && Ia(), mt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Es(),
        Te(Ft),
        Te(bt),
        pm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Rn !== null && (ep(Rn), (Rn = null)))),
        Gf(e, t),
        mt(t),
        null
      );
    case 5:
      fm(t);
      var o = go(Xi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        tx(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return mt(t), null;
        }
        if (((e = go(Qn.current)), Wl(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[qn] = t), (r[qi] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ci.length; o++) ke(Ci[o], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke("error", r), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              Lg(r, s), ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ke("invalid", r);
              break;
            case "textarea":
              Fg(r, s), ke("invalid", r);
          }
          bf(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Vl(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Vl(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Mi.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              Al(r), Mg(r, s, !0);
              break;
            case "textarea":
              Al(r), Bg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Aa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ob(n)),
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
            (e[qn] = t),
            (e[qi] = r),
            ex(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = wf(n, r)), n)) {
              case "dialog":
                ke("cancel", e), ke("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ci.length; o++) ke(Ci[o], e);
                o = r;
                break;
              case "source":
                ke("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", e), ke("load", e), (o = r);
                break;
              case "details":
                ke("toggle", e), (o = r);
                break;
              case "input":
                Lg(e, r), (o = mf(e, r)), ke("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Fe({}, r, { value: void 0 })),
                  ke("invalid", e);
                break;
              case "textarea":
                Fg(e, r), (o = yf(e, r)), ke("invalid", e);
                break;
              default:
                o = r;
            }
            bf(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? $b(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && kb(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Fi(e, a)
                    : typeof a == "number" && Fi(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Mi.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && ke("scroll", e)
                      : a != null && Wp(e, s, a, i));
              }
            switch (n) {
              case "input":
                Al(e), Mg(e, r, !1);
                break;
              case "textarea":
                Al(e), Bg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ur(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? us(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      us(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Aa);
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
      return mt(t), null;
    case 6:
      if (e && t.stateNode != null) nx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (((n = go(Xi.current)), go(Qn.current), Wl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qn] = t),
            (s = r.nodeValue !== n) && ((e = Kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qn] = t),
            (t.stateNode = r);
      }
      return mt(t), null;
    case 13:
      if (
        (Te(Le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ie && Yt !== null && t.mode & 1 && !(t.flags & 128))
          ww(), Ss(), (t.flags |= 98560), (s = !1);
        else if (((s = Wl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(H(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(H(317));
            s[qn] = t;
          } else
            Ss(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          mt(t), (s = !1);
        } else Rn !== null && (ep(Rn), (Rn = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Le.current & 1 ? Qe === 0 && (Qe = 3) : Dm())),
          t.updateQueue !== null && (t.flags |= 4),
          mt(t),
          null);
    case 4:
      return (
        Es(), Gf(e, t), e === null && Gi(t.stateNode.containerInfo), mt(t), null
      );
    case 10:
      return am(t.type._context), mt(t), null;
    case 17:
      return Bt(t.type) && Ia(), mt(t), null;
    case 19:
      if ((Te(Le), (s = t.memoizedState), s === null)) return mt(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) ui(s, !1);
        else {
          if (Qe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Va(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ui(s, !1),
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
                return _e(Le, (Le.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ge() > Rs &&
            ((t.flags |= 128), (r = !0), ui(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Va(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ui(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !Ie)
            )
              return mt(t), null;
          } else
            2 * Ge() - s.renderingStartTime > Rs &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ui(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = Ge()),
          (t.sibling = null),
          (n = Le.current),
          _e(Le, r ? (n & 1) | 2 : n & 1),
          t)
        : (mt(t), null);
    case 22:
    case 23:
      return (
        Em(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Gt & 1073741824 && (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : mt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function oP(e, t) {
  switch ((om(t), t.tag)) {
    case 1:
      return (
        Bt(t.type) && Ia(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Es(),
        Te(Ft),
        Te(bt),
        pm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fm(t), null;
    case 13:
      if (
        (Te(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340));
        Ss();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Te(Le), null;
    case 4:
      return Es(), null;
    case 10:
      return am(t.type._context), null;
    case 22:
    case 23:
      return Em(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gl = !1,
  ht = !1,
  sP = typeof WeakSet == "function" ? WeakSet : Set,
  Q = null;
function ls(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ue(e, t, r);
      }
    else n.current = null;
}
function Yf(e, t, n) {
  try {
    n();
  } catch (r) {
    Ue(e, t, r);
  }
}
var _y = !1;
function iP(e, t) {
  if (((Of = ka), (e = lw()), nm(e))) {
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
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = i + o),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++c === o && (l = i),
                f === s && ++u === r && (a = i),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kf = { focusedElem: e, selectionRange: n }, ka = !1, Q = t; Q !== null; )
    if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Q = e);
    else
      for (; Q !== null; ) {
        t = Q;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var h = m.memoizedProps,
                    x = m.memoizedState,
                    v = t.stateNode,
                    y = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : En(t.type, h),
                      x
                    );
                  v.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = "")
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(H(163));
            }
        } catch (S) {
          Ue(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Q = e);
          break;
        }
        Q = t.return;
      }
  return (m = _y), (_y = !1), m;
}
function ki(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Yf(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Nc(e, t) {
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
function qf(e) {
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
function rx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), rx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qn], delete t[qi], delete t[Af], delete t[VR], delete t[WR])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ox(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Oy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ox(e.return)) return null;
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
function Kf(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Aa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kf(e, t, n), e = e.sibling; e !== null; ) Kf(e, t, n), (e = e.sibling);
}
function Xf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xf(e, t, n), e = e.sibling; e !== null; ) Xf(e, t, n), (e = e.sibling);
}
var at = null,
  Dn = !1;
function Cr(e, t, n) {
  for (n = n.child; n !== null; ) sx(e, t, n), (n = n.sibling);
}
function sx(e, t, n) {
  if (Xn && typeof Xn.onCommitFiberUnmount == "function")
    try {
      Xn.onCommitFiberUnmount(wc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ht || ls(n, t);
    case 6:
      var r = at,
        o = Dn;
      (at = null),
        Cr(e, t, n),
        (at = r),
        (Dn = o),
        at !== null &&
          (Dn
            ? ((e = at),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : at.removeChild(n.stateNode));
      break;
    case 18:
      at !== null &&
        (Dn
          ? ((e = at),
            (n = n.stateNode),
            e.nodeType === 8
              ? wd(e.parentNode, n)
              : e.nodeType === 1 && wd(e, n),
            Wi(e))
          : wd(at, n.stateNode));
      break;
    case 4:
      (r = at),
        (o = Dn),
        (at = n.stateNode.containerInfo),
        (Dn = !0),
        Cr(e, t, n),
        (at = r),
        (Dn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ht &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Yf(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Cr(e, t, n);
      break;
    case 1:
      if (
        !ht &&
        (ls(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ue(n, t, l);
        }
      Cr(e, t, n);
      break;
    case 21:
      Cr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ht = (r = ht) || n.memoizedState !== null), Cr(e, t, n), (ht = r))
        : Cr(e, t, n);
      break;
    default:
      Cr(e, t, n);
  }
}
function ky(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sP()),
      t.forEach(function (r) {
        var o = hP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Cn(e, t) {
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
              (at = l.stateNode), (Dn = !1);
              break e;
            case 3:
              (at = l.stateNode.containerInfo), (Dn = !0);
              break e;
            case 4:
              (at = l.stateNode.containerInfo), (Dn = !0);
              break e;
          }
          l = l.return;
        }
        if (at === null) throw Error(H(160));
        sx(s, i, o), (at = null), (Dn = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        Ue(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ix(t, e), (t = t.sibling);
}
function ix(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Cn(t, e), Un(e), r & 4)) {
        try {
          ki(3, e, e.return), Nc(3, e);
        } catch (h) {
          Ue(e, e.return, h);
        }
        try {
          ki(5, e, e.return);
        } catch (h) {
          Ue(e, e.return, h);
        }
      }
      break;
    case 1:
      Cn(t, e), Un(e), r & 512 && n !== null && ls(n, n.return);
      break;
    case 5:
      if (
        (Cn(t, e),
        Un(e),
        r & 512 && n !== null && ls(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Fi(o, "");
        } catch (h) {
          Ue(e, e.return, h);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Nb(o, s),
              wf(l, i);
            var c = wf(l, s);
            for (i = 0; i < a.length; i += 2) {
              var u = a[i],
                d = a[i + 1];
              u === "style"
                ? $b(o, d)
                : u === "dangerouslySetInnerHTML"
                ? kb(o, d)
                : u === "children"
                ? Fi(o, d)
                : Wp(o, u, d, c);
            }
            switch (l) {
              case "input":
                hf(o, s);
                break;
              case "textarea":
                _b(o, s);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? us(o, !!s.multiple, p, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? us(o, !!s.multiple, s.defaultValue, !0)
                      : us(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[qi] = s;
          } catch (h) {
            Ue(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Cn(t, e), Un(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (h) {
          Ue(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Cn(t, e), Un(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wi(t.containerInfo);
        } catch (h) {
          Ue(e, e.return, h);
        }
      break;
    case 4:
      Cn(t, e), Un(e);
      break;
    case 13:
      Cn(t, e),
        Un(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Sm = Ge())),
        r & 4 && ky(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ht = (c = ht) || u), Cn(t, e), (ht = c)) : Cn(t, e),
        Un(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (Q = e, u = e.child; u !== null; ) {
            for (d = Q = u; Q !== null; ) {
              switch (((f = Q), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ki(4, f, f.return);
                  break;
                case 1:
                  ls(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (h) {
                      Ue(r, n, h);
                    }
                  }
                  break;
                case 5:
                  ls(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    $y(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (Q = p)) : $y(d);
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
                      (l.style.display = Tb("display", i)));
              } catch (h) {
                Ue(e, e.return, h);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (h) {
                Ue(e, e.return, h);
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
      Cn(t, e), Un(e), r & 4 && ky(e);
      break;
    case 21:
      break;
    default:
      Cn(t, e), Un(e);
  }
}
function Un(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ox(n)) {
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
          r.flags & 32 && (Fi(o, ""), (r.flags &= -33));
          var s = Oy(e);
          Xf(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Oy(e);
          Kf(e, l, i);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      Ue(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lP(e, t, n) {
  (Q = e), lx(e);
}
function lx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var o = Q,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Gl;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || ht;
        l = Gl;
        var c = ht;
        if (((Gl = i), (ht = a) && !c))
          for (Q = o; Q !== null; )
            (i = Q),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ay(o)
                : a !== null
                ? ((a.return = i), (Q = a))
                : Ay(o);
        for (; s !== null; ) (Q = s), lx(s), (s = s.sibling);
        (Q = o), (Gl = l), (ht = c);
      }
      Ty(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (Q = s)) : Ty(e);
  }
}
function Ty(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || Nc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ht)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : En(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && gy(t, s, r);
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
                gy(t, i, n);
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
                    d !== null && Wi(d);
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
        ht || (t.flags & 512 && qf(t));
      } catch (f) {
        Ue(t, t.return, f);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function $y(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function Ay(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nc(4, t);
          } catch (a) {
            Ue(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ue(t, o, a);
            }
          }
          var s = t.return;
          try {
            qf(t);
          } catch (a) {
            Ue(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qf(t);
          } catch (a) {
            Ue(t, i, a);
          }
      }
    } catch (a) {
      Ue(t, t.return, a);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (Q = l);
      break;
    }
    Q = t.return;
  }
}
var aP = Math.ceil,
  Ha = vr.ReactCurrentDispatcher,
  wm = vr.ReactCurrentOwner,
  fn = vr.ReactCurrentBatchConfig,
  ve = 0,
  et = null,
  qe = null,
  ut = 0,
  Gt = 0,
  as = Jr(0),
  Qe = 0,
  el = null,
  Eo = 0,
  _c = 0,
  xm = 0,
  Ti = null,
  It = null,
  Sm = 0,
  Rs = 1 / 0,
  sr = null,
  Ga = !1,
  Qf = null,
  Fr = null,
  Yl = !1,
  kr = null,
  Ya = 0,
  $i = 0,
  Jf = null,
  ya = -1,
  va = 0;
function Rt() {
  return ve & 6 ? Ge() : ya !== -1 ? ya : (ya = Ge());
}
function Br(e) {
  return e.mode & 1
    ? ve & 2 && ut !== 0
      ? ut & -ut
      : HR.transition !== null
      ? (va === 0 && (va = Hb()), va)
      : ((e = xe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jb(e.type))),
        e)
    : 1;
}
function On(e, t, n, r) {
  if (50 < $i) throw (($i = 0), (Jf = null), Error(H(185)));
  gl(e, n, r),
    (!(ve & 2) || e !== et) &&
      (e === et && (!(ve & 2) && (_c |= n), Qe === 4 && _r(e, ut)),
      zt(e, r),
      n === 1 && ve === 0 && !(t.mode & 1) && ((Rs = Ge() + 500), Dc && Zr()));
}
function zt(e, t) {
  var n = e.callbackNode;
  HD(e, t);
  var r = Oa(e, e === et ? ut : 0);
  if (r === 0)
    n !== null && Wg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wg(n), t === 1))
      e.tag === 0 ? UR(Iy.bind(null, e)) : yw(Iy.bind(null, e)),
        BR(function () {
          !(ve & 6) && Zr();
        }),
        (n = null);
    else {
      switch (Gb(r)) {
        case 1:
          n = qp;
          break;
        case 4:
          n = Wb;
          break;
        case 16:
          n = _a;
          break;
        case 536870912:
          n = Ub;
          break;
        default:
          n = _a;
      }
      n = hx(n, ax.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ax(e, t) {
  if (((ya = -1), (va = 0), ve & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if (hs() && e.callbackNode !== n) return null;
  var r = Oa(e, e === et ? ut : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qa(e, r);
  else {
    t = r;
    var o = ve;
    ve |= 2;
    var s = ux();
    (et !== e || ut !== t) && ((sr = null), (Rs = Ge() + 500), yo(e, t));
    do
      try {
        dP();
        break;
      } catch (l) {
        cx(e, l);
      }
    while (!0);
    lm(),
      (Ha.current = s),
      (ve = o),
      qe !== null ? (t = 0) : ((et = null), (ut = 0), (t = Qe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Df(e)), o !== 0 && ((r = o), (t = Zf(e, o)))), t === 1)
    )
      throw ((n = el), yo(e, 0), _r(e, r), zt(e, Ge()), n);
    if (t === 6) _r(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !cP(o) &&
          ((t = qa(e, r)),
          t === 2 && ((s = Df(e)), s !== 0 && ((r = s), (t = Zf(e, s)))),
          t === 1))
      )
        throw ((n = el), yo(e, 0), _r(e, r), zt(e, Ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          co(e, It, sr);
          break;
        case 3:
          if (
            (_r(e, r), (r & 130023424) === r && ((t = Sm + 500 - Ge()), 10 < t))
          ) {
            if (Oa(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Rt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = $f(co.bind(null, e, It, sr), t);
            break;
          }
          co(e, It, sr);
          break;
        case 4:
          if ((_r(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - _n(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = Ge() - r),
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
                : 1960 * aP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $f(co.bind(null, e, It, sr), r);
            break;
          }
          co(e, It, sr);
          break;
        case 5:
          co(e, It, sr);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return zt(e, Ge()), e.callbackNode === n ? ax.bind(null, e) : null;
}
function Zf(e, t) {
  var n = Ti;
  return (
    e.current.memoizedState.isDehydrated && (yo(e, t).flags |= 256),
    (e = qa(e, t)),
    e !== 2 && ((t = It), (It = n), t !== null && ep(t)),
    e
  );
}
function ep(e) {
  It === null ? (It = e) : It.push.apply(It, e);
}
function cP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Tn(s(), o)) return !1;
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
function _r(e, t) {
  for (
    t &= ~xm,
      t &= ~_c,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - _n(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Iy(e) {
  if (ve & 6) throw Error(H(327));
  hs();
  var t = Oa(e, 0);
  if (!(t & 1)) return zt(e, Ge()), null;
  var n = qa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Df(e);
    r !== 0 && ((t = r), (n = Zf(e, r)));
  }
  if (n === 1) throw ((n = el), yo(e, 0), _r(e, t), zt(e, Ge()), n);
  if (n === 6) throw Error(H(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    co(e, It, sr),
    zt(e, Ge()),
    null
  );
}
function Cm(e, t) {
  var n = ve;
  ve |= 1;
  try {
    return e(t);
  } finally {
    (ve = n), ve === 0 && ((Rs = Ge() + 500), Dc && Zr());
  }
}
function Do(e) {
  kr !== null && kr.tag === 0 && !(ve & 6) && hs();
  var t = ve;
  ve |= 1;
  var n = fn.transition,
    r = xe;
  try {
    if (((fn.transition = null), (xe = 1), e)) return e();
  } finally {
    (xe = r), (fn.transition = n), (ve = t), !(ve & 6) && Zr();
  }
}
function Em() {
  (Gt = as.current), Te(as);
}
function yo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), FR(n)), qe !== null))
    for (n = qe.return; n !== null; ) {
      var r = n;
      switch ((om(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ia();
          break;
        case 3:
          Es(), Te(Ft), Te(bt), pm();
          break;
        case 5:
          fm(r);
          break;
        case 4:
          Es();
          break;
        case 13:
          Te(Le);
          break;
        case 19:
          Te(Le);
          break;
        case 10:
          am(r.type._context);
          break;
        case 22:
        case 23:
          Em();
      }
      n = n.return;
    }
  if (
    ((et = e),
    (qe = e = zr(e.current, null)),
    (ut = Gt = t),
    (Qe = 0),
    (el = null),
    (xm = _c = Eo = 0),
    (It = Ti = null),
    ho !== null)
  ) {
    for (t = 0; t < ho.length; t++)
      if (((n = ho[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    ho = null;
  }
  return e;
}
function cx(e, t) {
  do {
    var n = qe;
    try {
      if ((lm(), (ma.current = Ua), Wa)) {
        for (var r = Me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Wa = !1;
      }
      if (
        ((Co = 0),
        (Ze = Xe = Me = null),
        (Oi = !1),
        (Qi = 0),
        (wm.current = null),
        n === null || n.return === null)
      ) {
        (Qe = 1), (el = t), (qe = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = ut),
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
          var p = Sy(i);
          if (p !== null) {
            (p.flags &= -257),
              Cy(p, i, l, s, t),
              p.mode & 1 && xy(s, c, t),
              (t = p),
              (a = c);
            var m = t.updateQueue;
            if (m === null) {
              var h = new Set();
              h.add(a), (t.updateQueue = h);
            } else m.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              xy(s, c, t), Dm();
              break e;
            }
            a = Error(H(426));
          }
        } else if (Ie && l.mode & 1) {
          var x = Sy(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Cy(x, i, l, s, t),
              sm(Ds(a, l));
            break e;
          }
        }
        (s = a = Ds(a, l)),
          Qe !== 4 && (Qe = 2),
          Ti === null ? (Ti = [s]) : Ti.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = Gw(s, a, t);
              hy(s, v);
              break e;
            case 1:
              l = a;
              var y = s.type,
                b = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (Fr === null || !Fr.has(b))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = Yw(s, l, t);
                hy(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      fx(n);
    } catch (C) {
      (t = C), qe === n && n !== null && (qe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ux() {
  var e = Ha.current;
  return (Ha.current = Ua), e === null ? Ua : e;
}
function Dm() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
    et === null || (!(Eo & 268435455) && !(_c & 268435455)) || _r(et, ut);
}
function qa(e, t) {
  var n = ve;
  ve |= 2;
  var r = ux();
  (et !== e || ut !== t) && ((sr = null), yo(e, t));
  do
    try {
      uP();
      break;
    } catch (o) {
      cx(e, o);
    }
  while (!0);
  if ((lm(), (ve = n), (Ha.current = r), qe !== null)) throw Error(H(261));
  return (et = null), (ut = 0), Qe;
}
function uP() {
  for (; qe !== null; ) dx(qe);
}
function dP() {
  for (; qe !== null && !jD(); ) dx(qe);
}
function dx(e) {
  var t = mx(e.alternate, e, Gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? fx(e) : (qe = t),
    (wm.current = null);
}
function fx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = oP(n, t)), n !== null)) {
        (n.flags &= 32767), (qe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Qe = 6), (qe = null);
        return;
      }
    } else if (((n = rP(n, t, Gt)), n !== null)) {
      qe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      qe = t;
      return;
    }
    qe = t = e;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function co(e, t, n) {
  var r = xe,
    o = fn.transition;
  try {
    (fn.transition = null), (xe = 1), fP(e, t, n, r);
  } finally {
    (fn.transition = o), (xe = r);
  }
  return null;
}
function fP(e, t, n, r) {
  do hs();
  while (kr !== null);
  if (ve & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (GD(e, s),
    e === et && ((qe = et = null), (ut = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yl ||
      ((Yl = !0),
      hx(_a, function () {
        return hs(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = fn.transition), (fn.transition = null);
    var i = xe;
    xe = 1;
    var l = ve;
    (ve |= 4),
      (wm.current = null),
      iP(e, n),
      ix(n, e),
      TR(kf),
      (ka = !!Of),
      (kf = Of = null),
      (e.current = n),
      lP(n),
      LD(),
      (ve = l),
      (xe = i),
      (fn.transition = s);
  } else e.current = n;
  if (
    (Yl && ((Yl = !1), (kr = e), (Ya = o)),
    (s = e.pendingLanes),
    s === 0 && (Fr = null),
    BD(n.stateNode),
    zt(e, Ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ga) throw ((Ga = !1), (e = Qf), (Qf = null), e);
  return (
    Ya & 1 && e.tag !== 0 && hs(),
    (s = e.pendingLanes),
    s & 1 ? (e === Jf ? $i++ : (($i = 0), (Jf = e))) : ($i = 0),
    Zr(),
    null
  );
}
function hs() {
  if (kr !== null) {
    var e = Gb(Ya),
      t = fn.transition,
      n = xe;
    try {
      if (((fn.transition = null), (xe = 16 > e ? 16 : e), kr === null))
        var r = !1;
      else {
        if (((e = kr), (kr = null), (Ya = 0), ve & 6)) throw Error(H(331));
        var o = ve;
        for (ve |= 4, Q = e.current; Q !== null; ) {
          var s = Q,
            i = s.child;
          if (Q.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (Q = c; Q !== null; ) {
                  var u = Q;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ki(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (Q = d);
                  else
                    for (; Q !== null; ) {
                      u = Q;
                      var f = u.sibling,
                        p = u.return;
                      if ((rx(u), u === c)) {
                        Q = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (Q = f);
                        break;
                      }
                      Q = p;
                    }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var h = m.child;
                if (h !== null) {
                  m.child = null;
                  do {
                    var x = h.sibling;
                    (h.sibling = null), (h = x);
                  } while (h !== null);
                }
              }
              Q = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (Q = i);
          else
            e: for (; Q !== null; ) {
              if (((s = Q), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ki(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (Q = v);
                break e;
              }
              Q = s.return;
            }
        }
        var y = e.current;
        for (Q = y; Q !== null; ) {
          i = Q;
          var b = i.child;
          if (i.subtreeFlags & 2064 && b !== null) (b.return = i), (Q = b);
          else
            e: for (i = y; Q !== null; ) {
              if (((l = Q), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nc(9, l);
                  }
                } catch (C) {
                  Ue(l, l.return, C);
                }
              if (l === i) {
                Q = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (Q = S);
                break e;
              }
              Q = l.return;
            }
        }
        if (
          ((ve = o), Zr(), Xn && typeof Xn.onPostCommitFiberRoot == "function")
        )
          try {
            Xn.onPostCommitFiberRoot(wc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (xe = n), (fn.transition = t);
    }
  }
  return !1;
}
function jy(e, t, n) {
  (t = Ds(n, t)),
    (t = Gw(e, t, 1)),
    (e = Mr(e, t, 1)),
    (t = Rt()),
    e !== null && (gl(e, 1, t), zt(e, t));
}
function Ue(e, t, n) {
  if (e.tag === 3) jy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Fr === null || !Fr.has(r)))
        ) {
          (e = Ds(n, e)),
            (e = Yw(t, e, 1)),
            (t = Mr(t, e, 1)),
            (e = Rt()),
            t !== null && (gl(t, 1, e), zt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (ut & n) === n &&
      (Qe === 4 || (Qe === 3 && (ut & 130023424) === ut && 500 > Ge() - Sm)
        ? yo(e, 0)
        : (xm |= n)),
    zt(e, t);
}
function px(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ll), (Ll <<= 1), !(Ll & 130023424) && (Ll = 4194304))
      : (t = 1));
  var n = Rt();
  (e = mr(e, t)), e !== null && (gl(e, t, n), zt(e, n));
}
function mP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), px(e, n);
}
function hP(e, t) {
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
  r !== null && r.delete(t), px(e, n);
}
var mx;
mx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ft.current) jt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (jt = !1), nP(e, t, n);
      jt = !!(e.flags & 131072);
    }
  else (jt = !1), Ie && t.flags & 1048576 && vw(t, Ma, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ga(e, t), (e = t.pendingProps);
      var o = xs(t, bt.current);
      ms(t, n), (o = hm(null, t, r, e, o, n));
      var s = gm();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Bt(r) ? ((s = !0), ja(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            um(t),
            (o.updater = Pc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Bf(t, r, e, n),
            (t = Wf(null, t, r, !0, s, n)))
          : ((t.tag = 0), Ie && s && rm(t), Et(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ga(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = yP(r)),
          (e = En(r, e)),
          o)
        ) {
          case 0:
            t = Vf(null, t, r, e, n);
            break e;
          case 1:
            t = Ry(null, t, r, e, n);
            break e;
          case 11:
            t = Ey(null, t, r, e, n);
            break e;
          case 14:
            t = Dy(null, t, r, En(r.type, e), n);
            break e;
        }
        throw Error(H(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        Vf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        Ry(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Qw(t), e === null)) throw Error(H(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Ew(e, t),
          za(t, r, null, n);
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
            (o = Ds(Error(H(423)), t)), (t = Py(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ds(Error(H(424)), t)), (t = Py(e, t, r, n, o));
            break e;
          } else
            for (
              Yt = Lr(t.stateNode.containerInfo.firstChild),
                Kt = t,
                Ie = !0,
                Rn = null,
                n = Sw(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ss(), r === o)) {
            t = hr(e, t, n);
            break e;
          }
          Et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dw(t),
        e === null && Lf(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Tf(r, o) ? (i = null) : s !== null && Tf(r, s) && (t.flags |= 32),
        Xw(e, t),
        Et(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Lf(t), null;
    case 13:
      return Jw(e, t, n);
    case 4:
      return (
        dm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cs(t, null, r, n)) : Et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        Ey(e, t, r, o, n)
      );
    case 7:
      return Et(e, t, t.pendingProps, n), t.child;
    case 8:
      return Et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          _e(Fa, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Tn(s.value, i)) {
            if (s.children === o.children && !Ft.current) {
              t = hr(e, t, n);
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
                      (a = ur(-1, n & -n)), (a.tag = 2);
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
                      Mf(s.return, n, t),
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
                  Mf(i, n, t),
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
        Et(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ms(t, n),
        (o = hn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = En(r, t.pendingProps)),
        (o = En(r.type, o)),
        Dy(e, t, r, o, n)
      );
    case 15:
      return qw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        ga(e, t),
        (t.tag = 1),
        Bt(r) ? ((e = !0), ja(t)) : (e = !1),
        ms(t, n),
        Hw(t, r, o),
        Bf(t, r, o, n),
        Wf(null, t, r, !0, e, n)
      );
    case 19:
      return Zw(e, t, n);
    case 22:
      return Kw(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function hx(e, t) {
  return Vb(e, t);
}
function gP(e, t, n, r) {
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
function un(e, t, n, r) {
  return new gP(e, t, n, r);
}
function Rm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yP(e) {
  if (typeof e == "function") return Rm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hp)) return 11;
    if (e === Gp) return 14;
  }
  return 2;
}
function zr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = un(e.tag, t, e.key, e.mode)),
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
function ba(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Rm(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Jo:
        return vo(n.children, o, s, t);
      case Up:
        (i = 8), (o |= 8);
        break;
      case uf:
        return (
          (e = un(12, n, t, o | 2)), (e.elementType = uf), (e.lanes = s), e
        );
      case df:
        return (e = un(13, n, t, o)), (e.elementType = df), (e.lanes = s), e;
      case ff:
        return (e = un(19, n, t, o)), (e.elementType = ff), (e.lanes = s), e;
      case Db:
        return Oc(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cb:
              i = 10;
              break e;
            case Eb:
              i = 9;
              break e;
            case Hp:
              i = 11;
              break e;
            case Gp:
              i = 14;
              break e;
            case Dr:
              (i = 16), (r = null);
              break e;
          }
        throw Error(H(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = un(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function vo(e, t, n, r) {
  return (e = un(7, e, r, t)), (e.lanes = n), e;
}
function Oc(e, t, n, r) {
  return (
    (e = un(22, e, r, t)),
    (e.elementType = Db),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Nd(e, t, n) {
  return (e = un(6, e, null, t)), (e.lanes = n), e;
}
function _d(e, t, n) {
  return (
    (t = un(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vP(e, t, n, r, o) {
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
    (this.eventTimes = cd(0)),
    (this.expirationTimes = cd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Pm(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new vP(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = un(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    um(s),
    e
  );
}
function bP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gx(e) {
  if (!e) return Hr;
  e = e._reactInternals;
  e: {
    if (jo(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Bt(t.type)) {
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
    if (Bt(n)) return gw(e, n, t);
  }
  return t;
}
function yx(e, t, n, r, o, s, i, l, a) {
  return (
    (e = Pm(n, r, !0, e, o, s, i, l, a)),
    (e.context = gx(null)),
    (n = e.current),
    (r = Rt()),
    (o = Br(n)),
    (s = ur(r, o)),
    (s.callback = t ?? null),
    Mr(n, s, o),
    (e.current.lanes = o),
    gl(e, o, r),
    zt(e, r),
    e
  );
}
function kc(e, t, n, r) {
  var o = t.current,
    s = Rt(),
    i = Br(o);
  return (
    (n = gx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ur(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mr(o, t, i)),
    e !== null && (On(e, o, i, s), pa(e, o, i)),
    i
  );
}
function Ka(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ly(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nm(e, t) {
  Ly(e, t), (e = e.alternate) && Ly(e, t);
}
function wP() {
  return null;
}
var vx =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _m(e) {
  this._internalRoot = e;
}
Tc.prototype.render = _m.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  kc(e, t, null, null);
};
Tc.prototype.unmount = _m.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Do(function () {
      kc(null, e, null, null);
    }),
      (t[pr] = null);
  }
};
function Tc(e) {
  this._internalRoot = e;
}
Tc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Kb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nr.length && t !== 0 && t < Nr[n].priority; n++);
    Nr.splice(n, 0, e), n === 0 && Qb(e);
  }
};
function Om(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $c(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function My() {}
function xP(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Ka(i);
        s.call(c);
      };
    }
    var i = yx(t, r, e, 0, null, !1, !1, "", My);
    return (
      (e._reactRootContainer = i),
      (e[pr] = i.current),
      Gi(e.nodeType === 8 ? e.parentNode : e),
      Do(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Ka(a);
      l.call(c);
    };
  }
  var a = Pm(e, 0, !1, null, null, !1, !1, "", My);
  return (
    (e._reactRootContainer = a),
    (e[pr] = a.current),
    Gi(e.nodeType === 8 ? e.parentNode : e),
    Do(function () {
      kc(t, a, n, r);
    }),
    a
  );
}
function Ac(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ka(i);
        l.call(a);
      };
    }
    kc(t, i, e, o);
  } else i = xP(n, t, e, o, r);
  return Ka(i);
}
Yb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Si(t.pendingLanes);
        n !== 0 &&
          (Kp(t, n | 1), zt(t, Ge()), !(ve & 6) && ((Rs = Ge() + 500), Zr()));
      }
      break;
    case 13:
      Do(function () {
        var r = mr(e, 1);
        if (r !== null) {
          var o = Rt();
          On(r, e, 1, o);
        }
      }),
        Nm(e, 1);
  }
};
Xp = function (e) {
  if (e.tag === 13) {
    var t = mr(e, 134217728);
    if (t !== null) {
      var n = Rt();
      On(t, e, 134217728, n);
    }
    Nm(e, 134217728);
  }
};
qb = function (e) {
  if (e.tag === 13) {
    var t = Br(e),
      n = mr(e, t);
    if (n !== null) {
      var r = Rt();
      On(n, e, t, r);
    }
    Nm(e, t);
  }
};
Kb = function () {
  return xe;
};
Xb = function (e, t) {
  var n = xe;
  try {
    return (xe = e), t();
  } finally {
    xe = n;
  }
};
Sf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hf(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ec(r);
            if (!o) throw Error(H(90));
            Pb(r), hf(r, o);
          }
        }
      }
      break;
    case "textarea":
      _b(e, n);
      break;
    case "select":
      (t = n.value), t != null && us(e, !!n.multiple, t, !1);
  }
};
jb = Cm;
Lb = Do;
var SP = { usingClientEntryPoint: !1, Events: [vl, ns, Ec, Ab, Ib, Cm] },
  di = {
    findFiberByHostInstance: mo,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  CP = {
    bundleType: di.bundleType,
    version: di.version,
    rendererPackageName: di.rendererPackageName,
    rendererConfig: di.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: di.findFiberByHostInstance || wP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ql.isDisabled && ql.supportsFiber)
    try {
      (wc = ql.inject(CP)), (Xn = ql);
    } catch {}
}
en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = SP;
en.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Om(t)) throw Error(H(200));
  return bP(e, t, null, n);
};
en.createRoot = function (e, t) {
  if (!Om(e)) throw Error(H(299));
  var n = !1,
    r = "",
    o = vx;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Pm(e, 1, !1, null, null, n, !1, r, o)),
    (e[pr] = t.current),
    Gi(e.nodeType === 8 ? e.parentNode : e),
    new _m(t)
  );
};
en.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(H(188))
      : ((e = Object.keys(e).join(",")), Error(H(268, e)));
  return (e = Bb(t)), (e = e === null ? null : e.stateNode), e;
};
en.flushSync = function (e) {
  return Do(e);
};
en.hydrate = function (e, t, n) {
  if (!$c(t)) throw Error(H(200));
  return Ac(null, e, t, !0, n);
};
en.hydrateRoot = function (e, t, n) {
  if (!Om(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = vx;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = yx(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[pr] = t.current),
    Gi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Tc(t);
};
en.render = function (e, t, n) {
  if (!$c(t)) throw Error(H(200));
  return Ac(null, e, t, !1, n);
};
en.unmountComponentAtNode = function (e) {
  if (!$c(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (Do(function () {
        Ac(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pr] = null);
        });
      }),
      !0)
    : !1;
};
en.unstable_batchedUpdates = Cm;
en.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$c(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return Ac(e, t, n, !1, r);
};
en.version = "18.3.1-next-f1338f8080-20240426";
function bx() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx);
    } catch (e) {
      console.error(e);
    }
}
bx(), (bb.exports = en);
var eo = bb.exports;
const wx = yr(eo);
var Fy = eo;
(af.createRoot = Fy.createRoot), (af.hydrateRoot = Fy.hydrateRoot);
var Kn = function () {
  return (
    (Kn =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    Kn.apply(this, arguments)
  );
};
function xx(e, t) {
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
function EP(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var wa = "right-scroll-bar-position",
  xa = "width-before-scroll-bar",
  DP = "with-scroll-bars-hidden",
  RP = "--removed-body-scroll-bar-size";
function Od(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function PP(e, t) {
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
var NP = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  By = new WeakMap();
function _P(e, t) {
  var n = PP(null, function (r) {
    return e.forEach(function (o) {
      return Od(o, r);
    });
  });
  return (
    NP(
      function () {
        var r = By.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (l) {
            s.has(l) || Od(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || Od(l, i);
            });
        }
        By.set(n, e);
      },
      [e]
    ),
    n
  );
}
function OP(e) {
  return e;
}
function kP(e, t) {
  t === void 0 && (t = OP);
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
function TP(e) {
  e === void 0 && (e = {});
  var t = kP(null);
  return (t.options = Kn({ async: !0, ssr: !1 }, e)), t;
}
var Sx = function (e) {
  var t = e.sideCar,
    n = xx(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, Kn({}, n));
};
Sx.isSideCarExport = !0;
function $P(e, t) {
  return e.useMedium(t), Sx;
}
var Cx = TP(),
  kd = function () {},
  Ic = w.forwardRef(function (e, t) {
    var n = w.useRef(null),
      r = w.useState({
        onScrollCapture: kd,
        onWheelCapture: kd,
        onTouchMoveCapture: kd,
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
      p = e.noIsolation,
      m = e.inert,
      h = e.allowPinchZoom,
      x = e.as,
      v = x === void 0 ? "div" : x,
      y = e.gapMode,
      b = xx(e, [
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
      S = f,
      C = _P([n, t]),
      E = Kn(Kn({}, b), o);
    return w.createElement(
      w.Fragment,
      null,
      u &&
        w.createElement(S, {
          sideCar: Cx,
          removeScrollBar: c,
          shards: d,
          noIsolation: p,
          inert: m,
          setCallbacks: s,
          allowPinchZoom: !!h,
          lockRef: n,
          gapMode: y,
        }),
      i
        ? w.cloneElement(w.Children.only(l), Kn(Kn({}, E), { ref: C }))
        : w.createElement(v, Kn({}, E, { className: a, ref: C }), l)
    );
  });
Ic.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ic.classNames = { fullWidth: xa, zeroRight: wa };
var AP = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function IP() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = AP();
  return t && e.setAttribute("nonce", t), e;
}
function jP(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function LP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var MP = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = IP()) && (jP(t, n), LP(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  FP = function () {
    var e = MP();
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
  Ex = function () {
    var e = FP(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  BP = { left: 0, top: 0, right: 0, gap: 0 },
  Td = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  zP = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Td(n), Td(r), Td(o)];
  },
  VP = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return BP;
    var t = zP(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  WP = Ex(),
  gs = "data-scroll-locked",
  UP = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          DP,
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
          gs,
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
          wa,
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
          xa,
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
        .concat(wa, " .")
        .concat(
          wa,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(xa, " .")
        .concat(
          xa,
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
          gs,
          `] {
    `
        )
        .concat(RP, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  zy = function () {
    var e = parseInt(document.body.getAttribute(gs) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  HP = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(gs, (zy() + 1).toString()),
        function () {
          var e = zy() - 1;
          e <= 0
            ? document.body.removeAttribute(gs)
            : document.body.setAttribute(gs, e.toString());
        }
      );
    }, []);
  },
  GP = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    HP();
    var s = w.useMemo(
      function () {
        return VP(o);
      },
      [o]
    );
    return w.createElement(WP, { styles: UP(s, !t, o, n ? "" : "!important") });
  },
  tp = !1;
if (typeof window < "u")
  try {
    var Kl = Object.defineProperty({}, "passive", {
      get: function () {
        return (tp = !0), !0;
      },
    });
    window.addEventListener("test", Kl, Kl),
      window.removeEventListener("test", Kl, Kl);
  } catch {
    tp = !1;
  }
var Go = tp ? { passive: !1 } : !1,
  YP = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Dx = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !YP(e) && n[t] === "visible")
    );
  },
  qP = function (e) {
    return Dx(e, "overflowY");
  },
  KP = function (e) {
    return Dx(e, "overflowX");
  },
  Vy = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Rx(e, r);
      if (o) {
        var s = Px(e, r),
          i = s[1],
          l = s[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  XP = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  QP = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Rx = function (e, t) {
    return e === "v" ? qP(t) : KP(t);
  },
  Px = function (e, t) {
    return e === "v" ? XP(t) : QP(t);
  },
  JP = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ZP = function (e, t, n, r, o) {
    var s = JP(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      a = t.contains(l),
      c = !1,
      u = i > 0,
      d = 0,
      f = 0;
    do {
      var p = Px(e, l),
        m = p[0],
        h = p[1],
        x = p[2],
        v = h - x - s * m;
      (m || v) && Rx(e, l) && ((d += v), (f += m)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((u && (Math.abs(d) < 1 || !o)) || (!u && (Math.abs(f) < 1 || !o))) &&
        (c = !0),
      c
    );
  },
  Xl = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Wy = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Uy = function (e) {
    return e && "current" in e ? e.current : e;
  },
  eN = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  tN = function (e) {
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
  nN = 0,
  Yo = [];
function rN(e) {
  var t = w.useRef([]),
    n = w.useRef([0, 0]),
    r = w.useRef(),
    o = w.useState(nN++)[0],
    s = w.useState(Ex)[0],
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
          var h = EP([e.lockRef.current], (e.shards || []).map(Uy), !0).filter(
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
      var v = Xl(h),
        y = n.current,
        b = "deltaX" in h ? h.deltaX : y[0] - v[0],
        S = "deltaY" in h ? h.deltaY : y[1] - v[1],
        C,
        E = h.target,
        R = Math.abs(b) > Math.abs(S) ? "h" : "v";
      if ("touches" in h && R === "h" && E.type === "range") return !1;
      var P = Vy(R, E);
      if (!P) return !0;
      if ((P ? (C = R) : ((C = R === "v" ? "h" : "v"), (P = Vy(R, E))), !P))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (b || S) && (r.current = C), !C)
      )
        return !0;
      var I = r.current || C;
      return ZP(I, x, h, I === "h" ? b : S, !0);
    }, []),
    a = w.useCallback(function (h) {
      var x = h;
      if (!(!Yo.length || Yo[Yo.length - 1] !== s)) {
        var v = "deltaY" in x ? Wy(x) : Xl(x),
          y = t.current.filter(function (C) {
            return (
              C.name === x.type &&
              (C.target === x.target || x.target === C.shadowParent) &&
              eN(C.delta, v)
            );
          })[0];
        if (y && y.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!y) {
          var b = (i.current.shards || [])
              .map(Uy)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(x.target);
              }),
            S = b.length > 0 ? l(x, b[0]) : !i.current.noIsolation;
          S && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    c = w.useCallback(function (h, x, v, y) {
      var b = { name: h, delta: x, target: v, should: y, shadowParent: oN(v) };
      t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== b;
          });
        }, 1);
    }, []),
    u = w.useCallback(function (h) {
      (n.current = Xl(h)), (r.current = void 0);
    }, []),
    d = w.useCallback(function (h) {
      c(h.type, Wy(h), h.target, l(h, e.lockRef.current));
    }, []),
    f = w.useCallback(function (h) {
      c(h.type, Xl(h), h.target, l(h, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      Yo.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, Go),
      document.addEventListener("touchmove", a, Go),
      document.addEventListener("touchstart", u, Go),
      function () {
        (Yo = Yo.filter(function (h) {
          return h !== s;
        })),
          document.removeEventListener("wheel", a, Go),
          document.removeEventListener("touchmove", a, Go),
          document.removeEventListener("touchstart", u, Go);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    m = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    m ? w.createElement(s, { styles: tN(o) }) : null,
    p ? w.createElement(GP, { gapMode: e.gapMode }) : null
  );
}
function oN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const sN = $P(Cx, rN);
var Nx = w.forwardRef(function (e, t) {
  return w.createElement(Ic, Kn({}, e, { ref: t, sideCar: sN }));
});
Nx.classNames = Ic.classNames;
function vt(e) {
  return Object.keys(e);
}
function $d(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function km(e, t) {
  const n = { ...e },
    r = t;
  return (
    $d(e) &&
      $d(t) &&
      Object.keys(t).forEach((o) => {
        $d(r[o]) && o in e ? (n[o] = km(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function iN(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function lN(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)")
    ? e
    : (t = e.match(/^calc\((.*?)\)$/)) == null
    ? void 0
    : t[1].split("*")[0].trim();
}
function np(e) {
  const t = lN(e);
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
function Ad(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function _x(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? Ad(o) : o;
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
      if (r.includes(e)) return t ? Ad(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const s = `${Number(o) / 16}${e}`;
        return t ? Ad(s) : s;
      }
    }
    return r;
  }
  return n;
}
const V = _x("rem", { shouldScale: !0 }),
  Hy = _x("em");
function Bs(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
    {}
  );
}
function Ox(e) {
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
function Lo(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
    ? e.type !== w.Fragment
    : !1;
}
function Ln(e) {
  const t = w.createContext(null);
  return [
    ({ children: o, value: s }) => g.jsx(t.Provider, { value: s, children: o }),
    () => {
      const o = w.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function Tm(e = null) {
  const t = w.createContext(e);
  return [
    ({ children: o, value: s }) => g.jsx(t.Provider, { value: s, children: o }),
    () => w.useContext(t),
  ];
}
const aN = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function Mo(e) {
  return aN[e];
}
const cN = () => {};
function uN(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active
    ? t.onKeyDown || cN
    : (n) => {
        var r;
        n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
      };
}
function Re(e, t = "size", n = !0) {
  if (e !== void 0) return Ox(e) ? (n ? V(e) : e) : `var(--${t}-${e})`;
}
function Gr(e) {
  return Re(e, "mantine-spacing");
}
function Mn(e) {
  return e === void 0
    ? "var(--mantine-radius-default)"
    : Re(e, "mantine-radius");
}
function dt(e) {
  return Re(e, "mantine-font-size");
}
function kx(e) {
  return Re(e, "mantine-line-height", !1);
}
function $m(e) {
  if (e) return Re(e, "mantine-shadow", !1);
}
function Xa(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function dN(e, t) {
  return e in t.breakpoints ? np(t.breakpoints[e]) : np(e);
}
function Tx(e, t) {
  const n = e.map((r) => ({ value: r, px: dN(r, t) }));
  return n.sort((r, o) => r.px - o.px), n;
}
function Ei(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function fN(e, t, n) {
  return t === void 0 && n === void 0
    ? e
    : t !== void 0 && n === void 0
    ? Math.max(e, t)
    : Math.min(t === void 0 && n !== void 0 ? e : Math.max(e, t), n);
}
function $x() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Gy(e) {
  return typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1);
}
function fo(e) {
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
function jc(e, t) {
  const n = fo(e),
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
const Yy = ["mousedown", "touchstart"];
function pN(e, t, n) {
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
        (t || Yy).forEach((s) => document.addEventListener(s, o)),
        () => {
          (t || Yy).forEach((s) => document.removeEventListener(s, o));
        }
      );
    }, [r, e, n]),
    r
  );
}
function mN(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function hN(e, t) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function gN(
  e,
  t,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
) {
  const [r, o] = w.useState(n ? t : hN(e)),
    s = w.useRef();
  return (
    w.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (s.current = window.matchMedia(e)),
          o(s.current.matches),
          mN(s.current, (i) => o(i.matches))
        );
    }, [e]),
    r
  );
}
const wl = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function Ro(e, t) {
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
function Ax({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = w.useRef(),
    r = () => {
      var o;
      n.current &&
        "focus" in n.current &&
        typeof n.current.focus == "function" &&
        ((o = n.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    Ro(() => {
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
function yN(e, t = "body > :not(script)") {
  const n = $x(),
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
const vN = /input|select|textarea|button|object/,
  Ix = "a, input, select, textarea, button, object, [tabindex]";
function bN(e) {
  return e.style.display === "none";
}
function wN(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (bN(n)) return !1;
    n = n.parentNode;
  }
  return !0;
}
function jx(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function rp(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(jx(e));
  return (
    ((vN.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      n) &&
    wN(e)
  );
}
function Lx(e) {
  const t = jx(e);
  return (Number.isNaN(t) || t >= 0) && rp(e);
}
function xN(e) {
  return Array.from(e.querySelectorAll(Ix)).filter(Lx);
}
function SN(e, t) {
  const n = xN(e);
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
function CN(e = !0) {
  const t = w.useRef(),
    n = w.useRef(null),
    r = (s) => {
      let i = s.querySelector("[data-autofocus]");
      if (!i) {
        const l = Array.from(s.querySelectorAll(Ix));
        (i = l.find(Lx) || l.find(rp) || null), !i && rp(s) && (i = s);
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
          (n.current = yN(s)),
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
        i.key === "Tab" && t.current && SN(t.current, i);
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
const EN = be.useId || (() => {});
function DN() {
  const e = EN();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function to(e) {
  const t = DN(),
    [n, r] = w.useState(t);
  return (
    wl(() => {
      r($x());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : n
  );
}
function RN(e, t, n) {
  w.useEffect(
    () => (
      window.addEventListener(e, t, n),
      () => window.removeEventListener(e, t, n)
    ),
    [e, t]
  );
}
function Am(e, t) {
  typeof e == "function"
    ? e(t)
    : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Mx(...e) {
  return (t) => {
    e.forEach((n) => Am(n, t));
  };
}
function nn(...e) {
  return w.useCallback(Mx(...e), e);
}
function $n({
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
function Im(e, t) {
  return gN("(prefers-reduced-motion: reduce)", e, t);
}
function Po(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {},
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
var PN = {};
function NN() {
  return typeof process < "u" && PN ? "production" : "development";
}
function Fx(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Fx(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function wt() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Fx(e)) && (r && (r += " "), (r += t));
  return r;
}
const _N = {};
function ON(e) {
  const t = {};
  return (
    e.forEach((n) => {
      Object.entries(n).forEach(([r, o]) => {
        t[r] ? (t[r] = wt(t[r], o)) : (t[r] = o);
      });
    }),
    t
  );
}
function Lc({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const s = (Array.isArray(t) ? t : [t]).map((i) =>
    typeof i == "function" ? i(e, n, r) : i || _N
  );
  return ON(s);
}
function Qa({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce(
    (s, i) =>
      typeof i == "function" ? { ...s, ...i(e, n, r) } : { ...s, ...i },
    {}
  );
}
const Bx = w.createContext(null);
function Fo() {
  const e = w.useContext(Bx);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function kN() {
  return Fo().cssVariablesResolver;
}
function TN() {
  return Fo().classNamesPrefix;
}
function jm() {
  return Fo().getStyleNonce;
}
function $N() {
  return Fo().withStaticClasses;
}
function AN() {
  return Fo().headless;
}
function IN() {
  var e;
  return (e = Fo().stylesTransform) == null ? void 0 : e.sx;
}
function jN() {
  var e;
  return (e = Fo().stylesTransform) == null ? void 0 : e.styles;
}
function LN(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function MN(e) {
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
function FN(e) {
  const [t, n, r, o] = e
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function BN(e) {
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
  let d, f, p;
  return (
    a >= 0 && a < 1
      ? ((d = l), (f = c), (p = 0))
      : a >= 1 && a < 2
      ? ((d = c), (f = l), (p = 0))
      : a >= 2 && a < 3
      ? ((d = 0), (f = l), (p = c))
      : a >= 3 && a < 4
      ? ((d = 0), (f = c), (p = l))
      : a >= 4 && a < 5
      ? ((d = c), (f = 0), (p = l))
      : ((d = l), (f = 0), (p = c)),
    {
      r: Math.round((d + u) * 255),
      g: Math.round((f + u) * 255),
      b: Math.round((p + u) * 255),
      a: i || 1,
    }
  );
}
function Lm(e) {
  return LN(e)
    ? MN(e)
    : e.startsWith("rgb")
    ? FN(e)
    : e.startsWith("hsl")
    ? BN(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function Ql(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: s } = Lm(e),
    i = 1 - t,
    l = (a) => Math.round(a * i);
  return `rgba(${l(n)}, ${l(r)}, ${l(o)}, ${s})`;
}
function tl(e, t) {
  return typeof e.primaryShade == "number"
    ? e.primaryShade
    : t === "dark"
    ? e.primaryShade.dark
    : e.primaryShade.light;
}
function Id(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function zN(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function VN(e) {
  if (e.startsWith("oklch(")) return (zN(e) || 0) / 100;
  const { r: t, g: n, b: r } = Lm(e),
    o = t / 255,
    s = n / 255,
    i = r / 255,
    l = Id(o),
    a = Id(s),
    c = Id(i);
  return 0.2126 * l + 0.7152 * a + 0.0722 * c;
}
function fi(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : VN(e) > t;
}
function zs({ color: e, theme: t, colorScheme: n }) {
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
      isLight: fi(n === "dark" ? t.white : t.black, t.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: fi(
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
      isLight: fi(e === "white" ? t.white : t.black, t.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [r, o] = e.split("."),
    s = o ? Number(o) : void 0,
    i = r in t.colors;
  if (i) {
    const l = s !== void 0 ? t.colors[r][s] : t.colors[r][tl(t, n || "light")];
    return {
      color: r,
      value: l,
      shade: s,
      isThemeColor: i,
      isLight: fi(l, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${s}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: i,
    isLight: fi(e, t.luminanceThreshold),
    shade: s,
    variable: void 0,
  };
}
function No(e, t) {
  const n = zs({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function op(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0,
    },
    r = No(n.from, t),
    o = No(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Yn(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const s = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${s}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/")
      ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
      : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = Lm(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const qo = Yn,
  WN = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
    const s = zs({ color: e, theme: t }),
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
              border: `${V(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${s.color}-${s.shade})`,
              hover: `var(--mantine-color-${s.color}-${
                s.shade === 9 ? 8 : s.shade + 1
              })`,
              color: l,
              border: `${V(1)} solid transparent`,
            }
        : {
            background: e,
            hover: Ql(e, 0.1),
            color: l,
            border: `${V(1)} solid transparent`,
          };
    }
    if (n === "light") {
      if (s.isThemeColor) {
        if (s.shade === void 0)
          return {
            background: `var(--mantine-color-${e}-light)`,
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${V(1)} solid transparent`,
          };
        const l = t.colors[s.color][s.shade];
        return {
          background: Yn(l, 0.1),
          hover: Yn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${V(1)} solid transparent`,
        };
      }
      return {
        background: Yn(e, 0.1),
        hover: Yn(e, 0.12),
        color: e,
        border: `${V(1)} solid transparent`,
      };
    }
    if (n === "outline")
      return s.isThemeColor
        ? s.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${e}-outline-hover)`,
              color: `var(--mantine-color-${e}-outline)`,
              border: `${V(1)} solid var(--mantine-color-${e}-outline)`,
            }
          : {
              background: "transparent",
              hover: Yn(t.colors[s.color][s.shade], 0.05),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${V(1)} solid var(--mantine-color-${s.color}-${
                s.shade
              })`,
            }
        : {
            background: "transparent",
            hover: Yn(e, 0.05),
            color: e,
            border: `${V(1)} solid ${e}`,
          };
    if (n === "subtle") {
      if (s.isThemeColor) {
        if (s.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${V(1)} solid transparent`,
          };
        const l = t.colors[s.color][s.shade];
        return {
          background: "transparent",
          hover: Yn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${V(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: Yn(e, 0.12),
        color: e,
        border: `${V(1)} solid transparent`,
      };
    }
    return n === "transparent"
      ? s.isThemeColor
        ? s.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${V(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
              border: `${V(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: e,
            border: `${V(1)} solid transparent`,
          }
      : n === "white"
      ? s.isThemeColor
        ? s.shade === void 0
          ? {
              background: "var(--mantine-color-white)",
              hover: Ql(t.white, 0.01),
              color: `var(--mantine-color-${e}-filled)`,
              border: `${V(1)} solid transparent`,
            }
          : {
              background: "var(--mantine-color-white)",
              hover: Ql(t.white, 0.01),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${V(1)} solid transparent`,
            }
        : {
            background: "var(--mantine-color-white)",
            hover: Ql(t.white, 0.01),
            color: e,
            border: `${V(1)} solid transparent`,
          }
      : n === "gradient"
      ? {
          background: op(r, t),
          hover: op(r, t),
          color: "var(--mantine-color-white)",
          border: "none",
        }
      : n === "default"
      ? {
          background: "var(--mantine-color-default)",
          hover: "var(--mantine-color-default-hover)",
          color: "var(--mantine-color-default-color)",
          border: `${V(1)} solid var(--mantine-color-default-border)`,
        }
      : {};
  },
  UN = {
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
  qy =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Mm = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: UN,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: WN,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: qy,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: qy,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: V(34), lineHeight: "1.3" },
        h2: { fontSize: V(26), lineHeight: "1.35" },
        h3: { fontSize: V(22), lineHeight: "1.4" },
        h4: { fontSize: V(18), lineHeight: "1.45" },
        h5: { fontSize: V(16), lineHeight: "1.5" },
        h6: { fontSize: V(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: V(12), sm: V(14), md: V(16), lg: V(18), xl: V(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    radius: { xs: V(2), sm: V(4), md: V(8), lg: V(16), xl: V(32) },
    spacing: { xs: V(10), sm: V(12), md: V(16), lg: V(20), xl: V(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${V(1)} ${V(3)} rgba(0, 0, 0, 0.05), 0 ${V(1)} ${V(
        2
      )} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${V(1)} ${V(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${V(
        10
      )} ${V(15)} ${V(-5)}, rgba(0, 0, 0, 0.04) 0 ${V(7)} ${V(7)} ${V(-5)}`,
      md: `0 ${V(1)} ${V(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${V(
        20
      )} ${V(25)} ${V(-5)}, rgba(0, 0, 0, 0.04) 0 ${V(10)} ${V(10)} ${V(-5)}`,
      lg: `0 ${V(1)} ${V(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${V(
        28
      )} ${V(23)} ${V(-7)}, rgba(0, 0, 0, 0.04) 0 ${V(12)} ${V(12)} ${V(-7)}`,
      xl: `0 ${V(1)} ${V(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${V(
        36
      )} ${V(28)} ${V(-7)}, rgba(0, 0, 0, 0.04) 0 ${V(17)} ${V(17)} ${V(-7)}`,
    },
    other: {},
    components: {},
  };
function Ky(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function HN({ key: e = "mantine-color-scheme-value" } = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(e);
        return Ky(r) ? r : n;
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
          Ky(r.newValue) &&
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
const GN =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  Xy =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function jd(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Qy(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(GN);
  if (
    typeof e.primaryShade == "object" &&
    (!jd(e.primaryShade.dark) || !jd(e.primaryShade.light))
  )
    throw new Error(Xy);
  if (typeof e.primaryShade == "number" && !jd(e.primaryShade))
    throw new Error(Xy);
}
function YN(e, t) {
  var r;
  if (!t) return Qy(e), e;
  const n = km(e, t);
  return (
    t.fontFamily &&
      !((r = t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    Qy(n),
    n
  );
}
const Fm = w.createContext(null),
  qN = () => w.useContext(Fm) || Mm;
function rn() {
  const e = w.useContext(Fm);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function zx({ theme: e, children: t, inherit: n = !0 }) {
  const r = qN(),
    o = w.useMemo(() => YN(n ? r : Mm, e), [e, r, n]);
  return g.jsx(Fm.Provider, { value: o, children: t });
}
zx.displayName = "@mantine/core/MantineThemeProvider";
function KN() {
  const e = rn(),
    t = jm(),
    n = vt(e.breakpoints).reduce((r, o) => {
      const s = e.breakpoints[o].includes("px"),
        i = np(e.breakpoints[o]),
        l = s ? `${i - 0.1}px` : Hy(i - 0.1),
        a = s ? `${i}px` : Hy(i);
      return `${r}@media (max-width: ${l}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, "");
  return g.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function Ld(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n};`)
    .join("");
}
function Md(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function XN(e, t) {
  const n = Ld(e.variables),
    r = n ? Md(t, n) : "",
    o = Ld(e.dark),
    s = o ? Md(`${t}[data-mantine-color-scheme="dark"]`, o) : "",
    i = Ld(e.light),
    l = i ? Md(`${t}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${s}${l}`;
}
function Vx({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) &&
    zs({ color: e || t.primaryColor, theme: t }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function Jy(e, t) {
  return Vx({
    color: e.colors[e.primaryColor][tl(e, t)],
    theme: e,
    autoContrast: null,
  });
}
function Jl({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0,
}) {
  if (!e.colors[t]) return {};
  if (n === "light") {
    const l = tl(e, "light"),
      a = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
          l === 9 ? 8 : l + 1
        })`,
        [`--mantine-color-${r}-light`]: qo(e.colors[t][l], 0.1),
        [`--mantine-color-${r}-light-hover`]: qo(e.colors[t][l], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline-hover`]: qo(e.colors[t][l], 0.05),
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
  const s = tl(e, "dark"),
    i = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
        s === 9 ? 8 : s + 1
      })`,
      [`--mantine-color-${r}-light`]: qo(e.colors[t][Math.max(0, s - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: qo(
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
      [`--mantine-color-${r}-outline-hover`]: qo(
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
function QN(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function Ko(e, t, n) {
  vt(t).forEach((r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }));
}
const Wx = (e) => {
  const t = tl(e, "light"),
    n =
      e.defaultRadius in e.radius
        ? e.radius[e.defaultRadius]
        : V(e.defaultRadius),
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
        "--mantine-primary-color-contrast": Jy(e, "light"),
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
        "--mantine-primary-color-contrast": Jy(e, "dark"),
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
  Ko(r.variables, e.breakpoints, "breakpoint"),
    Ko(r.variables, e.spacing, "spacing"),
    Ko(r.variables, e.fontSizes, "font-size"),
    Ko(r.variables, e.lineHeights, "line-height"),
    Ko(r.variables, e.shadows, "shadow"),
    Ko(r.variables, e.radius, "radius"),
    e.colors[e.primaryColor].forEach((s, i) => {
      r.variables[
        `--mantine-primary-color-${i}`
      ] = `var(--mantine-color-${e.primaryColor}-${i})`;
    }),
    vt(e.colors).forEach((s) => {
      const i = e.colors[s];
      if (QN(i)) {
        Object.assign(
          r.light,
          Jl({
            theme: e,
            name: i.name,
            color: i.light,
            colorScheme: "light",
            withColorValues: !0,
          })
        ),
          Object.assign(
            r.dark,
            Jl({
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
          Jl({ theme: e, color: s, colorScheme: "light", withColorValues: !1 })
        ),
        Object.assign(
          r.dark,
          Jl({ theme: e, color: s, colorScheme: "dark", withColorValues: !1 })
        );
    });
  const o = e.headings.sizes;
  return (
    vt(o).forEach((s) => {
      (r.variables[`--mantine-${s}-font-size`] = o[s].fontSize),
        (r.variables[`--mantine-${s}-line-height`] = o[s].lineHeight),
        (r.variables[`--mantine-${s}-font-weight`] =
          o[s].fontWeight || e.headings.fontWeight);
    }),
    r
  );
};
function JN({ theme: e, generator: t }) {
  const n = Wx(e),
    r = t == null ? void 0 : t(e);
  return r ? km(n, r) : n;
}
const Fd = Wx(Mm);
function ZN(e) {
  const t = { variables: {}, light: {}, dark: {} };
  return (
    vt(e.variables).forEach((n) => {
      Fd.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
    }),
    vt(e.light).forEach((n) => {
      Fd.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
    }),
    vt(e.dark).forEach((n) => {
      Fd.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
    }),
    t
  );
}
function e_(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Ux({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
  const n = rn(),
    r = jm(),
    o = kN(),
    s = JN({ theme: n, generator: o }),
    i = e === ":root" && t,
    l = i ? ZN(s) : s,
    a = XN(l, e);
  return a
    ? g.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${a}${i ? "" : e_(e)}` },
      })
    : null;
}
Ux.displayName = "@mantine/CssVariables";
function t_() {
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
function Xo(e, t) {
  var r;
  const n =
    e !== "auto"
      ? e
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function n_({
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
        r || (Xo(u, n), i(u), e.set(u));
      },
      [e.set, l, r]
    ),
    c = w.useCallback(() => {
      i(t), Xo(t, n), e.clear();
    }, [e.clear, t]);
  return (
    w.useEffect(
      () => (e.subscribe(a), e.unsubscribe),
      [e.subscribe, e.unsubscribe]
    ),
    wl(() => {
      Xo(e.get(t), n);
    }, []),
    w.useEffect(() => {
      var d;
      if (r) return Xo(r, n), () => {};
      r === void 0 && Xo(s, n),
        (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const u = (f) => {
        s === "auto" && Xo(f.matches ? "dark" : "light", n);
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
function r_({ respectReducedMotion: e, getRootElement: t }) {
  wl(() => {
    var n;
    e &&
      ((n = t()) == null ||
        n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
t_();
function Hx({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: s = !0,
  withCssVariables: i = !0,
  cssVariablesSelector: l = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: c = HN(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: p,
  stylesTransform: m,
}) {
  const {
    colorScheme: h,
    setColorScheme: x,
    clearColorScheme: v,
  } = n_({
    defaultColorScheme: u,
    forceColorScheme: p,
    manager: c,
    getRootElement: d,
  });
  return (
    r_({
      respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
      getRootElement: d,
    }),
    g.jsx(Bx.Provider, {
      value: {
        colorScheme: h,
        setColorScheme: x,
        clearColorScheme: v,
        getRootElement: d,
        classNamesPrefix: a,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: l,
        withStaticClasses: r,
        stylesTransform: m,
      },
      children: g.jsxs(zx, {
        theme: e,
        children: [
          i &&
            g.jsx(Ux, { cssVariablesSelector: l, deduplicateCssVariables: s }),
          o && g.jsx(KN, {}),
          t,
        ],
      }),
    })
  );
}
Hx.displayName = "@mantine/core/MantineProvider";
function Bo({ classNames: e, styles: t, props: n, stylesCtx: r }) {
  const o = rn();
  return {
    resolvedClassNames: Lc({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0,
    }),
    resolvedStyles: Qa({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0,
    }),
  };
}
const o_ = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function s_({ theme: e, options: t, unstyled: n }) {
  return wt(
    (t == null ? void 0 : t.focusable) &&
      !n &&
      (e.focusClassName || o_[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function i_({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
  return Lc({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t,
  })[e];
}
function Zy({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
  return Lc({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function l_({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function a_({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function c_({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function u_({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
  return e.map((s) => {
    var i, l;
    return (l = Lc({
      theme: t,
      classNames: (i = t.components[s]) == null ? void 0 : i.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : l[n];
  });
}
function d_({ options: e, classes: t, selector: n, unstyled: r }) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function f_({
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
  headless: p,
  transformedStyles: m,
}) {
  return wt(
    s_({ theme: e, options: t, unstyled: l || p }),
    u_({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    d_({ options: t, classes: i, selector: r, unstyled: l }),
    Zy({ selector: r, stylesCtx: d, theme: e, classNames: s, props: u }),
    Zy({ selector: r, stylesCtx: d, theme: e, classNames: m, props: u }),
    i_({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    l_({ rootSelector: c, selector: r, className: a }),
    a_({ selector: r, classes: i, unstyled: l || p }),
    f &&
      !p &&
      c_({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: t == null ? void 0 : t.withStaticClass,
      }),
    t == null ? void 0 : t.className
  );
}
function p_({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
  return t
    .map((s) => {
      var i;
      return Qa({
        theme: e,
        styles: (i = e.components[s]) == null ? void 0 : i.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((s, i) => ({ ...s, ...i }), {});
}
function sp({ style: e, theme: t }) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...sp({ style: r, theme: t }) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function m_(e) {
  return e.reduce(
    (t, n) => (
      n &&
        Object.keys(n).forEach((r) => {
          t[r] = { ...t[r], ...Bs(n[r]) };
        }),
      t
    ),
    {}
  );
}
function h_({
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
  return (a = m_([
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
function g_({
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
      p_({ theme: e, themeName: t, props: o, stylesCtx: s, selector: n })),
    ...(!f && Qa({ theme: e, styles: l, props: o, stylesCtx: s })[n]),
    ...(!f &&
      Qa({
        theme: e,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || o,
        stylesCtx: s,
      })[n]),
    ...h_({
      theme: e,
      props: o,
      stylesCtx: s,
      vars: c,
      varsResolver: u,
      selector: n,
      themeName: t,
      headless: d,
    }),
    ...(i === n ? sp({ style: a, theme: e }) : null),
    ...sp({ style: r == null ? void 0 : r.style, theme: e }),
  };
}
function y_({ props: e, stylesCtx: t, themeName: n }) {
  var i;
  const r = rn(),
    o = (i = jN()) == null ? void 0 : i();
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
  const f = rn(),
    p = TN(),
    m = $N(),
    h = AN(),
    x = (Array.isArray(e) ? e : [e]).filter((b) => b),
    { withStylesTransform: v, getTransformedStyles: y } = y_({
      props: n,
      stylesCtx: r,
      themeName: x,
    });
  return (b, S) => ({
    className: f_({
      theme: f,
      options: S,
      themeName: x,
      selector: b,
      classNamesPrefix: p,
      classNames: a,
      classes: t,
      unstyled: l,
      className: o,
      rootSelector: i,
      props: n,
      stylesCtx: r,
      withStaticClasses: m,
      headless: h,
      transformedStyles: y([S == null ? void 0 : S.styles, c]),
    }),
    style: g_({
      theme: f,
      themeName: x,
      selector: b,
      options: S,
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
function v_(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function W(e, t, n) {
  var i;
  const r = rn(),
    o = (i = r.components[e]) == null ? void 0 : i.defaultProps,
    s = typeof o == "function" ? o(r) : o;
  return { ...t, ...s, ...Bs(n) };
}
function ev(e) {
  return vt(e)
    .reduce((t, n) => (e[n] !== void 0 ? `${t}${iN(n)}:${e[n]};` : t), "")
    .trim();
}
function b_({ selector: e, styles: t, media: n }) {
  const r = t ? ev(t) : "",
    o = Array.isArray(n)
      ? n.map((s) => `@media${s.query}{${e}{${ev(s.styles)}}}`)
      : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function Mc({ selector: e, styles: t, media: n }) {
  const r = jm();
  return g.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: r == null ? void 0 : r(),
    dangerouslySetInnerHTML: {
      __html: b_({ selector: e, styles: t, media: n }),
    },
  });
}
function Vs(e) {
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
    pt: p,
    pb: m,
    pl: h,
    pr: x,
    pe: v,
    ps: y,
    bg: b,
    c: S,
    opacity: C,
    ff: E,
    fz: R,
    fw: P,
    lts: I,
    ta: _,
    lh: T,
    fs: M,
    tt: z,
    td: L,
    w: $,
    miw: O,
    maw: k,
    h: N,
    mih: D,
    mah: j,
    bgsz: A,
    bgp: B,
    bgr: Y,
    bga: J,
    pos: ee,
    top: oe,
    left: ne,
    bottom: ye,
    right: se,
    inset: ce,
    display: te,
    flex: me,
    hiddenFrom: le,
    visibleFrom: ae,
    lightHidden: $e,
    darkHidden: He,
    sx: Ee,
    ...st
  } = e;
  return {
    styleProps: Bs({
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
      pt: p,
      pb: m,
      pl: h,
      pr: x,
      pe: v,
      ps: y,
      bg: b,
      c: S,
      opacity: C,
      ff: E,
      fz: R,
      fw: P,
      lts: I,
      ta: _,
      lh: T,
      fs: M,
      tt: z,
      td: L,
      w: $,
      miw: O,
      maw: k,
      h: N,
      mih: D,
      mah: j,
      bgsz: A,
      bgp: B,
      bgr: Y,
      bga: J,
      pos: ee,
      top: oe,
      left: ne,
      bottom: ye,
      right: se,
      inset: ce,
      display: te,
      flex: me,
      hiddenFrom: le,
      visibleFrom: ae,
      lightHidden: $e,
      darkHidden: He,
      sx: Ee,
    }),
    rest: st,
  };
}
const w_ = {
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
function Gx(e, t) {
  const n = zs({ color: e, theme: t });
  return n.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : n.color === "bright"
    ? "var(--mantine-color-bright)"
    : n.variable
    ? `var(${n.variable})`
    : n.color;
}
function x_(e, t) {
  const n = zs({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : Gx(e, t);
}
const tv = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function S_(e) {
  return typeof e == "string" && e in tv ? tv[e] : e;
}
const C_ = ["h1", "h2", "h3", "h4", "h5", "h6"];
function E_(e, t) {
  return typeof e == "string" && e in t.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == "string" && C_.includes(e)
    ? `var(--mantine-${e}-font-size)`
    : typeof e == "number" || typeof e == "string"
    ? V(e)
    : e;
}
function D_(e) {
  return e;
}
const R_ = ["h1", "h2", "h3", "h4", "h5", "h6"];
function P_(e, t) {
  return typeof e == "string" && e in t.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == "string" && R_.includes(e)
    ? `var(--mantine-${e}-line-height)`
    : e;
}
function N_(e) {
  return typeof e == "number" ? V(e) : e;
}
function __(e, t) {
  if (typeof e == "number") return V(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing)) return V(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const Bd = {
  color: Gx,
  textColor: x_,
  fontSize: E_,
  spacing: __,
  identity: D_,
  size: N_,
  lineHeight: P_,
  fontFamily: S_,
};
function nv(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function O_({ media: e, ...t }) {
  const r = Object.keys(e)
    .sort((o, s) => Number(nv(o)) - Number(nv(s)))
    .map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function k_(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function T_(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function $_(e) {
  return typeof e == "object" && e !== null
    ? vt(e).filter((t) => t !== "base")
    : [];
}
function A_(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function Yx({ styleProps: e, data: t, theme: n }) {
  return O_(
    vt(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
        const s = t[o],
          i = Array.isArray(s.property) ? s.property : [s.property],
          l = T_(e[o]);
        if (!k_(e[o]))
          return (
            i.forEach((c) => {
              r.inlineStyles[c] = Bd[s.type](l, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const a = $_(e[o]);
        return (
          i.forEach((c) => {
            l && (r.styles[c] = Bd[s.type](l, n)),
              a.forEach((u) => {
                const d = `(min-width: ${n.breakpoints[u]})`;
                r.media[d] = { ...r.media[d], [c]: Bd[s.type](A_(e[o], u), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
    )
  );
}
function Fc() {
  return `__m__-${w.useId().replace(/:/g, "")}`;
}
function qx(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...qx(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function Kx(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function I_(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (t[Kx(n)] = e[n]), t
    );
  }, {});
}
function Xx(e) {
  return e
    ? typeof e == "string"
      ? { [Kx(e)]: !0 }
      : Array.isArray(e)
      ? [...e].reduce((t, n) => ({ ...t, ...Xx(n) }), {})
      : I_(e)
    : null;
}
function ip(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...ip(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function j_({ theme: e, style: t, vars: n, styleProps: r }) {
  const o = ip(t, e),
    s = ip(n, e);
  return { ...o, ...s, ...r };
}
const Qx = w.forwardRef(
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
    p
  ) => {
    var R;
    const m = rn(),
      h = e || "div",
      { styleProps: x, rest: v } = Vs(f),
      y = IN(),
      b = (R = y == null ? void 0 : y()) == null ? void 0 : R(x.sx),
      S = Fc(),
      C = Yx({ styleProps: x, theme: m, data: w_ }),
      E = {
        ref: p,
        style: j_({ theme: m, style: t, vars: n, styleProps: C.inlineStyles }),
        className: wt(r, b, {
          [S]: C.hasResponsiveStyles,
          "mantine-light-hidden": c,
          "mantine-dark-hidden": u,
          [`mantine-hidden-from-${l}`]: l,
          [`mantine-visible-from-${a}`]: a,
        }),
        "data-variant": o,
        "data-size": Ox(i) ? void 0 : i || void 0,
        ...Xx(s),
        ...v,
      };
    return g.jsxs(g.Fragment, {
      children: [
        C.hasResponsiveStyles &&
          g.jsx(Mc, { selector: `.${S}`, styles: C.styles, media: C.media }),
        typeof d == "function" ? d(E) : g.jsx(h, { ...E }),
      ],
    });
  }
);
Qx.displayName = "@mantine/core/Box";
const K = Qx;
function Jx(e) {
  return e;
}
function X(e) {
  const t = w.forwardRef(e);
  return (t.extend = Jx), t;
}
function yn(e) {
  const t = w.forwardRef(e);
  return (t.extend = Jx), t;
}
const L_ = w.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function Bm() {
  return w.useContext(L_);
}
function M_(e) {
  if (!e || typeof e == "string") return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function zd(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const pi = typeof window < "u" && window.requestAnimationFrame;
function F_({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {},
  opened: r,
}) {
  const o = w.useRef(null),
    s = 0,
    i = { display: "none", height: 0, overflow: "hidden" },
    [l, a] = w.useState(r ? {} : i),
    c = (m) => {
      eo.flushSync(() => a(m));
    },
    u = (m) => {
      c((h) => ({ ...h, ...m }));
    };
  function d(m) {
    const h = e || M_(m);
    return { transition: `height ${h}ms ${t}, opacity ${h}ms ${t}` };
  }
  Ro(() => {
    typeof pi == "function" &&
      pi(
        r
          ? () => {
              u({ willChange: "height", display: "block", overflow: "hidden" }),
                pi(() => {
                  const m = zd(o);
                  u({ ...d(m), height: m });
                });
            }
          : () => {
              const m = zd(o);
              u({ ...d(m), willChange: "height", height: m }),
                pi(() => u({ height: s, overflow: "hidden" }));
            }
      );
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const h = zd(o);
        h === l.height ? c({}) : u({ height: h }), n();
      } else l.height === s && (c(i), n());
  };
  function p({ style: m = {}, refKey: h = "ref", ...x } = {}) {
    const v = x[h];
    return {
      "aria-hidden": !r,
      ...x,
      [h]: Mx(o, v),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...l },
    };
  }
  return p;
}
const B_ = {
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    animateOpacity: !0,
  },
  Bc = X((e, t) => {
    const {
        children: n,
        in: r,
        transitionDuration: o,
        transitionTimingFunction: s,
        style: i,
        onTransitionEnd: l,
        animateOpacity: a,
        ...c
      } = W("Collapse", B_, e),
      u = rn(),
      d = Im(),
      p = (u.respectReducedMotion ? d : !1) ? 0 : o,
      m = F_({
        opened: r,
        transitionDuration: p,
        transitionTimingFunction: s,
        onTransitionEnd: l,
      });
    return p === 0
      ? r
        ? g.jsx(K, { ...c, children: n })
        : null
      : g.jsx(K, {
          ...m({
            style: {
              opacity: r || !a ? 1 : 0,
              transition: a ? `opacity ${p}ms ${s}` : "none",
              ...qx(i, u),
            },
            ref: t,
            ...c,
          }),
          children: n,
        });
  });
Bc.displayName = "@mantine/core/Collapse";
const [z_, vn] = Ln("ScrollArea.Root component was not found in tree");
function Ps(e, t) {
  const n = fo(t);
  wl(() => {
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
const V_ = w.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = vn(),
      [s, i] = w.useState(0),
      [l, a] = w.useState(0),
      c = !!(s && l);
    return (
      Ps(o.scrollbarX, () => {
        var d;
        const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
        o.onCornerHeightChange(u), a(u);
      }),
      Ps(o.scrollbarY, () => {
        var d;
        const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
        o.onCornerWidthChange(u), i(u);
      }),
      c
        ? g.jsx("div", { ...r, ref: t, style: { ...n, width: s, height: l } })
        : null
    );
  }),
  W_ = w.forwardRef((e, t) => {
    const n = vn(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? g.jsx(V_, { ...e, ref: t }) : null;
  }),
  U_ = { scrollHideDelay: 1e3, type: "hover" },
  Zx = w.forwardRef((e, t) => {
    const n = W("ScrollAreaRoot", U_, e),
      { type: r, scrollHideDelay: o, scrollbars: s, ...i } = n,
      [l, a] = w.useState(null),
      [c, u] = w.useState(null),
      [d, f] = w.useState(null),
      [p, m] = w.useState(null),
      [h, x] = w.useState(null),
      [v, y] = w.useState(0),
      [b, S] = w.useState(0),
      [C, E] = w.useState(!1),
      [R, P] = w.useState(!1),
      I = nn(t, (_) => a(_));
    return g.jsx(z_, {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: l,
        viewport: c,
        onViewportChange: u,
        content: d,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: m,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: E,
        scrollbarY: h,
        onScrollbarYChange: x,
        scrollbarYEnabled: R,
        onScrollbarYEnabledChange: P,
        onCornerWidthChange: y,
        onCornerHeightChange: S,
      },
      children: g.jsx(K, {
        ...i,
        ref: I,
        __vars: {
          "--sa-corner-width": s !== "xy" ? "0px" : `${v}px`,
          "--sa-corner-height": s !== "xy" ? "0px" : `${b}px`,
        },
      }),
    });
  });
Zx.displayName = "@mantine/core/ScrollAreaRoot";
function eS(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function zc(e) {
  const t = eS(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function tS(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function H_(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function rv(e, t, n = "ltr") {
  const r = zc(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - o,
    i = t.content - t.viewport,
    l = s - r,
    a = n === "ltr" ? [0, i] : [i * -1, 0],
    c = H_(e, a);
  return tS([0, i], [0, l])(c);
}
function G_(e, t, n, r = "ltr") {
  const o = zc(n),
    s = o / 2,
    i = t || s,
    l = o - i,
    a = n.scrollbar.paddingStart + i,
    c = n.scrollbar.size - n.scrollbar.paddingEnd - l,
    u = n.content - n.viewport,
    d = r === "ltr" ? [0, u] : [u * -1, 0];
  return tS([a, c], d)(e);
}
function nS(e, t) {
  return e > 0 && e < t;
}
function Ja(e) {
  return e ? parseInt(e, 10) : 0;
}
function bo(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [Y_, rS] = Ln("ScrollAreaScrollbar was not found in tree"),
  oS = w.forwardRef((e, t) => {
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
      f = vn(),
      [p, m] = w.useState(null),
      h = nn(t, (P) => m(P)),
      x = w.useRef(null),
      v = w.useRef(""),
      { viewport: y } = f,
      b = n.content - n.viewport,
      S = fo(c),
      C = fo(l),
      E = jc(u, 10),
      R = (P) => {
        if (x.current) {
          const I = P.clientX - x.current.left,
            _ = P.clientY - x.current.top;
          a({ x: I, y: _ });
        }
      };
    return (
      w.useEffect(() => {
        const P = (I) => {
          const _ = I.target;
          (p == null ? void 0 : p.contains(_)) && S(I, b);
        };
        return (
          document.addEventListener("wheel", P, { passive: !1 }),
          () => document.removeEventListener("wheel", P, { passive: !1 })
        );
      }, [y, p, b, S]),
      w.useEffect(C, [n, C]),
      Ps(p, E),
      Ps(f.content, E),
      g.jsx(Y_, {
        value: {
          scrollbar: p,
          hasThumb: r,
          onThumbChange: fo(o),
          onThumbPointerUp: fo(s),
          onThumbPositionChange: C,
          onThumbPointerDown: fo(i),
        },
        children: g.jsx("div", {
          ...d,
          ref: h,
          style: { position: "absolute", ...d.style },
          onPointerDown: bo(e.onPointerDown, (P) => {
            P.button === 0 &&
              (P.target.setPointerCapture(P.pointerId),
              (x.current = p.getBoundingClientRect()),
              (v.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              R(P));
          }),
          onPointerMove: bo(e.onPointerMove, R),
          onPointerUp: bo(e.onPointerUp, (P) => {
            const I = P.target;
            I.hasPointerCapture(P.pointerId) &&
              I.releasePointerCapture(P.pointerId),
              (document.body.style.webkitUserSelect = v.current),
              (x.current = null);
          }),
        }),
      })
    );
  }),
  q_ = w.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = vn(),
      [l, a] = w.useState(),
      c = w.useRef(null),
      u = nn(t, c, i.onScrollbarXChange);
    return (
      w.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      g.jsx(oS, {
        "data-orientation": "horizontal",
        ...s,
        ref: u,
        sizes: n,
        style: { ...o, "--sa-thumb-width": `${zc(n)}px` },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const p = i.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), nS(p, f) && d.preventDefault();
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
                paddingStart: Ja(l.paddingLeft),
                paddingEnd: Ja(l.paddingRight),
              },
            });
        },
      })
    );
  }),
  K_ = w.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = vn(),
      [l, a] = w.useState(),
      c = w.useRef(null),
      u = nn(t, c, i.onScrollbarYChange);
    return (
      w.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      g.jsx(oS, {
        ...s,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: { "--sa-thumb-height": `${zc(n)}px`, ...o },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const p = i.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), nS(p, f) && d.preventDefault();
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
                paddingStart: Ja(l.paddingTop),
                paddingEnd: Ja(l.paddingBottom),
              },
            });
        },
      })
    );
  }),
  zm = w.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      { dir: o } = Bm(),
      s = vn(),
      i = w.useRef(null),
      l = w.useRef(0),
      [a, c] = w.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = eS(a.viewport, a.content),
      d = {
        ...r,
        sizes: a,
        onSizesChange: c,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (p) => {
          i.current = p;
        },
        onThumbPointerUp: () => {
          l.current = 0;
        },
        onThumbPointerDown: (p) => {
          l.current = p;
        },
      },
      f = (p, m) => G_(p, l.current, a, m);
    return n === "horizontal"
      ? g.jsx(q_, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const p = s.viewport.scrollLeft,
                m = rv(p, a, o);
              i.current.style.transform = `translate3d(${m}px, 0, 0)`;
            }
          },
          onWheelScroll: (p) => {
            s.viewport && (s.viewport.scrollLeft = p);
          },
          onDragScroll: (p) => {
            s.viewport && (s.viewport.scrollLeft = f(p, o));
          },
        })
      : n === "vertical"
      ? g.jsx(K_, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const p = s.viewport.scrollTop,
                m = rv(p, a);
              i.current.style.transform = `translate3d(0, ${m}px, 0)`;
            }
          },
          onWheelScroll: (p) => {
            s.viewport && (s.viewport.scrollTop = p);
          },
          onDragScroll: (p) => {
            s.viewport && (s.viewport.scrollTop = f(p));
          },
        })
      : null;
  }),
  sS = w.forwardRef((e, t) => {
    const n = vn(),
      { forceMount: r, ...o } = e,
      [s, i] = w.useState(!1),
      l = e.orientation === "horizontal",
      a = jc(() => {
        if (n.viewport) {
          const c = n.viewport.offsetWidth < n.viewport.scrollWidth,
            u = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(l ? c : u);
        }
      }, 10);
    return (
      Ps(n.viewport, a),
      Ps(n.content, a),
      r || s
        ? g.jsx(zm, { "data-state": s ? "visible" : "hidden", ...o, ref: t })
        : null
    );
  }),
  X_ = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = vn(),
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
        ? g.jsx(sS, { "data-state": s ? "visible" : "hidden", ...r, ref: t })
        : null
    );
  }),
  Q_ = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = vn(),
      s = e.orientation === "horizontal",
      [i, l] = w.useState("hidden"),
      a = jc(() => l("idle"), 100);
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
            const p = c[u];
            d !== p && (l("scrolling"), a()), (d = p);
          };
          return (
            c.addEventListener("scroll", f),
            () => c.removeEventListener("scroll", f)
          );
        }
      }, [o.viewport, s, a]),
      n || i !== "hidden"
        ? g.jsx(zm, {
            "data-state": i === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: bo(e.onPointerEnter, () => l("interacting")),
            onPointerLeave: bo(e.onPointerLeave, () => l("idle")),
          })
        : null
    );
  }),
  ov = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = vn(),
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
        ? g.jsx(X_, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
        ? g.jsx(Q_, { ...r, ref: t, forceMount: n })
        : o.type === "auto"
        ? g.jsx(sS, { ...r, ref: t, forceMount: n })
        : o.type === "always"
        ? g.jsx(zm, { ...r, ref: t })
        : null
    );
  });
function J_(e, t = () => {}) {
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
const Z_ = w.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = vn(),
      s = rS(),
      { onThumbPositionChange: i } = s,
      l = nn(t, (u) => s.onThumbChange(u)),
      a = w.useRef(),
      c = jc(() => {
        a.current && (a.current(), (a.current = void 0));
      }, 100);
    return (
      w.useEffect(() => {
        const { viewport: u } = o;
        if (u) {
          const d = () => {
            if ((c(), !a.current)) {
              const f = J_(u, i);
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
        onPointerDownCapture: bo(e.onPointerDownCapture, (u) => {
          const f = u.target.getBoundingClientRect(),
            p = u.clientX - f.left,
            m = u.clientY - f.top;
          s.onThumbPointerDown({ x: p, y: m });
        }),
        onPointerUp: bo(e.onPointerUp, s.onThumbPointerUp),
      })
    );
  }),
  sv = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = rS();
    return n || o.hasThumb ? g.jsx(Z_, { ref: t, ...r }) : null;
  }),
  iS = w.forwardRef(({ children: e, style: t, ...n }, r) => {
    const o = vn(),
      s = nn(r, o.onViewportChange);
    return g.jsx(K, {
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
iS.displayName = "@mantine/core/ScrollAreaViewport";
var Vm = {
  root: "m_d57069b5",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
const lS = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  eO = (e, { scrollbarSize: t }) => ({
    root: { "--scrollarea-scrollbar-size": V(t) },
  }),
  xl = X((e, t) => {
    const n = W("ScrollArea", lS, e),
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
        viewportRef: p,
        onScrollPositionChange: m,
        children: h,
        offsetScrollbars: x,
        scrollbars: v,
        ...y
      } = n,
      [b, S] = w.useState(!1),
      C = ue({
        name: "ScrollArea",
        props: n,
        classes: Vm,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: eO,
      });
    return g.jsxs(Zx, {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: v,
      ...C("root"),
      ...y,
      children: [
        g.jsx(iS, {
          ...f,
          ...C("viewport", { style: f == null ? void 0 : f.style }),
          ref: p,
          "data-offset-scrollbars": x === !0 ? "xy" : x || void 0,
          "data-scrollbars": v || void 0,
          onScroll: (E) => {
            var R;
            (R = f == null ? void 0 : f.onScroll) == null || R.call(f, E),
              m == null ||
                m({
                  x: E.currentTarget.scrollLeft,
                  y: E.currentTarget.scrollTop,
                });
          },
          children: h,
        }),
        (v === "xy" || v === "x") &&
          g.jsx(ov, {
            ...C("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            children: g.jsx(sv, { ...C("thumb") }),
          }),
        (v === "xy" || v === "y") &&
          g.jsx(ov, {
            ...C("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            children: g.jsx(sv, { ...C("thumb") }),
          }),
        g.jsx(W_, {
          ...C("corner"),
          "data-hovered": b || void 0,
          "data-hidden": u === "never" || void 0,
        }),
      ],
    });
  });
xl.displayName = "@mantine/core/ScrollArea";
const Wm = X((e, t) => {
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
    variant: p,
    viewportProps: m,
    scrollbars: h,
    style: x,
    vars: v,
    ...y
  } = W("ScrollAreaAutosize", lS, e);
  return g.jsx(K, {
    ...y,
    ref: t,
    style: [{ display: "flex", overflow: "auto" }, x],
    children: g.jsx(K, {
      style: { display: "flex", flexDirection: "column", flex: 1 },
      children: g.jsx(xl, {
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
        variant: p,
        viewportProps: m,
        vars: v,
        scrollbars: h,
        children: n,
      }),
    }),
  });
});
xl.classes = Vm;
Wm.displayName = "@mantine/core/ScrollAreaAutosize";
Wm.classes = Vm;
xl.Autosize = Wm;
var aS = { root: "m_87cf2631" };
const tO = { __staticSelector: "UnstyledButton" },
  Jn = yn((e, t) => {
    const n = W("UnstyledButton", tO, e),
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
        classes: aS,
        className: r,
        style: c,
        classNames: l,
        styles: a,
        unstyled: i,
      });
    return g.jsx(K, {
      ...d("root", { focusable: !0 }),
      component: o,
      ref: t,
      type: o === "button" ? "button" : void 0,
      ...u,
    });
  });
Jn.classes = aS;
Jn.displayName = "@mantine/core/UnstyledButton";
var cS = { root: "m_515a97f8" };
const nO = {},
  Um = X((e, t) => {
    const n = W("VisuallyHidden", nO, e),
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
        classes: cS,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
      });
    return g.jsx(K, { component: "span", ref: t, ...u("root"), ...c });
  });
Um.classes = cS;
Um.displayName = "@mantine/core/VisuallyHidden";
var uS = { root: "m_1b7284a3" };
const rO = {},
  oO = (e, { radius: t, shadow: n }) => ({
    root: {
      "--paper-radius": t === void 0 ? void 0 : Mn(t),
      "--paper-shadow": $m(n),
    },
  }),
  Vc = yn((e, t) => {
    const n = W("Paper", rO, e),
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
        mod: p,
        ...m
      } = n,
      h = ue({
        name: "Paper",
        props: n,
        classes: uS,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: oO,
      });
    return g.jsx(K, {
      ref: t,
      mod: [{ "data-with-border": a }, p],
      ...h("root"),
      variant: f,
      ...m,
    });
  });
Vc.classes = uS;
Vc.displayName = "@mantine/core/Paper";
function Ws(e) {
  return dS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function br(e) {
  var t;
  return (t = (dS(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function dS(e) {
  return e instanceof Node || e instanceof Xt(e).Node;
}
function Lt(e) {
  return e instanceof Element || e instanceof Xt(e).Element;
}
function er(e) {
  return e instanceof HTMLElement || e instanceof Xt(e).HTMLElement;
}
function iv(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot;
}
function Sl(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = An(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function sO(e) {
  return ["table", "td", "th"].includes(Ws(e));
}
function Hm(e) {
  const t = Gm(),
    n = An(e);
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
function iO(e) {
  let t = Yr(e);
  for (; er(t) && !Ns(t); ) {
    if (Hm(t)) return t;
    t = Yr(t);
  }
  return null;
}
function Gm() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ns(e) {
  return ["html", "body", "#document"].includes(Ws(e));
}
function An(e) {
  return Xt(e).getComputedStyle(e);
}
function Wc(e) {
  return Lt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Yr(e) {
  if (Ws(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (iv(e) && e.host) || br(e);
  return iv(t) ? t.host : t;
}
function fS(e) {
  const t = Yr(e);
  return Ns(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : er(t) && Sl(t)
    ? t
    : fS(t);
}
function nl(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = fS(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Xt(o);
  return s
    ? t.concat(
        i,
        i.visualViewport || [],
        Sl(o) ? o : [],
        i.frameElement && n ? nl(i.frameElement) : []
      )
    : t.concat(o, nl(o, [], n));
}
const In = Math.min,
  gt = Math.max,
  Za = Math.round,
  Zl = Math.floor,
  qr = (e) => ({ x: e, y: e }),
  lO = { left: "right", right: "left", bottom: "top", top: "bottom" },
  aO = { start: "end", end: "start" };
function lp(e, t, n) {
  return gt(e, In(t, n));
}
function gr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jn(e) {
  return e.split("-")[0];
}
function Us(e) {
  return e.split("-")[1];
}
function Ym(e) {
  return e === "x" ? "y" : "x";
}
function qm(e) {
  return e === "y" ? "height" : "width";
}
function zo(e) {
  return ["top", "bottom"].includes(jn(e)) ? "y" : "x";
}
function Km(e) {
  return Ym(zo(e));
}
function cO(e, t, n) {
  n === void 0 && (n = !1);
  const r = Us(e),
    o = Km(e),
    s = qm(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = ec(i)), [i, ec(i)];
}
function uO(e) {
  const t = ec(e);
  return [ap(e), t, ap(t)];
}
function ap(e) {
  return e.replace(/start|end/g, (t) => aO[t]);
}
function dO(e, t, n) {
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
function fO(e, t, n, r) {
  const o = Us(e);
  let s = dO(jn(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(ap)))), s
  );
}
function ec(e) {
  return e.replace(/left|right|bottom|top/g, (t) => lO[t]);
}
function pO(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Xm(e) {
  return typeof e != "number"
    ? pO(e)
    : { top: e, right: e, bottom: e, left: e };
}
function _s(e) {
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
function lv(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = zo(t),
    i = Km(t),
    l = qm(i),
    a = jn(t),
    c = s === "y",
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[l] / 2 - o[l] / 2;
  let p;
  switch (a) {
    case "top":
      p = { x: u, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: u, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: d };
      break;
    case "left":
      p = { x: r.x - o.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (Us(t)) {
    case "start":
      p[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[i] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const mO = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: d } = lv(c, r, a),
    f = r,
    p = {},
    m = 0;
  for (let h = 0; h < l.length; h++) {
    const { name: x, fn: v } = l[h],
      {
        x: y,
        y: b,
        data: S,
        reset: C,
      } = await v({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: p,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (u = y ?? u),
      (d = b ?? d),
      (p = { ...p, [x]: { ...p[x], ...S } }),
      C &&
        m <= 50 &&
        (m++,
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
          ({ x: u, y: d } = lv(c, f, a))),
        (h = -1));
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
};
async function Qm(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: p = 0,
    } = gr(t, e),
    m = Xm(p),
    x = l[f ? (d === "floating" ? "reference" : "floating") : d],
    v = _s(
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
    y =
      d === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    b = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    S = (await (s.isElement == null ? void 0 : s.isElement(b)))
      ? (await (s.getScale == null ? void 0 : s.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = _s(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: y,
            offsetParent: b,
            strategy: a,
          })
        : y
    );
  return {
    top: (v.top - C.top + m.top) / S.y,
    bottom: (C.bottom - v.bottom + m.bottom) / S.y,
    left: (v.left - C.left + m.left) / S.x,
    right: (C.right - v.right + m.right) / S.x,
  };
}
const hO = (e) => ({
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
        { element: c, padding: u = 0 } = gr(e, t) || {};
      if (c == null) return {};
      const d = Xm(u),
        f = { x: n, y: r },
        p = Km(o),
        m = qm(p),
        h = await i.getDimensions(c),
        x = p === "y",
        v = x ? "top" : "left",
        y = x ? "bottom" : "right",
        b = x ? "clientHeight" : "clientWidth",
        S = s.reference[m] + s.reference[p] - f[p] - s.floating[m],
        C = f[p] - s.reference[p],
        E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let R = E ? E[b] : 0;
      (!R || !(await (i.isElement == null ? void 0 : i.isElement(E)))) &&
        (R = l.floating[b] || s.floating[m]);
      const P = S / 2 - C / 2,
        I = R / 2 - h[m] / 2 - 1,
        _ = In(d[v], I),
        T = In(d[y], I),
        M = _,
        z = R - h[m] - T,
        L = R / 2 - h[m] / 2 + P,
        $ = lp(M, L, z),
        O =
          !a.arrow &&
          Us(o) != null &&
          L !== $ &&
          s.reference[m] / 2 - (L < M ? _ : T) - h[m] / 2 < 0,
        k = O ? (L < M ? L - M : L - z) : 0;
      return {
        [p]: f[p] + k,
        data: {
          [p]: $,
          centerOffset: L - $ - k,
          ...(O && { alignmentOffset: k }),
        },
        reset: O,
      };
    },
  }),
  gO = function (e) {
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
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: m = "none",
              flipAlignment: h = !0,
              ...x
            } = gr(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const v = jn(o),
            y = jn(l) === l,
            b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
            S = f || (y || !h ? [ec(l)] : uO(l));
          !f && m !== "none" && S.push(...fO(l, h, m, b));
          const C = [l, ...S],
            E = await Qm(t, x),
            R = [];
          let P = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((u && R.push(E[v]), d)) {
            const M = cO(o, i, b);
            R.push(E[M[0]], E[M[1]]);
          }
          if (
            ((P = [...P, { placement: o, overflows: R }]),
            !R.every((M) => M <= 0))
          ) {
            var I, _;
            const M = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1,
              z = C[M];
            if (z)
              return {
                data: { index: M, overflows: P },
                reset: { placement: z },
              };
            let L =
              (_ = P.filter(($) => $.overflows[0] <= 0).sort(
                ($, O) => $.overflows[1] - O.overflows[1]
              )[0]) == null
                ? void 0
                : _.placement;
            if (!L)
              switch (p) {
                case "bestFit": {
                  var T;
                  const $ =
                    (T = P.map((O) => [
                      O.placement,
                      O.overflows
                        .filter((k) => k > 0)
                        .reduce((k, N) => k + N, 0),
                    ]).sort((O, k) => O[1] - k[1])[0]) == null
                      ? void 0
                      : T[0];
                  $ && (L = $);
                  break;
                }
                case "initialPlacement":
                  L = l;
                  break;
              }
            if (o !== L) return { reset: { placement: L } };
          }
          return {};
        },
      }
    );
  };
function pS(e) {
  const t = In(...e.map((s) => s.left)),
    n = In(...e.map((s) => s.top)),
    r = gt(...e.map((s) => s.right)),
    o = gt(...e.map((s) => s.bottom));
  return { x: t, y: n, width: r - t, height: o - n };
}
function yO(e) {
  const t = e.slice().sort((o, s) => o.y - s.y),
    n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    !r || s.y - r.y > r.height / 2 ? n.push([s]) : n[n.length - 1].push(s),
      (r = s);
  }
  return n.map((o) => _s(pS(o)));
}
const vO = function (e) {
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
          { padding: l = 2, x: a, y: c } = gr(e, t),
          u = Array.from(
            (await (s.getClientRects == null
              ? void 0
              : s.getClientRects(r.reference))) || []
          ),
          d = yO(u),
          f = _s(pS(u)),
          p = Xm(l);
        function m() {
          if (
            d.length === 2 &&
            d[0].left > d[1].right &&
            a != null &&
            c != null
          )
            return (
              d.find(
                (x) =>
                  a > x.left - p.left &&
                  a < x.right + p.right &&
                  c > x.top - p.top &&
                  c < x.bottom + p.bottom
              ) || f
            );
          if (d.length >= 2) {
            if (zo(n) === "y") {
              const _ = d[0],
                T = d[d.length - 1],
                M = jn(n) === "top",
                z = _.top,
                L = T.bottom,
                $ = M ? _.left : T.left,
                O = M ? _.right : T.right,
                k = O - $,
                N = L - z;
              return {
                top: z,
                bottom: L,
                left: $,
                right: O,
                width: k,
                height: N,
                x: $,
                y: z,
              };
            }
            const x = jn(n) === "left",
              v = gt(...d.map((_) => _.right)),
              y = In(...d.map((_) => _.left)),
              b = d.filter((_) => (x ? _.left === y : _.right === v)),
              S = b[0].top,
              C = b[b.length - 1].bottom,
              E = y,
              R = v,
              P = R - E,
              I = C - S;
            return {
              top: S,
              bottom: C,
              left: E,
              right: R,
              width: P,
              height: I,
              x: E,
              y: S,
            };
          }
          return f;
        }
        const h = await s.getElementRects({
          reference: { getBoundingClientRect: m },
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
async function bO(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = jn(n),
    l = Us(n),
    a = zo(n) === "y",
    c = ["left", "top"].includes(i) ? -1 : 1,
    u = s && a ? -1 : 1,
    d = gr(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    l && typeof m == "number" && (p = l === "end" ? m * -1 : m),
    a ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
  );
}
const wO = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await bO(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  xO = function (e) {
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
                  let { x: v, y } = x;
                  return { x: v, y };
                },
              },
              ...a
            } = gr(e, t),
            c = { x: n, y: r },
            u = await Qm(t, a),
            d = zo(jn(o)),
            f = Ym(d);
          let p = c[f],
            m = c[d];
          if (s) {
            const x = f === "y" ? "top" : "left",
              v = f === "y" ? "bottom" : "right",
              y = p + u[x],
              b = p - u[v];
            p = lp(y, p, b);
          }
          if (i) {
            const x = d === "y" ? "top" : "left",
              v = d === "y" ? "bottom" : "right",
              y = m + u[x],
              b = m - u[v];
            m = lp(y, m, b);
          }
          const h = l.fn({ ...t, [f]: p, [d]: m });
          return { ...h, data: { x: h.x - n, y: h.y - r } };
        },
      }
    );
  },
  SO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: c = !0 } = gr(e, t),
            u = { x: n, y: r },
            d = zo(o),
            f = Ym(d);
          let p = u[f],
            m = u[d];
          const h = gr(l, t),
            x =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (a) {
            const b = f === "y" ? "height" : "width",
              S = s.reference[f] - s.floating[b] + x.mainAxis,
              C = s.reference[f] + s.reference[b] - x.mainAxis;
            p < S ? (p = S) : p > C && (p = C);
          }
          if (c) {
            var v, y;
            const b = f === "y" ? "width" : "height",
              S = ["top", "left"].includes(jn(o)),
              C =
                s.reference[d] -
                s.floating[b] +
                ((S && ((v = i.offset) == null ? void 0 : v[d])) || 0) +
                (S ? 0 : x.crossAxis),
              E =
                s.reference[d] +
                s.reference[b] +
                (S ? 0 : ((y = i.offset) == null ? void 0 : y[d]) || 0) -
                (S ? x.crossAxis : 0);
            m < C ? (m = C) : m > E && (m = E);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  CO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...l } = gr(e, t),
            a = await Qm(t, l),
            c = jn(n),
            u = Us(n),
            d = zo(n) === "y",
            { width: f, height: p } = r.floating;
          let m, h;
          c === "top" || c === "bottom"
            ? ((m = c),
              (h =
                u ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = c), (m = u === "end" ? "top" : "bottom"));
          const x = p - a[m],
            v = f - a[h],
            y = !t.middlewareData.shift;
          let b = x,
            S = v;
          if (d) {
            const E = f - a.left - a.right;
            S = u || y ? In(v, E) : E;
          } else {
            const E = p - a.top - a.bottom;
            b = u || y ? In(x, E) : E;
          }
          if (y && !u) {
            const E = gt(a.left, 0),
              R = gt(a.right, 0),
              P = gt(a.top, 0),
              I = gt(a.bottom, 0);
            d
              ? (S = f - 2 * (E !== 0 || R !== 0 ? E + R : gt(a.left, a.right)))
              : (b =
                  p - 2 * (P !== 0 || I !== 0 ? P + I : gt(a.top, a.bottom)));
          }
          await i({ ...t, availableWidth: S, availableHeight: b });
          const C = await o.getDimensions(s.floating);
          return f !== C.width || p !== C.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function mS(e) {
  const t = An(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = er(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Za(n) !== s || Za(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function Jm(e) {
  return Lt(e) ? e : e.contextElement;
}
function ys(e) {
  const t = Jm(e);
  if (!er(t)) return qr(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = mS(t);
  let i = (s ? Za(n.width) : n.width) / r,
    l = (s ? Za(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const EO = qr(0);
function hS(e) {
  const t = Xt(e);
  return !Gm() || !t.visualViewport
    ? EO
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function DO(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Xt(e)) ? !1 : t;
}
function _o(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = Jm(e);
  let i = qr(1);
  t && (r ? Lt(r) && (i = ys(r)) : (i = ys(e)));
  const l = DO(s, n, r) ? hS(s) : qr(0);
  let a = (o.left + l.x) / i.x,
    c = (o.top + l.y) / i.y,
    u = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const f = Xt(s),
      p = r && Lt(r) ? Xt(r) : r;
    let m = f,
      h = m.frameElement;
    for (; h && r && p !== m; ) {
      const x = ys(h),
        v = h.getBoundingClientRect(),
        y = An(h),
        b = v.left + (h.clientLeft + parseFloat(y.paddingLeft)) * x.x,
        S = v.top + (h.clientTop + parseFloat(y.paddingTop)) * x.y;
      (a *= x.x),
        (c *= x.y),
        (u *= x.x),
        (d *= x.y),
        (a += b),
        (c += S),
        (m = Xt(h)),
        (h = m.frameElement);
    }
  }
  return _s({ width: u, height: d, x: a, y: c });
}
const RO = [":popover-open", ":modal"];
function Zm(e) {
  return RO.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function PO(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = br(r),
    l = t ? Zm(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    c = qr(1);
  const u = qr(0),
    d = er(r);
  if (
    (d || (!d && !s)) &&
    ((Ws(r) !== "body" || Sl(i)) && (a = Wc(r)), er(r))
  ) {
    const f = _o(r);
    (c = ys(r)), (u.x = f.x + r.clientLeft), (u.y = f.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y,
  };
}
function NO(e) {
  return Array.from(e.getClientRects());
}
function gS(e) {
  return _o(br(e)).left + Wc(e).scrollLeft;
}
function _O(e) {
  const t = br(e),
    n = Wc(e),
    r = e.ownerDocument.body,
    o = gt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = gt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + gS(e);
  const l = -n.scrollTop;
  return (
    An(r).direction === "rtl" && (i += gt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function OO(e, t) {
  const n = Xt(e),
    r = br(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = Gm();
    (!c || (c && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
function kO(e, t) {
  const n = _o(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = er(e) ? ys(e) : qr(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    c = r * s.y;
  return { width: i, height: l, x: a, y: c };
}
function av(e, t, n) {
  let r;
  if (t === "viewport") r = OO(e, n);
  else if (t === "document") r = _O(br(e));
  else if (Lt(t)) r = kO(t, n);
  else {
    const o = hS(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return _s(r);
}
function yS(e, t) {
  const n = Yr(e);
  return n === t || !Lt(n) || Ns(n)
    ? !1
    : An(n).position === "fixed" || yS(n, t);
}
function TO(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = nl(e, [], !1).filter((l) => Lt(l) && Ws(l) !== "body"),
    o = null;
  const s = An(e).position === "fixed";
  let i = s ? Yr(e) : e;
  for (; Lt(i) && !Ns(i); ) {
    const l = An(i),
      a = Hm(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Sl(i) && !a && yS(e, i))
      )
        ? (r = r.filter((u) => u !== i))
        : (o = l),
      (i = Yr(i));
  }
  return t.set(e, r), r;
}
function $O(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Zm(t)
          ? []
          : TO(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((c, u) => {
      const d = av(t, u, o);
      return (
        (c.top = gt(d.top, c.top)),
        (c.right = In(d.right, c.right)),
        (c.bottom = In(d.bottom, c.bottom)),
        (c.left = gt(d.left, c.left)),
        c
      );
    }, av(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function AO(e) {
  const { width: t, height: n } = mS(e);
  return { width: t, height: n };
}
function IO(e, t, n) {
  const r = er(t),
    o = br(t),
    s = n === "fixed",
    i = _o(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = qr(0);
  if (r || (!r && !s))
    if (((Ws(t) !== "body" || Sl(o)) && (l = Wc(t)), r)) {
      const d = _o(t, !0, s, t);
      (a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop);
    } else o && (a.x = gS(o));
  const c = i.left + l.scrollLeft - a.x,
    u = i.top + l.scrollTop - a.y;
  return { x: c, y: u, width: i.width, height: i.height };
}
function Vd(e) {
  return An(e).position === "static";
}
function cv(e, t) {
  return !er(e) || An(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function vS(e, t) {
  const n = Xt(e);
  if (Zm(e)) return n;
  if (!er(e)) {
    let o = Yr(e);
    for (; o && !Ns(o); ) {
      if (Lt(o) && !Vd(o)) return o;
      o = Yr(o);
    }
    return n;
  }
  let r = cv(e, t);
  for (; r && sO(r) && Vd(r); ) r = cv(r, t);
  return r && Ns(r) && Vd(r) && !Hm(r) ? n : r || iO(e) || n;
}
const jO = async function (e) {
  const t = this.getOffsetParent || vS,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: IO(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function LO(e) {
  return An(e).direction === "rtl";
}
const MO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: PO,
  getDocumentElement: br,
  getClippingRect: $O,
  getOffsetParent: vS,
  getElementRects: jO,
  getClientRects: NO,
  getDimensions: AO,
  getScale: ys,
  isElement: Lt,
  isRTL: LO,
};
function FO(e, t) {
  let n = null,
    r;
  const o = br(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const { left: c, top: u, width: d, height: f } = e.getBoundingClientRect();
    if ((l || t(), !d || !f)) return;
    const p = Zl(u),
      m = Zl(o.clientWidth - (c + d)),
      h = Zl(o.clientHeight - (u + f)),
      x = Zl(c),
      y = {
        rootMargin: -p + "px " + -m + "px " + -h + "px " + -x + "px",
        threshold: gt(0, In(1, a)) || 1,
      };
    let b = !0;
    function S(C) {
      const E = C[0].intersectionRatio;
      if (E !== a) {
        if (!b) return i();
        E
          ? i(!1, E)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function BO(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    c = Jm(e),
    u = o || s ? [...(c ? nl(c) : []), ...nl(t)] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, { passive: !0 }),
      s && v.addEventListener("resize", n);
  });
  const d = c && l ? FO(c, n) : null;
  let f = -1,
    p = null;
  i &&
    ((p = new ResizeObserver((v) => {
      let [y] = v;
      y &&
        y.target === c &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var b;
          (b = p) == null || b.observe(t);
        }))),
        n();
    })),
    c && !a && p.observe(c),
    p.observe(t));
  let m,
    h = a ? _o(e) : null;
  a && x();
  function x() {
    const v = _o(e);
    h &&
      (v.x !== h.x ||
        v.y !== h.y ||
        v.width !== h.width ||
        v.height !== h.height) &&
      n(),
      (h = v),
      (m = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var v;
      u.forEach((y) => {
        o && y.removeEventListener("scroll", n),
          s && y.removeEventListener("resize", n);
      }),
        d == null || d(),
        (v = p) == null || v.disconnect(),
        (p = null),
        a && cancelAnimationFrame(m);
    }
  );
}
const zO = wO,
  VO = xO,
  uv = gO,
  WO = CO,
  dv = hO,
  fv = vO,
  pv = SO,
  UO = (e, t, n) => {
    const r = new Map(),
      o = { platform: MO, ...n },
      s = { ...o.platform, _c: r };
    return mO(e, t, { ...o, platform: s });
  },
  HO = (e) => {
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
            ? dv({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? dv({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  };
var Sa = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function tc(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!tc(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !tc(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bS(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mv(e, t) {
  const n = bS(e);
  return Math.round(t * n) / n;
}
function hv(e) {
  const t = w.useRef(e);
  return (
    Sa(() => {
      t.current = e;
    }),
    t
  );
}
function GO(e) {
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
    [f, p] = w.useState(r);
  tc(f, r) || p(r);
  const [m, h] = w.useState(null),
    [x, v] = w.useState(null),
    y = w.useCallback((k) => {
      k !== E.current && ((E.current = k), h(k));
    }, []),
    b = w.useCallback((k) => {
      k !== R.current && ((R.current = k), v(k));
    }, []),
    S = s || m,
    C = i || x,
    E = w.useRef(null),
    R = w.useRef(null),
    P = w.useRef(u),
    I = a != null,
    _ = hv(a),
    T = hv(o),
    M = w.useCallback(() => {
      if (!E.current || !R.current) return;
      const k = { placement: t, strategy: n, middleware: f };
      T.current && (k.platform = T.current),
        UO(E.current, R.current, k).then((N) => {
          const D = { ...N, isPositioned: !0 };
          z.current &&
            !tc(P.current, D) &&
            ((P.current = D),
            eo.flushSync(() => {
              d(D);
            }));
        });
    }, [f, t, n, T]);
  Sa(() => {
    c === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((k) => ({ ...k, isPositioned: !1 })));
  }, [c]);
  const z = w.useRef(!1);
  Sa(
    () => (
      (z.current = !0),
      () => {
        z.current = !1;
      }
    ),
    []
  ),
    Sa(() => {
      if ((S && (E.current = S), C && (R.current = C), S && C)) {
        if (_.current) return _.current(S, C, M);
        M();
      }
    }, [S, C, M, _, I]);
  const L = w.useMemo(
      () => ({ reference: E, floating: R, setReference: y, setFloating: b }),
      [y, b]
    ),
    $ = w.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    O = w.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!$.floating) return k;
      const N = mv($.floating, u.x),
        D = mv($.floating, u.y);
      return l
        ? {
            ...k,
            transform: "translate(" + N + "px, " + D + "px)",
            ...(bS($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: D };
    }, [n, l, $.floating, u.x, u.y]);
  return w.useMemo(
    () => ({ ...u, update: M, refs: L, elements: $, floatingStyles: O }),
    [u, M, L, $, O]
  );
}
const wS = { ...yb },
  YO = wS.useInsertionEffect,
  qO = YO || ((e) => e());
function KO(e) {
  const t = w.useRef(() => {});
  return (
    qO(() => {
      t.current = e;
    }),
    w.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
var cp = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
let gv = !1,
  XO = 0;
const yv = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + XO++;
function QO() {
  const [e, t] = w.useState(() => (gv ? yv() : void 0));
  return (
    cp(() => {
      e == null && t(yv());
    }, []),
    w.useEffect(() => {
      gv = !0;
    }, []),
    e
  );
}
const JO = wS.useId,
  ZO = JO || QO;
function ek() {
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
const tk = w.createContext(null),
  nk = w.createContext(null),
  rk = () => {
    var e;
    return ((e = w.useContext(tk)) == null ? void 0 : e.id) || null;
  },
  ok = () => w.useContext(nk);
function sk(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    o = ZO(),
    s = w.useRef({}),
    [i] = w.useState(() => ek()),
    l = rk() != null,
    [a, c] = w.useState(r.reference),
    u = KO((p, m, h) => {
      (s.current.openEvent = p ? m : void 0),
        i.emit("openchange", { open: p, event: m, reason: h, nested: l }),
        n == null || n(p, m, h);
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
function ik(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    n = sk({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    o = r.elements,
    [s, i] = w.useState(null),
    [l, a] = w.useState(null),
    u = (o == null ? void 0 : o.reference) || s,
    d = w.useRef(null),
    f = ok();
  cp(() => {
    u && (d.current = u);
  }, [u]);
  const p = GO({ ...e, elements: { ...o, ...(l && { reference: l }) } }),
    m = w.useCallback(
      (b) => {
        const S = Lt(b)
          ? {
              getBoundingClientRect: () => b.getBoundingClientRect(),
              contextElement: b,
            }
          : b;
        a(S), p.refs.setReference(S);
      },
      [p.refs]
    ),
    h = w.useCallback(
      (b) => {
        (Lt(b) || b === null) && ((d.current = b), i(b)),
          (Lt(p.refs.reference.current) ||
            p.refs.reference.current === null ||
            (b !== null && !Lt(b))) &&
            p.refs.setReference(b);
      },
      [p.refs]
    ),
    x = w.useMemo(
      () => ({
        ...p.refs,
        setReference: h,
        setPositionReference: m,
        domReference: d,
      }),
      [p.refs, h, m]
    ),
    v = w.useMemo(() => ({ ...p.elements, domReference: u }), [p.elements, u]),
    y = w.useMemo(
      () => ({ ...p, ...r, refs: x, elements: v, nodeId: t }),
      [p, x, v, t, r]
    );
  return (
    cp(() => {
      r.dataRef.current.floatingContext = y;
      const b = f == null ? void 0 : f.nodesRef.current.find((S) => S.id === t);
      b && (b.context = y);
    }),
    w.useMemo(() => ({ ...p, context: y, refs: x, elements: v }), [p, x, v, y])
  );
}
function lk(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"),
      o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function vv(e, t, n, r) {
  return e === "center" || r === "center"
    ? { top: t }
    : e === "end"
    ? { bottom: n }
    : e === "start"
    ? { top: n }
    : {};
}
function bv(e, t, n, r, o) {
  return e === "center" || r === "center"
    ? { left: t }
    : e === "end"
    ? { [o === "ltr" ? "right" : "left"]: n }
    : e === "start"
    ? { [o === "ltr" ? "left" : "right"]: n }
    : {};
}
const ak = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function ck({
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
      width: V(t),
      height: V(t),
      transform: "rotate(45deg)",
      position: "absolute",
      [ak[a]]: V(r),
    },
    d = V(-t / 2);
  return a === "left"
    ? {
        ...u,
        ...vv(c, i, n, o),
        right: d,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
      }
    : a === "right"
    ? {
        ...u,
        ...vv(c, i, n, o),
        left: d,
        borderRightColor: "transparent",
        borderTopColor: "transparent",
      }
    : a === "top"
    ? {
        ...u,
        ...bv(c, s, n, o, l),
        bottom: d,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
      }
    : a === "bottom"
    ? {
        ...u,
        ...bv(c, s, n, o, l),
        top: d,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
      }
    : {};
}
const xS = w.forwardRef(
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
    const { dir: d } = Bm();
    return s
      ? g.jsx("div", {
          ...c,
          ref: u,
          style: {
            ...a,
            ...ck({
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
xS.displayName = "@mantine/core/FloatingArrow";
const [uk, SS] = Ln("Popover component was not found in the tree");
function Uc({ children: e, active: t = !0, refProp: n = "ref" }) {
  const r = CN(t),
    o = nn(r, e == null ? void 0 : e.ref);
  return Lo(e) ? w.cloneElement(e, { [n]: o }) : e;
}
function CS(e) {
  return g.jsx(Um, { tabIndex: -1, "data-autofocus": !0, ...e });
}
Uc.displayName = "@mantine/core/FocusTrap";
CS.displayName = "@mantine/core/FocusTrapInitialFocus";
Uc.InitialFocus = CS;
function dk(e) {
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
const fk = {},
  ES = w.forwardRef((e, t) => {
    const { children: n, target: r, ...o } = W("Portal", fk, e),
      [s, i] = w.useState(!1),
      l = w.useRef(null);
    return (
      wl(
        () => (
          i(!0),
          (l.current = r
            ? typeof r == "string"
              ? document.querySelector(r)
              : r
            : dk(o)),
          Am(t, l.current),
          !r && l.current && document.body.appendChild(l.current),
          () => {
            !r && l.current && document.body.removeChild(l.current);
          }
        ),
        [r]
      ),
      !s || !l.current
        ? null
        : eo.createPortal(g.jsx(g.Fragment, { children: n }), l.current)
    );
  });
ES.displayName = "@mantine/core/Portal";
function Hc({ withinPortal: e = !0, children: t, ...n }) {
  return e
    ? g.jsx(ES, { ...n, children: t })
    : g.jsx(g.Fragment, { children: t });
}
Hc.displayName = "@mantine/core/OptionalPortal";
const mi = (e) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${V(e === "bottom" ? 10 : -10)})`,
    },
    transitionProperty: "transform, opacity",
  }),
  ea = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${V(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${V(-30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${V(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${V(-30)}` },
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
        transform: `translateY(${V(-20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${V(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${V(20)}) rotate(-5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${V(20)}) rotate(5deg)` },
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
    pop: { ...mi("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...mi("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...mi("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...mi("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...mi("top"), common: { transformOrigin: "top right" } },
  },
  wv = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function pk({ transition: e, state: t, duration: n, timingFunction: r }) {
  const o = { transitionDuration: `${n}ms`, transitionTimingFunction: r };
  return typeof e == "string"
    ? e in ea
      ? {
          transitionProperty: ea[e].transitionProperty,
          ...o,
          ...ea[e].common,
          ...ea[e][wv[t]],
        }
      : {}
    : {
        transitionProperty: e.transitionProperty,
        ...o,
        ...e.common,
        ...e[wv[t]],
      };
}
function mk({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: s,
  onEntered: i,
  onExited: l,
}) {
  const a = rn(),
    c = Im(),
    u = a.respectReducedMotion ? c : !1,
    [d, f] = w.useState(u ? 0 : e),
    [p, m] = w.useState(r ? "entered" : "exited"),
    h = w.useRef(-1),
    x = w.useRef(-1),
    v = (y) => {
      const b = y ? o : s,
        S = y ? i : l;
      window.clearTimeout(h.current);
      const C = u ? 0 : y ? e : t;
      f(C),
        C === 0
          ? (typeof b == "function" && b(),
            typeof S == "function" && S(),
            m(y ? "entered" : "exited"))
          : (x.current = requestAnimationFrame(() => {
              wx.flushSync(() => {
                m(y ? "pre-entering" : "pre-exiting");
              }),
                (x.current = requestAnimationFrame(() => {
                  typeof b == "function" && b(),
                    m(y ? "entering" : "exiting"),
                    (h.current = window.setTimeout(() => {
                      typeof S == "function" && S(),
                        m(y ? "entered" : "exited");
                    }, C));
                }));
            }));
    };
  return (
    Ro(() => {
      v(r);
    }, [r]),
    w.useEffect(
      () => () => {
        window.clearTimeout(h.current), cancelAnimationFrame(x.current);
      },
      []
    ),
    {
      transitionDuration: d,
      transitionStatus: p,
      transitionTimingFunction: n || "ease",
    }
  );
}
function Hs({
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
    transitionTimingFunction: p,
  } = mk({
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
          pk({ transition: t, duration: d, state: f, timingFunction: p })
        ),
      });
}
Hs.displayName = "@mantine/core/Transition";
var DS = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const hk = {},
  eh = X((e, t) => {
    var x, v, y, b;
    const n = W("PopoverDropdown", hk, e),
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
      f = SS(),
      p = Ax({ opened: f.opened, shouldReturnFocus: f.returnFocus }),
      m = f.withRoles
        ? {
            "aria-labelledby": f.getTargetId(),
            id: f.getDropdownId(),
            role: "dialog",
            tabIndex: -1,
          }
        : {},
      h = nn(t, f.floating);
    return f.disabled
      ? null
      : g.jsx(Hc, {
          ...f.portalProps,
          withinPortal: f.withinPortal,
          children: g.jsx(Hs, {
            mounted: f.opened,
            ...f.transitionProps,
            transition:
              ((x = f.transitionProps) == null ? void 0 : x.transition) ||
              "fade",
            duration:
              ((v = f.transitionProps) == null ? void 0 : v.duration) ?? 150,
            keepMounted: f.keepMounted,
            exitDuration:
              typeof ((y = f.transitionProps) == null
                ? void 0
                : y.exitDuration) == "number"
                ? f.transitionProps.exitDuration
                : (b = f.transitionProps) == null
                ? void 0
                : b.duration,
            children: (S) =>
              g.jsx(Uc, {
                active: f.trapFocus,
                children: g.jsxs(K, {
                  ...m,
                  ...d,
                  variant: a,
                  ref: h,
                  onKeyDownCapture: uN(f.onClose, {
                    active: f.closeOnEscape,
                    onTrigger: p,
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
                        ...S,
                        zIndex: f.zIndex,
                        top: f.y ?? 0,
                        left: f.x ?? 0,
                        width: f.width === "target" ? void 0 : V(f.width),
                      },
                      o,
                    ],
                  }),
                  children: [
                    i,
                    g.jsx(xS, {
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
eh.classes = DS;
eh.displayName = "@mantine/core/PopoverDropdown";
const gk = { refProp: "ref", popupType: "dialog" },
  RS = X((e, t) => {
    const {
      children: n,
      refProp: r,
      popupType: o,
      ...s
    } = W("PopoverTarget", gk, e);
    if (!Lo(n))
      throw new Error(
        "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const i = s,
      l = SS(),
      a = nn(l.reference, n.ref, t),
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
      className: wt(l.targetProps.className, i.className, n.props.className),
      [r]: a,
      ...(l.controlled ? null : { onClick: l.onToggle }),
    });
  });
RS.displayName = "@mantine/core/PopoverTarget";
function yk({ opened: e, floating: t, position: n, positionDependencies: r }) {
  const [o, s] = w.useState(0);
  w.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return BO(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference.current, t.refs.floating.current, e, o, n]),
    Ro(() => {
      t.update();
    }, r),
    Ro(() => {
      s((i) => i + 1);
    }, [e]);
}
function vk(e) {
  if (e === void 0) return { shift: !0, flip: !0 };
  const t = { ...e };
  return (
    e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t
  );
}
function bk(e, t) {
  const n = vk(e.middlewares),
    r = [zO(e.offset)];
  return (
    n.shift &&
      r.push(
        VO(
          typeof n.shift == "boolean"
            ? { limiter: pv(), padding: 5 }
            : { limiter: pv(), padding: 5, ...n.shift }
        )
      ),
    n.flip && r.push(typeof n.flip == "boolean" ? uv() : uv(n.flip)),
    n.inline && r.push(typeof n.inline == "boolean" ? fv() : fv(n.inline)),
    r.push(HO({ element: e.arrowRef, padding: e.arrowOffset })),
    (n.size || e.width === "target") &&
      r.push(
        WO({
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
function wk(e) {
  const [t, n] = $n({
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
    s = ik({
      strategy: e.strategy,
      placement: e.position,
      middleware: bk(e, () => s),
    });
  return (
    yk({
      opened: e.opened,
      position: e.position,
      positionDependencies: e.positionDependencies || [],
      floating: s,
    }),
    Ro(() => {
      var i;
      (i = e.onPositionChange) == null || i.call(e, s.placement);
    }, [s.placement]),
    Ro(() => {
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
const xk = {
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
    zIndex: Mo("popover"),
    __staticSelector: "Popover",
    width: "max-content",
  },
  Sk = (e, { radius: t, shadow: n }) => ({
    dropdown: {
      "--popover-radius": t === void 0 ? void 0 : Mn(t),
      "--popover-shadow": $m(n),
    },
  });
function Fn(e) {
  var Ee, st, Ae, ze, q, ie;
  const t = W("Popover", xk, e),
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
      arrowOffset: p,
      arrowRadius: m,
      arrowPosition: h,
      unstyled: x,
      classNames: v,
      styles: y,
      closeOnClickOutside: b,
      withinPortal: S,
      portalProps: C,
      closeOnEscape: E,
      clickOutsideEvents: R,
      trapFocus: P,
      onClose: I,
      onOpen: _,
      onChange: T,
      zIndex: M,
      radius: z,
      shadow: L,
      id: $,
      defaultOpened: O,
      __staticSelector: k,
      withRoles: N,
      disabled: D,
      returnFocus: j,
      variant: A,
      keepMounted: B,
      vars: Y,
      floatingStrategy: J,
      ...ee
    } = t,
    oe = ue({
      name: k,
      props: t,
      classes: DS,
      classNames: v,
      styles: y,
      unstyled: x,
      rootSelector: "dropdown",
      vars: Y,
      varsResolver: Sk,
    }),
    ne = w.useRef(null),
    [ye, se] = w.useState(null),
    [ce, te] = w.useState(null),
    { dir: me } = Bm(),
    le = to($),
    ae = wk({
      middlewares: u,
      width: c,
      position: lk(me, r),
      offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
      arrowRef: ne,
      arrowOffset: p,
      onPositionChange: s,
      positionDependencies: i,
      opened: l,
      defaultOpened: O,
      onChange: T,
      onOpen: _,
      onClose: I,
      strategy: J,
    });
  pN(() => b && ae.onClose(), R, [ye, ce]);
  const $e = w.useCallback(
      (de) => {
        se(de), ae.floating.refs.setReference(de);
      },
      [ae.floating.refs.setReference]
    ),
    He = w.useCallback(
      (de) => {
        te(de), ae.floating.refs.setFloating(de);
      },
      [ae.floating.refs.setFloating]
    );
  return g.jsx(uk, {
    value: {
      returnFocus: j,
      disabled: D,
      controlled: ae.controlled,
      reference: $e,
      floating: He,
      x: ae.floating.x,
      y: ae.floating.y,
      arrowX:
        (Ae =
          (st = (Ee = ae.floating) == null ? void 0 : Ee.middlewareData) == null
            ? void 0
            : st.arrow) == null
          ? void 0
          : Ae.x,
      arrowY:
        (ie =
          (q = (ze = ae.floating) == null ? void 0 : ze.middlewareData) == null
            ? void 0
            : q.arrow) == null
          ? void 0
          : ie.y,
      opened: ae.opened,
      arrowRef: ne,
      transitionProps: a,
      width: c,
      withArrow: d,
      arrowSize: f,
      arrowOffset: p,
      arrowRadius: m,
      arrowPosition: h,
      placement: ae.floating.placement,
      trapFocus: P,
      withinPortal: S,
      portalProps: C,
      zIndex: M,
      radius: z,
      shadow: L,
      closeOnEscape: E,
      onClose: ae.onClose,
      onToggle: ae.onToggle,
      getTargetId: () => `${le}-target`,
      getDropdownId: () => `${le}-dropdown`,
      withRoles: N,
      targetProps: ee,
      __staticSelector: k,
      classNames: v,
      styles: y,
      unstyled: x,
      variant: A,
      keepMounted: B,
      getStyles: oe,
    },
    children: n,
  });
}
Fn.Target = RS;
Fn.Dropdown = eh;
Fn.displayName = "@mantine/core/Popover";
Fn.extend = (e) => e;
var Pn = {
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
const Ck = w.forwardRef(({ className: e, ...t }, n) =>
    g.jsxs(K, {
      component: "span",
      className: wt(Pn.barsLoader, e),
      ...t,
      ref: n,
      children: [
        g.jsx("span", { className: Pn.bar }),
        g.jsx("span", { className: Pn.bar }),
        g.jsx("span", { className: Pn.bar }),
      ],
    })
  ),
  Ek = w.forwardRef(({ className: e, ...t }, n) =>
    g.jsxs(K, {
      component: "span",
      className: wt(Pn.dotsLoader, e),
      ...t,
      ref: n,
      children: [
        g.jsx("span", { className: Pn.dot }),
        g.jsx("span", { className: Pn.dot }),
        g.jsx("span", { className: Pn.dot }),
      ],
    })
  ),
  Dk = w.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(K, {
      component: "span",
      className: wt(Pn.ovalLoader, e),
      ...t,
      ref: n,
    })
  ),
  PS = { bars: Ck, oval: Dk, dots: Ek },
  Rk = { loaders: PS, type: "oval" },
  Pk = (e, { size: t, color: n }) => ({
    root: {
      "--loader-size": Re(t, "loader-size"),
      "--loader-color": n ? No(n, e) : void 0,
    },
  }),
  Cl = X((e, t) => {
    const n = W("Loader", Rk, e),
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
        variant: p,
        children: m,
        ...h
      } = n,
      x = ue({
        name: "Loader",
        props: n,
        classes: Pn,
        className: l,
        style: a,
        classNames: c,
        styles: u,
        unstyled: d,
        vars: i,
        varsResolver: Pk,
      });
    return m
      ? g.jsx(K, { ...x("root"), ref: t, ...h, children: m })
      : g.jsx(K, {
          ...x("root"),
          ref: t,
          component: f[s],
          variant: p,
          size: r,
          ...h,
        });
  });
Cl.defaultLoaders = PS;
Cl.classes = Pn;
Cl.displayName = "@mantine/core/Loader";
const NS = w.forwardRef(
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
NS.displayName = "@mantine/core/CloseIcon";
var _S = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Nk = { variant: "subtle" },
  _k = (e, { size: t, radius: n, iconSize: r }) => ({
    root: {
      "--cb-size": Re(t, "cb-size"),
      "--cb-radius": n === void 0 ? void 0 : Mn(n),
      "--cb-icon-size": V(r),
    },
  }),
  Gs = yn((e, t) => {
    const n = W("CloseButton", Nk, e),
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
        disabled: p,
        variant: m,
        icon: h,
        mod: x,
        ...v
      } = n,
      y = ue({
        name: "CloseButton",
        props: n,
        className: l,
        style: c,
        classes: _S,
        classNames: a,
        styles: u,
        unstyled: d,
        vars: s,
        varsResolver: _k,
      });
    return g.jsxs(Jn, {
      ref: t,
      ...v,
      unstyled: d,
      variant: m,
      disabled: p,
      mod: [{ disabled: p || f }, x],
      ...y("root", { variant: m, active: !p && !f }),
      children: [h || g.jsx(NS, {}), o],
    });
  });
Gs.classes = _S;
Gs.displayName = "@mantine/core/CloseButton";
function Ok(e) {
  return w.Children.toArray(e).filter(Boolean);
}
var OS = { root: "m_4081bf90" };
const kk = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  Tk = (
    e,
    { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: s, wrap: i },
    { childWidth: l }
  ) => ({
    root: {
      "--group-child-width": t && n ? l : void 0,
      "--group-gap": Gr(r),
      "--group-align": o,
      "--group-justify": s,
      "--group-wrap": i,
    },
  }),
  lr = X((e, t) => {
    const n = W("Group", kk, e),
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
        grow: p,
        preventGrowOverflow: m,
        vars: h,
        variant: x,
        __size: v,
        mod: y,
        ...b
      } = n,
      S = Ok(a),
      C = S.length,
      E = Gr(c ?? "md"),
      P = { childWidth: `calc(${100 / C}% - (${E} - ${E} / ${C}))` },
      I = ue({
        name: "Group",
        props: n,
        stylesCtx: P,
        className: o,
        style: s,
        classes: OS,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: h,
        varsResolver: Tk,
      });
    return g.jsx(K, {
      ...I("root"),
      ref: t,
      variant: x,
      mod: [{ grow: p }, y],
      size: v,
      ...b,
      children: S,
    });
  });
lr.classes = OS;
lr.displayName = "@mantine/core/Group";
var kS = { root: "m_9814e45f" };
const $k = { zIndex: Mo("modal") },
  Ak = (
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
        ((n !== void 0 || r !== void 0) && Yn(n || "#000", r ?? 0.6)) ||
        void 0,
      "--overlay-filter": o ? `blur(${V(o)})` : void 0,
      "--overlay-radius": s === void 0 ? void 0 : Mn(s),
      "--overlay-z-index": i == null ? void 0 : i.toString(),
    },
  }),
  rl = yn((e, t) => {
    const n = W("Overlay", $k, e),
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
        zIndex: p,
        gradient: m,
        blur: h,
        color: x,
        backgroundOpacity: v,
        mod: y,
        ...b
      } = n,
      S = ue({
        name: "Overlay",
        props: n,
        classes: kS,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: Ak,
      });
    return g.jsx(K, {
      ref: t,
      ...S("root"),
      mod: [{ center: u, fixed: c }, y],
      ...b,
      children: d,
    });
  });
rl.classes = kS;
rl.displayName = "@mantine/core/Overlay";
const [Ik, wr] = Ln("ModalBase component was not found in tree");
function jk({ opened: e, transitionDuration: t }) {
  const [n, r] = w.useState(e),
    o = w.useRef(),
    i = Im() ? 0 : t;
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
function Lk({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: s,
  returnFocus: i,
}) {
  const l = to(e),
    [a, c] = w.useState(!1),
    [u, d] = w.useState(!1),
    f =
      typeof (t == null ? void 0 : t.duration) == "number"
        ? t == null
          ? void 0
          : t.duration
        : 200,
    p = jk({ opened: n, transitionDuration: f });
  return (
    RN(
      "keydown",
      (m) => {
        var h;
        m.key === "Escape" &&
          o &&
          n &&
          ((h = m.target) == null
            ? void 0
            : h.getAttribute("data-mantine-stop-propagation")) !== "true" &&
          s();
      },
      { capture: !0 }
    ),
    Ax({ opened: n, shouldReturnFocus: r && i }),
    {
      _id: l,
      titleMounted: a,
      bodyMounted: u,
      shouldLockScroll: p,
      setTitleMounted: c,
      setBodyMounted: d,
    }
  );
}
const Mk = w.forwardRef(
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
      zIndex: p,
      shadow: m,
      padding: h,
      __vars: x,
      unstyled: v,
      removeScrollProps: y,
      ...b
    },
    S
  ) => {
    const {
      _id: C,
      titleMounted: E,
      bodyMounted: R,
      shouldLockScroll: P,
      setTitleMounted: I,
      setBodyMounted: _,
    } = Lk({
      id: r,
      transitionProps: o,
      opened: t,
      trapFocus: s,
      closeOnEscape: i,
      onClose: n,
      returnFocus: l,
    });
    return g.jsx(Hc, {
      ...u,
      withinPortal: c,
      children: g.jsx(Ik, {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: a,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${C}-title`,
          getBodyId: () => `${C}-body`,
          titleMounted: E,
          bodyMounted: R,
          setTitleMounted: I,
          setBodyMounted: _,
          trapFocus: s,
          closeOnEscape: i,
          zIndex: p,
          unstyled: v,
        },
        children: g.jsx(Nx, {
          enabled: P && d,
          ...y,
          children: g.jsx(K, {
            ref: S,
            ...b,
            __vars: {
              ...x,
              "--mb-z-index": (p || Mo("modal")).toString(),
              "--mb-shadow": $m(m),
              "--mb-padding": Gr(h),
            },
            children: f,
          }),
        }),
      }),
    });
  }
);
function Fk() {
  const e = wr();
  return (
    w.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []),
    e.getBodyId()
  );
}
var Os = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
const TS = w.forwardRef(({ className: e, ...t }, n) => {
  const r = Fk(),
    o = wr();
  return g.jsx(K, {
    ref: n,
    ...t,
    id: r,
    className: wt({ [Os.body]: !o.unstyled }, e),
  });
});
TS.displayName = "@mantine/core/ModalBaseBody";
const $S = w.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const o = wr();
  return g.jsx(Gs, {
    ref: r,
    ...n,
    onClick: (s) => {
      o.onClose(), t == null || t(s);
    },
    className: wt({ [Os.close]: !o.unstyled }, e),
    unstyled: o.unstyled,
  });
});
$S.displayName = "@mantine/core/ModalBaseCloseButton";
const Bk = w.forwardRef(
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
      const l = wr();
      return g.jsx(Hs, {
        mounted: l.opened,
        transition: "pop",
        ...l.transitionProps,
        ...e,
        children: (a) =>
          g.jsx("div", {
            ...n,
            className: wt({ [Os.inner]: !l.unstyled }, n.className),
            children: g.jsx(Uc, {
              active: l.opened && l.trapFocus,
              children: g.jsx(Vc, {
                ...s,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": l.bodyMounted ? l.getBodyId() : void 0,
                "aria-labelledby": l.titleMounted ? l.getTitleId() : void 0,
                ref: i,
                style: [o, a],
                className: wt({ [Os.content]: !l.unstyled }, t),
                unstyled: l.unstyled,
                children: s.children,
              }),
            }),
          }),
      });
    }
  ),
  AS = w.forwardRef(({ className: e, ...t }, n) => {
    const r = wr();
    return g.jsx(K, {
      component: "header",
      ref: n,
      className: wt({ [Os.header]: !r.unstyled }, e),
      ...t,
    });
  });
AS.displayName = "@mantine/core/ModalBaseHeader";
const zk = { duration: 200, timingFunction: "ease", transition: "fade" };
function Vk(e) {
  const t = wr();
  return { ...zk, ...t.transitionProps, ...e };
}
const IS = w.forwardRef(
  ({ onClick: e, transitionProps: t, style: n, ...r }, o) => {
    const s = wr(),
      i = Vk(t);
    return g.jsx(Hs, {
      mounted: s.opened,
      ...i,
      transition: "fade",
      children: (l) =>
        g.jsx(rl, {
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
IS.displayName = "@mantine/core/ModalBaseOverlay";
function Wk() {
  const e = wr();
  return (
    w.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
const jS = w.forwardRef(({ className: e, ...t }, n) => {
  const r = Wk(),
    o = wr();
  return g.jsx(K, {
    component: "h2",
    ref: n,
    className: wt({ [Os.title]: !o.unstyled }, e),
    ...t,
    id: r,
  });
});
jS.displayName = "@mantine/core/ModalBaseTitle";
function Uk({ children: e }) {
  return g.jsx(g.Fragment, { children: e });
}
const [Hk, Ys] = Tm({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var bn = {
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
const xv = {},
  Gk = (e, { size: t }) => ({
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${dt(t)} - ${V(2)})`,
    },
  }),
  Gc = X((e, t) => {
    const n = W("InputDescription", xv, e),
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
        ...p
      } = W("InputDescription", xv, n),
      m = Ys(),
      h = ue({
        name: ["InputWrapper", u],
        props: n,
        classes: bn,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "description",
        vars: a,
        varsResolver: Gk,
      }),
      x = (d && (m == null ? void 0 : m.getStyles)) || h;
    return g.jsx(K, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...x(
        "description",
        m != null && m.getStyles ? { className: o, style: s } : void 0
      ),
      ...p,
    });
  });
Gc.classes = bn;
Gc.displayName = "@mantine/core/InputDescription";
const Yk = {},
  qk = (e, { size: t }) => ({
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${dt(t)} - ${V(2)})`,
    },
  }),
  Yc = X((e, t) => {
    const n = W("InputError", Yk, e),
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
        ...p
      } = n,
      m = ue({
        name: ["InputWrapper", u],
        props: n,
        classes: bn,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "error",
        vars: a,
        varsResolver: qk,
      }),
      h = Ys(),
      x = (d && (h == null ? void 0 : h.getStyles)) || m;
    return g.jsx(K, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...x(
        "error",
        h != null && h.getStyles ? { className: o, style: s } : void 0
      ),
      ...p,
    });
  });
Yc.classes = bn;
Yc.displayName = "@mantine/core/InputError";
const Sv = { labelElement: "label" },
  Kk = (e, { size: t }) => ({
    label: { "--input-label-size": dt(t), "--input-asterisk-color": void 0 },
  }),
  qc = X((e, t) => {
    const n = W("InputLabel", Sv, e),
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
        onMouseDown: p,
        children: m,
        __staticSelector: h,
        variant: x,
        mod: v,
        ...y
      } = W("InputLabel", Sv, n),
      b = ue({
        name: ["InputWrapper", h],
        props: n,
        classes: bn,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "label",
        vars: a,
        varsResolver: Kk,
      }),
      S = Ys(),
      C = (S == null ? void 0 : S.getStyles) || b;
    return g.jsxs(K, {
      ...C(
        "label",
        S != null && S.getStyles ? { className: o, style: s } : void 0
      ),
      component: c,
      variant: x,
      size: u,
      ref: t,
      htmlFor: c === "label" ? f : void 0,
      mod: [{ required: d }, v],
      onMouseDown: (E) => {
        p == null || p(E),
          !E.defaultPrevented && E.detail > 1 && E.preventDefault();
      },
      ...y,
      children: [
        m,
        d &&
          g.jsx("span", {
            ...C("required"),
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
qc.classes = bn;
qc.displayName = "@mantine/core/InputLabel";
const Cv = {},
  th = X((e, t) => {
    const n = W("InputPlaceholder", Cv, e),
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
        ...p
      } = W("InputPlaceholder", Cv, n),
      m = ue({
        name: ["InputPlaceholder", c],
        props: n,
        classes: bn,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "placeholder",
      });
    return g.jsx(K, {
      ...m("placeholder"),
      mod: [{ error: !!d }, f],
      component: "span",
      variant: u,
      ref: t,
      ...p,
    });
  });
th.classes = bn;
th.displayName = "@mantine/core/InputPlaceholder";
function Xk(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((a) => a === "input"),
    o = e[r - 1],
    s = e[r + 1];
  return {
    offsetBottom: (t && s === "description") || (n && s === "error"),
    offsetTop: (t && o === "description") || (n && o === "error"),
  };
}
const Qk = {
    labelElement: "label",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  Jk = (e, { size: t }) => ({
    label: { "--input-label-size": dt(t), "--input-asterisk-color": void 0 },
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${dt(t)} - ${V(2)})`,
    },
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${dt(t)} - ${V(2)})`,
    },
  }),
  nh = X((e, t) => {
    const n = W("InputWrapper", Qk, e),
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
        inputWrapperOrder: p,
        label: m,
        error: h,
        description: x,
        labelProps: v,
        descriptionProps: y,
        errorProps: b,
        labelElement: S,
        children: C,
        withAsterisk: E,
        id: R,
        required: P,
        __stylesApiProps: I,
        mod: _,
        ...T
      } = n,
      M = ue({
        name: ["InputWrapper", d],
        props: I || n,
        classes: bn,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: Jk,
      }),
      z = { size: c, variant: u, __staticSelector: d },
      L = to(R),
      $ = typeof E == "boolean" ? E : P,
      O = (b == null ? void 0 : b.id) || `${L}-error`,
      k = (y == null ? void 0 : y.id) || `${L}-description`,
      N = L,
      D = !!h && typeof h != "boolean",
      j = !!x,
      A = `${D ? O : ""} ${j ? k : ""}`,
      B = A.trim().length > 0 ? A.trim() : void 0,
      Y = (v == null ? void 0 : v.id) || `${L}-label`,
      J =
        m &&
        g.jsx(
          qc,
          {
            labelElement: S,
            id: Y,
            htmlFor: N,
            required: $,
            ...z,
            ...v,
            children: m,
          },
          "label"
        ),
      ee =
        j &&
        g.jsx(
          Gc,
          {
            ...y,
            ...z,
            size: (y == null ? void 0 : y.size) || z.size,
            id: (y == null ? void 0 : y.id) || k,
            children: x,
          },
          "description"
        ),
      oe = g.jsx(w.Fragment, { children: f(C) }, "input"),
      ne =
        D &&
        w.createElement(
          Yc,
          {
            ...b,
            ...z,
            size: (b == null ? void 0 : b.size) || z.size,
            key: "error",
            id: (b == null ? void 0 : b.id) || O,
          },
          h
        ),
      ye = p.map((se) => {
        switch (se) {
          case "label":
            return J;
          case "input":
            return oe;
          case "description":
            return ee;
          case "error":
            return ne;
          default:
            return null;
        }
      });
    return g.jsx(Hk, {
      value: {
        getStyles: M,
        describedBy: B,
        inputId: N,
        labelId: Y,
        ...Xk(p, { hasDescription: j, hasError: D }),
      },
      children: g.jsx(K, {
        ref: t,
        variant: u,
        size: c,
        mod: [{ error: !!h }, _],
        ...M("root"),
        ...T,
        children: ye,
      }),
    });
  });
nh.classes = bn;
nh.displayName = "@mantine/core/InputWrapper";
const Zk = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
  },
  eT = (e, t, n) => ({
    wrapper: {
      "--input-margin-top": n.offsetTop
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-margin-bottom": n.offsetBottom
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-height": Re(t.size, "input-height"),
      "--input-fz": dt(t.size),
      "--input-radius": t.radius === void 0 ? void 0 : Mn(t.radius),
      "--input-left-section-width":
        t.leftSectionWidth !== void 0 ? V(t.leftSectionWidth) : void 0,
      "--input-right-section-width":
        t.rightSectionWidth !== void 0 ? V(t.rightSectionWidth) : void 0,
      "--input-padding-y": t.multiline ? Re(t.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": t.leftSectionPointerEvents,
      "--input-right-section-pointer-events": t.rightSectionPointerEvents,
    },
  }),
  nt = yn((e, t) => {
    const n = W("Input", Zk, e),
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
        error: p,
        disabled: m,
        leftSection: h,
        leftSectionProps: x,
        leftSectionWidth: v,
        rightSection: y,
        rightSectionProps: b,
        rightSectionWidth: S,
        rightSectionPointerEvents: C,
        leftSectionPointerEvents: E,
        variant: R,
        vars: P,
        pointer: I,
        multiline: _,
        radius: T,
        id: M,
        withAria: z,
        withErrorStyles: L,
        mod: $,
        ...O
      } = n,
      { styleProps: k, rest: N } = Vs(O),
      D = Ys(),
      j = {
        offsetBottom: D == null ? void 0 : D.offsetBottom,
        offsetTop: D == null ? void 0 : D.offsetTop,
      },
      A = ue({
        name: ["Input", c],
        props: u || n,
        classes: bn,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        stylesCtx: j,
        rootSelector: "wrapper",
        vars: P,
        varsResolver: eT,
      }),
      B = z
        ? {
            required: a,
            disabled: m,
            "aria-invalid": !!p,
            "aria-describedby": D == null ? void 0 : D.describedBy,
            id: (D == null ? void 0 : D.inputId) || M,
          }
        : {};
    return g.jsxs(K, {
      ...A("wrapper"),
      ...k,
      ...f,
      mod: [
        {
          error: !!p && L,
          pointer: I,
          disabled: m,
          multiline: _,
          "data-with-right-section": !!y,
          "data-with-left-section": !!h,
        },
        $,
      ],
      variant: R,
      size: d,
      children: [
        h &&
          g.jsx("div", {
            ...x,
            "data-position": "left",
            ...A("section", {
              className: x == null ? void 0 : x.className,
              style: x == null ? void 0 : x.style,
            }),
            children: h,
          }),
        g.jsx(K, {
          component: "input",
          ...N,
          ...B,
          ref: t,
          required: a,
          mod: { disabled: m, error: !!p && L },
          variant: R,
          ...A("input"),
        }),
        y &&
          g.jsx("div", {
            ...b,
            "data-position": "right",
            ...A("section", {
              className: b == null ? void 0 : b.className,
              style: b == null ? void 0 : b.style,
            }),
            children: y,
          }),
      ],
    });
  });
nt.classes = bn;
nt.Wrapper = nh;
nt.Label = qc;
nt.Error = Yc;
nt.Description = Gc;
nt.Placeholder = th;
nt.displayName = "@mantine/core/Input";
function tT(e, t, n) {
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
      __stylesApiProps: p,
      errorProps: m,
      labelProps: h,
      descriptionProps: x,
      wrapperProps: v,
      id: y,
      size: b,
      style: S,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: R,
      variant: P,
      vars: I,
      mod: _,
      ...T
    } = r,
    { styleProps: M, rest: z } = Vs(T),
    L = {
      label: o,
      description: s,
      error: i,
      required: l,
      classNames: a,
      className: u,
      __staticSelector: f,
      __stylesApiProps: p || r,
      errorProps: m,
      labelProps: h,
      descriptionProps: x,
      unstyled: d,
      styles: c,
      size: b,
      style: S,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: R,
      variant: P,
      id: y,
      mod: _,
      ...v,
    };
  return {
    ...z,
    classNames: a,
    styles: c,
    unstyled: d,
    wrapperProps: { ...L, ...M },
    inputProps: {
      required: l,
      classNames: a,
      styles: c,
      unstyled: d,
      size: b,
      __staticSelector: f,
      __stylesApiProps: p || r,
      error: i,
      variant: P,
      id: y,
    },
  };
}
const nT = { __staticSelector: "InputBase", withAria: !0 },
  Bn = yn((e, t) => {
    const { inputProps: n, wrapperProps: r, ...o } = tT("InputBase", nT, e);
    return g.jsx(nt.Wrapper, {
      ...r,
      children: g.jsx(nt, { ...n, ...o, ref: t }),
    });
  });
Bn.classes = { ...nt.classes, ...nt.Wrapper.classes };
Bn.displayName = "@mantine/core/InputBase";
const rT = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" },
};
var LS = { root: "m_8bffd616" };
const oT = {},
  nc = yn((e, t) => {
    const n = W("Flex", oT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        gap: c,
        rowGap: u,
        columnGap: d,
        align: f,
        justify: p,
        wrap: m,
        direction: h,
        ...x
      } = n,
      v = ue({
        name: "Flex",
        classes: LS,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
      }),
      y = rn(),
      b = Fc(),
      S = Yx({
        styleProps: {
          gap: c,
          rowGap: u,
          columnGap: d,
          align: f,
          justify: p,
          wrap: m,
          direction: h,
        },
        theme: y,
        data: rT,
      });
    return g.jsxs(g.Fragment, {
      children: [
        S.hasResponsiveStyles &&
          g.jsx(Mc, { selector: `.${b}`, styles: S.styles, media: S.media }),
        g.jsx(K, {
          ref: t,
          ...v("root", { className: b, style: Bs(S.inlineStyles) }),
          ...x,
        }),
      ],
    });
  });
nc.classes = LS;
nc.displayName = "@mantine/core/Flex";
function up({ style: e, size: t = 16, ...n }) {
  return g.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { ...e, width: V(t), height: V(t), display: "block" },
    ...n,
    children: g.jsx("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
up.displayName = "@mantine/core/AccordionChevron";
var MS = { root: "m_b6d8b162" };
function sT(e) {
  if (e === "start") return "start";
  if (e === "end" || e) return "end";
}
const iT = { inherit: !1 },
  lT = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: s }) => ({
    root: {
      "--text-fz": dt(o),
      "--text-lh": kx(o),
      "--text-gradient": t === "gradient" ? op(r, e) : void 0,
      "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--text-color": s ? No(s, e) : void 0,
    },
  }),
  Kr = yn((e, t) => {
    const n = W("Text", iT, e),
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
        classNames: p,
        styles: m,
        unstyled: h,
        variant: x,
        mod: v,
        size: y,
        ...b
      } = n,
      S = ue({
        name: ["Text", c],
        props: n,
        classes: MS,
        className: d,
        style: f,
        classNames: p,
        styles: m,
        unstyled: h,
        vars: u,
        varsResolver: lT,
      });
    return g.jsx(K, {
      ...S("root", { focusable: !0 }),
      ref: t,
      component: a ? "span" : "p",
      variant: x,
      mod: [
        {
          "data-truncate": sT(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": s,
          "data-inherit": i,
        },
        v,
      ],
      size: y,
      ...b,
    });
  });
Kr.classes = MS;
Kr.displayName = "@mantine/core/Text";
function FS(e) {
  return typeof e == "string"
    ? { value: e, label: e }
    : "value" in e && !("label" in e)
    ? { value: e.value, label: e.value, disabled: e.disabled }
    : typeof e == "number"
    ? { value: e.toString(), label: e.toString() }
    : "group" in e
    ? { group: e.group, items: e.items.map((t) => FS(t)) }
    : e;
}
function rh(e) {
  return e ? e.map((t) => FS(t)) : [];
}
function Kc(e) {
  return e.reduce(
    (t, n) => ("group" in n ? { ...t, ...Kc(n.items) } : ((t[n.value] = n), t)),
    {}
  );
}
var Wt = {
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
const aT = { error: null },
  cT = (e, { size: t }) => ({
    chevron: { "--combobox-chevron-size": Re(t, "combobox-chevron-size") },
  }),
  oh = X((e, t) => {
    const n = W("ComboboxChevron", aT, e),
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
      p = ue({
        name: "ComboboxChevron",
        classes: Wt,
        props: n,
        style: s,
        className: i,
        classNames: l,
        styles: a,
        unstyled: c,
        vars: u,
        varsResolver: cT,
        rootSelector: "chevron",
      });
    return g.jsx(K, {
      component: "svg",
      ...f,
      ...p("chevron"),
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
oh.classes = Wt;
oh.displayName = "@mantine/core/ComboboxChevron";
const [uT, wn] = Ln("Combobox component was not found in tree"),
  BS = w.forwardRef(
    ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, s) =>
      g.jsx(Gs, {
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
BS.displayName = "@mantine/core/ComboboxClearButton";
const dT = {},
  sh = X((e, t) => {
    const {
        classNames: n,
        styles: r,
        className: o,
        style: s,
        hidden: i,
        ...l
      } = W("ComboboxDropdown", dT, e),
      a = wn();
    return g.jsx(Fn.Dropdown, {
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
sh.classes = Wt;
sh.displayName = "@mantine/core/ComboboxDropdown";
const fT = { refProp: "ref" },
  zS = X((e, t) => {
    const { children: n, refProp: r } = W("ComboboxDropdownTarget", fT, e);
    if ((wn(), !Lo(n)))
      throw new Error(
        "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    return g.jsx(Fn.Target, { ref: t, refProp: r, children: n });
  });
zS.displayName = "@mantine/core/ComboboxDropdownTarget";
const pT = {},
  ih = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxEmpty", pT, e),
      a = wn();
    return g.jsx(K, {
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
ih.classes = Wt;
ih.displayName = "@mantine/core/ComboboxEmpty";
function lh({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: s,
}) {
  const i = wn(),
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
const mT = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  VS = X((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = W("ComboboxEventsTarget", mT, e);
    if (!Lo(n))
      throw new Error(
        "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = wn(),
      d = lh({
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
      [r]: nn(t, u.store.targetRef, n == null ? void 0 : n.ref),
    });
  });
VS.displayName = "@mantine/core/ComboboxEventsTarget";
const hT = {},
  ah = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxFooter", hT, e),
      a = wn();
    return g.jsx(K, {
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
ah.classes = Wt;
ah.displayName = "@mantine/core/ComboboxFooter";
const gT = {},
  ch = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        children: l,
        label: a,
        ...c
      } = W("ComboboxGroup", gT, e),
      u = wn();
    return g.jsxs(K, {
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
ch.classes = Wt;
ch.displayName = "@mantine/core/ComboboxGroup";
const yT = {},
  uh = X((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxHeader", yT, e),
      a = wn();
    return g.jsx(K, {
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
uh.classes = Wt;
uh.displayName = "@mantine/core/ComboboxHeader";
function WS({ value: e, valuesDivider: t = ",", ...n }) {
  return g.jsx("input", {
    type: "hidden",
    value: Array.isArray(e) ? e.join(t) : e || "",
    ...n,
  });
}
WS.displayName = "@mantine/core/ComboboxHiddenInput";
const vT = {},
  dh = X((e, t) => {
    const n = W("ComboboxOption", vT, e),
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
        disabled: p,
        selected: m,
        mod: h,
        ...x
      } = n,
      v = wn(),
      y = w.useId(),
      b = c || y;
    return g.jsx(K, {
      ...v.getStyles("option", {
        className: o,
        classNames: r,
        styles: i,
        style: s,
      }),
      ...x,
      ref: t,
      id: b,
      mod: [
        "combobox-option",
        {
          "combobox-active": u,
          "combobox-disabled": p,
          "combobox-selected": m,
        },
        h,
      ],
      role: "option",
      onClick: (S) => {
        var C;
        p
          ? S.preventDefault()
          : ((C = v.onOptionSubmit) == null || C.call(v, n.value, n),
            a == null || a(S));
      },
      onMouseDown: (S) => {
        S.preventDefault(), d == null || d(S);
      },
      onMouseOver: (S) => {
        v.resetSelectionOnOptionHover && v.store.resetSelectedOption(),
          f == null || f(S);
      },
    });
  });
dh.classes = Wt;
dh.displayName = "@mantine/core/ComboboxOption";
const bT = {},
  fh = X((e, t) => {
    const n = W("ComboboxOptions", bT, e),
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
      d = wn(),
      f = to(l);
    return (
      w.useEffect(() => {
        d.store.setListId(f);
      }, [f]),
      g.jsx(K, {
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
        onMouseDown: (p) => {
          p.preventDefault(), a == null || a(p);
        },
      })
    );
  });
fh.classes = Wt;
fh.displayName = "@mantine/core/ComboboxOptions";
const wT = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
  ph = X((e, t) => {
    const n = W("ComboboxSearch", wT, e),
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
      f = wn(),
      p = f.getStyles("search"),
      m = lh({
        targetType: "input",
        withAriaAttributes: l,
        withKeyboardNavigation: c,
        withExpandedAttribute: !1,
        onKeyDown: a,
        autoComplete: "off",
      });
    return g.jsx(nt, {
      ref: nn(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...m,
      ...d,
      __staticSelector: "Combobox",
    });
  });
ph.classes = Wt;
ph.displayName = "@mantine/core/ComboboxSearch";
const xT = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  US = X((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = W("ComboboxTarget", xT, e);
    if (!Lo(n))
      throw new Error(
        "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = wn(),
      d = lh({
        targetType: l,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: a,
      }),
      f = w.cloneElement(n, { ...d, ...c });
    return g.jsx(Fn.Target, { ref: nn(t, u.store.targetRef), children: f });
  });
US.displayName = "@mantine/core/ComboboxTarget";
function ST(e, t, n) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = t.length - 1; r > -1; r -= 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function CT(e, t, n) {
  for (let r = e + 1; r < t.length; r += 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = 0; r < t.length; r += 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function ET(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled")) return t;
  return -1;
}
function Xc({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: s = !0,
  scrollBehavior: i = "instant",
} = {}) {
  const [l, a] = $n({ value: t, defaultValue: e, finalValue: !1, onChange: n }),
    c = w.useRef(null),
    u = w.useRef(-1),
    d = w.useRef(null),
    f = w.useRef(null),
    p = w.useRef(-1),
    m = w.useRef(-1),
    h = w.useRef(-1),
    x = w.useCallback(
      (O = "unknown") => {
        l || (a(!0), o == null || o(O));
      },
      [a, o, l]
    ),
    v = w.useCallback(
      (O = "unknown") => {
        l && (a(!1), r == null || r(O));
      },
      [a, r, l]
    ),
    y = w.useCallback(
      (O = "unknown") => {
        l ? v(O) : x(O);
      },
      [v, x, l]
    ),
    b = w.useCallback(() => {
      const O = document.querySelector(
        `#${c.current} [data-combobox-selected]`
      );
      O == null || O.removeAttribute("data-combobox-selected"),
        O == null || O.removeAttribute("aria-selected");
    }, []),
    S = w.useCallback(
      (O) => {
        const k = document.getElementById(c.current),
          N = k == null ? void 0 : k.querySelectorAll("[data-combobox-option]");
        if (!N) return null;
        const D = O >= N.length ? 0 : O < 0 ? N.length - 1 : O;
        return (
          (u.current = D),
          N != null && N[D] && !N[D].hasAttribute("data-combobox-disabled")
            ? (b(),
              N[D].setAttribute("data-combobox-selected", "true"),
              N[D].setAttribute("aria-selected", "true"),
              N[D].scrollIntoView({ block: "nearest", behavior: i }),
              N[D].id)
            : null
        );
      },
      [i, b]
    ),
    C = w.useCallback(() => {
      const O = document.querySelector(`#${c.current} [data-combobox-active]`);
      if (O) {
        const k = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          N = Array.from(k).findIndex((D) => D === O);
        return S(N);
      }
      return S(0);
    }, [S]),
    E = w.useCallback(
      () =>
        S(
          CT(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [S, s]
    ),
    R = w.useCallback(
      () =>
        S(
          ST(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [S, s]
    ),
    P = w.useCallback(
      () =>
        S(
          ET(document.querySelectorAll(`#${c.current} [data-combobox-option]`))
        ),
      [S]
    ),
    I = w.useCallback((O = "selected", k) => {
      h.current = window.setTimeout(() => {
        var j;
        const N = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          D = Array.from(N).findIndex((A) =>
            A.hasAttribute(`data-combobox-${O}`)
          );
        (u.current = D),
          k != null &&
            k.scrollIntoView &&
            ((j = N[D]) == null ||
              j.scrollIntoView({ block: "nearest", behavior: i }));
      }, 0);
    }, []),
    _ = w.useCallback(() => {
      (u.current = -1), b();
    }, [b]),
    T = w.useCallback(() => {
      const O = document.querySelectorAll(
          `#${c.current} [data-combobox-option]`
        ),
        k = O == null ? void 0 : O[u.current];
      k == null || k.click();
    }, []),
    M = w.useCallback((O) => {
      c.current = O;
    }, []),
    z = w.useCallback(() => {
      p.current = window.setTimeout(() => d.current.focus(), 0);
    }, []),
    L = w.useCallback(() => {
      m.current = window.setTimeout(() => f.current.focus(), 0);
    }, []),
    $ = w.useCallback(() => u.current, []);
  return (
    w.useEffect(
      () => () => {
        window.clearTimeout(p.current),
          window.clearTimeout(m.current),
          window.clearTimeout(h.current);
      },
      []
    ),
    {
      dropdownOpened: l,
      openDropdown: x,
      closeDropdown: v,
      toggleDropdown: y,
      selectedOptionIndex: u.current,
      getSelectedOptionIndex: $,
      selectOption: S,
      selectFirstOption: P,
      selectActiveOption: C,
      selectNextOption: E,
      selectPreviousOption: R,
      resetSelectedOption: _,
      updateSelectedOptionIndex: I,
      listId: c.current,
      setListId: M,
      clickSelectedOption: T,
      searchRef: d,
      focusSearchInput: z,
      targetRef: f,
      focusTarget: L,
    }
  );
}
const DT = {
    keepMounted: !0,
    withinPortal: !0,
    resetSelectionOnOptionHover: !1,
    width: "target",
    transitionProps: { transition: "fade", duration: 0 },
  },
  RT = (e, { size: t, dropdownPadding: n }) => ({
    options: {
      "--combobox-option-fz": dt(t),
      "--combobox-option-padding": Re(t, "combobox-option-padding"),
    },
    dropdown: {
      "--combobox-padding": n === void 0 ? void 0 : V(n),
      "--combobox-option-fz": dt(t),
      "--combobox-option-padding": Re(t, "combobox-option-padding"),
    },
  });
function pe(e) {
  const t = W("Combobox", DT, e),
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
      __staticSelector: p,
      readOnly: m,
      ...h
    } = t,
    x = Xc(),
    v = i || x,
    y = ue({
      name: p || "Combobox",
      classes: Wt,
      props: t,
      classNames: n,
      styles: r,
      unstyled: o,
      vars: l,
      varsResolver: RT,
    }),
    b = () => {
      c == null || c(), v.closeDropdown();
    };
  return g.jsx(uT, {
    value: {
      getStyles: y,
      store: v,
      onOptionSubmit: a,
      size: u,
      resetSelectionOnOptionHover: f,
      readOnly: m,
    },
    children: g.jsx(Fn, {
      opened: v.dropdownOpened,
      ...h,
      onClose: b,
      withRoles: !1,
      unstyled: o,
      children: s,
    }),
  });
}
const PT = (e) => e;
pe.extend = PT;
pe.classes = Wt;
pe.displayName = "@mantine/core/Combobox";
pe.Target = US;
pe.Dropdown = sh;
pe.Options = fh;
pe.Option = dh;
pe.Search = ph;
pe.Empty = ih;
pe.Chevron = oh;
pe.Footer = ah;
pe.Header = uh;
pe.EventsTarget = VS;
pe.DropdownTarget = zS;
pe.Group = ch;
pe.ClearButton = BS;
pe.HiddenInput = WS;
var HS = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc",
};
const NT = HS,
  GS = w.forwardRef(
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
        labelPosition: p = "left",
        bodyElement: m = "div",
        labelElement: h = "label",
        variant: x,
        style: v,
        vars: y,
        mod: b,
        ...S
      },
      C
    ) => {
      const E = ue({
        name: e,
        props: t,
        className: n,
        style: v,
        classes: HS,
        classNames: r,
        styles: o,
        unstyled: s,
      });
      return g.jsx(K, {
        ...E("root"),
        ref: C,
        __vars: { "--label-fz": dt(f), "--label-lh": Re(f, "label-lh") },
        mod: [{ "label-position": p }, b],
        variant: x,
        size: f,
        ...S,
        children: g.jsxs(K, {
          component: m,
          htmlFor: m === "label" ? c : void 0,
          ...E("body"),
          children: [
            i,
            g.jsxs("div", {
              ...E("labelWrapper"),
              "data-disabled": u || void 0,
              children: [
                l &&
                  g.jsx(K, {
                    component: h,
                    htmlFor: h === "label" ? c : void 0,
                    ...E("label"),
                    "data-disabled": u || void 0,
                    children: l,
                  }),
                a &&
                  g.jsx(nt.Description, {
                    size: f,
                    __inheritStyles: !1,
                    ...E("description"),
                    children: a,
                  }),
                d &&
                  typeof d != "boolean" &&
                  g.jsx(nt.Error, {
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
GS.displayName = "@mantine/core/InlineInput";
const YS = w.createContext(null),
  _T = YS.Provider,
  OT = () => w.useContext(YS);
function kT({ children: e, role: t }) {
  const n = Ys();
  return n
    ? g.jsx("div", {
        role: t,
        "aria-labelledby": n.labelId,
        "aria-describedby": n.describedBy,
        children: e,
      })
    : g.jsx(g.Fragment, { children: e });
}
const TT = {},
  mh = X((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onChange: o,
        size: s,
        wrapperProps: i,
        children: l,
        readOnly: a,
        ...c
      } = W("CheckboxGroup", TT, e),
      [u, d] = $n({ value: n, defaultValue: r, finalValue: [], onChange: o }),
      f = (p) => {
        const m = p.currentTarget.value;
        !a && d(u.includes(m) ? u.filter((h) => h !== m) : [...u, m]);
      };
    return g.jsx(_T, {
      value: { value: u, onChange: f, size: s },
      children: g.jsx(nt.Wrapper, {
        size: s,
        ref: t,
        ...i,
        ...c,
        labelElement: "div",
        __staticSelector: "CheckboxGroup",
        children: g.jsx(kT, { role: "group", children: l }),
      }),
    });
  });
mh.classes = nt.Wrapper.classes;
mh.displayName = "@mantine/core/CheckboxGroup";
function qS({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: V(e), height: V(e), ...t } : t;
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
function $T({ indeterminate: e, ...t }) {
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
    : g.jsx(qS, { ...t });
}
var KS = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542",
};
const AT = { labelPosition: "right", icon: $T },
  IT = (
    e,
    { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }
  ) => {
    const l = zs({ color: n || e.primaryColor, theme: e }),
      a =
        l.isThemeColor && l.shade === void 0
          ? `var(--mantine-color-${l.color}-outline)`
          : l.color;
    return {
      root: {
        "--checkbox-size": Re(r, "checkbox-size"),
        "--checkbox-radius": t === void 0 ? void 0 : Mn(t),
        "--checkbox-color": s === "outline" ? a : No(n, e),
        "--checkbox-icon-color": o
          ? No(o, e)
          : v_(i, e)
          ? Vx({ color: n, theme: e })
          : void 0,
      },
    };
  },
  ks = X((e, t) => {
    const n = W("Checkbox", AT, e),
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
        radius: p,
        wrapperProps: m,
        children: h,
        checked: x,
        labelPosition: v,
        description: y,
        error: b,
        disabled: S,
        variant: C,
        indeterminate: E,
        icon: R,
        rootRef: P,
        iconColor: I,
        onChange: _,
        autoContrast: T,
        mod: M,
        ...z
      } = n,
      L = OT(),
      $ = f || (L == null ? void 0 : L.size),
      O = R,
      k = ue({
        name: "Checkbox",
        props: n,
        classes: KS,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: IT,
      }),
      { styleProps: N, rest: D } = Vs(z),
      j = to(d),
      A = L
        ? {
            checked: L.value.includes(D.value),
            onChange: (B) => {
              L.onChange(B), _ == null || _(B);
            },
          }
        : {};
    return g.jsx(GS, {
      ...k("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: j,
      size: $,
      labelPosition: v,
      label: u,
      description: y,
      error: b,
      disabled: S,
      classNames: r,
      styles: i,
      unstyled: l,
      "data-checked": A.checked || x || void 0,
      variant: C,
      ref: P,
      mod: M,
      ...N,
      ...m,
      children: g.jsxs(K, {
        ...k("inner"),
        mod: { "data-label-position": v },
        children: [
          g.jsx(K, {
            component: "input",
            id: j,
            ref: t,
            checked: x,
            disabled: S,
            mod: { error: !!b, indeterminate: E },
            ...k("input", { focusable: !0, variant: C }),
            onChange: _,
            ...D,
            ...A,
            type: "checkbox",
          }),
          g.jsx(O, { indeterminate: E, ...k("icon") }),
        ],
      }),
    });
  });
ks.classes = { ...KS, ...NT };
ks.displayName = "@mantine/core/Checkbox";
ks.Group = mh;
function Oo(e) {
  return "group" in e;
}
function XS({ options: e, search: t, limit: n }) {
  const r = t.trim().toLowerCase(),
    o = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    if (o.length === n) return o;
    Oo(i) &&
      o.push({
        group: i.group,
        items: XS({ options: i.items, search: t, limit: n - o.length }),
      }),
      Oo(i) || (i.label.toLowerCase().includes(r) && o.push(i));
  }
  return o;
}
function jT(e) {
  if (e.length === 0) return !0;
  for (const t of e) if (!("group" in t) || t.items.length > 0) return !1;
  return !0;
}
function QS(e, t = new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Oo(n)) QS(n.items, t);
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
function LT(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function JS({
  data: e,
  withCheckIcon: t,
  value: n,
  checkIconPosition: r,
  unstyled: o,
  renderOption: s,
}) {
  if (!Oo(e)) {
    const l = LT(n, e.value),
      a = t && l && g.jsx(qS, { className: Wt.optionsDropdownCheckIcon }),
      c = g.jsxs(g.Fragment, {
        children: [
          r === "left" && a,
          g.jsx("span", { children: e.label }),
          r === "right" && a,
        ],
      });
    return g.jsx(pe.Option, {
      value: e.value,
      disabled: e.disabled,
      className: wt({ [Wt.optionsDropdownOption]: !o }),
      "data-reverse": r === "right" || void 0,
      "data-checked": l || void 0,
      "aria-selected": l,
      active: l,
      children: typeof s == "function" ? s({ option: e, checked: l }) : c,
    });
  }
  const i = e.items.map((l) =>
    g.jsx(
      JS,
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
  return g.jsx(pe.Group, { label: e.group, children: i });
}
function hh({
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
  unstyled: p,
  labelId: m,
  renderOption: h,
  scrollAreaProps: x,
  "aria-label": v,
}) {
  QS(e);
  const b =
      typeof o == "string"
        ? (r || XS)({ options: e, search: a ? o : "", limit: s ?? 1 / 0 })
        : e,
    S = jT(b),
    C = b.map((E) =>
      g.jsx(
        JS,
        {
          data: E,
          withCheckIcon: c,
          value: u,
          checkIconPosition: d,
          unstyled: p,
          renderOption: h,
        },
        Oo(E) ? E.group : E.value
      )
    );
  return g.jsx(pe.Dropdown, {
    hidden: t || (n && S),
    children: g.jsxs(pe.Options, {
      labelledBy: m,
      "aria-label": v,
      children: [
        l
          ? g.jsx(xl.Autosize, {
              mah: i ?? 220,
              type: "scroll",
              scrollbarSize: "var(--combobox-padding)",
              offsetScrollbars: "y",
              ...x,
              children: C,
            })
          : C,
        S && f && g.jsx(pe.Empty, { children: f }),
      ],
    }),
  });
}
var Qc = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
};
const Ev = { orientation: "horizontal" },
  MT = (e, { borderWidth: t }) => ({
    group: { "--button-border-width": V(t) },
  }),
  gh = X((e, t) => {
    const n = W("ButtonGroup", Ev, e),
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
        ...p
      } = W("ButtonGroup", Ev, e),
      m = ue({
        name: "ButtonGroup",
        props: n,
        classes: Qc,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: MT,
        rootSelector: "group",
      });
    return g.jsx(K, {
      ...m("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": a }, f],
      role: "group",
      ...p,
    });
  });
gh.classes = Qc;
gh.displayName = "@mantine/core/ButtonGroup";
const FT = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${V(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  BT = {},
  zT = (
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
        "--button-height": Re(s, "button-height"),
        "--button-padding-x": Re(s, "button-padding-x"),
        "--button-fz":
          s != null && s.includes("compact")
            ? dt(s.replace("compact-", ""))
            : dt(s),
        "--button-radius": t === void 0 ? void 0 : Mn(t),
        "--button-bg": n || o ? a.background : void 0,
        "--button-hover": n || o ? a.hover : void 0,
        "--button-color": a.color,
        "--button-bd": n || o ? a.border : void 0,
        "--button-hover-color": n || o ? a.hoverColor : void 0,
      },
    };
  },
  yt = yn((e, t) => {
    const n = W("Button", BT, e),
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
        radius: p,
        loading: m,
        loaderProps: h,
        gradient: x,
        classNames: v,
        styles: y,
        unstyled: b,
        "data-disabled": S,
        autoContrast: C,
        mod: E,
        ...R
      } = n,
      P = ue({
        name: "Button",
        props: n,
        classes: Qc,
        className: s,
        style: r,
        classNames: v,
        styles: y,
        unstyled: b,
        vars: o,
        varsResolver: zT,
      }),
      I = !!c,
      _ = !!u;
    return g.jsxs(Jn, {
      ref: t,
      ...P("root", { active: !l && !m && !S }),
      unstyled: b,
      variant: f,
      disabled: l || m,
      mod: [
        {
          disabled: l || S,
          loading: m,
          block: d,
          "with-left-section": I,
          "with-right-section": _,
        },
        E,
      ],
      ...R,
      children: [
        g.jsx(Hs, {
          mounted: !!m,
          transition: FT,
          duration: 150,
          children: (T) =>
            g.jsx(K, {
              component: "span",
              ...P("loader", { style: T }),
              "aria-hidden": !0,
              children: g.jsx(Cl, {
                color: "var(--button-color)",
                size: "calc(var(--button-height) / 1.8)",
                ...h,
              }),
            }),
        }),
        g.jsxs("span", {
          ...P("inner"),
          children: [
            c &&
              g.jsx(K, {
                component: "span",
                ...P("section"),
                mod: { position: "left" },
                children: c,
              }),
            g.jsx(K, {
              component: "span",
              mod: { loading: m },
              ...P("label"),
              children: a,
            }),
            u &&
              g.jsx(K, {
                component: "span",
                ...P("section"),
                mod: { position: "right" },
                children: u,
              }),
          ],
        }),
      ],
    });
  });
yt.classes = Qc;
yt.displayName = "@mantine/core/Button";
yt.Group = gh;
const [VT, WT] = Ln("Card component was not found in tree");
var yh = { root: "m_e615b15f", section: "m_599a2148" };
const UT = {},
  Jc = yn((e, t) => {
    const n = W("CardSection", UT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        withBorder: a,
        inheritPadding: c,
        mod: u,
        ...d
      } = n,
      f = WT();
    return g.jsx(K, {
      ref: t,
      mod: [{ "with-border": a, "inherit-padding": c }, u],
      ...f.getStyles("section", {
        className: o,
        style: s,
        styles: i,
        classNames: r,
      }),
      ...d,
    });
  });
Jc.classes = yh;
Jc.displayName = "@mantine/core/CardSection";
const HT = {},
  GT = (e, { padding: t }) => ({ root: { "--card-padding": Gr(t) } }),
  ol = yn((e, t) => {
    const n = W("Card", HT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        children: c,
        padding: u,
        ...d
      } = n,
      f = ue({
        name: "Card",
        props: n,
        classes: yh,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: GT,
      }),
      p = w.Children.toArray(c),
      m = p.map((h, x) =>
        typeof h == "object" && h && "type" in h && h.type === Jc
          ? w.cloneElement(h, {
              "data-first-section": x === 0 || void 0,
              "data-last-section": x === p.length - 1 || void 0,
            })
          : h
      );
    return g.jsx(VT, {
      value: { getStyles: f },
      children: g.jsx(Vc, {
        ref: t,
        unstyled: l,
        ...f("root"),
        ...d,
        children: m,
      }),
    });
  });
ol.classes = yh;
ol.displayName = "@mantine/core/Card";
ol.Section = Jc;
var ZS = { root: "m_4451eb3a" };
const YT = {},
  vh = yn((e, t) => {
    const n = W("Center", YT, e),
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
        classes: ZS,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
      });
    return g.jsx(K, { ref: t, mod: [{ inline: c }, u], ...f("root"), ...d });
  });
vh.classes = ZS;
vh.displayName = "@mantine/core/Center";
var e1 = { root: "m_7485cace" };
const qT = {},
  KT = (e, { size: t, fluid: n }) => ({
    root: { "--container-size": n ? void 0 : Re(t, "container-size") },
  }),
  Ai = X((e, t) => {
    const n = W("Container", qT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        fluid: c,
        mod: u,
        ...d
      } = n,
      f = ue({
        name: "Container",
        classes: e1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: KT,
      });
    return g.jsx(K, { ref: t, mod: [{ fluid: c }, u], ...f("root"), ...d });
  });
Ai.classes = e1;
Ai.displayName = "@mantine/core/Container";
var t1 = { root: "m_3eebeb36", label: "m_9e365f20" };
const XT = { orientation: "horizontal" },
  QT = (e, { color: t, variant: n, size: r }) => ({
    root: {
      "--divider-color": t ? No(t, e) : void 0,
      "--divider-border-style": n,
      "--divider-size": Re(r, "divider-size"),
    },
  }),
  bh = X((e, t) => {
    const n = W("Divider", XT, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        color: c,
        orientation: u,
        label: d,
        labelPosition: f,
        mod: p,
        ...m
      } = n,
      h = ue({
        name: "Divider",
        classes: t1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: QT,
      });
    return g.jsx(K, {
      ref: t,
      mod: [{ orientation: u, "with-label": !!d }, p],
      ...h("root"),
      ...m,
      role: "separator",
      children:
        d &&
        g.jsx(K, {
          component: "span",
          mod: { position: f },
          ...h("label"),
          children: d,
        }),
    });
  });
bh.classes = t1;
bh.displayName = "@mantine/core/Divider";
function JT({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = w.useRef(-1),
    s = w.useRef(-1),
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
  return w.useEffect(() => i, []), { openDropdown: l, closeDropdown: a };
}
const [ZT, n1] = Ln("Grid component was not found in tree"),
  dp = (e, t) =>
    e === "content"
      ? "auto"
      : e === "auto"
      ? "0rem"
      : e
      ? `${100 / (t / e)}%`
      : void 0,
  Dv = (e, t, n) =>
    n || e === "auto" ? "100%" : e === "content" ? "unset" : dp(e, t),
  Rv = (e, t) => {
    if (e) return e === "auto" || t ? "1" : "auto";
  },
  Pv = (e, t) => (e === 0 ? "0" : e ? `${100 / (t / e)}%` : void 0);
function e$({ span: e, order: t, offset: n, selector: r }) {
  var f;
  const o = rn(),
    s = n1(),
    l = Ei(e) === void 0 ? 12 : Ei(e),
    a = Bs({
      "--col-order": (f = Ei(t)) == null ? void 0 : f.toString(),
      "--col-flex-grow": Rv(l, s.grow),
      "--col-flex-basis": dp(l, s.columns),
      "--col-width": l === "content" ? "auto" : void 0,
      "--col-max-width": Dv(l, s.columns, s.grow),
      "--col-offset": Pv(Ei(n), s.columns),
    }),
    c = vt(o.breakpoints).reduce((p, m) => {
      var h;
      return (
        p[m] || (p[m] = {}),
        typeof t == "object" &&
          t[m] !== void 0 &&
          (p[m]["--col-order"] = (h = t[m]) == null ? void 0 : h.toString()),
        typeof e == "object" &&
          e[m] !== void 0 &&
          ((p[m]["--col-flex-grow"] = Rv(e[m], s.grow)),
          (p[m]["--col-flex-basis"] = dp(e[m], s.columns)),
          (p[m]["--col-width"] = e[m] === "content" ? "auto" : void 0),
          (p[m]["--col-max-width"] = Dv(e[m], s.columns, s.grow))),
        typeof n == "object" &&
          n[m] !== void 0 &&
          (p[m]["--col-offset"] = Pv(n[m], s.columns)),
        p
      );
    }, {}),
    d = Tx(vt(c), o)
      .filter((p) => vt(c[p.value]).length > 0)
      .map((p) => ({
        query: `(min-width: ${o.breakpoints[p.value]})`,
        styles: c[p.value],
      }));
  return g.jsx(Mc, { styles: a, media: d, selector: r });
}
var wh = { root: "m_410352e9", inner: "m_dee7bd2f", col: "m_96bdd299" };
const t$ = { span: 12 },
  xh = X((e, t) => {
    const n = W("GridCol", t$, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        span: a,
        order: c,
        offset: u,
        ...d
      } = n,
      f = n1(),
      p = Fc();
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(e$, { selector: `.${p}`, span: a, order: c, offset: u }),
        g.jsx(K, {
          ref: t,
          ...f.getStyles("col", {
            className: wt(o, p),
            style: s,
            classNames: r,
            styles: i,
          }),
          ...d,
        }),
      ],
    });
  });
xh.classes = wh;
xh.displayName = "@mantine/core/GridCol";
function n$({ gutter: e, selector: t }) {
  const n = rn(),
    r = Bs({ "--grid-gutter": Gr(Ei(e)) }),
    o = vt(n.breakpoints).reduce(
      (l, a) => (
        l[a] || (l[a] = {}),
        typeof e == "object" &&
          e[a] !== void 0 &&
          (l[a]["--grid-gutter"] = Gr(e[a])),
        l
      ),
      {}
    ),
    i = Tx(vt(o), n)
      .filter((l) => vt(o[l.value]).length > 0)
      .map((l) => ({
        query: `(min-width: ${n.breakpoints[l.value]})`,
        styles: o[l.value],
      }));
  return g.jsx(Mc, { styles: r, media: i, selector: t });
}
const r$ = { gutter: "md", grow: !1, columns: 12 },
  o$ = (e, { justify: t, align: n, overflow: r }) => ({
    root: { "--grid-justify": t, "--grid-align": n, "--grid-overflow": r },
  }),
  Ye = X((e, t) => {
    const n = W("Grid", r$, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        grow: c,
        gutter: u,
        columns: d,
        align: f,
        justify: p,
        children: m,
        ...h
      } = n,
      x = ue({
        name: "Grid",
        classes: wh,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: o$,
      }),
      v = Fc();
    return g.jsxs(ZT, {
      value: { getStyles: x, grow: c, columns: d },
      children: [
        g.jsx(n$, { selector: `.${v}`, ...n }),
        g.jsx(K, {
          ref: t,
          ...x("root", { className: v }),
          ...h,
          children: g.jsx("div", { ...x("inner"), children: m }),
        }),
      ],
    });
  });
Ye.classes = wh;
Ye.displayName = "@mantine/core/Grid";
Ye.Col = xh;
const [s$, r1] = Ln("HoverCard component was not found in the tree"),
  i$ = {};
function o1(e) {
  const {
      children: t,
      onMouseEnter: n,
      onMouseLeave: r,
      ...o
    } = W("HoverCardDropdown", i$, e),
    s = r1(),
    i = Xa(n, s.openDropdown),
    l = Xa(r, s.closeDropdown);
  return g.jsx(Fn.Dropdown, {
    onMouseEnter: i,
    onMouseLeave: l,
    ...o,
    children: t,
  });
}
o1.displayName = "@mantine/core/HoverCardDropdown";
const l$ = { refProp: "ref" },
  s1 = w.forwardRef((e, t) => {
    const {
      children: n,
      refProp: r,
      eventPropsWrapperName: o,
      ...s
    } = W("HoverCardTarget", l$, e);
    if (!Lo(n))
      throw new Error(
        "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const i = r1(),
      l = Xa(n.props.onMouseEnter, i.openDropdown),
      a = Xa(n.props.onMouseLeave, i.closeDropdown),
      c = { onMouseEnter: l, onMouseLeave: a };
    return g.jsx(Fn.Target, {
      refProp: r,
      ref: t,
      ...s,
      children: w.cloneElement(n, o ? { [o]: c } : c),
    });
  });
s1.displayName = "@mantine/core/HoverCardTarget";
const a$ = { openDelay: 0, closeDelay: 150, initiallyOpened: !1 };
function Zn(e) {
  const {
      children: t,
      onOpen: n,
      onClose: r,
      openDelay: o,
      closeDelay: s,
      initiallyOpened: i,
      ...l
    } = W("HoverCard", a$, e),
    [a, { open: c, close: u }] = Po(i, { onClose: r, onOpen: n }),
    { openDropdown: d, closeDropdown: f } = JT({
      open: c,
      close: u,
      openDelay: o,
      closeDelay: s,
    });
  return g.jsx(s$, {
    value: { openDropdown: d, closeDropdown: f },
    children: g.jsx(Fn, {
      ...l,
      opened: a,
      __staticSelector: "HoverCard",
      children: t,
    }),
  });
}
Zn.displayName = "@mantine/core/HoverCard";
Zn.Target = s1;
Zn.Dropdown = o1;
Zn.extend = (e) => e;
function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dr.apply(this, arguments)
  );
}
function Sh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var c$ = w.useLayoutEffect,
  u$ = function (t) {
    var n = w.useRef(t);
    return (
      c$(function () {
        n.current = t;
      }),
      n
    );
  },
  Nv = function (t, n) {
    if (typeof t == "function") {
      t(n);
      return;
    }
    t.current = n;
  },
  d$ = function (t, n) {
    var r = w.useRef();
    return w.useCallback(
      function (o) {
        (t.current = o),
          r.current && Nv(r.current, null),
          (r.current = n),
          n && Nv(n, o);
      },
      [n]
    );
  },
  _v = {
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
  f$ = function (t) {
    Object.keys(_v).forEach(function (n) {
      t.style.setProperty(n, _v[n], "important");
    });
  },
  Ov = f$,
  St = null,
  kv = function (t, n) {
    var r = t.scrollHeight;
    return n.sizingStyle.boxSizing === "border-box"
      ? r + n.borderSize
      : r - n.paddingSize;
  };
function p$(e, t, n, r) {
  n === void 0 && (n = 1),
    r === void 0 && (r = 1 / 0),
    St ||
      ((St = document.createElement("textarea")),
      St.setAttribute("tabindex", "-1"),
      St.setAttribute("aria-hidden", "true"),
      Ov(St)),
    St.parentNode === null && document.body.appendChild(St);
  var o = e.paddingSize,
    s = e.borderSize,
    i = e.sizingStyle,
    l = i.boxSizing;
  Object.keys(i).forEach(function (f) {
    var p = f;
    St.style[p] = i[p];
  }),
    Ov(St),
    (St.value = t);
  var a = kv(St, e);
  (St.value = t), (a = kv(St, e)), (St.value = "x");
  var c = St.scrollHeight - o,
    u = c * n;
  l === "border-box" && (u = u + o + s), (a = Math.max(u, a));
  var d = c * r;
  return l === "border-box" && (d = d + o + s), (a = Math.min(d, a)), [a, c];
}
var Tv = function () {},
  m$ = function (t, n) {
    return t.reduce(function (r, o) {
      return (r[o] = n[o]), r;
    }, {});
  },
  h$ = [
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
  g$ = !!document.documentElement.currentStyle,
  y$ = function (t) {
    var n = window.getComputedStyle(t);
    if (n === null) return null;
    var r = m$(h$, n),
      o = r.boxSizing;
    if (o === "") return null;
    g$ &&
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
  v$ = y$;
function i1(e, t, n) {
  var r = u$(n);
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
var b$ = function (t) {
    i1(window, "resize", t);
  },
  w$ = function (t) {
    i1(document.fonts, "loadingdone", t);
  },
  x$ = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  S$ = function (t, n) {
    var r = t.cacheMeasurements,
      o = t.maxRows,
      s = t.minRows,
      i = t.onChange,
      l = i === void 0 ? Tv : i,
      a = t.onHeightChange,
      c = a === void 0 ? Tv : a,
      u = Sh(t, x$),
      d = u.value !== void 0,
      f = w.useRef(null),
      p = d$(f, n),
      m = w.useRef(0),
      h = w.useRef(),
      x = function () {
        var b = f.current,
          S = r && h.current ? h.current : v$(b);
        if (S) {
          h.current = S;
          var C = p$(S, b.value || b.placeholder || "x", s, o),
            E = C[0],
            R = C[1];
          m.current !== E &&
            ((m.current = E),
            b.style.setProperty("height", E + "px", "important"),
            c(E, { rowHeight: R }));
        }
      },
      v = function (b) {
        d || x(), l(b);
      };
    return (
      w.useLayoutEffect(x),
      b$(x),
      w$(x),
      w.createElement("textarea", dr({}, u, { onChange: v, ref: p }))
    );
  },
  C$ = w.forwardRef(S$);
const E$ = {},
  Ch = X((e, t) => {
    const {
        autosize: n,
        maxRows: r,
        minRows: o,
        __staticSelector: s,
        resize: i,
        ...l
      } = W("Textarea", E$, e),
      a = n && NN() !== "test",
      c = a ? { maxRows: r, minRows: o } : {};
    return g.jsx(Bn, {
      component: a ? C$ : "textarea",
      ref: t,
      ...l,
      __staticSelector: s || "Textarea",
      multiline: !0,
      "data-no-overflow": (n && r === void 0) || void 0,
      __vars: { "--input-resize": i },
      ...c,
    });
  });
Ch.classes = Bn.classes;
Ch.displayName = "@mantine/core/Textarea";
const [D$, R$] = Ln("List component was not found in tree");
var Eh = {
  root: "m_abbac491",
  item: "m_abb6bec2",
  itemWrapper: "m_75cd9f71",
  itemIcon: "m_60f83e5b",
};
const P$ = {},
  Dh = X((e, t) => {
    const n = W("ListItem", P$, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        icon: a,
        children: c,
        mod: u,
        ...d
      } = n,
      f = R$(),
      p = a || f.icon,
      m = { classNames: r, styles: i };
    return g.jsx(K, {
      ...f.getStyles("item", { ...m, className: o, style: s }),
      component: "li",
      mod: [{ "with-icon": !!p, centered: f.center }, u],
      ref: t,
      ...d,
      children: g.jsxs("div", {
        ...f.getStyles("itemWrapper", m),
        children: [
          p && g.jsx("span", { ...f.getStyles("itemIcon", m), children: p }),
          g.jsx("span", { ...f.getStyles("itemLabel", m), children: c }),
        ],
      }),
    });
  });
Dh.classes = Eh;
Dh.displayName = "@mantine/core/ListItem";
const N$ = { type: "unordered" },
  _$ = (e, { size: t, spacing: n }) => ({
    root: { "--list-fz": dt(t), "--list-lh": kx(t), "--list-spacing": Gr(n) },
  }),
  ko = X((e, t) => {
    const n = W("List", N$, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        children: c,
        type: u,
        withPadding: d,
        icon: f,
        spacing: p,
        center: m,
        listStyleType: h,
        mod: x,
        ...v
      } = n,
      y = ue({
        name: "List",
        classes: Eh,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: _$,
      });
    return g.jsx(D$, {
      value: { center: m, icon: f, getStyles: y },
      children: g.jsx(K, {
        ...y("root", { style: { listStyleType: h } }),
        component: u === "unordered" ? "ul" : "ol",
        mod: [{ "with-padding": d }, x],
        ref: t,
        ...v,
        children: c,
      }),
    });
  });
ko.classes = Eh;
ko.displayName = "@mantine/core/List";
ko.Item = Dh;
var l1 = { root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17" };
const $v = {
    transitionProps: { transition: "fade", duration: 0 },
    overlayProps: { backgroundOpacity: 0.75 },
    zIndex: Mo("overlay"),
  },
  O$ = (e, { zIndex: t }) => ({
    root: { "--lo-z-index": t == null ? void 0 : t.toString() },
  }),
  Rh = X((e, t) => {
    const n = W("LoadingOverlay", $v, e),
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
        zIndex: p,
        ...m
      } = n,
      h = rn(),
      x = ue({
        name: "LoadingOverlay",
        classes: l1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: O$,
      }),
      v = { ...$v.overlayProps, ...d };
    return g.jsx(Hs, {
      transition: "fade",
      ...c,
      mounted: !!f,
      children: (y) =>
        g.jsxs(K, {
          ...x("root", { style: y }),
          ref: t,
          ...m,
          children: [
            g.jsx(Cl, { ...x("loader"), unstyled: l, ...u }),
            g.jsx(rl, {
              ...v,
              ...x("overlay"),
              darkHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || h.white,
            }),
            g.jsx(rl, {
              ...v,
              ...x("overlay"),
              lightHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || h.colors.dark[5],
            }),
          ],
        }),
    });
  });
Rh.classes = l1;
Rh.displayName = "@mantine/core/LoadingOverlay";
const [k$, qs] = Ln("Modal component was not found in tree");
var xr = {
  root: "m_9df02822",
  content: "m_54c44539",
  inner: "m_1f958f16",
  header: "m_d0e2b9cd",
};
const T$ = {},
  Zc = X((e, t) => {
    const n = W("ModalBody", T$, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = qs();
    return g.jsx(TS, {
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
Zc.classes = xr;
Zc.displayName = "@mantine/core/ModalBody";
const $$ = {},
  eu = X((e, t) => {
    const n = W("ModalCloseButton", $$, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = qs();
    return g.jsx($S, {
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
eu.classes = xr;
eu.displayName = "@mantine/core/ModalCloseButton";
const A$ = {},
  tu = X((e, t) => {
    const n = W("ModalContent", A$, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        children: a,
        ...c
      } = n,
      u = qs(),
      d = u.scrollAreaComponent || Uk;
    return g.jsx(Bk, {
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
            : `calc(100dvh - (${V(u.yOffset)} * 2))`,
        },
        children: a,
      }),
    });
  });
tu.classes = xr;
tu.displayName = "@mantine/core/ModalContent";
const I$ = {},
  nu = X((e, t) => {
    const n = W("ModalHeader", I$, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = qs();
    return g.jsx(AS, {
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
nu.classes = xr;
nu.displayName = "@mantine/core/ModalHeader";
const j$ = {},
  ru = X((e, t) => {
    const n = W("ModalOverlay", j$, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = qs();
    return g.jsx(IS, {
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
ru.classes = xr;
ru.displayName = "@mantine/core/ModalOverlay";
const L$ = {
    __staticSelector: "Modal",
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Mo("modal"),
    transitionProps: { duration: 200, transition: "pop" },
    yOffset: "5dvh",
  },
  M$ = (e, { radius: t, size: n, yOffset: r, xOffset: o }) => ({
    root: {
      "--modal-radius": t === void 0 ? void 0 : Mn(t),
      "--modal-size": Re(n, "modal-size"),
      "--modal-y-offset": V(r),
      "--modal-x-offset": V(o),
    },
  }),
  ou = X((e, t) => {
    const n = W("ModalRoot", L$, e),
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
        centered: p,
        xOffset: m,
        __staticSelector: h,
        ...x
      } = n,
      v = ue({
        name: h,
        classes: xr,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: M$,
      });
    return g.jsx(k$, {
      value: {
        yOffset: c,
        scrollAreaComponent: u,
        getStyles: v,
        fullScreen: f,
      },
      children: g.jsx(Mk, {
        ref: t,
        ...v("root"),
        "data-full-screen": f || void 0,
        "data-centered": p || void 0,
        unstyled: l,
        ...x,
      }),
    });
  });
ou.classes = xr;
ou.displayName = "@mantine/core/ModalRoot";
const F$ = {},
  su = X((e, t) => {
    const n = W("ModalTitle", F$, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = qs();
    return g.jsx(jS, {
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
su.classes = xr;
su.displayName = "@mantine/core/ModalTitle";
const B$ = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Mo("modal"),
    transitionProps: { duration: 200, transition: "fade-down" },
    withOverlay: !0,
    withCloseButton: !0,
  },
  xn = X((e, t) => {
    const {
        title: n,
        withOverlay: r,
        overlayProps: o,
        withCloseButton: s,
        closeButtonProps: i,
        children: l,
        radius: a,
        ...c
      } = W("Modal", B$, e),
      u = !!n || s;
    return g.jsxs(ou, {
      ref: t,
      radius: a,
      ...c,
      children: [
        r && g.jsx(ru, { ...o }),
        g.jsxs(tu, {
          radius: a,
          children: [
            u &&
              g.jsxs(nu, {
                children: [
                  n && g.jsx(su, { children: n }),
                  s && g.jsx(eu, { ...i }),
                ],
              }),
            g.jsx(Zc, { children: l }),
          ],
        }),
      ],
    });
  });
xn.classes = xr;
xn.displayName = "@mantine/core/Modal";
xn.Root = ou;
xn.Overlay = ru;
xn.Content = tu;
xn.Body = Zc;
xn.Header = nu;
xn.Title = su;
xn.CloseButton = eu;
const [z$, Ph] = Tm(),
  [V$, W$] = Tm();
var iu = {
  root: "m_7cda1cd6",
  "root--default": "m_44da308b",
  "root--contrast": "m_e3a01f8",
  label: "m_1e0e6180",
  remove: "m_ae386778",
  group: "m_1dcfd90b",
};
const U$ = {},
  H$ = (e, { gap: t }, { size: n }) => ({
    group: { "--pg-gap": t !== void 0 ? Re(t) : Re(n, "pg-gap") },
  }),
  Nh = X((e, t) => {
    const n = W("PillGroup", U$, e),
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
      f = Ph(),
      p = (f == null ? void 0 : f.size) || c || void 0,
      m = ue({
        name: "PillGroup",
        classes: iu,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: H$,
        stylesCtx: { size: p },
        rootSelector: "group",
      });
    return g.jsx(V$, {
      value: { size: p, disabled: u },
      children: g.jsx(K, { ref: t, size: p, ...m("group"), ...d }),
    });
  });
Nh.classes = iu;
Nh.displayName = "@mantine/core/PillGroup";
const G$ = { variant: "default" },
  Y$ = (e, { radius: t }, { size: n }) => ({
    root: {
      "--pill-fz": Re(n, "pill-fz"),
      "--pill-height": Re(n, "pill-height"),
      "--pill-radius": t === void 0 ? void 0 : Mn(t),
    },
  }),
  To = X((e, t) => {
    const n = W("Pill", G$, e),
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
        removeButtonProps: p,
        radius: m,
        size: h,
        disabled: x,
        mod: v,
        ...y
      } = n,
      b = W$(),
      S = Ph(),
      C = h || (b == null ? void 0 : b.size) || void 0,
      E =
        (S == null ? void 0 : S.variant) === "filled"
          ? "contrast"
          : c || "default",
      R = ue({
        name: "Pill",
        classes: iu,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: Y$,
        stylesCtx: { size: C },
      });
    return g.jsxs(K, {
      component: "span",
      ref: t,
      variant: E,
      size: C,
      ...R("root", { variant: E }),
      mod: [
        {
          "with-remove": d && !x,
          disabled: x || (b == null ? void 0 : b.disabled),
        },
        v,
      ],
      ...y,
      children: [
        g.jsx("span", { ...R("label"), children: u }),
        d &&
          g.jsx(Gs, {
            variant: "transparent",
            radius: m,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: l,
            ...p,
            ...R("remove", {
              className: p == null ? void 0 : p.className,
              style: p == null ? void 0 : p.style,
            }),
            onMouseDown: (P) => {
              var I;
              P.preventDefault(),
                P.stopPropagation(),
                (I = p == null ? void 0 : p.onMouseDown) == null ||
                  I.call(p, P);
            },
            onClick: (P) => {
              var I;
              P.stopPropagation(),
                f == null || f(),
                (I = p == null ? void 0 : p.onClick) == null || I.call(p, P);
            },
          }),
      ],
    });
  });
To.classes = iu;
To.displayName = "@mantine/core/Pill";
To.Group = Nh;
var a1 = { field: "m_45c4369d" };
const q$ = { type: "visible" },
  _h = X((e, t) => {
    const n = W("PillsInputField", q$, e),
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
        mod: p,
        ...m
      } = n,
      h = Ph(),
      x = Ys(),
      v = ue({
        name: "PillsInputField",
        classes: a1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "field",
      }),
      y = u || (h == null ? void 0 : h.disabled);
    return g.jsx(K, {
      component: "input",
      ref: nn(t, h == null ? void 0 : h.fieldRef),
      "data-type": c,
      disabled: y,
      mod: [{ disabled: y, pointer: f }, p],
      ...v("field"),
      ...m,
      id: (x == null ? void 0 : x.inputId) || d,
      "aria-invalid": h == null ? void 0 : h.hasError,
      "aria-describedby": x == null ? void 0 : x.describedBy,
      type: "text",
      onMouseDown: (b) => !f && b.stopPropagation(),
    });
  });
_h.classes = a1;
_h.displayName = "@mantine/core/PillsInputField";
const K$ = {},
  Ts = X((e, t) => {
    const n = W("PillsInput", K$, e),
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
    return g.jsx(z$, {
      value: { fieldRef: f, size: i, disabled: l, hasError: !!c, variant: u },
      children: g.jsx(Bn, {
        size: i,
        error: c,
        variant: u,
        component: "div",
        ref: t,
        onMouseDown: (p) => {
          var m;
          p.preventDefault(),
            o == null || o(p),
            (m = f.current) == null || m.focus();
        },
        onClick: (p) => {
          var m;
          p.preventDefault(),
            s == null || s(p),
            (m = f.current) == null || m.focus();
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
Ts.displayName = "@mantine/core/PillsInput";
Ts.Field = _h;
function X$({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce(
    (o, s) => (
      Oo(s)
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
const Q$ = {
    maxValues: 1 / 0,
    withCheckIcon: !0,
    checkIconPosition: "left",
    hiddenInputValuesDivider: ",",
  },
  lu = X((e, t) => {
    const n = W("MultiSelect", Q$, e),
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
        onKeyDown: p,
        variant: m,
        data: h,
        dropdownOpened: x,
        defaultDropdownOpened: v,
        onDropdownOpen: y,
        onDropdownClose: b,
        selectFirstOptionOnChange: S,
        onOptionSubmit: C,
        comboboxProps: E,
        filter: R,
        limit: P,
        withScrollArea: I,
        maxDropdownHeight: _,
        searchValue: T,
        defaultSearchValue: M,
        onSearchChange: z,
        readOnly: L,
        disabled: $,
        onFocus: O,
        onBlur: k,
        onPaste: N,
        radius: D,
        rightSection: j,
        rightSectionWidth: A,
        rightSectionPointerEvents: B,
        rightSectionProps: Y,
        leftSection: J,
        leftSectionWidth: ee,
        leftSectionPointerEvents: oe,
        leftSectionProps: ne,
        inputContainer: ye,
        inputWrapperOrder: se,
        withAsterisk: ce,
        labelProps: te,
        descriptionProps: me,
        errorProps: le,
        wrapperProps: ae,
        description: $e,
        label: He,
        error: Ee,
        maxValues: st,
        searchable: Ae,
        nothingFoundMessage: ze,
        withCheckIcon: q,
        checkIconPosition: ie,
        hidePickedOptions: de,
        withErrorStyles: Pe,
        name: Ve,
        form: _t,
        id: Ne,
        clearable: We,
        clearButtonProps: sn,
        hiddenInputProps: Je,
        placeholder: Ot,
        hiddenInputValuesDivider: tr,
        required: it,
        mod: xt,
        renderOption: ti,
        onRemove: kt,
        onClear: nr,
        scrollAreaProps: Vo,
        ...Wo
      } = n,
      Wn = to(Ne),
      Oe = rh(h),
      Ht = Kc(Oe),
      Tt = Xc({
        opened: x,
        defaultOpened: v,
        onDropdownOpen: y,
        onDropdownClose: () => {
          b == null || b(), Tt.resetSelectedOption();
        },
      }),
      {
        styleProps: nd,
        rest: { type: Ke, autoComplete: rr, ...Uo },
      } = Vs(Wo),
      [je, or] = $n({ value: u, defaultValue: d, finalValue: [], onChange: f }),
      [so, io] = $n({ value: T, defaultValue: M, finalValue: "", onChange: z }),
      ni = ue({
        name: "MultiSelect",
        classes: {},
        props: n,
        classNames: r,
        styles: i,
        unstyled: l,
      }),
      { resolvedClassNames: Ol, resolvedStyles: kl } = Bo({
        props: n,
        styles: i,
        classNames: r,
      }),
      rd = (De) => {
        p == null || p(De),
          De.key === " " && !Ae && (De.preventDefault(), Tt.toggleDropdown()),
          De.key === "Backspace" &&
            so.length === 0 &&
            je.length > 0 &&
            (kt == null || kt(je[je.length - 1]),
            or(je.slice(0, je.length - 1)));
      },
      we = je.map((De, ri) => {
        var _g, Og;
        return g.jsx(
          To,
          {
            withRemoveButton: !L && !((_g = Ht[De]) != null && _g.disabled),
            onRemove: () => {
              or(je.filter((QE) => De !== QE)), kt == null || kt(De);
            },
            unstyled: l,
            disabled: $,
            ...ni("pill"),
            children: ((Og = Ht[De]) == null ? void 0 : Og.label) || De,
          },
          `${De}-${ri}`
        );
      });
    w.useEffect(() => {
      S && Tt.selectFirstOption();
    }, [S, je]);
    const $t =
        We &&
        je.length > 0 &&
        !$ &&
        !L &&
        g.jsx(pe.ClearButton, {
          size: c,
          ...sn,
          onClear: () => {
            nr == null || nr(), or([]), io("");
          },
        }),
      Sr = X$({ data: Oe, value: je });
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs(pe, {
          store: Tt,
          classNames: Ol,
          styles: kl,
          unstyled: l,
          size: c,
          readOnly: L,
          __staticSelector: "MultiSelect",
          onOptionSubmit: (De) => {
            C == null || C(De),
              io(""),
              Tt.updateSelectedOptionIndex("selected"),
              je.includes(Ht[De].value)
                ? (or(je.filter((ri) => ri !== Ht[De].value)),
                  kt == null || kt(Ht[De].value))
                : je.length < st && or([...je, Ht[De].value]);
          },
          ...E,
          children: [
            g.jsx(pe.DropdownTarget, {
              children: g.jsx(Ts, {
                ...nd,
                __staticSelector: "MultiSelect",
                classNames: Ol,
                styles: kl,
                unstyled: l,
                size: c,
                className: o,
                style: s,
                variant: m,
                disabled: $,
                radius: D,
                rightSection:
                  j ||
                  $t ||
                  g.jsx(pe.Chevron, { size: c, error: Ee, unstyled: l }),
                rightSectionPointerEvents: B || ($t ? "all" : "none"),
                rightSectionWidth: A,
                rightSectionProps: Y,
                leftSection: J,
                leftSectionWidth: ee,
                leftSectionPointerEvents: oe,
                leftSectionProps: ne,
                inputContainer: ye,
                inputWrapperOrder: se,
                withAsterisk: ce,
                labelProps: te,
                descriptionProps: me,
                errorProps: le,
                wrapperProps: ae,
                description: $e,
                label: He,
                error: Ee,
                multiline: !0,
                withErrorStyles: Pe,
                __stylesApiProps: {
                  ...n,
                  rightSectionPointerEvents: B || ($t ? "all" : "none"),
                  multiline: !0,
                },
                pointer: !Ae,
                onClick: () => (Ae ? Tt.openDropdown() : Tt.toggleDropdown()),
                "data-expanded": Tt.dropdownOpened || void 0,
                id: Wn,
                required: it,
                mod: xt,
                children: g.jsxs(To.Group, {
                  disabled: $,
                  unstyled: l,
                  ...ni("pillsList"),
                  children: [
                    we,
                    g.jsx(pe.EventsTarget, {
                      autoComplete: rr,
                      children: g.jsx(Ts.Field, {
                        ...Uo,
                        ref: t,
                        id: Wn,
                        placeholder: Ot,
                        type: !Ae && !Ot ? "hidden" : "visible",
                        ...ni("inputField"),
                        unstyled: l,
                        onFocus: (De) => {
                          O == null || O(De), Ae && Tt.openDropdown();
                        },
                        onBlur: (De) => {
                          k == null || k(De), Tt.closeDropdown(), io("");
                        },
                        onKeyDown: rd,
                        value: so,
                        onChange: (De) => {
                          io(De.currentTarget.value),
                            Ae && Tt.openDropdown(),
                            S && Tt.selectFirstOption();
                        },
                        disabled: $,
                        readOnly: L || !Ae,
                        pointer: !Ae,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            g.jsx(hh, {
              data: de ? Sr : Oe,
              hidden: L || $,
              filter: R,
              search: so,
              limit: P,
              hiddenWhenEmpty:
                !Ae || !ze || (de && Sr.length === 0 && so.trim().length === 0),
              withScrollArea: I,
              maxDropdownHeight: _,
              filterOptions: Ae,
              value: je,
              checkIconPosition: ie,
              withCheckIcon: q,
              nothingFoundMessage: ze,
              unstyled: l,
              labelId: He ? `${Wn}-label` : void 0,
              "aria-label": He ? void 0 : Wo["aria-label"],
              renderOption: ti,
              scrollAreaProps: Vo,
            }),
          ],
        }),
        g.jsx(pe.HiddenInput, {
          name: Ve,
          valuesDivider: tr,
          value: je,
          form: _t,
          disabled: $,
          ...Je,
        }),
      ],
    });
  });
lu.classes = { ...Bn.classes, ...pe.classes };
lu.displayName = "@mantine/core/MultiSelect";
const J$ = {
    searchable: !1,
    withCheckIcon: !0,
    allowDeselect: !0,
    checkIconPosition: "left",
  },
  Oh = X((e, t) => {
    const n = W("Select", J$, e),
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
        onClick: p,
        onChange: m,
        data: h,
        value: x,
        defaultValue: v,
        selectFirstOptionOnChange: y,
        onOptionSubmit: b,
        comboboxProps: S,
        readOnly: C,
        disabled: E,
        filter: R,
        limit: P,
        withScrollArea: I,
        maxDropdownHeight: _,
        size: T,
        searchable: M,
        rightSection: z,
        checkIconPosition: L,
        withCheckIcon: $,
        nothingFoundMessage: O,
        name: k,
        form: N,
        searchValue: D,
        defaultSearchValue: j,
        onSearchChange: A,
        allowDeselect: B,
        error: Y,
        rightSectionPointerEvents: J,
        id: ee,
        clearable: oe,
        clearButtonProps: ne,
        hiddenInputProps: ye,
        renderOption: se,
        onClear: ce,
        autoComplete: te,
        scrollAreaProps: me,
        ...le
      } = n,
      ae = w.useMemo(() => rh(h), [h]),
      $e = w.useMemo(() => Kc(ae), [ae]),
      He = to(ee),
      [Ee, st, Ae] = $n({
        value: x,
        defaultValue: v,
        finalValue: null,
        onChange: m,
      }),
      ze = typeof Ee == "string" ? $e[Ee] : void 0,
      [q, ie] = $n({
        value: D,
        defaultValue: j,
        finalValue: ze ? ze.label : "",
        onChange: A,
      }),
      de = Xc({
        opened: l,
        defaultOpened: a,
        onDropdownOpen: () => {
          u == null || u(),
            de.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
        },
        onDropdownClose: () => {
          c == null || c(), de.resetSelectedOption();
        },
      }),
      { resolvedClassNames: Pe, resolvedStyles: Ve } = Bo({
        props: n,
        styles: o,
        classNames: r,
      });
    w.useEffect(() => {
      y && de.selectFirstOption();
    }, [y, Ee]),
      w.useEffect(() => {
        x === null && ie(""), typeof x == "string" && ze && ie(ze.label);
      }, [x, ze]);
    const _t =
      oe &&
      !!Ee &&
      !E &&
      !C &&
      g.jsx(pe.ClearButton, {
        size: T,
        ...ne,
        onClear: () => {
          st(null, null), ie(""), ce == null || ce();
        },
      });
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs(pe, {
          store: de,
          __staticSelector: "Select",
          classNames: Pe,
          styles: Ve,
          unstyled: s,
          readOnly: C,
          onOptionSubmit: (Ne) => {
            b == null || b(Ne);
            const We = B && $e[Ne].value === Ee ? null : $e[Ne],
              sn = We ? We.value : null;
            st(sn, We),
              !Ae &&
                ie(
                  (typeof sn == "string" && (We == null ? void 0 : We.label)) ||
                    ""
                ),
              de.closeDropdown();
          },
          size: T,
          ...S,
          children: [
            g.jsx(pe.Target, {
              targetType: M ? "input" : "button",
              autoComplete: te,
              children: g.jsx(Bn, {
                id: He,
                ref: t,
                rightSection:
                  z ||
                  _t ||
                  g.jsx(pe.Chevron, { size: T, error: Y, unstyled: s }),
                rightSectionPointerEvents: J || (_t ? "all" : "none"),
                ...le,
                size: T,
                __staticSelector: "Select",
                disabled: E,
                readOnly: C || !M,
                value: q,
                onChange: (Ne) => {
                  ie(Ne.currentTarget.value),
                    de.openDropdown(),
                    y && de.selectFirstOption();
                },
                onFocus: (Ne) => {
                  M && de.openDropdown(), d == null || d(Ne);
                },
                onBlur: (Ne) => {
                  var We;
                  M && de.closeDropdown(),
                    ie(
                      (Ee != null &&
                        ((We = $e[Ee]) == null ? void 0 : We.label)) ||
                        ""
                    ),
                    f == null || f(Ne);
                },
                onClick: (Ne) => {
                  M ? de.openDropdown() : de.toggleDropdown(),
                    p == null || p(Ne);
                },
                classNames: Pe,
                styles: Ve,
                unstyled: s,
                pointer: !M,
                error: Y,
              }),
            }),
            g.jsx(hh, {
              data: ae,
              hidden: C || E,
              filter: R,
              search: q,
              limit: P,
              hiddenWhenEmpty: !M || !O,
              withScrollArea: I,
              maxDropdownHeight: _,
              filterOptions: M && (ze == null ? void 0 : ze.label) !== q,
              value: Ee,
              checkIconPosition: L,
              withCheckIcon: $,
              nothingFoundMessage: O,
              unstyled: s,
              labelId: le.label ? `${He}-label` : void 0,
              "aria-label": le.label ? void 0 : le["aria-label"],
              renderOption: se,
              scrollAreaProps: me,
            }),
          ],
        }),
        g.jsx(pe.HiddenInput, {
          value: Ee,
          name: k,
          form: N,
          disabled: E,
          ...ye,
        }),
      ],
    });
  });
Oh.classes = { ...Bn.classes, ...pe.classes };
Oh.displayName = "@mantine/core/Select";
function Z$({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce(
    (o, s) => (
      Oo(s)
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
function eA(e, t) {
  return e
    ? t
        .split(new RegExp(`[${e.join("")}]`))
        .map((n) => n.trim())
        .filter((n) => n !== "")
    : [t];
}
function Av({
  splitChars: e,
  allowDuplicates: t,
  maxTags: n,
  value: r,
  currentTags: o,
}) {
  const s = eA(e, r),
    i = t ? [...o, ...s] : [...new Set([...o, ...s])];
  return n ? i.slice(0, n) : i;
}
const tA = {
    maxTags: 1 / 0,
    allowDuplicates: !1,
    splitChars: [","],
    hiddenInputValuesDivider: ",",
  },
  kh = X((e, t) => {
    const n = W("TagsInput", tA, e),
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
        onKeyDown: p,
        maxTags: m,
        allowDuplicates: h,
        onDuplicate: x,
        variant: v,
        data: y,
        dropdownOpened: b,
        defaultDropdownOpened: S,
        onDropdownOpen: C,
        onDropdownClose: E,
        selectFirstOptionOnChange: R,
        onOptionSubmit: P,
        comboboxProps: I,
        filter: _,
        limit: T,
        withScrollArea: M,
        maxDropdownHeight: z,
        searchValue: L,
        defaultSearchValue: $,
        onSearchChange: O,
        readOnly: k,
        disabled: N,
        splitChars: D,
        onFocus: j,
        onBlur: A,
        onPaste: B,
        radius: Y,
        rightSection: J,
        rightSectionWidth: ee,
        rightSectionPointerEvents: oe,
        rightSectionProps: ne,
        leftSection: ye,
        leftSectionWidth: se,
        leftSectionPointerEvents: ce,
        leftSectionProps: te,
        inputContainer: me,
        inputWrapperOrder: le,
        withAsterisk: ae,
        required: $e,
        labelProps: He,
        descriptionProps: Ee,
        errorProps: st,
        wrapperProps: Ae,
        description: ze,
        label: q,
        error: ie,
        withErrorStyles: de,
        name: Pe,
        form: Ve,
        id: _t,
        clearable: Ne,
        clearButtonProps: We,
        hiddenInputProps: sn,
        hiddenInputValuesDivider: Je,
        mod: Ot,
        renderOption: tr,
        onRemove: it,
        onClear: xt,
        scrollAreaProps: ti,
        ...kt
      } = n,
      nr = to(_t),
      Vo = rh(y),
      Wo = Kc(Vo),
      Wn = Xc({
        opened: b,
        defaultOpened: S,
        onDropdownOpen: C,
        onDropdownClose: () => {
          E == null || E(), Wn.resetSelectedOption();
        },
      }),
      {
        styleProps: Oe,
        rest: { type: Ht, autoComplete: Tt, ...nd },
      } = Vs(kt),
      [Ke, rr] = $n({ value: u, defaultValue: d, finalValue: [], onChange: f }),
      [Uo, je] = $n({ value: L, defaultValue: $, finalValue: "", onChange: O }),
      or = ue({
        name: "TagsInput",
        classes: {},
        props: n,
        classNames: r,
        styles: i,
        unstyled: l,
      }),
      { resolvedClassNames: so, resolvedStyles: io } = Bo({
        props: n,
        styles: i,
        classNames: r,
      }),
      ni = (we) => {
        p == null || p(we);
        const $t = Uo.trim(),
          { length: Sr } = $t;
        if (
          (D.includes(we.key) &&
            Sr > 0 &&
            (rr(
              Av({
                splitChars: D,
                allowDuplicates: h,
                maxTags: m,
                value: Uo,
                currentTags: Ke,
              })
            ),
            je(""),
            we.preventDefault()),
          we.key === "Enter" && Sr > 0 && !we.nativeEvent.isComposing)
        ) {
          we.preventDefault();
          const De = Ke.some((ri) => ri.toLowerCase() === $t.toLowerCase());
          De && (x == null || x($t)),
            (!De || (De && h)) &&
              Ke.length < m &&
              (P == null || P($t), je(""), $t.length > 0 && rr([...Ke, $t]));
        }
        we.key === "Backspace" &&
          Sr === 0 &&
          Ke.length > 0 &&
          !we.nativeEvent.isComposing &&
          (it == null || it(Ke[Ke.length - 1]), rr(Ke.slice(0, Ke.length - 1)));
      },
      Ol = (we) => {
        if ((B == null || B(we), we.preventDefault(), we.clipboardData)) {
          const $t = we.clipboardData.getData("text/plain");
          rr(
            Av({
              splitChars: D,
              allowDuplicates: h,
              maxTags: m,
              value: $t,
              currentTags: Ke,
            })
          ),
            je("");
        }
      },
      kl = Ke.map((we, $t) =>
        g.jsx(
          To,
          {
            withRemoveButton: !k,
            onRemove: () => {
              rr(Ke.filter((Sr) => we !== Sr)), it == null || it(we);
            },
            unstyled: l,
            disabled: N,
            ...or("pill"),
            children: we,
          },
          `${we}-${$t}`
        )
      ),
      rd =
        Ne &&
        Ke.length > 0 &&
        !N &&
        !k &&
        g.jsx(pe.ClearButton, {
          size: c,
          ...We,
          onClear: () => {
            rr([]), je(""), xt == null || xt();
          },
        });
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs(pe, {
          store: Wn,
          classNames: so,
          styles: io,
          unstyled: l,
          size: c,
          readOnly: k,
          __staticSelector: "TagsInput",
          onOptionSubmit: (we) => {
            P == null || P(we),
              je(""),
              Ke.length < m && rr([...Ke, Wo[we].label]);
          },
          ...I,
          children: [
            g.jsx(pe.DropdownTarget, {
              children: g.jsx(Ts, {
                ...Oe,
                __staticSelector: "TagsInput",
                classNames: so,
                styles: io,
                unstyled: l,
                size: c,
                className: o,
                style: s,
                variant: v,
                disabled: N,
                radius: Y,
                rightSection: J || rd,
                rightSectionWidth: ee,
                rightSectionPointerEvents: oe,
                rightSectionProps: ne,
                leftSection: ye,
                leftSectionWidth: se,
                leftSectionPointerEvents: ce,
                leftSectionProps: te,
                inputContainer: me,
                inputWrapperOrder: le,
                withAsterisk: ae,
                required: $e,
                labelProps: He,
                descriptionProps: Ee,
                errorProps: st,
                wrapperProps: Ae,
                description: ze,
                label: q,
                error: ie,
                multiline: !0,
                withErrorStyles: de,
                __stylesApiProps: { ...n, multiline: !0 },
                id: nr,
                mod: Ot,
                children: g.jsxs(To.Group, {
                  disabled: N,
                  unstyled: l,
                  ...or("pillsList"),
                  children: [
                    kl,
                    g.jsx(pe.EventsTarget, {
                      autoComplete: Tt,
                      children: g.jsx(Ts.Field, {
                        ...nd,
                        ref: t,
                        ...or("inputField"),
                        unstyled: l,
                        onKeyDown: ni,
                        onFocus: (we) => {
                          j == null || j(we), Wn.openDropdown();
                        },
                        onBlur: (we) => {
                          A == null || A(we), Wn.closeDropdown();
                        },
                        onPaste: Ol,
                        value: Uo,
                        onChange: (we) => je(we.currentTarget.value),
                        required: $e && Ke.length === 0,
                        disabled: N,
                        readOnly: k,
                        id: nr,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            g.jsx(hh, {
              data: Z$({ data: Vo, value: Ke }),
              hidden: k || N,
              filter: _,
              search: Uo,
              limit: T,
              hiddenWhenEmpty: !0,
              withScrollArea: M,
              maxDropdownHeight: z,
              unstyled: l,
              labelId: q ? `${nr}-label` : void 0,
              "aria-label": q ? void 0 : kt["aria-label"],
              renderOption: tr,
              scrollAreaProps: ti,
            }),
          ],
        }),
        g.jsx(pe.HiddenInput, {
          name: Pe,
          form: Ve,
          value: Ke,
          valuesDivider: Je,
          disabled: N,
          ...sn,
        }),
      ],
    });
  });
kh.classes = { ...Bn.classes, ...pe.classes };
kh.displayName = "@mantine/core/TagsInput";
const nA = {},
  Tr = X((e, t) => {
    const n = W("TextInput", nA, e);
    return g.jsx(Bn, {
      component: "input",
      ref: t,
      ...n,
      __staticSelector: "TextInput",
    });
  });
Tr.classes = Bn.classes;
Tr.displayName = "@mantine/core/TextInput";
var c1 = { root: "m_7341320d" };
const rA = {},
  oA = (
    e,
    { size: t, radius: n, variant: r, gradient: o, color: s, autoContrast: i }
  ) => {
    const l = e.variantColorResolver({
      color: s || e.primaryColor,
      theme: e,
      gradient: o,
      variant: r || "filled",
      autoContrast: i,
    });
    return {
      root: {
        "--ti-size": Re(t, "ti-size"),
        "--ti-radius": n === void 0 ? void 0 : Mn(n),
        "--ti-bg": s || r ? l.background : void 0,
        "--ti-color": s || r ? l.color : void 0,
        "--ti-bd": s || r ? l.border : void 0,
      },
    };
  },
  au = X((e, t) => {
    const n = W("ThemeIcon", rA, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        autoContrast: c,
        ...u
      } = n,
      d = ue({
        name: "ThemeIcon",
        classes: c1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: oA,
      });
    return g.jsx(K, { ref: t, ...d("root"), ...u });
  });
au.classes = c1;
au.displayName = "@mantine/core/ThemeIcon";
function sA(e) {
  return function ({ isLoading: n, ...r }) {
    return n ? g.jsx("div", { children: "Loading..." }) : g.jsx(e, { ...r });
  };
}
function iA(e) {
  return function ({ error: n, ...r }) {
    return n
      ? g.jsxs("div", { children: ["Error: ", n.message] })
      : g.jsx(e, { ...r });
  };
}
var u1 = { exports: {} },
  lA = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  aA = lA,
  cA = aA;
function d1() {}
function f1() {}
f1.resetWarningCache = d1;
var uA = function () {
  function e(r, o, s, i, l, a) {
    if (a !== cA) {
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
    checkPropTypes: f1,
    resetWarningCache: d1,
  };
  return (n.PropTypes = n), n;
};
u1.exports = uA();
var dA = u1.exports;
const U = yr(dA);
function fA(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
    );
}
const pA = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function lt(e, t) {
  pA(() => {
    if (e)
      return (
        window.addEventListener(e, t), () => window.removeEventListener(e, t)
      );
  }, [e]);
}
function mA(e, t) {
  e && fA(e),
    lt(`mantine-form:${e}:set-field-value`, (n) =>
      t.setFieldValue(n.detail.path, n.detail.value)
    ),
    lt(`mantine-form:${e}:set-values`, (n) => t.setValues(n.detail)),
    lt(`mantine-form:${e}:set-initial-values`, (n) =>
      t.setInitialValues(n.detail)
    ),
    lt(`mantine-form:${e}:set-errors`, (n) => t.setErrors(n.detail)),
    lt(`mantine-form:${e}:set-field-error`, (n) =>
      t.setFieldError(n.detail.path, n.detail.error)
    ),
    lt(`mantine-form:${e}:clear-field-error`, (n) =>
      t.clearFieldError(n.detail)
    ),
    lt(`mantine-form:${e}:clear-errors`, t.clearErrors),
    lt(`mantine-form:${e}:reset`, t.reset),
    lt(`mantine-form:${e}:validate`, t.validate),
    lt(`mantine-form:${e}:validate-field`, (n) => t.validateField(n.detail)),
    lt(`mantine-form:${e}:reorder-list-item`, (n) =>
      t.reorderListItem(n.detail.path, n.detail.payload)
    ),
    lt(`mantine-form:${e}:remove-list-item`, (n) =>
      t.removeListItem(n.detail.path, n.detail.index)
    ),
    lt(`mantine-form:${e}:insert-list-item`, (n) =>
      t.insertListItem(n.detail.path, n.detail.item, n.detail.index)
    ),
    lt(`mantine-form:${e}:set-dirty`, (n) => t.setDirty(n.detail)),
    lt(`mantine-form:${e}:set-touched`, (n) => t.setTouched(n.detail)),
    lt(`mantine-form:${e}:reset-dirty`, (n) => t.resetDirty(n.detail)),
    lt(`mantine-form:${e}:reset-touched`, t.resetTouched);
}
function hA(e) {
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
function fp(e) {
  return e === null || typeof e != "object"
    ? {}
    : Object.keys(e).reduce((t, n) => {
        const r = e[n];
        return r != null && r !== !1 && (t[n] = r), t;
      }, {});
}
function gA(e) {
  const [t, n] = w.useState(fp(e)),
    r = w.useCallback((l) => {
      n((a) => fp(typeof l == "function" ? l(a) : l));
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
function p1(e, t) {
  if (t === null || typeof t != "object") return {};
  const n = { ...t };
  return (
    Object.keys(t).forEach((r) => {
      r.includes(`${String(e)}.`) && delete n[r];
    }),
    n
  );
}
function Iv(e, t) {
  const n = e.substring(t.length + 1).split(".")[0];
  return parseInt(n, 10);
}
function jv(e, t, n, r) {
  if (t === void 0) return n;
  const o = `${String(e)}`;
  let s = n;
  r === -1 && (s = p1(`${o}.${t}`, s));
  const i = { ...s },
    l = new Set();
  return (
    Object.entries(s)
      .filter(([a]) => {
        if (!a.startsWith(`${o}.`)) return !1;
        const c = Iv(a, o);
        return Number.isNaN(c) ? !1 : c >= t;
      })
      .forEach(([a, c]) => {
        const u = Iv(a, o),
          d = a.replace(`${o}.${u}`, `${o}.${u + r}`);
        (i[d] = c), l.add(d), l.has(a) || delete i[a];
      }),
    i
  );
}
function yA(e, { from: t, to: n }, r) {
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
function Lv(e, t, n) {
  typeof n.value == "object" && (n.value = cs(n.value)),
    !n.enumerable ||
    n.get ||
    n.set ||
    !n.configurable ||
    !n.writable ||
    t === "__proto__"
      ? Object.defineProperty(e, t, n)
      : (e[t] = n.value);
}
function cs(e) {
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
          o.add(cs(i));
        }))
      : s === "[object Map]"
      ? ((o = new Map()),
        e.forEach(function (i, l) {
          o.set(cs(l), cs(i));
        }))
      : s === "[object Date]"
      ? (o = new Date(+e))
      : s === "[object RegExp]"
      ? (o = new RegExp(e.source, e.flags))
      : s === "[object DataView]"
      ? (o = new e.constructor(cs(e.buffer)))
      : s === "[object ArrayBuffer]"
      ? (o = e.slice(0))
      : s.slice(-6) === "Array]" && (o = new e.constructor(e)),
    o)
  ) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      Lv(o, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      (Object.hasOwnProperty.call(o, (n = r[t])) && o[n] === e[n]) ||
        Lv(o, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return o || e;
}
function m1(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Mt(e, t) {
  const n = m1(e);
  if (n.length === 0 || typeof t != "object" || t === null) return;
  let r = t[n[0]];
  for (let o = 1; o < n.length && r !== void 0; o += 1) r = r[n[o]];
  return r;
}
function cu(e, t, n) {
  const r = m1(e);
  if (r.length === 0) return n;
  const o = cs(n);
  if (r.length === 1) return (o[r[0]] = t), o;
  let s = o[r[0]];
  for (let i = 1; i < r.length - 1; i += 1) {
    if (s === void 0) return o;
    s = s[r[i]];
  }
  return (s[r[r.length - 1]] = t), o;
}
function vA(e, { from: t, to: n }, r) {
  const o = Mt(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o],
    i = o[t];
  return s.splice(t, 1), s.splice(n, 0, i), cu(e, s, r);
}
function bA(e, t, n, r) {
  const o = Mt(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o];
  return s.splice(typeof n == "number" ? n : s.length, 0, t), cu(e, s, r);
}
function wA(e, t, n) {
  const r = Mt(e, n);
  return Array.isArray(r)
    ? cu(
        e,
        r.filter((o, s) => s !== t),
        n
      )
    : n;
}
function xA({ $values: e, $errors: t, $status: n }) {
  const r = w.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => yA(i, l, a)),
        e.setValues({ values: vA(i, l, e.refValues.current), updateState: !0 });
    }, []),
    o = w.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => jv(i, l, a, -1)),
        e.setValues({ values: wA(i, l, e.refValues.current), updateState: !0 });
    }, []),
    s = w.useCallback((i, l, a) => {
      n.clearFieldDirty(i),
        t.setErrors((c) => jv(i, a, c, 1)),
        e.setValues({
          values: bA(i, l, a, e.refValues.current),
          updateState: !0,
        });
    }, []);
  return { reorderListItem: r, removeListItem: o, insertListItem: s };
}
var SA = function e(t, n) {
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
const Wd = yr(SA);
function ta(e, t) {
  const n = Object.keys(e);
  if (typeof t == "string") {
    const r = n.filter((o) => o.startsWith(`${t}.`));
    return e[t] || r.some((o) => e[o]) || !1;
  }
  return n.some((r) => e[r]);
}
function CA({ initialDirty: e, initialTouched: t, mode: n, $values: r }) {
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
    p = (C) => {
      const E = C ? { ...C, ...r.refValues.current } : r.refValues.current;
      r.setValuesSnapshot(E), d({});
    },
    m = w.useCallback((C, E) => {
      u((R) => (ta(R, C) === E ? R : { ...R, [C]: E }));
    }, []),
    h = w.useCallback((C, E) => {
      d((R) => (ta(R, C) === E ? R : { ...R, [C]: E }));
    }, []),
    x = w.useCallback((C) => ta(a.current, C), []),
    v = w.useCallback(
      (C) =>
        d((E) => {
          if (typeof C != "string") return E;
          const R = p1(C, E);
          return delete R[C], Wd(R, E) ? E : R;
        }),
      []
    ),
    y = w.useCallback((C) => {
      if (C) {
        const R = Mt(C, c.current);
        if (typeof R == "boolean") return R;
        const P = Mt(C, r.refValues.current),
          I = Mt(C, r.valuesSnapshot.current);
        return !Wd(P, I);
      }
      return Object.keys(c.current).length > 0
        ? ta(c.current)
        : !Wd(r.refValues.current, r.valuesSnapshot.current);
    }, []),
    b = w.useCallback(() => c.current, []),
    S = w.useCallback(() => a.current, []);
  return {
    touchedState: o,
    dirtyState: i,
    touchedRef: a,
    dirtyRef: c,
    setTouched: u,
    setDirty: d,
    resetDirty: p,
    resetTouched: f,
    isTouched: x,
    setFieldTouched: m,
    setFieldDirty: h,
    setTouchedState: s,
    setDirtyState: l,
    clearFieldDirty: v,
    isDirty: y,
    getDirty: b,
    getTouched: S,
  };
}
function EA({ initialValues: e, onValuesChange: t, mode: n }) {
  const r = w.useRef(!1),
    [o, s] = w.useState(e || {}),
    i = w.useRef(o),
    l = w.useRef(o),
    a = w.useCallback(
      ({
        values: m,
        subscribers: h,
        updateState: x = !0,
        mergeWithPreviousValues: v = !0,
      }) => {
        const y = i.current,
          b = m instanceof Function ? m(i.current) : m,
          S = v ? { ...y, ...b } : b;
        (i.current = S),
          x && s(S),
          t == null || t(S, y),
          h == null ||
            h
              .filter(Boolean)
              .forEach((C) => C({ updatedValues: S, previousValues: y }));
      },
      [t]
    ),
    c = w.useCallback((m) => {
      var v;
      const h = Mt(m.path, i.current),
        x = m.value instanceof Function ? m.value(h) : m.value;
      if (h !== x) {
        const y = i.current,
          b = cu(m.path, x, i.current);
        a({ values: b, updateState: m.updateState }),
          (v = m.subscribers) == null ||
            v
              .filter(Boolean)
              .forEach((S) =>
                S({ path: m.path, updatedValues: b, previousValues: y })
              );
      }
    }, []),
    u = w.useCallback((m) => {
      l.current = m;
    }, []),
    d = w.useCallback((m, h) => {
      r.current ||
        ((r.current = !0),
        a({ values: m, updateState: n === "controlled" }),
        u(m),
        h());
    }, []),
    f = w.useCallback(() => {
      a({ values: l.current, updateState: !0, mergeWithPreviousValues: !1 });
    }, []),
    p = w.useCallback(() => i.current, []);
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
    getValues: p,
  };
}
function DA({ $status: e }) {
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
                  previousValue: Mt(o, i.previousValues),
                  value: Mt(o, i.updatedValues),
                  touched: e.isTouched(o),
                  dirty: e.isDirty(o),
                })
            )
          : [],
      []
    );
  return { subscribers: t, watch: n, getFieldSubscribers: r };
}
function Mv(e) {
  const t = fp(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function pp(e, t, n = "", r = {}) {
  return typeof e != "object" || e === null
    ? r
    : Object.keys(e).reduce((o, s) => {
        const i = e[s],
          l = `${n === "" ? "" : `${n}.`}${s}`,
          a = Mt(l, t);
        let c = !1;
        return (
          typeof i == "function" && (o[l] = i(a, t, l)),
          typeof i == "object" &&
            Array.isArray(a) &&
            ((c = !0), a.forEach((u, d) => pp(i, t, `${l}.${d}`, o))),
          typeof i == "object" &&
            typeof a == "object" &&
            a !== null &&
            (c || pp(i, t, l, o)),
          o
        );
      }, r);
}
function mp(e, t) {
  return Mv(typeof e == "function" ? e(t) : pp(e, t));
}
function na(e, t, n) {
  if (typeof e != "string") return { hasError: !1, error: null };
  const r = mp(t, n),
    o = Object.keys(r.errors).find((s) =>
      e.split(".").every((i, l) => i === s.split(".")[l])
    );
  return { hasError: !!o, error: o ? r.errors[o] : null };
}
const RA = "__MANTINE_FORM_INDEX__";
function Fv(e, t) {
  return t
    ? typeof t == "boolean"
      ? t
      : Array.isArray(t)
      ? t.includes(e.replace(/[.][0-9]/g, `.${RA}`))
      : !1
    : !1;
}
function PA({
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
  transformValues: u = (p) => p,
  enhanceGetInputProps: d,
  validate: f,
} = {}) {
  const p = gA(r),
    m = EA({ initialValues: n, onValuesChange: c, mode: t }),
    h = CA({ initialDirty: o, initialTouched: s, $values: m, mode: t }),
    x = xA({ $values: m, $errors: p, $status: h }),
    v = DA({ $status: h }),
    [y, b] = w.useState(0),
    [S, C] = w.useState({}),
    E = w.useCallback(() => {
      m.resetValues(),
        p.clearErrors(),
        h.resetDirty(),
        h.resetTouched(),
        t === "uncontrolled" && b((D) => D + 1);
    }, []),
    R = w.useCallback((D) => {
      m.initialize(D, () => t === "uncontrolled" && b((j) => j + 1));
    }, []),
    P = w.useCallback(
      (D, j, A) => {
        const B = Fv(D, l);
        h.clearFieldDirty(D),
          h.setFieldTouched(D, !0),
          !B && i && p.clearFieldError(D),
          m.setFieldValue({
            path: D,
            value: j,
            updateState: t === "controlled",
            subscribers: [
              ...v.getFieldSubscribers(D),
              B
                ? (Y) => {
                    const J = na(D, f, Y.updatedValues);
                    J.hasError
                      ? p.setFieldError(D, J.error)
                      : p.clearFieldError(D);
                  }
                : null,
              (A == null ? void 0 : A.forceUpdate) !== !1 && t !== "controlled"
                ? () => C((Y) => ({ ...Y, [D]: (Y[D] || 0) + 1 }))
                : null,
            ],
          });
      },
      [c, f]
    ),
    I = w.useCallback(
      (D) => {
        const j = m.refValues.current;
        m.setValues({ values: D, updateState: t === "controlled" }),
          i && p.clearErrors(),
          t === "uncontrolled" && b((A) => A + 1),
          Object.keys(v.subscribers.current).forEach((A) => {
            const B = Mt(A, m.refValues.current),
              Y = Mt(A, j);
            B !== Y &&
              v
                .getFieldSubscribers(A)
                .forEach((J) =>
                  J({ previousValues: j, updatedValues: m.refValues.current })
                );
          });
      },
      [c, i]
    ),
    _ = w.useCallback(() => {
      const D = mp(f, m.refValues.current);
      return p.setErrors(D.errors), D;
    }, [f]),
    T = w.useCallback(
      (D) => {
        const j = na(D, f, m.refValues.current);
        return (
          j.hasError ? p.setFieldError(D, j.error) : p.clearFieldError(D), j
        );
      },
      [f]
    ),
    M = (
      D,
      { type: j = "input", withError: A = !0, withFocus: B = !0, ...Y } = {}
    ) => {
      const ee = { onChange: hA((oe) => P(D, oe, { forceUpdate: !1 })) };
      return (
        A && (ee.error = p.errorsState[D]),
        j === "checkbox"
          ? (ee[t === "controlled" ? "checked" : "defaultChecked"] = Mt(
              D,
              m.refValues.current
            ))
          : (ee[t === "controlled" ? "value" : "defaultValue"] = Mt(
              D,
              m.refValues.current
            )),
        B &&
          ((ee.onFocus = () => h.setFieldTouched(D, !0)),
          (ee.onBlur = () => {
            if (Fv(D, a)) {
              const oe = na(D, f, m.refValues.current);
              oe.hasError ? p.setFieldError(D, oe.error) : p.clearFieldError(D);
            }
          })),
        Object.assign(
          ee,
          d == null
            ? void 0
            : d({
                inputProps: ee,
                field: D,
                options: { type: j, withError: A, withFocus: B, ...Y },
                form: N,
              })
        )
      );
    },
    z = (D, j) => (A) => {
      A == null || A.preventDefault();
      const B = _();
      B.hasErrors
        ? j == null || j(B.errors, m.refValues.current, A)
        : D == null || D(u(m.refValues.current), A);
    },
    L = (D) => u(D || m.refValues.current),
    $ = w.useCallback((D) => {
      D.preventDefault(), E();
    }, []),
    O = w.useCallback(
      (D) =>
        D
          ? !na(D, f, m.refValues.current).hasError
          : !mp(f, m.refValues.current).hasErrors,
      [f]
    ),
    k = (D) => `${y}-${D}-${S[D] || 0}`,
    N = {
      watch: v.watch,
      initialized: m.initialized.current,
      values: m.stateValues,
      getValues: m.getValues,
      setInitialValues: m.setValuesSnapshot,
      initialize: R,
      setValues: I,
      setFieldValue: P,
      errors: p.errorsState,
      setErrors: p.setErrors,
      setFieldError: p.setFieldError,
      clearFieldError: p.clearFieldError,
      clearErrors: p.clearErrors,
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
      validate: _,
      validateField: T,
      getInputProps: M,
      onSubmit: z,
      onReset: $,
      isValid: O,
      getTransformedValues: L,
      key: k,
    };
  return mA(e, N), N;
}
const Th = (e) => {
  const {
    title: t,
    description: n,
    form: r,
    options: o,
    default_value: s,
    field_id: i,
    mandatory: l,
  } = e;
  var a = s ? o.map((p) => p.option).filter((p) => p == s) : null;
  const [c, u] = w.useState(a ? a[0] : o[0].option);
  w.useEffect(() => {
    r.setFieldValue(i, c);
  }, []);
  const [d, { toggle: f }] = Po(!1);
  return g.jsxs("div", {
    className: "collapsible-selector-container",
    children: [
      t &&
        g.jsxs("h2", {
          children: [
            t,
            " ",
            l &&
              g.jsx("span", {
                class:
                  "mantine-InputWrapper-required mantine-TextInput-required",
                children: "*",
              }),
          ],
        }),
      n && g.jsx("label", { children: n }),
      g.jsx("div", {
        className: "container",
        children: g.jsxs("div", {
          className: "multi-select-row row btn-style",
          onClick: f,
          children: [
            g.jsxs("p", {
              className: "col my-2 row-title",
              children: [g.jsx("i", { class: "fa fa-balance-scale mr-2" }), c],
            }),
            g.jsx("p", {
              className: "clickable-text col-auto text-right my-2",
              children: "change",
            }),
          ],
        }),
      }),
      g.jsx(Bc, {
        className: "container",
        in: d,
        transitionDuration: 100,
        transitionTimingFunction: "linear",
        children: o.map((p) => {
          const [m, { open: h, close: x }] = Po(!1),
            v = function () {
              u(p.option);
            };
          return g.jsxs("div", {
            className: "multi-select-row row clickable-row",
            children: [
              g.jsx("p", {
                className: "col my-2 row-title",
                onClick: v,
                children: p.option,
              }),
              (p.description || p.help_link) &&
                g.jsxs(g.Fragment, {
                  children: [
                    g.jsxs(xn, {
                      opened: m,
                      onClose: x,
                      title: p.option,
                      centered: !0,
                      size: "auto",
                      children: [
                        g.jsx("div", {
                          className: "modal-dialog-body",
                          children:
                            p.description &&
                            g.jsx(Kr, {
                              className: "use-line-breaks",
                              children: p.description,
                            }),
                        }),
                        g.jsxs("div", {
                          className: "modal-dialog-footer container p-0",
                          children: [
                            p.help_link &&
                              g.jsx("div", {
                                className: "row",
                                children: g.jsx("div", {
                                  className: "col-12",
                                  children: g.jsx("a", {
                                    href: p.help_link,
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
                                    v(), x();
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
                      onClick: h,
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
Th.defaultProps = {};
Th.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
};
const NA = [
    {
      name: "Author/Creator",
      description:
        "Main researcher involved in producing the dataset or data package of a project, or the author of the (data) publication (may be a corporate/institutional or personal name).",
    },
    {
      name: "Content Contact",
      description:
        "Person with knowledge of how to access, troubleshoot, or otherwise field issues related to the content of the dataset or data package in a project.",
    },
    {
      name: "Data Curator",
      description:
        "Person tasked with curating, reviewing, enhancing, cleaning, or standardizing the content of a dataset or data package managed in a project or submitted for storage, use, and maintenance within a data repository.",
    },
    {
      name: "Data Editor/Data Manager",
      description:
        "Person (or organisation with a staff of data managers) responsible for maintaining the finished dataset or data package.",
    },
    {
      name: "Data Owner",
      description:
        "Person or institution owning or managing property rights, including intellectual property rights over the dataset or data package of a project.",
    },
    {
      name: "Data Owner Contact",
      description:
        "Representative for person or institution owning or managing property rights, including intellectual property rights over the dataset or data package of a project.",
    },
    {
      name: "Principal Investigator",
      description:
        "Person leading an investigation, research study or research group.",
    },
    {
      name: "Researcher",
      description:
        "Person involved in analyzing data or the results of an experiment or formal study. May indicate an intern or assistant to one of the authors who helped with research but who was not so “key” as to be listed as an author.",
    },
    {
      name: "Data Source Organisation",
      description:
        "Organisation with license rights over the datasets or data packages of a project (might be identical with the data.",
    },
  ],
  _A = () =>
    g.jsx(g.Fragment, {
      children: NA.map((e) =>
        g.jsxs(
          "div",
          {
            children: [
              g.jsxs(Ye, {
                my: "10",
                children: [
                  g.jsx(Ye.Col, {
                    span: 3,
                    children: g.jsx(Kr, {
                      fw: 700,
                      style: {
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      },
                      children: e.name,
                    }),
                  }),
                  g.jsx(Ye.Col, {
                    span: 9,
                    children: g.jsx(Kr, { children: e.description }),
                  }),
                ],
              }),
              g.jsx(bh, {}),
            ],
          },
          e.name
        )
      ),
    });
function sl(e) {
  "@babel/helpers - typeof";
  return (
    (sl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sl(e)
  );
}
function OA(e, t) {
  if (sl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (sl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kA(e) {
  var t = OA(e, "string");
  return sl(t) == "symbol" ? t : t + "";
}
function TA(e, t, n) {
  return (
    (t = kA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Bv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function zv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bv(Object(n), !0).forEach(function (r) {
          TA(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Bv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function At(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Vv = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Ud = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Wv = {
    INIT: "@@redux/INIT" + Ud(),
    REPLACE: "@@redux/REPLACE" + Ud(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Ud();
    },
  };
function $A(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function h1(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(At(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(At(1));
    return n(h1)(e, t);
  }
  if (typeof e != "function") throw new Error(At(2));
  var o = e,
    s = t,
    i = [],
    l = i,
    a = !1;
  function c() {
    l === i && (l = i.slice());
  }
  function u() {
    if (a) throw new Error(At(3));
    return s;
  }
  function d(h) {
    if (typeof h != "function") throw new Error(At(4));
    if (a) throw new Error(At(5));
    var x = !0;
    return (
      c(),
      l.push(h),
      function () {
        if (x) {
          if (a) throw new Error(At(6));
          (x = !1), c();
          var y = l.indexOf(h);
          l.splice(y, 1), (i = null);
        }
      }
    );
  }
  function f(h) {
    if (!$A(h)) throw new Error(At(7));
    if (typeof h.type > "u") throw new Error(At(8));
    if (a) throw new Error(At(9));
    try {
      (a = !0), (s = o(s, h));
    } finally {
      a = !1;
    }
    for (var x = (i = l), v = 0; v < x.length; v++) {
      var y = x[v];
      y();
    }
    return h;
  }
  function p(h) {
    if (typeof h != "function") throw new Error(At(10));
    (o = h), f({ type: Wv.REPLACE });
  }
  function m() {
    var h,
      x = d;
    return (
      (h = {
        subscribe: function (y) {
          if (typeof y != "object" || y === null) throw new Error(At(11));
          function b() {
            y.next && y.next(u());
          }
          b();
          var S = x(b);
          return { unsubscribe: S };
        },
      }),
      (h[Vv] = function () {
        return this;
      }),
      h
    );
  }
  return (
    f({ type: Wv.INIT }),
    (r = { dispatch: f, subscribe: d, getState: u, replaceReducer: p }),
    (r[Vv] = m),
    r
  );
}
function Uv(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function Hv(e, t) {
  if (typeof e == "function") return Uv(e, t);
  if (typeof e != "object" || e === null) throw new Error(At(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = Uv(o, t));
  }
  return n;
}
function g1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function AA() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        s = function () {
          throw new Error(At(15));
        },
        i = {
          getState: o.getState,
          dispatch: function () {
            return s.apply(void 0, arguments);
          },
        },
        l = t.map(function (a) {
          return a(i);
        });
      return (
        (s = g1.apply(void 0, l)(o.dispatch)),
        zv(zv({}, o), {}, { dispatch: s })
      );
    };
  };
}
var y1 = { exports: {} },
  v1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $s = w;
function IA(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jA = typeof Object.is == "function" ? Object.is : IA,
  LA = $s.useState,
  MA = $s.useEffect,
  FA = $s.useLayoutEffect,
  BA = $s.useDebugValue;
function zA(e, t) {
  var n = t(),
    r = LA({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    s = r[1];
  return (
    FA(
      function () {
        (o.value = n), (o.getSnapshot = t), Hd(o) && s({ inst: o });
      },
      [e, n, t]
    ),
    MA(
      function () {
        return (
          Hd(o) && s({ inst: o }),
          e(function () {
            Hd(o) && s({ inst: o });
          })
        );
      },
      [e]
    ),
    BA(n),
    n
  );
}
function Hd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jA(e, n);
  } catch {
    return !0;
  }
}
function VA(e, t) {
  return t();
}
var WA =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? VA
    : zA;
v1.useSyncExternalStore =
  $s.useSyncExternalStore !== void 0 ? $s.useSyncExternalStore : WA;
y1.exports = v1;
var b1 = y1.exports,
  UA = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uu = w,
  HA = b1;
function GA(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var YA = typeof Object.is == "function" ? Object.is : GA,
  qA = HA.useSyncExternalStore,
  KA = uu.useRef,
  XA = uu.useEffect,
  QA = uu.useMemo,
  JA = uu.useDebugValue;
UA.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var s = KA(null);
  if (s.current === null) {
    var i = { hasValue: !1, value: null };
    s.current = i;
  } else i = s.current;
  s = QA(
    function () {
      function a(p) {
        if (!c) {
          if (((c = !0), (u = p), (p = r(p)), o !== void 0 && i.hasValue)) {
            var m = i.value;
            if (o(m, p)) return (d = m);
          }
          return (d = p);
        }
        if (((m = d), YA(u, p))) return m;
        var h = r(p);
        return o !== void 0 && o(m, h) ? m : ((u = p), (d = h));
      }
      var c = !1,
        u,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, o]
  );
  var l = qA(e, s[0], s[1]);
  return (
    XA(
      function () {
        (i.hasValue = !0), (i.value = l);
      },
      [l]
    ),
    JA(l),
    l
  );
};
function ZA(e) {
  e();
}
let w1 = ZA;
const eI = (e) => (w1 = e),
  tI = () => w1,
  Gv = Symbol.for("react-redux-context"),
  Yv = typeof globalThis < "u" ? globalThis : {};
function nI() {
  var e;
  if (!w.createContext) return {};
  const t = (e = Yv[Gv]) != null ? e : (Yv[Gv] = new Map());
  let n = t.get(w.createContext);
  return n || ((n = w.createContext(null)), t.set(w.createContext, n)), n;
}
const x1 = nI(),
  rI = () => {
    throw new Error("uSES not initialized!");
  };
var S1 = { exports: {} },
  Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ot = typeof Symbol == "function" && Symbol.for,
  $h = ot ? Symbol.for("react.element") : 60103,
  Ah = ot ? Symbol.for("react.portal") : 60106,
  du = ot ? Symbol.for("react.fragment") : 60107,
  fu = ot ? Symbol.for("react.strict_mode") : 60108,
  pu = ot ? Symbol.for("react.profiler") : 60114,
  mu = ot ? Symbol.for("react.provider") : 60109,
  hu = ot ? Symbol.for("react.context") : 60110,
  Ih = ot ? Symbol.for("react.async_mode") : 60111,
  gu = ot ? Symbol.for("react.concurrent_mode") : 60111,
  yu = ot ? Symbol.for("react.forward_ref") : 60112,
  vu = ot ? Symbol.for("react.suspense") : 60113,
  oI = ot ? Symbol.for("react.suspense_list") : 60120,
  bu = ot ? Symbol.for("react.memo") : 60115,
  wu = ot ? Symbol.for("react.lazy") : 60116,
  sI = ot ? Symbol.for("react.block") : 60121,
  iI = ot ? Symbol.for("react.fundamental") : 60117,
  lI = ot ? Symbol.for("react.responder") : 60118,
  aI = ot ? Symbol.for("react.scope") : 60119;
function on(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $h:
        switch (((e = e.type), e)) {
          case Ih:
          case gu:
          case du:
          case pu:
          case fu:
          case vu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case hu:
              case yu:
              case wu:
              case bu:
              case mu:
                return e;
              default:
                return t;
            }
        }
      case Ah:
        return t;
    }
  }
}
function C1(e) {
  return on(e) === gu;
}
Se.AsyncMode = Ih;
Se.ConcurrentMode = gu;
Se.ContextConsumer = hu;
Se.ContextProvider = mu;
Se.Element = $h;
Se.ForwardRef = yu;
Se.Fragment = du;
Se.Lazy = wu;
Se.Memo = bu;
Se.Portal = Ah;
Se.Profiler = pu;
Se.StrictMode = fu;
Se.Suspense = vu;
Se.isAsyncMode = function (e) {
  return C1(e) || on(e) === Ih;
};
Se.isConcurrentMode = C1;
Se.isContextConsumer = function (e) {
  return on(e) === hu;
};
Se.isContextProvider = function (e) {
  return on(e) === mu;
};
Se.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === $h;
};
Se.isForwardRef = function (e) {
  return on(e) === yu;
};
Se.isFragment = function (e) {
  return on(e) === du;
};
Se.isLazy = function (e) {
  return on(e) === wu;
};
Se.isMemo = function (e) {
  return on(e) === bu;
};
Se.isPortal = function (e) {
  return on(e) === Ah;
};
Se.isProfiler = function (e) {
  return on(e) === pu;
};
Se.isStrictMode = function (e) {
  return on(e) === fu;
};
Se.isSuspense = function (e) {
  return on(e) === vu;
};
Se.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === du ||
    e === gu ||
    e === pu ||
    e === fu ||
    e === vu ||
    e === oI ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === wu ||
        e.$$typeof === bu ||
        e.$$typeof === mu ||
        e.$$typeof === hu ||
        e.$$typeof === yu ||
        e.$$typeof === iI ||
        e.$$typeof === lI ||
        e.$$typeof === aI ||
        e.$$typeof === sI))
  );
};
Se.typeOf = on;
S1.exports = Se;
var cI = S1.exports,
  jh = cI,
  uI = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  dI = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  fI = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  E1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Lh = {};
Lh[jh.ForwardRef] = fI;
Lh[jh.Memo] = E1;
function qv(e) {
  return jh.isMemo(e) ? E1 : Lh[e.$$typeof] || uI;
}
var pI = Object.defineProperty,
  mI = Object.getOwnPropertyNames,
  Kv = Object.getOwnPropertySymbols,
  hI = Object.getOwnPropertyDescriptor,
  gI = Object.getPrototypeOf,
  Xv = Object.prototype;
function D1(e, t, n) {
  if (typeof t != "string") {
    if (Xv) {
      var r = gI(t);
      r && r !== Xv && D1(e, r, n);
    }
    var o = mI(t);
    Kv && (o = o.concat(Kv(t)));
    for (var s = qv(e), i = qv(t), l = 0; l < o.length; ++l) {
      var a = o[l];
      if (!dI[a] && !(n && n[a]) && !(i && i[a]) && !(s && s[a])) {
        var c = hI(t, a);
        try {
          pI(e, a, c);
        } catch {}
      }
    }
  }
  return e;
}
var yI = D1;
const Qv = yr(yI);
var R1 = { exports: {} },
  Ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mh = Symbol.for("react.element"),
  Fh = Symbol.for("react.portal"),
  xu = Symbol.for("react.fragment"),
  Su = Symbol.for("react.strict_mode"),
  Cu = Symbol.for("react.profiler"),
  Eu = Symbol.for("react.provider"),
  Du = Symbol.for("react.context"),
  vI = Symbol.for("react.server_context"),
  Ru = Symbol.for("react.forward_ref"),
  Pu = Symbol.for("react.suspense"),
  Nu = Symbol.for("react.suspense_list"),
  _u = Symbol.for("react.memo"),
  Ou = Symbol.for("react.lazy"),
  bI = Symbol.for("react.offscreen"),
  P1;
P1 = Symbol.for("react.module.reference");
function Sn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Mh:
        switch (((e = e.type), e)) {
          case xu:
          case Cu:
          case Su:
          case Pu:
          case Nu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case vI:
              case Du:
              case Ru:
              case Ou:
              case _u:
              case Eu:
                return e;
              default:
                return t;
            }
        }
      case Fh:
        return t;
    }
  }
}
Ce.ContextConsumer = Du;
Ce.ContextProvider = Eu;
Ce.Element = Mh;
Ce.ForwardRef = Ru;
Ce.Fragment = xu;
Ce.Lazy = Ou;
Ce.Memo = _u;
Ce.Portal = Fh;
Ce.Profiler = Cu;
Ce.StrictMode = Su;
Ce.Suspense = Pu;
Ce.SuspenseList = Nu;
Ce.isAsyncMode = function () {
  return !1;
};
Ce.isConcurrentMode = function () {
  return !1;
};
Ce.isContextConsumer = function (e) {
  return Sn(e) === Du;
};
Ce.isContextProvider = function (e) {
  return Sn(e) === Eu;
};
Ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mh;
};
Ce.isForwardRef = function (e) {
  return Sn(e) === Ru;
};
Ce.isFragment = function (e) {
  return Sn(e) === xu;
};
Ce.isLazy = function (e) {
  return Sn(e) === Ou;
};
Ce.isMemo = function (e) {
  return Sn(e) === _u;
};
Ce.isPortal = function (e) {
  return Sn(e) === Fh;
};
Ce.isProfiler = function (e) {
  return Sn(e) === Cu;
};
Ce.isStrictMode = function (e) {
  return Sn(e) === Su;
};
Ce.isSuspense = function (e) {
  return Sn(e) === Pu;
};
Ce.isSuspenseList = function (e) {
  return Sn(e) === Nu;
};
Ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xu ||
    e === Cu ||
    e === Su ||
    e === Pu ||
    e === Nu ||
    e === bI ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ou ||
        e.$$typeof === _u ||
        e.$$typeof === Eu ||
        e.$$typeof === Du ||
        e.$$typeof === Ru ||
        e.$$typeof === P1 ||
        e.getModuleId !== void 0))
  );
};
Ce.typeOf = Sn;
R1.exports = Ce;
var wI = R1.exports;
const xI = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function SI(
  e,
  t,
  n,
  r,
  { areStatesEqual: o, areOwnPropsEqual: s, areStatePropsEqual: i }
) {
  let l = !1,
    a,
    c,
    u,
    d,
    f;
  function p(y, b) {
    return (
      (a = y),
      (c = b),
      (u = e(a, c)),
      (d = t(r, c)),
      (f = n(u, d, c)),
      (l = !0),
      f
    );
  }
  function m() {
    return (
      (u = e(a, c)), t.dependsOnOwnProps && (d = t(r, c)), (f = n(u, d, c)), f
    );
  }
  function h() {
    return (
      e.dependsOnOwnProps && (u = e(a, c)),
      t.dependsOnOwnProps && (d = t(r, c)),
      (f = n(u, d, c)),
      f
    );
  }
  function x() {
    const y = e(a, c),
      b = !i(y, u);
    return (u = y), b && (f = n(u, d, c)), f;
  }
  function v(y, b) {
    const S = !s(b, c),
      C = !o(y, a, b, c);
    return (a = y), (c = b), S && C ? m() : S ? h() : C ? x() : f;
  }
  return function (b, S) {
    return l ? v(b, S) : p(b, S);
  };
}
function CI(e, t) {
  let {
      initMapStateToProps: n,
      initMapDispatchToProps: r,
      initMergeProps: o,
    } = t,
    s = Sh(t, xI);
  const i = n(e, s),
    l = r(e, s),
    a = o(e, s);
  return SI(i, l, a, e, s);
}
function EI(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...s) => t(o(...s)));
  }
  return n;
}
function hp(e) {
  return function (n) {
    const r = e(n);
    function o() {
      return r;
    }
    return (o.dependsOnOwnProps = !1), o;
  };
}
function Jv(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function N1(e, t) {
  return function (r, { displayName: o }) {
    const s = function (l, a) {
      return s.dependsOnOwnProps ? s.mapToProps(l, a) : s.mapToProps(l, void 0);
    };
    return (
      (s.dependsOnOwnProps = !0),
      (s.mapToProps = function (l, a) {
        (s.mapToProps = e), (s.dependsOnOwnProps = Jv(e));
        let c = s(l, a);
        return (
          typeof c == "function" &&
            ((s.mapToProps = c), (s.dependsOnOwnProps = Jv(c)), (c = s(l, a))),
          c
        );
      }),
      s
    );
  };
}
function Bh(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${
        r.wrappedComponentName
      }.`
    );
  };
}
function DI(e) {
  return e && typeof e == "object"
    ? hp((t) => EI(e, t))
    : e
    ? typeof e == "function"
      ? N1(e)
      : Bh(e, "mapDispatchToProps")
    : hp((t) => ({ dispatch: t }));
}
function RI(e) {
  return e
    ? typeof e == "function"
      ? N1(e)
      : Bh(e, "mapStateToProps")
    : hp(() => ({}));
}
function PI(e, t, n) {
  return dr({}, n, e, t);
}
function NI(e) {
  return function (n, { displayName: r, areMergedPropsEqual: o }) {
    let s = !1,
      i;
    return function (a, c, u) {
      const d = e(a, c, u);
      return s ? o(d, i) || (i = d) : ((s = !0), (i = d)), i;
    };
  };
}
function _I(e) {
  return e ? (typeof e == "function" ? NI(e) : Bh(e, "mergeProps")) : () => PI;
}
function OI() {
  const e = tI();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        s = (n = { callback: r, next: null, prev: n });
      return (
        s.prev ? (s.prev.next = s) : (t = s),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            s.next ? (s.next.prev = s.prev) : (n = s.prev),
            s.prev ? (s.prev.next = s.next) : (t = s.next));
        }
      );
    },
  };
}
const Zv = { notify() {}, get: () => [] };
function _1(e, t) {
  let n,
    r = Zv,
    o = 0,
    s = !1;
  function i(h) {
    u();
    const x = r.subscribe(h);
    let v = !1;
    return () => {
      v || ((v = !0), x(), d());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    m.onStateChange && m.onStateChange();
  }
  function c() {
    return s;
  }
  function u() {
    o++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = OI()));
  }
  function d() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Zv));
  }
  function f() {
    s || ((s = !0), u());
  }
  function p() {
    s && ((s = !1), d());
  }
  const m = {
    addNestedSub: i,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: c,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return m;
}
const kI =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  rc = kI ? w.useLayoutEffect : w.useEffect;
function e0(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Gd(e, t) {
  if (e0(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !e0(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const TI = ["reactReduxForwardedRef"];
let O1 = rI;
const $I = (e) => {
    O1 = e;
  },
  AI = [null, null];
function II(e, t, n) {
  rc(() => e(...t), n);
}
function jI(e, t, n, r, o, s) {
  (e.current = r), (n.current = !1), o.current && ((o.current = null), s());
}
function LI(e, t, n, r, o, s, i, l, a, c, u) {
  if (!e) return () => {};
  let d = !1,
    f = null;
  const p = () => {
    if (d || !l.current) return;
    const h = t.getState();
    let x, v;
    try {
      x = r(h, o.current);
    } catch (y) {
      (v = y), (f = y);
    }
    v || (f = null),
      x === s.current
        ? i.current || c()
        : ((s.current = x), (a.current = x), (i.current = !0), u());
  };
  return (
    (n.onStateChange = p),
    n.trySubscribe(),
    p(),
    () => {
      if (((d = !0), n.tryUnsubscribe(), (n.onStateChange = null), f)) throw f;
    }
  );
}
function MI(e, t) {
  return e === t;
}
function k1(
  e,
  t,
  n,
  {
    pure: r,
    areStatesEqual: o = MI,
    areOwnPropsEqual: s = Gd,
    areStatePropsEqual: i = Gd,
    areMergedPropsEqual: l = Gd,
    forwardRef: a = !1,
    context: c = x1,
  } = {}
) {
  const u = c,
    d = RI(e),
    f = DI(t),
    p = _I(n),
    m = !!e;
  return (x) => {
    const v = x.displayName || x.name || "Component",
      y = `Connect(${v})`,
      b = {
        shouldHandleStateChanges: m,
        displayName: y,
        wrappedComponentName: v,
        WrappedComponent: x,
        initMapStateToProps: d,
        initMapDispatchToProps: f,
        initMergeProps: p,
        areStatesEqual: o,
        areStatePropsEqual: i,
        areOwnPropsEqual: s,
        areMergedPropsEqual: l,
      };
    function S(R) {
      const [P, I, _] = w.useMemo(() => {
          const { reactReduxForwardedRef: me } = R,
            le = Sh(R, TI);
          return [R.context, me, le];
        }, [R]),
        T = w.useMemo(
          () =>
            P &&
            P.Consumer &&
            wI.isContextConsumer(w.createElement(P.Consumer, null))
              ? P
              : u,
          [P, u]
        ),
        M = w.useContext(T),
        z = !!R.store && !!R.store.getState && !!R.store.dispatch,
        L = !!M && !!M.store,
        $ = z ? R.store : M.store,
        O = L ? M.getServerState : $.getState,
        k = w.useMemo(() => CI($.dispatch, b), [$]),
        [N, D] = w.useMemo(() => {
          if (!m) return AI;
          const me = _1($, z ? void 0 : M.subscription),
            le = me.notifyNestedSubs.bind(me);
          return [me, le];
        }, [$, z, M]),
        j = w.useMemo(
          () => (z ? M : dr({}, M, { subscription: N })),
          [z, M, N]
        ),
        A = w.useRef(),
        B = w.useRef(_),
        Y = w.useRef(),
        J = w.useRef(!1);
      w.useRef(!1);
      const ee = w.useRef(!1),
        oe = w.useRef();
      rc(
        () => (
          (ee.current = !0),
          () => {
            ee.current = !1;
          }
        ),
        []
      );
      const ne = w.useMemo(
          () => () =>
            Y.current && _ === B.current ? Y.current : k($.getState(), _),
          [$, _]
        ),
        ye = w.useMemo(
          () => (le) => N ? LI(m, $, N, k, B, A, J, ee, Y, D, le) : () => {},
          [N]
        );
      II(jI, [B, A, J, _, Y, D]);
      let se;
      try {
        se = O1(ye, ne, O ? () => k(O(), _) : ne);
      } catch (me) {
        throw (
          (oe.current &&
            (me.message += `
The error may be correlated with this previous error:
${oe.current.stack}

`),
          me)
        );
      }
      rc(() => {
        (oe.current = void 0), (Y.current = void 0), (A.current = se);
      });
      const ce = w.useMemo(
        () => w.createElement(x, dr({}, se, { ref: I })),
        [I, x, se]
      );
      return w.useMemo(
        () => (m ? w.createElement(T.Provider, { value: j }, ce) : ce),
        [T, ce, j]
      );
    }
    const E = w.memo(S);
    if (((E.WrappedComponent = x), (E.displayName = S.displayName = y), a)) {
      const P = w.forwardRef(function (_, T) {
        return w.createElement(E, dr({}, _, { reactReduxForwardedRef: T }));
      });
      return (P.displayName = y), (P.WrappedComponent = x), Qv(P, x);
    }
    return Qv(E, x);
  };
}
function FI({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: s = "once",
}) {
  const i = w.useMemo(() => {
      const c = _1(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        noopCheck: s,
      };
    }, [e, r, o, s]),
    l = w.useMemo(() => e.getState(), [e]);
  rc(() => {
    const { subscription: c } = i;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      l !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [i, l]);
  const a = t || x1;
  return w.createElement(a.Provider, { value: i }, n);
}
$I(b1.useSyncExternalStore);
eI(eo.unstable_batchedUpdates);
function BI(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function T1(e, t) {
  var n = w.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    r = w.useRef(!0),
    o = w.useRef(n),
    s = r.current || !!(t && o.current.inputs && BI(t, o.current.inputs)),
    i = s ? o.current : { inputs: t, result: e() };
  return (
    w.useEffect(
      function () {
        (r.current = !1), (o.current = i);
      },
      [i]
    ),
    i.result
  );
}
function zI(e, t) {
  return T1(function () {
    return e;
  }, t);
}
var ge = T1,
  re = zI,
  VI = "Invariant failed";
function WI(e, t) {
  throw new Error(VI);
}
var Nn = function (t) {
    var n = t.top,
      r = t.right,
      o = t.bottom,
      s = t.left,
      i = r - s,
      l = o - n,
      a = {
        top: n,
        right: r,
        bottom: o,
        left: s,
        width: i,
        height: l,
        x: s,
        y: n,
        center: { x: (r + s) / 2, y: (o + n) / 2 },
      };
    return a;
  },
  zh = function (t, n) {
    return {
      top: t.top - n.top,
      left: t.left - n.left,
      bottom: t.bottom + n.bottom,
      right: t.right + n.right,
    };
  },
  t0 = function (t, n) {
    return {
      top: t.top + n.top,
      left: t.left + n.left,
      bottom: t.bottom - n.bottom,
      right: t.right - n.right,
    };
  },
  UI = function (t, n) {
    return {
      top: t.top + n.y,
      left: t.left + n.x,
      bottom: t.bottom + n.y,
      right: t.right + n.x,
    };
  },
  Yd = { top: 0, right: 0, bottom: 0, left: 0 },
  Vh = function (t) {
    var n = t.borderBox,
      r = t.margin,
      o = r === void 0 ? Yd : r,
      s = t.border,
      i = s === void 0 ? Yd : s,
      l = t.padding,
      a = l === void 0 ? Yd : l,
      c = Nn(zh(n, o)),
      u = Nn(t0(n, i)),
      d = Nn(t0(u, a));
    return {
      marginBox: c,
      borderBox: Nn(n),
      paddingBox: u,
      contentBox: d,
      margin: o,
      border: i,
      padding: a,
    };
  },
  ln = function (t) {
    var n = t.slice(0, -2),
      r = t.slice(-2);
    if (r !== "px") return 0;
    var o = Number(n);
    return isNaN(o) && WI(), o;
  },
  HI = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  oc = function (t, n) {
    var r = t.borderBox,
      o = t.border,
      s = t.margin,
      i = t.padding,
      l = UI(r, n);
    return Vh({ borderBox: l, border: o, margin: s, padding: i });
  },
  sc = function (t, n) {
    return n === void 0 && (n = HI()), oc(t, n);
  },
  $1 = function (t, n) {
    var r = {
        top: ln(n.marginTop),
        right: ln(n.marginRight),
        bottom: ln(n.marginBottom),
        left: ln(n.marginLeft),
      },
      o = {
        top: ln(n.paddingTop),
        right: ln(n.paddingRight),
        bottom: ln(n.paddingBottom),
        left: ln(n.paddingLeft),
      },
      s = {
        top: ln(n.borderTopWidth),
        right: ln(n.borderRightWidth),
        bottom: ln(n.borderBottomWidth),
        left: ln(n.borderLeftWidth),
      };
    return Vh({ borderBox: t, margin: r, padding: o, border: s });
  },
  A1 = function (t) {
    var n = t.getBoundingClientRect(),
      r = window.getComputedStyle(t);
    return $1(n, r);
  },
  n0 =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function GI(e, t) {
  return !!(e === t || (n0(e) && n0(t)));
}
function YI(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!GI(e[n], t[n])) return !1;
  return !0;
}
function tt(e, t) {
  t === void 0 && (t = YI);
  var n = null;
  function r() {
    for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
    if (n && n.lastThis === this && t(o, n.lastArgs)) return n.lastResult;
    var i = e.apply(this, o);
    return (n = { lastResult: i, lastArgs: o, lastThis: this }), i;
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var il = function (t) {
  var n = [],
    r = null,
    o = function () {
      for (var i = arguments.length, l = new Array(i), a = 0; a < i; a++)
        l[a] = arguments[a];
      (n = l),
        !r &&
          (r = requestAnimationFrame(function () {
            (r = null), t.apply(void 0, n);
          }));
    };
  return (
    (o.cancel = function () {
      r && (cancelAnimationFrame(r), (r = null));
    }),
    o
  );
};
function I1(e, t) {}
I1.bind(null, "warn");
I1.bind(null, "error");
function Vr() {}
function qI(e, t) {
  return { ...e, ...t };
}
function dn(e, t, n) {
  const r = t.map((o) => {
    const s = qI(n, o.options);
    return (
      e.addEventListener(o.eventName, o.fn, s),
      function () {
        e.removeEventListener(o.eventName, o.fn, s);
      }
    );
  });
  return function () {
    r.forEach((s) => {
      s();
    });
  };
}
const KI = "Invariant failed";
class ic extends Error {}
ic.prototype.toString = function () {
  return this.message;
};
function G(e, t) {
  throw new ic(KI);
}
class XI extends be.Component {
  constructor(...t) {
    super(...t),
      (this.callbacks = null),
      (this.unbind = Vr),
      (this.onWindowError = (n) => {
        const r = this.getCallbacks();
        r.isDragging() && r.tryAbort(),
          n.error instanceof ic && n.preventDefault();
      }),
      (this.getCallbacks = () => {
        if (!this.callbacks)
          throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
        return this.callbacks;
      }),
      (this.setCallbacks = (n) => {
        this.callbacks = n;
      });
  }
  componentDidMount() {
    this.unbind = dn(window, [{ eventName: "error", fn: this.onWindowError }]);
  }
  componentDidCatch(t) {
    if (t instanceof ic) {
      this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const QI = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  lc = (e) => e + 1,
  JI = (e) => `
  You have lifted an item in position ${lc(e.source.index)}
`,
  j1 = (e, t) => {
    const n = e.droppableId === t.droppableId,
      r = lc(e.index),
      o = lc(t.index);
    return n
      ? `
      You have moved the item from position ${r}
      to position ${o}
    `
      : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
  },
  L1 = (e, t, n) =>
    t.droppableId === n.droppableId
      ? `
      The item ${e}
      has been combined with ${n.draggableId}`
      : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `,
  ZI = (e) => {
    const t = e.destination;
    if (t) return j1(e.source, t);
    const n = e.combine;
    return n
      ? L1(e.draggableId, e.source, n)
      : "You are over an area that cannot be dropped on";
  },
  r0 = (e) => `
  The item has returned to its starting position
  of ${lc(e.index)}
`,
  ej = (e) => {
    if (e.reason === "CANCEL")
      return `
      Movement cancelled.
      ${r0(e.source)}
    `;
    const t = e.destination,
      n = e.combine;
    return t
      ? `
      You have dropped the item.
      ${j1(e.source, t)}
    `
      : n
      ? `
      You have dropped the item.
      ${L1(e.draggableId, e.source, n)}
    `
      : `
    The item has been dropped while not over a drop area.
    ${r0(e.source)}
  `;
  },
  tj = {
    dragHandleUsageInstructions: QI,
    onDragStart: JI,
    onDragUpdate: ZI,
    onDragEnd: ej,
  };
var Ca = tj;
const rt = { x: 0, y: 0 },
  ct = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
  qt = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  Wr = (e, t) => e.x === t.x && e.y === t.y,
  Ks = (e) => ({ x: e.x !== 0 ? -e.x : 0, y: e.y !== 0 ? -e.y : 0 }),
  $o = (e, t, n = 0) => (e === "x" ? { x: t, y: n } : { x: n, y: t }),
  ll = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
  o0 = (e, t) => Math.min(...t.map((n) => ll(e, n))),
  M1 = (e) => (t) => ({ x: e(t.x), y: e(t.y) });
var nj = (e, t) => {
  const n = Nn({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left),
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const El = (e, t) => ({
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x,
  }),
  s0 = (e) => [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.left, y: e.bottom },
    { x: e.right, y: e.bottom },
  ],
  rj = { top: 0, right: 0, bottom: 0, left: 0 },
  oj = (e, t) => (t ? El(e, t.scroll.diff.displacement) : e),
  sj = (e, t, n) =>
    n && n.increasedBy
      ? { ...e, [t.end]: e[t.end] + n.increasedBy[t.line] }
      : e,
  ij = (e, t) => (t && t.shouldClipSubject ? nj(t.pageMarginBox, e) : Nn(e));
var As = ({ page: e, withPlaceholder: t, axis: n, frame: r }) => {
    const o = oj(e.marginBox, r),
      s = sj(o, n, t),
      i = ij(s, r);
    return { page: e, withPlaceholder: t, active: i };
  },
  Wh = (e, t) => {
    e.frame || G();
    const n = e.frame,
      r = qt(t, n.scroll.initial),
      o = Ks(r),
      s = {
        ...n,
        scroll: {
          initial: n.scroll.initial,
          current: t,
          diff: { value: r, displacement: o },
          max: n.scroll.max,
        },
      },
      i = As({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: s,
      });
    return { ...e, frame: s, subject: i };
  };
const F1 = tt((e) => e.reduce((t, n) => ((t[n.descriptor.id] = n), t), {})),
  B1 = tt((e) => e.reduce((t, n) => ((t[n.descriptor.id] = n), t), {})),
  ku = tt((e) => Object.values(e)),
  lj = tt((e) => Object.values(e));
var Xs = tt((e, t) =>
  lj(t)
    .filter((r) => e === r.descriptor.droppableId)
    .sort((r, o) => r.descriptor.index - o.descriptor.index)
);
function Uh(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Tu(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var $u = tt((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)),
  aj = ({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: r,
    previousImpact: o,
  }) => {
    if (!n.isCombineEnabled || !Uh(o)) return null;
    function i(p) {
      const m = {
        type: "COMBINE",
        combine: { draggableId: p, droppableId: n.descriptor.id },
      };
      return { ...o, at: m };
    }
    const l = o.displaced.all,
      a = l.length ? l[0] : null;
    if (e) return a ? i(a) : null;
    const c = $u(t, r);
    if (!a) {
      if (!c.length) return null;
      const p = c[c.length - 1];
      return i(p.descriptor.id);
    }
    const u = c.findIndex((p) => p.descriptor.id === a);
    u === -1 && G();
    const d = u - 1;
    if (d < 0) return null;
    const f = c[d];
    return i(f.descriptor.id);
  },
  Qs = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const z1 = { point: rt, value: 0 },
  al = { invisible: {}, visible: {}, all: [] },
  cj = { displaced: al, displacedBy: z1, at: null };
var uj = cj,
  pn = (e, t) => (n) => e <= n && n <= t,
  V1 = (e) => {
    const t = pn(e.top, e.bottom),
      n = pn(e.left, e.right);
    return (r) => {
      if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0;
      const s = t(r.top) || t(r.bottom),
        i = n(r.left) || n(r.right);
      if (s && i) return !0;
      const a = r.top < e.top && r.bottom > e.bottom,
        c = r.left < e.left && r.right > e.right;
      return a && c ? !0 : (a && i) || (c && s);
    };
  },
  dj = (e) => {
    const t = pn(e.top, e.bottom),
      n = pn(e.left, e.right);
    return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
  };
const Hh = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width",
  },
  W1 = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height",
  };
var fj = (e) => (t) => {
  const n = pn(t.top, t.bottom),
    r = pn(t.left, t.right);
  return (o) => (e === Hh ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right));
};
const pj = (e, t) => {
    const n = t.frame ? t.frame.scroll.diff.displacement : rt;
    return El(e, n);
  },
  mj = (e, t, n) => (t.subject.active ? n(t.subject.active)(e) : !1),
  hj = (e, t, n) => n(t)(e),
  Gh = ({
    target: e,
    destination: t,
    viewport: n,
    withDroppableDisplacement: r,
    isVisibleThroughFrameFn: o,
  }) => {
    const s = r ? pj(e, t) : e;
    return mj(s, t, o) && hj(s, n, o);
  },
  gj = (e) => Gh({ ...e, isVisibleThroughFrameFn: V1 }),
  U1 = (e) => Gh({ ...e, isVisibleThroughFrameFn: dj }),
  yj = (e) => Gh({ ...e, isVisibleThroughFrameFn: fj(e.destination.axis) }),
  vj = (e, t, n) => {
    if (typeof n == "boolean") return n;
    if (!t) return !0;
    const { invisible: r, visible: o } = t;
    if (r[e]) return !1;
    const s = o[e];
    return s ? s.shouldAnimate : !0;
  };
function bj(e, t) {
  const n = e.page.marginBox,
    r = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return Nn(zh(n, r));
}
function cl({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: s,
}) {
  return e.reduce(
    function (l, a) {
      const c = bj(a, n),
        u = a.descriptor.id;
      if (
        (l.all.push(u),
        !gj({
          target: c,
          destination: t,
          viewport: r,
          withDroppableDisplacement: !0,
        }))
      )
        return (l.invisible[a.descriptor.id] = !0), l;
      const f = vj(u, s, o),
        p = { draggableId: u, shouldAnimate: f };
      return (l.visible[u] = p), l;
    },
    { all: [], visible: {}, invisible: {} }
  );
}
function wj(e, t) {
  if (!e.length) return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function i0({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r,
}) {
  const o = wj(e, { inHomeList: t });
  return {
    displaced: al,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: { droppableId: r.descriptor.id, index: o },
    },
  };
}
function ac({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: s,
  index: i,
  forceShouldAnimate: l,
}) {
  const a = Qs(e, n);
  if (i == null)
    return i0({
      insideDestination: t,
      inHomeList: a,
      displacedBy: o,
      destination: n,
    });
  const c = t.find((m) => m.descriptor.index === i);
  if (!c)
    return i0({
      insideDestination: t,
      inHomeList: a,
      displacedBy: o,
      destination: n,
    });
  const u = $u(e, t),
    d = t.indexOf(c),
    f = u.slice(d);
  return {
    displaced: cl({
      afterDragging: f,
      destination: n,
      displacedBy: o,
      last: s,
      viewport: r.frame,
      forceShouldAnimate: l,
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: { droppableId: n.descriptor.id, index: i },
    },
  };
}
function Xr(e, t) {
  return !!t.effected[e];
}
var xj = ({
    isMovingForward: e,
    destination: t,
    draggables: n,
    combine: r,
    afterCritical: o,
  }) => {
    if (!t.isCombineEnabled) return null;
    const s = r.draggableId,
      l = n[s].descriptor.index;
    return Xr(s, o) ? (e ? l : l - 1) : e ? l + 1 : l;
  },
  Sj = ({
    isMovingForward: e,
    isInHomeList: t,
    insideDestination: n,
    location: r,
  }) => {
    if (!n.length) return null;
    const o = r.index,
      s = e ? o + 1 : o - 1,
      i = n[0].descriptor.index,
      l = n[n.length - 1].descriptor.index,
      a = t ? l : l + 1;
    return s < i || s > a ? null : s;
  },
  Cj = ({
    isMovingForward: e,
    isInHomeList: t,
    draggable: n,
    draggables: r,
    destination: o,
    insideDestination: s,
    previousImpact: i,
    viewport: l,
    afterCritical: a,
  }) => {
    const c = i.at;
    if ((c || G(), c.type === "REORDER")) {
      const d = Sj({
        isMovingForward: e,
        isInHomeList: t,
        location: c.destination,
        insideDestination: s,
      });
      return d == null
        ? null
        : ac({
            draggable: n,
            insideDestination: s,
            destination: o,
            viewport: l,
            last: i.displaced,
            displacedBy: i.displacedBy,
            index: d,
          });
    }
    const u = xj({
      isMovingForward: e,
      destination: o,
      displaced: i.displaced,
      draggables: r,
      combine: c.combine,
      afterCritical: a,
    });
    return u == null
      ? null
      : ac({
          draggable: n,
          insideDestination: s,
          destination: o,
          viewport: l,
          last: i.displaced,
          displacedBy: i.displacedBy,
          index: u,
        });
  },
  Ej = ({ displaced: e, afterCritical: t, combineWith: n, displacedBy: r }) => {
    const o = !!(e.visible[n] || e.invisible[n]);
    return Xr(n, t) ? (o ? rt : Ks(r.point)) : o ? r.point : rt;
  },
  Dj = ({ afterCritical: e, impact: t, draggables: n }) => {
    const r = Tu(t);
    r || G();
    const o = r.draggableId,
      s = n[o].page.borderBox.center,
      i = Ej({
        displaced: t.displaced,
        afterCritical: e,
        combineWith: o,
        displacedBy: t.displacedBy,
      });
    return ct(s, i);
  };
const H1 = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
  Rj = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
  Yh = (e, t, n) =>
    t[e.crossAxisStart] +
    n.margin[e.crossAxisStart] +
    n.borderBox[e.crossAxisSize] / 2,
  l0 = ({ axis: e, moveRelativeTo: t, isMoving: n }) =>
    $o(e.line, t.marginBox[e.end] + H1(e, n), Yh(e, t.marginBox, n)),
  a0 = ({ axis: e, moveRelativeTo: t, isMoving: n }) =>
    $o(e.line, t.marginBox[e.start] - Rj(e, n), Yh(e, t.marginBox, n)),
  Pj = ({ axis: e, moveInto: t, isMoving: n }) =>
    $o(e.line, t.contentBox[e.start] + H1(e, n), Yh(e, t.contentBox, n));
var Nj = ({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o,
  }) => {
    const s = Xs(r.descriptor.id, n),
      i = t.page,
      l = r.axis;
    if (!s.length) return Pj({ axis: l, moveInto: r.page, isMoving: i });
    const { displaced: a, displacedBy: c } = e,
      u = a.all[0];
    if (u) {
      const f = n[u];
      if (Xr(u, o)) return a0({ axis: l, moveRelativeTo: f.page, isMoving: i });
      const p = oc(f.page, c.point);
      return a0({ axis: l, moveRelativeTo: p, isMoving: i });
    }
    const d = s[s.length - 1];
    if (d.descriptor.id === t.descriptor.id) return i.borderBox.center;
    if (Xr(d.descriptor.id, o)) {
      const f = oc(d.page, Ks(o.displacedBy.point));
      return l0({ axis: l, moveRelativeTo: f, isMoving: i });
    }
    return l0({ axis: l, moveRelativeTo: d.page, isMoving: i });
  },
  gp = (e, t) => {
    const n = e.frame;
    return n ? ct(t, n.scroll.diff.displacement) : t;
  };
const _j = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o,
}) => {
  const s = t.page.borderBox.center,
    i = e.at;
  return !n || !i
    ? s
    : i.type === "REORDER"
    ? Nj({
        impact: e,
        draggable: t,
        draggables: r,
        droppable: n,
        afterCritical: o,
      })
    : Dj({ impact: e, draggables: r, afterCritical: o });
};
var Au = (e) => {
    const t = _j(e),
      n = e.droppable;
    return n ? gp(n, t) : t;
  },
  G1 = (e, t) => {
    const n = qt(t, e.scroll.initial),
      r = Ks(n);
    return {
      frame: Nn({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width,
      }),
      scroll: {
        initial: e.scroll.initial,
        max: e.scroll.max,
        current: t,
        diff: { value: n, displacement: r },
      },
    };
  };
function c0(e, t) {
  return e.map((n) => t[n]);
}
function Oj(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r) return r;
  }
  return null;
}
var kj = ({
    impact: e,
    viewport: t,
    destination: n,
    draggables: r,
    maxScrollChange: o,
  }) => {
    const s = G1(t, ct(t.scroll.current, o)),
      i = n.frame ? Wh(n, ct(n.frame.scroll.current, o)) : n,
      l = e.displaced,
      a = cl({
        afterDragging: c0(l.all, r),
        destination: n,
        displacedBy: e.displacedBy,
        viewport: s.frame,
        last: l,
        forceShouldAnimate: !1,
      }),
      c = cl({
        afterDragging: c0(l.all, r),
        destination: i,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        last: l,
        forceShouldAnimate: !1,
      }),
      u = {},
      d = {},
      f = [l, a, c];
    return (
      l.all.forEach((m) => {
        const h = Oj(m, f);
        if (h) {
          d[m] = h;
          return;
        }
        u[m] = !0;
      }),
      { ...e, displaced: { all: l.all, invisible: u, visible: d } }
    );
  },
  Tj = (e, t) => ct(e.scroll.diff.displacement, t),
  qh = ({ pageBorderBoxCenter: e, draggable: t, viewport: n }) => {
    const r = Tj(n, e),
      o = qt(r, t.page.borderBox.center);
    return ct(t.client.borderBox.center, o);
  },
  Y1 = ({
    draggable: e,
    destination: t,
    newPageBorderBoxCenter: n,
    viewport: r,
    withDroppableDisplacement: o,
    onlyOnMainAxis: s = !1,
  }) => {
    const i = qt(n, e.page.borderBox.center),
      a = {
        target: El(e.page.borderBox, i),
        destination: t,
        withDroppableDisplacement: o,
        viewport: r,
      };
    return s ? yj(a) : U1(a);
  },
  $j = ({
    isMovingForward: e,
    draggable: t,
    destination: n,
    draggables: r,
    previousImpact: o,
    viewport: s,
    previousPageBorderBoxCenter: i,
    previousClientSelection: l,
    afterCritical: a,
  }) => {
    if (!n.isEnabled) return null;
    const c = Xs(n.descriptor.id, r),
      u = Qs(t, n),
      d =
        aj({
          isMovingForward: e,
          draggable: t,
          destination: n,
          insideDestination: c,
          previousImpact: o,
        }) ||
        Cj({
          isMovingForward: e,
          isInHomeList: u,
          draggable: t,
          draggables: r,
          destination: n,
          insideDestination: c,
          previousImpact: o,
          viewport: s,
          afterCritical: a,
        });
    if (!d) return null;
    const f = Au({
      impact: d,
      draggable: t,
      droppable: n,
      draggables: r,
      afterCritical: a,
    });
    if (
      Y1({
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: f,
        viewport: s.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: qh({
          pageBorderBoxCenter: f,
          draggable: t,
          viewport: s,
        }),
        impact: d,
        scrollJumpRequest: null,
      };
    const m = qt(f, i),
      h = kj({
        impact: d,
        viewport: s,
        destination: n,
        draggables: r,
        maxScrollChange: m,
      });
    return { clientSelection: l, impact: h, scrollJumpRequest: m };
  };
const Ct = (e) => {
  const t = e.subject.active;
  return t || G(), t;
};
var Aj = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o,
}) => {
  const s = n.subject.active;
  if (!s) return null;
  const i = n.axis,
    l = pn(s[i.start], s[i.end]),
    a = ku(r)
      .filter((u) => u !== n)
      .filter((u) => u.isEnabled)
      .filter((u) => !!u.subject.active)
      .filter((u) => V1(o.frame)(Ct(u)))
      .filter((u) => {
        const d = Ct(u);
        return e
          ? s[i.crossAxisEnd] < d[i.crossAxisEnd]
          : d[i.crossAxisStart] < s[i.crossAxisStart];
      })
      .filter((u) => {
        const d = Ct(u),
          f = pn(d[i.start], d[i.end]);
        return l(d[i.start]) || l(d[i.end]) || f(s[i.start]) || f(s[i.end]);
      })
      .sort((u, d) => {
        const f = Ct(u)[i.crossAxisStart],
          p = Ct(d)[i.crossAxisStart];
        return e ? f - p : p - f;
      })
      .filter(
        (u, d, f) => Ct(u)[i.crossAxisStart] === Ct(f[0])[i.crossAxisStart]
      );
  if (!a.length) return null;
  if (a.length === 1) return a[0];
  const c = a.filter((u) => pn(Ct(u)[i.start], Ct(u)[i.end])(t[i.line]));
  return c.length === 1
    ? c[0]
    : c.length > 1
    ? c.sort((u, d) => Ct(u)[i.start] - Ct(d)[i.start])[0]
    : a.sort((u, d) => {
        const f = o0(t, s0(Ct(u))),
          p = o0(t, s0(Ct(d)));
        return f !== p ? f - p : Ct(u)[i.start] - Ct(d)[i.start];
      })[0];
};
const u0 = (e, t) => {
    const n = e.page.borderBox.center;
    return Xr(e.descriptor.id, t) ? qt(n, t.displacedBy.point) : n;
  },
  Ij = (e, t) => {
    const n = e.page.borderBox;
    return Xr(e.descriptor.id, t) ? El(n, Ks(t.displacedBy.point)) : n;
  };
var jj = ({
    pageBorderBoxCenter: e,
    viewport: t,
    destination: n,
    insideDestination: r,
    afterCritical: o,
  }) =>
    r
      .filter((i) =>
        U1({
          target: Ij(i, o),
          destination: n,
          viewport: t.frame,
          withDroppableDisplacement: !0,
        })
      )
      .sort((i, l) => {
        const a = ll(e, gp(n, u0(i, o))),
          c = ll(e, gp(n, u0(l, o)));
        return a < c ? -1 : c < a ? 1 : i.descriptor.index - l.descriptor.index;
      })[0] || null,
  Dl = tt(function (t, n) {
    const r = n[t.line];
    return { value: r, point: $o(t.line, r) };
  });
const Lj = (e, t, n) => {
    const r = e.axis;
    if (e.descriptor.mode === "virtual") return $o(r.line, t[r.line]);
    const o = e.subject.page.contentBox[r.size],
      a =
        Xs(e.descriptor.id, n).reduce(
          (c, u) => c + u.client.marginBox[r.size],
          0
        ) +
        t[r.line] -
        o;
    return a <= 0 ? null : $o(r.line, a);
  },
  q1 = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
  K1 = (e, t, n) => {
    const r = e.frame;
    Qs(t, e) && G(), e.subject.withPlaceholder && G();
    const o = Dl(e.axis, t.displaceBy).point,
      s = Lj(e, o, n),
      i = {
        placeholderSize: o,
        increasedBy: s,
        oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
      };
    if (!r) {
      const u = As({
        page: e.subject.page,
        withPlaceholder: i,
        axis: e.axis,
        frame: e.frame,
      });
      return { ...e, subject: u };
    }
    const l = s ? ct(r.scroll.max, s) : r.scroll.max,
      a = q1(r, l),
      c = As({
        page: e.subject.page,
        withPlaceholder: i,
        axis: e.axis,
        frame: a,
      });
    return { ...e, subject: c, frame: a };
  },
  Mj = (e) => {
    const t = e.subject.withPlaceholder;
    t || G();
    const n = e.frame;
    if (!n) {
      const i = As({
        page: e.subject.page,
        axis: e.axis,
        frame: null,
        withPlaceholder: null,
      });
      return { ...e, subject: i };
    }
    const r = t.oldFrameMaxScroll;
    r || G();
    const o = q1(n, r),
      s = As({
        page: e.subject.page,
        axis: e.axis,
        frame: o,
        withPlaceholder: null,
      });
    return { ...e, subject: s, frame: o };
  };
var Fj = ({
    previousPageBorderBoxCenter: e,
    moveRelativeTo: t,
    insideDestination: n,
    draggable: r,
    draggables: o,
    destination: s,
    viewport: i,
    afterCritical: l,
  }) => {
    if (!t) {
      if (n.length) return null;
      const d = {
          displaced: al,
          displacedBy: z1,
          at: {
            type: "REORDER",
            destination: { droppableId: s.descriptor.id, index: 0 },
          },
        },
        f = Au({
          impact: d,
          draggable: r,
          droppable: s,
          draggables: o,
          afterCritical: l,
        }),
        p = Qs(r, s) ? s : K1(s, r, o);
      return Y1({
        draggable: r,
        destination: p,
        newPageBorderBoxCenter: f,
        viewport: i.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? d
        : null;
    }
    const a = e[s.axis.line] <= t.page.borderBox.center[s.axis.line],
      c = (() => {
        const d = t.descriptor.index;
        return t.descriptor.id === r.descriptor.id || a ? d : d + 1;
      })(),
      u = Dl(s.axis, r.displaceBy);
    return ac({
      draggable: r,
      insideDestination: n,
      destination: s,
      viewport: i,
      displacedBy: u,
      last: al,
      index: c,
    });
  },
  Bj = ({
    isMovingForward: e,
    previousPageBorderBoxCenter: t,
    draggable: n,
    isOver: r,
    draggables: o,
    droppables: s,
    viewport: i,
    afterCritical: l,
  }) => {
    const a = Aj({
      isMovingForward: e,
      pageBorderBoxCenter: t,
      source: r,
      droppables: s,
      viewport: i,
    });
    if (!a) return null;
    const c = Xs(a.descriptor.id, o),
      u = jj({
        pageBorderBoxCenter: t,
        viewport: i,
        destination: a,
        insideDestination: c,
        afterCritical: l,
      }),
      d = Fj({
        previousPageBorderBoxCenter: t,
        destination: a,
        draggable: n,
        draggables: o,
        moveRelativeTo: u,
        insideDestination: c,
        viewport: i,
        afterCritical: l,
      });
    if (!d) return null;
    const f = Au({
      impact: d,
      draggable: n,
      droppable: a,
      draggables: o,
      afterCritical: l,
    });
    return {
      clientSelection: qh({
        pageBorderBoxCenter: f,
        draggable: n,
        viewport: i,
      }),
      impact: d,
      scrollJumpRequest: null,
    };
  },
  Qt = (e) => {
    const t = e.at;
    return t
      ? t.type === "REORDER"
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  };
const zj = (e, t) => {
  const n = Qt(e);
  return n ? t[n] : null;
};
var Vj = ({ state: e, type: t }) => {
  const n = zj(e.impact, e.dimensions.droppables),
    r = !!n,
    o = e.dimensions.droppables[e.critical.droppable.id],
    s = n || o,
    i = s.axis.direction,
    l =
      (i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
      (i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
  if (l && !r) return null;
  const a = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
    c = e.dimensions.draggables[e.critical.draggable.id],
    u = e.current.page.borderBoxCenter,
    { draggables: d, droppables: f } = e.dimensions;
  return l
    ? $j({
        isMovingForward: a,
        previousPageBorderBoxCenter: u,
        draggable: c,
        destination: s,
        draggables: d,
        viewport: e.viewport,
        previousClientSelection: e.current.client.selection,
        previousImpact: e.impact,
        afterCritical: e.afterCritical,
      })
    : Bj({
        isMovingForward: a,
        previousPageBorderBoxCenter: u,
        draggable: c,
        isOver: s,
        draggables: d,
        droppables: f,
        viewport: e.viewport,
        afterCritical: e.afterCritical,
      });
};
function uo(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function X1(e) {
  const t = pn(e.top, e.bottom),
    n = pn(e.left, e.right);
  return function (o) {
    return t(o.y) && n(o.x);
  };
}
function Wj(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function Uj({ pageBorderBox: e, draggable: t, candidates: n }) {
  const r = t.page.borderBox.center,
    o = n
      .map((s) => {
        const i = s.axis,
          l = $o(
            s.axis.line,
            e.center[i.line],
            s.page.borderBox.center[i.crossAxisLine]
          );
        return { id: s.descriptor.id, distance: ll(r, l) };
      })
      .sort((s, i) => i.distance - s.distance);
  return o[0] ? o[0].id : null;
}
function Hj({ pageBorderBox: e, draggable: t, droppables: n }) {
  const r = ku(n).filter((o) => {
    if (!o.isEnabled) return !1;
    const s = o.subject.active;
    if (!s || !Wj(e, s)) return !1;
    if (X1(s)(e.center)) return !0;
    const i = o.axis,
      l = s.center[i.crossAxisLine],
      a = e[i.crossAxisStart],
      c = e[i.crossAxisEnd],
      u = pn(s[i.crossAxisStart], s[i.crossAxisEnd]),
      d = u(a),
      f = u(c);
    return !d && !f ? !0 : d ? a < l : c > l;
  });
  return r.length
    ? r.length === 1
      ? r[0].descriptor.id
      : Uj({ pageBorderBox: e, draggable: t, candidates: r })
    : null;
}
const Q1 = (e, t) => Nn(El(e, t));
var Gj = (e, t) => {
  const n = e.frame;
  return n ? Q1(t, n.scroll.diff.value) : t;
};
function J1({ displaced: e, id: t }) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Yj({ draggable: e, closest: t, inHomeList: n }) {
  return t
    ? n && t.descriptor.index > e.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var qj = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: s,
  afterCritical: i,
}) => {
  const l = n.axis,
    a = Dl(n.axis, t.displaceBy),
    c = a.value,
    u = e[l.start],
    d = e[l.end],
    p =
      $u(t, r).find((h) => {
        const x = h.descriptor.id,
          v = h.page.borderBox.center[l.line],
          y = Xr(x, i),
          b = J1({ displaced: o, id: x });
        return y ? (b ? d <= v : u < v - c) : b ? d <= v + c : u < v;
      }) || null,
    m = Yj({ draggable: t, closest: p, inHomeList: Qs(t, n) });
  return ac({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: s,
    last: o,
    displacedBy: a,
    index: m,
  });
};
const Kj = 4;
var Xj = ({
    draggable: e,
    pageBorderBoxWithDroppableScroll: t,
    previousImpact: n,
    destination: r,
    insideDestination: o,
    afterCritical: s,
  }) => {
    if (!r.isCombineEnabled) return null;
    const i = r.axis,
      l = Dl(r.axis, e.displaceBy),
      a = l.value,
      c = t[i.start],
      u = t[i.end],
      f = $u(e, o).find((m) => {
        const h = m.descriptor.id,
          x = m.page.borderBox,
          y = x[i.size] / Kj,
          b = Xr(h, s),
          S = J1({ displaced: n.displaced, id: h });
        return b
          ? S
            ? u > x[i.start] + y && u < x[i.end] - y
            : c > x[i.start] - a + y && c < x[i.end] - a - y
          : S
          ? u > x[i.start] + a + y && u < x[i.end] + a - y
          : c > x[i.start] + y && c < x[i.end] - y;
      });
    return f
      ? {
          displacedBy: l,
          displaced: n.displaced,
          at: {
            type: "COMBINE",
            combine: {
              draggableId: f.descriptor.id,
              droppableId: r.descriptor.id,
            },
          },
        }
      : null;
  },
  Z1 = ({
    pageOffset: e,
    draggable: t,
    draggables: n,
    droppables: r,
    previousImpact: o,
    viewport: s,
    afterCritical: i,
  }) => {
    const l = Q1(t.page.borderBox, e),
      a = Hj({ pageBorderBox: l, draggable: t, droppables: r });
    if (!a) return uj;
    const c = r[a],
      u = Xs(c.descriptor.id, n),
      d = Gj(c, l);
    return (
      Xj({
        pageBorderBoxWithDroppableScroll: d,
        draggable: t,
        previousImpact: o,
        destination: c,
        insideDestination: u,
        afterCritical: i,
      }) ||
      qj({
        pageBorderBoxWithDroppableScroll: d,
        draggable: t,
        destination: c,
        insideDestination: u,
        last: o.displaced,
        viewport: s,
        afterCritical: i,
      })
    );
  },
  Kh = (e, t) => ({ ...e, [t.descriptor.id]: t });
const Qj = ({ previousImpact: e, impact: t, droppables: n }) => {
  const r = Qt(e),
    o = Qt(t);
  if (!r || r === o) return n;
  const s = n[r];
  if (!s.subject.withPlaceholder) return n;
  const i = Mj(s);
  return Kh(n, i);
};
var Jj = ({
    draggable: e,
    draggables: t,
    droppables: n,
    previousImpact: r,
    impact: o,
  }) => {
    const s = Qj({ previousImpact: r, impact: o, droppables: n }),
      i = Qt(o);
    if (!i) return s;
    const l = n[i];
    if (Qs(e, l) || l.subject.withPlaceholder) return s;
    const a = K1(l, e, t);
    return Kh(s, a);
  },
  Ii = ({
    state: e,
    clientSelection: t,
    dimensions: n,
    viewport: r,
    impact: o,
    scrollJumpRequest: s,
  }) => {
    const i = r || e.viewport,
      l = n || e.dimensions,
      a = t || e.current.client.selection,
      c = qt(a, e.initial.client.selection),
      u = {
        offset: c,
        selection: a,
        borderBoxCenter: ct(e.initial.client.borderBoxCenter, c),
      },
      d = {
        selection: ct(u.selection, i.scroll.current),
        borderBoxCenter: ct(u.borderBoxCenter, i.scroll.current),
        offset: ct(u.offset, i.scroll.diff.value),
      },
      f = { client: u, page: d };
    if (e.phase === "COLLECTING")
      return { ...e, dimensions: l, viewport: i, current: f };
    const p = l.draggables[e.critical.draggable.id],
      m =
        o ||
        Z1({
          pageOffset: d.offset,
          draggable: p,
          draggables: l.draggables,
          droppables: l.droppables,
          previousImpact: e.impact,
          viewport: i,
          afterCritical: e.afterCritical,
        }),
      h = Jj({
        draggable: p,
        impact: m,
        previousImpact: e.impact,
        draggables: l.draggables,
        droppables: l.droppables,
      });
    return {
      ...e,
      current: f,
      dimensions: { draggables: l.draggables, droppables: h },
      impact: m,
      viewport: i,
      scrollJumpRequest: s || null,
      forceShouldAnimate: s ? !1 : null,
    };
  };
function Zj(e, t) {
  return e.map((n) => t[n]);
}
var eC = ({
    impact: e,
    viewport: t,
    draggables: n,
    destination: r,
    forceShouldAnimate: o,
  }) => {
    const s = e.displaced,
      i = Zj(s.all, n),
      l = cl({
        afterDragging: i,
        destination: r,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: o,
        last: s,
      });
    return { ...e, displaced: l };
  },
  tC = ({
    impact: e,
    draggable: t,
    droppable: n,
    draggables: r,
    viewport: o,
    afterCritical: s,
  }) => {
    const i = Au({
      impact: e,
      draggable: t,
      draggables: r,
      droppable: n,
      afterCritical: s,
    });
    return qh({ pageBorderBoxCenter: i, draggable: t, viewport: o });
  },
  nC = ({ state: e, dimensions: t, viewport: n }) => {
    e.movementMode !== "SNAP" && G();
    const r = e.impact,
      o = n || e.viewport,
      s = t || e.dimensions,
      { draggables: i, droppables: l } = s,
      a = i[e.critical.draggable.id],
      c = Qt(r);
    c || G();
    const u = l[c],
      d = eC({ impact: r, viewport: o, destination: u, draggables: i }),
      f = tC({
        impact: d,
        draggable: a,
        droppable: u,
        draggables: i,
        viewport: o,
        afterCritical: e.afterCritical,
      });
    return Ii({
      impact: d,
      clientSelection: f,
      state: e,
      dimensions: s,
      viewport: o,
    });
  },
  eL = (e) => ({ index: e.index, droppableId: e.droppableId }),
  rC = ({ draggable: e, home: t, draggables: n, viewport: r }) => {
    const o = Dl(t.axis, e.displaceBy),
      s = Xs(t.descriptor.id, n),
      i = s.indexOf(e);
    i === -1 && G();
    const l = s.slice(i + 1),
      a = l.reduce((f, p) => ((f[p.descriptor.id] = !0), f), {}),
      c = {
        inVirtualList: t.descriptor.mode === "virtual",
        displacedBy: o,
        effected: a,
      };
    return {
      impact: {
        displaced: cl({
          afterDragging: l,
          destination: t,
          displacedBy: o,
          last: null,
          viewport: r.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: o,
        at: { type: "REORDER", destination: eL(e.descriptor) },
      },
      afterCritical: c,
    };
  },
  tL = (e, t) => ({
    draggables: e.draggables,
    droppables: Kh(e.droppables, t),
  }),
  nL = ({ draggable: e, offset: t, initialWindowScroll: n }) => {
    const r = oc(e.client, t),
      o = sc(r, n);
    return {
      ...e,
      placeholder: { ...e.placeholder, client: r },
      client: r,
      page: o,
    };
  },
  rL = (e) => {
    const t = e.frame;
    return t || G(), t;
  },
  oL = ({ additions: e, updatedDroppables: t, viewport: n }) => {
    const r = n.scroll.diff.value;
    return e.map((o) => {
      const s = o.descriptor.droppableId,
        i = t[s],
        a = rL(i).scroll.diff.value,
        c = ct(r, a);
      return nL({
        draggable: o,
        offset: c,
        initialWindowScroll: n.scroll.initial,
      });
    });
  },
  sL = ({ state: e, published: t }) => {
    const n = t.modified.map((v) => {
        const y = e.dimensions.droppables[v.droppableId];
        return Wh(y, v.scroll);
      }),
      r = { ...e.dimensions.droppables, ...F1(n) },
      o = B1(
        oL({
          additions: t.additions,
          updatedDroppables: r,
          viewport: e.viewport,
        })
      ),
      s = { ...e.dimensions.draggables, ...o };
    t.removals.forEach((v) => {
      delete s[v];
    });
    const i = { droppables: r, draggables: s },
      l = Qt(e.impact),
      a = l ? i.droppables[l] : null,
      c = i.draggables[e.critical.draggable.id],
      u = i.droppables[e.critical.droppable.id],
      { impact: d, afterCritical: f } = rC({
        draggable: c,
        home: u,
        draggables: s,
        viewport: e.viewport,
      }),
      p = a && a.isCombineEnabled ? e.impact : d,
      m = Z1({
        pageOffset: e.current.page.offset,
        draggable: i.draggables[e.critical.draggable.id],
        draggables: i.draggables,
        droppables: i.droppables,
        previousImpact: p,
        viewport: e.viewport,
        afterCritical: f,
      }),
      h = {
        ...e,
        phase: "DRAGGING",
        impact: m,
        onLiftImpact: d,
        dimensions: i,
        afterCritical: f,
        forceShouldAnimate: !1,
      };
    return e.phase === "COLLECTING"
      ? h
      : { ...h, phase: "DROP_PENDING", reason: e.reason, isWaiting: !1 };
  };
const yp = (e) => e.movementMode === "SNAP",
  qd = (e, t, n) => {
    const r = tL(e.dimensions, t);
    return !yp(e) || n
      ? Ii({ state: e, dimensions: r })
      : nC({ state: e, dimensions: r });
  };
function Kd(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? { ...e, scrollJumpRequest: null }
    : e;
}
const d0 = { phase: "IDLE", completed: null, shouldFlush: !1 };
var iL = (e = d0, t) => {
  if (t.type === "FLUSH") return { ...d0, shouldFlush: !0 };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && G();
    const {
        critical: n,
        clientSelection: r,
        viewport: o,
        dimensions: s,
        movementMode: i,
      } = t.payload,
      l = s.draggables[n.draggable.id],
      a = s.droppables[n.droppable.id],
      c = {
        selection: r,
        borderBoxCenter: l.client.borderBox.center,
        offset: rt,
      },
      u = {
        client: c,
        page: {
          selection: ct(c.selection, o.scroll.initial),
          borderBoxCenter: ct(c.selection, o.scroll.initial),
          offset: ct(c.selection, o.scroll.diff.value),
        },
      },
      d = ku(s.droppables).every((h) => !h.isFixedOnPage),
      { impact: f, afterCritical: p } = rC({
        draggable: l,
        home: a,
        draggables: s.draggables,
        viewport: o,
      });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: i,
      dimensions: s,
      initial: u,
      current: u,
      isWindowScrollAllowed: d,
      impact: f,
      afterCritical: p,
      onLiftImpact: f,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null,
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING"
      ? e
      : (e.phase !== "DRAGGING" && G(), { ...e, phase: "COLLECTING" });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return (
      e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || G(),
      sL({ state: e, published: t.payload })
    );
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING") return e;
    uo(e) || G();
    const { client: n } = t.payload;
    return Wr(n, e.current.client.selection)
      ? e
      : Ii({ state: e, clientSelection: n, impact: yp(e) ? e.impact : null });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return Kd(e);
    uo(e) || G();
    const { id: n, newScroll: r } = t.payload,
      o = e.dimensions.droppables[n];
    if (!o) return e;
    const s = Wh(o, r);
    return qd(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING") return e;
    uo(e) || G();
    const { id: n, isEnabled: r } = t.payload,
      o = e.dimensions.droppables[n];
    o || G(), o.isEnabled === r && G();
    const s = { ...o, isEnabled: r };
    return qd(e, s, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING") return e;
    uo(e) || G();
    const { id: n, isCombineEnabled: r } = t.payload,
      o = e.dimensions.droppables[n];
    o || G(), o.isCombineEnabled === r && G();
    const s = { ...o, isCombineEnabled: r };
    return qd(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
    uo(e) || G(), e.isWindowScrollAllowed || G();
    const n = t.payload.newScroll;
    if (Wr(e.viewport.scroll.current, n)) return Kd(e);
    const r = G1(e.viewport, n);
    return yp(e)
      ? nC({ state: e, viewport: r })
      : Ii({ state: e, viewport: r });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!uo(e)) return e;
    const n = t.payload.maxScroll;
    if (Wr(n, e.viewport.scroll.max)) return e;
    const r = { ...e.viewport, scroll: { ...e.viewport.scroll, max: n } };
    return { ...e, viewport: r };
  }
  if (
    t.type === "MOVE_UP" ||
    t.type === "MOVE_DOWN" ||
    t.type === "MOVE_LEFT" ||
    t.type === "MOVE_RIGHT"
  ) {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
    e.phase !== "DRAGGING" && G();
    const n = Vj({ state: e, type: t.type });
    return n
      ? Ii({
          state: e,
          impact: n.impact,
          clientSelection: n.clientSelection,
          scrollJumpRequest: n.scrollJumpRequest,
        })
      : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return (
      e.phase !== "COLLECTING" && G(),
      { ...e, phase: "DROP_PENDING", isWaiting: !0, reason: n }
    );
  }
  if (t.type === "DROP_ANIMATE") {
    const { completed: n, dropDuration: r, newHomeClientOffset: o } = t.payload;
    return (
      e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || G(),
      {
        phase: "DROP_ANIMATING",
        completed: n,
        dropDuration: r,
        newHomeClientOffset: o,
        dimensions: e.dimensions,
      }
    );
  }
  if (t.type === "DROP_COMPLETE") {
    const { completed: n } = t.payload;
    return { phase: "IDLE", completed: n, shouldFlush: !1 };
  }
  return e;
};
const lL = (e) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: e }),
  aL = (e) => ({ type: "LIFT", payload: e }),
  cL = (e) => ({ type: "INITIAL_PUBLISH", payload: e }),
  uL = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
  dL = () => ({ type: "COLLECTION_STARTING", payload: null }),
  fL = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
  pL = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
  mL = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
  oC = (e) => ({ type: "MOVE", payload: e }),
  hL = (e) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: e }),
  gL = (e) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e }),
  yL = () => ({ type: "MOVE_UP", payload: null }),
  vL = () => ({ type: "MOVE_DOWN", payload: null }),
  bL = () => ({ type: "MOVE_RIGHT", payload: null }),
  wL = () => ({ type: "MOVE_LEFT", payload: null }),
  Xh = () => ({ type: "FLUSH", payload: null }),
  xL = (e) => ({ type: "DROP_ANIMATE", payload: e }),
  Qh = (e) => ({ type: "DROP_COMPLETE", payload: e }),
  sC = (e) => ({ type: "DROP", payload: e }),
  SL = (e) => ({ type: "DROP_PENDING", payload: e }),
  iC = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
var CL =
    (e) =>
    ({ getState: t, dispatch: n }) =>
    (r) =>
    (o) => {
      if (o.type !== "LIFT") {
        r(o);
        return;
      }
      const { id: s, clientSelection: i, movementMode: l } = o.payload,
        a = t();
      a.phase === "DROP_ANIMATING" && n(Qh({ completed: a.completed })),
        t().phase !== "IDLE" && G(),
        n(Xh()),
        n(lL({ draggableId: s, movementMode: l }));
      const u = {
          draggableId: s,
          scrollOptions: { shouldPublishImmediately: l === "SNAP" },
        },
        { critical: d, dimensions: f, viewport: p } = e.startPublishing(u);
      n(
        cL({
          critical: d,
          dimensions: f,
          clientSelection: i,
          movementMode: l,
          viewport: p,
        })
      );
    },
  EL = (e) => () => (t) => (n) => {
    n.type === "INITIAL_PUBLISH" && e.dragging(),
      n.type === "DROP_ANIMATE" &&
        e.dropping(n.payload.completed.result.reason),
      (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(),
      t(n);
  };
const Jh = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  ul = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  lC = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  lo = `${lC.outOfTheWay}s ${Jh.outOfTheWay}`,
  ji = {
    fluid: `opacity ${lo}`,
    snap: `transform ${lo}, opacity ${lo}`,
    drop: (e) => {
      const t = `${e}s ${Jh.drop}`;
      return `transform ${t}, opacity ${t}`;
    },
    outOfTheWay: `transform ${lo}`,
    placeholder: `height ${lo}, width ${lo}, margin ${lo}`,
  },
  f0 = (e) => (Wr(e, rt) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
  vp = {
    moveTo: f0,
    drop: (e, t) => {
      const n = f0(e);
      if (n) return t ? `${n} scale(${ul.scale.drop})` : n;
    },
  },
  { minDropTime: bp, maxDropTime: aC } = lC,
  DL = aC - bp,
  p0 = 1500,
  RL = 0.6;
var PL = ({ current: e, destination: t, reason: n }) => {
    const r = ll(e, t);
    if (r <= 0) return bp;
    if (r >= p0) return aC;
    const o = r / p0,
      s = bp + DL * o,
      i = n === "CANCEL" ? s * RL : s;
    return Number(i.toFixed(2));
  },
  NL = ({
    impact: e,
    draggable: t,
    dimensions: n,
    viewport: r,
    afterCritical: o,
  }) => {
    const { draggables: s, droppables: i } = n,
      l = Qt(e),
      a = l ? i[l] : null,
      c = i[t.descriptor.droppableId],
      u = tC({
        impact: e,
        draggable: t,
        draggables: s,
        afterCritical: o,
        droppable: a || c,
        viewport: r,
      });
    return qt(u, t.client.borderBox.center);
  },
  _L = ({
    draggables: e,
    reason: t,
    lastImpact: n,
    home: r,
    viewport: o,
    onLiftImpact: s,
  }) =>
    !n.at || t !== "DROP"
      ? {
          impact: eC({
            draggables: e,
            impact: s,
            destination: r,
            viewport: o,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : n.at.type === "REORDER"
      ? { impact: n, didDropInsideDroppable: !0 }
      : { impact: { ...n, displaced: al }, didDropInsideDroppable: !0 };
const OL =
  ({ getState: e, dispatch: t }) =>
  (n) =>
  (r) => {
    if (r.type !== "DROP") {
      n(r);
      return;
    }
    const o = e(),
      s = r.payload.reason;
    if (o.phase === "COLLECTING") {
      t(SL({ reason: s }));
      return;
    }
    if (o.phase === "IDLE") return;
    o.phase === "DROP_PENDING" && o.isWaiting && G(),
      o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || G();
    const l = o.critical,
      a = o.dimensions,
      c = a.draggables[o.critical.draggable.id],
      { impact: u, didDropInsideDroppable: d } = _L({
        reason: s,
        lastImpact: o.impact,
        afterCritical: o.afterCritical,
        onLiftImpact: o.onLiftImpact,
        home: o.dimensions.droppables[o.critical.droppable.id],
        viewport: o.viewport,
        draggables: o.dimensions.draggables,
      }),
      f = d ? Uh(u) : null,
      p = d ? Tu(u) : null,
      m = { index: l.draggable.index, droppableId: l.droppable.id },
      h = {
        draggableId: c.descriptor.id,
        type: c.descriptor.type,
        source: m,
        reason: s,
        mode: o.movementMode,
        destination: f,
        combine: p,
      },
      x = NL({
        impact: u,
        draggable: c,
        dimensions: a,
        viewport: o.viewport,
        afterCritical: o.afterCritical,
      }),
      v = {
        critical: o.critical,
        afterCritical: o.afterCritical,
        result: h,
        impact: u,
      };
    if (!(!Wr(o.current.client.offset, x) || !!h.combine)) {
      t(Qh({ completed: v }));
      return;
    }
    const b = PL({
      current: o.current.client.offset,
      destination: x,
      reason: s,
    });
    t(xL({ newHomeClientOffset: x, dropDuration: b, completed: v }));
  };
var kL = OL,
  cC = () => ({ x: window.pageXOffset, y: window.pageYOffset });
function TL(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: (t) => {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function $L({ onWindowScroll: e }) {
  function t() {
    e(cC());
  }
  const n = il(t),
    r = TL(n);
  let o = Vr;
  function s() {
    return o !== Vr;
  }
  function i() {
    s() && G(), (o = dn(window, [r]));
  }
  function l() {
    s() || G(), n.cancel(), o(), (o = Vr);
  }
  return { start: i, stop: l, isActive: s };
}
const AL = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  IL = (e) => {
    const t = $L({
      onWindowScroll: (n) => {
        e.dispatch(hL({ newScroll: n }));
      },
    });
    return (n) => (r) => {
      !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(),
        t.isActive() && AL(r) && t.stop(),
        n(r);
    };
  };
var jL = IL,
  LL = (e) => {
    let t = !1,
      n = !1;
    const r = setTimeout(() => {
        n = !0;
      }),
      o = (s) => {
        t || n || ((t = !0), e(s), clearTimeout(r));
      };
    return (o.wasCalled = () => t), o;
  },
  ML = () => {
    const e = [],
      t = (o) => {
        const s = e.findIndex((l) => l.timerId === o);
        s === -1 && G();
        const [i] = e.splice(s, 1);
        i.callback();
      };
    return {
      add: (o) => {
        const s = setTimeout(() => t(s)),
          i = { timerId: s, callback: o };
        e.push(i);
      },
      flush: () => {
        if (!e.length) return;
        const o = [...e];
        (e.length = 0),
          o.forEach((s) => {
            clearTimeout(s.timerId), s.callback();
          });
      },
    };
  };
const FL = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
      ? !1
      : e.droppableId === t.droppableId && e.index === t.index,
  BL = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
      ? !1
      : e.draggableId === t.draggableId && e.droppableId === t.droppableId,
  zL = (e, t) => {
    if (e === t) return !0;
    const n =
        e.draggable.id === t.draggable.id &&
        e.draggable.droppableId === t.draggable.droppableId &&
        e.draggable.type === t.draggable.type &&
        e.draggable.index === t.draggable.index,
      r =
        e.droppable.id === t.droppable.id &&
        e.droppable.type === t.droppable.type;
    return n && r;
  },
  hi = (e, t) => {
    t();
  },
  ra = (e, t) => ({
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: { droppableId: e.droppable.id, index: e.draggable.index },
    mode: t,
  });
function Xd(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = LL(n);
  e(t, { announce: o }), o.wasCalled() || n(r(t));
}
var VL = (e, t) => {
    const n = ML();
    let r = null;
    const o = (d, f) => {
        r && G(),
          hi("onBeforeCapture", () => {
            const p = e().onBeforeCapture;
            p && p({ draggableId: d, mode: f });
          });
      },
      s = (d, f) => {
        r && G(),
          hi("onBeforeDragStart", () => {
            const p = e().onBeforeDragStart;
            p && p(ra(d, f));
          });
      },
      i = (d, f) => {
        r && G();
        const p = ra(d, f);
        (r = {
          mode: f,
          lastCritical: d,
          lastLocation: p.source,
          lastCombine: null,
        }),
          n.add(() => {
            hi("onDragStart", () => Xd(e().onDragStart, p, t, Ca.onDragStart));
          });
      },
      l = (d, f) => {
        const p = Uh(f),
          m = Tu(f);
        r || G();
        const h = !zL(d, r.lastCritical);
        h && (r.lastCritical = d);
        const x = !FL(r.lastLocation, p);
        x && (r.lastLocation = p);
        const v = !BL(r.lastCombine, m);
        if ((v && (r.lastCombine = m), !h && !x && !v)) return;
        const y = { ...ra(d, r.mode), combine: m, destination: p };
        n.add(() => {
          hi("onDragUpdate", () => Xd(e().onDragUpdate, y, t, Ca.onDragUpdate));
        });
      },
      a = () => {
        r || G(), n.flush();
      },
      c = (d) => {
        r || G(),
          (r = null),
          hi("onDragEnd", () => Xd(e().onDragEnd, d, t, Ca.onDragEnd));
      };
    return {
      beforeCapture: o,
      beforeStart: s,
      start: i,
      update: l,
      flush: a,
      drop: c,
      abort: () => {
        if (!r) return;
        const d = {
          ...ra(r.lastCritical, r.mode),
          combine: null,
          destination: null,
          reason: "CANCEL",
        };
        c(d);
      },
    };
  },
  WL = (e, t) => {
    const n = VL(e, t);
    return (r) => (o) => (s) => {
      if (s.type === "BEFORE_INITIAL_CAPTURE") {
        n.beforeCapture(s.payload.draggableId, s.payload.movementMode);
        return;
      }
      if (s.type === "INITIAL_PUBLISH") {
        const l = s.payload.critical;
        n.beforeStart(l, s.payload.movementMode),
          o(s),
          n.start(l, s.payload.movementMode);
        return;
      }
      if (s.type === "DROP_COMPLETE") {
        const l = s.payload.completed.result;
        n.flush(), o(s), n.drop(l);
        return;
      }
      if ((o(s), s.type === "FLUSH")) {
        n.abort();
        return;
      }
      const i = r.getState();
      i.phase === "DRAGGING" && n.update(i.critical, i.impact);
    };
  };
const UL = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && G(),
    e.dispatch(Qh({ completed: r.completed }));
};
var HL = UL;
const GL = (e) => {
  let t = null,
    n = null;
  function r() {
    n && (cancelAnimationFrame(n), (n = null)), t && (t(), (t = null));
  }
  return (o) => (s) => {
    if (
      ((s.type === "FLUSH" ||
        s.type === "DROP_COMPLETE" ||
        s.type === "DROP_ANIMATION_FINISHED") &&
        r(),
      o(s),
      s.type !== "DROP_ANIMATE")
    )
      return;
    const i = {
      eventName: "scroll",
      options: { capture: !0, passive: !1, once: !0 },
      fn: function () {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(iC());
      },
    };
    n = requestAnimationFrame(() => {
      (n = null), (t = dn(window, [i]));
    });
  };
};
var YL = GL,
  qL = (e) => () => (t) => (n) => {
    (n.type === "DROP_COMPLETE" ||
      n.type === "FLUSH" ||
      n.type === "DROP_ANIMATE") &&
      e.stopPublishing(),
      t(n);
  },
  KL = (e) => {
    let t = !1;
    return () => (n) => (r) => {
      if (r.type === "INITIAL_PUBLISH") {
        (t = !0),
          e.tryRecordFocus(r.payload.critical.draggable.id),
          n(r),
          e.tryRestoreFocusRecorded();
        return;
      }
      if ((n(r), !!t)) {
        if (r.type === "FLUSH") {
          (t = !1), e.tryRestoreFocusRecorded();
          return;
        }
        if (r.type === "DROP_COMPLETE") {
          t = !1;
          const o = r.payload.completed.result;
          o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId),
            e.tryRestoreFocusRecorded();
        }
      }
    };
  };
const XL = (e) =>
  e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var QL = (e) => (t) => (n) => (r) => {
  if (XL(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && G(), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const JL = (e) => (t) => (n) => {
  if ((t(n), n.type !== "PUBLISH_WHILE_DRAGGING")) return;
  const r = e.getState();
  r.phase === "DROP_PENDING" &&
    (r.isWaiting || e.dispatch(sC({ reason: r.reason })));
};
var ZL = JL;
const e2 = g1;
var t2 = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: s,
}) =>
  h1(
    iL,
    e2(AA(EL(n), qL(e), CL(e), kL, HL, YL, ZL, QL(s), jL, KL(t), WL(r, o)))
  );
const Qd = () => ({ additions: {}, removals: {}, modified: {} });
function n2({ registry: e, callbacks: t }) {
  let n = Qd(),
    r = null;
  const o = () => {
    r ||
      (t.collectionStarting(),
      (r = requestAnimationFrame(() => {
        r = null;
        const { additions: a, removals: c, modified: u } = n,
          d = Object.keys(a)
            .map((m) => e.draggable.getById(m).getDimension(rt))
            .sort((m, h) => m.descriptor.index - h.descriptor.index),
          f = Object.keys(u).map((m) => {
            const x = e.droppable.getById(m).callbacks.getScrollWhileDragging();
            return { droppableId: m, scroll: x };
          }),
          p = { additions: d, removals: Object.keys(c), modified: f };
        (n = Qd()), t.publish(p);
      })));
  };
  return {
    add: (a) => {
      const c = a.descriptor.id;
      (n.additions[c] = a),
        (n.modified[a.descriptor.droppableId] = !0),
        n.removals[c] && delete n.removals[c],
        o();
    },
    remove: (a) => {
      const c = a.descriptor;
      (n.removals[c.id] = !0),
        (n.modified[c.droppableId] = !0),
        n.additions[c.id] && delete n.additions[c.id],
        o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), (r = null), (n = Qd()));
    },
  };
}
var uC = ({ scrollHeight: e, scrollWidth: t, height: n, width: r }) => {
    const o = qt({ x: t, y: e }, { x: r, y: n });
    return { x: Math.max(0, o.x), y: Math.max(0, o.y) };
  },
  dC = () => {
    const e = document.documentElement;
    return e || G(), e;
  },
  fC = () => {
    const e = dC();
    return uC({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  r2 = () => {
    const e = cC(),
      t = fC(),
      n = e.y,
      r = e.x,
      o = dC(),
      s = o.clientWidth,
      i = o.clientHeight,
      l = r + s,
      a = n + i;
    return {
      frame: Nn({ top: n, left: r, right: l, bottom: a }),
      scroll: {
        initial: e,
        current: e,
        max: t,
        diff: { value: rt, displacement: rt },
      },
    };
  },
  o2 = ({ critical: e, scrollOptions: t, registry: n }) => {
    const r = r2(),
      o = r.scroll.current,
      s = e.droppable,
      i = n.droppable
        .getAllByType(s.type)
        .map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)),
      l = n.draggable
        .getAllByType(e.draggable.type)
        .map((u) => u.getDimension(o));
    return {
      dimensions: { draggables: B1(l), droppables: F1(i) },
      critical: e,
      viewport: r,
    };
  };
function m0(e, t, n) {
  return !(
    n.descriptor.id === t.id ||
    n.descriptor.type !== t.type ||
    e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual"
  );
}
var s2 = (e, t) => {
    let n = null;
    const r = n2({
        callbacks: {
          publish: t.publishWhileDragging,
          collectionStarting: t.collectionStarting,
        },
        registry: e,
      }),
      o = (f, p) => {
        e.droppable.exists(f) || G(),
          n && t.updateDroppableIsEnabled({ id: f, isEnabled: p });
      },
      s = (f, p) => {
        n &&
          (e.droppable.exists(f) || G(),
          t.updateDroppableIsCombineEnabled({ id: f, isCombineEnabled: p }));
      },
      i = (f, p) => {
        n &&
          (e.droppable.exists(f) || G(),
          t.updateDroppableScroll({ id: f, newScroll: p }));
      },
      l = (f, p) => {
        n && e.droppable.getById(f).callbacks.scroll(p);
      },
      a = () => {
        if (!n) return;
        r.stop();
        const f = n.critical.droppable;
        e.droppable
          .getAllByType(f.type)
          .forEach((p) => p.callbacks.dragStopped()),
          n.unsubscribe(),
          (n = null);
      },
      c = (f) => {
        n || G();
        const p = n.critical.draggable;
        f.type === "ADDITION" && m0(e, p, f.value) && r.add(f.value),
          f.type === "REMOVAL" && m0(e, p, f.value) && r.remove(f.value);
      };
    return {
      updateDroppableIsEnabled: o,
      updateDroppableIsCombineEnabled: s,
      scrollDroppable: l,
      updateDroppableScroll: i,
      startPublishing: (f) => {
        n && G();
        const p = e.draggable.getById(f.draggableId),
          m = e.droppable.getById(p.descriptor.droppableId),
          h = { draggable: p.descriptor, droppable: m.descriptor },
          x = e.subscribe(c);
        return (
          (n = { critical: h, unsubscribe: x }),
          o2({ critical: h, registry: e, scrollOptions: f.scrollOptions })
        );
      },
      stopPublishing: a,
    };
  },
  pC = (e, t) =>
    e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
      ? !1
      : e.completed.result.reason === "DROP",
  i2 = (e) => {
    window.scrollBy(e.x, e.y);
  };
const l2 = tt((e) => ku(e).filter((t) => !(!t.isEnabled || !t.frame))),
  a2 = (e, t) =>
    l2(t).find((r) => (r.frame || G(), X1(r.frame.pageMarginBox)(e))) || null;
var c2 = ({ center: e, destination: t, droppables: n }) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return a2(e, n);
};
const dl = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  disabled: !1,
};
var u2 = (e, t, n = () => dl) => {
    const r = n(),
      o = e[t.size] * r.startFromPercentage,
      s = e[t.size] * r.maxScrollAtPercentage;
    return { startScrollingFrom: o, maxScrollValueAt: s };
  },
  mC = ({ startOfRange: e, endOfRange: t, current: n }) => {
    const r = t - e;
    return r === 0 ? 0 : (n - e) / r;
  },
  Zh = 1,
  d2 = (e, t, n = () => dl) => {
    const r = n();
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return r.maxPixelScroll;
    if (e === t.startScrollingFrom) return Zh;
    const s =
        1 -
        mC({
          startOfRange: t.maxScrollValueAt,
          endOfRange: t.startScrollingFrom,
          current: e,
        }),
      i = r.maxPixelScroll * r.ease(s);
    return Math.ceil(i);
  },
  f2 = (e, t, n) => {
    const r = n(),
      o = r.durationDampening.accelerateAt,
      s = r.durationDampening.stopDampeningAt,
      i = t,
      l = s,
      c = Date.now() - i;
    if (c >= s) return e;
    if (c < o) return Zh;
    const u = mC({ startOfRange: o, endOfRange: l, current: c }),
      d = e * r.ease(u);
    return Math.ceil(d);
  },
  h0 = ({
    distanceToEdge: e,
    thresholds: t,
    dragStartTime: n,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: o,
  }) => {
    const s = d2(e, t, o);
    return s === 0 ? 0 : r ? Math.max(f2(s, n, o), Zh) : s;
  },
  g0 = ({
    container: e,
    distanceToEdges: t,
    dragStartTime: n,
    axis: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s,
  }) => {
    const i = u2(e, r, s);
    return t[r.end] < t[r.start]
      ? h0({
          distanceToEdge: t[r.end],
          thresholds: i,
          dragStartTime: n,
          shouldUseTimeDampening: o,
          getAutoScrollerOptions: s,
        })
      : -1 *
          h0({
            distanceToEdge: t[r.start],
            thresholds: i,
            dragStartTime: n,
            shouldUseTimeDampening: o,
            getAutoScrollerOptions: s,
          });
  },
  p2 = ({ container: e, subject: t, proposedScroll: n }) => {
    const r = t.height > e.height,
      o = t.width > e.width;
    return !o && !r ? n : o && r ? null : { x: o ? 0 : n.x, y: r ? 0 : n.y };
  };
const m2 = M1((e) => (e === 0 ? 0 : e));
var hC = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s,
}) => {
  const i = {
      top: r.y - t.top,
      right: t.right - r.x,
      bottom: t.bottom - r.y,
      left: r.x - t.left,
    },
    l = g0({
      container: t,
      distanceToEdges: i,
      dragStartTime: e,
      axis: Hh,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: s,
    }),
    a = g0({
      container: t,
      distanceToEdges: i,
      dragStartTime: e,
      axis: W1,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: s,
    }),
    c = m2({ x: a, y: l });
  if (Wr(c, rt)) return null;
  const u = p2({ container: t, subject: n, proposedScroll: c });
  return u ? (Wr(u, rt) ? null : u) : null;
};
const h2 = M1((e) => (e === 0 ? 0 : e > 0 ? 1 : -1)),
  eg = (() => {
    const e = (t, n) => (t < 0 ? t : t > n ? t - n : 0);
    return ({ current: t, max: n, change: r }) => {
      const o = ct(t, r),
        s = { x: e(o.x, n.x), y: e(o.y, n.y) };
      return Wr(s, rt) ? null : s;
    };
  })(),
  gC = ({ max: e, current: t, change: n }) => {
    const r = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
      o = h2(n),
      s = eg({ max: r, current: t, change: o });
    return !s || (o.x !== 0 && s.x === 0) || (o.y !== 0 && s.y === 0);
  },
  tg = (e, t) =>
    gC({ current: e.scroll.current, max: e.scroll.max, change: t }),
  g2 = (e, t) => {
    if (!tg(e, t)) return null;
    const n = e.scroll.max,
      r = e.scroll.current;
    return eg({ current: r, max: n, change: t });
  },
  ng = (e, t) => {
    const n = e.frame;
    return n
      ? gC({ current: n.scroll.current, max: n.scroll.max, change: t })
      : !1;
  },
  y2 = (e, t) => {
    const n = e.frame;
    return !n || !ng(e, t)
      ? null
      : eg({ current: n.scroll.current, max: n.scroll.max, change: t });
  };
var v2 = ({
    viewport: e,
    subject: t,
    center: n,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s,
  }) => {
    const i = hC({
      dragStartTime: r,
      container: e.frame,
      subject: t,
      center: n,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: s,
    });
    return i && tg(e, i) ? i : null;
  },
  b2 = ({
    droppable: e,
    subject: t,
    center: n,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s,
  }) => {
    const i = e.frame;
    if (!i) return null;
    const l = hC({
      dragStartTime: r,
      container: i.pageMarginBox,
      subject: t,
      center: n,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: s,
    });
    return l && ng(e, l) ? l : null;
  },
  y0 = ({
    state: e,
    dragStartTime: t,
    shouldUseTimeDampening: n,
    scrollWindow: r,
    scrollDroppable: o,
    getAutoScrollerOptions: s,
  }) => {
    const i = e.current.page.borderBoxCenter,
      a = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
    if (e.isWindowScrollAllowed) {
      const d = e.viewport,
        f = v2({
          dragStartTime: t,
          viewport: d,
          subject: a,
          center: i,
          shouldUseTimeDampening: n,
          getAutoScrollerOptions: s,
        });
      if (f) {
        r(f);
        return;
      }
    }
    const c = c2({
      center: i,
      destination: Qt(e.impact),
      droppables: e.dimensions.droppables,
    });
    if (!c) return;
    const u = b2({
      dragStartTime: t,
      droppable: c,
      subject: a,
      center: i,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: s,
    });
    u && o(c.descriptor.id, u);
  },
  w2 = ({
    scrollWindow: e,
    scrollDroppable: t,
    getAutoScrollerOptions: n = () => dl,
  }) => {
    const r = il(e),
      o = il(t);
    let s = null;
    const i = (c) => {
      s || G();
      const { shouldUseTimeDampening: u, dragStartTime: d } = s;
      y0({
        state: c,
        scrollWindow: r,
        scrollDroppable: o,
        dragStartTime: d,
        shouldUseTimeDampening: u,
        getAutoScrollerOptions: n,
      });
    };
    return {
      start: (c) => {
        s && G();
        const u = Date.now();
        let d = !1;
        const f = () => {
          d = !0;
        };
        y0({
          state: c,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: f,
          scrollDroppable: f,
          getAutoScrollerOptions: n,
        }),
          (s = { dragStartTime: u, shouldUseTimeDampening: d }),
          d && i(c);
      },
      stop: () => {
        s && (r.cancel(), o.cancel(), (s = null));
      },
      scroll: i,
    };
  },
  x2 = ({ move: e, scrollDroppable: t, scrollWindow: n }) => {
    const r = (l, a) => {
        const c = ct(l.current.client.selection, a);
        e({ client: c });
      },
      o = (l, a) => {
        if (!ng(l, a)) return a;
        const c = y2(l, a);
        if (!c) return t(l.descriptor.id, a), null;
        const u = qt(a, c);
        return t(l.descriptor.id, u), qt(a, u);
      },
      s = (l, a, c) => {
        if (!l || !tg(a, c)) return c;
        const u = g2(a, c);
        if (!u) return n(c), null;
        const d = qt(c, u);
        return n(d), qt(c, d);
      };
    return (l) => {
      const a = l.scrollJumpRequest;
      if (!a) return;
      const c = Qt(l.impact);
      c || G();
      const u = o(l.dimensions.droppables[c], a);
      if (!u) return;
      const d = l.viewport,
        f = s(l.isWindowScrollAllowed, d, u);
      f && r(l, f);
    };
  },
  S2 = ({
    scrollDroppable: e,
    scrollWindow: t,
    move: n,
    getAutoScrollerOptions: r,
  }) => {
    const o = w2({
        scrollWindow: t,
        scrollDroppable: e,
        getAutoScrollerOptions: r,
      }),
      s = x2({ move: n, scrollWindow: t, scrollDroppable: e });
    return {
      scroll: (a) => {
        if (!(r().disabled || a.phase !== "DRAGGING")) {
          if (a.movementMode === "FLUID") {
            o.scroll(a);
            return;
          }
          a.scrollJumpRequest && s(a);
        }
      },
      start: o.start,
      stop: o.stop,
    };
  };
const Is = "data-rfd",
  js = (() => {
    const e = `${Is}-drag-handle`;
    return {
      base: e,
      draggableId: `${e}-draggable-id`,
      contextId: `${e}-context-id`,
    };
  })(),
  wp = (() => {
    const e = `${Is}-draggable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  C2 = (() => {
    const e = `${Is}-droppable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  v0 = { contextId: `${Is}-scroll-container-context-id` },
  E2 = (e) => (t) => `[${t}="${e}"]`,
  gi = (e, t) =>
    e
      .map((n) => {
        const r = n.styles[t];
        return r ? `${n.selector} { ${r} }` : "";
      })
      .join(" "),
  D2 = "pointer-events: none;";
var R2 = (e) => {
  const t = E2(e),
    n = (() => {
      const l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
      return {
        selector: t(js.contextId),
        styles: {
          always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
          resting: l,
          dragging: D2,
          dropAnimating: l,
        },
      };
    })(),
    r = (() => {
      const l = `
      transition: ${ji.outOfTheWay};
    `;
      return {
        selector: t(wp.contextId),
        styles: { dragging: l, dropAnimating: l, userCancel: l },
      };
    })(),
    o = {
      selector: t(C2.contextId),
      styles: { always: "overflow-anchor: none;" },
    },
    i = [
      r,
      n,
      o,
      {
        selector: "body",
        styles: {
          dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
        },
      },
    ];
  return {
    always: gi(i, "always"),
    resting: gi(i, "resting"),
    dragging: gi(i, "dragging"),
    dropAnimating: gi(i, "dropAnimating"),
    userCancel: gi(i, "userCancel"),
  };
};
const P2 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? w.useLayoutEffect
    : w.useEffect;
var Jt = P2;
const Jd = () => {
    const e = document.querySelector("head");
    return e || G(), e;
  },
  b0 = (e) => {
    const t = document.createElement("style");
    return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
  };
function N2(e, t) {
  const n = ge(() => R2(e), [e]),
    r = w.useRef(null),
    o = w.useRef(null),
    s = re(
      tt((d) => {
        const f = o.current;
        f || G(), (f.textContent = d);
      }),
      []
    ),
    i = re((d) => {
      const f = r.current;
      f || G(), (f.textContent = d);
    }, []);
  Jt(() => {
    (!r.current && !o.current) || G();
    const d = b0(t),
      f = b0(t);
    return (
      (r.current = d),
      (o.current = f),
      d.setAttribute(`${Is}-always`, e),
      f.setAttribute(`${Is}-dynamic`, e),
      Jd().appendChild(d),
      Jd().appendChild(f),
      i(n.always),
      s(n.resting),
      () => {
        const p = (m) => {
          const h = m.current;
          h || G(), Jd().removeChild(h), (m.current = null);
        };
        p(r), p(o);
      }
    );
  }, [t, i, s, n.always, n.resting, e]);
  const l = re(() => s(n.dragging), [s, n.dragging]),
    a = re(
      (d) => {
        if (d === "DROP") {
          s(n.dropAnimating);
          return;
        }
        s(n.userCancel);
      },
      [s, n.dropAnimating, n.userCancel]
    ),
    c = re(() => {
      o.current && s(n.resting);
    }, [s, n.resting]);
  return ge(() => ({ dragging: l, dropping: a, resting: c }), [l, a, c]);
}
function yC(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var vC = (e) =>
  e && e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView
    : window;
function Iu(e) {
  return e instanceof vC(e).HTMLElement;
}
function _2(e, t) {
  const n = `[${js.contextId}="${e}"]`,
    r = yC(document, n);
  if (!r.length) return null;
  const o = r.find((s) => s.getAttribute(js.draggableId) === t);
  return !o || !Iu(o) ? null : o;
}
function O2(e) {
  const t = w.useRef({}),
    n = w.useRef(null),
    r = w.useRef(null),
    o = w.useRef(!1),
    s = re(function (f, p) {
      const m = { id: f, focus: p };
      return (
        (t.current[f] = m),
        function () {
          const x = t.current;
          x[f] !== m && delete x[f];
        }
      );
    }, []),
    i = re(
      function (f) {
        const p = _2(e, f);
        p && p !== document.activeElement && p.focus();
      },
      [e]
    ),
    l = re(function (f, p) {
      n.current === f && (n.current = p);
    }, []),
    a = re(
      function () {
        r.current ||
          (o.current &&
            (r.current = requestAnimationFrame(() => {
              r.current = null;
              const f = n.current;
              f && i(f);
            })));
      },
      [i]
    ),
    c = re(function (f) {
      n.current = null;
      const p = document.activeElement;
      p && p.getAttribute(js.draggableId) === f && (n.current = f);
    }, []);
  return (
    Jt(
      () => (
        (o.current = !0),
        function () {
          o.current = !1;
          const f = r.current;
          f && cancelAnimationFrame(f);
        }
      ),
      []
    ),
    ge(
      () => ({
        register: s,
        tryRecordFocus: c,
        tryRestoreFocusRecorded: a,
        tryShiftRecord: l,
      }),
      [s, c, a, l]
    )
  );
}
function k2() {
  const e = { draggables: {}, droppables: {} },
    t = [];
  function n(d) {
    return (
      t.push(d),
      function () {
        const p = t.indexOf(d);
        p !== -1 && t.splice(p, 1);
      }
    );
  }
  function r(d) {
    t.length && t.forEach((f) => f(d));
  }
  function o(d) {
    return e.draggables[d] || null;
  }
  function s(d) {
    const f = o(d);
    return f || G(), f;
  }
  const i = {
    register: (d) => {
      (e.draggables[d.descriptor.id] = d), r({ type: "ADDITION", value: d });
    },
    update: (d, f) => {
      const p = e.draggables[f.descriptor.id];
      p &&
        p.uniqueId === d.uniqueId &&
        (delete e.draggables[f.descriptor.id],
        (e.draggables[d.descriptor.id] = d));
    },
    unregister: (d) => {
      const f = d.descriptor.id,
        p = o(f);
      p &&
        d.uniqueId === p.uniqueId &&
        (delete e.draggables[f],
        e.droppables[d.descriptor.droppableId] &&
          r({ type: "REMOVAL", value: d }));
    },
    getById: s,
    findById: o,
    exists: (d) => !!o(d),
    getAllByType: (d) =>
      Object.values(e.draggables).filter((f) => f.descriptor.type === d),
  };
  function l(d) {
    return e.droppables[d] || null;
  }
  function a(d) {
    const f = l(d);
    return f || G(), f;
  }
  const c = {
    register: (d) => {
      e.droppables[d.descriptor.id] = d;
    },
    unregister: (d) => {
      const f = l(d.descriptor.id);
      f && d.uniqueId === f.uniqueId && delete e.droppables[d.descriptor.id];
    },
    getById: a,
    findById: l,
    exists: (d) => !!l(d),
    getAllByType: (d) =>
      Object.values(e.droppables).filter((f) => f.descriptor.type === d),
  };
  function u() {
    (e.draggables = {}), (e.droppables = {}), (t.length = 0);
  }
  return { draggable: i, droppable: c, subscribe: n, clean: u };
}
function T2() {
  const e = ge(k2, []);
  return (
    w.useEffect(
      () =>
        function () {
          be.version.startsWith("16") || be.version.startsWith("17")
            ? requestAnimationFrame(e.clean)
            : e.clean();
        },
      [e]
    ),
    e
  );
}
var rg = be.createContext(null),
  cc = () => {
    const e = document.body;
    return e || G(), e;
  };
const $2 = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)",
};
var A2 = $2;
const I2 = (e) => `rfd-announcement-${e}`;
function j2(e) {
  const t = ge(() => I2(e), [e]),
    n = w.useRef(null);
  return (
    w.useEffect(
      function () {
        const s = document.createElement("div");
        return (
          (n.current = s),
          (s.id = t),
          s.setAttribute("aria-live", "assertive"),
          s.setAttribute("aria-atomic", "true"),
          dr(s.style, A2),
          cc().appendChild(s),
          function () {
            setTimeout(function () {
              const a = cc();
              a.contains(s) && a.removeChild(s),
                s === n.current && (n.current = null);
            });
          }
        );
      },
      [t]
    ),
    re((o) => {
      const s = n.current;
      if (s) {
        s.textContent = o;
        return;
      }
    }, [])
  );
}
let L2 = 0;
const bC = { separator: "::" };
function M2(e, t = bC) {
  return ge(() => `${e}${t.separator}${L2++}`, [t.separator, e]);
}
function F2(e, t = bC) {
  const n = be.useId();
  return ge(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var og = "useId" in be ? F2 : M2;
function B2({ contextId: e, uniqueId: t }) {
  return `rfd-hidden-text-${e}-${t}`;
}
function z2({ contextId: e, text: t }) {
  const n = og("hidden-text", { separator: "-" }),
    r = ge(() => B2({ contextId: e, uniqueId: n }), [n, e]);
  return (
    w.useEffect(
      function () {
        const s = document.createElement("div");
        return (
          (s.id = r),
          (s.textContent = t),
          (s.style.display = "none"),
          cc().appendChild(s),
          function () {
            const l = cc();
            l.contains(s) && l.removeChild(s);
          }
        );
      },
      [r, t]
    ),
    r
  );
}
var ju = be.createContext(null);
function wC(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    t
  );
}
function V2() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(i) {
    return i === e;
  }
  function r(i) {
    e && G();
    const l = { abandon: i };
    return (e = l), l;
  }
  function o() {
    e || G(), (e = null);
  }
  function s() {
    e && (e.abandon(), o());
  }
  return { isClaimed: t, isActive: n, claim: r, release: o, tryAbandon: s };
}
function fl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const W2 = 9,
  U2 = 13,
  sg = 27,
  xC = 32,
  H2 = 33,
  G2 = 34,
  Y2 = 35,
  q2 = 36,
  K2 = 37,
  X2 = 38,
  Q2 = 39,
  J2 = 40,
  Z2 = { [U2]: !0, [W2]: !0 };
var SC = (e) => {
  Z2[e.keyCode] && e.preventDefault();
};
const eM = (() => {
  const e = "visibilitychange";
  return typeof document > "u"
    ? e
    : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
        (r) => `on${r}` in document
      ) || e;
})();
var Lu = eM;
const CC = 0,
  w0 = 5;
function tM(e, t) {
  return Math.abs(t.x - e.x) >= w0 || Math.abs(t.y - e.y) >= w0;
}
const x0 = { type: "IDLE" };
function nM({ cancel: e, completed: t, getPhase: n, setPhase: r }) {
  return [
    {
      eventName: "mousemove",
      fn: (o) => {
        const { button: s, clientX: i, clientY: l } = o;
        if (s !== CC) return;
        const a = { x: i, y: l },
          c = n();
        if (c.type === "DRAGGING") {
          o.preventDefault(), c.actions.move(a);
          return;
        }
        c.type !== "PENDING" && G();
        const u = c.point;
        if (!tM(u, a)) return;
        o.preventDefault();
        const d = c.actions.fluidLift(a);
        r({ type: "DRAGGING", actions: d });
      },
    },
    {
      eventName: "mouseup",
      fn: (o) => {
        const s = n();
        if (s.type !== "DRAGGING") {
          e();
          return;
        }
        o.preventDefault(), s.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "mousedown",
      fn: (o) => {
        n().type === "DRAGGING" && o.preventDefault(), e();
      },
    },
    {
      eventName: "keydown",
      fn: (o) => {
        if (n().type === "PENDING") {
          e();
          return;
        }
        if (o.keyCode === sg) {
          o.preventDefault(), e();
          return;
        }
        SC(o);
      },
    },
    { eventName: "resize", fn: e },
    {
      eventName: "scroll",
      options: { passive: !0, capture: !1 },
      fn: () => {
        n().type === "PENDING" && e();
      },
    },
    {
      eventName: "webkitmouseforcedown",
      fn: (o) => {
        const s = n();
        if ((s.type === "IDLE" && G(), s.actions.shouldRespectForcePress())) {
          e();
          return;
        }
        o.preventDefault();
      },
    },
    { eventName: Lu, fn: e },
  ];
}
function rM(e) {
  const t = w.useRef(x0),
    n = w.useRef(Vr),
    r = ge(
      () => ({
        eventName: "mousedown",
        fn: function (d) {
          if (
            d.defaultPrevented ||
            d.button !== CC ||
            d.ctrlKey ||
            d.metaKey ||
            d.shiftKey ||
            d.altKey
          )
            return;
          const f = e.findClosestDraggableId(d);
          if (!f) return;
          const p = e.tryGetLock(f, i, { sourceEvent: d });
          if (!p) return;
          d.preventDefault();
          const m = { x: d.clientX, y: d.clientY };
          n.current(), c(p, m);
        },
      }),
      [e]
    ),
    o = ge(
      () => ({
        eventName: "webkitmouseforcewillbegin",
        fn: (u) => {
          if (u.defaultPrevented) return;
          const d = e.findClosestDraggableId(u);
          if (!d) return;
          const f = e.findOptionsForDraggable(d);
          f &&
            (f.shouldRespectForcePress ||
              (e.canGetLock(d) && u.preventDefault()));
        },
      }),
      [e]
    ),
    s = re(
      function () {
        const d = { passive: !1, capture: !0 };
        n.current = dn(window, [o, r], d);
      },
      [o, r]
    ),
    i = re(() => {
      t.current.type !== "IDLE" && ((t.current = x0), n.current(), s());
    }, [s]),
    l = re(() => {
      const u = t.current;
      i(),
        u.type === "DRAGGING" && u.actions.cancel({ shouldBlockNextClick: !0 }),
        u.type === "PENDING" && u.actions.abort();
    }, [i]),
    a = re(
      function () {
        const d = { capture: !0, passive: !1 },
          f = nM({
            cancel: l,
            completed: i,
            getPhase: () => t.current,
            setPhase: (p) => {
              t.current = p;
            },
          });
        n.current = dn(window, f, d);
      },
      [l, i]
    ),
    c = re(
      function (d, f) {
        t.current.type !== "IDLE" && G(),
          (t.current = { type: "PENDING", point: f, actions: d }),
          a();
      },
      [a]
    );
  Jt(
    function () {
      return (
        s(),
        function () {
          n.current();
        }
      );
    },
    [s]
  );
}
function oM() {}
const sM = { [G2]: !0, [H2]: !0, [q2]: !0, [Y2]: !0 };
function iM(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [
    {
      eventName: "keydown",
      fn: (o) => {
        if (o.keyCode === sg) {
          o.preventDefault(), n();
          return;
        }
        if (o.keyCode === xC) {
          o.preventDefault(), r();
          return;
        }
        if (o.keyCode === J2) {
          o.preventDefault(), e.moveDown();
          return;
        }
        if (o.keyCode === X2) {
          o.preventDefault(), e.moveUp();
          return;
        }
        if (o.keyCode === Q2) {
          o.preventDefault(), e.moveRight();
          return;
        }
        if (o.keyCode === K2) {
          o.preventDefault(), e.moveLeft();
          return;
        }
        if (sM[o.keyCode]) {
          o.preventDefault();
          return;
        }
        SC(o);
      },
    },
    { eventName: "mousedown", fn: n },
    { eventName: "mouseup", fn: n },
    { eventName: "click", fn: n },
    { eventName: "touchstart", fn: n },
    { eventName: "resize", fn: n },
    { eventName: "wheel", fn: n, options: { passive: !0 } },
    { eventName: Lu, fn: n },
  ];
}
function lM(e) {
  const t = w.useRef(oM),
    n = ge(
      () => ({
        eventName: "keydown",
        fn: function (s) {
          if (s.defaultPrevented || s.keyCode !== xC) return;
          const i = e.findClosestDraggableId(s);
          if (!i) return;
          const l = e.tryGetLock(i, u, { sourceEvent: s });
          if (!l) return;
          s.preventDefault();
          let a = !0;
          const c = l.snapLift();
          t.current();
          function u() {
            a || G(), (a = !1), t.current(), r();
          }
          t.current = dn(window, iM(c, u), { capture: !0, passive: !1 });
        },
      }),
      [e]
    ),
    r = re(
      function () {
        const s = { passive: !1, capture: !0 };
        t.current = dn(window, [n], s);
      },
      [n]
    );
  Jt(
    function () {
      return (
        r(),
        function () {
          t.current();
        }
      );
    },
    [r]
  );
}
const Zd = { type: "IDLE" },
  aM = 120,
  cM = 0.15;
function uM({ cancel: e, getPhase: t }) {
  return [
    { eventName: "orientationchange", fn: e },
    { eventName: "resize", fn: e },
    {
      eventName: "contextmenu",
      fn: (n) => {
        n.preventDefault();
      },
    },
    {
      eventName: "keydown",
      fn: (n) => {
        if (t().type !== "DRAGGING") {
          e();
          return;
        }
        n.keyCode === sg && n.preventDefault(), e();
      },
    },
    { eventName: Lu, fn: e },
  ];
}
function dM({ cancel: e, completed: t, getPhase: n }) {
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: (r) => {
        const o = n();
        if (o.type !== "DRAGGING") {
          e();
          return;
        }
        o.hasMoved = !0;
        const { clientX: s, clientY: i } = r.touches[0],
          l = { x: s, y: i };
        r.preventDefault(), o.actions.move(l);
      },
    },
    {
      eventName: "touchend",
      fn: (r) => {
        const o = n();
        if (o.type !== "DRAGGING") {
          e();
          return;
        }
        r.preventDefault(), o.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "touchcancel",
      fn: (r) => {
        if (n().type !== "DRAGGING") {
          e();
          return;
        }
        r.preventDefault(), e();
      },
    },
    {
      eventName: "touchforcechange",
      fn: (r) => {
        const o = n();
        o.type === "IDLE" && G();
        const s = r.touches[0];
        if (!s || !(s.force >= cM)) return;
        const l = o.actions.shouldRespectForcePress();
        if (o.type === "PENDING") {
          l && e();
          return;
        }
        if (l) {
          if (o.hasMoved) {
            r.preventDefault();
            return;
          }
          e();
          return;
        }
        r.preventDefault();
      },
    },
    { eventName: Lu, fn: e },
  ];
}
function fM(e) {
  const t = w.useRef(Zd),
    n = w.useRef(Vr),
    r = re(function () {
      return t.current;
    }, []),
    o = re(function (p) {
      t.current = p;
    }, []),
    s = ge(
      () => ({
        eventName: "touchstart",
        fn: function (p) {
          if (p.defaultPrevented) return;
          const m = e.findClosestDraggableId(p);
          if (!m) return;
          const h = e.tryGetLock(m, l, { sourceEvent: p });
          if (!h) return;
          const x = p.touches[0],
            { clientX: v, clientY: y } = x,
            b = { x: v, y };
          n.current(), d(h, b);
        },
      }),
      [e]
    ),
    i = re(
      function () {
        const p = { capture: !0, passive: !1 };
        n.current = dn(window, [s], p);
      },
      [s]
    ),
    l = re(() => {
      const f = t.current;
      f.type !== "IDLE" &&
        (f.type === "PENDING" && clearTimeout(f.longPressTimerId),
        o(Zd),
        n.current(),
        i());
    }, [i, o]),
    a = re(() => {
      const f = t.current;
      l(),
        f.type === "DRAGGING" && f.actions.cancel({ shouldBlockNextClick: !0 }),
        f.type === "PENDING" && f.actions.abort();
    }, [l]),
    c = re(
      function () {
        const p = { capture: !0, passive: !1 },
          m = { cancel: a, completed: l, getPhase: r },
          h = dn(window, dM(m), p),
          x = dn(window, uM(m), p);
        n.current = function () {
          h(), x();
        };
      },
      [a, r, l]
    ),
    u = re(
      function () {
        const p = r();
        p.type !== "PENDING" && G();
        const m = p.actions.fluidLift(p.point);
        o({ type: "DRAGGING", actions: m, hasMoved: !1 });
      },
      [r, o]
    ),
    d = re(
      function (p, m) {
        r().type !== "IDLE" && G();
        const h = setTimeout(u, aM);
        o({ type: "PENDING", point: m, actions: p, longPressTimerId: h }), c();
      },
      [c, r, o, u]
    );
  Jt(
    function () {
      return (
        i(),
        function () {
          n.current();
          const m = r();
          m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Zd));
        }
      );
    },
    [r, i, o]
  ),
    Jt(function () {
      return dn(window, [
        {
          eventName: "touchmove",
          fn: () => {},
          options: { capture: !1, passive: !1 },
        },
      ]);
    }, []);
}
const pM = [
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "optgroup",
  "video",
  "audio",
];
function EC(e, t) {
  if (t == null) return !1;
  if (pM.includes(t.tagName.toLowerCase())) return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : EC(e, t.parentElement);
}
function mM(e, t) {
  const n = t.target;
  return Iu(n) ? EC(e, n) : !1;
}
var hM = (e) => Nn(e.getBoundingClientRect()).center;
function gM(e) {
  return e instanceof vC(e).Element;
}
const yM = (() => {
  const e = "matches";
  return typeof document > "u"
    ? e
    : [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (r) => r in Element.prototype
      ) || e;
})();
function DC(e, t) {
  return e == null ? null : e[yM](t) ? e : DC(e.parentElement, t);
}
function vM(e, t) {
  return e.closest ? e.closest(t) : DC(e, t);
}
function bM(e) {
  return `[${js.contextId}="${e}"]`;
}
function wM(e, t) {
  const n = t.target;
  if (!gM(n)) return null;
  const r = bM(e),
    o = vM(n, r);
  return !o || !Iu(o) ? null : o;
}
function xM(e, t) {
  const n = wM(e, t);
  return n ? n.getAttribute(js.draggableId) : null;
}
function SM(e, t) {
  const n = `[${wp.contextId}="${e}"]`,
    o = yC(document, n).find((s) => s.getAttribute(wp.id) === t);
  return !o || !Iu(o) ? null : o;
}
function CM(e) {
  e.preventDefault();
}
function oa({ expected: e, phase: t, isLockActive: n, shouldWarn: r }) {
  return !(!n() || e !== t);
}
function RC({ lockAPI: e, store: t, registry: n, draggableId: r }) {
  if (e.isClaimed()) return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !pC(t.getState(), r));
}
function EM({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i,
}) {
  if (!RC({ lockAPI: e, store: n, registry: r, draggableId: o })) return null;
  const a = r.draggable.getById(o),
    c = SM(t, a.descriptor.id);
  if (!c || (i && !a.options.canDragInteractiveElements && mM(c, i)))
    return null;
  const u = e.claim(s || Vr);
  let d = "PRE_DRAG";
  function f() {
    return a.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(C, E) {
    oa({ expected: C, phase: d, isLockActive: p, shouldWarn: !0 }) &&
      n.dispatch(E());
  }
  const h = m.bind(null, "DRAGGING");
  function x(C) {
    function E() {
      e.release(), (d = "COMPLETED");
    }
    d !== "PRE_DRAG" && (E(), G()),
      n.dispatch(aL(C.liftActionArgs)),
      (d = "DRAGGING");
    function R(P, I = { shouldBlockNextClick: !1 }) {
      if ((C.cleanup(), I.shouldBlockNextClick)) {
        const _ = dn(window, [
          {
            eventName: "click",
            fn: CM,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(_);
      }
      E(), n.dispatch(sC({ reason: P }));
    }
    return {
      isActive: () =>
        oa({ expected: "DRAGGING", phase: d, isLockActive: p, shouldWarn: !1 }),
      shouldRespectForcePress: f,
      drop: (P) => R("DROP", P),
      cancel: (P) => R("CANCEL", P),
      ...C.actions,
    };
  }
  function v(C) {
    const E = il((P) => {
      h(() => oC({ client: P }));
    });
    return {
      ...x({
        liftActionArgs: { id: o, clientSelection: C, movementMode: "FLUID" },
        cleanup: () => E.cancel(),
        actions: { move: E },
      }),
      move: E,
    };
  }
  function y() {
    const C = {
      moveUp: () => h(yL),
      moveRight: () => h(bL),
      moveDown: () => h(vL),
      moveLeft: () => h(wL),
    };
    return x({
      liftActionArgs: { id: o, clientSelection: hM(c), movementMode: "SNAP" },
      cleanup: Vr,
      actions: C,
    });
  }
  function b() {
    oa({ expected: "PRE_DRAG", phase: d, isLockActive: p, shouldWarn: !0 }) &&
      e.release();
  }
  return {
    isActive: () =>
      oa({ expected: "PRE_DRAG", phase: d, isLockActive: p, shouldWarn: !1 }),
    shouldRespectForcePress: f,
    fluidLift: v,
    snapLift: y,
    abort: b,
  };
}
const DM = [rM, lM, fM];
function RM({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o,
}) {
  const s = [...(o ? DM : []), ...(r || [])],
    i = w.useState(() => V2())[0],
    l = re(
      function (x, v) {
        fl(x) && !fl(v) && i.tryAbandon();
      },
      [i]
    );
  Jt(
    function () {
      let x = t.getState();
      return t.subscribe(() => {
        const y = t.getState();
        l(x, y), (x = y);
      });
    },
    [i, t, l]
  ),
    Jt(() => i.tryAbandon, [i.tryAbandon]);
  const a = re(
      (h) => RC({ lockAPI: i, registry: n, store: t, draggableId: h }),
      [i, n, t]
    ),
    c = re(
      (h, x, v) =>
        EM({
          lockAPI: i,
          registry: n,
          contextId: e,
          store: t,
          draggableId: h,
          forceSensorStop: x || null,
          sourceEvent: v && v.sourceEvent ? v.sourceEvent : null,
        }),
      [e, i, n, t]
    ),
    u = re((h) => xM(e, h), [e]),
    d = re(
      (h) => {
        const x = n.draggable.findById(h);
        return x ? x.options : null;
      },
      [n.draggable]
    ),
    f = re(
      function () {
        i.isClaimed() &&
          (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Xh()));
      },
      [i, t]
    ),
    p = re(() => i.isClaimed(), [i]),
    m = ge(
      () => ({
        canGetLock: a,
        tryGetLock: c,
        findClosestDraggableId: u,
        findOptionsForDraggable: d,
        tryReleaseLock: f,
        isLockClaimed: p,
      }),
      [a, c, u, d, f, p]
    );
  for (let h = 0; h < s.length; h++) s[h](m);
}
const PM = (e) => ({
    onBeforeCapture: (t) => {
      const n = () => {
        e.onBeforeCapture && e.onBeforeCapture(t);
      };
      be.version.startsWith("16") || be.version.startsWith("17")
        ? n()
        : eo.flushSync(n);
    },
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragEnd: e.onDragEnd,
    onDragUpdate: e.onDragUpdate,
  }),
  NM = (e) => ({
    ...dl,
    ...e.autoScrollerOptions,
    durationDampening: { ...dl.durationDampening, ...e.autoScrollerOptions },
  });
function yi(e) {
  return e.current || G(), e.current;
}
function _M(e) {
  const {
      contextId: t,
      setCallbacks: n,
      sensors: r,
      nonce: o,
      dragHandleUsageInstructions: s,
    } = e,
    i = w.useRef(null),
    l = wC(e),
    a = re(() => PM(l.current), [l]),
    c = re(() => NM(l.current), [l]),
    u = j2(t),
    d = z2({ contextId: t, text: s }),
    f = N2(t, o),
    p = re((_) => {
      yi(i).dispatch(_);
    }, []),
    m = ge(
      () =>
        Hv(
          {
            publishWhileDragging: uL,
            updateDroppableScroll: fL,
            updateDroppableIsEnabled: pL,
            updateDroppableIsCombineEnabled: mL,
            collectionStarting: dL,
          },
          p
        ),
      [p]
    ),
    h = T2(),
    x = ge(() => s2(h, m), [h, m]),
    v = ge(
      () =>
        S2({
          scrollWindow: i2,
          scrollDroppable: x.scrollDroppable,
          getAutoScrollerOptions: c,
          ...Hv({ move: oC }, p),
        }),
      [x.scrollDroppable, p, c]
    ),
    y = O2(t),
    b = ge(
      () =>
        t2({
          announce: u,
          autoScroller: v,
          dimensionMarshal: x,
          focusMarshal: y,
          getResponders: a,
          styleMarshal: f,
        }),
      [u, v, x, y, a, f]
    );
  i.current = b;
  const S = re(() => {
      const _ = yi(i);
      _.getState().phase !== "IDLE" && _.dispatch(Xh());
    }, []),
    C = re(() => {
      const _ = yi(i).getState();
      return _.phase === "DROP_ANIMATING"
        ? !0
        : _.phase === "IDLE"
        ? !1
        : _.isDragging;
    }, []),
    E = ge(() => ({ isDragging: C, tryAbort: S }), [C, S]);
  n(E);
  const R = re((_) => pC(yi(i).getState(), _), []),
    P = re(() => uo(yi(i).getState()), []),
    I = ge(
      () => ({
        marshal: x,
        focus: y,
        contextId: t,
        canLift: R,
        isMovementAllowed: P,
        dragHandleUsageInstructionsId: d,
        registry: h,
      }),
      [t, x, d, y, R, P, h]
    );
  return (
    RM({
      contextId: t,
      store: b,
      registry: h,
      customSensors: r || null,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    w.useEffect(() => S, [S]),
    be.createElement(
      ju.Provider,
      { value: I },
      be.createElement(FI, { context: rg, store: b }, e.children)
    )
  );
}
let OM = 0;
function kM() {
  return ge(() => `${OM++}`, []);
}
function TM() {
  return be.useId();
}
var $M = "useId" in be ? TM : kM;
function AM(e) {
  const t = $M(),
    n = e.dragHandleUsageInstructions || Ca.dragHandleUsageInstructions;
  return be.createElement(XI, null, (r) =>
    be.createElement(
      _M,
      {
        nonce: e.nonce,
        contextId: t,
        setCallbacks: r,
        dragHandleUsageInstructions: n,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd,
        autoScrollerOptions: e.autoScrollerOptions,
      },
      e.children
    )
  );
}
const S0 = { dragging: 5e3, dropAnimating: 4500 },
  IM = (e, t) => (t ? ji.drop(t.duration) : e ? ji.snap : ji.fluid),
  jM = (e, t) => {
    if (e) return t ? ul.opacity.drop : ul.opacity.combining;
  },
  LM = (e) =>
    e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function MM(e) {
  const n = e.dimension.client,
    { offset: r, combineWith: o, dropping: s } = e,
    i = !!o,
    l = LM(e),
    a = !!s,
    c = a ? vp.drop(r, i) : vp.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: IM(l, s),
    transform: c,
    opacity: jM(i, a),
    zIndex: a ? S0.dropAnimating : S0.dragging,
    pointerEvents: "none",
  };
}
function FM(e) {
  return {
    transform: vp.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none",
  };
}
function BM(e) {
  return e.type === "DRAGGING" ? MM(e) : FM(e);
}
function zM(e, t, n = rt) {
  const r = window.getComputedStyle(t),
    o = t.getBoundingClientRect(),
    s = $1(o, r),
    i = sc(s, n),
    l = { client: s, tagName: t.tagName.toLowerCase(), display: r.display },
    a = { x: s.marginBox.width, y: s.marginBox.height };
  return { descriptor: e, placeholder: l, displaceBy: a, client: s, page: i };
}
function VM(e) {
  const t = og("draggable"),
    {
      descriptor: n,
      registry: r,
      getDraggableRef: o,
      canDragInteractiveElements: s,
      shouldRespectForcePress: i,
      isEnabled: l,
    } = e,
    a = ge(
      () => ({
        canDragInteractiveElements: s,
        shouldRespectForcePress: i,
        isEnabled: l,
      }),
      [s, l, i]
    ),
    c = re(
      (p) => {
        const m = o();
        return m || G(), zM(n, m, p);
      },
      [n, o]
    ),
    u = ge(
      () => ({ uniqueId: t, descriptor: n, options: a, getDimension: c }),
      [n, c, a, t]
    ),
    d = w.useRef(u),
    f = w.useRef(!0);
  Jt(
    () => (
      r.draggable.register(d.current), () => r.draggable.unregister(d.current)
    ),
    [r.draggable]
  ),
    Jt(() => {
      if (f.current) {
        f.current = !1;
        return;
      }
      const p = d.current;
      (d.current = u), r.draggable.update(u, p);
    }, [u, r.draggable]);
}
var ig = be.createContext(null);
function uc(e) {
  const t = w.useContext(e);
  return t || G(), t;
}
function WM(e) {
  e.preventDefault();
}
const UM = (e) => {
  const t = w.useRef(null),
    n = re((E = null) => {
      t.current = E;
    }, []),
    r = re(() => t.current, []),
    { contextId: o, dragHandleUsageInstructionsId: s, registry: i } = uc(ju),
    { type: l, droppableId: a } = uc(ig),
    c = ge(
      () => ({ id: e.draggableId, index: e.index, type: l, droppableId: a }),
      [e.draggableId, e.index, l, a]
    ),
    {
      children: u,
      draggableId: d,
      isEnabled: f,
      shouldRespectForcePress: p,
      canDragInteractiveElements: m,
      isClone: h,
      mapped: x,
      dropAnimationFinished: v,
    } = e;
  if (!h) {
    const E = ge(
      () => ({
        descriptor: c,
        registry: i,
        getDraggableRef: r,
        canDragInteractiveElements: m,
        shouldRespectForcePress: p,
        isEnabled: f,
      }),
      [c, i, r, m, p, f]
    );
    VM(E);
  }
  const y = ge(
      () =>
        f
          ? {
              tabIndex: 0,
              role: "button",
              "aria-describedby": s,
              "data-rfd-drag-handle-draggable-id": d,
              "data-rfd-drag-handle-context-id": o,
              draggable: !1,
              onDragStart: WM,
            }
          : null,
      [o, s, d, f]
    ),
    b = re(
      (E) => {
        x.type === "DRAGGING" &&
          x.dropping &&
          E.propertyName === "transform" &&
          (be.version.startsWith("16") || be.version.startsWith("17")
            ? v()
            : eo.flushSync(v));
      },
      [v, x]
    ),
    S = ge(() => {
      const E = BM(x),
        R = x.type === "DRAGGING" && x.dropping ? b : void 0;
      return {
        innerRef: n,
        draggableProps: {
          "data-rfd-draggable-context-id": o,
          "data-rfd-draggable-id": d,
          style: E,
          onTransitionEnd: R,
        },
        dragHandleProps: y,
      };
    }, [o, y, d, x, b, n]),
    C = ge(
      () => ({
        draggableId: c.id,
        type: c.type,
        source: { index: c.index, droppableId: c.droppableId },
      }),
      [c.droppableId, c.id, c.index, c.type]
    );
  return be.createElement(be.Fragment, null, u(S, x.snapshot, C));
};
var HM = UM,
  PC = (e, t) => e === t,
  NC = (e) => {
    const { combine: t, destination: n } = e;
    return n ? n.droppableId : t ? t.droppableId : null;
  };
const GM = (e) => (e.combine ? e.combine.draggableId : null),
  YM = (e) =>
    e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function qM() {
  const e = tt((o, s) => ({ x: o, y: s })),
    t = tt((o, s, i = null, l = null, a = null) => ({
      isDragging: !0,
      isClone: s,
      isDropAnimating: !!a,
      dropAnimation: a,
      mode: o,
      draggingOver: i,
      combineWith: l,
      combineTargetFor: null,
    })),
    n = tt((o, s, i, l, a = null, c = null, u = null) => ({
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: a,
        combineWith: c,
        mode: s,
        offset: o,
        dimension: i,
        forceShouldAnimate: u,
        snapshot: t(s, l, a, c, null),
      },
    }));
  return (o, s) => {
    if (fl(o)) {
      if (o.critical.draggable.id !== s.draggableId) return null;
      const i = o.current.client.offset,
        l = o.dimensions.draggables[s.draggableId],
        a = Qt(o.impact),
        c = YM(o.impact),
        u = o.forceShouldAnimate;
      return n(e(i.x, i.y), o.movementMode, l, s.isClone, a, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId) return null;
      const l = s.isClone,
        a = o.dimensions.draggables[s.draggableId],
        c = i.result,
        u = c.mode,
        d = NC(c),
        f = GM(c),
        m = {
          duration: o.dropDuration,
          curve: Jh.drop,
          moveTo: o.newHomeClientOffset,
          opacity: f ? ul.opacity.drop : null,
          scale: f ? ul.scale.drop : null,
        };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: a,
          dropping: m,
          draggingOver: d,
          combineWith: f,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, l, d, f, m),
        },
      };
    }
    return null;
  };
}
function _C(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null,
  };
}
const KM = {
  mapped: {
    type: "SECONDARY",
    offset: rt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: _C(null),
  },
};
function XM() {
  const e = tt((i, l) => ({ x: i, y: l })),
    t = tt(_C),
    n = tt((i, l = null, a) => ({
      mapped: {
        type: "SECONDARY",
        offset: i,
        combineTargetFor: l,
        shouldAnimateDisplacement: a,
        snapshot: t(l),
      },
    })),
    r = (i) => (i ? n(rt, i, !0) : null),
    o = (i, l, a, c) => {
      const u = a.displaced.visible[i],
        d = !!(c.inVirtualList && c.effected[i]),
        f = Tu(a),
        p = f && f.draggableId === i ? l : null;
      if (!u) {
        if (!d) return r(p);
        if (a.displaced.invisible[i]) return null;
        const x = Ks(c.displacedBy.point),
          v = e(x.x, x.y);
        return n(v, p, !0);
      }
      if (d) return r(p);
      const m = a.displacedBy.point,
        h = e(m.x, m.y);
      return n(h, p, u.shouldAnimate);
    };
  return (i, l) => {
    if (fl(i))
      return i.critical.draggable.id === l.draggableId
        ? null
        : o(l.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const a = i.completed;
      return a.result.draggableId === l.draggableId
        ? null
        : o(l.draggableId, a.result.draggableId, a.impact, a.afterCritical);
    }
    return null;
  };
}
const QM = () => {
    const e = qM(),
      t = XM();
    return (r, o) => e(r, o) || t(r, o) || KM;
  },
  JM = { dropAnimationFinished: iC },
  ZM = k1(QM, JM, null, { context: rg, areStatePropsEqual: PC })(HM);
var eF = ZM;
function OC(e) {
  return uc(ig).isUsingCloneFor === e.draggableId && !e.isClone
    ? null
    : be.createElement(eF, e);
}
function tF(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    n = !!e.disableInteractiveElementBlocking,
    r = !!e.shouldRespectForcePress;
  return be.createElement(
    OC,
    dr({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: n,
      shouldRespectForcePress: r,
    })
  );
}
const kC = (e) => (t) => e === t,
  nF = kC("scroll"),
  rF = kC("auto"),
  C0 = (e, t) => t(e.overflowX) || t(e.overflowY),
  oF = (e) => {
    const t = window.getComputedStyle(e),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return C0(n, nF) || C0(n, rF);
  },
  sF = () => !1,
  TC = (e) =>
    e == null
      ? null
      : e === document.body
      ? sF()
        ? e
        : null
      : e === document.documentElement
      ? null
      : oF(e)
      ? e
      : TC(e.parentElement);
var xp = (e) => ({ x: e.scrollLeft, y: e.scrollTop });
const $C = (e) =>
  e
    ? window.getComputedStyle(e).position === "fixed"
      ? !0
      : $C(e.parentElement)
    : !1;
var iF = (e) => {
    const t = TC(e),
      n = $C(e);
    return { closestScrollable: t, isFixedOnPage: n };
  },
  lF = ({
    descriptor: e,
    isEnabled: t,
    isCombineEnabled: n,
    isFixedOnPage: r,
    direction: o,
    client: s,
    page: i,
    closest: l,
  }) => {
    const a = (() => {
        if (!l) return null;
        const { scrollSize: f, client: p } = l,
          m = uC({
            scrollHeight: f.scrollHeight,
            scrollWidth: f.scrollWidth,
            height: p.paddingBox.height,
            width: p.paddingBox.width,
          });
        return {
          pageMarginBox: l.page.marginBox,
          frameClient: p,
          scrollSize: f,
          shouldClipSubject: l.shouldClipSubject,
          scroll: {
            initial: l.scroll,
            current: l.scroll,
            max: m,
            diff: { value: rt, displacement: rt },
          },
        };
      })(),
      c = o === "vertical" ? Hh : W1,
      u = As({ page: i, withPlaceholder: null, axis: c, frame: a });
    return {
      descriptor: e,
      isCombineEnabled: n,
      isFixedOnPage: r,
      axis: c,
      isEnabled: t,
      client: s,
      page: i,
      frame: a,
      subject: u,
    };
  };
const aF = (e, t) => {
  const n = A1(e);
  if (!t || e !== t) return n;
  const r = n.paddingBox.top - t.scrollTop,
    o = n.paddingBox.left - t.scrollLeft,
    s = r + t.scrollHeight,
    i = o + t.scrollWidth,
    a = zh({ top: r, right: i, bottom: s, left: o }, n.border);
  return Vh({
    borderBox: a,
    margin: n.margin,
    border: n.border,
    padding: n.padding,
  });
};
var cF = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: l,
}) => {
  const a = n.closestScrollable,
    c = aF(e, a),
    u = sc(c, r),
    d = (() => {
      if (!a) return null;
      const p = A1(a),
        m = { scrollHeight: a.scrollHeight, scrollWidth: a.scrollWidth };
      return {
        client: p,
        page: sc(p, r),
        scroll: xp(a),
        scrollSize: m,
        shouldClipSubject: l,
      };
    })();
  return lF({
    descriptor: t,
    isEnabled: !s,
    isCombineEnabled: i,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: c,
    page: u,
    closest: d,
  });
};
const uF = { passive: !1 },
  dF = { passive: !0 };
var E0 = (e) => (e.shouldPublishImmediately ? uF : dF);
const sa = (e) => (e && e.env.closestScrollable) || null;
function fF(e) {
  const t = w.useRef(null),
    n = uc(ju),
    r = og("droppable"),
    { registry: o, marshal: s } = n,
    i = wC(e),
    l = ge(
      () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
      [e.droppableId, e.mode, e.type]
    ),
    a = w.useRef(l),
    c = ge(
      () =>
        tt((S, C) => {
          t.current || G();
          const E = { x: S, y: C };
          s.updateDroppableScroll(l.id, E);
        }),
      [l.id, s]
    ),
    u = re(() => {
      const S = t.current;
      return !S || !S.env.closestScrollable ? rt : xp(S.env.closestScrollable);
    }, []),
    d = re(() => {
      const S = u();
      c(S.x, S.y);
    }, [u, c]),
    f = ge(() => il(d), [d]),
    p = re(() => {
      const S = t.current,
        C = sa(S);
      if (((S && C) || G(), S.scrollOptions.shouldPublishImmediately)) {
        d();
        return;
      }
      f();
    }, [f, d]),
    m = re(
      (S, C) => {
        t.current && G();
        const E = i.current,
          R = E.getDroppableRef();
        R || G();
        const P = iF(R),
          I = { ref: R, descriptor: l, env: P, scrollOptions: C };
        t.current = I;
        const _ = cF({
            ref: R,
            descriptor: l,
            env: P,
            windowScroll: S,
            direction: E.direction,
            isDropDisabled: E.isDropDisabled,
            isCombineEnabled: E.isCombineEnabled,
            shouldClipSubject: !E.ignoreContainerClipping,
          }),
          T = P.closestScrollable;
        return (
          T &&
            (T.setAttribute(v0.contextId, n.contextId),
            T.addEventListener("scroll", p, E0(I.scrollOptions))),
          _
        );
      },
      [n.contextId, l, p, i]
    ),
    h = re(() => {
      const S = t.current,
        C = sa(S);
      return (S && C) || G(), xp(C);
    }, []),
    x = re(() => {
      const S = t.current;
      S || G();
      const C = sa(S);
      (t.current = null),
        C &&
          (f.cancel(),
          C.removeAttribute(v0.contextId),
          C.removeEventListener("scroll", p, E0(S.scrollOptions)));
    }, [p, f]),
    v = re((S) => {
      const C = t.current;
      C || G();
      const E = sa(C);
      E || G(), (E.scrollTop += S.y), (E.scrollLeft += S.x);
    }, []),
    y = ge(
      () => ({
        getDimensionAndWatchScroll: m,
        getScrollWhileDragging: h,
        dragStopped: x,
        scroll: v,
      }),
      [x, m, h, v]
    ),
    b = ge(() => ({ uniqueId: r, descriptor: l, callbacks: y }), [y, l, r]);
  Jt(
    () => (
      (a.current = b.descriptor),
      o.droppable.register(b),
      () => {
        t.current && x(), o.droppable.unregister(b);
      }
    ),
    [y, l, x, b, s, o.droppable]
  ),
    Jt(() => {
      t.current && s.updateDroppableIsEnabled(a.current.id, !e.isDropDisabled);
    }, [e.isDropDisabled, s]),
    Jt(() => {
      t.current &&
        s.updateDroppableIsCombineEnabled(a.current.id, e.isCombineEnabled);
    }, [e.isCombineEnabled, s]);
}
function ef() {}
const D0 = { width: 0, height: 0, margin: rj },
  pF = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: n }) =>
    e || n === "close"
      ? D0
      : {
          height: t.client.borderBox.height,
          width: t.client.borderBox.width,
          margin: t.client.margin,
        },
  mF = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: n }) => {
    const r = pF({ isAnimatingOpenOnMount: e, placeholder: t, animate: n });
    return {
      display: t.display,
      boxSizing: "border-box",
      width: r.width,
      height: r.height,
      marginTop: r.margin.top,
      marginRight: r.margin.right,
      marginBottom: r.margin.bottom,
      marginLeft: r.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: n !== "none" ? ji.placeholder : null,
    };
  },
  hF = (e) => {
    const t = w.useRef(null),
      n = re(() => {
        t.current && (clearTimeout(t.current), (t.current = null));
      }, []),
      { animate: r, onTransitionEnd: o, onClose: s, contextId: i } = e,
      [l, a] = w.useState(e.animate === "open");
    w.useEffect(
      () =>
        l
          ? r !== "open"
            ? (n(), a(!1), ef)
            : t.current
            ? ef
            : ((t.current = setTimeout(() => {
                (t.current = null), a(!1);
              })),
              n)
          : ef,
      [r, l, n]
    );
    const c = re(
        (d) => {
          d.propertyName === "height" && (o(), r === "close" && s());
        },
        [r, s, o]
      ),
      u = mF({
        isAnimatingOpenOnMount: l,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return be.createElement(e.placeholder.tagName, {
      style: u,
      "data-rfd-placeholder-context-id": i,
      onTransitionEnd: c,
      ref: e.innerRef,
    });
  };
var gF = be.memo(hF);
class yF extends be.PureComponent {
  constructor(...t) {
    super(...t),
      (this.state = {
        isVisible: !!this.props.on,
        data: this.props.on,
        animate: this.props.shouldAnimate && this.props.on ? "open" : "none",
      }),
      (this.onClose = () => {
        this.state.animate === "close" && this.setState({ isVisible: !1 });
      });
  }
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate
      ? t.on
        ? { isVisible: !0, data: t.on, animate: "open" }
        : n.isVisible
        ? { isVisible: !0, data: n.data, animate: "close" }
        : { isVisible: !1, animate: "close", data: null }
      : { isVisible: !!t.on, data: t.on, animate: "none" };
  }
  render() {
    if (!this.state.isVisible) return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate,
    };
    return this.props.children(t);
  }
}
const vF = (e) => {
  const t = w.useContext(ju);
  t || G();
  const { contextId: n, isMovementAllowed: r } = t,
    o = w.useRef(null),
    s = w.useRef(null),
    {
      children: i,
      droppableId: l,
      type: a,
      mode: c,
      direction: u,
      ignoreContainerClipping: d,
      isDropDisabled: f,
      isCombineEnabled: p,
      snapshot: m,
      useClone: h,
      updateViewportMaxScroll: x,
      getContainerForClone: v,
    } = e,
    y = re(() => o.current, []),
    b = re((T = null) => {
      o.current = T;
    }, []);
  re(() => s.current, []);
  const S = re((T = null) => {
      s.current = T;
    }, []),
    C = re(() => {
      r() && x({ maxScroll: fC() });
    }, [r, x]);
  fF({
    droppableId: l,
    type: a,
    mode: c,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: y,
  });
  const E = ge(
      () =>
        be.createElement(
          yF,
          { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
          ({ onClose: T, data: M, animate: z }) =>
            be.createElement(gF, {
              placeholder: M,
              onClose: T,
              innerRef: S,
              animate: z,
              contextId: n,
              onTransitionEnd: C,
            })
        ),
      [n, C, e.placeholder, e.shouldAnimatePlaceholder, S]
    ),
    R = ge(
      () => ({
        innerRef: b,
        placeholder: E,
        droppableProps: {
          "data-rfd-droppable-id": l,
          "data-rfd-droppable-context-id": n,
        },
      }),
      [n, l, E, b]
    ),
    P = h ? h.dragging.draggableId : null,
    I = ge(() => ({ droppableId: l, type: a, isUsingCloneFor: P }), [l, P, a]);
  function _() {
    if (!h) return null;
    const { dragging: T, render: M } = h,
      z = be.createElement(
        OC,
        {
          draggableId: T.draggableId,
          index: T.source.index,
          isClone: !0,
          isEnabled: !0,
          shouldRespectForcePress: !1,
          canDragInteractiveElements: !0,
        },
        (L, $) => M(L, $, T)
      );
    return wx.createPortal(z, v());
  }
  return be.createElement(ig.Provider, { value: I }, i(R, m), _());
};
var bF = vF;
function wF() {
  return document.body || G(), document.body;
}
const R0 = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: wF,
  },
  AC = (e) => {
    let t = { ...e },
      n;
    for (n in R0) e[n] === void 0 && (t = { ...t, [n]: R0[n] });
    return t;
  },
  tf = (e, t) => e === t.droppable.type,
  P0 = (e, t) => t.draggables[e.draggable.id],
  xF = () => {
    const e = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
          isDraggingOver: !1,
          draggingOverWith: null,
          draggingFromThisWith: null,
          isUsingPlaceholder: !1,
        },
        useClone: null,
      },
      t = { ...e, shouldAnimatePlaceholder: !1 },
      n = tt((s) => ({
        draggableId: s.id,
        type: s.type,
        source: { index: s.index, droppableId: s.droppableId },
      })),
      r = tt((s, i, l, a, c, u) => {
        const d = c.descriptor.id;
        if (c.descriptor.droppableId === s) {
          const m = u ? { render: u, dragging: n(c.descriptor) } : null,
            h = {
              isDraggingOver: l,
              draggingOverWith: l ? d : null,
              draggingFromThisWith: d,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: c.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: h,
            useClone: m,
          };
        }
        if (!i) return t;
        if (!a) return e;
        const p = {
          isDraggingOver: l,
          draggingOverWith: d,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: c.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: p,
          useClone: null,
        };
      });
    return (s, i) => {
      const l = AC(i),
        a = l.droppableId,
        c = l.type,
        u = !l.isDropDisabled,
        d = l.renderClone;
      if (fl(s)) {
        const f = s.critical;
        if (!tf(c, f)) return t;
        const p = P0(f, s.dimensions),
          m = Qt(s.impact) === a;
        return r(a, u, m, m, p, d);
      }
      if (s.phase === "DROP_ANIMATING") {
        const f = s.completed;
        if (!tf(c, f.critical)) return t;
        const p = P0(f.critical, s.dimensions);
        return r(a, u, NC(f.result) === a, Qt(f.impact) === a, p, d);
      }
      if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
        const f = s.completed;
        if (!tf(c, f.critical)) return t;
        const p = Qt(f.impact) === a,
          m = !!(f.impact.at && f.impact.at.type === "COMBINE"),
          h = f.critical.droppable.id === a;
        return p ? (m ? e : t) : h ? e : t;
      }
      return t;
    };
  },
  SF = { updateViewportMaxScroll: gL },
  CF = k1(xF, SF, (e, t, n) => ({ ...AC(n), ...e, ...t }), {
    context: rg,
    areStatePropsEqual: PC,
  })(bF);
var EF = CF;
const IC = (e) => {
  const { title: t, description: n, form: r, field_id: o } = e,
    [s, i] = w.useState([]),
    [l, a] = w.useState({
      firstName: "",
      lastName: "",
      email: "",
      institution: "",
      role: [],
    }),
    [c, u] = w.useState(null),
    [d, f] = w.useState(!1),
    [p, { toggle: m }] = Po(!1),
    [h, { open: x, close: v }] = Po(!1),
    y = ["Author/Creator", "Content Contact", "Principal Investigator"],
    b = [
      "Data Owner",
      "Data Curator",
      "Data Editor/Data Manager",
      "Data Owner Contact",
      "Researcher",
      "Data Owner Organisation",
    ],
    S = (_) => {
      const { name: T, value: M } = _.target;
      if ((a((z) => ({ ...z, [T]: M })), T === "email")) {
        const L = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(M);
        f(L);
      }
    },
    C = (_) => {
      a((T) => ({ ...T, role: _ }));
    },
    E = () => {
      const _ = [...s, l];
      i(_),
        a({
          firstName: "",
          lastName: "",
          email: "",
          institution: "",
          role: [],
        }),
        f(!1),
        r.setFieldValue(o, _);
    },
    R = (_) => {
      u(_), a(_), f(!0);
    },
    P = () => {
      const _ = s.map((T) => (T.email === c.email ? l : T));
      i(_),
        u(null),
        a({
          firstName: "",
          lastName: "",
          email: "",
          institution: "",
          role: [],
        }),
        f(!1),
        r.setFieldValue(o, _);
    },
    I = (_) => {
      const T = s.filter((M) => M.email !== _.email);
      i(T),
        u(null),
        a({
          firstName: "",
          lastName: "",
          email: "",
          institution: "",
          role: [],
        }),
        f(!1),
        r.setFieldValue(o, T);
    };
  return g.jsxs(g.Fragment, {
    children: [
      g.jsxs("div", {
        className: "contributors",
        children: [
          g.jsx(nt.Label, { children: t }),
          g.jsx(nt.Description, { children: n }),
          g.jsx(lr, {
            justify: "center",
            display: p ? "none" : "flex",
            children: g.jsxs(yt, {
              onClick: m,
              className: "btn-blue-outline",
              children: [
                g.jsx("i", { class: "fa fa-plus pr-2" }),
                "Add Contributor",
              ],
            }),
          }),
          g.jsx(Bc, {
            in: p,
            children: g.jsxs(Ye, {
              gutter: "xs",
              children: [
                g.jsx(Ye.Col, {
                  span: { base: 12, md: 4, lg: 3 },
                  children: g.jsxs(ol, {
                    shadow: "xs",
                    padding: "sm",
                    className: "h-100",
                    children: [
                      s.length == 0 &&
                        g.jsx("h4", { children: "Contributors List" }),
                      g.jsx(AM, {
                        className: "h-100",
                        onDragEnd: ({ destination: _, source: T }) => {
                          if (_) {
                            var M = [...s],
                              z = T.index,
                              L = M.splice(z, 1);
                            M.splice(
                              (_ == null ? void 0 : _.index) || 0,
                              0,
                              ...L
                            ),
                              i(M);
                          }
                        },
                        children: g.jsx(EF, {
                          droppableId: "dnd-list",
                          direction: "vertical",
                          className: "h-100",
                          children: (_) =>
                            g.jsxs("div", {
                              ..._.droppableProps,
                              ref: _.innerRef,
                              className: "h-100",
                              children: [
                                s.map((T, M) =>
                                  g.jsx(
                                    tF,
                                    {
                                      index: M,
                                      draggableId: T.email,
                                      children: (z, L) =>
                                        g.jsxs("div", {
                                          ref: z.innerRef,
                                          ...z.draggableProps,
                                          className: "d-flex contributor",
                                          children: [
                                            g.jsx("div", {
                                              ...z.dragHandleProps,
                                              children: g.jsx("i", {
                                                class: "fa fa-bars pr-2",
                                              }),
                                            }),
                                            g.jsx(
                                              "div",
                                              {
                                                onClick: () => R(T),
                                                className: "name",
                                                children: g.jsxs("div", {
                                                  children: [
                                                    M + 1,
                                                    ". ",
                                                    T.firstName,
                                                    " ",
                                                    T.lastName,
                                                  ],
                                                }),
                                              },
                                              T.email
                                            ),
                                          ],
                                        }),
                                    },
                                    T.email
                                  )
                                ),
                                _.placeholder,
                              ],
                            }),
                        }),
                      }),
                      g.jsx(ko, {
                        display: "none",
                        spacing: "sm",
                        icon: g.jsx(au, {
                          color: "blue",
                          variant: "filled",
                          children: g.jsx("i", {
                            className: "fa fa-user-circle-o",
                          }),
                        }),
                        children: s.map((_) =>
                          g.jsxs(
                            ko.Item,
                            {
                              onClick: () => R(_),
                              style: { cursor: "pointer" },
                              children: [_.firstName, " ", _.lastName],
                            },
                            _.email
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                g.jsx(Ye.Col, {
                  span: { base: 12, md: 8, lg: 9 },
                  children: g.jsxs(ol, {
                    shadow: "xs",
                    padding: "lg",
                    className: "pt-3",
                    children: [
                      g.jsx("h4", {
                        children: c ? "Edit Contributor" : "Add Contributor",
                      }),
                      g.jsxs(Ye, {
                        gutter: "sm",
                        style: { marginBottom: "1rem" },
                        children: [
                          g.jsxs(Ye.Col, {
                            span: { base: 12, xs: 3 },
                            children: [
                              g.jsx("span", {
                                className: "label",
                                children: "First Name",
                              }),
                              g.jsx(Tr, {
                                name: "firstName",
                                value: l.firstName,
                                onChange: S,
                              }),
                            ],
                          }),
                          g.jsxs(Ye.Col, {
                            span: { base: 12, xs: 3 },
                            children: [
                              g.jsx("span", {
                                className: "label",
                                children: "Last Name",
                              }),
                              g.jsx(Tr, {
                                name: "lastName",
                                value: l.lastName,
                                onChange: S,
                              }),
                            ],
                          }),
                          g.jsxs(Ye.Col, {
                            span: { base: 12, xs: 6 },
                            children: [
                              g.jsx("span", {
                                className: "label",
                                children: "Email Address",
                              }),
                              g.jsx(Tr, {
                                name: "email",
                                autoComplete: "email",
                                value: l.email,
                                onChange: S,
                                placeholder: "name@example.org",
                              }),
                            ],
                          }),
                          g.jsxs(Ye.Col, {
                            span: 12,
                            children: [
                              g.jsx("span", {
                                className: "label",
                                children: "Institution (optional)",
                              }),
                              g.jsx(Tr, {
                                name: "institution",
                                value: l.institution,
                                onChange: S,
                              }),
                            ],
                          }),
                          g.jsxs(Ye.Col, {
                            span: 12,
                            children: [
                              g.jsxs("span", {
                                className: "label",
                                children: [
                                  "Contributor Role (optional)",
                                  g.jsx(Jn, {
                                    className: "fa fa-question-circle-o",
                                    onClick: x,
                                    ml: 10,
                                    fz: 18,
                                  }),
                                ],
                              }),
                              g.jsx(lu, {
                                name: "role",
                                value: l.role,
                                onChange: C,
                                data: [
                                  { group: "Main Roles", items: [...y] },
                                  { group: "Additional Roles", items: [...b] },
                                ],
                                placeholder: "Select role",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c
                        ? g.jsxs(Ye, {
                            className: "mt-5",
                            children: [
                              g.jsx(Ye.Col, {
                                span: { base: 12, md: 3 },
                                children: g.jsx(yt, {
                                  fullWidth: !0,
                                  className: "btn-blue-outline small-button",
                                  onClick: () => {
                                    u(null),
                                      a({
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        institution: "",
                                        role: [],
                                      }),
                                      f(!1);
                                  },
                                  children: "Cancel",
                                }),
                              }),
                              g.jsx(Ye.Col, {
                                span: { base: 12, md: 3 },
                                children: g.jsx(yt, {
                                  fullWidth: !0,
                                  className: "btn-red-outline small-button",
                                  onClick: () => I(c),
                                  children: "Remove",
                                }),
                              }),
                              g.jsx(Ye.Col, {
                                span: { base: 0, md: 2 },
                                className: "d-none d-lg-block",
                              }),
                              g.jsx(Ye.Col, {
                                span: { base: 12, md: 4 },
                                children: g.jsx(yt, {
                                  fullWidth: !0,
                                  onClick: P,
                                  className: "btn-blue small-button",
                                  disabled: !l.firstName || !l.lastName || !d,
                                  children: "Save",
                                }),
                              }),
                            ],
                          })
                        : g.jsx(yt, {
                            onClick: E,
                            className: "btn-blue mt-5",
                            disabled: !l.firstName || !l.lastName || !d,
                            children: "Add Contributor",
                          }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      g.jsx(xn, {
        opened: h,
        onClose: v,
        title: "Roles Description",
        size: "50%",
        yOffset: "10vh",
        scrollAreaComponent: "ScrollArea.Autosize",
        children: g.jsx(_A, {}),
      }),
    ],
  });
};
IC.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
};
const DF = new Map([
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
function Rl(e, t) {
  const n = RF(e);
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
function RF(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(),
      o = DF.get(r);
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
var Js = (e, t, n) =>
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
const PF = [".DS_Store", "Thumbs.db"];
function NF(e) {
  return Js(this, null, function* () {
    return dc(e) && _F(e.dataTransfer)
      ? $F(e.dataTransfer, e.type)
      : OF(e)
      ? kF(e)
      : Array.isArray(e) &&
        e.every((t) => "getFile" in t && typeof t.getFile == "function")
      ? TF(e)
      : [];
  });
}
function _F(e) {
  return dc(e);
}
function OF(e) {
  return dc(e) && dc(e.target);
}
function dc(e) {
  return typeof e == "object" && e !== null;
}
function kF(e) {
  return Sp(e.target.files).map((t) => Rl(t));
}
function TF(e) {
  return Js(this, null, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Rl(n));
  });
}
function $F(e, t) {
  return Js(this, null, function* () {
    if (e.items) {
      const n = Sp(e.items).filter((o) => o.kind === "file");
      if (t !== "drop") return n;
      const r = yield Promise.all(n.map(AF));
      return N0(jC(r));
    }
    return N0(Sp(e.files).map((n) => Rl(n)));
  });
}
function N0(e) {
  return e.filter((t) => PF.indexOf(t.name) === -1);
}
function Sp(e) {
  if (e === null) return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function AF(e) {
  if (typeof e.webkitGetAsEntry != "function") return _0(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? LC(t) : _0(e);
}
function jC(e) {
  return e.reduce((t, n) => [...t, ...(Array.isArray(n) ? jC(n) : [n])], []);
}
function _0(e) {
  const t = e.getAsFile();
  if (!t) return Promise.reject(`${e} is not a File`);
  const n = Rl(t);
  return Promise.resolve(n);
}
function IF(e) {
  return Js(this, null, function* () {
    return e.isDirectory ? LC(e) : jF(e);
  });
}
function LC(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function s() {
      t.readEntries(
        (i) =>
          Js(this, null, function* () {
            if (i.length) {
              const l = Promise.all(i.map(IF));
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
function jF(e) {
  return Js(this, null, function* () {
    return new Promise((t, n) => {
      e.file(
        (r) => {
          const o = Rl(r, e.fullPath);
          t(o);
        },
        (r) => {
          n(r);
        }
      );
    });
  });
}
function LF(e, t) {
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
var MF = Object.defineProperty,
  FF = Object.defineProperties,
  BF = Object.getOwnPropertyDescriptors,
  O0 = Object.getOwnPropertySymbols,
  zF = Object.prototype.hasOwnProperty,
  VF = Object.prototype.propertyIsEnumerable,
  k0 = (e, t, n) =>
    t in e
      ? MF(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  WF = (e, t) => {
    for (var n in t || (t = {})) zF.call(t, n) && k0(e, n, t[n]);
    if (O0) for (var n of O0(t)) VF.call(t, n) && k0(e, n, t[n]);
    return e;
  },
  UF = (e, t) => FF(e, BF(t));
const HF = "file-invalid-type",
  GF = "file-too-large",
  YF = "file-too-small",
  qF = "too-many-files",
  KF = (e) => {
    e = Array.isArray(e) && e.length === 1 ? e[0] : e;
    const t = Array.isArray(e) ? `one of ${e.join(", ")}` : e;
    return { code: HF, message: `File type must be ${t}` };
  },
  T0 = (e) => ({
    code: GF,
    message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  $0 = (e) => ({
    code: YF,
    message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  XF = { code: qF, message: "Too many files" };
function MC(e, t) {
  const n = e.type === "application/x-moz-file" || LF(e, t);
  return [n, n ? null : KF(t)];
}
function FC(e, t, n) {
  if (po(e.size))
    if (po(t) && po(n)) {
      if (e.size > n) return [!1, T0(n)];
      if (e.size < t) return [!1, $0(t)];
    } else {
      if (po(t) && e.size < t) return [!1, $0(t)];
      if (po(n) && e.size > n) return [!1, T0(n)];
    }
  return [!0, null];
}
function po(e) {
  return e != null;
}
function QF({
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
        const [a] = MC(l, t),
          [c] = FC(l, n, r),
          u = i ? i(l) : null;
        return a && c && !u;
      });
}
function fc(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
    ? e.cancelBubble
    : !1;
}
function ia(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(
        e.dataTransfer.types,
        (t) => t === "Files" || t === "application/x-moz-file"
      )
    : !!e.target && !!e.target.files;
}
function A0(e) {
  e.preventDefault();
}
function JF(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function ZF(e) {
  return e.indexOf("Edge/") !== -1;
}
function e3(e = window.navigator.userAgent) {
  return JF(e) || ZF(e);
}
function Hn(...e) {
  return (t, ...n) => e.some((r) => (!fc(t) && r && r(t, ...n), fc(t)));
}
function t3() {
  return "showOpenFilePicker" in window;
}
function n3(e) {
  return po(e)
    ? [
        {
          description: "Files",
          accept: Object.entries(e)
            .filter(([n, r]) => {
              let o = !0;
              return (
                BC(n) ||
                  (console.warn(
                    `Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`
                  ),
                  (o = !1)),
                (!Array.isArray(r) || !r.every(zC)) &&
                  (console.warn(
                    `Skipped "${n}" because an invalid file extension was provided.`
                  ),
                  (o = !1)),
                o
              );
            })
            .reduce((n, [r, o]) => UF(WF({}, n), { [r]: o }), {}),
        },
      ]
    : e;
}
function r3(e) {
  if (po(e))
    return Object.entries(e)
      .reduce((t, [n, r]) => [...t, n, ...r], [])
      .filter((t) => BC(t) || zC(t))
      .join(",");
}
function o3(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function s3(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
function BC(e) {
  return (
    e === "audio/*" ||
    e === "video/*" ||
    e === "image/*" ||
    e === "text/*" ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function zC(e) {
  return /^.*\.[\w]+$/.test(e);
}
var i3 = Object.defineProperty,
  l3 = Object.defineProperties,
  a3 = Object.getOwnPropertyDescriptors,
  pc = Object.getOwnPropertySymbols,
  VC = Object.prototype.hasOwnProperty,
  WC = Object.prototype.propertyIsEnumerable,
  I0 = (e, t, n) =>
    t in e
      ? i3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Dt = (e, t) => {
    for (var n in t || (t = {})) VC.call(t, n) && I0(e, n, t[n]);
    if (pc) for (var n of pc(t)) WC.call(t, n) && I0(e, n, t[n]);
    return e;
  },
  Pr = (e, t) => l3(e, a3(t)),
  mc = (e, t) => {
    var n = {};
    for (var r in e) VC.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && pc)
      for (var r of pc(e)) t.indexOf(r) < 0 && WC.call(e, r) && (n[r] = e[r]);
    return n;
  };
const lg = w.forwardRef((e, t) => {
  var n = e,
    { children: r } = n,
    o = mc(n, ["children"]);
  const s = HC(o),
    { open: i } = s,
    l = mc(s, ["open"]);
  return (
    w.useImperativeHandle(t, () => ({ open: i }), [i]),
    be.createElement(w.Fragment, null, r(Pr(Dt({}, l), { open: i })))
  );
});
lg.displayName = "Dropzone";
const UC = {
  disabled: !1,
  getFilesFromEvent: NF,
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
lg.defaultProps = UC;
lg.propTypes = {
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
const Cp = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function HC(e = {}) {
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
      onDropRejected: p,
      onFileDialogCancel: m,
      onFileDialogOpen: h,
      useFsAccessApi: x,
      autoFocus: v,
      preventDropOnDocument: y,
      noClick: b,
      noKeyboard: S,
      noDrag: C,
      noDragEventsBubbling: E,
      onError: R,
      validator: P,
    } = Dt(Dt({}, UC), e),
    I = w.useMemo(() => r3(t), [t]),
    _ = w.useMemo(() => n3(t), [t]),
    T = w.useMemo(() => (typeof h == "function" ? h : j0), [h]),
    M = w.useMemo(() => (typeof m == "function" ? m : j0), [m]),
    z = w.useRef(null),
    L = w.useRef(null),
    [$, O] = w.useReducer(c3, Cp),
    { isFocused: k, isFileDialogActive: N } = $,
    D = w.useRef(typeof window < "u" && window.isSecureContext && x && t3()),
    j = () => {
      !D.current &&
        N &&
        setTimeout(() => {
          if (L.current) {
            const { files: q } = L.current;
            q.length || (O({ type: "closeDialog" }), M());
          }
        }, 300);
    };
  w.useEffect(
    () => (
      window.addEventListener("focus", j, !1),
      () => {
        window.removeEventListener("focus", j, !1);
      }
    ),
    [L, N, M, D]
  );
  const A = w.useRef([]),
    B = (q) => {
      (z.current && z.current.contains(q.target)) ||
        (q.preventDefault(), (A.current = []));
    };
  w.useEffect(
    () => (
      y &&
        (document.addEventListener("dragover", A0, !1),
        document.addEventListener("drop", B, !1)),
      () => {
        y &&
          (document.removeEventListener("dragover", A0),
          document.removeEventListener("drop", B));
      }
    ),
    [z, y]
  ),
    w.useEffect(
      () => (!n && v && z.current && z.current.focus(), () => {}),
      [z, v, n]
    );
  const Y = w.useCallback(
      (q) => {
        R ? R(q) : console.error(q);
      },
      [R]
    ),
    J = w.useCallback(
      (q) => {
        q.preventDefault(),
          q.persist(),
          Ee(q),
          (A.current = [...A.current, q.target]),
          ia(q) &&
            Promise.resolve(r(q))
              .then((ie) => {
                if (fc(q) && !E) return;
                const de = ie.length,
                  Pe =
                    de > 0 &&
                    QF({
                      files: ie,
                      accept: I,
                      minSize: s,
                      maxSize: o,
                      multiple: i,
                      maxFiles: l,
                      validator: P,
                    }),
                  Ve = de > 0 && !Pe;
                O({
                  isDragAccept: Pe,
                  isDragReject: Ve,
                  isDragActive: !0,
                  type: "setDraggedFiles",
                }),
                  a && a(q);
              })
              .catch((ie) => Y(ie));
      },
      [r, a, Y, E, I, s, o, i, l, P]
    ),
    ee = w.useCallback(
      (q) => {
        q.preventDefault(), q.persist(), Ee(q);
        const ie = ia(q);
        if (ie && q.dataTransfer)
          try {
            q.dataTransfer.dropEffect = "copy";
          } catch {}
        return ie && u && u(q), !1;
      },
      [u, E]
    ),
    oe = w.useCallback(
      (q) => {
        q.preventDefault(), q.persist(), Ee(q);
        const ie = A.current.filter(
            (Pe) => z.current && z.current.contains(Pe)
          ),
          de = ie.indexOf(q.target);
        de !== -1 && ie.splice(de, 1),
          (A.current = ie),
          !(ie.length > 0) &&
            (O({
              type: "setDraggedFiles",
              isDragActive: !1,
              isDragAccept: !1,
              isDragReject: !1,
            }),
            ia(q) && c && c(q));
      },
      [z, c, E]
    ),
    ne = w.useCallback(
      (q, ie) => {
        const de = [],
          Pe = [];
        q.forEach((Ve) => {
          const [_t, Ne] = MC(Ve, I),
            [We, sn] = FC(Ve, s, o),
            Je = P ? P(Ve) : null;
          if (_t && We && !Je) de.push(Ve);
          else {
            let Ot = [Ne, sn];
            Je && (Ot = Ot.concat(Je)),
              Pe.push({ file: Ve, errors: Ot.filter((tr) => tr) });
          }
        }),
          ((!i && de.length > 1) || (i && l >= 1 && de.length > l)) &&
            (de.forEach((Ve) => {
              Pe.push({ file: Ve, errors: [XF] });
            }),
            de.splice(0)),
          O({ acceptedFiles: de, fileRejections: Pe, type: "setFiles" }),
          d && d(de, Pe, ie),
          Pe.length > 0 && p && p(Pe, ie),
          de.length > 0 && f && f(de, ie);
      },
      [O, i, I, s, o, l, d, f, p, P]
    ),
    ye = w.useCallback(
      (q) => {
        q.preventDefault(),
          q.persist(),
          Ee(q),
          (A.current = []),
          ia(q) &&
            Promise.resolve(r(q))
              .then((ie) => {
                (fc(q) && !E) || ne(ie, q);
              })
              .catch((ie) => Y(ie)),
          O({ type: "reset" });
      },
      [r, ne, Y, E]
    ),
    se = w.useCallback(() => {
      if (D.current) {
        O({ type: "openDialog" }), T();
        const q = { multiple: i, types: _ };
        window
          .showOpenFilePicker(q)
          .then((ie) => r(ie))
          .then((ie) => {
            ne(ie, null), O({ type: "closeDialog" });
          })
          .catch((ie) => {
            o3(ie)
              ? (M(ie), O({ type: "closeDialog" }))
              : s3(ie)
              ? ((D.current = !1),
                L.current
                  ? ((L.current.value = null), L.current.click())
                  : Y(
                      new Error(
                        "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
                      )
                    ))
              : Y(ie);
          });
        return;
      }
      L.current &&
        (O({ type: "openDialog" }),
        T(),
        (L.current.value = null),
        L.current.click());
    }, [O, T, M, x, ne, Y, _, i]),
    ce = w.useCallback(
      (q) => {
        !z.current ||
          !z.current.isEqualNode(q.target) ||
          ((q.key === " " ||
            q.key === "Enter" ||
            q.keyCode === 32 ||
            q.keyCode === 13) &&
            (q.preventDefault(), se()));
      },
      [z, se]
    ),
    te = w.useCallback(() => {
      O({ type: "focus" });
    }, []),
    me = w.useCallback(() => {
      O({ type: "blur" });
    }, []),
    le = w.useCallback(() => {
      b || (e3() ? setTimeout(se, 0) : se());
    }, [b, se]),
    ae = (q) => (n ? null : q),
    $e = (q) => (S ? null : ae(q)),
    He = (q) => (C ? null : ae(q)),
    Ee = (q) => {
      E && q.stopPropagation();
    },
    st = w.useMemo(
      () =>
        (q = {}) => {
          var ie = q,
            {
              refKey: de = "ref",
              role: Pe,
              onKeyDown: Ve,
              onFocus: _t,
              onBlur: Ne,
              onClick: We,
              onDragEnter: sn,
              onDragOver: Je,
              onDragLeave: Ot,
              onDrop: tr,
            } = ie,
            it = mc(ie, [
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
          return Dt(
            Dt(
              {
                onKeyDown: $e(Hn(Ve, ce)),
                onFocus: $e(Hn(_t, te)),
                onBlur: $e(Hn(Ne, me)),
                onClick: ae(Hn(We, le)),
                onDragEnter: He(Hn(sn, J)),
                onDragOver: He(Hn(Je, ee)),
                onDragLeave: He(Hn(Ot, oe)),
                onDrop: He(Hn(tr, ye)),
                role: typeof Pe == "string" && Pe !== "" ? Pe : "presentation",
                [de]: z,
              },
              !n && !S ? { tabIndex: 0 } : {}
            ),
            it
          );
        },
      [z, ce, te, me, le, J, ee, oe, ye, S, C, n]
    ),
    Ae = w.useCallback((q) => {
      q.stopPropagation();
    }, []),
    ze = w.useMemo(
      () =>
        (q = {}) => {
          var ie = q,
            { refKey: de = "ref", onChange: Pe, onClick: Ve } = ie,
            _t = mc(ie, ["refKey", "onChange", "onClick"]);
          const Ne = {
            accept: I,
            multiple: i,
            type: "file",
            style: { display: "none" },
            onChange: ae(Hn(Pe, ye)),
            onClick: ae(Hn(Ve, Ae)),
            tabIndex: -1,
            [de]: L,
          };
          return Dt(Dt({}, Ne), _t);
        },
      [L, t, i, ye, n]
    );
  return Pr(Dt({}, $), {
    isFocused: k && !n,
    getRootProps: st,
    getInputProps: ze,
    rootRef: z,
    inputRef: L,
    open: ae(se),
  });
}
function c3(e, t) {
  switch (t.type) {
    case "focus":
      return Pr(Dt({}, e), { isFocused: !0 });
    case "blur":
      return Pr(Dt({}, e), { isFocused: !1 });
    case "openDialog":
      return Pr(Dt({}, Cp), { isFileDialogActive: !0 });
    case "closeDialog":
      return Pr(Dt({}, e), { isFileDialogActive: !1 });
    case "setDraggedFiles":
      return Pr(Dt({}, e), {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject,
      });
    case "setFiles":
      return Pr(Dt({}, e), {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
      });
    case "reset":
      return Dt({}, Cp);
    default:
      return e;
  }
}
function j0() {}
const [u3, d3] = Ln("Dropzone component was not found in tree");
function ag(e) {
  const t = (n) => {
    const { children: r, ...o } = W(`Dropzone${Gy(e)}`, {}, n),
      s = d3(),
      i = Lo(r) ? r : g.jsx("span", { children: r });
    return s[e] ? w.cloneElement(i, o) : null;
  };
  return (t.displayName = `@mantine/dropzone/${Gy(e)}`), t;
}
const f3 = ag("accept"),
  p3 = ag("reject"),
  m3 = ag("idle");
var pl = {
  root: "m_d46a4834",
  inner: "m_b85f7144",
  fullScreen: "m_96f6e9ad",
  dropzone: "m_7946116d",
};
const h3 = {
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
  g3 = (e, { radius: t, variant: n, acceptColor: r, rejectColor: o }) => {
    const s = e.variantColorResolver({
        color: r || e.primaryColor,
        theme: e,
        variant: n,
      }),
      i = e.variantColorResolver({ color: o || "red", theme: e, variant: n });
    return {
      root: {
        "--dropzone-radius": Mn(t),
        "--dropzone-accept-color": s.color,
        "--dropzone-accept-bg": s.background,
        "--dropzone-reject-color": i.color,
        "--dropzone-reject-bg": i.background,
      },
    };
  },
  no = X((e, t) => {
    const n = W("Dropzone", h3, e),
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
        maxSize: p,
        accept: m,
        children: h,
        onDropAny: x,
        onDrop: v,
        onReject: y,
        openRef: b,
        name: S,
        maxFiles: C,
        autoFocus: E,
        activateOnClick: R,
        activateOnDrag: P,
        dragEventsBubbling: I,
        activateOnKeyboard: _,
        onDragEnter: T,
        onDragLeave: M,
        onDragOver: z,
        onFileDialogCancel: L,
        onFileDialogOpen: $,
        preventDropOnDocument: O,
        useFsAccessApi: k,
        getFilesFromEvent: N,
        validator: D,
        rejectColor: j,
        acceptColor: A,
        enablePointerEvents: B,
        loaderProps: Y,
        inputProps: J,
        mod: ee,
        ...oe
      } = n,
      ne = ue({
        name: "Dropzone",
        classes: pl,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: g3,
      }),
      {
        getRootProps: ye,
        getInputProps: se,
        isDragAccept: ce,
        isDragReject: te,
        open: me,
      } = HC({
        onDrop: x,
        onDropAccepted: v,
        onDropRejected: y,
        disabled: u || d,
        accept: Array.isArray(m)
          ? m.reduce((ae, $e) => ({ ...ae, [$e]: [] }), {})
          : m,
        multiple: f,
        maxSize: p,
        maxFiles: C,
        autoFocus: E,
        noClick: !R,
        noDrag: !P,
        noDragEventsBubbling: !I,
        noKeyboard: !_,
        onDragEnter: T,
        onDragLeave: M,
        onDragOver: z,
        onFileDialogCancel: L,
        onFileDialogOpen: $,
        preventDropOnDocument: O,
        useFsAccessApi: k,
        validator: D,
        ...(N ? { getFilesFromEvent: N } : null),
      });
    Am(b, me);
    const le = !ce && !te;
    return g.jsx(u3, {
      value: { accept: ce, reject: te, idle: le },
      children: g.jsxs(K, {
        ...ye(),
        ...ne("root", { focusable: !0 }),
        ...oe,
        mod: [
          {
            accept: ce,
            reject: te,
            idle: le,
            loading: d,
            "activate-on-click": R,
          },
          ee,
        ],
        children: [
          g.jsx(Rh, {
            visible: d,
            overlayProps: { radius: c },
            unstyled: l,
            loaderProps: Y,
          }),
          g.jsx("input", { ...se(J), name: S }),
          g.jsx("div", {
            ...ne("inner"),
            ref: t,
            "data-enable-pointer-events": B || void 0,
            children: h,
          }),
        ],
      }),
    });
  });
no.classes = pl;
no.displayName = "@mantine/dropzone/Dropzone";
no.Accept = f3;
no.Idle = m3;
no.Reject = p3;
const y3 = {
    loading: !1,
    maxSize: 1 / 0,
    activateOnClick: !1,
    activateOnDrag: !0,
    dragEventsBubbling: !0,
    activateOnKeyboard: !0,
    active: !0,
    zIndex: Mo("max"),
    withinPortal: !0,
  },
  cg = X((e, t) => {
    const n = W("DropzoneFullScreen", y3, e),
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
        withinPortal: p,
        portalProps: m,
        ...h
      } = n,
      x = ue({
        name: "DropzoneFullScreen",
        classes: pl,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "fullScreen",
      }),
      { resolvedClassNames: v, resolvedStyles: y } = Bo({
        classNames: r,
        styles: i,
        props: n,
      }),
      [b, S] = w.useState(0),
      [C, { open: E, close: R }] = Po(!1),
      P = (_) => {
        var T;
        (T = _.dataTransfer) != null &&
          T.types.includes("Files") &&
          (S((M) => M + 1), E());
      },
      I = () => {
        S((_) => _ - 1);
      };
    return (
      w.useEffect(() => {
        b === 0 && R();
      }, [b]),
      w.useEffect(() => {
        if (c)
          return (
            document.addEventListener("dragenter", P, !1),
            document.addEventListener("dragleave", I, !1),
            () => {
              document.removeEventListener("dragenter", P, !1),
                document.removeEventListener("dragleave", I, !1);
            }
          );
      }, [c]),
      g.jsx(Hc, {
        ...m,
        withinPortal: p,
        children: g.jsx(K, {
          ...x("fullScreen", {
            style: {
              opacity: C ? 1 : 0,
              pointerEvents: C ? "all" : "none",
              zIndex: f,
            },
          }),
          ref: t,
          children: g.jsx(no, {
            ...h,
            classNames: v,
            styles: y,
            unstyled: l,
            className: pl.dropzone,
            onDrop: (_) => {
              u == null || u(_), R(), S(0);
            },
            onReject: (_) => {
              d == null || d(_), R(), S(0);
            },
          }),
        }),
      })
    );
  });
cg.classes = pl;
cg.displayName = "@mantine/dropzone/DropzoneFullScreen";
no.FullScreen = cg;
const la = no,
  GC = "",
  v3 = "generic",
  b3 = GC + "/profile/profile/",
  ug = GC + "/api/submissions/",
  w3 = "https://helpdesk.gfbio.org/browse/",
  x3 = "/upload/",
  YC = 20,
  qC = 1e10;
var KC = { exports: {} };
(function (e, t) {
  /**
   * filesize
   *
   * @copyright 2019 Jason Mulligan <jason.mulligan@avoidwork.com>
   * @license BSD-3-Clause
   * @version 4.2.1
   */ (function (n) {
    var r = /^(b|B)$/,
      o = {
        iec: {
          bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
          bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
        },
        jedec: {
          bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
          bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        },
      },
      s = {
        iec: [
          "",
          "kibi",
          "mebi",
          "gibi",
          "tebi",
          "pebi",
          "exbi",
          "zebi",
          "yobi",
        ],
        jedec: [
          "",
          "kilo",
          "mega",
          "giga",
          "tera",
          "peta",
          "exa",
          "zetta",
          "yotta",
        ],
      };
    function i(l) {
      var a =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        c = [],
        u = 0,
        d = void 0,
        f = void 0,
        p = void 0,
        m = void 0,
        h = void 0,
        x = void 0,
        v = void 0,
        y = void 0,
        b = void 0,
        S = void 0,
        C = void 0,
        E = void 0,
        R = void 0,
        P = void 0,
        I = void 0,
        _ = void 0,
        T = void 0;
      if (isNaN(l)) throw new TypeError("Invalid number");
      return (
        (p = a.bits === !0),
        (R = a.unix === !0),
        (f = a.base || 2),
        (E = a.round !== void 0 ? a.round : R ? 1 : 2),
        (v = a.locale !== void 0 ? a.locale : ""),
        (y = a.localeOptions || {}),
        (P = a.separator !== void 0 ? a.separator : ""),
        (I = a.spacer !== void 0 ? a.spacer : R ? "" : " "),
        (T = a.symbols || {}),
        (_ = (f === 2 && a.standard) || "jedec"),
        (C = a.output || "string"),
        (h = a.fullform === !0),
        (x = a.fullforms instanceof Array ? a.fullforms : []),
        (d = a.exponent !== void 0 ? a.exponent : -1),
        (S = Number(l)),
        (b = S < 0),
        (m = f > 2 ? 1e3 : 1024),
        b && (S = -S),
        (d === -1 || isNaN(d)) &&
          ((d = Math.floor(Math.log(S) / Math.log(m))), d < 0 && (d = 0)),
        d > 8 && (d = 8),
        C === "exponent"
          ? d
          : (S === 0
              ? ((c[0] = 0), (c[1] = R ? "" : o[_][p ? "bits" : "bytes"][d]))
              : ((u = S / (f === 2 ? Math.pow(2, d * 10) : Math.pow(1e3, d))),
                p && ((u = u * 8), u >= m && d < 8 && ((u = u / m), d++)),
                (c[0] = Number(u.toFixed(d > 0 ? E : 0))),
                c[0] === m &&
                  d < 8 &&
                  a.exponent === void 0 &&
                  ((c[0] = 1), d++),
                (c[1] =
                  f === 10 && d === 1
                    ? p
                      ? "kb"
                      : "kB"
                    : o[_][p ? "bits" : "bytes"][d]),
                R &&
                  ((c[1] =
                    _ === "jedec"
                      ? c[1].charAt(0)
                      : d > 0
                      ? c[1].replace(/B$/, "")
                      : c[1]),
                  r.test(c[1]) && ((c[0] = Math.floor(c[0])), (c[1] = "")))),
            b && (c[0] = -c[0]),
            (c[1] = T[c[1]] || c[1]),
            v === !0
              ? (c[0] = c[0].toLocaleString())
              : v.length > 0
              ? (c[0] = c[0].toLocaleString(v, y))
              : P.length > 0 && (c[0] = c[0].toString().replace(".", P)),
            C === "array"
              ? c
              : (h &&
                  (c[1] = x[d]
                    ? x[d]
                    : s[_][d] + (p ? "bit" : "byte") + (c[0] === 1 ? "" : "s")),
                C === "object" ? { value: c[0], symbol: c[1] } : c.join(I)))
      );
    }
    (i.partial = function (l) {
      return function (a) {
        return i(a, l);
      };
    }),
      (e.exports = i);
  })();
})(KC);
var S3 = KC.exports;
const XC = yr(S3),
  QC = ({ showUploadLimitMessage: e }) =>
    g.jsx(Bc, {
      in: e,
      children: g.jsx(Ai, {
        className: "form-group col-md-12",
        children: g.jsxs(Ai, {
          role: "alert",
          className: "fade alert alert-light show",
          children: [
            g.jsxs(Ai, {
              className: "alert-heading h4",
              children: [
                g.jsx("i", { className: "fa fa-bolt" }),
                " Upload limit exceeded",
              ],
            }),
            g.jsxs(Kr, {
              children: [
                "If you need to upload more than ",
                YC,
                " files, or more than",
                " ",
                XC(qC, { base: 10 }),
                ", either provide a URL in the field below, or leave a comment for the curator at the bottom.",
              ],
            }),
          ],
        }),
      }),
    });
QC.propTypes = { showUploadLimitMessage: U.bool };
const JC = ({
  fileUploads: e,
  handleRemove: t,
  metadataIndex: n,
  handleMetadataSelect: r,
}) => {
  const s = e.map((i, l) => {
    let a = { width: `${i.progress || 0}%` },
      c = g.jsx("div", {
        className: "container h-100",
        children: g.jsxs("small", {
          className: "file-name row h-100 pl-3",
          children: [
            g.jsx("div", {
              className:
                "col-1 d-flex justify-content-end align-items-center checkbox-col",
              children: g.jsx(ks, {
                type: "checkbox",
                id: `primary${l}`,
                value: l,
                onChange: () => r(l),
                checked: l === n,
              }),
            }),
            g.jsx("div", {
              className: "col-11 d-flex align-items-center",
              children: g.jsxs("label", {
                htmlFor: `primary${l}`,
                className: "metadata mb-0 w-100",
                children: [
                  g.jsx("i", { className: "icon ion-md-document pub pr-2" }),
                  i.name,
                ],
              }),
            }),
          ],
        }),
      });
    return g.jsx(
      "div",
      {
        className: "row small file-list my-1 py-2",
        children: g.jsxs("div", {
          className: "col-12 container",
          children: [
            g.jsxs("div", {
              className: "row",
              children: [
                g.jsx("div", { className: "col-md-9", children: c }),
                g.jsx("small", {
                  className: "col-2 file-size d-flex align-items-center",
                  children: XC(i.size),
                }),
                g.jsx("button", {
                  className: "col-1 btn btn-remove d-flex justify-content-end",
                  onClick: (u) => {
                    u.preventDefault(), t(l);
                  },
                  children: g.jsx("i", {
                    className: "fa fa-trash",
                    "aria-hidden": "true",
                  }),
                }),
              ],
            }),
            g.jsxs("div", {
              className: "row progress-row",
              children: [
                g.jsx("div", { className: "col-2" }),
                g.jsx("div", {
                  className: "progress col-9",
                  children: g.jsx("div", {
                    className: "progress-bar",
                    role: "progressbar",
                    style: a,
                    "aria-valuenow": `${i.progress || 0}`,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                  }),
                }),
              ],
            }),
          ],
        }),
      },
      l
    );
  });
  return g.jsx(g.Fragment, {
    children:
      s.length > 0 &&
      g.jsxs("div", {
        className: "container mb-3",
        children: [
          g.jsx("div", {
            className: "row",
            children: g.jsx("div", {
              className: "col-md-8",
              children: g.jsx("div", {
                className: "container",
                children: g.jsx("div", {
                  className: "row",
                  children: g.jsxs("span", {
                    className: "pl-0 py-3 col-6 upload-header list-header",
                    children: [
                      "Metadata",
                      g.jsxs(Zn, {
                        width: 320,
                        shadow: "md",
                        position: "right",
                        withArrow: !0,
                        children: [
                          g.jsx(Zn.Target, {
                            children: g.jsx("i", {
                              className: "fa fa-question-circle-o pl-2",
                              "aria-hidden": "true",
                            }),
                          }),
                          g.jsx(Zn.Dropdown, {
                            children: g.jsx("p", {
                              children:
                                "select the primary metadata file, e.g. metadata template",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
          s,
        ],
      }),
  });
};
JC.propTypes = {
  fileUploads: U.array.isRequired,
  handleRemove: U.func.isRequired,
  metadataIndex: U.number.isRequired,
  handleMetadataSelect: U.func.isRequired,
};
const dg = (e) => {
  const {
      title: t,
      description: n,
      form: r,
      field_id: o,
      onFilesChange: s,
    } = e,
    [i, l] = w.useState(-1),
    [a, c] = w.useState(r.values.files || []),
    u = (x) => {
      const v = i === x ? -1 : x;
      l(v), s(a, f, v);
    },
    d = (x) => {
      let v = 0;
      for (let y of x) v += y.size;
      return v <= qC && x.length <= YC;
    },
    [f, p] = w.useState(() => !d(a));
  w.useEffect(() => {
    p(!d(a));
  }, [a]);
  const m = (x) => {
      const v = [...a, ...x];
      c(v), r.setFieldValue("files", v);
      const y = !d(v);
      p(y), s(v, y, i);
    },
    h = (x) => {
      const v = a.filter((S, C) => C !== x);
      let y = i;
      i === x ? (y = -1) : i > x && (y = i - 1),
        c(v),
        l(y),
        r.setFieldValue("files", v);
      const b = !d(v);
      p(b), s(v, b, y);
    };
  return g.jsxs("div", {
    className: "file-upload",
    children: [
      g.jsxs("div", {
        children: [g.jsx("h2", { children: t }), g.jsx(Kr, { children: n })],
      }),
      g.jsx(JC, {
        fileUploads: a,
        handleRemove: h,
        metadataIndex: i,
        handleMetadataSelect: u,
      }),
      g.jsx(QC, { showUploadLimitMessage: f }),
      g.jsx(la, {
        h: 120,
        p: 0,
        multiple: !0,
        onDrop: m,
        children: g.jsxs(vh, {
          h: 120,
          children: [
            g.jsxs(la.Idle, {
              children: [
                "Try ",
                g.jsx("b", { children: "dropping" }),
                " some files here, or ",
                g.jsx("b", { children: "click" }),
                " to select files to upload.",
              ],
            }),
            g.jsx(la.Accept, { children: "Drop files here..." }),
            g.jsx(la.Reject, { children: "Files are invalid" }),
          ],
        }),
      }),
      r.errors.files &&
        g.jsx(Kr, { c: "red", mt: 5, children: r.errors.files }),
    ],
  });
};
dg.defaultProps = {};
dg.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  onFilesChange: U.func.isRequired,
};
var ZC = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(jp, function () {
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
      p = "year",
      m = "date",
      h = "Invalid Date",
      x =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      v =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      y = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (L) {
          var $ = ["th", "st", "nd", "rd"],
            O = L % 100;
          return "[" + L + ($[(O - 20) % 10] || $[O] || $[0]) + "]";
        },
      },
      b = function (L, $, O) {
        var k = String(L);
        return !k || k.length >= $
          ? L
          : "" + Array($ + 1 - k.length).join(O) + L;
      },
      S = {
        s: b,
        z: function (L) {
          var $ = -L.utcOffset(),
            O = Math.abs($),
            k = Math.floor(O / 60),
            N = O % 60;
          return ($ <= 0 ? "+" : "-") + b(k, 2, "0") + ":" + b(N, 2, "0");
        },
        m: function L($, O) {
          if ($.date() < O.date()) return -L(O, $);
          var k = 12 * (O.year() - $.year()) + (O.month() - $.month()),
            N = $.clone().add(k, d),
            D = O - N < 0,
            j = $.clone().add(k + (D ? -1 : 1), d);
          return +(-(k + (O - N) / (D ? N - j : j - N)) || 0);
        },
        a: function (L) {
          return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
        },
        p: function (L) {
          return (
            { M: d, y: p, w: u, d: c, D: m, h: a, m: l, s: i, ms: s, Q: f }[
              L
            ] ||
            String(L || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (L) {
          return L === void 0;
        },
      },
      C = "en",
      E = {};
    E[C] = y;
    var R = "$isDayjsObject",
      P = function (L) {
        return L instanceof M || !(!L || !L[R]);
      },
      I = function L($, O, k) {
        var N;
        if (!$) return C;
        if (typeof $ == "string") {
          var D = $.toLowerCase();
          E[D] && (N = D), O && ((E[D] = O), (N = D));
          var j = $.split("-");
          if (!N && j.length > 1) return L(j[0]);
        } else {
          var A = $.name;
          (E[A] = $), (N = A);
        }
        return !k && N && (C = N), N || (!k && C);
      },
      _ = function (L, $) {
        if (P(L)) return L.clone();
        var O = typeof $ == "object" ? $ : {};
        return (O.date = L), (O.args = arguments), new M(O);
      },
      T = S;
    (T.l = I),
      (T.i = P),
      (T.w = function (L, $) {
        return _(L, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
      });
    var M = (function () {
        function L(O) {
          (this.$L = I(O.locale, null, !0)),
            this.parse(O),
            (this.$x = this.$x || O.x || {}),
            (this[R] = !0);
        }
        var $ = L.prototype;
        return (
          ($.parse = function (O) {
            (this.$d = (function (k) {
              var N = k.date,
                D = k.utc;
              if (N === null) return new Date(NaN);
              if (T.u(N)) return new Date();
              if (N instanceof Date) return new Date(N);
              if (typeof N == "string" && !/Z$/i.test(N)) {
                var j = N.match(x);
                if (j) {
                  var A = j[2] - 1 || 0,
                    B = (j[7] || "0").substring(0, 3);
                  return D
                    ? new Date(
                        Date.UTC(
                          j[1],
                          A,
                          j[3] || 1,
                          j[4] || 0,
                          j[5] || 0,
                          j[6] || 0,
                          B
                        )
                      )
                    : new Date(
                        j[1],
                        A,
                        j[3] || 1,
                        j[4] || 0,
                        j[5] || 0,
                        j[6] || 0,
                        B
                      );
                }
              }
              return new Date(N);
            })(O)),
              this.init();
          }),
          ($.init = function () {
            var O = this.$d;
            (this.$y = O.getFullYear()),
              (this.$M = O.getMonth()),
              (this.$D = O.getDate()),
              (this.$W = O.getDay()),
              (this.$H = O.getHours()),
              (this.$m = O.getMinutes()),
              (this.$s = O.getSeconds()),
              (this.$ms = O.getMilliseconds());
          }),
          ($.$utils = function () {
            return T;
          }),
          ($.isValid = function () {
            return this.$d.toString() !== h;
          }),
          ($.isSame = function (O, k) {
            var N = _(O);
            return this.startOf(k) <= N && N <= this.endOf(k);
          }),
          ($.isAfter = function (O, k) {
            return _(O) < this.startOf(k);
          }),
          ($.isBefore = function (O, k) {
            return this.endOf(k) < _(O);
          }),
          ($.$g = function (O, k, N) {
            return T.u(O) ? this[k] : this.set(N, O);
          }),
          ($.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          ($.valueOf = function () {
            return this.$d.getTime();
          }),
          ($.startOf = function (O, k) {
            var N = this,
              D = !!T.u(k) || k,
              j = T.p(O),
              A = function (se, ce) {
                var te = T.w(
                  N.$u ? Date.UTC(N.$y, ce, se) : new Date(N.$y, ce, se),
                  N
                );
                return D ? te : te.endOf(c);
              },
              B = function (se, ce) {
                return T.w(
                  N.toDate()[se].apply(
                    N.toDate("s"),
                    (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ce)
                  ),
                  N
                );
              },
              Y = this.$W,
              J = this.$M,
              ee = this.$D,
              oe = "set" + (this.$u ? "UTC" : "");
            switch (j) {
              case p:
                return D ? A(1, 0) : A(31, 11);
              case d:
                return D ? A(1, J) : A(0, J + 1);
              case u:
                var ne = this.$locale().weekStart || 0,
                  ye = (Y < ne ? Y + 7 : Y) - ne;
                return A(D ? ee - ye : ee + (6 - ye), J);
              case c:
              case m:
                return B(oe + "Hours", 0);
              case a:
                return B(oe + "Minutes", 1);
              case l:
                return B(oe + "Seconds", 2);
              case i:
                return B(oe + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          ($.endOf = function (O) {
            return this.startOf(O, !1);
          }),
          ($.$set = function (O, k) {
            var N,
              D = T.p(O),
              j = "set" + (this.$u ? "UTC" : ""),
              A = ((N = {}),
              (N[c] = j + "Date"),
              (N[m] = j + "Date"),
              (N[d] = j + "Month"),
              (N[p] = j + "FullYear"),
              (N[a] = j + "Hours"),
              (N[l] = j + "Minutes"),
              (N[i] = j + "Seconds"),
              (N[s] = j + "Milliseconds"),
              N)[D],
              B = D === c ? this.$D + (k - this.$W) : k;
            if (D === d || D === p) {
              var Y = this.clone().set(m, 1);
              Y.$d[A](B),
                Y.init(),
                (this.$d = Y.set(m, Math.min(this.$D, Y.daysInMonth())).$d);
            } else A && this.$d[A](B);
            return this.init(), this;
          }),
          ($.set = function (O, k) {
            return this.clone().$set(O, k);
          }),
          ($.get = function (O) {
            return this[T.p(O)]();
          }),
          ($.add = function (O, k) {
            var N,
              D = this;
            O = Number(O);
            var j = T.p(k),
              A = function (J) {
                var ee = _(D);
                return T.w(ee.date(ee.date() + Math.round(J * O)), D);
              };
            if (j === d) return this.set(d, this.$M + O);
            if (j === p) return this.set(p, this.$y + O);
            if (j === c) return A(1);
            if (j === u) return A(7);
            var B = ((N = {}), (N[l] = r), (N[a] = o), (N[i] = n), N)[j] || 1,
              Y = this.$d.getTime() + O * B;
            return T.w(Y, this);
          }),
          ($.subtract = function (O, k) {
            return this.add(-1 * O, k);
          }),
          ($.format = function (O) {
            var k = this,
              N = this.$locale();
            if (!this.isValid()) return N.invalidDate || h;
            var D = O || "YYYY-MM-DDTHH:mm:ssZ",
              j = T.z(this),
              A = this.$H,
              B = this.$m,
              Y = this.$M,
              J = N.weekdays,
              ee = N.months,
              oe = N.meridiem,
              ne = function (ce, te, me, le) {
                return (ce && (ce[te] || ce(k, D))) || me[te].slice(0, le);
              },
              ye = function (ce) {
                return T.s(A % 12 || 12, ce, "0");
              },
              se =
                oe ||
                function (ce, te, me) {
                  var le = ce < 12 ? "AM" : "PM";
                  return me ? le.toLowerCase() : le;
                };
            return D.replace(v, function (ce, te) {
              return (
                te ||
                (function (me) {
                  switch (me) {
                    case "YY":
                      return String(k.$y).slice(-2);
                    case "YYYY":
                      return T.s(k.$y, 4, "0");
                    case "M":
                      return Y + 1;
                    case "MM":
                      return T.s(Y + 1, 2, "0");
                    case "MMM":
                      return ne(N.monthsShort, Y, ee, 3);
                    case "MMMM":
                      return ne(ee, Y);
                    case "D":
                      return k.$D;
                    case "DD":
                      return T.s(k.$D, 2, "0");
                    case "d":
                      return String(k.$W);
                    case "dd":
                      return ne(N.weekdaysMin, k.$W, J, 2);
                    case "ddd":
                      return ne(N.weekdaysShort, k.$W, J, 3);
                    case "dddd":
                      return J[k.$W];
                    case "H":
                      return String(A);
                    case "HH":
                      return T.s(A, 2, "0");
                    case "h":
                      return ye(1);
                    case "hh":
                      return ye(2);
                    case "a":
                      return se(A, B, !0);
                    case "A":
                      return se(A, B, !1);
                    case "m":
                      return String(B);
                    case "mm":
                      return T.s(B, 2, "0");
                    case "s":
                      return String(k.$s);
                    case "ss":
                      return T.s(k.$s, 2, "0");
                    case "SSS":
                      return T.s(k.$ms, 3, "0");
                    case "Z":
                      return j;
                  }
                  return null;
                })(ce) ||
                j.replace(":", "")
              );
            });
          }),
          ($.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          ($.diff = function (O, k, N) {
            var D,
              j = this,
              A = T.p(k),
              B = _(O),
              Y = (B.utcOffset() - this.utcOffset()) * r,
              J = this - B,
              ee = function () {
                return T.m(j, B);
              };
            switch (A) {
              case p:
                D = ee() / 12;
                break;
              case d:
                D = ee();
                break;
              case f:
                D = ee() / 3;
                break;
              case u:
                D = (J - Y) / 6048e5;
                break;
              case c:
                D = (J - Y) / 864e5;
                break;
              case a:
                D = J / o;
                break;
              case l:
                D = J / r;
                break;
              case i:
                D = J / n;
                break;
              default:
                D = J;
            }
            return N ? D : T.a(D);
          }),
          ($.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          ($.$locale = function () {
            return E[this.$L];
          }),
          ($.locale = function (O, k) {
            if (!O) return this.$L;
            var N = this.clone(),
              D = I(O, k, !0);
            return D && (N.$L = D), N;
          }),
          ($.clone = function () {
            return T.w(this.$d, this);
          }),
          ($.toDate = function () {
            return new Date(this.valueOf());
          }),
          ($.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          ($.toISOString = function () {
            return this.$d.toISOString();
          }),
          ($.toString = function () {
            return this.$d.toUTCString();
          }),
          L
        );
      })(),
      z = M.prototype;
    return (
      (_.prototype = z),
      [
        ["$ms", s],
        ["$s", i],
        ["$m", l],
        ["$H", a],
        ["$W", c],
        ["$M", d],
        ["$y", p],
        ["$D", m],
      ].forEach(function (L) {
        z[L[1]] = function ($) {
          return this.$g($, L[0], L[1]);
        };
      }),
      (_.extend = function (L, $) {
        return L.$i || (L($, M, _), (L.$i = !0)), _;
      }),
      (_.locale = I),
      (_.isDayjs = P),
      (_.unix = function (L) {
        return _(1e3 * L);
      }),
      (_.en = E[C]),
      (_.Ls = E),
      (_.p = {}),
      _
    );
  });
})(ZC);
var C3 = ZC.exports;
const Z = yr(C3);
function E3({
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
function eE({
  controlsRef: e,
  direction: t,
  levelIndex: n,
  rowIndex: r,
  cellIndex: o,
  size: s,
}) {
  var a, c, u;
  const i = E3({
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
      ? eE({
          controlsRef: e,
          direction: t,
          levelIndex: i.levelIndex,
          cellIndex: i.cellIndex,
          rowIndex: i.rowIndex,
          size: s,
        })
      : l.focus());
}
function D3(e) {
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
function R3(e) {
  var t;
  return (t = e.current) == null
    ? void 0
    : t.map((n) => n.map((r) => r.length));
}
function fg({
  controlsRef: e,
  levelIndex: t,
  rowIndex: n,
  cellIndex: r,
  event: o,
}) {
  const s = D3(o.key);
  if (s) {
    o.preventDefault();
    const i = R3(e);
    eE({
      controlsRef: e,
      direction: s,
      levelIndex: t,
      rowIndex: n,
      cellIndex: r,
      size: i,
    });
  }
}
var tE = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(jp, function () {
    var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
      r = {};
    return function (o, s, i) {
      var l,
        a = function (f, p, m) {
          m === void 0 && (m = {});
          var h = new Date(f),
            x = (function (v, y) {
              y === void 0 && (y = {});
              var b = y.timeZoneName || "short",
                S = v + "|" + b,
                C = r[S];
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
                    timeZoneName: b,
                  })),
                  (r[S] = C)),
                C
              );
            })(p, m);
          return x.formatToParts(h);
        },
        c = function (f, p) {
          for (var m = a(f, p), h = [], x = 0; x < m.length; x += 1) {
            var v = m[x],
              y = v.type,
              b = v.value,
              S = n[y];
            S >= 0 && (h[S] = parseInt(b, 10));
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
            P = +f;
          return (i.utc(R).valueOf() - (P -= P % 1e3)) / 6e4;
        },
        u = s.prototype;
      (u.tz = function (f, p) {
        f === void 0 && (f = l);
        var m = this.utcOffset(),
          h = this.toDate(),
          x = h.toLocaleString("en-US", { timeZone: f }),
          v = Math.round((h - new Date(x)) / 1e3 / 60),
          y = i(x, { locale: this.$L })
            .$set("millisecond", this.$ms)
            .utcOffset(15 * -Math.round(h.getTimezoneOffset() / 15) - v, !0);
        if (p) {
          var b = y.utcOffset();
          y = y.add(m - b, "minute");
        }
        return (y.$x.$timezone = f), y;
      }),
        (u.offsetName = function (f) {
          var p = this.$x.$timezone || i.tz.guess(),
            m = a(this.valueOf(), p, { timeZoneName: f }).find(function (h) {
              return h.type.toLowerCase() === "timezonename";
            });
          return m && m.value;
        });
      var d = u.startOf;
      (u.startOf = function (f, p) {
        if (!this.$x || !this.$x.$timezone) return d.call(this, f, p);
        var m = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return d.call(m, f, p).tz(this.$x.$timezone, !0);
      }),
        (i.tz = function (f, p, m) {
          var h = m && p,
            x = m || p || l,
            v = c(+i(), x);
          if (typeof f != "string") return i(f).tz(x);
          var y = (function (E, R, P) {
              var I = E - 60 * R * 1e3,
                _ = c(I, P);
              if (R === _) return [I, R];
              var T = c((I -= 60 * (_ - R) * 1e3), P);
              return _ === T
                ? [I, _]
                : [E - 60 * Math.min(_, T) * 1e3, Math.max(_, T)];
            })(i.utc(f, h).valueOf(), v, x),
            b = y[0],
            S = y[1],
            C = i(b).utcOffset(S);
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
})(tE);
var P3 = tE.exports;
const N3 = yr(P3);
var nE = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(jp, function () {
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
              P = R[0],
              I = 60 * +R[1] + +R[2];
            return I === 0 ? 0 : P === "+" ? I : -I;
          })(h)),
          h === null)
        )
          return this;
        var y = Math.abs(h) <= 16 ? 60 * h : h,
          b = this;
        if (x) return (b.$offset = y), (b.$u = h === 0), b;
        if (h !== 0) {
          var S = this.$u
            ? this.toDate().getTimezoneOffset()
            : -1 * this.utcOffset();
          ((b = this.local().add(y + S, n)).$offset = y),
            (b.$x.$localOffset = S);
        } else b = this.utc();
        return b;
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
      var p = a.toDate;
      a.toDate = function (h) {
        return h === "s" && this.$offset
          ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
          : p.call(this);
      };
      var m = a.diff;
      a.diff = function (h, x, v) {
        if (h && this.$u === h.$u) return m.call(this, h, x, v);
        var y = this.local(),
          b = l(h).local();
        return m.call(y, b, x, v);
      };
    };
  });
})(nE);
var _3 = nE.exports;
const O3 = yr(_3);
Z.extend(O3);
Z.extend(N3);
function k3(e, t) {
  return t ? Z(e).tz(t).utcOffset() + e.getTimezoneOffset() : 0;
}
const L0 = (e, t, n) => {
  if (!e) return null;
  if (!t) return e;
  let r = k3(e, t);
  return n === "remove" && (r *= -1), Z(e).add(r, "minutes").toDate();
};
function vs(e, t, n, r) {
  return r || !t
    ? t
    : Array.isArray(t)
    ? t.map((o) => L0(o, n, e))
    : L0(t, n, e);
}
const T3 = {
    locale: "en",
    timezone: null,
    firstDayOfWeek: 1,
    weekendDays: [0, 6],
    labelSeparator: "–",
    consistentWeeks: !1,
  },
  $3 = w.createContext(T3);
function zn() {
  const e = w.useContext($3),
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
var rE = { day: "m_396ce5cb" };
const A3 = {},
  I3 = (e, { size: t }) => ({ day: { "--day-size": Re(t, "day-size") } }),
  pg = X((e, t) => {
    const n = W("Day", A3, e),
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
        outside: p,
        selected: m,
        renderDay: h,
        inRange: x,
        firstInRange: v,
        lastInRange: y,
        hidden: b,
        static: S,
        ...C
      } = n,
      E = ue({
        name: d || "Day",
        classes: rE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: I3,
        rootSelector: "day",
      }),
      R = zn();
    return g.jsx(Jn, {
      ...E("day", { style: b ? { display: "none" } : void 0 }),
      component: S ? "div" : "button",
      ref: t,
      disabled: u,
      "data-today":
        Z(c).isSame(vs("add", new Date(), R.getTimezone()), "day") || void 0,
      "data-hidden": b || void 0,
      "data-disabled": u || void 0,
      "data-weekend": (!u && !p && f) || void 0,
      "data-outside": (!u && p) || void 0,
      "data-selected": (!u && m) || void 0,
      "data-in-range": (x && !u) || void 0,
      "data-first-in-range": (v && !u) || void 0,
      "data-last-in-range": (y && !u) || void 0,
      "data-static": S || void 0,
      unstyled: l,
      ...C,
      children: (h == null ? void 0 : h(c)) || c.getDate(),
    });
  });
pg.classes = rE;
pg.displayName = "@mantine/dates/Day";
function j3({ locale: e, format: t = "dd", firstDayOfWeek: n = 1 }) {
  const r = Z().day(n),
    o = [];
  for (let s = 0; s < 7; s += 1)
    typeof t == "string"
      ? o.push(Z(r).add(s, "days").locale(e).format(t))
      : o.push(t(Z(r).add(s, "days").toDate()));
  return o;
}
var oE = { weekday: "m_18a3eca" };
const L3 = {},
  M3 = (e, { size: t }) => ({
    weekdaysRow: { "--wr-fz": dt(t), "--wr-spacing": Gr(t) },
  }),
  mg = X((e, t) => {
    const n = W("WeekdaysRow", L3, e),
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
        __staticSelector: p,
        ...m
      } = n,
      h = ue({
        name: p || "WeekdaysRow",
        classes: oE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: M3,
        rootSelector: "weekdaysRow",
      }),
      x = zn(),
      v = j3({
        locale: x.getLocale(c),
        format: d,
        firstDayOfWeek: x.getFirstDayOfWeek(u),
      }).map((y, b) => g.jsx(f, { ...h("weekday"), children: y }, b));
    return g.jsx(K, {
      component: "tr",
      ref: t,
      ...h("weekdaysRow"),
      ...m,
      children: v,
    });
  });
mg.classes = oE;
mg.displayName = "@mantine/dates/WeekdaysRow";
function F3(e, t = 1) {
  const n = new Date(e),
    r = t === 0 ? 6 : t - 1;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function B3(e, t = 1) {
  const n = new Date(e);
  for (; n.getDay() !== t; ) n.setDate(n.getDate() - 1);
  return n;
}
function z3({ month: e, firstDayOfWeek: t = 1, consistentWeeks: n }) {
  const r = e.getMonth(),
    o = new Date(e.getFullYear(), r, 1),
    s = new Date(e.getFullYear(), e.getMonth() + 1, 0),
    i = F3(s, t),
    l = B3(o, t),
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
      for (let p = 0; p < 7; p += 1)
        f.push(new Date(d)), d.setDate(d.getDate() + 1);
      a.push(f);
    }
  }
  return a;
}
function sE(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
}
function iE(e, t) {
  return t instanceof Date ? Z(e).isAfter(Z(t).subtract(1, "day"), "day") : !0;
}
function lE(e, t) {
  return t instanceof Date ? Z(e).isBefore(Z(t).add(1, "day"), "day") : !0;
}
function V3(e, t, n, r, o, s, i) {
  const l = e.flat().filter((u) => {
      var d;
      return (
        lE(u, n) &&
        iE(u, t) &&
        !(o != null && o(u)) &&
        !((d = r == null ? void 0 : r(u)) != null && d.disabled) &&
        (!s || sE(u, i))
      );
    }),
    a = l.find((u) => {
      var d;
      return (d = r == null ? void 0 : r(u)) == null ? void 0 : d.selected;
    });
  if (a) return a;
  const c = l.find((u) => Z().isSame(u, "date"));
  return c || l[0];
}
var aE = { month: "m_cc9820d3", monthCell: "m_8f457cd5" };
const W3 = { withCellSpacing: !0 },
  Mu = X((e, t) => {
    const n = W("Month", W3, e),
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
        month: p,
        weekendDays: m,
        getDayProps: h,
        excludeDate: x,
        minDate: v,
        maxDate: y,
        renderDay: b,
        hideOutsideDates: S,
        hideWeekdays: C,
        getDayAriaLabel: E,
        static: R,
        __getDayRef: P,
        __onDayKeyDown: I,
        __onDayClick: _,
        __onDayMouseEnter: T,
        __preventFocus: M,
        __stopPropagation: z,
        withCellSpacing: L,
        size: $,
        ...O
      } = n,
      k = ue({
        name: c || "Month",
        classes: aE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "month",
      }),
      N = zn(),
      D = z3({
        month: p,
        firstDayOfWeek: N.getFirstDayOfWeek(d),
        consistentWeeks: N.consistentWeeks,
      }),
      j = V3(D, v, y, h, x, S, p),
      { resolvedClassNames: A, resolvedStyles: B } = Bo({
        classNames: r,
        styles: i,
        props: n,
      }),
      Y = D.map((J, ee) => {
        const oe = J.map((ne, ye) => {
          const se = !sE(ne, p),
            ce =
              (E == null ? void 0 : E(ne)) ||
              Z(ne)
                .locale(u || N.locale)
                .format("D MMMM YYYY"),
            te = h == null ? void 0 : h(ne),
            me = Z(ne).isSame(j, "date");
          return g.jsx(
            "td",
            {
              ...k("monthCell"),
              "data-with-spacing": L || void 0,
              children: g.jsx(pg, {
                __staticSelector: c || "Month",
                classNames: A,
                styles: B,
                unstyled: l,
                "data-mantine-stop-propagation": z || void 0,
                renderDay: b,
                date: ne,
                size: $,
                weekend: N.getWeekendDays(m).includes(ne.getDay()),
                outside: se,
                hidden: S ? se : !1,
                "aria-label": ce,
                static: R,
                disabled:
                  (x == null ? void 0 : x(ne)) || !lE(ne, y) || !iE(ne, v),
                ref: (le) => (P == null ? void 0 : P(ee, ye, le)),
                ...te,
                onKeyDown: (le) => {
                  var ae;
                  (ae = te == null ? void 0 : te.onKeyDown) == null ||
                    ae.call(te, le),
                    I == null ||
                      I(le, { rowIndex: ee, cellIndex: ye, date: ne });
                },
                onMouseEnter: (le) => {
                  var ae;
                  (ae = te == null ? void 0 : te.onMouseEnter) == null ||
                    ae.call(te, le),
                    T == null || T(le, ne);
                },
                onClick: (le) => {
                  var ae;
                  (ae = te == null ? void 0 : te.onClick) == null ||
                    ae.call(te, le),
                    _ == null || _(le, ne);
                },
                onMouseDown: (le) => {
                  var ae;
                  (ae = te == null ? void 0 : te.onMouseDown) == null ||
                    ae.call(te, le),
                    M && le.preventDefault();
                },
                tabIndex: M || !me ? -1 : 0,
              }),
            },
            ne.toString()
          );
        });
        return g.jsx("tr", { ...k("monthRow"), children: oe }, ee);
      });
    return g.jsxs(K, {
      component: "table",
      ...k("month"),
      size: $,
      ref: t,
      ...O,
      children: [
        !C &&
          g.jsx("thead", {
            ...k("monthThead"),
            children: g.jsx(mg, {
              __staticSelector: c || "Month",
              locale: u,
              firstDayOfWeek: d,
              weekdayFormat: f,
              size: $,
              classNames: A,
              styles: B,
              unstyled: l,
            }),
          }),
        g.jsx("tbody", { ...k("monthTbody"), children: Y }),
      ],
    });
  });
Mu.classes = aE;
Mu.displayName = "@mantine/dates/Month";
var cE = { pickerControl: "m_dc6a3c71" };
const U3 = {},
  H3 = (e, { size: t }) => ({
    pickerControl: { "--dpc-fz": dt(t), "--dpc-size": Re(t, "dpc-size") },
  }),
  Fu = X((e, t) => {
    const n = W("PickerControl", U3, e),
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
        selected: p,
        disabled: m,
        ...h
      } = n,
      x = ue({
        name: f || "PickerControl",
        classes: cE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: H3,
        rootSelector: "pickerControl",
      });
    return g.jsx(Jn, {
      ...x("pickerControl"),
      ref: t,
      unstyled: l,
      "data-picker-control": !0,
      "data-selected": (p && !m) || void 0,
      "data-disabled": m || void 0,
      "data-in-range": (d && !m && !p) || void 0,
      "data-first-in-range": (c && !m) || void 0,
      "data-last-in-range": (u && !m) || void 0,
      disabled: m,
      ...h,
    });
  });
Fu.classes = cE;
Fu.displayName = "@mantine/dates/PickerControl";
function uE(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && Z(e).isBefore(t, "year")) || (n && Z(e).isAfter(n, "year")));
}
function G3(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !uE(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
      );
    }),
    s = o.find((l) => {
      var a;
      return (a = r == null ? void 0 : r(l)) == null ? void 0 : a.selected;
    });
  if (s) return s;
  const i = o.find((l) => Z().isSame(l, "year"));
  return i || o[0];
}
function dE(e) {
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
var fE = { yearsList: "m_9206547b", yearsListCell: "m_c5a19c7d" };
const Y3 = { yearsListFormat: "YYYY", withCellSpacing: !0 },
  Bu = X((e, t) => {
    const n = W("YearsList", Y3, e),
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
        maxDate: p,
        getYearControlProps: m,
        __staticSelector: h,
        __getControlRef: x,
        __onControlKeyDown: v,
        __onControlClick: y,
        __onControlMouseEnter: b,
        __preventFocus: S,
        __stopPropagation: C,
        withCellSpacing: E,
        size: R,
        ...P
      } = n,
      I = ue({
        name: h || "YearsList",
        classes: fE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "yearsList",
      }),
      _ = zn(),
      T = dE(c),
      M = G3(T, f, p, m),
      z = T.map((L, $) => {
        const O = L.map((k, N) => {
          const D = m == null ? void 0 : m(k),
            j = Z(k).isSame(M, "year");
          return g.jsx(
            "td",
            {
              ...I("yearsListCell"),
              "data-with-spacing": E || void 0,
              children: g.jsx(Fu, {
                ...I("yearsListControl"),
                size: R,
                unstyled: l,
                "data-mantine-stop-propagation": C || void 0,
                disabled: uE(k, f, p),
                ref: (A) => (x == null ? void 0 : x($, N, A)),
                ...D,
                onKeyDown: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onKeyDown) == null ||
                    B.call(D, A),
                    v == null || v(A, { rowIndex: $, cellIndex: N, date: k });
                },
                onClick: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onClick) == null || B.call(D, A),
                    y == null || y(A, k);
                },
                onMouseEnter: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onMouseEnter) == null ||
                    B.call(D, A),
                    b == null || b(A, k);
                },
                onMouseDown: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onMouseDown) == null ||
                    B.call(D, A),
                    S && A.preventDefault();
                },
                tabIndex: S || !j ? -1 : 0,
                children: Z(k).locale(_.getLocale(d)).format(u),
              }),
            },
            N
          );
        });
        return g.jsx("tr", { ...I("yearsListRow"), children: O }, $);
      });
    return g.jsx(K, {
      component: "table",
      ref: t,
      size: R,
      ...I("yearsList"),
      ...P,
      children: g.jsx("tbody", { children: z }),
    });
  });
Bu.classes = fE;
Bu.displayName = "@mantine/dates/YearsList";
function pE(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && Z(e).isBefore(t, "month")) || (n && Z(e).isAfter(n, "month")));
}
function q3(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !pE(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
      );
    }),
    s = o.find((l) => {
      var a;
      return (a = r == null ? void 0 : r(l)) == null ? void 0 : a.selected;
    });
  if (s) return s;
  const i = o.find((l) => Z().isSame(l, "month"));
  return i || o[0];
}
function K3(e) {
  const t = Z(e).startOf("year").toDate(),
    n = [[], [], [], []];
  let r = 0;
  for (let o = 0; o < 4; o += 1)
    for (let s = 0; s < 3; s += 1)
      n[o].push(Z(t).add(r, "months").toDate()), (r += 1);
  return n;
}
var mE = { monthsList: "m_2a6c32d", monthsListCell: "m_fe27622f" };
const X3 = { monthsListFormat: "MMM", withCellSpacing: !0 },
  zu = X((e, t) => {
    const n = W("MonthsList", X3, e),
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
        minDate: p,
        maxDate: m,
        getMonthControlProps: h,
        __getControlRef: x,
        __onControlKeyDown: v,
        __onControlClick: y,
        __onControlMouseEnter: b,
        __preventFocus: S,
        __stopPropagation: C,
        withCellSpacing: E,
        size: R,
        ...P
      } = n,
      I = ue({
        name: c || "MonthsList",
        classes: mE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "monthsList",
      }),
      _ = zn(),
      T = K3(u),
      M = q3(T, p, m, h),
      z = T.map((L, $) => {
        const O = L.map((k, N) => {
          const D = h == null ? void 0 : h(k),
            j = Z(k).isSame(M, "month");
          return g.jsx(
            "td",
            {
              ...I("monthsListCell"),
              "data-with-spacing": E || void 0,
              children: g.jsx(Fu, {
                ...I("monthsListControl"),
                size: R,
                unstyled: l,
                __staticSelector: c || "MonthsList",
                "data-mantine-stop-propagation": C || void 0,
                disabled: pE(k, p, m),
                ref: (A) => (x == null ? void 0 : x($, N, A)),
                ...D,
                onKeyDown: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onKeyDown) == null ||
                    B.call(D, A),
                    v == null || v(A, { rowIndex: $, cellIndex: N, date: k });
                },
                onClick: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onClick) == null || B.call(D, A),
                    y == null || y(A, k);
                },
                onMouseEnter: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onMouseEnter) == null ||
                    B.call(D, A),
                    b == null || b(A, k);
                },
                onMouseDown: (A) => {
                  var B;
                  (B = D == null ? void 0 : D.onMouseDown) == null ||
                    B.call(D, A),
                    S && A.preventDefault();
                },
                tabIndex: S || !j ? -1 : 0,
                children: Z(k).locale(_.getLocale(f)).format(d),
              }),
            },
            N
          );
        });
        return g.jsx("tr", { ...I("monthsListRow"), children: O }, $);
      });
    return g.jsx(K, {
      component: "table",
      ref: t,
      size: R,
      ...I("monthsList"),
      ...P,
      children: g.jsx("tbody", { children: z }),
    });
  });
zu.classes = mE;
zu.displayName = "@mantine/dates/MonthsList";
var hE = {
  calendarHeader: "m_730a79ed",
  calendarHeaderLevel: "m_f6645d97",
  calendarHeaderControl: "m_2351eeb0",
  calendarHeaderControlIcon: "m_367dc749",
};
const Q3 = {
    nextDisabled: !1,
    previousDisabled: !1,
    hasNextLevel: !0,
    withNext: !0,
    withPrevious: !0,
  },
  J3 = (e, { size: t }) => ({
    calendarHeader: {
      "--dch-control-size": Re(t, "dch-control-size"),
      "--dch-fz": dt(t),
    },
  }),
  ro = X((e, t) => {
    const n = W("CalendarHeader", Q3, e),
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
        onNext: p,
        onPrevious: m,
        onLevelClick: h,
        label: x,
        nextDisabled: v,
        previousDisabled: y,
        hasNextLevel: b,
        levelControlAriaLabel: S,
        withNext: C,
        withPrevious: E,
        __staticSelector: R,
        __preventFocus: P,
        __stopPropagation: I,
        ..._
      } = n,
      T = ue({
        name: R || "CalendarHeader",
        classes: hE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: J3,
        rootSelector: "calendarHeader",
      }),
      M = P ? (z) => z.preventDefault() : void 0;
    return g.jsxs(K, {
      ...T("calendarHeader"),
      ref: t,
      ..._,
      children: [
        E &&
          g.jsx(Jn, {
            ...T("calendarHeaderControl"),
            "data-direction": "previous",
            "aria-label": f,
            onClick: m,
            unstyled: l,
            onMouseDown: M,
            disabled: y,
            "data-disabled": y || void 0,
            tabIndex: P || y ? -1 : 0,
            "data-mantine-stop-propagation": I || void 0,
            children:
              u ||
              g.jsx(up, {
                ...T("calendarHeaderControlIcon"),
                "data-direction": "previous",
                size: "45%",
              }),
          }),
        g.jsx(Jn, {
          component: b ? "button" : "div",
          ...T("calendarHeaderLevel"),
          onClick: b ? h : void 0,
          unstyled: l,
          onMouseDown: b ? M : void 0,
          disabled: !b,
          "data-static": !b || void 0,
          "aria-label": S,
          tabIndex: P || !b ? -1 : 0,
          "data-mantine-stop-propagation": I || void 0,
          children: x,
        }),
        C &&
          g.jsx(Jn, {
            ...T("calendarHeaderControl"),
            "data-direction": "next",
            "aria-label": d,
            onClick: p,
            unstyled: l,
            onMouseDown: M,
            disabled: v,
            "data-disabled": v || void 0,
            tabIndex: P || v ? -1 : 0,
            "data-mantine-stop-propagation": I || void 0,
            children:
              c ||
              g.jsx(up, {
                ...T("calendarHeaderControlIcon"),
                "data-direction": "next",
                size: "45%",
              }),
          }),
      ],
    });
  });
ro.classes = hE;
ro.displayName = "@mantine/dates/CalendarHeader";
function Z3(e) {
  const t = dE(e);
  return [t[0][0], t[3][0]];
}
const eB = { decadeLabelFormat: "YYYY" },
  Vu = X((e, t) => {
    const n = W("DecadeLevel", eB, e),
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
        withCellSpacing: p,
        __preventFocus: m,
        nextIcon: h,
        previousIcon: x,
        nextLabel: v,
        previousLabel: y,
        onNext: b,
        onPrevious: S,
        nextDisabled: C,
        previousDisabled: E,
        levelControlAriaLabel: R,
        withNext: P,
        withPrevious: I,
        decadeLabelFormat: _,
        classNames: T,
        styles: M,
        unstyled: z,
        __staticSelector: L,
        __stopPropagation: $,
        size: O,
        ...k
      } = n,
      N = zn(),
      [D, j] = Z3(r),
      A = {
        __staticSelector: L || "DecadeLevel",
        classNames: T,
        styles: M,
        unstyled: z,
        size: O,
      },
      B = typeof C == "boolean" ? C : i ? !Z(j).endOf("year").isBefore(i) : !1,
      Y = typeof E == "boolean" ? E : s ? !Z(D).startOf("year").isAfter(s) : !1,
      J = (ee, oe) =>
        Z(ee)
          .locale(o || N.locale)
          .format(oe);
    return g.jsxs(K, {
      "data-decade-level": !0,
      size: O,
      ref: t,
      ...k,
      children: [
        g.jsx(ro, {
          label: typeof _ == "function" ? _(D, j) : `${J(D, _)} – ${J(j, _)}`,
          __preventFocus: m,
          __stopPropagation: $,
          nextIcon: h,
          previousIcon: x,
          nextLabel: v,
          previousLabel: y,
          onNext: b,
          onPrevious: S,
          nextDisabled: B,
          previousDisabled: Y,
          hasNextLevel: !1,
          levelControlAriaLabel: R,
          withNext: P,
          withPrevious: I,
          ...A,
        }),
        g.jsx(Bu, {
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
          __preventFocus: m,
          __stopPropagation: $,
          withCellSpacing: p,
          ...A,
        }),
      ],
    });
  });
Vu.classes = { ...Bu.classes, ...ro.classes };
Vu.displayName = "@mantine/dates/DecadeLevel";
const tB = { yearLabelFormat: "YYYY" },
  Wu = X((e, t) => {
    const n = W("YearLevel", tB, e),
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
        withCellSpacing: p,
        __preventFocus: m,
        nextIcon: h,
        previousIcon: x,
        nextLabel: v,
        previousLabel: y,
        onNext: b,
        onPrevious: S,
        onLevelClick: C,
        nextDisabled: E,
        previousDisabled: R,
        hasNextLevel: P,
        levelControlAriaLabel: I,
        withNext: _,
        withPrevious: T,
        yearLabelFormat: M,
        __staticSelector: z,
        __stopPropagation: L,
        size: $,
        classNames: O,
        styles: k,
        unstyled: N,
        ...D
      } = n,
      j = zn(),
      A = {
        __staticSelector: z || "YearLevel",
        classNames: O,
        styles: k,
        unstyled: N,
        size: $,
      },
      B = typeof E == "boolean" ? E : i ? !Z(r).endOf("year").isBefore(i) : !1,
      Y = typeof R == "boolean" ? R : s ? !Z(r).startOf("year").isAfter(s) : !1;
    return g.jsxs(K, {
      "data-year-level": !0,
      size: $,
      ref: t,
      ...D,
      children: [
        g.jsx(ro, {
          label:
            typeof M == "function"
              ? M(r)
              : Z(r)
                  .locale(o || j.locale)
                  .format(M),
          __preventFocus: m,
          __stopPropagation: L,
          nextIcon: h,
          previousIcon: x,
          nextLabel: v,
          previousLabel: y,
          onNext: b,
          onPrevious: S,
          onLevelClick: C,
          nextDisabled: B,
          previousDisabled: Y,
          hasNextLevel: P,
          levelControlAriaLabel: I,
          withNext: _,
          withPrevious: T,
          ...A,
        }),
        g.jsx(zu, {
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
          __preventFocus: m,
          __stopPropagation: L,
          withCellSpacing: p,
          ...A,
        }),
      ],
    });
  });
Wu.classes = { ...ro.classes, ...zu.classes };
Wu.displayName = "@mantine/dates/YearLevel";
const nB = { monthLabelFormat: "MMMM YYYY" },
  Uu = X((e, t) => {
    const n = W("MonthLevel", nB, e),
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
        hideOutsideDates: p,
        hideWeekdays: m,
        getDayAriaLabel: h,
        __getDayRef: x,
        __onDayKeyDown: v,
        __onDayClick: y,
        __onDayMouseEnter: b,
        withCellSpacing: S,
        __preventFocus: C,
        __stopPropagation: E,
        nextIcon: R,
        previousIcon: P,
        nextLabel: I,
        previousLabel: _,
        onNext: T,
        onPrevious: M,
        onLevelClick: z,
        nextDisabled: L,
        previousDisabled: $,
        hasNextLevel: O,
        levelControlAriaLabel: k,
        withNext: N,
        withPrevious: D,
        monthLabelFormat: j,
        classNames: A,
        styles: B,
        unstyled: Y,
        __staticSelector: J,
        size: ee,
        static: oe,
        ...ne
      } = n,
      ye = zn(),
      se = {
        __staticSelector: J || "MonthLevel",
        classNames: A,
        styles: B,
        unstyled: Y,
        size: ee,
      },
      ce =
        typeof L == "boolean" ? L : d ? !Z(r).endOf("month").isBefore(d) : !1,
      te =
        typeof $ == "boolean" ? $ : u ? !Z(r).startOf("month").isAfter(u) : !1;
    return g.jsxs(K, {
      "data-month-level": !0,
      size: ee,
      ref: t,
      ...ne,
      children: [
        g.jsx(ro, {
          label:
            typeof j == "function"
              ? j(r)
              : Z(r)
                  .locale(o || ye.locale)
                  .format(j),
          __preventFocus: C,
          __stopPropagation: E,
          nextIcon: R,
          previousIcon: P,
          nextLabel: I,
          previousLabel: _,
          onNext: T,
          onPrevious: M,
          onLevelClick: z,
          nextDisabled: ce,
          previousDisabled: te,
          hasNextLevel: O,
          levelControlAriaLabel: k,
          withNext: N,
          withPrevious: D,
          ...se,
        }),
        g.jsx(Mu, {
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
          hideOutsideDates: p,
          hideWeekdays: m,
          getDayAriaLabel: h,
          __getDayRef: x,
          __onDayKeyDown: v,
          __onDayClick: y,
          __onDayMouseEnter: b,
          __preventFocus: C,
          __stopPropagation: E,
          static: oe,
          withCellSpacing: S,
          ...se,
        }),
      ],
    });
  });
Uu.classes = { ...Mu.classes, ...ro.classes };
Uu.displayName = "@mantine/dates/MonthLevel";
var gE = { levelsGroup: "m_30b26e33" };
const rB = {},
  oo = X((e, t) => {
    const n = W("LevelsGroup", rB, e),
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
        classes: gE,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "levelsGroup",
      });
    return g.jsx(K, { ref: t, ...d("levelsGroup"), ...u });
  });
oo.classes = gE;
oo.displayName = "@mantine/dates/LevelsGroup";
const oB = { numberOfColumns: 1 },
  Hu = X((e, t) => {
    const n = W("DecadeLevelGroup", oB, e),
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
        nextIcon: p,
        previousIcon: m,
        nextLabel: h,
        previousLabel: x,
        onNext: v,
        onPrevious: y,
        nextDisabled: b,
        previousDisabled: S,
        classNames: C,
        styles: E,
        unstyled: R,
        __staticSelector: P,
        __stopPropagation: I,
        numberOfColumns: _,
        levelControlAriaLabel: T,
        decadeLabelFormat: M,
        size: z,
        vars: L,
        ...$
      } = n,
      O = w.useRef([]),
      k = Array(_)
        .fill(0)
        .map((N, D) => {
          const j = Z(r)
            .add(D * 10, "years")
            .toDate();
          return g.jsx(
            Vu,
            {
              size: z,
              yearsListFormat: l,
              decade: j,
              withNext: D === _ - 1,
              withPrevious: D === 0,
              decadeLabelFormat: M,
              __onControlClick: c,
              __onControlMouseEnter: u,
              __onControlKeyDown: (A, B) =>
                fg({
                  levelIndex: D,
                  rowIndex: B.rowIndex,
                  cellIndex: B.cellIndex,
                  event: A,
                  controlsRef: O,
                }),
              __getControlRef: (A, B, Y) => {
                Array.isArray(O.current[D]) || (O.current[D] = []),
                  Array.isArray(O.current[D][A]) || (O.current[D][A] = []),
                  (O.current[D][A][B] = Y);
              },
              levelControlAriaLabel: typeof T == "function" ? T(j) : T,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              __stopPropagation: I,
              nextIcon: p,
              previousIcon: m,
              nextLabel: h,
              previousLabel: x,
              onNext: v,
              onPrevious: y,
              nextDisabled: b,
              previousDisabled: S,
              getYearControlProps: a,
              __staticSelector: P || "DecadeLevelGroup",
              classNames: C,
              styles: E,
              unstyled: R,
              withCellSpacing: d,
            },
            D
          );
        });
    return g.jsx(oo, {
      classNames: C,
      styles: E,
      __staticSelector: P || "DecadeLevelGroup",
      ref: t,
      size: z,
      unstyled: R,
      ...$,
      children: k,
    });
  });
Hu.classes = { ...oo.classes, ...Vu.classes };
Hu.displayName = "@mantine/dates/DecadeLevelGroup";
const sB = { numberOfColumns: 1 },
  Gu = X((e, t) => {
    const n = W("YearLevelGroup", sB, e),
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
        nextIcon: p,
        previousIcon: m,
        nextLabel: h,
        previousLabel: x,
        onNext: v,
        onPrevious: y,
        onLevelClick: b,
        nextDisabled: S,
        previousDisabled: C,
        hasNextLevel: E,
        classNames: R,
        styles: P,
        unstyled: I,
        __staticSelector: _,
        __stopPropagation: T,
        numberOfColumns: M,
        levelControlAriaLabel: z,
        yearLabelFormat: L,
        size: $,
        vars: O,
        ...k
      } = n,
      N = w.useRef([]),
      D = Array(M)
        .fill(0)
        .map((j, A) => {
          const B = Z(r).add(A, "years").toDate();
          return g.jsx(
            Wu,
            {
              size: $,
              monthsListFormat: l,
              year: B,
              withNext: A === M - 1,
              withPrevious: A === 0,
              yearLabelFormat: L,
              __stopPropagation: T,
              __onControlClick: c,
              __onControlMouseEnter: u,
              __onControlKeyDown: (Y, J) =>
                fg({
                  levelIndex: A,
                  rowIndex: J.rowIndex,
                  cellIndex: J.cellIndex,
                  event: Y,
                  controlsRef: N,
                }),
              __getControlRef: (Y, J, ee) => {
                Array.isArray(N.current[A]) || (N.current[A] = []),
                  Array.isArray(N.current[A][Y]) || (N.current[A][Y] = []),
                  (N.current[A][Y][J] = ee);
              },
              levelControlAriaLabel: typeof z == "function" ? z(B) : z,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              nextIcon: p,
              previousIcon: m,
              nextLabel: h,
              previousLabel: x,
              onNext: v,
              onPrevious: y,
              onLevelClick: b,
              nextDisabled: S,
              previousDisabled: C,
              hasNextLevel: E,
              getMonthControlProps: a,
              classNames: R,
              styles: P,
              unstyled: I,
              __staticSelector: _ || "YearLevelGroup",
              withCellSpacing: d,
            },
            A
          );
        });
    return g.jsx(oo, {
      classNames: R,
      styles: P,
      __staticSelector: _ || "YearLevelGroup",
      ref: t,
      size: $,
      unstyled: I,
      ...k,
      children: D,
    });
  });
Gu.classes = { ...Wu.classes, ...oo.classes };
Gu.displayName = "@mantine/dates/YearLevelGroup";
const iB = { numberOfColumns: 1 },
  Yu = X((e, t) => {
    const n = W("MonthLevelGroup", iB, e),
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
        hideOutsideDates: p,
        hideWeekdays: m,
        getDayAriaLabel: h,
        __onDayClick: x,
        __onDayMouseEnter: v,
        withCellSpacing: y,
        __preventFocus: b,
        nextIcon: S,
        previousIcon: C,
        nextLabel: E,
        previousLabel: R,
        onNext: P,
        onPrevious: I,
        onLevelClick: _,
        nextDisabled: T,
        previousDisabled: M,
        hasNextLevel: z,
        classNames: L,
        styles: $,
        unstyled: O,
        numberOfColumns: k,
        levelControlAriaLabel: N,
        monthLabelFormat: D,
        __staticSelector: j,
        __stopPropagation: A,
        size: B,
        static: Y,
        vars: J,
        ...ee
      } = n,
      oe = w.useRef([]),
      ne = Array(k)
        .fill(0)
        .map((ye, se) => {
          const ce = Z(r).add(se, "months").toDate();
          return g.jsx(
            Uu,
            {
              month: ce,
              withNext: se === k - 1,
              withPrevious: se === 0,
              monthLabelFormat: D,
              __stopPropagation: A,
              __onDayClick: x,
              __onDayMouseEnter: v,
              __onDayKeyDown: (te, me) =>
                fg({
                  levelIndex: se,
                  rowIndex: me.rowIndex,
                  cellIndex: me.cellIndex,
                  event: te,
                  controlsRef: oe,
                }),
              __getDayRef: (te, me, le) => {
                Array.isArray(oe.current[se]) || (oe.current[se] = []),
                  Array.isArray(oe.current[se][te]) ||
                    (oe.current[se][te] = []),
                  (oe.current[se][te][me] = le);
              },
              levelControlAriaLabel: typeof N == "function" ? N(ce) : N,
              locale: o,
              firstDayOfWeek: s,
              weekdayFormat: i,
              weekendDays: l,
              getDayProps: a,
              excludeDate: c,
              minDate: u,
              maxDate: d,
              renderDay: f,
              hideOutsideDates: p,
              hideWeekdays: m,
              getDayAriaLabel: h,
              __preventFocus: b,
              nextIcon: S,
              previousIcon: C,
              nextLabel: E,
              previousLabel: R,
              onNext: P,
              onPrevious: I,
              onLevelClick: _,
              nextDisabled: T,
              previousDisabled: M,
              hasNextLevel: z,
              classNames: L,
              styles: $,
              unstyled: O,
              __staticSelector: j || "MonthLevelGroup",
              size: B,
              static: Y,
              withCellSpacing: y,
            },
            se
          );
        });
    return g.jsx(oo, {
      classNames: L,
      styles: $,
      __staticSelector: j || "MonthLevelGroup",
      ref: t,
      size: B,
      ...ee,
      children: ne,
    });
  });
Yu.classes = { ...oo.classes, ...Uu.classes };
Yu.displayName = "@mantine/dates/MonthLevelGroup";
const M0 = (e) => (e === "range" ? [null, null] : e === "multiple" ? [] : null);
function yE({
  type: e,
  value: t,
  defaultValue: n,
  onChange: r,
  applyTimezone: o = !0,
}) {
  const s = w.useRef(e),
    i = zn(),
    [l, a, c] = $n({
      value: vs("add", t, i.getTimezone(), !o),
      defaultValue: vs("add", n, i.getTimezone(), !o),
      finalValue: M0(e),
      onChange: (d) => {
        r == null || r(vs("remove", d, i.getTimezone(), !o));
      },
    });
  let u = l;
  return (
    s.current !== e &&
      ((s.current = e), t === void 0 && ((u = n !== void 0 ? n : M0(e)), a(u))),
    [u, a, c]
  );
}
function nf(e, t) {
  return e ? (e === "month" ? 0 : e === "year" ? 1 : 2) : t || 0;
}
function lB(e) {
  return e === 0 ? "month" : e === 1 ? "year" : "decade";
}
function vi(e, t, n) {
  return lB(fN(nf(e, 0), nf(t, 0), nf(n, 2)));
}
const aB = {
    maxLevel: "decade",
    minLevel: "month",
    __updateDateOnYearSelect: !0,
    __updateDateOnMonthSelect: !0,
  },
  qu = X((e, t) => {
    const n = W("Calendar", aB, e),
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
        columnsToScroll: p,
        ariaLabels: m,
        onYearSelect: h,
        onMonthSelect: x,
        onYearMouseEnter: v,
        onMonthMouseEnter: y,
        __updateDateOnYearSelect: b,
        __updateDateOnMonthSelect: S,
        firstDayOfWeek: C,
        weekdayFormat: E,
        weekendDays: R,
        getDayProps: P,
        excludeDate: I,
        renderDay: _,
        hideOutsideDates: T,
        hideWeekdays: M,
        getDayAriaLabel: z,
        monthLabelFormat: L,
        nextIcon: $,
        previousIcon: O,
        __onDayClick: k,
        __onDayMouseEnter: N,
        withCellSpacing: D,
        monthsListFormat: j,
        getMonthControlProps: A,
        yearLabelFormat: B,
        yearsListFormat: Y,
        getYearControlProps: J,
        decadeLabelFormat: ee,
        classNames: oe,
        styles: ne,
        unstyled: ye,
        minDate: se,
        maxDate: ce,
        locale: te,
        __staticSelector: me,
        size: le,
        __preventFocus: ae,
        __stopPropagation: $e,
        onNextDecade: He,
        onPreviousDecade: Ee,
        onNextYear: st,
        onPreviousYear: Ae,
        onNextMonth: ze,
        onPreviousMonth: q,
        static: ie,
        __timezoneApplied: de,
        ...Pe
      } = n,
      { resolvedClassNames: Ve, resolvedStyles: _t } = Bo({
        classNames: oe,
        styles: ne,
        props: n,
      }),
      [Ne, We] = $n({
        value: l ? vi(l, s, o) : void 0,
        defaultValue: i ? vi(i, s, o) : void 0,
        finalValue: vi(void 0, s, o),
        onChange: a,
      }),
      [sn, Je] = yE({
        type: "default",
        value: c,
        defaultValue: u,
        onChange: d,
        applyTimezone: !de,
      }),
      Ot = {
        __staticSelector: me || "Calendar",
        styles: _t,
        classNames: Ve,
        unstyled: ye,
        size: le,
      },
      tr = zn(),
      it = p || f || 1,
      xt = sn || vs("add", new Date(), tr.getTimezone()),
      ti = () => {
        const Oe = Z(xt).add(it, "month").toDate();
        ze == null || ze(Oe), Je(Oe);
      },
      kt = () => {
        const Oe = Z(xt).subtract(it, "month").toDate();
        q == null || q(Oe), Je(Oe);
      },
      nr = () => {
        const Oe = Z(xt).add(it, "year").toDate();
        st == null || st(Oe), Je(Oe);
      },
      Vo = () => {
        const Oe = Z(xt).subtract(it, "year").toDate();
        Ae == null || Ae(Oe), Je(Oe);
      },
      Wo = () => {
        const Oe = Z(xt)
          .add(10 * it, "year")
          .toDate();
        He == null || He(Oe), Je(Oe);
      },
      Wn = () => {
        const Oe = Z(xt)
          .subtract(10 * it, "year")
          .toDate();
        Ee == null || Ee(Oe), Je(Oe);
      };
    return g.jsxs(K, {
      ref: t,
      size: le,
      "data-calendar": !0,
      ...Pe,
      children: [
        Ne === "month" &&
          g.jsx(Yu, {
            month: xt,
            minDate: se,
            maxDate: ce,
            firstDayOfWeek: C,
            weekdayFormat: E,
            weekendDays: R,
            getDayProps: P,
            excludeDate: I,
            renderDay: _,
            hideOutsideDates: T,
            hideWeekdays: M,
            getDayAriaLabel: z,
            onNext: ti,
            onPrevious: kt,
            hasNextLevel: o !== "month",
            onLevelClick: () => We("year"),
            numberOfColumns: f,
            locale: te,
            levelControlAriaLabel: m == null ? void 0 : m.monthLevelControl,
            nextLabel: m == null ? void 0 : m.nextMonth,
            nextIcon: $,
            previousLabel: m == null ? void 0 : m.previousMonth,
            previousIcon: O,
            monthLabelFormat: L,
            __onDayClick: k,
            __onDayMouseEnter: N,
            __preventFocus: ae,
            __stopPropagation: $e,
            static: ie,
            withCellSpacing: D,
            ...Ot,
          }),
        Ne === "year" &&
          g.jsx(Gu, {
            year: xt,
            numberOfColumns: f,
            minDate: se,
            maxDate: ce,
            monthsListFormat: j,
            getMonthControlProps: A,
            locale: te,
            onNext: nr,
            onPrevious: Vo,
            hasNextLevel: o !== "month" && o !== "year",
            onLevelClick: () => We("decade"),
            levelControlAriaLabel: m == null ? void 0 : m.yearLevelControl,
            nextLabel: m == null ? void 0 : m.nextYear,
            nextIcon: $,
            previousLabel: m == null ? void 0 : m.previousYear,
            previousIcon: O,
            yearLabelFormat: B,
            __onControlMouseEnter: y,
            __onControlClick: (Oe, Ht) => {
              S && Je(Ht), We(vi("month", s, o)), x == null || x(Ht);
            },
            __preventFocus: ae,
            __stopPropagation: $e,
            withCellSpacing: D,
            ...Ot,
          }),
        Ne === "decade" &&
          g.jsx(Hu, {
            decade: xt,
            minDate: se,
            maxDate: ce,
            yearsListFormat: Y,
            getYearControlProps: J,
            locale: te,
            onNext: Wo,
            onPrevious: Wn,
            numberOfColumns: f,
            nextLabel: m == null ? void 0 : m.nextDecade,
            nextIcon: $,
            previousLabel: m == null ? void 0 : m.previousDecade,
            previousIcon: O,
            decadeLabelFormat: ee,
            __onControlMouseEnter: v,
            __onControlClick: (Oe, Ht) => {
              b && Je(Ht), We(vi("year", s, o)), h == null || h(Ht);
            },
            __preventFocus: ae,
            __stopPropagation: $e,
            withCellSpacing: D,
            ...Ot,
          }),
      ],
    });
  });
qu.classes = { ...Hu.classes, ...Gu.classes, ...Yu.classes };
qu.displayName = "@mantine/dates/Calendar";
function F0(e, t) {
  const n = [...t].sort((r, o) => r.getTime() - o.getTime());
  return (
    Z(n[0]).startOf("day").subtract(1, "ms").isBefore(e) &&
    Z(n[1]).endOf("day").add(1, "ms").isAfter(e)
  );
}
function cB({
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
  const [c, u] = yE({
      type: e,
      value: n,
      defaultValue: r,
      onChange: o,
      applyTimezone: a,
    }),
    [d, f] = w.useState(e === "range" && c[0] && !c[1] ? c[0] : null),
    [p, m] = w.useState(null),
    h = (E) => {
      if (e === "range") {
        if (d instanceof Date && !c[1]) {
          if (Z(E).isSame(d, t) && !s) {
            f(null), m(null), u([null, null]);
            return;
          }
          const R = [E, d];
          R.sort((P, I) => P.getTime() - I.getTime()), u(R), m(null), f(null);
          return;
        }
        if (c[0] && !c[1] && Z(E).isSame(c[0], t) && !s) {
          f(null), m(null), u([null, null]);
          return;
        }
        u([E, null]), m(null), f(E);
        return;
      }
      if (e === "multiple") {
        c.some((R) => Z(R).isSame(E, t))
          ? u(c.filter((R) => !Z(R).isSame(E, t)))
          : u([...c, E]);
        return;
      }
      c && i && Z(E).isSame(c, t) ? u(null) : u(E);
    },
    x = (E) =>
      d instanceof Date && p instanceof Date
        ? F0(E, [p, d])
        : c[0] instanceof Date && c[1] instanceof Date
        ? F0(E, c)
        : !1,
    v =
      e === "range"
        ? (E) => {
            l == null || l(E), m(null);
          }
        : l,
    y = (E) =>
      c[0] instanceof Date && Z(E).isSame(c[0], t)
        ? !(p && Z(p).isBefore(c[0]))
        : !1,
    b = (E) =>
      c[1] instanceof Date
        ? Z(E).isSame(c[1], t)
        : !(c[0] instanceof Date) || !p
        ? !1
        : Z(p).isBefore(c[0]) && Z(E).isSame(c[0], t),
    S = (E) => {
      if (e === "range")
        return {
          selected: c.some((P) => P && Z(P).isSame(E, t)),
          inRange: x(E),
          firstInRange: y(E),
          lastInRange: b(E),
          "data-autofocus": (!!c[0] && Z(c[0]).isSame(E, t)) || void 0,
        };
      if (e === "multiple")
        return {
          selected: c.some((P) => P && Z(P).isSame(E, t)),
          "data-autofocus": (!!c[0] && Z(c[0]).isSame(E, t)) || void 0,
        };
      const R = Z(c).isSame(E, t);
      return { selected: R, "data-autofocus": R || void 0 };
    },
    C = e === "range" && d ? m : () => {};
  return (
    w.useEffect(() => {
      e === "range" && !c[0] && !c[1] && f(null);
    }, [n]),
    {
      onDateChange: h,
      onRootMouseLeave: v,
      onHoveredDateChange: C,
      getControlProps: S,
      _value: c,
      setValue: u,
    }
  );
}
const uB = { type: "default", defaultLevel: "month", numberOfColumns: 1 },
  hg = X((e, t) => {
    const n = W("DatePicker", uB, e),
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
        allowDeselect: p,
        onMouseLeave: m,
        numberOfColumns: h,
        hideOutsideDates: x,
        __onDayMouseEnter: v,
        __onDayClick: y,
        __timezoneApplied: b,
        ...S
      } = n,
      {
        onDateChange: C,
        onRootMouseLeave: E,
        onHoveredDateChange: R,
        getControlProps: P,
      } = cB({
        type: i,
        level: "day",
        allowDeselect: p,
        allowSingleDateInRange: f,
        value: a,
        defaultValue: l,
        onChange: c,
        onMouseLeave: m,
        applyTimezone: !b,
      }),
      { resolvedClassNames: I, resolvedStyles: _ } = Bo({
        classNames: r,
        styles: o,
        props: n,
      }),
      T = zn();
    return g.jsx(qu, {
      ref: t,
      minLevel: "month",
      classNames: I,
      styles: _,
      __staticSelector: u || "DatePicker",
      onMouseLeave: E,
      numberOfColumns: h,
      hideOutsideDates: x ?? h !== 1,
      __onDayMouseEnter: (M, z) => {
        R(z), v == null || v(M, z);
      },
      __onDayClick: (M, z) => {
        C(z), y == null || y(M, z);
      },
      getDayProps: (M) => ({ ...P(M), ...(d == null ? void 0 : d(M)) }),
      ...S,
      date: vs("add", S.date, T.getTimezone(), b),
      __timezoneApplied: !0,
    });
  });
hg.classes = qu.classes;
hg.displayName = "@mantine/dates/DatePicker";
const gg = (e) => {
  const { title: t, description: n, form: r, options: o, field_id: s } = e,
    i = o.map((u) => u.option),
    [l, a] = w.useState(o.at(0));
  w.useEffect(() => {
    r.setFieldValue(s, l);
  }, []);
  const c = (u) => {
    a(u.value), r.setFieldValue(s, u.value);
  };
  return g.jsx(Oh, {
    label: t,
    description: n,
    data: i,
    defaultValue: i.at(0),
    onChange: (u, d) => c(d),
    searchable: !0,
  });
};
gg.defaultProps = {};
gg.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  options: U.array,
};
const yg = (e) => {
  const {
      title: t,
      description: n,
      form: r,
      options: o,
      field_id: s,
      mandatory: i,
    } = e,
    l = new Date(),
    a = new Date();
  a.setDate(a.getDate() + 1);
  const c = new Date();
  c.setFullYear(l.getFullYear() + 1);
  const u = new Date();
  u.setFullYear(l.getFullYear() + 2);
  const [d, f] = w.useState(c),
    [p, m] = w.useState(d),
    [h, { open: x, close: v }] = Po(!1);
  w.useEffect(() => {
    localStorage.setItem("embargo", d.toISOString().split("T")[0]);
  }, [d]);
  const y = () =>
      g.jsx(lr, {
        children: g.jsxs(yt, {
          onClick: x,
          variant: "default",
          className: "link-style",
          children: [
            g.jsx("i", { className: "icon ion-md-calendar align-top mr-2" }),
            "Change embargo date",
          ],
        }),
      }),
    b = (C) => {
      const E = new Date(l);
      E.setMonth(l.getMonth() + C), f(E);
    },
    S = () =>
      d.getDate().toString() +
      " " +
      d.toLocaleString("default", { month: "long" }) +
      " " +
      d.getFullYear().toString();
  return g.jsxs("div", {
    children: [
      g.jsxs("header", {
        className: "",
        children: [
          g.jsxs("h2", {
            className: "",
            children: [
              t,
              " ",
              i &&
                g.jsx("span", {
                  class:
                    "mantine-InputWrapper-required mantine-TextInput-required",
                  children: "*",
                }),
            ],
          }),
          g.jsx("h4", { children: S() }),
          y(),
        ],
      }),
      g.jsxs(xn, {
        opened: h,
        onClose: v,
        title: "Select embargo date",
        centered: !0,
        children: [
          g.jsx(lr, {
            justify: "center",
            children: g.jsxs("p", {
              className: "my-3",
              children: ["New Embargo: ", g.jsx("b", { children: S() })],
            }),
          }),
          g.jsxs(lr, {
            justify: "center",
            children: [
              g.jsx(yt, {
                className: "button-inverted blue-button",
                variant: "default",
                onClick: () => {
                  b(6);
                },
                children: "6 months",
              }),
              g.jsx(yt, {
                className: "button-inverted blue-button",
                variant: "default",
                onClick: () => {
                  b(12);
                },
                children: "12 months",
              }),
              g.jsx(yt, {
                className: "button-inverted blue-button",
                variant: "default",
                onClick: () => {
                  b(18);
                },
                children: "18 months",
              }),
            ],
          }),
          g.jsx(lr, {
            className: "pt-3 pb-5",
            justify: "center",
            children: g.jsx(hg, {
              defaultDate: c,
              minDate: a,
              maxDate: u,
              value: d,
              onChange: f,
            }),
          }),
          g.jsxs(lr, {
            justify: "center",
            children: [
              g.jsx(yt, {
                className: "button-inverted green-button",
                variant: "default",
                onClick: () => {
                  m(d), v();
                },
                children: "Accept",
              }),
              g.jsx(yt, {
                className: "button-inverted red-button",
                variant: "default",
                onClick: () => {
                  f(p), v();
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
yg.defaultProps = {};
yg.propTypes = {
  title: U.string.isRequired,
  description: U.string,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  options: U.array,
};
const dB = (e) => {
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
                      g.jsx("i", {
                        className: "fa fa-bookmark-o pr-2",
                        "aria-hidden": "true",
                      }),
                      "Submission Id: ",
                      g.jsx("br", {}),
                      g.jsx("div", { className: "data-field", children: a }),
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
                className: "info-box-header",
                children: [
                  g.jsx("i", {
                    className: "fa fa-archive pr-2",
                    "aria-hidden": "true",
                  }),
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
                    children: g.jsxs("div", {
                      className: "data-field",
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
                    href: w3 + l.issue,
                    children: [
                      g.jsx("i", {
                        className: "fa fa-tags pr-2",
                        "aria-hidden": "true",
                      }),
                      "Ticket:",
                      g.jsx("br", {}),
                      g.jsx("div", {
                        className: "data-field",
                        children: l.issue,
                      }),
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
                      g.jsx("i", {
                        className: "fa fa-info-circle pr-2",
                        "aria-hidden": "true",
                      }),
                      "Status: ",
                      g.jsx("br", {}),
                      g.jsx("div", {
                        className: "data-field",
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
                    g.jsx("i", {
                      className: "fa fa-comments pr-2",
                      "aria-hidden": "true",
                    }),
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
      className: "info-box",
      children: [
        g.jsxs("header", {
          className: "",
          children: [
            g.jsx("h2", { className: "omit-optional", children: t }),
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
  fB = () => {
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
        g.jsxs("h2", {
          className: "omit-optional",
          children: [
            "Metadata Templates",
            " ",
            g.jsxs(Zn, {
              width: 320,
              shadow: "md",
              position: "right",
              withArrow: !0,
              children: [
                g.jsx(Zn.Target, {
                  children: g.jsx("i", {
                    className: "fa fa-question-circle-o",
                    "aria-hidden": "true",
                  }),
                }),
                g.jsx(Zn.Dropdown, {
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
                className:
                  "list-group-item px-2 pt-0 pb-3 border-bottom-0 label-text",
                children: [
                  t.name,
                  g.jsx("div", {
                    className: "mt-3",
                    children: g.jsxs("a", {
                      href: t.template_link,
                      target: "_blank",
                      className: "px-3",
                      children: [
                        g.jsx("i", {
                          className: "fa fa-download pr-2",
                          "aria-hidden": "true",
                        }),
                        " CSV Template",
                      ],
                    }),
                  }),
                  g.jsx("div", {
                    className: "mt-3",
                    children: g.jsxs("a", {
                      href: t.description_link,
                      target: "_blank",
                      className: "px-3",
                      children: [
                        g.jsx("i", {
                          className: "fa fa-book pr-2",
                          "aria-hidden": "true",
                        }),
                        " Template Description",
                      ],
                    }),
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
  vg = (e) => {
    const {
      title: t,
      description: n,
      form: r,
      options: o,
      field_id: s,
      default_value: i,
    } = e;
    w.useEffect(() => {
      const a = i ? i.split(",") : [];
      r.setFieldValue(s, a);
    }, []);
    const l = o.map((a) => a.option);
    return g.jsx("div", {
      children: g.jsx(
        ks.Group,
        {
          label: t,
          description: n,
          ...r.getInputProps(s),
          children: l.map(function (a) {
            return g.jsx(ks, { value: a, label: a });
          }),
        },
        r.key(s)
      ),
    });
  };
vg.defaultProps = { default_value: "" };
vg.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
  default_value: U.string,
};
const bg = (e) => {
  const {
      title: t,
      description: n,
      form: r,
      options: o,
      field_id: s,
      default_value: i,
    } = e,
    l = i ? i.split(",") : [];
  w.useEffect(() => {
    r.setFieldValue(s, l);
  }, []);
  const a = (u) => {
      r.setFieldValue(s, u);
    },
    c = o.map((u) => ({ label: u.option, value: u.option }));
  return g.jsx("div", {
    children: g.jsx(lu, {
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
bg.defaultProps = { default_value: "" };
bg.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
  default_value: U.string,
};
function vE(e) {
  const {
      title: t,
      description: n,
      mandatory: r,
      form: o,
      field_id: s,
      placeholder: i,
    } = e,
    [l, a] = w.useState(""),
    [c, u] = w.useState([]),
    d = (m) => {
      a(m.target.value);
    },
    f = () => {
      if (l.trim() !== "") {
        const m = [...c, l];
        u(m), a(""), o.setFieldValue(s, m.join(", "));
      }
    },
    p = (m) => {
      const h = c.filter((x) => x !== m);
      u(h), o.setFieldValue(s, h.join(", "));
    };
  return g.jsxs("div", {
    children: [
      g.jsxs(nc, {
        style: { marginBottom: "8px" },
        children: [
          g.jsx(
            Tr,
            {
              label: t,
              description: n,
              placeholder: i,
              required: r,
              value: l,
              onChange: d,
              onKeyDown: (m) => {
                m.key === "Enter" && f();
              },
              style: { flex: "1", marginRight: "8px" },
            },
            o.key(s)
          ),
          g.jsx(yt, {
            onClick: f,
            style: { width: "auto", alignSelf: "flex-end" },
            children: "Add Publication",
          }),
        ],
      }),
      g.jsx(ko, {
        spacing: "xs",
        icon: g.jsx(au, {
          color: "blue",
          variant: "filled",
          children: g.jsx("i", { className: "fa fa-book" }),
        }),
        children: c.map((m) =>
          g.jsx(
            ko.Item,
            {
              children: g.jsxs(nc, {
                children: [
                  g.jsx("span", { children: m }),
                  g.jsx(Gs, {
                    onClick: () => p(m),
                    style: { marginLeft: "12px" },
                  }),
                ],
              }),
            },
            m
          )
        ),
      }),
    ],
  });
}
vE.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const wg = (e) => {
  const {
    title: t,
    description: n,
    mandatory: r,
    form: o,
    field_id: s,
    placeholder: i,
  } = e;
  return g.jsx(
    kh,
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
wg.defaultProps = { placeholder: "" };
wg.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const xg = (e) => {
  const {
    title: t,
    description: n,
    form: r,
    field_id: o,
    placeholder: s,
    mandatory: i,
  } = e;
  return g.jsx(
    Ch,
    {
      label: t,
      description: n,
      placeholder: s,
      autosize: !0,
      resize: "vertical",
      minRows: 2,
      required: i,
      ...r.getInputProps(o),
    },
    r.key(o)
  );
};
xg.defaultProps = { placeholder: "" };
xg.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const Li = (e) => {
  const {
    title: t,
    description: n,
    mandatory: r,
    form: o,
    field_id: s,
    placeholder: i,
  } = e;
  return g.jsx(
    Tr,
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
Li.defaultProps = { placeholder: "" };
Li.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const Ep = ({ field: e, form: t, onFilesChange: n }) => {
  const r = {
    title: e.title,
    description: e.description,
    default_value: e.default,
    mandatory: e.mandatory,
    options: e.options,
    field_id: e.field_id,
    placeholder: e.placeholder,
    form: t,
  };
  switch (e.field_type.type) {
    case "text-field":
      return g.jsx(Li, { ...r });
    case "text-area":
      return g.jsx(xg, { ...r });
    case "select-field":
      return g.jsx(gg, { ...r });
    case "file-upload":
      return g.jsx(dg, { ...r, onFilesChange: n });
    case "collapsible-selector":
      return g.jsx(Th, { ...r });
    case "metadata-template":
      return g.jsx(fB, { ...r });
    case "info-box":
      return g.jsx(dB, { ...r });
    case "multiselect-checkboxes":
      return g.jsx(vg, { ...r });
    case "multiselect-dropdown":
      return g.jsx(bg, { ...r });
    case "embargo-date-picker":
      return g.jsx(yg, { ...r });
    case "data-url-field":
      return g.jsx(Li, { ...r });
    case "tags-input":
      return g.jsx(wg, { ...r });
    case "related-publications":
      return g.jsx(vE, { ...r });
    case "contributors":
      return g.jsx(IC, { ...r });
    default:
      return g.jsx(Li, { ...r });
  }
};
Ep.propTypes = {
  field: U.object.isRequired,
  form: U.object.isRequired,
  onFilesChange: U.func.isRequired,
};
function bE(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: pB } = Object.prototype,
  { getPrototypeOf: Sg } = Object,
  Ku = ((e) => (t) => {
    const n = pB.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Vn = (e) => ((e = e.toLowerCase()), (t) => Ku(t) === e),
  Xu = (e) => (t) => typeof t === e,
  { isArray: Zs } = Array,
  ml = Xu("undefined");
function mB(e) {
  return (
    e !== null &&
    !ml(e) &&
    e.constructor !== null &&
    !ml(e.constructor) &&
    mn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const wE = Vn("ArrayBuffer");
function hB(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && wE(e.buffer)),
    t
  );
}
const gB = Xu("string"),
  mn = Xu("function"),
  xE = Xu("number"),
  Qu = (e) => e !== null && typeof e == "object",
  yB = (e) => e === !0 || e === !1,
  Ea = (e) => {
    if (Ku(e) !== "object") return !1;
    const t = Sg(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  vB = Vn("Date"),
  bB = Vn("File"),
  wB = Vn("Blob"),
  xB = Vn("FileList"),
  SB = (e) => Qu(e) && mn(e.pipe),
  CB = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (mn(e.append) &&
          ((t = Ku(e)) === "formdata" ||
            (t === "object" &&
              mn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  EB = Vn("URLSearchParams"),
  [DB, RB, PB, NB] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Vn
  ),
  _B = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Zs(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let l;
    for (r = 0; r < i; r++) (l = s[r]), t.call(null, e[l], l, e);
  }
}
function SE(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const CE =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  EE = (e) => !ml(e) && e !== CE;
function Dp() {
  const { caseless: e } = (EE(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && SE(t, o)) || o;
      Ea(t[s]) && Ea(r)
        ? (t[s] = Dp(t[s], r))
        : Ea(r)
        ? (t[s] = Dp({}, r))
        : Zs(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Pl(arguments[r], n);
  return t;
}
const OB = (e, t, n, { allOwnKeys: r } = {}) => (
    Pl(
      t,
      (o, s) => {
        n && mn(o) ? (e[s] = bE(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  kB = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  TB = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  $B = (e, t, n, r) => {
    let o, s, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && Sg(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  AB = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  IB = (e) => {
    if (!e) return null;
    if (Zs(e)) return e;
    let t = e.length;
    if (!xE(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  jB = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Sg(Uint8Array)),
  LB = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  MB = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  FB = Vn("HTMLFormElement"),
  BB = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  B0 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  zB = Vn("RegExp"),
  DE = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Pl(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  VB = (e) => {
    DE(e, (t, n) => {
      if (mn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (mn(r)) {
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
  WB = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return Zs(e) ? r(e) : r(String(e).split(t)), n;
  },
  UB = () => {},
  HB = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  rf = "abcdefghijklmnopqrstuvwxyz",
  z0 = "0123456789",
  RE = { DIGIT: z0, ALPHA: rf, ALPHA_DIGIT: rf + rf.toUpperCase() + z0 },
  GB = (e = 16, t = RE.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function YB(e) {
  return !!(
    e &&
    mn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const qB = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Qu(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = Zs(r) ? [] : {};
            return (
              Pl(r, (i, l) => {
                const a = n(i, o + 1);
                !ml(a) && (s[l] = a);
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
  KB = Vn("AsyncFunction"),
  XB = (e) => e && (Qu(e) || mn(e)) && mn(e.then) && mn(e.catch),
  F = {
    isArray: Zs,
    isArrayBuffer: wE,
    isBuffer: mB,
    isFormData: CB,
    isArrayBufferView: hB,
    isString: gB,
    isNumber: xE,
    isBoolean: yB,
    isObject: Qu,
    isPlainObject: Ea,
    isReadableStream: DB,
    isRequest: RB,
    isResponse: PB,
    isHeaders: NB,
    isUndefined: ml,
    isDate: vB,
    isFile: bB,
    isBlob: wB,
    isRegExp: zB,
    isFunction: mn,
    isStream: SB,
    isURLSearchParams: EB,
    isTypedArray: jB,
    isFileList: xB,
    forEach: Pl,
    merge: Dp,
    extend: OB,
    trim: _B,
    stripBOM: kB,
    inherits: TB,
    toFlatObject: $B,
    kindOf: Ku,
    kindOfTest: Vn,
    endsWith: AB,
    toArray: IB,
    forEachEntry: LB,
    matchAll: MB,
    isHTMLForm: FB,
    hasOwnProperty: B0,
    hasOwnProp: B0,
    reduceDescriptors: DE,
    freezeMethods: VB,
    toObjectSet: WB,
    toCamelCase: BB,
    noop: UB,
    toFiniteNumber: HB,
    findKey: SE,
    global: CE,
    isContextDefined: EE,
    ALPHABET: RE,
    generateString: GB,
    isSpecCompliantForm: YB,
    toJSONObject: qB,
    isAsyncFn: KB,
    isThenable: XB,
  };
function fe(e, t, n, r, o) {
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
F.inherits(fe, Error, {
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
const PE = fe.prototype,
  NE = {};
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
  NE[e] = { value: e };
});
Object.defineProperties(fe, NE);
Object.defineProperty(PE, "isAxiosError", { value: !0 });
fe.from = (e, t, n, r, o, s) => {
  const i = Object.create(PE);
  return (
    F.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    fe.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const QB = null;
function Rp(e) {
  return F.isPlainObject(e) || F.isArray(e);
}
function _E(e) {
  return F.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function V0(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = _E(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function JB(e) {
  return F.isArray(e) && !e.some(Rp);
}
const ZB = F.toFlatObject(F, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ju(e, t, n) {
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
  function c(m) {
    if (m === null) return "";
    if (F.isDate(m)) return m.toISOString();
    if (!a && F.isBlob(m))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(m) || F.isTypedArray(m)
      ? a && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, h, x) {
    let v = m;
    if (m && !x && typeof m == "object") {
      if (F.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (F.isArray(m) && JB(m)) ||
        ((F.isFileList(m) || F.endsWith(h, "[]")) && (v = F.toArray(m)))
      )
        return (
          (h = _E(h)),
          v.forEach(function (b, S) {
            !(F.isUndefined(b) || b === null) &&
              t.append(
                i === !0 ? V0([h], S, s) : i === null ? h : h + "[]",
                c(b)
              );
          }),
          !1
        );
    }
    return Rp(m) ? !0 : (t.append(V0(x, h, s), c(m)), !1);
  }
  const d = [],
    f = Object.assign(ZB, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Rp,
    });
  function p(m, h) {
    if (!F.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(m),
        F.forEach(m, function (v, y) {
          (!(F.isUndefined(v) || v === null) &&
            o.call(t, v, F.isString(y) ? y.trim() : y, h, f)) === !0 &&
            p(v, h ? h.concat(y) : [y]);
        }),
        d.pop();
    }
  }
  if (!F.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function W0(e) {
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
function Cg(e, t) {
  (this._pairs = []), e && Ju(e, this, t);
}
const OE = Cg.prototype;
OE.append = function (t, n) {
  this._pairs.push([t, n]);
};
OE.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, W0);
      }
    : W0;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function ez(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function kE(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || ez,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = F.isURLSearchParams(t) ? t.toString() : new Cg(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class U0 {
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
const TE = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  tz = typeof URLSearchParams < "u" ? URLSearchParams : Cg,
  nz = typeof FormData < "u" ? FormData : null,
  rz = typeof Blob < "u" ? Blob : null,
  oz = {
    isBrowser: !0,
    classes: { URLSearchParams: tz, FormData: nz, Blob: rz },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Eg = typeof window < "u" && typeof document < "u",
  sz = ((e) => Eg && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  iz =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  lz = (Eg && window.location.href) || "http://localhost",
  az = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Eg,
        hasStandardBrowserEnv: sz,
        hasStandardBrowserWebWorkerEnv: iz,
        origin: lz,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kn = { ...az, ...oz };
function cz(e, t) {
  return Ju(
    e,
    new kn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return kn.isNode && F.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function uz(e) {
  return F.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function dz(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function $E(e) {
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
          t(n, r, o[i], s) && F.isArray(o[i]) && (o[i] = dz(o[i])),
          !l)
    );
  }
  if (F.isFormData(e) && F.isFunction(e.entries)) {
    const n = {};
    return (
      F.forEachEntry(e, (r, o) => {
        t(uz(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function fz(e, t, n) {
  if (F.isString(e))
    try {
      return (t || JSON.parse)(e), F.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Nl = {
  transitional: TE,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = F.isObject(t);
      if ((s && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t)))
        return o ? JSON.stringify($E(t)) : t;
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
          return cz(t, this.formSerializer).toString();
        if ((l = F.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Ju(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), fz(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Nl.transitional,
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
              ? fe.from(l, fe.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: kn.classes.FormData, Blob: kn.classes.Blob },
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
  Nl.headers[e] = {};
});
const pz = F.toObjectSet([
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
  mz = (e) => {
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
              !(!n || (t[n] && pz[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  H0 = Symbol("internals");
function bi(e) {
  return e && String(e).trim().toLowerCase();
}
function Da(e) {
  return e === !1 || e == null ? e : F.isArray(e) ? e.map(Da) : String(e);
}
function hz(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const gz = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function of(e, t, n, r, o) {
  if (F.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!F.isString(t))) {
    if (F.isString(r)) return t.indexOf(r) !== -1;
    if (F.isRegExp(r)) return r.test(t);
  }
}
function yz(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function vz(e, t) {
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
class Vt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(l, a, c) {
      const u = bi(a);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = F.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || (c === void 0 && o[d] !== !1)) &&
        (o[d || a] = Da(l));
    }
    const i = (l, a) => F.forEach(l, (c, u) => s(c, u, a));
    if (F.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (F.isString(t) && (t = t.trim()) && !gz(t)) i(mz(t), n);
    else if (F.isHeaders(t)) for (const [l, a] of t.entries()) s(a, l, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = bi(t)), t)) {
      const r = F.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return hz(o);
        if (F.isFunction(n)) return n.call(this, o, r);
        if (F.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = bi(t)), t)) {
      const r = F.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || of(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = bi(i)), i)) {
        const l = F.findKey(r, i);
        l && (!n || of(r, r[l], l, n)) && (delete r[l], (o = !0));
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
      (!t || of(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
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
          (n[i] = Da(o)), delete n[s];
          return;
        }
        const l = t ? yz(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = Da(o)), (r[l] = !0);
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
    const r = (this[H0] = this[H0] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const l = bi(i);
      r[l] || (vz(o, i), (r[l] = !0));
    }
    return F.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Vt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
F.reduceDescriptors(Vt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
F.freezeMethods(Vt);
function sf(e, t) {
  const n = this || Nl,
    r = t || n,
    o = Vt.from(r.headers);
  let s = r.data;
  return (
    F.forEach(e, function (l) {
      s = l.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function AE(e) {
  return !!(e && e.__CANCEL__);
}
function ei(e, t, n) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
F.inherits(ei, fe, { __CANCEL__: !0 });
function IE(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new fe(
          "Request failed with status code " + n.status,
          [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function bz(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function wz(e, t) {
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
      const p = u && c - u;
      return p ? Math.round((f * 1e3) / p) : void 0;
    }
  );
}
function xz(e, t) {
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
const hc = (e, t, n = 3) => {
    let r = 0;
    const o = wz(50, 250);
    return xz((s) => {
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
  Sz = kn.hasStandardBrowserEnv
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
  Cz = kn.hasStandardBrowserEnv
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
function Ez(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Dz(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jE(e, t) {
  return e && !Ez(t) ? Dz(e, t) : t;
}
const G0 = (e) => (e instanceof Vt ? { ...e } : e);
function Ao(e, t) {
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
    headers: (c, u) => o(G0(c), G0(u), !0),
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
const LE = (e) => {
    const t = Ao({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: s,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = Vt.from(i)),
      (t.url = kE(jE(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
      if (kn.hasStandardBrowserEnv || kn.hasStandardBrowserWebWorkerEnv)
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
      kn.hasStandardBrowserEnv &&
      (r && F.isFunction(r) && (r = r(t)), r || (r !== !1 && Sz(t.url)))
    ) {
      const c = o && s && Cz.read(s);
      c && i.set(o, c);
    }
    return t;
  },
  Rz = typeof XMLHttpRequest < "u",
  Pz =
    Rz &&
    function (e) {
      return new Promise(function (n, r) {
        const o = LE(e);
        let s = o.data;
        const i = Vt.from(o.headers).normalize();
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
          const p = Vt.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            h = {
              data:
                !l || l === "text" || l === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: p,
              config: e,
              request: u,
            };
          IE(
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
              (r(new fe("Request aborted", fe.ECONNABORTED, o, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new fe("Network Error", fe.ERR_NETWORK, o, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let m = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = o.transitional || TE;
            o.timeoutErrorMessage && (m = o.timeoutErrorMessage),
              r(
                new fe(
                  m,
                  h.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
                  o,
                  u
                )
              ),
              (u = null);
          }),
          s === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            F.forEach(i.toJSON(), function (m, h) {
              u.setRequestHeader(h, m);
            }),
          F.isUndefined(o.withCredentials) ||
            (u.withCredentials = !!o.withCredentials),
          l && l !== "json" && (u.responseType = o.responseType),
          typeof o.onDownloadProgress == "function" &&
            u.addEventListener("progress", hc(o.onDownloadProgress, !0)),
          typeof o.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", hc(o.onUploadProgress)),
          (o.cancelToken || o.signal) &&
            ((a = (p) => {
              u &&
                (r(!p || p.type ? new ei(null, e, u) : p),
                u.abort(),
                (u = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(a),
            o.signal &&
              (o.signal.aborted ? a() : o.signal.addEventListener("abort", a)));
        const f = bz(o.url);
        if (f && kn.protocols.indexOf(f) === -1) {
          r(new fe("Unsupported protocol " + f + ":", fe.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(s || null);
      });
    },
  Nz = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (a) {
      if (!r) {
        (r = !0), i();
        const c = a instanceof Error ? a : this.reason;
        n.abort(
          c instanceof fe ? c : new ei(c instanceof Error ? c.message : c)
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        o(new fe(`timeout ${t} of ms exceeded`, fe.ETIMEDOUT));
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
  _z = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  Oz = async function* (e, t, n) {
    for await (const r of e)
      yield* _z(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Y0 = (e, t, n, r, o) => {
    const s = Oz(e, t, o);
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
  q0 = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  Zu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ME = Zu && typeof ReadableStream == "function",
  Pp =
    Zu &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  kz =
    ME &&
    (() => {
      let e = !1;
      const t = new Request(kn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  K0 = 64 * 1024,
  Np =
    ME &&
    !!(() => {
      try {
        return F.isReadableStream(new Response("").body);
      } catch {}
    })(),
  gc = { stream: Np && ((e) => e.body) };
Zu &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !gc[t] &&
        (gc[t] = F.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new fe(
                `Response type '${t}' is not supported`,
                fe.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Tz = async (e) => {
    if (e == null) return 0;
    if (F.isBlob(e)) return e.size;
    if (F.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (F.isArrayBufferView(e)) return e.byteLength;
    if ((F.isURLSearchParams(e) && (e = e + ""), F.isString(e)))
      return (await Pp(e)).byteLength;
  },
  $z = async (e, t) => {
    const n = F.toFiniteNumber(e.getContentLength());
    return n ?? Tz(t);
  },
  Az =
    Zu &&
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
      } = LE(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [p, m] = o || s || i ? Nz([o, s], i) : [],
        h,
        x;
      const v = () => {
        !h &&
          setTimeout(() => {
            p && p.unsubscribe();
          }),
          (h = !0);
      };
      let y;
      try {
        if (
          a &&
          kz &&
          n !== "get" &&
          n !== "head" &&
          (y = await $z(u, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          F.isFormData(r) &&
            (R = E.headers.get("content-type")) &&
            u.setContentType(R),
            E.body && (r = Y0(E.body, K0, q0(y, hc(a)), null, Pp));
        }
        F.isString(d) || (d = d ? "cors" : "omit"),
          (x = new Request(t, {
            ...f,
            signal: p,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let b = await fetch(x);
        const S = Np && (c === "stream" || c === "response");
        if (Np && (l || S)) {
          const E = {};
          ["status", "statusText", "headers"].forEach((P) => {
            E[P] = b[P];
          });
          const R = F.toFiniteNumber(b.headers.get("content-length"));
          b = new Response(
            Y0(b.body, K0, l && q0(R, hc(l, !0)), S && v, Pp),
            E
          );
        }
        c = c || "text";
        let C = await gc[F.findKey(gc, c) || "text"](b, e);
        return (
          !S && v(),
          m && m(),
          await new Promise((E, R) => {
            IE(E, R, {
              data: C,
              headers: Vt.from(b.headers),
              status: b.status,
              statusText: b.statusText,
              config: e,
              request: x,
            });
          })
        );
      } catch (b) {
        throw (
          (v(),
          b && b.name === "TypeError" && /fetch/i.test(b.message)
            ? Object.assign(new fe("Network Error", fe.ERR_NETWORK, e, x), {
                cause: b.cause || b,
              })
            : fe.from(b, b && b.code, e, x))
        );
      }
    }),
  _p = { http: QB, xhr: Pz, fetch: Az };
F.forEach(_p, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const X0 = (e) => `- ${e}`,
  Iz = (e) => F.isFunction(e) || e === null || e === !1,
  FE = {
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
          !Iz(n) && ((r = _p[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new fe(`Unknown adapter '${i}'`);
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
              s.map(X0).join(`
`)
            : " " + X0(s[0])
          : "as no adapter specified";
        throw new fe(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: _p,
  };
function lf(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ei(null, e);
}
function Q0(e) {
  return (
    lf(e),
    (e.headers = Vt.from(e.headers)),
    (e.data = sf.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    FE.getAdapter(e.adapter || Nl.adapter)(e).then(
      function (r) {
        return (
          lf(e),
          (r.data = sf.call(e, e.transformResponse, r)),
          (r.headers = Vt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          AE(r) ||
            (lf(e),
            r &&
              r.response &&
              ((r.response.data = sf.call(e, e.transformResponse, r.response)),
              (r.response.headers = Vt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const BE = "1.7.2",
  Dg = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Dg[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const J0 = {};
Dg.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      BE +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, l) => {
    if (t === !1)
      throw new fe(
        o(i, " has been removed" + (n ? " in " + n : "")),
        fe.ERR_DEPRECATED
      );
    return (
      n &&
        !J0[i] &&
        ((J0[i] = !0),
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
function jz(e, t, n) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const l = e[s],
        a = l === void 0 || i(l, s, e);
      if (a !== !0)
        throw new fe("option " + s + " must be " + a, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new fe("Unknown option " + s, fe.ERR_BAD_OPTION);
  }
}
const Op = { assertOptions: jz, validators: Dg },
  Er = Op.validators;
class wo {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new U0(), response: new U0() });
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
      (n = Ao(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      Op.assertOptions(
        r,
        {
          silentJSONParsing: Er.transitional(Er.boolean),
          forcedJSONParsing: Er.transitional(Er.boolean),
          clarifyTimeoutError: Er.transitional(Er.boolean),
        },
        !1
      ),
      o != null &&
        (F.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Op.assertOptions(
              o,
              { encode: Er.function, serialize: Er.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && F.merge(s.common, s[n.method]);
    s &&
      F.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete s[m];
        }
      ),
      (n.headers = Vt.concat(i, s));
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
      const m = [Q0.bind(this), void 0];
      for (
        m.unshift.apply(m, l),
          m.push.apply(m, c),
          f = m.length,
          u = Promise.resolve(n);
        d < f;

      )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    f = l.length;
    let p = n;
    for (d = 0; d < f; ) {
      const m = l[d++],
        h = l[d++];
      try {
        p = m(p);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      u = Q0.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Ao(this.defaults, t);
    const n = jE(t.baseURL, t.url);
    return kE(n, t.params, t.paramsSerializer);
  }
}
F.forEach(["delete", "get", "head", "options"], function (t) {
  wo.prototype[t] = function (n, r) {
    return this.request(
      Ao(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
F.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, l) {
      return this.request(
        Ao(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (wo.prototype[t] = n()), (wo.prototype[t + "Form"] = n(!0));
});
class Rg {
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
        r.reason || ((r.reason = new ei(s, i, l)), n(r.reason));
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
      token: new Rg(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function Lz(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Mz(e) {
  return F.isObject(e) && e.isAxiosError === !0;
}
const kp = {
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
Object.entries(kp).forEach(([e, t]) => {
  kp[t] = e;
});
function zE(e) {
  const t = new wo(e),
    n = bE(wo.prototype.request, t);
  return (
    F.extend(n, wo.prototype, t, { allOwnKeys: !0 }),
    F.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return zE(Ao(e, o));
    }),
    n
  );
}
const Be = zE(Nl);
Be.Axios = wo;
Be.CanceledError = ei;
Be.CancelToken = Rg;
Be.isCancel = AE;
Be.VERSION = BE;
Be.toFormData = Ju;
Be.AxiosError = fe;
Be.Cancel = Be.CanceledError;
Be.all = function (t) {
  return Promise.all(t);
};
Be.spread = Lz;
Be.isAxiosError = Mz;
Be.mergeConfig = Ao;
Be.AxiosHeaders = Vt;
Be.formToJSON = (e) => $E(F.isHTMLForm(e) ? new FormData(e) : e);
Be.getAdapter = FE.getAdapter;
Be.HttpStatusCode = kp;
Be.default = Be;
const Fz = async (e, t, n) => {
    let r = {};
    const o = { target: e, embargo: t, data: { requirements: n } };
    let s = "";
    window.props !== void 0 && (s = window.props.token || "no-token-found");
    const i = ug,
      l = {
        headers: {
          Authorization: "Token " + s,
          "Content-Type": "application/json",
        },
      };
    return (
      await Be.post(i, o, l)
        .then((a) => {
          console.log("RESPONSE: ", a), (r = a.data);
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
  Bz = (e, t, n, r, o, s) => {
    const i = new FormData();
    i.append("file", t),
      i.append("attach_to_ticket", n),
      i.append("meta_data", r);
    const l = {
        headers: { Authorization: "Token " + o },
        onUploadProgress: (c) => {
          const u = Math.round((c.loaded * 100) / c.total);
          s && s(u);
        },
      },
      a = `${ug}${e}${x3}`;
    return Be.post(a, i, l)
      .then((c) => (console.log("RESPONSE: ", c), c.data))
      .catch((c) => {
        throw (console.log("Error: ", c), new Error(c.message));
      })
      .finally(() => {
        console.log("Upload finished");
      });
  };
function zz(e) {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(e);
}
function Vz(e, t) {
  let n = t.form_fields.find(
      ({ field_type: s }) => s.type === "data-url-field"
    ),
    r = n.field_id,
    o = e[r];
  return n.mandatory === "true" || (o !== void 0 && o !== "")
    ? { [r]: zz(o) ? null : "Please enter a valid URL" }
    : null;
}
const VE = (e) => {
  const {
      profileData: t,
      submissionData: n,
      isLoading: r,
      profileError: o,
      SubmissionError: s,
    } = e,
    [i, l] = w.useState(!1),
    [a, c] = w.useState([]),
    [u, d] = w.useState(!1),
    [f, p] = w.useState(-1),
    m = PA({
      mode: "uncontrolled",
      name: "profile-form",
      validateInputOnBlur: !0,
      initialValues: { files: [] },
      validate: (y) => {
        if (
          t.form_fields.map((S) => S.field_type.type).includes("data-url-field")
        )
          return Vz(y, t);
      },
    }),
    h = (y, b, S) => {
      m.setFieldValue("files", y), c(y), d(b), p(S);
    },
    x = async (y, b, S) => {
      const E = S;
      let R = "";
      window.props !== void 0 && (R = window.props.token || "no-token-found");
      try {
        await Bz(b, y, !1, E, R, (P) => {
          console.log(`Upload progress: ${P}%`);
        }),
          console.log("Upload complete");
      } catch (P) {
        console.error("Upload error: ", P);
      }
    },
    v = (y) => {
      !m.isValid ||
        u ||
        (l(!0),
        Fz(t.target, localStorage.getItem("embargo"), y)
          .then((b) => {
            if (b && b.broker_submission_id) {
              const S = b.broker_submission_id,
                C = a.map((E, R) => x(E, S, R === f));
              return Promise.all(C);
            } else
              throw (
                (console.error(
                  "broker_submission_id is missing in the response data."
                ),
                new Error(
                  "broker_submission_id is missing in the response data."
                ))
              );
          })
          .catch((b) => {
            console.error("Submission error: ", b);
          })
          .finally(() => {
            l(!1);
          }));
    };
  return (
    console.log("FORM FIELDS ", t.form_fields),
    g.jsxs("form", {
      onSubmit: m.onSubmit(v),
      className: "submission-form container",
      children: [
        g.jsxs("p", { children: ["processing: ", "" + i] }),
        g.jsxs("div", {
          className: "row",
          children: [
            g.jsx("div", {
              className: "col-md-9 main-col",
              children: t.form_fields
                .filter((y) => y.position == "main")
                .map((y, b) =>
                  g.jsx(Ep, { field: y, form: m, onFilesChange: h }, b)
                ),
            }),
            g.jsx("div", {
              className: "col-md-3 side-col",
              children: t.form_fields
                .filter((y) => y.position == "sidebar")
                .map((y, b) =>
                  g.jsx(Ep, { field: y, form: m, onFilesChange: h }, b)
                ),
            }),
          ],
        }),
        g.jsx("div", {
          className: "row",
          children: g.jsx(lr, {
            mt: "md",
            className: "mt-5 col-md-9",
            children: g.jsxs(yt, {
              className: "submission-button",
              type: "submit",
              children: [
                g.jsx("i", { className: "fa fa-play mr-3" }),
                " Create Submission",
              ],
            }),
          }),
        }),
      ],
    })
  );
};
VE.propTypes = { profileData: U.object.isRequired };
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yc() {
  return (
    (yc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yc.apply(this, arguments)
  );
}
var $r;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($r || ($r = {}));
const Z0 = "popstate";
function Wz(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return Tp(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : UE(o);
  }
  return Hz(t, n, null, e);
}
function Ut(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function WE(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Uz() {
  return Math.random().toString(36).substr(2, 8);
}
function eb(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Tp(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    yc(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ed(t) : t,
      { state: n, key: (t && t.key) || r || Uz() }
    )
  );
}
function UE(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ed(e) {
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
function Hz(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = $r.Pop,
    a = null,
    c = u();
  c == null && ((c = 0), i.replaceState(yc({}, i.state, { idx: c }), ""));
  function u() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    l = $r.Pop;
    let x = u(),
      v = x == null ? null : x - c;
    (c = x), a && a({ action: l, location: h.location, delta: v });
  }
  function f(x, v) {
    l = $r.Push;
    let y = Tp(h.location, x, v);
    c = u() + 1;
    let b = eb(y, c),
      S = h.createHref(y);
    try {
      i.pushState(b, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    s && a && a({ action: l, location: h.location, delta: 1 });
  }
  function p(x, v) {
    l = $r.Replace;
    let y = Tp(h.location, x, v);
    c = u();
    let b = eb(y, c),
      S = h.createHref(y);
    i.replaceState(b, "", S),
      s && a && a({ action: l, location: h.location, delta: 0 });
  }
  function m(x) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      y = typeof x == "string" ? x : UE(x);
    return (
      (y = y.replace(/ $/, "%20")),
      Ut(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, v)
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
        o.addEventListener(Z0, d),
        (a = x),
        () => {
          o.removeEventListener(Z0, d), (a = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: m,
    encodeLocation(x) {
      let v = m(x);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: f,
    replace: p,
    go(x) {
      return i.go(x);
    },
  };
  return h;
}
var tb;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(tb || (tb = {}));
function Gz(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? ed(t) : t,
    o = YE(r.pathname || "/", n);
  if (o == null) return null;
  let s = HE(e);
  Yz(s);
  let i = null;
  for (let l = 0; i == null && l < s.length; ++l) {
    let a = s4(o);
    i = n4(s[l], a);
  }
  return i;
}
function HE(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (Ut(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = bs([r, a.relativePath]),
      u = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (Ut(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      HE(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: e4(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of GE(s.path)) o(s, i, a);
    }),
    t
  );
}
function GE(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = GE(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Yz(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : t4(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const qz = /^:[\w-]+$/,
  Kz = 3,
  Xz = 2,
  Qz = 1,
  Jz = 10,
  Zz = -2,
  nb = (e) => e === "*";
function e4(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(nb) && (r += Zz),
    t && (r += Xz),
    n
      .filter((o) => !nb(o))
      .reduce((o, s) => o + (qz.test(s) ? Kz : s === "" ? Qz : Jz), r)
  );
}
function t4(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function n4(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    s = [];
  for (let i = 0; i < n.length; ++i) {
    let l = n[i],
      a = i === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      u = r4(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        c
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = l.route;
    s.push({
      params: r,
      pathname: bs([o, u.pathname]),
      pathnameBase: i4(bs([o, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (o = bs([o, u.pathnameBase]));
  }
  return s;
}
function r4(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = o4(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: f, isOptional: p } = u;
      if (f === "*") {
        let h = l[d] || "";
        i = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
      }
      const m = l[d];
      return (
        p && !m ? (c[f] = void 0) : (c[f] = (m || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function o4(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    WE(
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
function s4(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      WE(
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
function YE(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const bs = (e) => e.join("/").replace(/\/\/+/g, "/"),
  i4 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function l4(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const qE = ["post", "put", "patch", "delete"];
new Set(qE);
const a4 = ["get", ...qE];
new Set(a4);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vc() {
  return (
    (vc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vc.apply(this, arguments)
  );
}
const c4 = w.createContext(null),
  u4 = w.createContext(null),
  KE = w.createContext(null),
  td = w.createContext(null),
  _l = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  XE = w.createContext(null);
function Pg() {
  return w.useContext(td) != null;
}
function d4() {
  return Pg() || Ut(!1), w.useContext(td).location;
}
function f4() {
  let { matches: e } = w.useContext(_l),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function p4(e, t) {
  return m4(e, t);
}
function m4(e, t, n, r) {
  Pg() || Ut(!1);
  let { navigator: o } = w.useContext(KE),
    { matches: s } = w.useContext(_l),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let c = d4(),
    u;
  if (t) {
    var d;
    let x = typeof t == "string" ? ed(t) : t;
    a === "/" || ((d = x.pathname) != null && d.startsWith(a)) || Ut(!1),
      (u = x);
  } else u = c;
  let f = u.pathname || "/",
    p = f;
  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let m = Gz(e, { pathname: p }),
    h = b4(
      m &&
        m.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: bs([
              a,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : bs([
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
        td.Provider,
        {
          value: {
            location: vc(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: $r.Pop,
          },
        },
        h
      )
    : h;
}
function h4() {
  let e = C4(),
    t = l4(e)
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
const g4 = w.createElement(h4, null);
class y4 extends w.Component {
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
          _l.Provider,
          { value: this.props.routeContext },
          w.createElement(XE.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function v4(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(c4);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(_l.Provider, { value: t }, r)
  );
}
function b4(e, t, n, r) {
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
    u >= 0 || Ut(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
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
        let { loaderData: f, errors: p } = n,
          m =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (a = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((u, d, f) => {
    let p,
      m = !1,
      h = null,
      x = null;
    n &&
      ((p = l && d.route.id ? l[d.route.id] : void 0),
      (h = d.route.errorElement || g4),
      a &&
        (c < 0 && f === 0
          ? ((m = !0), (x = null))
          : c === f &&
            ((m = !0), (x = d.route.hydrateFallbackElement || null))));
    let v = t.concat(i.slice(0, f + 1)),
      y = () => {
        let b;
        return (
          p
            ? (b = h)
            : m
            ? (b = x)
            : d.route.Component
            ? (b = w.createElement(d.route.Component, null))
            : d.route.element
            ? (b = d.route.element)
            : (b = u),
          w.createElement(v4, {
            match: d,
            routeContext: { outlet: u, matches: v, isDataRoute: n != null },
            children: b,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? w.createElement(y4, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: p,
          children: y(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var $p = (function (e) {
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
})($p || {});
function w4(e) {
  let t = w.useContext(u4);
  return t || Ut(!1), t;
}
function x4(e) {
  let t = w.useContext(_l);
  return t || Ut(!1), t;
}
function S4(e) {
  let t = x4(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ut(!1), n.route.id;
}
function C4() {
  var e;
  let t = w.useContext(XE),
    n = w4($p.UseRouteError),
    r = S4($p.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ap(e) {
  Ut(!1);
}
function E4(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = $r.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  Pg() && Ut(!1);
  let a = t.replace(/^\/*/, "/"),
    c = w.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: vc({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = ed(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: p = null,
      key: m = "default",
    } = r,
    h = w.useMemo(() => {
      let x = YE(u, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: p, key: m },
            navigationType: o,
          };
    }, [a, u, d, f, p, m, o]);
  return h == null
    ? null
    : w.createElement(
        KE.Provider,
        { value: c },
        w.createElement(td.Provider, { children: n, value: h })
      );
}
function D4(e) {
  let { children: t, location: n } = e;
  return p4(Ip(t), n);
}
new Promise(() => {});
function Ip(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, Ip(r.props.children, s));
        return;
      }
      r.type !== Ap && Ut(!1), !r.props.index || !r.props.children || Ut(!1);
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
      r.props.children && (i.children = Ip(r.props.children, s)), n.push(i);
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
 */ const R4 = "6";
try {
  window.__reactRouterVersion = R4;
} catch {}
const P4 = "startTransition",
  rb = yb[P4];
function N4(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = w.useRef();
  s.current == null && (s.current = Wz({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = w.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    u = w.useCallback(
      (d) => {
        c && rb ? rb(() => a(d)) : a(d);
      },
      [a, c]
    );
  return (
    w.useLayoutEffect(() => i.listen(u), [i, u]),
    w.createElement(E4, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
var ob;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ob || (ob = {}));
var sb;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(sb || (sb = {}));
const _4 = (e, t) => {
    const [n, r] = w.useState([]),
      [o, s] = w.useState([]),
      [i, l] = w.useState(!1),
      [a, c] = w.useState(!0),
      [u, d] = w.useState(null),
      [f, p] = w.useState(null);
    let m = "";
    window.props !== void 0 && (m = window.props.token || "no-token-found"),
      t === void 0 && localStorage.setItem("submission", JSON.stringify({}));
    const h = {
      headers: {
        Authorization: "Token " + m,
        "Content-Type": "application/json",
      },
    };
    return (
      w.useEffect(
        () => (
          (async () => {
            c(!0),
              await Be.get(b3 + e)
                .then((v) => {
                  r(v.data), l(!0);
                })
                .catch((v) => {
                  d(v);
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
              await Be.get(ug + t + "/", h)
                .then((v) => {
                  localStorage.setItem("submission", JSON.stringify(v.data)),
                    s(v.data);
                })
                .catch((v) => {
                  p(v);
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
  O4 = sA(VE),
  k4 = iA(O4),
  ib = () => {
    const { brokerSubmissionId: e } = f4(),
      t = localStorage.getItem("profileName") || v3,
      { data1: n, data2: r, isLoading: o, error1: s, error2: i } = _4(t, e);
    return g.jsxs("div", {
      children: [
        g.jsx("h1", { children: "ProfileForm" }),
        g.jsx(k4, {
          profileData: n,
          submissionData: r,
          isLoading: o,
          profileError: s,
          submissionError: i,
        }),
      ],
    });
  };
function T4() {
  return g.jsx(Hx, {
    children: g.jsxs(D4, {
      children: [
        g.jsx(Ap, { path: "/", element: g.jsx(ib, {}) }),
        g.jsx(Ap, { path: "/:brokerSubmissionId", element: g.jsx(ib, {}) }),
      ],
    }),
  });
}
let Ng = "generic";
window.props !== void 0 && (Ng = window.props.profile_name || "generic");
localStorage.setItem("profileName", Ng);
const $4 = "/profile/profile/" + Ng + "/ui/";
af.createRoot(document.getElementById("root")).render(
  g.jsx(be.StrictMode, {
    children: g.jsx(N4, { basename: $4, children: g.jsx(T4, {}) }),
  })
);
