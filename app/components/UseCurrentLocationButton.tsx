"use client";
import React from "react";
import { Button } from "../Styles/Styles";
import { getCurrentLocationWeather } from "../utils/getCurrentLocationWeather";
import { useRouter } from 'next/navigation'
export default function UseCurrentLocationButton() {
  const router = useRouter()
  const handleClick = async() =>{
    const location = await getCurrentLocationWeather();
    router.push(`/weather/${location}/`)
  }
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        handleClick()
      }}
    >
      Use my current location
    </Button>
  );
}
