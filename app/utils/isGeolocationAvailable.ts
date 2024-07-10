// Function to check if the Geolocation API is supported

export function isGeolocationAvailable() {
  return "geolocation" in navigator;
}
