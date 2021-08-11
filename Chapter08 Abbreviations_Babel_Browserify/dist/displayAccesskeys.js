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