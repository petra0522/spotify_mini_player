function myFunction() {
  document.getElemntById("play/pause-button").innerHTML = "⏸️";
}
var status = "play";
function statusChange() {
  console.log("status changed");
  if (status === "play") {
    request("https://api.spotify.com/v1/me/player/pause", "PUT", "");
    document.getElementById("play/pause-button").innerHTML = "⏸️";
    status = "pause";
    document.getElementById("play/pause-button").innerHTML = "▶️";
  } else {
    status = "play";
    request("https://api.spotify.com/v1/me/player/play", "PUT");
    document.getElementById("play/pause-button").innerHTML = "⏸️";
  }
}
function logprevious() {
  console.log("Klick");
  request("	https://api.spotify.com/v1/me/player/previous", "POST", "").then(() =>  loadImage() );
}
function lognext() {
  console.log("Klick");
  request("https://api.spotify.com/v1/me/player/next", "POST", "").then(() =>  loadImage());
}
function accessToken() {
  localStorage.setItem("token", document.getElementById("token").value);
}

function loadImage() {
  request("https://api.spotify.com/v1/me/player", "GET").then((response) => {
    console.log(response);
    var image = response["item"]["album"]["images"][0]["url"];
    console.log(image);
    document.getElementById("songImage").src= image;
  });
}

function request(url, method, body) {
  // TODO: read the token from localStorage und save in a variable named token
  var token = localStorage.getItem("token");
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
    } else if (response.status === 204) {
      return "";
    } else {
      return response.json();
    }
  });
}