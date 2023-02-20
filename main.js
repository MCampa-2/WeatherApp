let input = document.getElementById("input");
let weatherSection = document.getElementById("weatherData");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let description = document.getElementById("description");
let high = document.getElementById("high");
let low = document.getElementById("low");
let loader = document.getElementById("loading");

input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    weatherData();
  }
});


function weatherData(){
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=2e43cd60c29478de79cfa979a37d7832&q=${input.value}&units=imperial&lang=en`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        city.innerHTML = data.name;
        temp.innerHTML = data.main.temp + " &deg;"
        description.innerHTML = data.weather[0].description;
        high.innerHTML = "High " +  data.main.temp_max + " &deg;";
        low.innerHTML = "Low " + data.main.temp_min + " &deg;";
        let icon = data.weather[0].icon;
        const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        let img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        weatherSection.appendChild(img); 
      })
      .catch(error => console.error(error));
      weatherSection.style.display = "block";
}