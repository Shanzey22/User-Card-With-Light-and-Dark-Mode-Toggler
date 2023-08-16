var color=["#111111","white"];
var i=0;
document.querySelector("button").addEventListener("click",function(){  

i=i < color.length ? ++i : 0;
document.querySelector("section").style.background = color[i];
document.querySelector("section .card").style.background = color[i];
document.querySelector("button").style.background = color[i];
document.querySelector(".facebook").style.background = color[i];
document.querySelector(".twitter").style.background = color[i];
document.querySelector(".linkedIn").style.background = color[i];

})