import React, { useState } from "react";
import { Map, Marker } from "react-map-gl";
import { Layout } from "antd";
import "mapbox-gl/dist/mapbox-gl.css";
import "antd/dist/reset.css";
import { useMapContext } from "../context";
import { UserFormModal } from "./UserFormModal";
import { DEFAULT_LOCATION_COORDINATES, MAPBOX_STYLE } from "../constant";

const { Content } = Layout;

const Mapview = () => {
  const { locations } = useMapContext();
  const [clickedLocation, setClickedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  return (
    <Content>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: DEFAULT_LOCATION_COORDINATES.longitude,
          latitude: DEFAULT_LOCATION_COORDINATES.latitude,
          zoom: DEFAULT_LOCATION_COORDINATES.zoom,
        }}
        style={{ width: "100%", height: "570px" }}
        mapStyle={MAPBOX_STYLE}
        onClick={(e) =>
          setClickedLocation({ lat: e.lngLat.lat, lng: e.lngLat.lng })
        }
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
          ></Marker>
        ))}
      </Map>
      {clickedLocation.lat !== 0 && clickedLocation.lng !== 0 && (
        <UserFormModal
          lat={clickedLocation.lat}
          lng={clickedLocation.lng}
          onClose={() => setClickedLocation({ lat: 0, lng: 0 })}
        />
      )}
    </Content>
  );
};

export default Mapview;
