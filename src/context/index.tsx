import { createContext, useContext, useState } from "react";
import { Location, MapContextType } from "./types";

const MapContext = createContext<MapContextType | null>(null);
const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [locations, setLocations] = useState<Location[]>([]);

  const addLocation = (location: Location) => {
    const newLocation = {
      ...location,
      id: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    setLocations((prev) => [...prev, newLocation]);
  };
  return (
    <MapContext.Provider value={{ locations, addLocation }}>
      {children}
    </MapContext.Provider>
  );
};
const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};
export { MapProvider, useMapContext };
