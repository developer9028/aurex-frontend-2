import React, { useState } from "react";
import { Outlet } from "react-router";
import AppSidebar from "../shared/AppSidebar/AppSidebar";
import AppNavbar from "../shared/AppNavbar/AppNavbar";

const AppLayout = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const handleMobileMenuClick = () => {
        setIsMobileSidebarOpen(true);
    };

    const closeMobileSidebar = () => {
        setIsMobileSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#080808] text-white">
            <AppNavbar onMobileMenuClick={handleMobileMenuClick} />

            <div className="flex">
                <div className="hidden lg:block sticky top-0 h-screen z-20">
                    <AppSidebar />
                </div>

                {isMobileSidebarOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden"
                            onClick={closeMobileSidebar}
                        />
                        <div className="fixed inset-y-0 left-0 z-50 lg:hidden">
                            <AppSidebar onClose={closeMobileSidebar} isMobile={true} />
                        </div>
                    </>
                )}

                <main className="flex-1 min-w-0 p-4 lg:p-6 xl:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;