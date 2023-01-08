const API_KEY = "50905ad6616b339c7b8320ba5b2e6431";

function convertMili(militime) {
  let date = new Date(militime * 1000);
  let hour = date.getHours().toString().padStart(2,"0");
  let minutes = date.getMinutes().toString().padStart(2,"0");

  return hour+":"+minutes;
}

function onGeoOk(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  //const iconUrl = `http://openweathermap.org/img/wn/10d@${icon}.png`;
  console.log(url);
  fetch(url).then(response =>response.json()).then(data =>{
    const weather = document.querySelector("#weather span:nth-child(2)");
    const iconOut = document.querySelector("#weather img");
    const icon = data.weather[0].icon;
    iconOut.src = `http://openweathermap.org/img/w/${icon}.png`;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    weather.innerText = `
      ${data.weather[0].main} ${data.name}\n
      temperature is ${data.main.temp}°C\nit feels like ${data.main.feels_like}°C\n
      sunrise at ${convertMili(sunrise)}\nsunset at ${convertMili(sunset)}
      `;
      //
    // sun.innerText = `sunrise at ${sunrise} sunset at${sunset}`;
  }); //fetch and then get response
  
}

// 온도 추가 data.main[0].feelslike, data.main[0].temp

function onGeoError() {
  alert("can't find you. no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);