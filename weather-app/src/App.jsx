import { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: "6c4cc17a8b694ccf9c853221252702", // Your API key here
            q: city,
          },
        }
      );
      setWeatherData(response.data);
    } catch {
      // setError("Failed to fetch weather data");
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading data...</p>}

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-cards">
          <WeatherCard weather={weatherData} />
        </div>
      )}
    </div>
  );
};

export default App;
