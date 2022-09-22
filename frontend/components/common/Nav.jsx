import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav(props) {
  return (
    <div className="px-7 py-4 text-gray flex justify-between ">
      <Link href="/">
        <Image src="/images/logo34.png" width="200" height="40" alt="로고" />
      </Link>
    </div>
  );
}

export default Nav;
