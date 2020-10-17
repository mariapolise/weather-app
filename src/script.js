function formatPageDate(date) {
  let year = date.getFullYear();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let dateNumber = date.getDate();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function cityInput(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  getCityData(cityInput.value);
}

function getCityData(response) {
  let city = `q=${response}`;
  let units = `metric`;
  let apiKey = `aff49264e3b244a0afae2d8202fca638`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  axios
    .get(`${apiUrl}${city}&appid=${apiKey}&units=${units}`)
    .then(showCityData);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
  axios
    .get(`${apiUrl}${city}&appid=${apiKey}&units=${units}`)
    .then(showForecast);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(getLocalData);
}

function getLocalData(position) {
  let latitude = `lat=${position.coords.latitude}`;
  let longitude = `lon=${position.coords.longitude}`;
  let units = `metric`;
  let apiKey = `aff49264e3b244a0afae2d8202fca638`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  axios
    .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
    .then(showCityData);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
  axios
    .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
    .then(showForecast);
}

function showCityData(response) {
  let currentCity = document.querySelector("#current-city");
  let currentConditions = document.querySelector("#current-conditions");
  let currentIcon = document.querySelector("#current-icon");
  let city = response.data.name;
  let conditions = response.data.weather[0].description;
  metricTemp = Math.round(response.data.main.temp);
  metricTempMax = Math.round(response.data.main.temp_max);
  metricTempMin = Math.round(response.data.main.temp_min);
  let icon = response.data.weather[0].icon;
  currentCity.innerHTML = `${city}`;
  currentTemp.innerHTML = `${metricTemp}`;
  currentConditions.innerHTML = `${conditions}`;
  currentTempMax.innerHTML = `${metricTempMax}`;
  currentTempMin.innerHTML = `${metricTempMin}`;
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );
  currentIcon.setAttribute("alt", `${conditions} icon`);
  console.log(response.data);
}

function showForecast(response) {
  let firstForecast = response.data.list[7];
  let firstForecastElement = document.querySelector("#first-forecast");
  firstForecastElement.innerHTML = `<span class="first-day">Monday</span>
    <br />
    <span class="first-icon">
    <img class="icon" src="http://openweathermap.org/img/wn/${
      firstForecast.weather[0].icon
    }@2x.png" alt="${firstForecast.weather[0].conditions}>
    </span>
     <br />
    <span class="temp-range temperature"
    >${Math.round(firstForecast.main.temp_max)}°C/${Math.round(
    firstForecast.main.temp_min
  )}°C</span
    >`;
  let secondForecast = response.data.list[15];
  let secondForecastElement = document.querySelector("#second-forecast");
  secondForecastElement.innerHTML = `<span class="second-day">Tuesday</span>
    <br />
    <span class="second-icon">
    <img class="icon" src="http://openweathermap.org/img/wn/${
      secondForecast.weather[0].icon
    }@2x.png" alt="${secondForecast.weather[0].conditions}>
    </span>
    <br />
    <span class="temp-range temperature"
    >${Math.round(secondForecast.main.temp_max)}°C/${Math.round(
    secondForecast.main.temp_min
  )}°C</span
    >`;
  let thirdForecast = response.data.list[23];
  let thirdForecastElement = document.querySelector("#third-forecast");
  thirdForecastElement.innerHTML = `<span class="third-day">Tuesday</span>
    <br />
    <span class="third-icon">
    <img class="icon" src="http://openweathermap.org/img/wn/${
      thirdForecast.weather[0].icon
    }@2x.png" alt="${thirdForecast.weather[0].conditions}>
    </span>
    <br />
    <span class="temp-range temperature"
    >${Math.round(thirdForecast.main.temp_max)}°C/${Math.round(
    thirdForecast.main.temp_min
  )}°C</span
    >`;
  let fourthForecast = response.data.list[31];
  let fourthForecastElement = document.querySelector("#fourth-forecast");
  fourthForecastElement.innerHTML = `<span class="fourth-day">Tuesday</span>
    <br />
    <span class="fourth-icon">
    <img class="icon" src="http://openweathermap.org/img/wn/${
      fourthForecast.weather[0].icon
    }@2x.png" alt="${fourthForecast.weather[0].conditions}>
    </span>
    <br />
    <span class="temp-range temperature"
    >${Math.round(fourthForecast.main.temp_max)}°C/${Math.round(
    fourthForecast.main.temp_min
  )}°C</span
    >`;
  let fifthForecast = response.data.list[39];
  let fifthForecastElement = document.querySelector("#fifth-forecast");
  fifthForecastElement.innerHTML = `<span class="fifth-day">Tuesday</span>
    <br />
    <span class="fifth-icon">
    <img class="icon" src="http://openweathermap.org/img/wn/${
      fifthForecast.weather[0].icon
    }@2x.png" alt="${fifthForecast.weather[0].conditions}>
    </span>
    <br />
    <span class="temp-range temperature"
    >${Math.round(fifthForecast.main.temp_max)}°C/${Math.round(
    fifthForecast.main.temp_min
  )}°C</span
    >`;
  console.log(response.data);
}

function toggleCelcius(event) {
  event.preventDefault();

  currentTemp.innerHTML = Math.round(metricTemp);
  currentTempMax.innerHTML = Math.round(metricTempMax);
  currentTempMin.innerHTML = Math.round(metricTempMin);
  currentTempUnit.innerHTML = `°C`;
  currentTempMaxUnit.innerHTML = `°C`;
  currentTempMinUnit.innerHTML = `°C`;
}
function toggleFahrenheit(event) {
  event.preventDefault();

  let imperialTemp = (metricTemp * 9) / 5 + 32;
  let imperialTempMax = (metricTempMax * 9) / 5 + 32;
  let imperialTempMin = (metricTempMin * 9) / 5 + 32;
  currentTemp.innerHTML = Math.round(imperialTemp);
  currentTempMax.innerHTML = Math.round(imperialTempMax);
  currentTempMin.innerHTML = Math.round(imperialTempMin);
  currentTempUnit.innerHTML = `°F`;
  currentTempMaxUnit.innerHTML = `°F`;
  currentTempMinUnit.innerHTML = `°F`;
}

let currentDate = new Date();
let pageDate = document.querySelector("#page-date");
pageDate.innerHTML = formatPageDate(currentDate);

let metricTemp = null;
let metricTempMax = null;
let metricTempMin = null;

let currentTemp = document.querySelector("#current-temp");
let currentTempUnit = document.querySelector("#current-temp-unit");
let currentTempMax = document.querySelector("#current-temp-max");
let currentTempMaxUnit = document.querySelector("#current-temp-max-unit");
let currentTempMin = document.querySelector("#current-temp-min");
let currentTempMinUnit = document.querySelector("#current-temp-min-unit");

let clickCelcius = document.querySelector("#toggle-celcius");
clickCelcius.addEventListener("click", toggleCelcius);

let clickFahrenheit = document.querySelector("#toggle-fahrenheit");
clickFahrenheit.addEventListener("click", toggleFahrenheit);

let enterCity = document.querySelector("#city-search");
enterCity.addEventListener("submit", cityInput);

let clickLocal = document.querySelector("#local-button");
clickLocal.addEventListener("click", getLocation);

getCityData("Philadelphia");
