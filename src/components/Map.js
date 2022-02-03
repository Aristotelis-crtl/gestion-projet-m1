import React, { useEffect } from "react";
import { useState } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import data from "../data.json";
import Markers from "./Markers";
import LieuInfo from "./LieuInfo";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const Map = () => {
  const cities = data.cities;
  const [popupInfo, setPopupInfo] = useState(null);

  const { ville } = useParams();

  const city = cities.find((city) => city.ville === ville);

  const centroid = city.lieux.map((c) => {
    return { longitude: c.longitude, latitude: c.latitude };
  });

  const centroidCalculted = () => {
    let x = 0;
    let y = 0;
    let total = centroid.length;

    x = centroid.reduce((prev, curr) => prev + curr.latitude, 0);
    y = centroid.reduce((prev, curr) => prev + curr.longitude, 0);
    return {
      latitude: x / total,
      longitude: y / total,
    };
  };
  console.log(
    "centroid",
    centroidCalculted().latitude,
    centroidCalculted().longitude
  );

  useEffect(
    () =>
      setViewport({
        ...viewport,
        latitude: centroidCalculted().latitude,
        longitude: centroidCalculted().longitude,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ville]
  );

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "80%",
    latitude: centroidCalculted().latitude,
    longitude: centroidCalculted().longitude,
    zoom: 12, //voir pour augmenter le zoom
  });
  return (
    <>
      <div>
        <div className="text-yellowperso flex justify-center my-2 ">
          <h1>{city.ville}</h1>
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
              <Markers city={city} onClick={setPopupInfo} />
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
