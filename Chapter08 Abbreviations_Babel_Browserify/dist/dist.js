(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.displayAbbreviations = displayAbbreviations;
function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createTextNode || !document.createElement) {
        return false;
    }
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) {
        return false;
    }
    var defs = [];
    for (var i = 0; i < abbreviations.length; i++) {
        var key = abbreviations[i].innerText;
        defs[key] = abbreviations[i].getAttribute("title");
    }
    var dist = document.createElement("dl");
    for (var _key in defs) {
        var dtitle = document.createElement("dt");
        var ddesc = document.createElement("dd");
        var dtitle_text = document.createTextNode(_key);
        var ddesc_text = document.createTextNode(defs[_key]);
        ddesc.appendChild(ddesc_text);
        dtitle.appendChild(dtitle_text);
        dist.appendChild(dtitle);
        dist.appendChild(ddesc);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dist);
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.displayAccesskeys = displayAccesskeys;
function displayAccesskeys() {
    var links = document.getElementsByTagName("a");
    var akeys = {};
    for (var i = 0; i < links.length; i++) {

        if (!links[i].accessKey) {
            continue;
        }
        var key = links[i].accessKey;
        var aText = links[i].innerText;
        akeys[key] = aText;
    }
    console.log(akeys);
    var list = document.createElement("ul");
    for (var _key in akeys) {
        //for in??????????????????????????????
        //Chrome Opera ????????? for-in ???????????????????????????????????????????????????????????????????????????key???parseFloat???????????????????????????
        //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        //??????????????????????????????????????????????????????????????????
        var item = document.createElement("li");
        var item_text = document.createTextNode(_key + " : " + akeys[_key]);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h3");
    header.appendChild(document.createTextNode("Accesskeys"));
    document.body.appendChild(header);
    document.body.appendChild(list);
}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.displayCitations = displayCitations;
function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++) {
        if (!quotes[i].cite) continue; //??????quotes????????????cite??????
        var link = document.createElement("a"); //????????????a??????
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        //??????link.src??????
        link.href = quotes[i].cite;
        //??????????????????
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //??????quotes???????????????????????????sup????????????
        var quotesChildren = quotes[i].getElementsByTagName("*");
        var elem = quotesChildren[quotesChildren.length - 1];
        elem.appendChild(superscript);
    }
}
},{}],5:[function(require,module,exports){
"use strict";

var _addLoadEvent = require("./addLoadEvent");

var _diaplayAbbreviations = require("./diaplayAbbreviations");

var _displayAccesskeys = require("./displayAccesskeys");

var _displayCitations = require("./displayCitations");

(0, _addLoadEvent.addLoadEvent)(_diaplayAbbreviations.displayAbbreviations);
(0, _addLoadEvent.addLoadEvent)(_displayAccesskeys.displayAccesskeys);
(0, _addLoadEvent.addLoadEvent)(_displayCitations.displayCitations);
},{"./addLoadEvent":1,"./diaplayAbbreviations":2,"./displayAccesskeys":3,"./displayCitations":4}]},{},[5]);
