import React from "react";
import { Link, useLocation } from "react-router-dom";
import useBreakpoint from "../hooks/useBreakpoint";
import RandomCity from "./RandomCity";
import pic from "../img/logo.png";
const Navbar = () => {
  const bp = useBreakpoint();
  const location = useLocation();

  return (
    <>
      <nav className="relative select-none bg-blueperso flex items-stretch py-2 items-center">
        <div className="flex flex-no-shrink items-stretch h-12">
          <img src={pic} alt="logo" className="ml-4" />

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
              location.pathname === "/apropos"
                ? "text-yellowperso"
                : "text-white"
            }`}
          >
            A propos
          </Link>
        </div>
        {bp !== "sm" && bp !== "xs" && <RandomCity />}
      </nav>
    </>
  );
};

export default Navbar;
