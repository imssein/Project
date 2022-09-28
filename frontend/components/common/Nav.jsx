import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav(props) {
  return (
    <div className="px-7 py-4 text-gray flex justify-between ">
      <Link href="/">
        <Image src="/images/logo5.png" width="100" height="35" alt="로고" />
      </Link>
    </div>
  );
}

export default Nav;
