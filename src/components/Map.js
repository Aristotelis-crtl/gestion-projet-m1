import React from "react";
import { useState } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import data from "../data.json";
import Markers from "./Markers";
import LieuInfo from "./LieuInfo";
const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "80%",
    latitude: 48.8,
    longitude: 2.3,
    zoom: 8,
  });

  const cities = data.cities;
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <>
      <div>
        <div className="text-yellowperso flex justify-center my-2">
          <h1>{cities[0].ville}</h1>
        </div>
        <div className="flex h-screen items-center justify-center">
          <div
            id="map"
            className=" w-10/12 h-full mr-1 relative overflow-hidden"
          >
            <ReactMapGL
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
              className="border border-red-800 rounded-xl"
            >
              <Markers data={cities} onClick={setPopupInfo} />
              {popupInfo && (
                <Popup
                  tipSize={8}
                  anchor="bottom"
                  longitude={popupInfo.longitude}
                  latitude={popupInfo.latitude}
                  closeOnClick={false}
                  onClose={setPopupInfo}
                >
                  <LieuInfo info={popupInfo} />
                </Popup>
              )}
            </ReactMapGL>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
