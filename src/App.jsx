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
import TripPlanner from './components/TripPlanner'

import { getWeather } from './services/weatherApi'
//adds weather api functionality to the app.

function App() {
  const [destination, setDestination] = useState('Tokyo, Japan')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
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
         </>
         
  )
}

export default App