"use strict";
(self['webpackChunkexample_builtin_swc_loader'] = self['webpackChunkexample_builtin_swc_loader'] || []).push([["605"], {
"2353": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  logCustomEvent: function() { return logCustomEvent; }
});
/* harmony import */var _managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5983);
/* harmony import */var _common_event_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7654);
/* harmony import */var _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9960);
/* harmony import */var _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7486);
/* harmony import */var _triggers_models_trigger_events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(176);
/* harmony import */var _triggers_triggers_provider_factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4549);
/* harmony import */var _util_validation_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5143);
/* harmony import */var _common_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9732);
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







function logCustomEvent(t, o) {
    if (!_managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].X */.ZP.X()) return !1;
    if (null == t || t.length <= 0) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */.Z.error('logCustomEvent requires a non-empty eventName, got "'.concat(t, '". Ignoring event.')), !1;
    if (!(0,_util_validation_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .validateCustomString */.zM)(t, "log custom event", "the event name")) return !1;
    var _ot = _sliced_to_array((0,_util_validation_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .validateCustomProperties */.lg)(o, _common_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .LOG_CUSTOM_EVENT_STRING */._P, "eventProperties", 'log custom event "'.concat(t, '"'), "event"), 2), n = _ot[0], m = _ot[1];
    if (!n) return !1;
    var g = _managers_braze_instance_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ir */.ZP.ir();
    if (g && g.me(t)) return _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].info */.Z.info('Custom Event "'.concat(t, '" is blocklisted, ignoring.')), !1;
    var f = _common_event_logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].q */.Z.q(_shared_lib_index_js__WEBPACK_IMPORTED_MODULE_5__/* .EventTypes.CustomEvent */.G.CustomEvent, {
        n: t,
        p: m
    });
    if (f.L) {
        _shared_lib_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].info */.Z.info('Logged custom event "'.concat(t, '".'));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = f.ge[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _$e = _step.value;
                _triggers_triggers_provider_factory_js__WEBPACK_IMPORTED_MODULE_6__/* .TriggersProviderFactory.rr */.n.rr().fe(_triggers_models_trigger_events_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].ue */.Z.ue, [
                    t,
                    o
                ], _$e);
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
    return f.L;
}


}),

}]);
//# sourceMappingURL=605.js.map