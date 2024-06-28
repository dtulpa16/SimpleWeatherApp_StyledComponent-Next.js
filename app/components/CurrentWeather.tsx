import React from "react";
import Image from "next/image";
import styled from "styled-components";

type WeatherInfoProps = {
  highTemp: number;
  lowTemp: number;
  wind: number;
  rain: number;
  sunrise: string;
  sunset: string;
  icon: string;
  currentTemp: number;
  conditionText: string;
};

const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
    align-items: normal;
  }
  
`;

const CurrentTemp = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex: 1;
  border-right: solid #ffffff63 1px;
  @media (max-width: 768px) {
    padding-bottom: 3rem;
    border-right:none;
    border-bottom: solid #ffffff63 1px;
    gap: 1rem;
  }
`;


const CurrentTempTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrentTempText = styled.p`
  font-size: 84px;
  font-weight: 400;
  margin-bottom: -10px;
`;

const CurrentConditionsText = styled.p`
  font-size: 28px;
  font-weight: 200;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto,60px);
  gap: 2rem;
  font-size: 16px;
  color: white;
  flex: 1;
  max-width: 100%;
  justify-items: center;
  @media(max-width:768px){
    gap: 2.5rem;
  }
  
`;
const WeatherInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const Detail = styled.p`
  font-size: 26px;
  margin: 0;
`;

const Label = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
`;

export default function CurrentWeather({
  icon,
  currentTemp,
  conditionText,
  highTemp,
  lowTemp,
  wind,
  rain,
  sunrise,
  sunset,
}: WeatherInfoProps) {
  return (
    <CurrentWeatherContainer>
        {/* Temp  */}
      <CurrentTemp>
        <Image src={"https:" + icon} alt="condition icon" height={126} width={126} />
        <CurrentTempTextContainer>
          <CurrentTempText>{currentTemp}</CurrentTempText>
          <CurrentConditionsText>{conditionText}</CurrentConditionsText>
        </CurrentTempTextContainer>
      </CurrentTemp>
        {/* Conditions  */}
      <GridContainer>
        <WeatherInfoItem>
          <Detail>{highTemp}</Detail>
          <Label>High</Label>
        </WeatherInfoItem>
        <WeatherInfoItem>
          <Detail>{lowTemp}</Detail>
          <Label>Low</Label>
        </WeatherInfoItem>
        <WeatherInfoItem>
          <Detail>{wind}mph</Detail>
          <Label>Wind</Label>
        </WeatherInfoItem>
        <WeatherInfoItem>
          <Detail>{rain}</Detail>
          <Label>Rain</Label>
        </WeatherInfoItem>
        <WeatherInfoItem>
          <Detail>{sunrise}</Detail>
          <Label>Sunrise</Label>
        </WeatherInfoItem>
        <WeatherInfoItem>
          <Detail>{sunset}</Detail>
          <Label>Sunset</Label>
        </WeatherInfoItem>
      </GridContainer>

    </CurrentWeatherContainer>
  );
}