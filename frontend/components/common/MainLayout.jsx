import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

function MainLayout({children}) {
    return (
        <div>
            <Nav />
            <div className='my-10'>
            {children}
            </div>
            
            <Footer />
        </div>
    );
}

export default MainLayout;