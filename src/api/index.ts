export const API_URLS = {
  GEOCODING: (lat: number, lng: number) =>
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${
      import.meta.env.VITE_MAPBOX_TOKEN
    }`,
};
