import React from 'react';
import MainMenu from './MainMenu';
import Nav from './Nav';

function MainLayout({children}) {
    return (
        <div className='mx-auto max-w-2xl bg-gray-4 '>
            <Nav />
            <div className='h-full bg-gray-4 pb-36'>
            {children}
            </div>
            <div className='relative '>
            <MainMenu />

            </div>
        </div>
    );
}

export default MainLayout;