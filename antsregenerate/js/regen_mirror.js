/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
	var e = {};

	function n(r) {
		if (e[r]) return e[r].exports;
		var i = e[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
	n.m = t, n.c = e, n.d = function (t, e, r) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: r
		})
	}, n.r = function (t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function (t, e) {
		if (1 & e && (t = n(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var i in t) n.d(r, i, function (e) {
				return t[e]
			}.bind(null, i));
		return r
	}, n.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t.default
		} : function () {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 101)
}([function (t, e) {
	t.exports = function (t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
}, function (t, e) {
	var n = Array.isArray;
	t.exports = n
}, function (t, e, n) {
	"use strict";
	var r = {},
		i = {},
		o = [],
		a = window.Webflow || [],
		u = window.jQuery,
		c = u(window),
		s = u(document),
		l = u.isFunction,
		f = r._ = n(104),
		d = r.tram = n(54) && u.tram,
		p = !1,
		v = !1;

	function h(t) {
		r.env() && (l(t.design) && c.on("__wf_design", t.design), l(t.preview) && c.on("__wf_preview", t.preview)), l(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && l(t.ready) && function (t) {
			if (p) return void t.ready();
			if (f.contains(o, t.ready)) return;
			o.push(t.ready)
		}(t)
	}

	function E(t) {
		l(t.design) && c.off("__wf_design", t.design), l(t.preview) && c.off("__wf_preview", t.preview), l(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && l(t.ready) && function (t) {
			o = f.filter(o, function (e) {
				return e !== t.ready
			})
		}(t)
	}
	d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
		i[t] && E(i[t]);
		var r = i[t] = e(u, f, n) || {};
		return h(r), r
	}, r.require = function (t) {
		return i[t]
	}, r.push = function (t) {
		p ? l(t) && t() : a.push(t)
	}, r.env = function (t) {
		var e = window.__wf_design,
			n = void 0 !== e;
		return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
	};
	var g, _ = navigator.userAgent.toLowerCase(),
		m = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
		I = r.env.chrome = /chrome/.test(_) && /Google/.test(navigator.vendor) && parseInt(_.match(/chrome\/(\d+)\./)[1], 10),
		y = r.env.ios = /(ipod|iphone|ipad)/.test(_);
	r.env.safari = /safari/.test(_) && !I && !y, m && s.on("touchstart mousedown", function (t) {
		g = t.target
	}), r.validClick = m ? function (t) {
		return t === g || u.contains(t, g)
	} : function () {
		return !0
	};
	var T, O = "resize.webflow orientationchange.webflow load.webflow";

	function w(t, e) {
		var n = [],
			r = {};
		return r.up = f.throttle(function (t) {
			f.each(n, function (e) {
				e(t)
			})
		}), t && e && t.on(e, r.up), r.on = function (t) {
			"function" == typeof t && (f.contains(n, t) || n.push(t))
		}, r.off = function (t) {
			n = arguments.length ? f.filter(n, function (e) {
				return e !== t
			}) : []
		}, r
	}

	function A(t) {
		l(t) && t()
	}

	function b() {
		T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
	}
	r.resize = w(c, O), r.scroll = w(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = w(), r.location = function (t) {
		window.location = t
	}, r.env() && (r.location = function () {}), r.ready = function () {
		p = !0, v ? (v = !1, f.each(i, h)) : f.each(o, A), f.each(a, A), r.resize.up()
	}, r.load = function (t) {
		T.then(t)
	}, r.destroy = function (t) {
		t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), f.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && b()
	}, u(r.ready), b(), t.exports = window.Webflow = r
}, function (t, e, n) {
	"use strict";
	var r = n(17);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2Interactions = e.IX2Events = e.IX2ElementsReducer = e.IX2EngineConstants = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
	var i = r(n(31));
	e.IX2BrowserSupport = i;
	var o = r(n(84));
	e.IX2Easings = o;
	var a = r(n(86));
	e.IX2EasingUtils = a;
	var u = r(n(88));
	e.IX2EngineActionTypes = u;
	var c = r(n(89));
	e.IX2EngineEventTypes = c;
	var s = r(n(48));
	e.IX2EngineItemTypes = s;
	var l = r(n(49));
	e.IX2EngineConstants = l;
	var f = r(n(190));
	e.IX2ElementsReducer = f;
	var d = r(n(191));
	e.IX2Events = d;
	var p = r(n(192));
	e.IX2Interactions = p;
	var v = r(n(90));
	e.IX2VanillaPlugins = v;
	var h = r(n(194));
	e.IX2VanillaUtils = h
}, function (t, e, n) {
	var r = n(66),
		i = "object" == typeof self && self && self.Object === Object && self,
		o = r || i || Function("return this")();
	t.exports = o
}, function (t, e) {
	t.exports = function (t) {
		var e = typeof t;
		return null != t && ("object" == e || "function" == e)
	}
}, function (t, e, n) {
	var r = n(122),
		i = n(176),
		o = n(45),
		a = n(1),
		u = n(183);
	t.exports = function (t) {
		return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
	}
}, function (t, e, n) {
	var r = n(134),
		i = n(139);
	t.exports = function (t, e) {
		var n = i(t, e);
		return r(n) ? n : void 0
	}
}, function (t, e) {
	t.exports = function (t) {
		return null != t && "object" == typeof t
	}
}, function (t, e, n) {
	var r = n(13),
		i = n(135),
		o = n(136),
		a = "[object Null]",
		u = "[object Undefined]",
		c = r ? r.toStringTag : void 0;
	t.exports = function (t) {
		return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
	}
}, function (t, e, n) {
	var r = n(65),
		i = n(39);
	t.exports = function (t) {
		return null != t && i(t.length) && !r(t)
	}
}, function (t, e) {
	function n(t) {
		return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
			return typeof t
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function r(e) {
		return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function (t) {
			return n(t)
		} : t.exports = r = function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
		}, r(e)
	}
	t.exports = r
}, function (t, e, n) {
	"use strict";
	var r = n(106);

	function i(t, e) {
		var n = document.createEvent("CustomEvent");
		n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
	}
	var o = window.jQuery,
		a = {},
		u = {
			reset: function (t, e) {
				r.triggers.reset(t, e)
			},
			intro: function (t, e) {
				r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
			},
			outro: function (t, e) {
				r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
			}
		};
	a.triggers = {}, a.types = {
		INTRO: "w-ix-intro.w-ix",
		OUTRO: "w-ix-outro.w-ix"
	}, o.extend(a.triggers, u), t.exports = a
}, function (t, e, n) {
	var r = n(4).Symbol;
	t.exports = r
}, function (t, e, n) {
	var r = n(26),
		i = 1 / 0;
	t.exports = function (t) {
		if ("string" == typeof t || r(t)) return t;
		var e = t + "";
		return "0" == e && 1 / t == -i ? "-0" : e
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
		return typeof t
	} : function (t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	e.clone = c, e.addLast = f, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = g, e.getIn = _, e.set = m, e.setIn = I, e.update = y, e.updateIn = T, e.merge = O, e.mergeDeep = w, e.mergeIn = A, e.omit = b, e.addDefaults = S;
	/*!
	 * Timm
	 *
	 * Immutability helpers with fast reads and acceptable writes.
	 *
	 * @copyright Guillermo Grau Panea 2016
	 * @license MIT
	 */
	var i = "INVALID_ARGS";

	function o(t) {
		throw new Error(t)
	}

	function a(t) {
		var e = Object.keys(t);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
	}
	var u = {}.hasOwnProperty;

	function c(t) {
		if (Array.isArray(t)) return t.slice();
		for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
			var i = e[r];
			n[i] = t[i]
		}
		return n
	}

	function s(t, e, n) {
		var r = n;
		null == r && o(i);
		for (var u = !1, f = arguments.length, d = Array(f > 3 ? f - 3 : 0), p = 3; p < f; p++) d[p - 3] = arguments[p];
		for (var v = 0; v < d.length; v++) {
			var h = d[v];
			if (null != h) {
				var E = a(h);
				if (E.length)
					for (var g = 0; g <= E.length; g++) {
						var _ = E[g];
						if (!t || void 0 === r[_]) {
							var m = h[_];
							e && l(r[_]) && l(m) && (m = s(t, e, r[_], m)), void 0 !== m && m !== r[_] && (u || (u = !0, r = c(r)), r[_] = m)
						}
					}
			}
		}
		return r
	}

	function l(t) {
		var e = void 0 === t ? "undefined" : r(t);
		return null != t && ("object" === e || "function" === e)
	}

	function f(t, e) {
		return Array.isArray(e) ? t.concat(e) : t.concat([e])
	}

	function d(t, e) {
		return Array.isArray(e) ? e.concat(t) : [e].concat(t)
	}

	function p(t) {
		return t.length ? t.slice(0, t.length - 1) : t
	}

	function v(t) {
		return t.length ? t.slice(1) : t
	}

	function h(t, e, n) {
		return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
	}

	function E(t, e) {
		return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
	}

	function g(t, e, n) {
		if (t[e] === n) return t;
		for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
		return i[e] = n, i
	}

	function _(t, e) {
		if (!Array.isArray(e) && o(i), null != t) {
			for (var n = t, r = 0; r < e.length; r++) {
				var a = e[r];
				if (void 0 === (n = null != n ? n[a] : void 0)) return n
			}
			return n
		}
	}

	function m(t, e, n) {
		var r = null == t ? "number" == typeof e ? [] : {} : t;
		if (r[e] === n) return r;
		var i = c(r);
		return i[e] = n, i
	}

	function I(t, e, n) {
		return e.length ? function t(e, n, r, i) {
			var o = void 0,
				a = n[i];
			o = i === n.length - 1 ? r : t(l(e) && l(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
			return m(e, a, o)
		}(t, e, n, 0) : n
	}

	function y(t, e, n) {
		return m(t, e, n(null == t ? void 0 : t[e]))
	}

	function T(t, e, n) {
		return I(t, e, n(_(t, e)))
	}

	function O(t, e, n, r, i, o) {
		for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
		return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
	}

	function w(t, e, n, r, i, o) {
		for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
		return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
	}

	function A(t, e, n, r, i, o, a) {
		var u = _(t, e);
		null == u && (u = {});
		for (var c = arguments.length, l = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++) l[f - 7] = arguments[f];
		return I(t, e, l.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(l)) : s(!1, !1, u, n, r, i, o, a))
	}

	function b(t, e) {
		for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
			if (u.call(t, n[i])) {
				r = !0;
				break
			}
		if (!r) return t;
		for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
			var l = c[s];
			n.indexOf(l) >= 0 || (o[l] = t[l])
		}
		return o
	}

	function S(t, e, n, r, i, o) {
		for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
		return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
	}
	var R = {
		clone: c,
		addLast: f,
		addFirst: d,
		removeLast: p,
		removeFirst: v,
		insert: h,
		removeAt: E,
		replaceAt: g,
		getIn: _,
		set: m,
		setIn: I,
		update: y,
		updateIn: T,
		merge: O,
		mergeDeep: w,
		mergeIn: A,
		omit: b,
		addDefaults: S
	};
	e.default = R
}, function (t, e) {
	t.exports = function (t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
}, function (t, e) {
	t.exports = function (t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t)
			for (var n in t)
				if (Object.prototype.hasOwnProperty.call(t, n)) {
					var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
					r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
				}
		return e.default = t, e
	}
}, function (t, e, n) {
	var r = n(124),
		i = n(125),
		o = n(126),
		a = n(127),
		u = n(128);

	function c(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.clear(); ++e < n;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
	var r = n(32);
	t.exports = function (t, e) {
		for (var n = t.length; n--;)
			if (r(t[n][0], e)) return n;
		return -1
	}
}, function (t, e, n) {
	var r = n(7)(Object, "create");
	t.exports = r
}, function (t, e, n) {
	var r = n(148);
	t.exports = function (t, e) {
		var n = t.__data__;
		return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
	}
}, function (t, e, n) {
	var r = n(73),
		i = n(40),
		o = n(10);
	t.exports = function (t) {
		return o(t) ? r(t) : i(t)
	}
}, function (t, e, n) {
	var r = n(166),
		i = n(8),
		o = Object.prototype,
		a = o.hasOwnProperty,
		u = o.propertyIsEnumerable,
		c = r(function () {
			return arguments
		}()) ? r : function (t) {
			return i(t) && a.call(t, "callee") && !u.call(t, "callee")
		};
	t.exports = c
}, function (t, e, n) {
	var r = n(43);
	t.exports = function (t, e, n) {
		var i = null == t ? void 0 : r(t, e);
		return void 0 === i ? n : i
	}
}, function (t, e, n) {
	var r = n(1),
		i = n(44),
		o = n(177),
		a = n(79);
	t.exports = function (t, e) {
		return r(t) ? t : i(t, e) ? [t] : o(a(t))
	}
}, function (t, e, n) {
	var r = n(9),
		i = n(8),
		o = "[object Symbol]";
	t.exports = function (t) {
		return "symbol" == typeof t || i(t) && r(t) == o
	}
}, function (t, e, n) {
	var r = n(16);
	t.exports = function (t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {},
				i = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
				return Object.getOwnPropertyDescriptor(n, t).enumerable
			}))), i.forEach(function (e) {
				r(t, e, n[e])
			})
		}
		return t
	}
}, function (t, e, n) {
	"use strict";
	n.r(e), n.d(e, "ActionTypes", function () {
		return o
	}), n.d(e, "default", function () {
		return a
	});
	var r = n(56),
		i = n(117),
		o = {
			INIT: "@@redux/INIT"
		};

	function a(t, e, n) {
		var u;
		if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
			if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
			return n(a)(t, e)
		}
		if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
		var c = t,
			s = e,
			l = [],
			f = l,
			d = !1;

		function p() {
			f === l && (f = l.slice())
		}

		function v() {
			return s
		}

		function h(t) {
			if ("function" != typeof t) throw new Error("Expected listener to be a function.");
			var e = !0;
			return p(), f.push(t),
				function () {
					if (e) {
						e = !1, p();
						var n = f.indexOf(t);
						f.splice(n, 1)
					}
				}
		}

		function E(t) {
			if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
			if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
			if (d) throw new Error("Reducers may not dispatch actions.");
			try {
				d = !0, s = c(s, t)
			} finally {
				d = !1
			}
			for (var e = l = f, n = 0; n < e.length; n++) e[n]();
			return t
		}
		return E({
			type: o.INIT
		}), (u = {
			dispatch: E,
			subscribe: h,
			getState: v,
			replaceReducer: function (t) {
				if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
				c = t, E({
					type: o.INIT
				})
			}
		})[i.default] = function () {
			var t, e = h;
			return (t = {
				subscribe: function (t) {
					if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

					function n() {
						t.next && t.next(v())
					}
					return n(), {
						unsubscribe: e(n)
					}
				}
			})[i.default] = function () {
				return this
			}, t
		}, u
	}
}, function (t, e) {
	var n;
	n = function () {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch (t) {
		"object" == typeof window && (n = window)
	}
	t.exports = n
}, function (t, e, n) {
	"use strict";

	function r() {
		for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
		if (0 === e.length) return function (t) {
			return t
		};
		if (1 === e.length) return e[0];
		var r = e[e.length - 1],
			i = e.slice(0, -1);
		return function () {
			return i.reduceRight(function (t, e) {
				return e(t)
			}, r.apply(void 0, arguments))
		}
	}
	n.r(e), n.d(e, "default", function () {
		return r
	})
}, function (t, e, n) {
	"use strict";
	var r = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
	var i = r(n(62)),
		o = "undefined" != typeof window;
	e.IS_BROWSER_ENV = o;
	var a = function (t, e) {
		return o ? t() : e
	};
	e.withBrowser = a;
	var u = a(function () {
		return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
			return t in Element.prototype
		})
	});
	e.ELEMENT_MATCHES = u;
	var c = a(function () {
		var t = document.createElement("i"),
			e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
		try {
			for (var n = e.length, r = 0; r < n; r++) {
				var i = e[r];
				if (t.style.display = i, t.style.display === i) return i
			}
			return ""
		} catch (t) {
			return ""
		}
	}, "flex");
	e.FLEX_PREFIXED = c;
	var s = a(function () {
		var t = document.createElement("i");
		if (null == t.style.transform)
			for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
				var i = e[r] + "Transform";
				if (void 0 !== t.style[i]) return i
			}
		return "transform"
	}, "transform");
	e.TRANSFORM_PREFIXED = s;
	var l = s.split("transform")[0],
		f = l ? l + "TransformStyle" : "transformStyle";
	e.TRANSFORM_STYLE_PREFIXED = f
}, function (t, e) {
	t.exports = function (t, e) {
		return t === e || t != t && e != e
	}
}, function (t, e, n) {
	var r = n(7)(n(4), "Map");
	t.exports = r
}, function (t, e, n) {
	var r = n(140),
		i = n(147),
		o = n(149),
		a = n(150),
		u = n(151);

	function c(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.clear(); ++e < n;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e) {
	t.exports = function (t, e) {
		for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
		return t
	}
}, function (t, e, n) {
	(function (t) {
		var r = n(4),
			i = n(167),
			o = e && !e.nodeType && e,
			a = o && "object" == typeof t && t && !t.nodeType && t,
			u = a && a.exports === o ? r.Buffer : void 0,
			c = (u ? u.isBuffer : void 0) || i;
		t.exports = c
	}).call(this, n(74)(t))
}, function (t, e) {
	var n = 9007199254740991,
		r = /^(?:0|[1-9]\d*)$/;
	t.exports = function (t, e) {
		var i = typeof t;
		return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
	}
}, function (t, e, n) {
	var r = n(168),
		i = n(169),
		o = n(170),
		a = o && o.isTypedArray,
		u = a ? i(a) : r;
	t.exports = u
}, function (t, e) {
	var n = 9007199254740991;
	t.exports = function (t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
	}
}, function (t, e, n) {
	var r = n(41),
		i = n(171),
		o = Object.prototype.hasOwnProperty;
	t.exports = function (t) {
		if (!r(t)) return i(t);
		var e = [];
		for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
		return e
	}
}, function (t, e) {
	var n = Object.prototype;
	t.exports = function (t) {
		var e = t && t.constructor;
		return t === ("function" == typeof e && e.prototype || n)
	}
}, function (t, e, n) {
	var r = n(172),
		i = n(33),
		o = n(173),
		a = n(174),
		u = n(76),
		c = n(9),
		s = n(67),
		l = s(r),
		f = s(i),
		d = s(o),
		p = s(a),
		v = s(u),
		h = c;
	(r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function (t) {
		var e = c(t),
			n = "[object Object]" == e ? t.constructor : void 0,
			r = n ? s(n) : "";
		if (r) switch (r) {
			case l:
				return "[object DataView]";
			case f:
				return "[object Map]";
			case d:
				return "[object Promise]";
			case p:
				return "[object Set]";
			case v:
				return "[object WeakMap]"
		}
		return e
	}), t.exports = h
}, function (t, e, n) {
	var r = n(25),
		i = n(14);
	t.exports = function (t, e) {
		for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
		return n && n == o ? t : void 0
	}
}, function (t, e, n) {
	var r = n(1),
		i = n(26),
		o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		a = /^\w*$/;
	t.exports = function (t, e) {
		if (r(t)) return !1;
		var n = typeof t;
		return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
	}
}, function (t, e) {
	t.exports = function (t) {
		return t
	}
}, function (t, e, n) {
	var r = n(186);
	t.exports = function (t) {
		var e = r(t),
			n = e % 1;
		return e == e ? n ? e - n : e : 0
	}
}, function (t, e, n) {
	var r = n(5),
		i = n(26),
		o = NaN,
		a = /^\s+|\s+$/g,
		u = /^[-+]0x[0-9a-f]+$/i,
		c = /^0b[01]+$/i,
		s = /^0o[0-7]+$/i,
		l = parseInt;
	t.exports = function (t) {
		if ("number" == typeof t) return t;
		if (i(t)) return o;
		if (r(t)) {
			var e = "function" == typeof t.valueOf ? t.valueOf() : t;
			t = r(e) ? e + "" : e
		}
		if ("string" != typeof t) return 0 === t ? t : +t;
		t = t.replace(a, "");
		var n = c.test(t);
		return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.PLUGIN_LOTTIE = e.PLUGIN_LOTTIE_EFFECT = e.JELLO_EFFECT = e.RUBBER_BAND_EFFECT = e.FLIP_RIGHT_TO_LEFT_EFFECT = e.FLIP_LEFT_TO_RIGHT_EFFECT = e.BOUNCE_EFFECT = e.BLINK_EFFECT = e.DROP_EFFECT = e.PULSE_EFFECT = e.JIGGLE_EFFECT = e.FLIP_EFFECT = e.POP_EFFECT = e.FLY_EFFECT = e.SPIN_EFFECT = e.SHRINK_BIG_EFFECT = e.SHRINK_EFFECT = e.GROW_BIG_EFFECT = e.GROW_EFFECT = e.BLUR_EFFECT = e.SLIDE_EFFECT = e.FADE_EFFECT = e.OBJECT_VALUE = e.GENERAL_LOOP = e.GENERAL_STOP_ACTION = e.GENERAL_START_ACTION = e.GENERAL_CONTINUOUS_ACTION = e.GENERAL_DISPLAY = e.GENERAL_COMBO_CLASS = e.STYLE_TEXT_COLOR = e.STYLE_BORDER = e.STYLE_BACKGROUND_COLOR = e.STYLE_FILTER = e.STYLE_BOX_SHADOW = e.STYLE_SIZE = e.STYLE_OPACITY = e.TRANSFORM_SKEW = e.TRANSFORM_ROTATE = e.TRANSFORM_SCALE = e.TRANSFORM_MOVE = void 0;
	e.TRANSFORM_MOVE = "TRANSFORM_MOVE";
	e.TRANSFORM_SCALE = "TRANSFORM_SCALE";
	e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE";
	e.TRANSFORM_SKEW = "TRANSFORM_SKEW";
	e.STYLE_OPACITY = "STYLE_OPACITY";
	e.STYLE_SIZE = "STYLE_SIZE";
	e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW";
	e.STYLE_FILTER = "STYLE_FILTER";
	e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR";
	e.STYLE_BORDER = "STYLE_BORDER";
	e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR";
	e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS";
	e.GENERAL_DISPLAY = "GENERAL_DISPLAY";
	e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION";
	e.GENERAL_START_ACTION = "GENERAL_START_ACTION";
	e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION";
	e.GENERAL_LOOP = "GENERAL_LOOP";
	e.OBJECT_VALUE = "OBJECT_VALUE";
	e.FADE_EFFECT = "FADE_EFFECT";
	e.SLIDE_EFFECT = "SLIDE_EFFECT";
	e.BLUR_EFFECT = "BLUR_EFFECT";
	e.GROW_EFFECT = "GROW_EFFECT";
	e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT";
	e.SHRINK_EFFECT = "SHRINK_EFFECT";
	e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT";
	e.SPIN_EFFECT = "SPIN_EFFECT";
	e.FLY_EFFECT = "FLY_EFFECT";
	e.POP_EFFECT = "POP_EFFECT";
	e.FLIP_EFFECT = "FLIP_EFFECT";
	e.JIGGLE_EFFECT = "JIGGLE_EFFECT";
	e.PULSE_EFFECT = "PULSE_EFFECT";
	e.DROP_EFFECT = "DROP_EFFECT";
	e.BLINK_EFFECT = "BLINK_EFFECT";
	e.BOUNCE_EFFECT = "BOUNCE_EFFECT";
	e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT";
	e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT";
	e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT";
	e.JELLO_EFFECT = "JELLO_EFFECT";
	e.PLUGIN_LOTTIE_EFFECT = "PLUGIN_LOTTIE_EFFECT";
	e.PLUGIN_LOTTIE = "PLUGIN_LOTTIE"
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
	e.IX2_ID_DELIMITER = "|";
	e.WF_PAGE = "data-wf-page";
	e.W_MOD_JS = "w-mod-js";
	e.W_MOD_IX = "w-mod-ix";
	e.BOUNDARY_SELECTOR = ".w-dyn-item";
	e.CONFIG_X_VALUE = "xValue";
	e.CONFIG_Y_VALUE = "yValue";
	e.CONFIG_Z_VALUE = "zValue";
	e.CONFIG_VALUE = "value";
	e.CONFIG_X_UNIT = "xUnit";
	e.CONFIG_Y_UNIT = "yUnit";
	e.CONFIG_Z_UNIT = "zUnit";
	e.CONFIG_UNIT = "unit";
	e.TRANSFORM = "transform";
	e.TRANSLATE_X = "translateX";
	e.TRANSLATE_Y = "translateY";
	e.TRANSLATE_Z = "translateZ";
	e.TRANSLATE_3D = "translate3d";
	e.SCALE_X = "scaleX";
	e.SCALE_Y = "scaleY";
	e.SCALE_Z = "scaleZ";
	e.SCALE_3D = "scale3d";
	e.ROTATE_X = "rotateX";
	e.ROTATE_Y = "rotateY";
	e.ROTATE_Z = "rotateZ";
	e.SKEW = "skew";
	e.SKEW_X = "skewX";
	e.SKEW_Y = "skewY";
	e.OPACITY = "opacity";
	e.FILTER = "filter";
	e.WIDTH = "width";
	e.HEIGHT = "height";
	e.BACKGROUND_COLOR = "backgroundColor";
	e.BACKGROUND = "background";
	e.BORDER_COLOR = "borderColor";
	e.COLOR = "color";
	e.DISPLAY = "display";
	e.FLEX = "flex";
	e.WILL_CHANGE = "willChange";
	e.AUTO = "AUTO";
	e.COMMA_DELIMITER = ",";
	e.COLON_DELIMITER = ":";
	e.BAR_DELIMITER = "|";
	e.CHILDREN = "CHILDREN";
	e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
	e.SIBLINGS = "SIBLINGS";
	e.PARENT = "PARENT";
	e.PRESERVE_3D = "preserve-3d";
	e.HTML_ELEMENT = "HTML_ELEMENT";
	e.PLAIN_OBJECT = "PLAIN_OBJECT";
	e.ABSTRACT_NODE = "ABSTRACT_NODE";
	e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
	e.RENDER_GENERAL = "RENDER_GENERAL";
	e.RENDER_STYLE = "RENDER_STYLE";
	e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function (t, e, n) {
	"use strict";
	var r = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
	var i = r(n(27)),
		o = n(3),
		a = o.IX2EngineActionTypes,
		u = a.IX2_RAW_DATA_IMPORTED,
		c = a.IX2_SESSION_INITIALIZED,
		s = a.IX2_SESSION_STARTED,
		l = a.IX2_SESSION_STOPPED,
		f = a.IX2_PREVIEW_REQUESTED,
		d = a.IX2_PLAYBACK_REQUESTED,
		p = a.IX2_STOP_REQUESTED,
		v = a.IX2_CLEAR_REQUESTED,
		h = a.IX2_EVENT_LISTENER_ADDED,
		E = a.IX2_TEST_FRAME_RENDERED,
		g = a.IX2_EVENT_STATE_CHANGED,
		_ = a.IX2_ANIMATION_FRAME_CHANGED,
		m = a.IX2_PARAMETER_CHANGED,
		I = a.IX2_INSTANCE_ADDED,
		y = a.IX2_INSTANCE_STARTED,
		T = a.IX2_INSTANCE_REMOVED,
		O = a.IX2_ELEMENT_STATE_CHANGED,
		w = a.IX2_ACTION_LIST_PLAYBACK_CHANGED,
		A = a.IX2_VIEWPORT_WIDTH_CHANGED,
		b = a.IX2_MEDIA_QUERIES_DEFINED,
		S = o.IX2EngineItemTypes,
		R = S.GENERAL_START_ACTION,
		N = (S.GENERAL_CONTINUOUS_ACTION, o.IX2VanillaUtils.reifyState);
	e.rawDataImported = function (t) {
		return {
			type: u,
			payload: (0, i.default)({}, N(t))
		}
	};
	e.sessionInitialized = function (t) {
		var e = t.hasBoundaryNodes;
		return {
			type: c,
			payload: {
				hasBoundaryNodes: e
			}
		}
	};
	e.sessionStarted = function () {
		return {
			type: s
		}
	};
	e.sessionStopped = function () {
		return {
			type: l
		}
	};
	e.previewRequested = function (t) {
		var e = t.rawData,
			n = t.defer;
		return {
			type: f,
			payload: {
				defer: n,
				rawData: e
			}
		}
	};
	e.playbackRequested = function (t) {
		var e = t.actionTypeId,
			n = void 0 === e ? R : e,
			r = t.actionListId,
			i = t.actionItemId,
			o = t.eventId,
			a = t.allowEvents,
			u = t.immediate,
			c = t.testManual,
			s = t.verbose,
			l = t.rawData;
		return {
			type: d,
			payload: {
				actionTypeId: n,
				actionListId: r,
				actionItemId: i,
				testManual: c,
				eventId: o,
				allowEvents: a,
				immediate: u,
				verbose: s,
				rawData: l
			}
		}
	};
	e.stopRequested = function (t) {
		return {
			type: p,
			payload: {
				actionListId: t
			}
		}
	};
	e.clearRequested = function () {
		return {
			type: v
		}
	};
	e.eventListenerAdded = function (t, e) {
		return {
			type: h,
			payload: {
				target: t,
				listenerParams: e
			}
		}
	};
	e.testFrameRendered = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
		return {
			type: E,
			payload: {
				step: t
			}
		}
	};
	e.eventStateChanged = function (t, e) {
		return {
			type: g,
			payload: {
				stateKey: t,
				newState: e
			}
		}
	};
	e.animationFrameChanged = function (t, e) {
		return {
			type: _,
			payload: {
				now: t,
				parameters: e
			}
		}
	};
	e.parameterChanged = function (t, e) {
		return {
			type: m,
			payload: {
				key: t,
				value: e
			}
		}
	};
	e.instanceAdded = function (t) {
		return {
			type: I,
			payload: (0, i.default)({}, t)
		}
	};
	e.instanceStarted = function (t, e) {
		return {
			type: y,
			payload: {
				instanceId: t,
				time: e
			}
		}
	};
	e.instanceRemoved = function (t) {
		return {
			type: T,
			payload: {
				instanceId: t
			}
		}
	};
	e.elementStateChanged = function (t, e, n, r) {
		return {
			type: O,
			payload: {
				elementId: t,
				actionTypeId: e,
				current: n,
				actionItem: r
			}
		}
	};
	e.actionListPlaybackChanged = function (t) {
		var e = t.actionListId,
			n = t.isPlaying;
		return {
			type: w,
			payload: {
				actionListId: e,
				isPlaying: n
			}
		}
	};
	e.viewportWidthChanged = function (t) {
		var e = t.width,
			n = t.mediaQueries;
		return {
			type: A,
			payload: {
				width: e,
				mediaQueries: n
			}
		}
	};
	e.mediaQueriesDefined = function () {
		return {
			type: b
		}
	}
}, function (t, e, n) {
	var r = n(98),
		i = n(52);

	function o(t, e) {
		this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
	}
	o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function (t, e) {
	t.exports = function () {}
}, function (t, e, n) {
	var r = n(98),
		i = n(52),
		o = 4294967295;

	function a(t) {
		this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
	}
	a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e, n) {
	"use strict";
	var r = n(0)(n(11));
	window.tram = function (t) {
		function e(t, e) {
			return (new j.Bare).init(t, e)
		}

		function n(t) {
			return t.replace(/[A-Z]/g, function (t) {
				return "-" + t.toLowerCase()
			})
		}

		function i(t) {
			var e = parseInt(t.slice(1), 16);
			return [e >> 16 & 255, e >> 8 & 255, 255 & e]
		}

		function o(t, e, n) {
			return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
		}

		function a() {}

		function u(t, e, n) {
			s("Units do not match [" + t + "]: " + e + ", " + n)
		}

		function c(t, e, n) {
			if (void 0 !== e && (n = e), void 0 === t) return n;
			var r = n;
			return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
		}

		function s(t) {
			H.debug && window && window.console.warn(t)
		}
		var l = function (t, e, n) {
				function i(t) {
					return "object" == (0, r.default)(t)
				}

				function o(t) {
					return "function" == typeof t
				}

				function a() {}
				return function r(u, c) {
					function s() {
						var t = new l;
						return o(t.init) && t.init.apply(t, arguments), t
					}

					function l() {}
					c === n && (c = u, u = Object), s.Bare = l;
					var f, d = a[t] = u[t],
						p = l[t] = s[t] = new a;
					return p.constructor = s, s.mixin = function (e) {
						return l[t] = s[t] = r(s, e)[t], s
					}, s.open = function (t) {
						if (f = {}, o(t) ? f = t.call(s, p, d, s, u) : i(t) && (f = t), i(f))
							for (var n in f) e.call(f, n) && (p[n] = f[n]);
						return o(p.init) || (p.init = u), s
					}, s.open(c)
				}
			}("prototype", {}.hasOwnProperty),
			f = {
				ease: ["ease", function (t, e, n, r) {
					var i = (t /= r) * t,
						o = i * t;
					return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
				}],
				"ease-in": ["ease-in", function (t, e, n, r) {
					var i = (t /= r) * t,
						o = i * t;
					return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
				}],
				"ease-out": ["ease-out", function (t, e, n, r) {
					var i = (t /= r) * t,
						o = i * t;
					return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
				}],
				"ease-in-out": ["ease-in-out", function (t, e, n, r) {
					var i = (t /= r) * t,
						o = i * t;
					return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
				}],
				linear: ["linear", function (t, e, n, r) {
					return n * t / r + e
				}],
				"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
					return n * (t /= r) * t + e
				}],
				"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
					return -n * (t /= r) * (t - 2) + e
				}],
				"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
					return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
				}],
				"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
					return n * (t /= r) * t * t + e
				}],
				"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
					return n * ((t = t / r - 1) * t * t + 1) + e
				}],
				"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
					return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
				}],
				"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
					return n * (t /= r) * t * t * t + e
				}],
				"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
					return -n * ((t = t / r - 1) * t * t * t - 1) + e
				}],
				"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
					return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
				}],
				"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
					return n * (t /= r) * t * t * t * t + e
				}],
				"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
					return n * ((t = t / r - 1) * t * t * t * t + 1) + e
				}],
				"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
					return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
				}],
				"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
					return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
				}],
				"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
					return n * Math.sin(t / r * (Math.PI / 2)) + e
				}],
				"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
					return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
				}],
				"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
					return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
				}],
				"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
					return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
				}],
				"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
					return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
				}],
				"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
					return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
				}],
				"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
					return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
				}],
				"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
					return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
				}],
				"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
					return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
				}],
				"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
					return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
				}],
				"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
					return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
				}]
			},
			d = {
				"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
				"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
				"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
			},
			p = document,
			v = window,
			h = "bkwld-tram",
			E = /[\-\.0-9]/g,
			g = /[A-Z]/,
			_ = "number",
			m = /^(rgb|#)/,
			I = /(em|cm|mm|in|pt|pc|px)$/,
			y = /(em|cm|mm|in|pt|pc|px|%)$/,
			T = /(deg|rad|turn)$/,
			O = "unitless",
			w = /(all|none) 0s ease 0s/,
			A = /^(width|height)$/,
			b = " ",
			S = p.createElement("a"),
			R = ["Webkit", "Moz", "O", "ms"],
			N = ["-webkit-", "-moz-", "-o-", "-ms-"],
			C = function (t) {
				if (t in S.style) return {
					dom: t,
					css: t
				};
				var e, n, r = "",
					i = t.split("-");
				for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
				for (e = 0; e < R.length; e++)
					if ((n = R[e] + r) in S.style) return {
						dom: n,
						css: N[e] + t
					}
			},
			L = e.support = {
				bind: Function.prototype.bind,
				transform: C("transform"),
				transition: C("transition"),
				backface: C("backface-visibility"),
				timing: C("transition-timing-function")
			};
		if (L.transition) {
			var x = L.timing.dom;
			if (S.style[x] = f["ease-in-back"][0], !S.style[x])
				for (var P in d) f[P][0] = d[P]
		}
		var D = e.frame = function () {
				var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
				return t && L.bind ? t.bind(v) : function (t) {
					v.setTimeout(t, 16)
				}
			}(),
			M = e.now = function () {
				var t = v.performance,
					e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
				return e && L.bind ? e.bind(t) : Date.now || function () {
					return +new Date
				}
			}(),
			F = l(function (e) {
				function i(t, e) {
					var n = function (t) {
							for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
								var i = t[e];
								i && r.push(i)
							}
							return r
						}(("" + t).split(b)),
						r = n[0];
					e = e || {};
					var i = Q[r];
					if (!i) return s("Unsupported property: " + r);
					if (!e.weak || !this.props[r]) {
						var o = i[0],
							a = this.props[r];
						return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
					}
				}

				function o(t, e, n) {
					if (t) {
						var o = (0, r.default)(t);
						if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
							duration: t,
							context: this,
							complete: a
						}), void(this.active = !0);
						if ("string" == o && e) {
							switch (t) {
								case "hide":
									l.call(this);
									break;
								case "stop":
									u.call(this);
									break;
								case "redraw":
									f.call(this);
									break;
								default:
									i.call(this, t, n && n[1])
							}
							return a.call(this)
						}
						if ("function" == o) return void t.call(this, this);
						if ("object" == o) {
							var s = 0;
							p.call(this, t, function (t, e) {
								t.span > s && (s = t.span), t.stop(), t.animate(e)
							}, function (t) {
								"wait" in t && (s = c(t.wait, 0))
							}), d.call(this), s > 0 && (this.timer = new W({
								duration: s,
								context: this
							}), this.active = !0, e && (this.timer.complete = a));
							var v = this,
								h = !1,
								E = {};
							D(function () {
								p.call(v, t, function (t) {
									t.active && (h = !0, E[t.name] = t.nextStyle)
								}), h && v.$el.css(E)
							})
						}
					}
				}

				function a() {
					if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
						var t = this.queue.shift();
						o.call(this, t.options, !0, t.args)
					}
				}

				function u(t) {
					var e;
					this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
				}

				function l() {
					u.call(this), this.el.style.display = "none"
				}

				function f() {
					this.el.offsetHeight
				}

				function d() {
					var t, e, n = [];
					for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
					n = n.join(","), this.style !== n && (this.style = n, this.el.style[L.transition.dom] = n)
				}

				function p(t, e, r) {
					var o, a, u, c, s = e !== v,
						l = {};
					for (o in t) u = t[o], o in q ? (l.transform || (l.transform = {}), l.transform[o] = u) : (g.test(o) && (o = n(o)), o in Q ? l[o] = u : (c || (c = {}), c[o] = u));
					for (o in l) {
						if (u = l[o], !(a = this.props[o])) {
							if (!s) continue;
							a = i.call(this, o)
						}
						e.call(this, a, u)
					}
					r && c && r.call(this, c)
				}

				function v(t) {
					t.stop()
				}

				function E(t, e) {
					t.set(e)
				}

				function _(t) {
					this.$el.css(t)
				}

				function m(t, n) {
					e[t] = function () {
						return this.children ? function (t, e) {
							var n, r = this.children.length;
							for (n = 0; r > n; n++) t.apply(this.children[n], e);
							return this
						}.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
					}
				}
				e.init = function (e) {
					if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
						var n = z(this.el, "transition");
						n && !w.test(n) && (this.upstream = n)
					}
					L.backface && H.hideBackface && Y(this.el, L.backface.css, "hidden")
				}, m("add", i), m("start", o), m("wait", function (t) {
					t = c(t, 0), this.active ? this.queue.push({
						options: t
					}) : (this.timer = new W({
						duration: t,
						context: this,
						complete: a
					}), this.active = !0)
				}), m("then", function (t) {
					return this.active ? (this.queue.push({
						options: t,
						args: arguments
					}), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
				}), m("next", a), m("stop", u), m("set", function (t) {
					u.call(this, t), p.call(this, t, E, _)
				}), m("show", function (t) {
					"string" != typeof t && (t = "block"), this.el.style.display = t
				}), m("hide", l), m("redraw", f), m("destroy", function () {
					u.call(this), t.removeData(this.el, h), this.$el = this.el = null
				})
			}),
			j = l(F, function (e) {
				function n(e, n) {
					var r = t.data(e, h) || t.data(e, h, new F.Bare);
					return r.el || r.init(e), n ? r.start(n) : r
				}
				e.init = function (e, r) {
					var i = t(e);
					if (!i.length) return this;
					if (1 === i.length) return n(i[0], r);
					var o = [];
					return i.each(function (t, e) {
						o.push(n(e, r))
					}), this.children = o, this
				}
			}),
			G = l(function (t) {
				function e() {
					var t = this.get();
					this.update("auto");
					var e = this.get();
					return this.update(t), e
				}

				function n(t) {
					var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
					return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
				}
				var i = 500,
					a = "ease",
					u = 0;
				t.init = function (t, e, n, r) {
					this.$el = t, this.el = t[0];
					var o = e[0];
					n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
						return void 0 !== e && (n = e), t in f ? t : n
					}(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + b + this.duration + "ms" + ("ease" != this.ease ? b + f[this.ease][0] : "") + (this.delay ? b + this.delay + "ms" : ""))
				}, t.set = function (t) {
					t = this.convert(t, this.type), this.update(t), this.redraw()
				}, t.transition = function (t) {
					this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
				}, t.fallback = function (t) {
					var n = this.el.style[this.name] || this.convert(this.get(), this.type);
					t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new X({
						from: n,
						to: t,
						duration: this.duration,
						delay: this.delay,
						ease: this.ease,
						update: this.update,
						context: this
					})
				}, t.get = function () {
					return z(this.el, this.name)
				}, t.update = function (t) {
					Y(this.el, this.name, t)
				}, t.stop = function () {
					(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
					var t = this.tween;
					t && t.context && t.destroy()
				}, t.convert = function (t, e) {
					if ("auto" == t && this.auto) return t;
					var i, o = "number" == typeof t,
						a = "string" == typeof t;
					switch (e) {
						case _:
							if (o) return t;
							if (a && "" === t.replace(E, "")) return +t;
							i = "number(unitless)";
							break;
						case m:
							if (a) {
								if ("" === t && this.original) return this.original;
								if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
							}
							i = "hex or rgb string";
							break;
						case I:
							if (o) return t + this.unit;
							if (a && e.test(t)) return t;
							i = "number(px) or string(unit)";
							break;
						case y:
							if (o) return t + this.unit;
							if (a && e.test(t)) return t;
							i = "number(px) or string(unit or %)";
							break;
						case T:
							if (o) return t + this.angle;
							if (a && e.test(t)) return t;
							i = "number(deg) or string(angle)";
							break;
						case O:
							if (o) return t;
							if (a && y.test(t)) return t;
							i = "number(unitless) or string(unit or %)"
					}
					return function (t, e) {
						s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
					}(i, t), t
				}, t.redraw = function () {
					this.el.offsetHeight
				}
			}),
			V = l(G, function (t, e) {
				t.init = function () {
					e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), m))
				}
			}),
			U = l(G, function (t, e) {
				t.init = function () {
					e.init.apply(this, arguments), this.animate = this.fallback
				}, t.get = function () {
					return this.$el[this.name]()
				}, t.update = function (t) {
					this.$el[this.name](t)
				}
			}),
			k = l(G, function (t, e) {
				function n(t, e) {
					var n, r, i, o, a;
					for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
				}
				t.init = function () {
					e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()))
				}, t.set = function (t) {
					n.call(this, t, function (t, e) {
						this.current[t] = e
					}), Y(this.el, this.name, this.style(this.current)), this.redraw()
				}, t.transition = function (t) {
					var e = this.values(t);
					this.tween = new B({
						current: this.current,
						values: e,
						duration: this.duration,
						delay: this.delay,
						ease: this.ease
					});
					var n, r = {};
					for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
					this.active = !0, this.nextStyle = this.style(r)
				}, t.fallback = function (t) {
					var e = this.values(t);
					this.tween = new B({
						current: this.current,
						values: e,
						duration: this.duration,
						delay: this.delay,
						ease: this.ease,
						update: this.update,
						context: this
					})
				}, t.update = function () {
					Y(this.el, this.name, this.style(this.current))
				}, t.style = function (t) {
					var e, n = "";
					for (e in t) n += e + "(" + t[e] + ") ";
					return n
				}, t.values = function (t) {
					var e, r = {};
					return n.call(this, t, function (t, n, i) {
						r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
					}), r
				}
			}),
			X = l(function (e) {
				function n() {
					var t, e, r, i = c.length;
					if (i)
						for (D(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
				}
				var r = {
					ease: f.ease[1],
					from: 0,
					to: 1
				};
				e.init = function (t) {
					this.duration = t.duration || 0, this.delay = t.delay || 0;
					var e = t.ease || r.ease;
					f[e] && (e = f[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
					var n = t.from,
						i = t.to;
					void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
				}, e.play = function () {
					var t;
					this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && D(n))
				}, e.stop = function () {
					var e, n, r;
					this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
				}, e.render = function (t) {
					var e, n = t - this.start;
					if (this.delay) {
						if (n <= this.delay) return;
						n -= this.delay
					}
					if (n < this.duration) {
						var r = this.ease(n, 0, 1, this.duration);
						return e = this.startRGB ? function (t, e, n) {
							return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
						}(this.startRGB, this.endRGB, r) : function (t) {
							return Math.round(t * s) / s
						}(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
					}
					e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
				}, e.format = function (t, e) {
					if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
					if (!this.unit) {
						var n = e.replace(E, "");
						n !== t.replace(E, "") && u("tween", e, t), this.unit = n
					}
					e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
				}, e.destroy = function () {
					this.stop(), this.context = null, this.ease = this.update = this.complete = a
				};
				var c = [],
					s = 1e3
			}),
			W = l(X, function (t) {
				t.init = function (t) {
					this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
				}, t.render = function (t) {
					t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
				}
			}),
			B = l(X, function (t, e) {
				t.init = function (t) {
					var e, n;
					for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new X({
						name: e,
						from: this.current[e],
						to: n,
						duration: t.duration,
						delay: t.delay,
						ease: t.ease,
						autoplay: !1
					}));
					this.play()
				}, t.render = function (t) {
					var e, n, r = !1;
					for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
					return r ? void(this.update && this.update.call(this.context)) : this.destroy()
				}, t.destroy = function () {
					if (e.destroy.call(this), this.tweens) {
						var t;
						for (t = this.tweens.length; t--;) this.tweens[t].destroy();
						this.tweens = null, this.current = null
					}
				}
			}),
			H = e.config = {
				debug: !1,
				defaultUnit: "px",
				defaultAngle: "deg",
				keepInherited: !1,
				hideBackface: !1,
				perspective: "",
				fallback: !L.transition,
				agentTests: []
			};
		e.fallback = function (t) {
			if (!L.transition) return H.fallback = !0;
			H.agentTests.push("(" + t + ")");
			var e = new RegExp(H.agentTests.join("|"), "i");
			H.fallback = e.test(navigator.userAgent)
		}, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
			return new X(t)
		}, e.delay = function (t, e, n) {
			return new W({
				complete: e,
				duration: t,
				context: n
			})
		}, t.fn.tram = function (t) {
			return e.call(null, this, t)
		};
		var Y = t.style,
			z = t.css,
			K = {
				transform: L.transform && L.transform.css
			},
			Q = {
				color: [V, m],
				background: [V, m, "background-color"],
				"outline-color": [V, m],
				"border-color": [V, m],
				"border-top-color": [V, m],
				"border-right-color": [V, m],
				"border-bottom-color": [V, m],
				"border-left-color": [V, m],
				"border-width": [G, I],
				"border-top-width": [G, I],
				"border-right-width": [G, I],
				"border-bottom-width": [G, I],
				"border-left-width": [G, I],
				"border-spacing": [G, I],
				"letter-spacing": [G, I],
				margin: [G, I],
				"margin-top": [G, I],
				"margin-right": [G, I],
				"margin-bottom": [G, I],
				"margin-left": [G, I],
				padding: [G, I],
				"padding-top": [G, I],
				"padding-right": [G, I],
				"padding-bottom": [G, I],
				"padding-left": [G, I],
				"outline-width": [G, I],
				opacity: [G, _],
				top: [G, y],
				right: [G, y],
				bottom: [G, y],
				left: [G, y],
				"font-size": [G, y],
				"text-indent": [G, y],
				"word-spacing": [G, y],
				width: [G, y],
				"min-width": [G, y],
				"max-width": [G, y],
				height: [G, y],
				"min-height": [G, y],
				"max-height": [G, y],
				"line-height": [G, O],
				"scroll-top": [U, _, "scrollTop"],
				"scroll-left": [U, _, "scrollLeft"]
			},
			q = {};
		L.transform && (Q.transform = [k], q = {
			x: [y, "translateX"],
			y: [y, "translateY"],
			rotate: [T],
			rotateX: [T],
			rotateY: [T],
			scale: [_],
			scaleX: [_],
			scaleY: [_],
			skew: [T],
			skewX: [T],
			skewY: [T]
		}), L.transform && L.backface && (q.z = [y, "translateZ"], q.rotateZ = [T], q.scaleZ = [_], q.perspective = [I]);
		var $ = /ms/,
			Z = /s|\./;
		return t.tram = e
	}(window.jQuery)
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = n(28);
	n.d(e, "createStore", function () {
		return r.default
	});
	var i = n(58);
	n.d(e, "combineReducers", function () {
		return i.default
	});
	var o = n(60);
	n.d(e, "bindActionCreators", function () {
		return o.default
	});
	var a = n(61);
	n.d(e, "applyMiddleware", function () {
		return a.default
	});
	var u = n(30);
	n.d(e, "compose", function () {
		return u.default
	});
	n(59)
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = n(109),
		i = n(114),
		o = n(116),
		a = "[object Object]",
		u = Function.prototype,
		c = Object.prototype,
		s = u.toString,
		l = c.hasOwnProperty,
		f = s.call(Object);
	e.default = function (t) {
		if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
		var e = Object(i.default)(t);
		if (null === e) return !0;
		var n = l.call(e, "constructor") && e.constructor;
		return "function" == typeof n && n instanceof n && s.call(n) == f
	}
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = n(110).default.Symbol;
	e.default = r
}, function (t, e, n) {
	"use strict";
	n.r(e), n.d(e, "default", function () {
		return o
	});
	var r = n(28);
	n(56), n(59);

	function i(t, e) {
		var n = e && e.type;
		return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
	}

	function o(t) {
		for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
			var a = e[o];
			0, "function" == typeof t[a] && (n[a] = t[a])
		}
		var u, c = Object.keys(n);
		try {
			! function (t) {
				Object.keys(t).forEach(function (e) {
					var n = t[e];
					if (void 0 === n(void 0, {
							type: r.ActionTypes.INIT
						})) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
					if (void 0 === n(void 0, {
							type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
						})) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
				})
			}(n)
		} catch (t) {
			u = t
		}
		return function () {
			var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				e = arguments[1];
			if (u) throw u;
			for (var r = !1, o = {}, a = 0; a < c.length; a++) {
				var s = c[a],
					l = n[s],
					f = t[s],
					d = l(f, e);
				if (void 0 === d) {
					var p = i(s, e);
					throw new Error(p)
				}
				o[s] = d, r = r || d !== f
			}
			return r ? o : t
		}
	}
}, function (t, e, n) {
	"use strict";

	function r(t) {
		"undefined" != typeof console && "function" == typeof console.error && console.error(t);
		try {
			throw new Error(t)
		} catch (t) {}
	}
	n.r(e), n.d(e, "default", function () {
		return r
	})
}, function (t, e, n) {
	"use strict";

	function r(t, e) {
		return function () {
			return e(t.apply(void 0, arguments))
		}
	}

	function i(t, e) {
		if ("function" == typeof t) return r(t, e);
		if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
		for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
			var a = n[o],
				u = t[a];
			"function" == typeof u && (i[a] = r(u, e))
		}
		return i
	}
	n.r(e), n.d(e, "default", function () {
		return i
	})
}, function (t, e, n) {
	"use strict";
	n.r(e), n.d(e, "default", function () {
		return o
	});
	var r = n(30),
		i = Object.assign || function (t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		};

	function o() {
		for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
		return function (t) {
			return function (n, o, a) {
				var u, c = t(n, o, a),
					s = c.dispatch,
					l = {
						getState: c.getState,
						dispatch: function (t) {
							return s(t)
						}
					};
				return u = e.map(function (t) {
					return t(l)
				}), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
					dispatch: s
				})
			}
		}
	}
}, function (t, e, n) {
	var r = n(63)(n(185));
	t.exports = r
}, function (t, e, n) {
	var r = n(6),
		i = n(10),
		o = n(22);
	t.exports = function (t) {
		return function (e, n, a) {
			var u = Object(e);
			if (!i(e)) {
				var c = r(n, 3);
				e = o(e), n = function (t) {
					return c(u[t], t, u)
				}
			}
			var s = t(e, n, a);
			return s > -1 ? u[c ? e[s] : s] : void 0
		}
	}
}, function (t, e, n) {
	var r = n(18),
		i = n(129),
		o = n(130),
		a = n(131),
		u = n(132),
		c = n(133);

	function s(t) {
		var e = this.__data__ = new r(t);
		this.size = e.size
	}
	s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function (t, e, n) {
	var r = n(9),
		i = n(5),
		o = "[object AsyncFunction]",
		a = "[object Function]",
		u = "[object GeneratorFunction]",
		c = "[object Proxy]";
	t.exports = function (t) {
		if (!i(t)) return !1;
		var e = r(t);
		return e == a || e == u || e == o || e == c
	}
}, function (t, e, n) {
	(function (e) {
		var n = "object" == typeof e && e && e.Object === Object && e;
		t.exports = n
	}).call(this, n(29))
}, function (t, e) {
	var n = Function.prototype.toString;
	t.exports = function (t) {
		if (null != t) {
			try {
				return n.call(t)
			} catch (t) {}
			try {
				return t + ""
			} catch (t) {}
		}
		return ""
	}
}, function (t, e, n) {
	var r = n(152),
		i = n(8);
	t.exports = function t(e, n, o, a, u) {
		return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
	}
}, function (t, e, n) {
	var r = n(153),
		i = n(156),
		o = n(157),
		a = 1,
		u = 2;
	t.exports = function (t, e, n, c, s, l) {
		var f = n & a,
			d = t.length,
			p = e.length;
		if (d != p && !(f && p > d)) return !1;
		var v = l.get(t);
		if (v && l.get(e)) return v == e;
		var h = -1,
			E = !0,
			g = n & u ? new r : void 0;
		for (l.set(t, e), l.set(e, t); ++h < d;) {
			var _ = t[h],
				m = e[h];
			if (c) var I = f ? c(m, _, h, e, t, l) : c(_, m, h, t, e, l);
			if (void 0 !== I) {
				if (I) continue;
				E = !1;
				break
			}
			if (g) {
				if (!i(e, function (t, e) {
						if (!o(g, e) && (_ === t || s(_, t, n, c, l))) return g.push(e)
					})) {
					E = !1;
					break
				}
			} else if (_ !== m && !s(_, m, n, c, l)) {
				E = !1;
				break
			}
		}
		return l.delete(t), l.delete(e), E
	}
}, function (t, e, n) {
	var r = n(35),
		i = n(1);
	t.exports = function (t, e, n) {
		var o = e(t);
		return i(t) ? o : r(o, n(t))
	}
}, function (t, e, n) {
	var r = n(164),
		i = n(72),
		o = Object.prototype.propertyIsEnumerable,
		a = Object.getOwnPropertySymbols,
		u = a ? function (t) {
			return null == t ? [] : (t = Object(t), r(a(t), function (e) {
				return o.call(t, e)
			}))
		} : i;
	t.exports = u
}, function (t, e) {
	t.exports = function () {
		return []
	}
}, function (t, e, n) {
	var r = n(165),
		i = n(23),
		o = n(1),
		a = n(36),
		u = n(37),
		c = n(38),
		s = Object.prototype.hasOwnProperty;
	t.exports = function (t, e) {
		var n = o(t),
			l = !n && i(t),
			f = !n && !l && a(t),
			d = !n && !l && !f && c(t),
			p = n || l || f || d,
			v = p ? r(t.length, String) : [],
			h = v.length;
		for (var E in t) !e && !s.call(t, E) || p && ("length" == E || f && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
		return v
	}
}, function (t, e) {
	t.exports = function (t) {
		return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
			enumerable: !0,
			get: function () {
				return t.l
			}
		}), Object.defineProperty(t, "id", {
			enumerable: !0,
			get: function () {
				return t.i
			}
		}), t.webpackPolyfill = 1), t
	}
}, function (t, e) {
	t.exports = function (t, e) {
		return function (n) {
			return t(e(n))
		}
	}
}, function (t, e, n) {
	var r = n(7)(n(4), "WeakMap");
	t.exports = r
}, function (t, e, n) {
	var r = n(5);
	t.exports = function (t) {
		return t == t && !r(t)
	}
}, function (t, e) {
	t.exports = function (t, e) {
		return function (n) {
			return null != n && n[t] === e && (void 0 !== e || t in Object(n))
		}
	}
}, function (t, e, n) {
	var r = n(80);
	t.exports = function (t) {
		return null == t ? "" : r(t)
	}
}, function (t, e, n) {
	var r = n(13),
		i = n(81),
		o = n(1),
		a = n(26),
		u = 1 / 0,
		c = r ? r.prototype : void 0,
		s = c ? c.toString : void 0;
	t.exports = function t(e) {
		if ("string" == typeof e) return e;
		if (o(e)) return i(e, t) + "";
		if (a(e)) return s ? s.call(e) : "";
		var n = e + "";
		return "0" == n && 1 / e == -u ? "-0" : n
	}
}, function (t, e) {
	t.exports = function (t, e) {
		for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
		return i
	}
}, function (t, e) {
	t.exports = function (t) {
		return function (e) {
			return null == e ? void 0 : e[t]
		}
	}
}, function (t, e) {
	t.exports = function (t, e, n, r) {
		for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
			if (e(t[o], o, t)) return o;
		return -1
	}
}, function (t, e, n) {
	"use strict";
	var r = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.inQuad = function (t) {
		return Math.pow(t, 2)
	}, e.outQuad = function (t) {
		return -(Math.pow(t - 1, 2) - 1)
	}, e.inOutQuad = function (t) {
		if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
		return -.5 * ((t -= 2) * t - 2)
	}, e.inCubic = function (t) {
		return Math.pow(t, 3)
	}, e.outCubic = function (t) {
		return Math.pow(t - 1, 3) + 1
	}, e.inOutCubic = function (t) {
		if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
		return .5 * (Math.pow(t - 2, 3) + 2)
	}, e.inQuart = function (t) {
		return Math.pow(t, 4)
	}, e.outQuart = function (t) {
		return -(Math.pow(t - 1, 4) - 1)
	}, e.inOutQuart = function (t) {
		if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
		return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
	}, e.inQuint = function (t) {
		return Math.pow(t, 5)
	}, e.outQuint = function (t) {
		return Math.pow(t - 1, 5) + 1
	}, e.inOutQuint = function (t) {
		if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
		return .5 * (Math.pow(t - 2, 5) + 2)
	}, e.inSine = function (t) {
		return 1 - Math.cos(t * (Math.PI / 2))
	}, e.outSine = function (t) {
		return Math.sin(t * (Math.PI / 2))
	}, e.inOutSine = function (t) {
		return -.5 * (Math.cos(Math.PI * t) - 1)
	}, e.inExpo = function (t) {
		return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
	}, e.outExpo = function (t) {
		return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
	}, e.inOutExpo = function (t) {
		if (0 === t) return 0;
		if (1 === t) return 1;
		if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
		return .5 * (2 - Math.pow(2, -10 * --t))
	}, e.inCirc = function (t) {
		return -(Math.sqrt(1 - t * t) - 1)
	}, e.outCirc = function (t) {
		return Math.sqrt(1 - Math.pow(t - 1, 2))
	}, e.inOutCirc = function (t) {
		if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
		return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
	}, e.outBounce = function (t) {
		return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
	}, e.inBack = function (t) {
		return t * t * ((o + 1) * t - o)
	}, e.outBack = function (t) {
		return (t -= 1) * t * ((o + 1) * t + o) + 1
	}, e.inOutBack = function (t) {
		var e = o;
		if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
		return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
	}, e.inElastic = function (t) {
		var e = o,
			n = 0,
			r = 1;
		if (0 === t) return 0;
		if (1 === t) return 1;
		n || (n = .3);
		r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
		return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
	}, e.outElastic = function (t) {
		var e = o,
			n = 0,
			r = 1;
		if (0 === t) return 0;
		if (1 === t) return 1;
		n || (n = .3);
		r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
		return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
	}, e.inOutElastic = function (t) {
		var e = o,
			n = 0,
			r = 1;
		if (0 === t) return 0;
		if (2 == (t /= .5)) return 1;
		n || (n = .3 * 1.5);
		r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
		if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
		return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
	}, e.swingFromTo = function (t) {
		var e = o;
		return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
	}, e.swingFrom = function (t) {
		return t * t * ((o + 1) * t - o)
	}, e.swingTo = function (t) {
		return (t -= 1) * t * ((o + 1) * t + o) + 1
	}, e.bounce = function (t) {
		return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
	}, e.bouncePast = function (t) {
		return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
	}, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
	var i = r(n(85)),
		o = 1.70158,
		a = (0, i.default)(.25, .1, .25, 1);
	e.ease = a;
	var u = (0, i.default)(.42, 0, 1, 1);
	e.easeIn = u;
	var c = (0, i.default)(0, 0, .58, 1);
	e.easeOut = c;
	var s = (0, i.default)(.42, 0, .58, 1);
	e.easeInOut = s
}, function (t, e) {
	var n = 4,
		r = .001,
		i = 1e-7,
		o = 10,
		a = 11,
		u = 1 / (a - 1),
		c = "function" == typeof Float32Array;

	function s(t, e) {
		return 1 - 3 * e + 3 * t
	}

	function l(t, e) {
		return 3 * e - 6 * t
	}

	function f(t) {
		return 3 * t
	}

	function d(t, e, n) {
		return ((s(e, n) * t + l(e, n)) * t + f(e)) * t
	}

	function p(t, e, n) {
		return 3 * s(e, n) * t * t + 2 * l(e, n) * t + f(e)
	}
	t.exports = function (t, e, s, l) {
		if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
		var f = c ? new Float32Array(a) : new Array(a);
		if (t !== e || s !== l)
			for (var v = 0; v < a; ++v) f[v] = d(v * u, t, s);

		function h(e) {
			for (var c = 0, l = 1, v = a - 1; l !== v && f[l] <= e; ++l) c += u;
			var h = c + (e - f[--l]) / (f[l + 1] - f[l]) * u,
				E = p(h, t, s);
			return E >= r ? function (t, e, r, i) {
				for (var o = 0; o < n; ++o) {
					var a = p(e, r, i);
					if (0 === a) return e;
					e -= (d(e, r, i) - t) / a
				}
				return e
			}(e, h, t, s) : 0 === E ? h : function (t, e, n, r, a) {
				var u, c, s = 0;
				do {
					(u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
				} while (Math.abs(u) > i && ++s < o);
				return c
			}(e, c, c + u, t, s)
		}
		return function (n) {
			return t === e && s === l ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, l)
		}
	}
}, function (t, e, n) {
	"use strict";
	var r = n(0)(n(87)),
		i = n(0),
		o = n(17);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.optimizeFloat = c, e.createBezierEasing = function (t) {
		return u.default.apply(void 0, (0, r.default)(t))
	}, e.applyEasing = function (t, e, n) {
		if (0 === e) return 0;
		if (1 === e) return 1;
		if (n) return c(e > 0 ? n(e) : e);
		return c(e > 0 && t && a[t] ? a[t](e) : e)
	};
	var a = o(n(84)),
		u = i(n(85));

	function c(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
			r = Math.pow(n, e),
			i = Number(Math.round(t * r) / r);
		return Math.abs(i) > 1e-4 ? i : 0
	}
}, function (t, e, n) {
	var r = n(187),
		i = n(188),
		o = n(189);
	t.exports = function (t) {
		return r(t) || i(t) || o()
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
	e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
	e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
	e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
	e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
	e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
	e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
	e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
	e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
	e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
	e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
	e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
	e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
	e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
	e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
	e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
	e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
	e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
	e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
	e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
	e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.ECOMMERCE_CART_CLOSE = e.ECOMMERCE_CART_OPEN = e.PAGE = e.VIEWPORT = e.ELEMENT = e.PAGE_SCROLL = e.PAGE_SCROLL_DOWN = e.PAGE_SCROLL_UP = e.PAGE_FINISH = e.PAGE_START = e.COMPONENT_INACTIVE = e.COMPONENT_ACTIVE = e.DROPDOWN_CLOSE = e.DROPDOWN_OPEN = e.SLIDER_INACTIVE = e.SLIDER_ACTIVE = e.NAVBAR_CLOSE = e.NAVBAR_OPEN = e.TAB_INACTIVE = e.TAB_ACTIVE = e.SCROLLING_IN_VIEW = e.SCROLL_OUT_OF_VIEW = e.SCROLL_INTO_VIEW = e.MOUSE_MOVE = e.MOUSE_OUT = e.MOUSE_OVER = e.MOUSE_UP = e.MOUSE_DOWN = e.MOUSE_SECOND_CLICK = e.MOUSE_CLICK = void 0;
	e.MOUSE_CLICK = "MOUSE_CLICK";
	e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK";
	e.MOUSE_DOWN = "MOUSE_DOWN";
	e.MOUSE_UP = "MOUSE_UP";
	e.MOUSE_OVER = "MOUSE_OVER";
	e.MOUSE_OUT = "MOUSE_OUT";
	e.MOUSE_MOVE = "MOUSE_MOVE";
	e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW";
	e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW";
	e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW";
	e.TAB_ACTIVE = "TAB_ACTIVE";
	e.TAB_INACTIVE = "TAB_INACTIVE";
	e.NAVBAR_OPEN = "NAVBAR_OPEN";
	e.NAVBAR_CLOSE = "NAVBAR_CLOSE";
	e.SLIDER_ACTIVE = "SLIDER_ACTIVE";
	e.SLIDER_INACTIVE = "SLIDER_INACTIVE";
	e.DROPDOWN_OPEN = "DROPDOWN_OPEN";
	e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE";
	e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
	e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
	e.PAGE_START = "PAGE_START";
	e.PAGE_FINISH = "PAGE_FINISH";
	e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP";
	e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN";
	e.PAGE_SCROLL = "PAGE_SCROLL";
	e.ELEMENT = "ELEMENT";
	e.VIEWPORT = "VIEWPORT";
	e.PAGE = "PAGE";
	e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN";
	e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE"
}, function (t, e, n) {
	"use strict";
	var r = n(0)(n(16));
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.isPluginType = function (t) {
		return t === o.PLUGIN_LOTTIE
	}, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
	var i = n(193),
		o = n(48),
		a = n(31),
		u = (0, r.default)({}, o.PLUGIN_LOTTIE, {
			getConfig: i.getPluginConfig,
			getOrigin: i.getPluginOrigin,
			getDuration: i.getPluginDuration,
			getDestination: i.getPluginDestination,
			createInstance: i.createPluginInstance,
			render: i.renderPlugin,
			clear: i.clearPlugin
		});
	var c = function (t) {
			return function (e) {
				if (!a.IS_BROWSER_ENV) return function () {
					return null
				};
				var n = u[e];
				if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
				var r = n[t];
				if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
				return r
			}
		},
		s = c("getConfig");
	e.getPluginConfig = s;
	var l = c("getOrigin");
	e.getPluginOrigin = l;
	var f = c("getDuration");
	e.getPluginDuration = f;
	var d = c("getDestination");
	e.getPluginDestination = d;
	var p = c("createInstance");
	e.createPluginInstance = p;
	var v = c("render");
	e.renderPlugin = v;
	var h = c("clear");
	e.clearPlugin = h
}, function (t, e, n) {
	var r = n(92),
		i = n(200)(r);
	t.exports = i
}, function (t, e, n) {
	var r = n(198),
		i = n(22);
	t.exports = function (t, e) {
		return t && r(t, e, i)
	}
}, function (t, e, n) {
	"use strict";
	e.__esModule = !0;
	var r, i = n(204),
		o = (r = i) && r.__esModule ? r : {
			default: r
		};
	e.default = o.default
}, function (t, e, n) {
	"use strict";
	var r = n(0)(n(87)),
		i = n(17),
		o = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.observeRequests = function (t) {
		G({
			store: t,
			select: function (t) {
				var e = t.ixRequest;
				return e.preview
			},
			onChange: ot
		}), G({
			store: t,
			select: function (t) {
				var e = t.ixRequest;
				return e.playback
			},
			onChange: ct
		}), G({
			store: t,
			select: function (t) {
				var e = t.ixRequest;
				return e.stop
			},
			onChange: st
		}), G({
			store: t,
			select: function (t) {
				var e = t.ixRequest;
				return e.clear
			},
			onChange: lt
		})
	}, e.startEngine = ft, e.stopEngine = dt, e.stopAllActionGroups = It, e.stopActionGroup = yt, e.startActionGroup = Tt;
	var a = o(n(27)),
		u = o(n(209)),
		c = o(n(62)),
		s = o(n(24)),
		l = o(n(211)),
		f = o(n(217)),
		d = o(n(229)),
		p = o(n(230)),
		v = o(n(231)),
		h = o(n(234)),
		E = o(n(235)),
		g = o(n(93)),
		_ = n(3),
		m = n(50),
		I = i(n(238)),
		y = o(n(239)),
		T = _.IX2EngineEventTypes,
		O = T.MOUSE_CLICK,
		w = T.MOUSE_SECOND_CLICK,
		A = _.IX2EngineConstants,
		b = A.COLON_DELIMITER,
		S = A.BOUNDARY_SELECTOR,
		R = A.HTML_ELEMENT,
		N = A.RENDER_GENERAL,
		C = A.W_MOD_IX,
		L = _.IX2EngineItemTypes,
		x = L.GENERAL_START_ACTION,
		P = L.GENERAL_CONTINUOUS_ACTION,
		D = _.IX2VanillaUtils,
		M = D.getAffectedElements,
		F = D.getElementId,
		j = D.getDestinationValues,
		G = D.observeStore,
		V = D.getInstanceId,
		U = D.renderHTMLElement,
		k = D.clearAllStyles,
		X = D.getMaxDurationItemIndex,
		W = D.getComputedStyle,
		B = D.getInstanceOrigin,
		H = D.reduceListToGroup,
		Y = D.shouldNamespaceEventParameter,
		z = D.getNamespacedParameterId,
		K = D.shouldAllowMediaQuery,
		Q = D.cleanupHTMLElement,
		q = D.stringifyTarget,
		$ = D.mediaQueriesEqual,
		Z = _.IX2VanillaPlugins,
		J = Z.isPluginType,
		tt = Z.createPluginInstance,
		et = Z.getPluginDuration,
		nt = navigator.userAgent,
		rt = nt.match(/iPad/i) || nt.match(/iPhone/),
		it = 12;

	function ot(t, e) {
		var n = t.rawData,
			r = function () {
				ft({
					store: e,
					rawData: n,
					allowEvents: !0
				}), at()
			};
		t.defer ? setTimeout(r, 0) : r()
	}

	function at() {
		document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
	}

	function ut(t) {
		return t && (0, h.default)(t, "_EFFECT")
	}

	function ct(t, e) {
		var n = t.actionTypeId,
			r = t.actionListId,
			i = t.actionItemId,
			o = t.eventId,
			a = t.allowEvents,
			u = t.immediate,
			c = t.testManual,
			s = t.verbose,
			l = void 0 === s || s,
			f = t.rawData;
		if (r && i && f && u) {
			var d = f.actionLists[r];
			d && (f = H({
				actionList: d,
				actionItemId: i,
				rawData: f
			}))
		}
		if (ft({
				store: e,
				rawData: f,
				allowEvents: a,
				testManual: c
			}), r && n === x || ut(n)) {
			yt({
				store: e,
				actionListId: r
			}), mt({
				store: e,
				actionListId: r,
				eventId: o
			});
			var p = Tt({
				store: e,
				eventId: o,
				actionListId: r,
				immediate: u,
				verbose: l
			});
			l && p && e.dispatch((0, m.actionListPlaybackChanged)({
				actionListId: r,
				isPlaying: !u
			}))
		}
	}

	function st(t, e) {
		var n = t.actionListId;
		n ? yt({
			store: e,
			actionListId: n
		}) : It({
			store: e
		}), dt(e)
	}

	function lt(t, e) {
		dt(e), k({
			store: e,
			elementApi: I
		})
	}

	function ft(t) {
		var e, n = t.store,
			i = t.rawData,
			o = t.allowEvents,
			a = t.testManual,
			u = n.getState().ixSession;
		i && n.dispatch((0, m.rawDataImported)(i)), u.active || (n.dispatch((0, m.sessionInitialized)({
			hasBoundaryNodes: Boolean(document.querySelector(S))
		})), o && (function (t) {
			var e = t.getState().ixData.eventTypeMap;
			ht(t), (0, v.default)(e, function (e, n) {
				var i = y.default[n];
				i ? function (t) {
					var e = t.logic,
						n = t.store,
						i = t.events;
					! function (t) {
						if (rt) {
							var e = {},
								n = "";
							for (var r in t) {
								var i = t[r],
									o = i.eventTypeId,
									a = i.target,
									u = I.getQuerySelector(a);
								e[u] || o !== O && o !== w || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
							}
							if (n) {
								var c = document.createElement("style");
								c.textContent = n, document.body.appendChild(c)
							}
						}
					}(i);
					var o = e.types,
						a = e.handler,
						u = n.getState().ixData,
						f = u.actionLists,
						d = Et(i, _t);
					if ((0, l.default)(d)) {
						(0, v.default)(d, function (t, e) {
							var o = i[e],
								a = o.action,
								l = o.id,
								d = o.mediaQueries,
								p = void 0 === d ? u.mediaQueryKeys : d,
								v = a.config.actionListId;
							if ($(p, u.mediaQueryKeys) || n.dispatch((0, m.mediaQueriesDefined)()), a.actionTypeId === P) {
								var h = Array.isArray(o.config) ? o.config : [o.config];
								h.forEach(function (e) {
									var i = e.continuousParameterGroupId,
										o = (0, s.default)(f, "".concat(v, ".continuousParameterGroups"), []),
										a = (0, c.default)(o, function (t) {
											var e = t.id;
											return e === i
										}),
										u = (e.smoothing || 0) / 100,
										d = (e.restingState || 0) / 100;
									a && t.forEach(function (t, i) {
										var o = l + b + i;
										! function (t) {
											var e = t.store,
												n = t.eventStateKey,
												i = t.eventTarget,
												o = t.eventId,
												a = t.eventConfig,
												u = t.actionListId,
												c = t.parameterGroup,
												l = t.smoothing,
												f = t.restingValue,
												d = e.getState(),
												p = d.ixData,
												v = d.ixSession,
												h = p.events[o],
												E = h.eventTypeId,
												g = {},
												_ = {},
												m = [],
												y = c.continuousActionGroups,
												T = c.id;
											Y(E, a) && (T = z(n, T));
											var O = v.hasBoundaryNodes && i ? I.getClosestElement(i, S) : null;
											y.forEach(function (t) {
												var e = t.keyframe,
													n = t.actionItems;
												n.forEach(function (t) {
													var n = t.actionTypeId,
														o = t.config.target;
													if (o) {
														var a = o.boundaryMode ? O : null,
															u = q(o) + b + n;
														if (_[u] = function () {
																var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
																	n = arguments.length > 1 ? arguments[1] : void 0,
																	i = arguments.length > 2 ? arguments[2] : void 0,
																	o = (0, r.default)(e);
																return o.some(function (e, r) {
																	return e.keyframe === n && (t = r, !0)
																}), null == t && (t = o.length, o.push({
																	keyframe: n,
																	actionItems: []
																})), o[t].actionItems.push(i), o
															}(_[u], e, t), !g[u]) {
															g[u] = !0;
															var c = t.config;
															M({
																config: c,
																event: h,
																eventTarget: i,
																elementRoot: a,
																elementApi: I
															}).forEach(function (t) {
																m.push({
																	element: t,
																	key: u
																})
															})
														}
													}
												})
											}), m.forEach(function (t) {
												var n = t.element,
													r = t.key,
													i = _[r],
													a = (0, s.default)(i, "[0].actionItems[0]", {}),
													c = a.actionTypeId,
													d = J(c) ? tt(c)(n, a) : null,
													p = j({
														element: n,
														actionItem: a,
														elementApi: I
													}, d);
												Ot({
													store: e,
													element: n,
													eventId: o,
													actionListId: u,
													actionItem: a,
													destination: p,
													continuous: !0,
													parameterId: T,
													actionGroups: i,
													smoothing: l,
													restingValue: f,
													pluginInstance: d
												})
											})
										}({
											store: n,
											eventStateKey: o,
											eventTarget: t,
											eventId: l,
											eventConfig: e,
											actionListId: v,
											parameterGroup: a,
											smoothing: u,
											restingValue: d
										})
									})
								})
							}(a.actionTypeId === x || ut(a.actionTypeId)) && mt({
								store: n,
								actionListId: v,
								eventId: l
							})
						});
						var p = function (t) {
								var e = n.getState(),
									r = e.ixSession;
								gt(d, function (e, o, c) {
									var s = i[o],
										l = r.eventState[c],
										f = s.action,
										d = s.mediaQueries,
										p = void 0 === d ? u.mediaQueryKeys : d;
									if (K(p, r.mediaQueryKey)) {
										var v = function () {
											var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
												i = a({
													store: n,
													element: e,
													event: s,
													eventConfig: r,
													nativeEvent: t,
													eventStateKey: c
												}, l);
											(0, g.default)(i, l) || n.dispatch((0, m.eventStateChanged)(c, i))
										};
										if (f.actionTypeId === P) {
											var h = Array.isArray(s.config) ? s.config : [s.config];
											h.forEach(v)
										} else v()
									}
								})
							},
							h = (0, E.default)(p, it),
							_ = function (t) {
								var e = t.target,
									r = void 0 === e ? document : e,
									i = t.types,
									o = t.throttle;
								i.split(" ").filter(Boolean).forEach(function (t) {
									var e = o ? h : p;
									r.addEventListener(t, e), n.dispatch((0, m.eventListenerAdded)(r, [t, e]))
								})
							};
						Array.isArray(o) ? o.forEach(_) : "string" == typeof o && _(e)
					}
				}({
					logic: i,
					store: t,
					events: e
				}) : console.warn("IX2 event type not configured: ".concat(n))
			}), t.getState().ixSession.eventListeners.length && function (t) {
				var e = function () {
					ht(t)
				};
				vt.forEach(function (n) {
					window.addEventListener(n, e), t.dispatch((0, m.eventListenerAdded)(window, [n, e]))
				}), e()
			}(t)
		}(n), -1 === (e = document.documentElement).className.indexOf(C) && (e.className += " ".concat(C)), n.getState().ixSession.hasDefinedMediaQueries && function (t) {
			G({
				store: t,
				select: function (t) {
					return t.ixSession.mediaQueryKey
				},
				onChange: function () {
					dt(t), k({
						store: t,
						elementApi: I
					}), ft({
						store: t,
						allowEvents: !0
					}), at()
				}
			})
		}(n)), n.dispatch((0, m.sessionStarted)()), function (t, e) {
			! function n(r) {
				var i = t.getState(),
					o = i.ixSession,
					a = i.ixParameters;
				o.active && (t.dispatch((0, m.animationFrameChanged)(r, a)), e ? function (t, e) {
					var n = G({
						store: t,
						select: function (t) {
							return t.ixSession.tick
						},
						onChange: function (t) {
							e(t), n()
						}
					})
				}(t, n) : requestAnimationFrame(n))
			}(window.performance.now())
		}(n, a))
	}

	function dt(t) {
		var e = t.getState().ixSession;
		e.active && (e.eventListeners.forEach(pt), t.dispatch((0, m.sessionStopped)()))
	}

	function pt(t) {
		var e = t.target,
			n = t.listenerParams;
		e.removeEventListener.apply(e, n)
	}
	var vt = ["resize", "orientationchange"];

	function ht(t) {
		var e = t.getState(),
			n = e.ixSession,
			r = e.ixData,
			i = window.innerWidth;
		if (i !== n.viewportWidth) {
			var o = r.mediaQueries;
			t.dispatch((0, m.viewportWidthChanged)({
				width: i,
				mediaQueries: o
			}))
		}
	}
	var Et = function (t, e) {
			return (0, f.default)((0, p.default)(t, e), d.default)
		},
		gt = function (t, e) {
			(0, v.default)(t, function (t, n) {
				t.forEach(function (t, r) {
					e(t, n, n + b + r)
				})
			})
		},
		_t = function (t) {
			var e = {
				target: t.target
			};
			return M({
				config: e,
				elementApi: I
			})
		};

	function mt(t) {
		var e = t.store,
			n = t.actionListId,
			r = t.eventId,
			i = e.getState(),
			o = i.ixData,
			a = i.ixSession,
			u = o.actionLists,
			c = o.events[r],
			l = u[n];
		if (l && l.useFirstGroupAsInitialState) {
			var f = (0, s.default)(l, "actionItemGroups[0].actionItems", []),
				d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
			if (!K(d, a.mediaQueryKey)) return;
			f.forEach(function (t) {
				var i = t.config,
					o = t.actionTypeId,
					a = M({
						config: i,
						event: c,
						elementApi: I
					}),
					u = J(o);
				a.forEach(function (i) {
					var a = u ? tt(o)(i, t) : null;
					Ot({
						destination: j({
							element: i,
							actionItem: t,
							elementApi: I
						}, a),
						immediate: !0,
						store: e,
						element: i,
						eventId: r,
						actionItem: t,
						actionListId: n,
						pluginInstance: a
					})
				})
			})
		}
	}

	function It(t) {
		var e = t.store,
			n = e.getState().ixInstances;
		(0, v.default)(n, function (t) {
			if (!t.continuous) {
				var n = t.actionListId,
					r = t.verbose;
				wt(t, e), r && e.dispatch((0, m.actionListPlaybackChanged)({
					actionListId: n,
					isPlaying: !1
				}))
			}
		})
	}

	function yt(t) {
		var e = t.store,
			n = t.eventId,
			r = t.eventTarget,
			i = t.eventStateKey,
			o = t.actionListId,
			a = e.getState(),
			u = a.ixInstances,
			c = a.ixSession.hasBoundaryNodes && r ? I.getClosestElement(r, S) : null;
		(0, v.default)(u, function (t) {
			var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
				a = !i || t.eventStateKey === i;
			if (t.actionListId === o && t.eventId === n && a) {
				if (c && r && !I.elementContains(c, t.element)) return;
				wt(t, e), t.verbose && e.dispatch((0, m.actionListPlaybackChanged)({
					actionListId: o,
					isPlaying: !1
				}))
			}
		})
	}

	function Tt(t) {
		var e = t.store,
			n = t.eventId,
			r = t.eventTarget,
			i = t.eventStateKey,
			o = t.actionListId,
			a = t.groupIndex,
			u = void 0 === a ? 0 : a,
			c = t.immediate,
			l = t.verbose,
			f = e.getState(),
			d = f.ixData,
			p = f.ixSession,
			v = d.events[n] || {},
			h = v.mediaQueries,
			E = void 0 === h ? d.mediaQueryKeys : h,
			g = (0, s.default)(d, "actionLists.".concat(o), {}),
			_ = g.actionItemGroups,
			m = g.useFirstGroupAsInitialState;
		if (!_ || !_.length) return !1;
		u >= _.length && (0, s.default)(v, "config.loop") && (u = 0), 0 === u && m && u++;
		var y = (0 === u || 1 === u && m) && ut(v.action && v.action.actionTypeId) ? v.config.delay : void 0,
			T = (0, s.default)(_, [u, "actionItems"], []);
		if (!T.length) return !1;
		if (!K(E, p.mediaQueryKey)) return !1;
		var O = p.hasBoundaryNodes && r ? I.getClosestElement(r, S) : null,
			w = X(T),
			A = !1;
		return T.forEach(function (t, a) {
			var s = t.config,
				f = t.actionTypeId,
				d = J(f),
				p = s.target;
			if (p) {
				var h = p.boundaryMode ? O : null;
				M({
					config: s,
					event: v,
					eventTarget: r,
					elementRoot: h,
					elementApi: I
				}).forEach(function (s, p) {
					var v = d ? tt(f)(s, t) : null,
						h = d ? et(f)(s, t) : null;
					A = !0;
					var E = w === a && 0 === p,
						g = W({
							element: s,
							actionItem: t
						}),
						_ = j({
							element: s,
							actionItem: t,
							elementApi: I
						}, v);
					Ot({
						store: e,
						element: s,
						actionItem: t,
						eventId: n,
						eventTarget: r,
						eventStateKey: i,
						actionListId: o,
						groupIndex: u,
						isCarrier: E,
						computedStyle: g,
						destination: _,
						immediate: c,
						verbose: l,
						pluginInstance: v,
						pluginDuration: h,
						instanceDelay: y
					})
				})
			}
		}), A
	}

	function Ot(t) {
		var e = t.store,
			n = t.computedStyle,
			r = (0, u.default)(t, ["store", "computedStyle"]),
			i = !r.continuous,
			o = r.element,
			c = r.actionItem,
			s = r.immediate,
			l = r.pluginInstance,
			f = V(),
			d = e.getState(),
			p = d.ixElements,
			v = d.ixSession,
			h = F(p, o),
			E = (p[h] || {}).refState,
			g = I.getRefType(o),
			_ = B(o, E, n, c, I, l);
		e.dispatch((0, m.instanceAdded)((0, a.default)({
			instanceId: f,
			elementId: h,
			origin: _,
			refType: g
		}, r))), At(document.body, "ix2-animation-started", f), s ? function (t, e) {
			var n = t.getState().ixParameters;
			t.dispatch((0, m.instanceStarted)(e, 0)), t.dispatch((0, m.animationFrameChanged)(performance.now(), n)), bt(t.getState().ixInstances[e], t)
		}(e, f) : (G({
			store: e,
			select: function (t) {
				return t.ixInstances[f]
			},
			onChange: bt
		}), i && e.dispatch((0, m.instanceStarted)(f, v.tick)))
	}

	function wt(t, e) {
		At(document.body, "ix2-animation-stopping", {
			instanceId: t.id,
			state: e.getState()
		});
		var n = t.elementId,
			r = t.actionItem,
			i = e.getState().ixElements[n] || {},
			o = i.ref;
		i.refType === R && Q(o, r, I), e.dispatch((0, m.instanceRemoved)(t.id))
	}

	function At(t, e, n) {
		var r = document.createEvent("CustomEvent");
		r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
	}

	function bt(t, e) {
		var n = t.active,
			r = t.continuous,
			i = t.complete,
			o = t.elementId,
			a = t.actionItem,
			u = t.actionTypeId,
			c = t.renderType,
			s = t.current,
			l = t.groupIndex,
			f = t.eventId,
			d = t.eventTarget,
			p = t.eventStateKey,
			v = t.actionListId,
			h = t.isCarrier,
			E = t.styleProp,
			g = t.verbose,
			_ = t.pluginInstance,
			y = e.getState(),
			T = y.ixData,
			O = y.ixSession,
			w = (T.events[f] || {}).mediaQueries,
			A = void 0 === w ? T.mediaQueryKeys : w;
		if (K(A, O.mediaQueryKey) && (r || n || i)) {
			if (s || c === N && i) {
				e.dispatch((0, m.elementStateChanged)(o, u, s, a));
				var b = e.getState().ixElements[o] || {},
					S = b.ref,
					C = b.refType,
					L = b.refState,
					x = L && L[u];
				switch (C) {
					case R:
						U(S, L, x, f, a, E, I, c, _)
				}
			}
			if (i) {
				if (h) {
					var P = Tt({
						store: e,
						eventId: f,
						eventTarget: d,
						eventStateKey: p,
						actionListId: v,
						groupIndex: l + 1,
						verbose: g
					});
					g && !P && e.dispatch((0, m.actionListPlaybackChanged)({
						actionListId: v,
						isPlaying: !1
					}))
				}
				wt(t, e)
			}
		}
	}
}, function (t, e, n) {
	var r = n(96);
	t.exports = function (t, e, n) {
		"__proto__" == e && r ? r(t, e, {
			configurable: !0,
			enumerable: !0,
			value: n,
			writable: !0
		}) : t[e] = n
	}
}, function (t, e, n) {
	var r = n(7),
		i = function () {
			try {
				var t = r(Object, "defineProperty");
				return t({}, "", {}), t
			} catch (t) {}
		}();
	t.exports = i
}, function (t, e) {
	t.exports = function (t, e, n) {
		return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
	}
}, function (t, e, n) {
	var r = n(5),
		i = Object.create,
		o = function () {
			function t() {}
			return function (e) {
				if (!r(e)) return {};
				if (i) return i(e);
				t.prototype = e;
				var n = new t;
				return t.prototype = void 0, n
			}
		}();
	t.exports = o
}, function (t, e, n) {
	var r = n(252),
		i = n(253),
		o = r ? function (t) {
			return r.get(t)
		} : i;
	t.exports = o
}, function (t, e, n) {
	var r = n(254),
		i = Object.prototype.hasOwnProperty;
	t.exports = function (t) {
		for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
			var a = n[o],
				u = a.func;
			if (null == u || u == t) return a.name
		}
		return e
	}
}, function (t, e, n) {
	n(102), n(103), n(105), n(12), n(107), n(260), n(261), n(262), n(263), n(264), n(269), n(270), n(271), n(272), t.exports = n(273)
}, function (t, e, n) {
	"use strict";
	var r = n(0)(n(11));
	! function () {
		if ("undefined" != typeof window) {
			var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
				e = !!t && parseInt(t[1], 10) >= 16;
			if (!("objectFit" in document.documentElement.style != !1) || e) {
				var n = function (t) {
						var e = t.parentNode;
						! function (t) {
							var e = window.getComputedStyle(t, null),
								n = e.getPropertyValue("position"),
								r = e.getPropertyValue("overflow"),
								i = e.getPropertyValue("display");
							n && "static" !== n || (t.style.position = "relative"), "hidden" !== r && (t.style.overflow = "hidden"), i && "inline" !== i || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill")
						}(e),
						function (t) {
							var e = window.getComputedStyle(t, null),
								n = {
									"max-width": "none",
									"max-height": "none",
									"min-width": "0px",
									"min-height": "0px",
									top: "auto",
									right: "auto",
									bottom: "auto",
									left: "auto",
									"margin-top": "0px",
									"margin-right": "0px",
									"margin-bottom": "0px",
									"margin-left": "0px"
								};
							for (var r in n) e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r])
						}(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px")
					},
					i = function (t) {
						if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
						else if (t && t.nodeName) t = [t];
						else {
							if ("object" !== (0, r.default)(t) || !t.length || !t[0].nodeName) return !1;
							t = t
						}
						for (var i = 0; i < t.length; i++)
							if (t[i].nodeName) {
								var o = t[i].nodeName.toLowerCase();
								if ("img" === o) {
									if (e) continue;
									t[i].complete ? n(t[i]) : t[i].addEventListener("load", function () {
										n(this)
									})
								} else "video" === o ? t[i].readyState > 0 ? n(t[i]) : t[i].addEventListener("loadedmetadata", function () {
									n(this)
								}) : n(t[i])
							}
						return !0
					};
				"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i
			} else window.objectFitPolyfill = function () {
				return !1
			}
		}
	}()
}, function (t, e, n) {
	"use strict";
	var r = n(2);
	r.define("brand", t.exports = function (t) {
		var e, n = {},
			i = document,
			o = t("html"),
			a = t("body"),
			u = ".w-webflow-badge",
			c = window.location,
			s = /PhantomJS/i.test(navigator.userAgent),
			l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

		function f() {
			var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
			t(e).attr("style", n ? "display: none !important;" : "")
		}

		function d() {
			var t = a.children(u),
				n = t.length && t.get(0) === e,
				i = r.env("editor");
			n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
		}
		return n.ready = function () {
			var n, r, a, u = o.attr("data-wf-status"),
				p = o.attr("data-wf-domain") || "";
			/\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
				marginRight: "8px",
				width: "16px"
			}), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(l, f).on(l, f))
		}, n
	})
}, function (t, e, n) {
	"use strict";
	var r = window.$,
		i = n(54) && r.tram;
	/*!
	 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
	 * _.each
	 * _.map
	 * _.find
	 * _.filter
	 * _.any
	 * _.contains
	 * _.delay
	 * _.defer
	 * _.throttle (webflow)
	 * _.debounce
	 * _.keys
	 * _.has
	 * _.now
	 *
	 * http://underscorejs.org
	 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Underscore may be freely distributed under the MIT license.
	 * @license MIT
	 */
	t.exports = function () {
		var t = {
				VERSION: "1.6.0-Webflow"
			},
			e = {},
			n = Array.prototype,
			r = Object.prototype,
			o = Function.prototype,
			a = (n.push, n.slice),
			u = (n.concat, r.toString, r.hasOwnProperty),
			c = n.forEach,
			s = n.map,
			l = (n.reduce, n.reduceRight, n.filter),
			f = (n.every, n.some),
			d = n.indexOf,
			p = (n.lastIndexOf, Array.isArray, Object.keys),
			v = (o.bind, t.each = t.forEach = function (n, r, i) {
				if (null == n) return n;
				if (c && n.forEach === c) n.forEach(r, i);
				else if (n.length === +n.length) {
					for (var o = 0, a = n.length; o < a; o++)
						if (r.call(i, n[o], o, n) === e) return
				} else {
					var u = t.keys(n);
					for (o = 0, a = u.length; o < a; o++)
						if (r.call(i, n[u[o]], u[o], n) === e) return
				}
				return n
			});
		t.map = t.collect = function (t, e, n) {
			var r = [];
			return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function (t, i, o) {
				r.push(e.call(n, t, i, o))
			}), r)
		}, t.find = t.detect = function (t, e, n) {
			var r;
			return h(t, function (t, i, o) {
				if (e.call(n, t, i, o)) return r = t, !0
			}), r
		}, t.filter = t.select = function (t, e, n) {
			var r = [];
			return null == t ? r : l && t.filter === l ? t.filter(e, n) : (v(t, function (t, i, o) {
				e.call(n, t, i, o) && r.push(t)
			}), r)
		};
		var h = t.some = t.any = function (n, r, i) {
			r || (r = t.identity);
			var o = !1;
			return null == n ? o : f && n.some === f ? n.some(r, i) : (v(n, function (t, n, a) {
				if (o || (o = r.call(i, t, n, a))) return e
			}), !!o)
		};
		t.contains = t.include = function (t, e) {
			return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function (t) {
				return t === e
			}))
		}, t.delay = function (t, e) {
			var n = a.call(arguments, 2);
			return setTimeout(function () {
				return t.apply(null, n)
			}, e)
		}, t.defer = function (e) {
			return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
		}, t.throttle = function (t) {
			var e, n, r;
			return function () {
				e || (e = !0, n = arguments, r = this, i.frame(function () {
					e = !1, t.apply(r, n)
				}))
			}
		}, t.debounce = function (e, n, r) {
			var i, o, a, u, c, s = function s() {
				var l = t.now() - u;
				l < n ? i = setTimeout(s, n - l) : (i = null, r || (c = e.apply(a, o), a = o = null))
			};
			return function () {
				a = this, o = arguments, u = t.now();
				var l = r && !i;
				return i || (i = setTimeout(s, n)), l && (c = e.apply(a, o), a = o = null), c
			}
		}, t.defaults = function (e) {
			if (!t.isObject(e)) return e;
			for (var n = 1, r = arguments.length; n < r; n++) {
				var i = arguments[n];
				for (var o in i) void 0 === e[o] && (e[o] = i[o])
			}
			return e
		}, t.keys = function (e) {
			if (!t.isObject(e)) return [];
			if (p) return p(e);
			var n = [];
			for (var r in e) t.has(e, r) && n.push(r);
			return n
		}, t.has = function (t, e) {
			return u.call(t, e)
		}, t.isObject = function (t) {
			return t === Object(t)
		}, t.now = Date.now || function () {
			return (new Date).getTime()
		}, t.templateSettings = {
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			escape: /<%-([\s\S]+?)%>/g
		};
		var E = /(.)^/,
			g = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			_ = /\\|'|\r|\n|\u2028|\u2029/g,
			m = function (t) {
				return "\\" + g[t]
			};
		return t.template = function (e, n, r) {
			!n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
			var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
				o = 0,
				a = "__p+='";
			e.replace(i, function (t, n, r, i, u) {
				return a += e.slice(o, u).replace(_, m), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
			}), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
			try {
				var u = new Function(n.variable || "obj", "_", a)
			} catch (t) {
				throw t.source = a, t
			}
			var c = function (e) {
					return u.call(this, e, t)
				},
				s = n.variable || "obj";
			return c.source = "function(" + s + "){\n" + a + "}", c
		}, t
	}()
}, function (t, e, n) {
	"use strict";
	var r = n(2);
	r.define("edit", t.exports = function (t, e, n) {
		if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function () {
				try {
					return window.top.__Cypress__
				} catch (t) {
					return !1
				}
			}()) return {
			exit: 1
		};
		var i, o = t(window),
			a = t(document.documentElement),
			u = document.location,
			c = "hashchange",
			s = n.load || function () {
				i = !0, window.WebflowEditor = !0, o.off(c, f),
					function (t) {
						var e = window.document.createElement("iframe");
						e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
						var n = function n(r) {
							"WF_third_party_cookies_unsupported" === r.data ? (g(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (g(e, n), t(!0))
						};
						e.onerror = function () {
							g(e, n), t(!1)
						}, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
					}(function (e) {
						t.ajax({
							url: E("https://editor-api.webflow.com/api/editor/view"),
							data: {
								siteId: a.attr("data-wf-site")
							},
							xhrFields: {
								withCredentials: !0
							},
							dataType: "json",
							crossDomain: !0,
							success: d(e)
						})
					})
			},
			l = !1;
		try {
			l = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
		} catch (t) {}

		function f() {
			i || /\?edit/.test(u.hash) && s()
		}

		function d(t) {
			return function (e) {
				e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function () {
					p(h(e.scriptPath), function () {
						window.WebflowEditor(e)
					})
				})) : console.error("Could not load editor data")
			}
		}

		function p(e, n) {
			t.ajax({
				type: "GET",
				url: e,
				dataType: "script",
				cache: !0
			}).then(n, v)
		}

		function v(t, e, n) {
			throw console.error("Could not load editor script: " + e), n
		}

		function h(t) {
			return t.indexOf("//") >= 0 ? t : E("https://editor-api.webflow.com" + t)
		}

		function E(t) {
			return t.replace(/([^:])\/\//g, "$1/")
		}

		function g(t, e) {
			window.removeEventListener("message", e, !1), t.remove()
		}
		return l ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, f).triggerHandler(c), {}
	})
}, function (t, e, n) {
	"use strict";
	var r = window.jQuery,
		i = {},
		o = [],
		a = {
			reset: function (t, e) {
				e.__wf_intro = null
			},
			intro: function (t, e) {
				e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
			},
			outro: function (t, e) {
				e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
			}
		};
	i.triggers = {}, i.types = {
		INTRO: "w-ix-intro.w-ix",
		OUTRO: "w-ix-outro.w-ix"
	}, i.init = function () {
		for (var t = o.length, e = 0; e < t; e++) {
			var n = o[e];
			n[0](0, n[1])
		}
		o = [], r.extend(i.triggers, a)
	}, i.async = function () {
		for (var t in a) {
			var e = a[t];
			a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
				o.push([e, n])
			})
		}
	}, i.async(), t.exports = i
}, function (t, e, n) {
	"use strict";
	var r = n(2),
		i = n(108);
	i.setEnv(r.env), r.define("ix2", t.exports = function () {
		return i
	})
}, function (t, e, n) {
	"use strict";
	var r = n(17),
		i = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.setEnv = function (t) {
		t() && (0, u.observeRequests)(s)
	}, e.init = function (t) {
		l(), (0, u.startEngine)({
			store: s,
			rawData: t,
			allowEvents: !0
		})
	}, e.destroy = l, e.actions = e.store = void 0;
	var o = n(55),
		a = i(n(120)),
		u = n(94),
		c = r(n(50));
	e.actions = c;
	var s = (0, o.createStore)(a.default);

	function l() {
		(0, u.stopEngine)(s)
	}
	e.store = s
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = n(57),
		i = n(112),
		o = n(113),
		a = "[object Null]",
		u = "[object Undefined]",
		c = r.default ? r.default.toStringTag : void 0;
	e.default = function (t) {
		return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
	}
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = n(111),
		i = "object" == typeof self && self && self.Object === Object && self,
		o = r.default || i || Function("return this")();
	e.default = o
}, function (t, e, n) {
	"use strict";
	n.r(e),
		function (t) {
			var n = "object" == typeof t && t && t.Object === Object && t;
			e.default = n
		}.call(this, n(29))
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = n(57),
		i = Object.prototype,
		o = i.hasOwnProperty,
		a = i.toString,
		u = r.default ? r.default.toStringTag : void 0;
	e.default = function (t) {
		var e = o.call(t, u),
			n = t[u];
		try {
			t[u] = void 0;
			var r = !0
		} catch (t) {}
		var i = a.call(t);
		return r && (e ? t[u] = n : delete t[u]), i
	}
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = Object.prototype.toString;
	e.default = function (t) {
		return r.call(t)
	}
}, function (t, e, n) {
	"use strict";
	n.r(e);
	var r = n(115),
		i = Object(r.default)(Object.getPrototypeOf, Object);
	e.default = i
}, function (t, e, n) {
	"use strict";
	n.r(e), e.default = function (t, e) {
		return function (n) {
			return t(e(n))
		}
	}
}, function (t, e, n) {
	"use strict";
	n.r(e), e.default = function (t) {
		return null != t && "object" == typeof t
	}
}, function (t, e, n) {
	"use strict";
	n.r(e),
		function (t, r) {
			var i, o = n(119);
			i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
			var a = Object(o.default)(i);
			e.default = a
		}.call(this, n(29), n(118)(t))
}, function (t, e) {
	t.exports = function (t) {
		if (!t.webpackPolyfill) {
			var e = Object.create(t);
			e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function () {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function () {
					return e.i
				}
			}), Object.defineProperty(e, "exports", {
				enumerable: !0
			}), e.webpackPolyfill = 1
		}
		return e
	}
}, function (t, e, n) {
	"use strict";

	function r(t) {
		var e, n = t.Symbol;
		return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
	}
	n.r(e), n.d(e, "default", function () {
		return r
	})
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var r = n(55),
		i = n(121),
		o = n(205),
		a = n(206),
		u = n(3),
		c = n(207),
		s = n(208),
		l = u.IX2ElementsReducer.ixElements,
		f = (0, r.combineReducers)({
			ixData: i.ixData,
			ixRequest: o.ixRequest,
			ixSession: a.ixSession,
			ixElements: l,
			ixInstances: c.ixInstances,
			ixParameters: s.ixParameters
		});
	e.default = f
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.ixData = void 0;
	var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
	e.ixData = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
			e = arguments.length > 1 ? arguments[1] : void 0;
		switch (e.type) {
			case r:
				return e.payload.ixData || Object.freeze({});
			default:
				return t
		}
	}
}, function (t, e, n) {
	var r = n(123),
		i = n(175),
		o = n(78);
	t.exports = function (t) {
		var e = i(t);
		return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
			return n === t || r(n, t, e)
		}
	}
}, function (t, e, n) {
	var r = n(64),
		i = n(68),
		o = 1,
		a = 2;
	t.exports = function (t, e, n, u) {
		var c = n.length,
			s = c,
			l = !u;
		if (null == t) return !s;
		for (t = Object(t); c--;) {
			var f = n[c];
			if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
		}
		for (; ++c < s;) {
			var d = (f = n[c])[0],
				p = t[d],
				v = f[1];
			if (l && f[2]) {
				if (void 0 === p && !(d in t)) return !1
			} else {
				var h = new r;
				if (u) var E = u(p, v, d, t, e, h);
				if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
			}
		}
		return !0
	}
}, function (t, e) {
	t.exports = function () {
		this.__data__ = [], this.size = 0
	}
}, function (t, e, n) {
	var r = n(19),
		i = Array.prototype.splice;
	t.exports = function (t) {
		var e = this.__data__,
			n = r(e, t);
		return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
	}
}, function (t, e, n) {
	var r = n(19);
	t.exports = function (t) {
		var e = this.__data__,
			n = r(e, t);
		return n < 0 ? void 0 : e[n][1]
	}
}, function (t, e, n) {
	var r = n(19);
	t.exports = function (t) {
		return r(this.__data__, t) > -1
	}
}, function (t, e, n) {
	var r = n(19);
	t.exports = function (t, e) {
		var n = this.__data__,
			i = r(n, t);
		return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
	}
}, function (t, e, n) {
	var r = n(18);
	t.exports = function () {
		this.__data__ = new r, this.size = 0
	}
}, function (t, e) {
	t.exports = function (t) {
		var e = this.__data__,
			n = e.delete(t);
		return this.size = e.size, n
	}
}, function (t, e) {
	t.exports = function (t) {
		return this.__data__.get(t)
	}
}, function (t, e) {
	t.exports = function (t) {
		return this.__data__.has(t)
	}
}, function (t, e, n) {
	var r = n(18),
		i = n(33),
		o = n(34),
		a = 200;
	t.exports = function (t, e) {
		var n = this.__data__;
		if (n instanceof r) {
			var u = n.__data__;
			if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
			n = this.__data__ = new o(u)
		}
		return n.set(t, e), this.size = n.size, this
	}
}, function (t, e, n) {
	var r = n(65),
		i = n(137),
		o = n(5),
		a = n(67),
		u = /^\[object .+?Constructor\]$/,
		c = Function.prototype,
		s = Object.prototype,
		l = c.toString,
		f = s.hasOwnProperty,
		d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	t.exports = function (t) {
		return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
	}
}, function (t, e, n) {
	var r = n(13),
		i = Object.prototype,
		o = i.hasOwnProperty,
		a = i.toString,
		u = r ? r.toStringTag : void 0;
	t.exports = function (t) {
		var e = o.call(t, u),
			n = t[u];
		try {
			t[u] = void 0;
			var r = !0
		} catch (t) {}
		var i = a.call(t);
		return r && (e ? t[u] = n : delete t[u]), i
	}
}, function (t, e) {
	var n = Object.prototype.toString;
	t.exports = function (t) {
		return n.call(t)
	}
}, function (t, e, n) {
	var r, i = n(138),
		o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
	t.exports = function (t) {
		return !!o && o in t
	}
}, function (t, e, n) {
	var r = n(4)["__core-js_shared__"];
	t.exports = r
}, function (t, e) {
	t.exports = function (t, e) {
		return null == t ? void 0 : t[e]
	}
}, function (t, e, n) {
	var r = n(141),
		i = n(18),
		o = n(33);
	t.exports = function () {
		this.size = 0, this.__data__ = {
			hash: new r,
			map: new(o || i),
			string: new r
		}
	}
}, function (t, e, n) {
	var r = n(142),
		i = n(143),
		o = n(144),
		a = n(145),
		u = n(146);

	function c(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.clear(); ++e < n;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
	var r = n(20);
	t.exports = function () {
		this.__data__ = r ? r(null) : {}, this.size = 0
	}
}, function (t, e) {
	t.exports = function (t) {
		var e = this.has(t) && delete this.__data__[t];
		return this.size -= e ? 1 : 0, e
	}
}, function (t, e, n) {
	var r = n(20),
		i = "__lodash_hash_undefined__",
		o = Object.prototype.hasOwnProperty;
	t.exports = function (t) {
		var e = this.__data__;
		if (r) {
			var n = e[t];
			return n === i ? void 0 : n
		}
		return o.call(e, t) ? e[t] : void 0
	}
}, function (t, e, n) {
	var r = n(20),
		i = Object.prototype.hasOwnProperty;
	t.exports = function (t) {
		var e = this.__data__;
		return r ? void 0 !== e[t] : i.call(e, t)
	}
}, function (t, e, n) {
	var r = n(20),
		i = "__lodash_hash_undefined__";
	t.exports = function (t, e) {
		var n = this.__data__;
		return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
	}
}, function (t, e, n) {
	var r = n(21);
	t.exports = function (t) {
		var e = r(this, t).delete(t);
		return this.size -= e ? 1 : 0, e
	}
}, function (t, e) {
	t.exports = function (t) {
		var e = typeof t;
		return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
	}
}, function (t, e, n) {
	var r = n(21);
	t.exports = function (t) {
		return r(this, t).get(t)
	}
}, function (t, e, n) {
	var r = n(21);
	t.exports = function (t) {
		return r(this, t).has(t)
	}
}, function (t, e, n) {
	var r = n(21);
	t.exports = function (t, e) {
		var n = r(this, t),
			i = n.size;
		return n.set(t, e), this.size += n.size == i ? 0 : 1, this
	}
}, function (t, e, n) {
	var r = n(64),
		i = n(69),
		o = n(158),
		a = n(162),
		u = n(42),
		c = n(1),
		s = n(36),
		l = n(38),
		f = 1,
		d = "[object Arguments]",
		p = "[object Array]",
		v = "[object Object]",
		h = Object.prototype.hasOwnProperty;
	t.exports = function (t, e, n, E, g, _) {
		var m = c(t),
			I = c(e),
			y = m ? p : u(t),
			T = I ? p : u(e),
			O = (y = y == d ? v : y) == v,
			w = (T = T == d ? v : T) == v,
			A = y == T;
		if (A && s(t)) {
			if (!s(e)) return !1;
			m = !0, O = !1
		}
		if (A && !O) return _ || (_ = new r), m || l(t) ? i(t, e, n, E, g, _) : o(t, e, y, n, E, g, _);
		if (!(n & f)) {
			var b = O && h.call(t, "__wrapped__"),
				S = w && h.call(e, "__wrapped__");
			if (b || S) {
				var R = b ? t.value() : t,
					N = S ? e.value() : e;
				return _ || (_ = new r), g(R, N, n, E, _)
			}
		}
		return !!A && (_ || (_ = new r), a(t, e, n, E, g, _))
	}
}, function (t, e, n) {
	var r = n(34),
		i = n(154),
		o = n(155);

	function a(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.__data__ = new r; ++e < n;) this.add(t[e])
	}
	a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function (t, e) {
	var n = "__lodash_hash_undefined__";
	t.exports = function (t) {
		return this.__data__.set(t, n), this
	}
}, function (t, e) {
	t.exports = function (t) {
		return this.__data__.has(t)
	}
}, function (t, e) {
	t.exports = function (t, e) {
		for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
			if (e(t[n], n, t)) return !0;
		return !1
	}
}, function (t, e) {
	t.exports = function (t, e) {
		return t.has(e)
	}
}, function (t, e, n) {
	var r = n(13),
		i = n(159),
		o = n(32),
		a = n(69),
		u = n(160),
		c = n(161),
		s = 1,
		l = 2,
		f = "[object Boolean]",
		d = "[object Date]",
		p = "[object Error]",
		v = "[object Map]",
		h = "[object Number]",
		E = "[object RegExp]",
		g = "[object Set]",
		_ = "[object String]",
		m = "[object Symbol]",
		I = "[object ArrayBuffer]",
		y = "[object DataView]",
		T = r ? r.prototype : void 0,
		O = T ? T.valueOf : void 0;
	t.exports = function (t, e, n, r, T, w, A) {
		switch (n) {
			case y:
				if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
				t = t.buffer, e = e.buffer;
			case I:
				return !(t.byteLength != e.byteLength || !w(new i(t), new i(e)));
			case f:
			case d:
			case h:
				return o(+t, +e);
			case p:
				return t.name == e.name && t.message == e.message;
			case E:
			case _:
				return t == e + "";
			case v:
				var b = u;
			case g:
				var S = r & s;
				if (b || (b = c), t.size != e.size && !S) return !1;
				var R = A.get(t);
				if (R) return R == e;
				r |= l, A.set(t, e);
				var N = a(b(t), b(e), r, T, w, A);
				return A.delete(t), N;
			case m:
				if (O) return O.call(t) == O.call(e)
		}
		return !1
	}
}, function (t, e, n) {
	var r = n(4).Uint8Array;
	t.exports = r
}, function (t, e) {
	t.exports = function (t) {
		var e = -1,
			n = Array(t.size);
		return t.forEach(function (t, r) {
			n[++e] = [r, t]
		}), n
	}
}, function (t, e) {
	t.exports = function (t) {
		var e = -1,
			n = Array(t.size);
		return t.forEach(function (t) {
			n[++e] = t
		}), n
	}
}, function (t, e, n) {
	var r = n(163),
		i = 1,
		o = Object.prototype.hasOwnProperty;
	t.exports = function (t, e, n, a, u, c) {
		var s = n & i,
			l = r(t),
			f = l.length;
		if (f != r(e).length && !s) return !1;
		for (var d = f; d--;) {
			var p = l[d];
			if (!(s ? p in e : o.call(e, p))) return !1
		}
		var v = c.get(t);
		if (v && c.get(e)) return v == e;
		var h = !0;
		c.set(t, e), c.set(e, t);
		for (var E = s; ++d < f;) {
			var g = t[p = l[d]],
				_ = e[p];
			if (a) var m = s ? a(_, g, p, e, t, c) : a(g, _, p, t, e, c);
			if (!(void 0 === m ? g === _ || u(g, _, n, a, c) : m)) {
				h = !1;
				break
			}
			E || (E = "constructor" == p)
		}
		if (h && !E) {
			var I = t.constructor,
				y = e.constructor;
			I != y && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof y && y instanceof y) && (h = !1)
		}
		return c.delete(t), c.delete(e), h
	}
}, function (t, e, n) {
	var r = n(70),
		i = n(71),
		o = n(22);
	t.exports = function (t) {
		return r(t, o, i)
	}
}, function (t, e) {
	t.exports = function (t, e) {
		for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
			var a = t[n];
			e(a, n, t) && (o[i++] = a)
		}
		return o
	}
}, function (t, e) {
	t.exports = function (t, e) {
		for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
		return r
	}
}, function (t, e, n) {
	var r = n(9),
		i = n(8),
		o = "[object Arguments]";
	t.exports = function (t) {
		return i(t) && r(t) == o
	}
}, function (t, e) {
	t.exports = function () {
		return !1
	}
}, function (t, e, n) {
	var r = n(9),
		i = n(39),
		o = n(8),
		a = {};
	a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
		return o(t) && i(t.length) && !!a[r(t)]
	}
}, function (t, e) {
	t.exports = function (t) {
		return function (e) {
			return t(e)
		}
	}
}, function (t, e, n) {
	(function (t) {
		var r = n(66),
			i = e && !e.nodeType && e,
			o = i && "object" == typeof t && t && !t.nodeType && t,
			a = o && o.exports === i && r.process,
			u = function () {
				try {
					var t = o && o.require && o.require("util").types;
					return t || a && a.binding && a.binding("util")
				} catch (t) {}
			}();
		t.exports = u
	}).call(this, n(74)(t))
}, function (t, e, n) {
	var r = n(75)(Object.keys, Object);
	t.exports = r
}, function (t, e, n) {
	var r = n(7)(n(4), "DataView");
	t.exports = r
}, function (t, e, n) {
	var r = n(7)(n(4), "Promise");
	t.exports = r
}, function (t, e, n) {
	var r = n(7)(n(4), "Set");
	t.exports = r
}, function (t, e, n) {
	var r = n(77),
		i = n(22);
	t.exports = function (t) {
		for (var e = i(t), n = e.length; n--;) {
			var o = e[n],
				a = t[o];
			e[n] = [o, a, r(a)]
		}
		return e
	}
}, function (t, e, n) {
	var r = n(68),
		i = n(24),
		o = n(180),
		a = n(44),
		u = n(77),
		c = n(78),
		s = n(14),
		l = 1,
		f = 2;
	t.exports = function (t, e) {
		return a(t) && u(e) ? c(s(t), e) : function (n) {
			var a = i(n, t);
			return void 0 === a && a === e ? o(n, t) : r(e, a, l | f)
		}
	}
}, function (t, e, n) {
	var r = n(178),
		i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
		o = /\\(\\)?/g,
		a = r(function (t) {
			var e = [];
			return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, r, i) {
				e.push(r ? i.replace(o, "$1") : n || t)
			}), e
		});
	t.exports = a
}, function (t, e, n) {
	var r = n(179),
		i = 500;
	t.exports = function (t) {
		var e = r(t, function (t) {
				return n.size === i && n.clear(), t
			}),
			n = e.cache;
		return e
	}
}, function (t, e, n) {
	var r = n(34),
		i = "Expected a function";

	function o(t, e) {
		if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
		var n = function () {
			var r = arguments,
				i = e ? e.apply(this, r) : r[0],
				o = n.cache;
			if (o.has(i)) return o.get(i);
			var a = t.apply(this, r);
			return n.cache = o.set(i, a) || o, a
		};
		return n.cache = new(o.Cache || r), n
	}
	o.Cache = r, t.exports = o
}, function (t, e, n) {
	var r = n(181),
		i = n(182);
	t.exports = function (t, e) {
		return null != t && i(t, e, r)
	}
}, function (t, e) {
	t.exports = function (t, e) {
		return null != t && e in Object(t)
	}
}, function (t, e, n) {
	var r = n(25),
		i = n(23),
		o = n(1),
		a = n(37),
		u = n(39),
		c = n(14);
	t.exports = function (t, e, n) {
		for (var s = -1, l = (e = r(e, t)).length, f = !1; ++s < l;) {
			var d = c(e[s]);
			if (!(f = null != t && n(t, d))) break;
			t = t[d]
		}
		return f || ++s != l ? f : !!(l = null == t ? 0 : t.length) && u(l) && a(d, l) && (o(t) || i(t))
	}
}, function (t, e, n) {
	var r = n(82),
		i = n(184),
		o = n(44),
		a = n(14);
	t.exports = function (t) {
		return o(t) ? r(a(t)) : i(t)
	}
}, function (t, e, n) {
	var r = n(43);
	t.exports = function (t) {
		return function (e) {
			return r(e, t)
		}
	}
}, function (t, e, n) {
	var r = n(83),
		i = n(6),
		o = n(46),
		a = Math.max;
	t.exports = function (t, e, n) {
		var u = null == t ? 0 : t.length;
		if (!u) return -1;
		var c = null == n ? 0 : o(n);
		return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
	}
}, function (t, e, n) {
	var r = n(47),
		i = 1 / 0,
		o = 1.7976931348623157e308;
	t.exports = function (t) {
		return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
	}
}, function (t, e) {
	t.exports = function (t) {
		if (Array.isArray(t)) {
			for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
			return n
		}
	}
}, function (t, e) {
	t.exports = function (t) {
		if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
	}
}, function (t, e) {
	t.exports = function () {
		throw new TypeError("Invalid attempt to spread non-iterable instance")
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.createElementState = c, e.mergeActionState = s, e.ixElements = void 0;
	var r = n(15),
		i = n(49),
		o = n(88),
		a = {},
		u = "refState";

	function c(t, e, n, o, a) {
		var u = n === i.PLAIN_OBJECT ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
		return (0, r.mergeIn)(t, [o], {
			id: o,
			ref: e,
			refId: u,
			refType: n
		})
	}

	function s(t, e, n, i, o) {
		var a = function (t) {
				var e = t.config;
				return l.reduce(function (t, n) {
					var r = n[0],
						i = n[1],
						o = e[r],
						a = e[i];
					return null != o && null != a && (t[i] = a), t
				}, {})
			}(o),
			c = [e, u, n];
		return (0, r.mergeIn)(t, c, i, a)
	}
	e.ixElements = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
			e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		switch (e.type) {
			case o.IX2_SESSION_STOPPED:
				return a;
			case o.IX2_INSTANCE_ADDED:
				var n = e.payload,
					i = n.elementId,
					u = n.element,
					l = n.origin,
					f = n.actionItem,
					d = n.refType,
					p = f.actionTypeId,
					v = t;
				return (0, r.getIn)(v, [i, u]) !== u && (v = c(v, u, d, i, f)), s(v, i, p, l, f);
			case o.IX2_ELEMENT_STATE_CHANGED:
				var h = e.payload;
				return s(t, h.elementId, h.actionTypeId, h.current, h.actionItem);
			default:
				return t
		}
	};
	var l = [
		[i.CONFIG_X_VALUE, i.CONFIG_X_UNIT],
		[i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT],
		[i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT],
		[i.CONFIG_VALUE, i.CONFIG_UNIT]
	]
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.IX2_EVENT_ENGINE_EVENT_TYPES = e.DIRECTIONS = e.EVENT_APPLIES_TO = e.EVENT_ACTION_TYPES = e.BASED_ON_TYPES = e.AXES = void 0;
	e.AXES = {
		X_AXIS: "X_AXIS",
		Y_AXIS: "Y_AXIS"
	};
	e.BASED_ON_TYPES = {
		ELEMENT: "ELEMENT",
		VIEWPORT: "VIEWPORT",
		PAGE: "PAGE"
	};
	e.EVENT_ACTION_TYPES = {
		START: "START",
		STOP: "STOP",
		CONTINUOUS: "CONTINUOUS",
		CHANGE_COMBO: "CHANGE_COMBO"
	};
	e.EVENT_APPLIES_TO = {
		ELEMENT: "ELEMENT",
		CLASS: "CLASS",
		PAGE: "PAGE"
	};
	e.DIRECTIONS = {
		LEFT: "LEFT",
		RIGHT: "RIGHT",
		BOTTOM: "BOTTOM",
		TOP: "TOP",
		BOTTOM_LEFT: "BOTTOM_LEFT",
		BOTTOM_RIGHT: "BOTTOM_RIGHT",
		TOP_RIGHT: "TOP_RIGHT",
		TOP_LEFT: "TOP_LEFT",
		CLOCKWISE: "CLOCKWISE",
		COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
	};
	e.IX2_EVENT_ENGINE_EVENT_TYPES = {
		MOUSE_CLICK: "MOUSE_CLICK",
		MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
		MOUSE_DOWN: "MOUSE_DOWN",
		MOUSE_UP: "MOUSE_UP",
		MOUSE_OVER: "MOUSE_OVER",
		MOUSE_OUT: "MOUSE_OUT",
		MOUSE_MOVE: "MOUSE_MOVE",
		SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
		SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
		SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
		TAB_ACTIVE: "TAB_ACTIVE",
		TAB_INACTIVE: "TAB_INACTIVE",
		NAVBAR_OPEN: "NAVBAR_OPEN",
		NAVBAR_CLOSE: "NAVBAR_CLOSE",
		SLIDER_ACTIVE: "SLIDER_ACTIVE",
		SLIDER_INACTIVE: "SLIDER_INACTIVE",
		DROPDOWN_OPEN: "DROPDOWN_OPEN",
		DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
		COMPONENT_ACTIVE: "COMPONENT_ACTIVE",
		COMPONENT_INACTIVE: "COMPONENT_INACTIVE",
		PAGE_START: "PAGE_START",
		PAGE_FINISH: "PAGE_FINISH",
		PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
		PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
		PAGE_SCROLL: "PAGE_SCROLL",
		ELEMENT: "ELEMENT",
		VIEWPORT: "VIEWPORT",
		PAGE: "PAGE",
		ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
		ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE"
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.IX2_INTERACTION_TYPES = void 0;
	e.IX2_INTERACTION_TYPES = {
		MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
		MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
		SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
		PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
		PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
		MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
		SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
		MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
		PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
		DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
		NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
		TAB_INTERACTION: "TAB_INTERACTION",
		SLIDER_INTERACTION: "SLIDER_INTERACTION",
		ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION"
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
	e.getPluginConfig = function (t) {
		return t.value
	};
	e.getPluginDuration = function (t, e) {
		if ("auto" !== e.config.duration) return null;
		var n = parseFloat(t.getAttribute("data-duration"));
		return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
	};
	e.getPluginOrigin = function (t) {
		return t || {
			value: 0
		}
	};
	e.getPluginDestination = function (t) {
		return {
			value: t.value
		}
	};
	e.createPluginInstance = function (t) {
		var e = window.Webflow.require("lottie").createInstance(t);
		return e.stop(), e.setSubframe(!0), e
	};
	e.renderPlugin = function (t, e, n) {
		if (t) {
			var r = e[n.actionTypeId].value / 100;
			t.goToFrame(t.frames * r)
		}
	};
	e.clearPlugin = function (t) {
		window.Webflow.require("lottie").createInstance(t).stop()
	}
}, function (t, e, n) {
	"use strict";
	var r, i, o, a = n(0),
		u = a(n(11)),
		c = a(n(16)),
		s = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.getInstanceId = function () {
		return "i" + b++
	}, e.getElementId = function (t, e) {
		for (var n in t) {
			var r = t[n];
			if (r && r.ref === e) return r.id
		}
		return "e" + S++
	}, e.reifyState = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			e = t.events,
			n = t.actionLists,
			r = t.site,
			i = (0, f.default)(e, function (t, e) {
				var n = e.eventTypeId;
				return t[n] || (t[n] = {}), t[n][e.id] = e, t
			}, {}),
			o = r && r.mediaQueries,
			a = [];
		o ? a = o.map(function (t) {
			return t.key
		}) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
		return {
			ixData: {
				events: e,
				actionLists: n,
				eventTypeMap: i,
				mediaQueries: o,
				mediaQueryKeys: a
			}
		}
	}, e.observeStore = function (t) {
		var e = t.store,
			n = t.select,
			r = t.onChange,
			i = t.comparator,
			o = void 0 === i ? R : i,
			a = e.getState,
			u = (0, e.subscribe)(function () {
				var t = n(a());
				if (null == t) return void u();
				o(t, c) || r(c = t, e)
			}),
			c = n(a());
		return u
	}, e.getAffectedElements = C, e.getComputedStyle = function (t) {
		var e = t.element,
			n = t.actionItem;
		if (!y.IS_BROWSER_ENV) return {};
		switch (n.actionTypeId) {
			case I.STYLE_SIZE:
			case I.STYLE_BACKGROUND_COLOR:
			case I.STYLE_BORDER:
			case I.STYLE_TEXT_COLOR:
			case I.GENERAL_DISPLAY:
				return window.getComputedStyle(e);
			default:
				return {}
		}
	}, e.getInstanceOrigin = function (t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			r = arguments.length > 3 ? arguments[3] : void 0,
			i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
			o = r.actionTypeId,
			a = r.config;
		if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(e[o]);
		switch (o) {
			case I.TRANSFORM_MOVE:
			case I.TRANSFORM_SCALE:
			case I.TRANSFORM_ROTATE:
			case I.TRANSFORM_SKEW:
				return e[o] || M[o];
			case I.STYLE_FILTER:
				return x(e[o], r.config.filters);
			case I.STYLE_OPACITY:
				return {
					value: (0, l.default)(parseFloat(i(t, _.OPACITY)), 1)
				};
			case I.STYLE_SIZE:
				var u, c, s = i(t, _.WIDTH),
					f = i(t, _.HEIGHT);
				return u = a.widthUnit === _.AUTO ? L.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, l.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === _.AUTO ? L.test(f) ? parseFloat(f) : parseFloat(n.height) : (0, l.default)(parseFloat(f), parseFloat(n.height)), {
					widthValue: u,
					heightValue: c
				};
			case I.STYLE_BACKGROUND_COLOR:
			case I.STYLE_BORDER:
			case I.STYLE_TEXT_COLOR:
				return function (t) {
					var e = t.element,
						n = t.actionTypeId,
						r = t.computedStyle,
						i = t.getStyle,
						o = O[n],
						a = i(e, o),
						u = V.test(a) ? a : r[o],
						c = function (t, e) {
							var n = t.exec(e);
							return n ? n[1] : ""
						}(U, u).split(_.COMMA_DELIMITER);
					return {
						rValue: (0, l.default)(parseInt(c[0], 10), 255),
						gValue: (0, l.default)(parseInt(c[1], 10), 255),
						bValue: (0, l.default)(parseInt(c[2], 10), 255),
						aValue: (0, l.default)(parseFloat(c[3]), 1)
					}
				}({
					element: t,
					actionTypeId: o,
					computedStyle: n,
					getStyle: i
				});
			case I.GENERAL_DISPLAY:
				return {
					value: (0, l.default)(i(t, _.DISPLAY), n.display)
				};
			case I.OBJECT_VALUE:
				return e[o] || {
					value: 0
				};
			default:
				return
		}
	}, e.getDestinationValues = function (t) {
		var e = t.element,
			n = t.actionItem,
			r = t.elementApi,
			i = n.actionTypeId;
		if ((0, g.isPluginType)(i)) return (0, g.getPluginDestination)(i)(n.config);
		switch (i) {
			case I.TRANSFORM_MOVE:
			case I.TRANSFORM_SCALE:
			case I.TRANSFORM_ROTATE:
			case I.TRANSFORM_SKEW:
				var o = n.config,
					a = o.xValue,
					u = o.yValue,
					c = o.zValue;
				return {
					xValue: a,
					yValue: u,
					zValue: c
				};
			case I.STYLE_SIZE:
				var s = r.getStyle,
					l = r.setStyle,
					f = r.getProperty,
					d = n.config,
					p = d.widthUnit,
					v = d.heightUnit,
					h = n.config,
					E = h.widthValue,
					m = h.heightValue;
				if (!y.IS_BROWSER_ENV) return {
					widthValue: E,
					heightValue: m
				};
				if (p === _.AUTO) {
					var T = s(e, _.WIDTH);
					l(e, _.WIDTH, ""), E = f(e, "offsetWidth"), l(e, _.WIDTH, T)
				}
				if (v === _.AUTO) {
					var O = s(e, _.HEIGHT);
					l(e, _.HEIGHT, ""), m = f(e, "offsetHeight"), l(e, _.HEIGHT, O)
				}
				return {
					widthValue: E,
					heightValue: m
				};
			case I.STYLE_BACKGROUND_COLOR:
			case I.STYLE_BORDER:
			case I.STYLE_TEXT_COLOR:
				var w = n.config,
					A = w.rValue,
					b = w.gValue,
					S = w.bValue,
					R = w.aValue;
				return {
					rValue: A,
					gValue: b,
					bValue: S,
					aValue: R
				};
			case I.STYLE_FILTER:
				return n.config.filters.reduce(P, {});
			default:
				var N = n.config.value;
				return {
					value: N
				}
		}
	}, e.getRenderType = D, e.getStyleProp = function (t, e) {
		return t === _.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null
	}, e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
		switch (u) {
			case _.RENDER_TRANSFORM:
				return function (t, e, n, r, i) {
					var o = G.map(function (t) {
							var n = M[t],
								r = e[t] || {},
								i = r.xValue,
								o = void 0 === i ? n.xValue : i,
								a = r.yValue,
								u = void 0 === a ? n.yValue : a,
								c = r.zValue,
								s = void 0 === c ? n.zValue : c,
								l = r.xUnit,
								f = void 0 === l ? "" : l,
								d = r.yUnit,
								p = void 0 === d ? "" : d,
								v = r.zUnit,
								h = void 0 === v ? "" : v;
							switch (t) {
								case I.TRANSFORM_MOVE:
									return "".concat(_.TRANSLATE_3D, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
								case I.TRANSFORM_SCALE:
									return "".concat(_.SCALE_3D, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
								case I.TRANSFORM_ROTATE:
									return "".concat(_.ROTATE_X, "(").concat(o).concat(f, ") ").concat(_.ROTATE_Y, "(").concat(u).concat(p, ") ").concat(_.ROTATE_Z, "(").concat(s).concat(h, ")");
								case I.TRANSFORM_SKEW:
									return "".concat(_.SKEW, "(").concat(o).concat(f, ", ").concat(u).concat(p, ")");
								default:
									return ""
							}
						}).join(" "),
						a = i.setStyle;
					k(t, y.TRANSFORM_PREFIXED, i), a(t, y.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, l = c.xValue, f = c.yValue, d = c.zValue, (s === I.TRANSFORM_MOVE && void 0 !== d || s === I.TRANSFORM_SCALE && void 0 !== d || s === I.TRANSFORM_ROTATE && (void 0 !== l || void 0 !== f)) && a(t, y.TRANSFORM_STYLE_PREFIXED, _.PRESERVE_3D);
					var u, c, s, l, f, d
				}(t, e, n, i, a);
			case _.RENDER_STYLE:
				return function (t, e, n, r, i, o) {
					var a = o.setStyle,
						u = r.actionTypeId,
						c = r.config;
					switch (u) {
						case I.STYLE_SIZE:
							var s = r.config,
								l = s.widthUnit,
								d = void 0 === l ? "" : l,
								p = s.heightUnit,
								v = void 0 === p ? "" : p,
								h = n.widthValue,
								E = n.heightValue;
							void 0 !== h && (d === _.AUTO && (d = "px"), k(t, _.WIDTH, o), a(t, _.WIDTH, h + d)), void 0 !== E && (v === _.AUTO && (v = "px"), k(t, _.HEIGHT, o), a(t, _.HEIGHT, E + v));
							break;
						case I.STYLE_FILTER:
							! function (t, e, n, r) {
								var i = (0, f.default)(e, function (t, e, r) {
										return "".concat(t, " ").concat(r, "(").concat(e).concat(j(r, n), ")")
									}, ""),
									o = r.setStyle;
								k(t, _.FILTER, r), o(t, _.FILTER, i)
							}(t, n, c, o);
							break;
						case I.STYLE_BACKGROUND_COLOR:
						case I.STYLE_BORDER:
						case I.STYLE_TEXT_COLOR:
							var g = O[u],
								m = Math.round(n.rValue),
								y = Math.round(n.gValue),
								T = Math.round(n.bValue),
								w = n.aValue;
							k(t, g, o), a(t, g, w >= 1 ? "rgb(".concat(m, ",").concat(y, ",").concat(T, ")") : "rgba(".concat(m, ",").concat(y, ",").concat(T, ",").concat(w, ")"));
							break;
						default:
							var A = c.unit,
								b = void 0 === A ? "" : A;
							k(t, i, o), a(t, i, n.value + b)
					}
				}(t, 0, n, i, o, a);
			case _.RENDER_GENERAL:
				return function (t, e, n) {
					var r = n.setStyle;
					switch (e.actionTypeId) {
						case I.GENERAL_DISPLAY:
							var i = e.config.value;
							return void(i === _.FLEX && y.IS_BROWSER_ENV ? r(t, _.DISPLAY, y.FLEX_PREFIXED) : r(t, _.DISPLAY, i))
					}
				}(t, i, a);
			case _.RENDER_PLUGIN:
				var s = i.actionTypeId;
				if ((0, g.isPluginType)(s)) return (0, g.renderPlugin)(s)(c, e, i)
		}
	}, e.clearAllStyles = function (t) {
		var e = t.store,
			n = t.elementApi,
			r = e.getState().ixData,
			i = r.events,
			o = void 0 === i ? {} : i,
			a = r.actionLists,
			u = void 0 === a ? {} : a;
		Object.keys(o).forEach(function (t) {
			var e = o[t],
				r = e.action.config,
				i = r.actionListId,
				a = u[i];
			a && W({
				actionList: a,
				event: e,
				elementApi: n
			})
		}), Object.keys(u).forEach(function (t) {
			W({
				actionList: u[t],
				elementApi: n
			})
		})
	}, e.cleanupHTMLElement = function (t, e, n) {
		var r = n.setStyle,
			i = n.getStyle,
			o = e.actionTypeId;
		if (o === I.STYLE_SIZE) {
			var a = e.config;
			a.widthUnit === _.AUTO && r(t, _.WIDTH, ""), a.heightUnit === _.AUTO && r(t, _.HEIGHT, "")
		}
		i(t, _.WILL_CHANGE) && H({
			effect: X,
			actionTypeId: o,
			elementApi: n
		})(t)
	}, e.getMaxDurationItemIndex = z, e.getActionListProgress = function (t, e) {
		var n = t.actionItemGroups,
			r = t.useFirstGroupAsInitialState,
			i = e.actionItem,
			o = e.verboseTimeElapsed,
			a = void 0 === o ? 0 : o,
			u = 0,
			c = 0;
		return n.forEach(function (t, e) {
			if (!r || 0 !== e) {
				var n = t.actionItems,
					o = n[z(n)],
					s = o.config,
					l = o.actionTypeId;
				i.id === o.id && (c = u + a);
				var f = D(l) === _.RENDER_GENERAL ? 0 : s.duration;
				u += s.delay + f
			}
		}), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
	}, e.reduceListToGroup = function (t) {
		var e = t.actionList,
			n = t.actionItemId,
			r = t.rawData,
			i = e.actionItemGroups,
			o = e.continuousParameterGroups,
			a = [],
			u = function (t) {
				return a.push((0, v.mergeIn)(t, ["config"], {
					delay: 0,
					duration: 0
				})), t.id === n
			};
		return i && i.some(function (t) {
			return t.actionItems.some(u)
		}), o && o.some(function (t) {
			return t.continuousActionGroups.some(function (t) {
				return t.actionItems.some(u)
			})
		}), (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {
			id: e.id,
			actionItemGroups: [{
				actionItems: a
			}]
		}))
	}, e.shouldNamespaceEventParameter = function (t, e) {
		var n = e.basedOn;
		return t === m.SCROLLING_IN_VIEW && (n === m.ELEMENT || null == n) || t === m.MOUSE_MOVE && n === m.ELEMENT
	}, e.getNamespacedParameterId = function (t, e) {
		return t + _.COLON_DELIMITER + e
	}, e.shouldAllowMediaQuery = function (t, e) {
		if (null == e) return !0;
		return -1 !== t.indexOf(e)
	}, e.mediaQueriesEqual = function (t, e) {
		return (0, h.default)(t && t.sort(), e && e.sort())
	}, e.stringifyTarget = function (t) {
		if ("string" == typeof t) return t;
		var e = t.id,
			n = void 0 === e ? "" : e,
			r = t.selector,
			i = void 0 === r ? "" : r,
			o = t.useEventTarget,
			a = void 0 === o ? "" : o;
		return n + _.BAR_DELIMITER + i + _.BAR_DELIMITER + a
	}, e.getItemConfigByKey = void 0;
	var l = s(n(195)),
		f = s(n(196)),
		d = s(n(202)),
		p = s(n(24)),
		v = n(15),
		h = s(n(93)),
		E = n(86),
		g = n(90),
		_ = n(49),
		m = n(89),
		I = n(48),
		y = n(31),
		T = function (t) {
			return t.trim()
		},
		O = Object.freeze((r = {}, (0, c.default)(r, I.STYLE_BACKGROUND_COLOR, _.BACKGROUND_COLOR), (0, c.default)(r, I.STYLE_BORDER, _.BORDER_COLOR), (0, c.default)(r, I.STYLE_TEXT_COLOR, _.COLOR), r)),
		w = Object.freeze((i = {}, (0, c.default)(i, y.TRANSFORM_PREFIXED, _.TRANSFORM), (0, c.default)(i, _.BACKGROUND_COLOR, _.BACKGROUND), (0, c.default)(i, _.OPACITY, _.OPACITY), (0, c.default)(i, _.FILTER, _.FILTER), (0, c.default)(i, _.WIDTH, _.WIDTH), (0, c.default)(i, _.HEIGHT, _.HEIGHT), i)),
		A = {},
		b = 1;
	var S = 1;
	var R = function (t, e) {
		return t === e
	};

	function N(t) {
		var e = (0, u.default)(t);
		return "string" === e ? {
			id: t
		} : null != t && "object" === e ? {
			id: t.id,
			objectId: t.objectId,
			selector: t.selector,
			selectorGuids: t.selectorGuids,
			appliesTo: t.appliesTo,
			useEventTarget: t.useEventTarget
		} : {}
	}

	function C(t) {
		var e = t.config,
			n = t.event,
			r = t.eventTarget,
			i = t.elementRoot,
			o = t.elementApi;
		if (!o) throw new Error("IX2 missing elementApi");
		var a = o.getValidDocument,
			u = o.getQuerySelector,
			c = o.queryDocument,
			s = o.getChildElements,
			l = o.getSiblingElements,
			f = o.matchSelector,
			d = o.elementContains,
			v = o.isSiblingNode,
			h = e.target;
		if (!h) return [];
		var E = N(h),
			g = E.id,
			I = E.objectId,
			T = E.selector,
			O = E.selectorGuids,
			w = E.appliesTo,
			b = E.useEventTarget;
		if (I) return [A[I] || (A[I] = {})];
		if (w === m.PAGE) {
			var S = a(g);
			return S ? [S] : []
		}
		var R, C, L, x = (0, p.default)(n, "action.config.affectedElements", {})[g || T] || {},
			P = Boolean(x.id || x.selector),
			D = n && u(N(n.target));
		if (P ? (R = x.limitAffectedElements, C = D, L = u(x)) : C = L = u({
				id: g,
				selector: T,
				selectorGuids: O
			}), n && b) {
			var M = r && (L || !0 === b) ? [r] : c(D);
			if (L) {
				if (b === _.PARENT) return c(L).filter(function (t) {
					return M.some(function (e) {
						return d(t, e)
					})
				});
				if (b === _.CHILDREN) return c(L).filter(function (t) {
					return M.some(function (e) {
						return d(e, t)
					})
				});
				if (b === _.SIBLINGS) return c(L).filter(function (t) {
					return M.some(function (e) {
						return v(e, t)
					})
				})
			}
			return M
		}
		return null == C || null == L ? [] : y.IS_BROWSER_ENV && i ? c(L).filter(function (t) {
			return i.contains(t)
		}) : R === _.CHILDREN ? c(C, L) : R === _.IMMEDIATE_CHILDREN ? s(c(C)).filter(f(L)) : R === _.SIBLINGS ? l(c(C)).filter(f(L)) : c(L)
	}
	var L = /px/,
		x = function (t, e) {
			return e.reduce(function (t, e) {
				return null == t[e.type] && (t[e.type] = F[e.type]), t
			}, t || {})
		};
	var P = function (t, e) {
		return e && (t[e.type] = e.value || 0), t
	};

	function D(t) {
		return /^TRANSFORM_/.test(t) ? _.RENDER_TRANSFORM : /^STYLE_/.test(t) ? _.RENDER_STYLE : /^GENERAL_/.test(t) ? _.RENDER_GENERAL : /^PLUGIN_/.test(t) ? _.RENDER_PLUGIN : void 0
	}
	e.getItemConfigByKey = function (t, e, n) {
		if ((0, g.isPluginType)(t)) return (0, g.getPluginConfig)(t)(n, e);
		switch (t) {
			case I.STYLE_FILTER:
				var r = (0, d.default)(n.filters, function (t) {
					return t.type === e
				});
				return r ? r.value : 0;
			default:
				return n[e]
		}
	};
	var M = (o = {}, (0, c.default)(o, I.TRANSFORM_MOVE, Object.freeze({
			xValue: 0,
			yValue: 0,
			zValue: 0
		})), (0, c.default)(o, I.TRANSFORM_SCALE, Object.freeze({
			xValue: 1,
			yValue: 1,
			zValue: 1
		})), (0, c.default)(o, I.TRANSFORM_ROTATE, Object.freeze({
			xValue: 0,
			yValue: 0,
			zValue: 0
		})), (0, c.default)(o, I.TRANSFORM_SKEW, Object.freeze({
			xValue: 0,
			yValue: 0
		})), o),
		F = Object.freeze({
			blur: 0,
			"hue-rotate": 0,
			invert: 0,
			grayscale: 0,
			saturate: 100,
			sepia: 0,
			contrast: 100,
			brightness: 100
		}),
		j = function (t, e) {
			var n = (0, d.default)(e.filters, function (e) {
				return e.type === t
			});
			if (n && n.unit) return n.unit;
			switch (t) {
				case "blur":
					return "px";
				case "hue-rotate":
					return "deg";
				default:
					return "%"
			}
		},
		G = Object.keys(M);
	var V = /^rgb/,
		U = RegExp("rgba?".concat("\\(([^)]+)\\)"));

	function k(t, e, n) {
		if (y.IS_BROWSER_ENV) {
			var r = w[e];
			if (r) {
				var i = n.getStyle,
					o = n.setStyle,
					a = i(t, _.WILL_CHANGE);
				if (a) {
					var u = a.split(_.COMMA_DELIMITER).map(T); - 1 === u.indexOf(r) && o(t, _.WILL_CHANGE, u.concat(r).join(_.COMMA_DELIMITER))
				} else o(t, _.WILL_CHANGE, r)
			}
		}
	}

	function X(t, e, n) {
		if (y.IS_BROWSER_ENV) {
			var r = w[e];
			if (r) {
				var i = n.getStyle,
					o = n.setStyle,
					a = i(t, _.WILL_CHANGE);
				a && -1 !== a.indexOf(r) && o(t, _.WILL_CHANGE, a.split(_.COMMA_DELIMITER).map(T).filter(function (t) {
					return t !== r
				}).join(_.COMMA_DELIMITER))
			}
		}
	}

	function W(t) {
		var e = t.actionList,
			n = void 0 === e ? {} : e,
			r = t.event,
			i = t.elementApi,
			o = n.actionItemGroups,
			a = n.continuousParameterGroups;
		o && o.forEach(function (t) {
			B({
				actionGroup: t,
				event: r,
				elementApi: i
			})
		}), a && a.forEach(function (t) {
			t.continuousActionGroups.forEach(function (t) {
				B({
					actionGroup: t,
					event: r,
					elementApi: i
				})
			})
		})
	}

	function B(t) {
		var e = t.actionGroup,
			n = t.event,
			r = t.elementApi;
		e.actionItems.forEach(function (t) {
			var e, i = t.actionTypeId,
				o = t.config;
			e = (0, g.isPluginType)(i) ? (0, g.clearPlugin)(i) : H({
				effect: Y,
				actionTypeId: i,
				elementApi: r
			}), C({
				config: o,
				event: n,
				elementApi: r
			}).forEach(e)
		})
	}
	var H = function (t) {
		var e = t.effect,
			n = t.actionTypeId,
			r = t.elementApi;
		return function (t) {
			switch (n) {
				case I.TRANSFORM_MOVE:
				case I.TRANSFORM_SCALE:
				case I.TRANSFORM_ROTATE:
				case I.TRANSFORM_SKEW:
					e(t, y.TRANSFORM_PREFIXED, r);
					break;
				case I.STYLE_FILTER:
					e(t, _.FILTER, r);
					break;
				case I.STYLE_OPACITY:
					e(t, _.OPACITY, r);
					break;
				case I.STYLE_SIZE:
					e(t, _.WIDTH, r), e(t, _.HEIGHT, r);
					break;
				case I.STYLE_BACKGROUND_COLOR:
				case I.STYLE_BORDER:
				case I.STYLE_TEXT_COLOR:
					e(t, O[n], r);
					break;
				case I.GENERAL_DISPLAY:
					e(t, _.DISPLAY, r)
			}
		}
	};

	function Y(t, e, n) {
		var r = n.setStyle;
		X(t, e, n), r(t, e, ""), e === y.TRANSFORM_PREFIXED && r(t, y.TRANSFORM_STYLE_PREFIXED, "")
	}

	function z(t) {
		var e = 0,
			n = 0;
		return t.forEach(function (t, r) {
			var i = t.config,
				o = i.delay + i.duration;
			o >= e && (e = o, n = r)
		}), n
	}
}, function (t, e) {
	t.exports = function (t, e) {
		return null == t || t != t ? e : t
	}
}, function (t, e, n) {
	var r = n(197),
		i = n(91),
		o = n(6),
		a = n(201),
		u = n(1);
	t.exports = function (t, e, n) {
		var c = u(t) ? r : a,
			s = arguments.length < 3;
		return c(t, o(e, 4), n, s, i)
	}
}, function (t, e) {
	t.exports = function (t, e, n, r) {
		var i = -1,
			o = null == t ? 0 : t.length;
		for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
		return n
	}
}, function (t, e, n) {
	var r = n(199)();
	t.exports = r
}, function (t, e) {
	t.exports = function (t) {
		return function (e, n, r) {
			for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
				var c = a[t ? u : ++i];
				if (!1 === n(o[c], c, o)) break
			}
			return e
		}
	}
}, function (t, e, n) {
	var r = n(10);
	t.exports = function (t, e) {
		return function (n, i) {
			if (null == n) return n;
			if (!r(n)) return t(n, i);
			for (var o = n.length, a = e ? o : -1, u = Object(n);
				(e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
			return n
		}
	}
}, function (t, e) {
	t.exports = function (t, e, n, r, i) {
		return i(t, function (t, i, o) {
			n = r ? (r = !1, t) : e(n, t, i, o)
		}), n
	}
}, function (t, e, n) {
	var r = n(63)(n(203));
	t.exports = r
}, function (t, e, n) {
	var r = n(83),
		i = n(6),
		o = n(46),
		a = Math.max,
		u = Math.min;
	t.exports = function (t, e, n) {
		var c = null == t ? 0 : t.length;
		if (!c) return -1;
		var s = c - 1;
		return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
	}
}, function (t, e, n) {
	"use strict";
	var r = Object.prototype.hasOwnProperty;

	function i(t, e) {
		return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
	}
	t.exports = function (t, e) {
		if (i(t, e)) return !0;
		if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
		var n = Object.keys(t),
			o = Object.keys(e);
		if (n.length !== o.length) return !1;
		for (var a = 0; a < n.length; a++)
			if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
		return !0
	}
}, function (t, e, n) {
	"use strict";
	var r, i = n(0)(n(16)),
		o = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.ixRequest = void 0;
	var a = o(n(27)),
		u = n(3),
		c = n(15),
		s = u.IX2EngineActionTypes,
		l = s.IX2_PREVIEW_REQUESTED,
		f = s.IX2_PLAYBACK_REQUESTED,
		d = s.IX2_STOP_REQUESTED,
		p = s.IX2_CLEAR_REQUESTED,
		v = {
			preview: {},
			playback: {},
			stop: {},
			clear: {}
		},
		h = Object.create(null, (r = {}, (0, i.default)(r, l, {
			value: "preview"
		}), (0, i.default)(r, f, {
			value: "playback"
		}), (0, i.default)(r, d, {
			value: "stop"
		}), (0, i.default)(r, p, {
			value: "clear"
		}), r));
	e.ixRequest = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
			e = arguments.length > 1 ? arguments[1] : void 0;
		if (e.type in h) {
			var n = [h[e.type]];
			return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
		}
		return t
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.ixSession = void 0;
	var r = n(3),
		i = n(15),
		o = r.IX2EngineActionTypes,
		a = o.IX2_SESSION_INITIALIZED,
		u = o.IX2_SESSION_STARTED,
		c = o.IX2_TEST_FRAME_RENDERED,
		s = o.IX2_SESSION_STOPPED,
		l = o.IX2_EVENT_LISTENER_ADDED,
		f = o.IX2_EVENT_STATE_CHANGED,
		d = o.IX2_ANIMATION_FRAME_CHANGED,
		p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
		v = o.IX2_VIEWPORT_WIDTH_CHANGED,
		h = o.IX2_MEDIA_QUERIES_DEFINED,
		E = {
			active: !1,
			tick: 0,
			eventListeners: [],
			eventState: {},
			playbackState: {},
			viewportWidth: 0,
			mediaQueryKey: null,
			hasBoundaryNodes: !1,
			hasDefinedMediaQueries: !1
		};
	e.ixSession = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
			e = arguments.length > 1 ? arguments[1] : void 0;
		switch (e.type) {
			case a:
				var n = e.payload.hasBoundaryNodes;
				return (0, i.set)(t, "hasBoundaryNodes", n);
			case u:
				return (0, i.set)(t, "active", !0);
			case c:
				var r = e.payload.step,
					o = void 0 === r ? 20 : r;
				return (0, i.set)(t, "tick", t.tick + o);
			case s:
				return E;
			case d:
				var g = e.payload.now;
				return (0, i.set)(t, "tick", g);
			case l:
				var _ = (0, i.addLast)(t.eventListeners, e.payload);
				return (0, i.set)(t, "eventListeners", _);
			case f:
				var m = e.payload,
					I = m.stateKey,
					y = m.newState;
				return (0, i.setIn)(t, ["eventState", I], y);
			case p:
				var T = e.payload,
					O = T.actionListId,
					w = T.isPlaying;
				return (0, i.setIn)(t, ["playbackState", O], w);
			case v:
				for (var A = e.payload, b = A.width, S = A.mediaQueries, R = S.length, N = null, C = 0; C < R; C++) {
					var L = S[C],
						x = L.key,
						P = L.min,
						D = L.max;
					if (b >= P && b <= D) {
						N = x;
						break
					}
				}
				return (0, i.merge)(t, {
					viewportWidth: b,
					mediaQueryKey: N
				});
			case h:
				return (0, i.set)(t, "hasDefinedMediaQueries", !0);
			default:
				return t
		}
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.ixInstances = void 0;
	var r = n(3),
		i = n(15),
		o = r.IX2EngineActionTypes,
		a = o.IX2_RAW_DATA_IMPORTED,
		u = o.IX2_SESSION_STOPPED,
		c = o.IX2_INSTANCE_ADDED,
		s = o.IX2_INSTANCE_STARTED,
		l = o.IX2_INSTANCE_REMOVED,
		f = o.IX2_ANIMATION_FRAME_CHANGED,
		d = r.IX2EasingUtils,
		p = d.optimizeFloat,
		v = d.applyEasing,
		h = d.createBezierEasing,
		E = r.IX2EngineConstants.RENDER_GENERAL,
		g = r.IX2VanillaUtils,
		_ = g.getItemConfigByKey,
		m = g.getRenderType,
		I = g.getStyleProp,
		y = function (t, e) {
			var n = t.position,
				r = t.parameterId,
				o = t.actionGroups,
				a = t.destinationKeys,
				u = t.smoothing,
				c = t.restingValue,
				s = t.actionTypeId,
				l = t.customEasingFn,
				f = e.payload.parameters,
				d = Math.max(1 - u, .01),
				h = f[r];
			null == h && (d = 1, h = c);
			var E, g, m, I, y = Math.max(h, 0) || 0,
				T = p(y - n),
				O = p(n + T * d),
				w = 100 * O;
			if (O === n && t.current) return t;
			for (var A = 0, b = o.length; A < b; A++) {
				var S = o[A],
					R = S.keyframe,
					N = S.actionItems;
				if (0 === A && (E = N[0]), w >= R) {
					E = N[0];
					var C = o[A + 1],
						L = C && w !== R;
					g = L ? C.actionItems[0] : null, L && (m = R / 100, I = (C.keyframe - R) / 100)
				}
			}
			var x = {};
			if (E && !g)
				for (var P = 0, D = a.length; P < D; P++) {
					var M = a[P];
					x[M] = _(s, M, E.config)
				} else if (E && g && void 0 !== m && void 0 !== I)
					for (var F = (O - m) / I, j = E.config.easing, G = v(j, F, l), V = 0, U = a.length; V < U; V++) {
						var k = a[V],
							X = _(s, k, E.config),
							W = (_(s, k, g.config) - X) * G + X;
						x[k] = W
					}
			return (0, i.merge)(t, {
				position: O,
				current: x
			})
		},
		T = function (t, e) {
			var n = t,
				r = n.active,
				o = n.origin,
				a = n.start,
				u = n.immediate,
				c = n.renderType,
				s = n.verbose,
				l = n.actionItem,
				f = n.destination,
				d = n.destinationKeys,
				h = n.pluginDuration,
				g = n.instanceDelay,
				_ = n.customEasingFn,
				m = l.config.easing,
				I = l.config,
				y = I.duration,
				T = I.delay;
			null != h && (y = h), T = null != g ? g : T, c === E ? y = 0 : u && (y = T = 0);
			var O = e.payload.now;
			if (r && o) {
				var w = O - (a + T);
				if (s) {
					var A = O - a,
						b = y + T,
						S = p(Math.min(Math.max(0, A / b), 1));
					t = (0, i.set)(t, "verboseTimeElapsed", b * S)
				}
				if (w < 0) return t;
				var R = p(Math.min(Math.max(0, w / y), 1)),
					N = v(m, R, _),
					C = {},
					L = null;
				return d.length && (L = d.reduce(function (t, e) {
					var n = f[e],
						r = parseFloat(o[e]) || 0,
						i = (parseFloat(n) - r) * N + r;
					return t[e] = i, t
				}, {})), C.current = L, C.position = R, 1 === R && (C.active = !1, C.complete = !0), (0, i.merge)(t, C)
			}
			return t
		};
	e.ixInstances = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
			e = arguments.length > 1 ? arguments[1] : void 0;
		switch (e.type) {
			case a:
				return e.payload.ixInstances || Object.freeze({});
			case u:
				return Object.freeze({});
			case c:
				var n = e.payload,
					r = n.instanceId,
					o = n.elementId,
					d = n.actionItem,
					p = n.eventId,
					v = n.eventTarget,
					E = n.eventStateKey,
					g = n.actionListId,
					_ = n.groupIndex,
					O = n.isCarrier,
					w = n.origin,
					A = n.destination,
					b = n.immediate,
					S = n.verbose,
					R = n.continuous,
					N = n.parameterId,
					C = n.actionGroups,
					L = n.smoothing,
					x = n.restingValue,
					P = n.pluginInstance,
					D = n.pluginDuration,
					M = n.instanceDelay,
					F = d.actionTypeId,
					j = m(F),
					G = I(j, F),
					V = Object.keys(A).filter(function (t) {
						return null != A[t]
					}),
					U = d.config.easing;
				return (0, i.set)(t, r, {
					id: r,
					elementId: o,
					active: !1,
					position: 0,
					start: 0,
					origin: w,
					destination: A,
					destinationKeys: V,
					immediate: b,
					verbose: S,
					current: null,
					actionItem: d,
					actionTypeId: F,
					eventId: p,
					eventTarget: v,
					eventStateKey: E,
					actionListId: g,
					groupIndex: _,
					renderType: j,
					isCarrier: O,
					styleProp: G,
					continuous: R,
					parameterId: N,
					actionGroups: C,
					smoothing: L,
					restingValue: x,
					pluginInstance: P,
					pluginDuration: D,
					instanceDelay: M,
					customEasingFn: Array.isArray(U) && 4 === U.length ? h(U) : void 0
				});
			case s:
				var k = e.payload,
					X = k.instanceId,
					W = k.time;
				return (0, i.mergeIn)(t, [X], {
					active: !0,
					complete: !1,
					start: W
				});
			case l:
				var B = e.payload.instanceId;
				if (!t[B]) return t;
				for (var H = {}, Y = Object.keys(t), z = Y.length, K = 0; K < z; K++) {
					var Q = Y[K];
					Q !== B && (H[Q] = t[Q])
				}
				return H;
			case f:
				for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
					var tt = $[J],
						et = t[tt],
						nt = et.continuous ? y : T;
					q = (0, i.set)(q, tt, nt(et, e))
				}
				return q;
			default:
				return t
		}
	}
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.ixParameters = void 0;
	var r = n(3).IX2EngineActionTypes,
		i = r.IX2_RAW_DATA_IMPORTED,
		o = r.IX2_SESSION_STOPPED,
		a = r.IX2_PARAMETER_CHANGED;
	e.ixParameters = function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			e = arguments.length > 1 ? arguments[1] : void 0;
		switch (e.type) {
			case i:
				return e.payload.ixParameters || {};
			case o:
				return {};
			case a:
				var n = e.payload,
					r = n.key,
					u = n.value;
				return t[r] = u, t;
			default:
				return t
		}
	}
}, function (t, e, n) {
	var r = n(210);
	t.exports = function (t, e) {
		if (null == t) return {};
		var n, i, o = r(t, e);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(t);
			for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
		}
		return o
	}
}, function (t, e) {
	t.exports = function (t, e) {
		if (null == t) return {};
		var n, r, i = {},
			o = Object.keys(t);
		for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
		return i
	}
}, function (t, e, n) {
	var r = n(40),
		i = n(42),
		o = n(10),
		a = n(212),
		u = n(213),
		c = "[object Map]",
		s = "[object Set]";
	t.exports = function (t) {
		if (null == t) return 0;
		if (o(t)) return a(t) ? u(t) : t.length;
		var e = i(t);
		return e == c || e == s ? t.size : r(t).length
	}
}, function (t, e, n) {
	var r = n(9),
		i = n(1),
		o = n(8),
		a = "[object String]";
	t.exports = function (t) {
		return "string" == typeof t || !i(t) && o(t) && r(t) == a
	}
}, function (t, e, n) {
	var r = n(214),
		i = n(215),
		o = n(216);
	t.exports = function (t) {
		return i(t) ? o(t) : r(t)
	}
}, function (t, e, n) {
	var r = n(82)("length");
	t.exports = r
}, function (t, e) {
	var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
	t.exports = function (t) {
		return n.test(t)
	}
}, function (t, e) {
	var n = "[\\ud800-\\udfff]",
		r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
		i = "\\ud83c[\\udffb-\\udfff]",
		o = "[^\\ud800-\\udfff]",
		a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
		u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
		c = "(?:" + r + "|" + i + ")" + "?",
		s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
		l = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
		f = RegExp(i + "(?=" + i + ")|" + l + s, "g");
	t.exports = function (t) {
		for (var e = f.lastIndex = 0; f.test(t);) ++e;
		return e
	}
}, function (t, e, n) {
	var r = n(6),
		i = n(218),
		o = n(219);
	t.exports = function (t, e) {
		return o(t, i(r(e)))
	}
}, function (t, e) {
	var n = "Expected a function";
	t.exports = function (t) {
		if ("function" != typeof t) throw new TypeError(n);
		return function () {
			var e = arguments;
			switch (e.length) {
				case 0:
					return !t.call(this);
				case 1:
					return !t.call(this, e[0]);
				case 2:
					return !t.call(this, e[0], e[1]);
				case 3:
					return !t.call(this, e[0], e[1], e[2])
			}
			return !t.apply(this, e)
		}
	}
}, function (t, e, n) {
	var r = n(81),
		i = n(6),
		o = n(220),
		a = n(223);
	t.exports = function (t, e) {
		if (null == t) return {};
		var n = r(a(t), function (t) {
			return [t]
		});
		return e = i(e), o(t, n, function (t, n) {
			return e(t, n[0])
		})
	}
}, function (t, e, n) {
	var r = n(43),
		i = n(221),
		o = n(25);
	t.exports = function (t, e, n) {
		for (var a = -1, u = e.length, c = {}; ++a < u;) {
			var s = e[a],
				l = r(t, s);
			n(l, s) && i(c, o(s, t), l)
		}
		return c
	}
}, function (t, e, n) {
	var r = n(222),
		i = n(25),
		o = n(37),
		a = n(5),
		u = n(14);
	t.exports = function (t, e, n, c) {
		if (!a(t)) return t;
		for (var s = -1, l = (e = i(e, t)).length, f = l - 1, d = t; null != d && ++s < l;) {
			var p = u(e[s]),
				v = n;
			if (s != f) {
				var h = d[p];
				void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
			}
			r(d, p, v), d = d[p]
		}
		return t
	}
}, function (t, e, n) {
	var r = n(95),
		i = n(32),
		o = Object.prototype.hasOwnProperty;
	t.exports = function (t, e, n) {
		var a = t[e];
		o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
	}
}, function (t, e, n) {
	var r = n(70),
		i = n(224),
		o = n(226);
	t.exports = function (t) {
		return r(t, o, i)
	}
}, function (t, e, n) {
	var r = n(35),
		i = n(225),
		o = n(71),
		a = n(72),
		u = Object.getOwnPropertySymbols ? function (t) {
			for (var e = []; t;) r(e, o(t)), t = i(t);
			return e
		} : a;
	t.exports = u
}, function (t, e, n) {
	var r = n(75)(Object.getPrototypeOf, Object);
	t.exports = r
}, function (t, e, n) {
	var r = n(73),
		i = n(227),
		o = n(10);
	t.exports = function (t) {
		return o(t) ? r(t, !0) : i(t)
	}
}, function (t, e, n) {
	var r = n(5),
		i = n(41),
		o = n(228),
		a = Object.prototype.hasOwnProperty;
	t.exports = function (t) {
		if (!r(t)) return o(t);
		var e = i(t),
			n = [];
		for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
		return n
	}
}, function (t, e) {
	t.exports = function (t) {
		var e = [];
		if (null != t)
			for (var n in Object(t)) e.push(n);
		return e
	}
}, function (t, e, n) {
	var r = n(40),
		i = n(42),
		o = n(23),
		a = n(1),
		u = n(10),
		c = n(36),
		s = n(41),
		l = n(38),
		f = "[object Map]",
		d = "[object Set]",
		p = Object.prototype.hasOwnProperty;
	t.exports = function (t) {
		if (null == t) return !0;
		if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || l(t) || o(t))) return !t.length;
		var e = i(t);
		if (e == f || e == d) return !t.size;
		if (s(t)) return !r(t).length;
		for (var n in t)
			if (p.call(t, n)) return !1;
		return !0
	}
}, function (t, e, n) {
	var r = n(95),
		i = n(92),
		o = n(6);
	t.exports = function (t, e) {
		var n = {};
		return e = o(e, 3), i(t, function (t, i, o) {
			r(n, i, e(t, i, o))
		}), n
	}
}, function (t, e, n) {
	var r = n(232),
		i = n(91),
		o = n(233),
		a = n(1);
	t.exports = function (t, e) {
		return (a(t) ? r : i)(t, o(e))
	}
}, function (t, e) {
	t.exports = function (t, e) {
		for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
		return t
	}
}, function (t, e, n) {
	var r = n(45);
	t.exports = function (t) {
		return "function" == typeof t ? t : r
	}
}, function (t, e, n) {
	var r = n(97),
		i = n(80),
		o = n(46),
		a = n(79);
	t.exports = function (t, e, n) {
		t = a(t), e = i(e);
		var u = t.length,
			c = n = void 0 === n ? u : r(o(n), 0, u);
		return (n -= e.length) >= 0 && t.slice(n, c) == e
	}
}, function (t, e, n) {
	var r = n(236),
		i = n(5),
		o = "Expected a function";
	t.exports = function (t, e, n) {
		var a = !0,
			u = !0;
		if ("function" != typeof t) throw new TypeError(o);
		return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
			leading: a,
			maxWait: e,
			trailing: u
		})
	}
}, function (t, e, n) {
	var r = n(5),
		i = n(237),
		o = n(47),
		a = "Expected a function",
		u = Math.max,
		c = Math.min;
	t.exports = function (t, e, n) {
		var s, l, f, d, p, v, h = 0,
			E = !1,
			g = !1,
			_ = !0;
		if ("function" != typeof t) throw new TypeError(a);

		function m(e) {
			var n = s,
				r = l;
			return s = l = void 0, h = e, d = t.apply(r, n)
		}

		function I(t) {
			var n = t - v;
			return void 0 === v || n >= e || n < 0 || g && t - h >= f
		}

		function y() {
			var t = i();
			if (I(t)) return T(t);
			p = setTimeout(y, function (t) {
				var n = e - (t - v);
				return g ? c(n, f - (t - h)) : n
			}(t))
		}

		function T(t) {
			return p = void 0, _ && s ? m(t) : (s = l = void 0, d)
		}

		function O() {
			var t = i(),
				n = I(t);
			if (s = arguments, l = this, v = t, n) {
				if (void 0 === p) return function (t) {
					return h = t, p = setTimeout(y, e), E ? m(t) : d
				}(v);
				if (g) return clearTimeout(p), p = setTimeout(y, e), m(v)
			}
			return void 0 === p && (p = setTimeout(y, e)), d
		}
		return e = o(e) || 0, r(n) && (E = !!n.leading, f = (g = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : f, _ = "trailing" in n ? !!n.trailing : _), O.cancel = function () {
			void 0 !== p && clearTimeout(p), h = 0, s = v = l = p = void 0
		}, O.flush = function () {
			return void 0 === p ? d : T(i())
		}, O
	}
}, function (t, e, n) {
	var r = n(4);
	t.exports = function () {
		return r.Date.now()
	}
}, function (t, e, n) {
	"use strict";
	var r = n(0)(n(11));
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.setStyle = function (t, e, n) {
		t.style[e] = n
	}, e.getStyle = function (t, e) {
		return t.style[e]
	}, e.getProperty = function (t, e) {
		return t[e]
	}, e.matchSelector = function (t) {
		return function (e) {
			return e[o](t)
		}
	}, e.getQuerySelector = function (t) {
		var e = t.id,
			n = t.selector;
		if (e) {
			var r = e;
			if (-1 !== e.indexOf(u)) {
				var i = e.split(u),
					o = i[0];
				if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
			}
			return '[data-w-id^="'.concat(r, '"]')
		}
		return n
	}, e.getValidDocument = function (t) {
		if (null == t || t === document.documentElement.getAttribute(l)) return document;
		return null
	}, e.queryDocument = function (t, e) {
		return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
	}, e.elementContains = function (t, e) {
		return t.contains(e)
	}, e.isSiblingNode = function (t, e) {
		return t !== e && t.parentNode === e.parentNode
	}, e.getChildElements = function (t) {
		for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
			var i = t[n].children,
				o = i.length;
			if (o)
				for (var a = 0; a < o; a++) e.push(i[a])
		}
		return e
	}, e.getSiblingElements = function () {
		for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
			var o = t[r].parentNode;
			if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
				n.push(o);
				for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
			}
		}
		return e
	}, e.getRefType = function (t) {
		if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? c : s;
		return null
	}, e.getClosestElement = void 0;
	var i = n(3),
		o = i.IX2BrowserSupport.ELEMENT_MATCHES,
		a = i.IX2EngineConstants,
		u = a.IX2_ID_DELIMITER,
		c = a.HTML_ELEMENT,
		s = a.PLAIN_OBJECT,
		l = a.WF_PAGE;
	var f = Element.prototype.closest ? function (t, e) {
		return document.documentElement.contains(t) ? t.closest(e) : null
	} : function (t, e) {
		if (!document.documentElement.contains(t)) return null;
		var n = t;
		do {
			if (n[o] && n[o](e)) return n;
			n = n.parentNode
		} while (null != n);
		return null
	};
	e.getClosestElement = f
}, function (t, e, n) {
	"use strict";
	var r, i = n(0),
		o = i(n(16)),
		a = i(n(11)),
		u = n(0);
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var c, s, l, f = u(n(27)),
		d = u(n(240)),
		p = u(n(24)),
		v = u(n(259)),
		h = n(94),
		E = n(50),
		g = n(3),
		_ = g.IX2EngineEventTypes,
		m = _.MOUSE_CLICK,
		I = _.MOUSE_SECOND_CLICK,
		y = _.MOUSE_DOWN,
		T = _.MOUSE_UP,
		O = _.MOUSE_OVER,
		w = _.MOUSE_OUT,
		A = _.DROPDOWN_CLOSE,
		b = _.DROPDOWN_OPEN,
		S = _.SLIDER_ACTIVE,
		R = _.SLIDER_INACTIVE,
		N = _.TAB_ACTIVE,
		C = _.TAB_INACTIVE,
		L = _.NAVBAR_CLOSE,
		x = _.NAVBAR_OPEN,
		P = _.MOUSE_MOVE,
		D = _.PAGE_SCROLL_DOWN,
		M = _.SCROLL_INTO_VIEW,
		F = _.COMPONENT_ACTIVE,
		j = _.COMPONENT_INACTIVE,
		G = _.SCROLL_OUT_OF_VIEW,
		V = _.PAGE_SCROLL_UP,
		U = _.SCROLLING_IN_VIEW,
		k = _.PAGE_FINISH,
		X = _.ECOMMERCE_CART_CLOSE,
		W = _.ECOMMERCE_CART_OPEN,
		B = _.PAGE_START,
		H = _.PAGE_SCROLL,
		Y = _.ELEMENT,
		z = _.VIEWPORT,
		K = _.PAGE,
		Q = g.IX2EngineConstants.COLON_DELIMITER,
		q = g.IX2VanillaUtils.getNamespacedParameterId,
		$ = function (t) {
			return function (e) {
				return !("object" !== (0, a.default)(e) || !t(e)) || e
			}
		},
		Z = $(function (t) {
			return t.element === t.nativeEvent.target
		}),
		J = $(function (t) {
			var e = t.element,
				n = t.nativeEvent;
			return e.contains(n.target)
		}),
		tt = (0, d.default)([Z, J]),
		et = function (t, e) {
			if (e) {
				var n = t.getState().ixData.events[e];
				if (n && !ct[n.eventTypeId]) return n
			}
			return null
		},
		nt = function (t, e) {
			var n = t.store,
				r = t.event,
				i = t.element,
				o = t.eventStateKey,
				a = r.action,
				u = r.id,
				c = a.config,
				s = c.actionListId,
				l = c.autoStopEventId,
				f = et(n, l);
			return f && (0, h.stopActionGroup)({
				store: n,
				eventId: l,
				eventTarget: i,
				eventStateKey: l + Q + o.split(Q)[1],
				actionListId: (0, p.default)(f, "action.config.actionListId")
			}), (0, h.stopActionGroup)({
				store: n,
				eventId: u,
				eventTarget: i,
				eventStateKey: o,
				actionListId: s
			}), (0, h.startActionGroup)({
				store: n,
				eventId: u,
				eventTarget: i,
				eventStateKey: o,
				actionListId: s
			}), e
		},
		rt = function (t, e) {
			return function (n, r) {
				return !0 === t(n, r) ? e(n, r) : r
			}
		},
		it = {
			handler: rt(tt, nt)
		},
		ot = (0, f.default)({}, it, {
			types: [F, j].join(" ")
		}),
		at = [{
			target: window,
			types: "resize orientationchange",
			throttle: !0
		}, {
			target: document,
			types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
			throttle: !0
		}],
		ut = {
			types: at
		},
		ct = {
			PAGE_START: B,
			PAGE_FINISH: k
		},
		st = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
			return {
				scrollLeft: c ? window.pageXOffset : s.scrollLeft,
				scrollTop: c ? window.pageYOffset : s.scrollTop,
				stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
				scrollWidth: s.scrollWidth,
				scrollHeight: s.scrollHeight,
				clientWidth: s.clientWidth,
				clientHeight: s.clientHeight,
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			}
		}),
		lt = function (t) {
			var e = t.element,
				n = t.nativeEvent,
				r = n.type,
				i = n.target,
				o = n.relatedTarget,
				a = e.contains(i);
			if ("mouseover" === r && a) return !0;
			var u = e.contains(o);
			return !("mouseout" !== r || !a || !u)
		},
		ft = function (t) {
			var e, n, r = t.element,
				i = t.event.config,
				o = st(),
				a = o.clientWidth,
				u = o.clientHeight,
				c = i.scrollOffsetValue,
				s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
			return e = r.getBoundingClientRect(), n = {
				left: 0,
				top: s,
				right: a,
				bottom: u - s
			}, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
		},
		dt = function (t) {
			return function (e, n) {
				var r = e.nativeEvent.type,
					i = -1 !== [F, j].indexOf(r) ? r === F : n.isActive,
					o = (0, f.default)({}, n, {
						isActive: i
					});
				return n && o.isActive === n.isActive ? o : t(e, o) || o
			}
		},
		pt = function (t) {
			return function (e, n) {
				var r = {
					elementHovered: lt(e)
				};
				return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
			}
		},
		vt = function (t) {
			return function (e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = st(),
					i = r.stiffScrollTop,
					o = r.scrollHeight,
					a = r.innerHeight,
					u = e.event,
					c = u.config,
					s = u.eventTypeId,
					l = c.scrollOffsetValue,
					d = "PX" === c.scrollOffsetUnit,
					p = o - a,
					v = Number((i / p).toFixed(2));
				if (n && n.percentTop === v) return n;
				var h, E, g = (d ? l : a * (l || 0) / 100) / p,
					_ = 0;
				n && (h = v > n.percentTop, _ = (E = n.scrollingDown !== h) ? v : n.anchorTop);
				var m = s === D ? v >= _ + g : v <= _ - g,
					I = (0, f.default)({}, n, {
						percentTop: v,
						inBounds: m,
						anchorTop: _,
						scrollingDown: h
					});
				return n && m && (E || I.inBounds !== n.inBounds) && t(e, I) || I
			}
		},
		ht = function (t) {
			return function (e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
						clickCount: 0
					},
					r = {
						clickCount: n.clickCount % 2 + 1
					};
				return r.clickCount !== n.clickCount && t(e, r) || r
			}
		},
		Et = function () {
			var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
			return (0, f.default)({}, ot, {
				handler: rt(t ? tt : Z, dt(function (t, e) {
					return e.isActive ? it.handler(t, e) : e
				}))
			})
		},
		gt = function () {
			var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
			return (0, f.default)({}, ot, {
				handler: rt(t ? tt : Z, dt(function (t, e) {
					return e.isActive ? e : it.handler(t, e)
				}))
			})
		},
		_t = (0, f.default)({}, ut, {
			handler: (l = function (t, e) {
				var n = e.elementVisible,
					r = t.event;
				return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === M === n ? (nt(t), (0, f.default)({}, e, {
					triggered: !0
				})) : e
			}, function (t, e) {
				var n = (0, f.default)({}, e, {
					elementVisible: ft(t)
				});
				return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && l(t, n) || n
			})
		}),
		mt = (r = {}, (0, o.default)(r, S, Et()), (0, o.default)(r, R, gt()), (0, o.default)(r, b, Et()), (0, o.default)(r, A, gt()), (0, o.default)(r, x, Et(!1)), (0, o.default)(r, L, gt(!1)), (0, o.default)(r, N, Et()), (0, o.default)(r, C, gt()), (0, o.default)(r, W, {
			types: "ecommerce-cart-open",
			handler: rt(tt, nt)
		}), (0, o.default)(r, X, {
			types: "ecommerce-cart-close",
			handler: rt(tt, nt)
		}), (0, o.default)(r, m, {
			types: "click",
			handler: rt(tt, ht(function (t, e) {
				var n, r, i, o = e.clickCount;
				r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(et(r, i)) ? 1 === o && nt(t) : nt(t)
			}))
		}), (0, o.default)(r, I, {
			types: "click",
			handler: rt(tt, ht(function (t, e) {
				2 === e.clickCount && nt(t)
			}))
		}), (0, o.default)(r, y, (0, f.default)({}, it, {
			types: "mousedown"
		})), (0, o.default)(r, T, (0, f.default)({}, it, {
			types: "mouseup"
		})), (0, o.default)(r, O, {
			types: "mouseover mouseout",
			handler: rt(tt, pt(function (t, e) {
				e.elementHovered && nt(t)
			}))
		}), (0, o.default)(r, w, {
			types: "mouseover mouseout",
			handler: rt(tt, pt(function (t, e) {
				e.elementHovered || nt(t)
			}))
		}), (0, o.default)(r, P, {
			types: "mousemove mouseout scroll",
			handler: function (t) {
				var e = t.store,
					n = t.element,
					r = t.eventConfig,
					i = t.nativeEvent,
					o = t.eventStateKey,
					a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0
					},
					u = r.basedOn,
					c = r.selectedAxis,
					s = r.continuousParameterGroupId,
					l = r.reverse,
					f = r.restingState,
					d = void 0 === f ? 0 : f,
					p = i.clientX,
					v = void 0 === p ? a.clientX : p,
					h = i.clientY,
					g = void 0 === h ? a.clientY : h,
					_ = i.pageX,
					m = void 0 === _ ? a.pageX : _,
					I = i.pageY,
					y = void 0 === I ? a.pageY : I,
					T = "X_AXIS" === c,
					O = "mouseout" === i.type,
					w = d / 100,
					A = s,
					b = !1;
				switch (u) {
					case z:
						w = T ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
						break;
					case K:
						var S = st(),
							R = S.scrollLeft,
							N = S.scrollTop,
							C = S.scrollWidth,
							L = S.scrollHeight;
						w = T ? Math.min(R + m, C) / C : Math.min(N + y, L) / L;
						break;
					case Y:
					default:
						A = q(o, s);
						var x = 0 === i.type.indexOf("mouse");
						if (x && !0 !== tt({
								element: n,
								nativeEvent: i
							})) break;
						var P = n.getBoundingClientRect(),
							D = P.left,
							M = P.top,
							F = P.width,
							j = P.height;
						if (!x && ! function (t, e) {
								return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
							}({
								left: v,
								top: g
							}, P)) break;
						b = !0, w = T ? (v - D) / F : (g - M) / j
				}
				return O && (w > .95 || w < .05) && (w = Math.round(w)), (u !== Y || b || b !== a.elementHovered) && (w = l ? 1 - w : w, e.dispatch((0, E.parameterChanged)(A, w))), {
					elementHovered: b,
					clientX: v,
					clientY: g,
					pageX: m,
					pageY: y
				}
			}
		}), (0, o.default)(r, H, {
			types: at,
			handler: function (t) {
				var e = t.store,
					n = t.eventConfig,
					r = n.continuousParameterGroupId,
					i = n.reverse,
					o = st(),
					a = o.scrollTop / (o.scrollHeight - o.clientHeight);
				a = i ? 1 - a : a, e.dispatch((0, E.parameterChanged)(r, a))
			}
		}), (0, o.default)(r, U, {
			types: at,
			handler: function (t) {
				var e = t.element,
					n = t.store,
					r = t.eventConfig,
					i = t.eventStateKey,
					o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
						scrollPercent: 0
					},
					a = st(),
					u = a.scrollLeft,
					c = a.scrollTop,
					s = a.scrollWidth,
					l = a.scrollHeight,
					f = a.clientHeight,
					d = r.basedOn,
					p = r.selectedAxis,
					v = r.continuousParameterGroupId,
					h = r.startsEntering,
					g = r.startsExiting,
					_ = r.addEndOffset,
					m = r.addStartOffset,
					I = r.addOffsetValue,
					y = void 0 === I ? 0 : I,
					T = r.endOffsetValue,
					O = void 0 === T ? 0 : T;
				if (d === z) {
					var w = "X_AXIS" === p ? u / s : c / l;
					return w !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(v, w)), {
						scrollPercent: w
					}
				}
				var A = q(i, v),
					b = e.getBoundingClientRect(),
					S = (m ? y : 0) / 100,
					R = (_ ? O : 0) / 100;
				S = h ? S : 1 - S, R = g ? R : 1 - R;
				var N = b.top + Math.min(b.height * S, f),
					C = b.top + b.height * R - N,
					L = Math.min(f + C, l),
					x = Math.min(Math.max(0, f - N), L) / L;
				return x !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(A, x)), {
					scrollPercent: x
				}
			}
		}), (0, o.default)(r, M, _t), (0, o.default)(r, G, _t), (0, o.default)(r, D, (0, f.default)({}, ut, {
			handler: vt(function (t, e) {
				e.scrollingDown && nt(t)
			})
		})), (0, o.default)(r, V, (0, f.default)({}, ut, {
			handler: vt(function (t, e) {
				e.scrollingDown || nt(t)
			})
		})), (0, o.default)(r, k, {
			types: "readystatechange IX2_PAGE_UPDATE",
			handler: rt(Z, function (t) {
				return function (e, n) {
					var r = {
						finished: "complete" === document.readyState
					};
					return !r.finished || n && n.finshed || t(e), r
				}
			}(nt))
		}), (0, o.default)(r, B, {
			types: "readystatechange IX2_PAGE_UPDATE",
			handler: rt(Z, function (t) {
				return function (e, n) {
					return n || t(e), {
						started: !0
					}
				}
			}(nt))
		}), r);
	e.default = mt
}, function (t, e, n) {
	var r = n(241)();
	t.exports = r
}, function (t, e, n) {
	var r = n(51),
		i = n(242),
		o = n(99),
		a = n(100),
		u = n(1),
		c = n(255),
		s = "Expected a function",
		l = 8,
		f = 32,
		d = 128,
		p = 256;
	t.exports = function (t) {
		return i(function (e) {
			var n = e.length,
				i = n,
				v = r.prototype.thru;
			for (t && e.reverse(); i--;) {
				var h = e[i];
				if ("function" != typeof h) throw new TypeError(s);
				if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
			}
			for (i = E ? i : n; ++i < n;) {
				h = e[i];
				var g = a(h),
					_ = "wrapper" == g ? o(h) : void 0;
				E = _ && c(_[0]) && _[1] == (d | l | f | p) && !_[4].length && 1 == _[9] ? E[a(_[0])].apply(E, _[3]) : 1 == h.length && c(h) ? E[g]() : E.thru(h)
			}
			return function () {
				var t = arguments,
					r = t[0];
				if (E && 1 == t.length && u(r)) return E.plant(r).value();
				for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
				return o
			}
		})
	}
}, function (t, e, n) {
	var r = n(243),
		i = n(246),
		o = n(248);
	t.exports = function (t) {
		return o(i(t, void 0, r), t + "")
	}
}, function (t, e, n) {
	var r = n(244);
	t.exports = function (t) {
		return null != t && t.length ? r(t, 1) : []
	}
}, function (t, e, n) {
	var r = n(35),
		i = n(245);
	t.exports = function t(e, n, o, a, u) {
		var c = -1,
			s = e.length;
		for (o || (o = i), u || (u = []); ++c < s;) {
			var l = e[c];
			n > 0 && o(l) ? n > 1 ? t(l, n - 1, o, a, u) : r(u, l) : a || (u[u.length] = l)
		}
		return u
	}
}, function (t, e, n) {
	var r = n(13),
		i = n(23),
		o = n(1),
		a = r ? r.isConcatSpreadable : void 0;
	t.exports = function (t) {
		return o(t) || i(t) || !!(a && t && t[a])
	}
}, function (t, e, n) {
	var r = n(247),
		i = Math.max;
	t.exports = function (t, e, n) {
		return e = i(void 0 === e ? t.length - 1 : e, 0),
			function () {
				for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
				a = -1;
				for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
				return s[e] = n(c), r(t, this, s)
			}
	}
}, function (t, e) {
	t.exports = function (t, e, n) {
		switch (n.length) {
			case 0:
				return t.call(e);
			case 1:
				return t.call(e, n[0]);
			case 2:
				return t.call(e, n[0], n[1]);
			case 3:
				return t.call(e, n[0], n[1], n[2])
		}
		return t.apply(e, n)
	}
}, function (t, e, n) {
	var r = n(249),
		i = n(251)(r);
	t.exports = i
}, function (t, e, n) {
	var r = n(250),
		i = n(96),
		o = n(45),
		a = i ? function (t, e) {
			return i(t, "toString", {
				configurable: !0,
				enumerable: !1,
				value: r(e),
				writable: !0
			})
		} : o;
	t.exports = a
}, function (t, e) {
	t.exports = function (t) {
		return function () {
			return t
		}
	}
}, function (t, e) {
	var n = 800,
		r = 16,
		i = Date.now;
	t.exports = function (t) {
		var e = 0,
			o = 0;
		return function () {
			var a = i(),
				u = r - (a - o);
			if (o = a, u > 0) {
				if (++e >= n) return arguments[0]
			} else e = 0;
			return t.apply(void 0, arguments)
		}
	}
}, function (t, e, n) {
	var r = n(76),
		i = r && new r;
	t.exports = i
}, function (t, e) {
	t.exports = function () {}
}, function (t, e) {
	t.exports = {}
}, function (t, e, n) {
	var r = n(53),
		i = n(99),
		o = n(100),
		a = n(256);
	t.exports = function (t) {
		var e = o(t),
			n = a[e];
		if ("function" != typeof n || !(e in r.prototype)) return !1;
		if (t === n) return !0;
		var u = i(n);
		return !!u && t === u[0]
	}
}, function (t, e, n) {
	var r = n(53),
		i = n(51),
		o = n(52),
		a = n(1),
		u = n(8),
		c = n(257),
		s = Object.prototype.hasOwnProperty;

	function l(t) {
		if (u(t) && !a(t) && !(t instanceof r)) {
			if (t instanceof i) return t;
			if (s.call(t, "__wrapped__")) return c(t)
		}
		return new i(t)
	}
	l.prototype = o.prototype, l.prototype.constructor = l, t.exports = l
}, function (t, e, n) {
	var r = n(53),
		i = n(51),
		o = n(258);
	t.exports = function (t) {
		if (t instanceof r) return t.clone();
		var e = new i(t.__wrapped__, t.__chain__);
		return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
	}
}, function (t, e) {
	t.exports = function (t, e) {
		var n = -1,
			r = t.length;
		for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
		return e
	}
}, function (t, e, n) {
	var r = n(97),
		i = n(47);
	t.exports = function (t, e, n) {
		return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
	}
}, function (t, e, n) {
	"use strict";
	var r = n(2);
	r.define("links", t.exports = function (t, e) {
		var n, i, o, a = {},
			u = t(window),
			c = r.env(),
			s = window.location,
			l = document.createElement("a"),
			f = "w--current",
			d = /index\.(html|php)$/,
			p = /\/$/;

		function v(e) {
			var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
			if (l.href = r, !(r.indexOf(":") >= 0)) {
				var a = t(e);
				if (l.hash.length > 1 && l.host + l.pathname === s.host + s.pathname) {
					if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
					var u = t(l.hash);
					u.length && i.push({
						link: a,
						sec: u,
						active: !1
					})
				} else if ("#" !== r && "" !== r) {
					var c = l.href === s.href || r === o || d.test(r) && p.test(o);
					E(a, f, c)
				}
			}
		}

		function h() {
			var t = u.scrollTop(),
				n = u.height();
			e.each(i, function (e) {
				var r = e.link,
					i = e.sec,
					o = i.offset().top,
					a = i.outerHeight(),
					u = .5 * n,
					c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
				e.active !== c && (e.active = c, E(r, f, c))
			})
		}

		function E(t, e, n) {
			var r = t.hasClass(e);
			n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
		}
		return a.ready = a.design = a.preview = function () {
			n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
			for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
			i.length && (r.scroll.on(h), h())
		}, a
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2);
	r.define("scroll", t.exports = function (t) {
		var e = t(document),
			n = window,
			i = n.location,
			o = function () {
				try {
					return Boolean(n.frameElement)
				} catch (t) {
					return !0
				}
			}() ? null : n.history,
			a = /^[a-zA-Z0-9][\w:.-]*$/;
		return {
			ready: function () {
				var u = i.href.split("#")[0];
				e.on("click", "a", function (e) {
					if (!(r.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link")))
						if ("#" !== this.getAttribute("href")) {
							var c = this.href.split("#"),
								s = c[0] === u ? c[1] : null;
							s && function (e, u) {
								if (a.test(e)) {
									var c = t("#" + e);
									if (c.length) {
										if (u && (u.preventDefault(), u.stopPropagation()), i.hash !== e && o && o.pushState && (!r.env.chrome || "file:" !== i.protocol)) {
											var s = o.state && o.state.hash;
											s !== e && o.pushState({
												hash: e
											}, "", "#" + e)
										}
										var l = r.env("editor") ? ".w-editor-body" : "body",
											f = t("header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])"),
											d = "fixed" === f.css("position") ? f.outerHeight() : 0;
										n.setTimeout(function () {
											! function (e, r) {
												var i = t(n).scrollTop(),
													o = e.offset().top - r;
												if ("mid" === e.data("scroll")) {
													var a = t(n).height() - r,
														u = e.outerHeight();
													u < a && (o -= Math.round((a - u) / 2))
												}
												var c = 1;
												t("body").add(e).each(function () {
													var e = parseFloat(t(this).attr("data-scroll-time"), 10);
													!isNaN(e) && (0 === e || e > 0) && (c = e)
												}), Date.now || (Date.now = function () {
													return (new Date).getTime()
												});
												var s = Date.now(),
													l = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function (t) {
														n.setTimeout(t, 15)
													},
													f = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c;
												! function t() {
													var e = Date.now() - s;
													n.scroll(0, function (t, e, n, r) {
														return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
														var i
													}(i, o, e, f)), e <= f && l(t)
												}()
											}(c, d)
										}, u ? 0 : 300)
									}
								}
							}(s, e)
						} else e.preventDefault()
				})
			}
		}
	})
}, function (t, e, n) {
	"use strict";
	n(2).define("touch", t.exports = function (t) {
		var e = {},
			n = window.getSelection;

		function r(e) {
			var r, i, o = !1,
				a = !1,
				u = Math.min(Math.round(.04 * window.innerWidth), 40);

			function c(t) {
				var e = t.touches;
				e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
			}

			function s(e) {
				if (o) {
					if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
					var r = e.touches,
						c = r ? r[0].clientX : e.clientX,
						s = c - i;
					i = c, Math.abs(s) > u && n && "" === String(n()) && (! function (e, n, r) {
						var i = t.Event(e, {
							originalEvent: n
						});
						t(n.target).trigger(i, r)
					}("swipe", e, {
						direction: s > 0 ? "right" : "left"
					}), f())
				}
			}

			function l(t) {
				if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
			}

			function f() {
				o = !1
			}
			e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", l, !1), e.addEventListener("touchcancel", f, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", l, !1), e.addEventListener("mouseout", f, !1), this.destroy = function () {
				e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", l, !1), e.removeEventListener("touchcancel", f, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", l, !1), e.removeEventListener("mouseout", f, !1), e = null
			}
		}
		return t.event.special.tap = {
			bindType: "click",
			delegateType: "click"
		}, e.init = function (e) {
			return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
		}, e.instance = e.init(document), e
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2),
		i = n(12),
		o = {
			ARROW_UP: 38,
			ARROW_DOWN: 40,
			ESCAPE: 27,
			SPACE: 32,
			ENTER: 13,
			HOME: 36,
			END: 35
		},
		a = !0;
	r.define("dropdown", t.exports = function (t, e) {
		var n, u, c = {},
			s = t(document),
			l = r.env(),
			f = r.env.touch,
			d = f ? "click" : "mouseup",
			p = ".w-dropdown",
			v = "w--open",
			h = "w-close" + p,
			E = i.triggers,
			g = 900,
			_ = !1;

		function m() {
			u = l && r.env("design"), (n = s.find(p)).each(I)
		}

		function I(n, i) {
			var c = t(i),
				f = t.data(i, p);
			f || (f = t.data(i, p, {
				open: !1,
				el: c,
				config: {},
				selectedIdx: -1
			})), f.list = c.children(".w-dropdown-list"), f.toggle = c.children(".w-dropdown-toggle"), f.links = f.list.children(".w-dropdown-link"), f.outside = function (n) {
				n.outside && s.off(d + p, n.outside);
				return e.debounce(function (e) {
					if (n.open) {
						var i = t(e.target);
						if (!i.closest(".w-dropdown-toggle").length) {
							var o = -1 === t.inArray(n.el[0], i.parents(p)),
								a = r.env("editor");
							if (o) {
								if (a) {
									var u = 1 === i.parents().length && 1 === i.parents("svg").length,
										c = i.parents(".w-editor-bem-EditorHoverControls").length;
									if (u || c) return
								}
								A(n)
							}
						}
					}
				})
			}(f), f.complete = function (t) {
				return function () {
					t.list.removeClass(v), t.toggle.removeClass(v), t.manageZ && t.el.css("z-index", "")
				}
			}(f), f.leave = function (t) {
				return function () {
					t.hovering = !1, t.links.is(":focus") || A(t)
				}
			}(f), f.moveOutside = function (n) {
				return e.debounce(function (e) {
					if (n.open) {
						var r = t(e.target),
							i = -1 === t.inArray(n.el[0], r.parents(p));
						if (i) {
							var o = r.parents(".w-editor-bem-EditorHoverControls").length,
								a = r.parents(".w-editor-bem-RTToolbar").length,
								u = t(".w-editor-bem-EditorOverlay"),
								c = u.find(".w-editor-edit-outline").length || u.find(".w-editor-bem-RTToolbar").length;
							if (o || a || c) return;
							n.hovering = !1, A(n)
						}
					}
				})
			}(f), c.off(p), f.toggle.off(p), y(f), f.nav && f.nav.off(p), f.nav = c.closest(".w-nav"), f.nav.on(h, T(f)), u ? c.on("setting" + p, T(f)) : (f.toggle.on(d + p, O(f, a)), f.config.hover && f.toggle.on("mouseenter" + p, function (t) {
				return function () {
					t.hovering = !0, w(t), t.links.is(":focus") || t.toggle.focus()
				}
			}(f)), c.on(h, T(f)), l && (f.hovering = !1, A(f)));
			var E = f.list.attr("id"),
				g = f.toggle.attr("id");
			c.attr("role", "menu"), c.on("keydown", S), E || (E = "w-dropdown-list-" + n, f.list.attr("id", E)), c.on("keyup", function (t) {
				return function (e) {
					if (!u && !_ && (t.open || t.toggle.is(":focus"))) switch (e.keyCode) {
						case o.HOME:
							if (!t.open) return;
							return t.selectedIdx = 0, void b(t);
						case o.END:
							if (!t.open) return;
							return t.selectedIdx = t.links.length - 1, void b(t);
						case o.ESCAPE:
							return void A(t, {
								forceClose: !0
							});
						case o.ARROW_DOWN:
							return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), void(t.selectedIdx >= 0 && (t.open || (t.selectedIdx = 0), w(t), b(t)));
						case o.ARROW_UP:
							return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), void(t.selectedIdx < 0 ? (A(t, {
								immediate: !0,
								forceClose: !0
							}), t.toggle.focus()) : (w(t), b(t)));
						default:
							return
					}
				}
			}(f)), f.links.attr("tabindex", "-1"), f.links.attr("role", "menuitem"), f.toggle.attr("tabindex") || f.toggle.attr("tabindex", "0"), g || (g = "w-dropdown-toggle-" + n, f.toggle.attr("id", g)), f.toggle.attr("aria-controls", E), f.toggle.attr("aria-haspopup", "menu"), f.toggle.on("keyup", function (t) {
				var e = O(t, a);
				return function (t) {
					u || _ || t.keyCode !== o.SPACE && t.keyCode !== o.ENTER || (t.stopPropagation(), e())
				}
			}(f)), c.attr("aria-labelledby", g), f.toggle.css("outline", "none"), f.links.css("outline", "none")
		}

		function y(t) {
			var e = Number(t.el.css("z-index"));
			t.manageZ = e === g || e === g + 1, t.config = {
				hover: (!0 === t.el.attr("data-hover") || "1" === t.el.attr("data-hover")) && !f,
				delay: Number(t.el.attr("data-delay")) || 0
			}
		}

		function T(t) {
			return function (e, n) {
				return n = n || {}, "w-close" === e.type ? A(t, {
					focusToggle: !1
				}) : "setting" === e.type ? (y(t), !0 === n.open && w(t), void(!1 === n.open && A(t, {
					immediate: !0
				}))) : void 0
			}
		}

		function O(t, n) {
			return e.debounce(function () {
				if (t.open) return A(t, {
					forceClose: n
				});
				w(t), b(t)
			})
		}

		function w(e) {
			if (!e.open) {
				! function (e) {
					var r = e.el[0];
					n.each(function (e, n) {
						var i = t(n);
						i.is(r) || i.has(r).length || i.triggerHandler(h)
					})
				}(e), e.open = !0, e.list.addClass(v), e.toggle.addClass(v), e.toggle.attr("aria-expanded", "true"), E.intro(0, e.el[0]), r.redraw.up(), e.manageZ && e.el.css("z-index", g + 1);
				var i = r.env("editor");
				u || s.on(d + p, e.outside), e.hovering && !i && e.el.on("mouseleave" + p, e.leave), e.hovering && i && s.on("mousemove" + p, e.moveOutside), window.clearTimeout(e.delayId)
			}
		}

		function A(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = e.immediate,
				r = e.forceClose,
				i = e.focusToggle,
				o = void 0 === i || i;
			if (t.open && (!t.config.hover || !t.hovering || r)) {
				t.toggle.removeAttr("aria-expanded"), o && t.toggle.focus(), t.open = !1;
				var a = t.config;
				if (E.outro(0, t.el[0]), s.off(d + p, t.outside), t.el.off("mouseleave" + p, t.leave), s.off("mousemove" + p, t.moveOutside), window.clearTimeout(t.delayId), !a.delay || n) return t.complete();
				t.delayId = window.setTimeout(t.complete, a.delay)
			}
		}

		function b(t) {
			t.links[t.selectedIdx] && t.links[t.selectedIdx].focus()
		}

		function S(t) {
			if (!u) switch (t.keyCode) {
				case o.HOME:
				case o.END:
				case o.ARROW_DOWN:
				case o.ARROW_UP:
					return t.preventDefault();
				default:
					return
			}
		}
		return c.ready = m, c.design = function () {
			_ && s.find(p).each(function (e, n) {
				t(n).triggerHandler(h)
			}), _ = !1, m()
		}, c.preview = function () {
			_ = !0, m()
		}, c
	})
}, function (t, e, n) {
	"use strict";
	var r = n(0)(n(265)),
		i = n(2);
	i.define("forms", t.exports = function (t, e) {
		var n, o, a, u, c, s = {},
			l = t(document),
			f = window.location,
			d = window.XDomainRequest && !window.atob,
			p = ".w-form",
			v = /e(-)?mail/i,
			h = /^\S+@\S+$/,
			E = window.alert,
			g = i.env(),
			_ = /list-manage[1-9]?.com/i,
			m = e.debounce(function () {
				E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
			}, 100);

		function I(e, n) {
			var r = t(n),
				i = t.data(n, p);
			i || (i = t.data(n, p, {
				form: r
			})), y(i);
			var a = r.closest("div.w-form");
			i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function (e) {
				! function (e, n) {
					if (!n.fileUploads || !n.fileUploads[e]) return;
					var r, i = t(n.fileUploads[e]),
						o = i.find("> .w-file-upload-default"),
						a = i.find("> .w-file-upload-uploading"),
						u = i.find("> .w-file-upload-success"),
						s = i.find("> .w-file-upload-error"),
						l = o.find(".w-file-upload-input"),
						f = o.find(".w-file-upload-label"),
						d = f.children(),
						p = s.find(".w-file-upload-error-msg"),
						v = u.find(".w-file-upload-file"),
						h = u.find(".w-file-remove-link"),
						E = v.find(".w-file-upload-file-name"),
						_ = p.attr("data-w-size-error"),
						m = p.attr("data-w-type-error"),
						I = p.attr("data-w-generic-error");
					if (g) l.on("click", function (t) {
						t.preventDefault()
					}), f.on("click", function (t) {
						t.preventDefault()
					}), d.on("click", function (t) {
						t.preventDefault()
					});
					else {
						h.on("click", function () {
							l.removeAttr("data-value"), l.val(""), E.html(""), o.toggle(!0), u.toggle(!1)
						}), l.on("change", function (i) {
							(r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), E.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function (e, n) {
								var r = {
									name: e.name,
									size: e.size
								};
								t.ajax({
									type: "POST",
									url: c,
									data: r,
									dataType: "json",
									crossDomain: !0
								}).done(function (t) {
									n(null, t)
								}).fail(function (t) {
									n(t)
								})
							}(r, A))
						});
						var O = f.outerHeight();
						l.height(O), l.width(1)
					}

					function w(t) {
						var r = t.responseJSON && t.responseJSON.msg,
							i = I;
						"string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = m : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = _), p.text(i), l.removeAttr("data-value"), l.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || y(n)
					}

					function A(e, n) {
						if (e) return w(e);
						var i = n.fileName,
							o = n.postData,
							a = n.fileId,
							u = n.s3Url;
						l.attr("data-value", a),
							function (e, n, r, i, o) {
								var a = new FormData;
								for (var u in n) a.append(u, n[u]);
								a.append("file", r, i), t.ajax({
									type: "POST",
									url: e,
									data: a,
									processData: !1,
									contentType: !1
								}).done(function () {
									o(null)
								}).fail(function (t) {
									o(t)
								})
							}(u, o, r, i, b)
					}

					function b(t) {
						if (t) return w(t);
						a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || y(n)
					}

					function S() {
						var t = n.fileUploads && n.fileUploads.toArray() || [];
						return t.some(function (t) {
							return t.uploading
						})
					}
				}(e, i)
			});
			var u = i.action = r.attr("action");
			i.handler = null, i.redirect = r.attr("data-redirect"), _.test(u) ? i.handler = A : u || (o ? i.handler = w : m())
		}

		function y(t) {
			var e = t.btn = t.form.find(':input[type="submit"]');
			t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
		}

		function T(t) {
			var e = t.btn,
				n = t.wait;
			e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
		}

		function O(e, n) {
			var r = null;
			return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
				var a = t(o),
					u = a.attr("type"),
					c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
					s = a.val();
				if ("checkbox" === u) s = a.is(":checked");
				else if ("radio" === u) {
					if (null === n[c] || "string" == typeof n[c]) return;
					s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
				}
				"string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function (t, e, n, r) {
					var i = null;
					"password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm youâ€™re not a robot.");
					return i
				}(a, u, c, s)
			}), r
		}

		function w(e) {
			y(e);
			var n = e.form,
				r = {
					name: n.attr("data-name") || n.attr("name") || "Untitled Form",
					source: f.href,
					test: i.env(),
					fields: {},
					fileUploads: {},
					dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
				};
			S(e);
			var a = O(n, r.fields);
			if (a) return E(a);
			r.fileUploads = function (e) {
				var n = {};
				return e.find(':input[type="file"]').each(function (e, r) {
					var i = t(r),
						o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
						a = i.attr("data-value");
					"string" == typeof a && (a = t.trim(a)), n[o] = a
				}), n
			}(n), T(e), o ? t.ajax({
				url: u,
				type: "POST",
				data: r,
				dataType: "json",
				crossDomain: !0
			}).done(function (t) {
				t && 200 === t.code && (e.success = !0), b(e)
			}).fail(function () {
				b(e)
			}) : b(e)
		}

		function A(n) {
			y(n);
			var r = n.form,
				i = {};
			if (!/^https/.test(f.href) || /^https/.test(n.action)) {
				S(n);
				var o, a = O(r, i);
				if (a) return E(a);
				T(n), e.each(i, function (t, e) {
					v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
				}), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
				var u = n.action.replace("/post?", "/post-json?") + "&c=?",
					c = u.indexOf("u=") + 2;
				c = u.substring(c, u.indexOf("&", c));
				var s = u.indexOf("id=") + 3;
				s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
					url: u,
					data: i,
					dataType: "jsonp"
				}).done(function (t) {
					n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), b(n)
				}).fail(function () {
					b(n)
				})
			} else r.attr("method", "post")
		}

		function b(t) {
			var e = t.form,
				n = t.redirect,
				r = t.success;
			r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), y(t))
		}

		function S(t) {
			t.evt && t.evt.preventDefault(), t.evt = null
		}
		return s.ready = s.design = s.preview = function () {
			! function () {
				o = t("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
				if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
				n.each(I)
			}(), g || a || function () {
				a = !0, l.on("submit", p + " form", function (e) {
					var n = t.data(this, p);
					n.handler && (n.evt = e, n.handler(n))
				});
				var e = [
					["checkbox", ".w-checkbox-input"],
					["radio", ".w-radio-input"]
				];
				l.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
					t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
				}), l.on("change", p + ' form input[type="radio"]', function (e) {
					t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, n) {
						return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
					});
					var n = t(e.target);
					n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
				}), e.forEach(function (e) {
					var n = (0, r.default)(e, 2),
						i = n[0],
						o = n[1];
					l.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
						t(e.target).siblings(o).addClass("w--redirected-focus")
					}), l.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
						t(e.target).siblings(o).removeClass("w--redirected-focus")
					})
				})
			}()
		}, s
	})
}, function (t, e, n) {
	var r = n(266),
		i = n(267),
		o = n(268);
	t.exports = function (t, e) {
		return r(t) || i(t, e) || o()
	}
}, function (t, e) {
	t.exports = function (t) {
		if (Array.isArray(t)) return t
	}
}, function (t, e) {
	t.exports = function (t, e) {
		var n = [],
			r = !0,
			i = !1,
			o = void 0;
		try {
			for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
		} catch (t) {
			i = !0, o = t
		} finally {
			try {
				r || null == u.return || u.return()
			} finally {
				if (i) throw o
			}
		}
		return n
	}
}, function (t, e) {
	t.exports = function () {
		throw new TypeError("Invalid attempt to destructure non-iterable instance")
	}
}, function (t, e, n) {
	"use strict";
	var r = n(2),
		i = "w-condition-invisible",
		o = "." + i;

	function a(t) {
		return Boolean(t.$el && t.$el.closest(o).length)
	}

	function u(t, e) {
		for (var n = t; n >= 0; n--)
			if (!a(e[n])) return n;
		return -1
	}

	function c(t, e) {
		for (var n = t; n <= e.length - 1; n++)
			if (!a(e[n])) return n;
		return -1
	}

	function s(t, e, n, r) {
		var o, s, l, f = n.tram,
			d = Array.isArray,
			p = "w-lightbox-",
			v = /(^|\s+)/g,
			h = [];

		function E(t, e) {
			return h = d(t) ? t : [t], s || E.build(),
				function (t) {
					return t.filter(function (t) {
						return !a(t)
					})
				}(h).length > 1 && (s.items = s.empty, h.forEach(function (t) {
					var e = D("thumbnail"),
						n = D("item").append(e);
					a(t) && n.addClass(i), s.items = s.items.add(n), S(t.thumbnailUrl || t.url, function (t) {
						t.prop("width") > t.prop("height") ? L(t, "wide") : L(t, "tall"), e.append(L(t, "thumbnail-image"))
					})
				}), s.strip.empty().append(s.items), L(s.content, "group")), f(x(s.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
					opacity: 1
				}), L(s.html, "noscroll"), E.show(e || 0)
		}

		function g(t) {
			return function (e) {
				this === e.target && (e.stopPropagation(), e.preventDefault(), t())
			}
		}
		E.build = function () {
			return E.destroy(), (s = {
				html: n(e.documentElement),
				empty: n()
			}).arrowLeft = D("control left inactive"), s.arrowRight = D("control right inactive"), s.close = D("control close"), s.spinner = D("spinner"), s.strip = D("strip"), l = new R(s.spinner, N("hide")), s.content = D("content").append(s.spinner, s.arrowLeft, s.arrowRight, s.close), s.container = D("container").append(s.content, s.strip), s.lightbox = D("backdrop hide").append(s.container), s.strip.on("click", C("item"), y), s.content.on("swipe", T).on("click", C("left"), _).on("click", C("right"), m).on("click", C("close"), I).on("click", C("image, caption"), m), s.container.on("click", C("view"), I).on("dragstart", C("img"), w), s.lightbox.on("keydown", A).on("focusin", O), n(r).append(s.lightbox.prop("tabIndex", 0)), E
		}, E.destroy = function () {
			s && (x(s.html, "noscroll"), s.lightbox.remove(), s = void 0)
		}, E.show = function (t) {
			if (t !== o) {
				var e = h[t];
				if (!e) return E.hide();
				if (a(e)) {
					if (t < o) {
						var r = u(t - 1, h);
						t = r > -1 ? r : t
					} else {
						var i = c(t + 1, h);
						t = i > -1 ? i : t
					}
					e = h[t]
				}
				var d, p, v = o;
				return o = t, l.show(), S(e.html && (d = e.width, p = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + p + '"/>')) || e.url, function (r) {
					if (t === o) {
						var i, a, d = D("figure", "figure").append(L(r, "image")),
							p = D("frame").append(d),
							E = D("view").append(p);
						e.html && ((a = (i = n(e.html)).is("iframe")) && i.on("load", g), d.append(L(i, "embed"))), e.caption && d.append(D("caption", "figcaption").text(e.caption)), s.spinner.before(E), a || g()
					}

					function g() {
						var e;
						if (l.hide(), t === o) {
							if (P(s.arrowLeft, "inactive", function (t, e) {
									return -1 === u(t - 1, e)
								}(t, h)), P(s.arrowRight, "inactive", function (t, e) {
									return -1 === c(t + 1, e)
								}(t, h)), s.view ? (f(s.view).add("opacity .3s").start({
									opacity: 0
								}).then((e = s.view, function () {
									e.remove()
								})), f(E).add("opacity .3s").add("transform .3s").set({
									x: t > v ? "80px" : "-80px"
								}).start({
									opacity: 1,
									x: 0
								})) : E.css("opacity", 1), s.view = E, s.items) {
								x(s.items, "active");
								var n = s.items.eq(t);
								L(n, "active"),
									function (t) {
										var e, n = t.get(0),
											r = s.strip.get(0),
											i = n.offsetLeft,
											o = n.clientWidth,
											a = r.scrollLeft,
											u = r.clientWidth,
											c = r.scrollWidth - u;
										i < a ? e = Math.max(0, i + o - u) : i + o > u + a && (e = Math.min(i, c));
										null != e && f(s.strip).add("scroll-left 500ms").start({
											"scroll-left": e
										})
									}(n)
							}
						} else E.remove()
					}
				}), E
			}
		}, E.hide = function () {
			return f(s.lightbox).add("opacity .3s").start({
				opacity: 0
			}).then(b), E
		}, E.prev = function () {
			var t = u(o - 1, h);
			t > -1 && E.show(t)
		}, E.next = function () {
			var t = c(o + 1, h);
			t > -1 && E.show(t)
		};
		var _ = g(E.prev),
			m = g(E.next),
			I = g(E.hide),
			y = function (t) {
				var e = n(this).index();
				t.preventDefault(), E.show(e)
			},
			T = function (t, e) {
				t.preventDefault(), "left" === e.direction ? E.next() : "right" === e.direction && E.prev()
			},
			O = function () {
				this.focus()
			};

		function w(t) {
			t.preventDefault()
		}

		function A(t) {
			var e = t.keyCode;
			27 === e ? E.hide() : 37 === e ? E.prev() : 39 === e && E.next()
		}

		function b() {
			s && (s.strip.scrollLeft(0).empty(), x(s.html, "noscroll"), L(s.lightbox, "hide"), s.view && s.view.remove(), x(s.content, "group"), L(s.arrowLeft, "inactive"), L(s.arrowRight, "inactive"), o = s.view = void 0)
		}

		function S(t, e) {
			var n = D("img", "img");
			return n.one("load", function () {
				e(n)
			}), n.attr("src", t), n
		}

		function R(t, e, n) {
			this.$element = t, this.className = e, this.delay = n || 200, this.hide()
		}

		function N(t, e) {
			return t.replace(v, (e ? " ." : " ") + p)
		}

		function C(t) {
			return N(t, !0)
		}

		function L(t, e) {
			return t.addClass(N(e))
		}

		function x(t, e) {
			return t.removeClass(N(e))
		}

		function P(t, e, n) {
			return t.toggleClass(N(e), n)
		}

		function D(t, r) {
			return L(n(e.createElement(r || "div")), t)
		}
		return R.prototype.show = function () {
				var t = this;
				t.timeoutId || (t.timeoutId = setTimeout(function () {
					t.$element.removeClass(t.className), delete t.timeoutId
				}, t.delay))
			}, R.prototype.hide = function () {
				if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
				this.$element.addClass(this.className)
			},
			function () {
				var n = t.navigator.userAgent,
					r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
				if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
					var i = e.createElement("style");
					e.head.appendChild(i), t.addEventListener("resize", o, !0), o()
				}

				function o() {
					var e = t.innerHeight,
						n = t.innerWidth,
						r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
					i.textContent = r
				}
			}(), E
	}
	r.define("lightbox", t.exports = function (t) {
		var e, n, i = {},
			o = r.env(),
			a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
			u = t(document),
			c = ".w-lightbox";

		function l(t) {
			var e, r, i = t.el.children(".w-json").html();
			if (i) {
				try {
					i = JSON.parse(i)
				} catch (t) {
					console.error("Malformed lightbox JSON configuration.", t)
				}! function (t) {
					t.images && (t.images.forEach(function (t) {
						t.type = "image"
					}), t.items = t.images);
					t.embed && (t.embed.type = "video", t.items = [t.embed]);
					t.groupId && (t.group = t.groupId)
				}(i), i.items.forEach(function (e) {
					e.$el = t.el
				}), (e = i.group) ? ((r = n[e]) || (r = n[e] = []), t.items = r, i.items.length && (t.index = r.length, r.push.apply(r, i.items))) : (t.items = i.items, t.index = 0)
			} else t.items = []
		}
		return i.ready = i.design = i.preview = function () {
			e = o && r.env("design"), a.destroy(), n = {}, u.find(c).webflowLightBox()
		}, jQuery.fn.extend({
			webflowLightBox: function () {
				t.each(this, function (n, r) {
					var i = t.data(r, c);
					i || (i = t.data(r, c, {
						el: t(r),
						mode: "images",
						images: [],
						embed: ""
					})), i.el.off(c), l(i), e ? i.el.on("setting" + c, l.bind(null, i)) : i.el.on("click" + c, function (t) {
						return function () {
							t.items.length && a(t.items, t.index || 0)
						}
					}(i)).on("click" + c, function (t) {
						t.preventDefault()
					})
				})
			}
		}), i
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2),
		i = n(12);
	r.define("navbar", t.exports = function (t, e) {
		var n, o, a, u, c = {},
			s = t.tram,
			l = t(window),
			f = t(document),
			d = r.env(),
			p = '<div class="w-nav-overlay" data-wf-ignore />',
			v = ".w-nav",
			h = "w--open",
			E = "w--nav-dropdown-open",
			g = "w--nav-dropdown-toggle-open",
			_ = "w--nav-dropdown-list-open",
			m = "w--nav-link-open",
			I = i.triggers,
			y = t();

		function T() {
			r.resize.off(O)
		}

		function O() {
			o.each(C)
		}

		function w(n, i) {
			var o = t(i),
				c = t.data(i, v);
			c || (c = t.data(i, v, {
				open: !1,
				el: o,
				config: {}
			})), c.menu = o.find(".w-nav-menu"), c.links = c.menu.find(".w-nav-link"), c.dropdowns = c.menu.find(".w-dropdown"), c.dropdownToggle = c.menu.find(".w-dropdown-toggle"), c.dropdownList = c.menu.find(".w-dropdown-list"), c.button = o.find(".w-nav-button"), c.container = o.find(".w-container"), c.outside = function (e) {
				e.outside && f.off("click" + v, e.outside);
				return function (n) {
					var r = t(n.target);
					u && r.closest(".w-editor-bem-EditorOverlay").length || N(e, r)
				}
			}(c), c.el.off(v), c.button.off(v), c.menu.off(v), S(c), a ? (b(c), c.el.on("setting" + v, function (t) {
				return function (n, r) {
					r = r || {};
					var i = l.width();
					S(t), !0 === r.open && D(t, !0), !1 === r.open && F(t, !0), t.open && e.defer(function () {
						i !== l.width() && R(t)
					})
				}
			}(c))) : (! function (e) {
				if (e.overlay) return;
				e.overlay = t(p).appendTo(e.el), e.parent = e.menu.parent(), F(e, !0)
			}(c), c.button.on("click" + v, function (t) {
				return e.debounce(function () {
					t.open ? F(t) : D(t)
				})
			}(c)), c.menu.on("click" + v, "a", function (e) {
				return function (n) {
					var i = t(this),
						o = i.attr("href");
					r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && F(e) : n.preventDefault()
				}
			}(c))), C(n, i)
		}

		function A(e, n) {
			var r = t.data(n, v);
			r && (b(r), t.removeData(n, v))
		}

		function b(t) {
			t.overlay && (F(t, !0), t.overlay.remove(), t.overlay = null)
		}

		function S(t) {
			var n = {},
				r = t.config || {},
				i = n.animation = t.el.attr("data-animation") || "default";
			n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(R, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
			var o = t.el.attr("data-duration");
			n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
		}

		function R(t) {
			t.open && (F(t, !0), D(t, !0))
		}
		c.ready = c.design = c.preview = function () {
			if (a = d && r.env("design"), u = r.env("editor"), n = t(document.body), !(o = f.find(v)).length) return;
			o.each(w), T(), r.resize.on(O)
		}, c.destroy = function () {
			y = t(), T(), o && o.length && o.each(A)
		};
		var N = e.debounce(function (t, e) {
			if (t.open) {
				var n = e.closest(".w-nav-menu");
				t.menu.is(n) || F(t)
			}
		});

		function C(e, n) {
			var r = t.data(n, v),
				i = r.collapsed = "none" !== r.button.css("display");
			if (!r.open || i || a || F(r, !0), r.container.length) {
				var o = function (e) {
					var n = e.container.css(L);
					"none" === n && (n = "");
					return function (e, r) {
						(r = t(r)).css(L, ""), "none" === r.css(L) && r.css(L, n)
					}
				}(r);
				r.links.each(o), r.dropdowns.each(o)
			}
			r.open && M(r)
		}
		var L = "max-width";

		function x(t, e) {
			e.setAttribute("data-nav-menu-open", "")
		}

		function P(t, e) {
			e.removeAttribute("data-nav-menu-open")
		}

		function D(t, e) {
			if (!t.open) {
				t.open = !0, t.menu.each(x), t.links.addClass(m), t.dropdowns.addClass(E), t.dropdownToggle.addClass(g), t.dropdownList.addClass(_), t.button.addClass(h);
				var n = t.config;
				"none" !== n.animation && s.support.transform || (e = !0);
				var i = M(t),
					o = t.menu.outerHeight(!0),
					u = t.menu.outerWidth(!0),
					c = t.el.height(),
					l = t.el[0];
				if (C(0, l), I.intro(0, l), r.redraw.up(), a || f.on("click" + v, t.outside), !e) {
					var d = "transform " + n.duration + "ms " + n.easing;
					if (t.overlay && (y = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return s(t.menu).add(d).set({
						x: n.animDirect * u,
						height: i
					}).start({
						x: 0
					}), void(t.overlay && t.overlay.width(u));
					var p = c + o;
					s(t.menu).add(d).set({
						y: -p
					}).start({
						y: 0
					})
				}
			}
		}

		function M(t) {
			var e = t.config,
				r = e.docHeight ? f.height() : n.height();
			return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.height()), t.overlay && t.overlay.height(r), r
		}

		function F(t, e) {
			if (t.open) {
				t.open = !1, t.button.removeClass(h);
				var n = t.config;
				if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (e = !0), I.outro(0, t.el[0]), f.off("click" + v, t.outside), e) return s(t.menu).stop(), void c();
				var r = "transform " + n.duration + "ms " + n.easing2,
					i = t.menu.outerHeight(!0),
					o = t.menu.outerWidth(!0),
					a = t.el.height();
				if (n.animOver) s(t.menu).add(r).start({
					x: o * n.animDirect
				}).then(c);
				else {
					var u = a + i;
					s(t.menu).add(r).start({
						y: -u
					}).then(c)
				}
			}

			function c() {
				t.menu.height(""), s(t.menu).set({
					x: 0,
					y: 0
				}), t.menu.each(P), t.links.removeClass(m), t.dropdowns.removeClass(E), t.dropdownToggle.removeClass(g), t.dropdownList.removeClass(_), t.overlay && t.overlay.children().length && (y.length ? t.menu.insertAfter(y) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
			}
		}
		return c
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2),
		i = n(12);
	r.define("slider", t.exports = function (t, e) {
		var n, o, a, u, c = {},
			s = t.tram,
			l = t(document),
			f = r.env(),
			d = ".w-slider",
			p = '<div class="w-slider-dot" data-wf-ignore />',
			v = i.triggers;

		function h() {
			(n = l.find(d)).length && (n.each(_), u = null, a || (E(), r.resize.on(g), r.redraw.on(c.redraw)))
		}

		function E() {
			r.resize.off(g), r.redraw.off(c.redraw)
		}

		function g() {
			n.filter(":visible").each(b)
		}

		function _(e, n) {
			var r = t(n),
				i = t.data(n, d);
			if (i || (i = t.data(n, d, {
					index: 0,
					depth: 1,
					el: r,
					config: {}
				})), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(v.reset), u && (i.maskWidth = 0), !s.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(a = !0);
			i.el.off(d), i.left.off(d), i.right.off(d), i.nav.off(d), m(i), o ? (i.el.on("setting" + d, w(i)), O(i), i.hasTimer = !1) : (i.el.on("swipe" + d, w(i)), i.left.on("click" + d, y(i)), i.right.on("click" + d, T(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, function t(e) {
				O(e);
				var n = e.config;
				var r = n.timerMax;
				if (r && e.timerCount++ > r) return;
				e.timerId = window.setTimeout(function () {
					null == e.timerId || o || (T(e)(), t(e))
				}, n.delay)
			}(i))), i.nav.on("click" + d, "> div", w(i)), f || i.mask.contents().filter(function () {
				return 3 === this.nodeType
			}).remove();
			var c = r.filter(":hidden");
			c.show();
			var l = r.parents(":hidden");
			l.show(), b(e, n), c.css("display", ""), l.css("display", "")
		}

		function m(t) {
			var e = {
				crossOver: 0
			};
			e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
			var n = t.el.attr("data-duration");
			if (e.duration = null != n ? parseInt(n, 10) : 500, I(t.el.attr("data-infinite")) && (e.infinite = !0), I(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), I(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), I(t.el.attr("data-autoplay"))) {
				e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
				var r = "mousedown" + d + " touchstart" + d;
				o || t.el.off(r).one(r, function () {
					O(t)
				})
			}
			var i = t.right.width();
			e.edge = i ? i + 40 : 100, t.config = e
		}

		function I(t) {
			return "1" === t || "true" === t
		}

		function y(t) {
			return function () {
				A(t, {
					index: t.index - 1,
					vector: -1
				})
			}
		}

		function T(t) {
			return function () {
				A(t, {
					index: t.index + 1,
					vector: 1
				})
			}
		}

		function O(t) {
			window.clearTimeout(t.timerId), t.timerId = null
		}

		function w(n) {
			return function (i, a) {
				a = a || {};
				var u = n.config;
				if (o && "setting" === i.type) {
					if ("prev" === a.select) return y(n)();
					if ("next" === a.select) return T(n)();
					if (m(n), S(n), null == a.select) return;
					! function (n, r) {
						var i = null;
						r === n.slides.length && (h(), S(n)), e.each(n.anchors, function (e, n) {
							t(e.els).each(function (e, o) {
								t(o).index() === r && (i = n)
							})
						}), null != i && A(n, {
							index: i,
							immediate: !0
						})
					}(n, a.select)
				} else {
					if ("swipe" === i.type) {
						if (u.disableSwipe) return;
						if (r.env("editor")) return;
						return "left" === a.direction ? T(n)() : "right" === a.direction ? y(n)() : void 0
					}
					n.nav.has(i.target).length && A(n, {
						index: t(i.target).index()
					})
				}
			}
		}

		function A(e, n) {
			n = n || {};
			var r = e.config,
				i = e.anchors;
			e.previous = e.index;
			var a = n.index,
				c = {};
			a < 0 ? (a = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : a >= i.length && (a = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = a;
			var l = e.nav.children().eq(e.index).addClass("w-active");
			e.nav.children().not(l).removeClass("w-active"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
			var f = e.offsetX || 0,
				d = e.offsetX = -i[e.index].x,
				p = {
					x: d,
					opacity: 1,
					visibility: ""
				},
				h = t(i[e.index].els),
				E = t(i[e.previous] && i[e.previous].els),
				g = e.slides.not(h),
				_ = r.animation,
				m = r.easing,
				I = Math.round(r.duration),
				y = n.vector || (e.index > e.previous ? 1 : -1),
				T = "opacity " + I + "ms " + m,
				O = "transform " + I + "ms " + m;
			if (o || (h.each(v.intro), g.each(v.outro)), n.immediate && !u) return s(h).set(p), void b();
			if (e.index !== e.previous) {
				if ("cross" === _) {
					var w = Math.round(I - I * r.crossOver),
						A = Math.round(I - w);
					return T = "opacity " + w + "ms " + m, s(E).set({
						visibility: ""
					}).add(T).start({
						opacity: 0
					}), void s(h).set({
						visibility: "",
						x: d,
						opacity: 0,
						zIndex: e.depth++
					}).add(T).wait(A).then({
						opacity: 1
					}).then(b)
				}
				if ("fade" === _) return s(E).set({
					visibility: ""
				}).stop(), void s(h).set({
					visibility: "",
					x: d,
					opacity: 0,
					zIndex: e.depth++
				}).add(T).start({
					opacity: 1
				}).then(b);
				if ("over" === _) return p = {
					x: e.endX
				}, s(E).set({
					visibility: ""
				}).stop(), void s(h).set({
					visibility: "",
					zIndex: e.depth++,
					x: d + i[e.index].width * y
				}).add(O).start({
					x: d
				}).then(b);
				r.infinite && c.x ? (s(e.slides.not(E)).set({
					visibility: "",
					x: c.x
				}).add(O).start({
					x: d
				}), s(E).set({
					visibility: "",
					x: c.from
				}).add(O).start({
					x: c.to
				}), e.shifted = E) : (r.infinite && e.shifted && (s(e.shifted).set({
					visibility: "",
					x: f
				}), e.shifted = null), s(e.slides).set({
					visibility: ""
				}).add(O).start({
					x: d
				}))
			}

			function b() {
				h = t(i[e.index].els), g = e.slides.not(h), "slide" !== _ && (p.visibility = "hidden"), s(g).set(p)
			}
		}

		function b(e, n) {
			var r = t.data(n, d);
			if (r) return function (t) {
				var e = t.mask.width();
				if (t.maskWidth !== e) return t.maskWidth = e, !0;
				return !1
			}(r) ? S(r) : void(o && function (e) {
				var n = 0;
				if (e.slides.each(function (e, r) {
						n += t(r).outerWidth(!0)
					}), e.slidesWidth !== n) return e.slidesWidth = n, !0;
				return !1
			}(r) && S(r))
		}

		function S(e) {
			var n = 1,
				r = 0,
				i = 0,
				a = 0,
				u = e.maskWidth,
				c = u - e.config.edge;
			c < 0 && (c = 0), e.anchors = [{
				els: [],
				x: 0,
				width: 0
			}], e.slides.each(function (o, s) {
				i - r > c && (n++, r += u, e.anchors[n - 1] = {
					els: [],
					x: i,
					width: 0
				}), a = t(s).outerWidth(!0), i += a, e.anchors[n - 1].width += a, e.anchors[n - 1].els.push(s)
			}), e.endX = i, o && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function (e) {
				var n, r = [],
					i = e.el.attr("data-nav-spacing");
				i && (i = parseFloat(i) + "px");
				for (var o = 0; o < e.pages; o++) n = t(p), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
					"margin-left": i,
					"margin-right": i
				}), r.push(n);
				e.nav.empty().append(r)
			}(e));
			var s = e.index;
			s >= n && (s = n - 1), A(e, {
				immediate: !0,
				index: s
			})
		}
		return c.ready = function () {
			o = r.env("design"), h()
		}, c.design = function () {
			o = !0, h()
		}, c.preview = function () {
			o = !1, h()
		}, c.redraw = function () {
			u = !0, h()
		}, c.destroy = E, c
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2),
		i = n(12);
	r.define("tabs", t.exports = function (t) {
		var e, n, o = {},
			a = t.tram,
			u = t(document),
			c = r.env,
			s = c.safari,
			l = c(),
			f = "data-w-tab",
			d = ".w-tabs",
			p = "w--current",
			v = "w--tab-active",
			h = i.triggers,
			E = !1;

		function g() {
			n = l && r.env("design"), (e = u.find(d)).length && (e.each(I), r.env("preview") && !E && e.each(m), _(), r.redraw.on(o.redraw))
		}

		function _() {
			r.redraw.off(o.redraw)
		}

		function m(e, n) {
			var r = t.data(n, d);
			r && (r.links && r.links.each(h.reset), r.panes && r.panes.each(h.reset))
		}

		function I(e, r) {
			var i = t(r),
				o = t.data(r, d);
			if (o || (o = t.data(r, d, {
					el: i,
					config: {}
				})), o.current = null, o.menu = i.children(".w-tab-menu"), o.links = o.menu.children(".w-tab-link"), o.content = i.children(".w-tab-content"), o.panes = o.content.children(".w-tab-pane"), o.el.off(d), o.links.off(d), function (t) {
					var e = {};
					e.easing = t.el.attr("data-easing") || "ease";
					var n = parseInt(t.el.attr("data-duration-in"), 10);
					n = e.intro = n == n ? n : 0;
					var r = parseInt(t.el.attr("data-duration-out"), 10);
					r = e.outro = r == r ? r : 0, e.immediate = !n && !r, t.config = e
				}(o), !n) {
				o.links.on("click" + d, function (t) {
					return function (e) {
						var n = e.currentTarget.getAttribute(f);
						n && y(t, {
							tab: n
						})
					}
				}(o));
				var a = o.links.filter("." + p).attr(f);
				a && y(o, {
					tab: a,
					immediate: !0
				})
			}
		}

		function y(e, n) {
			n = n || {};
			var i = e.config,
				o = i.easing,
				u = n.tab;
			if (u !== e.current) {
				e.current = u, e.links.each(function (e, n) {
					var r = t(n);
					n.getAttribute(f) === u ? r.addClass(p).each(h.intro) : r.hasClass(p) && r.removeClass(p).each(h.outro)
				});
				var c = [],
					l = [];
				e.panes.each(function (e, n) {
					var r = t(n);
					n.getAttribute(f) === u ? c.push(n) : r.hasClass(v) && l.push(n)
				});
				var d = t(c),
					g = t(l);
				if (n.immediate || i.immediate) return d.addClass(v).each(h.intro), g.removeClass(v), void(E || r.redraw.up());
				g.length && i.outro ? (g.each(h.outro), a(g).add("opacity " + i.outro + "ms " + o, {
					fallback: s
				}).start({
					opacity: 0
				}).then(_)) : _()
			}

			function _() {
				if (g.removeClass(v).css({
						opacity: "",
						transition: "",
						transform: "",
						width: "",
						height: ""
					}), d.addClass(v).each(h.intro), r.redraw.up(), !i.intro) return a(d).set({
					opacity: 1
				});
				a(d).set({
					opacity: 0
				}).redraw().add("opacity " + i.intro + "ms " + o, {
					fallback: s
				}).start({
					opacity: 1
				})
			}
		}
		return o.ready = o.design = o.preview = g, o.redraw = function () {
			E = !0, g(), E = !1
		}, o.destroy = function () {
			(e = u.find(d)).length && (e.each(m), _())
		}, o
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2);
	r.define("maps", t.exports = function (t, e) {
		var n, i = {},
			o = t(document),
			a = null,
			u = ".w-widget-map",
			c = "AIzaSyBjUBVI1rjV7I_GlIloHjSXGku7volNRJ8";

		function s() {
			r.resize.off(f), r.redraw.off(f)
		}

		function l(e, n) {
			v(n, t(n).data())
		}

		function f() {
			n.each(d)
		}

		function d(t, e) {
			var n = v(e);
			a.maps.event.trigger(n.map, "resize"), n.setMapPosition()
		}
		i.ready = function () {
			r.env() || function () {
				if (!(n = o.find(u)).length) return;
				null === a ? (t.getScript("https://maps.googleapis.com/maps/api/js?v=3.31&sensor=false&callback=_wf_maps_loaded&key=" + c), window._wf_maps_loaded = e) : e();

				function e() {
					window._wf_maps_loaded = function () {}, a = window.google, n.each(l), s(), r.resize.on(f), r.redraw.on(f)
				}
			}()
		}, i.destroy = s;
		var p = "w-widget-map";

		function v(e, n) {
			var i = t.data(e, p);
			if (i) return i;
			var o = t(e);
			i = t.data(e, p, {
				latLng: "51.511214,-0.119824",
				tooltip: "",
				style: "roadmap",
				zoom: 12,
				marker: new a.maps.Marker({
					draggable: !1
				}),
				infowindow: new a.maps.InfoWindow({
					disableAutoPan: !0
				})
			});
			var u = n.widgetLatlng || i.latLng;
			i.latLng = u;
			var c = u.split(","),
				s = new a.maps.LatLng(c[0], c[1]);
			i.latLngObj = s;
			var l = !(r.env.touch && n.disableTouch);
			i.map = new a.maps.Map(e, {
				center: i.latLngObj,
				zoom: i.zoom,
				maxZoom: 18,
				mapTypeControl: !1,
				panControl: !1,
				streetViewControl: !1,
				scrollwheel: !n.disableScroll,
				draggable: l,
				zoomControl: !0,
				zoomControlOptions: {
					style: a.maps.ZoomControlStyle.SMALL
				},
				mapTypeId: i.style
			}), i.marker.setMap(i.map), i.setMapPosition = function () {
				i.map.setCenter(i.latLngObj);
				var t = 0,
					e = 0,
					n = o.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
				t -= parseInt(n.paddingLeft, 10), t += parseInt(n.paddingRight, 10), e -= parseInt(n.paddingTop, 10), e += parseInt(n.paddingBottom, 10), (t || e) && i.map.panBy(t, e), o.css("position", "")
			}, a.maps.event.addListener(i.map, "tilesloaded", function () {
				a.maps.event.clearListeners(i.map, "tilesloaded"), i.setMapPosition()
			}), i.setMapPosition(), i.marker.setPosition(i.latLngObj), i.infowindow.setPosition(i.latLngObj);
			var f = n.widgetTooltip;
			f && (i.tooltip = f, i.infowindow.setContent(f), i.infowindowOpen || (i.infowindow.open(i.map, i.marker), i.infowindowOpen = !0));
			var d = n.widgetStyle;
			d && i.map.setMapTypeId(d);
			var v = n.widgetZoom;
			return null != v && (i.zoom = v, i.map.setZoom(Number(v))), a.maps.event.addListener(i.marker, "click", function () {
				window.open("https://maps.google.com/?z=" + i.zoom + "&daddr=" + i.latLng)
			}), i
		}
		return i
	})
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e-3": {
			"id": "e-3",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-4"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573582254514
		},
		"e-5": {
			"id": "e-5",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-6"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|c53dddd5-4274-fbc7-c25f-9d3e3797eff7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573582779918
		},
		"e-7": {
			"id": "e-7",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-8"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|d781278c-a8fa-4ccc-d6b1-9757696c1ade"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573582807059
		},
		"e-9": {
			"id": "e-9",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-10"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|5057ad63-2651-a9ae-9d26-25bbfc3e2c0a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573582819099
		},
		"e-19": {
			"id": "e-19",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-20"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|ccf276c6-b9ef-de2e-d9e5-99a69ec83481"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583550525
		},
		"e-21": {
			"id": "e-21",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-22"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1eb8551d-2380-0eb5-3afa-51391706d35d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583557228
		},
		"e-23": {
			"id": "e-23",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-24"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|6396983c-cf93-6e26-4aea-be4f8bc95d27"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583565011
		},
		"e-25": {
			"id": "e-25",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-26"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|9e60e3ce-20ed-2f97-fc8b-ea3ebcb8946c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583601571
		},
		"e-27": {
			"id": "e-27",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-28"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|8395fb76-7e54-711b-1b45-93302abbaf6a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583607179
		},
		"e-29": {
			"id": "e-29",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-30"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|b61a5157-1e59-b171-933a-64c3cd222181"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583622987
		},
		"e-31": {
			"id": "e-31",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-32"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|3b991d63-00d3-f546-b23f-fb8b2b1c16d8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583641050
		},
		"e-33": {
			"id": "e-33",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-34"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|e507fd80-730f-9202-9d05-8ef63afd88ae"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583647459
		},
		"e-35": {
			"id": "e-35",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-36"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|c6716efe-aca5-7dba-d96a-93e00122d095"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583655723
		},
		"e-45": {
			"id": "e-45",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-46"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|eeb9d76b-c98d-4c82-dcac-c08b8471837d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573583733690
		},
		"e-47": {
			"id": "e-47",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-48"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|69b13578-11cc-07e2-7b6f-9d80e6507f41"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573583779986
		},
		"e-49": {
			"id": "e-49",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-50"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|9fccef57-5254-c03a-bd64-8df149f0ec52"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573583849353
		},
		"e-51": {
			"id": "e-51",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-52"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|37cff92b-83be-acd7-5202-830322395efd"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573583859137
		},
		"e-53": {
			"id": "e-53",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-54"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|a9d3296d-324d-999a-e39b-b45a201cd4d9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573583870665
		},
		"e-61": {
			"id": "e-61",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-62"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|4022e774-6486-3996-1e15-5fa71ecfaf07"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573584080431
		},
		"e-63": {
			"id": "e-63",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-64"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|eaada407-c9d5-90d5-c32d-ec39aedfa7a5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573584090375
		},
		"e-65": {
			"id": "e-65",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-66"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|59321013-e80d-6823-3c44-0b85318c926a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573584101294
		},
		"e-67": {
			"id": "e-67",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-68"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573584313718
		},
		"e-69": {
			"id": "e-69",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-70"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|aa4006da-1763-a634-46b6-45a5ed064368"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587131400
		},
		"e-71": {
			"id": "e-71",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-72"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|e0f6cd38-def2-1f08-cd4c-1529440fda1a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587137766
		},
		"e-73": {
			"id": "e-73",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-74"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|1d6f2867-c126-705b-c797-cc9634e7e7b7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587145630
		},
		"e-75": {
			"id": "e-75",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-76"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|0253e96b-d0f4-b4d2-eab4-8e8f89939f06"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587165374
		},
		"e-77": {
			"id": "e-77",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-78"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|01c02e16-1ba2-171e-8ebc-0f3dee04df62"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587171110
		},
		"e-79": {
			"id": "e-79",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-80"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|5ccf3833-e6b9-8a02-903b-542503d087c0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587182255
		},
		"e-81": {
			"id": "e-81",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-82"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|18f6421e-d048-1ba4-15ec-2627cc7f9668"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587194293
		},
		"e-83": {
			"id": "e-83",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-84"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|d642f784-49df-3a25-c6e9-8c933b3ea7aa"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587202360
		},
		"e-85": {
			"id": "e-85",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-86"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|7e7d0305-44d3-9506-1e99-da16a490eaac"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587209621
		},
		"e-87": {
			"id": "e-87",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-88"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|2aa015a6-151e-3e3a-5f21-c4f9688f2070"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587229877
		},
		"e-89": {
			"id": "e-89",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-90"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|4aff2db4-d9ad-1494-6327-971c74c9882f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587237573
		},
		"e-91": {
			"id": "e-91",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-92"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|1c655f8b-c8a2-fa35-c711-7dbcd568a021"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587245591
		},
		"e-93": {
			"id": "e-93",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-94"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|14fbcb7d-c2ca-82de-6f10-308f45e75532"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587275166
		},
		"e-95": {
			"id": "e-95",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-96"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|a0f710ec-dd1b-44e9-fc5e-87fde22e035f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587312685
		},
		"e-97": {
			"id": "e-97",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-98"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|2fa71541-061f-8988-58a5-5885a4b07747"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587354093
		},
		"e-99": {
			"id": "e-99",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-100"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|4c5d5723-0b3c-a254-d12c-a4ffd8b9e04d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587359325
		},
		"e-101": {
			"id": "e-101",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-102"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|c9320a88-79ab-2e4b-1336-18cb242bbbdc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587368516
		},
		"e-103": {
			"id": "e-103",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-104"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|16344400-e7e4-4d65-e955-2857d8367988"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587385596
		},
		"e-105": {
			"id": "e-105",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-106"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|c6a5dac2-bf6c-4ca8-0776-ba286e3c6394"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587392076
		},
		"e-107": {
			"id": "e-107",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-108"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|6e4ce026-2e9e-483d-3d95-a69d4dfc21dd"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587399756
		},
		"e-109": {
			"id": "e-109",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-110"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|a2caa0c0-934a-06db-3ab4-5e13ecf60263"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587409932
		},
		"e-117": {
			"id": "e-117",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-118"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573587506493
		},
		"e-119": {
			"id": "e-119",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-120"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|3a3bcc60-6a63-f978-f1f3-e76cd7effb27"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587655338
		},
		"e-121": {
			"id": "e-121",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-122"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|13cf0e30-73b1-73cf-d0fc-be5711178507"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587662250
		},
		"e-123": {
			"id": "e-123",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-124"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|cf647cab-98da-1284-8225-145914911cf2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587670153
		},
		"e-125": {
			"id": "e-125",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-126"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|5137a4c6-b658-18f2-df31-a7f3127ef909"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1573587690858
		},
		"e-127": {
			"id": "e-127",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-128"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|568995fa-ca5f-253a-91c4-9f0ed3604b25"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1573587709466
		},
		"e-129": {
			"id": "e-129",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-130"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|b9480ed2-f799-4182-89df-f9403e879479"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587722065
		},
		"e-131": {
			"id": "e-131",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-132"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|952e1065-4bdd-5be8-85e3-d22feb032748"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587728809
		},
		"e-133": {
			"id": "e-133",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-134"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|58a50e4d-fc3c-b0d5-beb5-498c04cdd9f2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587740714
		},
		"e-135": {
			"id": "e-135",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-136"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|eef9b59a-846b-9ffb-ba75-a48f15d05005"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587761081
		},
		"e-137": {
			"id": "e-137",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-138"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|a45e277f-7440-9dcc-5ff5-8ff8bab37032"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587767633
		},
		"e-139": {
			"id": "e-139",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-140"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|30e495a0-ec6a-71bd-c1f2-bc83a7732e2a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587775681
		},
		"e-141": {
			"id": "e-141",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-142"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|8f6535a1-fedf-2973-8eb5-22c686adf4a4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587802896
		},
		"e-143": {
			"id": "e-143",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-144"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|7b31dbee-a0f2-9dfc-263b-50688619a16f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587822280
		},
		"e-145": {
			"id": "e-145",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-146"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|52c666db-2a3e-2661-f418-27fdec088af4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573587834833
		},
		"e-147": {
			"id": "e-147",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-148"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573587895512
		},
		"e-149": {
			"id": "e-149",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-150"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|3334c0d1-4c66-695f-1c2d-0b03ffb949a2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589059179
		},
		"e-151": {
			"id": "e-151",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-152"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|2f4cb665-ab97-b613-793c-029dfa688728"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589066882
		},
		"e-153": {
			"id": "e-153",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-154"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|902fd8e7-7e9d-ea6e-883c-a6731d2a9bed"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589074521
		},
		"e-155": {
			"id": "e-155",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-156"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|bcae713a-11fa-1f46-7e8c-f57144cbb86d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 300,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589083809
		},
		"e-157": {
			"id": "e-157",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-158"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|090278af-f448-277c-6532-069f89110a33"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589104202
		},
		"e-159": {
			"id": "e-159",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-160"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|ba5c0685-5ab3-de16-252e-2f1e32e10912"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1573589112625
		},
		"e-161": {
			"id": "e-161",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-162"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|94a9d4ae-c93f-113e-1796-51c53a2349db"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1573589123690
		},
		"e-165": {
			"id": "e-165",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-166"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|3b991d63-00d3-f546-b23f-fb8b2b1c16d8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589178634
		},
		"e-167": {
			"id": "e-167",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-168"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|e507fd80-730f-9202-9d05-8ef63afd88ae"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589189081
		},
		"e-169": {
			"id": "e-169",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-170"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|c6716efe-aca5-7dba-d96a-93e00122d095"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589198049
		},
		"e-171": {
			"id": "e-171",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-172"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|740ce359-e116-f8f6-30c1-d8bf9c6c17a2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589208993
		},
		"e-173": {
			"id": "e-173",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-174"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|8a04ede8-aa2a-3b61-060b-c0a1d777c938"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589215576
		},
		"e-175": {
			"id": "e-175",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-176"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|0ffb4083-33ea-2a02-670a-1101ad8f1031"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589227121
		},
		"e-177": {
			"id": "e-177",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-178"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|4022e774-6486-3996-1e15-5fa71ecfaf07"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589269712
		},
		"e-179": {
			"id": "e-179",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-180"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|eaada407-c9d5-90d5-c32d-ec39aedfa7a5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589279976
		},
		"e-181": {
			"id": "e-181",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-182"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|59321013-e80d-6823-3c44-0b85318c926a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589288520
		},
		"e-183": {
			"id": "e-183",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-184"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|2d6abc3b-807e-e564-7b1f-af35722a6494"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589310879
		},
		"e-185": {
			"id": "e-185",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-186"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|6b5bb0db-40de-991e-56df-ce68616935bc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589322585
		},
		"e-187": {
			"id": "e-187",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-188"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|06acd504-60d8-c715-97d2-9fa8783fb100"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589331815
		},
		"e-189": {
			"id": "e-189",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-190"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|e9e1802a-441b-07ff-66bd-850acc38e0ee"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573589349551
		},
		"e-191": {
			"id": "e-191",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-11",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-192"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573590052692
		},
		"e-197": {
			"id": "e-197",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-198"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|ba3a970b-28cd-0943-eae7-cad33f261114"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573590458231
		},
		"e-198": {
			"id": "e-198",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-197"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|ba3a970b-28cd-0943-eae7-cad33f261114"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573590458256
		},
		"e-199": {
			"id": "e-199",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-200"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|e264c54c-7716-6656-b6de-1be88489123f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573590598454
		},
		"e-200": {
			"id": "e-200",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-199"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|e264c54c-7716-6656-b6de-1be88489123f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573590598478
		},
		"e-201": {
			"id": "e-201",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-202"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|01812d9c-835e-f8a0-1301-bb96023907c2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573590616365
		},
		"e-202": {
			"id": "e-202",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-201"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|01812d9c-835e-f8a0-1301-bb96023907c2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573590616369
		},
		"e-203": {
			"id": "e-203",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-204"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|7c52d4d7-58ef-a0bb-1a54-c6a79671c128"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1573590725942
		},
		"e-205": {
			"id": "e-205",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-206"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|04351359-d642-d584-5ddc-efc768aa79d9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573590744701
		},
		"e-207": {
			"id": "e-207",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-208"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|2e6bb0eb-ea7a-c088-7912-960deee1384b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573590752997
		},
		"e-209": {
			"id": "e-209",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-210"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|2b9d3d9a-c398-5477-0ecd-24811a78615c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573590950631
		},
		"e-211": {
			"id": "e-211",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-212"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|c8a20afa-e399-11e5-4348-f65303fdfd92"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573590964075
		},
		"e-213": {
			"id": "e-213",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-214"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|68f3bd28-3cf0-aeaf-1216-807c88978407"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573590974971
		},
		"e-215": {
			"id": "e-215",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-216"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|0e9d085e-23cd-1664-9e67-13fbe02dea07"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573591311974
		},
		"e-217": {
			"id": "e-217",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-218"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|235527d4-fff1-6f6b-80a0-3e1fa1c5b14e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573591321150
		},
		"e-219": {
			"id": "e-219",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-220"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|7d465b35-2fa3-cefc-6e2e-2e82f9ba230e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573591331102
		},
		"e-221": {
			"id": "e-221",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-222"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|2d6abc3b-807e-e564-7b1f-af35722a6494"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573591357789
		},
		"e-223": {
			"id": "e-223",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-224"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|6b5bb0db-40de-991e-56df-ce68616935bc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573591366053
		},
		"e-225": {
			"id": "e-225",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-226"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|06acd504-60d8-c715-97d2-9fa8783fb100"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573591375958
		},
		"e-227": {
			"id": "e-227",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-228"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573591949960
		},
		"e-229": {
			"id": "e-229",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-230"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|0de3b2e9-8d81-233e-432c-c22a2df51455"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573592099463
		},
		"e-231": {
			"id": "e-231",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-232"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|a4bc5ee3-b8df-189e-259a-8dc519929d99"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573592105342
		},
		"e-233": {
			"id": "e-233",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-234"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|2c2e2003-323f-64a8-cdf5-3892d4c56764"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573592115845
		},
		"e-243": {
			"id": "e-243",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-244"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|476f47e6-1ff4-279f-1ccd-9daa126f4c78"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573592214830
		},
		"e-245": {
			"id": "e-245",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-246"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|89e9b0db-d4ad-8e61-92e0-3d6f5241c75b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573592222549
		},
		"e-247": {
			"id": "e-247",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-248"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|d091f3e2-37bb-4e33-7cf8-3f1a01925815"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1573592230700
		},
		"e-249": {
			"id": "e-249",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-250"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|40485c9b-84ad-89d4-5c0c-dbd40235302f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1573592250150
		},
		"e-251": {
			"id": "e-251",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-252"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|60e76a75-30e6-49bb-8f7b-b2e102a3444e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1573592267191
		},
		"e-263": {
			"id": "e-263",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-264"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1573592658859
		},
		"e-267": {
			"id": "e-267",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-268"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|708d2fc6-2765-c15d-5977-374a3a1f1c9a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1573592793691
		},
		"e-269": {
			"id": "e-269",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-270"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5df8e6a08de4503294fb3897|af9216cc-28dc-20c1-6868-cfc7e94493a1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1576593145686
		},
		"e-271": {
			"id": "e-271",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-272"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5df8e6a08de4503294fb3897|af9216cc-28dc-20c1-6868-cfc7e94493a3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1576593145686
		},
		"e-273": {
			"id": "e-273",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-274"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578418199909
		},
		"e-275": {
			"id": "e-275",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-17",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-276"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "fda9d51d-eb7c-145e-7da5-0a0768931047"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578418301623
		},
		"e-277": {
			"id": "e-277",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-278"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578418730060
		},
		"e-279": {
			"id": "e-279",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-280"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578418810118
		},
		"e-281": {
			"id": "e-281",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-282"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|9ca05e73-b493-d3d0-3f97-208efb3f1456"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578418930785
		},
		"e-282": {
			"id": "e-282",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-281"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|9ca05e73-b493-d3d0-3f97-208efb3f1456"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578418930793
		},
		"e-283": {
			"id": "e-283",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-284"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|84103399-a4b5-0cb8-f5c2-cf272ded4e41"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419036890
		},
		"e-284": {
			"id": "e-284",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-283"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|84103399-a4b5-0cb8-f5c2-cf272ded4e41"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419036896
		},
		"e-285": {
			"id": "e-285",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-286"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|d08c93b0-3816-4bdb-c5f1-ff1821a02833"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419050971
		},
		"e-286": {
			"id": "e-286",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-285"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|d08c93b0-3816-4bdb-c5f1-ff1821a02833"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419050997
		},
		"e-287": {
			"id": "e-287",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-288"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|1758c0cc-c064-0f55-c6cd-86d616cf253f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419070106
		},
		"e-288": {
			"id": "e-288",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-287"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|1758c0cc-c064-0f55-c6cd-86d616cf253f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419070111
		},
		"e-289": {
			"id": "e-289",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-290"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|3f0a9c22-70e2-832b-e049-5a192960d01e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419084452
		},
		"e-290": {
			"id": "e-290",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-289"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|3f0a9c22-70e2-832b-e049-5a192960d01e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419084477
		},
		"e-291": {
			"id": "e-291",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-292"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|794e372d-4778-4953-4612-7ce3e3e065b3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419102818
		},
		"e-292": {
			"id": "e-292",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-291"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|794e372d-4778-4953-4612-7ce3e3e065b3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419102824
		},
		"e-293": {
			"id": "e-293",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-294"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419177674
		},
		"e-295": {
			"id": "e-295",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-296"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|6dc9a1f2-07ea-4645-f55b-33560fed6a16"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419228678
		},
		"e-296": {
			"id": "e-296",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-295"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|6dc9a1f2-07ea-4645-f55b-33560fed6a16"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578419228683
		},
		"e-297": {
			"id": "e-297",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-298"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|46ea2ec8-58bb-5383-8817-dcce07189a8e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578420737899
		},
		"e-298": {
			"id": "e-298",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-297"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|46ea2ec8-58bb-5383-8817-dcce07189a8e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578420737905
		},
		"e-299": {
			"id": "e-299",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-300"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|27293a48-ba17-e144-44ec-347ed53309e1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578420766755
		},
		"e-300": {
			"id": "e-300",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-299"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|27293a48-ba17-e144-44ec-347ed53309e1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578420766762
		},
		"e-303": {
			"id": "e-303",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-304"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|55c60dcf-092d-4159-b119-070d496c07c7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578420977384
		},
		"e-305": {
			"id": "e-305",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-306"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|4c036eb0-34a2-9e14-1fd3-f92b0cd1a036"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578420985584
		},
		"e-307": {
			"id": "e-307",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-308"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|f85859bf-c523-ea74-43c3-1d58108c0891"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421000118
		},
		"e-309": {
			"id": "e-309",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-310"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|56e3f430-0963-3d43-aa15-51ddeb2e6980"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 600,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421013325
		},
		"e-317": {
			"id": "e-317",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-318"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|264acbd7-dd02-3938-be8a-776643aea7c0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421058669
		},
		"e-319": {
			"id": "e-319",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-320"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|d7939fe5-e35a-356e-ac2a-0f1ae8ad91c4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421067117
		},
		"e-321": {
			"id": "e-321",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-322"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|cb07f387-06ef-b701-b291-57c4ec30a561"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421078405
		},
		"e-323": {
			"id": "e-323",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-324"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|05b7f01d-2d16-5f27-f2fe-0574a8a3a701"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 2,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421090926
		},
		"e-325": {
			"id": "e-325",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-326"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|d19d8369-de21-1d4f-051b-ea7ffa00efe6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421106262
		},
		"e-327": {
			"id": "e-327",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-328"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|c16bc5df-f1ea-b803-f9ea-afae3e6ff0be"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421115165
		},
		"e-329": {
			"id": "e-329",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-330"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|933f1f14-6927-a5d4-3b86-c18d9893cd6f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421132030
		},
		"e-331": {
			"id": "e-331",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-332"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|c6bb4aa9-7652-16db-7d89-3b4c2489489f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421142285
		},
		"e-333": {
			"id": "e-333",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-334"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|9f929e6b-7c0e-a6a9-40be-48ae64dd4952"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421152357
		},
		"e-335": {
			"id": "e-335",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-336"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|437622ca-d412-e1f0-ca54-b52b1a99cb7c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578421406291
		},
		"e-337": {
			"id": "e-337",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-338"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|ccf276c6-b9ef-de2e-d9e5-99a69ec83481"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421416506
		},
		"e-339": {
			"id": "e-339",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-340"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|1eb8551d-2380-0eb5-3afa-51391706d35d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421422210
		},
		"e-341": {
			"id": "e-341",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-342"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|6396983c-cf93-6e26-4aea-be4f8bc95d27"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421430170
		},
		"e-343": {
			"id": "e-343",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-344"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|19222a95-9452-d00d-454d-3d8eb54320ca"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421445395
		},
		"e-345": {
			"id": "e-345",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-346"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|522b7bee-46f8-10d5-2d4c-cc77bc73146e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421451178
		},
		"e-347": {
			"id": "e-347",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-348"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|725c1462-a530-c8ad-c097-636439a0e40d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421458810
		},
		"e-349": {
			"id": "e-349",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-350"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|4022e774-6486-3996-1e15-5fa71ecfaf07"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421492586
		},
		"e-351": {
			"id": "e-351",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-352"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|eaada407-c9d5-90d5-c32d-ec39aedfa7a5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421499818
		},
		"e-353": {
			"id": "e-353",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-354"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|59321013-e80d-6823-3c44-0b85318c926a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421507945
		},
		"e-355": {
			"id": "e-355",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-356"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|2d6abc3b-807e-e564-7b1f-af35722a6494"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421521641
		},
		"e-357": {
			"id": "e-357",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-358"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|6b5bb0db-40de-991e-56df-ce68616935bc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421529553
		},
		"e-359": {
			"id": "e-359",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-360"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864|06acd504-60d8-c715-97d2-9fa8783fb100"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578421539873
		},
		"e-361": {
			"id": "e-361",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-362"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|9943525d-3efb-930c-6af8-3d314aaa1396"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578430893090
		},
		"e-363": {
			"id": "e-363",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-364"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|82ea194e-6b6b-2c6c-e0fb-10f6b788c6ae"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578430901938
		},
		"e-365": {
			"id": "e-365",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-366"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|0152f405-a798-2698-3915-e8cdd894ff1b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578430912617
		},
		"e-367": {
			"id": "e-367",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-368"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|0b5af5bc-d997-b749-5e0c-141ff8a6e94c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578430928440
		},
		"e-369": {
			"id": "e-369",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-370"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|8c38f114-99f8-31bf-0061-333cf7a0a521"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578430935073
		},
		"e-371": {
			"id": "e-371",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-372"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|f05be598-019b-62ad-9a2c-65d9ba8ea2a9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578430944313
		},
		"e-397": {
			"id": "e-397",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-398"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|25c5125f-df77-67a6-8a6b-86100d130988"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431106576
		},
		"e-399": {
			"id": "e-399",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-400"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|fda9b0ca-3f09-fdb7-b960-ffa9f8556ebb"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431112175
		},
		"e-401": {
			"id": "e-401",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-402"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|3899799d-43bb-e604-d357-9013491ee568"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431121055
		},
		"e-403": {
			"id": "e-403",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-404"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|f416503e-9912-69f8-b60d-696ba6b4433a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431143934
		},
		"e-405": {
			"id": "e-405",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-406"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|b8059dfe-72dc-3b44-b921-a1eedfc71538"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431155422
		},
		"e-407": {
			"id": "e-407",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-408"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|0eeda46d-06d5-590d-8ffe-1c052d7d53cd"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431164062
		},
		"e-409": {
			"id": "e-409",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-410"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|0b5af5bc-d997-b749-5e0c-141ff8a6e94c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431193302
		},
		"e-411": {
			"id": "e-411",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-412"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|8c38f114-99f8-31bf-0061-333cf7a0a521"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431199286
		},
		"e-413": {
			"id": "e-413",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-414"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|f05be598-019b-62ad-9a2c-65d9ba8ea2a9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431209870
		},
		"e-415": {
			"id": "e-415",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-416"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|119b4b59-76a4-35a8-0654-efcd06a51347"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431224958
		},
		"e-417": {
			"id": "e-417",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-418"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|c64c0755-c466-260c-56a8-68bd398a82e0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431232941
		},
		"e-419": {
			"id": "e-419",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-420"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|d1199b3d-dae9-374d-fc16-b16724103a4b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431240861
		},
		"e-421": {
			"id": "e-421",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-422"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|6acd5c83-d5d0-bac9-7775-09941b3bce1f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 2,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431250869
		},
		"e-423": {
			"id": "e-423",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-424"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|76ea4e3f-58b3-d689-c423-547e3a2c4ec1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431262877
		},
		"e-425": {
			"id": "e-425",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-426"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|a3d4b983-b79f-adb1-1ab4-5423147565a1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431271774
		},
		"e-427": {
			"id": "e-427",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-428"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|b8c98ba1-09d8-e9c9-e350-f959b74b8f46"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431284486
		},
		"e-429": {
			"id": "e-429",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-430"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|da88b124-7573-1b5a-618e-741d187d23bc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431294477
		},
		"e-431": {
			"id": "e-431",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-432"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|10530549-d130-7c13-5b05-5a24872ae0f0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431304934
		},
		"e-433": {
			"id": "e-433",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-434"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|7d077031-cf0a-36ca-ba77-737b1d73e874"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431315597
		},
		"e-435": {
			"id": "e-435",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-436"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|7f46a3e6-ef9d-1120-3746-d2d2c5e7f0fe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431323453
		},
		"e-437": {
			"id": "e-437",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-438"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e29|20cede08-75d0-05b3-b9c3-bcfbc50af454"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578431332598
		},
		"e-443": {
			"id": "e-443",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-444"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "0aa23d50-42fe-dba2-e74c-5c7dbfbeb5e8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578431772913
		},
		"e-445": {
			"id": "e-445",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-446"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cb4|a7380c69-3842-b79c-f803-ec699509e86e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578431845556
		},
		"e-447": {
			"id": "e-447",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-448"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cb4|cf467dc4-895f-9920-edf0-85ece19514d3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578431875192
		},
		"e-449": {
			"id": "e-449",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-450"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|a07e6b8a-22de-40dc-7c7f-0a126705f056"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578431926064
		},
		"e-451": {
			"id": "e-451",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-452"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|adce214a-89fd-7afa-337a-d6bc4e9f7f93"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578431939008
		},
		"e-457": {
			"id": "e-457",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-458"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|1ed4c60a-aedd-f49e-ecf4-b2f740378755"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578431978822
		},
		"e-459": {
			"id": "e-459",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-460"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|bbaaaa10-2699-4c21-5e46-95ad7549f861"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578432000573
		},
		"e-461": {
			"id": "e-461",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-462"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|1542bd58-e6d7-47d5-85b9-8ffcaff2b592"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578432018794
		},
		"e-463": {
			"id": "e-463",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-464"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|a55df192-7322-f37f-9b65-88269d64568c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578432038807
		},
		"e-465": {
			"id": "e-465",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-466"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|9e012f5f-2ad3-2377-5b8a-1db9811c2f45"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578432047486
		},
		"e-467": {
			"id": "e-467",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-468"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|9d482dc1-b00d-c828-4032-f76efdb9bdab"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578432061758
		},
		"e-469": {
			"id": "e-469",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-470"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e|aa0ec9d6-acc5-92f6-d399-b8df73e90f5c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578432079606
		},
		"e-481": {
			"id": "e-481",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-482"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475288921
		},
		"e-483": {
			"id": "e-483",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-484"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|d55bbbb9-22f9-6a20-f201-56d7ea733234"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475335473
		},
		"e-485": {
			"id": "e-485",
			"eventTypeId": "PAGE_SCROLL_UP",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-486"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475374287
		},
		"e-489": {
			"id": "e-489",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-490"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|b9becafb-e0fa-b648-fa08-380de8f796ea"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475422166
		},
		"e-491": {
			"id": "e-491",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-492"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|04d5d973-074f-9c65-3fd2-8e4845a0425b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475482151
		},
		"e-493": {
			"id": "e-493",
			"eventTypeId": "PAGE_SCROLL_UP",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-494"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475518990
		},
		"e-495": {
			"id": "e-495",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-496"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|73766f72-cfb4-0801-712a-0f436f344ae4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475526949
		},
		"e-497": {
			"id": "e-497",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-498"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|31940aa0-df7a-ac1f-96b1-75814e65ec4a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475547741
		},
		"e-499": {
			"id": "e-499",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-500"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|f747a4ca-c1f0-fcbd-057f-635f7f18c3d3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475569079
		},
		"e-501": {
			"id": "e-501",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-502"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19|97c6f883-1ef0-3290-ee72-71374fd57b81"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475577493
		},
		"e-503": {
			"id": "e-503",
			"eventTypeId": "PAGE_SCROLL_UP",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-504"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475838978
		},
		"e-505": {
			"id": "e-505",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-506"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|c1f97468-41fd-72f0-66d8-82f5a48445e9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475849677
		},
		"e-507": {
			"id": "e-507",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-508"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|b1659b07-3c2f-7051-2546-8ff71f1c7dec"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475863759
		},
		"e-509": {
			"id": "e-509",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-510"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|1bb82e6b-b9c8-0fa2-04db-0c2be994dcd6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475872918
		},
		"e-511": {
			"id": "e-511",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-512"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|7a184b6e-74cf-d521-958b-4d38050df35e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475882006
		},
		"e-513": {
			"id": "e-513",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-514"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|d64ef8cc-693d-fac6-eab3-56eac92dcc40"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475894510
		},
		"e-515": {
			"id": "e-515",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-516"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|bbaaaa10-2699-4c21-5e46-95ad7549f861"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578475969550
		},
		"e-517": {
			"id": "e-517",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-518"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|00e9a496-01d9-aa68-44eb-7f96ed75e3bc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578475983588
		},
		"e-519": {
			"id": "e-519",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-520"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|82a24a84-f978-26f2-9806-fe580413e7cf"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476005324
		},
		"e-521": {
			"id": "e-521",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-522"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|a25f9082-8381-88fa-b0c7-c28d1cc94ddc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476022773
		},
		"e-523": {
			"id": "e-523",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-524"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|16344400-e7e4-4d65-e955-2857d8367988"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476036325
		},
		"e-525": {
			"id": "e-525",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-526"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|2fa71541-061f-8988-58a5-5885a4b07747"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476055237
		},
		"e-527": {
			"id": "e-527",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-528"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|4c5d5723-0b3c-a254-d12c-a4ffd8b9e04d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476062236
		},
		"e-529": {
			"id": "e-529",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-530"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|c9320a88-79ab-2e4b-1336-18cb242bbbdc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476072452
		},
		"e-531": {
			"id": "e-531",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-532"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|997081de-b369-4724-8e9d-d1a6f39880c3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578476091804
		},
		"e-533": {
			"id": "e-533",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-534"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16|2fd69e3a-98e8-3df8-8449-4a5da38c9ad5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578476104684
		},
		"e-535": {
			"id": "e-535",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-536"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|c64259f1-6575-5912-15c1-099d2c03e700"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476214424
		},
		"e-537": {
			"id": "e-537",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-538"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|4179d531-0a90-416a-d71e-efb2936d1986"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476237197
		},
		"e-539": {
			"id": "e-539",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-540"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|dce75329-343a-a060-62a6-30b4a61df967"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476258497
		},
		"e-543": {
			"id": "e-543",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-544"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|937123b9-22b4-352c-feec-19cfd164529e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476295762
		},
		"e-545": {
			"id": "e-545",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-546"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|0d7c6f52-f411-1403-c7fe-a66f7fe2d372"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476306468
		},
		"e-547": {
			"id": "e-547",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-548"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|c206f54f-ce29-4c34-16c7-58eb4baf8863"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476321329
		},
		"e-549": {
			"id": "e-549",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-550"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|6498e8ea-6f88-8295-5096-ad222fb6df5a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476358740
		},
		"e-551": {
			"id": "e-551",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-552"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|027669b9-5910-4829-f873-80c8fe9e3cca"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476368864
		},
		"e-553": {
			"id": "e-553",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-554"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|8247bc71-195a-0349-7e31-705977c39824"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476385650
		},
		"e-555": {
			"id": "e-555",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-556"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|bbaaaa10-2699-4c21-5e46-95ad7549f861"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578476408418
		},
		"e-559": {
			"id": "e-559",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-560"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|aec7caeb-7a0c-dd3a-138a-18a294a3c0d7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476688891
		},
		"e-561": {
			"id": "e-561",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-562"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3c06804b-e2ef-508d-bc32-ca060df22061"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476697866
		},
		"e-563": {
			"id": "e-563",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-564"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|21441cc5-5f11-70ae-be37-5389ff9edcb7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578476722330
		},
		"e-565": {
			"id": "e-565",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-566"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|de43150f-e544-10a3-28c2-ecde727601f1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578476733126
		},
		"e-571": {
			"id": "e-571",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-572"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|c1f97468-41fd-72f0-66d8-82f5a48445e9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578476873848
		},
		"e-573": {
			"id": "e-573",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-574"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|7d65bbae-e935-b493-1387-fe9006278b42"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578476893562
		},
		"e-575": {
			"id": "e-575",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-576"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477000906
		},
		"e-587": {
			"id": "e-587",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-588"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|19222a95-9452-d00d-454d-3d8eb54320ca"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477190903
		},
		"e-589": {
			"id": "e-589",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-590"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|522b7bee-46f8-10d5-2d4c-cc77bc73146e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477199247
		},
		"e-591": {
			"id": "e-591",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-592"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|725c1462-a530-c8ad-c097-636439a0e40d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477212648
		},
		"e-595": {
			"id": "e-595",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-596"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477292383
		},
		"e-597": {
			"id": "e-597",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-598"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|0d2353dc-878b-947e-d021-e04eff698915"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477357823
		},
		"e-599": {
			"id": "e-599",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-600"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|18db08c8-81db-ef91-aecc-087eb0d4cdd8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477389079
		},
		"e-601": {
			"id": "e-601",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-602"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|7a3a928a-2abb-df91-3ad0-fb030a22d0c6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477415508
		},
		"e-603": {
			"id": "e-603",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-604"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|15ca1d36-3e75-187c-297c-fd6b1bfd6933"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477423060
		},
		"e-605": {
			"id": "e-605",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-606"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|668c9a78-244b-65ed-f016-20e5eedafe6c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477454295
		},
		"e-607": {
			"id": "e-607",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-608"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|ccf276c6-b9ef-de2e-d9e5-99a69ec83481"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477468644
		},
		"e-609": {
			"id": "e-609",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-610"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|1eb8551d-2380-0eb5-3afa-51391706d35d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477477203
		},
		"e-611": {
			"id": "e-611",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-612"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|6396983c-cf93-6e26-4aea-be4f8bc95d27"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477486091
		},
		"e-619": {
			"id": "e-619",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-620"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|19222a95-9452-d00d-454d-3d8eb54320ca"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477533186
		},
		"e-621": {
			"id": "e-621",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-622"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|522b7bee-46f8-10d5-2d4c-cc77bc73146e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477540907
		},
		"e-623": {
			"id": "e-623",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-624"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|725c1462-a530-c8ad-c097-636439a0e40d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477549754
		},
		"e-625": {
			"id": "e-625",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-626"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|d348a8fc-f06a-cc2d-d9e8-32c88c8eaf90"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477561347
		},
		"e-627": {
			"id": "e-627",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-628"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|9bbef9d2-2bad-e72c-6089-9e5e5b8df053"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477567707
		},
		"e-629": {
			"id": "e-629",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-630"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|c7df8f07-5420-b30b-f433-f3e42f5b2027"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477579578
		},
		"e-631": {
			"id": "e-631",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-632"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477596315
		},
		"e-635": {
			"id": "e-635",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-636"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|ecdd8bcf-25ce-495c-d3aa-6add2ac22fad"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477653778
		},
		"e-637": {
			"id": "e-637",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-638"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|cc64fd62-63a2-28da-aa00-c89861992e5c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477663027
		},
		"e-639": {
			"id": "e-639",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-640"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|37e84699-2917-2d4a-521c-9afe04c8476c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477672330
		},
		"e-641": {
			"id": "e-641",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-642"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|63488980-ca45-6734-642e-cec1b42c6f68"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477698802
		},
		"e-647": {
			"id": "e-647",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-648"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578477723314
		},
		"e-651": {
			"id": "e-651",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-652"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|7ba2a04f-fe58-13e5-966a-19adec696a73"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477884609
		},
		"e-653": {
			"id": "e-653",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-654"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|062a3ba1-8302-8e8d-0fef-827064769473"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477891673
		},
		"e-655": {
			"id": "e-655",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-656"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|7b8ce8bd-f012-81a4-edbb-642787fbc649"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578477900289
		},
		"e-657": {
			"id": "e-657",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-658"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|162de372-8e6b-a32f-ac31-7d3d88eed2a8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479566111
		},
		"e-659": {
			"id": "e-659",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-660"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|3941df79-8bae-15cb-2a67-1eab678a05f9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479574603
		},
		"e-661": {
			"id": "e-661",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-662"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|8645b83f-1ab4-b973-79a8-de97e7d09a5f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479583423
		},
		"e-671": {
			"id": "e-671",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-672"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|f07021b8-c3a9-9624-f769-be014f76e0b0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1578479685517
		},
		"e-672": {
			"id": "e-672",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-671"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|f07021b8-c3a9-9624-f769-be014f76e0b0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479685530
		},
		"e-673": {
			"id": "e-673",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-674"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|ba3c10a3-7e55-f755-428e-ce0b9fd9bfa6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479706758
		},
		"e-674": {
			"id": "e-674",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-673"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|ba3c10a3-7e55-f755-428e-ce0b9fd9bfa6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479706776
		},
		"e-675": {
			"id": "e-675",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-676"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|f9b486e4-180e-d745-84ca-0172e25c76c2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479720453
		},
		"e-676": {
			"id": "e-676",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-675"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|f9b486e4-180e-d745-84ca-0172e25c76c2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479720487
		},
		"e-677": {
			"id": "e-677",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-678"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|22361ac4-19ea-aaaa-02ba-ff2aea8c471f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479738965
		},
		"e-678": {
			"id": "e-678",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-677"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|22361ac4-19ea-aaaa-02ba-ff2aea8c471f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479738979
		},
		"e-679": {
			"id": "e-679",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-680"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|3b991d63-00d3-f546-b23f-fb8b2b1c16d8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479766037
		},
		"e-681": {
			"id": "e-681",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-682"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|e507fd80-730f-9202-9d05-8ef63afd88ae"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479774389
		},
		"e-683": {
			"id": "e-683",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-684"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|c6716efe-aca5-7dba-d96a-93e00122d095"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479783583
		},
		"e-685": {
			"id": "e-685",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-686"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|f4c53a98-b379-e710-cec0-67294e3eca2a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578479807660
		},
		"e-687": {
			"id": "e-687",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-688"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|eeb9d76b-c98d-4c82-dcac-c08b8471837d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479817013
		},
		"e-689": {
			"id": "e-689",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-690"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|15f42cf5-6315-c30e-5017-f31cc2b48ed7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479823340
		},
		"e-691": {
			"id": "e-691",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-692"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|4f7e3c1e-af30-2367-d81e-2e8e53a52f53"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479830262
		},
		"e-693": {
			"id": "e-693",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-694"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|baf4f867-f4c9-35c0-700a-0a9612623841"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479844764
		},
		"e-695": {
			"id": "e-695",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-696"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|04644944-e1cf-b4be-28e3-ea6445053cc7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479876229
		},
		"e-697": {
			"id": "e-697",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-698"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|f30cbd85-432c-99f7-8f79-c7d6ffb8b4e2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479883505
		},
		"e-699": {
			"id": "e-699",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-700"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|f345a123-863c-e46f-e6ca-dc22e7f3291b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479892763
		},
		"e-701": {
			"id": "e-701",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-702"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|2d6abc3b-807e-e564-7b1f-af35722a6494"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479905839
		},
		"e-703": {
			"id": "e-703",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-704"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|6b5bb0db-40de-991e-56df-ce68616935bc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479912076
		},
		"e-705": {
			"id": "e-705",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-706"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|06acd504-60d8-c715-97d2-9fa8783fb100"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578479924924
		},
		"e-713": {
			"id": "e-713",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-714"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e20|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480055019
		},
		"e-715": {
			"id": "e-715",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-716"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e20|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480062324
		},
		"e-717": {
			"id": "e-717",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-718"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e20|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480070063
		},
		"e-719": {
			"id": "e-719",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-720"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e20|cf467dc4-895f-9920-edf0-85ece19514d3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578480111487
		},
		"e-723": {
			"id": "e-723",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-724"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e20|a7380c69-3842-b79c-f803-ec699509e86e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578480155082
		},
		"e-725": {
			"id": "e-725",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-726"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|2c980ce5-42f8-fc4a-c9a9-2999079c37ec"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480176818
		},
		"e-727": {
			"id": "e-727",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-728"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|7e06734b-b7f5-22b6-0dd7-a0f543b014ea"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480184278
		},
		"e-729": {
			"id": "e-729",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-730"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|8518a68b-7374-e277-749e-8b04f39fb0c6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480193137
		},
		"e-733": {
			"id": "e-733",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-734"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|ee6d25c1-1052-27e0-3a06-add1efc64957"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578480345472
		},
		"e-735": {
			"id": "e-735",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-736"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|34fb4f22-f171-20ee-c56e-972e3ca607ce"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480356289
		},
		"e-737": {
			"id": "e-737",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-738"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|afda3cd2-2bb6-5b57-56bd-45eaa424c1e4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480364943
		},
		"e-739": {
			"id": "e-739",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-740"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|ee7bea46-cde1-dfed-cf44-2464f7655380"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480374872
		},
		"e-741": {
			"id": "e-741",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-742"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|fe828d49-1fe0-03c2-6f0a-be86ed470182"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480395265
		},
		"e-743": {
			"id": "e-743",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-744"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|4b1d0a14-809b-82e7-11e6-4785e54ab83a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480403425
		},
		"e-745": {
			"id": "e-745",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-746"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|0876b3b5-63b4-7b16-ccbb-53cd9e22c967"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480418837
		},
		"e-747": {
			"id": "e-747",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-748"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|816f6681-f876-7f13-3fd8-e139897fddc8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480435000
		},
		"e-749": {
			"id": "e-749",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-750"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|8450fdba-8efe-c343-7d65-4d70b79c0342"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480442469
		},
		"e-751": {
			"id": "e-751",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-752"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|26037651-a298-1545-dcd1-dc0761f7fdf2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480452584
		},
		"e-755": {
			"id": "e-755",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-756"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|c057caaa-9d08-a2ed-84f3-a813322f7ca5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578480527273
		},
		"e-757": {
			"id": "e-757",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-758"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27|3dcd76e7-5195-3560-29c6-9e7019f0c89b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578480555184
		},
		"e-759": {
			"id": "e-759",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-760"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|219a3cdd-15ce-3b9a-d974-07fe5c78950d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480582655
		},
		"e-761": {
			"id": "e-761",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-762"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|7e06734b-b7f5-22b6-0dd7-a0f543b014ea"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480589239
		},
		"e-763": {
			"id": "e-763",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-764"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|8518a68b-7374-e277-749e-8b04f39fb0c6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480597582
		},
		"e-765": {
			"id": "e-765",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-766"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|ee18c978-ff03-bed1-ae91-a440b5a618a6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578480608630
		},
		"e-767": {
			"id": "e-767",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-768"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|8d00539f-8323-8c2f-e1e9-f8438190bc50"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480620423
		},
		"e-769": {
			"id": "e-769",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-770"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|a1d09d46-84e1-20b1-b4ea-1c5d5e9ca135"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480626968
		},
		"e-771": {
			"id": "e-771",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-772"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|e7e9881e-1beb-6044-22f9-8be0567889fa"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480636534
		},
		"e-773": {
			"id": "e-773",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-774"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|41de48a5-b65c-e568-5612-cface97fbe1b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480658521
		},
		"e-775": {
			"id": "e-775",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-776"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|bb718d3c-61a8-a209-18af-b9fc799e85be"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480664469
		},
		"e-777": {
			"id": "e-777",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-778"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|d7692022-215c-9b7b-9cb4-0725176d612e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480677302
		},
		"e-779": {
			"id": "e-779",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-780"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|89431545-1a1c-b729-a304-4acabd7afaa2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480689415
		},
		"e-781": {
			"id": "e-781",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-782"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|2756543c-075d-2381-bc42-5994a7f88da5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480695830
		},
		"e-783": {
			"id": "e-783",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-784"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a|d2d7feda-df6f-459b-8bd5-17a4073397b1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480706684
		},
		"e-793": {
			"id": "e-793",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-794"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|ee6d25c1-1052-27e0-3a06-add1efc64957"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578480813021
		},
		"e-795": {
			"id": "e-795",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-796"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|34fb4f22-f171-20ee-c56e-972e3ca607ce"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480821246
		},
		"e-797": {
			"id": "e-797",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-798"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|afda3cd2-2bb6-5b57-56bd-45eaa424c1e4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480845332
		},
		"e-799": {
			"id": "e-799",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-800"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|ee7bea46-cde1-dfed-cf44-2464f7655380"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480858411
		},
		"e-801": {
			"id": "e-801",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-802"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|c580f870-803c-ce0a-7d2d-5c9ea22bd57e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480872301
		},
		"e-803": {
			"id": "e-803",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-804"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|1c7ae5b5-e31f-d838-a96f-d430956ad7ac"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480880097
		},
		"e-805": {
			"id": "e-805",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-806"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|816f6681-f876-7f13-3fd8-e139897fddc8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480901593
		},
		"e-807": {
			"id": "e-807",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-808"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|8450fdba-8efe-c343-7d65-4d70b79c0342"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480907625
		},
		"e-809": {
			"id": "e-809",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-810"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|26037651-a298-1545-dcd1-dc0761f7fdf2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578480916314
		},
		"e-813": {
			"id": "e-813",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-814"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|3dcd76e7-5195-3560-29c6-9e7019f0c89b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578480964988
		},
		"e-815": {
			"id": "e-815",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-816"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|365264bc-854b-8728-1582-132f9589849c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481334445
		},
		"e-817": {
			"id": "e-817",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-818"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|7e06734b-b7f5-22b6-0dd7-a0f543b014ea"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481344383
		},
		"e-819": {
			"id": "e-819",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-820"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|8518a68b-7374-e277-749e-8b04f39fb0c6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481357150
		},
		"e-821": {
			"id": "e-821",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-822"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|5078a872-b9b8-1353-6532-cbbefb76dafb"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481481136
		},
		"e-823": {
			"id": "e-823",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-824"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|8cf31ec2-84d6-18be-f0dc-bae7050b3693"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481503150
		},
		"e-825": {
			"id": "e-825",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-826"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|74fa56a4-4733-16ff-5b03-3588837ea8e4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481513076
		},
		"e-827": {
			"id": "e-827",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-828"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|514c291e-c630-7c98-3d0c-3a6722a70ad1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578481524966
		},
		"e-829": {
			"id": "e-829",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-830"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|24897a0a-7f53-92a6-4ed6-03703c010177"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481538825
		},
		"e-831": {
			"id": "e-831",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-832"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|088b0f1f-c0ba-0db1-1f11-66c13eaebe34"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481552634
		},
		"e-833": {
			"id": "e-833",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-834"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|9b396d23-d58a-1c70-b982-7e50cd91cf7d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578481565588
		},
		"e-835": {
			"id": "e-835",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-836"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|50625f8e-03ac-937b-8da3-f6289a67b64c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578481577954
		},
		"e-837": {
			"id": "e-837",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-838"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17|f7d0ecd0-0684-a936-daac-90ebbc4bff7b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578481607686
		},
		"e-841": {
			"id": "e-841",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-842"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e25|93336932-70a5-fce4-eb6b-a9647b04ded6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578481658838
		},
		"e-843": {
			"id": "e-843",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-844"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e25|c60fa156-745d-84b8-8c1b-899c2898f023"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578481674319
		},
		"e-845": {
			"id": "e-845",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-846"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e25|5e132107-92cb-2f27-6caf-601168562a4b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578481686716
		},
		"e-849": {
			"id": "e-849",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-850"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d5e|6cb24370-5905-0067-bd48-60f4a4cd1409"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481748293
		},
		"e-851": {
			"id": "e-851",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-852"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d5e|13e89c14-d394-d53c-bdc5-b1debd5a451a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481755646
		},
		"e-853": {
			"id": "e-853",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-854"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d5e|7e2f213f-04b6-8292-be04-3594ab12a484"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481766028
		},
		"e-855": {
			"id": "e-855",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-856"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d5e|f0e27071-543e-93c5-e4fe-f36c406785a6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578481779763
		},
		"e-859": {
			"id": "e-859",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-860"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d4c|6cb24370-5905-0067-bd48-60f4a4cd1409"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481823571
		},
		"e-861": {
			"id": "e-861",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-862"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d4c|13e89c14-d394-d53c-bdc5-b1debd5a451a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481830769
		},
		"e-863": {
			"id": "e-863",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-864"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d4c|7e2f213f-04b6-8292-be04-3594ab12a484"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481839398
		},
		"e-865": {
			"id": "e-865",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-866"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d4c|984b1762-5089-70a9-61d5-eeb741f48332"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578481851995
		},
		"e-869": {
			"id": "e-869",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-870"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1f|56565a27-ebad-a235-cc46-08a9ff2aec95"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481893994
		},
		"e-871": {
			"id": "e-871",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-872"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1f|73ea9191-bb77-489d-5ddf-5e67be527a17"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481901666
		},
		"e-873": {
			"id": "e-873",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-874"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1f|c82a37b2-d803-a6aa-b250-d2c21399b973"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578481911353
		},
		"e-875": {
			"id": "e-875",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-876"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1f|c60fa156-745d-84b8-8c1b-899c2898f023"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578481936159
		},
		"e-877": {
			"id": "e-877",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-878"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1f|5e132107-92cb-2f27-6caf-601168562a4b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578481944188
		},
		"e-881": {
			"id": "e-881",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-882"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e24|2c980ce5-42f8-fc4a-c9a9-2999079c37ec"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482059418
		},
		"e-883": {
			"id": "e-883",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-884"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e24|7e06734b-b7f5-22b6-0dd7-a0f543b014ea"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482066274
		},
		"e-885": {
			"id": "e-885",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-886"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e24|8518a68b-7374-e277-749e-8b04f39fb0c6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482102338
		},
		"e-887": {
			"id": "e-887",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-888"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e24|fabf2696-5eba-8ac9-c9a0-2bb55ecc5d0a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482124802
		},
		"e-891": {
			"id": "e-891",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-892"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|400405cb-2231-b075-becd-fd1f67d873df"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482166018
		},
		"e-893": {
			"id": "e-893",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-894"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|ac33cd18-35dc-dfae-faf2-a147208328bb"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482172729
		},
		"e-895": {
			"id": "e-895",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-896"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|44eb2ade-1eca-795c-7fbf-fbefe108056e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482183573
		},
		"e-915": {
			"id": "e-915",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-916"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|75128564-3589-1f39-db0d-5c46e8ec7de0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482399900
		},
		"e-919": {
			"id": "e-919",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-920"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482435791
		},
		"e-921": {
			"id": "e-921",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-922"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482445808
		},
		"e-923": {
			"id": "e-923",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-924"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482455783
		},
		"e-925": {
			"id": "e-925",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-926"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|8743c6fa-dc73-988e-af1b-206c44ef7c41"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482469755
		},
		"e-926": {
			"id": "e-926",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-925"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|8743c6fa-dc73-988e-af1b-206c44ef7c41"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482469794
		},
		"e-927": {
			"id": "e-927",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-928"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|16b24b13-120c-9ece-445f-709241e555fe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482486366
		},
		"e-928": {
			"id": "e-928",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-927"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|16b24b13-120c-9ece-445f-709241e555fe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482486410
		},
		"e-929": {
			"id": "e-929",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-930"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|e20129ee-2103-50b0-889f-e4e7443b142c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482513980
		},
		"e-930": {
			"id": "e-930",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-929"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|e20129ee-2103-50b0-889f-e4e7443b142c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482514023
		},
		"e-931": {
			"id": "e-931",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-932"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|a1e52d4e-1192-68b9-2ce9-4a14f1fc5402"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482535933
		},
		"e-932": {
			"id": "e-932",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-931"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|a1e52d4e-1192-68b9-2ce9-4a14f1fc5402"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482535952
		},
		"e-933": {
			"id": "e-933",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-934"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|ad8024b4-a100-de69-1fb8-ecdd5a3f242e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482552374
		},
		"e-934": {
			"id": "e-934",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-933"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|ad8024b4-a100-de69-1fb8-ecdd5a3f242e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482552419
		},
		"e-935": {
			"id": "e-935",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-936"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|32119974-8176-4efe-39d0-d309a7fecfd2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482570243
		},
		"e-936": {
			"id": "e-936",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-935"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13|32119974-8176-4efe-39d0-d309a7fecfd2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578482570261
		},
		"e-939": {
			"id": "e-939",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-940"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e23|f1ff6593-0df5-8cb0-366b-89d4a912d818"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482630332
		},
		"e-941": {
			"id": "e-941",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-942"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e23|a7b100fe-a69a-b508-942e-46baf5ea2688"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482638937
		},
		"e-943": {
			"id": "e-943",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-944"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e23|b2cabd76-16f4-186e-6996-e328e965d85a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482649805
		},
		"e-945": {
			"id": "e-945",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-946"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5df8e6a08de4503294fb3897|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482710251
		},
		"e-947": {
			"id": "e-947",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-948"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5df8e6a08de4503294fb3897|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482716529
		},
		"e-949": {
			"id": "e-949",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-950"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5df8e6a08de4503294fb3897|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578482725962
		},
		"e-953": {
			"id": "e-953",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-954"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1|3521825f-c1ad-097e-2eb5-e92faa702815"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483212425
		},
		"e-955": {
			"id": "e-955",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-956"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1|c81bd3e9-5579-fbcf-e6a6-1c510e97b3fe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483219341
		},
		"e-957": {
			"id": "e-957",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-958"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1|c494c4e3-6d12-c71f-8ba7-58b735b250ca"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483229355
		},
		"e-959": {
			"id": "e-959",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-960"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1|53468317-ea94-54ea-ba71-ea89518137c8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483247353
		},
		"e-961": {
			"id": "e-961",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-962"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1|b20445bb-d065-fc28-56fd-139ee84dfbc1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483261486
		},
		"e-963": {
			"id": "e-963",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-964"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1|c3499191-73a7-2a94-190a-4c18fc2bb2f5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483271411
		},
		"e-969": {
			"id": "e-969",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-970"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1|fabf2696-5eba-8ac9-c9a0-2bb55ecc5d0a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483335438
		},
		"e-971": {
			"id": "e-971",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-972"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e12|9713e1c4-96b1-6292-5de2-a35a17891111"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483394873
		},
		"e-973": {
			"id": "e-973",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-974"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e12|b2e5b0bf-1ab5-6253-c2e5-32260df6a9f8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483401192
		},
		"e-975": {
			"id": "e-975",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-976"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e12|87df1727-7aef-cc67-b19a-67648001a826"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483412184
		},
		"e-977": {
			"id": "e-977",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-978"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e12|bbcfaed7-269a-c0fb-e0f9-8d08ce818fd0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483432532
		},
		"e-979": {
			"id": "e-979",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-980"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483470593
		},
		"e-981": {
			"id": "e-981",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-982"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483479758
		},
		"e-983": {
			"id": "e-983",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-984"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483488050
		},
		"e-985": {
			"id": "e-985",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-986"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|8743c6fa-dc73-988e-af1b-206c44ef7c41"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483502109
		},
		"e-986": {
			"id": "e-986",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-985"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|8743c6fa-dc73-988e-af1b-206c44ef7c41"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483502131
		},
		"e-987": {
			"id": "e-987",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-988"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|ad8024b4-a100-de69-1fb8-ecdd5a3f242e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483521078
		},
		"e-988": {
			"id": "e-988",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-987"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|ad8024b4-a100-de69-1fb8-ecdd5a3f242e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483521126
		},
		"e-989": {
			"id": "e-989",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-990"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|32119974-8176-4efe-39d0-d309a7fecfd2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483537387
		},
		"e-990": {
			"id": "e-990",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-989"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|32119974-8176-4efe-39d0-d309a7fecfd2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483537433
		},
		"e-991": {
			"id": "e-991",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-992"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|04aec51d-b489-f67d-49b7-eb522704206c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483558844
		},
		"e-992": {
			"id": "e-992",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-991"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|04aec51d-b489-f67d-49b7-eb522704206c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483558869
		},
		"e-993": {
			"id": "e-993",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-994"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|44ef71db-3e30-0992-6cee-32296b2f75ee"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483573844
		},
		"e-994": {
			"id": "e-994",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-993"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|44ef71db-3e30-0992-6cee-32296b2f75ee"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483573867
		},
		"e-995": {
			"id": "e-995",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-996"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|cdbe5105-93a3-7d24-e2d0-e9d6d72548be"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483590844
		},
		"e-996": {
			"id": "e-996",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-995"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b|cdbe5105-93a3-7d24-e2d0-e9d6d72548be"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483590868
		},
		"e-999": {
			"id": "e-999",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1000"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483651030
		},
		"e-1001": {
			"id": "e-1001",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1002"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483658593
		},
		"e-1003": {
			"id": "e-1003",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1004"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483667932
		},
		"e-1005": {
			"id": "e-1005",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1006"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|a4034ed4-111a-1af2-3cbe-ad801db69ca6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483683478
		},
		"e-1007": {
			"id": "e-1007",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1008"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|97b7d3fc-c499-cee1-12cb-542937f19bfd"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483692813
		},
		"e-1009": {
			"id": "e-1009",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1010"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|0ac44c91-e224-8567-bd0c-3d90c1ef2299"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483701487
		},
		"e-1011": {
			"id": "e-1011",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1012"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|6cd8e306-9b13-751f-343e-7b941fc5774f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483718522
		},
		"e-1013": {
			"id": "e-1013",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1014"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|32119974-8176-4efe-39d0-d309a7fecfd2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483750016
		},
		"e-1014": {
			"id": "e-1014",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1013"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|32119974-8176-4efe-39d0-d309a7fecfd2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483750037
		},
		"e-1015": {
			"id": "e-1015",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1016"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|f0e4a309-27c4-0a63-351f-9c72c1213e47"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483784018
		},
		"e-1016": {
			"id": "e-1016",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1015"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|f0e4a309-27c4-0a63-351f-9c72c1213e47"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483784063
		},
		"e-1017": {
			"id": "e-1017",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1018"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|8af49fa5-fcfa-93d5-967b-ecb42b269611"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483807722
		},
		"e-1018": {
			"id": "e-1018",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1017"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|8af49fa5-fcfa-93d5-967b-ecb42b269611"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483807770
		},
		"e-1019": {
			"id": "e-1019",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1020"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|b871762e-da10-abd9-28a6-92278ea2f3db"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483834827
		},
		"e-1021": {
			"id": "e-1021",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1022"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|e4c776dd-1e92-0179-ca17-d0f4f2441615"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483842926
		},
		"e-1023": {
			"id": "e-1023",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1024"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|939724b7-6819-58b9-89a8-8a4e3b5296fc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483860826
		},
		"e-1025": {
			"id": "e-1025",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1026"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|43e460f3-fc6a-1d3f-69d8-b8bf08b04bda"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578483870918
		},
		"e-1027": {
			"id": "e-1027",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1028"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|c005aa51-614a-9953-eacc-8a9735480fb5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483901083
		},
		"e-1028": {
			"id": "e-1028",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1027"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|c005aa51-614a-9953-eacc-8a9735480fb5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483901104
		},
		"e-1029": {
			"id": "e-1029",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1030"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|d90864f2-7419-43e2-2981-d075937357ef"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483922910
		},
		"e-1030": {
			"id": "e-1030",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1029"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|d90864f2-7419-43e2-2981-d075937357ef"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483922953
		},
		"e-1031": {
			"id": "e-1031",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1032"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|f53f96a8-8b67-ce83-82a8-4899087316e9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483942445
		},
		"e-1032": {
			"id": "e-1032",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1031"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d|f53f96a8-8b67-ce83-82a8-4899087316e9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578483942489
		},
		"e-1035": {
			"id": "e-1035",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1036"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0f|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578494996189
		},
		"e-1037": {
			"id": "e-1037",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1038"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0f|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495004520
		},
		"e-1039": {
			"id": "e-1039",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1040"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0f|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495018751
		},
		"e-1043": {
			"id": "e-1043",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1044"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495069982
		},
		"e-1045": {
			"id": "e-1045",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1046"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495077902
		},
		"e-1047": {
			"id": "e-1047",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1048"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495087919
		},
		"e-1049": {
			"id": "e-1049",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1050"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|7b40da29-ac89-f1a2-86e3-82b3b6c33bbe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495102297
		},
		"e-1050": {
			"id": "e-1050",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1049"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|7b40da29-ac89-f1a2-86e3-82b3b6c33bbe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495102324
		},
		"e-1051": {
			"id": "e-1051",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1052"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|339d8fba-d91b-8957-7e40-5b1aa8b6383b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495148369
		},
		"e-1052": {
			"id": "e-1052",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1051"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|339d8fba-d91b-8957-7e40-5b1aa8b6383b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495148414
		},
		"e-1053": {
			"id": "e-1053",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1054"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|dd4df023-875f-a5ac-06f6-8e16e4d2c63b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495178483
		},
		"e-1054": {
			"id": "e-1054",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1053"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|dd4df023-875f-a5ac-06f6-8e16e4d2c63b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495178525
		},
		"e-1055": {
			"id": "e-1055",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-1056"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|ff717954-c4dd-8722-97c6-4a6b7785d7d4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1578495202613
		},
		"e-1057": {
			"id": "e-1057",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-1058"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|ee346f5e-23cd-5692-cba8-6c361a028ba0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578495213561
		},
		"e-1059": {
			"id": "e-1059",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-1060"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|ec5e1a8f-9d16-dffc-0fee-c1afb0e5f7a4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1578495229023
		},
		"e-1061": {
			"id": "e-1061",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-1062"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a|4c2352ac-243f-838f-9b9c-371decf14cd9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1578495237562
		},
		"e-1065": {
			"id": "e-1065",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1066"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e11|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495351979
		},
		"e-1067": {
			"id": "e-1067",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1068"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e11|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495360749
		},
		"e-1069": {
			"id": "e-1069",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1070"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e11|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495372164
		},
		"e-1071": {
			"id": "e-1071",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1072"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e11|34686e8c-b88d-3b51-5094-d48d79b2cf60"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495393758
		},
		"e-1073": {
			"id": "e-1073",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1074"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e11|ffe12d41-ce35-7fde-111c-2726b1dd62ef"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495406627
		},
		"e-1077": {
			"id": "e-1077",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1078"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e10|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495460159
		},
		"e-1079": {
			"id": "e-1079",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1080"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e10|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495467581
		},
		"e-1081": {
			"id": "e-1081",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1082"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e10|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495478339
		},
		"e-1085": {
			"id": "e-1085",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1086"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04df9|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495540282
		},
		"e-1087": {
			"id": "e-1087",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1088"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04df9|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495552185
		},
		"e-1089": {
			"id": "e-1089",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1090"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04df9|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495562533
		},
		"e-1093": {
			"id": "e-1093",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1094"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04de8|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495620536
		},
		"e-1095": {
			"id": "e-1095",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1096"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04de8|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495630052
		},
		"e-1097": {
			"id": "e-1097",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1098"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04de8|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495644724
		},
		"e-1101": {
			"id": "e-1101",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1102"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495701303
		},
		"e-1103": {
			"id": "e-1103",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1104"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495708734
		},
		"e-1105": {
			"id": "e-1105",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1106"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495720352
		},
		"e-1107": {
			"id": "e-1107",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1108"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|0b293b33-29b4-41f1-ca0c-5f7a0e6275c9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495745999
		},
		"e-1109": {
			"id": "e-1109",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1110"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|54bb8073-c922-c1f7-16e1-b0ab90984a5d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495767375
		},
		"e-1111": {
			"id": "e-1111",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1112"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|cf137a32-8a43-9eea-c227-369c6101c8fd"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495780201
		},
		"e-1113": {
			"id": "e-1113",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1114"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|d8d81918-3b90-2887-3903-b5d7b2ff9515"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495806936
		},
		"e-1115": {
			"id": "e-1115",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1116"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|6f03c8de-b48c-1e52-c81d-b40ed7ece0c2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495826940
		},
		"e-1117": {
			"id": "e-1117",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1118"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6|ec0d2007-a159-b7c9-09e9-604d08626324"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578495837677
		},
		"e-1121": {
			"id": "e-1121",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1122"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04da4|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495887427
		},
		"e-1123": {
			"id": "e-1123",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1124"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04da4|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495896202
		},
		"e-1125": {
			"id": "e-1125",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1126"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04da4|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495909734
		},
		"e-1129": {
			"id": "e-1129",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1130"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04db5|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495961692
		},
		"e-1131": {
			"id": "e-1131",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1132"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04db5|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495969238
		},
		"e-1133": {
			"id": "e-1133",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1134"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04db5|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578495983619
		},
		"e-1137": {
			"id": "e-1137",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1138"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dd7|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496041482
		},
		"e-1139": {
			"id": "e-1139",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1140"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dd7|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496049463
		},
		"e-1141": {
			"id": "e-1141",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1142"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dd7|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496064958
		},
		"e-1145": {
			"id": "e-1145",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1146"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496131957
		},
		"e-1147": {
			"id": "e-1147",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1148"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496139049
		},
		"e-1149": {
			"id": "e-1149",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1150"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496151050
		},
		"e-1151": {
			"id": "e-1151",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1152"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|509c4bd7-5a02-4483-5c9c-8f7db2b77be9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496178471
		},
		"e-1153": {
			"id": "e-1153",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1154"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|e7b11261-df69-d590-8c59-02b5ccf6628e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496189451
		},
		"e-1155": {
			"id": "e-1155",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1156"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|c539f12f-8285-e1db-5c15-5e2dcd0987a2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496201746
		},
		"e-1157": {
			"id": "e-1157",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1158"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|fac680b9-284a-8518-0ed1-6c7d35ac5fbe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496220218
		},
		"e-1159": {
			"id": "e-1159",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1160"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|04a9211e-dc64-d86f-bcee-87a5941e9f32"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496230849
		},
		"e-1161": {
			"id": "e-1161",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1162"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|ec5e1a8f-9d16-dffc-0fee-c1afb0e5f7a4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496248196
		},
		"e-1163": {
			"id": "e-1163",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1164"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|4c2352ac-243f-838f-9b9c-371decf14cd9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496255483
		},
		"e-1165": {
			"id": "e-1165",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1166"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93|0310e2f6-68ee-f929-6120-266f101cb4d9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496267269
		},
		"e-1169": {
			"id": "e-1169",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1170"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d82|ee32e2a8-22ac-5a01-0846-8c48edf4dcb9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496829000
		},
		"e-1171": {
			"id": "e-1171",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1172"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d82|96cc8675-4f76-aae5-adc5-e642ababf913"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496837851
		},
		"e-1173": {
			"id": "e-1173",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1174"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d82|80ca1924-1499-582f-1f20-428ab3f33b3a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496849946
		},
		"e-1177": {
			"id": "e-1177",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1178"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|2c980ce5-42f8-fc4a-c9a9-2999079c37ec"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496923175
		},
		"e-1179": {
			"id": "e-1179",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1180"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|7e06734b-b7f5-22b6-0dd7-a0f543b014ea"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496932725
		},
		"e-1181": {
			"id": "e-1181",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1182"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|8518a68b-7374-e277-749e-8b04f39fb0c6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578496942955
		},
		"e-1183": {
			"id": "e-1183",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1184"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|923a30a0-ecd4-5364-72fd-c3cf5bd6232e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578496967881
		},
		"e-1184": {
			"id": "e-1184",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1183"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|923a30a0-ecd4-5364-72fd-c3cf5bd6232e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578496967904
		},
		"e-1185": {
			"id": "e-1185",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1186"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|622a7589-cc64-3bc2-2558-e3351d249315"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578496994412
		},
		"e-1186": {
			"id": "e-1186",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1185"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|622a7589-cc64-3bc2-2558-e3351d249315"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578496994461
		},
		"e-1187": {
			"id": "e-1187",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1188"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|f071d85a-ccad-ec4e-a5ab-c94687f906e0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578497022814
		},
		"e-1188": {
			"id": "e-1188",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1187"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|f071d85a-ccad-ec4e-a5ab-c94687f906e0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578497022865
		},
		"e-1189": {
			"id": "e-1189",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1190"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|816f6681-f876-7f13-3fd8-e139897fddc8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578497064387
		},
		"e-1191": {
			"id": "e-1191",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1192"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|8450fdba-8efe-c343-7d65-4d70b79c0342"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578497072377
		},
		"e-1193": {
			"id": "e-1193",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1194"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70|26037651-a298-1545-dcd1-dc0761f7fdf2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578497086400
		},
		"e-1197": {
			"id": "e-1197",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1198"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d39|0783b97b-7404-1b0f-a79a-9bff07916b4e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537453865
		},
		"e-1199": {
			"id": "e-1199",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1200"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d39|5bc84ca5-6e33-f43c-168e-cb14e4b0120a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537462787
		},
		"e-1201": {
			"id": "e-1201",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1202"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d39|e96bf5f4-52b6-45f4-1625-5f8bad375dfb"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537473627
		},
		"e-1205": {
			"id": "e-1205",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1206"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d39|3fb2abf0-f3a3-07e2-527a-3e3700308c8a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578537530383
		},
		"e-1207": {
			"id": "e-1207",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1208"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d13|0783b97b-7404-1b0f-a79a-9bff07916b4e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537573861
		},
		"e-1209": {
			"id": "e-1209",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1210"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d13|5bc84ca5-6e33-f43c-168e-cb14e4b0120a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537586683
		},
		"e-1211": {
			"id": "e-1211",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1212"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d13|e96bf5f4-52b6-45f4-1625-5f8bad375dfb"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537597004
		},
		"e-1213": {
			"id": "e-1213",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1214"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d13|f56afff7-aee6-48a4-1f9f-e2ee700d3a48"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 600,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537613787
		},
		"e-1217": {
			"id": "e-1217",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1218"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e26|0783b97b-7404-1b0f-a79a-9bff07916b4e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537689476
		},
		"e-1219": {
			"id": "e-1219",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1220"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e26|5bc84ca5-6e33-f43c-168e-cb14e4b0120a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537698064
		},
		"e-1221": {
			"id": "e-1221",
			"eventTypeId": "PAGE_SCROLL_UP",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1222"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e26"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578537715388
		},
		"e-1222": {
			"id": "e-1222",
			"eventTypeId": "PAGE_SCROLL_DOWN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1221"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e26"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578537715411
		},
		"e-1223": {
			"id": "e-1223",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1224"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1c|c21b9fae-c2f7-acbf-800d-f2e3b7df3360"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537751328
		},
		"e-1225": {
			"id": "e-1225",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1226"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1c|4053f5e6-f0a5-7b9c-1f0c-41c2ddafda0e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537760050
		},
		"e-1227": {
			"id": "e-1227",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1228"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1c|6fc4f81c-0c3a-b974-c339-d9471bf7e16e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537778371
		},
		"e-1231": {
			"id": "e-1231",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1232"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2a|96cef72f-173c-e5d6-a8ec-e97c08760b4c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537826506
		},
		"e-1233": {
			"id": "e-1233",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1234"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2a|89b8e66d-31ca-4876-1e33-39250313c93e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537833673
		},
		"e-1235": {
			"id": "e-1235",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1236"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2a|04efa176-aa0a-8ca3-ac45-44f47203d59f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1578537870465
		},
		"e-1237": {
			"id": "e-1237",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1238"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2a|2c3275fb-46f9-c3d3-a33c-5777f1d7fb4e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578537887121
		},
		"e-1239": {
			"id": "e-1239",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1240"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2a|e56560d2-fe1e-9a39-ed14-422a416384e0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1578537898010
		},
		"e-1243": {
			"id": "e-1243",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596513515
		},
		"e-1244": {
			"id": "e-1244",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596648479
		},
		"e-1245": {
			"id": "e-1245",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1e"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596687523
		},
		"e-1246": {
			"id": "e-1246",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596709390
		},
		"e-1247": {
			"id": "e-1247",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e19"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596729108
		},
		"e-1248": {
			"id": "e-1248",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596757955
		},
		"e-1249": {
			"id": "e-1249",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e16"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596787876
		},
		"e-1250": {
			"id": "e-1250",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596804361
		},
		"e-1251": {
			"id": "e-1251",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "593728c65b0b327621f92864"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596845785
		},
		"e-1252": {
			"id": "e-1252",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596867234
		},
		"e-1253": {
			"id": "e-1253",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596885700
		},
		"e-1254": {
			"id": "e-1254",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596908291
		},
		"e-1255": {
			"id": "e-1255",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cb4"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596925683
		},
		"e-1256": {
			"id": "e-1256",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e20"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578596956193
		},
		"e-1257": {
			"id": "e-1257",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e27"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597314500
		},
		"e-1258": {
			"id": "e-1258",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1a"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597373376
		},
		"e-1259": {
			"id": "e-1259",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597395474
		},
		"e-1260": {
			"id": "e-1260",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e24"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597422064
		},
		"e-1261": {
			"id": "e-1261",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597442901
		},
		"e-1262": {
			"id": "e-1262",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ca1"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597460396
		},
		"e-1263": {
			"id": "e-1263",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e17"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597504371
		},
		"e-1264": {
			"id": "e-1264",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e13"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597571364
		},
		"e-1265": {
			"id": "e-1265",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5df8e6a08de4503294fb3897"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597591641
		},
		"e-1266": {
			"id": "e-1266",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e25"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597606264
		},
		"e-1267": {
			"id": "e-1267",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1f"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597627851
		},
		"e-1268": {
			"id": "e-1268",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1b"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597655962
		},
		"e-1269": {
			"id": "e-1269",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1d"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597708100
		},
		"e-1270": {
			"id": "e-1270",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0f"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597735453
		},
		"e-1271": {
			"id": "e-1271",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e0a"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597763918
		},
		"e-1272": {
			"id": "e-1272",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e11"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597915242
		},
		"e-1273": {
			"id": "e-1273",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e10"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578597934054
		},
		"e-1274": {
			"id": "e-1274",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04df9"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598058728
		},
		"e-1275": {
			"id": "e-1275",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04de8"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598075670
		},
		"e-1276": {
			"id": "e-1276",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dc6"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598098356
		},
		"e-1277": {
			"id": "e-1277",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04da4"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598112181
		},
		"e-1278": {
			"id": "e-1278",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04db5"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598131246
		},
		"e-1279": {
			"id": "e-1279",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04dd7"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598155037
		},
		"e-1280": {
			"id": "e-1280",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d93"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598172439
		},
		"e-1281": {
			"id": "e-1281",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d82"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598195212
		},
		"e-1282": {
			"id": "e-1282",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d70"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598215756
		},
		"e-1283": {
			"id": "e-1283",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d5e"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598242668
		},
		"e-1284": {
			"id": "e-1284",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d4c"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598261053
		},
		"e-1285": {
			"id": "e-1285",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d39"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598278673
		},
		"e-1286": {
			"id": "e-1286",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e26"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598320566
		},
		"e-1287": {
			"id": "e-1287",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e1c"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598354450
		},
		"e-1288": {
			"id": "e-1288",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-24",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "PAGE",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04d13"
			},
			"config": [{
				"continuousParameterGroupId": "a-24-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1578598941278
		},
		"e-1289": {
			"id": "e-1289",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1290"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555020"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1291": {
			"id": "e-1291",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1292"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555026"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1293": {
			"id": "e-1293",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1294"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b55502c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1295": {
			"id": "e-1295",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1296"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555033"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 2,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1297": {
			"id": "e-1297",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1298"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555039"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1299": {
			"id": "e-1299",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1300"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b55503f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1301": {
			"id": "e-1301",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1302"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555046"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1303": {
			"id": "e-1303",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1304"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b55504c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1305": {
			"id": "e-1305",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1306"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555052"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1307": {
			"id": "e-1307",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1308"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555059"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1309": {
			"id": "e-1309",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1310"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b55505f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1311": {
			"id": "e-1311",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1312"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04bc7|af653769-bdaf-df5c-a7cd-2ef76b555065"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579023330549
		},
		"e-1329": {
			"id": "e-1329",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1330"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e00"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579056037421
		},
		"e-1330": {
			"id": "e-1330",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1329"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e00"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579056037421
		},
		"e-1331": {
			"id": "e-1331",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1332"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e0a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579056037421
		},
		"e-1332": {
			"id": "e-1332",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1331"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e0a"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579056037421
		},
		"e-1333": {
			"id": "e-1333",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1334"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e14"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579056037421
		},
		"e-1334": {
			"id": "e-1334",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1333"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e14"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579056037421
		},
		"e-1335": {
			"id": "e-1335",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1336"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e1e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579056037421
		},
		"e-1336": {
			"id": "e-1336",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1335"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|fd7e4bb2-ed08-9a19-f700-4daf2ef00e1e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579056037421
		},
		"e-1337": {
			"id": "e-1337",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1338"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cb4|394716e7-a41a-d91b-119d-d814fd65a2af"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127144252
		},
		"e-1339": {
			"id": "e-1339",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1340"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cb4|394716e7-a41a-d91b-119d-d814fd65a2b1"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127144252
		},
		"e-1341": {
			"id": "e-1341",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1342"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cb4|394716e7-a41a-d91b-119d-d814fd65a2b5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127144252
		},
		"e-1343": {
			"id": "e-1343",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-1344"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|2c4b178d-46ee-f05c-4a91-c8e10dd3676f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579127201190
		},
		"e-1345": {
			"id": "e-1345",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-1346"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|2c4b178d-46ee-f05c-4a91-c8e10dd36770"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1579127201190
		},
		"e-1347": {
			"id": "e-1347",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1348"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|59d6cadf-ae01-1050-f2b2-f339305d3e59"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127325763
		},
		"e-1349": {
			"id": "e-1349",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1350"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|59d6cadf-ae01-1050-f2b2-f339305d3e5b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127325763
		},
		"e-1351": {
			"id": "e-1351",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1352"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|59d6cadf-ae01-1050-f2b2-f339305d3e5f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127325763
		},
		"e-1353": {
			"id": "e-1353",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1354"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|59d6cadf-ae01-1050-f2b2-f339305d3e72"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579127325763
		},
		"e-1355": {
			"id": "e-1355",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1356"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|a90fc924-12e5-81d1-6e89-c70fd4d9f03d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579127802281
		},
		"e-1357": {
			"id": "e-1357",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1358"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|85dc5ba3-9439-73d4-a373-23d6b57b00ed"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579127844693
		},
		"e-1359": {
			"id": "e-1359",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1360"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|7057c9ba-ea88-b0fa-e0ee-7ef02fd9d321"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127944826
		},
		"e-1361": {
			"id": "e-1361",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1362"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|7057c9ba-ea88-b0fa-e0ee-7ef02fd9d323"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 100,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127944826
		},
		"e-1363": {
			"id": "e-1363",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1364"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e22|7057c9ba-ea88-b0fa-e0ee-7ef02fd9d327"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579127944826
		},
		"e-1365": {
			"id": "e-1365",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-1366"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|a7ce75d1-41c1-f875-e184-52c4ab7e9eb4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1579128105784
		},
		"e-1367": {
			"id": "e-1367",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1368"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04ced|a7ce75d1-41c1-f875-e184-52c4ab7e9ec0"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579128105784
		},
		"e-1369": {
			"id": "e-1369",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1370"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|f0bc8c65-ee0c-a4b9-8d95-c2cb53b31794"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579128776809
		},
		"e-1371": {
			"id": "e-1371",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1372"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|f0bc8c65-ee0c-a4b9-8d95-c2cb53b31795"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579128776809
		},
		"e-1373": {
			"id": "e-1373",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1374"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|f0bc8c65-ee0c-a4b9-8d95-c2cb53b31797"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579128776809
		},
		"e-1375": {
			"id": "e-1375",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1376"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|f0bc8c65-ee0c-a4b9-8d95-c2cb53b31799"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579128776809
		},
		"e-1377": {
			"id": "e-1377",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1378"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e14|f0bc8c65-ee0c-a4b9-8d95-c2cb53b3179d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579128776809
		},
		"e-1379": {
			"id": "e-1379",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1380"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|8aff16c3-fde9-0671-67da-f407238b4f45"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579129040562
		},
		"e-1381": {
			"id": "e-1381",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1382"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|ed0e61f5-d718-01d9-779b-72ada3d7f177"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138458431
		},
		"e-1383": {
			"id": "e-1383",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1384"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-46146682641e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138785413
		},
		"e-1384": {
			"id": "e-1384",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1383"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-46146682641e"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138785413
		},
		"e-1385": {
			"id": "e-1385",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1386"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-461466826428"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579138785413
		},
		"e-1386": {
			"id": "e-1386",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1385"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-461466826428"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138785413
		},
		"e-1387": {
			"id": "e-1387",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1388"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-461466826432"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579138785413
		},
		"e-1388": {
			"id": "e-1388",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1387"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-461466826432"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138785413
		},
		"e-1389": {
			"id": "e-1389",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1390"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-46146682643c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138785413
		},
		"e-1390": {
			"id": "e-1390",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1389"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5937db49ce6a826203749cc6|535f11ec-0ebb-ad57-f501-46146682643c"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138785413
		},
		"e-1391": {
			"id": "e-1391",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1392"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144c8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138986862
		},
		"e-1392": {
			"id": "e-1392",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1391"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144c8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138986862
		},
		"e-1393": {
			"id": "e-1393",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1394"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144d2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579138986862
		},
		"e-1394": {
			"id": "e-1394",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1393"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144d2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138986862
		},
		"e-1395": {
			"id": "e-1395",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1396"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144dc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579138986862
		},
		"e-1396": {
			"id": "e-1396",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1395"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144dc"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138986862
		},
		"e-1397": {
			"id": "e-1397",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1398"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144e6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138986862
		},
		"e-1398": {
			"id": "e-1398",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1397"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04cda|07790c3e-47b0-03ce-23fc-4ca06c2144e6"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579138986862
		},
		"e-1399": {
			"id": "e-1399",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1400"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9eb4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139203049
		},
		"e-1400": {
			"id": "e-1400",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1399"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9eb4"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139203049
		},
		"e-1401": {
			"id": "e-1401",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1402"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9ebe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579139203049
		},
		"e-1402": {
			"id": "e-1402",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1401"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9ebe"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139203049
		},
		"e-1403": {
			"id": "e-1403",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1404"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9ec8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579139203049
		},
		"e-1404": {
			"id": "e-1404",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1403"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9ec8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139203049
		},
		"e-1405": {
			"id": "e-1405",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1406"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9ed2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139203049
		},
		"e-1406": {
			"id": "e-1406",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1405"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04c68|1b3cf083-4954-ed77-c765-7b7e558c9ed2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139203049
		},
		"e-1407": {
			"id": "e-1407",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1408"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|b4e32f92-100e-7555-c6ee-79561e16a978"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579139746003
		},
		"e-1409": {
			"id": "e-1409",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1410"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|b4e32f92-100e-7555-c6ee-79561e16a97b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579139746003
		},
		"e-1411": {
			"id": "e-1411",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1412"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5938136ece6a82620374b629|b4e32f92-100e-7555-c6ee-79561e16a97f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1579139746003
		},
		"e-1435": {
			"id": "e-1435",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1436"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|59fe3584-826c-e18d-c9df-c30cb991e4ae"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139942568
		},
		"e-1436": {
			"id": "e-1436",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1435"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|59fe3584-826c-e18d-c9df-c30cb991e4ae"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139942568
		},
		"e-1437": {
			"id": "e-1437",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1438"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|59fe3584-826c-e18d-c9df-c30cb991e4b8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579139942568
		},
		"e-1438": {
			"id": "e-1438",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1437"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|59fe3584-826c-e18d-c9df-c30cb991e4b8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139942568
		},
		"e-1439": {
			"id": "e-1439",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1440"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|59fe3584-826c-e18d-c9df-c30cb991e4c2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579139942568
		},
		"e-1440": {
			"id": "e-1440",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1439"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|59fe3584-826c-e18d-c9df-c30cb991e4c2"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579139942568
		},
		"e-1459": {
			"id": "e-1459",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1460"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|fd26bfb3-ab9c-ad72-450e-d372920a631b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140040412
		},
		"e-1460": {
			"id": "e-1460",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1459"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|fd26bfb3-ab9c-ad72-450e-d372920a631b"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140040412
		},
		"e-1461": {
			"id": "e-1461",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1462"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|b63154e1-403f-e6b0-45b6-8f2069003c97"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1579140064739
		},
		"e-1462": {
			"id": "e-1462",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1461"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|b63154e1-403f-e6b0-45b6-8f2069003c97"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140064739
		},
		"e-1463": {
			"id": "e-1463",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1464"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|1f4083d8-2fb2-7dec-c715-a420026f712f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140071967
		},
		"e-1464": {
			"id": "e-1464",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1463"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|1f4083d8-2fb2-7dec-c715-a420026f712f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140071967
		},
		"e-1465": {
			"id": "e-1465",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1466"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|d4e0574f-bb08-0578-6886-975be2701122"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140103003
		},
		"e-1466": {
			"id": "e-1466",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1465"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|d4e0574f-bb08-0578-6886-975be2701122"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140103003
		},
		"e-1467": {
			"id": "e-1467",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1468"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|70f73d30-1d64-3be9-75b2-734772391d86"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140110070
		},
		"e-1468": {
			"id": "e-1468",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1467"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e21|70f73d30-1d64-3be9-75b2-734772391d86"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140110070
		},
		"e-1469": {
			"id": "e-1469",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-1470"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|0525b78b-dc42-d12b-e4a2-af564e27a3d9"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1579140411446
		},
		"e-1471": {
			"id": "e-1471",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1472"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|0525b78b-dc42-d12b-e4a2-af564e27a3e5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140411446
		},
		"e-1473": {
			"id": "e-1473",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1474"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "59386e817b93bd7fc2023337|0525b78b-dc42-d12b-e4a2-af564e27a3f8"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1579140411446
		},
		"e-1475": {
			"id": "e-1475",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1476"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2c|6342cf6f-8d8b-8da7-8920-0a99024a83cd"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1582995227213
		},
		"e-1477": {
			"id": "e-1477",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1478"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2c|6342cf6f-8d8b-8da7-8920-0a99024a83cf"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1582995227213
		},
		"e-1479": {
			"id": "e-1479",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1480"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e2c|6342cf6f-8d8b-8da7-8920-0a99024a83d3"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1582995227213
		},
		"e-1481": {
			"id": "e-1481",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-1482"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c38"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1582996238623
		},
		"e-1483": {
			"id": "e-1483",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-1484"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c4f"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1582996238623
		},
		"e-1485": {
			"id": "e-1485",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1486"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c54"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1582996238623
		},
		"e-1486": {
			"id": "e-1486",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1485"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c54"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1582996238623
		},
		"e-1487": {
			"id": "e-1487",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1488"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c5d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1582996238623
		},
		"e-1488": {
			"id": "e-1488",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1487"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c5d"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1582996238623
		},
		"e-1489": {
			"id": "e-1489",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1490"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c66"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1582996238623
		},
		"e-1490": {
			"id": "e-1490",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-1489"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e15|3fd195f7-1b0c-15d0-4752-eecb8c218c66"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1582996238623
		},
		"e-1491": {
			"id": "e-1491",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1492"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|f5db4d7c-9a47-4f72-8957-87f2f25bd4b5"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1583003357234
		},
		"e-1493": {
			"id": "e-1493",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1494"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|f5db4d7c-9a47-4f72-8957-87f2f25bd4b7"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 200,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1583003357234
		},
		"e-1495": {
			"id": "e-1495",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-1496"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "5934822a0ad3c123c9a04e18|f5db4d7c-9a47-4f72-8957-87f2f25bd4bb"
			},
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1583003357234
		}
	},
	"actionLists": {
		"a-8": {
			"id": "a-8",
			"title": "Hero 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-8-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|622b79a4-9575-9988-6137-dcd579c27672"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-8-n-27",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|b7a23612-f759-5326-bdf9-976ef9f35979"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-26",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|b7a23612-f759-5326-bdf9-976ef9f35979"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-8-n-23",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|ba20d058-d8ff-dfe6-701f-5890cc5a8f9b"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-8-n-22",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|ba20d058-d8ff-dfe6-701f-5890cc5a8f9b"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-19",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|9619d0bb-1108-1f1f-c60e-96765bf8f6ed"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-8-n-18",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|9619d0bb-1108-1f1f-c60e-96765bf8f6ed"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|385496c9-582f-851d-c550-06d5162effb3"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|622b79a4-9575-9988-6137-dcd579c27672"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-8-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|385496c9-582f-851d-c550-06d5162effb3"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|622b79a4-9575-9988-6137-dcd579c27672"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|622b79a4-9575-9988-6137-dcd579c27672"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|385496c9-582f-851d-c550-06d5162effb3"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-16",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|385496c9-582f-851d-c550-06d5162effb3"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-20",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|9619d0bb-1108-1f1f-c60e-96765bf8f6ed"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-21",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|9619d0bb-1108-1f1f-c60e-96765bf8f6ed"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-24",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|ba20d058-d8ff-dfe6-701f-5890cc5a8f9b"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-25",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|ba20d058-d8ff-dfe6-701f-5890cc5a8f9b"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-28",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|b7a23612-f759-5326-bdf9-976ef9f35979"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-29",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e22|b7a23612-f759-5326-bdf9-976ef9f35979"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573582258523,
			"useFirstGroupAsInitialState": true
		},
		"a-7": {
			"id": "a-7",
			"title": "Process Bar",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-7-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"locked": false,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".line.color",
							"selectorGuids": ["af780080-eca5-ff6f-68ed-d2c5cd970eb2", "7ff6c477-aef7-ef0c-578e-310bd2a20722"]
						},
						"widthValue": 0,
						"widthUnit": "PX",
						"heightUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"locked": false,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".line.color",
							"selectorGuids": ["af780080-eca5-ff6f-68ed-d2c5cd970eb2", "7ff6c477-aef7-ef0c-578e-310bd2a20722"]
						},
						"widthUnit": "AUTO",
						"heightUnit": "PX"
					}
				}]
			}],
			"createdOn": 1573583783402,
			"useFirstGroupAsInitialState": true
		},
		"a-9": {
			"id": "a-9",
			"title": "Hero 3",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|9640e02a-76b1-a246-746c-9a7f5f6a5f80"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-9-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|9640e02a-76b1-a246-746c-9a7f5f6a5f80"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|11d567a0-9ff8-765e-7c86-43e3a7beacc9"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-9-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|11d567a0-9ff8-765e-7c86-43e3a7beacc9"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-9-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|3b3dfa76-2057-8493-32ab-25caf20b5734"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|3b3dfa76-2057-8493-32ab-25caf20b5734"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|9640e02a-76b1-a246-746c-9a7f5f6a5f80"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|9640e02a-76b1-a246-746c-9a7f5f6a5f80"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|11d567a0-9ff8-765e-7c86-43e3a7beacc9"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-16",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|11d567a0-9ff8-765e-7c86-43e3a7beacc9"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|3b3dfa76-2057-8493-32ab-25caf20b5734"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-18",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e1e|3b3dfa76-2057-8493-32ab-25caf20b5734"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573582258523,
			"useFirstGroupAsInitialState": true
		},
		"a-10": {
			"id": "a-10",
			"title": "Hero 4",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|9f62159e-18c4-e0db-91f7-18c9277d107d"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-10-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|a9e48d0a-cff1-c728-5f94-4b392968edee"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-10-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|9f62159e-18c4-e0db-91f7-18c9277d107d"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-10-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|a9e48d0a-cff1-c728-5f94-4b392968edee"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-10-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|4362f748-59bf-62fa-97ea-7316d0edf02d"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-10-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|4362f748-59bf-62fa-97ea-7316d0edf02d"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|9f62159e-18c4-e0db-91f7-18c9277d107d"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-10-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|9f62159e-18c4-e0db-91f7-18c9277d107d"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|a9e48d0a-cff1-c728-5f94-4b392968edee"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-10-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|a9e48d0a-cff1-c728-5f94-4b392968edee"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|4362f748-59bf-62fa-97ea-7316d0edf02d"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-10-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04ced|4362f748-59bf-62fa-97ea-7316d0edf02d"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573582258523,
			"useFirstGroupAsInitialState": true
		},
		"a-11": {
			"id": "a-11",
			"title": "Hero 5",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-11-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|6d225438-8231-d530-81a9-22e90b0cfa8b"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-11-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|3ef9dc01-728c-2916-da8f-8da97b44a18c"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|6d225438-8231-d530-81a9-22e90b0cfa8b"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|3ef9dc01-728c-2916-da8f-8da97b44a18c"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-11-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|27a1244c-baab-b08a-5458-b8d69eba4ed8"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|27a1244c-baab-b08a-5458-b8d69eba4ed8"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|6d225438-8231-d530-81a9-22e90b0cfa8b"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|6d225438-8231-d530-81a9-22e90b0cfa8b"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|3ef9dc01-728c-2916-da8f-8da97b44a18c"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|3ef9dc01-728c-2916-da8f-8da97b44a18c"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|27a1244c-baab-b08a-5458-b8d69eba4ed8"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e19|27a1244c-baab-b08a-5458-b8d69eba4ed8"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573582258523,
			"useFirstGroupAsInitialState": true
		},
		"a-12": {
			"id": "a-12",
			"title": "Team Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-12-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".overlay-div.circle",
							"selectorGuids": ["9fdd52a1-bf46-be6a-3ce2-a1db5cf3d11c", "d5d16890-231e-91b7-626b-971b91c1b239"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-12-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".overlay-div.circle",
							"selectorGuids": ["9fdd52a1-bf46-be6a-3ce2-a1db5cf3d11c", "d5d16890-231e-91b7-626b-971b91c1b239"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573590462524,
			"useFirstGroupAsInitialState": true
		},
		"a-13": {
			"id": "a-13",
			"title": "Team Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-13-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".overlay-div.circle",
							"selectorGuids": ["9fdd52a1-bf46-be6a-3ce2-a1db5cf3d11c", "d5d16890-231e-91b7-626b-971b91c1b239"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573590534770,
			"useFirstGroupAsInitialState": false
		},
		"a-14": {
			"id": "a-14",
			"title": "Hero 6",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-14-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|69dec913-5aec-24d7-fc0c-e2b30f98de67"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-14-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|69dec913-5aec-24d7-fc0c-e2b30f98de67"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-14-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|9df8f295-4ee9-e13c-3755-dfb14353509e"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-14-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|9df8f295-4ee9-e13c-3755-dfb14353509e"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-14-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|2ed0b68e-f30e-b789-c8de-b981f8d7650c"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-14-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|2ed0b68e-f30e-b789-c8de-b981f8d7650c"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-14-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|69dec913-5aec-24d7-fc0c-e2b30f98de67"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-14-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|69dec913-5aec-24d7-fc0c-e2b30f98de67"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-14-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|9df8f295-4ee9-e13c-3755-dfb14353509e"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-14-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|9df8f295-4ee9-e13c-3755-dfb14353509e"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-14-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|2ed0b68e-f30e-b789-c8de-b981f8d7650c"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-14-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04cda|2ed0b68e-f30e-b789-c8de-b981f8d7650c"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573582258523,
			"useFirstGroupAsInitialState": true
		},
		"a-15": {
			"id": "a-15",
			"title": "Hero 7",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-15-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|69c32baf-b739-0e63-78af-b23c1d978d87"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-15-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|69c32baf-b739-0e63-78af-b23c1d978d87"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-15-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|a07e6b8a-22de-40dc-7c7f-0a126705f056"
						},
						"yValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|a07e6b8a-22de-40dc-7c7f-0a126705f056"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-15-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|69c32baf-b739-0e63-78af-b23c1d978d87"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|69c32baf-b739-0e63-78af-b23c1d978d87"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-15-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|4179d531-0a90-416a-d71e-efb2936d1986"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-15-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|a07e6b8a-22de-40dc-7c7f-0a126705f056"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "5934822a0ad3c123c9a04e16|a07e6b8a-22de-40dc-7c7f-0a126705f056"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573582258523,
			"useFirstGroupAsInitialState": true
		},
		"a-16": {
			"id": "a-16",
			"title": "Subscribe Card",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-16-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".subscribe-card",
							"selectorGuids": ["e2f71b31-3ccf-05ac-75d1-45a068fe3bb3"]
						},
						"xValue": -110,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-16-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 3000,
						"easing": "easeInOut",
						"duration": 500,
						"target": {
							"selector": ".subscribe-card",
							"selectorGuids": ["e2f71b31-3ccf-05ac-75d1-45a068fe3bb3"]
						},
						"xValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"createdOn": 1578418204329,
			"useFirstGroupAsInitialState": true
		},
		"a-17": {
			"id": "a-17",
			"title": "Close Subscribe",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-17-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 500,
						"target": {
							"useEventTarget": "PARENT",
							"selector": ".subscribe-card",
							"selectorGuids": ["e2f71b31-3ccf-05ac-75d1-45a068fe3bb3"]
						},
						"xValue": -110,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"createdOn": 1578418305520,
			"useFirstGroupAsInitialState": false
		},
		"a-18": {
			"id": "a-18",
			"title": "SHow Text",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-18-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".dot-text",
							"selectorGuids": ["4d54c922-4c75-7b31-ac8f-8ae416daa152"]
						},
						"xValue": 16,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-18-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".dot-text",
							"selectorGuids": ["4d54c922-4c75-7b31-ac8f-8ae416daa152"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-18-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".dot-text",
							"selectorGuids": ["4d54c922-4c75-7b31-ac8f-8ae416daa152"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-18-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".dot-text",
							"selectorGuids": ["4d54c922-4c75-7b31-ac8f-8ae416daa152"]
						},
						"xValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"createdOn": 1578418935479,
			"useFirstGroupAsInitialState": true
		},
		"a-19": {
			"id": "a-19",
			"title": "Show Text Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-19-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".dot-text",
							"selectorGuids": ["4d54c922-4c75-7b31-ac8f-8ae416daa152"]
						},
						"xValue": 16,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".dot-text",
							"selectorGuids": ["4d54c922-4c75-7b31-ac8f-8ae416daa152"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1578419009790,
			"useFirstGroupAsInitialState": false
		},
		"a-20": {
			"id": "a-20",
			"title": "Toggle Wrapper",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-20-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"locked": false,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".toggle-content",
							"selectorGuids": ["dbec50da-171d-94ae-de98-307379cd18c0"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-20-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"locked": false,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".toggle-content",
							"selectorGuids": ["dbec50da-171d-94ae-de98-307379cd18c0"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO"
					}
				}]
			}],
			"createdOn": 1578419232507,
			"useFirstGroupAsInitialState": true
		},
		"a-21": {
			"id": "a-21",
			"title": "Toggle Wrapper Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-21-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"locked": false,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".toggle-content",
							"selectorGuids": ["dbec50da-171d-94ae-de98-307379cd18c0"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "PX"
					}
				}]
			}],
			"createdOn": 1578420654580,
			"useFirstGroupAsInitialState": false
		},
		"a-23": {
			"id": "a-23",
			"title": "Close Donation",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-23-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "none",
						"target": {
							"useEventTarget": "PARENT",
							"selector": ".contact-full-wrapper",
							"selectorGuids": ["c33299c7-4a7b-01bf-e728-2a5aa27df0ac"]
						}
					}
				}]
			}],
			"createdOn": 1578431785254,
			"useFirstGroupAsInitialState": false
		},
		"a-22": {
			"id": "a-22",
			"title": "Donation Pop",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-22-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "none",
						"target": {
							"selector": ".contact-full-wrapper",
							"selectorGuids": ["c33299c7-4a7b-01bf-e728-2a5aa27df0ac"]
						}
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-22-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "block",
						"target": {
							"selector": ".contact-full-wrapper",
							"selectorGuids": ["c33299c7-4a7b-01bf-e728-2a5aa27df0ac"]
						}
					}
				}]
			}],
			"createdOn": 1578431651431,
			"useFirstGroupAsInitialState": true
		},
		"a-5": {
			"id": "a-5",
			"title": "Portfolio Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-5-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".portfolio-overlay",
							"selectorGuids": ["5f831755-c34a-a648-8a0f-a137eb7eda08"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-5-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".portfolio-content",
							"selectorGuids": ["af86ede1-3ae0-65c5-89f2-1343cafdebf7"]
						},
						"xValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-5-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".portfolio-overlay",
							"selectorGuids": ["5f831755-c34a-a648-8a0f-a137eb7eda08"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-5-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".portfolio-content",
							"selectorGuids": ["af86ede1-3ae0-65c5-89f2-1343cafdebf7"]
						},
						"xValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"createdOn": 1573582935635,
			"useFirstGroupAsInitialState": true
		},
		"a-6": {
			"id": "a-6",
			"title": "Portfolio Hover out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-6-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".portfolio-content",
							"selectorGuids": ["af86ede1-3ae0-65c5-89f2-1343cafdebf7"]
						},
						"xValue": 40,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-6-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".portfolio-overlay",
							"selectorGuids": ["5f831755-c34a-a648-8a0f-a137eb7eda08"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"createdOn": 1573583102641,
			"useFirstGroupAsInitialState": false
		},
		"a-2": {
			"id": "a-2",
			"title": "Nav Scroll",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-2-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "b5ba5e62-503d-11f3-d503-bf44faec63f5"
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "none",
						"target": {
							"id": "b5ba5e62-503d-11f3-d503-bf44faec63f5"
						}
					}
				}]
			}],
			"createdOn": 1573580590068,
			"useFirstGroupAsInitialState": false
		},
		"a-3": {
			"id": "a-3",
			"title": "Nav Scroll Show",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-3-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "easeInOut",
						"duration": 300,
						"target": {
							"id": "b5ba5e62-503d-11f3-d503-bf44faec63f5"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-3-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "block",
						"target": {
							"id": "b5ba5e62-503d-11f3-d503-bf44faec63f5"
						}
					}
				}]
			}],
			"createdOn": 1573580814738,
			"useFirstGroupAsInitialState": false
		},
		"a-24": {
			"id": "a-24",
			"title": "Nav Scroll Animation",
			"continuousParameterGroups": [{
				"id": "a-24-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-24-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".scroll-navbar",
								"selectorGuids": ["89d15c6b-7638-22b6-689f-669fd56f0868"]
							},
							"yValue": -102,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 4,
					"actionItems": [{
						"id": "a-24-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".scroll-navbar",
								"selectorGuids": ["89d15c6b-7638-22b6-689f-669fd56f0868"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1578596517443
		},
		"slideInBottom": {
			"id": "slideInBottom",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}]
			}]
		},
		"slideInRight": {
			"id": "slideInRight",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 100,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}, {
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}]
		},
		"slideInLeft": {
			"id": "slideInLeft",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": -100,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}, {
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}]
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});