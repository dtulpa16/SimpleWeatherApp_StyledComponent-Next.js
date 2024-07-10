import { getUserLocation } from "../getUserLocation";

export const getCurrentLocationWeather = async () => {
  try {
    debugger
    const { latitude, longitude, error, supported } = await getUserLocation();
    if (!error && supported) {
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } else {
      console.error("Failed to retrieve geolocation.");
    }
  } catch (e) {
    console.error("An unexpected error occurred:", e);
  }
};
