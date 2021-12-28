import React from "react";
import pic from "../img/photo.jpeg"; // Tell webpack this JS file uses this image
import { useState } from "react";
import useCities from "../hooks/useCities.js";

const Home = () => {
  const [open, setOpen] = useState(true);
  const cities = useCities();

  return (
    <>
      <div className="w-full shadow-lg rounded-md bg-white  max-w-sm flex ml-14 content-div mt-8 z-10">
        <div>
          <img class="w-full image-cover rounded-t-md" src={pic} />
          <div class="p-2 m-4 w-16 h-16 text-center text-white float-right group-hover:opacity-25">
            <span class="text-base tracking-wide  font-bold border-b border-white font-sans"></span>
            <span class="text-xs tracking-wide font-bold uppercase block font-sans"></span>
          </div>
        </div>
      </div>
      <>
        {/* <div
          className="rounded-full bg-yellowperso mx-2 cursor-pointer mt-4 z-10 px-2"
          onClick={() => setOpen(!open)}
        >
          <Collapsible trigger="dzqdqzdqz" {...{ open, handleTriggerClick }}>
            <div className="bg-red-900 rounded-full mt-4">fzdknjdzq</div>
          </Collapsible>
        </div> */}

        <div className="flex justify-center my-2">
          <div
            onClick={() => setOpen(!open)}
            className="w-11/12 bg-yellowperso rounded-2xl flex"
          >
            click me
          </div>
        </div>
        <div className="relative w-full h-64">
          <ul
            className={`pl-0 pt-0 mt-0 list-none mb-2 align-right text-center transition-all delay-500 ease-out overflow-hidden ${
              !open ? "h-0" : "h-full"
            }`}
          >
            <li className="relative inline-block mx-2 leading-normal w-11/12 m-0 mb-1 transition delay-1000 shadow ">
              <a
                href="#"
                className="block bg-white lowercase text-2xl no-underline transition-colors delay-3000 rounded-2xl"
              >
                Section 01
              </a>
            </li>
            <li className="relative inline-block mx-2 leading-normal w-11/12 m-0 mb-1 transition back delay-1000 shadow ">
              <a
                href="#"
                className="block bg-white lowercase text-2xl no-underline transition-colors delay-3000 rounded-2xl"
              >
                Section 02
              </a>
            </li>
            <li className="relative inline-block mx-2 leading-normal w-11/12 m-0 mb-1 transition back delay-1000 shadow ">
              <a
                href="#"
                className="block bg-white lowercase text-2xl no-underline transition-colors delay-3000 rounded-2xl"
              >
                Section 03
              </a>
            </li>
            <li className="relative inline-block mx-2 leading-normal w-11/12 m-0 mb-1 transition back delay-1000 shadow ">
              <a
                href="#"
                className="block bg-white lowercase text-2xl no-underline transition-colors delay-3000 rounded-2xl"
              >
                Section 04
              </a>
            </li>
          </ul>
        </div>
      </>
    </>
  );
};

export default Home;
