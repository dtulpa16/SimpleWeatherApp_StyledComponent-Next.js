'use client'
import React from 'react'
import { Button } from '../Styles/Styles'

export default function UseCurrentLocationButton() {
  return (
    <Button onClick={(e)=>e.preventDefault()}>Use my current location</Button>
  )
}
