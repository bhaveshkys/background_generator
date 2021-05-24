var color1= document.getElementById("color1");
var color2= document.getElementById ("color2");

var text=document.getElementById("text");
var body=document.getElementById("gradient")

function color_listen( x){
    body.style.background=
    " linear-gradient(to right, "
    +color1.value
    +" ,"
    +color2.value
    +")";
    text.innerHTML=body.style.background;
}

color1.addEventListener("input",color_listen);

color2.addEventListener("input",color_listen);