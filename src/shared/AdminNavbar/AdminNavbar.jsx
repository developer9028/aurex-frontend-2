import React from 'react';
import logoImg from '../../assets/images/logo.png'
import logoutIcon from '../../assets/icons/logout.svg'
import menuIcon from '../../assets/icons/menu.svg'
import { Link, useNavigate } from 'react-router';
import { useDisconnect } from 'wagmi';

const AdminNavbar = ({ onMobileMenuClick }) => {
    const navigate = useNavigate();
    const { disconnect } = useDisconnect();

    const handleLogout = () => {
        disconnect();
        navigate('/admin/login');
    };

    return (
        <div className='border-b border-[#AAD8FF1A] py-5 px-10 flex items-center justify-between bg-black/40 backdrop-blur-sm'>
            <div className='flex items-center gap-5'>
                {/* menu icon or mobile  */}
                <div className='block lg:hidden'
                    onClick={onMobileMenuClick}
                >
                    <img src={menuIcon} alt="" className='size-[24px]' />
                </div>

                {/* title  */}
                <Link to='/' className='flex items-center gap-2 cursor-pointer'>
                    <img
                        src={logoImg}
                        alt=""
                        className='size-[30px]'
                    />
                    <p className='text-[18px] font-bold'>
                        Aurex Admin
                    </p>
                </Link>
            </div>

            <button onClick={handleLogout} className='cursor-pointer'>
                <img src={logoutIcon} alt="" className='size-[30px]' />
            </button>
        </div>
    );
};

export default AdminNavbar;