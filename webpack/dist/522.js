"use strict";
(self["webpackChunkexample_builtin_swc_loader"] = self["webpackChunkexample_builtin_swc_loader"] || []).push([[522],{

/***/ 5522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  showFeed: () => (/* binding */ showFeed)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/braze-instance.js + 12 modules
var braze_instance = __webpack_require__(3299);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/shared-lib/logger.js
var logger = __webpack_require__(1296);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/date-utils.js
var date_utils = __webpack_require__(4084);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/common/constants.js
var constants = __webpack_require__(8614);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/subscription-manager.js
var subscription_manager = __webpack_require__(5883);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/models/card.js
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




var card_Card = /*#__PURE__*/ function() {
    "use strict";
    function Card(t, i, s, h, l, n, e, r, u, E, o, T, I, a, N, c) {
        _class_call_check(this, Card);
        this.id = t, this.viewed = i, this.title = s, this.imageUrl = h, this.description = l, this.created = n, this.updated = e, this.categories = r, this.expiresAt = u, this.url = E, this.linkText = o, this.aspectRatio = T, this.extras = I, this.pinned = a, this.dismissible = N, this.clicked = c, this.id = t, this.viewed = i || !1, this.title = s || "", this.imageUrl = h, this.description = l || "", this.created = n || null, this.updated = e || null, this.categories = r || [], this.expiresAt = u || null, this.url = E, this.linkText = o, null == T ? this.aspectRatio = null : (T = parseFloat(T.toString()), this.aspectRatio = isNaN(T) ? null : T), this.extras = I || {}, this.pinned = a || !1, this.dismissible = N || !1, this.dismissed = !1, this.clicked = c || !1, this.isControl = !1, this.test = !1, this.Et = null, this.Tt = null;
    }
    _create_class(Card, [
        {
            key: "subscribeToClickedEvent",
            value: function subscribeToClickedEvent(t) {
                return this.Nt().It(t);
            }
        },
        {
            key: "subscribeToDismissedEvent",
            value: function subscribeToDismissedEvent(t) {
                return this.St().It(t);
            }
        },
        {
            key: "removeSubscription",
            value: function removeSubscription(t) {
                this.Nt().removeSubscription(t), this.St().removeSubscription(t);
            }
        },
        {
            key: "removeAllSubscriptions",
            value: function removeAllSubscriptions() {
                this.Nt().removeAllSubscriptions(), this.St().removeAllSubscriptions();
            }
        },
        {
            key: "dismissCard",
            value: function dismissCard() {
                if (!this.dismissible || this.dismissed) return;
                "function" == typeof this.logCardDismissal && this.logCardDismissal();
                var t = this.T;
                !t && this.id && (t = document.getElementById(this.id)), t && (t.style.height = t.offsetHeight + "px", t.className = t.className + " ab-hide", setTimeout(function() {
                    t && t.parentNode && (t.style.height = "0", t.style.margin = "0", setTimeout(function() {
                        t && t.parentNode && t.parentNode.removeChild(t);
                    }, Card.At));
                }, constants/* FEED_ANIMATION_DURATION */.RW));
            }
        },
        {
            key: "Nt",
            value: function Nt() {
                return null == this.Et && (this.Et = new subscription_manager/* default */.A()), this.Et;
            }
        },
        {
            key: "St",
            value: function St() {
                return null == this.Tt && (this.Tt = new subscription_manager/* default */.A()), this.Tt;
            }
        },
        {
            key: "K",
            value: function K() {
                this.viewed = !0;
            }
        },
        {
            key: "p",
            value: function p() {
                this.viewed = !0, this.clicked = !0, this.Nt().Dt();
            }
        },
        {
            key: "N",
            value: function N() {
                return !(!this.dismissible || this.dismissed) && (this.dismissed = !0, this.St().Dt(), !0);
            }
        },
        {
            key: "Ct",
            value: function Ct(t) {
                if (null == t || t[Card.Rt.ht] !== this.id) return !0;
                if (t[Card.Rt.Lt]) return !1;
                if (null != t[Card.Rt.nt] && null != this.updated && parseInt(t[Card.Rt.nt]) < (0,date_utils/* convertMsToSeconds */.UK)(this.updated.valueOf())) return !0;
                if (t[Card.Rt.et] && !this.viewed && (this.viewed = !0), t[Card.Rt.zt] && !this.clicked && (this.clicked = t[Card.Rt.zt]), null != t[Card.Rt.rt] && (this.title = t[Card.Rt.rt]), null != t[Card.Rt.ot] && (this.imageUrl = t[Card.Rt.ot]), null != t[Card.Rt.ct] && (this.description = t[Card.Rt.ct]), null != t[Card.Rt.nt]) {
                    var i = (0,date_utils/* dateFromUnixTimestamp */.Zo)(t[Card.Rt.nt]);
                    null != i && (this.updated = i);
                }
                if (null != t[Card.Rt.lt]) {
                    var i1;
                    i1 = t[Card.Rt.lt] === Card._t ? null : (0,date_utils/* dateFromUnixTimestamp */.Zo)(t[Card.Rt.lt]), this.expiresAt = i1;
                }
                if (null != t[Card.Rt.URL] && (this.url = t[Card.Rt.URL]), null != t[Card.Rt.ft] && (this.linkText = t[Card.Rt.ft]), null != t[Card.Rt.xt]) {
                    var i2 = parseFloat(t[Card.Rt.xt].toString());
                    this.aspectRatio = isNaN(i2) ? null : i2;
                }
                return null != t[Card.Rt.bt] && (this.extras = t[Card.Rt.bt]), null != t[Card.Rt.gt] && (this.pinned = t[Card.Rt.gt]), null != t[Card.Rt.jt] && (this.dismissible = t[Card.Rt.jt]), null != t[Card.Rt.kt] && (this.test = t[Card.Rt.kt]), !0;
            }
        },
        {
            key: "Y",
            value: function Y() {
                logger/* default */.A.error("Must be implemented in a subclass");
            }
        }
    ]);
    return Card;
}();

card_Card._t = -1, card_Card.Rt = {
    ht: "id",
    et: "v",
    jt: "db",
    Lt: "r",
    nt: "ca",
    gt: "p",
    lt: "ea",
    bt: "e",
    Z: "tp",
    ot: "i",
    rt: "tt",
    ct: "ds",
    URL: "u",
    ft: "dm",
    xt: "ar",
    zt: "cl",
    kt: "t"
}, card_Card.it = {
    st: "captioned_image",
    Ot: "text_announcement",
    Mt: "short_news",
    Pt: "banner_image",
    Ut: "control"
}, card_Card.tt = {
    ht: "id",
    et: "v",
    jt: "db",
    dt: "cr",
    nt: "ca",
    gt: "p",
    ut: "t",
    lt: "ea",
    bt: "e",
    Z: "tp",
    ot: "i",
    rt: "tt",
    ct: "ds",
    URL: "u",
    ft: "dm",
    xt: "ar",
    zt: "cl",
    kt: "s"
}, card_Card.Gt = {
    Xt: "ADVERTISING",
    vt: "ANNOUNCEMENTS",
    Vt: "NEWS",
    Wt: "SOCIAL"
}, card_Card.At = 400;

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/models/control-card.js
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function control_card_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function control_card_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function control_card_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) control_card_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) control_card_defineProperties(Constructor, staticProps);
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
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
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
function _type_of(obj) {
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

var ControlCard = /*#__PURE__*/ function(Card1) {
    "use strict";
    _inherits(ControlCard, Card1);
    var _super = _create_super(ControlCard);
    function ControlCard(l, t, s, i, n, r) {
        control_card_class_call_check(this, ControlCard);
        var _this;
        _this = _super.call(this, l, t, null, null, null, null, s, null, i, null, null, null, n, r), _this.isControl = !0, _this._ = "ab-control-card", _this.S = !1;
        return _possible_constructor_return(_this);
    }
    control_card_create_class(ControlCard, [
        {
            key: "Y",
            value: function Y() {
                var l = {};
                return l[card_Card.tt.Z] = card_Card.it.Ut, l[card_Card.tt.ht] = this.id, l[card_Card.tt.et] = this.viewed, l[card_Card.tt.nt] = this.updated, l[card_Card.tt.lt] = this.expiresAt, l[card_Card.tt.bt] = this.extras, l[card_Card.tt.gt] = this.pinned, l[card_Card.tt.kt] = this.test, l;
            }
        }
    ]);
    return ControlCard;
}(card_Card);


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/common/base-feed.js
function base_feed_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function base_feed_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function base_feed_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) base_feed_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) base_feed_defineProperties(Constructor, staticProps);
    return Constructor;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}


