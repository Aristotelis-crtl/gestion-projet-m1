import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [title, setTitle] = useState("");
  const url = useLocation();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="bg-blueperso px-5 py-5 text-white text-center overflow-hidden flex justify-between">
        <h1 className="ml-20">{title}</h1>
        <button className="border rounded border-white px-2 hover:bg-white hover:text-black bg-blueperso focus:outline-none transition ease-in duration-300">
          Se connecter
        </button>
      </div>

      <nav
        className={
          sidebar
            ? "bg-blueperso w-64 h-screen flex justify-center fixed top-0 left-0 origin-top  duration-700 scale-y-0"
            : "bg-blueperso w-64 h-screen flex justify-center fixed top-0 -left-full origin-top  duration-700 scale-y-0"
        }
      >
        <div className="w-full">
          <div className="bg-blueperso w-full h-16 flex justify-between align-center px-2 pt-3">
            <p className="text-white px-2 text-xl mb-2">App admin</p>
            <span className="menu-bars text-white mt-1"></span>
          </div>
          <div className="text-white font-bold text-xl  w-10/12 flex flex-col space-y-1 justify-start align-center mx-4">
            <Link
              to="/"
              className="px-1 py-1 flex hover:bg-green-400 hover:border-4 hover:rounded-xl"
            >
              <span className="mx-2 ">Code promo</span>
            </Link>
            <Link
              to="/analytics"
              className="px-1 py-1 flex hover:bg-green-400 hover:border-4 hover:rounded-xl"
            >
              <span className="mx-2">Analytics</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
