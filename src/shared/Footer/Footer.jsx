import React from 'react';
import footerBgImg from '../../assets/images/footer-bg.png'
import logoImg from '../../assets/images/logo.png'
import sendIcon from '../../assets/images/send-icon.png'
import { socialData } from '../../assets/mock/socialData';
import { Link, useLocation, useNavigate } from 'react-router';
import { useScrollAnimation } from '../../components/hooks/use-scroll-animation';

const Footer = () => {
    const footerRef = useScrollAnimation('fadeUp', { duration: 1.2, scrollTrigger: { start: 'top 90%' } });

    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation and DOM to update, then scroll
            setTimeout(() => {
                const element = document.getElementById('tokenomics');
                if (element) {
                    const yOffset = -100; // Offset for fixed navbar
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Already on home page, just scroll
            const element = document.getElementById('tokenomics');
            if (element) {
                const yOffset = -100; // Offset for fixed navbar
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    return (
        <footer id="footer" className='py-20 relative'>
            <footer ref={footerRef} className='container w-11/12 xl:w-full mx-auto relative z-10'>
                <footer>
                    <div className='flex items-center gap-2'>
                        <img src={logoImg} alt="" className='size-[50px] object-contain' />
                        <p className='text-[#FFFFFF] text-[18px] font-semibold'>
                            A U R E X
                        </p>
                    </div>
                </footer>

                <footer className='grid grid-cols-1 lg:grid-cols-5 gap-10'>

                    {/* company section  */}
                    <div className='lg:col-span-2 w-full lg:w-8/12'>

                        <p className='text-white text-[16px] font-semibold my-5'>
                            Join Our OREON AI
                        </p>

                        <p className='text-[#C8CACC] text-[16px] font-normal'>
                            Subscribe to our newsletter for expert tips, industry updates, marketing insights, and exclusive offers to elevate your brand success!
                        </p>

                        {/* <div className='flex items-center gap-5 border border-white rounded-[12px] py-2 px-3 mt-5'>
                            <input
                                type="text"
                                placeholder='Enter your email address'
                                className='w-full'
                            />
                            <img
                                src={sendIcon}
                                alt=""
                                className='size-[40px] object-contain cursor-pointer'
                            />
                        </div> */}
                    </div>

                    <div />

                    {/* Explore */}
                    <div>
                        <h3 className='text-white text-[16px] font-semibold'>
                            Explore
                        </h3>

                        <ul className='mt-5 flex flex-col gap-4'>
                            <li>
                                <Link to='/' className='text-[#E9E9E9] text-[16px] font-normal cursor-pointer hover:underline'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard' className='text-[#E9E9E9] text-[16px] font-normal cursor-pointer hover:underline'>
                                    Dashboard

                                </Link>

                            </li>
                            <li>
                                <Link to='/stake' className='text-[#E9E9E9] text-[16px] font-normal cursor-pointer hover:underline'>
                                    Stake
                                </Link>
                            </li>
                            <li>
                                <Link to='rewards' className='text-[#E9E9E9] text-[16px] font-normal cursor-pointer hover:underline'>
                                    Rewards
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={`#tokenomics`}
                                    onClick={handleClick}>
                                    <p className='text-[#E9E9E9] text-[16px] font-normal cursor-pointer hover:underline'>
                                        Tokenomics
                                    </p>
                                </a>

                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    {/* <div>
                        <h3 className='text-white text-[16px] font-semibold'>
                            Support
                        </h3>

                        <ul className='mt-5 flex flex-col gap-4'>
                            <li>
                                <p className='text-[#E9E9E9] text-[16px] font-normal'>
                                    Contact Us
                                </p>
                            </li>
                            <li>
                                <p className='text-[#E9E9E9] text-[16px] font-normal'>
                                    Privacy Policy
                                </p>
                            </li>
                            <li>
                                <p className='text-[#E9E9E9] text-[16px] font-normal'>
                                    Terms and Conditions
                                </p>
                            </li>
                        </ul>
                    </div> */}

                    {/* Follow Us */}
                    <div>
                        <h3 className='text-white text-[16px] font-semibold'>
                            Follow Us
                        </h3>

                        <div className='mt-5 flex items-center gap-6'>
                            {socialData.map(x => <Link
                                key={x.id}
                                to={x.link}
                            >
                                <img src={x.icon} alt="" className='size-[24px] object-contain cursor-pointer' />
                            </Link>)}
                        </div>
                    </div>

                </footer>

                <footer className='mt-16'>
                    <p className='text-[#C8CACC] text-[16px] font-normal text-center mt-5'>
                        2025 © OREON AI. All rights reserved.
                    </p>
                </footer>
            </footer>

            <img
                src={footerBgImg}
                alt=""
                className='absolute bottom-0 left-0 w-full lg:h-full'
            />
        </footer>
    );
};

export default Footer;