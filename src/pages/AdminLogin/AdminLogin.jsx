import React, { useState, useEffect } from 'react';
import FallBeamBackground from "../../components/lightswind/fall-beam-background";
import PrimaryBtn from '../../components/btn/PrimaryBtn';
import { useNavigate } from 'react-router';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { toast, ToastContainer } from 'react-toastify';
import { config } from '../../blockchain/config';

const AdminLogin = () => {
    const navigate = useNavigate();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Check if connected wallet is admin and redirect
    useEffect(() => {
        if (address && address.toLowerCase() === config.OWNER.toLowerCase()) {
            navigate('/admin/dashboard');
        }
    }, [address, navigate]);

    const onSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login data:', formData);
        if (formData.email === import.meta.env.VITE_EMAIL && formData.password === import.meta.env.VITE_PASSWORD) {

            navigate('/admin/dashboard');
        }
        else {
            console.log("Invalid admin credentials");
            toast.error("Invalid admin credentials");
        }
    }

    return (<>
        <div className="relative w-full overflow-hidden min-h-screen">
            <FallBeamBackground
                lineCount={30}
                beamColorClass="#F2BE35"
            />

            <div className='w-full min-h-screen flex flex-col items-center justify-center'>
                <div className='border-[1px] border-[#aaa] rounded-[14px] glass-bg p-10 relative z-10 w-11/12 lg:w-5/12 mx-auto'>
                    <h2 className='text-[20px] lg:text-[30px] text-center text-white font-semibold'>
                        Admin login
                    </h2>
                    <form
                        onSubmit={onSubmit}
                        className='flex flex-col gap-6 items-center w-full mt-10'
                    >
                        <input
                            type="email"
                            className='border-[1px] border-[#aaa] rounded-[14px] w-full lg:w-9/12 mx-auto px-3 py-4 text-white text-[16px] font-normal focus:outline-0'
                            placeholder='Enter email'
                            value={formData?.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            className='border-[1px] border-[#aaa] rounded-[14px] w-full lg:w-9/12 mx-auto px-3 py-4 text-white text-[16px] font-normal focus:outline-0'
                            placeholder='Enter password'
                            value={formData?.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        <PrimaryBtn
                            title="Login"
                            type='submit'
                            className='w-full lg:w-9/12 mx-auto'
                        />
                    </form>

                    <div className='flex items-center gap-3 w-full lg:w-9/12 mx-auto my-6'>
                        <div className='flex-1 h-[1px] bg-[#aaa]'></div>
                        <span className='text-[#aaa] text-[14px]'>OR</span>
                        <div className='flex-1 h-[1px] bg-[#aaa]'></div>
                    </div>

                    <div className='w-full lg:w-9/12 mx-auto'>
                        <ConnectButton.Custom>
                            {({
                                account,
                                chain,
                                openConnectModal,
                                mounted,
                            }) => {
                                const ready = mounted;
                                const connected = ready && account && chain;

                                return (
                                    <div
                                        {...(!ready && {
                                            'aria-hidden': true,
                                            style: {
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                userSelect: 'none',
                                            },
                                        })}
                                        className='w-full'
                                    >
                                        {!address ? (
                                            <button
                                                onClick={openConnectModal}
                                                type="button"
                                                className='w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-[14px] px-6 py-4 text-[16px] font-semibold transition-all duration-200'
                                            >
                                                Connect Wallet to Login
                                            </button>
                                        ) : address.toLowerCase() !== config.OWNER.toLowerCase() ? (
                                            <div className='flex flex-col gap-3'>
                                                <p className='text-red-400 text-center text-[14px]'>Please connect admin wallet</p>
                                                <button
                                                    onClick={() => disconnect()}
                                                    type="button"
                                                    className='w-full bg-red-500 hover:bg-red-600 text-white rounded-[14px] px-6 py-4 text-[16px] font-semibold transition-all duration-200'
                                                >
                                                    Disconnect Wallet
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                );
                            }}
                        </ConnectButton.Custom>
                    </div>
                </div>
            </div>
        </div>

        <ToastContainer />

    </>
    );
};

export default AdminLogin;