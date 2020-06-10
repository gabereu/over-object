"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function over(object) {
    var overFrom = __assign({}, object);
    Object.defineProperty(overFrom, 'forEach', {
        value: function (callback) {
            for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                callback(value, key);
            }
        },
        writable: false
    });
    Object.defineProperty(overFrom, 'map', {
        value: function (callback) {
            var mappedObject = {};
            for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                mappedObject[key] = callback(value, key);
            }
            return over(mappedObject);
        },
        writable: false
    });
    Object.defineProperty(overFrom, 'filter', {
        value: function (callback) {
            var filteredObject = {};
            for (var _i = 0, _a = Object.entries(overFrom); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                var response = callback(value, key);
                if (response) {
                    filteredObject[key] = value;
                }
            }
            return over(filteredObject);
        },
        writable: false
    });
    Object.defineProperty(overFrom, 'find', {
        value: function (callback) {
            for (var _i = 0, _a = Object.entries(overFrom); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                var response = callback(value, key);
                if (response) {
                    return value;
                }
            }
            return null;
        },
        writable: false
    });
    return overFrom;
}
exports.default = over;
