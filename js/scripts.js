function antebachakroba(){
    let natura=document.getElementById("light");
    if(natura.src.match("img/off.png"))
    {natura.src="img/on.png";
document.getElementById("text").innerHTML="ჩაქრობა";}
    else{natura.src="img/off.png";
    document.getElementById("text").innerHTML="ანთება";
}
}