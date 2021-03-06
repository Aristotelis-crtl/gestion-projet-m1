import React from "react";
import { Marker } from "react-map-gl";
import marker from "../img/marker.png"; // Tell webpack this JS file uses this image
import { ReactComponent as Culte } from "../svg/culte.svg";
import { ReactComponent as Monument } from "../svg/monument.svg";
import { ReactComponent as Musee } from "../svg/musee.svg";
import { ReactComponent as Place } from "../svg/place.svg";
const Markers = (props) => {
  const { city, onClick } = props;

  return city.lieux.map((lieu, i) => (
    <Marker
      latitude={lieu.latitude}
      longitude={lieu.longitude}
      offsetLeft={-20}
      offsetTop={-10}
      key={i}
      onClick={() => onClick(lieu)}
    >
      {
        {
          culte: <Culte className="w-6 cursor-pointer" />,
          monument: <Monument className="w-6 cursor-pointer" />,
          musee: <Musee className="w-6 cursor-pointer" />,
          place: <Place className="w-6 cursor-pointer" />,
        }[lieu.type]
      }
    </Marker>
  ));
};

export default React.memo(Markers);
