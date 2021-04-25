!function () {
    function e(e) {
        var t = n;
        e && (n[e] || (n[e] = {}), t = n[e]), t.define && t.define.packaged || (i.original = t.define, t.define = i, t.define.packaged = !0), t.require && t.require.packaged || (r.original = t.require, t.require = r, t.require.packaged = !0)
    }

    var t = "", n = function () {
        return this
    }();
    if (n || "undefined" == typeof window || (n = window), t || "undefined" == typeof requirejs) {
        var i = function (e, t, n) {
            return "string" != typeof e ? void (i.original ? i.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())) : (2 == arguments.length && (n = t), void (i.modules[e] || (i.payloads[e] = n, i.modules[e] = null)))
        };
        i.modules = {}, i.payloads = {};
        var s = function (e, t, n) {
            if ("string" == typeof t) {
                var i = a(e, t);
                if (void 0 != i) return n && n(), i
            } else if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var s = [], o = 0, l = t.length; o < l; ++o) {
                    var c = a(e, t[o]);
                    if (void 0 == c && r.original) return;
                    s.push(c)
                }
                return n && n.apply(null, s) || !0
            }
        }, r = function (e, t) {
            var n = s("", e, t);
            return void 0 == n && r.original ? r.original.apply(this, arguments) : n
        }, o = function (e, t) {
            if (t.indexOf("!") !== -1) {
                var n = t.split("!");
                return o(e, n[0]) + "!" + o(e, n[1])
            }
            if ("." == t.charAt(0)) {
                var i = e.split("/").slice(0, -1).join("/");
                for (t = i + "/" + t; t.indexOf(".") !== -1 && s != t;) {
                    var s = t;
                    t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
                }
            }
            return t
        }, a = function (e, t) {
            t = o(e, t);
            var n = i.modules[t];
            if (!n) {
                if (n = i.payloads[t], "function" == typeof n) {
                    var r = {}, a = {id: t, uri: "", exports: r, packaged: !0}, l = function (e, n) {
                        return s(t, e, n)
                    }, c = n(l, r, a);
                    r = c || a.exports, i.modules[t] = r, delete i.payloads[t]
                }
                n = i.modules[t] = r || n
            }
            return n
        };
        e(t)
    }
}(), define("ace/lib/regexp", ["require", "exports", "module"], function (e, t, n) {
    "use strict";

    function i(e) {
        return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
    }

    function s(e, t, n) {
        if (Array.prototype.indexOf) return e.indexOf(t, n);
        for (var i = n || 0; i < e.length; i++) if (e[i] === t) return i;
        return -1
    }

    var r = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
    }, o = void 0 === r.exec.call(/()??/, "")[1], a = function () {
        var e = /^/g;
        return r.test.call(e, ""), !e.lastIndex
    }();
    a && o || (RegExp.prototype.exec = function (e) {
        var t, n, l = r.exec.apply(this, arguments);
        if ("string" == typeof e && l) {
            if (!o && l.length > 1 && s(l, "") > -1 && (n = RegExp(this.source, r.replace.call(i(this), "g", "")), r.replace.call(e.slice(l.index), n, function () {
                for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (l[e] = void 0)
            })), this._xregexp && this._xregexp.captureNames) for (var c = 1; c < l.length; c++) t = this._xregexp.captureNames[c - 1], t && (l[t] = l[c]);
            !a && this.global && !l[0].length && this.lastIndex > l.index && this.lastIndex--
        }
        return l
    }, a || (RegExp.prototype.test = function (e) {
        var t = r.exec.call(this, e);
        return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t
    }))
}), define("ace/lib/es5-shim", ["require", "exports", "module"], function (e, t, n) {
    function i() {
    }

    function s(e) {
        try {
            return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
        } catch (t) {
        }
    }

    function r(e) {
        return e = +e, e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
    }

    Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError("Function.prototype.bind called on incompatible " + t);
        var n = p.call(arguments, 1), s = function () {
            if (this instanceof s) {
                var i = t.apply(this, n.concat(p.call(arguments)));
                return Object(i) === i ? i : this
            }
            return t.apply(e, n.concat(p.call(arguments)))
        };
        return t.prototype && (i.prototype = t.prototype, s.prototype = new i, i.prototype = null), s
    });
    var o, a, l, c, h, u = Function.prototype.call, d = Array.prototype, f = Object.prototype, p = d.slice,
        g = u.bind(f.toString), m = u.bind(f.hasOwnProperty);
    if ((h = m(f, "__defineGetter__")) && (o = u.bind(f.__defineGetter__), a = u.bind(f.__defineSetter__), l = u.bind(f.__lookupGetter__), c = u.bind(f.__lookupSetter__)), 2 != [1, 2].splice(0).length) if (function () {
        function e(e) {
            var t = new Array(e + 2);
            return t[0] = t[1] = 0, t
        }

        var t, n = [];
        if (n.splice.apply(n, e(20)), n.splice.apply(n, e(26)), t = n.length, n.splice(5, 0, "XXX"), t + 1 == n.length, t + 1 == n.length) return !0
    }()) {
        var C = Array.prototype.splice;
        Array.prototype.splice = function (e, t) {
            return arguments.length ? C.apply(this, [void 0 === e ? 0 : e, void 0 === t ? this.length - e : t].concat(p.call(arguments, 2))) : []
        }
    } else Array.prototype.splice = function (e, t) {
        var n = this.length;
        e > 0 ? e > n && (e = n) : void 0 == e ? e = 0 : e < 0 && (e = Math.max(n + e, 0)), e + t < n || (t = n - e);
        var i = this.slice(e, e + t), s = p.call(arguments, 2), r = s.length;
        if (e === n) r && this.push.apply(this, s); else {
            var o = Math.min(t, n - e), a = e + o, l = a + r - o, c = n - a, h = n - o;
            if (l < a) for (var u = 0; u < c; ++u) this[l + u] = this[a + u]; else if (l > a) for (u = c; u--;) this[l + u] = this[a + u];
            if (r && e === h) this.length = h, this.push.apply(this, s); else for (this.length = h + r, u = 0; u < r; ++u) this[e + u] = s[u]
        }
        return i
    };
    Array.isArray || (Array.isArray = function (e) {
        return "[object Array]" == g(e)
    });
    var v = Object("a"), A = "a" != v[0] || !(0 in v);
    if (Array.prototype.forEach || (Array.prototype.forEach = function (e) {
        var t = I(this), n = A && "[object String]" == g(this) ? this.split("") : t, i = arguments[1], s = -1,
            r = n.length >>> 0;
        if ("[object Function]" != g(e)) throw new TypeError;
        for (; ++s < r;) s in n && e.call(i, n[s], s, t)
    }), Array.prototype.map || (Array.prototype.map = function (e) {
        var t = I(this), n = A && "[object String]" == g(this) ? this.split("") : t, i = n.length >>> 0, s = Array(i),
            r = arguments[1];
        if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
        for (var o = 0; o < i; o++) o in n && (s[o] = e.call(r, n[o], o, t));
        return s
    }), Array.prototype.filter || (Array.prototype.filter = function (e) {
        var t, n = I(this), i = A && "[object String]" == g(this) ? this.split("") : n, s = i.length >>> 0, r = [],
            o = arguments[1];
        if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
        for (var a = 0; a < s; a++) a in i && (t = i[a], e.call(o, t, a, n) && r.push(t));
        return r
    }), Array.prototype.every || (Array.prototype.every = function (e) {
        var t = I(this), n = A && "[object String]" == g(this) ? this.split("") : t, i = n.length >>> 0,
            s = arguments[1];
        if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
        for (var r = 0; r < i; r++) if (r in n && !e.call(s, n[r], r, t)) return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function (e) {
        var t = I(this), n = A && "[object String]" == g(this) ? this.split("") : t, i = n.length >>> 0,
            s = arguments[1];
        if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
        for (var r = 0; r < i; r++) if (r in n && e.call(s, n[r], r, t)) return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function (e) {
        var t = I(this), n = A && "[object String]" == g(this) ? this.split("") : t, i = n.length >>> 0;
        if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
        if (!i && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
        var s, r = 0;
        if (arguments.length >= 2) s = arguments[1]; else for (; ;) {
            if (r in n) {
                s = n[r++];
                break
            }
            if (++r >= i) throw new TypeError("reduce of empty array with no initial value")
        }
        for (; r < i; r++) r in n && (s = e.call(void 0, s, n[r], r, t));
        return s
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e) {
        var t = I(this), n = A && "[object String]" == g(this) ? this.split("") : t, i = n.length >>> 0;
        if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
        if (!i && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
        var s, r = i - 1;
        if (arguments.length >= 2) s = arguments[1]; else for (; ;) {
            if (r in n) {
                s = n[r--];
                break
            }
            if (--r < 0) throw new TypeError("reduceRight of empty array with no initial value")
        }
        do r in this && (s = e.call(void 0, s, n[r], r, t)); while (r--);
        return s
    }), Array.prototype.indexOf && [0, 1].indexOf(1, 2) == -1 || (Array.prototype.indexOf = function (e) {
        var t = A && "[object String]" == g(this) ? this.split("") : I(this), n = t.length >>> 0;
        if (!n) return -1;
        var i = 0;
        for (arguments.length > 1 && (i = r(arguments[1])), i = i >= 0 ? i : Math.max(0, n + i); i < n; i++) if (i in t && t[i] === e) return i;
        return -1
    }), Array.prototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) == -1 || (Array.prototype.lastIndexOf = function (e) {
        var t = A && "[object String]" == g(this) ? this.split("") : I(this), n = t.length >>> 0;
        if (!n) return -1;
        var i = n - 1;
        for (arguments.length > 1 && (i = Math.min(i, r(arguments[1]))), i = i >= 0 ? i : n - Math.abs(i); i >= 0; i--) if (i in t && e === t[i]) return i;
        return -1
    }), Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
        return e.__proto__ || (e.constructor ? e.constructor.prototype : f)
    }), !Object.getOwnPropertyDescriptor) {
        var y = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function (e, t) {
            if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(y + e);
            if (m(e, t)) {
                var n, i, s;
                if (n = {enumerable: !0, configurable: !0}, h) {
                    var r = e.__proto__;
                    e.__proto__ = f;
                    var i = l(e, t), s = c(e, t);
                    if (e.__proto__ = r, i || s) return i && (n.get = i), s && (n.set = s), n
                }
                return n.value = e[t], n
            }
        }
    }
    if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (e) {
        return Object.keys(e)
    }), !Object.create) {
        var E;
        E = null === Object.prototype.__proto__ ? function () {
            return {__proto__: null}
        } : function () {
            var e = {};
            for (var t in e) e[t] = null;
            return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
        }, Object.create = function (e, t) {
            var n;
            if (null === e) n = E(); else {
                if ("object" != typeof e) throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
                var i = function () {
                };
                i.prototype = e, n = new i, n.__proto__ = e
            }
            return void 0 !== t && Object.defineProperties(n, t), n
        }
    }
    if (Object.defineProperty) {
        var w = s({}), b = "undefined" == typeof document || s(document.createElement("div"));
        if (!w || !b) var F = Object.defineProperty
    }
    if (!Object.defineProperty || F) {
        var _ = "Property description must be an object: ", S = "Object.defineProperty called on non-object: ",
            x = "getters & setters can not be defined on this javascript engine";
        Object.defineProperty = function (e, t, n) {
            if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(S + e);
            if ("object" != typeof n && "function" != typeof n || null === n) throw new TypeError(_ + n);
            if (F) try {
                return F.call(Object, e, t, n)
            } catch (i) {
            }
            if (m(n, "value")) if (h && (l(e, t) || c(e, t))) {
                var s = e.__proto__;
                e.__proto__ = f, delete e[t], e[t] = n.value, e.__proto__ = s
            } else e[t] = n.value; else {
                if (!h) throw new TypeError(x);
                m(n, "get") && o(e, t, n.get), m(n, "set") && a(e, t, n.set)
            }
            return e
        }
    }
    Object.defineProperties || (Object.defineProperties = function (e, t) {
        for (var n in t) m(t, n) && Object.defineProperty(e, n, t[n]);
        return e
    }), Object.seal || (Object.seal = function (e) {
        return e
    }), Object.freeze || (Object.freeze = function (e) {
        return e
    });
    try {
        Object.freeze(function () {
        })
    } catch (D) {
        Object.freeze = function (e) {
            return function (t) {
                return "function" == typeof t ? t : e(t)
            }
        }(Object.freeze)
    }
    if (Object.preventExtensions || (Object.preventExtensions = function (e) {
        return e
    }), Object.isSealed || (Object.isSealed = function (e) {
        return !1
    }), Object.isFrozen || (Object.isFrozen = function (e) {
        return !1
    }), Object.isExtensible || (Object.isExtensible = function (e) {
        if (Object(e) === e) throw new TypeError;
        for (var t = ""; m(e, t);) t += "?";
        e[t] = !0;
        var n = m(e, t);
        return delete e[t], n
    }), !Object.keys) {
        var L = !0,
            k = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            B = k.length;
        for (var $ in {toString: null}) L = !1;
        Object.keys = function O(e) {
            if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.keys called on a non-object");
            var O = [];
            for (var t in e) m(e, t) && O.push(t);
            if (L) for (var n = 0, i = B; n < i; n++) {
                var s = k[n];
                m(e, s) && O.push(s)
            }
            return O
        }
    }
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    var T = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff";
    if (!String.prototype.trim || T.trim()) {
        T = "[" + T + "]";
        var R = new RegExp("^" + T + T + "*"), M = new RegExp(T + T + "*$");
        String.prototype.trim = function () {
            return String(this).replace(R, "").replace(M, "")
        }
    }
    var I = function (e) {
        if (null == e) throw new TypeError("can't convert " + e + " to object");
        return Object(e)
    }
}), define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function (e, t, n) {
    "use strict";
    e("./regexp"), e("./es5-shim")
}), define("ace/lib/dom", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var i = "http://www.w3.org/1999/xhtml";
    return t.getDocumentHead = function (e) {
        return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
    }, t.createElement = function (e, t) {
        return document.createElementNS ? document.createElementNS(t || i, e) : document.createElement(e)
    }, t.hasCssClass = function (e, t) {
        var n = (e.className + "").split(/\s+/g);
        return n.indexOf(t) !== -1
    }, t.addCssClass = function (e, n) {
        t.hasCssClass(e, n) || (e.className += " " + n)
    }, t.removeCssClass = function (e, t) {
        for (var n = e.className.split(/\s+/g); ;) {
            var i = n.indexOf(t);
            if (i == -1) break;
            n.splice(i, 1)
        }
        e.className = n.join(" ")
    }, t.toggleCssClass = function (e, t) {
        for (var n = e.className.split(/\s+/g), i = !0; ;) {
            var s = n.indexOf(t);
            if (s == -1) break;
            i = !1, n.splice(s, 1)
        }
        return i && n.push(t), e.className = n.join(" "), i
    }, t.setCssClass = function (e, n, i) {
        i ? t.addCssClass(e, n) : t.removeCssClass(e, n)
    }, t.hasCssString = function (e, t) {
        var n, i = 0;
        if (t = t || document, t.createStyleSheet && (n = t.styleSheets)) {
            for (; i < n.length;) if (n[i++].owningElement.id === e) return !0
        } else if (n = t.getElementsByTagName("style")) for (; i < n.length;) if (n[i++].id === e) return !0;
        return !1
    }, t.importCssString = function (e, n, i) {
        if (i = i || document, n && t.hasCssString(n, i)) return null;
        var s;
        n && (e += "\n/*# sourceURL=ace/css/" + n + " */"), i.createStyleSheet ? (s = i.createStyleSheet(), s.cssText = e, n && (s.owningElement.id = n)) : (s = t.createElement("style"), s.appendChild(i.createTextNode(e)), n && (s.id = n), t.getDocumentHead(i).appendChild(s))
    }, t.importCssStylsheet = function (e, n) {
        if (n.createStyleSheet) n.createStyleSheet(e); else {
            var i = t.createElement("link");
            i.rel = "stylesheet", i.href = e, t.getDocumentHead(n).appendChild(i)
        }
    }, t.getInnerWidth = function (e) {
        return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t.computedStyle(e, "paddingRight"), 10) + e.clientWidth
    }, t.getInnerHeight = function (e) {
        return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
    }, t.scrollbarWidth = function (e) {
        var n = t.createElement("ace_inner");
        n.style.width = "100%", n.style.minWidth = "0px", n.style.height = "200px", n.style.display = "block";
        var i = t.createElement("ace_outer"), s = i.style;
        s.position = "absolute", s.left = "-10000px", s.overflow = "hidden", s.width = "200px", s.minWidth = "0px", s.height = "150px", s.display = "block", i.appendChild(n);
        var r = e.documentElement;
        r.appendChild(i);
        var o = n.offsetWidth;
        s.overflow = "scroll";
        var a = n.offsetWidth;
        return o == a && (a = i.clientWidth), r.removeChild(i), o - a
    }, "undefined" == typeof document ? void (t.importCssString = function () {
    }) : (void 0 !== window.pageYOffset ? (t.getPageScrollTop = function () {
        return window.pageYOffset
    }, t.getPageScrollLeft = function () {
        return window.pageXOffset
    }) : (t.getPageScrollTop = function () {
        return document.body.scrollTop
    }, t.getPageScrollLeft = function () {
        return document.body.scrollLeft
    }), window.getComputedStyle ? t.computedStyle = function (e, t) {
        return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window.getComputedStyle(e, "") || {}
    } : t.computedStyle = function (e, t) {
        return t ? e.currentStyle[t] : e.currentStyle
    }, t.setInnerHtml = function (e, t) {
        var n = e.cloneNode(!1);
        return n.innerHTML = t, e.parentNode.replaceChild(n, e), n
    }, "textContent" in document.documentElement ? (t.setInnerText = function (e, t) {
        e.textContent = t
    }, t.getInnerText = function (e) {
        return e.textContent
    }) : (t.setInnerText = function (e, t) {
        e.innerText = t
    }, t.getInnerText = function (e) {
        return e.innerText
    }), void (t.getParentWindow = function (e) {
        return e.defaultView || e.parentWindow
    }))
}), define("ace/lib/oop", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.inherits = function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    }, t.mixin = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }, t.implement = function (e, n) {
        t.mixin(e, n)
    }
}), define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    e("./fixoldbrowsers");
    var i = e("./oop"), s = function () {
        var e, t, n = {
            MODIFIER_KEYS: {16: "Shift", 17: "Ctrl", 18: "Alt", 224: "Meta"},
            KEY_MODS: {ctrl: 1, alt: 2, option: 2, shift: 4, "super": 8, meta: 8, command: 8, cmd: 8},
            FUNCTION_KEYS: {
                8: "Backspace",
                9: "Tab",
                13: "Return",
                19: "Pause",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "Print",
                45: "Insert",
                46: "Delete",
                96: "Numpad0",
                97: "Numpad1",
                98: "Numpad2",
                99: "Numpad3",
                100: "Numpad4",
                101: "Numpad5",
                102: "Numpad6",
                103: "Numpad7",
                104: "Numpad8",
                105: "Numpad9",
                "-13": "NumpadEnter",
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
                144: "Numlock",
                145: "Scrolllock"
            },
            PRINTABLE_KEYS: {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                61: "=",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                107: "+",
                109: "-",
                110: ".",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                111: "/",
                106: "*"
            }
        };
        for (t in n.FUNCTION_KEYS) e = n.FUNCTION_KEYS[t].toLowerCase(), n[e] = parseInt(t, 10);
        for (t in n.PRINTABLE_KEYS) e = n.PRINTABLE_KEYS[t].toLowerCase(), n[e] = parseInt(t, 10);
        return i.mixin(n, n.MODIFIER_KEYS), i.mixin(n, n.PRINTABLE_KEYS), i.mixin(n, n.FUNCTION_KEYS), n.enter = n["return"], n.escape = n.esc, n.del = n["delete"], n[173] = "-", function () {
            for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--;) n.KEY_MODS[t] = e.filter(function (e) {
                return t & n.KEY_MODS[e]
            }).join("-") + "-"
        }(), n.KEY_MODS[0] = "", n.KEY_MODS[-1] = "input-", n
    }();
    i.mixin(t, s), t.keyCodeToString = function (e) {
        var t = s[e];
        return "string" != typeof t && (t = String.fromCharCode(e)), t.toLowerCase()
    }
}), define("ace/lib/useragent", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    if (t.OS = {LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS"}, t.getOS = function () {
        return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
    }, "object" == typeof navigator) {
        var i = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(), s = navigator.userAgent;
        t.isWin = "win" == i, t.isMac = "mac" == i, t.isLinux = "linux" == i, t.isIE = "Microsoft Internet Explorer" == navigator.appName || navigator.appName.indexOf("MSAppHost") >= 0 ? parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = (window.Controllers || window.controllers) && "Gecko" === window.navigator.product, t.isOldGecko = t.isGecko && parseInt((s.match(/rv:(\d+)/) || [])[1], 10) < 4, t.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera), t.isWebKit = parseFloat(s.split("WebKit/")[1]) || void 0, t.isChrome = parseFloat(s.split(" Chrome/")[1]) || void 0, t.isAIR = s.indexOf("AdobeAIR") >= 0, t.isIPad = s.indexOf("iPad") >= 0, t.isTouchPad = s.indexOf("TouchPad") >= 0, t.isChromeOS = s.indexOf(" CrOS ") >= 0
    }
}), define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
    "use strict";

    function i(e, t, n) {
        var i = c(t);
        if (!o.isMac && a) {
            if (t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (i |= 8), a.altGr) {
                if (3 == (3 & i)) return;
                a.altGr = 0
            }
            if (18 === n || 17 === n) {
                var s = "location" in t ? t.location : t.keyLocation;
                if (17 === n && 1 === s) 1 == a[n] && (l = t.timeStamp); else if (18 === n && 3 === i && 2 === s) {
                    var h = t.timeStamp - l;
                    h < 50 && (a.altGr = !0)
                }
            }
        }
        if (n in r.MODIFIER_KEYS && (n = -1), 8 & i && n >= 91 && n <= 93 && (n = -1), !i && 13 === n) {
            var s = "location" in t ? t.location : t.keyLocation;
            if (3 === s && (e(t, i, -n), t.defaultPrevented)) return
        }
        if (o.isChromeOS && 8 & i) {
            if (e(t, i, n), t.defaultPrevented) return;
            i &= -9
        }
        return !!(i || n in r.FUNCTION_KEYS || n in r.PRINTABLE_KEYS) && e(t, i, n)
    }

    function s() {
        a = Object.create(null)
    }

    var r = e("./keys"), o = e("./useragent"), a = null, l = 0;
    t.addListener = function (e, t, n) {
        if (e.addEventListener) return e.addEventListener(t, n, !1);
        if (e.attachEvent) {
            var i = function () {
                n.call(e, window.event)
            };
            n._wrapper = i, e.attachEvent("on" + t, i)
        }
    }, t.removeListener = function (e, t, n) {
        return e.removeEventListener ? e.removeEventListener(t, n, !1) : void (e.detachEvent && e.detachEvent("on" + t, n._wrapper || n))
    }, t.stopEvent = function (e) {
        return t.stopPropagation(e), t.preventDefault(e), !1
    }, t.stopPropagation = function (e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }, t.preventDefault = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }, t.getButton = function (e) {
        return "dblclick" == e.type ? 0 : "contextmenu" == e.type || o.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {
            1: 0,
            2: 2,
            4: 1
        }[e.button]
    }, t.capture = function (e, n, i) {
        function s(e) {
            n && n(e), i && i(e), t.removeListener(document, "mousemove", n, !0), t.removeListener(document, "mouseup", s, !0), t.removeListener(document, "dragstart", s, !0)
        }

        return t.addListener(document, "mousemove", n, !0), t.addListener(document, "mouseup", s, !0), t.addListener(document, "dragstart", s, !0), s
    }, t.addTouchMoveListener = function (e, n) {
        if ("ontouchmove" in e) {
            var i, s;
            t.addListener(e, "touchstart", function (e) {
                var t = e.changedTouches[0];
                i = t.clientX, s = t.clientY
            }), t.addListener(e, "touchmove", function (e) {
                var t = 1, r = e.changedTouches[0];
                e.wheelX = -(r.clientX - i) / t, e.wheelY = -(r.clientY - s) / t, i = r.clientX, s = r.clientY, n(e)
            })
        }
    }, t.addMouseWheelListener = function (e, n) {
        "onmousewheel" in e ? t.addListener(e, "mousewheel", function (e) {
            var t = 8;
            void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / t, e.wheelY = -e.wheelDeltaY / t) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / t), n(e)
        }) : "onwheel" in e ? t.addListener(e, "wheel", function (e) {
            var t = .35;
            switch (e.deltaMode) {
                case e.DOM_DELTA_PIXEL:
                    e.wheelX = e.deltaX * t || 0, e.wheelY = e.deltaY * t || 0;
                    break;
                case e.DOM_DELTA_LINE:
                case e.DOM_DELTA_PAGE:
                    e.wheelX = 5 * (e.deltaX || 0), e.wheelY = 5 * (e.deltaY || 0)
            }
            n(e)
        }) : t.addListener(e, "DOMMouseScroll", function (e) {
            e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0), e.wheelY = 0) : (e.wheelX = 0, e.wheelY = 5 * (e.detail || 0)), n(e)
        })
    }, t.addMultiMouseDownListener = function (e, n, i, s) {
        function r(e) {
            if (0 !== t.getButton(e) ? u = 0 : e.detail > 1 ? (u++, u > 4 && (u = 1)) : u = 1, o.isIE) {
                var r = Math.abs(e.clientX - l) > 5 || Math.abs(e.clientY - c) > 5;
                h && !r || (u = 1), h && clearTimeout(h), h = setTimeout(function () {
                    h = null
                }, n[u - 1] || 600), 1 == u && (l = e.clientX, c = e.clientY)
            }
            if (e._clicks = u, i[s]("mousedown", e), u > 4) u = 0; else if (u > 1) return i[s](d[u], e)
        }

        function a(e) {
            u = 2, h && clearTimeout(h), h = setTimeout(function () {
                h = null
            }, n[u - 1] || 600), i[s]("mousedown", e), i[s](d[u], e)
        }

        var l, c, h, u = 0, d = {2: "dblclick", 3: "tripleclick", 4: "quadclick"};
        Array.isArray(e) || (e = [e]), e.forEach(function (e) {
            t.addListener(e, "mousedown", r), o.isOldIE && t.addListener(e, "dblclick", a)
        })
    };
    var c = !o.isMac || !o.isOpera || "KeyboardEvent" in window ? function (e) {
        return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
    } : function (e) {
        return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0)
    };
    if (t.getModifierString = function (e) {
        return r.KEY_MODS[c(e)]
    }, t.addCommandKeyListener = function (e, n) {
        var r = t.addListener;
        if (o.isOldGecko || o.isOpera && !("KeyboardEvent" in window)) {
            var l = null;
            r(e, "keydown", function (e) {
                l = e.keyCode
            }), r(e, "keypress", function (e) {
                return i(n, e, l)
            })
        } else {
            var c = null;
            r(e, "keydown", function (e) {
                a[e.keyCode] = (a[e.keyCode] || 0) + 1;
                var t = i(n, e, e.keyCode);
                return c = e.defaultPrevented, t
            }), r(e, "keypress", function (e) {
                c && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), c = null)
            }), r(e, "keyup", function (e) {
                a[e.keyCode] = null
            }), a || (s(), r(window, "focus", s))
        }
    }, "object" == typeof window && window.postMessage && !o.isOldIE) {
        var h = 1;
        t.nextTick = function (e, n) {
            n = n || window;
            var i = "zero-timeout-message-" + h;
            t.addListener(n, "message", function s(r) {
                r.data == i && (t.stopPropagation(r), t.removeListener(n, "message", s), e())
            }), n.postMessage(i, "*")
        }
    }
    t.nextFrame = "object" == typeof window && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), t.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame = function (e) {
        setTimeout(e, 17)
    }
}), define("ace/lib/lang", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.last = function (e) {
        return e[e.length - 1]
    }, t.stringReverse = function (e) {
        return e.split("").reverse().join("")
    }, t.stringRepeat = function (e, t) {
        for (var n = ""; t > 0;) 1 & t && (n += e), (t >>= 1) && (e += e);
        return n
    };
    var i = /^\s\s*/, s = /\s\s*$/;
    t.stringTrimLeft = function (e) {
        return e.replace(i, "")
    }, t.stringTrimRight = function (e) {
        return e.replace(s, "")
    }, t.copyObject = function (e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t
    }, t.copyArray = function (e) {
        for (var t = [], n = 0, i = e.length; n < i; n++) e[n] && "object" == typeof e[n] ? t[n] = this.copyObject(e[n]) : t[n] = e[n];
        return t
    }, t.deepCopy = function r(e) {
        if ("object" != typeof e || !e) return e;
        var t;
        if (Array.isArray(e)) {
            t = [];
            for (var n = 0; n < e.length; n++) t[n] = r(e[n]);
            return t
        }
        if ("[object Object]" !== Object.prototype.toString.call(e)) return e;
        t = {};
        for (var n in e) t[n] = r(e[n]);
        return t
    }, t.arrayToMap = function (e) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = 1;
        return t
    }, t.createMap = function (e) {
        var t = Object.create(null);
        for (var n in e) t[n] = e[n];
        return t
    }, t.arrayRemove = function (e, t) {
        for (var n = 0; n <= e.length; n++) t === e[n] && e.splice(n, 1)
    }, t.escapeRegExp = function (e) {
        return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
    }, t.escapeHTML = function (e) {
        return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
    }, t.getMatchOffsets = function (e, t) {
        var n = [];
        return e.replace(t, function (e) {
            n.push({offset: arguments[arguments.length - 2], length: e.length})
        }), n
    }, t.deferredCall = function (e) {
        var t = null, n = function () {
            t = null, e()
        }, i = function (e) {
            return i.cancel(), t = setTimeout(n, e || 0), i
        };
        return i.schedule = i, i.call = function () {
            return this.cancel(), e(), i
        }, i.cancel = function () {
            return clearTimeout(t), t = null, i
        }, i.isPending = function () {
            return t
        }, i
    }, t.delayedCall = function (e, t) {
        var n = null, i = function () {
            n = null, e()
        }, s = function (e) {
            null == n && (n = setTimeout(i, e || t))
        };
        return s.delay = function (e) {
            n && clearTimeout(n), n = setTimeout(i, e || t)
        }, s.schedule = s, s.call = function () {
            this.cancel(), e()
        }, s.cancel = function () {
            n && clearTimeout(n), n = null
        }, s.isPending = function () {
            return n
        }, s
    }
}), define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var i = e("../lib/event"), s = e("../lib/useragent"), r = e("../lib/dom"), o = e("../lib/lang"),
        a = s.isChrome < 18, l = s.isIE, c = function (e, t) {
            function n(e) {
                if (!g) {
                    if (g = !0, D) t = 0, n = e ? 0 : u.value.length - 1; else var t = e ? 2 : 1, n = 2;
                    try {
                        u.setSelectionRange(t, n)
                    } catch (i) {
                    }
                    g = !1
                }
            }

            function c() {
                g || (u.value = d, s.isWebKit && E.schedule())
            }

            function h() {
                clearTimeout(W), W = setTimeout(function () {
                    m && (u.style.cssText = m, m = ""), null == t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = !0, t.renderer.$moveTextAreaToCursor())
                }, s.isOldIE ? 200 : 0)
            }

            var u = r.createElement("textarea");
            u.className = "ace_text-input", s.isTouchPad && u.setAttribute("x-palm-disable-auto-cap", !0), u.setAttribute("wrap", "off"), u.setAttribute("autocorrect", "off"), u.setAttribute("autocapitalize", "off"), u.setAttribute("spellcheck", !1), u.style.opacity = "0", s.isOldIE && (u.style.top = "-1000px"), e.insertBefore(u, e.firstChild);
            var d = "", f = !1, p = !1, g = !1, m = "", C = !0;
            try {
                var v = document.activeElement === u
            } catch (A) {
            }
            i.addListener(u, "blur", function (e) {
                t.onBlur(e), v = !1
            }), i.addListener(u, "focus", function (e) {
                v = !0, t.onFocus(e), n()
            }), this.focus = function () {
                if (m) return u.focus();
                var e = u.style.top;
                u.style.position = "fixed", u.style.top = "0px", u.focus(), setTimeout(function () {
                    u.style.position = "", "0px" == u.style.top && (u.style.top = e)
                }, 0)
            }, this.blur = function () {
                u.blur()
            }, this.isFocused = function () {
                return v
            };
            var y = o.delayedCall(function () {
                v && n(C)
            }), E = o.delayedCall(function () {
                g || (u.value = d, v && n())
            });
            s.isWebKit || t.addEventListener("changeSelection", function () {
                t.selection.isEmpty() != C && (C = !C, y.schedule())
            }), c(), v && t.onFocus();
            var w = function (e) {
                return 0 === e.selectionStart && e.selectionEnd === e.value.length
            };
            if (!u.setSelectionRange && u.createTextRange && (u.setSelectionRange = function (e, t) {
                var n = this.createTextRange();
                n.collapse(!0), n.moveStart("character", e), n.moveEnd("character", t), n.select()
            }, w = function (e) {
                try {
                    var t = e.ownerDocument.selection.createRange()
                } catch (n) {
                }
                return !(!t || t.parentElement() != e) && t.text == e.value
            }), s.isOldIE) {
                var b = !1, F = function (e) {
                    if (!b) {
                        var t = u.value;
                        if (!g && t && t != d) {
                            if (e && t == d[0]) return _.schedule();
                            k(t), b = !0, c(), b = !1
                        }
                    }
                }, _ = o.delayedCall(F);
                i.addListener(u, "propertychange", F);
                var S = {13: 1, 27: 1};
                i.addListener(u, "keyup", function (e) {
                    return !g || u.value && !S[e.keyCode] || setTimeout(P, 0), (u.value.charCodeAt(0) || 0) < 129 ? _.call() : void (g ? N() : O())
                }), i.addListener(u, "keydown", function (e) {
                    _.schedule(50)
                })
            }
            var x = function (e) {
                f ? f = !1 : w(u) ? (t.selectAll(), n()) : D && n(t.selection.isEmpty())
            }, D = null;
            this.setInputHandler = function (e) {
                D = e
            }, this.getInputHandler = function () {
                return D
            };
            var L = !1, k = function (e) {
                D && (e = D(e), D = null), p ? (n(), e && t.onPaste(e), p = !1) : e == d.charAt(0) ? L ? t.execCommand("del", {source: "ace"}) : t.execCommand("backspace", {source: "ace"}) : (e.substring(0, 2) == d ? e = e.substr(2) : e.charAt(0) == d.charAt(0) ? e = e.substr(1) : e.charAt(e.length - 1) == d.charAt(0) && (e = e.slice(0, -1)), e.charAt(e.length - 1) == d.charAt(0) && (e = e.slice(0, -1)), e && t.onTextInput(e)), L && (L = !1)
            }, B = function (e) {
                if (!g) {
                    var t = u.value;
                    k(t), c()
                }
            }, $ = function (e, t, n) {
                var i = e.clipboardData || window.clipboardData;
                if (i && !a) {
                    var s = l || n ? "Text" : "text/plain";
                    try {
                        return t ? i.setData(s, t) !== !1 : i.getData(s)
                    } catch (e) {
                        if (!n) return $(e, t, !0)
                    }
                }
            }, T = function (e, s) {
                var r = t.getCopyText();
                return r ? void ($(e, r) ? (s ? t.onCut() : t.onCopy(), i.preventDefault(e)) : (f = !0, u.value = r, u.select(), setTimeout(function () {
                    f = !1, c(), n(), s ? t.onCut() : t.onCopy()
                }))) : i.preventDefault(e)
            }, R = function (e) {
                T(e, !0)
            }, M = function (e) {
                T(e, !1)
            }, I = function (e) {
                var r = $(e);
                "string" == typeof r ? (r && t.onPaste(r, e), s.isIE && setTimeout(n), i.preventDefault(e)) : (u.value = "", p = !0)
            };
            i.addCommandKeyListener(u, t.onCommandKey.bind(t)), i.addListener(u, "select", x), i.addListener(u, "input", B), i.addListener(u, "cut", R), i.addListener(u, "copy", M), i.addListener(u, "paste", I), "oncut" in u && "oncopy" in u && "onpaste" in u || i.addListener(e, "keydown", function (e) {
                if ((!s.isMac || e.metaKey) && e.ctrlKey) switch (e.keyCode) {
                    case 67:
                        M(e);
                        break;
                    case 86:
                        I(e);
                        break;
                    case 88:
                        R(e)
                }
            });
            var O = function (e) {
                g || !t.onCompositionStart || t.$readOnly || (g = {}, g.canUndo = t.session.$undoManager, t.onCompositionStart(), setTimeout(N, 0), t.on("mousedown", P), g.canUndo && !t.selection.isEmpty() && (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup())
            }, N = function () {
                if (g && t.onCompositionUpdate && !t.$readOnly) {
                    var e = u.value.replace(/\x01/g, "");
                    if (g.lastValue !== e && (t.onCompositionUpdate(e), g.lastValue && t.undo(), g.canUndo && (g.lastValue = e), g.lastValue)) {
                        var n = t.selection.getRange();
                        t.insert(g.lastValue), t.session.markUndoGroup(), g.range = t.selection.getRange(), t.selection.setRange(n), t.selection.clearSelection()
                    }
                }
            }, P = function (e) {
                if (t.onCompositionEnd && !t.$readOnly) {
                    var n = g;
                    g = !1;
                    var i = setTimeout(function () {
                        i = null;
                        var e = u.value.replace(/\x01/g, "");
                        g || (e == n.lastValue ? c() : !n.lastValue && e && (c(), k(e)))
                    });
                    D = function (e) {
                        return i && clearTimeout(i), e = e.replace(/\x01/g, ""), e == n.lastValue ? "" : (n.lastValue && i && t.undo(), e)
                    }, t.onCompositionEnd(), t.removeListener("mousedown", P), "compositionend" == e.type && n.range && t.selection.setRange(n.range), s.isChrome && s.isChrome >= 53 && B()
                }
            }, H = o.delayedCall(N, 50);
            i.addListener(u, "compositionstart", O), s.isGecko ? i.addListener(u, "text", function () {
                H.schedule()
            }) : (i.addListener(u, "keyup", function () {
                H.schedule()
            }), i.addListener(u, "keydown", function () {
                H.schedule()
            })), i.addListener(u, "compositionend", P), this.getElement = function () {
                return u
            }, this.setReadOnly = function (e) {
                u.readOnly = e
            }, this.onContextMenu = function (e) {
                L = !0, n(t.selection.isEmpty()), t._emit("nativecontextmenu", {
                    target: t,
                    domEvent: e
                }), this.moveToMouse(e, !0)
            }, this.moveToMouse = function (e, n) {
                if (n || !s.isOldIE) {
                    m || (m = u.style.cssText), u.style.cssText = (n ? "z-index:100000;" : "") + "height:" + u.style.height + ";" + (s.isIE ? "opacity:0.1;" : "");
                    var o = t.container.getBoundingClientRect(), a = r.computedStyle(t.container),
                        l = o.top + (parseInt(a.borderTopWidth) || 0), c = o.left + (parseInt(o.borderLeftWidth) || 0),
                        d = o.bottom - l - u.clientHeight - 2, f = function (e) {
                            u.style.left = e.clientX - c - 2 + "px", u.style.top = Math.min(e.clientY - l - 2, d) + "px"
                        };
                    f(e), "mousedown" == e.type && (t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null), clearTimeout(W), s.isWin && !s.isOldIE && i.capture(t.container, f, h))
                }
            }, this.onContextMenuClose = h;
            var W, U = function (e) {
                t.textInput.onContextMenu(e), h()
            };
            i.addListener(u, "mouseup", U), i.addListener(u, "mousedown", function (e) {
                e.preventDefault(), h()
            }), i.addListener(t.renderer.scroller, "contextmenu", U), i.addListener(u, "contextmenu", U)
        };
    t.TextInput = c
}), define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";

    function i(e) {
        e.$clickSelection = null;
        var t = e.editor;
        t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e)), t.setDefaultHandler("touchmove", this.onTouchMove.bind(e));
        var n = ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"];
        n.forEach(function (t) {
            e[t] = this[t]
        }, this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
    }

    function s(e, t, n, i) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
    }

    function r(e, t) {
        if (e.start.row == e.end.row) var n = 2 * t.column - e.start.column - e.end.column; else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column) var n = 2 * t.row - e.start.row - e.end.row; else var n = t.column - 4;
        return n < 0 ? {cursor: e.start, anchor: e.end} : {cursor: e.end, anchor: e.start}
    }

    var o = (e("../lib/dom"), e("../lib/event"), e("../lib/useragent"), 0);
    (function () {
        this.onMouseDown = function (e) {
            var t = e.inSelection(), n = e.getDocumentPosition();
            this.mousedownEvent = e;
            var i = this.editor, s = e.getButton();
            if (0 !== s) {
                var r = i.getSelectionRange(), o = r.isEmpty();
                return i.$blockScrolling++, (o || 1 == s) && i.selection.moveToPosition(n), i.$blockScrolling--, void (2 == s && i.textInput.onContextMenu(e.domEvent))
            }
            return this.mousedownEvent.time = Date.now(), !t || i.isFocused() || (i.focus(), !this.$focusTimout || this.$clickSelection || i.inMultiSelectMode) ? (this.captureMouse(e), this.startSelect(n, e.domEvent._clicks > 1), e.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(e))
        }, this.startSelect = function (e, t) {
            e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var n = this.editor;
            n.$blockScrolling++, this.mousedownEvent.getShiftKey() ? n.selection.selectToPosition(e) : t || n.selection.moveToPosition(e), t || this.select(), n.renderer.scroller.setCapture && n.renderer.scroller.setCapture(), n.setStyle("ace_selecting"), this.setState("select"), n.$blockScrolling--
        }, this.select = function () {
            var e, t = this.editor, n = t.renderer.screenToTextCoordinates(this.x, this.y);
            if (t.$blockScrolling++, this.$clickSelection) {
                var i = this.$clickSelection.comparePoint(n);
                if (i == -1) e = this.$clickSelection.end; else if (1 == i) e = this.$clickSelection.start; else {
                    var s = r(this.$clickSelection, n);
                    n = s.cursor, e = s.anchor
                }
                t.selection.setSelectionAnchor(e.row, e.column)
            }
            t.selection.selectToPosition(n), t.$blockScrolling--, t.renderer.scrollCursorIntoView()
        }, this.extendSelectionBy = function (e) {
            var t, n = this.editor, i = n.renderer.screenToTextCoordinates(this.x, this.y),
                s = n.selection[e](i.row, i.column);
            if (n.$blockScrolling++, this.$clickSelection) {
                var o = this.$clickSelection.comparePoint(s.start), a = this.$clickSelection.comparePoint(s.end);
                if (o == -1 && a <= 0) t = this.$clickSelection.end, s.end.row == i.row && s.end.column == i.column || (i = s.start); else if (1 == a && o >= 0) t = this.$clickSelection.start, s.start.row == i.row && s.start.column == i.column || (i = s.end); else if (o == -1 && 1 == a) i = s.end, t = s.start; else {
                    var l = r(this.$clickSelection, i);
                    i = l.cursor, t = l.anchor
                }
                n.selection.setSelectionAnchor(t.row, t.column)
            }
            n.selection.selectToPosition(i), n.$blockScrolling--, n.renderer.scrollCursorIntoView()
        }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
            this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
        }, this.focusWait = function () {
            var e = s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), t = Date.now();
            (e > o || t - this.mousedownEvent.time > this.$focusTimout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
        }, this.onDoubleClick = function (e) {
            var t = e.getDocumentPosition(), n = this.editor, i = n.session, s = i.getBracketRange(t);
            s ? (s.isEmpty() && (s.start.column--, s.end.column++), this.setState("select")) : (s = n.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = s, this.select()
        }, this.onTripleClick = function (e) {
            var t = e.getDocumentPosition(), n = this.editor;
            this.setState("selectByLines");
            var i = n.getSelectionRange();
            i.isMultiLine() && i.contains(t.row, t.column) ? (this.$clickSelection = n.selection.getLineRange(i.start.row), this.$clickSelection.end = n.selection.getLineRange(i.end.row).end) : this.$clickSelection = n.selection.getLineRange(t.row), this.select()
        }, this.onQuadClick = function (e) {
            var t = this.editor;
            t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll")
        }, this.onMouseWheel = function (e) {
            if (!e.getAccelKey()) {
                e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
                var t = e.domEvent.timeStamp, n = t - (this.$lastScrollTime || 0), i = this.editor,
                    s = i.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
                return s || n < 200 ? (this.$lastScrollTime = t, i.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()) : void 0
            }
        }, this.onTouchMove = function (e) {
            var t = e.domEvent.timeStamp, n = t - (this.$lastScrollTime || 0), i = this.editor,
                s = i.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
            if (s || n < 200) return this.$lastScrollTime = t, i.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()
        }
    }).call(i.prototype), t.DefaultHandlers = i
}), define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function (e, t, n) {
    "use strict";

    function i(e) {
        this.isOpen = !1, this.$element = null, this.$parentNode = e
    }

    var s = (e("./lib/oop"), e("./lib/dom"));
    (function () {
        this.$init = function () {
            return this.$element = s.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
        }, this.getElement = function () {
            return this.$element || this.$init()
        }, this.setText = function (e) {
            s.setInnerText(this.getElement(), e)
        }, this.setHtml = function (e) {
            this.getElement().innerHTML = e
        }, this.setPosition = function (e, t) {
            this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
        }, this.setClassName = function (e) {
            s.addCssClass(this.getElement(), e)
        }, this.show = function (e, t, n) {
            null != e && this.setText(e), null != t && null != n && this.setPosition(t, n), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
        }, this.hide = function () {
            this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
        }, this.getHeight = function () {
            return this.getElement().offsetHeight
        }, this.getWidth = function () {
            return this.getElement().offsetWidth
        }
    }).call(i.prototype), t.Tooltip = i
}), define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function (e, t, n) {
    "use strict";

    function i(e) {
        function t() {
            var t = u.getDocumentPosition().row, s = l.$annotations[t];
            if (!s) return n();
            var r = o.session.getLength();
            if (t == r) {
                var a = o.renderer.pixelToScreenCoordinates(0, u.y).row, h = u.$pos;
                if (a > o.session.documentToScreenRow(h.row, h.column)) return n()
            }
            if (d != s) if (d = s.text.join("<br/>"), c.setHtml(d), c.show(), o._signal("showGutterTooltip", c), o.on("mousewheel", n), e.$tooltipFollowsMouse) i(u); else {
                var f = u.domEvent.target, p = f.getBoundingClientRect(), g = c.getElement().style;
                g.left = p.right + "px", g.top = p.bottom + "px"
            }
        }

        function n() {
            h && (h = clearTimeout(h)), d && (c.hide(), d = null, o._signal("hideGutterTooltip", c), o.removeEventListener("mousewheel", n))
        }

        function i(e) {
            c.setPosition(e.x, e.y)
        }

        var o = e.editor, l = o.renderer.$gutterLayer, c = new s(o.container);
        e.editor.setDefaultHandler("guttermousedown", function (t) {
            if (o.isFocused() && 0 == t.getButton()) {
                var n = l.getRegion(t);
                if ("foldWidgets" != n) {
                    var i = t.getDocumentPosition().row, s = o.session.selection;
                    if (t.getShiftKey()) s.selectTo(i, 0); else {
                        if (2 == t.domEvent.detail) return o.selectAll(), t.preventDefault();
                        e.$clickSelection = o.selection.getLineRange(i)
                    }
                    return e.setState("selectByLines"), e.captureMouse(t), t.preventDefault()
                }
            }
        });
        var h, u, d;
        e.editor.setDefaultHandler("guttermousemove", function (s) {
            var o = s.domEvent.target || s.domEvent.srcElement;
            return r.hasCssClass(o, "ace_fold-widget") ? n() : (d && e.$tooltipFollowsMouse && i(s), u = s, void (h || (h = setTimeout(function () {
                h = null, u && !e.isMousePressed ? t() : n()
            }, 50))))
        }), a.addListener(o.renderer.$gutter, "mouseout", function (e) {
            u = null, d && !h && (h = setTimeout(function () {
                h = null, n()
            }, 50))
        }), o.on("changeSession", n)
    }

    function s(e) {
        l.call(this, e)
    }

    var r = e("../lib/dom"), o = e("../lib/oop"), a = e("../lib/event"), l = e("../tooltip").Tooltip;
    o.inherits(s, l), function () {
        this.setPosition = function (e, t) {
            var n = window.innerWidth || document.documentElement.clientWidth,
                i = window.innerHeight || document.documentElement.clientHeight, s = this.getWidth(),
                r = this.getHeight();
            e += 15, t += 15, e + s > n && (e -= e + s - n), t + r > i && (t -= 20 + r), l.prototype.setPosition.call(this, e, t)
        }
    }.call(s.prototype), t.GutterHandler = i
}), define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    var i = e("../lib/event"), s = e("../lib/useragent"), r = t.MouseEvent = function (e, t) {
        this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
    };
    (function () {
        this.stopPropagation = function () {
            i.stopPropagation(this.domEvent), this.propagationStopped = !0
        }, this.preventDefault = function () {
            i.preventDefault(this.domEvent), this.defaultPrevented = !0
        }, this.stop = function () {
            this.stopPropagation(), this.preventDefault()
        }, this.getDocumentPosition = function () {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos)
        }, this.inSelection = function () {
            if (null !== this.$inSelection) return this.$inSelection;
            var e = this.editor, t = e.getSelectionRange();
            if (t.isEmpty()) this.$inSelection = !1; else {
                var n = this.getDocumentPosition();
                this.$inSelection = t.contains(n.row, n.column)
            }
            return this.$inSelection
        }, this.getButton = function () {
            return i.getButton(this.domEvent)
        }, this.getShiftKey = function () {
            return this.domEvent.shiftKey
        }, this.getAccelKey = s.isMac ? function () {
            return this.domEvent.metaKey
        } : function () {
            return this.domEvent.ctrlKey
        }
    }).call(r.prototype)
}), define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";

    function i(e) {
        function t(e, t) {
            var n = Date.now(), i = !t || e.row != t.row, r = !t || e.column != t.column;
            if (!D || i || r) m.$blockScrolling += 1, m.moveCursorToPosition(e), m.$blockScrolling -= 1, D = n, L = {
                x: y,
                y: E
            }; else {
                var o = s(L.x, L.y, y, E);
                o > h ? D = null : n - D >= c && (m.renderer.scrollCursorIntoView(), D = null)
            }
        }

        function n(e, t) {
            var n = Date.now(), i = m.renderer.layerConfig.lineHeight, s = m.renderer.layerConfig.characterWidth,
                r = m.renderer.scroller.getBoundingClientRect(),
                o = {x: {left: y - r.left, right: r.right - y}, y: {top: E - r.top, bottom: r.bottom - E}},
                a = Math.min(o.x.left, o.x.right), c = Math.min(o.y.top, o.y.bottom),
                h = {row: e.row, column: e.column};
            a / s <= 2 && (h.column += o.x.left < o.x.right ? -3 : 2), c / i <= 1 && (h.row += o.y.top < o.y.bottom ? -1 : 1);
            var u = e.row != h.row, d = e.column != h.column, f = !t || e.row != t.row;
            u || d && !f ? x ? n - x >= l && m.renderer.scrollCursorIntoView(h) : x = n : x = null
        }

        function i() {
            var e = F;
            F = m.renderer.screenToTextCoordinates(y, E), t(F, e), n(F, e)
        }

        function u() {
            b = m.selection.toOrientedRange(), A = m.session.addMarker(b, "ace_selection", m.getSelectionStyle()), m.clearSelection(), m.isFocused() && m.renderer.$cursorLayer.setBlinking(!1), clearInterval(w), i(), w = setInterval(i, 20), B = 0, o.addListener(document, "mousemove", f)
        }

        function d() {
            clearInterval(w), m.session.removeMarker(A), A = null, m.$blockScrolling += 1, m.selection.fromOrientedRange(b), m.$blockScrolling -= 1, m.isFocused() && !S && m.renderer.$cursorLayer.setBlinking(!m.getReadOnly()), b = null, F = null, B = 0, x = null, D = null, o.removeListener(document, "mousemove", f)
        }

        function f() {
            null == $ && ($ = setTimeout(function () {
                null != $ && A && d()
            }, 20))
        }

        function p(e) {
            var t = e.types;
            return !t || Array.prototype.some.call(t, function (e) {
                return "text/plain" == e || "Text" == e
            })
        }

        function g(e) {
            var t = ["copy", "copymove", "all", "uninitialized"],
                n = ["move", "copymove", "linkmove", "all", "uninitialized"], i = a.isMac ? e.altKey : e.ctrlKey,
                s = "uninitialized";
            try {
                s = e.dataTransfer.effectAllowed.toLowerCase()
            } catch (e) {
            }
            var r = "none";
            return i && t.indexOf(s) >= 0 ? r = "copy" : n.indexOf(s) >= 0 ? r = "move" : t.indexOf(s) >= 0 && (r = "copy"), r
        }

        var m = e.editor, C = r.createElement("img");
        C.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", a.isOpera && (C.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
        var v = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
        v.forEach(function (t) {
            e[t] = this[t]
        }, this), m.addEventListener("mousedown", this.onMouseDown.bind(e));
        var A, y, E, w, b, F, _, S, x, D, L, k = m.container, B = 0;
        this.onDragStart = function (e) {
            if (this.cancelDrag || !k.draggable) {
                var t = this;
                return setTimeout(function () {
                    t.startSelect(), t.captureMouse(e)
                }, 0), e.preventDefault()
            }
            b = m.getSelectionRange();
            var n = e.dataTransfer;
            n.effectAllowed = m.getReadOnly() ? "copy" : "copyMove", a.isOpera && (m.container.appendChild(C), C.scrollTop = 0), n.setDragImage && n.setDragImage(C, 0, 0), a.isOpera && m.container.removeChild(C), n.clearData(), n.setData("Text", m.session.getTextRange()), S = !0, this.setState("drag")
        }, this.onDragEnd = function (e) {
            if (k.draggable = !1, S = !1, this.setState(null), !m.getReadOnly()) {
                var t = e.dataTransfer.dropEffect;
                _ || "move" != t || m.session.remove(m.getSelectionRange()), m.renderer.$cursorLayer.setBlinking(!0)
            }
            this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
        }, this.onDragEnter = function (e) {
            if (!m.getReadOnly() && p(e.dataTransfer)) return y = e.clientX, E = e.clientY, A || u(), B++, e.dataTransfer.dropEffect = _ = g(e), o.preventDefault(e)
        }, this.onDragOver = function (e) {
            if (!m.getReadOnly() && p(e.dataTransfer)) return y = e.clientX, E = e.clientY, A || (u(), B++), null !== $ && ($ = null), e.dataTransfer.dropEffect = _ = g(e), o.preventDefault(e)
        }, this.onDragLeave = function (e) {
            if (B--, B <= 0 && A) return d(), _ = null, o.preventDefault(e)
        }, this.onDrop = function (e) {
            if (F) {
                var t = e.dataTransfer;
                if (S) switch (_) {
                    case"move":
                        b = b.contains(F.row, F.column) ? {start: F, end: F} : m.moveText(b, F);
                        break;
                    case"copy":
                        b = m.moveText(b, F, !0)
                } else {
                    var n = t.getData("Text");
                    b = {start: F, end: m.session.insert(F, n)}, m.focus(), _ = null
                }
                return d(), o.preventDefault(e)
            }
        }, o.addListener(k, "dragstart", this.onDragStart.bind(e)), o.addListener(k, "dragend", this.onDragEnd.bind(e)), o.addListener(k, "dragenter", this.onDragEnter.bind(e)), o.addListener(k, "dragover", this.onDragOver.bind(e)), o.addListener(k, "dragleave", this.onDragLeave.bind(e)), o.addListener(k, "drop", this.onDrop.bind(e));
        var $ = null
    }

    function s(e, t, n, i) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
    }

    var r = e("../lib/dom"), o = e("../lib/event"), a = e("../lib/useragent"), l = 200, c = 200, h = 5;
    (function () {
        this.dragWait = function () {
            var e = Date.now() - this.mousedownEvent.time;
            e > this.editor.getDragDelay() && this.startDrag()
        }, this.dragWaitEnd = function () {
            var e = this.editor.container;
            e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
        }, this.dragReadyEnd = function (e) {
            this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
        }, this.startDrag = function () {
            this.cancelDrag = !1;
            var e = this.editor, t = e.container;
            t.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
            var n = a.isWin ? "default" : "move";
            e.renderer.setCursorStyle(n), this.setState("dragReady")
        }, this.onMouseDrag = function (e) {
            var t = this.editor.container;
            if (a.isIE && "dragReady" == this.state) {
                var n = s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                n > 3 && t.dragDrop()
            }
            if ("dragWait" === this.state) {
                var n = s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                n > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()))
            }
        }, this.onMouseDown = function (e) {
            if (this.$dragEnabled) {
                this.mousedownEvent = e;
                var t = this.editor, n = e.inSelection(), i = e.getButton(), s = e.domEvent.detail || 1;
                if (1 === s && 0 === i && n) {
                    if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;
                    this.mousedownEvent.time = Date.now();
                    var r = e.domEvent.target || e.domEvent.srcElement;
                    if ("unselectable" in r && (r.unselectable = "on"), t.getDragDelay()) {
                        if (a.isWebKit) {
                            this.cancelDrag = !0;
                            var o = t.container;
                            o.draggable = !0
                        }
                        this.setState("dragWait")
                    } else this.startDrag();
                    this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
                }
            }
        }
    }).call(i.prototype), t.DragdropHandler = i
}), define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var i = e("./dom");
    t.get = function (e, t) {
        var n = new XMLHttpRequest;
        n.open("GET", e, !0), n.onreadystatechange = function () {
            4 === n.readyState && t(n.responseText)
        }, n.send(null)
    }, t.loadScript = function (e, t) {
        var n = i.getDocumentHead(), s = document.createElement("script");
        s.src = e, n.appendChild(s), s.onload = s.onreadystatechange = function (e, n) {
            !n && s.readyState && "loaded" != s.readyState && "complete" != s.readyState || (s = s.onload = s.onreadystatechange = null, n || t())
        }
    }, t.qualifyURL = function (e) {
        var t = document.createElement("a");
        return t.href = e, t.href
    }
}), define("ace/lib/event_emitter", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var i = {}, s = function () {
        this.propagationStopped = !0
    }, r = function () {
        this.defaultPrevented = !0
    };
    i._emit = i._dispatchEvent = function (e, t) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
        var n = this._eventRegistry[e] || [], i = this._defaultHandlers[e];
        if (n.length || i) {
            "object" == typeof t && t || (t = {}), t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = s), t.preventDefault || (t.preventDefault = r), n = n.slice();
            for (var o = 0; o < n.length && (n[o](t, this), !t.propagationStopped); o++) ;
            return i && !t.defaultPrevented ? i(t, this) : void 0
        }
    }, i._signal = function (e, t) {
        var n = (this._eventRegistry || {})[e];
        if (n) {
            n = n.slice();
            for (var i = 0; i < n.length; i++) n[i](t, this)
        }
    }, i.once = function (e, t) {
        var n = this;
        t && this.addEventListener(e, function i() {
            n.removeEventListener(e, i), t.apply(null, arguments)
        })
    }, i.setDefaultHandler = function (e, t) {
        var n = this._defaultHandlers;
        if (n || (n = this._defaultHandlers = {_disabled_: {}}), n[e]) {
            var i = n[e], s = n._disabled_[e];
            s || (n._disabled_[e] = s = []), s.push(i);
            var r = s.indexOf(t);
            r != -1 && s.splice(r, 1)
        }
        n[e] = t
    }, i.removeDefaultHandler = function (e, t) {
        var n = this._defaultHandlers;
        if (n) {
            var i = n._disabled_[e];
            if (n[e] == t) {
                n[e];
                i && this.setDefaultHandler(e, i.pop())
            } else if (i) {
                var s = i.indexOf(t);
                s != -1 && i.splice(s, 1)
            }
        }
    }, i.on = i.addEventListener = function (e, t, n) {
        this._eventRegistry = this._eventRegistry || {};
        var i = this._eventRegistry[e];
        return i || (i = this._eventRegistry[e] = []), i.indexOf(t) == -1 && i[n ? "unshift" : "push"](t), t
    }, i.off = i.removeListener = i.removeEventListener = function (e, t) {
        this._eventRegistry = this._eventRegistry || {};
        var n = this._eventRegistry[e];
        if (n) {
            var i = n.indexOf(t);
            i !== -1 && n.splice(i, 1)
        }
    }, i.removeAllListeners = function (e) {
        this._eventRegistry && (this._eventRegistry[e] = [])
    }, t.EventEmitter = i
}), define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "no use strict";

    function i(e) {
        "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
    }

    function s(e, t) {
        var n = new Error(e);
        n.data = t, "object" == typeof console && console.error && console.error(n), setTimeout(function () {
            throw n
        })
    }

    var r = e("./oop"), o = e("./event_emitter").EventEmitter, a = {
        setOptions: function (e) {
            Object.keys(e).forEach(function (t) {
                this.setOption(t, e[t])
            }, this)
        }, getOptions: function (e) {
            var t = {};
            return e ? Array.isArray(e) || (t = e, e = Object.keys(t)) : e = Object.keys(this.$options), e.forEach(function (e) {
                t[e] = this.getOption(e)
            }, this), t
        }, setOption: function (e, t) {
            if (this["$" + e] !== t) {
                var n = this.$options[e];
                if (!n) return i('misspelled option "' + e + '"');
                if (n.forwardTo) return this[n.forwardTo] && this[n.forwardTo].setOption(e, t);
                n.handlesSet || (this["$" + e] = t), n && n.set && n.set.call(this, t)
            }
        }, getOption: function (e) {
            var t = this.$options[e];
            return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : i('misspelled option "' + e + '"')
        }
    }, l = function () {
        this.$defaultOptions = {}
    };
    (function () {
        r.implement(this, o), this.defineOptions = function (e, t, n) {
            return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(n).forEach(function (t) {
                var i = n[t];
                "string" == typeof i && (i = {forwardTo: i}), i.name || (i.name = t), e.$options[i.name] = i, "initialValue" in i && (e["$" + i.name] = i.initialValue)
            }), r.implement(e, a), this
        }, this.resetOptions = function (e) {
            Object.keys(e.$options).forEach(function (t) {
                var n = e.$options[t];
                "value" in n && e.setOption(t, n.value)
            })
        }, this.setDefaultValue = function (e, t, n) {
            var i = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
            i[t] && (i.forwardTo ? this.setDefaultValue(i.forwardTo, t, n) : i[t].value = n)
        }, this.setDefaultValues = function (e, t) {
            Object.keys(t).forEach(function (n) {
                this.setDefaultValue(e, n, t[n])
            }, this)
        }, this.warn = i, this.reportError = s
    }).call(l.prototype), t.AppConfig = l
}), define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function (e, t, n) {
    "no use strict";

    function i(i) {
        if (l && l.document) {
            c.packaged = i || e.packaged || n.packaged || l.define && define.packaged;
            for (var r = {}, o = "", a = document.currentScript || document._currentScript, h = a && a.ownerDocument || document, u = h.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                var f = u[d], p = f.src || f.getAttribute("src");
                if (p) {
                    for (var g = f.attributes, m = 0, C = g.length; m < C; m++) {
                        var v = g[m];
                        0 === v.name.indexOf("data-ace-") && (r[s(v.name.replace(/^data-ace-/, ""))] = v.value)
                    }
                    var A = p.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                    A && (o = A[1])
                }
            }
            o && (r.base = r.base || o, r.packaged = !0), r.basePath = r.base, r.workerPath = r.workerPath || r.base, r.modePath = r.modePath || r.base, r.themePath = r.themePath || r.base, delete r.base;
            for (var y in r) "undefined" != typeof r[y] && t.set(y, r[y])
        }
    }

    function s(e) {
        return e.replace(/-(.)/g, function (e, t) {
            return t.toUpperCase()
        })
    }

    var r = e("./lib/lang"), o = (e("./lib/oop"), e("./lib/net")), a = e("./lib/app_config").AppConfig;
    n.exports = t = new a;
    var l = function () {
        return this || "undefined" != typeof window && window
    }(), c = {
        packaged: !1,
        workerPath: null,
        modePath: null,
        themePath: null,
        basePath: "",
        suffix: ".js",
        $moduleUrls: {}
    };
    t.get = function (e) {
        if (!c.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
        return c[e]
    }, t.set = function (e, t) {
        if (!c.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
        c[e] = t
    }, t.all = function () {
        return r.copyObject(c)
    }, t.moduleUrl = function (e, t) {
        if (c.$moduleUrls[e]) return c.$moduleUrls[e];
        var n = e.split("/");
        t = t || n[n.length - 2] || "";
        var i = "snippets" == t ? "/" : "-", s = n[n.length - 1];
        if ("worker" == t && "-" == i) {
            var r = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
            s = s.replace(r, "")
        }
        (!s || s == t) && n.length > 1 && (s = n[n.length - 2]);
        var o = c[t + "Path"];
        return null == o ? o = c.basePath : "/" == i && (t = i = ""), o && "/" != o.slice(-1) && (o += "/"), o + t + i + s + this.get("suffix")
    }, t.setModuleUrl = function (e, t) {
        return c.$moduleUrls[e] = t
    }, t.$loading = {}, t.loadModule = function (n, i) {
        var s, r;
        Array.isArray(n) && (r = n[0], n = n[1]);
        try {
            s = e(n)
        } catch (a) {
        }
        if (s && !t.$loading[n]) return i && i(s);
        if (t.$loading[n] || (t.$loading[n] = []), t.$loading[n].push(i), !(t.$loading[n].length > 1)) {
            var l = function () {
                e([n], function (e) {
                    t._emit("load.module", {name: n, module: e});
                    var i = t.$loading[n];
                    t.$loading[n] = null, i.forEach(function (t) {
                        t && t(e)
                    })
                })
            };
            return t.get("packaged") ? void o.loadScript(t.moduleUrl(n, r), l) : l()
        }
    }, i(!0), t.init = i
}), define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], function (e, t, n) {
    "use strict";
    var i = e("../lib/event"), s = e("../lib/useragent"), r = e("./default_handlers").DefaultHandlers,
        o = e("./default_gutter_handler").GutterHandler, a = e("./mouse_event").MouseEvent,
        l = e("./dragdrop_handler").DragdropHandler, c = e("../config"), h = function (e) {
            var t = this;
            this.editor = e, new r(this), new o(this), new l(this);
            var n = function (t) {
                var n = !document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement());
                n && window.focus(), e.focus()
            }, a = e.renderer.getMouseEventTarget();
            i.addListener(a, "click", this.onMouseEvent.bind(this, "click")), i.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove")), i.addMultiMouseDownListener([a, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), i.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel")), i.addTouchMoveListener(e.container, this.onTouchMove.bind(this, "touchmove"));
            var c = e.renderer.$gutter;
            i.addListener(c, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), i.addListener(c, "click", this.onMouseEvent.bind(this, "gutterclick")), i.addListener(c, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), i.addListener(c, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), i.addListener(a, "mousedown", n), i.addListener(c, "mousedown", n), s.isIE && e.renderer.scrollBarV && (i.addListener(e.renderer.scrollBarV.element, "mousedown", n), i.addListener(e.renderer.scrollBarH.element, "mousedown", n)), e.on("mousemove", function (n) {
                if (!t.state && !t.$dragDelay && t.$dragEnabled) {
                    var i = e.renderer.screenToTextCoordinates(n.x, n.y), s = e.session.selection.getRange(),
                        r = e.renderer;
                    !s.isEmpty() && s.insideStart(i.row, i.column) ? r.setCursorStyle("default") : r.setCursorStyle("")
                }
            })
        };
    (function () {
        this.onMouseEvent = function (e, t) {
            this.editor._emit(e, new a(t, this.editor))
        }, this.onMouseMove = function (e, t) {
            var n = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            n && n.length && this.editor._emit(e, new a(t, this.editor))
        }, this.onMouseWheel = function (e, t) {
            var n = new a(t, this.editor);
            n.speed = 2 * this.$scrollSpeed, n.wheelX = t.wheelX, n.wheelY = t.wheelY, this.editor._emit(e, n)
        }, this.onTouchMove = function (e, t) {
            var n = new a(t, this.editor);
            n.speed = 1, n.wheelX = t.wheelX, n.wheelY = t.wheelY, this.editor._emit(e, n)
        }, this.setState = function (e) {
            this.state = e
        }, this.captureMouse = function (e, t) {
            this.x = e.x, this.y = e.y, this.isMousePressed = !0;
            var n = this.editor.renderer;
            n.$keepTextAreaAtCursor && (n.$keepTextAreaAtCursor = null);
            var r = this, o = function (e) {
                if (e) {
                    if (s.isWebKit && !e.which && r.releaseMouse) return r.releaseMouse();
                    r.x = e.clientX, r.y = e.clientY, t && t(e), r.mouseEvent = new a(e, r.editor), r.$mouseMoved = !0
                }
            }, l = function (e) {
                clearInterval(h), c(), r[r.state + "End"] && r[r.state + "End"](e), r.state = "", null == n.$keepTextAreaAtCursor && (n.$keepTextAreaAtCursor = !0, n.$moveTextAreaToCursor()), r.isMousePressed = !1, r.$onCaptureMouseMove = r.releaseMouse = null, e && r.onMouseEvent("mouseup", e)
            }, c = function () {
                r[r.state] && r[r.state](), r.$mouseMoved = !1
            };
            if (s.isOldIE && "dblclick" == e.domEvent.type) return setTimeout(function () {
                l(e)
            });
            r.$onCaptureMouseMove = o, r.releaseMouse = i.capture(this.editor.container, o, l);
            var h = setInterval(c, 20)
        }, this.releaseMouse = null, this.cancelContextMenu = function () {
            var e = function (t) {
                t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e), t && t.domEvent && i.stopEvent(t.domEvent))
            }.bind(this);
            setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
        }
    }).call(h.prototype), c.defineOptions(h.prototype, "mouseHandler", {
        scrollSpeed: {initialValue: 2},
        dragDelay: {initialValue: s.isMac ? 150 : 0},
        dragEnabled: {initialValue: !0},
        focusTimout: {initialValue: 0},
        tooltipFollowsMouse: {initialValue: !0}
    }), t.MouseHandler = h
}), define("ace/mouse/fold_handler", ["require", "exports", "module"], function (e, t, n) {
    "use strict";

    function i(e) {
        e.on("click", function (t) {
            var n = t.getDocumentPosition(), i = e.session, s = i.getFoldAt(n.row, n.column, 1);
            s && (t.getAccelKey() ? i.removeFold(s) : i.expandFold(s), t.stop())
        }), e.on("gutterclick", function (t) {
            var n = e.renderer.$gutterLayer.getRegion(t);
            if ("foldWidgets" == n) {
                var i = t.getDocumentPosition().row, s = e.session;
                s.foldWidgets && s.foldWidgets[i] && e.session.onFoldWidgetClick(i, t), e.isFocused() || e.focus(), t.stop()
            }
        }), e.on("gutterdblclick", function (t) {
            var n = e.renderer.$gutterLayer.getRegion(t);
            if ("foldWidgets" == n) {
                var i = t.getDocumentPosition().row, s = e.session, r = s.getParentFoldRangeData(i, !0),
                    o = r.range || r.firstRange;
                if (o) {
                    i = o.start.row;
                    var a = s.getFoldAt(i, s.getLine(i).length, 1);
                    a ? s.removeFold(a) : (s.addFold("...", o), e.renderer.scrollCursorIntoView({
                        row: o.start.row,
                        column: 0
                    }))
                }
                t.stop()
            }
        })
    }

    t.FoldHandler = i
}), define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function (e, t, n) {
    "use strict";
    var i = e("../lib/keys"), s = e("../lib/event"), r = function (e) {
        this.$editor = e, this.$data = {editor: e}, this.$handlers = [], this.setDefaultHandler(e.commands)
    };
    (function () {
        this.setDefaultHandler = function (e) {
            this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
        }, this.setKeyboardHandler = function (e) {
            var t = this.$handlers;
            if (t[t.length - 1] != e) {
                for (; t[t.length - 1] && t[t.length - 1] != this.$defaultHandler;) this.removeKeyboardHandler(t[t.length - 1]);
                this.addKeyboardHandler(e, 1)
            }
        }, this.addKeyboardHandler = function (e, t) {
            if (e) {
                "function" != typeof e || e.handleKeyboard || (e.handleKeyboard = e);
                var n = this.$handlers.indexOf(e);
                n != -1 && this.$handlers.splice(n, 1), void 0 == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), n == -1 && e.attach && e.attach(this.$editor)
            }
        }, this.removeKeyboardHandler = function (e) {
            var t = this.$handlers.indexOf(e);
            return t != -1 && (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
        }, this.getKeyboardHandler = function () {
            return this.$handlers[this.$handlers.length - 1]
        }, this.getStatusText = function () {
            var e = this.$data, t = e.editor;
            return this.$handlers.map(function (n) {
                return n.getStatusText && n.getStatusText(t, e) || ""
            }).filter(Boolean).join(" ")
        }, this.$callKeyboardHandlers = function (e, t, n, i) {
            for (var r, o = !1, a = this.$editor.commands, l = this.$handlers.length; l-- && (r = this.$handlers[l].handleKeyboard(this.$data, e, t, n, i), !(r && r.command && (o = "null" == r.command || a.exec(r.command, this.$editor, r.args, i), o && i && e != -1 && 1 != r.passEvent && 1 != r.command.passEvent && s.stopEvent(i), o)));) ;
            return o || e != -1 || (r = {command: "insertstring"}, o = a.exec("insertstring", this.$editor, t)), o && this.$editor._signal && this.$editor._signal("keyboardActivity", r), o
        }, this.onCommandKey = function (e, t, n) {
            var s = i.keyCodeToString(n);
            this.$callKeyboardHandlers(t, s, n, e)
        }, this.onTextInput = function (e) {
            this.$callKeyboardHandlers(-1, e)
        }
    }).call(r.prototype), t.KeyBinding = r
}), define("ace/range", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var i = function (e, t) {
        return e.row - t.row || e.column - t.column
    }, s = function (e, t, n, i) {
        this.start = {row: e, column: t}, this.end = {row: n, column: i}
    };
    (function () {
        this.isEqual = function (e) {
            return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
        }, this.toString = function () {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
        }, this.contains = function (e, t) {
            return 0 == this.compare(e, t)
        }, this.compareRange = function (e) {
            var t, n = e.end, i = e.start;
            return t = this.compare(n.row, n.column), 1 == t ? (t = this.compare(i.row, i.column), 1 == t ? 2 : 0 == t ? 1 : 0) : t == -1 ? -2 : (t = this.compare(i.row, i.column), t == -1 ? -1 : 1 == t ? 42 : 0)
        }, this.comparePoint = function (e) {
            return this.compare(e.row, e.column)
        }, this.containsRange = function (e) {
            return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
        }, this.intersects = function (e) {
            var t = this.compareRange(e);
            return t == -1 || 0 == t || 1 == t
        }, this.isEnd = function (e, t) {
            return this.end.row == e && this.end.column == t
        }, this.isStart = function (e, t) {
            return this.start.row == e && this.start.column == t
        }, this.setStart = function (e, t) {
            "object" == typeof e ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
        }, this.setEnd = function (e, t) {
            "object" == typeof e ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
        }, this.inside = function (e, t) {
            return 0 == this.compare(e, t) && (!this.isEnd(e, t) && !this.isStart(e, t))
        }, this.insideStart = function (e, t) {
            return 0 == this.compare(e, t) && !this.isEnd(e, t)
        }, this.insideEnd = function (e, t) {
            return 0 == this.compare(e, t) && !this.isStart(e, t)
        }, this.compare = function (e, t) {
            return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
        }, this.compareStart = function (e, t) {
            return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
        }, this.compareEnd = function (e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
        }, this.compareInside = function (e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t);
        }, this.clipRows = function (e, t) {
            if (this.end.row > t) var n = {row: t + 1, column: 0}; else if (this.end.row < e) var n = {
                row: e,
                column: 0
            };
            if (this.start.row > t) var i = {row: t + 1, column: 0}; else if (this.start.row < e) var i = {
                row: e,
                column: 0
            };
            return s.fromPoints(i || this.start, n || this.end)
        }, this.extend = function (e, t) {
            var n = this.compare(e, t);
            if (0 == n) return this;
            if (n == -1) var i = {row: e, column: t}; else var r = {row: e, column: t};
            return s.fromPoints(i || this.start, r || this.end)
        }, this.isEmpty = function () {
            return this.start.row === this.end.row && this.start.column === this.end.column
        }, this.isMultiLine = function () {
            return this.start.row !== this.end.row
        }, this.clone = function () {
            return s.fromPoints(this.start, this.end)
        }, this.collapseRows = function () {
            return 0 == this.end.column ? new s(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new s(this.start.row, 0, this.end.row, 0)
        }, this.toScreenRange = function (e) {
            var t = e.documentToScreenPosition(this.start), n = e.documentToScreenPosition(this.end);
            return new s(t.row, t.column, n.row, n.column)
        }, this.moveBy = function (e, t) {
            this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
        }
    }).call(s.prototype), s.fromPoints = function (e, t) {
        return new s(e.row, e.column, t.row, t.column)
    }, s.comparePoints = i, s.comparePoints = function (e, t) {
        return e.row - t.row || e.column - t.column
    }, t.Range = s
}), define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function (e, t, n) {
    "use strict";
    var i = e("./lib/oop"), s = e("./lib/lang"), r = e("./lib/event_emitter").EventEmitter, o = e("./range").Range,
        a = function (e) {
            this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.lead = this.selectionLead = this.doc.createAnchor(0, 0), this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
            var t = this;
            this.lead.on("change", function (e) {
                t._emit("changeCursor"), t.$isEmpty || t._emit("changeSelection"), t.$keepDesiredColumnOnChange || e.old.column == e.value.column || (t.$desiredColumn = null)
            }), this.selectionAnchor.on("change", function () {
                t.$isEmpty || t._emit("changeSelection")
            })
        };
    (function () {
        i.implement(this, r), this.isEmpty = function () {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
        }, this.isMultiLine = function () {
            return !this.isEmpty() && this.getRange().isMultiLine()
        }, this.getCursor = function () {
            return this.lead.getPosition()
        }, this.setSelectionAnchor = function (e, t) {
            this.anchor.setPosition(e, t), this.$isEmpty && (this.$isEmpty = !1, this._emit("changeSelection"))
        }, this.getSelectionAnchor = function () {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
        }, this.getSelectionLead = function () {
            return this.lead.getPosition()
        }, this.shiftSelection = function (e) {
            if (this.$isEmpty) return void this.moveCursorTo(this.lead.row, this.lead.column + e);
            var t = this.getSelectionAnchor(), n = this.getSelectionLead(), i = this.isBackwards();
            i && 0 === t.column || this.setSelectionAnchor(t.row, t.column + e), (i || 0 !== n.column) && this.$moveSelection(function () {
                this.moveCursorTo(n.row, n.column + e)
            })
        }, this.isBackwards = function () {
            var e = this.anchor, t = this.lead;
            return e.row > t.row || e.row == t.row && e.column > t.column
        }, this.getRange = function () {
            var e = this.anchor, t = this.lead;
            return this.isEmpty() ? o.fromPoints(t, t) : this.isBackwards() ? o.fromPoints(t, e) : o.fromPoints(e, t)
        }, this.clearSelection = function () {
            this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
        }, this.selectAll = function () {
            var e = this.doc.getLength() - 1;
            this.setSelectionAnchor(0, 0), this.moveCursorTo(e, this.doc.getLine(e).length)
        }, this.setRange = this.setSelectionRange = function (e, t) {
            t ? (this.setSelectionAnchor(e.end.row, e.end.column), this.selectTo(e.start.row, e.start.column)) : (this.setSelectionAnchor(e.start.row, e.start.column), this.selectTo(e.end.row, e.end.column)), this.getRange().isEmpty() && (this.$isEmpty = !0), this.$desiredColumn = null
        }, this.$moveSelection = function (e) {
            var t = this.lead;
            this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
        }, this.selectTo = function (e, t) {
            this.$moveSelection(function () {
                this.moveCursorTo(e, t)
            })
        }, this.selectToPosition = function (e) {
            this.$moveSelection(function () {
                this.moveCursorToPosition(e)
            })
        }, this.moveTo = function (e, t) {
            this.clearSelection(), this.moveCursorTo(e, t)
        }, this.moveToPosition = function (e) {
            this.clearSelection(), this.moveCursorToPosition(e)
        }, this.selectUp = function () {
            this.$moveSelection(this.moveCursorUp)
        }, this.selectDown = function () {
            this.$moveSelection(this.moveCursorDown)
        }, this.selectRight = function () {
            this.$moveSelection(this.moveCursorRight)
        }, this.selectLeft = function () {
            this.$moveSelection(this.moveCursorLeft)
        }, this.selectLineStart = function () {
            this.$moveSelection(this.moveCursorLineStart)
        }, this.selectLineEnd = function () {
            this.$moveSelection(this.moveCursorLineEnd)
        }, this.selectFileEnd = function () {
            this.$moveSelection(this.moveCursorFileEnd)
        }, this.selectFileStart = function () {
            this.$moveSelection(this.moveCursorFileStart)
        }, this.selectWordRight = function () {
            this.$moveSelection(this.moveCursorWordRight)
        }, this.selectWordLeft = function () {
            this.$moveSelection(this.moveCursorWordLeft)
        }, this.getWordRange = function (e, t) {
            if ("undefined" == typeof t) {
                var n = e || this.lead;
                e = n.row, t = n.column
            }
            return this.session.getWordRange(e, t)
        }, this.selectWord = function () {
            this.setSelectionRange(this.getWordRange())
        }, this.selectAWord = function () {
            var e = this.getCursor(), t = this.session.getAWordRange(e.row, e.column);
            this.setSelectionRange(t)
        }, this.getLineRange = function (e, t) {
            var n, i = "number" == typeof e ? e : this.lead.row, s = this.session.getFoldLine(i);
            return s ? (i = s.start.row, n = s.end.row) : n = i, t === !0 ? new o(i, 0, n, this.session.getLine(n).length) : new o(i, 0, n + 1, 0)
        }, this.selectLine = function () {
            this.setSelectionRange(this.getLineRange())
        }, this.moveCursorUp = function () {
            this.moveCursorBy(-1, 0)
        }, this.moveCursorDown = function () {
            this.moveCursorBy(1, 0)
        }, this.moveCursorLeft = function () {
            var e, t = this.lead.getPosition();
            if (e = this.session.getFoldAt(t.row, t.column, -1)) this.moveCursorTo(e.start.row, e.start.column); else if (0 === t.column) t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length); else {
                var n = this.session.getTabSize();
                this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column - n, t.column).split(" ").length - 1 == n ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1)
            }
        }, this.moveCursorRight = function () {
            var e, t = this.lead.getPosition();
            if (e = this.session.getFoldAt(t.row, t.column, 1)) this.moveCursorTo(e.end.row, e.end.column); else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0); else {
                var n = this.session.getTabSize(), t = this.lead;
                this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column, t.column + n).split(" ").length - 1 == n ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1)
            }
        }, this.moveCursorLineStart = function () {
            var e = this.lead.row, t = this.lead.column, n = this.session.documentToScreenRow(e, t),
                i = this.session.screenToDocumentPosition(n, 0),
                s = this.session.getDisplayLine(e, null, i.row, i.column), r = s.match(/^\s*/);
            r[0].length == t || this.session.$useEmacsStyleLineStart || (i.column += r[0].length), this.moveCursorToPosition(i)
        }, this.moveCursorLineEnd = function () {
            var e = this.lead, t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
            if (this.lead.column == t.column) {
                var n = this.session.getLine(t.row);
                if (t.column == n.length) {
                    var i = n.search(/\s+$/);
                    i > 0 && (t.column = i)
                }
            }
            this.moveCursorTo(t.row, t.column)
        }, this.moveCursorFileEnd = function () {
            var e = this.doc.getLength() - 1, t = this.doc.getLine(e).length;
            this.moveCursorTo(e, t)
        }, this.moveCursorFileStart = function () {
            this.moveCursorTo(0, 0)
        }, this.moveCursorLongWordRight = function () {
            var e, t = this.lead.row, n = this.lead.column, i = this.doc.getLine(t), s = i.substring(n);
            this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
            var r = this.session.getFoldAt(t, n, 1);
            return r ? void this.moveCursorTo(r.end.row, r.end.column) : ((e = this.session.nonTokenRe.exec(s)) && (n += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, s = i.substring(n)), n >= i.length ? (this.moveCursorTo(t, i.length), this.moveCursorRight(), void (t < this.doc.getLength() - 1 && this.moveCursorWordRight())) : ((e = this.session.tokenRe.exec(s)) && (n += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), void this.moveCursorTo(t, n)))
        }, this.moveCursorLongWordLeft = function () {
            var e, t = this.lead.row, n = this.lead.column;
            if (e = this.session.getFoldAt(t, n, -1)) return void this.moveCursorTo(e.start.row, e.start.column);
            var i = this.session.getFoldStringAt(t, n, -1);
            null == i && (i = this.doc.getLine(t).substring(0, n));
            var r, o = s.stringReverse(i);
            return this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, (r = this.session.nonTokenRe.exec(o)) && (n -= this.session.nonTokenRe.lastIndex, o = o.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), n <= 0 ? (this.moveCursorTo(t, 0), this.moveCursorLeft(), void (t > 0 && this.moveCursorWordLeft())) : ((r = this.session.tokenRe.exec(o)) && (n -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), void this.moveCursorTo(t, n))
        }, this.$shortWordEndIndex = function (e) {
            var t, n, i = 0, s = /\s/, r = this.session.tokenRe;
            if (r.lastIndex = 0, t = this.session.tokenRe.exec(e)) i = this.session.tokenRe.lastIndex; else {
                for (; (n = e[i]) && s.test(n);) i++;
                if (i < 1) for (r.lastIndex = 0; (n = e[i]) && !r.test(n);) if (r.lastIndex = 0, i++, s.test(n)) {
                    if (i > 2) {
                        i--;
                        break
                    }
                    for (; (n = e[i]) && s.test(n);) i++;
                    if (i > 2) break
                }
            }
            return r.lastIndex = 0, i
        }, this.moveCursorShortWordRight = function () {
            var e = this.lead.row, t = this.lead.column, n = this.doc.getLine(e), i = n.substring(t),
                s = this.session.getFoldAt(e, t, 1);
            if (s) return this.moveCursorTo(s.end.row, s.end.column);
            if (t == n.length) {
                var r = this.doc.getLength();
                do e++, i = this.doc.getLine(e); while (e < r && /^\s*$/.test(i));
                /^\s+/.test(i) || (i = ""), t = 0
            }
            var o = this.$shortWordEndIndex(i);
            this.moveCursorTo(e, t + o)
        }, this.moveCursorShortWordLeft = function () {
            var e, t = this.lead.row, n = this.lead.column;
            if (e = this.session.getFoldAt(t, n, -1)) return this.moveCursorTo(e.start.row, e.start.column);
            var i = this.session.getLine(t).substring(0, n);
            if (0 === n) {
                do t--, i = this.doc.getLine(t); while (t > 0 && /^\s*$/.test(i));
                n = i.length, /\s+$/.test(i) || (i = "")
            }
            var r = s.stringReverse(i), o = this.$shortWordEndIndex(r);
            return this.moveCursorTo(t, n - o)
        }, this.moveCursorWordRight = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
        }, this.moveCursorWordLeft = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
        }, this.moveCursorBy = function (e, t) {
            var n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
            0 === t && (this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);
            var i = this.session.screenToDocumentPosition(n.row + e, n.column);
            0 !== e && 0 === t && i.row === this.lead.row && i.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[i.row] && (i.row > 0 || e > 0) && i.row++, this.moveCursorTo(i.row, i.column + t, 0 === t)
        }, this.moveCursorToPosition = function (e) {
            this.moveCursorTo(e.row, e.column)
        }, this.moveCursorTo = function (e, t, n) {
            var i = this.session.getFoldAt(e, t, 1);
            i && (e = i.start.row, t = i.start.column), this.$keepDesiredColumnOnChange = !0, this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, n || (this.$desiredColumn = null)
        }, this.moveCursorToScreen = function (e, t, n) {
            var i = this.session.screenToDocumentPosition(e, t);
            this.moveCursorTo(i.row, i.column, n)
        }, this.detach = function () {
            this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
        }, this.fromOrientedRange = function (e) {
            this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
        }, this.toOrientedRange = function (e) {
            var t = this.getRange();
            return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
        }, this.getRangeOfMovements = function (e) {
            var t = this.getCursor();
            try {
                e(this);
                var n = this.getCursor();
                return o.fromPoints(t, n)
            } catch (i) {
                return o.fromPoints(t, t)
            } finally {
                this.moveCursorToPosition(t)
            }
        }, this.toJSON = function () {
            if (this.rangeCount) var e = this.ranges.map(function (e) {
                var t = e.clone();
                return t.isBackwards = e.cursor == e.start, t
            }); else {
                var e = this.getRange();
                e.isBackwards = this.isBackwards()
            }
            return e
        }, this.fromJSON = function (e) {
            if (void 0 == e.start) {
                if (this.rangeList) {
                    this.toSingleRange(e[0]);
                    for (var t = e.length; t--;) {
                        var n = o.fromPoints(e[t].start, e[t].end);
                        e[t].isBackwards && (n.cursor = n.start), this.addRange(n, !0)
                    }
                    return
                }
                e = e[0]
            }
            this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
        }, this.isEqual = function (e) {
            if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;
            if (!e.length || !this.ranges) return this.getRange().isEqual(e);
            for (var t = this.ranges.length; t--;) if (!this.ranges[t].isEqual(e[t])) return !1;
            return !0
        }
    }).call(a.prototype), t.Selection = a
}), define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function (e, t, n) {
    "use strict";
    var i = e("./config"), s = 2e3, r = function (e) {
        this.states = e, this.regExps = {}, this.matchMappings = {};
        for (var t in this.states) {
            for (var n = this.states[t], i = [], s = 0, r = this.matchMappings[t] = {defaultToken: "text"}, o = "g", a = [], l = 0; l < n.length; l++) {
                var c = n[l];
                if (c.defaultToken && (r.defaultToken = c.defaultToken), c.caseInsensitive && (o = "gi"), null != c.regex) {
                    c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                    var h = c.regex, u = new RegExp("(?:(" + h + ")|(.))").exec("a").length - 2;
                    Array.isArray(c.token) ? 1 == c.token.length || 1 == u ? c.token = c.token[0] : u - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                        rule: c,
                        groupCount: u - 1
                    }), c.token = c.token[0]) : (c.tokenArray = c.token, c.token = null, c.onMatch = this.$arrayTokens) : "function" != typeof c.token || c.onMatch || (u > 1 ? c.onMatch = this.$applyToken : c.onMatch = c.token), u > 1 && (/\\\d/.test(c.regex) ? h = c.regex.replace(/\\([0-9]+)/g, function (e, t) {
                        return "\\" + (parseInt(t, 10) + s + 1)
                    }) : (u = 1, h = this.removeCapturingGroups(c.regex)), c.splitRegex || "string" == typeof c.token || a.push(c)), r[s] = l, s += u, i.push(h), c.onMatch || (c.onMatch = null)
                }
            }
            i.length || (r[0] = 0, i.push("$")), a.forEach(function (e) {
                e.splitRegex = this.createSplitterRegexp(e.regex, o)
            }, this), this.regExps[t] = new RegExp("(" + i.join(")|(") + ")|($)", o)
        }
    };
    (function () {
        this.$setMaxTokenCount = function (e) {
            s = 0 | e
        }, this.$applyToken = function (e) {
            var t = this.splitRegex.exec(e).slice(1), n = this.token.apply(this, t);
            if ("string" == typeof n) return [{type: n, value: e}];
            for (var i = [], s = 0, r = n.length; s < r; s++) t[s] && (i[i.length] = {type: n[s], value: t[s]});
            return i
        }, this.$arrayTokens = function (e) {
            if (!e) return [];
            var t = this.splitRegex.exec(e);
            if (!t) return "text";
            for (var n = [], i = this.tokenArray, s = 0, r = i.length; s < r; s++) t[s + 1] && (n[n.length] = {
                type: i[s],
                value: t[s + 1]
            });
            return n
        }, this.removeCapturingGroups = function (e) {
            var t = e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function (e, t) {
                return t ? "(?:" : e
            });
            return t
        }, this.createSplitterRegexp = function (e, t) {
            if (e.indexOf("(?=") != -1) {
                var n = 0, i = !1, s = {};
                e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function (e, t, r, o, a, l) {
                    return i ? i = "]" != a : a ? i = !0 : o ? (n == s.stack && (s.end = l + 1, s.stack = -1), n--) : r && (n++, 1 != r.length && (s.stack = n, s.start = l)), e
                }), null != s.end && /^\)*$/.test(e.substr(s.end)) && (e = e.substring(0, s.start) + e.substr(s.end))
            }
            return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e.length - 1) && (e += "$"), new RegExp(e, (t || "").replace("g", ""))
        }, this.getLineTokens = function (e, t) {
            if (t && "string" != typeof t) {
                var n = t.slice(0);
                t = n[0], "#tmp" === t && (n.shift(), t = n.shift())
            } else var n = [];
            var i = t || "start", r = this.states[i];
            r || (i = "start", r = this.states[i]);
            var o = this.matchMappings[i], a = this.regExps[i];
            a.lastIndex = 0;
            for (var l, c = [], h = 0, u = 0, d = {type: null, value: ""}; l = a.exec(e);) {
                var f = o.defaultToken, p = null, g = l[0], m = a.lastIndex;
                if (m - g.length > h) {
                    var C = e.substring(h, m - g.length);
                    d.type == f ? d.value += C : (d.type && c.push(d), d = {type: f, value: C})
                }
                for (var v = 0; v < l.length - 2; v++) if (void 0 !== l[v + 1]) {
                    p = r[o[v]], f = p.onMatch ? p.onMatch(g, i, n) : p.token, p.next && (i = "string" == typeof p.next ? p.next : p.next(i, n), r = this.states[i], r || (this.reportError("state doesn't exist", i), i = "start", r = this.states[i]), o = this.matchMappings[i], h = m, a = this.regExps[i], a.lastIndex = m);
                    break
                }
                if (g) if ("string" == typeof f) p && p.merge === !1 || d.type !== f ? (d.type && c.push(d), d = {
                    type: f,
                    value: g
                }) : d.value += g; else if (f) {
                    d.type && c.push(d), d = {type: null, value: ""};
                    for (var v = 0; v < f.length; v++) c.push(f[v])
                }
                if (h == e.length) break;
                if (h = m, u++ > s) {
                    for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                        startState: t,
                        line: e
                    }); h < e.length;) d.type && c.push(d), d = {value: e.substring(h, h += 2e3), type: "overflow"};
                    i = "start", n = [];
                    break
                }
            }
            return d.type && c.push(d), n.length > 1 && n[0] !== i && n.unshift("#tmp", i), {
                tokens: c,
                state: n.length ? n : i
            }
        }, this.reportError = i.reportError
    }).call(r.prototype), t.Tokenizer = r
}), define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var i = e("../lib/lang"), s = function () {
        this.$rules = {start: [{token: "empty_line", regex: "^$"}, {defaultToken: "text"}]}
    };
    (function () {
        this.addRules = function (e, t) {
            if (t) for (var n in e) {
                for (var i = e[n], s = 0; s < i.length; s++) {
                    var r = i[s];
                    (r.next || r.onMatch) && ("string" == typeof r.next && 0 !== r.next.indexOf(t) && (r.next = t + r.next), r.nextState && 0 !== r.nextState.indexOf(t) && (r.nextState = t + r.nextState))
                }
                this.$rules[t + n] = i
            } else for (var n in e) this.$rules[n] = e[n]
        }, this.getRules = function () {
            return this.$rules
        }, this.embedRules = function (e, t, n, s, r) {
            var o = "function" == typeof e ? (new e).getRules() : e;
            if (s) for (var a = 0; a < s.length; a++) s[a] = t + s[a]; else {
                s = [];
                for (var l in o) s.push(t + l)
            }
            if (this.addRules(o, t), n) for (var c = Array.prototype[r ? "push" : "unshift"], a = 0; a < s.length; a++) c.apply(this.$rules[s[a]], i.deepCopy(n));
            this.$embeds || (this.$embeds = []), this.$embeds.push(t)
        }, this.getEmbeds = function () {
            return this.$embeds
        };
        var e = function (e, t) {
            return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
        }, t = function (e, t) {
            return t.shift(), t.shift() || "start"
        };
        this.normalizeRules = function () {
            function n(r) {
                var o = s[r];
                o.processed = !0;
                for (var a = 0; a < o.length; a++) {
                    var l = o[a], c = null;
                    Array.isArray(l) && (c = l, l = {}), !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({defaultToken: l.token}, {
                        token: l.token + ".end",
                        regex: l.end || l.start,
                        next: "pop"
                    }), l.token = l.token + ".start", l.push = !0);
                    var h = l.next || l.push;
                    if (h && Array.isArray(h)) {
                        var u = l.stateName;
                        u || (u = l.token, "string" != typeof u && (u = u[0] || ""), s[u] && (u += i++)), s[u] = h, l.next = u, n(u)
                    } else "pop" == h && (l.next = t);
                    if (l.push && (l.nextState = l.next || l.push, l.next = e, delete l.push), l.rules) for (var d in l.rules) s[d] ? s[d].push && s[d].push.apply(s[d], l.rules[d]) : s[d] = l.rules[d];
                    var f = "string" == typeof l ? l : "string" == typeof l.include ? l.include : "";
                    if (f && (c = s[f]), c) {
                        var p = [a, 1].concat(c);
                        l.noEscape && (p = p.filter(function (e) {
                            return !e.next
                        })), o.splice.apply(o, p), a--
                    }
                    l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
                }
            }

            var i = 0, s = this.$rules;
            Object.keys(s).forEach(n, this)
        }, this.createKeywordMapper = function (e, t, n, i) {
            var s = Object.create(null);
            return Object.keys(e).forEach(function (t) {
                var r = e[t];
                n && (r = r.toLowerCase());
                for (var o = r.split(i || "|"), a = o.length; a--;) s[o[a]] = t
            }), Object.getPrototypeOf(s) && (s.__proto__ = null), this.$keywordList = Object.keys(s), e = null, n ? function (e) {
                return s[e.toLowerCase()] || t
            } : function (e) {
                return s[e] || t
            }
        }, this.getKeywords = function () {
            return this.$keywords
        }
    }).call(s.prototype), t.TextHighlightRules = s
}), define("ace/mode/behaviour", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var i = function () {
        this.$behaviours = {}
    };
    (function () {
        this.add = function (e, t, n) {
            switch (void 0) {
                case this.$behaviours:
                    this.$behaviours = {};
                case this.$behaviours[e]:
                    this.$behaviours[e] = {}
            }
            this.$behaviours[e][t] = n
        }, this.addBehaviours = function (e) {
            for (var t in e) for (var n in e[t]) this.add(t, n, e[t][n])
        }, this.remove = function (e) {
            this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
        }, this.inherit = function (e, t) {
            if ("function" == typeof e) var n = (new e).getBehaviours(t); else var n = e.getBehaviours(t);
            this.addBehaviours(n)
        }, this.getBehaviours = function (e) {
            if (e) {
                for (var t = {}, n = 0; n < e.length; n++) this.$behaviours[e[n]] && (t[e[n]] = this.$behaviours[e[n]]);
                return t
            }
            return this.$behaviours
        }
    }).call(i.prototype), t.Behaviour = i
}), define("ace/token_iterator", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var i = function (e, t, n) {
        this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
        var i = e.getTokenAt(t, n);
        this.$tokenIndex = i ? i.index : -1
    };
    (function () {
        this.stepBackward = function () {
            for (this.$tokenIndex -= 1; this.$tokenIndex < 0;) {
                if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
                this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
            }
            return this.$rowTokens[this.$tokenIndex]
        }, this.stepForward = function () {
            this.$tokenIndex += 1;
            for (var e; this.$tokenIndex >= this.$rowTokens.length;) {
                if (this.$row += 1, e || (e = this.$session.getLength()), this.$row >= e) return this.$row = e - 1, null;
                this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
            }
            return this.$rowTokens[this.$tokenIndex]
        }, this.getCurrentToken = function () {
            return this.$rowTokens[this.$tokenIndex]
        }, this.getCurrentTokenRow = function () {
            return this.$row
        }, this.getCurrentTokenColumn = function () {
            var e = this.$rowTokens, t = this.$tokenIndex, n = e[t].start;
            if (void 0 !== n) return n;
            for (n = 0; t > 0;) t -= 1, n += e[t].value.length;
            return n
        }, this.getCurrentTokenPosition = function () {
            return {row: this.$row, column: this.getCurrentTokenColumn()}
        }
    }).call(i.prototype), t.TokenIterator = i
}), define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var i, s = e("../../lib/oop"), r = e("../behaviour").Behaviour, o = e("../../token_iterator").TokenIterator,
        a = e("../../lib/lang"), l = ["text", "paren.rparen", "punctuation.operator"],
        c = ["text", "paren.rparen", "punctuation.operator", "comment"], h = {}, u = function (e) {
            var t = -1;
            return e.multiSelect && (t = e.selection.index, h.rangeCount != e.multiSelect.rangeCount && (h = {rangeCount: e.multiSelect.rangeCount})), h[t] ? i = h[t] : void (i = h[t] = {
                autoInsertedBrackets: 0,
                autoInsertedRow: -1,
                autoInsertedLineEnd: "",
                maybeInsertedBrackets: 0,
                maybeInsertedRow: -1,
                maybeInsertedLineStart: "",
                maybeInsertedLineEnd: ""
            })
        }, d = function (e, t, n, i) {
            var s = e.end.row - e.start.row;
            return {text: n + t + i, selection: [0, e.start.column + 1, s, e.end.column + (s ? 0 : 1)]}
        }, f = function () {
            this.add("braces", "insertion", function (e, t, n, s, r) {
                var o = n.getCursorPosition(), l = s.doc.getLine(o.row);
                if ("{" == r) {
                    u(n);
                    var c = n.getSelectionRange(), h = s.doc.getTextRange(c);
                    if ("" !== h && "{" !== h && n.getWrapBehavioursEnabled()) return d(c, h, "{", "}");
                    if (f.isSaneInsertion(n, s)) return /[\]\}\)]/.test(l[o.column]) || n.inMultiSelectMode ? (f.recordAutoInsert(n, s, "}"), {
                        text: "{}",
                        selection: [1, 1]
                    }) : (f.recordMaybeInsert(n, s, "{"), {text: "{", selection: [1, 1]})
                } else if ("}" == r) {
                    u(n);
                    var p = l.substring(o.column, o.column + 1);
                    if ("}" == p) {
                        var g = s.$findOpeningBracket("}", {column: o.column + 1, row: o.row});
                        if (null !== g && f.isAutoInsertedClosing(o, l, r)) return f.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    }
                } else {
                    if ("\n" == r || "\r\n" == r) {
                        u(n);
                        var m = "";
                        f.isMaybeInsertedClosing(o, l) && (m = a.stringRepeat("}", i.maybeInsertedBrackets), f.clearMaybeInsertedClosing());
                        var p = l.substring(o.column, o.column + 1);
                        if ("}" === p) {
                            var C = s.findMatchingBracket({row: o.row, column: o.column + 1}, "}");
                            if (!C) return null;
                            var v = this.$getIndent(s.getLine(C.row))
                        } else {
                            if (!m) return void f.clearMaybeInsertedClosing();
                            var v = this.$getIndent(l)
                        }
                        var A = v + s.getTabString();
                        return {text: "\n" + A + "\n" + v + m, selection: [1, A.length, 1, A.length]}
                    }
                    f.clearMaybeInsertedClosing()
                }
            }), this.add("braces", "deletion", function (e, t, n, s, r) {
                var o = s.doc.getTextRange(r);
                if (!r.isMultiLine() && "{" == o) {
                    u(n);
                    var a = s.doc.getLine(r.start.row), l = a.substring(r.end.column, r.end.column + 1);
                    if ("}" == l) return r.end.column++, r;
                    i.maybeInsertedBrackets--
                }
            }), this.add("parens", "insertion", function (e, t, n, i, s) {
                if ("(" == s) {
                    u(n);
                    var r = n.getSelectionRange(), o = i.doc.getTextRange(r);
                    if ("" !== o && n.getWrapBehavioursEnabled()) return d(r, o, "(", ")");
                    if (f.isSaneInsertion(n, i)) return f.recordAutoInsert(n, i, ")"), {text: "()", selection: [1, 1]}
                } else if (")" == s) {
                    u(n);
                    var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
                    if (")" == c) {
                        var h = i.$findOpeningBracket(")", {column: a.column + 1, row: a.row});
                        if (null !== h && f.isAutoInsertedClosing(a, l, s)) return f.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    }
                }
            }), this.add("parens", "deletion", function (e, t, n, i, s) {
                var r = i.doc.getTextRange(s);
                if (!s.isMultiLine() && "(" == r) {
                    u(n);
                    var o = i.doc.getLine(s.start.row), a = o.substring(s.start.column + 1, s.start.column + 2);
                    if (")" == a) return s.end.column++, s
                }
            }), this.add("brackets", "insertion", function (e, t, n, i, s) {
                if ("[" == s) {
                    u(n);
                    var r = n.getSelectionRange(), o = i.doc.getTextRange(r);
                    if ("" !== o && n.getWrapBehavioursEnabled()) return d(r, o, "[", "]");
                    if (f.isSaneInsertion(n, i)) return f.recordAutoInsert(n, i, "]"), {text: "[]", selection: [1, 1]}
                } else if ("]" == s) {
                    u(n);
                    var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
                    if ("]" == c) {
                        var h = i.$findOpeningBracket("]", {column: a.column + 1, row: a.row});
                        if (null !== h && f.isAutoInsertedClosing(a, l, s)) return f.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    }
                }
            }), this.add("brackets", "deletion", function (e, t, n, i, s) {
                var r = i.doc.getTextRange(s);
                if (!s.isMultiLine() && "[" == r) {
                    u(n);
                    var o = i.doc.getLine(s.start.row), a = o.substring(s.start.column + 1, s.start.column + 2);
                    if ("]" == a) return s.end.column++, s
                }
            }), this.add("string_dquotes", "insertion", function (e, t, n, i, s) {
                if ('"' == s || "'" == s) {
                    if (this.lineCommentStart && this.lineCommentStart.indexOf(s) != -1) return;
                    u(n);
                    var r = s, o = n.getSelectionRange(), a = i.doc.getTextRange(o);
                    if ("" !== a && "'" !== a && '"' != a && n.getWrapBehavioursEnabled()) return d(o, a, r, r);
                    if (!a) {
                        var l = n.getCursorPosition(), c = i.doc.getLine(l.row), h = c.substring(l.column - 1, l.column),
                            f = c.substring(l.column, l.column + 1), p = i.getTokenAt(l.row, l.column),
                            g = i.getTokenAt(l.row, l.column + 1);
                        if ("\\" == h && p && /escape/.test(p.type)) return null;
                        var m, C = p && /string|escape/.test(p.type), v = !g || /string|escape/.test(g.type);
                        if (f == r) m = C !== v, m && /string\.end/.test(g.type) && (m = !1); else {
                            if (C && !v) return null;
                            if (C && v) return null;
                            var A = i.$mode.tokenRe;
                            A.lastIndex = 0;
                            var y = A.test(h);
                            A.lastIndex = 0;
                            var E = A.test(h);
                            if (y || E) return null;
                            if (f && !/[\s;,.})\]\\]/.test(f)) return null;
                            m = !0
                        }
                        return {text: m ? r + r : "", selection: [1, 1]}
                    }
                }
            }), this.add("string_dquotes", "deletion", function (e, t, n, i, s) {
                var r = i.doc.getTextRange(s);
                if (!s.isMultiLine() && ('"' == r || "'" == r)) {
                    u(n);
                    var o = i.doc.getLine(s.start.row), a = o.substring(s.start.column + 1, s.start.column + 2);
                    if (a == r) return s.end.column++, s
                }
            })
        };
    f.isSaneInsertion = function (e, t) {
        var n = e.getCursorPosition(), i = new o(t, n.row, n.column);
        if (!this.$matchTokenType(i.getCurrentToken() || "text", l)) {
            var s = new o(t, n.row, n.column + 1);
            if (!this.$matchTokenType(s.getCurrentToken() || "text", l)) return !1
        }
        return i.stepForward(), i.getCurrentTokenRow() !== n.row || this.$matchTokenType(i.getCurrentToken() || "text", c)
    }, f.$matchTokenType = function (e, t) {
        return t.indexOf(e.type || e) > -1
    }, f.recordAutoInsert = function (e, t, n) {
        var s = e.getCursorPosition(), r = t.doc.getLine(s.row);
        this.isAutoInsertedClosing(s, r, i.autoInsertedLineEnd[0]) || (i.autoInsertedBrackets = 0), i.autoInsertedRow = s.row, i.autoInsertedLineEnd = n + r.substr(s.column), i.autoInsertedBrackets++
    }, f.recordMaybeInsert = function (e, t, n) {
        var s = e.getCursorPosition(), r = t.doc.getLine(s.row);
        this.isMaybeInsertedClosing(s, r) || (i.maybeInsertedBrackets = 0), i.maybeInsertedRow = s.row, i.maybeInsertedLineStart = r.substr(0, s.column) + n, i.maybeInsertedLineEnd = r.substr(s.column), i.maybeInsertedBrackets++
    }, f.isAutoInsertedClosing = function (e, t, n) {
        return i.autoInsertedBrackets > 0 && e.row === i.autoInsertedRow && n === i.autoInsertedLineEnd[0] && t.substr(e.column) === i.autoInsertedLineEnd
    }, f.isMaybeInsertedClosing = function (e, t) {
        return i.maybeInsertedBrackets > 0 && e.row === i.maybeInsertedRow && t.substr(e.column) === i.maybeInsertedLineEnd && t.substr(0, e.column) == i.maybeInsertedLineStart
    }, f.popAutoInsertedClosing = function () {
        i.autoInsertedLineEnd = i.autoInsertedLineEnd.substr(1), i.autoInsertedBrackets--
    }, f.clearMaybeInsertedClosing = function () {
        i && (i.maybeInsertedBrackets = 0, i.maybeInsertedRow = -1)
    }, s.inherits(f, r), t.CstyleBehaviour = f
}), define("ace/unicode", ["require", "exports", "module"], function (e, t, n) {
    "use strict";

    function i(e) {
        var n = /\w{4}/g;
        for (var i in e) t.packages[i] = e[i].replace(n, "\\u$&")
    }

    t.packages = {}, i({
        L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
        Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
        Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
        Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
        Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
        Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
        Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
        Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
        N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
        No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
        P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
        Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
        Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
        Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
        Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
        Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
        Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
        Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
        S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
        Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
        Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
        Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
        So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
        Z: "002000A01680180E2000-200A20282029202F205F3000",
        Zs: "002000A01680180E2000-200A202F205F3000",
        Zl: "2028",
        Zp: "2029",
        C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
        Cc: "0000-001F007F-009F",
        Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
        Co: "E000-F8FF",
        Cs: "D800-DFFF",
        Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
    })
}), define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function (e, t, n) {
    "use strict";
    var i = e("../tokenizer").Tokenizer, s = e("./text_highlight_rules").TextHighlightRules,
        r = e("./behaviour/cstyle").CstyleBehaviour, o = e("../unicode"), a = e("../lib/lang"),
        l = e("../token_iterator").TokenIterator, c = e("../range").Range, h = function () {
            this.HighlightRules = s
        };
    (function () {
        this.$defaultBehaviour = new r, this.tokenRe = new RegExp("^[" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]|\\s])+", "g"), this.getTokenizer = function () {
            return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new i(this.$highlightRules.getRules())), this.$tokenizer
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function (e, t, n, i) {
            function s(e) {
                for (var t = n; t <= i; t++) e(r.getLine(t), t)
            }

            var r = t.doc, o = !0, l = !0, c = 1 / 0, h = t.getTabSize(), u = !1;
            if (this.lineCommentStart) {
                if (Array.isArray(this.lineCommentStart)) var d = this.lineCommentStart.map(a.escapeRegExp).join("|"),
                    f = this.lineCommentStart[0]; else var d = a.escapeRegExp(this.lineCommentStart),
                    f = this.lineCommentStart;
                d = new RegExp("^(\\s*)(?:" + d + ") ?"), u = t.getUseSoftTabs();
                var p = function (e, t) {
                    var n = e.match(d);
                    if (n) {
                        var i = n[1].length, s = n[0].length;
                        v(e, i, s) || " " != n[0][s - 1] || s--, r.removeInLine(t, i, s)
                    }
                }, g = f + " ", m = function (e, t) {
                    o && !/\S/.test(e) || (v(e, c, c) ? r.insertInLine({row: t, column: c}, g) : r.insertInLine({
                        row: t,
                        column: c
                    }, f))
                }, C = function (e, t) {
                    return d.test(e)
                }, v = function (e, t, n) {
                    for (var i = 0; t-- && " " == e.charAt(t);) i++;
                    if (i % h != 0) return !1;
                    for (var i = 0; " " == e.charAt(n++);) i++;
                    return h > 2 ? i % h != h - 1 : i % h == 0
                }
            } else {
                if (!this.blockComment) return !1;
                var f = this.blockComment.start, A = this.blockComment.end,
                    d = new RegExp("^(\\s*)(?:" + a.escapeRegExp(f) + ")"),
                    y = new RegExp("(?:" + a.escapeRegExp(A) + ")\\s*$"), m = function (e, t) {
                        C(e, t) || o && !/\S/.test(e) || (r.insertInLine({
                            row: t,
                            column: e.length
                        }, A), r.insertInLine({row: t, column: c}, f))
                    }, p = function (e, t) {
                        var n;
                        (n = e.match(y)) && r.removeInLine(t, e.length - n[0].length, e.length), (n = e.match(d)) && r.removeInLine(t, n[1].length, n[0].length)
                    }, C = function (e, n) {
                        if (d.test(e)) return !0;
                        for (var i = t.getTokens(n), s = 0; s < i.length; s++) if ("comment" === i[s].type) return !0
                    }
            }
            var E = 1 / 0;
            s(function (e, t) {
                var n = e.search(/\S/);
                n !== -1 ? (n < c && (c = n), l && !C(e, t) && (l = !1)) : E > e.length && (E = e.length)
            }), c == 1 / 0 && (c = E, o = !1, l = !1), u && c % h != 0 && (c = Math.floor(c / h) * h), s(l ? p : m)
        }, this.toggleBlockComment = function (e, t, n, i) {
            var s = this.blockComment;
            if (s) {
                !s.start && s[0] && (s = s[0]);
                var r, o, a = new l(t, i.row, i.column), h = a.getCurrentToken(),
                    u = (t.selection, t.selection.toOrientedRange());
                if (h && /comment/.test(h.type)) {
                    for (var d, f; h && /comment/.test(h.type);) {
                        var p = h.value.indexOf(s.start);
                        if (p != -1) {
                            var g = a.getCurrentTokenRow(), m = a.getCurrentTokenColumn() + p;
                            d = new c(g, m, g, m + s.start.length);
                            break
                        }
                        h = a.stepBackward()
                    }
                    for (var a = new l(t, i.row, i.column), h = a.getCurrentToken(); h && /comment/.test(h.type);) {
                        var p = h.value.indexOf(s.end);
                        if (p != -1) {
                            var g = a.getCurrentTokenRow(), m = a.getCurrentTokenColumn() + p;
                            f = new c(g, m, g, m + s.end.length);
                            break
                        }
                        h = a.stepForward()
                    }
                    f && t.remove(f), d && (t.remove(d), r = d.start.row, o = -s.start.length)
                } else o = s.start.length, r = n.start.row, t.insert(n.end, s.end), t.insert(n.start, s.start);
                u.start.row == r && (u.start.column += o), u.end.row == r && (u.end.column += o), t.selection.fromOrientedRange(u)
            }
        }, this.getNextLineIndent = function (e, t, n) {
            return this.$getIndent(t)
        }, this.checkOutdent = function (e, t, n) {
            return !1
        }, this.autoOutdent = function (e, t, n) {
        }, this.$getIndent = function (e) {
            return e.match(/^\s*/)[0]
        }, this.createWorker = function (e) {
            return null
        }, this.createModeDelegates = function (e) {
            this.$embeds = [], this.$modes = {};
            for (var t in e) e[t] && (this.$embeds.push(t), this.$modes[t] = new e[t]);
            for (var n = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"], t = 0; t < n.length; t++) !function (e) {
                var i = n[t], s = e[i];
                e[n[t]] = function () {
                    return this.$delegator(i, arguments, s)
                }
            }(this)
        }, this.$delegator = function (e, t, n) {
            var i = t[0];
            "string" != typeof i && (i = i[0]);
            for (var s = 0; s < this.$embeds.length; s++) if (this.$modes[this.$embeds[s]]) {
                var r = i.split(this.$embeds[s]);
                if (!r[0] && r[1]) {
                    t[0] = r[1];
                    var o = this.$modes[this.$embeds[s]];
                    return o[e].apply(o, t)
                }
            }
            var a = n.apply(this, t);
            return n ? a : void 0
        }, this.transformAction = function (e, t, n, i, s) {
            if (this.$behaviour) {
                var r = this.$behaviour.getBehaviours();
                for (var o in r) if (r[o][t]) {
                    var a = r[o][t].apply(this, arguments);
                    if (a) return a
                }
            }
        }, this.getKeywords = function (e) {
            if (!this.completionKeywords) {
                var t = this.$tokenizer.rules, n = [];
                for (var i in t) for (var s = t[i], r = 0, o = s.length; r < o; r++) if ("string" == typeof s[r].token) /keyword|support|storage/.test(s[r].token) && n.push(s[r].regex); else if ("object" == typeof s[r].token) for (var a = 0, l = s[r].token.length; a < l; a++) if (/keyword|support|storage/.test(s[r].token[a])) {
                    var i = s[r].regex.match(/\(.+?\)/g)[a];
                    n.push(i.substr(1, i.length - 2))
                }
                this.completionKeywords = n
            }
            return e ? n.concat(this.$keywordList || []) : this.$keywordList
        }, this.$createKeywordList = function () {
            return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
        }, this.getCompletions = function (e, t, n, i) {
            var s = this.$keywordList || this.$createKeywordList();
            return s.map(function (e) {
                return {name: e, value: e, score: 0, meta: "keyword"}
            })
        }, this.$id = "ace/mode/text"
    }).call(h.prototype), t.Mode = h
}), define("ace/apply_delta", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.applyDelta = function (e, t, n) {
        var i = t.start.row, s = t.start.column, r = e[i] || "";
        switch (t.action) {
            case"insert":
                var o = t.lines;
                if (1 === o.length) e[i] = r.substring(0, s) + t.lines[0] + r.substring(s); else {
                    var a = [i, 1].concat(t.lines);
                    e.splice.apply(e, a), e[i] = r.substring(0, s) + e[i], e[i + t.lines.length - 1] += r.substring(s)
                }
                break;
            case"remove":
                var l = t.end.column, c = t.end.row;
                i === c ? e[i] = r.substring(0, s) + r.substring(l) : e.splice(i, c - i + 1, r.substring(0, s) + e[c].substring(l))
        }
    }
}), define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var i = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, r = t.Anchor = function (e, t, n) {
        this.$onChange = this.onChange.bind(this), this.attach(e), "undefined" == typeof n ? this.setPosition(t.row, t.column) : this.setPosition(t, n)
    };
    (function () {
        function e(e, t, n) {
            var i = n ? e.column <= t.column : e.column < t.column;
            return e.row < t.row || e.row == t.row && i
        }

        function t(t, n, i) {
            var s = "insert" == t.action, r = (s ? 1 : -1) * (t.end.row - t.start.row),
                o = (s ? 1 : -1) * (t.end.column - t.start.column), a = t.start, l = s ? a : t.end;
            return e(n, a, i) ? {row: n.row, column: n.column} : e(l, n, !i) ? {
                row: n.row + r,
                column: n.column + (n.row == l.row ? o : 0)
            } : {row: a.row, column: a.column}
        }

        i.implement(this, s), this.getPosition = function () {
            return this.$clipPositionToDocument(this.row, this.column)
        }, this.getDocument = function () {
            return this.document
        }, this.$insertRight = !1, this.onChange = function (e) {
            if (!(e.start.row == e.end.row && e.start.row != this.row || e.start.row > this.row)) {
                var n = t(e, {row: this.row, column: this.column}, this.$insertRight);
                this.setPosition(n.row, n.column, !0)
            }
        }, this.setPosition = function (e, t, n) {
            var i;
            if (i = n ? {
                row: e,
                column: t
            } : this.$clipPositionToDocument(e, t), this.row != i.row || this.column != i.column) {
                var s = {row: this.row, column: this.column};
                this.row = i.row, this.column = i.column, this._signal("change", {old: s, value: i})
            }
        }, this.detach = function () {
            this.document.removeEventListener("change", this.$onChange)
        }, this.attach = function (e) {
            this.document = e || this.document, this.document.on("change", this.$onChange)
        }, this.$clipPositionToDocument = function (e, t) {
            var n = {};
            return e >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : e < 0 ? (n.row = 0, n.column = 0) : (n.row = e, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, t))), t < 0 && (n.column = 0), n
        }
    }).call(r.prototype)
}), define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function (e, t, n) {
    "use strict";
    var i = e("./lib/oop"), s = e("./apply_delta").applyDelta, r = e("./lib/event_emitter").EventEmitter,
        o = e("./range").Range, a = e("./anchor").Anchor, l = function (e) {
            this.$lines = [""], 0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({
                row: 0,
                column: 0
            }, e) : this.insert({row: 0, column: 0}, e)
        };
    (function () {
        i.implement(this, r), this.setValue = function (e) {
            var t = this.getLength() - 1;
            this.remove(new o(0, 0, t, this.getLine(t).length)), this.insert({row: 0, column: 0}, e)
        }, this.getValue = function () {
            return this.getAllLines().join(this.getNewLineCharacter())
        }, this.createAnchor = function (e, t) {
            return new a(this, e, t)
        }, 0 === "aaa".split(/a/).length ? this.$split = function (e) {
            return e.replace(/\r\n|\r/g, "\n").split("\n")
        } : this.$split = function (e) {
            return e.split(/\r\n|\r|\n/)
        }, this.$detectNewLine = function (e) {
            var t = e.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
        }, this.getNewLineCharacter = function () {
            switch (this.$newLineMode) {
                case"windows":
                    return "\r\n";
                case"unix":
                    return "\n";
                default:
                    return this.$autoNewLine || "\n"
            }
        }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function (e) {
            this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"))
        }, this.getNewLineMode = function () {
            return this.$newLineMode
        }, this.isNewLine = function (e) {
            return "\r\n" == e || "\r" == e || "\n" == e
        }, this.getLine = function (e) {
            return this.$lines[e] || ""
        }, this.getLines = function (e, t) {
            return this.$lines.slice(e, t + 1)
        }, this.getAllLines = function () {
            return this.getLines(0, this.getLength())
        }, this.getLength = function () {
            return this.$lines.length
        }, this.getTextRange = function (e) {
            return this.getLinesForRange(e).join(this.getNewLineCharacter())
        }, this.getLinesForRange = function (e) {
            var t;
            if (e.start.row === e.end.row) t = [this.getLine(e.start.row).substring(e.start.column, e.end.column)]; else {
                t = this.getLines(e.start.row, e.end.row), t[0] = (t[0] || "").substring(e.start.column);
                var n = t.length - 1;
                e.end.row - e.start.row == n && (t[n] = t[n].substring(0, e.end.column))
            }
            return t
        }, this.insertLines = function (e, t) {
            return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, t)
        }, this.removeLines = function (e, t) {
            return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, t)
        }, this.insertNewLine = function (e) {
            return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""])
        }, this.insert = function (e, t) {
            return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(e, this.$split(t))
        }, this.insertInLine = function (e, t) {
            var n = this.clippedPos(e.row, e.column), i = this.pos(e.row, e.column + t.length);
            return this.applyDelta({start: n, end: i, action: "insert", lines: [t]}, !0), this.clonePos(i)
        }, this.clippedPos = function (e, t) {
            var n = this.getLength();
            void 0 === e ? e = n : e < 0 ? e = 0 : e >= n && (e = n - 1, t = void 0);
            var i = this.getLine(e);
            return void 0 == t && (t = i.length), t = Math.min(Math.max(t, 0), i.length), {row: e, column: t}
        }, this.clonePos = function (e) {
            return {row: e.row, column: e.column}
        }, this.pos = function (e, t) {
            return {row: e, column: t}
        }, this.$clipPosition = function (e) {
            var t = this.getLength();
            return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e
        }, this.insertFullLines = function (e, t) {
            e = Math.min(Math.max(e, 0), this.getLength());
            var n = 0;
            e < this.getLength() ? (t = t.concat([""]), n = 0) : (t = [""].concat(t), e--, n = this.$lines[e].length), this.insertMergedLines({
                row: e,
                column: n
            }, t)
        }, this.insertMergedLines = function (e, t) {
            var n = this.clippedPos(e.row, e.column),
                i = {row: n.row + t.length - 1, column: (1 == t.length ? n.column : 0) + t[t.length - 1].length};
            return this.applyDelta({start: n, end: i, action: "insert", lines: t}), this.clonePos(i)
        }, this.remove = function (e) {
            var t = this.clippedPos(e.start.row, e.start.column), n = this.clippedPos(e.end.row, e.end.column);
            return this.applyDelta({
                start: t,
                end: n,
                action: "remove",
                lines: this.getLinesForRange({start: t, end: n})
            }), this.clonePos(t)
        }, this.removeInLine = function (e, t, n) {
            var i = this.clippedPos(e, t), s = this.clippedPos(e, n);
            return this.applyDelta({
                start: i,
                end: s,
                action: "remove",
                lines: this.getLinesForRange({start: i, end: s})
            }, !0), this.clonePos(i)
        }, this.removeFullLines = function (e, t) {
            e = Math.min(Math.max(0, e), this.getLength() - 1), t = Math.min(Math.max(0, t), this.getLength() - 1);
            var n = t == this.getLength() - 1 && e > 0, i = t < this.getLength() - 1, s = n ? e - 1 : e,
                r = n ? this.getLine(s).length : 0, a = i ? t + 1 : t, l = i ? 0 : this.getLine(a).length,
                c = new o(s, r, a, l), h = this.$lines.slice(e, t + 1);
            return this.applyDelta({start: c.start, end: c.end, action: "remove", lines: this.getLinesForRange(c)}), h
        }, this.removeNewLine = function (e) {
            e < this.getLength() - 1 && e >= 0 && this.applyDelta({
                start: this.pos(e, this.getLine(e).length),
                end: this.pos(e + 1, 0),
                action: "remove",
                lines: ["", ""]
            })
        }, this.replace = function (e, t) {
            if (e instanceof o || (e = o.fromPoints(e.start, e.end)), 0 === t.length && e.isEmpty()) return e.start;
            if (t == this.getTextRange(e)) return e.end;
            this.remove(e);
            var n;
            return n = t ? this.insert(e.start, t) : e.start
        }, this.applyDeltas = function (e) {
            for (var t = 0; t < e.length; t++) this.applyDelta(e[t])
        }, this.revertDeltas = function (e) {
            for (var t = e.length - 1; t >= 0; t--) this.revertDelta(e[t])
        }, this.applyDelta = function (e, t) {
            var n = "insert" == e.action;
            (n ? e.lines.length <= 1 && !e.lines[0] : !o.comparePoints(e.start, e.end)) || (n && e.lines.length > 2e4 && this.$splitAndapplyLargeDelta(e, 2e4), s(this.$lines, e, t), this._signal("change", e))
        }, this.$splitAndapplyLargeDelta = function (e, t) {
            for (var n = e.lines, i = n.length, s = e.start.row, r = e.start.column, o = 0, a = 0; ;) {
                o = a, a += t - 1;
                var l = n.slice(o, a);
                if (a > i) {
                    e.lines = l, e.start.row = s + o, e.start.column = r;
                    break
                }
                l.push(""), this.applyDelta({
                    start: this.pos(s + o, r),
                    end: this.pos(s + a, r = 0),
                    action: e.action,
                    lines: l
                }, !0)
            }
        }, this.revertDelta = function (e) {
            this.applyDelta({
                start: this.clonePos(e.start),
                end: this.clonePos(e.end),
                action: "insert" == e.action ? "remove" : "insert",
                lines: e.lines.slice()
            })
        }, this.indexToPosition = function (e, t) {
            for (var n = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, s = t || 0, r = n.length; s < r; s++) if (e -= n[s].length + i, e < 0) return {
                row: s,
                column: e + n[s].length + i
            };
            return {row: r - 1, column: n[r - 1].length}
        }, this.positionToIndex = function (e, t) {
            for (var n = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, s = 0, r = Math.min(e.row, n.length), o = t || 0; o < r; ++o) s += n[o].length + i;
            return s + e.column
        }
    }).call(l.prototype), t.Document = l
}), define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var i = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, r = function (e, t) {
        this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
        var n = this;
        this.$worker = function () {
            if (n.running) {
                for (var e = new Date, t = n.currentLine, i = -1, s = n.doc, r = t; n.lines[t];) t++;
                var o = s.getLength(), a = 0;
                for (n.running = !1; t < o;) {
                    n.$tokenizeRow(t), i = t;
                    do t++; while (n.lines[t]);
                    if (a++, a % 5 === 0 && new Date - e > 20) {
                        n.running = setTimeout(n.$worker, 20);
                        break
                    }
                }
                n.currentLine = t, r <= i && n.fireUpdateEvent(r, i)
            }
        }
    };
    (function () {
        i.implement(this, s), this.setTokenizer = function (e) {
            this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
        }, this.setDocument = function (e) {
            this.doc = e, this.lines = [], this.states = [], this.stop()
        }, this.fireUpdateEvent = function (e, t) {
            var n = {first: e, last: t};
            this._signal("update", {data: n})
        }, this.start = function (e) {
            this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
        }, this.scheduleStart = function () {
            this.running || (this.running = setTimeout(this.$worker, 700))
        }, this.$updateOnChange = function (e) {
            var t = e.start.row, n = e.end.row - t;
            if (0 === n) this.lines[t] = null; else if ("remove" == e.action) this.lines.splice(t, n + 1, null), this.states.splice(t, n + 1, null); else {
                var i = Array(n + 1);
                i.unshift(t, 1), this.lines.splice.apply(this.lines, i), this.states.splice.apply(this.states, i)
            }
            this.currentLine = Math.min(t, this.currentLine, this.doc.getLength()), this.stop()
        }, this.stop = function () {
            this.running && clearTimeout(this.running), this.running = !1
        }, this.getTokens = function (e) {
            return this.lines[e] || this.$tokenizeRow(e)
        }, this.getState = function (e) {
            return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
        }, this.$tokenizeRow = function (e) {
            var t = this.doc.getLine(e), n = this.states[e - 1], i = this.tokenizer.getLineTokens(t, n, e);
            return this.states[e] + "" != i.state + "" ? (this.states[e] = i.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = i.tokens
        }
    }).call(r.prototype), t.BackgroundTokenizer = r
}), define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
    "use strict";
    var i = e("./lib/lang"), s = (e("./lib/oop"), e("./range").Range), r = function (e, t, n) {
        this.setRegexp(e), this.clazz = t, this.type = n || "text"
    };
    (function () {
        this.MAX_RANGES = 500, this.setRegexp = function (e) {
            this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
        }, this.update = function (e, t, n, r) {
            if (this.regExp) for (var o = r.firstRow, a = r.lastRow, l = o; l <= a; l++) {
                var c = this.cache[l];
                null == c && (c = i.getMatchOffsets(n.getLine(l), this.regExp), c.length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)), c = c.map(function (e) {
                    return new s(l, e.offset, l, e.offset + e.length)
                }), this.cache[l] = c.length ? c : "");
                for (var h = c.length; h--;) t.drawSingleLineMarker(e, c[h].toScreenRange(n), this.clazz, r)
            }
        }
    }).call(r.prototype), t.SearchHighlight = r
}), define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";

    function i(e, t) {
        this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
        var n = t[t.length - 1];
        this.range = new s(t[0].start.row, t[0].start.column, n.end.row, n.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function (e) {
            e.setFoldLine(this)
        }, this)
    }

    var s = e("../range").Range;
    (function () {
        this.shiftRow = function (e) {
            this.start.row += e, this.end.row += e, this.folds.forEach(function (t) {
                t.start.row += e, t.end.row += e
            })
        }, this.addFold = function (e) {
            if (e.sameRow) {
                if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
                this.folds.push(e), this.folds.sort(function (e, t) {
                    return -e.range.compareEnd(t.start.row, t.start.column)
                }), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
            } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column; else {
                if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
            }
            e.foldLine = this
        }, this.containsRow = function (e) {
            return e >= this.start.row && e <= this.end.row
        }, this.walk = function (e, t, n) {
            var i, s, r, o = 0, a = this.folds, l = !0;
            null == t && (t = this.end.row, n = this.end.column);
            for (var c = 0; c < a.length; c++) {
                if (i = a[c], s = i.range.compareStart(t, n), s == -1) return void e(null, t, n, o, l);
                if (r = e(null, i.start.row, i.start.column, o, l), r = !r && e(i.placeholder, i.start.row, i.start.column, o), r || 0 === s) return;
                l = !i.sameRow, o = i.end.column
            }
            e(null, t, n, o, l)
        }, this.getNextFoldTo = function (e, t) {
            for (var n, i, s = 0; s < this.folds.length; s++) {
                if (n = this.folds[s], i = n.range.compareEnd(e, t), i == -1) return {fold: n, kind: "after"};
                if (0 === i) return {fold: n, kind: "inside"}
            }
            return null
        }, this.addRemoveChars = function (e, t, n) {
            var i, s, r = this.getNextFoldTo(e, t);
            if (r) if (i = r.fold, "inside" == r.kind && i.start.column != t && i.start.row != e) window.console && window.console.log(e, t, i); else if (i.start.row == e) {
                s = this.folds;
                var o = s.indexOf(i);
                for (0 === o && (this.start.column += n), o; o < s.length; o++) {
                    if (i = s[o], i.start.column += n, !i.sameRow) return;
                    i.end.column += n
                }
                this.end.column += n
            }
        }, this.split = function (e, t) {
            var n = this.getNextFoldTo(e, t);
            if (!n || "inside" == n.kind) return null;
            var s = n.fold, r = this.folds, o = this.foldData, a = r.indexOf(s), l = r[a - 1];
            this.end.row = l.end.row, this.end.column = l.end.column, r = r.splice(a, r.length - a);
            var c = new i(o, r);
            return o.splice(o.indexOf(this) + 1, 0, c), c
        }, this.merge = function (e) {
            for (var t = e.folds, n = 0; n < t.length; n++) this.addFold(t[n]);
            var i = this.foldData;
            i.splice(i.indexOf(e), 1)
        }, this.toString = function () {
            var e = [this.range.toString() + ": ["];
            return this.folds.forEach(function (t) {
                e.push("  " + t.toString())
            }), e.push("]"), e.join("\n")
        }, this.idxToPosition = function (e) {
            for (var t = 0, n = 0; n < this.folds.length; n++) {
                var i = this.folds[n];
                if (e -= i.start.column - t, e < 0) return {row: i.start.row, column: i.start.column + e};
                if (e -= i.placeholder.length, e < 0) return i.start;
                t = i.end.column
            }
            return {row: this.end.row, column: this.end.column + e}
        }
    }).call(i.prototype), t.FoldLine = i
}), define("ace/range_list", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    var i = e("./range").Range, s = i.comparePoints, r = function () {
        this.ranges = []
    };
    (function () {
        this.comparePoints = s, this.pointIndex = function (e, t, n) {
            for (var i = this.ranges, r = n || 0; r < i.length; r++) {
                var o = i[r], a = s(e, o.end);
                if (!(a > 0)) {
                    var l = s(e, o.start);
                    return 0 === a ? t && 0 !== l ? -r - 2 : r : l > 0 || 0 === l && !t ? r : -r - 1
                }
            }
            return -r - 1
        }, this.add = function (e) {
            var t = !e.isEmpty(), n = this.pointIndex(e.start, t);
            n < 0 && (n = -n - 1);
            var i = this.pointIndex(e.end, t, n);
            return i < 0 ? i = -i - 1 : i++, this.ranges.splice(n, i - n, e)
        }, this.addList = function (e) {
            for (var t = [], n = e.length; n--;) t.push.apply(t, this.add(e[n]));
            return t
        }, this.substractPoint = function (e) {
            var t = this.pointIndex(e);
            if (t >= 0) return this.ranges.splice(t, 1)
        }, this.merge = function () {
            var e = [], t = this.ranges;
            t = t.sort(function (e, t) {
                return s(e.start, t.start)
            });
            for (var n, i = t[0], r = 1; r < t.length; r++) {
                n = i, i = t[r];
                var o = s(n.end, i.start);
                o < 0 || (0 != o || n.isEmpty() || i.isEmpty()) && (s(n.end, i.end) < 0 && (n.end.row = i.end.row, n.end.column = i.end.column), t.splice(r, 1), e.push(i), i = n, r--)
            }
            return this.ranges = t, e
        }, this.contains = function (e, t) {
            return this.pointIndex({row: e, column: t}) >= 0
        }, this.containsPoint = function (e) {
            return this.pointIndex(e) >= 0
        }, this.rangeAtPoint = function (e) {
            var t = this.pointIndex(e);
            if (t >= 0) return this.ranges[t]
        }, this.clipRows = function (e, t) {
            var n = this.ranges;
            if (n[0].start.row > t || n[n.length - 1].start.row < e) return [];
            var i = this.pointIndex({row: e, column: 0});
            i < 0 && (i = -i - 1);
            var s = this.pointIndex({row: t, column: 0}, i);
            s < 0 && (s = -s - 1);
            for (var r = [], o = i; o < s; o++) r.push(n[o]);
            return r
        }, this.removeAll = function () {
            return this.ranges.splice(0, this.ranges.length)
        }, this.attach = function (e) {
            this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
        }, this.detach = function () {
            this.session && (this.session.removeListener("change", this.onChange), this.session = null)
        }, this.$onChange = function (e) {
            if ("insert" == e.action) var t = e.start, n = e.end; else var n = e.start, t = e.end;
            for (var i = t.row, s = n.row, r = s - i, o = -t.column + n.column, a = this.ranges, l = 0, c = a.length; l < c; l++) {
                var h = a[l];
                if (!(h.end.row < i)) {
                    if (h.start.row > i) break;
                    if (h.start.row == i && h.start.column >= t.column && (h.start.column == t.column && this.$insertRight || (h.start.column += o, h.start.row += r)), h.end.row == i && h.end.column >= t.column) {
                        if (h.end.column == t.column && this.$insertRight) continue;
                        h.end.column == t.column && o > 0 && l < c - 1 && h.end.column > h.start.column && h.end.column == a[l + 1].start.column && (h.end.column -= o), h.end.column += o, h.end.row += r
                    }
                }
            }
            if (0 != r && l < c) for (; l < c; l++) {
                var h = a[l];
                h.start.row += r, h.end.row += r
            }
        }
    }).call(r.prototype), t.RangeList = r
}), define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], function (e, t, n) {
    "use strict";

    function i(e, t) {
        e.row -= t.row, 0 == e.row && (e.column -= t.column)
    }

    function s(e, t) {
        i(e.start, t), i(e.end, t)
    }

    function r(e, t) {
        0 == e.row && (e.column += t.column), e.row += t.row
    }

    function o(e, t) {
        r(e.start, t), r(e.end, t)
    }

    var a = (e("../range").Range, e("../range_list").RangeList), l = e("../lib/oop"), c = t.Fold = function (e, t) {
        this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
    };
    l.inherits(c, a), function () {
        this.toString = function () {
            return '"' + this.placeholder + '" ' + this.range.toString()
        }, this.setFoldLine = function (e) {
            this.foldLine = e, this.subFolds.forEach(function (t) {
                t.setFoldLine(e)
            })
        }, this.clone = function () {
            var e = this.range.clone(), t = new c(e, this.placeholder);
            return this.subFolds.forEach(function (e) {
                t.subFolds.push(e.clone())
            }), t.collapseChildren = this.collapseChildren, t
        }, this.addSubFold = function (e) {
            if (!this.range.isEqual(e)) {
                if (!this.range.containsRange(e)) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                s(e, this.start);
                for (var t = e.start.row, n = e.start.column, i = 0, r = -1; i < this.subFolds.length && (r = this.subFolds[i].range.compare(t, n), 1 == r); i++) ;
                var o = this.subFolds[i];
                if (0 == r) return o.addSubFold(e);
                for (var t = e.range.end.row, n = e.range.end.column, a = i, r = -1; a < this.subFolds.length && (r = this.subFolds[a].range.compare(t, n), 1 == r); a++) ;
                this.subFolds[a];
                if (0 == r) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                this.subFolds.splice(i, a - i, e);
                return e.setFoldLine(this.foldLine), e
            }
        }, this.restoreRange = function (e) {
            return o(e, this.start)
        }
    }.call(c.prototype)
}), define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function (e, t, n) {
    "use strict";

    function i() {
        this.getFoldAt = function (e, t, n) {
            var i = this.getFoldLine(e);
            if (!i) return null;
            for (var s = i.folds, r = 0; r < s.length; r++) {
                var o = s[r];
                if (o.range.contains(e, t)) {
                    if (1 == n && o.range.isEnd(e, t)) continue;
                    if (n == -1 && o.range.isStart(e, t)) continue;
                    return o
                }
            }
        }, this.getFoldsInRange = function (e) {
            var t = e.start, n = e.end, i = this.$foldData, s = [];
            t.column += 1, n.column -= 1;
            for (var r = 0; r < i.length; r++) {
                var o = i[r].range.compareRange(e);
                if (2 != o) {
                    if (o == -2) break;
                    for (var a = i[r].folds, l = 0; l < a.length; l++) {
                        var c = a[l];
                        if (o = c.range.compareRange(e), o == -2) break;
                        if (2 != o) {
                            if (42 == o) break;
                            s.push(c)
                        }
                    }
                }
            }
            return t.column -= 1, n.column += 1, s
        }, this.getFoldsInRangeList = function (e) {
            if (Array.isArray(e)) {
                var t = [];
                e.forEach(function (e) {
                    t = t.concat(this.getFoldsInRange(e))
                }, this)
            } else var t = this.getFoldsInRange(e);
            return t
        }, this.getAllFolds = function () {
            for (var e = [], t = this.$foldData, n = 0; n < t.length; n++) for (var i = 0; i < t[n].folds.length; i++) e.push(t[n].folds[i]);
            return e
        }, this.getFoldStringAt = function (e, t, n, i) {
            if (i = i || this.getFoldLine(e), !i) return null;
            for (var s, r, o = {end: {column: 0}}, a = 0; a < i.folds.length; a++) {
                r = i.folds[a];
                var l = r.range.compareEnd(e, t);
                if (l == -1) {
                    s = this.getLine(r.start.row).substring(o.end.column, r.start.column);
                    break
                }
                if (0 === l) return null;
                o = r
            }
            return s || (s = this.getLine(r.start.row).substring(o.end.column)), n == -1 ? s.substring(0, t - o.end.column) : 1 == n ? s.substring(t - o.end.column) : s
        }, this.getFoldLine = function (e, t) {
            var n = this.$foldData, i = 0;
            for (t && (i = n.indexOf(t)), i == -1 && (i = 0), i; i < n.length; i++) {
                var s = n[i];
                if (s.start.row <= e && s.end.row >= e) return s;
                if (s.end.row > e) return null
            }
            return null
        }, this.getNextFoldLine = function (e, t) {
            var n = this.$foldData, i = 0;
            for (t && (i = n.indexOf(t)), i == -1 && (i = 0), i; i < n.length; i++) {
                var s = n[i];
                if (s.end.row >= e) return s
            }
            return null
        }, this.getFoldedRowCount = function (e, t) {
            for (var n = this.$foldData, i = t - e + 1, s = 0; s < n.length; s++) {
                var r = n[s], o = r.end.row, a = r.start.row;
                if (o >= t) {
                    a < t && (a >= e ? i -= t - a : i = 0);
                    break
                }
                o >= e && (i -= a >= e ? o - a : o - e + 1)
            }
            return i
        }, this.$addFoldLine = function (e) {
            return this.$foldData.push(e), this.$foldData.sort(function (e, t) {
                return e.start.row - t.start.row
            }), e
        }, this.addFold = function (e, t) {
            var n, i = this.$foldData, s = !1;
            e instanceof o ? n = e : (n = new o(t, e), n.collapseChildren = t.collapseChildren), this.$clipRangeToDocument(n.range);
            var a = n.start.row, l = n.start.column, c = n.end.row, h = n.end.column;
            if (!(a < c || a == c && l <= h - 2)) throw new Error("The range has to be at least 2 characters width");
            var u = this.getFoldAt(a, l, 1), d = this.getFoldAt(c, h, -1);
            if (u && d == u) return u.addSubFold(n);
            u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range.isEnd(c, h) && this.removeFold(d);
            var f = this.getFoldsInRange(n.range);
            f.length > 0 && (this.removeFolds(f), f.forEach(function (e) {
                n.addSubFold(e)
            }));
            for (var p = 0; p < i.length; p++) {
                var g = i[p];
                if (c == g.start.row) {
                    g.addFold(n), s = !0;
                    break
                }
                if (a == g.end.row) {
                    if (g.addFold(n), s = !0, !n.sameRow) {
                        var m = i[p + 1];
                        if (m && m.start.row == c) {
                            g.merge(m);
                            break
                        }
                    }
                    break
                }
                if (c <= g.start.row) break
            }
            return s || (g = this.$addFoldLine(new r(this.$foldData, n))), this.$useWrapMode ? this.$updateWrapData(g.start.row, g.start.row) : this.$updateRowLengthCache(g.start.row, g.start.row), this.$modified = !0, this._signal("changeFold", {
                data: n,
                action: "add"
            }), n
        }, this.addFolds = function (e) {
            e.forEach(function (e) {
                this.addFold(e)
            }, this)
        }, this.removeFold = function (e) {
            var t = e.foldLine, n = t.start.row, i = t.end.row, s = this.$foldData, r = t.folds;
            if (1 == r.length) s.splice(s.indexOf(t), 1); else if (t.range.isEnd(e.end.row, e.end.column)) r.pop(), t.end.row = r[r.length - 1].end.row, t.end.column = r[r.length - 1].end.column; else if (t.range.isStart(e.start.row, e.start.column)) r.shift(), t.start.row = r[0].start.row, t.start.column = r[0].start.column; else if (e.sameRow) r.splice(r.indexOf(e), 1); else {
                var o = t.split(e.start.row, e.start.column);
                r = o.folds, r.shift(), o.start.row = r[0].start.row, o.start.column = r[0].start.column
            }
            this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, i) : this.$updateRowLengthCache(n, i)), this.$modified = !0, this._signal("changeFold", {
                data: e,
                action: "remove"
            })
        }, this.removeFolds = function (e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
            t.forEach(function (e) {
                this.removeFold(e)
            }, this), this.$modified = !0
        }, this.expandFold = function (e) {
            this.removeFold(e), e.subFolds.forEach(function (t) {
                e.restoreRange(t), this.addFold(t)
            }, this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
        }, this.expandFolds = function (e) {
            e.forEach(function (e) {
                this.expandFold(e)
            }, this)
        }, this.unfold = function (e, t) {
            var n, i;
            if (null == e ? (n = new s(0, 0, this.getLength(), 0), t = !0) : n = "number" == typeof e ? new s(e, 0, e, this.getLine(e).length) : "row" in e ? s.fromPoints(e, e) : e, i = this.getFoldsInRangeList(n), t) this.removeFolds(i); else for (var r = i; r.length;) this.expandFolds(r), r = this.getFoldsInRangeList(n);
            if (i.length) return i
        }, this.isRowFolded = function (e, t) {
            return !!this.getFoldLine(e, t)
        }, this.getRowFoldEnd = function (e, t) {
            var n = this.getFoldLine(e, t);
            return n ? n.end.row : e
        }, this.getRowFoldStart = function (e, t) {
            var n = this.getFoldLine(e, t);
            return n ? n.start.row : e
        }, this.getFoldDisplayLine = function (e, t, n, i, s) {
            null == i && (i = e.start.row), null == s && (s = 0), null == t && (t = e.end.row), null == n && (n = this.getLine(t).length);
            var r = this.doc, o = "";
            return e.walk(function (e, t, n, a) {
                if (!(t < i)) {
                    if (t == i) {
                        if (n < s) return;
                        a = Math.max(s, a)
                    }
                    o += null != e ? e : r.getLine(t).substring(a, n)
                }
            }, t, n), o
        }, this.getDisplayLine = function (e, t, n, i) {
            var s = this.getFoldLine(e);
            if (s) return this.getFoldDisplayLine(s, e, t, n, i);
            var r;
            return r = this.doc.getLine(e), r.substring(i || 0, t || r.length)
        }, this.$cloneFoldData = function () {
            var e = [];
            return e = this.$foldData.map(function (t) {
                var n = t.folds.map(function (e) {
                    return e.clone()
                });
                return new r(e, n)
            })
        }, this.toggleFold = function (e) {
            var t, n, i = this.selection, s = i.getRange();
            if (s.isEmpty()) {
                var r = s.start;
                if (t = this.getFoldAt(r.row, r.column)) return void this.expandFold(t);
                (n = this.findMatchingBracket(r)) ? 1 == s.comparePoint(n) ? s.end = n : (s.start = n, s.start.column++, s.end.column--) : (n = this.findMatchingBracket({
                    row: r.row,
                    column: r.column + 1
                })) ? (1 == s.comparePoint(n) ? s.end = n : s.start = n, s.start.column++) : s = this.getCommentFoldRange(r.row, r.column) || s
            } else {
                var o = this.getFoldsInRange(s);
                if (e && o.length) return void this.expandFolds(o);
                1 == o.length && (t = o[0])
            }
            if (t || (t = this.getFoldAt(s.start.row, s.start.column)), t && t.range.toString() == s.toString()) return void this.expandFold(t);
            var a = "...";
            if (!s.isMultiLine()) {
                if (a = this.getTextRange(s), a.length < 4) return;
                a = a.trim().substring(0, 2) + ".."
            }
            this.addFold(a, s)
        }, this.getCommentFoldRange = function (e, t, n) {
            var i = new a(this, e, t), r = i.getCurrentToken();
            if (r && /^comment|string/.test(r.type)) {
                var o = new s, l = new RegExp(r.type.replace(/\..*/, "\\."));
                if (1 != n) {
                    do r = i.stepBackward(); while (r && l.test(r.type));
                    i.stepForward()
                }
                if (o.start.row = i.getCurrentTokenRow(), o.start.column = i.getCurrentTokenColumn() + 2, i = new a(this, e, t), n != -1) {
                    do r = i.stepForward(); while (r && l.test(r.type));
                    r = i.stepBackward()
                } else r = i.getCurrentToken();
                return o.end.row = i.getCurrentTokenRow(), o.end.column = i.getCurrentTokenColumn() + r.value.length - 2, o
            }
        }, this.foldAll = function (e, t, n) {
            void 0 == n && (n = 1e5);
            var i = this.foldWidgets;
            if (i) {
                t = t || this.getLength(), e = e || 0;
                for (var s = e; s < t; s++) if (null == i[s] && (i[s] = this.getFoldWidget(s)), "start" == i[s]) {
                    var r = this.getFoldWidgetRange(s);
                    if (r && r.isMultiLine() && r.end.row <= t && r.start.row >= e) {
                        s = r.end.row;
                        try {
                            var o = this.addFold("...", r);
                            o && (o.collapseChildren = n)
                        } catch (a) {
                        }
                    }
                }
            }
        }, this.$foldStyles = {
            manual: 1,
            markbegin: 1,
            markbeginend: 1
        }, this.$foldStyle = "markbegin", this.setFoldStyle = function (e) {
            if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
            if (this.$foldStyle != e) {
                this.$foldStyle = e, "manual" == e && this.unfold();
                var t = this.$foldMode;
                this.$setFolding(null), this.$setFolding(t)
            }
        }, this.$setFolding = function (e) {
            if (this.$foldMode != e) {
                if (this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), !e || "manual" == this.$foldStyle) return void (this.foldWidgets = null);
                this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)
            }
        }, this.getParentFoldRangeData = function (e, t) {
            var n = this.foldWidgets;
            if (!n || t && n[e]) return {};
            for (var i, s = e - 1; s >= 0;) {
                var r = n[s];
                if (null == r && (r = n[s] = this.getFoldWidget(s)), "start" == r) {
                    var o = this.getFoldWidgetRange(s);
                    if (i || (i = o), o && o.end.row >= e) break
                }
                s--
            }
            return {range: s !== -1 && o, firstRange: i}
        }, this.onFoldWidgetClick = function (e, t) {
            t = t.domEvent;
            var n = {children: t.shiftKey, all: t.ctrlKey || t.metaKey, siblings: t.altKey},
                i = this.$toggleFoldWidget(e, n);
            if (!i) {
                var s = t.target || t.srcElement;
                s && /ace_fold-widget/.test(s.className) && (s.className += " ace_invalid")
            }
        }, this.$toggleFoldWidget = function (e, t) {
            if (this.getFoldWidget) {
                var n = this.getFoldWidget(e), i = this.getLine(e), s = "end" === n ? -1 : 1,
                    r = this.getFoldAt(e, s === -1 ? 0 : i.length, s);
                if (r) return t.children || t.all ? this.removeFold(r) : this.expandFold(r), r;
                var o = this.getFoldWidgetRange(e, !0);
                if (o && !o.isMultiLine() && (r = this.getFoldAt(o.start.row, o.start.column, 1), r && o.isEqual(r.range))) return this.removeFold(r), r;
                if (t.siblings) {
                    var a = this.getParentFoldRangeData(e);
                    if (a.range) var l = a.range.start.row + 1, c = a.range.end.row;
                    this.foldAll(l, c, t.all ? 1e4 : 0)
                } else t.children ? (c = o ? o.end.row : this.getLength(), this.foldAll(e + 1, c, t.all ? 1e4 : 0)) : o && (t.all && (o.collapseChildren = 1e4), this.addFold("...", o));
                return o
            }
        }, this.toggleFoldWidget = function (e) {
            var t = this.selection.getCursor().row;
            t = this.getRowFoldStart(t);
            var n = this.$toggleFoldWidget(t, {});
            if (!n) {
                var i = this.getParentFoldRangeData(t, !0);
                if (n = i.range || i.firstRange) {
                    t = n.start.row;
                    var s = this.getFoldAt(t, this.getLine(t).length, 1);
                    s ? this.removeFold(s) : this.addFold("...", n)
                }
            }
        }, this.updateFoldWidgets = function (e) {
            var t = e.start.row, n = e.end.row - t;
            if (0 === n) this.foldWidgets[t] = null; else if ("remove" == e.action) this.foldWidgets.splice(t, n + 1, null); else {
                var i = Array(n + 1);
                i.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets, i)
            }
        }, this.tokenizerUpdateFoldWidgets = function (e) {
            var t = e.data;
            t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
        }
    }

    var s = e("../range").Range, r = e("./fold_line").FoldLine, o = e("./fold").Fold,
        a = e("../token_iterator").TokenIterator;
    t.Folding = i
}), define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function (e, t, n) {
    "use strict";

    function i() {
        this.findMatchingBracket = function (e, t) {
            if (0 == e.column) return null;
            var n = t || this.getLine(e.row).charAt(e.column - 1);
            if ("" == n) return null;
            var i = n.match(/([\(\[\{])|([\)\]\}])/);
            return i ? i[1] ? this.$findClosingBracket(i[1], e) : this.$findOpeningBracket(i[2], e) : null
        }, this.getBracketRange = function (e) {
            var t, n = this.getLine(e.row), i = !0, s = n.charAt(e.column - 1),
                o = s && s.match(/([\(\[\{])|([\)\]\}])/);
            if (o || (s = n.charAt(e.column), e = {
                row: e.row,
                column: e.column + 1
            }, o = s && s.match(/([\(\[\{])|([\)\]\}])/), i = !1), !o) return null;
            if (o[1]) {
                var a = this.$findClosingBracket(o[1], e);
                if (!a) return null;
                t = r.fromPoints(e, a), i || (t.end.column++, t.start.column--), t.cursor = t.end
            } else {
                var a = this.$findOpeningBracket(o[2], e);
                if (!a) return null;
                t = r.fromPoints(a, e), i || (t.start.column++, t.end.column--), t.cursor = t.start
            }
            return t
        }, this.$brackets = {
            ")": "(",
            "(": ")",
            "]": "[",
            "[": "]",
            "{": "}",
            "}": "{"
        }, this.$findOpeningBracket = function (e, t, n) {
            var i = this.$brackets[e], r = 1, o = new s(this, t.row, t.column), a = o.getCurrentToken();
            if (a || (a = o.stepForward()), a) {
                n || (n = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
                for (var l = t.column - o.getCurrentTokenColumn() - 2, c = a.value; ;) {
                    for (; l >= 0;) {
                        var h = c.charAt(l);
                        if (h == i) {
                            if (r -= 1, 0 == r) return {
                                row: o.getCurrentTokenRow(),
                                column: l + o.getCurrentTokenColumn()
                            }
                        } else h == e && (r += 1);
                        l -= 1
                    }
                    do a = o.stepBackward(); while (a && !n.test(a.type));
                    if (null == a) break;
                    c = a.value, l = c.length - 1
                }
                return null
            }
        }, this.$findClosingBracket = function (e, t, n) {
            var i = this.$brackets[e], r = 1, o = new s(this, t.row, t.column), a = o.getCurrentToken();
            if (a || (a = o.stepForward()), a) {
                n || (n = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
                for (var l = t.column - o.getCurrentTokenColumn(); ;) {
                    for (var c = a.value, h = c.length; l < h;) {
                        var u = c.charAt(l);
                        if (u == i) {
                            if (r -= 1, 0 == r) return {
                                row: o.getCurrentTokenRow(),
                                column: l + o.getCurrentTokenColumn()
                            }
                        } else u == e && (r += 1);
                        l += 1
                    }
                    do a = o.stepForward(); while (a && !n.test(a.type));
                    if (null == a) break;
                    l = 0
                }
                return null
            }
        }
    }

    var s = e("../token_iterator").TokenIterator, r = e("../range").Range;
    t.BracketMatch = i
}), define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function (e, t, n) {
    "use strict";
    var i = e("./lib/oop"), s = e("./lib/lang"), r = e("./config"), o = e("./lib/event_emitter").EventEmitter,
        a = e("./selection").Selection, l = e("./mode/text").Mode, c = e("./range").Range, h = e("./document").Document,
        u = e("./background_tokenizer").BackgroundTokenizer, d = e("./search_highlight").SearchHighlight,
        f = function (e, t) {
            this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++f.$uid, this.$foldData.toString = function () {
                return this.join("\n")
            }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof e && e.getLine || (e = new h(e)), this.setDocument(e), this.selection = new a(this), r.resetOptions(this), this.setMode(t), r._signal("session", this)
        };
    (function () {
        function e(e) {
            return !(e < 4352) && (e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510)
        }

        i.implement(this, o), this.setDocument = function (e) {
            this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
        }, this.getDocument = function () {
            return this.doc
        }, this.$resetRowCache = function (e) {
            if (!e) return this.$docRowCache = [], void (this.$screenRowCache = []);
            var t = this.$docRowCache.length, n = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
            t > n && (this.$docRowCache.splice(n, t), this.$screenRowCache.splice(n, t))
        }, this.$getRowCacheIndex = function (e, t) {
            for (var n = 0, i = e.length - 1; n <= i;) {
                var s = n + i >> 1, r = e[s];
                if (t > r) n = s + 1; else {
                    if (!(t < r)) return s;
                    i = s - 1
                }
            }
            return n - 1
        }, this.resetCaches = function () {
            this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
        }, this.onChangeFold = function (e) {
            var t = e.data;
            this.$resetRowCache(t.start.row)
        }, this.onChange = function (e) {
            this.$modified = !0, this.$resetRowCache(e.start.row);
            var t = this.$updateInternalDataOnChange(e);
            this.$fromUndo || !this.$undoManager || e.ignore || (this.$deltasDoc.push(e), t && 0 != t.length && this.$deltasFold.push({
                action: "removeFolds",
                folds: t
            }), this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(e), this._signal("change", e)
        }, this.setValue = function (e) {
            this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
        }, this.getValue = this.toString = function () {
            return this.doc.getValue()
        }, this.getSelection = function () {
            return this.selection
        }, this.getState = function (e) {
            return this.bgTokenizer.getState(e)
        }, this.getTokens = function (e) {
            return this.bgTokenizer.getTokens(e)
        }, this.getTokenAt = function (e, t) {
            var n, i = this.bgTokenizer.getTokens(e), s = 0;
            if (null == t) r = i.length - 1, s = this.getLine(e).length; else for (var r = 0; r < i.length && (s += i[r].value.length, !(s >= t)); r++) ;
            return (n = i[r]) ? (n.index = r, n.start = s - n.value.length, n) : null
        }, this.setUndoManager = function (e) {
            if (this.$undoManager = e, this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.$informUndoManager && this.$informUndoManager.cancel(), e) {
                var t = this;
                this.$syncInformUndoManager = function () {
                    t.$informUndoManager.cancel(), t.$deltasFold.length && (t.$deltas.push({
                        group: "fold",
                        deltas: t.$deltasFold
                    }), t.$deltasFold = []), t.$deltasDoc.length && (t.$deltas.push({
                        group: "doc",
                        deltas: t.$deltasDoc
                    }), t.$deltasDoc = []), t.$deltas.length > 0 && e.execute({
                        action: "aceupdate",
                        args: [t.$deltas, t],
                        merge: t.mergeUndoDeltas
                    }), t.mergeUndoDeltas = !1, t.$deltas = []
                }, this.$informUndoManager = s.delayedCall(this.$syncInformUndoManager)
            }
        }, this.markUndoGroup = function () {
            this.$syncInformUndoManager && this.$syncInformUndoManager()
        }, this.$defaultUndoManager = {
            undo: function () {
            }, redo: function () {
            }, reset: function () {
            }
        }, this.getUndoManager = function () {
            return this.$undoManager || this.$defaultUndoManager
        }, this.getTabString = function () {
            return this.getUseSoftTabs() ? s.stringRepeat(" ", this.getTabSize()) : "\t"
        }, this.setUseSoftTabs = function (e) {
            this.setOption("useSoftTabs", e)
        }, this.getUseSoftTabs = function () {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs
        }, this.setTabSize = function (e) {
            this.setOption("tabSize", e)
        }, this.getTabSize = function () {
            return this.$tabSize
        }, this.isTabStop = function (e) {
            return this.$useSoftTabs && e.column % this.$tabSize === 0
        }, this.$overwrite = !1, this.setOverwrite = function (e) {
            this.setOption("overwrite", e)
        }, this.getOverwrite = function () {
            return this.$overwrite
        }, this.toggleOverwrite = function () {
            this.setOverwrite(!this.$overwrite)
        }, this.addGutterDecoration = function (e, t) {
            this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
        }, this.removeGutterDecoration = function (e, t) {
            this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
        }, this.getBreakpoints = function () {
            return this.$breakpoints
        }, this.setBreakpoints = function (e) {
            this.$breakpoints = [];
            for (var t = 0; t < e.length; t++) this.$breakpoints[e[t]] = "ace_breakpoint";
            this._signal("changeBreakpoint", {})
        }, this.clearBreakpoints = function () {
            this.$breakpoints = [], this._signal("changeBreakpoint", {})
        }, this.setBreakpoint = function (e, t) {
            void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
        }, this.clearBreakpoint = function (e) {
            delete this.$breakpoints[e], this._signal("changeBreakpoint", {});
        }, this.addMarker = function (e, t, n, i) {
            var s = this.$markerId++, r = {
                range: e,
                type: n || "line",
                renderer: "function" == typeof n ? n : null,
                clazz: t,
                inFront: !!i,
                id: s
            };
            return i ? (this.$frontMarkers[s] = r, this._signal("changeFrontMarker")) : (this.$backMarkers[s] = r, this._signal("changeBackMarker")), s
        }, this.addDynamicMarker = function (e, t) {
            if (e.update) {
                var n = this.$markerId++;
                return e.id = n, e.inFront = !!t, t ? (this.$frontMarkers[n] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[n] = e, this._signal("changeBackMarker")), e
            }
        }, this.removeMarker = function (e) {
            var t = this.$frontMarkers[e] || this.$backMarkers[e];
            if (t) {
                var n = t.inFront ? this.$frontMarkers : this.$backMarkers;
                t && (delete n[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
            }
        }, this.getMarkers = function (e) {
            return e ? this.$frontMarkers : this.$backMarkers
        }, this.highlight = function (e) {
            if (!this.$searchHighlight) {
                var t = new d(null, "ace_selected-word", "text");
                this.$searchHighlight = this.addDynamicMarker(t)
            }
            this.$searchHighlight.setRegexp(e)
        }, this.highlightLines = function (e, t, n, i) {
            "number" != typeof t && (n = t, t = e), n || (n = "ace_step");
            var s = new c(e, 0, t, 1 / 0);
            return s.id = this.addMarker(s, n, "fullLine", i), s
        }, this.setAnnotations = function (e) {
            this.$annotations = e, this._signal("changeAnnotation", {})
        }, this.getAnnotations = function () {
            return this.$annotations || []
        }, this.clearAnnotations = function () {
            this.setAnnotations([])
        }, this.$detectNewLine = function (e) {
            var t = e.match(/^.*?(\r?\n)/m);
            t ? this.$autoNewLine = t[1] : this.$autoNewLine = "\n"
        }, this.getWordRange = function (e, t) {
            var n = this.getLine(e), i = !1;
            if (t > 0 && (i = !!n.charAt(t - 1).match(this.tokenRe)), i || (i = !!n.charAt(t).match(this.tokenRe)), i) var s = this.tokenRe; else if (/^\s+$/.test(n.slice(t - 1, t + 1))) var s = /\s/; else var s = this.nonTokenRe;
            var r = t;
            if (r > 0) {
                do r--; while (r >= 0 && n.charAt(r).match(s));
                r++
            }
            for (var o = t; o < n.length && n.charAt(o).match(s);) o++;
            return new c(e, r, e, o)
        }, this.getAWordRange = function (e, t) {
            for (var n = this.getWordRange(e, t), i = this.getLine(n.end.row); i.charAt(n.end.column).match(/[ \t]/);) n.end.column += 1;
            return n
        }, this.setNewLineMode = function (e) {
            this.doc.setNewLineMode(e)
        }, this.getNewLineMode = function () {
            return this.doc.getNewLineMode()
        }, this.setUseWorker = function (e) {
            this.setOption("useWorker", e)
        }, this.getUseWorker = function () {
            return this.$useWorker
        }, this.onReloadTokenizer = function (e) {
            var t = e.data;
            this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
        }, this.$modes = {}, this.$mode = null, this.$modeId = null, this.setMode = function (e, t) {
            if (e && "object" == typeof e) {
                if (e.getTokenizer) return this.$onChangeMode(e);
                var n = e, i = n.path
            } else i = e || "ace/mode/text";
            return this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new l), this.$modes[i] && !n ? (this.$onChangeMode(this.$modes[i]), void (t && t())) : (this.$modeId = i, r.loadModule(["mode", i], function (e) {
                return this.$modeId !== i ? t && t() : (this.$modes[i] && !n ? this.$onChangeMode(this.$modes[i]) : e && e.Mode && (e = new e.Mode(n), n || (this.$modes[i] = e, e.$id = i), this.$onChangeMode(e)), void (t && t()))
            }.bind(this)), void (this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)))
        }, this.$onChangeMode = function (e, t) {
            if (t || (this.$modeId = e.$id), this.$mode !== e) {
                this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
                var n = e.getTokenizer();
                if (void 0 !== n.addEventListener) {
                    var i = this.onReloadTokenizer.bind(this);
                    n.addEventListener("update", i)
                }
                if (this.bgTokenizer) this.bgTokenizer.setTokenizer(n); else {
                    this.bgTokenizer = new u(n);
                    var s = this;
                    this.bgTokenizer.addEventListener("update", function (e) {
                        s._signal("tokenizerUpdate", e)
                    })
                }
                this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
            }
        }, this.$stopWorker = function () {
            this.$worker && (this.$worker.terminate(), this.$worker = null)
        }, this.$startWorker = function () {
            try {
                this.$worker = this.$mode.createWorker(this)
            } catch (e) {
                r.warn("Could not load worker", e), this.$worker = null
            }
        }, this.getMode = function () {
            return this.$mode
        }, this.$scrollTop = 0, this.setScrollTop = function (e) {
            this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this._signal("changeScrollTop", e))
        }, this.getScrollTop = function () {
            return this.$scrollTop
        }, this.$scrollLeft = 0, this.setScrollLeft = function (e) {
            this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e, this._signal("changeScrollLeft", e))
        }, this.getScrollLeft = function () {
            return this.$scrollLeft
        }, this.getScreenWidth = function () {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
        }, this.getLineWidgetMaxWidth = function () {
            if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
            var e = 0;
            return this.lineWidgets.forEach(function (t) {
                t && t.screenWidth > e && (e = t.screenWidth)
            }), this.lineWidgetWidth = e
        }, this.$computeWidth = function (e) {
            if (this.$modified || e) {
                if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
                for (var t = this.doc.getAllLines(), n = this.$rowLengthCache, i = 0, s = 0, r = this.$foldData[s], o = r ? r.start.row : 1 / 0, a = t.length, l = 0; l < a; l++) {
                    if (l > o) {
                        if (l = r.end.row + 1, l >= a) break;
                        r = this.$foldData[s++], o = r ? r.start.row : 1 / 0
                    }
                    null == n[l] && (n[l] = this.$getStringScreenWidth(t[l])[0]), n[l] > i && (i = n[l])
                }
                this.screenWidth = i
            }
        }, this.getLine = function (e) {
            return this.doc.getLine(e)
        }, this.getLines = function (e, t) {
            return this.doc.getLines(e, t)
        }, this.getLength = function () {
            return this.doc.getLength()
        }, this.getTextRange = function (e) {
            return this.doc.getTextRange(e || this.selection.getRange())
        }, this.insert = function (e, t) {
            return this.doc.insert(e, t)
        }, this.remove = function (e) {
            return this.doc.remove(e)
        }, this.removeFullLines = function (e, t) {
            return this.doc.removeFullLines(e, t)
        }, this.undoChanges = function (e, t) {
            if (e.length) {
                this.$fromUndo = !0;
                for (var n = null, i = e.length - 1; i != -1; i--) {
                    var s = e[i];
                    "doc" == s.group ? (this.doc.revertDeltas(s.deltas), n = this.$getUndoSelection(s.deltas, !0, n)) : s.deltas.forEach(function (e) {
                        this.addFolds(e.folds)
                    }, this)
                }
                return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
            }
        }, this.redoChanges = function (e, t) {
            if (e.length) {
                this.$fromUndo = !0;
                for (var n = null, i = 0; i < e.length; i++) {
                    var s = e[i];
                    "doc" == s.group && (this.doc.applyDeltas(s.deltas), n = this.$getUndoSelection(s.deltas, !1, n))
                }
                return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
            }
        }, this.setUndoSelect = function (e) {
            this.$undoSelect = e
        }, this.$getUndoSelection = function (e, t, n) {
            function i(e) {
                return t ? "insert" !== e.action : "insert" === e.action
            }

            var s, r, o = e[0], a = !1;
            i(o) ? (s = c.fromPoints(o.start, o.end), a = !0) : (s = c.fromPoints(o.start, o.start), a = !1);
            for (var l = 1; l < e.length; l++) o = e[l], i(o) ? (r = o.start, s.compare(r.row, r.column) == -1 && s.setStart(r), r = o.end, 1 == s.compare(r.row, r.column) && s.setEnd(r), a = !0) : (r = o.start, s.compare(r.row, r.column) == -1 && (s = c.fromPoints(o.start, o.start)), a = !1);
            if (null != n) {
                0 === c.comparePoints(n.start, s.start) && (n.start.column += s.end.column - s.start.column, n.end.column += s.end.column - s.start.column);
                var h = n.compareRange(s);
                1 == h ? s.setStart(n.start) : h == -1 && s.setEnd(n.end)
            }
            return s
        }, this.replace = function (e, t) {
            return this.doc.replace(e, t)
        }, this.moveText = function (e, t, n) {
            var i = this.getTextRange(e), s = this.getFoldsInRange(e), r = c.fromPoints(t, t);
            if (!n) {
                this.remove(e);
                var o = e.start.row - e.end.row, a = o ? -e.end.column : e.start.column - e.end.column;
                a && (r.start.row == e.end.row && r.start.column > e.end.column && (r.start.column += a), r.end.row == e.end.row && r.end.column > e.end.column && (r.end.column += a)), o && r.start.row >= e.end.row && (r.start.row += o, r.end.row += o)
            }
            if (r.end = this.insert(r.start, i), s.length) {
                var l = e.start, h = r.start, o = h.row - l.row, a = h.column - l.column;
                this.addFolds(s.map(function (e) {
                    return e = e.clone(), e.start.row == l.row && (e.start.column += a), e.end.row == l.row && (e.end.column += a), e.start.row += o, e.end.row += o, e
                }))
            }
            return r
        }, this.indentRows = function (e, t, n) {
            n = n.replace(/\t/g, this.getTabString());
            for (var i = e; i <= t; i++) this.doc.insertInLine({row: i, column: 0}, n)
        }, this.outdentRows = function (e) {
            for (var t = e.collapseRows(), n = new c(0, 0, 0, 0), i = this.getTabSize(), s = t.start.row; s <= t.end.row; ++s) {
                var r = this.getLine(s);
                n.start.row = s, n.end.row = s;
                for (var o = 0; o < i && " " == r.charAt(o); ++o) ;
                o < i && "\t" == r.charAt(o) ? (n.start.column = o, n.end.column = o + 1) : (n.start.column = 0, n.end.column = o), this.remove(n)
            }
        }, this.$moveLines = function (e, t, n) {
            if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), n < 0) {
                var i = this.getRowFoldStart(e + n);
                if (i < 0) return 0;
                var s = i - e
            } else if (n > 0) {
                var i = this.getRowFoldEnd(t + n);
                if (i > this.doc.getLength() - 1) return 0;
                var s = i - t
            } else {
                e = this.$clipRowToDocument(e), t = this.$clipRowToDocument(t);
                var s = t - e + 1
            }
            var r = new c(e, 0, t, Number.MAX_VALUE), o = this.getFoldsInRange(r).map(function (e) {
                return e = e.clone(), e.start.row += s, e.end.row += s, e
            }), a = 0 == n ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);
            return this.doc.insertFullLines(e + s, a), o.length && this.addFolds(o), s
        }, this.moveLinesUp = function (e, t) {
            return this.$moveLines(e, t, -1)
        }, this.moveLinesDown = function (e, t) {
            return this.$moveLines(e, t, 1)
        }, this.duplicateLines = function (e, t) {
            return this.$moveLines(e, t, 0)
        }, this.$clipRowToDocument = function (e) {
            return Math.max(0, Math.min(e, this.doc.getLength() - 1))
        }, this.$clipColumnToRow = function (e, t) {
            return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t)
        }, this.$clipPositionToDocument = function (e, t) {
            if (t = Math.max(0, t), e < 0) e = 0, t = 0; else {
                var n = this.doc.getLength();
                e >= n ? (e = n - 1, t = this.doc.getLine(n - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
            }
            return {row: e, column: t}
        }, this.$clipRangeToDocument = function (e) {
            e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
            var t = this.doc.getLength() - 1;
            return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
        }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
            min: null,
            max: null
        }, this.setUseWrapMode = function (e) {
            if (e != this.$useWrapMode) {
                if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
                    var t = this.getLength();
                    this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
                }
                this._signal("changeWrapMode")
            }
        }, this.getUseWrapMode = function () {
            return this.$useWrapMode
        }, this.setWrapLimitRange = function (e, t) {
            this.$wrapLimitRange.min === e && this.$wrapLimitRange.max === t || (this.$wrapLimitRange = {
                min: e,
                max: t
            }, this.$modified = !0, this.$useWrapMode && this._signal("changeWrapMode"))
        }, this.adjustWrapLimit = function (e, t) {
            var n = this.$wrapLimitRange;
            n.max < 0 && (n = {min: t, max: t});
            var i = this.$constrainWrapLimit(e, n.min, n.max);
            return i != this.$wrapLimit && i > 1 && (this.$wrapLimit = i, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0)
        }, this.$constrainWrapLimit = function (e, t, n) {
            return t && (e = Math.max(t, e)), n && (e = Math.min(n, e)), e
        }, this.getWrapLimit = function () {
            return this.$wrapLimit
        },this.setWrapLimit = function (e) {
            this.setWrapLimitRange(e, e)
        },this.getWrapLimitRange = function () {
            return {min: this.$wrapLimitRange.min, max: this.$wrapLimitRange.max}
        },this.$updateInternalDataOnChange = function (e) {
            var t = this.$useWrapMode, n = e.action, i = e.start, s = e.end, r = i.row, o = s.row, a = o - r, l = null;
            if (this.$updating = !0, 0 != a) if ("remove" === n) {
                this[t ? "$wrapData" : "$rowLengthCache"].splice(r, a);
                var c = this.$foldData;
                l = this.getFoldsInRange(e), this.removeFolds(l);
                var h = this.getFoldLine(s.row), u = 0;
                if (h) {
                    h.addRemoveChars(s.row, s.column, i.column - s.column), h.shiftRow(-a);
                    var d = this.getFoldLine(r);
                    d && d !== h && (d.merge(h), h = d), u = c.indexOf(h) + 1
                }
                for (u; u < c.length; u++) {
                    var h = c[u];
                    h.start.row >= s.row && h.shiftRow(-a)
                }
                o = r
            } else {
                var f = Array(a);
                f.unshift(r, 0);
                var p = t ? this.$wrapData : this.$rowLengthCache;
                p.splice.apply(p, f);
                var c = this.$foldData, h = this.getFoldLine(r), u = 0;
                if (h) {
                    var g = h.range.compareInside(i.row, i.column);
                    0 == g ? (h = h.split(i.row, i.column), h && (h.shiftRow(a), h.addRemoveChars(o, 0, s.column - i.column))) : g == -1 && (h.addRemoveChars(r, 0, s.column - i.column), h.shiftRow(a)), u = c.indexOf(h) + 1
                }
                for (u; u < c.length; u++) {
                    var h = c[u];
                    h.start.row >= r && h.shiftRow(a)
                }
            } else {
                a = Math.abs(e.start.column - e.end.column), "remove" === n && (l = this.getFoldsInRange(e), this.removeFolds(l), a = -a);
                var h = this.getFoldLine(r);
                h && h.addRemoveChars(r, i.column, a)
            }
            return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, t ? this.$updateWrapData(r, o) : this.$updateRowLengthCache(r, o), l
        },this.$updateRowLengthCache = function (e, t, n) {
            this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
        },this.$updateWrapData = function (e, t) {
            var n, i, s = this.doc.getAllLines(), r = this.getTabSize(), o = this.$wrapData, l = this.$wrapLimit, c = e;
            for (t = Math.min(t, s.length - 1); c <= t;) i = this.getFoldLine(c, i), i ? (n = [], i.walk(function (e, t, i, r) {
                var o;
                if (null != e) {
                    o = this.$getDisplayTokens(e, n.length), o[0] = a;
                    for (var l = 1; l < o.length; l++) o[l] = h
                } else o = this.$getDisplayTokens(s[t].substring(r, i), n.length);
                n = n.concat(o)
            }.bind(this), i.end.row, s[i.end.row].length + 1), o[i.start.row] = this.$computeWrapSplits(n, l, r), c = i.end.row + 1) : (n = this.$getDisplayTokens(s[c]), o[c] = this.$computeWrapSplits(n, l, r), c++)
        };
        var t = 1, n = 2, a = 3, h = 4, f = 9, p = 10, g = 11, m = 12;
        this.$computeWrapSplits = function (e, t, i) {
            function s() {
                var t = 0;
                if (0 === v) return t;
                if (C) for (var n = 0; n < e.length; n++) {
                    var s = e[n];
                    if (s == p) t += 1; else {
                        if (s != g) {
                            if (s == m) continue;
                            break
                        }
                        t += i
                    }
                }
                return d && C !== !1 && (t += i), Math.min(t, v)
            }

            function r(t) {
                var n = e.slice(c, t), i = n.length;
                n.join("").replace(/12/g, function () {
                    i -= 1
                }).replace(/2/g, function () {
                    i -= 1
                }), o.length || (A = s(), o.indent = A), u += i, o.push(u), c = t
            }

            if (0 == e.length) return [];
            for (var o = [], l = e.length, c = 0, u = 0, d = this.$wrapAsCode, C = this.$indentedSoftWrap, v = t <= Math.max(2 * i, 8) || C === !1 ? 0 : Math.floor(t / 2), A = 0; l - c > t - A;) {
                var y = c + t - A;
                if (e[y - 1] >= p && e[y] >= p) r(y); else if (e[y] != a && e[y] != h) {
                    for (var E = Math.max(y - (t - (t >> 2)), c - 1); y > E && e[y] < a;) y--;
                    if (d) {
                        for (; y > E && e[y] < a;) y--;
                        for (; y > E && e[y] == f;) y--
                    } else for (; y > E && e[y] < p;) y--;
                    y > E ? r(++y) : (y = c + t, e[y] == n && y--, r(y - A))
                } else {
                    for (y; y != c - 1 && e[y] != a; y--) ;
                    if (y > c) {
                        r(y);
                        continue
                    }
                    for (y = c + t; y < e.length && e[y] == h; y++) ;
                    if (y == e.length) break;
                    r(y)
                }
            }
            return o
        }, this.$getDisplayTokens = function (i, s) {
            var r, o = [];
            s = s || 0;
            for (var a = 0; a < i.length; a++) {
                var l = i.charCodeAt(a);
                if (9 == l) {
                    r = this.getScreenTabSize(o.length + s), o.push(g);
                    for (var c = 1; c < r; c++) o.push(m)
                } else 32 == l ? o.push(p) : l > 39 && l < 48 || l > 57 && l < 64 ? o.push(f) : l >= 4352 && e(l) ? o.push(t, n) : o.push(t)
            }
            return o
        }, this.$getStringScreenWidth = function (t, n, i) {
            if (0 == n) return [0, 0];
            null == n && (n = 1 / 0), i = i || 0;
            var s, r;
            for (r = 0; r < t.length && (s = t.charCodeAt(r), i += 9 == s ? this.getScreenTabSize(i) : s >= 4352 && e(s) ? 2 : 1, !(i > n)); r++) ;
            return [i, r]
        }, this.lineWidgets = null, this.getRowLength = function (e) {
            if (this.lineWidgets) var t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0; else t = 0;
            return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
        }, this.getRowLineCount = function (e) {
            return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
        }, this.getRowWrapIndent = function (e) {
            if (this.$useWrapMode) {
                var t = this.screenToDocumentPosition(e, Number.MAX_VALUE), n = this.$wrapData[t.row];
                return n.length && n[0] < t.column ? n.indent : 0
            }
            return 0
        }, this.getScreenLastRowColumn = function (e) {
            var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
            return this.documentToScreenColumn(t.row, t.column)
        }, this.getDocumentLastRowColumn = function (e, t) {
            var n = this.documentToScreenRow(e, t);
            return this.getScreenLastRowColumn(n)
        }, this.getDocumentLastRowColumnPosition = function (e, t) {
            var n = this.documentToScreenRow(e, t);
            return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10)
        }, this.getRowSplitData = function (e) {
            return this.$useWrapMode ? this.$wrapData[e] : void 0
        }, this.getScreenTabSize = function (e) {
            return this.$tabSize - e % this.$tabSize
        }, this.screenToDocumentRow = function (e, t) {
            return this.screenToDocumentPosition(e, t).row
        }, this.screenToDocumentColumn = function (e, t) {
            return this.screenToDocumentPosition(e, t).column
        }, this.screenToDocumentPosition = function (e, t) {
            if (e < 0) return {row: 0, column: 0};
            var n, i, s = 0, r = 0, o = 0, a = 0, l = this.$screenRowCache, c = this.$getRowCacheIndex(l, e),
                h = l.length;
            if (h && c >= 0) var o = l[c], s = this.$docRowCache[c], u = e > l[h - 1]; else var u = !h;
            for (var d = this.getLength() - 1, f = this.getNextFoldLine(s), p = f ? f.start.row : 1 / 0; o <= e && (a = this.getRowLength(s), !(o + a > e || s >= d));) o += a, s++, s > p && (s = f.end.row + 1, f = this.getNextFoldLine(s, f), p = f ? f.start.row : 1 / 0), u && (this.$docRowCache.push(s), this.$screenRowCache.push(o));
            if (f && f.start.row <= s) n = this.getFoldDisplayLine(f), s = f.start.row; else {
                if (o + a <= e || s > d) return {row: d, column: this.getLine(d).length};
                n = this.getLine(s), f = null
            }
            var g = 0;
            if (this.$useWrapMode) {
                var m = this.$wrapData[s];
                if (m) {
                    var C = Math.floor(e - o);
                    i = m[C], C > 0 && m.length && (g = m.indent, r = m[C - 1] || m[m.length - 1], n = n.substring(r))
                }
            }
            return r += this.$getStringScreenWidth(n, t - g)[1], this.$useWrapMode && r >= i && (r = i - 1), f ? f.idxToPosition(r) : {
                row: s,
                column: r
            }
        }, this.documentToScreenPosition = function (e, t) {
            if ("undefined" == typeof t) var n = this.$clipPositionToDocument(e.row, e.column); else n = this.$clipPositionToDocument(e, t);
            e = n.row, t = n.column;
            var i = 0, s = null, r = null;
            r = this.getFoldAt(e, t, 1), r && (e = r.start.row, t = r.start.column);
            var o, a = 0, l = this.$docRowCache, c = this.$getRowCacheIndex(l, e), h = l.length;
            if (h && c >= 0) var a = l[c], i = this.$screenRowCache[c], u = e > l[h - 1]; else var u = !h;
            for (var d = this.getNextFoldLine(a), f = d ? d.start.row : 1 / 0; a < e;) {
                if (a >= f) {
                    if (o = d.end.row + 1, o > e) break;
                    d = this.getNextFoldLine(o, d), f = d ? d.start.row : 1 / 0
                } else o = a + 1;
                i += this.getRowLength(a), a = o, u && (this.$docRowCache.push(a), this.$screenRowCache.push(i))
            }
            var p = "";
            d && a >= f ? (p = this.getFoldDisplayLine(d, e, t), s = d.start.row) : (p = this.getLine(e).substring(0, t), s = e);
            var g = 0;
            if (this.$useWrapMode) {
                var m = this.$wrapData[s];
                if (m) {
                    for (var C = 0; p.length >= m[C];) i++, C++;
                    p = p.substring(m[C - 1] || 0, p.length), g = C > 0 ? m.indent : 0
                }
            }
            return {row: i, column: g + this.$getStringScreenWidth(p)[0]}
        }, this.documentToScreenColumn = function (e, t) {
            return this.documentToScreenPosition(e, t).column
        }, this.documentToScreenRow = function (e, t) {
            return this.documentToScreenPosition(e, t).row
        }, this.getScreenLength = function () {
            var e = 0, t = null;
            if (this.$useWrapMode) for (var n = this.$wrapData.length, i = 0, s = 0, t = this.$foldData[s++], r = t ? t.start.row : 1 / 0; i < n;) {
                var o = this.$wrapData[i];
                e += o ? o.length + 1 : 1, i++, i > r && (i = t.end.row + 1, t = this.$foldData[s++], r = t ? t.start.row : 1 / 0)
            } else {
                e = this.getLength();
                for (var a = this.$foldData, s = 0; s < a.length; s++) t = a[s], e -= t.end.row - t.start.row
            }
            return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
        }, this.$setFontMetrics = function (e) {
            this.$enableVarChar && (this.$getStringScreenWidth = function (t, n, i) {
                if (0 === n) return [0, 0];
                n || (n = 1 / 0), i = i || 0;
                var s, r;
                for (r = 0; r < t.length && (s = t.charAt(r), i += "\t" === s ? this.getScreenTabSize(i) : e.getCharacterWidth(s), !(i > n)); r++) ;
                return [i, r]
            })
        }, this.destroy = function () {
            this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
        }
    }).call(f.prototype), e("./edit_session/folding").Folding.call(f.prototype), e("./edit_session/bracket_match").BracketMatch.call(f.prototype), r.defineOptions(f.prototype, "session", {
        wrap: {
            set: function (e) {
                if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1, this.$wrap != e) if (this.$wrap = e, e) {
                    var t = "number" == typeof e ? e : null;
                    this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
                } else this.setUseWrapMode(!1)
            }, get: function () {
                return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
            }, handlesSet: !0
        }, wrapMethod: {
            set: function (e) {
                e = "auto" == e ? "text" != this.$mode.type : "text" != e, e != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$modified = !0, this.$resetRowCache(0), this.$updateWrapData(0, this.getLength() - 1)))
            }, initialValue: "auto"
        }, indentedSoftWrap: {initialValue: !0}, firstLineNumber: {
            set: function () {
                this._signal("changeBreakpoint")
            }, initialValue: 1
        }, useWorker: {
            set: function (e) {
                this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
            }, initialValue: !0
        }, useSoftTabs: {initialValue: !0}, tabSize: {
            set: function (e) {
                isNaN(e) || this.$tabSize === e || (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"))
            }, initialValue: 4, handlesSet: !0
        }, overwrite: {
            set: function (e) {
                this._signal("changeOverwrite")
            }, initialValue: !1
        }, newLineMode: {
            set: function (e) {
                this.doc.setNewLineMode(e)
            }, get: function () {
                return this.doc.getNewLineMode()
            }, handlesSet: !0
        }, mode: {
            set: function (e) {
                this.setMode(e)
            }, get: function () {
                return this.$modeId
            }
        }
    }), t.EditSession = f
}), define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
    "use strict";

    function i(e, t) {
        function n(e) {
            return /\w/.test(e) || t.regExp ? "\\b" : ""
        }

        return n(e[0]) + e + n(e[e.length - 1])
    }

    var s = e("./lib/lang"), r = e("./lib/oop"), o = e("./range").Range, a = function () {
        this.$options = {}
    };
    (function () {
        this.set = function (e) {
            return r.mixin(this.$options, e), this
        }, this.getOptions = function () {
            return s.copyObject(this.$options)
        }, this.setOptions = function (e) {
            this.$options = e
        }, this.find = function (e) {
            var t = this.$options, n = this.$matchIterator(e, t);
            if (!n) return !1;
            var i = null;
            return n.forEach(function (e, n, s) {
                if (e.start) i = e; else {
                    var r = e.offset + (s || 0);
                    if (i = new o(n, r, n, r + e.length), !e.length && t.start && t.start.start && 0 != t.skipCurrent && i.isEqual(t.start)) return i = null, !1
                }
                return !0
            }), i
        }, this.findAll = function (e) {
            var t = this.$options;
            if (!t.needle) return [];
            this.$assembleRegExp(t);
            var n = t.range, i = n ? e.getLines(n.start.row, n.end.row) : e.doc.getAllLines(), r = [], a = t.re;
            if (t.$isMultiLine) {
                var l, c = a.length, h = i.length - c;
                e:for (var u = a.offset || 0; u <= h; u++) {
                    for (var d = 0; d < c; d++) if (i[u + d].search(a[d]) == -1) continue e;
                    var f = i[u], p = i[u + c - 1], g = f.length - f.match(a[0])[0].length,
                        m = p.match(a[c - 1])[0].length;
                    l && l.end.row === u && l.end.column > g || (r.push(l = new o(u, g, u + c - 1, m)), c > 2 && (u = u + c - 2))
                }
            } else for (var C = 0; C < i.length; C++) for (var v = s.getMatchOffsets(i[C], a), d = 0; d < v.length; d++) {
                var A = v[d];
                r.push(new o(C, A.offset, C, A.offset + A.length))
            }
            if (n) {
                for (var y = n.start.column, E = n.start.column, C = 0, d = r.length - 1; C < d && r[C].start.column < y && r[C].start.row == n.start.row;) C++;
                for (; C < d && r[d].end.column > E && r[d].end.row == n.end.row;) d--;
                for (r = r.slice(C, d + 1), C = 0, d = r.length; C < d; C++) r[C].start.row += n.start.row, r[C].end.row += n.start.row
            }
            return r
        }, this.replace = function (e, t) {
            var n = this.$options, i = this.$assembleRegExp(n);
            if (n.$isMultiLine) return t;
            if (i) {
                var s = i.exec(e);
                if (!s || s[0].length != e.length) return null;
                if (t = e.replace(i, t), n.preserveCase) {
                    t = t.split("");
                    for (var r = Math.min(e.length, e.length); r--;) {
                        var o = e[r];
                        o && o.toLowerCase() != o ? t[r] = t[r].toUpperCase() : t[r] = t[r].toLowerCase()
                    }
                    t = t.join("")
                }
                return t
            }
        }, this.$matchIterator = function (e, t) {
            var n = this.$assembleRegExp(t);
            if (!n) return !1;
            var i;
            if (t.$isMultiLine) var r = n.length, a = function (t, s, a) {
                var l = t.search(n[0]);
                if (l != -1) {
                    for (var c = 1; c < r; c++) if (t = e.getLine(s + c), t.search(n[c]) == -1) return;
                    var h = t.match(n[r - 1])[0].length, u = new o(s, l, s + r - 1, h);
                    return 1 == n.offset ? (u.start.row--, u.start.column = Number.MAX_VALUE) : a && (u.start.column += a), !!i(u) || void 0
                }
            }; else if (t.backwards) var a = function (e, t, r) {
                for (var o = s.getMatchOffsets(e, n), a = o.length - 1; a >= 0; a--) if (i(o[a], t, r)) return !0
            }; else var a = function (e, t, r) {
                for (var o = s.getMatchOffsets(e, n), a = 0; a < o.length; a++) if (i(o[a], t, r)) return !0
            };
            var l = this.$lineIterator(e, t);
            return {
                forEach: function (e) {
                    i = e, l.forEach(a)
                }
            }
        }, this.$assembleRegExp = function (e, t) {
            if (e.needle instanceof RegExp) return e.re = e.needle;
            var n = e.needle;
            if (!e.needle) return e.re = !1;
            e.regExp || (n = s.escapeRegExp(n)), e.wholeWord && (n = i(n, e));
            var r = e.caseSensitive ? "gm" : "gmi";
            if (e.$isMultiLine = !t && /[\n\r]/.test(n), e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(n, r);
            try {
                var o = new RegExp(n, r)
            } catch (a) {
                o = !1
            }
            return e.re = o
        }, this.$assembleMultilineRegExp = function (e, t) {
            for (var n = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), i = [], s = 0; s < n.length; s++) try {
                i.push(new RegExp(n[s], t))
            } catch (r) {
                return !1
            }
            return "" == n[0] ? (i.shift(), i.offset = 1) : i.offset = 0, i
        }, this.$lineIterator = function (e, t) {
            var n = 1 == t.backwards, i = 0 != t.skipCurrent, s = t.range, r = t.start;
            r || (r = s ? s[n ? "end" : "start"] : e.selection.getRange()), r.start && (r = r[i != n ? "end" : "start"]);
            var o = s ? s.start.row : 0, a = s ? s.end.row : e.getLength() - 1, l = n ? function (n) {
                var i = r.row, s = e.getLine(i).substring(0, r.column);
                if (!n(s, i)) {
                    for (i--; i >= o; i--) if (n(e.getLine(i), i)) return;
                    if (0 != t.wrap) for (i = a, o = r.row; i >= o; i--) if (n(e.getLine(i), i)) return
                }
            } : function (n) {
                var i = r.row, s = e.getLine(i).substr(r.column);
                if (!n(s, i, r.column)) {
                    for (i += 1; i <= a; i++) if (n(e.getLine(i), i)) return;
                    if (0 != t.wrap) for (i = o, a = r.row; i <= a; i++) if (n(e.getLine(i), i)) return
                }
            };
            return {forEach: l}
        }
    }).call(a.prototype), t.Search = a
}), define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
    "use strict";

    function i(e, t) {
        this.platform = t || (o.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
    }

    function s(e, t) {
        i.call(this, e, t), this.$singleCommand = !1
    }

    var r = e("../lib/keys"), o = e("../lib/useragent"), a = r.KEY_MODS;
    s.prototype = i.prototype, function () {
        function e(e) {
            return "object" == typeof e && e.bindKey && e.bindKey.position || 0
        }

        this.addCommand = function (e) {
            this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
        }, this.removeCommand = function (e, t) {
            var n = e && ("string" == typeof e ? e : e.name);
            e = this.commands[n], t || delete this.commands[n];
            var i = this.commandKeyBinding;
            for (var s in i) {
                var r = i[s];
                if (r == e) delete i[s]; else if (Array.isArray(r)) {
                    var o = r.indexOf(e);
                    o != -1 && (r.splice(o, 1), 1 == r.length && (i[s] = r[0]))
                }
            }
        }, this.bindKey = function (e, t, n) {
            if ("object" == typeof e && e && (void 0 == n && (n = e.position), e = e[this.platform]), e) return "function" == typeof t ? this.addCommand({
                exec: t,
                bindKey: e,
                name: t.name || e
            }) : void e.split("|").forEach(function (e) {
                var i = "";
                if (e.indexOf(" ") != -1) {
                    var s = e.split(/\s+/);
                    e = s.pop(), s.forEach(function (e) {
                        var t = this.parseKeys(e), n = a[t.hashId] + t.key;
                        i += (i ? " " : "") + n, this._addCommandToBinding(i, "chainKeys")
                    }, this), i += " "
                }
                var r = this.parseKeys(e), o = a[r.hashId] + r.key;
                this._addCommandToBinding(i + o, t, n)
            }, this)
        }, this._addCommandToBinding = function (t, n, i) {
            var s, r = this.commandKeyBinding;
            if (n) if (!r[t] || this.$singleCommand) r[t] = n; else {
                Array.isArray(r[t]) ? (s = r[t].indexOf(n)) != -1 && r[t].splice(s, 1) : r[t] = [r[t]], "number" != typeof i && (i = i || n.isDefault ? -100 : e(n));
                var o = r[t];
                for (s = 0; s < o.length; s++) {
                    var a = o[s], l = e(a);
                    if (l > i) break
                }
                o.splice(s, 0, n)
            } else delete r[t]
        }, this.addCommands = function (e) {
            e && Object.keys(e).forEach(function (t) {
                var n = e[t];
                if (n) {
                    if ("string" == typeof n) return this.bindKey(n, t);
                    "function" == typeof n && (n = {exec: n}), "object" == typeof n && (n.name || (n.name = t), this.addCommand(n))
                }
            }, this)
        }, this.removeCommands = function (e) {
            Object.keys(e).forEach(function (t) {
                this.removeCommand(e[t])
            }, this)
        }, this.bindKeys = function (e) {
            Object.keys(e).forEach(function (t) {
                this.bindKey(t, e[t])
            }, this)
        }, this._buildKeyHash = function (e) {
            this.bindKey(e.bindKey, e)
        }, this.parseKeys = function (e) {
            var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function (e) {
                return e
            }), n = t.pop(), i = r[n];
            if (r.FUNCTION_KEYS[i]) n = r.FUNCTION_KEYS[i].toLowerCase(); else {
                if (!t.length) return {key: n, hashId: -1};
                if (1 == t.length && "shift" == t[0]) return {key: n.toUpperCase(), hashId: -1}
            }
            for (var s = 0, o = t.length; o--;) {
                var a = r.KEY_MODS[t[o]];
                if (null == a) return "undefined" != typeof console && console.error("invalid modifier " + t[o] + " in " + e), !1;
                s |= a
            }
            return {key: n, hashId: s}
        }, this.findKeyCommand = function (e, t) {
            var n = a[e] + t;
            return this.commandKeyBinding[n]
        }, this.handleKeyboard = function (e, t, n, i) {
            if (!(i < 0)) {
                var s = a[t] + n, r = this.commandKeyBinding[s];
                return e.$keyChain && (e.$keyChain += " " + s, r = this.commandKeyBinding[e.$keyChain] || r), !r || "chainKeys" != r && "chainKeys" != r[r.length - 1] ? (e.$keyChain && (t && 4 != t || 1 != n.length ? (t == -1 || i > 0) && (e.$keyChain = "") : e.$keyChain = e.$keyChain.slice(0, -s.length - 1)), {command: r}) : (e.$keyChain = e.$keyChain || s, {command: "null"})
            }
        }, this.getStatusText = function (e, t) {
            return t.$keyChain || ""
        }
    }.call(i.prototype), t.HashHandler = i, t.MultiHashHandler = s
}), define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var i = e("../lib/oop"), s = e("../keyboard/hash_handler").MultiHashHandler,
        r = e("../lib/event_emitter").EventEmitter, o = function (e, t) {
            s.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", function (e) {
                return e.command.exec(e.editor, e.args || {})
            })
        };
    i.inherits(o, s), function () {
        i.implement(this, r), this.exec = function (e, t, n) {
            if (Array.isArray(e)) {
                for (var i = e.length; i--;) if (this.exec(e[i], t, n)) return !0;
                return !1
            }
            if ("string" == typeof e && (e = this.commands[e]), !e) return !1;
            if (t && t.$readOnly && !e.readOnly) return !1;
            var s = {editor: t, command: e, args: n};
            return s.returnValue = this._emit("exec", s), this._signal("afterExec", s), s.returnValue !== !1
        }, this.toggleRecording = function (e) {
            if (!this.$inReplay) return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (e) {
                this.macro.push([e.command, e.args])
            }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0)
        }, this.replay = function (e) {
            if (!this.$inReplay && this.macro) {
                if (this.recording) return this.toggleRecording(e);
                try {
                    this.$inReplay = !0, this.macro.forEach(function (t) {
                        "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
                    }, this)
                } finally {
                    this.$inReplay = !1
                }
            }
        }, this.trimMacro = function (e) {
            return e.map(function (e) {
                return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
            })
        }
    }.call(o.prototype), t.CommandManager = o
}), define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function (e, t, n) {
    "use strict";

    function i(e, t) {
        return {win: e, mac: t}
    }

    var s = e("../lib/lang"), r = e("../config"), o = e("../range").Range;
    t.commands = [{
        name: "showSettingsMenu", bindKey: i("Ctrl-,", "Command-,"), exec: function (e) {
            r.loadModule("ace/ext/settings_menu", function (t) {
                t.init(e), e.showSettingsMenu()
            })
        }, readOnly: !0
    }, {
        name: "goToNextError", bindKey: i("Alt-E", "F4"), exec: function (e) {
            r.loadModule("ace/ext/error_marker", function (t) {
                t.showErrorMarker(e, 1)
            })
        }, scrollIntoView: "animate", readOnly: !0
    }, {
        name: "goToPreviousError", bindKey: i("Alt-Shift-E", "Shift-F4"), exec: function (e) {
            r.loadModule("ace/ext/error_marker", function (t) {
                t.showErrorMarker(e, -1)
            })
        }, scrollIntoView: "animate", readOnly: !0
    }, {
        name: "selectall", bindKey: i("Ctrl-A", "Command-A"), exec: function (e) {
            e.selectAll()
        }, readOnly: !0
    }, {
        name: "centerselection", bindKey: i(null, "Ctrl-L"), exec: function (e) {
            e.centerSelection()
        }, readOnly: !0
    }, {
        name: "gotoline", bindKey: i("Ctrl-L", "Command-L"), exec: function (e) {
            var t = parseInt(prompt("Enter line number:"), 10);
            isNaN(t) || e.gotoLine(t)
        }, readOnly: !0
    }, {
        name: "fold", bindKey: i("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"), exec: function (e) {
            e.session.toggleFold(!1)
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
    }, {
        name: "unfold",
        bindKey: i("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
        exec: function (e) {
            e.session.toggleFold(!0)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "toggleFoldWidget", bindKey: i("F2", "F2"), exec: function (e) {
            e.session.toggleFoldWidget()
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
    }, {
        name: "toggleParentFoldWidget", bindKey: i("Alt-F2", "Alt-F2"), exec: function (e) {
            e.session.toggleFoldWidget(!0)
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
    }, {
        name: "foldall", bindKey: i(null, "Ctrl-Command-Option-0"), exec: function (e) {
            e.session.foldAll()
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "foldOther", bindKey: i("Alt-0", "Command-Option-0"), exec: function (e) {
            e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "unfoldall", bindKey: i("Alt-Shift-0", "Command-Option-Shift-0"), exec: function (e) {
            e.session.unfold()
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "findnext", bindKey: i("Ctrl-K", "Command-G"), exec: function (e) {
            e.findNext()
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
    }, {
        name: "findprevious", bindKey: i("Ctrl-Shift-K", "Command-Shift-G"), exec: function (e) {
            e.findPrevious()
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
    }, {
        name: "selectOrFindNext", bindKey: i("Alt-K", "Ctrl-G"), exec: function (e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
        }, readOnly: !0
    }, {
        name: "selectOrFindPrevious", bindKey: i("Alt-Shift-K", "Ctrl-Shift-G"), exec: function (e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
        }, readOnly: !0
    }, {
        name: "find", bindKey: i("Ctrl-F", "Command-F"), exec: function (e) {
            r.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e)
            })
        }, readOnly: !0
    }, {
        name: "overwrite", bindKey: "Insert", exec: function (e) {
            e.toggleOverwrite()
        }, readOnly: !0
    }, {
        name: "selecttostart",
        bindKey: i("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
        exec: function (e) {
            e.getSelection().selectFileStart()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "gotostart", bindKey: i("Ctrl-Home", "Command-Home|Command-Up"), exec: function (e) {
            e.navigateFileStart()
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
    }, {
        name: "selectup", bindKey: i("Shift-Up", "Shift-Up|Ctrl-Shift-P"), exec: function (e) {
            e.getSelection().selectUp()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "golineup", bindKey: i("Up", "Up|Ctrl-P"), exec: function (e, t) {
            e.navigateUp(t.times)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selecttoend", bindKey: i("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"), exec: function (e) {
            e.getSelection().selectFileEnd()
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
    }, {
        name: "gotoend", bindKey: i("Ctrl-End", "Command-End|Command-Down"), exec: function (e) {
            e.navigateFileEnd()
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
    }, {
        name: "selectdown", bindKey: i("Shift-Down", "Shift-Down|Ctrl-Shift-N"), exec: function (e) {
            e.getSelection().selectDown()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "golinedown", bindKey: i("Down", "Down|Ctrl-N"), exec: function (e, t) {
            e.navigateDown(t.times)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectwordleft", bindKey: i("Ctrl-Shift-Left", "Option-Shift-Left"), exec: function (e) {
            e.getSelection().selectWordLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotowordleft", bindKey: i("Ctrl-Left", "Option-Left"), exec: function (e) {
            e.navigateWordLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selecttolinestart", bindKey: i("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"), exec: function (e) {
            e.getSelection().selectLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotolinestart", bindKey: i("Alt-Left|Home", "Command-Left|Home|Ctrl-A"), exec: function (e) {
            e.navigateLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectleft", bindKey: i("Shift-Left", "Shift-Left|Ctrl-Shift-B"), exec: function (e) {
            e.getSelection().selectLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotoleft", bindKey: i("Left", "Left|Ctrl-B"), exec: function (e, t) {
            e.navigateLeft(t.times)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectwordright", bindKey: i("Ctrl-Shift-Right", "Option-Shift-Right"), exec: function (e) {
            e.getSelection().selectWordRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotowordright", bindKey: i("Ctrl-Right", "Option-Right"), exec: function (e) {
            e.navigateWordRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selecttolineend",
        bindKey: i("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
        exec: function (e) {
            e.getSelection().selectLineEnd()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotolineend", bindKey: i("Alt-Right|End", "Command-Right|End|Ctrl-E"), exec: function (e) {
            e.navigateLineEnd()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectright", bindKey: i("Shift-Right", "Shift-Right"), exec: function (e) {
            e.getSelection().selectRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotoright", bindKey: i("Right", "Right|Ctrl-F"), exec: function (e, t) {
            e.navigateRight(t.times)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectpagedown", bindKey: "Shift-PageDown", exec: function (e) {
            e.selectPageDown()
        }, readOnly: !0
    }, {
        name: "pagedown", bindKey: i(null, "Option-PageDown"), exec: function (e) {
            e.scrollPageDown()
        }, readOnly: !0
    }, {
        name: "gotopagedown", bindKey: i("PageDown", "PageDown|Ctrl-V"), exec: function (e) {
            e.gotoPageDown()
        }, readOnly: !0
    }, {
        name: "selectpageup", bindKey: "Shift-PageUp", exec: function (e) {
            e.selectPageUp()
        }, readOnly: !0
    }, {
        name: "pageup", bindKey: i(null, "Option-PageUp"), exec: function (e) {
            e.scrollPageUp()
        }, readOnly: !0
    }, {
        name: "gotopageup", bindKey: "PageUp", exec: function (e) {
            e.gotoPageUp()
        }, readOnly: !0
    }, {
        name: "scrollup", bindKey: i("Ctrl-Up", null), exec: function (e) {
            e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
        }, readOnly: !0
    }, {
        name: "scrolldown", bindKey: i("Ctrl-Down", null), exec: function (e) {
            e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
        }, readOnly: !0
    }, {
        name: "selectlinestart", bindKey: "Shift-Home", exec: function (e) {
            e.getSelection().selectLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectlineend", bindKey: "Shift-End", exec: function (e) {
            e.getSelection().selectLineEnd()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "togglerecording", bindKey: i("Ctrl-Alt-E", "Command-Option-E"), exec: function (e) {
            e.commands.toggleRecording(e)
        }, readOnly: !0
    }, {
        name: "replaymacro", bindKey: i("Ctrl-Shift-E", "Command-Shift-E"), exec: function (e) {
            e.commands.replay(e)
        }, readOnly: !0
    }, {
        name: "jumptomatching", bindKey: i("Ctrl-P", "Ctrl-P"), exec: function (e) {
            e.jumpToMatching()
        }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0
    }, {
        name: "selecttomatching", bindKey: i("Ctrl-Shift-P", "Ctrl-Shift-P"), exec: function (e) {
            e.jumpToMatching(!0)
        }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0
    }, {
        name: "expandToMatching", bindKey: i("Ctrl-Shift-M", "Ctrl-Shift-M"), exec: function (e) {
            e.jumpToMatching(!0, !0)
        }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0
    }, {
        name: "passKeysToBrowser", bindKey: i(null, null), exec: function () {
        }, passEvent: !0, readOnly: !0
    }, {
        name: "copy", exec: function (e) {
        }, readOnly: !0
    }, {
        name: "cut", exec: function (e) {
            var t = e.getSelectionRange();
            e._emit("cut", t), e.selection.isEmpty() || (e.session.remove(t), e.clearSelection())
        }, scrollIntoView: "cursor", multiSelectAction: "forEach"
    }, {
        name: "paste", exec: function (e, t) {
            e.$handlePaste(t)
        }, scrollIntoView: "cursor"
    }, {
        name: "removeline", bindKey: i("Ctrl-D", "Command-D"), exec: function (e) {
            e.removeLines()
        }, scrollIntoView: "cursor", multiSelectAction: "forEachLine"
    }, {
        name: "duplicateSelection", bindKey: i("Ctrl-Shift-D", "Command-Shift-D"), exec: function (e) {
            e.duplicateSelection()
        }, scrollIntoView: "cursor", multiSelectAction: "forEach"
    }, {
        name: "sortlines", bindKey: i("Ctrl-Alt-S", "Command-Alt-S"), exec: function (e) {
            e.sortLines()
        }, scrollIntoView: "selection", multiSelectAction: "forEachLine"
    }, {
        name: "togglecomment", bindKey: i("Ctrl-/", "Command-/"), exec: function (e) {
            e.toggleCommentLines()
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
    }, {
        name: "toggleBlockComment", bindKey: i("Ctrl-Shift-/", "Command-Shift-/"), exec: function (e) {
            e.toggleBlockComment()
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
    }, {
        name: "modifyNumberUp", bindKey: i("Ctrl-Shift-Up", "Alt-Shift-Up"), exec: function (e) {
            e.modifyNumber(1)
        }, scrollIntoView: "cursor", multiSelectAction: "forEach"
    }, {
        name: "modifyNumberDown", bindKey: i("Ctrl-Shift-Down", "Alt-Shift-Down"), exec: function (e) {
            e.modifyNumber(-1)
        }, scrollIntoView: "cursor", multiSelectAction: "forEach"
    }, {
        name: "replace", bindKey: i("Ctrl-H", "Command-Option-F"), exec: function (e) {
            r.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e, !0)
            })
        }
    }, {
        name: "undo", bindKey: i("Ctrl-Z", "Command-Z"), exec: function (e) {
            e.undo()
        }
    }, {
        name: "redo", bindKey: i("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"), exec: function (e) {
            e.redo()
        }
    }, {
        name: "copylinesup", bindKey: i("Alt-Shift-Up", "Command-Option-Up"), exec: function (e) {
            e.copyLinesUp()
        }, scrollIntoView: "cursor"
    }, {
        name: "movelinesup", bindKey: i("Alt-Up", "Option-Up"), exec: function (e) {
            e.moveLinesUp()
        }, scrollIntoView: "cursor"
    }, {
        name: "copylinesdown", bindKey: i("Alt-Shift-Down", "Command-Option-Down"), exec: function (e) {
            e.copyLinesDown()
        }, scrollIntoView: "cursor"
    }, {
        name: "movelinesdown", bindKey: i("Alt-Down", "Option-Down"), exec: function (e) {
            e.moveLinesDown()
        }, scrollIntoView: "cursor"
    }, {
        name: "del", bindKey: i("Delete", "Delete|Ctrl-D|Shift-Delete"), exec: function (e) {
            e.remove("right")
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "backspace",
        bindKey: i("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
        exec: function (e) {
            e.remove("left")
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "cut_or_delete", bindKey: i("Shift-Delete", null), exec: function (e) {
            return !!e.selection.isEmpty() && void e.remove("left")
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removetolinestart", bindKey: i("Alt-Backspace", "Command-Backspace"), exec: function (e) {
            e.removeToLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removetolineend", bindKey: i("Alt-Delete", "Ctrl-K"), exec: function (e) {
            e.removeToLineEnd()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removewordleft", bindKey: i("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"), exec: function (e) {
            e.removeWordLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removewordright", bindKey: i("Ctrl-Delete", "Alt-Delete"), exec: function (e) {
            e.removeWordRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "outdent", bindKey: i("Shift-Tab", "Shift-Tab"), exec: function (e) {
            e.blockOutdent()
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
    }, {
        name: "indent", bindKey: i("Tab", "Tab"), exec: function (e) {
            e.indent()
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
    }, {
        name: "blockoutdent", bindKey: i("Ctrl-[", "Ctrl-["), exec: function (e) {
            e.blockOutdent()
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
    }, {
        name: "blockindent", bindKey: i("Ctrl-]", "Ctrl-]"), exec: function (e) {
            e.blockIndent()
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
    }, {
        name: "insertstring", exec: function (e, t) {
            e.insert(t)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "inserttext", exec: function (e, t) {
            e.insert(s.stringRepeat(t.text || "", t.times || 1))
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "splitline", bindKey: i(null, "Ctrl-O"), exec: function (e) {
            e.splitLine()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "transposeletters", bindKey: i("Ctrl-T", "Ctrl-T"), exec: function (e) {
            e.transposeLetters()
        }, multiSelectAction: function (e) {
            e.transposeSelections(1)
        }, scrollIntoView: "cursor"
    }, {
        name: "touppercase", bindKey: i("Ctrl-U", "Ctrl-U"), exec: function (e) {
            e.toUpperCase()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "tolowercase", bindKey: i("Ctrl-Shift-U", "Ctrl-Shift-U"), exec: function (e) {
            e.toLowerCase()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "expandtoline", bindKey: i("Ctrl-Shift-L", "Command-Shift-L"), exec: function (e) {
            var t = e.selection.getRange();
            t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "joinlines", bindKey: i(null, null), exec: function (e) {
            for (var t = e.selection.isBackwards(), n = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), i = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), r = e.session.doc.getLine(n.row).length, a = e.session.doc.getTextRange(e.selection.getRange()), l = a.replace(/\n\s*/, " ").length, c = e.session.doc.getLine(n.row), h = n.row + 1; h <= i.row + 1; h++) {
                var u = s.stringTrimLeft(s.stringTrimRight(e.session.doc.getLine(h)));
                0 !== u.length && (u = " " + u), c += u
            }
            i.row + 1 < e.session.doc.getLength() - 1 && (c += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new o(n.row, 0, i.row + 2, 0), c), l > 0 ? (e.selection.moveCursorTo(n.row, n.column), e.selection.selectTo(n.row, n.column + l)) : (r = e.session.doc.getLine(n.row).length > r ? r + 1 : r, e.selection.moveCursorTo(n.row, r))
        }, multiSelectAction: "forEach", readOnly: !0
    }, {
        name: "invertSelection", bindKey: i(null, null), exec: function (e) {
            var t = e.session.doc.getLength() - 1, n = e.session.doc.getLine(t).length,
                i = e.selection.rangeList.ranges, s = [];
            i.length < 1 && (i = [e.selection.getRange()]);
            for (var r = 0; r < i.length; r++) r == i.length - 1 && (i[r].end.row === t && i[r].end.column === n || s.push(new o(i[r].end.row, i[r].end.column, t, n))), 0 === r ? 0 === i[r].start.row && 0 === i[r].start.column || s.push(new o(0, 0, i[r].start.row, i[r].start.column)) : s.push(new o(i[r - 1].end.row, i[r - 1].end.column, i[r].start.row, i[r].start.column));
            e.exitMultiSelectMode(), e.clearSelection();
            for (var r = 0; r < s.length; r++) e.selection.addRange(s[r], !1)
        }, readOnly: !0, scrollIntoView: "none"
    }]
}), define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator"], function (e, t, n) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var i = e("./lib/oop"), s = e("./lib/dom"), r = e("./lib/lang"), o = e("./lib/useragent"),
        a = e("./keyboard/textinput").TextInput, l = e("./mouse/mouse_handler").MouseHandler,
        c = e("./mouse/fold_handler").FoldHandler, h = e("./keyboard/keybinding").KeyBinding,
        u = e("./edit_session").EditSession, d = e("./search").Search, f = e("./range").Range,
        p = e("./lib/event_emitter").EventEmitter, g = e("./commands/command_manager").CommandManager,
        m = e("./commands/default_commands").commands, C = e("./config"), v = e("./token_iterator").TokenIterator,
        A = function (e, t) {
            var n = e.getContainerElement();
            this.container = n, this.renderer = e, this.commands = new g(o.isMac ? "mac" : "win", m), this.textInput = new a(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.keyBinding = new h(this), this.$mouseHandler = new l(this), new c(this), this.$blockScrolling = 0, this.$search = (new d).set({wrap: !0}), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = r.delayedCall(function () {
                this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
            }.bind(this)), this.on("change", function (e, t) {
                t._$emitInputEvent.schedule(31)
            }), this.setSession(t || new u("")), C.resetOptions(this), C._signal("editor", this)
        };
    (function () {
        i.implement(this, p), this.$initOperationListeners = function () {
            this.selections = [], this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = r.delayedCall(this.endOperation.bind(this)), this.on("change", function () {
                this.curOp || this.startOperation(), this.curOp.docChanged = !0
            }.bind(this), !0), this.on("changeSelection", function () {
                this.curOp || this.startOperation(), this.curOp.selectionChanged = !0
            }.bind(this), !0)
        }, this.curOp = null, this.prevOp = {}, this.startOperation = function (e) {
            if (this.curOp) {
                if (!e || this.curOp.command) return;
                this.prevOp = this.curOp
            }
            e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = {
                command: e.command || {},
                args: e.args,
                scrollTop: this.renderer.scrollTop
            }, this.curOp.command.name && void 0 !== this.curOp.command.scrollIntoView && this.$blockScrolling++
        }, this.endOperation = function (e) {
            if (this.curOp) {
                if (e && e.returnValue === !1) return this.curOp = null;
                this._signal("beforeEndOperation");
                var t = this.curOp.command;
                t.name && this.$blockScrolling > 0 && this.$blockScrolling--;
                var n = t && t.scrollIntoView;
                if (n) {
                    switch (n) {
                        case"center-animate":
                            n = "animate";
                        case"center":
                            this.renderer.scrollCursorIntoView(null, .5);
                            break;
                        case"animate":
                        case"cursor":
                            this.renderer.scrollCursorIntoView();
                            break;
                        case"selectionPart":
                            var i = this.selection.getRange(), s = this.renderer.layerConfig;
                            (i.start.row >= s.lastRow || i.end.row <= s.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                    }
                    "animate" == n && this.renderer.animateScrolling(this.curOp.scrollTop)
                }
                this.prevOp = this.curOp, this.curOp = null
            }
        }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function (e) {
            if (this.$mergeUndoDeltas) {
                var t = this.prevOp, n = this.$mergeableCommands, i = t.command && e.command.name == t.command.name;
                if ("insertstring" == e.command.name) {
                    var s = e.args;
                    void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), i = i && this.mergeNextCommand && (!/\s/.test(s) || /\s/.test(t.args)), this.mergeNextCommand = !0
                } else i = i && n.indexOf(e.command.name) !== -1;
                "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (i = !1), i ? this.session.mergeUndoDeltas = !0 : n.indexOf(e.command.name) !== -1 && (this.sequenceStartTime = Date.now())
            }
        }, this.setKeyboardHandler = function (e, t) {
            if (e && "string" == typeof e) {
                this.$keybindingId = e;
                var n = this;
                C.loadModule(["keybinding", e], function (i) {
                    n.$keybindingId == e && n.keyBinding.setKeyboardHandler(i && i.handler), t && t()
                })
            } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t()
        }, this.getKeyboardHandler = function () {
            return this.keyBinding.getKeyboardHandler()
        }, this.setSession = function (e) {
            if (this.session != e) {
                this.curOp && this.endOperation(), this.curOp = {};
                var t = this.session;
                if (t) {
                    this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                    var n = this.session.getSelection();
                    n.off("changeCursor", this.$onCursorChange), n.off("changeSelection", this.$onSelectionChange)
                }
                this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.on("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.$blockScrolling += 1, this.onCursorChange(), this.$blockScrolling -= 1, this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {
                    session: e,
                    oldSession: t
                }), this.curOp = null, t && t._signal("changeEditor", {oldEditor: this}), e && e._signal("changeEditor", {editor: this})
            }
        }, this.getSession = function () {
            return this.session
        }, this.setValue = function (e, t) {
            return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : t == -1 && this.navigateFileStart() : this.selectAll(), e
        }, this.getValue = function () {
            return this.session.getValue()
        }, this.getSelection = function () {
            return this.selection
        }, this.resize = function (e) {
            this.renderer.onResize(e)
        }, this.setTheme = function (e, t) {
            this.renderer.setTheme(e, t)
        }, this.getTheme = function () {
            return this.renderer.getTheme()
        }, this.setStyle = function (e) {
            this.renderer.setStyle(e)
        }, this.unsetStyle = function (e) {
            this.renderer.unsetStyle(e)
        }, this.getFontSize = function () {
            return this.getOption("fontSize") || s.computedStyle(this.container, "fontSize")
        }, this.setFontSize = function (e) {
            this.setOption("fontSize", e)
        }, this.$highlightBrackets = function () {
            if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null), !this.$highlightPending) {
                var e = this;
                this.$highlightPending = !0, setTimeout(function () {
                    e.$highlightPending = !1;
                    var t = e.session;
                    if (t && t.bgTokenizer) {
                        var n = t.findMatchingBracket(e.getCursorPosition());
                        if (n) var i = new f(n.row, n.column, n.row, n.column + 1); else if (t.$mode.getMatching) var i = t.$mode.getMatching(e.session);
                        i && (t.$bracketHighlight = t.addMarker(i, "ace_bracket", "text"))
                    }
                }, 50)
            }
        }, this.$highlightTags = function () {
            if (!this.$highlightTagPending) {
                var e = this;
                this.$highlightTagPending = !0, setTimeout(function () {
                    e.$highlightTagPending = !1;
                    var t = e.session;
                    if (t && t.bgTokenizer) {
                        var n = e.getCursorPosition(), i = new v(e.session, n.row, n.column), s = i.getCurrentToken();
                        if (!s || !/\b(?:tag-open|tag-name)/.test(s.type)) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                        if (s.type.indexOf("tag-open") == -1 || (s = i.stepForward())) {
                            var r = s.value, o = 0, a = i.stepBackward();
                            if ("<" == a.value) {
                                do a = s, s = i.stepForward(), s && s.value === r && s.type.indexOf("tag-name") !== -1 && ("<" === a.value ? o++ : "</" === a.value && o--); while (s && o >= 0)
                            } else {
                                do s = a, a = i.stepBackward(), s && s.value === r && s.type.indexOf("tag-name") !== -1 && ("<" === a.value ? o++ : "</" === a.value && o--); while (a && o <= 0);
                                i.stepForward()
                            }
                            if (!s) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                            var l = i.getCurrentTokenRow(), c = i.getCurrentTokenColumn(),
                                h = new f(l, c, l, c + s.value.length), u = t.$backMarkers[t.$tagHighlight];
                            t.$tagHighlight && void 0 != u && 0 !== h.compareRange(u.range) && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), h && !t.$tagHighlight && (t.$tagHighlight = t.addMarker(h, "ace_bracket", "text"))
                        }
                    }
                }, 50)
            }
        }, this.focus = function () {
            var e = this;
            setTimeout(function () {
                e.textInput.focus()
            }), this.textInput.focus()
        }, this.isFocused = function () {
            return this.textInput.isFocused()
        }, this.blur = function () {
            this.textInput.blur()
        }, this.onFocus = function (e) {
            this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e))
        }, this.onBlur = function (e) {
            this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e))
        }, this.$cursorChange = function () {
            this.renderer.updateCursor()
        }, this.onDocumentChange = function (e) {
            var t = this.session.$useWrapMode, n = e.start.row == e.end.row ? e.end.row : 1 / 0;
            this.renderer.updateLines(e.start.row, n, t), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine()
        }, this.onTokenizerUpdate = function (e) {
            var t = e.data;
            this.renderer.updateLines(t.first, t.last)
        }, this.onScrollTopChange = function () {
            this.renderer.scrollToY(this.session.getScrollTop())
        }, this.onScrollLeftChange = function () {
            this.renderer.scrollToX(this.session.getScrollLeft())
        }, this.onCursorChange = function () {
            this.$cursorChange(), this.$blockScrolling || (C.warn("Automatically scrolling cursor into view after selection change", "this will be disabled in the next version", "set editor.$blockScrolling = Infinity to disable this message"), this.renderer.scrollCursorIntoView()), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
        }, this.$updateHighlightActiveLine = function () {
            var e, t = this.getSession();
            if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()), !this.renderer.$maxLines || 1 !== this.session.getLength() || this.renderer.$minLines > 1 || (e = !1)), t.$highlightLineMarker && !e) t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null; else if (!t.$highlightLineMarker && e) {
                var n = new f(e.row, e.column, e.row, 1 / 0);
                n.id = t.addMarker(n, "ace_active-line", "screenLine"), t.$highlightLineMarker = n
            } else e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t.$highlightLineMarker.start.column = e.column, t._signal("changeBackMarker"))
        }, this.onSelectionChange = function (e) {
            var t = this.session;
            if (t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine(); else {
                var n = this.selection.getRange(), i = this.getSelectionStyle();
                t.$selectionMarker = t.addMarker(n, "ace_selection", i)
            }
            var s = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(s), this._signal("changeSelection")
        }, this.$getSelectionHighLightRegexp = function () {
            var e = this.session, t = this.getSelectionRange();
            if (!t.isEmpty() && !t.isMultiLine()) {
                var n = t.start.column - 1, i = t.end.column + 1, s = e.getLine(t.start.row), r = s.length,
                    o = s.substring(Math.max(n, 0), Math.min(i, r));
                if (!(n >= 0 && /^[\w\d]/.test(o) || i <= r && /[\w\d]$/.test(o)) && (o = s.substring(t.start.column, t.end.column), /^[\w\d]+$/.test(o))) {
                    var a = this.$search.$assembleRegExp({wholeWord: !0, caseSensitive: !0, needle: o});
                    return a
                }
            }
        }, this.onChangeFrontMarker = function () {
            this.renderer.updateFrontMarkers()
        }, this.onChangeBackMarker = function () {
            this.renderer.updateBackMarkers()
        }, this.onChangeBreakpoint = function () {
            this.renderer.updateBreakpoints()
        }, this.onChangeAnnotation = function () {
            this.renderer.setAnnotations(this.session.getAnnotations())
        }, this.onChangeMode = function (e) {
            this.renderer.updateText(), this._emit("changeMode", e)
        }, this.onChangeWrapLimit = function () {
            this.renderer.updateFull()
        }, this.onChangeWrapMode = function () {
            this.renderer.onResize(!0)
        }, this.onChangeFold = function () {
            this.$updateHighlightActiveLine(), this.renderer.updateFull()
        }, this.getSelectedText = function () {
            return this.session.getTextRange(this.getSelectionRange())
        }, this.getCopyText = function () {
            var e = this.getSelectedText();
            return this._signal("copy", e), e
        }, this.onCopy = function () {
            this.commands.exec("copy", this)
        }, this.onCut = function () {
            this.commands.exec("cut", this)
        }, this.onPaste = function (e, t) {
            var n = {text: e, event: t};
            this.commands.exec("paste", this, n)
        }, this.$handlePaste = function (e) {
            "string" == typeof e && (e = {text: e}), this._signal("paste", e);
            var t = e.text;
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode) this.insert(t); else {
                var n = t.split(/\r\n|\r|\n/), i = this.selection.rangeList.ranges;
                if (n.length > i.length || n.length < 2 || !n[1]) return this.commands.exec("insertstring", this, t);
                for (var s = i.length; s--;) {
                    var r = i[s];
                    r.isEmpty() || this.session.remove(r), this.session.insert(r.start, n[s])
                }
            }
        }, this.execCommand = function (e, t) {
            return this.commands.exec(e, this, t)
        }, this.insert = function (e, t) {
            var n = this.session, i = n.getMode(), s = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !t) {
                var r = i.transformAction(n.getState(s.row), "insertion", this, n, e);
                r && (e !== r.text && (this.session.mergeUndoDeltas = !1, this.$mergeNextCommand = !1), e = r.text)
            }
            if ("\t" == e && (e = this.session.getTabString()), this.selection.isEmpty()) {
                if (this.session.getOverwrite()) {
                    var o = new f.fromPoints(s, s);
                    o.end.column += e.length, this.session.remove(o)
                }
            } else {
                var o = this.getSelectionRange();
                s = this.session.remove(o), this.clearSelection()
            }
            if ("\n" == e || "\r\n" == e) {
                var a = n.getLine(s.row);
                if (s.column > a.search(/\S|$/)) {
                    var l = a.substr(s.column).search(/\S|$/);
                    n.doc.removeInLine(s.row, s.column, s.column + l)
                }
            }
            this.clearSelection();
            var c = s.column, h = n.getState(s.row), a = n.getLine(s.row), u = i.checkOutdent(h, a, e);
            n.insert(s, e);
            if (r && r.selection && (2 == r.selection.length ? this.selection.setSelectionRange(new f(s.row, c + r.selection[0], s.row, c + r.selection[1])) : this.selection.setSelectionRange(new f(s.row + r.selection[0], r.selection[1], s.row + r.selection[2], r.selection[3]))), n.getDocument().isNewLine(e)) {
                var d = i.getNextLineIndent(h, a.slice(0, s.column), n.getTabString());
                n.insert({row: s.row + 1, column: 0}, d)
            }
            u && i.autoOutdent(h, n, s.row)
        }, this.onTextInput = function (e) {
            this.keyBinding.onTextInput(e)
        }, this.onCommandKey = function (e, t, n) {
            this.keyBinding.onCommandKey(e, t, n)
        }, this.setOverwrite = function (e) {
            this.session.setOverwrite(e)
        }, this.getOverwrite = function () {
            return this.session.getOverwrite()
        }, this.toggleOverwrite = function () {
            this.session.toggleOverwrite()
        }, this.setScrollSpeed = function (e) {
            this.setOption("scrollSpeed", e)
        }, this.getScrollSpeed = function () {
            return this.getOption("scrollSpeed")
        }, this.setDragDelay = function (e) {
            this.setOption("dragDelay", e)
        }, this.getDragDelay = function () {
            return this.getOption("dragDelay")
        }, this.setSelectionStyle = function (e) {
            this.setOption("selectionStyle", e)
        }, this.getSelectionStyle = function () {
            return this.getOption("selectionStyle")
        }, this.setHighlightActiveLine = function (e) {
            this.setOption("highlightActiveLine", e)
        }, this.getHighlightActiveLine = function () {
            return this.getOption("highlightActiveLine")
        }, this.setHighlightGutterLine = function (e) {
            this.setOption("highlightGutterLine", e)
        }, this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine")
        }, this.setHighlightSelectedWord = function (e) {
            this.setOption("highlightSelectedWord", e)
        }, this.getHighlightSelectedWord = function () {
            return this.$highlightSelectedWord
        }, this.setAnimatedScroll = function (e) {
            this.renderer.setAnimatedScroll(e)
        }, this.getAnimatedScroll = function () {
            return this.renderer.getAnimatedScroll()
        }, this.setShowInvisibles = function (e) {
            this.renderer.setShowInvisibles(e)
        }, this.getShowInvisibles = function () {
            return this.renderer.getShowInvisibles()
        }, this.setDisplayIndentGuides = function (e) {
            this.renderer.setDisplayIndentGuides(e)
        }, this.getDisplayIndentGuides = function () {
            return this.renderer.getDisplayIndentGuides()
        }, this.setShowPrintMargin = function (e) {
            this.renderer.setShowPrintMargin(e)
        }, this.getShowPrintMargin = function () {
            return this.renderer.getShowPrintMargin()
        }, this.setPrintMarginColumn = function (e) {
            this.renderer.setPrintMarginColumn(e)
        }, this.getPrintMarginColumn = function () {
            return this.renderer.getPrintMarginColumn()
        }, this.setReadOnly = function (e) {
            this.setOption("readOnly", e)
        }, this.getReadOnly = function () {
            return this.getOption("readOnly")
        }, this.setBehavioursEnabled = function (e) {
            this.setOption("behavioursEnabled", e)
        }, this.getBehavioursEnabled = function () {
            return this.getOption("behavioursEnabled")
        }, this.setWrapBehavioursEnabled = function (e) {
            this.setOption("wrapBehavioursEnabled", e)
        }, this.getWrapBehavioursEnabled = function () {
            return this.getOption("wrapBehavioursEnabled")
        }, this.setShowFoldWidgets = function (e) {
            this.setOption("showFoldWidgets", e)
        }, this.getShowFoldWidgets = function () {
            return this.getOption("showFoldWidgets")
        }, this.setFadeFoldWidgets = function (e) {
            this.setOption("fadeFoldWidgets", e)
        }, this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets")
        }, this.remove = function (e) {
            this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
            var t = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
                var n = this.session, i = n.getState(t.start.row),
                    s = n.getMode().transformAction(i, "deletion", this, n, t);
                if (0 === t.end.column) {
                    var r = n.getTextRange(t);
                    if ("\n" == r[r.length - 1]) {
                        var o = n.getLine(t.end.row);
                        /^\s+$/.test(o) && (t.end.column = o.length)
                    }
                }
                s && (t = s)
            }
            this.session.remove(t), this.clearSelection()
        }, this.removeWordRight = function () {
            this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeWordLeft = function () {
            this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeToLineStart = function () {
            this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()),
                this.clearSelection()
        }, this.removeToLineEnd = function () {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var e = this.getSelectionRange();
            e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
        }, this.splitLine = function () {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
            var e = this.getCursorPosition();
            this.insert("\n"), this.moveCursorToPosition(e)
        }, this.transposeLetters = function () {
            if (this.selection.isEmpty()) {
                var e = this.getCursorPosition(), t = e.column;
                if (0 !== t) {
                    var n, i, s = this.session.getLine(e.row);
                    t < s.length ? (n = s.charAt(t) + s.charAt(t - 1), i = new f(e.row, t - 1, e.row, t + 1)) : (n = s.charAt(t - 1) + s.charAt(t - 2), i = new f(e.row, t - 2, e.row, t)), this.session.replace(i, n)
                }
            }
        }, this.toLowerCase = function () {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange(), n = this.session.getTextRange(t);
            this.session.replace(t, n.toLowerCase()), this.selection.setSelectionRange(e)
        }, this.toUpperCase = function () {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange(), n = this.session.getTextRange(t);
            this.session.replace(t, n.toUpperCase()), this.selection.setSelectionRange(e)
        }, this.indent = function () {
            var e = this.session, t = this.getSelectionRange();
            if (t.start.row < t.end.row) {
                var n = this.$getSelectedRows();
                return void e.indentRows(n.first, n.last, "\t")
            }
            if (t.start.column < t.end.column) {
                var i = e.getTextRange(t);
                if (!/^\s+$/.test(i)) {
                    var n = this.$getSelectedRows();
                    return void e.indentRows(n.first, n.last, "\t")
                }
            }
            var s = e.getLine(t.start.row), o = t.start, a = e.getTabSize(),
                l = e.documentToScreenColumn(o.row, o.column);
            if (this.session.getUseSoftTabs()) var c = a - l % a, h = r.stringRepeat(" ", c); else {
                for (var c = l % a; " " == s[t.start.column - 1] && c;) t.start.column--, c--;
                this.selection.setSelectionRange(t), h = "\t"
            }
            return this.insert(h)
        },this.blockIndent = function () {
            var e = this.$getSelectedRows();
            this.session.indentRows(e.first, e.last, "\t")
        },this.blockOutdent = function () {
            var e = this.session.getSelection();
            this.session.outdentRows(e.getRange())
        },this.sortLines = function () {
            var e = this.$getSelectedRows(), t = this.session, n = [];
            for (s = e.first; s <= e.last; s++) n.push(t.getLine(s));
            n.sort(function (e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
            });
            for (var i = new f(0, 0, 0, 0), s = e.first; s <= e.last; s++) {
                var r = t.getLine(s);
                i.start.row = s, i.end.row = s, i.end.column = r.length, t.replace(i, n[s - e.first])
            }
        },this.toggleCommentLines = function () {
            var e = this.session.getState(this.getCursorPosition().row), t = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
        },this.toggleBlockComment = function () {
            var e = this.getCursorPosition(), t = this.session.getState(e.row), n = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(t, this.session, n, e)
        },this.getNumberAt = function (e, t) {
            var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            n.lastIndex = 0;
            for (var i = this.session.getLine(e); n.lastIndex < t;) {
                var s = n.exec(i);
                if (s.index <= t && s.index + s[0].length >= t) {
                    var r = {value: s[0], start: s.index, end: s.index + s[0].length};
                    return r
                }
            }
            return null
        },this.modifyNumber = function (e) {
            var t = this.selection.getCursor().row, n = this.selection.getCursor().column, i = new f(t, n - 1, t, n),
                s = this.session.getTextRange(i);
            if (!isNaN(parseFloat(s)) && isFinite(s)) {
                var r = this.getNumberAt(t, n);
                if (r) {
                    var o = r.value.indexOf(".") >= 0 ? r.start + r.value.indexOf(".") + 1 : r.end,
                        a = r.start + r.value.length - o, l = parseFloat(r.value);
                    l *= Math.pow(10, a), e *= o !== r.end && n < o ? Math.pow(10, r.end - n - 1) : Math.pow(10, r.end - n), l += e, l /= Math.pow(10, a);
                    var c = l.toFixed(a), h = new f(t, r.start, t, r.end);
                    this.session.replace(h, c), this.moveCursorTo(t, Math.max(r.start + 1, n + c.length - r.value.length))
                }
            }
        },this.removeLines = function () {
            var e = this.$getSelectedRows();
            this.session.removeFullLines(e.first, e.last), this.clearSelection()
        },this.duplicateSelection = function () {
            var e = this.selection, t = this.session, n = e.getRange(), i = e.isBackwards();
            if (n.isEmpty()) {
                var s = n.start.row;
                t.duplicateLines(s, s)
            } else {
                var r = i ? n.start : n.end, o = t.insert(r, t.getTextRange(n), !1);
                n.start = r, n.end = o, e.setSelectionRange(n, i)
            }
        },this.moveLinesDown = function () {
            this.$moveLines(1, !1)
        },this.moveLinesUp = function () {
            this.$moveLines(-1, !1)
        },this.moveText = function (e, t, n) {
            return this.session.moveText(e, t, n)
        },this.copyLinesUp = function () {
            this.$moveLines(-1, !0)
        },this.copyLinesDown = function () {
            this.$moveLines(1, !0)
        },this.$moveLines = function (e, t) {
            var n, i, s = this.selection;
            if (!s.inMultiSelectMode || this.inVirtualSelectionMode) {
                var r = s.toOrientedRange();
                n = this.$getSelectedRows(r), i = this.session.$moveLines(n.first, n.last, t ? 0 : e), t && e == -1 && (i = 0), r.moveBy(i, 0), s.fromOrientedRange(r)
            } else {
                var o = s.rangeList.ranges;
                s.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
                for (var a = 0, l = 0, c = o.length, h = 0; h < c; h++) {
                    var u = h;
                    o[h].moveBy(a, 0), n = this.$getSelectedRows(o[h]);
                    for (var d = n.first, f = n.last; ++h < c;) {
                        l && o[h].moveBy(l, 0);
                        var p = this.$getSelectedRows(o[h]);
                        if (t && p.first != f) break;
                        if (!t && p.first > f + 1) break;
                        f = p.last
                    }
                    for (h--, a = this.session.$moveLines(d, f, t ? 0 : e), t && e == -1 && (u = h + 1); u <= h;) o[u].moveBy(a, 0), u++;
                    t || (a = 0), l += a
                }
                s.fromOrientedRange(s.ranges[0]), s.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
            }
        },this.$getSelectedRows = function (e) {
            return e = (e || this.getSelectionRange()).collapseRows(), {
                first: this.session.getRowFoldStart(e.start.row),
                last: this.session.getRowFoldEnd(e.end.row)
            }
        },this.onCompositionStart = function (e) {
            this.renderer.showComposition(this.getCursorPosition())
        },this.onCompositionUpdate = function (e) {
            this.renderer.setCompositionText(e)
        },this.onCompositionEnd = function () {
            this.renderer.hideComposition()
        },this.getFirstVisibleRow = function () {
            return this.renderer.getFirstVisibleRow()
        },this.getLastVisibleRow = function () {
            return this.renderer.getLastVisibleRow()
        },this.isRowVisible = function (e) {
            return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
        },this.isRowFullyVisible = function (e) {
            return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
        },this.$getVisibleRowCount = function () {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
        },this.$moveByPage = function (e, t) {
            var n = this.renderer, i = this.renderer.layerConfig, s = e * Math.floor(i.height / i.lineHeight);
            this.$blockScrolling++, t === !0 ? this.selection.$moveSelection(function () {
                this.moveCursorBy(s, 0)
            }) : t === !1 && (this.selection.moveCursorBy(s, 0), this.selection.clearSelection()), this.$blockScrolling--;
            var r = n.scrollTop;
            n.scrollBy(0, s * i.lineHeight), null != t && n.scrollCursorIntoView(null, .5), n.animateScrolling(r)
        },this.selectPageDown = function () {
            this.$moveByPage(1, !0)
        },this.selectPageUp = function () {
            this.$moveByPage(-1, !0)
        },this.gotoPageDown = function () {
            this.$moveByPage(1, !1)
        },this.gotoPageUp = function () {
            this.$moveByPage(-1, !1)
        },this.scrollPageDown = function () {
            this.$moveByPage(1)
        },this.scrollPageUp = function () {
            this.$moveByPage(-1)
        },this.scrollToRow = function (e) {
            this.renderer.scrollToRow(e)
        },this.scrollToLine = function (e, t, n, i) {
            this.renderer.scrollToLine(e, t, n, i)
        },this.centerSelection = function () {
            var e = this.getSelectionRange(), t = {
                row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
            };
            this.renderer.alignCursor(t, .5)
        },this.getCursorPosition = function () {
            return this.selection.getCursor()
        },this.getCursorPositionScreen = function () {
            return this.session.documentToScreenPosition(this.getCursorPosition())
        },this.getSelectionRange = function () {
            return this.selection.getRange()
        },this.selectAll = function () {
            this.$blockScrolling += 1, this.selection.selectAll(), this.$blockScrolling -= 1
        },this.clearSelection = function () {
            this.selection.clearSelection()
        },this.moveCursorTo = function (e, t) {
            this.selection.moveCursorTo(e, t)
        },this.moveCursorToPosition = function (e) {
            this.selection.moveCursorToPosition(e)
        },this.jumpToMatching = function (e, t) {
            var n = this.getCursorPosition(), i = new v(this.session, n.row, n.column), s = i.getCurrentToken(),
                r = s || i.stepForward();
            if (r) {
                var o, a, l = !1, c = {}, h = n.column - r.start,
                    u = {")": "(", "(": "(", "]": "[", "[": "[", "{": "{", "}": "{"};
                do {
                    if (r.value.match(/[{}()\[\]]/g)) {
                        for (; h < r.value.length && !l; h++) if (u[r.value[h]]) switch (a = u[r.value[h]] + "." + r.type.replace("rparen", "lparen"), isNaN(c[a]) && (c[a] = 0), r.value[h]) {
                            case"(":
                            case"[":
                            case"{":
                                c[a]++;
                                break;
                            case")":
                            case"]":
                            case"}":
                                c[a]--, c[a] === -1 && (o = "bracket", l = !0)
                        }
                    } else r && r.type.indexOf("tag-name") !== -1 && (isNaN(c[r.value]) && (c[r.value] = 0), "<" === s.value ? c[r.value]++ : "</" === s.value && c[r.value]--, c[r.value] === -1 && (o = "tag", l = !0));
                    l || (s = r, r = i.stepForward(), h = 0)
                } while (r && !l);
                if (o) {
                    var d, p;
                    if ("bracket" === o) d = this.session.getBracketRange(n), d || (d = new f(i.getCurrentTokenRow(), i.getCurrentTokenColumn() + h - 1, i.getCurrentTokenRow(), i.getCurrentTokenColumn() + h - 1), p = d.start, (t || p.row === n.row && Math.abs(p.column - n.column) < 2) && (d = this.session.getBracketRange(p))); else if ("tag" === o) {
                        if (!r || r.type.indexOf("tag-name") === -1) return;
                        var g = r.value;
                        if (d = new f(i.getCurrentTokenRow(), i.getCurrentTokenColumn() - 2, i.getCurrentTokenRow(), i.getCurrentTokenColumn() - 2), 0 === d.compare(n.row, n.column)) {
                            l = !1;
                            do r = s, s = i.stepBackward(), s && (s.type.indexOf("tag-close") !== -1 && d.setEnd(i.getCurrentTokenRow(), i.getCurrentTokenColumn() + 1), r.value === g && r.type.indexOf("tag-name") !== -1 && ("<" === s.value ? c[g]++ : "</" === s.value && c[g]--, 0 === c[g] && (l = !0))); while (s && !l)
                        }
                        r && r.type.indexOf("tag-name") && (p = d.start, p.row == n.row && Math.abs(p.column - n.column) < 2 && (p = d.end))
                    }
                    p = d && d.cursor || p, p && (e ? d && t ? this.selection.setRange(d) : d && d.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(p.row, p.column) : this.selection.moveTo(p.row, p.column))
                }
            }
        },this.gotoLine = function (e, t, n) {
            this.selection.clearSelection(), this.session.unfold({
                row: e - 1,
                column: t || 0
            }), this.$blockScrolling += 1, this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.$blockScrolling -= 1, this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, n)
        },this.navigateTo = function (e, t) {
            this.selection.moveTo(e, t)
        },this.navigateUp = function (e) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
        },this.navigateDown = function (e) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
        },this.navigateLeft = function (e) {
            if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorLeft(); else {
                var t = this.getSelectionRange().start;
                this.moveCursorToPosition(t)
            }
            this.clearSelection()
        },this.navigateRight = function (e) {
            if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorRight(); else {
                var t = this.getSelectionRange().end;
                this.moveCursorToPosition(t)
            }
            this.clearSelection()
        },this.navigateLineStart = function () {
            this.selection.moveCursorLineStart(), this.clearSelection()
        },this.navigateLineEnd = function () {
            this.selection.moveCursorLineEnd(), this.clearSelection()
        },this.navigateFileEnd = function () {
            this.selection.moveCursorFileEnd(), this.clearSelection()
        },this.navigateFileStart = function () {
            this.selection.moveCursorFileStart(), this.clearSelection()
        },this.navigateWordRight = function () {
            this.selection.moveCursorWordRight(), this.clearSelection()
        },this.navigateWordLeft = function () {
            this.selection.moveCursorWordLeft(), this.clearSelection()
        },this.replace = function (e, t) {
            t && this.$search.set(t);
            var n = this.$search.find(this.session), i = 0;
            return n ? (this.$tryReplace(n, e) && (i = 1), null !== n && (this.selection.setSelectionRange(n), this.renderer.scrollSelectionIntoView(n.start, n.end)), i) : i
        },this.replaceAll = function (e, t) {
            t && this.$search.set(t);
            var n = this.$search.findAll(this.session), i = 0;
            if (!n.length) return i;
            this.$blockScrolling += 1;
            var s = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var r = n.length - 1; r >= 0; --r) this.$tryReplace(n[r], e) && i++;
            return this.selection.setSelectionRange(s), this.$blockScrolling -= 1, i
        },this.$tryReplace = function (e, t) {
            var n = this.session.getTextRange(e);
            return t = this.$search.replace(n, t), null !== t ? (e.end = this.session.replace(e, t), e) : null
        },this.getLastSearchOptions = function () {
            return this.$search.getOptions()
        },this.find = function (e, t, n) {
            t || (t = {}), "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && i.mixin(t, e);
            var s = this.selection.getRange();
            null == t.needle && (e = this.session.getTextRange(s) || this.$search.$options.needle, e || (s = this.session.getWordRange(s.start.row, s.start.column), e = this.session.getTextRange(s)), this.$search.set({needle: e})), this.$search.set(t), t.start || this.$search.set({start: s});
            var r = this.$search.find(this.session);
            return t.preventScroll ? r : r ? (this.revealRange(r, n), r) : (t.backwards ? s.start = s.end : s.end = s.start, void this.selection.setRange(s))
        },this.findNext = function (e, t) {
            this.find({skipCurrent: !0, backwards: !1}, e, t)
        },this.findPrevious = function (e, t) {
            this.find(e, {skipCurrent: !0, backwards: !0}, t)
        },this.revealRange = function (e, t) {
            this.$blockScrolling += 1, this.session.unfold(e), this.selection.setSelectionRange(e), this.$blockScrolling -= 1;
            var n = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(e.start, e.end, .5), t !== !1 && this.renderer.animateScrolling(n)
        },this.undo = function () {
            this.$blockScrolling++, this.session.getUndoManager().undo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
        },this.redo = function () {
            this.$blockScrolling++, this.session.getUndoManager().redo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
        },this.destroy = function () {
            this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy()
        },this.setAutoScrollEditorIntoView = function (e) {
            if (e) {
                var t, n = this, i = !1;
                this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                var s = this.$scrollAnchor;
                s.style.cssText = "position:absolute", this.container.insertBefore(s, this.container.firstChild);
                var r = this.on("changeSelection", function () {
                    i = !0
                }), o = this.renderer.on("beforeRender", function () {
                    i && (t = n.renderer.container.getBoundingClientRect())
                }), a = this.renderer.on("afterRender", function () {
                    if (i && t && (n.isFocused() || n.searchBox && n.searchBox.isFocused())) {
                        var e = n.renderer, r = e.$cursorLayer.$pixelPos, o = e.layerConfig, a = r.top - o.offset;
                        i = r.top >= 0 && a + t.top < 0 || !(r.top < o.height && r.top + t.top + o.lineHeight > window.innerHeight) && null, null != i && (s.style.top = a + "px", s.style.left = r.left + "px", s.style.height = o.lineHeight + "px", s.scrollIntoView(i)), i = t = null
                    }
                });
                this.setAutoScrollEditorIntoView = function (e) {
                    e || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", r), this.renderer.off("afterRender", a), this.renderer.off("beforeRender", o))
                }
            }
        },this.$resetCursorStyle = function () {
            var e = this.$cursorStyle || "ace", t = this.renderer.$cursorLayer;
            t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && "wide" != e, s.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
        }
    }).call(A.prototype), C.defineOptions(A.prototype, "editor", {
        selectionStyle: {
            set: function (e) {
                this.onSelectionChange(), this._signal("changeSelectionStyle", {data: e})
            }, initialValue: "line"
        },
        highlightActiveLine: {
            set: function () {
                this.$updateHighlightActiveLine()
            }, initialValue: !0
        },
        highlightSelectedWord: {
            set: function (e) {
                this.$onSelectionChange()
            }, initialValue: !0
        },
        readOnly: {
            set: function (e) {
                this.$resetCursorStyle()
            }, initialValue: !1
        },
        cursorStyle: {
            set: function (e) {
                this.$resetCursorStyle()
            }, values: ["ace", "slim", "smooth", "wide"], initialValue: "ace"
        },
        mergeUndoDeltas: {values: [!1, !0, "always"], initialValue: !0},
        behavioursEnabled: {initialValue: !0},
        wrapBehavioursEnabled: {initialValue: !0},
        autoScrollEditorIntoView: {
            set: function (e) {
                this.setAutoScrollEditorIntoView(e)
            }
        },
        keyboardHandler: {
            set: function (e) {
                this.setKeyboardHandler(e)
            }, get: function () {
                return this.keybindingId
            }, handlesSet: !0
        },
        hScrollBarAlwaysVisible: "renderer",
        vScrollBarAlwaysVisible: "renderer",
        highlightGutterLine: "renderer",
        animatedScroll: "renderer",
        showInvisibles: "renderer",
        showPrintMargin: "renderer",
        printMarginColumn: "renderer",
        printMargin: "renderer",
        fadeFoldWidgets: "renderer",
        showFoldWidgets: "renderer",
        showLineNumbers: "renderer",
        showGutter: "renderer",
        displayIndentGuides: "renderer",
        fontSize: "renderer",
        fontFamily: "renderer",
        maxLines: "renderer",
        minLines: "renderer",
        scrollPastEnd: "renderer",
        fixedWidthGutter: "renderer",
        theme: "renderer",
        scrollSpeed: "$mouseHandler",
        dragDelay: "$mouseHandler",
        dragEnabled: "$mouseHandler",
        focusTimout: "$mouseHandler",
        tooltipFollowsMouse: "$mouseHandler",
        firstLineNumber: "session",
        overwrite: "session",
        newLineMode: "session",
        useWorker: "session",
        useSoftTabs: "session",
        tabSize: "session",
        wrap: "session",
        indentedSoftWrap: "session",
        foldStyle: "session",
        mode: "session"
    }), t.Editor = A
}), define("ace/undomanager", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var i = function () {
        this.reset()
    };
    (function () {
        function e(e) {
            return {
                action: e.action,
                start: e.start,
                end: e.end,
                lines: 1 == e.lines.length ? null : e.lines,
                text: 1 == e.lines.length ? e.lines[0] : null
            }
        }

        function t(e) {
            return {action: e.action, start: e.start, end: e.end, lines: e.lines || [e.text]}
        }

        function n(e, t) {
            for (var n = new Array(e.length), i = 0; i < e.length; i++) {
                for (var s = e[i], r = {group: s.group, deltas: new Array(s.length)}, o = 0; o < s.deltas.length; o++) {
                    var a = s.deltas[o];
                    r.deltas[o] = t(a)
                }
                n[i] = r
            }
            return n
        }

        this.execute = function (e) {
            var t = e.args[0];
            this.$doc = e.args[1], e.merge && this.hasUndo() && (this.dirtyCounter--, t = this.$undoStack.pop().concat(t)), this.$undoStack.push(t), this.$redoStack = [], this.dirtyCounter < 0 && (this.dirtyCounter = NaN), this.dirtyCounter++
        }, this.undo = function (e) {
            var t = this.$undoStack.pop(), n = null;
            return t && (n = this.$doc.undoChanges(t, e), this.$redoStack.push(t), this.dirtyCounter--), n
        }, this.redo = function (e) {
            var t = this.$redoStack.pop(), n = null;
            return t && (n = this.$doc.redoChanges(this.$deserializeDeltas(t), e), this.$undoStack.push(t), this.dirtyCounter++), n
        }, this.reset = function () {
            this.$undoStack = [], this.$redoStack = [], this.dirtyCounter = 0
        }, this.hasUndo = function () {
            return this.$undoStack.length > 0
        }, this.hasRedo = function () {
            return this.$redoStack.length > 0
        }, this.markClean = function () {
            this.dirtyCounter = 0
        }, this.isClean = function () {
            return 0 === this.dirtyCounter
        }, this.$serializeDeltas = function (t) {
            return n(t, e)
        }, this.$deserializeDeltas = function (e) {
            return n(e, t)
        }
    }).call(i.prototype), t.UndoManager = i
}), define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var i = e("../lib/dom"), s = e("../lib/oop"), r = e("../lib/lang"), o = e("../lib/event_emitter").EventEmitter,
        a = function (e) {
            this.element = i.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$cells = []
        };
    (function () {
        s.implement(this, o), this.setSession = function (e) {
            this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
        }, this.addGutterDecoration = function (e, t) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
        }, this.removeGutterDecoration = function (e, t) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
        }, this.setAnnotations = function (e) {
            this.$annotations = [];
            for (var t = 0; t < e.length; t++) {
                var n = e[t], i = n.row, s = this.$annotations[i];
                s || (s = this.$annotations[i] = {text: []});
                var o = n.text;
                o = o ? r.escapeHTML(o) : n.html || "", s.text.indexOf(o) === -1 && s.text.push(o);
                var a = n.type;
                "error" == a ? s.className = " ace_error" : "warning" == a && " ace_error" != s.className ? s.className = " ace_warning" : "info" != a || s.className || (s.className = " ace_info")
            }
        }, this.$updateAnnotations = function (e) {
            if (this.$annotations.length) {
                var t = e.start.row, n = e.end.row - t;
                if (0 === n) ; else if ("remove" == e.action) this.$annotations.splice(t, n + 1, null); else {
                    var i = new Array(n + 1);
                    i.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, i)
                }
            }
        }, this.update = function (e) {
            for (var t = this.session, n = e.firstRow, s = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1), r = t.getNextFoldLine(n), o = r ? r.start.row : 1 / 0, a = this.$showFoldWidgets && t.foldWidgets, l = t.$breakpoints, c = t.$decorations, h = t.$firstLineNumber, u = 0, d = t.gutterRenderer || this.$renderer, f = null, p = -1, g = n; ;) {
                if (g > o && (g = r.end.row + 1, r = t.getNextFoldLine(g, r), o = r ? r.start.row : 1 / 0), g > s) {
                    for (; this.$cells.length > p + 1;) f = this.$cells.pop(), this.element.removeChild(f.element);
                    break
                }
                f = this.$cells[++p], f || (f = {
                    element: null,
                    textNode: null,
                    foldWidget: null
                }, f.element = i.createElement("div"), f.textNode = document.createTextNode(""), f.element.appendChild(f.textNode), this.element.appendChild(f.element), this.$cells[p] = f);
                var m = "ace_gutter-cell ";
                l[g] && (m += l[g]), c[g] && (m += c[g]), this.$annotations[g] && (m += this.$annotations[g].className), f.element.className != m && (f.element.className = m);
                var C = t.getRowLength(g) * e.lineHeight + "px";
                if (C != f.element.style.height && (f.element.style.height = C), a) {
                    var v = a[g];
                    null == v && (v = a[g] = t.getFoldWidget(g))
                }
                if (v) {
                    f.foldWidget || (f.foldWidget = i.createElement("span"), f.element.appendChild(f.foldWidget));
                    var m = "ace_fold-widget ace_" + v;
                    m += "start" == v && g == o && g < r.end.row ? " ace_closed" : " ace_open", f.foldWidget.className != m && (f.foldWidget.className = m);
                    var C = e.lineHeight + "px";
                    f.foldWidget.style.height != C && (f.foldWidget.style.height = C)
                } else f.foldWidget && (f.element.removeChild(f.foldWidget), f.foldWidget = null);
                var A = u = d ? d.getText(t, g) : g + h;
                A != f.textNode.data && (f.textNode.data = A), g++
            }
            this.element.style.height = e.minHeight + "px", (this.$fixedWidth || t.$useWrapMode) && (u = t.getLength() + h);
            var y = d ? d.getWidth(t, u, e) : u.toString().length * e.characterWidth,
                E = this.$padding || this.$computePadding();
            y += E.left + E.right, y === this.gutterWidth || isNaN(y) || (this.gutterWidth = y, this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._emit("changeGutterWidth", y))
        }, this.$fixedWidth = !1, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function (e) {
            this.$renderer = !e && {
                getWidth: function () {
                    return ""
                }, getText: function () {
                    return ""
                }
            }
        }, this.getShowLineNumbers = function () {
            return this.$showLineNumbers
        }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function (e) {
            e ? i.addCssClass(this.element, "ace_folding-enabled") : i.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
        }, this.getShowFoldWidgets = function () {
            return this.$showFoldWidgets
        }, this.$computePadding = function () {
            if (!this.element.firstChild) return {left: 0, right: 0};
            var e = i.computedStyle(this.element.firstChild);
            return this.$padding = {}, this.$padding.left = parseInt(e.paddingLeft) + 1 || 0, this.$padding.right = parseInt(e.paddingRight) || 0, this.$padding
        }, this.getRegion = function (e) {
            var t = this.$padding || this.$computePadding(), n = this.element.getBoundingClientRect();
            return e.x < t.left + n.left ? "markers" : this.$showFoldWidgets && e.x > n.right - t.right ? "foldWidgets" : void 0
        }
    }).call(a.prototype), t.Gutter = a
}), define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var i = e("../range").Range, s = e("../lib/dom"), r = function (e) {
        this.element = s.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
    };
    (function () {
        function e(e, t, n, i) {
            return (e ? 1 : 0) | (t ? 2 : 0) | (n ? 4 : 0) | (i ? 8 : 0)
        }

        this.$padding = 0, this.setPadding = function (e) {
            this.$padding = e
        }, this.setSession = function (e) {
            this.session = e
        }, this.setMarkers = function (e) {
            this.markers = e
        }, this.update = function (e) {
            var e = e || this.config;
            if (e) {
                this.config = e;
                var t = [];
                for (var n in this.markers) {
                    var i = this.markers[n];
                    if (i.range) {
                        var s = i.range.clipRows(e.firstRow, e.lastRow);
                        if (!s.isEmpty()) if (s = s.toScreenRange(this.session), i.renderer) {
                            var r = this.$getTop(s.start.row, e), o = this.$padding + s.start.column * e.characterWidth;
                            i.renderer(t, s, o, r, e)
                        } else "fullLine" == i.type ? this.drawFullLineMarker(t, s, i.clazz, e) : "screenLine" == i.type ? this.drawScreenLineMarker(t, s, i.clazz, e) : s.isMultiLine() ? "text" == i.type ? this.drawTextMarker(t, s, i.clazz, e) : this.drawMultiLineMarker(t, s, i.clazz, e) : this.drawSingleLineMarker(t, s, i.clazz + " ace_start ace_br15", e)
                    } else i.update(t, this, this.session, e)
                }
                this.element.innerHTML = t.join("")
            }
        }, this.$getTop = function (e, t) {
            return (e - t.firstRowScreen) * t.lineHeight
        }, this.drawTextMarker = function (t, n, s, r, o) {
            for (var a = this.session, l = n.start.row, c = n.end.row, h = l, u = 0, d = 0, f = a.getScreenLastRowColumn(h), p = new i(h, n.start.column, h, d); h <= c; h++) p.start.row = p.end.row = h, p.start.column = h == l ? n.start.column : a.getRowWrapIndent(h), p.end.column = f, u = d, d = f, f = h + 1 < c ? a.getScreenLastRowColumn(h + 1) : h == c ? 0 : n.end.column, this.drawSingleLineMarker(t, p, s + (h == l ? " ace_start" : "") + " ace_br" + e(h == l || h == l + 1 && n.start.column, u < d, d > f, h == c), r, h == c ? 0 : 1, o)
        }, this.drawMultiLineMarker = function (e, t, n, i, s) {
            var r = this.$padding, o = i.lineHeight, a = this.$getTop(t.start.row, i),
                l = r + t.start.column * i.characterWidth;
            s = s || "", e.push("<div class='", n, " ace_br1 ace_start' style='", "height:", o, "px;", "right:0;", "top:", a, "px;", "left:", l, "px;", s, "'></div>"), a = this.$getTop(t.end.row, i);
            var c = t.end.column * i.characterWidth;
            if (e.push("<div class='", n, " ace_br12' style='", "height:", o, "px;", "width:", c, "px;", "top:", a, "px;", "left:", r, "px;", s, "'></div>"), o = (t.end.row - t.start.row - 1) * i.lineHeight, !(o <= 0)) {
                a = this.$getTop(t.start.row + 1, i);
                var h = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                e.push("<div class='", n, h ? " ace_br" + h : "", "' style='", "height:", o, "px;", "right:0;", "top:", a, "px;", "left:", r, "px;", s, "'></div>")
            }
        }, this.drawSingleLineMarker = function (e, t, n, i, s, r) {
            var o = i.lineHeight, a = (t.end.column + (s || 0) - t.start.column) * i.characterWidth,
                l = this.$getTop(t.start.row, i), c = this.$padding + t.start.column * i.characterWidth;
            e.push("<div class='", n, "' style='", "height:", o, "px;", "width:", a, "px;", "top:", l, "px;", "left:", c, "px;", r || "", "'></div>")
        }, this.drawFullLineMarker = function (e, t, n, i, s) {
            var r = this.$getTop(t.start.row, i), o = i.lineHeight;
            t.start.row != t.end.row && (o += this.$getTop(t.end.row, i) - r), e.push("<div class='", n, "' style='", "height:", o, "px;", "top:", r, "px;", "left:0;right:0;", s || "", "'></div>")
        }, this.drawScreenLineMarker = function (e, t, n, i, s) {
            var r = this.$getTop(t.start.row, i), o = i.lineHeight;
            e.push("<div class='", n, "' style='", "height:", o, "px;", "top:", r, "px;", "left:0;right:0;", s || "", "'></div>")
        }
    }).call(r.prototype), t.Marker = r
}), define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var i = e("../lib/oop"), s = e("../lib/dom"), r = e("../lib/lang"),
        o = (e("../lib/useragent"), e("../lib/event_emitter").EventEmitter), a = function (e) {
            this.element = s.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this)
        };
    (function () {
        i.implement(this, o), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "—", this.SPACE_CHAR = "·", this.$padding = 0, this.$updateEolChar = function () {
            var e = "\n" == this.session.doc.getNewLineCharacter() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
            if (this.EOL_CHAR != e) return this.EOL_CHAR = e, !0
        }, this.setPadding = function (e) {
            this.$padding = e, this.element.style.padding = "0 " + e + "px"
        }, this.getLineHeight = function () {
            return this.$fontMetrics.$characterSize.height || 0
        }, this.getCharacterWidth = function () {
            return this.$fontMetrics.$characterSize.width || 0
        }, this.$setFontMetrics = function (e) {
            this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function (e) {
                this._signal("changeCharacterSize", e)
            }.bind(this)), this.$pollSizeChanges()
        }, this.checkForSizeChanges = function () {
            this.$fontMetrics.checkForSizeChanges()
        }, this.$pollSizeChanges = function () {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
        }, this.setSession = function (e) {
            this.session = e, e && this.$computeTabString()
        }, this.showInvisibles = !1, this.setShowInvisibles = function (e) {
            return this.showInvisibles != e && (this.showInvisibles = e, this.$computeTabString(), !0)
        }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function (e) {
            return this.displayIndentGuides != e && (this.displayIndentGuides = e, this.$computeTabString(), !0)
        }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function () {
            var e = this.session.getTabSize();
            this.tabSize = e;
            for (var t = this.$tabStrings = [0], n = 1; n < e + 1; n++) this.showInvisibles ? t.push("<span class='ace_invisible ace_invisible_tab'>" + r.stringRepeat(this.TAB_CHAR, n) + "</span>") : t.push(r.stringRepeat(" ", n));
            if (this.displayIndentGuides) {
                this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                var i = "ace_indent-guide", s = "", o = "";
                if (this.showInvisibles) {
                    i += " ace_invisible", s = " ace_invisible_space", o = " ace_invisible_tab";
                    var a = r.stringRepeat(this.SPACE_CHAR, this.tabSize),
                        l = r.stringRepeat(this.TAB_CHAR, this.tabSize)
                } else var a = r.stringRepeat(" ", this.tabSize), l = a;
                this.$tabStrings[" "] = "<span class='" + i + s + "'>" + a + "</span>", this.$tabStrings["\t"] = "<span class='" + i + o + "'>" + l + "</span>"
            }
        }, this.updateLines = function (e, t, n) {
            this.config.lastRow == e.lastRow && this.config.firstRow == e.firstRow || this.scrollLines(e), this.config = e;
            for (var i = Math.max(t, e.firstRow), s = Math.min(n, e.lastRow), r = this.element.childNodes, o = 0, a = e.firstRow; a < i; a++) {
                var l = this.session.getFoldLine(a);
                if (l) {
                    if (l.containsRow(i)) {
                        i = l.start.row;
                        break
                    }
                    a = l.end.row
                }
                o++
            }
            for (var a = i, l = this.session.getNextFoldLine(a), c = l ? l.start.row : 1 / 0; ;) {
                if (a > c && (a = l.end.row + 1, l = this.session.getNextFoldLine(a, l), c = l ? l.start.row : 1 / 0), a > s) break;
                var h = r[o++];
                if (h) {
                    var u = [];
                    this.$renderLine(u, a, !this.$useLineGroups(), a == c && l), h.style.height = e.lineHeight * this.session.getRowLength(a) + "px", h.innerHTML = u.join("")
                }
                a++
            }
        }, this.scrollLines = function (e) {
            var t = this.config;
            if (this.config = e, !t || t.lastRow < e.firstRow) return this.update(e);
            if (e.lastRow < t.firstRow) return this.update(e);
            var n = this.element;
            if (t.firstRow < e.firstRow) for (var i = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); i > 0; i--) n.removeChild(n.firstChild);
            if (t.lastRow > e.lastRow) for (var i = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); i > 0; i--) n.removeChild(n.lastChild);
            if (e.firstRow < t.firstRow) {
                var s = this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1);
                n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s)
            }
            if (e.lastRow > t.lastRow) {
                var s = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
                n.appendChild(s)
            }
        }, this.$renderLinesFragment = function (e, t, n) {
            for (var i = this.element.ownerDocument.createDocumentFragment(), r = t, o = this.session.getNextFoldLine(r), a = o ? o.start.row : 1 / 0; ;) {
                if (r > a && (r = o.end.row + 1, o = this.session.getNextFoldLine(r, o), a = o ? o.start.row : 1 / 0), r > n) break;
                var l = s.createElement("div"), c = [];
                if (this.$renderLine(c, r, !1, r == a && o), l.innerHTML = c.join(""), this.$useLineGroups()) l.className = "ace_line_group", i.appendChild(l), l.style.height = e.lineHeight * this.session.getRowLength(r) + "px"; else for (; l.firstChild;) i.appendChild(l.firstChild);
                r++
            }
            return i
        }, this.update = function (e) {
            this.config = e;
            for (var t = [], n = e.firstRow, i = e.lastRow, s = n, r = this.session.getNextFoldLine(s), o = r ? r.start.row : 1 / 0; ;) {
                if (s > o && (s = r.end.row + 1, r = this.session.getNextFoldLine(s, r), o = r ? r.start.row : 1 / 0), s > i) break;
                this.$useLineGroups() && t.push("<div class='ace_line_group' style='height:", e.lineHeight * this.session.getRowLength(s), "px'>"), this.$renderLine(t, s, !1, s == o && r), this.$useLineGroups() && t.push("</div>"), s++
            }
            this.element.innerHTML = t.join("")
        }, this.$textToken = {text: !0, rparen: !0, lparen: !0}, this.$renderToken = function (e, t, n, i) {
            var s = this,
                o = /\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,
                a = function (e, n, i, o, a) {
                    if (n) return s.showInvisibles ? "<span class='ace_invisible ace_invisible_space'>" + r.stringRepeat(s.SPACE_CHAR, e.length) + "</span>" : e;
                    if ("&" == e) return "&#38;";
                    if ("<" == e) return "&#60;";
                    if (">" == e) return "&#62;";
                    if ("\t" == e) {
                        var l = s.session.getScreenTabSize(t + o);
                        return t += l - 1, s.$tabStrings[l]
                    }
                    if ("　" == e) {
                        var c = s.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk",
                            h = s.showInvisibles ? s.SPACE_CHAR : "";
                        return t += 1,
                        "<span class='" + c + "' style='width:" + 2 * s.config.characterWidth + "px'>" + h + "</span>"
                    }
                    return i ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" + s.SPACE_CHAR + "</span>" : (t += 1, "<span class='ace_cjk' style='width:" + 2 * s.config.characterWidth + "px'>" + e + "</span>")
                }, l = i.replace(o, a);
            if (this.$textToken[n.type]) e.push(l); else {
                var c = "ace_" + n.type.replace(/\./g, " ace_"), h = "";
                "fold" == n.type && (h = " style='width:" + n.value.length * this.config.characterWidth + "px;' "), e.push("<span class='", c, "'", h, ">", l, "</span>")
            }
            return t + i.length
        }, this.renderIndentGuide = function (e, t, n) {
            var i = t.search(this.$indentGuideRe);
            return i <= 0 || i >= n ? t : " " == t[0] ? (i -= i % this.tabSize, e.push(r.stringRepeat(this.$tabStrings[" "], i / this.tabSize)), t.substr(i)) : "\t" == t[0] ? (e.push(r.stringRepeat(this.$tabStrings["\t"], i)), t.substr(i)) : t
        }, this.$renderWrappedLine = function (e, t, n, i) {
            for (var s = 0, o = 0, a = n[0], l = 0, c = 0; c < t.length; c++) {
                var h = t[c], u = h.value;
                if (0 == c && this.displayIndentGuides) {
                    if (s = u.length, u = this.renderIndentGuide(e, u, a), !u) continue;
                    s -= u.length
                }
                if (s + u.length < a) l = this.$renderToken(e, l, h, u), s += u.length; else {
                    for (; s + u.length >= a;) l = this.$renderToken(e, l, h, u.substring(0, a - s)), u = u.substring(a - s), s = a, i || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), e.push(r.stringRepeat(" ", n.indent)), o++, l = 0, a = n[o] || Number.MAX_VALUE;
                    0 != u.length && (s += u.length, l = this.$renderToken(e, l, h, u))
                }
            }
        }, this.$renderSimpleLine = function (e, t) {
            var n = 0, i = t[0], s = i.value;
            this.displayIndentGuides && (s = this.renderIndentGuide(e, s)), s && (n = this.$renderToken(e, n, i, s));
            for (var r = 1; r < t.length; r++) i = t[r], s = i.value, n = this.$renderToken(e, n, i, s)
        }, this.$renderLine = function (e, t, n, i) {
            if (i || 0 == i || (i = this.session.getFoldLine(t)), i) var s = this.$getFoldLineTokens(t, i); else var s = this.session.getTokens(t);
            if (n || e.push("<div class='ace_line' style='height:", this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(t)), "px'>"), s.length) {
                var r = this.session.getRowSplitData(t);
                r && r.length ? this.$renderWrappedLine(e, s, r, n) : this.$renderSimpleLine(e, s)
            }
            this.showInvisibles && (i && (t = i.end.row), e.push("<span class='ace_invisible ace_invisible_eol'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")), n || e.push("</div>")
        }, this.$getFoldLineTokens = function (e, t) {
            function n(e, t, n) {
                for (var i = 0, r = 0; r + e[i].value.length < t;) if (r += e[i].value.length, i++, i == e.length) return;
                if (r != t) {
                    var o = e[i].value.substring(t - r);
                    o.length > n - t && (o = o.substring(0, n - t)), s.push({
                        type: e[i].type,
                        value: o
                    }), r = t + o.length, i += 1
                }
                for (; r < n && i < e.length;) {
                    var o = e[i].value;
                    o.length + r > n ? s.push({
                        type: e[i].type,
                        value: o.substring(0, n - r)
                    }) : s.push(e[i]), r += o.length, i += 1
                }
            }

            var i = this.session, s = [], r = i.getTokens(e);
            return t.walk(function (e, t, o, a, l) {
                null != e ? s.push({type: "fold", value: e}) : (l && (r = i.getTokens(t)), r.length && n(r, a, o))
            }, t.end.row, this.session.getLine(t.end.row).length), s
        }, this.$useLineGroups = function () {
            return this.session.getUseWrapMode()
        }, this.destroy = function () {
            clearInterval(this.$pollSizeChangesTimer), this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode), delete this.$measureNode
        }
    }).call(a.prototype), t.Text = a
}), define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var i, s = e("../lib/dom"), r = function (e) {
        this.element = s.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), void 0 === i && (i = !("opacity" in this.element.style)), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), s.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = (i ? this.$updateVisibility : this.$updateOpacity).bind(this)
    };
    (function () {
        this.$updateVisibility = function (e) {
            for (var t = this.cursors, n = t.length; n--;) t[n].style.visibility = e ? "" : "hidden"
        }, this.$updateOpacity = function (e) {
            for (var t = this.cursors, n = t.length; n--;) t[n].style.opacity = e ? "" : "0"
        }, this.$padding = 0, this.setPadding = function (e) {
            this.$padding = e
        }, this.setSession = function (e) {
            this.session = e
        }, this.setBlinking = function (e) {
            e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
        }, this.setBlinkInterval = function (e) {
            e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
        }, this.setSmoothBlinking = function (e) {
            e == this.smoothBlinking || i || (this.smoothBlinking = e, s.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.$updateCursors = this.$updateOpacity.bind(this), this.restartTimer())
        }, this.addCursor = function () {
            var e = s.createElement("div");
            return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
        }, this.removeCursor = function () {
            if (this.cursors.length > 1) {
                var e = this.cursors.pop();
                return e.parentNode.removeChild(e), e
            }
        }, this.hideCursor = function () {
            this.isVisible = !1, s.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
        }, this.showCursor = function () {
            this.isVisible = !0, s.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
        }, this.restartTimer = function () {
            var e = this.$updateCursors;
            if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.smoothBlinking && s.removeCssClass(this.element, "ace_smooth-blinking"), e(!0), this.isBlinking && this.blinkInterval && this.isVisible) {
                this.smoothBlinking && setTimeout(function () {
                    s.addCssClass(this.element, "ace_smooth-blinking")
                }.bind(this));
                var t = function () {
                    this.timeoutId = setTimeout(function () {
                        e(!1)
                    }, .6 * this.blinkInterval)
                }.bind(this);
                this.intervalId = setInterval(function () {
                    e(!0), t()
                }, this.blinkInterval), t()
            }
        }, this.getPixelPosition = function (e, t) {
            if (!this.config || !this.session) return {left: 0, top: 0};
            e || (e = this.session.selection.getCursor());
            var n = this.session.documentToScreenPosition(e), i = this.$padding + n.column * this.config.characterWidth,
                s = (n.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return {left: i, top: s}
        }, this.update = function (e) {
            this.config = e;
            var t = this.session.$selectionMarkers, n = 0, i = 0;
            void 0 !== t && 0 !== t.length || (t = [{cursor: null}]);
            for (var n = 0, s = t.length; n < s; n++) {
                var r = this.getPixelPosition(t[n].cursor, !0);
                if (!((r.top > e.height + e.offset || r.top < 0) && n > 1)) {
                    var o = (this.cursors[i++] || this.addCursor()).style;
                    this.drawCursor ? this.drawCursor(o, r, e, t[n], this.session) : (o.left = r.left + "px", o.top = r.top + "px", o.width = e.characterWidth + "px", o.height = e.lineHeight + "px")
                }
            }
            for (; this.cursors.length > i;) this.removeCursor();
            var a = this.session.getOverwrite();
            this.$setOverwrite(a), this.$pixelPos = r, this.restartTimer()
        }, this.drawCursor = null, this.$setOverwrite = function (e) {
            e != this.overwrite && (this.overwrite = e, e ? s.addCssClass(this.element, "ace_overwrite-cursors") : s.removeCssClass(this.element, "ace_overwrite-cursors"))
        }, this.destroy = function () {
            clearInterval(this.intervalId), clearTimeout(this.timeoutId)
        }
    }).call(r.prototype), t.Cursor = r
}), define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var i = e("./lib/oop"), s = e("./lib/dom"), r = e("./lib/event"), o = e("./lib/event_emitter").EventEmitter,
        a = 32768, l = function (e) {
            this.element = s.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = s.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, r.addListener(this.element, "scroll", this.onScroll.bind(this)), r.addListener(this.element, "mousedown", r.preventDefault)
        };
    (function () {
        i.implement(this, o), this.setVisible = function (e) {
            this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1
        }
    }).call(l.prototype);
    var c = function (e, t) {
        l.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, t.$scrollbarWidth = this.width = s.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px"
    };
    i.inherits(c, l), function () {
        this.classSuffix = "-v", this.onScroll = function () {
            if (!this.skipEvent) {
                if (this.scrollTop = this.element.scrollTop, 1 != this.coeff) {
                    var e = this.element.clientHeight / this.scrollHeight;
                    this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e)
                }
                this._emit("scroll", {data: this.scrollTop})
            }
            this.skipEvent = !1
        }, this.getWidth = function () {
            return this.isVisible ? this.width : 0
        }, this.setHeight = function (e) {
            this.element.style.height = e + "px"
        }, this.setInnerHeight = this.setScrollHeight = function (e) {
            this.scrollHeight = e, e > a ? (this.coeff = a / e, e = a) : 1 != this.coeff && (this.coeff = 1), this.inner.style.height = e + "px"
        }, this.setScrollTop = function (e) {
            this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = e, this.element.scrollTop = e * this.coeff)
        }
    }.call(c.prototype);
    var h = function (e, t) {
        l.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
    };
    i.inherits(h, l), function () {
        this.classSuffix = "-h", this.onScroll = function () {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {data: this.scrollLeft})), this.skipEvent = !1
        }, this.getHeight = function () {
            return this.isVisible ? this.height : 0
        }, this.setWidth = function (e) {
            this.element.style.width = e + "px"
        }, this.setInnerWidth = function (e) {
            this.inner.style.width = e + "px"
        }, this.setScrollWidth = function (e) {
            this.inner.style.width = e + "px"
        }, this.setScrollLeft = function (e) {
            this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
        }
    }.call(h.prototype), t.ScrollBar = c, t.ScrollBarV = c, t.ScrollBarH = h, t.VScrollBar = c, t.HScrollBar = h
}), define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function (e, t, n) {
    "use strict";
    var i = e("./lib/event"), s = function (e, t) {
        this.onRender = e, this.pending = !1, this.changes = 0, this.window = t || window
    };
    (function () {
        this.schedule = function (e) {
            if (this.changes = this.changes | e, !this.pending && this.changes) {
                this.pending = !0;
                var t = this;
                i.nextFrame(function () {
                    t.pending = !1;
                    for (var e; e = t.changes;) t.changes = 0, t.onRender(e)
                }, this.window)
            }
        }
    }).call(s.prototype), t.RenderLoop = s
}), define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, n) {
    var i = e("../lib/oop"), s = e("../lib/dom"), r = e("../lib/lang"), o = e("../lib/useragent"),
        a = e("../lib/event_emitter").EventEmitter, l = 0, c = t.FontMetrics = function (e) {
            this.el = s.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = s.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = s.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), l || this.$testFractionalRect(), this.$measureNode.innerHTML = r.stringRepeat("X", l), this.$characterSize = {
                width: 0,
                height: 0
            }, this.checkForSizeChanges()
        };
    (function () {
        i.implement(this, a), this.$characterSize = {width: 0, height: 0}, this.$testFractionalRect = function () {
            var e = s.createElement("div");
            this.$setMeasureNodeStyles(e.style), e.style.width = "0.2px", document.documentElement.appendChild(e);
            var t = e.getBoundingClientRect().width;
            l = t > 0 && t < 1 ? 50 : 100, e.parentNode.removeChild(e)
        }, this.$setMeasureNodeStyles = function (e, t) {
            e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", o.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
        }, this.checkForSizeChanges = function () {
            var e = this.$measureSizes();
            if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                this.$measureNode.style.fontWeight = "bold";
                var t = this.$measureSizes();
                this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {data: e})
            }
        }, this.$pollSizeChanges = function () {
            if (this.$pollSizeChangesTimer) return this.$pollSizeChangesTimer;
            var e = this;
            return this.$pollSizeChangesTimer = setInterval(function () {
                e.checkForSizeChanges()
            }, 500)
        }, this.setPolling = function (e) {
            e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0)
        }, this.$measureSizes = function () {
            if (50 === l) {
                var e = null;
                try {
                    e = this.$measureNode.getBoundingClientRect()
                } catch (t) {
                    e = {width: 0, height: 0}
                }
                var n = {height: e.height, width: e.width / l}
            } else var n = {height: this.$measureNode.clientHeight, width: this.$measureNode.clientWidth / l};
            return 0 === n.width || 0 === n.height ? null : n
        }, this.$measureCharWidth = function (e) {
            this.$main.innerHTML = r.stringRepeat(e, l);
            var t = this.$main.getBoundingClientRect();
            return t.width / l
        }, this.getCharacterWidth = function (e) {
            var t = this.charSizes[e];
            return void 0 === t && (t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
        }, this.destroy = function () {
            clearInterval(this.$pollSizeChangesTimer), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
        }
    }).call(c.prototype)
}), define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var i = e("./lib/oop"), s = e("./lib/dom"), r = e("./config"), o = e("./lib/useragent"),
        a = e("./layer/gutter").Gutter, l = e("./layer/marker").Marker, c = e("./layer/text").Text,
        h = e("./layer/cursor").Cursor, u = e("./scrollbar").HScrollBar, d = e("./scrollbar").VScrollBar,
        f = e("./renderloop").RenderLoop, p = e("./layer/font_metrics").FontMetrics,
        g = e("./lib/event_emitter").EventEmitter,
        m = '.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}';
    s.importCssString(m, "ace_editor.css");
    var C = function (e, t) {
        var n = this;
        this.container = e || s.createElement("div"), this.$keepTextAreaAtCursor = !o.isOldIE, s.addCssClass(this.container, "ace_editor"), this.setTheme(t), this.$gutter = s.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.scroller = s.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = s.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new a(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new l(this.content);
        var i = this.$textLayer = new c(this.content);
        this.canvas = i.element, this.$markerFront = new l(this.content), this.$cursorLayer = new h(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new d(this.container, this), this.scrollBarH = new u(this.container, this), this.scrollBarV.addEventListener("scroll", function (e) {
            n.$scrollAnimation || n.session.setScrollTop(e.data - n.scrollMargin.top)
        }), this.scrollBarH.addEventListener("scroll", function (e) {
            n.$scrollAnimation || n.session.setScrollLeft(e.data - n.scrollMargin.left)
        }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
            row: 0,
            column: 0
        }, this.$fontMetrics = new p(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", function (e) {
            n.updateCharacterSize(), n.onResize(!0, n.gutterWidth, n.$size.width, n.$size.height), n._signal("changeCharacterSize", e)
        }), this.$size = {
            width: 0,
            height: 0,
            scrollerHeight: 0,
            scrollerWidth: 0,
            $dirty: !0
        }, this.layerConfig = {
            width: 1,
            padding: 0,
            firstRow: 0,
            firstRowScreen: 0,
            lastRow: 0,
            lineHeight: 0,
            characterWidth: 0,
            minHeight: 1,
            maxHeight: 1,
            offset: 0,
            height: 1,
            gutterOffset: 1
        }, this.scrollMargin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
        }, this.$loop = new f(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), r.resetOptions(this), r._emit("renderer", this)
    };
    (function () {
        this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, i.implement(this, g), this.updateCharacterSize = function () {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin()
        }, this.setSession = function (e) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), e && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
        }, this.updateLines = function (e, t, n) {
            if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
                firstRow: e,
                lastRow: t
            }, this.$changedLines.lastRow < this.layerConfig.firstRow) {
                if (!n) return;
                this.$changedLines.lastRow = this.layerConfig.lastRow
            }
            this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
        }, this.onChangeNewLineMode = function () {
            this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar()
        }, this.onChangeTabSize = function () {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
        }, this.updateText = function () {
            this.$loop.schedule(this.CHANGE_TEXT)
        }, this.updateFull = function (e) {
            e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
        }, this.updateFontSize = function () {
            this.$textLayer.checkForSizeChanges()
        }, this.$changes = 0, this.$updateSizeAsync = function () {
            this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
        }, this.onResize = function (e, t, n, i) {
            if (!(this.resizing > 2)) {
                this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
                var s = this.container;
                i || (i = s.clientHeight || s.scrollHeight), n || (n = s.clientWidth || s.scrollWidth);
                var r = this.$updateCachedSize(e, t, n, i);
                if (!this.$size.scrollerHeight || !n && !i) return this.resizing = 0;
                e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(r | this.$changes, !0) : this.$loop.schedule(r | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null
            }
        }, this.$updateCachedSize = function (e, t, n, i) {
            i -= this.$extraHeight || 0;
            var s = 0, r = this.$size, o = {
                width: r.width,
                height: r.height,
                scrollerHeight: r.scrollerHeight,
                scrollerWidth: r.scrollerWidth
            };
            return i && (e || r.height != i) && (r.height = i, s |= this.CHANGE_SIZE, r.scrollerHeight = r.height, this.$horizScroll && (r.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", s |= this.CHANGE_SCROLL), n && (e || r.width != n) && (s |= this.CHANGE_SIZE, r.width = n, null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, this.scrollBarH.element.style.left = this.scroller.style.left = t + "px", r.scrollerWidth = Math.max(0, n - t - this.scrollBarV.getWidth()), this.scrollBarH.element.style.right = this.scroller.style.right = this.scrollBarV.getWidth() + "px", this.scroller.style.bottom = this.scrollBarH.getHeight() + "px", (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (s |= this.CHANGE_FULL)), r.$dirty = !n || !i, s && this._signal("resize", o), s
        }, this.onGutterResize = function () {
            var e = this.$showGutter ? this.$gutter.offsetWidth : 0;
            e != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, e, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(), this.$loop.schedule(this.CHANGE_MARKER))
        }, this.adjustWrapLimit = function () {
            var e = this.$size.scrollerWidth - 2 * this.$padding, t = Math.floor(e / this.characterWidth);
            return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
        }, this.setAnimatedScroll = function (e) {
            this.setOption("animatedScroll", e)
        }, this.getAnimatedScroll = function () {
            return this.$animatedScroll
        }, this.setShowInvisibles = function (e) {
            this.setOption("showInvisibles", e)
        }, this.getShowInvisibles = function () {
            return this.getOption("showInvisibles")
        }, this.getDisplayIndentGuides = function () {
            return this.getOption("displayIndentGuides")
        }, this.setDisplayIndentGuides = function (e) {
            this.setOption("displayIndentGuides", e)
        }, this.setShowPrintMargin = function (e) {
            this.setOption("showPrintMargin", e)
        }, this.getShowPrintMargin = function () {
            return this.getOption("showPrintMargin")
        }, this.setPrintMarginColumn = function (e) {
            this.setOption("printMarginColumn", e)
        }, this.getPrintMarginColumn = function () {
            return this.getOption("printMarginColumn")
        }, this.getShowGutter = function () {
            return this.getOption("showGutter")
        }, this.setShowGutter = function (e) {
            return this.setOption("showGutter", e)
        }, this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets")
        }, this.setFadeFoldWidgets = function (e) {
            this.setOption("fadeFoldWidgets", e)
        }, this.setHighlightGutterLine = function (e) {
            this.setOption("highlightGutterLine", e)
        }, this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine")
        }, this.$updateGutterLineHighlight = function () {
            var e = this.$cursorLayer.$pixelPos, t = this.layerConfig.lineHeight;
            if (this.session.getUseWrapMode()) {
                var n = this.session.selection.getCursor();
                n.column = 0, e = this.$cursorLayer.getPixelPosition(n, !0), t *= this.session.getRowLength(n.row)
            }
            this.$gutterLineHighlight.style.top = e.top - this.layerConfig.offset + "px", this.$gutterLineHighlight.style.height = t + "px"
        }, this.$updatePrintMargin = function () {
            if (this.$showPrintMargin || this.$printMarginEl) {
                if (!this.$printMarginEl) {
                    var e = s.createElement("div");
                    e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = s.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
                }
                var t = this.$printMarginEl.style;
                t.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit()
            }
        }, this.getContainerElement = function () {
            return this.container
        }, this.getMouseEventTarget = function () {
            return this.scroller
        }, this.getTextAreaContainer = function () {
            return this.container
        }, this.$moveTextAreaToCursor = function () {
            if (this.$keepTextAreaAtCursor) {
                var e = this.layerConfig, t = this.$cursorLayer.$pixelPos.top, n = this.$cursorLayer.$pixelPos.left;
                t -= e.offset;
                var i = this.textarea.style, s = this.lineHeight;
                if (t < 0 || t > e.height - s) return void (i.top = i.left = "0");
                var r = this.characterWidth;
                if (this.$composition) {
                    var o = this.textarea.value.replace(/^\x01+/, "");
                    r *= this.session.$getStringScreenWidth(o)[0] + 2, s += 2
                }
                n -= this.scrollLeft, n > this.$size.scrollerWidth - r && (n = this.$size.scrollerWidth - r), n += this.gutterWidth, i.height = s + "px", i.width = r + "px", i.left = Math.min(n, this.$size.scrollerWidth - r) + "px", i.top = Math.min(t, this.$size.height - s) + "px"
            }
        }, this.getFirstVisibleRow = function () {
            return this.layerConfig.firstRow
        }, this.getFirstFullyVisibleRow = function () {
            return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
        }, this.getLastFullyVisibleRow = function () {
            var e = this.layerConfig, t = e.lastRow, n = this.session.documentToScreenRow(t, 0) * e.lineHeight;
            return n - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t
        }, this.getLastVisibleRow = function () {
            return this.layerConfig.lastRow
        }, this.$padding = null, this.setPadding = function (e) {
            this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
        }, this.setScrollMargin = function (e, t, n, i) {
            var s = this.scrollMargin;
            s.top = 0 | e, s.bottom = 0 | t, s.right = 0 | i, s.left = 0 | n, s.v = s.top + s.bottom, s.h = s.left + s.right, s.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-s.top), this.updateFull()
        }, this.getHScrollBarAlwaysVisible = function () {
            return this.$hScrollBarAlwaysVisible
        }, this.setHScrollBarAlwaysVisible = function (e) {
            this.setOption("hScrollBarAlwaysVisible", e)
        }, this.getVScrollBarAlwaysVisible = function () {
            return this.$vScrollBarAlwaysVisible
        }, this.setVScrollBarAlwaysVisible = function (e) {
            this.setOption("vScrollBarAlwaysVisible", e)
        }, this.$updateScrollBarV = function () {
            var e = this.layerConfig.maxHeight, t = this.$size.scrollerHeight;
            !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
        }, this.$updateScrollBarH = function () {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
        }, this.$frozen = !1, this.freeze = function () {
            this.$frozen = !0
        }, this.unfreeze = function () {
            this.$frozen = !1
        }, this.$renderChanges = function (e, t) {
            if (this.$changes && (e |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !e && !t) return void (this.$changes |= e);
            if (this.$size.$dirty) return this.$changes |= e, this.onResize(!0);
            this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender");
            var n = this.layerConfig;
            if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                if (e |= this.$computeLayerConfig(), n.firstRow != this.layerConfig.firstRow && n.firstRowScreen == this.layerConfig.firstRowScreen) {
                    var i = this.scrollTop + (n.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                    i > 0 && (this.scrollTop = i, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig())
                }
                n = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), this.$gutterLayer.element.style.marginTop = -n.offset + "px", this.content.style.marginTop = -n.offset + "px", this.content.style.width = n.width + 2 * this.$padding + "px", this.content.style.height = n.minHeight + "px"
            }
            return e & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = -this.scrollLeft + "px", this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), e & this.CHANGE_FULL ? (this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), void this._signal("afterRender")) : e & this.CHANGE_SCROLL ? (e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(n) : this.$textLayer.scrollLines(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this.$moveTextAreaToCursor(), void this._signal("afterRender")) : (e & this.CHANGE_TEXT ? (this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(n) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(n), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(n), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(n), void this._signal("afterRender"))
        }, this.$autosize = function () {
            var e = this.session.getScreenLength() * this.lineHeight, t = this.$maxLines * this.lineHeight,
                n = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);
            this.$horizScroll && (n += this.scrollBarH.getHeight()), this.$maxPixelHeight && n > this.$maxPixelHeight && (n = this.$maxPixelHeight);
            var i = e > t;
            if (n != this.desiredHeight || this.$size.height != this.desiredHeight || i != this.$vScroll) {
                i != this.$vScroll && (this.$vScroll = i, this.scrollBarV.setVisible(i));
                var s = this.container.clientWidth;
                this.container.style.height = n + "px", this.$updateCachedSize(!0, this.$gutterWidth, s, n), this.desiredHeight = n, this._signal("autosize")
            }
        }, this.$computeLayerConfig = function () {
            var e = this.session, t = this.$size, n = t.height <= 2 * this.lineHeight,
                i = this.session.getScreenLength(), s = i * this.lineHeight, r = this.$getLongestLine(),
                o = !n && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - r - 2 * this.$padding < 0),
                a = this.$horizScroll !== o;
            a && (this.$horizScroll = o, this.scrollBarH.setVisible(o));
            var l = this.$vScroll;
            this.$maxLines && this.lineHeight > 1 && this.$autosize();
            var c = this.scrollTop % this.lineHeight, h = t.scrollerHeight + this.lineHeight,
                u = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
            s += u;
            var d = this.scrollMargin;
            this.session.setScrollTop(Math.max(-d.top, Math.min(this.scrollTop, s - t.scrollerHeight + d.bottom))), this.session.setScrollLeft(Math.max(-d.left, Math.min(this.scrollLeft, r + 2 * this.$padding - t.scrollerWidth + d.right)));
            var f = !n && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - s + u < 0 || this.scrollTop > d.top),
                p = l !== f;
            p && (this.$vScroll = f, this.scrollBarV.setVisible(f));
            var g, m, C = Math.ceil(h / this.lineHeight) - 1,
                v = Math.max(0, Math.round((this.scrollTop - c) / this.lineHeight)), A = v + C, y = this.lineHeight;
            v = e.screenToDocumentRow(v, 0);
            var E = e.getFoldLine(v);
            E && (v = E.start.row), g = e.documentToScreenRow(v, 0), m = e.getRowLength(v) * y, A = Math.min(e.screenToDocumentRow(A, 0), e.getLength() - 1), h = t.scrollerHeight + e.getRowLength(A) * y + m, c = this.scrollTop - g * y;
            var w = 0;
            return this.layerConfig.width != r && (w = this.CHANGE_H_SCROLL), (a || p) && (w = this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), p && (r = this.$getLongestLine())), this.layerConfig = {
                width: r,
                padding: this.$padding,
                firstRow: v,
                firstRowScreen: g,
                lastRow: A,
                lineHeight: y,
                characterWidth: this.characterWidth,
                minHeight: h,
                maxHeight: s,
                offset: c,
                gutterOffset: y ? Math.max(0, Math.ceil((c + t.height - t.scrollerHeight) / y)) : 0,
                height: this.$size.scrollerHeight
            }, w
        }, this.$updateLines = function () {
            var e = this.$changedLines.firstRow, t = this.$changedLines.lastRow;
            this.$changedLines = null;
            var n = this.layerConfig;
            if (!(e > n.lastRow + 1 || t < n.firstRow)) return t === 1 / 0 ? (this.$showGutter && this.$gutterLayer.update(n), void this.$textLayer.update(n)) : (this.$textLayer.updateLines(n, e, t), !0)
        }, this.$getLongestLine = function () {
            var e = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (e += 1), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
        }, this.updateFrontMarkers = function () {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
        }, this.updateBackMarkers = function () {
            this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
        }, this.addGutterDecoration = function (e, t) {
            this.$gutterLayer.addGutterDecoration(e, t)
        }, this.removeGutterDecoration = function (e, t) {
            this.$gutterLayer.removeGutterDecoration(e, t)
        }, this.updateBreakpoints = function (e) {
            this.$loop.schedule(this.CHANGE_GUTTER)
        }, this.setAnnotations = function (e) {
            this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
        }, this.updateCursor = function () {
            this.$loop.schedule(this.CHANGE_CURSOR)
        }, this.hideCursor = function () {
            this.$cursorLayer.hideCursor()
        }, this.showCursor = function () {
            this.$cursorLayer.showCursor()
        }, this.scrollSelectionIntoView = function (e, t, n) {
            this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n)
        }, this.scrollCursorIntoView = function (e, t, n) {
            if (0 !== this.$size.scrollerHeight) {
                var i = this.$cursorLayer.getPixelPosition(e), s = i.left, r = i.top, o = n && n.top || 0,
                    a = n && n.bottom || 0, l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                l + o > r ? (t && l + o > r + this.lineHeight && (r -= t * this.$size.scrollerHeight), 0 === r && (r = -this.scrollMargin.top), this.session.setScrollTop(r)) : l + this.$size.scrollerHeight - a < r + this.lineHeight && (t && l + this.$size.scrollerHeight - a < r - this.lineHeight && (r += t * this.$size.scrollerHeight), this.session.setScrollTop(r + this.lineHeight - this.$size.scrollerHeight));
                var c = this.scrollLeft;
                c > s ? (s < this.$padding + 2 * this.layerConfig.characterWidth && (s = -this.scrollMargin.left), this.session.setScrollLeft(s)) : c + this.$size.scrollerWidth < s + this.characterWidth ? this.session.setScrollLeft(Math.round(s + this.characterWidth - this.$size.scrollerWidth)) : c <= this.$padding && s - c < this.characterWidth && this.session.setScrollLeft(0)
            }
        }, this.getScrollTop = function () {
            return this.session.getScrollTop()
        }, this.getScrollLeft = function () {
            return this.session.getScrollLeft()
        }, this.getScrollTopRow = function () {
            return this.scrollTop / this.lineHeight
        }, this.getScrollBottomRow = function () {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
        }, this.scrollToRow = function (e) {
            this.session.setScrollTop(e * this.lineHeight)
        }, this.alignCursor = function (e, t) {
            "number" == typeof e && (e = {row: e, column: 0});
            var n = this.$cursorLayer.getPixelPosition(e), i = this.$size.scrollerHeight - this.lineHeight,
                s = n.top - i * (t || 0);
            return this.session.setScrollTop(s), s
        }, this.STEPS = 8, this.$calcSteps = function (e, t) {
            var n = 0, i = this.STEPS, s = [], r = function (e, t, n) {
                return n * (Math.pow(e - 1, 3) + 1) + t
            };
            for (n = 0; n < i; ++n) s.push(r(n / this.STEPS, e, t - e));
            return s
        }, this.scrollToLine = function (e, t, n, i) {
            var s = this.$cursorLayer.getPixelPosition({row: e, column: 0}), r = s.top;
            t && (r -= this.$size.scrollerHeight / 2);
            var o = this.scrollTop;
            this.session.setScrollTop(r), n !== !1 && this.animateScrolling(o, i)
        }, this.animateScrolling = function (e, t) {
            var n = this.scrollTop;
            if (this.$animatedScroll) {
                var i = this;
                if (e != n) {
                    if (this.$scrollAnimation) {
                        var s = this.$scrollAnimation.steps;
                        if (s.length && (e = s[0], e == n)) return
                    }
                    var r = i.$calcSteps(e, n);
                    this.$scrollAnimation = {
                        from: e,
                        to: n,
                        steps: r
                    }, clearInterval(this.$timer), i.session.setScrollTop(r.shift()), i.session.$scrollTop = n, this.$timer = setInterval(function () {
                        r.length ? (i.session.setScrollTop(r.shift()), i.session.$scrollTop = n) : null != n ? (i.session.$scrollTop = -1, i.session.setScrollTop(n), n = null) : (i.$timer = clearInterval(i.$timer), i.$scrollAnimation = null, t && t())
                    }, 10)
                }
            }
        }, this.scrollToY = function (e) {
            this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
        }, this.scrollToX = function (e) {
            this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
        }, this.scrollTo = function (e, t) {
            this.session.setScrollTop(t), this.session.setScrollLeft(t)
        }, this.scrollBy = function (e, t) {
            t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
        }, this.isScrollableBy = function (e, t) {
            return t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || (t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || (e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || (e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right || void 0)))
        }, this.pixelToScreenCoordinates = function (e, t) {
            var n = this.scroller.getBoundingClientRect(),
                i = (e + this.scrollLeft - n.left - this.$padding) / this.characterWidth,
                s = Math.floor((t + this.scrollTop - n.top) / this.lineHeight), r = Math.round(i);
            return {row: s, column: r, side: i - r > 0 ? 1 : -1}
        }, this.screenToTextCoordinates = function (e, t) {
            var n = this.scroller.getBoundingClientRect(),
                i = Math.round((e + this.scrollLeft - n.left - this.$padding) / this.characterWidth),
                s = (t + this.scrollTop - n.top) / this.lineHeight;
            return this.session.screenToDocumentPosition(s, Math.max(i, 0))
        }, this.textToScreenCoordinates = function (e, t) {
            var n = this.scroller.getBoundingClientRect(), i = this.session.documentToScreenPosition(e, t),
                s = this.$padding + Math.round(i.column * this.characterWidth), r = i.row * this.lineHeight;
            return {pageX: n.left + s - this.scrollLeft, pageY: n.top + r - this.scrollTop}
        }, this.visualizeFocus = function () {
            s.addCssClass(this.container, "ace_focus")
        }, this.visualizeBlur = function () {
            s.removeCssClass(this.container, "ace_focus")
        }, this.showComposition = function (e) {
            this.$composition || (this.$composition = {
                keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
                cssText: this.textarea.style.cssText
            }), this.$keepTextAreaAtCursor = !0, s.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor()
        },this.setCompositionText = function (e) {
            this.$moveTextAreaToCursor()
        },this.hideComposition = function () {
            this.$composition && (s.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor, this.textarea.style.cssText = this.$composition.cssText, this.$composition = null)
        },this.setTheme = function (e, t) {
            function n(n) {
                if (i.$themeId != e) return t && t();
                if (!n || !n.cssClass) throw new Error("couldn't load module " + e + " or it didn't call define");
                s.importCssString(n.cssText, n.cssClass, i.container.ownerDocument), i.theme && s.removeCssClass(i.container, i.theme.cssClass);
                var r = "padding" in n ? n.padding : "padding" in (i.theme || {}) ? 4 : i.$padding;
                i.$padding && r != i.$padding && i.setPadding(r), i.$theme = n.cssClass, i.theme = n, s.addCssClass(i.container, n.cssClass), s.setCssClass(i.container, "ace_dark", n.isDark), i.$size && (i.$size.width = 0, i.$updateSizeAsync()), i._dispatchEvent("themeLoaded", {theme: n}), t && t()
            }

            var i = this;
            if (this.$themeId = e, i._dispatchEvent("themeChange", {theme: e}), e && "string" != typeof e) n(e); else {
                var o = e || this.$options.theme.initialValue;
                r.loadModule(["theme", o], n)
            }
        },this.getTheme = function () {
            return this.$themeId
        },this.setStyle = function (e, t) {
            s.setCssClass(this.container, e, t !== !1)
        },this.unsetStyle = function (e) {
            s.removeCssClass(this.container, e)
        },this.setCursorStyle = function (e) {
            this.scroller.style.cursor != e && (this.scroller.style.cursor = e)
        },this.setMouseCursor = function (e) {
            this.scroller.style.cursor = e
        },this.destroy = function () {
            this.$textLayer.destroy(), this.$cursorLayer.destroy()
        }
    }).call(C.prototype), r.defineOptions(C.prototype, "renderer", {
        animatedScroll: {initialValue: !1}, showInvisibles: {
            set: function (e) {
                this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
            }, initialValue: !1
        }, showPrintMargin: {
            set: function () {
                this.$updatePrintMargin()
            }, initialValue: !0
        }, printMarginColumn: {
            set: function () {
                this.$updatePrintMargin()
            }, initialValue: 80
        }, printMargin: {
            set: function (e) {
                "number" == typeof e && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
            }, get: function () {
                return this.$showPrintMargin && this.$printMarginColumn
            }
        }, showGutter: {
            set: function (e) {
                this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
            }, initialValue: !0
        }, fadeFoldWidgets: {
            set: function (e) {
                s.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
            }, initialValue: !1
        }, showFoldWidgets: {
            set: function (e) {
                this.$gutterLayer.setShowFoldWidgets(e)
            }, initialValue: !0
        }, showLineNumbers: {
            set: function (e) {
                this.$gutterLayer.setShowLineNumbers(e), this.$loop.schedule(this.CHANGE_GUTTER)
            }, initialValue: !0
        }, displayIndentGuides: {
            set: function (e) {
                this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
            }, initialValue: !0
        }, highlightGutterLine: {
            set: function (e) {
                return this.$gutterLineHighlight ? (this.$gutterLineHighlight.style.display = e ? "" : "none", void (this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight())) : (this.$gutterLineHighlight = s.createElement("div"), this.$gutterLineHighlight.className = "ace_gutter-active-line", void this.$gutter.appendChild(this.$gutterLineHighlight))
            }, initialValue: !1, value: !0
        }, hScrollBarAlwaysVisible: {
            set: function (e) {
                this.$hScrollBarAlwaysVisible && this.$horizScroll || this.$loop.schedule(this.CHANGE_SCROLL)
            }, initialValue: !1
        }, vScrollBarAlwaysVisible: {
            set: function (e) {
                this.$vScrollBarAlwaysVisible && this.$vScroll || this.$loop.schedule(this.CHANGE_SCROLL)
            }, initialValue: !1
        }, fontSize: {
            set: function (e) {
                "number" == typeof e && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
            }, initialValue: 12
        }, fontFamily: {
            set: function (e) {
                this.container.style.fontFamily = e, this.updateFontSize()
            }
        }, maxLines: {
            set: function (e) {
                this.updateFull()
            }
        }, minLines: {
            set: function (e) {
                this.updateFull()
            }
        }, maxPixelHeight: {
            set: function (e) {
                this.updateFull()
            }, initialValue: 0
        }, scrollPastEnd: {
            set: function (e) {
                e = +e || 0, this.$scrollPastEnd != e && (this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL))
            }, initialValue: 0, handlesSet: !0
        }, fixedWidthGutter: {
            set: function (e) {
                this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
            }
        }, theme: {
            set: function (e) {
                this.setTheme(e)
            }, get: function () {
                return this.$themeId || this.theme
            }, initialValue: "./theme/textmate", handlesSet: !0
        }
    }), t.VirtualRenderer = C
}), define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function (e, t, n) {
    "use strict";
    var i = e("../lib/oop"), s = e("../lib/net"), r = e("../lib/event_emitter").EventEmitter, o = e("../config"),
        a = function (t, n, i, s) {
            if (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), o.get("packaged") || !e.toUrl) s = s || o.moduleUrl(n, "worker"); else {
                var r = this.$normalizePath;
                s = s || r(e.toUrl("ace/worker/worker.js", null, "_"));
                var a = {};
                t.forEach(function (t) {
                    a[t] = r(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
                })
            }
            try {
                this.$worker = new Worker(s)
            } catch (l) {
                if (!(l instanceof window.DOMException)) throw l;
                var c = this.$workerBlob(s), h = window.URL || window.webkitURL, u = h.createObjectURL(c);
                this.$worker = new Worker(u), h.revokeObjectURL(u)
            }
            this.$worker.postMessage({
                init: !0,
                tlns: a,
                module: n,
                classname: i
            }), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
        };
    (function () {
        i.implement(this, r), this.onMessage = function (e) {
            var t = e.data;
            switch (t.type) {
                case"event":
                    this._signal(t.name, {data: t.data});
                    break;
                case"call":
                    var n = this.callbacks[t.id];
                    n && (n(t.data), delete this.callbacks[t.id]);
                    break;
                case"error":
                    this.reportError(t.data);
                    break;
                case"log":
                    window.console && console.log && console.log.apply(console, t.data)
            }
        }, this.reportError = function (e) {
            window.console && console.error && console.error(e)
        }, this.$normalizePath = function (e) {
            return s.qualifyURL(e)
        }, this.terminate = function () {
            this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
        }, this.send = function (e, t) {
            this.$worker.postMessage({command: e, args: t})
        }, this.call = function (e, t, n) {
            if (n) {
                var i = this.callbackId++;
                this.callbacks[i] = n, t.push(i)
            }
            this.send(e, t)
        }, this.emit = function (e, t) {
            try {
                this.$worker.postMessage({event: e, data: {data: t.data}})
            } catch (n) {
                console.error(n.stack)
            }
        }, this.attachToDocument = function (e) {
            this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
        }, this.changeListener = function (e) {
            this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), "insert" == e.action ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end)
        }, this.$sendDeltaQueue = function () {
            var e = this.deltaQueue;
            e && (this.deltaQueue = null, e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {data: e}))
        }, this.$workerBlob = function (e) {
            var t = "importScripts('" + s.qualifyURL(e) + "');";
            try {
                return new Blob([t], {type: "application/javascript"})
            } catch (n) {
                var i = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, r = new i;
                return r.append(t), r.getBlob("application/javascript")
            }
        }
    }).call(a.prototype);
    var l = function (e, t, n) {
        this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.callbackId = 1, this.callbacks = {}, this.messageBuffer = [];
        var i = null, s = !1, a = Object.create(r), l = this;
        this.$worker = {}, this.$worker.terminate = function () {
        }, this.$worker.postMessage = function (e) {
            l.messageBuffer.push(e), i && (s ? setTimeout(c) : c())
        }, this.setEmitSync = function (e) {
            s = e
        };
        var c = function () {
            var e = l.messageBuffer.shift();
            e.command ? i[e.command].apply(i, e.args) : e.event && a._signal(e.event, e.data)
        };
        a.postMessage = function (e) {
            l.onMessage({data: e})
        }, a.callback = function (e, t) {
            this.postMessage({type: "call", id: t, data: e})
        }, a.emit = function (e, t) {
            this.postMessage({type: "event", name: e, data: t})
        }, o.loadModule(["worker", t], function (e) {
            for (i = new e[n](a); l.messageBuffer.length;) c()
        })
    };
    l.prototype = a.prototype, t.UIWorkerClient = l, t.WorkerClient = a
}), define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    var i = e("./range").Range, s = e("./lib/event_emitter").EventEmitter, r = e("./lib/oop"),
        o = function (e, t, n, i, s, r) {
            var o = this;
            this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = s, this.othersClass = r, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = i, this.$onCursorChange = function () {
                setTimeout(function () {
                    o.onCursorChange()
                })
            }, this.$pos = n;
            var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {length: -1};
            this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
        };
    (function () {
        r.implement(this, s), this.setup = function () {
            var e = this, t = this.doc, n = this.session;
            this.selectionBefore = n.selection.toJSON(), n.selection.inMultiSelectMode && n.selection.toSingleRange(), this.pos = t.createAnchor(this.$pos.row, this.$pos.column);
            var s = this.pos;
            s.$insertRight = !0, s.detach(), s.markerId = n.addMarker(new i(s.row, s.column, s.row, s.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function (n) {
                var i = t.createAnchor(n.row, n.column);
                i.$insertRight = !0, i.detach(), e.others.push(i)
            }), n.setUndoSelect(!1)
        }, this.showOtherMarkers = function () {
            if (!this.othersActive) {
                var e = this.session, t = this;
                this.othersActive = !0, this.others.forEach(function (n) {
                    n.markerId = e.addMarker(new i(n.row, n.column, n.row, n.column + t.length), t.othersClass, null, !1)
                })
            }
        }, this.hideOtherMarkers = function () {
            if (this.othersActive) {
                this.othersActive = !1;
                for (var e = 0; e < this.others.length; e++) this.session.removeMarker(this.others[e].markerId)
            }
        }, this.onUpdate = function (e) {
            if (this.$updating) return this.updateAnchors(e);
            var t = e;
            if (t.start.row === t.end.row && t.start.row === this.pos.row) {
                this.$updating = !0;
                var n = "insert" === e.action ? t.end.column - t.start.column : t.start.column - t.end.column,
                    s = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1,
                    r = t.start.column - this.pos.column;
                if (this.updateAnchors(e), s && (this.length += n), s && !this.session.$fromUndo) if ("insert" === e.action) for (var o = this.others.length - 1; o >= 0; o--) {
                    var a = this.others[o], l = {row: a.row, column: a.column + r};
                    this.doc.insertMergedLines(l, e.lines)
                } else if ("remove" === e.action) for (var o = this.others.length - 1; o >= 0; o--) {
                    var a = this.others[o], l = {row: a.row, column: a.column + r};
                    this.doc.remove(new i(l.row, l.column, l.row, l.column - n))
                }
                this.$updating = !1, this.updateMarkers()
            }
        }, this.updateAnchors = function (e) {
            this.pos.onChange(e);
            for (var t = this.others.length; t--;) this.others[t].onChange(e);
            this.updateMarkers()
        }, this.updateMarkers = function () {
            if (!this.$updating) {
                var e = this, t = this.session, n = function (n, s) {
                    t.removeMarker(n.markerId), n.markerId = t.addMarker(new i(n.row, n.column, n.row, n.column + e.length), s, null, !1)
                };
                n(this.pos, this.mainClass);
                for (var s = this.others.length; s--;) n(this.others[s], this.othersClass)
            }
        }, this.onCursorChange = function (e) {
            if (!this.$updating && this.session) {
                var t = this.session.selection.getCursor();
                t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
            }
        }, this.detach = function () {
            this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null
        }, this.cancel = function () {
            if (this.$undoStackDepth !== -1) {
                for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, n = 0; n < t; n++) e.undo(!0);
                this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
            }
        }
    }).call(o.prototype), t.PlaceHolder = o
}), define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    function i(e, t) {
        return e.row == t.row && e.column == t.column
    }

    function s(e) {
        var t = e.domEvent, n = t.altKey, s = t.shiftKey, a = t.ctrlKey, l = e.getAccelKey(), c = e.getButton();
        if (a && o.isMac && (c = t.button), e.editor.inMultiSelectMode && 2 == c) return void e.editor.textInput.onContextMenu(e.domEvent);
        if (!a && !n && !l) return void (0 === c && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode());
        if (0 === c) {
            var h, u = e.editor, d = u.selection, f = u.inMultiSelectMode, p = e.getDocumentPosition(),
                g = d.getCursor(), m = e.inSelection() || d.isEmpty() && i(p, g), C = e.x, v = e.y, A = function (e) {
                    C = e.clientX, v = e.clientY
                }, y = u.session, E = u.renderer.pixelToScreenCoordinates(C, v), w = E;
            if (u.$mouseHandler.$enableJumpToDef) a && n || l && n ? h = s ? "block" : "add" : n && u.$blockSelectEnabled && (h = "block"); else if (l && !n) {
                if (h = "add", !f && s) return
            } else n && u.$blockSelectEnabled && (h = "block");
            if (h && o.isMac && t.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == h) {
                if (!f && m) return;
                if (!f) {
                    var b = d.toOrientedRange();
                    u.addSelectionMarker(b)
                }
                var F = d.rangeList.rangeAtPoint(p);
                u.$blockScrolling++, u.inVirtualSelectionMode = !0, s && (F = null, b = d.ranges[0] || b, u.removeSelectionMarker(b)), u.once("mouseup", function () {
                    var e = d.toOrientedRange();
                    F && e.isEmpty() && i(F.cursor, e.cursor) ? d.substractPoint(e.cursor) : (s ? d.substractPoint(b.cursor) : b && (u.removeSelectionMarker(b), d.addRange(b)), d.addRange(e)), u.$blockScrolling--, u.inVirtualSelectionMode = !1
                })
            } else if ("block" == h) {
                e.stop(), u.inVirtualSelectionMode = !0;
                var _, S = [], x = function () {
                    var e = u.renderer.pixelToScreenCoordinates(C, v), t = y.screenToDocumentPosition(e.row, e.column);
                    i(w, e) && i(t, d.lead) || (w = e, u.$blockScrolling++, u.selection.moveToPosition(t), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers(S), S = d.rectangularRangeBlock(w, E), u.$mouseHandler.$clickSelection && 1 == S.length && S[0].isEmpty() && (S[0] = u.$mouseHandler.$clickSelection.clone()), S.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers(), u.$blockScrolling--)
                };
                u.$blockScrolling++, f && !l ? d.toSingleRange() : !f && l && (_ = d.toOrientedRange(), u.addSelectionMarker(_)), s ? E = y.documentToScreenPosition(d.lead) : d.moveToPosition(p), u.$blockScrolling--, w = {
                    row: -1,
                    column: -1
                };
                var D = function (e) {
                    clearInterval(k), u.removeSelectionMarkers(S), S.length || (S = [d.toOrientedRange()]), u.$blockScrolling++, _ && (u.removeSelectionMarker(_), d.toSingleRange(_));
                    for (var t = 0; t < S.length; t++) d.addRange(S[t]);
                    u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null, u.$blockScrolling--
                }, L = x;
                r.capture(u.container, A, D);
                var k = setInterval(function () {
                    L()
                }, 20);
                return e.preventDefault()
            }
        }
    }

    var r = e("../lib/event"), o = e("../lib/useragent");
    t.onMouseDown = s
}), define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function (e, t, n) {
    t.defaultCommands = [{
        name: "addCursorAbove", exec: function (e) {
            e.selectMoreLines(-1)
        }, bindKey: {win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "addCursorBelow", exec: function (e) {
            e.selectMoreLines(1)
        }, bindKey: {win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "addCursorAboveSkipCurrent", exec: function (e) {
            e.selectMoreLines(-1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "addCursorBelowSkipCurrent", exec: function (e) {
            e.selectMoreLines(1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectMoreBefore", exec: function (e) {
            e.selectMore(-1)
        }, bindKey: {win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectMoreAfter", exec: function (e) {
            e.selectMore(1)
        }, bindKey: {win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectNextBefore", exec: function (e) {
            e.selectMore(-1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectNextAfter", exec: function (e) {
            e.selectMore(1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right"}, scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "splitIntoLines", exec: function (e) {
            e.multiSelect.splitIntoLines()
        }, bindKey: {win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L"}, readOnly: !0
    }, {
        name: "alignCursors", exec: function (e) {
            e.alignCursors()
        }, bindKey: {win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A"}, scrollIntoView: "cursor"
    }, {
        name: "findAll", exec: function (e) {
            e.findAll()
        }, bindKey: {win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G"}, scrollIntoView: "cursor",
        readOnly: !0
    }], t.multiSelectCommands = [{
        name: "singleSelection", bindKey: "esc", exec: function (e) {
            e.exitMultiSelectMode()
        }, scrollIntoView: "cursor", readOnly: !0, isAvailable: function (e) {
            return e && e.inMultiSelectMode
        }
    }];
    var i = e("../keyboard/hash_handler").HashHandler;
    t.keyboardHandler = new i(t.multiSelectCommands)
}), define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function (e, t, n) {
    function i(e, t, n) {
        return g.$options.wrap = !0, g.$options.needle = t, g.$options.backwards = n == -1, g.find(e)
    }

    function s(e, t) {
        return e.row == t.row && e.column == t.column
    }

    function r(e) {
        e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", h), e.commands.addCommands(f.defaultCommands), o(e))
    }

    function o(e) {
        function t(t) {
            i && (e.renderer.setMouseCursor(""), i = !1)
        }

        var n = e.textInput.getElement(), i = !1;
        u.addListener(n, "keydown", function (n) {
            var s = 18 == n.keyCode && !(n.ctrlKey || n.shiftKey || n.metaKey);
            e.$blockSelectEnabled && s ? i || (e.renderer.setMouseCursor("crosshair"), i = !0) : i && t()
        }), u.addListener(n, "keyup", t), u.addListener(n, "blur", t)
    }

    var a = e("./range_list").RangeList, l = e("./range").Range, c = e("./selection").Selection,
        h = e("./mouse/multi_select_handler").onMouseDown, u = e("./lib/event"), d = e("./lib/lang"),
        f = e("./commands/multi_select_commands");
    t.commands = f.defaultCommands.concat(f.multiSelectCommands);
    var p = e("./search").Search, g = new p, m = e("./edit_session").EditSession;
    (function () {
        this.getSelectionMarkers = function () {
            return this.$selectionMarkers
        }
    }).call(m.prototype), function () {
        this.ranges = null, this.rangeList = null, this.addRange = function (e, t) {
            if (e) {
                if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                    var n = this.toOrientedRange();
                    if (this.rangeList.add(n), this.rangeList.add(e), 2 != this.rangeList.ranges.length) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
                    this.rangeList.removeAll(), this.rangeList.add(n), this.$onAddRange(n)
                }
                e.cursor || (e.cursor = e.end);
                var i = this.rangeList.add(e);
                return this.$onAddRange(e), i.length && this.$onRemoveRange(i), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
            }
        }, this.toSingleRange = function (e) {
            e = e || this.ranges[0];
            var t = this.rangeList.removeAll();
            t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
        }, this.substractPoint = function (e) {
            var t = this.rangeList.substractPoint(e);
            if (t) return this.$onRemoveRange(t), t[0]
        }, this.mergeOverlappingRanges = function () {
            var e = this.rangeList.merge();
            e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
        }, this.$onAddRange = function (e) {
            this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {range: e})
        }, this.$onRemoveRange = function (e) {
            if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
                var t = this.rangeList.ranges.pop();
                e.push(t), this.rangeCount = 0
            }
            for (var n = e.length; n--;) {
                var i = this.ranges.indexOf(e[n]);
                this.ranges.splice(i, 1)
            }
            this._signal("removeRange", {ranges: e}), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), t = t || this.ranges[0], t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
        }, this.$initRangeList = function () {
            this.rangeList || (this.rangeList = new a, this.ranges = [], this.rangeCount = 0)
        }, this.getAllRanges = function () {
            return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
        }, this.splitIntoLines = function () {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges, t = e[e.length - 1], n = l.fromPoints(e[0].start, t.end);
                this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
            } else {
                var n = this.getRange(), i = this.isBackwards(), s = n.start.row, r = n.end.row;
                if (s == r) {
                    if (i) var o = n.end, a = n.start; else var o = n.start, a = n.end;
                    return this.addRange(l.fromPoints(a, a)), void this.addRange(l.fromPoints(o, o))
                }
                var c = [], h = this.getLineRange(s, !0);
                h.start.column = n.start.column, c.push(h);
                for (var u = s + 1; u < r; u++) c.push(this.getLineRange(u, !0));
                h = this.getLineRange(r, !0), h.end.column = n.end.column, c.push(h), c.forEach(this.addRange, this)
            }
        }, this.toggleBlockSelection = function () {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges, t = e[e.length - 1], n = l.fromPoints(e[0].start, t.end);
                this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
            } else {
                var i = this.session.documentToScreenPosition(this.selectionLead),
                    s = this.session.documentToScreenPosition(this.selectionAnchor),
                    r = this.rectangularRangeBlock(i, s);
                r.forEach(this.addRange, this)
            }
        }, this.rectangularRangeBlock = function (e, t, n) {
            var i = [], r = e.column < t.column;
            if (r) var o = e.column, a = t.column; else var o = t.column, a = e.column;
            var c = e.row < t.row;
            if (c) var h = e.row, u = t.row; else var h = t.row, u = e.row;
            o < 0 && (o = 0), h < 0 && (h = 0), h == u && (n = !0);
            for (var d = h; d <= u; d++) {
                var f = l.fromPoints(this.session.screenToDocumentPosition(d, o), this.session.screenToDocumentPosition(d, a));
                if (f.isEmpty()) {
                    if (p && s(f.end, p)) break;
                    var p = f.end
                }
                f.cursor = r ? f.start : f.end, i.push(f)
            }
            if (c && i.reverse(), !n) {
                for (var g = i.length - 1; i[g].isEmpty() && g > 0;) g--;
                if (g > 0) for (var m = 0; i[m].isEmpty();) m++;
                for (var C = g; C >= m; C--) i[C].isEmpty() && i.splice(C, 1)
            }
            return i
        }
    }.call(c.prototype);
    var C = e("./editor").Editor;
    (function () {
        this.updateSelectionMarkers = function () {
            this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.addSelectionMarker = function (e) {
            e.cursor || (e.cursor = e.end);
            var t = this.getSelectionStyle();
            return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
        }, this.removeSelectionMarker = function (e) {
            if (e.marker) {
                this.session.removeMarker(e.marker);
                var t = this.session.$selectionMarkers.indexOf(e);
                t != -1 && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
            }
        }, this.removeSelectionMarkers = function (e) {
            for (var t = this.session.$selectionMarkers, n = e.length; n--;) {
                var i = e[n];
                if (i.marker) {
                    this.session.removeMarker(i.marker);
                    var s = t.indexOf(i);
                    s != -1 && t.splice(s, 1)
                }
            }
            this.session.selectionMarkerCount = t.length
        }, this.$onAddRange = function (e) {
            this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.$onRemoveRange = function (e) {
            this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.$onMultiSelect = function (e) {
            this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(f.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
        }, this.$onSingleSelect = function (e) {
            this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(f.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
        }, this.$onMultiSelectExec = function (e) {
            var t = e.command, n = e.editor;
            if (n.multiSelect) {
                if (t.multiSelectAction) "forEach" == t.multiSelectAction ? i = n.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? i = n.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (n.exitMultiSelectMode(), i = t.exec(n, e.args || {})) : i = t.multiSelectAction(n, e.args || {}); else {
                    var i = t.exec(n, e.args || {});
                    n.multiSelect.addRange(n.multiSelect.toOrientedRange()), n.multiSelect.mergeOverlappingRanges()
                }
                return i
            }
        }, this.forEachSelection = function (e, t, n) {
            if (!this.inVirtualSelectionMode) {
                var i, s = n && n.keepOrder, r = 1 == n || n && n.$byLines, o = this.session, a = this.selection,
                    l = a.rangeList, h = (s ? a : l).ranges;
                if (!h.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});
                var u = a._eventRegistry;
                a._eventRegistry = {};
                var d = new c(o);
                this.inVirtualSelectionMode = !0;
                for (var f = h.length; f--;) {
                    if (r) for (; f > 0 && h[f].start.row == h[f - 1].end.row;) f--;
                    d.fromOrientedRange(h[f]), d.index = f, this.selection = o.selection = d;
                    var p = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                    i || void 0 === p || (i = p), d.toOrientedRange(h[f])
                }
                d.detach(), this.selection = o.selection = a, this.inVirtualSelectionMode = !1, a._eventRegistry = u, a.mergeOverlappingRanges();
                var g = this.renderer.$scrollAnimation;
                return this.onCursorChange(), this.onSelectionChange(), g && g.from == g.to && this.renderer.animateScrolling(g.from), i
            }
        }, this.exitMultiSelectMode = function () {
            this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
        }, this.getSelectedText = function () {
            var e = "";
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                for (var t = this.multiSelect.rangeList.ranges, n = [], i = 0; i < t.length; i++) n.push(this.session.getTextRange(t[i]));
                var s = this.session.getDocument().getNewLineCharacter();
                e = n.join(s), e.length == (n.length - 1) * s.length && (e = "")
            } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
            return e
        }, this.$checkMultiselectChange = function (e, t) {
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var n = this.multiSelect.ranges[0];
                if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;
                var i = t == this.multiSelect.anchor ? n.cursor == n.start ? n.end : n.start : n.cursor;
                i.row == t.row && this.session.$clipPositionToDocument(i.row, i.column).column == t.column || this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange())
            }
        }, this.findAll = function (e, t, n) {
            if (t = t || {}, t.needle = e || t.needle, void 0 == t.needle) {
                var i = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                t.needle = this.session.getTextRange(i)
            }
            this.$search.set(t);
            var s = this.$search.findAll(this.session);
            if (!s.length) return 0;
            this.$blockScrolling += 1;
            var r = this.multiSelect;
            n || r.toSingleRange(s[0]);
            for (var o = s.length; o--;) r.addRange(s[o], !0);
            return i && r.rangeList.rangeAtPoint(i.start) && r.addRange(i, !0), this.$blockScrolling -= 1, s.length
        }, this.selectMoreLines = function (e, t) {
            var n = this.selection.toOrientedRange(), i = n.cursor == n.end,
                s = this.session.documentToScreenPosition(n.cursor);
            this.selection.$desiredColumn && (s.column = this.selection.$desiredColumn);
            var r = this.session.screenToDocumentPosition(s.row + e, s.column);
            if (n.isEmpty()) var o = r; else var a = this.session.documentToScreenPosition(i ? n.end : n.start),
                o = this.session.screenToDocumentPosition(a.row + e, a.column);
            if (i) {
                var c = l.fromPoints(r, o);
                c.cursor = c.start
            } else {
                var c = l.fromPoints(o, r);
                c.cursor = c.end
            }
            if (c.desiredColumn = s.column, this.selection.inMultiSelectMode) {
                if (t) var h = n.cursor
            } else this.selection.addRange(n);
            this.selection.addRange(c), h && this.selection.substractPoint(h)
        }, this.transposeSelections = function (e) {
            for (var t = this.session, n = t.multiSelect, i = n.ranges, s = i.length; s--;) {
                var r = i[s];
                if (r.isEmpty()) {
                    var o = t.getWordRange(r.start.row, r.start.column);
                    r.start.row = o.start.row, r.start.column = o.start.column, r.end.row = o.end.row, r.end.column = o.end.column
                }
            }
            n.mergeOverlappingRanges();
            for (var a = [], s = i.length; s--;) {
                var r = i[s];
                a.unshift(t.getTextRange(r))
            }
            e < 0 ? a.unshift(a.pop()) : a.push(a.shift());
            for (var s = i.length; s--;) {
                var r = i[s], o = r.clone();
                t.replace(r, a[s]), r.start.row = o.start.row, r.start.column = o.start.column
            }
        }, this.selectMore = function (e, t, n) {
            var s = this.session, r = s.multiSelect, o = r.toOrientedRange();
            if (!o.isEmpty() || (o = s.getWordRange(o.start.row, o.start.column), o.cursor = e == -1 ? o.start : o.end, this.multiSelect.addRange(o), !n)) {
                var a = s.getTextRange(o), l = i(s, a, e);
                l && (l.cursor = e == -1 ? l.start : l.end, this.$blockScrolling += 1, this.session.unfold(l), this.multiSelect.addRange(l), this.$blockScrolling -= 1, this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(o.cursor)
            }
        }, this.alignCursors = function () {
            var e = this.session, t = e.multiSelect, n = t.ranges, i = -1, s = n.filter(function (e) {
                return e.cursor.row == i || void (i = e.cursor.row)
            });
            if (n.length && s.length != n.length - 1) {
                s.forEach(function (e) {
                    t.substractPoint(e.cursor)
                });
                var r = 0, o = 1 / 0, a = n.map(function (t) {
                    var n = t.cursor, i = e.getLine(n.row), s = i.substr(n.column).search(/\S/g);
                    return s == -1 && (s = 0), n.column > r && (r = n.column), s < o && (o = s), s
                });
                n.forEach(function (t, n) {
                    var i = t.cursor, s = r - i.column, c = a[n] - o;
                    s > c ? e.insert(i, d.stringRepeat(" ", s - c)) : e.remove(new l(i.row, i.column, i.row, i.column - s + c)), t.start.column = t.end.column = r, t.start.row = t.end.row = i.row, t.cursor = t.end
                }), t.fromOrientedRange(n[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            } else {
                var c = this.selection.getRange(), h = c.start.row, u = c.end.row, f = h == u;
                if (f) {
                    var p, g = this.session.getLength();
                    do p = this.session.getLine(u); while (/[=:]/.test(p) && ++u < g);
                    do p = this.session.getLine(h); while (/[=:]/.test(p) && --h > 0);
                    h < 0 && (h = 0), u >= g && (u = g - 1)
                }
                var m = this.session.removeFullLines(h, u);
                m = this.$reAlignText(m, f), this.session.insert({
                    row: h,
                    column: 0
                }, m.join("\n") + "\n"), f || (c.start.column = 0, c.end.column = m[m.length - 1].length), this.selection.setRange(c)
            }
        }, this.$reAlignText = function (e, t) {
            function n(e) {
                return d.stringRepeat(" ", e)
            }

            function i(e) {
                return e[2] ? n(o) + e[2] + n(a - e[2].length + l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }

            function s(e) {
                return e[2] ? n(o + a - e[2].length) + e[2] + n(l, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }

            function r(e) {
                return e[2] ? n(o) + e[2] + n(l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }

            var o, a, l, c = !0, h = !0;
            return e.map(function (e) {
                var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                return t ? null == o ? (o = t[1].length, a = t[2].length, l = t[3].length, t) : (o + a + l != t[1].length + t[2].length + t[3].length && (h = !1), o != t[1].length && (c = !1), o > t[1].length && (o = t[1].length), a < t[2].length && (a = t[2].length), l > t[3].length && (l = t[3].length), t) : [e]
            }).map(t ? i : c ? h ? s : i : r)
        }
    }).call(C.prototype), t.onSessionChange = function (e) {
        var t = e.session;
        t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
        var n = e.oldSession;
        n && (n.multiSelect.off("addRange", this.$onAddRange), n.multiSelect.off("removeRange", this.$onRemoveRange), n.multiSelect.off("multiSelect", this.$onMultiSelect), n.multiSelect.off("singleSelect", this.$onSingleSelect), n.multiSelect.lead.off("change", this.$checkMultiselectChange), n.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
    }, t.MultiSelect = r, e("./config").defineOptions(C.prototype, "editor", {
        enableMultiselect: {
            set: function (e) {
                r(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", h)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", h))
            }, value: !0
        }, enableBlockSelect: {
            set: function (e) {
                this.$blockSelectEnabled = e
            }, value: !0
        }
    })
}), define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    var i = e("../../range").Range, s = t.FoldMode = function () {
    };
    (function () {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function (e, t, n) {
            var i = e.getLine(n);
            return this.foldingStartMarker.test(i) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(i) ? "end" : ""
        }, this.getFoldWidgetRange = function (e, t, n) {
            return null
        }, this.indentationBlock = function (e, t, n) {
            var s = /\S/, r = e.getLine(t), o = r.search(s);
            if (o != -1) {
                for (var a = n || r.length, l = e.getLength(), c = t, h = t; ++t < l;) {
                    var u = e.getLine(t).search(s);
                    if (u != -1) {
                        if (u <= o) break;
                        h = t
                    }
                }
                if (h > c) {
                    var d = e.getLine(h).length;
                    return new i(c, a, h, d)
                }
            }
        }, this.openingBracketBlock = function (e, t, n, s, r) {
            var o = {row: n, column: s + 1}, a = e.$findClosingBracket(t, o, r);
            if (a) {
                var l = e.foldWidgets[a.row];
                return null == l && (l = e.getFoldWidget(a.row)), "start" == l && a.row > o.row && (a.row--, a.column = e.getLine(a.row).length), i.fromPoints(o, a)
            }
        }, this.closingBracketBlock = function (e, t, n, s, r) {
            var o = {row: n, column: s}, a = e.$findOpeningBracket(t, o);
            if (a) return a.column++, o.column--, i.fromPoints(a, o)
        }
    }).call(s.prototype)
}), define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
    var i = e("../lib/dom");
    i.importCssString(t.cssText, t.cssClass)
}), define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], function (e, t, n) {
    "use strict";

    function i(e) {
        this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor)
    }

    var s = (e("./lib/oop"), e("./lib/dom"));
    e("./range").Range;
    (function () {
        this.getRowLength = function (e) {
            var t;
            return t = this.lineWidgets ? this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0 : 0, this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
        }, this.$getWidgetScreenLength = function () {
            var e = 0;
            return this.lineWidgets.forEach(function (t) {
                t && t.rowCount && !t.hidden && (e += t.rowCount)
            }), e
        }, this.$onChangeEditor = function (e) {
            this.attach(e.editor)
        }, this.attach = function (e) {
            e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(), this.editor != e && (this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)))
        }, this.detach = function (e) {
            var t = this.editor;
            if (t) {
                this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
                var n = this.session.lineWidgets;
                n && n.forEach(function (e) {
                    e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
                })
            }
        }, this.updateOnFold = function (e, t) {
            var n = t.lineWidgets;
            if (n && e.action) {
                for (var i = e.data, s = i.start.row, r = i.end.row, o = "add" == e.action, a = s + 1; a < r; a++) n[a] && (n[a].hidden = o);
                n[r] && (o ? n[s] ? n[r].hidden = o : n[s] = n[r] : (n[s] == n[r] && (n[s] = void 0), n[r].hidden = o))
            }
        }, this.updateOnChange = function (e) {
            var t = this.session.lineWidgets;
            if (t) {
                var n = e.start.row, i = e.end.row - n;
                if (0 === i) ; else if ("remove" == e.action) {
                    var s = t.splice(n + 1, i);
                    s.forEach(function (e) {
                        e && this.removeLineWidget(e)
                    }, this), this.$updateRows()
                } else {
                    var r = new Array(i);
                    r.unshift(n, 0), t.splice.apply(t, r), this.$updateRows()
                }
            }
        }, this.$updateRows = function () {
            var e = this.session.lineWidgets;
            if (e) {
                var t = !0;
                e.forEach(function (e, n) {
                    if (e) for (t = !1, e.row = n; e.$oldWidget;) e.$oldWidget.row = n, e = e.$oldWidget
                }), t && (this.session.lineWidgets = null)
            }
        }, this.addLineWidget = function (e) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
            var t = this.session.lineWidgets[e.row];
            t && (e.$oldWidget = t, t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el), t._inDocument = !1)), this.session.lineWidgets[e.row] = e, e.session = this.session;
            var n = this.editor.renderer;
            e.html && !e.el && (e.el = s.createElement("div"), e.el.innerHTML = e.html), e.el && (s.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, n.container.appendChild(e.el), e._inDocument = !0), e.coverGutter || (e.el.style.zIndex = 3), null == e.pixelHeight && (e.pixelHeight = e.el.offsetHeight), null == e.rowCount && (e.rowCount = e.pixelHeight / n.layerConfig.lineHeight);
            var i = this.session.getFoldAt(e.row, 0);
            if (e.$fold = i, i) {
                var r = this.session.lineWidgets;
                e.row != i.end.row || r[i.start.row] ? e.hidden = !0 : r[i.start.row] = e
            }
            return this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows(), this.renderWidgets(null, n), this.onWidgetChanged(e), e
        }, this.removeLineWidget = function (e) {
            if (e._inDocument = !1, e.session = null, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el), e.editor && e.editor.destroy) try {
                e.editor.destroy()
            } catch (t) {
            }
            if (this.session.lineWidgets) {
                var n = this.session.lineWidgets[e.row];
                if (n == e) this.session.lineWidgets[e.row] = e.$oldWidget, e.$oldWidget && this.onWidgetChanged(e.$oldWidget); else for (; n;) {
                    if (n.$oldWidget == e) {
                        n.$oldWidget = e.$oldWidget;
                        break
                    }
                    n = n.$oldWidget
                }
            }
            this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows()
        }, this.getWidgetsAtRow = function (e) {
            for (var t = this.session.lineWidgets, n = t && t[e], i = []; n;) i.push(n), n = n.$oldWidget;
            return i
        }, this.onWidgetChanged = function (e) {
            this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
        }, this.measureWidgets = function (e, t) {
            var n = this.session._changedWidgets, i = t.layerConfig;
            if (n && n.length) {
                for (var s = 1 / 0, r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o && o.el && o.session == this.session) {
                        if (!o._inDocument) {
                            if (this.session.lineWidgets[o.row] != o) continue;
                            o._inDocument = !0, t.container.appendChild(o.el)
                        }
                        o.h = o.el.offsetHeight, o.fixedWidth || (o.w = o.el.offsetWidth, o.screenWidth = Math.ceil(o.w / i.characterWidth));
                        var a = o.h / i.lineHeight;
                        o.coverLine && (a -= this.session.getRowLineCount(o.row), a < 0 && (a = 0)), o.rowCount != a && (o.rowCount = a, o.row < s && (s = o.row))
                    }
                }
                s != 1 / 0 && (this.session._emit("changeFold", {data: {start: {row: s}}}), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
            }
        }, this.renderWidgets = function (e, t) {
            var n = t.layerConfig, i = this.session.lineWidgets;
            if (i) {
                for (var s = Math.min(this.firstRow, n.firstRow), r = Math.max(this.lastRow, n.lastRow, i.length); s > 0 && !i[s];) s--;
                this.firstRow = n.firstRow, this.lastRow = n.lastRow, t.$cursorLayer.config = n;
                for (var o = s; o <= r; o++) {
                    var a = i[o];
                    if (a && a.el) if (a.hidden) a.el.style.top = -100 - (a.pixelHeight || 0) + "px"; else {
                        a._inDocument || (a._inDocument = !0, t.container.appendChild(a.el));
                        var l = t.$cursorLayer.getPixelPosition({row: o, column: 0}, !0).top;
                        a.coverLine || (l += n.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = l - n.offset + "px";
                        var c = a.coverGutter ? 0 : t.gutterWidth;
                        a.fixedWidth || (c -= t.scrollLeft), a.el.style.left = c + "px", a.fullWidth && a.screenWidth && (a.el.style.minWidth = n.width + 2 * n.padding + "px"), a.fixedWidth ? a.el.style.right = t.scrollBar.getWidth() + "px" : a.el.style.right = ""
                    }
                }
            }
        }
    }).call(i.prototype), t.LineWidgets = i
}), define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function (e, t, n) {
    "use strict";

    function i(e, t, n) {
        for (var i = 0, s = e.length - 1; i <= s;) {
            var r = i + s >> 1, o = n(t, e[r]);
            if (o > 0) i = r + 1; else {
                if (!(o < 0)) return r;
                s = r - 1
            }
        }
        return -(i + 1)
    }

    function s(e, t, n) {
        var s = e.getAnnotations().sort(a.comparePoints);
        if (s.length) {
            var r = i(s, {row: t, column: -1}, a.comparePoints);
            r < 0 && (r = -r - 1), r >= s.length ? r = n > 0 ? 0 : s.length - 1 : 0 === r && n < 0 && (r = s.length - 1);
            var o = s[r];
            if (o && n) {
                if (o.row === t) {
                    do o = s[r += n]; while (o && o.row === t);
                    if (!o) return s.slice()
                }
                var l = [];
                t = o.row;
                do l[n < 0 ? "unshift" : "push"](o), o = s[r += n]; while (o && o.row == t);
                return l.length && l
            }
        }
    }

    var r = e("../line_widgets").LineWidgets, o = e("../lib/dom"), a = e("../range").Range;
    t.showErrorMarker = function (e, t) {
        var n = e.session;
        n.widgetManager || (n.widgetManager = new r(n), n.widgetManager.attach(e));
        var i = e.getCursorPosition(), a = i.row, l = n.widgetManager.getWidgetsAtRow(a).filter(function (e) {
            return "errorMarker" == e.type
        })[0];
        l ? l.destroy() : a -= t;
        var c, h = s(n, a, t);
        if (h) {
            var u = h[0];
            i.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, i.row = u.row, c = e.renderer.$gutterLayer.$annotations[i.row]
        } else {
            if (l) return;
            c = {text: ["Looks good!"], className: "ace_ok"}
        }
        e.session.unfold(i.row), e.selection.moveToPosition(i);
        var d = {row: i.row, fixedWidth: !0, coverGutter: !0, el: o.createElement("div"), type: "errorMarker"},
            f = d.el.appendChild(o.createElement("div")), p = d.el.appendChild(o.createElement("div"));
        p.className = "error_widget_arrow " + c.className;
        var g = e.renderer.$cursorLayer.getPixelPosition(i).left;
        p.style.left = g + e.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", f.className = "error_widget " + c.className, f.innerHTML = c.text.join("<br>"), f.appendChild(o.createElement("div"));
        var m = function (e, t, n) {
            if (0 === t && ("esc" === n || "return" === n)) return d.destroy(), {command: "null"}
        };
        d.destroy = function () {
            e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(m), n.widgetManager.removeLineWidget(d), e.off("changeSelection", d.destroy), e.off("changeSession", d.destroy), e.off("mouseup", d.destroy), e.off("change", d.destroy))
        }, e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", d.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d.destroy), e.on("change", d.destroy), e.session.widgetManager.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {bottom: d.el.offsetHeight})
    }, o.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
}), define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function (e, t, n) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var i = e("./lib/dom"), s = e("./lib/event"), r = e("./editor").Editor, o = e("./edit_session").EditSession,
        a = e("./undomanager").UndoManager, l = e("./virtual_renderer").VirtualRenderer;
    e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.require = e, "function" == typeof define && (t.define = define), t.edit = function (e) {
        if ("string" == typeof e) {
            var n = e;
            if (e = document.getElementById(n), !e) throw new Error("ace.edit can't find div #" + n)
        }
        if (e && e.env && e.env.editor instanceof r) return e.env.editor;
        var o = "";
        if (e && /input|textarea/i.test(e.tagName)) {
            var a = e;
            o = a.value, e = i.createElement("pre"), a.parentNode.replaceChild(e, a)
        } else e && (o = i.getInnerText(e), e.innerHTML = "");
        var c = t.createEditSession(o), h = new r(new l(e));
        h.setSession(c);
        var u = {document: c, editor: h, onResize: h.resize.bind(h, null)};
        return a && (u.textarea = a), s.addListener(window, "resize", u.onResize), h.on("destroy", function () {
            s.removeListener(window, "resize", u.onResize), u.editor.container.env = null
        }), h.container.env = h.env = u, h
    }, t.createEditSession = function (e, t) {
        var n = new o(e, t);
        return n.setUndoManager(new a), n
    }, t.EditSession = o, t.UndoManager = a, t.version = "1.2.6"
}), function () {
    window.require(["ace/ace"], function (e) {
        e && (e.config.init(!0), e.define = window.define), window.ace || (window.ace = e);
        for (var t in e) e.hasOwnProperty(t) && (window.ace[t] = e[t])
    })
}(), !function () {
    "use strict";

    function e(e, t) {
        if (e) {
            if (t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
                var n = document.createElement("span");
                n.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER), n.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);
                var i = document.createElement("span");
                i.classList.add(t.CssClasses_.MDL_RIPPLE), n.appendChild(i), e.appendChild(n)
            }
            e.addEventListener("click", function (n) {
                if ("#" === e.getAttribute("href").charAt(0)) {
                    n.preventDefault();
                    var i = e.href.split("#")[1], s = t.element_.querySelector("#" + i);
                    t.resetTabState_(), t.resetPanelState_(), e.classList.add(t.CssClasses_.ACTIVE_CLASS), s.classList.add(t.CssClasses_.ACTIVE_CLASS)
                }
            })
        }
    }

    function t(e, t, n, i) {
        function s() {
            var s = e.href.split("#")[1], r = i.content_.querySelector("#" + s);
            i.resetTabState_(t), i.resetPanelState_(n), e.classList.add(i.CssClasses_.IS_ACTIVE), r.classList.add(i.CssClasses_.IS_ACTIVE)
        }

        if (i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)) {
            var r = document.createElement("span");
            r.classList.add(i.CssClasses_.RIPPLE_CONTAINER), r.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);
            var o = document.createElement("span");
            o.classList.add(i.CssClasses_.RIPPLE), r.appendChild(o), e.appendChild(r)
        }
        i.tabBar_.classList.contains(i.CssClasses_.TAB_MANUAL_SWITCH) || e.addEventListener("click", function (t) {
            "#" === e.getAttribute("href").charAt(0) && (t.preventDefault(), s())
        }), e.show = s
    }

    var n = {
        upgradeDom: function (e, t) {
        }, upgradeElement: function (e, t) {
        }, upgradeElements: function (e) {
        }, upgradeAllRegistered: function () {
        }, registerUpgradedCallback: function (e, t) {
        }, register: function (e) {
        }, downgradeElements: function (e) {
        }
    };
    n = function () {
        function e(e, t) {
            for (var n = 0; n < d.length; n++) if (d[n].className === e) return "undefined" != typeof t && (d[n] = t), d[n];
            return !1
        }

        function t(e) {
            var t = e.getAttribute("data-upgraded");
            return null === t ? [""] : t.split(",")
        }

        function n(e, n) {
            var i = t(e);
            return i.indexOf(n) !== -1
        }

        function i(e, t, n) {
            if ("CustomEvent" in window && "function" == typeof window.CustomEvent) return new CustomEvent(e, {
                bubbles: t,
                cancelable: n
            });
            var i = document.createEvent("Events");
            return i.initEvent(e, t, n), i
        }

        function s(t, n) {
            if ("undefined" == typeof t && "undefined" == typeof n) for (var i = 0; i < d.length; i++) s(d[i].className, d[i].cssClass); else {
                var o = t;
                if ("undefined" == typeof n) {
                    var a = e(o);
                    a && (n = a.cssClass)
                }
                for (var l = document.querySelectorAll("." + n), c = 0; c < l.length; c++) r(l[c], o)
            }
        }

        function r(s, r) {
            if (!("object" == typeof s && s instanceof Element)) throw new Error("Invalid argument provided to upgrade MDL element.");
            var o = i("mdl-componentupgrading", !0, !0);
            if (s.dispatchEvent(o), !o.defaultPrevented) {
                var a = t(s), l = [];
                if (r) n(s, r) || l.push(e(r)); else {
                    var c = s.classList;
                    d.forEach(function (e) {
                        c.contains(e.cssClass) && l.indexOf(e) === -1 && !n(s, e.className) && l.push(e)
                    })
                }
                for (var h, u = 0, g = l.length; u < g; u++) {
                    if (h = l[u], !h) throw new Error("Unable to find a registered component for the given class.");
                    a.push(h.className), s.setAttribute("data-upgraded", a.join(","));
                    var m = new h.classConstructor(s);
                    m[p] = h, f.push(m);
                    for (var C = 0, v = h.callbacks.length; C < v; C++) h.callbacks[C](s);
                    h.widget && (s[h.className] = m);
                    var A = i("mdl-componentupgraded", !0, !1);
                    s.dispatchEvent(A)
                }
            }
        }

        function o(e) {
            Array.isArray(e) || (e = e instanceof Element ? [e] : Array.prototype.slice.call(e));
            for (var t, n = 0, i = e.length; n < i; n++) t = e[n], t instanceof HTMLElement && (r(t), t.children.length > 0 && o(t.children))
        }

        function a(t) {
            var n = "undefined" == typeof t.widget && "undefined" == typeof t.widget, i = !0;
            n || (i = t.widget || t.widget);
            var s = {
                classConstructor: t.constructor || t.constructor,
                className: t.classAsString || t.classAsString,
                cssClass: t.cssClass || t.cssClass,
                widget: i,
                callbacks: []
            };
            if (d.forEach(function (e) {
                if (e.cssClass === s.cssClass) throw new Error("The provided cssClass has already been registered: " + e.cssClass);
                if (e.className === s.className) throw new Error("The provided className has already been registered")
            }), t.constructor.prototype.hasOwnProperty(p)) throw new Error("MDL component classes must not have " + p + " defined as a property.");
            var r = e(t.classAsString, s);
            r || d.push(s)
        }

        function l(t, n) {
            var i = e(t);
            i && i.callbacks.push(n)
        }

        function c() {
            for (var e = 0; e < d.length; e++) s(d[e].className)
        }

        function h(e) {
            if (e) {
                var t = f.indexOf(e);
                f.splice(t, 1);
                var n = e.element_.getAttribute("data-upgraded").split(","), s = n.indexOf(e[p].classAsString);
                n.splice(s, 1), e.element_.setAttribute("data-upgraded", n.join(","));
                var r = i("mdl-componentdowngraded", !0, !1);
                e.element_.dispatchEvent(r)
            }
        }

        function u(e) {
            var t = function (e) {
                f.filter(function (t) {
                    return t.element_ === e
                }).forEach(h)
            };
            if (e instanceof Array || e instanceof NodeList) for (var n = 0; n < e.length; n++) t(e[n]); else {
                if (!(e instanceof Node)) throw new Error("Invalid argument provided to downgrade MDL nodes.");
                t(e)
            }
        }

        var d = [], f = [], p = "mdlComponentConfigInternal_";
        return {
            upgradeDom: s,
            upgradeElement: r,
            upgradeElements: o,
            upgradeAllRegistered: c,
            registerUpgradedCallback: l,
            register: a,
            downgradeElements: u
        }
    }(), n.ComponentConfigPublic, n.ComponentConfig, n.Component, n.upgradeDom = n.upgradeDom, n.upgradeElement = n.upgradeElement, n.upgradeElements = n.upgradeElements, n.upgradeAllRegistered = n.upgradeAllRegistered, n.registerUpgradedCallback = n.registerUpgradedCallback, n.register = n.register, n.downgradeElements = n.downgradeElements, window.componentHandler = n, window.componentHandler = n, window.addEventListener("load", function () {
        "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("mdl-js"), n.upgradeAllRegistered()) : (n.upgradeElement = function () {
        }, n.register = function () {
        })
    }), Date.now || (Date.now = function () {
        return (new Date).getTime()
    }, Date.now = Date.now);
    for (var i = ["webkit", "moz"], s = 0; s < i.length && !window.requestAnimationFrame; ++s) {
        var r = i[s];
        window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"], window.requestAnimationFrame = window.requestAnimationFrame, window.cancelAnimationFrame = window.cancelAnimationFrame
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var o = 0;
        window.requestAnimationFrame = function (e) {
            var t = Date.now(), n = Math.max(o + 16, t);
            return setTimeout(function () {
                e(o = n)
            }, n - t)
        }, window.cancelAnimationFrame = clearTimeout, window.requestAnimationFrame = window.requestAnimationFrame, window.cancelAnimationFrame = window.cancelAnimationFrame
    }
    var a = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialButton = a, a.prototype.Constant_ = {}, a.prototype.CssClasses_ = {
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_CONTAINER: "mdl-button__ripple-container",
        RIPPLE: "mdl-ripple"
    }, a.prototype.blurHandler_ = function (e) {
        e && this.element_.blur()
    }, a.prototype.disable = function () {
        this.element_.disabled = !0
    }, a.prototype.disable = a.prototype.disable, a.prototype.enable = function () {
        this.element_.disabled = !1
    }, a.prototype.enable = a.prototype.enable, a.prototype.init = function () {
        if (this.element_) {
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                var e = document.createElement("span");
                e.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleElement_ = document.createElement("span"), this.rippleElement_.classList.add(this.CssClasses_.RIPPLE), e.appendChild(this.rippleElement_), this.boundRippleBlurHandler = this.blurHandler_.bind(this), this.rippleElement_.addEventListener("mouseup", this.boundRippleBlurHandler), this.element_.appendChild(e)
            }
            this.boundButtonBlurHandler = this.blurHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundButtonBlurHandler), this.element_.addEventListener("mouseleave", this.boundButtonBlurHandler)
        }
    }, n.register({constructor: a, classAsString: "MaterialButton", cssClass: "mdl-js-button", widget: !0});
    var l = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialCheckbox = l, l.prototype.Constant_ = {TINY_TIMEOUT: .001}, l.prototype.CssClasses_ = {
        INPUT: "mdl-checkbox__input",
        BOX_OUTLINE: "mdl-checkbox__box-outline",
        FOCUS_HELPER: "mdl-checkbox__focus-helper",
        TICK_OUTLINE: "mdl-checkbox__tick-outline",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-checkbox__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked",
        IS_UPGRADED: "is-upgraded"
    }, l.prototype.onChange_ = function (e) {
        this.updateClasses_()
    }, l.prototype.onFocus_ = function (e) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, l.prototype.onBlur_ = function (e) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, l.prototype.onMouseUp_ = function (e) {
        this.blur_()
    }, l.prototype.updateClasses_ = function () {
        this.checkDisabled(), this.checkToggleState()
    }, l.prototype.blur_ = function () {
        window.setTimeout(function () {
            this.inputElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, l.prototype.checkToggleState = function () {
        this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, l.prototype.checkToggleState = l.prototype.checkToggleState, l.prototype.checkDisabled = function () {
        this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, l.prototype.checkDisabled = l.prototype.checkDisabled, l.prototype.disable = function () {
        this.inputElement_.disabled = !0, this.updateClasses_()
    }, l.prototype.disable = l.prototype.disable, l.prototype.enable = function () {
        this.inputElement_.disabled = !1, this.updateClasses_()
    }, l.prototype.enable = l.prototype.enable, l.prototype.check = function () {
        this.inputElement_.checked = !0, this.updateClasses_()
    }, l.prototype.check = l.prototype.check, l.prototype.uncheck = function () {
        this.inputElement_.checked = !1, this.updateClasses_()
    }, l.prototype.uncheck = l.prototype.uncheck, l.prototype.init = function () {
        if (this.element_) {
            this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
            var e = document.createElement("span");
            e.classList.add(this.CssClasses_.BOX_OUTLINE);
            var t = document.createElement("span");
            t.classList.add(this.CssClasses_.FOCUS_HELPER);
            var n = document.createElement("span");
            if (n.classList.add(this.CssClasses_.TICK_OUTLINE), e.appendChild(n), this.element_.appendChild(t), this.element_.appendChild(e), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
                var i = document.createElement("span");
                i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
            }
            this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementMouseUp), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, n.register({constructor: l, classAsString: "MaterialCheckbox", cssClass: "mdl-js-checkbox", widget: !0});
    var c = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialIconToggle = c, c.prototype.Constant_ = {TINY_TIMEOUT: .001}, c.prototype.CssClasses_ = {
        INPUT: "mdl-icon-toggle__input",
        JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-icon-toggle__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked"
    }, c.prototype.onChange_ = function (e) {
        this.updateClasses_()
    }, c.prototype.onFocus_ = function (e) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, c.prototype.onBlur_ = function (e) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, c.prototype.onMouseUp_ = function (e) {
        this.blur_()
    }, c.prototype.updateClasses_ = function () {
        this.checkDisabled(), this.checkToggleState()
    }, c.prototype.blur_ = function () {
        window.setTimeout(function () {
            this.inputElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, c.prototype.checkToggleState = function () {
        this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, c.prototype.checkToggleState = c.prototype.checkToggleState, c.prototype.checkDisabled = function () {
        this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, c.prototype.checkDisabled = c.prototype.checkDisabled, c.prototype.disable = function () {
        this.inputElement_.disabled = !0, this.updateClasses_()
    }, c.prototype.disable = c.prototype.disable, c.prototype.enable = function () {
        this.inputElement_.disabled = !1, this.updateClasses_()
    }, c.prototype.enable = c.prototype.enable, c.prototype.check = function () {
        this.inputElement_.checked = !0, this.updateClasses_()
    }, c.prototype.check = c.prototype.check, c.prototype.uncheck = function () {
        this.inputElement_.checked = !1, this.updateClasses_()
    }, c.prototype.uncheck = c.prototype.uncheck, c.prototype.init = function () {
        if (this.element_) {
            if (this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
                var e = document.createElement("span");
                e.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(e), this.element_.appendChild(this.rippleContainerElement_)
            }
            this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementOnMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementOnMouseUp), this.updateClasses_(), this.element_.classList.add("is-upgraded")
        }
    }, n.register({constructor: c, classAsString: "MaterialIconToggle", cssClass: "mdl-js-icon-toggle", widget: !0});
    var h = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialMenu = h, h.prototype.Constant_ = {
        TRANSITION_DURATION_SECONDS: .3,
        TRANSITION_DURATION_FRACTION: .8,
        CLOSE_TIMEOUT: 150
    }, h.prototype.Keycodes_ = {
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        UP_ARROW: 38,
        DOWN_ARROW: 40
    }, h.prototype.CssClasses_ = {
        CONTAINER: "mdl-menu__container",
        OUTLINE: "mdl-menu__outline",
        ITEM: "mdl-menu__item",
        ITEM_RIPPLE_CONTAINER: "mdl-menu__item-ripple-container",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE: "mdl-ripple",
        IS_UPGRADED: "is-upgraded",
        IS_VISIBLE: "is-visible",
        IS_ANIMATING: "is-animating",
        BOTTOM_LEFT: "mdl-menu--bottom-left",
        BOTTOM_RIGHT: "mdl-menu--bottom-right",
        TOP_LEFT: "mdl-menu--top-left",
        TOP_RIGHT: "mdl-menu--top-right",
        UNALIGNED: "mdl-menu--unaligned"
    }, h.prototype.init = function () {
        if (this.element_) {
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_), this.container_ = e;
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.OUTLINE), this.outline_ = t, e.insertBefore(t, this.element_);
            var n = this.element_.getAttribute("for") || this.element_.getAttribute("data-mdl-for"), i = null;
            n && (i = document.getElementById(n), i && (this.forElement_ = i, i.addEventListener("click", this.handleForClick_.bind(this)), i.addEventListener("keydown", this.handleForKeyboardEvent_.bind(this))));
            var s = this.element_.querySelectorAll("." + this.CssClasses_.ITEM);
            this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this), this.boundItemClick_ = this.handleItemClick_.bind(this);
            for (var r = 0; r < s.length; r++) s[r].addEventListener("click", this.boundItemClick_), s[r].tabIndex = "-1", s[r].addEventListener("keydown", this.boundItemKeydown_);
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) for (this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), r = 0; r < s.length; r++) {
                var o = s[r], a = document.createElement("span");
                a.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
                var l = document.createElement("span");
                l.classList.add(this.CssClasses_.RIPPLE), a.appendChild(l), o.appendChild(a), o.classList.add(this.CssClasses_.RIPPLE_EFFECT)
            }
            this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT), this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT), this.element_.classList.contains(this.CssClasses_.TOP_LEFT) && this.outline_.classList.add(this.CssClasses_.TOP_LEFT), this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) && this.outline_.classList.add(this.CssClasses_.TOP_RIGHT), this.element_.classList.contains(this.CssClasses_.UNALIGNED) && this.outline_.classList.add(this.CssClasses_.UNALIGNED), e.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, h.prototype.handleForClick_ = function (e) {
        if (this.element_ && this.forElement_) {
            var t = this.forElement_.getBoundingClientRect(),
                n = this.forElement_.parentElement.getBoundingClientRect();
            this.element_.classList.contains(this.CssClasses_.UNALIGNED) || (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? (this.container_.style.right = n.right - t.right + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px") : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.bottom = n.bottom - t.top + "px") : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (this.container_.style.right = n.right - t.right + "px", this.container_.style.bottom = n.bottom - t.top + "px") : (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px"))
        }
        this.toggle(e)
    }, h.prototype.handleForKeyboardEvent_ = function (e) {
        if (this.element_ && this.container_ && this.forElement_) {
            var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
            t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) && (e.keyCode === this.Keycodes_.UP_ARROW ? (e.preventDefault(), t[t.length - 1].focus()) : e.keyCode === this.Keycodes_.DOWN_ARROW && (e.preventDefault(), t[0].focus()))
        }
    }, h.prototype.handleItemKeyboardEvent_ = function (e) {
        if (this.element_ && this.container_) {
            var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
            if (t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
                var n = Array.prototype.slice.call(t).indexOf(e.target);
                if (e.keyCode === this.Keycodes_.UP_ARROW) e.preventDefault(), n > 0 ? t[n - 1].focus() : t[t.length - 1].focus(); else if (e.keyCode === this.Keycodes_.DOWN_ARROW) e.preventDefault(), t.length > n + 1 ? t[n + 1].focus() : t[0].focus(); else if (e.keyCode === this.Keycodes_.SPACE || e.keyCode === this.Keycodes_.ENTER) {
                    e.preventDefault();
                    var i = new MouseEvent("mousedown");
                    e.target.dispatchEvent(i), i = new MouseEvent("mouseup"), e.target.dispatchEvent(i), e.target.click()
                } else e.keyCode === this.Keycodes_.ESCAPE && (e.preventDefault(), this.hide())
            }
        }
    }, h.prototype.handleItemClick_ = function (e) {
        e.target.hasAttribute("disabled") ? e.stopPropagation() : (this.closing_ = !0, window.setTimeout(function (e) {
            this.hide(), this.closing_ = !1
        }.bind(this), this.Constant_.CLOSE_TIMEOUT))
    }, h.prototype.applyClip_ = function (e, t) {
        this.element_.classList.contains(this.CssClasses_.UNALIGNED) ? this.element_.style.clip = "" : this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? this.element_.style.clip = "rect(0 " + t + "px 0 " + t + "px)" : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? this.element_.style.clip = "rect(" + e + "px 0 " + e + "px 0)" : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? this.element_.style.clip = "rect(" + e + "px " + t + "px " + e + "px " + t + "px)" : this.element_.style.clip = ""
    }, h.prototype.removeAnimationEndListener_ = function (e) {
        e.target.classList.remove(h.prototype.CssClasses_.IS_ANIMATING)
    }, h.prototype.addAnimationEndListener_ = function () {
        this.element_.addEventListener("transitionend", this.removeAnimationEndListener_), this.element_.addEventListener("webkitTransitionEnd", this.removeAnimationEndListener_)
    }, h.prototype.show = function (e) {
        if (this.element_ && this.container_ && this.outline_) {
            var t = this.element_.getBoundingClientRect().height, n = this.element_.getBoundingClientRect().width;
            this.container_.style.width = n + "px", this.container_.style.height = t + "px", this.outline_.style.width = n + "px", this.outline_.style.height = t + "px";
            for (var i = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION, s = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), r = 0; r < s.length; r++) {
                var o = null;
                o = this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (t - s[r].offsetTop - s[r].offsetHeight) / t * i + "s" : s[r].offsetTop / t * i + "s", s[r].style.transitionDelay = o
            }
            this.applyClip_(t, n), window.requestAnimationFrame(function () {
                this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.element_.style.clip = "rect(0 " + n + "px " + t + "px 0)", this.container_.classList.add(this.CssClasses_.IS_VISIBLE)
            }.bind(this)), this.addAnimationEndListener_();
            var a = function (t) {
                t === e || this.closing_ || t.target.parentNode === this.element_ || (document.removeEventListener("click", a), this.hide())
            }.bind(this);
            document.addEventListener("click", a)
        }
    }, h.prototype.show = h.prototype.show, h.prototype.hide = function () {
        if (this.element_ && this.container_ && this.outline_) {
            for (var e = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), t = 0; t < e.length; t++) e[t].style.removeProperty("transition-delay");
            var n = this.element_.getBoundingClientRect(), i = n.height, s = n.width;
            this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.applyClip_(i, s), this.container_.classList.remove(this.CssClasses_.IS_VISIBLE), this.addAnimationEndListener_()
        }
    }, h.prototype.hide = h.prototype.hide, h.prototype.toggle = function (e) {
        this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) ? this.hide() : this.show(e)
    }, h.prototype.toggle = h.prototype.toggle, n.register({
        constructor: h,
        classAsString: "MaterialMenu",
        cssClass: "mdl-js-menu",
        widget: !0
    });
    var u = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialProgress = u, u.prototype.Constant_ = {}, u.prototype.CssClasses_ = {INDETERMINATE_CLASS: "mdl-progress__indeterminate"}, u.prototype.setProgress = function (e) {
        this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS) || (this.progressbar_.style.width = e + "%")
    }, u.prototype.setProgress = u.prototype.setProgress, u.prototype.setBuffer = function (e) {
        this.bufferbar_.style.width = e + "%", this.auxbar_.style.width = 100 - e + "%"
    }, u.prototype.setBuffer = u.prototype.setBuffer, u.prototype.init = function () {
        if (this.element_) {
            var e = document.createElement("div");
            e.className = "progressbar bar bar1", this.element_.appendChild(e), this.progressbar_ = e, e = document.createElement("div"), e.className = "bufferbar bar bar2", this.element_.appendChild(e), this.bufferbar_ = e, e = document.createElement("div"), e.className = "auxbar bar bar3", this.element_.appendChild(e), this.auxbar_ = e, this.progressbar_.style.width = "0%", this.bufferbar_.style.width = "100%", this.auxbar_.style.width = "0%", this.element_.classList.add("is-upgraded")
        }
    }, n.register({constructor: u, classAsString: "MaterialProgress", cssClass: "mdl-js-progress", widget: !0});
    var d = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialRadio = d, d.prototype.Constant_ = {TINY_TIMEOUT: .001}, d.prototype.CssClasses_ = {
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked",
        IS_UPGRADED: "is-upgraded",
        JS_RADIO: "mdl-js-radio",
        RADIO_BTN: "mdl-radio__button",
        RADIO_OUTER_CIRCLE: "mdl-radio__outer-circle",
        RADIO_INNER_CIRCLE: "mdl-radio__inner-circle",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-radio__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple"
    }, d.prototype.onChange_ = function (e) {
        for (var t = document.getElementsByClassName(this.CssClasses_.JS_RADIO), n = 0; n < t.length; n++) {
            var i = t[n].querySelector("." + this.CssClasses_.RADIO_BTN);
            i.getAttribute("name") === this.btnElement_.getAttribute("name") && "undefined" != typeof t[n].MaterialRadio && t[n].MaterialRadio.updateClasses_()
        }
    }, d.prototype.onFocus_ = function (e) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, d.prototype.onBlur_ = function (e) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, d.prototype.onMouseup_ = function (e) {
        this.blur_()
    }, d.prototype.updateClasses_ = function () {
        this.checkDisabled(), this.checkToggleState()
    }, d.prototype.blur_ = function () {
        window.setTimeout(function () {
            this.btnElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, d.prototype.checkDisabled = function () {
        this.btnElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, d.prototype.checkDisabled = d.prototype.checkDisabled, d.prototype.checkToggleState = function () {
        this.btnElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, d.prototype.checkToggleState = d.prototype.checkToggleState, d.prototype.disable = function () {
        this.btnElement_.disabled = !0, this.updateClasses_()
    }, d.prototype.disable = d.prototype.disable, d.prototype.enable = function () {
        this.btnElement_.disabled = !1, this.updateClasses_()
    }, d.prototype.enable = d.prototype.enable, d.prototype.check = function () {
        this.btnElement_.checked = !0, this.onChange_(null)
    }, d.prototype.check = d.prototype.check, d.prototype.uncheck = function () {
        this.btnElement_.checked = !1, this.onChange_(null)
    }, d.prototype.uncheck = d.prototype.uncheck, d.prototype.init = function () {
        if (this.element_) {
            this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.RADIO_BTN), this.boundChangeHandler_ = this.onChange_.bind(this), this.boundFocusHandler_ = this.onChange_.bind(this), this.boundBlurHandler_ = this.onBlur_.bind(this), this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
            var e = document.createElement("span");
            e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
            var t = document.createElement("span");
            t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE), this.element_.appendChild(e), this.element_.appendChild(t);
            var n;
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), n = document.createElement("span"), n.classList.add(this.CssClasses_.RIPPLE_CONTAINER), n.classList.add(this.CssClasses_.RIPPLE_EFFECT), n.classList.add(this.CssClasses_.RIPPLE_CENTER), n.addEventListener("mouseup", this.boundMouseUpHandler_);
                var i = document.createElement("span");
                i.classList.add(this.CssClasses_.RIPPLE), n.appendChild(i), this.element_.appendChild(n)
            }
            this.btnElement_.addEventListener("change", this.boundChangeHandler_), this.btnElement_.addEventListener("focus", this.boundFocusHandler_), this.btnElement_.addEventListener("blur", this.boundBlurHandler_), this.element_.addEventListener("mouseup", this.boundMouseUpHandler_), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, n.register({constructor: d, classAsString: "MaterialRadio", cssClass: "mdl-js-radio", widget: !0});
    var f = function (e) {
        this.element_ = e, this.isIE_ = window.navigator.msPointerEnabled, this.init()
    };
    window.MaterialSlider = f, f.prototype.Constant_ = {}, f.prototype.CssClasses_ = {
        IE_CONTAINER: "mdl-slider__ie-container",
        SLIDER_CONTAINER: "mdl-slider__container",
        BACKGROUND_FLEX: "mdl-slider__background-flex",
        BACKGROUND_LOWER: "mdl-slider__background-lower",
        BACKGROUND_UPPER: "mdl-slider__background-upper",
        IS_LOWEST_VALUE: "is-lowest-value",
        IS_UPGRADED: "is-upgraded"
    }, f.prototype.onInput_ = function (e) {
        this.updateValueStyles_()
    }, f.prototype.onChange_ = function (e) {
        this.updateValueStyles_()
    }, f.prototype.onMouseUp_ = function (e) {
        e.target.blur()
    }, f.prototype.onContainerMouseDown_ = function (e) {
        if (e.target === this.element_.parentElement) {
            e.preventDefault();
            var t = new MouseEvent("mousedown", {
                target: e.target,
                buttons: e.buttons,
                clientX: e.clientX,
                clientY: this.element_.getBoundingClientRect().y
            });
            this.element_.dispatchEvent(t)
        }
    }, f.prototype.updateValueStyles_ = function () {
        var e = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
        0 === e ? this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE) : this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE), this.isIE_ || (this.backgroundLower_.style.flex = e, this.backgroundLower_.style.webkitFlex = e, this.backgroundUpper_.style.flex = 1 - e, this.backgroundUpper_.style.webkitFlex = 1 - e)
    }, f.prototype.disable = function () {
        this.element_.disabled = !0
    }, f.prototype.disable = f.prototype.disable, f.prototype.enable = function () {
        this.element_.disabled = !1
    }, f.prototype.enable = f.prototype.enable, f.prototype.change = function (e) {
        "undefined" != typeof e && (this.element_.value = e), this.updateValueStyles_()
    }, f.prototype.change = f.prototype.change, f.prototype.init = function () {
        if (this.element_) {
            if (this.isIE_) {
                var e = document.createElement("div");
                e.classList.add(this.CssClasses_.IE_CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_)
            } else {
                var t = document.createElement("div");
                t.classList.add(this.CssClasses_.SLIDER_CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_);
                var n = document.createElement("div");
                n.classList.add(this.CssClasses_.BACKGROUND_FLEX), t.appendChild(n), this.backgroundLower_ = document.createElement("div"), this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER), n.appendChild(this.backgroundLower_), this.backgroundUpper_ = document.createElement("div"), this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER), n.appendChild(this.backgroundUpper_)
            }
            this.boundInputHandler = this.onInput_.bind(this), this.boundChangeHandler = this.onChange_.bind(this), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this), this.element_.addEventListener("input", this.boundInputHandler), this.element_.addEventListener("change", this.boundChangeHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.addEventListener("mousedown", this.boundContainerMouseDownHandler), this.updateValueStyles_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, n.register({constructor: f, classAsString: "MaterialSlider", cssClass: "mdl-js-slider", widget: !0});
    var p = function (e) {
        if (this.element_ = e, this.textElement_ = this.element_.querySelector("." + this.cssClasses_.MESSAGE), this.actionElement_ = this.element_.querySelector("." + this.cssClasses_.ACTION), !this.textElement_) throw new Error("There must be a message element for a snackbar.");
        if (!this.actionElement_) throw new Error("There must be an action element for a snackbar.");
        this.active = !1, this.actionHandler_ = void 0, this.message_ = void 0, this.actionText_ = void 0, this.queuedNotifications_ = [], this.setActionHidden_(!0)
    };
    window.MaterialSnackbar = p, p.prototype.Constant_ = {ANIMATION_LENGTH: 250}, p.prototype.cssClasses_ = {
        SNACKBAR: "mdl-snackbar",
        MESSAGE: "mdl-snackbar__text",
        ACTION: "mdl-snackbar__action",
        ACTIVE: "mdl-snackbar--active"
    }, p.prototype.displaySnackbar_ = function () {
        this.element_.setAttribute("aria-hidden", "true"), this.actionHandler_ && (this.actionElement_.textContent = this.actionText_, this.actionElement_.addEventListener("click", this.actionHandler_), this.setActionHidden_(!1)), this.textElement_.textContent = this.message_, this.element_.classList.add(this.cssClasses_.ACTIVE), this.element_.setAttribute("aria-hidden", "false"), setTimeout(this.cleanup_.bind(this), this.timeout_)
    }, p.prototype.showSnackbar = function (e) {
        if (void 0 === e) throw new Error("Please provide a data object with at least a message to display.");
        if (void 0 === e.message) throw new Error("Please provide a message to be displayed.");
        if (e.actionHandler && !e.actionText) throw new Error("Please provide action text with the handler.");
        this.active ? this.queuedNotifications_.push(e) : (this.active = !0, this.message_ = e.message, e.timeout ? this.timeout_ = e.timeout : this.timeout_ = 2750, e.actionHandler && (this.actionHandler_ = e.actionHandler), e.actionText && (this.actionText_ = e.actionText), this.displaySnackbar_())
    }, p.prototype.showSnackbar = p.prototype.showSnackbar, p.prototype.checkQueue_ = function () {
        this.queuedNotifications_.length > 0 && this.showSnackbar(this.queuedNotifications_.shift())
    }, p.prototype.cleanup_ = function () {
        this.element_.classList.remove(this.cssClasses_.ACTIVE), setTimeout(function () {
            this.element_.setAttribute("aria-hidden", "true"), this.textElement_.textContent = "", Boolean(this.actionElement_.getAttribute("aria-hidden")) || (this.setActionHidden_(!0), this.actionElement_.textContent = "", this.actionElement_.removeEventListener("click", this.actionHandler_)), this.actionHandler_ = void 0, this.message_ = void 0, this.actionText_ = void 0, this.active = !1, this.checkQueue_()
        }.bind(this), this.Constant_.ANIMATION_LENGTH)
    }, p.prototype.setActionHidden_ = function (e) {
        e ? this.actionElement_.setAttribute("aria-hidden", "true") : this.actionElement_.removeAttribute("aria-hidden")
    }, n.register({constructor: p, classAsString: "MaterialSnackbar", cssClass: "mdl-js-snackbar", widget: !0});
    var g = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialSpinner = g, g.prototype.Constant_ = {MDL_SPINNER_LAYER_COUNT: 4}, g.prototype.CssClasses_ = {
        MDL_SPINNER_LAYER: "mdl-spinner__layer",
        MDL_SPINNER_CIRCLE_CLIPPER: "mdl-spinner__circle-clipper",
        MDL_SPINNER_CIRCLE: "mdl-spinner__circle",
        MDL_SPINNER_GAP_PATCH: "mdl-spinner__gap-patch",
        MDL_SPINNER_LEFT: "mdl-spinner__left",
        MDL_SPINNER_RIGHT: "mdl-spinner__right"
    }, g.prototype.createLayer = function (e) {
        var t = document.createElement("div");
        t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER), t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + "-" + e);
        var n = document.createElement("div");
        n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
        var i = document.createElement("div");
        i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
        var s = document.createElement("div");
        s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), s.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
        for (var r = [n, i, s], o = 0; o < r.length; o++) {
            var a = document.createElement("div");
            a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE), r[o].appendChild(a)
        }
        t.appendChild(n), t.appendChild(i), t.appendChild(s), this.element_.appendChild(t)
    }, g.prototype.createLayer = g.prototype.createLayer, g.prototype.stop = function () {
        this.element_.classList.remove("is-active")
    }, g.prototype.stop = g.prototype.stop, g.prototype.start = function () {
        this.element_.classList.add("is-active")
    }, g.prototype.start = g.prototype.start, g.prototype.init = function () {
        if (this.element_) {
            for (var e = 1; e <= this.Constant_.MDL_SPINNER_LAYER_COUNT; e++) this.createLayer(e);
            this.element_.classList.add("is-upgraded")
        }
    }, n.register({constructor: g, classAsString: "MaterialSpinner", cssClass: "mdl-js-spinner", widget: !0});
    var m = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialSwitch = m, m.prototype.Constant_ = {TINY_TIMEOUT: .001}, m.prototype.CssClasses_ = {
        INPUT: "mdl-switch__input",
        TRACK: "mdl-switch__track",
        THUMB: "mdl-switch__thumb",
        FOCUS_HELPER: "mdl-switch__focus-helper",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-switch__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked"
    }, m.prototype.onChange_ = function (e) {
        this.updateClasses_()
    }, m.prototype.onFocus_ = function (e) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, m.prototype.onBlur_ = function (e) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, m.prototype.onMouseUp_ = function (e) {
        this.blur_()
    }, m.prototype.updateClasses_ = function () {
        this.checkDisabled(), this.checkToggleState()
    }, m.prototype.blur_ = function () {
        window.setTimeout(function () {
            this.inputElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, m.prototype.checkDisabled = function () {
        this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, m.prototype.checkDisabled = m.prototype.checkDisabled, m.prototype.checkToggleState = function () {
        this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, m.prototype.checkToggleState = m.prototype.checkToggleState, m.prototype.disable = function () {
        this.inputElement_.disabled = !0, this.updateClasses_()
    }, m.prototype.disable = m.prototype.disable, m.prototype.enable = function () {
        this.inputElement_.disabled = !1, this.updateClasses_()
    }, m.prototype.enable = m.prototype.enable, m.prototype.on = function () {
        this.inputElement_.checked = !0, this.updateClasses_()
    }, m.prototype.on = m.prototype.on, m.prototype.off = function () {
        this.inputElement_.checked = !1, this.updateClasses_()
    }, m.prototype.off = m.prototype.off, m.prototype.init = function () {
        if (this.element_) {
            this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.TRACK);
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.THUMB);
            var n = document.createElement("span");
            if (n.classList.add(this.CssClasses_.FOCUS_HELPER), t.appendChild(n), this.element_.appendChild(e), this.element_.appendChild(t), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.rippleContainerElement_.addEventListener("mouseup", this.boundMouseUpHandler);
                var i = document.createElement("span");
                i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
            }
            this.boundChangeHandler = this.onChange_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.inputElement_.addEventListener("change", this.boundChangeHandler), this.inputElement_.addEventListener("focus", this.boundFocusHandler), this.inputElement_.addEventListener("blur", this.boundBlurHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.updateClasses_(), this.element_.classList.add("is-upgraded")
        }
    }, n.register({constructor: m, classAsString: "MaterialSwitch", cssClass: "mdl-js-switch", widget: !0});
    var C = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialTabs = C, C.prototype.Constant_ = {}, C.prototype.CssClasses_ = {
        TAB_CLASS: "mdl-tabs__tab",
        PANEL_CLASS: "mdl-tabs__panel",
        ACTIVE_CLASS: "is-active",
        UPGRADED_CLASS: "is-upgraded",
        MDL_JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
        MDL_RIPPLE_CONTAINER: "mdl-tabs__ripple-container",
        MDL_RIPPLE: "mdl-ripple",
        MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events"
    }, C.prototype.initTabs_ = function () {
        this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT) && this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS), this.tabs_ = this.element_.querySelectorAll("." + this.CssClasses_.TAB_CLASS), this.panels_ = this.element_.querySelectorAll("." + this.CssClasses_.PANEL_CLASS);
        for (var t = 0; t < this.tabs_.length; t++) new e(this.tabs_[t], this);
        this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)
    }, C.prototype.resetTabState_ = function () {
        for (var e = 0; e < this.tabs_.length; e++) this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
    }, C.prototype.resetPanelState_ = function () {
        for (var e = 0; e < this.panels_.length; e++) this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
    }, C.prototype.init = function () {
        this.element_ && this.initTabs_()
    }, n.register({constructor: C, classAsString: "MaterialTabs", cssClass: "mdl-js-tabs"});
    var v = function (e) {
        this.element_ = e, this.maxRows = this.Constant_.NO_MAX_ROWS, this.init()
    };
    window.MaterialTextfield = v, v.prototype.Constant_ = {
        NO_MAX_ROWS: -1,
        MAX_ROWS_ATTRIBUTE: "maxrows"
    }, v.prototype.CssClasses_ = {
        LABEL: "mdl-textfield__label",
        INPUT: "mdl-textfield__input",
        IS_DIRTY: "is-dirty",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_INVALID: "is-invalid",
        IS_UPGRADED: "is-upgraded",
        HAS_PLACEHOLDER: "has-placeholder"
    }, v.prototype.onKeyDown_ = function (e) {
        var t = e.target.value.split("\n").length;
        13 === e.keyCode && t >= this.maxRows && e.preventDefault()
    }, v.prototype.onFocus_ = function (e) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, v.prototype.onBlur_ = function (e) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, v.prototype.onReset_ = function (e) {
        this.updateClasses_()
    }, v.prototype.updateClasses_ = function () {
        this.checkDisabled(), this.checkValidity(), this.checkDirty(), this.checkFocus()
    }, v.prototype.checkDisabled = function () {
        this.input_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, v.prototype.checkDisabled = v.prototype.checkDisabled, v.prototype.checkFocus = function () {
        Boolean(this.element_.querySelector(":focus")) ? this.element_.classList.add(this.CssClasses_.IS_FOCUSED) : this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, v.prototype.checkFocus = v.prototype.checkFocus, v.prototype.checkValidity = function () {
        this.input_.validity && (this.input_.validity.valid ? this.element_.classList.remove(this.CssClasses_.IS_INVALID) : this.element_.classList.add(this.CssClasses_.IS_INVALID))
    }, v.prototype.checkValidity = v.prototype.checkValidity, v.prototype.checkDirty = function () {
        this.input_.value && this.input_.value.length > 0 ? this.element_.classList.add(this.CssClasses_.IS_DIRTY) : this.element_.classList.remove(this.CssClasses_.IS_DIRTY)
    }, v.prototype.checkDirty = v.prototype.checkDirty, v.prototype.disable = function () {
        this.input_.disabled = !0, this.updateClasses_()
    }, v.prototype.disable = v.prototype.disable, v.prototype.enable = function () {
        this.input_.disabled = !1, this.updateClasses_()
    }, v.prototype.enable = v.prototype.enable, v.prototype.change = function (e) {
        this.input_.value = e || "", this.updateClasses_()
    }, v.prototype.change = v.prototype.change, v.prototype.init = function () {
        if (this.element_ && (this.label_ = this.element_.querySelector("." + this.CssClasses_.LABEL), this.input_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.input_)) {
            this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE) && (this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10), isNaN(this.maxRows) && (this.maxRows = this.Constant_.NO_MAX_ROWS)), this.input_.hasAttribute("placeholder") && this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER), this.boundUpdateClassesHandler = this.updateClasses_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.boundResetHandler = this.onReset_.bind(this), this.input_.addEventListener("input", this.boundUpdateClassesHandler), this.input_.addEventListener("focus", this.boundFocusHandler), this.input_.addEventListener("blur", this.boundBlurHandler), this.input_.addEventListener("reset", this.boundResetHandler), this.maxRows !== this.Constant_.NO_MAX_ROWS && (this.boundKeyDownHandler = this.onKeyDown_.bind(this), this.input_.addEventListener("keydown", this.boundKeyDownHandler));
            var e = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
            this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED), e && this.element_.classList.add(this.CssClasses_.IS_INVALID), this.input_.hasAttribute("autofocus") && (this.element_.focus(), this.checkFocus())
        }
    }, n.register({constructor: v, classAsString: "MaterialTextfield", cssClass: "mdl-js-textfield", widget: !0});
    var A = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialTooltip = A, A.prototype.Constant_ = {}, A.prototype.CssClasses_ = {
        IS_ACTIVE: "is-active",
        BOTTOM: "mdl-tooltip--bottom",
        LEFT: "mdl-tooltip--left",
        RIGHT: "mdl-tooltip--right",
        TOP: "mdl-tooltip--top"
    }, A.prototype.handleMouseEnter_ = function (e) {
        var t = e.target.getBoundingClientRect(), n = t.left + t.width / 2, i = t.top + t.height / 2,
            s = -1 * (this.element_.offsetWidth / 2), r = -1 * (this.element_.offsetHeight / 2);
        this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT) ? (n = t.width / 2, i + r < 0 ? (this.element_.style.top = "0", this.element_.style.marginTop = "0") : (this.element_.style.top = i + "px", this.element_.style.marginTop = r + "px")) : n + s < 0 ? (this.element_.style.left = "0", this.element_.style.marginLeft = "0") : (this.element_.style.left = n + "px", this.element_.style.marginLeft = s + "px"), this.element_.classList.contains(this.CssClasses_.TOP) ? this.element_.style.top = t.top - this.element_.offsetHeight - 10 + "px" : this.element_.classList.contains(this.CssClasses_.RIGHT) ? this.element_.style.left = t.left + t.width + 10 + "px" : this.element_.classList.contains(this.CssClasses_.LEFT) ? this.element_.style.left = t.left - this.element_.offsetWidth - 10 + "px" : this.element_.style.top = t.top + t.height + 10 + "px", this.element_.classList.add(this.CssClasses_.IS_ACTIVE)
    }, A.prototype.hideTooltip_ = function () {
        this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)
    }, A.prototype.init = function () {
        if (this.element_) {
            var e = this.element_.getAttribute("for") || this.element_.getAttribute("data-mdl-for");
            e && (this.forElement_ = document.getElementById(e)), this.forElement_ && (this.forElement_.hasAttribute("tabindex") || this.forElement_.setAttribute("tabindex", "0"), this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this), this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this), this.forElement_.addEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("touchend", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("mouseleave", this.boundMouseLeaveAndScrollHandler, !1), window.addEventListener("scroll", this.boundMouseLeaveAndScrollHandler, !0), window.addEventListener("touchstart", this.boundMouseLeaveAndScrollHandler))
        }
    }, n.register({constructor: A, classAsString: "MaterialTooltip", cssClass: "mdl-tooltip"});
    var y = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialLayout = y, y.prototype.Constant_ = {
        MAX_WIDTH: "(max-width: 1024px)",
        TAB_SCROLL_PIXELS: 100,
        RESIZE_TIMEOUT: 100,
        MENU_ICON: "&#xE5D2;",
        CHEVRON_LEFT: "chevron_left",
        CHEVRON_RIGHT: "chevron_right"
    }, y.prototype.Keycodes_ = {ENTER: 13, ESCAPE: 27, SPACE: 32}, y.prototype.Mode_ = {
        STANDARD: 0,
        SEAMED: 1,
        WATERFALL: 2,
        SCROLL: 3
    }, y.prototype.CssClasses_ = {
        CONTAINER: "mdl-layout__container",
        HEADER: "mdl-layout__header",
        DRAWER: "mdl-layout__drawer",
        CONTENT: "mdl-layout__content",
        DRAWER_BTN: "mdl-layout__drawer-button",
        ICON: "material-icons",
        JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_CONTAINER: "mdl-layout__tab-ripple-container",
        RIPPLE: "mdl-ripple",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        HEADER_SEAMED: "mdl-layout__header--seamed",
        HEADER_WATERFALL: "mdl-layout__header--waterfall",
        HEADER_SCROLL: "mdl-layout__header--scroll",
        FIXED_HEADER: "mdl-layout--fixed-header",
        OBFUSCATOR: "mdl-layout__obfuscator",
        TAB_BAR: "mdl-layout__tab-bar",
        TAB_CONTAINER: "mdl-layout__tab-bar-container",
        TAB: "mdl-layout__tab",
        TAB_BAR_BUTTON: "mdl-layout__tab-bar-button",
        TAB_BAR_LEFT_BUTTON: "mdl-layout__tab-bar-left-button",
        TAB_BAR_RIGHT_BUTTON: "mdl-layout__tab-bar-right-button",
        TAB_MANUAL_SWITCH: "mdl-layout__tab-manual-switch",
        PANEL: "mdl-layout__tab-panel",
        HAS_DRAWER: "has-drawer",
        HAS_TABS: "has-tabs",
        HAS_SCROLLING_HEADER: "has-scrolling-header",
        CASTING_SHADOW: "is-casting-shadow",
        IS_COMPACT: "is-compact",
        IS_SMALL_SCREEN: "is-small-screen",
        IS_DRAWER_OPEN: "is-visible",
        IS_ACTIVE: "is-active",
        IS_UPGRADED: "is-upgraded",
        IS_ANIMATING: "is-animating",
        ON_LARGE_SCREEN: "mdl-layout--large-screen-only",
        ON_SMALL_SCREEN: "mdl-layout--small-screen-only"
    }, y.prototype.contentScrollHandler_ = function () {
        if (!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
            var e = !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);
            this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT) ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.header_.classList.add(this.CssClasses_.IS_COMPACT), e && this.header_.classList.add(this.CssClasses_.IS_ANIMATING)) : this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.header_.classList.remove(this.CssClasses_.IS_COMPACT), e && this.header_.classList.add(this.CssClasses_.IS_ANIMATING))
        }
    }, y.prototype.keyboardEventHandler_ = function (e) {
        e.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN) && this.toggleDrawer()
    }, y.prototype.screenSizeHandler_ = function () {
        this.screenSizeMediaQuery_.matches ? this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN) : (this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN), this.drawer_ && (this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN), this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))
    }, y.prototype.drawerToggleHandler_ = function (e) {
        if (e && "keydown" === e.type) {
            if (e.keyCode !== this.Keycodes_.SPACE && e.keyCode !== this.Keycodes_.ENTER) return;
            e.preventDefault()
        }
        this.toggleDrawer()
    }, y.prototype.headerTransitionEndHandler_ = function () {
        this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)
    }, y.prototype.headerClickHandler_ = function () {
        this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING))
    }, y.prototype.resetTabState_ = function (e) {
        for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
    }, y.prototype.resetPanelState_ = function (e) {
        for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
    }, y.prototype.toggleDrawer = function () {
        var e = this.element_.querySelector("." + this.CssClasses_.DRAWER_BTN);
        this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN), this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN), this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN) ? (this.drawer_.setAttribute("aria-hidden", "false"), e.setAttribute("aria-expanded", "true")) : (this.drawer_.setAttribute("aria-hidden", "true"), e.setAttribute("aria-expanded", "false"))
    }, y.prototype.toggleDrawer = y.prototype.toggleDrawer, y.prototype.init = function () {
        if (this.element_) {
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.CONTAINER);
            var n = this.element_.querySelector(":focus");
            this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_), n && n.focus();
            for (var i = this.element_.childNodes, s = i.length, r = 0; r < s; r++) {
                var o = i[r];
                o.classList && o.classList.contains(this.CssClasses_.HEADER) && (this.header_ = o), o.classList && o.classList.contains(this.CssClasses_.DRAWER) && (this.drawer_ = o), o.classList && o.classList.contains(this.CssClasses_.CONTENT) && (this.content_ = o)
            }
            window.addEventListener("pageshow", function (e) {
                e.persisted && (this.element_.style.overflowY = "hidden", requestAnimationFrame(function () {
                    this.element_.style.overflowY = ""
                }.bind(this)))
            }.bind(this), !1), this.header_ && (this.tabBar_ = this.header_.querySelector("." + this.CssClasses_.TAB_BAR));
            var a = this.Mode_.STANDARD;
            if (this.header_ && (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED) ? a = this.Mode_.SEAMED : this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL) ? (a = this.Mode_.WATERFALL, this.header_.addEventListener("transitionend", this.headerTransitionEndHandler_.bind(this)), this.header_.addEventListener("click", this.headerClickHandler_.bind(this))) : this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL) && (a = this.Mode_.SCROLL, e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)), a === this.Mode_.STANDARD ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)) : a === this.Mode_.SEAMED || a === this.Mode_.SCROLL ? (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)) : a === this.Mode_.WATERFALL && (this.content_.addEventListener("scroll", this.contentScrollHandler_.bind(this)), this.contentScrollHandler_())), this.drawer_) {
                var l = this.element_.querySelector("." + this.CssClasses_.DRAWER_BTN);
                if (!l) {
                    l = document.createElement("div"), l.setAttribute("aria-expanded", "false"), l.setAttribute("role", "button"), l.setAttribute("tabindex", "0"), l.classList.add(this.CssClasses_.DRAWER_BTN);
                    var c = document.createElement("i");
                    c.classList.add(this.CssClasses_.ICON), c.innerHTML = this.Constant_.MENU_ICON, l.appendChild(c)
                }
                this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN) ? l.classList.add(this.CssClasses_.ON_LARGE_SCREEN) : this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN) && l.classList.add(this.CssClasses_.ON_SMALL_SCREEN), l.addEventListener("click", this.drawerToggleHandler_.bind(this)), l.addEventListener("keydown", this.drawerToggleHandler_.bind(this)), this.element_.classList.add(this.CssClasses_.HAS_DRAWER), this.element_.classList.contains(this.CssClasses_.FIXED_HEADER) ? this.header_.insertBefore(l, this.header_.firstChild) : this.element_.insertBefore(l, this.content_);
                var h = document.createElement("div");
                h.classList.add(this.CssClasses_.OBFUSCATOR), this.element_.appendChild(h), h.addEventListener("click", this.drawerToggleHandler_.bind(this)), this.obfuscator_ = h, this.drawer_.addEventListener("keydown", this.keyboardEventHandler_.bind(this)), this.drawer_.setAttribute("aria-hidden", "true")
            }
            if (this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH), this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)), this.screenSizeHandler_(), this.header_ && this.tabBar_) {
                this.element_.classList.add(this.CssClasses_.HAS_TABS);
                var u = document.createElement("div");
                u.classList.add(this.CssClasses_.TAB_CONTAINER), this.header_.insertBefore(u, this.tabBar_), this.header_.removeChild(this.tabBar_);
                var d = document.createElement("div");
                d.classList.add(this.CssClasses_.TAB_BAR_BUTTON), d.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
                var f = document.createElement("i");
                f.classList.add(this.CssClasses_.ICON), f.textContent = this.Constant_.CHEVRON_LEFT, d.appendChild(f), d.addEventListener("click", function () {
                    this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS
                }.bind(this));
                var p = document.createElement("div");
                p.classList.add(this.CssClasses_.TAB_BAR_BUTTON), p.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
                var g = document.createElement("i");
                g.classList.add(this.CssClasses_.ICON), g.textContent = this.Constant_.CHEVRON_RIGHT, p.appendChild(g), p.addEventListener("click", function () {
                    this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS
                }.bind(this)), u.appendChild(d), u.appendChild(this.tabBar_), u.appendChild(p);
                var m = function () {
                    this.tabBar_.scrollLeft > 0 ? d.classList.add(this.CssClasses_.IS_ACTIVE) : d.classList.remove(this.CssClasses_.IS_ACTIVE), this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth ? p.classList.add(this.CssClasses_.IS_ACTIVE) : p.classList.remove(this.CssClasses_.IS_ACTIVE)
                }.bind(this);
                this.tabBar_.addEventListener("scroll", m), m();
                var C = function () {
                    this.resizeTimeoutId_ && clearTimeout(this.resizeTimeoutId_), this.resizeTimeoutId_ = setTimeout(function () {
                        m(), this.resizeTimeoutId_ = null
                    }.bind(this), this.Constant_.RESIZE_TIMEOUT)
                }.bind(this);
                window.addEventListener("resize", C), this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT) && this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                for (var v = this.tabBar_.querySelectorAll("." + this.CssClasses_.TAB), A = this.content_.querySelectorAll("." + this.CssClasses_.PANEL), y = 0; y < v.length; y++) new t(v[y], v, A, this)
            }
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, window.MaterialLayoutTab = t, n.register({
        constructor: y,
        classAsString: "MaterialLayout",
        cssClass: "mdl-js-layout"
    });
    var E = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialDataTable = E, E.prototype.Constant_ = {}, E.prototype.CssClasses_ = {
        DATA_TABLE: "mdl-data-table",
        SELECTABLE: "mdl-data-table--selectable",
        SELECT_ELEMENT: "mdl-data-table__select",
        IS_SELECTED: "is-selected",
        IS_UPGRADED: "is-upgraded"
    }, E.prototype.selectRow_ = function (e, t, n) {
        return t ? function () {
            e.checked ? t.classList.add(this.CssClasses_.IS_SELECTED) : t.classList.remove(this.CssClasses_.IS_SELECTED)
        }.bind(this) : n ? function () {
            var t, i;
            if (e.checked) for (t = 0; t < n.length; t++) i = n[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.check(), n[t].classList.add(this.CssClasses_.IS_SELECTED); else for (t = 0; t < n.length; t++) i = n[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.uncheck(), n[t].classList.remove(this.CssClasses_.IS_SELECTED)
        }.bind(this) : void 0
    }, E.prototype.createCheckbox_ = function (e, t) {
        var i = document.createElement("label"),
            s = ["mdl-checkbox", "mdl-js-checkbox", "mdl-js-ripple-effect", this.CssClasses_.SELECT_ELEMENT];
        i.className = s.join(" ");
        var r = document.createElement("input");
        return r.type = "checkbox", r.classList.add("mdl-checkbox__input"), e ? (r.checked = e.classList.contains(this.CssClasses_.IS_SELECTED), r.addEventListener("change", this.selectRow_(r, e))) : t && r.addEventListener("change", this.selectRow_(r, null, t)), i.appendChild(r), n.upgradeElement(i, "MaterialCheckbox"), i
    }, E.prototype.init = function () {
        if (this.element_) {
            var e = this.element_.querySelector("th"),
                t = Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),
                n = Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")), i = t.concat(n);
            if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
                var s = document.createElement("th"), r = this.createCheckbox_(null, i);
                s.appendChild(r), e.parentElement.insertBefore(s, e);
                for (var o = 0; o < i.length; o++) {
                    var a = i[o].querySelector("td");
                    if (a) {
                        var l = document.createElement("td");
                        if ("TBODY" === i[o].parentNode.nodeName.toUpperCase()) {
                            var c = this.createCheckbox_(i[o]);
                            l.appendChild(c)
                        }
                        i[o].insertBefore(l, a)
                    }
                }
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
            }
        }
    }, n.register({constructor: E, classAsString: "MaterialDataTable", cssClass: "mdl-js-data-table"});
    var w = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialRipple = w, w.prototype.Constant_ = {
        INITIAL_SCALE: "scale(0.0001, 0.0001)",
        INITIAL_SIZE: "1px",
        INITIAL_OPACITY: "0.4",
        FINAL_OPACITY: "0",
        FINAL_SCALE: ""
    }, w.prototype.CssClasses_ = {
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE: "mdl-ripple",
        IS_ANIMATING: "is-animating",
        IS_VISIBLE: "is-visible"
    }, w.prototype.downHandler_ = function (e) {
        if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
            var t = this.element_.getBoundingClientRect();
            this.boundHeight = t.height, this.boundWidth = t.width, this.rippleSize_ = 2 * Math.sqrt(t.width * t.width + t.height * t.height) + 2, this.rippleElement_.style.width = this.rippleSize_ + "px", this.rippleElement_.style.height = this.rippleSize_ + "px"
        }
        if (this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE), "mousedown" === e.type && this.ignoringMouseDown_) this.ignoringMouseDown_ = !1; else {
            "touchstart" === e.type && (this.ignoringMouseDown_ = !0);
            var n = this.getFrameCount();
            if (n > 0) return;
            this.setFrameCount(1);
            var i, s, r = e.currentTarget.getBoundingClientRect();
            if (0 === e.clientX && 0 === e.clientY) i = Math.round(r.width / 2), s = Math.round(r.height / 2); else {
                var o = void 0 !== e.clientX ? e.clientX : e.touches[0].clientX,
                    a = void 0 !== e.clientY ? e.clientY : e.touches[0].clientY;
                i = Math.round(o - r.left), s = Math.round(a - r.top)
            }
            this.setRippleXY(i, s), this.setRippleStyles(!0), window.requestAnimationFrame(this.animFrameHandler.bind(this))
        }
    }, w.prototype.upHandler_ = function (e) {
        e && 2 !== e.detail && window.setTimeout(function () {
            this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)
        }.bind(this), 0)
    }, w.prototype.init = function () {
        if (this.element_) {
            var e = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
            this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS) || (this.rippleElement_ = this.element_.querySelector("." + this.CssClasses_.RIPPLE), this.frameCount_ = 0, this.rippleSize_ = 0, this.x_ = 0, this.y_ = 0, this.ignoringMouseDown_ = !1, this.boundDownHandler = this.downHandler_.bind(this), this.element_.addEventListener("mousedown", this.boundDownHandler), this.element_.addEventListener("touchstart", this.boundDownHandler), this.boundUpHandler = this.upHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundUpHandler), this.element_.addEventListener("mouseleave", this.boundUpHandler), this.element_.addEventListener("touchend", this.boundUpHandler), this.element_.addEventListener("blur", this.boundUpHandler), this.getFrameCount = function () {
                return this.frameCount_
            }, this.setFrameCount = function (e) {
                this.frameCount_ = e
            }, this.getRippleElement = function () {
                return this.rippleElement_
            }, this.setRippleXY = function (e, t) {
                this.x_ = e, this.y_ = t
            }, this.setRippleStyles = function (t) {
                if (null !== this.rippleElement_) {
                    var n, i, s, r = "translate(" + this.x_ + "px, " + this.y_ + "px)";
                    t ? (i = this.Constant_.INITIAL_SCALE, s = this.Constant_.INITIAL_SIZE) : (i = this.Constant_.FINAL_SCALE, s = this.rippleSize_ + "px", e && (r = "translate(" + this.boundWidth / 2 + "px, " + this.boundHeight / 2 + "px)")), n = "translate(-50%, -50%) " + r + i, this.rippleElement_.style.webkitTransform = n, this.rippleElement_.style.msTransform = n, this.rippleElement_.style.transform = n, t ? this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING) : this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)
                }
            }, this.animFrameHandler = function () {
                this.frameCount_-- > 0 ? window.requestAnimationFrame(this.animFrameHandler.bind(this)) : this.setRippleStyles(!1)
            })
        }
    }, n.register({constructor: w, classAsString: "MaterialRipple", cssClass: "mdl-js-ripple-effect", widget: !1})
}(), !function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t, n) {
        var i, s = (t = t || oe).createElement("script");
        if (s.text = e, n) for (i in ye) n[i] && (s[i] = n[i]);
        t.head.appendChild(s).parentNode.removeChild(s)
    }

    function i(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[fe.call(e)] || "object" : typeof e
    }

    function s(e) {
        var t = !!e && "length" in e && e.length, n = i(e);
        return !ve(e) && !Ae(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return ve(t) ? Ee.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? Ee.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? Ee.grep(e, function (e) {
            return ue.call(t, e) > -1 !== n
        }) : Ee.filter(t, e, n)
    }

    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function l(e) {
        var t = {};
        return Ee.each(e.match($e) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function c(e) {
        return e
    }

    function h(e) {
        throw e
    }

    function u(e, t, n, i) {
        var s;
        try {
            e && ve(s = e.promise) ? s.call(e).done(t).fail(n) : e && ve(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        oe.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), Ee.ready()
    }

    function f(e, t) {
        return t.toUpperCase()
    }

    function p(e) {
        return e.replace(Ie, "ms-").replace(Oe, f)
    }

    function g() {
        this.expando = Ee.expando + g.uid++
    }

    function m(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : We.test(e) ? JSON.parse(e) : e)
    }

    function C(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Ue, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = m(n)
            } catch (e) {
            }
            He.set(e, t, n)
        } else n = void 0;
        return n
    }

    function v(e, t, n, i) {
        var s, r, o = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return Ee.css(e, t, "")
            }, l = a(), c = n && n[3] || (Ee.cssNumber[t] ? "" : "px"),
            h = (Ee.cssNumber[t] || "px" !== c && +l) && ze.exec(Ee.css(e, t));
        if (h && h[3] !== c) {
            for (l /= 2, c = c || h[3], h = +l || 1; o--;) Ee.style(e, t, h + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (o = 0), h /= r;
            h *= 2, Ee.style(e, t, h + c), n = n || []
        }
        return n && (h = +h || +l || 0, s = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = s)), s
    }

    function A(e) {
        var t, n = e.ownerDocument, i = e.nodeName, s = Ge[i];
        return s || (t = n.body.appendChild(n.createElement(i)), s = Ee.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), Ge[i] = s, s)
    }

    function y(e, t) {
        for (var n, i, s = [], r = 0, o = e.length; r < o; r++) (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (s[r] = Pe.get(i, "display") || null, s[r] || (i.style.display = "")), "" === i.style.display && qe(i) && (s[r] = A(i))) : "none" !== n && (s[r] = "none", Pe.set(i, "display", n)));
        for (r = 0; r < o; r++) null != s[r] && (e[r].style.display = s[r]);
        return e
    }

    function E(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? Ee.merge([e], n) : n
    }

    function w(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Pe.set(e[n], "globalEval", !t || Pe.get(t[n], "globalEval"))
    }

    function b(e, t, n, s, r) {
        for (var o, a, l, c, h, u, d = t.createDocumentFragment(), f = [], p = 0, g = e.length; p < g; p++) if ((o = e[p]) || 0 === o) if ("object" === i(o)) Ee.merge(f, o.nodeType ? [o] : o); else if (Ze.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), l = (Ye.exec(o) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, a.innerHTML = c[1] + Ee.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
            Ee.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];) if (s && Ee.inArray(o, s) > -1) r && r.push(o); else if (h = Ee.contains(o.ownerDocument, o), a = E(d.appendChild(o), "script"), h && w(a), n) for (u = 0; o = a[u++];) Je.test(o.type || "") && n.push(o);
        return d
    }

    function F() {
        return !0
    }

    function _() {
        return !1
    }

    function S() {
        try {
            return oe.activeElement
        } catch (e) {
        }
    }

    function x(e, t, n, i, s, r) {
        var o, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) x(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = _; else if (!s) return e;
        return 1 === r && (o = s, (s = function (e) {
            return Ee().off(e), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = Ee.guid++)), e.each(function () {
            Ee.event.add(this, t, s, i, n)
        })
    }

    function D(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ee(e).children("tbody")[0] || e : e
    }

    function L(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function B(e, t) {
        var n, i, s, r, o, a, l, c;
        if (1 === t.nodeType) {
            if (Pe.hasData(e) && (r = Pe.access(e), o = Pe.set(t, r), c = r.events)) {
                delete o.handle, o.events = {};
                for (s in c) for (n = 0, i = c[s].length; n < i; n++) Ee.event.add(t, s, c[s][n])
            }
            He.hasData(e) && (a = He.access(e), l = Ee.extend({}, a), He.set(t, l))
        }
    }

    function $(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, i, s) {
        t = ce.apply([], t);
        var r, o, a, l, c, h, u = 0, d = e.length, f = d - 1, p = t[0], g = ve(p);
        if (g || d > 1 && "string" == typeof p && !Ce.checkClone && ot.test(p)) return e.each(function (n) {
            var r = e.eq(n);
            g && (t[0] = p.call(this, n, r.html())), T(r, t, i, s)
        });
        if (d && (r = b(t, e[0].ownerDocument, !1, e, s), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || s)) {
            for (l = (a = Ee.map(E(r, "script"), L)).length; u < d; u++) c = r, u !== f && (c = Ee.clone(c, !0, !0), l && Ee.merge(a, E(c, "script"))), i.call(e[u], c, u);
            if (l) for (h = a[a.length - 1].ownerDocument, Ee.map(a, k), u = 0; u < l; u++) c = a[u], Je.test(c.type || "") && !Pe.access(c, "globalEval") && Ee.contains(h, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? Ee._evalUrl && Ee._evalUrl(c.src) : n(c.textContent.replace(at, ""), h, c))
        }
        return e
    }

    function R(e, t, n) {
        for (var i, s = t ? Ee.filter(t, e) : e, r = 0; null != (i = s[r]); r++) n || 1 !== i.nodeType || Ee.cleanData(E(i)), i.parentNode && (n && Ee.contains(i.ownerDocument, i) && w(E(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function M(e, t, n) {
        var i, s, r, o, a = e.style;
        return (n = n || ct(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || Ee.contains(e.ownerDocument, e) || (o = Ee.style(e, t)), !Ce.pixelBoxStyles() && lt.test(o) && ht.test(t) && (i = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = s, a.maxWidth = r)), void 0 !== o ? o + "" : o
    }

    function I(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function O(e) {
        if (e in mt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;) if ((e = gt[n] + t) in mt) return e
    }

    function N(e) {
        var t = Ee.cssProps[e];
        return t || (t = Ee.cssProps[e] = O(e) || e), t
    }

    function P(e, t, n) {
        var i = ze.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function H(e, t, n, i, s, r) {
        var o = "width" === t ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === n && (l += Ee.css(e, n + Ve[o], !0, s)), i ? ("content" === n && (l -= Ee.css(e, "padding" + Ve[o], !0, s)), "margin" !== n && (l -= Ee.css(e, "border" + Ve[o] + "Width", !0, s))) : (l += Ee.css(e, "padding" + Ve[o], !0, s), "padding" !== n ? l += Ee.css(e, "border" + Ve[o] + "Width", !0, s) : a += Ee.css(e, "border" + Ve[o] + "Width", !0, s));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l
    }

    function W(e, t, n) {
        var i = ct(e), s = M(e, t, i), r = "border-box" === Ee.css(e, "boxSizing", !1, i), o = r;
        if (lt.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return o = o && (Ce.boxSizingReliable() || s === e.style[t]), ("auto" === s || !parseFloat(s) && "inline" === Ee.css(e, "display", !1, i)) && (s = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (s = parseFloat(s) || 0) + H(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function U(e, t, n, i, s) {
        return new U.prototype.init(e, t, n, i, s)
    }

    function j() {
        vt && (!1 === oe.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(j) : e.setTimeout(j, Ee.fx.interval), Ee.fx.tick())
    }

    function z() {
        return e.setTimeout(function () {
            Ct = void 0
        }), Ct = Date.now()
    }

    function V(e, t) {
        var n, i = 0, s = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) s["margin" + (n = Ve[i])] = s["padding" + n] = e;
        return t && (s.opacity = s.width = e), s
    }

    function q(e, t, n) {
        for (var i, s = (X.tweeners[t] || []).concat(X.tweeners["*"]), r = 0, o = s.length; r < o; r++) if (i = s[r].call(n, t, e)) return i
    }

    function K(e, t, n) {
        var i, s, r, o, a, l, c, h, u = "width" in t || "height" in t, d = this, f = {}, p = e.style,
            g = e.nodeType && qe(e), m = Pe.get(e, "fxshow");
        n.queue || (null == (o = Ee._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
            o.unqueued || a()
        }), o.unqueued++, d.always(function () {
            d.always(function () {
                o.unqueued--, Ee.queue(e, "fx").length || o.empty.fire()
            })
        }));
        for (i in t) if (s = t[i], At.test(s)) {
            if (delete t[i], r = r || "toggle" === s, s === (g ? "hide" : "show")) {
                if ("show" !== s || !m || void 0 === m[i]) continue;
                g = !0
            }
            f[i] = m && m[i] || Ee.style(e, i)
        }
        if ((l = !Ee.isEmptyObject(t)) || !Ee.isEmptyObject(f)) {
            u && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Pe.get(e, "display")), "none" === (h = Ee.css(e, "display")) && (c ? h = c : (y([e], !0), c = e.style.display || c, h = Ee.css(e, "display"), y([e]))), ("inline" === h || "inline-block" === h && null != c) && "none" === Ee.css(e, "float") && (l || (d.done(function () {
                p.display = c
            }), null == c && (h = p.display, c = "none" === h ? "" : h)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (m ? "hidden" in m && (g = m.hidden) : m = Pe.access(e, "fxshow", {display: c}), r && (m.hidden = !g), g && y([e], !0), d.done(function () {
                g || y([e]), Pe.remove(e, "fxshow");
                for (i in f) Ee.style(e, i, f[i])
            })), l = q(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function G(e, t) {
        var n, i, s, r, o;
        for (n in e) if (i = p(n), s = t[i], r = e[n], Array.isArray(r) && (s = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (o = Ee.cssHooks[i]) && "expand" in o) {
            r = o.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = s)
        } else t[i] = s
    }

    function X(e, t, n) {
        var i, s, r = 0, o = X.prefilters.length, a = Ee.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var t = Ct || z(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]), i < 1 && o ? n : (o || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        }, c = a.promise({
            elem: e,
            props: Ee.extend({}, t),
            opts: Ee.extend(!0, {specialEasing: {}, easing: Ee.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ct || z(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = Ee.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
            }
        }), h = c.props;
        for (G(h, c.opts.specialEasing); r < o; r++) if (i = X.prefilters[r].call(c, e, h, c.opts)) return ve(i.stop) && (Ee._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return Ee.map(h, q, c), ve(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), Ee.fx.timer(Ee.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function Y(e) {
        return (e.match($e) || []).join(" ")
    }

    function J(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Q(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match($e) || [] : []
    }

    function Z(e, t, n, s) {
        var r;
        if (Array.isArray(t)) Ee.each(t, function (t, i) {
            n || Bt.test(e) ? s(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, s)
        }); else if (n || "object" !== i(t)) s(e, t); else for (r in t) Z(e + "[" + r + "]", t[r], n, s)
    }

    function ee(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, s = 0, r = t.toLowerCase().match($e) || [];
            if (ve(n)) for (; i = r[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function te(e, t, n, i) {
        function s(a) {
            var l;
            return r[a] = !0, Ee.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        var r = {}, o = e === jt;
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function ne(e, t) {
        var n, i, s = Ee.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Ee.extend(!0, e, i), e
    }

    function ie(e, t, n) {
        for (var i, s, r, o, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (s in a) if (a[s] && a[s].test(i)) {
            l.unshift(s);
            break
        }
        if (l[0] in n) r = l[0]; else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                o || (o = s)
            }
            r = r || o
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function se(e, t, n, i) {
        var s, r, o, a, l, c = {}, h = e.dataTypes.slice();
        if (h[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
        for (r = h.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = h.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (!(o = c[l + " " + r] || c["* " + r])) for (s in c) if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0], h.unshift(a[1]));
                break
            }
            if (!0 !== o) if (o && e["throws"]) t = o(t); else try {
                t = o(t)
            } catch (e) {
                return {state: "parsererror", error: o ? e : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: t}
    }

    var re = [], oe = e.document, ae = Object.getPrototypeOf, le = re.slice, ce = re.concat, he = re.push,
        ue = re.indexOf, de = {}, fe = de.toString, pe = de.hasOwnProperty, ge = pe.toString, me = ge.call(Object),
        Ce = {}, ve = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, Ae = function (e) {
            return null != e && e === e.window
        }, ye = {type: !0, src: !0, noModule: !0}, Ee = function (e, t) {
            return new Ee.fn.init(e, t)
        }, we = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Ee.fn = Ee.prototype = {
        jquery: "3.3.1", constructor: Ee, length: 0, toArray: function () {
            return le.call(this)
        }, get: function (e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = Ee.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return Ee.each(this, e)
        }, map: function (e) {
            return this.pushStack(Ee.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(le.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: he, sort: re.sort, splice: re.splice
    }, Ee.extend = Ee.fn.extend = function () {
        var e, t, n, i, s, r, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || ve(o) || (o = {}), a === l && (o = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = o[t], o !== (i = e[t]) && (c && i && (Ee.isPlainObject(i) || (s = Array.isArray(i))) ? (s ? (s = !1, r = n && Array.isArray(n) ? n : []) : r = n && Ee.isPlainObject(n) ? n : {}, o[t] = Ee.extend(c, r, i)) : void 0 !== i && (o[t] = i));
        return o
    }, Ee.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== fe.call(e) || (t = ae(e)) && ("function" != typeof (n = pe.call(t, "constructor") && t.constructor) || ge.call(n) !== me))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            n(e)
        }, each: function (e, t) {
            var n, i = 0;
            if (s(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(we, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? Ee.merge(n, "string" == typeof e ? [e] : e) : he.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : ue.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, s = e.length; i < n; i++) e[s++] = t[i];
            return e.length = s, e
        }, grep: function (e, t, n) {
            for (var i, s = [], r = 0, o = e.length, a = !n; r < o; r++) (i = !t(e[r], r)) !== a && s.push(e[r]);
            return s
        }, map: function (e, t, n) {
            var i, r, o = 0, a = [];
            if (s(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r); else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return ce.apply([], a)
        }, guid: 1, support: Ce
    }), "function" == typeof Symbol && (Ee.fn[Symbol.iterator] = re[Symbol.iterator]), Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        de["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function (e) {
        function t(e, t, n, i) {
            var s, r, o, a, l, c, h, d = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : W) !== T && $(t), t = t || T, M)) {
                if (11 !== p && (l = Ce.exec(e))) if (s = l[1]) {
                    if (9 === p) {
                        if (!(o = t.getElementById(s))) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (d && (o = d.getElementById(s)) && P(t, o) && o.id === s) return n.push(o), n
                } else {
                    if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(s)), n
                }
                if (w.qsa && !q[e + " "] && (!I || !I.test(e))) {
                    if (1 !== p) d = t, h = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(Ee, we) : t.setAttribute("id", a = H), r = (c = S(e)).length; r--;) c[r] = "#" + a + " " + f(c[r]);
                        h = c.join(","), d = ve.test(e) && u(t.parentNode) || t
                    }
                    if (h) try {
                        return Q.apply(n, d.querySelectorAll(h)), n
                    } catch (e) {
                    } finally {
                        a === H && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[H] = !0, e
        }

        function s(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function o(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Fe(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function h(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var s, r = e([], n.length, t), o = r.length; o--;) n[s = r[o]] && (n[s] = !(i[s] = n[s]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir, s = t.next, r = s || i, o = n && "parentNode" === r, a = j++;
            return t.first ? function (t, n, s) {
                for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, s);
                return !1
            } : function (t, n, l) {
                var c, h, u, d = [U, a];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || o) if (u = t[H] || (t[H] = {}), h = u[t.uniqueID] || (u[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = h[r]) && c[0] === U && c[1] === a) return d[2] = c[2];
                    if (h[r] = d, d[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var s = e.length; s--;) if (!e[s](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var s = 0, r = n.length; s < r; s++) t(e, n[s], i);
            return i
        }

        function C(e, t, n, i, s) {
            for (var r, o = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, s) || (o.push(r), c && t.push(a)));
            return o
        }

        function v(e, t, n, s, r, o) {
            return s && !s[H] && (s = v(s)), r && !r[H] && (r = v(r, o)), i(function (i, o, a, l) {
                var c, h, u, d = [], f = [], p = o.length, g = i || m(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? g : C(g, d, e, a, l), A = n ? r || (i ? e : p || s) ? [] : o : v;
                if (n && n(v, A, a, l), s) for (c = C(A, f), s(c, [], a, l), h = c.length; h--;) (u = c[h]) && (A[f[h]] = !(v[f[h]] = u));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], h = A.length; h--;) (u = A[h]) && c.push(v[h] = u);
                            r(null, A = [], c, l)
                        }
                        for (h = A.length; h--;) (u = A[h]) && (c = r ? ee(i, u) : d[h]) > -1 && (i[c] = !(o[c] = u))
                    }
                } else A = C(A === o ? A.splice(p, A.length) : A), r ? r(null, o, A, l) : Q.apply(o, A)
            })
        }

        function A(e) {
            for (var t, n, i, s = e.length, r = b.relative[e[0].type], o = r || b.relative[" "], a = r ? 1 : 0, l = p(function (e) {
                return e === t
            }, o, !0), c = p(function (e) {
                return ee(t, e) > -1
            }, o, !0), h = [function (e, n, i) {
                var s = !r && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, s
            }]; a < s; a++) if (n = b.relative[e[a].type]) h = [p(g(h), n)]; else {
                if ((n = b.filter[e[a].type].apply(null, e[a].matches))[H]) {
                    for (i = ++a; i < s && !b.relative[e[i].type]; i++) ;
                    return v(a > 1 && g(h), a > 1 && f(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, a < i && A(e.slice(a, i)), i < s && A(e = e.slice(i)), i < s && f(e))
                }
                h.push(n)
            }
            return g(h)
        }

        function y(e, n) {
            var s = n.length > 0, r = e.length > 0, o = function (i, o, a, l, c) {
                var h, u, d, f = 0, p = "0", g = i && [], m = [], v = L, A = i || r && b.find.TAG("*", c),
                    y = U += null == v ? 1 : Math.random() || .1, E = A.length;
                for (c && (L = o === T || o || c); p !== E && null != (h = A[p]); p++) {
                    if (r && h) {
                        for (u = 0, o || h.ownerDocument === T || ($(h), a = !M); d = e[u++];) if (d(h, o || T, a)) {
                            l.push(h);
                            break
                        }
                        c && (U = y)
                    }
                    s && ((h = !d && h) && f--, i && g.push(h))
                }
                if (f += p, s && p !== f) {
                    for (u = 0; d = n[u++];) d(g, m, o, a);
                    if (i) {
                        if (f > 0) for (; p--;) g[p] || m[p] || (m[p] = Y.call(l));
                        m = C(m)
                    }
                    Q.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return c && (U = y, L = v), g
            };
            return s ? i(o) : o
        }

        var E, w, b, F, _, S, x, D, L, k, B, $, T, R, M, I, O, N, P, H = "sizzle" + 1 * new Date, W = e.document, U = 0,
            j = 0, z = n(), V = n(), q = n(), K = function (e, t) {
                return e === t && (B = !0), 0
            }, G = {}.hasOwnProperty, X = [], Y = X.pop, J = X.push, Q = X.push, Z = X.slice, ee = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            se = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            oe = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), ue = new RegExp(re),
            de = new RegExp("^" + ie + "$"), fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
            Ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/,
            Ae = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), ye = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, be = function () {
                $()
            }, Fe = p(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            Q.apply(X = Z.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: X.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, _ = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, $ = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : W;
            return i !== T && 9 === i.nodeType && i.documentElement ? (T = i, R = T.documentElement, M = !_(T), W !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), w.attributes = s(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = s(function (e) {
                return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(T.getElementsByClassName), w.getById = s(function (e) {
                return R.appendChild(e).id = H, !T.getElementsByName || !T.getElementsByName(H).length
            }), w.getById ? (b.filter.ID = function (e) {
                var t = e.replace(Ae, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var t = e.replace(Ae, ye);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n, i, s, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                        for (s = t.getElementsByName(e), i = 0; r = s[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                    }
                    return []
                }
            }), b.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], s = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[s++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, b.find.CLASS = w.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && M) return t.getElementsByClassName(e)
            }, O = [], I = [], (w.qsa = me.test(T.querySelectorAll)) && (s(function (e) {
                R.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
            }), s(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), R.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (w.matchesSelector = me.test(N = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && s(function (e) {
                w.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), O.push("!=", re)
            }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), t = me.test(R.compareDocumentPosition), P = t || me.test(R.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, K = t ? function (e, t) {
                if (e === t) return B = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === W && P(W, e) ? -1 : t === T || t.ownerDocument === W && P(W, t) ? 1 : k ? ee(k, e) - ee(k, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return B = !0, 0;
                var n, i = 0, s = e.parentNode, r = t.parentNode, a = [e], l = [t];
                if (!s || !r) return e === T ? -1 : t === T ? 1 : s ? -1 : r ? 1 : k ? ee(k, e) - ee(k, t) : 0;
                if (s === r) return o(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? o(a[i], l[i]) : a[i] === W ? -1 : l[i] === W ? 1 : 0
            }, T) : T
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== T && $(e), n = n.replace(he, "='$1']"), w.matchesSelector && M && !q[n + " "] && (!O || !O.test(n)) && (!I || !I.test(n))) try {
                var i = N.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return t(n, T, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && $(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== T && $(e);
            var n = b.attrHandle[t.toLowerCase()],
                i = n && G.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : w.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function (e) {
            return (e + "").replace(Ee, we)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, s = 0;
            if (B = !w.detectDuplicates, k = !w.sortStable && e.slice(0), e.sort(K), B) {
                for (; t = e[s++];) t === e[s] && (i = n.push(s));
                for (; i--;) e.splice(n[i], 1)
            }
            return k = null, e
        }, F = t.getText = function (e) {
            var t, n = "", i = 0, s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += F(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else for (; t = e[i++];) n += F(t);
            return n
        }, (b = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Ae, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(Ae, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Ae, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, i) {
                    return function (s) {
                        var r = t.attr(s, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (e, t, n, i, s) {
                    var r = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === s ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, h, u, d, f, p, g = r !== o ? "nextSibling" : "previousSibling", m = t.parentNode,
                            C = a && t.nodeName.toLowerCase(), v = !l && !a, A = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = t; d = d[g];) if (a ? d.nodeName.toLowerCase() === C : 1 === d.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? m.firstChild : m.lastChild], o && v) {
                                for (A = (f = (c = (h = (u = (d = m)[H] || (d[H] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[e] || [])[0] === U && c[1]) && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (A = f = 0) || p.pop();) if (1 === d.nodeType && ++A && d === t) {
                                    h[e] = [U, f, A];
                                    break
                                }
                            } else if (v && (A = f = (c = (h = (u = (d = t)[H] || (d[H] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[e] || [])[0] === U && c[1]), !1 === A) for (; (d = ++f && d && d[g] || (A = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== C : 1 !== d.nodeType) || !++A || (v && ((h = (u = d[H] || (d[H] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[e] = [U, A]), d !== t));) ;
                            return (A -= s) === i || A % i == 0 && A / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var s, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[H] ? r(n) : r.length > 1 ? (s = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, s = r(e, n), o = s.length; o--;) e[i = ee(e, s[o])] = !(t[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, s)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], s = x(e.replace(ae, "$1"));
                    return s[H] ? i(function (e, t, n, i) {
                        for (var r, o = s(e, null, i, []), a = e.length; a--;) (r = o[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, s(t, null, r, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(Ae, ye), function (t) {
                        return (t.textContent || t.innerText || F(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Ae, ye).toLowerCase(), function (t) {
                        var n;
                        do if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === R
                }, focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: c(!1), disabled: c(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: h(function () {
                    return [0]
                }), last: h(function (e, t) {
                    return [t - 1]
                }), eq: h(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: h(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: h(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: h(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: h(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (E in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) b.pseudos[E] = a(E);
        for (E in {submit: !0, reset: !0}) b.pseudos[E] = l(E);
        return d.prototype = b.filters = b.pseudos, b.setFilters = new d, S = t.tokenize = function (e, n) {
            var i, s, r, o, a, l, c, h = V[e + " "];
            if (h) return n ? 0 : h.slice(0);
            for (a = e, l = [], c = b.preFilter; a;) {
                i && !(s = le.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(r = [])), i = !1, (s = ce.exec(a)) && (i = s.shift(), r.push({
                    value: i,
                    type: s[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (o in b.filter) !(s = fe[o].exec(a)) || c[o] && !(s = c[o](s)) || (i = s.shift(), r.push({
                    value: i,
                    type: o,
                    matches: s
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : V(e, l).slice(0)
        }, x = t.compile = function (e, t) {
            var n, i = [], s = [], r = q[e + " "];
            if (!r) {
                for (t || (t = S(e)), n = t.length; n--;) (r = A(t[n]))[H] ? i.push(r) : s.push(r);
                (r = q(e, y(s, i))).selector = e
            }
            return r
        }, D = t.select = function (e, t, n, i) {
            var s, r, o, a, l, c = "function" == typeof e && e, h = !i && S(e = c.selector || e);
            if (n = n || [], 1 === h.length) {
                if ((r = h[0] = h[0].slice(0)).length > 2 && "ID" === (o = r[0]).type && 9 === t.nodeType && M && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(o.matches[0].replace(Ae, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (s = fe.needsContext.test(e) ? 0 : r.length; s-- && (o = r[s], !b.relative[a = o.type]);) if ((l = b.find[a]) && (i = l(o.matches[0].replace(Ae, ye), ve.test(r[0].type) && u(t.parentNode) || t))) {
                    if (r.splice(s, 1), !(e = i.length && f(r))) return Q.apply(n, i), n;
                    break
                }
            }
            return (c || x(e, h))(i, t, !M, n, !t || ve.test(e) && u(t.parentNode) || t), n
        }, w.sortStable = H.split("").sort(K).join("") === H, w.detectDuplicates = !!B, $(), w.sortDetached = s(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), s(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && s(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), s(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Ee.find = be, Ee.expr = be.selectors, Ee.expr[":"] = Ee.expr.pseudos, Ee.uniqueSort = Ee.unique = be.uniqueSort, Ee.text = be.getText, Ee.isXMLDoc = be.isXML, Ee.contains = be.contains, Ee.escapeSelector = be.escape;
    var Fe = function (e, t, n) {
        for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (s && Ee(e).is(n)) break;
            i.push(e)
        }
        return i
    }, _e = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, Se = Ee.expr.match.needsContext, xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Ee.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Ee.find.matchesSelector(i, e) ? [i] : [] : Ee.find.matches(e, Ee.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Ee.fn.extend({
        find: function (e) {
            var t, n, i = this.length, s = this;
            if ("string" != typeof e) return this.pushStack(Ee(e).filter(function () {
                for (t = 0; t < i; t++) if (Ee.contains(s[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) Ee.find(e, s[t], n);
            return i > 1 ? Ee.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        }, is: function (e) {
            return !!o(this, "string" == typeof e && Se.test(e) ? Ee(e) : e || [], !1).length
        }
    });
    var De, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Ee.fn.init = function (e, t, n) {
        var i, s;
        if (!e) return this;
        if (n = n || De, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Le.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof Ee ? t[0] : t, Ee.merge(this, Ee.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), xe.test(i[1]) && Ee.isPlainObject(t)) for (i in t) ve(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (s = oe.getElementById(i[2])) && (this[0] = s, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ve(e) ? void 0 !== n.ready ? n.ready(e) : e(Ee) : Ee.makeArray(e, this)
    }).prototype = Ee.fn, De = Ee(oe);
    var ke = /^(?:parents|prev(?:Until|All))/, Be = {children: !0, contents: !0, next: !0, prev: !0};
    Ee.fn.extend({
        has: function (e) {
            var t = Ee(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (Ee.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, s = this.length, r = [], o = "string" != typeof e && Ee(e);
            if (!Se.test(e)) for (; i < s; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && Ee.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? Ee.uniqueSort(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? ue.call(Ee(e), this[0]) : ue.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Ee.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Fe(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Fe(e, "parentNode", n)
        }, next: function (e) {
            return a(e, "nextSibling")
        }, prev: function (e) {
            return a(e, "previousSibling")
        }, nextAll: function (e) {
            return Fe(e, "nextSibling")
        }, prevAll: function (e) {
            return Fe(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Fe(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Fe(e, "previousSibling", n)
        }, siblings: function (e) {
            return _e((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return _e(e.firstChild)
        }, contents: function (e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), Ee.merge([], e.childNodes))
        }
    }, function (e, t) {
        Ee.fn[e] = function (n, i) {
            var s = Ee.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = Ee.filter(i, s)), this.length > 1 && (Be[e] || Ee.uniqueSort(s), ke.test(e) && s.reverse()), this.pushStack(s)
        }
    });
    var $e = /[^\x20\t\r\n\f]+/g;
    Ee.Callbacks = function (e) {
        e = "string" == typeof e ? l(e) : Ee.extend({}, e);
        var t, n, s, r, o = [], a = [], c = -1, h = function () {
            for (r = r || e.once, s = t = !0; a.length; c = -1) for (n = a.shift(); ++c < o.length;) !1 === o[c].apply(n[0], n[1]) && e.stopOnFalse && (c = o.length, n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
        }, u = {
            add: function () {
                return o && (n && !t && (c = o.length - 1, a.push(n)), function s(t) {
                    Ee.each(t, function (t, n) {
                        ve(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== i(n) && s(n)
                    })
                }(arguments), n && !t && h()), this
            }, remove: function () {
                return Ee.each(arguments, function (e, t) {
                    for (var n; (n = Ee.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= c && c--
                }), this
            }, has: function (e) {
                return e ? Ee.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return r = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return r = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || h()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return u
    }, Ee.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", Ee.Callbacks("memory"), Ee.Callbacks("memory"), 2], ["resolve", "done", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", s = {
                    state: function () {
                        return i
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return s.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return Ee.Deferred(function (t) {
                            Ee.each(n, function (n, i) {
                                var s = ve(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ve(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, s) {
                        function r(t, n, i, s) {
                            return function () {
                                var a = this, l = arguments, u = function () {
                                    var e, u;
                                    if (!(t < o)) {
                                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        u = e && ("object" == typeof e || "function" == typeof e) && e.then, ve(u) ? s ? u.call(e, r(o, n, c, s), r(o, n, h, s)) : (o++, u.call(e, r(o, n, c, s), r(o, n, h, s), r(o, n, c, n.notifyWith))) : (i !== c && (a = void 0, l = [e]), (s || n.resolveWith)(a, l))
                                    }
                                }, d = s ? u : function () {
                                    try {
                                        u()
                                    } catch (e) {
                                        Ee.Deferred.exceptionHook && Ee.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= o && (i !== h && (a = void 0, l = [e]), n.rejectWith(a, l))
                                    }
                                };
                                t ? d() : (Ee.Deferred.getStackHook && (d.stackTrace = Ee.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }

                        var o = 0;
                        return Ee.Deferred(function (e) {
                            n[0][3].add(r(0, e, ve(s) ? s : c, e.notifyWith)), n[1][3].add(r(0, e, ve(t) ? t : c)), n[2][3].add(r(0, e, ve(i) ? i : h))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? Ee.extend(e, s) : s
                    }
                }, r = {};
            return Ee.each(n, function (e, t) {
                var o = t[2], a = t[5];
                s[t[1]] = o.add, a && o.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = o.fireWith
            }), s.promise(r), t && t.call(r, r), r
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), s = le.call(arguments), r = Ee.Deferred(), o = function (e) {
                return function (n) {
                    i[e] = this, s[e] = arguments.length > 1 ? le.call(arguments) : n, --t || r.resolveWith(i, s)
                }
            };
            if (t <= 1 && (u(e, r.done(o(n)).resolve, r.reject, !t), "pending" === r.state() || ve(s[n] && s[n].then))) return r.then();
            for (; n--;) u(s[n], o(n), r.reject);
            return r.promise()
        }
    });
    var Te = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Ee.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Te.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, Ee.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Re = Ee.Deferred();
    Ee.fn.ready = function (e) {
        return Re.then(e)["catch"](function (e) {
            Ee.readyException(e)
        }), this
    }, Ee.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --Ee.readyWait : Ee.isReady) || (Ee.isReady = !0, !0 !== e && --Ee.readyWait > 0 || Re.resolveWith(oe, [Ee]))
        }
    }), Ee.ready.then = Re.then, "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll ? e.setTimeout(Ee.ready) : (oe.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Me = function (e, t, n, s, r, o, a) {
        var l = 0, c = e.length, h = null == n;
        if ("object" === i(n)) {
            r = !0;
            for (l in n) Me(e, t, l, n[l], !0, o, a)
        } else if (void 0 !== s && (r = !0, ve(s) || (a = !0), h && (a ? (t.call(e, s), t = null) : (h = t, t = function (e, t, n) {
            return h.call(Ee(e), n)
        })), t)) for (; l < c; l++) t(e[l], n, a ? s : s.call(e[l], l, t(e[l], n)));
        return r ? e : h ? t.call(e) : c ? t(e[0], n) : o
    }, Ie = /^-ms-/, Oe = /-([a-z])/g, Ne = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    g.uid = 1, g.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Ne(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, s = this.cache(e);
            if ("string" == typeof t) s[p(t)] = n; else for (i in t) s[p(i)] = t[i];
            return s
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(p) : (t = p(t)) in i ? [t] : t.match($e) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || Ee.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Ee.isEmptyObject(t)
        }
    };
    var Pe = new g, He = new g, We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ue = /[A-Z]/g;
    Ee.extend({
        hasData: function (e) {
            return He.hasData(e) || Pe.hasData(e)
        }, data: function (e, t, n) {
            return He.access(e, t, n)
        }, removeData: function (e, t) {
            He.remove(e, t)
        }, _data: function (e, t, n) {
            return Pe.access(e, t, n)
        }, _removeData: function (e, t) {
            Pe.remove(e, t)
        }
    }), Ee.fn.extend({
        data: function (e, t) {
            var n, i, s, r = this[0], o = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (s = He.get(r), 1 === r.nodeType && !Pe.get(r, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = p(i.slice(5)), C(r, i, s[i]));
                    Pe.set(r, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                He.set(this, e)
            }) : Me(this, function (t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = He.get(r, e))) return n;
                    if (void 0 !== (n = C(r, e))) return n
                } else this.each(function () {
                    He.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                He.remove(this, e)
            })
        }
    }), Ee.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Pe.get(e, t), n && (!i || Array.isArray(n) ? i = Pe.access(e, t, Ee.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Ee.queue(e, t), i = n.length, s = n.shift(), r = Ee._queueHooks(e, t), o = function () {
                Ee.dequeue(e, t)
            };
            "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete r.stop, s.call(e, o, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Pe.get(e, n) || Pe.access(e, n, {
                empty: Ee.Callbacks("once memory").add(function () {
                    Pe.remove(e, [t + "queue", n])
                })
            })
        }
    }), Ee.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ee.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Ee.queue(this, e, t);
                Ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ee.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Ee.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, s = Ee.Deferred(), r = this, o = this.length, a = function () {
                --i || s.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) (n = Pe.get(r[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), s.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ze = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Ve = ["Top", "Right", "Bottom", "Left"], qe = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && Ee.contains(e.ownerDocument, e) && "none" === Ee.css(e, "display")
        }, Ke = function (e, t, n, i) {
            var s, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            s = n.apply(e, i || []);
            for (r in t) e.style[r] = o[r];
            return s
        }, Ge = {};
    Ee.fn.extend({
        show: function () {
            return y(this, !0)
        }, hide: function () {
            return y(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                qe(this) ? Ee(this).show() : Ee(this).hide()
            })
        }
    });
    var Xe = /^(?:checkbox|radio)$/i, Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Je = /^$|^module$|\/(?:java|ecma)script/i,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
    var Ze = /<|&#?\w+;/;
    !function () {
        var e = oe.createDocumentFragment().appendChild(oe.createElement("div")), t = oe.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), Ce.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Ce.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var et = oe.documentElement, tt = /^key/, nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        it = /^([^.]*)(?:\.(.+)|)/;
    Ee.event = {
        global: {}, add: function (e, t, n, i, s) {
            var r, o, a, l, c, h, u, d, f, p, g, m = Pe.get(e);
            if (m) for (n.handler && (n = (r = n).handler, s = r.selector), s && Ee.find.matchesSelector(et, s), n.guid || (n.guid = Ee.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function (t) {
                return "undefined" != typeof Ee && Ee.event.triggered !== t.type ? Ee.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match($e) || [""]).length; c--;) f = g = (a = it.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (u = Ee.event.special[f] || {}, f = (s ? u.delegateType : u.bindType) || f, u = Ee.event.special[f] || {}, h = Ee.extend({
                type: f,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: s,
                needsContext: s && Ee.expr.match.needsContext.test(s),
                namespace: p.join(".")
            }, r), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(f, o)), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = n.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), Ee.event.global[f] = !0)
        }, remove: function (e, t, n, i, s) {
            var r, o, a, l, c, h, u, d, f, p, g, m = Pe.hasData(e) && Pe.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match($e) || [""]).length; c--;) if (a = it.exec(t[c]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                    for (u = Ee.event.special[f] || {}, d = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = d.length; r--;) h = d[r], !s && g !== h.origType || n && n.guid !== h.guid || a && !a.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (d.splice(r, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(e, h));
                    o && !d.length && (u.teardown && !1 !== u.teardown.call(e, p, m.handle) || Ee.removeEvent(e, f, m.handle), delete l[f])
                } else for (f in l) Ee.event.remove(e, f + t[c], n, i, !0);
                Ee.isEmptyObject(l) && Pe.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, s, r, o, a = Ee.event.fix(e), l = new Array(arguments.length),
                c = (Pe.get(this, "events") || {})[a.type] || [], h = Ee.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                for (o = Ee.event.handlers.call(this, a, c), t = 0; (s = o[t++]) && !a.isPropagationStopped();) for (a.currentTarget = s.elem, n = 0; (r = s.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((Ee.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var n, i, s, r, o, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (r = [], o = {}, n = 0; n < l; n++) void 0 === o[s = (i = t[n]).selector + " "] && (o[s] = i.needsContext ? Ee(s, this).index(c) > -1 : Ee.find(s, this, null, [c]).length), o[s] && r.push(i);
                r.length && a.push({elem: c, handlers: r})
            }
            return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(Ee.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: ve(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[Ee.expando] ? e : new Ee.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== S() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === S() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return r(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Ee.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Ee.Event = function (e, t) {
        return this instanceof Ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? F : _, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ee.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ee.expando] = !0, void 0) : new Ee.Event(e, t)
    }, Ee.Event.prototype = {
        constructor: Ee.Event,
        isDefaultPrevented: _,
        isPropagationStopped: _,
        isImmediatePropagationStopped: _,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = F, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = F, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = F, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Ee.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Ee.event.addProp), Ee.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Ee.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, s = e.relatedTarget, r = e.handleObj;
                return s && (s === i || Ee.contains(i, s)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Ee.fn.extend({
        on: function (e, t, n, i) {
            return x(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return x(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Ee(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _), this.each(function () {
                Ee.event.remove(this, e, n, t)
            })
        }
    });
    var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        rt = /<script|<style|<link/i, ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ee.extend({
        htmlPrefilter: function (e) {
            return e.replace(st, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, s, r, o, a = e.cloneNode(!0), l = Ee.contains(e.ownerDocument, e);
            if (!(Ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ee.isXMLDoc(e))) for (o = E(a), i = 0, s = (r = E(e)).length; i < s; i++) $(r[i], o[i]);
            if (t) if (n) for (r = r || E(e), o = o || E(a), i = 0, s = r.length; i < s; i++) B(r[i], o[i]); else B(e, a);
            return (o = E(a, "script")).length > 0 && w(o, !l && E(e, "script")), a
        }, cleanData: function (e) {
            for (var t, n, i, s = Ee.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Ne(n)) {
                if (t = n[Pe.expando]) {
                    if (t.events) for (i in t.events) s[i] ? Ee.event.remove(n, i) : Ee.removeEvent(n, i, t.handle);
                    n[Pe.expando] = void 0
                }
                n[He.expando] && (n[He.expando] = void 0)
            }
        }
    }), Ee.fn.extend({
        detach: function (e) {
            return R(this, e, !0)
        }, remove: function (e) {
            return R(this, e)
        }, text: function (e) {
            return Me(this, function (e) {
                return void 0 === e ? Ee.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return T(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, e).appendChild(e)
            })
        }, prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = D(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ee.cleanData(E(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Ee.clone(this, e, t)
            })
        }, html: function (e) {
            return Me(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !rt.test(e) && !Qe[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Ee.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (Ee.cleanData(E(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                Ee.inArray(this, e) < 0 && (Ee.cleanData(E(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Ee.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Ee.fn[e] = function (e) {
            for (var n, i = [], s = Ee(e), r = s.length - 1, o = 0; o <= r; o++) n = o === r ? this : this.clone(!0), Ee(s[o])[t](n), he.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var lt = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"), ct = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, ht = new RegExp(Ve.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", et.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, a = 12 === n(t.marginLeft), c.style.right = "60%", o = 36 === n(t.right), s = 36 === n(t.width), c.style.position = "absolute", r = 36 === c.offsetWidth || "absolute", et.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var i, s, r, o, a, l = oe.createElement("div"), c = oe.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", Ce.clearCloneStyle = "content-box" === c.style.backgroundClip, Ee.extend(Ce, {
            boxSizingReliable: function () {
                return t(), s
            }, pixelBoxStyles: function () {
                return t(), o
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), a
            }, scrollboxSize: function () {
                return t(), r
            }
        }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/, dt = /^--/,
        ft = {position: "absolute", visibility: "hidden", display: "block"},
        pt = {letterSpacing: "0", fontWeight: "400"}, gt = ["Webkit", "Moz", "ms"], mt = oe.createElement("div").style;
    Ee.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = M(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, r, o, a = p(t), l = dt.test(t), c = e.style;
                if (l || (t = N(a)), o = Ee.cssHooks[t] || Ee.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (s = o.get(e, !1, i)) ? s : c[t];
                "string" == (r = typeof n) && (s = ze.exec(n)) && s[1] && (n = v(e, t, s), r = "number"), null != n && n === n && ("number" === r && (n += s && s[3] || (Ee.cssNumber[a] ? "" : "px")), Ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var s, r, o, a = p(t);
            return dt.test(t) || (t = N(a)), (o = Ee.cssHooks[t] || Ee.cssHooks[a]) && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = M(e, t, i)), "normal" === s && t in pt && (s = pt[t]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
        }
    }), Ee.each(["height", "width"], function (e, t) {
        Ee.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !ut.test(Ee.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? W(e, t, i) : Ke(e, ft, function () {
                    return W(e, t, i)
                })
            }, set: function (e, n, i) {
                var s, r = ct(e), o = "border-box" === Ee.css(e, "boxSizing", !1, r), a = i && H(e, t, i, o, r);
                return o && Ce.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - H(e, t, "border", !1, r) - .5)), a && (s = ze.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n, n = Ee.css(e, t)), P(e, n, a)
            }
        }
    }), Ee.cssHooks.marginLeft = I(Ce.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), Ee.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Ee.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, s = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[e + Ve[i] + t] = r[i] || r[i - 2] || r[0];
                return s
            }
        }, "margin" !== e && (Ee.cssHooks[e + t].set = P)
    }), Ee.fn.extend({
        css: function (e, t) {
            return Me(this, function (e, t, n) {
                var i, s, r = {}, o = 0;
                if (Array.isArray(t)) {
                    for (i = ct(e), s = t.length; o < s; o++) r[t[o]] = Ee.css(e, t[o], !1, i);
                    return r
                }
                return void 0 !== n ? Ee.style(e, t, n) : Ee.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), Ee.Tween = U, U.prototype = {
        constructor: U, init: function (e, t, n, i, s, r) {
            this.elem = e, this.prop = n, this.easing = s || Ee.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Ee.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = U.propHooks[this.prop];
            return e && e.get ? e.get(this) : U.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = U.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : U.propHooks._default.set(this), this
        }
    }, U.prototype.init.prototype = U.prototype, U.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ee.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                Ee.fx.step[e.prop] ? Ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Ee.cssProps[e.prop]] && !Ee.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Ee.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Ee.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, Ee.fx = U.prototype.init, Ee.fx.step = {};
    var Ct, vt, At = /^(?:toggle|show|hide)$/, yt = /queueHooks$/;
    Ee.Animation = Ee.extend(X, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return v(n.elem, e, ze.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            ve(e) ? (t = e, e = ["*"]) : e = e.match($e);
            for (var n, i = 0, s = e.length; i < s; i++) n = e[i], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
        }, prefilters: [K], prefilter: function (e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e)
        }
    }), Ee.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? Ee.extend({}, e) : {
            complete: n || !n && t || ve(e) && e,
            duration: e,
            easing: n && t || t && !ve(t) && t
        };
        return Ee.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Ee.fx.speeds ? i.duration = Ee.fx.speeds[i.duration] : i.duration = Ee.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ve(i.old) && i.old.call(this), i.queue && Ee.dequeue(this, i.queue)
        }, i
    }, Ee.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(qe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var s = Ee.isEmptyObject(e), r = Ee.speed(t, n, i), o = function () {
                var t = X(this, Ee.extend({}, e), r);
                (s || Pe.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, s = null != e && e + "queueHooks", r = Ee.timers, o = Pe.get(this);
                if (s) o[s] && o[s].stop && i(o[s]); else for (s in o) o[s] && o[s].stop && yt.test(s) && i(o[s]);
                for (s = r.length; s--;) r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(n), t = !1, r.splice(s, 1));
                !t && n || Ee.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Pe.get(this), i = n[e + "queue"], s = n[e + "queueHooks"], r = Ee.timers,
                    o = i ? i.length : 0;
                for (n.finish = !0, Ee.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), Ee.each(["toggle", "show", "hide"], function (e, t) {
        var n = Ee.fn[t];
        Ee.fn[t] = function (e, i, s) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, s)
        }
    }), Ee.each({
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Ee.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), Ee.timers = [], Ee.fx.tick = function () {
        var e, t = 0, n = Ee.timers;
        for (Ct = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Ee.fx.stop(), Ct = void 0
    }, Ee.fx.timer = function (e) {
        Ee.timers.push(e), Ee.fx.start()
    }, Ee.fx.interval = 13, Ee.fx.start = function () {
        vt || (vt = !0, j())
    }, Ee.fx.stop = function () {
        vt = null
    }, Ee.fx.speeds = {slow: 600, fast: 200, _default: 400}, Ee.fn.delay = function (t, n) {
        return t = Ee.fx ? Ee.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var s = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(s)
            }
        })
    }, function () {
        var e = oe.createElement("input"), t = oe.createElement("select").appendChild(oe.createElement("option"));
        e.type = "checkbox", Ce.checkOn = "" !== e.value, Ce.optSelected = t.selected, (e = oe.createElement("input")).value = "t", e.type = "radio", Ce.radioValue = "t" === e.value
    }();
    var Et, wt = Ee.expr.attrHandle;
    Ee.fn.extend({
        attr: function (e, t) {
            return Me(this, Ee.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Ee.removeAttr(this, e)
            })
        }
    }), Ee.extend({
        attr: function (e, t, n) {
            var i, s, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? Ee.prop(e, t, n) : (1 === r && Ee.isXMLDoc(e) || (s = Ee.attrHooks[t.toLowerCase()] || (Ee.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void Ee.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : s && "get" in s && null !== (i = s.get(e, t)) ? i : null == (i = Ee.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Ce.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, s = t && t.match($e);
            if (s && 1 === e.nodeType) for (; n = s[i++];) e.removeAttribute(n)
        }
    }), Et = {
        set: function (e, t, n) {
            return !1 === t ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = wt[t] || Ee.find.attr;
        wt[t] = function (e, t, i) {
            var s, r, o = t.toLowerCase();
            return i || (r = wt[o], wt[o] = s, s = null != n(e, t, i) ? o : null, wt[o] = r), s
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i, Ft = /^(?:a|area)$/i;
    Ee.fn.extend({
        prop: function (e, t) {
            return Me(this, Ee.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Ee.propFix[e] || e]
            })
        }
    }), Ee.extend({
        prop: function (e, t, n) {
            var i, s, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && Ee.isXMLDoc(e) || (t = Ee.propFix[t] || t, s = Ee.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = Ee.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), Ce.optSelected || (Ee.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Ee.propFix[this.toLowerCase()] = this
    }), Ee.fn.extend({
        addClass: function (e) {
            var t, n, i, s, r, o, a, l = 0;
            if (ve(e)) return this.each(function (t) {
                Ee(this).addClass(e.call(this, t, J(this)))
            });
            if ((t = Q(e)).length) for (; n = this[l++];) if (s = J(n), i = 1 === n.nodeType && " " + Y(s) + " ") {
                for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                s !== (a = Y(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, s, r, o, a, l = 0;
            if (ve(e)) return this.each(function (t) {
                Ee(this).removeClass(e.call(this, t, J(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Q(e)).length) for (; n = this[l++];) if (s = J(n), i = 1 === n.nodeType && " " + Y(s) + " ") {
                for (o = 0; r = t[o++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                s !== (a = Y(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : ve(e) ? this.each(function (n) {
                Ee(this).toggleClass(e.call(this, n, J(this), t), t)
            }) : this.each(function () {
                var t, s, r, o;
                if (i) for (s = 0, r = Ee(this), o = Q(e); t = o[s++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = J(this)) && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Pe.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + Y(J(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    Ee.fn.extend({
        val: function (e) {
            var t, n, i, s = this[0];
            return arguments.length ? (i = ve(e), this.each(function (n) {
                var s;
                1 === this.nodeType && (null == (s = i ? e.call(this, n, Ee(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = Ee.map(s, function (e) {
                    return null == e ? "" : e + ""
                })), (t = Ee.valHooks[this.type] || Ee.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            })) : s ? (t = Ee.valHooks[s.type] || Ee.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : "string" == typeof (n = s.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
        }
    }), Ee.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Ee.find.attr(e, "value");
                    return null != t ? t : Y(Ee.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, s = e.options, o = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
                        c = a ? o + 1 : s.length;
                    for (i = o < 0 ? c : a ? o : 0; i < c; i++) if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                        if (t = Ee(n).val(), a) return t;
                        l.push(t)
                    }
                    return l
                }, set: function (e, t) {
                    for (var n, i, s = e.options, r = Ee.makeArray(t), o = s.length; o--;) ((i = s[o]).selected = Ee.inArray(Ee.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), Ee.each(["radio", "checkbox"], function () {
        Ee.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = Ee.inArray(Ee(e).val(), t) > -1
            }
        }, Ce.checkOn || (Ee.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Ce.focusin = "onfocusin" in e;
    var St = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) {
        e.stopPropagation()
    };
    Ee.extend(Ee.event, {
        trigger: function (t, n, i, s) {
            var r, o, a, l, c, h, u, d, f = [i || oe], p = pe.call(t, "type") ? t.type : t,
                g = pe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = d = a = i = i || oe, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(p + Ee.event.triggered) && (p.indexOf(".") > -1 && (p = (g = p.split(".")).shift(), g.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Ee.expando] ? t : new Ee.Event(p, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Ee.makeArray(n, [t]), u = Ee.event.special[p] || {}, s || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!s && !u.noBubble && !Ae(i)) {
                    for (l = u.delegateType || p, St.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (i.ownerDocument || oe) && f.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (o = f[r++]) && !t.isPropagationStopped();) d = o, t.type = r > 1 ? l : u.bindType || p, (h = (Pe.get(o, "events") || {})[t.type] && Pe.get(o, "handle")) && h.apply(o, n), (h = c && o[c]) && h.apply && Ne(o) && (t.result = h.apply(o, n), !1 === t.result && t.preventDefault());
                return t.type = p, s || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), n) || !Ne(i) || c && ve(i[p]) && !Ae(i) && ((a = i[c]) && (i[c] = null), Ee.event.triggered = p, t.isPropagationStopped() && d.addEventListener(p, xt), i[p](), t.isPropagationStopped() && d.removeEventListener(p, xt), Ee.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = Ee.extend(new Ee.Event, n, {type: e, isSimulated: !0});
            Ee.event.trigger(i, null, t)
        }
    }), Ee.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                Ee.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Ee.event.trigger(e, t, n, !0)
        }
    }), Ce.focusin || Ee.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Ee.event.simulate(t, e.target, Ee.event.fix(e))
        };
        Ee.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, s = Pe.access(i, t);
                s || i.addEventListener(e, n, !0), Pe.access(i, t, (s || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, s = Pe.access(i, t) - 1;
                s ? Pe.access(i, t, s) : (i.removeEventListener(e, n, !0), Pe.remove(i, t))
            }
        }
    });
    var Dt = e.location, Lt = Date.now(), kt = /\?/;
    Ee.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new n.DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || Ee.error("Invalid XML: " + e), t
    };
    var Bt = /\[\]$/, $t = /\r?\n/g, Tt = /^(?:submit|button|image|reset|file)$/i,
        Rt = /^(?:input|select|textarea|keygen)/i;
    Ee.param = function (e, t) {
        var n, i = [], s = function (e, t) {
            var n = ve(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !Ee.isPlainObject(e)) Ee.each(e, function () {
            s(this.name, this.value)
        }); else for (n in e) Z(n, e[n], t, s);
        return i.join("&")
    }, Ee.fn.extend({
        serialize: function () {
            return Ee.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Ee.prop(this, "elements");
                return e ? Ee.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Ee(this).is(":disabled") && Rt.test(this.nodeName) && !Tt.test(e) && (this.checked || !Xe.test(e))
            }).map(function (e, t) {
                var n = Ee(this).val();
                return null == n ? null : Array.isArray(n) ? Ee.map(n, function (e) {
                    return {name: t.name, value: e.replace($t, "\r\n")}
                }) : {name: t.name, value: n.replace($t, "\r\n")}
            }).get()
        }
    });
    var Mt = /%20/g, It = /#.*$/, Ot = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ht = /^(?:GET|HEAD)$/, Wt = /^\/\//, Ut = {},
        jt = {}, zt = "*/".concat("*"), Vt = oe.createElement("a");
    Vt.href = Dt.href, Ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: Pt.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": Ee.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? ne(ne(e, Ee.ajaxSettings), t) : ne(Ee.ajaxSettings, e)
        },
        ajaxPrefilter: ee(Ut),
        ajaxTransport: ee(jt),
        ajax: function (e, t) {
            function n(e, t, n, o) {
                var l, u, d, A, y, E = t;
                c || (c = !0, a && b.clearTimeout(a), i = void 0, r = o || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (A = ie(f, w, n)), A = se(f, A, w, l), l ? (f.ifModified && ((y = w.getResponseHeader("Last-Modified")) && (Ee.lastModified[s] = y), (y = w.getResponseHeader("etag")) && (Ee.etag[s] = y)), 204 === e || "HEAD" === f.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = A.state, u = A.data, l = !(d = A.error))) : (d = E, !e && E || (E = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || E) + "", l ? m.resolveWith(p, [u, E, w]) : m.rejectWith(p, [w, E, d]), w.statusCode(v), v = void 0, h && g.trigger(l ? "ajaxSuccess" : "ajaxError", [w, f, l ? u : d]), C.fireWith(p, [w, E]), h && (g.trigger("ajaxComplete", [w, f]), --Ee.active || Ee.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, s, r, o, a, l, c, h, u, d, f = Ee.ajaxSetup({}, t), p = f.context || f,
                g = f.context && (p.nodeType || p.jquery) ? Ee(p) : Ee.event, m = Ee.Deferred(),
                C = Ee.Callbacks("once memory"), v = f.statusCode || {}, A = {}, y = {}, E = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!o) for (o = {}; t = Nt.exec(r);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? r : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = y[e.toLowerCase()] = y[e.toLowerCase()] || e, A[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (f.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) w.always(e[w.status]); else for (t in e) v[t] = [v[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || E;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (m.promise(w), f.url = ((e || f.url || Dt.href) + "").replace(Wt, Dt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match($e) || [""], null == f.crossDomain) {
                l = oe.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = Vt.protocol + "//" + Vt.host != l.protocol + "//" + l.host
                } catch (b) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = Ee.param(f.data, f.traditional)), te(Ut, f, t, w), c) return w;
            (h = Ee.event && f.global) && 0 == Ee.active++ && Ee.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ht.test(f.type), s = f.url.replace(It, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Mt, "+")) : (d = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (kt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Ot, "$1"), d = (kt.test(s) ? "&" : "?") + "_=" + Lt++ + d), f.url = s + d), f.ifModified && (Ee.lastModified[s] && w.setRequestHeader("If-Modified-Since", Ee.lastModified[s]), Ee.etag[s] && w.setRequestHeader("If-None-Match", Ee.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : f.accepts["*"]);
            for (u in f.headers) w.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || c)) return w.abort();
            if (E = "abort", C.add(f.complete), w.done(f.success), w.fail(f.error), i = te(jt, f, t, w)) {
                if (w.readyState = 1, h && g.trigger("ajaxSend", [w, f]), c) return w;
                f.async && f.timeout > 0 && (a = b.setTimeout(function () {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, i.send(A, n)
                } catch (b) {
                    if (c) throw b;
                    n(-1, b)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return Ee.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Ee.get(e, void 0, t, "script")
        }
    }), Ee.each(["get", "post"], function (e, t) {
        Ee[t] = function (e, n, i, s) {
            return ve(n) && (s = s || i, i = n, n = void 0), Ee.ajax(Ee.extend({
                url: e,
                type: t,
                dataType: s,
                data: n,
                success: i
            }, Ee.isPlainObject(e) && e))
        }
    }), Ee._evalUrl = function (e) {
        return Ee.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, Ee.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ve(e) && (e = e.call(this[0])), t = Ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return ve(e) ? this.each(function (t) {
                Ee(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Ee(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ve(e);
            return this.each(function (n) {
                Ee(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                Ee(this).replaceWith(this.childNodes)
            }), this
        }
    }), Ee.expr.pseudos.hidden = function (e) {
        return !Ee.expr.pseudos.visible(e)
    }, Ee.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Ee.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var qt = {0: 200, 1223: 204}, Kt = Ee.ajaxSettings.xhr();
    Ce.cors = !!Kt && "withCredentials" in Kt, Ce.ajax = Kt = !!Kt, Ee.ajaxTransport(function (e) {
        var t, n;
        if (Ce.cors || Kt && !e.crossDomain) return {
            send: function (i, s) {
                var r, o = e.xhr();
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) o.setRequestHeader(r, i[r]);
                t = function (e) {
                    return function () {
                        t && (t = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(qt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), n = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function () {
                    4 === o.readyState && a.setTimeout(function () {
                        t && n()
                    })
                }, t = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            }, abort: function () {
                t && t()
            }
        }
    }), Ee.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), Ee.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return Ee.globalEval(e), e
            }
        }
    }), Ee.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Ee.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, s) {
                    t = Ee("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
                    }), oe.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Gt = [], Xt = /(=)\?(?=&|$)|\?\?/;
    Ee.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Gt.pop() || Ee.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), Ee.ajaxPrefilter("json jsonp", function (t, n, i) {
        var s, r, o,
            a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = ve(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xt, "$1" + s) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function () {
            return o || Ee.error(s + " was not called"), o[0]
        }, t.dataTypes[0] = "json", r = e[s], e[s] = function () {
            o = arguments
        }, i.always(function () {
            void 0 === r ? Ee(e).removeProp(s) : e[s] = r, t[s] && (t.jsonpCallback = n.jsonpCallback, Gt.push(s)), o && ve(r) && r(o[0]), o = r = void 0
        }), "script"
    }), Ce.createHTMLDocument = function () {
        var e = oe.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Ee.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, s, r;
        return t || (Ce.createHTMLDocument ? ((i = (t = oe.implementation.createHTMLDocument("")).createElement("base")).href = oe.location.href, t.head.appendChild(i)) : t = oe), s = xe.exec(e), r = !n && [], s ? [t.createElement(s[1])] : (s = b([e], t, r), r && r.length && Ee(r).remove(), Ee.merge([], s.childNodes))
    }, Ee.fn.load = function (e, t, n) {
        var i, s, r, o = this, a = e.indexOf(" ");
        return a > -1 && (i = Y(e.slice(a)), e = e.slice(0, a)), ve(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && Ee.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, o.html(i ? Ee("<div>").append(Ee.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            o.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, Ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Ee.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Ee.expr.pseudos.animated = function (e) {
        return Ee.grep(Ee.timers, function (t) {
            return e === t.elem
        }).length
    }, Ee.offset = {
        setOffset: function (e, t, n) {
            var i, s, r, o, a, l, c, h = Ee.css(e, "position"), u = Ee(e), d = {};
            "static" === h && (e.style.position = "relative"), a = u.offset(), r = Ee.css(e, "top"), l = Ee.css(e, "left"), (c = ("absolute" === h || "fixed" === h) && (r + l).indexOf("auto") > -1) ? (o = (i = u.position()).top, s = i.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), ve(t) && (t = t.call(e, n, Ee.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + s), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, Ee.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Ee.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, i = this[0], s = {top: 0, left: 0};
                if ("fixed" === Ee.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ee.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((s = Ee(e).offset()).top += Ee.css(e, "borderTopWidth", !0), s.left += Ee.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - s.top - Ee.css(i, "marginTop", !0),
                    left: t.left - s.left - Ee.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === Ee.css(e, "position");) e = e.offsetParent;
                return e || et
            })
        }
    }), Ee.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        Ee.fn[e] = function (i) {
            return Me(this, function (e, i, s) {
                var r;
                return Ae(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === s ? r ? r[t] : e[i] : void (r ? r.scrollTo(n ? r.pageXOffset : s, n ? s : r.pageYOffset) : e[i] = s)
            }, e, i, arguments.length)
        }
    }), Ee.each(["top", "left"], function (e, t) {
        Ee.cssHooks[t] = I(Ce.pixelPosition, function (e, n) {
            if (n) return n = M(e, t), lt.test(n) ? Ee(e).position()[t] + "px" : n
        })
    }), Ee.each({Height: "height", Width: "width"}, function (e, t) {
        Ee.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            Ee.fn[i] = function (s, r) {
                var o = arguments.length && (n || "boolean" != typeof s),
                    a = n || (!0 === s || !0 === r ? "margin" : "border");
                return Me(this, function (t, n, s) {
                    var r;
                    return Ae(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? Ee.css(t, n, a) : Ee.style(t, n, s, a)
                }, t, o ? s : void 0, o)
            }
        })
    }), Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        Ee.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Ee.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Ee.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), Ee.proxy = function (e, t) {
        var n, i, s;
        if ("string" == typeof t && (n = e[t], t = e, e = n), ve(e)) return i = le.call(arguments, 2), s = function () {
            return e.apply(t || this, i.concat(le.call(arguments)))
        }, s.guid = e.guid = e.guid || Ee.guid++, s
    }, Ee.holdReady = function (e) {
        e ? Ee.readyWait++ : Ee.ready(!0)
    }, Ee.isArray = Array.isArray, Ee.parseJSON = JSON.parse, Ee.nodeName = r, Ee.isFunction = ve, Ee.isWindow = Ae, Ee.camelCase = p, Ee.type = i, Ee.now = Date.now, Ee.isNumeric = function (e) {
        var t = Ee.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Ee
    });
    var Yt = e.jQuery, Jt = e.$;
    return Ee.noConflict = function (t) {
        return e.$ === Ee && (e.$ = Jt), t && e.jQuery === Ee && (e.jQuery = Yt), Ee
    }, t || (e.jQuery = e.$ = Ee), Ee
}), function () {
    function e(e) {
        this.tokens = [], this.tokens.links = {}, this.options = e || c.defaults, this.rules = h.normal, this.options.gfm && (this.options.tables ? this.rules = h.tables : this.rules = h.gfm)
    }

    function t(e, t) {
        if (this.options = t || c.defaults, this.links = e, this.rules = u.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.options.breaks ? this.rules = u.breaks : this.rules = u.gfm : this.options.pedantic && (this.rules = u.pedantic)
    }

    function n(e) {
        this.options = e || {}
    }

    function i(e) {
        this.tokens = [], this.token = null, this.options = e || c.defaults, this.options.renderer = this.options.renderer || new n, this.renderer = this.options.renderer, this.renderer.options = this.options
    }

    function s(e, t) {
        return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function r(e) {
        return e.replace(/&([#\w]+);/g, function (e, t) {
            return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
        })
    }

    function o(e, t) {
        return e = e.source, t = t || "", function n(i, s) {
            return i ? (s = s.source || s, s = s.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(i, s), n) : new RegExp(e, t)
        }
    }

    function a() {
    }

    function l(e) {
        for (var t, n, i = 1; i < arguments.length; i++) {
            t = arguments[i];
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }

    function c(t, n, r) {
        if (r || "function" == typeof n) {
            r || (r = n, n = null), n = l({}, c.defaults, n || {});
            var o, a, h = n.highlight, u = 0;
            try {
                o = e.lex(t, n)
            } catch (d) {
                return r(d)
            }
            a = o.length;
            var f = function (e) {
                if (e) return n.highlight = h, r(e);
                var t;
                try {
                    t = i.parse(o, n)
                } catch (s) {
                    e = s
                }
                return n.highlight = h, e ? r(e) : r(null, t)
            };
            if (!h || h.length < 3) return f();
            if (delete n.highlight, !a) return f();
            for (; u < o.length; u++) !function (e) {
                return "code" !== e.type ? --a || f() : h(e.text, e.lang, function (t, n) {
                    return t ? f(t) : null == n || n === e.text ? --a || f() : (e.text = n, e.escaped = !0, void (--a || f()))
                })
            }(o[u])
        } else try {
            return n && (n = l({}, c.defaults, n)), i.parse(e.lex(t, n), n)
        } catch (d) {
            if (d.message += "\nPlease report this to https://github.com/chjj/marked.", (n || c.defaults).silent) return "<p>An error occured:</p><pre>" + s(d.message + "", !0) + "</pre>";
            throw d
        }
    }

    var h = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: a,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: a,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: a,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };
    h.bullet = /(?:[*+-]|\d+\.)/, h.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, h.item = o(h.item, "gm")(/bull/g, h.bullet)(), h.list = o(h.list)(/bull/g, h.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + h.def.source + ")")(), h.blockquote = o(h.blockquote)("def", h.def)(), h._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", h.html = o(h.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, h._tag)(), h.paragraph = o(h.paragraph)("hr", h.hr)("heading", h.heading)("lheading", h.lheading)("blockquote", h.blockquote)("tag", "<" + h._tag)("def", h.def)(), h.normal = l({}, h), h.gfm = l({}, h.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    }), h.gfm.paragraph = o(h.paragraph)("(?!", "(?!" + h.gfm.fences.source.replace("\\1", "\\2") + "|" + h.list.source.replace("\\1", "\\3") + "|")(), h.tables = l({}, h.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    }), e.rules = h, e.lex = function (t, n) {
        var i = new e(n);
        return i.lex(t)
    }, e.prototype.lex = function (e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
    }, e.prototype.token = function (e, t, n) {
        for (var i, s, r, o, a, l, c, u, d, e = e.replace(/^ +$/gm, ""); e;) if ((r = this.rules.newline.exec(e)) && (e = e.substring(r[0].length), r[0].length > 1 && this.tokens.push({type: "space"})), r = this.rules.code.exec(e)) e = e.substring(r[0].length), r = r[0].replace(/^ {4}/gm, ""), this.tokens.push({
            type: "code",
            text: this.options.pedantic ? r : r.replace(/\n+$/, "")
        }); else if (r = this.rules.fences.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "code",
            lang: r[2],
            text: r[3] || ""
        }); else if (r = this.rules.heading.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "heading",
            depth: r[1].length,
            text: r[2]
        }); else if (t && (r = this.rules.nptable.exec(e))) {
            for (e = e.substring(r[0].length), l = {
                type: "table",
                header: r[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: r[3].replace(/\n$/, "").split("\n")
            }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null;
            for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].split(/ *\| */);
            this.tokens.push(l)
        } else if (r = this.rules.lheading.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === r[2] ? 1 : 2,
            text: r[1]
        }); else if (r = this.rules.hr.exec(e)) e = e.substring(r[0].length), this.tokens.push({type: "hr"}); else if (r = this.rules.blockquote.exec(e)) e = e.substring(r[0].length), this.tokens.push({type: "blockquote_start"}), r = r[0].replace(/^ *> ?/gm, ""), this.token(r, t, !0), this.tokens.push({type: "blockquote_end"}); else if (r = this.rules.list.exec(e)) {
            for (e = e.substring(r[0].length), o = r[2], this.tokens.push({
                type: "list_start",
                ordered: o.length > 1
            }), r = r[0].match(this.rules.item), i = !1, d = r.length, u = 0; u < d; u++) l = r[u], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ""), ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && u !== d - 1 && (a = h.bullet.exec(r[u + 1])[0], o === a || o.length > 1 && a.length > 1 || (e = r.slice(u + 1).join("\n") + e, u = d - 1)), s = i || /\n\n(?!\s*$)/.test(l), u !== d - 1 && (i = "\n" === l.charAt(l.length - 1), s || (s = i)), this.tokens.push({type: s ? "loose_item_start" : "list_item_start"}), this.token(l, !1, n), this.tokens.push({type: "list_item_end"});
            this.tokens.push({type: "list_end"})
        } else if (r = this.rules.html.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: this.options.sanitize ? "paragraph" : "html",
            pre: !this.options.sanitizer && ("pre" === r[1] || "script" === r[1] || "style" === r[1]),
            text: r[0]
        }); else if (!n && t && (r = this.rules.def.exec(e))) e = e.substring(r[0].length), this.tokens.links[r[1].toLowerCase()] = {
            href: r[2],
            title: r[3]
        }; else if (t && (r = this.rules.table.exec(e))) {
            for (e = e.substring(r[0].length), l = {
                type: "table",
                header: r[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: r[3].replace(/(?: *\| *)?\n$/, "").split("\n")
            }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null;
            for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
            this.tokens.push(l)
        } else if (t && (r = this.rules.paragraph.exec(e))) e = e.substring(r[0].length), this.tokens.push({
            type: "paragraph",
            text: "\n" === r[1].charAt(r[1].length - 1) ? r[1].slice(0, -1) : r[1]
        }); else if (r = this.rules.text.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "text",
            text: r[0]
        }); else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
        return this.tokens
    };
    var u = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: a,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: a,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };
    u._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, u._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, u.link = o(u.link)("inside", u._inside)("href", u._href)(), u.reflink = o(u.reflink)("inside", u._inside)(), u.normal = l({}, u), u.pedantic = l({}, u.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    }), u.gfm = l({}, u.normal, {
        escape: o(u.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: o(u.text)("]|", "~]|")("|", "|https?://|")()
    }), u.breaks = l({}, u.gfm, {
        br: o(u.br)("{2,}", "*")(),
        text: o(u.gfm.text)("{2,}", "*")()
    }), t.rules = u, t.output = function (e, n, i) {
        var s = new t(n, i);
        return s.output(e)
    }, t.prototype.output = function (e) {
        for (var t, n, i, r, o = ""; e;) if (r = this.rules.escape.exec(e)) e = e.substring(r[0].length), o += r[1]; else if (r = this.rules.autolink.exec(e)) e = e.substring(r[0].length), "@" === r[2] ? (n = ":" === r[1].charAt(6) ? this.mangle(r[1].substring(7)) : this.mangle(r[1]), i = this.mangle("mailto:") + n) : (n = s(r[1]), i = n), o += this.renderer.link(i, null, n); else if (this.inLink || !(r = this.rules.url.exec(e))) {
            if (r = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(r[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(r[0]) && (this.inLink = !1), e = e.substring(r[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : s(r[0]) : r[0]; else if (r = this.rules.link.exec(e)) e = e.substring(r[0].length), this.inLink = !0, o += this.outputLink(r, {
                href: r[2],
                title: r[3]
            }), this.inLink = !1; else if ((r = this.rules.reflink.exec(e)) || (r = this.rules.nolink.exec(e))) {
                if (e = e.substring(r[0].length), t = (r[2] || r[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
                    o += r[0].charAt(0), e = r[0].substring(1) + e;
                    continue
                }
                this.inLink = !0, o += this.outputLink(r, t), this.inLink = !1
            } else if (r = this.rules.strong.exec(e)) e = e.substring(r[0].length), o += this.renderer.strong(this.output(r[2] || r[1])); else if (r = this.rules.em.exec(e)) e = e.substring(r[0].length), o += this.renderer.em(this.output(r[2] || r[1])); else if (r = this.rules.code.exec(e)) e = e.substring(r[0].length), o += this.renderer.codespan(s(r[2], !0)); else if (r = this.rules.br.exec(e)) e = e.substring(r[0].length), o += this.renderer.br(); else if (r = this.rules.del.exec(e)) e = e.substring(r[0].length), o += this.renderer.del(this.output(r[1])); else if (r = this.rules.text.exec(e)) e = e.substring(r[0].length), o += this.renderer.text(s(this.smartypants(r[0]))); else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        } else e = e.substring(r[0].length), n = s(r[1]), i = n, o += this.renderer.link(i, null, n);
        return o
    }, t.prototype.outputLink = function (e, t) {
        var n = s(t.href), i = t.title ? s(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(n, i, this.output(e[1])) : this.renderer.image(n, i, s(e[1]))
    }, t.prototype.smartypants = function (e) {
        return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
    }, t.prototype.mangle = function (e) {
        if (!this.options.mangle) return e;
        for (var t, n = "", i = e.length, s = 0; s < i; s++) t = e.charCodeAt(s), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        return n
    }, n.prototype.code = function (e, t, n) {
        if (this.options.highlight) {
            var i = this.options.highlight(e, t);
            null != i && i !== e && (n = !0, e = i)
        }
        return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (n ? e : s(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "\n</code></pre>"
    }, n.prototype.blockquote = function (e) {
        return "<blockquote>\n" + e + "</blockquote>\n"
    }, n.prototype.html = function (e) {
        return e
    }, n.prototype.heading = function (e, t, n) {
        return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
    }, n.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    }, n.prototype.list = function (e, t) {
        var n = t ? "ol" : "ul";
        return "<" + n + ">\n" + e + "</" + n + ">\n"
    }, n.prototype.listitem = function (e) {
        return "<li>" + e + "</li>\n"
    }, n.prototype.paragraph = function (e) {
        return "<p>" + e + "</p>\n"
    }, n.prototype.table = function (e, t) {
        return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
    }, n.prototype.tablerow = function (e) {
        return "<tr>\n" + e + "</tr>\n"
    }, n.prototype.tablecell = function (e, t) {
        var n = t.header ? "th" : "td", i = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";
        return i + e + "</" + n + ">\n"
    }, n.prototype.strong = function (e) {
        return "<strong>" + e + "</strong>"
    }, n.prototype.em = function (e) {
        return "<em>" + e + "</em>"
    }, n.prototype.codespan = function (e) {
        return "<code>" + e + "</code>"
    }, n.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>";
    }, n.prototype.del = function (e) {
        return "<del>" + e + "</del>"
    }, n.prototype.link = function (e, t, n) {
        if (this.options.sanitize) {
            try {
                var i = decodeURIComponent(r(e)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (s) {
                return ""
            }
            if (0 === i.indexOf("javascript:") || 0 === i.indexOf("vbscript:")) return ""
        }
        var o = '<a href="' + e + '"';
        return t && (o += ' title="' + t + '"'), o += ">" + n + "</a>"
    }, n.prototype.image = function (e, t, n) {
        var i = '<img src="' + e + '" alt="' + n + '"';
        return t && (i += ' title="' + t + '"'), i += this.options.xhtml ? "/>" : ">"
    }, n.prototype.text = function (e) {
        return e
    }, i.parse = function (e, t, n) {
        var s = new i(t, n);
        return s.parse(e)
    }, i.prototype.parse = function (e) {
        this.inline = new t(e.links, this.options, this.renderer), this.tokens = e.reverse();
        for (var n = ""; this.next();) n += this.tok();
        return n
    }, i.prototype.next = function () {
        return this.token = this.tokens.pop()
    }, i.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0
    }, i.prototype.parseText = function () {
        for (var e = this.token.text; "text" === this.peek().type;) e += "\n" + this.next().text;
        return this.inline.output(e)
    }, i.prototype.tok = function () {
        switch (this.token.type) {
            case"space":
                return "";
            case"hr":
                return this.renderer.hr();
            case"heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
            case"code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            case"table":
                var e, t, n, i, s, r = "", o = "";
                for (n = "", e = 0; e < this.token.header.length; e++) i = {
                    header: !0,
                    align: this.token.align[e]
                }, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                    header: !0,
                    align: this.token.align[e]
                });
                for (r += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                    for (t = this.token.cells[e], n = "", s = 0; s < t.length; s++) n += this.renderer.tablecell(this.inline.output(t[s]), {
                        header: !1,
                        align: this.token.align[s]
                    });
                    o += this.renderer.tablerow(n)
                }
                return this.renderer.table(r, o);
            case"blockquote_start":
                for (var o = ""; "blockquote_end" !== this.next().type;) o += this.tok();
                return this.renderer.blockquote(o);
            case"list_start":
                for (var o = "", a = this.token.ordered; "list_end" !== this.next().type;) o += this.tok();
                return this.renderer.list(o, a);
            case"list_item_start":
                for (var o = ""; "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(o);
            case"loose_item_start":
                for (var o = ""; "list_item_end" !== this.next().type;) o += this.tok();
                return this.renderer.listitem(o);
            case"html":
                var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                return this.renderer.html(l);
            case"paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));
            case"text":
                return this.renderer.paragraph(this.parseText())
        }
    }, a.exec = a, c.options = c.setOptions = function (e) {
        return l(c.defaults, e), c
    }, c.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: null,
        mangle: !0,
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new n,
        xhtml: !1
    }, c.Parser = i, c.parser = i.parse, c.Renderer = n, c.Lexer = e, c.lexer = e.lex, c.InlineLexer = t, c.inlineLexer = t.output, c.parse = c, "undefined" != typeof module && "object" == typeof exports ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
        return c
    }) : this.marked = c
}.call(function () {
    return this || ("undefined" != typeof window ? window : global)
}()), function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.io = t() : e.io = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var s = n[i] = {exports: {}, id: i, loaded: !1};
            return e[i].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        "use strict";

        function i(e, t) {
            "object" === ("undefined" == typeof e ? "undefined" : r(e)) && (t = e, e = void 0), t = t || {};
            var n, i = o(e), a = i.source, u = i.id, d = i.path, f = h[u] && d in h[u].nsps,
                p = t.forceNew || t["force new connection"] || !1 === t.multiplex || f;
            return p ? (c("ignoring socket cache for %s", a), n = l(a, t)) : (h[u] || (c("new io instance for %s", a), h[u] = l(a, t)), n = h[u]), i.query && !t.query ? t.query = i.query : t && "object" === r(t.query) && (t.query = s(t.query)), n.socket(i.path, t)
        }

        function s(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }

        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(1), a = n(7), l = n(17), c = n(3)("socket.io-client");
        e.exports = t = i;
        var h = t.managers = {};
        t.protocol = a.protocol, t.connect = i, t.Manager = n(17), t.Socket = n(44)
    }, function (e, t, n) {
        (function (t) {
            "use strict";

            function i(e, n) {
                var i = e;
                n = n || t.location, null == e && (e = n.protocol + "//" + n.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (r("protocol-less url %s", e), e = "undefined" != typeof n ? n.protocol + "//" + e : "https://" + e), r("parse %s", e), i = s(e)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
                var o = i.host.indexOf(":") !== -1, a = o ? "[" + i.host + "]" : i.host;
                return i.id = i.protocol + "://" + a + ":" + i.port, i.href = i.protocol + "://" + a + (n && n.port === i.port ? "" : ":" + i.port), i
            }

            var s = n(2), r = n(3)("socket.io-client:url");
            e.exports = i
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        e.exports = function (e) {
            var t = e, s = e.indexOf("["), r = e.indexOf("]");
            s != -1 && r != -1 && (e = e.substring(0, s) + e.substring(s, r).replace(/:/g, ";") + e.substring(r, e.length));
            for (var o = n.exec(e || ""), a = {}, l = 14; l--;) a[i[l]] = o[l] || "";
            return s != -1 && r != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
        }
    }, function (e, t, n) {
        (function (i) {
            function s() {
                return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }

            function r() {
                var e = arguments, n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return e;
                var i = "color: " + this.color;
                e = [e[0], i, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
                var s = 0, r = 0;
                return e[0].replace(/%[a-z%]/g, function (e) {
                    "%%" !== e && (s++, "%c" === e && (r = s))
                }), e.splice(r, 0, i), e
            }

            function o() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function a(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (n) {
                }
            }

            function l() {
                try {
                    return t.storage.debug
                } catch (e) {
                }
                if ("undefined" != typeof i && "env" in i) return i.env.DEBUG
            }

            function c() {
                try {
                    return window.localStorage
                } catch (e) {
                }
            }

            t = e.exports = n(5), t.log = o, t.formatArgs = r, t.save = a, t.load = l, t.useColors = s, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }, t.enable(l())
        }).call(t, n(4))
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (h === setTimeout) return setTimeout(e, 0);
            if ((h === n || !h) && setTimeout) return h = setTimeout, setTimeout(e, 0);
            try {
                return h(e, 0)
            } catch (t) {
                try {
                    return h.call(null, e, 0)
                } catch (t) {
                    return h.call(this, e, 0)
                }
            }
        }

        function r(e) {
            if (u === clearTimeout) return clearTimeout(e);
            if ((u === i || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
            try {
                return u(e)
            } catch (t) {
                try {
                    return u.call(null, e)
                } catch (t) {
                    return u.call(this, e)
                }
            }
        }

        function o() {
            g && f && (g = !1, f.length ? p = f.concat(p) : m = -1, p.length && a())
        }

        function a() {
            if (!g) {
                var e = s(o);
                g = !0;
                for (var t = p.length; t;) {
                    for (f = p, p = []; ++m < t;) f && f[m].run();
                    m = -1, t = p.length
                }
                f = null, g = !1, r(e)
            }
        }

        function l(e, t) {
            this.fun = e, this.array = t
        }

        function c() {
        }

        var h, u, d = e.exports = {};
        !function () {
            try {
                h = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                h = n
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                u = i
            }
        }();
        var f, p = [], g = !1, m = -1;
        d.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new l(e, t)), 1 !== p.length || g || s(a)
        }, l.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        function i() {
            return t.colors[h++ % t.colors.length]
        }

        function s(e) {
            function n() {
            }

            function s() {
                var e = s, n = +new Date, r = n - (c || n);
                e.diff = r, e.prev = c, e.curr = n, c = n, null == e.useColors && (e.useColors = t.useColors()), null == e.color && e.useColors && (e.color = i());
                for (var o = new Array(arguments.length), a = 0; a < o.length; a++) o[a] = arguments[a];
                o[0] = t.coerce(o[0]), "string" != typeof o[0] && (o = ["%o"].concat(o));
                var l = 0;
                o[0] = o[0].replace(/%([a-z%])/g, function (n, i) {
                    if ("%%" === n) return n;
                    l++;
                    var s = t.formatters[i];
                    if ("function" == typeof s) {
                        var r = o[l];
                        n = s.call(e, r), o.splice(l, 1), l--
                    }
                    return n
                }), o = t.formatArgs.apply(e, o);
                var h = s.log || t.log || console.log.bind(console);
                h.apply(e, o)
            }

            n.enabled = !1, s.enabled = !0;
            var r = t.enabled(e) ? s : n;
            return r.namespace = e, r
        }

        function r(e) {
            t.save(e);
            for (var n = (e || "").split(/[\s,]+/), i = n.length, s = 0; s < i; s++) n[s] && (e = n[s].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function o() {
            t.enable("")
        }

        function a(e) {
            var n, i;
            for (n = 0, i = t.skips.length; n < i; n++) if (t.skips[n].test(e)) return !1;
            for (n = 0, i = t.names.length; n < i; n++) if (t.names[n].test(e)) return !0;
            return !1
        }

        function l(e) {
            return e instanceof Error ? e.stack || e.message : e
        }

        t = e.exports = s.debug = s, t.coerce = l, t.disable = o, t.enable = r, t.enabled = a, t.humanize = n(6), t.names = [], t.skips = [], t.formatters = {};
        var c, h = 0
    }, function (e, t) {
        function n(e) {
            if (e = String(e), !(e.length > 1e4)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]), i = (t[2] || "ms").toLowerCase();
                    switch (i) {
                        case"years":
                        case"year":
                        case"yrs":
                        case"yr":
                        case"y":
                            return n * h;
                        case"days":
                        case"day":
                        case"d":
                            return n * c;
                        case"hours":
                        case"hour":
                        case"hrs":
                        case"hr":
                        case"h":
                            return n * l;
                        case"minutes":
                        case"minute":
                        case"mins":
                        case"min":
                        case"m":
                            return n * a;
                        case"seconds":
                        case"second":
                        case"secs":
                        case"sec":
                        case"s":
                            return n * o;
                        case"milliseconds":
                        case"millisecond":
                        case"msecs":
                        case"msec":
                        case"ms":
                            return n;
                        default:
                            return
                    }
                }
            }
        }

        function i(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= l ? Math.round(e / l) + "h" : e >= a ? Math.round(e / a) + "m" : e >= o ? Math.round(e / o) + "s" : e + "ms"
        }

        function s(e) {
            return r(e, c, "day") || r(e, l, "hour") || r(e, a, "minute") || r(e, o, "second") || e + " ms"
        }

        function r(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }

        var o = 1e3, a = 60 * o, l = 60 * a, c = 24 * l, h = 365.25 * c;
        e.exports = function (e, t) {
            t = t || {};
            var r = typeof e;
            if ("string" === r && e.length > 0) return n(e);
            if ("number" === r && isNaN(e) === !1) return t["long"] ? s(e) : i(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }, function (e, t, n) {
        function i() {
        }

        function s(e) {
            var n = "", i = !1;
            return n += e.type, t.BINARY_EVENT != e.type && t.BINARY_ACK != e.type || (n += e.attachments, n += "-"), e.nsp && "/" != e.nsp && (i = !0, n += e.nsp), null != e.id && (i && (n += ",", i = !1), n += e.id), null != e.data && (i && (n += ","), n += d.stringify(e.data)), u("encoded %j as %s", e, n), n
        }

        function r(e, t) {
            function n(e) {
                var n = p.deconstructPacket(e), i = s(n.packet), r = n.buffers;
                r.unshift(i), t(r)
            }

            p.removeBlobs(e, n)
        }

        function o() {
            this.reconstructor = null
        }

        function a(e) {
            var n = {}, i = 0;
            if (n.type = Number(e.charAt(0)), null == t.types[n.type]) return h();
            if (t.BINARY_EVENT == n.type || t.BINARY_ACK == n.type) {
                for (var s = ""; "-" != e.charAt(++i) && (s += e.charAt(i), i != e.length);) ;
                if (s != Number(s) || "-" != e.charAt(i)) throw new Error("Illegal attachments");
                n.attachments = Number(s)
            }
            if ("/" == e.charAt(i + 1)) for (n.nsp = ""; ++i;) {
                var r = e.charAt(i);
                if ("," == r) break;
                if (n.nsp += r, i == e.length) break
            } else n.nsp = "/";
            var o = e.charAt(i + 1);
            if ("" !== o && Number(o) == o) {
                for (n.id = ""; ++i;) {
                    var r = e.charAt(i);
                    if (null == r || Number(r) != r) {
                        --i;
                        break
                    }
                    if (n.id += e.charAt(i), i == e.length) break
                }
                n.id = Number(n.id)
            }
            return e.charAt(++i) && (n = l(n, e.substr(i))), u("decoded %s as %j", e, n), n
        }

        function l(e, t) {
            try {
                e.data = d.parse(t)
            } catch (n) {
                return h()
            }
            return e
        }

        function c(e) {
            this.reconPack = e, this.buffers = []
        }

        function h(e) {
            return {type: t.ERROR, data: "parser error"}
        }

        var u = n(8)("socket.io-parser"), d = n(11), f = n(13), p = n(14), g = n(16);
        t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = i, t.Decoder = o, i.prototype.encode = function (e, n) {
            if (u("encoding packet %j", e), t.BINARY_EVENT == e.type || t.BINARY_ACK == e.type) r(e, n); else {
                var i = s(e);
                n([i])
            }
        }, f(o.prototype), o.prototype.add = function (e) {
            var n;
            if ("string" == typeof e) n = a(e), t.BINARY_EVENT == n.type || t.BINARY_ACK == n.type ? (this.reconstructor = new c(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n); else {
                if (!g(e) && !e.base64) throw new Error("Unknown type: " + e);
                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, this.emit("decoded", n))
            }
        }, o.prototype.destroy = function () {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }, c.prototype.takeBinaryData = function (e) {
            if (this.buffers.push(e), this.buffers.length == this.reconPack.attachments) {
                var t = p.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), t
            }
            return null
        }, c.prototype.finishedReconstruction = function () {
            this.reconPack = null, this.buffers = []
        }
    }, function (e, t, n) {
        function i() {
            return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }

        function s() {
            var e = arguments, n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return e;
            var i = "color: " + this.color;
            e = [e[0], i, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
            var s = 0, r = 0;
            return e[0].replace(/%[a-z%]/g, function (e) {
                "%%" !== e && (s++, "%c" === e && (r = s))
            }), e.splice(r, 0, i), e
        }

        function r() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function o(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (n) {
            }
        }

        function a() {
            var e;
            try {
                e = t.storage.debug
            } catch (n) {
            }
            return e
        }

        function l() {
            try {
                return window.localStorage
            } catch (e) {
            }
        }

        t = e.exports = n(9), t.log = r, t.formatArgs = s, t.save = o, t.load = a, t.useColors = i, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : l(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
            return JSON.stringify(e)
        }, t.enable(a())
    }, function (e, t, n) {
        function i() {
            return t.colors[h++ % t.colors.length]
        }

        function s(e) {
            function n() {
            }

            function s() {
                var e = s, n = +new Date, r = n - (c || n);
                e.diff = r, e.prev = c, e.curr = n, c = n, null == e.useColors && (e.useColors = t.useColors()), null == e.color && e.useColors && (e.color = i());
                var o = Array.prototype.slice.call(arguments);
                o[0] = t.coerce(o[0]), "string" != typeof o[0] && (o = ["%o"].concat(o));
                var a = 0;
                o[0] = o[0].replace(/%([a-z%])/g, function (n, i) {
                    if ("%%" === n) return n;
                    a++;
                    var s = t.formatters[i];
                    if ("function" == typeof s) {
                        var r = o[a];
                        n = s.call(e, r), o.splice(a, 1), a--
                    }
                    return n
                }), "function" == typeof t.formatArgs && (o = t.formatArgs.apply(e, o));
                var l = s.log || t.log || console.log.bind(console);
                l.apply(e, o)
            }

            n.enabled = !1, s.enabled = !0;
            var r = t.enabled(e) ? s : n;
            return r.namespace = e, r
        }

        function r(e) {
            t.save(e);
            for (var n = (e || "").split(/[\s,]+/), i = n.length, s = 0; s < i; s++) n[s] && (e = n[s].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function o() {
            t.enable("")
        }

        function a(e) {
            var n, i;
            for (n = 0, i = t.skips.length; n < i; n++) if (t.skips[n].test(e)) return !1;
            for (n = 0, i = t.names.length; n < i; n++) if (t.names[n].test(e)) return !0;
            return !1
        }

        function l(e) {
            return e instanceof Error ? e.stack || e.message : e
        }

        t = e.exports = s, t.coerce = l, t.disable = o, t.enable = r, t.enabled = a, t.humanize = n(10), t.names = [], t.skips = [], t.formatters = {};
        var c, h = 0
    }, function (e, t) {
        function n(e) {
            if (e = "" + e, !(e.length > 1e4)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]), i = (t[2] || "ms").toLowerCase();
                    switch (i) {
                        case"years":
                        case"year":
                        case"yrs":
                        case"yr":
                        case"y":
                            return n * h;
                        case"days":
                        case"day":
                        case"d":
                            return n * c;
                        case"hours":
                        case"hour":
                        case"hrs":
                        case"hr":
                        case"h":
                            return n * l;
                        case"minutes":
                        case"minute":
                        case"mins":
                        case"min":
                        case"m":
                            return n * a;
                        case"seconds":
                        case"second":
                        case"secs":
                        case"sec":
                        case"s":
                            return n * o;
                        case"milliseconds":
                        case"millisecond":
                        case"msecs":
                        case"msec":
                        case"ms":
                            return n
                    }
                }
            }
        }

        function i(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= l ? Math.round(e / l) + "h" : e >= a ? Math.round(e / a) + "m" : e >= o ? Math.round(e / o) + "s" : e + "ms"
        }

        function s(e) {
            return r(e, c, "day") || r(e, l, "hour") || r(e, a, "minute") || r(e, o, "second") || e + " ms"
        }

        function r(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }

        var o = 1e3, a = 60 * o, l = 60 * a, c = 24 * l, h = 365.25 * c;
        e.exports = function (e, t) {
            return t = t || {}, "string" == typeof e ? n(e) : t["long"] ? s(e) : i(e)
        }
    }, function (e, t, n) {
        (function (e, n) {
            var i = !1;
            (function () {
                function s(e, t) {
                    function n(e) {
                        if (n[e] !== m) return n[e];
                        var s;
                        if ("bug-string-char-index" == e) s = "a" != "a"[0]; else if ("json" == e) s = n("json-stringify") && n("json-parse"); else {
                            var o, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == e) {
                                var l = t.stringify, h = "function" == typeof l && A;
                                if (h) {
                                    (o = function () {
                                        return 1
                                    }).toJSON = o;
                                    try {
                                        h = "0" === l(0) && "0" === l(new i) && '""' == l(new r) && l(v) === m && l(m) === m && l() === m && "1" === l(o) && "[1]" == l([o]) && "[null]" == l([m]) && "null" == l(null) && "[null,null,null]" == l([m, v, null]) && l({a: [o, !0, !1, null, "\0\b\n\f\r\t"]}) == a && "1" === l(null, o) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new c((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == l(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new c((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == l(new c((-1)))
                                    } catch (u) {
                                        h = !1
                                    }
                                }
                                s = h
                            }
                            if ("json-parse" == e) {
                                var d = t.parse;
                                if ("function" == typeof d) try {
                                    if (0 === d("0") && !d(!1)) {
                                        o = d(a);
                                        var f = 5 == o.a.length && 1 === o.a[0];
                                        if (f) {
                                            try {
                                                f = !d('"\t"')
                                            } catch (u) {
                                            }
                                            if (f) try {
                                                f = 1 !== d("01")
                                            } catch (u) {
                                            }
                                            if (f) try {
                                                f = 1 !== d("1.")
                                            } catch (u) {
                                            }
                                        }
                                    }
                                } catch (u) {
                                    f = !1
                                }
                                s = f
                            }
                        }
                        return n[e] = !!s
                    }

                    e || (e = l.Object()), t || (t = l.Object());
                    var i = e.Number || l.Number, r = e.String || l.String, a = e.Object || l.Object,
                        c = e.Date || l.Date, h = e.SyntaxError || l.SyntaxError, u = e.TypeError || l.TypeError,
                        d = e.Math || l.Math, f = e.JSON || l.JSON;
                    "object" == typeof f && f && (t.stringify = f.stringify, t.parse = f.parse);
                    var p, g, m, C = a.prototype, v = C.toString, A = new c((-0xc782b5b800cec));
                    try {
                        A = A.getUTCFullYear() == -109252 && 0 === A.getUTCMonth() && 1 === A.getUTCDate() && 10 == A.getUTCHours() && 37 == A.getUTCMinutes() && 6 == A.getUTCSeconds() && 708 == A.getUTCMilliseconds()
                    } catch (y) {
                    }
                    if (!n("json")) {
                        var E = "[object Function]", w = "[object Date]", b = "[object Number]", F = "[object String]",
                            _ = "[object Array]", S = "[object Boolean]", x = n("bug-string-char-index");
                        if (!A) var D = d.floor, L = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            k = function (e, t) {
                                return L[t] + 365 * (e - 1970) + D((e - 1969 + (t = +(t > 1))) / 4) - D((e - 1901 + t) / 100) + D((e - 1601 + t) / 400)
                            };
                        if ((p = C.hasOwnProperty) || (p = function (e) {
                            var t, n = {};
                            return (n.__proto__ = null, n.__proto__ = {toString: 1}, n).toString != v ? p = function (e) {
                                var t = this.__proto__, n = e in (this.__proto__ = null, this);
                                return this.__proto__ = t, n
                            } : (t = n.constructor, p = function (e) {
                                var n = (this.constructor || t).prototype;
                                return e in this && !(e in n && this[e] === n[e])
                            }), n = null, p.call(this, e)
                        }), g = function (e, t) {
                            var n, i, s, r = 0;
                            (n = function () {
                                this.valueOf = 0
                            }).prototype.valueOf = 0, i = new n;
                            for (s in i) p.call(i, s) && r++;
                            return n = i = null, r ? g = 2 == r ? function (e, t) {
                                var n, i = {}, s = v.call(e) == E;
                                for (n in e) s && "prototype" == n || p.call(i, n) || !(i[n] = 1) || !p.call(e, n) || t(n)
                            } : function (e, t) {
                                var n, i, s = v.call(e) == E;
                                for (n in e) s && "prototype" == n || !p.call(e, n) || (i = "constructor" === n) || t(n);
                                (i || p.call(e, n = "constructor")) && t(n)
                            } : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], g = function (e, t) {
                                var n, s, r = v.call(e) == E,
                                    a = !r && "function" != typeof e.constructor && o[typeof e.hasOwnProperty] && e.hasOwnProperty || p;
                                for (n in e) r && "prototype" == n || !a.call(e, n) || t(n);
                                for (s = i.length; n = i[--s]; a.call(e, n) && t(n)) ;
                            }), g(e, t)
                        }, !n("json-stringify")) {
                            var B = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                                $ = "000000", T = function (e, t) {
                                    return ($ + (t || 0)).slice(-e)
                                }, R = "\\u00", M = function (e) {
                                    for (var t = '"', n = 0, i = e.length, s = !x || i > 10, r = s && (x ? e.split("") : e); n < i; n++) {
                                        var o = e.charCodeAt(n);
                                        switch (o) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                t += B[o];
                                                break;
                                            default:
                                                if (o < 32) {
                                                    t += R + T(2, o.toString(16));
                                                    break
                                                }
                                                t += s ? r[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                }, I = function (e, t, n, i, s, r, o) {
                                    var a, l, c, h, d, f, C, A, y, E, x, L, B, $, R, O;
                                    try {
                                        a = t[e]
                                    } catch (N) {
                                    }
                                    if ("object" == typeof a && a) if (l = v.call(a), l != w || p.call(a, "toJSON")) "function" == typeof a.toJSON && (l != b && l != F && l != _ || p.call(a, "toJSON")) && (a = a.toJSON(e)); else if (a > -1 / 0 && a < 1 / 0) {
                                        if (k) {
                                            for (d = D(a / 864e5), c = D(d / 365.2425) + 1970 - 1; k(c + 1, 0) <= d; c++) ;
                                            for (h = D((d - k(c, 0)) / 30.42); k(c, h + 1) <= d; h++) ;
                                            d = 1 + d - k(c, h), f = (a % 864e5 + 864e5) % 864e5, C = D(f / 36e5) % 24, A = D(f / 6e4) % 60, y = D(f / 1e3) % 60, E = f % 1e3
                                        } else c = a.getUTCFullYear(), h = a.getUTCMonth(), d = a.getUTCDate(), C = a.getUTCHours(), A = a.getUTCMinutes(), y = a.getUTCSeconds(), E = a.getUTCMilliseconds();
                                        a = (c <= 0 || c >= 1e4 ? (c < 0 ? "-" : "+") + T(6, c < 0 ? -c : c) : T(4, c)) + "-" + T(2, h + 1) + "-" + T(2, d) + "T" + T(2, C) + ":" + T(2, A) + ":" + T(2, y) + "." + T(3, E) + "Z"
                                    } else a = null;
                                    if (n && (a = n.call(t, e, a)), null === a) return "null";
                                    if (l = v.call(a), l == S) return "" + a;
                                    if (l == b) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                    if (l == F) return M("" + a);
                                    if ("object" == typeof a) {
                                        for ($ = o.length; $--;) if (o[$] === a) throw u();
                                        if (o.push(a), x = [], R = r, r += s, l == _) {
                                            for (B = 0, $ = a.length; B < $; B++) L = I(B, a, n, i, s, r, o), x.push(L === m ? "null" : L);
                                            O = x.length ? s ? "[\n" + r + x.join(",\n" + r) + "\n" + R + "]" : "[" + x.join(",") + "]" : "[]"
                                        } else g(i || a, function (e) {
                                            var t = I(e, a, n, i, s, r, o);
                                            t !== m && x.push(M(e) + ":" + (s ? " " : "") + t)
                                        }), O = x.length ? s ? "{\n" + r + x.join(",\n" + r) + "\n" + R + "}" : "{" + x.join(",") + "}" : "{}";
                                        return o.pop(), O
                                    }
                                };
                            t.stringify = function (e, t, n) {
                                var i, s, r, a;
                                if (o[typeof t] && t) if ((a = v.call(t)) == E) s = t; else if (a == _) {
                                    r = {};
                                    for (var l, c = 0, h = t.length; c < h; l = t[c++], a = v.call(l), (a == F || a == b) && (r[l] = 1)) ;
                                }
                                if (n) if ((a = v.call(n)) == b) {
                                    if ((n -= n % 1) > 0) for (i = "", n > 10 && (n = 10); i.length < n; i += " ") ;
                                } else a == F && (i = n.length <= 10 ? n : n.slice(0, 10));
                                return I("", (l = {}, l[""] = e, l), s, r, i, "", [])
                            }
                        }
                        if (!n("json-parse")) {
                            var O, N, P = r.fromCharCode,
                                H = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"},
                                W = function () {
                                    throw O = N = null, h()
                                }, U = function () {
                                    for (var e, t, n, i, s, r = N, o = r.length; O < o;) switch (s = r.charCodeAt(O)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            O++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = x ? r.charAt(O) : r[O], O++, e;
                                        case 34:
                                            for (e = "@", O++; O < o;) if (s = r.charCodeAt(O), s < 32) W(); else if (92 == s) switch (s = r.charCodeAt(++O)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += H[s], O++;
                                                    break;
                                                case 117:
                                                    for (t = ++O, n = O + 4; O < n; O++) s = r.charCodeAt(O), s >= 48 && s <= 57 || s >= 97 && s <= 102 || s >= 65 && s <= 70 || W();
                                                    e += P("0x" + r.slice(t, O));
                                                    break;
                                                default:
                                                    W()
                                            } else {
                                                if (34 == s) break;
                                                for (s = r.charCodeAt(O), t = O; s >= 32 && 92 != s && 34 != s;) s = r.charCodeAt(++O);
                                                e += r.slice(t, O)
                                            }
                                            if (34 == r.charCodeAt(O)) return O++, e;
                                            W();
                                        default:
                                            if (t = O, 45 == s && (i = !0, s = r.charCodeAt(++O)), s >= 48 && s <= 57) {
                                                for (48 == s && (s = r.charCodeAt(O + 1), s >= 48 && s <= 57) && W(), i = !1; O < o && (s = r.charCodeAt(O), s >= 48 && s <= 57); O++) ;
                                                if (46 == r.charCodeAt(O)) {
                                                    for (n = ++O; n < o && (s = r.charCodeAt(n), s >= 48 && s <= 57); n++) ;
                                                    n == O && W(), O = n
                                                }
                                                if (s = r.charCodeAt(O), 101 == s || 69 == s) {
                                                    for (s = r.charCodeAt(++O), 43 != s && 45 != s || O++, n = O; n < o && (s = r.charCodeAt(n), s >= 48 && s <= 57); n++) ;
                                                    n == O && W(), O = n
                                                }
                                                return +r.slice(t, O)
                                            }
                                            if (i && W(), "true" == r.slice(O, O + 4)) return O += 4, !0;
                                            if ("false" == r.slice(O, O + 5)) return O += 5, !1;
                                            if ("null" == r.slice(O, O + 4)) return O += 4, null;
                                            W()
                                    }
                                    return "$"
                                }, j = function (e) {
                                    var t, n;
                                    if ("$" == e && W(), "string" == typeof e) {
                                        if ("@" == (x ? e.charAt(0) : e[0])) return e.slice(1);
                                        if ("[" == e) {
                                            for (t = []; e = U(), "]" != e; n || (n = !0)) n && ("," == e ? (e = U(), "]" == e && W()) : W()), "," == e && W(), t.push(j(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {}; e = U(), "}" != e; n || (n = !0)) n && ("," == e ? (e = U(), "}" == e && W()) : W()), "," != e && "string" == typeof e && "@" == (x ? e.charAt(0) : e[0]) && ":" == U() || W(), t[e.slice(1)] = j(U());
                                            return t
                                        }
                                        W()
                                    }
                                    return e
                                }, z = function (e, t, n) {
                                    var i = V(e, t, n);
                                    i === m ? delete e[t] : e[t] = i
                                }, V = function (e, t, n) {
                                    var i, s = e[t];
                                    if ("object" == typeof s && s) if (v.call(s) == _) for (i = s.length; i--;) z(s, i, n); else g(s, function (e) {
                                        z(s, e, n)
                                    });
                                    return n.call(e, t, s)
                                };
                            t.parse = function (e, t) {
                                var n, i;
                                return O = 0, N = "" + e, n = j(U()), "$" != U() && W(), O = N = null, t && v.call(t) == E ? V((i = {}, i[""] = n, i), "", t) : n
                            }
                        }
                    }
                    return t.runInContext = s, t
                }

                var r = "function" == typeof i && i.amd, o = {"function": !0, object: !0},
                    a = o[typeof t] && t && !t.nodeType && t, l = o[typeof window] && window || this,
                    c = a && o[typeof e] && e && !e.nodeType && "object" == typeof n && n;
                if (!c || c.global !== c && c.window !== c && c.self !== c || (l = c), a && !r) s(l, a); else {
                    var h = l.JSON, u = l.JSON3, d = !1, f = s(l, l.JSON3 = {
                        noConflict: function () {
                            return d || (d = !0, l.JSON = h, l.JSON3 = u, h = u = null), f
                        }
                    });
                    l.JSON = {parse: f.parse, stringify: f.stringify}
                }
                r && i(function () {
                    return f
                })
            }).call(this)
        }).call(t, n(12)(e), function () {
            return this
        }())
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function (e, t) {
        function n(e) {
            if (e) return i(e)
        }

        function i(e) {
            for (var t in n.prototype) e[t] = n.prototype[t];
            return e
        }

        e.exports = n, n.prototype.on = n.prototype.addEventListener = function (e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
        }, n.prototype.once = function (e, t) {
            function n() {
                i.off(e, n), t.apply(this, arguments)
            }

            var i = this;
            return this._callbacks = this._callbacks || {}, n.fn = t, this.on(e, n), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks[e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks[e], this;
            for (var i, s = 0; s < n.length; s++) if (i = n[s], i === t || i.fn === t) {
                n.splice(s, 1);
                break
            }
            return this
        }, n.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), n = this._callbacks[e];
            if (n) {
                n = n.slice(0);
                for (var i = 0, s = n.length; i < s; ++i) n[i].apply(this, t)
            }
            return this
        }, n.prototype.listeners = function (e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
        }, n.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length
        }
    }, function (e, t, n) {
        (function (e) {
            var i = n(15), s = n(16);
            t.deconstructPacket = function (e) {
                function t(e) {
                    if (!e) return e;
                    if (s(e)) {
                        var r = {_placeholder: !0, num: n.length};
                        return n.push(e), r
                    }
                    if (i(e)) {
                        for (var o = new Array(e.length), a = 0; a < e.length; a++) o[a] = t(e[a]);
                        return o
                    }
                    if ("object" == typeof e && !(e instanceof Date)) {
                        var o = {};
                        for (var l in e) o[l] = t(e[l]);
                        return o
                    }
                    return e
                }

                var n = [], r = e.data, o = e;
                return o.data = t(r), o.attachments = n.length, {packet: o, buffers: n}
            }, t.reconstructPacket = function (e, t) {
                function n(e) {
                    if (e && e._placeholder) {
                        var s = t[e.num];
                        return s
                    }
                    if (i(e)) {
                        for (var r = 0; r < e.length; r++) e[r] = n(e[r]);
                        return e
                    }
                    if (e && "object" == typeof e) {
                        for (var o in e) e[o] = n(e[o]);
                        return e
                    }
                    return e
                }

                return e.data = n(e.data), e.attachments = void 0, e
            }, t.removeBlobs = function (t, n) {
                function r(t, l, c) {
                    if (!t) return t;
                    if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
                        o++;
                        var h = new FileReader;
                        h.onload = function () {
                            c ? c[l] = this.result : a = this.result, --o || n(a)
                        }, h.readAsArrayBuffer(t)
                    } else if (i(t)) for (var u = 0; u < t.length; u++) r(t[u], u, t); else if (t && "object" == typeof t && !s(t)) for (var d in t) r(t[d], d, t)
                }

                var o = 0, a = t;
                r(a), o || n(a)
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        e.exports = Array.isArray || function (e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
    }, function (e, t) {
        (function (t) {
            function n(e) {
                return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
            }

            e.exports = n
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            return this instanceof i ? (e && "object" === ("undefined" == typeof e ? "undefined" : s(e)) && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new f({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new l.Encoder, this.decoder = new l.Decoder, this.autoConnect = t.autoConnect !== !1, void (this.autoConnect && this.open())) : new i(e, t)
        }

        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, r = n(18), o = n(44), a = n(35), l = n(7), c = n(46), h = n(47), u = n(3)("socket.io-client:manager"),
            d = n(42), f = n(48), p = Object.prototype.hasOwnProperty;
        e.exports = i, i.prototype.emitAll = function () {
            this.emit.apply(this, arguments);
            for (var e in this.nsps) p.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
        }, i.prototype.updateSocketIds = function () {
            for (var e in this.nsps) p.call(this.nsps, e) && (this.nsps[e].id = this.engine.id)
        }, a(i.prototype), i.prototype.reconnection = function (e) {
            return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
        }, i.prototype.reconnectionAttempts = function (e) {
            return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
        }, i.prototype.reconnectionDelay = function (e) {
            return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
        }, i.prototype.randomizationFactor = function (e) {
            return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
        }, i.prototype.reconnectionDelayMax = function (e) {
            return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
        }, i.prototype.timeout = function (e) {
            return arguments.length ? (this._timeout = e, this) : this._timeout
        }, i.prototype.maybeReconnectOnOpen = function () {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }, i.prototype.open = i.prototype.connect = function (e, t) {
            if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
            u("opening %s", this.uri), this.engine = r(this.uri, this.opts);
            var n = this.engine, i = this;
            this.readyState = "opening", this.skipReconnect = !1;
            var s = c(n, "open", function () {
                i.onopen(), e && e()
            }), o = c(n, "error", function (t) {
                if (u("connect_error"), i.cleanup(), i.readyState = "closed", i.emitAll("connect_error", t), e) {
                    var n = new Error("Connection error");
                    n.data = t, e(n)
                } else i.maybeReconnectOnOpen()
            });
            if (!1 !== this._timeout) {
                var a = this._timeout;
                u("connect attempt will timeout after %d", a);
                var l = setTimeout(function () {
                    u("connect attempt timed out after %d", a), s.destroy(), n.close(), n.emit("error", "timeout"), i.emitAll("connect_timeout", a)
                }, a);
                this.subs.push({
                    destroy: function () {
                        clearTimeout(l)
                    }
                })
            }
            return this.subs.push(s), this.subs.push(o), this
        }, i.prototype.onopen = function () {
            u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
            var e = this.engine;
            this.subs.push(c(e, "data", h(this, "ondata"))),
                this.subs.push(c(e, "ping", h(this, "onping"))), this.subs.push(c(e, "pong", h(this, "onpong"))), this.subs.push(c(e, "error", h(this, "onerror"))), this.subs.push(c(e, "close", h(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", h(this, "ondecoded")))
        }, i.prototype.onping = function () {
            this.lastPing = new Date, this.emitAll("ping")
        }, i.prototype.onpong = function () {
            this.emitAll("pong", new Date - this.lastPing)
        }, i.prototype.ondata = function (e) {
            this.decoder.add(e)
        }, i.prototype.ondecoded = function (e) {
            this.emit("packet", e)
        }, i.prototype.onerror = function (e) {
            u("error", e), this.emitAll("error", e)
        }, i.prototype.socket = function (e, t) {
            function n() {
                ~d(s.connecting, i) || s.connecting.push(i)
            }

            var i = this.nsps[e];
            if (!i) {
                i = new o(this, e, t), this.nsps[e] = i;
                var s = this;
                i.on("connecting", n), i.on("connect", function () {
                    i.id = s.engine.id
                }), this.autoConnect && n()
            }
            return i
        }, i.prototype.destroy = function (e) {
            var t = d(this.connecting, e);
            ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
        }, i.prototype.packet = function (e) {
            u("writing packet %j", e);
            var t = this;
            e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function (n) {
                for (var i = 0; i < n.length; i++) t.engine.write(n[i], e.options);
                t.encoding = !1, t.processPacketQueue()
            }))
        }, i.prototype.processPacketQueue = function () {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var e = this.packetBuffer.shift();
                this.packet(e)
            }
        }, i.prototype.cleanup = function () {
            u("cleanup");
            for (var e = this.subs.length, t = 0; t < e; t++) {
                var n = this.subs.shift();
                n.destroy()
            }
            this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
        }, i.prototype.close = i.prototype.disconnect = function () {
            u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
        }, i.prototype.onclose = function (e) {
            u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
        }, i.prototype.reconnect = function () {
            if (this.reconnecting || this.skipReconnect) return this;
            var e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
                var t = this.backoff.duration();
                u("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
                var n = setTimeout(function () {
                    e.skipReconnect || (u("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function (t) {
                        t ? (u("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (u("reconnect success"), e.onreconnect())
                    }))
                }, t);
                this.subs.push({
                    destroy: function () {
                        clearTimeout(n)
                    }
                })
            }
        }, i.prototype.onreconnect = function () {
            var e = this.backoff.attempts;
            this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
        }
    }, function (e, t, n) {
        e.exports = n(19)
    }, function (e, t, n) {
        e.exports = n(20), e.exports.parser = n(27)
    }, function (e, t, n) {
        (function (t) {
            function i(e, n) {
                if (!(this instanceof i)) return new i(e, n);
                n = n || {}, e && "object" == typeof e && (n = e, e = null), e ? (e = h(e), n.hostname = e.host, n.secure = "https" === e.protocol || "wss" === e.protocol, n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = h(n.host).host), this.secure = null != n.secure ? n.secure : t.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (t.location ? location.hostname : "localhost"), this.port = n.port || (t.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = d.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized ? null : n.rejectUnauthorized, this.forceNode = !!n.forceNode;
                var s = "object" == typeof t && t;
                s.global === s && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
            }

            function s(e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }

            var r = n(21), o = n(35), a = n(3)("engine.io-client:socket"), l = n(42), c = n(27), h = n(2), u = n(43),
                d = n(36);
            e.exports = i, i.priorWebsocketSuccess = !1, o(i.prototype), i.protocol = c.protocol, i.Socket = i, i.Transport = n(26), i.transports = n(21), i.parser = n(27), i.prototype.createTransport = function (e) {
                a('creating transport "%s"', e);
                var t = s(this.query);
                t.EIO = c.protocol, t.transport = e, this.id && (t.sid = this.id);
                var n = new r[e]({
                    agent: this.agent,
                    hostname: this.hostname,
                    port: this.port,
                    secure: this.secure,
                    path: this.path,
                    query: t,
                    forceJSONP: this.forceJSONP,
                    jsonp: this.jsonp,
                    forceBase64: this.forceBase64,
                    enablesXDR: this.enablesXDR,
                    timestampRequests: this.timestampRequests,
                    timestampParam: this.timestampParam,
                    policyPort: this.policyPort,
                    socket: this,
                    pfx: this.pfx,
                    key: this.key,
                    passphrase: this.passphrase,
                    cert: this.cert,
                    ca: this.ca,
                    ciphers: this.ciphers,
                    rejectUnauthorized: this.rejectUnauthorized,
                    perMessageDeflate: this.perMessageDeflate,
                    extraHeaders: this.extraHeaders,
                    forceNode: this.forceNode,
                    localAddress: this.localAddress
                });
                return n
            }, i.prototype.open = function () {
                var e;
                if (this.rememberUpgrade && i.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket"; else {
                    if (0 === this.transports.length) {
                        var t = this;
                        return void setTimeout(function () {
                            t.emit("error", "No transports available")
                        }, 0)
                    }
                    e = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    e = this.createTransport(e)
                } catch (n) {
                    return this.transports.shift(), void this.open()
                }
                e.open(), this.setTransport(e)
            }, i.prototype.setTransport = function (e) {
                a("setting transport %s", e.name);
                var t = this;
                this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function () {
                    t.onDrain()
                }).on("packet", function (e) {
                    t.onPacket(e)
                }).on("error", function (e) {
                    t.onError(e)
                }).on("close", function () {
                    t.onClose("transport close")
                })
            }, i.prototype.probe = function (e) {
                function t() {
                    if (d.onlyBinaryUpgrades) {
                        var t = !this.supportsBinary && d.transport.supportsBinary;
                        u = u || t
                    }
                    u || (a('probe transport "%s" opened', e), h.send([{
                        type: "ping",
                        data: "probe"
                    }]), h.once("packet", function (t) {
                        if (!u) if ("pong" === t.type && "probe" === t.data) {
                            if (a('probe transport "%s" pong', e), d.upgrading = !0, d.emit("upgrading", h), !h) return;
                            i.priorWebsocketSuccess = "websocket" === h.name, a('pausing current transport "%s"', d.transport.name), d.transport.pause(function () {
                                u || "closed" !== d.readyState && (a("changing transport and sending upgrade packet"), c(), d.setTransport(h), h.send([{type: "upgrade"}]), d.emit("upgrade", h), h = null, d.upgrading = !1, d.flush())
                            })
                        } else {
                            a('probe transport "%s" failed', e);
                            var n = new Error("probe error");
                            n.transport = h.name, d.emit("upgradeError", n)
                        }
                    }))
                }

                function n() {
                    u || (u = !0, c(), h.close(), h = null)
                }

                function s(t) {
                    var i = new Error("probe error: " + t);
                    i.transport = h.name, n(), a('probe transport "%s" failed because of error: %s', e, t), d.emit("upgradeError", i)
                }

                function r() {
                    s("transport closed")
                }

                function o() {
                    s("socket closed")
                }

                function l(e) {
                    h && e.name !== h.name && (a('"%s" works - aborting "%s"', e.name, h.name), n())
                }

                function c() {
                    h.removeListener("open", t), h.removeListener("error", s), h.removeListener("close", r), d.removeListener("close", o), d.removeListener("upgrading", l)
                }

                a('probing transport "%s"', e);
                var h = this.createTransport(e, {probe: 1}), u = !1, d = this;
                i.priorWebsocketSuccess = !1, h.once("open", t), h.once("error", s), h.once("close", r), this.once("close", o), this.once("upgrading", l), h.open()
            }, i.prototype.onOpen = function () {
                if (a("socket open"), this.readyState = "open", i.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                    a("starting upgrade probes");
                    for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                }
            }, i.prototype.onPacket = function (e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                    case"open":
                        this.onHandshake(u(e.data));
                        break;
                    case"pong":
                        this.setPing(), this.emit("pong");
                        break;
                    case"error":
                        var t = new Error("server error");
                        t.code = e.data, this.onError(t);
                        break;
                    case"message":
                        this.emit("data", e.data), this.emit("message", e.data)
                } else a('packet received with socket readyState "%s"', this.readyState)
            }, i.prototype.onHandshake = function (e) {
                this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            }, i.prototype.onHeartbeat = function (e) {
                clearTimeout(this.pingTimeoutTimer);
                var t = this;
                t.pingTimeoutTimer = setTimeout(function () {
                    "closed" !== t.readyState && t.onClose("ping timeout")
                }, e || t.pingInterval + t.pingTimeout)
            }, i.prototype.setPing = function () {
                var e = this;
                clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function () {
                    a("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
                }, e.pingInterval)
            }, i.prototype.ping = function () {
                var e = this;
                this.sendPacket("ping", function () {
                    e.emit("ping")
                })
            }, i.prototype.onDrain = function () {
                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }, i.prototype.flush = function () {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
            }, i.prototype.write = i.prototype.send = function (e, t, n) {
                return this.sendPacket("message", e, t, n), this
            }, i.prototype.sendPacket = function (e, t, n, i) {
                if ("function" == typeof t && (i = t, t = void 0), "function" == typeof n && (i = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                    n = n || {}, n.compress = !1 !== n.compress;
                    var s = {type: e, data: t, options: n};
                    this.emit("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush()
                }
            }, i.prototype.close = function () {
                function e() {
                    i.onClose("forced close"), a("socket closing - telling transport to close"), i.transport.close()
                }

                function t() {
                    i.removeListener("upgrade", t), i.removeListener("upgradeError", t), e()
                }

                function n() {
                    i.once("upgrade", t), i.once("upgradeError", t)
                }

                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var i = this;
                    this.writeBuffer.length ? this.once("drain", function () {
                        this.upgrading ? n() : e()
                    }) : this.upgrading ? n() : e()
                }
                return this
            }, i.prototype.onError = function (e) {
                a("socket error %j", e), i.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
            }, i.prototype.onClose = function (e, t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    a('socket close with reason: "%s"', e);
                    var n = this;
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), n.writeBuffer = [], n.prevBufferLen = 0
                }
            }, i.prototype.filterUpgrades = function (e) {
                for (var t = [], n = 0, i = e.length; n < i; n++) ~l(this.transports, e[n]) && t.push(e[n]);
                return t
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        (function (e) {
            function i(t) {
                var n, i = !1, a = !1, l = !1 !== t.jsonp;
                if (e.location) {
                    var c = "https:" === location.protocol, h = location.port;
                    h || (h = c ? 443 : 80), i = t.hostname !== location.hostname || h !== t.port, a = t.secure !== c
                }
                if (t.xdomain = i, t.xscheme = a, n = new s(t), "open" in n && !t.forceJSONP) return new r(t);
                if (!l) throw new Error("JSONP disabled");
                return new o(t)
            }

            var s = n(22), r = n(24), o = n(39), a = n(40);
            t.polling = i, t.websocket = a
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        (function (t) {
            var i = n(23);
            e.exports = function (e) {
                var n = e.xdomain, s = e.xscheme, r = e.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!n || i)) return new XMLHttpRequest
                } catch (o) {
                }
                try {
                    if ("undefined" != typeof XDomainRequest && !s && r) return new XDomainRequest
                } catch (o) {
                }
                if (!n) try {
                    return new (t[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (o) {
                }
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        try {
            e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
        } catch (n) {
            e.exports = !1
        }
    }, function (e, t, n) {
        (function (t) {
            function i() {
            }

            function s(e) {
                if (l.call(this, e), this.requestTimeout = e.requestTimeout, t.location) {
                    var n = "https:" === location.protocol, i = location.port;
                    i || (i = n ? 443 : 80), this.xd = e.hostname !== t.location.hostname || i !== e.port, this.xs = e.secure !== n
                } else this.extraHeaders = e.extraHeaders
            }

            function r(e) {
                this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
            }

            function o() {
                for (var e in r.requests) r.requests.hasOwnProperty(e) && r.requests[e].abort()
            }

            var a = n(22), l = n(25), c = n(35), h = n(37), u = n(3)("engine.io-client:polling-xhr");
            e.exports = s, e.exports.Request = r, h(s, l), s.prototype.supportsBinary = !0, s.prototype.request = function (e) {
                return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new r(e)
            }, s.prototype.doWrite = function (e, t) {
                var n = "string" != typeof e && void 0 !== e, i = this.request({method: "POST", data: e, isBinary: n}),
                    s = this;
                i.on("success", t), i.on("error", function (e) {
                    s.onError("xhr post error", e)
                }), this.sendXhr = i
            }, s.prototype.doPoll = function () {
                u("xhr poll");
                var e = this.request(), t = this;
                e.on("data", function (e) {
                    t.onData(e)
                }), e.on("error", function (e) {
                    t.onError("xhr poll error", e)
                }), this.pollXhr = e
            }, c(r.prototype), r.prototype.create = function () {
                var e = {agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR};
                e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                var n = this.xhr = new a(e), i = this;
                try {
                    u("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders) {
                            n.setDisableHeaderCheck(!0);
                            for (var s in this.extraHeaders) this.extraHeaders.hasOwnProperty(s) && n.setRequestHeader(s, this.extraHeaders[s])
                        }
                    } catch (o) {
                    }
                    if (this.supportsBinary && (n.responseType = "arraybuffer"), "POST" === this.method) try {
                        this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch (o) {
                    }
                    try {
                        n.setRequestHeader("Accept", "*/*")
                    } catch (o) {
                    }
                    "withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function () {
                        i.onLoad()
                    }, n.onerror = function () {
                        i.onError(n.responseText)
                    }) : n.onreadystatechange = function () {
                        4 === n.readyState && (200 === n.status || 1223 === n.status ? i.onLoad() : setTimeout(function () {
                            i.onError(n.status)
                        }, 0))
                    }, u("xhr data %s", this.data), n.send(this.data)
                } catch (o) {
                    return void setTimeout(function () {
                        i.onError(o)
                    }, 0)
                }
                t.document && (this.index = r.requestsCount++, r.requests[this.index] = this)
            }, r.prototype.onSuccess = function () {
                this.emit("success"), this.cleanup()
            }, r.prototype.onData = function (e) {
                this.emit("data", e), this.onSuccess()
            }, r.prototype.onError = function (e) {
                this.emit("error", e), this.cleanup(!0)
            }, r.prototype.cleanup = function (e) {
                if ("undefined" != typeof this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = i : this.xhr.onreadystatechange = i, e) try {
                        this.xhr.abort()
                    } catch (n) {
                    }
                    t.document && delete r.requests[this.index], this.xhr = null
                }
            }, r.prototype.onLoad = function () {
                var e;
                try {
                    var t;
                    try {
                        t = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                    } catch (n) {
                    }
                    if ("application/octet-stream" === t) e = this.xhr.response || this.xhr.responseText; else if (this.supportsBinary) try {
                        e = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                    } catch (n) {
                        for (var i = new Uint8Array(this.xhr.response), s = [], r = 0, o = i.length; r < o; r++) s.push(i[r]);
                        e = String.fromCharCode.apply(null, s)
                    } else e = this.xhr.responseText
                } catch (n) {
                    this.onError(n)
                }
                null != e && this.onData(e)
            }, r.prototype.hasXDR = function () {
                return "undefined" != typeof t.XDomainRequest && !this.xs && this.enablesXDR
            }, r.prototype.abort = function () {
                this.cleanup()
            }, r.requestsCount = 0, r.requests = {}, t.document && (t.attachEvent ? t.attachEvent("onunload", o) : t.addEventListener && t.addEventListener("beforeunload", o, !1))
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        function i(e) {
            var t = e && e.forceBase64;
            h && !t || (this.supportsBinary = !1), s.call(this, e)
        }

        var s = n(26), r = n(36), o = n(27), a = n(37), l = n(38), c = n(3)("engine.io-client:polling");
        e.exports = i;
        var h = function () {
            var e = n(22), t = new e({xdomain: !1});
            return null != t.responseType
        }();
        a(i, s), i.prototype.name = "polling", i.prototype.doOpen = function () {
            this.poll()
        }, i.prototype.pause = function (e) {
            function t() {
                c("paused"), n.readyState = "paused", e()
            }

            var n = this;
            if (this.readyState = "pausing", this.polling || !this.writable) {
                var i = 0;
                this.polling && (c("we are currently polling - waiting to pause"), i++, this.once("pollComplete", function () {
                    c("pre-pause polling complete"), --i || t()
                })), this.writable || (c("we are currently writing - waiting to pause"), i++, this.once("drain", function () {
                    c("pre-pause writing complete"), --i || t()
                }))
            } else t()
        }, i.prototype.poll = function () {
            c("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
        }, i.prototype.onData = function (e) {
            var t = this;
            c("polling got data %s", e);
            var n = function (e, n, i) {
                return "opening" === t.readyState && t.onOpen(), "close" === e.type ? (t.onClose(), !1) : void t.onPacket(e)
            };
            o.decodePayload(e, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
        }, i.prototype.doClose = function () {
            function e() {
                c("writing close packet"), t.write([{type: "close"}])
            }

            var t = this;
            "open" === this.readyState ? (c("transport open - closing"), e()) : (c("transport not open - deferring close"), this.once("open", e))
        }, i.prototype.write = function (e) {
            var t = this;
            this.writable = !1;
            var n = function () {
                t.writable = !0, t.emit("drain")
            };
            o.encodePayload(e, this.supportsBinary, function (e) {
                t.doWrite(e, n)
            })
        }, i.prototype.uri = function () {
            var e = this.query || {}, t = this.secure ? "https" : "http", n = "";
            !1 !== this.timestampRequests && (e[this.timestampParam] = l()), this.supportsBinary || e.sid || (e.b64 = 1), e = r.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e);
            var i = this.hostname.indexOf(":") !== -1;
            return t + "://" + (i ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
        }
    }, function (e, t, n) {
        function i(e) {
            this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
        }

        var s = n(27), r = n(35);
        e.exports = i, r(i.prototype), i.prototype.onError = function (e, t) {
            var n = new Error(e);
            return n.type = "TransportError", n.description = t, this.emit("error", n), this
        }, i.prototype.open = function () {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
        }, i.prototype.close = function () {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
        }, i.prototype.send = function (e) {
            if ("open" !== this.readyState) throw new Error("Transport not open");
            this.write(e)
        }, i.prototype.onOpen = function () {
            this.readyState = "open", this.writable = !0, this.emit("open")
        }, i.prototype.onData = function (e) {
            var t = s.decodePacket(e, this.socket.binaryType);
            this.onPacket(t)
        }, i.prototype.onPacket = function (e) {
            this.emit("packet", e)
        }, i.prototype.onClose = function () {
            this.readyState = "closed", this.emit("close")
        }
    }, function (e, t, n) {
        (function (e) {
            function i(e, n) {
                var i = "b" + t.packets[e.type] + e.data.data;
                return n(i)
            }

            function s(e, n, i) {
                if (!n) return t.encodeBase64Packet(e, i);
                var s = e.data, r = new Uint8Array(s), o = new Uint8Array(1 + s.byteLength);
                o[0] = v[e.type];
                for (var a = 0; a < r.length; a++) o[a + 1] = r[a];
                return i(o.buffer)
            }

            function r(e, n, i) {
                if (!n) return t.encodeBase64Packet(e, i);
                var s = new FileReader;
                return s.onload = function () {
                    e.data = s.result, t.encodePacket(e, n, !0, i)
                }, s.readAsArrayBuffer(e.data)
            }

            function o(e, n, i) {
                if (!n) return t.encodeBase64Packet(e, i);
                if (C) return r(e, n, i);
                var s = new Uint8Array(1);
                s[0] = v[e.type];
                var o = new E([s.buffer, e.data]);
                return i(o)
            }

            function a(e) {
                try {
                    e = p.decode(e)
                } catch (t) {
                    return !1
                }
                return e
            }

            function l(e, t, n) {
                for (var i = new Array(e.length), s = f(e.length, n), r = function (e, n, s) {
                    t(n, function (t, n) {
                        i[e] = n, s(t, i)
                    })
                }, o = 0; o < e.length; o++) r(o, e[o], s)
            }

            var c, h = n(28), u = n(29), d = n(30), f = n(31), p = n(32);
            e && e.ArrayBuffer && (c = n(33));
            var g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), C = g || m;
            t.protocol = 3;
            var v = t.packets = {open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6}, A = h(v),
                y = {type: "error", data: "parser error"}, E = n(34);
            t.encodePacket = function (t, n, r, a) {
                "function" == typeof n && (a = n, n = !1), "function" == typeof r && (a = r, r = null);
                var l = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                if (e.ArrayBuffer && l instanceof ArrayBuffer) return s(t, n, a);
                if (E && l instanceof e.Blob) return o(t, n, a);
                if (l && l.base64) return i(t, a);
                var c = v[t.type];
                return void 0 !== t.data && (c += r ? p.encode(String(t.data)) : String(t.data)), a("" + c)
            }, t.encodeBase64Packet = function (n, i) {
                var s = "b" + t.packets[n.type];
                if (E && n.data instanceof e.Blob) {
                    var r = new FileReader;
                    return r.onload = function () {
                        var e = r.result.split(",")[1];
                        i(s + e)
                    }, r.readAsDataURL(n.data)
                }
                var o;
                try {
                    o = String.fromCharCode.apply(null, new Uint8Array(n.data))
                } catch (a) {
                    for (var l = new Uint8Array(n.data), c = new Array(l.length), h = 0; h < l.length; h++) c[h] = l[h];
                    o = String.fromCharCode.apply(null, c)
                }
                return s += e.btoa(o), i(s)
            }, t.decodePacket = function (e, n, i) {
                if (void 0 === e) return y;
                if ("string" == typeof e) {
                    if ("b" == e.charAt(0)) return t.decodeBase64Packet(e.substr(1), n);
                    if (i && (e = a(e), e === !1)) return y;
                    var s = e.charAt(0);
                    return Number(s) == s && A[s] ? e.length > 1 ? {type: A[s], data: e.substring(1)} : {type: A[s]} : y
                }
                var r = new Uint8Array(e), s = r[0], o = d(e, 1);
                return E && "blob" === n && (o = new E([o])), {type: A[s], data: o}
            }, t.decodeBase64Packet = function (e, t) {
                var n = A[e.charAt(0)];
                if (!c) return {type: n, data: {base64: !0, data: e.substr(1)}};
                var i = c.decode(e.substr(1));
                return "blob" === t && E && (i = new E([i])), {type: n, data: i}
            }, t.encodePayload = function (e, n, i) {
                function s(e) {
                    return e.length + ":" + e
                }

                function r(e, i) {
                    t.encodePacket(e, !!o && n, !0, function (e) {
                        i(null, s(e))
                    })
                }

                "function" == typeof n && (i = n, n = null);
                var o = u(e);
                return n && o ? E && !C ? t.encodePayloadAsBlob(e, i) : t.encodePayloadAsArrayBuffer(e, i) : e.length ? void l(e, r, function (e, t) {
                    return i(t.join(""))
                }) : i("0:")
            }, t.decodePayload = function (e, n, i) {
                if ("string" != typeof e) return t.decodePayloadAsBinary(e, n, i);
                "function" == typeof n && (i = n, n = null);
                var s;
                if ("" == e) return i(y, 0, 1);
                for (var r, o, a = "", l = 0, c = e.length; l < c; l++) {
                    var h = e.charAt(l);
                    if (":" != h) a += h; else {
                        if ("" == a || a != (r = Number(a))) return i(y, 0, 1);
                        if (o = e.substr(l + 1, r), a != o.length) return i(y, 0, 1);
                        if (o.length) {
                            if (s = t.decodePacket(o, n, !0), y.type == s.type && y.data == s.data) return i(y, 0, 1);
                            var u = i(s, l + r, c);
                            if (!1 === u) return
                        }
                        l += r, a = ""
                    }
                }
                return "" != a ? i(y, 0, 1) : void 0
            }, t.encodePayloadAsArrayBuffer = function (e, n) {
                function i(e, n) {
                    t.encodePacket(e, !0, !0, function (e) {
                        return n(null, e)
                    })
                }

                return e.length ? void l(e, i, function (e, t) {
                    var i = t.reduce(function (e, t) {
                        var n;
                        return n = "string" == typeof t ? t.length : t.byteLength, e + n.toString().length + n + 2
                    }, 0), s = new Uint8Array(i), r = 0;
                    return t.forEach(function (e) {
                        var t = "string" == typeof e, n = e;
                        if (t) {
                            for (var i = new Uint8Array(e.length), o = 0; o < e.length; o++) i[o] = e.charCodeAt(o);
                            n = i.buffer
                        }
                        t ? s[r++] = 0 : s[r++] = 1;
                        for (var a = n.byteLength.toString(), o = 0; o < a.length; o++) s[r++] = parseInt(a[o]);
                        s[r++] = 255;
                        for (var i = new Uint8Array(n), o = 0; o < i.length; o++) s[r++] = i[o]
                    }), n(s.buffer)
                }) : n(new ArrayBuffer(0))
            }, t.encodePayloadAsBlob = function (e, n) {
                function i(e, n) {
                    t.encodePacket(e, !0, !0, function (e) {
                        var t = new Uint8Array(1);
                        if (t[0] = 1, "string" == typeof e) {
                            for (var i = new Uint8Array(e.length), s = 0; s < e.length; s++) i[s] = e.charCodeAt(s);
                            e = i.buffer, t[0] = 0
                        }
                        for (var r = e instanceof ArrayBuffer ? e.byteLength : e.size, o = r.toString(), a = new Uint8Array(o.length + 1), s = 0; s < o.length; s++) a[s] = parseInt(o[s]);
                        if (a[o.length] = 255, E) {
                            var l = new E([t.buffer, a.buffer, e]);
                            n(null, l)
                        }
                    })
                }

                l(e, i, function (e, t) {
                    return n(new E(t))
                })
            }, t.decodePayloadAsBinary = function (e, n, i) {
                "function" == typeof n && (i = n, n = null);
                for (var s = e, r = [], o = !1; s.byteLength > 0;) {
                    for (var a = new Uint8Array(s), l = 0 === a[0], c = "", h = 1; 255 != a[h]; h++) {
                        if (c.length > 310) {
                            o = !0;
                            break
                        }
                        c += a[h]
                    }
                    if (o) return i(y, 0, 1);
                    s = d(s, 2 + c.length), c = parseInt(c);
                    var u = d(s, 0, c);
                    if (l) try {
                        u = String.fromCharCode.apply(null, new Uint8Array(u))
                    } catch (f) {
                        var p = new Uint8Array(u);
                        u = "";
                        for (var h = 0; h < p.length; h++) u += String.fromCharCode(p[h])
                    }
                    r.push(u), s = d(s, c)
                }
                var g = r.length;
                r.forEach(function (e, s) {
                    i(t.decodePacket(e, n, !0), s, g)
                })
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        e.exports = Object.keys || function (e) {
            var t = [], n = Object.prototype.hasOwnProperty;
            for (var i in e) n.call(e, i) && t.push(i);
            return t
        }
    }, function (e, t, n) {
        (function (t) {
            function i(e) {
                function n(e) {
                    if (!e) return !1;
                    if (t.Buffer && t.Buffer.isBuffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer || t.Blob && e instanceof Blob || t.File && e instanceof File) return !0;
                    if (s(e)) {
                        for (var i = 0; i < e.length; i++) if (n(e[i])) return !0
                    } else if (e && "object" == typeof e) {
                        e.toJSON && "function" == typeof e.toJSON && (e = e.toJSON());
                        for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && n(e[r])) return !0
                    }
                    return !1
                }

                return n(e)
            }

            var s = n(15);
            e.exports = i
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        e.exports = function (e, t, n) {
            var i = e.byteLength;
            if (t = t || 0, n = n || i, e.slice) return e.slice(t, n);
            if (t < 0 && (t += i), n < 0 && (n += i), n > i && (n = i), t >= i || t >= n || 0 === i) return new ArrayBuffer(0);
            for (var s = new Uint8Array(e), r = new Uint8Array(n - t), o = t, a = 0; o < n; o++, a++) r[a] = s[o];
            return r.buffer
        }
    }, function (e, t) {
        function n(e, t, n) {
            function s(e, i) {
                if (s.count <= 0) throw new Error("after called too many times");
                --s.count, e ? (r = !0, t(e), t = n) : 0 !== s.count || r || t(null, i)
            }

            var r = !1;
            return n = n || i, s.count = e, 0 === e ? t() : s
        }

        function i() {
        }

        e.exports = n
    }, function (e, t, n) {
        var i;
        (function (e, s) {
            !function (r) {
                function o(e) {
                    for (var t, n, i = [], s = 0, r = e.length; s < r;) t = e.charCodeAt(s++), t >= 55296 && t <= 56319 && s < r ? (n = e.charCodeAt(s++), 56320 == (64512 & n) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), s--)) : i.push(t);
                    return i
                }

                function a(e) {
                    for (var t, n = e.length, i = -1, s = ""; ++i < n;) t = e[i], t > 65535 && (t -= 65536, s += A(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), s += A(t);
                    return s
                }

                function l(e, t) {
                    return A(e >> t & 63 | 128)
                }

                function c(e) {
                    if (0 == (4294967168 & e)) return A(e);
                    var t = "";
                    return 0 == (4294965248 & e) ? t = A(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (t = A(e >> 12 & 15 | 224), t += l(e, 6)) : 0 == (4292870144 & e) && (t = A(e >> 18 & 7 | 240), t += l(e, 12), t += l(e, 6)), t += A(63 & e | 128)
                }

                function h(e) {
                    for (var t, n = o(e), i = n.length, s = -1, r = ""; ++s < i;) t = n[s], r += c(t);
                    return r
                }

                function u() {
                    if (v >= C) throw Error("Invalid byte index");
                    var e = 255 & m[v];
                    if (v++, 128 == (192 & e)) return 63 & e;
                    throw Error("Invalid continuation byte")
                }

                function d() {
                    var e, t, n, i, s;
                    if (v > C) throw Error("Invalid byte index");
                    if (v == C) return !1;
                    if (e = 255 & m[v], v++, 0 == (128 & e)) return e;
                    if (192 == (224 & e)) {
                        var t = u();
                        if (s = (31 & e) << 6 | t, s >= 128) return s;
                        throw Error("Invalid continuation byte")
                    }
                    if (224 == (240 & e)) {
                        if (t = u(), n = u(), s = (15 & e) << 12 | t << 6 | n, s >= 2048) return s;
                        throw Error("Invalid continuation byte")
                    }
                    if (240 == (248 & e) && (t = u(), n = u(), i = u(), s = (15 & e) << 18 | t << 12 | n << 6 | i, s >= 65536 && s <= 1114111)) return s;
                    throw Error("Invalid WTF-8 detected")
                }

                function f(e) {
                    m = o(e), C = m.length, v = 0;
                    for (var t, n = []; (t = d()) !== !1;) n.push(t);
                    return a(n)
                }

                var p = "object" == typeof t && t,
                    g = ("object" == typeof e && e && e.exports == p && e, "object" == typeof s && s);
                g.global !== g && g.window !== g || (r = g);
                var m, C, v, A = String.fromCharCode, y = {version: "1.0.0", encode: h, decode: f};
                i = function () {
                    return y
                }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
            }(this)
        }).call(t, n(12)(e), function () {
            return this
        }())
    }, function (e, t) {
        !function () {
            "use strict";
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), i = 0; i < e.length; i++) n[e.charCodeAt(i)] = i;
            t.encode = function (t) {
                var n, i = new Uint8Array(t), s = i.length, r = "";
                for (n = 0; n < s; n += 3) r += e[i[n] >> 2], r += e[(3 & i[n]) << 4 | i[n + 1] >> 4], r += e[(15 & i[n + 1]) << 2 | i[n + 2] >> 6], r += e[63 & i[n + 2]];
                return s % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : s % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r
            }, t.decode = function (e) {
                var t, i, s, r, o, a = .75 * e.length, l = e.length, c = 0;
                "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                var h = new ArrayBuffer(a), u = new Uint8Array(h);
                for (t = 0; t < l; t += 4) i = n[e.charCodeAt(t)], s = n[e.charCodeAt(t + 1)], r = n[e.charCodeAt(t + 2)], o = n[e.charCodeAt(t + 3)], u[c++] = i << 2 | s >> 4, u[c++] = (15 & s) << 4 | r >> 2, u[c++] = (3 & r) << 6 | 63 & o;
                return h
            }
        }()
    }, function (e, t) {
        (function (t) {
            function n(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.buffer instanceof ArrayBuffer) {
                        var i = n.buffer;
                        if (n.byteLength !== i.byteLength) {
                            var s = new Uint8Array(n.byteLength);
                            s.set(new Uint8Array(i, n.byteOffset, n.byteLength)), i = s.buffer
                        }
                        e[t] = i
                    }
                }
            }

            function i(e, t) {
                t = t || {};
                var i = new r;
                n(e);
                for (var s = 0; s < e.length; s++) i.append(e[s]);
                return t.type ? i.getBlob(t.type) : i.getBlob()
            }

            function s(e, t) {
                return n(e), new Blob(e, t || {})
            }

            var r = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder, o = function () {
                try {
                    var e = new Blob(["hi"]);
                    return 2 === e.size
                } catch (t) {
                    return !1
                }
            }(), a = o && function () {
                try {
                    var e = new Blob([new Uint8Array([1, 2])]);
                    return 2 === e.size
                } catch (t) {
                    return !1
                }
            }(), l = r && r.prototype.append && r.prototype.getBlob;
            e.exports = function () {
                return o ? a ? t.Blob : s : l ? i : void 0
            }()
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        function i(e) {
            if (e) return s(e)
        }

        function s(e) {
            for (var t in i.prototype) e[t] = i.prototype[t];
            return e
        }

        e.exports = i, i.prototype.on = i.prototype.addEventListener = function (e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
        }, i.prototype.once = function (e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments)
            }

            return n.fn = t, this.on(e, n), this
        }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function (e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var i, s = 0; s < n.length; s++) if (i = n[s], i === t || i.fn === t) {
                n.splice(s, 1);
                break
            }
            return this
        }, i.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), n = this._callbacks["$" + e];
            if (n) {
                n = n.slice(0);
                for (var i = 0, s = n.length; i < s; ++i) n[i].apply(this, t);
            }
            return this
        }, i.prototype.listeners = function (e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
        }, i.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length
        }
    }, function (e, t) {
        t.encode = function (e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t
        }, t.decode = function (e) {
            for (var t = {}, n = e.split("&"), i = 0, s = n.length; i < s; i++) {
                var r = n[i].split("=");
                t[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
            }
            return t
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            var n = function () {
            };
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function (e, t) {
        "use strict";

        function n(e) {
            var t = "";
            do t = o[e % a] + t, e = Math.floor(e / a); while (e > 0);
            return t
        }

        function i(e) {
            var t = 0;
            for (h = 0; h < e.length; h++) t = t * a + l[e.charAt(h)];
            return t
        }

        function s() {
            var e = n(+new Date);
            return e !== r ? (c = 0, r = e) : e + "." + n(c++)
        }

        for (var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, l = {}, c = 0, h = 0; h < a; h++) l[o[h]] = h;
        s.encode = n, s.decode = i, e.exports = s
    }, function (e, t, n) {
        (function (t) {
            function i() {
            }

            function s(e) {
                r.call(this, e), this.query = this.query || {}, a || (t.___eio || (t.___eio = []), a = t.___eio), this.index = a.length;
                var n = this;
                a.push(function (e) {
                    n.onData(e)
                }), this.query.j = this.index, t.document && t.addEventListener && t.addEventListener("beforeunload", function () {
                    n.script && (n.script.onerror = i)
                }, !1)
            }

            var r = n(25), o = n(37);
            e.exports = s;
            var a, l = /\n/g, c = /\\n/g;
            o(s, r), s.prototype.supportsBinary = !1, s.prototype.doClose = function () {
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), r.prototype.doClose.call(this)
            }, s.prototype.doPoll = function () {
                var e = this, t = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function (t) {
                    e.onError("jsonp poll error", t)
                };
                var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t;
                var i = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                i && setTimeout(function () {
                    var e = document.createElement("iframe");
                    document.body.appendChild(e), document.body.removeChild(e)
                }, 100)
            }, s.prototype.doWrite = function (e, t) {
                function n() {
                    i(), t()
                }

                function i() {
                    if (s.iframe) try {
                        s.form.removeChild(s.iframe)
                    } catch (e) {
                        s.onError("jsonp polling iframe removal error", e)
                    }
                    try {
                        var t = '<iframe src="javascript:0" name="' + s.iframeId + '">';
                        r = document.createElement(t)
                    } catch (e) {
                        r = document.createElement("iframe"), r.name = s.iframeId, r.src = "javascript:0"
                    }
                    r.id = s.iframeId, s.form.appendChild(r), s.iframe = r
                }

                var s = this;
                if (!this.form) {
                    var r, o = document.createElement("form"), a = document.createElement("textarea"),
                        h = this.iframeId = "eio_iframe_" + this.index;
                    o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = h, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), a.name = "d", o.appendChild(a), document.body.appendChild(o), this.form = o, this.area = a
                }
                this.form.action = this.uri(), i(), e = e.replace(c, "\\\n"), this.area.value = e.replace(l, "\\n");
                try {
                    this.form.submit()
                } catch (u) {
                }
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                    "complete" === s.iframe.readyState && n()
                } : this.iframe.onload = n
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        (function (t) {
            function i(e) {
                var t = e && e.forceBase64;
                t && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = u && !e.forceNode, this.usingBrowserWebSocket || (f = s), r.call(this, e)
            }

            var s, r = n(26), o = n(27), a = n(36), l = n(37), c = n(38), h = n(3)("engine.io-client:websocket"),
                u = t.WebSocket || t.MozWebSocket;
            if ("undefined" == typeof window) try {
                s = n(41)
            } catch (d) {
            }
            var f = u;
            f || "undefined" != typeof window || (f = s), e.exports = i, l(i, r), i.prototype.name = "websocket", i.prototype.supportsBinary = !0, i.prototype.doOpen = function () {
                if (this.check()) {
                    var e = this.uri(), t = void 0, n = {agent: this.agent, perMessageDeflate: this.perMessageDeflate};
                    n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket ? new f(e) : new f(e, t, n)
                    } catch (i) {
                        return this.emit("error", i)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                }
            }, i.prototype.addEventListeners = function () {
                var e = this;
                this.ws.onopen = function () {
                    e.onOpen()
                }, this.ws.onclose = function () {
                    e.onClose()
                }, this.ws.onmessage = function (t) {
                    e.onData(t.data)
                }, this.ws.onerror = function (t) {
                    e.onError("websocket error", t)
                }
            }, i.prototype.write = function (e) {
                function n() {
                    i.emit("flush"), setTimeout(function () {
                        i.writable = !0, i.emit("drain")
                    }, 0)
                }

                var i = this;
                this.writable = !1;
                for (var s = e.length, r = 0, a = s; r < a; r++) !function (e) {
                    o.encodePacket(e, i.supportsBinary, function (r) {
                        if (!i.usingBrowserWebSocket) {
                            var o = {};
                            if (e.options && (o.compress = e.options.compress), i.perMessageDeflate) {
                                var a = "string" == typeof r ? t.Buffer.byteLength(r) : r.length;
                                a < i.perMessageDeflate.threshold && (o.compress = !1)
                            }
                        }
                        try {
                            i.usingBrowserWebSocket ? i.ws.send(r) : i.ws.send(r, o)
                        } catch (l) {
                            h("websocket closed before onclose event")
                        }
                        --s || n()
                    })
                }(e[r])
            }, i.prototype.onClose = function () {
                r.prototype.onClose.call(this)
            }, i.prototype.doClose = function () {
                "undefined" != typeof this.ws && this.ws.close()
            }, i.prototype.uri = function () {
                var e = this.query || {}, t = this.secure ? "wss" : "ws", n = "";
                this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = c()), this.supportsBinary || (e.b64 = 1), e = a.encode(e), e.length && (e = "?" + e);
                var i = this.hostname.indexOf(":") !== -1;
                return t + "://" + (i ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
            }, i.prototype.check = function () {
                return !(!f || "__initialize" in f && this.name === i.prototype.name)
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
    }, function (e, t) {
        var n = [].indexOf;
        e.exports = function (e, t) {
            if (n) return e.indexOf(t);
            for (var i = 0; i < e.length; ++i) if (e[i] === t) return i;
            return -1
        }
    }, function (e, t) {
        (function (t) {
            var n = /^[\],:{}\s]*$/, i = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, r = /(?:^|:|,)(?:\s*\[)+/g,
                o = /^\s+/, a = /\s+$/;
            e.exports = function (e) {
                return "string" == typeof e && e ? (e = e.replace(o, "").replace(a, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(i, "@").replace(s, "]").replace(r, "")) ? new Function("return " + e)() : void 0) : null
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        "use strict";

        function i(e, t, n) {
            this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
        }

        var s = n(7), r = n(35), o = n(45), a = n(46), l = n(47), c = n(3)("socket.io-client:socket"), h = n(29);
        e.exports = t = i;
        var u = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        }, d = r.prototype.emit;
        r(i.prototype), i.prototype.subEvents = function () {
            if (!this.subs) {
                var e = this.io;
                this.subs = [a(e, "open", l(this, "onopen")), a(e, "packet", l(this, "onpacket")), a(e, "close", l(this, "onclose"))]
            }
        }, i.prototype.open = i.prototype.connect = function () {
            return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
        }, i.prototype.send = function () {
            var e = o(arguments);
            return e.unshift("message"), this.emit.apply(this, e), this
        }, i.prototype.emit = function (e) {
            if (u.hasOwnProperty(e)) return d.apply(this, arguments), this;
            var t = o(arguments), n = s.EVENT;
            h(t) && (n = s.BINARY_EVENT);
            var i = {type: n, data: t};
            return i.options = {}, i.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), i.id = this.ids++), this.connected ? this.packet(i) : this.sendBuffer.push(i), delete this.flags, this
        }, i.prototype.packet = function (e) {
            e.nsp = this.nsp, this.io.packet(e)
        }, i.prototype.onopen = function () {
            c("transport is open - connecting"), "/" !== this.nsp && (this.query ? this.packet({
                type: s.CONNECT,
                query: this.query
            }) : this.packet({type: s.CONNECT}))
        }, i.prototype.onclose = function (e) {
            c("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
        }, i.prototype.onpacket = function (e) {
            if (e.nsp === this.nsp) switch (e.type) {
                case s.CONNECT:
                    this.onconnect();
                    break;
                case s.EVENT:
                    this.onevent(e);
                    break;
                case s.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case s.ACK:
                    this.onack(e);
                    break;
                case s.BINARY_ACK:
                    this.onack(e);
                    break;
                case s.DISCONNECT:
                    this.ondisconnect();
                    break;
                case s.ERROR:
                    this.emit("error", e.data)
            }
        }, i.prototype.onevent = function (e) {
            var t = e.data || [];
            c("emitting event %j", t), null != e.id && (c("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? d.apply(this, t) : this.receiveBuffer.push(t)
        }, i.prototype.ack = function (e) {
            var t = this, n = !1;
            return function () {
                if (!n) {
                    n = !0;
                    var i = o(arguments);
                    c("sending ack %j", i);
                    var r = h(i) ? s.BINARY_ACK : s.ACK;
                    t.packet({type: r, id: e, data: i})
                }
            }
        }, i.prototype.onack = function (e) {
            var t = this.acks[e.id];
            "function" == typeof t ? (c("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : c("bad ack %s", e.id)
        }, i.prototype.onconnect = function () {
            this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
        }, i.prototype.emitBuffered = function () {
            var e;
            for (e = 0; e < this.receiveBuffer.length; e++) d.apply(this, this.receiveBuffer[e]);
            for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
            this.sendBuffer = []
        }, i.prototype.ondisconnect = function () {
            c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
        }, i.prototype.destroy = function () {
            if (this.subs) {
                for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, i.prototype.close = i.prototype.disconnect = function () {
            return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({type: s.DISCONNECT})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }, i.prototype.compress = function (e) {
            return this.flags = this.flags || {}, this.flags.compress = e, this
        }
    }, function (e, t) {
        function n(e, t) {
            var n = [];
            t = t || 0;
            for (var i = t || 0; i < e.length; i++) n[i - t] = e[i];
            return n
        }

        e.exports = n
    }, function (e, t) {
        "use strict";

        function n(e, t, n) {
            return e.on(t, n), {
                destroy: function () {
                    e.removeListener(t, n)
                }
            }
        }

        e.exports = n
    }, function (e, t) {
        var n = [].slice;
        e.exports = function (e, t) {
            if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
            var i = n.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(n.call(arguments)))
            }
        }
    }, function (e, t) {
        function n(e) {
            e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
        }

        e.exports = n, n.prototype.duration = function () {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var t = Math.random(), n = Math.floor(t * this.jitter * e);
                e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
            }
            return 0 | Math.min(e, this.max)
        }, n.prototype.reset = function () {
            this.attempts = 0
        }, n.prototype.setMin = function (e) {
            this.ms = e
        }, n.prototype.setMax = function (e) {
            this.max = e
        }, n.prototype.setJitter = function (e) {
            this.jitter = e
        }
    }])
});