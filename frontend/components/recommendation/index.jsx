import Image from "next/image";
import React from "react";
import List from "./common/List";

function Recommendation({ value1, value2 }) {
  return (
    <div className="flex justify-center my-5 mx-3">
      { value1 && ( 
      <List
        src={`/restaurants/${value1.id}`}
        image={
          value1.uploadFiles &&
          value1.uploadFiles.map((item) => (
            <div key={item.id}>
              <Image
                src={`/images/${item.savedFileName}`}
                width={200}
                height={150}
                alt="식당 사진"
              />
            </div>
          ))
        }
        name={value1.name}
        category={value1.category}
      />
      )} 
      { value2 && ( 
      <List
        src={`/restaurants/${value2.id}`}
        image={
          value2.uploadFiles &&
          value2.uploadFiles.map((item) => (
            <div key={item.id}>
              <Image
                src={`/images/${item.savedFileName}`}
                width={200}
                height={150}
                alt="식당 사진"
              />
            </div>
          ))
        }
        name={value2.name}
        category={value2.category}
      />
      )}
    </div>
  );
}

export default Recommendation;
