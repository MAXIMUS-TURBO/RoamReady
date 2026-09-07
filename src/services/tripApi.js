//this file is used to fetch trips from the backend API

const API_URL = 'http://localhost:8000/api/trips.php'

export async function getTrips() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Unable to fetch trips')
  }

  return response.json()
}