//Date and Time
let currentTime = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = days[currentTime.getDay()];
let month = months[currentTime.getMonth()];
let date = currentTime.getDate();
let time = currentTime.toLocaleTimeString(undefined, {
  hour: "numeric",
  minute: "2-digit",
});
document.querySelector("#time").innerHTML = `${time}`;
document.querySelector("h6").innerHTML = `${day}, ${month} ${date}`;

//Search Engine
let searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  search(city);
}

//On load, show Memphis weather condition
search("Memphis");

function search(city) {
  let apiKey = "10cecfc6ca6c9a59ad2246de5dec6a11";
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(weatherApiUrl).then(displayCityWeather);
}

function displayCityWeather(response) {
  let cityName = response.data.name;
  document.querySelector("#searched-city").innerHTML = cityName;

  let currentTemp = Math.round(response.data.main.temp);
  document.querySelector("#main-temp").innerHTML = currentTemp;

  let weatherDescription = "Thunderstorm"; //response.data.weather[0].main;
  document.querySelector("p").innerHTML = weatherDescription;

  let feelsLike = Math.round(response.data.main.feels_like);
  document.querySelector("#feels-like").innerHTML = `${feelsLike}°`;

  let tempMax = Math.round(response.data.main.temp_max);
  document.querySelector("#currentHigh").innerHTML = `${tempMax}°`;

  //let tempMin = Math.round(response.data.main.temp_min);
  //document.querySelector("#currentLow").innerHTML = `${tempMin}°`;

  let humidity = response.data.main.humidity;
  document.querySelector("#humidity-percentage").innerHTML = `${humidity}%`;

  let windSpeed = Math.round(response.data.wind.speed);
  document.querySelector("#wind").innerHTML = `${windSpeed} MPH`;

  function displayWeatherIcon() {
    let icon = document.querySelector(".sun");

    if (weatherDescription == "Clouds") {
      icon.innerHTML = "⛅️";
    } else if (weatherDescription == "Clear") {
      icon.innerHTML = "☀️";
    } else if (
      weatherDescription == "Rain" ||
      weatherDescription == "Drizzle"
    ) {
      icon.innerHTML = "🌧";
    } else if (weatherDescription == "Thunderstorm") {
      icon.innerHTML = "⛈";
    } else if (weatherDescription == "Snow") {
      icon.innerHTML = "🌨";
    } else if (weatherDescription == "Tornado") {
      icon.innerHTML = "🌪";
    } else {
      icon.innerHTML = "🌫";
    }
  }
  let audio = document.querySelector("#audio");
  let h6 = document.querySelector("h6");
  let li = document.querySelectorAll("li");
  let percent = document.querySelectorAll(".percent");
  let tempClass = document.querySelectorAll(".temp");
  let mph = document.querySelector(".mph");
  let h3 = document.querySelector("h3");
  let h1 = document.querySelector("h1");

  function bgImgChange() {
    if (weatherDescription == "Clear") {
      document.body.style.backgroundImage = "url('../images+/mainbgphoto.jpg')";
    } else if (weatherDescription == "Thunderstorm") {
      document.body.style.backgroundImage = "url('../images+/storm1.jpg')";
      audio.setAttribute("src", "../images+/thunderstorm.wav");
      h6.style.color = "wheat";
      h3.style.color = "#e3e3e3";
      h1.style.color = "#e3e3e3";
      for (var i = 0; i < li.length; i++) {
        li[i].style.color = "#ffb319";
      }
    } else if (
      weatherDescription == "Rain" ||
      weatherDescription == "Drizzle"
    ) {
      document.body.style.backgroundImage = "url('../images+/rain.jpg')";
      audio.setAttribute("src", "../images+/rainsound.wav");
      h6.style.color = "wheat";
      mph.style.color = "#e3e3e3";
      for (var i = 0; i < li.length; i++) {
        li[i].style.color = "#ffb319";
      }
      for (var i = 0; i < 2; i++) {
        percent[i].style.color = "#e3e3e3";
        tempClass[i].style.color = "#e3e3e3";
      }
    } else if (weatherDescription == "Tornado") {
      document.body.style.backgroundImage = "url('../images+/tornado.jpg')";
      audio.setAttribute("src", "../images+/tornado.wav");
    } else if (weatherDescription == "Snow") {
      document.body.style.backgroundImage = "url('../images+/snow2.jpg')";
      audio.setAttribute("src", "../images+/snowsteps.wav");
    } else if (weatherDescription == "Clouds") {
      document.body.style.backgroundImage = "url('../images+/clouds3.jpg')";
    } else {
      document.body.style.backgroundImage = "url('../images+/fog.jpg')";
    }
  }

  displayWeatherIcon();
  bgImgChange();
}

//Navigator Location Button
let locationButton = document.querySelector("#locationButton");
locationButton.addEventListener("click", getCoords);

function getCoords(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "10cecfc6ca6c9a59ad2246de5dec6a11";
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(weatherApiUrl).then(displayCityWeather);
}
