import React, { useState, useEffect } from "react";
import Marker from "./Marker";

import GoogleMapReact from "google-map-react";

export default function GMap(props) {
  const [latLgn, setLatLgn] = useState();

  useEffect(() => {
    for (let item of props.tasks) {
      setLatLgn(() => {
        return item;
      });
    }
    console.log(latLgn);
  }, [props.tasks, latLgn]);

  // centered the map on  tallinn
  const tallinn = {
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
      bounds.extend(
        new maps.LatLng(
          pin.address.location.coordinates[0],
          pin.address.location.coordinates[1]
        )
      );
    });
    return bounds;
  };

  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB97teau2ZKw8JZu_zll6Sgtm6WqaQJPk4" }}
          defaultCenter={tallinn.center}
          defaultZoom={tallinn.zoom}
          // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, latLgn)}
          yesIWantToUseGoogleMapApiInternals
        >
          {latLgn.map((item) => (
            <Marker
              lat={item.address.location.coordinates[0]}
              lng={item.address.location.coordinates[1]}
              key={item.id}
            />
          ))}
        </GoogleMapReact> */}
      </div>
    </div>
  );
}

// resource for google map
// https://github.com/google-map-react/google-map-react
