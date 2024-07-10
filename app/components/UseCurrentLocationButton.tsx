"use client";
import React from "react";
import { Button } from "../Styles/Styles";
import { getCurrentLocationWeather } from "../utils/actions/getCurrentLocationWeather";

export default function UseCurrentLocationButton() {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        getCurrentLocationWeather();
      }}
    >
      Use my current location
    </Button>
  );
}
