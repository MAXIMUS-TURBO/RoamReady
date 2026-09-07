
// this react component is a card that displays information 
// about the current weather.

function WeatherCard() {
  return (
    <article className="card weather-card">
      <div className="card-header">
        <div>
          <p className="card-label">CURRENT WEATHER</p>
          <h3>Tokyo</h3>
        </div>

        <span className="weather-icon">☀</span>
      </div>

      <div className="temperature">
        72°
      </div>

      <p className="weather-description">
        Clear skies
      </p>

      <div className="weather-details">
        <span>Feels like 74°</span>
        <span>Humidity 48%</span>
      </div>
    </article>
  )
}

export default WeatherCard