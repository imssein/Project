import React from 'react';
import Nav from './Nav';
import SubMenu from './SubMenu';

function SubLayout({children}) {
    return (
        <div className='mx-auto max-w-2xl bg-gray-4 '>
            <Nav />
            <div className='h-full bg-gray-4 pb-36'>
            {children}
            </div>
            <div className='relative '>
            <SubMenu />
            </div>
        </div>
    );
}

export default SubLayout;