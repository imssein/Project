import React from 'react';
import Nav from './Nav';
import SubMenu from './SubMenu';

function SubLayout({children}) {
    return (
        <div>
            <Nav />
            <div className='my-10'>
            {children}
            </div>
            
            <SubMenu />
        </div>
    );
}

export default SubLayout;