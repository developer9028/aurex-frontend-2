import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

const SingleMenu = ({ item }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        // If it's a hash link (section on home page)
        if (item.hagPath) {
            e.preventDefault();
            
            // If not on home page, navigate to home first
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation and DOM to update, then scroll
                setTimeout(() => {
                    const element = document.getElementById(item.hagPath);
                    if (element) {
                        const yOffset = -100; // Offset for fixed navbar
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 100);
            } else {
                // Already on home page, just scroll
                const element = document.getElementById(item.hagPath);
                if (element) {
                    const yOffset = -100; // Offset for fixed navbar
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <li>
            {item.hagPath ? (
                <a
                    href={`#${item.hagPath}`}
                    onClick={handleClick}
                    className={`text-[18px] font-normal text-white hover:text-primary cursor-pointer transition-colors duration-300`}
                >
                    {item.title}
                </a>
            ) : (
                <Link
                    to={item.path}
                    className={`text-[18px] font-normal 
                        ${location.pathname === item.path ? 'text-primary' : 'text-white hover:text-primary'}
                        transition-colors duration-300
                        `}
                >
                    {item.title}
                </Link>
            )}
        </li>
    );
};

export default SingleMenu;