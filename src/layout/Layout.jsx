import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location?.pathname])

    // Extract and save referral code from URL
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const refCode = searchParams.get('ref');

        if (refCode) {
            localStorage.setItem('ref', refCode);
            console.log('Referral code saved:', refCode);
        }
    }, [location.search]);

    return (
        <>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
            <ToastContainer />
        </>
    );
};

export default Layout;