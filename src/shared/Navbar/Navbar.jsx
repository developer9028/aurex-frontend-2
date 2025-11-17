import React from 'react';
import OutlineBtn from '../../components/btn/OutlineBtn';
import { menuData } from './menuData';
import { Link } from 'react-router';
import logoImg from '../../assets/images/full-logo.png'
import SingleMenu from './SingleMenu';

const Navbar = () => {
    return (
        <div className='mt-5'>
            <nav className='container w-11/12 xl:w-full mx-auto'>
                <div className='border border-[#AAD8FF1A] flex items-center justify-between gap-5 p-4 rounded-[16px]'>
                    {/* logo  */}
                    <div>
                        <img
                            src={logoImg}
                            alt=""
                            className='h-[30px] lg:h-[50px] object-contain'
                        />
                    </div>

                    {/* menu section  */}
                    <ul className='hidden lg:flex items-center gap-10'>
                        {menuData.map(item => <SingleMenu key={item.id} item={item} />)}
                    </ul>

                    {/* btn  */}
                    <div>
                        <OutlineBtn
                            title='Connect Wallet'
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;