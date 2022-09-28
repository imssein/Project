import React from "react";
import Link from "next/link";

function List({ src, image, name, category }) {
  return (
    <div className="md:mr-9 mr-2">
      <Link href={src}>
        <div>
         {image}
          <div className="text-left mt-3">
            <div className="text-gray-3">{name}</div>
            <div className="text-sm text-gray">{category}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default List;
