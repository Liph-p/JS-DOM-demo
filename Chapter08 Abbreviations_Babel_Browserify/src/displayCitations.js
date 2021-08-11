export function displayCitations(){
    let quotes = document.getElementsByTagName("blockquote");
    for(let i=0; i<quotes.length; i++){
        if(!quotes[i].cite) continue;//判断quotes中是否有cite属性
        let link = document.createElement("a");//创建一个a标签
        let link_text = document.createTextNode("source");
        link.appendChild(link_text);
        //赋值link.src属性
        link.href = quotes[i].cite;
        //创建一个上标
        let superscript = document.createElement("sup");
        superscript.appendChild(link);
        //查找quotes中最后一个元素，将sup插入进去
        let quotesChildren = quotes[i].getElementsByTagName("*");
        let elem = quotesChildren[quotesChildren.length - 1];
        elem.appendChild(superscript);
        
    }
}
