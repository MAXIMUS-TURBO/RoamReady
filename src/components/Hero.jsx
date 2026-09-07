//this react component is the hero section
// contains headline, desc, and a call-to-action button.
import { useState } from 'react'

function Hero({ onSearch }) {
  const [destination, setDestination] = useState('')

  function handleSearch(event) {
    event.preventDefault()

    if (!destination.trim()) {
      return
    }

    onSearch(destination)
  }
  return (
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
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />

          <button className="primary-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero

