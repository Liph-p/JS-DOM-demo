window.onload = function(){
    let gallery = document.getElementById("imagegallery");
    let palceholder = document.getElementById("placeholder");
    let description = document.getElementById("description");
    let links = document.getElementsByTagName("a");
    for(let i=0; i<links.length; i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
    }

    // 设置图片变化的函数
    function showPic(whichPic){
        palceholder.src = whichPic.href;
        description.firstChild.nodeValue = whichPic.title;
    }

}
 