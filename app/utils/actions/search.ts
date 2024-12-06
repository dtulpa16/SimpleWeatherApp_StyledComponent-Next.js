'use server'

import { redirect } from "next/navigation"

export const searchWeather = async(data:FormData) =>{
    const search = data.get('search')?.toString()
    redirect(`/weather/${search}/`)
}