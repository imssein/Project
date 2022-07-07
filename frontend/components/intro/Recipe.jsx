import Image from 'next/image';
import React from 'react';

function Recipe(props) {
    return (
        <div className=''>
            <Image src="/images/recipe.png" width={400} height={200} />
        </div>
    );
}

export default Recipe;