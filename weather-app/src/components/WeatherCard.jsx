import PropTypes from "prop-types";
import "./WeatherCard.css"; // You can style each card separately

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card-container">
      <div className="weather-card">
        <h4>Temperature</h4>
        <p>{weather.current.temp_c}°C</p>
      </div>
      <div className="weather-card">
        <h4>Humidity</h4>
        <p>{weather.current.humidity}%</p>
      </div>
      <div className="weather-card">
        <h4>Condition</h4>
        <p>{weather.current.condition.text}</p>
      </div>
      <div className="weather-card">
        <h4>Wind Speed</h4>
        <p>{weather.current.wind_kph} km/h</p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    current: PropTypes.shape({
      temp_c: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      condition: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      wind_kph: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherCard;
