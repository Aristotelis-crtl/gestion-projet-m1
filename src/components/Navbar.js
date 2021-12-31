import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [title, setTitle] = useState("");
  const showSidebar = () => setSidebar(!sidebar);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  return (
    <>
      <nav className="relative select-none bg-blueperso lg:flex lg:items-stretch w-full py-2">
        <div className="flex flex-no-shrink items-stretch h-12">
          <Link
            to="/"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
          >
            Accueil
          </Link>
          <Link
            to="/apropos"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
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
              <select className="bg-white rounded-lg shadow-xl flex items-center cursor-pointer">
                <option>France</option>
                <option>USA</option>
              </select>
              <button className="bg-blueperso2 rounded-full text-white p-1 uppercase text-xs">
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
