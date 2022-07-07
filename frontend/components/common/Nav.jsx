import React from "react";
import Image from "next/image";
import { FaAlignJustify } from 'react-icons/fa';

function Nav(props) {
  return (
    <nav className="border-b-1 flex justify-between border-b-2">
      <div>
        <Image src="/images/logo.png" width="200" height="30" />
      </div>
      <div className="">
        <FaAlignJustify size="20" />
      </div>
    </nav>
  );
}

export default Nav;
