
// this react component is a card that displays information 
// about the current weather.

function WeatherCard({ weather, loading, error }) {
   if (loading) {
    return (
      <article className="card weather-card">
        <p className="card-label">CURRENT WEATHER</p>
        <h3>Loading weather...</h3>
      </article>
    )
  }

  if (error) {
    return (
      <article className="card weather-card">
        <p className="card-label">CURRENT WEATHER</p>
        <h3>Weather unavailable</h3>
        <p className="weather-description">{error}</p>
      </article>
    )
  }

  if (!weather) {
    return (
      <article className="card weather-card">
        <p className="card-label">CURRENT WEATHER</p>
        <h3>Search for a destination</h3>
        <p className="weather-description">
          Weather information will appear here.
        </p>
      </article>
    )
  }
  return (
    <article className="card weather-card">
      <div className="card-header">
        <div>
          <p className="card-label">CURRENT WEATHER</p>
          <h3>{weather.city}, {weather.country}</h3>
        </div>

        <span className="weather-icon">☀</span>
      </div>

      <div className="temperature">
        {weather.temperature}°
      </div>

      <p className="weather-description">
        {weather.description}
      </p>

      <div className="weather-details">
        {/* <span>Feels like 74°</span> */}
        <span>Humidity {weather.humidity}%</span>
      </div>
    </article>
  )
}

export default WeatherCard