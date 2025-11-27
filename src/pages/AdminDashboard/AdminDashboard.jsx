import React from 'react';
import DashboardCard from '../../components/card/DashboardCard';
import chainIcon from '../../assets/icons/chain.svg'
import coinStackIcon from '../../assets/icons/coin-stack.svg'
import walletYellowIcon from '../../assets/icons/wallet-yellow.svg'
import withdrewIcon from '../../assets/icons/withdrew.svg'

const AdminDashboard = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto mt-5 mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
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
        </div>
    );
};

export default AdminDashboard;