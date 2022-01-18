import React from "react";
import pic from "../img/photo.jpeg"; // Tell webpack this JS file uses this image
import { useState } from "react";
import useCities from "../hooks/useCities.js";
import { ReactComponent as Culte } from "../svg/culte.svg";
import { ReactComponent as Monument } from "../svg/monument.svg";
import { ReactComponent as Musee } from "../svg/musee.svg";
import { ReactComponent as Place } from "../svg/place.svg";
import RandomCity from "./RandomCity";
import { Link } from "react-router-dom";
import useBreakpoint from "../hooks/useBreakpoint";

const Home = () => {
  const [open, setOpen] = useState(false);
  const cities = useCities();

  const bp = useBreakpoint();
  return (
    <>
      <div className="flex justify-center lg:w-4/6 lg:max-w-2xl lg:max-h-sm">
        <div className="w-5/6 shadow-lg rounded-md bg-white flex mt-8 z-10">
          <div>
            <img className="rounded-t-md" src={pic} alt="montagne" />
            <div className="p-2 text-left group-hover:opacity-25 ">
              <p className="font-bold">Découvrez des villes.</p>
              <p className="font-bold">Organisez vos futurs voyages.</p>
              <p className="text-xs">
                Nous vous proposons de découvrir différentes villes dans les
                pays du monde entier.
              </p>
            </div>
            <div className="p-2 grid grid-cols-2 lg:grid-cols-1 lg:flex">
              <div className="grid grid-rows-2 lg:flex lg:items-baseline">
                <span className="flex items-baseline lg:mr-2">
                  Bâtiments religieux:
                  <Culte className="w-6" />
                </span>
                <span className="flex items-baseline lg:mr-2">
                  Lieu de culte:
                  <Musee className="w-6" />
                </span>
              </div>
              <div className="grid grid-rows-2 lg:flex">
                <span className="flex items-baseline lg:mr-2">
                  Monuments:
                  <Monument className="w-6" />
                </span>
                <span className="flex items-baseline">
                  <p>Places:</p>
                  <Place className="w-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="flex justify-center mt-8">
          <div
            onClick={() => setOpen(!open)}
            className="w-11/12 bg-yellowperso text-blueperso rounded-full flex py-4 px-2 cursor-pointer"
          >
            <p className="rounded-full bg-blueperso flex items-center justify-center text-white h-6 w-6 text-xs">
              !!!
            </p>
            <p className="ml-2"> Notre liste des villes:</p>
          </div>
        </div>
        <div className={`relative w-full h-64 ${!open && "hidden"}`}>
          <ul
            className={`pl-0 pt-0 mt-0 list-none mb-2 align-right text-center transition-all ease-out duration-500 overflow-hidden ${
              !open ? "h-0" : "h-full"
            }`}
          >
            {cities.map((city, key) => (
              <Link to={`/ville/${city.ville}`} key={key}>
                <li
                  className="relative inline-block mx-2 leading-normal w-90 m-0 mb-1 transition duration-1000"
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
        <div className="flex justify-center items-center">
          {bp === "sm" || (bp === "xs" && <RandomCity />)}
        </div>
      </>
    </>
  );
};

export default Home;
