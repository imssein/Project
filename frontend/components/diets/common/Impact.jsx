import React from "react";

function Impact({ title, calc, unit}) {
  return (
    <div className="flex">
      <p>{title}</p>
      <p className="text-green font-bold ml-11">{calc}</p>
      <p>{unit}</p>
    </div>
  );
}

export default Impact;