var FEED_ANIMATION_DURATION = 500;
var x = /*#__PURE__*/ function() {
    "use strict";
    function x(s, e) {
        base_feed_class_call_check(this, x);
        this.cards = s, this.lastUpdated = e, this.cards = s, this.lastUpdated = e;
    }
    base_feed_create_class(x, [
        {
            key: "getUnreadCardCount",
            value: function getUnreadCardCount() {
                var s = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var e = _step.value;
                        e.viewed || _instanceof(e, ControlCard) || s++;
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
                return s;
            }
        },
        {
            key: "dr",
            value: function dr() {
                logger/* default */.A.error("Must be implemented in a subclass");
            }
        },
        {
            key: "logCardImpressions",
            value: function logCardImpressions(s) {
                logger/* default */.A.error("Must be implemented in a subclass");
            }
        },
        {
            key: "logCardClick",
            value: function logCardClick(s) {
                logger/* default */.A.error("Must be implemented in a subclass");
            }
        },
        {
            key: "sr",
            value: function sr() {
                logger/* default */.A.error("Must be implemented in a subclass");
            }
        }
    ]);
    return x;
}();

x.ur = 6e4, x.Ah = 500, x.Co = 1e4;

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/component-utils.js
var component_utils = __webpack_require__(3001);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/dom-utils.js
var dom_utils = __webpack_require__(886);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Core/handle-braze-action.js
var handle_braze_action = __webpack_require__(7839);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/common/event-logger.js
var event_logger = __webpack_require__(564);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/models/request-result.js
var request_result = __webpack_require__(3915);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/shared-lib/event-types.js
var event_types = __webpack_require__(9966);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/storage-manager.js
var storage_manager = __webpack_require__(7493);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/card-manager.js
function card_manager_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function card_manager_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function card_manager_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) card_manager_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) card_manager_defineProperties(Constructor, staticProps);
    return Constructor;
}
function card_manager_instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}





var a = /*#__PURE__*/ function() {
    "use strict";
    function a(s) {
        card_manager_class_call_check(this, a);
        this.u = s, this.u = s;
    }
    card_manager_create_class(a, [
        {
            key: "h",
            value: function h(n, e) {
                var l = new request_result/* default */.A();
                if (n.p(), null == n.url || "" === n.url) return logger/* default */.A.info("Card ".concat(n.id, " has no url. Not logging click to Braze servers.")), l;
                if (e && n.id && this.u) {
                    var _$s = this.u.j(storage_manager/* STORAGE_KEYS */.d.C.v) || {};
                    _$s[n.id] = !0, this.u.k(storage_manager/* STORAGE_KEYS */.d.C.v, _$s);
                }
                var u = this.D([
                    n
                ]);
                if (null == u) return l;
                var c = e ? event_types/* EventTypes */.w.I : event_types/* EventTypes */.w.$;
                return event_logger/* default */.A.q(c, u);
            }
        },
        {
            key: "B",
            value: function B(n) {
                var e = new request_result/* default */.A();
                if (!n.N()) return logger/* default */.A.info("Card ".concat(n.id, " refused this dismissal. Ignoring analytics event.")), e;
                if (n.id && this.u) {
                    var _$s = this.u.j(storage_manager/* STORAGE_KEYS */.d.C.A) || {};
                    _$s[n.id] = !0, this.u.k(storage_manager/* STORAGE_KEYS */.d.C.A, _$s);
                }
                var l = this.D([
                    n
                ]);
                return null == l ? e : event_logger/* default */.A.q(event_types/* EventTypes */.w.F, l);
            }
        },
        {
            key: "G",
            value: function G(n, r) {
                var e = new request_result/* default */.A(!0), l = [], u = [];
                var c = {};
                this.u && (c = r ? this.u.j(storage_manager/* STORAGE_KEYS */.d.C.H) || {} : this.u.j(storage_manager/* STORAGE_KEYS */.d.C.J) || {});
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$s = _step.value;
                        _$s.K(), card_manager_instanceof(_$s, ControlCard) ? u.push(_$s) : l.push(_$s), _$s.id && (c[_$s.id] = !0);
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
                var h = this.D(l), _$a = this.D(u);
                if (null == h && null == _$a) return e.L = !1, e;
                if (this.u && (r ? this.u.k(storage_manager/* STORAGE_KEYS */.d.C.H, c) : this.u.k(storage_manager/* STORAGE_KEYS */.d.C.J, c)), null != h) {
                    var _$t = r ? event_types/* EventTypes */.w.M : event_types/* EventTypes */.w.O, _$n = event_logger/* default */.A.q(_$t, h);
                    e.P(_$n);
                }
                if (null != _$a && r) {
                    var _$t1 = event_logger/* default */.A.q(event_types/* EventTypes */.w.R, _$a);
                    e.P(_$t1);
                }
                return e;
            }
        },
        {
            key: "D",
            value: function D(s) {
                var t, n = null;
                for(var r = 0; r < s.length; r++)t = s[r].id, null != t && "" !== t && (n = n || {}, n.ids = n.ids || [], n.ids.push(t));
                return n;
            }
        }
    ]);
    return a;
}();


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/card-manager-factory.js


var n = {
    t: !1,
    i: null,
    m: function() {
        return n.o(), n.i || (n.i = new a(braze_instance/* default */.Ay.l())), n.i;
    },
    o: function() {
        n.t || (braze_instance/* default */.Ay.g(n), n.t = !0);
    },
    destroy: function() {
        n.i = null, n.t = !1;
    }
};
/* harmony default export */ const card_manager_factory = (n);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/log-card-dismissal.js
function log_card_dismissal_instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}





