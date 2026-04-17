import React from "react";
import { Link, useLocation } from "react-router";
import logoImg from "../../assets/images/full-logo.png";
import xIcon from "../../assets/icons/cross.svg";
import { appSidebarMenuData } from "./appSidebarMenuData";

const AppSidebar = ({ onClose, isMobile = false }) => {
  const location = useLocation();

  return (
    <aside
      className={`
        h-screen bg-[#0B0B0C] border-r border-[#FFFFFF14]
        transition-transform duration-300 ease-in-out
        ${isMobile ? "w-[255px] animate-slide-in-left" : "w-[250px]"}
      `}
    >
      <div className="h-full p-5 flex flex-col">
        <div className="flex items-center justify-between gap-2 pb-6 border-b border-[#FFFFFF14]">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Aurex" className="h-10 object-contain" />
          </Link>

          {isMobile && (
            <button
              onClick={onClose}
              className="size-8 rounded-lg hover:bg-[#FFFFFF0F] grid place-items-center"
              aria-label="Close menu"
            >
              <img src={xIcon} alt="close" className="size-4" />
            </button>
          )}
        </div>

        <p className="text-[#8E9097] text-[13px] mt-6 mb-3 px-1">Menu</p>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-3">
            {appSidebarMenuData.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    onClick={isMobile ? onClose : undefined}
                    className={`
                      flex items-center justify-between rounded-[8px] px-3 py-3 border
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#F2BE35] text-[#131313] border-[#F2BE35]"
                          : "bg-[#1B1C1E] text-[#E9EAEB] border-transparent hover:border-[#FFFFFF22]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className={`size-[18px] ${isActive ? "opacity-90" : "opacity-70"}`}
                      />
                      <span className="text-[15px] font-medium">{item.title}</span>
                    </div>
                    <span className={`text-lg ${isActive ? "opacity-90" : "opacity-60"}`}>
                      ›
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
