function antebachakroba(){
    let natura=document.getElementById("light");
    if(natura.src.match("img/off.png"))
    {natura.src="img/on.png";
document.getElementById("text").innerHTML="ჩაქრობა";
document.getElementById("meme").src="/img/Capture2.PNG";
}
    else{natura.src="img/off.png";
    document.getElementById("text").innerHTML="ანთება";
    document.getElementById("meme").src="/img/Capture.PNG";
}
}