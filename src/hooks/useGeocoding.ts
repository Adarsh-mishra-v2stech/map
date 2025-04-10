import axios from "axios";
import { API_URLS } from "../api";
import { useQuery } from "@tanstack/react-query";

const fetchLocationData = async ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) => {
  const response = await axios.get(API_URLS.GEOCODING(lat, lng), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch location data");
  }
  const data = response.data;
  const address = data.features[0]?.place_name || "Unknown location";
  return address;
};

export const useGeocoding = ({ lat, lng }: { lat: number; lng: number }) =>
  useQuery({
    queryKey: ["geocoding", lat, lng],
    queryFn: () => fetchLocationData({ lat, lng }),
    enabled: lat !== 0 && lng !== 0,
  });
