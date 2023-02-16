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
  localStorage.setItem("token", document.getElementById("token").value);
}

function request(url, method, body) {
  // TODO: read the token from localStorage und save in a variable named token

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer " + token);
  const data = {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  };
  return fetch(url, data).then((response) => {
    if (response.status === 401) {
      alert("Token is expired! Please enter a new token.");
    }
    return response.json();
  });
}
