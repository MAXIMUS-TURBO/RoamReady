// //this is the main application component for the RoamReady travel planning app. 
// // It includes a navigation bar, a hero section, and a dashboard section with cards 
// // for upcoming trips, current weather, and next activities.



//this app uses componenets instead of one big code file. 
// This makes the code more modular and easier to maintain.

import './App.css'
// import { useState } from 'react' //implement search functionality
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TripCard from './components/TripCard'
import WeatherCard from './components/WeatherCard'
import ActivityCard from './components/ActivityCard'
import TripPlanner from './components/TripPlanner'
import TripForm from './components/TripForm'

import { getWeather } from './services/weatherApi'
import { getTrips, createTrip } from './services/tripApi'

//adds weather api functionality to the app.

function App() {
  const [destination, setDestination] = useState('Tokyo, Japan')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [trips, setTrips] = useState([])
  const [tripFormError, setTripFormError] = useState('')
  
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: 'Shibuya Crossing',
      date: 'October 12',
      time: '3:00 PM',
    },
    {
      id: 2,
      name: 'TeamLab Borderless',
      date: 'October 13',
      time: '11:00 AM',
    },
  ])
  async function handleSearch(searchDestination) {
  setDestination(searchDestination)
  setLoading(true)
  setError('')
  try {
    const weatherData = await getWeather(searchDestination)
    setWeather(weatherData)
  } catch (error) {
    setWeather(null)
    setError(error.message)
  } finally {
    setLoading(false)
  }
}
  
  function addActivity(activity) {
  setActivities((currentActivities) => [
    ...currentActivities,
    {
      ...activity,
      id: Date.now(),
    },
  ])
}

function removeActivity(id) {
  setActivities((currentActivities) =>
    currentActivities.filter((activity) => activity.id !== id)
  )
}
//React specifically recommends replacing the array 
// with a new one instead of mutating state directly

  
useEffect(() => {
  getTrips()
    .then((trips) => {
      console.log('Trips from PHP:', trips)
      setTrips(trips)
    })
    .catch((error) => {
      console.error('Trip API error:', error)
    })
}, [])

async function handleCreateTrip(trip) {
  try {
    setTripFormError('')

    const newTrip = await createTrip(trip)

    setTrips((currentTrips) => [...currentTrips, newTrip])
  } catch (error) {
    setTripFormError(error.message)
  }
}

  return (
    <>
      <Navbar />

      
        <Hero onSearch={handleSearch} />

        <main className="dashboard">
                <TripCard
              destination={destination}
              dates="October 12 - October 20"
              daysAway="28"
            />
            <WeatherCard 
            weather={weather} 
            loading={loading} 
            error={error}  />
            <ActivityCard />
            </main>
            <TripPlanner
              activities={activities}
              onAddActivity={addActivity}
              onRemoveActivity={removeActivity}
            />
            <TripForm onCreateTrip={handleCreateTrip}  
            error={tripFormError}
            />
            <section className="saved-trips">
            <h2>Saved Trips</h2>

            {trips.map((trip) => (
              <div className="saved-trip" key={trip.id}>
                <h3>{trip.destination}</h3>
                <p>
                  {trip.startDate} → {trip.endDate}
                </p>
              </div>
            ))}
            </section>
         </>
         
  )
}

export default App