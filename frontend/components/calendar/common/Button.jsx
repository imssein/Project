import React from 'react';
import Link from 'next/link';

function Button( { title, subTitle, src, btnTitle, logo}) {
    return (
        <div className="bg-main py-3 rounded-2xl px-5">
        <div className="flex ">
            {logo}
        <div className="grow">
            <p className="font-semibold">{title}</p>
            <p className="text-xs mt-1">{subTitle}</p>
        </div>
        <Link href={`${src}`}>
        <button className="flex-none my-auto bg-text-color rounded-full py-2 px-3 text-gray-2">
            {btnTitle}
        </button>
        </Link>
        </div>
      </div>
    );
}

export default Button;