import React from "react";
import Image from "next/image";
import { FaAlignJustify } from 'react-icons/fa';
import Link from "next/link";

function Nav(props) {
  return (
    <nav className="py-2 border-b-1 flex justify-center border-b-2 fixed top-0 bg-slate-100 max-w-2xl w-full" >
      <div>
        <Link href="/">
        <Image src="/images/logo.png" width="200" height="30" alt="로고" />
        </Link>
      </div>
      {/* <div className="">
        <FaAlignJustify size="20" />
      </div> */}
    </nav>
  );
}

export default Nav;
