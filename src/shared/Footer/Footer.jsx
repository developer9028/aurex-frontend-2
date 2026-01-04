import React from "react";
import footerBgImg from "../../assets/images/footer-bg.png";
import logoImg from "../../assets/images/logo.png";
import sendIcon from "../../assets/images/send-icon.png";
import { socialData } from "../../assets/mock/socialData";
import { Link } from "react-router";
import { useScrollAnimation } from "../../components/hooks/use-scroll-animation";

const Footer = () => {
  const footerRef = useScrollAnimation("fadeUp", {
    duration: 1.2,
    scrollTrigger: { start: "top 90%" },
  });

  return (
    <footer id="footer" className="py-20 relative">
      <footer
        ref={footerRef}
        className="container w-11/12 xl:w-full mx-auto relative z-10"
      >
        <footer>
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="" className="size-[50px] object-contain" />
            <p className="text-[#FFFFFF] text-[18px] font-semibold">
              A U R E X
            </p>
          </div>
        </footer>

        <footer className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* company section  */}
          <div className="lg:col-span-2 w-full lg:w-8/12">
            <p className="text-white text-[16px] font-semibold my-5">
             AUREX — Built on Real Assets. Powered by AI. Structured for Global Value.
            </p>

            <p className="text-[#C8CACC] text-[16px] font-normal">
            Welcome to the next evolution of hybrid asset ecosystems.
            </p>

            <div className="flex items-center gap-5 border border-white rounded-[12px] py-2 px-3 mt-5">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full"
              />
              <img
                src={sendIcon}
                alt=""
                className="size-[40px] object-contain cursor-pointer"
              />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white text-[16px] font-semibold">Explore</h3>

            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">Home</p>
              </li>
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">
                  Dashboard
                </p>
              </li>
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">Stake</p>
              </li>
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">
                  Rewards
                </p>
              </li>
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">
                  Tokenomics
                </p>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-[16px] font-semibold">Support</h3>

            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">
                  Contact Us
                </p>
              </li>
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className="text-[#E9E9E9] text-[16px] font-normal">
                  Terms and Conditions
                </p>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-[16px] font-semibold">Follow Us</h3>

            <div className="mt-5 flex items-center gap-6">
              {socialData.map((x) => (
                <Link key={x.id} to={x.link}>
                  <img
                    src={x.icon}
                    alt=""
                    className="size-[24px] object-contain cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
        </footer>

        <footer className="mt-16">
          <p className="text-[#C8CACC] text-[16px] font-normal text-center mt-5">
            2025 © AUREX AI. All rights reserved.
          </p>
        </footer>
      </footer>

      <img
        src={footerBgImg}
        alt=""
        className="absolute bottom-0 left-0 w-full lg:h-full"
      />
    </footer>
  );
};

export default Footer;
