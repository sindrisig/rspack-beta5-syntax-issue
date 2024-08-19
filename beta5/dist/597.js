"use strict";
(self['webpackChunkexample_builtin_swc_loader'] = self['webpackChunkexample_builtin_swc_loader'] || []).push([["597"], {
"9038": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  refreshFeatureFlags: () => (/* binding */ refresh_feature_flags_refreshFeatureFlags),
  "default": () => (/* binding */ refresh_feature_flags)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/braze-instance.js + 12 modules
var braze_instance = __webpack_require__("5983");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/shared-lib/logger.js
var logger = __webpack_require__("9960");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/common/base-provider.js
var base_provider = __webpack_require__("5425");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/storage-manager.js
var storage_manager = __webpack_require__("3216");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/subscription-manager.js
var subscription_manager = __webpack_require__("1454");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/math.js
var math = __webpack_require__("9668");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/net.js
var net = __webpack_require__("8307");
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flag.js
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}

var feature_flag_FeatureFlag = /*#__PURE__*/ function() {
    "use strict";
    function FeatureFlag(t) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
        _class_call_check(this, FeatureFlag);
        this.id = t, this.enabled = e, this.properties = r, this.trackingString = i, this.id = t, this.enabled = e, this.properties = r, this.trackingString = i;
    }
    _create_class(FeatureFlag, [
        {
            key: "he",
            value: function he(t, e, r) {
                var i = this.properties[t];
                return null == i ? (this.ye(t), null) : e(i) ? i.value : (this.Pe(r), null);
            }
        },
        {
            key: "getStringProperty",
            value: function getStringProperty(t) {
                return this.he(t, this.be, "string");
            }
        },
        {
            key: "getNumberProperty",
            value: function getNumberProperty(t) {
                return this.he(t, this.Ie, "number");
            }
        },
        {
            key: "getBooleanProperty",
            value: function getBooleanProperty(t) {
                return this.he(t, this.de, "boolean");
            }
        },
        {
            key: "getImageProperty",
            value: function getImageProperty(t) {
                return this.he(t, this.Te, "image");
            }
        },
        {
            key: "getJsonProperty",
            value: function getJsonProperty(t) {
                return this.he(t, this.Ee, "jsonobject");
            }
        },
        {
            key: "getTimestampProperty",
            value: function getTimestampProperty(t) {
                return this.he(t, this.Ne, "datetime");
            }
        },
        {
            key: "Y",
            value: function Y() {
                var t = {};
                return t[FeatureFlag.tt.ht] = this.id, t[FeatureFlag.tt.le] = this.enabled, t[FeatureFlag.tt.pe] = this.properties, t[FeatureFlag.tt.Fe] = this.trackingString, t;
            }
        },
        {
            key: "Pe",
            value: function Pe(t) {
                logger/* default,info */.Z.info("Property is not of type ".concat(t, "."));
            }
        },
        {
            key: "ye",
            value: function ye(t) {
                logger/* default,info */.Z.info("".concat(t, " not found in feature flag properties."));
            }
        },
        {
            key: "be",
            value: function be(t) {
                return "string" === t.type && "string" == typeof t.value;
            }
        },
        {
            key: "Ie",
            value: function Ie(t) {
                return "number" === t.type && "number" == typeof t.value;
            }
        },
        {
            key: "de",
            value: function de(t) {
                return "boolean" === t.type && "boolean" == typeof t.value;
            }
        },
        {
            key: "Te",
            value: function Te(t) {
                return "image" === t.type && "string" == typeof t.value;
            }
        },
        {
            key: "Ee",
            value: function Ee(t) {
                return "jsonobject" === t.type && "object" == _type_of(t.value) && t.value.constructor == Object;
            }
        },
        {
            key: "Ne",
            value: function Ne(t) {
                return "datetime" === t.type && "number" == typeof t.value;
            }
        }
    ]);
    return FeatureFlag;
}();

feature_flag_FeatureFlag.tt = {
    ht: "id",
    le: "e",
    pe: "pr",
    Fe: "fts"
}, feature_flag_FeatureFlag.Rt = {
    ht: "id",
    le: "enabled",
    pe: "properties",
    Fe: "fts"
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flag-factory.js


function newFeatureFlagFromJson(e) {
    if (e[feature_flag_FeatureFlag.Rt.ht] && "boolean" == typeof e[feature_flag_FeatureFlag.Rt.le]) return new feature_flag_FeatureFlag(e[feature_flag_FeatureFlag.Rt.ht], e[feature_flag_FeatureFlag.Rt.le], e[feature_flag_FeatureFlag.Rt.pe], e[feature_flag_FeatureFlag.Rt.Fe]);
    logger/* default,info */.Z.info("Unable to create feature flag from ".concat(JSON.stringify(e, null, 2)));
}
function newFeatureFlagFromSerializedValue(e) {
    if (e[feature_flag_FeatureFlag.tt.ht] && "boolean" == typeof e[feature_flag_FeatureFlag.tt.le]) return new feature_flag_FeatureFlag(e[feature_flag_FeatureFlag.tt.ht], e[feature_flag_FeatureFlag.tt.le], e[feature_flag_FeatureFlag.tt.pe], e[feature_flag_FeatureFlag.tt.Fe]);
    logger/* default,info */.Z.info("Unable to deserialize feature flag from ".concat(JSON.stringify(e, null, 2)));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/request-header-utils.js
var request_header_utils = __webpack_require__("3179");
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flags-provider.js
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function feature_flags_provider_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function feature_flags_provider_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function feature_flags_provider_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) feature_flags_provider_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) feature_flags_provider_defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (feature_flags_provider_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function feature_flags_provider_type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}









var feature_flags_provider_er = /*#__PURE__*/ function(y) {
    "use strict";
    _inherits(er, y);
    var _super = _create_super(er);
    function er(t, s, i, r) {
        feature_flags_provider_class_call_check(this, er);
        var _this;
        _this = _super.call(this), _this.yt = t, _this.qt = s, _this.u = i, _this.ri = r, _this.hi = [], _this.oi = 0, _this.yt = t, _this.qt = s, _this.u = i, _this.ri = r, _this.ai = null, _this.ni = new subscription_manager/* default */.Z(), _this.li = 10, _this.ui = null, _this.fi = null, braze_instance/* default,$t */.ZP.$t(_this.ni);
        return _possible_constructor_return(_this);
    }
    feature_flags_provider_create_class(er, [
        {
            key: "Ns",
            value: function Ns(t) {
                var s;
                if ((null === (s = this.yt) || void 0 === s ? void 0 : s.ci()) && null != t && t.feature_flags) {
                    this.hi = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = t.feature_flags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var s1 = _step.value;
                            var _$t = newFeatureFlagFromJson(s1);
                            _$t && this.hi.push(_$t);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    this.oi = new Date().getTime(), this.di(), this.ni.Dt(this.hi);
                }
            }
        },
        {
            key: "mi",
            value: function mi() {
                var t = {};
                this.u && (t = this.u.j(storage_manager/* STORAGE_KEYS,C,gi */.I.C.gi));
                var s = {};
                for(var i in t){
                    var e = newFeatureFlagFromSerializedValue(t[i]);
                    e && (s[e.id] = e);
                }
                return s;
            }
        },
        {
            key: "Fi",
            value: function Fi() {
                var t;
                return (null === (t = this.u) || void 0 === t ? void 0 : t.j(storage_manager/* STORAGE_KEYS,C,vi */.I.C.vi)) || {};
            }
        },
        {
            key: "pi",
            value: function pi(t) {
                this.u && this.u.k(storage_manager/* STORAGE_KEYS,C,vi */.I.C.vi, t);
            }
        },
        {
            key: "Zs",
            value: function Zs(t) {
                return this.ni.It(t);
            }
        },
        {
            key: "refreshFeatureFlags",
            value: function refreshFeatureFlags(t, s) {
                var _this = this;
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
                var _this1 = this;
                var r = function() {
                    "function" == typeof s && s(), _this.ni.Dt(_this.hi);
                };
                if (!this.wi(i)) return !this.ai && this.yt && (this.ai = this.yt.ji(function() {
                    _this.refreshFeatureFlags(t, s);
                })), void r();
                var h = this.qt;
                if (!h) return void r();
                e && this.yi();
                var o = h.Js({}, !0), a = h.$s(o, request_header_utils/* default,Ps,bi */.Z.Ps.bi);
                var n = !1;
                h.Xs(o, function() {
                    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
                    if (!_this1.qt) return void r();
                    var l = new Date().valueOf();
                    request_header_utils/* default,_s */.Z._s(_this1.u, request_header_utils/* default,Ps,bi */.Z.Ps.bi, l), -1 !== h && a.push([
                        "X-Braze-Req-Tokens-Remaining",
                        h.toString()
                    ]), net/* default,Gs */.Z.Gs({
                        url: "".concat(_this1.qt.Hs(), "/feature_flags/sync"),
                        headers: a,
                        data: o,
                        L: function(s) {
                            if (!_this1.qt.Ks(o, s, a)) return n = !0, void r();
                            _this1.qt.Os(), _this1.Ns(s), n = !1, request_header_utils/* default,Qs */.Z.Qs(_this1.u, request_header_utils/* default,Ps,bi */.Z.Ps.bi, 1), "function" == typeof t && t();
                        },
                        error: function(t) {
                            _this1.qt.Vs(t, "retrieving feature flags"), n = !0, r();
                        },
                        Ws: function() {
                            if (e && n && !_this1.fi) {
                                request_header_utils/* default,Ys */.Z.Ys(_this1.u, request_header_utils/* default,Ps,bi */.Z.Ps.bi);
                                var e1 = _this1.ui;
                                (null == e1 || e1 < 1e3 * _this1.li) && (e1 = 1e3 * _this1.li), _this1.Ci(Math.min(3e5, (0,math/* randomInclusive */.R)(1e3 * _this1.li, 3 * e1)), t, s, i);
                            }
                        }
                    });
                }, request_header_utils/* default,Ps,bi */.Z.Ps.bi, s);
            }
        },
        {
            key: "yi",
            value: function yi() {
                null != this.fi && (clearTimeout(this.fi), this.fi = null);
            }
        },
        {
            key: "Ci",
            value: function Ci() {
                var _this = this;
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3 * this.li, s = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0, e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
                this.yi(), this.fi = window.setTimeout(function() {
                    _this.refreshFeatureFlags(s, i, e);
                }, t), this.ui = t;
            }
        },
        {
            key: "wi",
            value: function wi(t) {
                if (!this.yt) return !1;
                if (!t) {
                    var _$t = this.yt.Ri();
                    if (null == _$t) return !1;
                    var s = !1;
                    if (!isNaN(_$t)) {
                        if (-1 === _$t) return logger/* default,info */.Z.info("Feature flag refreshes not allowed"), !1;
                        s = new Date().getTime() >= (this.oi || 0) + 1e3 * _$t;
                    }
                    if (!s) return logger/* default,info */.Z.info("Feature flag refreshes were rate limited to ".concat(_$t, " seconds")), !1;
                }
                return this.yt.ci();
            }
        },
        {
            key: "Ti",
            value: function Ti() {
                var t;
                return (null === (t = this.u) || void 0 === t ? void 0 : t.j(storage_manager/* STORAGE_KEYS,C,Di */.I.C.Di)) || null;
            }
        },
        {
            key: "Ii",
            value: function Ii() {
                var t, s;
                null === (t = this.u) || void 0 === t || t.k(storage_manager/* STORAGE_KEYS,C,Di */.I.C.Di, null === (s = this.ri) || void 0 === s ? void 0 : s.Si());
            }
        },
        {
            key: "qi",
            value: function qi() {
                var t;
                var s = null === (t = this.ri) || void 0 === t ? void 0 : t.Si(), i = this.Ti();
                return null == i || s === i;
            }
        },
        {
            key: "di",
            value: function di() {
                if (!this.u) return;
                var t = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.hi[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var s = _step.value;
                        var i = s.Y();
                        t[s.id] = i;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this.u.k(storage_manager/* STORAGE_KEYS,C,gi */.I.C.gi, t), this.u.k(storage_manager/* STORAGE_KEYS,C,xi */.I.C.xi, this.oi), this.Ii();
            }
        }
    ]);
    return er;
}(base_provider/* default */.Z);


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flags-provider-factory.js


var ir = {
    t: !1,
    provider: null,
    rr: function() {
        return ir.o(), ir.provider || (ir.provider = new feature_flags_provider_er(braze_instance/* default,ir */.ZP.ir(), braze_instance/* default,nr */.ZP.nr(), braze_instance/* default,l */.ZP.l(), braze_instance/* default,zr */.ZP.zr()), braze_instance/* default,ar */.ZP.ar(ir.provider)), ir.provider;
    },
    o: function() {
        ir.t || (braze_instance/* default,g */.ZP.g(ir), ir.t = !0);
    },
    destroy: function() {
        ir.provider = null, ir.t = !1;
    }
};
/* harmony default export */ const feature_flags_provider_factory = (ir);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/FeatureFlags/refresh-feature-flags.js


function tr(r, t) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (braze_instance/* default,X */.ZP.X()) return feature_flags_provider_factory.rr().refreshFeatureFlags(r, t, a);
}
function refresh_feature_flags_refreshFeatureFlags(r, e) {
    tr(r, e);
}
/* harmony default export */ const refresh_feature_flags = (tr);


}),

}]);
//# sourceMappingURL=597.js.map