import React from "react";
import { DailyForecast } from "../utils/types";
import { WeeklyForecastCard as Card } from "../Styles/Styles";
import { Detail, Label, WeatherInfoItem } from "./CurrentWeather";
import Image from "next/image";
import { getDayOfWeekFromEpoch } from "../utils/getDayOfWeekFromEpoch";
type WeeklyForecastCardProps = {
  forecast: DailyForecast;
};

export default function WeeklyForecastCard({
  forecast,
}: WeeklyForecastCardProps) {
  return (
    <Card>
      <WeatherInfoItem>
        <Detail>{getDayOfWeekFromEpoch(forecast.date_epoch)}</Detail>
        <Label>Day</Label>
      </WeatherInfoItem>
      <Image
        priority
        src={"https:" + forecast.day.condition.icon}
        alt="condition icon"
        height={72}
        width={72}
      />
      <WeatherInfoItem>
        <Detail>{Math.round(forecast.day.mintemp_f)}°F</Detail>
        <Label>Low</Label>
      </WeatherInfoItem>
      <WeatherInfoItem>
        <Detail>{Math.round(forecast.day.maxtemp_f)}°F</Detail>
        <Label>Max</Label>
      </WeatherInfoItem>
      <WeatherInfoItem id="future-hide">
        <Detail>{Math.round(forecast.day.maxwind_mph)}mph</Detail>
        <Label>Wind</Label>
      </WeatherInfoItem>
      <WeatherInfoItem id="future-hide">
        <Detail>{forecast.day.daily_chance_of_rain}&#37;</Detail>
        <Label>Rain</Label>
      </WeatherInfoItem>
    </Card>
  );
}
