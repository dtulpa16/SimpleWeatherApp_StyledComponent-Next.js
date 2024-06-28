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
    gap: 3rem;
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
    padding-bottom: 2rem;
    border-right:none;
    border-bottom: solid #ffffff63 1px;
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
  gap: 1rem;
  font-size: 16px;
  color: white;
  flex: 1;
`;
const WeatherInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Temperature = styled.p`
  font-size: 24px;
  margin: 0;
`;

const Detail = styled.p`
  font-size: 18px;
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

      <CurrentTemp>
        <Image src={"https:" + icon} alt="condition icon" height={96} width={96} />
        <CurrentTempTextContainer>
          <CurrentTempText>{currentTemp}</CurrentTempText>
          <CurrentConditionsText>{conditionText}</CurrentConditionsText>
        </CurrentTempTextContainer>
      </CurrentTemp>
        {/* spacer  */}
      <GridContainer>
        <WeatherInfoItem>
          <Temperature>{highTemp}</Temperature>
          <Label>High</Label>
        </WeatherInfoItem>
        <WeatherInfoItem>
          <Temperature>{lowTemp}</Temperature>
          <Label>Low</Label>
        </WeatherInfoItem>
        <WeatherInfoItem>
          <Detail>{wind}</Detail>
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
