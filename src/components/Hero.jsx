//this react component is the hero section
// contains headline, desc, and a call-to-action button.

function Hero() {
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

        <button className="primary-button">
          Plan a Trip
        </button>
      </div>
    </section>
  )
}

export default Hero