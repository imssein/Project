import Image from "next/image";
import Link from "next/link";
import React from "react";

function VegeInfo(props) {
  return (
    <Link href="/information" className="pointer">
    <div className="pb-10 pt-5 flex justify-center">
      
        <div className="mr-4 my-auto">
          <Image src="/images/leaf.png" width={32} height={32} />
        </div>
        <div>
          <p className="text-sm text-gray-600">채식 종류와 지향성 정리</p>
          <p className="font-bold text-lg">채식 타입 안내</p>
        </div>
      
    </div>
    </Link>
  );
}

export default VegeInfo;
