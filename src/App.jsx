// //this is the main application component for the RoamReady travel planning app. 
// // It includes a navigation bar, a hero section, and a dashboard section with cards 
// // for upcoming trips, current weather, and next activities.



//this app uses componenets instead of one big code file. 
// This makes the code more modular and easier to maintain.


import './App.css'
import { useState } from 'react' //implement search functionality

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TripCard from './components/TripCard'
import WeatherCard from './components/WeatherCard'
import ActivityCard from './components/ActivityCard'

function App() {
  const [destination, setDestination] = useState('Tokyo, Japan')
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero onSearch={setDestination} />

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
                <TripCard
              destination={destination}
              dates="October 12 - October 20"
              daysAway="28"
            />
            <WeatherCard />
            <ActivityCard />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App