import React, { useState, useEffect } from 'react';
import OutlineBtn from '../../components/btn/OutlineBtn';
import { menuData } from './menuData';
import logoImg from '../../assets/images/full-logo.png'
import SingleMenu from './SingleMenu';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { UseUserAccount } from '../../blockchain/hooks/UseUserAccount';
import './Navbar.css';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { tokenBalance, address } = UseUserAccount();

  // Handle scroll to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`transition-all duration-300 ${isScrolled
        ? "fixed top-5 lg:top-0 left-0 right-0 z-50 mt-0 py-0 lg:py-2"
        : "mt-5"
        }`}
    >
      <nav className="container w-11/12 xl:w-full mx-auto relative z-50">
        <div className="border border-[#AAD8FF1A] flex items-center justify-between gap-5 p-4 rounded-2xl bg-black/40 backdrop-blur-sm">
          {/* logo  */}
          <div className="z-50">
            <img
              src={logoImg}
              alt=""
              className="size-[50px] lg:size-[60px] object-contain"
            />
          </div>

          {/* Desktop menu section  */}
          <ul className="hidden lg:flex items-center gap-10">
            {menuData.map((item) => (
              <SingleMenu key={item.id} item={item} />
            ))}
          </ul>

          {/* Desktop btn  */}
          <div className='hidden md:flex items-center gap-4'>
            {address ? <> <OutlineBtn title={`${tokenBalance.value} USDT`} />  <ConnectButton label="Connect Wallet" showBalance={false} /></> : <div className="custom-connect-btn border-primary border rounded-[10px] px-4 h-[50px] flex items-center justify-center gap-2 cursor-pointer">
              <ConnectButton label="Connect Wallet" showBalance={false} />
            </div>}

          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={toggleMobileMenu}
        >
          {/* Mobile Menu Content */}
          <div
            className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-linear-to-br from-[#8d6f23] to-[#212121] backdrop-blur-xl border-l border-[#AAD8FF1A] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full pt-24 px-8">
              {/* Mobile Menu Items */}
              <ul className="flex flex-col gap-6 mb-8">
                {menuData.map((item, index) => (
                  <li
                    key={item.id}
                    className={`transform transition-all duration-500 ease-out ${isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-20 opacity-0"
                      }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                    onClick={toggleMobileMenu}
                  >
                    <SingleMenu item={item} />
                  </li>
                ))}
              </ul>

              {/* Mobile Connect Wallet Button */}
              <div
                className={`mt-auto mb-10 transform transition-all duration-500 ease-out ${isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                  }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${menuData.length * 100}ms`
                    : "0ms",
                }}
              >


                <div className='flex md:hidden items-center gap-4'>
                  {address ? <> <OutlineBtn title={`${tokenBalance.value} USDT`} />  <ConnectButton label="Connect Wallet" showBalance={false} /></> : <div className="custom-connect-btn border-primary border rounded-[10px] px-4 h-[50px] flex items-center justify-center gap-2 cursor-pointer">
                    <ConnectButton label="Connect Wallet" showBalance={false} />
                  </div>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
