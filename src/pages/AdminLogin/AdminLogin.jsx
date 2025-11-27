import React, { useState } from 'react';
import FallBeamBackground from "../../components/lightswind/fall-beam-background";
import PrimaryBtn from '../../components/btn/PrimaryBtn';
import { useNavigate } from 'react-router';

const AdminLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login data:', formData);
        if (formData.email && formData.password) {
            navigate('/admin/dashboard');
        }
    }

    return (
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
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;