import React, { useState } from "react";
import Marker from "./Marker";

import GoogleMapReact from "google-map-react";

export default function GMap() {
  const [latLgn, setLatLgn] = useState([
    { lat: 58.378, lng: 26.728 },
    { lat: 59.439, lng: 24.73 },
    { lat: 59.352, lng: 24.055 },
    { lat: 59.435, lng: 24.743 },
    { lat: 59.449, lng: 24.738 },
    { lat: 58.391, lng: 24.495 },
    { lat: 59.347, lng: 26.359 },
  ]);

  const defaultProps = {
    center: {
      lat: 59.436962,
      lng: 24.753574,
    },
    zoom: 11,
  };

  // Fit map to its bounds after the api is loaded
  const apiIsLoaded = (map, maps, latlgn) => {
    // Get bounds by our latlgn
    const bounds = getMapBounds(map, maps, latlgn);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, "idle", () => {
      maps.event.addDomListener(window, "resize", () => {
        map.fitBounds(bounds);
      });
    });
  };

  const getMapBounds = (map, maps, pins) => {
    const bounds = new maps.LatLngBounds();

    pins.forEach((pin) => {
      bounds.extend(new maps.LatLng(pin.lat, pin.lng));
    });
    return bounds;
  };

  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB97teau2ZKw8JZu_zll6Sgtm6WqaQJPk4" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, latLgn)}
          yesIWantToUseGoogleMapApiInternals
        >
          {latLgn.map((item, index) => (
            <Marker lat={item.lat} lng={item.lng} key={index} />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

// resource for google map
// https://github.com/google-map-react/google-map-react
