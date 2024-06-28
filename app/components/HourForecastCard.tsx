import React from 'react'
import { HourlyForecastCard } from '../Styles/Styles';
import Image from 'next/image';
type HourForecastCardProps = {
    time:string;
    icon: string
    temp:number
}

export default function HourForecastCard({time,icon,temp}:HourForecastCardProps) {
    return (
    <HourlyForecastCard>
        <p>{time}</p>
        <Image placeholder="blur" src={"https:" + icon} alt="condition icon" height={52} width={52} />
        <p>{Math.round(temp)}°F</p>
    </HourlyForecastCard>
  )
}
