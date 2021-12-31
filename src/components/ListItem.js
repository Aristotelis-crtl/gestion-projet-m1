import React from "react";
import { ReactComponent as Culte } from "../svg/culte.svg";

const ListItem = (city) => {
  console.log("OUIIII", city.lieux);
  const numbersofCulte =
    city.lieux && city.lieux.reduce((lieu) => lieu.type === "culte");
  const numbersofMonument =
    city.lieux && city.lieux.reduce((lieu) => lieu.type === "monument");
  const numbersofMuseum =
    city.lieux && city.lieux.reduce((lieu) => lieu.type === "musee");
  const numbersofPlace =
    city.lieux && city.lieux.reduce((lieu) => lieu.type === "place");

  console.log("dzqdqz", numbersofCulte);

  return (
    <li className="relative inline-block mx-2 leading-normal w-11/12 m-0 mb-1 transition delay-1000 shadow ">
      <div className="">
        <div className="flex bg-white lowercase text-2xl no-underline transition-colors delay-3000 rounded-2xl pl-2">
          <p>{city.ville}</p>
          <span className="flex">
            <p>{numbersofCulte}</p>
            <Culte className="w-4" />
          </span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
