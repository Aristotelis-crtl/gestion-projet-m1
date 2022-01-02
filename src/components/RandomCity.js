import React, { useState } from "react";
import useCities from "../hooks/useCities";
import { useHistory } from "react-router-dom";
import useBreakpoint from "../hooks/useBreakpoint";

const RandomCity = () => {
  const cities = useCities();
  const histo = useHistory();
  const [country, setCountry] = useState("France");
  const bp = useBreakpoint();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  const goToRandomCity = () => {
    const city = cities[getRandomInt(0, cities.length)];
    histo.push(`/ville/${city.ville}`);
  };

  return (
    <div
      className={`flex items-center justify-center flex-no-shrink flex-grow`}
    >
      <div
        className={`flex items-stretch ${
          bp === "sm" ||
          (bp === "xs" ? "bg-blueperso2 rounded-full mt-2" : "ml-auto")
        }`}
      >
        <div className="flex-no-grow flex-no-shrink relative py-2 xxs:px-4 leading-normal no-underline flex items-center hover:bg-grey-dark space-x-2">
          <p className="text-white text-xs lg:text-base">Pas d'idées?</p>
          <select
            className="bg-white rounded-lg shadow-xl flex items-center cursor-pointer p-1 text-gray-500 w-36"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>France</option>
            <option>USA</option>
          </select>
          <button
            className={`rounded-2xl text-white p-2 uppercase text-xs ${
              bp === "sm" || (bp === "xs" ? "bg-blueperso" : "bg-blueperso2")
            }`}
            onClick={() => goToRandomCity()}
          >
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
};
export default RandomCity;
