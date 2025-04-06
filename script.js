const apiKey = "4cbd82a06881196377802f1d3efedd4e"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name.");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (response.ok) {
      document.getElementById("weatherCard").style.display = "block";
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("temp").textContent = data.main.temp.toFixed(1);
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
    } else {
      alert("City not found.");
      document.getElementById("weatherCard").style.display = "none";
    }
  } catch (err) {
    console.error(err);
    alert("Error fetching weather data.");
  }
}
