import { React, useMemo } from "react";
import {
  GoogleMap,
  useJsApiLoader
} from "@react-google-maps/api";

const API_KEY = "AIzaSyA1v3DdbFN-TzkHDJNG8cO4s7RsjpgpA7o";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });

  const center = useMemo(() => ({ lat: 39.1509528, lng: -94.6515581 }), []);

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  if (!isLoaded) {
    return <div>"Loading...</div>;
  } else {
    return (
      <GoogleMap
        zoom={11}
        center={center}
        options={options}
        mapContainerStyle={{ width: "100%", height: "400px" }}
      ></GoogleMap>
    );
  }
};

export default Map;
