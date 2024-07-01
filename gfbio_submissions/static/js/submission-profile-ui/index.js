function Z1(e, t) {
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
var Ed =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ng = { exports: {} },
  la = {},
  Tg = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mi = Symbol.for("react.element"),
  J1 = Symbol.for("react.portal"),
  ex = Symbol.for("react.fragment"),
  tx = Symbol.for("react.strict_mode"),
  nx = Symbol.for("react.profiler"),
  rx = Symbol.for("react.provider"),
  ox = Symbol.for("react.context"),
  sx = Symbol.for("react.forward_ref"),
  ix = Symbol.for("react.suspense"),
  lx = Symbol.for("react.memo"),
  ax = Symbol.for("react.lazy"),
  Wp = Symbol.iterator;
function cx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wp && e[Wp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Og = Object.assign,
  $g = {};
function es(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $g),
    (this.updater = n || jg);
}
es.prototype.isReactComponent = {};
es.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
es.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lg() {}
Lg.prototype = es.prototype;
function _d(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $g),
    (this.updater = n || jg);
}
var kd = (_d.prototype = new Lg());
kd.constructor = _d;
Og(kd, es.prototype);
kd.isPureReactComponent = !0;
var Yp = Array.isArray,
  Ag = Object.prototype.hasOwnProperty,
  Rd = { current: null },
  Fg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mg(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Ag.call(t, r) && !Fg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: mi,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Rd.current,
  };
}
function ux(e, t) {
  return {
    $$typeof: mi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mi;
}
function dx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qp = /\/+/g;
function mc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dx("" + e.key)
    : t.toString(36);
}
function ol(e, t, n, r, o) {
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
          case mi:
          case J1:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + mc(i, 0) : r),
      Yp(o)
        ? ((n = ""),
          e != null && (n = e.replace(qp, "$&/") + "/"),
          ol(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Dd(o) &&
            (o = ux(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(qp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Yp(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + mc(s, l);
      i += ol(s, t, n, a, o);
    }
  else if (((a = cx(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + mc(s, l++)), (i += ol(s, t, n, a, o));
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
function Ti(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ol(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function fx(e) {
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
  sl = { transition: null },
  px = {
    ReactCurrentDispatcher: pt,
    ReactCurrentBatchConfig: sl,
    ReactCurrentOwner: Rd,
  };
function Ig() {
  throw Error("act(...) is not supported in production builds of React.");
}
fe.Children = {
  map: Ti,
  forEach: function (e, t, n) {
    Ti(
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
      Ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Dd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
fe.Component = es;
fe.Fragment = ex;
fe.Profiler = nx;
fe.PureComponent = _d;
fe.StrictMode = tx;
fe.Suspense = ix;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = px;
fe.act = Ig;
fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Og({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Rd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Ag.call(t, a) &&
        !Fg.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: mi, type: e.type, key: o, ref: s, props: r, _owner: i };
};
fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: ox,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rx, _context: e }),
    (e.Consumer = e)
  );
};
fe.createElement = Mg;
fe.createFactory = function (e) {
  var t = Mg.bind(null, e);
  return (t.type = e), t;
};
fe.createRef = function () {
  return { current: null };
};
fe.forwardRef = function (e) {
  return { $$typeof: sx, render: e };
};
fe.isValidElement = Dd;
fe.lazy = function (e) {
  return { $$typeof: ax, _payload: { _status: -1, _result: e }, _init: fx };
};
fe.memo = function (e, t) {
  return { $$typeof: lx, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function (e) {
  var t = sl.transition;
  sl.transition = {};
  try {
    e();
  } finally {
    sl.transition = t;
  }
};
fe.unstable_act = Ig;
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
Tg.exports = fe;
var x = Tg.exports;
const aa = br(x),
  zg = Z1({ __proto__: null, default: aa }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mx = x,
  hx = Symbol.for("react.element"),
  gx = Symbol.for("react.fragment"),
  yx = Object.prototype.hasOwnProperty,
  vx = mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bg(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) yx.call(t, r) && !wx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: hx,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: vx.current,
  };
}
la.Fragment = gx;
la.jsx = Bg;
la.jsxs = Bg;
Ng.exports = la;
var h = Ng.exports,
  su = {},
  Vg = { exports: {} },
  At = {},
  Hg = { exports: {} },
  Ug = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, _) {
    var $ = R.length;
    R.push(_);
    e: for (; 0 < $; ) {
      var j = ($ - 1) >>> 1,
        I = R[j];
      if (0 < o(I, _)) (R[j] = _), (R[$] = I), ($ = j);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var _ = R[0],
      $ = R.pop();
    if ($ !== _) {
      R[0] = $;
      e: for (var j = 0, I = R.length, q = I >>> 1; j < q; ) {
        var Q = 2 * (j + 1) - 1,
          ee = R[Q],
          ne = Q + 1,
          te = R[ne];
        if (0 > o(ee, $))
          ne < I && 0 > o(te, ee)
            ? ((R[j] = te), (R[ne] = $), (j = ne))
            : ((R[j] = ee), (R[Q] = $), (j = Q));
        else if (ne < I && 0 > o(te, $)) (R[j] = te), (R[ne] = $), (j = ne);
        else break e;
      }
    }
    return _;
  }
  function o(R, _) {
    var $ = R.sortIndex - _.sortIndex;
    return $ !== 0 ? $ : R.id - _.id;
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
    g = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= R)
        r(c), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(c);
    }
  }
  function S(R) {
    if (((g = !1), v(R), !p))
      if (n(a) !== null) (p = !0), P(C);
      else {
        var _ = n(c);
        _ !== null && T(S, _.startTime - R);
      }
  }
  function C(R, _) {
    (p = !1), g && ((g = !1), w(D), (D = -1)), (m = !0);
    var $ = f;
    try {
      for (
        v(_), d = n(a);
        d !== null && (!(d.expirationTime > _) || (R && !F()));

      ) {
        var j = d.callback;
        if (typeof j == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var I = j(d.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof I == "function" ? (d.callback = I) : d === n(a) && r(a),
            v(_);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var q = !0;
      else {
        var Q = n(c);
        Q !== null && T(S, Q.startTime - _), (q = !1);
      }
      return q;
    } finally {
      (d = null), (f = $), (m = !1);
    }
  }
  var E = !1,
    k = null,
    D = -1,
    L = 5,
    N = -1;
  function F() {
    return !(e.unstable_now() - N < L);
  }
  function B() {
    if (k !== null) {
      var R = e.unstable_now();
      N = R;
      var _ = !0;
      try {
        _ = k(!0, R);
      } finally {
        _ ? V() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var V;
  if (typeof y == "function")
    V = function () {
      y(B);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      O = A.port2;
    (A.port1.onmessage = B),
      (V = function () {
        O.postMessage(null);
      });
  } else
    V = function () {
      b(B, 0);
    };
  function P(R) {
    (k = R), E || ((E = !0), V());
  }
  function T(R, _) {
    D = b(function () {
      R(e.unstable_now());
    }, _);
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
          var _ = 3;
          break;
        default:
          _ = f;
      }
      var $ = f;
      f = _;
      try {
        return R();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, _) {
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
        return _();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, _, $) {
      var j = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? j + $ : j))
          : ($ = j),
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
          callback: _,
          priorityLevel: R,
          startTime: $,
          expirationTime: I,
          sortIndex: -1,
        }),
        $ > j
          ? ((R.sortIndex = $),
            t(c, R),
            n(a) === null &&
              R === n(c) &&
              (g ? (w(D), (D = -1)) : (g = !0), T(S, $ - j)))
          : ((R.sortIndex = I), t(a, R), p || m || ((p = !0), P(C))),
        R
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (R) {
      var _ = f;
      return function () {
        var $ = f;
        f = _;
        try {
          return R.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(Ug);
Hg.exports = Ug;
var xx = Hg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bx = x,
  Lt = xx;
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
var Wg = new Set(),
  Us = {};
function Jr(e, t) {
  Io(e, t), Io(e + "Capture", t);
}
function Io(e, t) {
  for (Us[e] = t, e = 0; e < t.length; e++) Wg.add(t[e]);
}
var zn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  iu = Object.prototype.hasOwnProperty,
  Sx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gp = {},
  Kp = {};
function Cx(e) {
  return iu.call(Kp, e)
    ? !0
    : iu.call(Gp, e)
    ? !1
    : Sx.test(e)
    ? (Kp[e] = !0)
    : ((Gp[e] = !0), !1);
}
function Ex(e, t, n, r) {
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
function _x(e, t, n, r) {
  if (t === null || typeof t > "u" || Ex(e, t, n, r)) return !0;
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
var et = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    et[e] = new mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  et[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  et[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  et[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    et[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  et[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  et[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  et[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  et[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pd = /[\-:]([a-z])/g;
function Nd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pd, Nd);
    et[t] = new mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pd, Nd);
    et[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Pd, Nd);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Td(e, t, n, r) {
  var o = et.hasOwnProperty(t) ? et[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_x(t, n, o, r) && (n = null),
    r || o === null
      ? Cx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Wn = bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ji = Symbol.for("react.element"),
  go = Symbol.for("react.portal"),
  yo = Symbol.for("react.fragment"),
  jd = Symbol.for("react.strict_mode"),
  lu = Symbol.for("react.profiler"),
  Yg = Symbol.for("react.provider"),
  qg = Symbol.for("react.context"),
  Od = Symbol.for("react.forward_ref"),
  au = Symbol.for("react.suspense"),
  cu = Symbol.for("react.suspense_list"),
  $d = Symbol.for("react.memo"),
  Jn = Symbol.for("react.lazy"),
  Gg = Symbol.for("react.offscreen"),
  Xp = Symbol.iterator;
function ys(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xp && e[Xp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Oe = Object.assign,
  hc;
function Ns(e) {
  if (hc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hc = (t && t[1]) || "";
    }
  return (
    `
` +
    hc +
    e
  );
}
var gc = !1;
function yc(e, t) {
  if (!e || gc) return "";
  gc = !0;
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
    (gc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ns(e) : "";
}
function kx(e) {
  switch (e.tag) {
    case 5:
      return Ns(e.type);
    case 16:
      return Ns("Lazy");
    case 13:
      return Ns("Suspense");
    case 19:
      return Ns("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yc(e.type, !1)), e;
    case 11:
      return (e = yc(e.type.render, !1)), e;
    case 1:
      return (e = yc(e.type, !0)), e;
    default:
      return "";
  }
}
function uu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yo:
      return "Fragment";
    case go:
      return "Portal";
    case lu:
      return "Profiler";
    case jd:
      return "StrictMode";
    case au:
      return "Suspense";
    case cu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qg:
        return (e.displayName || "Context") + ".Consumer";
      case Yg:
        return (e._context.displayName || "Context") + ".Provider";
      case Od:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case $d:
        return (
          (t = e.displayName || null), t !== null ? t : uu(e.type) || "Memo"
        );
      case Jn:
        (t = e._payload), (e = e._init);
        try {
          return uu(e(t));
        } catch {}
    }
  return null;
}
function Rx(e) {
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
      return uu(t);
    case 8:
      return t === jd ? "StrictMode" : "Mode";
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
function yr(e) {
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
function Kg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dx(e) {
  var t = Kg(e) ? "checked" : "value",
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
function Oi(e) {
  e._valueTracker || (e._valueTracker = Dx(e));
}
function Xg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Sl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function du(e, t) {
  var n = t.checked;
  return Oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qg(e, t) {
  (t = t.checked), t != null && Td(e, "checked", t, !1);
}
function fu(e, t) {
  Qg(e, t);
  var n = yr(t.value),
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
    ? pu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && pu(e, t.type, yr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zp(e, t, n) {
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
function pu(e, t, n) {
  (t !== "number" || Sl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ts = Array.isArray;
function Po(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return Oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (Ts(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yr(n) };
}
function Zg(e, t) {
  var n = yr(t.value),
    r = yr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function em(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var $i,
  ey = (function (e) {
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
        $i = $i || document.createElement("div"),
          $i.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = $i.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ws(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $s = {
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
  Px = ["Webkit", "ms", "Moz", "O"];
Object.keys($s).forEach(function (e) {
  Px.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($s[t] = $s[e]);
  });
});
function ty(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($s.hasOwnProperty(e) && $s[e])
    ? ("" + t).trim()
    : t + "px";
}
function ny(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ty(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Nx = Oe(
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
function gu(e, t) {
  if (t) {
    if (Nx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function yu(e, t) {
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
var vu = null;
function Ld(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wu = null,
  No = null,
  To = null;
function tm(e) {
  if ((e = yi(e))) {
    if (typeof wu != "function") throw Error(H(280));
    var t = e.stateNode;
    t && ((t = pa(t)), wu(e.stateNode, e.type, t));
  }
}
function ry(e) {
  No ? (To ? To.push(e) : (To = [e])) : (No = e);
}
function oy() {
  if (No) {
    var e = No,
      t = To;
    if (((To = No = null), tm(e), t)) for (e = 0; e < t.length; e++) tm(t[e]);
  }
}
function sy(e, t) {
  return e(t);
}
function iy() {}
var vc = !1;
function ly(e, t, n) {
  if (vc) return e(t, n);
  vc = !0;
  try {
    return sy(e, t, n);
  } finally {
    (vc = !1), (No !== null || To !== null) && (iy(), oy());
  }
}
function Ys(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pa(n);
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
var xu = !1;
if (zn)
  try {
    var vs = {};
    Object.defineProperty(vs, "passive", {
      get: function () {
        xu = !0;
      },
    }),
      window.addEventListener("test", vs, vs),
      window.removeEventListener("test", vs, vs);
  } catch {
    xu = !1;
  }
function Tx(e, t, n, r, o, s, i, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Ls = !1,
  Cl = null,
  El = !1,
  bu = null,
  jx = {
    onError: function (e) {
      (Ls = !0), (Cl = e);
    },
  };
function Ox(e, t, n, r, o, s, i, l, a) {
  (Ls = !1), (Cl = null), Tx.apply(jx, arguments);
}
function $x(e, t, n, r, o, s, i, l, a) {
  if ((Ox.apply(this, arguments), Ls)) {
    if (Ls) {
      var c = Cl;
      (Ls = !1), (Cl = null);
    } else throw Error(H(198));
    El || ((El = !0), (bu = c));
  }
}
function eo(e) {
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
function ay(e) {
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
function nm(e) {
  if (eo(e) !== e) throw Error(H(188));
}
function Lx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = eo(e)), t === null)) throw Error(H(188));
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
        if (s === n) return nm(o), e;
        if (s === r) return nm(o), t;
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
function cy(e) {
  return (e = Lx(e)), e !== null ? uy(e) : null;
}
function uy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dy = Lt.unstable_scheduleCallback,
  rm = Lt.unstable_cancelCallback,
  Ax = Lt.unstable_shouldYield,
  Fx = Lt.unstable_requestPaint,
  ze = Lt.unstable_now,
  Mx = Lt.unstable_getCurrentPriorityLevel,
  Ad = Lt.unstable_ImmediatePriority,
  fy = Lt.unstable_UserBlockingPriority,
  _l = Lt.unstable_NormalPriority,
  Ix = Lt.unstable_LowPriority,
  py = Lt.unstable_IdlePriority,
  ca = null,
  _n = null;
function zx(e) {
  if (_n && typeof _n.onCommitFiberRoot == "function")
    try {
      _n.onCommitFiberRoot(ca, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nn = Math.clz32 ? Math.clz32 : Hx,
  Bx = Math.log,
  Vx = Math.LN2;
function Hx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bx(e) / Vx) | 0)) | 0;
}
var Li = 64,
  Ai = 4194304;
function js(e) {
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
function kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = js(l)) : ((s &= i), s !== 0 && (r = js(s)));
  } else (i = n & ~o), i !== 0 ? (r = js(i)) : s !== 0 && (r = js(s));
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
      (n = 31 - nn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Ux(e, t) {
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
function Wx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - nn(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = Ux(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Su(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function my() {
  var e = Li;
  return (Li <<= 1), !(Li & 4194240) && (Li = 64), e;
}
function wc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nn(t)),
    (e[t] = n);
}
function Yx(e, t) {
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
    var o = 31 - nn(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function Fd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ye = 0;
function hy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gy,
  Md,
  yy,
  vy,
  wy,
  Cu = !1,
  Fi = [],
  ar = null,
  cr = null,
  ur = null,
  qs = new Map(),
  Gs = new Map(),
  nr = [],
  qx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function om(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ar = null;
      break;
    case "dragenter":
    case "dragleave":
      cr = null;
      break;
    case "mouseover":
    case "mouseout":
      ur = null;
      break;
    case "pointerover":
    case "pointerout":
      qs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gs.delete(t.pointerId);
  }
}
function ws(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = yi(t)), t !== null && Md(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Gx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ar = ws(ar, e, t, n, r, o)), !0;
    case "dragenter":
      return (cr = ws(cr, e, t, n, r, o)), !0;
    case "mouseover":
      return (ur = ws(ur, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return qs.set(s, ws(qs.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), Gs.set(s, ws(Gs.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function xy(e) {
  var t = Lr(e.target);
  if (t !== null) {
    var n = eo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ay(n)), t !== null)) {
          (e.blockedOn = t),
            wy(e.priority, function () {
              yy(n);
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
function il(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vu = r), n.target.dispatchEvent(r), (vu = null);
    } else return (t = yi(n)), t !== null && Md(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sm(e, t, n) {
  il(e) && n.delete(t);
}
function Kx() {
  (Cu = !1),
    ar !== null && il(ar) && (ar = null),
    cr !== null && il(cr) && (cr = null),
    ur !== null && il(ur) && (ur = null),
    qs.forEach(sm),
    Gs.forEach(sm);
}
function xs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Cu ||
      ((Cu = !0),
      Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, Kx)));
}
function Ks(e) {
  function t(o) {
    return xs(o, e);
  }
  if (0 < Fi.length) {
    xs(Fi[0], e);
    for (var n = 1; n < Fi.length; n++) {
      var r = Fi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ar !== null && xs(ar, e),
      cr !== null && xs(cr, e),
      ur !== null && xs(ur, e),
      qs.forEach(t),
      Gs.forEach(t),
      n = 0;
    n < nr.length;
    n++
  )
    (r = nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
    xy(n), n.blockedOn === null && nr.shift();
}
var jo = Wn.ReactCurrentBatchConfig,
  Rl = !0;
function Xx(e, t, n, r) {
  var o = ye,
    s = jo.transition;
  jo.transition = null;
  try {
    (ye = 1), Id(e, t, n, r);
  } finally {
    (ye = o), (jo.transition = s);
  }
}
function Qx(e, t, n, r) {
  var o = ye,
    s = jo.transition;
  jo.transition = null;
  try {
    (ye = 4), Id(e, t, n, r);
  } finally {
    (ye = o), (jo.transition = s);
  }
}
function Id(e, t, n, r) {
  if (Rl) {
    var o = Eu(e, t, n, r);
    if (o === null) Pc(e, t, r, Dl, n), om(e, r);
    else if (Gx(o, e, t, n, r)) r.stopPropagation();
    else if ((om(e, r), t & 4 && -1 < qx.indexOf(e))) {
      for (; o !== null; ) {
        var s = yi(o);
        if (
          (s !== null && gy(s),
          (s = Eu(e, t, n, r)),
          s === null && Pc(e, t, r, Dl, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Pc(e, t, r, null, n);
  }
}
var Dl = null;
function Eu(e, t, n, r) {
  if (((Dl = null), (e = Ld(r)), (e = Lr(e)), e !== null))
    if (((t = eo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ay(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Dl = e), null;
}
function by(e) {
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
      switch (Mx()) {
        case Ad:
          return 1;
        case fy:
          return 4;
        case _l:
        case Ix:
          return 16;
        case py:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sr = null,
  zd = null,
  ll = null;
function Sy() {
  if (ll) return ll;
  var e,
    t = zd,
    n = t.length,
    r,
    o = "value" in sr ? sr.value : sr.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (ll = o.slice(e, 1 < r ? 1 - r : void 0));
}
function al(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mi() {
  return !0;
}
function im() {
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
        ? Mi
        : im),
      (this.isPropagationStopped = im),
      this
    );
  }
  return (
    Oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Mi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mi));
      },
      persist: function () {},
      isPersistent: Mi,
    }),
    t
  );
}
var ts = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bd = Ft(ts),
  gi = Oe({}, ts, { view: 0, detail: 0 }),
  Zx = Ft(gi),
  xc,
  bc,
  bs,
  ua = Oe({}, gi, {
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
    getModifierState: Vd,
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
        : (e !== bs &&
            (bs && e.type === "mousemove"
              ? ((xc = e.screenX - bs.screenX), (bc = e.screenY - bs.screenY))
              : (bc = xc = 0),
            (bs = e)),
          xc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bc;
    },
  }),
  lm = Ft(ua),
  Jx = Oe({}, ua, { dataTransfer: 0 }),
  eb = Ft(Jx),
  tb = Oe({}, gi, { relatedTarget: 0 }),
  Sc = Ft(tb),
  nb = Oe({}, ts, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rb = Ft(nb),
  ob = Oe({}, ts, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sb = Ft(ob),
  ib = Oe({}, ts, { data: 0 }),
  am = Ft(ib),
  lb = {
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
  ab = {
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
  cb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ub(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cb[e]) ? !!t[e] : !1;
}
function Vd() {
  return ub;
}
var db = Oe({}, gi, {
    key: function (e) {
      if (e.key) {
        var t = lb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = al(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ab[e.keyCode] || "Unidentified"
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
    getModifierState: Vd,
    charCode: function (e) {
      return e.type === "keypress" ? al(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? al(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fb = Ft(db),
  pb = Oe({}, ua, {
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
  cm = Ft(pb),
  mb = Oe({}, gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vd,
  }),
  hb = Ft(mb),
  gb = Oe({}, ts, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yb = Ft(gb),
  vb = Oe({}, ua, {
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
  wb = Ft(vb),
  xb = [9, 13, 27, 32],
  Hd = zn && "CompositionEvent" in window,
  As = null;
zn && "documentMode" in document && (As = document.documentMode);
var bb = zn && "TextEvent" in window && !As,
  Cy = zn && (!Hd || (As && 8 < As && 11 >= As)),
  um = " ",
  dm = !1;
function Ey(e, t) {
  switch (e) {
    case "keyup":
      return xb.indexOf(t.keyCode) !== -1;
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
function _y(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var vo = !1;
function Sb(e, t) {
  switch (e) {
    case "compositionend":
      return _y(t);
    case "keypress":
      return t.which !== 32 ? null : ((dm = !0), um);
    case "textInput":
      return (e = t.data), e === um && dm ? null : e;
    default:
      return null;
  }
}
function Cb(e, t) {
  if (vo)
    return e === "compositionend" || (!Hd && Ey(e, t))
      ? ((e = Sy()), (ll = zd = sr = null), (vo = !1), e)
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
      return Cy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Eb = {
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
function fm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Eb[e.type] : t === "textarea";
}
function ky(e, t, n, r) {
  ry(r),
    (t = Pl(t, "onChange")),
    0 < t.length &&
      ((n = new Bd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fs = null,
  Xs = null;
function _b(e) {
  Fy(e, 0);
}
function da(e) {
  var t = bo(e);
  if (Xg(t)) return e;
}
function kb(e, t) {
  if (e === "change") return t;
}
var Ry = !1;
if (zn) {
  var Cc;
  if (zn) {
    var Ec = "oninput" in document;
    if (!Ec) {
      var pm = document.createElement("div");
      pm.setAttribute("oninput", "return;"),
        (Ec = typeof pm.oninput == "function");
    }
    Cc = Ec;
  } else Cc = !1;
  Ry = Cc && (!document.documentMode || 9 < document.documentMode);
}
function mm() {
  Fs && (Fs.detachEvent("onpropertychange", Dy), (Xs = Fs = null));
}
function Dy(e) {
  if (e.propertyName === "value" && da(Xs)) {
    var t = [];
    ky(t, Xs, e, Ld(e)), ly(_b, t);
  }
}
function Rb(e, t, n) {
  e === "focusin"
    ? (mm(), (Fs = t), (Xs = n), Fs.attachEvent("onpropertychange", Dy))
    : e === "focusout" && mm();
}
function Db(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return da(Xs);
}
function Pb(e, t) {
  if (e === "click") return da(t);
}
function Nb(e, t) {
  if (e === "input" || e === "change") return da(t);
}
function Tb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sn = typeof Object.is == "function" ? Object.is : Tb;
function Qs(e, t) {
  if (sn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!iu.call(t, o) || !sn(e[o], t[o])) return !1;
  }
  return !0;
}
function hm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gm(e, t) {
  var n = hm(e);
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
    n = hm(n);
  }
}
function Py(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Py(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ny() {
  for (var e = window, t = Sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sl(e.document);
  }
  return t;
}
function Ud(e) {
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
function jb(e) {
  var t = Ny(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Py(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ud(n)) {
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
          (o = gm(n, s));
        var i = gm(n, r);
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
var Ob = zn && "documentMode" in document && 11 >= document.documentMode,
  wo = null,
  _u = null,
  Ms = null,
  ku = !1;
function ym(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ku ||
    wo == null ||
    wo !== Sl(r) ||
    ((r = wo),
    "selectionStart" in r && Ud(r)
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
    (Ms && Qs(Ms, r)) ||
      ((Ms = r),
      (r = Pl(_u, "onSelect")),
      0 < r.length &&
        ((t = new Bd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wo))));
}
function Ii(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xo = {
    animationend: Ii("Animation", "AnimationEnd"),
    animationiteration: Ii("Animation", "AnimationIteration"),
    animationstart: Ii("Animation", "AnimationStart"),
    transitionend: Ii("Transition", "TransitionEnd"),
  },
  _c = {},
  Ty = {};
zn &&
  ((Ty = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xo.animationend.animation,
    delete xo.animationiteration.animation,
    delete xo.animationstart.animation),
  "TransitionEvent" in window || delete xo.transitionend.transition);
function fa(e) {
  if (_c[e]) return _c[e];
  if (!xo[e]) return e;
  var t = xo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ty) return (_c[e] = t[n]);
  return e;
}
var jy = fa("animationend"),
  Oy = fa("animationiteration"),
  $y = fa("animationstart"),
  Ly = fa("transitionend"),
  Ay = new Map(),
  vm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sr(e, t) {
  Ay.set(e, t), Jr(t, [e]);
}
for (var kc = 0; kc < vm.length; kc++) {
  var Rc = vm[kc],
    $b = Rc.toLowerCase(),
    Lb = Rc[0].toUpperCase() + Rc.slice(1);
  Sr($b, "on" + Lb);
}
Sr(jy, "onAnimationEnd");
Sr(Oy, "onAnimationIteration");
Sr($y, "onAnimationStart");
Sr("dblclick", "onDoubleClick");
Sr("focusin", "onFocus");
Sr("focusout", "onBlur");
Sr(Ly, "onTransitionEnd");
Io("onMouseEnter", ["mouseout", "mouseover"]);
Io("onMouseLeave", ["mouseout", "mouseover"]);
Io("onPointerEnter", ["pointerout", "pointerover"]);
Io("onPointerLeave", ["pointerout", "pointerover"]);
Jr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Os =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ab = new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));
function wm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $x(r, t, void 0, e), (e.currentTarget = null);
}
function Fy(e, t) {
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
          wm(o, l, c), (s = a);
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
          wm(o, l, c), (s = a);
        }
    }
  }
  if (El) throw ((e = bu), (El = !1), (bu = null), e);
}
function _e(e, t) {
  var n = t[Tu];
  n === void 0 && (n = t[Tu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (My(t, e, 2, !1), n.add(r));
}
function Dc(e, t, n) {
  var r = 0;
  t && (r |= 4), My(n, e, r, t);
}
var zi = "_reactListening" + Math.random().toString(36).slice(2);
function Zs(e) {
  if (!e[zi]) {
    (e[zi] = !0),
      Wg.forEach(function (n) {
        n !== "selectionchange" && (Ab.has(n) || Dc(n, !1, e), Dc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zi] || ((t[zi] = !0), Dc("selectionchange", !1, t));
  }
}
function My(e, t, n, r) {
  switch (by(t)) {
    case 1:
      var o = Xx;
      break;
    case 4:
      o = Qx;
      break;
    default:
      o = Id;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !xu ||
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
function Pc(e, t, n, r, o) {
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
          if (((i = Lr(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  ly(function () {
    var c = s,
      u = Ld(n),
      d = [];
    e: {
      var f = Ay.get(e);
      if (f !== void 0) {
        var m = Bd,
          p = e;
        switch (e) {
          case "keypress":
            if (al(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = fb;
            break;
          case "focusin":
            (p = "focus"), (m = Sc);
            break;
          case "focusout":
            (p = "blur"), (m = Sc);
            break;
          case "beforeblur":
          case "afterblur":
            m = Sc;
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
            m = lm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = eb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = hb;
            break;
          case jy:
          case Oy:
          case $y:
            m = rb;
            break;
          case Ly:
            m = yb;
            break;
          case "scroll":
            m = Zx;
            break;
          case "wheel":
            m = wb;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = sb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = cm;
        }
        var g = (t & 4) !== 0,
          b = !g && e === "scroll",
          w = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var y = c, v; y !== null; ) {
          v = y;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              w !== null && ((S = Ys(y, w)), S != null && g.push(Js(y, S, v)))),
            b)
          )
            break;
          y = y.return;
        }
        0 < g.length &&
          ((f = new m(f, p, null, n, u)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            n !== vu &&
            (p = n.relatedTarget || n.fromElement) &&
            (Lr(p) || p[Bn]))
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
              (p = p ? Lr(p) : null),
              p !== null &&
                ((b = eo(p)), p !== b || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((m = null), (p = c)),
          m !== p)
        ) {
          if (
            ((g = lm),
            (S = "onMouseLeave"),
            (w = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = cm),
              (S = "onPointerLeave"),
              (w = "onPointerEnter"),
              (y = "pointer")),
            (b = m == null ? f : bo(m)),
            (v = p == null ? f : bo(p)),
            (f = new g(S, y + "leave", m, n, u)),
            (f.target = b),
            (f.relatedTarget = v),
            (S = null),
            Lr(u) === c &&
              ((g = new g(w, y + "enter", p, n, u)),
              (g.target = v),
              (g.relatedTarget = b),
              (S = g)),
            (b = S),
            m && p)
          )
            t: {
              for (g = m, w = p, y = 0, v = g; v; v = co(v)) y++;
              for (v = 0, S = w; S; S = co(S)) v++;
              for (; 0 < y - v; ) (g = co(g)), y--;
              for (; 0 < v - y; ) (w = co(w)), v--;
              for (; y--; ) {
                if (g === w || (w !== null && g === w.alternate)) break t;
                (g = co(g)), (w = co(w));
              }
              g = null;
            }
          else g = null;
          m !== null && xm(d, f, m, g, !1),
            p !== null && b !== null && xm(d, b, p, g, !0);
        }
      }
      e: {
        if (
          ((f = c ? bo(c) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var C = kb;
        else if (fm(f))
          if (Ry) C = Nb;
          else {
            C = Db;
            var E = Rb;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Pb);
        if (C && (C = C(e, c))) {
          ky(d, C, n, u);
          break e;
        }
        E && E(e, f, c),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            pu(f, "number", f.value);
      }
      switch (((E = c ? bo(c) : window), e)) {
        case "focusin":
          (fm(E) || E.contentEditable === "true") &&
            ((wo = E), (_u = c), (Ms = null));
          break;
        case "focusout":
          Ms = _u = wo = null;
          break;
        case "mousedown":
          ku = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ku = !1), ym(d, n, u);
          break;
        case "selectionchange":
          if (Ob) break;
        case "keydown":
        case "keyup":
          ym(d, n, u);
      }
      var k;
      if (Hd)
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
        vo
          ? Ey(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (Cy &&
          n.locale !== "ko" &&
          (vo || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && vo && (k = Sy())
            : ((sr = u),
              (zd = "value" in sr ? sr.value : sr.textContent),
              (vo = !0))),
        (E = Pl(c, D)),
        0 < E.length &&
          ((D = new am(D, e, null, n, u)),
          d.push({ event: D, listeners: E }),
          k ? (D.data = k) : ((k = _y(n)), k !== null && (D.data = k)))),
        (k = bb ? Sb(e, n) : Cb(e, n)) &&
          ((c = Pl(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new am("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = k)));
    }
    Fy(d, t);
  });
}
function Js(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Ys(e, n)),
      s != null && r.unshift(Js(e, s, o)),
      (s = Ys(e, t)),
      s != null && r.push(Js(e, s, o))),
      (e = e.return);
  }
  return r;
}
function co(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xm(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = Ys(n, s)), a != null && i.unshift(Js(n, a, l)))
        : o || ((a = Ys(n, s)), a != null && i.push(Js(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Fb = /\r\n?/g,
  Mb = /\u0000|\uFFFD/g;
function bm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Fb,
      `
`
    )
    .replace(Mb, "");
}
function Bi(e, t, n) {
  if (((t = bm(t)), bm(e) !== t && n)) throw Error(H(425));
}
function Nl() {}
var Ru = null,
  Du = null;
function Pu(e, t) {
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
var Nu = typeof setTimeout == "function" ? setTimeout : void 0,
  Ib = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sm = typeof Promise == "function" ? Promise : void 0,
  zb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sm < "u"
      ? function (e) {
          return Sm.resolve(null).then(e).catch(Bb);
        }
      : Nu;
function Bb(e) {
  setTimeout(function () {
    throw e;
  });
}
function Nc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ks(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ks(t);
}
function dr(e) {
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
function Cm(e) {
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
var ns = Math.random().toString(36).slice(2),
  Cn = "__reactFiber$" + ns,
  ei = "__reactProps$" + ns,
  Bn = "__reactContainer$" + ns,
  Tu = "__reactEvents$" + ns,
  Vb = "__reactListeners$" + ns,
  Hb = "__reactHandles$" + ns;
function Lr(e) {
  var t = e[Cn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bn] || n[Cn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Cm(e); e !== null; ) {
          if ((n = e[Cn])) return n;
          e = Cm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yi(e) {
  return (
    (e = e[Cn] || e[Bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function pa(e) {
  return e[ei] || null;
}
var ju = [],
  So = -1;
function Cr(e) {
  return { current: e };
}
function ke(e) {
  0 > So || ((e.current = ju[So]), (ju[So] = null), So--);
}
function Se(e, t) {
  So++, (ju[So] = e.current), (e.current = t);
}
var vr = {},
  st = Cr(vr),
  Et = Cr(!1),
  Hr = vr;
function zo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vr;
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
function Tl() {
  ke(Et), ke(st);
}
function Em(e, t, n) {
  if (st.current !== vr) throw Error(H(168));
  Se(st, t), Se(Et, n);
}
function Iy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, Rx(e) || "Unknown", o));
  return Oe({}, n, r);
}
function jl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vr),
    (Hr = st.current),
    Se(st, e),
    Se(Et, Et.current),
    !0
  );
}
function _m(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n
    ? ((e = Iy(e, t, Hr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ke(Et),
      ke(st),
      Se(st, e))
    : ke(Et),
    Se(Et, n);
}
var Ln = null,
  ma = !1,
  Tc = !1;
function zy(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function Ub(e) {
  (ma = !0), zy(e);
}
function Er() {
  if (!Tc && Ln !== null) {
    Tc = !0;
    var e = 0,
      t = ye;
    try {
      var n = Ln;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ln = null), (ma = !1);
    } catch (o) {
      throw (Ln !== null && (Ln = Ln.slice(e + 1)), dy(Ad, Er), o);
    } finally {
      (ye = t), (Tc = !1);
    }
  }
  return null;
}
var Co = [],
  Eo = 0,
  Ol = null,
  $l = 0,
  zt = [],
  Bt = 0,
  Ur = null,
  An = 1,
  Fn = "";
function Tr(e, t) {
  (Co[Eo++] = $l), (Co[Eo++] = Ol), (Ol = e), ($l = t);
}
function By(e, t, n) {
  (zt[Bt++] = An), (zt[Bt++] = Fn), (zt[Bt++] = Ur), (Ur = e);
  var r = An;
  e = Fn;
  var o = 32 - nn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - nn(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (An = (1 << (32 - nn(t) + o)) | (n << o) | r),
      (Fn = s + e);
  } else (An = (1 << s) | (n << o) | r), (Fn = e);
}
function Wd(e) {
  e.return !== null && (Tr(e, 1), By(e, 1, 0));
}
function Yd(e) {
  for (; e === Ol; )
    (Ol = Co[--Eo]), (Co[Eo] = null), ($l = Co[--Eo]), (Co[Eo] = null);
  for (; e === Ur; )
    (Ur = zt[--Bt]),
      (zt[Bt] = null),
      (Fn = zt[--Bt]),
      (zt[Bt] = null),
      (An = zt[--Bt]),
      (zt[Bt] = null);
}
var Ot = null,
  jt = null,
  Pe = !1,
  Jt = null;
function Vy(e, t) {
  var n = Vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function km(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ot = e), (jt = dr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (jt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ur !== null ? { id: An, overflow: Fn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ot = e),
            (jt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ou(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $u(e) {
  if (Pe) {
    var t = jt;
    if (t) {
      var n = t;
      if (!km(e, t)) {
        if (Ou(e)) throw Error(H(418));
        t = dr(n.nextSibling);
        var r = Ot;
        t && km(e, t)
          ? Vy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (Ot = e));
      }
    } else {
      if (Ou(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (Pe = !1), (Ot = e);
    }
  }
}
function Rm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ot = e;
}
function Vi(e) {
  if (e !== Ot) return !1;
  if (!Pe) return Rm(e), (Pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Pu(e.type, e.memoizedProps))),
    t && (t = jt))
  ) {
    if (Ou(e)) throw (Hy(), Error(H(418)));
    for (; t; ) Vy(e, t), (t = dr(t.nextSibling));
  }
  if ((Rm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              jt = dr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      jt = null;
    }
  } else jt = Ot ? dr(e.stateNode.nextSibling) : null;
  return !0;
}
function Hy() {
  for (var e = jt; e; ) e = dr(e.nextSibling);
}
function Bo() {
  (jt = Ot = null), (Pe = !1);
}
function qd(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
var Wb = Wn.ReactCurrentBatchConfig;
function Ss(e, t, n) {
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
function Hi(e, t) {
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
function Dm(e) {
  var t = e._init;
  return t(e._payload);
}
function Uy(e) {
  function t(w, y) {
    if (e) {
      var v = w.deletions;
      v === null ? ((w.deletions = [y]), (w.flags |= 16)) : v.push(y);
    }
  }
  function n(w, y) {
    if (!e) return null;
    for (; y !== null; ) t(w, y), (y = y.sibling);
    return null;
  }
  function r(w, y) {
    for (w = new Map(); y !== null; )
      y.key !== null ? w.set(y.key, y) : w.set(y.index, y), (y = y.sibling);
    return w;
  }
  function o(w, y) {
    return (w = hr(w, y)), (w.index = 0), (w.sibling = null), w;
  }
  function s(w, y, v) {
    return (
      (w.index = v),
      e
        ? ((v = w.alternate),
          v !== null
            ? ((v = v.index), v < y ? ((w.flags |= 2), y) : v)
            : ((w.flags |= 2), y))
        : ((w.flags |= 1048576), y)
    );
  }
  function i(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function l(w, y, v, S) {
    return y === null || y.tag !== 6
      ? ((y = Mc(v, w.mode, S)), (y.return = w), y)
      : ((y = o(y, v)), (y.return = w), y);
  }
  function a(w, y, v, S) {
    var C = v.type;
    return C === yo
      ? u(w, y, v.props.children, S, v.key)
      : y !== null &&
        (y.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Jn &&
            Dm(C) === y.type))
      ? ((S = o(y, v.props)), (S.ref = Ss(w, y, v)), (S.return = w), S)
      : ((S = hl(v.type, v.key, v.props, null, w.mode, S)),
        (S.ref = Ss(w, y, v)),
        (S.return = w),
        S);
  }
  function c(w, y, v, S) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== v.containerInfo ||
      y.stateNode.implementation !== v.implementation
      ? ((y = Ic(v, w.mode, S)), (y.return = w), y)
      : ((y = o(y, v.children || [])), (y.return = w), y);
  }
  function u(w, y, v, S, C) {
    return y === null || y.tag !== 7
      ? ((y = Ir(v, w.mode, S, C)), (y.return = w), y)
      : ((y = o(y, v)), (y.return = w), y);
  }
  function d(w, y, v) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Mc("" + y, w.mode, v)), (y.return = w), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ji:
          return (
            (v = hl(y.type, y.key, y.props, null, w.mode, v)),
            (v.ref = Ss(w, null, y)),
            (v.return = w),
            v
          );
        case go:
          return (y = Ic(y, w.mode, v)), (y.return = w), y;
        case Jn:
          var S = y._init;
          return d(w, S(y._payload), v);
      }
      if (Ts(y) || ys(y))
        return (y = Ir(y, w.mode, v, null)), (y.return = w), y;
      Hi(w, y);
    }
    return null;
  }
  function f(w, y, v, S) {
    var C = y !== null ? y.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : l(w, y, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ji:
          return v.key === C ? a(w, y, v, S) : null;
        case go:
          return v.key === C ? c(w, y, v, S) : null;
        case Jn:
          return (C = v._init), f(w, y, C(v._payload), S);
      }
      if (Ts(v) || ys(v)) return C !== null ? null : u(w, y, v, S, null);
      Hi(w, v);
    }
    return null;
  }
  function m(w, y, v, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (w = w.get(v) || null), l(y, w, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ji:
          return (w = w.get(S.key === null ? v : S.key) || null), a(y, w, S, C);
        case go:
          return (w = w.get(S.key === null ? v : S.key) || null), c(y, w, S, C);
        case Jn:
          var E = S._init;
          return m(w, y, v, E(S._payload), C);
      }
      if (Ts(S) || ys(S)) return (w = w.get(v) || null), u(y, w, S, C, null);
      Hi(y, S);
    }
    return null;
  }
  function p(w, y, v, S) {
    for (
      var C = null, E = null, k = y, D = (y = 0), L = null;
      k !== null && D < v.length;
      D++
    ) {
      k.index > D ? ((L = k), (k = null)) : (L = k.sibling);
      var N = f(w, k, v[D], S);
      if (N === null) {
        k === null && (k = L);
        break;
      }
      e && k && N.alternate === null && t(w, k),
        (y = s(N, y, D)),
        E === null ? (C = N) : (E.sibling = N),
        (E = N),
        (k = L);
    }
    if (D === v.length) return n(w, k), Pe && Tr(w, D), C;
    if (k === null) {
      for (; D < v.length; D++)
        (k = d(w, v[D], S)),
          k !== null &&
            ((y = s(k, y, D)), E === null ? (C = k) : (E.sibling = k), (E = k));
      return Pe && Tr(w, D), C;
    }
    for (k = r(w, k); D < v.length; D++)
      (L = m(k, w, D, v[D], S)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? D : L.key),
          (y = s(L, y, D)),
          E === null ? (C = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        k.forEach(function (F) {
          return t(w, F);
        }),
      Pe && Tr(w, D),
      C
    );
  }
  function g(w, y, v, S) {
    var C = ys(v);
    if (typeof C != "function") throw Error(H(150));
    if (((v = C.call(v)), v == null)) throw Error(H(151));
    for (
      var E = (C = null), k = y, D = (y = 0), L = null, N = v.next();
      k !== null && !N.done;
      D++, N = v.next()
    ) {
      k.index > D ? ((L = k), (k = null)) : (L = k.sibling);
      var F = f(w, k, N.value, S);
      if (F === null) {
        k === null && (k = L);
        break;
      }
      e && k && F.alternate === null && t(w, k),
        (y = s(F, y, D)),
        E === null ? (C = F) : (E.sibling = F),
        (E = F),
        (k = L);
    }
    if (N.done) return n(w, k), Pe && Tr(w, D), C;
    if (k === null) {
      for (; !N.done; D++, N = v.next())
        (N = d(w, N.value, S)),
          N !== null &&
            ((y = s(N, y, D)), E === null ? (C = N) : (E.sibling = N), (E = N));
      return Pe && Tr(w, D), C;
    }
    for (k = r(w, k); !N.done; D++, N = v.next())
      (N = m(k, w, D, N.value, S)),
        N !== null &&
          (e && N.alternate !== null && k.delete(N.key === null ? D : N.key),
          (y = s(N, y, D)),
          E === null ? (C = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        k.forEach(function (B) {
          return t(w, B);
        }),
      Pe && Tr(w, D),
      C
    );
  }
  function b(w, y, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === yo &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ji:
          e: {
            for (var C = v.key, E = y; E !== null; ) {
              if (E.key === C) {
                if (((C = v.type), C === yo)) {
                  if (E.tag === 7) {
                    n(w, E.sibling),
                      (y = o(E, v.props.children)),
                      (y.return = w),
                      (w = y);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Jn &&
                    Dm(C) === E.type)
                ) {
                  n(w, E.sibling),
                    (y = o(E, v.props)),
                    (y.ref = Ss(w, E, v)),
                    (y.return = w),
                    (w = y);
                  break e;
                }
                n(w, E);
                break;
              } else t(w, E);
              E = E.sibling;
            }
            v.type === yo
              ? ((y = Ir(v.props.children, w.mode, S, v.key)),
                (y.return = w),
                (w = y))
              : ((S = hl(v.type, v.key, v.props, null, w.mode, S)),
                (S.ref = Ss(w, y, v)),
                (S.return = w),
                (w = S));
          }
          return i(w);
        case go:
          e: {
            for (E = v.key; y !== null; ) {
              if (y.key === E)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === v.containerInfo &&
                  y.stateNode.implementation === v.implementation
                ) {
                  n(w, y.sibling),
                    (y = o(y, v.children || [])),
                    (y.return = w),
                    (w = y);
                  break e;
                } else {
                  n(w, y);
                  break;
                }
              else t(w, y);
              y = y.sibling;
            }
            (y = Ic(v, w.mode, S)), (y.return = w), (w = y);
          }
          return i(w);
        case Jn:
          return (E = v._init), b(w, y, E(v._payload), S);
      }
      if (Ts(v)) return p(w, y, v, S);
      if (ys(v)) return g(w, y, v, S);
      Hi(w, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        y !== null && y.tag === 6
          ? (n(w, y.sibling), (y = o(y, v)), (y.return = w), (w = y))
          : (n(w, y), (y = Mc(v, w.mode, S)), (y.return = w), (w = y)),
        i(w))
      : n(w, y);
  }
  return b;
}
var Vo = Uy(!0),
  Wy = Uy(!1),
  Ll = Cr(null),
  Al = null,
  _o = null,
  Gd = null;
function Kd() {
  Gd = _o = Al = null;
}
function Xd(e) {
  var t = Ll.current;
  ke(Ll), (e._currentValue = t);
}
function Lu(e, t, n) {
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
function Oo(e, t) {
  (Al = e),
    (Gd = _o = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (bt = !0), (e.firstContext = null));
}
function Wt(e) {
  var t = e._currentValue;
  if (Gd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _o === null)) {
      if (Al === null) throw Error(H(308));
      (_o = e), (Al.dependencies = { lanes: 0, firstContext: e });
    } else _o = _o.next = e;
  return t;
}
var Ar = null;
function Qd(e) {
  Ar === null ? (Ar = [e]) : Ar.push(e);
}
function Yy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Qd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Vn(e, r)
  );
}
function Vn(e, t) {
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
var er = !1;
function Zd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qy(e, t) {
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
function Mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Vn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Qd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Vn(e, n)
  );
}
function cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fd(e, n);
  }
}
function Pm(e, t) {
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
function Fl(e, t, n, r) {
  var o = e.updateQueue;
  er = !1;
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
            g = l;
          switch (((f = t), (m = n), g.tag)) {
            case 1:
              if (((p = g.payload), typeof p == "function")) {
                d = p.call(m, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = g.payload),
                (f = typeof p == "function" ? p.call(m, d, f) : p),
                f == null)
              )
                break e;
              d = Oe({}, d, f);
              break e;
            case 2:
              er = !0;
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
    (Yr |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Nm(e, t, n) {
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
var vi = {},
  kn = Cr(vi),
  ti = Cr(vi),
  ni = Cr(vi);
function Fr(e) {
  if (e === vi) throw Error(H(174));
  return e;
}
function Jd(e, t) {
  switch ((Se(ni, t), Se(ti, e), Se(kn, vi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hu(t, e));
  }
  ke(kn), Se(kn, t);
}
function Ho() {
  ke(kn), ke(ti), ke(ni);
}
function Gy(e) {
  Fr(ni.current);
  var t = Fr(kn.current),
    n = hu(t, e.type);
  t !== n && (Se(ti, e), Se(kn, n));
}
function ef(e) {
  ti.current === e && (ke(kn), ke(ti));
}
var Te = Cr(0);
function Ml(e) {
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
var jc = [];
function tf() {
  for (var e = 0; e < jc.length; e++)
    jc[e]._workInProgressVersionPrimary = null;
  jc.length = 0;
}
var ul = Wn.ReactCurrentDispatcher,
  Oc = Wn.ReactCurrentBatchConfig,
  Wr = 0,
  je = null,
  He = null,
  Ye = null,
  Il = !1,
  Is = !1,
  ri = 0,
  Yb = 0;
function tt() {
  throw Error(H(321));
}
function nf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!sn(e[n], t[n])) return !1;
  return !0;
}
function rf(e, t, n, r, o, s) {
  if (
    ((Wr = s),
    (je = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ul.current = e === null || e.memoizedState === null ? Xb : Qb),
    (e = n(r, o)),
    Is)
  ) {
    s = 0;
    do {
      if (((Is = !1), (ri = 0), 25 <= s)) throw Error(H(301));
      (s += 1),
        (Ye = He = null),
        (t.updateQueue = null),
        (ul.current = Zb),
        (e = n(r, o));
    } while (Is);
  }
  if (
    ((ul.current = zl),
    (t = He !== null && He.next !== null),
    (Wr = 0),
    (Ye = He = je = null),
    (Il = !1),
    t)
  )
    throw Error(H(300));
  return e;
}
function of() {
  var e = ri !== 0;
  return (ri = 0), e;
}
function bn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ye === null ? (je.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
}
function Yt() {
  if (He === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = He.next;
  var t = Ye === null ? je.memoizedState : Ye.next;
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
      Ye === null ? (je.memoizedState = Ye = e) : (Ye = Ye.next = e);
  }
  return Ye;
}
function oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $c(e) {
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
          (je.lanes |= u),
          (Yr |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? (i = r) : (a.next = l),
      sn(r, t.memoizedState) || (bt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (je.lanes |= s), (Yr |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Lc(e) {
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
    sn(s, t.memoizedState) || (bt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Ky() {}
function Xy(e, t) {
  var n = je,
    r = Yt(),
    o = t(),
    s = !sn(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (bt = !0)),
    (r = r.queue),
    sf(Jy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ye !== null && Ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      si(9, Zy.bind(null, n, r, o, t), void 0, null),
      qe === null)
    )
      throw Error(H(349));
    Wr & 30 || Qy(n, t, o);
  }
  return o;
}
function Qy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (je.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ev(t) && tv(e);
}
function Jy(e, t, n) {
  return n(function () {
    ev(t) && tv(e);
  });
}
function ev(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sn(e, n);
  } catch {
    return !0;
  }
}
function tv(e) {
  var t = Vn(e, 1);
  t !== null && rn(t, e, 1, -1);
}
function Tm(e) {
  var t = bn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kb.bind(null, je, e)),
    [t.memoizedState, e]
  );
}
function si(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (je.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nv() {
  return Yt().memoizedState;
}
function dl(e, t, n, r) {
  var o = bn();
  (je.flags |= e),
    (o.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r));
}
function ha(e, t, n, r) {
  var o = Yt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (He !== null) {
    var i = He.memoizedState;
    if (((s = i.destroy), r !== null && nf(r, i.deps))) {
      o.memoizedState = si(t, n, s, r);
      return;
    }
  }
  (je.flags |= e), (o.memoizedState = si(1 | t, n, s, r));
}
function jm(e, t) {
  return dl(8390656, 8, e, t);
}
function sf(e, t) {
  return ha(2048, 8, e, t);
}
function rv(e, t) {
  return ha(4, 2, e, t);
}
function ov(e, t) {
  return ha(4, 4, e, t);
}
function sv(e, t) {
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
function iv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ha(4, 4, sv.bind(null, t, e), n)
  );
}
function lf() {}
function lv(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function av(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cv(e, t, n) {
  return Wr & 21
    ? (sn(n, t) || ((n = my()), (je.lanes |= n), (Yr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (bt = !0)), (e.memoizedState = n));
}
function qb(e, t) {
  var n = ye;
  (ye = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Oc.transition;
  Oc.transition = {};
  try {
    e(!1), t();
  } finally {
    (ye = n), (Oc.transition = r);
  }
}
function uv() {
  return Yt().memoizedState;
}
function Gb(e, t, n) {
  var r = mr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dv(e))
  )
    fv(t, n);
  else if (((n = Yy(e, t, n, r)), n !== null)) {
    var o = dt();
    rn(n, e, r, o), pv(n, t, r);
  }
}
function Kb(e, t, n) {
  var r = mr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dv(e)) fv(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = l), sn(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Qd(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yy(e, t, o, r)),
      n !== null && ((o = dt()), rn(n, e, r, o), pv(n, t, r));
  }
}
function dv(e) {
  var t = e.alternate;
  return e === je || (t !== null && t === je);
}
function fv(e, t) {
  Is = Il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fd(e, n);
  }
}
var zl = {
    readContext: Wt,
    useCallback: tt,
    useContext: tt,
    useEffect: tt,
    useImperativeHandle: tt,
    useInsertionEffect: tt,
    useLayoutEffect: tt,
    useMemo: tt,
    useReducer: tt,
    useRef: tt,
    useState: tt,
    useDebugValue: tt,
    useDeferredValue: tt,
    useTransition: tt,
    useMutableSource: tt,
    useSyncExternalStore: tt,
    useId: tt,
    unstable_isNewReconciler: !1,
  },
  Xb = {
    readContext: Wt,
    useCallback: function (e, t) {
      return (bn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Wt,
    useEffect: jm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        dl(4194308, 4, sv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return dl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return dl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bn();
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
        (e = e.dispatch = Gb.bind(null, je, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Tm,
    useDebugValue: lf,
    useDeferredValue: function (e) {
      return (bn().memoizedState = e);
    },
    useTransition: function () {
      var e = Tm(!1),
        t = e[0];
      return (e = qb.bind(null, e[1])), (bn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = je,
        o = bn();
      if (Pe) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), qe === null)) throw Error(H(349));
        Wr & 30 || Qy(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        jm(Jy.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        si(9, Zy.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bn(),
        t = qe.identifierPrefix;
      if (Pe) {
        var n = Fn,
          r = An;
        (n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ri++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Yb++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qb = {
    readContext: Wt,
    useCallback: lv,
    useContext: Wt,
    useEffect: sf,
    useImperativeHandle: iv,
    useInsertionEffect: rv,
    useLayoutEffect: ov,
    useMemo: av,
    useReducer: $c,
    useRef: nv,
    useState: function () {
      return $c(oi);
    },
    useDebugValue: lf,
    useDeferredValue: function (e) {
      var t = Yt();
      return cv(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = $c(oi)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ky,
    useSyncExternalStore: Xy,
    useId: uv,
    unstable_isNewReconciler: !1,
  },
  Zb = {
    readContext: Wt,
    useCallback: lv,
    useContext: Wt,
    useEffect: sf,
    useImperativeHandle: iv,
    useInsertionEffect: rv,
    useLayoutEffect: ov,
    useMemo: av,
    useReducer: Lc,
    useRef: nv,
    useState: function () {
      return Lc(oi);
    },
    useDebugValue: lf,
    useDeferredValue: function (e) {
      var t = Yt();
      return He === null ? (t.memoizedState = e) : cv(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = Lc(oi)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ky,
    useSyncExternalStore: Xy,
    useId: uv,
    unstable_isNewReconciler: !1,
  };
function Qt(e, t) {
  if (e && e.defaultProps) {
    (t = Oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Au(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ga = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? eo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      o = mr(e),
      s = Mn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = fr(e, s, o)),
      t !== null && (rn(t, e, o, r), cl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      o = mr(e),
      s = Mn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = fr(e, s, o)),
      t !== null && (rn(t, e, o, r), cl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = dt(),
      r = mr(e),
      o = Mn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = fr(e, o, r)),
      t !== null && (rn(t, e, r, n), cl(t, e, r));
  },
};
function Om(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qs(n, r) || !Qs(o, s)
      : !0
  );
}
function mv(e, t, n) {
  var r = !1,
    o = vr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Wt(s))
      : ((o = _t(t) ? Hr : st.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? zo(e, o) : vr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ga),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function $m(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ga.enqueueReplaceState(t, t.state, null);
}
function Fu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Zd(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = Wt(s))
    : ((s = _t(t) ? Hr : st.current), (o.context = zo(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Au(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ga.enqueueReplaceState(o, o.state, null),
      Fl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Uo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += kx(r)), (r = r.return);
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
function Ac(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jb = typeof WeakMap == "function" ? WeakMap : Map;
function hv(e, t, n) {
  (n = Mn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vl || ((Vl = !0), (Gu = r)), Mu(e, t);
    }),
    n
  );
}
function gv(e, t, n) {
  (n = Mn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Mu(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Mu(e, t),
          typeof r != "function" &&
            (pr === null ? (pr = new Set([this])) : pr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Lm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jb();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = pS.bind(null, e, t, n)), t.then(e, e));
}
function Am(e) {
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
function Fm(e, t, n, r, o) {
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
              : ((t = Mn(-1, 1)), (t.tag = 2), fr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var eS = Wn.ReactCurrentOwner,
  bt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? Wy(t, null, n, r) : Vo(t, e.child, n, r);
}
function Mm(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Oo(t, o),
    (r = rf(e, t, n, r, s, o)),
    (n = of()),
    e !== null && !bt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Hn(e, t, o))
      : (Pe && n && Wd(t), (t.flags |= 1), ct(e, t, r, o), t.child)
  );
}
function Im(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !hf(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), yv(e, t, s, r, o))
      : ((e = hl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qs), n(i, r) && e.ref === t.ref)
    )
      return Hn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = hr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yv(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Qs(s, r) && e.ref === t.ref)
      if (((bt = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (bt = !0);
      else return (t.lanes = e.lanes), Hn(e, t, o);
  }
  return Iu(e, t, n, r, o);
}
function vv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Se(Ro, Tt),
        (Tt |= n);
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
          Se(Ro, Tt),
          (Tt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Se(Ro, Tt),
        (Tt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Se(Ro, Tt),
      (Tt |= r);
  return ct(e, t, o, n), t.child;
}
function wv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Iu(e, t, n, r, o) {
  var s = _t(n) ? Hr : st.current;
  return (
    (s = zo(t, s)),
    Oo(t, o),
    (n = rf(e, t, n, r, s, o)),
    (r = of()),
    e !== null && !bt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Hn(e, t, o))
      : (Pe && r && Wd(t), (t.flags |= 1), ct(e, t, n, o), t.child)
  );
}
function zm(e, t, n, r, o) {
  if (_t(n)) {
    var s = !0;
    jl(t);
  } else s = !1;
  if ((Oo(t, o), t.stateNode === null))
    fl(e, t), mv(t, n, r), Fu(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Wt(c))
      : ((c = _t(n) ? Hr : st.current), (c = zo(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && $m(t, i, r, c)),
      (er = !1);
    var f = t.memoizedState;
    (i.state = f),
      Fl(t, r, i, o),
      (a = t.memoizedState),
      l !== r || f !== a || Et.current || er
        ? (typeof u == "function" && (Au(t, n, u, r), (a = t.memoizedState)),
          (l = er || Om(t, n, l, r, f, a, c))
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
      qy(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Qt(t.type, l)),
      (i.props = c),
      (d = t.pendingProps),
      (f = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Wt(a))
        : ((a = _t(n) ? Hr : st.current), (a = zo(t, a)));
    var m = n.getDerivedStateFromProps;
    (u =
      typeof m == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && $m(t, i, r, a)),
      (er = !1),
      (f = t.memoizedState),
      (i.state = f),
      Fl(t, r, i, o);
    var p = t.memoizedState;
    l !== d || f !== p || Et.current || er
      ? (typeof m == "function" && (Au(t, n, m, r), (p = t.memoizedState)),
        (c = er || Om(t, n, c, r, f, p, a) || !1)
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
  return zu(e, t, n, r, s, o);
}
function zu(e, t, n, r, o, s) {
  wv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && _m(t, n, !1), Hn(e, t, s);
  (r = t.stateNode), (eS.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Vo(t, e.child, null, s)), (t.child = Vo(t, null, l, s)))
      : ct(e, t, l, s),
    (t.memoizedState = r.state),
    o && _m(t, n, !0),
    t.child
  );
}
function xv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Em(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Em(e, t.context, !1),
    Jd(e, t.containerInfo);
}
function Bm(e, t, n, r, o) {
  return Bo(), qd(o), (t.flags |= 256), ct(e, t, n, r), t.child;
}
var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bv(e, t, n) {
  var r = t.pendingProps,
    o = Te.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Se(Te, o & 1),
    e === null)
  )
    return (
      $u(t),
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
                : (s = wa(i, r, 0, null)),
              (e = Ir(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Vu(n)),
              (t.memoizedState = Bu),
              e)
            : af(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return tS(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = hr(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = hr(l, s)) : ((s = Ir(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Vu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bu),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = hr(s, { mode: "visible", children: r.children })),
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
function af(e, t) {
  return (
    (t = wa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ui(e, t, n, r) {
  return (
    r !== null && qd(r),
    Vo(t, e.child, null, n),
    (e = af(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ac(Error(H(422)))), Ui(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = wa({ mode: "visible", children: r.children }, o, 0, null)),
        (s = Ir(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Vo(t, e.child, null, i),
        (t.child.memoizedState = Vu(i)),
        (t.memoizedState = Bu),
        s);
  if (!(t.mode & 1)) return Ui(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(H(419))), (r = Ac(s, r, void 0)), Ui(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), bt || l)) {
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
          ((s.retryLane = o), Vn(e, o), rn(r, e, o, -1));
    }
    return mf(), (r = Ac(Error(H(421)))), Ui(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (jt = dr(o.nextSibling)),
      (Ot = t),
      (Pe = !0),
      (Jt = null),
      e !== null &&
        ((zt[Bt++] = An),
        (zt[Bt++] = Fn),
        (zt[Bt++] = Ur),
        (An = e.id),
        (Fn = e.overflow),
        (Ur = t)),
      (t = af(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Lu(e.return, t, n);
}
function Fc(e, t, n, r, o) {
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
function Sv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((ct(e, t, r.children, n), (r = Te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vm(e, n, t);
        else if (e.tag === 19) Vm(e, n, t);
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
  if ((Se(Te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ml(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fc(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ml(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Fc(t, !0, n, null, s);
        break;
      case "together":
        Fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Hn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nS(e, t, n) {
  switch (t.tag) {
    case 3:
      xv(t), Bo();
      break;
    case 5:
      Gy(t);
      break;
    case 1:
      _t(t.type) && jl(t);
      break;
    case 4:
      Jd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Se(Ll, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Se(Te, Te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bv(e, t, n)
          : (Se(Te, Te.current & 1),
            (e = Hn(e, t, n)),
            e !== null ? e.sibling : null);
      Se(Te, Te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Se(Te, Te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vv(e, t, n);
  }
  return Hn(e, t, n);
}
var Cv, Hu, Ev, _v;
Cv = function (e, t) {
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
Hu = function () {};
Ev = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fr(kn.current);
    var s = null;
    switch (n) {
      case "input":
        (o = du(e, o)), (r = du(e, r)), (s = []);
        break;
      case "select":
        (o = Oe({}, o, { value: void 0 })),
          (r = Oe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = mu(e, o)), (r = mu(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Nl);
    }
    gu(n, r);
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
            (Us.hasOwnProperty(c)
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
              (Us.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && _e("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
_v = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cs(e, t) {
  if (!Pe)
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
function nt(e) {
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
function rS(e, t, n) {
  var r = t.pendingProps;
  switch ((Yd(t), t.tag)) {
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
      return nt(t), null;
    case 1:
      return _t(t.type) && Tl(), nt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ho(),
        ke(Et),
        ke(st),
        tf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Jt !== null && (Qu(Jt), (Jt = null)))),
        Hu(e, t),
        nt(t),
        null
      );
    case 5:
      ef(t);
      var o = Fr(ni.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ev(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return nt(t), null;
        }
        if (((e = Fr(kn.current)), Vi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Cn] = t), (r[ei] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              _e("cancel", r), _e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              _e("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Os.length; o++) _e(Os[o], r);
              break;
            case "source":
              _e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              _e("error", r), _e("load", r);
              break;
            case "details":
              _e("toggle", r);
              break;
            case "input":
              Qp(r, s), _e("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                _e("invalid", r);
              break;
            case "textarea":
              Jp(r, s), _e("invalid", r);
          }
          gu(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Bi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Bi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Us.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  _e("scroll", r);
            }
          switch (n) {
            case "input":
              Oi(r), Zp(r, s, !0);
              break;
            case "textarea":
              Oi(r), em(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Nl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jg(n)),
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
            (e[Cn] = t),
            (e[ei] = r),
            Cv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = yu(n, r)), n)) {
              case "dialog":
                _e("cancel", e), _e("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Os.length; o++) _e(Os[o], e);
                o = r;
                break;
              case "source":
                _e("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                _e("error", e), _e("load", e), (o = r);
                break;
              case "details":
                _e("toggle", e), (o = r);
                break;
              case "input":
                Qp(e, r), (o = du(e, r)), _e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Oe({}, r, { value: void 0 })),
                  _e("invalid", e);
                break;
              case "textarea":
                Jp(e, r), (o = mu(e, r)), _e("invalid", e);
                break;
              default:
                o = r;
            }
            gu(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? ny(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ey(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ws(e, a)
                    : typeof a == "number" && Ws(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Us.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && _e("scroll", e)
                      : a != null && Td(e, s, a, i));
              }
            switch (n) {
              case "input":
                Oi(e), Zp(e, r, !1);
                break;
              case "textarea":
                Oi(e), em(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Po(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Po(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Nl);
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
      return nt(t), null;
    case 6:
      if (e && t.stateNode != null) _v(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (((n = Fr(ni.current)), Fr(kn.current), Vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Cn] = t),
            (s = r.nodeValue !== n) && ((e = Ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Cn] = t),
            (t.stateNode = r);
      }
      return nt(t), null;
    case 13:
      if (
        (ke(Te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Pe && jt !== null && t.mode & 1 && !(t.flags & 128))
          Hy(), Bo(), (t.flags |= 98560), (s = !1);
        else if (((s = Vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(H(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(H(317));
            s[Cn] = t;
          } else
            Bo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          nt(t), (s = !1);
        } else Jt !== null && (Qu(Jt), (Jt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Te.current & 1 ? Ue === 0 && (Ue = 3) : mf())),
          t.updateQueue !== null && (t.flags |= 4),
          nt(t),
          null);
    case 4:
      return (
        Ho(), Hu(e, t), e === null && Zs(t.stateNode.containerInfo), nt(t), null
      );
    case 10:
      return Xd(t.type._context), nt(t), null;
    case 17:
      return _t(t.type) && Tl(), nt(t), null;
    case 19:
      if ((ke(Te), (s = t.memoizedState), s === null)) return nt(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Cs(s, !1);
        else {
          if (Ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ml(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Cs(s, !1),
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
                return Se(Te, (Te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ze() > Wo &&
            ((t.flags |= 128), (r = !0), Cs(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ml(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !Pe)
            )
              return nt(t), null;
          } else
            2 * ze() - s.renderingStartTime > Wo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cs(s, !1), (t.lanes = 4194304));
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
          (n = Te.current),
          Se(Te, r ? (n & 1) | 2 : n & 1),
          t)
        : (nt(t), null);
    case 22:
    case 23:
      return (
        pf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Tt & 1073741824 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : nt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function oS(e, t) {
  switch ((Yd(t), t.tag)) {
    case 1:
      return (
        _t(t.type) && Tl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ho(),
        ke(Et),
        ke(st),
        tf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ef(t), null;
    case 13:
      if (
        (ke(Te), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340));
        Bo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ke(Te), null;
    case 4:
      return Ho(), null;
    case 10:
      return Xd(t.type._context), null;
    case 22:
    case 23:
      return pf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wi = !1,
  rt = !1,
  sS = typeof WeakSet == "function" ? WeakSet : Set,
  X = null;
function ko(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Me(e, t, r);
      }
    else n.current = null;
}
function Uu(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var Hm = !1;
function iS(e, t) {
  if (((Ru = Rl), (e = Ny()), Ud(e))) {
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
  for (Du = { focusedElem: e, selectionRange: n }, Rl = !1, X = t; X !== null; )
    if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (X = e);
    else
      for (; X !== null; ) {
        t = X;
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
                  var g = p.memoizedProps,
                    b = p.memoizedState,
                    w = t.stateNode,
                    y = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Qt(t.type, g),
                      b
                    );
                  w.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
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
          Me(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (X = e);
          break;
        }
        X = t.return;
      }
  return (p = Hm), (Hm = !1), p;
}
function zs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Uu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ya(e, t) {
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
function Wu(e) {
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
function kv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Cn], delete t[ei], delete t[Tu], delete t[Vb], delete t[Hb])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Um(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rv(e.return)) return null;
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
function Yu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Nl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yu(e, t, n), e = e.sibling; e !== null; ) Yu(e, t, n), (e = e.sibling);
}
function qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null; ) qu(e, t, n), (e = e.sibling);
}
var Qe = null,
  Zt = !1;
function Qn(e, t, n) {
  for (n = n.child; n !== null; ) Dv(e, t, n), (n = n.sibling);
}
function Dv(e, t, n) {
  if (_n && typeof _n.onCommitFiberUnmount == "function")
    try {
      _n.onCommitFiberUnmount(ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      rt || ko(n, t);
    case 6:
      var r = Qe,
        o = Zt;
      (Qe = null),
        Qn(e, t, n),
        (Qe = r),
        (Zt = o),
        Qe !== null &&
          (Zt
            ? ((e = Qe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Qe.removeChild(n.stateNode));
      break;
    case 18:
      Qe !== null &&
        (Zt
          ? ((e = Qe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Nc(e.parentNode, n)
              : e.nodeType === 1 && Nc(e, n),
            Ks(e))
          : Nc(Qe, n.stateNode));
      break;
    case 4:
      (r = Qe),
        (o = Zt),
        (Qe = n.stateNode.containerInfo),
        (Zt = !0),
        Qn(e, t, n),
        (Qe = r),
        (Zt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !rt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Uu(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Qn(e, t, n);
      break;
    case 1:
      if (
        !rt &&
        (ko(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Me(n, t, l);
        }
      Qn(e, t, n);
      break;
    case 21:
      Qn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((rt = (r = rt) || n.memoizedState !== null), Qn(e, t, n), (rt = r))
        : Qn(e, t, n);
      break;
    default:
      Qn(e, t, n);
  }
}
function Wm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sS()),
      t.forEach(function (r) {
        var o = hS.bind(null, e, r);
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
              (Qe = l.stateNode), (Zt = !1);
              break e;
            case 3:
              (Qe = l.stateNode.containerInfo), (Zt = !0);
              break e;
            case 4:
              (Qe = l.stateNode.containerInfo), (Zt = !0);
              break e;
          }
          l = l.return;
        }
        if (Qe === null) throw Error(H(160));
        Dv(s, i, o), (Qe = null), (Zt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        Me(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pv(t, e), (t = t.sibling);
}
function Pv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xt(t, e), wn(e), r & 4)) {
        try {
          zs(3, e, e.return), ya(3, e);
        } catch (g) {
          Me(e, e.return, g);
        }
        try {
          zs(5, e, e.return);
        } catch (g) {
          Me(e, e.return, g);
        }
      }
      break;
    case 1:
      Xt(t, e), wn(e), r & 512 && n !== null && ko(n, n.return);
      break;
    case 5:
      if (
        (Xt(t, e),
        wn(e),
        r & 512 && n !== null && ko(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ws(o, "");
        } catch (g) {
          Me(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Qg(o, s),
              yu(l, i);
            var c = yu(l, s);
            for (i = 0; i < a.length; i += 2) {
              var u = a[i],
                d = a[i + 1];
              u === "style"
                ? ny(o, d)
                : u === "dangerouslySetInnerHTML"
                ? ey(o, d)
                : u === "children"
                ? Ws(o, d)
                : Td(o, u, d, c);
            }
            switch (l) {
              case "input":
                fu(o, s);
                break;
              case "textarea":
                Zg(o, s);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Po(o, !!s.multiple, m, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Po(o, !!s.multiple, s.defaultValue, !0)
                      : Po(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[ei] = s;
          } catch (g) {
            Me(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Xt(t, e), wn(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (g) {
          Me(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Xt(t, e), wn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ks(t.containerInfo);
        } catch (g) {
          Me(e, e.return, g);
        }
      break;
    case 4:
      Xt(t, e), wn(e);
      break;
    case 13:
      Xt(t, e),
        wn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (df = ze())),
        r & 4 && Wm(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((rt = (c = rt) || u), Xt(t, e), (rt = c)) : Xt(t, e),
        wn(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (X = e, u = e.child; u !== null; ) {
            for (d = X = u; X !== null; ) {
              switch (((f = X), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zs(4, f, f.return);
                  break;
                case 1:
                  ko(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      Me(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ko(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    qm(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (X = m)) : qm(d);
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
                      (l.style.display = ty("display", i)));
              } catch (g) {
                Me(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (g) {
                Me(e, e.return, g);
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
      Xt(t, e), wn(e), r & 4 && Wm(e);
      break;
    case 21:
      break;
    default:
      Xt(t, e), wn(e);
  }
}
function wn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rv(n)) {
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
          r.flags & 32 && (Ws(o, ""), (r.flags &= -33));
          var s = Um(e);
          qu(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Um(e);
          Yu(e, l, i);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      Me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lS(e, t, n) {
  (X = e), Nv(e);
}
function Nv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var o = X,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Wi;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || rt;
        l = Wi;
        var c = rt;
        if (((Wi = i), (rt = a) && !c))
          for (X = o; X !== null; )
            (i = X),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Gm(o)
                : a !== null
                ? ((a.return = i), (X = a))
                : Gm(o);
        for (; s !== null; ) (X = s), Nv(s), (s = s.sibling);
        (X = o), (Wi = l), (rt = c);
      }
      Ym(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (X = s)) : Ym(e);
  }
}
function Ym(e) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || ya(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !rt)
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
              s !== null && Nm(t, s, r);
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
                Nm(t, i, n);
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
                    d !== null && Ks(d);
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
        rt || (t.flags & 512 && Wu(t));
      } catch (f) {
        Me(t, t.return, f);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function qm(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function Gm(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ya(4, t);
          } catch (a) {
            Me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Me(t, o, a);
            }
          }
          var s = t.return;
          try {
            Wu(t);
          } catch (a) {
            Me(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Wu(t);
          } catch (a) {
            Me(t, i, a);
          }
      }
    } catch (a) {
      Me(t, t.return, a);
    }
    if (t === e) {
      X = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (X = l);
      break;
    }
    X = t.return;
  }
}
var aS = Math.ceil,
  Bl = Wn.ReactCurrentDispatcher,
  cf = Wn.ReactCurrentOwner,
  Ht = Wn.ReactCurrentBatchConfig,
  pe = 0,
  qe = null,
  Be = null,
  Ze = 0,
  Tt = 0,
  Ro = Cr(0),
  Ue = 0,
  ii = null,
  Yr = 0,
  va = 0,
  uf = 0,
  Bs = null,
  xt = null,
  df = 0,
  Wo = 1 / 0,
  $n = null,
  Vl = !1,
  Gu = null,
  pr = null,
  Yi = !1,
  ir = null,
  Hl = 0,
  Vs = 0,
  Ku = null,
  pl = -1,
  ml = 0;
function dt() {
  return pe & 6 ? ze() : pl !== -1 ? pl : (pl = ze());
}
function mr(e) {
  return e.mode & 1
    ? pe & 2 && Ze !== 0
      ? Ze & -Ze
      : Wb.transition !== null
      ? (ml === 0 && (ml = my()), ml)
      : ((e = ye),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : by(e.type))),
        e)
    : 1;
}
function rn(e, t, n, r) {
  if (50 < Vs) throw ((Vs = 0), (Ku = null), Error(H(185)));
  hi(e, n, r),
    (!(pe & 2) || e !== qe) &&
      (e === qe && (!(pe & 2) && (va |= n), Ue === 4 && rr(e, Ze)),
      kt(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((Wo = ze() + 500), ma && Er()));
}
function kt(e, t) {
  var n = e.callbackNode;
  Wx(e, t);
  var r = kl(e, e === qe ? Ze : 0);
  if (r === 0)
    n !== null && rm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rm(n), t === 1))
      e.tag === 0 ? Ub(Km.bind(null, e)) : zy(Km.bind(null, e)),
        zb(function () {
          !(pe & 6) && Er();
        }),
        (n = null);
    else {
      switch (hy(r)) {
        case 1:
          n = Ad;
          break;
        case 4:
          n = fy;
          break;
        case 16:
          n = _l;
          break;
        case 536870912:
          n = py;
          break;
        default:
          n = _l;
      }
      n = Mv(n, Tv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tv(e, t) {
  if (((pl = -1), (ml = 0), pe & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if ($o() && e.callbackNode !== n) return null;
  var r = kl(e, e === qe ? Ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ul(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var s = Ov();
    (qe !== e || Ze !== t) && (($n = null), (Wo = ze() + 500), Mr(e, t));
    do
      try {
        dS();
        break;
      } catch (l) {
        jv(e, l);
      }
    while (!0);
    Kd(),
      (Bl.current = s),
      (pe = o),
      Be !== null ? (t = 0) : ((qe = null), (Ze = 0), (t = Ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Su(e)), o !== 0 && ((r = o), (t = Xu(e, o)))), t === 1)
    )
      throw ((n = ii), Mr(e, 0), rr(e, r), kt(e, ze()), n);
    if (t === 6) rr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !cS(o) &&
          ((t = Ul(e, r)),
          t === 2 && ((s = Su(e)), s !== 0 && ((r = s), (t = Xu(e, s)))),
          t === 1))
      )
        throw ((n = ii), Mr(e, 0), rr(e, r), kt(e, ze()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          jr(e, xt, $n);
          break;
        case 3:
          if (
            (rr(e, r), (r & 130023424) === r && ((t = df + 500 - ze()), 10 < t))
          ) {
            if (kl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              dt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Nu(jr.bind(null, e, xt, $n), t);
            break;
          }
          jr(e, xt, $n);
          break;
        case 4:
          if ((rr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - nn(r);
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
                : 1960 * aS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Nu(jr.bind(null, e, xt, $n), r);
            break;
          }
          jr(e, xt, $n);
          break;
        case 5:
          jr(e, xt, $n);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return kt(e, ze()), e.callbackNode === n ? Tv.bind(null, e) : null;
}
function Xu(e, t) {
  var n = Bs;
  return (
    e.current.memoizedState.isDehydrated && (Mr(e, t).flags |= 256),
    (e = Ul(e, t)),
    e !== 2 && ((t = xt), (xt = n), t !== null && Qu(t)),
    e
  );
}
function Qu(e) {
  xt === null ? (xt = e) : xt.push.apply(xt, e);
}
function cS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!sn(s(), o)) return !1;
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
function rr(e, t) {
  for (
    t &= ~uf,
      t &= ~va,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Km(e) {
  if (pe & 6) throw Error(H(327));
  $o();
  var t = kl(e, 0);
  if (!(t & 1)) return kt(e, ze()), null;
  var n = Ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Su(e);
    r !== 0 && ((t = r), (n = Xu(e, r)));
  }
  if (n === 1) throw ((n = ii), Mr(e, 0), rr(e, t), kt(e, ze()), n);
  if (n === 6) throw Error(H(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jr(e, xt, $n),
    kt(e, ze()),
    null
  );
}
function ff(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((Wo = ze() + 500), ma && Er());
  }
}
function qr(e) {
  ir !== null && ir.tag === 0 && !(pe & 6) && $o();
  var t = pe;
  pe |= 1;
  var n = Ht.transition,
    r = ye;
  try {
    if (((Ht.transition = null), (ye = 1), e)) return e();
  } finally {
    (ye = r), (Ht.transition = n), (pe = t), !(pe & 6) && Er();
  }
}
function pf() {
  (Tt = Ro.current), ke(Ro);
}
function Mr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ib(n)), Be !== null))
    for (n = Be.return; n !== null; ) {
      var r = n;
      switch ((Yd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Tl();
          break;
        case 3:
          Ho(), ke(Et), ke(st), tf();
          break;
        case 5:
          ef(r);
          break;
        case 4:
          Ho();
          break;
        case 13:
          ke(Te);
          break;
        case 19:
          ke(Te);
          break;
        case 10:
          Xd(r.type._context);
          break;
        case 22:
        case 23:
          pf();
      }
      n = n.return;
    }
  if (
    ((qe = e),
    (Be = e = hr(e.current, null)),
    (Ze = Tt = t),
    (Ue = 0),
    (ii = null),
    (uf = va = Yr = 0),
    (xt = Bs = null),
    Ar !== null)
  ) {
    for (t = 0; t < Ar.length; t++)
      if (((n = Ar[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Ar = null;
  }
  return e;
}
function jv(e, t) {
  do {
    var n = Be;
    try {
      if ((Kd(), (ul.current = zl), Il)) {
        for (var r = je.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Il = !1;
      }
      if (
        ((Wr = 0),
        (Ye = He = je = null),
        (Is = !1),
        (ri = 0),
        (cf.current = null),
        n === null || n.return === null)
      ) {
        (Ue = 1), (ii = t), (Be = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Ze),
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
          var m = Am(i);
          if (m !== null) {
            (m.flags &= -257),
              Fm(m, i, l, s, t),
              m.mode & 1 && Lm(s, c, t),
              (t = m),
              (a = c);
            var p = t.updateQueue;
            if (p === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else p.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Lm(s, c, t), mf();
              break e;
            }
            a = Error(H(426));
          }
        } else if (Pe && l.mode & 1) {
          var b = Am(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Fm(b, i, l, s, t),
              qd(Uo(a, l));
            break e;
          }
        }
        (s = a = Uo(a, l)),
          Ue !== 4 && (Ue = 2),
          Bs === null ? (Bs = [s]) : Bs.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var w = hv(s, a, t);
              Pm(s, w);
              break e;
            case 1:
              l = a;
              var y = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (pr === null || !pr.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = gv(s, l, t);
                Pm(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Lv(n);
    } catch (C) {
      (t = C), Be === n && n !== null && (Be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ov() {
  var e = Bl.current;
  return (Bl.current = zl), e === null ? zl : e;
}
function mf() {
  (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
    qe === null || (!(Yr & 268435455) && !(va & 268435455)) || rr(qe, Ze);
}
function Ul(e, t) {
  var n = pe;
  pe |= 2;
  var r = Ov();
  (qe !== e || Ze !== t) && (($n = null), Mr(e, t));
  do
    try {
      uS();
      break;
    } catch (o) {
      jv(e, o);
    }
  while (!0);
  if ((Kd(), (pe = n), (Bl.current = r), Be !== null)) throw Error(H(261));
  return (qe = null), (Ze = 0), Ue;
}
function uS() {
  for (; Be !== null; ) $v(Be);
}
function dS() {
  for (; Be !== null && !Ax(); ) $v(Be);
}
function $v(e) {
  var t = Fv(e.alternate, e, Tt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lv(e) : (Be = t),
    (cf.current = null);
}
function Lv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = oS(n, t)), n !== null)) {
        (n.flags &= 32767), (Be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ue = 6), (Be = null);
        return;
      }
    } else if (((n = rS(n, t, Tt)), n !== null)) {
      Be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Be = t;
      return;
    }
    Be = t = e;
  } while (t !== null);
  Ue === 0 && (Ue = 5);
}
function jr(e, t, n) {
  var r = ye,
    o = Ht.transition;
  try {
    (Ht.transition = null), (ye = 1), fS(e, t, n, r);
  } finally {
    (Ht.transition = o), (ye = r);
  }
  return null;
}
function fS(e, t, n, r) {
  do $o();
  while (ir !== null);
  if (pe & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Yx(e, s),
    e === qe && ((Be = qe = null), (Ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yi ||
      ((Yi = !0),
      Mv(_l, function () {
        return $o(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ht.transition), (Ht.transition = null);
    var i = ye;
    ye = 1;
    var l = pe;
    (pe |= 4),
      (cf.current = null),
      iS(e, n),
      Pv(n, e),
      jb(Du),
      (Rl = !!Ru),
      (Du = Ru = null),
      (e.current = n),
      lS(n),
      Fx(),
      (pe = l),
      (ye = i),
      (Ht.transition = s);
  } else e.current = n;
  if (
    (Yi && ((Yi = !1), (ir = e), (Hl = o)),
    (s = e.pendingLanes),
    s === 0 && (pr = null),
    zx(n.stateNode),
    kt(e, ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Vl) throw ((Vl = !1), (e = Gu), (Gu = null), e);
  return (
    Hl & 1 && e.tag !== 0 && $o(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ku ? Vs++ : ((Vs = 0), (Ku = e))) : (Vs = 0),
    Er(),
    null
  );
}
function $o() {
  if (ir !== null) {
    var e = hy(Hl),
      t = Ht.transition,
      n = ye;
    try {
      if (((Ht.transition = null), (ye = 16 > e ? 16 : e), ir === null))
        var r = !1;
      else {
        if (((e = ir), (ir = null), (Hl = 0), pe & 6)) throw Error(H(331));
        var o = pe;
        for (pe |= 4, X = e.current; X !== null; ) {
          var s = X,
            i = s.child;
          if (X.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (X = c; X !== null; ) {
                  var u = X;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zs(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (X = d);
                  else
                    for (; X !== null; ) {
                      u = X;
                      var f = u.sibling,
                        m = u.return;
                      if ((kv(u), u === c)) {
                        X = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (X = f);
                        break;
                      }
                      X = m;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var g = p.child;
                if (g !== null) {
                  p.child = null;
                  do {
                    var b = g.sibling;
                    (g.sibling = null), (g = b);
                  } while (g !== null);
                }
              }
              X = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (X = i);
          else
            e: for (; X !== null; ) {
              if (((s = X), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zs(9, s, s.return);
                }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (X = w);
                break e;
              }
              X = s.return;
            }
        }
        var y = e.current;
        for (X = y; X !== null; ) {
          i = X;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (X = v);
          else
            e: for (i = y; X !== null; ) {
              if (((l = X), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ya(9, l);
                  }
                } catch (C) {
                  Me(l, l.return, C);
                }
              if (l === i) {
                X = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (X = S);
                break e;
              }
              X = l.return;
            }
        }
        if (
          ((pe = o), Er(), _n && typeof _n.onPostCommitFiberRoot == "function")
        )
          try {
            _n.onPostCommitFiberRoot(ca, e);
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
function Xm(e, t, n) {
  (t = Uo(n, t)),
    (t = hv(e, t, 1)),
    (e = fr(e, t, 1)),
    (t = dt()),
    e !== null && (hi(e, 1, t), kt(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3) Xm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pr === null || !pr.has(r)))
        ) {
          (e = Uo(n, e)),
            (e = gv(t, e, 1)),
            (t = fr(t, e, 1)),
            (e = dt()),
            t !== null && (hi(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    qe === e &&
      (Ze & n) === n &&
      (Ue === 4 || (Ue === 3 && (Ze & 130023424) === Ze && 500 > ze() - df)
        ? Mr(e, 0)
        : (uf |= n)),
    kt(e, t);
}
function Av(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ai), (Ai <<= 1), !(Ai & 130023424) && (Ai = 4194304))
      : (t = 1));
  var n = dt();
  (e = Vn(e, t)), e !== null && (hi(e, t, n), kt(e, n));
}
function mS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Av(e, n);
}
function hS(e, t) {
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
  r !== null && r.delete(t), Av(e, n);
}
var Fv;
Fv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) bt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (bt = !1), nS(e, t, n);
      bt = !!(e.flags & 131072);
    }
  else (bt = !1), Pe && t.flags & 1048576 && By(t, $l, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fl(e, t), (e = t.pendingProps);
      var o = zo(t, st.current);
      Oo(t, n), (o = rf(null, t, r, e, o, n));
      var s = of();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _t(r) ? ((s = !0), jl(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Zd(t),
            (o.updater = ga),
            (t.stateNode = o),
            (o._reactInternals = t),
            Fu(t, r, e, n),
            (t = zu(null, t, r, !0, s, n)))
          : ((t.tag = 0), Pe && s && Wd(t), ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = yS(r)),
          (e = Qt(r, e)),
          o)
        ) {
          case 0:
            t = Iu(null, t, r, e, n);
            break e;
          case 1:
            t = zm(null, t, r, e, n);
            break e;
          case 11:
            t = Mm(null, t, r, e, n);
            break e;
          case 14:
            t = Im(null, t, r, Qt(r.type, e), n);
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
        Iu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Qt(r, o)),
        zm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((xv(t), e === null)) throw Error(H(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          qy(e, t),
          Fl(t, r, null, n);
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
            (o = Uo(Error(H(423)), t)), (t = Bm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Uo(Error(H(424)), t)), (t = Bm(e, t, r, n, o));
            break e;
          } else
            for (
              jt = dr(t.stateNode.containerInfo.firstChild),
                Ot = t,
                Pe = !0,
                Jt = null,
                n = Wy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Bo(), r === o)) {
            t = Hn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gy(t),
        e === null && $u(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Pu(r, o) ? (i = null) : s !== null && Pu(r, s) && (t.flags |= 32),
        wv(e, t),
        ct(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && $u(t), null;
    case 13:
      return bv(e, t, n);
    case 4:
      return (
        Jd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vo(t, null, r, n)) : ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Qt(r, o)),
        Mm(e, t, r, o, n)
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
          Se(Ll, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (sn(s.value, i)) {
            if (s.children === o.children && !Et.current) {
              t = Hn(e, t, n);
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
                      (a = Mn(-1, n & -n)), (a.tag = 2);
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
                      Lu(s.return, n, t),
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
                  Lu(i, n, t),
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
        Oo(t, n),
        (o = Wt(o)),
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
        Im(e, t, r, o, n)
      );
    case 15:
      return yv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Qt(r, o)),
        fl(e, t),
        (t.tag = 1),
        _t(r) ? ((e = !0), jl(t)) : (e = !1),
        Oo(t, n),
        mv(t, r, o),
        Fu(t, r, o, n),
        zu(null, t, r, !0, e, n)
      );
    case 19:
      return Sv(e, t, n);
    case 22:
      return vv(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Mv(e, t) {
  return dy(e, t);
}
function gS(e, t, n, r) {
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
  return new gS(e, t, n, r);
}
function hf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yS(e) {
  if (typeof e == "function") return hf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Od)) return 11;
    if (e === $d) return 14;
  }
  return 2;
}
function hr(e, t) {
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
function hl(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) hf(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case yo:
        return Ir(n.children, o, s, t);
      case jd:
        (i = 8), (o |= 8);
        break;
      case lu:
        return (
          (e = Vt(12, n, t, o | 2)), (e.elementType = lu), (e.lanes = s), e
        );
      case au:
        return (e = Vt(13, n, t, o)), (e.elementType = au), (e.lanes = s), e;
      case cu:
        return (e = Vt(19, n, t, o)), (e.elementType = cu), (e.lanes = s), e;
      case Gg:
        return wa(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yg:
              i = 10;
              break e;
            case qg:
              i = 9;
              break e;
            case Od:
              i = 11;
              break e;
            case $d:
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
function Ir(e, t, n, r) {
  return (e = Vt(7, e, r, t)), (e.lanes = n), e;
}
function wa(e, t, n, r) {
  return (
    (e = Vt(22, e, r, t)),
    (e.elementType = Gg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Mc(e, t, n) {
  return (e = Vt(6, e, null, t)), (e.lanes = n), e;
}
function Ic(e, t, n) {
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
function vS(e, t, n, r, o) {
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
    (this.eventTimes = wc(0)),
    (this.expirationTimes = wc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function gf(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new vS(e, t, n, l, a)),
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
    Zd(s),
    e
  );
}
function wS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: go,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Iv(e) {
  if (!e) return vr;
  e = e._reactInternals;
  e: {
    if (eo(e) !== e || e.tag !== 1) throw Error(H(170));
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
    if (_t(n)) return Iy(e, n, t);
  }
  return t;
}
function zv(e, t, n, r, o, s, i, l, a) {
  return (
    (e = gf(n, r, !0, e, o, s, i, l, a)),
    (e.context = Iv(null)),
    (n = e.current),
    (r = dt()),
    (o = mr(n)),
    (s = Mn(r, o)),
    (s.callback = t ?? null),
    fr(n, s, o),
    (e.current.lanes = o),
    hi(e, o, r),
    kt(e, r),
    e
  );
}
function xa(e, t, n, r) {
  var o = t.current,
    s = dt(),
    i = mr(o);
  return (
    (n = Iv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = fr(o, t, i)),
    e !== null && (rn(e, o, i, s), cl(e, o, i)),
    i
  );
}
function Wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yf(e, t) {
  Qm(e, t), (e = e.alternate) && Qm(e, t);
}
function xS() {
  return null;
}
var Bv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vf(e) {
  this._internalRoot = e;
}
ba.prototype.render = vf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  xa(e, t, null, null);
};
ba.prototype.unmount = vf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qr(function () {
      xa(null, e, null, null);
    }),
      (t[Bn] = null);
  }
};
function ba(e) {
  this._internalRoot = e;
}
ba.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nr.length && t !== 0 && t < nr[n].priority; n++);
    nr.splice(n, 0, e), n === 0 && xy(e);
  }
};
function wf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zm() {}
function bS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Wl(i);
        s.call(c);
      };
    }
    var i = zv(t, r, e, 0, null, !1, !1, "", Zm);
    return (
      (e._reactRootContainer = i),
      (e[Bn] = i.current),
      Zs(e.nodeType === 8 ? e.parentNode : e),
      qr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Wl(a);
      l.call(c);
    };
  }
  var a = gf(e, 0, !1, null, null, !1, !1, "", Zm);
  return (
    (e._reactRootContainer = a),
    (e[Bn] = a.current),
    Zs(e.nodeType === 8 ? e.parentNode : e),
    qr(function () {
      xa(t, a, n, r);
    }),
    a
  );
}
function Ca(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Wl(i);
        l.call(a);
      };
    }
    xa(t, i, e, o);
  } else i = bS(n, t, e, o, r);
  return Wl(i);
}
gy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = js(t.pendingLanes);
        n !== 0 &&
          (Fd(t, n | 1), kt(t, ze()), !(pe & 6) && ((Wo = ze() + 500), Er()));
      }
      break;
    case 13:
      qr(function () {
        var r = Vn(e, 1);
        if (r !== null) {
          var o = dt();
          rn(r, e, 1, o);
        }
      }),
        yf(e, 1);
  }
};
Md = function (e) {
  if (e.tag === 13) {
    var t = Vn(e, 134217728);
    if (t !== null) {
      var n = dt();
      rn(t, e, 134217728, n);
    }
    yf(e, 134217728);
  }
};
yy = function (e) {
  if (e.tag === 13) {
    var t = mr(e),
      n = Vn(e, t);
    if (n !== null) {
      var r = dt();
      rn(n, e, t, r);
    }
    yf(e, t);
  }
};
vy = function () {
  return ye;
};
wy = function (e, t) {
  var n = ye;
  try {
    return (ye = e), t();
  } finally {
    ye = n;
  }
};
wu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = pa(r);
            if (!o) throw Error(H(90));
            Xg(r), fu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zg(e, n);
      break;
    case "select":
      (t = n.value), t != null && Po(e, !!n.multiple, t, !1);
  }
};
sy = ff;
iy = qr;
var SS = { usingClientEntryPoint: !1, Events: [yi, bo, pa, ry, oy, ff] },
  Es = {
    findFiberByHostInstance: Lr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  CS = {
    bundleType: Es.bundleType,
    version: Es.version,
    rendererPackageName: Es.rendererPackageName,
    rendererConfig: Es.rendererConfig,
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
      return (e = cy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Es.findFiberByHostInstance || xS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qi.isDisabled && qi.supportsFiber)
    try {
      (ca = qi.inject(CS)), (_n = qi);
    } catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = SS;
At.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wf(t)) throw Error(H(200));
  return wS(e, t, null, n);
};
At.createRoot = function (e, t) {
  if (!wf(e)) throw Error(H(299));
  var n = !1,
    r = "",
    o = Bv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gf(e, 1, !1, null, null, n, !1, r, o)),
    (e[Bn] = t.current),
    Zs(e.nodeType === 8 ? e.parentNode : e),
    new vf(t)
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
  return (e = cy(t)), (e = e === null ? null : e.stateNode), e;
};
At.flushSync = function (e) {
  return qr(e);
};
At.hydrate = function (e, t, n) {
  if (!Sa(t)) throw Error(H(200));
  return Ca(null, e, t, !0, n);
};
At.hydrateRoot = function (e, t, n) {
  if (!wf(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Bv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = zv(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Bn] = t.current),
    Zs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ba(t);
};
At.render = function (e, t, n) {
  if (!Sa(t)) throw Error(H(200));
  return Ca(null, e, t, !1, n);
};
At.unmountComponentAtNode = function (e) {
  if (!Sa(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (qr(function () {
        Ca(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bn] = null);
        });
      }),
      !0)
    : !1;
};
At.unstable_batchedUpdates = ff;
At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sa(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return Ca(e, t, n, !1, r);
};
At.version = "18.3.1-next-f1338f8080-20240426";
function Vv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv);
    } catch (e) {
      console.error(e);
    }
}
Vv(), (Vg.exports = At);
var wi = Vg.exports;
const ES = br(wi);
var Jm = wi;
(su.createRoot = Jm.createRoot), (su.hydrateRoot = Jm.hydrateRoot);
var En = function () {
  return (
    (En =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    En.apply(this, arguments)
  );
};
function Hv(e, t) {
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
function _S(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var gl = "right-scroll-bar-position",
  yl = "width-before-scroll-bar",
  kS = "with-scroll-bars-hidden",
  RS = "--removed-body-scroll-bar-size";
function zc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function DS(e, t) {
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
var PS = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  eh = new WeakMap();
function NS(e, t) {
  var n = DS(null, function (r) {
    return e.forEach(function (o) {
      return zc(o, r);
    });
  });
  return (
    PS(
      function () {
        var r = eh.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (l) {
            s.has(l) || zc(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || zc(l, i);
            });
        }
        eh.set(n, e);
      },
      [e]
    ),
    n
  );
}
function TS(e) {
  return e;
}
function jS(e, t) {
  t === void 0 && (t = TS);
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
function OS(e) {
  e === void 0 && (e = {});
  var t = jS(null);
  return (t.options = En({ async: !0, ssr: !1 }, e)), t;
}
var Uv = function (e) {
  var t = e.sideCar,
    n = Hv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return x.createElement(r, En({}, n));
};
Uv.isSideCarExport = !0;
function $S(e, t) {
  return e.useMedium(t), Uv;
}
var Wv = OS(),
  Bc = function () {},
  Ea = x.forwardRef(function (e, t) {
    var n = x.useRef(null),
      r = x.useState({
        onScrollCapture: Bc,
        onWheelCapture: Bc,
        onTouchMoveCapture: Bc,
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
      g = e.allowPinchZoom,
      b = e.as,
      w = b === void 0 ? "div" : b,
      y = e.gapMode,
      v = Hv(e, [
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
      C = NS([n, t]),
      E = En(En({}, v), o);
    return x.createElement(
      x.Fragment,
      null,
      u &&
        x.createElement(S, {
          sideCar: Wv,
          removeScrollBar: c,
          shards: d,
          noIsolation: m,
          inert: p,
          setCallbacks: s,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: y,
        }),
      i
        ? x.cloneElement(x.Children.only(l), En(En({}, E), { ref: C }))
        : x.createElement(w, En({}, E, { className: a, ref: C }), l)
    );
  });
Ea.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ea.classNames = { fullWidth: yl, zeroRight: gl };
var LS = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function AS() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = LS();
  return t && e.setAttribute("nonce", t), e;
}
function FS(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function MS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var IS = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = AS()) && (FS(t, n), MS(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  zS = function () {
    var e = IS();
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
  Yv = function () {
    var e = zS(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  BS = { left: 0, top: 0, right: 0, gap: 0 },
  Vc = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  VS = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Vc(n), Vc(r), Vc(o)];
  },
  HS = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return BS;
    var t = VS(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  US = Yv(),
  Lo = "data-scroll-locked",
  WS = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          kS,
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
          Lo,
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
          gl,
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
          yl,
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
        .concat(gl, " .")
        .concat(
          gl,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(yl, " .")
        .concat(
          yl,
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
          Lo,
          `] {
    `
        )
        .concat(RS, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  th = function () {
    var e = parseInt(document.body.getAttribute(Lo) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  YS = function () {
    x.useEffect(function () {
      return (
        document.body.setAttribute(Lo, (th() + 1).toString()),
        function () {
          var e = th() - 1;
          e <= 0
            ? document.body.removeAttribute(Lo)
            : document.body.setAttribute(Lo, e.toString());
        }
      );
    }, []);
  },
  qS = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    YS();
    var s = x.useMemo(
      function () {
        return HS(o);
      },
      [o]
    );
    return x.createElement(US, { styles: WS(s, !t, o, n ? "" : "!important") });
  },
  Zu = !1;
if (typeof window < "u")
  try {
    var Gi = Object.defineProperty({}, "passive", {
      get: function () {
        return (Zu = !0), !0;
      },
    });
    window.addEventListener("test", Gi, Gi),
      window.removeEventListener("test", Gi, Gi);
  } catch {
    Zu = !1;
  }
var uo = Zu ? { passive: !1 } : !1,
  GS = function (e) {
    return e.tagName === "TEXTAREA";
  },
  qv = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !GS(e) && n[t] === "visible")
    );
  },
  KS = function (e) {
    return qv(e, "overflowY");
  },
  XS = function (e) {
    return qv(e, "overflowX");
  },
  nh = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Gv(e, r);
      if (o) {
        var s = Kv(e, r),
          i = s[1],
          l = s[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  QS = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  ZS = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Gv = function (e, t) {
    return e === "v" ? KS(t) : XS(t);
  },
  Kv = function (e, t) {
    return e === "v" ? QS(t) : ZS(t);
  },
  JS = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  eC = function (e, t, n, r, o) {
    var s = JS(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      a = t.contains(l),
      c = !1,
      u = i > 0,
      d = 0,
      f = 0;
    do {
      var m = Kv(e, l),
        p = m[0],
        g = m[1],
        b = m[2],
        w = g - b - s * p;
      (p || w) && Gv(e, l) && ((d += w), (f += p)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((u && (Math.abs(d) < 1 || !o)) || (!u && (Math.abs(f) < 1 || !o))) &&
        (c = !0),
      c
    );
  },
  Ki = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  rh = function (e) {
    return [e.deltaX, e.deltaY];
  },
  oh = function (e) {
    return e && "current" in e ? e.current : e;
  },
  tC = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  nC = function (e) {
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
  rC = 0,
  fo = [];
function oC(e) {
  var t = x.useRef([]),
    n = x.useRef([0, 0]),
    r = x.useRef(),
    o = x.useState(rC++)[0],
    s = x.useState(Yv)[0],
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
          var g = _S([e.lockRef.current], (e.shards || []).map(oh), !0).filter(
            Boolean
          );
          return (
            g.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = x.useCallback(function (g, b) {
      if ("touches" in g && g.touches.length === 2)
        return !i.current.allowPinchZoom;
      var w = Ki(g),
        y = n.current,
        v = "deltaX" in g ? g.deltaX : y[0] - w[0],
        S = "deltaY" in g ? g.deltaY : y[1] - w[1],
        C,
        E = g.target,
        k = Math.abs(v) > Math.abs(S) ? "h" : "v";
      if ("touches" in g && k === "h" && E.type === "range") return !1;
      var D = nh(k, E);
      if (!D) return !0;
      if ((D ? (C = k) : ((C = k === "v" ? "h" : "v"), (D = nh(k, E))), !D))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (v || S) && (r.current = C), !C)
      )
        return !0;
      var L = r.current || C;
      return eC(L, b, g, L === "h" ? v : S, !0);
    }, []),
    a = x.useCallback(function (g) {
      var b = g;
      if (!(!fo.length || fo[fo.length - 1] !== s)) {
        var w = "deltaY" in b ? rh(b) : Ki(b),
          y = t.current.filter(function (C) {
            return (
              C.name === b.type &&
              (C.target === b.target || b.target === C.shadowParent) &&
              tC(C.delta, w)
            );
          })[0];
        if (y && y.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!y) {
          var v = (i.current.shards || [])
              .map(oh)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(b.target);
              }),
            S = v.length > 0 ? l(b, v[0]) : !i.current.noIsolation;
          S && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    c = x.useCallback(function (g, b, w, y) {
      var v = { name: g, delta: b, target: w, should: y, shadowParent: sC(w) };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== v;
          });
        }, 1);
    }, []),
    u = x.useCallback(function (g) {
      (n.current = Ki(g)), (r.current = void 0);
    }, []),
    d = x.useCallback(function (g) {
      c(g.type, rh(g), g.target, l(g, e.lockRef.current));
    }, []),
    f = x.useCallback(function (g) {
      c(g.type, Ki(g), g.target, l(g, e.lockRef.current));
    }, []);
  x.useEffect(function () {
    return (
      fo.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, uo),
      document.addEventListener("touchmove", a, uo),
      document.addEventListener("touchstart", u, uo),
      function () {
        (fo = fo.filter(function (g) {
          return g !== s;
        })),
          document.removeEventListener("wheel", a, uo),
          document.removeEventListener("touchmove", a, uo),
          document.removeEventListener("touchstart", u, uo);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    p = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    p ? x.createElement(s, { styles: nC(o) }) : null,
    m ? x.createElement(qS, { gapMode: e.gapMode }) : null
  );
}
function sC(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const iC = $S(Wv, oC);
var Xv = x.forwardRef(function (e, t) {
  return x.createElement(Ea, En({}, e, { ref: t, sideCar: iC }));
});
Xv.classNames = Ea.classNames;
function Rn(e) {
  return Object.keys(e);
}
function Hc(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function xf(e, t) {
  const n = { ...e },
    r = t;
  return (
    Hc(e) &&
      Hc(t) &&
      Object.keys(t).forEach((o) => {
        Hc(r[o]) && o in e ? (n[o] = xf(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function lC(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function aC(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)")
    ? e
    : (t = e.match(/^calc\((.*?)\)$/)) == null
    ? void 0
    : t[1].split("*")[0].trim();
}
function cC(e) {
  const t = aC(e);
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
function Uc(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function Qv(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? Uc(o) : o;
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
      if (r.includes(e)) return t ? Uc(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const s = `${Number(o) / 16}${e}`;
        return t ? Uc(s) : s;
      }
    }
    return r;
  }
  return n;
}
const z = Qv("rem", { shouldScale: !0 }),
  sh = Qv("em");
function _a(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
    {}
  );
}
function Zv(e) {
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
function to(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
    ? e.type !== x.Fragment
    : !1;
}
function Yn(e) {
  const t = x.createContext(null);
  return [
    ({ children: o, value: s }) => h.jsx(t.Provider, { value: s, children: o }),
    () => {
      const o = x.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function bf(e = null) {
  const t = x.createContext(e);
  return [
    ({ children: o, value: s }) => h.jsx(t.Provider, { value: s, children: o }),
    () => x.useContext(t),
  ];
}
const uC = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function no(e) {
  return uC[e];
}
const dC = () => {};
function fC(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active
    ? t.onKeyDown || dC
    : (n) => {
        var r;
        n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
      };
}
function Ce(e, t = "size", n = !0) {
  if (e !== void 0) return Zv(e) ? (n ? z(e) : e) : `var(--${t}-${e})`;
}
function xi(e) {
  return Ce(e, "mantine-spacing");
}
function dn(e) {
  return e === void 0
    ? "var(--mantine-radius-default)"
    : Ce(e, "mantine-radius");
}
function Je(e) {
  return Ce(e, "mantine-font-size");
}
function Jv(e) {
  return Ce(e, "mantine-line-height", !1);
}
function Sf(e) {
  if (e) return Ce(e, "mantine-shadow", !1);
}
function Yl(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function pC(e, t, n) {
  return t === void 0 && n === void 0
    ? e
    : t !== void 0 && n === void 0
    ? Math.max(e, t)
    : Math.min(t === void 0 && n !== void 0 ? e : Math.max(e, t), n);
}
function e0() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function ih(e) {
  return typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1);
}
function Or(e) {
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
function ka(e, t) {
  const n = Or(e),
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
const lh = ["mousedown", "touchstart"];
function mC(e, t, n) {
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
        (t || lh).forEach((s) => document.addEventListener(s, o)),
        () => {
          (t || lh).forEach((s) => document.removeEventListener(s, o));
        }
      );
    }, [r, e, n]),
    r
  );
}
function hC(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function gC(e, t) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function yC(
  e,
  t,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
) {
  const [r, o] = x.useState(n ? t : gC(e)),
    s = x.useRef();
  return (
    x.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (s.current = window.matchMedia(e)),
          o(s.current.matches),
          hC(s.current, (i) => o(i.matches))
        );
    }, [e]),
    r
  );
}
const bi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Gr(e, t) {
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
function t0({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = x.useRef(),
    r = () => {
      var o;
      n.current &&
        "focus" in n.current &&
        typeof n.current.focus == "function" &&
        ((o = n.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    Gr(() => {
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
function vC(e, t = "body > :not(script)") {
  const n = e0(),
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
const wC = /input|select|textarea|button|object/,
  n0 = "a, input, select, textarea, button, object, [tabindex]";
function xC(e) {
  return e.style.display === "none";
}
function bC(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (xC(n)) return !1;
    n = n.parentNode;
  }
  return !0;
}
function r0(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Ju(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(r0(e));
  return (
    ((wC.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      n) &&
    bC(e)
  );
}
function o0(e) {
  const t = r0(e);
  return (Number.isNaN(t) || t >= 0) && Ju(e);
}
function SC(e) {
  return Array.from(e.querySelectorAll(n0)).filter(o0);
}
function CC(e, t) {
  const n = SC(e);
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
function EC(e = !0) {
  const t = x.useRef(),
    n = x.useRef(null),
    r = (s) => {
      let i = s.querySelector("[data-autofocus]");
      if (!i) {
        const l = Array.from(s.querySelectorAll(n0));
        (i = l.find(o0) || l.find(Ju) || null), !i && Ju(s) && (i = s);
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
          (n.current = vC(s)),
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
        i.key === "Tab" && t.current && CC(t.current, i);
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
const _C = aa.useId || (() => {});
function kC() {
  const e = _C();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function _r(e) {
  const t = kC(),
    [n, r] = x.useState(t);
  return (
    bi(() => {
      r(e0());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : n
  );
}
function RC(e, t, n) {
  x.useEffect(
    () => (
      window.addEventListener(e, t, n),
      () => window.removeEventListener(e, t, n)
    ),
    [e, t]
  );
}
function Cf(e, t) {
  typeof e == "function"
    ? e(t)
    : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function s0(...e) {
  return (t) => {
    e.forEach((n) => Cf(n, t));
  };
}
function Mt(...e) {
  return x.useCallback(s0(...e), e);
}
function ln({
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
function Ef(e, t) {
  return yC("(prefers-reduced-motion: reduce)", e, t);
}
function li(e = !1, t) {
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
var DC = {};
function PC() {
  return typeof process < "u" && DC ? "production" : "development";
}
function i0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = i0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ft() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = i0(e)) && (r && (r += " "), (r += t));
  return r;
}
const NC = {};
function TC(e) {
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
function Ra({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const s = (Array.isArray(t) ? t : [t]).map((i) =>
    typeof i == "function" ? i(e, n, r) : i || NC
  );
  return TC(s);
}
function ql({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce(
    (s, i) =>
      typeof i == "function" ? { ...s, ...i(e, n, r) } : { ...s, ...i },
    {}
  );
}
const l0 = x.createContext(null);
function ro() {
  const e = x.useContext(l0);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function jC() {
  return ro().cssVariablesResolver;
}
function OC() {
  return ro().classNamesPrefix;
}
function _f() {
  return ro().getStyleNonce;
}
function $C() {
  return ro().withStaticClasses;
}
function LC() {
  return ro().headless;
}
function AC() {
  var e;
  return (e = ro().stylesTransform) == null ? void 0 : e.sx;
}
function FC() {
  var e;
  return (e = ro().stylesTransform) == null ? void 0 : e.styles;
}
function MC(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function IC(e) {
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
function zC(e) {
  const [t, n, r, o] = e
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function BC(e) {
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
function kf(e) {
  return MC(e)
    ? IC(e)
    : e.startsWith("rgb")
    ? zC(e)
    : e.startsWith("hsl")
    ? BC(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function Xi(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: s } = kf(e),
    i = 1 - t,
    l = (a) => Math.round(a * i);
  return `rgba(${l(n)}, ${l(r)}, ${l(o)}, ${s})`;
}
function ai(e, t) {
  return typeof e.primaryShade == "number"
    ? e.primaryShade
    : t === "dark"
    ? e.primaryShade.dark
    : e.primaryShade.light;
}
function Wc(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function VC(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function HC(e) {
  if (e.startsWith("oklch(")) return (VC(e) || 0) / 100;
  const { r: t, g: n, b: r } = kf(e),
    o = t / 255,
    s = n / 255,
    i = r / 255,
    l = Wc(o),
    a = Wc(s),
    c = Wc(i);
  return 0.2126 * l + 0.7152 * a + 0.0722 * c;
}
function _s(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : HC(e) > t;
}
function rs({ color: e, theme: t, colorScheme: n }) {
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
      isLight: _s(n === "dark" ? t.white : t.black, t.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: _s(
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
      isLight: _s(e === "white" ? t.white : t.black, t.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [r, o] = e.split("."),
    s = o ? Number(o) : void 0,
    i = r in t.colors;
  if (i) {
    const l = s !== void 0 ? t.colors[r][s] : t.colors[r][ai(t, n || "light")];
    return {
      color: r,
      value: l,
      shade: s,
      isThemeColor: i,
      isLight: _s(l, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${s}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: i,
    isLight: _s(e, t.luminanceThreshold),
    shade: s,
    variable: void 0,
  };
}
function Yo(e, t) {
  const n = rs({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function ed(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0,
    },
    r = Yo(n.from, t),
    o = Yo(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Sn(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const s = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${s}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/")
      ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
      : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = kf(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const po = Sn,
  UC = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
    const s = rs({ color: e, theme: t }),
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
            hover: Xi(e, 0.1),
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
          background: Sn(l, 0.1),
          hover: Sn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${z(1)} solid transparent`,
        };
      }
      return {
        background: Sn(e, 0.1),
        hover: Sn(e, 0.12),
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
              hover: Sn(t.colors[s.color][s.shade], 0.05),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${z(1)} solid var(--mantine-color-${s.color}-${
                s.shade
              })`,
            }
        : {
            background: "transparent",
            hover: Sn(e, 0.05),
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
          hover: Sn(l, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${z(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: Sn(e, 0.12),
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
              hover: Xi(t.white, 0.01),
              color: `var(--mantine-color-${e}-filled)`,
              border: `${z(1)} solid transparent`,
            }
          : {
              background: "var(--mantine-color-white)",
              hover: Xi(t.white, 0.01),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${z(1)} solid transparent`,
            }
        : {
            background: "var(--mantine-color-white)",
            hover: Xi(t.white, 0.01),
            color: e,
            border: `${z(1)} solid transparent`,
          }
      : n === "gradient"
      ? {
          background: ed(r, t),
          hover: ed(r, t),
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
  WC = {
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
  ah =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Rf = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: WC,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: UC,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: ah,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: ah,
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
function ch(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function YC({ key: e = "mantine-color-scheme-value" } = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(e);
        return ch(r) ? r : n;
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
          ch(r.newValue) &&
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
const qC =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  uh =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Yc(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function dh(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(qC);
  if (
    typeof e.primaryShade == "object" &&
    (!Yc(e.primaryShade.dark) || !Yc(e.primaryShade.light))
  )
    throw new Error(uh);
  if (typeof e.primaryShade == "number" && !Yc(e.primaryShade))
    throw new Error(uh);
}
function GC(e, t) {
  var r;
  if (!t) return dh(e), e;
  const n = xf(e, t);
  return (
    t.fontFamily &&
      !((r = t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    dh(n),
    n
  );
}
const Df = x.createContext(null),
  KC = () => x.useContext(Df) || Rf;
function fn() {
  const e = x.useContext(Df);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function a0({ theme: e, children: t, inherit: n = !0 }) {
  const r = KC(),
    o = x.useMemo(() => GC(n ? r : Rf, e), [e, r, n]);
  return h.jsx(Df.Provider, { value: o, children: t });
}
a0.displayName = "@mantine/core/MantineThemeProvider";
function XC() {
  const e = fn(),
    t = _f(),
    n = Rn(e.breakpoints).reduce((r, o) => {
      const s = e.breakpoints[o].includes("px"),
        i = cC(e.breakpoints[o]),
        l = s ? `${i - 0.1}px` : sh(i - 0.1),
        a = s ? `${i}px` : sh(i);
      return `${r}@media (max-width: ${l}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, "");
  return h.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function qc(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n};`)
    .join("");
}
function Gc(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function QC(e, t) {
  const n = qc(e.variables),
    r = n ? Gc(t, n) : "",
    o = qc(e.dark),
    s = o ? Gc(`${t}[data-mantine-color-scheme="dark"]`, o) : "",
    i = qc(e.light),
    l = i ? Gc(`${t}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${s}${l}`;
}
function c0({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) &&
    rs({ color: e || t.primaryColor, theme: t }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function fh(e, t) {
  return c0({
    color: e.colors[e.primaryColor][ai(e, t)],
    theme: e,
    autoContrast: null,
  });
}
function Qi({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0,
}) {
  if (!e.colors[t]) return {};
  if (n === "light") {
    const l = ai(e, "light"),
      a = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
          l === 9 ? 8 : l + 1
        })`,
        [`--mantine-color-${r}-light`]: po(e.colors[t][l], 0.1),
        [`--mantine-color-${r}-light-hover`]: po(e.colors[t][l], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline-hover`]: po(e.colors[t][l], 0.05),
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
  const s = ai(e, "dark"),
    i = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
        s === 9 ? 8 : s + 1
      })`,
      [`--mantine-color-${r}-light`]: po(e.colors[t][Math.max(0, s - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: po(
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
      [`--mantine-color-${r}-outline-hover`]: po(
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
function ZC(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function mo(e, t, n) {
  Rn(t).forEach((r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }));
}
const u0 = (e) => {
  const t = ai(e, "light"),
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
        "--mantine-primary-color-contrast": fh(e, "light"),
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
        "--mantine-primary-color-contrast": fh(e, "dark"),
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
  mo(r.variables, e.breakpoints, "breakpoint"),
    mo(r.variables, e.spacing, "spacing"),
    mo(r.variables, e.fontSizes, "font-size"),
    mo(r.variables, e.lineHeights, "line-height"),
    mo(r.variables, e.shadows, "shadow"),
    mo(r.variables, e.radius, "radius"),
    e.colors[e.primaryColor].forEach((s, i) => {
      r.variables[
        `--mantine-primary-color-${i}`
      ] = `var(--mantine-color-${e.primaryColor}-${i})`;
    }),
    Rn(e.colors).forEach((s) => {
      const i = e.colors[s];
      if (ZC(i)) {
        Object.assign(
          r.light,
          Qi({
            theme: e,
            name: i.name,
            color: i.light,
            colorScheme: "light",
            withColorValues: !0,
          })
        ),
          Object.assign(
            r.dark,
            Qi({
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
          Qi({ theme: e, color: s, colorScheme: "light", withColorValues: !1 })
        ),
        Object.assign(
          r.dark,
          Qi({ theme: e, color: s, colorScheme: "dark", withColorValues: !1 })
        );
    });
  const o = e.headings.sizes;
  return (
    Rn(o).forEach((s) => {
      (r.variables[`--mantine-${s}-font-size`] = o[s].fontSize),
        (r.variables[`--mantine-${s}-line-height`] = o[s].lineHeight),
        (r.variables[`--mantine-${s}-font-weight`] =
          o[s].fontWeight || e.headings.fontWeight);
    }),
    r
  );
};
function JC({ theme: e, generator: t }) {
  const n = u0(e),
    r = t == null ? void 0 : t(e);
  return r ? xf(n, r) : n;
}
const Kc = u0(Rf);
function eE(e) {
  const t = { variables: {}, light: {}, dark: {} };
  return (
    Rn(e.variables).forEach((n) => {
      Kc.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
    }),
    Rn(e.light).forEach((n) => {
      Kc.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
    }),
    Rn(e.dark).forEach((n) => {
      Kc.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
    }),
    t
  );
}
function tE(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function d0({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
  const n = fn(),
    r = _f(),
    o = jC(),
    s = JC({ theme: n, generator: o }),
    i = e === ":root" && t,
    l = i ? eE(s) : s,
    a = QC(l, e);
  return a
    ? h.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${a}${i ? "" : tE(e)}` },
      })
    : null;
}
d0.displayName = "@mantine/CssVariables";
function nE() {
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
function ho(e, t) {
  var r;
  const n =
    e !== "auto"
      ? e
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function rE({
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
        r || (ho(u, n), i(u), e.set(u));
      },
      [e.set, l, r]
    ),
    c = x.useCallback(() => {
      i(t), ho(t, n), e.clear();
    }, [e.clear, t]);
  return (
    x.useEffect(
      () => (e.subscribe(a), e.unsubscribe),
      [e.subscribe, e.unsubscribe]
    ),
    bi(() => {
      ho(e.get(t), n);
    }, []),
    x.useEffect(() => {
      var d;
      if (r) return ho(r, n), () => {};
      r === void 0 && ho(s, n),
        (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const u = (f) => {
        s === "auto" && ho(f.matches ? "dark" : "light", n);
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
function oE({ respectReducedMotion: e, getRootElement: t }) {
  bi(() => {
    var n;
    e &&
      ((n = t()) == null ||
        n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
nE();
function f0({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: s = !0,
  withCssVariables: i = !0,
  cssVariablesSelector: l = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: c = YC(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: m,
  stylesTransform: p,
}) {
  const {
    colorScheme: g,
    setColorScheme: b,
    clearColorScheme: w,
  } = rE({
    defaultColorScheme: u,
    forceColorScheme: m,
    manager: c,
    getRootElement: d,
  });
  return (
    oE({
      respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
      getRootElement: d,
    }),
    h.jsx(l0.Provider, {
      value: {
        colorScheme: g,
        setColorScheme: b,
        clearColorScheme: w,
        getRootElement: d,
        classNamesPrefix: a,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: l,
        withStaticClasses: r,
        stylesTransform: p,
      },
      children: h.jsxs(a0, {
        theme: e,
        children: [
          i &&
            h.jsx(d0, { cssVariablesSelector: l, deduplicateCssVariables: s }),
          o && h.jsx(XC, {}),
          t,
        ],
      }),
    })
  );
}
f0.displayName = "@mantine/core/MantineProvider";
function oo({ classNames: e, styles: t, props: n, stylesCtx: r }) {
  const o = fn();
  return {
    resolvedClassNames: Ra({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0,
    }),
    resolvedStyles: ql({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0,
    }),
  };
}
const sE = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function iE({ theme: e, options: t, unstyled: n }) {
  return ft(
    (t == null ? void 0 : t.focusable) &&
      !n &&
      (e.focusClassName || sE[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function lE({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
  return Ra({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t,
  })[e];
}
function ph({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
  return Ra({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function aE({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function cE({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function uE({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function dE({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
  return e.map((s) => {
    var i, l;
    return (l = Ra({
      theme: t,
      classNames: (i = t.components[s]) == null ? void 0 : i.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : l[n];
  });
}
function fE({ options: e, classes: t, selector: n, unstyled: r }) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function pE({
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
    iE({ theme: e, options: t, unstyled: l || m }),
    dE({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    fE({ options: t, classes: i, selector: r, unstyled: l }),
    ph({ selector: r, stylesCtx: d, theme: e, classNames: s, props: u }),
    ph({ selector: r, stylesCtx: d, theme: e, classNames: p, props: u }),
    lE({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    aE({ rootSelector: c, selector: r, className: a }),
    cE({ selector: r, classes: i, unstyled: l || m }),
    f &&
      !m &&
      uE({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: t == null ? void 0 : t.withStaticClass,
      }),
    t == null ? void 0 : t.className
  );
}
function mE({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
  return t
    .map((s) => {
      var i;
      return ql({
        theme: e,
        styles: (i = e.components[s]) == null ? void 0 : i.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((s, i) => ({ ...s, ...i }), {});
}
function td({ style: e, theme: t }) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...td({ style: r, theme: t }) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function hE(e) {
  return e.reduce(
    (t, n) => (
      n &&
        Object.keys(n).forEach((r) => {
          t[r] = { ...t[r], ..._a(n[r]) };
        }),
      t
    ),
    {}
  );
}
function gE({
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
  return (a = hE([
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
function yE({
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
      mE({ theme: e, themeName: t, props: o, stylesCtx: s, selector: n })),
    ...(!f && ql({ theme: e, styles: l, props: o, stylesCtx: s })[n]),
    ...(!f &&
      ql({
        theme: e,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || o,
        stylesCtx: s,
      })[n]),
    ...gE({
      theme: e,
      props: o,
      stylesCtx: s,
      vars: c,
      varsResolver: u,
      selector: n,
      themeName: t,
      headless: d,
    }),
    ...(i === n ? td({ style: a, theme: e }) : null),
    ...td({ style: r == null ? void 0 : r.style, theme: e }),
  };
}
function vE({ props: e, stylesCtx: t, themeName: n }) {
  var i;
  const r = fn(),
    o = (i = FC()) == null ? void 0 : i();
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
function ae({
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
  const f = fn(),
    m = OC(),
    p = $C(),
    g = LC(),
    b = (Array.isArray(e) ? e : [e]).filter((v) => v),
    { withStylesTransform: w, getTransformedStyles: y } = vE({
      props: n,
      stylesCtx: r,
      themeName: b,
    });
  return (v, S) => ({
    className: pE({
      theme: f,
      options: S,
      themeName: b,
      selector: v,
      classNamesPrefix: m,
      classNames: a,
      classes: t,
      unstyled: l,
      className: o,
      rootSelector: i,
      props: n,
      stylesCtx: r,
      withStaticClasses: p,
      headless: g,
      transformedStyles: y([S == null ? void 0 : S.styles, c]),
    }),
    style: yE({
      theme: f,
      themeName: b,
      selector: v,
      options: S,
      props: n,
      stylesCtx: r,
      rootSelector: i,
      styles: c,
      style: s,
      vars: u,
      varsResolver: d,
      headless: g,
      withStylesTransform: w,
    }),
  });
}
function wE(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function W(e, t, n) {
  var i;
  const r = fn(),
    o = (i = r.components[e]) == null ? void 0 : i.defaultProps,
    s = typeof o == "function" ? o(r) : o;
  return { ...t, ...s, ..._a(n) };
}
function mh(e) {
  return Rn(e)
    .reduce((t, n) => (e[n] !== void 0 ? `${t}${lC(n)}:${e[n]};` : t), "")
    .trim();
}
function xE({ selector: e, styles: t, media: n }) {
  const r = t ? mh(t) : "",
    o = Array.isArray(n)
      ? n.map((s) => `@media${s.query}{${e}{${mh(s.styles)}}}`)
      : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function p0({ selector: e, styles: t, media: n }) {
  const r = _f();
  return h.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: r == null ? void 0 : r(),
    dangerouslySetInnerHTML: {
      __html: xE({ selector: e, styles: t, media: n }),
    },
  });
}
function os(e) {
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
    pl: g,
    pr: b,
    pe: w,
    ps: y,
    bg: v,
    c: S,
    opacity: C,
    ff: E,
    fz: k,
    fw: D,
    lts: L,
    ta: N,
    lh: F,
    fs: B,
    tt: V,
    td: A,
    w: O,
    miw: P,
    maw: T,
    h: R,
    mih: _,
    mah: $,
    bgsz: j,
    bgp: I,
    bgr: q,
    bga: Q,
    pos: ee,
    top: ne,
    left: te,
    bottom: me,
    right: oe,
    inset: le,
    display: J,
    flex: he,
    hiddenFrom: ce,
    visibleFrom: se,
    lightHidden: Re,
    darkHidden: Ie,
    sx: ve,
    ...Ge
  } = e;
  return {
    styleProps: _a({
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
      pl: g,
      pr: b,
      pe: w,
      ps: y,
      bg: v,
      c: S,
      opacity: C,
      ff: E,
      fz: k,
      fw: D,
      lts: L,
      ta: N,
      lh: F,
      fs: B,
      tt: V,
      td: A,
      w: O,
      miw: P,
      maw: T,
      h: R,
      mih: _,
      mah: $,
      bgsz: j,
      bgp: I,
      bgr: q,
      bga: Q,
      pos: ee,
      top: ne,
      left: te,
      bottom: me,
      right: oe,
      inset: le,
      display: J,
      flex: he,
      hiddenFrom: ce,
      visibleFrom: se,
      lightHidden: Re,
      darkHidden: Ie,
      sx: ve,
    }),
    rest: Ge,
  };
}
const bE = {
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
function m0(e, t) {
  const n = rs({ color: e, theme: t });
  return n.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : n.color === "bright"
    ? "var(--mantine-color-bright)"
    : n.variable
    ? `var(${n.variable})`
    : n.color;
}
function SE(e, t) {
  const n = rs({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : m0(e, t);
}
const hh = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function CE(e) {
  return typeof e == "string" && e in hh ? hh[e] : e;
}
const EE = ["h1", "h2", "h3", "h4", "h5", "h6"];
function _E(e, t) {
  return typeof e == "string" && e in t.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == "string" && EE.includes(e)
    ? `var(--mantine-${e}-font-size)`
    : typeof e == "number" || typeof e == "string"
    ? z(e)
    : e;
}
function kE(e) {
  return e;
}
const RE = ["h1", "h2", "h3", "h4", "h5", "h6"];
function DE(e, t) {
  return typeof e == "string" && e in t.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == "string" && RE.includes(e)
    ? `var(--mantine-${e}-line-height)`
    : e;
}
function PE(e) {
  return typeof e == "number" ? z(e) : e;
}
function NE(e, t) {
  if (typeof e == "number") return z(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing)) return z(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const Xc = {
  color: m0,
  textColor: SE,
  fontSize: _E,
  spacing: NE,
  identity: kE,
  size: PE,
  lineHeight: DE,
  fontFamily: CE,
};
function gh(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function TE({ media: e, ...t }) {
  const r = Object.keys(e)
    .sort((o, s) => Number(gh(o)) - Number(gh(s)))
    .map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function jE(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function OE(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function $E(e) {
  return typeof e == "object" && e !== null
    ? Rn(e).filter((t) => t !== "base")
    : [];
}
function LE(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function h0({ styleProps: e, data: t, theme: n }) {
  return TE(
    Rn(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
        const s = t[o],
          i = Array.isArray(s.property) ? s.property : [s.property],
          l = OE(e[o]);
        if (!jE(e[o]))
          return (
            i.forEach((c) => {
              r.inlineStyles[c] = Xc[s.type](l, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const a = $E(e[o]);
        return (
          i.forEach((c) => {
            l && (r.styles[c] = Xc[s.type](l, n)),
              a.forEach((u) => {
                const d = `(min-width: ${n.breakpoints[u]})`;
                r.media[d] = { ...r.media[d], [c]: Xc[s.type](LE(e[o], u), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
    )
  );
}
function g0() {
  return `__m__-${x.useId().replace(/:/g, "")}`;
}
function y0(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...y0(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function v0(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function AE(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (t[v0(n)] = e[n]), t
    );
  }, {});
}
function w0(e) {
  return e
    ? typeof e == "string"
      ? { [v0(e)]: !0 }
      : Array.isArray(e)
      ? [...e].reduce((t, n) => ({ ...t, ...w0(n) }), {})
      : AE(e)
    : null;
}
function nd(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...nd(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function FE({ theme: e, style: t, vars: n, styleProps: r }) {
  const o = nd(t, e),
    s = nd(n, e);
  return { ...o, ...s, ...r };
}
const x0 = x.forwardRef(
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
    var k;
    const p = fn(),
      g = e || "div",
      { styleProps: b, rest: w } = os(f),
      y = AC(),
      v = (k = y == null ? void 0 : y()) == null ? void 0 : k(b.sx),
      S = g0(),
      C = h0({ styleProps: b, theme: p, data: bE }),
      E = {
        ref: m,
        style: FE({ theme: p, style: t, vars: n, styleProps: C.inlineStyles }),
        className: ft(r, v, {
          [S]: C.hasResponsiveStyles,
          "mantine-light-hidden": c,
          "mantine-dark-hidden": u,
          [`mantine-hidden-from-${l}`]: l,
          [`mantine-visible-from-${a}`]: a,
        }),
        "data-variant": o,
        "data-size": Zv(i) ? void 0 : i || void 0,
        ...w0(s),
        ...w,
      };
    return h.jsxs(h.Fragment, {
      children: [
        C.hasResponsiveStyles &&
          h.jsx(p0, { selector: `.${S}`, styles: C.styles, media: C.media }),
        typeof d == "function" ? d(E) : h.jsx(g, { ...E }),
      ],
    });
  }
);
x0.displayName = "@mantine/core/Box";
const G = x0;
function b0(e) {
  return e;
}
function K(e) {
  const t = x.forwardRef(e);
  return (t.extend = b0), t;
}
function Pn(e) {
  const t = x.forwardRef(e);
  return (t.extend = b0), t;
}
const ME = x.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function Pf() {
  return x.useContext(ME);
}
function IE(e) {
  if (!e || typeof e == "string") return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Qc(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const ks = typeof window < "u" && window.requestAnimationFrame;
function zE({
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
      wi.flushSync(() => a(p));
    },
    u = (p) => {
      c((g) => ({ ...g, ...p }));
    };
  function d(p) {
    const g = e || IE(p);
    return { transition: `height ${g}ms ${t}, opacity ${g}ms ${t}` };
  }
  Gr(() => {
    typeof ks == "function" &&
      ks(
        r
          ? () => {
              u({ willChange: "height", display: "block", overflow: "hidden" }),
                ks(() => {
                  const p = Qc(o);
                  u({ ...d(p), height: p });
                });
            }
          : () => {
              const p = Qc(o);
              u({ ...d(p), willChange: "height", height: p }),
                ks(() => u({ height: s, overflow: "hidden" }));
            }
      );
  }, [r]);
  const f = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (r) {
        const g = Qc(o);
        g === l.height ? c({}) : u({ height: g }), n();
      } else l.height === s && (c(i), n());
  };
  function m({ style: p = {}, refKey: g = "ref", ...b } = {}) {
    const w = b[g];
    return {
      "aria-hidden": !r,
      ...b,
      [g]: s0(o, w),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...p, ...l },
    };
  }
  return m;
}
const BE = {
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    animateOpacity: !0,
  },
  Nf = K((e, t) => {
    const {
        children: n,
        in: r,
        transitionDuration: o,
        transitionTimingFunction: s,
        style: i,
        onTransitionEnd: l,
        animateOpacity: a,
        ...c
      } = W("Collapse", BE, e),
      u = fn(),
      d = Ef(),
      m = (u.respectReducedMotion ? d : !1) ? 0 : o,
      p = zE({
        opened: r,
        transitionDuration: m,
        transitionTimingFunction: s,
        onTransitionEnd: l,
      });
    return m === 0
      ? r
        ? h.jsx(G, { ...c, children: n })
        : null
      : h.jsx(G, {
          ...p({
            style: {
              opacity: r || !a ? 1 : 0,
              transition: a ? `opacity ${m}ms ${s}` : "none",
              ...y0(i, u),
            },
            ref: t,
            ...c,
          }),
          children: n,
        });
  });
Nf.displayName = "@mantine/core/Collapse";
const [VE, qt] = Yn("ScrollArea.Root component was not found in tree");
function qo(e, t) {
  const n = Or(t);
  bi(() => {
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
const HE = x.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = qt(),
      [s, i] = x.useState(0),
      [l, a] = x.useState(0),
      c = !!(s && l);
    return (
      qo(o.scrollbarX, () => {
        var d;
        const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
        o.onCornerHeightChange(u), a(u);
      }),
      qo(o.scrollbarY, () => {
        var d;
        const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
        o.onCornerWidthChange(u), i(u);
      }),
      c
        ? h.jsx("div", { ...r, ref: t, style: { ...n, width: s, height: l } })
        : null
    );
  }),
  UE = x.forwardRef((e, t) => {
    const n = qt(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? h.jsx(HE, { ...e, ref: t }) : null;
  }),
  WE = { scrollHideDelay: 1e3, type: "hover" },
  S0 = x.forwardRef((e, t) => {
    const n = W("ScrollAreaRoot", WE, e),
      { type: r, scrollHideDelay: o, scrollbars: s, ...i } = n,
      [l, a] = x.useState(null),
      [c, u] = x.useState(null),
      [d, f] = x.useState(null),
      [m, p] = x.useState(null),
      [g, b] = x.useState(null),
      [w, y] = x.useState(0),
      [v, S] = x.useState(0),
      [C, E] = x.useState(!1),
      [k, D] = x.useState(!1),
      L = Mt(t, (N) => a(N));
    return h.jsx(VE, {
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
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: k,
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: y,
        onCornerHeightChange: S,
      },
      children: h.jsx(G, {
        ...i,
        ref: L,
        __vars: {
          "--sa-corner-width": s !== "xy" ? "0px" : `${w}px`,
          "--sa-corner-height": s !== "xy" ? "0px" : `${v}px`,
        },
      }),
    });
  });
S0.displayName = "@mantine/core/ScrollAreaRoot";
function C0(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Da(e) {
  const t = C0(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function E0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function YE(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function yh(e, t, n = "ltr") {
  const r = Da(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - o,
    i = t.content - t.viewport,
    l = s - r,
    a = n === "ltr" ? [0, i] : [i * -1, 0],
    c = YE(e, a);
  return E0([0, i], [0, l])(c);
}
function qE(e, t, n, r = "ltr") {
  const o = Da(n),
    s = o / 2,
    i = t || s,
    l = o - i,
    a = n.scrollbar.paddingStart + i,
    c = n.scrollbar.size - n.scrollbar.paddingEnd - l,
    u = n.content - n.viewport,
    d = r === "ltr" ? [0, u] : [u * -1, 0];
  return E0([a, c], d)(e);
}
function _0(e, t) {
  return e > 0 && e < t;
}
function Gl(e) {
  return e ? parseInt(e, 10) : 0;
}
function zr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [GE, k0] = Yn("ScrollAreaScrollbar was not found in tree"),
  R0 = x.forwardRef((e, t) => {
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
      g = Mt(t, (D) => p(D)),
      b = x.useRef(null),
      w = x.useRef(""),
      { viewport: y } = f,
      v = n.content - n.viewport,
      S = Or(c),
      C = Or(l),
      E = ka(u, 10),
      k = (D) => {
        if (b.current) {
          const L = D.clientX - b.current.left,
            N = D.clientY - b.current.top;
          a({ x: L, y: N });
        }
      };
    return (
      x.useEffect(() => {
        const D = (L) => {
          const N = L.target;
          (m == null ? void 0 : m.contains(N)) && S(L, v);
        };
        return (
          document.addEventListener("wheel", D, { passive: !1 }),
          () => document.removeEventListener("wheel", D, { passive: !1 })
        );
      }, [y, m, v, S]),
      x.useEffect(C, [n, C]),
      qo(m, E),
      qo(f.content, E),
      h.jsx(GE, {
        value: {
          scrollbar: m,
          hasThumb: r,
          onThumbChange: Or(o),
          onThumbPointerUp: Or(s),
          onThumbPositionChange: C,
          onThumbPointerDown: Or(i),
        },
        children: h.jsx("div", {
          ...d,
          ref: g,
          style: { position: "absolute", ...d.style },
          onPointerDown: zr(e.onPointerDown, (D) => {
            D.button === 0 &&
              (D.target.setPointerCapture(D.pointerId),
              (b.current = m.getBoundingClientRect()),
              (w.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              k(D));
          }),
          onPointerMove: zr(e.onPointerMove, k),
          onPointerUp: zr(e.onPointerUp, (D) => {
            const L = D.target;
            L.hasPointerCapture(D.pointerId) &&
              L.releasePointerCapture(D.pointerId),
              (document.body.style.webkitUserSelect = w.current),
              (b.current = null);
          }),
        }),
      })
    );
  }),
  KE = x.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = qt(),
      [l, a] = x.useState(),
      c = x.useRef(null),
      u = Mt(t, c, i.onScrollbarXChange);
    return (
      x.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      h.jsx(R0, {
        "data-orientation": "horizontal",
        ...s,
        ref: u,
        sizes: n,
        style: { ...o, "--sa-thumb-width": `${Da(n)}px` },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const m = i.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(m), _0(m, f) && d.preventDefault();
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
                paddingStart: Gl(l.paddingLeft),
                paddingEnd: Gl(l.paddingRight),
              },
            });
        },
      })
    );
  }),
  XE = x.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = qt(),
      [l, a] = x.useState(),
      c = x.useRef(null),
      u = Mt(t, c, i.onScrollbarYChange);
    return (
      x.useEffect(() => {
        c.current && a(getComputedStyle(c.current));
      }, [c]),
      h.jsx(R0, {
        ...s,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: { "--sa-thumb-height": `${Da(n)}px`, ...o },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const m = i.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(m), _0(m, f) && d.preventDefault();
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
                paddingStart: Gl(l.paddingTop),
                paddingEnd: Gl(l.paddingBottom),
              },
            });
        },
      })
    );
  }),
  Tf = x.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      { dir: o } = Pf(),
      s = qt(),
      i = x.useRef(null),
      l = x.useRef(0),
      [a, c] = x.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = C0(a.viewport, a.content),
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
      f = (m, p) => qE(m, l.current, a, p);
    return n === "horizontal"
      ? h.jsx(KE, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const m = s.viewport.scrollLeft,
                p = yh(m, a, o);
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
      ? h.jsx(XE, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const m = s.viewport.scrollTop,
                p = yh(m, a);
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
  D0 = x.forwardRef((e, t) => {
    const n = qt(),
      { forceMount: r, ...o } = e,
      [s, i] = x.useState(!1),
      l = e.orientation === "horizontal",
      a = ka(() => {
        if (n.viewport) {
          const c = n.viewport.offsetWidth < n.viewport.scrollWidth,
            u = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(l ? c : u);
        }
      }, 10);
    return (
      qo(n.viewport, a),
      qo(n.content, a),
      r || s
        ? h.jsx(Tf, { "data-state": s ? "visible" : "hidden", ...o, ref: t })
        : null
    );
  }),
  QE = x.forwardRef((e, t) => {
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
        ? h.jsx(D0, { "data-state": s ? "visible" : "hidden", ...r, ref: t })
        : null
    );
  }),
  ZE = x.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = qt(),
      s = e.orientation === "horizontal",
      [i, l] = x.useState("hidden"),
      a = ka(() => l("idle"), 100);
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
        ? h.jsx(Tf, {
            "data-state": i === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: zr(e.onPointerEnter, () => l("interacting")),
            onPointerLeave: zr(e.onPointerLeave, () => l("idle")),
          })
        : null
    );
  }),
  vh = x.forwardRef((e, t) => {
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
        ? h.jsx(QE, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
        ? h.jsx(ZE, { ...r, ref: t, forceMount: n })
        : o.type === "auto"
        ? h.jsx(D0, { ...r, ref: t, forceMount: n })
        : o.type === "always"
        ? h.jsx(Tf, { ...r, ref: t })
        : null
    );
  });
function JE(e, t = () => {}) {
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
const e_ = x.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = qt(),
      s = k0(),
      { onThumbPositionChange: i } = s,
      l = Mt(t, (u) => s.onThumbChange(u)),
      a = x.useRef(),
      c = ka(() => {
        a.current && (a.current(), (a.current = void 0));
      }, 100);
    return (
      x.useEffect(() => {
        const { viewport: u } = o;
        if (u) {
          const d = () => {
            if ((c(), !a.current)) {
              const f = JE(u, i);
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
      h.jsx("div", {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--sa-thumb-width)",
          height: "var(--sa-thumb-height)",
          ...n,
        },
        onPointerDownCapture: zr(e.onPointerDownCapture, (u) => {
          const f = u.target.getBoundingClientRect(),
            m = u.clientX - f.left,
            p = u.clientY - f.top;
          s.onThumbPointerDown({ x: m, y: p });
        }),
        onPointerUp: zr(e.onPointerUp, s.onThumbPointerUp),
      })
    );
  }),
  wh = x.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = k0();
    return n || o.hasThumb ? h.jsx(e_, { ref: t, ...r }) : null;
  }),
  P0 = x.forwardRef(({ children: e, style: t, ...n }, r) => {
    const o = qt(),
      s = Mt(r, o.onViewportChange);
    return h.jsx(G, {
      ...n,
      ref: s,
      style: {
        overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
        ...t,
      },
      children: h.jsx("div", {
        style: { minWidth: "100%", display: "table" },
        ref: o.onContentChange,
        children: e,
      }),
    });
  });
P0.displayName = "@mantine/core/ScrollAreaViewport";
var jf = {
  root: "m_d57069b5",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
const N0 = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  t_ = (e, { scrollbarSize: t }) => ({
    root: { "--scrollarea-scrollbar-size": z(t) },
  }),
  Si = K((e, t) => {
    const n = W("ScrollArea", N0, e),
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
        children: g,
        offsetScrollbars: b,
        scrollbars: w,
        ...y
      } = n,
      [v, S] = x.useState(!1),
      C = ae({
        name: "ScrollArea",
        props: n,
        classes: jf,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: t_,
      });
    return h.jsxs(S0, {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: w,
      ...C("root"),
      ...y,
      children: [
        h.jsx(P0, {
          ...f,
          ...C("viewport", { style: f == null ? void 0 : f.style }),
          ref: m,
          "data-offset-scrollbars": b === !0 ? "xy" : b || void 0,
          "data-scrollbars": w || void 0,
          onScroll: (E) => {
            var k;
            (k = f == null ? void 0 : f.onScroll) == null || k.call(f, E),
              p == null ||
                p({
                  x: E.currentTarget.scrollLeft,
                  y: E.currentTarget.scrollTop,
                });
          },
          children: g,
        }),
        (w === "xy" || w === "x") &&
          h.jsx(vh, {
            ...C("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            children: h.jsx(wh, { ...C("thumb") }),
          }),
        (w === "xy" || w === "y") &&
          h.jsx(vh, {
            ...C("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            children: h.jsx(wh, { ...C("thumb") }),
          }),
        h.jsx(UE, {
          ...C("corner"),
          "data-hovered": v || void 0,
          "data-hidden": u === "never" || void 0,
        }),
      ],
    });
  });
Si.displayName = "@mantine/core/ScrollArea";
const Of = K((e, t) => {
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
    scrollbars: g,
    style: b,
    vars: w,
    ...y
  } = W("ScrollAreaAutosize", N0, e);
  return h.jsx(G, {
    ...y,
    ref: t,
    style: [{ display: "flex", overflow: "auto" }, b],
    children: h.jsx(G, {
      style: { display: "flex", flexDirection: "column", flex: 1 },
      children: h.jsx(Si, {
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
        vars: w,
        scrollbars: g,
        children: n,
      }),
    }),
  });
});
Si.classes = jf;
Of.displayName = "@mantine/core/ScrollAreaAutosize";
Of.classes = jf;
Si.Autosize = Of;
var T0 = { root: "m_87cf2631" };
const n_ = { __staticSelector: "UnstyledButton" },
  In = Pn((e, t) => {
    const n = W("UnstyledButton", n_, e),
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
      d = ae({
        name: s,
        props: n,
        classes: T0,
        className: r,
        style: c,
        classNames: l,
        styles: a,
        unstyled: i,
      });
    return h.jsx(G, {
      ...d("root", { focusable: !0 }),
      component: o,
      ref: t,
      type: o === "button" ? "button" : void 0,
      ...u,
    });
  });
In.classes = T0;
In.displayName = "@mantine/core/UnstyledButton";
var j0 = { root: "m_515a97f8" };
const r_ = {},
  $f = K((e, t) => {
    const n = W("VisuallyHidden", r_, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: l,
        vars: a,
        ...c
      } = n,
      u = ae({
        name: "VisuallyHidden",
        classes: j0,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
      });
    return h.jsx(G, { component: "span", ref: t, ...u("root"), ...c });
  });
$f.classes = j0;
$f.displayName = "@mantine/core/VisuallyHidden";
var O0 = { root: "m_1b7284a3" };
const o_ = {},
  s_ = (e, { radius: t, shadow: n }) => ({
    root: {
      "--paper-radius": t === void 0 ? void 0 : dn(t),
      "--paper-shadow": Sf(n),
    },
  }),
  Lf = Pn((e, t) => {
    const n = W("Paper", o_, e),
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
      g = ae({
        name: "Paper",
        props: n,
        classes: O0,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: s_,
      });
    return h.jsx(G, {
      ref: t,
      mod: [{ "data-with-border": a }, m],
      ...g("root"),
      variant: f,
      ...p,
    });
  });
Lf.classes = O0;
Lf.displayName = "@mantine/core/Paper";
function ss(e) {
  return $0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function qn(e) {
  var t;
  return (t = ($0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function $0(e) {
  return e instanceof Node || e instanceof $t(e).Node;
}
function St(e) {
  return e instanceof Element || e instanceof $t(e).Element;
}
function Dn(e) {
  return e instanceof HTMLElement || e instanceof $t(e).HTMLElement;
}
function xh(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
function Ci(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = an(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function i_(e) {
  return ["table", "td", "th"].includes(ss(e));
}
function Af(e) {
  const t = Ff(),
    n = an(e);
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
function l_(e) {
  let t = wr(e);
  for (; Dn(t) && !Go(t); ) {
    if (Af(t)) return t;
    t = wr(t);
  }
  return null;
}
function Ff() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Go(e) {
  return ["html", "body", "#document"].includes(ss(e));
}
function an(e) {
  return $t(e).getComputedStyle(e);
}
function Pa(e) {
  return St(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function wr(e) {
  if (ss(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (xh(e) && e.host) || qn(e);
  return xh(t) ? t.host : t;
}
function L0(e) {
  const t = wr(e);
  return Go(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Dn(t) && Ci(t)
    ? t
    : L0(t);
}
function ci(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = L0(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = $t(o);
  return s
    ? t.concat(
        i,
        i.visualViewport || [],
        Ci(o) ? o : [],
        i.frameElement && n ? ci(i.frameElement) : []
      )
    : t.concat(o, ci(o, [], n));
}
const cn = Math.min,
  ot = Math.max,
  Kl = Math.round,
  Zi = Math.floor,
  xr = (e) => ({ x: e, y: e }),
  a_ = { left: "right", right: "left", bottom: "top", top: "bottom" },
  c_ = { start: "end", end: "start" };
function rd(e, t, n) {
  return ot(e, cn(t, n));
}
function Un(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function un(e) {
  return e.split("-")[0];
}
function is(e) {
  return e.split("-")[1];
}
function Mf(e) {
  return e === "x" ? "y" : "x";
}
function If(e) {
  return e === "y" ? "height" : "width";
}
function so(e) {
  return ["top", "bottom"].includes(un(e)) ? "y" : "x";
}
function zf(e) {
  return Mf(so(e));
}
function u_(e, t, n) {
  n === void 0 && (n = !1);
  const r = is(e),
    o = zf(e),
    s = If(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = Xl(i)), [i, Xl(i)];
}
function d_(e) {
  const t = Xl(e);
  return [od(e), t, od(t)];
}
function od(e) {
  return e.replace(/start|end/g, (t) => c_[t]);
}
function f_(e, t, n) {
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
function p_(e, t, n, r) {
  const o = is(e);
  let s = f_(un(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(od)))), s
  );
}
function Xl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => a_[t]);
}
function m_(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Bf(e) {
  return typeof e != "number"
    ? m_(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ko(e) {
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
function bh(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = so(t),
    i = zf(t),
    l = If(i),
    a = un(t),
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
  switch (is(t)) {
    case "start":
      m[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const h_ = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: d } = bh(c, r, a),
    f = r,
    m = {},
    p = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: b, fn: w } = l[g],
      {
        x: y,
        y: v,
        data: S,
        reset: C,
      } = await w({
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
    (u = y ?? u),
      (d = v ?? d),
      (m = { ...m, [b]: { ...m[b], ...S } }),
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
          ({ x: u, y: d } = bh(c, f, a))),
        (g = -1));
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: m };
};
async function Vf(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = Un(t, e),
    p = Bf(m),
    b = l[f ? (d === "floating" ? "reference" : "floating") : d],
    w = Ko(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
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
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    S = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Ko(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: y,
            offsetParent: v,
            strategy: a,
          })
        : y
    );
  return {
    top: (w.top - C.top + p.top) / S.y,
    bottom: (C.bottom - w.bottom + p.bottom) / S.y,
    left: (w.left - C.left + p.left) / S.x,
    right: (C.right - w.right + p.right) / S.x,
  };
}
const g_ = (e) => ({
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
        { element: c, padding: u = 0 } = Un(e, t) || {};
      if (c == null) return {};
      const d = Bf(u),
        f = { x: n, y: r },
        m = zf(o),
        p = If(m),
        g = await i.getDimensions(c),
        b = m === "y",
        w = b ? "top" : "left",
        y = b ? "bottom" : "right",
        v = b ? "clientHeight" : "clientWidth",
        S = s.reference[p] + s.reference[m] - f[m] - s.floating[p],
        C = f[m] - s.reference[m],
        E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let k = E ? E[v] : 0;
      (!k || !(await (i.isElement == null ? void 0 : i.isElement(E)))) &&
        (k = l.floating[v] || s.floating[p]);
      const D = S / 2 - C / 2,
        L = k / 2 - g[p] / 2 - 1,
        N = cn(d[w], L),
        F = cn(d[y], L),
        B = N,
        V = k - g[p] - F,
        A = k / 2 - g[p] / 2 + D,
        O = rd(B, A, V),
        P =
          !a.arrow &&
          is(o) != null &&
          A !== O &&
          s.reference[p] / 2 - (A < B ? N : F) - g[p] / 2 < 0,
        T = P ? (A < B ? A - B : A - V) : 0;
      return {
        [m]: f[m] + T,
        data: {
          [m]: O,
          centerOffset: A - O - T,
          ...(P && { alignmentOffset: T }),
        },
        reset: P,
      };
    },
  }),
  y_ = function (e) {
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
              flipAlignment: g = !0,
              ...b
            } = Un(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const w = un(o),
            y = un(l) === l,
            v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
            S = f || (y || !g ? [Xl(l)] : d_(l));
          !f && p !== "none" && S.push(...p_(l, g, p, v));
          const C = [l, ...S],
            E = await Vf(t, b),
            k = [];
          let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((u && k.push(E[w]), d)) {
            const B = u_(o, i, v);
            k.push(E[B[0]], E[B[1]]);
          }
          if (
            ((D = [...D, { placement: o, overflows: k }]),
            !k.every((B) => B <= 0))
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
              (N = D.filter((O) => O.overflows[0] <= 0).sort(
                (O, P) => O.overflows[1] - P.overflows[1]
              )[0]) == null
                ? void 0
                : N.placement;
            if (!A)
              switch (m) {
                case "bestFit": {
                  var F;
                  const O =
                    (F = D.map((P) => [
                      P.placement,
                      P.overflows
                        .filter((T) => T > 0)
                        .reduce((T, R) => T + R, 0),
                    ]).sort((P, T) => P[1] - T[1])[0]) == null
                      ? void 0
                      : F[0];
                  O && (A = O);
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
function A0(e) {
  const t = cn(...e.map((s) => s.left)),
    n = cn(...e.map((s) => s.top)),
    r = ot(...e.map((s) => s.right)),
    o = ot(...e.map((s) => s.bottom));
  return { x: t, y: n, width: r - t, height: o - n };
}
function v_(e) {
  const t = e.slice().sort((o, s) => o.y - s.y),
    n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    !r || s.y - r.y > r.height / 2 ? n.push([s]) : n[n.length - 1].push(s),
      (r = s);
  }
  return n.map((o) => Ko(A0(o)));
}
const w_ = function (e) {
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
          { padding: l = 2, x: a, y: c } = Un(e, t),
          u = Array.from(
            (await (s.getClientRects == null
              ? void 0
              : s.getClientRects(r.reference))) || []
          ),
          d = v_(u),
          f = Ko(A0(u)),
          m = Bf(l);
        function p() {
          if (
            d.length === 2 &&
            d[0].left > d[1].right &&
            a != null &&
            c != null
          )
            return (
              d.find(
                (b) =>
                  a > b.left - m.left &&
                  a < b.right + m.right &&
                  c > b.top - m.top &&
                  c < b.bottom + m.bottom
              ) || f
            );
          if (d.length >= 2) {
            if (so(n) === "y") {
              const N = d[0],
                F = d[d.length - 1],
                B = un(n) === "top",
                V = N.top,
                A = F.bottom,
                O = B ? N.left : F.left,
                P = B ? N.right : F.right,
                T = P - O,
                R = A - V;
              return {
                top: V,
                bottom: A,
                left: O,
                right: P,
                width: T,
                height: R,
                x: O,
                y: V,
              };
            }
            const b = un(n) === "left",
              w = ot(...d.map((N) => N.right)),
              y = cn(...d.map((N) => N.left)),
              v = d.filter((N) => (b ? N.left === y : N.right === w)),
              S = v[0].top,
              C = v[v.length - 1].bottom,
              E = y,
              k = w,
              D = k - E,
              L = C - S;
            return {
              top: S,
              bottom: C,
              left: E,
              right: k,
              width: D,
              height: L,
              x: E,
              y: S,
            };
          }
          return f;
        }
        const g = await s.getElementRects({
          reference: { getBoundingClientRect: p },
          floating: r.floating,
          strategy: i,
        });
        return o.reference.x !== g.reference.x ||
          o.reference.y !== g.reference.y ||
          o.reference.width !== g.reference.width ||
          o.reference.height !== g.reference.height
          ? { reset: { rects: g } }
          : {};
      },
    }
  );
};
async function x_(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = un(n),
    l = is(n),
    a = so(n) === "y",
    c = ["left", "top"].includes(i) ? -1 : 1,
    u = s && a ? -1 : 1,
    d = Un(t, e);
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
const b_ = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await x_(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  S_ = function (e) {
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
                fn: (b) => {
                  let { x: w, y } = b;
                  return { x: w, y };
                },
              },
              ...a
            } = Un(e, t),
            c = { x: n, y: r },
            u = await Vf(t, a),
            d = so(un(o)),
            f = Mf(d);
          let m = c[f],
            p = c[d];
          if (s) {
            const b = f === "y" ? "top" : "left",
              w = f === "y" ? "bottom" : "right",
              y = m + u[b],
              v = m - u[w];
            m = rd(y, m, v);
          }
          if (i) {
            const b = d === "y" ? "top" : "left",
              w = d === "y" ? "bottom" : "right",
              y = p + u[b],
              v = p - u[w];
            p = rd(y, p, v);
          }
          const g = l.fn({ ...t, [f]: m, [d]: p });
          return { ...g, data: { x: g.x - n, y: g.y - r } };
        },
      }
    );
  },
  C_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: c = !0 } = Un(e, t),
            u = { x: n, y: r },
            d = so(o),
            f = Mf(d);
          let m = u[f],
            p = u[d];
          const g = Un(l, t),
            b =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (a) {
            const v = f === "y" ? "height" : "width",
              S = s.reference[f] - s.floating[v] + b.mainAxis,
              C = s.reference[f] + s.reference[v] - b.mainAxis;
            m < S ? (m = S) : m > C && (m = C);
          }
          if (c) {
            var w, y;
            const v = f === "y" ? "width" : "height",
              S = ["top", "left"].includes(un(o)),
              C =
                s.reference[d] -
                s.floating[v] +
                ((S && ((w = i.offset) == null ? void 0 : w[d])) || 0) +
                (S ? 0 : b.crossAxis),
              E =
                s.reference[d] +
                s.reference[v] +
                (S ? 0 : ((y = i.offset) == null ? void 0 : y[d]) || 0) -
                (S ? b.crossAxis : 0);
            p < C ? (p = C) : p > E && (p = E);
          }
          return { [f]: m, [d]: p };
        },
      }
    );
  },
  E_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...l } = Un(e, t),
            a = await Vf(t, l),
            c = un(n),
            u = is(n),
            d = so(n) === "y",
            { width: f, height: m } = r.floating;
          let p, g;
          c === "top" || c === "bottom"
            ? ((p = c),
              (g =
                u ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = c), (p = u === "end" ? "top" : "bottom"));
          const b = m - a[p],
            w = f - a[g],
            y = !t.middlewareData.shift;
          let v = b,
            S = w;
          if (d) {
            const E = f - a.left - a.right;
            S = u || y ? cn(w, E) : E;
          } else {
            const E = m - a.top - a.bottom;
            v = u || y ? cn(b, E) : E;
          }
          if (y && !u) {
            const E = ot(a.left, 0),
              k = ot(a.right, 0),
              D = ot(a.top, 0),
              L = ot(a.bottom, 0);
            d
              ? (S = f - 2 * (E !== 0 || k !== 0 ? E + k : ot(a.left, a.right)))
              : (v =
                  m - 2 * (D !== 0 || L !== 0 ? D + L : ot(a.top, a.bottom)));
          }
          await i({ ...t, availableWidth: S, availableHeight: v });
          const C = await o.getDimensions(s.floating);
          return f !== C.width || m !== C.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function F0(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Dn(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Kl(n) !== s || Kl(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function Hf(e) {
  return St(e) ? e : e.contextElement;
}
function Ao(e) {
  const t = Hf(e);
  if (!Dn(t)) return xr(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = F0(t);
  let i = (s ? Kl(n.width) : n.width) / r,
    l = (s ? Kl(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const __ = xr(0);
function M0(e) {
  const t = $t(e);
  return !Ff() || !t.visualViewport
    ? __
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function k_(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== $t(e)) ? !1 : t;
}
function Kr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = Hf(e);
  let i = xr(1);
  t && (r ? St(r) && (i = Ao(r)) : (i = Ao(e)));
  const l = k_(s, n, r) ? M0(s) : xr(0);
  let a = (o.left + l.x) / i.x,
    c = (o.top + l.y) / i.y,
    u = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const f = $t(s),
      m = r && St(r) ? $t(r) : r;
    let p = f,
      g = p.frameElement;
    for (; g && r && m !== p; ) {
      const b = Ao(g),
        w = g.getBoundingClientRect(),
        y = an(g),
        v = w.left + (g.clientLeft + parseFloat(y.paddingLeft)) * b.x,
        S = w.top + (g.clientTop + parseFloat(y.paddingTop)) * b.y;
      (a *= b.x),
        (c *= b.y),
        (u *= b.x),
        (d *= b.y),
        (a += v),
        (c += S),
        (p = $t(g)),
        (g = p.frameElement);
    }
  }
  return Ko({ width: u, height: d, x: a, y: c });
}
const R_ = [":popover-open", ":modal"];
function Uf(e) {
  return R_.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function D_(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = qn(r),
    l = t ? Uf(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    c = xr(1);
  const u = xr(0),
    d = Dn(r);
  if (
    (d || (!d && !s)) &&
    ((ss(r) !== "body" || Ci(i)) && (a = Pa(r)), Dn(r))
  ) {
    const f = Kr(r);
    (c = Ao(r)), (u.x = f.x + r.clientLeft), (u.y = f.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y,
  };
}
function P_(e) {
  return Array.from(e.getClientRects());
}
function I0(e) {
  return Kr(qn(e)).left + Pa(e).scrollLeft;
}
function N_(e) {
  const t = qn(e),
    n = Pa(e),
    r = e.ownerDocument.body,
    o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + I0(e);
  const l = -n.scrollTop;
  return (
    an(r).direction === "rtl" && (i += ot(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function T_(e, t) {
  const n = $t(e),
    r = qn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = Ff();
    (!c || (c && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
function j_(e, t) {
  const n = Kr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = Dn(e) ? Ao(e) : xr(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    c = r * s.y;
  return { width: i, height: l, x: a, y: c };
}
function Sh(e, t, n) {
  let r;
  if (t === "viewport") r = T_(e, n);
  else if (t === "document") r = N_(qn(e));
  else if (St(t)) r = j_(t, n);
  else {
    const o = M0(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Ko(r);
}
function z0(e, t) {
  const n = wr(e);
  return n === t || !St(n) || Go(n)
    ? !1
    : an(n).position === "fixed" || z0(n, t);
}
function O_(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ci(e, [], !1).filter((l) => St(l) && ss(l) !== "body"),
    o = null;
  const s = an(e).position === "fixed";
  let i = s ? wr(e) : e;
  for (; St(i) && !Go(i); ) {
    const l = an(i),
      a = Af(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Ci(i) && !a && z0(e, i))
      )
        ? (r = r.filter((u) => u !== i))
        : (o = l),
      (i = wr(i));
  }
  return t.set(e, r), r;
}
function $_(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Uf(t)
          ? []
          : O_(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((c, u) => {
      const d = Sh(t, u, o);
      return (
        (c.top = ot(d.top, c.top)),
        (c.right = cn(d.right, c.right)),
        (c.bottom = cn(d.bottom, c.bottom)),
        (c.left = ot(d.left, c.left)),
        c
      );
    }, Sh(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function L_(e) {
  const { width: t, height: n } = F0(e);
  return { width: t, height: n };
}
function A_(e, t, n) {
  const r = Dn(t),
    o = qn(t),
    s = n === "fixed",
    i = Kr(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = xr(0);
  if (r || (!r && !s))
    if (((ss(t) !== "body" || Ci(o)) && (l = Pa(t)), r)) {
      const d = Kr(t, !0, s, t);
      (a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop);
    } else o && (a.x = I0(o));
  const c = i.left + l.scrollLeft - a.x,
    u = i.top + l.scrollTop - a.y;
  return { x: c, y: u, width: i.width, height: i.height };
}
function Zc(e) {
  return an(e).position === "static";
}
function Ch(e, t) {
  return !Dn(e) || an(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function B0(e, t) {
  const n = $t(e);
  if (Uf(e)) return n;
  if (!Dn(e)) {
    let o = wr(e);
    for (; o && !Go(o); ) {
      if (St(o) && !Zc(o)) return o;
      o = wr(o);
    }
    return n;
  }
  let r = Ch(e, t);
  for (; r && i_(r) && Zc(r); ) r = Ch(r, t);
  return r && Go(r) && Zc(r) && !Af(r) ? n : r || l_(e) || n;
}
const F_ = async function (e) {
  const t = this.getOffsetParent || B0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: A_(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function M_(e) {
  return an(e).direction === "rtl";
}
const I_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: D_,
  getDocumentElement: qn,
  getClippingRect: $_,
  getOffsetParent: B0,
  getElementRects: F_,
  getClientRects: P_,
  getDimensions: L_,
  getScale: Ao,
  isElement: St,
  isRTL: M_,
};
function z_(e, t) {
  let n = null,
    r;
  const o = qn(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const { left: c, top: u, width: d, height: f } = e.getBoundingClientRect();
    if ((l || t(), !d || !f)) return;
    const m = Zi(u),
      p = Zi(o.clientWidth - (c + d)),
      g = Zi(o.clientHeight - (u + f)),
      b = Zi(c),
      y = {
        rootMargin: -m + "px " + -p + "px " + -g + "px " + -b + "px",
        threshold: ot(0, cn(1, a)) || 1,
      };
    let v = !0;
    function S(C) {
      const E = C[0].intersectionRatio;
      if (E !== a) {
        if (!v) return i();
        E
          ? i(!1, E)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      v = !1;
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
function B_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    c = Hf(e),
    u = o || s ? [...(c ? ci(c) : []), ...ci(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, { passive: !0 }),
      s && w.addEventListener("resize", n);
  });
  const d = c && l ? z_(c, n) : null;
  let f = -1,
    m = null;
  i &&
    ((m = new ResizeObserver((w) => {
      let [y] = w;
      y &&
        y.target === c &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var v;
          (v = m) == null || v.observe(t);
        }))),
        n();
    })),
    c && !a && m.observe(c),
    m.observe(t));
  let p,
    g = a ? Kr(e) : null;
  a && b();
  function b() {
    const w = Kr(e);
    g &&
      (w.x !== g.x ||
        w.y !== g.y ||
        w.width !== g.width ||
        w.height !== g.height) &&
      n(),
      (g = w),
      (p = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      var w;
      u.forEach((y) => {
        o && y.removeEventListener("scroll", n),
          s && y.removeEventListener("resize", n);
      }),
        d == null || d(),
        (w = m) == null || w.disconnect(),
        (m = null),
        a && cancelAnimationFrame(p);
    }
  );
}
const V_ = b_,
  H_ = S_,
  Eh = y_,
  U_ = E_,
  _h = g_,
  kh = w_,
  Rh = C_,
  W_ = (e, t, n) => {
    const r = new Map(),
      o = { platform: I_, ...n },
      s = { ...o.platform, _c: r };
    return h_(e, t, { ...o, platform: s });
  },
  Y_ = (e) => {
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
            ? _h({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? _h({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  };
var vl = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Ql(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ql(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Ql(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function V0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dh(e, t) {
  const n = V0(e);
  return Math.round(t * n) / n;
}
function Ph(e) {
  const t = x.useRef(e);
  return (
    vl(() => {
      t.current = e;
    }),
    t
  );
}
function q_(e) {
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
  Ql(f, r) || m(r);
  const [p, g] = x.useState(null),
    [b, w] = x.useState(null),
    y = x.useCallback((T) => {
      T !== E.current && ((E.current = T), g(T));
    }, []),
    v = x.useCallback((T) => {
      T !== k.current && ((k.current = T), w(T));
    }, []),
    S = s || p,
    C = i || b,
    E = x.useRef(null),
    k = x.useRef(null),
    D = x.useRef(u),
    L = a != null,
    N = Ph(a),
    F = Ph(o),
    B = x.useCallback(() => {
      if (!E.current || !k.current) return;
      const T = { placement: t, strategy: n, middleware: f };
      F.current && (T.platform = F.current),
        W_(E.current, k.current, T).then((R) => {
          const _ = { ...R, isPositioned: !0 };
          V.current &&
            !Ql(D.current, _) &&
            ((D.current = _),
            wi.flushSync(() => {
              d(_);
            }));
        });
    }, [f, t, n, F]);
  vl(() => {
    c === !1 &&
      D.current.isPositioned &&
      ((D.current.isPositioned = !1), d((T) => ({ ...T, isPositioned: !1 })));
  }, [c]);
  const V = x.useRef(!1);
  vl(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    []
  ),
    vl(() => {
      if ((S && (E.current = S), C && (k.current = C), S && C)) {
        if (N.current) return N.current(S, C, B);
        B();
      }
    }, [S, C, B, N, L]);
  const A = x.useMemo(
      () => ({ reference: E, floating: k, setReference: y, setFloating: v }),
      [y, v]
    ),
    O = x.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    P = x.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!O.floating) return T;
      const R = Dh(O.floating, u.x),
        _ = Dh(O.floating, u.y);
      return l
        ? {
            ...T,
            transform: "translate(" + R + "px, " + _ + "px)",
            ...(V0(O.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: _ };
    }, [n, l, O.floating, u.x, u.y]);
  return x.useMemo(
    () => ({ ...u, update: B, refs: A, elements: O, floatingStyles: P }),
    [u, B, A, O, P]
  );
}
const H0 = { ...zg },
  G_ = H0.useInsertionEffect,
  K_ = G_ || ((e) => e());
function X_(e) {
  const t = x.useRef(() => {});
  return (
    K_(() => {
      t.current = e;
    }),
    x.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
var sd = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
let Nh = !1,
  Q_ = 0;
const Th = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Q_++;
function Z_() {
  const [e, t] = x.useState(() => (Nh ? Th() : void 0));
  return (
    sd(() => {
      e == null && t(Th());
    }, []),
    x.useEffect(() => {
      Nh = !0;
    }, []),
    e
  );
}
const J_ = H0.useId,
  ek = J_ || Z_;
function tk() {
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
const nk = x.createContext(null),
  rk = x.createContext(null),
  ok = () => {
    var e;
    return ((e = x.useContext(nk)) == null ? void 0 : e.id) || null;
  },
  sk = () => x.useContext(rk);
function ik(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    o = ek(),
    s = x.useRef({}),
    [i] = x.useState(() => tk()),
    l = ok() != null,
    [a, c] = x.useState(r.reference),
    u = X_((m, p, g) => {
      (s.current.openEvent = m ? p : void 0),
        i.emit("openchange", { open: m, event: p, reason: g, nested: l }),
        n == null || n(m, p, g);
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
function lk(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    n = ik({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    o = r.elements,
    [s, i] = x.useState(null),
    [l, a] = x.useState(null),
    u = (o == null ? void 0 : o.reference) || s,
    d = x.useRef(null),
    f = sk();
  sd(() => {
    u && (d.current = u);
  }, [u]);
  const m = q_({ ...e, elements: { ...o, ...(l && { reference: l }) } }),
    p = x.useCallback(
      (v) => {
        const S = St(v)
          ? {
              getBoundingClientRect: () => v.getBoundingClientRect(),
              contextElement: v,
            }
          : v;
        a(S), m.refs.setReference(S);
      },
      [m.refs]
    ),
    g = x.useCallback(
      (v) => {
        (St(v) || v === null) && ((d.current = v), i(v)),
          (St(m.refs.reference.current) ||
            m.refs.reference.current === null ||
            (v !== null && !St(v))) &&
            m.refs.setReference(v);
      },
      [m.refs]
    ),
    b = x.useMemo(
      () => ({
        ...m.refs,
        setReference: g,
        setPositionReference: p,
        domReference: d,
      }),
      [m.refs, g, p]
    ),
    w = x.useMemo(() => ({ ...m.elements, domReference: u }), [m.elements, u]),
    y = x.useMemo(
      () => ({ ...m, ...r, refs: b, elements: w, nodeId: t }),
      [m, b, w, t, r]
    );
  return (
    sd(() => {
      r.dataRef.current.floatingContext = y;
      const v = f == null ? void 0 : f.nodesRef.current.find((S) => S.id === t);
      v && (v.context = y);
    }),
    x.useMemo(() => ({ ...m, context: y, refs: b, elements: w }), [m, b, w, y])
  );
}
function ak(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"),
      o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function jh(e, t, n, r) {
  return e === "center" || r === "center"
    ? { top: t }
    : e === "end"
    ? { bottom: n }
    : e === "start"
    ? { top: n }
    : {};
}
function Oh(e, t, n, r, o) {
  return e === "center" || r === "center"
    ? { left: t }
    : e === "end"
    ? { [o === "ltr" ? "right" : "left"]: n }
    : e === "start"
    ? { [o === "ltr" ? "left" : "right"]: n }
    : {};
}
const ck = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function uk({
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
      [ck[a]]: z(r),
    },
    d = z(-t / 2);
  return a === "left"
    ? {
        ...u,
        ...jh(c, i, n, o),
        right: d,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
      }
    : a === "right"
    ? {
        ...u,
        ...jh(c, i, n, o),
        left: d,
        borderRightColor: "transparent",
        borderTopColor: "transparent",
      }
    : a === "top"
    ? {
        ...u,
        ...Oh(c, s, n, o, l),
        bottom: d,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
      }
    : a === "bottom"
    ? {
        ...u,
        ...Oh(c, s, n, o, l),
        top: d,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
      }
    : {};
}
const U0 = x.forwardRef(
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
    const { dir: d } = Pf();
    return s
      ? h.jsx("div", {
          ...c,
          ref: u,
          style: {
            ...a,
            ...uk({
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
U0.displayName = "@mantine/core/FloatingArrow";
const [dk, W0] = Yn("Popover component was not found in the tree");
function Na({ children: e, active: t = !0, refProp: n = "ref" }) {
  const r = EC(t),
    o = Mt(r, e == null ? void 0 : e.ref);
  return to(e) ? x.cloneElement(e, { [n]: o }) : e;
}
function Y0(e) {
  return h.jsx($f, { tabIndex: -1, "data-autofocus": !0, ...e });
}
Na.displayName = "@mantine/core/FocusTrap";
Y0.displayName = "@mantine/core/FocusTrapInitialFocus";
Na.InitialFocus = Y0;
function fk(e) {
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
const pk = {},
  q0 = x.forwardRef((e, t) => {
    const { children: n, target: r, ...o } = W("Portal", pk, e),
      [s, i] = x.useState(!1),
      l = x.useRef(null);
    return (
      bi(
        () => (
          i(!0),
          (l.current = r
            ? typeof r == "string"
              ? document.querySelector(r)
              : r
            : fk(o)),
          Cf(t, l.current),
          !r && l.current && document.body.appendChild(l.current),
          () => {
            !r && l.current && document.body.removeChild(l.current);
          }
        ),
        [r]
      ),
      !s || !l.current
        ? null
        : wi.createPortal(h.jsx(h.Fragment, { children: n }), l.current)
    );
  });
q0.displayName = "@mantine/core/Portal";
function Ta({ withinPortal: e = !0, children: t, ...n }) {
  return e
    ? h.jsx(q0, { ...n, children: t })
    : h.jsx(h.Fragment, { children: t });
}
Ta.displayName = "@mantine/core/OptionalPortal";
const Rs = (e) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${z(e === "bottom" ? 10 : -10)})`,
    },
    transitionProperty: "transform, opacity",
  }),
  Ji = {
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
    pop: { ...Rs("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...Rs("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...Rs("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...Rs("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...Rs("top"), common: { transformOrigin: "top right" } },
  },
  $h = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function mk({ transition: e, state: t, duration: n, timingFunction: r }) {
  const o = { transitionDuration: `${n}ms`, transitionTimingFunction: r };
  return typeof e == "string"
    ? e in Ji
      ? {
          transitionProperty: Ji[e].transitionProperty,
          ...o,
          ...Ji[e].common,
          ...Ji[e][$h[t]],
        }
      : {}
    : {
        transitionProperty: e.transitionProperty,
        ...o,
        ...e.common,
        ...e[$h[t]],
      };
}
function hk({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: s,
  onEntered: i,
  onExited: l,
}) {
  const a = fn(),
    c = Ef(),
    u = a.respectReducedMotion ? c : !1,
    [d, f] = x.useState(u ? 0 : e),
    [m, p] = x.useState(r ? "entered" : "exited"),
    g = x.useRef(-1),
    b = x.useRef(-1),
    w = (y) => {
      const v = y ? o : s,
        S = y ? i : l;
      window.clearTimeout(g.current);
      const C = u ? 0 : y ? e : t;
      f(C),
        C === 0
          ? (typeof v == "function" && v(),
            typeof S == "function" && S(),
            p(y ? "entered" : "exited"))
          : (b.current = requestAnimationFrame(() => {
              ES.flushSync(() => {
                p(y ? "pre-entering" : "pre-exiting");
              }),
                (b.current = requestAnimationFrame(() => {
                  typeof v == "function" && v(),
                    p(y ? "entering" : "exiting"),
                    (g.current = window.setTimeout(() => {
                      typeof S == "function" && S(),
                        p(y ? "entered" : "exited");
                    }, C));
                }));
            }));
    };
  return (
    Gr(() => {
      w(r);
    }, [r]),
    x.useEffect(
      () => () => {
        window.clearTimeout(g.current), cancelAnimationFrame(b.current);
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
function ls({
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
  } = hk({
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
      ? h.jsx(h.Fragment, { children: s({}) })
      : e
      ? s({ display: "none" })
      : null
    : f === "exited"
    ? e
      ? s({ display: "none" })
      : null
    : h.jsx(h.Fragment, {
        children: s(
          mk({ transition: t, duration: d, state: f, timingFunction: m })
        ),
      });
}
ls.displayName = "@mantine/core/Transition";
var G0 = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const gk = {},
  Wf = K((e, t) => {
    var b, w, y, v;
    const n = W("PopoverDropdown", gk, e),
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
      f = W0(),
      m = t0({ opened: f.opened, shouldReturnFocus: f.returnFocus }),
      p = f.withRoles
        ? {
            "aria-labelledby": f.getTargetId(),
            id: f.getDropdownId(),
            role: "dialog",
            tabIndex: -1,
          }
        : {},
      g = Mt(t, f.floating);
    return f.disabled
      ? null
      : h.jsx(Ta, {
          ...f.portalProps,
          withinPortal: f.withinPortal,
          children: h.jsx(ls, {
            mounted: f.opened,
            ...f.transitionProps,
            transition:
              ((b = f.transitionProps) == null ? void 0 : b.transition) ||
              "fade",
            duration:
              ((w = f.transitionProps) == null ? void 0 : w.duration) ?? 150,
            keepMounted: f.keepMounted,
            exitDuration:
              typeof ((y = f.transitionProps) == null
                ? void 0
                : y.exitDuration) == "number"
                ? f.transitionProps.exitDuration
                : (v = f.transitionProps) == null
                ? void 0
                : v.duration,
            children: (S) =>
              h.jsx(Na, {
                active: f.trapFocus,
                children: h.jsxs(G, {
                  ...p,
                  ...d,
                  variant: a,
                  ref: g,
                  onKeyDownCapture: fC(f.onClose, {
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
                        ...S,
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
                    h.jsx(U0, {
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
Wf.classes = G0;
Wf.displayName = "@mantine/core/PopoverDropdown";
const yk = { refProp: "ref", popupType: "dialog" },
  K0 = K((e, t) => {
    const {
      children: n,
      refProp: r,
      popupType: o,
      ...s
    } = W("PopoverTarget", yk, e);
    if (!to(n))
      throw new Error(
        "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const i = s,
      l = W0(),
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
K0.displayName = "@mantine/core/PopoverTarget";
function vk({ opened: e, floating: t, position: n, positionDependencies: r }) {
  const [o, s] = x.useState(0);
  x.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return B_(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference.current, t.refs.floating.current, e, o, n]),
    Gr(() => {
      t.update();
    }, r),
    Gr(() => {
      s((i) => i + 1);
    }, [e]);
}
function wk(e) {
  if (e === void 0) return { shift: !0, flip: !0 };
  const t = { ...e };
  return (
    e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t
  );
}
function xk(e, t) {
  const n = wk(e.middlewares),
    r = [V_(e.offset)];
  return (
    n.shift &&
      r.push(
        H_(
          typeof n.shift == "boolean"
            ? { limiter: Rh(), padding: 5 }
            : { limiter: Rh(), padding: 5, ...n.shift }
        )
      ),
    n.flip && r.push(typeof n.flip == "boolean" ? Eh() : Eh(n.flip)),
    n.inline && r.push(typeof n.inline == "boolean" ? kh() : kh(n.inline)),
    r.push(Y_({ element: e.arrowRef, padding: e.arrowOffset })),
    (n.size || e.width === "target") &&
      r.push(
        U_({
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
function bk(e) {
  const [t, n] = ln({
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
    s = lk({
      strategy: e.strategy,
      placement: e.position,
      middleware: xk(e, () => s),
    });
  return (
    vk({
      opened: e.opened,
      position: e.position,
      positionDependencies: e.positionDependencies || [],
      floating: s,
    }),
    Gr(() => {
      var i;
      (i = e.onPositionChange) == null || i.call(e, s.placement);
    }, [s.placement]),
    Gr(() => {
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
const Sk = {
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
    zIndex: no("popover"),
    __staticSelector: "Popover",
    width: "max-content",
  },
  Ck = (e, { radius: t, shadow: n }) => ({
    dropdown: {
      "--popover-radius": t === void 0 ? void 0 : dn(t),
      "--popover-shadow": Sf(n),
    },
  });
function pn(e) {
  var ve, Ge, De, Le, Y, re;
  const t = W("Popover", Sk, e),
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
      arrowPosition: g,
      unstyled: b,
      classNames: w,
      styles: y,
      closeOnClickOutside: v,
      withinPortal: S,
      portalProps: C,
      closeOnEscape: E,
      clickOutsideEvents: k,
      trapFocus: D,
      onClose: L,
      onOpen: N,
      onChange: F,
      zIndex: B,
      radius: V,
      shadow: A,
      id: O,
      defaultOpened: P,
      __staticSelector: T,
      withRoles: R,
      disabled: _,
      returnFocus: $,
      variant: j,
      keepMounted: I,
      vars: q,
      floatingStrategy: Q,
      ...ee
    } = t,
    ne = ae({
      name: T,
      props: t,
      classes: G0,
      classNames: w,
      styles: y,
      unstyled: b,
      rootSelector: "dropdown",
      vars: q,
      varsResolver: Ck,
    }),
    te = x.useRef(null),
    [me, oe] = x.useState(null),
    [le, J] = x.useState(null),
    { dir: he } = Pf(),
    ce = _r(O),
    se = bk({
      middlewares: u,
      width: c,
      position: ak(he, r),
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
  mC(() => v && se.onClose(), k, [me, le]);
  const Re = x.useCallback(
      (ie) => {
        oe(ie), se.floating.refs.setReference(ie);
      },
      [se.floating.refs.setReference]
    ),
    Ie = x.useCallback(
      (ie) => {
        J(ie), se.floating.refs.setFloating(ie);
      },
      [se.floating.refs.setFloating]
    );
  return h.jsx(dk, {
    value: {
      returnFocus: $,
      disabled: _,
      controlled: se.controlled,
      reference: Re,
      floating: Ie,
      x: se.floating.x,
      y: se.floating.y,
      arrowX:
        (De =
          (Ge = (ve = se.floating) == null ? void 0 : ve.middlewareData) == null
            ? void 0
            : Ge.arrow) == null
          ? void 0
          : De.x,
      arrowY:
        (re =
          (Y = (Le = se.floating) == null ? void 0 : Le.middlewareData) == null
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
      arrowPosition: g,
      placement: se.floating.placement,
      trapFocus: D,
      withinPortal: S,
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
      classNames: w,
      styles: y,
      unstyled: b,
      variant: j,
      keepMounted: I,
      getStyles: ne,
    },
    children: n,
  });
}
pn.Target = K0;
pn.Dropdown = Wf;
pn.displayName = "@mantine/core/Popover";
pn.extend = (e) => e;
var tn = {
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
const Ek = x.forwardRef(({ className: e, ...t }, n) =>
    h.jsxs(G, {
      component: "span",
      className: ft(tn.barsLoader, e),
      ...t,
      ref: n,
      children: [
        h.jsx("span", { className: tn.bar }),
        h.jsx("span", { className: tn.bar }),
        h.jsx("span", { className: tn.bar }),
      ],
    })
  ),
  _k = x.forwardRef(({ className: e, ...t }, n) =>
    h.jsxs(G, {
      component: "span",
      className: ft(tn.dotsLoader, e),
      ...t,
      ref: n,
      children: [
        h.jsx("span", { className: tn.dot }),
        h.jsx("span", { className: tn.dot }),
        h.jsx("span", { className: tn.dot }),
      ],
    })
  ),
  kk = x.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(G, {
      component: "span",
      className: ft(tn.ovalLoader, e),
      ...t,
      ref: n,
    })
  ),
  X0 = { bars: Ek, oval: kk, dots: _k },
  Rk = { loaders: X0, type: "oval" },
  Dk = (e, { size: t, color: n }) => ({
    root: {
      "--loader-size": Ce(t, "loader-size"),
      "--loader-color": n ? Yo(n, e) : void 0,
    },
  }),
  Ei = K((e, t) => {
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
        variant: m,
        children: p,
        ...g
      } = n,
      b = ae({
        name: "Loader",
        props: n,
        classes: tn,
        className: l,
        style: a,
        classNames: c,
        styles: u,
        unstyled: d,
        vars: i,
        varsResolver: Dk,
      });
    return p
      ? h.jsx(G, { ...b("root"), ref: t, ...g, children: p })
      : h.jsx(G, {
          ...b("root"),
          ref: t,
          component: f[s],
          variant: m,
          size: r,
          ...g,
        });
  });
Ei.defaultLoaders = X0;
Ei.classes = tn;
Ei.displayName = "@mantine/core/Loader";
const Q0 = x.forwardRef(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) =>
    h.jsx("svg", {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: h.jsx("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    })
);
Q0.displayName = "@mantine/core/CloseIcon";
var Z0 = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Pk = { variant: "subtle" },
  Nk = (e, { size: t, radius: n, iconSize: r }) => ({
    root: {
      "--cb-size": Ce(t, "cb-size"),
      "--cb-radius": n === void 0 ? void 0 : dn(n),
      "--cb-icon-size": z(r),
    },
  }),
  as = Pn((e, t) => {
    const n = W("CloseButton", Pk, e),
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
        icon: g,
        mod: b,
        ...w
      } = n,
      y = ae({
        name: "CloseButton",
        props: n,
        className: l,
        style: c,
        classes: Z0,
        classNames: a,
        styles: u,
        unstyled: d,
        vars: s,
        varsResolver: Nk,
      });
    return h.jsxs(In, {
      ref: t,
      ...w,
      unstyled: d,
      variant: p,
      disabled: m,
      mod: [{ disabled: m || f }, b],
      ...y("root", { variant: p, active: !m && !f }),
      children: [g || h.jsx(Q0, {}), o],
    });
  });
as.classes = Z0;
as.displayName = "@mantine/core/CloseButton";
function Tk(e) {
  return x.Children.toArray(e).filter(Boolean);
}
var J0 = { root: "m_4081bf90" };
const jk = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  Ok = (
    e,
    { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: s, wrap: i },
    { childWidth: l }
  ) => ({
    root: {
      "--group-child-width": t && n ? l : void 0,
      "--group-gap": xi(r),
      "--group-align": o,
      "--group-justify": s,
      "--group-wrap": i,
    },
  }),
  or = K((e, t) => {
    const n = W("Group", jk, e),
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
        vars: g,
        variant: b,
        __size: w,
        mod: y,
        ...v
      } = n,
      S = Tk(a),
      C = S.length,
      E = xi(c ?? "md"),
      D = { childWidth: `calc(${100 / C}% - (${E} - ${E} / ${C}))` },
      L = ae({
        name: "Group",
        props: n,
        stylesCtx: D,
        className: o,
        style: s,
        classes: J0,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: g,
        varsResolver: Ok,
      });
    return h.jsx(G, {
      ...L("root"),
      ref: t,
      variant: b,
      mod: [{ grow: m }, y],
      size: w,
      ...v,
      children: S,
    });
  });
or.classes = J0;
or.displayName = "@mantine/core/Group";
var ew = { root: "m_9814e45f" };
const $k = { zIndex: no("modal") },
  Lk = (
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
        ((n !== void 0 || r !== void 0) && Sn(n || "#000", r ?? 0.6)) ||
        void 0,
      "--overlay-filter": o ? `blur(${z(o)})` : void 0,
      "--overlay-radius": s === void 0 ? void 0 : dn(s),
      "--overlay-z-index": i == null ? void 0 : i.toString(),
    },
  }),
  ui = Pn((e, t) => {
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
        zIndex: m,
        gradient: p,
        blur: g,
        color: b,
        backgroundOpacity: w,
        mod: y,
        ...v
      } = n,
      S = ae({
        name: "Overlay",
        props: n,
        classes: ew,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: Lk,
      });
    return h.jsx(G, {
      ref: t,
      ...S("root"),
      mod: [{ center: u, fixed: c }, y],
      ...v,
      children: d,
    });
  });
ui.classes = ew;
ui.displayName = "@mantine/core/Overlay";
const [Ak, Gn] = Yn("ModalBase component was not found in tree");
function Fk({ opened: e, transitionDuration: t }) {
  const [n, r] = x.useState(e),
    o = x.useRef(),
    i = Ef() ? 0 : t;
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
function Mk({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: s,
  returnFocus: i,
}) {
  const l = _r(e),
    [a, c] = x.useState(!1),
    [u, d] = x.useState(!1),
    f =
      typeof (t == null ? void 0 : t.duration) == "number"
        ? t == null
          ? void 0
          : t.duration
        : 200,
    m = Fk({ opened: n, transitionDuration: f });
  return (
    RC(
      "keydown",
      (p) => {
        var g;
        p.key === "Escape" &&
          o &&
          n &&
          ((g = p.target) == null
            ? void 0
            : g.getAttribute("data-mantine-stop-propagation")) !== "true" &&
          s();
      },
      { capture: !0 }
    ),
    t0({ opened: n, shouldReturnFocus: r && i }),
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
const Ik = x.forwardRef(
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
      padding: g,
      __vars: b,
      unstyled: w,
      removeScrollProps: y,
      ...v
    },
    S
  ) => {
    const {
      _id: C,
      titleMounted: E,
      bodyMounted: k,
      shouldLockScroll: D,
      setTitleMounted: L,
      setBodyMounted: N,
    } = Mk({
      id: r,
      transitionProps: o,
      opened: t,
      trapFocus: s,
      closeOnEscape: i,
      onClose: n,
      returnFocus: l,
    });
    return h.jsx(Ta, {
      ...u,
      withinPortal: c,
      children: h.jsx(Ak, {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: a,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${C}-title`,
          getBodyId: () => `${C}-body`,
          titleMounted: E,
          bodyMounted: k,
          setTitleMounted: L,
          setBodyMounted: N,
          trapFocus: s,
          closeOnEscape: i,
          zIndex: m,
          unstyled: w,
        },
        children: h.jsx(Xv, {
          enabled: D && d,
          ...y,
          children: h.jsx(G, {
            ref: S,
            ...v,
            __vars: {
              ...b,
              "--mb-z-index": (m || no("modal")).toString(),
              "--mb-shadow": Sf(p),
              "--mb-padding": xi(g),
            },
            children: f,
          }),
        }),
      }),
    });
  }
);
function zk() {
  const e = Gn();
  return (
    x.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []),
    e.getBodyId()
  );
}
var Xo = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
const tw = x.forwardRef(({ className: e, ...t }, n) => {
  const r = zk(),
    o = Gn();
  return h.jsx(G, {
    ref: n,
    ...t,
    id: r,
    className: ft({ [Xo.body]: !o.unstyled }, e),
  });
});
tw.displayName = "@mantine/core/ModalBaseBody";
const nw = x.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const o = Gn();
  return h.jsx(as, {
    ref: r,
    ...n,
    onClick: (s) => {
      o.onClose(), t == null || t(s);
    },
    className: ft({ [Xo.close]: !o.unstyled }, e),
    unstyled: o.unstyled,
  });
});
nw.displayName = "@mantine/core/ModalBaseCloseButton";
const Bk = x.forwardRef(
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
      const l = Gn();
      return h.jsx(ls, {
        mounted: l.opened,
        transition: "pop",
        ...l.transitionProps,
        ...e,
        children: (a) =>
          h.jsx("div", {
            ...n,
            className: ft({ [Xo.inner]: !l.unstyled }, n.className),
            children: h.jsx(Na, {
              active: l.opened && l.trapFocus,
              children: h.jsx(Lf, {
                ...s,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": l.bodyMounted ? l.getBodyId() : void 0,
                "aria-labelledby": l.titleMounted ? l.getTitleId() : void 0,
                ref: i,
                style: [o, a],
                className: ft({ [Xo.content]: !l.unstyled }, t),
                unstyled: l.unstyled,
                children: s.children,
              }),
            }),
          }),
      });
    }
  ),
  rw = x.forwardRef(({ className: e, ...t }, n) => {
    const r = Gn();
    return h.jsx(G, {
      component: "header",
      ref: n,
      className: ft({ [Xo.header]: !r.unstyled }, e),
      ...t,
    });
  });
rw.displayName = "@mantine/core/ModalBaseHeader";
const Vk = { duration: 200, timingFunction: "ease", transition: "fade" };
function Hk(e) {
  const t = Gn();
  return { ...Vk, ...t.transitionProps, ...e };
}
const ow = x.forwardRef(
  ({ onClick: e, transitionProps: t, style: n, ...r }, o) => {
    const s = Gn(),
      i = Hk(t);
    return h.jsx(ls, {
      mounted: s.opened,
      ...i,
      transition: "fade",
      children: (l) =>
        h.jsx(ui, {
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
ow.displayName = "@mantine/core/ModalBaseOverlay";
function Uk() {
  const e = Gn();
  return (
    x.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
const sw = x.forwardRef(({ className: e, ...t }, n) => {
  const r = Uk(),
    o = Gn();
  return h.jsx(G, {
    component: "h2",
    ref: n,
    className: ft({ [Xo.title]: !o.unstyled }, e),
    ...t,
    id: r,
  });
});
sw.displayName = "@mantine/core/ModalBaseTitle";
function Wk({ children: e }) {
  return h.jsx(h.Fragment, { children: e });
}
const [Yk, cs] = bf({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var Gt = {
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
const Lh = {},
  qk = (e, { size: t }) => ({
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${Je(t)} - ${z(2)})`,
    },
  }),
  ja = K((e, t) => {
    const n = W("InputDescription", Lh, e),
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
      } = W("InputDescription", Lh, n),
      p = cs(),
      g = ae({
        name: ["InputWrapper", u],
        props: n,
        classes: Gt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "description",
        vars: a,
        varsResolver: qk,
      }),
      b = (d && (p == null ? void 0 : p.getStyles)) || g;
    return h.jsx(G, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...b(
        "description",
        p != null && p.getStyles ? { className: o, style: s } : void 0
      ),
      ...m,
    });
  });
ja.classes = Gt;
ja.displayName = "@mantine/core/InputDescription";
const Gk = {},
  Kk = (e, { size: t }) => ({
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${Je(t)} - ${z(2)})`,
    },
  }),
  Oa = K((e, t) => {
    const n = W("InputError", Gk, e),
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
      p = ae({
        name: ["InputWrapper", u],
        props: n,
        classes: Gt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "error",
        vars: a,
        varsResolver: Kk,
      }),
      g = cs(),
      b = (d && (g == null ? void 0 : g.getStyles)) || p;
    return h.jsx(G, {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...b(
        "error",
        g != null && g.getStyles ? { className: o, style: s } : void 0
      ),
      ...m,
    });
  });
Oa.classes = Gt;
Oa.displayName = "@mantine/core/InputError";
const Ah = { labelElement: "label" },
  Xk = (e, { size: t }) => ({
    label: { "--input-label-size": Je(t), "--input-asterisk-color": void 0 },
  }),
  $a = K((e, t) => {
    const n = W("InputLabel", Ah, e),
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
        __staticSelector: g,
        variant: b,
        mod: w,
        ...y
      } = W("InputLabel", Ah, n),
      v = ae({
        name: ["InputWrapper", g],
        props: n,
        classes: Gt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "label",
        vars: a,
        varsResolver: Xk,
      }),
      S = cs(),
      C = (S == null ? void 0 : S.getStyles) || v;
    return h.jsxs(G, {
      ...C(
        "label",
        S != null && S.getStyles ? { className: o, style: s } : void 0
      ),
      component: c,
      variant: b,
      size: u,
      ref: t,
      htmlFor: c === "label" ? f : void 0,
      mod: [{ required: d }, w],
      onMouseDown: (E) => {
        m == null || m(E),
          !E.defaultPrevented && E.detail > 1 && E.preventDefault();
      },
      ...y,
      children: [
        p,
        d &&
          h.jsx("span", {
            ...C("required"),
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
$a.classes = Gt;
$a.displayName = "@mantine/core/InputLabel";
const Fh = {},
  Yf = K((e, t) => {
    const n = W("InputPlaceholder", Fh, e),
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
      } = W("InputPlaceholder", Fh, n),
      p = ae({
        name: ["InputPlaceholder", c],
        props: n,
        classes: Gt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "placeholder",
      });
    return h.jsx(G, {
      ...p("placeholder"),
      mod: [{ error: !!d }, f],
      component: "span",
      variant: u,
      ref: t,
      ...m,
    });
  });
Yf.classes = Gt;
Yf.displayName = "@mantine/core/InputPlaceholder";
function Qk(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((a) => a === "input"),
    o = e[r - 1],
    s = e[r + 1];
  return {
    offsetBottom: (t && s === "description") || (n && s === "error"),
    offsetTop: (t && o === "description") || (n && o === "error"),
  };
}
const Zk = {
    labelElement: "label",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  Jk = (e, { size: t }) => ({
    label: { "--input-label-size": Je(t), "--input-asterisk-color": void 0 },
    error: {
      "--input-error-size": t === void 0 ? void 0 : `calc(${Je(t)} - ${z(2)})`,
    },
    description: {
      "--input-description-size":
        t === void 0 ? void 0 : `calc(${Je(t)} - ${z(2)})`,
    },
  }),
  qf = K((e, t) => {
    const n = W("InputWrapper", Zk, e),
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
        error: g,
        description: b,
        labelProps: w,
        descriptionProps: y,
        errorProps: v,
        labelElement: S,
        children: C,
        withAsterisk: E,
        id: k,
        required: D,
        __stylesApiProps: L,
        mod: N,
        ...F
      } = n,
      B = ae({
        name: ["InputWrapper", d],
        props: L || n,
        classes: Gt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: Jk,
      }),
      V = { size: c, variant: u, __staticSelector: d },
      A = _r(k),
      O = typeof E == "boolean" ? E : D,
      P = (v == null ? void 0 : v.id) || `${A}-error`,
      T = (y == null ? void 0 : y.id) || `${A}-description`,
      R = A,
      _ = !!g && typeof g != "boolean",
      $ = !!b,
      j = `${_ ? P : ""} ${$ ? T : ""}`,
      I = j.trim().length > 0 ? j.trim() : void 0,
      q = (w == null ? void 0 : w.id) || `${A}-label`,
      Q =
        p &&
        h.jsx(
          $a,
          {
            labelElement: S,
            id: q,
            htmlFor: R,
            required: O,
            ...V,
            ...w,
            children: p,
          },
          "label"
        ),
      ee =
        $ &&
        h.jsx(
          ja,
          {
            ...y,
            ...V,
            size: (y == null ? void 0 : y.size) || V.size,
            id: (y == null ? void 0 : y.id) || T,
            children: b,
          },
          "description"
        ),
      ne = h.jsx(x.Fragment, { children: f(C) }, "input"),
      te =
        _ &&
        x.createElement(
          Oa,
          {
            ...v,
            ...V,
            size: (v == null ? void 0 : v.size) || V.size,
            key: "error",
            id: (v == null ? void 0 : v.id) || P,
          },
          g
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
    return h.jsx(Yk, {
      value: {
        getStyles: B,
        describedBy: I,
        inputId: R,
        labelId: q,
        ...Qk(m, { hasDescription: $, hasError: _ }),
      },
      children: h.jsx(G, {
        ref: t,
        variant: u,
        size: c,
        mod: [{ error: !!g }, N],
        ...B("root"),
        ...F,
        children: me,
      }),
    });
  });
qf.classes = Gt;
qf.displayName = "@mantine/core/InputWrapper";
const eR = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
  },
  tR = (e, t, n) => ({
    wrapper: {
      "--input-margin-top": n.offsetTop
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-margin-bottom": n.offsetBottom
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-height": Ce(t.size, "input-height"),
      "--input-fz": Je(t.size),
      "--input-radius": t.radius === void 0 ? void 0 : dn(t.radius),
      "--input-left-section-width":
        t.leftSectionWidth !== void 0 ? z(t.leftSectionWidth) : void 0,
      "--input-right-section-width":
        t.rightSectionWidth !== void 0 ? z(t.rightSectionWidth) : void 0,
      "--input-padding-y": t.multiline ? Ce(t.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": t.leftSectionPointerEvents,
      "--input-right-section-pointer-events": t.rightSectionPointerEvents,
    },
  }),
  it = Pn((e, t) => {
    const n = W("Input", eR, e),
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
        leftSection: g,
        leftSectionProps: b,
        leftSectionWidth: w,
        rightSection: y,
        rightSectionProps: v,
        rightSectionWidth: S,
        rightSectionPointerEvents: C,
        leftSectionPointerEvents: E,
        variant: k,
        vars: D,
        pointer: L,
        multiline: N,
        radius: F,
        id: B,
        withAria: V,
        withErrorStyles: A,
        mod: O,
        ...P
      } = n,
      { styleProps: T, rest: R } = os(P),
      _ = cs(),
      $ = {
        offsetBottom: _ == null ? void 0 : _.offsetBottom,
        offsetTop: _ == null ? void 0 : _.offsetTop,
      },
      j = ae({
        name: ["Input", c],
        props: u || n,
        classes: Gt,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        stylesCtx: $,
        rootSelector: "wrapper",
        vars: D,
        varsResolver: tR,
      }),
      I = V
        ? {
            required: a,
            disabled: p,
            "aria-invalid": !!m,
            "aria-describedby": _ == null ? void 0 : _.describedBy,
            id: (_ == null ? void 0 : _.inputId) || B,
          }
        : {};
    return h.jsxs(G, {
      ...j("wrapper"),
      ...T,
      ...f,
      mod: [
        {
          error: !!m && A,
          pointer: L,
          disabled: p,
          multiline: N,
          "data-with-right-section": !!y,
          "data-with-left-section": !!g,
        },
        O,
      ],
      variant: k,
      size: d,
      children: [
        g &&
          h.jsx("div", {
            ...b,
            "data-position": "left",
            ...j("section", {
              className: b == null ? void 0 : b.className,
              style: b == null ? void 0 : b.style,
            }),
            children: g,
          }),
        h.jsx(G, {
          component: "input",
          ...R,
          ...I,
          ref: t,
          required: a,
          mod: { disabled: p, error: !!m && A },
          variant: k,
          ...j("input"),
        }),
        y &&
          h.jsx("div", {
            ...v,
            "data-position": "right",
            ...j("section", {
              className: v == null ? void 0 : v.className,
              style: v == null ? void 0 : v.style,
            }),
            children: y,
          }),
      ],
    });
  });
it.classes = Gt;
it.Wrapper = qf;
it.Label = $a;
it.Error = Oa;
it.Description = ja;
it.Placeholder = Yf;
it.displayName = "@mantine/core/Input";
function nR(e, t, n) {
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
      labelProps: g,
      descriptionProps: b,
      wrapperProps: w,
      id: y,
      size: v,
      style: S,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: k,
      variant: D,
      vars: L,
      mod: N,
      ...F
    } = r,
    { styleProps: B, rest: V } = os(F),
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
      labelProps: g,
      descriptionProps: b,
      unstyled: d,
      styles: c,
      size: v,
      style: S,
      inputContainer: C,
      inputWrapperOrder: E,
      withAsterisk: k,
      variant: D,
      id: y,
      mod: N,
      ...w,
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
      size: v,
      __staticSelector: f,
      __stylesApiProps: m || r,
      error: i,
      variant: D,
      id: y,
    },
  };
}
const rR = { __staticSelector: "InputBase", withAria: !0 },
  mn = Pn((e, t) => {
    const { inputProps: n, wrapperProps: r, ...o } = nR("InputBase", rR, e);
    return h.jsx(it.Wrapper, {
      ...r,
      children: h.jsx(it, { ...n, ...o, ref: t }),
    });
  });
mn.classes = { ...it.classes, ...it.Wrapper.classes };
mn.displayName = "@mantine/core/InputBase";
const oR = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" },
};
var iw = { root: "m_8bffd616" };
const sR = {},
  Zl = Pn((e, t) => {
    const n = W("Flex", sR, e),
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
        justify: m,
        wrap: p,
        direction: g,
        ...b
      } = n,
      w = ae({
        name: "Flex",
        classes: iw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
      }),
      y = fn(),
      v = g0(),
      S = h0({
        styleProps: {
          gap: c,
          rowGap: u,
          columnGap: d,
          align: f,
          justify: m,
          wrap: p,
          direction: g,
        },
        theme: y,
        data: oR,
      });
    return h.jsxs(h.Fragment, {
      children: [
        S.hasResponsiveStyles &&
          h.jsx(p0, { selector: `.${v}`, styles: S.styles, media: S.media }),
        h.jsx(G, {
          ref: t,
          ...w("root", { className: v, style: _a(S.inlineStyles) }),
          ...b,
        }),
      ],
    });
  });
Zl.classes = iw;
Zl.displayName = "@mantine/core/Flex";
function id({ style: e, size: t = 16, ...n }) {
  return h.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { ...e, width: z(t), height: z(t), display: "block" },
    ...n,
    children: h.jsx("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
id.displayName = "@mantine/core/AccordionChevron";
var lw = { root: "m_b6d8b162" };
function iR(e) {
  if (e === "start") return "start";
  if (e === "end" || e) return "end";
}
const lR = { inherit: !1 },
  aR = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: s }) => ({
    root: {
      "--text-fz": Je(o),
      "--text-lh": Jv(o),
      "--text-gradient": t === "gradient" ? ed(r, e) : void 0,
      "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--text-color": s ? Yo(s, e) : void 0,
    },
  }),
  Qo = Pn((e, t) => {
    const n = W("Text", lR, e),
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
        unstyled: g,
        variant: b,
        mod: w,
        size: y,
        ...v
      } = n,
      S = ae({
        name: ["Text", c],
        props: n,
        classes: lw,
        className: d,
        style: f,
        classNames: m,
        styles: p,
        unstyled: g,
        vars: u,
        varsResolver: aR,
      });
    return h.jsx(G, {
      ...S("root", { focusable: !0 }),
      ref: t,
      component: a ? "span" : "p",
      variant: b,
      mod: [
        {
          "data-truncate": iR(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": s,
          "data-inherit": i,
        },
        w,
      ],
      size: y,
      ...v,
    });
  });
Qo.classes = lw;
Qo.displayName = "@mantine/core/Text";
function aw(e) {
  return typeof e == "string"
    ? { value: e, label: e }
    : "value" in e && !("label" in e)
    ? { value: e.value, label: e.value, disabled: e.disabled }
    : typeof e == "number"
    ? { value: e.toString(), label: e.toString() }
    : "group" in e
    ? { group: e.group, items: e.items.map((t) => aw(t)) }
    : e;
}
function Gf(e) {
  return e ? e.map((t) => aw(t)) : [];
}
function La(e) {
  return e.reduce(
    (t, n) => ("group" in n ? { ...t, ...La(n.items) } : ((t[n.value] = n), t)),
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
const cR = { error: null },
  uR = (e, { size: t }) => ({
    chevron: { "--combobox-chevron-size": Ce(t, "combobox-chevron-size") },
  }),
  Kf = K((e, t) => {
    const n = W("ComboboxChevron", cR, e),
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
      m = ae({
        name: "ComboboxChevron",
        classes: Dt,
        props: n,
        style: s,
        className: i,
        classNames: l,
        styles: a,
        unstyled: c,
        vars: u,
        varsResolver: uR,
        rootSelector: "chevron",
      });
    return h.jsx(G, {
      component: "svg",
      ...f,
      ...m("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }, d],
      ref: t,
      children: h.jsx("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    });
  });
Kf.classes = Dt;
Kf.displayName = "@mantine/core/ComboboxChevron";
const [dR, Kt] = Yn("Combobox component was not found in tree"),
  cw = x.forwardRef(
    ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, s) =>
      h.jsx(as, {
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
cw.displayName = "@mantine/core/ComboboxClearButton";
const fR = {},
  Xf = K((e, t) => {
    const {
        classNames: n,
        styles: r,
        className: o,
        style: s,
        hidden: i,
        ...l
      } = W("ComboboxDropdown", fR, e),
      a = Kt();
    return h.jsx(pn.Dropdown, {
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
Xf.classes = Dt;
Xf.displayName = "@mantine/core/ComboboxDropdown";
const pR = { refProp: "ref" },
  uw = K((e, t) => {
    const { children: n, refProp: r } = W("ComboboxDropdownTarget", pR, e);
    if ((Kt(), !to(n)))
      throw new Error(
        "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    return h.jsx(pn.Target, { ref: t, refProp: r, children: n });
  });
uw.displayName = "@mantine/core/ComboboxDropdownTarget";
const mR = {},
  Qf = K((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxEmpty", mR, e),
      a = Kt();
    return h.jsx(G, {
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
Qf.classes = Dt;
Qf.displayName = "@mantine/core/ComboboxEmpty";
function Zf({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: s,
}) {
  const i = Kt(),
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
const hR = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  dw = K((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = W("ComboboxEventsTarget", hR, e);
    if (!to(n))
      throw new Error(
        "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = Kt(),
      d = Zf({
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
dw.displayName = "@mantine/core/ComboboxEventsTarget";
const gR = {},
  Jf = K((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxFooter", gR, e),
      a = Kt();
    return h.jsx(G, {
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
Jf.classes = Dt;
Jf.displayName = "@mantine/core/ComboboxFooter";
const yR = {},
  ep = K((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        children: l,
        label: a,
        ...c
      } = W("ComboboxGroup", yR, e),
      u = Kt();
    return h.jsxs(G, {
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
          h.jsx("div", {
            ...u.getStyles("groupLabel", { classNames: n, styles: s }),
            children: a,
          }),
        l,
      ],
    });
  });
ep.classes = Dt;
ep.displayName = "@mantine/core/ComboboxGroup";
const vR = {},
  tp = K((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...l
      } = W("ComboboxHeader", vR, e),
      a = Kt();
    return h.jsx(G, {
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
tp.classes = Dt;
tp.displayName = "@mantine/core/ComboboxHeader";
function fw({ value: e, valuesDivider: t = ",", ...n }) {
  return h.jsx("input", {
    type: "hidden",
    value: Array.isArray(e) ? e.join(t) : e || "",
    ...n,
  });
}
fw.displayName = "@mantine/core/ComboboxHiddenInput";
const wR = {},
  np = K((e, t) => {
    const n = W("ComboboxOption", wR, e),
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
        mod: g,
        ...b
      } = n,
      w = Kt(),
      y = x.useId(),
      v = c || y;
    return h.jsx(G, {
      ...w.getStyles("option", {
        className: o,
        classNames: r,
        styles: i,
        style: s,
      }),
      ...b,
      ref: t,
      id: v,
      mod: [
        "combobox-option",
        {
          "combobox-active": u,
          "combobox-disabled": m,
          "combobox-selected": p,
        },
        g,
      ],
      role: "option",
      onClick: (S) => {
        var C;
        m
          ? S.preventDefault()
          : ((C = w.onOptionSubmit) == null || C.call(w, n.value, n),
            a == null || a(S));
      },
      onMouseDown: (S) => {
        S.preventDefault(), d == null || d(S);
      },
      onMouseOver: (S) => {
        w.resetSelectionOnOptionHover && w.store.resetSelectedOption(),
          f == null || f(S);
      },
    });
  });
np.classes = Dt;
np.displayName = "@mantine/core/ComboboxOption";
const xR = {},
  rp = K((e, t) => {
    const n = W("ComboboxOptions", xR, e),
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
      d = Kt(),
      f = _r(l);
    return (
      x.useEffect(() => {
        d.store.setListId(f);
      }, [f]),
      h.jsx(G, {
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
rp.classes = Dt;
rp.displayName = "@mantine/core/ComboboxOptions";
const bR = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
  op = K((e, t) => {
    const n = W("ComboboxSearch", bR, e),
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
      f = Kt(),
      m = f.getStyles("search"),
      p = Zf({
        targetType: "input",
        withAriaAttributes: l,
        withKeyboardNavigation: c,
        withExpandedAttribute: !1,
        onKeyDown: a,
        autoComplete: "off",
      });
    return h.jsx(it, {
      ref: Mt(t, f.store.searchRef),
      classNames: [{ input: m.className }, r],
      styles: [{ input: m.style }, o],
      size: u || f.size,
      ...p,
      ...d,
      __staticSelector: "Combobox",
    });
  });
op.classes = Dt;
op.displayName = "@mantine/core/ComboboxSearch";
const SR = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  pw = K((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: l,
      autoComplete: a,
      ...c
    } = W("ComboboxTarget", SR, e);
    if (!to(n))
      throw new Error(
        "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const u = Kt(),
      d = Zf({
        targetType: l,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: a,
      }),
      f = x.cloneElement(n, { ...d, ...c });
    return h.jsx(pn.Target, { ref: Mt(t, u.store.targetRef), children: f });
  });
pw.displayName = "@mantine/core/ComboboxTarget";
function CR(e, t, n) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = t.length - 1; r > -1; r -= 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function ER(e, t, n) {
  for (let r = e + 1; r < t.length; r += 1)
    if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  if (n) {
    for (let r = 0; r < t.length; r += 1)
      if (!t[r].hasAttribute("data-combobox-disabled")) return r;
  }
  return e;
}
function _R(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled")) return t;
  return -1;
}
function Aa({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: s = !0,
  scrollBehavior: i = "instant",
} = {}) {
  const [l, a] = ln({ value: t, defaultValue: e, finalValue: !1, onChange: n }),
    c = x.useRef(null),
    u = x.useRef(-1),
    d = x.useRef(null),
    f = x.useRef(null),
    m = x.useRef(-1),
    p = x.useRef(-1),
    g = x.useRef(-1),
    b = x.useCallback(
      (P = "unknown") => {
        l || (a(!0), o == null || o(P));
      },
      [a, o, l]
    ),
    w = x.useCallback(
      (P = "unknown") => {
        l && (a(!1), r == null || r(P));
      },
      [a, r, l]
    ),
    y = x.useCallback(
      (P = "unknown") => {
        l ? w(P) : b(P);
      },
      [w, b, l]
    ),
    v = x.useCallback(() => {
      const P = document.querySelector(
        `#${c.current} [data-combobox-selected]`
      );
      P == null || P.removeAttribute("data-combobox-selected"),
        P == null || P.removeAttribute("aria-selected");
    }, []),
    S = x.useCallback(
      (P) => {
        const T = document.getElementById(c.current),
          R = T == null ? void 0 : T.querySelectorAll("[data-combobox-option]");
        if (!R) return null;
        const _ = P >= R.length ? 0 : P < 0 ? R.length - 1 : P;
        return (
          (u.current = _),
          R != null && R[_] && !R[_].hasAttribute("data-combobox-disabled")
            ? (v(),
              R[_].setAttribute("data-combobox-selected", "true"),
              R[_].setAttribute("aria-selected", "true"),
              R[_].scrollIntoView({ block: "nearest", behavior: i }),
              R[_].id)
            : null
        );
      },
      [i, v]
    ),
    C = x.useCallback(() => {
      const P = document.querySelector(`#${c.current} [data-combobox-active]`);
      if (P) {
        const T = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          R = Array.from(T).findIndex((_) => _ === P);
        return S(R);
      }
      return S(0);
    }, [S]),
    E = x.useCallback(
      () =>
        S(
          ER(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [S, s]
    ),
    k = x.useCallback(
      () =>
        S(
          CR(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [S, s]
    ),
    D = x.useCallback(
      () =>
        S(
          _R(document.querySelectorAll(`#${c.current} [data-combobox-option]`))
        ),
      [S]
    ),
    L = x.useCallback((P = "selected", T) => {
      g.current = window.setTimeout(() => {
        var $;
        const R = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          _ = Array.from(R).findIndex((j) =>
            j.hasAttribute(`data-combobox-${P}`)
          );
        (u.current = _),
          T != null &&
            T.scrollIntoView &&
            (($ = R[_]) == null ||
              $.scrollIntoView({ block: "nearest", behavior: i }));
      }, 0);
    }, []),
    N = x.useCallback(() => {
      (u.current = -1), v();
    }, [v]),
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
    O = x.useCallback(() => u.current, []);
  return (
    x.useEffect(
      () => () => {
        window.clearTimeout(m.current),
          window.clearTimeout(p.current),
          window.clearTimeout(g.current);
      },
      []
    ),
    {
      dropdownOpened: l,
      openDropdown: b,
      closeDropdown: w,
      toggleDropdown: y,
      selectedOptionIndex: u.current,
      getSelectedOptionIndex: O,
      selectOption: S,
      selectFirstOption: D,
      selectActiveOption: C,
      selectNextOption: E,
      selectPreviousOption: k,
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
const kR = {
    keepMounted: !0,
    withinPortal: !0,
    resetSelectionOnOptionHover: !1,
    width: "target",
    transitionProps: { transition: "fade", duration: 0 },
  },
  RR = (e, { size: t, dropdownPadding: n }) => ({
    options: {
      "--combobox-option-fz": Je(t),
      "--combobox-option-padding": Ce(t, "combobox-option-padding"),
    },
    dropdown: {
      "--combobox-padding": n === void 0 ? void 0 : z(n),
      "--combobox-option-fz": Je(t),
      "--combobox-option-padding": Ce(t, "combobox-option-padding"),
    },
  });
function de(e) {
  const t = W("Combobox", kR, e),
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
      ...g
    } = t,
    b = Aa(),
    w = i || b,
    y = ae({
      name: m || "Combobox",
      classes: Dt,
      props: t,
      classNames: n,
      styles: r,
      unstyled: o,
      vars: l,
      varsResolver: RR,
    }),
    v = () => {
      c == null || c(), w.closeDropdown();
    };
  return h.jsx(dR, {
    value: {
      getStyles: y,
      store: w,
      onOptionSubmit: a,
      size: u,
      resetSelectionOnOptionHover: f,
      readOnly: p,
    },
    children: h.jsx(pn, {
      opened: w.dropdownOpened,
      ...g,
      onClose: v,
      withRoles: !1,
      unstyled: o,
      children: s,
    }),
  });
}
const DR = (e) => e;
de.extend = DR;
de.classes = Dt;
de.displayName = "@mantine/core/Combobox";
de.Target = pw;
de.Dropdown = Xf;
de.Options = rp;
de.Option = np;
de.Search = op;
de.Empty = Qf;
de.Chevron = Kf;
de.Footer = Jf;
de.Header = tp;
de.EventsTarget = dw;
de.DropdownTarget = uw;
de.Group = ep;
de.ClearButton = cw;
de.HiddenInput = fw;
var mw = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc",
};
const PR = mw,
  hw = x.forwardRef(
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
        labelElement: g = "label",
        variant: b,
        style: w,
        vars: y,
        mod: v,
        ...S
      },
      C
    ) => {
      const E = ae({
        name: e,
        props: t,
        className: n,
        style: w,
        classes: mw,
        classNames: r,
        styles: o,
        unstyled: s,
      });
      return h.jsx(G, {
        ...E("root"),
        ref: C,
        __vars: { "--label-fz": Je(f), "--label-lh": Ce(f, "label-lh") },
        mod: [{ "label-position": m }, v],
        variant: b,
        size: f,
        ...S,
        children: h.jsxs(G, {
          component: p,
          htmlFor: p === "label" ? c : void 0,
          ...E("body"),
          children: [
            i,
            h.jsxs("div", {
              ...E("labelWrapper"),
              "data-disabled": u || void 0,
              children: [
                l &&
                  h.jsx(G, {
                    component: g,
                    htmlFor: g === "label" ? c : void 0,
                    ...E("label"),
                    "data-disabled": u || void 0,
                    children: l,
                  }),
                a &&
                  h.jsx(it.Description, {
                    size: f,
                    __inheritStyles: !1,
                    ...E("description"),
                    children: a,
                  }),
                d &&
                  typeof d != "boolean" &&
                  h.jsx(it.Error, {
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
hw.displayName = "@mantine/core/InlineInput";
const gw = x.createContext(null),
  NR = gw.Provider,
  TR = () => x.useContext(gw);
function jR({ children: e, role: t }) {
  const n = cs();
  return n
    ? h.jsx("div", {
        role: t,
        "aria-labelledby": n.labelId,
        "aria-describedby": n.describedBy,
        children: e,
      })
    : h.jsx(h.Fragment, { children: e });
}
const OR = {},
  sp = K((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onChange: o,
        size: s,
        wrapperProps: i,
        children: l,
        readOnly: a,
        ...c
      } = W("CheckboxGroup", OR, e),
      [u, d] = ln({ value: n, defaultValue: r, finalValue: [], onChange: o }),
      f = (m) => {
        const p = m.currentTarget.value;
        !a && d(u.includes(p) ? u.filter((g) => g !== p) : [...u, p]);
      };
    return h.jsx(NR, {
      value: { value: u, onChange: f, size: s },
      children: h.jsx(it.Wrapper, {
        size: s,
        ref: t,
        ...i,
        ...c,
        labelElement: "div",
        __staticSelector: "CheckboxGroup",
        children: h.jsx(jR, { role: "group", children: l }),
      }),
    });
  });
sp.classes = it.Wrapper.classes;
sp.displayName = "@mantine/core/CheckboxGroup";
function yw({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: z(e), height: z(e), ...t } : t;
  return h.jsx("svg", {
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    "aria-hidden": !0,
    ...n,
    children: h.jsx("path", {
      d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
function $R({ indeterminate: e, ...t }) {
  return e
    ? h.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": !0,
        ...t,
        children: h.jsx("rect", {
          width: "32",
          height: "6",
          fill: "currentColor",
          rx: "3",
        }),
      })
    : h.jsx(yw, { ...t });
}
var vw = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542",
};
const LR = { labelPosition: "right", icon: $R },
  AR = (
    e,
    { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }
  ) => {
    const l = rs({ color: n || e.primaryColor, theme: e }),
      a =
        l.isThemeColor && l.shade === void 0
          ? `var(--mantine-color-${l.color}-outline)`
          : l.color;
    return {
      root: {
        "--checkbox-size": Ce(r, "checkbox-size"),
        "--checkbox-radius": t === void 0 ? void 0 : dn(t),
        "--checkbox-color": s === "outline" ? a : Yo(n, e),
        "--checkbox-icon-color": o
          ? Yo(o, e)
          : wE(i, e)
          ? c0({ color: n, theme: e })
          : void 0,
      },
    };
  },
  Zo = K((e, t) => {
    const n = W("Checkbox", LR, e),
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
        children: g,
        checked: b,
        labelPosition: w,
        description: y,
        error: v,
        disabled: S,
        variant: C,
        indeterminate: E,
        icon: k,
        rootRef: D,
        iconColor: L,
        onChange: N,
        autoContrast: F,
        mod: B,
        ...V
      } = n,
      A = TR(),
      O = f || (A == null ? void 0 : A.size),
      P = k,
      T = ae({
        name: "Checkbox",
        props: n,
        classes: vw,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: AR,
      }),
      { styleProps: R, rest: _ } = os(V),
      $ = _r(d),
      j = A
        ? {
            checked: A.value.includes(_.value),
            onChange: (I) => {
              A.onChange(I), N == null || N(I);
            },
          }
        : {};
    return h.jsx(hw, {
      ...T("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: $,
      size: O,
      labelPosition: w,
      label: u,
      description: y,
      error: v,
      disabled: S,
      classNames: r,
      styles: i,
      unstyled: l,
      "data-checked": j.checked || b || void 0,
      variant: C,
      ref: D,
      mod: B,
      ...R,
      ...p,
      children: h.jsxs(G, {
        ...T("inner"),
        mod: { "data-label-position": w },
        children: [
          h.jsx(G, {
            component: "input",
            id: $,
            ref: t,
            checked: b,
            disabled: S,
            mod: { error: !!v, indeterminate: E },
            ...T("input", { focusable: !0, variant: C }),
            onChange: N,
            ..._,
            ...j,
            type: "checkbox",
          }),
          h.jsx(P, { indeterminate: E, ...T("icon") }),
        ],
      }),
    });
  });
Zo.classes = { ...vw, ...PR };
Zo.displayName = "@mantine/core/Checkbox";
Zo.Group = sp;
function Xr(e) {
  return "group" in e;
}
function ww({ options: e, search: t, limit: n }) {
  const r = t.trim().toLowerCase(),
    o = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    if (o.length === n) return o;
    Xr(i) &&
      o.push({
        group: i.group,
        items: ww({ options: i.items, search: t, limit: n - o.length }),
      }),
      Xr(i) || (i.label.toLowerCase().includes(r) && o.push(i));
  }
  return o;
}
function FR(e) {
  if (e.length === 0) return !0;
  for (const t of e) if (!("group" in t) || t.items.length > 0) return !1;
  return !0;
}
function xw(e, t = new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Xr(n)) xw(n.items, t);
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
function MR(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function bw({
  data: e,
  withCheckIcon: t,
  value: n,
  checkIconPosition: r,
  unstyled: o,
  renderOption: s,
}) {
  if (!Xr(e)) {
    const l = MR(n, e.value),
      a = t && l && h.jsx(yw, { className: Dt.optionsDropdownCheckIcon }),
      c = h.jsxs(h.Fragment, {
        children: [
          r === "left" && a,
          h.jsx("span", { children: e.label }),
          r === "right" && a,
        ],
      });
    return h.jsx(de.Option, {
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
    h.jsx(
      bw,
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
  return h.jsx(de.Group, { label: e.group, children: i });
}
function ip({
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
  renderOption: g,
  scrollAreaProps: b,
  "aria-label": w,
}) {
  xw(e);
  const v =
      typeof o == "string"
        ? (r || ww)({ options: e, search: a ? o : "", limit: s ?? 1 / 0 })
        : e,
    S = FR(v),
    C = v.map((E) =>
      h.jsx(
        bw,
        {
          data: E,
          withCheckIcon: c,
          value: u,
          checkIconPosition: d,
          unstyled: m,
          renderOption: g,
        },
        Xr(E) ? E.group : E.value
      )
    );
  return h.jsx(de.Dropdown, {
    hidden: t || (n && S),
    children: h.jsxs(de.Options, {
      labelledBy: p,
      "aria-label": w,
      children: [
        l
          ? h.jsx(Si.Autosize, {
              mah: i ?? 220,
              type: "scroll",
              scrollbarSize: "var(--combobox-padding)",
              offsetScrollbars: "y",
              ...b,
              children: C,
            })
          : C,
        S && f && h.jsx(de.Empty, { children: f }),
      ],
    }),
  });
}
var Fa = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
};
const Mh = { orientation: "horizontal" },
  IR = (e, { borderWidth: t }) => ({
    group: { "--button-border-width": z(t) },
  }),
  lp = K((e, t) => {
    const n = W("ButtonGroup", Mh, e),
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
      } = W("ButtonGroup", Mh, e),
      p = ae({
        name: "ButtonGroup",
        props: n,
        classes: Fa,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: l,
        vars: c,
        varsResolver: IR,
        rootSelector: "group",
      });
    return h.jsx(G, {
      ...p("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": a }, f],
      role: "group",
      ...m,
    });
  });
lp.classes = Fa;
lp.displayName = "@mantine/core/ButtonGroup";
const zR = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${z(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  BR = {},
  VR = (
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
        "--button-height": Ce(s, "button-height"),
        "--button-padding-x": Ce(s, "button-padding-x"),
        "--button-fz":
          s != null && s.includes("compact")
            ? Je(s.replace("compact-", ""))
            : Je(s),
        "--button-radius": t === void 0 ? void 0 : dn(t),
        "--button-bg": n || o ? a.background : void 0,
        "--button-hover": n || o ? a.hover : void 0,
        "--button-color": a.color,
        "--button-bd": n || o ? a.border : void 0,
        "--button-hover-color": n || o ? a.hoverColor : void 0,
      },
    };
  },
  en = Pn((e, t) => {
    const n = W("Button", BR, e),
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
        loaderProps: g,
        gradient: b,
        classNames: w,
        styles: y,
        unstyled: v,
        "data-disabled": S,
        autoContrast: C,
        mod: E,
        ...k
      } = n,
      D = ae({
        name: "Button",
        props: n,
        classes: Fa,
        className: s,
        style: r,
        classNames: w,
        styles: y,
        unstyled: v,
        vars: o,
        varsResolver: VR,
      }),
      L = !!c,
      N = !!u;
    return h.jsxs(In, {
      ref: t,
      ...D("root", { active: !l && !p && !S }),
      unstyled: v,
      variant: f,
      disabled: l || p,
      mod: [
        {
          disabled: l || S,
          loading: p,
          block: d,
          "with-left-section": L,
          "with-right-section": N,
        },
        E,
      ],
      ...k,
      children: [
        h.jsx(ls, {
          mounted: !!p,
          transition: zR,
          duration: 150,
          children: (F) =>
            h.jsx(G, {
              component: "span",
              ...D("loader", { style: F }),
              "aria-hidden": !0,
              children: h.jsx(Ei, {
                color: "var(--button-color)",
                size: "calc(var(--button-height) / 1.8)",
                ...g,
              }),
            }),
        }),
        h.jsxs("span", {
          ...D("inner"),
          children: [
            c &&
              h.jsx(G, {
                component: "span",
                ...D("section"),
                mod: { position: "left" },
                children: c,
              }),
            h.jsx(G, {
              component: "span",
              mod: { loading: p },
              ...D("label"),
              children: a,
            }),
            u &&
              h.jsx(G, {
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
en.classes = Fa;
en.displayName = "@mantine/core/Button";
en.Group = lp;
var Sw = { root: "m_4451eb3a" };
const HR = {},
  ap = Pn((e, t) => {
    const n = W("Center", HR, e),
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
      f = ae({
        name: "Center",
        props: n,
        classes: Sw,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
      });
    return h.jsx(G, { ref: t, mod: [{ inline: c }, u], ...f("root"), ...d });
  });
ap.classes = Sw;
ap.displayName = "@mantine/core/Center";
var Cw = { root: "m_7485cace" };
const UR = {},
  WR = (e, { size: t, fluid: n }) => ({
    root: { "--container-size": n ? void 0 : Ce(t, "container-size") },
  }),
  gr = K((e, t) => {
    const n = W("Container", UR, e),
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
      f = ae({
        name: "Container",
        classes: Cw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: WR,
      });
    return h.jsx(G, { ref: t, mod: [{ fluid: c }, u], ...f("root"), ...d });
  });
gr.classes = Cw;
gr.displayName = "@mantine/core/Container";
function YR({ open: e, close: t, openDelay: n, closeDelay: r }) {
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
const [qR, Ew] = Yn("HoverCard component was not found in the tree"),
  GR = {};
function _w(e) {
  const {
      children: t,
      onMouseEnter: n,
      onMouseLeave: r,
      ...o
    } = W("HoverCardDropdown", GR, e),
    s = Ew(),
    i = Yl(n, s.openDropdown),
    l = Yl(r, s.closeDropdown);
  return h.jsx(pn.Dropdown, {
    onMouseEnter: i,
    onMouseLeave: l,
    ...o,
    children: t,
  });
}
_w.displayName = "@mantine/core/HoverCardDropdown";
const KR = { refProp: "ref" },
  kw = x.forwardRef((e, t) => {
    const {
      children: n,
      refProp: r,
      eventPropsWrapperName: o,
      ...s
    } = W("HoverCardTarget", KR, e);
    if (!to(n))
      throw new Error(
        "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    const i = Ew(),
      l = Yl(n.props.onMouseEnter, i.openDropdown),
      a = Yl(n.props.onMouseLeave, i.closeDropdown),
      c = { onMouseEnter: l, onMouseLeave: a };
    return h.jsx(pn.Target, {
      refProp: r,
      ref: t,
      ...s,
      children: x.cloneElement(n, o ? { [o]: c } : c),
    });
  });
kw.displayName = "@mantine/core/HoverCardTarget";
const XR = { openDelay: 0, closeDelay: 150, initiallyOpened: !1 };
function Br(e) {
  const {
      children: t,
      onOpen: n,
      onClose: r,
      openDelay: o,
      closeDelay: s,
      initiallyOpened: i,
      ...l
    } = W("HoverCard", XR, e),
    [a, { open: c, close: u }] = li(i, { onClose: r, onOpen: n }),
    { openDropdown: d, closeDropdown: f } = YR({
      open: c,
      close: u,
      openDelay: o,
      closeDelay: s,
    });
  return h.jsx(qR, {
    value: { openDropdown: d, closeDropdown: f },
    children: h.jsx(pn, {
      ...l,
      opened: a,
      __staticSelector: "HoverCard",
      children: t,
    }),
  });
}
Br.displayName = "@mantine/core/HoverCard";
Br.Target = kw;
Br.Dropdown = _w;
Br.extend = (e) => e;
function ld() {
  return (
    (ld = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ld.apply(this, arguments)
  );
}
function QR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var ZR = x.useLayoutEffect,
  JR = function (t) {
    var n = x.useRef(t);
    return (
      ZR(function () {
        n.current = t;
      }),
      n
    );
  },
  Ih = function (t, n) {
    if (typeof t == "function") {
      t(n);
      return;
    }
    t.current = n;
  },
  eD = function (t, n) {
    var r = x.useRef();
    return x.useCallback(
      function (o) {
        (t.current = o),
          r.current && Ih(r.current, null),
          (r.current = n),
          n && Ih(n, o);
      },
      [n]
    );
  },
  zh = {
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
  tD = function (t) {
    Object.keys(zh).forEach(function (n) {
      t.style.setProperty(n, zh[n], "important");
    });
  },
  Bh = tD,
  at = null,
  Vh = function (t, n) {
    var r = t.scrollHeight;
    return n.sizingStyle.boxSizing === "border-box"
      ? r + n.borderSize
      : r - n.paddingSize;
  };
function nD(e, t, n, r) {
  n === void 0 && (n = 1),
    r === void 0 && (r = 1 / 0),
    at ||
      ((at = document.createElement("textarea")),
      at.setAttribute("tabindex", "-1"),
      at.setAttribute("aria-hidden", "true"),
      Bh(at)),
    at.parentNode === null && document.body.appendChild(at);
  var o = e.paddingSize,
    s = e.borderSize,
    i = e.sizingStyle,
    l = i.boxSizing;
  Object.keys(i).forEach(function (f) {
    var m = f;
    at.style[m] = i[m];
  }),
    Bh(at),
    (at.value = t);
  var a = Vh(at, e);
  (at.value = t), (a = Vh(at, e)), (at.value = "x");
  var c = at.scrollHeight - o,
    u = c * n;
  l === "border-box" && (u = u + o + s), (a = Math.max(u, a));
  var d = c * r;
  return l === "border-box" && (d = d + o + s), (a = Math.min(d, a)), [a, c];
}
var Hh = function () {},
  rD = function (t, n) {
    return t.reduce(function (r, o) {
      return (r[o] = n[o]), r;
    }, {});
  },
  oD = [
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
  sD = !!document.documentElement.currentStyle,
  iD = function (t) {
    var n = window.getComputedStyle(t);
    if (n === null) return null;
    var r = rD(oD, n),
      o = r.boxSizing;
    if (o === "") return null;
    sD &&
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
  lD = iD;
function Rw(e, t, n) {
  var r = JR(n);
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
var aD = function (t) {
    Rw(window, "resize", t);
  },
  cD = function (t) {
    Rw(document.fonts, "loadingdone", t);
  },
  uD = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  dD = function (t, n) {
    var r = t.cacheMeasurements,
      o = t.maxRows,
      s = t.minRows,
      i = t.onChange,
      l = i === void 0 ? Hh : i,
      a = t.onHeightChange,
      c = a === void 0 ? Hh : a,
      u = QR(t, uD),
      d = u.value !== void 0,
      f = x.useRef(null),
      m = eD(f, n),
      p = x.useRef(0),
      g = x.useRef(),
      b = function () {
        var v = f.current,
          S = r && g.current ? g.current : lD(v);
        if (S) {
          g.current = S;
          var C = nD(S, v.value || v.placeholder || "x", s, o),
            E = C[0],
            k = C[1];
          p.current !== E &&
            ((p.current = E),
            v.style.setProperty("height", E + "px", "important"),
            c(E, { rowHeight: k }));
        }
      },
      w = function (v) {
        d || b(), l(v);
      };
    return (
      x.useLayoutEffect(b),
      aD(b),
      cD(b),
      x.createElement("textarea", ld({}, u, { onChange: w, ref: m }))
    );
  },
  fD = x.forwardRef(dD);
const pD = {},
  cp = K((e, t) => {
    const {
        autosize: n,
        maxRows: r,
        minRows: o,
        __staticSelector: s,
        resize: i,
        ...l
      } = W("Textarea", pD, e),
      a = n && PC() !== "test",
      c = a ? { maxRows: r, minRows: o } : {};
    return h.jsx(mn, {
      component: a ? fD : "textarea",
      ref: t,
      ...l,
      __staticSelector: s || "Textarea",
      multiline: !0,
      "data-no-overflow": (n && r === void 0) || void 0,
      __vars: { "--input-resize": i },
      ...c,
    });
  });
cp.classes = mn.classes;
cp.displayName = "@mantine/core/Textarea";
const [mD, hD] = Yn("List component was not found in tree");
var up = {
  root: "m_abbac491",
  item: "m_abb6bec2",
  itemWrapper: "m_75cd9f71",
  itemIcon: "m_60f83e5b",
};
const gD = {},
  dp = K((e, t) => {
    const n = W("ListItem", gD, e),
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
      f = hD(),
      m = a || f.icon,
      p = { classNames: r, styles: i };
    return h.jsx(G, {
      ...f.getStyles("item", { ...p, className: o, style: s }),
      component: "li",
      mod: [{ "with-icon": !!m, centered: f.center }, u],
      ref: t,
      ...d,
      children: h.jsxs("div", {
        ...f.getStyles("itemWrapper", p),
        children: [
          m && h.jsx("span", { ...f.getStyles("itemIcon", p), children: m }),
          h.jsx("span", { ...f.getStyles("itemLabel", p), children: c }),
        ],
      }),
    });
  });
dp.classes = up;
dp.displayName = "@mantine/core/ListItem";
const yD = { type: "unordered" },
  vD = (e, { size: t, spacing: n }) => ({
    root: { "--list-fz": Je(t), "--list-lh": Jv(t), "--list-spacing": xi(n) },
  }),
  di = K((e, t) => {
    const n = W("List", yD, e),
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
        spacing: m,
        center: p,
        listStyleType: g,
        mod: b,
        ...w
      } = n,
      y = ae({
        name: "List",
        classes: up,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: vD,
      });
    return h.jsx(mD, {
      value: { center: p, icon: f, getStyles: y },
      children: h.jsx(G, {
        ...y("root", { style: { listStyleType: g } }),
        component: u === "unordered" ? "ul" : "ol",
        mod: [{ "with-padding": d }, b],
        ref: t,
        ...w,
        children: c,
      }),
    });
  });
di.classes = up;
di.displayName = "@mantine/core/List";
di.Item = dp;
var Dw = { root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17" };
const Uh = {
    transitionProps: { transition: "fade", duration: 0 },
    overlayProps: { backgroundOpacity: 0.75 },
    zIndex: no("overlay"),
  },
  wD = (e, { zIndex: t }) => ({
    root: { "--lo-z-index": t == null ? void 0 : t.toString() },
  }),
  fp = K((e, t) => {
    const n = W("LoadingOverlay", Uh, e),
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
      g = fn(),
      b = ae({
        name: "LoadingOverlay",
        classes: Dw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: wD,
      }),
      w = { ...Uh.overlayProps, ...d };
    return h.jsx(ls, {
      transition: "fade",
      ...c,
      mounted: !!f,
      children: (y) =>
        h.jsxs(G, {
          ...b("root", { style: y }),
          ref: t,
          ...p,
          children: [
            h.jsx(Ei, { ...b("loader"), unstyled: l, ...u }),
            h.jsx(ui, {
              ...w,
              ...b("overlay"),
              darkHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || g.white,
            }),
            h.jsx(ui, {
              ...w,
              ...b("overlay"),
              lightHidden: !0,
              unstyled: l,
              color: (d == null ? void 0 : d.color) || g.colors.dark[5],
            }),
          ],
        }),
    });
  });
fp.classes = Dw;
fp.displayName = "@mantine/core/LoadingOverlay";
const [xD, us] = Yn("Modal component was not found in tree");
var Kn = {
  root: "m_9df02822",
  content: "m_54c44539",
  inner: "m_1f958f16",
  header: "m_d0e2b9cd",
};
const bD = {},
  Ma = K((e, t) => {
    const n = W("ModalBody", bD, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = us();
    return h.jsx(tw, {
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
Ma.classes = Kn;
Ma.displayName = "@mantine/core/ModalBody";
const SD = {},
  Ia = K((e, t) => {
    const n = W("ModalCloseButton", SD, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = us();
    return h.jsx(nw, {
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
Ia.classes = Kn;
Ia.displayName = "@mantine/core/ModalCloseButton";
const CD = {},
  za = K((e, t) => {
    const n = W("ModalContent", CD, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: l,
        children: a,
        ...c
      } = n,
      u = us(),
      d = u.scrollAreaComponent || Wk;
    return h.jsx(Bk, {
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
      children: h.jsx(d, {
        style: {
          maxHeight: u.fullScreen
            ? "100dvh"
            : `calc(100dvh - (${z(u.yOffset)} * 2))`,
        },
        children: a,
      }),
    });
  });
za.classes = Kn;
za.displayName = "@mantine/core/ModalContent";
const ED = {},
  Ba = K((e, t) => {
    const n = W("ModalHeader", ED, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = us();
    return h.jsx(rw, {
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
Ba.classes = Kn;
Ba.displayName = "@mantine/core/ModalHeader";
const _D = {},
  Va = K((e, t) => {
    const n = W("ModalOverlay", _D, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = us();
    return h.jsx(ow, {
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
Va.classes = Kn;
Va.displayName = "@mantine/core/ModalOverlay";
const kD = {
    __staticSelector: "Modal",
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: no("modal"),
    transitionProps: { duration: 200, transition: "pop" },
    yOffset: "5dvh",
  },
  RD = (e, { radius: t, size: n, yOffset: r, xOffset: o }) => ({
    root: {
      "--modal-radius": t === void 0 ? void 0 : dn(t),
      "--modal-size": Ce(n, "modal-size"),
      "--modal-y-offset": z(r),
      "--modal-x-offset": z(o),
    },
  }),
  Ha = K((e, t) => {
    const n = W("ModalRoot", kD, e),
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
        __staticSelector: g,
        ...b
      } = n,
      w = ae({
        name: g,
        classes: Kn,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: RD,
      });
    return h.jsx(xD, {
      value: {
        yOffset: c,
        scrollAreaComponent: u,
        getStyles: w,
        fullScreen: f,
      },
      children: h.jsx(Ik, {
        ref: t,
        ...w("root"),
        "data-full-screen": f || void 0,
        "data-centered": m || void 0,
        unstyled: l,
        ...b,
      }),
    });
  });
Ha.classes = Kn;
Ha.displayName = "@mantine/core/ModalRoot";
const DD = {},
  Ua = K((e, t) => {
    const n = W("ModalTitle", DD, e),
      { classNames: r, className: o, style: s, styles: i, vars: l, ...a } = n,
      c = us();
    return h.jsx(sw, {
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
Ua.classes = Kn;
Ua.displayName = "@mantine/core/ModalTitle";
const PD = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: no("modal"),
    transitionProps: { duration: 200, transition: "fade-down" },
    withOverlay: !0,
    withCloseButton: !0,
  },
  hn = K((e, t) => {
    const {
        title: n,
        withOverlay: r,
        overlayProps: o,
        withCloseButton: s,
        closeButtonProps: i,
        children: l,
        radius: a,
        ...c
      } = W("Modal", PD, e),
      u = !!n || s;
    return h.jsxs(Ha, {
      ref: t,
      radius: a,
      ...c,
      children: [
        r && h.jsx(Va, { ...o }),
        h.jsxs(za, {
          radius: a,
          children: [
            u &&
              h.jsxs(Ba, {
                children: [
                  n && h.jsx(Ua, { children: n }),
                  s && h.jsx(Ia, { ...i }),
                ],
              }),
            h.jsx(Ma, { children: l }),
          ],
        }),
      ],
    });
  });
hn.classes = Kn;
hn.displayName = "@mantine/core/Modal";
hn.Root = Ha;
hn.Overlay = Va;
hn.Content = za;
hn.Body = Ma;
hn.Header = Ba;
hn.Title = Ua;
hn.CloseButton = Ia;
const [ND, pp] = bf(),
  [TD, jD] = bf();
var Wa = {
  root: "m_7cda1cd6",
  "root--default": "m_44da308b",
  "root--contrast": "m_e3a01f8",
  label: "m_1e0e6180",
  remove: "m_ae386778",
  group: "m_1dcfd90b",
};
const OD = {},
  $D = (e, { gap: t }, { size: n }) => ({
    group: { "--pg-gap": t !== void 0 ? Ce(t) : Ce(n, "pg-gap") },
  }),
  mp = K((e, t) => {
    const n = W("PillGroup", OD, e),
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
      f = pp(),
      m = (f == null ? void 0 : f.size) || c || void 0,
      p = ae({
        name: "PillGroup",
        classes: Wa,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: $D,
        stylesCtx: { size: m },
        rootSelector: "group",
      });
    return h.jsx(TD, {
      value: { size: m, disabled: u },
      children: h.jsx(G, { ref: t, size: m, ...p("group"), ...d }),
    });
  });
mp.classes = Wa;
mp.displayName = "@mantine/core/PillGroup";
const LD = { variant: "default" },
  AD = (e, { radius: t }, { size: n }) => ({
    root: {
      "--pill-fz": Ce(n, "pill-fz"),
      "--pill-height": Ce(n, "pill-height"),
      "--pill-radius": t === void 0 ? void 0 : dn(t),
    },
  }),
  Qr = K((e, t) => {
    const n = W("Pill", LD, e),
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
        size: g,
        disabled: b,
        mod: w,
        ...y
      } = n,
      v = jD(),
      S = pp(),
      C = g || (v == null ? void 0 : v.size) || void 0,
      E =
        (S == null ? void 0 : S.variant) === "filled"
          ? "contrast"
          : c || "default",
      k = ae({
        name: "Pill",
        classes: Wa,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: AD,
        stylesCtx: { size: C },
      });
    return h.jsxs(G, {
      component: "span",
      ref: t,
      variant: E,
      size: C,
      ...k("root", { variant: E }),
      mod: [
        {
          "with-remove": d && !b,
          disabled: b || (v == null ? void 0 : v.disabled),
        },
        w,
      ],
      ...y,
      children: [
        h.jsx("span", { ...k("label"), children: u }),
        d &&
          h.jsx(as, {
            variant: "transparent",
            radius: p,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: l,
            ...m,
            ...k("remove", {
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
Qr.classes = Wa;
Qr.displayName = "@mantine/core/Pill";
Qr.Group = mp;
var Pw = { field: "m_45c4369d" };
const FD = { type: "visible" },
  hp = K((e, t) => {
    const n = W("PillsInputField", FD, e),
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
      g = pp(),
      b = cs(),
      w = ae({
        name: "PillsInputField",
        classes: Pw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "field",
      }),
      y = u || (g == null ? void 0 : g.disabled);
    return h.jsx(G, {
      component: "input",
      ref: Mt(t, g == null ? void 0 : g.fieldRef),
      "data-type": c,
      disabled: y,
      mod: [{ disabled: y, pointer: f }, m],
      ...w("field"),
      ...p,
      id: (b == null ? void 0 : b.inputId) || d,
      "aria-invalid": g == null ? void 0 : g.hasError,
      "aria-describedby": b == null ? void 0 : b.describedBy,
      type: "text",
      onMouseDown: (v) => !f && v.stopPropagation(),
    });
  });
hp.classes = Pw;
hp.displayName = "@mantine/core/PillsInputField";
const MD = {},
  Jo = K((e, t) => {
    const n = W("PillsInput", MD, e),
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
    return h.jsx(ND, {
      value: { fieldRef: f, size: i, disabled: l, hasError: !!c, variant: u },
      children: h.jsx(mn, {
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
Jo.Field = hp;
function ID({ data: e, value: t }) {
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
const zD = {
    maxValues: 1 / 0,
    withCheckIcon: !0,
    checkIconPosition: "left",
    hiddenInputValuesDivider: ",",
  },
  gp = K((e, t) => {
    const n = W("MultiSelect", zD, e),
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
        data: g,
        dropdownOpened: b,
        defaultDropdownOpened: w,
        onDropdownOpen: y,
        onDropdownClose: v,
        selectFirstOptionOnChange: S,
        onOptionSubmit: C,
        comboboxProps: E,
        filter: k,
        limit: D,
        withScrollArea: L,
        maxDropdownHeight: N,
        searchValue: F,
        defaultSearchValue: B,
        onSearchChange: V,
        readOnly: A,
        disabled: O,
        onFocus: P,
        onBlur: T,
        onPaste: R,
        radius: _,
        rightSection: $,
        rightSectionWidth: j,
        rightSectionPointerEvents: I,
        rightSectionProps: q,
        leftSection: Q,
        leftSectionWidth: ee,
        leftSectionPointerEvents: ne,
        leftSectionProps: te,
        inputContainer: me,
        inputWrapperOrder: oe,
        withAsterisk: le,
        labelProps: J,
        descriptionProps: he,
        errorProps: ce,
        wrapperProps: se,
        description: Re,
        label: Ie,
        error: ve,
        maxValues: Ge,
        searchable: De,
        nothingFoundMessage: Le,
        withCheckIcon: Y,
        checkIconPosition: re,
        hidePickedOptions: ie,
        withErrorStyles: xe,
        name: Ae,
        form: ht,
        id: be,
        clearable: Fe,
        clearButtonProps: It,
        hiddenInputProps: We,
        placeholder: gt,
        hiddenInputValuesDivider: Nn,
        required: Ke,
        mod: lt,
        renderOption: ms,
        onRemove: yt,
        onClear: Tn,
        scrollAreaProps: io,
        ...lo
      } = n,
      vn = _r(be),
      Ee = Gf(g),
      Nt = La(Ee),
      vt = Aa({
        opened: b,
        defaultOpened: w,
        onDropdownOpen: y,
        onDropdownClose: () => {
          v == null || v(), vt.resetSelectedOption();
        },
      }),
      {
        styleProps: fc,
        rest: { type: Ve, autoComplete: jn, ...ao },
      } = os(lo),
      [Ne, On] = ln({ value: u, defaultValue: d, finalValue: [], onChange: f }),
      [Pr, Nr] = ln({ value: F, defaultValue: B, finalValue: "", onChange: V }),
      hs = ae({
        name: "MultiSelect",
        classes: {},
        props: n,
        classNames: r,
        styles: i,
        unstyled: l,
      }),
      { resolvedClassNames: Pi, resolvedStyles: Ni } = oo({
        props: n,
        styles: i,
        classNames: r,
      }),
      pc = (we) => {
        m == null || m(we),
          we.key === " " && !De && (we.preventDefault(), vt.toggleDropdown()),
          we.key === "Backspace" &&
            Pr.length === 0 &&
            Ne.length > 0 &&
            (yt == null || yt(Ne[Ne.length - 1]),
            On(Ne.slice(0, Ne.length - 1)));
      },
      ge = Ne.map((we, gs) => {
        var Hp, Up;
        return h.jsx(
          Qr,
          {
            withRemoveButton: !A && !((Hp = Nt[we]) != null && Hp.disabled),
            onRemove: () => {
              On(Ne.filter((Q1) => we !== Q1)), yt == null || yt(we);
            },
            unstyled: l,
            disabled: O,
            ...hs("pill"),
            children: ((Up = Nt[we]) == null ? void 0 : Up.label) || we,
          },
          `${we}-${gs}`
        );
      });
    x.useEffect(() => {
      S && vt.selectFirstOption();
    }, [S, Ne]);
    const wt =
        Fe &&
        Ne.length > 0 &&
        !O &&
        !A &&
        h.jsx(de.ClearButton, {
          size: c,
          ...It,
          onClear: () => {
            Tn == null || Tn(), On([]), Nr("");
          },
        }),
      Xn = ID({ data: Ee, value: Ne });
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs(de, {
          store: vt,
          classNames: Pi,
          styles: Ni,
          unstyled: l,
          size: c,
          readOnly: A,
          __staticSelector: "MultiSelect",
          onOptionSubmit: (we) => {
            C == null || C(we),
              Nr(""),
              vt.updateSelectedOptionIndex("selected"),
              Ne.includes(Nt[we].value)
                ? (On(Ne.filter((gs) => gs !== Nt[we].value)),
                  yt == null || yt(Nt[we].value))
                : Ne.length < Ge && On([...Ne, Nt[we].value]);
          },
          ...E,
          children: [
            h.jsx(de.DropdownTarget, {
              children: h.jsx(Jo, {
                ...fc,
                __staticSelector: "MultiSelect",
                classNames: Pi,
                styles: Ni,
                unstyled: l,
                size: c,
                className: o,
                style: s,
                variant: p,
                disabled: O,
                radius: _,
                rightSection:
                  $ ||
                  wt ||
                  h.jsx(de.Chevron, { size: c, error: ve, unstyled: l }),
                rightSectionPointerEvents: I || (wt ? "all" : "none"),
                rightSectionWidth: j,
                rightSectionProps: q,
                leftSection: Q,
                leftSectionWidth: ee,
                leftSectionPointerEvents: ne,
                leftSectionProps: te,
                inputContainer: me,
                inputWrapperOrder: oe,
                withAsterisk: le,
                labelProps: J,
                descriptionProps: he,
                errorProps: ce,
                wrapperProps: se,
                description: Re,
                label: Ie,
                error: ve,
                multiline: !0,
                withErrorStyles: xe,
                __stylesApiProps: {
                  ...n,
                  rightSectionPointerEvents: I || (wt ? "all" : "none"),
                  multiline: !0,
                },
                pointer: !De,
                onClick: () => (De ? vt.openDropdown() : vt.toggleDropdown()),
                "data-expanded": vt.dropdownOpened || void 0,
                id: vn,
                required: Ke,
                mod: lt,
                children: h.jsxs(Qr.Group, {
                  disabled: O,
                  unstyled: l,
                  ...hs("pillsList"),
                  children: [
                    ge,
                    h.jsx(de.EventsTarget, {
                      autoComplete: jn,
                      children: h.jsx(Jo.Field, {
                        ...ao,
                        ref: t,
                        id: vn,
                        placeholder: gt,
                        type: !De && !gt ? "hidden" : "visible",
                        ...hs("inputField"),
                        unstyled: l,
                        onFocus: (we) => {
                          P == null || P(we), De && vt.openDropdown();
                        },
                        onBlur: (we) => {
                          T == null || T(we), vt.closeDropdown(), Nr("");
                        },
                        onKeyDown: pc,
                        value: Pr,
                        onChange: (we) => {
                          Nr(we.currentTarget.value),
                            De && vt.openDropdown(),
                            S && vt.selectFirstOption();
                        },
                        disabled: O,
                        readOnly: A || !De,
                        pointer: !De,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            h.jsx(ip, {
              data: ie ? Xn : Ee,
              hidden: A || O,
              filter: k,
              search: Pr,
              limit: D,
              hiddenWhenEmpty:
                !De || !Le || (ie && Xn.length === 0 && Pr.trim().length === 0),
              withScrollArea: L,
              maxDropdownHeight: N,
              filterOptions: De,
              value: Ne,
              checkIconPosition: re,
              withCheckIcon: Y,
              nothingFoundMessage: Le,
              unstyled: l,
              labelId: Ie ? `${vn}-label` : void 0,
              "aria-label": Ie ? void 0 : lo["aria-label"],
              renderOption: ms,
              scrollAreaProps: io,
            }),
          ],
        }),
        h.jsx(de.HiddenInput, {
          name: Ae,
          valuesDivider: Nn,
          value: Ne,
          form: ht,
          disabled: O,
          ...We,
        }),
      ],
    });
  });
gp.classes = { ...mn.classes, ...de.classes };
gp.displayName = "@mantine/core/MultiSelect";
const BD = {
    searchable: !1,
    withCheckIcon: !0,
    allowDeselect: !0,
    checkIconPosition: "left",
  },
  yp = K((e, t) => {
    const n = W("Select", BD, e),
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
        data: g,
        value: b,
        defaultValue: w,
        selectFirstOptionOnChange: y,
        onOptionSubmit: v,
        comboboxProps: S,
        readOnly: C,
        disabled: E,
        filter: k,
        limit: D,
        withScrollArea: L,
        maxDropdownHeight: N,
        size: F,
        searchable: B,
        rightSection: V,
        checkIconPosition: A,
        withCheckIcon: O,
        nothingFoundMessage: P,
        name: T,
        form: R,
        searchValue: _,
        defaultSearchValue: $,
        onSearchChange: j,
        allowDeselect: I,
        error: q,
        rightSectionPointerEvents: Q,
        id: ee,
        clearable: ne,
        clearButtonProps: te,
        hiddenInputProps: me,
        renderOption: oe,
        onClear: le,
        autoComplete: J,
        scrollAreaProps: he,
        ...ce
      } = n,
      se = x.useMemo(() => Gf(g), [g]),
      Re = x.useMemo(() => La(se), [se]),
      Ie = _r(ee),
      [ve, Ge, De] = ln({
        value: b,
        defaultValue: w,
        finalValue: null,
        onChange: p,
      }),
      Le = typeof ve == "string" ? Re[ve] : void 0,
      [Y, re] = ln({
        value: _,
        defaultValue: $,
        finalValue: Le ? Le.label : "",
        onChange: j,
      }),
      ie = Aa({
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
      { resolvedClassNames: xe, resolvedStyles: Ae } = oo({
        props: n,
        styles: o,
        classNames: r,
      });
    x.useEffect(() => {
      y && ie.selectFirstOption();
    }, [y, ve]),
      x.useEffect(() => {
        b === null && re(""), typeof b == "string" && Le && re(Le.label);
      }, [b, Le]);
    const ht =
      ne &&
      !!ve &&
      !E &&
      !C &&
      h.jsx(de.ClearButton, {
        size: F,
        ...te,
        onClear: () => {
          Ge(null, null), re(""), le == null || le();
        },
      });
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs(de, {
          store: ie,
          __staticSelector: "Select",
          classNames: xe,
          styles: Ae,
          unstyled: s,
          readOnly: C,
          onOptionSubmit: (be) => {
            v == null || v(be);
            const Fe = I && Re[be].value === ve ? null : Re[be],
              It = Fe ? Fe.value : null;
            Ge(It, Fe),
              !De &&
                re(
                  (typeof It == "string" && (Fe == null ? void 0 : Fe.label)) ||
                    ""
                ),
              ie.closeDropdown();
          },
          size: F,
          ...S,
          children: [
            h.jsx(de.Target, {
              targetType: B ? "input" : "button",
              autoComplete: J,
              children: h.jsx(mn, {
                id: Ie,
                ref: t,
                rightSection:
                  V ||
                  ht ||
                  h.jsx(de.Chevron, { size: F, error: q, unstyled: s }),
                rightSectionPointerEvents: Q || (ht ? "all" : "none"),
                ...ce,
                size: F,
                __staticSelector: "Select",
                disabled: E,
                readOnly: C || !B,
                value: Y,
                onChange: (be) => {
                  re(be.currentTarget.value),
                    ie.openDropdown(),
                    y && ie.selectFirstOption();
                },
                onFocus: (be) => {
                  B && ie.openDropdown(), d == null || d(be);
                },
                onBlur: (be) => {
                  var Fe;
                  B && ie.closeDropdown(),
                    re(
                      (ve != null &&
                        ((Fe = Re[ve]) == null ? void 0 : Fe.label)) ||
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
                error: q,
              }),
            }),
            h.jsx(ip, {
              data: se,
              hidden: C || E,
              filter: k,
              search: Y,
              limit: D,
              hiddenWhenEmpty: !B || !P,
              withScrollArea: L,
              maxDropdownHeight: N,
              filterOptions: B && (Le == null ? void 0 : Le.label) !== Y,
              value: ve,
              checkIconPosition: A,
              withCheckIcon: O,
              nothingFoundMessage: P,
              unstyled: s,
              labelId: ce.label ? `${Ie}-label` : void 0,
              "aria-label": ce.label ? void 0 : ce["aria-label"],
              renderOption: oe,
              scrollAreaProps: he,
            }),
          ],
        }),
        h.jsx(de.HiddenInput, {
          value: ve,
          name: T,
          form: R,
          disabled: E,
          ...me,
        }),
      ],
    });
  });
yp.classes = { ...mn.classes, ...de.classes };
yp.displayName = "@mantine/core/Select";
function VD({ data: e, value: t }) {
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
function HD(e, t) {
  return e
    ? t
        .split(new RegExp(`[${e.join("")}]`))
        .map((n) => n.trim())
        .filter((n) => n !== "")
    : [t];
}
function Wh({
  splitChars: e,
  allowDuplicates: t,
  maxTags: n,
  value: r,
  currentTags: o,
}) {
  const s = HD(e, r),
    i = t ? [...o, ...s] : [...new Set([...o, ...s])];
  return n ? i.slice(0, n) : i;
}
const UD = {
    maxTags: 1 / 0,
    allowDuplicates: !1,
    splitChars: [","],
    hiddenInputValuesDivider: ",",
  },
  vp = K((e, t) => {
    const n = W("TagsInput", UD, e),
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
        allowDuplicates: g,
        onDuplicate: b,
        variant: w,
        data: y,
        dropdownOpened: v,
        defaultDropdownOpened: S,
        onDropdownOpen: C,
        onDropdownClose: E,
        selectFirstOptionOnChange: k,
        onOptionSubmit: D,
        comboboxProps: L,
        filter: N,
        limit: F,
        withScrollArea: B,
        maxDropdownHeight: V,
        searchValue: A,
        defaultSearchValue: O,
        onSearchChange: P,
        readOnly: T,
        disabled: R,
        splitChars: _,
        onFocus: $,
        onBlur: j,
        onPaste: I,
        radius: q,
        rightSection: Q,
        rightSectionWidth: ee,
        rightSectionPointerEvents: ne,
        rightSectionProps: te,
        leftSection: me,
        leftSectionWidth: oe,
        leftSectionPointerEvents: le,
        leftSectionProps: J,
        inputContainer: he,
        inputWrapperOrder: ce,
        withAsterisk: se,
        required: Re,
        labelProps: Ie,
        descriptionProps: ve,
        errorProps: Ge,
        wrapperProps: De,
        description: Le,
        label: Y,
        error: re,
        withErrorStyles: ie,
        name: xe,
        form: Ae,
        id: ht,
        clearable: be,
        clearButtonProps: Fe,
        hiddenInputProps: It,
        hiddenInputValuesDivider: We,
        mod: gt,
        renderOption: Nn,
        onRemove: Ke,
        onClear: lt,
        scrollAreaProps: ms,
        ...yt
      } = n,
      Tn = _r(ht),
      io = Gf(y),
      lo = La(io),
      vn = Aa({
        opened: v,
        defaultOpened: S,
        onDropdownOpen: C,
        onDropdownClose: () => {
          E == null || E(), vn.resetSelectedOption();
        },
      }),
      {
        styleProps: Ee,
        rest: { type: Nt, autoComplete: vt, ...fc },
      } = os(yt),
      [Ve, jn] = ln({ value: u, defaultValue: d, finalValue: [], onChange: f }),
      [ao, Ne] = ln({ value: A, defaultValue: O, finalValue: "", onChange: P }),
      On = ae({
        name: "TagsInput",
        classes: {},
        props: n,
        classNames: r,
        styles: i,
        unstyled: l,
      }),
      { resolvedClassNames: Pr, resolvedStyles: Nr } = oo({
        props: n,
        styles: i,
        classNames: r,
      }),
      hs = (ge) => {
        m == null || m(ge);
        const wt = ao.trim(),
          { length: Xn } = wt;
        if (
          (_.includes(ge.key) &&
            Xn > 0 &&
            (jn(
              Wh({
                splitChars: _,
                allowDuplicates: g,
                maxTags: p,
                value: ao,
                currentTags: Ve,
              })
            ),
            Ne(""),
            ge.preventDefault()),
          ge.key === "Enter" && Xn > 0 && !ge.nativeEvent.isComposing)
        ) {
          ge.preventDefault();
          const we = Ve.some((gs) => gs.toLowerCase() === wt.toLowerCase());
          we && (b == null || b(wt)),
            (!we || (we && g)) &&
              Ve.length < p &&
              (D == null || D(wt), Ne(""), wt.length > 0 && jn([...Ve, wt]));
        }
        ge.key === "Backspace" &&
          Xn === 0 &&
          Ve.length > 0 &&
          !ge.nativeEvent.isComposing &&
          (Ke == null || Ke(Ve[Ve.length - 1]), jn(Ve.slice(0, Ve.length - 1)));
      },
      Pi = (ge) => {
        if ((I == null || I(ge), ge.preventDefault(), ge.clipboardData)) {
          const wt = ge.clipboardData.getData("text/plain");
          jn(
            Wh({
              splitChars: _,
              allowDuplicates: g,
              maxTags: p,
              value: wt,
              currentTags: Ve,
            })
          ),
            Ne("");
        }
      },
      Ni = Ve.map((ge, wt) =>
        h.jsx(
          Qr,
          {
            withRemoveButton: !T,
            onRemove: () => {
              jn(Ve.filter((Xn) => ge !== Xn)), Ke == null || Ke(ge);
            },
            unstyled: l,
            disabled: R,
            ...On("pill"),
            children: ge,
          },
          `${ge}-${wt}`
        )
      ),
      pc =
        be &&
        Ve.length > 0 &&
        !R &&
        !T &&
        h.jsx(de.ClearButton, {
          size: c,
          ...Fe,
          onClear: () => {
            jn([]), Ne(""), lt == null || lt();
          },
        });
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs(de, {
          store: vn,
          classNames: Pr,
          styles: Nr,
          unstyled: l,
          size: c,
          readOnly: T,
          __staticSelector: "TagsInput",
          onOptionSubmit: (ge) => {
            D == null || D(ge),
              Ne(""),
              Ve.length < p && jn([...Ve, lo[ge].label]);
          },
          ...L,
          children: [
            h.jsx(de.DropdownTarget, {
              children: h.jsx(Jo, {
                ...Ee,
                __staticSelector: "TagsInput",
                classNames: Pr,
                styles: Nr,
                unstyled: l,
                size: c,
                className: o,
                style: s,
                variant: w,
                disabled: R,
                radius: q,
                rightSection: Q || pc,
                rightSectionWidth: ee,
                rightSectionPointerEvents: ne,
                rightSectionProps: te,
                leftSection: me,
                leftSectionWidth: oe,
                leftSectionPointerEvents: le,
                leftSectionProps: J,
                inputContainer: he,
                inputWrapperOrder: ce,
                withAsterisk: se,
                required: Re,
                labelProps: Ie,
                descriptionProps: ve,
                errorProps: Ge,
                wrapperProps: De,
                description: Le,
                label: Y,
                error: re,
                multiline: !0,
                withErrorStyles: ie,
                __stylesApiProps: { ...n, multiline: !0 },
                id: Tn,
                mod: gt,
                children: h.jsxs(Qr.Group, {
                  disabled: R,
                  unstyled: l,
                  ...On("pillsList"),
                  children: [
                    Ni,
                    h.jsx(de.EventsTarget, {
                      autoComplete: vt,
                      children: h.jsx(Jo.Field, {
                        ...fc,
                        ref: t,
                        ...On("inputField"),
                        unstyled: l,
                        onKeyDown: hs,
                        onFocus: (ge) => {
                          $ == null || $(ge), vn.openDropdown();
                        },
                        onBlur: (ge) => {
                          j == null || j(ge), vn.closeDropdown();
                        },
                        onPaste: Pi,
                        value: ao,
                        onChange: (ge) => Ne(ge.currentTarget.value),
                        required: Re && Ve.length === 0,
                        disabled: R,
                        readOnly: T,
                        id: Tn,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            h.jsx(ip, {
              data: VD({ data: io, value: Ve }),
              hidden: T || R,
              filter: N,
              search: ao,
              limit: F,
              hiddenWhenEmpty: !0,
              withScrollArea: B,
              maxDropdownHeight: V,
              unstyled: l,
              labelId: Y ? `${Tn}-label` : void 0,
              "aria-label": Y ? void 0 : yt["aria-label"],
              renderOption: Nn,
              scrollAreaProps: ms,
            }),
          ],
        }),
        h.jsx(de.HiddenInput, {
          name: xe,
          form: Ae,
          value: Ve,
          valuesDivider: We,
          disabled: R,
          ...It,
        }),
      ],
    });
  });
vp.classes = { ...mn.classes, ...de.classes };
vp.displayName = "@mantine/core/TagsInput";
const WD = {},
  Ya = K((e, t) => {
    const n = W("TextInput", WD, e);
    return h.jsx(mn, {
      component: "input",
      ref: t,
      ...n,
      __staticSelector: "TextInput",
    });
  });
Ya.classes = mn.classes;
Ya.displayName = "@mantine/core/TextInput";
var Nw = { root: "m_7341320d" };
const YD = {},
  qD = (
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
        "--ti-size": Ce(t, "ti-size"),
        "--ti-radius": n === void 0 ? void 0 : dn(n),
        "--ti-bg": s || r ? l.background : void 0,
        "--ti-color": s || r ? l.color : void 0,
        "--ti-bd": s || r ? l.border : void 0,
      },
    };
  },
  wp = K((e, t) => {
    const n = W("ThemeIcon", YD, e),
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
      d = ae({
        name: "ThemeIcon",
        classes: Nw,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: qD,
      });
    return h.jsx(G, { ref: t, ...d("root"), ...u });
  });
wp.classes = Nw;
wp.displayName = "@mantine/core/ThemeIcon";
function GD(e) {
  return function ({ isLoading: n, ...r }) {
    return n ? h.jsx("div", { children: "Loading..." }) : h.jsx(e, { ...r });
  };
}
function KD(e) {
  return function ({ error: n, ...r }) {
    return n
      ? h.jsxs("div", { children: ["Error: ", n.message] })
      : h.jsx(e, { ...r });
  };
}
var Tw = { exports: {} },
  XD = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  QD = XD,
  ZD = QD;
function jw() {}
function Ow() {}
Ow.resetWarningCache = jw;
var JD = function () {
  function e(r, o, s, i, l, a) {
    if (a !== ZD) {
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
    checkPropTypes: Ow,
    resetWarningCache: jw,
  };
  return (n.PropTypes = n), n;
};
Tw.exports = JD();
var eP = Tw.exports;
const U = br(eP);
function tP(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
    );
}
const nP = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Xe(e, t) {
  nP(() => {
    if (e)
      return (
        window.addEventListener(e, t), () => window.removeEventListener(e, t)
      );
  }, [e]);
}
function rP(e, t) {
  e && tP(e),
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
function oP(e) {
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
function ad(e) {
  return e === null || typeof e != "object"
    ? {}
    : Object.keys(e).reduce((t, n) => {
        const r = e[n];
        return r != null && r !== !1 && (t[n] = r), t;
      }, {});
}
function sP(e) {
  const [t, n] = x.useState(ad(e)),
    r = x.useCallback((l) => {
      n((a) => ad(typeof l == "function" ? l(a) : l));
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
function $w(e, t) {
  if (t === null || typeof t != "object") return {};
  const n = { ...t };
  return (
    Object.keys(t).forEach((r) => {
      r.includes(`${String(e)}.`) && delete n[r];
    }),
    n
  );
}
function Yh(e, t) {
  const n = e.substring(t.length + 1).split(".")[0];
  return parseInt(n, 10);
}
function qh(e, t, n, r) {
  if (t === void 0) return n;
  const o = `${String(e)}`;
  let s = n;
  r === -1 && (s = $w(`${o}.${t}`, s));
  const i = { ...s },
    l = new Set();
  return (
    Object.entries(s)
      .filter(([a]) => {
        if (!a.startsWith(`${o}.`)) return !1;
        const c = Yh(a, o);
        return Number.isNaN(c) ? !1 : c >= t;
      })
      .forEach(([a, c]) => {
        const u = Yh(a, o),
          d = a.replace(`${o}.${u}`, `${o}.${u + r}`);
        (i[d] = c), l.add(d), l.has(a) || delete i[a];
      }),
    i
  );
}
function iP(e, { from: t, to: n }, r) {
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
function Gh(e, t, n) {
  typeof n.value == "object" && (n.value = Do(n.value)),
    !n.enumerable ||
    n.get ||
    n.set ||
    !n.configurable ||
    !n.writable ||
    t === "__proto__"
      ? Object.defineProperty(e, t, n)
      : (e[t] = n.value);
}
function Do(e) {
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
          o.add(Do(i));
        }))
      : s === "[object Map]"
      ? ((o = new Map()),
        e.forEach(function (i, l) {
          o.set(Do(l), Do(i));
        }))
      : s === "[object Date]"
      ? (o = new Date(+e))
      : s === "[object RegExp]"
      ? (o = new RegExp(e.source, e.flags))
      : s === "[object DataView]"
      ? (o = new e.constructor(Do(e.buffer)))
      : s === "[object ArrayBuffer]"
      ? (o = e.slice(0))
      : s.slice(-6) === "Array]" && (o = new e.constructor(e)),
    o)
  ) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      Gh(o, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      (Object.hasOwnProperty.call(o, (n = r[t])) && o[n] === e[n]) ||
        Gh(o, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return o || e;
}
function Lw(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Ct(e, t) {
  const n = Lw(e);
  if (n.length === 0 || typeof t != "object" || t === null) return;
  let r = t[n[0]];
  for (let o = 1; o < n.length && r !== void 0; o += 1) r = r[n[o]];
  return r;
}
function qa(e, t, n) {
  const r = Lw(e);
  if (r.length === 0) return n;
  const o = Do(n);
  if (r.length === 1) return (o[r[0]] = t), o;
  let s = o[r[0]];
  for (let i = 1; i < r.length - 1; i += 1) {
    if (s === void 0) return o;
    s = s[r[i]];
  }
  return (s[r[r.length - 1]] = t), o;
}
function lP(e, { from: t, to: n }, r) {
  const o = Ct(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o],
    i = o[t];
  return s.splice(t, 1), s.splice(n, 0, i), qa(e, s, r);
}
function aP(e, t, n, r) {
  const o = Ct(e, r);
  if (!Array.isArray(o)) return r;
  const s = [...o];
  return s.splice(typeof n == "number" ? n : s.length, 0, t), qa(e, s, r);
}
function cP(e, t, n) {
  const r = Ct(e, n);
  return Array.isArray(r)
    ? qa(
        e,
        r.filter((o, s) => s !== t),
        n
      )
    : n;
}
function uP({ $values: e, $errors: t, $status: n }) {
  const r = x.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => iP(i, l, a)),
        e.setValues({ values: lP(i, l, e.refValues.current), updateState: !0 });
    }, []),
    o = x.useCallback((i, l) => {
      n.clearFieldDirty(i),
        t.setErrors((a) => qh(i, l, a, -1)),
        e.setValues({ values: cP(i, l, e.refValues.current), updateState: !0 });
    }, []),
    s = x.useCallback((i, l, a) => {
      n.clearFieldDirty(i),
        t.setErrors((c) => qh(i, a, c, 1)),
        e.setValues({
          values: aP(i, l, a, e.refValues.current),
          updateState: !0,
        });
    }, []);
  return { reorderListItem: r, removeListItem: o, insertListItem: s };
}
var dP = function e(t, n) {
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
const Jc = br(dP);
function el(e, t) {
  const n = Object.keys(e);
  if (typeof t == "string") {
    const r = n.filter((o) => o.startsWith(`${t}.`));
    return e[t] || r.some((o) => e[o]) || !1;
  }
  return n.some((r) => e[r]);
}
function fP({ initialDirty: e, initialTouched: t, mode: n, $values: r }) {
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
      u((k) => (el(k, C) === E ? k : { ...k, [C]: E }));
    }, []),
    g = x.useCallback((C, E) => {
      d((k) => (el(k, C) === E ? k : { ...k, [C]: E }));
    }, []),
    b = x.useCallback((C) => el(a.current, C), []),
    w = x.useCallback(
      (C) =>
        d((E) => {
          if (typeof C != "string") return E;
          const k = $w(C, E);
          return delete k[C], Jc(k, E) ? E : k;
        }),
      []
    ),
    y = x.useCallback((C) => {
      if (C) {
        const k = Ct(C, c.current);
        if (typeof k == "boolean") return k;
        const D = Ct(C, r.refValues.current),
          L = Ct(C, r.valuesSnapshot.current);
        return !Jc(D, L);
      }
      return Object.keys(c.current).length > 0
        ? el(c.current)
        : !Jc(r.refValues.current, r.valuesSnapshot.current);
    }, []),
    v = x.useCallback(() => c.current, []),
    S = x.useCallback(() => a.current, []);
  return {
    touchedState: o,
    dirtyState: i,
    touchedRef: a,
    dirtyRef: c,
    setTouched: u,
    setDirty: d,
    resetDirty: m,
    resetTouched: f,
    isTouched: b,
    setFieldTouched: p,
    setFieldDirty: g,
    setTouchedState: s,
    setDirtyState: l,
    clearFieldDirty: w,
    isDirty: y,
    getDirty: v,
    getTouched: S,
  };
}
function pP({ initialValues: e, onValuesChange: t, mode: n }) {
  const r = x.useRef(!1),
    [o, s] = x.useState(e || {}),
    i = x.useRef(o),
    l = x.useRef(o),
    a = x.useCallback(
      ({
        values: p,
        subscribers: g,
        updateState: b = !0,
        mergeWithPreviousValues: w = !0,
      }) => {
        const y = i.current,
          v = p instanceof Function ? p(i.current) : p,
          S = w ? { ...y, ...v } : v;
        (i.current = S),
          b && s(S),
          t == null || t(S, y),
          g == null ||
            g
              .filter(Boolean)
              .forEach((C) => C({ updatedValues: S, previousValues: y }));
      },
      [t]
    ),
    c = x.useCallback((p) => {
      var w;
      const g = Ct(p.path, i.current),
        b = p.value instanceof Function ? p.value(g) : p.value;
      if (g !== b) {
        const y = i.current,
          v = qa(p.path, b, i.current);
        a({ values: v, updateState: p.updateState }),
          (w = p.subscribers) == null ||
            w
              .filter(Boolean)
              .forEach((S) =>
                S({ path: p.path, updatedValues: v, previousValues: y })
              );
      }
    }, []),
    u = x.useCallback((p) => {
      l.current = p;
    }, []),
    d = x.useCallback((p, g) => {
      r.current ||
        ((r.current = !0),
        a({ values: p, updateState: n === "controlled" }),
        u(p),
        g());
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
function mP({ $status: e }) {
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
function Kh(e) {
  const t = ad(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function cd(e, t, n = "", r = {}) {
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
            ((c = !0), a.forEach((u, d) => cd(i, t, `${l}.${d}`, o))),
          typeof i == "object" &&
            typeof a == "object" &&
            a !== null &&
            (c || cd(i, t, l, o)),
          o
        );
      }, r);
}
function ud(e, t) {
  return Kh(typeof e == "function" ? e(t) : cd(e, t));
}
function tl(e, t, n) {
  if (typeof e != "string") return { hasError: !1, error: null };
  const r = ud(t, n),
    o = Object.keys(r.errors).find((s) =>
      e.split(".").every((i, l) => i === s.split(".")[l])
    );
  return { hasError: !!o, error: o ? r.errors[o] : null };
}
const hP = "__MANTINE_FORM_INDEX__";
function Xh(e, t) {
  return t
    ? typeof t == "boolean"
      ? t
      : Array.isArray(t)
      ? t.includes(e.replace(/[.][0-9]/g, `.${hP}`))
      : !1
    : !1;
}
function gP({
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
  const m = sP(r),
    p = pP({ initialValues: n, onValuesChange: c, mode: t }),
    g = fP({ initialDirty: o, initialTouched: s, $values: p, mode: t }),
    b = uP({ $values: p, $errors: m, $status: g }),
    w = mP({ $status: g }),
    [y, v] = x.useState(0),
    [S, C] = x.useState({}),
    E = x.useCallback(() => {
      p.resetValues(),
        m.clearErrors(),
        g.resetDirty(),
        g.resetTouched(),
        t === "uncontrolled" && v((_) => _ + 1);
    }, []),
    k = x.useCallback((_) => {
      p.initialize(_, () => t === "uncontrolled" && v(($) => $ + 1));
    }, []),
    D = x.useCallback(
      (_, $, j) => {
        const I = Xh(_, l);
        g.clearFieldDirty(_),
          g.setFieldTouched(_, !0),
          !I && i && m.clearFieldError(_),
          p.setFieldValue({
            path: _,
            value: $,
            updateState: t === "controlled",
            subscribers: [
              ...w.getFieldSubscribers(_),
              I
                ? (q) => {
                    const Q = tl(_, f, q.updatedValues);
                    Q.hasError
                      ? m.setFieldError(_, Q.error)
                      : m.clearFieldError(_);
                  }
                : null,
              (j == null ? void 0 : j.forceUpdate) !== !1 && t !== "controlled"
                ? () => C((q) => ({ ...q, [_]: (q[_] || 0) + 1 }))
                : null,
            ],
          });
      },
      [c, f]
    ),
    L = x.useCallback(
      (_) => {
        const $ = p.refValues.current;
        p.setValues({ values: _, updateState: t === "controlled" }),
          i && m.clearErrors(),
          t === "uncontrolled" && v((j) => j + 1),
          Object.keys(w.subscribers.current).forEach((j) => {
            const I = Ct(j, p.refValues.current),
              q = Ct(j, $);
            I !== q &&
              w
                .getFieldSubscribers(j)
                .forEach((Q) =>
                  Q({ previousValues: $, updatedValues: p.refValues.current })
                );
          });
      },
      [c, i]
    ),
    N = x.useCallback(() => {
      const _ = ud(f, p.refValues.current);
      return m.setErrors(_.errors), _;
    }, [f]),
    F = x.useCallback(
      (_) => {
        const $ = tl(_, f, p.refValues.current);
        return (
          $.hasError ? m.setFieldError(_, $.error) : m.clearFieldError(_), $
        );
      },
      [f]
    ),
    B = (
      _,
      { type: $ = "input", withError: j = !0, withFocus: I = !0, ...q } = {}
    ) => {
      const ee = { onChange: oP((ne) => D(_, ne, { forceUpdate: !1 })) };
      return (
        j && (ee.error = m.errorsState[_]),
        $ === "checkbox"
          ? (ee[t === "controlled" ? "checked" : "defaultChecked"] = Ct(
              _,
              p.refValues.current
            ))
          : (ee[t === "controlled" ? "value" : "defaultValue"] = Ct(
              _,
              p.refValues.current
            )),
        I &&
          ((ee.onFocus = () => g.setFieldTouched(_, !0)),
          (ee.onBlur = () => {
            if (Xh(_, a)) {
              const ne = tl(_, f, p.refValues.current);
              ne.hasError ? m.setFieldError(_, ne.error) : m.clearFieldError(_);
            }
          })),
        Object.assign(
          ee,
          d == null
            ? void 0
            : d({
                inputProps: ee,
                field: _,
                options: { type: $, withError: j, withFocus: I, ...q },
                form: R,
              })
        )
      );
    },
    V = (_, $) => (j) => {
      j == null || j.preventDefault();
      const I = N();
      I.hasErrors
        ? $ == null || $(I.errors, p.refValues.current, j)
        : _ == null || _(u(p.refValues.current), j);
    },
    A = (_) => u(_ || p.refValues.current),
    O = x.useCallback((_) => {
      _.preventDefault(), E();
    }, []),
    P = x.useCallback(
      (_) =>
        _
          ? !tl(_, f, p.refValues.current).hasError
          : !ud(f, p.refValues.current).hasErrors,
      [f]
    ),
    T = (_) => `${y}-${_}-${S[_] || 0}`,
    R = {
      watch: w.watch,
      initialized: p.initialized.current,
      values: p.stateValues,
      getValues: p.getValues,
      setInitialValues: p.setValuesSnapshot,
      initialize: k,
      setValues: L,
      setFieldValue: D,
      errors: m.errorsState,
      setErrors: m.setErrors,
      setFieldError: m.setFieldError,
      clearFieldError: m.clearFieldError,
      clearErrors: m.clearErrors,
      resetDirty: g.resetDirty,
      setTouched: g.setTouched,
      setDirty: g.setDirty,
      isTouched: g.isTouched,
      resetTouched: g.resetTouched,
      isDirty: g.isDirty,
      getTouched: g.getTouched,
      getDirty: g.getDirty,
      reorderListItem: b.reorderListItem,
      insertListItem: b.insertListItem,
      removeListItem: b.removeListItem,
      reset: E,
      validate: N,
      validateField: F,
      getInputProps: B,
      onSubmit: V,
      onReset: O,
      isValid: P,
      getTransformedValues: A,
      key: T,
    };
  return rP(e, R), R;
}
const xp = (e) => {
  const {
    title: t,
    description: n,
    form: r,
    options: o,
    default_value: s,
    field_id: i,
    mandatory: l,
  } = e;
  var a = s ? o.map((m) => m.option).filter((m) => m == s) : null;
  const [c, u] = x.useState(a ? a[0] : o[0].option);
  r.setFieldValue(i, c);
  const [d, { toggle: f }] = li(!1);
  return h.jsxs("div", {
    className: "collapsible-selector-container",
    children: [
      t &&
        h.jsxs("h2", {
          children: [
            t,
            " ",
            l &&
              h.jsx("span", {
                class:
                  "mantine-InputWrapper-required mantine-TextInput-required",
                children: "*",
              }),
          ],
        }),
      n && h.jsx("label", { children: n }),
      h.jsx("div", {
        className: "container",
        children: h.jsxs("div", {
          className: "multi-select-row row btn-style",
          onClick: f,
          children: [
            h.jsxs("p", {
              className: "col my-2 row-title",
              children: [h.jsx("i", { class: "fa fa-balance-scale mr-2" }), c],
            }),
            h.jsx("p", {
              className: "clickable-text col-auto text-right my-2",
              children: "change",
            }),
          ],
        }),
      }),
      h.jsx(Nf, {
        className: "container",
        in: d,
        transitionDuration: 100,
        transitionTimingFunction: "linear",
        children: o.map((m) => {
          const [p, { open: g, close: b }] = li(!1),
            w = function () {
              u(m.option);
            };
          return h.jsxs("div", {
            className: "multi-select-row row clickable-row",
            children: [
              h.jsx("p", {
                className: "col my-2 row-title",
                onClick: w,
                children: m.option,
              }),
              (m.description || m.help_link) &&
                h.jsxs(h.Fragment, {
                  children: [
                    h.jsxs(hn, {
                      opened: p,
                      onClose: b,
                      title: m.option,
                      centered: !0,
                      size: "auto",
                      children: [
                        h.jsx("div", {
                          className: "modal-dialog-body",
                          children:
                            m.description &&
                            h.jsx(Qo, {
                              className: "use-line-breaks",
                              children: m.description,
                            }),
                        }),
                        h.jsxs("div", {
                          className: "modal-dialog-footer container p-0",
                          children: [
                            m.help_link &&
                              h.jsx("div", {
                                className: "row",
                                children: h.jsx("div", {
                                  className: "col-12",
                                  children: h.jsx("a", {
                                    href: m.help_link,
                                    className:
                                      "btn btn-light-blue-inverted btn-block",
                                    children: "More detail",
                                  }),
                                }),
                              }),
                            h.jsx("div", {
                              className: "row",
                              children: h.jsx("div", {
                                className: "col-12",
                                children: h.jsx("p", {
                                  className:
                                    "btn btn-light-blue-inverted btn-block",
                                  onClick: () => {
                                    w(), b();
                                  },
                                  children: "Choose this",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsx("div", {
                      className: "col-auto clickable-text",
                      onClick: g,
                      children: h.jsx("p", {
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
xp.defaultProps = {};
xp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
};
const yP = new Map([
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
function _i(e, t) {
  const n = vP(e);
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
function vP(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(),
      o = yP.get(r);
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
var ds = (e, t, n) =>
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
const wP = [".DS_Store", "Thumbs.db"];
function xP(e) {
  return ds(this, null, function* () {
    return Jl(e) && bP(e.dataTransfer)
      ? _P(e.dataTransfer, e.type)
      : SP(e)
      ? CP(e)
      : Array.isArray(e) &&
        e.every((t) => "getFile" in t && typeof t.getFile == "function")
      ? EP(e)
      : [];
  });
}
function bP(e) {
  return Jl(e);
}
function SP(e) {
  return Jl(e) && Jl(e.target);
}
function Jl(e) {
  return typeof e == "object" && e !== null;
}
function CP(e) {
  return dd(e.target.files).map((t) => _i(t));
}
function EP(e) {
  return ds(this, null, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => _i(n));
  });
}
function _P(e, t) {
  return ds(this, null, function* () {
    if (e.items) {
      const n = dd(e.items).filter((o) => o.kind === "file");
      if (t !== "drop") return n;
      const r = yield Promise.all(n.map(kP));
      return Qh(Aw(r));
    }
    return Qh(dd(e.files).map((n) => _i(n)));
  });
}
function Qh(e) {
  return e.filter((t) => wP.indexOf(t.name) === -1);
}
function dd(e) {
  if (e === null) return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function kP(e) {
  if (typeof e.webkitGetAsEntry != "function") return Zh(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Fw(t) : Zh(e);
}
function Aw(e) {
  return e.reduce((t, n) => [...t, ...(Array.isArray(n) ? Aw(n) : [n])], []);
}
function Zh(e) {
  const t = e.getAsFile();
  if (!t) return Promise.reject(`${e} is not a File`);
  const n = _i(t);
  return Promise.resolve(n);
}
function RP(e) {
  return ds(this, null, function* () {
    return e.isDirectory ? Fw(e) : DP(e);
  });
}
function Fw(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function s() {
      t.readEntries(
        (i) =>
          ds(this, null, function* () {
            if (i.length) {
              const l = Promise.all(i.map(RP));
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
function DP(e) {
  return ds(this, null, function* () {
    return new Promise((t, n) => {
      e.file(
        (r) => {
          const o = _i(r, e.fullPath);
          t(o);
        },
        (r) => {
          n(r);
        }
      );
    });
  });
}
function PP(e, t) {
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
var NP = Object.defineProperty,
  TP = Object.defineProperties,
  jP = Object.getOwnPropertyDescriptors,
  Jh = Object.getOwnPropertySymbols,
  OP = Object.prototype.hasOwnProperty,
  $P = Object.prototype.propertyIsEnumerable,
  eg = (e, t, n) =>
    t in e
      ? NP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  LP = (e, t) => {
    for (var n in t || (t = {})) OP.call(t, n) && eg(e, n, t[n]);
    if (Jh) for (var n of Jh(t)) $P.call(t, n) && eg(e, n, t[n]);
    return e;
  },
  AP = (e, t) => TP(e, jP(t));
const FP = "file-invalid-type",
  MP = "file-too-large",
  IP = "file-too-small",
  zP = "too-many-files",
  BP = (e) => {
    e = Array.isArray(e) && e.length === 1 ? e[0] : e;
    const t = Array.isArray(e) ? `one of ${e.join(", ")}` : e;
    return { code: FP, message: `File type must be ${t}` };
  },
  tg = (e) => ({
    code: MP,
    message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  ng = (e) => ({
    code: IP,
    message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`,
  }),
  VP = { code: zP, message: "Too many files" };
function Mw(e, t) {
  const n = e.type === "application/x-moz-file" || PP(e, t);
  return [n, n ? null : BP(t)];
}
function Iw(e, t, n) {
  if ($r(e.size))
    if ($r(t) && $r(n)) {
      if (e.size > n) return [!1, tg(n)];
      if (e.size < t) return [!1, ng(t)];
    } else {
      if ($r(t) && e.size < t) return [!1, ng(t)];
      if ($r(n) && e.size > n) return [!1, tg(n)];
    }
  return [!0, null];
}
function $r(e) {
  return e != null;
}
function HP({
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
        const [a] = Mw(l, t),
          [c] = Iw(l, n, r),
          u = i ? i(l) : null;
        return a && c && !u;
      });
}
function ea(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
    ? e.cancelBubble
    : !1;
}
function nl(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(
        e.dataTransfer.types,
        (t) => t === "Files" || t === "application/x-moz-file"
      )
    : !!e.target && !!e.target.files;
}
function rg(e) {
  e.preventDefault();
}
function UP(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function WP(e) {
  return e.indexOf("Edge/") !== -1;
}
function YP(e = window.navigator.userAgent) {
  return UP(e) || WP(e);
}
function xn(...e) {
  return (t, ...n) => e.some((r) => (!ea(t) && r && r(t, ...n), ea(t)));
}
function qP() {
  return "showOpenFilePicker" in window;
}
function GP(e) {
  return $r(e)
    ? [
        {
          description: "Files",
          accept: Object.entries(e)
            .filter(([n, r]) => {
              let o = !0;
              return (
                zw(n) ||
                  (console.warn(
                    `Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`
                  ),
                  (o = !1)),
                (!Array.isArray(r) || !r.every(Bw)) &&
                  (console.warn(
                    `Skipped "${n}" because an invalid file extension was provided.`
                  ),
                  (o = !1)),
                o
              );
            })
            .reduce((n, [r, o]) => AP(LP({}, n), { [r]: o }), {}),
        },
      ]
    : e;
}
function KP(e) {
  if ($r(e))
    return Object.entries(e)
      .reduce((t, [n, r]) => [...t, n, ...r], [])
      .filter((t) => zw(t) || Bw(t))
      .join(",");
}
function XP(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function QP(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
function zw(e) {
  return (
    e === "audio/*" ||
    e === "video/*" ||
    e === "image/*" ||
    e === "text/*" ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function Bw(e) {
  return /^.*\.[\w]+$/.test(e);
}
var ZP = Object.defineProperty,
  JP = Object.defineProperties,
  eN = Object.getOwnPropertyDescriptors,
  ta = Object.getOwnPropertySymbols,
  Vw = Object.prototype.hasOwnProperty,
  Hw = Object.prototype.propertyIsEnumerable,
  og = (e, t, n) =>
    t in e
      ? ZP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ut = (e, t) => {
    for (var n in t || (t = {})) Vw.call(t, n) && og(e, n, t[n]);
    if (ta) for (var n of ta(t)) Hw.call(t, n) && og(e, n, t[n]);
    return e;
  },
  tr = (e, t) => JP(e, eN(t)),
  na = (e, t) => {
    var n = {};
    for (var r in e) Vw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ta)
      for (var r of ta(e)) t.indexOf(r) < 0 && Hw.call(e, r) && (n[r] = e[r]);
    return n;
  };
const bp = x.forwardRef((e, t) => {
  var n = e,
    { children: r } = n,
    o = na(n, ["children"]);
  const s = Ww(o),
    { open: i } = s,
    l = na(s, ["open"]);
  return (
    x.useImperativeHandle(t, () => ({ open: i }), [i]),
    aa.createElement(x.Fragment, null, r(tr(ut({}, l), { open: i })))
  );
});
bp.displayName = "Dropzone";
const Uw = {
  disabled: !1,
  getFilesFromEvent: xP,
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
bp.defaultProps = Uw;
bp.propTypes = {
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
const fd = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function Ww(e = {}) {
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
      onFileDialogOpen: g,
      useFsAccessApi: b,
      autoFocus: w,
      preventDropOnDocument: y,
      noClick: v,
      noKeyboard: S,
      noDrag: C,
      noDragEventsBubbling: E,
      onError: k,
      validator: D,
    } = ut(ut({}, Uw), e),
    L = x.useMemo(() => KP(t), [t]),
    N = x.useMemo(() => GP(t), [t]),
    F = x.useMemo(() => (typeof g == "function" ? g : sg), [g]),
    B = x.useMemo(() => (typeof p == "function" ? p : sg), [p]),
    V = x.useRef(null),
    A = x.useRef(null),
    [O, P] = x.useReducer(tN, fd),
    { isFocused: T, isFileDialogActive: R } = O,
    _ = x.useRef(typeof window < "u" && window.isSecureContext && b && qP()),
    $ = () => {
      !_.current &&
        R &&
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
    [A, R, B, _]
  );
  const j = x.useRef([]),
    I = (Y) => {
      (V.current && V.current.contains(Y.target)) ||
        (Y.preventDefault(), (j.current = []));
    };
  x.useEffect(
    () => (
      y &&
        (document.addEventListener("dragover", rg, !1),
        document.addEventListener("drop", I, !1)),
      () => {
        y &&
          (document.removeEventListener("dragover", rg),
          document.removeEventListener("drop", I));
      }
    ),
    [V, y]
  ),
    x.useEffect(
      () => (!n && w && V.current && V.current.focus(), () => {}),
      [V, w, n]
    );
  const q = x.useCallback(
      (Y) => {
        k ? k(Y) : console.error(Y);
      },
      [k]
    ),
    Q = x.useCallback(
      (Y) => {
        Y.preventDefault(),
          Y.persist(),
          ve(Y),
          (j.current = [...j.current, Y.target]),
          nl(Y) &&
            Promise.resolve(r(Y))
              .then((re) => {
                if (ea(Y) && !E) return;
                const ie = re.length,
                  xe =
                    ie > 0 &&
                    HP({
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
                  a && a(Y);
              })
              .catch((re) => q(re));
      },
      [r, a, q, E, L, s, o, i, l, D]
    ),
    ee = x.useCallback(
      (Y) => {
        Y.preventDefault(), Y.persist(), ve(Y);
        const re = nl(Y);
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
        const re = j.current.filter(
            (xe) => V.current && V.current.contains(xe)
          ),
          ie = re.indexOf(Y.target);
        ie !== -1 && re.splice(ie, 1),
          (j.current = re),
          !(re.length > 0) &&
            (P({
              type: "setDraggedFiles",
              isDragActive: !1,
              isDragAccept: !1,
              isDragReject: !1,
            }),
            nl(Y) && c && c(Y));
      },
      [V, c, E]
    ),
    te = x.useCallback(
      (Y, re) => {
        const ie = [],
          xe = [];
        Y.forEach((Ae) => {
          const [ht, be] = Mw(Ae, L),
            [Fe, It] = Iw(Ae, s, o),
            We = D ? D(Ae) : null;
          if (ht && Fe && !We) ie.push(Ae);
          else {
            let gt = [be, It];
            We && (gt = gt.concat(We)),
              xe.push({ file: Ae, errors: gt.filter((Nn) => Nn) });
          }
        }),
          ((!i && ie.length > 1) || (i && l >= 1 && ie.length > l)) &&
            (ie.forEach((Ae) => {
              xe.push({ file: Ae, errors: [VP] });
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
          (j.current = []),
          nl(Y) &&
            Promise.resolve(r(Y))
              .then((re) => {
                (ea(Y) && !E) || te(re, Y);
              })
              .catch((re) => q(re)),
          P({ type: "reset" });
      },
      [r, te, q, E]
    ),
    oe = x.useCallback(() => {
      if (_.current) {
        P({ type: "openDialog" }), F();
        const Y = { multiple: i, types: N };
        window
          .showOpenFilePicker(Y)
          .then((re) => r(re))
          .then((re) => {
            te(re, null), P({ type: "closeDialog" });
          })
          .catch((re) => {
            XP(re)
              ? (B(re), P({ type: "closeDialog" }))
              : QP(re)
              ? ((_.current = !1),
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
    }, [P, F, B, b, te, q, N, i]),
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
    J = x.useCallback(() => {
      P({ type: "focus" });
    }, []),
    he = x.useCallback(() => {
      P({ type: "blur" });
    }, []),
    ce = x.useCallback(() => {
      v || (YP() ? setTimeout(oe, 0) : oe());
    }, [v, oe]),
    se = (Y) => (n ? null : Y),
    Re = (Y) => (S ? null : se(Y)),
    Ie = (Y) => (C ? null : se(Y)),
    ve = (Y) => {
      E && Y.stopPropagation();
    },
    Ge = x.useMemo(
      () =>
        (Y = {}) => {
          var re = Y,
            {
              refKey: ie = "ref",
              role: xe,
              onKeyDown: Ae,
              onFocus: ht,
              onBlur: be,
              onClick: Fe,
              onDragEnter: It,
              onDragOver: We,
              onDragLeave: gt,
              onDrop: Nn,
            } = re,
            Ke = na(re, [
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
                onKeyDown: Re(xn(Ae, le)),
                onFocus: Re(xn(ht, J)),
                onBlur: Re(xn(be, he)),
                onClick: se(xn(Fe, ce)),
                onDragEnter: Ie(xn(It, Q)),
                onDragOver: Ie(xn(We, ee)),
                onDragLeave: Ie(xn(gt, ne)),
                onDrop: Ie(xn(Nn, me)),
                role: typeof xe == "string" && xe !== "" ? xe : "presentation",
                [ie]: V,
              },
              !n && !S ? { tabIndex: 0 } : {}
            ),
            Ke
          );
        },
      [V, le, J, he, ce, Q, ee, ne, me, S, C, n]
    ),
    De = x.useCallback((Y) => {
      Y.stopPropagation();
    }, []),
    Le = x.useMemo(
      () =>
        (Y = {}) => {
          var re = Y,
            { refKey: ie = "ref", onChange: xe, onClick: Ae } = re,
            ht = na(re, ["refKey", "onChange", "onClick"]);
          const be = {
            accept: L,
            multiple: i,
            type: "file",
            style: { display: "none" },
            onChange: se(xn(xe, me)),
            onClick: se(xn(Ae, De)),
            tabIndex: -1,
            [ie]: A,
          };
          return ut(ut({}, be), ht);
        },
      [A, t, i, me, n]
    );
  return tr(ut({}, O), {
    isFocused: T && !n,
    getRootProps: Ge,
    getInputProps: Le,
    rootRef: V,
    inputRef: A,
    open: se(oe),
  });
}
function tN(e, t) {
  switch (t.type) {
    case "focus":
      return tr(ut({}, e), { isFocused: !0 });
    case "blur":
      return tr(ut({}, e), { isFocused: !1 });
    case "openDialog":
      return tr(ut({}, fd), { isFileDialogActive: !0 });
    case "closeDialog":
      return tr(ut({}, e), { isFileDialogActive: !1 });
    case "setDraggedFiles":
      return tr(ut({}, e), {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject,
      });
    case "setFiles":
      return tr(ut({}, e), {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
      });
    case "reset":
      return ut({}, fd);
    default:
      return e;
  }
}
function sg() {}
const [nN, rN] = Yn("Dropzone component was not found in tree");
function Sp(e) {
  const t = (n) => {
    const { children: r, ...o } = W(`Dropzone${ih(e)}`, {}, n),
      s = rN(),
      i = to(r) ? r : h.jsx("span", { children: r });
    return s[e] ? x.cloneElement(i, o) : null;
  };
  return (t.displayName = `@mantine/dropzone/${ih(e)}`), t;
}
const oN = Sp("accept"),
  sN = Sp("reject"),
  iN = Sp("idle");
var fi = {
  root: "m_d46a4834",
  inner: "m_b85f7144",
  fullScreen: "m_96f6e9ad",
  dropzone: "m_7946116d",
};
const lN = {
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
  aN = (e, { radius: t, variant: n, acceptColor: r, rejectColor: o }) => {
    const s = e.variantColorResolver({
        color: r || e.primaryColor,
        theme: e,
        variant: n,
      }),
      i = e.variantColorResolver({ color: o || "red", theme: e, variant: n });
    return {
      root: {
        "--dropzone-radius": dn(t),
        "--dropzone-accept-color": s.color,
        "--dropzone-accept-bg": s.background,
        "--dropzone-reject-color": i.color,
        "--dropzone-reject-bg": i.background,
      },
    };
  },
  kr = K((e, t) => {
    const n = W("Dropzone", lN, e),
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
        children: g,
        onDropAny: b,
        onDrop: w,
        onReject: y,
        openRef: v,
        name: S,
        maxFiles: C,
        autoFocus: E,
        activateOnClick: k,
        activateOnDrag: D,
        dragEventsBubbling: L,
        activateOnKeyboard: N,
        onDragEnter: F,
        onDragLeave: B,
        onDragOver: V,
        onFileDialogCancel: A,
        onFileDialogOpen: O,
        preventDropOnDocument: P,
        useFsAccessApi: T,
        getFilesFromEvent: R,
        validator: _,
        rejectColor: $,
        acceptColor: j,
        enablePointerEvents: I,
        loaderProps: q,
        inputProps: Q,
        mod: ee,
        ...ne
      } = n,
      te = ae({
        name: "Dropzone",
        classes: fi,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: aN,
      }),
      {
        getRootProps: me,
        getInputProps: oe,
        isDragAccept: le,
        isDragReject: J,
        open: he,
      } = Ww({
        onDrop: b,
        onDropAccepted: w,
        onDropRejected: y,
        disabled: u || d,
        accept: Array.isArray(p)
          ? p.reduce((se, Re) => ({ ...se, [Re]: [] }), {})
          : p,
        multiple: f,
        maxSize: m,
        maxFiles: C,
        autoFocus: E,
        noClick: !k,
        noDrag: !D,
        noDragEventsBubbling: !L,
        noKeyboard: !N,
        onDragEnter: F,
        onDragLeave: B,
        onDragOver: V,
        onFileDialogCancel: A,
        onFileDialogOpen: O,
        preventDropOnDocument: P,
        useFsAccessApi: T,
        validator: _,
        ...(R ? { getFilesFromEvent: R } : null),
      });
    Cf(v, he);
    const ce = !le && !J;
    return h.jsx(nN, {
      value: { accept: le, reject: J, idle: ce },
      children: h.jsxs(G, {
        ...me(),
        ...te("root", { focusable: !0 }),
        ...ne,
        mod: [
          {
            accept: le,
            reject: J,
            idle: ce,
            loading: d,
            "activate-on-click": k,
          },
          ee,
        ],
        children: [
          h.jsx(fp, {
            visible: d,
            overlayProps: { radius: c },
            unstyled: l,
            loaderProps: q,
          }),
          h.jsx("input", { ...oe(Q), name: S }),
          h.jsx("div", {
            ...te("inner"),
            ref: t,
            "data-enable-pointer-events": I || void 0,
            children: g,
          }),
        ],
      }),
    });
  });
kr.classes = fi;
kr.displayName = "@mantine/dropzone/Dropzone";
kr.Accept = oN;
kr.Idle = iN;
kr.Reject = sN;
const cN = {
    loading: !1,
    maxSize: 1 / 0,
    activateOnClick: !1,
    activateOnDrag: !0,
    dragEventsBubbling: !0,
    activateOnKeyboard: !0,
    active: !0,
    zIndex: no("max"),
    withinPortal: !0,
  },
  Cp = K((e, t) => {
    const n = W("DropzoneFullScreen", cN, e),
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
        ...g
      } = n,
      b = ae({
        name: "DropzoneFullScreen",
        classes: fi,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        rootSelector: "fullScreen",
      }),
      { resolvedClassNames: w, resolvedStyles: y } = oo({
        classNames: r,
        styles: i,
        props: n,
      }),
      [v, S] = x.useState(0),
      [C, { open: E, close: k }] = li(!1),
      D = (N) => {
        var F;
        (F = N.dataTransfer) != null &&
          F.types.includes("Files") &&
          (S((B) => B + 1), E());
      },
      L = () => {
        S((N) => N - 1);
      };
    return (
      x.useEffect(() => {
        v === 0 && k();
      }, [v]),
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
      h.jsx(Ta, {
        ...p,
        withinPortal: m,
        children: h.jsx(G, {
          ...b("fullScreen", {
            style: {
              opacity: C ? 1 : 0,
              pointerEvents: C ? "all" : "none",
              zIndex: f,
            },
          }),
          ref: t,
          children: h.jsx(kr, {
            ...g,
            classNames: w,
            styles: y,
            unstyled: l,
            className: fi.dropzone,
            onDrop: (N) => {
              u == null || u(N), k(), S(0);
            },
            onReject: (N) => {
              d == null || d(N), k(), S(0);
            },
          }),
        }),
      })
    );
  });
Cp.classes = fi;
Cp.displayName = "@mantine/dropzone/DropzoneFullScreen";
kr.FullScreen = Cp;
const rl = kr,
  Yw = "",
  uN = "generic",
  dN = Yw + "/profile/profile/",
  Ep = Yw + "/api/submissions/",
  fN = "https://helpdesk.gfbio.org/browse/",
  pN = "/upload/",
  qw = 20,
  Gw = 1e10;
var Kw = { exports: {} };
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
        m = void 0,
        p = void 0,
        g = void 0,
        b = void 0,
        w = void 0,
        y = void 0,
        v = void 0,
        S = void 0,
        C = void 0,
        E = void 0,
        k = void 0,
        D = void 0,
        L = void 0,
        N = void 0,
        F = void 0;
      if (isNaN(l)) throw new TypeError("Invalid number");
      return (
        (m = a.bits === !0),
        (k = a.unix === !0),
        (f = a.base || 2),
        (E = a.round !== void 0 ? a.round : k ? 1 : 2),
        (w = a.locale !== void 0 ? a.locale : ""),
        (y = a.localeOptions || {}),
        (D = a.separator !== void 0 ? a.separator : ""),
        (L = a.spacer !== void 0 ? a.spacer : k ? "" : " "),
        (F = a.symbols || {}),
        (N = (f === 2 && a.standard) || "jedec"),
        (C = a.output || "string"),
        (g = a.fullform === !0),
        (b = a.fullforms instanceof Array ? a.fullforms : []),
        (d = a.exponent !== void 0 ? a.exponent : -1),
        (S = Number(l)),
        (v = S < 0),
        (p = f > 2 ? 1e3 : 1024),
        v && (S = -S),
        (d === -1 || isNaN(d)) &&
          ((d = Math.floor(Math.log(S) / Math.log(p))), d < 0 && (d = 0)),
        d > 8 && (d = 8),
        C === "exponent"
          ? d
          : (S === 0
              ? ((c[0] = 0), (c[1] = k ? "" : o[N][m ? "bits" : "bytes"][d]))
              : ((u = S / (f === 2 ? Math.pow(2, d * 10) : Math.pow(1e3, d))),
                m && ((u = u * 8), u >= p && d < 8 && ((u = u / p), d++)),
                (c[0] = Number(u.toFixed(d > 0 ? E : 0))),
                c[0] === p &&
                  d < 8 &&
                  a.exponent === void 0 &&
                  ((c[0] = 1), d++),
                (c[1] =
                  f === 10 && d === 1
                    ? m
                      ? "kb"
                      : "kB"
                    : o[N][m ? "bits" : "bytes"][d]),
                k &&
                  ((c[1] =
                    N === "jedec"
                      ? c[1].charAt(0)
                      : d > 0
                      ? c[1].replace(/B$/, "")
                      : c[1]),
                  r.test(c[1]) && ((c[0] = Math.floor(c[0])), (c[1] = "")))),
            v && (c[0] = -c[0]),
            (c[1] = F[c[1]] || c[1]),
            w === !0
              ? (c[0] = c[0].toLocaleString())
              : w.length > 0
              ? (c[0] = c[0].toLocaleString(w, y))
              : D.length > 0 && (c[0] = c[0].toString().replace(".", D)),
            C === "array"
              ? c
              : (g &&
                  (c[1] = b[d]
                    ? b[d]
                    : s[N][d] + (m ? "bit" : "byte") + (c[0] === 1 ? "" : "s")),
                C === "object" ? { value: c[0], symbol: c[1] } : c.join(L)))
      );
    }
    (i.partial = function (l) {
      return function (a) {
        return i(a, l);
      };
    }),
      (e.exports = i);
  })();
})(Kw);
var mN = Kw.exports;
const Xw = br(mN),
  Qw = ({ showUploadLimitMessage: e }) =>
    h.jsx(Nf, {
      in: e,
      children: h.jsx(gr, {
        className: "form-group col-md-12",
        children: h.jsxs(gr, {
          role: "alert",
          className: "fade alert alert-light show",
          children: [
            h.jsxs(gr, {
              className: "alert-heading h4",
              children: [
                h.jsx("i", { className: "fa fa-bolt" }),
                " Upload limit exceeded",
              ],
            }),
            h.jsxs(Qo, {
              children: [
                "If you need to upload more than ",
                qw,
                " files, or more than",
                " ",
                Xw(Gw, { base: 10 }),
                ", either provide a URL in the field below, or leave a comment for the curator at the bottom.",
              ],
            }),
          ],
        }),
      }),
    });
Qw.propTypes = { showUploadLimitMessage: U.bool };
const Zw = ({
  fileUploads: e,
  handleRemove: t,
  metadataIndex: n,
  handleMetadataSelect: r,
}) => {
  const s = e.map((i, l) => {
    let a = { width: `${i.progress || 0}%` },
      c = h.jsxs("small", {
        className: "file-name",
        children: [
          h.jsx(Zo, {
            type: "checkbox",
            id: `primary${l}`,
            value: l,
            onChange: () => r(l),
            checked: l === n,
          }),
          h.jsx("label", { htmlFor: `primary${l}`, className: "metadata" }),
          h.jsx("i", { className: "icon ion-md-document pub" }),
          i.name,
        ],
      });
    return h.jsxs(
      "li",
      {
        className: "list-group-item file-upload",
        children: [
          h.jsxs(gr, {
            className: "d-flex justify-content-between align-items-center",
            children: [
              h.jsx(gr, { children: c }),
              h.jsxs(gr, {
                children: [
                  h.jsx("small", {
                    className: "mr-5 file-size",
                    children: Xw(i.size),
                  }),
                  h.jsx("span", { className: "pr-4 mr-3" }),
                  h.jsx("button", {
                    className: "btn btn-remove",
                    onClick: (u) => {
                      u.preventDefault(), t(l);
                    },
                    children: h.jsx("i", {
                      className: "fa fa-trash",
                      "aria-hidden": "true",
                    }),
                  }),
                ],
              }),
            ],
          }),
          h.jsx("div", {
            className: "progress",
            children: h.jsx("div", {
              className: "progress-bar",
              role: "progressbar",
              style: a,
              "aria-valuenow": `${i.progress || 0}`,
              "aria-valuemin": "0",
              "aria-valuemax": "100",
            }),
          }),
        ],
      },
      l
    );
  });
  return h.jsxs("ul", {
    className: "list-group list-group-flush",
    children: [
      s.length > 0 &&
        h.jsx("li", {
          className: "list-group-item file-upload mb-3",
          children: h.jsxs("span", {
            className: "upload-header",
            children: [
              "Metadata",
              h.jsx("i", {
                className: "icon ion-ios-help-circle-outline help align-bottom",
                "aria-hidden": "true",
              }),
            ],
          }),
        }),
      s,
    ],
  });
};
Zw.propTypes = {
  fileUploads: U.array.isRequired,
  handleRemove: U.func.isRequired,
  metadataIndex: U.number.isRequired,
  handleMetadataSelect: U.func.isRequired,
};
const _p = (e) => {
  const {
      title: t,
      description: n,
      form: r,
      field_id: o,
      onFilesChange: s,
    } = e,
    [i, l] = x.useState(-1),
    [a, c] = x.useState(r.values.files || []),
    u = (b) => {
      const w = i === b ? -1 : b;
      l(w), s(a, f, w);
    },
    d = (b) => {
      let w = 0;
      for (let y of b) w += y.size;
      return w <= Gw && b.length <= qw;
    },
    [f, m] = x.useState(() => !d(a));
  x.useEffect(() => {
    m(!d(a));
  }, [a]);
  const p = (b) => {
      const w = [...a, ...b];
      c(w), r.setFieldValue("files", w);
      const y = !d(w);
      m(y), s(w, y, i);
    },
    g = (b) => {
      const w = a.filter((S, C) => C !== b);
      let y = i;
      i === b ? (y = -1) : i > b && (y = i - 1),
        c(w),
        l(y),
        r.setFieldValue("files", w);
      const v = !d(w);
      m(v), s(w, v, y);
    };
  return h.jsxs("div", {
    children: [
      h.jsxs("header", {
        className: "header header-left form-header-top",
        children: [
          h.jsx("h2", { className: "section-title", children: t }),
          h.jsx(Qo, { className: "section-subtitle", children: n }),
        ],
      }),
      h.jsx(Zw, {
        fileUploads: a,
        handleRemove: g,
        metadataIndex: i,
        handleMetadataSelect: u,
      }),
      h.jsx(Qw, { showUploadLimitMessage: f }),
      h.jsx(rl, {
        h: 120,
        p: 0,
        multiple: !0,
        onDrop: p,
        children: h.jsxs(ap, {
          h: 120,
          children: [
            h.jsxs(rl.Idle, {
              children: [
                "Try ",
                h.jsx("b", { children: "dropping" }),
                " some files here, or ",
                h.jsx("b", { children: "click" }),
                " to select files to upload.",
              ],
            }),
            h.jsx(rl.Accept, { children: "Drop files here..." }),
            h.jsx(rl.Reject, { children: "Files are invalid" }),
          ],
        }),
      }),
      r.errors.files &&
        h.jsx(Qo, { c: "red", mt: 5, children: r.errors.files }),
    ],
  });
};
_p.defaultProps = {};
_p.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  onFilesChange: U.func.isRequired,
};
var Jw = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Ed, function () {
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
      g = "Invalid Date",
      b =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      w =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      y = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (A) {
          var O = ["th", "st", "nd", "rd"],
            P = A % 100;
          return "[" + A + (O[(P - 20) % 10] || O[P] || O[0]) + "]";
        },
      },
      v = function (A, O, P) {
        var T = String(A);
        return !T || T.length >= O
          ? A
          : "" + Array(O + 1 - T.length).join(P) + A;
      },
      S = {
        s: v,
        z: function (A) {
          var O = -A.utcOffset(),
            P = Math.abs(O),
            T = Math.floor(P / 60),
            R = P % 60;
          return (O <= 0 ? "+" : "-") + v(T, 2, "0") + ":" + v(R, 2, "0");
        },
        m: function A(O, P) {
          if (O.date() < P.date()) return -A(P, O);
          var T = 12 * (P.year() - O.year()) + (P.month() - O.month()),
            R = O.clone().add(T, d),
            _ = P - R < 0,
            $ = O.clone().add(T + (_ ? -1 : 1), d);
          return +(-(T + (P - R) / (_ ? R - $ : $ - R)) || 0);
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
    E[C] = y;
    var k = "$isDayjsObject",
      D = function (A) {
        return A instanceof B || !(!A || !A[k]);
      },
      L = function A(O, P, T) {
        var R;
        if (!O) return C;
        if (typeof O == "string") {
          var _ = O.toLowerCase();
          E[_] && (R = _), P && ((E[_] = P), (R = _));
          var $ = O.split("-");
          if (!R && $.length > 1) return A($[0]);
        } else {
          var j = O.name;
          (E[j] = O), (R = j);
        }
        return !T && R && (C = R), R || (!T && C);
      },
      N = function (A, O) {
        if (D(A)) return A.clone();
        var P = typeof O == "object" ? O : {};
        return (P.date = A), (P.args = arguments), new B(P);
      },
      F = S;
    (F.l = L),
      (F.i = D),
      (F.w = function (A, O) {
        return N(A, { locale: O.$L, utc: O.$u, x: O.$x, $offset: O.$offset });
      });
    var B = (function () {
        function A(P) {
          (this.$L = L(P.locale, null, !0)),
            this.parse(P),
            (this.$x = this.$x || P.x || {}),
            (this[k] = !0);
        }
        var O = A.prototype;
        return (
          (O.parse = function (P) {
            (this.$d = (function (T) {
              var R = T.date,
                _ = T.utc;
              if (R === null) return new Date(NaN);
              if (F.u(R)) return new Date();
              if (R instanceof Date) return new Date(R);
              if (typeof R == "string" && !/Z$/i.test(R)) {
                var $ = R.match(b);
                if ($) {
                  var j = $[2] - 1 || 0,
                    I = ($[7] || "0").substring(0, 3);
                  return _
                    ? new Date(
                        Date.UTC(
                          $[1],
                          j,
                          $[3] || 1,
                          $[4] || 0,
                          $[5] || 0,
                          $[6] || 0,
                          I
                        )
                      )
                    : new Date(
                        $[1],
                        j,
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
          (O.init = function () {
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
          (O.$utils = function () {
            return F;
          }),
          (O.isValid = function () {
            return this.$d.toString() !== g;
          }),
          (O.isSame = function (P, T) {
            var R = N(P);
            return this.startOf(T) <= R && R <= this.endOf(T);
          }),
          (O.isAfter = function (P, T) {
            return N(P) < this.startOf(T);
          }),
          (O.isBefore = function (P, T) {
            return this.endOf(T) < N(P);
          }),
          (O.$g = function (P, T, R) {
            return F.u(P) ? this[T] : this.set(R, P);
          }),
          (O.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (O.valueOf = function () {
            return this.$d.getTime();
          }),
          (O.startOf = function (P, T) {
            var R = this,
              _ = !!F.u(T) || T,
              $ = F.p(P),
              j = function (oe, le) {
                var J = F.w(
                  R.$u ? Date.UTC(R.$y, le, oe) : new Date(R.$y, le, oe),
                  R
                );
                return _ ? J : J.endOf(c);
              },
              I = function (oe, le) {
                return F.w(
                  R.toDate()[oe].apply(
                    R.toDate("s"),
                    (_ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(le)
                  ),
                  R
                );
              },
              q = this.$W,
              Q = this.$M,
              ee = this.$D,
              ne = "set" + (this.$u ? "UTC" : "");
            switch ($) {
              case m:
                return _ ? j(1, 0) : j(31, 11);
              case d:
                return _ ? j(1, Q) : j(0, Q + 1);
              case u:
                var te = this.$locale().weekStart || 0,
                  me = (q < te ? q + 7 : q) - te;
                return j(_ ? ee - me : ee + (6 - me), Q);
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
          (O.endOf = function (P) {
            return this.startOf(P, !1);
          }),
          (O.$set = function (P, T) {
            var R,
              _ = F.p(P),
              $ = "set" + (this.$u ? "UTC" : ""),
              j = ((R = {}),
              (R[c] = $ + "Date"),
              (R[p] = $ + "Date"),
              (R[d] = $ + "Month"),
              (R[m] = $ + "FullYear"),
              (R[a] = $ + "Hours"),
              (R[l] = $ + "Minutes"),
              (R[i] = $ + "Seconds"),
              (R[s] = $ + "Milliseconds"),
              R)[_],
              I = _ === c ? this.$D + (T - this.$W) : T;
            if (_ === d || _ === m) {
              var q = this.clone().set(p, 1);
              q.$d[j](I),
                q.init(),
                (this.$d = q.set(p, Math.min(this.$D, q.daysInMonth())).$d);
            } else j && this.$d[j](I);
            return this.init(), this;
          }),
          (O.set = function (P, T) {
            return this.clone().$set(P, T);
          }),
          (O.get = function (P) {
            return this[F.p(P)]();
          }),
          (O.add = function (P, T) {
            var R,
              _ = this;
            P = Number(P);
            var $ = F.p(T),
              j = function (Q) {
                var ee = N(_);
                return F.w(ee.date(ee.date() + Math.round(Q * P)), _);
              };
            if ($ === d) return this.set(d, this.$M + P);
            if ($ === m) return this.set(m, this.$y + P);
            if ($ === c) return j(1);
            if ($ === u) return j(7);
            var I = ((R = {}), (R[l] = r), (R[a] = o), (R[i] = n), R)[$] || 1,
              q = this.$d.getTime() + P * I;
            return F.w(q, this);
          }),
          (O.subtract = function (P, T) {
            return this.add(-1 * P, T);
          }),
          (O.format = function (P) {
            var T = this,
              R = this.$locale();
            if (!this.isValid()) return R.invalidDate || g;
            var _ = P || "YYYY-MM-DDTHH:mm:ssZ",
              $ = F.z(this),
              j = this.$H,
              I = this.$m,
              q = this.$M,
              Q = R.weekdays,
              ee = R.months,
              ne = R.meridiem,
              te = function (le, J, he, ce) {
                return (le && (le[J] || le(T, _))) || he[J].slice(0, ce);
              },
              me = function (le) {
                return F.s(j % 12 || 12, le, "0");
              },
              oe =
                ne ||
                function (le, J, he) {
                  var ce = le < 12 ? "AM" : "PM";
                  return he ? ce.toLowerCase() : ce;
                };
            return _.replace(w, function (le, J) {
              return (
                J ||
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
                      return te(R.monthsShort, q, ee, 3);
                    case "MMMM":
                      return te(ee, q);
                    case "D":
                      return T.$D;
                    case "DD":
                      return F.s(T.$D, 2, "0");
                    case "d":
                      return String(T.$W);
                    case "dd":
                      return te(R.weekdaysMin, T.$W, Q, 2);
                    case "ddd":
                      return te(R.weekdaysShort, T.$W, Q, 3);
                    case "dddd":
                      return Q[T.$W];
                    case "H":
                      return String(j);
                    case "HH":
                      return F.s(j, 2, "0");
                    case "h":
                      return me(1);
                    case "hh":
                      return me(2);
                    case "a":
                      return oe(j, I, !0);
                    case "A":
                      return oe(j, I, !1);
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
          (O.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (O.diff = function (P, T, R) {
            var _,
              $ = this,
              j = F.p(T),
              I = N(P),
              q = (I.utcOffset() - this.utcOffset()) * r,
              Q = this - I,
              ee = function () {
                return F.m($, I);
              };
            switch (j) {
              case m:
                _ = ee() / 12;
                break;
              case d:
                _ = ee();
                break;
              case f:
                _ = ee() / 3;
                break;
              case u:
                _ = (Q - q) / 6048e5;
                break;
              case c:
                _ = (Q - q) / 864e5;
                break;
              case a:
                _ = Q / o;
                break;
              case l:
                _ = Q / r;
                break;
              case i:
                _ = Q / n;
                break;
              default:
                _ = Q;
            }
            return R ? _ : F.a(_);
          }),
          (O.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          (O.$locale = function () {
            return E[this.$L];
          }),
          (O.locale = function (P, T) {
            if (!P) return this.$L;
            var R = this.clone(),
              _ = L(P, T, !0);
            return _ && (R.$L = _), R;
          }),
          (O.clone = function () {
            return F.w(this.$d, this);
          }),
          (O.toDate = function () {
            return new Date(this.valueOf());
          }),
          (O.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (O.toISOString = function () {
            return this.$d.toISOString();
          }),
          (O.toString = function () {
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
        V[A[1]] = function (O) {
          return this.$g(O, A[0], A[1]);
        };
      }),
      (N.extend = function (A, O) {
        return A.$i || (A(O, B, N), (A.$i = !0)), N;
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
})(Jw);
var hN = Jw.exports;
const Z = br(hN);
function gN({
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
function e1({
  controlsRef: e,
  direction: t,
  levelIndex: n,
  rowIndex: r,
  cellIndex: o,
  size: s,
}) {
  var a, c, u;
  const i = gN({
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
      ? e1({
          controlsRef: e,
          direction: t,
          levelIndex: i.levelIndex,
          cellIndex: i.cellIndex,
          rowIndex: i.rowIndex,
          size: s,
        })
      : l.focus());
}
function yN(e) {
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
function vN(e) {
  var t;
  return (t = e.current) == null
    ? void 0
    : t.map((n) => n.map((r) => r.length));
}
function kp({
  controlsRef: e,
  levelIndex: t,
  rowIndex: n,
  cellIndex: r,
  event: o,
}) {
  const s = yN(o.key);
  if (s) {
    o.preventDefault();
    const i = vN(e);
    e1({
      controlsRef: e,
      direction: s,
      levelIndex: t,
      rowIndex: n,
      cellIndex: r,
      size: i,
    });
  }
}
var t1 = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Ed, function () {
    var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
      r = {};
    return function (o, s, i) {
      var l,
        a = function (f, m, p) {
          p === void 0 && (p = {});
          var g = new Date(f),
            b = (function (w, y) {
              y === void 0 && (y = {});
              var v = y.timeZoneName || "short",
                S = w + "|" + v,
                C = r[S];
              return (
                C ||
                  ((C = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: w,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: v,
                  })),
                  (r[S] = C)),
                C
              );
            })(m, p);
          return b.formatToParts(g);
        },
        c = function (f, m) {
          for (var p = a(f, m), g = [], b = 0; b < p.length; b += 1) {
            var w = p[b],
              y = w.type,
              v = w.value,
              S = n[y];
            S >= 0 && (g[S] = parseInt(v, 10));
          }
          var C = g[3],
            E = C === 24 ? 0 : C,
            k =
              g[0] +
              "-" +
              g[1] +
              "-" +
              g[2] +
              " " +
              E +
              ":" +
              g[4] +
              ":" +
              g[5] +
              ":000",
            D = +f;
          return (i.utc(k).valueOf() - (D -= D % 1e3)) / 6e4;
        },
        u = s.prototype;
      (u.tz = function (f, m) {
        f === void 0 && (f = l);
        var p = this.utcOffset(),
          g = this.toDate(),
          b = g.toLocaleString("en-US", { timeZone: f }),
          w = Math.round((g - new Date(b)) / 1e3 / 60),
          y = i(b, { locale: this.$L })
            .$set("millisecond", this.$ms)
            .utcOffset(15 * -Math.round(g.getTimezoneOffset() / 15) - w, !0);
        if (m) {
          var v = y.utcOffset();
          y = y.add(p - v, "minute");
        }
        return (y.$x.$timezone = f), y;
      }),
        (u.offsetName = function (f) {
          var m = this.$x.$timezone || i.tz.guess(),
            p = a(this.valueOf(), m, { timeZoneName: f }).find(function (g) {
              return g.type.toLowerCase() === "timezonename";
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
          var g = p && m,
            b = p || m || l,
            w = c(+i(), b);
          if (typeof f != "string") return i(f).tz(b);
          var y = (function (E, k, D) {
              var L = E - 60 * k * 1e3,
                N = c(L, D);
              if (k === N) return [L, k];
              var F = c((L -= 60 * (N - k) * 1e3), D);
              return N === F
                ? [L, N]
                : [E - 60 * Math.min(N, F) * 1e3, Math.max(N, F)];
            })(i.utc(f, g).valueOf(), w, b),
            v = y[0],
            S = y[1],
            C = i(v).utcOffset(S);
          return (C.$x.$timezone = b), C;
        }),
        (i.tz.guess = function () {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }),
        (i.tz.setDefault = function (f) {
          l = f;
        });
    };
  });
})(t1);
var wN = t1.exports;
const xN = br(wN);
var n1 = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Ed, function () {
    var n = "minute",
      r = /[+-]\d\d(?::?\d\d)?/g,
      o = /([+-]|\d\d)/g;
    return function (s, i, l) {
      var a = i.prototype;
      (l.utc = function (g) {
        var b = { date: g, utc: !0, args: arguments };
        return new i(b);
      }),
        (a.utc = function (g) {
          var b = l(this.toDate(), { locale: this.$L, utc: !0 });
          return g ? b.add(this.utcOffset(), n) : b;
        }),
        (a.local = function () {
          return l(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var c = a.parse;
      a.parse = function (g) {
        g.utc && (this.$u = !0),
          this.$utils().u(g.$offset) || (this.$offset = g.$offset),
          c.call(this, g);
      };
      var u = a.init;
      a.init = function () {
        if (this.$u) {
          var g = this.$d;
          (this.$y = g.getUTCFullYear()),
            (this.$M = g.getUTCMonth()),
            (this.$D = g.getUTCDate()),
            (this.$W = g.getUTCDay()),
            (this.$H = g.getUTCHours()),
            (this.$m = g.getUTCMinutes()),
            (this.$s = g.getUTCSeconds()),
            (this.$ms = g.getUTCMilliseconds());
        } else u.call(this);
      };
      var d = a.utcOffset;
      a.utcOffset = function (g, b) {
        var w = this.$utils().u;
        if (w(g))
          return this.$u ? 0 : w(this.$offset) ? d.call(this) : this.$offset;
        if (
          typeof g == "string" &&
          ((g = (function (C) {
            C === void 0 && (C = "");
            var E = C.match(r);
            if (!E) return null;
            var k = ("" + E[0]).match(o) || ["-", 0, 0],
              D = k[0],
              L = 60 * +k[1] + +k[2];
            return L === 0 ? 0 : D === "+" ? L : -L;
          })(g)),
          g === null)
        )
          return this;
        var y = Math.abs(g) <= 16 ? 60 * g : g,
          v = this;
        if (b) return (v.$offset = y), (v.$u = g === 0), v;
        if (g !== 0) {
          var S = this.$u
            ? this.toDate().getTimezoneOffset()
            : -1 * this.utcOffset();
          ((v = this.local().add(y + S, n)).$offset = y),
            (v.$x.$localOffset = S);
        } else v = this.utc();
        return v;
      };
      var f = a.format;
      (a.format = function (g) {
        var b = g || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return f.call(this, b);
      }),
        (a.valueOf = function () {
          var g = this.$utils().u(this.$offset)
            ? 0
            : this.$offset +
              (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * g;
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
      a.toDate = function (g) {
        return g === "s" && this.$offset
          ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
          : m.call(this);
      };
      var p = a.diff;
      a.diff = function (g, b, w) {
        if (g && this.$u === g.$u) return p.call(this, g, b, w);
        var y = this.local(),
          v = l(g).local();
        return p.call(y, v, b, w);
      };
    };
  });
})(n1);
var bN = n1.exports;
const SN = br(bN);
Z.extend(SN);
Z.extend(xN);
function CN(e, t) {
  return t ? Z(e).tz(t).utcOffset() + e.getTimezoneOffset() : 0;
}
const ig = (e, t, n) => {
  if (!e) return null;
  if (!t) return e;
  let r = CN(e, t);
  return n === "remove" && (r *= -1), Z(e).add(r, "minutes").toDate();
};
function Fo(e, t, n, r) {
  return r || !t
    ? t
    : Array.isArray(t)
    ? t.map((o) => ig(o, n, e))
    : ig(t, n, e);
}
const EN = {
    locale: "en",
    timezone: null,
    firstDayOfWeek: 1,
    weekendDays: [0, 6],
    labelSeparator: "–",
    consistentWeeks: !1,
  },
  _N = x.createContext(EN);
function gn() {
  const e = x.useContext(_N),
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
var r1 = { day: "m_396ce5cb" };
const kN = {},
  RN = (e, { size: t }) => ({ day: { "--day-size": Ce(t, "day-size") } }),
  Rp = K((e, t) => {
    const n = W("Day", kN, e),
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
        renderDay: g,
        inRange: b,
        firstInRange: w,
        lastInRange: y,
        hidden: v,
        static: S,
        ...C
      } = n,
      E = ae({
        name: d || "Day",
        classes: r1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: RN,
        rootSelector: "day",
      }),
      k = gn();
    return h.jsx(In, {
      ...E("day", { style: v ? { display: "none" } : void 0 }),
      component: S ? "div" : "button",
      ref: t,
      disabled: u,
      "data-today":
        Z(c).isSame(Fo("add", new Date(), k.getTimezone()), "day") || void 0,
      "data-hidden": v || void 0,
      "data-disabled": u || void 0,
      "data-weekend": (!u && !m && f) || void 0,
      "data-outside": (!u && m) || void 0,
      "data-selected": (!u && p) || void 0,
      "data-in-range": (b && !u) || void 0,
      "data-first-in-range": (w && !u) || void 0,
      "data-last-in-range": (y && !u) || void 0,
      "data-static": S || void 0,
      unstyled: l,
      ...C,
      children: (g == null ? void 0 : g(c)) || c.getDate(),
    });
  });
Rp.classes = r1;
Rp.displayName = "@mantine/dates/Day";
function DN({ locale: e, format: t = "dd", firstDayOfWeek: n = 1 }) {
  const r = Z().day(n),
    o = [];
  for (let s = 0; s < 7; s += 1)
    typeof t == "string"
      ? o.push(Z(r).add(s, "days").locale(e).format(t))
      : o.push(t(Z(r).add(s, "days").toDate()));
  return o;
}
var o1 = { weekday: "m_18a3eca" };
const PN = {},
  NN = (e, { size: t }) => ({
    weekdaysRow: { "--wr-fz": Je(t), "--wr-spacing": xi(t) },
  }),
  Dp = K((e, t) => {
    const n = W("WeekdaysRow", PN, e),
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
      g = ae({
        name: m || "WeekdaysRow",
        classes: o1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: NN,
        rootSelector: "weekdaysRow",
      }),
      b = gn(),
      w = DN({
        locale: b.getLocale(c),
        format: d,
        firstDayOfWeek: b.getFirstDayOfWeek(u),
      }).map((y, v) => h.jsx(f, { ...g("weekday"), children: y }, v));
    return h.jsx(G, {
      component: "tr",
      ref: t,
      ...g("weekdaysRow"),
      ...p,
      children: w,
    });
  });
Dp.classes = o1;
Dp.displayName = "@mantine/dates/WeekdaysRow";
function TN(e, t = 1) {
  const n = new Date(e),
    r = t === 0 ? 6 : t - 1;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function jN(e, t = 1) {
  const n = new Date(e);
  for (; n.getDay() !== t; ) n.setDate(n.getDate() - 1);
  return n;
}
function ON({ month: e, firstDayOfWeek: t = 1, consistentWeeks: n }) {
  const r = e.getMonth(),
    o = new Date(e.getFullYear(), r, 1),
    s = new Date(e.getFullYear(), e.getMonth() + 1, 0),
    i = TN(s, t),
    l = jN(o, t),
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
function s1(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
}
function i1(e, t) {
  return t instanceof Date ? Z(e).isAfter(Z(t).subtract(1, "day"), "day") : !0;
}
function l1(e, t) {
  return t instanceof Date ? Z(e).isBefore(Z(t).add(1, "day"), "day") : !0;
}
function $N(e, t, n, r, o, s, i) {
  const l = e.flat().filter((u) => {
      var d;
      return (
        l1(u, n) &&
        i1(u, t) &&
        !(o != null && o(u)) &&
        !((d = r == null ? void 0 : r(u)) != null && d.disabled) &&
        (!s || s1(u, i))
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
var a1 = { month: "m_cc9820d3", monthCell: "m_8f457cd5" };
const LN = { withCellSpacing: !0 },
  Ga = K((e, t) => {
    const n = W("Month", LN, e),
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
        getDayProps: g,
        excludeDate: b,
        minDate: w,
        maxDate: y,
        renderDay: v,
        hideOutsideDates: S,
        hideWeekdays: C,
        getDayAriaLabel: E,
        static: k,
        __getDayRef: D,
        __onDayKeyDown: L,
        __onDayClick: N,
        __onDayMouseEnter: F,
        __preventFocus: B,
        __stopPropagation: V,
        withCellSpacing: A,
        size: O,
        ...P
      } = n,
      T = ae({
        name: c || "Month",
        classes: a1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "month",
      }),
      R = gn(),
      _ = ON({
        month: m,
        firstDayOfWeek: R.getFirstDayOfWeek(d),
        consistentWeeks: R.consistentWeeks,
      }),
      $ = $N(_, w, y, g, b, S, m),
      { resolvedClassNames: j, resolvedStyles: I } = oo({
        classNames: r,
        styles: i,
        props: n,
      }),
      q = _.map((Q, ee) => {
        const ne = Q.map((te, me) => {
          const oe = !s1(te, m),
            le =
              (E == null ? void 0 : E(te)) ||
              Z(te)
                .locale(u || R.locale)
                .format("D MMMM YYYY"),
            J = g == null ? void 0 : g(te),
            he = Z(te).isSame($, "date");
          return h.jsx(
            "td",
            {
              ...T("monthCell"),
              "data-with-spacing": A || void 0,
              children: h.jsx(Rp, {
                __staticSelector: c || "Month",
                classNames: j,
                styles: I,
                unstyled: l,
                "data-mantine-stop-propagation": V || void 0,
                renderDay: v,
                date: te,
                size: O,
                weekend: R.getWeekendDays(p).includes(te.getDay()),
                outside: oe,
                hidden: S ? oe : !1,
                "aria-label": le,
                static: k,
                disabled:
                  (b == null ? void 0 : b(te)) || !l1(te, y) || !i1(te, w),
                ref: (ce) => (D == null ? void 0 : D(ee, me, ce)),
                ...J,
                onKeyDown: (ce) => {
                  var se;
                  (se = J == null ? void 0 : J.onKeyDown) == null ||
                    se.call(J, ce),
                    L == null ||
                      L(ce, { rowIndex: ee, cellIndex: me, date: te });
                },
                onMouseEnter: (ce) => {
                  var se;
                  (se = J == null ? void 0 : J.onMouseEnter) == null ||
                    se.call(J, ce),
                    F == null || F(ce, te);
                },
                onClick: (ce) => {
                  var se;
                  (se = J == null ? void 0 : J.onClick) == null ||
                    se.call(J, ce),
                    N == null || N(ce, te);
                },
                onMouseDown: (ce) => {
                  var se;
                  (se = J == null ? void 0 : J.onMouseDown) == null ||
                    se.call(J, ce),
                    B && ce.preventDefault();
                },
                tabIndex: B || !he ? -1 : 0,
              }),
            },
            te.toString()
          );
        });
        return h.jsx("tr", { ...T("monthRow"), children: ne }, ee);
      });
    return h.jsxs(G, {
      component: "table",
      ...T("month"),
      size: O,
      ref: t,
      ...P,
      children: [
        !C &&
          h.jsx("thead", {
            ...T("monthThead"),
            children: h.jsx(Dp, {
              __staticSelector: c || "Month",
              locale: u,
              firstDayOfWeek: d,
              weekdayFormat: f,
              size: O,
              classNames: j,
              styles: I,
              unstyled: l,
            }),
          }),
        h.jsx("tbody", { ...T("monthTbody"), children: q }),
      ],
    });
  });
Ga.classes = a1;
Ga.displayName = "@mantine/dates/Month";
var c1 = { pickerControl: "m_dc6a3c71" };
const AN = {},
  FN = (e, { size: t }) => ({
    pickerControl: { "--dpc-fz": Je(t), "--dpc-size": Ce(t, "dpc-size") },
  }),
  Ka = K((e, t) => {
    const n = W("PickerControl", AN, e),
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
        ...g
      } = n,
      b = ae({
        name: f || "PickerControl",
        classes: c1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: FN,
        rootSelector: "pickerControl",
      });
    return h.jsx(In, {
      ...b("pickerControl"),
      ref: t,
      unstyled: l,
      "data-picker-control": !0,
      "data-selected": (m && !p) || void 0,
      "data-disabled": p || void 0,
      "data-in-range": (d && !p && !m) || void 0,
      "data-first-in-range": (c && !p) || void 0,
      "data-last-in-range": (u && !p) || void 0,
      disabled: p,
      ...g,
    });
  });
Ka.classes = c1;
Ka.displayName = "@mantine/dates/PickerControl";
function u1(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && Z(e).isBefore(t, "year")) || (n && Z(e).isAfter(n, "year")));
}
function MN(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !u1(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
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
function d1(e) {
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
var f1 = { yearsList: "m_9206547b", yearsListCell: "m_c5a19c7d" };
const IN = { yearsListFormat: "YYYY", withCellSpacing: !0 },
  Xa = K((e, t) => {
    const n = W("YearsList", IN, e),
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
        __staticSelector: g,
        __getControlRef: b,
        __onControlKeyDown: w,
        __onControlClick: y,
        __onControlMouseEnter: v,
        __preventFocus: S,
        __stopPropagation: C,
        withCellSpacing: E,
        size: k,
        ...D
      } = n,
      L = ae({
        name: g || "YearsList",
        classes: f1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "yearsList",
      }),
      N = gn(),
      F = d1(c),
      B = MN(F, f, m, p),
      V = F.map((A, O) => {
        const P = A.map((T, R) => {
          const _ = p == null ? void 0 : p(T),
            $ = Z(T).isSame(B, "year");
          return h.jsx(
            "td",
            {
              ...L("yearsListCell"),
              "data-with-spacing": E || void 0,
              children: h.jsx(Ka, {
                ...L("yearsListControl"),
                size: k,
                unstyled: l,
                "data-mantine-stop-propagation": C || void 0,
                disabled: u1(T, f, m),
                ref: (j) => (b == null ? void 0 : b(O, R, j)),
                ..._,
                onKeyDown: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onKeyDown) == null ||
                    I.call(_, j),
                    w == null || w(j, { rowIndex: O, cellIndex: R, date: T });
                },
                onClick: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onClick) == null || I.call(_, j),
                    y == null || y(j, T);
                },
                onMouseEnter: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onMouseEnter) == null ||
                    I.call(_, j),
                    v == null || v(j, T);
                },
                onMouseDown: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onMouseDown) == null ||
                    I.call(_, j),
                    S && j.preventDefault();
                },
                tabIndex: S || !$ ? -1 : 0,
                children: Z(T).locale(N.getLocale(d)).format(u),
              }),
            },
            R
          );
        });
        return h.jsx("tr", { ...L("yearsListRow"), children: P }, O);
      });
    return h.jsx(G, {
      component: "table",
      ref: t,
      size: k,
      ...L("yearsList"),
      ...D,
      children: h.jsx("tbody", { children: V }),
    });
  });
Xa.classes = f1;
Xa.displayName = "@mantine/dates/YearsList";
function p1(e, t, n) {
  return !t && !n
    ? !1
    : !!((t && Z(e).isBefore(t, "month")) || (n && Z(e).isAfter(n, "month")));
}
function zN(e, t, n, r) {
  const o = e.flat().filter((l) => {
      var a;
      return (
        !p1(l, t, n) && !((a = r == null ? void 0 : r(l)) != null && a.disabled)
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
function BN(e) {
  const t = Z(e).startOf("year").toDate(),
    n = [[], [], [], []];
  let r = 0;
  for (let o = 0; o < 4; o += 1)
    for (let s = 0; s < 3; s += 1)
      n[o].push(Z(t).add(r, "months").toDate()), (r += 1);
  return n;
}
var m1 = { monthsList: "m_2a6c32d", monthsListCell: "m_fe27622f" };
const VN = { monthsListFormat: "MMM", withCellSpacing: !0 },
  Qa = K((e, t) => {
    const n = W("MonthsList", VN, e),
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
        getMonthControlProps: g,
        __getControlRef: b,
        __onControlKeyDown: w,
        __onControlClick: y,
        __onControlMouseEnter: v,
        __preventFocus: S,
        __stopPropagation: C,
        withCellSpacing: E,
        size: k,
        ...D
      } = n,
      L = ae({
        name: c || "MonthsList",
        classes: m1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "monthsList",
      }),
      N = gn(),
      F = BN(u),
      B = zN(F, m, p, g),
      V = F.map((A, O) => {
        const P = A.map((T, R) => {
          const _ = g == null ? void 0 : g(T),
            $ = Z(T).isSame(B, "month");
          return h.jsx(
            "td",
            {
              ...L("monthsListCell"),
              "data-with-spacing": E || void 0,
              children: h.jsx(Ka, {
                ...L("monthsListControl"),
                size: k,
                unstyled: l,
                __staticSelector: c || "MonthsList",
                "data-mantine-stop-propagation": C || void 0,
                disabled: p1(T, m, p),
                ref: (j) => (b == null ? void 0 : b(O, R, j)),
                ..._,
                onKeyDown: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onKeyDown) == null ||
                    I.call(_, j),
                    w == null || w(j, { rowIndex: O, cellIndex: R, date: T });
                },
                onClick: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onClick) == null || I.call(_, j),
                    y == null || y(j, T);
                },
                onMouseEnter: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onMouseEnter) == null ||
                    I.call(_, j),
                    v == null || v(j, T);
                },
                onMouseDown: (j) => {
                  var I;
                  (I = _ == null ? void 0 : _.onMouseDown) == null ||
                    I.call(_, j),
                    S && j.preventDefault();
                },
                tabIndex: S || !$ ? -1 : 0,
                children: Z(T).locale(N.getLocale(f)).format(d),
              }),
            },
            R
          );
        });
        return h.jsx("tr", { ...L("monthsListRow"), children: P }, O);
      });
    return h.jsx(G, {
      component: "table",
      ref: t,
      size: k,
      ...L("monthsList"),
      ...D,
      children: h.jsx("tbody", { children: V }),
    });
  });
Qa.classes = m1;
Qa.displayName = "@mantine/dates/MonthsList";
var h1 = {
  calendarHeader: "m_730a79ed",
  calendarHeaderLevel: "m_f6645d97",
  calendarHeaderControl: "m_2351eeb0",
  calendarHeaderControlIcon: "m_367dc749",
};
const HN = {
    nextDisabled: !1,
    previousDisabled: !1,
    hasNextLevel: !0,
    withNext: !0,
    withPrevious: !0,
  },
  UN = (e, { size: t }) => ({
    calendarHeader: {
      "--dch-control-size": Ce(t, "dch-control-size"),
      "--dch-fz": Je(t),
    },
  }),
  Rr = K((e, t) => {
    const n = W("CalendarHeader", HN, e),
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
        onLevelClick: g,
        label: b,
        nextDisabled: w,
        previousDisabled: y,
        hasNextLevel: v,
        levelControlAriaLabel: S,
        withNext: C,
        withPrevious: E,
        __staticSelector: k,
        __preventFocus: D,
        __stopPropagation: L,
        ...N
      } = n,
      F = ae({
        name: k || "CalendarHeader",
        classes: h1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        varsResolver: UN,
        rootSelector: "calendarHeader",
      }),
      B = D ? (V) => V.preventDefault() : void 0;
    return h.jsxs(G, {
      ...F("calendarHeader"),
      ref: t,
      ...N,
      children: [
        E &&
          h.jsx(In, {
            ...F("calendarHeaderControl"),
            "data-direction": "previous",
            "aria-label": f,
            onClick: p,
            unstyled: l,
            onMouseDown: B,
            disabled: y,
            "data-disabled": y || void 0,
            tabIndex: D || y ? -1 : 0,
            "data-mantine-stop-propagation": L || void 0,
            children:
              u ||
              h.jsx(id, {
                ...F("calendarHeaderControlIcon"),
                "data-direction": "previous",
                size: "45%",
              }),
          }),
        h.jsx(In, {
          component: v ? "button" : "div",
          ...F("calendarHeaderLevel"),
          onClick: v ? g : void 0,
          unstyled: l,
          onMouseDown: v ? B : void 0,
          disabled: !v,
          "data-static": !v || void 0,
          "aria-label": S,
          tabIndex: D || !v ? -1 : 0,
          "data-mantine-stop-propagation": L || void 0,
          children: b,
        }),
        C &&
          h.jsx(In, {
            ...F("calendarHeaderControl"),
            "data-direction": "next",
            "aria-label": d,
            onClick: m,
            unstyled: l,
            onMouseDown: B,
            disabled: w,
            "data-disabled": w || void 0,
            tabIndex: D || w ? -1 : 0,
            "data-mantine-stop-propagation": L || void 0,
            children:
              c ||
              h.jsx(id, {
                ...F("calendarHeaderControlIcon"),
                "data-direction": "next",
                size: "45%",
              }),
          }),
      ],
    });
  });
Rr.classes = h1;
Rr.displayName = "@mantine/dates/CalendarHeader";
function WN(e) {
  const t = d1(e);
  return [t[0][0], t[3][0]];
}
const YN = { decadeLabelFormat: "YYYY" },
  Za = K((e, t) => {
    const n = W("DecadeLevel", YN, e),
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
        nextIcon: g,
        previousIcon: b,
        nextLabel: w,
        previousLabel: y,
        onNext: v,
        onPrevious: S,
        nextDisabled: C,
        previousDisabled: E,
        levelControlAriaLabel: k,
        withNext: D,
        withPrevious: L,
        decadeLabelFormat: N,
        classNames: F,
        styles: B,
        unstyled: V,
        __staticSelector: A,
        __stopPropagation: O,
        size: P,
        ...T
      } = n,
      R = gn(),
      [_, $] = WN(r),
      j = {
        __staticSelector: A || "DecadeLevel",
        classNames: F,
        styles: B,
        unstyled: V,
        size: P,
      },
      I = typeof C == "boolean" ? C : i ? !Z($).endOf("year").isBefore(i) : !1,
      q = typeof E == "boolean" ? E : s ? !Z(_).startOf("year").isAfter(s) : !1,
      Q = (ee, ne) =>
        Z(ee)
          .locale(o || R.locale)
          .format(ne);
    return h.jsxs(G, {
      "data-decade-level": !0,
      size: P,
      ref: t,
      ...T,
      children: [
        h.jsx(Rr, {
          label: typeof N == "function" ? N(_, $) : `${Q(_, N)} – ${Q($, N)}`,
          __preventFocus: p,
          __stopPropagation: O,
          nextIcon: g,
          previousIcon: b,
          nextLabel: w,
          previousLabel: y,
          onNext: v,
          onPrevious: S,
          nextDisabled: I,
          previousDisabled: q,
          hasNextLevel: !1,
          levelControlAriaLabel: k,
          withNext: D,
          withPrevious: L,
          ...j,
        }),
        h.jsx(Xa, {
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
          __stopPropagation: O,
          withCellSpacing: m,
          ...j,
        }),
      ],
    });
  });
Za.classes = { ...Xa.classes, ...Rr.classes };
Za.displayName = "@mantine/dates/DecadeLevel";
const qN = { yearLabelFormat: "YYYY" },
  Ja = K((e, t) => {
    const n = W("YearLevel", qN, e),
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
        nextIcon: g,
        previousIcon: b,
        nextLabel: w,
        previousLabel: y,
        onNext: v,
        onPrevious: S,
        onLevelClick: C,
        nextDisabled: E,
        previousDisabled: k,
        hasNextLevel: D,
        levelControlAriaLabel: L,
        withNext: N,
        withPrevious: F,
        yearLabelFormat: B,
        __staticSelector: V,
        __stopPropagation: A,
        size: O,
        classNames: P,
        styles: T,
        unstyled: R,
        ..._
      } = n,
      $ = gn(),
      j = {
        __staticSelector: V || "YearLevel",
        classNames: P,
        styles: T,
        unstyled: R,
        size: O,
      },
      I = typeof E == "boolean" ? E : i ? !Z(r).endOf("year").isBefore(i) : !1,
      q = typeof k == "boolean" ? k : s ? !Z(r).startOf("year").isAfter(s) : !1;
    return h.jsxs(G, {
      "data-year-level": !0,
      size: O,
      ref: t,
      ..._,
      children: [
        h.jsx(Rr, {
          label:
            typeof B == "function"
              ? B(r)
              : Z(r)
                  .locale(o || $.locale)
                  .format(B),
          __preventFocus: p,
          __stopPropagation: A,
          nextIcon: g,
          previousIcon: b,
          nextLabel: w,
          previousLabel: y,
          onNext: v,
          onPrevious: S,
          onLevelClick: C,
          nextDisabled: I,
          previousDisabled: q,
          hasNextLevel: D,
          levelControlAriaLabel: L,
          withNext: N,
          withPrevious: F,
          ...j,
        }),
        h.jsx(Qa, {
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
          ...j,
        }),
      ],
    });
  });
Ja.classes = { ...Rr.classes, ...Qa.classes };
Ja.displayName = "@mantine/dates/YearLevel";
const GN = { monthLabelFormat: "MMMM YYYY" },
  ec = K((e, t) => {
    const n = W("MonthLevel", GN, e),
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
        getDayAriaLabel: g,
        __getDayRef: b,
        __onDayKeyDown: w,
        __onDayClick: y,
        __onDayMouseEnter: v,
        withCellSpacing: S,
        __preventFocus: C,
        __stopPropagation: E,
        nextIcon: k,
        previousIcon: D,
        nextLabel: L,
        previousLabel: N,
        onNext: F,
        onPrevious: B,
        onLevelClick: V,
        nextDisabled: A,
        previousDisabled: O,
        hasNextLevel: P,
        levelControlAriaLabel: T,
        withNext: R,
        withPrevious: _,
        monthLabelFormat: $,
        classNames: j,
        styles: I,
        unstyled: q,
        __staticSelector: Q,
        size: ee,
        static: ne,
        ...te
      } = n,
      me = gn(),
      oe = {
        __staticSelector: Q || "MonthLevel",
        classNames: j,
        styles: I,
        unstyled: q,
        size: ee,
      },
      le =
        typeof A == "boolean" ? A : d ? !Z(r).endOf("month").isBefore(d) : !1,
      J =
        typeof O == "boolean" ? O : u ? !Z(r).startOf("month").isAfter(u) : !1;
    return h.jsxs(G, {
      "data-month-level": !0,
      size: ee,
      ref: t,
      ...te,
      children: [
        h.jsx(Rr, {
          label:
            typeof $ == "function"
              ? $(r)
              : Z(r)
                  .locale(o || me.locale)
                  .format($),
          __preventFocus: C,
          __stopPropagation: E,
          nextIcon: k,
          previousIcon: D,
          nextLabel: L,
          previousLabel: N,
          onNext: F,
          onPrevious: B,
          onLevelClick: V,
          nextDisabled: le,
          previousDisabled: J,
          hasNextLevel: P,
          levelControlAriaLabel: T,
          withNext: R,
          withPrevious: _,
          ...oe,
        }),
        h.jsx(Ga, {
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
          getDayAriaLabel: g,
          __getDayRef: b,
          __onDayKeyDown: w,
          __onDayClick: y,
          __onDayMouseEnter: v,
          __preventFocus: C,
          __stopPropagation: E,
          static: ne,
          withCellSpacing: S,
          ...oe,
        }),
      ],
    });
  });
ec.classes = { ...Ga.classes, ...Rr.classes };
ec.displayName = "@mantine/dates/MonthLevel";
var g1 = { levelsGroup: "m_30b26e33" };
const KN = {},
  Dr = K((e, t) => {
    const n = W("LevelsGroup", KN, e),
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
      d = ae({
        name: c || "LevelsGroup",
        classes: g1,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: l,
        vars: a,
        rootSelector: "levelsGroup",
      });
    return h.jsx(G, { ref: t, ...d("levelsGroup"), ...u });
  });
Dr.classes = g1;
Dr.displayName = "@mantine/dates/LevelsGroup";
const XN = { numberOfColumns: 1 },
  tc = K((e, t) => {
    const n = W("DecadeLevelGroup", XN, e),
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
        nextLabel: g,
        previousLabel: b,
        onNext: w,
        onPrevious: y,
        nextDisabled: v,
        previousDisabled: S,
        classNames: C,
        styles: E,
        unstyled: k,
        __staticSelector: D,
        __stopPropagation: L,
        numberOfColumns: N,
        levelControlAriaLabel: F,
        decadeLabelFormat: B,
        size: V,
        vars: A,
        ...O
      } = n,
      P = x.useRef([]),
      T = Array(N)
        .fill(0)
        .map((R, _) => {
          const $ = Z(r)
            .add(_ * 10, "years")
            .toDate();
          return h.jsx(
            Za,
            {
              size: V,
              yearsListFormat: l,
              decade: $,
              withNext: _ === N - 1,
              withPrevious: _ === 0,
              decadeLabelFormat: B,
              __onControlClick: c,
              __onControlMouseEnter: u,
              __onControlKeyDown: (j, I) =>
                kp({
                  levelIndex: _,
                  rowIndex: I.rowIndex,
                  cellIndex: I.cellIndex,
                  event: j,
                  controlsRef: P,
                }),
              __getControlRef: (j, I, q) => {
                Array.isArray(P.current[_]) || (P.current[_] = []),
                  Array.isArray(P.current[_][j]) || (P.current[_][j] = []),
                  (P.current[_][j][I] = q);
              },
              levelControlAriaLabel: typeof F == "function" ? F($) : F,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              __stopPropagation: L,
              nextIcon: m,
              previousIcon: p,
              nextLabel: g,
              previousLabel: b,
              onNext: w,
              onPrevious: y,
              nextDisabled: v,
              previousDisabled: S,
              getYearControlProps: a,
              __staticSelector: D || "DecadeLevelGroup",
              classNames: C,
              styles: E,
              unstyled: k,
              withCellSpacing: d,
            },
            _
          );
        });
    return h.jsx(Dr, {
      classNames: C,
      styles: E,
      __staticSelector: D || "DecadeLevelGroup",
      ref: t,
      size: V,
      unstyled: k,
      ...O,
      children: T,
    });
  });
tc.classes = { ...Dr.classes, ...Za.classes };
tc.displayName = "@mantine/dates/DecadeLevelGroup";
const QN = { numberOfColumns: 1 },
  nc = K((e, t) => {
    const n = W("YearLevelGroup", QN, e),
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
        nextLabel: g,
        previousLabel: b,
        onNext: w,
        onPrevious: y,
        onLevelClick: v,
        nextDisabled: S,
        previousDisabled: C,
        hasNextLevel: E,
        classNames: k,
        styles: D,
        unstyled: L,
        __staticSelector: N,
        __stopPropagation: F,
        numberOfColumns: B,
        levelControlAriaLabel: V,
        yearLabelFormat: A,
        size: O,
        vars: P,
        ...T
      } = n,
      R = x.useRef([]),
      _ = Array(B)
        .fill(0)
        .map(($, j) => {
          const I = Z(r).add(j, "years").toDate();
          return h.jsx(
            Ja,
            {
              size: O,
              monthsListFormat: l,
              year: I,
              withNext: j === B - 1,
              withPrevious: j === 0,
              yearLabelFormat: A,
              __stopPropagation: F,
              __onControlClick: c,
              __onControlMouseEnter: u,
              __onControlKeyDown: (q, Q) =>
                kp({
                  levelIndex: j,
                  rowIndex: Q.rowIndex,
                  cellIndex: Q.cellIndex,
                  event: q,
                  controlsRef: R,
                }),
              __getControlRef: (q, Q, ee) => {
                Array.isArray(R.current[j]) || (R.current[j] = []),
                  Array.isArray(R.current[j][q]) || (R.current[j][q] = []),
                  (R.current[j][q][Q] = ee);
              },
              levelControlAriaLabel: typeof V == "function" ? V(I) : V,
              locale: o,
              minDate: s,
              maxDate: i,
              __preventFocus: f,
              nextIcon: m,
              previousIcon: p,
              nextLabel: g,
              previousLabel: b,
              onNext: w,
              onPrevious: y,
              onLevelClick: v,
              nextDisabled: S,
              previousDisabled: C,
              hasNextLevel: E,
              getMonthControlProps: a,
              classNames: k,
              styles: D,
              unstyled: L,
              __staticSelector: N || "YearLevelGroup",
              withCellSpacing: d,
            },
            j
          );
        });
    return h.jsx(Dr, {
      classNames: k,
      styles: D,
      __staticSelector: N || "YearLevelGroup",
      ref: t,
      size: O,
      unstyled: L,
      ...T,
      children: _,
    });
  });
nc.classes = { ...Ja.classes, ...Dr.classes };
nc.displayName = "@mantine/dates/YearLevelGroup";
const ZN = { numberOfColumns: 1 },
  rc = K((e, t) => {
    const n = W("MonthLevelGroup", ZN, e),
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
        getDayAriaLabel: g,
        __onDayClick: b,
        __onDayMouseEnter: w,
        withCellSpacing: y,
        __preventFocus: v,
        nextIcon: S,
        previousIcon: C,
        nextLabel: E,
        previousLabel: k,
        onNext: D,
        onPrevious: L,
        onLevelClick: N,
        nextDisabled: F,
        previousDisabled: B,
        hasNextLevel: V,
        classNames: A,
        styles: O,
        unstyled: P,
        numberOfColumns: T,
        levelControlAriaLabel: R,
        monthLabelFormat: _,
        __staticSelector: $,
        __stopPropagation: j,
        size: I,
        static: q,
        vars: Q,
        ...ee
      } = n,
      ne = x.useRef([]),
      te = Array(T)
        .fill(0)
        .map((me, oe) => {
          const le = Z(r).add(oe, "months").toDate();
          return h.jsx(
            ec,
            {
              month: le,
              withNext: oe === T - 1,
              withPrevious: oe === 0,
              monthLabelFormat: _,
              __stopPropagation: j,
              __onDayClick: b,
              __onDayMouseEnter: w,
              __onDayKeyDown: (J, he) =>
                kp({
                  levelIndex: oe,
                  rowIndex: he.rowIndex,
                  cellIndex: he.cellIndex,
                  event: J,
                  controlsRef: ne,
                }),
              __getDayRef: (J, he, ce) => {
                Array.isArray(ne.current[oe]) || (ne.current[oe] = []),
                  Array.isArray(ne.current[oe][J]) || (ne.current[oe][J] = []),
                  (ne.current[oe][J][he] = ce);
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
              getDayAriaLabel: g,
              __preventFocus: v,
              nextIcon: S,
              previousIcon: C,
              nextLabel: E,
              previousLabel: k,
              onNext: D,
              onPrevious: L,
              onLevelClick: N,
              nextDisabled: F,
              previousDisabled: B,
              hasNextLevel: V,
              classNames: A,
              styles: O,
              unstyled: P,
              __staticSelector: $ || "MonthLevelGroup",
              size: I,
              static: q,
              withCellSpacing: y,
            },
            oe
          );
        });
    return h.jsx(Dr, {
      classNames: A,
      styles: O,
      __staticSelector: $ || "MonthLevelGroup",
      ref: t,
      size: I,
      ...ee,
      children: te,
    });
  });
rc.classes = { ...Dr.classes, ...ec.classes };
rc.displayName = "@mantine/dates/MonthLevelGroup";
const lg = (e) => (e === "range" ? [null, null] : e === "multiple" ? [] : null);
function y1({
  type: e,
  value: t,
  defaultValue: n,
  onChange: r,
  applyTimezone: o = !0,
}) {
  const s = x.useRef(e),
    i = gn(),
    [l, a, c] = ln({
      value: Fo("add", t, i.getTimezone(), !o),
      defaultValue: Fo("add", n, i.getTimezone(), !o),
      finalValue: lg(e),
      onChange: (d) => {
        r == null || r(Fo("remove", d, i.getTimezone(), !o));
      },
    });
  let u = l;
  return (
    s.current !== e &&
      ((s.current = e), t === void 0 && ((u = n !== void 0 ? n : lg(e)), a(u))),
    [u, a, c]
  );
}
function eu(e, t) {
  return e ? (e === "month" ? 0 : e === "year" ? 1 : 2) : t || 0;
}
function JN(e) {
  return e === 0 ? "month" : e === 1 ? "year" : "decade";
}
function Ds(e, t, n) {
  return JN(pC(eu(e, 0), eu(t, 0), eu(n, 2)));
}
const eT = {
    maxLevel: "decade",
    minLevel: "month",
    __updateDateOnYearSelect: !0,
    __updateDateOnMonthSelect: !0,
  },
  oc = K((e, t) => {
    const n = W("Calendar", eT, e),
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
        onYearSelect: g,
        onMonthSelect: b,
        onYearMouseEnter: w,
        onMonthMouseEnter: y,
        __updateDateOnYearSelect: v,
        __updateDateOnMonthSelect: S,
        firstDayOfWeek: C,
        weekdayFormat: E,
        weekendDays: k,
        getDayProps: D,
        excludeDate: L,
        renderDay: N,
        hideOutsideDates: F,
        hideWeekdays: B,
        getDayAriaLabel: V,
        monthLabelFormat: A,
        nextIcon: O,
        previousIcon: P,
        __onDayClick: T,
        __onDayMouseEnter: R,
        withCellSpacing: _,
        monthsListFormat: $,
        getMonthControlProps: j,
        yearLabelFormat: I,
        yearsListFormat: q,
        getYearControlProps: Q,
        decadeLabelFormat: ee,
        classNames: ne,
        styles: te,
        unstyled: me,
        minDate: oe,
        maxDate: le,
        locale: J,
        __staticSelector: he,
        size: ce,
        __preventFocus: se,
        __stopPropagation: Re,
        onNextDecade: Ie,
        onPreviousDecade: ve,
        onNextYear: Ge,
        onPreviousYear: De,
        onNextMonth: Le,
        onPreviousMonth: Y,
        static: re,
        __timezoneApplied: ie,
        ...xe
      } = n,
      { resolvedClassNames: Ae, resolvedStyles: ht } = oo({
        classNames: ne,
        styles: te,
        props: n,
      }),
      [be, Fe] = ln({
        value: l ? Ds(l, s, o) : void 0,
        defaultValue: i ? Ds(i, s, o) : void 0,
        finalValue: Ds(void 0, s, o),
        onChange: a,
      }),
      [It, We] = y1({
        type: "default",
        value: c,
        defaultValue: u,
        onChange: d,
        applyTimezone: !ie,
      }),
      gt = {
        __staticSelector: he || "Calendar",
        styles: ht,
        classNames: Ae,
        unstyled: me,
        size: ce,
      },
      Nn = gn(),
      Ke = m || f || 1,
      lt = It || Fo("add", new Date(), Nn.getTimezone()),
      ms = () => {
        const Ee = Z(lt).add(Ke, "month").toDate();
        Le == null || Le(Ee), We(Ee);
      },
      yt = () => {
        const Ee = Z(lt).subtract(Ke, "month").toDate();
        Y == null || Y(Ee), We(Ee);
      },
      Tn = () => {
        const Ee = Z(lt).add(Ke, "year").toDate();
        Ge == null || Ge(Ee), We(Ee);
      },
      io = () => {
        const Ee = Z(lt).subtract(Ke, "year").toDate();
        De == null || De(Ee), We(Ee);
      },
      lo = () => {
        const Ee = Z(lt)
          .add(10 * Ke, "year")
          .toDate();
        Ie == null || Ie(Ee), We(Ee);
      },
      vn = () => {
        const Ee = Z(lt)
          .subtract(10 * Ke, "year")
          .toDate();
        ve == null || ve(Ee), We(Ee);
      };
    return h.jsxs(G, {
      ref: t,
      size: ce,
      "data-calendar": !0,
      ...xe,
      children: [
        be === "month" &&
          h.jsx(rc, {
            month: lt,
            minDate: oe,
            maxDate: le,
            firstDayOfWeek: C,
            weekdayFormat: E,
            weekendDays: k,
            getDayProps: D,
            excludeDate: L,
            renderDay: N,
            hideOutsideDates: F,
            hideWeekdays: B,
            getDayAriaLabel: V,
            onNext: ms,
            onPrevious: yt,
            hasNextLevel: o !== "month",
            onLevelClick: () => Fe("year"),
            numberOfColumns: f,
            locale: J,
            levelControlAriaLabel: p == null ? void 0 : p.monthLevelControl,
            nextLabel: p == null ? void 0 : p.nextMonth,
            nextIcon: O,
            previousLabel: p == null ? void 0 : p.previousMonth,
            previousIcon: P,
            monthLabelFormat: A,
            __onDayClick: T,
            __onDayMouseEnter: R,
            __preventFocus: se,
            __stopPropagation: Re,
            static: re,
            withCellSpacing: _,
            ...gt,
          }),
        be === "year" &&
          h.jsx(nc, {
            year: lt,
            numberOfColumns: f,
            minDate: oe,
            maxDate: le,
            monthsListFormat: $,
            getMonthControlProps: j,
            locale: J,
            onNext: Tn,
            onPrevious: io,
            hasNextLevel: o !== "month" && o !== "year",
            onLevelClick: () => Fe("decade"),
            levelControlAriaLabel: p == null ? void 0 : p.yearLevelControl,
            nextLabel: p == null ? void 0 : p.nextYear,
            nextIcon: O,
            previousLabel: p == null ? void 0 : p.previousYear,
            previousIcon: P,
            yearLabelFormat: I,
            __onControlMouseEnter: y,
            __onControlClick: (Ee, Nt) => {
              S && We(Nt), Fe(Ds("month", s, o)), b == null || b(Nt);
            },
            __preventFocus: se,
            __stopPropagation: Re,
            withCellSpacing: _,
            ...gt,
          }),
        be === "decade" &&
          h.jsx(tc, {
            decade: lt,
            minDate: oe,
            maxDate: le,
            yearsListFormat: q,
            getYearControlProps: Q,
            locale: J,
            onNext: lo,
            onPrevious: vn,
            numberOfColumns: f,
            nextLabel: p == null ? void 0 : p.nextDecade,
            nextIcon: O,
            previousLabel: p == null ? void 0 : p.previousDecade,
            previousIcon: P,
            decadeLabelFormat: ee,
            __onControlMouseEnter: w,
            __onControlClick: (Ee, Nt) => {
              v && We(Nt), Fe(Ds("year", s, o)), g == null || g(Nt);
            },
            __preventFocus: se,
            __stopPropagation: Re,
            withCellSpacing: _,
            ...gt,
          }),
      ],
    });
  });
oc.classes = { ...tc.classes, ...nc.classes, ...rc.classes };
oc.displayName = "@mantine/dates/Calendar";
function ag(e, t) {
  const n = [...t].sort((r, o) => r.getTime() - o.getTime());
  return (
    Z(n[0]).startOf("day").subtract(1, "ms").isBefore(e) &&
    Z(n[1]).endOf("day").add(1, "ms").isAfter(e)
  );
}
function tT({
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
  const [c, u] = y1({
      type: e,
      value: n,
      defaultValue: r,
      onChange: o,
      applyTimezone: a,
    }),
    [d, f] = x.useState(e === "range" && c[0] && !c[1] ? c[0] : null),
    [m, p] = x.useState(null),
    g = (E) => {
      if (e === "range") {
        if (d instanceof Date && !c[1]) {
          if (Z(E).isSame(d, t) && !s) {
            f(null), p(null), u([null, null]);
            return;
          }
          const k = [E, d];
          k.sort((D, L) => D.getTime() - L.getTime()), u(k), p(null), f(null);
          return;
        }
        if (c[0] && !c[1] && Z(E).isSame(c[0], t) && !s) {
          f(null), p(null), u([null, null]);
          return;
        }
        u([E, null]), p(null), f(E);
        return;
      }
      if (e === "multiple") {
        c.some((k) => Z(k).isSame(E, t))
          ? u(c.filter((k) => !Z(k).isSame(E, t)))
          : u([...c, E]);
        return;
      }
      c && i && Z(E).isSame(c, t) ? u(null) : u(E);
    },
    b = (E) =>
      d instanceof Date && m instanceof Date
        ? ag(E, [m, d])
        : c[0] instanceof Date && c[1] instanceof Date
        ? ag(E, c)
        : !1,
    w =
      e === "range"
        ? (E) => {
            l == null || l(E), p(null);
          }
        : l,
    y = (E) =>
      c[0] instanceof Date && Z(E).isSame(c[0], t)
        ? !(m && Z(m).isBefore(c[0]))
        : !1,
    v = (E) =>
      c[1] instanceof Date
        ? Z(E).isSame(c[1], t)
        : !(c[0] instanceof Date) || !m
        ? !1
        : Z(m).isBefore(c[0]) && Z(E).isSame(c[0], t),
    S = (E) => {
      if (e === "range")
        return {
          selected: c.some((D) => D && Z(D).isSame(E, t)),
          inRange: b(E),
          firstInRange: y(E),
          lastInRange: v(E),
          "data-autofocus": (!!c[0] && Z(c[0]).isSame(E, t)) || void 0,
        };
      if (e === "multiple")
        return {
          selected: c.some((D) => D && Z(D).isSame(E, t)),
          "data-autofocus": (!!c[0] && Z(c[0]).isSame(E, t)) || void 0,
        };
      const k = Z(c).isSame(E, t);
      return { selected: k, "data-autofocus": k || void 0 };
    },
    C = e === "range" && d ? p : () => {};
  return (
    x.useEffect(() => {
      e === "range" && !c[0] && !c[1] && f(null);
    }, [n]),
    {
      onDateChange: g,
      onRootMouseLeave: w,
      onHoveredDateChange: C,
      getControlProps: S,
      _value: c,
      setValue: u,
    }
  );
}
const nT = { type: "default", defaultLevel: "month", numberOfColumns: 1 },
  Pp = K((e, t) => {
    const n = W("DatePicker", nT, e),
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
        numberOfColumns: g,
        hideOutsideDates: b,
        __onDayMouseEnter: w,
        __onDayClick: y,
        __timezoneApplied: v,
        ...S
      } = n,
      {
        onDateChange: C,
        onRootMouseLeave: E,
        onHoveredDateChange: k,
        getControlProps: D,
      } = tT({
        type: i,
        level: "day",
        allowDeselect: m,
        allowSingleDateInRange: f,
        value: a,
        defaultValue: l,
        onChange: c,
        onMouseLeave: p,
        applyTimezone: !v,
      }),
      { resolvedClassNames: L, resolvedStyles: N } = oo({
        classNames: r,
        styles: o,
        props: n,
      }),
      F = gn();
    return h.jsx(oc, {
      ref: t,
      minLevel: "month",
      classNames: L,
      styles: N,
      __staticSelector: u || "DatePicker",
      onMouseLeave: E,
      numberOfColumns: g,
      hideOutsideDates: b ?? g !== 1,
      __onDayMouseEnter: (B, V) => {
        k(V), w == null || w(B, V);
      },
      __onDayClick: (B, V) => {
        C(V), y == null || y(B, V);
      },
      getDayProps: (B) => ({ ...D(B), ...(d == null ? void 0 : d(B)) }),
      ...S,
      date: Fo("add", S.date, F.getTimezone(), v),
      __timezoneApplied: !0,
    });
  });
Pp.classes = oc.classes;
Pp.displayName = "@mantine/dates/DatePicker";
const Np = (e) => {
  const { title: t, description: n, form: r, options: o, field_id: s } = e,
    i = o.map((u) => u.option),
    [l, a] = x.useState(o.at(0));
  x.useEffect(() => {
    r.setFieldValue(s, l);
  }, []);
  const c = (u) => {
    a(u.value), r.setFieldValue(s, u.value);
  };
  return h.jsx(yp, {
    label: t,
    description: n,
    data: i,
    defaultValue: i.at(0),
    onChange: (u, d) => c(d),
    searchable: !0,
  });
};
Np.defaultProps = {};
Np.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  options: U.array,
};
const Tp = (e) => {
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
  const [d, f] = x.useState(c),
    [m, p] = x.useState(d),
    [g, { open: b, close: w }] = li(!1);
  x.useEffect(() => {
    localStorage.setItem("embargo", d.toISOString().split("T")[0]);
  }, [d]);
  const y = () =>
      h.jsx(or, {
        children: h.jsxs(en, {
          onClick: b,
          variant: "default",
          className: "link-style",
          children: [
            h.jsx("i", { className: "icon ion-md-calendar align-top mr-2" }),
            "Change embargo date",
          ],
        }),
      }),
    v = (C) => {
      const E = new Date(l);
      E.setMonth(l.getMonth() + C), f(E);
    },
    S = () =>
      d.getDate().toString() +
      " " +
      d.toLocaleString("default", { month: "long" }) +
      " " +
      d.getFullYear().toString();
  return h.jsxs("div", {
    children: [
      h.jsxs("header", {
        className: "",
        children: [
          h.jsxs("h2", {
            className: "",
            children: [
              t,
              " ",
              i &&
                h.jsx("span", {
                  class:
                    "mantine-InputWrapper-required mantine-TextInput-required",
                  children: "*",
                }),
            ],
          }),
          h.jsx("h4", { children: S() }),
          y(),
        ],
      }),
      h.jsxs(hn, {
        opened: g,
        onClose: w,
        title: "Select embargo date",
        centered: !0,
        children: [
          h.jsx(or, {
            justify: "center",
            children: h.jsxs("p", {
              className: "my-3",
              children: ["New Embargo: ", h.jsx("b", { children: S() })],
            }),
          }),
          h.jsxs(or, {
            justify: "center",
            children: [
              h.jsx(en, {
                className: "button-inverted blue-button",
                variant: "default",
                onClick: () => {
                  v(6);
                },
                children: "6 months",
              }),
              h.jsx(en, {
                className: "button-inverted blue-button",
                variant: "default",
                onClick: () => {
                  v(12);
                },
                children: "12 months",
              }),
              h.jsx(en, {
                className: "button-inverted blue-button",
                variant: "default",
                onClick: () => {
                  v(18);
                },
                children: "18 months",
              }),
            ],
          }),
          h.jsx(or, {
            className: "pt-3 pb-5",
            justify: "center",
            children: h.jsx(Pp, {
              defaultDate: c,
              minDate: a,
              maxDate: u,
              value: d,
              onChange: f,
            }),
          }),
          h.jsxs(or, {
            justify: "center",
            children: [
              h.jsx(en, {
                className: "button-inverted green-button",
                variant: "default",
                onClick: () => {
                  p(d), w();
                },
                children: "Accept",
              }),
              h.jsx(en, {
                className: "button-inverted red-button",
                variant: "default",
                onClick: () => {
                  f(m), w();
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
Tp.defaultProps = {};
Tp.propTypes = {
  title: U.string.isRequired,
  description: U.string,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  options: U.array,
};
const rT = (e) => {
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
              h.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: h.jsxs("a", {
                    children: [
                      h.jsx("i", {
                        className: "fa fa-bookmark-o pr-2",
                        "aria-hidden": "true",
                      }),
                      "Submission Id: ",
                      h.jsx("br", {}),
                      h.jsx("div", { className: "data-field", children: a }),
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
              h.jsxs("div", {
                className: "info-box-header",
                children: [
                  h.jsx("i", {
                    className: "fa fa-archive pr-2",
                    "aria-hidden": "true",
                  }),
                  "ENA Accession:",
                  h.jsx("br", {}),
                ],
              })
            ),
            l.accessionId.forEach((f) => {
              c.push(
                h.jsx(
                  "li",
                  {
                    className: "list-group-item",
                    children: h.jsxs("div", {
                      className: "data-field",
                      children: [
                        h.jsxs("div", {
                          className: "",
                          children: [
                            h.jsx("span", {
                              style: { fontWeight: 600 },
                              children: "ID",
                            }),
                            ": ",
                            f.pid,
                          ],
                        }),
                        h.jsxs("div", {
                          className: "",
                          style: { marginTop: 0 },
                          children: [
                            h.jsx("span", {
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
              h.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: h.jsxs("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "external",
                    href: fN + l.issue,
                    children: [
                      h.jsx("i", {
                        className: "fa fa-tags pr-2",
                        "aria-hidden": "true",
                      }),
                      "Ticket:",
                      h.jsx("br", {}),
                      h.jsx("div", {
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
              h.jsx(
                "li",
                {
                  className: "list-group-item",
                  children: h.jsxs("a", {
                    children: [
                      h.jsx("i", {
                        className: "fa fa-info-circle pr-2",
                        "aria-hidden": "true",
                      }),
                      "Status: ",
                      h.jsx("br", {}),
                      h.jsx("div", {
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
            h.jsx(
              "li",
              {
                className: "list-group-item",
                children: h.jsxs("a", {
                  href: d,
                  className: "external",
                  children: [
                    h.jsx("i", {
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
    return h.jsxs("div", {
      className: "info-box",
      children: [
        h.jsxs("header", {
          className: "",
          children: [
            h.jsx("h2", { className: "ommit-optional", children: t }),
            h.jsx("p", { className: "" }),
          ],
        }),
        h.jsx("div", {
          className: "",
          children: h.jsx("ul", {
            className: "list-group list-group-flush",
            children: i(),
          }),
        }),
      ],
    });
  },
  oT = () => {
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
    return h.jsxs("div", {
      children: [
        h.jsxs("h4", {
          children: [
            "Metadata Templates",
            " ",
            h.jsxs(Br, {
              width: 320,
              shadow: "md",
              position: "right",
              withArrow: !0,
              children: [
                h.jsx(Br.Target, {
                  children: h.jsx("i", {
                    className: "fa fa-question-circle-o",
                    "aria-hidden": "true",
                  }),
                }),
                h.jsx(Br.Dropdown, {
                  children: h.jsx("p", {
                    children:
                      "Metadata templates are provided to help you structure your data submission. Using a metadata template is optional, but highly recommended. You can modify the existing templates to your needs.",
                  }),
                }),
              ],
            }),
          ],
        }),
        h.jsx("ul", {
          className: "list-group list-group-flush",
          children: e.map((t) =>
            h.jsxs(
              "li",
              {
                className: "list-group-item",
                children: [
                  t.name,
                  h.jsx("br", {}),
                  h.jsxs("a", {
                    href: t.template_link,
                    target: "_blank",
                    children: [
                      h.jsx("i", {
                        className: "fa fa-download",
                        "aria-hidden": "true",
                      }),
                      " CSV Template",
                    ],
                  }),
                  h.jsx("br", {}),
                  h.jsxs("a", {
                    href: t.description_link,
                    target: "_blank",
                    children: [
                      h.jsx("i", {
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
  jp = (e) => {
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
    return h.jsx("div", {
      children: h.jsx(
        Zo.Group,
        {
          label: t,
          description: n,
          ...r.getInputProps(s),
          children: l.map(function (a) {
            return h.jsx(Zo, { value: a, label: a });
          }),
        },
        r.key(s)
      ),
    });
  };
jp.defaultProps = { default_value: "" };
jp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
  default_value: U.string,
};
const Op = (e) => {
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
  return h.jsx("div", {
    children: h.jsx(gp, {
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
Op.defaultProps = { default_value: "" };
Op.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
  default_value: U.string,
};
function v1(e) {
  const {
      title: t,
      description: n,
      mandatory: r,
      form: o,
      field_id: s,
      placeholder: i,
    } = e,
    [l, a] = x.useState(""),
    [c, u] = x.useState([]),
    d = (p) => {
      a(p.target.value);
    },
    f = () => {
      if (l.trim() !== "") {
        const p = [...c, l];
        u(p), a(""), o.setFieldValue(s, p.join(", "));
      }
    },
    m = (p) => {
      const g = c.filter((b) => b !== p);
      u(g), o.setFieldValue(s, g.join(", "));
    };
  return h.jsxs("div", {
    children: [
      h.jsxs(Zl, {
        style: { marginBottom: "8px" },
        children: [
          h.jsx(
            Ya,
            {
              label: t,
              description: n,
              placeholder: i,
              required: r,
              value: l,
              onChange: d,
              onKeyDown: (p) => {
                p.key === "Enter" && f();
              },
              style: { flex: "1", marginRight: "8px" },
            },
            o.key(s)
          ),
          h.jsx(en, {
            onClick: f,
            style: { width: "auto", alignSelf: "flex-end" },
            children: "Add Publication",
          }),
        ],
      }),
      h.jsx(di, {
        spacing: "xs",
        icon: h.jsx(wp, {
          color: "blue",
          variant: "filled",
          children: h.jsx("i", { className: "fa fa-book" }),
        }),
        children: c.map((p) =>
          h.jsx(
            di.Item,
            {
              children: h.jsxs(Zl, {
                children: [
                  h.jsx("span", { children: p }),
                  h.jsx(as, {
                    onClick: () => m(p),
                    style: { marginLeft: "12px" },
                  }),
                ],
              }),
            },
            p
          )
        ),
      }),
    ],
  });
}
v1.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const $p = (e) => {
  const {
    title: t,
    description: n,
    mandatory: r,
    form: o,
    field_id: s,
    placeholder: i,
  } = e;
  return h.jsx(
    vp,
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
$p.defaultProps = { placeholder: "" };
$p.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const Lp = (e) => {
  const {
    title: t,
    description: n,
    form: r,
    field_id: o,
    placeholder: s,
    mandatory: i,
  } = e;
  return h.jsx(
    cp,
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
Lp.defaultProps = { placeholder: "" };
Lp.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const Hs = (e) => {
  const {
    title: t,
    description: n,
    mandatory: r,
    form: o,
    field_id: s,
    placeholder: i,
  } = e;
  return h.jsx(
    Ya,
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
Hs.defaultProps = { placeholder: "" };
Hs.propTypes = {
  title: U.string.isRequired,
  description: U.string.isRequired,
  mandatory: U.bool.isRequired,
  form: U.object.isRequired,
  field_id: U.string.isRequired,
  placeholder: U.string,
};
const wl = ({ field: e, form: t, onFilesChange: n }) => {
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
      return h.jsx(Hs, { ...r });
    case "text-area":
      return h.jsx(Lp, { ...r });
    case "select-field":
      return h.jsx(Np, { ...r });
    case "file-upload":
      return h.jsx(_p, { ...r, onFilesChange: n });
    case "collapsible-selector":
      return h.jsx(xp, { ...r });
    case "metadata-template":
      return h.jsx(oT, { ...r });
    case "info-box":
      return h.jsx(rT, { ...r });
    case "multiselect-checkboxes":
      return h.jsx(jp, { ...r });
    case "multiselect-dropdown":
      return h.jsx(Op, { ...r });
    case "embargo-date-picker":
      return h.jsx(Tp, { ...r });
    case "data-url-field":
      return h.jsx(Hs, { ...r });
    case "tags-input":
      return h.jsx($p, { ...r });
    case "related-publications":
      return h.jsx(v1, { ...r });
    default:
      return h.jsx(Hs, { ...r });
  }
};
wl.propTypes = {
  field: U.object.isRequired,
  form: U.object.isRequired,
  onFilesChange: U.func.isRequired,
};
function w1(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: sT } = Object.prototype,
  { getPrototypeOf: Ap } = Object,
  sc = ((e) => (t) => {
    const n = sT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  yn = (e) => ((e = e.toLowerCase()), (t) => sc(t) === e),
  ic = (e) => (t) => typeof t === e,
  { isArray: fs } = Array,
  pi = ic("undefined");
function iT(e) {
  return (
    e !== null &&
    !pi(e) &&
    e.constructor !== null &&
    !pi(e.constructor) &&
    Ut(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const x1 = yn("ArrayBuffer");
function lT(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && x1(e.buffer)),
    t
  );
}
const aT = ic("string"),
  Ut = ic("function"),
  b1 = ic("number"),
  lc = (e) => e !== null && typeof e == "object",
  cT = (e) => e === !0 || e === !1,
  xl = (e) => {
    if (sc(e) !== "object") return !1;
    const t = Ap(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  uT = yn("Date"),
  dT = yn("File"),
  fT = yn("Blob"),
  pT = yn("FileList"),
  mT = (e) => lc(e) && Ut(e.pipe),
  hT = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ut(e.append) &&
          ((t = sc(e)) === "formdata" ||
            (t === "object" &&
              Ut(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  gT = yn("URLSearchParams"),
  [yT, vT, wT, xT] = ["ReadableStream", "Request", "Response", "Headers"].map(
    yn
  ),
  bT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ki(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), fs(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let l;
    for (r = 0; r < i; r++) (l = s[r]), t.call(null, e[l], l, e);
  }
}
function S1(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const C1 =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  E1 = (e) => !pi(e) && e !== C1;
function pd() {
  const { caseless: e } = (E1(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && S1(t, o)) || o;
      xl(t[s]) && xl(r)
        ? (t[s] = pd(t[s], r))
        : xl(r)
        ? (t[s] = pd({}, r))
        : fs(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ki(arguments[r], n);
  return t;
}
const ST = (e, t, n, { allOwnKeys: r } = {}) => (
    ki(
      t,
      (o, s) => {
        n && Ut(o) ? (e[s] = w1(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  CT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ET = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  _T = (e, t, n, r) => {
    let o, s, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && Ap(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  kT = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  RT = (e) => {
    if (!e) return null;
    if (fs(e)) return e;
    let t = e.length;
    if (!b1(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  DT = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ap(Uint8Array)),
  PT = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  NT = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  TT = yn("HTMLFormElement"),
  jT = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  cg = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  OT = yn("RegExp"),
  _1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ki(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  $T = (e) => {
    _1(e, (t, n) => {
      if (Ut(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ut(r)) {
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
  LT = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return fs(e) ? r(e) : r(String(e).split(t)), n;
  },
  AT = () => {},
  FT = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  tu = "abcdefghijklmnopqrstuvwxyz",
  ug = "0123456789",
  k1 = { DIGIT: ug, ALPHA: tu, ALPHA_DIGIT: tu + tu.toUpperCase() + ug },
  MT = (e = 16, t = k1.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function IT(e) {
  return !!(
    e &&
    Ut(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const zT = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (lc(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = fs(r) ? [] : {};
            return (
              ki(r, (i, l) => {
                const a = n(i, o + 1);
                !pi(a) && (s[l] = a);
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
  BT = yn("AsyncFunction"),
  VT = (e) => e && (lc(e) || Ut(e)) && Ut(e.then) && Ut(e.catch),
  M = {
    isArray: fs,
    isArrayBuffer: x1,
    isBuffer: iT,
    isFormData: hT,
    isArrayBufferView: lT,
    isString: aT,
    isNumber: b1,
    isBoolean: cT,
    isObject: lc,
    isPlainObject: xl,
    isReadableStream: yT,
    isRequest: vT,
    isResponse: wT,
    isHeaders: xT,
    isUndefined: pi,
    isDate: uT,
    isFile: dT,
    isBlob: fT,
    isRegExp: OT,
    isFunction: Ut,
    isStream: mT,
    isURLSearchParams: gT,
    isTypedArray: DT,
    isFileList: pT,
    forEach: ki,
    merge: pd,
    extend: ST,
    trim: bT,
    stripBOM: CT,
    inherits: ET,
    toFlatObject: _T,
    kindOf: sc,
    kindOfTest: yn,
    endsWith: kT,
    toArray: RT,
    forEachEntry: PT,
    matchAll: NT,
    isHTMLForm: TT,
    hasOwnProperty: cg,
    hasOwnProp: cg,
    reduceDescriptors: _1,
    freezeMethods: $T,
    toObjectSet: LT,
    toCamelCase: jT,
    noop: AT,
    toFiniteNumber: FT,
    findKey: S1,
    global: C1,
    isContextDefined: E1,
    ALPHABET: k1,
    generateString: MT,
    isSpecCompliantForm: IT,
    toJSONObject: zT,
    isAsyncFn: BT,
    isThenable: VT,
  };
function ue(e, t, n, r, o) {
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
M.inherits(ue, Error, {
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
const R1 = ue.prototype,
  D1 = {};
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
  D1[e] = { value: e };
});
Object.defineProperties(ue, D1);
Object.defineProperty(R1, "isAxiosError", { value: !0 });
ue.from = (e, t, n, r, o, s) => {
  const i = Object.create(R1);
  return (
    M.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    ue.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const HT = null;
function md(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function P1(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function dg(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = P1(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function UT(e) {
  return M.isArray(e) && !e.some(md);
}
const WT = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ac(e, t, n) {
  if (!M.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = M.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, b) {
        return !M.isUndefined(b[g]);
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
      throw new ue("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(p) || M.isTypedArray(p)
      ? a && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, g, b) {
    let w = p;
    if (p && !b && typeof p == "object") {
      if (M.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (M.isArray(p) && UT(p)) ||
        ((M.isFileList(p) || M.endsWith(g, "[]")) && (w = M.toArray(p)))
      )
        return (
          (g = P1(g)),
          w.forEach(function (v, S) {
            !(M.isUndefined(v) || v === null) &&
              t.append(
                i === !0 ? dg([g], S, s) : i === null ? g : g + "[]",
                c(v)
              );
          }),
          !1
        );
    }
    return md(p) ? !0 : (t.append(dg(b, g, s), c(p)), !1);
  }
  const d = [],
    f = Object.assign(WT, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: md,
    });
  function m(p, g) {
    if (!M.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(p),
        M.forEach(p, function (w, y) {
          (!(M.isUndefined(w) || w === null) &&
            o.call(t, w, M.isString(y) ? y.trim() : y, g, f)) === !0 &&
            m(w, g ? g.concat(y) : [y]);
        }),
        d.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function fg(e) {
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
function Fp(e, t) {
  (this._pairs = []), e && ac(e, this, t);
}
const N1 = Fp.prototype;
N1.append = function (t, n) {
  this._pairs.push([t, n]);
};
N1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, fg);
      }
    : fg;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function YT(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function T1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || YT,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = M.isURLSearchParams(t) ? t.toString() : new Fp(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class pg {
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
const j1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  qT = typeof URLSearchParams < "u" ? URLSearchParams : Fp,
  GT = typeof FormData < "u" ? FormData : null,
  KT = typeof Blob < "u" ? Blob : null,
  XT = {
    isBrowser: !0,
    classes: { URLSearchParams: qT, FormData: GT, Blob: KT },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Mp = typeof window < "u" && typeof document < "u",
  QT = ((e) => Mp && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  ZT =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  JT = (Mp && window.location.href) || "http://localhost",
  ej = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Mp,
        hasStandardBrowserEnv: QT,
        hasStandardBrowserWebWorkerEnv: ZT,
        origin: JT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  on = { ...ej, ...XT };
function tj(e, t) {
  return ac(
    e,
    new on.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return on.isNode && M.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function nj(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function rj(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function O1(e) {
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
          t(n, r, o[i], s) && M.isArray(o[i]) && (o[i] = rj(o[i])),
          !l)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const n = {};
    return (
      M.forEachEntry(e, (r, o) => {
        t(nj(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function oj(e, t, n) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ri = {
  transitional: j1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = M.isObject(t);
      if ((s && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
        return o ? JSON.stringify(O1(t)) : t;
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
          return tj(t, this.formSerializer).toString();
        if ((l = M.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return ac(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), oj(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ri.transitional,
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
              ? ue.from(l, ue.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: on.classes.FormData, Blob: on.classes.Blob },
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
  Ri.headers[e] = {};
});
const sj = M.toObjectSet([
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
  ij = (e) => {
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
              !(!n || (t[n] && sj[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  mg = Symbol("internals");
function Ps(e) {
  return e && String(e).trim().toLowerCase();
}
function bl(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(bl) : String(e);
}
function lj(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const aj = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function nu(e, t, n, r, o) {
  if (M.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!M.isString(t))) {
    if (M.isString(r)) return t.indexOf(r) !== -1;
    if (M.isRegExp(r)) return r.test(t);
  }
}
function cj(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function uj(e, t) {
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
      const u = Ps(a);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = M.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || (c === void 0 && o[d] !== !1)) &&
        (o[d || a] = bl(l));
    }
    const i = (l, a) => M.forEach(l, (c, u) => s(c, u, a));
    if (M.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (M.isString(t) && (t = t.trim()) && !aj(t)) i(ij(t), n);
    else if (M.isHeaders(t)) for (const [l, a] of t.entries()) s(a, l, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ps(t)), t)) {
      const r = M.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return lj(o);
        if (M.isFunction(n)) return n.call(this, o, r);
        if (M.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ps(t)), t)) {
      const r = M.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || nu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = Ps(i)), i)) {
        const l = M.findKey(r, i);
        l && (!n || nu(r, r[l], l, n)) && (delete r[l], (o = !0));
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
      (!t || nu(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
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
          (n[i] = bl(o)), delete n[s];
          return;
        }
        const l = t ? cj(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = bl(o)), (r[l] = !0);
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
    const r = (this[mg] = this[mg] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const l = Ps(i);
      r[l] || (uj(o, i), (r[l] = !0));
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
function ru(e, t) {
  const n = this || Ri,
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
function $1(e) {
  return !!(e && e.__CANCEL__);
}
function ps(e, t, n) {
  ue.call(this, e ?? "canceled", ue.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
M.inherits(ps, ue, { __CANCEL__: !0 });
function L1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ue(
          "Request failed with status code " + n.status,
          [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function dj(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function fj(e, t) {
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
function pj(e, t) {
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
const ra = (e, t, n = 3) => {
    let r = 0;
    const o = fj(50, 250);
    return pj((s) => {
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
  mj = on.hasStandardBrowserEnv
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
  hj = on.hasStandardBrowserEnv
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
function gj(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yj(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function A1(e, t) {
  return e && !gj(t) ? yj(e, t) : t;
}
const hg = (e) => (e instanceof Rt ? { ...e } : e);
function Zr(e, t) {
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
    headers: (c, u) => o(hg(c), hg(u), !0),
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
const F1 = (e) => {
    const t = Zr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: s,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = Rt.from(i)),
      (t.url = T1(A1(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
      if (on.hasStandardBrowserEnv || on.hasStandardBrowserWebWorkerEnv)
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
      on.hasStandardBrowserEnv &&
      (r && M.isFunction(r) && (r = r(t)), r || (r !== !1 && mj(t.url)))
    ) {
      const c = o && s && hj.read(s);
      c && i.set(o, c);
    }
    return t;
  },
  vj = typeof XMLHttpRequest < "u",
  wj =
    vj &&
    function (e) {
      return new Promise(function (n, r) {
        const o = F1(e);
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
            g = {
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
          L1(
            function (w) {
              n(w), c();
            },
            function (w) {
              r(w), c();
            },
            g
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
              (r(new ue("Request aborted", ue.ECONNABORTED, o, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new ue("Network Error", ue.ERR_NETWORK, o, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let p = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = o.transitional || j1;
            o.timeoutErrorMessage && (p = o.timeoutErrorMessage),
              r(
                new ue(
                  p,
                  g.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
                  o,
                  u
                )
              ),
              (u = null);
          }),
          s === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            M.forEach(i.toJSON(), function (p, g) {
              u.setRequestHeader(g, p);
            }),
          M.isUndefined(o.withCredentials) ||
            (u.withCredentials = !!o.withCredentials),
          l && l !== "json" && (u.responseType = o.responseType),
          typeof o.onDownloadProgress == "function" &&
            u.addEventListener("progress", ra(o.onDownloadProgress, !0)),
          typeof o.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", ra(o.onUploadProgress)),
          (o.cancelToken || o.signal) &&
            ((a = (m) => {
              u &&
                (r(!m || m.type ? new ps(null, e, u) : m),
                u.abort(),
                (u = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(a),
            o.signal &&
              (o.signal.aborted ? a() : o.signal.addEventListener("abort", a)));
        const f = dj(o.url);
        if (f && on.protocols.indexOf(f) === -1) {
          r(new ue("Unsupported protocol " + f + ":", ue.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(s || null);
      });
    },
  xj = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (a) {
      if (!r) {
        (r = !0), i();
        const c = a instanceof Error ? a : this.reason;
        n.abort(
          c instanceof ue ? c : new ps(c instanceof Error ? c.message : c)
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        o(new ue(`timeout ${t} of ms exceeded`, ue.ETIMEDOUT));
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
  bj = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  Sj = async function* (e, t, n) {
    for await (const r of e)
      yield* bj(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  gg = (e, t, n, r, o) => {
    const s = Sj(e, t, o);
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
  yg = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  cc =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  M1 = cc && typeof ReadableStream == "function",
  hd =
    cc &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Cj =
    M1 &&
    (() => {
      let e = !1;
      const t = new Request(on.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  vg = 64 * 1024,
  gd =
    M1 &&
    !!(() => {
      try {
        return M.isReadableStream(new Response("").body);
      } catch {}
    })(),
  oa = { stream: gd && ((e) => e.body) };
cc &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !oa[t] &&
        (oa[t] = M.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ue(
                `Response type '${t}' is not supported`,
                ue.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Ej = async (e) => {
    if (e == null) return 0;
    if (M.isBlob(e)) return e.size;
    if (M.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (M.isArrayBufferView(e)) return e.byteLength;
    if ((M.isURLSearchParams(e) && (e = e + ""), M.isString(e)))
      return (await hd(e)).byteLength;
  },
  _j = async (e, t) => {
    const n = M.toFiniteNumber(e.getContentLength());
    return n ?? Ej(t);
  },
  kj =
    cc &&
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
      } = F1(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [m, p] = o || s || i ? xj([o, s], i) : [],
        g,
        b;
      const w = () => {
        !g &&
          setTimeout(() => {
            m && m.unsubscribe();
          }),
          (g = !0);
      };
      let y;
      try {
        if (
          a &&
          Cj &&
          n !== "get" &&
          n !== "head" &&
          (y = await _j(u, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            k;
          M.isFormData(r) &&
            (k = E.headers.get("content-type")) &&
            u.setContentType(k),
            E.body && (r = gg(E.body, vg, yg(y, ra(a)), null, hd));
        }
        M.isString(d) || (d = d ? "cors" : "omit"),
          (b = new Request(t, {
            ...f,
            signal: m,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let v = await fetch(b);
        const S = gd && (c === "stream" || c === "response");
        if (gd && (l || S)) {
          const E = {};
          ["status", "statusText", "headers"].forEach((D) => {
            E[D] = v[D];
          });
          const k = M.toFiniteNumber(v.headers.get("content-length"));
          v = new Response(
            gg(v.body, vg, l && yg(k, ra(l, !0)), S && w, hd),
            E
          );
        }
        c = c || "text";
        let C = await oa[M.findKey(oa, c) || "text"](v, e);
        return (
          !S && w(),
          p && p(),
          await new Promise((E, k) => {
            L1(E, k, {
              data: C,
              headers: Rt.from(v.headers),
              status: v.status,
              statusText: v.statusText,
              config: e,
              request: b,
            });
          })
        );
      } catch (v) {
        throw (
          (w(),
          v && v.name === "TypeError" && /fetch/i.test(v.message)
            ? Object.assign(new ue("Network Error", ue.ERR_NETWORK, e, b), {
                cause: v.cause || v,
              })
            : ue.from(v, v && v.code, e, b))
        );
      }
    }),
  yd = { http: HT, xhr: wj, fetch: kj };
M.forEach(yd, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const wg = (e) => `- ${e}`,
  Rj = (e) => M.isFunction(e) || e === null || e === !1,
  I1 = {
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
          !Rj(n) && ((r = yd[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ue(`Unknown adapter '${i}'`);
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
              s.map(wg).join(`
`)
            : " " + wg(s[0])
          : "as no adapter specified";
        throw new ue(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: yd,
  };
function ou(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ps(null, e);
}
function xg(e) {
  return (
    ou(e),
    (e.headers = Rt.from(e.headers)),
    (e.data = ru.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    I1.getAdapter(e.adapter || Ri.adapter)(e).then(
      function (r) {
        return (
          ou(e),
          (r.data = ru.call(e, e.transformResponse, r)),
          (r.headers = Rt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          $1(r) ||
            (ou(e),
            r &&
              r.response &&
              ((r.response.data = ru.call(e, e.transformResponse, r.response)),
              (r.response.headers = Rt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const z1 = "1.7.2",
  Ip = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ip[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const bg = {};
Ip.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      z1 +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, l) => {
    if (t === !1)
      throw new ue(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ue.ERR_DEPRECATED
      );
    return (
      n &&
        !bg[i] &&
        ((bg[i] = !0),
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
function Dj(e, t, n) {
  if (typeof e != "object")
    throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const l = e[s],
        a = l === void 0 || i(l, s, e);
      if (a !== !0)
        throw new ue("option " + s + " must be " + a, ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ue("Unknown option " + s, ue.ERR_BAD_OPTION);
  }
}
const vd = { assertOptions: Dj, validators: Ip },
  Zn = vd.validators;
class Vr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new pg(), response: new pg() });
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
      (n = Zr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      vd.assertOptions(
        r,
        {
          silentJSONParsing: Zn.transitional(Zn.boolean),
          forcedJSONParsing: Zn.transitional(Zn.boolean),
          clarifyTimeoutError: Zn.transitional(Zn.boolean),
        },
        !1
      ),
      o != null &&
        (M.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : vd.assertOptions(
              o,
              { encode: Zn.function, serialize: Zn.function },
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
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), l.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u,
      d = 0,
      f;
    if (!a) {
      const p = [xg.bind(this), void 0];
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
        g = l[d++];
      try {
        m = p(m);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      u = xg.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Zr(this.defaults, t);
    const n = A1(t.baseURL, t.url);
    return T1(n, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function (t) {
  Vr.prototype[t] = function (n, r) {
    return this.request(
      Zr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
M.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, l) {
      return this.request(
        Zr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (Vr.prototype[t] = n()), (Vr.prototype[t + "Form"] = n(!0));
});
class zp {
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
        r.reason || ((r.reason = new ps(s, i, l)), n(r.reason));
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
      token: new zp(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function Pj(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Nj(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const wd = {
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
Object.entries(wd).forEach(([e, t]) => {
  wd[t] = e;
});
function B1(e) {
  const t = new Vr(e),
    n = w1(Vr.prototype.request, t);
  return (
    M.extend(n, Vr.prototype, t, { allOwnKeys: !0 }),
    M.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return B1(Zr(e, o));
    }),
    n
  );
}
const $e = B1(Ri);
$e.Axios = Vr;
$e.CanceledError = ps;
$e.CancelToken = zp;
$e.isCancel = $1;
$e.VERSION = z1;
$e.toFormData = ac;
$e.AxiosError = ue;
$e.Cancel = $e.CanceledError;
$e.all = function (t) {
  return Promise.all(t);
};
$e.spread = Pj;
$e.isAxiosError = Nj;
$e.mergeConfig = Zr;
$e.AxiosHeaders = Rt;
$e.formToJSON = (e) => O1(M.isHTMLForm(e) ? new FormData(e) : e);
$e.getAdapter = I1.getAdapter;
$e.HttpStatusCode = wd;
$e.default = $e;
const Tj = async (e, t, n) => {
    let r = {};
    const o = { target: e, embargo: t, data: { requirements: n } };
    let s = "";
    window.props !== void 0 && (s = window.props.token || "no-token-found");
    const i = Ep,
      l = {
        headers: {
          Authorization: "Token " + s,
          "Content-Type": "application/json",
        },
      };
    return (
      await $e
        .post(i, o, l)
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
  jj = (e, t, n, r, o, s) => {
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
      a = `${Ep}${e}${pN}`;
    return $e
      .post(a, i, l)
      .then((c) => (console.log("RESPONSE: ", c), c.data))
      .catch((c) => {
        throw (console.log("Error: ", c), new Error(c.message));
      })
      .finally(() => {
        console.log("Upload finished");
      });
  };
function Oj(e) {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(e);
}
function $j(e, t) {
  let n = t.form_fields.find(
      ({ field_type: s }) => s.type === "data-url-field"
    ),
    r = n.field_id,
    o = e[r];
  return n.mandatory === "true" || (o !== void 0 && o !== "")
    ? { [r]: Oj(o) ? null : "Please enter a valid URL" }
    : null;
}
const V1 = (e) => {
  const {
      profileData: t,
      submissionData: n,
      isLoading: r,
      profileError: o,
      SubmissionError: s,
    } = e,
    [i, l] = x.useState(!1),
    [a, c] = x.useState([]),
    [u, d] = x.useState(!1),
    [f, m] = x.useState(-1),
    p = gP({
      mode: "uncontrolled",
      name: "profile-form",
      validateInputOnBlur: !0,
      initialValues: { files: [] },
      validate: (y) => {
        if (
          t.form_fields.map((S) => S.field_type.type).includes("data-url-field")
        )
          return $j(y, t);
      },
    }),
    g = (y, v, S) => {
      p.setFieldValue("files", y), c(y), d(v), m(S);
    },
    b = async (y, v, S) => {
      const E = S;
      let k = "";
      window.props !== void 0 && (k = window.props.token || "no-token-found");
      try {
        await jj(v, y, !1, E, k, (D) => {
          console.log(`Upload progress: ${D}%`);
        }),
          console.log("Upload complete");
      } catch (D) {
        console.error("Upload error: ", D);
      }
    },
    w = (y) => {
      !p.isValid ||
        u ||
        (l(!0),
        Tj(t.target, localStorage.getItem("embargo"), y)
          .then((v) => {
            if (v && v.broker_submission_id) {
              const S = v.broker_submission_id,
                C = a.map((E, k) => b(E, S, k === f));
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
          .catch((v) => {
            console.error("Submission error: ", v);
          })
          .finally(() => {
            l(!1);
          }));
    };
  return (
    console.log("FORM FIELDS ", t.form_fields),
    h.jsxs("form", {
      onSubmit: p.onSubmit(w),
      className: "submission-form container",
      children: [
        h.jsxs("p", { children: ["processing: ", "" + i] }),
        h.jsxs("div", {
          className: "row",
          children: [
            h.jsx("div", {
              className: "col-md-9",
              children: t.form_fields
                .filter((y) => y.position == "main")
                .map((y, v) =>
                  h.jsx(wl, { field: y, form: p, onFilesChange: g }, v)
                ),
            }),
            h.jsx("div", {
              className: "col-md-3",
              children: t.form_fields
                .filter((y) => y.position == "sidebar")
                .map((y, v) =>
                  h.jsx(wl, { field: y, form: p, onFilesChange: g }, v)
                ),
            }),
            h.jsx("div", {
              className: "col-md-3",
              children: t.form_fields
                .filter((y) => y.position == "sidebar")
                .map((y, v) => h.jsx(wl, { field: y, form: p }, v)),
            }),
          ],
        }),
        h.jsx("div", {
          className: "row",
          children: h.jsx(or, {
            mt: "md",
            className: "mt-5 col-md-9",
            children: h.jsxs(en, {
              className: "submission-button",
              type: "submit",
              children: [
                h.jsx("i", { className: "fa fa-play mr-3" }),
                " Create Submission",
              ],
            }),
          }),
        }),
      ],
    })
  );
};
V1.propTypes = { profileData: U.object.isRequired };
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sa() {
  return (
    (sa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sa.apply(this, arguments)
  );
}
var lr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lr || (lr = {}));
const Sg = "popstate";
function Lj(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return xd(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : U1(o);
  }
  return Fj(t, n, null, e);
}
function Pt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function H1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Aj() {
  return Math.random().toString(36).substr(2, 8);
}
function Cg(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function xd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    sa(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? uc(t) : t,
      { state: n, key: (t && t.key) || r || Aj() }
    )
  );
}
function U1(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function uc(e) {
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
function Fj(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = lr.Pop,
    a = null,
    c = u();
  c == null && ((c = 0), i.replaceState(sa({}, i.state, { idx: c }), ""));
  function u() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    l = lr.Pop;
    let b = u(),
      w = b == null ? null : b - c;
    (c = b), a && a({ action: l, location: g.location, delta: w });
  }
  function f(b, w) {
    l = lr.Push;
    let y = xd(g.location, b, w);
    c = u() + 1;
    let v = Cg(y, c),
      S = g.createHref(y);
    try {
      i.pushState(v, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    s && a && a({ action: l, location: g.location, delta: 1 });
  }
  function m(b, w) {
    l = lr.Replace;
    let y = xd(g.location, b, w);
    c = u();
    let v = Cg(y, c),
      S = g.createHref(y);
    i.replaceState(v, "", S),
      s && a && a({ action: l, location: g.location, delta: 0 });
  }
  function p(b) {
    let w = o.location.origin !== "null" ? o.location.origin : o.location.href,
      y = typeof b == "string" ? b : U1(b);
    return (
      (y = y.replace(/ $/, "%20")),
      Pt(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, w)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(b) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Sg, d),
        (a = b),
        () => {
          o.removeEventListener(Sg, d), (a = null);
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: p,
    encodeLocation(b) {
      let w = p(b);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: f,
    replace: m,
    go(b) {
      return i.go(b);
    },
  };
  return g;
}
var Eg;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Eg || (Eg = {}));
function Mj(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? uc(t) : t,
    o = q1(r.pathname || "/", n);
  if (o == null) return null;
  let s = W1(e);
  Ij(s);
  let i = null;
  for (let l = 0; i == null && l < s.length; ++l) {
    let a = Qj(o);
    i = Gj(s[l], a);
  }
  return i;
}
function W1(e, t, n, r) {
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
    let c = Mo([r, a.relativePath]),
      u = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (Pt(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      W1(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: Yj(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of Y1(s.path)) o(s, i, a);
    }),
    t
  );
}
function Y1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = Y1(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Ij(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : qj(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const zj = /^:[\w-]+$/,
  Bj = 3,
  Vj = 2,
  Hj = 1,
  Uj = 10,
  Wj = -2,
  _g = (e) => e === "*";
function Yj(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(_g) && (r += Wj),
    t && (r += Vj),
    n
      .filter((o) => !_g(o))
      .reduce((o, s) => o + (zj.test(s) ? Bj : s === "" ? Hj : Uj), r)
  );
}
function qj(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Gj(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    s = [];
  for (let i = 0; i < n.length; ++i) {
    let l = n[i],
      a = i === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      u = Kj(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        c
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = l.route;
    s.push({
      params: r,
      pathname: Mo([o, u.pathname]),
      pathnameBase: Zj(Mo([o, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (o = Mo([o, u.pathnameBase]));
  }
  return s;
}
function Kj(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Xj(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: f, isOptional: m } = u;
      if (f === "*") {
        let g = l[d] || "";
        i = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
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
function Xj(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    H1(
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
function Qj(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      H1(
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
function q1(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Mo = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Zj = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Jj(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const G1 = ["post", "put", "patch", "delete"];
new Set(G1);
const eO = ["get", ...G1];
new Set(eO);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ia() {
  return (
    (ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ia.apply(this, arguments)
  );
}
const tO = x.createContext(null),
  nO = x.createContext(null),
  K1 = x.createContext(null),
  dc = x.createContext(null),
  Di = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  X1 = x.createContext(null);
function Bp() {
  return x.useContext(dc) != null;
}
function rO() {
  return Bp() || Pt(!1), x.useContext(dc).location;
}
function oO() {
  let { matches: e } = x.useContext(Di),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function sO(e, t) {
  return iO(e, t);
}
function iO(e, t, n, r) {
  Bp() || Pt(!1);
  let { navigator: o } = x.useContext(K1),
    { matches: s } = x.useContext(Di),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let c = rO(),
    u;
  if (t) {
    var d;
    let b = typeof t == "string" ? uc(t) : t;
    a === "/" || ((d = b.pathname) != null && d.startsWith(a)) || Pt(!1),
      (u = b);
  } else u = c;
  let f = u.pathname || "/",
    m = f;
  if (a !== "/") {
    let b = a.replace(/^\//, "").split("/");
    m = "/" + f.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let p = Mj(e, { pathname: m }),
    g = dO(
      p &&
        p.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, l, b.params),
            pathname: Mo([
              a,
              o.encodeLocation
                ? o.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? a
                : Mo([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && g
    ? x.createElement(
        dc.Provider,
        {
          value: {
            location: ia(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: lr.Pop,
          },
        },
        g
      )
    : g;
}
function lO() {
  let e = hO(),
    t = Jj(e)
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
const aO = x.createElement(lO, null);
class cO extends x.Component {
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
          Di.Provider,
          { value: this.props.routeContext },
          x.createElement(X1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function uO(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(tO);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Di.Provider, { value: t }, r)
  );
}
function dO(e, t, n, r) {
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
      g = null,
      b = null;
    n &&
      ((m = l && d.route.id ? l[d.route.id] : void 0),
      (g = d.route.errorElement || aO),
      a &&
        (c < 0 && f === 0
          ? ((p = !0), (b = null))
          : c === f &&
            ((p = !0), (b = d.route.hydrateFallbackElement || null))));
    let w = t.concat(i.slice(0, f + 1)),
      y = () => {
        let v;
        return (
          m
            ? (v = g)
            : p
            ? (v = b)
            : d.route.Component
            ? (v = x.createElement(d.route.Component, null))
            : d.route.element
            ? (v = d.route.element)
            : (v = u),
          x.createElement(uO, {
            match: d,
            routeContext: { outlet: u, matches: w, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? x.createElement(cO, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: m,
          children: y(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var bd = (function (e) {
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
})(bd || {});
function fO(e) {
  let t = x.useContext(nO);
  return t || Pt(!1), t;
}
function pO(e) {
  let t = x.useContext(Di);
  return t || Pt(!1), t;
}
function mO(e) {
  let t = pO(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Pt(!1), n.route.id;
}
function hO() {
  var e;
  let t = x.useContext(X1),
    n = fO(bd.UseRouteError),
    r = mO(bd.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Sd(e) {
  Pt(!1);
}
function gO(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = lr.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  Bp() && Pt(!1);
  let a = t.replace(/^\/*/, "/"),
    c = x.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: ia({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = uc(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: m = null,
      key: p = "default",
    } = r,
    g = x.useMemo(() => {
      let b = q1(u, a);
      return b == null
        ? null
        : {
            location: { pathname: b, search: d, hash: f, state: m, key: p },
            navigationType: o,
          };
    }, [a, u, d, f, m, p, o]);
  return g == null
    ? null
    : x.createElement(
        K1.Provider,
        { value: c },
        x.createElement(dc.Provider, { children: n, value: g })
      );
}
function yO(e) {
  let { children: t, location: n } = e;
  return sO(Cd(t), n);
}
new Promise(() => {});
function Cd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, Cd(r.props.children, s));
        return;
      }
      r.type !== Sd && Pt(!1), !r.props.index || !r.props.children || Pt(!1);
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
      r.props.children && (i.children = Cd(r.props.children, s)), n.push(i);
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
 */ const vO = "6";
try {
  window.__reactRouterVersion = vO;
} catch {}
const wO = "startTransition",
  kg = zg[wO];
function xO(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = x.useRef();
  s.current == null && (s.current = Lj({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = x.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    u = x.useCallback(
      (d) => {
        c && kg ? kg(() => a(d)) : a(d);
      },
      [a, c]
    );
  return (
    x.useLayoutEffect(() => i.listen(u), [i, u]),
    x.createElement(gO, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
var Rg;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Rg || (Rg = {}));
var Dg;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Dg || (Dg = {}));
const bO = (e, t) => {
    const [n, r] = x.useState([]),
      [o, s] = x.useState([]),
      [i, l] = x.useState(!1),
      [a, c] = x.useState(!0),
      [u, d] = x.useState(null),
      [f, m] = x.useState(null);
    let p = "";
    window.props !== void 0 && (p = window.props.token || "no-token-found"),
      t === void 0 && localStorage.setItem("submission", JSON.stringify({}));
    const g = {
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
              await $e
                .get(dN + e)
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
              await $e
                .get(Ep + t + "/", g)
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
  SO = GD(V1),
  CO = KD(SO),
  Pg = () => {
    const { brokerSubmissionId: e } = oO(),
      t = localStorage.getItem("profileName") || uN,
      { data1: n, data2: r, isLoading: o, error1: s, error2: i } = bO(t, e);
    return h.jsxs("div", {
      children: [
        h.jsx("h1", { children: "ProfileForm" }),
        h.jsx(CO, {
          profileData: n,
          submissionData: r,
          isLoading: o,
          profileError: s,
          submissionError: i,
        }),
      ],
    });
  };
function EO() {
  return h.jsx(f0, {
    children: h.jsxs(yO, {
      children: [
        h.jsx(Sd, { path: "/", element: h.jsx(Pg, {}) }),
        h.jsx(Sd, { path: "/:brokerSubmissionId", element: h.jsx(Pg, {}) }),
      ],
    }),
  });
}
let Vp = "generic";
window.props !== void 0 && (Vp = window.props.profile_name || "generic");
localStorage.setItem("profileName", Vp);
const _O = "/profile/profile/" + Vp + "/ui/";
su.createRoot(document.getElementById("root")).render(
  h.jsx(aa.StrictMode, {
    children: h.jsx(xO, { basename: _O, children: h.jsx(EO, {}) }),
  })
);
