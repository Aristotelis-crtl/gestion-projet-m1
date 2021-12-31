import React from "react";
import pic from "../img/photo.jpeg"; // Tell webpack this JS file uses this image
import { useState } from "react";
import useCities from "../hooks/useCities.js";
import { ReactComponent as Culte } from "../svg/culte.svg";
import { ReactComponent as Monument } from "../svg/monument.svg";
import { ReactComponent as Musee } from "../svg/musee.svg";
import { ReactComponent as Place } from "../svg/place.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const cities = useCities();

  return (
    <>
      <div className="w-full shadow-lg rounded-md bg-white  max-w-sm flex ml-14 content-div mt-8 z-10">
        <div>
          <img className="w-full image-cover rounded-t-md" src={pic} />
          <div className="p-2 m-4 w-16 h-16 text-center text-white float-right group-hover:opacity-25">
            <span className="text-base tracking-wide  font-bold border-b border-white font-sans"></span>
            <span className="text-xs tracking-wide font-bold uppercase block font-sans"></span>
          </div>
        </div>
      </div>
      <>
        <div className="flex justify-center mt-8">
          <div
            onClick={() => setOpen(!open)}
            className="w-11/12 bg-yellowperso text-blueperso rounded-full flex py-4 px-2"
          >
            <p className="rounded-full bg-blueperso flex items-center justify-center text-white h-6 w-6 text-xs">
              !!!
            </p>
            <p className="ml-2"> Notre liste des villes:</p>
          </div>
        </div>
        <div className="relative w-full h-64">
          <ul
            className={`pl-0 pt-0 mt-0 list-none mb-2 align-right text-center transition-all delay-500 ease-out overflow-hidden ${
              !open ? "h-0" : "h-full"
            }`}
          >
            {cities.map((city, key) => (
              <Link to={`/ville/${city.ville}`} key={key}>
                <li
                  className="relative inline-block mx-2 leading-normal w-90 m-0 mb-1 transition delay-3000 "
                  key={key}
                >
                  <div>
                    <div className="flex bg-yellowperso text-2xl no-underline rounded-2xl pl-2 border border-black overflow-hidden">
                      <div className="flex items-center grid grid-cols-2">
                        <p className="text-left text-blueperso ml-1">
                          {city.ville}
                        </p>
                        <div className="flex grid grid-cols-4 items-center">
                          {["culte", "monument", "place", "musee"].map(
                            (type, i) => (
                              <span
                                className="flex grid grid-cols-2 items-center"
                                key={i}
                              >
                                <p className="text-blueperso transition transition-colors delay-300">
                                  {
                                    city.lieux.filter((c) => c.type === type)
                                      .length
                                  }
                                </p>
                                {
                                  {
                                    culte: <Culte className="w-6" />,
                                    monument: <Monument className="w-6" />,
                                    musee: <Musee className="w-6" />,
                                    place: <Place className="w-6" />,
                                  }[type]
                                }
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </>
    </>
  );
};

export default Home;
