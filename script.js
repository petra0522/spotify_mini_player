function myFunction() {
  document.getElemntById("play/pause-button").innerHTML = "⏸️";
}
var status = "play";
function statusChange() {
  console.log("status changed");
  if (status === "play") {
    request("https://api.spotify.com/v1/me/player/pause","PUT","")
    document.getElementById("play/pause-button").innerHTML = "⏸️";
    status = "pause";
    document.getElementById("play/pause-button").innerHTML = "▶️";
  } else {
    status = "play";
    var body = {
      "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
      "offset": {
        "position": 5
      },
      "position_ms": 0
    }
    request("https://api.spotify.com/v1/me/player/play","PUT",body)
    document.getElementById("play/pause-button").innerHTML = "⏸️";
  }
}
function logprevious () {
console.log("Klick");
request("	https://api.spotify.com/v1/me/player/previous", "POST", "");
}
function lognext () {
  console.log("Klick");
  request ("https://api.spotify.com/v1/me/player/next", "POST", "");
  }
function accessToken() {
  localStorage.setItem("token", document.getElementById("token").value);
}
 function request(url,method,body) {
  // TODO: read the token from localStorage und save in a variable named token
  var token = localStorage.getItem("token")
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer " + Token);
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



