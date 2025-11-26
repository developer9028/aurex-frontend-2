import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location?.pathname])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;