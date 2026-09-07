
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✈</span>
          RoamReady
        </div>

        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#trips">My Trips</a>
          <a href="#explore">Explore</a>
        </div>

        <button className="profile-button">TR</button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">YOUR TRAVEL COMMAND CENTER</p>

            <h1>
              Plan less.
              <br />
              <span>Experience more.</span>
            </h1>

            <p className="hero-description">
              Organize your trips, monitor destinations, check the weather,
              and keep everything you need for your journey in one place.
            </p>

            <button className="primary-button">
              Plan a Trip
            </button>
          </div>
        </section>

        <section className="dashboard" id="dashboard">
          <div className="section-heading">
            <div>
              <p className="section-label">YOUR DASHBOARD</p>
              <h2>Ready for your next adventure?</h2>
            </div>

            <button className="secondary-button">
              View all trips
            </button>
          </div>

          <div className="dashboard-grid">
            <article className="card trip-card">
              <div className="card-header">
                <div>
                  <p className="card-label">UPCOMING TRIP</p>
                  <h3>Tokyo, Japan</h3>
                </div>

                <span className="card-icon">✈</span>
              </div>

              <p className="trip-date">October 12 – October 20</p>

              <div className="trip-progress">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <span>28 days away</span>
              </div>

              <button className="card-link">
                View itinerary →
              </button>
            </article>

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

            <article className="card activity-card">
              <div className="card-header">
                <div>
                  <p className="card-label">NEXT ACTIVITY</p>
                  <h3>Shibuya Crossing</h3>
                </div>

                <span className="card-icon">📍</span>
              </div>

              <p className="activity-time">Today · 3:00 PM</p>

              <p className="activity-description">
                Explore one of Tokyo's most famous intersections.
              </p>

              <button className="card-link">
                View details →
              </button>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
