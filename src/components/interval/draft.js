// // in here i just paste the diffrent way i try to make the api calls to geot and post

// // ------ main.js
// // const getData = () => {
// //   console.log("Get Data Log");
// //   let config = {
// //     method: "get",
// //     url: "https://gsmtasks.com/api/tasks/tasks/",
// //     authorization: "fdd73ab50cf234b45815b34a6339b7ca967601f5",
// //   };
// //   try {
// //     const response = config;
// //     console.log(response);
// //   } catch (error) {
// //     console.log("error", error);
// //   }
// //   // fetch(
// //   //   "https://gsmtasks.com/api/tasks/tasks/?account=tokenfdd73ab50cf234b45815b34a6339b7ca967601f5"
// //   // ).then((response) => {
// //   //   console.log("response", response);
// //   //   setTask(response);
// //   //   console.log(task);
// //   // });
// // };

// //--------- taskform.js

// // async function postData(e) {
// //   e.preventDefault();
// //   let config = {

// //     url: "https://gsmtasks.com/api/tasks/tasks/",
// //     body: JSON.stringify({
// //       "account": "https://gsmtasks.com/api/tasks/accounts/7554d9ae-6894-4708-b741-045747b45a28/",
// //       "address": {
// //       "raw_address": "laheapea 7 "
// //     },"category": "assignment"

// //   }),
// //     headers: {
// //       authorization: "Token fdd73ab50cf234b45815b34a6339b7ca967601f5",
// //       method: "post",
// //     },
// //   };
// //   try {
// //     const response = config;
// //     console.log(response);
// //   } catch (error) {
// //     console.log("error", error);
// //   }
// // }

// // // I have tried the API in postman too (with and without "token"), but i recive th following erro :
// //   // "account": [
// //   //   "“fdd73ab50cf234b45815b34a6339b7ca967601f5” is not a valid UUID."
// //   // ]
// //   async function postData(e) {
// //     e.preventDefault();
// //     let config = {
// //       method: "post",
// //       url: "https://gsmtasks.com/api/tasks/tasks/",
// //       body: JSON.stringify({
// //         acount:
// //           "https://gsmtasks.com/api/tasks/accounts/tokenfdd73ab50cf234b45815b34a6339b7ca967601f5/",
// //         category: "assignment",
// //         address: {
// //           raw_address: taskState,
// //         },
// //       }),
// //       // headers: {
// //       //   authorization: "fdd73ab50cf234b45815b34a6339b7ca967601f5",
// //       // },
// //     };
// //     try {
// //       const response = await axios(config);
// //       console.log(response);
// //     } catch (error) {
// //       console.log("error", error);
// //     }
// //   }
// // // ------ GMap.js
// // const [tasks, setTask] = useState(props.task);

// //-----------------------------------------------------

// // import React, { useState } from "react";
// // import Marker from "./Marker";

// // import GoogleMapReact from "google-map-react";

// // export default function GMap(props) {
// //   // // for now i use hardcoded lat and lng , but the componenet receive them state from props
// //   // // to test the map resizing it self UNCOMMENT the object bellow
// //   const [latLgn, setLatLgn] = useState([
// //       { location: "Tallinn", lat: 59.437, lng: 24.7536 },
// //     // // { location: "Tartu", lat: 58.378, lng: 26.728 },
// //     { location: "Pirita", lat: 59.4749, lng: 24.8725 },
// //     { location: "Nomme", lat: 59.3807, lng: 24.6995 },
// //     { location: "Kalamaja", lat: 59.4497, lng: 24.7387 },
// //     { location: "Teliskivi", lat: 59.4393, lng: 24.7303 },
// //     // // { location: "Parnu", lat: 58.3917, lng: 24.4953 },
// //     // // { location: "Narva", lat: 59.3797, lng: 28.1791 },
// //   ]);
// //   const [cord, setcord] = useState(props.task);

// //   // // centered the map on  tallinn
// //   const defaultProps = {
// //     center: {
// //       lat: 59.437,
// //       lng: 24.7536,
// //     },
// //     zoom: 11,
// //   };

// //   // // Fit map to its bounds after the api is loaded
// //   const apiIsLoaded = (map, maps, latlgn) => {
// //     // // Get bounds by our latlgn
// //     const bounds = getMapBounds(map, maps, latlgn);
// //     // // Fit map to bounds
// //     map.fitBounds(bounds);
// //     // // Bind the resize listener
// //     bindResizeListener(map, maps, bounds);
// //   };

