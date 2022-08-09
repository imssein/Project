import React from "react";

function Title({title, description}) {
  return (
    <div className="py-6">
      <div className="font-extrabold text-2xl text-lime-700 pb-4">
        {title}
      </div>
      <div className="text-gray-800 mb-4 whitespace-pre">
        {description}
      </div>
    </div>
  );
}

export default Title;
