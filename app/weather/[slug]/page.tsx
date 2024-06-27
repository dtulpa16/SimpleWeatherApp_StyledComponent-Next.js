import React from 'react'

export default async function WeatherDetailsPage({params}:{params:{slug:string}}) {
  const location = params.slug || 'Chicago'
  console.log(location)
  const data = await fetch(`http://localhost:3000/api/weather?location=${location}`)
  const forcast = await data.json()
  console.log(forcast)
  return (
    <div>page</div>
  )
}
