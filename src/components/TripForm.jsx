import { useState } from 'react'

function TripForm({ onCreateTrip }) {
  const [form, setForm] = useState({
    destination: '',
    startDate: '',
    endDate: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.destination || !form.startDate || !form.endDate) {
      return
    }

    onCreateTrip(form)

    setForm({
      destination: '',
      startDate: '',
      endDate: '',
    })
  }

  return (
    <section className="trip-form">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TRIP MANAGEMENT</p>
          <h2>Save a trip</h2>
        </div>
      </div>

      <form className="planner-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleChange}
        />

        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
        />

        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
        />

        <button className="primary-button" type="submit">
          Save Trip
        </button>
      </form>
    </section>
  )
}

export default TripForm