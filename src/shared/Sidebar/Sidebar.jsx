import React from 'react';
import { Link, useLocation } from 'react-router';
import xIcon from '../../assets/icons/cross.svg'
import { sidebarMenuData } from './sidebarmenuData';

const Sidebar = ({ onClose, isMobile = false }) => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div
            className={`
                h-screen lg:h-[90vh] bg-[#080808] border-r border-[#AAD8FF1A]
                transition-transform duration-300 ease-in-out
                ${isMobile ? 'w-64 animate-slide-in-left shadow-2xl' : 'w-64'}
            `}
        >
            <div className="flex flex-col h-full relative">
                {/* Close button for mobile */}
                {isMobile && (
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-[#FFFFFF0A] transition-colors absolute top-5 -right-15"
                        aria-label="Close sidebar"
                    >
                        {/* <X className="w-6 h-6 text-[#FAFAFB]" /> */}
                        <img src={xIcon} className='size-[20px]' />
                    </button>
                )}

                {/* Navigation Menu */}
                <nav className="flex-1 overflow-y-auto p-4 mt-0 lg:mt-5">
                    <ul className="space-y-2">
                        {sidebarMenuData.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={isMobile ? onClose : undefined}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-lg
                                        transition-all duration-200
                                        ${isActive(item.path)
                                            ? 'bg-[#FFE4761a] border border-[#FFE47666] text-[#F2BE35] font-semibold box-shadow-yellow'
                                            : 'text-[#C1C4CC] hover:bg-[#FFFFFF0A] hover:text-[#FAFAFB]'
                                        }
                                    `}
                                >
                                    <img src={item?.icon} alt="" className='size-[20px]' />
                                    <span className="text-[16px]">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-[#AAD8FF1A]">
                    <div className="border border-[#F2BE3566] rounded-[12px] p-4 linear-bg-white">
                        <p className="text-[14px] font-semibold text-[#FAFAFB]">Need Help?</p>
                        <p className="text-[12px] mt-1 text-[#C1C4CC]">Check our documentation</p>
                        <button className="mt-3 w-full px-3 py-2 bg-[#F2BE35] text-[#080808] text-[14px] font-semibold rounded-lg hover:bg-[#FFE476] transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;