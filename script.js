//IP address
fetch("https://api.ipify.org?format=json")
  .then((data) => {
    return data.json();
  })
  .then((actualdata) => {
    document.getElementById("btn").onclick = function () {
      document.getElementById("status").innerHTML = `${actualdata.ip}`;
      document.getElementById("status").style.textDecoration = "2px underline";
    };
  })
  .catch((error) => {
    console.log(error);
  });

//latitude and longitude
navigator.geolocation.getCurrentPosition(success);
function success(pos) {
  var lat = pos.coords.latitude;
  var lon = pos.coords.longitude;
  document.getElementById("lat").onclick = function () {
    document.getElementById("lati").innerHTML = `${lat} &deg;`;
    document.getElementById("lati").style.textDecoration = "2px underline";
  };

  document.getElementById("long").onclick = function () {
    document.getElementById("log").innerHTML = `${lon} &deg;`;
    document.getElementById("log").style.textDecoration = "2px underline";
  };
}
