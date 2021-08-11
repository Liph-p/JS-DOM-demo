function styleHeaderSiblings(){
    let headers = document.getElementsByTagName("h1");
    let elem;
    for(let i=0;i<headers.length;i++){        
        elem = getNextElement(headers[i].nextSibling)
        console.log(elem);
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
    }    
}
function getNextElement(node){
        if(node.nodeType === 1){
            return node;
        }
        if(node.nextSibling){
            return getNextElement(node.nextSibling)
        }
        return null;
    }
addLoadEvent(styleHeaderSiblings);