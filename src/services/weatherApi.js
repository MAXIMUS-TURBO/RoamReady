//this code is used to fetch weather data from the Open-Meteo API. 
// It first uses the geocoding API to get the latitude and longitude 
// of the destination, and then uses those coordinates to fetch the 
// current weather data.

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

function getWeatherDescription(code) {
  if (code === 0) return 'Clear sky'
  if ([1, 2, 3].includes(code)) return 'Partly cloudy'
  if ([45, 48].includes(code)) return 'Foggy'
  if ([51, 53, 55].includes(code)) return 'Drizzle'
  if ([61, 63, 65].includes(code)) return 'Rain'
  if ([71, 73, 75].includes(code)) return 'Snow'
  if ([80, 81, 82].includes(code)) return 'Rain showers'
  if ([95, 96, 99].includes(code)) return 'Thunderstorm'

  return 'Unknown conditions'
}
export async function getWeather(destination) {
  const locationResponse = await fetch(
    //using fetch to make http requests 
    //await turns the API response into JavaScript data.
    `${GEOCODING_URL}?name=${encodeURIComponent(destination)}&count=1&language=en&format=json`
  )

  if (!locationResponse.ok) {
    throw new Error('Unable to find destination')
  }

  const locationData = await locationResponse.json()

  if (!locationData.results || locationData.results.length === 0) {
    throw new Error('Destination not found')
  }

  const location = locationData.results[0]

  const weatherResponse = await fetch(
    `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code&temperature_unit=fahrenheit`
  )

  if (!weatherResponse.ok) {
    throw new Error('Unable to retrieve weather')
  }

  const weatherData = await weatherResponse.json()

  return {
    city: location.name,
    country: location.country,
    temperature: Math.round(weatherData.current.temperature_2m),
    humidity: weatherData.current.relative_humidity_2m,
    weatherCode: weatherData.current.weather_code,
    description: getWeatherDescription(weatherData.current.weather_code),
  }
}

//Request
//    ↓
// Response
//    ↓
// JSON
//    ↓
// JavaScript object
//    ↓
// React component