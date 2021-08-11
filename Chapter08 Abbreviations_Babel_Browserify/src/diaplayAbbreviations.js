export function displayAbbreviations(){
    if(!document.getElementsByTagName || !document.createTextNode || !document.createElement){
        return false;
    }
    let abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1){
        return false;
    }
    let defs = [];            
    for(let i=0; i<abbreviations.length; i++){
        let key = abbreviations[i].innerText;
        defs[key] = abbreviations[i].getAttribute("title");        
    }
    let dist = document.createElement("dl");
    for(let key in defs){
        let dtitle = document.createElement("dt");
        let ddesc = document.createElement("dd")
        let dtitle_text = document.createTextNode(key);
        let ddesc_text = document.createTextNode(defs[key]);
        ddesc.appendChild(ddesc_text);
        dtitle.appendChild(dtitle_text);
        dist.appendChild(dtitle);
        dist.appendChild(ddesc);            
    }
    let header = document.createElement("h2");
    let header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dist);    
}