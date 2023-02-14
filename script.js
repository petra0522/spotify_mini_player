function myFunction() {
    document.getElementById("play/pause-button").innerHTML = "⏸️"; 
}
var x = "play"
function getinnerHTML() {
if(x=== "play") {
    document
    x= "pause"
    document.getElementById("play/pause-button").innerHTML = "▶️"
}else{
    x="play"
    document.getElementById("play/pause-button").innerHTML = "⏸️"
}
}