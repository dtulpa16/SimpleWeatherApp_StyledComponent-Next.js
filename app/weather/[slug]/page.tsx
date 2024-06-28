
import GlobalStyle from "@/app/Styles/GlobalStyles";
import WeatherPageLayout from "@/app/components/WeatherPageLayout";
import { WeatherApiResponse } from "@/app/utils/types";
import React from "react";

export default async function WeatherDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const location = params.slug || "Chicago, Il";
  const data = await fetch(
    `http://localhost:3000/api/weather?location=${location}`
  );

  let forecast: WeatherApiResponse = await data.json();
  const { weather } = forecast;

  return weather ? (
    <>
      <GlobalStyle />
      <WeatherPageLayout weather={weather} />
    </>
  ) : null;
}
