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