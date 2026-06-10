const apiKey = "2cde870a23674fff956f5d34390af5f2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".main").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        const condition = data.weather[0].main.toLowerCase();

        if (condition === "clouds") {
            weatherImg.src = "weather-app-imgs/clouds.png"
        }
        else if (condition === "clear") {
            weatherImg.src = "weather-app-imgs/sunny.png"
        }
        else if (condition === "rain") {
            weatherImg.src = "weather-app-imgs/rain.png"
        }
            else if (condition === "snow") {
            weatherImg.src = "weather-app-imgs/snow.png"
        }
        else if (condition === "thunderstorm") {
            weatherImg.src = "weather-app-imgs/thunderstrom.png"
        }
        else if (condition === "mist") {
            weatherImg.src = "weather-app-imgs/mist.png"
        }
            else if (condition === "drizzle") {
            weatherImg.src = "weather-app-imgs/drizzle.png"
        }
        else {
            weatherImg.src = "weather-app-imgs/sunny.png"
        }

        document.querySelector(".main").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
});

searchBox.addEventListener("keydown",
    function (event) {
        if (event.key === "Enter") {
            checkWeather(searchBox.value);
            searchBox.value = "";
        }
    }
);