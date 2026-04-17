import React from "react";
import { Link } from "react-router";
import menuIcon from "../../assets/icons/menu.svg";
import logoImg from "../../assets/images/logo.png";

const AppNavbar = ({ onMobileMenuClick }) => {
  return (
    <header className="lg:hidden sticky top-0 z-30 border-b border-[#FFFFFF14] bg-[#0A0A0A]/95 backdrop-blur-md">
      <div className="px-4 py-4 flex items-center justify-between gap-4">
        <button
          onClick={onMobileMenuClick}
          aria-label="Open menu"
          className="size-10 rounded-lg border border-[#FFFFFF22] grid place-items-center"
        >
          <img src={menuIcon} alt="menu" className="size-5" />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Aurex" className="size-7" />
          <span className="text-white font-sofia-semibold text-[16px]">AUREX APP</span>
        </Link>
      </div>
    </header>
  );
};

export default AppNavbar;
