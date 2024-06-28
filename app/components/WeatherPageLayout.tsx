'use client'
import React from "react";
import { WeatherApiResponse } from "../utils/types";
import styled from "styled-components";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import GlobalStyle from "../Styles/GlobalStyles";
const WeatherPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  min-height: 96vh;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    min-height: 100vh;
    gap: 1rem;
  }
`;
export default function WeatherPageLayout({ weather }: WeatherApiResponse) {
  return (
    <>
    <GlobalStyle/>
      <WeatherPageContainer>
        <Header
          location={weather.location.name + ", " + weather.location.region}
          date={weather.location.localtime}
        />
        <CurrentWeather
          icon={weather.current.condition.icon}
          currentTemp={weather.current.temp_f}
          conditionText={weather.current.condition.text}
          highTemp={weather.forecast.forecastday[0].day.maxtemp_f}
          lowTemp={weather.forecast.forecastday[0].day.mintemp_f}
          wind={weather.current.wind_mph}
          rain={weather.forecast.forecastday[0].day.daily_chance_of_rain}
          sunrise="6:30"
          sunset="8:30"
        />
      </WeatherPageContainer>
    </>
  );
}
