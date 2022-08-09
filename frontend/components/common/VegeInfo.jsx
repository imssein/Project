import Image from "next/image";
import React from "react";
function VegeInfo({src, title, description, infoSrc}) {
  return (
  
    <div className="text-center my-7">
        
      <div className="flex justify-center px-4 pb-8">
        <div className="mr-4 my-auto">
          <Image src={src} width={35} height={35} alt="노트" />
        </div>
        <div>
          <p className="font-bold text-xl">{title}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>

      <div className="border-y-2">
        <Image
          src={infoSrc}
          width="800"
          height="1000"
          alt={title}
        />
      </div>
    </div>
  );
}

export default VegeInfo;
