import React from "react";
import Link from "next/link";
import Image from "next/image";

function StoreList({ content }) {
  return (
      <div className="my-4">
        {Object.keys(content).map((key) => (
          <Link href={`/restaurants/${content[key].id}`} key={content[key].id}>
            <div className="border-b border-gray px-2 py-4 flex">
              {content[key].uploadFiles &&
                content[key].uploadFiles.map((item) => (
                  <div className="my-auto" key={item.id}>
                    <Image
                      src={`/images/${item.savedFileName}`}
                      width={130}
                      height={130}
                      alt="식당 사진"
                    />
                  </div>
                ))}

              <div className="pt-2 pb-5 ml-11 md:ml-16">
                <p className="text-lg mb-1">{content[key].name}</p>
                <p className="text-text-green font-bold mb-2">
                  {content[key].vegetarianTypes}
                </p>
                <p className="text-xs text-gray-600 mb-1">
                  {content[key].district}
                </p>
                {/* <p className="text-xs text-gray-600 mb-1">
                  {content[key].coords[0]}
                </p> */}
                <p className="mb-2">{content[key].category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
  );
}

export default StoreList;
