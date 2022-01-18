import React from "react";
import pic from "../img/map-about.png";
import picLarge from "../img/map-about-large.png";
import useBreakpoint from "../hooks/useBreakpoint";

const About = () => {
  const bp = useBreakpoint();
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg md:max-w-none">
        <img
          className="w-full md:max-h-64"
          src={bp === "sm" || bp === "xs" ? pic : picLarge}
          //src={bp === "lg" ? picLarge : pic}
          alt="carte"
        />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl mb-2 ">A propos de nous</div>
          <div className="text-gray-700 grid grid-rows-3">
            <p className="text-base">
              Follow My Travel est un site créé et maintenu par Julian JABIN,
              Remi BLONDIN, Darick BITEGHE-BI-NGYE et Guillaume FAYET.
            </p>
            <p>
              Nous somme une équipe de quatre étudiant qui aiment voyager à
              travers le monde et partager les bons coins à visiter.
            </p>
            <p>
              Notre objectif est de vous faire vivre de beaux souvenir à travers
              nos lieux.
            </p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 bg-white">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #FollowMyTravel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #voyage
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #monuments
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
