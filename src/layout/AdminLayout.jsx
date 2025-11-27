import React, { useState } from 'react';
import { Outlet } from 'react-router';
import AdminNavbar from '../shared/AdminNavbar/AdminNavbar';
import Sidebar from '../shared/Sidebar/Sidebar';

const AdminLayout = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const handleMobileMenuClick = () => {
        setIsMobileSidebarOpen(true);
    };

    const closeMobileSidebar = () => {
        setIsMobileSidebarOpen(false);
    };

    return (
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
    );
};

export default AdminLayout;