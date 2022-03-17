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

let icon = document.querySelector(".sun");
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
let card = document.querySelector("#card");
let topHalf = document.querySelector(".top-half");
let forecast = document.querySelector(".forecast");
let dayGroup = document.querySelectorAll(".day");
let hlGroup = document.querySelectorAll(".HL");

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
    function setDefaultStyling() {
      h6.setAttribute("class", "color");
      h3.setAttribute("class", "default-color");
      h1.setAttribute("class", "default-color");
      mph.setAttribute("class", "mph");
      description.setAttribute("class", "description");
      card.classList.remove("card");
      for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("class", "color");
      }
      for (var i = 0; i < 2; i++) {
        percent[i].setAttribute("class", "percent");
        tempClass[i].setAttribute("class", "temp");
      }

      let time = document.querySelector("#time");
      time.style.color = "wheat";
      forecast.style.color = "#ffb319";
      card.style.borderColor = "#ffb319";
      topHalf.style.borderColor = "wheat";
      let name = document.querySelector("#name");
      name.style.color = "#ffb319";
      for (var i = 0; i < 2; i++) {
        buttons[i].style.backgroundColor = "transparent";
      }
      for (var i = 0; i < dayGroup.length; i++) {
        dayGroup[i].style.color = "#ffb319";
      }
      for (var i = 0; i < hlGroup.length; i++) {
        hlGroup[i].style.color = "#ffb319";
      }
    }

    function rainStyling() {
      document.body.style.backgroundImage = "url('../images+/rain.jpg')";
      audio.setAttribute("src", "../images+/rainsound.wav");
      h6.setAttribute("class", "wheat");
      h3.setAttribute("class", "e3");
      h1.setAttribute("class", "e3");
      mph.setAttribute("class", "e3");
      description.setAttribute("class", "wheat");
      for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("class", "ffb");
      }
      for (var i = 0; i < 2; i++) {
        percent[i].setAttribute("class", "e3");
        tempClass[i].setAttribute("class", "e3");
      }
    }
    function thunderstormStyling() {
      document.body.style.backgroundImage = "url('../images+/storm1.jpg')";
      audio.setAttribute("src", "../images+/thunderstorm.wav");
      h6.setAttribute("class", "wheat");
      h3.setAttribute("class", "e3");
      h1.setAttribute("class", "e3");
      mph.setAttribute("class", "e3");
      description.setAttribute("class", "wheat");
      for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("class", "ffb");
      }
      for (var i = 0; i < 2; i++) {
        percent[i].setAttribute("class", "e3");
        tempClass[i].setAttribute("class", "e3");
      }
    }

    function snowStyling() {
      document.body.style.backgroundImage = "url('../images+/snow2.jpg')";
      audio.setAttribute("src", "../images+/snowsteps.wav");
      card.classList.add("card");
    }

    function tornadoStyling() {
      document.body.style.backgroundImage = "url('../images+/tornado.jpg')";
      audio.setAttribute("src", "../images+/tornado.wav");
      h6.setAttribute("class", "wheat");
      h3.setAttribute("class", "white");
      h1.setAttribute("class", "white");
      mph.setAttribute("class", "e8");
      for (var i = 0; i < 2; i++) {
        percent[i].setAttribute("class", "e8");
        tempClass[i].setAttribute("class", "e8");
      }
      for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("class", "bdaa");
      }
      forecast.style.color = "white";
      card.style.borderColor = "#e8630a";
      topHalf.style.borderColor = "#00bdaa";
      let name = document.querySelector("#name");
      name.style.color = "white";
      description.style.color = "wheat";
      for (var i = 0; i < 2; i++) {
        buttons[i].style.backgroundColor = "#e8630a";
      }
      for (var i = 0; i < dayGroup.length; i++) {
        dayGroup[i].style.color = "wheat";
      }
      for (var i = 0; i < hlGroup.length; i++) {
        hlGroup[i].style.color = "#00bdaa";
      }
    }

    function othersStyling() {
      audio.setAttribute("src", "../images+/clearsky.wav");
      document.body.style.backgroundImage = "url('../images+/fog.jpg')";
      for (var i = 0; i < 2; i++) {
        buttons[i].style.backgroundColor = "#11468f";
        let time = document.querySelector("#time");
        time.style.color = "#11468f";
      }
    }

    if (weatherDescription == "Clouds") {
      icon.innerHTML = "⛅️";
      document.body.style.backgroundImage = "url('../images+/clouds3.jpg')";
      audio.setAttribute("src", "../images+/clearsky.wav");
      setDefaultStyling();
    } else if (weatherDescription == "Clear") {
      icon.innerHTML = "☀️";
      document.body.style.backgroundImage = "url('../images+/mainbgphoto.jpg')";
      audio.setAttribute("src", "../images+/clearsky.wav");
      setDefaultStyling();
    } else if (
      weatherDescription == "Rain" ||
      weatherDescription == "Drizzle"
    ) {
      icon.innerHTML = "🌧";
      setDefaultStyling();
      rainStyling();
    } else if (weatherDescription == "Thunderstorm") {
      icon.innerHTML = "⛈";
      setDefaultStyling();
      thunderstormStyling();
    } else if (weatherDescription == "Snow") {
      icon.innerHTML = "🌨";
      setDefaultStyling();
      snowStyling();
    } else if (weatherDescription == "Tornado") {
      icon.innerHTML = "🌪";
      setDefaultStyling();
      tornadoStyling();
    } else {
      icon.innerHTML = "🌫";
      setDefaultStyling();
      othersStyling();
    }
  }
  displayWeatherIconAndChanges();
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

//Fahrenheit to Celsius
function convertTemp() {
  let mainTemp = document.querySelector("#main-temp");
  let degrees = document.querySelector("#degrees");
  let clickedDegrees = document.querySelector("#clickedDegrees");

  if (clickedDegrees.innerHTML == "°C") {
    let celsius = Math.round((mainTemp.innerHTML - 32) * 0.5556);
    mainTemp.innerHTML = celsius;
    degrees.innerHTML = clickedDegrees.innerHTML;
    clickedDegrees.innerHTML = `°F`;
  } else if (clickedDegrees.innerHTML == "°F") {
    let fahrenheit = Math.round((mainTemp.innerHTML * 9) / 5 + 32);
    mainTemp.innerHTML = fahrenheit;
    degrees.innerHTML = clickedDegrees.innerHTML;
    clickedDegrees.innerHTML = `°C`;
  }
}
let clickedDegrees = document.querySelector("#clickedDegrees");
clickedDegrees.addEventListener("click", convertTemp);
