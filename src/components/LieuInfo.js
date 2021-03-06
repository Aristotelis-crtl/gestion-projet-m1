import * as React from "react";
import { ReactComponent as Star } from "../svg/star.svg";

const LieuInfo = (props) => {
  const { info } = props;
  const displayName = `${info.nom}`;

  const stars = () => {
    return (
      <div className="flex justify-center mt-1">
        <Star fill={`${info.ratings > 0 && "yellow"}`} className={`w-4`} />
        <Star className="w-4" fill={`${info.ratings > 1 && "yellow"}`} />
        <Star className="w-4" fill={`${info.ratings > 2 && "yellow"}`} />
        <Star className="w-4" fill={`${info.ratings > 3 && "yellow"}`} />
        <Star className="w-4" fill={`${info.ratings > 4 && "yellow"}`} />
      </div>
    );
  };

  return (
    <>
      <div className="text-white">
        <div className="divide-y">
          <h1 className="">{displayName}</h1>
          <p>Description:</p>
        </div>
        <p className="text-xs">{info.description}</p>
        {stars()}
      </div>
    </>
  );
};

export default React.memo(LieuInfo);
