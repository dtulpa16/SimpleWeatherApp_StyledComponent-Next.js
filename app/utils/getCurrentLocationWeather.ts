
import { getUserLocation } from "./getUserLocation";

export const getCurrentLocationWeather = async () => {
  try {
    const { latitude, longitude, error, supported } = await getUserLocation();
    if (!error && supported) {
      const location = latitude + "," + longitude
      debugger
      return location
    } else {
      console.error("Failed to retrieve geolocation.");
    }
  } catch (e) {
    debugger
    console.error("An unexpected error occurred:", e);
  }
};
