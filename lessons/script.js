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
sideBar.classList.toggle("align-items-center");
// sideBar.parentElement.style.boxShadow ="4px 3px 19px 0px";
sideBar.innerHTML +=
'<a class="px-2 py-1" href="/index.html">Home</a>'+
'<a class="px-2 py-1" href="/lessons/1.html">Introduction</a>'+
'<a class="px-2 py-1" href="/lessons/2.html">How to setup Environment?</a>'+
'<a class="px-2 py-1" href="/lessons/3.html">Where to learn Batch Script?</a>'+
'<a class="px-2 py-1" href="/lessons/4.html">How to open hundred of windows?</a>'+
'<a class="px-2 py-1" href="/lessons/5.html">How to open disk drive?</a>'+
'<a class="px-2 py-1" href="/lessons/6.html">How to trigger keyboard events?</a>'+
'<a class="px-2 py-1" href="/lessons/7.html">How to shutdown/restart computer?</a>'+
'<a class="px-2 py-1" href="/lessons/8.html">How to create files?</a>'+
'<a class="px-2 py-1" href="/lessons/9.html">How to use CPU?</a>'+
'<a class="px-2 py-1" href="/lessons/help.html">Help?</a>';
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