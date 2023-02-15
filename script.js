function myFunction() {
  document.getElemntById("play/pause-button").innerHTML = "⏸️";
}
var status = "play";
function statusChange() {
  if ( status === "play") {
    document.getElementById("play/pause-button").innerHTML = "⏸️";
    status = "pause";
    document.getElementById("play/pause-button").innerHTML = "▶️";
  } else {
    status = "play";
    document.getElementById("play/pause-button").innerHTML = "⏸️";
  }
}

