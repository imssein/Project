import Link from 'next/link';
import React from 'react';

function HashTagBtn({value}) {
    return (
        <div>
            <Link href={`/feed/hashTags/${value}`}>
            <div className="bg-gray-2 rounded-full mr-2 py-3 px-3 text-xs text-green cursor-pointer">
                #{value}
              </div>
            </Link>
        </div>
    );
}

export default HashTagBtn;