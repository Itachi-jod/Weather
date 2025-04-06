const apiKey = "228dfb40cf77162a98936f1934bc9fdc";

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
      alert(data.message || "City not found.");
      document.getElementById("weatherCard").style.display = "none";
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Failed to fetch weather data. Check connection or API key.");
  }
}
