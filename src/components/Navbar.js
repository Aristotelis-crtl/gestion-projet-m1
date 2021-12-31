import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useCities from "../hooks/useCities";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [title, setTitle] = useState("");
  const showSidebar = () => setSidebar(!sidebar);
  const [country, setCountry] = useState("France");
  console.log("country", country);
  const histo = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  const cities = useCities();
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  const goToRandomCity = () => {
    const city = cities[getRandomInt(0, cities.length)];
    console.log(city, "onclick");
    histo.push(`/ville/${city.ville}`);
  };
  return (
    <>
      <nav className="relative select-none bg-blueperso lg:flex lg:items-stretch w-full py-2">
        <div className="flex flex-no-shrink items-stretch h-12">
          <Link
            to="/"
            className={`flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:text-yellowperso ${
              location.pathname !== "/" ? "text-white" : "text-yellowperso"
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/apropos"
            className={`flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:text-yellowperso ${
              location.pathname === "/" ? "text-white" : "text-yellowperso"
            }`}
          >
            A propos
          </Link>
          <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <div className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark space-x-2">
              <p className="text-white">Pas d'idées?</p>
              <select
                className="bg-white rounded-lg shadow-xl flex items-center cursor-pointer p-1 text-gray-500 w-36"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>France</option>
                <option>USA</option>
              </select>
              <button
                className="bg-blueperso2 rounded-2xl text-white p-2 uppercase text-xs"
                onClick={() => goToRandomCity()}
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
