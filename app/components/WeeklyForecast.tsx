import React from "react";
import { DailyForecast } from "../utils/types";
import { WeeklyForecastCardContainer, WeeklyForecastContainer } from "../Styles/Styles";
import WeeklyForecastCard from "./WeeklyForecastCard";

type WeeklyForecastProps = {
  forecast: DailyForecast[];
};

export default function WeeklyForecast({ forecast }: WeeklyForecastProps) {
  return (
    <WeeklyForecastContainer>
      <h4>Future Weather</h4>
      <WeeklyForecastCardContainer>
        {forecast?.map((e, index) => (
          <WeeklyForecastCard key={index} forecast={e} />
        ))}
      </WeeklyForecastCardContainer>
    </WeeklyForecastContainer>
  );
}
