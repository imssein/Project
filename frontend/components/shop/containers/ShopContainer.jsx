import React from 'react';
import Shop from '../components/Shop';
import Image from 'next/image';
import { AiOutlineRight } from "react-icons/ai"
import Link from 'next/link';
function ShopContainer(props) {
    return (
    <div className="mt-8 rounded-xl py-4 px-4 bg-white mx-9">
        <div className='flex justify-between'>
      <div className="text-xl text-left  text-text-green font-semibold ">
        비건 온라인몰 바로가기
      </div>
      <Link href="/veganshop">
        <div className='text-sm my-auto flex'><p className='mr-1'>전체보기</p><AiOutlineRight className='my-auto' /></div>
      </Link>
      </div>
    <Shop />
    </div>
    );
}

export default ShopContainer;