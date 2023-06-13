let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
//-----------------------------------------
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let newCity = document.querySelector("#new-city");
  newCity.innerHTML = `${searchInput.value}`;

  let city = document.querySelector("#search-input").value;
  let units = "metric";
  let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let showTemp = `${temperature} ℃`;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = showTemp;
}
//---------------------------------------------
