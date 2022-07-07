import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

function MainLayout({children}) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;