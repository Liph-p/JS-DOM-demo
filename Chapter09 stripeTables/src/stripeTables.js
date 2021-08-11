function stripeTables(){
    let table = document.getElementsByTagName("table")
    let odd,rows;
    for(let i=0;i<table.length;i++){
        odd = false;
        rows = table[i].getElementsByTagName("tr");
        for(let j=0; j<rows.length; j++){
            if(!odd){
                rows[j].style.backgroundColor = "#ffc";
                odd = !odd;
            }else{
                odd = !odd;
            }
        }
        
    }
}
addLoadEvent(stripeTables);
