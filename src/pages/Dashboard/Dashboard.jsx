import React from 'react';
import dashboardImg from '../../assets/images/dashboard-bg.png'
import copyImg from '../../assets/images/copy.png'
import copyIcon from '../../assets/icons/copy.svg'
import PrimaryBtn from '../../components/btn/PrimaryBtn';
import OutlineBtn from '../../components/btn/OutlineBtn';
import qrIcon from '../../assets/icons/qr.svg';
import Title from '../../components/Title';
import DashboardCard from '../../components/card/DashboardCard';
import chainIcon from '../../assets/icons/chain.svg'
import coinStackIcon from '../../assets/icons/coin-stack.svg'
import walletYellowIcon from '../../assets/icons/wallet-yellow.svg'
import withdrewIcon from '../../assets/icons/withdrew.svg'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/lightswind/table";
import { noteHistory } from '../../assets/mock/dashboardData';


const Dashboard = () => {
    return (
        <div className='mb-60'>
            <div className='container w-11/12 xl:w-full mx-auto mt-8 lg:mt-16 relative z-10'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-5 gap-y-10'>
                    <div className='w-full lg:w-6/12'>
                        <img src={dashboardImg} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-full lg:w-4/12'>
                        <div className='border-[1px] border-[#F2BE3566] rounded-[12px] p-5 linear-bg-white box-shadow-yellow'>
                            <h2 className='text-[20px] lg:text-[32px] text-white font-sofia-semibold'>
                                My Referral Link
                            </h2>
                            <div className='mt-5 border-[1px] border-[#F2BE35] rounded-[16px] py-4 px-6 flex items-center gap-5 justify-between'>
                                <p className='text-white text-[16px] lg:text-[20px] font-sofia-normal'>
                                    http://oreon.ai/ref/0x7af....c3d2
                                </p>
                                <div>
                                    <img src={copyImg} alt="" />
                                </div>
                            </div>
                            <div className='mt-5 flex flex-col lg:flex-row gap-5'>
                                <PrimaryBtn
                                    icon={copyIcon}
                                    title='Copy'
                                    className='w-full'
                                />
                                <OutlineBtn
                                    icon={copyIcon}
                                    title='Copy'
                                    className='w-full'
                                />
                                <div className='border-[1px] border-[#F2BE35] rounded-[14px] flex items-center justify-center px-4 cursor-pointer'>
                                    <img src={qrIcon} alt="" className='size-[50px]' />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-white text-[12px] lg:text-[16px] font-sofia-normal text-center'>
                                    Earn <span className='text-[#F2BE35]'>10% Bonus</span> from every successful referral
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* my stats  */}
                <div className='mt-16 lg:mt-40'>
                    <Title
                        title='My Stats'
                    />
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10'>
                        <DashboardCard
                            item={{
                                title: 'Active Nodes',
                                value: '38',
                                icon: chainIcon,
                            }}
                        />
                        <DashboardCard
                            item={{
                                title: 'Claimable Tokens',
                                value: '140.55',
                                change: '+8.9%',
                                icon: coinStackIcon,
                            }}
                        />
                        <DashboardCard
                            item={{
                                title: 'Total Claimed',
                                value: '1.450.75',
                                icon: walletYellowIcon,
                            }}
                        />
                        <DashboardCard
                            item={{
                                title: 'Ready to claim',
                                value: '125.00',
                                icon: withdrewIcon,
                            }}
                            isBtn
                        />

                    </div>
                </div>

                {/* Referral Stats */}
                <div className='mt-16 lg:mt-40'>
                    <Title
                        title='Referral Stats'
                    />
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10'>
                        <DashboardCard
                            item={{
                                title: 'Total Referred',
                                value: '38',
                                icon: chainIcon,
                            }}
                        />
                        <DashboardCard
                            item={{
                                title: 'Earned Tokens',
                                value: '140.55',
                                change: '+8.9%',
                                icon: coinStackIcon,
                            }}
                        />
                        <DashboardCard
                            item={{
                                title: 'Referral Claimed',
                                value: '225.00',
                                icon: walletYellowIcon,
                            }}
                        />
                        <DashboardCard
                            item={{
                                title: 'Referral Rewards',
                                value: '25.00',
                                icon: withdrewIcon,
                            }}
                            isBtn
                        />

                    </div>
                </div>


                {/* Note History  */}
                <div className='mt-16 lg:mt-40 whitespace-nowrap'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead
                                    colSpan={2}
                                    className='text-center border-[1px] border-[#F2BE3533] bg-[#F2BE3588]'
                                >
                                    Note History
                                </TableHead>
                                <TableHead
                                    colSpan={2}
                                    className='text-center border-[1px] border-[#F2BE3533] bg-[#F2BE3588]'
                                >
                                    20 Nov 2025
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableHeader>
                            <TableRow>
                                <TableHead
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    Date
                                </TableHead>
                                <TableHead
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    Description
                                </TableHead>
                                <TableHead
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    Token Amount
                                </TableHead>
                                <TableHead
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    Status
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {noteHistory.map(x => <TableRow
                                key={x.id}
                            >
                                <TableCell
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    {x?.date}
                                </TableCell>
                                <TableCell
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    {x?.description}
                                </TableCell>
                                <TableCell
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    {x?.amount}
                                </TableCell>
                                <TableCell
                                    className='text-white text-[14px] text-center font-sofia-normal'
                                >
                                    {x?.status}
                                </TableCell>
                            </TableRow>)}

                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;