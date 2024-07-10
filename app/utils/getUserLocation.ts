// Function to get the user's current position

import { isGeolocationAvailable } from "./isGeolocationAvailable";

interface GeolocationResult {
  latitude?: number;
  longitude?: number;
  error: boolean;
  supported: boolean;
}

export function getUserLocation(): Promise<GeolocationResult> {
  return new Promise((resolve) => {
    if (isGeolocationAvailable()) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          resolve({ latitude, longitude, error: false, supported: true });
        },
        (error) => {
          console.error(`Geolocation error: ${error.message}`);
          resolve({ error: true, supported: true });
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      resolve({ error: true, supported: false });
    }
  });
}
