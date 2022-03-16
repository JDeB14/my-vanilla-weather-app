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

  let weatherDescription = response.data.weather[0].main;
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

  function displayWeatherIconAndChanges() {
    let icon = document.querySelector(".sun");

    if (weatherDescription == "Clouds") {
      icon.innerHTML = "⛅️";
      document.body.style.backgroundImage = "url('../images+/clouds3.jpg')";
      audio.setAttribute("src", "../images+/clearsky.wav");
    } else if (weatherDescription == "Clear") {
      icon.innerHTML = "☀️";
      document.body.style.backgroundImage = "url('../images+/mainbgphoto.jpg')";
      audio.setAttribute("src", "../images+/clearsky.wav");
    } else if (
      weatherDescription == "Rain" ||
      weatherDescription == "Drizzle"
    ) {
      icon.innerHTML = "🌧";
      document.body.style.backgroundImage = "url('../images+/rain.jpg')";
      audio.setAttribute("src", "../images+/rainsound.wav");
      h6.classList.remove("color");
      h6.classList.add("wheat");
      h3.classList.remove("default-color");
      h3.classList.add("e3");
      h1.classList.remove("default-color");
      h1.classList.add("e3");
      mph.classList.remove("mph");
      mph.classList.add("e3");
      description.classList.remove("description");
      description.classList.add("wheat");
      for (var i = 0; i < li.length; i++) {
        li[i].classList.remove("color");
        li[i].classList.add("ffb");
      }
      for (var i = 0; i < 2; i++) {
        percent[i].classList.remove("percent");
        tempClass[i].classList.remove("temp");
        percent[i].classList.add("e3");
        tempClass[i].classList.add("e3");
      }
    } else if (weatherDescription == "Thunderstorm") {
      icon.innerHTML = "⛈";
      document.body.style.backgroundImage = "url('../images+/storm1.jpg')";
      audio.setAttribute("src", "../images+/thunderstorm.wav");
      h6.classList.remove("color");
      h6.classList.add("wheat");
      h3.classList.remove("default-color");
      h3.classList.add("e3");
      h1.classList.remove("default-color");
      h1.classList.add("e3");
      mph.classList.remove("mph");
      mph.classList.add("e3");
      description.classList.remove("description");
      description.classList.add("wheat");
      for (var i = 0; i < li.length; i++) {
        li[i].classList.remove("color");
        li[i].classList.add("ffb");
      }
      for (var i = 0; i < 2; i++) {
        percent[i].classList.remove("percent");
        tempClass[i].classList.remove("temp");
        percent[i].classList.add("e3");
        tempClass[i].classList.add("e3");
      }
    } else if (weatherDescription == "Snow") {
      icon.innerHTML = "🌨";
      document.body.style.backgroundImage = "url('../images+/snow2.jpg')";
      audio.setAttribute("src", "../images+/snowsteps.wav");
    } else if (weatherDescription == "Tornado") {
      icon.innerHTML = "🌪";
      document.body.style.backgroundImage = "url('../images+/tornado.jpg')";
      audio.setAttribute("src", "../images+/tornado.wav");
      h3.style.color = "white";
      h1.style.color = "white";
      h6.style.color = "wheat";
      mph.style.color = "#e8630a";
      forecast.style.color = "white";
      card.style.borderColor = "#e8630a";
      topHalf.style.borderColor = "#00bdaa";
      let name = document.querySelector("#name");
      name.style.color = "white";

      description.style.color = "wheat";
      for (var i = 0; i < li.length; i++) {
        li[i].style.color = "#00bdaa";
      }
      for (var i = 0; i < 2; i++) {
        percent[i].style.color = "#e8630a";
        tempClass[i].style.color = "#e8630a";
      }
      for (var i = 0; i < 2; i++) {
        buttons[i].style.backgroundColor = "#e8630a";
      }
      for (var i = 0; i < dayGroup.length; i++) {
        dayGroup[i].style.color = "wheat";
      }
      for (var i = 0; i < hlGroup.length; i++) {
        hlGroup[i].style.color = "#00bdaa";
      }
    } else {
      icon.innerHTML = "🌫";
      audio.setAttribute("src", "../images+/clearsky.wav");
      document.body.style.backgroundImage = "url('../images+/fog.jpg')";
      for (var i = 0; i < 2; i++) {
        buttons[i].style.backgroundColor = "#11468f";
        let time = document.querySelector("#time");
        time.style.color = "#11468f";
      }
    }
  }
  displayWeatherIconAndChanges();
}
let description = document.querySelector(".description");
let audio = document.querySelector("#audio");
let h6 = document.querySelector("h6");
let li = document.querySelectorAll("li");
let percent = document.querySelectorAll(".percent");
let tempClass = document.querySelectorAll(".temp");
let mph = document.querySelector(".mph");
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");
let buttons = document.querySelectorAll(".buttons");
let card = document.querySelector(".card");
let topHalf = document.querySelector(".top-half");
let forecast = document.querySelector(".forecast");
let dayGroup = document.querySelectorAll(".day");
let hlGroup = document.querySelectorAll(".HL");

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
