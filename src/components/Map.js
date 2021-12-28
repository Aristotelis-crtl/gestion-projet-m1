import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import marker from "../img/marker.png"; // Tell webpack this JS file uses this image
import data from "../data.json";
const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 48.8,
    longitude: 2.3,
    zoom: 8,
  });
  console.log(data.cities);

  const cities = data.cities;

  return (
    <>
      <div>
        <div className="text-yellowperso flex justify-center my-2">
          <h1>{cities[0].ville}</h1>
        </div>
        <div className="flex h-screen items-center justify-center">
          <div id="map" className="w-3/4 h-full mr-1 relative overflow-hidden">
            <ReactMapGL
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
              className="border border-red-800 rounded-xl"
            >
              {cities[0].lieux.map((cities, i) => (
                <Marker
                  latitude={cities.latitude}
                  longitude={cities.longitude}
                  offsetLeft={-20}
                  offsetTop={-10}
                  key={i}
                >
                  <img src={marker} alt="marker" className="w-4" />
                </Marker>
              ))}
            </ReactMapGL>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
