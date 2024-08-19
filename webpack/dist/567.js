"use strict";
(self["webpackChunkexample_builtin_swc_loader"] = self["webpackChunkexample_builtin_swc_loader"] || []).push([[567],{

/***/ 5567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logPurchase: () => (/* binding */ logPurchase)
/* harmony export */ });
/* harmony import */ var _managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3299);
/* harmony import */ var _common_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8614);
/* harmony import */ var _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1296);
/* harmony import */ var _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9966);
/* harmony import */ var _triggers_models_trigger_events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2046);
/* harmony import */ var _triggers_triggers_provider_factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9793);
/* harmony import */ var _util_validation_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5487);
/* harmony import */ var _common_event_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(564);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}







function logPurchase(o, n, t, D, u) {
    if (!_managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.X()) return !1;
    if (null == t && (t = "USD"), null == D && (D = 1), null == o || o.length <= 0) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.error('logPurchase requires a non-empty productId, got "'.concat(o, '", ignoring.')), !1;
    if (!(0,_util_validation_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .validateCustomString */ .Dz)(o, "log purchase", "the purchase name")) return !1;
    if (null == n || isNaN(parseFloat(n.toString()))) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.error("logPurchase requires a numeric price, got ".concat(n, ", ignoring.")), !1;
    var a = parseFloat(n.toString()).toFixed(2);
    if (null == D || isNaN(parseInt(D.toString()))) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.error("logPurchase requires an integer quantity, got ".concat(D, ", ignoring.")), !1;
    var g = parseInt(D.toString());
    if (g < 1 || g > _common_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .MAX_PURCHASE_QUANTITY */ .$k) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.error("logPurchase requires a quantity >1 and <".concat(_common_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .MAX_PURCHASE_QUANTITY */ .$k, ", got ").concat(g, ", ignoring.")), !1;
    t = null != t ? t.toUpperCase() : t;
    if (-1 === [
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTC",
        "BTN",
        "BWP",
        "BYR",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CUC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EEK",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GGP",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "IMP",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JEP",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KMF",
        "KPW",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LTL",
        "LVL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRO",
        "MTL",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "STD",
        "SVC",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "UYU",
        "UZS",
        "VEF",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XAG",
        "XAU",
        "XCD",
        "XDR",
        "XOF",
        "XPD",
        "XPF",
        "XPT",
        "YER",
        "ZAR",
        "ZMK",
        "ZMW",
        "ZWL"
    ].indexOf(t)) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.error("logPurchase requires a valid currencyCode, got ".concat(t, ", ignoring.")), !1;
    var _ot = _sliced_to_array((0,_util_validation_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .validateCustomProperties */ .fB)(u, "logPurchase", "purchaseProperties", 'log purchase "'.concat(o, '"'), "purchase"), 2), P = _ot[0], R = _ot[1];
    if (!P) return !1;
    var c = _managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.ir();
    if (c && c.Dr(o)) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.info('Purchase "'.concat(o, '" is blocklisted, ignoring.')), !1;
    var l = _common_event_logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.q(_shared_lib_index_js__WEBPACK_IMPORTED_MODULE_5__/* .EventTypes */ .w.Pr, {
        pid: o,
        c: t,
        p: a,
        q: g,
        pr: R
    });
    if (l.L) {
        _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.info("Logged ".concat(g, " purchase").concat(g > 1 ? "s" : "", ' of "').concat(o, '" for ').concat(t, " ").concat(a, "."));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = l.ge[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _$r = _step.value;
                _triggers_triggers_provider_factory_js__WEBPACK_IMPORTED_MODULE_6__/* .TriggersProviderFactory */ .B.rr().fe(_triggers_models_trigger_events_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.Rr, [
                    o,
                    u
                ], _$r);
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
    return l.L;
}


/***/ })

}]);