import * as React from "react";

const LieuInfo = (props) => {
  const { info } = props;
  const displayName = `${info.nom}`;

  return (
    <div className="bg-blueperso">
      <div className="divide-y">
        {displayName}
        <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
        >
          Wikipedia
        </a>
      </div>
    </div>
  );
};

export default React.memo(LieuInfo);
