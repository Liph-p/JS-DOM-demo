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
        //for in遍历对象有顺序的问题
        //Chrome Opera 中使用 for-in 语句遍历对象属性时会遵循一个规律，它们会先提取所有key的parseFloat值为非负整数的属性
        //然后根据数字顺序对属性排序首先遍历出来，然后按照对象定义的顺序遍历余下的所有属性。
        //其它浏览器则完全按照对象定义的顺序遍历属性。
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
        if (!quotes[i].cite) continue; //判断quotes中是否有cite属性
        var link = document.createElement("a"); //创建一个a标签
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        //赋值link.src属性
        link.href = quotes[i].cite;
        //创建一个上标
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //查找quotes中最后一个元素，将sup插入进去
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
