"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addLoadEvent = addLoadEvent;
function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload !== "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        };
    }
}