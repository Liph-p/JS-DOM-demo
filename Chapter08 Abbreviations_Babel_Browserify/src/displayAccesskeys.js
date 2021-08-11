export function displayAccesskeys(){
    let links = document.getElementsByTagName("a");
    let akeys = {};
    for(let i=0; i<links.length; i++){

        if(!links[i].accessKey){
            continue;
        }      
        let key = links[i].accessKey;
        let aText = links[i].innerText;
        akeys[key] = aText;        
    }
    console.log(akeys);
    let list = document.createElement("ul");
    for(let key in akeys){//for in遍历对象有顺序的问题
        //Chrome Opera 中使用 for-in 语句遍历对象属性时会遵循一个规律，它们会先提取所有key的parseFloat值为非负整数的属性
        //然后根据数字顺序对属性排序首先遍历出来，然后按照对象定义的顺序遍历余下的所有属性。
        //其它浏览器则完全按照对象定义的顺序遍历属性。
        let item = document.createElement("li")
        let item_text = document.createTextNode(key + " : " + akeys[key]);
        item.appendChild(item_text);
        list.appendChild(item);
                
    }
    let header = document.createElement("h3");
    header.appendChild(document.createTextNode("Accesskeys"));
    document.body.appendChild(header);
    document.body.appendChild(list);
    

}
