//this component allows users to plan their trip by adding
//  activities to an itinerary. It includes a form for inputting 
// activity details and displays a list of added activities with 
// the option to remove them.


import { useState } from 'react'

function TripPlanner({ activities, onAddActivity, onRemoveActivity }) {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
  })//This keeps track of what the user is typing.

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name || !form.date || !form.time) {
      return
    }

    onAddActivity(form) //The form sends the information back to App.jsx

    setForm({
      name: '',
      date: '',
      time: '',
    })
  }

  return (
    <section className="trip-planner">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ITINERARY</p>
          <h2>Plan your trip</h2>
        </div>
        <span>{activities.length} activities</span>
      </div>

      <form className="planner-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Activity name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />

        <button className="primary-button" type="submit">
          Add Activity
        </button>
      </form>

      <div className="itinerary-list">
        {activities.length === 0 ? (
          <p className="empty-state">
            No activities planned yet. Add something to your itinerary.
          </p>
        ) : (
          activities.map((activity) => ( //Rendering the itinerary
            <div className="itinerary-item" key={activity.id}>
              <div>
                <h3>{activity.name}</h3>
                <p>
                  {activity.date} at {activity.time}
                </p>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemoveActivity(activity.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default TripPlanner