// //   // // Re-center map when resizing the window
// //   const bindResizeListener = (map, maps, bounds) => {
// //     maps.event.addDomListenerOnce(map, "idle", () => {
// //       maps.event.addDomListener(window, "resize", () => {
// //         map.fitBounds(bounds);
// //       });
// //     });
// //   };

// //   // // Return map bounds based on list of places
// //   const getMapBounds = (map, maps, pins) => {
// //     const bounds = new maps.LatLngBounds();

// //     pins.forEach((pin) => {
// //       bounds.extend(new maps.LatLng(pin.lat, pin.lng));
// //     });
// //     return bounds;
// //   };

// //   return (
// //     <div>
// //       <div style={{ height: "100vh", width: "100%" }}>
// //         <GoogleMapReact
// //           bootstrapURLKeys={{ key: "AIzaSyB97teau2ZKw8JZu_zll6Sgtm6WqaQJPk4" }}
// //           defaultCenter={defaultProps.center}
// //           defaultZoom={defaultProps.zoom}
// //           onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, latLgn)}
// //           yesIWantToUseGoogleMapApiInternals
// //         >
// //           {latLgn.map((item, index) => (
// //             <Marker lat={item.lat} lng={item.lng} key={index} />
// //           ))}
// //         </GoogleMapReact>
// //       </div>
// //     </div>
// //   );
// // }

// // // // resource for google map
// // // // https:// //github.com/google-map-react/google-map-react

// // // //8888888888888888888888888888888888888888888888888888888
// // import React from "react";
// // import Marker from "./Marker";

// // import GoogleMapReact from "google-map-react";

// // export default function GMap(props) {
// //   // // for now i use hardcoded lat and lng , but the componenet receive them state from props
// //   // // to test the map resizing it self UNCOMMENT the object bellow
// //   // // const [latLgn, setLatLgn] = useState([
// //   // //   // // { location: "Tartu", lat: 58.378, lng: 26.728 },
// //   // //   { location: "Pirita", lat: 59.4749, lng: 24.8725 },
// //   // //   { location: "Nomme", lat: 59.3807, lng: 24.6995 },
// //   // //   { location: "Kalamaja", lat: 59.4497, lng: 24.7387 },
// //   // //   { location: "Teliskivi", lat: 59.4393, lng: 24.7303 },
// //   // //   // // { location: "Parnu", lat: 58.3917, lng: 24.4953 },
// //   // //   // // { location: "Narva", lat: 59.3797, lng: 28.1791 },
// //   // //   { location: "Tallinn", lat: 59.437, lng: 24.7536 },
// //   // // ]);

// //   // // centered the map on  tallinn

// //   const defaultProps = {
// //     center: {
// //       lat: 59.437,
// //       lng: 24.7536,
// //     },
// //     zoom: 11,
// //   };
// //   // // Fit map to its bounds after the api is loaded
// //   const apiIsLoaded = (map, maps, latln) => {
// //     // // Get bounds by our latlgn
// //     const bounds = getMapBounds(map, maps, latln);
// //     // // Fit map to bounds
// //     map.fitBounds(bounds);
// //     // // Bind the resize listener
// //     bindResizeListener(map, maps, bounds);
// //   };

// //   // // Re-center map when resizing the window
// //   const bindResizeListener = (map, maps, bounds) => {
// //     maps.event.addDomListenerOnce(map, "idle", () => {
// //       maps.event.addDomListener(window, "resize", () => {
// //         map.fitBounds(bounds);
// //       });
// //     });
// //   };

// //   // // Return map bounds based on list of places
// //   const getMapBounds = (map, maps, pins) => {
// //     const bounds = new maps.LatLngBounds();
// //     pins.forEach((pin) => {
// //       bounds.extend(new maps.LatLng(pin.lon, pin.lat));
// //     });
// //     return bounds;
// //   };

// //   return (
// //     <div>
// //       <div style={{ height: "100vh", width: "100%" }}>
// //         <GoogleMapReact
// //           bootstrapURLKeys={{ key: "AIzaSyB97teau2ZKw8JZu_zll6Sgtm6WqaQJPk4" }}
// //           defaultCenter={defaultProps.center}
// //           defaultZoom={defaultProps.zoom}
// //           onGoogleApiLoaded={({ map, maps }) =>
// //             apiIsLoaded(map, maps, props.task)
// //           }
// //           yesIWantToUseGoogleMapApiInternals
// //         >
// //           {props.task.map((item, index) => (
// //             <Marker lat={item.lat} lng={item.lon} key={index} />
// //           ))}
// //         </GoogleMapReact>
// //       </div>
// //     </div>
// //   );
// // }

// // // // resource for google map
// // // // https://github.com/google-map-react/google-map-react
