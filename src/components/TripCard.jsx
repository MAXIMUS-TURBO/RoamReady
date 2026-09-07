// this react component is a card that displays information about an 
// upcoming trip.

function TripCard({ destination, dates, daysAway }) {
  return (
    <article className="card trip-card">
      <div className="card-header">
        <div>
          <p className="card-label">UPCOMING TRIP</p>
          <h3>{destination}</h3>
        </div>

        <span className="card-icon">✈</span>
      </div>

      <p className="trip-date">{dates}</p>

      <div className="trip-progress">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <span>{daysAway} days away</span>
      </div>

      <button className="card-link">
        View itinerary →
      </button>
    </article>
  )
}

export default TripCard