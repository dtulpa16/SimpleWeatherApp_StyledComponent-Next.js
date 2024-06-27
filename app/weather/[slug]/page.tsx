import React from 'react'

export default async function WeatherDetailsPage({params}:{params:{slug:string}}) {
  const location = params.slug || 'Chicago'
  const data = await fetch(`/api/weather?loation=${location}`)
  return (
    <div>page</div>
  )
}
