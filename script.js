

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd483315950msh46b9a483e530a8ep1fb964jsn8da65128dc33',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};
const getWeather=(city)=>{
	cityName.innerHTML=city
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+ city, options)
  .then(response => response.json())
  .then(response => {
    console.log(response);

    const location = response.location;
    const current = response.current;

    document.getElementById("location").innerHTML = `${location.name}, ${location.region}, ${location.country}`;
	document.getElementById("location2").innerHTML = `${location.name}`;
    document.getElementById("localtime").innerHTML = ` ${location.localtime}`;
	document.getElementById("latitude").innerHTML = ` ${location.lat}`;
	document.getElementById("longitude").innerHTML = ` ${location.lon}`;
	document.getElementById("tz_id").innerHTML = ` ${location.tz_id}`;
    document.getElementById("last_updated").innerHTML = ` ${current.last_updated}`;

    document.getElementById("temp").innerHTML = `${current.temp_c}°C`;
	document.getElementById("temp2").innerHTML = `${current.temp_c}`;
    document.getElementById("condition").innerHTML = current.condition.text;
    document.getElementById("humidity").innerHTML = `${current.humidity}%`;
	document.getElementById("precip").innerHTML = `${current.precip_mm} mm`;
	document.getElementById("wind_speed").innerHTML = `${current.wind_kph} kph`;
	document.getElementById("pressure").innerHTML = `${current.pressure_mb} mb`;

    document.getElementById("feelslike").innerHTML = `${current.feelslike_c}°C`;
	document.getElementById("feelslike2").innerHTML = `${current.feelslike_c}`;
    document.getElementById("heatindex").innerHTML = `${current.heatindex_c}°C`;
    document.getElementById("windchill").innerHTML = `${current.windchill_c}°C`;
    document.getElementById("gust").innerHTML = `${current.gust_kph} kph`;
    document.getElementById("visibility").innerHTML = `${current.vis_km} km`;
    document.getElementById("dewpoint").innerHTML = `${current.dewpoint_c}°C`
    document.getElementById("is_day").innerHTML = current.is_day ? "Yes" : "No";
	document.getElementById("wind_dir").innerHTML = `${current.wind_dir} (${current.wind_degree}°)`;
	document.getElementById("uv").innerHTML = current.uv;
    

  })
  .catch(err => console.error("Error:", err));

}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

// ===========================

const commonCities = ["Shanghai", "Boston", "Lucknow", "Kolkata"];

commonCities.forEach(city => {
  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
    .then(response => response.json())
    .then(data => {
      const current = data.current;
      const row = document.getElementById(city);

      row.innerHTML += `
        <td>${current.temp_c}°C</td>
        <td>${current.condition.text}</td>
        <td>${current.precip_mm} mm</td>
        <td>${current.humidity}%</td>
        <td>${current.feelslike_c}°C</td>
        <td>${current.heatindex_c}°C</td>
      `;
    })
    .catch(err => {
      console.error(`Failed to fetch weather for ${city}:`, err);
    });
});