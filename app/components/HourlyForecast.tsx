import React from "react";
import { DailyForecast as HourlyForecastType } from "../utils/types";
import {
  HourlyForecastCardContainer,
  HourlyForecastContainer,
} from "../Styles/Styles";
import HourForecastCard from "./HourForecastCard";
import { formatTime } from "../utils/formatTime";
type ForecastListProps = {
  forecast: HourlyForecastType;
  icon: string;
};

export default function HourlyForecast({ forecast, icon }: ForecastListProps) {
  const currentEpochTime = Math.floor(Date.now() / 1000);
  const upcomingForecast = forecast.hour.filter(
    (forecast) => forecast.time_epoch >= currentEpochTime
  );
  return (
    <HourlyForecastContainer>
      <h4>Today&#39;s Weather</h4>
      <div>
        <HourlyForecastCardContainer>
          {upcomingForecast.map((e, i) => (
            <HourForecastCard
              key={i}
              time={formatTime(e.time)}
              icon={icon}
              temp={e.temp_f}
            />
          ))}
        </HourlyForecastCardContainer>
      </div>
    </HourlyForecastContainer>
  );
}
// time, icon, temp
