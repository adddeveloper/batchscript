var buttonCopy, allof; 
buttonCopy= document.querySelectorAll(".buttonCopy");
allof = [];
function copyTheText(copied_element) {
    navigator.clipboard.writeText(copied_element.value);
}
buttonCopy.forEach((el, index)=>{
    el.addEventListener("click",()=>{
        var text = el.parentElement.children[1]
        copyTheText(text)
    })
});

var sideBar = document.getElementById("side_left");
// sideBar.parentElement.style.boxShadow ="4px 3px 19px 0px";
sideBar.innerHTML +=
'<a class="px-3" href="/index.html">Home</a>'+
'<a class="px-3" href="/lessons/1.html">Introduction</a>'+
'<a class="px-3" href="/lessons/2.html">Setup</a>'+
'<a class="px-3" href="/lessons/3.html">Resources</a>'+
'<a class="px-3" href="/lessons/4.html">Open Start</a>'+
'<a class="px-3" href="/lessons/5.html">Disc</a>'+
'<a class="px-3" href="/lessons/6.html">Keyboard</a>'+
'<a class="px-3" href="/lessons/7.html">Shutdown</a>'+
'<a class="px-3" href="/lessons/help.html">Help</a>';
document.getElementById("in_out").classList = "text-nowrap px-3 buttons m-0 btn-success py-0";
document.getElementById("in_out").style.boxShadow = "0px 0px 0px 0px !important";
document.getElementById("in_out").addEventListener("click",()=>{
    document.getElementById("in_out").parentNode.parentNode.children[1].classList.toggle("d-none");
    document.getElementById("in_out").parentNode.parentNode.classList.toggle("bg-dark");
    // sideBar.parentElement.style.boxShadow ="4px 3px 19px 0px";
    for(var i =0; i <document.getElementById("in_out").children.length; i++){
        document.getElementById("in_out").children[i].classList.toggle("d-none")
    }
});