// favicon
document.querySelector("head").innerHTML +="<!-- favicon -->";
document.querySelector("head").innerHTML +="<!-- favicon -->";

// next & prev.

const next = document.getElementById("next");
const prev = document.getElementById("prev");

if(next){
    console.log("next")
    var tittle = document.getElementsByTagName("title")[0];
    var anchorn = document.createElement("a");
    anchorn.href = "/lessons/"+(parseInt(
        tittle.innerHTML.split(" || ")[(tittle.innerHTML.split(" || ").length)-1]
    )+1) + ".html";
    next.addEventListener("click", ()=>{
        if(document.getElementById("side_left") && (document.getElementById("side_left").children.length - 1)>(parseInt(tittle.innerHTML.split(" || ")[(tittle.innerHTML.split(" || ").length)-1])+1)){
            if(anchorn.click()){
                anchorn.click();
            } else if(anchorn.focus()){
                anchorn.focus();
            } 
        } else if(!(document.getElementById("side_left"))){
            if(anchorn.click()){
                anchorn.click();
            } else if(anchorn.focus()){
                anchorn.focus();
            } 
        }
    })
}
if(prev){
    console.log("prev")
    var tittle = document.getElementsByTagName("title")[0];
    var anchorp = document.createElement("a");
    if((parseInt(
        tittle.innerHTML.split(" || ")[(tittle.innerHTML.split(" || ").length)-1]
    )-1)!=0){
        anchorp.href = "/lessons/"+(parseInt(
            tittle.innerHTML.split(" || ")[(tittle.innerHTML.split(" || ").length)-1]
        )-1) + ".html";
    } else {
        anchorp.href ="/index.html";
    }
    prev.addEventListener("click", ()=>{
        if(anchorp.click()){
            anchorp.click();
        } else if(anchorp.focus()){
            anchorp.focus();
        }
    })
}
