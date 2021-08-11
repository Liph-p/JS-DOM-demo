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