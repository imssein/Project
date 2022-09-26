import Image from "next/image";
import Link from "next/link";
import React from "react";

function Recommendation({ value1, value2 }) {
  return (
    <div className="flex justify-center my-5 mx-3 ">
      <div className="md:mr-9 mr-2">
        {value1 && (
          <div>
            <Link href={`/restaurants/${value1.id}`}>
              <div>
                {value1.uploadFiles &&
                  value1.uploadFiles.map((item) => (
                    <div key={item.id}>
                      <Image
                        src={`/images/${item.savedFileName}`}
                        width={200}
                        height={150}
                        alt="식당 사진"
                      />
                    </div>
                  ))}
                <div className="text-left mt-3">
                  <div className="text-gray-3">{value1.name}</div>
                  <div className="text-sm text-gray">{value1.category}</div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    <div></div>
      <div className="">
        {value2 && (
          <div>
            <Link href={`/restaurants/${value2.id}`}>
              <div>
                {value2.uploadFiles &&
                  value2.uploadFiles.map((item) => (
                    <div key={item.id}>
                      <Image
                        src={`/images/${item.savedFileName}`}
                        width={200}
                        height={150}
                        alt="식당 사진"
                      />
                    </div>
                  ))}
                <div className="text-left mt-3">
                  <div className="text-gray-3">{value2.name}</div>
                  <div className="text-sm text-gray">{value2.category}</div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>         
    </div>
  );
}

export default Recommendation;
