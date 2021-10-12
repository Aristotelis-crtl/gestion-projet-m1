import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import marker from "../img/marker.png"; // Tell webpack this JS file uses this image
const Home = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <>
      <div>
        <div className="flex h-screen items-center">
          <div
            id="map"
            className="w-1/2 border rounded-xl mr-1 relative h-3/4 overflow-hidden"
          >
            <ReactMapGL
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            >
              <Marker
                latitude={37.78}
                longitude={-122.41}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <img src={marker} alt="marker" className="w-4" />
              </Marker>
              <Marker
                latitude={36}
                longitude={-121}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <img src={marker} alt="marker" className="w-4" />
              </Marker>
            </ReactMapGL>
          </div>
          <div className="w-1/2 border rounded">
            <h1 className="flex justify-center font-bold">Paris</h1>
            <div>
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
