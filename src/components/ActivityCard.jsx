
// this react component is a card that displays information about 
// the next activity.

function ActivityCard() {
  return (
    <article className="card activity-card">
      <div className="card-header">
        <div>
          <p className="card-label">NEXT ACTIVITY</p>
          <h3>Shibuya Crossing</h3>
        </div>

        <span className="card-icon">📍</span>
      </div>

      <p className="activity-time">
        Today · 3:00 PM
      </p>

      <p className="activity-description">
        Explore one of Tokyo's most famous intersections.
      </p>

      <button className="card-link">
        View details →
      </button>
    </article>
  )
}

export default ActivityCard