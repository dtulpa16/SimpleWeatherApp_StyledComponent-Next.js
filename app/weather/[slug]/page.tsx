
import GlobalStyle from "@/app/Styles/GlobalStyles";
import WeatherPageLayout from "@/app/components/WeatherPageLayout";
import { WeatherApiResponse } from "@/app/utils/types";
import React, { Suspense } from "react";

export default async function WeatherDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const location = params.slug || "Chicago, Il";
  const data = await fetch(
    `${process.env.BASE_URL}/api/weather?location=${location}`
  );

  let forecast: WeatherApiResponse = await data.json();
  const { weather } = forecast;
  
  return (
    <Suspense fallback={<></>}>
      <GlobalStyle />
      <WeatherPageLayout weather={weather} />
    </Suspense>
  )
}
