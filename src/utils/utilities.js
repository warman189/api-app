fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=52.237049&lon=21.017532&appid=0093f8a62b345661f54c254d59b20d01"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    document.querySelector(".city__info").textContent = data.name;
    document.querySelector(".weather__degree").innerHTML =
      Math.round(data.main.temp - 273) + "&deg;";
    document.querySelector(".weather__sky").textContent =
      data.weather[0].description;
    document.querySelector(".date__degree").textContent = `${Math.round(
      data.main.temp_min - 273
    )}${"°C"} ${"/"} ${Math.round(data.main.temp_max - 273)}${"°C"}`;
    document.querySelector(".weather__sky__ico").innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    document.querySelector(".wind").textContent = data.wind.speed;
    document.querySelector(".wind-deg").textContent = data.wind.deg;
    //openweathermap.org/img/wn/01n@2x.png
    https: console.log(data);
  })
  .catch(function () {});
