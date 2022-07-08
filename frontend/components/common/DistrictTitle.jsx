import React from "react";

function DistrictTitle({ district }) {
  return (
    <div className="rounded-full bg-slate-200 inline-block font-semibold py-2 px-2 mr-2">
      {district}
    </div>
  );
}

export default DistrictTitle;
