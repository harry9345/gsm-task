import React, { useState, useEffect } from "react";
import Marker from "./Marker";

import GoogleMapReact from "google-map-react";

export default function GMap(props) {
  const [latLgn, setLatLgn] = useState([]);
  const [tallinn] = useState({
    center: {
      lng: 24.7536,
      lat: 59.437,
    },
    zoom: 10,
  });

  useEffect(() => {
    let coords = [];
    for (let item of props.tasks) {
      if (item.address.location) {
        coords.push(item.address.location.coordinates);
      }
    }
    setLatLgn(coords);
  }, [props.tasks]);

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
    let bounds;
    setTimeout(() => {
      bounds = new maps.LatLngBounds();

      pins.forEach((pin) => {
        bounds.extend(new maps.LatLng(pin.lat, pin.lng));
      });
      return bounds;
    }, 6000);
  };

  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR API KEY" }}
          defaultCenter={tallinn.center}
          defaultZoom={tallinn.zoom}
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, latLgn)}
          yesIWantToUseGoogleMapApiInternals
        >
          {latLgn.map((item, index) => (
            <Marker lat={item[1]} lng={item[0]} key={index} />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

// resource for google map
// https://github.com/google-map-react/google-map-react
