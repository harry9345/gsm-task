import React, { useState } from "react";
import Marker from "./Marker";

import GoogleMapReact from "google-map-react";

export default function GMap() {
  // for now i use hardcoded lat and lng , but the componenet receive them state from props
  // to test the map resizing it self UNCOMMENT the object bellow
  const [latLgn, setLatLgn] = useState([
    // { location: "Tartu", lat: 58.378, lng: 26.728 },
    { location: "Pirita", lat: 59.4749, lng: 24.8725 },
    { location: "Nomme", lat: 59.3807, lng: 24.6995 },
    { location: "Kalamaja", lat: 59.4497, lng: 24.7387 },
    { location: "Teliskivi", lat: 59.4393, lng: 24.7303 },
    // { location: "Parnu", lat: 58.3917, lng: 24.4953 },
    // { location: "Narva", lat: 59.3797, lng: 28.1791 },
    { location: "Tallinn", lat: 59.437, lng: 24.7536 },
  ]);

  // centered the map on  tallinn
  const defaultProps = {
    center: {
      lat: 59.437,
      lng: 24.7536,
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

  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, "idle", () => {
      maps.event.addDomListener(window, "resize", () => {
        map.fitBounds(bounds);
      });
    });
  };

  // Return map bounds based on list of places
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
