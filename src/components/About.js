import React from "react";
import pic from "../img/map-about.png";
import picLarge from "../img/map-about-large.png";
import useBreakpoint from "../hooks/useBreakpoint";

const About = () => {
  const bp = useBreakpoint();
  return (
    <div class="p-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg md:max-w-none">
        <img
          class="w-full md:max-h-64"
          src={bp === "sm" || bp === "xs" ? pic : picLarge}
          //src={bp === "lg" ? picLarge : pic}
          alt="carte"
        />
        <div class="px-6 py-4 bg-white">
          <div class="font-bold text-xl mb-2 ">A propos de nous</div>
          <div className="text-gray-700 grid grid-rows-3">
            <p class="text-base">
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
        <div class="px-6 pt-4 pb-2 bg-white">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #FollowMyTravel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #voyage
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #monuments
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
