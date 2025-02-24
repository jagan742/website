var mysong =document.getElementById("mysong")
var icon = document.getElementById("icon")
icon.onclick=function(){
    if(mysong.paused){
        mysong.play()
        icon.src="image/pause.png";

    }
    else{
        mysong.pause();
        icon.src="image/play.png";
    }
    }