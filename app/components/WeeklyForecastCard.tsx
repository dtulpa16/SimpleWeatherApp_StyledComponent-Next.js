import React from "react";
import { DailyForecast } from "../utils/types";
import { WeeklyForecastCard as Card, WeatherIconContainer } from "../Styles/Styles";
import { Detail, Label, WeatherInfoItem } from "./CurrentWeather";
import Image from "next/image";
import { getDayOfWeekFromEpoch } from "../utils/getDayOfWeekFromEpoch";
type WeeklyForecastCardProps = {
  forecast: DailyForecast;
};

export default function WeeklyForecastCard({
  forecast,
}: WeeklyForecastCardProps) {
  const splitDate = forecast.date.split("-");
  const formattedDate = splitDate[1] + "/" + splitDate[2];
  const truncatedDow = getDayOfWeekFromEpoch(forecast.date_epoch).substring(0,3)
  return (
    <Card>
      <WeatherInfoItem>
        <Detail id="future-hide">{getDayOfWeekFromEpoch(forecast.date_epoch)}</Detail>
        <Detail id="mobile-show">{truncatedDow}</Detail>
        <Label>{formattedDate}</Label>
      </WeatherInfoItem>
      <WeatherIconContainer>
        <Image
          src={"https:" + forecast.day.condition.icon}
          alt="condition icon"
          fill
          className="icon"
        />
      </WeatherIconContainer>
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
