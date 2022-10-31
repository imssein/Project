import React from "react";
import Link from "next/link";
import { data } from "../data";
import Image from "next/image";

function ShopList(props) {
  return (
    <div>
      {data &&
        data.map((item) => (
          <Link href={item.href} key={item.id}>
            <div className="cursor-pointer border-b-2 border-main flex justify-between py-3">
                <div className="flex">
                  <div className="mr-4 inline-block drop-shadow rounded-xl">
                  <Image src={item.img} width={60} height={60} alt="로고사진"/>

                  </div>
                {/* <p className="bg-main w-20 h-20 mr-4"></p> */}
                <p className="my-auto">{item.title}</p>
                </div>
                <p className="text-green text-xs my-auto">{item.hashTags}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ShopList;
