import React from 'react';
import { Link, useLocation } from 'react-router';

const SingleMenu = ({ item }) => {
    const location = useLocation();

    return (
        <li>
            <Link
                to={item.path}
                className={`text-[18px] font-normal 
                    ${location.pathname === item.path ? 'text-primary' : 'text-white hover:text-primary'}
                    `}
            >
                {item.title}
            </Link>
        </li>
    );
};

export default SingleMenu;