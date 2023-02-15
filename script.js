function myFunction() {
  document.getElemntById("play/pause-button").innerHTML = "⏸️";
}
var status = "play";
function statusChange() {
  console.log("status changed");
  if (status === "play") {
    document.getElementById("play/pause-button").innerHTML = "⏸️";
    status = "pause";
    document.getElementById("play/pause-button").innerHTML = "▶️";
  } else {
    status = "play";
    document.getElementById("play/pause-button").innerHTML = "⏸️";
  }
}
function log() {
  console.log("Klick");
}
function accessToken() {
     localStorage.setItem("token", document.getElementById("token").value );
}
