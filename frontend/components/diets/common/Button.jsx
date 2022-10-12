import React from 'react';
import Link from 'next/link';

function Button({ src, title }) {
    return (
        <div className="mt-16 text-center mr-3">
        <Link href={src}>
          <button className="py-2 px-4 md:px-6 font-semibold rounded-lg bg-bg inline-block h-12 text-green">
            {title}
          </button>
        </Link>
      </div>
    );
}

export default Button;