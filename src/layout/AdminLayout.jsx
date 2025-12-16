import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import AdminNavbar from '../shared/AdminNavbar/AdminNavbar';
import Sidebar from '../shared/Sidebar/Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import { UseUserAccount } from '../blockchain/hooks/UseUserAccount';
import { config } from '../blockchain/config';
import { Link } from 'react-router';
const AdminLayout = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const { address, isConnected, tokenBalance } = UseUserAccount();

    const handleMobileMenuClick = () => {
        setIsMobileSidebarOpen(true);
    };

    const closeMobileSidebar = () => {
        setIsMobileSidebarOpen(false);
    };


    useEffect(() => {
        console.log("Admin Address: ", config.OWNER);
        console.log("Current Address: ", address);
    }, [address]);

    return (<>{
        address && address.toLowerCase() == config.OWNER.toLowerCase() ?

            (<>
                <div className="min-h-screen bg-[#080808]">
                    <AdminNavbar onMobileMenuClick={handleMobileMenuClick} />
                    <div className="flex">
                        {/* Desktop Sidebar - Always visible on lg screens and above */}
                        <div className="hidden lg:block">
                            <Sidebar />
                        </div>

                        {/* Mobile Sidebar - Drawer overlay */}
                        {isMobileSidebarOpen && (
                            <>
                                {/* Backdrop */}
                                <div
                                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                                    onClick={closeMobileSidebar}
                                />
                                {/* Drawer */}
                                <div className="fixed inset-y-0 left-0 z-50 lg:hidden">
                                    <Sidebar onClose={closeMobileSidebar} isMobile={true} />
                                </div>
                            </>
                        )}

                        {/* Main Content */}
                        <div className="flex-1 p-6">
                            <Outlet />
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </>) : (
                <div className="min-h-screen flex items-center justify-center bg-[#080808]">
                    <h2 className="text-white text-2xl">Access Denied. Please connect admin wallet. <Link to="/admin/login"><u> click here to admin Login page </u> </Link></h2>
                </div>
            )
    }
    </>
    );
};

export default AdminLayout;