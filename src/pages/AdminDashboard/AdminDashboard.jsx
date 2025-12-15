import React from 'react';
import DashboardCard from '../../components/card/DashboardCard';
import chainIcon from '../../assets/icons/chain.svg'
import coinStackIcon from '../../assets/icons/coin-stack.svg'
import walletYellowIcon from '../../assets/icons/wallet-yellow.svg'
import withdrewIcon from '../../assets/icons/withdrew.svg'
import { UseAdminAccount } from '../../blockchain/hooks/UseAdminAccount';

const AdminDashboard = () => {
    const { numberOfNodeSlots, airdropARX, releasedTokenARX, totalUsersCount, totalUSDTRaisedFromNodeSales } = UseAdminAccount();
    return (
        <div>
            <div className='w-11/12 mx-auto mt-5 mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <DashboardCard
                        item={{
                            title: 'Node holders',
                            value: `${totalUsersCount}`,
                            icon: chainIcon,
                        }}
                    />

                    <DashboardCard
                        item={{
                            title: 'USDT Raised ',
                            value: `${totalUSDTRaisedFromNodeSales}`,
                            icon: chainIcon,
                        }}
                    />



                    <DashboardCard
                        item={{
                            title: 'Node Sold',
                            value: `${numberOfNodeSlots.claimed} / ${numberOfNodeSlots.reserve}`,
                            icon: chainIcon,
                        }}
                    />
                    <DashboardCard
                        item={{
                            title: 'Airdroped Tokens',
                            value: `${airdropARX.claimed} / ${airdropARX.reserve}`,

                            icon: coinStackIcon,
                        }}
                    />
                    <DashboardCard
                        item={{
                            title: 'Released Tokens',
                            value: `${releasedTokenARX.claimed} / ${releasedTokenARX.reserve}`,
                            icon: walletYellowIcon,
                        }}
                    />
                    {/* <DashboardCard
                        item={{
                            title: 'Ready to claim',
                            value: '125.00',
                            icon: withdrewIcon,
                        }}
                        isBtn
                    /> */}

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;