function logCardDismissal(o) {
    return !!braze_instance/* default */.Ay.X() && (log_card_dismissal_instanceof(o, card_Card) ? card_manager_factory.m().B(o).L : (logger/* default */.A.error("card " + constants/* MUST_BE_CARD_WARNING_SUFFIX */.s1), !1));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/shared-lib/guid.js
var guid = __webpack_require__(929);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/display/card-display.js





var TOP_IMPRESSION_DATA_ATTRIBUTE = "data-ab-had-top-impression";
var BOTTOM_IMPRESSION_DATA_ATTRIBUTE = "data-ab-had-bottom-impression";
function topHadImpression(t) {
    return null != t && !!t.getAttribute("data-ab-had-top-impression");
}
function impressOnTop(t) {
    null != t && t.setAttribute("data-ab-had-top-impression", "true");
}
function bottomHadImpression(t) {
    return null != t && !!t.getAttribute("data-ab-had-bottom-impression");
}
function impressOnBottom(t) {
    null != t && t.setAttribute("data-ab-had-bottom-impression", "true");
}
function markCardAsRead(t) {
    if (null != t) {
        var o = t.querySelectorAll(".ab-unread-indicator")[0];
        null != o && (o.className += " read");
    }
}
function getCardId(t) {
    return t.getAttribute("data-ab-card-id");
}
function _setImageAltText(t, o) {
    var e = "";
    t.title || t.description || (e = "Feed Image"), o.setAttribute("alt", e);
}
function setCardHeight(t, o) {
    var e = o.querySelectorAll(".ab-image-area");
    var a, n = 0;
    e.length > 0 && (n = e[0].offsetWidth);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _$o = _step.value;
            if (a = _$o.T, a && _$o.imageUrl && "number" == typeof _$o.aspectRatio) {
                var _$t = n / _$o.aspectRatio;
                _$t && (a.style.height = "".concat(_$t, "px"));
            }
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
}
function cardToHtml(t, logCardClick, o) {
    var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "ltr";
    var a = document.createElement("div");
    a.dir = e, a.className = "ab-card ab-effect-card " + t._, t.id && (a.setAttribute("data-ab-card-id", t.id), a.setAttribute("id", t.id)), a.setAttribute("role", "article"), a.setAttribute("tabindex", "0");
    var n = "", i = !1;
    t.url && "" !== t.url && (n = t.url, i = !0);
    var r = function(e) {
        return markCardAsRead(a), i && (logCardClick(t), (0,handle_braze_action/* _handleBrazeAction */.U)(n, o, e)), !1;
    };
    if (t.pinned) {
        var _$t = document.createElement("div");
        _$t.className = "ab-pinned-indicator";
        var o1 = document.createElement("i");
        o1.className = "fa fa-star", _$t.appendChild(o1), a.appendChild(_$t);
    }
    if (t.imageUrl && "" !== t.imageUrl) {
        var o2 = document.createElement("div");
        o2.dir = e, o2.className = "ab-image-area";
        var _$d = document.createElement("img");
        if (_$d.setAttribute("src", t.imageUrl), _$d.onload = function() {
            a.style.height = "auto";
        }, _setImageAltText(t, _$d), o2.appendChild(_$d), a.className += " with-image", i && !t.S) {
            var _$t1 = document.createElement("a");
            _$t1.setAttribute("href", n), _$t1.onclick = r, _$t1.appendChild(o2), a.appendChild(_$t1);
        } else a.appendChild(o2);
    }
    var s = document.createElement("div");
    if (s.className = "ab-card-body", s.dir = e, t.dismissible) {
        t.logCardDismissal = function() {
            return logCardDismissal(t);
        };
        var o3 = (0,component_utils/* createCloseButton */.p)("Dismiss Card", void 0, t.dismissCard.bind(t), e);
        a.appendChild(o3), (0,dom_utils/* detectSwipe */.sr)(s, dom_utils/* DIRECTIONS */.X.U, function(t) {
            a.className += " ab-swiped-left", o3.onclick(t);
        }), (0,dom_utils/* detectSwipe */.sr)(s, dom_utils/* DIRECTIONS */.X.V, function(t) {
            a.className += " ab-swiped-right", o3.onclick(t);
        });
    }
    var l = "", b = !1;
    if (t.title && "" !== t.title && (l = t.title, b = !0), b) {
        var _$t2 = document.createElement("h1");
        if (_$t2.className = "ab-title", _$t2.id = guid/* default */.A.W(), a.setAttribute("aria-labelledby", _$t2.id), i) {
            var o4 = document.createElement("a");
            o4.setAttribute("href", n), o4.onclick = r, o4.appendChild(document.createTextNode(l)), _$t2.appendChild(o4);
        } else _$t2.appendChild(document.createTextNode(l));
        s.appendChild(_$t2);
    }
    var f = document.createElement("div");
    if (f.className = b ? "ab-description" : "ab-description ab-no-title", f.id = guid/* default */.A.W(), a.setAttribute("aria-describedby", f.id), t.description && f.appendChild(document.createTextNode(t.description)), i) {
        var o5 = document.createElement("div");
        o5.className = "ab-url-area";
        var e1 = document.createElement("a");
        e1.setAttribute("href", n), t.linkText && e1.appendChild(document.createTextNode(t.linkText)), e1.onclick = r, o5.appendChild(e1), f.appendChild(o5);
    }
    s.appendChild(f), a.appendChild(s);
    var x = document.createElement("div");
    return x.className = "ab-unread-indicator", t.viewed && (x.className += " read"), a.appendChild(x), t.T = a, a;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/code-utils.js
var code_utils = __webpack_require__(8317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/key-codes.js
var key_codes = __webpack_require__(298);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/l10n/l10n-manager-factory.js + 2 modules
var l10n_manager_factory = __webpack_require__(6864);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Core/remove-subscription.js

function removeSubscription(r) {
    braze_instance/* default */.Ay.X() && braze_instance/* default */.Ay.removeSubscription(r);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/validation-utils.js
var validation_utils = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/braze-actions.js
var braze_actions = __webpack_require__(8430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/common/feed-display.js
function feed_display_instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}












var LAST_REQUESTED_REFRESH_DATA_ATTRIBUTE = "data-last-requested-refresh";
var SUBSCRIPTION_ID_DATA_ATTRIBUTE = "data-update-subscription-id";
var SCROLL_LISTENER_ID = "data-listener-id";
var scrollListeners = {};
function destroyFeedHtml(e) {
    e && (e.className = e.className.replace("ab-show", "ab-hide"), setTimeout(function() {
        e && e.parentNode && e.parentNode.removeChild(e);
    }, x.Ah));
    var t = e.getAttribute("data-update-subscription-id");
    null != t && removeSubscription(t);
    var o = e.getAttribute("data-listener-id");
    null != o && (window.removeEventListener("scroll", scrollListeners[o]), delete scrollListeners[o]);
}
function generateFeedBody(e, t) {
    var o = l10n_manager_factory/* default */.A.m(), s = document.createElement("div");
    if (s.className = "ab-feed-body", s.setAttribute("aria-label", "Feed"), s.setAttribute("role", "feed"), null == e.lastUpdated) {
        var _$e = document.createElement("div");
        _$e.className = "ab-no-cards-message";
        var _$t = document.createElement("i");
        _$t.className = "fa fa-spinner fa-spin fa-4x ab-initial-spinner", _$e.appendChild(_$t), s.appendChild(_$e);
    } else {
        var n = !1;
        var logCardClick = function(t) {
            return e.logCardClick(t);
        };
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = e.cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var i = _step.value;
                var a = feed_display_instanceof(i, ControlCard);
                !a || e.dr() ? (s.appendChild(cardToHtml(i, logCardClick, t, o.wo())), n = n || !a) : logger/* default */.A.error("Received a control card for a legacy news feed. Control cards are only supported with content cards.");
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
        if (!n) {
            var _$e1 = document.createElement("div");
            _$e1.className = "ab-no-cards-message", _$e1.innerHTML = o.get("NO_CARDS_MESSAGE") || "", _$e1.setAttribute("role", "article"), s.appendChild(_$e1);
        }
    }
    return s;
}
function detectFeedImpressions(e, t) {
    if (null != e && null != t) {
        var o = [], s = t.querySelectorAll(".ab-card");
        e.yo || (e.yo = {});
        for(var _$t = 0; _$t < s.length; _$t++){
            var n = getCardId(s[_$t]), r = (0,dom_utils/* topIsInView */.Kz)(s[_$t]), i = (0,dom_utils/* bottomIsInView */.K)(s[_$t]);
            if (e.yo[n]) {
                r || i || markCardAsRead(s[_$t]);
                continue;
            }
            var a = topHadImpression(s[_$t]), d = bottomHadImpression(s[_$t]);
            var l = a, c = d;
            if (!a && r && (a = !0, impressOnTop(s[_$t])), !d && i && (d = !0, impressOnBottom(s[_$t])), a && d) {
                if (l && c) continue;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$t1 = _step.value;
                        if (_$t1.id === n) {
                            e.yo[_$t1.id] = !0, o.push(_$t1);
                            break;
                        }
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
            }
        }
        o.length > 0 && e.logCardImpressions(o);
    }
}
function refreshFeed(e, t) {
    if (null == e || null == t) return;
    t.setAttribute("aria-busy", "true");
    var o = t.querySelectorAll(".ab-refresh-button")[0];
    null != o && (o.className += " fa-spin");
    var s = new Date().valueOf().toString();
    t.setAttribute("data-last-requested-refresh", s), setTimeout(function() {
        if (t.getAttribute("data-last-requested-refresh") === s) {
            var _$e = t.querySelectorAll(".fa-spin");
            for(var _$t = 0; _$t < _$e.length; _$t++)_$e[_$t].className = _$e[_$t].className.replace(/fa-spin/g, "");
            var o = t.querySelectorAll(".ab-initial-spinner")[0];
            if (null != o) {
                var _$e1 = document.createElement("span");
                _$e1.innerHTML = l10n_manager_factory/* default */.A.m().get("FEED_TIMEOUT_MESSAGE") || "", null != o.parentNode && (o.parentNode.appendChild(_$e1), o.parentNode.removeChild(o));
            }
            "true" === t.getAttribute("aria-busy") && t.setAttribute("aria-busy", "false");
        }
    }, x.Co), e.sr();
}
function feedToHtml(e, t, o) {
    var s = document.createElement("div");
    s.className = "ab-feed ab-hide ab-effect-slide", s.setAttribute("role", "dialog"), s.setAttribute("aria-label", "Feed"), s.setAttribute("tabindex", "-1");
    var n = document.createElement("div");
    n.className = "ab-feed-buttons-wrapper", n.setAttribute("role", "group"), s.appendChild(n);
    var r = document.createElement("i");
    r.className = "fa fa-times ab-close-button", r.setAttribute("aria-label", "Close Feed"), r.setAttribute("tabindex", "0"), r.setAttribute("role", "button");
    var i = function(e) {
        destroyFeedHtml(s), e.stopPropagation();
    };
    r.addEventListener("keydown", function(e) {
        e.keyCode !== key_codes/* KeyCodes */.c.Fo && e.keyCode !== key_codes/* KeyCodes */.c.To || i(e);
    }), r.onclick = i;
    var a = document.createElement("i");
    a.className = "fa fa-refresh ab-refresh-button", e && null == e.lastUpdated && (a.className += " fa-spin"), a.setAttribute("aria-label", "Refresh Feed"), a.setAttribute("tabindex", "0"), a.setAttribute("role", "button");
    var d = function(t) {
        refreshFeed(e, s), t.stopPropagation();
    };
    a.addEventListener("keydown", function(e) {
        e.keyCode !== key_codes/* KeyCodes */.c.Fo && e.keyCode !== key_codes/* KeyCodes */.c.To || d(e);
    }), a.onclick = d, n.appendChild(a), n.appendChild(r), s.appendChild(generateFeedBody(e, t));
    var l = function() {
        return detectFeedImpressions(e, s);
    };
    if (s.addEventListener("scroll", l), !o) {
        window.addEventListener("scroll", l);
        var _$e = guid/* default */.A.W();
        scrollListeners[_$e] = l, s.setAttribute("data-listener-id", _$e);
    }
    return s;
}
function updateFeedCards(e, t, o, s, n) {
    if (!(0,code_utils/* isArray */.cy)(t)) return;
    var i = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _$e = _step.value;
            if (feed_display_instanceof(_$e, card_Card)) {
                if (_$e.url && validation_utils/* BRAZE_ACTION_URI_REGEX */.nx.test(_$e.url)) {
                    var _$t = (0,braze_actions/* getDecodedBrazeAction */.jj)(_$e.url);
                    if ((0,braze_actions/* containsUnknownBrazeAction */.qj)(_$t)) {
                        logger/* default */.A.error((0,braze_actions/* ineligibleBrazeActionURLErrorMessage */.$6)(braze_actions/* INELIGIBLE_BRAZE_ACTION_URL_ERROR_TYPES */.mY.Li, "Content Card"));
                        continue;
                    }
                }
                i.push(_$e);
            }
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
    if (e.cards = i, e.lastUpdated = o, null != s) if (s.setAttribute("aria-busy", "false"), null == e.lastUpdated) destroyFeedHtml(s);
    else {
        var _$t1 = s.querySelectorAll(".ab-feed-body")[0];
        if (null != _$t1) {
            var _$o = generateFeedBody(e, n);
            _$t1.parentNode && _$t1.parentNode.replaceChild(_$o, _$t1), detectFeedImpressions(e, _$o.parentNode);
        }
    }
}
function registerFeedSubscriptionId(e, t) {
    e && t.setAttribute("data-update-subscription-id", e);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/log-card-impressions.js
function log_card_impressions_instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}






function logCardImpressions(o, s) {
    if (!braze_instance/* default */.Ay.X()) return !1;
    if (!(0,code_utils/* isArray */.cy)(o)) return logger/* default */.A.error("cards must be an array"), !1;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _$n = _step.value;
            if (!log_card_impressions_instanceof(_$n, card_Card)) return logger/* default */.A.error("Each card in cards ".concat(constants/* MUST_BE_CARD_WARNING_SUFFIX */.s1)), !1;
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
    return card_manager_factory.m().G(o, s).L;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/log-card-click.js
function log_card_click_instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}





function logCardClick(o, m) {
    return !!braze_instance/* default */.Ay.X() && (log_card_click_instanceof(o, card_Card) ? card_manager_factory.m().h(o, m).L : (logger/* default */.A.error("card " + constants/* MUST_BE_CARD_WARNING_SUFFIX */.s1), !1));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/common/base-provider.js
var base_provider = __webpack_require__(6078);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/models/classic-card.js
function classic_card_assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function classic_card_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function classic_card_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function classic_card_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) classic_card_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) classic_card_defineProperties(Constructor, staticProps);
    return Constructor;
}
function classic_card_get_prototype_of(o) {
    classic_card_get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return classic_card_get_prototype_of(o);
}
function classic_card_inherits(subClass, superClass) {
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
    if (superClass) classic_card_set_prototype_of(subClass, superClass);
}
function classic_card_possible_constructor_return(self, call) {
    if (call && (classic_card_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return classic_card_assert_this_initialized(self);
}
function classic_card_set_prototype_of(o, p) {
    classic_card_set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return classic_card_set_prototype_of(o, p);
}
function classic_card_type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function classic_card_is_native_reflect_construct() {
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
function classic_card_create_super(Derived) {
    var hasNativeReflectConstruct = classic_card_is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = classic_card_get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = classic_card_get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return classic_card_possible_constructor_return(this, result);
    };
}

var ClassicCard = /*#__PURE__*/ function(Card1) {
    "use strict";
    classic_card_inherits(ClassicCard, Card1);
    var _super = classic_card_create_super(ClassicCard);
    function ClassicCard(s, t, i, h, r, c, e, a, o, d, l, n, u, p, f, m) {
        classic_card_class_call_check(this, ClassicCard);
        var _this;
        _this = _super.call(this, s, t, i, h, r, c, e, a, o, d, l, n, u, p, f, m), _this._ = "ab-classic-card", _this.S = !0;
        return classic_card_possible_constructor_return(_this);
    }
    classic_card_create_class(ClassicCard, [
        {
            key: "Y",
            value: function Y() {
                var s = {};
                return s[card_Card.tt.Z] = card_Card.it.Mt, s[card_Card.tt.ht] = this.id, s[card_Card.tt.et] = this.viewed, s[card_Card.tt.rt] = this.title, s[card_Card.tt.ot] = this.imageUrl, s[card_Card.tt.ct] = this.description, s[card_Card.tt.nt] = this.updated, s[card_Card.tt.dt] = this.created, s[card_Card.tt.ut] = this.categories, s[card_Card.tt.lt] = this.expiresAt, s[card_Card.tt.URL] = this.url, s[card_Card.tt.ft] = this.linkText, s[card_Card.tt.xt] = this.aspectRatio, s[card_Card.tt.bt] = this.extras, s[card_Card.tt.gt] = this.pinned, s[card_Card.tt.jt] = this.dismissible, s[card_Card.tt.zt] = this.clicked, s[card_Card.tt.kt] = this.test, s;
            }
        }
    ]);
    return ClassicCard;
}(card_Card);


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/models/captioned-image.js
function captioned_image_assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function captioned_image_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function captioned_image_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function captioned_image_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) captioned_image_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) captioned_image_defineProperties(Constructor, staticProps);
    return Constructor;
}
function captioned_image_get_prototype_of(o) {
    captioned_image_get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return captioned_image_get_prototype_of(o);
}
function captioned_image_inherits(subClass, superClass) {
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
    if (superClass) captioned_image_set_prototype_of(subClass, superClass);
}
function captioned_image_possible_constructor_return(self, call) {
    if (call && (captioned_image_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return captioned_image_assert_this_initialized(self);
}
function captioned_image_set_prototype_of(o, p) {
    captioned_image_set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return captioned_image_set_prototype_of(o, p);
}
function captioned_image_type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function captioned_image_is_native_reflect_construct() {
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
function captioned_image_create_super(Derived) {
    var hasNativeReflectConstruct = captioned_image_is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = captioned_image_get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = captioned_image_get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return captioned_image_possible_constructor_return(this, result);
    };
}

var CaptionedImage = /*#__PURE__*/ function(Card1) {
    "use strict";
    captioned_image_inherits(CaptionedImage, Card1);
    var _super = captioned_image_create_super(CaptionedImage);
    function CaptionedImage(t, s, i, h, e, r, a, o, c, n, d, p, u, l, m, f) {
        captioned_image_class_call_check(this, CaptionedImage);
        var _this;
        _this = _super.call(this, t, s, i, h, e, r, a, o, c, n, d, p, u, l, m, f), _this._ = "ab-captioned-image", _this.S = !0, _this.test = !1;
        return captioned_image_possible_constructor_return(_this);
    }
    captioned_image_create_class(CaptionedImage, [
        {
            key: "Y",
            value: function Y() {
                var t = {};
                return t[card_Card.tt.Z] = card_Card.it.st, t[card_Card.tt.ht] = this.id, t[card_Card.tt.et] = this.viewed, t[card_Card.tt.rt] = this.title, t[card_Card.tt.ot] = this.imageUrl, t[card_Card.tt.ct] = this.description, t[card_Card.tt.nt] = this.updated, t[card_Card.tt.dt] = this.created, t[card_Card.tt.ut] = this.categories, t[card_Card.tt.lt] = this.expiresAt, t[card_Card.tt.URL] = this.url, t[card_Card.tt.ft] = this.linkText, t[card_Card.tt.xt] = this.aspectRatio, t[card_Card.tt.bt] = this.extras, t[card_Card.tt.gt] = this.pinned, t[card_Card.tt.jt] = this.dismissible, t[card_Card.tt.zt] = this.clicked, t[card_Card.tt.kt] = this.test, t;
            }
        }
    ]);
    return CaptionedImage;
}(card_Card);


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/models/image-only.js
function image_only_assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function image_only_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function image_only_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function image_only_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) image_only_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) image_only_defineProperties(Constructor, staticProps);
    return Constructor;
}
function image_only_get_prototype_of(o) {
    image_only_get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return image_only_get_prototype_of(o);
}
function image_only_inherits(subClass, superClass) {
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
    if (superClass) image_only_set_prototype_of(subClass, superClass);
}
function image_only_possible_constructor_return(self, call) {
    if (call && (image_only_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return image_only_assert_this_initialized(self);
}
function image_only_set_prototype_of(o, p) {
    image_only_set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return image_only_set_prototype_of(o, p);
}
function image_only_type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function image_only_is_native_reflect_construct() {
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
function image_only_create_super(Derived) {
    var hasNativeReflectConstruct = image_only_is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = image_only_get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = image_only_get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return image_only_possible_constructor_return(this, result);
    };
}

var ImageOnly = /*#__PURE__*/ function(Card1) {
    "use strict";
    image_only_inherits(ImageOnly, Card1);
    var _super = image_only_create_super(ImageOnly);
    function ImageOnly(s, t, i, h, r, e, l, n, o, a, u, c, d, m) {
        image_only_class_call_check(this, ImageOnly);
        var _this;
        _this = _super.call(this, s, t, null, i, null, h, r, e, l, n, o, a, u, c, d, m), _this._ = "ab-image-only", _this.S = !1, _this.test = !1;
        return image_only_possible_constructor_return(_this);
    }
    image_only_create_class(ImageOnly, [
        {
            key: "Y",
            value: function Y() {
                var s = {};
                return s[card_Card.tt.Z] = card_Card.it.Pt, s[card_Card.tt.ht] = this.id, s[card_Card.tt.et] = this.viewed, s[card_Card.tt.ot] = this.imageUrl, s[card_Card.tt.nt] = this.updated, s[card_Card.tt.dt] = this.created, s[card_Card.tt.ut] = this.categories, s[card_Card.tt.lt] = this.expiresAt, s[card_Card.tt.URL] = this.url, s[card_Card.tt.ft] = this.linkText, s[card_Card.tt.xt] = this.aspectRatio, s[card_Card.tt.bt] = this.extras, s[card_Card.tt.gt] = this.pinned, s[card_Card.tt.jt] = this.dismissible, s[card_Card.tt.zt] = this.clicked, s[card_Card.tt.kt] = this.test, s;
            }
        }
    ]);
    return ImageOnly;
}(card_Card);


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Card/util/card-factory.js



function newCard(n, e, t, o, i, l, u, d, a, w, f, s, m, C, p, c, x, F) {
    var j;
    if (e === card_Card.it.Ot || e === card_Card.it.Mt) j = new ClassicCard(n, t, o, i, l, u, d, a, w, f, s, m, C, p, c, x);
    else if (e === card_Card.it.st) j = new CaptionedImage(n, t, o, i, l, u, d, a, w, f, s, m, C, p, c, x);
    else if (e === card_Card.it.Pt) j = new ImageOnly(n, t, i, u, d, a, w, f, s, m, C, p, c, x);
    else {
        if (e !== card_Card.it.Ut) return logger/* default */.A.error("Ignoring card with unknown type " + e), null;
        j = new ControlCard(n, t, d, w, C, p);
    }
    return F && (j.test = F), j;
}
function newCardFromContentCardsJson(n) {
    if (n[Card.Rt.Lt]) return null;
    var e = n[Card.Rt.ht], r = n[Card.Rt.Z], t = n[Card.Rt.et], o = n[Card.Rt.rt], i = n[Card.Rt.ot], u = n[Card.Rt.ct], d = l(n[Card.Rt.nt]), a = d;
    var w;
    w = n[Card.Rt.lt] === Card._t ? null : l(n[Card.Rt.lt]);
    return newCard(e, r, t, o, i, u, a, d, null, w, n[Card.Rt.URL], n[Card.Rt.ft], n[Card.Rt.xt], n[Card.Rt.bt], n[Card.Rt.gt], n[Card.Rt.jt], n[Card.Rt.zt], n[Card.Rt.kt] || !1);
}
function newCardFromFeedJson(n) {
    return newCard(n.id, n.type, n.viewed, n.title, n.image, n.description, (0,date_utils/* dateFromUnixTimestamp */.Zo)(n.created), (0,date_utils/* dateFromUnixTimestamp */.Zo)(n.updated), n.categories, (0,date_utils/* dateFromUnixTimestamp */.Zo)(n.expires_at), n.url, n.domain, n.aspect_ratio, n.extras, !1, !1);
}
function newCardFromSerializedValue(n) {
    return newCard(n[card_Card.tt.ht], n[card_Card.tt.Z], n[card_Card.tt.et], n[card_Card.tt.rt], n[card_Card.tt.ot], n[card_Card.tt.ct], (0,date_utils/* rehydrateDateAfterJsonization */.jU)(n[card_Card.tt.dt]), (0,date_utils/* rehydrateDateAfterJsonization */.jU)(n[card_Card.tt.nt]), n[card_Card.tt.ut], (0,date_utils/* rehydrateDateAfterJsonization */.jU)(n[card_Card.tt.lt]), n[card_Card.tt.URL], n[card_Card.tt.ft], n[card_Card.tt.xt], n[card_Card.tt.bt], n[card_Card.tt.gt], n[card_Card.tt.jt], n[card_Card.tt.zt], n[card_Card.tt.kt] || !1) || void 0;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Feed/feed-provider.js
function feed_provider_assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function feed_provider_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function feed_provider_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function feed_provider_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) feed_provider_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) feed_provider_defineProperties(Constructor, staticProps);
    return Constructor;
}
function feed_provider_get_prototype_of(o) {
    feed_provider_get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return feed_provider_get_prototype_of(o);
}
function feed_provider_inherits(subClass, superClass) {
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
    if (superClass) feed_provider_set_prototype_of(subClass, superClass);
}
function feed_provider_possible_constructor_return(self, call) {
    if (call && (feed_provider_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return feed_provider_assert_this_initialized(self);
}
function feed_provider_set_prototype_of(o, p) {
    feed_provider_set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return feed_provider_set_prototype_of(o, p);
}
function feed_provider_type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function feed_provider_is_native_reflect_construct() {
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
function feed_provider_create_super(Derived) {
    var hasNativeReflectConstruct = feed_provider_is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = feed_provider_get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = feed_provider_get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return feed_provider_possible_constructor_return(this, result);
    };
}







var ee = /*#__PURE__*/ function(y) {
    "use strict";
    feed_provider_inherits(ee, y);
    var _super = feed_provider_create_super(ee);
    function ee(t, s) {
        feed_provider_class_call_check(this, ee);
        var _this;
        _this = _super.call(this), _this.u = t, _this.zi = s, _this.cards = [], _this.Ni = null, _this.u = t, _this.zi = s, _this.Jt = new subscription_manager/* default */.A(), braze_instance/* default */.Ay.$t(_this.Jt), _this.Kt();
        return feed_provider_possible_constructor_return(_this);
    }
    feed_provider_create_class(ee, [
        {
            key: "Kt",
            value: function Kt() {
                var t = [];
                this.u && (t = this.u.j(storage_manager/* STORAGE_KEYS */.d.C.Ui) || []);
                var s = [];
                for(var i = 0; i < t.length; i++){
                    var e = newCardFromSerializedValue(t[i]);
                    null != e && s.push(e);
                }
                this.cards = s, this.u && (this.Ni = (0,date_utils/* rehydrateDateAfterJsonization */.jU)(this.u.j(storage_manager/* STORAGE_KEYS */.d.C.ki)));
            }
        },
        {
            key: "Ai",
            value: function Ai(t) {
                var s = [];
                var i = null, e = {};
                this.u && (e = this.u.j(storage_manager/* STORAGE_KEYS */.d.C.J) || {});
                var r = {};
                for(var h = 0; h < t.length; h++){
                    i = t[h];
                    var _$o = newCardFromFeedJson(i);
                    if (null != _$o) {
                        var _$t = _$o.id;
                        _$t && e[_$t] && (_$o.viewed = !0, r[_$t] = !0), s.push(_$o);
                    }
                }
                this.cards = s, this.Rs(), this.Ni = new Date(), this.u && (this.u.k(storage_manager/* STORAGE_KEYS */.d.C.J, r), this.u.k(storage_manager/* STORAGE_KEYS */.d.C.ki, this.Ni));
            }
        },
        {
            key: "Rs",
            value: function Rs() {
                var t;
                var s = [];
                for(var t1 = 0; t1 < this.cards.length; t1++)s.push(this.cards[t1].Y());
                null === (t = this.u) || void 0 === t || t.k(storage_manager/* STORAGE_KEYS */.d.C.Ui, s);
            }
        },
        {
            key: "Ns",
            value: function Ns(t) {
                null != t && t.feed && (this.Kt(), this.Ai(t.feed), this.Jt.Dt(new Feed(this.cards.slice(), this.Ni)));
            }
        },
        {
            key: "Bi",
            value: function Bi() {
                this.Kt();
                var t = [], s = new Date();
                for(var i = 0; i < this.cards.length; i++){
                    var e = this.cards[i].expiresAt;
                    var r = !0;
                    null != e && (r = e >= s), r && t.push(this.cards[i]);
                }
                return new Feed(t, this.Ni);
            }
        },
        {
            key: "xs",
            value: function xs() {
                this.zi && this.zi.requestFeedRefresh();
            }
        },
        {
            key: "Zs",
            value: function Zs(t) {
                return this.Jt.It(t);
            }
        },
        {
            key: "clearData",
            value: function clearData(t) {
                null == t && (t = !1), this.cards = [], this.Ni = null, t && this.u && (this.u.ti(storage_manager/* STORAGE_KEYS */.d.C.Ui), this.u.ti(storage_manager/* STORAGE_KEYS */.d.C.ki)), this.Jt.Dt(new Feed(this.cards.slice(), this.Ni));
            }
        }
    ]);
    return ee;
}(base_provider/* default */.A);


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Feed/feed-provider-factory.js


var re = {
    t: !1,
    provider: null,
    rr: function() {
        return re.o(), re.provider || (re.provider = new ee(braze_instance/* default */.Ay.l(), braze_instance/* default */.Ay.cr()), braze_instance/* default */.Ay.ar(re.provider)), re.provider;
    },
    o: function() {
        re.t || (braze_instance/* default */.Ay.g(re), re.t = !0);
    },
    destroy: function() {
        re.provider = null, re.t = !1;
    }
};
/* harmony default export */ const feed_provider_factory = (re);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Feed/request-feed-refresh.js


function requestFeedRefresh() {
    if (braze_instance/* default */.Ay.X()) return feed_provider_factory.rr().xs();
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Feed/feed.js
function feed_assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function feed_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function feed_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function feed_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) feed_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) feed_defineProperties(Constructor, staticProps);
    return Constructor;
}
function feed_get_prototype_of(o) {
    feed_get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return feed_get_prototype_of(o);
}
function feed_inherits(subClass, superClass) {
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
    if (superClass) feed_set_prototype_of(subClass, superClass);
}
function feed_possible_constructor_return(self, call) {
    if (call && (feed_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return feed_assert_this_initialized(self);
}
function feed_set_prototype_of(o, p) {
    feed_set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return feed_set_prototype_of(o, p);
}
function feed_type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function feed_is_native_reflect_construct() {
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
function feed_create_super(Derived) {
    var hasNativeReflectConstruct = feed_is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = feed_get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = feed_get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return feed_possible_constructor_return(this, result);
    };
}



var Feed = /*#__PURE__*/ function(x) {
    "use strict";
    feed_inherits(Feed, x);
    var _super = feed_create_super(Feed);
    function Feed(r, e) {
        feed_class_call_check(this, Feed);
        return _super.call(this, r, e);
    }
    feed_create_class(Feed, [
        {
            key: "logCardImpressions",
            value: function logCardImpressions1(r) {
                logCardImpressions(r, !1);
            }
        },
        {
            key: "logCardClick",
            value: function logCardClick1(r) {
                return logCardClick(r, !1);
            }
        },
        {
            key: "sr",
            value: function sr() {
                requestFeedRefresh();
            }
        },
        {
            key: "dr",
            value: function dr() {
                return !1;
            }
        }
    ]);
    return Feed;
}(x);


;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Feed/subscribe-to-feed-updates.js


function subscribeToFeedUpdates(r) {
    if (braze_instance/* default */.Ay.X()) return feed_provider_factory.rr().Zs(r);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Feed/log-feed-displayed.js


function logFeedDisplayed() {
    var r;
    if (braze_instance/* default */.Ay.X()) return null === (r = braze_instance/* default */.Ay.nr()) || void 0 === r ? void 0 : r.qr(event_types/* InternalEventTypes */.j.Ar).L;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/ui/js/attach-css.js
var attach_css = __webpack_require__(9719);
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/ui/js/load-font-awesome.js
var load_font_awesome = __webpack_require__(534);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/ui/js/feed-css.js


function attachFeedCSS(t) {
    (0,attach_css/* attachCSS */.n)(t, "feed", "body>.ab-feed{position:fixed;top:0;right:0;bottom:0;width:421px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}body>.ab-feed .ab-feed-body{position:absolute;top:0;left:0;right:0;border:none;border-left:1px solid #d0d0d0;padding-top:70px;min-height:100%}body>.ab-feed .ab-initial-spinner{float:none}body>.ab-feed .ab-no-cards-message{position:absolute;width:100%;margin-left:-20px;top:40%}.ab-feed{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);-moz-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);box-shadow:0 1px 7px 1px rgba(66,82,113,.15);width:402px;background-color:#eee;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;font-size:13px;line-height:130%;letter-spacing:normal;overflow-y:auto;overflow-x:visible;z-index:9011;-webkit-overflow-scrolling:touch}.ab-feed :focus,.ab-feed:focus{outline:0}.ab-feed .ab-feed-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #d0d0d0;border-top:none;padding:20px 20px 0 20px}.ab-feed.ab-effect-slide{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px);-webkit-transition:transform .5s ease-in-out;-moz-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}.ab-feed.ab-effect-slide.ab-show{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.ab-feed.ab-effect-slide.ab-hide{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px)}.ab-feed .ab-card{position:relative;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:100%;border:1px solid #d0d0d0;margin-bottom:20px;overflow:hidden;background-color:#fff;-webkit-transition:height .4s ease-in-out,margin .4s ease-in-out;-moz-transition:height .4s ease-in-out,margin .4s ease-in-out;-o-transition:height .4s ease-in-out,margin .4s ease-in-out;transition:height .4s ease-in-out,margin .4s ease-in-out}.ab-feed .ab-card .ab-pinned-indicator{position:absolute;right:0;top:0;margin-right:-1px;width:0;height:0;border-style:solid;border-width:0 24px 24px 0;border-color:transparent #1676d0 transparent transparent}.ab-feed .ab-card .ab-pinned-indicator .fa-star{position:absolute;right:-21px;top:2px;font-size:9px;color:#fff}.ab-feed .ab-card.ab-effect-card.ab-hide{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.ab-feed .ab-card.ab-effect-card.ab-hide.ab-swiped-left{-webkit-transform:translateX(-450px);-moz-transform:translateX(-450px);-ms-transform:translateX(-450px);transform:translateX(-450px)}.ab-feed .ab-card.ab-effect-card.ab-hide.ab-swiped-right{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px)}.ab-feed .ab-card.ab-effect-card.ab-hide:not(.ab-swiped-left):not(.ab-swiped-right){opacity:0}.ab-feed .ab-card .ab-close-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background-color:transparent;background-size:15px;border:none;width:15px;min-width:15px;height:15px;cursor:pointer;display:block;font-size:15px;line-height:0;padding-top:15px;padding-right:15px;padding-left:15px;padding-bottom:15px;position:absolute;top:0;z-index:9021;opacity:0;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s;transition:.5s}.ab-feed .ab-card .ab-close-button[dir=rtl]{left:0}.ab-feed .ab-card .ab-close-button[dir=ltr]{right:0}.ab-feed .ab-card .ab-close-button svg{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;fill:#9b9b9b;height:auto;width:100%}.ab-feed .ab-card .ab-close-button svg.ab-chevron{display:none}.ab-feed .ab-card .ab-close-button:active{background-color:transparent}.ab-feed .ab-card .ab-close-button:focus{background-color:transparent}.ab-feed .ab-card .ab-close-button:hover{background-color:transparent}.ab-feed .ab-card .ab-close-button:hover svg{fill-opacity:.8}.ab-feed .ab-card .ab-close-button:hover{opacity:1}.ab-feed .ab-card .ab-close-button:focus{opacity:1}.ab-feed .ab-card a{float:none;color:inherit;text-decoration:none}.ab-feed .ab-card a:hover{text-decoration:underline}.ab-feed .ab-card .ab-image-area{float:none;display:inline-block;vertical-align:top;line-height:0;overflow:hidden;width:100%;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial}.ab-feed .ab-card .ab-image-area img{float:none;height:auto;width:100%}.ab-feed .ab-card.ab-image-only .ab-card-body{display:none}.ab-feed .ab-card .ab-card-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:100%;position:relative}.ab-feed .ab-card .ab-unread-indicator{position:absolute;bottom:0;margin-right:-1px;width:100%;height:5px;background-color:#1676d0}.ab-feed .ab-card .ab-unread-indicator.read{background-color:transparent}.ab-feed .ab-card .ab-title{float:none;letter-spacing:0;margin:0;font-weight:700;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;display:block;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:18px;line-height:130%;padding:20px 25px 0 25px}.ab-feed .ab-card .ab-description{float:none;color:#545454;padding:15px 25px 20px 25px;word-wrap:break-word;white-space:pre-wrap}.ab-feed .ab-card .ab-description.ab-no-title{padding-top:20px}.ab-feed .ab-card .ab-url-area{float:none;color:#1676d0;margin-top:12px;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif}.ab-feed .ab-card.ab-classic-card .ab-card-body{min-height:40px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.ab-feed .ab-card.ab-classic-card.with-image .ab-card-body{min-height:100px}.ab-feed .ab-card.ab-classic-card.with-image .ab-card-body[dir=ltr]{padding-left:72px}.ab-feed .ab-card.ab-classic-card.with-image .ab-card-body[dir=rtl]{padding-right:72px}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area{width:60px;height:60px;padding:20px 0 25px 25px;position:absolute}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area[dir=rtl]{padding:20px 25px 25px 0}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area img{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;max-width:100%;max-height:100%;width:auto;height:auto}.ab-feed .ab-card.ab-classic-card.with-image .ab-title{background-color:transparent;font-size:16px}.ab-feed .ab-card.ab-classic-card.with-image .ab-description{padding-top:10px}.ab-feed .ab-card.ab-control-card{height:0;width:0;margin:0;border:0}.ab-feed .ab-feed-buttons-wrapper{float:none;position:relative;background-color:#282828;height:50px;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);z-index:1}.ab-feed .ab-feed-buttons-wrapper .ab-close-button,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{float:none;cursor:pointer;color:#fff;font-size:18px;padding:16px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{font-size:22px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button{float:right}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover{padding-top:12px;padding-right:14px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{padding-left:17px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{padding-top:13px;padding-left:14px}.ab-feed .ab-no-cards-message{text-align:center;margin-bottom:20px}@media (max-width:600px){body>.ab-feed{width:100%}}");
}
function setupFeedUI() {
    attachFeedCSS(), (0,load_font_awesome/* loadFontAwesome */.N)();
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Feed/ui/show-feed.js








function showFeed(t, n, o) {
    if (!braze_instance/* default */.Ay.X()) return;
    setupFeedUI();
    var i = function(e, t) {
        if (null == t) return e;
        var _$n = [];
        for(var _$e = 0; _$e < t.length; _$e++)_$n.push(t[_$e].toLowerCase());
        var _$o = [];
        for(var _$t = 0; _$t < e.length; _$t++){
            var _$r = [], i = e[_$t].categories || [];
            for(var _$e1 = 0; _$e1 < i.length; _$e1++)_$r.push(i[_$e1].toLowerCase());
            (0,code_utils/* intersection */.E$)(_$r, _$n).length > 0 && _$o.push(e[_$t]);
        }
        return _$o;
    }, s = braze_instance/* default */.Ay.nn(braze_instance/* OPTIONS */.lw.tn) || braze_instance/* default */.Ay.nn(braze_instance/* OPTIONS */.lw.en) || !1;
    var l = !1;
    null == t && (t = document.body, l = !0);
    var f, a = !1;
    null == n ? (f = feed_provider_factory.rr().Bi(), updateFeedCards(f, i(f.cards, o), f.lastUpdated, null, s), a = !0) : f = new Feed(i(n, o), new Date());
    var u = feedToHtml(f, s, l);
    if (a) {
        (null == f.lastUpdated || new Date().valueOf() - f.lastUpdated.valueOf() > Feed.ur) && (logger/* default */.A.info("Cached feed was older than max TTL of ".concat(Feed.ur, " ms, requesting an update from the server.")), refreshFeed(f, u));
        var _$e = new Date().valueOf(), _$t = subscribeToFeedUpdates(function(t) {
            var _$n = u.querySelectorAll(".ab-refresh-button")[0];
            if (null != _$n) {
                var _$t = 500;
                _$t -= new Date().valueOf() - _$e;
                var _$o = u.getAttribute(LAST_REQUESTED_REFRESH_DATA_ATTRIBUTE);
                if (_$o) {
                    var _$e1 = parseInt(_$o);
                    isNaN(_$e1) || (_$t -= new Date().valueOf() - _$e1);
                }
                setTimeout(function() {
                    _$n.className = _$n.className.replace(/fa-spin/g, "");
                }, Math.max(_$t, 0));
            }
            updateFeedCards(f, i(t.cards, o), t.lastUpdated, u, s);
        });
        registerFeedSubscriptionId(_$t, u);
    }
    var d = function(e) {
        var _$t = e.querySelectorAll(".ab-feed");
        var _$n = null;
        for(var _$o = 0; _$o < _$t.length; _$o++)_$t[_$o].parentNode === e && (_$n = _$t[_$o]);
        null != _$n ? (destroyFeedHtml(_$n), _$n.parentNode && _$n.parentNode.replaceChild(u, _$n)) : e.appendChild(u), setTimeout(function() {
            u.className = u.className.replace("ab-hide", "ab-show");
        }, 0), l && u.focus(), logFeedDisplayed(), detectFeedImpressions(f, u), f && setCardHeight(f.cards, e);
    };
    var m;
    null != t ? d(t) : window.onload = (m = window.onload, function() {
        "function" == typeof m && m(new Event("oldLoad")), d(document.body);
    });
}


/***/ })

}]);