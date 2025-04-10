export interface Location {
  id?: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  createdAt?: string;
}

export interface MapContextType {
  locations: Location[];
  addLocation: (location: Location) => void;
}
