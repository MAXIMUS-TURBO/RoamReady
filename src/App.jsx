// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'


// app is react component it returns jsx which is html like syntax
// then main.jsx loads componenet into the webpage
// main>app>jsx>browser
//basic React mental model

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          RoamReady
        </div>

        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#trips">My Trips</a>
          <a href="#explore">Explore</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">YOUR TRAVEL COMMAND CENTER</p>

          <h1>
            Plan less.
            <br />
            Experience more.
          </h1>

          <p className="description">
            Organize your trips, discover destinations, monitor
            conditions, and keep everything you need in one place.
          </p>

          <button>
            Start Planning
          </button>
        </section>

        <section className="dashboard-preview">
          <div className="card">
            <h2>Upcoming Trip</h2>
            <p>Tokyo, Japan</p>
            <span>October 12–20</span>
          </div>

          <div className="card">
            <h2>Weather</h2>
            <p>Tokyo</p>
            <span>72°F · Clear</span>
          </div>

          <div className="card">
            <h2>Next Activity</h2>
            <p>Shibuya Crossing</p>
            <span>Today · 3:00 PM</span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App