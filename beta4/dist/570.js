"use strict";
(self['webpackChunkexample_builtin_swc_loader'] = self['webpackChunkexample_builtin_swc_loader'] || []).push([["570"], {
"961": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ push_manager_factory)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/braze-instance.js + 12 modules
var braze_instance = __webpack_require__("5983");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/code-utils.js
var code_utils = __webpack_require__("391");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/models/push-token.js
var push_token = __webpack_require__("7005");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/shared-lib/logger.js
var logger = __webpack_require__("9960");
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/shared-lib/encoding-utils.js
var ei = {
    Tn: function Tn(t) {
        var r = (t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(r), o = new Uint8Array(n.length);
        for(var _$t = 0; _$t < n.length; ++_$t)o[_$t] = n.charCodeAt(_$t);
        return o;
    }
};
/* harmony default export */ const encoding_utils = (ei);

// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/managers/storage-manager.js
var storage_manager = __webpack_require__("3216");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/User/user.js
var user = __webpack_require__("2727");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Push/utils/push-utils.js
var push_utils = __webpack_require__("5990");
// EXTERNAL MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/util/error-utils.js
var error_utils = __webpack_require__("1490");
;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Push/push-manager.js
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







var push_manager_ea = /*#__PURE__*/ function() {
    "use strict";
    function ea(i, t, e, s, r, n, o, u, a, h, c) {
        _class_call_check(this, ea);
        this.sn = i, this.rn = t, this.on = e, this.un = r, this.an = n, this.hn = o, this.yt = u, this.cn = a, this.fn = h, this.u = c, this.sn = i, this.rn = t, this.on = e, this.ln = s + "/safari/" + t, this.un = r || "/service-worker.js", this.hn = o, this.yt = u, this.cn = a || !1, this.fn = h || !1, this.u = c, this.dn = push_utils/* default,pn */.Z.pn(), this.bn = push_utils/* default,yn */.Z.yn();
    }
    _create_class(ea, [
        {
            key: "mn",
            value: function mn() {
                return this.fn;
            }
        },
        {
            key: "gn",
            value: function gn(i, t, e, s, n) {
                var _this = this;
                i.unsubscribe().then(function(i) {
                    i ? _this.vn(t, e, s, n) : (logger/* default,error */.Z.error("Failed to unsubscribe device from push."), "function" == typeof n && n(!1));
                }).catch(function(i) {
                    logger/* default,error */.Z.error("Push unsubscription error: " + i), "function" == typeof n && n(!1);
                });
            }
        },
        {
            key: "wn",
            value: function wn(i, t, e) {
                var s;
                var n = function(i) {
                    if ("string" == typeof i) return i;
                    if (0 !== i.endpoint.indexOf("https://android.googleapis.com/gcm/send")) return i.endpoint;
                    var _$t = i.endpoint;
                    var _$e = i;
                    return _$e.kn && -1 === i.endpoint.indexOf(_$e.kn) && (_$t = i.endpoint + "/" + _$e.kn), _$t;
                }(i);
                var o = null, u = null;
                var a = i;
                if (null != a.getKey) try {
                    var _$i = Array.from(new Uint8Array(a.getKey("p256dh"))), _$t = Array.from(new Uint8Array(a.getKey("auth")));
                    o = btoa(String.fromCharCode.apply(null, _$i)), u = btoa(String.fromCharCode.apply(null, _$t));
                } catch (i) {
                    logger/* default,error */.Z.error((0,error_utils/* getErrorMessage */.e)(i));
                }
                var h = function(i) {
                    var _$t;
                    return i.options && (_$t = i.options.applicationServerKey) && _$t.byteLength && _$t.byteLength > 0 ? btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(_$t)))).replace(/\+/g, "-").replace(/\//g, "_") : null;
                }(a);
                null === (s = this.sn) || void 0 === s || s.Pn(n, t, o, u, h), n && "function" == typeof e && e(n, o, u);
            }
        },
        {
            key: "Dn",
            value: function Dn() {
                var i;
                null === (i = this.sn) || void 0 === i || i.Sn(!0);
            }
        },
        {
            key: "An",
            value: function An(i, t) {
                var e;
                null === (e = this.sn) || void 0 === e || e.Sn(!1), logger/* default,info */.Z.info(i), "function" == typeof t && t(!1);
            }
        },
        {
            key: "jn",
            value: function jn(i, t, e, s) {
                var _this = this;
                var n;
                if ("default" === t.permission) try {
                    window.safari.pushNotification.requestPermission(this.ln, i, {
                        api_key: this.rn,
                        device_id: (null === (n = this.on) || void 0 === n ? void 0 : n.ce().id) || ""
                    }, function(t) {
                        "granted" === t.permission && _this.sn && _this.sn.setPushNotificationSubscriptionType(user/* default,NotificationSubscriptionTypes,OPTED_IN */.Z.NotificationSubscriptionTypes.OPTED_IN), _this.jn(i, t, e, s);
                    });
                } catch (i) {
                    this.An("Could not request permission for push: " + i, s);
                }
                else "denied" === t.permission ? this.An("The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard.", s) : "granted" === t.permission && (logger/* default,info */.Z.info("Device successfully subscribed to push."), this.wn(t.deviceToken, new Date(), e));
            }
        },
        {
            key: "requestPermission",
            value: function requestPermission(i, t, e) {
                var s = function(s) {
                    switch(s){
                        case "granted":
                            return void ("function" == typeof i && i());
                        case "default":
                            return void ("function" == typeof t && t());
                        case "denied":
                            return void ("function" == typeof e && e());
                        default:
                            logger/* default,error */.Z.error("Received unexpected permission result " + s);
                    }
                };
                var n = !1;
                if ("default" !== window.Notification.permission) s(Notification.permission);
                else {
                    var i1 = window.Notification.requestPermission(function(i) {
                        n && s(i);
                    });
                    i1 ? i1.then(function(i) {
                        s(i);
                    }) : n = !0;
                }
            }
        },
        {
            key: "vn",
            value: function vn(i, t, e, s) {
                var _this = this;
                var n = {
                    userVisibleOnly: !0
                };
                null != t && (n.applicationServerKey = t), i.pushManager.subscribe(n).then(function(i) {
                    logger/* default,info */.Z.info("Device successfully subscribed to push."), _this.wn(i, new Date(), e);
                }).catch(function(i) {
                    push_utils/* default,isPushBlocked */.Z.isPushBlocked() ? (logger/* default,info */.Z.info("Permission for push notifications was denied."), "function" == typeof s && s(!1)) : (logger/* default,error */.Z.error("Push subscription failed: " + i), "function" == typeof s && s(!0));
                });
            }
        },
        {
            key: "xn",
            value: function xn() {
                if (this.cn) return navigator.serviceWorker.getRegistration(this.un);
                var i = this.an ? {
                    scope: this.an
                } : void 0;
                return navigator.serviceWorker.register(this.un, i).then(function() {
                    return navigator.serviceWorker.ready.then(function(i) {
                        return i && "function" == typeof i.update && i.update().catch(function(i) {
                            logger/* default,info */.Z.info("ServiceWorker update failed: " + i);
                        }), i;
                    });
                });
            }
        },
        {
            key: "Nn",
            value: function Nn(i) {
                this.cn || (i.unregister(), logger/* default,info */.Z.info("Service worker successfully unregistered."));
            }
        },
        {
            key: "subscribe",
            value: function subscribe(i, t) {
                var _this = this;
                if (!push_utils/* default,isPushSupported */.Z.isPushSupported()) return logger/* default,info */.Z.info(ea.Un), void ("function" == typeof t && t(!1));
                if (this.dn) {
                    if (!this.cn && null != window.location) {
                        var _$i = this.un;
                        -1 === _$i.indexOf(window.location.host) && (_$i = window.location.host + _$i), -1 === _$i.indexOf(window.location.protocol) && (_$i = window.location.protocol + "//" + _$i);
                    }
                    if (push_utils/* default,isPushBlocked */.Z.isPushBlocked()) return void this.An("Notifications from this site are blocked. This may be a temporary embargo or a permanent denial.", t);
                    if (this.yt && !this.yt.Wn() && 0 === this.yt.ii()) return logger/* default,info */.Z.info("Waiting for VAPID key from server config before subscribing to push."), void this.yt._n(function() {
                        _this.subscribe(i, t);
                    });
                    var e = function() {
                        logger/* default,info */.Z.info("Permission for push notifications was denied."), "function" == typeof t && t(!1);
                    }, s = function() {
                        var _$i = "Permission for push notifications was ignored.";
                        push_utils/* default,isPushBlocked */.Z.isPushBlocked() && (_$i += " The browser has automatically blocked further permission requests for a period (probably 1 week)."), logger/* default,info */.Z.info(_$i), "function" == typeof t && t(!0);
                    }, n = push_utils/* default,isPushPermissionGranted */.Z.isPushPermissionGranted(), u = function() {
                        !n && _this.sn && _this.sn.setPushNotificationSubscriptionType(user/* default,NotificationSubscriptionTypes,OPTED_IN */.Z.NotificationSubscriptionTypes.OPTED_IN), _this.xn().then(function(e) {
                            if (null == e) return logger/* default,error */.Z.error("No service worker registration. Set the `manageServiceWorkerExternally` initialization option to false or ensure that your service worker is registered before calling registerPush."), void ("function" == typeof t && t(!0));
                            e.pushManager.getSubscription().then(function(s) {
                                var n;
                                var u = null;
                                if (null != (null === (n = _this.yt) || void 0 === n ? void 0 : n.Wn()) && (u = encoding_utils.Tn(_this.yt.Wn())), s) {
                                    var n1, a = null, h = null;
                                    if (_this.u && (n1 = _this.u.j(storage_manager/* STORAGE_KEYS,C,In */.I.C.In)), n1 && !(0,code_utils/* isArray */.kJ)(n1)) {
                                        var _$i;
                                        try {
                                            _$i = push_token/* default,qn */.Z.qn(n1).Vn;
                                        } catch (t) {
                                            _$i = null;
                                        }
                                        null == _$i || isNaN(_$i.getTime()) || 0 === _$i.getTime() || (a = _$i, h = new Date(a), h.setMonth(a.getMonth() + 6));
                                    }
                                    null != u && s.options && s.options.applicationServerKey && s.options.applicationServerKey.byteLength && s.options.applicationServerKey.byteLength > 0 && !(0,code_utils/* isEqual */.Xy)(u, new Uint8Array(s.options.applicationServerKey)) ? (s.options.applicationServerKey.byteLength > 12 ? logger/* default,info */.Z.info("Device was already subscribed to push using a different VAPID provider, creating new subscription.") : logger/* default,info */.Z.info("Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."), _this.gn(s, e, u, i, t)) : s.expirationTime && new Date(s.expirationTime).valueOf() <= new Date().valueOf() ? (logger/* default,info */.Z.info("Push subscription is expired, creating new subscription."), _this.gn(s, e, u, i, t)) : n1 && (0,code_utils/* isArray */.kJ)(n1) ? _this.gn(s, e, u, i, t) : null == h ? (logger/* default,info */.Z.info("No push subscription creation date found, creating new subscription."), _this.gn(s, e, u, i, t)) : h.valueOf() <= new Date().valueOf() ? (logger/* default,info */.Z.info("Push subscription older than 6 months, creating new subscription."), _this.gn(s, e, u, i, t)) : (logger/* default,info */.Z.info("Device already subscribed to push, sending existing subscription to backend."), _this.wn(s, a, i));
                                } else _this.vn(e, u, i, t);
                            }).catch(function(i) {
                                logger/* default,error */.Z.error("Error checking current push subscriptions: " + i);
                            });
                        }).catch(function(i) {
                            logger/* default,error */.Z.error("ServiceWorker registration failed: " + i);
                        });
                    };
                    this.requestPermission(u, s, e);
                } else if (this.bn) {
                    if (null == this.hn || "" === this.hn) return logger/* default,error */.Z.error("You must supply the safariWebsitePushId initialization option in order to use registerPush on Safari"), void ("function" == typeof t && t(!0));
                    var e1 = window.safari.pushNotification.permission(this.hn);
                    this.jn(this.hn, e1, i, t);
                }
            }
        },
        {
            key: "unsubscribe",
            value: function unsubscribe(i, t) {
                var _this = this;
                if (!push_utils/* default,isPushSupported */.Z.isPushSupported()) return logger/* default,info */.Z.info(ea.Un), void ("function" == typeof t && t());
                this.dn ? navigator.serviceWorker.getRegistration(this.un).then(function(e) {
                    e ? e.pushManager.getSubscription().then(function(s) {
                        s ? (_this.Dn(), s.unsubscribe().then(function(s) {
                            s ? (logger/* default,info */.Z.info("Device successfully unsubscribed from push."), "function" == typeof i && i()) : (logger/* default,error */.Z.error("Failed to unsubscribe device from push."), "function" == typeof t && t()), _this.Nn(e);
                        }).catch(function(i) {
                            logger/* default,error */.Z.error("Push unsubscription error: " + i), "function" == typeof t && t();
                        })) : (logger/* default,info */.Z.info("Device already unsubscribed from push."), "function" == typeof i && i());
                    }).catch(function(i) {
                        logger/* default,error */.Z.error("Error unsubscribing from push: " + i), "function" == typeof t && t();
                    }) : (logger/* default,info */.Z.info("Device already unsubscribed from push."), "function" == typeof i && i());
                }) : this.bn && (this.Dn(), logger/* default,info */.Z.info("Device unsubscribed from push."), "function" == typeof i && i());
            }
        }
    ]);
    return ea;
}();

push_manager_ea.Un = "Push notifications are not supported in this browser.";

;// CONCATENATED MODULE: ./node_modules/.pnpm/@braze+web-sdk@5.4.0/node_modules/@braze/web-sdk/src/Push/push-manager-factory.js


var na = {
    t: !1,
    i: null,
    m: function() {
        return na.o(), na.i || (na.i = new push_manager_ea(braze_instance/* default,pr */.ZP.pr(), braze_instance/* default,ba */.ZP.ba(), braze_instance/* default,te */.ZP.te(), braze_instance/* default,Hs */.ZP.Hs(), braze_instance/* default,nn */.ZP.nn(braze_instance/* OPTIONS,wa */.JY.wa), braze_instance/* default,nn */.ZP.nn(braze_instance/* OPTIONS,ya */.JY.ya), braze_instance/* default,nn */.ZP.nn(braze_instance/* OPTIONS,Ma */.JY.Ma), braze_instance/* default,ir */.ZP.ir(), braze_instance/* default,nn */.ZP.nn(braze_instance/* OPTIONS,_a */.JY._a), braze_instance/* default,nn */.ZP.nn(braze_instance/* OPTIONS,ka */.JY.ka), braze_instance/* default,l */.ZP.l())), na.i;
    },
    o: function() {
        na.t || (braze_instance/* default,g */.ZP.g(na), na.t = !0);
    },
    destroy: function() {
        na.i = null, na.t = !1;
    }
};
/* harmony default export */ const push_manager_factory = (na);


}),
"985": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  unregisterPush: function() { return unregisterPush; }
});
/* harmony import */var _managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5983);
/* harmony import */var _push_manager_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(961);


function unregisterPush(r, n) {
    if (_managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].X */.ZP.X()) return _push_manager_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].m().unsubscribe(r, n);
}


}),

}]);
//# sourceMappingURL=570.js.map