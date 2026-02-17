let count = 0;
let display = document.getElementById("count");
function increase(){
    count++;
    display.innerText = count;
}
function decrease(){
    count--;
    display.innerText = count;
}
function reset(){
    count = 0;
    display.innerText = count;
}